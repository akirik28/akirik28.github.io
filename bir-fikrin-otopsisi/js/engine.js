/* ============================================================
   SUNUM MOTORU
   → / SPACE / ENTER / PAGE DOWN / tıklama : ileri
   ← / PAGE UP                             : geri
   F : tam ekran · B veya . : ekranı karart · O : dosya listesi
   P : sunucu penceresi (notlar + süre)    · N : ekran içi notlar (prova)
   HOME / END : başa / sona
   ============================================================ */
(function () {
  "use strict";

  var SC = window.SCENES, CFG = window.CONFIG, C = window.CONTENT;
  var root = document.documentElement;
  var stage = document.getElementById("stage");
  var wrap = document.getElementById("scenes");
  var hud = document.getElementById("hud");
  var blackout = document.getElementById("blackout");
  var overview = document.getElementById("overview");
  var keyhint = document.getElementById("keyhint");

  var E = window.ENGINE = { index: -1, step: 0, scale: 1, ctx: null };

  /* ---------- Vurgu rengi ---------- */
  (function () {
    var hex = (CFG.accent || "#6FE3C6").replace("#", "");
    if (hex.length === 3) hex = hex.split("").map(function (c) { return c + c; }).join("");
    var n = parseInt(hex, 16), r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    root.style.setProperty("--accent", "#" + hex);
    root.style.setProperty("--accent-dim", "rgba(" + r + "," + g + "," + b + ",.16)");
  })();
  if (CFG.grain === false) document.body.classList.add("no-grain");

  var FILE_NAMES = { "final": "Final" };
  C.index.rows.forEach(function (r) { FILE_NAMES[r.n] = r.t; });

  /* ---------- Renk: her dosyanın kendi rengi ---------- */
  var FCOL = CFG.fileColors || {};
  function sceneColor(def) { return def.accent || (def.file != null && FCOL[def.file]) || CFG.accent || "#6FE3C6"; }
  function rgba(hex, a) {
    var h = hex.replace("#", "");
    if (h.length === 3) h = h.split("").map(function (c) { return c + c; }).join("");
    var n = parseInt(h, 16);
    return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")";
  }

  /* ---------- Sahneleri oluştur ---------- */
  SC.forEach(function (def, i) {
    var el = document.createElement("section");
    el.className = "scene " + (def.cls || "");
    el.setAttribute("data-id", def.id);
    def.color = sceneColor(def);
    el.style.setProperty("--accent", def.color);
    el.style.setProperty("--accent-dim", rgba(def.color, 0.16));
    if (def.file != null) el.setAttribute("data-file", def.file);
    el.innerHTML = typeof def.html === "function" ? def.html() : def.html;
    wrap.appendChild(el);
    def.el = el;
    def.index = i;
    def.title = def.title || def.id;
    if (def.init) def.init(el);
    def.stepEls = Array.prototype.slice.call(el.querySelectorAll("[data-s],[data-u]"));
  });
  var VISIBLE = SC.filter(function (d) { return !d.hidden; });

  /* ---------- Ölçekleme (1920×1080 → ekran) ---------- */
  function fit() {
    var w = window.innerWidth, h = window.innerHeight;
    var s = Math.min(w / 1920, h / 1080);
    E.scale = s;
    var x = (w - 1920 * s) / 2, y = (h - 1080 * s) / 2;
    stage.style.transform = "translate(" + x + "px," + y + "px) scale(" + s + ")";
  }
  var rT;
  window.addEventListener("resize", function () {
    fit();
    clearTimeout(rT);
    rT = setTimeout(function () {
      var d = SC[E.index];
      if (d && d.resize) d.resize(E.ctx);
    }, 200);
  });
  fit();

  /* ---------- Bağlam (zamanlayıcılar, animasyon döngüleri) ---------- */
  function makeCtx(def, instant) {
    var ctx = { el: def.el, def: def, instant: instant, timers: [], rafs: [], cleanups: [] };
    Object.defineProperty(ctx, "step", { get: function () { return E.step; } });
    ctx.after = function (ms, fn) { var t = setTimeout(fn, ms); ctx.timers.push(t); return t; };
    ctx.clearTimers = function () { ctx.timers.forEach(clearTimeout); ctx.timers = []; };
    ctx.raf = function (fn) {
      var rec = { id: 0, alive: true };
      var loop = function (now) {
        if (!rec.alive) return;
        if (fn(now) !== false) rec.id = requestAnimationFrame(loop);
      };
      rec.id = requestAnimationFrame(loop);
      ctx.rafs.push(rec);
    };
    ctx.cleanup = function (fn) { if (typeof fn === "function") ctx.cleanups.push(fn); };
    ctx.dispose = function () {
      ctx.clearTimers();
      ctx.rafs.forEach(function (r) { r.alive = false; cancelAnimationFrame(r.id); });
      ctx.cleanups.forEach(function (f) { try { f(); } catch (e) {} });
      ctx.rafs = []; ctx.cleanups = [];
    };
    return ctx;
  }

  /* ---------- Adım uygulama ---------- */
  function applyStep(def, n) {
    var el = def.el;
    el.setAttribute("data-step", n);
    for (var k = 0; k <= Math.max(def.steps, 8); k++) {
      if (k >= 1) el.classList.toggle("r" + k, n >= k);
      el.classList.toggle("s" + k, n === k);
    }
    def.stepEls.forEach(function (x) {
      var s = x.hasAttribute("data-s") ? +x.getAttribute("data-s") : 0;
      var u = x.hasAttribute("data-u") ? +x.getAttribute("data-u") : Infinity;
      x.classList.toggle("on", n >= s && n < u);
    });
  }

  /* ---------- Gezinme ---------- */
  var hudForced = null;
  function go(i, opt) {
    opt = opt || {};
    i = Math.max(0, Math.min(SC.length - 1, i));
    var def = SC[i];
    var start = opt.step != null ? Math.min(opt.step, def.steps - 1) : (opt.end ? def.steps - 1 : 0);
    if (i === E.index) { setStep(start); return; }

    var prevIdx = E.index;
    if (prevIdx >= 0) {
      var od = SC[prevIdx];
      if (od.leave) od.leave(E.ctx);
      if (E.ctx) E.ctx.dispose();
      od.el.classList.remove("is-active", "instant");
      od.el.classList.add("is-leaving");
      (function (oel) { setTimeout(function () { oel.classList.remove("is-leaving"); }, 750); })(od.el);
    }
    stage.classList.toggle("dir-back", i < prevIdx);
    stage.style.setProperty("--file", def.color);
    stage.classList.toggle("on-cover", /sc-file/.test(def.cls || ""));
    E.index = i;
    E.step = start;
    hudForced = null;

    var instant = !!(opt.instant || opt.end || start > 0);
    var el = def.el;
    E.ctx = makeCtx(def, instant);
    el.classList.toggle("instant", instant);
    el.classList.add("no-anim");
    if (instant) {
      applyStep(def, start);
      if (def.step) def.step(E.ctx, start, -1);
    } else {
      def.stepEls.forEach(function (x) { x.classList.remove("on"); });
    }
    void el.offsetWidth;
    el.classList.remove("no-anim");
    el.classList.add("is-active");
    if (!instant) {
      applyStep(def, start);
      if (def.step) def.step(E.ctx, start, -1);
    }
    if (def.enter) def.enter(E.ctx);

    afterChange();
  }

  function setStep(n) {
    var def = SC[E.index];
    n = Math.max(0, Math.min(def.steps - 1, n));
    var prev = E.step;
    E.step = n;
    applyStep(def, n);
    if (def.step) def.step(E.ctx, n, prev);
    afterChange();
  }

  function next() {
    var def = SC[E.index];
    if (def.next && def.next(E.ctx)) { afterChange(); return; }
    if (E.step < def.steps - 1) setStep(E.step + 1);
    else if (E.index < SC.length - 1) go(E.index + 1);
  }
  function prev() {
    var def = SC[E.index];
    if (def.prev && def.prev(E.ctx)) { afterChange(); return; }
    if (E.step > 0) setStep(E.step - 1);
    else if (E.index > 0) go(E.index - 1, { end: true });
  }

  E.go = go; E.next = next; E.prev = prev; E.setStep = setStep;
  E.setHud = function (v) { hudForced = v === true ? null : v; updateHud(); };

  /* ---------- HUD ---------- */
  hud.innerHTML =
    '<div class="hud-tl">Bir Fikrin Otopsisi · ' + CFG.group + "</div>" +
    '<div class="hud-bl"></div>' +
    '<div class="hud-br"><div class="hud-step"></div><div class="bar"><i></i></div><div class="num"></div></div>';
  var hudBL = hud.querySelector(".hud-bl"), hudNum = hud.querySelector(".num"), hudBar = hud.querySelector(".bar i"), hudStep = hud.querySelector(".hud-step");
  var hudBR = hud.querySelector(".hud-br");
  if (!CFG.showProgress) hudBR.style.display = "none";

  function fileLabel(def) {
    if (!def.file) return "";
    if (def.file === "final") return "FİNAL · DOSYA 00 OTOPSİSİ";
    return "DOSYA " + def.file + " — " + (FILE_NAMES[def.file] || "");
  }
  function updateHud() {
    var def = SC[E.index];
    var show = def.hud !== false && (def.hudWhen ? def.hudWhen() : true) && hudForced !== false;
    hud.classList.toggle("off", !show);
    hudBL.textContent = fileLabel(def).toLocaleUpperCase("tr-TR");
    var vi = VISIBLE.indexOf(def);
    if (vi >= 0) {
      hudNum.innerHTML = pad2(vi + 1) + " <span>/ " + pad2(VISIBLE.length) + "</span>";
      hudBar.style.width = ((vi + 1) / VISIBLE.length * 100) + "%";
    }
    var dots = "";
    if (def.steps > 1) for (var k = 0; k < def.steps; k++) dots += "<i" + (k <= E.step ? ' class="on"' : "") + "></i>";
    hudStep.innerHTML = dots;
  }
  function pad2(n) { return (n < 10 ? "0" : "") + n; }

  function afterChange() {
    updateHud();
    try { history.replaceState(null, "", "#" + (E.index + 1) + (E.step ? "." + E.step : "")); } catch (e) {}
    presenterUpdate();
    updateNotesPanel();
    if (E.index > 0) keyhint.classList.add("off");
  }

  /* ---------- Klavye ---------- */
  function onKey(e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key;
    if (!overview.hidden) {
      if (k === "Escape" || k === "o" || k === "O") { e.preventDefault(); toggleOverview(false); }
      return;
    }
    if (blackout.classList.contains("on") && k !== "b" && k !== "B" && k !== ".") {
      blackout.classList.remove("on");
      if (k === "ArrowRight" || k === " " || k === "ArrowLeft") { e.preventDefault(); return; }
    }
    var def = SC[E.index];
    if (def.key && def.key(E.ctx, e)) { e.preventDefault(); return; }
    switch (k) {
      case "ArrowRight": case "ArrowDown": case "PageDown": case " ": case "Enter":
        e.preventDefault(); next(); break;
      case "ArrowLeft": case "ArrowUp": case "PageUp": case "Backspace":
        e.preventDefault(); prev(); break;
      case "Home": e.preventDefault(); go(0); break;
      case "End": e.preventDefault(); go(SC.indexOf(VISIBLE[VISIBLE.length - 1])); break;
      case "f": case "F": e.preventDefault(); toggleFullscreen(); break;
      case "b": case "B": case ".": e.preventDefault(); blackout.classList.toggle("on"); break;
      case "o": case "O": e.preventDefault(); toggleOverview(true); break;
      case "p": case "P": e.preventDefault(); openPresenter(); break;
      case "n": case "N": e.preventDefault(); toggleNotes(); break;
    }
  }
  document.addEventListener("keydown", onKey);

  /* ---------- Fare / dokunma ---------- */
  stage.addEventListener("click", function (e) {
    if (blackout.classList.contains("on")) { blackout.classList.remove("on"); return; }
    if (e.target.closest("[data-interactive], button, a, input, video, #overview")) return;
    next();
  });
  var tx0 = null, ty0 = null;
  stage.addEventListener("touchstart", function (e) { tx0 = e.touches[0].clientX; ty0 = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    if (tx0 === null) return;
    var dx = e.changedTouches[0].clientX - tx0, dy = e.changedTouches[0].clientY - ty0;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) { if (dx < 0) next(); else prev(); }
    tx0 = null;
  });

  /* Butonlar odak almasın: aksi hâlde SPACE hem ilerletir hem butona tıklar */
  document.addEventListener("mousedown", function (e) { if (e.target.closest && e.target.closest("button")) e.preventDefault(); });

  var curT;
  function wake() {
    document.body.classList.remove("hide-cursor");
    clearTimeout(curT);
    curT = setTimeout(function () { document.body.classList.add("hide-cursor"); }, 2600);
  }
  document.addEventListener("mousemove", wake);
  wake();

  /* ---------- Tam ekran ---------- */
  function toggleFullscreen() {
    var d = document;
    if (!d.fullscreenElement && !d.webkitFullscreenElement) {
      var r = root.requestFullscreen || root.webkitRequestFullscreen;
      if (r) { var p = r.call(root); if (p && p.catch) p.catch(function () {}); }
    } else {
      var x = d.exitFullscreen || d.webkitExitFullscreen;
      if (x) x.call(d);
    }
  }

  /* ---------- Dosya listesi (O) ---------- */
  function buildOverview() {
    var groups = [], map = {};
    SC.forEach(function (d) {
      var g = d.file === null || d.file === undefined ? (d.hidden ? "EKLER" : "AÇILIŞ") : (d.file === "final" ? "FİNAL" : "DOSYA " + d.file);
      if (!map[g]) { map[g] = []; groups.push(g); }
      map[g].push(d);
    });
    var html = '<div class="ov-head"><h4>DOSYA LİSTESİ</h4><div>TIKLA: GİT · O / ESC: KAPAT</div></div>';
    groups.forEach(function (g) {
      html += '<div><h4 style="color:' + map[g][0].color + '">' + g + "</h4>" + map[g].map(function (d) {
        var vi = VISIBLE.indexOf(d);
        return '<button data-i="' + d.index + '"><span>' + (vi >= 0 ? pad2(vi + 1) : "··") + "</span>" + d.title + "</button>";
      }).join("") + "</div>";
    });
    overview.innerHTML = html;
    overview.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleOverview(false);
        go(+b.getAttribute("data-i"), { instant: true });
      });
    });
  }
  function toggleOverview(on) {
    if (on) {
      buildOverview();
      var cur = overview.querySelector('button[data-i="' + E.index + '"]');
      if (cur) cur.classList.add("cur");
    }
    overview.hidden = !on;
  }

  /* ---------- Kısa bildirim ---------- */
  var toastEl = document.createElement("div");
  toastEl.id = "toast";
  stage.appendChild(toastEl);
  var toastT;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("on");
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove("on"); }, 3600);
  }

  /* ---------- Ekran içi not paneli (N) — prova için ---------- */
  var notesEl = document.createElement("div");
  notesEl.id = "notes-panel";
  notesEl.hidden = true;
  stage.appendChild(notesEl);
  function updateNotesPanel() {
    if (notesEl.hidden) return;
    var def = SC[E.index];
    notesEl.innerHTML = "<div class=\"np-h\">" + (fileLabel(def) || "AÇILIŞ") + " · " + def.title + (def.steps > 1 ? " · ADIM " + (E.step + 1) + "/" + def.steps : "") + "</div><p>" + (def.notes || "") + "</p>";
  }
  function toggleNotes() { notesEl.hidden = !notesEl.hidden; updateNotesPanel(); }

  /* ---------- Sunucu penceresi (P) ---------- */
  var pw = null;
  /* Süre sayacı: video oynarken durur (sınır video hariç 10 dakika) */
  var elapsed = 0, lastTick = Date.now();
  function parseT(t) { var p = String(t || "0:00").split(":"); return (+p[0]) * 60 + (+p[1] || 0); }
  function fmtT(s) { s = Math.max(0, Math.floor(s)); return pad2(Math.floor(s / 60)) + ":" + pad2(s % 60); }
  function targetFor(def) {
    var T = CFG.timing || {};
    var k = def.file == null ? "intro" : def.file;
    return T[k] ? parseT(T[k]) : null;
  }
  function openPresenter() {
    if (pw && !pw.closed) { pw.focus(); return; }
    pw = window.open("", "otopsi-sunucu", "width=980,height=680");
    if (!pw) { toast("Açılır pencere engellendi — adres çubuğundaki simgeden izin verin. (Notları bu ekranda görmek için: N)"); return; }
    var d = pw.document;
    d.open();
    d.write('<!doctype html><html lang="tr"><head><meta charset="utf-8"><title>Sunucu — Bir Fikrin Otopsisi</title>' +
      '<link rel="stylesheet" href="' + new URL("assets/fonts/fonts.css", location.href).href + '">' +
      "<style>body{margin:0;background:#0A0A0B;color:#ECE8DF;font-family:Inter,Helvetica,Arial,sans-serif;padding:34px 40px}" +
      ".m{font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:.14em;color:rgba(236,232,223,.45);text-transform:uppercase}" +
      "#top{display:flex;justify-content:space-between;align-items:baseline;border-bottom:1px solid rgba(236,232,223,.15);padding-bottom:16px}" +
      "#clock{font-family:'JetBrains Mono',monospace;font-size:44px;font-variant-numeric:tabular-nums;transition:color .4s}" +
      "#target{margin-top:4px}#clock.ok{color:#B8EC52}#clock.warn{color:#FFCF4A}#clock.over{color:#FF4B3E}" +
      "#title{font-size:34px;font-weight:700;letter-spacing:-.02em;margin:22px 0 6px}#step{margin-bottom:20px}" +
      "#notes{font-size:25px;line-height:1.45;color:rgba(236,232,223,.86);max-width:860px}" +
      "#next{margin-top:30px;border-top:1px solid rgba(236,232,223,.15);padding-top:16px;font-size:20px;color:rgba(236,232,223,.6)}" +
      "button{font:inherit;background:none;border:1px solid rgba(236,232,223,.3);color:#ECE8DF;padding:8px 14px;cursor:pointer;margin-left:8px}" +
      "#acc{color:" + root.style.getPropertyValue("--accent") + "}</style></head><body>" +
      '<div id="top"><div><div class="m">Sunucu görünümü · ← → ile kontrol</div><div id="pos" class="m" style="margin-top:6px"></div></div>' +
      '<div style="text-align:right"><div id="clock">00:00</div><div id="target" class="m"></div><button id="prevB">←</button><button id="nextB">→</button><button id="reset">Süreyi sıfırla</button></div></div>' +
      '<div id="title"></div><div id="step" class="m"></div><div id="notes"></div><div id="next"></div></body></html>');
    d.close();
    d.addEventListener("keydown", onKey);
    d.getElementById("nextB").onclick = function () { next(); };
    d.getElementById("prevB").onclick = function () { prev(); };
    d.getElementById("reset").onclick = function () { elapsed = 0; };
    presenterUpdate();
  }
  setInterval(function () {
    var now = Date.now(), dt = now - lastTick;
    lastTick = now;
    var vs = document.querySelector(".sc-video");
    if (!(vs && vs.classList.contains("playing"))) elapsed += dt;
    if (!pw || pw.closed) return;
    var c = pw.document.getElementById("clock"), tg = pw.document.getElementById("target");
    if (!c) return;
    var s = elapsed / 1000, def = SC[E.index], t = targetFor(def);
    c.textContent = fmtT(s);
    c.className = t == null ? "" : (s <= t ? "ok" : (s <= t + 20 ? "warn" : "over"));
    if (tg) tg.textContent = (t != null ? "BU BÖLÜMÜN BİTİŞ HEDEFİ " + fmtT(t) + " · " : "") + "SINIR " + (CFG.timeLimit || "10:00") + " (VİDEO HARİÇ)";
  }, 500);
  function presenterUpdate() {
    if (!pw || pw.closed) return;
    var d = pw.document, def = SC[E.index];
    if (!d.getElementById("title")) return;
    var vi = VISIBLE.indexOf(def);
    d.getElementById("pos").textContent = (vi >= 0 ? pad2(vi + 1) + " / " + pad2(VISIBLE.length) : "GİZLİ") + " · " + (fileLabel(def) || "AÇILIŞ");
    d.getElementById("title").textContent = def.title;
    d.getElementById("step").textContent = def.steps > 1 ? "ADIM " + (E.step + 1) + " / " + def.steps : "";
    d.getElementById("notes").textContent = def.notes || "";
    var nx = SC[E.index + 1];
    d.getElementById("next").textContent = E.step < def.steps - 1 ? "Sonraki → aynı ekranda bir sonraki adım" : (nx ? "Sonraki ekran → " + nx.title : "Son ekran");
  }

  /* ---------- Başlat ---------- */
  keyhint.textContent = "→ / SPACE İLERİ  ·  ← GERİ  ·  F TAM EKRAN  ·  P SUNUCU NOTLARI  ·  O DOSYALAR";
  var hintShown = false;
  E.showHint = function () {
    if (hintShown) return;
    hintShown = true;
    keyhint.classList.remove("off");
    setTimeout(function () { keyhint.classList.add("off"); }, 7000);
  };

  var start = 0, startStep = 0;
  var m = (location.hash || "").match(/^#(\d+)(?:\.(\d+))?/);
  if (m) { start = Math.max(0, +m[1] - 1); startStep = m[2] ? +m[2] : 0; }

  function boot() { go(start, startStep ? { step: startStep, instant: true } : (start > 0 ? { instant: false } : {})); }
  if (document.fonts && document.fonts.ready) {
    var done = false;
    document.fonts.ready.then(function () { if (!done) { done = true; boot(); } });
    setTimeout(function () { if (!done) { done = true; boot(); } }, 1500);
  } else boot();
})();
