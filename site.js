/* ==========================================================================
   SUNUMLAR · Ada Sarp Kırık — sayfa davranışı
   İçerik sunumlar.js dosyasından gelir; burada değiştirmeniz gereken bir şey yok.
   ========================================================================== */
(function () {
  "use strict";

  var SITE = window.SITE || {};
  var LIST = (window.SUNUMLAR || []).slice();
  var AYLAR = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  var KISA = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
  var RM = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;
  var DUR = 3200;

  /* Eski bağlantılar: sunum eskiden ana adresteydi (ör. /#18) → sunumun kendisine git */
  if (SITE.eskiAnaSunum && /^#\d+(\.\d+)?$/.test(location.hash)) {
    location.replace("/" + SITE.eskiAnaSunum + "/" + location.hash);
    return;
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function pad(n) { return String(n).padStart(2, "0"); }
  function ay(t, kisa) {
    var p = String(t || "").split("-"), m = +p[1];
    return m ? (kisa ? KISA : AYLAR)[m - 1] + " " + p[0] : (p[0] || "");
  }
  function adres(s) { return "/" + s.klasor + "/"; }
  function kare(s, i) { return "/onizleme/" + s.klasor + "/" + pad(i + 1) + ".webp"; }
  function renk(s) {
    return s.renk || (s.bolumler && s.bolumler[0] && s.bolumler[0].renk) || "#FFC15E";
  }

  LIST.sort(function (a, b) { return String(b.tarih).localeCompare(String(a.tarih)); });
  var total = LIST.length;

  document.getElementById("lede").textContent = SITE.aciklama || "";
  document.getElementById("topMeta").textContent = total + " sunum" + (total ? " · son: " + ay(LIST[0].tarih) : "");
  document.getElementById("copy").textContent = "© " + new Date().getFullYear() + " " + (SITE.sahibi || "");

  /* ---------------- son sunum ---------------- */
  var featured = document.getElementById("featured");
  var F = LIST[0];
  var KEYS =
    '<span><kbd>→</kbd>ileri</span><span><kbd>←</kbd>geri</span><span><kbd>F</kbd>tam ekran</span>' +
    '<span><kbd>N</kbd>notlar</span><span><kbd>O</kbd>ekran listesi</span>';

  function facts(s) {
    var rows = [];
    if (s.konu) rows.push(["Konu", esc(s.konu)]);
    if (s.sure || s.ekran) rows.push(["Süre", esc(s.sure || "") + (s.ekran ? '<small>' + s.ekran + " ekran</small>" : "")]);
    if (s.ekip || (s.uyeler && s.uyeler.length)) rows.push(["Ekip", esc(s.ekip || "") + (s.uyeler ? "<small>" + s.uyeler.map(esc).join(", ") + "</small>" : "")]);
    return rows.map(function (r) { return '<div><dt class="mono">' + r[0] + "</dt><dd>" + r[1] + "</dd></div>"; }).join("");
  }

  if (F) {
    var frames = F.kareler || [];
    featured.style.setProperty("--dur", DUR + "ms");
    featured.innerHTML =
      '<div class="screen-wrap">' +
        '<button class="screen" type="button" id="screen" data-start="' + esc(adres(F)) + '" aria-label="' + esc(F.baslik) + ' sunumunu tam ekran başlat">' +
          frames.map(function (c, i) { return '<img src="' + kare(F, i) + '" alt="" decoding="async">'; }).join("") +
          '<span class="play"><i aria-hidden="true"></i><span class="mono">Tam ekran başlat</span></span>' +
        "</button>" +
        (frames.length > 1
          ? '<div class="ticks" role="group" aria-label="Önizleme kareleri">' +
            frames.map(function (c, i) { return '<button class="tick" type="button" style="--c:' + esc(c) + '" aria-label="Kare ' + (i + 1) + '"></button>'; }).join("") +
            "</div>"
          : "") +
        '<div class="screen-cap mono"><span>Sunumdan kareler</span><span id="capNo"></span></div>' +
      "</div>" +
      '<div class="info">' +
        '<p class="kicker mono"><span class="dot" aria-hidden="true"></span>Son sunum · ' + esc(ay(F.tarih)) + "</p>" +
        '<h2 class="ft-title">' + esc(F.baslik) + "</h2>" +
        (F.altBaslik ? '<p class="ft-sub serif">' + esc(F.altBaslik) + "</p>" : "") +
        '<dl class="facts">' + facts(F) + "</dl>" +
        '<div class="actions">' +
          '<button class="btn primary" type="button" data-start="' + esc(adres(F)) + '"><span class="tri" aria-hidden="true"></span>Tam ekran başlat</button>' +
          '<a class="btn" href="' + esc(adres(F)) + '" target="_blank" rel="noopener">Yeni sekmede aç ↗</a>' +
          (F.notlar ? '<a class="btn" href="' + esc(adres(F) + F.notlar) + '" target="_blank" rel="noopener">Konuşma notları</a>' : "") +
        "</div>" +
        '<div class="keys">' + KEYS + "</div>" +
      "</div>" +
      (F.bolumler && F.bolumler.length
        ? '<ol class="contents" aria-label="İçindekiler">' +
          F.bolumler.map(function (b) {
            return '<li style="--c:' + esc(b.renk) + '"><span class="no">' + esc(b.no) + '</span><span class="ad">' + esc(b.ad) + "</span></li>";
          }).join("") +
          "</ol>"
        : "");
  } else {
    featured.innerHTML = '<p class="noscript">Henüz sunum eklenmedi.</p>';
  }

  /* perdede kareler sırayla döner; salonun ışığı karenin rengini alır */
  var screen = document.getElementById("screen");
  var imgs = screen ? [].slice.call(screen.querySelectorAll("img")) : [];
  var ticks = [].slice.call(featured.querySelectorAll(".tick"));
  var capNo = document.getElementById("capNo");
  var cur = -1, timer = null, stageOpen = false;

  function show(i) {
    if (!imgs.length) return;
    cur = (i + imgs.length) % imgs.length;
    imgs.forEach(function (im, k) { im.classList.toggle("on", k === cur); });
    ticks.forEach(function (t, k) {
      t.classList.remove("on", "still");
      t.classList.toggle("done", k < cur);
    });
    if (ticks[cur]) {
      void ticks[cur].offsetWidth;
      ticks[cur].classList.add("on");
      if (RM) ticks[cur].classList.add("still");
    }
    if (F.kareler && F.kareler[cur]) root.style.setProperty("--spill", F.kareler[cur]);
    if (capNo) capNo.textContent = pad(cur + 1) + " / " + pad(imgs.length);
    schedule();
  }
  function schedule() {
    clearTimeout(timer);
    if (RM || document.hidden || stageOpen || imgs.length < 2) return;
    timer = setTimeout(function () { show(cur + 1); }, DUR);
  }
  ticks.forEach(function (t, k) { t.addEventListener("click", function () { show(k); }); });
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden && ticks[cur]) show(cur); else schedule();
  });
  show(0);

  /* ---------------- diğer sunumlar ---------------- */
  var others = LIST.slice(1);
  var rows = document.getElementById("rows");
  document.getElementById("arCount").textContent = others.length ? pad(others.length) + " sunum" : "Henüz yok";
  rows.innerHTML = others.map(function (s, i) {
    return '<li class="row" style="--c:' + esc(renk(s)) + '"><a href="' + esc(adres(s)) + '" data-peek="' + esc(kare(s, 0)) + '">' +
      '<span class="r-no mono">' + pad(total - 1 - i) + "</span>" +
      '<span class="r-title">' + esc(s.baslik) + (s.altBaslik ? "<em>" + esc(s.altBaslik) + "</em>" : "") + "</span>" +
      '<span class="r-topic">' + esc(s.konu || "") + "</span>" +
      '<span class="r-date mono">' + esc(ay(s.tarih, true)) + "</span>" +
      '<span class="r-time mono">' + (s.ekran ? s.ekran + " ekran" : "") + "</span>" +
      '<span class="r-go" aria-hidden="true">→</span>' +
      "</a></li>";
  }).join("") +
    '<li class="row next"><span class="mono">' + pad(total + 1) + '</span><p>Yeni sunumlar eklendikçe burada listelenir.</p></li>';

  /* satırların üzerinde gezerken küçük önizleme */
  var peek = document.getElementById("peek"), peekImg = peek.querySelector("img");
  rows.addEventListener("mousemove", function (e) {
    var a = e.target.closest("a[data-peek]");
    if (!a) { peek.classList.remove("on"); return; }
    if (peekImg.getAttribute("src") !== a.dataset.peek) peekImg.src = a.dataset.peek;
    peek.style.left = e.clientX + "px";
    peek.style.top = e.clientY + "px";
    peek.classList.add("on");
  });
  rows.addEventListener("mouseleave", function () { peek.classList.remove("on"); });

  /* ---------------- tam ekran sahne ---------------- */
  var stage = document.getElementById("stage");
  var frame = document.getElementById("stageFrame");
  var quietT = null;

  function fsEl() { return document.fullscreenElement || document.webkitFullscreenElement || null; }

  function start(href) {
    var req = stage.requestFullscreen || stage.webkitRequestFullscreen;
    if (!req) { location.href = href; return; }   // ör. iPhone: sunumu doğrudan aç
    stageOpen = true;
    clearTimeout(timer);
    stage.hidden = false;
    stage.classList.remove("quiet");
    frame.src = href;
    var p;
    try { p = req.call(stage); } catch (e) { p = null; }
    if (p && p.catch) p.catch(function () { closeStage(); location.href = href; });
    clearTimeout(quietT);
    quietT = setTimeout(function () { if (fsEl()) stage.classList.add("quiet"); }, 3000);
  }

  function closeStage() {
    if (!stageOpen) return;
    stageOpen = false;
    clearTimeout(quietT);
    stage.hidden = true;
    stage.classList.remove("quiet");
    frame.src = "about:blank";
    if (fsEl()) {
      var x = document.exitFullscreen || document.webkitExitFullscreen;
      if (x) { var r = x.call(document); if (r && r.catch) r.catch(function () {}); }
    }
    show(cur);
    var b = featured.querySelector(".btn.primary");
    if (b) b.focus({ preventScroll: true });
  }

  frame.addEventListener("load", function () {
    if (!stageOpen) return;
    try { frame.contentWindow.focus(); } catch (e) {}
  });
  function onFs() { if (stageOpen && !fsEl()) closeStage(); }
  document.addEventListener("fullscreenchange", onFs);
  document.addEventListener("webkitfullscreenchange", onFs);
  document.getElementById("stageClose").addEventListener("click", closeStage);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && stageOpen) closeStage(); });

  featured.addEventListener("click", function (e) {
    var b = e.target.closest("[data-start]");
    if (b) start(b.getAttribute("data-start"));
  });
})();
