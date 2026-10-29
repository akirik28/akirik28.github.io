/* ============================================================
   Din ve Bilim — sahneye özel hareketler (motor: /assets/deck/deck.js)
   ============================================================ */
(function () {
  "use strict";
  if (!window.Deck) return;
  var NS = "http://www.w3.org/2000/svg", doc = document;
  function $$(s, el) { return [].slice.call((el || doc).querySelectorAll(s)); }
  function rng(seed) { return function () { seed = (seed + 0x6D2B79F5) | 0; var t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function still(c) { return c.instant || Deck.reduced || c.static; }

  /* ---------- yıldızlı gökyüzü: her sahnedeki canvas.stars ---------- */
  function Sky(cv, seed, n) {
    var r = rng(seed), g = cv.getContext("2d"), S = [], shoot = null;
    for (var i = 0; i < n; i++) S.push({ x: r() * 1920, y: r() * 1080, s: r() * 1.8 + .3, p: r() * 6.28, v: .4 + r() * 1.6, c: r() < .14 ? "232,182,90" : r() < .3 ? "127,178,255" : "243,234,215" });
    this.draw = function (t) {
      g.clearRect(0, 0, 1920, 1080);
      for (var i = 0; i < S.length; i++) {
        var a = S[i], o = .35 + .45 * (.5 + .5 * Math.sin(t * a.v + a.p));
        var x = (a.x + t * a.s * 3) % 1920;
        g.fillStyle = "rgba(" + a.c + "," + o.toFixed(3) + ")";
        g.beginPath(); g.arc(x, a.y, a.s, 0, 6.283); g.fill();
      }
      if (!shoot && r() < .006) shoot = { x: 200 + r() * 1500, y: r() * 400, life: 0 };
      if (shoot) {
        shoot.life += .016;
        var L = shoot.life, sx = shoot.x + L * 900, sy = shoot.y + L * 360;
        var grd = g.createLinearGradient(sx, sy, sx - 160, sy - 64);
        grd.addColorStop(0, "rgba(246,210,139," + Math.max(0, 1 - L * 1.4) + ")"); grd.addColorStop(1, "rgba(246,210,139,0)");
        g.strokeStyle = grd; g.lineWidth = 2; g.beginPath(); g.moveTo(sx, sy); g.lineTo(sx - 160, sy - 64); g.stroke();
        if (L > .8) shoot = null;
      }
    };
  }
  function gokyuzu(c, seed, n) {
    var cv = c.$("canvas.stars"); if (!cv) return;
    var sky = cv._sky || (cv._sky = new Sky(cv, seed, n || 170));
    if (still(c) && c.static) { sky.draw(3); return; }
    c.loop(function (t) { sky.draw(t); });
  }

  /* ---------- 01 kapak: usturlap ---------- */
  var ticks = doc.querySelector("#kapak .cv-ticks");
  if (ticks) for (var k = 0; k < 72; k++) {
    var a = k / 72 * Math.PI * 2, r1 = k % 6 === 0 ? 362 : 372, ln = doc.createElementNS(NS, "line");
    ln.setAttribute("x1", 420 + Math.cos(a) * r1); ln.setAttribute("y1", 420 + Math.sin(a) * r1);
    ln.setAttribute("x2", 420 + Math.cos(a) * 392); ln.setAttribute("y2", 420 + Math.sin(a) * 392);
    ln.setAttribute("class", "tick"); ticks.appendChild(ln);
  }
  Deck.scene("kapak", {
    enter: function (c) {
      gokyuzu(c, 7, 220);
      var spin = c.$("#cv-spin"), rete = c.$("#cv-rete");
      if (c.static) return;
      spin.animate([{ rotate: "0deg" }, { rotate: "360deg" }], { duration: 90000, iterations: Infinity });
      rete.style.transformOrigin = "420px 420px"; rete.style.transformBox = "view-box";
      rete.animate([{ rotate: "-14deg" }, { rotate: "14deg" }], { duration: 7000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" });
      c.animate(c.$(".glow.g1"), { opacity: [.35, .7] }, { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" });
      c.animate(c.$(".glow.g2"), { opacity: [.7, .35] }, { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" });
    },
    reset: function (c) { c.$("#cv-spin").getAnimations().forEach(function (x) { x.cancel(); }); c.$("#cv-rete").getAnimations().forEach(function (x) { x.cancel(); }); }
  });

  /* ---------- 02 iki bakış: alev titrer, ışık huzmesi nefes alır ---------- */
  Deck.scene("soru", {
    enter: function (c) {
      if (c.static) return;
      c.after(1300, function () {
        c.animate(c.$(".flame"), { scale: [1, 1.18, .94, 1.1, 1], opacity: [1, .8, 1, .85, 1] }, { duration: 1.6, repeat: Infinity, ease: "easeInOut" });
        c.animate(c.$(".beam"), { opacity: [.5, 1, .5], scaleY: [.9, 1.15, .9] }, { duration: 2.4, repeat: Infinity, ease: "easeInOut" });
        c.animate(c.$(".r .ico"), { rotate: [-3, 3] }, { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" });
        c.animate(c.$(".l .ico"), { y: [0, -10] }, { duration: 2.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" });
      });
    }
  });

  /* ---------- genel: yıldızlar + hafif süzülme ---------- */
  var seeds = { tanimlar: 11, sorular: 13, yontem: 17, ayetler: 19, modeller: 23, catisma: 29, medeniyet: 31, gazzali: 37, noma: 41, dikkat: 43, bugun: 47, sonuc: 53, kaynakca: 59, "yz-formu": 61 };
  function yuz(id, extra) {
    Deck.scene(id, {
      enter: function (c) { gokyuzu(c, seeds[id], 150); if (extra && extra.enter) extra.enter(c); },
      step: extra && extra.step, reset: extra && extra.reset
    });
  }

  yuz("tanimlar", { enter: function (c) {
    if (c.static) return;
    c.after(900, function () {
      $$(".def svg.badge", c.el).forEach(function (s, i) { c.animate(s, { rotate: [0, i === 1 ? 360 : 8], scale: [1, 1.06] }, { duration: i === 1 ? 14 : 3, repeat: Infinity, repeatType: i === 1 ? "loop" : "reverse", ease: i === 1 ? "linear" : "easeInOut" }); });
    });
  } });

  yuz("sorular", { enter: function (c) {
    if (c.static) return;
    var p = c.$(".qmid path"); c.after(1800, function () { p.animate([{ strokeDashoffset: 0 }, { strokeDashoffset: -160 }], { duration: 2600, iterations: Infinity }); });
  } });

  /* yöntem döngüsü: altın nokta yörüngede döner, geçtiği düğüm parlar */
  yuz("yontem", { enter: function (c) {
    var run = c.$("#runner"), nodes = $$(".node circle", c.el);
    function place(a) { run.setAttribute("cx", 320 + Math.sin(a) * 240); run.setAttribute("cy", 320 - Math.cos(a) * 240); }
    if (c.static) { place(.4); return; }
    var t0 = null;
    c.after(1500, function () {
      c.loop(function (t) {
        if (t0 === null) t0 = t;
        var a = (t - t0) * .9;
        place(a);
        var q = ((a % 6.283) + 6.283) % 6.283;
        nodes.forEach(function (n, i) { var d = Math.abs(((q - i * 1.5708 + 9.42) % 6.283) - 3.14); n.style.stroke = d > 2.8 ? "#E8B65A" : ""; n.style.strokeWidth = d > 2.8 ? "5" : ""; });
      });
    });
  }, reset: function (c) { $$(".node circle", c.el).forEach(function (n) { n.style.stroke = ""; n.style.strokeWidth = ""; }); } });

  /* ayetler: kandil alevi */
  yuz("ayetler", { enter: function (c) {
    if (c.static) return;
    var f = c.$("#lamp-fl"); f.style.transformOrigin = "110px 118px"; f.style.transformBox = "view-box";
    c.after(1200, function () { c.animate(f, { scaleY: [1, 1.15, .92, 1.08, 1], scaleX: [1, .92, 1.05, .95, 1] }, { duration: 1.8, repeat: Infinity, ease: "easeInOut" }); });
  } });

  /* dört model: çatışmada daireler sarsılır, diyalogda yaklaşır, bütünleşmede iç içe nefes alır */
  yuz("modeller", { enter: function (c) {
    if (c.static) return;
    c.after(1700, function () {
      c.animate(c.$("#m1 .m-d"), { x: [0, -8, 0] }, { duration: .5, repeat: Infinity, repeatDelay: 1.6 });
      c.animate(c.$("#m1 .m-b"), { x: [0, 8, 0] }, { duration: .5, repeat: Infinity, repeatDelay: 1.6 });
      var m3 = $$("#m3 circle", c.el); c.animate(m3[0], { x: [0, 14] }, { duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }); c.animate(m3[1], { x: [0, -14] }, { duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" });
      var m4 = $$("#m4 circle", c.el); c.animate(m4[1], { scale: [1, 1.18] }, { duration: 2.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" });
      var m2 = $$("#m2 circle", c.el); c.animate(m2[0], { y: [0, -8] }, { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }); c.animate(m2[1], { y: [0, 8] }, { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" });
    });
  } });

  /* çatışma: zaman çizgisi noktaları sırayla nabız atar */
  yuz("catisma", { enter: function (c) {
    if (c.static) return;
    c.after(2200, function () { $$(".ev .dot", c.el).forEach(function (d, i) { c.animate(d, { scale: [1, 1.5, 1] }, { duration: 1.2, delay: i * .3, repeat: Infinity, repeatDelay: 1.6 }); }); });
  } });

  /* medeniyet: küçük güneş sistemi */
  yuz("medeniyet", { enter: function (c) {
    var p1 = c.$("#civ-p1"), p2 = c.$("#civ-p2");
    function at(t) { p1.setAttribute("cx", 150 + Math.cos(t * .6) * 130); p1.setAttribute("cy", 150 + Math.sin(t * .6) * 130); p2.setAttribute("cx", 150 + Math.cos(-t * 1.1) * 80); p2.setAttribute("cy", 150 + Math.sin(-t * 1.1) * 80); }
    if (c.static) { at(1); return; }
    c.loop(function (t) { at(t); });
  } });

  /* gazzâlî / ibn rüşd: ok iki yana sallanır */
  yuz("gazzali", { enter: function (c) {
    if (c.static) return;
    c.after(1500, function () { c.animate(c.$(".vs"), { scale: [1, 1.25, 1], rotate: [0, 180, 360] }, { duration: 4, repeat: Infinity, ease: "easeInOut" }); });
  } });

  /* NOMA: iki daire önce yaklaşır, dokunmadan geri çekilir */
  yuz("noma", { enter: function (c) {
    var d = c.$("#noma-d"), b = c.$("#noma-b");
    if (c.static) return;
    d.animate([{ translate: "-200px 0", opacity: 0 }, { translate: "0 0", opacity: 1 }], { duration: 1200, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" });
    b.animate([{ translate: "200px 0", opacity: 0 }, { translate: "0 0", opacity: 1 }], { duration: 1200, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" });
    c.after(1400, function () {
      c.animate(d, { x: [0, 18, 0] }, { duration: 3, repeat: Infinity, ease: "easeInOut" });
      c.animate(b, { x: [0, -18, 0] }, { duration: 3, repeat: Infinity, ease: "easeInOut" });
    });
  }, reset: function (c) { [c.$("#noma-d"), c.$("#noma-b")].forEach(function (e) { e.getAnimations().forEach(function (x) { x.cancel(); }); }); } });

  /* Lemaître: genişleyen evren — noktalar merkezden uzaklaşır, galaksiler halka olur */
  var uc = doc.querySelector("#lemaitre canvas.univ");
  Deck.scene("lemaitre", {
    enter: function (c) {
      var g = uc.getContext("2d"), r = rng(5), P = [];
      for (var i = 0; i < 420; i++) P.push({ a: r() * 6.283, d: Math.pow(r(), .7), s: r() * 2 + .4, c: r() < .2 ? "232,182,90" : r() < .5 ? "127,178,255" : "243,234,215" });
      var cx = 1420, cy = 560;
      function draw(t) {
        g.clearRect(0, 0, 1920, 1080);
        var R = 80 + 900 * (1 - Math.exp(-t / 5));
        var core = g.createRadialGradient(cx, cy, 0, cx, cy, 260);
        core.addColorStop(0, "rgba(246,210,139," + Math.max(.05, .55 - t * .05) + ")"); core.addColorStop(1, "rgba(246,210,139,0)");
        g.fillStyle = core; g.beginPath(); g.arc(cx, cy, 260, 0, 6.283); g.fill();
        for (var i = 0; i < P.length; i++) {
          var p = P[i], dd = p.d * R, x = cx + Math.cos(p.a + t * .02) * dd, y = cy + Math.sin(p.a + t * .02) * dd * .62;
          if (x < 900) continue;
          g.fillStyle = "rgba(" + p.c + "," + Math.min(1, .3 + p.d) + ")";
          g.beginPath(); g.arc(x, y, p.s, 0, 6.283); g.fill();
        }
      }
      if (c.static) { draw(9); return; }
      var t0 = null; c.loop(function (t) { if (t0 === null) t0 = t; draw(t - t0); });
    }
  });

  /* dikkat: "?" kutusu yanıp söner */
  yuz("dikkat", { enter: function (c) {
    if (c.static) return;
    var s = $$(".shift span", c.el); c.after(3600, function () { c.animate(s[s.length - 1], { opacity: [1, .25, 1] }, { duration: 1.4, repeat: Infinity }); });
  } });

  yuz("bugun", { enter: function (c) {
    if (c.static) return;
    c.after(1600, function () { $$(".tcard svg", c.el).forEach(function (s, i) { c.animate(s, i === 1 ? { rotate: [0, 360] } : { y: [0, -10] }, { duration: i === 1 ? 18 : 2.4 + i * .3, repeat: Infinity, repeatType: i === 1 ? "loop" : "reverse", ease: i === 1 ? "linear" : "easeInOut" }); }); });
  } });

  yuz("sonuc"); yuz("kaynakca"); yuz("yz-formu");

  /* sınıfa soru: büyük soru işareti süzülür, 30 saniyelik düşünme halkası geri sayar */
  ["soru-1", "soru-3", "soru-4"].forEach(function (id, i) {
    Deck.scene(id, {
      enter: function (c) {
        gokyuzu(c, 71 + i, 160);
        var big = c.$(".qbig"), fg = c.$(".qr-fg"), tx = c.$(".qr-t");
        fg.style.strokeDashoffset = "0"; tx.textContent = "30";
        if (c.static) return;
        c.animate(big, { rotate: [-6, 6], y: [-20, 20] }, { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" });
        c.after(1200, function () {
          var t0 = null;
          c.loop(function (t) {
            if (t0 === null) t0 = t;
            var k = Math.min(1, (t - t0) / 30);
            fg.style.strokeDashoffset = String(540.4 * k);
            tx.textContent = String(Math.ceil(30 * (1 - k)));
            fg.style.stroke = k > .8 ? "#F08A7E" : "";
          });
        });
      },
      reset: function (c) { var fg = c.$(".qr-fg"); fg.style.strokeDashoffset = "0"; fg.style.stroke = ""; c.$(".qr-t").textContent = "30"; }
    });
  });
})();
