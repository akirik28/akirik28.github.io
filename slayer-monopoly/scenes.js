/* ============================================================
   SLAYER — özel hareketler
   - Kenardaki tahta: 50 kare. Kırmızı piyon her sahnede ilerler
     (eğitim sahnesinde hapse düşer, sonda Başla'ya döner).
   - Zarlar (3B), çevrilen kartlar, dağıtılan kartlar, sayaçlar.
   Motor: /assets/deck/deck.js (değiştirilmedi)
   ============================================================ */
(function () {
  "use strict";
  var D = window.Deck;
  if (!D) return;
  var doc = document;
  var stage = doc.querySelector(".deck-stage");
  var RM = !!D.reduced;
  var EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
  var INOUT = "cubic-bezier(0.65, 0, 0.35, 1)";
  var POP = "cubic-bezier(0.34, 1.56, 0.64, 1)";
  var SVGNS = "http://www.w3.org/2000/svg";

  /* ---------- temizlik kaydı: her sahnenin kendi animasyonları ---------- */
  var REG = {};
  function R(id) { return REG[id] || (REG[id] = { a: [], s: [] }); }
  function inst(c) { return !!(c.instant || RM); }
  // WAAPI: anlık modda süre 0 → son hâl hemen gelir; sahne sıfırlanınca iptal edilir
  function wa(c, el, kf, o) {
    if (!el || !el.animate) return null;
    o = Object.assign({ fill: "both", easing: EASE }, o || {});
    if (inst(c)) { o.duration = 0; o.delay = 0; o.iterations = 1; }
    var a = el.animate(kf, o);
    R(c.el.id).a.push(a);
    return a;
  }
  function cls(c, el, name, on) {
    if (!el) return;
    el.classList.toggle(name, on !== false);
    R(c.el.id).s.push(function () { el.classList.remove(name); });
  }
  function onReset(c, f) { R(c.el.id).s.push(f); }
  function cleanup(id) {
    var r = REG[id]; if (!r) return;
    r.a.forEach(function (a) { try { a.cancel(); } catch (e) {} });
    r.s.forEach(function (f) { try { f(); } catch (e) {} });
    REG[id] = { a: [], s: [] };
  }
  function $$(sel, el) { return [].slice.call((el || doc).querySelectorAll(sel)); }
  function rnd(seed) { var s = seed || 1; return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }

  /* ---------- piyon ---------- */
  var PAWN_PATH = "M20 2a8.6 8.6 0 0 1 5.4 15.3c3.1.9 5.1 2.4 5.1 4.2 0 1.2-1 2.3-2.7 3.1L30.6 40c4.6 1.3 7.4 3.5 7.4 6.1v1.6c0 2.6-8 4.6-18 4.6S2 50.3 2 47.7v-1.6c0-2.6 2.8-4.8 7.4-6.1l2.8-15.4c-1.7-.8-2.7-1.9-2.7-3.1 0-1.8 2-3.3 5.1-4.2A8.6 8.6 0 0 1 20 2z";
  var gid = 0;
  function pawnSVG() {
    var id = "pg" + (++gid);
    return '<svg viewBox="0 0 40 54" aria-hidden="true"><defs>' +
      '<linearGradient id="' + id + '" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#FF7466"/><stop offset=".45" stop-color="#D9302C"/><stop offset="1" stop-color="#7A0E12"/></linearGradient></defs>' +
      '<path d="' + PAWN_PATH + '" fill="url(#' + id + ')" stroke="#4A0709" stroke-width="1.3"/>' +
      '<ellipse cx="16.5" cy="8" rx="3" ry="2.2" fill="rgba(255,255,255,.45)"/>' +
      '<path d="M11 21.5c2.5 1.2 15.5 1.2 18 0" stroke="rgba(0,0,0,.35)" stroke-width="1.2" fill="none"/></svg>';
  }

  /* ============================================================
     KENARDAKİ TAHTA
     ============================================================ */
  var Board = (function () {
    var W = 1920, H = 1080, DD = 60, L = 120, N = 50;
    var COL = { BR: "var(--br)", LB: "var(--lb)", PK: "var(--pk)", OR: "var(--or)", RD: "var(--rd)", YE: "var(--ye)", GR: "var(--gr)", DB: "var(--db)" };
    var SEQ = ("BR CH BR BR TX ST LB CN LB LB LB PK UT PK PK " +
               "PK ST OR CH OR OR OR TX " +
               "RD CN RD RD RD ST YE YE UT YE YE CH GR GR GR " +
               "GR CH ST DB CN DB TX DB").split(" ");
    var IC = {
      CN: '<path d="M10.5 10.5a4.5 4.5 0 1 1 6.6 4c-1.4.8-2.1 1.7-2.1 3.2V19"/><circle cx="15" cy="23.5" r="1.3" fill="rgba(244,236,216,.6)" stroke="none"/>',
      CH: '<rect x="5" y="10" width="20" height="14" rx="2"/><path d="M5 15.5h20"/><rect x="13" y="13.5" width="4" height="4" rx=".8"/>',
      TX: '<path d="M15 5 25 15 15 25 5 15Z"/><path d="M15 10v10"/>',
      ST: '<rect x="8" y="5" width="14" height="16" rx="3"/><path d="M8 13h14"/><circle cx="11.5" cy="17.2" r=".9"/><circle cx="18.5" cy="17.2" r=".9"/><path d="M10 24l-2 3M20 24l2 3"/>',
      UT: '<path d="M15 4.5a6.5 6.5 0 0 0-3.8 11.8c.8.6 1.3 1.5 1.3 2.5V21h5v-2.2c0-1 .5-1.9 1.3-2.5A6.5 6.5 0 0 0 15 4.5z"/><path d="M12.5 24.5h5"/>',
      GO: '<path d="M25 15H6M12 9l-6 6 6 6"/>',
      JAIL: '<rect x="6" y="6" width="18" height="18" rx="1.5"/><path d="M10.5 6v18M15 6v18M19.5 6v18"/>',
      PARK: '<circle cx="15" cy="15" r="10"/><path d="M12.3 20.5V9.5h3.6a3.2 3.2 0 0 1 0 6.4h-3.6"/>',
      GOJ: '<path d="M7 23 22 8M13 8h9v9"/>'
    };
    function rect(i) {
      i = ((i % N) + N) % N;
      if (i === 0) return { x: W - DD, y: H - DD, w: DD, h: DD, s: "c" };
      if (i < 16) return { x: W - DD - i * L, y: H - DD, w: L, h: DD, s: "b" };
      if (i === 16) return { x: 0, y: H - DD, w: DD, h: DD, s: "c" };
      if (i < 25) return { x: 0, y: H - DD - (i - 16) * L, w: DD, h: L, s: "l" };
      if (i === 25) return { x: 0, y: 0, w: DD, h: DD, s: "c" };
      if (i < 41) return { x: DD + (i - 26) * L, y: 0, w: L, h: DD, s: "t" };
      if (i === 41) return { x: W - DD, y: 0, w: DD, h: DD, s: "c" };
      return { x: W - DD, y: DD + (i - 42) * L, w: DD, h: L, s: "r" };
    }
    function center(i) {
      var r = rect(i), cx = r.x + r.w / 2, cy = r.y + r.h / 2;
      // piyon bandın üstüne değil, karenin iç kısmına basar
      if (r.s === "b") cy += 5; else if (r.s === "t") cy -= 3; else if (r.s === "l") cx -= 5; else if (r.s === "r") cx += 5;
      return [cx, cy + 6];
    }
    var el = doc.createElement("div");
    el.className = "board"; el.setAttribute("aria-hidden", "true");
    var html = '<div class="rim"></div><div class="rim-in"></div>';
    var k = 0, sqTypes = [];
    for (var i = 0; i < N; i++) {
      var r = rect(i), type, cl = "sq " + r.s;
      if (r.s === "c") type = i === 0 ? "GO" : i === 16 ? "JAIL" : i === 25 ? "PARK" : "GOJ";
      else type = SEQ[k++];
      sqTypes.push(type);
      if (type === "GO") cl += " go";
      var inner = "";
      if (COL[type]) inner = '<b class="band" style="--c:' + COL[type] + '"></b><span class="house"><i></i></span>';
      else inner = '<svg viewBox="0 0 30 30">' + IC[type] + "</svg>";
      html += '<div class="' + cl + '" data-i="' + i + '" style="left:' + r.x + "px;top:" + r.y + "px;width:" + r.w + "px;height:" + r.h + 'px">' + inner + "</div>";
    }
    html += '<div class="token"><div class="tb">' + pawnSVG() + "</div></div>";
    el.innerHTML = html;
    stage.appendChild(el);
    var sqs = $$(".sq", el), tok = el.querySelector(".token"), tb = el.querySelector(".tb");
    var cur = null, running = [];

    function setPos(p) { var c = center(p); tok.style.translate = c[0] + "px " + c[1] + "px"; }
    function markHere(p) {
      sqs.forEach(function (s) { s.classList.remove("here"); });
      sqs[((p % N) + N) % N].classList.add("here");
    }
    function stop() { running.forEach(function (a) { try { a.cancel(); } catch (e) {} }); running = []; }

    function goTo(target, instant) {
      stop();
      if (cur === null || instant || RM || target === cur) { cur = target; setPos(target); markHere(target); return; }
      var from = cur; cur = target;
      sqs.forEach(function (s) { s.classList.remove("here"); });
      var p0 = center(from), p1 = center(target);
      // geri gidişte ya da uzun atlamada süzülerek
      if (target < from || target - from > 12) {
        setPos(target);
        var g = tok.animate([{ translate: p0[0] + "px " + p0[1] + "px" }, { translate: p1[0] + "px " + p1[1] + "px" }], { duration: 650, easing: INOUT });
        running.push(g);
        g.finished.then(function () { markHere(target); }, function () {});
        return;
      }
      var hops = target - from, per = 150, kf = [];
      for (var j = 0; j <= hops; j++) {
        var c2 = center(from + j);
        kf.push({ translate: c2[0] + "px " + c2[1] + "px", offset: j / hops, easing: "cubic-bezier(.35,0,.3,1)" });
      }
      setPos(target);
      var a = tok.animate(kf, { duration: per * hops, delay: 380 });
      var b = tb.animate([{ translate: "0 0", scale: "1 1" }, { translate: "0 -22px", scale: "1 1", offset: .45 }, { translate: "0 0", scale: "1.12 .88", offset: .9 }, { translate: "0 0", scale: "1 1" }],
        { duration: per, iterations: hops, delay: 380, easing: "ease-out" });
      running.push(a, b);
      a.finished.then(function () { markHere(target); }, function () {});
    }

    var domOn = false;
    function dominate(on, instant, delay) {
      if (on === domOn && !instant) return;
      domOn = on;
      var base = cur === null ? 0 : cur;
      if (instant || RM) {
        el.classList.add("instant");
        sqs.forEach(function (s) { s.style.transitionDelay = ""; s.classList.toggle("dom", on); });
        void el.offsetWidth;
        el.classList.remove("instant");
        return;
      }
      sqs.forEach(function (s, i) {
        var d = (((i - base) % N) + N) % N;
        var ms = (delay || 0) + d * (on ? 26 : 12);
        s.style.transitionDelay = ms + "ms";
        var hs = s.querySelector(".house"); if (hs) hs.style.transitionDelay = (ms + 120) + "ms";
        s.classList.toggle("dom", on);
      });
    }
    function alert(i) {
      var s = sqs[i]; if (!s) return;
      s.classList.remove("alert"); void s.offsetWidth; s.classList.add("alert");
    }
    return { goTo: goTo, dominate: dominate, alert: alert, center: center, el: el };
  })();

  /* ============================================================
     ZAR (3B)
     ============================================================ */
  var PIPS = { 1: [5], 2: [3, 7], 3: [3, 5, 7], 4: [1, 3, 7, 9], 5: [1, 3, 5, 7, 9], 6: [1, 3, 4, 6, 7, 9] };
  var FACE = { 1: [0, 0], 2: [-90, 0], 3: [0, -90], 4: [0, 90], 5: [90, 0], 6: [0, 180] };
  function makeDie(size) {
    var w = doc.createElement("div");
    w.className = "die-w"; w.style.setProperty("--s", size + "px");
    var faces = [1, 2, 3, 4, 5, 6].map(function (n) {
      return '<div class="f f' + n + '">' + PIPS[n].map(function (p) {
        return '<i style="grid-area:' + Math.ceil(p / 3) + "/" + (((p - 1) % 3) + 1) + '"></i>';
      }).join("") + "</div>";
    }).join("");
    w.innerHTML = '<div class="die-sh"></div><div class="die-p"><div class="die"><b class="core"></b><b class="core cx"></b><b class="core cy"></b>' + faces + "</div></div>";
    return w;
  }
  function dieTf(face, z, sx, sy) {
    var r = FACE[face];
    return "rotateX(-16deg) rotateY(14deg) rotateZ(" + z + "deg) rotateX(" + (r[0] + sx) + "deg) rotateY(" + (r[1] + sy) + "deg)";
  }
  // o: {face, z, from:[dx,dy], delay(ms), dur(ms)}
  function roll(c, w, o) {
    var die = w.querySelector(".die"), sh = w.querySelector(".die-sh");
    var dur = o.dur || 1500, dl = o.delay || 0, fx = o.from[0], fy = o.from[1];
    wa(c, die, [{ transform: dieTf(o.face, o.z - 220, 720 + (o.sx || 90), -540 + (o.sy || 0)) }, { transform: dieTf(o.face, o.z, 0, 0) }],
      { duration: dur, delay: dl, easing: "cubic-bezier(.15,.65,.25,1)" });
    wa(c, w, [
      { translate: fx + "px " + fy + "px", scale: "1.9", opacity: 0, offset: 0 },
      { opacity: 1, offset: .06 },
      { translate: (fx * .12) + "px " + (fy * .12) + "px", scale: "1", offset: .5 },
      { translate: (fx * .04) + "px " + (fy * .04) + "px", scale: "1.12", offset: .64 },
      { translate: "0px 0px", scale: "1", offset: .78 },
      { translate: "0px 0px", scale: "1.025", offset: .88 },
      { translate: "0px 0px", scale: "1", opacity: 1, offset: 1 }
    ], { duration: dur, delay: dl, easing: "cubic-bezier(.3,.5,.4,1)" });
    wa(c, sh, [{ translate: "70px 110px", opacity: 0, scale: "1.5" }, { translate: "40px 60px", opacity: .5, scale: "1.2", offset: .3 }, { translate: "10px 16px", opacity: 1, scale: "1" }],
      { duration: dur * .78, delay: dl, easing: "ease-out" });
  }
  function diceIn(spot, specs) {
    if (spot.__dice) return spot.__dice;
    spot.__dice = specs.map(function (s) {
      var w = makeDie(s.size); w.style.left = s.x + "px"; w.style.top = s.y + "px"; spot.appendChild(w); return w;
    });
    return spot.__dice;
  }

  /* ============================================================
     YARDIMCI HAREKETLER
     ============================================================ */
  // 3B kartı çevir (arka → ön)
  function flip(c, card, delay, dur) {
    var inn = card.querySelector(".flip-in");
    wa(c, inn, [
      { transform: "translateZ(0px) rotateY(0deg)" },
      { transform: "translateZ(160px) rotateY(95deg)", offset: .5 },
      { transform: "translateZ(0px) rotateY(180deg)" }
    ], { duration: dur || 950, delay: delay || 0, easing: INOUT });
  }
  function numVar(el, name, def) { var v = parseFloat(getComputedStyle(el).getPropertyValue(name)); return isNaN(v) ? def : v; }

  /* ============================================================
     SAHNELER
     ============================================================ */
  var H = {};
  // piyonun her sahnedeki karesi (0 = Başla, 16 = hapis, 50 = tekrar Başla)
  var POS = { kapak: 0, gorev: 3, kaynaklar: 6, tahta: 9, yollar: 12, rota: 14, egitim: 16, hedef: 20, slayer: 24, ilkeler: 28, grafik: 32, sec: 36, skor: 40, hakimiyet: 45, tesekkur: 50 };

  /* 01 · KAPAK — kartlar dağıtılır, iki zar atılır */
  H.kapak = {
    enter: function (c) {
      var deed = c.$(".k-deed"), ch = c.$(".k-chance");
      wa(c, deed, [{ translate: "420px -160px", rotate: "34deg", opacity: 0 }, { translate: "0 0", rotate: "9deg", opacity: 1 }], { duration: 1100, delay: 250 });
      wa(c, ch, [{ translate: "520px 120px", rotate: "-40deg", opacity: 0 }, { translate: "0 0", rotate: "-13deg", opacity: 1 }], { duration: 1100, delay: 420 });
      var dice = diceIn(c.$(".dice-spot"), [{ size: 150, x: 196, y: 628 }, { size: 150, x: 404, y: 584 }]);
      roll(c, dice[0], { face: 5, z: -14, from: [460, -520], delay: 900, dur: 1550, sx: 90 });
      roll(c, dice[1], { face: 6, z: 18, from: [300, -600], delay: 1020, dur: 1650, sy: 180 });
    }
  };

  /* 02 · GÖREV — soru işaretleri dolaşır, kart çevrilir */
  H.gorev = {
    enter: function (c) {
      var f = c.$(".qfield");
      if (!f.__q) {
        var r = rnd(7), q = [];
        for (var i = 0; i < 18; i++) {
          var s = doc.createElement("span");
          s.textContent = "?";
          var size = 70 + r() * 190;
          s.style.fontSize = size + "px";
          s.style.opacity = (0.05 + r() * 0.09).toFixed(3);
          f.appendChild(s);
          q.push({ el: s, x: r() * 1800, y: r() * 960, v: 10 + r() * 22, a: r() * 6.28, w: 0.4 + r() * 0.6, size: size });
        }
        f.__q = q;
      }
      var Q = f.__q;
      c.loop(function (t) {
        if (RM && c.__still) return; c.__still = true;   // hareket azaltılmışsa tek kare
        Q.forEach(function (o) {
          var y = ((o.y - t * o.v) % 1150 + 1150) % 1150 - 190;
          var x = o.x + Math.sin(t * o.w + o.a) * 26;
          o.el.style.translate = x.toFixed(1) + "px " + y.toFixed(1) + "px";
          o.el.style.rotate = (Math.sin(t * o.w * .7 + o.a) * 12).toFixed(1) + "deg";
        });
      });
      // kart desteden çekilir: destenin üstünden kalkıp masanın ortasına gelir
      wa(c, c.$(".g-deck"), [{ opacity: 0, translate: "-60px 40px" }, { opacity: 1, translate: "0 0" }], { duration: 700, delay: 150 });
      wa(c, c.$(".g-card"), [
        { translate: "-880px 15px", scale: ".445", rotate: "-8deg", opacity: 0, offset: 0 },
        { translate: "-880px 15px", scale: ".445", rotate: "-8deg", opacity: 1, offset: .12 },
        { translate: "-520px -120px", scale: ".8", rotate: "-12deg", opacity: 1, offset: .5 },
        { translate: "0 0", scale: "1", rotate: "-3deg", opacity: 1, offset: 1 }
      ], { duration: 1300, delay: 700, easing: "cubic-bezier(.45,0,.2,1)" });
    },
    step: function (n, c) {
      if (n !== 1) return;
      var card = c.$(".g-card");
      wa(c, card, [{ scale: "1" }, { scale: "1.06", offset: .45 }, { scale: "1" }], { duration: 1000, easing: INOUT });
      flip(c, card, 0, 1000);
      wa(c, c.$(".qfield"), [{ opacity: 1 }, { opacity: .25 }], { duration: 900 });
      wa(c, c.$(".g-lead"), [{ opacity: 1 }, { opacity: 0 }], { duration: 400 });
    }
  };

  /* 03 · KAYNAKLAR — banknotlar bankadan dağıtılır */
  H.kaynaklar = {
    enter: function (c) {
      c.$$(".bill").forEach(function (b, i) {
        var left = parseFloat(b.style.left), top = parseFloat(b.style.top), r = numVar(b, "--r", 0);
        wa(c, b, [
          { translate: (960 - 270 - left) + "px " + (1160 - top) + "px", rotate: (r + (i - 1) * 18) + "deg", opacity: 0 },
          { opacity: 1, offset: .2 },
          { translate: "0 0", rotate: r + "deg", opacity: 1 }
        ], { duration: 1150, delay: 300 + i * 220 });
        var n = b.querySelector(".bill-n");
        c.count(n, parseFloat(n.getAttribute("data-to")), { from: 0, duration: 1.2, delay: 0.7 + i * 0.22 });
      });
    }
  };

  /* 04 · TAHTA — fotoğraflar masaya düşer (vurgular data-step ile) */
  H.tahta = {
    enter: function (c) {
      c.$$(".ph").forEach(function (p, i) {
        var r = numVar(p, "--r", 0);
        wa(c, p, [{ opacity: 0, scale: "1.18", translate: "0 -50px", rotate: (r - 8 + i * 6) + "deg" }, { opacity: 1, scale: "1", translate: "0 0", rotate: r + "deg" }],
          { duration: 900, delay: 250 + i * 200 });
      });
    }
  };

  /* 05 · DÖRT YOL — kartlar kapalı dağıtılır, her tıklamada biri açılır */
  H.yollar = {
    enter: function (c) {
      var rot = [-2.5, 1.5, -1, 2];
      c.$$(".ap").forEach(function (a, i) {
        var left = parseFloat(a.style.left);
        wa(c, a, [{ translate: (960 - 190 - left) + "px 760px", rotate: (i * 9 - 14) + "deg", opacity: 0 }, { opacity: 1, offset: .15 }, { translate: "0 0", rotate: rot[i] + "deg", opacity: 1 }],
          { duration: 1000, delay: 200 + i * 140 });
      });
    },
    step: function (n, c) {
      var a = c.$$(".ap")[n - 1];
      if (!a) return;
      wa(c, a.querySelector(".flip-in"), [{ translate: "0 0" }, { translate: "0 -26px", offset: .5 }, { translate: "0 0" }], { duration: 900, easing: INOUT });
      flip(c, a, 0, 900);
    }
  };

  /* 06 · ROTA — piyon kare kare ilerler, düşer, kalkar, tur tamamlanır */
  var RX = [375, 765, 1155, 1545], RY = 452;
  function pawnXY(x, y) { return (x - 43) + "px " + (y - 112) + "px"; }
  H.rota = {
    enter: function (c) {
      var pw = c.$(".pawn-big");
      if (!pw.__b) { pw.querySelector(".pawn-hop").innerHTML = pawnSVG(); pw.__b = 1; }
      c.__at = 0;
      wa(c, pw, [{ translate: pawnXY(RX[0], RY - 260), opacity: 0 }, { translate: pawnXY(RX[0], RY), opacity: 1 }], { duration: 700, delay: 500, easing: "cubic-bezier(.5,0,.75,0)" });
      wa(c, pw.querySelector(".pawn-hop"), [{ scale: "1 1" }, { scale: "1.15 .85", offset: .5 }, { scale: "1 1" }], { duration: 360, delay: 1200, fill: "none" });
      var sq = c.$$(".rsq");
      cls(c, sq[0], "on");
      wa(c, c.$(".r-back"), [{ strokeDasharray: "1400", strokeDashoffset: "1400" }, { strokeDasharray: "1400", strokeDashoffset: "1400" }], { duration: 0 });
      wa(c, c.$(".r-back-head"), [{ opacity: 0 }, { opacity: 0 }], { duration: 0 });
    },
    step: function (n, c) {
      var pw = c.$(".pawn-big"), hop = pw.querySelector(".pawn-hop"), sq = c.$$(".rsq");
      function jump(i, delay) {
        var from = RX[i - 1], to = RX[i];
        wa(c, pw, [{ translate: pawnXY(from, RY) }, { translate: pawnXY((from + to) / 2, RY - 105), offset: .5 }, { translate: pawnXY(to, RY) }],
          { duration: 720, delay: delay || 0, easing: "cubic-bezier(.45,0,.55,1)" });
        sq.forEach(function (s, k) { cls(c, s, "on", k === i); });
      }
      if (n === 1) jump(1);
      if (n === 2) {
        jump(2);
        // başarısızlık: piyon devrilir
        wa(c, hop, [{ rotate: "0deg" }, { rotate: "-14deg", offset: .35 }, { rotate: "12deg", offset: .62 }, { rotate: "84deg" }],
          { duration: 900, delay: 760, easing: "cubic-bezier(.5,0,.6,1.4)" });
        hop.style.transformOrigin = "50% 96%";
        onReset(c, function () { hop.style.transformOrigin = ""; });
      }
      if (n === 3) {
        wa(c, hop, [{ rotate: "84deg" }, { rotate: "0deg" }], { duration: 450, easing: POP });
        jump(3, 380);
        wa(c, sq[3], [{ boxShadow: "0 0 0 0 rgba(232,209,149,0)" }, { boxShadow: "0 0 0 18px rgba(232,209,149,.28), 0 0 80px rgba(232,209,149,.45)" }], { duration: 900, delay: 1100 });
      }
      if (n === 4) {
        var back = c.$(".r-back");
        wa(c, back, [{ strokeDasharray: "1400", strokeDashoffset: "1400" }, { strokeDasharray: "1400", strokeDashoffset: "0" }], { duration: 1500, easing: INOUT });
        wa(c, c.$(".r-back-head"), [{ opacity: 0 }, { opacity: 1 }], { duration: 200, delay: 1400 });
        // piyon karenin yanından aşağı atlar, çizgi boyunca yürür, 1. karenin üstüne zıplar
        var kf = [], LY = 872;
        function arc(x0, y0, x1, y1, cx, cy, o0, o1, n) {
          for (var j = 0; j <= n; j++) {
            var t = j / n, x = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * cx + t * t * x1, y = (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * cy + t * t * y1;
            kf.push({ translate: pawnXY(x, y), offset: o0 + (o1 - o0) * t });
          }
        }
        arc(RX[3], RY, 1610, LY, 1790, 380, 0, .2, 8);      // sağdan aşağı atla
        arc(330, LY, RX[0], RY, 170, 420, .8, 1, 8);         // soldan yukarı zıpla (aradaki yürüyüş doğrusal)
        wa(c, pw, kf, { duration: 2600, delay: 150, easing: "linear" });
        // yürürken sallanır
        wa(c, hop, [{ rotate: "0deg" }, { rotate: "-7deg", offset: .25 }, { rotate: "7deg", offset: .75 }, { rotate: "0deg" }], { duration: 390, delay: 150 + 2600 * .2, iterations: 4, easing: "ease-in-out", fill: "none" });
        sq.forEach(function (s, k) { cls(c, s, "on", k === 0); });
        c.after(2700, function () { cls(c, sq[0], "slay"); });
        if (inst(c)) cls(c, sq[0], "slay");
        wa(c, c.$(".r-tag"), [{ opacity: 0, scale: "0.4", rotate: "-20deg" }, { opacity: 1, scale: "1", rotate: "-5deg" }], { duration: 700, delay: 2750, easing: POP });
        wa(c, c.$(".r-label"), [{ opacity: 0, translate: "0 20px" }, { opacity: 1, translate: "0 0" }], { duration: 800, delay: 1700 });
      }
    }
  };

  /* 07 · EĞİTİM — sayaç koşar, oran kıpırdamaz, 200 oyun söner, damga */
  H.egitim = {
    enter: function (c) {
      var g = c.$(".games");
      if (!g.__c) { var h = ""; for (var i = 0; i < 200; i++) h += "<i></i>"; g.innerHTML = h; g.__c = $$("i", g); }
      var cells = g.__c;
      cells.forEach(function (x) { x.className = ""; });
      onReset(c, function () { cells.forEach(function (x) { x.className = ""; }); });
      var steps = c.$(".ppo-steps"), rate = c.$(".ppo-rate");
      steps.textContent = "0"; rate.textContent = "%0,0";
      c.count(steps, 1400000, { from: 0, duration: 2.8, delay: 0.5 });
      wa(c, c.$(".meter-fill"), [{ scale: "0 1" }, { scale: "1 1" }], { duration: 2800, delay: 500, easing: EASE });
      wa(c, c.$(".rate-fill"), [{ scale: "0 1" }, { scale: "0.6 1", offset: .55 }, { scale: "0.4 1", offset: .7 }, { scale: "1 1" }], { duration: 2000, delay: 2600, easing: "ease-in-out" });
      c.count(rate, 2.5, { from: 0, dec: 1, duration: 2, delay: 2.6 });
      if (inst(c)) { cells.forEach(function (x) { x.className = "lost"; }); return; }
      var T0 = 0.6, TD = 3.4;
      c.loop(function (t) {
        var p = Math.max(0, Math.min(1, (t - T0) / TD)), k = Math.floor(p * 200);
        for (var i = 0; i < 200; i++) {
          var want = i < k ? "lost" : (i === k && p < 1 ? "cur" : "");
          if (cells[i].className !== want) cells[i].className = want;
        }
      });
    },
    step: function (n, c) {
      if (n !== 1) return;
      var st = c.$(".stamp");
      wa(c, st, [{ opacity: 0, scale: "2.6" }, { opacity: 1, scale: ".93", offset: .62 }, { opacity: 1, scale: "1.02", offset: .82 }, { opacity: 1, scale: "1" }], { duration: 620, easing: "cubic-bezier(.5,0,.75,0)" });
      c.$$(".panel").forEach(function (p) {
        wa(c, p, [{ translate: "0 0" }, { translate: "-9px 5px", offset: .2 }, { translate: "8px -4px", offset: .4 }, { translate: "-5px 3px", offset: .6 }, { translate: "3px -2px", offset: .8 }, { translate: "0 0" }],
          { duration: 420, delay: 380, easing: "linear", fill: "none" });
      });
      if (!inst(c)) Board.alert(16);
    }
  };

  /* 08 · HEDEF FONKSİYONU — dağınık hedefler tek noktaya çekilir */
  H.hedef = {
    enter: function (c) {
      var chips = c.$$(".chip"), r = rnd(11), n = chips.length;
      // dönen bir atlıkarınca: eşit aralıklı, arkadakiler küçük ve soluk
      var P = chips.map(function (el, i) { return { el: el, a: (i / n) * 6.283, wb: r() * 6, cur: [0, 0] }; });
      c.__chips = P; c.__done = false;
      c.loop(function (t) {
        if (c.__done || (RM && c.__still)) return; c.__still = true;
        P.forEach(function (o) {
          var a = o.a + t * .22;
          var x = Math.cos(a) * 610 + Math.sin(t * .9 + o.wb) * 14;
          var y = Math.sin(a) * 190 + Math.cos(t * 1.1 + o.wb) * 10 + 20;
          var depth = (Math.sin(a) + 1) / 2;            // 0 arka, 1 ön
          o.cur = [x, y];
          o.el.style.translate = x.toFixed(1) + "px " + y.toFixed(1) + "px";
          o.el.style.scale = (0.78 + depth * 0.3).toFixed(3);
          o.el.style.zIndex = Math.round(depth * 10);
          o.el.style.filter = "brightness(" + (0.62 + depth * 0.38).toFixed(2) + ")";
          o.el.style.rotate = (Math.sin(t * .8 + o.wb) * 4).toFixed(1) + "deg";
        });
      });
      onReset(c, function () { P.forEach(function (o) { o.el.style.scale = ""; o.el.style.zIndex = ""; o.el.style.filter = ""; }); });
      chips.forEach(function (el, i) { wa(c, el, [{ opacity: 0, scale: ".6" }, { opacity: 1, scale: "1" }], { duration: 700, delay: 300 + i * 90, easing: POP }); });
    },
    step: function (n, c) {
      if (n !== 1) return;
      c.__done = true;
      (c.__chips || []).forEach(function (o, i) {
        wa(c, o.el, [{ translate: o.cur[0] + "px " + o.cur[1] + "px", opacity: 1, scale: o.el.style.scale || "1" }, { translate: "0px 10px", opacity: 0, scale: ".25" }],
          { duration: 700, delay: i * 40, easing: "cubic-bezier(.6,0,.8,.4)" });
      });
      var aha = c.$(".aha");
      wa(c, aha.querySelector(".aha-rays"), [{ opacity: 0, scale: ".3" }, { opacity: 1, scale: "1.15", offset: .35 }, { opacity: .8, scale: "1" }], { duration: 1600, delay: 650 });
      wa(c, aha.querySelector(".aha-k"), [{ opacity: 0, translate: "0 20px" }, { opacity: 1, translate: "0 0" }], { duration: 700, delay: 950 });
      wa(c, aha.querySelector(".aha-main"), [{ opacity: 0, scale: ".55", filter: "blur(10px)" }, { opacity: 1, scale: "1", filter: "blur(0px)" }], { duration: 900, delay: 700, easing: POP });
      wa(c, aha.querySelector(".aha-eq"), [{ opacity: 0, translate: "0 30px" }, { opacity: 1, translate: "0 0" }], { duration: 800, delay: 1300 });
    }
  };

  /* 09 · SLAYER — tapu senedi masaya gelir ve çevrilir */
  H.slayer = {
    enter: function (c) {
      var d = c.$(".s-deed");
      wa(c, d, [{ translate: "520px -80px", rotate: "22deg", opacity: 0 }, { opacity: 1, offset: .25 }, { translate: "0 0", rotate: "3deg", opacity: 1 }], { duration: 1000, delay: 200 });
      flip(c, d, 1050, 1000);
    }
  };

  /* 10 · BEŞ İLKE — beş kart desteden dağıtılır, havada çevrilir */
  H.ilkeler = {
    enter: function (c) {
      var rot = [-3, -1.5, 0, 1.5, 3], lift = [10, 2, 0, 2, 10];
      c.$$(".pc").forEach(function (p, i) {
        var left = parseFloat(p.style.left);
        wa(c, p, [
          { translate: (960 - 150 - left) + "px 640px", rotate: (rot[i] * 4 - 8) + "deg", opacity: 0 },
          { opacity: 1, offset: .12 },
          { translate: "0 " + lift[i] + "px", rotate: rot[i] + "deg", opacity: 1 }
        ], { duration: 950, delay: 250 + i * 230 });
        flip(c, p, 250 + i * 230 + 380, 800);
      });
    }
  };

  /* 11 · GRAFİK (temsilî) — çizgiler tur tur ilerler */
  H.grafik = {
    enter: function (c) {
      var ln = ["s", "a", "b"].map(function (k) {
        var p = c.$(".ln-" + k), L = p.getTotalLength();
        p.style.strokeDasharray = L + " " + L;
        return { p: p, L: L, tip: c.$(".tip-" + k), lab: c.$(".lab-" + k) };
      });
      onReset(c, function () { ln.forEach(function (o) { o.p.style.strokeDasharray = ""; o.p.style.strokeDashoffset = ""; }); });
      function draw(pr) {
        ln.forEach(function (o) {
          o.p.style.strokeDashoffset = (o.L * (1 - pr)).toFixed(1);
          var pt = o.p.getPointAtLength(o.L * pr);
          o.tip.setAttribute("cx", pt.x.toFixed(1)); o.tip.setAttribute("cy", pt.y.toFixed(1));
        });
      }
      ln.forEach(function (o) {
        var end = o.p.getPointAtLength(o.L);
        o.lab.style.top = end.y + "px";
        wa(c, o.lab, [{ opacity: 0, translate: "-20px -50%" }, { opacity: 1, translate: "0 -50%" }], { duration: 700, delay: 3200 + (o.p.classList.contains("ln-s") ? 0 : 200) });
      });
      if (inst(c)) { draw(1); return; }
      draw(0);
      var T0 = .5, TD = 2.9;
      c.loop(function (t) {
        var p = Math.max(0, Math.min(1, (t - T0) / TD));
        draw(1 - Math.pow(1 - p, 2.2) * (1 - p * .0));
      });
    }
  };

  /* 12 · CHOOSE YOUR AGENT — seçim çerçevesi gezer, SLAYER'da kilitlenir */
  H.sec = {
    enter: function (c) {
      var cards = c.$$(".agent"), cur = c.$(".cursor");
      cards.forEach(function (a, i) { wa(c, a, [{ opacity: 0, translate: "0 80px" }, { opacity: 1, translate: "0 0" }], { duration: 800, delay: 200 + i * 140 }); });
      wa(c, cur, [{ opacity: 0 }, { opacity: 1 }], { duration: 400, delay: 800 });
      var idx = 0;
      function moveTo(i, now) {
        cur.style.transition = now ? "none" : "translate .32s cubic-bezier(.34,1.3,.64,1)";
        cur.style.translate = (i * 495) + "px 0";
        if (now) void cur.offsetWidth;
      }
      moveTo(0, true);
      onReset(c, function () { cur.style.transition = ""; cur.style.translate = ""; });
      c.__lock = false;
      c.__move = moveTo;
      c.every(620, function () { if (c.__lock) return; idx = (idx + 1) % 3; moveTo(idx); });
    },
    step: function (n, c) {
      if (n !== 1) return;
      c.__lock = true;
      c.__move(2, inst(c));
      var cards = c.$$(".agent");
      cards.forEach(function (a, i) {
        if (i === 2) wa(c, a, [{ scale: "1" }, { scale: "1.07" }], { duration: 700, delay: 250, easing: POP });
        else wa(c, a, [{ opacity: 1, filter: "grayscale(0) brightness(1)" }, { opacity: .55, filter: "grayscale(.85) brightness(.9)" }], { duration: 700, delay: 250 });
      });
      wa(c, c.$(".cursor"), [{ scale: "1" }, { scale: "1.07" }], { duration: 700, delay: 250, easing: POP });
      wa(c, c.$(".picked"), [{ opacity: 0, scale: ".3" }, { opacity: 1, scale: "1" }], { duration: 650, delay: 550, easing: POP });
    }
  };

  /* 13 · SKOR — iki çubuk zar zor kıpırdar, üçüncüsü fırlar */
  H.skor = {
    enter: function (c) {
      var ddqn = c.$(".sc-ddqn"), ppo = c.$(".sc-ppo");
      wa(c, ddqn.querySelector(".sc-fill"), [{ scale: "0 1" }, { scale: "1 1" }], { duration: 300, delay: 500 });
      wa(c, ddqn.querySelector(".sc-val"), [{ opacity: 0, translate: "-20px -50%" }, { opacity: 1, translate: "0 -50%" }], { duration: 700, delay: 700 });
      c.count(c.$(".v-ddqn"), 0, { from: 0, duration: .3 });
      wa(c, ppo.querySelector(".sc-fill"), [{ scale: "0 1" }, { scale: "1 1" }], { duration: 1600, delay: 900, easing: "ease-in-out" });
      wa(c, ppo.querySelector(".sc-val"), [{ opacity: 0, translate: "-20px -50%" }, { opacity: 1, translate: "0 -50%" }], { duration: 700, delay: 1000 });
      var vp = c.$(".v-ppo"); vp.textContent = "%0,0";
      c.count(vp, 2.5, { from: 0, dec: 1, duration: 1.6, delay: 0.9 });
      c.$(".v-slayer").textContent = "0";
    },
    step: function (n, c) {
      if (n !== 1) return;
      var row = c.$(".sc-slayer");
      wa(c, row.querySelector(".sc-fill"), [{ scale: "0 1" }, { scale: "1.035 1", offset: .72 }, { scale: ".99 1", offset: .86 }, { scale: "1 1" }], { duration: 1500, easing: "cubic-bezier(.2,.8,.2,1)" });
      wa(c, row.querySelector(".sc-val"), [{ opacity: 0, translate: "-60px -50%" }, { opacity: 1, translate: "0 -50%" }], { duration: 900, delay: 700 });
      c.count(c.$(".v-slayer"), 72, { from: 0, duration: 1.5, delay: 0.1 });
      wa(c, row.querySelector(".sc-lab strong"), [{ scale: "1" }, { scale: "1.08", offset: .5 }, { scale: "1" }], { duration: 700, delay: 1300, fill: "none" });
    }
  };

  /* 14 · DOMINATION — tahtanın tamamı tek renge boyanır */
  H.hakimiyet = {
    enter: function (c) {
      var p = Board.center(POS.hakimiyet);
      var fl = c.$(".flood");
      fl.style.clipPath = "circle(0px at " + p[0] + "px " + p[1] + "px)";
      onReset(c, function () { fl.style.clipPath = ""; });
      wa(c, fl, [{ clipPath: "circle(0px at " + p[0] + "px " + p[1] + "px)" }, { clipPath: "circle(2300px at " + p[0] + "px " + p[1] + "px)" }], { duration: 1300, delay: 200, easing: "cubic-bezier(.6,0,.3,1)" });
      Board.dominate(true, inst(c), 150);
      wa(c, c.$(".d-eye"), [{ opacity: 0, letterSpacing: ".9em" }, { opacity: 1, letterSpacing: ".5em" }], { duration: 1200, delay: 700 });
    }
  };

  /* 15 · TEŞEKKÜRLER — son atış: çift altı */
  H.tesekkur = {
    enter: function (c) {
      var dice = diceIn(c.$(".dice-spot"), [{ size: 170, x: 70, y: 150 }, { size: 170, x: 280, y: 250 }]);
      roll(c, dice[0], { face: 6, z: -10, from: [260, -300], delay: 600, dur: 1600, sx: 180 });
      roll(c, dice[1], { face: 6, z: 14, from: [160, -380], delay: 740, dur: 1700, sy: 90 });
    }
  };

  /* ---------- kayıt: her sahne tahtayı da günceller ---------- */
  $$(".deck-stage > .scene").forEach(function (sc) {
    var h = H[sc.id] || {};
    D.scene(sc.id, {
      enter: function (c) {
        Board.goTo(POS[sc.id] != null ? POS[sc.id] : 0, c.instant);
        if (sc.id !== "hakimiyet") Board.dominate(false, c.instant);
        if (h.enter) h.enter(c);
      },
      step: function (n, c) { if (h.step) h.step(n, c); },
      leave: function (c) { if (h.leave) h.leave(c); },
      reset: function (c) { cleanup(sc.id); if (h.reset) h.reset(c); }
    });
  });
})();
