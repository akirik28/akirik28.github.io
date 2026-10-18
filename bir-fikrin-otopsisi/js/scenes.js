/* ============================================================
   SAHNELER
   Her sahne: { id, file, steps, html, cls, notes, enter/leave/step/next/prev/key }
   Görünürlük: data-s="n" → n. adımda belirir · data-u="n" → n. adımda kaybolur
   ============================================================ */
(function () {
  "use strict";

  var C = window.CONTENT, CFG = window.CONFIG, FX = window.FX;
  var SCENES = [];
  function add(def) { SCENES.push(def); return def; }

  /* adım öznitelikleri */
  function at(s, u, d) {
    var a = "";
    if (s !== null && s !== undefined) a += ' data-s="' + s + '"';
    if (u !== null && u !== undefined) a += ' data-u="' + u + '"';
    if (d) a += ' style="--d:' + d + 's"';
    return a;
  }
  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  var LETTERS = ["A", "B", "C", "D"];
  var FC = CFG.fileColors || {};
  var PAL = FX.palette();
  var LC = CFG.layerColors || [PAL[0], PAL[2], PAL[3]];
  /* "DOSYA 03" → o dosyanın rengi */
  function colorOfRef(ref) {
    var m = /0(\d)/.exec(ref || "");
    return (m && FC["0" + m[1]]) || CFG.accent;
  }

  /* ============================================================
     ORTAK SAHNE KALIPLARI
     ============================================================ */

  /* Dosya kapağı */
  function fileScene(n) {
    var f = C.files[n];
    var pres = CFG.showPresenters && CFG.presenters && CFG.presenters[n];
    add({
      id: "f" + n + "-title", file: n, cls: "sc-file", steps: 1,
      notes: "DOSYA " + n + " kapağı. Başlığı okuyun, alttaki soruyu sınıfa yöneltin. Müfredat karşılığı: " + f.curriculum,
      html:
        '<div class="file-panel"><span class="fp-label">DOSYA</span><span class="fp-cur">' + f.curriculum.split(" · ")[0] + '</span><span class="fp-num">' + n + "</span></div>" +
        '<div class="file-body">' +
          '<div class="file-head wipe"><span class="mono">DOSYA ' + n + ' / 05</span><span class="bar"></span><span class="mono">İNCELEME AÇILDI</span></div>' +
          '<h1 class="file-title wipe">' + f.title + "</h1>" +
          '<p class="file-teaser serif fade-late">' + f.teaser + "</p>" +
        "</div>" +
        '<div class="file-meta fade-late"><div><span>MÜFREDAT</span>' + f.curriculum + "</div>" +
        (pres ? "<div><span>İNCELEYEN</span>" + pres + "</div>" : "") + "</div>" +
        '<div class="file-scan"></div>'
    });
  }

  /* Tam ekran ifade dizisi: her adımda bir cümle */
  function statements(id, file, items, opts) {
    opts = opts || {};
    var html = "";
    if (opts.label) html += '<div class="st-label label' + (opts.labelAccent ? " accent" : "") + '">' + opts.label + "</div>";
    items.forEach(function (it, i) {
      var keep = it.keep;
      html += '<div class="st ' + (it.cls || "st-md") + ' r-blur"' + at(i, keep ? null : i + 1) + ">" + it.html + "</div>";
    });
    if (opts.extra) html += opts.extra;
    return add({ id: id, file: file, cls: "sc-st " + (opts.cls || ""), steps: items.length, notes: opts.notes, html: html });
  }

  /* ChargeBox'a geri dönüş: "Videoda burada aslında ne oldu?" */
  function callbackScene(id, file, cb) {
    var stages = C.chargebox, W = 1640;
    var track = '<div class="ln"></div>';
    stages.forEach(function (s, i) {
      var hl = cb.stages.indexOf(i + 1) !== -1;
      track += '<div class="cb-stage' + (hl ? " hl" : "") + '" style="left:' + Math.round((i / (stages.length - 1)) * (W - 200)) + 'px">' +
        '<div class="dot"></div><div class="num">' + pad2(i + 1) + '</div><div class="nm">' + s + "</div></div>";
    });
    var q = cb.checks
      ? '<div class="cb-checks">' + cb.checks.map(function (c) { return '<span class="chip">' + c + "</span>"; }).join("") + "</div>"
      : "<p>" + cb.question + "</p>";
    add({
      id: id, file: file, cls: "sc-cb", steps: 3, notes: cb.notes,
      html:
        '<div class="cb-label label">' + C.callbackLabel + "</div>" +
        '<h2 class="cb-title serif">' + C.callbackTitle + "</h2>" +
        '<div class="cb-track r-mask"' + at(0, null, 0.3) + ">" + track + "</div>" +
        '<div class="cb-text">' + cb.lines.map(function (l, i) { return '<p class="r-up"' + at(1, null, i * 0.35) + ">" + l + "</p>"; }).join("") + "</div>" +
        '<div class="cb-q r-up"' + at(2) + '><div class="label">' + (cb.checks ? "ÖLÇÜ" : C.callbackQ) + "</div>" + q + "</div>"
    });
  }

  /* ============================================================
     AÇILIŞ
     ============================================================ */
  var I = C.intro;
  add({
    id: "intro", file: null, cls: "sc-intro", steps: 1, hud: false, notes: I.notes,
    html: function () {
      var rows = I.layers.map(function (l, i) {
        var y = 300 + 40 + i * 44;
        var d = ((y / 1080) * 2.2).toFixed(2);
        return '<div class="row" style="--d:' + d + "s;--tc:" + PAL[i % PAL.length] + '"><span>' + pad2(i + 1) + "</span><span>" + l + "</span><em>İNCELENECEK</em></div>";
      }).join("");
      return '<canvas class="intro-ideas"></canvas>' +
        '<p class="intro-line il1">' + I.line1 + "</p>" +
        '<p class="intro-line il2">' + I.line2 + "</p>" +
        '<div class="intro-grid"></div>' +
        '<div class="intro-meta">' + I.meta.map(function (m) { return '<span class="mono">' + m + "</span>"; }).join("") + "</div>" +
        '<div class="intro-layers"><div class="lh">' + I.layersTitle + "</div>" + rows + "</div>" +
        '<div class="intro-title"><h1><span class="tl">' + FX.letters(I.title1, 5, 1.0) + '</span><span class="tl">' + FX.letters(I.title2, 9, 1.0, 0.2) + "</span></h1>" +
        '<p class="intro-sub serif">' + I.subtitle + "</p></div>" +
        '<div class="intro-foot"><span class="grp">' + CFG.group.toLocaleUpperCase("tr-TR") + '</span><button class="cta" data-interactive>' + I.cta + ' <span class="arr">→</span></button></div>' +
        '<div class="intro-scan"></div>';
    },
    init: function (el) {
      el.querySelector(".cta").addEventListener("click", function (e) { e.stopPropagation(); window.ENGINE.next(); });
    },
    enter: function (ctx) {
      var el = ctx.el;
      el.classList.remove("ph1", "ph2", "ph3", "ph4", "ph5", "ph6", "done", "skip");
      var ideas = this.ideas = new FX.Ideas(el.querySelector(".intro-ideas"));
      ideas.start();
      if (ctx.instant) { this.finish(ctx); return; }
      ctx.after(400, function () { ideas.setMode("birth"); });
      ctx.after(2700, function () { ideas.setMode("death"); });
      ctx.after(5000, function () { ideas.setMode("calm"); });
      var ph = function (k) { return function () { el.classList.add("ph" + k); }; };
      ctx.after(500, ph(1));
      ctx.after(2700, ph(2));
      ctx.after(5000, ph(3));
      ctx.after(6200, ph(4));
      ctx.after(7700, ph(5));
      ctx.after(8500, function () { el.classList.add("ph6", "done"); window.ENGINE.showHint(); });
    },
    finish: function (ctx) {
      ctx.clearTimers();
      ctx.el.classList.add("skip", "ph1", "ph2", "ph3", "ph4", "ph5", "ph6", "done");
      if (this.ideas) this.ideas.setMode("calm");
    },
    leave: function () { if (this.ideas) this.ideas.stop(); },
    resize: function () { if (this.ideas) { this.ideas.stop(); this.ideas.start(); } },
    next: function (ctx) {
      if (!ctx.el.classList.contains("done")) { this.finish(ctx); return true; }
      return false;
    }
  });

  /* İÇİNDEKİLER */
  add({
    id: "index", file: null, cls: "sc-index", steps: 1, notes: C.index.notes,
    html: '<div class="label">' + C.index.label + "</div>" +
      C.index.rows.map(function (r, i) {
        return '<div class="idx-row r-up' + (r.sealed ? " sealed" : "") + '"' + at(0, null, 0.15 + i * 0.09) + '><div class="n">' + r.n + '</div><div class="t">' + r.t + "<small>" + r.s + '</small></div><div class="m"><span>MÜFREDAT</span>' + r.m + "</div></div>";
      }).join("")
  });

  /* ============================================================
     DOSYA 00 · VİDEO
     ============================================================ */
  var V = C.f00;
  function tc(s) {
    s = Math.max(0, Math.floor(s || 0));
    return pad2(Math.floor(s / 60)) + ":" + pad2(s % 60);
  }
  add({
    id: "f00-video", file: "00", cls: "sc-video", steps: 1, notes: V.notes,
    html:
      '<div class="v-head"><span class="mono">' + V.head + '</span><span class="mono">' + V.meta + "</span></div>" +
      '<div class="v-frame">' +
        '<video preload="metadata" playsinline></video>' +
        '<div class="v-poster" data-interactive>' +
          '<div class="pg"></div><div class="pnum">00</div>' +
          '<div class="pk mono">' + V.posterKicker + '</div><div class="ptc mono">00:00:00:00</div>' +
          '<h2 class="pt serif">' + V.posterTitle + "</h2>" +
          '<div class="play"><svg viewBox="0 0 46 46"><path d="M11 5 L40 23 L11 41 Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg><span>' + V.play + "</span></div>" +
          '<div class="pmiss"><div class="label">' + V.missing + "</div><p>" + V.missingHelp + '</p><p class="v-path">' + CFG.videoFile + "</p></div>" +
          '<div class="pb"><span class="mono">' + V.hint + '</span><span class="mono">' + CFG.group.toLocaleUpperCase("tr-TR") + "</span></div>" +
        "</div>" +
        '<div class="v-ctrl" data-interactive><span class="vt cur">00:00</span><div class="vbar"><i></i></div><span class="vt dur">--:--</span></div>' +
        '<div class="v-msg"></div>' +
        '<div class="corners"><i></i></div>' +
      "</div>" +
      '<div class="v-cap"><span class="mono">' + V.caption + "</span></div>",

    init: function (el) {
      var self = this;
      var v = this.video = el.querySelector("video");
      var frame = el.querySelector(".v-frame");
      var bar = el.querySelector(".vbar i");
      var cur = el.querySelector(".vt.cur"), dur = el.querySelector(".vt.dur");
      this.el = el;
      this.msg = el.querySelector(".v-msg");
      if (CFG.videoPoster) v.setAttribute("poster", CFG.videoPoster);
      el.classList.add("missing");
      v.addEventListener("loadedmetadata", function () { el.classList.remove("missing"); dur.textContent = tc(v.duration); });
      v.addEventListener("error", function () { el.classList.add("missing"); });
      v.src = CFG.videoFile;

      v.addEventListener("play", function () { el.classList.add("playing"); el.classList.remove("paused"); window.ENGINE.setHud(false); });
      v.addEventListener("pause", function () {
        if (v.ended) return;
        el.classList.remove("playing");
        if (el.classList.contains("is-active") && v.currentTime > 0) el.classList.add("paused");
      });
      v.addEventListener("ended", function () {
        el.classList.remove("playing", "paused");
        if (CFG.videoAutoAdvance && el.classList.contains("is-active")) {
          setTimeout(function () { if (el.classList.contains("is-active")) window.ENGINE.go(window.ENGINE.index + 1); }, 900);
        }
      });
      v.addEventListener("timeupdate", function () {
        cur.textContent = tc(v.currentTime);
        if (v.duration) bar.style.width = (v.currentTime / v.duration * 100) + "%";
      });
      el.querySelector(".v-poster").addEventListener("click", function (e) { e.stopPropagation(); self.play(); });
      v.addEventListener("click", function (e) { e.stopPropagation(); self.toggle(); });
      el.querySelector(".vbar").addEventListener("click", function (e) {
        e.stopPropagation();
        var r = this.getBoundingClientRect();
        if (v.duration) v.currentTime = ((e.clientX - r.left) / r.width) * v.duration;
      });
      var hideT;
      frame.addEventListener("mousemove", function () {
        el.classList.add("ctrl-on");
        clearTimeout(hideT);
        hideT = setTimeout(function () { el.classList.remove("ctrl-on"); }, 1800);
      });
    },
    flash: function (t) {
      var m = this.msg;
      m.textContent = t; m.classList.add("on");
      clearTimeout(this._mt);
      this._mt = setTimeout(function () { m.classList.remove("on"); }, 1600);
    },
    play: function () {
      var self = this, v = this.video, el = this.el;
      if (el.classList.contains("missing")) {
        el.classList.remove("tried"); void el.offsetWidth; el.classList.add("tried");
        return;
      }
      if (v.ended) v.currentTime = 0;
      var p = v.play();
      if (p && p.catch) p.catch(function () { self.flash(C.f00.blocked); });
    },
    toggle: function () {
      if (this.video.paused) this.play(); else this.video.pause();
    },
    isOpen: function () { return this.el.classList.contains("playing") || this.el.classList.contains("paused"); },
    enter: function (ctx) {
      var self = this;
      if (CFG.videoAutoplay && !ctx.instant) ctx.after(1400, function () { self.play(); });
    },
    leave: function () {
      this.video.pause();
      this.el.classList.remove("playing", "paused", "tried");
    },
    next: function () {
      if (this.isOpen()) return false;
      if (this.el.classList.contains("missing")) return false;
      this.play();
      return true;
    },
    prev: function () {
      if (this.isOpen()) {
        this.video.pause();
        this.el.classList.remove("playing", "paused");
        window.ENGINE.setHud(true);
        return true;
      }
      return false;
    },
    key: function (ctx, e) {
      if ((e.key === " " || e.key === "k" || e.key === "K") && this.isOpen()) { this.toggle(); return true; }
      return false;
    },
    hudWhen: function () { return !this.isOpen(); }
  });

  var BR = V.brief;
  add({
    id: "f00-brief", file: "00", cls: "sc-brief", steps: 1, notes: BR.notes,
    html:
      '<div class="br-label label accent">' + BR.label + "</div>" +
      '<div class="br-big r-up"' + at(0, null, 0.2) + ">" + BR.big + "</div>" +
      '<p class="br-note serif r-up"' + at(0, null, 0.7) + ">" + BR.note + "</p>" +
      '<div class="br-list"><div class="label r-up"' + at(0, null, 1.4) + ">" + BR.listLabel + '</div><div class="br-chips">' +
        BR.list.map(function (k, i) {
          var c = colorOfRef(C.final.stages[i] && C.final.stages[i].f);
          return '<span class="chip r-up" data-s="0" style="--d:' + (1.6 + i * 0.12).toFixed(2) + "s;--cc:" + c + '"><em>' + pad2(i + 1) + "</em>" + k + "</span>";
        }).join("") +
      "</div></div>" +
      '<div class="br-ring r-scale"' + at(0, null, 0.4) + '><svg viewBox="0 0 400 400"><defs><path id="brRing" d="M200,200 m-160,0 a160,160 0 1,1 320,0 a160,160 0 1,1 -320,0"/></defs>' +
        '<g class="spin"><text><textPath href="#brRing">MÜHÜRLÜ KANIT KAYDI · DOSYA 00 · BİR FİKRİN 180 SANİYELİK HAYATI · </textPath></text></g>' +
        '<circle cx="200" cy="200" r="128" class="c1"/><circle cx="200" cy="200" r="186" class="c2"/></svg><span>00</span></div>'
  });

  statements("f00-after", "00", [
    { html: '<div class="st-sm" style="margin-bottom:40px">' + V.after[0] + '</div><div class="r-up" data-s="0" style="--d:1.4s">' + V.after[1] + "</div>", cls: "st-lg" }
  ], { notes: V.afterNotes, cls: "sc-after", extra: '<div class="af-dots">' + C.final.stages.map(function (st, i) {
    var a = (-90 + i * (360 / 7)) * Math.PI / 180;
    return '<i style="--x:' + Math.round(Math.cos(a) * 860) + "px;--y:" + Math.round(Math.sin(a) * 400) + "px;--c:" + colorOfRef(st.f) + ";--dd:" + (1.6 + i * 0.12).toFixed(2) + 's"></i>';
  }).join("") + "</div>" });

  /* ============================================================
     DOSYA 01 · GİRİŞİMCİ KİMDİR?
     ============================================================ */
  fileScene("01");

  var SUS = C.f01.suspects;
  /* Animasyonlu simgeler: icat (yörünge) · üçüncü kafe (sırayla yanan kareler) · çözüm (köprü kurulur) */
  var GLYPHS = [
    '<svg class="gl gl-a" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4" style="color:var(--ink-2)"><circle cx="50" cy="50" r="30"/><circle cx="50" cy="50" r="9" class="core"/><path d="M50 6V94M6 50H94"/><g class="orbit"><circle cx="71" cy="29" r="5" fill="var(--accent)" stroke="var(--accent)"/></g></svg>',
    '<svg class="gl gl-b" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4" style="color:var(--ink-2)"><rect class="q1" x="6" y="40" width="22" height="22"/><rect class="q2" x="39" y="40" width="22" height="22"/><rect class="q3" x="72" y="40" width="22" height="22" fill="var(--accent)" stroke="var(--accent)"/><path d="M2 76H98"/></svg>',
    '<svg class="gl gl-c" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4" style="color:var(--ink-2)"><path d="M4 64H36"/><path d="M64 36H96"/><circle cx="36" cy="64" r="3" fill="currentColor"/><circle cx="64" cy="36" r="3" fill="currentColor"/><path class="bridge" d="M36 64L64 36" stroke="var(--accent)" stroke-width="3"/></svg>'
  ];
  add({
    id: "f01-suspects", file: "01", cls: "sc-suspects", steps: 2, notes: SUS.notes,
    html:
      '<div class="sus-label label">' + SUS.label + "</div>" +
      '<h2 class="sus-q display r-blur"' + at(null, 1) + ">" + SUS.question + "</h2>" +
      '<h2 class="sus-q display r-blur accent"' + at(1, null, 0.1) + ">" + SUS.answer + "</h2>" +
      '<div class="sus-cols">' + SUS.people.map(function (p, i) {
        return '<div class="sus-col r-up"' + at(0, null, 0.2 + i * 0.15) + ">" + GLYPHS[i] +
          '<div class="code">' + p.code + '</div><div class="role">' + p.role + '</div><div class="txt">' + p.text + "</div>" +
          '<div class="cond serif r-up"' + at(1, null, 0.35 + i * 0.3) + ">" + p.cond + "</div>" +
          '<div class="stamp chip accent"' + at(1, null, 0.25 + i * 0.3) + ">" + SUS.stamp + "</div></div>";
      }).join("") + "</div>" +
      '<p class="sus-foot r-up"' + at(1, null, 1.6) + ">" + SUS.footnote + "</p>"
  });

  var DEF = C.f01.definition;
  add({
    id: "f01-definition", file: "01", cls: "sc-def", steps: 1, notes: DEF.notes,
    html:
      '<div class="def-label label">' + DEF.label + "</div>" +
      '<div class="def-lead serif">' + DEF.lead + "</div>" +
      '<div class="def-rail"><i></i></div>' +
      '<div class="def-lines">' + DEF.lines.map(function (l, i) {
        return '<div class="def-line r-up"' + at(0, null, 0.4 + i * 1.1) + '><div class="n">0' + (i + 1) + '</div><div><div class="pre">' + l.pre + '</div><div class="verb">' + l.verb + '</div></div><div class="tag">→ ' + l.tag + "</div></div>";
      }).join("") + "</div>"
  });

  var MY = C.f01.myth;
  add({
    id: "f01-myth", file: "01", cls: "sc-myth", steps: 2, notes: MY.notes,
    html:
      '<div class="myth-label label">' + MY.label + "</div>" +
      '<div class="myth-eq"><span class="w">' + MY.left + '</span><span class="op"><span class="eq">=</span><span class="ne r-scale"' + at(1) + '>≠</span></span><span class="w">' + MY.right + "</span></div>" +
      '<div class="myth-cols">' +
        '<div class="myth-col r-up"' + at(1, null, 0.5) + "><h3>" + MY.a.head + "</h3><p>" + MY.a.body + "</p></div>" +
        '<div class="myth-col r-up"' + at(1, null, 0.8) + "><h3>" + MY.b.head + "</h3><p>" + MY.b.body + "</p></div>" +
      "</div>" +
      '<div class="myth-con r-up"' + at(1, null, 1.5) + ">" + MY.conclusion + "</div>"
  });

  var EQ = C.f01.equation;
  add({
    id: "f01-equation", file: "01", cls: "sc-eq", steps: 2, notes: EQ.notes,
    html:
      '<div class="eq-big r-blur"' + at(null, 1) + ">" + EQ.big[0] + '<span class="ne">≠</span>' + EQ.big[1] + "</div>" +
      '<div class="eq-ledger">' +
        EQ.rows.map(function (r, i) {
          return '<div class="eq-row r-left"' + at(1, null, 0.15 + i * 0.22) + '><div class="op">' + r.op + '</div><div class="term">' + r.term + '</div><div class="cap">' + r.cap + "</div></div>";
        }).join("") +
        '<div class="eq-sum r-line"' + at(1, null, 1.1) + "></div>" +
        '<div class="eq-flow r-fade"' + at(1, null, 1.3) + ">" + [66, 198, 330, 462].map(function (y, i) {
          return '<i style="top:' + y + "px;--dy:" + (548 - y) + "px;--dd:" + (i * 0.35).toFixed(2) + 's"></i>';
        }).join("") + "</div>" +
        '<div class="eq-row res r-up"' + at(1, null, 1.35) + '><div class="op">=</div><div class="term">' + EQ.result + '</div><div class="cap"></div></div>' +
      "</div>" +
      '<div class="eq-note r-up"' + at(1, null, 1.9) + ">" + EQ.note + "</div>"
  });

  callbackScene("f01-callback", "01", C.f01.callback);

  /* ============================================================
     DOSYA 02 · GİRİŞİMCİ NEYİ DEĞİŞTİRİR?
     ============================================================ */
  fileScene("02");

  var VA = C.f02.vanish;
  add({
    id: "f02-vanish", file: "02", cls: "sc-vanish", steps: 3, notes: VA.notes,
    html:
      '<div class="vq r-blur"' + at(null, 1) + ">" + VA.question + "</div>" +
      '<div class="vmini label r-up"' + at(1, 2) + ">" + VA.mini + "</div>" +
      '<div class="vreveal r-up"' + at(2) + ">" + VA.reveal + "</div>" +
      '<div class="v-wall r-fade"' + at(1) + ">" + VA.words.map(function (w, i) {
        return '<div class="v-cell" style="--wc:' + PAL[(i + 1) % PAL.length] + '"><span class="fnum">FONKSİYON 0' + (i + 1) + '</span><div class="v-word"><span class="ghost">' + w.w + "</span>" + FX.scatter(w.w, 13 + i * 7) + '</div><div class="vc">' + w.c + "</div></div>";
      }).join("") + "</div>",
    /* 2. adımda kelimeler kendiliğinden, tek tek kaybolur */
    step: function (ctx, n, prev) {
      var cells = ctx.el.querySelectorAll(".v-cell");
      ctx.clearTimers();
      cells.forEach(function (c, i) {
        c.classList.toggle("fn", n >= 2);
        if (n !== 1) { c.classList.toggle("gone", false); return; }
        if (prev === 0) {
          c.classList.remove("gone");
          ctx.after(1700 + i * 1150, function () { c.classList.add("gone"); });
        } else c.classList.add("gone");
      });
    }
  });

  var FA = C.f02.factors;
  add({
    id: "f02-factors", file: "02", cls: "sc-factors", steps: 3, notes: FA.notes,
    html: function () {
      var tops = [330, 500, 670], mids = [388, 558, 728];
      var svg = '<svg class="fx-svg" viewBox="0 0 1920 1080">';
      mids.forEach(function (m, i) {
        var d = "M 610 " + m + " C 720 " + m + ", 720 558, 812 558";
        svg += '<path class="r-fade" d="' + d + '"' + at(1, null, 0.2 + i * 0.1) + "/>";
        svg += '<path class="flow r-fade" d="' + d + '"' + at(1, null, 0.6) + "/>";
      });
      svg += '<path class="r-fade" d="M 1420 558 L 1505 558"' + at(1, null, 0.8) + "/>";
      svg += '<path class="flow r-fade" d="M 1420 558 L 1505 558"' + at(1, null, 1) + "/>";
      svg += "</svg>";
      return '<div class="fx-label label">' + FA.label + "</div>" +
        '<div class="fx-h1 r-up"' + at(0, 1) + ">" + FA.head1 + "</div>" +
        '<div class="fx-h1 r-up"' + at(1) + ">" + FA.head2 + "</div>" + svg +
        FA.inputs.map(function (inp, i) {
          return '<div class="fx-in r-left" style="top:' + tops[i] + 'px;--d:' + (0.15 + i * 0.15) + 's" data-s="0"><h4>' + inp.t + "</h4><p>" + inp.c + "</p></div>";
        }).join("") +
        '<div class="fx-core r-scale"' + at(1, null, 0.3) + '><span class="ring"></span><h3>' + FA.core + "</h3></div>" +
        '<div class="fx-out r-left"' + at(1, null, 1.1) + ">" + FA.output.map(function (o) { return "<div>" + o + "</div>"; }).join("") + "</div>" +
        '<div class="fx-foot r-up"' + at(2) + ">" + FA.foot + "</div>";
    }
  });

  var SC = C.f02.schumpeter;
  statements("f02-schumpeter", "02", [
    { html: SC.lines[0], cls: "st-md" },
    { html: SC.lines[1], cls: "st-md" }
  ], { label: SC.label, notes: SC.notes });

  var BA = C.f02.beforeAfter;
  add({
    id: "f02-before-after", file: "02", cls: "sc-ba", steps: 2, notes: BA.notes,
    html:
      '<div class="ba-head"><span class="label">' + BA.left + '</span><span></span><span class="label r">' + BA.right + "</span></div>" +
      '<div class="ba-rows">' + BA.rows.map(function (r, i) {
        return '<div class="ba-row r-up" data-interactive data-i="' + i + '"' + at(0, null, 0.15 + i * 0.1) + '><div class="ba-old">' + r.old + '</div><div class="ba-arrow">→</div><div class="ba-new"><div class="nw">' + r.neu + '</div><div class="tg">' + r.tag + '</div></div><div class="ba-scan"></div></div>';
      }).join("") + "</div>" +
      '<div class="ba-msg r-up"' + at(1, null, 2.4) + ">" + C.f02.message.lines[0].replace("<br>", " ") + " " + C.f02.message.lines[1].replace("<br>", " ") + "</div>",
    init: function (el) {
      el.querySelectorAll(".ba-row").forEach(function (row) {
        row.addEventListener("click", function (e) {
          e.stopPropagation();
          var on = !row.classList.contains("flip");
          row.classList.toggle("flip", on);
          row.classList.remove("anim");
          if (on) { void row.offsetWidth; row.classList.add("anim"); }
        });
      });
    },
    step: function (ctx, n, prev) {
      ctx.clearTimers();
      ctx.el.querySelectorAll(".ba-row").forEach(function (row, i) {
        if (n < 1) { row.classList.remove("flip", "anim"); return; }
        if (prev === 0) {
          ctx.after(150 + i * 520, function () { row.classList.remove("anim"); void row.offsetWidth; row.classList.add("flip", "anim"); });
        } else row.classList.add("flip");
      });
    }
  });

  var MS = C.f02.message;
  statements("f02-message", "02", [
    { html: MS.lines[0], cls: "st-md" },
    { html: MS.lines[1], cls: "st-md" }
  ], { notes: MS.notes });

  var CD = C.f02.destruction;
  add({
    id: "f02-destruction", file: "02", cls: "sc-cd", steps: 1, notes: CD.notes,
    html:
      '<div class="cd-words"><div>' + CD.w1 + '</div><div class="cd-w2">' + FX.scatter(CD.w2, 41, 1.6) + "</div></div>" +
      '<p class="cd-text r-up"' + at(0, null, 1.2) + ">" + CD.text + "</p>" +
      '<div class="cd-src mono r-up"' + at(0, null, 1.5) + ">" + CD.source + "</div>" +
      '<div class="cd-q r-up"' + at(0, null, 2.2) + '><div class="label">' + C.classQuestion + "</div><p>" + CD.question + "</p></div>" +
      '<div class="cd-anim r-fade"' + at(0, null, 0.6) + '><canvas class="cd-morph"></canvas><div class="cd-mlabel mono"><span class="o">ESKİ DÜZEN</span><span>⟶</span><span class="n">YENİ DÜZEN</span></div></div>',
    enter: function (ctx) {
      this.morph = new FX.Morph(ctx.el.querySelector(".cd-morph"), 480, 430);
      this.morph.start();
      var lab = ctx.el.querySelector(".cd-mlabel"), self = this;
      ctx.raf(function () { lab.classList.toggle("new", self.morph.phase === "new"); return true; });
    },
    leave: function () { if (this.morph) this.morph.stop(); },
    resize: function () { if (this.morph) { this.morph.stop(); this.morph.start(); } }
  });

  /* ============================================================
     DOSYA 03 · GİRİŞİMCİNİN DNA'SI
     ============================================================ */
  fileScene("03");

  var DN = C.f03.dna;
  var SEG_X = [146, 707, 1269];
  var GENE_IDX = [[1, 5, 9, 13, 16], [1, 4, 7, 10, 13, 16], [1, 4, 7, 10, 13, 16]];
  add({
    id: "f03-dna", file: "03", cls: "sc-dna", steps: 3, notes: DN.notes,
    html:
      "<canvas></canvas>" +
      '<div class="dna-label label">' + DN.label + "</div>" +
      '<div class="dna-title serif">' + DN.title + "</div>" +
      DN.layers.map(function (L, k) {
        return '<div class="dna-layer" data-interactive data-k="' + k + '" style="left:' + SEG_X[k] + "px;--lc:" + LC[k] + '"><div class="ln">KATMAN ' + L.n + '</div><h3>' + L.name + "</h3><p class=\"serif\">" + L.sub + "</p></div>" +
          '<div class="dna-genes" data-k="' + k + '" style="left:' + SEG_X[k] + "px;--lc:" + LC[k] + '">' + L.genes.map(function (g, i) {
            return '<div class="dna-gene" style="--d:' + (0.25 + i * 0.08) + 's"><span>' + L.key + "-" + pad2(i + 1) + "</span><em>" + g + "</em></div>";
          }).join("") + "</div>";
      }).join("") +
      '<div class="dna-note r-up"' + at(2, null, 2.4) + ">" + DN.note + "</div>",
    init: function (el) {
      var self = this;
      this.focusOverride = null;
      el.querySelectorAll(".dna-layer").forEach(function (h) {
        h.addEventListener("click", function (e) {
          e.stopPropagation();
          var k = +h.dataset.k, E = window.ENGINE;
          if (E.step < k) { E.setStep(k); return; }
          self.focusOverride = self.focusOverride === k ? null : k;
          self.apply(el, E.step);
        });
      });
    },
    apply: function (el, n) {
      var focus = this.focusOverride !== null ? this.focusOverride : n;
      var lit = [n >= 0, n >= 1, n >= 2];
      el.querySelectorAll(".dna-layer").forEach(function (h, k) {
        h.classList.toggle("lit", lit[k]);
        h.classList.toggle("focus", lit[k] && focus === k);
      });
      el.querySelectorAll(".dna-genes").forEach(function (g, k) {
        g.classList.toggle("lit", lit[k]);
        g.classList.toggle("dim", lit[k] && focus !== -1 && focus !== k);
      });
      if (this.dna) { this.dna.lit = lit; this.dna.focus = focus; }
    },
    enter: function (ctx) {
      this.focusOverride = null;
      var codes = DN.layers.map(function (L) { return L.genes.map(function (g, i) { return L.key + "-" + pad2(i + 1); }); });
      this.dna = new FX.DNA(ctx.el.querySelector("canvas"), { x0: 150, x1: 1770, cy: 468, amp: 84, segments: GENE_IDX, codes: codes, colors: LC });
      this.apply(ctx.el, ctx.step);
      this.dna.start();
    },
    resize: function (ctx) { if (this.dna) { this.dna.stop(); this.dna.start(); } },
    step: function (ctx, n) {
      var self = this;
      this.focusOverride = null;
      this.apply(ctx.el, n);
      ctx.clearTimers();
      if (n === 2) ctx.after(2300, function () { self.focusOverride = -1; self.apply(ctx.el, 2); });
    },
    leave: function () { if (this.dna) this.dna.stop(); }
  });

  /* Kanıt kartlarında sol sütun */
  function evLeft(o, extra) {
    return '<div class="ev-left"><div class="ev-tag label">' + o.tag + "</div>" +
      (o.seen ? '<div class="ev-seen">' + o.seen + "</div>" : "") +
      '<div class="ev-name">' + o.name + '</div><div class="ev-sub serif">' + o.sub + "</div>" + (extra || "") + "</div>" +
      '<div class="ev-vline"></div>';
  }
  function geneChips(list, s) {
    return '<div class="gene-chips r-up"' + at(s, null, 0.3) + ">" + list.map(function (g) { return '<span class="chip accent">' + g + "</span>"; }).join("") + "</div>";
  }

  var BL = C.f03.blakely;
  add({
    id: "f03-blakely", file: "03", cls: "sc-blakely", steps: 2, notes: BL.notes, accent: LC[0],
    html:
      evLeft(BL, '<ul class="ev-facts r-up"' + at(0, 1, 0.6) + ">" + BL.facts.map(function (f) { return "<li>" + f + "</li>"; }).join("") + "</ul>" + geneChips(BL.genes, 1)) +
      '<div class="ev-right">' +
        '<p class="bl-lead serif r-up"' + at(0, null, 0.2) + ">" + BL.lead + "</p>" +
        '<p class="bl-quote r-up"' + at(0, null, 0.55) + ">" + BL.quote + "</p>" +
        '<div class="bl-q r-up"' + at(0, null, 1.6) + '><div class="label">' + C.classQuestion + "</div><p>" + BL.question + "</p></div>" +
        '<p class="bl-a r-up"' + at(1) + ">" + BL.answer + "</p>" +
      "</div>"
  });

  var DY = C.f03.dyson;
  add({
    id: "f03-dyson", file: "03", cls: "sc-dyson", steps: 2, notes: DY.notes, accent: LC[1],
    html:
      evLeft(DY,
        '<div class="dy-count"><div class="v">0</div><div class="l mono">' + DY.countLabel + "</div></div>" +
        '<div class="dy-lines">' + DY.lines.map(function (l, i) { return '<div class="r-up"' + at(0, null, 2.6 + i * 0.4) + ">" + l + "</div>"; }).join("") + "</div>" +
        geneChips(DY.genes, 1)) +
      '<div class="ev-right">' +
        '<canvas class="dy-grid"></canvas>' +
        '<div class="dy-gcap mono">' + DY.gridCap + "</div>" +
        '<div class="dy-q r-up"' + at(0, null, 3.2) + ">" + DY.question + "</div>" +
        '<div class="dy-opts">' + DY.options.map(function (o, i) {
          return '<button class="dy-opt r-up' + (i === DY.correct ? " ok" : "") + '" data-interactive data-i="' + i + '"' + at(0, null, 3.4 + i * 0.1) + '><span class="k">' + LETTERS[i] + '</span><span class="ot">' + o + "</span></button>";
        }).join("") + "</div>" +
        '<p class="dy-note r-up"' + at(1, null, 0.2) + ">" + DY.note + "</p>" +
      "</div>",
    init: function (el) {
      var self = this;
      el.querySelectorAll(".dy-opt").forEach(function (b) {
        b.addEventListener("click", function (e) { e.stopPropagation(); self.select(el, +b.dataset.i); });
      });
    },
    select: function (el, i) {
      el.querySelectorAll(".dy-opt").forEach(function (b, k) { b.classList.toggle("sel", k === i); });
    },
    enter: function (ctx) {
      var g = ctx.el.querySelector(".dy-grid"), v = ctx.el.querySelector(".dy-count .v");
      this.grid = new FX.Grid(g, DY.count, 110, 940, 376);
      if (ctx.instant) { this.grid.run(0, true); v.textContent = FX.fmt(DY.count); }
      else {
        this.grid.run(2400);
        var stop = FX.count(v, DY.count, 2400);
        ctx.cleanup(stop);
      }
      this.select(ctx.el, -1);
    },
    resize: function (ctx) { if (this.grid) this.grid.run(0, true); },
    leave: function () { if (this.grid) this.grid.stop(); },
    key: function (ctx, e) {
      var i = "abcd".indexOf(e.key.toLowerCase());
      if (i === -1) i = "1234".indexOf(e.key);
      if (i !== -1) { this.select(ctx.el, i); return true; }
      return false;
    }
  });

  var UL = C.f03.ulukaya;
  add({
    id: "f03-ulukaya", file: "03", cls: "sc-ulukaya", steps: 2, notes: UL.notes, accent: LC[2],
    html:
      evLeft(UL, geneChips(UL.genes, 1)) +
      '<div class="ev-right">' +
        '<div class="ul-tl">' + UL.timeline.map(function (t, i) {
          return '<div class="ul-item r-up"' + at(0, null, 0.25 + i * 0.22) + '><div class="y">' + (t.y || "") + '</div><div class="t">' + t.t + "</div></div>";
        }).join("") + "</div>" +
        '<div class="ul-q r-up"' + at(0, null, 1.4) + '><div class="label">' + C.classQuestion + "</div><p>" + UL.question + "</p></div>" +
        '<div class="ul-a r-blur"' + at(1) + ">" + UL.answer + "</div>" +
      "</div>"
  });

  var PE = C.f03.persist;
  statements("f03-persist", "03", [
    { html: PE.lines[0], cls: "st-md" },
    { html: PE.lines[1], cls: "st-lg red" }
  ], { notes: PE.notes });

  var JU = C.f03.juicero;
  add({
    id: "f03-juicero", file: "03", cls: "sc-juicero", steps: 2, notes: JU.notes,
    html:
      '<div class="ju-tag label">' + JU.tag + "</div>" +
      '<div class="ju-name">' + JU.name + "</div>" +
      '<div class="ju-sub serif">' + JU.sub + "</div>" +
      '<div class="ju-data">' +
        '<div class="ju-d r-up"' + at(0, null, 0.4) + '><div class="v">' + JU.d1.v.replace(/(\d+)/, '<span class="ju-cnt">$1</span>') + '</div><div class="l mono">' + JU.d1.l + "</div></div>" +
        '<div class="ju-d r-up"' + at(0, null, 0.9) + '><div class="v"><s>' + JU.d2.a + "</s>" + JU.d2.b + '</div><div class="l mono">' + JU.d2.l + "</div></div>" +
      "</div>" +
      '<p class="ju-exp r-up"' + at(0, null, 1.8) + ">" + JU.exp + "</p>" +
      '<div class="ju-q r-up"' + at(0, 1, 2.6) + ">" + JU.q + "</div>" +
      '<div class="ju-res r-up"' + at(1) + '><div class="v">' + JU.result + "</div><p>" + JU.resultSub + "</p></div>" +
      '<div class="ju-end label r-up"' + at(1, null, 0.6) + ">" + JU.end + "</div>" +
      '<div class="ju-lesson r-up"' + at(1, null, 1.2) + ">" + JU.lesson + "</div>",
    enter: function (ctx) {
      var el = ctx.el.querySelector(".ju-cnt");
      if (!el) return;
      var to = +el.getAttribute("data-to") || +el.textContent;
      el.setAttribute("data-to", to);
      if (ctx.instant) { el.textContent = to; return; }
      el.textContent = "0";
      ctx.after(500, function () { ctx.cleanup(FX.count(el, to, 1500)); });
    }
  });

  var SB = C.f03.stubborn;
  add({
    id: "f03-stubborn", file: "03", cls: "sc-stub", steps: 1, notes: SB.notes,
    html:
      '<div class="sb-big r-up"' + at(0, null, 0.1) + ">" + SB.big + "</div>" +
      '<div class="sb-cols">' +
        '<div class="sb-col a r-up"' + at(0, null, 0.9) + "><h3>" + SB.a.h + "</h3>" + PATH_SVG("a") + "<ul>" + SB.a.rows.map(function (r) { return "<li>" + r + "</li>"; }).join("") + "</ul></div>" +
        '<div class="sb-col b r-up"' + at(0, null, 1.3) + "><h3>" + SB.b.h + "</h3>" + PATH_SVG("b") + "<ul>" + SB.b.rows.map(function (r) { return "<li>" + r + "</li>"; }).join("") + "</ul></div>" +
      "</div>" +
      '<div class="sb-final r-up"' + at(0, null, 2.6) + ">" + SB.final + "</div>"
  });

  callbackScene("f03-callback", "03", C.f03.callback);

  /* ============================================================
     DOSYA 04 · RİSK TESTİ
     ============================================================ */
  fileScene("04");

  var SM = C.f04.scenario;
  function chartSVG() {
    var X0 = 180, X1 = 680, Y0 = 40, YM = 350, Y1 = 660;
    var px = function (tl) { return X0 + (tl / 5000) * (X1 - X0); };
    var py = function (v) { return YM - v * (YM - Y0); };
    var pts = [
      { k: "A", x: px(5000), y: py(0.3), d: SM.outcomes[0].risk + " · " + SM.outcomes[0].learn, anchor: "end" },
      { k: "B", x: px(500), y: py(0.85), d: SM.outcomes[1].risk + " · " + SM.outcomes[1].learn, anchor: "start", best: true },
      { k: "C", x: px(0), y: py(0), d: SM.outcomes[2].risk + " · " + SM.outcomes[2].learn, anchor: "start" },
      { k: "D", x: px(5000), y: py(-0.6), d: SM.outcomes[3].risk + " · " + SM.outcomes[3].learn, anchor: "end" }
    ];
    var s = '<svg viewBox="0 0 700 700">';
    s += '<rect x="' + X0 + '" y="' + Y0 + '" width="' + (px(1700) - X0) + '" height="' + (py(0.5) - Y0) + '" fill="rgba(111,227,198,.08)" stroke="rgba(111,227,198,.35)" stroke-dasharray="4 6"/>';
    s += '<text x="' + (X0 + 14) + '" y="' + (py(0.5) - 14) + '" style="fill:var(--accent)">' + SM.zone + "</text>";
    s += '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X0 + '" y2="' + Y1 + '" stroke="rgba(236,232,223,.35)"/>';
    s += '<line x1="' + X0 + '" y1="' + YM + '" x2="' + X1 + '" y2="' + YM + '" stroke="rgba(236,232,223,.35)"/>';
    s += '<line x1="' + X0 + '" y1="' + Y1 + '" x2="' + X1 + '" y2="' + Y1 + '" stroke="rgba(236,232,223,.14)" stroke-dasharray="3 6"/>';
    s += '<text x="' + (X0 - 16) + '" y="' + (Y0 + 5) + '" text-anchor="end">' + SM.yTop + "</text>";
    s += '<text x="' + (X0 - 16) + '" y="' + (YM + 5) + '" text-anchor="end">' + SM.yMid + "</text>";
    s += '<text x="' + (X0 - 16) + '" y="' + (Y1 + 5) + '" text-anchor="end" style="fill:var(--red)">' + SM.yBottom + "</text>";
    [0, 2500, 5000].forEach(function (v) {
      s += '<text x="' + px(v) + '" y="' + (Y1 + 36) + '" text-anchor="middle">' + FX.fmt(v) + " TL</text>";
    });
    s += '<text x="' + X1 + '" y="' + (Y1 + 68) + '" text-anchor="end">' + SM.xLabel + " →</text>";
    pts.forEach(function (p, i) {
      if (p.k !== "C") s += '<path class="traj" d="M' + px(0) + " " + py(0) + " L" + p.x + " " + p.y + '" style="--d:' + (0.1 + i * 0.18) + 's"/>';
    });
    pts.forEach(function (p, i) {
      var tx = p.anchor === "end" ? p.x - 26 : p.x + 26;
      var col = p.best ? "var(--accent)" : (p.k === "D" ? "var(--red)" : (p.k === "A" ? (FC["01"] || "var(--ink)") : "var(--ink-2)"));
      s += '<g class="pnt' + (p.best ? " best" : "") + '" style="--d:' + (0.2 + i * 0.18) + 's">' +
        '<circle cx="' + p.x + '" cy="' + p.y + '" r="' + (p.best ? 13 : 9) + '" fill="' + col + '"/>' +
        (p.best ? '<circle cx="' + p.x + '" cy="' + p.y + '" r="26" fill="none" stroke="var(--accent)" stroke-opacity=".5"/>' : "") +
        '<text class="pt" x="' + tx + '" y="' + (p.y - 6) + '" text-anchor="' + p.anchor + '">' + p.k + "</text>" +
        '<text class="pd" x="' + tx + '" y="' + (p.y + 20) + '" text-anchor="' + p.anchor + '">' + p.d + "</text></g>";
    });
    s += "</svg>";
    return s;
  }
  add({
    id: "f04-scenario", file: "04", cls: "sc-sim", steps: 3, notes: SM.notes,
    html:
      '<div class="sm-left">' +
        '<div class="sm-label label">' + SM.label + "</div>" +
        '<p class="sm-text r-up"' + at(null, 2) + ">" + SM.text + "</p>" +
        '<p class="sm-ask serif r-up"' + at(null, 2) + ">" + SM.ask + "</p>" +
        '<div class="sm-truth r-up"' + at(2, null, 0.2) + '><p class="t1">' + C.f04.truth.lines[0].replace("<br>", " ") + '</p><p class="t2">' + C.f04.truth.lines[1] + '</p><span class="chip accent">' + C.f04.truth.tag + "</span></div>" +
        '<div class="sm-opts">' + SM.options.map(function (o, i) {
          return '<button class="sm-opt r-up' + (i === 1 ? " best" : "") + '" data-interactive data-i="' + i + '"' + at(0, null, 0.3 + i * 0.1) + '><span class="k">' + LETTERS[i] + "</span><span>" + o + "</span></button>";
        }).join("") + "</div>" +
      "</div>" +
      '<div class="sm-right">' +
        '<div class="sm-out"><div class="pick">' + SM.pick + "</div>" +
          SM.outcomes.map(function (o, i) {
            return '<div class="sm-res" data-i="' + i + '"><div class="label">SONUÇ — ' + LETTERS[i] + "</div><h3>" + o.t + "</h3><p>" + o.d + '</p><div class="meta"><span class="chip">RİSK · ' + o.risk + '</span><span class="chip' + (i === 1 ? " accent" : "") + '">ÖĞRENME · ' + o.learn + "</span></div></div>";
          }).join("") +
        "</div>" +
        '<div class="sm-chart r-fade"' + at(1) + '><div class="label">' + SM.chartTitle + "</div>" + chartSVG() + '<div class="disc">' + SM.disclaimer + "</div></div>" +
      "</div>",
    init: function (el) {
      var self = this;
      el.querySelectorAll(".sm-opt").forEach(function (b) {
        b.addEventListener("click", function (e) { e.stopPropagation(); self.select(el, +b.dataset.i); });
      });
    },
    select: function (el, i) {
      el.querySelectorAll(".sm-opt").forEach(function (b, k) { b.classList.toggle("sel", k === i); });
      el.querySelector(".sm-opts").classList.toggle("has-sel", i !== -1);
      el.querySelector(".sm-out").classList.toggle("has-sel", i !== -1);
      el.querySelectorAll(".sm-res").forEach(function (r, k) { r.classList.toggle("on", k === i); });
      if (window.ENGINE.step === 1 && i !== -1) window.ENGINE.setStep(0);
    },
    enter: function (ctx) { if (!ctx.instant) this.select(ctx.el, -1); },
    step: function (ctx, n) { ctx.el.querySelector(".sm-chart").classList.toggle("on", n >= 1); },
    key: function (ctx, e) {
      var i = "abcd".indexOf(e.key.toLowerCase());
      if (i === -1) i = "1234".indexOf(e.key);
      if (i !== -1) { this.select(ctx.el, i); return true; }
      return false;
    }
  });

  var TR = C.f04.truth;
  statements("f04-truth", "04", [
    { html: TR.lines[0], cls: "st-md" },
    { html: TR.lines[1] + '<div style="display:flex;justify-content:center;margin-top:48px"><span class="chip accent">' + TR.tag + "</span></div>", cls: "st-md" }
  ], { notes: TR.notes });

  callbackScene("f04-callback", "04", C.f04.callback);

  var SF = C.f04.self;
  add({
    id: "f04-self", file: "04", cls: "sc-self", steps: 1, notes: SF.notes,
    html:
      '<div class="sf-label label">' + SF.label + "</div>" +
      '<div class="sf-sub serif">' + SF.sub + "</div>" +
      '<div class="sf-list">' + SF.questions.map(function (q, i) {
        return '<div class="sf-row r-up"' + at(0, null, 0.3 + i * 0.22) + '><div class="n">' + pad2(i + 1) + '</div><div><div class="q">' + q.q + '</div><div class="g">' + q.g + '</div></div><div class="sf-ans" data-interactive>' +
          SF.answers.map(function (a, k) { return '<button data-interactive data-k="' + k + '"' + (k === 0 ? ' class="y-btn"' : "") + ">" + a + "</button>"; }).join("") + "</div></div>";
      }).join("") + "</div>",
    init: function (el) {
      el.querySelectorAll(".sf-ans").forEach(function (g) {
        g.querySelectorAll("button").forEach(function (b) {
          b.addEventListener("click", function (e) {
            e.stopPropagation();
            var was = b.classList.contains("sel");
            g.querySelectorAll("button").forEach(function (x) { x.classList.remove("sel", "y"); });
            if (!was) { b.classList.add("sel"); if (b.dataset.k === "0") b.classList.add("y"); }
          });
        });
      });
    }
  });

  var RS = C.f04.result;
  add({
    id: "f04-result", file: "04", cls: "sc-result", steps: 1, notes: RS.notes,
    html:
      '<div class="rs-load"><span class="mono">' + RS.loading + '</span><div class="bar"><i></i></div><span class="pct">0%</span></div>' +
      '<div class="rs-label label">' + RS.label + "</div>" +
      '<div class="rs-l1">' + RS.l1 + "</div>" +
      '<div class="rs-l2 r-up"' + at(0, null, 3.0) + ">" + RS.l2 + "</div>" +
      '<div class="rs-l3 serif r-up"' + at(0, null, 4.2) + ">" + RS.l3 + "</div>",
    enter: function (ctx) {
      var pct = ctx.el.querySelector(".pct");
      if (ctx.instant) { pct.textContent = "100%"; return; }
      pct.textContent = "0%";
      ctx.after(300, function () {
        var s = performance.now();
        ctx.raf(function (now) {
          var p = Math.min(1, (now - s) / 1600);
          var e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
          pct.textContent = Math.round(e * 100) + "%";
          return p < 1;
        });
      });
    }
  });

  /* ============================================================
     DOSYA 05 · BAŞARI MI, HAYATTA KALMA MI?
     ============================================================ */
  fileScene("05");

  var WH = C.f05.why;
  statements("f05-why", "05", [{ html: WH.big, cls: "st-lg" }], {
    notes: WH.notes,
    extra: '<div class="label r-up" data-s="0" style="--d:.6s;position:absolute;left:0;right:0;bottom:150px;text-align:center">' + WH.sub + "</div>"
  });

  var NF = C.f05.netflix;
  var NF_TOP = [300, 392, 492, 632, 735, 820];
  var NF_STEP = [0, 2, 2, 2, 2, 2];
  var NF_DELAY = [0.1, 0.1, 0.8, 1.5, 2.2, 2.9];
  add({
    id: "f05-netflix", file: "05", cls: "sc-nf", steps: 3, notes: NF.notes,
    html:
      '<div class="nf-h l"><h3>' + NF.L.name + '</h3><div class="mono">' + NF.L.sub + "</div></div>" +
      '<div class="nf-h r"><h3>' + NF.R.name + '</h3><div class="mono">' + NF.R.sub + "</div></div>" +
      '<div class="nf-axis r-line" data-s="0" style="transform-origin:50% 0;--d:.2s"></div>' +
      '<div class="nf-head"><i></i></div>' +
      NF.rows.map(function (r, i) {
        var dead = /İflas|Reddetti/.test(r.r);
        return '<div class="nf-row r-up" style="top:' + NF_TOP[i] + "px;--d:" + NF_DELAY[i] + 's" data-s="' + NF_STEP[i] + '"><div class="l">' + r.l + '</div><div class="y"><span>' + r.y + '</span></div><div class="r' + (dead ? " dead" : "") + '">' + r.r + "</div></div>";
      }).join("") +
      '<div class="nf-bottom r-fade" data-s="1"><div class="nf-q r-up"' + at(1, 2) + ">" + NF.question + '</div><div class="nf-lesson r-up"' + at(2, null, 3.8) + ">" + NF.lesson + "</div></div>"
  });

  var KQ = C.f05.kodakQ;
  add({
    id: "f05-kodak-q", file: "05", cls: "sc-kq", steps: 2, notes: KQ.notes,
    html:
      '<div class="kq-flash"></div>' +
      '<div class="kq-label label">' + KQ.label + "</div>" +
      '<h2 class="kq-q">' + KQ.q + "</h2>" +
      '<div class="kq-opts">' + KQ.options.map(function (o, i) {
        return '<button class="kq-opt r-up' + (i === KQ.correct ? " ok" : "") + '" data-interactive data-i="' + i + '"' + at(0, null, 0.3 + i * 0.1) + ">" + o + "</button>";
      }).join("") + "</div>" +
      '<div class="kq-fact r-up"' + at(1, null, 0.5) + '><div class="yr">' + KQ.year + '</div><div><div class="who">' + KQ.who + '</div><div class="chips">' +
        KQ.chips.map(function (c) { return '<span class="chip">' + c + "</span>"; }).join("") + "</div></div></div>",
    init: function (el) {
      el.querySelectorAll(".kq-opt").forEach(function (b) {
        b.addEventListener("click", function (e) {
          e.stopPropagation();
          el.querySelectorAll(".kq-opt").forEach(function (x) { x.classList.toggle("sel", x === b); });
        });
      });
    }
  });

  var KM = C.f05.kodakMyth;
  add({
    id: "f05-kodak-myth", file: "05", cls: "sc-km", steps: 2, notes: KM.notes,
    html:
      '<div class="km-tag label">' + KM.tag + "</div>" +
      '<div class="km-truth label r-up"' + at(1, null, 0.5) + ">" + KM.truthTag + "</div>" +
      '<p class="km-myth serif"><span class="stk">' + KM.myth + "</span></p>" +
      '<div class="km-facts">' + KM.facts.map(function (f, i) {
        return '<div class="km-fact r-up"' + at(1, null, 1.5 + i * 0.22) + '><div class="n">0' + (i + 1) + "</div><p>" + f + "</p></div>";
      }).join("") + "</div>" +
      '<div class="km-con r-up"' + at(1, null, 3.4) + ">" + KM.conclusion + "</div>" +
      '<p class="km-fuji r-up"' + at(1, null, 4.0) + ">" + KM.fuji + "</p>"
  });

  var FJ = C.f05.fuji;
  function fjCol(o, side) {
    return '<div class="fj-col ' + side + ' r-up"' + at(1, null, side === "r" ? 0.4 : 0.1) + "><h3>" + o.name + '</h3><p class="lead">' + o.lead + "</p>" +
      o.items.map(function (it) { return '<div class="fj-item"><div class="k">' + it.k + '</div><div class="t">' + it.t + "</div></div>"; }).join("") + "</div>";
  }
  add({
    id: "f05-fujifilm", file: "05", cls: "sc-fj", steps: 3, notes: FJ.notes,
    html:
      '<div class="fj-label label">' + FJ.label + "</div>" +
      '<h2 class="fj-q r-up"' + at(0, 1) + ">" + FJ.q + "</h2>" +
      '<div class="fj-cols">' + fjCol(FJ.L, "l") + fjCol(FJ.R, "r") + "</div>" +
      '<div class="fj-lesson r-up"' + at(2) + ">" + FJ.lesson + "</div>"
  });

  var FM = C.f05.formula;
  add({
    id: "f05-formula", file: "05", cls: "sc-formula", steps: 1, notes: FM.notes,
    html:
      '<div class="fm-q">' + FM.q + "</div>" +
      '<div class="fm-line"></div>' +
      '<div class="fm-no">' + FM.no + "</div>" +
      '<div class="fm-after serif r-up"' + at(0, null, 2.6) + ">" + FM.after + "</div>",
    enter: function (ctx) {
      var el = ctx.el;
      el.classList.remove("struck");
      if (ctx.instant) { el.classList.add("struck"); return; }
      ctx.after(1150, function () { el.classList.add("struck"); });
    },
    next: function (ctx) {
      if (!ctx.el.classList.contains("struck")) { ctx.clearTimers(); ctx.el.classList.add("struck"); return true; }
      return false;
    }
  });

  /* Döngü */
  var LP = C.f05.loop;
  var LP_C = { x: 960, y: 565, rx: 430, ry: 300 };
  var LP_ANG = [-90, -30, 30, 90, 150, 210];
  var LP_POS = ["t", "r", "r", "b", "l", "l"];
  function ell(a) { var r = a * Math.PI / 180; return { x: LP_C.x + LP_C.rx * Math.cos(r), y: LP_C.y + LP_C.ry * Math.sin(r) }; }
  add({
    id: "f05-loop", file: "05", cls: "sc-loop", steps: 2, notes: LP.notes,
    html: function () {
      var nodes = LP.nodes.map(function (n, i) {
        return '<div class="lp-node pos-r" data-i="' + i + '"><span class="dot"></span><span class="tx">' + n + "</span></div>";
      }).join("");
      var ann = LP.ann;
      return '<svg class="lp-svg" viewBox="0 0 1920 1080">' +
          '<line class="lp-vline" x1="760" y1="250" x2="760" y2="890" stroke="rgba(236,232,223,.25)" stroke-width="1.5"/>' +
          '<ellipse class="lp-ell" cx="' + LP_C.x + '" cy="' + LP_C.y + '" rx="' + LP_C.rx + '" ry="' + LP_C.ry + '" fill="none" stroke="rgba(236,232,223,.22)" stroke-width="1.5"/>' +
          '<g class="lp-chev"></g>' +
          '<path class="lp-tail" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>' +
          '<circle class="lp-head-dot" r="7" fill="var(--accent)"/>' +
        "</svg>" +
        '<div class="lp-head label">' + C.f05.formula.after.replace(".", "").toLocaleUpperCase("tr-TR") + "</div>" +
        nodes +
        '<div class="lp-center">' +
          '<div class="lp-c1 r-up"' + at(1, 2, 0.9) + ">" + LP.c1 + "</div>" +
          '<div class="lp-c2 r-up"' + at(1, 2, 1.2) + ">" + LP.c2 + "</div>" +
          '<div class="r-up"' + at(2) + '><div class="label accent">' + ann[0].k + '</div><div class="lp-c2 lp-num" style="font-variant-numeric:tabular-nums">0</div><div class="lp-count">' + LP.counterLabel + "</div></div>" +
        "</div>" +
        '<div class="lp-ann r-up" data-s="2" style="--d:.3s;left:140px;top:210px"><div class="k">' + ann[1].k + '</div><div class="t">' + ann[1].t + "</div></div>" +
        '<div class="lp-ann r-up" data-s="2" style="--d:.5s;right:140px;top:860px;text-align:right"><div class="k">' + ann[2].k + '</div><div class="t">' + ann[2].t + "</div></div>";
    },
    layout: function (el, mode) {
      var nodes = el.querySelectorAll(".lp-node");
      nodes.forEach(function (nd, i) {
        var x, y;
        if (mode === "list") { x = 760; y = 250 + i * 128; nd.className = "lp-node pos-r"; }
        else { var p = ell(LP_ANG[i]); x = p.x; y = p.y; nd.className = "lp-node pos-" + LP_POS[i]; }
        nd.style.transform = "translate(" + x + "px," + y + "px)";
      });
      el.querySelector(".lp-vline").style.opacity = mode === "list" ? 1 : 0;
      el.querySelector(".lp-ell").style.opacity = mode === "list" ? 0 : 1;
      el.querySelector(".lp-chev").style.opacity = mode === "list" ? 0 : 1;
      el.querySelector(".lp-tail").style.opacity = mode === "list" ? 0 : 1;
      el.querySelector(".lp-head-dot").style.opacity = mode === "list" ? 0 : 1;
    },
    chevrons: function (el) {
      var g = el.querySelector(".lp-chev"), s = "";
      for (var i = 0; i < 6; i++) {
        var a = LP_ANG[i] + 30, p = ell(a), r = a * Math.PI / 180;
        var tx = -LP_C.rx * Math.sin(r), ty = LP_C.ry * Math.cos(r);
        var ang = Math.atan2(ty, tx) * 180 / Math.PI;
        s += '<path d="M -8 -8 L 4 0 L -8 8" fill="none" stroke="rgba(236,232,223,.5)" stroke-width="1.6" transform="translate(' + p.x.toFixed(1) + "," + p.y.toFixed(1) + ") rotate(" + ang.toFixed(1) + ')"/>';
      }
      g.innerHTML = s;
    },
    init: function (el) {
      this.chevrons(el);
      el.querySelector(".lp-ell").style.transition = "opacity 1s";
      el.querySelector(".lp-vline").style.transition = "opacity .8s";
    },
    enter: function (ctx) {
      var self = this, el = ctx.el;
      el.querySelectorAll(".lp-node").forEach(function (nd, i) { nd.style.setProperty("--d", (i * 0.12) + "s"); });
      this.mode = null;
      this.speed = 1;
      this.theta = -90;
      this.applyMode(ctx, ctx.step >= 1 ? "loop" : "list", true);
      if (!ctx.instant && ctx.step === 0) {
        el.querySelectorAll(".lp-node").forEach(function (nd) { nd.style.opacity = 0; });
        ctx.after(120, function () { el.querySelectorAll(".lp-node").forEach(function (nd) { nd.style.opacity = 1; }); });
      }
      var head = el.querySelector(".lp-head-dot"), tail = el.querySelector(".lp-tail"), nodes = el.querySelectorAll(".lp-node");
      var last = performance.now();
      ctx.raf(function (now) {
        var dt = Math.min(50, now - last); last = now;
        if (self.mode !== "loop") return true;
        self.theta += dt * 0.045 * self.speed;
        var th = self.theta;
        var p = ell(th);
        head.setAttribute("cx", p.x.toFixed(1)); head.setAttribute("cy", p.y.toFixed(1));
        var d = "";
        for (var k = 0; k <= 24; k++) { var q = ell(th - 70 + k * (70 / 24)); d += (k ? "L" : "M") + q.x.toFixed(1) + " " + q.y.toFixed(1) + " "; }
        tail.setAttribute("d", d);
        tail.style.strokeOpacity = 0.55;
        var nt = ((th % 360) + 360) % 360;
        nodes.forEach(function (nd, i) {
          var a = ((LP_ANG[i] % 360) + 360) % 360;
          var diff = Math.abs(nt - a); diff = Math.min(diff, 360 - diff);
          nd.classList.toggle("hot", diff < 22);
        });
        return true;
      });
      if (ctx.step >= 2) this.counter(ctx);
    },
    applyMode: function (ctx, mode, immediate) {
      var self = this, el = ctx.el;
      if (this.mode === mode) return;
      this.mode = mode;
      if (immediate) {
        var nds = el.querySelectorAll(".lp-node");
        nds.forEach(function (n) { n.style.transition = "none"; });
        this.layout(el, mode);
        void el.offsetWidth;
        nds.forEach(function (n) { n.style.transition = ""; });
        return;
      }
      el.querySelectorAll(".lp-node .tx").forEach(function (t) { t.style.transition = "opacity .3s"; t.style.opacity = 0; });
      this.layout(el, mode);
      ctx.after(900, function () {
        el.querySelectorAll(".lp-node .tx").forEach(function (t) { t.style.transition = "opacity .6s"; t.style.opacity = 1; });
      });
      if (mode === "list") el.querySelectorAll(".lp-node").forEach(function (nd) { nd.classList.remove("hot"); });
      void self;
    },
    counter: function (ctx) {
      var self = this, num = ctx.el.querySelector(".lp-num");
      if (ctx.instant) { num.textContent = FX.fmt(5127); return; }
      self.speed = 4;
      ctx.cleanup(FX.count(num, 5127, 3200, 0, function () { self.speed = 1; }));
    },
    step: function (ctx, n, prev) {
      if (prev === -1) return;
      this.applyMode(ctx, n >= 1 ? "loop" : "list", false);
      if (n === 2 && prev < 2) this.counter(ctx);
      if (n < 2) { this.speed = 1; ctx.el.querySelector(".lp-num").textContent = "0"; }
    }
  });

  /* ============================================================
     FİNAL
     ============================================================ */
  var FN = C.final;
  add({
    id: "final-case", file: "final", cls: "sc-fcase", steps: 2, notes: FN.caseNotes,
    html:
      '<div class="fc-left"><div class="label">' + FN.caseHead + '</div><div class="fc-name">' + FN.caseName + '</div><div class="fc-sub serif">' + FN.caseSub + "</div></div>" +
      '<div class="fc-list">' + FN.stages.map(function (s, i) {
        return '<div class="fc-row r-up" data-s="0" style="--d:' + (0.3 + i * 0.12).toFixed(2) + "s;--cc:" + colorOfRef(s.f) + '"><div class="n">' + pad2(i + 1) + '</div><div class="s">' + s.s + '</div><div class="c r-left"' + at(1, null, 0.1 + i * 0.22) + '><span class="dash"></span><span class="cn">' + s.c + '</span><span class="f">' + s.f + "</span></div></div>";
      }).join("") + "</div>" +
      '<div class="fc-scan"></div>' + spineSVG()
  });

  add({
    id: "final-question", file: "final", cls: "sc-fq", steps: 3, notes: FN.questionNotes,
    html:
      '<div class="fq-q r-blur"' + at(0, 1) + ">" + FN.question + "</div>" +
      '<div class="fq-timer r-fade"' + at(0, 1, 0.6) + '><span class="mono">' + FN.timer + '</span><div class="bar"><i></i></div><span class="sec">5</span></div>' +
      '<div class="fq-a fq-a1 r-up"' + at(1, 2) + "><s>" + FN.a1.replace(" değil.", "</s> değil.") + "</div>" +
      '<div class="fq-a fq-a2 lt-anim"' + at(1, 2, 1.1) + ">" + FN.a2.split("<br>").map(function (l, k) { return FX.letters(l, 31 + k, 0.7, 1.1 + k * 0.25); }).join("<br>") + "</div>" +
      '<div class="fq-a fq-a3 r-up"' + at(2) + ">" + FN.a3 + "</div>" +
      '<div class="fq-a fq-a4 lt-anim"' + at(2, null, 1.3) + ">" + FN.a4.split("<br>").map(function (l, k) { return FX.letters(l, 41 + k, 0.7, 1.3 + k * 0.25); }).join("<br>") + "</div>",
    countdown: function (ctx, delay) {
      var sec = ctx.el.querySelector(".sec");
      ctx.clearTimers();
      sec.textContent = "5";
      for (var k = 1; k <= 5; k++) {
        (function (k) { ctx.after(delay + k * 1000, function () { sec.textContent = String(5 - k); }); })(k);
      }
    },
    enter: function (ctx) {
      if (ctx.instant || ctx.step > 0) { ctx.el.querySelector(".sec").textContent = "0"; return; }
      this.countdown(ctx, 800);
    },
    step: function (ctx, n, prev) {
      if (prev > 0 && n === 0) this.countdown(ctx, 0);
    }
  });

  add({
    id: "final-title", file: "final", cls: "sc-ftitle", steps: 1, notes: FN.titleNotes,
    enter: function (ctx) {
      var ideas = this.ideas = new FX.Ideas(ctx.el.querySelector(".ft-ideas"));
      ideas.start();
      ideas.setMode("calm");
    },
    leave: function () { if (this.ideas) this.ideas.stop(); },
    resize: function () { if (this.ideas) { this.ideas.stop(); this.ideas.start(); } },
    html:
      '<canvas class="ft-ideas"></canvas>' +
      '<div class="ft-meta r-fade" data-s="0" style="--d:.2s">' + C.intro.meta.slice(0, 2).map(function (m) { return '<span class="mono">' + m + "</span>"; }).join("") +
        '<span class="mono">' + FN.status + "</span></div>" +
      '<div class="ft-layers"><div class="lh">' + FN.layersTitle + "</div>" + C.intro.layers.map(function (l, i) {
        return '<div class="row r-fade" data-s="0" style="--d:' + (1.4 + i * 0.12).toFixed(2) + "s;--tc:" + PAL[i % PAL.length] + '"><span>' + pad2(i + 1) + "</span><span>" + l + "</span><em>" + FN.layerDone + "</em></div>";
      }).join("") + "</div>" +
      '<h1 class="ft-t"><div>' + FX.letters(FN.title1, 21, 0.9) + "</div><div>" + FX.letters(FN.title2, 29, 0.9, 0.15) + "</div></h1>" +
      '<p class="ft-q serif">' + FN.quote.split("<br>").map(function (l, i) {
        return '<span class="rise r-up"' + at(0, null, 1.1 + i * 0.18) + "><span>" + l + "</span></span>";
      }).join("") + "</p>" +
      '<div class="ft-foot r-up"' + at(0, null, 2.4) + '><span class="grp">' + CFG.group.toLocaleUpperCase("tr-TR") + '</span><div class="names">' +
        CFG.members.map(function (m) { return "<span>" + m + "</span>"; }).join("") + "</div></div>"
  });

  var BN = C.bonus;
  add({
    id: "bonus", file: null, cls: "sc-bonus", steps: 1, hud: false, hidden: true, notes: BN.notes,
    html:
      '<div class="bn-1">' + BN.l1 + "</div>" +
      '<div class="bn-2 serif"><span class="tx"></span></div>' +
      '<div class="bn-cur"><span>_</span></div>',
    enter: function (ctx) {
      var tx = ctx.el.querySelector(".bn-2 .tx"), cur = ctx.el.querySelector(".bn-cur");
      cur.classList.remove("on");
      tx.textContent = "";
      if (ctx.instant) { tx.textContent = BN.l2; cur.classList.add("on"); return; }
      ctx.after(2300, function () {
        ctx.cleanup(FX.type(tx, BN.l2, 70, function () { ctx.after(500, function () { cur.classList.add("on"); }); }));
      });
    }
  });

  var SR = C.sources;
  add({
    id: "sources", file: null, cls: "sc-src", steps: 1, hud: false, hidden: true, notes: SR.notes,
    html:
      '<div class="label">' + SR.label + "</div>" +
      '<div class="src-list">' + SR.items.map(function (s) { return '<div class="src-item"><div class="k">' + s.k + '</div><div class="t">' + s.t + "</div></div>"; }).join("") + "</div>" +
      '<div class="src-foot">' + SR.foot + "</div>"
  });

  /* Sahne adları (dosya listesi, sunucu penceresi ve notlar sayfası için) */
  var TITLES = {
    "intro": "Açılış", "index": "İnceleme planı",
    "f00-brief": "Mühür açılıyor: 7 kavram", "f03-duo": "Kanıt: Blakely + Ulukaya", "f00-video": "Video: Bir Fikrin 180 Saniyelik Hayatı", "f00-after": "“Ama hepsini gördünüz.”",
    "f01-title": "Kapak", "f01-suspects": "Hangisi girişimci?", "f01-definition": "Tanım: üç fiil", "f01-myth": "Girişimci ≠ şirket sahibi", "f01-equation": "Fikir ≠ girişim", "f01-callback": "Video ipucu",
    "f02-title": "Kapak", "f02-vanish": "Girişimciler kaybolsa…", "f02-factors": "Dördüncü üretim faktörü", "f02-schumpeter": "Schumpeter", "f02-before-after": "Eski düzen → yeni düzen", "f02-message": "Geçersiz kılmak", "f02-destruction": "Yaratıcı yıkım",
    "f03-title": "Kapak", "f03-dna": "Gen haritası", "f03-blakely": "Kanıt: Sara Blakely", "f03-dyson": "Kanıt: James Dyson", "f03-ulukaya": "Kanıt: Hamdi Ulukaya", "f03-persist": "Israr yeter mi?", "f03-juicero": "Karşı kanıt: Juicero", "f03-stubborn": "İnat ≠ kararlılık", "f03-callback": "Video ipucu",
    "f04-title": "Kapak", "f04-scenario": "Simülasyon: 5.000 TL", "f04-truth": "Doğru risk", "f04-callback": "Video ipucu", "f04-self": "Kendi dosyan", "f04-result": "Sonuç",
    "f05-title": "Kapak", "f05-why": "Bir fikir neden yaşar?", "f05-netflix": "Netflix ↔ Blockbuster", "f05-kodak-q": "Dijital kamerayı kim buldu?", "f05-kodak-myth": "Kodak efsanesi", "f05-fujifilm": "Fujifilm ↔ Kodak", "f05-formula": "Başarı formülü? Yok.", "f05-loop": "Geri bildirim döngüsü",
    "final-case": "ChargeBox otopsisi", "final-question": "Gerçek ürün neydi?", "final-title": "Final",
    "bonus": "Gizli ekran", "sources": "Kaynaklar"
  };
  /* İnat / kararlılık: küçük yol animasyonları (SVG SMIL) */
  function PATH_SVG(kind) {
    var wall = '<rect x="398" y="10" width="10" height="90" class="pw"><animate attributeName="opacity" values="1;1;.35;1;1;.35;1;1;.35;1" keyTimes="0;.33;.36;.4;.57;.6;.64;.78;.81;1" dur="3.6s" repeatCount="indefinite"/></rect>';
    if (kind === "a") {
      return '<svg class="sb-path a" viewBox="0 0 600 110">' +
        '<path d="M20 55 H388" class="pl"/>' + wall +
        '<circle cx="560" cy="55" r="18" class="pg"/><circle cx="560" cy="55" r="5" class="pg2"/>' +
        '<circle r="10" class="pd"><animateMotion dur="3.6s" repeatCount="indefinite" path="M20 55 H386" keyPoints="0;1;.7;1;.78;1;.84;1;0" keyTimes="0;.34;.46;.58;.66;.79;.86;.92;1" calcMode="linear"/></circle>' +
        '<text x="403" y="108" class="pt">DUVAR</text><text x="560" y="108" class="pt">HEDEF</text></svg>';
    }
    return '<svg class="sb-path b" viewBox="0 0 600 110">' +
      '<path d="M20 55 H330 C372 55 366 4 403 4 C440 4 434 55 476 55 H546" class="pl"/>' +
      '<path d="M20 55 H330 C372 55 366 4 403 4 C440 4 434 55 476 55 H546" class="ptrail"/>' + wall.replace(/<animate[^>]*\/>/, "") +
      '<circle cx="560" cy="55" r="18" class="pg"><animate attributeName="r" values="18;18;26;18;18" keyTimes="0;.74;.8;.88;1" dur="3.6s" repeatCount="indefinite"/></circle><circle cx="560" cy="55" r="5" class="pg2"/>' +
      '<circle r="10" class="pd"><animateMotion dur="3.6s" repeatCount="indefinite" path="M20 55 H330 C372 55 366 4 403 4 C440 4 434 55 476 55 H546" keyPoints="0;1;1" keyTimes="0;.76;1" calcMode="linear"/></circle>' +
      '<text x="403" y="108" class="pt">DUVAR</text><text x="560" y="108" class="pt">HEDEF</text></svg>';
  }

  /* Final: 7 kavram boyunca akan ışık — her satırda o kavramın rengini alır */
  function spineSVG() {
    var st = C.final.stages, H = 854, step = 122, cols = st.map(function (s) { return colorOfRef(s.f); });
    var dots = st.map(function (s, i) { return '<circle cx="14" cy="' + (61 + i * step) + '" r="4" fill="' + cols[i] + '"/>'; }).join("");
    var kt = st.map(function (s, i) { return ((61 + i * step) / H).toFixed(3); });
    return '<svg class="fc-spine r-fade" data-s="1" style="--d:.4s" viewBox="0 0 28 ' + H + '" width="28" height="' + H + '">' +
      '<line x1="14" y1="0" x2="14" y2="' + H + '" class="sl"/>' + dots +
      '<circle r="7" class="sp"><animateMotion dur="4.2s" repeatCount="indefinite" path="M14 0 V' + H + '"/>' +
      '<animate attributeName="fill" dur="4.2s" repeatCount="indefinite" values="' + cols.join(";") + '" keyTimes="0;' + kt.slice(1).map(function (v, i) { return (i === kt.length - 2) ? "1" : v; }).join(";") + '"/></circle></svg>';
  }

  /* İki kanıt için mini animasyonlar: başarısızlık basamakları · ekibin kurulması */
  var DUO_ZIG = '<svg class="duo-mini zig" viewBox="0 0 240 110"><path class="zl" d="M6 70 L40 92 L70 58 L102 96 L134 52 L166 90 L200 30 L234 8"/>' +
    '<circle cx="40" cy="92" r="4" class="zf" style="--dd:.5s"/><circle cx="102" cy="96" r="4" class="zf" style="--dd:1.1s"/><circle cx="166" cy="90" r="4" class="zf" style="--dd:1.7s"/><circle cx="234" cy="8" r="6" class="zw"/>' +
    '<text x="6" y="108" class="zt">DENE · YANIL · ÖĞREN</text></svg>';
  var DUO_NET = (function () {
    var s = '<svg class="duo-mini net" viewBox="0 0 240 110">', cx = 120, cy = 52, n = 8, i;
    for (i = 0; i < n; i++) {
      var a = (i / n) * Math.PI * 2 - Math.PI / 2, x = cx + Math.cos(a) * 96, y = cy + Math.sin(a) * 42;
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '" class="nl" style="--dd:' + (0.2 + i * 0.22).toFixed(2) + 's"/>' +
        '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="5" class="nn" style="--dd:' + (0.3 + i * 0.22).toFixed(2) + 's"/>';
    }
    return s + '<circle cx="' + cx + '" cy="' + cy + '" r="9" class="nc"/><text x="120" y="108" class="zt" text-anchor="middle">EKİP KURULUYOR</text></svg>';
  })();

  /* Blakely + Ulukaya: iki kanıt yan yana */
  var DUO = C.f03.duo;
  add({
    id: "f03-duo", file: "03", cls: "sc-duo", steps: 2, notes: DUO.notes,
    html:
      '<div class="duo-label label">' + DUO.label + "</div>" +
      '<div class="duo-q r-up"' + at(0, null, 2.4) + ">" + DUO.question + "</div>" +
      [[C.f03.blakely, LC[0], DUO.a], [C.f03.ulukaya, LC[2], DUO.b]].map(function (x, i) {
        var o = x[0], c = x[1], d = x[2];
        return '<div class="duo-col r-up duo-' + i + '" data-s="0" style="--d:' + (0.2 + i * 0.45) + "s;--lc:" + c + '">' +
          '<div class="duo-tag">' + d.tag + '</div><div class="duo-name">' + o.name.replace("<br>", " ") + '</div><div class="duo-sub serif">' + o.sub + "</div>" +
          (i === 0 ? DUO_ZIG : DUO_NET) +
          '<p class="duo-lead">' + d.lead + '</p><p class="duo-big">' + d.big + "</p>" +
          '<div class="duo-ans r-up"' + at(1, null, 0.15 + i * 0.35) + "><p>" + d.answer + '</p><div class="gene-chips">' +
            o.genes.map(function (g) { return '<span class="chip">' + g + "</span>"; }).join("") + "</div></div></div>";
      }).join("")
  });

  /* ============================================================
     SAHNE SIRASI — önce sunum, en sonda video (DOSYA 00)
     Bir sahneyi taşımak için bu listede yerini değiştirmek yeterli.
     ============================================================ */
  var ORDER = [
    "intro",
    "f01-title", "f01-suspects", "f01-definition", "f01-equation",
    "f02-title", "f02-vanish", "f02-before-after", "f02-destruction",
    "f03-title", "f03-dna", "f03-dyson", "f03-duo", "f03-juicero", "f03-stubborn",
    "f04-title", "f04-scenario", "f04-result",
    "f05-title", "f05-netflix", "f05-kodak-q", "f05-kodak-myth", "f05-formula", "f05-loop",
    "f00-brief", "f00-video", "f00-after",
    "final-case", "final-question", "final-title",
    "bonus", "sources"
  ];
  var byId = {};
  SCENES.forEach(function (d) { byId[d.id] = d; });
  var ordered = ORDER.filter(function (id) { return byId[id]; }).map(function (id) { return byId[id]; });
  /* Listede olmayan sahneler (index, f02-factors, f05-fujifilm, ipucu ekranları vb.) gösterilmez;
     10 dakika sınırı için çıkarıldılar. Geri eklemek için id'yi ORDER'a yazmanız yeterli. */
  SCENES = ordered;

  SCENES.forEach(function (d) { d.title = d.title || TITLES[d.id] || d.id; });
  window.SCENES = SCENES;
})();
