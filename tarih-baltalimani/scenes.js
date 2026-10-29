/* ============================================================
   1838 Baltalimanı — sahneye özel hareketler (motor: /assets/deck/deck.js)
   ============================================================ */
(function () {
  "use strict";
  if (!window.Deck) return;
  var NS = "http://www.w3.org/2000/svg", doc = document;
  function $$(s, el) { return [].slice.call((el || doc).querySelectorAll(s)); }
  function rng(seed) { return function () { seed = (seed + 0x6D2B79F5) | 0; var t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function still(c) { return c.instant || Deck.reduced || c.static; }
  function cancelAll(el) { if (el) el.getAnimations().forEach(function (a) { a.cancel(); }); }

  /* ---------- deniz parıltısı: her sahnedeki canvas.sea ---------- */
  function Sea(cv, seed, n) {
    var r = rng(seed), g = cv.getContext("2d"), P = [];
    for (var i = 0; i < n; i++) P.push({ x: r() * 1920, y: r() * 1080, s: r() * 1.6 + .4, p: r() * 6.28, v: .3 + r() * 1.2, dx: 4 + r() * 10, c: r() < .2 ? "217,164,65" : r() < .5 ? "95,195,188" : "242,235,221" });
    this.draw = function (t) {
      g.clearRect(0, 0, 1920, 1080);
      for (var i = 0; i < P.length; i++) {
        var a = P[i], o = .12 + .3 * (.5 + .5 * Math.sin(t * a.v + a.p));
        var x = (a.x + t * a.dx) % 1960 - 20, y = a.y + Math.sin(t * .4 + a.p) * 8;
        g.fillStyle = "rgba(" + a.c + "," + o.toFixed(3) + ")";
        g.beginPath(); g.arc(x, y, a.s, 0, 6.283); g.fill();
      }
    };
  }
  function deniz(c, seed, n) {
    var cv = c.$("canvas.sea"); if (!cv) return;
    var s = cv._sea || (cv._sea = new Sea(cv, seed, n || 120));
    if (c.static) { s.draw(3); return; }
    c.loop(function (t) { s.draw(t); });
  }

  /* ---------- 01 kapak: dalgalar akar, gemi yalpalar ---------- */
  function wavePath(amp, len, base, phase) {
    var d = "M0 300 L0 " + base;
    for (var x = 0; x <= 1920; x += 20) d += " L" + x + " " + (base + Math.sin(x / len * 6.283 + phase) * amp + Math.sin(x / (len * .43) + phase * 1.7) * amp * .35).toFixed(1);
    return d + " L1920 300 Z";
  }
  Deck.scene("kapak", {
    enter: function (c) {
      deniz(c, 7, 160);
      var w = $$(".waves .w", c.el), ship = c.$("#ship");
      function at(t) {
        w[0].setAttribute("d", wavePath(18, 520, 90, t * .9));
        w[1].setAttribute("d", wavePath(14, 380, 140, -t * 1.2 + 1));
        w[2].setAttribute("d", wavePath(10, 300, 200, t * 1.5 + 2));
      }
      at(0);
      if (c.static) return;
      c.loop(function (t) { at(t); });
      ship.animate([{ rotate: "-3deg", translate: "0 0" }, { rotate: "3deg", translate: "0 10px" }], { duration: 3200, iterations: Infinity, direction: "alternate", easing: "ease-in-out" });
      c.animate(c.$(".glow.g1"), { opacity: [.3, .6] }, { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" });
    },
    reset: function (c) { cancelAll(c.$("#ship")); }
  });

  /* ---------- genel sahneler ---------- */
  var seeds = { icindekiler: 11, soru: 13, sanayi: 17, yedivahid: 19, mehmedali: 23, belge: 29, yorum: 31, vergiler: 37, domino: 41, terazi: 43, saha: 47, sonuc: 53, sorular: 59, kaynakca: 61, "yz-formu": 67 };
  function yuz(id, extra) {
    extra = extra || {};
    Deck.scene(id, {
      enter: function (c) { deniz(c, seeds[id], 110); if (extra.enter) extra.enter(c); },
      step: extra.step, reset: extra.reset, leave: extra.leave
    });
  }
  ["icindekiler", "soru", "belge", "yorum", "vergiler", "saha", "sonuc", "sorular", "kaynakca", "yz-formu"].forEach(function (id) {
    if (id === "belge" || id === "saha") return;
    yuz(id);
  });

  /* 04 sanayi: dişli döner, bacalardan duman yükselir */
  var smoke = doc.getElementById("smoke");
  if (smoke) for (var k = 0; k < 14; k++) {
    var ci = doc.createElementNS(NS, "circle");
    ci.setAttribute("cx", k % 2 ? 495 : 585); ci.setAttribute("cy", k % 2 ? 190 : 140); ci.setAttribute("r", 18);
    smoke.appendChild(ci);
  }
  yuz("sanayi", {
    enter: function (c) {
      var gear = c.$("#gear");
      if (c.static) return;
      gear.animate([{ rotate: "0deg" }, { rotate: "360deg" }], { duration: 9000, iterations: Infinity });
      $$("#smoke circle", c.el).forEach(function (s, i) {
        s.animate([
          { translate: "0 0", scale: ".5", opacity: 0 },
          { translate: "10px -60px", scale: "1", opacity: .9, offset: .25 },
          { translate: "60px -190px", scale: "2.2", opacity: 0 }
        ], { duration: 4200, delay: i * 300, iterations: Infinity, easing: "ease-out" });
      });
    },
    reset: function (c) { cancelAll(c.$("#gear")); $$("#smoke circle", c.el).forEach(cancelAll); }
  });

  /* 05 yed-i vâhid: oklar akar; damgadan sonra devlet kutusu söner */
  yuz("yedivahid", {
    enter: function (c) {
      if (c.static) return;
      $$(".arr", c.el).forEach(function (a, i) { a.animate([{ opacity: .35 }, { opacity: 1 }, { opacity: .35 }], { duration: 1600, delay: i * 400, iterations: Infinity }); });
    },
    step: function (n, c) {
      var st = c.$(".before .node.st");
      if (n >= 1) { st.style.transition = c.instant ? "none" : "opacity .8s .3s, filter .8s .3s"; st.style.opacity = ".35"; st.style.filter = "grayscale(1)"; }
      else { st.style.opacity = ""; st.style.filter = ""; }
    },
    reset: function (c) { var st = c.$(".before .node.st"); st.style.opacity = ""; st.style.filter = ""; st.style.transition = ""; $$(".arr", c.el).forEach(cancelAll); }
  });

  /* 06 Mehmed Ali: kırmızı nokta Kahire'den Kütahya'ya yürür */
  yuz("mehmedali", {
    enter: function (c) {
      var route = c.$("#route"), army = c.$("#army"), L = route.getTotalLength();
      function at(f) { var p = route.getPointAtLength(L * f); army.setAttribute("cx", p.x); army.setAttribute("cy", p.y); }
      if (still(c)) { at(1); return; }
      at(0); army.style.opacity = 0;
      c.after(1500, function () {
        army.style.opacity = 1;
        var t0 = null;
        c.loop(function (t) {
          if (t0 === null) t0 = t;
          var f = ((t - t0) / 5) % 1.25; at(Math.min(1, f));
        });
      });
    },
    reset: function (c) { c.$("#army").style.opacity = ""; }
  });

  /* 07 belge: kâğıt hafifçe süzülür */
  yuz("belge", {
    enter: function (c) {
      if (c.static) return;
      c.after(1400, function () { c.animate(c.$(".paper"), { y: [0, -8] }, { duration: 3.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }); });
    }
  });

  /* 10 domino: taşlar sırayla devrilir */
  yuz("domino", {
    enter: function (c) {
      var tiles = $$(".dom i", c.el);
      if (still(c)) { tiles.forEach(function (t) { t.style.rotate = "28deg"; }); return; }
      tiles.forEach(function (t) { t.style.rotate = "0deg"; });
      c.after(900, function () {
        tiles.forEach(function (t, i) {
          var a = t.animate([{ rotate: "0deg" }, { rotate: "34deg", offset: .7 }, { rotate: "28deg" }], { duration: 700, delay: i * 260, easing: "cubic-bezier(.5,0,.75,0)", fill: "forwards" });
          a.onfinish = function () { t.style.rotate = "28deg"; a.cancel(); };
          t.parentNode.animate([{ opacity: .55 }, { opacity: 1 }], { duration: 400, delay: i * 260, fill: "backwards" });
        });
      });
    },
    reset: function (c) { $$(".dom i", c.el).forEach(function (t) { cancelAll(t); t.style.rotate = ""; }); $$(".dom > div", c.el).forEach(cancelAll); }
  });

  /* 11 terazi: önce sallanır, adımda "açık pazar"a doğru eğilir */
  function tilt(c, deg, instant) {
    var beam = c.$("#beam"), pl = c.$("#panL"), pr = c.$("#panR");
    [beam, pl, pr].forEach(cancelAll);
    var o = { duration: instant ? 0 : 1400, easing: "cubic-bezier(.34,1.4,.64,1)", fill: "forwards" };
    beam.animate([{ rotate: (beam._r || 0) + "deg" }, { rotate: deg + "deg" }], o);
    pl.animate([{ rotate: -(beam._r || 0) + "deg" }, { rotate: -deg + "deg" }], o);
    pr.animate([{ rotate: -(beam._r || 0) + "deg" }, { rotate: -deg + "deg" }], o);
    beam._r = deg;
  }
  yuz("terazi", {
    enter: function (c) {
      var beam = c.$("#beam"), pl = c.$("#panL"), pr = c.$("#panR");
      beam._r = 0;
      if (still(c)) return;
      c.after(1000, function () {
        if (beam._r) return;
        var o = { duration: 2600, iterations: Infinity, direction: "alternate", easing: "ease-in-out" };
        beam.animate([{ rotate: "-2.5deg" }, { rotate: "2.5deg" }], o);
        pl.animate([{ rotate: "2.5deg" }, { rotate: "-2.5deg" }], o);
        pr.animate([{ rotate: "2.5deg" }, { rotate: "-2.5deg" }], o);
      });
    },
    step: function (n, c) { tilt(c, n >= 1 ? -6 : 0, c.instant); },
    reset: function (c) { ["#beam", "#panL", "#panR"].forEach(function (s) { cancelAll(c.$(s)); }); c.$("#beam")._r = 0; }
  });

  /* 12 sahadan: yer tutucu çerçeve nefes alır */
  yuz("saha", {
    enter: function (c) {
      if (c.static || !c.$(".slot > div")) return;
      c.after(1200, function () { c.animate(c.$(".slot"), { opacity: [1, .7] }, { duration: 1.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }); });
    }
  });
})();
