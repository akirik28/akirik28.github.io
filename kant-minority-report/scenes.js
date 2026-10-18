/* ============================================================
   Immanuel Kant & Minority Report — sahneye özel hareketler
   Motor: /assets/deck/deck.js (değiştirilmedi)
   ============================================================ */
(function () {
  "use strict";
  if (!window.Deck) return;
  var NS = "http://www.w3.org/2000/svg";
  var doc = document;

  /* ---------- yardımcılar ---------- */
  function $$(s, el) { return [].slice.call((el || doc).querySelectorAll(s)); }
  function mk(tag, attrs, parent) {
    var e = doc.createElementNS(NS, tag);
    if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function rng(seed) {
    return function () {
      seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  var E = {
    lin: function (t) { return t; },
    inOut: function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; },
    out: function (t) { return 1 - Math.pow(1 - t, 3); },
    out5: function (t) { return 1 - Math.pow(1 - t, 5); },
    in2: function (t) { return t * t; },
    bounce: function (t) {
      var n = 7.5625, d = 2.75;
      if (t < 1 / d) return n * t * t;
      if (t < 2 / d) return n * (t -= 1.5 / d) * t + .75;
      if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + .9375;
      return n * (t -= 2.625 / d) * t + .984375;
    }
  };
  function still(c) { return c.instant || Deck.reduced; }
  function raf2(f) { requestAnimationFrame(function () { requestAnimationFrame(f); }); }
  function cancel(el) { if (el && el.getAnimations) el.getAnimations().forEach(function (a) { try { a.cancel(); } catch (e) {} }); }

  // rAF tween; anlık modda doğrudan son hâl
  function tween(c, ms, fn, o) {
    o = o || {};
    var ease = o.ease || E.inOut, delay = o.delay || 0;
    if (still(c)) { fn(1, 1); if (o.done) o.done(); return; }
    var t0 = null;
    function f(now) {
      if (!c.alive) return;
      if (t0 === null) t0 = now + delay;
      var t = (now - t0) / ms;
      if (t < 0) { requestAnimationFrame(f); return; }
      if (t > 1) t = 1;
      fn(ease(t), t);
      if (t < 1) requestAnimationFrame(f); else if (o.done) o.done();
    }
    requestAnimationFrame(f);
  }

  // SVG çizgisini çiz (WAAPI); anlık modda tam
  function draw(c, el, dur, delay, ease) {
    var L = 0; try { L = el.getTotalLength(); } catch (e) {}
    if (!L) return;
    el.style.strokeDasharray = L + " " + L;
    if (still(c)) { el.style.strokeDashoffset = 0; return; }
    el.style.strokeDashoffset = L;
    el.animate([{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: dur * 1000, delay: (delay || 0) * 1000, easing: ease || "cubic-bezier(.65,0,.35,1)", fill: "both" });
  }
  function fadeIn(c, el, dur, delay, from) {
    if (still(c)) { el.style.opacity = 1; return; }
    el.animate([Object.assign({ opacity: 0 }, from || {}), { opacity: 1, translate: "0 0", scale: "1" }], { duration: dur * 1000, delay: (delay || 0) * 1000, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" });
  }

  /* ---------- sahne kaydı: adım sınıfları (.at0 .at1 …) + CSS geçişleri ---------- */
  function scene(id, o) {
    o = o || {};
    Deck.scene(id, {
      enter: function (c) {
        var el = c.el;
        el.classList.add("no-tr"); void el.offsetWidth;
        $$(".ink", el).forEach(splitInk);
        if (o.enter) o.enter(c);
        if (still(c)) { el.classList.add("at0"); void el.offsetWidth; raf2(function () { el.classList.remove("no-tr"); }); }
        else { el.classList.remove("no-tr"); void el.offsetWidth; el.classList.add("at0"); }
      },
      step: function (n, c) {
        var el = c.el;
        if (still(c)) { el.classList.add("no-tr"); el.classList.add("at" + n); void el.offsetWidth; raf2(function () { el.classList.remove("no-tr"); }); }
        else el.classList.add("at" + n);
        if (o.step) o.step(n, c);
      },
      leave: function (c) { if (o.leave) o.leave(c); },
      reset: function (r) {
        var el = r.el;
        el.classList.add("no-tr");
        for (var i = 0; i < 10; i++) el.classList.remove("at" + i);
        $$(".ch", el).forEach(function (x) { cancel(x); x.removeAttribute("style"); });
        $$(".scr", el).forEach(function (x) { cancel(x); x.removeAttribute("style"); if (x.__text) x.textContent = x.__text; });
        if (o.reset) o.reset(r);
        raf2(function () { el.classList.remove("no-tr"); });
      }
    });
  }

  /* ---------- mürekkep: harf harf yazılır ---------- */
  function splitInk(el) {
    if (el.__ink) return el.__ink;
    var out = [];
    (function walk(node) {
      [].slice.call(node.childNodes).forEach(function (ch) {
        if (ch.nodeType === 3) {
          var parts = ch.textContent.split(/(\s+)/), frag = doc.createDocumentFragment();
          parts.forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(doc.createTextNode(p)); return; }
            var wd = doc.createElement("span"); wd.className = "wd";
            Array.from(p).forEach(function (chr) {
              var s = doc.createElement("span"); s.className = "ch"; s.textContent = chr; wd.appendChild(s); out.push(s);
            });
            frag.appendChild(wd);
          });
          node.replaceChild(frag, ch);
        } else if (ch.nodeType === 1 && ch.tagName !== "BR") walk(ch);
      });
    })(el);
    el.__ink = out;
    return out;
  }
  function ink(c, el, o) {
    if (!el) return;
    o = o || {};
    var chs = splitInk(el), d = o.delay || 0, sp = o.speed || .035;
    if (still(c)) { chs.forEach(function (s) { s.style.opacity = 1; }); return; }
    chs.forEach(function (s, i) {
      s.animate([
        { opacity: 0, filter: "blur(7px)", transform: "translateY(3px) scale(1.12)" },
        { opacity: .85, filter: "blur(1.5px)", transform: "translateY(0) scale(1.02)", offset: .45 },
        { opacity: 1, filter: "blur(0px)", transform: "none" }
      ], { duration: 640, delay: (d + i * sp) * 1000, easing: "cubic-bezier(.2,.7,.2,1)", fill: "both" });
    });
  }

  /* ---------- HUD karışık harf efekti ---------- */
  var SET = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ0123456789#/<>";
  function scramble(c, el, o) {
    if (!el) return;
    o = o || {};
    if (el.__text == null) el.__text = el.textContent;
    var fin = el.__text;
    if (still(c)) { el.textContent = fin; el.style.opacity = 1; return; }
    var first = true;
    tween(c, (o.dur || 1) * 1000, function (e, t) {
      if (first) { el.style.opacity = 1; first = false; }
      var n = Math.floor(t * fin.length), s = "";
      for (var i = 0; i < fin.length; i++) s += (fin[i] === " " || fin[i] === "," || i < n) ? fin[i] : SET[(Math.random() * SET.length) | 0];
      el.textContent = t >= 1 ? fin : s;
    }, { ease: E.lin, delay: (o.delay || 0) * 1000 });
  }

  /* ---------- yırtık kâğıt kenarları ---------- */
  function torn() {
    $$("[data-torn]").forEach(function (el, k) {
      var side = el.getAttribute("data-torn"), edge = +el.getAttribute("data-edge"), R = rng(41 + k * 7), pts = [];
      var ph = R() * 6;
      function j(v) { return edge + 7 * Math.sin(v * .011 + ph) + 3.5 * Math.sin(v * .043 + ph * 2) + (R() - .5) * 9; }
      if (side === "right") {
        pts.push("0px 0px");
        for (var y = 0; y <= 1080; y += 11) pts.push(j(y).toFixed(1) + "px " + y + "px");
        pts.push("0px 1080px");
      } else {
        pts.push("0px 0px", "1920px 0px");
        for (var x = 1920; x >= 0; x -= 11) pts.push(x + "px " + j(x).toFixed(1) + "px");
      }
      el.style.clipPath = "polygon(" + pts.join(",") + ")";
    });
  }
  torn();

  /* ---------- yağmur ---------- */
  function Rain(cv, o) {
    o = o || {};
    var g = cv.getContext("2d"), W = cv.width, H = cv.height, R = rng(o.seed || 3), n = o.n || 240, drops = [];
    var ang = o.ang || .17, x0 = o.x0 || 0;
    for (var i = 0; i < n; i++) drops.push({ x: x0 + R() * (W - x0) * 1.15, y: R() * H, l: 24 + R() * 70, v: 1100 + R() * 1000, a: .05 + R() * .2, w: R() < .12 ? 1.8 : 1 });
    this.draw = function (dt) {
      g.clearRect(0, 0, W, H); g.lineCap = "round";
      for (var i = 0; i < n; i++) {
        var d = drops[i];
        d.y += d.v * dt; d.x -= d.v * dt * ang;
        if (d.y - d.l > H || d.x < x0 - 60) { d.y = -R() * 160; d.x = x0 + R() * (W - x0) * 1.15; }
        g.strokeStyle = "rgba(170,236,246," + d.a + ")"; g.lineWidth = d.w;
        g.beginPath(); g.moveTo(d.x, d.y); g.lineTo(d.x + d.l * ang, d.y - d.l); g.stroke();
      }
    };
  }
  function rain(c, o) {
    var cv = c.$("canvas.rain"); if (!cv) return;
    var r = new Rain(cv, o); r.draw(0);
    if (Deck.reduced) return;
    c.loop(function (t, dt) { r.draw(dt); });
  }

  /* ---------- precog havuzu (su dalgası) ---------- */
  function Pool(cv) {
    var W = cv.width, H = cv.height, g = cv.getContext("2d");
    var A = new Float32Array(W * H), B = new Float32Array(W * H), img = g.createImageData(W, H), px = img.data;
    var MW = W * 2, milk = new Float32Array(MW * H), R = rng(9);
    var p = [R() * 6, R() * 6, R() * 6, R() * 6];
    for (var y = 0; y < H; y++) for (var x = 0; x < MW; x++) {
      var a = 2 * Math.PI * x / MW;
      var v = .5 + .22 * Math.sin(a * 2 + p[0]) * Math.sin(y * .05 + p[1]) + .18 * Math.sin(a * 5 + y * .035 + p[2]) + .1 * Math.sin(a * 9 - y * .08 + p[3]);
      milk[y * MW + x] = clamp(v, 0, 1);
    }
    this.clear = function () { A.fill(0); B.fill(0); };
    this.drop = function (x, y, r, s) {
      x |= 0; y |= 0;
      for (var dy = -r; dy <= r; dy++) for (var dx = -r; dx <= r; dx++) {
        var d2 = dx * dx + dy * dy; if (d2 > r * r) continue;
        var xx = x + dx, yy = y + dy; if (xx < 1 || yy < 1 || xx >= W - 1 || yy >= H - 1) continue;
        A[yy * W + xx] += s * (Math.cos(Math.sqrt(d2) / r * Math.PI) + 1) / 2;
      }
    };
    this.step = function () {
      for (var y = 1; y < H - 1; y++) for (var x = 1, i = y * W + 1; x < W - 1; x++, i++) {
        var v = (A[i - 1] + A[i + 1] + A[i - W] + A[i + W]) * .5 - B[i];
        B[i] = v - v * .018;
      }
      var t = A; A = B; B = t;
    };
    this.render = function (time) {
      var off = ((time * 4) | 0) % MW;
      for (var y = 0; y < H; y++) {
        var vy = y / H, glow = 1 - Math.abs(vy - .5) * 1.3;
        for (var x = 0; x < W; x++) {
          var i = y * W + x, o = i * 4;
          var dx = (x > 0 && x < W - 1) ? A[i - 1] - A[i + 1] : 0;
          var dy = (y > 0 && y < H - 1) ? A[i - W] - A[i + W] : 0;
          var l = (dx * .55 + dy * .8) * .016;
          var m = milk[y * MW + ((x + off) % MW)];
          var hl = l > 0 ? Math.min(.8, l) : 0, sh = l < 0 ? Math.max(-1, l) : 0;
          var r = 3 + 12 * m * glow, gg = 16 + 40 * m * glow, b = 22 + 48 * m * glow;
          var k = 1 + sh * 1.3;
          px[o] = r * k + 190 * hl * hl + 60 * hl;
          px[o + 1] = gg * k + 235 * hl * hl + 110 * hl;
          px[o + 2] = b * k + 245 * hl * hl + 120 * hl;
          px[o + 3] = 255;
        }
      }
      g.putImageData(img, 0, 0);
    };
    this.W = W; this.H = H;
  }
  function pool(c) {
    var cv = c.$("canvas.pool"); if (!cv) return;
    var P = cv.__pool || (cv.__pool = new Pool(cv));
    var R = rng(((Math.random() * 1e6) | 0));
    P.clear();
    var S = rng(c.i * 31 + 7);   // her soru ekranında halkalar farklı yerde
    P.drop(P.W * (.35 + S() * .3), P.H * (.4 + S() * .2), 9, 460);
    P.drop(P.W * (.08 + S() * .25), P.H * (.15 + S() * .3), 5, 300);
    P.drop(P.W * (.7 + S() * .22), P.H * (.6 + S() * .3), 6, 320);
    for (var i = 0; i < 70; i++) P.step();
    P.drop(P.W * (.55 + S() * .3), P.H * (.15 + S() * .25), 4, 220);
    for (var j = 0; j < 22; j++) P.step();
    P.render(0);
    if (Deck.reduced || c.static) return;   // önizleme karesi: halkalar donuk kalır
    var acc = 0, nextDrop = .6, lastMove = 0;
    c.loop(function (t, dt) {
      acc += dt;
      var n = 0;
      while (acc > 1 / 60 && n < 3) { P.step(); acc -= 1 / 60; n++; }
      if (t > nextDrop) {
        P.drop(6 + R() * (P.W - 12), 6 + R() * (P.H - 12), 3 + ((R() * 2) | 0), 120 + R() * 120);
        nextDrop = t + .7 + R() * 1.4;
      }
      P.render(t);
    });
    c.on(c.el, "pointermove", function (e) {
      var now = performance.now(); if (now - lastMove < 40) return; lastMove = now;
      var r = cv.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width * P.W, y = (e.clientY - r.top) / r.height * P.H;
      if (x > 3 && y > 3 && x < P.W - 3 && y < P.H - 3) P.drop(x, y, 3, 55);
    });
  }

  /* ---------- tahta top ---------- */
  var ballN = 0;
  function makeBall(parent, R, label) {
    var id = "bl" + (++ballN);
    var defs = mk("defs", null, parent);
    var gw = mk("radialGradient", { id: id + "w", cx: ".36", cy: ".3", r: ".78" }, defs);
    [["0", "#E6B47A"], [".42", "#B97C43"], [".82", "#7A4A22"], ["1", "#4A2A12"]].forEach(function (s) { mk("stop", { offset: s[0], "stop-color": s[1] }, gw); });
    var gs = mk("radialGradient", { id: id + "s", cx: ".5", cy: ".5", r: ".5" }, defs);
    mk("stop", { offset: ".72", "stop-color": "#140800", "stop-opacity": "0" }, gs);
    mk("stop", { offset: "1", "stop-color": "#140800", "stop-opacity": ".55" }, gs);
    var gh = mk("radialGradient", { id: id + "h", cx: ".33", cy: ".26", r: ".32" }, defs);
    mk("stop", { offset: "0", "stop-color": "#FFF2DE", "stop-opacity": ".6" }, gh);
    mk("stop", { offset: "1", "stop-color": "#FFF2DE", "stop-opacity": "0" }, gh);
    var cp = mk("clipPath", { id: id + "c" }, defs); mk("circle", { r: R }, cp);

    var g = mk("g", { "class": "ball" }, parent);
    var inner = mk("g", null, g);
    mk("circle", { r: R, fill: "url(#" + id + "w)" }, inner);
    var cl = mk("g", { "clip-path": "url(#" + id + "c)" }, inner);
    var spin = mk("g", null, cl);
    var Rr = rng(R | 0);
    for (var i = 0; i < 9; i++) {
      var rx = R * (.18 + i * .12), ry = R * (.1 + i * .085);
      mk("ellipse", { "class": "grain", cx: R * .22 + (Rr() - .5) * 6, cy: R * -.18 + (Rr() - .5) * 6, rx: rx, ry: ry, transform: "rotate(-24)" , style: "stroke-width:" + (R / 70).toFixed(2) }, spin);
    }
    if (label) {
      var fs = Math.round(R * (label.length > 6 ? .27 : .36));
      var t1 = mk("text", { "class": "carve-hi", y: R * .12 + Math.max(1.5, R / 90), "font-size": fs }, spin); t1.textContent = label;
      var t2 = mk("text", { "class": "carve-t", y: R * .12, "font-size": fs }, spin); t2.textContent = label;
    }
    mk("circle", { r: R, fill: "url(#" + id + "s)" }, inner);
    mk("circle", { r: R, fill: "url(#" + id + "h)" }, inner);
    var fog = mk("circle", { r: R + .5, fill: "#03121A", opacity: 0 }, inner);
    return { g: g, inner: inner, spin: spin, fog: fog, R: R };
  }

  /* ============================================================
     01 · KAPAK
     ============================================================ */
  scene("kapak", {
    enter: function (c) {
      rain(c, { n: 260, x0: 900 });
      ink(c, c.$(".k-kant .im"), { delay: .55, speed: .055 });
      ink(c, c.$(".k-kant .kt"), { delay: 1.05, speed: .1 });
      var s = c.$$(".k-mr .scr");
      scramble(c, s[0], { delay: .6, dur: .9 });
      scramble(c, s[1], { delay: .85, dur: .9 });
    }
  });

  scene("amac", {});

  /* ============================================================
     SORU EKRANLARI
     ============================================================ */
  ["soru1", "soru2", "soru3", "soru4"].forEach(function (id) {
    scene(id, { enter: function (c) { pool(c); } });
  });

  /* ============================================================
     04 · KANT
     ============================================================ */
  scene("kant", {
    enter: function (c) {
      ink(c, c.$(".kb-name"), { delay: .2, speed: .045 });
    },
    step: function (n, c) {
      if (n === 1) {
        var die = c.$(".die"), din = c.$(".die-in");
        if (still(c)) { die.style.opacity = 1; din.style.rotate = "16deg"; return; }
        die.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, fill: "both" });
        din.animate([
          { translate: "-120px -150px", rotate: "-200deg" },
          { translate: "-40px 0px", rotate: "-40deg", offset: .45 },
          { translate: "-14px -34px", rotate: "0deg", offset: .62 },
          { translate: "0px 0px", rotate: "12deg", offset: .8 },
          { translate: "0px -6px", rotate: "15deg", offset: .9 },
          { translate: "0px 0px", rotate: "16deg" }
        ], { duration: 1300, easing: "cubic-bezier(.3,.1,.3,1)", fill: "both" });
      }
      if (n === 3) ink(c, c.$(".formula .ink"), { delay: .1, speed: .055 });
    },
    reset: function (r) {
      [r.$(".die"), r.$(".die-in")].forEach(function (e) { cancel(e); e.removeAttribute("style"); });
    }
  });

  /* ============================================================
     05 · EVRENSEL YASA · güven ağı
     ============================================================ */
  function buildNet(svg) {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var R = rng(23), nodes = [], tries = 0;
    while (nodes.length < 34 && tries < 6000) {
      tries++;
      var x = 40 + R() * 780, y = 30 + R() * 560;
      var ex = (x - 430) / 410, ey = (y - 310) / 290;
      if (ex * ex + ey * ey > 1) continue;
      var ok = true;
      for (var i = 0; i < nodes.length; i++) { var dx = nodes[i].x - x, dy = nodes[i].y - y; if (dx * dx + dy * dy < 82 * 82) { ok = false; break; } }
      if (ok) nodes.push({ x: x, y: y });
    }
    var edges = [], seen = {};
    nodes.forEach(function (a, ai) {
      var near = nodes.map(function (b, bi) { return { bi: bi, d: Math.hypot(a.x - b.x, a.y - b.y) }; })
        .filter(function (o) { return o.bi !== ai; }).sort(function (p, q) { return p.d - q.d; }).slice(0, 3);
      near.forEach(function (o) {
        if (o.d > 175) return;
        var key = Math.min(ai, o.bi) + "-" + Math.max(ai, o.bi); if (seen[key]) return; seen[key] = 1;
        edges.push({ a: ai, b: o.bi });
      });
    });
    var ge = mk("g", { "class": "edges" }, svg), gn = mk("g", { "class": "nodes" }, svg);
    edges.forEach(function (e) {
      var A = nodes[e.a], B = nodes[e.b], mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2;
      e.m = { x: mx, y: my };
      e.la = mk("line", { x1: A.x, y1: A.y, x2: mx, y2: my, opacity: .62 }, ge);
      e.lb = mk("line", { x1: B.x, y1: B.y, x2: mx, y2: my, opacity: .62 }, ge);
    });
    nodes.forEach(function (n) {
      n.halo = mk("circle", { "class": "halo", cx: n.x, cy: n.y, r: 22 }, gn);
      n.el = mk("circle", { "class": "n", cx: n.x, cy: n.y, r: 9.5 }, gn);
    });
    // yalancı: merkeze yakın düğüm
    var li = 0, best = 1e9;
    nodes.forEach(function (n, i) { var d = Math.hypot(n.x - 360, n.y - 300); if (d < best) { best = d; li = i; } });
    nodes.forEach(function (n) { n.dist = Math.hypot(n.x - nodes[li].x, n.y - nodes[li].y); });
    return { nodes: nodes, edges: edges, liar: li };
  }
  function breakEdge(c, net, e, delay) {
    var A = net.nodes[e.a], B = net.nodes[e.b], m = e.m;
    tween(c, 700, function (k) {
      var kk = .58 * k;
      e.la.setAttribute("x2", lerp(m.x, A.x, kk)); e.la.setAttribute("y2", lerp(m.y, A.y, kk));
      e.lb.setAttribute("x2", lerp(m.x, B.x, kk)); e.lb.setAttribute("y2", lerp(m.y, B.y, kk));
      e.la.setAttribute("opacity", .62 - .5 * k); e.lb.setAttribute("opacity", .62 - .5 * k);
    }, { ease: E.out, delay: delay || 0 });
  }
  scene("evrensel", {
    enter: function (c) {
      ink(c, c.$(".maxim .ink"), { delay: .3, speed: .026 });
      var svg = c.$(".net"), net = c.el.__net = buildNet(svg);
      // ağ kurulur: düğümler ve çizgiler belirir
      if (!still(c)) {
        net.nodes.forEach(function (n, i) { n.el.animate([{ opacity: 0, r: 2 }, { opacity: 1, r: 9.5 }], { duration: 500, delay: 900 + i * 28, easing: "cubic-bezier(.3,1.5,.5,1)", fill: "both" }); });
        net.edges.forEach(function (e, i) {
          [e.la, e.lb].forEach(function (l) { l.animate([{ opacity: 0 }, { opacity: .62 }], { duration: 600, delay: 1300 + i * 12, fill: "both" }); });
        });
      }
    },
    step: function (n, c) {
      var net = c.el.__net; if (!net) return;
      if (n === 1) {
        var L = net.nodes[net.liar];
        L.el.classList.add("red");
        if (!still(c)) L.halo.animate([{ opacity: .9, r: 12 }, { opacity: 0, r: 46 }], { duration: 1200, iterations: 2, easing: "ease-out" });
        net.edges.forEach(function (e) { if (e.a === net.liar || e.b === net.liar) breakEdge(c, net, e, 250); });
      }
      if (n === 2) {
        net.nodes.forEach(function (nd, i) {
          if (i === net.liar) return;
          var d = nd.dist * 2.4;
          if (still(c)) nd.el.classList.add("red"); else c.after(d, function () { nd.el.classList.add("red"); });
        });
        net.edges.forEach(function (e) {
          if (e.a === net.liar || e.b === net.liar) return;
          breakEdge(c, net, e, Math.min(net.nodes[e.a].dist, net.nodes[e.b].dist) * 2.4 + 120);
        });
        // düğümler birbirinden uzaklaşır
        var cx = 430, cy = 310;
        net.nodes.forEach(function (nd) {
          var dx = nd.x - cx, dy = nd.y - cy, len = Math.hypot(dx, dy) || 1, push = 16;
          var tx = dx / len * push, ty = dy / len * push;
          tween(c, 1400, function (k) {
            nd.el.setAttribute("cx", nd.x + tx * k); nd.el.setAttribute("cy", nd.y + ty * k);
          }, { ease: E.out, delay: nd.dist * 2.4 });
        });
      }
    }
  });

  /* ============================================================
     07 · PRECRIME · tahta top oluktan yuvarlanır
     ============================================================ */
  function buildChute(svg) {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var defs = mk("defs", null, svg);
    var lg = mk("linearGradient", { id: "tubeG", gradientUnits: "userSpaceOnUse", x1: 1000, y1: 0, x2: 520, y2: 900 }, defs);
    mk("stop", { offset: "0", "stop-color": "#7DEBF7", "stop-opacity": ".01" }, lg);
    mk("stop", { offset: "1", "stop-color": "#7DEBF7", "stop-opacity": ".1" }, lg);
    var rg = mk("linearGradient", { id: "railG", gradientUnits: "userSpaceOnUse", x1: 1000, y1: -40, x2: 520, y2: 900 }, defs);
    mk("stop", { offset: "0", "stop-color": "#7DEBF7", "stop-opacity": ".08" }, rg);
    mk("stop", { offset: ".6", "stop-color": "#7DEBF7", "stop-opacity": ".55" }, rg);
    mk("stop", { offset: "1", "stop-color": "#7DEBF7", "stop-opacity": ".95" }, rg);

    var path = mk("path", { d: "M 1000 -70 C 1020 120, 830 196, 650 268 C 430 356, 214 430, 222 560 C 230 670, 370 770, 520 800", fill: "none", stroke: "none" }, svg);
    var L = path.getTotalLength(), N = 150, P = [];
    for (var i = 0; i <= N; i++) { var p = path.getPointAtLength(L * i / N); P.push({ x: p.x, y: p.y, u: i / N }); }
    var Rend = 150;
    function W(u) { return 30 + (2 * Rend + 26 - 30) * Math.pow(u, 2.1); }
    var left = [], right = [];
    P.forEach(function (p, i) {
      var a = P[Math.max(0, i - 1)], b = P[Math.min(N, i + 1)], tx = b.x - a.x, ty = b.y - a.y, l = Math.hypot(tx, ty) || 1;
      p.tx = tx / l; p.ty = ty / l; p.w = W(p.u);
      var nx = -p.ty, ny = p.tx;
      left.push([p.x + nx * p.w / 2, p.y + ny * p.w / 2]); right.push([p.x - nx * p.w / 2, p.y - ny * p.w / 2]);
    });
    function pl(arr) { return arr.map(function (q) { return q[0].toFixed(1) + "," + q[1].toFixed(1); }).join(" "); }
    var iE = Math.round(N * .88);
    left = left.slice(0, iE + 1); right = right.slice(0, iE + 1);
    mk("polygon", { "class": "glassfill", points: pl(left.concat(right.slice().reverse())) }, svg);
    var ribs = mk("g", null, svg);
    mk("line", { "class": "rail", x1: left[iE][0], y1: left[iE][1], x2: right[iE][0], y2: right[iE][1], stroke: "#7DEBF7", opacity: .9 }, svg);
    for (var k = 4; k < iE; k += 6) {
      var u = k / N;
      mk("line", { "class": "rib", x1: left[k][0], y1: left[k][1], x2: right[k][0], y2: right[k][1], opacity: (.05 + .28 * Math.pow(u, 1.4)).toFixed(3) }, ribs);
    }
    mk("polyline", { "class": "rail", points: pl(left), stroke: "url(#railG)" }, svg);
    mk("polyline", { "class": "rail", points: pl(right), stroke: "url(#railG)" }, svg);
    // okuyucu halka
    var end = P[N];
    var rd = mk("g", { transform: "translate(" + end.x + " " + end.y + ")" }, svg);
    mk("circle", { "class": "pulse", r: Rend + 22 }, rd);
    mk("circle", { "class": "pulse p2", r: Rend + 22 }, rd);
    mk("circle", { "class": "reader", r: Rend + 22, "stroke-width": 1.5, opacity: .55, "stroke-dasharray": "3 9" }, rd);
    for (var q = 0; q < 4; q++) {
      var ang = q * 90;
      mk("line", { x1: Rend + 30, y1: 0, x2: Rend + 54, y2: 0, stroke: "#7DEBF7", "stroke-width": 3, transform: "rotate(" + ang + ")" }, rd);
    }
    // top
    var hold = mk("g", null, svg);
    var ball = makeBall(hold, Rend, "SUÇLU?");
    // yuvarlanma açısı: yatay hıza bağlı, sonunda yazı düz durur
    var th = [0];
    for (var m = 1; m <= N; m++) {
      var ds = Math.hypot(P[m].x - P[m - 1].x, P[m].y - P[m - 1].y), r = Math.max(8, P[m].w / 2 - 12);
      th.push(th[m - 1] + Math.sign(P[m].x - P[m - 1].x || 1) * ds / r);
    }
    var thEnd = th[N];
    return { P: P, N: N, th: th, thEnd: thEnd, ball: ball, Rend: Rend };
  }
  function placeBall(ch, u, extraRot, bump) {
    var N = ch.N, f = clamp(u, 0, 1) * N, i = Math.floor(f), t = f - i, a = ch.P[i], b = ch.P[Math.min(N, i + 1)];
    var x = lerp(a.x, b.x, t), y = lerp(a.y, b.y, t), w = lerp(a.w, b.w, t);
    var r = Math.max(8, w / 2 - 12) * (u >= 1 ? 1 : 1), s = (u >= 1 ? 1 : r / ch.Rend) * (bump || 1);
    var th = lerp(ch.th[i], ch.th[Math.min(N, i + 1)], t) - ch.thEnd;
    var deg = th * 180 / Math.PI + (extraRot || 0);
    ch.ball.g.setAttribute("transform", "translate(" + x.toFixed(2) + " " + y.toFixed(2) + ") scale(" + s.toFixed(4) + ")");
    ch.ball.spin.setAttribute("transform", "rotate(" + deg.toFixed(2) + ")");
    ch.ball.fog.setAttribute("opacity", (Math.pow(1 - clamp(u, 0, 1), 1.6) * .75).toFixed(3));
  }
  scene("precrime", {
    enter: function (c) {
      rain(c, { n: 200, seed: 7 });
      var ch = c.el.__ch || (c.el.__ch = buildChute(c.$(".chute")));
      var el = c.el;
      if (still(c)) { placeBall(ch, 1, 0); el.classList.add("landed"); return; }
      placeBall(ch, 0, 0);
      var g = function (t) { return t < .86 ? .9 * Math.pow(t / .86, 2.1) : .9 + .1 * E.out((t - .86) / .14); };
      tween(c, 2700, function (e) { placeBall(ch, e, 0); }, {
        ease: g, delay: 350, done: function () {
          el.classList.add("landed");
          tween(c, 1300, function (k, t) {
            var damp = Math.exp(-4.2 * t), rot = 10 * damp * Math.sin(t * 15), bump = 1 + .035 * damp * Math.sin(t * 13 + 1.2);
            placeBall(ch, 1, rot, bump);
          }, { ease: E.lin });
        }
      });
    },
    reset: function (r) { r.el.classList.remove("landed"); }
  });

  /* ============================================================
     08 · ANDERTON · parmak izi
     ============================================================ */
  function buildFP(svg) {
    if (svg.__built) return svg.__paths;
    var R = rng(5), cx = 180, cy = 196, paths = [];
    function poly(pts) { return pts.map(function (q, i) { return (i ? "L" : "M") + q[0].toFixed(1) + " " + q[1].toFixed(1); }).join(""); }
    // çekirdek halkalar
    for (var k = 0; k < 9; k++) {
      var rx = 9 + k * 10.5, ry = 13 + k * 12.5, a0 = Math.PI * .5 + .35 + R() * .4, sweep = Math.PI * 2 - (.55 + R() * .35), pts = [];
      for (var s = 0; s <= 64; s++) {
        var th = a0 + sweep * s / 64, wob = 1 + .03 * Math.sin(th * 3 + k * .7) + .015 * Math.sin(th * 7 + k * 1.9);
        pts.push([cx + rx * wob * Math.cos(th), cy + ry * wob * Math.sin(th)]);
      }
      paths.push(mk("path", { d: poly(pts) }, svg));
    }
    // dış sırtlar: üstten dolanıp iki yana iner
    for (var m = 0; m < 7; m++) {
      var rx2 = 104 + m * 10.5, ry2 = 126 + m * 12.5, pts2 = [];
      for (var s2 = 0; s2 <= 60; s2++) {
        var th2 = Math.PI * (1.02 + 0.96 * s2 / 60), wob2 = 1 + .02 * Math.sin(th2 * 4 + m);
        pts2.push([cx + rx2 * wob2 * Math.cos(th2), cy + ry2 * wob2 * Math.sin(th2)]);
      }
      // uçlar aşağı ve dışa akar
      var l = pts2[0], r = pts2[pts2.length - 1];
      pts2.unshift([l[0] - 4 - m * 2, l[1] + 40], [l[0] - 10 - m * 4, l[1] + 90]);
      pts2.unshift([l[0] - 18 - m * 6, l[1] + 140 - m * 6]);
      pts2.push([r[0] + 4 + m * 2, r[1] + 40], [r[0] + 10 + m * 4, r[1] + 90], [r[0] + 18 + m * 6, r[1] + 140 - m * 6]);
      paths.push(mk("path", { d: poly(pts2) }, svg));
    }
    // alt yaylar
    for (var j = 0; j < 6; j++) {
      var y0 = 330 + j * 17;
      paths.push(mk("path", { d: "M" + (40 + j * 4) + " " + (y0 + 26) + " C " + (110) + " " + (y0 - 14 - j) + ", " + (250) + " " + (y0 - 14 - j) + ", " + (320 - j * 4) + " " + (y0 + 26) }, svg));
    }
    svg.__built = true; svg.__paths = paths;
    return paths;
  }
  scene("anderton", {
    enter: function (c) {
      var paths = buildFP(c.$(".fp"));
      paths.forEach(function (p, i) { draw(c, p, .9, .5 + i * .045, "cubic-bezier(.4,0,.2,1)"); });
      scramble(c, c.$(".ds-id .scr"), { delay: 1.3, dur: 1.1 });
    },
    reset: function (r) { r.$$(".fp path").forEach(function (p) { cancel(p); p.removeAttribute("style"); }); }
  });

  /* ============================================================
     10 · ANDERTON'UN YOLU · itaat → sorgulama
     ============================================================ */
  var YOL = { x0: 200, x1: 1180, yT: 300, yB: 880, kink: { x: 690, y: 798 }, end: { x: 1160, y: 362 } };
  function buildArc(svg) {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var o = {};
    var grid = mk("g", null, svg);
    [420, 560, 700].forEach(function (y) { mk("line", { "class": "gridl", x1: YOL.x0, y1: y, x2: YOL.x1, y2: y }, grid); });
    o.axes = [
      mk("path", { "class": "axis", d: "M" + YOL.x0 + " " + YOL.yT + " V " + YOL.yB + " H " + YOL.x1 }, svg)
    ];
    var t1 = mk("text", { "class": "ax-lab", x: YOL.x0 + 18, y: YOL.yT + 8 }, svg); t1.textContent = "↑ SORGULAMA";
    var t2 = mk("text", { "class": "ax-lab", x: YOL.x0 + 18, y: YOL.yB - 16 }, svg); t2.textContent = "İTAAT";
    o.axLab = [t1, t2];
    o.st = [];
    [[380, "1 · BAŞLANGIÇ"], [YOL.kink.x, "2 · KIRILMA"], [1040, "3 · DÖNÜŞÜM"]].forEach(function (s) {
      mk("line", { "class": "tick", x1: s[0], y1: YOL.yB, x2: s[0], y2: YOL.yB + 12 }, svg);
      var t = mk("text", { "class": "st-lab", x: s[0], y: YOL.yB + 52 }, svg); t.textContent = s[1]; o.st.push(t);
    });
    o.a = mk("path", { "class": "line a", d: "M 214 812 C 330 811, 520 806, " + YOL.kink.x + " " + YOL.kink.y }, svg);
    o.b = mk("path", { "class": "line b", d: "M " + YOL.kink.x + " " + YOL.kink.y + " C 780 792, 830 470, " + YOL.end.x + " " + YOL.end.y }, svg);
    o.dotA = mk("circle", { "class": "dot", cx: 214, cy: 812, r: 9 }, svg);
    o.dotB = mk("circle", { "class": "dot", cx: YOL.end.x, cy: YOL.end.y, r: 10 }, svg);
    o.labA = mk("text", { "class": "ln-lab", x: 218, y: 774 }, svg); o.labA.textContent = "İTAATKÂR BİREY";
    o.labB = mk("text", { "class": "ln-lab", x: YOL.end.x - 6, y: YOL.end.y - 62, "text-anchor": "end" }, svg); o.labB.textContent = "SORGULAYAN BİREY";
    var mot = mk("text", { "class": "ln-lab amb motive", x: YOL.end.x - 6, y: YOL.end.y - 26, "text-anchor": "end" }, svg); mot.textContent = "MOTİVASYON: KENDİ ÇIKARI";
    // nedenler (B çizgisi üzerinde)
    var Lb = o.b.getTotalLength();
    o.why = [];
    [[.2, "korku", 1, 150, -10], [.47, "hayatta kalma içgüdüsü", 1, 70, 6], [.8, "suçsuz olduğunu kanıtlama isteği", -1, 80, 26]].forEach(function (w, i) {
      var p = o.b.getPointAtLength(Lb * w[0]), side = w[2], gx = p.x + side * w[3], gy = p.y + w[4];
      var g = mk("g", { "class": "why w" + (i + 1) }, svg);
      mk("line", { x1: p.x, y1: p.y, x2: gx, y2: gy }, g);
      mk("circle", { cx: p.x, cy: p.y, r: 5, fill: "#F0A85C" }, g);
      var rect = mk("rect", { y: gy - 24, height: 48, rx: 24 }, g);
      var t = mk("text", { y: gy + 9 }, g); t.textContent = w[1];
      o.why.push({ t: t, rect: rect, side: side, gx: gx });
    });
    sizeWhy(o);
    // top
    var hold = mk("g", { "class": "bhold" }, svg);
    o.ball = makeBall(hold, 86, "ANDERTON");
    o.ring = mk("circle", { cx: YOL.kink.x, cy: YOL.kink.y - 92, r: 100, fill: "none", stroke: "#7DEBF7", "stroke-width": 2, opacity: 0 }, svg);
    return o;
  }
  function sizeWhy(o) {
    o.why.forEach(function (w) {
      var bw = 0; try { bw = w.t.getComputedTextLength(); } catch (e) {}
      if (!bw) bw = w.t.textContent.length * 13;
      var rx = w.side > 0 ? w.gx : w.gx - bw - 40;
      w.rect.setAttribute("x", rx); w.rect.setAttribute("width", bw + 40);
      w.t.setAttribute("x", rx + 20);
    });
  }
  function yolBall(o, y, rot) {
    o.ball.g.setAttribute("transform", "translate(" + YOL.kink.x + " " + y.toFixed(1) + ")");
    o.ball.spin.setAttribute("transform", "rotate(" + (rot || 0).toFixed(1) + ")");
  }
  scene("yol", {
    enter: function (c) {
      var o = c.el.__o = buildArc(c.$(".arc"));
      if (doc.fonts && doc.fonts.status !== "loaded") doc.fonts.ready.then(function () { if (c.el.__o === o) sizeWhy(o); });
      var rest = YOL.kink.y - 92;
      yolBall(o, -200, 0);
      draw(c, o.axes[0], 1.1, .3);
      o.axLab.concat(o.st).forEach(function (t, i) { fadeIn(c, t, .6, .7 + i * .08); });
      draw(c, o.a, 1.3, .9);
      fadeIn(c, o.dotA, .4, .85, { scale: ".2" });
      fadeIn(c, o.labA, .6, 1.8, { translate: "0 10px" });
      [o.b, o.dotB, o.labB].forEach(function (e) { e.style.opacity = 0; });
      o.st[0].classList.add("on");
      c.el.__rest = rest;
    },
    step: function (n, c) {
      var o = c.el.__o; if (!o) return;
      var rest = c.el.__rest;
      if (n === 1) {
        o.st[1].classList.add("on");
        tween(c, 1100, function (e) { yolBall(o, lerp(-200, rest, e), (1 - e) * -160); }, {
          ease: E.bounce, delay: 150, done: function () {
            if (still(c)) return;
            o.ring.animate([{ opacity: .9, r: 90 }, { opacity: 0, r: 170 }], { duration: 1100, easing: "ease-out" });
          }
        });
      }
      if (n === 2) {
        o.st[2].classList.add("on");
        o.b.style.opacity = 1;
        draw(c, o.b, 1.4, .1, "cubic-bezier(.5,0,.2,1)");
        fadeIn(c, o.dotB, .4, 1.4, { scale: ".2" });
        fadeIn(c, o.labB, .6, 1.5, { translate: "0 10px" });
      }
    }
  });

  /* ============================================================
     11 · CEZA, EYLEMDEN ÖNCE · zaman çizgisi tersine akar
     ============================================================ */
  var XS = [220, 520, 820, 1120];
  function buildCeza(c) {
    var k = c.$(".tl-k"), p = c.$(".tl-pc"), o = {};
    [k, p].forEach(function (s) { while (s.firstChild) s.removeChild(s.firstChild); });
    // Kant (kâğıt) — doğru sıra
    var dk = mk("defs", null, k);
    var mkr = mk("marker", { id: "arrT", viewBox: "0 0 12 12", refX: 10, refY: 6, markerWidth: 16, markerHeight: 16, orient: "auto" }, dk);
    mk("path", { d: "M1 1 L11 6 L1 11", fill: "none", stroke: "#1E1812", "stroke-width": 1.6, "stroke-linecap": "round", "stroke-linejoin": "round" }, mkr);
    var yk = 356;
    o.kAxis = mk("path", { "class": "axis", d: "M150 " + yk + " H 1270", "marker-end": "url(#arrT)" }, k);
    var zk = mk("text", { "class": "zaman", x: 1270, y: yk - 22, "text-anchor": "end" }, k); zk.textContent = "ZAMAN";
    o.kNodes = []; o.kLabs = [];
    ["NİYET", "EYLEM", "YARGILAMA", "CEZA"].forEach(function (t, i) {
      o.kNodes.push(mk("circle", { "class": "node", cx: XS[i], cy: yk, r: 11 }, k));
      var tx = mk("text", { "class": "lab", x: XS[i], y: yk + 56 }, k); tx.textContent = t; o.kLabs.push(tx);
    });
    o.zk = zk;
    // Precrime (gece) — ceza geriye akar
    var dp = mk("defs", null, p);
    var mk2 = mk("marker", { id: "arrP", viewBox: "0 0 12 12", refX: 10, refY: 6, markerWidth: 14, markerHeight: 14, orient: "auto" }, dp);
    mk("path", { d: "M1 1 L11 6 L1 11", fill: "none", stroke: "rgba(125,235,247,.6)", "stroke-width": 1.6, "stroke-linecap": "round" }, mk2);
    var yp = 800;
    o.pAxis = mk("path", { "class": "axis", d: "M150 " + yp + " H 1270", "marker-end": "url(#arrP)" }, p);
    var zp = mk("text", { "class": "zaman", x: 1270, y: yp - 22, "text-anchor": "end" }, p); zp.textContent = "ZAMAN";
    o.zp = zp;
    o.tNode = mk("circle", { "class": "tnode", cx: XS[0], cy: yp, r: 12 }, p);
    o.g1 = mk("circle", { "class": "gnode", cx: XS[1], cy: yp, r: 13 }, p);
    o.g2 = mk("circle", { "class": "gnode", cx: XS[2], cy: yp, r: 13 }, p);
    o.pLabs = [];
    [["TAHMİN", ""], ["EYLEM", "ghost"], ["YARGILAMA", "ghost"]].forEach(function (t, i) {
      var tx = mk("text", { "class": "lab " + t[1], x: XS[i], y: yp + 56 }, p); tx.textContent = t[0]; o.pLabs.push(tx);
    });
    var s1 = mk("text", { "class": "sub", x: XS[1], y: yp + 96 }, p); s1.textContent = "yaşanmadı";
    var s2 = mk("text", { "class": "sub", x: XS[2], y: yp + 96 }, p); s2.textContent = "yok";
    mk("line", { "class": "strike", x1: XS[1] - 22, y1: yp + 22, x2: XS[1] + 22, y2: yp - 22 }, p);
    mk("line", { "class": "strike", x1: XS[2] - 22, y1: yp + 22, x2: XS[2] + 22, y2: yp - 22 }, p);
    o.back = mk("path", { "class": "back", d: "M" + XS[3] + " " + yp + " Q " + ((XS[3] + 370) / 2) + " " + (yp - 170) + " 370 " + yp }, p);
    o.head = mk("path", { d: "M0 0 L 18 -11 M0 0 L 18 11", stroke: "#fff", "stroke-width": 4, "stroke-linecap": "round", fill: "none", opacity: 0 }, p);
    o.ceza = mk("g", { "class": "ceza" }, p);
    mk("circle", { r: 14 }, o.ceza);
    var ct = mk("text", { y: -36 }, o.ceza); ct.textContent = "CEZA";
    o.yp = yp;
    return o;
  }
  function cezaAt(o, k) {
    var L = o.back.getTotalLength(), p = o.back.getPointAtLength(L * k), q = o.back.getPointAtLength(Math.max(0, L * k - 2));
    o.ceza.setAttribute("transform", "translate(" + p.x.toFixed(1) + " " + p.y.toFixed(1) + ")");
    o.back.style.strokeDasharray = L + " " + L;
    o.back.style.strokeDashoffset = (L * (1 - k)).toFixed(1);
    var ang = Math.atan2(p.y - q.y, p.x - q.x) * 180 / Math.PI;
    o.head.setAttribute("transform", "translate(" + p.x.toFixed(1) + " " + p.y.toFixed(1) + ") rotate(" + (ang + 180).toFixed(1) + ")");
    o.head.setAttribute("opacity", k > .04 ? 1 : 0);
  }
  scene("ceza", {
    enter: function (c) {
      var o = c.el.__o = buildCeza(c);
      draw(c, o.kAxis, 1.1, .5);
      o.kNodes.forEach(function (n, i) { fadeIn(c, n, .5, .7 + i * .2, { scale: ".2" }); n.style.transformBox = "fill-box"; n.style.transformOrigin = "center"; });
      o.kLabs.concat([o.zk]).forEach(function (t, i) { fadeIn(c, t, .6, .8 + i * .2, { translate: "0 10px" }); });
      draw(c, o.pAxis, 1.1, .9);
      [o.tNode, o.g1, o.g2].concat(o.pLabs, [o.zp]).forEach(function (e, i) { fadeIn(c, e, .6, 1.2 + i * .12); });
      cezaAt(o, 0);
      fadeIn(c, o.ceza, .6, 1.9, { scale: ".4" });
    },
    step: function (n, c) {
      var o = c.el.__o; if (!o) return;
      if (n === 1) tween(c, 1600, function (e) { cezaAt(o, e); }, { ease: E.inOut, delay: 150 });
    }
  });

  /* ============================================================
     12 · AMAÇ / ARAÇ · terazi
     ============================================================ */
  var SC = { px: 1290, py: 340, half: 390 };
  function scaleRender(s) {
    var rad = s.a * Math.PI / 180, cs = Math.cos(rad), sn = Math.sin(rad);
    var L = { x: SC.px - SC.half * cs, y: SC.py - SC.half * sn }, R = { x: SC.px + SC.half * cs, y: SC.py + SC.half * sn };
    s.beam.setAttribute("transform", "rotate(" + s.a.toFixed(3) + " " + SC.px + " " + SC.py + ")");
    s.panL.setAttribute("transform", "translate(" + L.x.toFixed(2) + " " + L.y.toFixed(2) + ")");
    s.panR.setAttribute("transform", "translate(" + R.x.toFixed(2) + " " + R.y.toFixed(2) + ")");
    var feet = 250;
    // kalabalık: AMAÇ kefesine düşer; birey gelince sola kayar
    var cx = L.x + lerp(0, -44, s.shift), cy = lerp(-380, L.y + feet, s.crowdE);
    s.crowd.setAttribute("transform", "translate(" + cx.toFixed(2) + " " + cy.toFixed(2) + ")");
    // birey: ARAÇ kefesine düşer, sonra AMAÇ kefesine atlar
    var bx, by;
    if (s.jump <= 0) { bx = R.x; by = lerp(-400, R.y + feet, s.bireyE); }
    else {
      var j = s.jump, sx = R.x, sy = R.y + feet, ex = L.x + 76, ey = L.y + feet;
      bx = lerp(sx, ex, j); by = lerp(sy, ey, j) - Math.sin(j * Math.PI) * 230;
    }
    s.birey.setAttribute("transform", "translate(" + bx.toFixed(2) + " " + by.toFixed(2) + ")");
  }
  scene("arac", {
    enter: function (c) {
      var svg = c.$(".scale");
      var s = c.el.__s = {
        a: 0, v: 0, target: 0, crowdE: 0, bireyE: 0, jump: 0, shift: 0,
        beam: svg.querySelector(".sc-beam"), panL: svg.querySelector(".pan-l"), panR: svg.querySelector(".pan-r"),
        crowd: svg.querySelector(".crowd"), birey: svg.querySelector(".birey")
      };
      scaleRender(s);
      c.loop(function (t, dt) {
        var acc = 38 * (s.target - s.a) - 5.2 * s.v;
        s.v += acc * dt; s.a += s.v * dt;
        scaleRender(s);
      });
    },
    step: function (n, c) {
      var s = c.el.__s; if (!s) return;
      if (n === 1) {
        if (still(c)) { s.crowdE = 1; s.bireyE = 1; s.a = s.target = -9; s.v = 0; scaleRender(s); return; }
        tween(c, 750, function (e) { s.crowdE = e; }, { ease: E.in2, delay: 100, done: function () { s.target = -16; s.v -= 30; } });
        tween(c, 750, function (e) { s.bireyE = e; }, { ease: E.in2, delay: 750, done: function () { s.target = -9; s.v += 26; } });
      }
      if (n === 2) {
        ink(c, c.$(".ar-q .ink"), { delay: .25, speed: .04 });
        if (still(c)) { s.crowdE = s.bireyE = 1; s.jump = 1; s.shift = 1; s.a = s.target = -21; s.v = 0; scaleRender(s); return; }
        s.target = -16;
        tween(c, 500, function (e) { s.shift = e; }, { ease: E.out });
        tween(c, 1100, function (e) { s.jump = e; }, { ease: E.inOut, delay: 200, done: function () { s.target = -21; s.v -= 40; } });
      }
    }
  });

  /* ============================================================
     14 · ÖZGÜR İRADE · dallanan yollar tek yola çöker
     ============================================================ */
  function buildTree(svg) {
    if (svg.__built) return;
    svg.__built = true;
    var root = { x: 940, y: 556 }, X = [1205, 1490, 1770], DY = [[-250, 0, 250], [-88, 0, 88], [-30, 0, 30]];
    var keep = [0, 2, 1], gB = mk("g", null, svg), gL = mk("g", null, svg), idx = 0;
    function br(from, depth, path) {
      DY[depth].forEach(function (dy, i) {
        var to = { x: X[depth], y: from.y + dy }, mx = (from.x + to.x) / 2;
        var isKeep = path.concat([i]).every(function (v, k) { return v === keep[k]; });
        var p = mk("path", { "class": "br" + (isKeep ? " keep" : ""), d: "M" + from.x + " " + from.y + " C " + mx + " " + from.y + ", " + mx + " " + to.y + ", " + to.x + " " + to.y }, gB);
        var L = p.getTotalLength();
        p.style.setProperty("--len", L.toFixed(1));
        p.style.setProperty("--d", (.15 + depth * .42 + (idx++ % 9) * .025).toFixed(3) + "s");
        p.style.setProperty("--rd", ((2 - depth) * .3).toFixed(2) + "s");
        if (depth < 2) br(to, depth + 1, path.concat([i]));
        else {
          var lf = mk("circle", { "class": "leaf" + (isKeep ? " keep" : ""), cx: to.x, cy: to.y, r: isKeep ? 9 : 6 }, gL);
          lf.style.setProperty("--d", (1.2 + depth * .1).toFixed(2) + "s");
          if (isKeep) { var t = mk("text", { "class": "flab", x: to.x - 8, y: to.y - 22 }, svg); t.textContent = "KESİN GELECEK"; }
        }
      });
    }
    br(root, 0, []);
    mk("circle", { "class": "root", cx: root.x, cy: root.y, r: 12 }, svg);
    var rl = mk("text", { "class": "rlab", x: root.x, y: root.y + 52 }, svg); rl.textContent = "ŞİMDİ";
    var ol = mk("text", { "class": "olab", x: 1770, y: 150, "text-anchor": "end" }, svg); ol.textContent = "özgür irade";
  }
  scene("irade", {
    enter: function (c) { buildTree(c.$(".tree")); },
    step: function (n, c) { if (n === 2) ink(c, c.$(".ir-t2 .ink"), { delay: .55, speed: .035 }); }
  });

  /* ============================================================
     15 · HÜKÜM · mühür
     ============================================================ */
  scene("hukum", {
    step: function (n, c) {
      if (n !== 2) return;
      var st = c.$(".stamp"), lg = c.$(".ledger");
      if (still(c)) { st.style.opacity = 1; return; }
      st.animate([
        { opacity: 0, scale: "2.3", filter: "blur(8px)" },
        { opacity: 1, scale: ".95", filter: "blur(0px)", offset: .72 },
        { opacity: 1, scale: "1", filter: "blur(0px)" }
      ], { duration: 560, delay: 120, easing: "cubic-bezier(.55,0,.75,.2)", fill: "both" });
      lg.animate([
        { translate: "0 0" }, { translate: "-7px 4px" }, { translate: "6px -3px" }, { translate: "-3px 2px" }, { translate: "0 0" }
      ], { duration: 320, delay: 520, easing: "ease-out" });
    },
    reset: function (r) { [r.$(".stamp"), r.$(".ledger")].forEach(function (e) { cancel(e); e.removeAttribute("style"); }); }
  });

  /* ============================================================
     16 · KAPANIŞ
     ============================================================ */
  scene("kapanis", {
    enter: function (c) {
      rain(c, { n: 170, seed: 11, x0: 900 });
      var l = c.$$(".kp-h .ink");
      ink(c, l[0], { delay: .55, speed: .045 });
      ink(c, l[1], { delay: 1.35, speed: .06 });
    }
  });
})();
