/* ==========================================================================
   AP Çalışma Kiti · ortak davranış (bütün dersler ve üniteler bu dosyayı kullanır)
   Akış: video → "Kendini dene" (kit-data.js) → "Ödev" (odev-data.js, varsa)
         → sıradaki bölüm … → deneme sınavı.
   Hiçbir adım kilitli değildir; bölüm listesinden her yere geçilebilir.
   Hareket: Motion (window.Motion) varsa onunla, yoksa CSS ile; "hareketi azalt"
   açıksa hareketsiz. İlerleme localStorage'da tutulur; depolama yoksa da çalışır.

   Üniteye özgü her şey o ünitenin kit-data.js dosyasındaki window.KIT'ten okunur.
   episodes[] ve final[] dışındaki alanlar isteğe bağlıdır; verilmeyen alan
   Human Geography · Unit 1'in davranışını verir (o ünite bu dosyanın ilk sahibidir):
     store      localStorage ön eki; her ünitede ayrı olmalı   varsayılan "hg-kit:v2:"
     course     dersin adı (sayfaya basılmaz; quiz alanının     varsayılan "Human Geography"
                varsayılanını belirler)
     unitLabel  ünite etiketi, ör. "Unit 2 — Marketing";        varsayılan "Unit 1"
                deneme sınavının alt başlığına "—" öncesi yazılır
     videoBase  video ve kapak dosyalarının adres ön eki        varsayılan "video/"
                (başka bir sitenin tam adresi de olabilir: "https://…/unit-1/")
     deneme2    ikinci deneme sınavının adresi ("deneme-2/")    yoksa menüde "Sınav 2" çıkmaz
     denemeler  { url: "deneme/", count: 5 } → sayfa içi deneme sınavı sunulmaz (final[] boş ya da
                eksik olabilir); onun yerine her şey ayrı "Denemeler" sayfasına bağlanır
                (_kit/bluebook.js). count = deneme sayısı; biten denemeler o sayfanın
                kayıtlarından okunur: <store><profil>:deneme:<1…count>     yoksa: sayfa içi sınav
     quiz       true → metinler sınıftaki gerçek quizden söz eder ("Quize hazırsın",
                "geçmiş quiz soruları" …); false → yansız metin
                varsayılan: yalnızca course "Human Geography" ise true
     episodes[].code  bölümün görünen etiketi, ör. "1.1"        yoksa iki haneli no ("03")
   ========================================================================== */
(function () {
  "use strict";

  /* Hesaplar: kişi bir kez adını ve e-postasını yazar (_kit/hesap.js). Her hesabın ilerlemesi ünite başına
     ayrı saklanır (localStorage: <KIT.store><hesap kimliği>:state) ve hesaba eşitlenir; başka cihazdan da açılır. */
  var H = window.HESAP || null;

  var KIT = window.KIT || {};
  var EPS = Array.isArray(KIT.episodes) ? KIT.episodes : [];
  var FINAL = Array.isArray(KIT.final) ? KIT.final : [];
  var stage = document.getElementById("sahne");
  if (!stage) return;

  var root = document.documentElement;
  var M = window.Motion || null;
  var RM = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  var ANIM = !!(M && typeof M.animate === "function") && !RM;
  var EXPO = [0.16, 1, 0.3, 1];
  function metin(v) { return typeof v === "string" ? v : ""; }   /* KIT alanı metin değilse boş say */
  var HG_STORE = "hg-kit:v2:", HG_COURSE = "Human Geography";
  var STORE = metin(KIT.store) || HG_STORE;   /* <ön ek><profil>:state  +  <ön ek>profile (son etkin profil)  +  <ön ek><profil>:deneme2 */
  var OLD_KEY = "hg-kit-v1";          /* Human Geography'nin profillerden önceki tek kaydı (silinir) */
  var COURSE = metin(KIT.course) || HG_COURSE;
  var UNIT = metin(KIT.unitLabel) || "Unit 1";
  var UNIT_SHORT = UNIT.split(/\s+[—–-]\s+/)[0];          /* "Unit 1 — Business, …" → "Unit 1" */
  var QUIZ = typeof KIT.quiz === "boolean" ? KIT.quiz : COURSE === HG_COURSE;
  var VBASE = metin(KIT.videoBase) || "video/";
  if (VBASE.charAt(VBASE.length - 1) !== "/") VBASE += "/";
  var DENEME2 = metin(KIT.deneme2);     /* boşsa ikinci deneme sınavı yok */
  /* denemeler: ayrı sayfadaki süreli denemeler; verilmişse sayfa içi deneme sınavının (N görünümü) yerini alır */
  var DEN = KIT.denemeler && typeof KIT.denemeler === "object" && metin(KIT.denemeler.url) ? KIT.denemeler : null;
  var DEN_URL = DEN ? DEN.url : "";
  var DEN_N = DEN && DEN.count > 0 ? Math.floor(DEN.count) : 0;
  var AB = ["A", "B", "C", "D", "E", "F"];
  var N = EPS.length;                 /* görünüm sırası: 0 … N-1 bölümler, N = deneme sınavı */
  var MAXV = DEN ? N - 1 : N;         /* denemeler varsa N görünümü yoktur: oraya giden her yol Denemeler sayfasına çıkar */
  var FINAL_ACCENT = "#FFC15E";
  var SPEEDS = [1, 1.25, 1.5];
  var SKIP = -1;                      /* ödevde "atlandı" işareti */

  if (ANIM) root.classList.add("motion-js");

  /* ---------------- küçük yardımcılar ---------------- */
  function own(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  /* bölüm etiketi: code ("1.1") varsa o; yoksa iki haneli no ("03"), sesli okunan metinlerde yalın no ("3") */
  function epCode(ep) { return ep.code == null || ep.code === "" ? "" : String(ep.code); }
  function epNo(ep) { return epCode(ep) || pad(ep.no); }
  function epSay(ep) { return epCode(ep) || String(ep.no); }
  /* 1–99 arası sayının yazıyla hali, cümle başı için büyük harfle ("Otuz", "Yirmi sekiz"); dışındakiler rakamla */
  function sayiAdi(n) {
    var B = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
    var O = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
    if (!(n >= 1 && n <= 99) || n !== Math.floor(n)) return String(n);
    var t = O[Math.floor(n / 10)] + (n >= 10 && n % 10 ? " " : "") + B[n % 10];
    return t.charAt(0).toLocaleUpperCase("tr") + t.slice(1);
  }
  function add(node, kids) {
    if (kids == null) return node;
    if (!Array.isArray(kids)) kids = [kids];
    kids.forEach(function (k) {
      if (k == null || k === false) return;
      node.appendChild(typeof k === "string" || typeof k === "number" ? document.createTextNode(String(k)) : k);
    });
    return node;
  }
  function el(tag, props, kids) {
    var n = document.createElement(tag), k, v;
    if (props) for (k in props) {
      if (!own(props, k)) continue;
      v = props[k];
      if (v == null || v === false) continue;
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else n.setAttribute(k, v === true ? "" : v);
    }
    return add(n, kids);
  }
  /* *yıldız* arasındaki sözcükler İngilizce terimdir */
  function rich(str) {
    str = String(str == null ? "" : str);
    var f = document.createDocumentFragment(), parts = str.split("*");
    if (parts.length % 2 === 0) { f.appendChild(document.createTextNode(str)); return f; }
    parts.forEach(function (p, k) {
      if (!p) return;
      f.appendChild(k % 2 ? el("span", { class: "en", lang: "en", text: p }) : document.createTextNode(p));
    });
    return f;
  }
  function arrow(left) { return el("i", { "aria-hidden": "true", text: left ? "←" : "→" }); }
  function btn(cls, kids, onClick) {
    var b = el("button", { class: cls, type: "button" }, kids);
    if (onClick) b.addEventListener("click", onClick);
    return b;
  }
  function dur(s) {
    var t = Math.max(5, Math.round(s / 5) * 5), m = Math.floor(t / 60), r = t % 60;
    return "≈ " + (m ? m + " dk" : "") + (m && r ? " " : "") + (r ? r + " sn" : "");
  }
  function hash(s) { var h = 5381, i = s.length; while (i) h = (h * 33) ^ s.charCodeAt(--i); return (h >>> 0).toString(36); }
  /* soruda isteğe bağlı şekil (fig): figs.js yüklü değilse ya da şekil bozuksa hiçbir şey çizilmez */
  function figNode(q) { try { return q && q.fig && window.APFig ? window.APFig.render(q.fig) : null; } catch (e) { return null; } }
  function qid(q) { return q._id || (q._id = hash(String(q.q) + "|" + (q.opts || []).join("|"))); }
  function validQ(q) {
    return !!q && typeof q.q === "string" && Array.isArray(q.opts) && q.opts.length >= 2 && q.opts.length <= AB.length &&
      typeof q.a === "number" && q.a >= 0 && q.a < q.opts.length;
  }
  function focusNode(n) { if (!n) return; try { n.focus({ preventScroll: true }); } catch (e) { try { n.focus(); } catch (e2) {} } }
  function scrollToNode(node, force) {
    if (!node) return;
    var r = node.getBoundingClientRect();
    if (!force && r.top >= 0 && r.top < window.innerHeight * 0.4) return;
    var y = Math.max(0, (window.pageYOffset || 0) + r.top - 14);
    try { window.scrollTo({ top: y, behavior: RM ? "auto" : "smooth" }); } catch (e) { window.scrollTo(0, y); }
  }

  if (!N) {
    var shell = document.getElementById("kit");
    if (shell) shell.hidden = false;
    stage.appendChild(el("div", { class: "card note" }, el("p", { text: "İçerik yüklenemedi. Sayfayı yenilemeyi dene." })));
    return;
  }
  EPS.forEach(function (e) { e.questions = (e.questions || []).filter(validQ); });
  FINAL = DEN ? [] : FINAL.filter(validQ);

  /* ---------------- hareket ---------------- */
  function fx(node, kind) {
    if (RM || !node) return;
    if (ANIM) {
      try {
        if (kind === "in") M.animate(node, { opacity: [0, 1], y: [14, 0] }, { duration: 0.45, ease: EXPO });
        else if (kind === "pop") M.animate(node, { scale: [1, 1.03, 1] }, { duration: 0.42, ease: "easeOut" });
        else if (kind === "shake") M.animate(node, { x: [0, -7, 6, -4, 3, 0] }, { duration: 0.42, ease: "easeOut" });
        return;
      } catch (e) {}
    }
    var c = "fx-" + kind;
    node.classList.remove(c); void node.offsetWidth; node.classList.add(c);
  }
  function fxEach(nodes) {
    if (RM || !nodes || !nodes.length) return;
    if (ANIM) {
      try { M.animate(nodes, { opacity: [0, 1], y: [10, 0] }, { duration: 0.38, ease: EXPO, delay: M.stagger ? M.stagger(0.05) : 0 }); return; } catch (e) {}
    }
    nodes.forEach(function (n, k) { n.style.animationDelay = (k * 50) + "ms"; n.classList.add("fx-in"); });
  }

  /* ---------------- durum + kayıt ---------------- */
  function finalSig() { return hash(FINAL.map(qid).join(",")); }
  function blank() {
    var s = { v: 1, cur: 0, speed: 1, tip: 0, out: {}, eps: {}, final: { ans: {}, i: 0, started: false, done: false, sig: "" } };
    EPS.forEach(function (e) { s.eps[e.slug] = { watched: false, step: "video", ans: {}, hw: {} }; });
    return s;
  }
  function numMap(src) {
    var out = {}, k;
    if (src && typeof src === "object") for (k in src) if (own(src, k) && typeof src[k] === "number" && isFinite(src[k])) out[k] = Math.floor(src[k]);
    return out;
  }
  function sanitize(raw) {
    var s = blank();
    if (!raw || typeof raw !== "object") return s;
    if (typeof raw.cur === "number" && raw.cur >= 0 && raw.cur <= N) s.cur = Math.min(Math.floor(raw.cur), MAXV);
    if (SPEEDS.indexOf(raw.speed) !== -1) s.speed = raw.speed;
    s.tip = raw.tip ? 1 : 0;
    s.out = numMap(raw.out);                                  /* soru kimliği → elenen şıkların bit maskesi */
    EPS.forEach(function (e) {
      var r = raw.eps && raw.eps[e.slug], t = s.eps[e.slug];
      if (!r || typeof r !== "object") return;
      t.watched = !!r.watched;
      if (r.step === "video" || r.step === "quiz" || r.step === "odev") t.step = r.step;
      t.ans = numMap(r.ans); t.hw = numMap(r.hw);
    });
    var f = raw.final;
    if (f && typeof f === "object") {
      s.final.ans = numMap(f.ans);
      s.final.started = !!f.started;
      s.final.sig = typeof f.sig === "string" ? f.sig : "";
      s.final.done = !!f.done && s.final.sig === finalSig();   /* sorular değiştiyse sonuç geçersiz */
      if (typeof f.i === "number" && f.i >= 0 && f.i < FINAL.length) s.final.i = Math.floor(f.i);
    }
    return s;
  }
  function sGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function sSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} if (H) H.yaz(k); }
  function sDel(k) { try { window.localStorage.removeItem(k); } catch (e) {} if (H) H.sil(k); }
  function stateKey(id) { return STORE + id + ":state"; }

  var cache = {};                     /* profil → durum; depolama kapalıysa oturum boyunca burada yaşar */
  var active = null;                  /* etkin profil; null iken "Kim çalışıyor?" ekranı görünür */
  var state = blank();
  function profileState(id) {
    if (!cache[id]) {
      var raw = null;
      try { raw = JSON.parse(sGet(stateKey(id)) || "null"); } catch (e) {}
      cache[id] = sanitize(raw);
    }
    return cache[id];
  }
  function save() { if (active) { sSet(stateKey(active.id), JSON.stringify(state)); ozet(); } }
  /* Gelişimim sayfası için ünite özeti: <ön ek><hesap>:ozet — yalnızca değişince yazılır */
  var lastOzet = "";
  function ozet() {
    if (!active || active.id === "misafir") return;
    var r = { v: 1, course: COURSE, unit: UNIT, url: window.location.pathname, n: N, done: 0, watched: 0, q: 0, ans: 0, ok: 0, cur: state.cur, curTitle: "" }, i, s;
    for (i = 0; i < N; i++) {
      s = quizStat(i); r.q += s.n; r.ans += s.ans; r.ok += s.ok;
      if (s.done) r.done++;
      if (epState(i).watched) r.watched++;
    }
    if (state.cur >= 0 && state.cur < N) r.curTitle = metin(EPS[state.cur].title);
    var js = JSON.stringify(r);
    if (js === lastOzet) return;
    lastOzet = js; r.t = Date.now();
    sSet(STORE + active.id + ":ozet", JSON.stringify(r));
  }
  (function cleanOld() {
    /* Yayın sırasında bütün ilerlemeler sıfırlandı: eski sürümlerin kayıtları taşınmaz, silinir.
       Bu kayıtlar yalnızca Human Geography'ye aittir; başka ön ekle çalışan ünitede dokunulmaz. */
    if (STORE !== HG_STORE) return;
    sDel(OLD_KEY);
    ["ada", "murad", "omer", "daghan", "merve"].forEach(function (id) { sDel("hg-kit:v1:" + id + ":state"); });
    sDel("hg-kit:v1:profile");
  })();
  var ui = { view: 0, token: 0, pick: null, tipQ: "" };

  function pickOf(map, q) {
    var v = map[qid(q)];
    return typeof v === "number" && (v === SKIP || (v >= 0 && v < q.opts.length)) ? v : null;
  }
  function epState(i) { return state.eps[EPS[i].slug]; }
  function quizStat(i) {
    var Q = EPS[i].questions, st = epState(i), r = { n: Q.length, ans: 0, ok: 0 };
    Q.forEach(function (q) { var p = pickOf(st.ans, q); if (p != null && p !== SKIP) { r.ans++; if (p === q.a) r.ok++; } });
    r.done = r.n > 0 && r.ans === r.n;
    return r;
  }
  /* ödev: window.ODEV = { ep01: [ { src, q, opts, a, why, wrong? } ], … } — dosya yoksa boş liste */
  function hwItems(i) {
    var O = window.ODEV, l = O && typeof O === "object" ? O[EPS[i].slug] : null;
    return Array.isArray(l) ? l.filter(validQ) : [];
  }
  function hwStat(i) {
    var H = hwItems(i), st = epState(i), r = { n: H.length, ok: 0, bad: 0, skip: 0, open: 0 };
    H.forEach(function (q) {
      var p = pickOf(st.hw, q);
      if (p == null) r.open++; else if (p === SKIP) r.skip++; else if (p === q.a) r.ok++; else r.bad++;
    });
    return r;
  }
  function finalStat() {
    var F = state.final, r = { n: FINAL.length, ans: 0, ok: 0 };
    FINAL.forEach(function (q) { var p = pickOf(F.ans, q); if (p != null && p !== SKIP) { r.ans++; if (p === q.a) r.ok++; } });
    return r;
  }

  /* Denemeler sayfasının kayıtları (bluebook.js yazar): <ön ek><profil>:deneme:<no> → { started, endAt, done, score, … }.
     Süresi dolmuş ama teslim ekranı henüz açılmamış deneme de bitmiş sayılır (o sayfa açılınca kendiliğinden teslim edilir). */
  function denStat() {
    var r = { done: 0, open: 0 }, id = active ? active.id : "misafir", k, d;
    for (k = 1; k <= DEN_N; k++) {
      d = null;
      try { d = JSON.parse(sGet(STORE + id + ":deneme:" + k) || "null"); } catch (e) { d = null; }
      if (!d || typeof d !== "object") continue;
      if (d.done || (d.started && d.endAt && Date.now() >= d.endAt)) r.done++; else if (d.started) r.open++;
    }
    return r;
  }
  function toDenemeler() { save(); try { window.location.assign(DEN_URL); } catch (e) { window.location.href = DEN_URL; } }

  /* ---------------- üst bölüm: ilerleme, devam et, bölüm listesi ---------------- */
  var $ = function (id) { return document.getElementById(id); };
  var stCh = $("stCh"), stOk = $("stOk"), stHw = $("stHw"), stHwBox = $("stHwBox"), stHwL = $("stHwL"), stEx = $("stEx");
  var bar = $("bar"), barFill = $("barFill"), resumeBtn = $("resume"), resumeHint = $("resumeHint");
  var navList = $("navList"), topMeta = $("topMeta");
  var lastBar = -1;
  /* not defterleri (defter/): videodan çalışmak istemeyenler için ayrı yol; KIT.defter === false ise gösterilmez */
  var DEFTER = KIT.defter !== false;
  if (DEFTER && resumeBtn && resumeBtn.parentNode) {
    resumeBtn.parentNode.insertBefore(el("a", { class: "btn ghost", href: "defter/", style: "margin-top:8px" }, "📓 Videosuz çalış: not defterleri"), resumeBtn.nextSibling);
  }
  if (DEN && stEx && stEx.parentNode) {               /* sayfadaki "deneme sınavı" kutusu biten deneme sayısını gösterir */
    var stExL = stEx.parentNode.querySelector("dd");
    if (stExL) stExL.textContent = "deneme tamamlandı";
  }
  /* dar ekranda bölümler ızgaradır (kit.css): tablette tek sıra, en çok 12 sütun (--nav-n);
     telefonda 6'dan çok bölüm iki sıraya bölünür, en çok 6 sütun (--nav-m). 12 bölümde: 12 ve 6. */
  if (navList) {
    navList.style.setProperty("--nav-n", String(Math.min(N, 12)));
    navList.style.setProperty("--nav-m", String(N <= 6 ? N : Math.min(6, Math.ceil(N / 2))));
  }

  function stat(node, big, small) {
    if (!node) return;
    node.textContent = "";
    add(node, [String(big), small ? el("small", { text: small }) : null]);
  }
  function resumeTarget() {
    var F = state.final, k, i, q, h, st;
    if (ui.view === N && F.started && !F.done) return { view: N };
    for (k = 0; k < N; k++) {
      i = ((ui.view === N ? 0 : ui.view) + k) % N;
      q = quizStat(i); h = hwStat(i); st = epState(i);
      if (!q.done) return { view: i, step: (st.watched || q.ans) ? "quiz" : "video" };
      if (h.open) return { view: i, step: "odev" };
    }
    return { view: N };
  }
  function stepName(s) { return s === "video" ? "video" : s === "odev" ? "ödev" : "Kendini dene"; }

  function refresh() {
    var chDone = 0, ok = 0, ans = 0, qTot = 0, hw = { n: 0, ok: 0, bad: 0, skip: 0, open: 0 }, touched = false, i, q, h;
    for (i = 0; i < N; i++) {
      q = quizStat(i); h = hwStat(i);
      if (q.done) chDone++;
      ok += q.ok; ans += q.ans; qTot += q.n;
      hw.n += h.n; hw.ok += h.ok; hw.bad += h.bad; hw.skip += h.skip; hw.open += h.open;
      if (q.ans || epState(i).watched || h.n - h.open) touched = true;
    }
    var F = state.final, fs = finalStat(), ds = DEN ? denStat() : null;
    if (F.started || F.done) touched = true;
    if (ds && (ds.done || ds.open)) touched = true;

    stat(stCh, chDone, "/" + N);
    stat(stOk, ok, ans ? "/" + ans : "");
    if (stHwBox) {
      stHwBox.hidden = !hw.n;
      stat(stHw, hw.ok, hw.ok + hw.bad ? "/" + (hw.ok + hw.bad) : "");
      if (stHwL) stHwL.textContent = "doğru · ödev" + (hw.skip ? " (" + hw.skip + " atlandı)" : "");
    }
    if (ds) stat(stEx, ds.done, DEN_N ? "/" + DEN_N : "");
    else if (F.done) stat(stEx, fs.ok, "/" + fs.n); else if (F.started && fs.ans) stat(stEx, fs.ans, "/" + fs.n + " yanıt"); else stat(stEx, "—");

    var total = qTot + hw.n + fs.n, got = ans + (hw.n - hw.open) + (F.done ? fs.n : fs.ans);
    var p = total ? Math.min(1, got / total) : 0;
    if (bar) bar.setAttribute("aria-valuenow", String(Math.round(p * 100)));
    if (barFill && p !== lastBar) {
      lastBar = p;
      if (ANIM) { try { M.animate(barFill, { scaleX: p }, { type: "spring", stiffness: 140, damping: 24 }); } catch (e) { barFill.style.transform = "scaleX(" + p + ")"; } }
      else barFill.style.transform = "scaleX(" + p + ")";
    }

    var t = resumeTarget(), allDone = chDone === N && (ds ? ds.done >= DEN_N : F.done);
    if (resumeBtn) {
      resumeBtn.textContent = "";
      add(resumeBtn, [allDone ? "Sonuçlarını gör " : DEN && t.view === N ? "Denemelere geç " : touched ? "Kaldığın yerden devam et " : epCode(EPS[0]) ? "İlk bölümden başla " : "Bölüm 1'den başla ", arrow()]);
    }
    if (resumeHint) {
      resumeHint.textContent = allDone ? (DEN ? "Bütün bölümler ve denemeler tamam." : "Bütün bölümler ve deneme sınavı tamam.") :
        t.view === N ? (DEN ? "Sıradaki: denemeler" : "Sıradaki: deneme sınavı") : "Sıradaki: Bölüm " + epNo(EPS[t.view]) + " · " + stepName(t.step);
    }
    drawNav();
  }

  /* misafir (hesapsız): yalnızca ilk bölüm açık; gerisi zincirli kilitle görünür */
  function isGuest() { return !!(active && active.misafir); }
  function locked(view) { return isGuest() && view !== 0; }
  function loginUrl(view, kayit) {
    var d = window.location.pathname + (view == null ? "" : "#" + (view >= N ? "sinav" : EPS[view].slug));
    return "/kitora/giris/?" + (kayit ? "mod=kayit&" : "") + "devam=" + encodeURIComponent(d);
  }
  var LOCK_SVG = '<svg viewBox="0 0 160 120" aria-hidden="true">' +
    '<g fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" opacity=".55">' +
    '<rect x="6" y="20" width="34" height="20" rx="10" transform="rotate(-22 23 30)"/>' +
    '<rect x="30" y="34" width="34" height="20" rx="10" transform="rotate(-22 47 44)"/>' +
    '<rect x="96" y="34" width="34" height="20" rx="10" transform="rotate(22 113 44)"/>' +
    '<rect x="120" y="20" width="34" height="20" rx="10" transform="rotate(22 137 30)"/></g>' +
    '<path d="M62 56v-12a18 18 0 0 1 36 0v12" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>' +
    '<rect x="50" y="54" width="60" height="50" rx="12" fill="currentColor"/>' +
    '<circle cx="80" cy="74" r="7" fill="var(--bg, #0B0B0C)"/><rect x="77" y="76" width="6" height="14" rx="3" fill="var(--bg, #0B0B0C)"/></svg>';
  var LOCK_MINI = "M7 11V8a5 5 0 0 1 10 0v3M6 11h12v9H6z";
  function viewLock(view) {
    var ep = view < N ? EPS[view] : null;
    var art = el("div", { class: "lock-art" }); art.innerHTML = LOCK_SVG;
    var title = el("h2", { class: "ch-title", tabindex: "-1", text: ep ? ep.title : "Deneme sınavı" });
    var g = el("a", { class: "btn primary", href: loginUrl(view) }, "Giriş yap");
    var k = el("a", { class: "btn ghost", href: loginUrl(view, true) }, "Ücretsiz hesap aç");
    stage.appendChild(el("article", { class: "chapter lock-view" }, [
      art,
      el("p", { class: "mono ch-no" }, el("b", { text: ep ? "Bölüm " + (epCode(ep) || pad(ep.no) + " / " + pad(N)) : "Sınav" })),
      title,
      el("p", { class: "lock-t", text: "Bu bölüm kilitli. İlk bölüm herkese açık; geri kalan bölümler, sorular ve denemeler hesabınla açılır. Hesap açmak bir dakika sürer ve ilerlemen kaydedilir." }),
      el("div", { class: "lock-acts" }, [g, k]),
      el("button", { class: "linkish", type: "button", text: "← İlk bölüme dön" })
    ]));
    stage.querySelector(".lock-view .linkish").addEventListener("click", function () { go(0, { scroll: true }); });
    return title;
  }

  function drawNav() {
    if (!navList) return;
    navList.textContent = "";
    EPS.forEach(function (ep, i) {
      var q = quizStat(i), h = hwStat(i), st = epState(i), on = ui.view === i;
      if (locked(i)) {
        var lb = btn("nav-b locked" + (on ? " on" : ""), [
          el("span", { class: "nav-no", text: epNo(ep) }),
          el("span", { class: "nav-t", text: ep.title }),
          el("span", { class: "nav-m" }, icon(LOCK_MINI, "nav-lock"))
        ], function () { go(i, { scroll: true }); });
        lb.setAttribute("aria-label", "Bölüm " + epSay(ep) + ": " + ep.title + ", kilitli, hesapla açılır");
        if (on) lb.setAttribute("aria-current", "true");
        navList.appendChild(el("li", null, lb));
        return;
      }
      var cls = "nav-b" + (on ? " on" : "") + (q.done ? " done" : (q.ans || st.watched || h.n - h.open ? " part" : ""));
      var label = "Bölüm " + epSay(ep) + ": " + ep.title +
        (q.done ? ", tamamlandı, " + q.ok + "/" + q.n + " doğru" : q.ans ? ", " + q.ans + "/" + q.n + " soru çözüldü" : st.watched ? ", video izlendi" : "") +
        (h.n ? ", ödev " + (h.n - h.open) + "/" + h.n : "");
      var b = btn(cls, [
        el("span", { class: "nav-no", text: epNo(ep) }),
        el("span", { class: "nav-t", text: ep.title }),
        el("span", { class: "nav-m", text: q.done ? q.ok + "/" + q.n : "" })
      ], function () { go(i, { scroll: true }); });
      b.setAttribute("aria-label", label);
      if (on) b.setAttribute("aria-current", "true");
      navList.appendChild(el("li", null, b));
    });
    if (DEN) {
      /* denemeler: sayfa içi sınav yerine Denemeler sayfasına bağlantı; "k / 5" = bu profilin bitirdiği deneme sayısı */
      var ds = denStat();
      if (isGuest()) {
        navList.appendChild(el("li", { class: "nav-final" }, el("a", { class: "nav-b locked", href: loginUrl(null), "aria-label": "Denemeler, kilitli, hesapla açılır" }, [
          el("span", { class: "nav-no", text: "Sınav" }), el("span", { class: "nav-t", text: "Denemeler" }), el("span", { class: "nav-m" }, icon(LOCK_MINI, "nav-lock"))
        ])));
        return;
      }
      navList.appendChild(el("li", { class: "nav-final" }, el("a", {
        class: "nav-b" + (DEN_N && ds.done >= DEN_N ? " done" : ds.done || ds.open ? " part" : ""), href: DEN_URL,
        "aria-label": "Denemeler" + (DEN_N ? ", " + ds.done + " / " + DEN_N + " deneme tamamlandı" : "") + (ds.open ? ", " + ds.open + " deneme devam ediyor" : "")
      }, [
        el("span", { class: "nav-no", text: "Sınav" }),
        el("span", { class: "nav-t", text: "Denemeler" }),
        el("span", { class: "nav-m", text: DEN_N ? ds.done + " / " + DEN_N : "" })
      ])));
    } else {
      var F = state.final, fs = finalStat(), onF = ui.view === N;
      var fb = btn("nav-b" + (onF ? " on" : "") + (F.done ? " done" : F.started ? " part" : ""), [
        el("span", { class: "nav-no", text: "Sınav" }),
        el("span", { class: "nav-t", text: "Deneme sınavı" }),
        el("span", { class: "nav-m", text: F.done ? fs.ok + "/" + fs.n : fs.n + " soru" })
      ], function () { go(N, { scroll: true }); });
      fb.setAttribute("aria-label", "Deneme sınavı, " + fs.n + " soru" + (F.done ? ", puan " + fs.ok + "/" + fs.n : F.started ? ", devam ediyor" : ""));
      if (onF) fb.setAttribute("aria-current", "true");
      navList.appendChild(el("li", { class: "nav-final" }, fb));
    }
    /* Deneme 2 (yalnızca KIT.deneme2 verilmişse): ayrı sayfa (süreli, zor); sonucu aynı profilin kaydından okunur */
    if (!DENEME2) return;
    if (isGuest()) {
      navList.appendChild(el("li", { class: "nav-final nav-d2" }, el("a", { class: "nav-b locked", href: loginUrl(null), "aria-label": "Deneme 2, kilitli, hesapla açılır" }, [
        el("span", { class: "nav-no", text: "Sınav 2" }), el("span", { class: "nav-t", text: "Deneme 2 · zor, süreli" }), el("span", { class: "nav-m" }, icon(LOCK_MINI, "nav-lock"))
      ])));
      return;
    }
    var d2 = null;
    try { d2 = JSON.parse(sGet(STORE + (active ? active.id : "misafir") + ":deneme2") || "null"); } catch (e) { d2 = null; }
    var d2n = d2 && Array.isArray(d2.ans) ? d2.ans.length : 0;   /* soru sayısı o sayfanın kaydından gelir */
    navList.appendChild(el("li", { class: "nav-final nav-d2" }, el("a", { class: "nav-b" + (d2 && d2.done ? " done" : d2 && d2.started ? " part" : ""), href: DENEME2 }, [
      el("span", { class: "nav-no", text: "Sınav 2" }),
      el("span", { class: "nav-t", text: "Deneme 2 · zor, süreli" }),
      el("span", { class: "nav-m", text: d2 && d2.done ? d2.score + (d2n ? "/" + d2n : "") : "30 dk" })
    ])));
  }

  /* ---------------- yönlendirme ---------------- */
  function viewFromHash() {
    var h = (location.hash || "").replace(/^#/, ""), i;
    if (h === "sinav") return DEN ? null : N;
    for (i = 0; i < N; i++) if (EPS[i].slug === h) return i;
    return null;
  }
  function go(view, opt) {
    opt = opt || {};
    if (DEN && view >= N) { toDenemeler(); return; }      /* sınav görünümü yok: Denemeler sayfasına git, kit kaldığı bölümde kalsın */
    ui.view = view; state.cur = view; save();
    var h = "#" + (view === N ? "sinav" : EPS[view].slug);
    if (location.hash !== h) {
      try { window.history[opt.replace ? "replaceState" : "pushState"](null, "", h); } catch (e) { try { location.hash = h; } catch (e2) {} }
    }
    render(opt);
  }
  window.addEventListener("hashchange", function () {
    var v = viewFromHash();
    if (!active || v == null || v === ui.view) return;
    ui.view = v; state.cur = v; save();
    render({ scroll: true });
  });

  function render(opt) {
    opt = opt || {};
    ui.token++; ui.pick = null;
    stage.textContent = "";
    root.style.setProperty("--accent", ui.view === N ? FINAL_ACCENT : (EPS[ui.view].accent || "#7C95FF"));
    var title = locked(ui.view) ? viewLock(ui.view) : ui.view === N ? viewFinal(opt) : viewChapter(ui.view, opt);
    refresh();
    if (opt.scroll) { scrollToNode(stage, true); focusNode(title); }
    if (!opt.initial) fx(stage.firstElementChild, "in");
  }

  /* ---------------- ortak soru parçaları ---------------- */
  function optBtn(k, text, lang) {
    return el("button", { class: "opt", type: "button" }, [
      el("span", { class: "opt-k", text: AB[k] }),
      el("span", { class: "opt-t", lang: lang || null }, rich(text)),
      el("span", { class: "opt-m", "aria-hidden": "true" })
    ]);
  }
  var NS = "http://www.w3.org/2000/svg";
  var I_X = "M6 6l12 12M18 6L6 18", I_UNDO = "M9 14L4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3";
  function icon(d, cls) {
    var g = document.createElementNS(NS, "svg"), p = document.createElementNS(NS, "path");
    g.setAttribute("viewBox", "0 0 24 24"); g.setAttribute("aria-hidden", "true"); g.setAttribute("class", cls);
    p.setAttribute("d", d); g.appendChild(p);
    return g;
  }
  /* şık eleme: elenen şıklar soru başına bit maskesi olarak saklanır; elemek cevap sayılmaz */
  function outMask(q) {
    var m = state.out[qid(q)], full = (1 << q.opts.length) - 1;
    return typeof m === "number" && m > 0 && (m & full) !== full ? (m & full) : 0;
  }
  function setOutMask(q, m) { if (m) state.out[qid(q)] = m; else delete state.out[qid(q)]; save(); }
  function clearOut(list) { list.forEach(function (q) { delete state.out[qid(q)]; }); }
  /* ipucu yalnızca ilk karşılaşılan soruda görünür; başka soruya geçince bir daha çıkmaz */
  function tipNode(q) {
    if (state.tip) return null;
    if (ui.tipQ && ui.tipQ !== qid(q)) { state.tip = 1; save(); return null; }
    ui.tipQ = qid(q);
    return el("p", { class: "fine tip", text: "İpucu: emin olmadığın şıkları ✕ ile eleyebilirsin." });
  }
  /* şık satırları: her satırda iki kardeş düğme — şıkkın kendisi ve yanında "ele / geri al" */
  function optionRows(q, lang, onChoose, onElim) {
    var locked = false;
    var list = el("div", { class: "opts", role: "group", "aria-label": "Şıklar" });
    var rows = q.opts.map(function (t, k) {
      var b = optBtn(k, t, lang);
      var x = el("button", { class: "opt-x", type: "button" }, [icon(I_X, "i-x"), icon(I_UNDO, "i-undo")]);
      b.addEventListener("click", function () { onChoose(k); });
      x.addEventListener("click", function () { toggle(k); });
      var row = el("div", { class: "opt-row" }, [b, x]);
      list.appendChild(row);
      return { row: row, b: b, x: x };
    });
    function left(m) { var c = 0, k; for (k = 0; k < q.opts.length; k++) if (!(m & (1 << k))) c++; return c; }
    function paint() {
      var m = outMask(q), n = left(m);
      rows.forEach(function (r, k) {
        var out = !!(m & (1 << k)), t = r.b.querySelector(".opt-t"), note = t.querySelector(".out-note");
        r.b.classList.toggle("is-out", out);
        if (out && !note) t.appendChild(el("span", { class: "sr out-note", text: " (elendi)" }));
        if (!out && note) t.removeChild(note);
        if (locked) return;
        if (out) r.b.setAttribute("aria-disabled", "true"); else r.b.removeAttribute("aria-disabled");
        r.x.setAttribute("aria-pressed", String(out));
        r.x.setAttribute("aria-label", (out ? "Şıkkı geri al: " : "Şıkkı ele: ") + AB[k]);
        r.x.setAttribute("title", out ? "Şıkkı geri al" : "Şıkkı ele");
        if (!out && n <= 1) r.x.setAttribute("aria-disabled", "true"); else r.x.removeAttribute("aria-disabled");
      });
    }
    function toggle(k) {
      if (locked) return;
      var m = outMask(q), bit = 1 << k;
      if (m & bit) m &= ~bit;
      else { if (left(m) <= 1) return; m |= bit; }            /* son kalan şık elenemez */
      setOutMask(q, m);
      paint();
      if (onElim) onElim(k, !!(m & bit));
    }
    paint();
    return {
      list: list,
      btns: rows.map(function (r) { return r.b; }),
      rows: rows.map(function (r) { return r.row; }),
      paint: paint,
      canPick: function (k) { return !locked && k >= 0 && k < q.opts.length && !(outMask(q) & (1 << k)); },
      lock: function () {
        locked = true;
        rows.forEach(function (r) {
          if (r.x.parentNode) r.x.parentNode.removeChild(r.x);
          r.row.classList.add("locked");
          r.b.setAttribute("aria-disabled", "true");
        });
      }
    };
  }
  function dotsRow(marks, cur, onJump, name) {
    var row = el("div", { class: "dots", role: "group", "aria-label": name + " arasında geçiş" });
    marks.forEach(function (m, k) {
      var said = m === "ok" ? "doğru" : m === "bad" ? "yanlış" : m === "skip" ? "atlandı" : "çözülmedi";
      var b = btn("dot" + (m ? " " + m : "") + (k === cur ? " on" : ""), String(k + 1), function () { onJump(k); });
      b.setAttribute("aria-label", "Soru " + (k + 1) + ", " + said);
      if (k === cur) b.setAttribute("aria-current", "true");
      row.appendChild(b);
    });
    return row;
  }
  /* açıklama kutusu: yanlışta belirgin (neden yanlış + doğrusu), doğruda kısa */
  function feedback(q, p, o) {
    var right = p === q.a, lang = o.whyLang || null;
    var box = el("div", { class: "fb " + (right ? "good" : "bad") });
    if (right) {
      box.appendChild(el("b", { text: "Doğru" }));
      if (q.why) {
        if (o.collapseRight) box.appendChild(el("details", { class: "fb-d" }, [el("summary", { text: "Açıklamayı göster" }), el("p", { lang: lang }, rich(q.why))]));
        else box.appendChild(el("p", { lang: lang }, rich(q.why)));
      }
      return box;
    }
    box.appendChild(el("b", null, ["Yanlış · doğru cevap ", el("span", { text: AB[q.a] })]));
    if (outMask(q) & (1 << q.a)) box.appendChild(el("p", { class: "fb-note", text: "Elediğin şık doğru cevaptı. Olur böyle; açıklamaya bir göz at." }));
    var own_ = q.wrong && typeof q.wrong === "object" ? q.wrong[p] : null;
    if (typeof own_ === "string" && own_) {
      box.appendChild(el("p", { class: "fb-row" }, [el("span", { class: "lb", text: AB[p] + " neden yanlış" }), el("span", { lang: lang }, rich(own_))]));
      if (q.why) box.appendChild(el("p", { class: "fb-row" }, [el("span", { class: "lb", text: "Doğrusu neden " + AB[q.a] }), el("span", { lang: lang }, rich(q.why))]));
    } else if (q.why) {
      box.appendChild(el("p", { class: "fb-row" }, [el("span", { class: "lb", text: "Neden " + AB[q.a] }), el("span", { lang: lang }, rich(q.why))]));
    }
    return box;
  }
  /* tek soru: seçince kilitlenir; doğru şık yeşil, yanlış seçim kırmızı */
  function questionCard(q, o) {
    var locked = o.picked != null && o.picked !== SKIP;
    var box = el("div", { class: "q" });
    if (o.src) box.appendChild(el("p", { class: "mono q-src", text: "Kaynak: " + o.src }));
    var stem = el("h3", { class: "q-text", tabindex: "-1", lang: o.lang || null }, rich(q.q));
    var R = optionRows(q, o.lang, choose);
    var btns = R.btns;
    var slot = el("div", { class: "fb-slot", role: "status" });
    add(box, [stem, figNode(q), locked ? null : tipNode(q), R.list, slot]);
    if (locked) show(o.picked, false); else ui.pick = choose;

    function choose(k) {
      if (locked || !R.canPick(k)) return;
      locked = true; ui.pick = null;
      show(k, true);
      if (o.onPick) o.onPick(k);
    }
    function show(p, live) {
      R.lock();
      btns.forEach(function (b, k) {
        var m = b.querySelector(".opt-m"), t = b.querySelector(".opt-t");
        if (k === q.a) { b.classList.add("is-correct"); m.textContent = "✓"; t.appendChild(el("span", { class: "sr", text: " (doğru cevap)" })); }
        else if (k === p) { b.classList.add("is-wrong"); m.textContent = "✕"; t.appendChild(el("span", { class: "sr", text: " (senin cevabın, yanlış)" })); }
        else b.classList.add("is-dim");
      });
      var f = feedback(q, p, o);
      slot.textContent = ""; slot.appendChild(f);
      if (live) { fx(btns[q.a], "pop"); if (p !== q.a) fx(btns[p], "shake"); fx(f, "in"); }
    }
    return { node: box, stem: stem, btns: R.rows };
  }
  function firstIndex(list, test) { for (var k = 0; k < list.length; k++) if (test(list[k], k)) return k; return -1; }

  /* video dosyası var mı? (HEAD isteği; dosya sonradan eklenince kendiliğinden görünür)
     cb(true) var · cb(false) yok · cb(null) bilinmiyor → video yine de takılır, açılamazsa
     <video>'nun kendi hata olayı "henüz eklenmedi" durumunu gösterir.
     Videolar başka sitedeyse (KIT.videoBase tam adres) istek CORS yüzünden düşebilir ya da
     sunucu HEAD'i geri çevirebilir: o zaman yalnızca kesin "yok" (404 / 410) yanıtına güvenilir. */
  var seenVideo = {};
  function videoUrl(slug, ext) { return VBASE + slug + "." + ext; }
  function crossOrigin(url) {
    try { return new URL(url, location.href).origin !== location.origin; } catch (e) { return /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(url); }
  }
  function probe(slug, cb) {
    if (seenVideo[slug]) { cb(true); return; }
    if (!window.fetch || location.protocol === "file:") { cb(null); return; }
    var done = false, url = videoUrl(slug, "mp4"), far = crossOrigin(url);
    function finish(v) { if (done) return; done = true; if (v) seenVideo[slug] = true; cb(v); }
    try {
      window.fetch(url, { method: "HEAD", cache: "no-store" }).then(function (r) {
        var ct = (r.headers && r.headers.get("content-type")) || "";
        if (far && !r.ok) { finish(r.status === 404 || r.status === 410 ? false : null); return; }
        finish(!!r.ok && !/text\/html/i.test(ct));
      }).catch(function () { finish(null); });
    } catch (e) { finish(null); }
    window.setTimeout(function () { finish(null); }, 6000);
  }

  /* ======================================================================
     BÖLÜM
     ====================================================================== */
  function viewChapter(i, opt) {
    var ep = EPS[i], st = epState(i), Q = ep.questions;
    var last = i === N - 1;
    var step = opt.step || st.step || "video";
    if (step === "odev" && !hwItems(i).length) step = "quiz";

    var seen = el("span", { class: "seen", text: "✓ video izlendi", hidden: !st.watched });
    var title = el("h2", { class: "ch-title", tabindex: "-1", text: ep.title });
    var head = el("header", { class: "ch-head" }, [
      el("p", { class: "mono ch-no" }, [
        el("b", { text: (ep.bonus ? "Bonus bölüm " : "Bölüm ") + (epCode(ep) || pad(ep.no) + " / " + pad(N)) }),
        epCode(ep) ? el("span", { text: pad(i + 1) + " / " + pad(N) }) : null,      /* etiket "1.1" ise sıra ayrı yazılır */
        el("span", { text: dur(ep.seconds || 0) }),
        seen
      ]),
      title,
      el("p", { class: "ch-en serif", lang: "en", text: ep.en || "" }),
      (ep.terms && ep.terms.length) ? el("ul", { class: "chips", lang: "en", "aria-label": "Anahtar terimler" },
        ep.terms.map(function (t) { return el("li", { class: "chip", text: t }); })) : null,
      DEFTER ? el("p", { style: "margin:6px 0 0" }, el("a", { class: "btn ghost sm", href: "defter/?b=" + ep.slug }, "📓 Bu bölümü videosuz çalış: not defteri →")) : null
    ]);
    var flow = el("div", { class: "flow", role: "group", "aria-label": "Bölüm adımları" });
    var panel = el("div", { class: "panel" });
    stage.appendChild(el("article", { class: "chapter" }, [head, flow, panel]));
    setStep(step, false);
    return title;

    function next() { go(last ? N : i + 1, { scroll: true }); }
    function nextLabel() { return last ? (DEN ? "Denemelere geç " : "Deneme sınavına geç ") : "Sıradaki bölüm: " + epNo(EPS[i + 1]) + " · " + EPS[i + 1].title + " "; }

    function drawFlow() {
      var hasHw = hwItems(i).length > 0, h = hwStat(i), n = 0;
      flow.textContent = "";
      function tab(key, long, short, ok, onClick) {
        n++;
        var b = btn(ok ? "ok" : "", [
          el("span", { class: "n", "aria-hidden": "true", text: ok ? "✓" : String(n) }),
          el("span", { class: "l", text: long }), el("span", { class: "s", "aria-hidden": "true", text: short })
        ], onClick);
        b.setAttribute("aria-label", long + (ok ? " (tamam)" : ""));
        if (key === step) b.setAttribute("aria-current", "step");
        flow.appendChild(b);
      }
      tab("video", "Video", "Video", st.watched, function () { setStep("video", true); });
      tab("quiz", "Kendini dene", "Sorular", quizStat(i).done, function () { setStep("quiz", true); });
      if (hasHw) tab("odev", "Ödev", "Ödev", h.open === 0, function () { setStep("odev", true); });
      tab("next", last ? (DEN ? "Denemeler" : "Deneme sınavı") : "Sıradaki bölüm", last ? (DEN ? "Denemeler" : "Sınav") : "Sıradaki", false, next);
    }

    function setStep(s, animate) {
      step = s; st.step = s; save();
      ui.pick = null;
      drawFlow();
      panel.textContent = "";
      if (s === "video") stepVideo(); else if (s === "odev") stepHw(); else stepQuiz();
      if (animate) { fx(panel, "in"); scrollToNode(flow, false); refresh(); }
    }
    function touched() { seen.hidden = !st.watched; drawFlow(); refresh(); }

    /* ---------- 1 · video ---------- */
    function stepVideo() {
      var video = null;
      var frame = el("div", { class: "frame", "data-state": "checking" });
      var phT = el("p", { class: "ph-t", text: "Video yükleniyor…" });
      var phS = el("p", { class: "ph-s" });
      frame.appendChild(el("div", { class: "ph", role: "status" }, [el("span", { class: "ph-no", "aria-hidden": "true", text: epNo(ep) }), phT, phS]));

      var speed = el("div", { class: "speed", role: "group", "aria-label": "Oynatma hızı", hidden: true });
      SPEEDS.forEach(function (s) {
        var b = btn("", String(s).replace(".", ",") + "×", function () {
          state.speed = s; save(); applySpeed();
          [].forEach.call(speed.children, function (c) { c.setAttribute("aria-pressed", String(c === b)); });
        });
        b.setAttribute("aria-pressed", String(state.speed === s));
        speed.appendChild(b);
      });
      /* 10 sn geri / ileri: düğmeler + video odaktayken ← → tuşları */
      var seek = el("div", { class: "speed seek", role: "group", "aria-label": "Videoda atla", hidden: true });
      [[-10, "−10 sn", "10 saniye geri"], [10, "+10 sn", "10 saniye ileri"]].forEach(function (d) {
        var b = btn("", d[1], function () { seekBy(d[0]); });
        b.setAttribute("aria-label", d[2]);
        seek.appendChild(b);
      });
      /* tam ekran: tarayıcı izin vermezse (gömülü önizleme gibi) sayfayı kaplayan "geniş mod"a düşer */
      var full = el("div", { class: "speed seek", role: "group", "aria-label": "Görünüm", hidden: true });
      var fullB = btn("", "⛶ Tam ekran", function () { goFull(); });
      fullB.setAttribute("aria-label", "Tam ekran");
      full.appendChild(fullB);
      var closeB = btn("wide-x", "✕ Kapat", function () { wide(false); });
      closeB.hidden = true;
      frame.appendChild(closeB);
      /* videonun üstündeki köşe düğmesi: tarayıcının kendi tam ekran simgesinin yerini alır */
      var fsB = btn("fs-x", "⛶", function () { goFull(); });
      fsB.setAttribute("aria-label", "Tam ekran");
      fsB.title = "Tam ekran";
      frame.appendChild(fsB);
      function isFs() { return !!(document.fullscreenElement || document.webkitFullscreenElement || (video && video.webkitDisplayingFullscreen)); }
      function label() {
        var on = isFs() || frame.classList.contains("wide");
        fullB.textContent = on ? "✕ Küçült" : "⛶ Tam ekran";
        fsB.textContent = on ? "✕" : "⛶";
        fsB.setAttribute("aria-label", on ? "Tam ekrandan çık" : "Tam ekran");
      }
      function wide(on) {
        frame.classList.toggle("wide", on);
        document.documentElement.classList.toggle("hg-wide", on);
        closeB.hidden = !on;
        label();
      }
      function exitFs() { try { (document.exitFullscreen || document.webkitExitFullscreen).call(document); } catch (e) {} }
      function goFull() {
        if (!video) return;
        if (isFs()) { exitFs(); return; }
        if (frame.classList.contains("wide")) { wide(false); return; }
        var done = false;
        function fallback() { if (done || isFs()) return; done = true; wide(true); }
        try {
          /* çerçevenin tamamı tam ekran olur: köşe düğmesi ve altyazılar görünür kalır */
          var req = frame.requestFullscreen || frame.webkitRequestFullscreen;
          if (req) { var r = req.call(frame); if (r && r.catch) r.catch(fallback); }
          else if (video.webkitEnterFullscreen) { video.webkitEnterFullscreen(); return; }   /* iPhone */
          else { fallback(); return; }
        } catch (e) { fallback(); return; }
        window.setTimeout(fallback, 450);
      }
      document.addEventListener("fullscreenchange", label);
      document.addEventListener("webkitfullscreenchange", label);
      if (!window.__hgWideEsc) {
        window.__hgWideEsc = true;
        document.addEventListener("keydown", function (e) {
          if (e.key !== "Escape") return;
          var w = document.querySelector(".frame.wide");
          if (!w) return;
          w.dispatchEvent(new Event("hgwideoff"));
        });
      }
      frame.addEventListener("hgwideoff", function () { wide(false); });
      frame.addEventListener("keydown", function (e) {
        if (!video || e.target !== video || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
        e.preventDefault(); e.stopPropagation();
        seekBy(e.key === "ArrowLeft" ? -10 : 10);
      }, true);
      var hint = el("p", { class: "fine", text: "Video bitince sorular kendiliğinden açılır." , hidden: true });
      var toQuiz = btn("btn primary", ["Sorulara geç ", arrow()], function () { setStep("quiz", true); });
      add(panel, [frame, el("div", { class: "v-bar" }, [el("div", { class: "v-l" }, [seek, speed, full, hint]), toQuiz])]);

      probe(ep.slug, function (ok) {
        if (!frame.isConnected) return;
        if (ok === false) missing(); else mount();
      });

      function applySpeed() {
        if (!video) return;
        try {
          if (video.defaultPlaybackRate !== state.speed) video.defaultPlaybackRate = state.speed;
          if (video.playbackRate !== state.speed) video.playbackRate = state.speed;
        } catch (e) {}
      }
      function seekBy(d) {
        if (!video) return;
        var t = (video.currentTime || 0) + d, max = isFinite(video.duration) && video.duration > 0 ? video.duration : null;
        if (t < 0) t = 0;
        if (max != null && t > max) t = max;
        try { video.currentTime = t; } catch (e) {}
      }
      /* dosya hiç açılamadıysa "henüz eklenmedi"; oynarken çıkan geçici hatada video yerinde kalır */
      function failed() { if (video && video.readyState > 0) return; missing(); }
      function mount() {
        video = el("video", { controls: true, playsinline: true, "webkit-playsinline": true, preload: "none", poster: videoUrl(ep.slug, "jpg") });
        video.setAttribute("aria-label", "Bölüm " + epSay(ep) + " videosu: " + ep.title);
        /* tarayıcının kendi tam ekran simgesi de açık kalır (normal tarayıcıda çalışır); köşedeki ⛶ düğmesi her ortamda çalışan yedektir */
        var src = el("source", { src: videoUrl(ep.slug, "mp4"), type: "video/mp4" });
        src.addEventListener("error", failed);
        video.addEventListener("error", failed);
        video.addEventListener("loadedmetadata", applySpeed);
        video.addEventListener("play", applySpeed);
        video.addEventListener("ended", ended);
        video.appendChild(src);
        frame.appendChild(video);
        frame.setAttribute("data-state", "ready");
        speed.hidden = false; seek.hidden = false; hint.hidden = false; full.hidden = false;
        applySpeed();
      }
      function missing() {
        if (video) { try { video.pause(); } catch (e) {} if (video.parentNode) video.parentNode.removeChild(video); video = null; }
        frame.setAttribute("data-state", "missing");
        phT.textContent = "Video henüz eklenmedi";
        phS.textContent = "Bu bölümün videosu hazırlanıyor. Beklemeden sorulara geçebilirsin.";
        speed.hidden = true; seek.hidden = true; hint.hidden = true; full.hidden = true;
        wide(false);
      }
      function ended() {
        st.watched = true; save(); touched();
        wide(false);
        try {
          if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
          else if (video && video.webkitDisplayingFullscreen && video.webkitExitFullscreen) video.webkitExitFullscreen();
        } catch (e) {}
        window.setTimeout(function () { if (frame.isConnected) setStep("quiz", true); }, RM ? 0 : 700);
      }
    }

    /* ---------- 2 · kendini dene ---------- */
    function stepQuiz() {
      if (!Q.length) { panel.appendChild(el("div", { class: "card note" }, el("p", { text: "Bu bölüm için soru eklenmedi." }))); return; }
      var first = firstIndex(Q, function (q) { return pickOf(st.ans, q) == null; });
      var qi = first === -1 ? Q.length : first;
      draw(false);

      function marks() { return Q.map(function (q) { var p = pickOf(st.ans, q); return p == null ? "" : p === q.a ? "ok" : "bad"; }); }
      function jump(k, focus) { qi = k; draw(true, focus !== false); }
      function draw(animate, focus) {
        panel.textContent = ""; ui.pick = null;
        var card = el("div", { class: "card" });
        panel.appendChild(card);
        var f = qi >= Q.length ? summary(card) : question(card);
        if (animate) { fx(card, "in"); scrollToNode(flow, false); if (focus) focusNode(f); }
      }
      function question(card) {
        var q = Q[qi], p = pickOf(st.ans, q), isLast = qi === Q.length - 1;
        var nextB = btn("btn " + (p == null ? "ghost" : "primary"), [isLast ? "Sonucu gör " : "Sonraki soru ", arrow()], function () { jump(qi + 1); });
        var qc = questionCard(q, {
          picked: p,
          onPick: function (k) {
            st.ans[qid(q)] = k; save();
            nextB.className = "btn primary";
            var old = card.querySelector(".dots"), fresh = dotsRow(marks(), qi, jump, "Sorular");
            if (old) old.parentNode.replaceChild(fresh, old);
            touched();
            focusNode(nextB);
          }
        });
        add(card, [
          el("div", { class: "q-top" }, [el("p", { class: "mono q-count", text: "Kendini dene · Soru " + (qi + 1) + " / " + Q.length }), dotsRow(marks(), qi, jump, "Sorular")]),
          qc.node,
          el("div", { class: "q-nav" }, [
            qi > 0 ? btn("btn ghost back-i", [arrow(true), " Önceki"], function () { jump(qi - 1); }) : el("span", { class: "sp" }),
            nextB
          ]),
          el("p", { class: "fine keys", text: "Klavye: A–" + AB[q.opts.length - 1] + " ya da 1–" + q.opts.length + " ile cevapla." })
        ]);
        if (p == null) fxEach(qc.btns);
        return qc.stem;
      }
      function summary(card) {
        var s = quizStat(i), h = hwStat(i);
        var head = el("p", { class: "mono q-count", tabindex: "-1", text: "Kendini dene · sonuç" });
        var list = el("div", { class: "sum-list" });
        Q.forEach(function (q, k) {
          var p = pickOf(st.ans, q), m = p == null ? "" : p === q.a ? "ok" : "bad";
          var b = btn("sum-item " + m, [
            el("span", { class: "m", "aria-hidden": "true", text: m === "ok" ? "✓" : m === "bad" ? "✕" : "–" }),
            el("span", null, [el("span", { class: "sr", text: (m === "ok" ? "Doğru: " : m === "bad" ? "Yanlış: " : "Çözülmedi: ") }), rich(q.q)])
          ], function () { jump(k); });
          list.appendChild(b);
        });
        var acts = el("div", { class: "acts" });
        if (!s.done) acts.appendChild(btn("btn primary", ["Kalan soruları çöz ", arrow()], function () { jump(firstIndex(Q, function (q) { return pickOf(st.ans, q) == null; })); }));
        if (h.n && h.open) {
          acts.appendChild(btn("btn " + (s.done ? "primary" : "ghost"), [QUIZ ? "Ödeve geç: geçmiş quiz soruları " : "Ödeve geç ", arrow()], function () { setStep("odev", true); }));
          acts.appendChild(btn("btn ghost", ["Ödevi atla ", arrow(), " " + (last ? (DEN ? "denemeler" : "deneme sınavı") : "sıradaki bölüm")], skipHw));
        } else {
          acts.appendChild(btn("btn " + (s.done ? "primary" : "ghost"), [nextLabel(), arrow()], next));
          if (h.n) acts.appendChild(btn("btn ghost", "Ödeve bak", function () { setStep("odev", true); }));
        }
        acts.appendChild(btn("linkish", "Tekrar çöz", function () {
          Q.forEach(function (q) { delete st.ans[qid(q)]; });
          clearOut(Q);
          save(); touched(); jump(0);
        }));
        acts.appendChild(btn("linkish", "Videoyu tekrar izle", function () { setStep("video", true); }));
        add(card, [
          head,
          el("p", { class: "sum-score" }, [String(s.ok), el("small", { text: "/ " + s.n + " doğru" })]),
          el("p", { class: "sum-t", text: !s.done ? (s.n - s.ans) + " soru daha var." :
            s.ok === s.n ? "Hepsi doğru. Bu bölüm tamam." : "Yanlış yaptığın soruya dokunup açıklamasını bir daha oku." }),
          list, acts
        ]);
        return head;
      }
    }

    /* ---------- 3 · ödev (Human Geography'de: geçmiş quiz soruları) ---------- */
    function skipHw() {
      hwItems(i).forEach(function (q) { if (pickOf(st.hw, q) == null) st.hw[qid(q)] = SKIP; });
      save(); next();
    }
    function stepHw() {
      var H = hwItems(i);
      if (!H.length) { stepQuiz(); return; }
      var first = firstIndex(H, function (q) { return pickOf(st.hw, q) == null; });
      var qi = first === -1 ? H.length : first;
      draw(false);

      function marks() { return H.map(function (q) { var p = pickOf(st.hw, q); return p == null ? "" : p === SKIP ? "skip" : p === q.a ? "ok" : "bad"; }); }
      function jump(k, focus) { qi = k; draw(true, focus !== false); }
      function draw(animate, focus) {
        panel.textContent = ""; ui.pick = null;
        var card = el("div", { class: "card" });
        panel.appendChild(card);
        var f = qi >= H.length ? summary(card) : question(card);
        if (animate) { fx(card, "in"); scrollToNode(flow, false); if (focus) focusNode(f); }
      }
      function redoDots(card) {
        var old = card.querySelector(".dots"), fresh = dotsRow(marks(), qi, jump, "Ödev soruları");
        if (old) old.parentNode.replaceChild(fresh, old);
      }
      function question(card) {
        var q = H[qi], p = pickOf(st.hw, q), isLast = qi === H.length - 1;
        var answered = p != null && p !== SKIP;
        var nextB = btn("btn primary", [isLast ? "Ödev sonucu " : "Sonraki soru ", arrow()], function () { jump(qi + 1); });
        var skipB = btn("btn ghost", ["Atla ", arrow()], function () {
          if (pickOf(st.hw, q) == null) { st.hw[qid(q)] = SKIP; save(); touched(); }
          jump(qi + 1);
        });
        nextB.hidden = !answered; skipB.hidden = answered;
        var qc = questionCard(q, {
          picked: p, lang: "en", src: q.src, collapseRight: true,
          onPick: function (k) {
            st.hw[qid(q)] = k; save();
            skipB.hidden = true; nextB.hidden = false;
            if (note) note.hidden = true;
            redoDots(card); touched();
            if (k === q.a) focusNode(nextB);
          }
        });
        var note = p === SKIP ? el("p", { class: "fine q-skipped", text: "Bu soruyu atlamıştın; istersen şimdi çözebilirsin." }) : null;
        add(card, [
          el("div", { class: "q-top" }, [el("p", { class: "mono q-count", text: "Ödev · " + (QUIZ ? "geçmiş quiz soruları · " : "") + (qi + 1) + " / " + H.length }), dotsRow(marks(), qi, jump, "Ödev soruları")]),
          note,
          qc.node,
          el("div", { class: "q-nav" }, [
            qi > 0 ? btn("btn ghost back-i", [arrow(true), " Önceki"], function () { jump(qi - 1); }) : el("span", { class: "sp" }),
            skipB, nextB
          ]),
          el("div", { class: "hw-skip" }, [
            el("p", { class: "fine", text: "Ödev isteğe bağlı; atladığın sorular yanlış sayılmaz, sonra geri dönebilirsin." }),
            btn("btn ghost sm", ["Ödevi atla ", arrow(), " " + (last ? (DEN ? "denemeler" : "deneme sınavı") : "sıradaki bölüm")], skipHw)
          ])
        ]);
        if (!answered) fxEach(qc.btns);
        return qc.stem;
      }
      function summary(card) {
        var h = hwStat(i);
        var head = el("p", { class: "mono q-count", tabindex: "-1", text: "Ödev · sonuç" });
        var list = el("div", { class: "sum-list" });
        H.forEach(function (q, k) {
          var p = pickOf(st.hw, q), m = p == null ? "" : p === SKIP ? "skip" : p === q.a ? "ok" : "bad";
          list.appendChild(btn("sum-item " + m, [
            el("span", { class: "m", "aria-hidden": "true", text: m === "ok" ? "✓" : m === "bad" ? "✕" : "–" }),
            el("span", null, [el("span", { class: "sr", text: m === "ok" ? "Doğru: " : m === "bad" ? "Yanlış: " : m === "skip" ? "Atlandı: " : "Çözülmedi: " }), el("span", { lang: "en" }, rich(q.q))])
          ], function () { jump(k); }));
        });
        var acts = el("div", { class: "acts" }, btn("btn primary", [nextLabel(), arrow()], next));
        var left = h.skip + h.open;
        if (left) acts.appendChild(btn("btn ghost", "Atlananları çöz (" + left + ")", function () {
          jump(firstIndex(H, function (q) { var p = pickOf(st.hw, q); return p == null || p === SKIP; }));
        }));
        acts.appendChild(btn("linkish", "Ödevi baştan çöz", function () {
          H.forEach(function (q) { delete st.hw[qid(q)]; });
          clearOut(H);
          save(); touched(); jump(0);
        }));
        add(card, [
          head,
          el("p", { class: "sum-score" }, [String(h.ok), el("small", { text: "/ " + (h.ok + h.bad) + " doğru" })]),
          el("p", { class: "sum-t", text: h.bad + " yanlış · " + h.skip + " atlandı" + (h.open ? " · " + h.open + " çözülmedi" : "") + ". Bir soruya dokunursan açıklamasıyla birlikte açılır." }),
          list, acts
        ]);
        return head;
      }
    }
  }

  /* ======================================================================
     DENEME SINAVI
     ====================================================================== */
  function viewFinal() {
    var F = state.final, T = FINAL.length;
    var title = el("h2", { class: "ch-title", tabindex: "-1", text: "Deneme sınavı — " + T + " soru" });
    var panel = el("div", { class: "panel" });
    stage.appendChild(el("article", { class: "chapter" }, [
      el("header", { class: "ch-head" }, [
        el("p", { class: "mono ch-no" }, [el("b", { text: "Son adım" }), el("span", { text: "bütün bölümler" })]),
        title,
        el("p", { class: "ch-en serif", lang: "en", text: "AP-style practice test · " + UNIT_SHORT })
      ]),
      panel
    ]));
    if (!T) { panel.appendChild(el("div", { class: "card note" }, el("p", { text: "Deneme sınavı soruları yüklenemedi." }))); return title; }
    if (F.done) results(false); else if (F.started) run(false); else intro();
    return title;

    function swap(node, animate) {
      panel.textContent = ""; ui.pick = null;
      panel.appendChild(node);
      if (animate) { fx(node, "in"); scrollToNode(stage, false); }
    }

    function intro() {
      var done = 0, k;
      for (k = 0; k < N; k++) if (quizStat(k).done) done++;
      swap(el("div", { class: "card" }, [
        el("p", { class: "mono q-count", text: "Nasıl işliyor" }),
        el("ul", { class: "ex-list" }, [
          el("li", null, el("span", { text: T + " çoktan seçmeli soru; hepsi İngilizce ve AP tarzında" + (QUIZ ? ", gerçek quizdeki gibi." : ".") })),
          el("li", null, el("span", { text: "Cevaplar sınav bitene kadar gösterilmez; istediğin soruya dönüp cevabını değiştirebilirsin." })),
          el("li", null, el("span", { text: "Bitirince puanını, bölüm bölüm dökümünü ve yanlışlarını açıklamalarıyla görürsün." }))
        ]),
        el("div", { class: "acts" }, [
          btn("btn primary", ["Sınava başla ", arrow()], function () { F.started = true; F.i = 0; save(); refresh(); run(true); }),
          el("p", { class: "fine", text: done === N ? "Bütün bölümleri bitirdin." : done + " / " + N + " bölüm tamamlandı. Önce bölümleri bitirmen iyi olur, ama zorunlu değil." })
        ])
      ]), false);
    }

    function run(animate) {
      var card = el("div", { class: "card" });
      swap(card, animate);
      drawQ(false);

      function answered() { var c = 0; FINAL.forEach(function (q) { if (pickOf(F.ans, q) != null) c++; }); return c; }
      function drawQ(move) {
        var qi = Math.min(Math.max(F.i, 0), T - 1), q = FINAL[qi], isLast = qi === T - 1;
        ui.pick = select;
        card.textContent = "";
        var count = el("p", { class: "mono q-count", text: "Soru " + (qi + 1) + " / " + T });
        var left = el("p", { class: "mono q-count", text: answered() + " yanıtlandı" });
        var stem = el("h3", { class: "q-text", tabindex: "-1", lang: "en" }, rich(q.q));
        var tip = tipNode(q);
        var R = optionRows(q, "en", select, function (k, out) {
          if (out && pickOf(F.ans, q) === k) { delete F.ans[qid(q)]; save(); refresh(); }   /* elenen şık işaretli kalamaz */
          paint();
        });
        var list = R.list, btns = R.btns;
        var grid = el("div", { class: "ex-grid", role: "group", "aria-label": "Sorular arasında geçiş" });
        var cells = FINAL.map(function (fq, k) {
          var c = btn("ex-cell", String(k + 1), function () { F.i = k; save(); drawQ(true); });
          grid.appendChild(c);
          return c;
        });
        var confirmBox = el("div", { class: "ex-slot", role: "status" });
        var finishB = btn("btn " + (isLast ? "primary" : "ghost"), "Sınavı bitir", function () { finish(false); });
        add(card, [
          el("div", { class: "q-top" }, [count, left]),
          el("div", { class: "q" }, [stem, figNode(q), tip, list]),
          el("div", { class: "q-nav" }, [
            qi > 0 ? btn("btn ghost back-i", [arrow(true), " Önceki"], function () { F.i = qi - 1; save(); drawQ(true); }) : el("span", { class: "sp" }),
            isLast ? null : btn("btn primary", ["Sonraki ", arrow()], function () { F.i = qi + 1; save(); drawQ(true); }),
            finishB
          ]),
          confirmBox,
          grid,
          el("p", { class: "fine keys", text: "Klavye: A–" + AB[q.opts.length - 1] + " ile işaretle. Cevabını bitirene kadar değiştirebilirsin." })
        ]);
        paint();
        if (move) { fx(card.querySelector(".q"), "in"); scrollToNode(stage, false); focusNode(stem); }

        function paint() {
          var p = pickOf(F.ans, q);
          btns.forEach(function (b, k) { b.classList.toggle("is-picked", k === p); b.setAttribute("aria-pressed", String(k === p)); });
          cells.forEach(function (c, k) {
            var has = pickOf(F.ans, FINAL[k]) != null;
            c.className = "ex-cell" + (has ? " has" : "") + (k === qi ? " on" : "");
            c.setAttribute("aria-label", "Soru " + (k + 1) + (has ? ", yanıtlandı" : ", boş"));
            if (k === qi) c.setAttribute("aria-current", "true"); else c.removeAttribute("aria-current");
          });
          left.textContent = answered() + " yanıtlandı";
        }
        function select(k) {
          if (!R.canPick(k)) return;
          F.ans[qid(q)] = k; save();
          paint(); fx(btns[k], "pop");
          confirmBox.textContent = "";
          refresh();
        }
        function finish(sure) {
          var blankN = T - answered();
          if (blankN && !sure) {
            confirmBox.textContent = "";
            var yes = btn("btn primary sm", "Yine de bitir", function () { finish(true); });
            confirmBox.appendChild(el("div", { class: "ex-confirm" }, [
              el("p", { text: blankN + " soru boş. Boş sorular yanlış sayılır." }),
              yes,
              btn("btn ghost sm", "Boş soruya dön", function () {
                F.i = firstIndex(FINAL, function (fq) { return pickOf(F.ans, fq) == null; }); save(); drawQ(true);
              })
            ]));
            fx(confirmBox.firstChild, "in"); focusNode(yes);
            return;
          }
          F.done = true; F.sig = finalSig(); save(); refresh();
          results(true);
        }
      }
    }

    function results(animate) {
      var fs = finalStat(), pct = Math.round(fs.ok / T * 100);
      var wrong = [];
      FINAL.forEach(function (q, k) { if (pickOf(F.ans, q) !== q.a) wrong.push(k); });
      var score = el("span", { text: String(fs.ok) });
      var verdict = pct >= 90 ? [QUIZ ? "Çok iyi. Quize hazırsın." : "Çok iyi. Sınava hazırsın.", "Aşağıda kalan birkaç yanlışa göz atman yeter."] :
        pct >= 70 ? ["İyi gidiyor.", "Aşağıdaki yanlışlara ve eksik kalan bölümlere bir kez daha bak."] :
          ["Henüz oturmamış konular var.", "Dökümde eksik kalan bölümlerin videolarını tekrar izle, sonra sınavı yeniden çöz."];

      var topics = el("div", { class: "topics" });
      EPS.forEach(function (ep, i) {
        var tot = 0, ok = 0;
        FINAL.forEach(function (q) { if (q.topic === ep.no) { tot++; if (pickOf(F.ans, q) === q.a) ok++; } });
        if (!tot) return;
        topics.appendChild(el("div", { class: "topic" + (ok < tot ? " miss" : "") }, [
          el("span", { class: "no", text: epNo(ep) }),
          el("span", { class: "tt" }, [el("span", { text: ep.title }), ok < tot ? btn("linkish", "bölüme dön", function () { go(i, { scroll: true, step: "video" }); }) : null]),
          el("span", { class: "tb", "aria-hidden": "true" }, el("i", { style: "width:" + Math.round(ok / tot * 100) + "%" })),
          el("span", { class: "sc", text: ok + "/" + tot })
        ]));
      });

      var review = el("div", { class: "review" });
      wrong.forEach(function (k) {
        var q = FINAL[k], p = pickOf(F.ans, q), ep = null;
        EPS.forEach(function (e) { if (e.no === q.topic) ep = e; });
        var own_ = p != null && q.wrong && typeof q.wrong[p] === "string" ? q.wrong[p] : "";
        review.appendChild(el("div", { class: "rv" }, [
          el("p", { class: "mono rv-h", text: "Soru " + (k + 1) + (ep ? " · Bölüm " + epNo(ep) + " · " + ep.title : "") }),
          el("p", { class: "rv-q", lang: "en" }, rich(q.q)),
          figNode(q),
          el("p", { class: "rv-a bad" }, [el("span", { class: "m", "aria-hidden": "true", text: "✕" }),
            el("span", null, [el("span", { class: "lb", text: "Senin cevabın" }), p == null ? "Boş bıraktın" : el("span", { lang: "en" }, [AB[p] + " · ", rich(q.opts[p])])])]),
          el("p", { class: "rv-a ok" }, [el("span", { class: "m", "aria-hidden": "true", text: "✓" }),
            el("span", null, [el("span", { class: "lb", text: "Doğru cevap" }), el("span", { lang: "en" }, [AB[q.a] + " · ", rich(q.opts[q.a])])])]),
          (outMask(q) & (1 << q.a)) ? el("p", { class: "fine rv-n", text: "Elediğin şık doğru cevaptı." }) : null,
          own_ ? el("p", { class: "rv-w", lang: "en" }, rich(own_)) : null,
          q.why ? el("p", { class: "rv-w", lang: "en" }, rich(q.why)) : null
        ]));
      });

      var node = el("div", { class: "res" }, [
        el("div", { class: "card res-top" }, [
          el("p", { class: "res-score", "aria-label": fs.ok + " / " + T + " doğru" }, [score, el("small", { text: "/" + T })]),
          el("div", null, [
            el("p", { class: "res-t" }, [el("b", { text: verdict[0] }), "%" + pct + " doğru. " + verdict[1]]),
            el("div", { class: "acts" }, [
              btn("btn primary", "Tekrar çöz", function () { clearOut(FINAL); F.ans = {}; F.i = 0; F.done = false; F.started = true; F.sig = ""; save(); refresh(); run(true); focusNode(title); }),
              wrong.length ? btn("btn ghost", ["Yanlışlarıma git ", el("i", { "aria-hidden": "true", text: "↓" })], function () { scrollToNode(review.parentNode, true); focusNode(revHead); }) : null
            ])
          ])
        ]),
        el("div", { class: "card" }, [el("p", { class: "mono sec-t", text: "Bölüm bölüm döküm" }), topics])
      ]);
      var revHead = el("p", { class: "mono sec-t", tabindex: "-1", text: wrong.length ? "Yanlışların ve boş bıraktıkların · " + wrong.length : "Yanlışın yok" });
      node.appendChild(el("div", { class: "card" }, [revHead, wrong.length ? review : el("p", { class: "sum-t", text: sayiAdi(T) + " sorunun hepsini doğru yaptın." })]));
      swap(node, animate);

      if (animate && ANIM && fs.ok > 0) {
        try { score.textContent = "0"; M.animate(0, fs.ok, { duration: 0.9, ease: "easeOut", onUpdate: function (v) { score.textContent = String(Math.round(v)); } }); } catch (e) { score.textContent = String(fs.ok); }
      }
    }
  }

  /* ---------------- klavye: A–E / 1–5 ile cevap ---------------- */
  document.addEventListener("keydown", function (e) {
    if (!ui.pick || e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target, tag = t && t.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || tag === "VIDEO" || (t && t.isContentEditable)) return;
    var k = (e.key || "").toLowerCase();
    if (k.length !== 1) return;
    var idx = "abcdef".indexOf(k);
    if (idx === -1) idx = "123456".indexOf(k);
    if (idx !== -1) ui.pick(idx);
  });

  /* ---------------- devam et + sıfırla ---------------- */
  if (resumeBtn) resumeBtn.addEventListener("click", function () {
    var t = resumeTarget();
    go(t.view, { scroll: true, step: t.step });
  });

  var resetBtn = $("reset"), resetBox = $("resetBox");
  function closeAsk() {
    if (!resetBox) return;
    var a = resetBox.querySelector(".ask");
    if (a) resetBox.removeChild(a);
    if (resetBtn) resetBtn.hidden = false;
  }
  if (resetBtn && resetBox) resetBtn.addEventListener("click", function () {
    if (!active) return;
    var yes = btn("linkish", "Evet, sıfırla", function () {
      sDel(stateKey(active.id));
      cache[active.id] = state = blank(); lastBar = -1; ui.tipQ = "";
      closeAsk();
      go(0, { replace: true });
      try { window.scrollTo(0, 0); } catch (e) {}
    });
    var no = btn("linkish", "Vazgeç", function () { closeAsk(); focusNode(resetBtn); });
    var others = "";
    resetBtn.hidden = true;
    resetBox.appendChild(el("span", { class: "ask reset" }, [el("span", { text: "Yalnızca “" + active.name + "” hesabının bu ünitedeki ilerlemesi silinecek." + others + (DEN ? " Deneme sonuçların yerinde kalır." : "") }), yes, no]));
    focusNode(no);
  });

  /* ---------------- profiller: "Kim çalışıyor?" + üstteki değiştirici ---------------- */
  var kitEl = $("kit"), whoEl = $("kim"), whoList = $("kimList"), whoBox = $("whoBox"), whoBtn = $("whoBtn"), whoName = $("whoName"), whoMenu = $("whoMenu");
  function profileLine(st) {
    var done = 0, touched = st.final.started || st.final.done;
    EPS.forEach(function (e) {
      var t = st.eps[e.slug], n = 0, k;
      e.questions.forEach(function (q) { if (pickOf(t.ans, q) != null) n++; });
      if (e.questions.length && n === e.questions.length) done++;
      if (n || t.watched) touched = true;
      for (k in t.hw) if (own(t.hw, k)) touched = true;
    });
    return touched ? done + " / " + N + " bölüm tamamlandı" : "Henüz başlamadı";
  }
  /* oturum yoksa giriş sayfasına git; giriş yapınca bu kite dönülür */
  function toLogin() {
    var u = window.location.pathname + window.location.hash;
    try { window.location.replace("/kitora/giris/?devam=" + encodeURIComponent(u)); } catch (e) { window.location.href = "/kitora/giris/"; }
  }
  function showPicker() {
    active = null; ui.pick = null;
    if (kitEl) kitEl.hidden = true;
    if (whoBox) whoBox.hidden = true;
    if (resetBox) resetBox.hidden = true;
    if (whoEl) whoEl.hidden = true;
    if (!H) { enter({ id: "misafir", name: "Misafir" }, { hash: true }); return; }
    toLogin();
  }
  /* çıkış: kayıt saklanır, video durur, giriş sayfasına gidilir */
  function logout() {
    save(); closeMenu();
    try { var v = document.querySelector(".frame video"); if (v) v.pause(); } catch (e) {}
    if (H) H.cikis();
    try { window.location.assign("/kitora/giris/"); } catch (e) { window.location.href = "/kitora/giris/"; }
  }
  function closeMenu() { if (whoMenu) whoMenu.hidden = true; if (whoBtn) whoBtn.setAttribute("aria-expanded", "false"); }
  function openMenu() {
    if (!whoMenu || !whoBtn || !active) return;
    if (isGuest()) { window.location.assign(loginUrl(ui.view)); return; }
    whoMenu.textContent = "";
    var me = el("div", { class: "who-item on", "aria-current": "true" }, [el("span", { text: active.name }), el("span", { class: "who-s", text: profileLine(state) })]);
    whoMenu.appendChild(me);
    whoMenu.appendChild(btn("who-item who-all", [el("span", { text: "Çıkış yap" })], logout));
    whoMenu.hidden = false;
    whoBtn.setAttribute("aria-expanded", "true");
  }
  if (whoBtn) whoBtn.addEventListener("click", function () { if (whoMenu && whoMenu.hidden) openMenu(); else closeMenu(); });
  document.addEventListener("click", function (e) { if (whoBox && whoMenu && !whoMenu.hidden && !whoBox.contains(e.target)) closeMenu(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && whoMenu && !whoMenu.hidden) { closeMenu(); focusNode(whoBtn); }
  });

  /* profile gir: o profilin kaydını yükler; öbür profilin kaydına dokunmaz */
  function enter(p, opt) {
    opt = opt || {};
    save();                                             /* çıkılan profilin son hali */
    active = p; state = profileState(p.id);
    ui.tipQ = ""; lastBar = -1;
    closeAsk(); closeMenu();
    if (whoEl) whoEl.hidden = true;
    if (kitEl) kitEl.hidden = false;
    if (resetBox) resetBox.hidden = !!p.misafir;
    if (whoBox) whoBox.hidden = !H;
    if (whoName) whoName.textContent = p.misafir ? "Giriş yap" : p.name;
    if (whoBtn) whoBtn.setAttribute("aria-label", "Hesap: " + p.name + ". Gelişim ve çıkış menüsü");
    var v = opt.hash ? viewFromHash() : null;
    ui.view = v != null ? v : state.cur;
    if (!(ui.view >= 0 && ui.view <= MAXV)) ui.view = 0;
    state.cur = ui.view; save();
    if (!opt.hash) {                                    /* profil değişti: adres de o profilin kaldığı yeri göstersin */
      try { window.history.replaceState(null, "", "#" + (ui.view === N ? "sinav" : EPS[ui.view].slug)); } catch (e) {}
    }
    render({ initial: true });
    if (opt.top) { try { window.scrollTo(0, 0); } catch (e) {} }
  }

  /* ---------------- başlangıç ---------------- */
  if (topMeta) {
    var secs = 0, qn = 0;
    EPS.forEach(function (e) { secs += e.seconds || 0; qn += e.questions.length; });
    topMeta.textContent = N + " video · ≈ " + Math.round(secs / 60) + " dk · " +
      (DEN ? qn + " soru" + (DEN_N ? " · " + DEN_N + " deneme" : "") : qn + " + " + FINAL.length + " soru");
  }
  if (DEN) {
    /* Denemeler sayfasından geri gelince (tarayıcı sayfayı bellekten açar) ya da deneme başka sekmede bitince sayılar tazelensin */
    window.addEventListener("pageshow", function (e) { if (e.persisted && active) refresh(); });
    window.addEventListener("storage", function (e) { if (active && e.key && e.key.indexOf(STORE + active.id + ":deneme:") === 0) refresh(); });
  }
  /* açık oturum varsa önce sunucudaki son hali gelir, sonra kit açılır; yoksa giriş sayfasına gidilir */
  var last = H ? H.aktif() : null;
  /* hesaplı giriş: kurulum eksikse ya da süresi geçmiş quiz notu varsa önce o sayfaya */
  function blocked(p) {
    var e = H.engel(p);
    if (!e) return false;
    try { window.location.replace(e + "?devam=" + encodeURIComponent(window.location.pathname + window.location.hash)); } catch (x) {}
    return true;
  }
  if (last) {
    if (!blocked(H.profil())) {
      var prof = H.profilYenile().then(null, function () { return H.profil(); });   /* bağlantı yoksa son bilinen profil */
      Promise.all([H.sec(last.id), prof]).then(function (r) {
        if (blocked(r[1])) return;
        delete cache[r[0].id]; enter(r[0], { hash: true });
      }, showPicker);
    }
  } else if (H) enter({ id: "misafir", name: "Misafir", misafir: true }, { hash: true });   /* hesapsız: ilk bölüm açık */
  else showPicker();
})();
