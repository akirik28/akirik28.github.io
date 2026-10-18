/* ============================================================
   EYP Nedir? — özel hareketler
   Motor: /assets/deck/deck.js (değiştirilmedi)
   ============================================================ */
(function () {
  "use strict";

  /* Bu sunum tek başına paylaşılan bir bağlantı: sitenin geri kalanına
     (ana sayfa, /sunumlar/, diğer sunumlar) giden bir bağlantı bırakma. */
  (function standalone() {
    var here = location.pathname.replace(/[^/]*$/, "");
    Array.prototype.forEach.call(document.querySelectorAll("a[href]"), function (a) {
      try {
        var u = new URL(a.getAttribute("href"), location.href);
        if (u.origin === location.origin && u.pathname.indexOf(here) !== 0) a.remove();
      } catch (e) {}
    });
  })();

  if (!window.Deck) return;
  var EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
  var NS = "http://www.w3.org/2000/svg";
  var SKY = "#8EC5FF", CORAL = "#FF6B57", STAR = "#FFCE3A";

  /* ---------- yardımcılar ---------- */
  function svgEl(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function wa(c, el, kf, o) {
    o = Object.assign({ fill: "both", easing: EASE }, o || {});
    if (c.instant) { o.duration = 0; o.delay = 0; }
    var a = el.animate(kf, o);
    (c.el.__wa || (c.el.__wa = [])).push(a);
    return a;
  }
  function killWA(sc) { (sc.__wa || []).forEach(function (a) { try { a.cancel(); } catch (e) {} }); sc.__wa = []; }
  function rng(seed) { return function () { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }; }
  function starAt(g, x, y, s) {
    var u = svgEl("use", { href: "#star", x: x - s / 2, y: y - s / 2, width: s, height: s }, g);
    u.style.transformBox = "fill-box"; u.style.transformOrigin = "center";
    return u;
  }

  // parlamento sıraları: yarım daire üzerinde koltuklar, soldan sağa sıralı
  function hemicycle(g, o) {
    if (g.__seats) return g.__seats;
    var seats = [];
    for (var r = 0; r < o.rows; r++) {
      var rad = o.r0 + (o.r1 - o.r0) * (o.rows === 1 ? 0 : r / (o.rows - 1));
      var n = Math.max(3, Math.floor(Math.PI * rad / o.pitch));
      for (var i = 0; i < n; i++) {
        var a = Math.PI - Math.PI * (i / (n - 1));
        var x = o.cx + rad * Math.cos(a), y = o.cy - rad * Math.sin(a);
        var el = svgEl("circle", { cx: x.toFixed(1), cy: y.toFixed(1), r: o.seat, class: "seat" }, g);
        seats.push({ el: el, a: a, r: r });
      }
    }
    seats.sort(function (p, q) { return q.a - p.a || p.r - q.r; });
    g.__seats = seats;
    return seats;
  }
  // tam sayıda koltuk (oylama için): her sıraya yarıçapla orantılı dağıt
  function hemicycleN(g, o) {
    if (g.__seats) return g.__seats;
    var total = o.n, rads = [], sum = 0, r, i;
    for (r = 0; r < o.rows; r++) { var rad = o.r0 + (o.r1 - o.r0) * r / (o.rows - 1); rads.push(rad); sum += rad; }
    var counts = rads.map(function (x) { return Math.round(total * x / sum); });
    counts[counts.length - 1] += total - counts.reduce(function (a, b) { return a + b; }, 0);
    var seats = [];
    for (r = 0; r < o.rows; r++) for (i = 0; i < counts[r]; i++) {
      var a = Math.PI - Math.PI * (i / (counts[r] - 1));
      var el = svgEl("circle", { cx: (o.cx + rads[r] * Math.cos(a)).toFixed(1), cy: (o.cy - rads[r] * Math.sin(a)).toFixed(1), r: o.seat, class: "seat" }, g);
      seats.push({ el: el, a: a, r: r });
    }
    seats.sort(function (p, q) { return q.a - p.a || p.r - q.r; });
    g.__seats = seats;
    return seats;
  }

  /* ---------- 01 kapak: sıralar dolar, yıldızlar yay çizer ---------- */
  Deck.scene("kapak", {
    enter: function (c) {
      var g = c.$(".hemi-cover .seats"), sg = c.$(".hemi-cover .stars");
      var seats = hemicycle(g, { cx: 1470, cy: 960, r0: 190, r1: 520, rows: 9, pitch: 31, seat: 10.5 });
      if (!g.__styled) {
        var R = rng(7);
        seats.forEach(function (s) { var v = R(); if (v < .07) s.el.classList.add("hi"); else if (v < .72) s.el.classList.add("on"); });
        g.__styled = true;
      }
      seats.forEach(function (s, k) {
        wa(c, s.el, [{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 250 + (1 - s.a / Math.PI) * 1300 + s.r * 40 });
      });
      if (!sg.__built) {
        for (var i = 0; i < 7; i++) {
          var t = i / 6, a = Math.PI * (0.86 - 0.72 * t), rr = 610 + Math.sin(t * Math.PI) * 30;
          starAt(sg, 1470 + rr * Math.cos(a), 960 - rr * Math.sin(a), [26, 34, 44, 56, 44, 34, 26][i]);
        }
        sg.__built = true;
      }
      Array.prototype.forEach.call(sg.children, function (u, i) {
        wa(c, u, [{ opacity: 0, scale: ".2", rotate: "-40deg" }, { opacity: 1, scale: "1", rotate: "0deg" }], { duration: 900, delay: 1200 + i * 90, easing: "cubic-bezier(.34,1.56,.64,1)" });
      });
      if (!c.static) {   // ara ara biri söz ister
        var R2 = rng(99);
        c.every(700, function () {
          var s = seats[Math.floor(R2() * seats.length)].el;
          if (s.classList.contains("hi")) return;
          s.animate([{ fill: STAR }, { fill: STAR, offset: .6 }, { fill: getComputedStyle(s).fill }], { duration: 1800, easing: "ease-out" });
        });
      }
    },
    reset: function (c) { killWA(c.el); }
  });

  /* ---------- 03 eyp: 40 nokta, sayaçla birlikte yanar ---------- */
  Deck.scene("eyp", {
    enter: function (c) {
      var sv = c.$(".dots40");
      if (!sv.__built) {
        for (var i = 0; i < 40; i++) {
          var col = i % 10, row = Math.floor(i / 10);
          var x = 20 + col * 58 + (row % 2) * 29, y = 18 + row * 38 - Math.sin(col / 9 * Math.PI) * 10;
          svgEl("circle", { cx: x, cy: y, r: 10, class: "d" }, sv);
        }
        sv.__built = true;
      }
      Array.prototype.forEach.call(sv.children, function (d, i) {
        d.classList.remove("on");
        wa(c, d, [{ fill: "rgba(198,224,255,.18)", scale: ".6" }, { fill: STAR, scale: "1" }], { duration: 300, delay: 900 + i * 42 });
        d.style.transformBox = "fill-box"; d.style.transformOrigin = "center";
      });
    },
    reset: function (c) { killWA(c.el); }
  });

  /* ---------- 05 konferans: çizgi aşama aşama dolar ---------- */
  function trackTo(c, p, delay) {
    var f = c.$(".track-fill"), L = f.getTotalLength();
    f.style.strokeDasharray = L;
    var from = f.__p == null ? 1 : f.__p;
    f.__p = 1 - p;
    wa(c, f, [{ strokeDashoffset: L * from }, { strokeDashoffset: L * (1 - p) }], { duration: 1100, delay: delay || 0 });
  }
  Deck.scene("konferans", {
    enter: function (c) { var f = c.$(".track-fill"); f.__p = null; trackTo(c, 0.02, 400); },
    step: function (n, c) { trackTo(c, n === 1 ? 0.5 : 1, 0); },
    reset: function (c) { killWA(c.el); c.$(".track-fill").__p = null; }
  });

  /* ---------- 06 taslak: Genel Kurul oylaması ---------- */
  Deck.scene("taslak", {
    enter: function (c) {
      var g = c.$(".hemi-vote .seats");
      var seats = hemicycleN(g, { cx: 320, cy: 310, r0: 130, r1: 290, rows: 5, n: 66, seat: 12 });
      seats.forEach(function (s) { s.el.setAttribute("class", "seat"); });
    },
    step: function (n, c) {
      if (n !== 1) return;
      var seats = c.$(".hemi-vote .seats").__seats;
      seats.forEach(function (s, i) {
        var col = i < 44 ? SKY : (i < 60 ? CORAL : "rgba(255,255,255,.55)");
        wa(c, s.el, [{ fill: "rgba(198,224,255,.16)" }, { fill: col }], { duration: 380, delay: 700 + i * 18 });
      });
    },
    reset: function (c) { killWA(c.el); }
  });

  /* ---------- 09 sorular: 300 kelimelik sayaç ---------- */
  Deck.scene("sorular", {
    enter: function (c) {
      c.$$(".q").forEach(function (q, i) {
        var d = 900 + i * 220;
        wa(c, q.querySelector(".wc-bar i"), [{ scale: "0 1" }, { scale: "1 1" }], { duration: 1500, delay: d });
        var n = q.querySelector(".wc-n");
        if (c.instant) { n.textContent = "300"; return; }
        n.textContent = "0";
        c.after(d, function () { c.count(n, 300, { dec: 0, duration: 1.5 }); });
      });
    },
    reset: function (c) { killWA(c.el); c.$$(".wc-n").forEach(function (n) { n.textContent = "0"; }); }
  });

  /* ---------- 10 official ara: yay üzerinde yıldızlar ---------- */
  Deck.scene("official", {
    enter: function (c) {
      var g = c.$(".arc-stars"), p = c.$(".arc-p");
      if (!g.__built) {
        var L = p.getTotalLength(), sizes = [22, 28, 34, 42, 50, 42, 34, 28, 22];
        sizes.forEach(function (s, i) { var pt = p.getPointAtLength(L * (0.1 + 0.8 * i / 8)); starAt(g, pt.x, pt.y, s); });
        g.__built = true;
      }
      Array.prototype.forEach.call(g.children, function (u, i) {
        wa(c, u, [{ opacity: 0, scale: ".2", rotate: "-60deg" }, { opacity: 1, scale: "1", rotate: "0deg" }], { duration: 800, delay: 500 + i * 110, easing: "cubic-bezier(.34,1.56,.64,1)" });
      });
    },
    reset: function (c) { killWA(c.el); }
  });

  /* ---------- 13 türler: yol boyunca ilerleyen yıldız ---------- */
  Deck.scene("turler", {
    enter: function (c) {
      var ps = c.$$(".pipe-l path"), dot = c.$(".runner");
      if (c.static) return;
      var segs = [[0, 1], [0, 2]], Ls = ps.map(function (p) { return p.getTotalLength(); });
      var speed = 320, start = c.instant ? 0 : 2.2;
      c.loop(function (t) {
        if (t < start) { dot.style.opacity = 0; return; }
        var tt = t - start, k = 0;
        var route = segs[0], tot = 0, cyc = 0;
        segs.forEach(function (s) { cyc += (Ls[s[0]] + Ls[s[1]]) / speed + 0.8; });
        var ph = tt % cyc;
        for (k = 0; k < segs.length; k++) { var d = (Ls[segs[k][0]] + Ls[segs[k][1]]) / speed + 0.8; if (ph < d) { route = segs[k]; break; } ph -= d; }
        var dist = ph * speed, a = Ls[route[0]];
        if (dist > a + Ls[route[1]]) { dot.style.opacity = 0; return; }
        var pt = dist <= a ? ps[route[0]].getPointAtLength(dist) : ps[route[1]].getPointAtLength(dist - a);
        // ilk parça ile ikinci arasında düğümün üstünden atla
        if (dist > a && dist - a < 1) pt = ps[route[1]].getPointAtLength(0);
        dot.setAttribute("cx", pt.x); dot.setAttribute("cy", pt.y);
        dot.style.opacity = 1;
      });
    },
    reset: function (c) { killWA(c.el); var d = c.$(".runner"); d.style.opacity = 0; }
  });

  /* ---------- 14 başvuru: ilerleme çizgisi, yazı, konfeti ---------- */
  function confetti(c) {
    var box = c.$(".confetti");
    if (!box.__built) {
      var R = rng(3), cols = [STAR, "#2F7BFF", "#1846D1", CORAL, SKY];
      for (var i = 0; i < 34; i++) {
        var e = document.createElement("i"); e.style.background = cols[i % cols.length];
        e.__dx = (R() - .5) * 340; e.__dy = -40 - R() * 110; e.__r = (R() - .5) * 720;
        box.appendChild(e);
      }
      box.__built = true;
    }
    Array.prototype.forEach.call(box.children, function (e, i) {
      wa(c, e, [
        { opacity: 0, translate: "-50% -50%", rotate: "0deg" },
        { opacity: 1, translate: "calc(-50% + " + e.__dx * .6 + "px) calc(-50% + " + e.__dy + "px)", offset: .45 },
        { opacity: 1, translate: "calc(-50% + " + e.__dx + "px) calc(-50% + " + (e.__dy + 150) + "px)", rotate: e.__r + "deg" }
      ], { duration: 1600, delay: 350 + i * 8, easing: "cubic-bezier(.2,.7,.4,1)" });
    });
  }
  Deck.scene("basvuru", {
    enter: function (c) { c.$(".prog i").style.scale = "0 1"; },
    step: function (n, c) {
      var p = c.$(".prog i");
      if (c.instant) { c.el.classList.add("instant"); }
      p.style.scale = (n / 3) + " 1";
      if (c.instant) { void p.offsetWidth; requestAnimationFrame(function () { c.el.classList.remove("instant"); }); }
      if (n === 2) wa(c, c.$(".typed"), [{ width: "0%" }, { width: "72%" }], { duration: 1800, delay: 500, easing: "steps(14, end)" });
      if (n === 3) confetti(c);
    },
    reset: function (c) { killWA(c.el); c.$(".prog i").style.scale = "0 1"; }
  });

  /* ---------- 18 kulüp: zaman çizelgesi dolar ---------- */
  Deck.scene("kulup", {
    enter: function (c) {
      wa(c, c.$(".seg-a"), [{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)" }], { duration: 1300, delay: 600 });
      wa(c, c.$(".seg-b"), [{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)" }], { duration: 700, delay: 1700 });
    },
    reset: function (c) { killWA(c.el); }
  });

  /* ---------- 19 son: salondan eller kalkar ---------- */
  Deck.scene("son", {
    enter: function (c) {
      var g = c.$(".hemi-end .seats");
      var seats = hemicycle(g, { cx: 960, cy: 1530, r0: 540, r1: 890, rows: 8, pitch: 40, seat: 12 });
      seats.forEach(function (s) {
        s.el.classList.add("on");
        wa(c, s.el, [{ opacity: 0 }, { opacity: .55 }], { duration: 700, delay: 200 + Math.abs(s.a - Math.PI / 2) * 500 + s.r * 50 });
      });
      var R = rng(11);
      var pick = [];
      for (var i = 0; i < 9; i++) pick.push(seats[Math.floor(R() * seats.length)].el);
      pick.forEach(function (el, i) {
        wa(c, el, [{ fill: "rgba(198,224,255,.7)" }, { fill: STAR }], { duration: 400, delay: 1500 + i * 160 });
      });
      if (!c.static) {
        c.every(650, function () {
          var s = seats[Math.floor(Math.random() * seats.length)].el;
          s.animate([{ fill: STAR }, { fill: STAR, offset: .6 }, { fill: "rgba(198,224,255,.7)" }], { duration: 1700, easing: "ease-out" });
        });
      }
    },
    reset: function (c) { killWA(c.el); }
  });
})();
