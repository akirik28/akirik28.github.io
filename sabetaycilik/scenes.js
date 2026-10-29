/* ============================================================
   Sabetaycılık — sahneye özel hareketler (motor: /assets/deck/deck.js)
   ============================================================ */
(function () {
  "use strict";
  if (!window.Deck) return;
  var NS = "http://www.w3.org/2000/svg", doc = document;
  function $$(s, el) { return [].slice.call((el || doc).querySelectorAll(s)); }
  function rng(seed) { return function () { seed = (seed + 0x6D2B79F5) | 0; var t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

  /* yıldızlı gökyüzü + kayan yıldız */
  function Sky(cv, seed, n) {
    var r = rng(seed), g = cv.getContext("2d"), S = [], shoot = null;
    for (var i = 0; i < n; i++) S.push({ x: r() * 1920, y: r() * 1080, s: r() * 1.8 + .3, p: r() * 6.28, v: .4 + r() * 1.6, c: r() < .14 ? "233,162,59" : r() < .3 ? "88,199,184" : "243,234,215" });
    this.draw = function (t) {
      g.clearRect(0, 0, 1920, 1080);
      for (var i = 0; i < S.length; i++) {
        var a = S[i], o = .35 + .45 * (.5 + .5 * Math.sin(t * a.v + a.p));
        g.fillStyle = "rgba(" + a.c + "," + o.toFixed(3) + ")";
        g.beginPath(); g.arc((a.x + t * a.s * 3) % 1920, a.y, a.s, 0, 6.283); g.fill();
      }
      if (!shoot && r() < .006) shoot = { x: 200 + r() * 1500, y: r() * 400, life: 0 };
      if (shoot) {
        shoot.life += .016; var L = shoot.life, sx = shoot.x + L * 900, sy = shoot.y + L * 360;
        var grd = g.createLinearGradient(sx, sy, sx - 160, sy - 64);
        grd.addColorStop(0, "rgba(245,199,122," + Math.max(0, 1 - L * 1.4) + ")"); grd.addColorStop(1, "rgba(245,199,122,0)");
        g.strokeStyle = grd; g.lineWidth = 2; g.beginPath(); g.moveTo(sx, sy); g.lineTo(sx - 160, sy - 64); g.stroke();
        if (L > .8) shoot = null;
      }
    };
  }
  function gokyuzu(c, seed) {
    var cv = c.$("canvas.stars"); if (!cv) return;
    var sky = cv._sky || (cv._sky = new Sky(cv, seed, 170));
    if (c.static) { sky.draw(3); return; }
    c.loop(function (t) { sky.draw(t); });
  }

  /* kapak: on sekiz nokta (on sekiz emir) halka üzerinde döner */
  var dots = doc.getElementById("cv-dots");
  if (dots) for (var k = 0; k < 18; k++) {
    var a = k / 18 * Math.PI * 2, d = doc.createElementNS(NS, "circle");
    d.setAttribute("cx", 390 + Math.cos(a) * 300); d.setAttribute("cy", 390 + Math.sin(a) * 300);
    d.setAttribute("r", k % 3 === 0 ? 9 : 6); d.setAttribute("class", "dt"); dots.appendChild(d);
  }
  Deck.scene("kapak", {
    enter: function (c) {
      gokyuzu(c, 3);
      if (c.static) return;
      dots.style.transformOrigin = "390px 390px"; dots.style.transformBox = "view-box";
      dots.animate([{ rotate: "0deg" }, { rotate: "360deg" }], { duration: 60000, iterations: Infinity });
      $$("circle", dots).forEach(function (d, i) { d.animate([{ opacity: .25 }, { opacity: 1 }, { opacity: .25 }], { duration: 3600, delay: i * 200, iterations: Infinity }); });
      c.animate(c.$(".glow.g1"), { opacity: [.35, .7] }, { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" });
      c.animate(c.$(".glow.g2"), { opacity: [.7, .35] }, { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" });
    },
    reset: function () { dots.getAnimations().forEach(function (x) { x.cancel(); }); $$("circle", dots).forEach(function (d) { d.getAnimations().forEach(function (x) { x.cancel(); }); }); }
  });

  /* yolculuk: nokta rota üzerinde İzmir'den Ülgün'e yürür, tekrar başlar */
  Deck.scene("yolculuk", {
    enter: function (c) {
      gokyuzu(c, 5);
      var p = c.$("#route-p"), w = c.$("#route-w"), L = p.getTotalLength();
      function at(k) { var pt = p.getPointAtLength(L * k); w.setAttribute("cx", pt.x); w.setAttribute("cy", pt.y); }
      if (c.static) { at(.62); return; }
      var t0 = null;
      c.after(2400, function () { c.loop(function (t) { if (t0 === null) t0 = t; at(((t - t0) / 7) % 1); }); });
      c.after(2800, function () { $$(".city circle", c.el).forEach(function (ci, i) { c.animate(ci, { scale: [1, 1.35, 1] }, { duration: 1.2, delay: i * .4, repeat: Infinity, repeatDelay: 1.4 }); }); });
    }
  });

  /* ihtida: ok nabız atar, iki kart hafifçe birbirine yaklaşır */
  Deck.scene("ihtida", {
    enter: function (c) {
      gokyuzu(c, 7);
      if (c.static) return;
      c.after(1500, function () {
        c.animate(c.$(".arrow svg"), { x: [-10, 14] }, { duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" });
        var s = $$(".side", c.el); c.animate(s[0], { y: [0, -8] }, { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }); c.animate(s[1], { y: [0, 8] }, { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" });
      });
    }
  });

  /* topluluk: kollar sırayla parlar */
  Deck.scene("topluluk", {
    enter: function (c) {
      gokyuzu(c, 9);
      if (c.static) return;
      c.after(2400, function () { $$(".br circle", c.el).forEach(function (ci, i) { c.animate(ci, { scale: [1, 1.1, 1] }, { duration: 1.6, delay: i * .5, repeat: Infinity, repeatDelay: 1 }); }); c.animate(c.$(".root circle"), { scale: [1, 1.06, 1] }, { duration: 2.4, repeat: Infinity }); });
    }
  });

  Deck.scene("selanik", {
    enter: function (c) {
      gokyuzu(c, 11);
      if (c.static) return;
      c.after(2200, function () { $$(".ev .dot", c.el).forEach(function (d, i) { c.animate(d, { scale: [1, 1.5, 1] }, { duration: 1.2, delay: i * .3, repeat: Infinity, repeatDelay: 1.6 }); }); });
    }
  });

  Deck.scene("onyargi", {
    enter: function (c) {
      gokyuzu(c, 13);
      if (c.static) return;
      var w = $$(".wcard", c.el);
      c.after(1600, function () { c.animate(w[0], { rotate: [0, -1.2, 1.2, 0] }, { duration: .6, repeat: Infinity, repeatDelay: 2.6 }); c.animate(w[1], { y: [0, -10] }, { duration: 2.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }); });
    }
  });

  ["kavramlar", "sonuc", "kaynakca", "yz-formu"].forEach(function (id, i) { Deck.scene(id, { enter: function (c) { gokyuzu(c, 21 + i); } }); });

  /* sınıfa soru: soru işareti süzülür, 30 sn düşünme halkası */
  ["soru-1", "soru-2", "soru-3"].forEach(function (id, i) {
    Deck.scene(id, {
      enter: function (c) {
        gokyuzu(c, 31 + i);
        var big = c.$(".qbig"), fg = c.$(".qr-fg"), tx = c.$(".qr-t");
        fg.style.strokeDashoffset = "0"; tx.textContent = "30";
        if (c.static) return;
        c.animate(big, { rotate: [-6, 6], y: [-20, 20] }, { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" });
        c.after(1200, function () {
          var t0 = null;
          c.loop(function (t) {
            if (t0 === null) t0 = t;
            var k = Math.min(1, (t - t0) / 30);
            fg.style.strokeDashoffset = String(540.4 * k); tx.textContent = String(Math.ceil(30 * (1 - k)));
            fg.style.stroke = k > .8 ? "#F08A7E" : "";
          });
        });
      },
      reset: function (c) { var fg = c.$(".qr-fg"); fg.style.strokeDashoffset = "0"; fg.style.stroke = ""; c.$(".qr-t").textContent = "30"; }
    });
  });
})();
