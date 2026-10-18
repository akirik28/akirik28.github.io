/* ==========================================================================
   ADA SARP KIRIK · kişisel site (v6) — davranış
   Hareket: Motion (motion.dev → window.Motion). Yoksa ya da "hareketi azalt"
   açıksa her şey hareketsiz ama eksiksiz görünür.
   ========================================================================== */
(function () {
  "use strict";

  var M = window.Motion || null;
  var root = document.documentElement;
  var RM = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ANIM = !!M && !RM;
  var EXPO = [0.16, 1, 0.3, 1];
  var SITE = window.SITE || {};
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return [].slice.call((el || document).querySelectorAll(s)); };

  /* eski bağlantılar: /#18 gibi sunum kareleri → sunumun kendisi */
  if (SITE.eskiAnaSunum && /^#\d+(\.\d+)?$/.test(location.hash)) {
    location.replace("/" + SITE.eskiAnaSunum + "/" + location.hash);
    return;
  }

  $("#year").textContent = new Date().getFullYear();

  /* ---------------- dil ---------------- */
  function lang() { return root.getAttribute("data-lang") === "en" ? "en" : "tr"; }
  function fmt(v, dec) { return Number(v).toLocaleString(lang() === "en" ? "en-US" : "tr-TR", { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 }); }
  function paintNums() { $$("[data-num]").forEach(function (el) { if (!el._c) el.textContent = fmt(el.getAttribute("data-num"), +el.getAttribute("data-dec") || 0); }); }
  function setLang(l) {
    root.setAttribute("data-lang", l); root.lang = l;
    try { localStorage.setItem("ask-lang", l); } catch (e) {}
    $$("[data-set-lang]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-set-lang") === l)); });
    paintNums();
  }
  $$("[data-set-lang]").forEach(function (b) { b.addEventListener("click", function () { setLang(b.getAttribute("data-set-lang")); }); });
  setLang(lang());

  /* ---------------- tema ---------------- */
  var meta = $('meta[name="theme-color"]');
  function setTheme(t, save) {
    root.setAttribute("data-theme", t);
    if (save) { try { localStorage.setItem("ask-tema", t); } catch (e) {} }
    if (meta) meta.setAttribute("content", t === "dark" ? "#0B0B0C" : "#F5F4F0");
  }
  $("#themeBtn").addEventListener("click", function () {
    var t = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(t, true);
    if (ANIM) M.animate("#themeBtn svg", { rotate: [-90, 0], scale: [0.6, 1] }, { type: "spring", stiffness: 300, damping: 16 });
  });
  setTheme(root.getAttribute("data-theme") || "dark");

  /* ---------------- menü ---------------- */
  var nav = $("#nav"), links = $("#links"), menuBtn = $("#menuBtn");
  function closeMenu() { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  menuBtn.addEventListener("click", function () {
    var open = !links.classList.contains("open");
    links.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", String(open));
    if (open && ANIM) M.animate($$("a", links), { opacity: [0, 1], x: [-12, 0] }, { delay: M.stagger(0.04), duration: 0.4, ease: EXPO });
  });
  $$("a", links).forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* hangi bölümdeyiz */
  var secLinks = $$("a", links), secs = secLinks.map(function (a) { return $(a.getAttribute("href")); });
  if ("IntersectionObserver" in window) {
    var vis = {};
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) { vis[e.target.id] = e.isIntersecting ? e.intersectionRatio : 0; });
      var best = null, br = 0;
      secs.forEach(function (s) { if (s && vis[s.id] > br) { br = vis[s.id]; best = s.id; } });
      secLinks.forEach(function (a) { a.classList.toggle("on", best && a.getAttribute("href") === "#" + best); });
    }, { threshold: [0, 0.15, 0.3, 0.5], rootMargin: "-30% 0px -40% 0px" });
    secs.forEach(function (s) { if (s) so.observe(s); });
  }

  /* ilerleme çizgisi */
  var prog = $("#progress");
  if (M && M.scroll && !RM) {
    M.scroll(function (p) { prog.style.transform = "scaleX(" + p + ")"; });
  } else {
    window.addEventListener("scroll", function () {
      var h = document.documentElement.scrollHeight - innerHeight;
      prog.style.transform = "scaleX(" + (h > 0 ? scrollY / h : 0) + ")";
    }, { passive: true });
  }

  /* ---------------- sayaçlar ---------------- */
  function countUp(scope) {
    $$("[data-num]", scope).forEach(function (el) {
      if (el._done) return; el._done = true;
      var to = +el.getAttribute("data-num"), dec = +el.getAttribute("data-dec") || 0;
      if (!ANIM) { el.textContent = fmt(to, dec); return; }
      el._c = true;
      M.animate(0, to, { duration: 1.5, ease: EXPO, onUpdate: function (v) { el.textContent = fmt(v, dec); } })
        .then(function () { el._c = false; el.textContent = fmt(to, dec); });
    });
  }

  /* ---------------- giriş animasyonu ---------------- */
  (function hero() {
    var h1 = $("#heroTitle");
    // başlığı kelimelere böl (maskenin içinden yükselsin)
    [].slice.call(h1.childNodes).forEach(function (n) {
      if (n.nodeType === 3) {
        var frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(function (p) {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
          var w = document.createElement("span"); w.className = "hw"; var i = document.createElement("span"); i.textContent = p; w.appendChild(i); frag.appendChild(w);
        });
        h1.replaceChild(frag, n);
      } else if (n.nodeType === 1) {
        var w2 = document.createElement("span"); w2.className = "hw"; h1.replaceChild(w2, n); var i2 = document.createElement("span"); i2.appendChild(n); w2.appendChild(i2);
      }
    });
    var st = document.createElement("style");
    st.textContent = ".hw{display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:.08em;margin-bottom:-.08em}.hw>span{display:inline-block}";
    document.head.appendChild(st);
    countUp($(".hero-stats"));
    if (!ANIM) return;
    M.animate($$(".hw > span", h1), { y: ["110%", "0%"] }, { duration: 1.1, ease: EXPO, delay: M.stagger(0.08, { startDelay: 0.15 }) });
    M.animate($$(".hero-text [data-in]"), { opacity: [0, 1], y: [22, 0] }, { duration: 0.9, ease: EXPO, delay: M.stagger(0.09, { startDelay: 0.35 }) });
    M.animate("#portrait", { clipPath: ["inset(100% 0 0 0 round 32px)", "inset(0% 0 0 0 round 32px)"] }, { duration: 1.3, ease: EXPO, delay: 0.2 });
    M.animate("#portrait img", { scale: [1.25, 1] }, { duration: 1.8, ease: EXPO, delay: 0.2 });
    M.animate($$(".chip-float"), { opacity: [0, 1], scale: [0.7, 1] }, { type: "spring", stiffness: 260, damping: 18, delay: M.stagger(0.12, { startDelay: 0.9 }) });
    // portre kaydırdıkça hafifçe yukarı kayar (parallax)
    if (M.scroll) M.scroll(M.animate("#portrait img", { y: ["0%", "-10%"] }, { ease: "linear" }), { target: $(".hero"), offset: ["start start", "end start"] });
  })();

  /* ---------------- kaydırınca belirme ---------------- */
  var reveal = $$("main [data-in]").filter(function (el) { return !el.closest(".hero-text"); });
  var groups = $$("[data-stagger]");
  if (ANIM && M.inView) {
    reveal.forEach(function (el) {
      el.style.opacity = "0";
      M.inView(el, function () {
        M.animate(el, { opacity: [0, 1], y: [36, 0] }, { duration: 1, ease: EXPO });
        countUp(el); special(el);
      }, { amount: 0.15 });
    });
    groups.forEach(function (g) {
      var kids = [].slice.call(g.children);
      kids.forEach(function (k) { k.style.opacity = "0"; });
      M.inView(g, function () {
        M.animate(kids, { opacity: [0, 1], y: [30, 0] }, { duration: 0.9, ease: EXPO, delay: M.stagger(0.08) });
        countUp(g);
      }, { amount: 0.15 });
    });
  } else {
    countUp(document); reveal.forEach(special);
  }

  /* bölüme özel küçük gösteriler */
  function special(el) {
    if ($("#nbaChart", el) || el.querySelector && el.querySelector("#nbaChart")) drawChart();
    if (el.classList && el.classList.contains("expo")) growBars(el);
  }

  /* ---------------- "şu an" satırı ---------------- */
  (function () {
    var items = $$("#rot b"); if (items.length < 2 || RM) return;
    var k = 0;
    setInterval(function () {
      if (document.hidden) return;
      var a = items[k]; k = (k + 1) % items.length; var b = items[k];
      if (ANIM) {
        M.animate(a, { y: [0, -18], opacity: [1, 0] }, { duration: 0.35 }).then(function () { a.classList.remove("on"); });
        b.classList.add("on"); M.animate(b, { y: [18, 0], opacity: [0, 1] }, { duration: 0.6, ease: EXPO, delay: 0.1 });
      } else { a.classList.remove("on"); b.classList.add("on"); }
    }, 2800);
  })();

  /* ---------------- NBA görselleştirmesi (temsili) ---------------- */
  (function () {
    var g = $("#nbaChart .dots"); if (!g) return;
    var seed = 11; function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
    var html = "";
    for (var i = 0; i < 64; i++) {
      var x = 50 + rnd() * 490, base = 190 - (x - 40) * (150 / 500), y = Math.max(16, Math.min(196, base + (rnd() - 0.5) * 90));
      html += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + (2.5 + rnd() * 3).toFixed(1) + '" opacity=".45"/>';
    }
    g.innerHTML = html;
  })();
  var chartDone = false;
  function drawChart() {
    if (chartDone) return; chartDone = true;
    var dots = $$("#nbaChart .dots circle"), tr = $("#nbaChart .trend");
    if (!ANIM) { if (tr) tr.style.strokeDashoffset = "0"; return; }
    M.animate(dots, { opacity: [0, 0.5], scale: [0, 1] }, { delay: M.stagger(0.012, { startDelay: 0.3 }), type: "spring", stiffness: 300, damping: 14 });
    if (tr) M.animate(tr, { strokeDashoffset: [1, 0] }, { duration: 1.6, delay: 0.8, ease: EXPO });
  }
  function growBars(el) {
    $$(".bar b", el).forEach(function (b, k) {
      var w = b.getAttribute("data-w") + "%";
      if (!ANIM) { b.style.width = w; return; }
      M.animate(b, { width: ["0%", w] }, { duration: 1.3, delay: 0.4 + k * 0.18, ease: EXPO });
    });
  }
  if (!ANIM) { drawChart(); $$(".expo").forEach(growBars); }

  /* ---------------- JARVIS küresi ---------------- */
  var orbC = $("canvas[data-orb]"), orbG = orbC && orbC.getContext("2d"), orbVis = false, orbRun = false, pts = [];
  (function () { var n = 520, gold = Math.PI * (3 - Math.sqrt(5)); for (var i = 0; i < n; i++) { var y = 1 - (i / (n - 1)) * 2, r = Math.sqrt(1 - y * y), th = gold * i; pts.push([Math.cos(th) * r, y, Math.sin(th) * r]); } })();
  function drawOrb(t) {
    var c = orbC, g = orbG, d = Math.min(2, window.devicePixelRatio || 1), w = c.clientWidth, h = c.clientHeight;
    if (!w || !h) return;
    if (c.width !== Math.round(w * d) || c.height !== Math.round(h * d)) { c.width = Math.round(w * d); c.height = Math.round(h * d); }
    var W = c.width, H = c.height, cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.3, beat = 1 + Math.sin(t * 1.5) * 0.03;
    g.clearRect(0, 0, W, H);
    var gl = g.createRadialGradient(cx, cy, 0, cx, cy, R * 1.6);
    gl.addColorStop(0, "rgba(255,190,90,.4)"); gl.addColorStop(0.4, "rgba(255,170,60,.08)"); gl.addColorStop(1, "rgba(255,170,60,0)");
    g.fillStyle = gl; g.fillRect(0, 0, W, H);
    var a = t * 0.3, ca = Math.cos(a), sa = Math.sin(a), ct = Math.cos(0.42), st = Math.sin(0.42);
    for (var i = 0; i < pts.length; i++) {
      var p = pts[i], x = p[0] * ca - p[2] * sa, z = p[0] * sa + p[2] * ca, y = p[1] * ct - z * st; z = p[1] * st + z * ct;
      var dp = (z + 1) / 2, r = (0.7 + dp * 1.7) * d;
      g.fillStyle = "rgba(255," + (170 + dp * 60 | 0) + "," + (70 + dp * 80 | 0) + "," + (0.15 + dp * 0.8) + ")";
      g.fillRect(cx + x * R * beat - r / 2, cy + y * R * beat - r / 2, r, r);
    }
    g.lineWidth = d;
    for (var k = 0; k < 3; k++) { g.strokeStyle = "rgba(255,190,100," + (0.2 - k * 0.05) + ")"; g.beginPath(); g.ellipse(cx, cy, R * (1.3 + k * 0.2), R * (0.42 + k * 0.1), t * (0.18 + k * 0.07) + k, 0, Math.PI * 2); g.stroke(); }
  }
  function orbLoop(ts) {
    if (!orbVis || document.hidden) { orbRun = false; return; }
    drawOrb(ts / 1000); requestAnimationFrame(orbLoop);
  }
  if (orbC && "IntersectionObserver" in window) {
    new IntersectionObserver(function (es) {
      orbVis = es[0].isIntersecting;
      if (RM) { if (orbVis) drawOrb(1); return; }
      if (orbVis && !orbRun) { orbRun = true; requestAnimationFrame(orbLoop); }
    }).observe(orbC);
    document.addEventListener("visibilitychange", function () { if (!document.hidden && orbVis && !orbRun && !RM) { orbRun = true; requestAnimationFrame(orbLoop); } });
  }

  /* =====================================================================
     HAREKET KATMANI: dönen görseller · akan bantlar · imleç · mıknatıs ·
     eğilen kartlar · kelime kelime başlıklar · perdeyle açılan görseller
     ===================================================================== */
  var fine = window.matchMedia && matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* dönen görseller */
  $$(".cyc").forEach(function (box) {
    var items = [].slice.call(box.children).filter(function (c) { return c.tagName === "IMG" || c.classList.contains("fr"); });
    if (items.length < 2 || RM) return;
    var k = items.findIndex(function (c) { return c.classList.contains("on"); });
    if (k < 0) { k = 0; items[0].classList.add("on"); }
    var every = +box.getAttribute("data-every") || 4000, off = +box.getAttribute("data-offset") || 0, vis = !("IntersectionObserver" in window);
    if (!vis) new IntersectionObserver(function (es) { vis = es[0].isIntersecting; }).observe(box);
    setTimeout(function () {
      setInterval(function () {
        if (!vis || document.hidden) return;
        items[k].classList.remove("on"); k = (k + 1) % items.length; items[k].classList.add("on");
      }, every);
    }, off);
  });

  /* akan kurum bandı: kesintisiz döngü için içeriği çoğalt */
  var orun = $("#orgsRun");
  if (orun) [].slice.call(orun.children).forEach(function (li) { var c = li.cloneNode(true); c.setAttribute("aria-hidden", "true"); orun.appendChild(c); });

  /* dev akan yazılar: kaydırma hızı bandı hızlandırır, yönünü çevirir ve eğer */
  var kins = $$(".kinetic").map(function (k) {
    var tr = $(".kin-track", k); tr.innerHTML = tr.innerHTML + tr.innerHTML + tr.innerHTML;
    return { el: k, tr: tr, dir: +k.getAttribute("data-speed") || 1, x: 0, w: 0, vis: false };
  });
  if (kins.length && !RM) {
    var lastY = window.scrollY, vel = 0, kinRun = false;
    var kinLoop = function () {
      var y = window.scrollY, dy = y - lastY; lastY = y; vel += (dy - vel) * 0.12;
      var any = false, sg = vel < -0.3 ? -1 : 1, sp = 0.8 + Math.min(Math.abs(vel) * 0.45, 18), sk = Math.max(-12, Math.min(12, -vel * 0.35));
      kins.forEach(function (o) {
        if (!o.vis) return; any = true;
        if (!o.w) o.w = o.tr.scrollWidth / 3;
        o.x -= o.dir * sg * sp;
        if (o.x <= -o.w) o.x += o.w; if (o.x > 0) o.x -= o.w;
        o.tr.style.transform = "translate3d(" + o.x.toFixed(1) + "px,0,0) skewX(" + (sk * o.dir).toFixed(2) + "deg)";
      });
      if (any && !document.hidden) requestAnimationFrame(kinLoop); else kinRun = false;
    };
    var kio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { kins.forEach(function (o) { if (o.el === e.target) o.vis = e.isIntersecting; }); });
      if (!kinRun && kins.some(function (o) { return o.vis; })) { kinRun = true; requestAnimationFrame(kinLoop); }
    });
    kins.forEach(function (o) { kio.observe(o.el); });
  }

  /* bölüm başlıkları: kelime kelime yükselsin */
  function splitWords(el) {
    var walk = function (node) {
      [].slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
            var w = document.createElement("span"); w.className = "wm"; var i = document.createElement("span"); i.textContent = p; w.appendChild(i); frag.appendChild(w);
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1 && !n.classList.contains("wm")) walk(n);
      });
    };
    walk(el);
  }
  if (ANIM && M.inView) {
    $$(".sec-h h2, .foot-big").forEach(function (h) {
      splitWords(h);
      var words = $$(".wm > span", h);
      words.forEach(function (s) { s.style.transform = "translateY(110%)"; });
      M.inView(h, function () {
        M.animate(words, { y: ["110%", "0%"] }, { duration: 1, ease: EXPO, delay: M.stagger(0.06, { startDelay: 0.1 }) });
      }, { amount: 0.4 });
    });

    /* görseller perdeyle açılsın */
    $$(".gallery figure, .eyp-photos figure, .shot-img, .feat-vis > .browser:not(.mini), .expo-img, .screen, .stem .weeks").forEach(function (el) {
      el.style.clipPath = "inset(0% 0% 100% 0%)";
      // kendi clip-path'i kapalı öğeyi Chrome "görünmez" sayar; kapsayıcısını izle
      M.inView(el.parentElement || el, function () {
        M.animate(el, { clipPath: ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"] }, { duration: 1.25, ease: EXPO, delay: 0.1 })
          .then(function () { el.style.clipPath = ""; });
      }, { amount: 0.15 });
    });

    /* kartlardaki büyük sayılar yaylı zıplasın */
    $$(".ap b, .awards b, .ball-stats b").forEach(function (b) {
      b.style.display = "inline-block"; b.style.transform = "scale(.6)"; b.style.opacity = "0";
      M.inView(b, function () { M.animate(b, { scale: [0.6, 1], opacity: [0, 1] }, { type: "spring", stiffness: 260, damping: 14, delay: 0.15 }); }, { amount: 0.6 });
    });
  }

  if (fine && ANIM) {
    /* imleç: nokta + yaylı halka, tıklanabilir şeylerin üstünde büyür */
    root.classList.add("has-cursor");
    var ring = document.createElement("div"); ring.className = "cursor"; ring.setAttribute("aria-hidden", "true"); ring.innerHTML = '<span class="c-txt"></span>';
    var dot = document.createElement("div"); dot.className = "cursor-dot"; dot.setAttribute("aria-hidden", "true");
    document.body.appendChild(ring); document.body.appendChild(dot);
    var mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, ctx = $(".c-txt", ring);
    window.addEventListener("mousemove", function (e) { mx = e.clientX; my = e.clientY; dot.style.transform = "translate3d(" + mx + "px," + my + "px,0)"; }, { passive: true });
    (function ringLoop() { rx += (mx - rx) * 0.2; ry += (my - ry) * 0.2; ring.style.transform = "translate3d(" + rx.toFixed(1) + "px," + ry.toFixed(1) + "px,0)"; requestAnimationFrame(ringLoop); })();
    document.addEventListener("mouseover", function (e) {
      var t = e.target.closest && e.target.closest("a, button, .screen, .gallery figure, .shot, .feat, .jv, .expo");
      ring.classList.toggle("big", !!t);
      ctx.textContent = !t ? "" : t.matches(".screen, [data-start]") ? "▶" : (t.matches("a[target=_blank]") ? "↗" : (t.matches(".gallery figure") ? "◉" : ""));
    });
    document.addEventListener("mouseleave", function () { ring.style.opacity = "0"; dot.style.opacity = "0"; });
    document.addEventListener("mouseenter", function () { ring.style.opacity = ""; dot.style.opacity = ""; });

    /* mıknatıs: düğmeler imlece doğru çekilir */
    $$(".btn, .icon-btn, .foot-links a, .logo, .lang").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect(), dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        M.animate(el, { x: dx * 0.28, y: dy * 0.32 }, { type: "spring", stiffness: 350, damping: 18 });
      });
      el.addEventListener("mouseleave", function () { M.animate(el, { x: 0, y: 0 }, { type: "spring", stiffness: 260, damping: 12 }); });
    });

    /* kartlar: imlece göre eğilir, ışık imleci takip eder */
    var st = document.createElement("style");
    st.textContent = ".has-cursor .card{transition:box-shadow .45s var(--ease),border-color .3s,background-color .4s}.has-cursor article.card:hover,.has-cursor a.card:hover{transform:none}";
    document.head.appendChild(st);
    $$(".card").forEach(function (c) {
      var tilt = !c.matches(".quote");
      c.addEventListener("mousemove", function (e) {
        var r = c.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        c.style.setProperty("--mx", (px * 100).toFixed(1) + "%"); c.style.setProperty("--my", (py * 100).toFixed(1) + "%");
        if (tilt) M.animate(c, { rotateX: (0.5 - py) * 4, rotateY: (px - 0.5) * 5, y: -4, transformPerspective: 1200 }, { type: "spring", stiffness: 260, damping: 22 });
      });
      c.addEventListener("mouseleave", function () { if (tilt) M.animate(c, { rotateX: 0, rotateY: 0, y: 0 }, { type: "spring", stiffness: 200, damping: 16 }); });
    });

    /* giriş: fareyle derinlik (portre ve çipler farklı hızlarda kayar) */
    var hero = $(".hero"), layers = [{ el: $("#portrait"), d: 14 }, { el: $(".c1"), d: 34 }, { el: $(".c2"), d: -28 }, { el: $(".c3"), d: 24 }, { el: $("#heroTitle"), d: -8 }];
    var hx = 0, hy = 0, tx = 0, ty = 0;
    hero.addEventListener("mousemove", function (e) { var r = hero.getBoundingClientRect(); tx = (e.clientX - r.left) / r.width - 0.5; ty = (e.clientY - r.top) / r.height - 0.5; });
    hero.addEventListener("mouseleave", function () { tx = 0; ty = 0; });
    (function heroLoop() {
      hx += (tx - hx) * 0.08; hy += (ty - hy) * 0.08;
      layers.forEach(function (l) { if (l.el) l.el.style.translate = (hx * l.d).toFixed(2) + "px " + (hy * l.d).toFixed(2) + "px"; });
      requestAnimationFrame(heroLoop);
    })();
  }

  /* ---------------- sunum kartı ---------------- */
  var AY = { tr: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] };
  function ay(t, l) { var p = String(t || "").split("-"), m = +p[1]; return m ? AY[l][m - 1] + " " + p[0] : (p[0] || ""); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function both(tr, en) { return '<span data-l="tr">' + tr + '</span><span data-l="en">' + en + "</span>"; }
  var LIST = (window.SUNUMLAR || []).slice().sort(function (a, b) { return String(b.tarih).localeCompare(String(a.tarih)); });
  var talk = $("#talk"), F = LIST[0], theaterOpen = false, frames = [];
  function pv(s, i) { return "/onizleme/" + esc(s.klasor) + "/" + String(i + 1).padStart(2, "0") + ".webp"; }
  function en(s, k) { return s[k + "En"] != null ? s[k + "En"] : s[k]; }
  var TUR = { yeniden: ["Sıfırdan yeniden tasarım", "Redesigned from scratch"], orijinal: ["Orijinal tasarım", "Original design"], web: ["Web sunumu", "Web presentation"] };
  if (F && talk) {
    var href = "/" + F.klasor + "/"; frames = F.kareler || [];
    talk.innerHTML =
      '<button class="screen" type="button" data-start="' + esc(href) + '" aria-label="' + esc(F.baslik) + '">' +
        frames.map(function (c, i) { return '<img src="' + pv(F, i) + '" alt="" loading="lazy"' + (i ? "" : ' class="on"') + ">"; }).join("") +
        '<span class="play"><i aria-hidden="true"></i>' + both("Tam ekran başlat", "Play full screen") + "</span>" +
      "</button>" +
      '<div class="t-info">' +
        '<div class="tagrow" style="--c:#FF4FA0"><span class="tag">' + both("Son sunum · " + ay(F.tarih, "tr"), "Latest talk · " + ay(F.tarih, "en")) + "</span></div>" +
        '<h3 class="t-big">' + both(esc(F.baslik), esc(en(F, "baslik"))) + "</h3>" +
        (F.altBaslik ? '<p class="t-sub serif">' + both(esc(F.altBaslik), esc(en(F, "altBaslik"))) + "</p>" : "") +
        '<p class="t-meta">' + both(esc(F.konu || ""), esc(en(F, "konu") || "")) + "<br>" +
          both(esc(F.sure || "") + (F.ekran ? " · " + F.ekran + " ekran" : "") + (F.ekip ? " · " + esc(F.ekip) : ""),
               esc(en(F, "sure") || "") + (F.ekran ? " · " + F.ekran + " screens" : "") + (en(F, "ekip") ? " · " + esc(en(F, "ekip")) : "")) + "</p>" +
        (F.bolumler ? '<div class="t-dots">' + F.bolumler.map(function (b) { return '<span style="--c:' + esc(b.renk) + '">' + esc(b.no) + "</span>"; }).join("") + "</div>" : "") +
        '<div class="btns"><button class="btn primary" type="button" data-start="' + esc(href) + '">▶ ' + both("Tam ekran başlat", "Play full screen") + '</button><a class="btn ghost" href="/sunumlar/">' + both("Tüm sunumlar", "All talks") + " →</a></div>" +
      "</div>";
    var timgs = $$(".screen img", talk), tc = 0;
    if (!RM && timgs.length > 1) setInterval(function () {
      if (document.hidden || theaterOpen) return;
      var r = talk.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
      timgs[tc].classList.remove("on"); tc = (tc + 1) % timgs.length; timgs[tc].classList.add("on");
    }, 3000);
  }

  /* diğer sunumlar: tarihli kart ızgarası; önizleme kareleri görünürken sırayla döner */
  var grid = $("#talks");
  if (grid && LIST.length > 1) {
    grid.innerHTML = LIST.slice(1).map(function (s) {
      var h = "/" + s.klasor + "/", n = (s.kareler || []).length || 1, t = TUR[s.tur] || TUR.yeniden;
      return '<article class="card tk" style="--c:' + esc(s.renk || "#7C95FF") + '">' +
        '<button class="tk-scr" type="button" data-start="' + esc(h) + '" aria-label="' + esc(s.baslik) + '">' +
          Array.apply(null, Array(n)).map(function (_, i) { return '<img src="' + pv(s, i) + '" alt="" loading="lazy"' + (i ? "" : ' class="on"') + ">"; }).join("") +
          '<span class="tk-play" aria-hidden="true"></span>' +
        "</button>" +
        '<div class="tk-body">' +
          '<p class="tk-date mono">' + both(ay(s.tarih, "tr"), ay(s.tarih, "en")) + '<span class="tk-lang">' + esc(s.dil || "TR") + "</span></p>" +
          '<h3 class="h4 tk-t">' + both(esc(s.baslik), esc(en(s, "baslik"))) + "</h3>" +
          (s.altBaslik ? '<p class="tk-sub">' + both(esc(s.altBaslik), esc(en(s, "altBaslik"))) + "</p>" : "") +
          '<p class="tk-meta">' + both(esc(s.konu || ""), esc(en(s, "konu") || "")) + "</p>" +
          '<div class="tagrow"><span class="tag">' + both(t[0], t[1]) + '</span><span class="tag soft">' + both((s.ekran || 1) + " ekran", (s.ekran || 1) + (s.ekran === 1 ? " screen" : " screens")) + "</span></div>" +
        "</div>" +
      "</article>";
    }).join("");
    var cards = $$(".tk", grid);
    if (!RM) setInterval(function () {
      if (document.hidden || theaterOpen) return;
      cards.forEach(function (c) {
        var r = c.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
        var im = $$(".tk-scr img", c); if (im.length < 2) return;
        var k = im.findIndex(function (x) { return x.classList.contains("on"); });
        im[k].classList.remove("on"); im[(k + 1) % im.length].classList.add("on");
      });
    }, 2600);
  }

  var th = $("#theater"), frame = $("#theaterFrame"), quietT = null;
  function fsEl() { return document.fullscreenElement || document.webkitFullscreenElement || null; }
  function startTalk(h) {
    var req = th.requestFullscreen || th.webkitRequestFullscreen;
    if (!req) { location.href = h; return; }
    theaterOpen = true; th.hidden = false; th.classList.remove("quiet"); frame.src = h;
    var p; try { p = req.call(th); } catch (e) { p = null; }
    if (p && p.catch) p.catch(function () { closeTalk(); location.href = h; });
    clearTimeout(quietT); quietT = setTimeout(function () { if (fsEl()) th.classList.add("quiet"); }, 3000);
  }
  function closeTalk() {
    if (!theaterOpen) return;
    theaterOpen = false; clearTimeout(quietT); th.hidden = true; th.classList.remove("quiet"); frame.src = "about:blank";
    if (fsEl()) { var x = document.exitFullscreen || document.webkitExitFullscreen; if (x) { var r = x.call(document); if (r && r.catch) r.catch(function () {}); } }
  }
  frame.addEventListener("load", function () { if (theaterOpen) { try { frame.contentWindow.focus(); } catch (e) {} } });
  function onFs() { if (theaterOpen && !fsEl()) closeTalk(); }
  document.addEventListener("fullscreenchange", onFs); document.addEventListener("webkitfullscreenchange", onFs);
  $("#theaterClose").addEventListener("click", closeTalk);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && theaterOpen) closeTalk(); });
  document.addEventListener("click", function (e) { var b = e.target.closest && e.target.closest("[data-start]"); if (b) startTalk(b.getAttribute("data-start")); });
})();
