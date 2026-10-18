/* ==========================================================================
   AP Çalışma Kiti · Denemeler · ortak davranış (dijital sınav ekranı)
   Human Geography'deki deneme-2 sayfasının genelleştirilmiş hali: aynı ekran,
   ama sorular o ünitenin deneme-data.js dosyasındaki window.DENEME'den gelir.

   window.DENEME = {
     store:  "bpf-u1:v1:",        ünitenin kit-data.js'indeki store ile AYNI ön ek
     course: "AP Business with Personal Finance",
     unit:   "Unit 1 — Business, Competition, and New Ideas",
     topics: { "1.1": "İşletme Nedir?", … }     sonuçtaki konu dökümünde "1.1 · İşletme Nedir?"
     tests:  [ { no: 1, level: "Isınma", minutes: 20, rev: 1 (isteğe bağlı),
                 questions: [ { t: "1.1", q, o: [şıklar], a: doğru şık (0 = A), w: açıklama } ] }, … ]
   };
   Sorular ve şıklar İngilizce, açıklama (w) Türkçedir; açıklamada *yıldız* arasındaki
   sözcükler İngilizce terimdir. Şık sayısı sorudan okunur (2–5).

   Adres:  deneme/        → deneme seçme ekranı
           deneme/?n=3    → 3 numaralı deneme (başlamadıysa giriş, sürüyorsa sınav, bittiyse sonuç)

   Kayıt (localStorage), her profil ve her deneme için ayrı:
     <store><profil ya da "misafir">:deneme:<no>
       { v: 1, started, endAt, i, ans[], mark[], x[], done, used, elim, hideT, review, score, auto }
     Başlanmamış denemenin kaydı tutulmaz. Kit (kit.js) bu kayıtlardan yalnızca
     started / endAt / done alanlarını okur. Etkin profil kit ile ortaktır: <store>profile
   rev: bir denemenin soruları değişince artırılırsa o denemenin eski kayıtları geçersiz sayılır
        (verilmezse yalnızca soru sayısı değişince geçersiz olur).
   ========================================================================== */
(function () {
  "use strict";

  /* Profiller: _kit/kit.js içindeki PROFILES listesiyle AYNI olmalı (id + ad).
     Birini değiştirirsen ötekini de değiştir; yoksa kit bu sayfanın kayıtlarını bulamaz. */
  var PROFILES = [
    { id: "ada", name: "Ada" },
    { id: "murad", name: "Murad" },
    { id: "omer", name: "Ömer" },
    { id: "daghan", name: "Dağhan" },
    { id: "merve", name: "Merve" }
  ];

  var app = document.getElementById("app");
  if (!app) return;

  var L = "ABCDE";
  var D = window.DENEME && typeof window.DENEME === "object" ? window.DENEME : {};
  function metin(v) { return typeof v === "string" ? v : ""; }
  function validQ(q) {
    return !!q && typeof q.q === "string" && Array.isArray(q.o) && q.o.length >= 2 && q.o.length <= L.length &&
      typeof q.a === "number" && q.a >= 0 && q.a < q.o.length;
  }
  var COURSE = metin(D.course), UNIT = metin(D.unit);
  var UNIT_SHORT = UNIT.split(/\s+[—–-]\s+/)[0];           /* "Unit 1 — Business, …" → "Unit 1" */
  var TOPICS = D.topics && typeof D.topics === "object" ? D.topics : {};
  var STORE = metin(D.store) || ("deneme:" + location.pathname + ":");   /* store verilmemişse sayfa yine çalışsın; kit bu kayıtları göremez */
  var TESTS = [];
  (Array.isArray(D.tests) ? D.tests : []).forEach(function (t) {
    if (!t || typeof t.no !== "number" || !Array.isArray(t.questions)) return;
    var Q = t.questions.filter(validQ), k, max = 0;
    if (!Q.length) return;
    for (k = 0; k < Q.length; k++) if (Q[k].o.length > max) max = Q[k].o.length;
    TESTS.push({ no: t.no, level: metin(t.level), minutes: t.minutes > 0 ? t.minutes : Q.length, rev: t.rev, Q: Q, maxO: max });
  });

  /* ---------------- adres: ?n=<deneme no> ---------------- */
  var NO = (function () { var m = /[?&]n=([^&#]*)/.exec(location.search || ""); return m ? parseInt(m[1], 10) : NaN; })();
  var T = null, TI = -1;                                    /* açık deneme (yoksa seçme ekranı) */
  TESTS.forEach(function (t, k) { if (t.no === NO) { T = t; TI = k; } });
  var Q = T ? T.Q : [], N = Q.length, MIN = T ? T.minutes : 0;
  var WARN = MIN > 5 ? 300000 : 60000;                      /* son 5 dakika uyarısı; 5 dakikalık ya da daha kısa denemede son 1 dakika */

  /* ---------------- kayıt ---------------- */
  function sGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function sSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }
  function sDel(k) { try { window.localStorage.removeItem(k); } catch (e) {} }
  function nameOf(id) { for (var k = 0; k < PROFILES.length; k++) if (PROFILES[k].id === id) return PROFILES[k].name; return ""; }
  var pid = sGet(STORE + "profile"); if (!nameOf(pid)) pid = null;
  function key(no) { return STORE + (pid || "misafir") + ":deneme:" + no; }
  function fresh(t) {
    var a = [], m = [], x = [], i, s;
    for (i = 0; i < t.Q.length; i++) { a.push(-1); m.push(false); x.push([]); }
    s = { v: 1, started: 0, endAt: 0, i: 0, ans: a, mark: m, x: x, done: false, used: 0, elim: false, hideT: false, review: false, score: 0, auto: false };
    if (t.rev != null) s.rev = t.rev;
    return s;
  }
  function load(t) {
    var s = null, n = t.Q.length, i;
    try { s = JSON.parse(sGet(key(t.no)) || "null"); } catch (e) { s = null; }
    if (!s || s.v !== 1 || !Array.isArray(s.ans) || s.ans.length !== n || !Array.isArray(s.mark) || !Array.isArray(s.x)) return fresh(t);
    if (t.rev == null ? s.rev != null : s.rev !== t.rev) return fresh(t);          /* sorular değişmiş: eski kayıt geçersiz */
    for (i = 0; i < n; i++) if (!Array.isArray(s.x[i])) s.x[i] = [];
    if (!(s.i >= 0 && s.i < n)) s.i = 0;
    return s;
  }
  function store(t, s) { if (s.started || s.done) sSet(key(t.no), JSON.stringify(s)); else sDel(key(t.no)); }
  function scoreOf(t, s) { var c = 0, i; for (i = 0; i < t.Q.length; i++) if (s.ans[i] === t.Q[i].a) c++; return c; }
  /* süresi dolmuş, teslim edilmemiş deneme: kendiliğinden teslim edilmiş sayılır */
  function expire(t, s) {
    if (!s.started || s.done || Date.now() < s.endAt) return false;
    s.done = true; s.auto = true; s.score = scoreOf(t, s); s.review = false; s.used = t.minutes * 60000;
    return true;
  }

  var S = T ? load(T) : null, pop = false, showAll = false, warned = false;
  function save() { if (T) store(T, S); }

  /* ---------------- küçük yardımcılar ---------------- */
  function h(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function rich(s) { return h(s).replace(/\*([^*]+)\*/g, '<em class="term" lang="en">$1</em>'); }
  function fmt(ms) { var s = Math.max(0, Math.ceil(ms / 1000)), m = Math.floor(s / 60); s = s % 60; return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s; }
  function who() { return pid ? nameOf(pid) : "Misafir"; }
  function answered() { var c = 0, i; for (i = 0; i < N; i++) if (S.ans[i] >= 0) c++; return c; }
  function testName(t) { return "Deneme " + t.no + (t.level ? " · " + t.level : ""); }
  function topicName(t) { var n = metin(TOPICS[t]); return n ? t + " · " + n : String(t == null ? "" : t); }
  function level(t) {
    var v = Math.max(1, Math.min(5, t.no)), s = '<span class="lvl" role="img" aria-label="Zorluk ' + v + ' / 5">', k;
    for (k = 1; k <= 5; k++) s += '<i' + (k <= v ? ' class="on"' : '') + '></i>';
    return s + '</span>';
  }
  function names() {
    var s = '<div class="names">', k, p;
    for (k = 0; k < PROFILES.length; k++) { p = PROFILES[k]; s += '<button data-act="who" data-id="' + h(p.id) + '" class="' + (pid === p.id ? "on" : "") + '" aria-pressed="' + (pid === p.id) + '">' + h(p.name) + '</button>'; }
    return s + '</div>';
  }

  var BM = '<svg viewBox="0 0 16 18" aria-hidden="true"><path d="M2.5 1.5h11v15L8 12.5l-5.5 4z"/></svg>';
  var LEGEND = '<div class="lg"><span><i class="pin"></i> Current</span><span><i class="dsh"></i> Unanswered</span><span><i class="flag"></i> For Review</span></div>';

  function top(showTimer) {
    return '<header class="top"><div class="top-in">' +
      (T ? '<div class="tl"><b lang="en">Section 1: ' + h(UNIT) + '</b><span class="sub">' + h(testName(T)) + '</span></div>'
         : '<div class="tl"><b lang="en">' + h(COURSE || UNIT) + '</b><span class="sub">' + (COURSE ? '<span lang="en">' + h(UNIT) + '</span> · ' : '') + 'Denemeler</span></div>') +
      '<div class="tc">' + (showTimer ? '<div class="timer" id="tm" aria-live="off"></div><button class="pill" data-act="hide">' + (S.hideT ? "Show" : "Hide") + '</button>' : '') + '</div>' +
      '<div class="tr">' + (T ? '<a class="tool" href="./">Denemeler</a>' : '') + '<a class="tool" href="../">Çalışma kitine dön</a></div>' +
      '</div><div class="dash"></div></header>';
  }
  function grid() {
    var s = '<div class="grid">', i;
    for (i = 0; i < N; i++) s += '<button class="gq' + (S.ans[i] >= 0 ? " ans" : "") + (!S.review && i === S.i ? " cur" : "") + (S.mark[i] ? " mk" : "") + '" data-act="go" data-i="' + i + '" aria-label="Question ' + (i + 1) + (S.ans[i] >= 0 ? ", answered" : ", unanswered") + (S.mark[i] ? ", marked for review" : "") + '">' + (i + 1) + '</button>';
    return s + '</div>';
  }
  function navTitle() { return 'Section 1: ' + h(UNIT_SHORT || UNIT) + ' Questions'; }

  /* ======================================================================
     DENEME SEÇME EKRANI  (adreste n yokken)
     ====================================================================== */
  function vList() {
    var cards = "", k, t, s, st, now = Date.now();
    for (k = 0; k < TESTS.length; k++) {
      t = TESTS[k]; s = load(t);
      if (expire(t, s)) store(t, s);
      if (s.done) st = '<span class="tst ok"><b>' + s.score + ' / ' + t.Q.length + '</b>son puan' + (s.auto ? ' · süre doldu' : '') + '</span>';
      else if (s.started) st = '<span class="tst run">devam ediyor · kalan <span class="left" data-end="' + s.endAt + '">' + fmt(s.endAt - now) + '</span></span>';
      else st = '<span class="tst">başlanmadı</span>';
      cards += '<li><a class="tcard" href="?n=' + t.no + '">' +
        '<span class="tno" aria-hidden="true">' + t.no + '</span>' +
        '<span class="tname">' + h(testName(t)) + '</span>' +
        '<span class="tmeta"><span>' + t.Q.length + ' soru · ' + t.minutes + ' dk</span>' + level(t) + '</span>' +
        st + '</a></li>';
    }
    if (!TESTS.length) cards = '<li><div class="card"><p class="lead">Denemeler yüklenemedi. Sayfayı yenilemeyi dene.</p></div></li>';
    return top(false) + '<main class="main">' +
      '<h1>Denemeler</h1>' +
      '<p class="lead"><span class="unit" lang="en">' + h(UNIT) + '</span>' + (UNIT ? '. ' : '') + 'Süreli ve İngilizce ' + TESTS.length + ' deneme; ekran, gerçek dijital sınavdaki gibi çalışır.</p>' +
      '<div class="card"><b>Sınava kim giriyor?</b>' + names() +
      '<p class="note">Sonuçlar ve süren denemeler seçtiğin isme göre gösterilir.</p></div>' +
      '<h2>' + h(who()) + ' için denemeler</h2>' +
      '<ol class="tests">' + cards + '</ol>' +
      '<p class="note">Denemeler giderek zorlaşır; sırayla çözmen önerilir. Hepsi açık, istediğinden başlayabilirsin.</p>' +
      '<div class="acts"><a class="btn ghost" href="../">Çalışma kitine dön</a></div>' +
      '</main>';
  }

  /* ======================================================================
     DENEME  (adreste n varken): giriş → sınav → kontrol → sonuç
     ====================================================================== */
  function vStart() {
    var per = Math.round(MIN * 60 / N), same = true, k;
    for (k = 1; k < N; k++) if (Q[k].o.length !== Q[0].o.length) same = false;
    return top(false) + '<main class="main">' +
      '<h1>' + h(testName(T)) + '</h1>' +
      '<p class="lead"><span class="unit" lang="en">' + h(UNIT) + '</span>' + (UNIT ? '. ' : '') + 'Ekran, gerçek dijital sınavdaki gibi çalışır. Süre, başlattığın anda işlemeye başlar.</p>' +
      '<div class="facts"><div><b>' + N + '</b><span>çoktan seçmeli soru' + (same ? ', ' + Q[0].o.length + ' şıklı' : '') + ', İngilizce</span></div>' +
      '<div><b>' + MIN + ' dk</b><span>süre; bitince kendiliğinden teslim edilir</span></div>' +
      '<div><b>' + (per >= 60 ? (Math.round(per / 6) / 10 + " dk").replace(".", ",") : per + " sn") + '</b><span>soru başına ortalama</span></div></div>' +
      '<div class="card"><b>Sınava kim giriyor?</b>' + names() +
      '<ul class="how"><li><b>Mark for Review:</b> emin olmadığın soruyu işaretle, sonra dön.</li><li><b>ABC düğmesi:</b> şık elemeyi açar; elediğin şıkkın üstü çizilir.</li><li><b>Question … of ' + N + ':</b> soru haritasını açar, istediğin soruya atlarsın.</li><li>Klavye: A–' + L.charAt(T.maxO - 1) + ' şık seçer, ← → sorular arasında gezer.</li><li>Cevaplar ve açıklamalar teslimden sonra gösterilir. Süre, sayfayı kapatsan da işlemeye devam eder.</li></ul>' +
      '<div class="acts"><button class="btn" data-act="start">Sınavı başlat</button><a class="btn ghost" href="./">Denemeler</a></div></div>' +
      '</main>';
  }
  function vTest() {
    var i = S.i, q = Q[i], o = "", k, sel, x;
    for (k = 0; k < q.o.length; k++) {
      sel = S.ans[i] === k; x = S.x[i].indexOf(k) >= 0;
      o += '<div class="orow"><button class="opt' + (sel ? " sel" : "") + (x ? " x" : "") + '" data-act="opt" data-k="' + k + '" aria-pressed="' + sel + '"><span class="ltr">' + L.charAt(k) + '</span><span class="otx" lang="en">' + h(q.o[k]) + '</span></button>' +
        (S.elim ? '<button class="xb" data-act="strike" data-k="' + k + '" aria-label="' + (x ? "Undo cross out " : "Cross out ") + L.charAt(k) + '">' + (x ? "Undo" : '<span class="xl">' + L.charAt(k) + '</span>') + '</button>' : '') + '</div>';
    }
    return top(true) + '<main class="main">' +
      '<div class="qh"><span class="qn">' + (i + 1) + '</span>' +
      '<button class="mark' + (S.mark[i] ? " on" : "") + '" data-act="mark" aria-pressed="' + S.mark[i] + '">' + BM + ' Mark for Review</button>' +
      '<button class="abc' + (S.elim ? " on" : "") + '" data-act="elim" aria-pressed="' + S.elim + '" title="Şık eleme">ABC</button></div>' +
      '<p class="qt" lang="en">' + h(q.q) + '</p>' + (q.fig ? '<div class="figslot" data-fig="' + i + '"></div>' : '') + o + '</main>' +
      (pop ? '<div class="pop" role="dialog" aria-label="Question navigator"><div class="ph"><b lang="en">' + navTitle() + '</b><button class="x" data-act="nav" aria-label="Close">×</button></div>' + LEGEND + grid() + '<div class="pc"><button class="btn ghost" data-act="review">Go to Review Page</button></div></div>' : '') +
      '<footer class="bot"><div class="dash"></div><div class="bot-in"><div class="who">' + h(who()) + '</div>' +
      '<button class="navpill" data-act="nav" aria-expanded="' + pop + '">Question ' + (i + 1) + ' of ' + N + ' <span class="chev">' + (pop ? "▾" : "▴") + '</span></button>' +
      '<div class="nb"><button class="btn ghost" data-act="back"' + (i === 0 ? " disabled" : "") + '>Back</button><button class="btn" data-act="next">Next</button></div></div></footer>';
  }
  function vReview() {
    var left = N - answered();
    return top(true) + '<main class="main"><h1>Check Your Work</h1>' +
      '<p class="lead">Süre bitene kadar istediğin soruya dönüp cevabını değiştirebilirsin. ' + (left ? '<b>' + left + ' soru boş.</b> ' : 'Bütün soruları cevapladın. ') + 'Hazırsan teslim et.</p>' +
      '<div class="card"><div class="ph"><b lang="en">' + navTitle() + '</b></div>' + LEGEND + grid() + '</div></main>' +
      '<footer class="bot"><div class="dash"></div><div class="bot-in"><div class="who">' + h(who()) + '</div><span></span>' +
      '<div class="nb"><button class="btn ghost" data-act="unreview">Back</button><button class="btn" data-act="submit">Submit</button></div></div></footer>';
  }
  function vResult() {
    var ok = S.score, i, k, topics = {}, order = [], t, rows = "", list = "", st, cls, n = 0;
    var next = TESTS[TI + 1] || null;
    for (i = 0; i < N; i++) {
      t = String(Q[i].t == null ? "" : Q[i].t); if (!topics[t]) { topics[t] = { ok: 0, n: 0 }; order.push(t); }
      topics[t].n++; if (S.ans[i] === Q[i].a) topics[t].ok++;
    }
    for (i = 0; i < order.length; i++) { t = topics[order[i]]; rows += '<tr><td>' + h(topicName(order[i])) + '</td><td><div class="meter"><i style="width:' + Math.round(100 * t.ok / t.n) + '%"></i></div></td><td>' + t.ok + ' / ' + t.n + '</td></tr>'; }
    for (i = 0; i < N; i++) {
      st = S.ans[i] === Q[i].a ? "ok" : S.ans[i] < 0 ? "em" : "no";
      if (!showAll && st === "ok") continue;
      n++;
      list += '<div class="rv"><div class="rh"><span class="qn">' + (i + 1) + '</span><span class="badge ' + st + '">' + (st === "ok" ? "Doğru" : st === "em" ? "Boş" : "Yanlış") + '</span><span>' + h(topicName(Q[i].t)) + '</span></div><p class="rq" lang="en">' + h(Q[i].q) + '</p>' + (Q[i].fig ? '<div class="figslot" data-fig="' + i + '"></div>' : '');
      for (k = 0; k < Q[i].o.length; k++) {
        cls = k === Q[i].a ? " c" : k === S.ans[i] ? " w" : "";
        list += '<div class="ro' + cls + '"><b>' + L.charAt(k) + '</b><span lang="en">' + h(Q[i].o[k]) + '</span>' + (k === Q[i].a ? '<span class="tag">doğru cevap</span>' : k === S.ans[i] ? '<span class="tag">senin cevabın</span>' : '') + '</div>';
      }
      list += (Q[i].w ? '<p class="why">' + rich(Q[i].w) + '</p>' : '') + '</div>';
    }
    if (!n) list = '<p class="lead">Yanlış ya da boş sorun yok. Hepsini görmek için “Bütün sorular”a bas.</p>';
    return top(false) + '<main class="main"><h1>Sonuç · ' + h(who()) + '</h1>' +
      '<div class="card"><div class="score"><b>' + ok + ' / ' + N + '</b><span>%' + Math.round(100 * ok / N) + ' · süre ' + fmt(S.used) + (S.auto ? ' · süre doldu, kendiliğinden teslim edildi' : '') + '</span></div>' +
      '<div class="acts"><button class="btn' + (next ? " ghost" : "") + '" data-act="retry">Yeniden çöz</button>' +
      (next ? '<a class="btn" href="?n=' + next.no + '">Sıradaki deneme</a>' : '') +
      '<a class="btn ghost" href="./">Denemeler</a><a class="btn ghost" href="../">Çalışma kitine dön</a></div></div>' +
      '<h2>Konu konu</h2><div class="card"><table class="tb">' + rows + '</table></div>' +
      '<h2>Sorular ve açıklamalar</h2><div class="seg"><button data-act="flt" data-v="0" class="' + (showAll ? "" : "on") + '">Yanlışlar ve boşlar</button><button data-act="flt" data-v="1" class="' + (showAll ? "on" : "") + '">Bütün sorular</button></div>' + list + '</main>';
  }

  /* ---------------- çizim ---------------- */
  /* her tıklamada ekran baştan çizilir; klavyeyle gezen odağını kaybetmesin diye aynı düğme yeniden odaklanır */
  function render() {
    var f = document.activeElement, sel = "", a, n;
    if (f && f !== document.body && app.contains(f) && f.getAttribute("data-act")) {
      sel = '[data-act="' + f.getAttribute("data-act") + '"]';
      a = ["data-k", "data-i", "data-id", "data-v"];
      for (n = 0; n < a.length; n++) if (f.hasAttribute(a[n])) sel += '[' + a[n] + '="' + f.getAttribute(a[n]) + '"]';
    }
    app.innerHTML = !T ? vList() : S.done ? vResult() : !S.started ? vStart() : S.review ? vReview() : vTest();
    fillFigs();
    if (sel) { try { f = app.querySelector(sel); if (f && !f.disabled) f.focus({ preventScroll: true }); } catch (e) {} }
    tick();
  }
  /* sorudaki şekil (fig): figs.js yüklü değilse ya da şekil bozuksa boş yer kalmaz */
  function fillFigs() {
    var slots = app.querySelectorAll(".figslot"), n, node, q;
    for (n = 0; n < slots.length; n++) {
      q = Q[+slots[n].getAttribute("data-fig")]; node = null;
      try { node = q && q.fig && window.APFig ? window.APFig.render(q.fig) : null; } catch (e) {}
      if (node) slots[n].appendChild(node); else slots[n].parentNode.removeChild(slots[n]);
    }
  }
  function finish(auto) {
    if (S.done) return;
    S.done = true; S.auto = !!auto; S.score = scoreOf(T, S); S.review = false; pop = false;
    S.used = Math.min(MIN * 60000, Date.now() - S.started);
    save(); render(); window.scrollTo(0, 0);
  }
  function toast(msg) {
    var t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); t.textContent = msg;
    document.body.appendChild(t); setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 4000);
  }
  function tick() {
    var r, el, w, left, k, e, over = false;
    if (!T) {                                               /* seçme ekranı: süren denemelerin kalan süresi */
      left = app.querySelectorAll(".left[data-end]");
      for (k = 0; k < left.length; k++) {
        e = parseInt(left[k].getAttribute("data-end"), 10) - Date.now();
        if (e <= 0) over = true; else left[k].textContent = fmt(e);
      }
      if (over) render();                                   /* süresi dolan deneme teslim edilmiş olarak görünsün */
      return;
    }
    if (!S.started || S.done) return;
    r = S.endAt - Date.now(); el = document.getElementById("tm"); w = r <= WARN;
    if (r <= 0) { finish(true); return; }
    if (w && !warned) { warned = true; toast(WARN === 300000 ? "5 dakika kaldı" : "1 dakika kaldı"); if (S.hideT) { S.hideT = false; save(); render(); return; } }
    if (el) { el.textContent = S.hideT ? "⏱" : fmt(r); el.className = "timer" + (w ? " warn" : ""); }
  }
  setInterval(tick, 250);

  function pick(k) {
    var i = S.i, p;
    if (k >= Q[i].o.length) return;
    S.ans[i] = S.ans[i] === k ? -1 : k;
    p = S.x[i].indexOf(k); if (p >= 0) S.x[i].splice(p, 1);
  }
  function move(d) {
    pop = false;
    if (d > 0 && S.i === N - 1) { S.review = true; return; }
    S.i = Math.max(0, Math.min(N - 1, S.i + d));
  }
  app.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-act]") : null, a, k, p;
    if (!b || b.disabled) return;
    a = b.getAttribute("data-act"); k = parseInt(b.getAttribute("data-k"), 10);
    if (a === "who") {                                      /* profil değişti: kit de bu profille açılır */
      if (T && S.started && !S.done) return;
      pid = b.getAttribute("data-id"); if (!nameOf(pid)) pid = null;
      if (pid) sSet(STORE + "profile", pid);
      if (T) S = load(T);
      render(); return;
    }
    if (!T) return;
    if (a === "start") { S = fresh(T); S.started = Date.now(); S.endAt = S.started + MIN * 60000; warned = false; window.scrollTo(0, 0); }
    else if (a === "opt") pick(k);
    else if (a === "strike") { p = S.x[S.i].indexOf(k); if (p >= 0) S.x[S.i].splice(p, 1); else { S.x[S.i].push(k); if (S.ans[S.i] === k) S.ans[S.i] = -1; } }
    else if (a === "mark") S.mark[S.i] = !S.mark[S.i];
    else if (a === "elim") S.elim = !S.elim;
    else if (a === "hide") S.hideT = !S.hideT;
    else if (a === "nav") pop = !pop;
    else if (a === "back") move(-1);
    else if (a === "next") move(1);
    else if (a === "go") { S.i = parseInt(b.getAttribute("data-i"), 10); S.review = false; pop = false; }
    else if (a === "review") { S.review = true; pop = false; }
    else if (a === "unreview") { S.review = false; S.i = N - 1; }
    else if (a === "submit") { p = N - answered(); if (!window.confirm(p ? p + " soru boş. Yine de teslim edilsin mi?" : "Sınav teslim edilsin mi?")) return; finish(false); return; }
    else if (a === "retry") { if (!window.confirm("Bu denemenin sonucu silinip sınav baştan başlasın mı?")) return; S = fresh(T); showAll = false; window.scrollTo(0, 0); }
    else if (a === "flt") { showAll = b.getAttribute("data-v") === "1"; }
    save(); render();
  });
  document.addEventListener("keydown", function (e) {
    if (!T || !S.started || S.done || S.review || e.metaKey || e.ctrlKey || e.altKey) return;
    var k = (e.key || "").toLowerCase(), n = "abcde".indexOf(k);
    if (k.length === 1 && n >= 0) pick(n);
    else if (k === "arrowright") move(1);
    else if (k === "arrowleft") move(-1);
    else if (k === "escape" && pop) pop = false;
    else return;
    e.preventDefault(); save(); render();
  });
  /* başka sekmede profil ya da kayıt değişirse seçme ekranı tazelensin */
  window.addEventListener("pageshow", function (e) { if (e.persisted && !T) { pid = sGet(STORE + "profile"); if (!nameOf(pid)) pid = null; render(); } });

  /* ---------------- başlangıç ---------------- */
  if (T) { try { if (/^Denemeler\b/.test(document.title)) document.title = document.title.replace(/^Denemeler\b/, "Deneme " + T.no); } catch (e) {} }
  if (T && S.started && !S.done && Date.now() >= S.endAt) finish(true); else render();
})();
