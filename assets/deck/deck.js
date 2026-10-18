/* ============================================================
   DECK — web sunum motoru (Motion 14 ile)
   Kullanım ve öğe öznitelikleri: /assets/deck/BENIOKU.md
   ============================================================ */
(function () {
  "use strict";
  var M = window.Motion || null;
  var EXPO = [0.16, 1, 0.3, 1];
  var doc = document, root = doc.documentElement, body = doc.body;
  root.classList.remove("no-js");

  var Q = location.search;
  var STILL = /[?&](onizleme|still)\b/.test(Q);            // önizleme karesi: arayüz yok, her sahne tam kurulu
  var RM = !M || (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
  var EMBED = (function () { try { return window.self !== window.top; } catch (e) { return true; } })();

  var stage = doc.querySelector(".deck-stage");
  if (!stage) return;
  var scenes = [].slice.call(stage.querySelectorAll(":scope > .scene"));
  var N = scenes.length;
  var hooks = {};
  var LANG = (root.getAttribute("lang") || "tr").slice(0, 2);

  if (STILL) body.classList.add("deck-still");
  if (EMBED) body.classList.add("deck-embed");

  /* ---------- ölçek ---------- */
  function fit() {
    var k = Math.min(innerWidth / 1920, innerHeight / 1080);
    stage.style.setProperty("--k", k.toFixed(5));
  }
  fit(); addEventListener("resize", fit);

  /* ---------- yardımcılar ---------- */
  function $$(sel, el) { return [].slice.call((el || doc).querySelectorAll(sel)); }
  function num(v, d) { v = parseFloat(v); return isNaN(v) ? d : v; }
  function stepOf(el) {
    var s = el.closest("[data-step]");
    return s ? (parseInt(s.getAttribute("data-step"), 10) || 0) : 0;
  }
  function maxStep(sc) {
    var m = parseInt(sc.getAttribute("data-steps") || "0", 10) || 0;
    $$("[data-step]", sc).forEach(function (e) { m = Math.max(m, parseInt(e.getAttribute("data-step"), 10) || 0); });
    $$("[data-hide]", sc).forEach(function (e) { m = Math.max(m, parseInt(e.getAttribute("data-hide"), 10) || 0); });
    return m;
  }

  /* kelime / harf bölme (bir kez) */
  function split(el, mode) {
    if (el.__split) return el.__split;
    var out = [];
    (function walk(node) {
      [].slice.call(node.childNodes).forEach(function (c) {
        if (c.nodeType === 3) {
          var parts = c.textContent.split(/([ \t\n\r\f]+)/), frag = doc.createDocumentFragment();   // &nbsp; kelimeyi bölmez
          parts.forEach(function (p) {
            if (!p) return;
            if (/^[ \t\n\r\f]+$/.test(p)) { frag.appendChild(doc.createTextNode(p)); return; }
            var units = mode === "chars" ? Array.from(p) : [p];
            var wordWrap = mode === "chars" ? doc.createElement("span") : null;
            if (wordWrap) { wordWrap.style.whiteSpace = "nowrap"; wordWrap.style.display = "inline-block"; }
            units.forEach(function (u) {
              var w = doc.createElement("span"), wi = doc.createElement("span");
              w.className = "w"; wi.className = "wi"; wi.textContent = u; w.appendChild(wi);
              (wordWrap || frag).appendChild(w); out.push(wi);
            });
            if (wordWrap) frag.appendChild(wordWrap);
          });
          node.replaceChild(frag, c);
        } else if (c.nodeType === 1 && !/^(BR|SVG|IMG)$/i.test(c.tagName)) {
          walk(c);
        }
      });
    })(el);
    el.__split = out;
    return out;
  }

  /* sayaç biçimi */
  function fmt(el, v) {
    var dec = parseInt(el.getAttribute("data-dec") || "0", 10);
    var loc = el.getAttribute("data-loc") || (LANG === "tr" ? "tr-TR" : "en-GB");
    var s = new Intl.NumberFormat(loc, { minimumFractionDigits: dec, maximumFractionDigits: dec, useGrouping: el.getAttribute("data-group") !== "no" }).format(v);
    return (el.getAttribute("data-pre") || "") + s + (el.getAttribute("data-suf") || "");
  }

  /* ---------- hazır hareketler ---------- */
  // from → to; translate/scale bağımsız CSS özellikleri: öğenin kendi transform'unu bozmaz
  var P = {
    up:    [{ opacity: 0, translate: "0 44px", filter: "blur(8px)" }, { opacity: 1, translate: "0 0", filter: "blur(0px)" }],
    down:  [{ opacity: 0, translate: "0 -44px", filter: "blur(8px)" }, { opacity: 1, translate: "0 0", filter: "blur(0px)" }],
    left:  [{ opacity: 0, translate: "-70px 0", filter: "blur(6px)" }, { opacity: 1, translate: "0 0", filter: "blur(0px)" }],
    right: [{ opacity: 0, translate: "70px 0", filter: "blur(6px)" }, { opacity: 1, translate: "0 0", filter: "blur(0px)" }],
    fade:  [{ opacity: 0 }, { opacity: 1 }],
    blur:  [{ opacity: 0, filter: "blur(24px)" }, { opacity: 1, filter: "blur(0px)" }],
    scale: [{ opacity: 0, scale: "0.86" }, { opacity: 1, scale: "1" }],
    zoom:  [{ opacity: 0, scale: "1.18", filter: "blur(10px)" }, { opacity: 1, scale: "1", filter: "blur(0px)" }],
    pop:   [{ opacity: 0, scale: "0.3" }, { opacity: 1, scale: "1" }],
    mask:  [{ opacity: 1, clipPath: "inset(0% 0% 100% 0%)", translate: "0 30px" }, { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", translate: "0 0" }],
    wipe:  [{ opacity: 1, clipPath: "inset(0% 100% 0% 0%)" }, { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }],
    wipeup:[{ opacity: 1, clipPath: "inset(100% 0% 0% 0%)" }, { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }],
    iris:  [{ opacity: 1, clipPath: "circle(0% at 50% 50%)" }, { opacity: 1, clipPath: "circle(75% at 50% 50%)" }],
    flip:  [{ opacity: 0, transform: "perspective(1200px) rotateX(-70deg)" }, { opacity: 1, transform: "perspective(1200px) rotateX(0deg)" }]
  };
  var CLEAR = ["opacity", "translate", "scale", "filter", "clipPath", "transform", "strokeDasharray", "strokeDashoffset", "visibility", "pointerEvents"];
  function clearStyle(el) { CLEAR.forEach(function (k) { el.style[k] = ""; }); }
  function setStyle(el, o) { for (var k in o) el.style[k] = o[k]; }

  /* ---------- sahne bağlamı (kancalar için) ---------- */
  function Ctx(sc, i) {
    this.el = sc; this.i = i; this.M = M; this.instant = false; this.static = STILL;
    this._anims = []; this._timers = []; this._raf = []; this._off = []; this.alive = true;
  }
  Ctx.prototype.$ = function (s) { return this.el.querySelector(s); };
  Ctx.prototype.$$ = function (s) { return $$(s, this.el); };
  Ctx.prototype.animate = function (a, b, c) {
    if (!M) { return { then: function (f) { f && f(); return this; }, stop: function () {}, finished: Promise.resolve() }; }
    var loopAnim = c && c.repeat;
    if (loopAnim && RM) return { then: function (f) { return this; }, stop: function () {}, finished: Promise.resolve() };
    if ((this.instant || RM) && !loopAnim) {   // sonsuz döngüler (repeat) anlık modda da oynar
      c = Object.assign({}, c || {}, { duration: 0, delay: 0 });
      if (c.type === "spring") delete c.type;
    }
    var an = M.animate(a, b, c); this._anims.push(an); return an;
  };
  Ctx.prototype.after = function (ms, f) { var self = this, t = setTimeout(function () { if (self.alive) f(); }, this.instant ? 0 : ms); this._timers.push(t); return t; };
  Ctx.prototype.every = function (ms, f) { var self = this, t = setInterval(function () { if (self.alive && !doc.hidden) f(); }, ms); this._timers.push(t); return t; };
  Ctx.prototype.loop = function (f) {
    var self = this, t0 = performance.now(), last = t0, id;
    function tick(now) { if (!self.alive) return; f((now - t0) / 1000, Math.min(0.05, (now - last) / 1000)); last = now; id = requestAnimationFrame(tick); self._raf[0] = id; }
    id = requestAnimationFrame(tick); this._raf.push(id);
  };
  Ctx.prototype.on = function (t, ev, f, o) { t.addEventListener(ev, f, o); this._off.push(function () { t.removeEventListener(ev, f, o); }); };
  Ctx.prototype.wait = function (ms) { var self = this; return new Promise(function (r) { self.after(ms, r); }); };
  Ctx.prototype.count = function (el, to, opt) {
    opt = opt || {}; var from = num(opt.from, num(el.getAttribute("data-from"), 0));
    if (opt.dec != null) el.setAttribute("data-dec", opt.dec);
    if (!M || this.instant || RM) { el.textContent = fmt(el, to); return; }
    this._anims.push(M.animate(from, to, { duration: opt.duration || 1.6, ease: opt.ease || EXPO, delay: opt.delay || 0, onUpdate: function (v) { el.textContent = fmt(el, v); } }));
  };
  Ctx.prototype._kill = function () {
    this.alive = false;
    this._anims.forEach(function (a) { try { a.stop(); } catch (e) {} });
    this._timers.forEach(function (t) { clearTimeout(t); clearInterval(t); });
    this._raf.forEach(function (r) { cancelAnimationFrame(r); });
    this._off.forEach(function (f) { f(); });
  };

  /* ---------- tek öğeyi göster ---------- */
  // Hazır hareketler tarayıcının kendi animasyonuyla (WAAPI) oynar: CSS translate/scale
  // bağımsız özellik olduğu için öğenin kendi transform'u bozulmaz. fill:both → gecikmede
  // başlangıç, bitince son hâl korunur; sahne sıfırlanınca iptal edilir.
  var EASE = "cubic-bezier(0.16, 1, 0.3, 1)", POP = "cubic-bezier(0.34, 1.56, 0.64, 1)";
  function play(el, from, to, dur, delay, easing) {
    if (!el.animate) { setStyle(el, to); return null; }
    return el.animate([from, to], { duration: dur * 1000, delay: delay * 1000, easing: easing || EASE, fill: "both" });
  }
  function reveal(el, ctx, delay) {
    var a = el.getAttribute("data-a") || "up";
    var d = num(el.getAttribute("data-d"), 0) + (delay || 0);
    var dur = num(el.getAttribute("data-dur"), a === "pop" ? 0.75 : 0.95);
    var inst = ctx.instant || RM;

    if (el.hasAttribute("data-stagger")) {
      var gap = num(el.getAttribute("data-stagger"), 0.08);
      el.style.opacity = 1;
      [].slice.call(el.children).forEach(function (c, k) {
        if (!c.getAttribute("data-a")) c.setAttribute("data-a", el.getAttribute("data-child") || "up");
        reveal(c, ctx, d + k * gap);
      });
      if (!el.getAttribute("data-a") || el.getAttribute("data-a") === "stagger") return;
    }

    if (a === "words" || a === "chars") {
      var parts = split(el, a), g = num(el.getAttribute("data-gap"), a === "chars" ? 0.022 : 0.045);
      el.style.opacity = 1;
      parts.forEach(function (w, k) {
        if (inst) { w.style.translate = "0 0"; w.style.opacity = 1; return; }
        play(w, { translate: "0 110%", opacity: 0 }, { translate: "0 0", opacity: 1 }, dur, d + k * g);
      });
      return;
    }
    if (a === "count") {
      var to = num(el.getAttribute("data-to"), num(el.textContent.replace(/[^\d.,-]/g, "").replace(",", "."), 0));
      var from = num(el.getAttribute("data-from"), 0);
      el.style.opacity = 1;
      if (inst || !M) { el.textContent = fmt(el, to); return; }
      el.textContent = fmt(el, from);
      ctx._anims.push(M.animate(from, to, { duration: num(el.getAttribute("data-dur"), 1.8), ease: EXPO, delay: d, onUpdate: function (v) { el.textContent = fmt(el, v); } }));
      return;
    }
    if (a === "draw") {
      el.style.opacity = 1;
      var shapes = /^(path|line|polyline|polygon|circle|rect|ellipse)$/i.test(el.tagName) ? [el] : $$("path,line,polyline,polygon,circle,rect,ellipse", el);
      shapes.forEach(function (s, k) {
        var L = 0; try { L = s.getTotalLength(); } catch (e) {}
        if (!L) return;
        s.style.strokeDasharray = L + " " + L;
        if (inst) { s.style.strokeDashoffset = 0; return; }
        play(s, { strokeDashoffset: L }, { strokeDashoffset: 0 }, num(el.getAttribute("data-dur"), 1.4), d + k * num(el.getAttribute("data-gap"), 0.12), "cubic-bezier(0.65, 0, 0.35, 1)");
      });
      return;
    }
    if (a === "none") { el.style.opacity = 1; return; }

    var pr = P[a] || P.up;
    if (inst) { setStyle(el, pr[1]); return; }
    play(el, pr[0], pr[1], dur, d, a === "pop" ? POP : EASE);
  }

  function hideEl(el, ctx) {
    if (ctx.instant || RM) { el.style.opacity = 0; el.style.visibility = "hidden"; return; }
    el.style.pointerEvents = "none";
    var cur = getComputedStyle(el).opacity;
    play(el, { opacity: cur, filter: "blur(0px)" }, { opacity: 0, filter: "blur(6px)" }, 0.5, 0);
  }

  /* bir sahnede s. adımı uygula */
  function applyStep(sc, s, ctx) {
    $$("[data-a],[data-stagger]", sc).forEach(function (el) {
      if (el.parentElement && el.parentElement.closest("[data-stagger]") && el.parentElement.hasAttribute("data-stagger")) return; // stagger ebeveyni gösterir
      if (stepOf(el) === s && !el.__shown) { el.__shown = true; reveal(el, ctx, 0); }
    });
    $$("[data-hide]", sc).forEach(function (el) {
      if ((parseInt(el.getAttribute("data-hide"), 10) || 0) === s) hideEl(el, ctx);
    });
    $$("video[data-play]", sc).forEach(function (v) {
      if ((parseInt(v.getAttribute("data-play"), 10) || 0) === s && !ctx.instant && !STILL) { try { v.currentTime = 0; } catch (e) {} var p = v.play(); if (p && p.catch) p.catch(function () { v.muted = true; v.play().catch(function () {}); }); }
    });
    sc.setAttribute("data-at", s);
    var h = hooks[sc.id];
    if (h && h.step && s > 0) { try { h.step(s, ctx); } catch (e) { console.error(e); } }
  }

  function cancelAll(el) { if (el.getAnimations) el.getAnimations().forEach(function (a) { try { a.cancel(); } catch (e) {} }); }
  function resetScene(sc) {
    $$("[data-a],[data-stagger],[data-stagger] > *,[data-hide]", sc).forEach(function (el) { el.__shown = false; cancelAll(el); clearStyle(el); });
    $$(".wi", sc).forEach(function (w) { cancelAll(w); clearStyle(w); });
    $$("[data-a=draw]", sc).forEach(function (el) { $$("path,line,polyline,polygon,circle,rect,ellipse", el).concat([el]).forEach(function (x) { cancelAll(x); clearStyle(x); }); });
    $$("video", sc).forEach(function (v) { try { v.pause(); } catch (e) {} });
    var h = hooks[sc.id];
    if (h && h.reset) { try { h.reset({ el: sc, $: function (s) { return sc.querySelector(s); }, $$: function (s) { return $$(s, sc); } }); } catch (e) { console.error(e); } }
  }

  /* ---------- gezinme ---------- */
  var cur = -1, at = 0, ctx = null, busy = 0;
  var bar, cnt, over, notes, black, hint, ui;

  function enter(i, s, opt) {
    opt = opt || {};
    i = Math.max(0, Math.min(N - 1, i));
    var prev = cur >= 0 ? scenes[cur] : null, sc = scenes[i];
    var max = maxStep(sc); s = s === "max" ? max : Math.max(0, Math.min(max, s || 0));
    if (ctx) { ctx._kill(); var ph = prev && hooks[prev.id]; if (ph && ph.leave) { try { ph.leave(ctx); } catch (e) { console.error(e); } } }

    if (prev && prev !== sc) {
      prev.classList.remove("is-on");
      if (prev.animate && !RM && !STILL && !opt.cut) {
        prev.classList.add("is-out");
        var outEl = prev, oa = outEl.animate([{ opacity: 1, scale: "1", filter: "blur(0px)" }, { opacity: 0, scale: "1.015", filter: "blur(6px)" }], { duration: 450, easing: "cubic-bezier(0.4, 0, 1, 1)", fill: "forwards" });
        oa.finished.then(function () { outEl.classList.remove("is-out"); oa.cancel(); if (scenes[cur] !== outEl) resetScene(outEl); }, function () {});
      } else { resetScene(prev); }
    }
    if (prev !== sc) resetScene(sc);
    cur = i; at = 0;
    ctx = new Ctx(sc, i);
    ctx.instant = STILL || !!opt.instant;
    sc.classList.add("is-on");
    if (sc.animate && !RM && !STILL && prev && prev !== sc && !opt.cut) {
      sc.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 600, delay: 120, easing: "ease-out", fill: "backwards" });
    }
    var h = hooks[sc.id];
    if (h && h.enter) { try { h.enter(ctx); } catch (e) { console.error(e); } }
    applyStep(sc, 0, ctx);
    for (var k = 1; k <= s; k++) { at = k; applyStep(sc, k, ctx); }
    if (s === 0 && !ctx.instant) autoRun(sc);
    sync();
  }

  function autoRun(sc) {
    var a = num(sc.getAttribute("data-auto"), 0); if (!a) return;
    var my = ctx;
    my.every(a * 1000, function () { if (ctx !== my) return; if (at < maxStep(sc)) next(true); });
  }

  function next(auto) {
    if (over && !over.hidden) return;
    var sc = scenes[cur];
    if (at < maxStep(sc)) { if (!STILL) ctx.instant = false; at++; applyStep(sc, at, ctx); sync(); return; }
    if (auto === true) return;
    if (cur < N - 1) enter(cur + 1, 0);
  }
  function prev() {
    if (over && !over.hidden) return;
    if (cur > 0) enter(cur - 1, "max", { instant: true });
  }
  function go(i) { enter(i, 0); }

  function sync() {
    if (bar) bar.style.width = (N > 1 ? (cur + (maxStep(scenes[cur]) ? at / (maxStep(scenes[cur]) + 1) : 0)) / (N - 1) * 100 : 100) + "%";
    if (cnt) cnt.innerHTML = "<b>" + String(cur + 1).padStart(2, "0") + "</b> / " + String(N).padStart(2, "0");
    if (notes && !notes.hidden) notes.textContent = scenes[cur].getAttribute("data-notes") || "—";
    var hsh = "#" + (cur + 1);
    if (location.hash !== hsh) try { history.replaceState(null, "", hsh); } catch (e) {}
    if (over) $$("button", over).forEach(function (b, k) { b.classList.toggle("cur", k === cur); });
  }

  /* ---------- arayüz ---------- */
  function svg(d) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + "</svg>"; }
  function buildUI() {
    var T = LANG === "tr"
      ? { prev: "Önceki", next: "Sonraki", fs: "Tam ekran", all: "Tüm ekranlar", hint: "<kbd>←</kbd> <kbd>→</kbd> ya da tıkla · <kbd>F</kbd> tam ekran · <kbd>O</kbd> ekranlar", list: "Ekranlar" }
      : { prev: "Previous", next: "Next", fs: "Full screen", all: "All screens", hint: "<kbd>←</kbd> <kbd>→</kbd> or click · <kbd>F</kbd> full screen · <kbd>O</kbd> overview", list: "Screens" };
    ui = doc.createElement("div"); ui.className = "deck-ui";
    ui.innerHTML = '<div class="deck-bar"><i></i></div><div class="deck-ctl">' +
      '<button type="button" data-ui="prev" aria-label="' + T.prev + '">' + svg('<path d="M15 6l-6 6 6 6"/>') + "</button>" +
      '<span class="deck-count"></span>' +
      '<button type="button" data-ui="next" aria-label="' + T.next + '">' + svg('<path d="M9 6l6 6-6 6"/>') + "</button>" +
      '<button type="button" data-ui="all" aria-label="' + T.all + '">' + svg('<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>') + "</button>" +
      '<button type="button" data-ui="fs" aria-label="' + T.fs + '">' + svg('<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>') + "</button></div>";
    body.appendChild(ui);
    bar = ui.querySelector(".deck-bar i"); cnt = ui.querySelector(".deck-count");
    ui.addEventListener("click", function (e) {
      var b = e.target.closest("[data-ui]"); if (!b) return; e.stopPropagation();
      var w = b.getAttribute("data-ui");
      if (w === "prev") prev(); else if (w === "next") next(); else if (w === "all") toggleOver(); else if (w === "fs") toggleFs();
    });

    over = doc.createElement("div"); over.className = "deck-over"; over.hidden = true;
    over.innerHTML = "<h2>" + T.list + "</h2><ol>" + scenes.map(function (sc, k) {
      return '<li><button type="button" data-go="' + k + '"><span>' + String(k + 1).padStart(2, "0") + "</span>" + (sc.getAttribute("data-title") || "—") + "</button></li>";
    }).join("") + "</ol>";
    over.addEventListener("click", function (e) {
      var b = e.target.closest("[data-go]");
      if (b) { over.hidden = true; go(+b.getAttribute("data-go")); }
      else if (e.target === over) over.hidden = true;
    });
    body.appendChild(over);

    notes = doc.createElement("div"); notes.className = "deck-notes"; notes.hidden = true; body.appendChild(notes);
    black = doc.createElement("div"); black.className = "deck-black"; body.appendChild(black);
    black.addEventListener("click", function () { black.classList.remove("on"); });
    hint = doc.createElement("div"); hint.className = "deck-hint"; hint.innerHTML = T.hint; body.appendChild(hint);
    if (!STILL) { setTimeout(function () { hint.classList.add("on"); }, 900); setTimeout(function () { hint.classList.remove("on"); }, 5200); }

    var idleT; function wake() { ui.classList.remove("idle"); clearTimeout(idleT); idleT = setTimeout(function () { ui.classList.add("idle"); }, 2600); }
    addEventListener("mousemove", wake, { passive: true }); addEventListener("touchstart", wake, { passive: true }); wake();
  }
  function toggleOver() { over.hidden = !over.hidden; if (!over.hidden) { sync(); var c = over.querySelector(".cur"); if (c) c.focus(); } }
  function toggleFs() {
    var fe = doc.fullscreenElement || doc.webkitFullscreenElement;
    if (fe) { (doc.exitFullscreen || doc.webkitExitFullscreen).call(doc); return; }
    var r = root.requestFullscreen || root.webkitRequestFullscreen; if (r) { var p = r.call(root); if (p && p.catch) p.catch(function () {}); }
  }

  /* ---------- girdi ---------- */
  function interactive(t) { return t.closest && t.closest("a,button,input,select,textarea,video,label,[data-nonav],.deck-ui,.deck-over"); }
  doc.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key;
    if (over && !over.hidden && (k === "Escape" || k === "o" || k === "O")) { over.hidden = true; e.preventDefault(); return; }
    if (black.classList.contains("on") && k !== "b" && k !== "B" && k !== ".") { black.classList.remove("on"); e.preventDefault(); return; }
    if (k === "ArrowRight" || k === "ArrowDown" || k === "PageDown" || k === " " || k === "Enter") {
      if (e.target && /^(BUTTON|A|INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) && (k === " " || k === "Enter")) return;
      e.preventDefault(); next();
    } else if (k === "ArrowLeft" || k === "ArrowUp" || k === "PageUp" || k === "Backspace") { e.preventDefault(); prev(); }
    else if (k === "Home") { e.preventDefault(); go(0); }
    else if (k === "End") { e.preventDefault(); enter(N - 1, "max", { instant: true }); }
    else if (k === "f" || k === "F") { e.preventDefault(); toggleFs(); }
    else if (k === "o" || k === "O") { e.preventDefault(); toggleOver(); }
    else if (k === "b" || k === "B" || k === ".") { e.preventDefault(); black.classList.toggle("on"); }
    else if (k === "n" || k === "N") { notes.hidden = !notes.hidden; sync(); }
  });
  var tx = null, ty = 0, tt = 0;
  stage.parentNode.addEventListener("touchstart", function (e) { if (e.touches.length !== 1) return; tx = e.touches[0].clientX; ty = e.touches[0].clientY; tt = Date.now(); }, { passive: true });
  stage.parentNode.addEventListener("touchend", function (e) {
    if (tx == null) return; var t = e.changedTouches[0], dx = t.clientX - tx, dy = t.clientY - ty; tx = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) { e.preventDefault(); dx < 0 ? next() : prev(); }
  });
  doc.addEventListener("click", function (e) {
    if (e.button !== 0 || interactive(e.target)) return;
    if (over && !over.hidden) return;
    var x = e.clientX / innerWidth;
    x < 0.28 ? prev() : next();
  });
  addEventListener("hashchange", function () { var n = parseInt(location.hash.slice(1), 10); if (n && n - 1 !== cur) enter(n - 1, STILL ? "max" : 0, { instant: STILL, cut: true }); });
  doc.addEventListener("visibilitychange", function () { if (doc.hidden) $$("video", stage).forEach(function (v) { if (!v.paused && !v.hasAttribute("data-keep")) v.pause(); }); });

  /* ---------- dışa açık ---------- */
  window.Deck = {
    M: M, EXPO: EXPO, still: STILL, reduced: RM,
    scene: function (id, h) { hooks[id] = h; if (scenes[cur] && scenes[cur].id === id && h.enter && ctx) { try { h.enter(ctx); for (var k = 1; k <= at; k++) h.step && h.step(k, ctx); } catch (e) { console.error(e); } } },
    next: next, prev: prev, go: go, enter: enter,
    get index() { return cur; }, get step() { return at; }, get count() { return N; }
  };

  buildUI();
  // kancaların (scenes.js) kaydolması için başlangıcı bir kare ertele
  var start = parseInt(location.hash.slice(1), 10);
  requestAnimationFrame(function () { enter(start ? start - 1 : 0, STILL ? "max" : 0, { cut: true, instant: STILL }); });
})();
