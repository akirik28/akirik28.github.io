/* ============================================================
   STEM & BUDS Türkiye · 2026–2027 Program Modeli — özel hareketler
   Motor: /assets/deck/deck.js (değiştirilmedi)
   ============================================================ */
(function () {
  "use strict";
  if (!window.Deck) return;
  var EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
  var NS = "http://www.w3.org/2000/svg";
  var LEAF = "141,198,63", NAVY = "11,53,109", EMER = "30,140,107";

  /* ---------- yardımcılar ---------- */
  function svgEl(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  // WAAPI: anlık modda süre 0; sahne sıfırlanınca iptal edilir
  function wa(c, el, kf, o) {
    o = Object.assign({ fill: "both", easing: EASE }, o || {});
    if (c.instant) { o.duration = 0; o.delay = 0; }
    var a = el.animate(kf, o);
    (c.el.__wa || (c.el.__wa = [])).push(a);
    return a;
  }
  function killWA(sc) { (sc.__wa || []).forEach(function (a) { try { a.cancel(); } catch (e) {} }); sc.__wa = []; }
  // sınıf değişikliğini anlık modda geçişsiz uygula
  function snap(c, fn) {
    if (!c.instant) { fn(); return; }
    var sc = c.el; sc.classList.add("instant"); fn(); void sc.offsetWidth;
    requestAnimationFrame(function () { requestAnimationFrame(function () { sc.classList.remove("instant"); }); });
  }
  function stageK() {
    var s = document.querySelector(".deck-stage");
    return parseFloat(getComputedStyle(s).getPropertyValue("--k")) || 1;
  }
  function fitCanvas(cv, w, h) {
    var r = Math.min(2, Math.max(1, stageK() * (window.devicePixelRatio || 1)));
    r = r > 1.15 ? Math.min(2, Math.ceil(r * 2) / 2) : 1;
    if (cv.width !== Math.round(w * r)) { cv.width = Math.round(w * r); cv.height = Math.round(h * r); }
    var ctx = cv.getContext("2d"); ctx.setTransform(r, 0, 0, r, 0, 0);
    return ctx;
  }
  function easeInOut(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function rng(seed) { return function () { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }; }

  // devre izleri boyunca akan sinyal noktaları
  function pulses(c, group, paths, opt) {
    group.innerHTML = "";
    var items = [], speed = opt.speed || 200;
    paths.forEach(function (p, i) {
      var L = p.getTotalLength();
      for (var k = 0; k < (opt.n || 1); k++) {
        items.push({
          p: p, L: L, off: (i * 0.37 + k / (opt.n || 1)) % 1,
          g: svgEl("circle", { r: opt.glow || 18, class: "pg" }, group),
          c: svgEl("circle", { r: opt.r || 5, class: "pc" }, group),
          rev: typeof opt.reverse === "function" ? opt.reverse(i) : !!opt.reverse
        });
      }
    });
    items.forEach(function (it) { it.g.style.opacity = 0; it.c.style.opacity = 0; });
    c.loop(function (t) {
      for (var j = 0; j < items.length; j++) {
        var it = items[j], move = it.L / speed, dur = move + (opt.rest || 1.2);
        var ph = ((t / dur) + it.off) % 1, s = ph * dur / move;
        if (s > 1) { it.g.style.opacity = 0; it.c.style.opacity = 0; continue; }
        var pt = it.p.getPointAtLength((it.rev ? 1 - s : s) * it.L);
        var f = Math.min(1, s * 7, (1 - s) * 7);
        it.g.setAttribute("cx", pt.x); it.g.setAttribute("cy", pt.y);
        it.c.setAttribute("cx", pt.x); it.c.setAttribute("cy", pt.y);
        it.g.style.opacity = f * 0.9; it.c.style.opacity = f;
      }
    });
  }

  /* ========================================================== 01 KAPAK */
  Deck.scene("kapak", {
    enter: function (c) {
      wa(c, c.$(".cover-logo"), [
        { clipPath: "inset(100% -10% 0 -10%)", translate: "0 26px", opacity: 1 },
        { clipPath: "inset(0% -10% 0 -10%)", translate: "0 0", opacity: 1 }
      ], { duration: 1600, delay: 250 });
      c.after(2000, function () {
        pulses(c, c.$(".roots .pulses"), c.$$(".traces path"), { reverse: true, speed: 230, rest: 1.4, r: 5, glow: 16 });
      });
    },
    reset: function (r) { killWA(r.el); r.$(".roots .pulses").innerHTML = ""; }
  });

  /* ========================================================== 02 DEĞİŞİM */
  Deck.scene("degisim", {
    step: function (n, c) {
      var rows = c.$$(".mx-row"), mx = c.$(".mx");
      snap(c, function () {
        if (rows[n - 1]) rows[n - 1].classList.add("on");
        mx.setAttribute("data-n", n);
      });
    },
    reset: function (r) {
      r.$$(".mx-row").forEach(function (x) { x.classList.remove("on"); });
      r.$(".mx").removeAttribute("data-n");
    }
  });

  /* ========================================================== 03 VİZYON */
  var NET = null;
  function buildNet() {
    if (NET) return NET;
    var R = rng(20262027), nodes = [], core = { x: 330, y: 640, r: 0, core: true };
    nodes.push(core);
    var tries = 0;
    while (nodes.length < 40 && tries < 6000) {
      tries++;
      var a = R() * Math.PI * 2, d = Math.sqrt(R()) * 1, x = core.x + Math.cos(a) * d * 300, y = core.y + Math.sin(a) * d * 430 - 40;
      if (x < 50 || x > 670 || y < 170 || y > 960) continue;
      if (x > 170 && x < 490 && y > 668 && y < 752) continue;        // etiket alanı
      var ok = true;
      for (var i = 0; i < nodes.length; i++) { var dx = nodes[i].x - x, dy = nodes[i].y - y; if (dx * dx + dy * dy < 68 * 68) { ok = false; break; } }
      if (ok) nodes.push({ x: x, y: y, ph: R() * 6.28, sz: 6 + R() * 4 });
    }
    nodes.sort(function (p, q) { return Math.hypot(p.x - core.x, p.y - core.y) - Math.hypot(q.x - core.x, q.y - core.y); });
    var edges = [];
    function route(A, B) {             // devre izi: düz + 45°
      var dx = B.x - A.x, dy = B.y - A.y, ax = Math.abs(dx), ay = Math.abs(dy), m;
      if (ax > ay) m = { x: A.x + Math.sign(dx) * (ax - ay), y: A.y };
      else m = { x: A.x, y: A.y + Math.sign(dy) * (ay - ax) };
      var l1 = Math.hypot(m.x - A.x, m.y - A.y), l2 = Math.hypot(B.x - m.x, B.y - m.y);
      return { a: A, m: m, b: B, l1: l1, L: l1 + l2 };
    }
    for (var k = 1; k < nodes.length; k++) {
      var n = nodes[k], best = -1, bd = 1e9, sec = -1, sd = 1e9;
      for (var j = 0; j < k; j++) {
        var dd = Math.hypot(nodes[j].x - n.x, nodes[j].y - n.y);
        if (dd < bd) { sec = best; sd = bd; best = j; bd = dd; } else if (dd < sd) { sec = j; sd = dd; }
      }
      edges.push({ e: route(nodes[best], n), k: k });
      if (sec >= 0 && R() < 0.35 && sd < 200) edges.push({ e: route(nodes[sec], n), k: k });
    }
    NET = { nodes: nodes, edges: edges };
    return NET;
  }
  function onEdge(e, s) {
    var d = s * e.L;
    if (d <= e.l1) { var t = e.l1 ? d / e.l1 : 1; return { x: e.a.x + (e.m.x - e.a.x) * t, y: e.a.y + (e.m.y - e.a.y) * t }; }
    var t2 = (d - e.l1) / (e.L - e.l1 || 1); return { x: e.m.x + (e.b.x - e.m.x) * t2, y: e.m.y + (e.b.y - e.m.y) * t2 };
  }
  function drawEdge(ctx, e, s) {
    ctx.moveTo(e.a.x, e.a.y);
    var d = s * e.L;
    if (d <= e.l1) { var p = onEdge(e, s); ctx.lineTo(p.x, p.y); return; }
    ctx.lineTo(e.m.x, e.m.y); var q = onEdge(e, s); ctx.lineTo(q.x, q.y);
  }

  Deck.scene("vizyon", {
    enter: function (c) {
      var sc = c.el, net = buildNet(), cv = c.$(".net");
      var st = { target: 9, shown: 0, born: [] , t: 0};
      c.net = st;
      if (c.instant) st.shown = 9;
      // vurgu: "ilgi duyan" çizilir, fiiller sırayla işaretlenir
      c.after(700, function () { snap(c, function () { sc.classList.add("s-strike"); }); });
      c.$$(".vz-main .v").forEach(function (v, i) {
        c.after(1250 + i * 240, function () { snap(c, function () { v.classList.add("lit"); }); });
      });
      var pul = [];
      c.loop(function (t, dt) {
        st.t = t;
        var ctx = fitCanvas(cv, 720, 1080);
        ctx.clearRect(0, 0, 720, 1080);
        // büyüme: hedefe doğru düğüm ekle
        if (st.shown < st.target) { st.acc = (st.acc || 0) + dt; var rate = st.target > 9 ? 0.07 : 0.11; while (st.acc > rate && st.shown < st.target) { st.acc -= rate; st.born[st.shown] = t; st.shown++; } }
        var N = st.shown, nodes = net.nodes;
        function age(k) { var b = st.born[k]; return b == null ? 9 : t - b; }
        function pos(k) { var n = nodes[k]; if (n.core) return n; return { x: n.x + Math.sin(t * .6 + n.ph) * 3, y: n.y + Math.cos(t * .5 + n.ph) * 3 }; }
        var P = []; for (var k = 0; k < N; k++) P[k] = pos(k);
        // izler
        ctx.lineWidth = 2.5; ctx.lineCap = "round"; ctx.lineJoin = "round";
        ctx.strokeStyle = "rgba(" + NAVY + ",.26)";
        ctx.beginPath();
        net.edges.forEach(function (ed) {
          if (ed.k >= N) return;
          var s = Math.min(1, age(ed.k) / .45);
          var e = { a: P[nodes.indexOf(ed.e.a)] || ed.e.a, b: P[ed.k], m: null };
          var A = e.a, B = e.b, dx = B.x - A.x, dy = B.y - A.y, ax = Math.abs(dx), ay = Math.abs(dy);
          e.m = ax > ay ? { x: A.x + Math.sign(dx) * (ax - ay), y: A.y } : { x: A.x, y: A.y + Math.sign(dy) * (ay - ax) };
          e.l1 = Math.hypot(e.m.x - A.x, e.m.y - A.y); e.L = e.l1 + Math.hypot(B.x - e.m.x, B.y - e.m.y);
          ed.live = e;
          drawEdge(ctx, e, s);
        });
        ctx.stroke();
        // sinyaller
        if (N > 2 && Math.random() < dt * (N > 12 ? 5 : 2.5)) {
          var cand = net.edges.filter(function (ed) { return ed.k < N && age(ed.k) > .6; });
          if (cand.length) pul.push({ ed: cand[(Math.random() * cand.length) | 0], t0: t, rev: Math.random() < .5 });
        }
        pul = pul.filter(function (p) { return t - p.t0 < .9; });
        pul.forEach(function (p) {
          if (!p.ed.live) return;
          var s = (t - p.t0) / .9, q = onEdge(p.ed.live, p.rev ? 1 - s : s), f = Math.min(1, s * 6, (1 - s) * 6);
          ctx.fillStyle = "rgba(" + LEAF + "," + (.35 * f) + ")"; ctx.beginPath(); ctx.arc(q.x, q.y, 10, 0, 6.283); ctx.fill();
          ctx.fillStyle = "rgba(" + EMER + "," + f + ")"; ctx.beginPath(); ctx.arc(q.x, q.y, 4, 0, 6.283); ctx.fill();
        });
        // düğümler (devre terminali gibi halkalar)
        for (k = 0; k < N; k++) {
          var n = nodes[k], p = P[k], a = age(k), sc2 = Math.min(1, a / .35), pop = 1 + Math.max(0, 1 - a / .5) * .5;
          if (n.core) {
            ctx.fillStyle = "rgba(" + LEAF + ",.22)"; ctx.beginPath(); ctx.arc(p.x, p.y, 34 + Math.sin(t * 2) * 3, 0, 6.283); ctx.fill();
            ctx.fillStyle = "#8DC63F"; ctx.strokeStyle = "#0B356D"; ctx.lineWidth = 5;
            ctx.beginPath(); ctx.arc(p.x, p.y, 17, 0, 6.283); ctx.fill(); ctx.stroke();
            continue;
          }
          var r = n.sz * sc2 * pop;
          ctx.fillStyle = "#F3F5EC"; ctx.strokeStyle = a < 1.2 ? "#1E8C6B" : "#0B356D"; ctx.lineWidth = 3;
          ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(.1, r), 0, 6.283); ctx.fill(); ctx.stroke();
          if (a < 1) { ctx.strokeStyle = "rgba(" + LEAF + "," + (1 - a) + ")"; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(p.x, p.y, r + 6 + a * 18, 0, 6.283); ctx.stroke(); }
        }
      });
    },
    step: function (n, c) {
      if (n === 1 && c.net) { c.net.target = buildNet().nodes.length; if (c.instant) { c.net.shown = c.net.target; c.net.born = []; } }
    },
    reset: function (r) {
      r.el.classList.remove("s-strike");
      r.$$(".vz-main .v").forEach(function (v) { v.classList.remove("lit"); });
      var cv = r.$(".net"); var x = cv.getContext("2d"); x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, cv.width, cv.height);
    }
  });

  /* ========================================================== 04 MİSYON */
  Deck.scene("misyon", {
    enter: function (c) {
      var seed = c.$(".pipe-seed"), run = c.$(".pipe-run"), lis = c.$$(".pipe-st li"), end = c.$(".pipe-b");
      var X0 = 248, X1 = 1672, W = X1 - X0;
      var cx = lis.map(function (_, i) { return X0 + W * (i + .5) / 6; });
      seed.style.opacity = 0;
      c.after(2700, function () {
        var t0 = null;
        c.loop(function (t) {
          if (t0 == null) t0 = t;
          var T = (t - t0) % 6, s = Math.min(1, T / 4.4), x = X0 + W * easeInOut(s);
          seed.setAttribute("cx", x); seed.setAttribute("r", 9 + 9 * s);
          seed.style.opacity = T > 5.4 ? Math.max(0, (6 - T) / .6) : Math.min(1, T * 4);
          run.style.strokeDasharray = (x - X0) * (T > 5.4 ? Math.max(0, (6 - T) / .6) : 1) + " 3000";
          for (var i = 0; i < lis.length; i++) lis[i].classList.toggle("hit", T < 5.4 && x >= cx[i] - 6);
          end.classList.toggle("hit", s >= 1 && T < 5.4);
        });
      });
    },
    reset: function (r) {
      r.$$(".pipe-st li").forEach(function (l) { l.classList.remove("hit"); });
      r.$(".pipe-b").classList.remove("hit");
      r.$(".pipe-run").style.strokeDasharray = "";
      r.$(".pipe-seed").style.opacity = 0;
    }
  });

  /* ========================================================== 05 HARİTA */
  var TR = "M106 4 110 4 114 6 116 7 120 4 125 4 128 7 131 9 134 14 141 18 143 20 148 17 153 15 157 15 163 17 164 14 165 13 168 12 171 15 180 15 181 24 178 24 175 26 184 43 185 46 186 50 195 58 197 59 190 45 188 34 247 78 246 82 262 86 279 86 290 89 300 91 304 93 307 92 315 94 333 94 338 92 343 89 345 89 354 92 373 96 382 100 387 102 400 101 407 99 417 98 422 95 428 90 429 84 428 79 430 77 435 74 443 72 464 59 482 50 491 42 500 36 504 35 511 31 518 28 524 28 538 24 571 10 583 11 592 13 602 14 624 14 637 16 643 18 656 15 665 17 673 17 679 16 688 12 688 11 691 4 697 4 700 7 703 15 704 24 712 33 714 37 719 42 725 43 736 48 746 46 757 42 764 39 765 43 766 39 767 38 770 41 773 42 774 44 774 47 778 48 779 51 778 61 781 65 792 79 797 83 801 84 805 83 815 73 827 75 836 79 837 81 838 79 844 82 845 85 846 91 847 92 856 94 863 94 867 98 872 99 882 106 885 106 892 97 898 97 901 99 902 107 905 109 916 111 930 114 937 114 944 116 955 115 963 110 965 111 967 113 971 112 975 110 981 108 985 106 998 104 1004 101 1008 103 1011 104 1020 100 1023 100 1026 100 1035 108 1048 110 1054 112 1065 113 1072 116 1076 117 1082 114 1094 106 1110 103 1115 101 1125 93 1142 89 1148 83 1155 80 1161 75 1169 72 1171 68 1176 64 1179 58 1186 62 1189 60 1199 67 1202 66 1207 61 1210 60 1216 62 1218 60 1232 61 1249 66 1254 60 1255 55 1257 53 1261 52 1270 53 1273 51 1275 53 1275 55 1273 61 1276 62 1277 61 1279 61 1284 66 1289 72 1292 74 1298 78 1302 79 1302 81 1298 84 1302 86 1305 91 1312 89 1318 90 1321 95 1321 100 1323 106 1334 112 1336 115 1339 124 1343 133 1343 140 1335 151 1330 157 1329 159 1332 163 1332 173 1337 180 1338 182 1336 184 1340 187 1339 189 1336 191 1336 194 1352 202 1374 200 1380 198 1384 200 1395 206 1399 209 1404 217 1421 236 1422 239 1419 239 1406 228 1398 235 1398 237 1399 248 1398 251 1394 255 1394 259 1392 262 1383 265 1374 262 1371 264 1367 262 1366 264 1366 266 1370 273 1371 281 1377 286 1379 289 1378 291 1375 290 1374 291 1377 296 1378 298 1376 301 1378 310 1384 314 1384 316 1385 320 1383 327 1384 333 1386 337 1386 358 1390 360 1395 359 1398 361 1399 364 1392 372 1392 380 1391 383 1389 384 1389 386 1387 388 1385 393 1381 400 1380 406 1382 408 1389 407 1391 408 1393 412 1398 418 1403 417 1408 421 1408 425 1405 429 1408 433 1409 435 1407 441 1408 446 1406 448 1416 456 1423 464 1422 467 1420 470 1419 475 1417 476 1410 474 1408 474 1396 484 1392 486 1388 487 1388 489 1385 493 1384 494 1382 494 1375 482 1376 478 1381 475 1381 471 1379 467 1372 462 1362 462 1356 470 1353 470 1349 473 1345 470 1334 470 1329 468 1324 468 1316 463 1314 461 1309 462 1302 458 1294 457 1287 461 1284 462 1272 456 1262 468 1257 477 1246 480 1242 482 1240 482 1238 481 1237 473 1239 470 1238 468 1234 466 1228 465 1223 468 1217 474 1206 478 1185 482 1172 485 1160 484 1154 485 1150 484 1141 482 1134 480 1127 482 1121 480 1105 489 1098 491 1091 496 1069 506 1062 510 1051 515 1012 523 1007 523 997 520 985 522 975 520 968 516 960 508 954 504 946 500 940 500 930 502 908 513 893 518 882 523 876 526 863 524 854 524 849 527 845 524 844 519 841 515 831 512 827 510 819 508 819 510 816 514 816 520 814 524 813 534 811 541 818 555 821 559 821 562 820 564 816 566 808 564 804 568 799 567 797 586 795 588 793 588 792 591 790 592 786 591 784 595 783 601 780 604 777 600 771 598 768 593 764 594 762 593 762 591 766 586 766 584 752 560 753 556 762 544 778 530 782 526 782 510 779 504 772 498 768 500 760 508 754 512 741 516 747 516 748 518 745 523 741 531 738 533 728 531 722 534 719 534 707 526 704 525 696 520 688 519 686 517 687 515 682 510 676 509 667 510 655 523 648 526 636 538 634 543 629 546 628 548 628 555 625 558 621 560 619 566 617 566 616 561 613 558 610 559 608 563 600 571 598 574 596 574 594 571 593 570 588 575 582 572 577 575 573 574 569 576 558 575 555 579 553 579 549 578 545 578 539 580 532 584 524 583 516 580 512 579 504 573 496 566 489 554 476 538 471 537 466 534 459 532 455 528 449 526 443 522 430 515 423 510 403 506 394 506 379 507 373 508 370 511 368 513 367 526 369 534 367 541 362 549 363 552 363 557 355 572 353 571 352 570 352 562 345 559 341 559 337 560 336 563 334 564 331 565 328 564 324 568 318 568 316 572 313 572 311 576 308 577 305 577 305 574 300 575 297 578 295 575 292 577 290 576 291 573 293 572 295 572 296 575 298 574 296 570 287 566 282 566 280 564 277 566 271 560 259 552 258 548 259 545 258 542 259 536 256 534 253 536 252 535 253 528 256 526 246 517 244 520 246 521 246 524 244 525 243 527 240 530 238 531 237 526 234 523 223 521 222 519 221 512 218 509 216 512 214 512 210 509 209 505 207 506 208 508 205 513 200 510 199 512 197 512 196 513 199 515 198 517 189 524 186 531 179 534 175 534 173 531 174 529 180 527 180 525 175 524 173 523 176 519 183 517 181 515 178 516 157 516 154 518 154 523 152 525 148 524 144 524 138 526 131 524 128 521 132 519 133 515 136 514 140 514 146 513 149 508 157 511 163 508 178 510 179 509 176 505 178 503 178 500 179 497 182 496 188 498 192 492 200 487 197 486 191 489 188 489 185 490 178 489 173 490 167 490 162 493 153 494 147 496 140 494 139 496 138 496 130 491 124 496 122 495 120 492 118 492 119 484 121 482 121 479 122 478 130 476 132 478 135 479 137 482 140 479 138 478 138 477 146 467 145 466 142 470 140 471 138 470 138 467 135 468 134 467 136 462 132 462 130 460 132 455 132 454 129 457 124 460 116 459 116 457 118 449 114 446 114 441 112 436 113 434 105 431 102 428 103 426 116 423 120 419 121 415 119 410 121 404 121 401 119 398 110 396 102 391 97 390 94 392 92 392 91 390 89 384 85 380 84 376 80 378 76 377 76 381 72 386 67 384 62 378 58 377 56 375 52 374 44 369 45 367 48 366 48 364 48 360 49 359 51 359 53 363 55 364 56 362 61 361 62 355 63 355 60 352 57 354 57 357 55 356 55 354 53 355 52 354 53 351 55 352 56 350 56 347 54 342 53 337 54 333 56 331 62 330 70 339 75 347 75 351 73 352 72 354 78 364 79 364 77 359 78 356 79 355 82 356 85 359 93 359 102 356 108 353 105 352 96 355 92 349 88 346 90 344 90 340 86 339 82 335 82 332 80 330 82 325 88 323 91 323 94 324 96 322 94 319 95 317 97 317 98 318 99 315 101 313 106 312 104 308 101 309 96 308 91 309 87 306 87 297 92 293 91 290 89 287 84 285 82 283 80 278 79 276 73 274 72 270 70 265 71 263 76 262 78 268 85 263 86 258 89 258 91 254 94 253 96 251 97 247 95 246 90 247 72 248 56 254 48 254 38 257 34 256 32 253 38 235 37 219 39 208 41 205 48 203 51 201 55 194 55 192 45 200 43 201 41 200 41 198 48 184 47 181 46 178 46 176 45 174 45 172 57 165 60 162 64 160 70 156 79 155 83 150 86 150 88 148 89 145 88 143 87 142 82 144 72 145 69 147 67 148 65 147 64 144 62 146 59 147 53 148 49 146 40 148 34 145 32 139 34 134 37 131 45 119 48 118 52 113 54 107 52 103 51 92 52 84 60 82 66 76 68 75 71 76 74 73 70 51 63 45 58 43 55 41 53 35 55 31 58 28 68 26 71 19 74 16 83 16 87 14 90 14 98 12Z M188 103 193 102 196 103 206 104 216 110 218 108 219 105 220 109 223 112 235 111 238 110 244 110 247 108 249 108 253 112 258 114 261 118 268 121 270 123 269 127 274 127 277 131 280 132 284 130 298 130 304 131 308 133 308 134 292 137 288 133 283 137 277 137 271 140 258 140 247 142 243 146 236 150 234 153 235 155 244 159 248 160 256 158 259 160 260 162 256 164 251 168 244 168 240 166 235 165 223 168 215 166 205 166 202 164 197 166 182 166 173 168 172 167 173 165 178 162 180 160 178 157 167 154 156 154 154 156 154 160 157 162 160 167 164 168 164 169 158 173 153 173 148 172 140 174 127 168 126 162 123 159 116 160 109 160 101 166 88 164 83 166 75 174 70 177 65 184 60 186 58 185 64 181 67 176 74 172 82 161 97 154 102 153 106 149 115 145 126 137 131 128 138 123 139 117 143 113 158 109 163 110 171 112 175 112 179 106Z M20 181 24 180 26 182 28 184 27 188 30 188 30 191 27 193 23 193 18 196 14 197 9 196 4 193 4 191 5 189 12 184 15 184Z M147 140 152 140 159 143 158 145 150 149 147 150 145 150 143 149 141 145 142 141Z M138 150 139 150 140 151 140 152 144 153 145 152 147 154 149 154 150 156 151 159 150 161 146 161 145 160 146 155 144 154 142 159 139 160 138 159 138 154 136 152Z M164 523 165 522 167 523 166 525 164 526 167 527 168 529 167 534 166 536 164 535 163 533 158 531 160 526 164 525Z M26 219 33 219 34 221 34 224 31 226 26 221Z M81 343 82 342 83 344 84 351 87 353 85 354 79 349Z M256 119 258 118 259 120 261 120 263 121 261 125 260 126 259 126 258 122 256 121Z";
  var PIN = { x: 240, y: 100 };
  var DOTS = null;
  function buildDots() {
    if (DOTS) return DOTS;
    var cv = document.createElement("canvas"); cv.width = 10; cv.height = 10;
    var ctx = cv.getContext("2d"), p = new Path2D(TR), S = 13, out = [];
    for (var row = 0, y = 4; y < 609; y += S * 0.866, row++) {
      for (var x = (row % 2 ? S / 2 : 0) + 2; x < 1428; x += S) {
        if (ctx.isPointInPath(p, x, y, "evenodd")) out.push({ x: x, y: y, d: Math.hypot(x - PIN.x, y - PIN.y) });
      }
    }
    DOTS = out; return out;
  }
  Deck.scene("harita", {
    enter: function (c) {
      var line = c.$(".map-line"), cv = c.$(".map-dots"), pin = c.$(".pin");
      if (!line.getAttribute("d")) line.setAttribute("d", TR);
      var L = line.getTotalLength();
      line.style.strokeDasharray = L + " " + L;
      wa(c, line, [{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: 2200, delay: 200, easing: "cubic-bezier(.45,0,.2,1)" });
      c.after(1500, function () { snap(c, function () { pin.classList.add("on"); }); });
      var dots = buildDots(), Q = 12, inst = c.instant;
      c.loop(function (t) {
        var ctx = fitCanvas(cv, 1428, 609);
        ctx.clearRect(0, 0, 1428, 609);
        var R0 = inst ? 1e9 : (t - .35) * 900, buckets = [];
        for (var q = 0; q < Q; q++) buckets.push([]);
        var Tw = t - 2.4, Rw = Tw > 0 ? (Tw % 3.4) * 560 : -999, damp = Math.max(0, 1 - Rw / 1500);
        for (var i = 0; i < dots.length; i++) {
          var o = dots[i]; if (o.d > R0) continue;
          var v = .36 + .6 * Math.exp(-Math.pow((o.d - R0) / 50, 2)) + .7 * damp * Math.exp(-Math.pow((o.d - Rw) / 46, 2)) + .5 * Math.exp(-o.d / 70);
          var lvl = Math.max(0, Math.min(Q - 1, Math.round(v * (Q - 1))));
          buckets[lvl].push(o);
        }
        for (q = 0; q < Q; q++) {
          var b = buckets[q]; if (!b.length) continue;
          var f = q / (Q - 1), r = 2.6 + 1.8 * f;
          ctx.fillStyle = "rgba(" + LEAF + "," + (0.1 + 0.9 * f).toFixed(3) + ")";
          ctx.beginPath();
          for (var j = 0; j < b.length; j++) { ctx.moveTo(b[j].x + r, b[j].y); ctx.arc(b[j].x, b[j].y, r, 0, 6.283); }
          ctx.fill();
        }
      });
    },
    reset: function (r) {
      killWA(r.el);
      r.$(".pin").classList.remove("on");
      var cv = r.$(".map-dots"); var x = cv.getContext("2d"); x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, cv.width, cv.height);
    }
  });

  /* ========================================================== 06 AKIŞ */
  function stemY(x) { return 740 - 90 * (x - 140) / 1640; }
  var WX = []; for (var w = 1; w <= 10; w++) WX.push(140 + 164 * (w - .5));
  var PX = []; for (var p = 1; p <= 5; p++) PX.push(140 + 328 * (p - .5));
  Deck.scene("akis", {
    enter: function (c) {
      var svg = c.$(".flow"), gW = c.$(".flow .weeks"), gL = c.$(".flow .leaves"), stem = c.$(".flow .stem");
      if (!gW.childNodes.length) {
        WX.forEach(function (x, i) {
          var g0 = svgEl("g", { transform: "translate(" + x + " " + stemY(x).toFixed(1) + ")" }, gW);
          var g = svgEl("g", { class: "wk" }, g0);
          svgEl("circle", { r: 19 }, g);
          var tx = svgEl("text", { y: 1 }, g); tx.textContent = i + 1;
        });
        PX.forEach(function (x, i) {
          var up = i % 2 === 0, y = stemY(x), y2 = up ? y - 196 : y + 196;
          var g = svgEl("g", { class: "ph-g" }, gL);
          svgEl("line", { class: "pole", x1: x, y1: y + (up ? -16 : 16), x2: x, y2: y2 }, g);
          svgEl("path", { class: "lf", d: "M0 0 C 9 -13 28 -17 46 -9 C 34 5 13 9 0 0 Z" }, svgEl("g", { transform: "translate(" + x + " " + (y + (up ? -40 : 40)) + ") rotate(" + (up ? -145 : 145) + ")" }, g));
          svgEl("path", { class: "lf", d: "M0 0 C 7 -10 21 -13 34 -7 C 25 4 10 7 0 0 Z", opacity: ".8" }, svgEl("g", { transform: "translate(" + x + " " + (y + (up ? -82 : 82)) + ") rotate(" + (up ? -38 : 38) + ")" }, g));
          svgEl("circle", { class: "bd", cx: x, cy: y2, r: 10 }, g);
        });
        var phs = c.$$(".phases .ph");
        phs.forEach(function (el, i) {
          var x = PX[i], y = stemY(x), up = i % 2 === 0;
          el.style.left = (x + 24) + "px";
          el.style.top = (up ? y - 206 : y + 50) + "px";
        });
        var bw = c.$(".flow .bud"); bw.setAttribute("transform", "translate(1786 649) rotate(8)");
        var bi = svgEl("g", {}, bw); while (bw.firstChild !== bi) bi.appendChild(bw.firstChild);
      }
      var L = stem.getTotalLength(), D0 = 450, DUR = 2600;
      stem.style.strokeDasharray = L + " " + L;
      wa(c, stem, [{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: DUR, delay: D0, easing: "linear" });
      function at(x) { return D0 + DUR * (x - 140) / 1640; }
      [].slice.call(gW.querySelectorAll("g.wk")).forEach(function (g, i) {
        g.style.transformBox = "fill-box"; g.style.transformOrigin = "center";
        wa(c, g, [{ scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }], { duration: 600, delay: at(WX[i]) - 60, easing: "cubic-bezier(.34,1.56,.64,1)" });
      });
      [].slice.call(gL.children).forEach(function (g, i) {
        var pole = g.querySelector(".pole"), lfs = g.querySelectorAll(".lf"), bd = g.querySelector(".bd"), d = at(PX[i]);
        var len = Math.abs(pole.getAttribute("y2") - pole.getAttribute("y1"));
        pole.style.strokeDasharray = len + " " + len;
        wa(c, pole, [{ strokeDashoffset: len }, { strokeDashoffset: 0 }], { duration: 650, delay: d });
        [].forEach.call(lfs, function (lf, k) {
          lf.style.transformBox = "fill-box"; lf.style.transformOrigin = "0% 60%";
          wa(c, lf, [{ scale: 0 }, { scale: 1 }], { duration: 700, delay: d + 120 + k * 140, easing: "cubic-bezier(.34,1.56,.64,1)" });
        });
        bd.style.transformBox = "fill-box"; bd.style.transformOrigin = "center";
        wa(c, bd, [{ scale: 0 }, { scale: 1 }], { duration: 600, delay: d + 420, easing: "cubic-bezier(.34,1.56,.64,1)" });
        var ph = c.$$(".phases .ph")[i];
        wa(c, ph, [{ opacity: 0, translate: i % 2 === 0 ? "0 24px" : "0 -24px", filter: "blur(6px)" }, { opacity: 1, translate: "0 0", filter: "blur(0px)" }], { duration: 800, delay: d + 300 });
      });
      var bud = c.$(".flow .bud > g");
      bud.style.transformBox = "fill-box"; bud.style.transformOrigin = "10.3% 76.5%";
      wa(c, bud, [{ scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }], { duration: 900, delay: D0 + DUR - 100, easing: "cubic-bezier(.34,1.56,.64,1)" });
      // özsu: gövde boyunca akan ışık
      var sap = c.$(".flow .sap"), wg = [].slice.call(gW.querySelectorAll("g.wk"));
      c.after(D0 + DUR + 500, function () {
        var t0 = null;
        c.loop(function (t) {
          if (t0 == null) t0 = t;
          var T = (t - t0) % 3.8, s = Math.min(1, T / 2.4), x = 140 + 1640 * easeInOut(s);
          sap.setAttribute("cx", x); sap.setAttribute("cy", stemY(x));
          sap.style.opacity = s >= 1 ? 0 : Math.min(1, T * 5, (1 - s) * 8);
          for (var i = 0; i < wg.length; i++) wg[i].classList.toggle("hot", s < 1 && Math.abs(x - WX[i]) < 46);
        });
      });
    },
    reset: function (r) {
      killWA(r.el);
      r.$$(".flow .weeks g.wk").forEach(function (g) { g.classList.remove("hot"); });
      var sap = r.$(".flow .sap"); sap.setAttribute("cx", -40); sap.setAttribute("cy", -40);
    }
  });

  /* ========================================================== 07 KAPILAR */
  var GATES = [714, 1206, 1534], STOPS = [662, 1154, 1482, 1780], GY = 480;
  Deck.scene("kapilar", {
    enter: function (c) {
      var gW = c.$(".g-weeks"), gG = c.$(".g-gates");
      if (!gW.childNodes.length) {
        [468, 796, 1124, 1452].forEach(function (x) { svgEl("line", { class: "sep", x1: x, y1: GY - 34, x2: x, y2: GY + 34 }, gW); });
        WX.forEach(function (x, i) {
          var g = svgEl("g", { transform: "translate(" + x + " " + GY + ")" }, gW);
          g.setAttribute("data-x", x);
          svgEl("circle", { r: 17 }, g);
          var tx = svgEl("text", { y: 1 }, g); tx.textContent = i + 1;
        });
        GATES.forEach(function (x) {
          var g = svgEl("g", { class: "gate", transform: "translate(" + x + " " + GY + ")" }, gG);
          svgEl("circle", { class: "halo", r: 58 }, g);
          svgEl("rect", { x: -38, y: -60, width: 8, height: 118, rx: 4 }, g);
          svgEl("rect", { x: 30, y: -60, width: 8, height: 118, rx: 4 }, g);
          svgEl("rect", { x: -46, y: -70, width: 92, height: 10, rx: 5 }, g);
        });
      }
      var prog = c.$(".g-prog"), tok = c.$(".token"), weeks = [].slice.call(gW.querySelectorAll("g"));
      var st = c.kp = { x: 140 };
      function setX(x) {
        st.x = x;
        tok.setAttribute("transform", "translate(" + x.toFixed(1) + " " + GY + ")");
        prog.style.strokeDasharray = Math.max(0.01, x - 140).toFixed(1) + " 4000";
        weeks.forEach(function (g) { g.classList.toggle("done", +g.getAttribute("data-x") < x - 4); });
      }
      st.go = function (to, ms, delay) {
        if (c.instant) { setX(to); return; }
        var from = st.x;
        c.after(delay || 0, function () {
          var t0 = null;
          var a = c.animate(0, 1, { duration: ms / 1000, ease: [0.45, 0, 0.2, 1], onUpdate: function (v) { setX(from + (to - from) * v); } });
        });
      };
      setX(140);
      tok.style.opacity = 1;
      wa(c, tok, [{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 500 });
      st.go(STOPS[0], 2000, 650);
    },
    step: function (n, c) {
      var gates = c.$$(".g-gates .gate"), leads = c.$$(".g-leads .ld"), cards = c.$$(".qc"), i = n - 1;
      snap(c, function () {
        if (gates[i]) gates[i].classList.add("lit");
        if (leads[i]) leads[i].classList.add("lit");
        if (cards[i]) cards[i].classList.add("lit");
      });
      if (c.kp) c.kp.go(STOPS[n], n === 3 ? 1400 : 1500, 650);
    },
    reset: function (r) {
      killWA(r.el);
      r.$$(".gate,.ld,.qc").forEach(function (e) { e.classList.remove("lit"); });
      r.$$(".g-weeks g").forEach(function (g) { g.classList.remove("done"); });
      r.$(".g-prog").style.strokeDasharray = "0.01 4000";
      r.$(".token").setAttribute("transform", "translate(140 " + GY + ")");
    }
  });

  /* ========================================================== 08 CHAPTER'LAR */
  Deck.scene("chapterlar", {
    enter: function (c) {
      var rot = [-7, 4, -3, 6, -5, 3];
      c.$$(".ch").forEach(function (el, i) {
        var cx = +getComputedStyle(el).getPropertyValue("--cx"), cy = +getComputedStyle(el).getPropertyValue("--cy");
        var dx = 960 - (120 + cx * 570 + 270), dy = 600 - (336 + cy * 262 + 119);
        wa(c, el, [
          { translate: dx + "px " + dy + "px", scale: .55, rotate: rot[i] + "deg", opacity: 0, easing: "ease-out" },
          { translate: dx + "px " + dy + "px", scale: .7, rotate: rot[i] + "deg", opacity: 1, offset: .3, easing: EASE },
          { translate: "0px 0px", scale: 1, rotate: "0deg", opacity: 1 }
        ], { duration: 1500, delay: 380 + i * 60, easing: "linear" });
      });
    },
    step: function (n, c) {
      if (n !== 1) return;
      var chs = c.$(".chs");
      c.$$(".ch-ok").forEach(function (o, i) { o.style.transitionDelay = (0.35 + i * 0.08) + "s"; });
      snap(c, function () { chs.classList.add("ok"); });
    },
    reset: function (r) { killWA(r.el); r.$(".chs").classList.remove("ok"); }
  });

  /* ========================================================== 09 KALİTE */
  var QX = [196, 616, 1036, 1456];
  Deck.scene("kalite", {
    enter: function (c) {
      var prog = c.$(".q-prog"), pulse = c.$(".q-pulse");
      c.q = { x: 150 };
      prog.style.strokeDasharray = "0.01 4000";
      c.q.set = function (x) { c.q.x = x; prog.style.strokeDasharray = Math.max(.01, x - 150).toFixed(1) + " 4000"; prog.style.opacity = x > 151 ? 1 : 0; };
      c.q.set(150);
      c.q.run = function (to, ms) {
        if (c.instant) { c.q.set(to); return; }
        var from = c.q.x;
        c.animate(0, 1, { duration: ms / 1000, ease: [0.45, 0, 0.2, 1], onUpdate: function (v) {
          var x = from + (to - from) * v; c.q.set(x);
          pulse.setAttribute("cx", x); pulse.setAttribute("cy", 582); pulse.style.opacity = v < 1 ? 1 : 0;
        } });
      };
    },
    step: function (n, c) {
      var qs = c.$$(".qs .q");
      snap(c, function () { if (qs[n - 1]) qs[n - 1].classList.add("on"); });
      if (!c.q) return;
      c.q.run(n === 4 ? 1770 : QX[n - 1], n === 1 ? 500 : 900);
      if (n === 4) {
        var pulse = c.$(".q-pulse");
        c.after(1200, function () {
          var t0 = null;
          c.loop(function (t) {
            if (t0 == null) t0 = t;
            var T = (t - t0) % 3, s = Math.min(1, T / 2.2), x = 150 + 1620 * easeInOut(s);
            pulse.setAttribute("cx", x); pulse.setAttribute("cy", 582);
            pulse.style.opacity = s >= 1 ? 0 : Math.min(1, T * 6, (1 - s) * 10);
          });
        });
      }
    },
    reset: function (r) {
      r.$$(".qs .q").forEach(function (q) { q.classList.remove("on"); });
      r.$(".q-prog").style.strokeDasharray = "0.01 4000"; r.$(".q-prog").style.opacity = 0;
      var p = r.$(".q-pulse"); p.setAttribute("cx", -50); p.style.opacity = 0;
    }
  });

  /* ========================================================== 10 BİLSEM */
  Deck.scene("bilsem", {
    enter: function (c) {
      var g = c.$(".tri-flow"), paths = c.$$(".tri-edges path");
      g.innerHTML = "";
      c.after(2000, function () {
        // öğrenci ↔ mentor çift yönlü; ikisi de projeye akar
        var list = [paths[0], paths[0], paths[1], paths[2]];
        pulses(c, g, list, { speed: 170, rest: .7, r: 5, glow: 13, reverse: function (i) { return i === 1; } });
      });
    },
    step: function (n, c) {
      var tri = c.$(".tri");
      snap(c, function () {
        tri.classList.remove("hl-s", "hl-k", "hl-p");
        tri.classList.add(["", "hl-s", "hl-k", "hl-p"][n]);
      });
    },
    reset: function (r) { r.$(".tri").classList.remove("hl-s", "hl-k", "hl-p"); r.$(".tri-flow").innerHTML = ""; }
  });

  /* ========================================================== 12 TEŞEKKÜRLER */
  Deck.scene("tesekkurler", {
    enter: function (c) {
      c.after(1900, function () {
        pulses(c, c.$(".roots2 .pulses"), c.$$(".traces2 path"), { reverse: true, speed: 260, rest: 1.1, r: 5, glow: 16 });
      });
    },
    reset: function (r) { r.$(".roots2 .pulses").innerHTML = ""; }
  });
})();
