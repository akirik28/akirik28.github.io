/* MOTIV — sahneye özel hareketler (deck.js kancaları) */
(function () {
  "use strict";
  var D = window.Deck;
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return [].slice.call((el || document).querySelectorAll(s)); }
  function rnd(a, b) { return a + Math.random() * (b - a); }
  var SVGNS = "http://www.w3.org/2000/svg";

  /* maskot: şablonu her .toasty içine koy */
  var tpl = $("#toasty-tpl");
  $$(".toasty").forEach(function (el, i) {
    var c = tpl.content.cloneNode(true);
    // her kopyada degrade kimlikleri benzersiz olsun
    $$("[id]", c).forEach(function (g) { var nid = g.id + i; $$("[fill='url(#" + g.id + ")']", c).forEach(function (p) { p.setAttribute("fill", "url(#" + nid + ")"); }); g.id = nid; });
    el.appendChild(c);
  });

  /* kıvılcımlar (kapak, ateş, kapanış) */
  function embers(c, canvas) {
    var ctx2 = canvas.getContext("2d"), W = canvas.width = 1920, H = canvas.height = 1080;
    var n = +canvas.getAttribute("data-n") || 80, ps = [];
    function spawn(p, first) {
      p.x = rnd(0, W); p.y = first ? rnd(0, H) : H + rnd(0, 60);
      p.vy = rnd(28, 110); p.r = rnd(1.2, 3.8); p.ph = rnd(0, 6.28); p.sw = rnd(10, 40); p.a = rnd(.25, .9);
      p.hue = Math.random() < .7 ? "255,150,60" : "255,205,110";
    }
    for (var i = 0; i < n; i++) { var p = {}; spawn(p, true); ps.push(p); }
    function draw(t, dt) {
      ctx2.clearRect(0, 0, W, H);
      ctx2.globalCompositeOperation = "lighter";
      ps.forEach(function (p) {
        p.y -= p.vy * dt; if (p.y < -20) spawn(p);
        var x = p.x + Math.sin(t * 1.3 + p.ph) * p.sw, life = Math.min(1, (H - p.y) / 300) * Math.min(1, p.y / 400);
        var a = p.a * life * (.65 + .35 * Math.sin(t * 7 + p.ph));
        var g = ctx2.createRadialGradient(x, p.y, 0, x, p.y, p.r * 4);
        g.addColorStop(0, "rgba(" + p.hue + "," + a + ")"); g.addColorStop(1, "rgba(" + p.hue + ",0)");
        ctx2.fillStyle = g; ctx2.beginPath(); ctx2.arc(x, p.y, p.r * 4, 0, 6.283); ctx2.fill();
      });
    }
    draw(0, 0);
    if (!D.reduced) c.loop(draw);
  }
  function emberScene(id) { D.scene(id, { enter: function (c) { var cv = c.$("canvas.embers"); if (cv) embers(c, cv); } }); }

  function bar(c, el, pct, delay, dur) {
    if (!el) return;
    if (c.instant) { el.style.width = pct + "%"; return; }
    el.style.width = "0%";
    el.animate([{ width: "0%" }, { width: pct + "%" }], { duration: (dur || 1.4) * 1000, delay: (delay || 0) * 1000, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" });
  }

  /* 01 kapak */
  D.scene("kapak", {
    enter: function (c) { var cv = c.$("canvas.embers"); embers(c, cv); bar(c, c.$(".kxp"), 25, 1.4); },
    reset: function (c) { var x = c.$(".kxp"); if (x) { x.getAnimations().forEach(function (a) { a.cancel(); }); x.style.width = ""; } }
  });
  emberScene("ates");
  emberScene("son");

  /* 02 1.440 dakika: 240 çizgi = her biri 6 dakika; son 24 çizgi = 144 dk = 2 sa 24 dk */
  (function () {
    var g = $("#dakika .ticks");
    for (var i = 0; i < 240; i++) {
      var a = (i / 240) * Math.PI * 2 - Math.PI / 2, r1 = 360, r2 = i % 10 === 0 ? 410 : 392;
      var l = document.createElementNS(SVGNS, "line");
      l.setAttribute("x1", (Math.cos(a) * r1).toFixed(1)); l.setAttribute("y1", (Math.sin(a) * r1).toFixed(1));
      l.setAttribute("x2", (Math.cos(a) * r2).toFixed(1)); l.setAttribute("y2", (Math.sin(a) * r2).toFixed(1));
      l.setAttribute("class", "tk"); g.appendChild(l);
    }
  })();
  D.scene("dakika", {
    enter: function (c) {
      var ticks = c.$$(".tk");
      ticks.forEach(function (t, i) {
        if (c.instant) { t.style.opacity = 1; return; }
        t.style.opacity = 0;
        t.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, delay: 200 + i * 8, fill: "forwards" });
      });
    },
    step: function (n, c) {
      if (n !== 1) return;
      c.$$(".tk").slice(216).forEach(function (t, k) {
        t.classList.add("lost");
        if (!c.instant) t.animate([{ stroke: "#2B3E5C", strokeWidth: 5 }, { stroke: "#FF7A1A", strokeWidth: 9 }, { stroke: "#FF7A1A", strokeWidth: 5 }], { duration: 700, delay: k * 35, easing: "ease-out" });
      });
    },
    reset: function (c) { c.$$(".tk").forEach(function (t) { t.getAnimations().forEach(function (a) { a.cancel(); }); t.style.opacity = ""; t.classList.remove("lost"); }); }
  });

  /* 03 bitmeyen akış */
  (function () {
    var f = $("#akis .feed"), cols = [["#FF8A5B", "#FFB23F"], ["#7FB8FF", "#B98CFF"], ["#2FCB86", "#7FE3C0"], ["#FF5E8A", "#FF9A5C"], ["#5B7CFF", "#7FE0FF"], ["#C084FC", "#F472B6"]];
    for (var k = 0; k < 2; k++) cols.forEach(function (c) { var d = document.createElement("div"); d.className = "post"; d.style.setProperty("--c1", c[0]); d.style.setProperty("--c2", c[1]); f.appendChild(d); });
  })();
  D.scene("akis", {
    enter: function (c) {
      var f = c.$(".feed"), half = 6 * (300 + 14), y = 0;
      if (D.reduced || c.static) return;
      c.loop(function (t, dt) {
        var v = Math.min(1500, 90 + t * t * 55);              // giderek hızlanan kaydırma
        y = (y + v * dt) % half;
        f.style.transform = "translateY(" + (-y) + "px)";
        f.style.filter = "blur(" + Math.min(6, v / 260).toFixed(2) + "px)";
      });
    },
    reset: function (c) { var f = c.$(".feed"); f.style.transform = f.style.filter = ""; }
  });

  /* 04 risk çubukları: 1× = %40 genişlik */
  D.scene("beyin", {
    enter: function (c) {
      c.$$(".fill").forEach(function (el, i) {
        var w = Math.min(100, 40 * parseFloat(el.getAttribute("data-to")));
        if (c.instant) { el.style.width = w + "%"; return; }
        el.style.width = "0%";
        el.animate([{ width: "0%" }, { width: "40%", offset: .35 }, { width: w + "%" }], { duration: 1900, delay: 900 + i * 350, easing: "cubic-bezier(.65,0,.35,1)", fill: "forwards" });
      });
    },
    reset: function (c) { c.$$(".fill").forEach(function (el) { el.getAnimations().forEach(function (a) { a.cancel(); }); el.style.width = ""; }); }
  });

  /* 05 bulaşan kaydırma */
  D.scene("bulas", {
    enter: function (c) {
      var cv = c.$("canvas.crowd"), x = cv.getContext("2d"), W = cv.width = 1920, H = cv.height = 1080;
      var COLS = 24, ROWS = 6, sx = 72, sy = 84, ox = (W - (COLS - 1) * sx) / 2, oy = 100, P = [];
      for (var r = 0; r < ROWS; r++) for (var q = 0; q < COLS; q++) P.push({ x: ox + q * sx + (r % 2 ? sx / 2 : 0), y: oy + r * sy, t: -1, r: r, q: q });
      function nb(p) { return P.filter(function (o) { return o !== p && Math.abs(o.x - p.x) < sx * 1.1 && Math.abs(o.y - p.y) < sy * 1.1; }); }
      P.forEach(function (p) { p.n = nb(p); });
      var clock = 0, done = 0;
      function seed() { P.forEach(function (p) { p.t = -1; }); var s = P[Math.floor(ROWS / 2) * COLS + Math.floor(COLS / 2)]; s.t = 0; clock = 0; done = 0; }
      seed();
      if (c.instant || D.reduced) P.forEach(function (p) { p.t = 9; });
      function draw(t, dt) {
        clock += dt;
        if (!(c.instant || D.reduced)) {
          var all = true;
          P.forEach(function (p) {
            if (p.t >= 0) { p.t += dt; if (p.t > .5) p.n.forEach(function (o) { if (o.t < 0 && Math.random() < dt * 0.9) o.t = 0; }); }
            else all = false;
          });
          if (all) { done += dt; if (done > 2.6) seed(); }
        }
        x.clearRect(0, 0, W, H);
        P.forEach(function (p) {
          var k = p.t < 0 ? 0 : Math.min(1, p.t / .6), fade = done > 1.8 ? 1 - (done - 1.8) / .8 : 1;
          var hx = p.x, hy = p.y + k * 6;
          // omuzlar
          x.fillStyle = k ? "rgba(70,96,140," + (.55 * fade + .2) + ")" : "rgba(255,243,226,.16)";
          x.beginPath(); x.ellipse(hx, hy + 34, 22, 14, 0, Math.PI, 0); x.fill();
          // baş
          x.fillStyle = k ? "rgba(150,175,215," + (.6 * fade + .25) + ")" : "rgba(255,243,226,.32)";
          x.beginPath(); x.arc(hx, hy, 13, 0, 6.283); x.fill();
          if (k > 0) { // telefon ışığı
            var g = x.createRadialGradient(hx, hy + 18, 0, hx, hy + 18, 46);
            g.addColorStop(0, "rgba(127,184,255," + (.55 * k * fade) + ")"); g.addColorStop(1, "rgba(127,184,255,0)");
            x.fillStyle = g; x.beginPath(); x.arc(hx, hy + 18, 46, 0, 6.283); x.fill();
            x.fillStyle = "rgba(200,225,255," + (.95 * k * fade + .05) + ")"; x.fillRect(hx - 6, hy + 16, 12, 18);
          }
        });
      }
      draw(0, 0);
      c.loop(draw);
    }
  });

  /* 06 ateş: maskot ateşlenir */
  D.scene("ates", {
    enter: function (c) {
      var cv = c.$("canvas.embers"); embers(c, cv);
      var g = c.$(".glow");
      if (!c.instant && !D.reduced) c.after(1900, function () { g.animate([{ opacity: 1 }, { opacity: .55 }, { opacity: 1 }], { duration: 2600, iterations: Infinity, easing: "ease-in-out" }); });
    }
  });

  /* 07 döngü: koşucu çember üzerinde dolaşır, düğümler yanar, maskot her turda büyür */
  D.scene("dongu", {
    enter: function (c) {
      var run = c.$(".runner"), nodes = c.$$(".node"), sv = c.$(".toasty svg"), ang = [-90, 0, 90, 180];
      sv.style.transformOrigin = "50% 100%";
      if (D.reduced) { nodes.forEach(function (n) { n.classList.add("on"); }); return; }
      var P = 6.4;
      c.loop(function (t) {
        var tt = Math.max(0, t - 1.2), ph = (tt % P) / P, a = -90 + ph * 360, rad = a * Math.PI / 180;
        run.setAttribute("cx", (470 + Math.cos(rad) * 330).toFixed(1)); run.setAttribute("cy", (470 + Math.sin(rad) * 330).toFixed(1));
        nodes.forEach(function (n, i) { var d = Math.abs(((a - ang[i]) % 360 + 540) % 360 - 180); n.classList.toggle("on", tt > 0 && d < 30); });
        sv.style.transform = "scale(" + (0.84 + 0.22 * ph).toFixed(3) + ")";
      });
    },
    reset: function (c) { c.$$(".node").forEach(function (n) { n.classList.remove("on"); }); var sv = c.$(".toasty svg"); if (sv) sv.style.transform = ""; }
  });

  /* 08 hedef seçimi + yazma */
  D.scene("hedef", {
    enter: function (c) {
      var o1 = c.$(".o1"), ty = c.$(".typed"), ph = c.$(".ph"), btn = c.$(".startj"), txt = "Reduce social media to 1 hour daily";
      function fin() { o1.classList.add("sel"); ph.style.display = "none"; ty.textContent = txt; btn.classList.add("pulse"); }
      if (c.instant || D.reduced) { fin(); return; }
      c.after(1300, function () {
        o1.classList.add("sel"); ph.style.display = "none";
        var i = 0; c.every(42, function () { if (i <= txt.length) ty.textContent = txt.slice(0, i++); else if (!btn.classList.contains("pulse")) btn.classList.add("pulse"); });
      });
    },
    reset: function (c) { c.$(".o1").classList.remove("sel"); c.$(".typed").textContent = ""; c.$(".ph").style.display = ""; c.$(".startj").classList.remove("pulse"); }
  });

  /* 09 görev tamamla */
  D.scene("gorev", {
    step: function (n, c) {
      if (n !== 1) return;
      var t1 = c.$(".t1"), a = c.$(".t1 .go a"), toast = c.$(".toast");
      t1.classList.add("done"); a.textContent = "Done ✓"; a.style.background = "#2FCB86";
      var bp = c.$(".bp"), bm = c.$(".bm");
      if (c.instant || D.reduced) { bp.textContent = "250"; bm.textContent = "30m"; }
      else if (c.M) {
        c.M.animate(210, 250, { duration: 1.2, delay: .5, onUpdate: function (v) { bp.textContent = Math.round(v); } });
        c.M.animate(10, 30, { duration: 1.2, delay: .6, onUpdate: function (v) { bm.textContent = Math.round(v) + "m"; } });
      }
      c.after(2600, function () { toast.animate([{ opacity: 1, translate: "0 0" }, { opacity: 0, translate: "0 -30px" }], { duration: c.instant ? 0 : 500, fill: "forwards", easing: "ease-in" }); });
    },
    reset: function (c) {
      var t1 = c.$(".t1"), a = c.$(".t1 .go a"), toast = c.$(".toast");
      t1.classList.remove("done"); a.textContent = "Start Task"; a.style.background = "";
      c.$(".bp").textContent = "210"; c.$(".bm").textContent = "10m";
      toast.getAnimations().forEach(function (x) { x.cancel(); });
    }
  });

  /* 10 pano */
  D.scene("pano", {
    enter: function (c) { bar(c, c.$(".pxp"), 25, 1.3); },
    reset: function (c) { var x = c.$(".pxp"); x.getAnimations().forEach(function (a) { a.cancel(); }); x.style.width = ""; }
  });

  /* 12 alev: XP dolarken alev büyür; seri kaybolunca söner */
  D.scene("alev", {
    enter: function (c) {
      var sv = c.$(".av svg"), xp = c.$(".fxp"), ax = c.$(".axp");
      sv.style.transformOrigin = "50% 100%";
      if (c.instant || D.reduced) { sv.style.transform = "scale(1)"; xp.style.width = "81.7%"; ax.textContent = "2450"; return; }
      sv.style.transform = "scale(.5)";
      xp.style.width = "0%";
      sv.animate([{ transform: "scale(.5)" }, { transform: "scale(1)" }], { duration: 1900, delay: 500, easing: "cubic-bezier(.34,1.56,.64,1)", fill: "forwards" });
      xp.animate([{ width: "0%" }, { width: "81.7%" }], { duration: 1900, delay: 500, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" });
      if (c.M) c.M.animate(0, 2450, { duration: 1.9, delay: .5, ease: [.16, 1, .3, 1], onUpdate: function (v) { ax.textContent = Math.round(v); } });
    },
    step: function (n, c) {
      if (n !== 1) return;
      var sv = c.$(".av svg");
      sv.getAnimations().forEach(function (a) { a.cancel(); });
      if (c.instant || D.reduced) { sv.style.transform = "scale(.55)"; sv.style.filter = "grayscale(.85) brightness(.8)"; return; }
      sv.animate([{ transform: "scale(1)", filter: "grayscale(0) brightness(1)" }, { transform: "scale(.55)", filter: "grayscale(.85) brightness(.8)" }], { duration: 1400, easing: "cubic-bezier(.65,0,.35,1)", fill: "forwards" });
    },
    reset: function (c) {
      var sv = c.$(".av svg"), xp = c.$(".fxp");
      [sv, xp].forEach(function (e) { e.getAnimations().forEach(function (a) { a.cancel(); }); });
      sv.style.transform = sv.style.filter = ""; xp.style.width = "";
    }
  });

  /* 13 rakip tablosu (satırlar ve işaretler motorun data-a'sıyla açılır) */
  (function () {
    var Y = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7"/></svg>', X = '<svg viewBox="0 0 24 24"><path d="M7 7l10 10M17 7L7 17"/></svg>';
    var rows = [
      ["Blocking social media", 1, 1, 1, 1], ["Customisability", 1, 1, 1, 1], ["Addresses time management", 0, 1, 0, 1],
      ["Productivity tracking &amp; analytics", 1, 1, 0, 1], ["Parental control", 0, 0, 0, 1],
      ["No cost for additional features", 0, 0, 1, 1], ["No third-party data sharing", 1, 0, 0, 1]
    ];
    $("#rakip .tb").innerHTML = rows.map(function (r, i) {
      var only = r[1] + r[2] + r[3] === 0, d0 = .55 + i * .16;
      return '<tr' + (only ? ' class="only"' : "") + '><td data-a="left" data-d="' + d0.toFixed(2) + '">' + r[0] + "</td>" +
        [1, 2, 3, 4].map(function (k) {
          return "<td" + (k === 4 ? ' class="us"' : "") + '><span class="' + (r[k] ? "y" : "n") + '" data-a="pop" data-d="' + (d0 + .12 + k * .07 + (k === 4 ? .25 : 0)).toFixed(2) + '">' + (r[k] ? Y : X) + "</span></td>";
        }).join("") + "</tr>";
    }).join("");
  })();

  /* 17 reklam: film şeridi kendiliğinden akar */
  D.scene("reklam", {
    enter: function (c) {
      var strip = c.$(".strip"), tcn = c.$(".tcn"), k = 0, N = 6, W = 850;
      function show(i, inst) {
        k = i; tcn.textContent = "SCENE " + (i + 1) + " / " + N;
        var to = "translateX(" + (-i * W) + "px)";
        if (inst || D.reduced) { strip.style.transform = to; return; }
        var from = strip.style.transform || "translateX(0px)";
        strip.animate([{ transform: from }, { transform: to }], { duration: 1100, easing: "cubic-bezier(.65,0,.35,1)", fill: "forwards" }).finished.then(function () { strip.style.transform = to; }, function () {});
      }
      show(0, true);
      if (!c.static) c.every(3600, function () { show((k + 1) % N); });
    },
    reset: function (c) { var s = c.$(".strip"); s.getAnimations().forEach(function (a) { a.cancel(); }); s.style.transform = ""; }
  });
})();
