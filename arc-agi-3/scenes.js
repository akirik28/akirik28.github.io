/* ============================================================
   ARC-AGI-3 — özel hareketler
   - Hücrelerden kurulan yazılar (başlık, 0.11, 0.93, ?)
   - Yollar üzerinde akan hücreler (araştırma, pipeline, git hatları)
   - Git metro haritası ve modül grafiği veriden çizilir
   Motor: /assets/deck/deck.js (değiştirilmedi)
   ============================================================ */
(function () {
  "use strict";
  var D = window.Deck;
  if (!D) return;
  var doc = document, RM = !!D.reduced, NS = "http://www.w3.org/2000/svg";
  var EASE = "cubic-bezier(0.16, 1, 0.3, 1)", INOUT = "cubic-bezier(0.65, 0, 0.35, 1)", POP = "cubic-bezier(0.34, 1.56, 0.64, 1)";
  var COL = { b: "#2B9BFF", r: "#FF4B3E", g: "#3DDC55", y: "#FFDC00", o: "#FF8A1F", m: "#F255CC", s: "#7FDBFF", x: "#9AA1AE", w: "#EEF0F4", bg: "#0B0C14" };
  var ARC = [COL.b, COL.r, COL.g, COL.y, COL.o, COL.m, COL.s];

  /* ---------- yardımcılar ---------- */
  function $$(sel, el) { return [].slice.call((el || doc).querySelectorAll(sel)); }
  function $(sel, el) { return (el || doc).querySelector(sel); }
  function el(tag, cls, parent) { var e = doc.createElement(tag); if (cls) e.className = cls; if (parent) parent.appendChild(e); return e; }
  function sv(tag, attrs, parent) { var e = doc.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; }
  function rnd(seed) { var s = seed || 1; return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function lerp(a, b, k) { return a + (b - a) * k; }

  // her sahnenin kendi animasyon kaydı: sahne sıfırlanınca iptal edilir
  var REG = {};
  function R(id) { return REG[id] || (REG[id] = { a: [], s: [] }); }
  function inst(c) { return !!(c.instant || RM); }
  function wa(c, node, kf, o) {
    if (!node || !node.animate) return null;
    o = Object.assign({ fill: "both", easing: EASE }, o || {});
    if (inst(c)) { o.duration = 0; o.delay = 0; }
    var a = node.animate(kf, o); R(c.el.id).a.push(a); return a;
  }
  // geçici parıltı (kalıcı iz bırakmaz)
  function blink(c, node, kf, dur) {
    if (!node || !node.animate || RM) return;
    var a = node.animate(kf, { duration: dur, easing: "ease-in-out" }); R(c.el.id).a.push(a);
    var list = R(c.el.id).a; if (list.length > 400) list.splice(0, 200);
  }
  function cls(c, node, name, on) { if (!node) return; node.classList.toggle(name, on !== false); R(c.el.id).s.push(function () { node.classList.remove(name); }); }
  function onReset(c, f) { R(c.el.id).s.push(f); }
  function cleanup(c) {
    var id = c.el.id, r = REG[id]; if (!r) return;
    r.a.forEach(function (a) { try { a.cancel(); } catch (e) {} });
    r.s.forEach(function (f) { try { f(); } catch (e) {} });
    REG[id] = { a: [], s: [] };
  }
  function drawIn(c, path, o) {
    var L = 0; try { L = path.getTotalLength(); } catch (e) {}
    path.style.strokeDasharray = L + " " + L;
    return wa(c, path, [{ strokeDashoffset: L, opacity: 1 }, { strokeDashoffset: 0, opacity: 1 }], o);
  }
  function popIn(c, node, delay, dur) { return wa(c, node, [{ opacity: 0, scale: "0.2" }, { opacity: 1, scale: "1" }], { duration: dur || 520, delay: delay || 0, easing: POP }); }
  function fadeIn(c, node, delay, dur) { return wa(c, node, [{ opacity: 0 }, { opacity: 1 }], { duration: dur || 500, delay: delay || 0, easing: "ease-out" }); }

  /* ---------- hücre yazısı (5×7) ---------- */
  var GLYPH = {
    "A": [".###.", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"],
    "R": ["####.", "#...#", "#...#", "####.", "#.#..", "#..#.", "#...#"],
    "C": [".####", "#....", "#....", "#....", "#....", "#....", ".####"],
    "G": [".####", "#....", "#....", "#.###", "#...#", "#...#", ".###."],
    "I": ["###", ".#.", ".#.", ".#.", ".#.", ".#.", "###"],
    "-": ["...", "...", "...", "###", "...", "...", "..."],
    "3": ["####.", "....#", "....#", ".###.", "....#", "....#", "####."],
    "0": [".###.", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
    "1": ["..#..", ".##..", "..#..", "..#..", "..#..", "..#..", ".###."],
    "9": [".###.", "#...#", "#...#", ".####", "....#", "....#", ".###."],
    ".": [".", ".", ".", ".", ".", ".", "#"],
    "?": [".###.", "#...#", "....#", "...#.", "..#..", ".....", "..#.."]
  };
  function glyphCells(str) {
    var cells = [], x = 0;
    Array.from(str).forEach(function (ch, i) {
      var g = GLYPH[ch]; if (!g) return;
      for (var r = 0; r < 7; r++) for (var q = 0; q < g[r].length; q++) if (g[r][q] === "#") cells.push({ x: x + q, y: r, ch: i });
      x += g[0].length + 1;
    });
    return { cells: cells, w: x - 1 };
  }
  function pxAt(host, cl, pitch, gap) {
    var d = el("i", "px", host);
    d.style.left = cl.x * pitch + "px"; d.style.top = cl.y * pitch + "px"; d.style.width = d.style.height = (pitch - gap) + "px"; d._c = cl; return d;
  }
  function buildPix(host) {
    var pitch = +host.getAttribute("data-pitch"), gap = +host.getAttribute("data-gap"), g = glyphCells(host.getAttribute("data-pix"));
    host.style.width = (g.w * pitch - gap) + "px"; host.style.height = (7 * pitch - gap) + "px";
    host._px = g.cells.map(function (cl) { return pxAt(host, cl, pitch, gap); });
  }
  $$(".pix[data-pix]").forEach(buildPix);
  // dağınık hücreler yerine oturur
  function assemble(c, pxs, o) {
    var r = rnd(o.seed || 3);
    pxs.forEach(function (p) {
      var fin = o.color(p._c), tmp = ARC[Math.floor(r() * ARC.length)];
      p.style.background = fin;
      wa(c, p, [
        { opacity: 0, translate: Math.round(r() * o.sx - o.sx / 2) + "px " + Math.round(r() * o.sy - o.sy / 2) + "px", background: tmp, scale: "0.4" },
        { opacity: 1, background: tmp, scale: "1", offset: 0.55 },
        { opacity: 1, translate: "0 0", background: fin, scale: "1" }
      ], { duration: o.dur || 1300, delay: (o.delay || 0) + r() * (o.spread || 900) });
    });
  }
  function twinkle(c, pxs, fin, ms) {
    if (RM) return;
    c.every(ms || 420, function () {
      var p = pxs[Math.floor(Math.random() * pxs.length)], col = ARC[Math.floor(Math.random() * ARC.length)], f = fin(p._c);
      blink(c, p, [{ background: f }, { background: col, offset: 0.25 }, { background: col, offset: 0.6 }, { background: f }], 1500);
    });
  }

  /* ---------- ortam: ızgarada yanıp sönen hücreler ---------- */
  function ambient(c, cv, seed, n) {
    var g = cv.getContext("2d"), r = rnd(seed), cells = [];
    function spawn(t0) { return { x: Math.floor(r() * 32), y: Math.floor(r() * 18), col: ARC[Math.floor(r() * ARC.length)], t0: t0, life: 2.6 + r() * 3.6 }; }
    for (var i = 0; i < n; i++) cells.push(spawn(-r() * 4));
    c.loop(function (t) {
      g.clearRect(0, 0, 1920, 1080);
      for (var i = 0; i < cells.length; i++) {
        var q = cells[i], u = (t - q.t0) / q.life;
        if (u >= 1) { q = cells[i] = spawn(t); u = 0; }
        g.globalAlpha = Math.sin(Math.PI * clamp(u, 0, 1)) * 0.24; g.fillStyle = q.col;
        g.fillRect(q.x * 60 + 3, q.y * 60 + 3, 54, 54);
      }
    });
  }

  /* ---------- yol üzerinde akan hücreler ---------- */
  function Flow(group, path, o) {
    this.p = path; this.o = o; this.on = false; this.r = []; this.L = 0;
    for (var i = 0; i < o.n; i++) this.r.push(sv("rect", { width: o.size, height: o.size, fill: Array.isArray(o.color) ? o.color[i % o.color.length] : o.color, opacity: 0 }, group));
  }
  Flow.prototype.tick = function (t) {
    var o = this.o, n = this.r.length, i, r;
    if (!this.L) { try { this.L = this.p.getTotalLength(); } catch (e) {} }
    for (i = 0; i < n; i++) {
      r = this.r[i];
      if (!this.on || !this.L) { r.setAttribute("opacity", 0); continue; }
      var u = (t * o.speed / this.L + i / n + (o.off || 0)) % 1, pt = this.p.getPointAtLength(u * this.L);
      r.setAttribute("x", (pt.x - o.size / 2).toFixed(1)); r.setAttribute("y", (pt.y - o.size / 2).toFixed(1));
      r.setAttribute("opacity", Math.min(1, u * 9, (1 - u) * 9).toFixed(2));
    }
  };
  function flows(scene, defs) {   // defs: [[pathSelector, opts], …]
    var g = $("#" + scene + " .flow");
    return defs.map(function (d) { return new Flow(g, typeof d[0] === "string" ? $(d[0]) : d[0], d[1]); });
  }
  function setOn(list, on) { list.forEach(function (f) { f.on = on; }); }

  /* ---------- üst şerit ---------- */
  var scenes = $$(".deck-stage > .scene"), N = scenes.length;
  scenes.forEach(function (sc, i) {
    if (i === 0) return;
    var h = el("div", "hud"); h.setAttribute("aria-hidden", "true");
    var cells = ""; for (var k = 0; k < N; k++) cells += '<i class="' + (k < i ? "past" : k === i ? "now" : "") + '"></i>';
    h.innerHTML = '<span class="hud-l"><u><i></i><i></i><i></i></u>ARC-AGI-3</span><span class="hud-r"><span class="hud-c">' + cells + "</span><span><b>" + String(i + 1).padStart(2, "0") + "</b>/" + N + "</span></span>";
    sc.insertBefore(h, sc.firstChild);
  });

  /* ============================================================
     01 · KAPAK
     ============================================================ */
  function titleCol(cl) { return cl.ch === 8 ? COL.y : (cl.ch === 3 || cl.ch === 7) ? COL.x : COL.w; }
  D.scene("kapak", {
    enter: function (c) {
      var pxs = c.$(".k-title .pix")._px;
      ambient(c, c.$(".amb"), 11, 30);
      assemble(c, pxs, { seed: 5, sx: 1500, sy: 900, color: titleCol, delay: 150, spread: 900, dur: 1400 });
      c.after(2600, function () { twinkle(c, pxs, titleCol, 360); });
    },
    reset: cleanup
  });

  /* ============================================================
     02 · 1. GÜN — beş dağınık hücre hizalanır
     ============================================================ */
  var G1 = { k: 0, to: 0, sc: [[170, 508], [452, 472], [650, 660], [318, 742], [548, 872]], rot: [-14, 9, -7, 16, -11] };
  D.scene("gun1", {
    enter: function (c) {
      var ps = c.$$(".p5"), mini = c.$$(".mini9 i");
      G1.k = 0; G1.to = 0;
      function place(t) {
        var k = G1.k * G1.k * (3 - 2 * G1.k);
        ps.forEach(function (p, i) {
          var x = lerp(G1.sc[i][0] + 16 * Math.sin(t * 0.8 + i * 1.7), 120 + i * 108, k);
          var y = lerp(G1.sc[i][1] + 12 * Math.cos(t * 0.65 + i * 2.3), 548, k);
          var a = (1 - k) * (G1.rot[i] + 5 * Math.sin(t * 0.6 + i));
          p.style.transform = "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px) rotate(" + a.toFixed(2) + "deg)";
        });
      }
      G1.place = place; place(0);
      ps.forEach(function (p, i) { popIn(c, p, 500 + i * 130); });
      c.loop(function (t, dt) {
        G1.k += (G1.to - G1.k) * Math.min(1, dt * 3.2);
        if (Math.abs(G1.to - G1.k) < 0.002) G1.k = G1.to;
        place(t);
      });
      if (!RM) c.every(420, function () { var m = mini[Math.floor(Math.random() * 9)]; m.style.backgroundColor = Math.random() < 0.3 ? "" : ARC[Math.floor(Math.random() * ARC.length)]; });
      onReset(c, function () { mini.forEach(function (m) { m.style.backgroundColor = ""; }); ps.forEach(function (p) { p.style.transform = ""; }); });
    },
    step: function (n, c) { if (n >= 1) { G1.to = 1; if (inst(c)) { G1.k = 1; G1.place(0); } } },
    reset: cleanup
  });

  /* ============================================================
     03 · PARALEL ARAŞTIRMA — dört kol tek sentezde birleşir
     ============================================================ */
  (function () {
    var grid = $("#arastirma .ar-grid"), cells = [], r = rnd(9), lane = [COL.b, COL.o, COL.m, COL.y], pat = [];
    for (var i = 0; i < 24; i++) { cells.push(el("i", "", grid)); pat.push(lane[Math.floor(r() * 4)]); }
    var F = flows("arastirma", [
      ["#ar-p0", { n: 3, size: 14, speed: 150, color: COL.b }], ["#ar-p1", { n: 3, size: 14, speed: 150, color: COL.o, off: 0.15 }],
      ["#ar-p2", { n: 3, size: 14, speed: 150, color: COL.m, off: 0.3 }], ["#ar-p3", { n: 3, size: 14, speed: 150, color: COL.y, off: 0.45 }],
      ["#ar-p4", { n: 3, size: 14, speed: 120, color: lane }]
    ]);
    var st = { t: 0, f0: null, n: -1 };
    function fill(n) { if (n === st.n) return; st.n = n; cells.forEach(function (ce, i) { ce.style.backgroundColor = i < n ? pat[i] : ""; }); }
    D.scene("arastirma", {
      enter: function (c) {
        st.t = 0; st.f0 = null; st.n = -1; setOn(F, false); fill(0);
        c.after(1500, function () { F.slice(0, 4).forEach(function (f) { f.on = true; }); });
        c.loop(function (t) {
          st.t = t;
          F.forEach(function (f) { f.tick(t); });
          if (st.f0 != null) fill(clamp(Math.floor((t - st.f0 - 1.1) * 9), 0, 24));
        });
      },
      step: function (n, c) { if (n === 1) { st.f0 = inst(c) ? -99 : st.t; F[4].on = true; if (inst(c)) fill(24); } },
      reset: function (c) { cleanup(c); fill(0); }
    });
  })();

  /* ============================================================
     04 · STRATEJİ TARAMASI — ölçütler sırayla taranır
     ============================================================ */
  (function () {
    var F = flows("tarama", [0, 1, 2, 3].map(function (i) { return ["#ta-p" + i, { n: 1, size: 14, speed: 150, color: COL.o, off: i * 0.25 }]; }));
    var st = { lock: false };
    D.scene("tarama", {
      enter: function (c) {
        var cr = c.$$(".ta-crit .bx"), order = [0, 1, 3, 2], k = 0;
        st.lock = false; setOn(F, false);
        function hot(i) { cr.forEach(function (b, j) { b.classList.toggle("hot", j === i); }); }
        st.hot = hot;
        onReset(c, function () { hot(-1); });
        c.after(1900, function () { setOn(F, true); if (!st.lock) hot(order[0]); });
        c.every(1100, function () { if (st.lock || !F[0].on) return; k = (k + 1) % 4; hot(order[k]); });
        c.loop(function (t) { F.forEach(function (f) { f.tick(t); }); });
      },
      step: function (n, c) { if (n >= 1) { st.lock = true; st.hot(3); } },   // "birlikte çalışabilme" öne alınır
      reset: cleanup
    });
  })();

  /* ============================================================
     05 · MİMARİ — akan veri + kırmızı geri besleme döngüsü
     ============================================================ */
  (function () {
    var F = flows("mimari", [["#mi-main", { n: 11, size: 16, speed: 200, color: [COL.s, COL.w, COL.s, COL.y, COL.s, COL.w, COL.g] }], ["#mi-back", { n: 6, size: 14, speed: 210, color: COL.r }]]);
    D.scene("mimari", {
      enter: function (c) {
        setOn(F, false);
        c.after(1700, function () { F[0].on = true; });
        c.loop(function (t) { F.forEach(function (f) { f.tick(t); }); });
      },
      step: function (n, c) { if (n === 1) c.after(1300, function () { F[1].on = true; }); },
      reset: cleanup
    });
  })();

  /* ============================================================
     06 · ÜÇ ORTAM — aynı desen Local → Colab → Kaggle
     ============================================================ */
  (function () {
    var grids = $$("#akis .ak-grid").map(function (g) { var a = []; for (var i = 0; i < 18; i++) a.push(el("i", "", g)); return a; });
    var r = rnd(21), pat = []; for (var i = 0; i < 18; i++) pat.push(r() < 0.3 ? "rgba(238,240,244,.3)" : ARC[Math.floor(r() * ARC.length)]);
    var F = flows("akis", [["#ak-p0", { n: 1, size: 14, speed: 60, color: COL.w }], ["#ak-p1", { n: 1, size: 14, speed: 60, color: COL.w }]]);
    var last = [-1, -1, -1], T0 = [0.2, 1.9, 4.2], DUR = [0.7, 1.5, 2.8];
    function fill(w, n) { if (last[w] === n) return; last[w] = n; grids[w].forEach(function (ce, i) { ce.style.backgroundColor = i < n ? pat[i] : ""; }); }
    D.scene("akis", {
      enter: function (c) {
        last = [-1, -1, -1]; setOn(F, false);
        var t0 = inst(c) ? 0 : 1.6;
        c.after(1600, function () { setOn(F, true); });
        c.loop(function (t) {
          F.forEach(function (f) { f.tick(t); });
          var tt = t - t0, full = !!c.static;
          tt = tt < 0 ? -1 : tt % 9.4;
          for (var w = 0; w < 3; w++) fill(w, full ? 18 : Math.round(clamp((tt - T0[w]) / DUR[w], 0, 1) * 18));
        });
      },
      reset: function (c) { cleanup(c); for (var w = 0; w < 3; w++) fill(w, 0); }
    });
  })();

  /* ============================================================
     07 · GIT ORKESTRASYONU — 4 hat + 1 entegratör → master
     ============================================================ */
  (function () {
    var F = flows("gitsoru", [0, 1, 2, 3].map(function (i) { return ["#gs-p" + i, { n: 2, size: 12, speed: 170, color: COL.w, off: i * 0.13 }]; })
      .concat([["#gs-p4", { n: 1, size: 12, speed: 150, color: COL.w }], ["#gs-p5", { n: 3, size: 10, speed: 170, color: COL.bg }]]));
    D.scene("gitsoru", {
      enter: function (c) {
        var chips = c.$$(".gs-chips li"), k = -1;
        setOn(F, false);
        c.after(2400, function () { setOn(F, true); });
        onReset(c, function () { chips.forEach(function (ch) { ch.classList.remove("hot"); }); });
        c.after(2900, function () {
          if (c.static) return;
          c.every(620, function () { k = (k + 1) % 7; chips.forEach(function (ch, i) { ch.classList.toggle("hot", i === k); }); });
        });
        c.loop(function (t) { F.forEach(function (f) { f.tick(t); }); });
      },
      reset: cleanup
    });
  })();

  /* ============================================================
     08 · GIT METRO HARİTASI — gerçek commit kısa kodlarıyla
     ============================================================ */
  (function () {
    var svg = $("#metro .me-svg");
    var S = [690, 800], XS = [960, 1130, 1300], FAN = 860, BEND = 1340, IG = [1570, 800], MS = [1790, 800];
    var LANES = [
      { n: "BASELINE-115", b: "feat/baseline-115-exact-state-memory", c: "#3DDC55", y: 464, s: [["eb666cc", "izleme"], ["d402b05", "bağla"], ["e5bb04d", "koru"]] },
      { n: "BASELINE-130", b: "feat/baseline-130-hypothesis-memory", c: "#3BC6E0", y: 576, s: [["a5380ae", "model"], ["b3b00cd", "inanç"], ["830c984", "bağla"]] },
      { n: "EXP-140", b: "feat/exp-140-vlm-refinement", c: "#A98BFF", y: 688, s: [["3abeca0", "aday"], ["76896af", "üret"], ["80307e1", "policy"]] },
      { n: "EXP-150", b: "feat/exp-150-duck-tools-ab", c: "#FFB52E", y: 800, s: [["c42df6c", "sahne"], ["d6a5e94", "eşleştir"], ["fc6b156", "araçlar"]] }
    ];
    function txt(cl, x, y, s, fill, parent) { var t = sv("text", { "class": cl, x: x, y: y }, parent); if (fill) t.setAttribute("fill", fill); t.textContent = s; return t; }
    var gL = sv("g", {}, svg), gFlow = sv("g", { "class": "flow" }, svg), gN = sv("g", {}, svg);
    LANES.forEach(function (ln) {
      ln.lab = sv("g", {}, gN);
      txt("me-name", 120, ln.y + 6, ln.n, ln.c, ln.lab); txt("me-br", 120, ln.y + 40, ln.b, null, ln.lab);
      var d = ln.y === S[1] ? "M" + S[0] + " " + S[1] + "H" + IG[0] : "M" + S[0] + " " + S[1] + "L" + FAN + " " + ln.y + "H" + BEND + "L" + IG[0] + " " + IG[1];
      ln.path = sv("path", { "class": "me-lane", d: d, stroke: ln.c }, gL);
      ln.L = ln.path.getTotalLength();
      var fan = ln.y === S[1] ? FAN - S[0] : Math.hypot(FAN - S[0], S[1] - ln.y);
      ln.st = ln.s.map(function (s, j) {
        var g = sv("g", {}, gN), frac = (fan + XS[j] - FAN) / (ln.L || 1);
        var dot = sv("circle", { "class": "me-st", cx: XS[j], cy: ln.y, r: 13, stroke: ln.c }, g);
        dot.style.transformBox = "fill-box"; dot.style.transformOrigin = "50% 50%";
        var lb = sv("g", {}, g); txt("me-hash", XS[j], ln.y + 48, s[0], ln.c, lb); txt("me-word", XS[j], ln.y + 76, s[1], null, lb);
        return { dot: dot, lb: lb, frac: frac };
      });
    });
    var mPath = sv("path", { "class": "me-lane", d: "M" + IG[0] + " " + IG[1] + "H" + MS[0], stroke: "#3DDC55", "stroke-width": 12 }, gL);
    function node(x, y, r, col) { var n = sv("circle", { "class": "me-st", cx: x, cy: y, r: r, stroke: col }, gN); n.style.transformBox = "fill-box"; n.style.transformOrigin = "50% 50%"; return n; }
    var nS = node(S[0], S[1], 19, COL.s), nI = node(IG[0], IG[1], 24, "#FFB52E"), nM = node(MS[0], MS[1], 22, "#3DDC55");
    var lS = sv("g", {}, gN); txt("me-hash", S[0], S[1] + 58, "503bb90", COL.w, lS); txt("me-word me-split", S[0], S[1] + 88, "4'LÜ PARALEL AYRIM", null, lS);
    var lI = sv("g", {}, gN); txt("me-hash", IG[0], IG[1] + 62, "integration/day3", "#FFB52E", lI);
    var lM = sv("g", {}, gN); txt("me-hash", MS[0], MS[1] + 62, "8a8a01a", "#3DDC55", lM); txt("me-hash", MS[0], MS[1] + 94, "MASTER", "#3DDC55", lM);
    var F = LANES.map(function (ln, i) { return new Flow(gFlow, ln.path, { n: 1, size: 16, speed: 230, color: COL.w, off: i * 0.21 }); });
    var FM = new Flow(gFlow, mPath, { n: 1, size: 12, speed: 120, color: COL.bg });

    D.scene("metro", {
      enter: function (c) {
        setOn(F, false); FM.on = false;
        popIn(c, nS, 500); fadeIn(c, lS, 700);
        var DUR = 1700, end = 0;
        LANES.forEach(function (ln, i) {
          var d0 = 1000 + i * 190;
          fadeIn(c, ln.lab, 500 + i * 130);
          drawIn(c, ln.path, { duration: DUR, delay: d0, easing: "linear" });
          ln.st.forEach(function (s) { popIn(c, s.dot, d0 + DUR * s.frac - 60, 420); fadeIn(c, s.lb, d0 + DUR * s.frac + 80, 400); });
          end = d0 + DUR;
        });
        popIn(c, nI, end - 80, 600); fadeIn(c, lI, end + 150);
        // master kolu 1. tıklamada
        mPath.style.strokeDasharray = mPath.getTotalLength() + " " + mPath.getTotalLength();
        mPath.style.strokeDashoffset = mPath.getTotalLength(); nM.style.opacity = 0; lM.style.opacity = 0;
        onReset(c, function () { mPath.style.strokeDashoffset = ""; mPath.style.strokeDasharray = ""; nM.style.opacity = ""; lM.style.opacity = ""; });
        c.after(end + 300, function () { setOn(F, true); });
        c.loop(function (t) { F.forEach(function (f) { f.tick(t); }); FM.tick(t); });
      },
      step: function (n, c) {
        if (n !== 1) return;
        drawIn(c, mPath, { duration: 800, easing: INOUT }); popIn(c, nM, 650, 600); fadeIn(c, lM, 850);
        c.after(900, function () { FM.on = true; });
      },
      reset: cleanup
    });
  })();

  /* ============================================================
     09 · GRAPHIFY — policy.py merkezli modül grafiği
     ============================================================ */
  (function () {
    var svg = $("#graphify .gr-svg");
    var NODE = {
      "policy.py": [960, 628, 360, 112, COL.s], "budget.py": [270, 476, 300, 72], "config.py": [270, 606, 300, 72], "memory.py": [270, 736, 300, 72],
      "scene.py": [640, 470, 300, 72, COL.m], "candidates.py": [1280, 470, 300, 72, COL.o],
      "model_backend.py": [1650, 476, 300, 72], "transitions.py": [1650, 606, 300, 72], "types.py": [1650, 736, 300, 72],
      "heuristics.py": [610, 806, 300, 72], "perception.py": [960, 826, 300, 72], "trace.py": [1310, 806, 300, 72, COL.m]
    };
    var CORE = ["budget.py", "config.py", "memory.py", "scene.py", "heuristics.py", "perception.py", "trace.py", "candidates.py", "model_backend.py", "transitions.py", "types.py"];
    var SIDE = [["scene.py", "heuristics.py", COL.m], ["candidates.py", "config.py", COL.o], ["candidates.py", "model_backend.py", COL.o], ["candidates.py", "types.py", COL.o],
      ["transitions.py", "types.py", COL.x], ["trace.py", "types.py", COL.m], ["heuristics.py", "perception.py", COL.x], ["trace.py", "perception.py", COL.x]];
    var gE = sv("g", {}, svg), gFlow = sv("g", { "class": "flow" }, svg), gN = sv("g", {}, svg);
    function edge(a, b, col) {
      var A = NODE[a], B = NODE[b], d;
      if (Math.abs(A[0] - B[0]) < 60) d = "M" + A[0] + " " + A[1] + "L" + B[0] + " " + B[1];
      else if (Math.abs(A[1] - B[1]) < 30) d = "M" + A[0] + " " + A[1] + "L" + B[0] + " " + B[1];
      else { var mx = (A[0] + B[0]) / 2; d = "M" + A[0] + " " + A[1] + "C" + mx + " " + A[1] + " " + mx + " " + B[1] + " " + B[0] + " " + B[1]; }
      return sv("path", { "class": "gr-e", d: d, stroke: col }, gE);
    }
    var side = SIDE.map(function (s) { return edge(s[0], s[1], s[2]); });
    var core = CORE.map(function (n) { return edge("policy.py", n, NODE[n][4] || COL.s); });
    var nodes = {};
    Object.keys(NODE).forEach(function (name) {
      var n = NODE[name], g = sv("g", { "class": "gr-n" + (name === "policy.py" ? " gr-core" : "") }, gN);
      g.style.transformBox = "fill-box"; g.style.transformOrigin = "50% 50%";
      var rc = sv("rect", { x: n[0] - n[2] / 2, y: n[1] - n[3] / 2, width: n[2], height: n[3] }, g);
      if (n[4]) rc.style.stroke = n[4];
      if (name === "policy.py") rc.style.fill = "#15293A";
      var t = sv("text", { x: n[0], y: n[1] + (name === "policy.py" ? 14 : 10) }, g); t.textContent = name; if (n[4]) t.style.fill = n[4];
      nodes[name] = g;
    });
    var F = core.map(function (p, i) { return new Flow(gFlow, p, { n: 1, size: 12, speed: 150, color: COL.w, off: (i * 0.37) % 1 }); });
    svg.style.opacity = 0;
    D.scene("graphify", {
      enter: function (c) { setOn(F, false); c.loop(function (t) { F.forEach(function (f) { f.tick(t); }); }); },
      step: function (n, c) {
        if (n !== 1) return;
        wa(c, svg, [{ opacity: 0 }, { opacity: 1 }], { duration: 250, delay: 250 });
        popIn(c, nodes["policy.py"], 350, 650);
        core.forEach(function (p, i) { drawIn(c, p, { duration: 800, delay: 800 + i * 90, easing: INOUT }); popIn(c, nodes[CORE[i]], 1150 + i * 90, 480); });
        side.forEach(function (p, i) { drawIn(c, p, { duration: 700, delay: 2500 + i * 90, easing: INOUT }); });
        c.after(2600, function () { setOn(F, true); });
      },
      reset: cleanup
    });
  })();

  /* ============================================================
     10 · DEĞERLENDİRME DARBOĞAZI — döngüde bekleyen hücre
     ============================================================ */
  (function () {
    var DW = [0.6, 0.6, 0.9, 0.7, 3.4, 1.3], MOVE = 0.35, TOTAL = DW.reduce(function (a, b) { return a + b + MOVE; }, 0);
    D.scene("darbogaz", {
      enter: function (c) {
        var lis = c.$$(".da-loop li"), tok = c.$(".da-tok"), bar = c.$(".da-wait i"), cur = -2;
        function cx(i) { return 120 + lis[i].offsetLeft + lis[i].offsetWidth / 2 - 10; }
        function mark(i) { if (i === cur) return; cur = i; lis.forEach(function (l, j) { l.classList.toggle("on", j === i); }); }
        onReset(c, function () { mark(-1); bar.style.width = ""; tok.style.opacity = ""; tok.style.left = ""; });
        tok.style.opacity = 0;
        var t0 = inst(c) ? 0 : 2.2;
        c.loop(function (t) {
          var tt = t - t0; if (tt < 0) return;
          tok.style.opacity = 1;
          if (c.static) { mark(4); bar.style.width = "62%"; tok.style.left = cx(4) + "px"; return; }
          tt = tt % TOTAL;
          for (var i = 0; i < 6; i++) {
            if (tt < DW[i]) { mark(i); tok.style.left = cx(i) + "px"; bar.style.width = (i === 4 ? tt / DW[4] * 100 : i === 5 ? 100 : 0) + "%"; return; }
            tt -= DW[i];
            if (tt < MOVE) { var k = tt / MOVE; k = k * k * (3 - 2 * k); mark(-1); tok.style.left = lerp(cx(i), cx((i + 1) % 6), k) + "px"; if (i === 5) bar.style.width = "0%"; return; }
            tt -= MOVE;
          }
        });
      },
      reset: cleanup
    });
  })();

  /* ============================================================
     11 · AI ARAÇLARI — eşleştirme bilerek yapılmaz
     ============================================================ */
  D.scene("araclar", {
    enter: function (c) {
      var a = c.$$(".to-tools li"), b = c.$$(".to-tags li"), q = c.$(".to-q .pix")._px, i = -1, j = -1;
      onReset(c, function () { a.concat(b).forEach(function (l) { l.classList.remove("hot"); }); });
      if (c.static || RM) return;
      c.after(2000, function () {
        c.every(1300, function () { i = (i + 1) % 4; a.forEach(function (l, k) { l.classList.toggle("hot", k === i); }); });
        c.every(1700, function () { j = (j + 3) % 4; b.forEach(function (l, k) { l.classList.toggle("hot", k === j); }); });
        twinkle(c, q, function () { return COL.y; }, 500);
      });
    },
    reset: cleanup
  });

  /* ============================================================
     12 · 0.11
     ============================================================ */
  (function () {
    var prog = $("#skor .sk-prog"), pc = []; for (var i = 0; i < 24; i++) pc.push(el("i", "", prog));
    D.scene("skor", {
      enter: function (c) {
        var pxs = c.$(".sk-num .pix")._px, r = rnd(4), T = 2700;
        pc.forEach(function (p, i) {
          wa(c, p, [{ background: "rgba(238,240,244,.12)" }, { background: COL.y }], { duration: 90, delay: 900 + i * 68, easing: "linear" });
          wa(c, p, [{ background: COL.y }, { background: COL.r }], { duration: 200, delay: T + 150, easing: "linear" });
        });
        pxs.forEach(function (p) {
          wa(c, p, [{ opacity: 0, translate: "0 -320px", scale: "1.5" }, { opacity: 1, translate: "0 0", scale: "1" }],
            { duration: 460, delay: T + p._c.x * 22 + r() * 160, easing: "cubic-bezier(0.3, 1.35, 0.5, 1)" });
        });
        wa(c, c.$(".sk-flash"), [{ opacity: 0 }, { opacity: 0.5, offset: 0.12 }, { opacity: 0 }], { duration: 1100, delay: T + 380, easing: "ease-out" });
        wa(c, c.$(".sk-wrap"), [{ translate: "0 0" }, { translate: "-16px 9px" }, { translate: "13px -7px" }, { translate: "-8px 5px" }, { translate: "4px -2px" }, { translate: "0 0" }], { duration: 480, delay: T + 400, easing: "linear" });
        c.after(T + 1400, function () {
          if (RM) return;
          c.every(260, function () { blink(c, pxs[Math.floor(Math.random() * pxs.length)], [{ opacity: 1 }, { opacity: 0.45 }, { opacity: 1 }], 700); });
        });
      },
      reset: cleanup
    });
  })();

  /* ============================================================
     13 · SON GECE
     ============================================================ */
  D.scene("songece", {
    enter: function (c) {
      var pxs = c.$(".sg-ghost .pix")._px;
      wa(c, c.$(".sg-ghost"), [{ opacity: 0 }, { opacity: 0.13 }], { duration: 1600, delay: 300 });
      if (!RM) c.every(300, function () { blink(c, pxs[Math.floor(Math.random() * pxs.length)], [{ opacity: 1 }, { opacity: 0.1 }, { opacity: 1 }], 900); });
    },
    reset: cleanup
  });

  /* ============================================================
     14 · PIVOT — makas değişir, 0.11 hücreleri 0.93'e dönüşür
     ============================================================ */
  (function () {
    var host = $("#pivot .pv-pix"), A = glyphCells("0.11"), B = glyphCells("0.93"), map = {}, pitch = 22, gap = 3;
    A.cells.forEach(function (cl) { map[cl.x + "," + cl.y] = { cl: cl, a: 1, b: 0 }; });
    B.cells.forEach(function (cl) { var k = cl.x + "," + cl.y; if (map[k]) map[k].b = 1; else map[k] = { cl: cl, a: 0, b: 1 }; });
    host.style.width = (A.w * pitch - gap) + "px"; host.style.height = (7 * pitch - gap) + "px";
    var cells = Object.keys(map).map(function (k) { var m = map[k]; m.el = pxAt(host, m.cl, pitch, gap); m.el.style.background = COL.r; if (!m.a) m.el.style.opacity = 0; return m; });
    var svg = $("#pivot .ov"), gF = $("#pivot .flow");
    var pOld = sv("path", { d: "M120 700H500C600 700 620 580 720 580H800", fill: "none", stroke: "none" }, svg);
    var pNew = sv("path", { d: "M120 700H1340", fill: "none", stroke: "none" }, svg);
    var FO = new Flow(gF, pOld, { n: 3, size: 16, speed: 170, color: COL.w }), FN = new Flow(gF, pNew, { n: 4, size: 16, speed: 230, color: COL.w });
    var nw = $("#pv-new"); nw.style.opacity = 0;
    D.scene("pivot", {
      enter: function (c) {
        FO.on = false; FN.on = false;
        c.after(2500, function () { if (!FN.on) FO.on = true; });
        c.loop(function (t) { FO.tick(t); FN.tick(t); });
      },
      step: function (n, c) {
        if (n !== 1) return;
        var r = rnd(8), sw = c.$(".pv-sw"), T = 900;
        FO.on = false; FN.on = true;
        sw.style.transformBox = "fill-box"; sw.style.transformOrigin = "50% 50%";
        wa(c, sw, [{ rotate: "0deg", fill: COL.w }, { rotate: "45deg", fill: COL.g }], { duration: 500 });
        wa(c, c.$("#pv-old"), [{ opacity: 1 }, { opacity: 0.22 }], { duration: 500 });
        cls(c, c.$(".pv-oldbox"), "dead");
        drawIn(c, nw, { duration: 900, delay: 200, easing: INOUT });
        c.after(T, function () { cls(c, c.$(".pv-score"), "win"); });
        cells.forEach(function (m) {
          var d = T + m.cl.x * 26 + r() * 240;
          if (m.a && m.b) wa(c, m.el, [{ background: COL.r }, { background: COL.g }], { duration: 400, delay: d });
          else if (m.a) wa(c, m.el, [{ opacity: 1, translate: "0 0", background: COL.r }, { opacity: 0, translate: "0 46px", background: COL.r }], { duration: 420, delay: d, easing: "ease-in" });
          else wa(c, m.el, [{ opacity: 0, scale: "0.2", background: COL.g }, { opacity: 1, scale: "1", background: COL.g }], { duration: 480, delay: d + 160, easing: POP });
        });
      },
      reset: cleanup
    });
  })();

  /* ============================================================
     15 · NE ÖĞRENDİK — zincir adım adım yanar
     ============================================================ */
  D.scene("dersler", {
    enter: function (c) {
      var lis = c.$$(".de-chain li"), k = 0;
      function set(n) { lis.forEach(function (l, i) { l.classList.toggle("on", i < n); }); }
      onReset(c, function () { set(0); });
      if (c.static || RM) { set(7); return; }
      c.after(1700, function () {
        set(inst(c) ? 7 : 1); k = inst(c) ? 7 : 1;
        c.every(520, function () { k++; if (k > 12) k = 1; set(Math.min(k, 7)); });
      });
    },
    reset: cleanup
  });

  /* ============================================================
     16 · KAPANIŞ
     ============================================================ */
  D.scene("kapanis", {
    enter: function (c) {
      var pxs = c.$(".kp-q .pix")._px, yel = function () { return COL.y; };
      ambient(c, c.$(".amb"), 31, 26);
      assemble(c, pxs, { seed: 12, sx: 900, sy: 900, color: yel, delay: 700, spread: 600, dur: 1200 });
      c.after(2800, function () { twinkle(c, pxs, yel, 480); });
    },
    reset: cleanup
  });
})();
