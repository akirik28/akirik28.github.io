/* Kitpath deneme ekranı (Bluebook kopyası). kitpath.js'teki pages.deneme veriyi yükler ve KPBluebook.basla(o) çağırır.
   o = { k, no, DEN, T, C, ROOT, ad, md, esc, fmt, tabloHTML, sekilKoy, param }
   isteğe bağlı (seviye sınavı): sonucUrl, geriUrl, baslik, yonerge (HTML), bitti(S, Q) → Promise (sonuç sayfasına geçmeden önce beklenir)
   Kayıt biçimi (C.deneme / C.denemeYaz) eski ekranla aynı: ans, mark, x, elim, hideT, i, review, done, score, used;
   yeni alanlar: hl (soru başına vurgulu metin), paused/left (Kaydet ve çık'ta süre durur), desmos (hesap makinesi durumu). */
(function () {
  "use strict";
  /* Desmos'un herkese açık deneme anahtarı; kalıcı kullanım için Desmos'tan ücretsiz anahtar alınıp buraya yazılmalı. */
  var DESMOS_KEY = "dcb31709b452b1cf9dc26972add0fda6";
  var DESMOS_URL = "https://www.desmos.com/api/v1.11/calculator.js?apiKey=" + DESMOS_KEY;
  /* Bluebook'ta hesap makinesi olan dersler; deneme verisinde T.calc / DEN.calc true/false ile değiştirilebilir. */
  var HESAPLI_DERS = { calc: 1, calcx: 1, stats: 1, physc: 1, precalc: 1, chem: 1, phys: 1, bio: 1 };
  var MAC = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  var L = "ABCDE";

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  var I = {
    chev: '<svg width="12" height="8" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 6.5l5-5 5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    chevD: '<svg width="12" height="8" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    close: '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    book: '<svg width="17" height="22" viewBox="0 0 17 22" aria-hidden="true"><path d="M1 1h15v19l-7.5-5.4L1 20z" stroke-width="2" stroke-linejoin="round"/></svg>',
    flag: '<svg width="12" height="15" viewBox="0 0 13 16" aria-hidden="true"><path d="M0 0h12.8v16l-6.4-5.6L0 16z" fill="#c13145"/></svg>',
    pin: '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1C4.9 1 2.5 3.5 2.5 6.7c0 3 2 4.9 5 7.4l.5.4.5-.4c3-2.5 5-4.4 5-7.4C13.5 3.5 11.1 1 8 1zm0 2.2A3.3 3.3 0 0 1 11.4 6.6c0 1.9-1.1 3.3-3.4 5.3-2.3-2-3.4-3.4-3.4-5.3A3.3 3.3 0 0 1 8 3.2z" fill="#1e1e1e"/><circle cx="8" cy="6.6" r="1.7" fill="#1e1e1e"/></svg>',
    abc: '<svg width="28" height="26" viewBox="0 0 28 26" aria-hidden="true"><rect class="bg" x=".5" y=".5" width="27" height="25" rx="4.5"/><rect x=".5" y=".5" width="27" height="25" rx="4.5" fill="none" stroke="#1e1e1e"/><text class="fg" x="14" y="17.5" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="10.5" font-weight="700" letter-spacing=".3">ABC</text><path d="M4.5 20.5L23.5 5.5" stroke="#fff" stroke-width="3.2"/><path class="fg" d="M4.2 20.2L23.2 5.2l.6.8-19 15z"/></svg>',
    xo: '<svg width="26" height="20" viewBox="0 0 26 20" aria-hidden="true"><circle cx="13" cy="10" r="8.75" fill="#fff" stroke="#1e1e1e"/><path d="M.7 10h25.1" stroke="#1e1e1e"/></svg>',
    hl: '<svg width="34" height="15" viewBox="0 0 34 15" aria-hidden="true"><path d="M10 1L3.5 7v4.5L.5 14H4l1.2-2H8l5-7.5z" fill="none" stroke="#151515" stroke-linejoin="round"/><path d="M5 13.5h8" stroke="#151515"/><path d="M20.5 1.5H33v9l-3.5 3.5h-9z" fill="none" stroke="#151515" stroke-linejoin="round"/><path d="M29.5 14v-3.5H33M22.5 5h8M22.5 7.5h8" stroke="#151515"/></svg>',
    calc: '<svg width="11" height="14" viewBox="0 0 11 14" aria-hidden="true"><rect x=".5" y=".5" width="10" height="13" fill="none" stroke="#1e1e1e"/><path d="M2.2 2.4h6.6v2.6H2.2z" fill="none" stroke="#1e1e1e" stroke-width=".9"/><path d="M2 7h1.6M4.7 7h1.6M7.4 7H9M2 9h1.6M4.7 9h1.6M7.4 9H9M2 11h1.6M4.7 11h1.6M7.4 11H9" stroke="#1e1e1e" stroke-width=".95"/></svg>',
    more: '<svg width="17" height="16" viewBox="0 0 17 16" aria-hidden="true"><path d="M7.8 3h2v2h-2zM7.8 7h2v2h-2zM7.8 11h2v2h-2z" fill="#1e1e1e"/></svg>',
    help: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.2" fill="none" stroke="#1e1e1e" stroke-width="1.6"/><path d="M9.3 9.4a2.8 2.8 0 1 1 3.9 2.6c-.8.4-1.2 1-1.2 1.8v.6" fill="none" stroke="#1e1e1e" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="17.2" r="1.1" fill="#1e1e1e"/></svg>',
    dir: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="1.5" fill="none" stroke="#1e1e1e" stroke-width="1.6"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4" stroke="#1e1e1e" stroke-width="1.5" stroke-linecap="round"/></svg>',
    keys: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="6" width="20" height="12" rx="1.5" fill="none" stroke="#1e1e1e" stroke-width="1.6"/><path d="M5.5 9.5h1.5M9 9.5h1.5M12.5 9.5H14M16 9.5h2.5M5.5 12h1.5M9 12h1.5M12.5 12H14M16 12h2.5M8 14.8h8" stroke="#1e1e1e" stroke-width="1.5" stroke-linecap="round"/></svg>',
    reader: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M2 11h20M4 16h16M8 20.5h8" stroke="#1e1e1e" stroke-width="1.6" stroke-linecap="round"/></svg>',
    exit: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 4H4v16h6" fill="none" stroke="#1e1e1e" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12h11M16 8l4 4-4 4" fill="none" stroke="#1e1e1e" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    clock: '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13" r="8" fill="none" stroke="#1e1e1e" stroke-width="2"/><path d="M12 9v4.5l2.6 1.6M9.5 2.5h5" fill="none" stroke="#1e1e1e" stroke-width="2" stroke-linecap="round"/></svg>',
    expand: '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    shrink: '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10h-6V4M4 14h6v6M14 10l7-7M10 14l-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    grip: '<span class="bbk-calc__grip" aria-hidden="true"><svg width="10" height="16" viewBox="0 0 10 16"><g fill="#f7f7f7"><circle cx="2" cy="2" r="1.4"/><circle cx="8" cy="2" r="1.4"/><circle cx="2" cy="8" r="1.4"/><circle cx="8" cy="8" r="1.4"/><circle cx="2" cy="14" r="1.4"/><circle cx="8" cy="14" r="1.4"/></g></svg></span>',
    trash: '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6.5 7l1 13h9l1-13" fill="none" stroke="#1e1e1e" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    under: '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4v7a5 5 0 0 0 10 0V4M5 20h14" fill="none" stroke="#1e1e1e" stroke-width="1.9" stroke-linecap="round"/></svg>',
    note: '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3.5h16v12l-5 5H4z" fill="none" stroke="#1e1e1e" stroke-width="1.7" stroke-linejoin="round"/><path d="M15 20.5v-5h5M7.5 8h9M7.5 11.5h9" fill="none" stroke="#1e1e1e" stroke-width="1.6"/></svg>',
    logo: '<svg width="26" height="26" viewBox="0 0 120 120" aria-hidden="true"><rect width="120" height="120" rx="28" fill="#1F2A44"/><rect x="28" y="26" width="18" height="68" rx="9" fill="#F6F1E7"/><path d="M50 64 L84 94" stroke="#F6F1E7" stroke-width="18" stroke-linecap="round"/><circle cx="56" cy="55" r="4.5" fill="#F6F1E7"/><circle cx="65" cy="47" r="4.5" fill="#F6F1E7"/><circle cx="74" cy="39" r="4.5" fill="#F6F1E7"/><g transform="rotate(12 86 30)"><rect x="74" y="18" width="24" height="24" rx="7" fill="#F5D85E"/></g></svg>'
  };

  /* ---------------- iskelet ---------------- */
  function iskelet(esc) {
    var app = $(".bbk-app");
    app.innerHTML =
      '<header class="bbk-head"><div class="bbk-head__row">' +
        '<div class="bbk-head__l"><h1 class="bbk-title" data-k="title"></h1><button type="button" class="bbk-dir" data-k="dir" aria-expanded="false" aria-controls="bbk-dir">Directions ' + I.chevD + '</button></div>' +
        '<div class="bbk-head__c"><div class="bbk-timer" data-k="timer" data-low="false"><time role="timer" aria-live="off" data-k="time"></time><span data-k="clock" hidden>' + I.clock + '<span class="sr-only">Timer hidden</span></span></div><button type="button" class="bbk-hide" data-k="hide">Hide</button></div>' +
        '<div class="bbk-head__r"><div class="bbk-tools">' +
          '<button type="button" class="bbk-tool" data-k="hl">' + I.hl + '<span>Highlights &amp; Notes</span></button>' +
          '<button type="button" class="bbk-tool" data-k="calc" aria-pressed="false" hidden>' + I.calc + '<span>Calculator</span></button>' +
          '<button type="button" class="bbk-tool" data-k="more" aria-expanded="false" aria-controls="bbk-menu">' + I.more + '<span>More</span></button>' +
        '</div></div>' +
      '</div><div class="bbk-dash"></div></header>' +
      '<main class="bbk-main" id="main" data-k="main"></main>' +
      '<footer class="bbk-foot"><div class="bbk-dash"></div><div class="bbk-foot__row">' +
        '<div class="bbk-foot__l"><div class="bbk-who">' + I.logo + '<span data-k="who"></span></div></div>' +
        '<button type="button" class="bbk-qpill" data-k="nav" aria-expanded="false" aria-controls="bbk-nav"><span data-k="navlabel"></span>' + I.chev + '</button>' +
        '<div class="bbk-foot__r"><button type="button" class="bbk-btn" data-k="back">Back</button><button type="button" class="bbk-btn" data-k="next">Next</button></div>' +
      '</div>' +
      '<div class="bbk-pop bbk-navpop" id="bbk-nav" data-k="navpop" role="dialog" aria-labelledby="bbk-nav-h" hidden><span class="bbk-pop__arrow" aria-hidden="true"></span>' +
        '<div class="bbk-navpop__head"><h2 id="bbk-nav-h" data-k="navtitle"></h2><button type="button" class="bbk-x-close" data-k="navclose" aria-label="Close">' + I.close + '</button></div>' +
        '<div class="bbk-legend"><span>' + I.pin + 'Current</span><span><i class="box"></i>Unanswered</span><span>' + I.flag + 'For Review</span></div>' +
        '<div class="bbk-grid" data-k="grid"></div>' +
        '<button type="button" class="bbk-btn bbk-btn--line bbk-btn--sm bbk-navpop__go" data-k="toreview">Go to Review Page</button>' +
      '</div></footer>' +
      '<div class="bbk-pop bbk-menu" id="bbk-menu" data-k="menu" role="menu" hidden>' +
        '<button type="button" role="menuitem" data-m="dir" class="bbk-only-sm">' + I.dir + 'Directions</button>' +
        '<button type="button" role="menuitem" data-m="help">' + I.help + 'Help</button>' +
        '<button type="button" role="menuitem" data-m="keys">' + I.keys + 'Shortcuts</button>' +
        '<button type="button" role="menuitem" data-m="reader">' + I.reader + 'Line Reader</button>' +
        '<button type="button" role="menuitem" data-m="exit">' + I.exit + 'Save and Exit</button>' +
      '</div>' +
      '<div class="bbk-pop bbk-dirpop" id="bbk-dir" data-k="dirpop" role="dialog" aria-label="Directions" hidden><span class="bbk-pop__arrow" aria-hidden="true"></span><div data-k="dirtext"></div><div class="bbk-dirpop__foot"><button type="button" class="bbk-yes" data-k="dirclose">Close</button></div></div>';
    return app;
  }

  function hata(msg, href, label) {
    var app = $(".bbk-app") || document.body;
    app.innerHTML = '<main class="bbk-main"><div class="bbk-err"><p>' + msg + '</p>' + (href ? '<a class="bbk-btn" href="' + href + '">' + (label || "Back") + '</a>' : "") + '</div></main>';
  }

  /* ---------------- vurgu: seçimi <mark> ile sar ---------------- */
  function metinDugumleri(range, kok) {
    var out = [], w = document.createTreeWalker(kok, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) if (n.nodeValue && range.intersectsNode(n) && !(n.parentNode.closest && n.parentNode.closest("mark.bbk-hl"))) out.push(n);
    return out;
  }
  function sar(range, kok, id) {
    var nodes = metinDugumleri(range, kok), marks = [];
    nodes.forEach(function (n) {
      var s = 0, e = n.nodeValue.length;
      if (n === range.startContainer) s = range.startOffset;
      if (n === range.endContainer) e = range.endOffset;
      if (e <= s || !n.nodeValue.slice(s, e).trim()) return;
      var t = n;
      if (s > 0) t = t.splitText(s);
      if (e - s < t.nodeValue.length) t.splitText(e - s);
      var m = document.createElement("mark");
      m.className = "bbk-hl"; m.dataset.id = id; m.dataset.c = "yellow";
      t.parentNode.insertBefore(m, t); m.appendChild(t);
      marks.push(m);
    });
    return marks;
  }
  function coz(kok, id) {
    $$('mark.bbk-hl[data-id="' + id + '"]', kok).forEach(function (m) {
      var p = m.parentNode; while (m.firstChild) p.insertBefore(m.firstChild, m); p.removeChild(m); p.normalize();
    });
  }

  /* ---------------- motor ---------------- */
  function basla(o) {
    var k = o.k, no = o.no, DEN = o.DEN, T = o.T, C = o.C, md = o.md, esc = o.esc, fmt = o.fmt, ROOT = o.ROOT;
    var Q = (T.questions || []).filter(function (q) { return !!q && typeof q.q === "string" && Array.isArray(q.o) && q.o.length >= 2 && typeof q.a === "number"; });
    var N = Q.length, MIN = T.minutes > 0 ? T.minutes : N;
    var sonucUrl = o.sonucUrl || ROOT + "sonuc/?kit=" + k.id + "&n=" + no;
    var uniteUrl = o.geriUrl || ROOT + "unite/?kit=" + k.id + "&sekme=deneme";
    if (!N) { hata("Bu denemede soru yok.", uniteUrl, "Üniteye dön"); return; }
    var S = C.deneme(k, no);
    var gecersiz = !S || S.ans.length !== N || !Array.isArray(S.mark) || !Array.isArray(S.x) || (T.rev == null ? S.rev != null : S.rev !== T.rev);
    if (gecersiz || (o.param("yeni") !== null && S.done)) {
      var a = [], m = [], x = [], i;
      for (i = 0; i < N; i++) { a.push(-1); m.push(false); x.push([]); }
      S = { v: 1, started: Date.now(), endAt: Date.now() + MIN * 60000, i: 0, ans: a, mark: m, x: x, done: false, used: 0, elim: false, hideT: false, review: false, score: 0, auto: false };
      if (T.rev != null) S.rev = T.rev;
      C.denemeYaz(k, no, S);
    }
    if (o.param("yeni") !== null && !o.sonucUrl) history.replaceState(null, "", "?kit=" + k.id + "&n=" + no);
    if (S.done) { location.replace(sonucUrl); return; }
    if (!S.started) { S.started = Date.now(); S.endAt = S.started + MIN * 60000; }
    if (S.paused) { S.endAt = Date.now() + Math.max(0, S.left || 0); S.paused = false; delete S.left; }
    S.x = S.x.map(function (v) { return Array.isArray(v) ? v : []; });
    if (!S.hl || typeof S.hl !== "object") S.hl = {};
    if (!(S.i >= 0 && S.i < N)) S.i = 0;

    var app = iskelet(esc);
    var WARN = MIN > 5 ? 300 : 60, uyarildi = false;
    var calcVar = T.calc != null ? !!T.calc : DEN.calc != null ? !!DEN.calc : !!HESAPLI_DERS[k.ders];
    var baslik = o.baslik || "Deneme " + no + (T.level ? ": " + T.level : "");
    var tur = o.turAd || "practice test";   /* metinlerde: "practice test" ya da seviye sınavının verdiği ad */
    var unitShort = String(DEN.unit || "").split(/\s+[—–-]\s+/)[0] || "Unit " + k.unit;
    var acik = null;      /* "nav" | "menu" | "dir" */
    var modal = null, hlAktif = null, tipT = 0;
    document.title = baslik + " · " + (DEN.course || "") + " · Kitpath";
    $('[data-k="title"]').textContent = baslik;
    $('[data-k="who"]').textContent = o.ad || "Misafir";
    $('[data-k="navtitle"]').textContent = baslik + " Questions";
    $('[data-k="calc"]').hidden = !calcVar;
    $('[data-k="dirtext"]').innerHTML = o.yonerge ? o.yonerge : '<h2>' + esc(baslik) + ' · ' + esc((DEN.course || "") + " · " + unitShort) + '</h2>' +
      '<p>This practice set has <strong>' + N + ' multiple-choice questions</strong> and a time limit of <strong>' + MIN + ' minutes</strong>. Each question has one best answer. Select it, then use <strong>Next</strong> to move on.</p>' +
      '<p>You can move between questions, mark questions for review, and eliminate answer choices with the <strong>ABC</strong> tool. Unanswered questions count as incorrect, so answer every question before time runs out.</p>' +
      (calcVar ? '<p>A graphing calculator is available from <strong>Calculator</strong> at the top of the screen.</p>' : '') +
      '<p>When time runs out, your answers are submitted automatically.</p>';

    function save() { C.denemeYaz(k, no, S); }
    function bitir(auto) {
      if (S.done) return;
      hlKaydet();
      var c = 0, i;
      for (i = 0; i < N; i++) if (S.ans[i] === Q[i].a) c++;
      S.done = true; S.auto = !!auto; S.score = c; S.review = false;
      S.used = Math.min(MIN * 60000, Date.now() - S.started);
      save(); if (C.calisti) C.calisti();
      if (!o.bitti) { location.replace(sonucUrl); return; }
      var gitti = false, git_ = function () { if (!gitti) { gitti = true; location.replace(sonucUrl); } };
      setTimeout(git_, 6000);
      try { Promise.resolve(o.bitti(S, Q)).then(git_, git_); } catch (e) { git_(); }
    }

    /* ----- çizim ----- */
    function soruHTML() {
      var q = Q[S.i], fig = q.fig, cr = S.x[S.i] || [], h = S.hl[S.i] || {};
      var stim = "";
      if (fig) {
        stim = '<section class="bbk-pane bbk-pane--stim" aria-label="Stimulus"><div class="bbk-stim" data-hl="s">' +
          (h.s != null ? h.s : (fig.type === "table" ? o.tabloHTML(fig) : '<div data-k="fig-node"></div>') + (fig.caption ? '<span class="bbk-stim__cap">' + md(fig.caption) + '</span>' : "")) +
          '</div></section><div class="bbk-divider" data-k="divider" role="separator" aria-orientation="vertical" aria-label="Resize panes" tabindex="0"><span></span></div>';
      }
      var opts = q.o.map(function (t, i) {
        var Lt = L[i], sec = S.ans[S.i] === i, x = cr.indexOf(i) > -1;
        return '<div class="bbk-optrow" data-crossed="' + x + '">' +
          '<button type="button" class="bbk-opt" role="radio" aria-checked="' + sec + '" data-o="' + i + '"><span class="bbk-letter" aria-hidden="true">' + Lt + '</span><span class="sr-only">Option ' + Lt + ', </span><span class="bbk-otext">' + md(t) + '</span></button>' +
          '<button type="button" class="bbk-x" data-x="' + i + '" aria-label="' + (x ? "Undo elimination of" : "Eliminate") + ' option ' + Lt + '"><span class="bbk-x__ico">' + I.xo + '<b>' + Lt + '</b></span><span class="bbk-x__undo">Undo</span></button></div>';
      }).join("");
      return '<div class="bbk-split' + (fig ? "" : " bbk-split--one") + '"' + (S.split ? ' style="--split:' + S.split + '%"' : "") + '>' + stim +
        '<section class="bbk-pane bbk-pane--q" aria-label="Question ' + (S.i + 1) + '"><div class="bbk-qcol">' +
          '<div class="bbk-qbar"><span class="bbk-qnum">' + (S.i + 1) + '</span><div class="bbk-qbar__mid"><button type="button" class="bbk-mark" data-k="mark" aria-pressed="' + !!S.mark[S.i] + '">' + I.book + '<span>Mark for Review</span></button></div>' +
            '<button type="button" class="bbk-abc" data-k="elim" aria-pressed="' + !!S.elim + '" aria-label="Cross out answer choices">' + I.abc + '</button></div>' +
          '<div class="bbk-qdash"></div>' +
          '<div class="bbk-stem" data-hl="q">' + (h.q != null ? h.q : md(q.q)) + '</div>' +
          '<div class="bbk-opts" role="radiogroup" aria-label="Answer choices">' + opts + '</div>' +
        '</div></section></div>';
    }
    function incelemeHTML() {
      return '<section class="bbk-review" aria-labelledby="bbk-rv-h"><h1 id="bbk-rv-h">Check Your Work</h1>' +
        '<p>Click on any question to return to it and review your answer.</p>' +
        '<p>Click <strong>Submit</strong> when you have completed the ' + tur + '.</p>' +
        '<div class="bbk-rcard"><div class="bbk-rcard__head"><h2>' + esc(baslik) + ' Questions</h2><div class="bbk-legend"><span><i class="box"></i>Unanswered</span><span>' + I.flag + 'For Review</span></div></div>' +
        '<div class="bbk-rgrid">' + hucreler(false) + '</div></div></section>';
    }
    function hucreler(pinli) {
      return Q.map(function (_, i) {
        var cur = !S.review && i === S.i;
        return '<div class="bbk-cell">' + (pinli && cur ? '<span class="pin">' + I.pin + '</span>' : "") +
          '<button type="button" data-go="' + i + '" data-done="' + (S.ans[i] >= 0) + '"' + (cur ? ' aria-current="true"' : "") + ' aria-label="Question ' + (i + 1) + (S.ans[i] >= 0 ? ", answered" : ", unanswered") + (S.mark[i] ? ", marked for review" : "") + '">' + (i + 1) + '</button>' +
          (S.mark[i] ? '<span class="flag">' + I.flag + '</span>' : "") + '</div>';
      }).join("");
    }
    function render() {
      hlKapat();
      var main = $('[data-k="main"]');
      app.dataset.elim = String(!!S.elim);
      if (S.review) main.innerHTML = incelemeHTML();
      else {
        main.innerHTML = soruHTML();
        var q = Q[S.i], h = S.hl[S.i] || {};
        if (q.fig && q.fig.type !== "table" && h.s == null) o.sekilKoy($('[data-k="fig-node"]', main), q.fig);
      }
      $('[data-k="navlabel"]').innerHTML = '<span class="bbk-qw">Question </span>' + (S.i + 1) + " of " + N;
      $('[data-k="nav"]').hidden = !!S.review;
      $('[data-k="grid"]').innerHTML = hucreler(true);
      $('[data-k="back"]').style.visibility = (S.review || S.i > 0) ? "visible" : "hidden";
      $('[data-k="next"]').textContent = S.review ? "Submit" : "Next";
      acKapa();
      saat();
    }
    function acKapa() {
      $('[data-k="navpop"]').hidden = acik !== "nav";
      $('[data-k="nav"]').setAttribute("aria-expanded", String(acik === "nav"));
      $('[data-k="menu"]').hidden = acik !== "menu";
      $('[data-k="more"]').setAttribute("aria-expanded", String(acik === "menu"));
      $('[data-k="dirpop"]').hidden = acik !== "dir";
      $('[data-k="dir"]').setAttribute("aria-expanded", String(acik === "dir"));
    }
    function git(i) { hlKaydet(); S.review = false; S.i = Math.max(0, Math.min(N - 1, i)); acik = null; save(); render(); var b = $(".bbk-qnum"); if (b) $(".bbk-pane--q").scrollTop = 0; }

    /* ----- süre ----- */
    function saat() {
      var r = (S.endAt - Date.now()) / 1000, low = r < WARN;
      $('[data-k="time"]').textContent = fmt(Math.max(0, r));
      $('[data-k="timer"]').dataset.low = String(low);
      var gizli = !!S.hideT && !low;
      $('[data-k="time"]').hidden = gizli;
      $('[data-k="clock"]').hidden = !gizli;
      var hb = $('[data-k="hide"]'); hb.textContent = gizli ? "Show" : "Hide"; hb.disabled = low;
      if (low && !uyarildi && r > 0) { uyarildi = true; toast((WARN >= 300 ? "5 Minutes" : "1 Minute") + " Remaining"); }
      if (r <= 0) bitir(true);
    }
    function toast(msg) {
      var t = document.createElement("div");
      t.className = "bbk-toast"; t.setAttribute("role", "status");
      t.innerHTML = '<span>' + esc(msg) + '</span><button type="button">Close</button>';
      app.appendChild(t);
      t.querySelector("button").onclick = function () { t.remove(); };
      setTimeout(function () { t.remove(); }, 8000);
    }
    function ipucu(el, msg) {
      $$(".bbk-tip").forEach(function (t) { t.remove(); });
      var r = el.getBoundingClientRect(), t = document.createElement("div");
      t.className = "bbk-tip"; t.textContent = msg; t.setAttribute("role", "status");
      document.body.appendChild(t);
      t.style.top = (r.bottom + 6) + "px";
      t.style.left = Math.max(8, Math.min(innerWidth - t.offsetWidth - 8, r.left + r.width / 2 - t.offsetWidth / 2)) + "px";
      clearTimeout(tipT); tipT = setTimeout(function () { t.remove(); }, 2400);
    }

    /* ----- modallar ----- */
    function modalAc(baslikM, govde, butonlar, kucuk) {
      modalKapat();
      var v = document.createElement("div");
      v.className = "bbk-veil";
      v.innerHTML = '<div class="bbk-modal' + (kucuk ? " bbk-modal--sm" : "") + '" role="dialog" aria-modal="true" aria-labelledby="bbk-m-h" tabindex="-1">' +
        '<div class="bbk-modal__head"><h2 id="bbk-m-h">' + baslikM + '</h2><button type="button" data-mk="x" aria-label="Close">' + I.close + '</button></div>' +
        '<div class="bbk-modal__body">' + govde + '</div>' +
        '<div class="bbk-modal__foot">' + butonlar + '</div></div>';
      document.body.appendChild(v);
      var onceki = document.activeElement;
      modal = { el: v, geri: onceki };
      v.addEventListener("click", function (e) { if (e.target === v || e.target.closest('[data-mk="x"],[data-mk="no"]')) modalKapat(); });
      var ilk = v.querySelector(".bbk-yes") || v.querySelector("button");
      if (ilk) ilk.focus();
      return v;
    }
    function modalKapat() {
      if (!modal) return;
      var g = modal.geri; modal.el.remove(); modal = null;
      if (g && g.focus) try { g.focus(); } catch (e) {}
    }
    function kisayollar() {
      var c = MAC ? { a: "Command + Ctrl + ", b: "Command + Option + ", m: "Command + Shift + V" } : { a: "Ctrl + Alt + ", b: "Ctrl + Alt + Shift + ", m: "Ctrl + Shift + V" };
      /* harf aralığı sorulardaki en çok şık sayısından (A–D ya da A–E) */
      var SIK = Q.reduce(function (m, q) { return Math.max(m, q.o.length); }, 2), SON = String.fromCharCode(64 + SIK);
      var rows = [
        ["Open/Close Keyboard Shortcuts", "F1"],
        ["Back", c.a + "B"], ["Next", c.a + "X"], ["Open/Close Question Menu", c.a + "G"],
        ["Hide/Show Timer", c.b + "T"], ["Mark for Review", c.m],
        ["Open/Close Calculator", calcVar ? c.b + "C" : "N/A"],
        ["Option Eliminator Mode", c.b + "O"],
        ["Select/Deselect Option A–" + SON, c.a + "1 … " + SIK + "  (or the letter keys A–" + SON + ")"],
        ["Eliminate Option A–" + SON, c.b + "1 … " + SIK],
        ["Close a menu or window", "Esc"]
      ];
      modalAc("Keyboard Shortcuts", '<p>Keyboard shortcuts for ' + (MAC ? "Mac" : "Windows") + '. They do not work while you type in a note.</p><table class="bbk-keys"><thead><tr><th>Action</th><th>Shortcut</th></tr></thead><tbody>' +
        rows.map(function (r) { return '<tr><td>' + r[0] + '</td><td><kbd>' + r[1] + '</kbd></td></tr>'; }).join("") + '</tbody></table>',
        '<button type="button" class="bbk-yes" data-mk="no">Close</button>');
    }
    function yardim() {
      modalAc("Help", '<p><strong>Answering:</strong> click an answer choice to select it; click it again to clear it.</p>' +
        '<p><strong>Mark for Review:</strong> flag a question you want to come back to. Flags show on the question menu and the review page.</p>' +
        '<p><strong>ABC (Option Eliminator):</strong> turn it on, then click the circle next to a choice to cross it out. Click <strong>Undo</strong> to bring it back.</p>' +
        '<p><strong>Highlights &amp; Notes:</strong> select words in a question, then click <strong>Highlights &amp; Notes</strong>. Click a highlight to change its color, underline it, add a note or delete it.</p>' +
        '<p><strong>Question menu:</strong> click <strong>Question X of ' + N + '</strong> at the bottom to jump to any question, or open the review page.</p>' +
        '<p><strong>Save and Exit:</strong> your answers are saved and the timer stops until you come back.</p>',
        '<button type="button" class="bbk-yes" data-mk="no">Close</button>');
    }
    function cikis() {
      var v = modalAc("Save and Exit", '<p>Your progress has been saved, and you have not yet submitted the ' + tur + '.</p><p>The timer stops while you are away; when you come back you continue with <strong>' + esc(fmt(Math.max(0, (S.endAt - Date.now()) / 1000))) + '</strong> left.</p><p>Do you want to exit the ' + tur + '?</p>',
        '<button type="button" class="bbk-no" data-mk="no">No</button><button type="button" class="bbk-yes" data-mk="yes">Yes</button>', true);
      v.querySelector('[data-mk="yes"]').onclick = function () {
        hlKaydet(); calcKaydet();
        S.paused = true; S.left = Math.max(0, S.endAt - Date.now()); save();
        location.href = uniteUrl;
      };
    }
    function gonder() {
      var bos = S.ans.filter(function (v) { return v < 0; }).length;
      var v = modalAc(o.turAd ? "Submit Test" : "Submit Practice Test", (bos ? '<p>You have <strong>' + bos + ' unanswered question' + (bos > 1 ? "s" : "") + '</strong>. Unanswered questions count as incorrect.</p>' : '<p>You answered all ' + N + ' questions.</p>') +
        '<p>Once you submit, you can\'t change your answers. Are you sure you want to submit?</p>',
        '<button type="button" class="bbk-no" data-mk="no">No</button><button type="button" class="bbk-yes" data-mk="yes">Yes, Submit</button>', true);
      v.querySelector('[data-mk="yes"]').onclick = function () { bitir(false); };
    }

    /* ----- vurgular ----- */
    function hlKaydet() {
      $$("[data-hl]").forEach(function (el) {
        var h = S.hl[S.i] || (S.hl[S.i] = {});
        if (el.querySelector("mark.bbk-hl")) h[el.dataset.hl] = el.innerHTML.replace(/ is-active/g, ""); else delete h[el.dataset.hl];
        if (!h.q && !h.s) delete S.hl[S.i];
      });
    }
    function hlKapat() { var b = $(".bbk-hlbar"); if (b) b.remove(); $$("mark.bbk-hl.is-active").forEach(function (m) { m.classList.remove("is-active"); }); hlAktif = null; }
    function hlAc(id) {
      hlKapat();
      var marks = $$('mark.bbk-hl[data-id="' + id + '"]'); if (!marks.length) return;
      hlAktif = id;
      marks.forEach(function (m) { m.classList.add("is-active"); });
      var m0 = marks[0], c = m0.dataset.c || "yellow", u = m0.dataset.u === "1", note = m0.dataset.note || "";
      var bar = document.createElement("div");
      bar.className = "bbk-hlbar"; bar.setAttribute("role", "dialog"); bar.setAttribute("aria-label", "Highlight options");
      bar.innerHTML = '<div class="bbk-hlbar__row">' + ["yellow", "blue", "pink"].map(function (k2) {
          return '<button type="button" class="bbk-sw bbk-sw--' + k2 + '" data-hc="' + k2 + '" aria-pressed="' + (c === k2) + '" aria-label="' + k2 + ' highlight"></button>'; }).join("") +
        '<span class="bbk-hlbar__sep"></span><button type="button" class="bbk-ib" data-hu aria-pressed="' + u + '" aria-label="Underline">' + I.under + '</button>' +
        '<button type="button" class="bbk-ib" data-hn aria-label="Note">' + I.note + '</button>' +
        '<button type="button" class="bbk-ib" data-hd aria-label="Delete highlight">' + I.trash + '</button></div>' +
        '<textarea data-ht placeholder="Add a note…" aria-label="Note"' + (note ? "" : " hidden") + '></textarea>';
      document.body.appendChild(bar);
      bar.querySelector("[data-ht]").value = note;
      var r = m0.getBoundingClientRect();
      var top = r.bottom + 8; if (top + 140 > innerHeight) top = Math.max(8, r.top - 8 - bar.offsetHeight);
      bar.style.top = top + "px";
      bar.style.left = Math.max(8, Math.min(innerWidth - bar.offsetWidth - 8, r.left)) + "px";
      bar.addEventListener("click", function (e) {
        var b = e.target.closest("button"); if (!b) return;
        var ms = $$('mark.bbk-hl[data-id="' + id + '"]');
        if (b.dataset.hc) { ms.forEach(function (m) { m.dataset.c = b.dataset.hc; }); $$("[data-hc]", bar).forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); }); }
        else if (b.hasAttribute("data-hu")) { var on = ms[0].dataset.u !== "1"; ms.forEach(function (m) { if (on) m.dataset.u = "1"; else delete m.dataset.u; }); b.setAttribute("aria-pressed", String(on)); }
        else if (b.hasAttribute("data-hn")) { var ta = bar.querySelector("[data-ht]"); ta.hidden = false; ta.focus(); }
        else if (b.hasAttribute("data-hd")) { $$("[data-hl]").forEach(function (el) { coz(el, id); }); hlKapat(); }
        hlKaydet(); save();
      });
      bar.querySelector("[data-ht]").addEventListener("input", function (e) {
        var v = e.target.value.slice(0, 1000);
        $$('mark.bbk-hl[data-id="' + id + '"]').forEach(function (m) { if (v) m.dataset.note = v; else delete m.dataset.note; m.title = v; });
        hlKaydet(); save();
      });
    }
    function hlYap() {
      var sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) return false;
      var rg = sel.getRangeAt(0), kok = null;
      $$("[data-hl]").forEach(function (el) { if (el.contains(rg.commonAncestorContainer)) kok = el; });
      if (!kok) return false;
      var id = "h" + Date.now().toString(36);
      var ms = sar(rg, kok, id);
      sel.removeAllRanges();
      if (!ms.length) return false;
      hlKaydet(); save(); hlAc(id);
      return true;
    }

    /* ----- hesap makinesi (Desmos) ----- */
    var calcEl = null, calcObj = null, desmosYuk = null;
    function desmosGetir() {
      if (window.Desmos) return Promise.resolve(window.Desmos);
      if (desmosYuk) return desmosYuk;
      desmosYuk = new Promise(function (ok, red) {
        var s = document.createElement("script"); s.src = DESMOS_URL; s.async = true;
        s.onload = function () { window.Desmos ? ok(window.Desmos) : red(); };
        s.onerror = function () { desmosYuk = null; red(); };
        document.head.appendChild(s);
      });
      return desmosYuk;
    }
    function calcKaydet() { if (calcObj) try { S.desmos = calcObj.getState(); save(); } catch (e) {} }
    function calcAc() {
      if (calcEl) { calcEl.hidden = !calcEl.hidden; if (calcEl.hidden) calcKaydet(); else if (calcObj) calcObj.resize(); calcDurum(); return; }
      calcEl = document.createElement("section");
      calcEl.className = "bbk-calc"; calcEl.setAttribute("role", "dialog"); calcEl.setAttribute("aria-label", "Calculator");
      calcEl.innerHTML = '<div class="bbk-calc__head" data-cdrag>' + I.grip + '<h2>Calculator</h2><button type="button" data-cw aria-label="Expand calculator">' + I.expand + '</button><button type="button" data-cx aria-label="Close calculator">' + I.close + '</button></div>' +
        '<div class="bbk-calc__body"><div data-cbox style="position:absolute;inset:0"></div><div class="bbk-calc__msg" data-cmsg>Loading the calculator…</div></div><span class="bbk-calc__rs" data-crs aria-hidden="true"></span>';
      document.body.appendChild(calcEl);
      calcEl.querySelector("[data-cx]").onclick = function () { calcEl.hidden = true; calcKaydet(); calcDurum(); };
      calcEl.querySelector("[data-cw]").onclick = function () {
        var w = calcEl.dataset.wide !== "true"; calcEl.dataset.wide = String(w);
        this.innerHTML = w ? I.shrink : I.expand; this.setAttribute("aria-label", w ? "Collapse calculator" : "Expand calculator");
        if (calcObj) calcObj.resize();
      };
      surukle(calcEl.querySelector("[data-cdrag]"), function (dx, dy, bas) {
        calcEl.style.left = Math.max(0, Math.min(innerWidth - 120, bas.l + dx)) + "px";
        calcEl.style.top = Math.max(0, Math.min(innerHeight - 60, bas.t + dy)) + "px";
      }, function () { return { l: calcEl.offsetLeft, t: calcEl.offsetTop }; });
      surukle(calcEl.querySelector("[data-crs]"), function (dx, dy, bas) {
        calcEl.style.width = Math.max(320, bas.w + dx) + "px"; calcEl.style.height = Math.max(300, bas.h + dy) + "px";
        if (calcObj) calcObj.resize();
      }, function () { return { w: calcEl.offsetWidth, h: calcEl.offsetHeight }; });
      calcDurum();
      desmosGetir().then(function (D) {
        var kutu = calcEl.querySelector("[data-cbox]");
        calcObj = D.GraphingCalculator(kutu, { keypad: true, expressions: true, settingsMenu: true, zoomButtons: true, expressionsTopbar: true, border: false, images: false, folders: false, notes: false, links: false, qwertyKeyboard: true });
        if (S.desmos) try { calcObj.setState(S.desmos); } catch (e) {}
        calcEl.querySelector("[data-cmsg]").remove();
        calcObj.observeEvent("change", function () { clearTimeout(calcObj._t); calcObj._t = setTimeout(calcKaydet, 1500); });
      }, function () {
        calcEl.querySelector("[data-cmsg]").textContent = "The calculator couldn't load. Check your internet connection and try again.";
      });
    }
    function calcDurum() { $('[data-k="calc"]').setAttribute("aria-pressed", String(!!calcEl && !calcEl.hidden)); }

    function surukle(tut, hareket, olc) {
      tut.addEventListener("pointerdown", function (e) {
        if (e.target.closest("button")) return;
        e.preventDefault();
        var x0 = e.clientX, y0 = e.clientY, bas = olc();
        tut.setPointerCapture(e.pointerId);
        function mv(ev) { hareket(ev.clientX - x0, ev.clientY - y0, bas); }
        function up() { tut.removeEventListener("pointermove", mv); tut.removeEventListener("pointerup", up); tut.removeEventListener("pointercancel", up); }
        tut.addEventListener("pointermove", mv); tut.addEventListener("pointerup", up); tut.addEventListener("pointercancel", up);
      });
    }

    /* ----- satır okuyucu ----- */
    var reader = null;
    function okuyucu() {
      if (reader) { reader.remove(); reader = null; return; }
      reader = document.createElement("div");
      reader.className = "bbk-reader"; reader.setAttribute("aria-hidden", "true");
      reader.style.top = Math.round(innerHeight / 2 - 42) + "px";
      reader.innerHTML = '<div class="bbk-reader__bar"><button type="button" data-rl>Lines: 3</button><button type="button" data-rx>' + I.close.replace('width="20" height="20"', 'width="14" height="14"') + 'Close</button></div>';
      document.body.appendChild(reader);
      var satir = [28, 56, 84], si = 2;
      reader.querySelector("[data-rx]").onclick = function () { okuyucu(); };
      reader.querySelector("[data-rl]").onclick = function () { si = (si + 1) % 3; reader.style.height = satir[si] + "px"; this.textContent = "Lines: " + (si + 1); };
    }
    document.addEventListener("pointermove", function (e) {
      if (!reader || e.target.closest(".bbk-reader__bar")) return;
      reader.style.top = Math.max(0, Math.min(innerHeight - reader.offsetHeight, e.clientY - reader.offsetHeight / 2)) + "px";
    });

    /* ----- bölme çubuğu ----- */
    $('[data-k="main"]').addEventListener("pointerdown", function (e) {
      var d = e.target.closest('[data-k="divider"]'); if (!d) return;
      e.preventDefault();
      var split = d.parentNode, r = split.getBoundingClientRect();
      d.setPointerCapture(e.pointerId);
      function mv(ev) { var p = Math.max(25, Math.min(75, (ev.clientX - r.left) / r.width * 100)); S.split = Math.round(p); split.style.setProperty("--split", S.split + "%"); }
      function up() { d.removeEventListener("pointermove", mv); d.removeEventListener("pointerup", up); save(); }
      d.addEventListener("pointermove", mv); d.addEventListener("pointerup", up);
    });

    /* ----- tıklamalar ----- */
    function sec(i, ac) { S.ans[S.i] = (ac && S.ans[S.i] === i) ? -1 : i; var cr = S.x[S.i], kk = cr.indexOf(i); if (S.ans[S.i] === i && kk > -1) cr.splice(kk, 1); hlKaydet(); save(); render(); }
    function ele(i) { var cr = S.x[S.i], kk = cr.indexOf(i); if (kk > -1) cr.splice(kk, 1); else { cr.push(i); if (S.ans[S.i] === i) S.ans[S.i] = -1; } hlKaydet(); save(); render(); }
    function adim(d) {
      if (S.review) { if (d < 0) git(N - 1); else gonder(); return; }
      if (d > 0 && S.i === N - 1) { hlKaydet(); S.review = true; acik = null; save(); render(); return; }
      git(S.i + d);
    }
    document.addEventListener("click", function (e) {
      var t = e.target;
      if (t.closest(".bbk-hlbar, .bbk-veil, .bbk-calc, .bbk-reader__bar")) return;
      var mk = t.closest("mark.bbk-hl");
      if (mk && !(window.getSelection() && !window.getSelection().isCollapsed)) { hlAc(mk.dataset.id); return; }
      if (hlAktif) hlKapat();
      var opt = t.closest(".bbk-opt"); if (opt) { sec(+opt.dataset.o); return; }
      var x = t.closest(".bbk-x"); if (x) { ele(+x.dataset.x); return; }
      var g = t.closest("[data-go]"); if (g) { git(+g.dataset.go); return; }
      var m = t.closest("[data-m]");
      if (m) { acik = null; acKapa(); ({ help: yardim, keys: kisayollar, reader: okuyucu, exit: cikis, dir: function () { acik = "dir"; acKapa(); } })[m.dataset.m](); return; }
      var b = t.closest("button[data-k]");
      var icerde = t.closest(".bbk-pop");
      if (!b) { if (acik && !icerde) { acik = null; acKapa(); } return; }
      switch (b.dataset.k) {
        case "mark": S.mark[S.i] = !S.mark[S.i]; save(); b.setAttribute("aria-pressed", String(S.mark[S.i])); $('[data-k="grid"]').innerHTML = hucreler(true); return;
        case "elim": S.elim = !S.elim; save(); app.dataset.elim = String(S.elim); b.setAttribute("aria-pressed", String(S.elim)); return;
        case "nav": acik = acik === "nav" ? null : "nav"; acKapa(); if (acik) { var c = $('[data-k="navpop"] [aria-current]'); if (c) c.focus(); } return;
        case "navclose": acik = null; acKapa(); $('[data-k="nav"]').focus(); return;
        case "more": acik = acik === "menu" ? null : "menu"; acKapa(); if (acik) $('[data-m="help"]').focus(); return;
        case "dir": acik = acik === "dir" ? null : "dir"; acKapa(); return;
        case "dirclose": acik = null; acKapa(); $('[data-k="dir"]').focus(); return;
        case "toreview": hlKaydet(); S.review = true; acik = null; save(); render(); return;
        case "back": adim(-1); return;
        case "next": adim(1); return;
        case "hide": S.hideT = !S.hideT; save(); saat(); return;
        case "calc": acik = null; acKapa(); calcAc(); return;
        case "hl": acik = null; acKapa(); if (!hlYap()) ipucu(b, "Make a selection first."); return;
        default: if (acik && !icerde) { acik = null; acKapa(); }
      }
    });
    /* seçimi Highlights & Notes'a basmadan önce kaybetmemek için */
    $('[data-k="hl"]').addEventListener("mousedown", function (e) { e.preventDefault(); });

    /* ----- klavye ----- */
    document.addEventListener("keydown", function (e) {
      var yaziyor = e.target.closest && e.target.closest("input, textarea, select, [contenteditable], .bbk-calc");
      if (e.key === "Escape") {
        if (modal) modalKapat(); else if (hlAktif) hlKapat(); else if (acik) { acik = null; acKapa(); } else if (reader) okuyucu();
        return;
      }
      if (e.key === "F1") { e.preventDefault(); if (modal) modalKapat(); else kisayollar(); return; }
      if (yaziyor || modal) return;
      var g1 = MAC ? (e.metaKey && e.ctrlKey && !e.altKey) : (e.ctrlKey && e.altKey && !e.shiftKey && !e.metaKey);
      var g2 = MAC ? (e.metaKey && e.altKey && !e.ctrlKey) : (e.ctrlKey && e.altKey && e.shiftKey);
      var gm = MAC ? (e.metaKey && e.shiftKey && !e.altKey && !e.ctrlKey) : (e.ctrlKey && e.shiftKey && !e.altKey);
      var code = e.code || "", dig = /^Digit([1-5])$/.exec(code), n = dig ? +dig[1] - 1 : -1;
      var act = null;
      if (g1 && code === "KeyB") act = function () { adim(-1); };
      else if (g1 && code === "KeyX") act = function () { adim(1); };
      else if (g1 && code === "KeyG") act = function () { if (!S.review) { acik = acik === "nav" ? null : "nav"; acKapa(); } };
      else if (g1 && n > -1 && !S.review && n < Q[S.i].o.length) act = function () { sec(n, true); };
      else if (g2 && code === "KeyT") act = function () { S.hideT = !S.hideT; save(); saat(); };
      else if (g2 && code === "KeyC" && calcVar) act = calcAc;
      else if (g2 && code === "KeyO") act = function () { S.elim = !S.elim; save(); render(); };
      else if (g2 && n > -1 && !S.review && n < Q[S.i].o.length) act = function () { if (!S.elim) S.elim = true; ele(n); };
      else if (gm && code === "KeyV" && !S.review) act = function () { S.mark[S.i] = !S.mark[S.i]; save(); render(); };
      else if (!e.metaKey && !e.ctrlKey && !e.altKey && !S.review && e.key.length === 1) {
        var li = L.indexOf(e.key.toUpperCase());
        if (li > -1 && li < Q[S.i].o.length) act = function () { sec(li); };
      }
      if (act) { e.preventDefault(); act(); }
    });

    window.addEventListener("pagehide", function () { hlKaydet(); calcKaydet(); save(); });
    if (Date.now() >= S.endAt) { bitir(true); return; }
    render();
    setInterval(saat, 1000);
  }

  window.KPBluebook = { basla: basla, hata: hata };
})();
