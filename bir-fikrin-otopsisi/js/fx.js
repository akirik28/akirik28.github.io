/* ============================================================
   FX — küçük, bağımsız görsel efekt yardımcıları
   ============================================================ */
(function () {
  "use strict";

  var FX = {};

  /* Türkçe binlik ayırıcı: 5127 → "5.127" */
  FX.fmt = function (n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  /* Basit, tekrarlanabilir rastgele sayı (her yüklemede aynı düzen) */
  FX.rng = function (seed) {
    var s = seed || 7;
    return function () {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  };

  /* Harfleri rastgele sırayla beliren span'lara böler (genişlik değişmez) */
  FX.letters = function (text, seed, spread, base) {
    var r = FX.rng(seed || 3);
    var pal = FX.palette();
    spread = spread || 1.1;
    base = base || 0;
    return Array.from(text).map(function (ch, i) {
      if (ch === " ") return '<span class="ch">&nbsp;</span>';
      var d = (base + r() * spread).toFixed(2);
      var c = pal.length ? pal[(i + (seed || 0)) % pal.length] : "var(--accent)";
      return '<span class="ch" style="--d:' + d + "s;--c:" + c + '">' + ch + "</span>";
    }).join("");
  };

  /* Harfleri dağılmış konumlardan toplayan / dağıtan span'lar */
  FX.scatter = function (text, seed, power) {
    var r = FX.rng(seed || 11);
    power = power || 1;
    return Array.from(text).map(function (ch, i) {
      if (ch === " ") return '<span class="lt">&nbsp;</span>';
      var lx = ((r() - 0.5) * 220 * power).toFixed(0) + "px";
      var ly = ((r() - 0.3) * -160 * power).toFixed(0) + "px";
      var lr = ((r() - 0.5) * 50 * power).toFixed(0) + "deg";
      var ld = (i * 0.035 + r() * 0.12).toFixed(2) + "s";
      return '<span class="lt" style="--lx:' + lx + ";--ly:" + ly + ";--lr:" + lr + ";--ld:" + ld + '">' + ch + "</span>";
    }).join("");
  };

  /* Sayaç animasyonu */
  FX.count = function (el, to, dur, from, onDone) {
    var start = null;
    from = from || 0;
    var raf;
    function tick(t) {
      if (!start) start = t;
      var p = Math.min(1, (t - start) / dur);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = FX.fmt(from + (to - from) * e);
      if (p < 1) raf = requestAnimationFrame(tick);
      else if (onDone) onDone();
    }
    raf = requestAnimationFrame(tick);
    return function () { cancelAnimationFrame(raf); };
  };

  /* Daktilo efekti */
  FX.type = function (el, text, speed, onDone) {
    var i = 0, alive = true;
    el.textContent = "";
    function step() {
      if (!alive) return;
      i++;
      el.textContent = text.slice(0, i);
      if (i < text.length) setTimeout(step, speed + Math.random() * speed * 0.8);
      else if (onDone) onDone();
    }
    setTimeout(step, speed);
    return function () { alive = false; };
  };

  /* Canvas'ı sahne ölçeğine ve ekran yoğunluğuna göre keskinleştirir.
     Çizimler her zaman 1920×1080 sahne koordinatlarında yapılır. */
  FX.fit = function (canvas, w, h) {
    var scale = (window.ENGINE && window.ENGINE.scale) || 1;
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    var k = Math.max(0.5, Math.min(2.2, scale * dpr));
    canvas.width = Math.round(w * k);
    canvas.height = Math.round(h * k);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    var ctx = canvas.getContext("2d");
    ctx.setTransform(k, 0, 0, k, 0, 0);
    return ctx;
  };

  function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  function hexToRgb(hex) {
    var m = hex.replace("#", "");
    if (m.length === 3) m = m.split("").map(function (c) { return c + c; }).join("");
    var n = parseInt(m, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  FX.rgb = hexToRgb;
  FX.accentRGB = function (el) {
    try {
      var v = el ? getComputedStyle(el).getPropertyValue("--accent").trim() : cssVar("--accent");
      return hexToRgb(v || "#6FE3C6");
    } catch (e) { return [111, 227, 198]; }
  };

  /* Harflerin "tanımlanma" anında yanıp söndüğü renkler */
  FX.palette = function () {
    var C = window.CONFIG || {};
    var fc = C.fileColors || {};
    return ["01", "02", "03", "04", "05"].map(function (k) { return fc[k]; }).filter(Boolean);
  };

  /* ------------------------------------------------------------
     DNA SARMALI — Dosya 03
     3 bölüm (Kişisel / Davranışsal / Sosyal), her biri 18 baz çifti.
     ------------------------------------------------------------ */
  FX.DNA = function (canvas, opts) {
    this.c = canvas;
    this.o = opts; // {x0, x1, cy, amp, segments:[{genes:[indices]}], codes:[[...]]}
    this.lit = [false, false, false];
    this.focus = -1;
    this.t = 0;
    this.raf = 0;
    this.cols = (opts.colors || []).map(hexToRgb);
    this.acc = this.cols[0] || FX.accentRGB();
  };
  FX.DNA.prototype.start = function () {
    var self = this;
    this.ctx = FX.fit(this.c, 1920, 1080);
    this.last = performance.now();
    var loop = function (now) {
      var dt = Math.min(50, now - self.last);
      self.last = now;
      self.t += dt * 0.00055;
      self.draw();
      self.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  };
  FX.DNA.prototype.stop = function () { cancelAnimationFrame(this.raf); };
  FX.DNA.prototype.draw = function () {
    var o = this.o, ctx = this.ctx, t = this.t, A = this.acc;
    var per = 18, segs = 3, N = per * segs;
    var span = (o.x1 - o.x0);
    var gap = 34; // bölümler arası boşluk
    var dx = (span - gap * (segs - 1)) / (N - 1 + 0);
    ctx.clearRect(0, 0, 1920, 1080);
    var anyLit = this.lit.some(Boolean);

    var pts = [];
    for (var i = 0; i < N; i++) {
      var seg = Math.floor(i / per);
      var x = o.x0 + i * dx + seg * gap - (seg ? 0 : 0);
      var ph = i * 0.44 + t * 2.2;
      var s = Math.sin(ph), c = Math.cos(ph);
      pts.push({ i: i, seg: seg, x: x, y1: o.cy + o.amp * s, y2: o.cy - o.amp * s, z1: c, z2: -c, k: i % per });
    }

    var cols = this.cols;
    function col(p, z, alpha) {
      var lit = this.lit[p.seg];
      var depth = 0.35 + 0.65 * ((z + 1) / 2);
      var A = cols[p.seg] || this.acc;
      if (lit && (this.focus === -1 || this.focus === p.seg)) {
        return "rgba(" + A[0] + "," + A[1] + "," + A[2] + "," + (alpha * depth).toFixed(3) + ")";
      }
      var base = lit ? 0.55 : (anyLit ? 0.22 : 0.5);
      return "rgba(236,232,223," + (alpha * depth * base).toFixed(3) + ")";
    }
    col = col.bind(this);

    // basamaklar (rungs)
    ctx.lineWidth = 1;
    for (var r = 0; r < pts.length; r++) {
      var p = pts[r];
      ctx.strokeStyle = col(p, 0, 0.35);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y1);
      ctx.lineTo(p.x, p.y2);
      ctx.stroke();
    }
    // omurgalar
    for (var strand = 0; strand < 2; strand++) {
      for (var j = 0; j < pts.length - 1; j++) {
        var a = pts[j], b = pts[j + 1];
        if (a.seg !== b.seg) continue;
        var za = strand ? a.z2 : a.z1;
        ctx.strokeStyle = col(a, za, 0.8);
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(a.x, strand ? a.y2 : a.y1);
        ctx.lineTo(b.x, strand ? b.y2 : b.y1);
        ctx.stroke();
      }
    }
    // noktalar
    for (var q = 0; q < pts.length; q++) {
      var P = pts[q];
      [[P.y1, P.z1], [P.y2, P.z2]].forEach(function (yz) {
        var rad = 2.2 + 2.6 * ((yz[1] + 1) / 2);
        ctx.fillStyle = col(P, yz[1], 1);
        ctx.beginPath();
        ctx.arc(P.x, yz[0], rad, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    // gen işaretleri
    ctx.font = "500 14px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    for (var sg = 0; sg < 3; sg++) {
      if (!this.lit[sg]) continue;
      var genes = o.segments[sg];
      var dim = this.focus !== -1 && this.focus !== sg;
      A = cols[sg] || this.acc;
      for (var g = 0; g < genes.length; g++) {
        var gp = pts[sg * per + genes[g]];
        var topY = Math.min(gp.y1, gp.y2);
        var alpha = dim ? 0.3 : 1;
        var pulse = 0.5 + 0.5 * Math.sin(t * 6 + g);
        ctx.strokeStyle = "rgba(" + A[0] + "," + A[1] + "," + A[2] + "," + (0.5 * alpha) + ")";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(gp.x, topY - 10);
        ctx.lineTo(gp.x, o.cy - o.amp - 34);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(gp.x, topY, 9 + pulse * 3, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = "rgba(" + A[0] + "," + A[1] + "," + A[2] + "," + alpha + ")";
        ctx.fillText(o.codes[sg][g], gp.x, o.cy - o.amp - 44);
      }
    }
  };

  /* ------------------------------------------------------------
     DYSON IZGARASI — 5.127 kare, sadece sonuncusu yanar
     ------------------------------------------------------------ */
  FX.Grid = function (canvas, total, cols, w, h) {
    this.c = canvas; this.total = total; this.cols = cols; this.w = w; this.h = h;
    this.raf = 0; this.acc = FX.accentRGB(canvas);
  };
  FX.Grid.prototype.run = function (dur, instant) {
    var self = this;
    var ctx = this.ctx = FX.fit(this.c, this.w, this.h);
    var rows = Math.ceil(this.total / this.cols);
    var cell = Math.min(this.w / this.cols, this.h / rows);
    var gap = Math.max(1.2, cell * 0.22);
    var sz = cell - gap;
    var A = this.acc;
    var drawn = 0;
    var start = performance.now();
    this.stop();
    ctx.clearRect(0, 0, this.w, this.h);
    function drawUpTo(n) {
      ctx.fillStyle = "rgba(236,232,223,0.30)";
      for (var i = drawn; i < Math.min(n, self.total - 1); i++) {
        var cx = (i % self.cols) * cell, cy = Math.floor(i / self.cols) * cell;
        ctx.fillRect(cx, cy, sz, sz);
      }
      drawn = Math.max(drawn, Math.min(n, self.total - 1));
    }
    function last(glow) {
      var i = self.total - 1;
      var cx = (i % self.cols) * cell, cy = Math.floor(i / self.cols) * cell;
      ctx.clearRect(cx - 14, cy - 14, sz + 28, sz + 28);
      // önceki kareleri yeniden çiz (temizlenen alan)
      ctx.fillStyle = "rgba(236,232,223,0.30)";
      for (var k = Math.max(0, i - self.cols * 2 - 3); k < i; k++) {
        var x = (k % self.cols) * cell, y = Math.floor(k / self.cols) * cell;
        if (x > cx - 16 && x < cx + sz + 16 && y > cy - 16 && y < cy + sz + 16) ctx.fillRect(x, y, sz, sz);
      }
      ctx.fillStyle = "rgb(" + A[0] + "," + A[1] + "," + A[2] + ")";
      ctx.fillRect(cx - 1, cy - 1, sz + 2, sz + 2);
      ctx.strokeStyle = "rgba(" + A[0] + "," + A[1] + "," + A[2] + "," + (0.35 + 0.65 * glow) + ")";
      ctx.lineWidth = 1.5;
      var pad = 4 + 6 * glow;
      ctx.strokeRect(cx - pad, cy - pad, sz + pad * 2, sz + pad * 2);
    }
    if (instant) { drawUpTo(self.total); last(1); return; }
    var lastShown = false, t0;
    function tick(now) {
      var p = Math.min(1, (now - start) / dur);
      var e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      drawUpTo(Math.floor(e * self.total));
      if (p >= 1) {
        if (!lastShown) { lastShown = true; t0 = now; }
        var g = 0.5 + 0.5 * Math.sin((now - t0) / 260);
        last(g);
      }
      self.raf = requestAnimationFrame(tick);
    }
    this.raf = requestAnimationFrame(tick);
  };
  FX.Grid.prototype.stop = function () { cancelAnimationFrame(this.raf); };


  /* ------------------------------------------------------------
     FİKİR PARÇACIKLARI — Açılış
     "Her gün binlerce fikir doğar. Çoğu, kimse fark etmeden ölür."
     birth: noktalar doğar · death: çoğu söner, birkaçı renklenip büyür
     calm: hayatta kalanlar yavaşça süzülür ve aralarında ağ kurulur
     ------------------------------------------------------------ */
  FX.Ideas = function (canvas) {
    this.c = canvas; this.p = []; this.mode = "idle"; this.raf = 0; this.dim = 1;
    this.pal = FX.palette().map(hexToRgb);
    this.r = FX.rng(19);
  };
  FX.Ideas.prototype.spawn = function (survivor) {
    var r = this.r;
    var p = {
      x: 60 + r() * 1800, y: 60 + r() * 960, rad: 0.8 + r() * 1.6,
      a: 0, ta: 0.35 + r() * 0.55, vx: (r() - 0.5) * 0.12, vy: (r() - 0.5) * 0.12,
      surv: survivor || r() < 0.05, delay: r() * 1.8, col: this.pal[Math.floor(r() * this.pal.length)] || [111, 227, 198]
    };
    this.p.push(p);
    return p;
  };
  FX.Ideas.prototype.setMode = function (m) {
    this.mode = m;
    this.modeT = performance.now();
    if (m === "calm" && !this.p.some(function (q) { return q.surv; })) {
      for (var i = 0; i < 46; i++) { var q = this.spawn(true); q.a = 1; q.rad = 2.6 + Math.random() * 1.8; }
    }
  };
  FX.Ideas.prototype.start = function () {
    var self = this;
    this.ctx = FX.fit(this.c, 1920, 1080);
    var last = performance.now(), acc = 0;
    var loop = function (now) {
      var dt = Math.min(50, now - last); last = now;
      self.step(dt, now);
      self.draw();
      self.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  };
  FX.Ideas.prototype.stop = function () { cancelAnimationFrame(this.raf); };
  FX.Ideas.prototype.step = function (dt, now) {
    var since = (now - (this.modeT || now)) / 1000;
    if (this.mode === "birth" && this.p.length < 1100) {
      var n = Math.round(dt * 0.45);
      for (var i = 0; i < n; i++) this.spawn();
    }
    for (var k = this.p.length - 1; k >= 0; k--) {
      var p = this.p[k];
      p.x += p.vx * dt * 0.06; p.y += p.vy * dt * 0.06;
      if (this.mode === "birth") p.a += (p.ta - p.a) * 0.06;
      else if (this.mode === "death") {
        if (p.surv) { p.a += (1 - p.a) * 0.05; p.rad += (3.2 - p.rad) * 0.03; }
        else if (since > p.delay) { p.a -= dt * 0.0016; if (p.a <= 0) this.p.splice(k, 1); }
      } else if (this.mode === "calm") {
        if (!p.surv) { p.a -= dt * 0.003; if (p.a <= 0) this.p.splice(k, 1); }
        else { p.vx += (Math.random() - 0.5) * 0.004; p.vy += (Math.random() - 0.5) * 0.004; p.vx *= 0.995; p.vy *= 0.995; }
      }
      if (p.x < 0 || p.x > 1920) p.vx *= -1;
      if (p.y < 0 || p.y > 1080) p.vy *= -1;
    }
  };
  FX.Ideas.prototype.draw = function () {
    var ctx = this.ctx, P = this.p, dim = this.mode === "calm" ? 0.45 : 1;
    ctx.clearRect(0, 0, 1920, 1080);
    if (this.mode !== "birth") {
      var S = P.filter(function (q) { return q.surv; });
      ctx.lineWidth = 1;
      for (var i = 0; i < S.length; i++) for (var j = i + 1; j < S.length; j++) {
        var dx = S[i].x - S[j].x, dy = S[i].y - S[j].y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 230) {
          var c = S[i].col;
          ctx.strokeStyle = "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + ((1 - d / 230) * 0.22 * dim * Math.min(S[i].a, S[j].a)).toFixed(3) + ")";
          ctx.beginPath(); ctx.moveTo(S[i].x, S[i].y); ctx.lineTo(S[j].x, S[j].y); ctx.stroke();
        }
      }
    }
    for (var k = 0; k < P.length; k++) {
      var p = P[k];
      if (p.a <= 0) continue;
      var col = (p.surv && this.mode !== "birth") ? p.col : [236, 232, 223];
      ctx.fillStyle = "rgba(" + col[0] + "," + col[1] + "," + col[2] + "," + (p.a * dim).toFixed(3) + ")";
      ctx.beginPath(); ctx.arc(p.x, p.y, p.rad, 0, Math.PI * 2); ctx.fill();
    }
  };

  /* ------------------------------------------------------------
     YARATICI YIKIM — eski yapı parçalanır, parçalardan yeni yapı kurulur
     ------------------------------------------------------------ */
  FX.Morph = function (canvas, w, h) {
    this.c = canvas; this.w = w; this.h = h; this.raf = 0;
    this.acc = FX.accentRGB(canvas);
    var r = FX.rng(23), N = 180, cx = w / 2, cy = h / 2 - 10, i;
    this.pts = [];
    var A = [], B = [], S1 = [], S2 = [];
    for (i = 0; i < N; i++) {           // eski: düzenli blok (12 × 15)
      var col = i % 12, row = Math.floor(i / 12);
      A.push([cx - 12 * 11 + col * 22 + 11, cy - 15 * 11 + row * 22 + 11]);
    }
    var rings = [[30, 64], [60, 124], [90, 184]], k = 0;
    rings.forEach(function (rg) {          // yeni: iç içe halkalar (ağ)
      for (var j = 0; j < rg[0]; j++) {
        var a = (j / rg[0]) * Math.PI * 2 + rg[1] * 0.01;
        B.push([cx + Math.cos(a) * rg[1], cy + Math.sin(a) * rg[1]]);
        k++;
      }
    });
    for (i = 0; i < N; i++) {
      var ang = r() * Math.PI * 2, dist = 120 + r() * 230;
      S1.push([cx + Math.cos(ang) * dist, cy + Math.sin(ang) * dist * 0.8]);
      ang = r() * Math.PI * 2; dist = 120 + r() * 230;
      S2.push([cx + Math.cos(ang) * dist, cy + Math.sin(ang) * dist * 0.8]);
    }
    // parçacıkları karıştır ki eski blok ile yeni halka arasında herkes yer değiştirsin
    var order = B.map(function (_, idx) { return idx; }).sort(function () { return r() - 0.5; });
    this.A = A; this.B = order.map(function (o) { return B[o]; }); this.S1 = S1; this.S2 = S2;
  };
  FX.Morph.prototype.start = function () {
    var self = this;
    this.ctx = FX.fit(this.c, this.w, this.h);
    var t0 = performance.now();
    var loop = function (now) { self.draw(((now - t0) / 1000) % 8.4); self.raf = requestAnimationFrame(loop); };
    this.raf = requestAnimationFrame(loop);
  };
  FX.Morph.prototype.stop = function () { cancelAnimationFrame(this.raf); };
  function eo(t) { return 1 - Math.pow(1 - t, 3); }
  function eio(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  FX.Morph.prototype.draw = function (t) {
    var ctx = this.ctx, A = this.A, B = this.B, S1 = this.S1, S2 = this.S2, ac = this.acc;
    var from, to, e, mix;          // mix: 0 = eski (gri), 1 = yeni (renkli)
    if (t < 1.6) { from = A; to = A; e = 0; mix = 0; }
    else if (t < 2.4) { from = A; to = S1; e = eo((t - 1.6) / 0.8); mix = 0; }
    else if (t < 3.9) { from = S1; to = B; e = eio((t - 2.4) / 1.5); mix = e; }
    else if (t < 5.8) { from = B; to = B; e = 0; mix = 1; }
    else if (t < 6.6) { from = B; to = S2; e = eo((t - 5.8) / 0.8); mix = 1 - e; }
    else { from = S2; to = A; e = eio(Math.min(1, (t - 6.6) / 1.5)); mix = 0; }
    ctx.clearRect(0, 0, this.w, this.h);
    var cr = Math.round(150 + (ac[0] - 150) * mix), cg = Math.round(146 + (ac[1] - 146) * mix), cb = Math.round(140 + (ac[2] - 140) * mix);
    ctx.fillStyle = "rgb(" + cr + "," + cg + "," + cb + ")";
    for (var i = 0; i < A.length; i++) {
      var x = from[i][0] + (to[i][0] - from[i][0]) * e, y = from[i][1] + (to[i][1] - from[i][1]) * e;
      var sz = 7 + mix * -1.5;
      ctx.fillRect(x - sz / 2, y - sz / 2, sz, sz);
    }
    this.phase = mix > 0.5 ? "new" : "old";
  };

  window.FX = FX;
})();
