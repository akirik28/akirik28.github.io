/* ============================================================
   STEM & BUDS Türkiye · tanıtım toplantısı — özel hareketler
   Motor: /assets/deck/deck.js (değiştirilmedi)
   ============================================================ */
(function () {
  "use strict";
  if (!window.Deck) return;
  var POP = "cubic-bezier(0.34, 1.56, 0.64, 1)", EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
  var NS = "http://www.w3.org/2000/svg";

  function wa(c, el, kf, o) {
    o = Object.assign({ fill: "both", easing: EASE }, o || {});
    if (c.instant) { o.duration = 0; o.delay = 0; }
    var a = el.animate(kf, o);
    (c.el.__wa || (c.el.__wa = [])).push(a);
    return a;
  }
  function killWA(sc) { (sc.__wa || []).forEach(function (a) { try { a.cancel(); } catch (e) {} }); sc.__wa = []; }
  function snap(c, fn) {
    if (!c.instant) { fn(); return; }
    var sc = c.el; sc.classList.add("instant"); fn(); void sc.offsetWidth;
    requestAnimationFrame(function () { requestAnimationFrame(function () { sc.classList.remove("instant"); }); });
  }
  function ease(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function atStep(c) { return parseInt(c.el.getAttribute("data-at") || "0", 10) || 0; }
  function clearT(list) { list.forEach(function (e) { e.style.transform = ""; }); }

  /* ========================================================== 01 KAPAK */
  Deck.scene("kapak", {
    enter: function (c) {
      [[".lf1", 1500], [".lf2", 1750], [".bud", 2050]].forEach(function (p) {
        wa(c, c.$(".sprout " + p[0]), [{ scale: "0" }, { scale: "1" }], { duration: 900, delay: p[1], easing: POP });
      });
      var obs = c.$$(".ob"), N = obs.length, cx = 320, cy = 400;
      c.loop(function (t) {
        for (var i = 0; i < N; i++) {
          var a = t * 0.22 + i * (Math.PI * 2 / N);
          var x = cx + Math.cos(a) * 262, y = cy + Math.sin(a) * 300 + Math.sin(t * 1.6 + i) * 8;
          obs[i].style.transform = "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px)";
        }
        c.$(".sprout .bud").style.rotate = (Math.sin(t * 1.3) * 3).toFixed(2) + "deg";
      });
    },
    reset: function (r) { killWA(r.el); clearT(r.$$(".ob")); r.$(".sprout .bud").style.rotate = ""; }
  });

  /* ========================================================== 02 MERAK */
  Deck.scene("merak", {
    enter: function (c) {
      var bq = c.$$(".bq"), qm = c.$(".qm");
      c.loop(function (t) {
        for (var i = 0; i < bq.length; i++) {
          bq[i].style.transform = "translateY(" + (Math.sin(t * 1.1 + i * 1.7) * 10).toFixed(1) + "px) rotate(" + (Math.sin(t * .7 + i) * 1.1).toFixed(2) + "deg)";
        }
        qm.style.transform = "rotate(" + (Math.sin(t * 2.2) * 12).toFixed(1) + "deg)";
      });
    },
    reset: function (r) { clearT(r.$$(".bq")); r.$(".qm").style.transform = ""; }
  });

  /* ========================================================== 03 STEM */
  Deck.scene("stem", {
    enter: function (c) {
      var L = c.$$(".lt b");
      c.loop(function (t) {
        for (var i = 0; i < L.length; i++) L[i].style.transform = "translateY(" + (Math.sin(t * 1.4 + i * .9) * 6).toFixed(1) + "px)";
      });
    },
    reset: function (r) { clearT(r.$$(".lt b")); }
  });

  /* ========================================================== 05 TAKIM */
  Deck.scene("takim", {
    enter: function (c) {
      var g = c.$(".tpulse"), paths = [c.$("#tl1"), c.$("#tl2")], dots = [];
      g.innerHTML = "";
      paths.forEach(function (p, i) {
        var L = p.getTotalLength();
        for (var k = 0; k < 2; k++) {
          var gl = document.createElementNS(NS, "circle"), cc = document.createElementNS(NS, "circle");
          gl.setAttribute("r", 22); gl.setAttribute("class", "pg"); cc.setAttribute("r", 7); cc.setAttribute("class", "pc");
          g.appendChild(gl); g.appendChild(cc);
          dots.push({ p: p, L: L, step: i + 1, off: k * .5, rev: k === 1, g: gl, c: cc });
        }
      });
      c.loop(function (t) {
        var at = atStep(c);
        dots.forEach(function (d) {
          var on = at >= d.step;
          var ph = (t / 2.6 + d.off) % 1, s = d.rev ? 1 - ph : ph;
          var f = on ? Math.min(1, ph * 6, (1 - ph) * 6) : 0;
          var pt = d.p.getPointAtLength(s * d.L);
          d.g.setAttribute("cx", pt.x); d.g.setAttribute("cy", pt.y); d.c.setAttribute("cx", pt.x); d.c.setAttribute("cy", pt.y);
          d.g.style.opacity = f * .9; d.c.style.opacity = f;
        });
      });
    },
    reset: function (r) { r.$(".tpulse").innerHTML = ""; }
  });

  /* ========================================================== 06 CHAPTER'LAR */
  Deck.scene("chapterlar", {
    step: function (n, c) { snap(c, function () { var k = c.$('.card[data-n="' + n + '"]'); if (k) k.classList.add("on"); }); },
    reset: function (r) { r.$$(".card").forEach(function (k) { k.classList.remove("on"); }); }
  });

  /* ========================================================== 07 YOLCULUK */
  var STOPS = [[150, 820], [560, 600], [960, 830], [1360, 600], [1780, 760]];
  Deck.scene("yolculuk", {
    enter: function (c) {
      var road = c.$("#road"), L = road.getTotalLength(), w = c.$(".walker");
      if (!road.__stops) {
        road.__stops = STOPS.map(function (s) {
          var best = 0, bd = 1e12;
          for (var l = 0; l <= L; l += 4) { var p = road.getPointAtLength(l), d = (p.x - s[0]) * (p.x - s[0]) + (p.y - s[1]) * (p.y - s[1]); if (d < bd) { bd = d; best = l; } }
          return best;
        });
      }
      var st = c.__walk = { from: 0, to: road.__stops[0], t0: -10, cur: road.__stops[0], stops: road.__stops };
      w.style.opacity = 0;
      if (!c.instant) wa(c, w, [{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 2000 });
      else w.style.opacity = 1;
      c.loop(function (t) {
        st.now = t;
        var k = ease(clamp((t - st.t0) / 1.5));
        st.cur = st.from + (st.to - st.from) * k;
        var p = road.getPointAtLength(st.cur);
        var bob = Math.sin(t * 5) * 4;
        w.setAttribute("transform", "translate(" + p.x.toFixed(1) + " " + (p.y - 4 + bob).toFixed(1) + ")");
      });
    },
    step: function (n, c) {
      var st = c.__walk; if (!st) return;
      n = Math.min(n, st.stops.length - 1);
      st.from = c.instant ? st.stops[n] : st.cur; st.to = st.stops[n]; st.t0 = c.instant ? -10 : (st.now || 0);
    },
    reset: function (r) { killWA(r.el); var w = r.$(".walker"); w.removeAttribute("transform"); w.style.opacity = ""; }
  });

  /* ========================================================== 08 HAFTA */
  Deck.scene("hafta", {
    enter: function (c) {
      var orb = c.$(".orb"), items = c.$$(".cy"), mid = c.$(".cy-mid b"), lastLap = 0;
      c.loop(function (t) {
        var at = atStep(c), T = 6;
        var a = -Math.PI / 2 + (t / T) * Math.PI * 2;
        orb.setAttribute("transform", "translate(" + (320 + Math.cos(a) * 250).toFixed(1) + " " + (320 + Math.sin(a) * 250).toFixed(1) + ")");
        var q = Math.floor((((t / T) % 1) * 4 + .5)) % 4;
        for (var i = 0; i < 4; i++) items[i].classList.toggle("lit", at > i && q === i);
        if (at >= 4) {
          if (!c.__lap0) c.__lap0 = t;
          var lap = Math.min(10, 1 + Math.floor((t - c.__lap0) / T));
          if (lap !== lastLap) { lastLap = lap; mid.textContent = lap; }
        }
      });
    },
    reset: function (r) { r.$$(".cy").forEach(function (e) { e.classList.remove("lit"); }); r.$(".cy-mid b").textContent = "1"; r.$(".orb").removeAttribute("transform"); }
  });

  /* ========================================================== 09 ÖRNEK */
  var FINAL = [9, 14, 5];   // örnek veri (cm): beyaz, mor, yeşil
  function setGrowth(c, k) {
    c.$$(".pot").forEach(function (p, i) {
      var h = FINAL[i] * (i === 1 ? Math.pow(k, .85) : k);
      p.querySelector(".plant").style.setProperty("--h", h.toFixed(2));
      p.querySelector("output").textContent = (Math.round(h * 10) / 10).toLocaleString("tr-TR");
    });
    c.$(".day output").textContent = Math.round(k * 14);
  }
  Deck.scene("ornek", {
    step: function (n, c) {
      if (n === 3) {
        if (c.instant) { setGrowth(c, 1); return; }
        var t0 = null;
        c.loop(function (t) { if (t0 === null) t0 = t; var k = clamp((t - t0 - .4) / 4); setGrowth(c, k); });
      }
      if (n === 4) snap(c, function () { c.$(".p-p").classList.add("win"); });
    },
    reset: function (r) {
      r.$$(".pot").forEach(function (p) { p.classList.remove("win"); p.querySelector(".plant").style.removeProperty("--h"); p.querySelector("output").textContent = "0"; });
      r.$(".day output").textContent = "0";
    }
  });

  /* ========================================================== 11 KAZANIM */
  Deck.scene("kazanim", {
    enter: function (c) {
      var b = c.$$(".bdg i");
      c.loop(function (t) {
        for (var i = 0; i < b.length; i++) b[i].style.transform = "rotate(" + (Math.sin(t * 1.5 + i * .8) * 6).toFixed(1) + "deg) translateY(" + (Math.sin(t * 2 + i) * 5).toFixed(1) + "px)";
      });
    },
    reset: function (r) { clearT(r.$$(".bdg i")); }
  });

  /* ========================================================== 13 BEKLENTİ */
  Deck.scene("beklenti", {
    step: function (n, c) {
      if (n === 5 && !c.instant) {
        wa(c, c.$(".stamp"), [{ rotate: "0deg" }, { rotate: "-6deg" }, { rotate: "0deg" }], { duration: 500, delay: 700, fill: "none" });
      }
    },
    reset: function (r) { killWA(r.el); }
  });

  /* ========================================================== 15 SORULAR */
  var COLORS = ["#8DC63F", "#4C6FFF", "#FF8A3D", "#22A861", "#A35BFF", "#E8A800", "#FF5D8F", "#FFFFFF"];
  Deck.scene("sorular", {
    enter: function (c) {
      var q = c.$$(".qms span"), R = [];
      for (var i = 0; i < q.length; i++) R.push({ x: 120 + (i * 233) % 1680, y: 120 + ((i * 397) % 840), s: .6 + (i % 4) * .25, sp: .3 + (i % 3) * .15 });
      var cv = c.$(".confetti"), ctx = cv.getContext("2d"), parts = [];
      c.__burst = function () {
        parts = [];
        for (var k = 0; k < 220; k++) {
          var side = k % 2 ? 1 : -1;
          parts.push({ x: side > 0 ? 1920 + 20 : -20, y: 700 + Math.random() * 300,
            vx: -side * (700 + Math.random() * 1300), vy: -(900 + Math.random() * 900),
            r: Math.random() * Math.PI, vr: (Math.random() - .5) * 12, w: 12 + Math.random() * 14, h: 8 + Math.random() * 10,
            col: COLORS[k % COLORS.length], leaf: k % 5 === 0 });
        }
      };
      c.loop(function (t, dt) {
        for (var i = 0; i < q.length; i++) {
          var r = R[i];
          q[i].style.transform = "translate(" + (r.x + Math.sin(t * r.sp + i) * 40).toFixed(1) + "px," + (r.y + Math.cos(t * r.sp * 1.3 + i) * 30).toFixed(1) + "px) scale(" + r.s + ") rotate(" + (Math.sin(t + i) * 14).toFixed(1) + "deg)";
        }
        ctx.clearRect(0, 0, 1920, 1080);
        for (var j = 0; j < parts.length; j++) {
          var p = parts[j];
          p.vy += 1400 * dt; p.vx *= (1 - .7 * dt); p.vy *= (1 - .4 * dt);
          p.x += p.vx * dt; p.y += p.vy * dt; p.r += p.vr * dt;
          if (p.y > 1150) continue;
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.col;
          if (p.leaf) { ctx.beginPath(); ctx.ellipse(0, 0, p.w * .8, p.h * .5, 0, 0, Math.PI * 2); ctx.fill(); }
          else ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * .6);
          ctx.restore();
        }
      });
    },
    step: function (n, c) { if (n === 1 && !c.instant && !c.static && c.__burst) c.after(250, c.__burst); },
    reset: function (r) { clearT(r.$$(".qms span")); var cv = r.$(".confetti"); cv.getContext("2d").clearRect(0, 0, 1920, 1080); }
  });
})();
