/* ============================================================
   word2vec — scene hooks (Deck.scene). Every animation here explains
   the idea it sits on: words settling into a vector space, one-hot vs
   dense vectors, vector arithmetic, forward passes, sliding context
   windows, the −log loss, our own co-occurrence + SVD model.
   ============================================================ */
(function () {
  "use strict";
  if (!window.Deck) return;
  var NS = "http://www.w3.org/2000/svg", doc = document;
  var RM = !!Deck.reduced;

  /* ---------------------------------------------------------- helpers */
  function S(tag, a, p) { var e = doc.createElementNS(NS, tag); if (a) for (var k in a) e.setAttribute(k, a[k]); if (p) p.appendChild(e); return e; }
  function E(tag, cls, p, html) { var e = doc.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; if (p) p.appendChild(e); return e; }
  function $(s, r) { return (r || doc).querySelector(s); }
  function $$(s, r) { return [].slice.call((r || doc).querySelectorAll(s)); }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  var EZ = {
    io: function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; },
    out: function (t) { return 1 - Math.pow(1 - t, 3); },
    expo: function (t) { return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t); },
    lin: function (t) { return t; }
  };
  function rng(seed) { var s = seed >>> 0; return function () { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; }; }
  function fmtS(v, d) { var s = Math.abs(v).toFixed(d); return (v < -1e-9 ? "−" : "") + s; }

  /* rAF tween; in instant mode it jumps to the end. Stops (never resolves) once the scene is left. */
  function tween(c, dur, fn, opt) {
    opt = opt || {};
    var e = opt.ease || EZ.io, delay = (opt.delay || 0) * 1000;
    return new Promise(function (res) {
      if (c.instant || RM) { fn(1); res(); return; }
      var t0 = performance.now() + delay;
      if (opt.pre) fn(0);
      (function tick(now) {
        if (!c.alive) return;
        var t = (now - t0) / (dur * 1000);
        if (t >= 1) { fn(1); res(); return; }
        if (t >= 0) fn(e(t));
        requestAnimationFrame(tick);
      })(performance.now());
    });
  }
  function later(c, s, f) { if (c.instant || RM) { f(); return; } c.after(s * 1000, f); }
  function pop(el, c, delay, from) {
    if (c.instant || RM || !el.animate) { el.style.opacity = 1; return; }
    el.style.opacity = 1;
    el.animate([from || { opacity: 0, translate: "0 14px" }, { opacity: 1, translate: "0 0" }],
      { duration: 650, delay: (delay || 0) * 1000, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards" });
  }

  /* polyline particles for network diagrams */
  function Flow(svg) { this.g = S("g", { class: "flow-g" }, svg); this.list = []; }
  Flow.prototype.spawn = function (pts, speed, cls, r) {
    var segs = [], L = 0;
    for (var i = 1; i < pts.length; i++) { var d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); segs.push(d); L += d; }
    var el = S("circle", { class: "pt " + (cls || ""), r: r || 5.5, cx: pts[0][0], cy: pts[0][1], opacity: 0 }, this.g);
    this.list.push({ el: el, pts: pts, segs: segs, L: L, d: 0, v: speed || 520 });
  };
  Flow.prototype.step = function (dt) {
    for (var i = this.list.length - 1; i >= 0; i--) {
      var p = this.list[i]; p.d += p.v * dt;
      if (p.d >= p.L) { p.el.remove(); this.list.splice(i, 1); continue; }
      var d = p.d, k = 0; while (k < p.segs.length - 1 && d > p.segs[k]) { d -= p.segs[k]; k++; }
      var t = p.segs[k] ? d / p.segs[k] : 0, a = p.pts[k], b = p.pts[k + 1];
      p.el.setAttribute("cx", (a[0] + (b[0] - a[0]) * t).toFixed(1));
      p.el.setAttribute("cy", (a[1] + (b[1] - a[1]) * t).toFixed(1));
      p.el.setAttribute("opacity", Math.min(1, p.d / 40, (p.L - p.d) / 40).toFixed(2));
    }
  };
  Flow.prototype.clear = function () { this.list.forEach(function (p) { p.el.remove(); }); this.list = []; };

  function arrowHead(x1, y1, x2, y2, size) {
    var a = Math.atan2(y2 - y1, x2 - x1), s = size || 16, w = s * .55;
    var bx = x2 - Math.cos(a) * s, by = y2 - Math.sin(a) * s;
    return [x2, y2, bx + Math.sin(a) * w, by - Math.cos(a) * w, bx - Math.sin(a) * w, by + Math.cos(a) * w].map(function (v) { return v.toFixed(1); }).join(" ");
  }

  /* ---------------------------------------------------------- 01 · word field (cover + closing) */
  var FIELD_COVER = {
    words: [["man", 1210, 800], ["woman", 1370, 750], ["king", 1260, 640], ["queen", 1420, 590],
      ["cat", 1600, 800], ["dog", 1700, 850], ["kitten", 1560, 892], ["puppy", 1700, 936], ["fox", 1786, 784],
      ["Athens", 1560, 330], ["Greece", 1700, 262], ["Oslo", 1610, 440], ["Norway", 1748, 372],
      ["big", 1205, 330], ["biggest", 1300, 232], ["small", 1262, 424], ["smallest", 1357, 326],
      ["walking", 1534, 556], ["walked", 1690, 596], ["swimming", 1522, 662], ["swam", 1678, 702]],
    rel: [["man", "woman"], ["king", "queen"], ["Athens", "Greece"], ["Oslo", "Norway"]],
    box: [1170, 150, 1830, 950], bg: 110, axes: true, seed: 7
  };
  var FIELD_END = {
    words: [["man", 1300, 912], ["woman", 1440, 872], ["king", 1340, 800], ["queen", 1480, 760],
      ["cat", 1650, 924], ["dog", 1750, 952], ["Athens", 1640, 800], ["Greece", 1770, 748]],
    rel: [["man", "woman"], ["king", "queen"], ["Athens", "Greece"]],
    box: [1250, 720, 1830, 970], bg: 46, axes: false, seed: 11
  };
  function Field(svg, cfg) {
    var r = rng(cfg.seed), b = cfg.box, self = this;
    this.cfg = cfg;
    if (cfg.axes) {
      S("line", { class: "ax", x1: b[0] - 20, y1: b[3] + 32, x2: b[2] + 10, y2: b[3] + 32 }, svg);
      S("line", { class: "ax", x1: b[0] - 20, y1: b[3] + 32, x2: b[0] - 20, y2: b[1] - 30 }, svg);
      S("text", { class: "axl", x: b[2] + 10, y: b[3] + 18, "text-anchor": "end" }, svg).textContent = "dim 1";
      S("text", { class: "axl", x: b[0] - 6, y: b[1] - 26 }, svg).textContent = "dim 2";
    }
    this.bg = [];
    for (var i = 0; i < cfg.bg; i++) {
      var o = { x: lerp(b[0] - 10, b[2] + 10, r()), y: lerp(b[1] - 10, b[3] + 10, r()), ph: r() * 6.28, sp: .25 + r() * .45 };
      o.el = S("circle", { class: "bg", r: (1.6 + r() * 2.2).toFixed(1), opacity: (.16 + r() * .3).toFixed(2), cx: o.x, cy: o.y }, svg);
      this.bg.push(o);
    }
    this.relG = S("g", {}, svg);
    this.by = {};
    var starts = cfg.rel.map(function (pr) { return pr[0]; });
    this.pts = cfg.words.map(function (w) {
      var g = S("g", { class: "wp" }, svg);
      S("circle", { r: 6.5 }, g);
      var below = starts.indexOf(w[0]) > -1;
      S("text", below ? { x: 0, y: 36, "text-anchor": "middle" } : { x: 13, y: 8 }, g).textContent = w[0];
      var p = { g: g, tx: w[1], ty: w[2], sx: lerp(b[0], b[2], r()), sy: lerp(b[1], b[3], r()), ph: r() * 6.28, dl: r() * .3 };
      self.by[w[0]] = p; return p;
    });
    this.rels = cfg.rel.map(function (pr) {
      return { a: self.by[pr[0]], b: self.by[pr[1]], ln: S("line", { class: "rel" }, self.relG), hd: S("polygon", { class: "rel-h" }, self.relG) };
    });
  }
  Field.prototype.frame = function (t, conv) {
    var amp = RM ? 0 : 1;
    this.bg.forEach(function (o) {
      o.el.setAttribute("cx", (o.x + Math.sin(t * o.sp + o.ph) * 7 * amp).toFixed(1));
      o.el.setAttribute("cy", (o.y + Math.cos(t * o.sp * .8 + o.ph) * 6 * amp).toFixed(1));
    });
    this.pts.forEach(function (p) {
      var k = EZ.io(clamp((conv - p.dl) / .7, 0, 1));
      p.x = lerp(p.sx, p.tx, k) + Math.sin(t * .55 + p.ph) * 4 * amp;
      p.y = lerp(p.sy, p.ty, k) + Math.cos(t * .45 + p.ph) * 4 * amp;
      p.g.setAttribute("transform", "translate(" + p.x.toFixed(1) + " " + p.y.toFixed(1) + ")");
    });
    var ro = clamp((conv - .82) / .18, 0, 1);
    this.rels.forEach(function (R) {
      var dx = R.b.x - R.a.x, dy = R.b.y - R.a.y, L = Math.hypot(dx, dy) || 1, ux = dx / L, uy = dy / L;
      var x1 = R.a.x + ux * 12, y1 = R.a.y + uy * 12, x2 = R.b.x - ux * 12, y2 = R.b.y - uy * 12;
      R.ln.setAttribute("x1", x1.toFixed(1)); R.ln.setAttribute("y1", y1.toFixed(1));
      R.ln.setAttribute("x2", x2.toFixed(1)); R.ln.setAttribute("y2", y2.toFixed(1));
      R.hd.setAttribute("points", arrowHead(x1, y1, x2, y2, 13));
      R.ln.setAttribute("opacity", ro); R.hd.setAttribute("opacity", ro);
    });
  };
  var fCover = null, fEnd = null;
  Deck.scene("cover", {
    enter: function (c) {
      fCover = fCover || new Field($("#cover .field"), FIELD_COVER);
      var inst = c.instant || RM;
      fCover.frame(0, inst ? 1 : 0);
      c.loop(function (t) { fCover.frame(t, inst ? 1 : clamp((t - .3) / 2.7, 0, 1)); });
    }
  });
  Deck.scene("closing", {
    enter: function (c) {
      fEnd = fEnd || new Field($("#closing .field"), FIELD_END);
      var inst = c.instant || RM;
      fEnd.frame(0, inst ? 1 : 0);
      c.loop(function (t) { fEnd.frame(t, inst ? 1 : clamp((t - .9) / 2.4, 0, 1)); });
    }
  });

  /* ---------------------------------------------------------- 03 · one-hot → dense */
  (function () {
    var sc = $("#onehot"); if (!sc) return;
    var rows = $$(".oh-row", sc);
    rows.forEach(function (row) {
      var box = $(".oh-cells", row);
      for (var i = 0; i < 18; i++) { var cel = E("span", "c", box, "0"); cel.style.transitionDelay = (i * 0.018).toFixed(3) + "s"; }
      E("span", "c dots", box, "…");
      row._cells = $$(".c:not(.dots)", box); row._hot = +row.getAttribute("data-hot");
    });
    var svg = $(".oh-plot", sc), O = [70, 252], L = 215;
    S("line", { class: "ax", x1: O[0], y1: O[1], x2: 392, y2: O[1] }, svg);
    S("line", { class: "ax", x1: O[0], y1: O[1], x2: O[0], y2: 10 }, svg);
    var ra = S("path", { class: "ang", d: "M" + O[0] + " " + (O[1] - 26) + " H" + (O[0] + 26) + " V" + O[1] }, svg);
    var rat = S("text", { class: "angt", x: O[0] + 36, y: O[1] - 32 }, svg); rat.textContent = "90°";
    var arc = S("path", { class: "ang", style: "stroke:var(--acc)" }, svg);
    var V = ["cat", "dog"].map(function (w) {
      return { ln: S("line", { class: "vec", x1: O[0], y1: O[1] }, svg), hd: S("polygon", { class: "hd" }, svg), tx: S("text", { class: "lb" }, svg, null) };
    });
    V[0].tx.textContent = "cat"; V[1].tx.textContent = "dog";
    function plot(k) {
      var ang = [lerp(0, 36, k), lerp(90, 52, k)];
      ang.forEach(function (a, i) {
        var r = a * Math.PI / 180, x = O[0] + Math.cos(r) * L, y = O[1] - Math.sin(r) * L, v = V[i];
        v.ln.setAttribute("x2", x.toFixed(1)); v.ln.setAttribute("y2", y.toFixed(1));
        v.hd.setAttribute("points", arrowHead(O[0], O[1], x + Math.cos(r) * 6, y - Math.sin(r) * 6, 18));
        if (i === 0) { v.tx.setAttribute("x", (x + 18).toFixed(1)); v.tx.setAttribute("y", (y - 12 + 18 * k).toFixed(1)); v.tx.setAttribute("text-anchor", "start"); }
        else { v.tx.setAttribute("x", (x - 16).toFixed(1)); v.tx.setAttribute("y", (y - 2).toFixed(1)); v.tx.setAttribute("text-anchor", "end"); }
        v.ln.style.stroke = k > .5 ? "var(--acc)" : "var(--ink)"; v.hd.style.fill = k > .5 ? "var(--acc)" : "var(--ink)";
      });
      ra.setAttribute("opacity", 1 - k); rat.setAttribute("opacity", 1 - k);
      var r0 = ang[0] * Math.PI / 180, r1 = ang[1] * Math.PI / 180, R = 96;
      arc.setAttribute("d", "M" + (O[0] + Math.cos(r0) * R).toFixed(1) + " " + (O[1] - Math.sin(r0) * R).toFixed(1) + " A" + R + " " + R + " 0 0 0 " + (O[0] + Math.cos(r1) * R).toFixed(1) + " " + (O[1] - Math.sin(r1) * R).toFixed(1));
      arc.setAttribute("opacity", k);
    }
    plot(0);
    function lightAll() { rows.forEach(function (r) { var c = r._cells[r._hot]; c.textContent = "1"; c.classList.add("on"); }); }
    Deck.scene("onehot", {
      enter: function (c) {
        plot(0);
        if (c.instant || RM) { lightAll(); return; }
        for (var i = 0; i < 18; i++) (function (i) {
          c.after(650 + i * 55, function () {
            rows.forEach(function (r) {
              var cel = r._cells[i]; cel.classList.add("scan");
              c.after(240, function () { cel.classList.remove("scan"); });
              if (i === r._hot) { cel.textContent = "1"; cel.classList.add("on"); }
            });
          });
        })(i);
      },
      step: function (n, c) {
        if (n !== 1) return;
        lightAll();
        tween(c, 1.4, plot, { delay: .25 });
        $$(".oh-dense b", sc).forEach(function (b, i) {
          var v = +b.getAttribute("data-v");
          tween(c, 1.5, function (k) { b.textContent = fmtS(v * k, 2); }, { ease: EZ.expo, delay: .35 + i * .05, pre: true });
        });
      },
      reset: function () {
        rows.forEach(function (r) { r._cells.forEach(function (x) { x.classList.remove("on", "scan"); x.textContent = "0"; }); });
        $$(".oh-dense b", sc).forEach(function (b) { b.textContent = fmtS(+b.getAttribute("data-v"), 2); });
        plot(0);
      }
    });
  })();

  /* ---------------------------------------------------------- 04 · King − Man + Woman = Queen */
  (function () {
    var sc = $("#analogy"); if (!sc) return;
    var svg = $(".an-plot", sc);
    var P = { man: [520, 900], woman: [880, 760], king: [1080, 610], queen: [1440, 470] };
    var LAB = { man: [-26, 14, "end", "Man"], woman: [22, 52, "start", "Woman"], king: [-26, 14, "end", "King"], queen: [26, 14, "start", "Queen"] };
    for (var x = 100; x <= 1820; x += 86) S("line", { class: "gl", x1: x, y1: 330, x2: x, y2: 1010 }, svg);
    for (var y = 330; y <= 1010; y += 85) S("line", { class: "gl", x1: 100, y1: y, x2: 1820, y2: y }, svg);
    S("line", { class: "gax", x1: 100, y1: 1010, x2: 1820, y2: 1010 }, svg);
    S("line", { class: "gax", x1: 100, y1: 1010, x2: 100, y2: 330 }, svg);
    var r = rng(5);
    for (var i = 0; i < 46; i++) {
      var px = lerp(160, 1780, r()), py = lerp(360, 980, r()), near = false;
      for (var k in P) if (Math.hypot(px - P[k][0], py - P[k][1]) < 120) near = true;
      if (!near) S("circle", { class: "dim", cx: px.toFixed(0), cy: py.toFixed(0), r: (3 + r() * 3).toFixed(1) }, svg);
    }
    var par1 = S("line", { class: "par", x1: P.man[0], y1: P.man[1], x2: P.king[0], y2: P.king[1] }, svg);
    var par2 = S("line", { class: "par", x1: P.woman[0], y1: P.woman[1], x2: P.queen[0], y2: P.queen[1] }, svg);
    [par1, par2].forEach(function (l) { l.setAttribute("opacity", 0); });
    var aA = { ln: S("line", { class: "arw" }, svg), hd: S("polygon", { class: "head" }, svg) };
    var aB = { ln: S("line", { class: "arw arw-b" }, svg), hd: S("polygon", { class: "head" }, svg) };
    var tag = S("text", { class: "gtag", x: 0, y: 0, "text-anchor": "middle" }, svg); tag.textContent = "− man + woman";
    var pts = {};
    Object.keys(P).forEach(function (k) {
      var g = S("g", { class: "p" + (k === "queen" ? " q" : ""), transform: "translate(" + P[k][0] + " " + P[k][1] + ")" }, svg);
      S("circle", { class: "halo", r: 16 }, g);
      S("circle", { class: "dot", r: 13 }, g);
      var t = S("text", { x: LAB[k][0], y: LAB[k][1], "text-anchor": LAB[k][2] }, g); t.textContent = LAB[k][3];
      pts[k] = g;
    });
    function setArrow(a, x1, y1, x2, y2, vis) {
      var dx = x2 - x1, dy = y2 - y1, Lr = Math.hypot(dx, dy) || 1, ux = dx / Lr, uy = dy / Lr;
      var sx = x1 + ux * 20, sy = y1 + uy * 20, ex = x2 - ux * 22, ey = y2 - uy * 22;
      a.ln.setAttribute("x1", sx.toFixed(1)); a.ln.setAttribute("y1", sy.toFixed(1));
      a.ln.setAttribute("x2", (ex - ux * 10).toFixed(1)); a.ln.setAttribute("y2", (ey - uy * 10).toFixed(1));
      a.hd.setAttribute("points", arrowHead(sx, sy, ex, ey, 26));
      a.ln.style.opacity = vis; a.hd.style.opacity = vis;
    }
    var D = [P.woman[0] - P.man[0], P.woman[1] - P.man[1]];
    function growA(k) {
      var x2 = P.man[0] + D[0] * Math.max(k, .08), y2 = P.man[1] + D[1] * Math.max(k, .08);
      setArrow(aA, P.man[0], P.man[1], x2, y2, k > 0 ? 1 : 0);
      tag.setAttribute("x", (P.man[0] + D[0] * .5 + 26).toFixed(1)); tag.setAttribute("y", (P.man[1] + D[1] * .5 + 44).toFixed(1));
      tag.setAttribute("opacity", clamp((k - .6) / .4, 0, 1));
    }
    function moveB(k) {
      var sx = lerp(P.man[0], P.king[0], k), sy = lerp(P.man[1], P.king[1], k);
      setArrow(aB, sx, sy, sx + D[0], sy + D[1], 1);
    }
    function terms(list, cls) { $$(".an-eq .t", sc).forEach(function (t) { if (list.indexOf(t.getAttribute("data-k")) > -1) t.classList.add(cls); }); }
    function clear() {
      setArrow(aA, 0, 0, 1, 1, 0); setArrow(aB, 0, 0, 1, 1, 0); tag.setAttribute("opacity", 0);
      par1.setAttribute("opacity", 0); par2.setAttribute("opacity", 0);
      pts.queen.classList.remove("lit");
      $$(".an-eq .t", sc).forEach(function (t) { t.classList.remove("on", "res"); });
    }
    clear();
    Deck.scene("analogy", {
      enter: function (c) {
        clear();
        Object.keys(pts).forEach(function (k, i) { pop(pts[k], c, .35 + i * .12, { opacity: 0, scale: ".4" }); });
      },
      step: function (n, c) {
        if (n === 1) {
          terms(["man", "woman"], "on");
          tween(c, 1.0, growA, { delay: .15, ease: EZ.out, pre: true });
        }
        if (n === 2) {
          growA(1); terms(["king"], "on");
          moveB(0);
          tween(c, 1.4, moveB, { delay: .45 }).then(function () {
            terms(["queen"], "res"); pts.queen.classList.add("lit");
            tween(c, .8, function (k) { par1.setAttribute("opacity", k); par2.setAttribute("opacity", k); });
          });
        }
      },
      reset: clear
    });
  })();

  /* ---------------------------------------------------------- network builder (NNLM) */
  function column(x, n, gap, cy) { var out = []; for (var i = 0; i < n; i++) out.push([x, cy + (i - (n - 1) / 2) * gap]); return out; }

  /* ---------------------------------------------------------- 07 · NNLM */
  (function () {
    var sc = $("#nnlm"); if (!sc) return;
    var svg = $(".nn-net", sc), cy = 292;
    var L = [column(110, 5, 90, cy), column(420, 5, 90, cy), column(730, 4, 100, cy), column(1040, 6, 78, cy)];
    var caps = ["Input", "Projection", "Hidden", "Output"];
    var subs = ["N words", "N × D", "H", "V"];
    var eg = S("g", {}, svg);
    L[0].forEach(function (a, i) { S("line", { class: "edge e-ip", x1: a[0], y1: a[1], x2: L[1][i][0], y2: L[1][i][1] }, eg); });
    L[1].forEach(function (a) { L[2].forEach(function (b) { S("line", { class: "edge e-ph", x1: a[0], y1: a[1], x2: b[0], y2: b[1] }, eg); }); });
    L[2].forEach(function (a) { L[3].forEach(function (b) { S("line", { class: "edge e-ho", x1: a[0], y1: a[1], x2: b[0], y2: b[1] }, eg); }); });
    var flow = new Flow(svg);
    L.forEach(function (col, j) {
      col.forEach(function (p) { S("circle", { class: "node" + (j === 2 ? " hid" : ""), cx: p[0], cy: p[1], r: 24 }, svg); });
      S("text", { class: "cap", x: col[0][0], y: 18 }, svg).textContent = caps[j];
      var t = S("text", { class: "cap", x: col[0][0], y: 566, style: "font:italic 400 34px/1 var(--serif);letter-spacing:0;text-transform:none;fill:" + (j === 2 ? "var(--red)" : "var(--ink2)") }, svg);
      t.textContent = subs[j];
    });
    var r = rng(3);
    Deck.scene("nnlm", {
      enter: function (c) {
        var acc = 0;
        c.loop(function (t, dt) {
          acc += dt;
          while (acc > .11) {
            acc -= .11;
            var i = Math.floor(r() * 5), j = Math.floor(r() * 4), k = Math.floor(r() * 6);
            flow.spawn([L[0][i], L[1][i], L[2][j], L[3][k]], 430, j === -1 ? "" : "");
          }
          flow.step(dt);
        });
      },
      step: function (n) {
        if (n === 1) svg.classList.add("hot-ph");
        if (n === 2) svg.classList.add("hot-ho");
      },
      leave: function () { flow.clear(); },
      reset: function () { svg.classList.remove("hot-ph", "hot-ho"); flow.clear(); }
    });
  })();

  /* ---------------------------------------------------------- 08 · RNNLM */
  (function () {
    var sc = $("#rnnlm"); if (!sc) return;
    var svg = $(".rn-net", sc);
    var WORDS = ["The", "cat", "was", "sat", "outside"];
    var hid = column(470, 5, 72, 440), out = column(800, 5, 72, 440);
    var tape = [], tx = 30;
    S("text", { class: "lab", x: 30, y: 24 }, svg).textContent = "Reads one word at a time";
    WORDS.forEach(function (w) { var t = S("text", { class: "tape", x: tx, y: 80 }, svg); t.textContent = w; tape.push(t); tx += w.length * 18 + 26; });
    var ptr = S("rect", { x: 26, y: 92, width: 50, height: 4, rx: 2, fill: "var(--acc)" }, svg);
    var eg = S("g", {}, svg);
    var inP = [240, 440];
    hid.forEach(function (h) { S("line", { class: "edge e-ih", x1: inP[0], y1: inP[1], x2: h[0], y2: h[1] }, eg); });
    hid.forEach(function (h) { out.forEach(function (o) { S("line", { class: "edge e-ho", x1: h[0], y1: h[1], x2: o[0], y2: o[1] }, eg); }); });
    var loopD = "M500 278 C 622 186, 594 128, 470 136 C 346 144, 318 206, 440 276";
    var loop = S("path", { class: "loop", d: loopD }, svg);
    S("polygon", { class: "looph", points: arrowHead(414, 248, 446, 280, 22) }, svg);
    var hh = S("text", { class: "hh", x: 616, y: 182 }, svg); hh.textContent = "H × H";
    S("text", { class: "lab lab-r", x: 616, y: 214 }, svg).textContent = "feeds back";
    S("rect", { class: "inbox", x: 40, y: 395, width: 200, height: 90, rx: 12 }, svg);
    var inw = S("text", { class: "inw", x: 140, y: 440 }, svg);
    var flow = new Flow(svg);
    hid.forEach(function (p) { S("circle", { class: "node hid", cx: p[0], cy: p[1], r: 24 }, svg); });
    out.forEach(function (p) { S("circle", { class: "node", cx: p[0], cy: p[1], r: 24 }, svg); });
    var mem = S("g", { class: "mem" }, svg), cells = [];
    for (var i = 0; i < 8; i++) cells.push(S("rect", { x: 330 + i * 36, y: 630, width: 30, height: 30, rx: 5, fill: "var(--paper)" }, mem));
    S("text", { class: "lab lab-r", x: 330, y: 694 }, svg).textContent = "hidden state = memory";
    S("text", { class: "lab", x: 140, y: 756, "text-anchor": "middle" }, svg).textContent = "input";
    S("text", { class: "lab", x: 470, y: 756, "text-anchor": "middle" }, svg).textContent = "hidden · H";
    S("text", { class: "lab", x: 800, y: 756, "text-anchor": "middle" }, svg).textContent = "output · V";
    var loopLen = loop.getTotalLength ? loop.getTotalLength() : 0;
    function show(idx) {
      if (inw.textContent !== WORDS[idx]) { inw.textContent = WORDS[idx]; if (!RM && inw.animate) inw.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 380, easing: "ease-out" }); }
      tape.forEach(function (t, j) { t.setAttribute("class", "tape" + (j === idx ? " cur" : j < idx ? " past" : "")); });
      var bx = +tape[idx].getAttribute("x");
      ptr.setAttribute("x", bx); ptr.setAttribute("width", WORDS[idx].length * 18);
      var rr = rng(idx * 97 + 13);
      cells.forEach(function (c, j) { var v = j <= idx * 2 + 1 ? .15 + rr() * .85 : 0; c.setAttribute("fill", v ? "rgba(210,63,41," + v.toFixed(2) + ")" : "var(--paper)"); });
    }
    function burst(c) {
      hid.forEach(function (h, j) { flow.spawn([inP, h], 520, "", 6); });
      later(c, .5, function () {
        if (loopLen) { var pts = []; for (var s = 0; s <= 24; s++) { var q = loop.getPointAtLength(loopLen * s / 24); pts.push([q.x, q.y]); } flow.spawn(pts, 560, "r", 7); }
        hid.forEach(function (h, j) { out.forEach(function (o, k) { if ((j + k) % 2 === 0) flow.spawn([h, o], 520, "", 5); }); });
      });
    }
    show(2);
    Deck.scene("rnnlm", {
      enter: function (c) {
        var idx = c.static ? 2 : 0; show(idx);
        c.loop(function (t, dt) { flow.step(dt); });
        if (c.static) return;
        later(c, .8, function () { burst(c); });
        c.every(1900, function () { idx = (idx + 1) % WORDS.length; show(idx); burst(c); });
      },
      leave: function () { flow.clear(); },
      reset: function () { flow.clear(); show(2); }
    });
  })();

  /* ---------------------------------------------------------- 09 · log-linear: the weight matrix */
  (function () {
    var sc = $("#loglinear"); if (!sc) return;
    var svg = $(".ll-mat", sc);
    var N = 3, D = 5, H = 5, s = 24, g = 4, x0 = 46, y0 = 46, cells = [];
    for (var n = 0; n < N; n++) {
      var bx = x0 + n * D * (s + g) + n * 14;
      S("path", { d: "M" + bx + " 30 V22 H" + (bx + D * (s + g) - g) + " V30", fill: "none", stroke: "var(--ink3)", "stroke-width": 2 }, svg);
      var t = S("text", { x: bx + (D * (s + g) - g) / 2, y: 16, "text-anchor": "middle", style: "font:italic 400 26px/1 var(--serif);fill:var(--red)" }, svg); t.textContent = "D";
      for (var d = 0; d < D; d++) for (var h = 0; h < H; h++) {
        cells.push({ el: S("rect", { x: bx + d * (s + g), y: y0 + h * (s + g), width: s, height: s, rx: 4, fill: "var(--red)", opacity: .18 + ((n * 7 + d * 3 + h * 5) % 9) / 14 }, svg), col: n * D + d });
      }
    }
    var tH = S("text", { x: 18, y: y0 + H * (s + g) / 2 + 9, "text-anchor": "middle", style: "font:italic 400 30px/1 var(--serif);fill:var(--red)" }, svg); tH.textContent = "H";
    var endX = x0 + N * D * (s + g) + (N - 1) * 14;
    var lab = S("text", { x: endX + 22, y: y0 + 30, style: "font:500 19px/1.3 var(--mono);fill:var(--ink3);letter-spacing:.05em" }, svg); lab.textContent = "N context words,";
    var lab2 = S("text", { x: endX + 22, y: y0 + 58, style: "font:500 19px/1.3 var(--mono);fill:var(--ink3);letter-spacing:.05em" }, svg); lab2.textContent = "D numbers each,";
    var lab3 = S("text", { x: endX + 22, y: y0 + 86, style: "font:500 19px/1.3 var(--mono);fill:var(--ink3);letter-spacing:.05em" }, svg); lab3.textContent = "to H hidden units";
    var lab4 = S("text", { x: endX + 22, y: y0 + 122, style: "font:600 22px/1.3 var(--mono);fill:var(--red);letter-spacing:.02em" }, svg); lab4.textContent = "= (N·D)·H weights";
    Deck.scene("loglinear", {
      enter: function (c) {
        cells.forEach(function (cl) {
          if (c.instant || RM || !cl.el.animate) return;
          cl.el.animate([{ opacity: 0 }, { opacity: cl.el.getAttribute("opacity") }], { duration: 420, delay: 900 + cl.col * 38, fill: "backwards", easing: "ease-out" });
        });
      }
    });
  })();

  /* ---------------------------------------------------------- 10/11 · CBOW + Skip-gram */
  function buildTiles(box, words) {
    var win = E("div", "win", box); E("span", "win-lab", win, "context window");
    return { win: win, tiles: words.map(function (w) { return E("span", "tile", box, w); }) };
  }
  function flash(el) { if (!RM && el.animate) el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 380, easing: "ease-out" }); }
  function placeWindow(T, a, b) {
    var t0 = T.tiles[a], t1 = T.tiles[b];
    T.win.style.left = (t0.offsetLeft - 12) + "px";
    T.win.style.width = (t1.offsetLeft + t1.offsetWidth - t0.offsetLeft + 24) + "px";
  }
  function archBox(svg, x, y, w, h, cls) { return S("rect", { class: "box " + (cls || ""), x: x - w / 2, y: y - h / 2, width: w, height: h, rx: 8 }, svg); }
  function archLine(svg, x1, y1, x2, y2) {
    S("line", { class: "ln", x1: x1, y1: y1, x2: x2 - (x2 - x1) / Math.hypot(x2 - x1, y2 - y1) * 14, y2: y2 - (y2 - y1) / Math.hypot(x2 - x1, y2 - y1) * 14 }, svg);
    S("polygon", { class: "ah", points: arrowHead(x1, y1, x2, y2, 18) }, svg);
  }
  var OFF = ["w(t−2)", "w(t−1)", "w(t+1)", "w(t+2)"], YS = [104, 222, 398, 516];

  (function () {
    var sc = $("#cbow"); if (!sc) return;
    var WORDS = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
    var T = buildTiles($(".cb-sent", sc), WORDS);
    var svg = $(".cb-net", sc);
    [["Input", 215], ["Projection", 480], ["Output", 745]].forEach(function (c) { S("text", { class: "cap", x: c[1], y: 22 }, svg).textContent = c[0]; });
    var inT = YS.map(function (y, i) {
      archBox(svg, 215, y, 190, 78);
      archLine(svg, 310, y, 415, 310 + (y - 310) * .25);
      S("text", { class: "wt", x: 104, y: y, "text-anchor": "end" }, svg).textContent = OFF[i];
      return S("text", { class: "wl", x: 215, y: y }, svg);
    });
    archBox(svg, 480, 310, 130, 110, "sum");
    S("text", { class: "sumt", x: 480, y: 310 }, svg).textContent = "SUM";
    archLine(svg, 545, 310, 650, 310);
    archBox(svg, 745, 310, 190, 78, "ctr");
    S("text", { class: "wt", x: 745, y: 252, "text-anchor": "middle" }, svg).textContent = "w(t)";
    var outT = S("text", { class: "wl ctr", x: 745, y: 310 }, svg);
    var flow = new Flow(svg);
    var r = rng(9);
    var CEN = [2, 3, 4, 5, 6], ci = 2;
    function show(t) {
      var ids = [t - 2, t - 1, t + 1, t + 2];
      T.tiles.forEach(function (el, j) { el.className = "tile" + (j === t ? " ctr" : ids.indexOf(j) > -1 ? " ctx" : ""); });
      placeWindow(T, t - 2, t + 2);
      ids.forEach(function (j, i) { if (inT[i].textContent !== WORDS[j]) { inT[i].textContent = WORDS[j]; flash(inT[i]); } });
      if (outT.textContent !== WORDS[t]) { outT.textContent = WORDS[t]; flash(outT); }
    }
    function burst() {
      YS.forEach(function (y, i) { flow.spawn([[310, y], [415, 310 + (y - 310) * .25], [480, 310], [545, 310], [650, 310]], 420, "", 6); });
    }
    Deck.scene("cbow", {
      enter: function (c) {
        ci = 2; show(CEN[ci]);
        c.loop(function (t, dt) { flow.step(dt); });
        if (c.static) return;
        later(c, .9, burst);
        c.every(2300, function () { ci = (ci + 1) % CEN.length; show(CEN[ci]); c.after(380, burst); });
      },
      leave: function () { flow.clear(); },
      reset: function () { flow.clear(); }
    });
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(function () { show(CEN[ci]); });
  })();

  (function () {
    var sc = $("#skipgram"); if (!sc) return;
    var WORDS = ["The", "cat", "was", "sat", "outside"];
    var T = buildTiles($(".sg-sent", sc), WORDS);
    T.tiles.forEach(function (el, j) { el.className = "tile" + (j === 2 ? " ctr" : " ctx"); });
    var svg = $(".sg-net", sc);
    [["Input", 200], ["Projection", 440], ["Output", 680]].forEach(function (c) { S("text", { class: "cap", x: c[1], y: 22 }, svg).textContent = c[0]; });
    archBox(svg, 200, 310, 170, 78, "ctr");
    S("text", { class: "wl ctr", x: 200, y: 310 }, svg).textContent = "was";
    S("text", { class: "wt", x: 200, y: 252, "text-anchor": "middle" }, svg).textContent = "w(t)";
    archLine(svg, 285, 310, 390, 310);
    archBox(svg, 440, 310, 100, 110, "sum");
    S("text", { class: "sumt", x: 440, y: 310, style: "font:italic 400 34px/1 var(--serif);letter-spacing:0" }, svg).textContent = "e";
    var ctxW = ["The", "cat", "sat", "outside"];
    YS.forEach(function (y, i) {
      archLine(svg, 490, 310 + (y - 310) * .25, 595, y);
      archBox(svg, 680, y, 170, 78);
      S("text", { class: "wl", x: 680, y: y }, svg).textContent = ctxW[i];
      S("text", { class: "wt", x: 780, y: y, "text-anchor": "start" }, svg).textContent = OFF[i];
    });
    var flow = new Flow(svg);
    function burst() { YS.forEach(function (y) { flow.spawn([[285, 310], [390, 310], [440, 310], [490, 310 + (y - 310) * .25], [595, y]], 420, "", 6); }); }

    /* the −log(x) loss curve */
    var cs = $(".sg-curve", sc), ox = 96, oy = 446, W = 700, Hs = 100;
    S("line", { class: "ax", x1: ox, y1: oy, x2: ox + W + 30, y2: oy }, cs);
    S("line", { class: "ax", x1: ox, y1: oy, x2: ox, y2: 20 }, cs);
    S("text", { class: "tk", x: ox, y: oy + 36, "text-anchor": "middle" }, cs).textContent = "0";
    S("text", { class: "tk", x: ox + W, y: oy + 36, "text-anchor": "middle" }, cs).textContent = "1";
    S("line", { class: "ax", x1: ox + W, y1: oy, x2: ox + W, y2: oy + 10 }, cs);
    S("text", { class: "lab", x: ox + W / 2, y: oy + 40, "text-anchor": "middle" }, cs).textContent = "P(correct word | center word)";
    S("text", { class: "lab", x: ox - 18, y: 36, "text-anchor": "end" }, cs).textContent = "loss";
    var d = "", first = true;
    for (var i = 0; i <= 120; i++) { var p = .02 + .98 * Math.pow(i / 120, 1.6), yy = -Math.log(p); d += (first ? "M" : "L") + (ox + p * W).toFixed(1) + " " + (oy - yy * Hs).toFixed(1) + " "; first = false; }
    var curve = S("path", { class: "cv", d: d }, cs);
    S("text", { class: "big", x: ox + 300, y: 150 }, cs).textContent = "−log(x)";
    var gx = S("line", { class: "gd" }, cs), gy = S("line", { class: "gd" }, cs), dot = S("circle", { class: "dot", r: 11 }, cs);
    var CL = curve.getTotalLength ? curve.getTotalLength() : 0;
    function dotAt(p) {
      var x = ox + p * W, y = oy + Math.log(p) * Hs;
      dot.setAttribute("cx", x.toFixed(1)); dot.setAttribute("cy", y.toFixed(1));
      gx.setAttribute("x1", x.toFixed(1)); gx.setAttribute("y1", y.toFixed(1)); gx.setAttribute("x2", x.toFixed(1)); gx.setAttribute("y2", oy);
      gy.setAttribute("x1", ox); gy.setAttribute("y1", y.toFixed(1)); gy.setAttribute("x2", x.toFixed(1)); gy.setAttribute("y2", y.toFixed(1));
    }
    function drawCurve(k) { if (CL) { curve.style.strokeDasharray = CL + " " + CL; curve.style.strokeDashoffset = (CL * (1 - k)).toFixed(1); } }
    dotAt(.35);
    Deck.scene("skipgram", {
      enter: function (c) {
        drawCurve(0);
        c.loop(function (t, dt) {
          flow.step(dt);
          if (sc.getAttribute("data-at") === "1") { var p = .55 + .43 * Math.cos(t * .7); dotAt(clamp(p, .06, .98)); }
        });
        if (c.static) return;
        later(c, .8, burst);
        c.every(1800, burst);
      },
      step: function (n, c) { if (n === 1) tween(c, 1.4, drawCurve, { delay: .3, pre: true }); },
      leave: function () { flow.clear(); },
      reset: function () { flow.clear(); drawCurve(0); dotAt(.35); }
    });
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(function () { placeWindow(T, 0, 4); });
    placeWindow(T, 0, 4);
  })();

  /* ---------------------------------------------------------- 12 · gains: little glyphs that move */
  (function () {
    var G = {
      "gl-1": '<g class="g1-old">' + [20, 45, 70].map(function (a) { return [20, 45, 70].map(function (b) { return '<line class="r" x1="12" y1="' + a + '" x2="60" y2="' + b + '"/><line class="r" x1="60" y1="' + a + '" x2="108" y2="' + b + '"/>'; }).join(""); }).join("") +
        [20, 45, 70].map(function (y) { return '<circle class="nr" cx="60" cy="' + y + '" r="7"/>'; }).join("") + '</g>' +
        '<g class="g1-new">' + [20, 45, 70].map(function (y) { return '<line class="a" x1="12" y1="' + y + '" x2="108" y2="' + y + '"/>'; }).join("") + '</g>' +
        [20, 45, 70].map(function (y) { return '<circle class="nd" cx="12" cy="' + y + '" r="7"/><circle class="nd" cx="108" cy="' + y + '" r="7"/>'; }).join(""),
      "gl-2": '<rect class="g2-bg" x="4" y="22" width="112" height="16" rx="4"/><rect class="g2-bg" x="4" y="56" width="112" height="16" rx="4"/>' +
        '<rect class="g2-a" x="4" y="22" width="112" height="16" rx="4"/><rect class="g2-b" x="4" y="56" width="112" height="16" rx="4"/>',
      "gl-3": '<path class="a g3" d="M10 76 L58 28 M44 28 H58 V42"/><path class="a g3 g3b" d="M58 82 L106 34 M92 34 H106 V48"/>',
      "gl-4": '<g class="g4-a"><line class="k" x1="10" y1="16" x2="44" y2="45"/><line class="k" x1="10" y1="45" x2="44" y2="45"/><line class="k" x1="10" y1="74" x2="44" y2="45"/>' +
        '<circle class="nd" cx="10" cy="16" r="6"/><circle class="nd" cx="10" cy="45" r="6"/><circle class="nd" cx="10" cy="74" r="6"/><circle class="na" cx="48" cy="45" r="8"/></g>' +
        '<g class="g4-b"><line class="k" x1="76" y1="45" x2="110" y2="16"/><line class="k" x1="76" y1="45" x2="110" y2="45"/><line class="k" x1="76" y1="45" x2="110" y2="74"/>' +
        '<circle class="na" cx="72" cy="45" r="8"/><circle class="nd" cx="110" cy="16" r="6"/><circle class="nd" cx="110" cy="45" r="6"/><circle class="nd" cx="110" cy="74" r="6"/></g>',
      "gl-5": '<path class="k" d="M60 10 L32 42 M60 10 L88 42 M32 42 L18 76 M32 42 L46 76 M88 42 L74 76 M88 42 L102 76"/>' +
        '<path class="a g5" d="M60 10 L88 42 L74 76"/>' +
        '<circle class="nd" cx="60" cy="10" r="6"/><circle class="nd" cx="32" cy="42" r="6"/><circle class="nd g5n" cx="88" cy="42" r="6"/>' +
        '<circle class="nd" cx="18" cy="76" r="6"/><circle class="nd" cx="46" cy="76" r="6"/><circle class="nd g5l" cx="74" cy="76" r="6"/><circle class="nd" cx="102" cy="76" r="6"/>',
      "gl-6": (function () { var s = ""; for (var y = 0; y < 5; y++) for (var x = 0; x < 8; x++) s += '<circle class="g6" style="animation-delay:' + ((x + y) * .12).toFixed(2) + 's" cx="' + (8 + x * 15) + '" cy="' + (12 + y * 17) + '" r="4.5"/>'; return s; })()
    };
    Object.keys(G).forEach(function (k) { var el = $("#gains ." + k); if (el) el.innerHTML = G[k]; });
  })();

  /* ---------------------------------------------------------- 13 · our model */
  (function () {
    var sc = $("#ourmodel"); if (!sc) return;
    var CORPUS = ["The quick brown fox jumps over the lazy dog.", "The dog chased the cat.", "The cat climbed the tree.", "The fox is quick and the dog is lazy."];
    var toks = CORPUS.map(function (s) { return s.toLowerCase().match(/\b\w+\b/g); });
    var vocab = []; toks.forEach(function (t) { t.forEach(function (w) { if (vocab.indexOf(w) < 0) vocab.push(w); }); }); vocab.sort();
    var rowsBox = $(".tok-rows", sc), chips = [];
    toks.forEach(function (t) { var r = E("div", "tok-row", rowsBox); t.forEach(function (w) { chips.push(E("span", "tok" + (w === "the" ? " t-the" : ""), r, w)); }); });
    var vbox = $(".vocab", sc), vchips = vocab.map(function (w) { return E("span", "tok", vbox, w); });
    [].concat(chips, vchips).forEach(function (x) { x.style.opacity = 0; });

    /* co-occurrence matrix (window = 2), filled in reading order */
    var V = vocab.length, id = {}; vocab.forEach(function (w, i) { id[w] = i; });
    var cnt = [], ev = [];
    for (var i = 0; i < V; i++) { cnt.push([]); for (var j = 0; j < V; j++) cnt[i].push(0); }
    toks.forEach(function (s) { s.forEach(function (w, i) { for (var j = Math.max(0, i - 2); j < Math.min(s.length, i + 3); j++) if (j !== i) { cnt[id[w]][id[s[j]]]++; ev.push([id[w], id[s[j]]]); } }); });
    var mx = 0; cnt.forEach(function (r) { r.forEach(function (v) { mx = Math.max(mx, v); }); });
    var svg = $(".cooc", sc), x0 = 116, y0 = 116, cs = 35, cells = [];
    vocab.forEach(function (w, i) {
      S("text", { class: "rl" + (w === "dog" ? " dog" : ""), x: x0 - 10, y: y0 + i * cs + cs / 2, "text-anchor": "end" }, svg).textContent = w;
      S("text", { class: "cl" + (w === "dog" ? " dog" : ""), x: 0, y: 0, transform: "translate(" + (x0 + i * cs + cs / 2 + 6) + " " + (y0 - 10) + ") rotate(-60)" }, svg).textContent = w;
    });
    for (i = 0; i < V; i++) { cells.push([]); for (j = 0; j < V; j++) {
      S("rect", { class: "bgc", x: x0 + j * cs + 1, y: y0 + i * cs + 1, width: cs - 2, height: cs - 2, rx: 4 }, svg);
      cells[i].push(S("rect", { class: "cell", x: x0 + j * cs + 1, y: y0 + i * cs + 1, width: cs - 2, height: cs - 2, rx: 4, opacity: 0 }, svg));
    } }
    var dogRow = S("rect", { x: x0 - 2, y: y0 + id.dog * cs - 1, width: V * cs + 4, height: cs + 2, rx: 6, fill: "none", stroke: "var(--ink)", "stroke-width": 2.5, opacity: 0 }, svg);
    function fill(k) {
      var n = Math.round(ev.length * k), tmp = [];
      for (var a = 0; a < V; a++) { tmp.push([]); for (var b = 0; b < V; b++) tmp[a].push(0); }
      for (var e = 0; e < n; e++) tmp[ev[e][0]][ev[e][1]]++;
      for (a = 0; a < V; a++) for (b = 0; b < V; b++) cells[a][b].setAttribute("opacity", tmp[a][b] ? (.22 + .78 * tmp[a][b] / mx).toFixed(2) : 0);
      dogRow.setAttribute("opacity", clamp((k - .85) / .15, 0, 1));
    }

    /* terminal output (from the group's run; the local path is left out) */
    var OUT = [
      { t: "$ ", c: "pr" }, { t: "python 2.py", type: true }, { t: "\n" },
      { t: "Vector for ", c: "", line: true }, { t: "'dog'", c: "str" }, { t: ": [" }, { t: "-0.40444636", c: "num" }, { t: "  " }, { t: "0.4686055", c: "num" }, { t: " ]\n" },
      { t: "Most similar to ", line: true }, { t: "'dog'", c: "str" }, { t: ":\n" },
      { t: "  ('cat',     ", line: true }, { t: "0.9995004", c: "num" }, { t: ")\n" },
      { t: "  ('tree',    ", line: true }, { t: "0.99785846", c: "num" }, { t: ")\n" },
      { t: "  ('climbed', ", line: true }, { t: "0.9960831", c: "num" }, { t: ")\n\n" },
      { t: "Process finished with exit code 0", c: "dim", line: true }
    ];
    var pre = $(".term-out", sc);
    function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
    function render(nChars) {
      var html = "", left = nChars;
      for (var i = 0; i < OUT.length && left > 0; i++) {
        var seg = OUT[i], take = Math.min(seg.t.length, left); left -= take;
        var txt = esc(seg.t.slice(0, take));
        html += seg.c ? '<span class="' + seg.c + '">' + txt + "</span>" : txt;
      }
      pre.innerHTML = html + '<span class="cur"></span>';
    }
    var total = OUT.reduce(function (a, s) { return a + s.t.length; }, 0);
    /* schedule: typed command, then each printed line appears at once */
    function schedule() {
      var steps = [], n = 0, t = .5;
      OUT.forEach(function (seg) {
        if (seg.type) { for (var k = 1; k <= seg.t.length; k++) steps.push([t += .055, n + k]); n += seg.t.length; t += .35; }
        else { if (seg.line) t += .16; n += seg.t.length; steps.push([t, n]); }
      });
      return steps;
    }
    var SCH = schedule();

    /* the rays: cosine similarity is the angle between vectors */
    var rays = $(".om-rays", sc), O = [318, 236], RL = 236;
    S("line", { class: "ax", x1: 30, y1: O[1], x2: 372, y2: O[1] }, rays);
    S("circle", { cx: O[0], cy: O[1], r: 5, fill: "var(--ink)" }, rays);
    var base = Math.atan2(0.4686055, -0.40444636);
    var RAYS = [["dog", 1, "var(--ink)"], ["cat", 0.9995004, "var(--acc)"], ["tree", 0.99785846, "var(--acc)"], ["climbed", 0.9960831, "var(--acc)"]].map(function (d, i) {
      var a = base - Math.acos(Math.min(1, d[1])) * (i ? 1 : 0);
      var el = S("line", { class: "ray", x1: O[0], y1: O[1], x2: O[0], y2: O[1], stroke: d[2], opacity: i ? (1 - i * .18) : 1 }, rays);
      return { el: el, a: a };
    });
    var dl = S("text", { class: "lb", x: 0, y: 0, "text-anchor": "end", fill: "var(--ink)" }, rays); dl.textContent = "dog";
    var ol = S("text", { class: "lb", x: 0, y: 0, "text-anchor": "start", fill: "var(--acc)" }, rays); ol.textContent = "cat, tree, climbed";
    var cap = S("text", { class: "lb", x: 30, y: 280, fill: "var(--ink3)", style: "font-size:19px;letter-spacing:.03em" }, rays); cap.textContent = "almost the same direction → cosine ≈ 1";
    function drawRays(k) {
      RAYS.forEach(function (r) { r.el.setAttribute("x2", (O[0] + Math.cos(r.a) * RL * k).toFixed(1)); r.el.setAttribute("y2", (O[1] - Math.sin(r.a) * RL * k).toFixed(1)); });
      var tx = O[0] + Math.cos(base) * RL, ty = O[1] - Math.sin(base) * RL;
      dl.setAttribute("x", (tx - 10).toFixed(1)); dl.setAttribute("y", (ty + 8).toFixed(1));
      ol.setAttribute("x", (tx + 4).toFixed(1)); ol.setAttribute("y", (ty - 18).toFixed(1));
      [dl, ol, cap].forEach(function (t) { t.setAttribute("opacity", clamp((k - .7) / .3, 0, 1)); });
    }
    drawRays(0);
    var trs = $$(".simtab tbody tr", sc);
    function scramble(c, td, delay) {
      var target = td.getAttribute("data-v");
      if (c.instant || RM) { td.textContent = target; return; }
      var t0 = null;
      tween(c, .9, function (k) {
        var settled = Math.floor(target.length * k), s = target.slice(0, settled);
        for (var i = settled; i < target.length; i++) s += target[i] === "." ? "." : String(Math.floor(Math.random() * 10));
        td.textContent = s;
      }, { delay: delay, ease: EZ.lin, pre: true });
    }
    function results(c, base) {
      tween(c, 1.1, drawRays, { delay: base, ease: EZ.out, pre: true });
      trs.forEach(function (tr, i) {
        later(c, base + .3 + i * .28, function () { tr.classList.add("on"); scramble(c, $("td.mono", tr), 0); });
      });
    }
    function clear() {
      chips.concat(vchips).forEach(function (x) { x.style.opacity = 0; x.getAnimations && x.getAnimations().forEach(function (a) { a.cancel(); }); });
      fill(0); pre.innerHTML = '<span class="cur"></span>'; drawRays(0);
      trs.forEach(function (tr) { tr.classList.remove("on"); var td = $("td.mono", tr); td.textContent = td.getAttribute("data-v"); });
    }
    clear();
    Deck.scene("ourmodel", {
      enter: function (c) {
        chips.forEach(function (x, i) { pop(x, c, .55 + i * .022, { opacity: 0, translate: "0 10px", scale: ".8" }); });
        vchips.forEach(function (x, i) { pop(x, c, 1.75 + i * .04, { opacity: 0, scale: ".6" }); });
      },
      step: function (n, c) {
        if (n === 1) tween(c, 2.6, fill, { delay: .45, ease: EZ.lin, pre: true });
        if (n === 2) {
          fill(1);
          if (c.instant || RM) { render(total); results(c, 0); return; }
          render(0);
          SCH.forEach(function (s) { c.after(s[0] * 1000, function () { render(s[1]); }); });
          results(c, SCH[SCH.length - 1][0] + .3);
        }
      },
      reset: clear
    });
  })();

  /* ---------------------------------------------------------- 14 · Table 1, one question type at a time */
  (function () {
    var sc = $("#test"); if (!sc) return;
    var TYPES = [
      ["sem", "Common capital city", "Athens", "Greece", "Oslo", "Norway"],
      ["sem", "All capital cities", "Astana", "Kazakhstan", "Harare", "Zimbabwe"],
      ["sem", "Currency", "Angola", "kwanza", "Iran", "rial"],
      ["sem", "City-in-state", "Chicago", "Illinois", "Stockton", "California"],
      ["sem", "Man-Woman", "brother", "sister", "grandson", "granddaughter"],
      ["syn", "Adjective to adverb", "apparent", "apparently", "rapid", "rapidly"],
      ["syn", "Opposite", "possibly", "impossibly", "ethical", "unethical"],
      ["syn", "Comparative", "great", "greater", "tough", "tougher"],
      ["syn", "Superlative", "easy", "easiest", "lucky", "luckiest"],
      ["syn", "Present participle", "think", "thinking", "read", "reading"],
      ["syn", "Nationality adjective", "Switzerland", "Swiss", "Cambodia", "Cambodian"],
      ["syn", "Past tense", "walking", "walked", "swimming", "swam"],
      ["syn", "Plural nouns", "mouse", "mice", "dollar", "dollars"],
      ["syn", "Plural verbs", "work", "works", "speak", "speaks"]
    ];
    var kind = $(".ts-kind", sc), name = $(".ts-name", sc), svg = $(".ts-svg", sc), dots = $(".ts-dots", sc);
    var di = TYPES.map(function (t) { return E("i", t[0] === "syn" ? "syn" : "", dots); });
    var ctr = E("span", "", dots, "");
    var A = [130, 320], B = [330, 130], C = [450, 320], Dd = [650, 130];
    var arr1 = { ln: S("line", { class: "ar" }, svg), hd: S("polygon", { class: "hd" }, svg) };
    var arr2 = { ln: S("line", { class: "ar q" }, svg), hd: S("polygon", { class: "hd q" }, svg) };
    function pt(p, q) { return S("circle", { class: "pd" + (q ? " q" : ""), cx: p[0], cy: p[1], r: 11 }, svg); }
    var pA = pt(A), pB = pt(B), pC = pt(C), pD = pt(Dd, true);
    function lab(p, dy, q) { return S("text", { class: "wt" + (q ? " q" : ""), x: p[0], y: p[1] + dy }, svg); }
    var tA = lab(A, 56), tB = lab(B, -30), tC = lab(C, 56), tD = lab(Dd, -30, true);
    var qm = S("text", { class: "qm", x: Dd[0], y: Dd[1] - 30 }, svg); qm.textContent = "?";
    var sent = S("text", { class: "eqt", x: 390, y: 446 }, svg);
    function arrow(a, p, q, k) {
      var dx = q[0] - p[0], dy = q[1] - p[1], L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L;
      var sx = p[0] + ux * 20, sy = p[1] + uy * 20, ex = sx + (L - 42) * ux * k, ey = sy + (L - 42) * uy * k;
      a.ln.setAttribute("x1", sx); a.ln.setAttribute("y1", sy); a.ln.setAttribute("x2", (ex - ux * 12 * k).toFixed(1)); a.ln.setAttribute("y2", (ey - uy * 12 * k).toFixed(1));
      a.hd.setAttribute("points", arrowHead(sx, sy, ex, ey, 22)); a.hd.setAttribute("opacity", k > .05 ? 1 : 0); a.ln.setAttribute("opacity", k > .02 ? 1 : 0);
    }
    function setCard(i) {
      var T = TYPES[i];
      kind.textContent = T[0] === "sem" ? "semantic" : "syntactic"; kind.className = "ts-kind" + (T[0] === "syn" ? " syn" : "");
      name.textContent = T[1]; tA.textContent = T[2]; tB.textContent = T[3]; tC.textContent = T[4]; tD.textContent = T[5];
      sent.innerHTML = T[2] + " is to " + T[3] + " as " + T[4] + " is to <tspan class=\"ans\">" + T[5] + "</tspan>";
      di.forEach(function (d, j) { d.classList.toggle("on", j === i); });
      ctr.textContent = (i + 1) + " / 14";
    }
    function frame(k) { /* k: 0..1 over one card */
      arrow(arr1, A, B, clamp(k / .22, 0, 1));
      var k2 = clamp((k - .3) / .22, 0, 1); arrow(arr2, C, Dd, k2);
      var sol = clamp((k - .55) / .08, 0, 1);
      tD.setAttribute("opacity", sol); qm.setAttribute("opacity", k2 > .1 ? 1 - sol : 0);
      sent.setAttribute("opacity", clamp((k - .62) / .1, 0, 1));
      pD.setAttribute("opacity", k2 > .9 ? .35 + .65 * sol : 0);
      [pC, tC].forEach(function (e) { e.setAttribute("opacity", clamp((k - .24) / .06, 0, 1)); });
    }
    var cur = 0; setCard(0); frame(1);
    Deck.scene("test", {
      enter: function (c) {
        cur = 0; setCard(0);
        if (c.static || RM) { frame(1); return; }
        var t0 = c.instant ? -3.4 * .7 : 0, last = 0;
        c.loop(function (t) {
          var tt = t - t0 - .4; if (tt < 0) { frame(0); return; }
          var idx = Math.floor(tt / 3.4), k = (tt % 3.4) / 3.4;
          if (idx !== last) { last = idx; cur = idx % 14; setCard(cur); }
          frame(Math.min(1, k * 1.45));
        });
      },
      reset: function () { setCard(0); frame(1); }
    });
  })();

  /* ---------------------------------------------------------- 15 · Table 2 heat map + learning-rate line */
  (function () {
    var sc = $("#accuracy"); if (!sc) return;
    var COLS = ["24M", "49M", "98M", "196M", "391M", "783M"], ROWS = [50, 100, 300, 600];
    var DATA = [[13.4, 15.7, 18.6, 19.1, 22.5, 23.2], [19.4, 23.1, 27.8, 28.7, 33.4, 32.2], [23.2, 29.2, 35.3, 38.6, 43.7, 45.9], [24.0, 30.1, 36.5, 40.8, 46.6, 50.4]];
    var hm = $(".hm", sc);
    hm.style.gridTemplateRows = "64px repeat(4, 118px)";
    COLS.forEach(function (cl, j) { var d = E("div", "hc", hm, cl); d.style.gridColumn = j + 2; d.style.gridRow = 1; });
    var cells = [];
    ROWS.forEach(function (rw, i) {
      var h = E("div", "hr", hm, String(rw)); h.style.gridColumn = 1; h.style.gridRow = i + 2;
      DATA[i].forEach(function (v, j) {
        var a = .07 + .93 * (v - 12) / (51 - 12);
        var d = E("div", "cell" + (a > .48 ? " lt" : ""), hm, v.toFixed(1));
        d.style.gridColumn = j + 2; d.style.gridRow = i + 2; d.style.background = "rgba(43,60,255," + a.toFixed(3) + ")";
        cells.push({ el: d, v: v, i: i, j: j });
      });
    });
    function box(cls, c0, r0, c1, r1, note, nx, ny) {
      var b = E("div", "hm-box " + cls, hm); b.style.gridColumn = c0 + " / " + (c1 + 1); b.style.gridRow = r0 + " / " + (r1 + 1);
      b.style.position = "relative"; b.style.margin = "-6px";
      if (note) { var n = E("div", "hm-note", hm, note); n.style.left = nx + "px"; n.style.top = ny + "px"; if (cls === "ac") n.style.color = "var(--ink)"; }
      return b;
    }
    box("", 6, 2, 7, 2);
    box("", 2, 4, 2, 5);
    box("ac", 7, 5, 7, 5);
    var lg = E("div", "hm-note", hm, '<span style="display:inline-block;width:26px;height:16px;border:3px solid var(--red);border-radius:5px;vertical-align:-2px;margin-right:10px"></span>only one grows: diminishing gains&nbsp;&nbsp;&nbsp;&nbsp;<span style="display:inline-block;width:26px;height:16px;border:3px solid var(--ink);border-radius:5px;vertical-align:-2px;margin-right:10px"></span><b style="color:var(--ink);font-weight:500">both grow: best result</b>');
    lg.style.left = "176px"; lg.style.top = "584px";

    var lr = $(".lr", sc), ox = 70, oy = 196, W = 480;
    S("line", { class: "ax", x1: ox, y1: oy, x2: ox + W + 16, y2: oy }, lr);
    S("line", { class: "ax", x1: ox, y1: oy, x2: ox, y2: 18 }, lr);
    for (var e = 1; e <= 3; e++) {
      S("line", { class: "ep", x1: ox + e * W / 3, y1: 18, x2: ox + e * W / 3, y2: oy }, lr);
      S("text", { class: "t", x: ox + e * W / 3, y: oy + 30, "text-anchor": "middle" }, lr).textContent = String(e);
    }
    S("text", { class: "t", x: ox + W + 16, y: oy + 58, "text-anchor": "end" }, lr).textContent = "epochs →";
    S("text", { class: "tb", x: ox - 12, y: 48, "text-anchor": "end", style: "font-size:24px" }, lr).textContent = "0.025";
    S("text", { class: "t", x: ox - 12, y: oy + 6, "text-anchor": "end" }, lr).textContent = "0";
    S("text", { class: "t", x: ox + 22, y: 18 }, lr).textContent = "learning rate";
    var line = S("line", { class: "ln", x1: ox, y1: 40, x2: ox, y2: 40 }, lr);
    var endT = S("text", { class: "t", x: ox + W + 4, y: oy - 18, "text-anchor": "start", fill: "var(--acc)" }, lr); endT.textContent = "≈ 0";
    function drawLR(k) { line.setAttribute("x2", (ox + W * k).toFixed(1)); line.setAttribute("y2", (40 + (oy - 2 - 40) * k).toFixed(1)); endT.setAttribute("opacity", clamp((k - .85) / .15, 0, 1)); }
    drawLR(0);
    Deck.scene("accuracy", {
      enter: function (c) {
        cells.forEach(function (cl) {
          var dl = .35 + (cl.i + cl.j) * .07;
          pop(cl.el, c, dl, { opacity: 0, scale: ".86" });
          tween(c, 1.2, function (k) { cl.el.textContent = (cl.v * k).toFixed(1); }, { delay: dl, ease: EZ.expo, pre: true });
        });
      },
      step: function (n, c) { if (n === 2) tween(c, 1.6, drawLR, { delay: .45, ease: EZ.io, pre: true }); },
      reset: function () { drawLR(0); cells.forEach(function (cl) { cl.el.textContent = cl.v.toFixed(1); }); }
    });
  })();

  /* ---------------------------------------------------------- 16 · Table 4 as bars */
  (function () {
    var sc = $("#compare"); if (!sc) return;
    var R = [
      ["Collobert-Weston NNLM", 50, "660M", 9.3, 12.3, 11.0],
      ["Turian NNLM", 50, "37M", 1.4, 2.6, 2.1],
      ["Turian NNLM", 200, "37M", 1.4, 2.2, 1.8],
      ["Mnih NNLM", 50, "37M", 1.8, 9.1, 5.8],
      ["Mnih NNLM", 100, "37M", 3.3, 13.2, 8.8],
      ["Mikolov RNNLM", 80, "320M", 4.9, 18.4, 12.7],
      ["Mikolov RNNLM", 640, "320M", 8.6, 36.5, 24.6],
      ["Huang NNLM", 50, "990M", 13.3, 11.6, 12.3],
      ["NNLM (this paper)", 20, "6B", 12.9, 26.4, 20.3, "me"],
      ["NNLM (this paper)", 50, "6B", 27.9, 55.8, 43.2, "me"],
      ["NNLM (this paper)", 100, "6B", 34.2, 64.5, 50.8, "me", "syn"],
      ["CBOW", 300, "783M", 15.5, 53.1, 36.1, "me"],
      ["Skip-gram", 300, "783M", 50.0, 55.9, 53.3, "sg", "sem"]
    ];
    var box = $(".cmp", sc);
    E("div", "cr hd", box, "<span>Model</span><span>Dim.</span><span>Words</span><span>Semantic</span><span>Syntactic</span><span>Total accuracy</span>");
    var bars = [];
    R.forEach(function (r, i) {
      var row = E("div", "cr" + (r[6] ? " " + r[6] : "") + (i === 8 ? " sep" : ""), box);
      row.innerHTML = "<span>" + r[0] + "</span><span>" + r[1] + "</span><span>" + r[2] + "</span><span" + (r[7] === "sem" ? ' class="best"' : "") + ">" + r[3].toFixed(1) + "</span><span" + (r[7] === "syn" ? ' class="best"' : "") + ">" + r[4].toFixed(1) + "</span>" +
        '<span class="bw"><span class="bar" style="width:' + (r[5] * 12).toFixed(0) + 'px"></span><b class="tv">' + r[5].toFixed(1) + "</b></span>";
      bars.push({ row: row, bar: $(".bar", row), tv: $(".tv", row), v: r[5] });
    });
    Deck.scene("compare", {
      enter: function (c) {
        bars.forEach(function (b, i) {
          var dl = .3 + i * .07;
          pop(b.row, c, dl, { opacity: 0, translate: "-24px 0" });
          if (!(c.instant || RM) && b.bar.animate) b.bar.animate([{ scale: "0 1" }, { scale: "1 1" }], { duration: 1100, delay: (dl + .15) * 1000, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards" });
          tween(c, 1.1, function (k) { b.tv.textContent = (b.v * k).toFixed(1); }, { delay: dl + .15, ease: EZ.expo, pre: true });
        });
      },
      reset: function () { bars.forEach(function (b) { b.row.style.opacity = ""; b.tv.textContent = b.v.toFixed(1); }); }
    });
    bars.forEach(function (b) { b.row.style.opacity = 0; });
  })();

  /* ---------------------------------------------------------- 17 · sentence completion */
  (function () {
    var sc = $("#msr"); if (!sc) return;
    var CH = $$(".ms-ch li", sc), blank = $(".blank-w", sc);
    var R = [["4-gram", 39, "", 0], ["Average LSA similarity", 49, "", 0], ["Log-bilinear model", 54.8, "", 1], ["RNNLMs", 55.4, "", 1], ["Skip-gram", 48.0, "sg sep", 1], ["Skip-gram + RNNLMs", 58.9, "best", 1]];
    var bx = $(".ms-bars", sc), bars = [];
    R.forEach(function (r) {
      var m = E("div", "mb" + (r[2] ? " " + r[2] : ""), bx, '<span class="ml">' + r[0] + '</span><span class="mw"><span class="bar" style="width:' + (r[1] * 6.2).toFixed(0) + 'px"></span><b class="mv">' + r[1].toFixed(r[3]) + "</b></span>");
      bars.push({ m: m, bar: $(".bar", m), mv: $(".mv", m), v: r[1], d: r[3] });
    });
    function setBlank(i) {
      CH.forEach(function (li, j) { li.classList.toggle("on", j === i); });
      blank.textContent = i < 0 ? " " : CH[i].textContent;
    }
    setBlank(-1);
    Deck.scene("msr", {
      enter: function (c) {
        setBlank(-1);
        if (c.static || RM) return;
        var i = -1;
        c.after(900, function () { i = 0; setBlank(0); });
        c.every(1500, function () {
          if (i < 0) return;
          i = (i + 1) % CH.length; setBlank(i);
          if (blank.animate) blank.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: 420, easing: "cubic-bezier(.16,1,.3,1)" });
        });
      },
      step: function (n, c) {
        if (n !== 2) return;
        bars.forEach(function (b, i) {
          var dl = .25 + i * .14;
          pop(b.m, c, dl, { opacity: 0, translate: "-20px 0" });
          if (!(c.instant || RM) && b.bar.animate) b.bar.animate([{ scale: "0 1" }, { scale: "1 1" }], { duration: 1000, delay: (dl + .1) * 1000, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards" });
          tween(c, 1, function (k) { b.mv.textContent = (b.v * k).toFixed(b.d); }, { delay: dl + .1, ease: EZ.expo, pre: true });
        });
      },
      reset: function () { setBlank(-1); bars.forEach(function (b) { b.m.style.opacity = 0; b.mv.textContent = b.v.toFixed(b.d); }); }
    });
    bars.forEach(function (b) { b.m.style.opacity = 0; });
  })();
})();
