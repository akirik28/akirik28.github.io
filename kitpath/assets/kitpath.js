/* Kitpath UI v2 — ortak davranışlar ve sayfa modülleri.
   Her sayfa <body data-page="..." data-root="../"> taşır; bu dosya üst menüyü, alt menüyü
   ve sayfaya özel parçaları çizer.
   Veri: giriş yapılmışsa hesap (assets/hesap.js → Supabase) ve ilerleme kayıtları (assets/icerik.js);
   kit içerikleri canlı siteden. Giriş yapılmamışken panel, profil ve yönetim assets/data.js'teki
   örnek verilerle "örnek görünüm" olarak açılır. */
(function () {
  "use strict";
  var D = window.KDATA;                    /* örnek veriler (yalnızca giriş yapılmamışken) */
  var H = window.HESAP || null;
  var C = window.KICERIK || null;
  var body = document.body;
  var ROOT = body.dataset.root || "";
  var COLORS = { macro: "#E07A3F", micro: "#D2557A", psych: "#1F9FB4", csa: "#5A55D6", physc: "#C2413A", stats: "#2FA37A", hug: "#3D7BFF", bpf: "#9B6BDB", calc: "#E0A43F", cep: "#D9A21B",
    precalc: "#E0A43F", chem: "#E0534A", phys: "#5A67D8", bio: "#5FA83A", eng: "#9A6A45" };
  var HESAPLI = !!(H && H.aktif());
  var ME = HESAPLI ? H.aktif() : null;

  /* ---------- yardımcılar ---------- */
  function $(sel, el) { return (el || document).querySelector(sel); }
  function $$(sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function md(s) { return C ? C.md(s) : esc(s); }
  function fill(sel, html) { var el = typeof sel === "string" ? $(sel) : sel; if (el) el.innerHTML = html; return el; }
  function param(name) { return new URLSearchParams(location.search).get(name); }
  function toast(msg) {
    var t = document.createElement("div");
    t.className = "toast-msg"; t.setAttribute("role", "status"); t.textContent = msg;
    body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2600);
  }
  function fmt(sec) { sec = Math.max(0, Math.round(sec)); return Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0"); }
  function sayi(n) { return n == null ? "—" : String(Math.round(Number(n) * 10) / 10).replace(".", ","); }
  var AYLAR = ["OCA", "ŞUB", "MAR", "NİS", "MAY", "HAZ", "TEM", "AĞU", "EYL", "EKİ", "KAS", "ARA"];
  function tarihUzun(iso) { return new Date(iso).toLocaleDateString("tr-TR", { day: "numeric", month: "long" }); }
  function saatli(iso) { var d = new Date(iso); return d.toLocaleDateString("tr-TR", { weekday: "long" }) + " " + d.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }); }
  function kalan(iso) {
    var ms = new Date(iso) - Date.now(), g = Math.ceil(ms / 864e5);
    if (ms <= 0) return "";
    if (ms < 864e5) return Math.max(1, Math.round(ms / 36e5)) + " saat";
    return g + " gün";
  }
  function initials(name) {
    var p = String(name || "").trim().split(/\s+/).filter(Boolean);
    return ((p[0] || "?").charAt(0) + (p.length > 1 ? p[p.length - 1].charAt(0) : "")).toLocaleUpperCase("tr-TR");
  }
  function ilkAd(name) { return String(name || "").trim().split(/\s+/)[0] || ""; }
  function renk(s) { var l = ["#F4A97A", "#8FD3B4", "#B9C7FF", "#F5D85E", "#D9B8F5", "#F4C9A9"], h = 0, i; s = String(s); for (i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return l[h % l.length]; }
  function git(yol) { location.replace(ROOT + yol); }
  function buradan() { return location.pathname + location.search; }
  /* ?devam= yalnızca bu sitenin içine döner */
  /* quiz ve not takibi yalnızca Üsküdar Amerikan 11. sınıflarda (okulu bilinmeyen eski önbellek profili ÜAL sayılır) */
  function notTakibi() { var p = HESAPLI && H.profil ? H.profil() : null; return !p || ((p.okul || "uaa") === "uaa" && (p.sinif == null || p.sinif === 11)); }
  function devamAdresi() { var d = param("devam"); return d && /^\/(?!\/)/.test(d) ? d : null; }
  function girisGerek() { location.replace(ROOT + "giris/?mod=giris&devam=" + encodeURIComponent(buradan())); }
  /* kitlerden önce: kurulum eksikse onboarding. Süresi geçmiş quiz notu artık yalnızca kendi dersini kilitler (kilitliMi) */
  function engelKontrol() {
    if (!HESAPLI) return false;
    function bak(p) {
      if (H.engel(p) === "kurulum") { git("hosgeldin/"); return true; }
      return false;
    }
    var p0 = H.profil();
    if (p0 && bak(p0)) return true;
    H.profilYenile().then(function (p) { bak(p); }, function () {});
    return false;
  }
  /* ---------- quiz kilidi ----------
     Son tarihi geçmiş, notu girilmemiş quiz o dersi kilitler: yalnızca Unit 1'in 1. videosu açık kalır.
     Kilitli yerlerin üstünde bulanık perde + sallanan kilit + not girme kutusu; not girilince sayfa yenilenir ve ders açılır. */
  function kilitliMi(ders) { if (!HESAPLI || !C || !ders) return null; return C.kilitler(H.profil())[ders] || null; }
  function kilitTazele(ders) {
    var once = JSON.stringify(kilitliMi(ders) || []);
    H.profilYenile().then(function (p) { if (JSON.stringify(C.kilitler(p)[ders] || []) !== once) location.reload(); }, function () {});
  }
  var KILIT_SVG = '<svg class="kilit-anim" viewBox="0 0 80 96" aria-hidden="true"><path class="kilit-anim__halka" d="M22 46 V30 a18 18 0 0 1 36 0 V46" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/><rect x="8" y="42" width="64" height="48" rx="13" fill="currentColor"/><circle cx="40" cy="62" r="6.5" fill="var(--surface)"/><rect x="36.5" y="64" width="7" height="13" rx="3.5" fill="var(--surface)"/></svg>';
  var ZINCIR = '<span class="zincir zincir--1" aria-hidden="true"></span><span class="zincir zincir--2" aria-hidden="true"></span>';
  function kilitRozet(metin) { return '<span class="kilitli-rozet">' + ZINCIR + '<span class="kilit-dus">' + KILIT_SVG + '</span><b>' + esc(metin || "Quiz notu bekleniyor") + '</b></span>'; }
  /* perde: arkası bulanık, iki zincir çarpı şeklinde gelir, ortaya kilit düşer; altında açıklama ve eylem */
  function perdeKabuk(ust, metin, eylem, kucuk) {
    var arka = '<span class="kilit__arka" aria-hidden="true"><i style="width:100%;height:' + (kucuk ? 90 : 180) + 'px"></i><i style="width:72%"></i><i style="width:88%"></i><i style="width:54%"></i><i style="width:80%"></i></span>';
    return '<div class="kilit' + (kucuk ? " kilit--kucuk" : "") + '" role="region" aria-label="Kilitli içerik">' + arka + ZINCIR + '<div class="kilit__on"><span class="kilit-dus">' + KILIT_SVG + '</span>' +
      '<strong class="h3" style="font-size:' + (kucuk ? 19 : 24) + 'px">' + esc(ust) + '</strong>' +
      '<span class="muted" style="line-height:1.55;font-size:' + (kucuk ? 13 : 15) + 'px">' + metin + '</span>' + eylem + '</div></div>';
  }
  function kilitPerde(quizler, ust, kucuk) {
    return perdeKabuk(ust || "Bu ders şimdilik kilitli",
      quizler.map(function (q) { return esc(q.ders + " · " + q.baslik); }).join(", ") + " quizinin son tarihi geçti. Notunu gir, ders hemen açılsın. Şimdilik yalnızca ilk video açık.",
      quizler.map(function (q) {
        return '<form data-quiz="' + esc(q.id) + '" data-max="' + q.max_puan + '" novalidate><input class="grade-in" name="puan" type="text" inputmode="decimal" autocomplete="off" placeholder="Not" aria-label="' + esc(q.baslik) + ' notun, ' + sayi(q.max_puan) + ' üzerinden" style="width:92px"><span class="mono">/ ' + sayi(q.max_puan) + '</span><button type="submit" class="btn btn--primary btn--sm">Notu gir, kilidi aç</button></form>';
      }).join(""), kucuk);
  }
  /* hesapsız ziyaretçi: her kitte yalnızca ilk video açık */
  function misafirPerde(ust, kucuk) {
    return perdeKabuk(ust || "Ücretsiz hesapla açılır", "Hesapsız yalnızca ilk video açık. Ücretsiz bir hesapla bütün bölümler, sorular, denemeler ve defterler açılır; ilerlemen her cihazda seninle olur.",
      '<div class="row" style="gap:10px;justify-content:center"><a class="btn btn--primary btn--sm" href="' + ROOT + 'giris/?devam=' + encodeURIComponent(buradan()) + '">Ücretsiz hesap aç</a><a class="btn btn--ghost btn--sm" href="' + ROOT + 'giris/?mod=giris&devam=' + encodeURIComponent(buradan()) + '">Giriş yap</a></div>', kucuk);
  }
  document.addEventListener("submit", function (e) {
    var f = e.target.closest && e.target.closest(".kilit form[data-quiz]"); if (!f) return;
    e.preventDefault();
    var inp = f.puan, max = +f.dataset.max, v = Number(String(inp.value).trim().replace(",", "."));
    if (!String(inp.value).trim() || !(v >= 0 && v <= max)) { inp.setAttribute("aria-invalid", "true"); toast("0 ile " + sayi(max) + " arasında bir not yaz"); inp.focus(); return; }
    var bt = f.querySelector("button"); bt.disabled = true;
    H.notGir(f.dataset.quiz, v).then(function () { toast("Notun kaydedildi, kilit açılıyor"); setTimeout(function () { location.reload(); }, 700); }, function (x) { bt.disabled = false; toast(H.hataMetni(x)); });
  });
  /* zincirler kutunun köşegenine otursun: açı ve uzunluk kutunun boyutundan */
  function zincirAyarla(el) {
    var r = el.getBoundingClientRect(); if (!r.width || !r.height) return;
    el.style.setProperty("--za", (Math.atan2(r.height, r.width) * 180 / Math.PI).toFixed(1) + "deg");
    el.style.setProperty("--zl", Math.ceil(Math.hypot(r.width, r.height) + 40) + "px");
  }
  if (window.ResizeObserver) {
    var zRO = new ResizeObserver(function (es) { es.forEach(function (e) { zincirAyarla(e.target); }); });
    new MutationObserver(function () { $$(".kilit, .kilitli-rozet").forEach(function (el) { if (!el.dataset.zo) { el.dataset.zo = "1"; zRO.observe(el); zincirAyarla(el); } }); })
      .observe(document.documentElement, { childList: true, subtree: true });
  }
  /* örnek görünüm şeridi (giriş yapılmamışken panel, profil, yönetim) */
  function ornekSerit(metin) {
    var main = $("main");
    if (!main) return;
    var d = document.createElement("div");
    d.className = "card guest-bar";
    d.innerHTML = '<span class="hand">örnek!</span><span style="flex:1 1 360px;font-size:15px;line-height:1.5">' + metin + '</span><a class="btn btn--primary btn--sm" href="' + ROOT + 'giris/?mod=giris&devam=' + encodeURIComponent(buradan()) + '">Giriş yap</a>';
    main.insertBefore(d, main.firstChild);
  }
  function kullanici() {
    if (HESAPLI) { var s = C ? C.seri() : { simdi: 0 }; return { name: ME.name, initials: initials(ME.name), streak: s.simdi }; }
    return { name: D.user.first + " " + D.user.last, initials: D.user.initials, streak: D.user.streak };
  }

  /* ---------- ikonlar ---------- */
  var I = {
    sun: '<svg class="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg class="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>',
    check: '<svg class="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    lock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
    flame: '<svg viewBox="0 0 24 24" fill="none" stroke="#E07A3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-3.5 2-5 1 1.5 1.5 2 3 2-1-2.5-1-4.5 0-7z"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11l8-7 8 7v9H4z"/></svg>',
    books: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4v16H5zM10 4h4v16h-4zM15.5 5l3.8-1 3 15-3.8 1z"/></svg>',
    defter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11M9 8h6"/></svg>',
    note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h9l4 4v14H6z"/><path d="M9 12h7M9 16h5"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
    ara: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
    flag: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4h11l-2 4 2 4H5"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4z"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>',
    chev: '<svg class="wrong__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
    info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>',
    star: function (c, size, style) { return '<svg class="sparkle" aria-hidden="true" viewBox="0 0 24 24" style="width:' + size + 'px;height:' + size + 'px;' + (style || "") + '"><path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" fill="' + c + '"/></svg>'; }
  };
  var LOGO = '<svg viewBox="0 0 120 120" aria-hidden="true"><rect width="120" height="120" rx="28" fill="#1F2A44"/><rect x="28" y="26" width="18" height="68" rx="9" fill="#F6F1E7"/><path d="M50 64 L84 94" stroke="#F6F1E7" stroke-width="18" stroke-linecap="round"/><circle cx="56" cy="55" r="4.5" fill="#F6F1E7"/><circle cx="65" cy="47" r="4.5" fill="#F6F1E7"/><circle cx="74" cy="39" r="4.5" fill="#F6F1E7"/><g transform="rotate(12 86 30)"><rect x="74" y="18" width="24" height="24" rx="7" fill="#F5D85E"/></g></svg>';

  /* ---------- ders illüstrasyonları (hepsi döngüde hareket eder) ---------- */
  function art(kind, color) {
    var open = '<svg class="art" viewBox="0 0 130 100" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
    var lbl = function (x, y, t) { return '<text x="' + x + '" y="' + y + '" fill="#FFFFFF" stroke="none" font-family="JetBrains Mono, monospace" font-size="12">' + t + '</text>'; };
    switch (kind) {
      case "macro":
        return open + '<path d="M10 6 V90 H124"/><path d="M24 82 L112 18"/><g class="a-shift"><path d="M24 18 L112 82"/>' + lbl(112, 98, "D") + '</g><g class="a-eq"><circle class="a-tw" cx="68" cy="50" r="13" fill="#FFFFFF" fill-opacity=".35" stroke="none"/><circle cx="68" cy="50" r="6" fill="#FFFFFF"/></g>' + lbl(114, 16, "S") + '</svg>';
      case "stats":
        var bars = [[20, 80, 10], [34, 64, 26], [48, 44, 46], [62, 30, 60], [76, 44, 46], [90, 64, 26], [104, 80, 10]].map(function (b, i) {
          return '<rect class="a-grow" x="' + b[0] + '" y="' + b[1] + '" width="12" height="' + b[2] + '" style="animation-delay:' + (i * .15) + 's"/>';
        }).join("");
        return open + '<g fill="#FFFFFF" stroke="none" opacity=".4">' + bars + '</g><path d="M8 90 H124"/><path d="M12 88 C 44 86, 50 24, 68 24 C 86 24, 92 86, 124 88"/><path d="M68 24 V90" stroke-width="2" stroke-dasharray="3 5"/><circle class="a-bounce" cx="68" cy="24" r="5" fill="#FFFFFF"/>' + lbl(76, 14, "μ") + '</svg>';
      case "hug":
        return open + '<circle cx="66" cy="52" r="38"/><ellipse class="a-globe" cx="66" cy="52" rx="16" ry="38" stroke-width="2" opacity=".85"/><ellipse class="a-globe" cx="66" cy="52" rx="16" ry="38" stroke-width="2" opacity=".5" style="animation-delay:-3s"/><path d="M28 52 H104 M34 34 H98 M34 70 H98" stroke-width="2" opacity=".8"/><path class="a-ants" d="M44 66 Q 54 30 88 30" stroke-dasharray="5 6"/><circle cx="44" cy="66" r="5" fill="#FFFFFF"/><g class="a-bounce"><path d="M92 8 c-7 0 -12 5 -12 11 c0 8 12 19 12 19 s12 -11 12 -19 c0 -6 -5 -11 -12 -11z" fill="#FFFFFF" stroke="none"/><circle cx="92" cy="19" r="4" fill="' + color + '" stroke="none"/></g></svg>';
      case "bpf":
        return open + '<path d="M8 90 H124"/><rect class="a-grow" x="16" y="66" width="14" height="24" stroke-width="2.5"/><rect class="a-grow" x="38" y="52" width="14" height="38" stroke-width="2.5" style="animation-delay:.2s"/><rect class="a-grow" x="60" y="38" width="14" height="52" stroke-width="2.5" style="animation-delay:.4s"/><path class="a-loop" d="M14 54 L42 36 L58 44 L98 12"/><path d="M86 12 H98 V24"/><g fill="' + color + '" stroke-width="2.5"><ellipse cx="104" cy="84" rx="15" ry="5"/><ellipse cx="104" cy="75" rx="15" ry="5"/><ellipse class="a-drop" cx="104" cy="66" rx="15" ry="5"/></g></svg>';
      case "calc":
        return open + '<path d="M6 88 H124 M10 92 V6"/><path d="M14 84 C 50 82, 70 20, 120 12"/><g><circle r="6" fill="#FFFFFF" stroke="none"/><path d="M-26 8 L26 -8" stroke-width="2.5"/><animateMotion dur="4s" repeatCount="indefinite" rotate="auto" keyPoints="0;1;0" keyTimes="0;.5;1" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" path="M14 84 C 50 82, 70 20, 120 12"/></g></svg>';
      case "psych":
        /* beyin: iki yarım küre, sinyal gezen sinir yolu, yanıp sönen nöronlar */
        return open + '<path d="M64 14 C 48 6, 26 10, 22 28 C 10 32, 10 52, 22 58 C 22 74, 40 82, 52 76 C 56 82, 62 84, 64 82"/><path d="M64 14 C 80 6, 102 10, 106 28 C 118 32, 118 52, 106 58 C 106 74, 88 82, 76 76 C 72 82, 66 84, 64 82"/><path d="M64 14 V82" stroke-width="2" opacity=".7"/>' +
          '<path class="a-ants" d="M32 40 Q 46 30 58 44 T 92 40 T 98 60" stroke-width="2.5" stroke-dasharray="5 6"/>' +
          '<circle class="a-tw" cx="32" cy="40" r="5" fill="#FFFFFF" stroke="none"/><circle class="a-tw" cx="58" cy="44" r="4" fill="#FFFFFF" stroke="none" style="animation-delay:.5s"/><circle class="a-tw" cx="92" cy="40" r="5" fill="#FFFFFF" stroke="none" style="animation-delay:1s"/><circle class="a-tw" cx="98" cy="60" r="4" fill="#FFFFFF" stroke="none" style="animation-delay:1.5s"/>' +
          '<g class="a-bounce"><path d="M112 8 l3 6 l6 1 l-4.5 4 l1 6 l-5.5 -3 l-5.5 3 l1 -6 l-4.5 -4 l6 -1z" fill="#FFFFFF" stroke="none"/></g></svg>';
      case "phys":
        /* fizik: sallanan sarkaç, kuvvet oku ve yörünge */
        return open + '<path d="M20 10 H110" stroke-width="3"/><g style="transform-origin:65px 10px;animation:kSarkac 2.6s ease-in-out infinite"><path d="M65 10 V66" stroke-width="2.5"/><circle cx="65" cy="74" r="9" fill="#FFFFFF" stroke="none"/></g>' +
          '<path d="M30 92 Q 65 70 100 92" stroke-width="2" stroke-dasharray="4 6" class="a-ants"/><path class="a-sway" d="M100 40 h18 m-6 -6 l6 6 -6 6" stroke-width="3"/>' + lbl(100, 30, "F") + '</svg>';
      case "csa":
        /* kod penceresi: büyüyen satırlar ve yanıp sönen imleç */
        return open + '<rect x="10" y="10" width="110" height="80" rx="10"/><path d="M10 26 H120" stroke-width="2"/><circle cx="20" cy="18" r="2.5" fill="#FFFFFF" stroke="none"/><circle cx="29" cy="18" r="2.5" fill="#FFFFFF" stroke="none"/><circle cx="38" cy="18" r="2.5" fill="#FFFFFF" stroke="none"/>' +
          lbl(18, 44, "{") + '<g fill="#FFFFFF" stroke="none" opacity=".75"><rect class="a-grow" x="30" y="37" width="46" height="6" rx="3"/><rect class="a-grow" x="30" y="51" width="64" height="6" rx="3" style="animation-delay:.3s"/><rect class="a-grow" x="30" y="65" width="34" height="6" rx="3" style="animation-delay:.6s"/></g>' + lbl(18, 84, "}") +
          '<rect class="a-tw" x="70" y="63" width="4" height="10" fill="#FFFFFF" stroke="none"/><path class="a-sway" d="M98 72 l8 -8 -8 -8" stroke-width="3"/></svg>';
      default:
        return '<svg class="art" viewBox="0 0 64 64" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 14h26l8 8v28H16z"/><path d="M24 30h18M24 38h18M24 46h10"/></svg>';
    }
  }

  /* ---------- ünite çizimleri: her ünite kendi konusunu gösterir, dersin renginin kendi tonuyla ---------- */
  var UW = "#FFFFFF";
  function uSvg(ic) { return '<svg class="art" viewBox="0 0 130 100" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ic + '</svg>'; }
  function uRot(cx, cy, d, ters) { return '<animateTransform attributeName="transform" type="rotate" from="0 ' + cx + ' ' + cy + '" to="' + (ters ? -360 : 360) + ' ' + cx + ' ' + cy + '" dur="' + d + 's" repeatCount="indefinite"/>'; }
  function uSal(cx, cy, a, d) { return '<animateTransform attributeName="transform" type="rotate" values="' + (-a) + ' ' + cx + ' ' + cy + ';' + a + ' ' + cx + ' ' + cy + ';' + (-a) + ' ' + cx + ' ' + cy + '" dur="' + d + 's" repeatCount="indefinite"/>'; }
  function uYol(p, d, b) { return '<animateMotion dur="' + d + 's" repeatCount="indefinite"' + (b != null ? ' begin="' + b + 's"' : "") + ' path="' + p + '"/>'; }
  function uGit(p, d) { return '<animateMotion dur="' + d + 's" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;.5;1" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" path="' + p + '"/>'; }
  function uAn(a, v, d, b) { return '<animate attributeName="' + a + '" values="' + v + '" dur="' + d + 's"' + (b ? ' begin="' + b + 's"' : "") + ' repeatCount="indefinite"/>'; }
  function uNok(r, f) { return '<circle r="' + r + '" fill="' + (f || UW) + '" stroke="none"/>'; }
  function uYaz(x, y, t, s) { return '<text x="' + x + '" y="' + y + '" fill="#FFFFFF" stroke="none" font-family="JetBrains Mono, monospace" font-size="' + (s || 12) + '">' + t + '</text>'; }
  var uEks = '<path d="M10 6 V90 H124"/>';
  function uDisli(cx, cy, r, d, ters) {
    var dis = ""; for (var i = 0; i < 8; i++) { var a = i * Math.PI / 4, x1 = cx + Math.cos(a) * r, y1 = cy + Math.sin(a) * r, x2 = cx + Math.cos(a) * (r + 6), y2 = cy + Math.sin(a) * (r + 6); dis += "M" + x1.toFixed(1) + " " + y1.toFixed(1) + " L" + x2.toFixed(1) + " " + y2.toFixed(1) + " "; }
    return '<g><circle cx="' + cx + '" cy="' + cy + '" r="' + r + '"/><path d="' + dis + '"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r / 3).toFixed(1) + '" fill="#FFFFFF" stroke="none"/>' + uRot(cx, cy, d, ters) + '</g>';
  }
  function uKisi(x, y, d) { return '<g class="a-bounce" style="animation-delay:' + d + 's"><circle cx="' + x + '" cy="' + y + '" r="8"/><path d="M' + (x - 13) + ' ' + (y + 34) + ' C ' + (x - 13) + ' ' + (y + 14) + ', ' + (x + 13) + ' ' + (y + 14) + ', ' + (x + 13) + ' ' + (y + 34) + '"/></g>'; }
  var MOTIF = {
    ppc: function () { var p = "M10 18 C 70 20, 108 52, 116 90"; return uEks + '<path d="' + p + '"/><circle class="a-tw" cx="52" cy="66" r="5" fill="#FFFFFF" stroke="none"/><circle cx="104" cy="26" r="6" stroke-dasharray="3 3"/><g>' + uNok(7) + uGit(p, 5) + '</g>'; },
    cycle: function () { var p = "M12 66 C 26 40, 40 40, 50 58 S 74 70, 86 44 S 108 22, 122 34"; return uEks + '<path d="M14 70 L120 34" stroke-width="2" stroke-dasharray="4 5" opacity=".7"/><path d="' + p + '"/><g>' + uNok(6) + uYol(p, 5) + '</g>'; },
    adas: function () { return uEks + '<path d="M84 8 V90" stroke-width="2" stroke-dasharray="4 4"/><path d="M24 84 C 60 76, 90 50, 112 14"/><g class="a-shift"><path d="M22 18 C 50 50, 80 70, 116 82"/></g><g class="a-eq"><circle cx="70" cy="62" r="6" fill="#FFFFFF" stroke="none"/></g>' + uYaz(88, 16, "LRAS", 10); },
    bank: function () { return '<path d="M22 40 L65 16 L108 40 Z"/><path d="M26 44 H104 M34 48 V80 M52 48 V80 M78 48 V80 M96 48 V80 M18 86 H112"/><circle class="a-drop" cx="65" cy="30" r="6" fill="#FFFFFF" stroke="none"/>'; },
    phillips: function () { var p = "M18 14 C 30 60, 50 78, 120 84"; return uEks + '<path d="M90 8 V90" stroke-width="2" stroke-dasharray="4 4"/><path d="' + p + '"/><g>' + uNok(6) + uGit(p, 5) + '</g>' + uYaz(94, 16, "LRPC", 10); },
    trade: function (c) { var a = "M44 44 Q 65 14 86 32", b = "M86 56 Q 65 86 44 68"; return '<circle cx="26" cy="56" r="18"/><circle cx="104" cy="44" r="18"/><path class="a-ants" d="' + a + '" stroke-dasharray="5 6"/><path class="a-ants" d="' + b + '" stroke-dasharray="5 6"/><rect x="-5" y="-5" width="10" height="10" rx="2" fill="#FFFFFF" stroke="none">' + uYol(a, 3) + '</rect><circle r="5" fill="#FFFFFF" stroke="none">' + uYol(b, 3, 1.5) + '</circle>'; },
    scale: function () { return '<path d="M65 22 V84 M42 88 H88"/><g><path d="M22 30 H108"/><path d="M22 30 L12 52 H32 Z M108 30 L98 52 H118 Z"/><circle cx="22" cy="46" r="5" fill="#FFFFFF" stroke="none"/><rect x="103" y="41" width="10" height="10" fill="#FFFFFF" stroke="none"/>' + uSal(65, 30, 8, 4) + '</g>'; },
    costu: function () { var p = "M22 30 C 50 78, 80 78, 118 34"; return uEks + '<path d="M20 70 C 40 96, 60 90, 110 12"/><path d="' + p + '" opacity=".85"/><path d="M12 52 H124" stroke-width="2" stroke-dasharray="4 4"/>' + uYaz(114, 48, "P", 11) + '<g>' + uNok(6) + uGit(p, 5) + '</g>'; },
    monopoly: function () { return '<path d="M16 90 H114"/><rect x="22" y="66" width="16" height="24"/><rect x="92" y="70" width="16" height="20"/><rect x="52" y="34" width="26" height="56"/><path d="M58 46 H72 M58 58 H72 M58 70 H72" stroke-width="2"/><g class="a-bounce"><path d="M50 26 L56 10 L65 20 L74 10 L80 26 Z" fill="#FFFFFF" stroke="none"/></g>'; },
    labor: function () { return '<path d="M12 88 H118"/>' + uKisi(30, 38, 0) + uKisi(65, 30, .3) + uKisi(100, 38, .6) + '<path class="a-ants" d="M30 22 Q 65 4 100 22" stroke-width="2" stroke-dasharray="4 5"/>'; },
    smoke: function () { var s = ""; for (var i = 0; i < 3; i++) s += '<circle cx="99" cy="20" r="6" fill="#FFFFFF" stroke="none" opacity=".7">' + uAn("cy", "20;-12", 3, i) + uAn("r", "4;13", 3, i) + uAn("opacity", ".85;0", 3, i) + '</circle>'; return '<path d="M14 88 V56 L36 44 V56 L58 44 V56 L80 44 V88 Z"/><path d="M92 88 V26 H106 V88"/><path d="M8 88 H124"/>' + s; },
    hist: function () { var b = [[16, 74, 16], [32, 58, 32], [48, 38, 52], [64, 26, 64], [80, 44, 46], [96, 62, 28], [112, 78, 12]].map(function (x, i) { return '<rect class="a-grow" x="' + x[0] + '" y="' + x[1] + '" width="14" height="' + x[2] + '" rx="2" style="animation-delay:' + (i * .15) + 's"/>'; }).join(""); return '<g fill="#FFFFFF" fill-opacity=".45">' + b + '</g><path d="M8 90 H126"/>'; },
    scatter: function () { var pt = [[20, 78], [30, 70], [40, 74], [50, 58], [60, 62], [70, 48], [80, 50], [92, 36], [104, 32], [114, 22]]; return uEks + pt.map(function (p, i) { return '<circle class="a-tw" cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="#FFFFFF" stroke="none" style="animation-delay:' + (i * .2) + 's"/>'; }).join("") + '<path class="a-loop" d="M14 82 L120 18"/>'; },
    survey: function (c) { var s = ""; for (var i = 0; i < 3; i++) { var y = 36 + i * 18; s += '<rect x="40" y="' + (y - 6) + '" width="12" height="12" rx="3"/><path d="M60 ' + y + ' H90" stroke-width="2"/><path class="a-tw" style="animation-delay:' + (i * .5) + 's" d="M42 ' + y + ' l4 4 l8 -10"/>'; } return '<rect x="30" y="14" width="70" height="80" rx="8"/><rect x="50" y="8" width="30" height="12" rx="4" fill="' + c + '"/>' + s; },
    dice: function () { function z(x, y, d) { return '<g><rect x="' + (x - 17) + '" y="' + (y - 17) + '" width="34" height="34" rx="8"/><circle cx="' + (x - 8) + '" cy="' + (y - 8) + '" r="3.5" fill="#FFFFFF" stroke="none"/><circle cx="' + x + '" cy="' + y + '" r="3.5" fill="#FFFFFF" stroke="none"/><circle cx="' + (x + 8) + '" cy="' + (y + 8) + '" r="3.5" fill="#FFFFFF" stroke="none"/>' + uSal(x, y, 14, d) + '</g>'; } return z(42, 56, 2.2) + z(88, 42, 2.8) + uYaz(18, 22, "P(A)", 11); },
    sampling: function () { var d = ""; [[22, 34], [34, 26], [30, 46], [44, 38], [18, 58], [40, 60], [52, 50], [28, 70]].forEach(function (p, i) { d += '<circle class="a-tw" cx="' + p[0] + '" cy="' + p[1] + '" r="3.5" fill="#FFFFFF" stroke="none" style="animation-delay:' + (i * .25) + 's"/>'; }); return '<circle cx="36" cy="50" r="32" stroke-dasharray="4 5"/>' + d + '<path class="a-ants" d="M70 50 H82" stroke-dasharray="3 4"/><path d="M82 50 l-5 -4 M82 50 l-5 4"/><path d="M86 84 C 98 84, 102 42, 107 42 C 112 42, 116 84, 128 84"/><circle class="a-drop" cx="107" cy="36" r="4" fill="#FFFFFF" stroke="none"/>'; },
    pie: function () { return '<g><circle cx="58" cy="52" r="34"/><path d="M58 52 L58 18 A34 34 0 0 1 89 64 Z" fill="#FFFFFF" fill-opacity=".5" stroke="none"/>' + uRot(58, 52, 14) + '</g>' + uYaz(100, 30, "p̂", 18); },
    ci: function () { return '<path d="M8 82 H124"/><path d="M10 82 C 40 82, 52 22, 65 22 C 78 22, 90 82, 120 82"/><g class="a-shift"><path d="M40 94 V86 M40 90 H84 M84 94 V86" stroke-width="2.5"/><circle cx="62" cy="90" r="3.5" fill="#FFFFFF" stroke="none"/></g><path d="M65 22 V82" stroke-width="2" stroke-dasharray="3 5"/>'; },
    chisq: function () { var s = ""; [[14, 44], [44, 30], [74, 52], [104, 38]].forEach(function (p, i) { s += '<rect class="a-grow" x="' + p[0] + '" y="' + p[1] + '" width="11" height="' + (88 - p[1]) + '" fill="#FFFFFF" fill-opacity=".5" stroke="none" style="animation-delay:' + (i * .2) + 's"/><rect x="' + (p[0] + 13) + '" y="' + (p[1] + (i % 2 ? 10 : -8)) + '" width="11" height="' + (88 - p[1] - (i % 2 ? 10 : -8)) + '" stroke-width="2"/>'; }); return s + '<path d="M8 88 H124"/>' + uYaz(96, 18, "χ²", 14); },
    slope: function () { return uEks + [[22, 76], [36, 66], [50, 64], [64, 52], [78, 46], [92, 40], [106, 28]].map(function (p, i) { return '<circle class="a-tw" cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="#FFFFFF" stroke="none" style="animation-delay:' + (i * .25) + 's"/>'; }).join("") + '<g><path d="M14 80 L120 22"/><path d="M14 70 L120 12 M14 90 L120 32" stroke-width="1.5" stroke-dasharray="3 4" opacity=".7"/>' + uSal(67, 51, 4, 4) + '</g>'; },
    pyramid: function () { var s = ""; for (var i = 0; i < 6; i++) { var y = 16 + i * 12, w = 12 + i * 8; s += '<rect x="' + (65 - w) + '" y="' + y + '" width="' + w + '" height="9" rx="2" fill="#FFFFFF" fill-opacity=".5" stroke="none">' + uAn("x", (65 - w * .7) + ";" + (65 - w) + ";" + (65 - w * .7), 3, i * .2) + uAn("width", (w * .7) + ";" + w + ";" + (w * .7), 3, i * .2) + '</rect><rect x="65" y="' + y + '" width="' + w + '" height="9" rx="2" fill="#FFFFFF" fill-opacity=".9" stroke="none">' + uAn("width", (w * .8) + ";" + w + ";" + (w * .8), 3.4, i * .2) + '</rect>'; } return s + '<path d="M65 12 V92" stroke-width="2"/>'; },
    speech: function (c) { var d = ""; for (var i = 0; i < 3; i++) d += '<circle class="a-tw" cx="' + (30 + i * 12) + '" cy="36" r="3.5" fill="#FFFFFF" stroke="none" style="animation-delay:' + (i * .3) + 's"/><circle class="a-tw" cx="' + (78 + i * 12) + '" cy="60" r="3.5" fill="#FFFFFF" stroke="none" style="animation-delay:' + (1 + i * .3) + 's"/>'; return '<path d="M14 18 H70 V52 H34 L24 62 V52 H14 Z"/><path d="M60 42 H116 V76 H106 V86 L96 76 H60 Z" fill="' + c + '"/>' + d; },
    borders: function () { return '<path d="M12 30 L40 18 L66 26 L64 60 L36 80 L14 66 Z"/><path d="M66 26 L96 16 L120 34 L112 70 L84 82 L64 60"/><path class="a-ants" d="M66 26 L64 60" stroke-dasharray="4 4" stroke-width="2"/><g><path d="M88 34 V62"/><path d="M88 34 H106 L100 41 L106 48 H88" fill="#FFFFFF" stroke="none"/>' + uSal(88, 62, 6, 2.4) + '</g>'; },
    field: function () { return '<g><circle cx="104" cy="22" r="10"/><path d="M104 4 V8 M104 36 V40 M86 22 H90 M118 22 H122 M91 9 L94 12 M114 32 L117 35 M117 9 L114 12 M94 32 L91 35"/>' + uRot(104, 22, 12) + '</g><path d="M6 92 Q 65 60 124 92 M24 92 Q 65 72 106 92" stroke-width="2.5"/>' + [26, 50, 74].map(function (x, i) { return '<path class="a-grow" style="animation-delay:' + (i * .3) + 's" d="M' + x + ' 78 V60 M' + x + ' 66 C ' + (x - 7) + ' 62, ' + (x - 9) + ' 56, ' + (x - 6) + ' 52 M' + x + ' 66 C ' + (x + 7) + ' 62, ' + (x + 9) + ' 56, ' + (x + 6) + ' 52"/>'; }).join(""); },
    skyline: function () { var b = [[10, 50, 18], [30, 28, 18], [50, 44, 20], [72, 16, 18], [92, 38, 24]], s = '<path d="M4 90 H126"/>', w = 0; b.forEach(function (x) { s += '<rect x="' + x[0] + '" y="' + x[1] + '" width="' + x[2] + '" height="' + (90 - x[1]) + '" rx="2"/>'; for (var y = x[1] + 8; y < 82; y += 12) { s += '<rect class="a-tw" x="' + (x[0] + 5) + '" y="' + y + '" width="' + (x[2] - 10) + '" height="4" fill="#FFFFFF" stroke="none" style="animation-delay:' + ((w++ % 7) * .4) + 's"/>'; } }); return s + '<circle cx="116" cy="16" r="7" fill="#FFFFFF" stroke="none" opacity=".8"/>'; },
    factory: function () { return '<path d="M10 88 V52 L34 40 V52 L58 40 V52 L82 40 V88 Z"/><path d="M6 88 H124"/><path d="M22 64 H30 M46 64 H54 M70 64 H76" stroke-width="2"/>' + uDisli(104, 48, 12, 6); },
    bulb: function () { return '<path d="M52 62 C 40 52, 40 30, 58 22 C 74 16, 90 28, 86 46 C 84 54, 78 58, 76 62 Z"/><path d="M56 70 H74 M58 77 H72"/><path d="M60 50 L64 40 L68 50" stroke-width="2"/><path class="a-tw" d="M64 4 V12"/><path class="a-tw" style="animation-delay:.4s" d="M32 20 L38 26"/><path class="a-tw" style="animation-delay:.8s" d="M98 20 L92 26"/><path class="a-tw" style="animation-delay:1.2s" d="M26 48 H34"/><path class="a-tw" style="animation-delay:1.6s" d="M98 48 H106"/>'; },
    megaphone: function () { return '<path d="M20 42 V62 H32 L72 82 V22 L32 42 Z"/><path d="M32 62 L38 82 H48 L44 66"/>' + ["M84 40 Q 92 52 84 64", "M94 32 Q 106 52 94 72", "M104 24 Q 120 52 104 80"].map(function (p, i) { return '<path class="a-tw" style="animation-delay:' + (i * .35) + 's" d="' + p + '"/>'; }).join(""); },
    piggy: function () { return '<ellipse cx="62" cy="60" rx="36" ry="24"/><path d="M40 42 L46 31 L54 39"/><path d="M42 82 V90 M58 84 V90 M74 84 V90 M86 80 V88"/><circle cx="84" cy="54" r="2.5" fill="#FFFFFF" stroke="none"/><path d="M98 58 h8 v8 h-8"/><path d="M56 38 H70"/><circle class="a-drop" cx="63" cy="30" r="7" fill="#FFFFFF" stroke="none"/>'; },
    orgchart: function () { var p = "M65 22 L65 34 L30 34 L30 46"; return '<rect x="50" y="6" width="30" height="16" rx="4"/><path d="M65 22 V34 M30 34 H100 M30 34 V46 M100 34 V46"/><rect x="16" y="46" width="28" height="16" rx="4"/><rect x="86" y="46" width="28" height="16" rx="4"/><path d="M30 62 V72 M14 72 H46 M14 72 V80 M46 72 V80 M100 62 V80"/><rect x="6" y="80" width="16" height="12" rx="3"/><rect x="38" y="80" width="16" height="12" rx="3"/><rect x="92" y="80" width="16" height="12" rx="3"/><g>' + uNok(4.5) + uYol(p, 2.6) + '</g>'; },
    target: function () { return '<circle cx="58" cy="54" r="34"/><circle cx="58" cy="54" r="22"/><circle cx="58" cy="54" r="9" fill="#FFFFFF" stroke="none"/><g><path d="M0 0 L36 -30"/><path d="M36 -30 l7 -1 M36 -30 l1 7"/><animateMotion dur="3s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.35;1" calcMode="linear" path="M130 -20 L58 54"/></g>'; },
    limit: function () { var p = "M14 78 C 40 72, 54 60, 63 52"; return uEks + '<path d="M68 6 V90" stroke-width="2" stroke-dasharray="4 4"/><path d="' + p + '"/><path d="M73 44 C 86 34, 100 30, 120 28"/><circle cx="68" cy="48" r="4.5"/><g>' + uNok(5) + uGit(p, 4) + '</g>' + uYaz(74, 92, "a", 12); },
    gears: function () { return uDisli(44, 52, 16, 6) + uDisli(86, 40, 11, 4.1, true) + uYaz(22, 94, "f(g(x))", 12); },
    car: function (c) { return '<path class="a-ants" d="M6 80 H126" stroke-dasharray="10 8"/><g><rect x="-22" y="-16" width="44" height="16" rx="6" fill="#FFFFFF" stroke="none"/><path d="M-12 -16 L-6 -26 H8 L14 -16"/><circle cx="-12" cy="2" r="5" fill="' + c + '" stroke="#FFFFFF"/><circle cx="12" cy="2" r="5" fill="' + c + '" stroke="#FFFFFF"/>' + uGit("M32 72 L98 72", 4) + '</g>' + uYaz(10, 24, "dx/dt", 12); },
    extrema: function () { var p = "M10 70 C 30 20, 50 20, 64 50 S 96 86, 120 30"; return uEks + '<path d="' + p + '"/><circle class="a-tw" cx="37" cy="33" r="6"/><circle class="a-tw" style="animation-delay:1s" cx="92" cy="72" r="6"/><g>' + uNok(5) + uGit(p, 5) + '</g>'; },
    area: function () { var r = [[18, 52], [34, 43], [50, 38], [66, 37], [82, 39], [98, 44]].map(function (x, i) { return '<rect class="a-grow" x="' + x[0] + '" y="' + x[1] + '" width="14" height="' + (90 - x[1]) + '" fill="#FFFFFF" fill-opacity=".4" stroke="none" style="animation-delay:' + (i * .15) + 's"/>'; }).join(""); return r + uEks + '<path d="M10 64 C 40 30, 80 30, 122 52"/>' + uYaz(100, 20, "∫", 22); },
    slopefield: function () { var s = ""; for (var x = 22; x <= 112; x += 18) for (var y = 20; y <= 80; y += 20) { var m = (y - 50) / 40 + (x - 65) / 120, dx = 6 / Math.sqrt(1 + m * m), dy = m * dx; s += "M" + (x - dx).toFixed(1) + " " + (y + dy).toFixed(1) + " L" + (x + dx).toFixed(1) + " " + (y - dy).toFixed(1) + " "; } return '<path d="' + s + '" stroke-width="2" opacity=".75"/><path class="a-loop" d="M10 82 C 40 72, 70 44, 122 20"/>'; },
    disks: function () { return '<path d="M8 62 H126" stroke-width="2"/><path d="M14 62 C 40 30, 90 24, 118 40"/>' + [[34, 22], [58, 31], [82, 33], [106, 25]].map(function (d, i) { return '<ellipse cx="' + d[0] + '" cy="62" rx="4" ry="' + d[1] + '" stroke-width="2">' + uAn("rx", "2;7;2", 2.4, i * .3) + '</ellipse>'; }).join(""); },
    rose: function () { var s = ""; for (var i = 0; i <= 120; i++) { var t = i / 120 * Math.PI * 2, r = 34 * Math.cos(2 * t); s += (i ? " L" : "M") + (65 + r * Math.cos(t)).toFixed(1) + " " + (50 + r * Math.sin(t)).toFixed(1); } return '<path d="M65 8 V92 M18 50 H112" stroke-width="1.5" opacity=".6"/><g><path d="' + s + '"/>' + uRot(65, 50, 20) + '</g><g>' + uNok(5) + uYol(s, 8) + '</g>'; },
    series: function () { return [64, 36, 20, 12, 7, 4].map(function (h, i) { return '<rect class="a-grow" x="' + (12 + i * 17) + '" y="' + (88 - h) + '" width="13" height="' + h + '" rx="2" fill="#FFFFFF" fill-opacity=".55" stroke="none" style="animation-delay:' + (i * .15) + 's"/>'; }).join("") + '<path d="M6 88 H124"/>' + uYaz(100, 34, "Σ", 26); },
    neuron: function () { var ax = "M46 50 C 66 50, 76 40, 96 44 L116 44"; return '<circle cx="34" cy="50" r="12"/><path d="M24 42 L12 30 M22 52 L8 54 M28 62 L18 76 M34 38 L32 22"/><path d="' + ax + '"/><path d="M116 44 l6 -7 M116 44 l7 4 M116 44 l3 8"/><g>' + uNok(4.5) + uYol(ax, 1.8) + '</g>'; },
    brain: function () { return '<path d="M64 20 C 50 10, 28 16, 28 34 C 16 38, 16 60, 30 64 C 30 80, 50 86, 64 76 C 78 86, 98 80, 98 64 C 112 60, 112 38, 100 34 C 100 16, 78 10, 64 20 Z M64 20 V76"/><path d="M40 40 C 46 36, 50 44, 56 40 M72 54 C 78 50, 84 58, 90 54" stroke-width="2"/>' + uDisli(104, 20, 6, 4); },
    stairs: function () { return '<path d="M8 90 H32 V72 H56 V54 H80 V36 H104 V18 H124"/><g><circle r="6" fill="#FFFFFF" stroke="none"/>' + uYol("M20 82 L44 64 L68 46 L92 28 L114 10", 5) + '</g>' + uYaz(10, 22, "↑", 18); },
    people: function () { return '<path d="M12 88 H118"/>' + uKisi(28, 42, 0) + uKisi(65, 28, .4) + uKisi(102, 42, .8) + '<path class="a-ants" d="M36 40 L57 30 M73 30 L94 40 M36 46 H94" stroke-width="2" stroke-dasharray="3 4"/>'; },
    heart: function () { return '<path d="M65 80 C 32 60, 22 42, 34 28 C 46 16, 60 22, 65 34 C 70 22, 84 16, 96 28 C 108 42, 98 60, 65 80 Z">' + uAn("stroke-width", "3;5;3", 1.2) + '</path><path class="a-loop" d="M8 54 H40 L46 42 L54 66 L60 54 H124" stroke-width="2.5"/>'; },
    objects: function () { var p = "M58 48 H80"; return '<rect x="10" y="28" width="46" height="40" rx="8"/>' + uYaz(17, 52, "obj", 13) + '<path class="a-ants" d="' + p + '" stroke-dasharray="4 4"/><rect x="82" y="30" width="40" height="36" rx="18"/>' + uYaz(90, 52, ".m()", 11) + '<g>' + uNok(4) + uYol(p, 1.4) + '</g>'; },
    loop: function () { return '<g><path d="M42 26 A22 22 0 1 1 22 60"/><path d="M22 60 l-1 -10 M22 60 l9 -3"/>' + uRot(42, 48, 4) + '</g><path d="M96 26 L120 50 L96 74 L72 50 Z"/>' + uYaz(88, 55, "if", 13); },
    classbox: function () { return '<rect x="8" y="18" width="46" height="64" rx="6" stroke-dasharray="5 4"/><path d="M8 36 H54 M16 48 H44 M16 60 H38" stroke-width="2"/>' + [18, 44, 70].map(function (y, i) { return '<path class="a-ants" d="M56 50 L84 ' + (y + 6) + '" stroke-width="2" stroke-dasharray="3 4"/><rect class="a-tw" style="animation-delay:' + (i * .4) + 's" x="86" y="' + y + '" width="30" height="14" rx="4" fill="#FFFFFF" stroke="none"/>'; }).join(""); },
    array: function () { var s = ""; for (var i = 0; i < 5; i++) s += '<rect x="' + (10 + i * 22) + '" y="36" width="20" height="26" rx="3"/>' + uYaz(17 + i * 22, 80, String(i), 11); return s + '<rect x="10" y="36" width="20" height="26" rx="3" fill="#FFFFFF" fill-opacity=".55" stroke="none"><animateTransform attributeName="transform" type="translate" values="0 0;22 0;44 0;66 0;88 0" dur="4s" repeatCount="indefinite" calcMode="discrete"/></rect>' + uYaz(10, 24, "[ ]", 13); },
    projectile: function () { var p = "M14 88 Q 64 -6 118 88"; return '<path d="M6 88 H124"/><path d="' + p + '" stroke-width="2" stroke-dasharray="4 5" opacity=".7"/><g>' + uNok(7) + uYol(p, 3) + '</g>' + uYaz(10, 20, "v⃗", 14); },
    forces: function () { return '<path d="M6 84 H124"/><g><rect x="-18" y="-30" width="36" height="30" rx="4" fill="#FFFFFF" fill-opacity=".4"/><path d="M-46 -15 H-22 M-28 -21 L-22 -15 L-28 -9"/><path d="M22 -15 H34 M28 -19 L34 -15 L28 -11" stroke-width="2" opacity=".7"/>' + uGit("M46 84 L86 84", 3) + '</g>' + uYaz(10, 24, "F=ma", 12); },
    coaster: function () { var p = "M8 30 C 30 30, 40 84, 64 84 C 88 84, 96 46, 122 46"; return '<path d="' + p + '"/><path d="M20 34 V92 M64 84 V92 M110 48 V92" stroke-width="2" opacity=".6"/><g>' + uNok(7) + uGit(p, 3.6) + '</g>' + uYaz(84, 22, "KE↔PE", 10); },
    circuit: function () { var p = "M20 20 H110 V80 H20 Z", e = ""; for (var i = 0; i < 3; i++) e += '<circle r="4" fill="#FFFFFF" stroke="none">' + uYol(p, 4, -i * 1.33) + '</circle>'; return '<path d="' + p + '" stroke-width="2.5"/><path d="M12 44 H28 M15 54 H25" stroke-width="3"/><circle class="a-tw" cx="65" cy="20" r="9" fill="#FFFFFF" fill-opacity=".5"/>' + e; },
    wave: function () { return '<path class="a-ants" d="M6 50 C 18 26, 30 26, 42 50 S 66 74, 78 50 S 102 26, 114 50 S 126 68, 128 62" stroke-dasharray="7 5"/><path d="M6 50 H124" stroke-width="1.5" opacity=".5"/><circle class="a-bounce" cx="24" cy="32" r="5" fill="#FFFFFF" stroke="none"/>' + uYaz(96, 92, "λ", 14); },
    leaf: function () { var s = ""; for (var i = 0; i < 3; i++) s += '<circle r="3" fill="#FFFFFF" stroke="none">' + uYol("M30 26 L70 58", 2.4, -i * .8) + '</circle>'; return '<g><circle cx="24" cy="20" r="9"/><path d="M24 4 V7 M24 33 V36 M8 20 H11 M37 20 H40"/>' + uRot(24, 20, 12) + '</g><path d="M66 86 C 60 60, 80 36, 118 30 C 116 64, 96 86, 66 86 Z" fill="#FFFFFF" fill-opacity=".25"/><path d="M68 84 C 82 66, 96 52, 116 32" stroke-width="2"/>' + s; },
    foodweb: function () { return '<circle cx="22" cy="72" r="12"/><circle cx="65" cy="28" r="12"/><circle cx="108" cy="72" r="12"/><path class="a-ants" d="M30 62 L56 38 M74 38 L100 62 M34 74 H96" stroke-dasharray="4 5"/>' + '<circle class="a-tw" cx="22" cy="72" r="5" fill="#FFFFFF" stroke="none"/><circle class="a-tw" style="animation-delay:.6s" cx="65" cy="28" r="5" fill="#FFFFFF" stroke="none"/><circle class="a-tw" style="animation-delay:1.2s" cx="108" cy="72" r="5" fill="#FFFFFF" stroke="none"/>'; },
    imf: function () { var m = [[24, 30], [80, 24], [36, 72], [92, 70]].map(function (p, i) { return '<g class="a-bounce" style="animation-delay:' + (i * .3) + 's"><circle cx="' + p[0] + '" cy="' + p[1] + '" r="10"/><circle cx="' + (p[0] + 16) + '" cy="' + p[1] + '" r="6" fill="#FFFFFF" stroke="none"/></g>'; }).join(""); return m + '<path class="a-ants" d="M44 34 L70 28 M46 66 L82 66 M30 42 L36 60" stroke-width="2" stroke-dasharray="3 4"/>'; },
    flask: function () { var b = ""; [[54, 0], [66, .8], [76, 1.6]].forEach(function (x) { b += '<circle cx="' + x[0] + '" cy="74" r="4" fill="#FFFFFF" stroke="none">' + uAn("cy", "76;20", 2.4, x[1]) + uAn("opacity", "1;0", 2.4, x[1]) + '</circle>'; }); return '<path d="M52 10 V40 L24 86 H106 L78 40 V10 M46 10 H84"/><path d="M36 66 H94 L104 82 H26 Z" fill="#FFFFFF" fill-opacity=".35" stroke="none"/>' + b; },
    molegrid: function () { var s = ""; for (var r = 0; r < 4; r++) for (var c2 = 0; c2 < 6; c2++) s += '<circle class="a-tw" cx="' + (18 + c2 * 18) + '" cy="' + (16 + r * 16) + '" r="4.5" fill="#FFFFFF" stroke="none" style="animation-delay:' + (((r * 6 + c2) * .13) % 2.2).toFixed(2) + 's"/>'; return s + uYaz(10, 96, "6.02×10²³", 12); },
    gasbox: function () { var p = ["M30 30 L90 70 L60 24 L104 50 Z", "M100 30 L40 76 L24 50 L80 20 Z", "M50 60 L96 24 L104 76 L30 40 Z"], s = ""; p.forEach(function (x, i) { s += '<circle r="5" fill="#FFFFFF" stroke="none">' + uYol(x, 2.6 + i * .7) + '</circle>'; }); return '<rect x="14" y="12" width="102" height="76" rx="6"/>' + s + uYaz(96, 98, "PV=nRT", 9); },
    beaker: function () { var d = ""; [44, 62, 80].forEach(function (x, i) { d += '<circle class="a-drop" style="animation-delay:' + (i * .7) + 's" cx="' + x + '" cy="60" r="4" fill="#FFFFFF" stroke="none"/>'; }); return '<path d="M30 12 V82 Q 30 88 36 88 H94 Q 100 88 100 82 V12"/><path d="M30 44 H100" stroke-width="2"/><path d="M30 44 H100 V82 Q 100 88 94 88 H36 Q 30 88 30 82 Z" fill="#FFFFFF" fill-opacity=".25" stroke="none"/>' + d; },
    book: function () { return '<path d="M65 24 C 50 16, 26 16, 12 22 V82 C 26 76, 50 76, 65 84 C 80 76, 104 76, 118 82 V22 C 104 16, 80 16, 65 24 Z M65 24 V84"/>' + [36, 48, 60].map(function (y, i) { return '<path class="a-grow" style="animation-delay:' + (i * .3) + 's" d="M22 ' + y + ' H54 M76 ' + y + ' H108" stroke-width="2"/>'; }).join("") + uYaz(82, 18, "“”", 22); },
    mask: function () { return '<path d="M30 16 C 50 8, 80 8, 100 16 C 102 50, 90 80, 65 86 C 40 80, 28 50, 30 16 Z"/><path d="M44 40 C 48 34, 54 34, 58 40 M72 40 C 76 34, 82 34, 86 40"/><path d="M50 68 C 58 60, 72 60, 80 68"/><circle class="a-drop" cx="51" cy="52" r="3.5" fill="#FFFFFF" stroke="none"/>'; },
    duck: function () { return '<path class="a-ants" d="M4 74 C 20 66, 30 82, 46 74 S 72 66, 88 74 S 112 82, 126 74" stroke-dasharray="6 5"/><g class="a-bounce"><path d="M40 62 C 40 48, 64 46, 76 54 C 82 46, 82 32, 92 30 C 100 28, 106 34, 104 40 L114 42 L104 46 C 102 54, 98 62, 84 66 C 70 70, 44 70, 40 62 Z" fill="#FFFFFF" fill-opacity=".35"/><circle cx="96" cy="36" r="2.2" fill="#FFFFFF" stroke="none"/></g>'; },
    magnifier: function () { return [22, 38, 54, 70].map(function (y) { return '<path d="M12 ' + y + ' H118" stroke-width="2" opacity=".55"/>'; }).join("") + '<g><circle cx="0" cy="0" r="16" fill="#FFFFFF" fill-opacity=".25"/><path d="M12 12 L26 26" stroke-width="5"/>' + uGit("M30 40 L92 46", 4) + '</g>'; },
    clock: function () { return '<circle cx="44" cy="50" r="32"/><g><path d="M44 50 V26"/>' + uRot(44, 50, 4) + '</g><g><path d="M44 50 H60"/>' + uRot(44, 50, 48) + '</g><circle cx="44" cy="50" r="3.5" fill="#FFFFFF" stroke="none"/><rect x="88" y="34" width="30" height="30" rx="6"/><path class="a-tw" d="M94 49 l6 6 l12 -14"/>'; },
    mapping: function () { var a = "M38 32 C 56 26, 74 26, 92 34", b = "M38 66 C 56 60, 74 56, 92 54"; return '<ellipse cx="28" cy="50" rx="14" ry="34"/><ellipse cx="102" cy="50" rx="14" ry="34"/><path d="' + a + '" stroke-width="2"/><path d="' + b + '" stroke-width="2"/><circle r="4" fill="#FFFFFF" stroke="none">' + uYol(a, 2) + '</circle><circle r="4" fill="#FFFFFF" stroke="none">' + uYol(b, 2, 1) + '</circle>' + uYaz(22, 98, "x", 11) + uYaz(92, 98, "f(x)", 11); },
    parabola: function () { var p = "M22 12 Q 65 142 108 12"; return '<path d="M65 6 V94 M8 82 H124" stroke-width="2" opacity=".7"/><path d="' + p + '"/><circle class="a-tw" cx="65" cy="77" r="5" fill="#FFFFFF" stroke="none"/><g>' + uNok(6) + uGit(p, 4) + '</g>'; },
    wiggle: function () { var p = "M8 82 C 30 -8, 60 110, 80 40 S 110 10, 124 28"; return '<path d="M6 50 H126" stroke-width="2" opacity=".7"/><path d="' + p + '"/><circle class="a-tw" cx="24" cy="50" r="4" fill="#FFFFFF" stroke="none"/><circle class="a-tw" style="animation-delay:.6s" cx="56" cy="50" r="4" fill="#FFFFFF" stroke="none"/><circle class="a-tw" style="animation-delay:1.2s" cx="84" cy="50" r="4" fill="#FFFFFF" stroke="none"/><g>' + uNok(5) + uGit(p, 5) + '</g>'; },
    unitcircle: function () { return '<path d="M18 50 H104 M60 8 V92" stroke-width="2" opacity=".7"/><circle cx="60" cy="50" r="34"/><g><path d="M60 50 L94 50"/><circle cx="94" cy="50" r="5" fill="#FFFFFF" stroke="none"/>' + uRot(60, 50, 6, true) + '</g>' + uYaz(104, 30, "θ", 16); },
    expo: function () { var p = "M12 86 C 60 84, 90 70, 116 8"; return uEks + '<path d="M20 92 C 22 60, 50 30, 124 24" opacity=".55"/><path d="' + p + '"/><g>' + uNok(6) + uGit(p, 4) + '</g>' + uYaz(26, 20, "eˣ", 14); },
    derivgraph: function () { var f = "M10 70 C 36 20, 60 20, 72 46 S 104 84, 122 40"; return '<path d="M6 54 H126" stroke-width="2" opacity=".6"/><path d="' + f + '"/><path d="M10 30 C 30 52, 48 70, 62 62 S 92 30, 122 74" stroke-width="2.5" stroke-dasharray="5 5" opacity=".8"/>' + uYaz(100, 18, "f\u2032", 14) + '<g>' + uNok(5) + uGit(f, 5) + '</g>'; },
    shortage: function () { return uEks + '<path d="M22 84 L112 16"/><path d="M22 16 L112 84"/><path d="M10 66 H124" stroke-width="2" stroke-dasharray="4 4"/><g class="a-bounce"><path d="M46 72 H88" stroke-width="2.5"/><path d="M46 68 V76 M88 68 V76" stroke-width="2.5"/></g>' + uYaz(96, 62, "tavan", 10) + '<circle class="a-tw" cx="67" cy="50" r="5" fill="#FFFFFF" stroke="none"/>'; },
    compass: function () { return '<path d="M10 24 L44 14 L84 24 L120 14 V78 L84 88 L44 78 L10 88 Z" stroke-width="2.5"/><path d="M44 14 V78 M84 24 V88" stroke-width="1.5" opacity=".6"/><g><circle cx="64" cy="50" r="18" fill="#FFFFFF" fill-opacity=".2"/><path d="M64 34 L69 50 L64 66 L59 50 Z" fill="#FFFFFF" stroke="none"/>' + uSal(64, 50, 25, 3) + '</g>' + uYaz(60, 30, "N", 10); },
    collision: function () { return '<path d="M6 76 H124"/><g><circle r="13" fill="#FFFFFF" fill-opacity=".85" stroke="none"/>' + uGit("M22 62 L52 62", 2) + '</g><g><circle r="10" stroke-width="3"/>' + uGit("M108 65 L76 65", 2) + '</g>' + uYaz(44, 24, "p = mv", 13); },
    torque: function () { return '<g><path d="M36 50 L112 50" stroke-width="8"/><path d="M104 40 V60" stroke-width="3"/>' + uSal(36, 50, 18, 3) + '</g><path d="M26 44 L36 38 L46 44 L46 56 L36 62 L26 56 Z" fill="#FFFFFF" stroke="none"/><path class="a-ants" d="M92 22 A 52 52 0 0 1 108 74" stroke-width="2" stroke-dasharray="4 4"/>' + uYaz(14, 92, "τ = rF", 12); },
    spinner: function () { return '<g><circle cx="58" cy="50" r="36"/><path d="M58 14 V86 M22 50 H94 M33 25 L83 75 M83 25 L33 75" stroke-width="2"/><circle cx="58" cy="50" r="6" fill="#FFFFFF" stroke="none"/><circle cx="58" cy="14" r="5" fill="#FFFFFF" stroke="none"/>' + uRot(58, 50, 3) + '</g>' + uYaz(102, 30, "ω", 18); },
    spring: function () { return '<path d="M20 8 H110" stroke-width="4"/><path d="M65 8 V16 L52 22 L78 30 L52 38 L78 46 L52 54 L65 60 V66" stroke-width="2.5"><animate attributeName="d" values="M65 8 V16 L52 22 L78 30 L52 38 L78 46 L52 54 L65 60 V66;M65 8 V12 L52 15 L78 19 L52 23 L78 27 L52 31 L65 34 V40;M65 8 V16 L52 22 L78 30 L52 38 L78 46 L52 54 L65 60 V66" dur="2s" repeatCount="indefinite"/></path><rect x="50" y="66" width="30" height="22" rx="4" fill="#FFFFFF" stroke="none"><animate attributeName="y" values="66;40;66" dur="2s" repeatCount="indefinite"/></rect><path d="M96 30 V90" stroke-width="1.5" stroke-dasharray="3 4" opacity=".6"/>' + uYaz(100, 92, "x(t)", 11); },
    atom: function () { return '<circle cx="65" cy="50" r="7" fill="#FFFFFF" stroke="none"/><ellipse cx="65" cy="50" rx="44" ry="15" stroke-width="2"/><ellipse cx="65" cy="50" rx="44" ry="15" stroke-width="2" transform="rotate(60 65 50)"/><ellipse cx="65" cy="50" rx="44" ry="15" stroke-width="2" transform="rotate(-60 65 50)"/><circle r="4.5" fill="#FFFFFF" stroke="none">' + uYol("M21 50 A44 15 0 1 1 109 50 A44 15 0 1 1 21 50", 2.4) + '</circle>'; },
    dna: function () { var a = "", i; for (i = 0; i < 7; i++) { var x = 14 + i * 17; a += '<path d="M' + x + ' 30 V70" stroke-width="2" opacity=".7"><animate attributeName="d" values="M' + x + ' 30 V70;M' + x + ' 46 V54;M' + x + ' 30 V70" dur="3s" begin="' + (i * .25) + 's" repeatCount="indefinite"/></path>'; } return a + '<path class="a-ants" d="M6 30 C 26 30, 40 70, 60 70 S 94 30, 124 30" stroke-dasharray="7 4"/><path class="a-ants" d="M6 70 C 26 70, 40 30, 60 30 S 94 70, 124 70" stroke-dasharray="7 4"/>'; },
    quill: function () { return '<path d="M10 84 H70" stroke-width="2" opacity=".6"/><path class="a-loop" d="M14 76 C 24 66, 32 82, 42 72 S 58 66, 66 74" stroke-width="2.5"/><g><path d="M70 74 C 76 50, 96 22, 120 10 C 116 34, 96 60, 70 74 Z" fill="#FFFFFF" fill-opacity=".35"/><path d="M70 74 L104 30" stroke-width="2"/>' + uSal(70, 74, 5, 2.4) + '</g>'; },
    flow: function () { var p = "M65 14 L65 41 L65 72 L110 72 L110 41 L90 41"; return '<rect x="42" y="6" width="46" height="16" rx="8"/><path d="M65 22 V32"/><rect x="42" y="32" width="46" height="18" rx="3"/><path d="M65 50 V58"/><path d="M65 58 L84 72 L65 86 L46 72 Z"/><path d="M84 72 H110 V41 H88" stroke-width="2" stroke-dasharray="3 4"/><g>' + uNok(4.5) + uYol(p, 4) + '</g>'; }
  };
  var UNITE_MOTIF = {
    macro: ["ppc", "cycle", "adas", "bank", "phillips", "trade"],
    micro: ["scale", "shortage", "costu", "monopoly", "labor", "smoke"],
    stats: ["hist", "dice", "pie", "ci", "slope"],
    hug: ["compass", "pyramid", "speech", "borders", "field", "skyline", "factory"],
    bpf: ["bulb", "megaphone", "piggy", "orgchart", "target"],
    calc: ["limit", "derivgraph", "gears", "car", "extrema", "area", "slopefield", "disks", "rose", "series"],
    psych: ["neuron", "brain", "stairs", "people", "heart"],
    csa: ["objects", "loop", "classbox", "array"],
    physc: ["projectile", "forces", "coaster", "collision", "torque", "spinner", "spring"],
    precalc: ["mapping", "parabola", "wiggle", "unitcircle", "expo", "flow"],
    chem: ["imf", "flask", "molegrid", "gasbox", "beaker"],
    phys: ["forces", "coaster", "circuit", "wave"],
    bio: ["leaf", "foodweb"],
    eng: ["book", "mask", "duck", "magnifier", "clock"]
  };
  /* ünite tonu: dersin rengi, üniteye göre biraz kaydırılmış (beyaz çizgi okunsun diye koyu tarafta) */
  function uniteTonu(hex, unit) {
    var h = String(hex || "#888888").replace("#", ""), r = parseInt(h.slice(0, 2), 16) / 255, g = parseInt(h.slice(2, 4), 16) / 255, b = parseInt(h.slice(4, 6), 16) / 255;
    var mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, s = 0, hu = 0, d = mx - mn;
    if (d) { s = l > .5 ? d / (2 - mx - mn) : d / (mx + mn); hu = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; hu *= 60; }
    var i = ((unit || 1) - 1) % 10, dh = [0, 14, -12, 24, -20, 32, -28, 8, -6, 18][i], dl = [0, -.05, .03, -.08, .04, -.03, -.07, .02, -.1, -.01][i];
    hu = (hu + dh + 360) % 360; l = Math.min(hu > 38 && hu < 100 ? .44 : .56, Math.max(.34, l + dl)); s = Math.min(.85, Math.max(.45, s));
    function f(n) { var k = (n + hu / 30) % 12, a = s * Math.min(l, 1 - l), v = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)); return ("0" + Math.round(v * 255).toString(16)).slice(-2); }
    return "#" + f(0) + f(8) + f(4);
  }
  function uniteRenk(ders, unit) { return uniteTonu(COLORS[(C && C.DEFTER_DERS[ders] && C.DEFTER_DERS[ders].renk) || (C && C.DERSLER && C.DERSLER[ders] && (C.DERSLER[ders].renk || C.DERSLER[ders].art)) || ders] || COLORS.macro, unit); }
  /* ders kartı çizimi: ortak belge simgesi yerine dersin kendi motifi */
  var DERS_MOTIF = { chem: "atom", bio: "dna", eng: "quill", precalc: "rose", phys: "spinner" };
  function dersCizimi(ders, color) {
    var m = DERS_MOTIF[ders]; if (m && MOTIF[m]) return uSvg(MOTIF[m](color));
    var D = C && C.DEFTER_DERS[ders]; return art((D && D.art) || ders, color);
  }
  function uniteArt(ders, unit, color, yedek) {
    var m = (UNITE_MOTIF[ders] || [])[(unit || 1) - 1];
    if (!m) return art(yedek || ders, color);
    if (m.charAt(0) === "=") return art(m.slice(1), color);
    return uSvg(MOTIF[m](color));
  }

  /* ---------- tema ---------- */
  var mq = window.matchMedia ? matchMedia("(prefers-color-scheme: dark)") : null;
  var theme = {
    pref: function () { try { return localStorage.getItem("kitora-tema") || "cihaz"; } catch (e) { return "cihaz"; } },
    apply: function (pref) {
      var dark = pref === "koyu" || (pref === "cihaz" && mq && mq.matches);
      document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
      /* açık çerçevedeki orijinal defter de aynı temaya geçer */
      $$(".df-cerceve").forEach(function (f) { try { var r = f.contentDocument.documentElement; if (dark) r.setAttribute("data-tema", "koyu"); else r.removeAttribute("data-tema"); } catch (x) {} });
      $$("[data-k-theme-pick]").forEach(function (b) { b.setAttribute("aria-checked", String(b.dataset.kThemePick === pref)); });
    },
    set: function (pref) { try { localStorage.setItem("kitora-tema", pref); } catch (e) {} theme.apply(pref); },
    toggle: function () { theme.set(document.documentElement.getAttribute("data-theme") === "dark" ? "acik" : "koyu"); }
  };
  if (mq && mq.addEventListener) mq.addEventListener("change", function () { if (theme.pref() === "cihaz") theme.apply("cihaz"); });
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-k-toggle-theme]");
    if (t) theme.toggle();
    var p = e.target.closest("[data-k-theme-pick]");
    if (p) theme.set(p.dataset.kThemePick);
  });
  var toggleBtn = '<button type="button" class="icon-btn theme-toggle" data-k-toggle-theme aria-label="Temayı değiştir">' + I.sun + I.moon + '</button>';

  /* ---------- üst ve alt menü ---------- */
  function header() {
    var el = $('[data-k="header"]');
    if (!el) return;
    var v = el.dataset.variant || "public";
    var active = el.dataset.active || "";
    var u = kullanici();
    var brand = '<a class="brand" href="' + ROOT + 'index.html">' + LOGO + '<span class="brand__name">Kitpath</span></a>';
    var streak = '<span class="streak" title="Çalışma serin">' + I.flame + u.streak + ' gün</span>';
    var avatar = '<a class="avatar" href="' + ROOT + 'profil/" aria-label="Profilim">' + esc(u.initials) + '</a>';
    var appNav = '<nav class="nav" aria-label="Ana menü">' +
      '<a href="' + ROOT + 'panel/"' + (active === "panel" ? ' aria-current="page"' : "") + '>Panelim</a>' +
      '<a href="' + ROOT + 'kitlerim/"' + (active === "kitlerim" ? ' aria-current="page"' : "") + '>Kitlerim</a>' +
      '<a href="' + ROOT + 'defterler/"' + (active === "defterler" ? ' aria-current="page"' : "") + '>Defterler</a>' +
      (notTakibi() ? '<a href="' + ROOT + 'notlarim/"' + (active === "notlarim" ? ' aria-current="page"' : "") + '>Notlarım</a>' : "") +
      ((sevYonetici() || sevTakvimOnbellek().acik || sevTakvimOnbellek().gecmis) ? '<a href="' + ROOT + 'seviye/"' + (active === "seviye" ? ' aria-current="page"' : "") + '>Seviye</a>' : "") +
      '<a href="' + ROOT + 'kitler/"' + (active === "kitler" ? ' aria-current="page"' : "") + '>Tüm kitler</a></nav>';
    var html = "";
    /* tek menü: giriş yapılmışsa her sayfada aynı uygulama menüsü, yapılmamışsa aynı herkese açık menü */
    if (v === "public" || v === "app" || v === "unit") {
      var acikNav = '<nav class="nav" aria-label="Ana menü">' +
        '<a href="' + ROOT + 'kitler/"' + (active === "kitler" ? ' aria-current="page"' : "") + '>Tüm kitler</a>' +
        '<a href="' + ROOT + 'defterler/"' + (active === "defterler" ? ' aria-current="page"' : "") + '>Defterler</a></nav>';
      /* yönetici hesabı: öğrenci sayfalarından yönetime tek tıkla geç (yönetimde "Öğrenci görünümü" geri getirir) */
      var pr = HESAPLI && H.profil ? H.profil() : null;
      var yonBtn = pr && pr.yonetici ? '<a class="btn btn--ghost btn--sm yon-gec" href="' + ROOT + 'yonetim/" title="Yönetim ekranına geç"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg><span>Yönetim</span></a>' : "";
      html = HESAPLI
        ? '<div class="k-header__left">' + brand + appNav + '</div><div class="k-header__right">' + yonBtn + streak + toggleBtn + avatar + '</div>'
        : '<div class="k-header__left">' + brand + acikNav + '</div><div class="k-header__right">' + toggleBtn + '<a class="btn btn--link hide-sm" href="' + ROOT + 'giris/?mod=giris">Giriş yap</a><a class="btn btn--primary btn--sm" href="' + ROOT + 'giris/">Hesap aç</a></div>';
    } else if (v === "admin") {
      html = '<div class="k-header__left">' + brand + '<span class="badge-admin">YÖNETİM</span></div><div class="k-header__right">' + toggleBtn + '<a class="btn btn--ghost btn--sm yon-gec" href="' + ROOT + 'panel/" title="Öğrenci ekranına geç"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-5 9 5-9 5z"/><path d="M7 11v5c3 2 7 2 10 0v-5"/></svg><span>Öğrenci görünümü</span></a></div>';
    } else if (v === "plain") {
      html = '<div class="k-header__left"><a class="btn btn--link" href="' + esc(el.dataset.back || ROOT + 'index.html') + '">← ' + esc(el.dataset.backLabel || "Ana sayfa") + '</a></div><div class="k-header__right">' + toggleBtn + '</div>';
    }
    el.innerHTML = html;
  }

  function bottomNav() {
    var el = $('[data-k="bottom-nav"]');
    if (!el) return;
    var a = el.dataset.active;
    var item = function (key, href, icon, label) { return '<a href="' + ROOT + href + '"' + (a === key ? ' aria-current="page"' : "") + '>' + icon + label + '</a>'; };
    el.className = "bottom-nav";
    el.setAttribute("aria-label", "Alt menü");
    el.innerHTML = item("panel", "panel/", I.home, "Panelim") + item("kitlerim", "kitlerim/", I.books, "Kitlerim") + item("defterler", "defterler/", I.defter, "Defterler") + (notTakibi() ? item("notlarim", "notlarim/", I.note, "Notlar") : "") + item("profil", "profil/", I.user, "Profil");
  }

  /* ---------- kitler: katalog + bu hesabın (ya da misafirin) ilerlemesi ---------- */
  function dersler() {
    if (!C) return [];
    /* kiti henüz yayında olmayan ders (DERSLER'de var, KITLER'de yok) gösterilmez */
    return Object.keys(C.DERSLER).filter(function (id) { return C.KITLER.some(function (k) { return k.ders === id; }); }).map(function (id) {
      var d = C.DERSLER[id], kits = C.KITLER.filter(function (k) { return k.ders === id; }), n = 0, b = 0, son = null;
      kits.forEach(function (k) {
        var o = C.ozet(k);
        if (!o) return;
        n += o.n; b += o.bitenler;
        if (!son || (o.t || 0) > (son.o.t || 0)) son = { k: k, o: o };
      });
      var hedef = son && son.o.bitenler < son.o.n ? son.k : (kits.filter(function (k) { var o = C.ozet(k); return !o || o.bitenler < o.n; })[0] || kits[0]);
      return { id: id, title: d.title, code: d.code, art: d.art, renk: d.renk || d.art, rot: d.rot, video: d.video, not: d.not, kits: kits, pct: n ? Math.round(100 * b / n) : 0, son: son, href: "ders/?d=" + id, uniteHref: "unite/?kit=" + hedef.id };
    });
  }
  function kitCard(c, opts) {
    opts = opts || {};
    var col = COLORS[c.renk || c.art];
    var units = c.kits.map(function (k) { return "Unit " + k.unit; });
    var lock = HESAPLI ? "" : '<div class="locked"><span class="locked__blur" aria-hidden="true">' + (units.length > 1 ? units.slice(1).join(" · ") : "Sonraki üniteler") + '</span><span class="locked__label">' + I.lock + 'Ücretsiz hesapla açılır</span></div>';
    return '<a class="kit-card" href="' + ROOT + c.href + '" style="--c:' + col + ';--rot:' + (opts.straight ? "0deg" : c.rot) + '">' +
      '<div class="kit-card__band"><span class="bob-dot" aria-hidden="true"></span><span class="kit-card__code">' + esc(c.code) + '</span>' + art(c.art, col) + '</div>' +
      '<div class="kit-card__body"><div class="kit-card__chips">' +
      (c.video ? '<span class="chip">▶ Videolu</span>' : "") + (c.not ? '<span class="chip chip--warn">' + esc(c.not) + '</span>' : "") + (HESAPLI ? "" : '<span class="chip">1. video hesapsız</span>') + '</div>' +
      '<span class="kit-card__title">' + esc(c.title) + '</span><span class="kit-card__meta">' + (HESAPLI ? esc(units.join(" · ")) + " açık" : c.kits.length + " ünite hazır") + '</span>' + lock +
      '<div class="kit-card__progress"><div class="progress progress--thin" role="progressbar" aria-label="İlerleme" aria-valuenow="' + c.pct + '" aria-valuemin="0" aria-valuemax="100"><span style="--w:' + c.pct + '%"></span></div><span class="mono muted">%' + c.pct + '</span></div>' +
      '</div>' + (kilitliMi(c.id) ? kilitRozet() : "") + '</a>';
  }

  function marquee() {
    var el = $('[data-k="marquee"]');
    if (!el) return;
    var pills = D.terms.map(function (t) { return '<span class="term-pill" style="--c:' + COLORS[t[1]] + '">' + esc(t[0]) + '</span>'; }).join("");
    el.innerHTML = '<div class="marquee__track">' + pills + '<span aria-hidden="true" style="display:contents">' + pills + '</span></div>';
  }

  function badge(b) {
    return '<div class="badge" title="' + esc(b.how) + '"' + (b.got ? "" : ' data-locked="true"') + '><span class="badge__tile" style="' + (b.got ? "--c:" + b.c + ";--rot:" + b.rot : "") + '">' + esc(b.glyph) + '</span><span class="badge__name">' + esc(b.name) + (b.got ? "" : '<span class="sr-only"> (kilitli)</span>') + '</span></div>';
  }

  /* soru şekli: tablo bizim stilimizle, diğerleri (grafik, histogram…) canlı kitin figs.js'iyle */
  function tabloHTML(fig, cls, style) {
    return '<table class="' + (cls || "") + '"' + (style ? ' style="' + style + '"' : "") + '><thead><tr>' + (fig.head || []).map(function (h) { return "<th>" + md(h) + "</th>"; }).join("") + '</tr></thead><tbody>' +
      (fig.rows || []).map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + md(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table>";
  }
  function sekilKoy(kutu, fig) {
    if (!kutu || !fig) return;
    var n = null;
    try { n = window.APFig ? window.APFig.render(fig) : null; } catch (e) { n = null; }
    if (n) kutu.appendChild(n); else kutu.remove();
  }
  function gecerli(q) { return !!q && typeof q.q === "string" && Array.isArray(q.opts) && q.opts.length >= 2 && typeof q.a === "number" && q.a >= 0 && q.a < q.opts.length; }

  /* ---------- sayfalar ---------- */
  var pages = {};

  pages.kitler = function () { pages.home(); };
  pages.home = function () {
    function hashSekme() { var t = $('[data-tgo="' + (location.hash === "#cep" ? "cep" : "sinav") + '"]'); if (t && location.hash) t.click(); }
    setTimeout(hashSekme, 0);
    window.addEventListener("hashchange", hashSekme);
    function kartlar() {
      if (!HESAPLI) { fill('[data-k="courses"]', dersler().map(function (c) { return kitCard(c); }).join("")); return; }
      /* giriş yapılmışsa: her kartta "Rafıma ekle" (varsayılanlar ve eklenenler "Rafında") */
      var raf = {}; C.raf(H.profil()).forEach(function (r) { raf[r.kit.id] = r; });
      fill('[data-k="courses"]', dersler().map(function (c) {
        var r = raf[c.id], var_ = r && r.rafta;
        return '<div class="kit-slot kit-slot--home" style="rotate:' + c.rot + '">' + kitCard(c, { straight: true }) + (var_ ? '<span class="kit-slot__add chip chip--ok">Rafında ✓</span>' : '<button type="button" class="kit-slot__add btn btn--primary btn--sm" data-kit-ekle-ana="' + c.id + '">+ Rafıma ekle</button>') + '</div>';
      }).join(""));
    }
    kartlar();
    if (HESAPLI) document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-kit-ekle-ana]"); if (!b) return;
      C.rafaEkle(b.dataset.kitEkleAna); kartlar(); toast(C.DERSLER[b.dataset.kitEkleAna].title + " rafına eklendi");
    });
    marquee();
    var cep = $(".cep-card");
    if (cep && C) cep.href = C.KOK + "crucible/";
    if (HESAPLI) $$('a[href="giris/"]').forEach(function (a) { a.href = ROOT + "panel/"; a.textContent = "Panelime git"; });
  };

  pages.unite = function () {
    if (!C) return;
    var k = C.kit(param("kit")) || C.kit("macro-u1");
    var ders = C.DERSLER[k.ders], col = uniteTonu(COLORS[ders.renk || ders.art], k.unit);
    var main = $("main");
    body.style.setProperty("--macro", col);
    var uh = $(".unit-head");
    if (uh && !$(".unit-art", uh)) uh.insertAdjacentHTML("afterbegin", '<div class="unit-art" aria-hidden="true" style="--c:' + col + '"><span class="bob-dot"></span>' + uniteArt(k.ders, k.unit, col, ders.art) + '</div>');
    header();
    var gb = $('[data-k="guest-bar"]');
    if (gb) gb.hidden = HESAPLI;
    if (engelKontrol()) return;
    if (!HESAPLI && k.unit > 1) {
      document.title = "AP " + ders.title + " · Unit " + k.unit + " · Kitpath";
      main.innerHTML = misafirPerde(ders.title + " · Unit " + k.unit + " ücretsiz hesapla açılır");
      return;
    }
    main.setAttribute("aria-busy", "true");
    C.kitVerisi(k).then(function (KIT) {
      var den = KIT.denemeler ? C.denemeVerisi(k).then(null, function () { return null; }) : Promise.resolve(null);
      return Promise.all([KIT, den, C.sekiller()]);
    }).then(function (r) { main.removeAttribute("aria-busy"); uniteBasla(k, ders, r[0], r[1], HESAPLI ? kilitliMi(k.ders) : "misafir"); if (HESAPLI) kilitTazele(k.ders); }, function () {
      main.removeAttribute("aria-busy");
      main.innerHTML = '<section class="card empty"><div class="stack" style="flex:1 1 320px;gap:12px"><span class="hand" style="color:var(--macro);font-size:30px">hay aksi</span><h1 class="h2" style="font-size:32px">Kit şu an yüklenemedi.</h1><p class="muted">İnternet bağlantını kontrol edip sayfayı yenile.</p><button type="button" class="btn btn--primary" style="align-self:flex-start" onclick="location.reload()">Yenile</button></div></section>';
    });
  };

  function uniteBasla(k, ders, KIT, DEN, kilit) {
    var EPS = (KIT.episodes || []).map(function (e) { var c = {}, x; for (x in e) c[x] = e[x]; c.questions = (e.questions || []).filter(gecerli); return c; });
    var N = EPS.length;
    if (!N) return;
    var TESTS = DEN && Array.isArray(DEN.tests) ? DEN.tests.filter(function (t) { return t && typeof t.no === "number" && Array.isArray(t.questions) && t.questions.length; }) : [];
    var s = C.durum(k);
    if (!(s.cur >= 0 && s.cur < N)) s.cur = 0;
    var b = parseInt(param("b"), 10);
    if (b >= 0 && b < N) s.cur = b;
    var sl = param("slug"); if (sl) EPS.forEach(function (e, i) { if (e.slug === sl) s.cur = i; });
    var tab = "defter", qi = 0, pick = null;
    var player = $('[data-k="player"]'), playerHTML = player.innerHTML, izlemeYazildi = false;
    var vb = typeof KIT.videoBase === "string" && KIT.videoBase ? KIT.videoBase : "video/";
    if (!/^(https?:)?\/\//.test(vb) && vb.charAt(0) !== "/") vb = C.url(k, vb);
    if (vb.charAt(vb.length - 1) !== "/") vb += "/";
    var unitShort = "Unit " + k.unit;
    var label = String(KIT.unitLabel || "").split(/\s+[—–-]\s+/)[1] || String(KIT.unitLabel || "");
    var words = label.split(/\s+/), last = words.pop();
    var digerleri = C.KITLER.filter(function (x) { return x.ders === k.ders && x.id !== k.id; });

    var kurs = String(KIT.course || ders.title).replace(/^AP\s+/, "");
    document.title = "AP " + kurs + " · " + unitShort + " · Kitpath";
    $(".unit-head .eyebrow").setAttribute("lang", "en");   /* büyük harfte "İ" olmasın */
    fill(".unit-head .eyebrow", "// AP " + esc(kurs) + " · " + unitShort +
      digerleri.map(function (x) { return ' · <a class="accent" href="' + ROOT + 'unite/?kit=' + x.id + '">Unit ' + x.unit + ' →</a>'; }).join(""));
    fill(".unit-head h1", esc(words.join(" ")) + (words.length ? " " : "") + '<span class="hl">' + esc(last) + '</span>');
    var qn = EPS[0].questions.length;
    fill(".unit-head .lead", N + " bölüm. Her videodan sonra " + qn + " soru" + (TESTS.length ? "; bölümler bitince Bluebook ekranında, gitgide zorlaşan " + TESTS.length + " deneme." : "."));
    var ltab = { video: 1, sorular: 1, deneme: 1, defter: 1 }[param("sekme")] ? param("sekme") : "video";
    if (!TESTS.length) { $('[data-ltab="deneme"]').hidden = true; if (ltab === "deneme") ltab = "video"; }
    /* sol sütun sekmeleri: Video · Kendini dene · Denemeler (sayfa kısa kalsın diye) */
    function sekme(t) {
      if (t === "defter" && !matchMedia("(max-width: 999px)").matches) t = "video";   /* geniş ekranda defter zaten yanda */
      ltab = t; body.dataset.ltab = t;
      $$("[data-ltab]").forEach(function (b) { b.setAttribute("aria-selected", String(b.dataset.ltab === t)); });
      $$("[data-lpanel]").forEach(function (x) { x.hidden = x.dataset.lpanel !== t; });
      var v = $(".player video"); if (v && t !== "video") v.pause();
      $(".lesson-actions").hidden = t === "deneme";
      kilitGoster();
    }
    /* quiz kilidi: yalnızca Unit 1'in 1. bölüm videosu açık; gerisinin üstünde perde */
    var izinli = kilit ? (k.unit === 1 ? 0 : -1) : null, perde = null;
    function serbest(i) { return !kilit || i === izinli; }
    if (kilit) {
      perde = document.createElement("div");
      perde.dataset.k = "kilit-perde";
      perde.innerHTML = kilit === "misafir" ? misafirPerde() : kilitPerde(kilit, "AP " + ders.title + " şimdilik kilitli");
      $(".ltabs").insertAdjacentElement("afterend", perde);
    }
    function kilitGoster() {
      if (!kilit) return;
      var acik = serbest(s.cur) && ltab === "video";
      perde.hidden = acik || ltab === "defter";          /* dar ekranda defter sekmesi kendi küçük perdesini gösterir */
      if (!acik) $$("[data-lpanel]").forEach(function (x) { x.hidden = true; });
      $(".lesson-actions").hidden = !acik;
    }
    $(".ltabs").addEventListener("click", function (ev) { var b = ev.target.closest("[data-ltab]"); if (b) sekme(b.dataset.ltab); });
    var genis = matchMedia("(max-width: 999px)");
    if (genis.addEventListener) genis.addEventListener("change", function () { if (ltab === "defter" && !genis.matches) sekme("video"); });

    function ep() { return EPS[s.cur]; }
    function est() { return C.bolum(s, ep().slug); }
    function save() { C.kaydet(k, KIT, s); }
    function denemeKaydi(t) { var d = C.deneme(k, t.no); return d && d.ans.length === t.questions.length ? d : null; }
    function ilkBos() { var e = est(), i; for (i = 0; i < ep().questions.length; i++) if (typeof e.ans[C.qid(ep().questions[i])] !== "number") return i; return -1; }
    function vurl(slug, ext) { return vb + slug + "." + ext; }

    function render() { renderUst(); renderBolum(); }
    /* ilerleme, adım çubuğu, denemeler: oynayan videoya dokunmaz */
    function renderUst() {
      var bitti = EPS.filter(function (x) { return C.bittiMi(x, s.eps[x.slug]); }).length;
      var pct = Math.round(100 * bitti / N);
      fill('[data-k="pct"]', "%" + pct);
      $$('[data-k="pct-bar"]').forEach(function (bar) { bar.style.setProperty("--w", pct + "%"); });
      var enIyi = null;
      TESTS.forEach(function (t) { var d = denemeKaydi(t); if (d && d.done && (!enIyi || t.no > enIyi.no)) enIyi = { no: t.no, score: d.score, n: t.questions.length }; });
      fill('[data-k="done-count"]', bitti + "/" + N + " BÖLÜM" + (enIyi ? " · DENEME " + enIyi.no + ": " + enIyi.score + "/" + enIyi.n : ""));
      var sonraki = TESTS.filter(function (t) { var d = denemeKaydi(t); return !d || !d.done; })[0] || TESTS[0];
      fill('[data-k="steps"]', EPS.map(function (x, i) {
        var state = !serbest(i) ? "kilit" : C.bittiMi(x, s.eps[x.slug]) ? "done" : "todo";
        return '<button type="button" class="step" data-i="' + i + '" data-state="' + state + '"' + (i === s.cur ? ' aria-current="step"' : "") + ' aria-label="Bölüm ' + (i + 1) + ': ' + esc(x.title) + (state === "done" ? " (bitti)" : state === "kilit" ? " (kilitli)" : "") + '">' +
          '<span class="step__dot">' + (state === "kilit" ? I.lock : '<span class="num">' + (i + 1) + '</span>' + I.check) + '</span><span class="step__code">' + esc(x.code || i + 1) + '</span></button>';
      }).join("") + (sonraki ? '<button type="button" class="step" data-ltab-go="deneme" aria-label="Denemeler"><span class="step__dot" style="border-style:dashed">' + I.flag + '</span><span class="step__code">DENEME</span></button>' : ""));
      testler();
    }
    function renderBolum() {
      var x = ep();
      player.innerHTML = playerHTML;
      player.dataset.soon = String(!x.seconds);
      izlemeYazildi = false;
      fill('[data-k="player-tag"]', esc(x.code) + " · " + (x.seconds ? fmt(x.seconds) : "yakında"));
      fill('[data-k="player-time"]', "0:00 / " + (x.seconds ? fmt(x.seconds) : "—"));
      fill('[data-k="lesson-en"]', "BÖLÜM " + (s.cur + 1) + " · " + esc(String(x.en || "").toLocaleUpperCase("en-US")));
      fill('[data-k="lesson-title"]', esc(x.title));
      var fin = $('[data-k="finish"]');
      fin.textContent = est().watched ? "Bitti ✓" : "Bölümü bitirdim";
      $('[data-k="next"]').hidden = s.cur === N - 1;

      defter();
      var bos = ilkBos();
      qi = bos < 0 ? -1 : bos;
      sorular();
      kilitGoster();
    }

    function defter() {
      var x = ep(), nb = $('[data-k="notebook"]');
      if (kilit === "misafir" && !serbest(s.cur)) { fill('[data-k="notebook-body"]', misafirPerde("Bu defter ücretsiz hesapla açılır", true)); return; }
      if (kilit && kilit !== "misafir") { fill('[data-k="notebook-body"]', kilitPerde(kilit, "Defterler de kilitli", true)); return; }
      $$('[role="tab"]', nb).forEach(function (t) { t.setAttribute("aria-selected", String(t.dataset.tab === tab)); });
      if (tab === "terim") {
        var terms = x.terms || [];
        fill('[data-k="notebook-body"]', terms.length
          ? '<span class="muted" style="font-size:14px">Bu bölümde geçen AP terimleri. Sınavda İngilizce soruldukları için İngilizce bırakıldı.</span><div class="terms">' + terms.map(function (t, i) { return '<span class="chip" style="animation-delay:' + (i * .04) + 's">' + esc(t) + '</span>'; }).join("") + '</div>'
          : '<span class="hand">terimler videoyla birlikte geliyor</span>');
        return;
      }
      fill('[data-k="notebook-body"]', '<span class="hand">özet</span><p class="muted">Defter yükleniyor…</p>');
      var buyuk = ROOT + "defterler/?u=" + k.id + "&b=" + encodeURIComponent(x.slug);
      C.defterVerisi(k, x.slug).then(function () {
        if (ep() !== x || tab !== "defter") return;
        /* orijinal defter, panelin içinde kendi kaydırmasıyla */
        var kutu = $('[data-k="notebook-body"]');
        kutu.innerHTML = '<a class="btn btn--link" style="align-self:flex-end;font-size:14px" href="' + buyuk + '">Büyük aç ↗</a>';
        defterCercevesi(kutu, C.defterUnite(k.id) || { id: k.id, ders: k.ders, unit: k.unit, path: k.path, liste: "kit-data.js" }, x.slug, x.title, "df-kutu--panel");
      }, function () {
        if (ep() !== x || tab !== "defter") return;
        fill('[data-k="notebook-body"]', '<span class="hand">defter yakında</span><p class="muted" style="line-height:1.6">Bu bölümün defteri henüz hazır değil. Terimler sekmesine göz atabilirsin.</p>');
      });
    }

    function sorular() {
      var x = ep(), Q = x.questions, e = est(), sec = $(".check-q"), L = "ABCDE";
      var tab2 = $('[data-ltab="sorular"]');
      tab2.hidden = !Q.length;
      if (!Q.length) { if (ltab === "sorular") sekme("video"); return; }
      var sd = C.soruDurumu(x, e);
      fill('[data-k="soru-sayac"]', sd.ans + "/" + sd.n);
      var dots = Q.map(function (q, i) { return '<i class="' + (typeof e.ans[C.qid(q)] === "number" || i === qi ? "on" : "") + '"></i>'; }).join("");
      var head = function (sag) { return '<div class="check-q__head"><div class="row" style="align-items:center;gap:12px"><h3 class="h3" id="kd-h">Kendini dene</h3><span class="q-dots" aria-label="' + (qi < 0 ? Q.length + " soru bitti" : "Soru " + (qi + 1) + " / " + Q.length) + '">' + dots + '</span></div><span class="hand" style="font-size:22px">' + sag + '</span></div>'; };
      if (qi < 0) {
        var st = C.soruDurumu(x, e);
        sec.innerHTML = head(st.ok + "/" + st.n + " doğru!") + Q.map(function (q, i) {
          var p = e.ans[C.qid(q)], ok = p === q.a;
          return '<div class="stack" style="gap:8px;padding-top:14px;border-top:1px solid var(--line)"><strong style="font-size:15px;line-height:1.5">' + (i + 1) + '. ' + md(q.q) + '</strong>' +
            '<div class="row" style="gap:10px"><span class="ans ' + (ok ? "ans--ok" : "ans--bad") + '"><strong>Senin cevabın:</strong> ' + L[p] + ' · ' + md(q.opts[p]) + '</span>' + (ok ? "" : '<span class="ans ans--ok"><strong>Doğrusu:</strong> ' + L[q.a] + ' · ' + md(q.opts[q.a]) + '</span>') + '</div>' +
            (q.why ? '<p class="muted" style="font-size:14px;line-height:1.6;margin:0">' + md(q.why) + '</p>' : "") + '</div>';
        }).join("") + '<div class="row" style="justify-content:flex-end;gap:10px"><button type="button" class="btn btn--ghost" data-k="retry">Tekrar çöz</button>' + (s.cur < N - 1 ? '<button type="button" class="btn btn--primary" data-k="next-ep">Sıradaki bölüm →</button>' : "") + '</div>';
        return;
      }
      var q = Q[qi], fig = q.fig, figHtml = "";
      if (fig && fig.type === "table") figHtml = '<div class="table-box">' + tabloHTML(fig, "table", "max-width:520px;font-size:14px") + '</div>' + (fig.caption ? '<span class="muted" style="font-size:13px">' + md(fig.caption) + '</span>' : "");
      else if (fig) figHtml = '<div data-k="check-fig"></div>';
      /* Kendini dene: şık işaretlenince doğru/yanlış ve açıklama hemen açılır (denemeler sonda kalır) */
      var cev = e.ans[C.qid(q)], cevapli = typeof cev === "number", dogru = cevapli && cev === q.a;
      sec.innerHTML = head(cevapli ? (dogru ? "doğru!" : "olsun, açıklamaya bak") : "işaretle, hemen gör") + '<p class="q-text">' + md(q.q) + '</p>' + figHtml +
        '<div class="opts">' + q.opts.map(function (o, i) {
          var durum = !cevapli ? "" : (i === q.a ? "ok" : (i === cev ? "bad" : ""));
          return '<button type="button" class="opt" data-o="' + i + '"' + (cevapli ? " disabled" : "") + ' aria-pressed="' + (cev === i) + '"' + (durum ? ' data-durum="' + durum + '"' : "") + '>' +
            '<span class="opt__letter">' + L[i] + '</span><span class="opt__text">' + md(o) + '</span>' +
            (durum === "ok" ? '<span class="opt__tag">Doğru</span>' : (durum === "bad" ? '<span class="opt__tag">Senin cevabın</span>' : "")) + '</button>';
        }).join("") + '</div>' +
        (cevapli
          ? '<div class="aciklama" data-durum="' + (dogru ? "ok" : "bad") + '" role="status"><strong>' + (dogru ? "Doğru!" : "Doğrusu " + L[q.a] + ".") + '</strong>' + (q.why ? '<p>' + md(q.why) + '</p>' : "") + '</div>' +
            '<div class="row" style="justify-content:flex-end"><button type="button" class="btn btn--primary" data-k="next-q">' + (ilkBosSonra() < 0 ? "Bitir, özeti gör" : "Sonraki soru →") + '</button></div>'
          : '<p class="muted" style="font-size:13px;margin:0">Bir şıkka dokun; doğru mu, neden, hemen görürsün.</p>');
      if (fig && fig.type !== "table") sekilKoy($('[data-k="check-fig"]', sec), fig);
    }
    function ilkBosSonra() {
      var e = est(), Q = ep().questions, i;
      for (i = 0; i < Q.length; i++) if (i !== qi && typeof e.ans[C.qid(Q[i])] !== "number") return i;
      return -1;
    }

    function testler() {
      if (!TESTS.length) return;
      fill('[data-k="tests"]', TESTS.map(function (t, i) {
        var d = denemeKaydi(t), n = t.questions.length, bars = [0, 1, 2, 3, 4].map(function (j) { return '<i class="' + (j <= i ? "on" : "") + '"></i>'; }).join("");
        var href = ROOT + (d && d.done ? "sonuc/" : "deneme/") + "?kit=" + k.id + "&n=" + t.no;
        var alt = d && d.done ? "Son skor " + d.score + "/" + n + " · sonuca bak" : (d && d.started ? "Devam et →" : "Başla →");
        return '<a class="card test-card" href="' + href + '"><div class="row" style="justify-content:space-between;align-items:center"><span class="mono muted">DENEME ' + t.no + '</span><span class="level" aria-label="Zorluk ' + (i + 1) + '/' + TESTS.length + '">' + bars + '</span></div>' +
          '<span class="h3">' + esc(t.level || "Deneme " + t.no) + '</span><span class="muted" style="font-size:14px">' + n + ' soru · ' + (t.minutes || n) + ' dk</span>' +
          '<span style="font-weight:600;font-size:14px" class="' + (d && d.done ? "muted" : "accent") + '">' + alt + '</span></a>';
      }).join(""));
    }

    function izlendi() {
      var e = est();
      if (e.watched) return;
      e.watched = true; C.calisti(); save();
      var f = $('[data-k="finish"]'); if (f) f.textContent = "Bitti ✓";
      renderUst();
      if (ep().questions.length && !C.soruDurumu(ep(), e).done) { sekme("sorular"); toast("Video bitti; sıra " + ep().questions.length + " soruda"); }
    }

    $('[data-k="steps"]').addEventListener("click", function (ev) {
      var bt = ev.target.closest("button.step");
      if (!bt) return;
      if (bt.dataset.ltabGo) { sekme(bt.dataset.ltabGo); return; }
      s.cur = +bt.dataset.i; pick = null; save(); render();
      if (ltab === "deneme") sekme("video");
    });
    $('[data-k="notebook"]').addEventListener("click", function (ev) {
      var t = ev.target.closest('[role="tab"]');
      if (t) { tab = t.dataset.tab; defter(); }
    });
    $(".check-q").addEventListener("click", function (ev) {
      var o = ev.target.closest(".opt");
      if (o) {
        var e0 = est(), q0 = ep().questions[qi];
        if (o.disabled || !q0 || typeof e0.ans[C.qid(q0)] === "number") return;
        e0.ans[C.qid(q0)] = +o.dataset.o; pick = null; C.calisti(); save();
        renderUst(); sorular();
        var nx = $('[data-k="next-q"]', ev.currentTarget); if (nx) nx.focus({ preventScroll: true });
        return;
      }
      if (ev.target.closest('[data-k="next-q"]')) {
        qi = ilkBos(); pick = null;
        renderUst(); sorular();
        if (qi < 0) toast("Bölümün soruları bitti");
        return;
      }
      if (ev.target.closest('[data-k="retry"]')) {
        var e = est(); ep().questions.forEach(function (q) { delete e.ans[C.qid(q)]; });
        save(); qi = 0; pick = null; renderUst(); sorular(); return;
      }
      if (ev.target.closest('[data-k="next-ep"]')) { s.cur = Math.min(s.cur + 1, N - 1); pick = null; save(); render(); sekme("video"); }
    });
    player.addEventListener("click", function (ev) {
      if (!ev.target.closest(".play")) return;
      var x = ep(), v = document.createElement("video");
      v.controls = true; v.autoplay = true; v.playsInline = true; v.preload = "metadata";
      v.src = vurl(x.slug, "mp4"); v.poster = vurl(x.slug, "jpg");
      v.setAttribute("aria-label", x.title + " videosu");
      v.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#000;z-index:3";
      v.addEventListener("ended", izlendi);
      v.addEventListener("timeupdate", function () { if (!izlemeYazildi && v.duration && v.currentTime / v.duration > .9) { izlemeYazildi = true; izlendi(); } });
      v.addEventListener("error", function () { player.innerHTML = playerHTML; player.dataset.soon = "true"; });
      player.appendChild(v);
      var pr = v.play(); if (pr && pr.catch) pr.catch(function () {});
    });
    $('[data-k="finish"]').addEventListener("click", function () {
      var e = est(), ilk = !EPS.some(function (x) { return x !== ep() && C.bittiMi(x, s.eps[x.slug]); });
      if (!e.watched) { e.watched = true; C.calisti(); }
      if (ltab === "video" && ep().questions.length && !C.soruDurumu(ep(), e).done) { save(); renderUst(); fill('[data-k="finish"]', "Bitti ✓"); sekme("sorular"); toast(ilk ? "Bölüm bitti, ilk rozet senin! Şimdi sorular" : "Şimdi " + ep().questions.length + " soru"); return; }
      toast(ilk ? "Bölüm bitti, ilk rozet senin!" : (s.cur === N - 1 ? "Ünite bitti! Sırada denemeler" : "Bölüm " + (s.cur + 1) + " bitti"));
      var sonBolum = s.cur === N - 1;
      s.cur = Math.min(s.cur + 1, N - 1); pick = null; save(); render();
      sekme(sonBolum && TESTS.length ? "deneme" : "video");
    });
    $('[data-k="next"]').addEventListener("click", function () { s.cur = Math.min(s.cur + 1, N - 1); pick = null; save(); render(); sekme("video"); });
    render();
    sekme(ltab);
  }

  pages.giris = function () {
    var mode = param("mod") === "giris" ? "giris" : "kayit";
    var form = $('[data-k="auth-form"]');
    var devam = devamAdresi();
    if (HESAPLI && !param("mod")) { location.replace(devam || ROOT + "panel/"); return; }
    function render() {
      $$('[role="tab"]', form).forEach(function (t) { t.setAttribute("aria-selected", String(t.dataset.mod === mode)); });
      $$("[data-only]", form).forEach(function (el) {
        var on = el.dataset.only === mode;
        el.hidden = !on;
        $$("input", el).forEach(function (i) { i.disabled = !on; });
      });
      var pw = $('[data-k="pw"]');
      pw.setAttribute("autocomplete", mode === "kayit" ? "new-password" : "current-password");
      pw.setAttribute("placeholder", mode === "kayit" ? "En az 8 karakter" : "Şifren");
      fill('[data-k="cta"]', mode === "kayit" ? "Hesabımı aç →" : "Giriş yap →");
      var fe = $('[data-k="form-err"]'); if (fe) fe.remove();
    }
    function qs() { var q = []; if (mode === "giris") q.push("mod=giris"); if (devam) q.push("devam=" + encodeURIComponent(devam)); return q.length ? "?" + q.join("&") : location.pathname; }
    form.addEventListener("click", function (e) {
      var t = e.target.closest('[role="tab"]');
      if (t) { mode = t.dataset.mod; history.replaceState(null, "", qs()); render(); }
      if (e.target.closest('[data-k="pw-toggle"]')) {
        var pw = $('[data-k="pw"]'), b = e.target.closest('[data-k="pw-toggle"]');
        var show = pw.type === "password";
        pw.type = show ? "text" : "password"; b.textContent = show ? "Gizle" : "Göster";
        b.setAttribute("aria-pressed", String(show));
      }
      if (e.target.closest(".field__hint")) { e.preventDefault(); toast("Şifreni sıfırlamak için yöneticiye yaz."); }
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      $$(".field__err", form).forEach(function (x) { x.remove(); });
      function err(input, msg) {
        ok = false;
        var s = document.createElement("span"); s.className = "field__err"; s.textContent = msg;
        input.closest(".field").appendChild(s);
        input.setAttribute("aria-invalid", "true");
      }
      $$("input:not([disabled])", form).forEach(function (i) { i.removeAttribute("aria-invalid"); });
      if (mode === "kayit") {
        if (!$('[name="ad"]').value.trim()) err($('[name="ad"]'), "Adını yaz");
        if (!$('[name="soyad"]').value.trim()) err($('[name="soyad"]'), "Soyadını yaz");
      }
      var em = $('[name="eposta"]');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim())) err(em, "Geçerli bir e-posta yaz");
      var pw = $('[data-k="pw"]');
      if (mode === "kayit" && pw.value.length < 8) err(pw, "Şifre en az 8 karakter olmalı");
      if (mode === "giris" && pw.value.length < 6) err(pw, "Şifreni yaz");
      if (!ok) { var first = $('[aria-invalid="true"]', form); if (first) first.focus(); return; }
      if (!H) { toast("Hesap sistemi yüklenemedi; sayfayı yenile"); return; }
      var cta = $('[data-k="cta"]'), eski = cta.textContent;
      cta.disabled = true; cta.textContent = mode === "kayit" ? "Hesabın açılıyor…" : "Giriş yapılıyor…";
      var is = mode === "kayit"
        ? H.kayit($('[name="ad"]').value, $('[name="soyad"]').value, em.value.trim(), pw.value)
        : H.giris(em.value.trim(), pw.value);
      is.then(function () {
        var p = H.profil();
        if (mode === "kayit" || H.engel(p) === "kurulum") location.replace(ROOT + "hosgeldin/" + (devam ? "?devam=" + encodeURIComponent(devam) : ""));
        else location.replace(devam || ROOT + "panel/");
      }, function (x) {
        cta.disabled = false; cta.textContent = eski;
        var m = document.createElement("p"); m.className = "field__err"; m.dataset.k = "form-err"; m.setAttribute("role", "alert"); m.style.textAlign = "center";
        m.textContent = H.hataMetni(x);
        var fe = $('[data-k="form-err"]'); if (fe) fe.remove();
        cta.insertAdjacentElement("afterend", m);
      });
    });
    render();
  };

  pages.hosgeldin = function () {
    if (!HESAPLI) { girisGerek(); return; }
    var p = H.profil() || {}, SEC = C.SECMELI, adlar = { calc: "AP Calculus BC", calcx: "Calculus", stats: "AP Statistics" };
    var step = param("adim") === "2" ? 2 : 1;
    var grade = p.sinif === 10 && step === 1 ? 10 : (p.sinif === 9 || p.sinif === 12) && p.okul && p.okul !== "uaa" ? p.sinif : 11, el = [];   /* profilden "11. sınıf" seçilince ?adim=2 ile gelir */
    Object.keys(SEC).forEach(function (key) { if ((p.secmeliler || []).indexOf(SEC[key]) > -1) el.push(key); });
    var okul = p.okul || null;
    /* ÜAL dışındaki okullar: seçmeli yok, yalnızca AP önerisi (katalog adlarıyla kaydedilir) */
    var AP_LISTE = C.KATALOG.filter(function (k) { return k.tur === "ap"; });
    var apSec = (p.secmeliler || []).filter(function (d) { return AP_LISTE.some(function (k) { return k.title === d; }); });
    fill('[data-k="ap-sec"]', AP_LISTE.map(function (k) { return '<button type="button" class="filter ap-sec__b" data-ap="' + esc(k.title) + '" aria-pressed="false" style="--c:' + (COLORS[k.renk] || "var(--macro)") + '">' + esc(k.title.replace(/^AP\s+/, "")) + '</button>'; }).join(""));
    var root = $('[data-k="ob"]'), devam = devamAdresi();
    if (step === 2 && !okul) step = 1;   /* okul seçilmeden ikinci adıma geçilmez */
    fill('.ob__step[data-step="1"] h1', "Selam " + esc(ilkAd(ME.name)) + '! <span class="hl">Seni tanıyalım.</span>');
    $('[data-k="go"]').href = devam || ROOT + "kitlerim/";
    var kaydediliyor = false;
    function render() {
      $$(".ob__segs i").forEach(function (s, i) { s.className = i < step ? "on" : ""; });
      $('[data-k="ob-progress"]').setAttribute("aria-label", "Adım " + step + " / 3");
      $$(".ob__step", root).forEach(function (s) { s.hidden = +s.dataset.step !== step; });
      $$("[data-grade]", root).forEach(function (b) { b.setAttribute("aria-pressed", String(+b.dataset.grade === grade)); });
      $$("[data-okul]", root).forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.okul === okul)); });
      $$("[data-el]", root).forEach(function (b) { b.setAttribute("aria-pressed", String(el.indexOf(b.dataset.el) > -1)); });
      var ual = okul === "uaa";
      $$("[data-okul-disi]", root).forEach(function (b) { b.hidden = !okul || ual; });
      $$("[data-for-grade]", root).forEach(function (x) { x.hidden = !ual || +x.dataset.forGrade !== grade; });
      $$("[data-for-okul]", root).forEach(function (x) { x.hidden = ual; });
      $$("[data-ual]", root).forEach(function (x) { x.textContent = !okul || ual ? x.dataset.ual : x.dataset.diger; });
      $$("[data-ap]", root).forEach(function (b) { b.setAttribute("aria-pressed", String(apSec.indexOf(b.dataset.ap) > -1)); });
      $('[data-k="back"]').style.visibility = step > 1 ? "visible" : "hidden";
      $('[data-k="fwd"]').hidden = step === 3;
      $('[data-k="go"]').hidden = step !== 3;
      var ap = el.filter(function (x) { return x !== "calcx"; });
      fill('[data-k="summary"]', !ual
        ? (apSec.length ? apSec.map(function (x) { return x.replace(/^AP\s+/, ""); }).join(", ") + " rafının en üstünde. Bütün AP kitleri herkese açık." : "Bütün AP kitleri herkese açık; istediğini rafına ekleyebilirsin.")
        : grade === 11
        ? (ap.length ? ap.map(function (x) { return adlar[x]; }).join(" ve ") + " rafının en üstünde. Macro, HuG ve Business de herkese açık." : "Macro, HuG ve Business herkese açık; seçmeli AP kitlerin hazır olunca rafına düşer.")
        : "10. sınıf ortak derslerin rafında. Macro, HuG ve Business de herkese açık.");
      var h = $(".ob__step:not([hidden]) h1", root);
      if (h && document.activeElement && document.activeElement.closest && document.activeElement.closest(".ob__nav")) h.focus();
    }
    function kaydet() {
      var korunan = (p.secmeliler || []).filter(function (d) { return Object.keys(SEC).every(function (x) { return SEC[x] !== d; }) && C.OKUL.onuncu.indexOf(d) < 0; });
      var liste = okul !== "uaa" ? apSec.slice() : grade === 11 ? el.map(function (x) { return SEC[x]; }).concat(korunan) : [];
      var fwd = $('[data-k="fwd"]');
      kaydediliyor = true; fwd.disabled = true; fwd.textContent = "Kaydediliyor…";
      /* not takibi (quiz kilidi) yalnızca ÜAL quizleri için */
      H.profilKaydet(grade, liste, okul === "uaa" ? !(p && p.katilim === false) : false, okul).then(function (p2) {
        p = p2 || p; step = 3; kaydediliyor = false; fwd.disabled = false; fwd.textContent = "Devam →"; render();
      }, function (x) {
        kaydediliyor = false; fwd.disabled = false; fwd.textContent = "Devam →"; toast(H.hataMetni(x));
      });
    }
    root.addEventListener("click", function (e) {
      if (kaydediliyor) return;
      var g = e.target.closest("[data-grade]"); if (g) { grade = +g.dataset.grade; render(); }
      var ok = e.target.closest("[data-okul]"); if (ok) { okul = ok.dataset.okul; if (okul === "uaa" && (grade < 10 || grade > 11)) grade = 11; render(); }
      var apb = e.target.closest("[data-ap]"); if (apb) { var ai = apSec.indexOf(apb.dataset.ap); if (ai > -1) apSec.splice(ai, 1); else apSec.push(apb.dataset.ap); render(); }
      var x = e.target.closest("[data-el]");
      if (x) {
        var id = x.dataset.el, k = el.indexOf(id);
        if (k > -1) el.splice(k, 1); else { el.push(id); if (id === "calc") el = el.filter(function (y) { return y !== "calcx"; }); if (id === "calcx") el = el.filter(function (y) { return y !== "calc"; }); }
        render();
      }
      if (e.target.closest('[data-k="back"]')) { step = Math.max(1, step - 1); render(); }
      if (e.target.closest('[data-k="fwd"]')) {
        if (step === 1) { if (!okul) { toast("Önce okulunu seç"); return; } step = 2; render(); return; }
        if (okul === "uaa" && grade === 11 && !el.length) { toast("Matematik dersin dahil, en az birini seç"); return; }
        kaydet();
      }
    });
    $$("[data-el-art]").forEach(function (b) {
      var kind = b.closest("[data-el]").dataset.el;
      b.innerHTML = '<span aria-hidden="true" style="position:absolute;left:-40px;bottom:-80px;width:170px;height:170px;border-radius:40px;background:rgba(255,255,255,.16);animation:kSpin 18s linear infinite"></span>' + art(kind, COLORS[kind]) + b.innerHTML;
    });
    render();
  };

  /* ---------- panel ---------- */
  pages.panel = function () {
    if (!HESAPLI) { ornekSerit("Bu bir örnek panel. Giriş yapınca kendi ilerlemen, quizlerin ve notların burada görünür."); panelOrnek(); return; }
    if (engelKontrol(true)) return;
    panelCiz(H.profil());
    H.profilYenile().then(panelCiz, function () { toast("Bağlantı kurulamadı; son kaydedilen bilgiler gösteriliyor"); });
    notFormu(panelCiz);
  };

  function bosQuiz() {
    return '<div class="row" style="align-items:center;gap:16px;flex-wrap:nowrap"><svg class="a-sway" width="70" height="70" viewBox="0 0 64 64" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="10" y="14" width="44" height="40" rx="8"/><path d="M10 26h44M22 8v10M42 8v10"/><path d="M24 40l6 6 11-12" stroke="#2FA37A" stroke-width="3"/></svg>' +
      '<div class="stack" style="gap:4px"><strong>Takvim boş</strong><span class="muted" style="font-size:14px;line-height:1.5">Hocan yeni bir quiz açınca burada görünür.</span><span class="hand" style="font-size:20px;color:var(--accent-ink)">keyfine bak!</span></div></div>';
  }
  /* panelin küçük kartları: Bu hafta, Kitlerim özeti, Sıradaki rozet */
  function halka(pct, renk) {
    var c = 2 * Math.PI * 20;
    return '<svg class="ring-mini" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="20" fill="none" stroke="var(--track)" stroke-width="6"/><circle cx="24" cy="24" r="20" fill="none" stroke="' + renk + '" stroke-width="6" stroke-linecap="round" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + (c * (1 - pct / 100)).toFixed(1) + '" transform="rotate(-90 24 24)"/></svg>';
  }
  function panelEk(r, tk, kits, rz) {
    var gunAd = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"], hafta = tk.hucreler.slice(35, 42), bugun = tk.bugun - 35;
    fill('[data-k="w-gunler"]', hafta.map(function (v, i) {
      return '<span class="day" data-on="' + (v > 0) + '"' + (i === bugun ? ' data-today="true"' : "") + (i > bugun ? ' data-future="true"' : "") + ' style="animation-delay:' + (i * .06) + 's"><i>' + (v > 0 ? I.flame : "") + '</i><small>' + gunAd[i] + '</small></span>';
    }).join(""));
    fill('[data-k="w-seri"]', I.flame + r.seri + " gün");
    fill('[data-k="w-bolum"]', r.bolum);
    fill('[data-k="w-soru"]', r.soru);
    fill('[data-k="w-oran"]', r.soru ? "%" + Math.round(100 * r.dogru / r.soru) : "—");
    var calisilan = hafta.filter(function (v) { return v > 0; }).length;
    fill('[data-k="w-not"]', calisilan >= 5 ? "efsane bir hafta!" : calisilan ? "bu hafta " + calisilan + " gün, devam!" : "bu hafta henüz çalışmadın, bugün başla");
    fill('[data-k="mini-kits"]', kits.length ? kits.slice(0, 4).map(function (k) {
      return '<a class="mini-kit" href="' + k.href + '"' + (k.defter ? ' data-df-mini="' + k.defter + '"' : "") + '>' + halka(k.pct, k.renk) + '<span class="stack" style="gap:2px;min-width:0"><strong>' + esc(k.ad) + '</strong><span class="mono muted" style="font-size:12px">' + (k.defter ? "defter" : "%" + k.pct) + '</span></span></a>';
    }).join("") : '<a class="mini-kit" href="' + ROOT + 'kitlerim/"><span class="kit-add-card__plus" aria-hidden="true">+</span><strong>Rafına kit ekle</strong></a>');
    var sd = C ? C.sonDefter() : null;
    if (!HESAPLI) sd = { u: "macro-u1", b: "mc102", ders: "macro", baslik: "Fırsat Maliyeti ve PPC", unite: 1, bolum: 1, toplam: 4 };
    var sdRenk = sd && C && C.DEFTER_DERS[sd.ders] ? COLORS[C.DEFTER_DERS[sd.ders].renk] : COLORS.macro;
    fill('[data-k="son-defter"]', sd && sd.b
      ? '<a class="son-defter__a" href="' + ROOT + 'defterler/?u=' + esc(sd.u) + '&b=' + esc(sd.b) + '" style="--c:' + sdRenk + '"><span class="son-defter__ic" aria-hidden="true">' + I.defter + '</span><span class="stack" style="gap:6px;min-width:0;flex:1"><span class="mono muted" style="font-size:11px">' + esc((C.DEFTER_DERS[sd.ders] || { ad: "" }).ad.toUpperCase()) + ' · UNIT ' + sd.unite + '</span><strong style="font-size:16px;line-height:1.25">' + esc(sd.baslik) + '</strong>' +
        '<span class="row" style="align-items:center;gap:8px;flex-wrap:nowrap"><span class="progress progress--thin"><span style="--w:' + Math.round(100 * (sd.bolum + 1) / Math.max(1, sd.toplam)) + '%;--c:' + sdRenk + '"></span></span><span class="mono muted" style="font-size:12px">' + (sd.bolum + 1) + '/' + sd.toplam + '</span></span><span class="accent" style="font-weight:600;font-size:14px">Kaldığın yerden →</span></span></a>'
      : '<a class="son-defter__a" href="' + ROOT + 'defterler/"><span class="son-defter__ic" aria-hidden="true">' + I.defter + '</span><span class="stack" style="gap:4px"><strong>Henüz defter açmadın</strong><span class="muted" style="font-size:14px">Videosuz çalışmak istersen defterler burada.</span><span class="hand" style="font-size:20px;color:var(--accent-ink)">bir göz at!</span></span></a>');
    var nb = rz.filter(function (b) { return !b.got; })[0];
    fill('[data-k="next-badge"]', nb
      ? '<span class="badge__tile next-badge__tile" style="--c:' + nb.c + ';--rot:' + nb.rot + '">' + esc(nb.glyph) + '</span><div class="stack" style="gap:8px;flex:1;min-width:0"><strong style="font-size:17px">' + esc(nb.name) + '</strong><span class="muted" style="font-size:14px">' + esc(nb.how) + '</span>' +
        '<div class="row" style="align-items:center;gap:10px;flex-wrap:nowrap"><div class="progress progress--thin" role="progressbar" aria-label="' + esc(nb.name) + ' ilerlemesi" aria-valuenow="' + nb.n + '" aria-valuemin="0" aria-valuemax="' + nb.hedef + '"><span style="--w:' + Math.round(100 * nb.n / nb.hedef) + '%;--c:' + nb.c + '"></span></div><span class="mono muted">' + nb.n + '/' + nb.hedef + '</span></div></div>'
      : '<span class="badge__tile next-badge__tile" style="--c:#F5D85E;--rot:-4deg">★</span><div class="stack" style="gap:6px"><strong>Bütün rozetler senin!</strong><span class="hand" style="font-size:22px">koleksiyon tamam</span></div>');
  }

  /* süresi geçmiş quiz için öğrencinin not kutuları (panel ve Notlarım) */
  function notKutusu(bek) {
    fill('[data-k="alert"] .alert__body', '<strong>' + esc(bek.map(function (q) { return q.ders; }).filter(function (d, i, a) { return a.indexOf(d) === i; }).join(", ")) + ' kısa bir mola verdi.</strong><span style="font-size:15px;line-height:1.55">' +
      bek.map(function (q) { return esc(q.ders + " · " + q.baslik); }).join(", ") + ' quizinin son tarihi geçti. O dersin kitleri ve defterleri kilitli (yalnızca 1. video açık); diğer derslerin açık. Notunu buraya yaz ya da hocan girsin, kilit hemen açılır.</span>' +
      bek.map(function (q) {
        return '<form class="row" style="align-items:center;gap:10px;flex-wrap:wrap" data-quiz="' + esc(q.id) + '" data-max="' + q.max_puan + '" novalidate><strong style="font-size:14px;flex:1 1 200px">' + esc(q.baslik) + '</strong>' +
          '<input class="grade-in" name="puan" type="text" inputmode="decimal" autocomplete="off" placeholder="Not" aria-label="' + esc(q.baslik) + ' notun, ' + sayi(q.max_puan) + ' üzerinden" style="width:96px"><span class="mono">/ ' + sayi(q.max_puan) + '</span>' +
          '<button type="submit" class="btn btn--primary btn--sm">Kaydet</button></form>';
      }).join(""));
  }
  function notFormu(sonra) {
    $('[data-k="alert"]').addEventListener("submit", function (e) {
      var f = e.target.closest("form[data-quiz]"); if (!f) return;
      e.preventDefault();
      var inp = f.puan, max = +f.dataset.max, v = Number(String(inp.value).trim().replace(",", "."));
      if (!String(inp.value).trim() || !(v >= 0 && v <= max)) { inp.setAttribute("aria-invalid", "true"); toast("0 ile " + sayi(max) + " arasında bir not yaz"); inp.focus(); return; }
      var bt = f.querySelector("button"); bt.disabled = true;
      H.notGir(f.dataset.quiz, v).then(function (p) { toast("Notun kaydedildi"); sonra(p); }, function (x) { bt.disabled = false; toast(H.hataMetni(x)); });
    });
  }

  function quizSatiri(q) {
    var d = new Date(q.son_tarih), left = kalan(q.son_tarih), urgent = new Date(q.son_tarih) - Date.now() < 3 * 864e5;
    return '<div class="quiz-item"><div class="date-tile" style="--c:' + COLORS[C.dersRengi(q.ders)] + '"><b>' + d.getDate() + '</b><small>' + AYLAR[d.getMonth()] + '</small></div>' +
      '<div class="stack" style="flex-grow:1;gap:3px;min-width:0"><strong style="font-size:15px">' + esc(q.ders) + ' · ' + esc(q.baslik) + '</strong><span class="muted" style="font-size:13px">' + esc(saatli(q.son_tarih)) + ' · ' + sayi(q.max_puan) + ' üzerinden</span></div>' +
      '<span class="chip ' + (urgent ? "chip--hot" : "chip--plain") + ' mono">' + esc(left) + '</span></div>';
  }

  function panelCiz(p) {
    p = p || {};
    var r = C.istatistik(), notlar = p.notlar || [], yak = p.yaklasan || [], bek = p.bekleyen || [];
    var engel = H.engel(p) === "not" && bek.length > 0;
    fill(".hello h1", 'Selam <span class="hl">' + esc(ilkAd(ME.name)) + '!</span>');
    var ilerleme = !!r.son || r.deneme > 0;
    var bos = !ilerleme && !yak.length && !notlar.length && !engel;
    $('[data-k="alert"]').hidden = !engel;
    $('[data-k="empty"]').hidden = ilerleme;
    $('[data-k="full"]').hidden = bos;
    fill('[data-k="cheer"]', engel ? "not gelince devam!" : bos ? "hoş geldin, rafın seni bekliyor" : r.seri > 0 ? r.seri + " günlük serin var, bozma!" : "bugün bir bölümle seriyi başlat!");
    if (engel) notKutusu(bek);
    /* kilit yalnız quizin dersinde: "kaldığın yer" kartı o derse aitse üstünde kilit rozeti */
    var kl = C.kilitler(p), resEl = $(".resume");
    if (resEl) { var eskiR = $(".kilitli-rozet", resEl); if (eskiR) eskiR.remove(); if (r.son && kl[r.son.kit.ders]) resEl.insertAdjacentHTML("beforeend", kilitRozet("Quiz notu bekleniyor")); }

    var res = $(".resume");
    res.hidden = !r.son;
    if (r.son) {
      var k = r.son.kit, o = r.son.ozet, ders = C.DERSLER[k.ders];
      res.href = ROOT + "unite/?kit=" + k.id;
      var ruc = uniteTonu(COLORS[ders.renk || ders.art], k.unit), rband = $(".resume__band", res);
      res.style.setProperty("--macro", ruc);
      if (rband) { var eskiSvg = $("svg", rband); if (eskiSvg) eskiSvg.remove(); rband.insertAdjacentHTML("beforeend", uniteArt(k.ders, k.unit, ruc, ders.art)); }
      var bodyEl = $(".resume__body", res);
      bodyEl.innerHTML = '<span class="mono muted">KALDIĞIN YER · AP ' + esc(ders.title.toUpperCase()) + ' · UNIT ' + k.unit + '</span>' +
        '<span class="display" style="font-size:32px;line-height:1.05;letter-spacing:-.02em">' + (o.bitenler >= o.n ? "Ünite bitti!" : "Bölüm " + (o.cur + 1) + " · " + esc(o.curTitle)) + '</span>' +
        '<span class="muted" style="font-size:15px">' + o.bitenler + '/' + o.n + ' bölüm bitti' + (o.ans ? ' · ' + o.ok + '/' + o.ans + ' soru doğru' : "") + '</span>' +
        '<div class="row" style="align-items:center;gap:12px;margin-top:auto;flex-wrap:nowrap"><div class="progress" role="progressbar" aria-label="Ünite ilerlemesi" aria-valuenow="' + o.pct + '" aria-valuemin="0" aria-valuemax="100"><span style="--w:' + o.pct + '%"></span></div><span class="mono">%' + o.pct + '</span></div>' +
        '<span class="btn btn--primary" style="align-self:flex-start;margin-top:6px">' + (o.bitenler >= o.n ? "Denemelere geç →" : "Devam et →") + '</span>';
    }
    fill('[data-k="quizzes"]', yak.length ? yak.slice(0, 3).map(quizSatiri).join("") : bosQuiz());
    var qk = $('[data-k="quizzes"]'); if (qk && qk.closest(".quiz-list")) qk.closest(".quiz-list").hidden = !notTakibi();
    panelP = p;
    panelEk(r, C.takvim(), C.raf(p).filter(function (x) { return x.rafta && x.hazir; }).sort(function (a, b) { return b.varsayilan - a.varsayilan; }).map(function (x) {
      var d = x.kit.ders ? dersler().filter(function (y) { return y.id === x.kit.ders; })[0] : null;
      return { ad: x.kit.title.replace(/^AP\s+/, "").replace(/:.*$/, "").replace(/ and Trigonometry$| 10$/, ""), renk: COLORS[x.kit.renk], pct: d ? d.pct : 0, defter: x.kit.defter, href: d ? ROOT + d.href : x.kit.defter ? ROOT + "defterler/?ders=" + x.kit.defter : C.KOK + x.kit.href };
    }), C.rozetler(r));
    /* defter kitlerinin halkası: okunan defter oranı */
    $$("[data-df-mini]").forEach(function (a) {
      C.defterDurumu(a.dataset.dfMini, true).then(function (o) {
        var renk = COLORS[C.DEFTER_DERS[a.dataset.dfMini].renk], h = $(".ring-mini", a);
        if (h) h.outerHTML = halka(o.pct, renk);
        fill($(".mono", a), o.n ? o.o + "/" + o.n + " defter" : "yakında");
      });
    });
  }

  /* ---------- Kitlerim: varsayılanlar (onboarding seçimi) + elle eklenenler; "Kit ekle" arama penceresi ---------- */
  var panelP = null;
  function kitKarti(r) {
    var k = r.kit, col = COLORS[k.renk], d = k.ders ? dersler().filter(function (x) { return x.id === k.ders; })[0] : null;
    var o = d && d.son && d.son.o, pct = d ? d.pct : 0;
    var alt = !r.hazir ? "Kiti yolda; hazır olunca burada açılır." : d ? (o ? (o.bitenler >= o.n ? "Unit " + d.son.k.unit + " bitti!" : "Sıradaki: Bölüm " + (o.cur + 1) + " · " + o.curTitle) : "Henüz başlamadın") : k.defter ? "Not defterleri · geçen yılın müfredatı" : "Yazılıdan önce tek, odaklı paket.";
    var href = d ? ROOT + d.href : k.defter ? ROOT + "defterler/?ders=" + k.defter : k.href ? C.KOK + k.href : null;
    var chips = (r.varsayilan ? '<span class="chip chip--info" style="font-size:11px">sınıfından</span>' : "") + (r.eklendi ? '<span class="chip chip--ok" style="font-size:11px">eklendi</span>' : "") + (!r.hazir ? '<span class="chip chip--warn" style="font-size:11px">yakında</span>' : "") + (k.ders && C.DERSLER[k.ders] && C.DERSLER[k.ders].not ? '<span class="chip chip--warn" style="font-size:11px">' + esc(C.DERSLER[k.ders].not) + '</span>' : "");
    var ad = k.title.replace(/^AP\s+/, "").replace(/:.*$/, "");
    /* elle eklenen: köşede ×; sınıfından gelen ya da başlanmış kit: ⋯ → gizle / kaldır */
    var kose = r.eklendi
      ? '<button type="button" class="kit-slot__more" data-kit-cikar="' + k.id + '" data-ad="' + esc(ad) + '" aria-label="' + esc(ad) + ' kitini raftan kaldır">×</button>'
      : '<button type="button" class="kit-slot__more" data-kit-menu="' + k.id + '" aria-haspopup="menu" aria-expanded="false" aria-label="' + esc(ad) + ' seçenekleri">⋯</button>' +
        '<div class="kit-menu" role="menu" hidden><button type="button" role="menuitem" data-kit-cikar="' + k.id + '" data-ad="' + esc(ad) + '" data-gizle="' + r.varsayilan + '">' + (r.varsayilan ? "Raftan gizle" : "Raftan kaldır") + '</button></div>';
    var cizim = k.ders ? C.DERSLER[k.ders].art : k.defter ? C.DEFTER_DERS[k.defter].art : ({ calc: "calc", micro: "macro" })[k.id] || "cep";
    var ic = '<div class="kit-card__band"><span class="bob-dot" aria-hidden="true"></span><span class="kit-card__code">' + esc(k.code) + '</span>' + art(cizim, col) + '</div>' +
      '<div class="kit-card__body">' + (chips ? '<div class="kit-card__chips">' + chips + '</div>' : "") +
      '<span class="kit-card__title">' + esc(k.title.replace(/^AP\s+/, "")) + '</span><span class="kit-card__meta">' + esc(alt) + '</span>' +
      (d ? '<div class="kit-card__progress"><div class="progress progress--thin" role="progressbar" aria-label="' + esc(k.title) + ' ilerleme" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><span style="--w:' + pct + '%"></span></div><span class="mono muted">%' + pct + '</span></div>' : "") +
      (k.defter ? '<div class="kit-card__progress" data-df-durum="' + k.defter + '"><div class="progress progress--thin" role="progressbar" aria-label="' + esc(k.title) + ' okunan defterler" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><span style="--w:0%"></span></div><span class="mono muted">…</span></div>' : "") + '</div>';
    if (kilitliMi(k.ders || k.defter)) ic += kilitRozet();
    var stil = ' style="--c:' + col + ';--rot:0deg"';
    return '<div class="kit-slot">' + (href ? '<a class="kit-card" href="' + href + '"' + stil + '>' + ic + '</a>' : '<div class="kit-card" data-yakinda="true"' + stil + '>' + ic + '</div>') +
      kose + '</div>';
  }
  function kitlerim() {
    var raf = C.raf(panelP).filter(function (r) { return r.rafta; });
    fill('[data-k="my-courses"]', raf.map(kitKarti).join("") +
      '<button type="button" class="kit-add-card" data-k="kit-ekle" aria-haspopup="dialog"><svg class="kit-add-card__ants" aria-hidden="true"><rect x="1" y="1" rx="23" ry="23"/></svg><span class="kit-add-card__plus" aria-hidden="true">+</span><strong>Kit ekle</strong><span class="muted" style="font-size:13px">' + (raf.length ? "Başka bir dersi de rafına koy" : "Rafın boş; aradığın kiti bul") + '</span></button>');
    defterDurumlari();
  }
  /* defter kartları: "x/y defter okundu" (defter listeleri canlı siteden gelir) */
  function defterDurumlari() {
    $$("[data-df-durum]").forEach(function (el) {
      C.defterDurumu(el.dataset.dfDurum, HESAPLI).then(function (r) {
        var pb = $(".progress", el);
        $("span", pb).style.setProperty("--w", r.pct + "%"); pb.setAttribute("aria-valuenow", r.pct);
        fill($(".mono", el), r.n ? r.o + "/" + r.n + " okundu" : "yakında");
      });
    });
  }
  function kitAra(s) { return String(s || "").toLocaleLowerCase("tr-TR").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ı/g, "i"); }
  function kitEkleAc(acan) {
    var f = "hepsi", q = "", eski = $(".kit-modal"); if (eski) eski.remove();
    var m = document.createElement("div");
    m.className = "kit-modal";
    m.innerHTML = '<div class="kit-modal__bg" data-kapat></div><div class="kit-modal__box card" role="dialog" aria-modal="true" aria-labelledby="ke-h">' +
      '<div class="row" style="align-items:center;justify-content:space-between"><h2 class="h3" id="ke-h">Kit ekle</h2><button type="button" class="btn btn--ghost btn--sm" data-kapat>Kapat</button></div>' +
      '<label class="field"><span class="sr-only">Kit ara</span><input type="search" data-k="kit-q" placeholder="Ders, kod ya da terim: macro, stat, crucible, migration…" autocomplete="off"></label>' +
      '<div class="row" style="gap:6px" role="group" aria-label="Kit türü"><button type="button" class="filter" data-kf="hepsi" aria-pressed="true">Hepsi</button><button type="button" class="filter" data-kf="ap" aria-pressed="false">Sınav kitleri (AP)</button><button type="button" class="filter" data-kf="okul" aria-pressed="false">10. sınıf</button><button type="button" class="filter" data-kf="cep" aria-pressed="false">Cep kitleri</button></div>' +
      '<div class="kit-results" data-k="kit-sonuc" aria-live="polite"></div></div>';
    body.appendChild(m);
    var inp = $('[data-k="kit-q"]', m);
    function ciz() {
      $$("[data-kf]", m).forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.kf === f)); });
      var t = kitAra(q).trim();
      var l = C.raf(panelP).filter(function (r) { return (f === "hepsi" || r.kit.tur === f) && (!t || kitAra(r.kit.title + " " + r.kit.code + " " + r.kit.ara).indexOf(t) > -1); });
      fill($('[data-k="kit-sonuc"]', m), l.length ? l.map(function (r) {
        var k = r.kit, d = k.ders ? C.KITLER.filter(function (x) { return x.ders === k.ders; }).length : 0, du = k.defter ? C.DEFTER_UNITELER.filter(function (x) { return x.ders === k.defter; }).length : 0;
        return '<div class="kit-result"><span class="kit-result__sq" style="--c:' + COLORS[k.renk] + '" aria-hidden="true"></span><span class="stack" style="gap:2px;flex:1;min-width:0"><strong>' + esc(k.title) + '</strong><span class="mono muted" style="font-size:12px">' + esc(k.code) + ' · ' + (r.hazir ? (d ? d + " ünite hazır" : du ? du + " ünite defteri" : "hazır") : "yakında") + '</span></span>' +
          (r.rafta ? '<span class="chip chip--ok">Rafında ✓</span>' : '<button type="button" class="btn btn--primary btn--sm" data-kit-ekle="' + k.id + '">Ekle</button>') + '</div>';
      }).join("") : '<div class="stack" style="gap:10px;align-items:flex-start;padding:12px 0"><span class="hand" style="font-size:26px">bulamadık…</span><span class="muted">Hangi kit lazım? İstek bırak, hazırlanırsa rafına düşsün.</span><button type="button" class="btn btn--ghost btn--sm" data-k="kit-istek">İstek bırak</button></div>');
    }
    function kapat() { m.remove(); document.removeEventListener("keydown", tus); if (acan && acan.focus) acan.focus(); }
    function tus(e) {
      if (e.key === "Escape") { kapat(); return; }
      if (e.key !== "Tab") return;
      var odak = $$('button, input, [href]', $(".kit-modal__box", m)).filter(function (x) { return !x.disabled && x.offsetParent !== null; });
      if (!odak.length) return;
      var ilk = odak[0], son = odak[odak.length - 1];
      if (e.shiftKey && document.activeElement === ilk) { e.preventDefault(); son.focus(); } else if (!e.shiftKey && document.activeElement === son) { e.preventDefault(); ilk.focus(); }
    }
    document.addEventListener("keydown", tus);
    inp.addEventListener("input", function () { q = inp.value; ciz(); });
    m.addEventListener("click", function (e) {
      if (e.target.closest("[data-kapat]")) { kapat(); return; }
      var b = e.target.closest("[data-kf]"); if (b) { f = b.dataset.kf; ciz(); return; }
      var a = e.target.closest("[data-kit-ekle]");
      if (a) { var kk = C.KATALOG.filter(function (x) { return x.id === a.dataset.kitEkle; })[0]; C.rafaEkle(a.dataset.kitEkle); ciz(); kitlerim(); toast(kk.title.replace(/^AP\s+/, "").replace(/:.*$/, "") + " rafına eklendi"); return; }
      if (e.target.closest('[data-k="kit-istek"]')) toast("İstek kutusu yakında; şimdilik yöneticiye yaz.");
    });
    ciz();
    setTimeout(function () { inp.focus(); }, 30);
  }
  function kitDinle() {
    document.addEventListener("click", function (e) {
      var ac = e.target.closest('[data-k="kit-ekle"]');
      if (ac) { if (!HESAPLI) { toast("Örnek görünüm; önce giriş yap"); return; } kitEkleAc(ac); return; }
      var mb = e.target.closest("[data-kit-menu]");
      $$(".kit-menu").forEach(function (x) { if (!mb || x !== mb.nextElementSibling) { x.hidden = true; if (x.previousElementSibling) x.previousElementSibling.setAttribute("aria-expanded", "false"); } });
      if (mb) { var mn = mb.nextElementSibling; mn.hidden = !mn.hidden; mb.setAttribute("aria-expanded", String(!mn.hidden)); if (!mn.hidden) mn.querySelector("button").focus(); return; }
      var c = e.target.closest("[data-kit-cikar]");
      if (c) { var vs = c.dataset.gizle === "true"; C.raftanCikar(c.dataset.kitCikar); kitlerim(); toast(c.dataset.ad + (vs ? " raftan gizlendi; Kit ekle'den geri getirebilirsin" : " raftan kaldırıldı")); }
    });
  }

  /* ---------- Defterler: merkez (?), ünite (?u=), okuma (?u=&b=) ---------- */
  function trSade(s) { return String(s || "").toLocaleLowerCase("tr-TR").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ı/g, "i"); }
  pages.defterler = function () {
    if (!C || !window.KDEFTER) return;
    var kok = $('[data-k="df-kok"]'), uid = param("u"), slug = param("b");
    var u = uid ? C.defterUnite(uid) : null;
    if (engelKontrol()) return;
    function bitti() { kok.removeAttribute("aria-busy"); }
    function hata() { kok.innerHTML = '<a class="btn btn--link" style="align-self:flex-start" href="' + ROOT + 'defterler/">← Defterler</a><section class="card empty"><div class="stack" style="gap:12px"><span class="hand" style="font-size:28px">hay aksi</span><h1 class="h2" style="font-size:30px">Defter şu an yüklenemedi.</h1><p class="muted">İnternetini kontrol edip sayfayı yenile.</p></div></section>'; bitti(); }
    if (u && !HESAPLI && u.unit > 1) {
      kok.innerHTML = '<a class="btn btn--link" style="align-self:flex-start" href="' + ROOT + 'defterler/?ders=' + u.ders + '">← Defterler</a>' + misafirPerde(C.DEFTER_DERS[u.ders].ad + " · Unit " + u.unit + " defterleri ücretsiz hesapla açılır");
      bitti(); return;
    }
    if (u && kilitliMi(u.ders)) {
      kok.innerHTML = '<a class="btn btn--link" style="align-self:flex-start" href="' + ROOT + 'defterler/?ders=' + u.ders + '">← Defterler</a>' + kilitPerde(kilitliMi(u.ders), C.DEFTER_DERS[u.ders].ad + " defterleri şimdilik kilitli");
      kilitTazele(u.ders); bitti(); return;
    }
    if (u && slug) { defterOkuma(kok, u, slug, bitti, hata); return; }
    if (u) { defterUnitesi(kok, u, bitti, hata); return; }
    defterMerkezi(kok, bitti);
  };

  function uniteRengi(u) { return uniteTonu(COLORS[C.DEFTER_DERS[u.ders].renk], u.unit); }
  /* "AP Macroeconomics" ya da "10. sınıf · Chemistry" */
  function dersEtiketi(d) { return d.grup === "okul" ? "10. sınıf · " + d.ad : "AP " + d.ad; }
  function defterMerkezi(kok, bitti) {
    var ual = C.ualMi();   /* diğer okullar: 10. sınıf okul defterleri gösterilmez */
    var tum = Object.keys(C.DEFTER_DERS).filter(function (d) { return ual || C.DEFTER_DERS[d].grup !== "okul"; }), son = C.sonDefter(), f = param("ders") || (son && son.ders) || "";
    if (tum.indexOf(f) < 0) f = ual && (param("grup") === "okul" || (!param("grup") && HESAPLI && (H.profil() || {}).sinif === 10)) ? "precalc" : "macro";
    var grup = C.DEFTER_DERS[f].grup;
    function grupDersleri(g) { return tum.filter(function (d) { return C.DEFTER_DERS[d].grup === g; }); }
    document.title = "Defterler · Kitpath";
    kok.innerHTML = '<section class="hello rise"><h1 class="display" style="font-size:clamp(44px,5vw,60px)"><span class="hl">Defterler</span></h1><span class="hand" style="font-size:24px;rotate:-2deg">videosuz çalışmak isteyene</span></section>' +
      '<label class="df-ara rise d1"><span class="sr-only">Defterlerde ara</span>' + I.ara + '<input type="search" data-k="df-q" placeholder="Terim ya da konu ara: opportunity cost, GDP, function, mole…" autocomplete="off"></label>' +
      '<div class="df-raf rise d1" data-k="df-raf" role="group" aria-label="Ders seç"></div>' +
      '<div class="df-secili rise d2" data-k="df-secili"></div><p class="muted rise d2" style="font-size:13px;margin:-14px 0 0" data-k="df-grup-not" hidden>Geçen yılın (2025-26) müfredatına göre; bu yıl konular farklı olabilir.</p>' +
      '<div class="kit-grid df-units rise d2" data-k="df-uniteler"></div><div class="df-sonuc" data-k="df-sonuc" hidden></div>';
    var grid = $('[data-k="df-uniteler"]'), sonuc = $('[data-k="df-sonuc"]'), inp = $('[data-k="df-q"]');
    /* ders rafı: AP ve okul dersleri iki sıra görsel kart; seçili olan kalkar, altında üniteleri açılır */
    function cipler() {
      fill('[data-k="df-raf"]', (ual ? ["ap", "okul"] : ["ap"]).map(function (g) {
        return '<div class="df-raf__grup"><span class="eyebrow">// ' + (g === "ap" ? "AP sınavları" : "10. sınıf okul dersleri") + '</span><div class="df-raf__sira">' + grupDersleri(g).map(function (d) {
          var D = C.DEFTER_DERS[d], col = COLORS[D.renk], n = C.DEFTER_UNITELER.filter(function (x) { return x.ders === d; }).length;
          return '<button type="button" class="df-ders" data-ders="' + d + '" aria-pressed="' + (d === f) + '" style="--c:' + col + '"><span class="df-ders__band" aria-hidden="true"><span class="bob-dot"></span>' + dersCizimi(d, col) + '<span class="df-ders__tik">' + I.check + '</span></span>' +
            '<span class="df-ders__ad">' + esc(D.kisa || D.ad) + '</span><span class="df-ders__n mono">' + n + ' ÜNİTE</span></button>';
        }).join("") + '</div></div>';
      }).join(""));
    }
    function kartlar() {
      grup = C.DEFTER_DERS[f].grup;
      $$(".df-ders", kok).forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.ders === f)); });
      $('[data-k="df-grup-not"]').hidden = grup !== "okul";
      fill('[data-k="df-secili"]', '<span class="df-secili__dot" style="--c:' + COLORS[C.DEFTER_DERS[f].renk] + '" aria-hidden="true"></span><h2 class="h3" style="font-size:26px">' + esc(dersEtiketi(C.DEFTER_DERS[f])) + '</h2><span class="hand" style="font-size:22px">ünite seç, defterini aç</span>');
      var us = C.DEFTER_UNITELER.filter(function (x) { return x.ders === f; });
      fill(grid, us.map(function (x) {
        var col = uniteRengi(x), kilitli = !HESAPLI && x.unit > 1;
        return '<a class="kit-card" href="' + ROOT + 'defterler/?u=' + x.id + '" style="--c:' + col + ';--rot:0deg"><div class="kit-card__band"><span class="bob-dot" aria-hidden="true"></span><span class="kit-card__code">UNIT ' + x.unit + '</span>' + uniteArt(x.ders, x.unit, col, C.DEFTER_DERS[x.ders].art) + '</div>' +
          '<div class="kit-card__body"><span class="kit-card__title" style="font-size:20px">' + esc(x.baslik) + '</span><span class="kit-card__meta" data-say="' + x.id + '">' + (kilitli ? '<span class="row" style="align-items:center;gap:6px">' + I.lock + " Ücretsiz hesapla açılır</span>" : "…") + '</span></div>' + (kilitliMi(x.ders) ? kilitRozet() : "") + '</a>';
      }).join(""));
      us.forEach(function (x) {
        if (!HESAPLI && x.unit > 1) return;
        C.defterListesi(x).then(function (K) {
          var oku_ = C.okunanlar(K.store), n = (K.episodes || []).length, o = (K.episodes || []).filter(function (e) { return oku_[e.slug]; }).length;
          fill('[data-say="' + x.id + '"]', n + " defter" + (o ? " · " + o + " okundu ✓" : ""));
        }, function () {
          /* henüz yayında değil: kart tıklanmaz */
          var m = $('[data-say="' + x.id + '"]'); if (!m) return;
          m.innerHTML = '<span class="chip chip--warn">yakında</span>';
          var a = m.closest("a"); a.removeAttribute("href"); a.dataset.yakinda = "true"; a.setAttribute("aria-disabled", "true");
        });
      });
    }
    $('[data-k="df-raf"]').addEventListener("click", function (e) {
      var b = e.target.closest(".df-ders"); if (!b || b.dataset.ders === f) return;
      f = b.dataset.ders; history.replaceState(null, "", "?ders=" + f); kartlar(); if (inp.value.trim()) ara();
      var hedef = $('[data-k="df-secili"]'); if (hedef && hedef.getBoundingClientRect().top > innerHeight * .7) hedef.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    /* arama: önce başlık/terim, sonra (3+ harfte) seçili dersin defterlerinin içinde bölüm bölüm */
    var jeton = 0, zam = null;
    function ara() {
      var q = trSade(inp.value.trim()), my = ++jeton;
      grid.hidden = !!q; sonuc.hidden = !q;
      if (q.length < 2) { sonuc.innerHTML = q ? '<p class="muted">Biraz daha yaz…</p>' : ""; return; }
      var us = C.DEFTER_UNITELER.filter(function (x) { return x.ders === f && (HESAPLI || x.unit === 1); });
      var bul = [], derin = [];
      function ciz(durum) {
        if (my !== jeton) return;
        var satir = bul.concat(derin).slice(0, 40);
        sonuc.innerHTML = '<div class="row" style="align-items:center;justify-content:space-between"><span class="mono muted">' + esc(C.DEFTER_DERS[f].ad.toUpperCase()) + ' · ' + satir.length + ' SONUÇ</span><span class="mono muted">' + esc(durum || "") + '</span></div>' +
          (satir.length ? satir.map(function (r) {
            return '<a class="df-hit card" href="' + r.href + '" style="--c:' + r.renk + '"><span class="df-hit__sq" aria-hidden="true"></span><span class="stack" style="gap:3px;min-width:0"><strong>' + esc(r.baslik) + '</strong><span class="muted" style="font-size:13px">' + r.alt + '</span></span><span class="mono muted">' + esc(r.etiket) + '</span></a>';
          }).join("") : (durum ? "" : '<div class="stack" style="gap:8px;padding:20px 0"><span class="hand" style="font-size:26px">bulamadık…</span><span class="muted">Başka bir kelime dene ya da yukarıdan dersi değiştir.' + (HESAPLI ? "" : " Hesapsız yalnızca Unit 1 defterlerinde arıyorsun.") + '</span></div>'));
      }
      function vurgu(metin) {
        var t = trSade(metin), i = t.indexOf(q); if (i < 0) return esc(metin.slice(0, 120));
        var a = Math.max(0, i - 50), b = Math.min(metin.length, i + q.length + 70);
        return (a ? "…" : "") + esc(metin.slice(a, i)) + '<mark class="df-mark">' + esc(metin.slice(i, i + q.length)) + '</mark>' + esc(metin.slice(i + q.length, b)) + (b < metin.length ? "…" : "");
      }
      Promise.all(us.map(function (x) { return C.defterListesi(x).then(function (K) { return { u: x, K: K }; }, function () { return null; }); })).then(function (ls) {
        if (my !== jeton) return;
        ls = ls.filter(Boolean);
        ls.forEach(function (o) {
          (o.K.episodes || []).forEach(function (e) {
            var hay = trSade([e.code, e.title, e.en].concat(e.terms || []).join(" "));
            if (hay.indexOf(q) > -1) bul.push({ href: ROOT + "defterler/?u=" + o.u.id + "&b=" + e.slug, renk: uniteRengi(o.u), baslik: e.title, alt: esc(e.en || "") + ((e.terms || []).filter(function (t) { return trSade(t).indexOf(q) > -1; }).slice(0, 3).map(function (t) { return ' · <mark class="df-mark">' + esc(t) + "</mark>"; }).join("")), etiket: "UNIT " + o.u.unit + " · " + (e.code || "") });
          });
        });
        if (q.length < 3) { ciz(); return; }
        var is_ = []; ls.forEach(function (o) { (o.K.episodes || []).forEach(function (e) { is_.push({ u: o.u, e: e }); }); });
        var k = 0;
        ciz("içerikte aranıyor 0/" + is_.length);
        (function sira() {
          if (my !== jeton) return;
          if (k >= is_.length) { ciz(); return; }
          var it = is_[k++];
          C.defterOku(it.u, it.e.slug).then(function (D) {
            window.KDEFTER.metinler(D).forEach(function (m, i) {
              if (trSade(m).indexOf(q) > -1) derin.push({ href: ROOT + "defterler/?u=" + it.u.id + "&b=" + it.e.slug + "&bolum=" + i, renk: uniteRengi(it.u), baslik: it.e.title + " · " + window.KDEFTER.duz(D.bolumler[i].baslik), alt: vurgu(m.replace(/\s+/g, " ")), etiket: "BÖLÜM " + (i + 1) });
            });
          }, function () {}).then(function () { ciz(k < is_.length ? "içerikte aranıyor " + k + "/" + is_.length : ""); sira(); });
        })();
      });
    }
    inp.addEventListener("input", function () { clearTimeout(zam); zam = setTimeout(ara, 280); });
    cipler(); kartlar(); bitti();
  }

  function defterUnitesi(kok, u, bitti, hata) {
    var d = C.DEFTER_DERS[u.ders], col = uniteRengi(u);
    document.title = d.ad + " Unit " + u.unit + " defterleri · Kitpath";
    C.defterListesi(u).then(function (K) {
      var oku_ = C.okunanlar(K.store), eps = K.episodes || [], o = eps.filter(function (e) { return oku_[e.slug]; }).length;
      kok.innerHTML = '<a class="btn btn--link" style="align-self:flex-start" href="' + ROOT + 'defterler/?ders=' + u.ders + '">← Defterler</a>' +
        '<section class="hello rise" style="--macro:' + col + '"><div class="stack" style="gap:6px"><span class="eyebrow accent">// ' + esc(dersEtiketi(d)) + ' · Unit ' + u.unit + '</span><h1 class="display" style="font-size:clamp(36px,4.5vw,52px)">' + esc(u.baslik) + '</h1>' +
          (K.not ? '<span class="muted" style="font-size:13px">' + esc(K.not) + '</span>' : "") + '</div>' +
        '<div class="stack" style="gap:6px;min-width:180px"><span class="mono muted">' + o + ' / ' + eps.length + ' OKUNDU</span><div class="progress"><span style="--w:' + (eps.length ? Math.round(100 * o / eps.length) : 0) + '%;--c:' + col + '"></span></div></div></section>' +
        '<div class="df-eps rise d1">' + eps.map(function (e, i) {
          return '<a class="df-ep card" href="' + ROOT + 'defterler/?u=' + u.id + '&b=' + e.slug + '" style="--c:' + col + '"><span class="df-ep__no">' + esc(e.code || i + 1) + '</span><span class="stack" style="gap:3px;min-width:0"><strong>' + esc(e.title) + '</strong><span class="mono muted" style="font-size:12px" lang="en">' + esc(e.en || "") + '</span></span>' + (!HESAPLI && i > 0 ? '<span class="df-ep__go" aria-label="Ücretsiz hesapla açılır">' + I.lock + '</span>' : oku_[e.slug] ? '<span class="chip chip--ok">okundu ✓</span>' : '<span class="df-ep__go" aria-hidden="true">→</span>') + '</a>';
        }).join("") + '</div>';
      bitti();
    }, hata);
  }

  /* orijinal defter: canlı sitedeki defter motoru, v2 içinde çerçevede (defterler/cerceve.html) */
  function cerceveAdresi(u, slug, bolum) {
    /* kitsiz ünitenin kiti yayına girip KITLER'e eklenince defter kendiliğinden "ikisi" moduna geçer (konu listesi + kit) */
    var liste = u.liste === "defter/defter-liste.js" && C.kit(u.id) ? "ikisi" : u.liste;
    return ROOT + "defterler/cerceve.html?u=" + u.id + "&yol=" + encodeURIComponent(u.path) + "&liste=" + encodeURIComponent(liste) + "&b=" + encodeURIComponent(slug) +
      "&tema=" + (document.documentElement.getAttribute("data-theme") === "dark" ? "koyu" : "acik") + (HESAPLI ? "" : "&misafir=1") + (bolum > 0 ? "#b" + (bolum + 1) : "");
  }
  /* çerçeveden gelen mesajlar: bağlantılar v2 sayfalarına, okunan başlık "son defterin" kartına */
  var cerceveBilgi = null;
  window.addEventListener("message", function (e) {
    if (e.origin !== location.origin || !e.data || !e.data.kitoraDefter || !cerceveBilgi) return;
    var d = e.data, cb = cerceveBilgi;
    if (d.kitoraDefter === "esc") { document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" })); return; }
    if (d.kitoraDefter === "bolum") { C.sonDefter({ u: cb.u.id, b: cb.slug, ders: cb.u.ders, baslik: cb.baslik, unite: cb.u.unit, bolum: d.bolum, toplam: d.toplam, t: Date.now() }); return; }
    if (d.kitoraDefter !== "git") return;
    var url; try { url = new URL(d.href); } catch (x) { return; }
    var yol = url.pathname, hedefU = C.DEFTER_UNITELER.filter(function (x) { return yol.indexOf("/" + x.path) === 0; })[0];
    if (/\/kitpath\/giris\//.test(yol)) { location.href = ROOT + "giris/?mod=giris&devam=" + encodeURIComponent(buradan()); return; }
    if (/\/(ap|okul)\/defterler\/$/.test(yol)) { location.href = ROOT + "defterler/?ders=" + (hedefU || cb.u).ders; return; }
    if (hedefU && /\/defter\/$/.test(yol)) { location.href = ROOT + "defterler/?u=" + hedefU.id + (url.searchParams.get("b") ? "&b=" + encodeURIComponent(url.searchParams.get("b")) : ""); return; }
    if (hedefU && C.kit(hedefU.id) && /\/deneme\//.test(yol)) { location.href = ROOT + "unite/?kit=" + hedefU.id + "&sekme=deneme"; return; }
    if (hedefU && C.kit(hedefU.id) && yol === "/" + hedefU.path) { location.href = ROOT + "unite/?kit=" + hedefU.id + (url.hash ? "&slug=" + encodeURIComponent(url.hash.slice(1)) : ""); return; }
    if (hedefU) { location.href = ROOT + "defterler/?u=" + hedefU.id; return; }
    window.open(url.href, "_blank", "noopener");
  });
  function defterCercevesi(kap, u, slug, baslik, sinif) {
    var sd = C.sonDefter(), bas = parseInt(param("bolum"), 10);
    if (!(bas >= 0) && sd && sd.u === u.id && sd.b === slug) bas = sd.bolum;
    cerceveBilgi = { u: u, slug: slug, baslik: baslik };
    C.sonDefter({ u: u.id, b: slug, ders: u.ders, baslik: baslik, unite: u.unit, bolum: bas > 0 ? bas : 0, toplam: sd && sd.b === slug ? sd.toplam : 1, t: Date.now() });
    var kutu = document.createElement("div");
    kutu.className = "df-kutu " + (sinif || "");
    kutu.innerHTML = '<div class="df-arac" role="toolbar" aria-label="Defter görünümü"><button type="button" class="icon-btn" data-boy="-1" aria-label="Yazıyı küçült">A−</button><span class="mono muted" data-k="df-boy">%100</span><button type="button" class="icon-btn" data-boy="1" aria-label="Yazıyı büyüt">A+</button>' +
      '<button type="button" class="btn btn--ghost btn--sm" data-k="df-tam" aria-pressed="false">⛶ Tam ekran</button></div>';
    var f = document.createElement("iframe");
    f.className = "df-cerceve";
    f.title = baslik + " · not defteri";
    f.src = cerceveAdresi(u, slug, bas > 0 ? bas : 0);
    kutu.appendChild(f);
    kap.appendChild(kutu);
    /* büyütme: defterin yazı boyutu (bu cihazda hatırlanır) ve tam ekran */
    var BOY = [0.85, 1, 1.15, 1.3, 1.5, 1.75], bi = BOY.indexOf(Number(lsOku("kitora-defter-boyut")) || 1); if (bi < 0) bi = 1;
    function boyUygula() {
      fill($('[data-k="df-boy"]', kutu), "%" + Math.round(BOY[bi] * 100));
      $('[data-boy="-1"]', kutu).disabled = bi === 0; $('[data-boy="1"]', kutu).disabled = bi === BOY.length - 1;
      try { f.contentDocument.documentElement.style.zoom = BOY[bi]; } catch (x) {}
    }
    f.addEventListener("load", boyUygula);
    kutu.addEventListener("click", function (e) {
      var b = e.target.closest("[data-boy]");
      if (b) { bi = Math.max(0, Math.min(BOY.length - 1, bi + +b.dataset.boy)); lsYaz("kitora-defter-boyut", String(BOY[bi])); boyUygula(); return; }
      if (e.target.closest('[data-k="df-tam"]')) tam(!kutu.classList.contains("df-kutu--tam"));
    });
    /* tam ekran: defter sayfanın üstünü kaplar (tarayıcının tam ekran izni gerekmez); Esc ile çıkılır */
    function tam(on) {
      kutu.classList.toggle("df-kutu--tam", on);
      document.documentElement.classList.toggle("df-acik", on);
      var t = $('[data-k="df-tam"]', kutu);
      t.setAttribute("aria-pressed", String(on)); t.textContent = on ? "✕ Kapat" : "⛶ Tam ekran";
      t.focus();
    }
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && kutu.classList.contains("df-kutu--tam")) tam(false); });
    boyUygula();
    return f;
  }
  function lsOku(k) { try { return localStorage.getItem(k); } catch (x) { return null; } }
  function lsYaz(k, v) { try { localStorage.setItem(k, v); } catch (x) {} }
  function defterOkuma(kok, u, slug, bitti, hata) {
    C.defterListesi(u).then(function (K) {
      var ep = (K.episodes || []).filter(function (e) { return e.slug === slug; })[0];
      if (!ep) { hata(); return; }
      document.title = ep.title + " · Defter · Kitpath";
      /* hesapsız: yalnızca ilk defter */
      if (!HESAPLI && K.episodes[0] !== ep) {
        kok.innerHTML = '<a class="btn btn--link" style="align-self:flex-start" href="' + ROOT + 'defterler/?u=' + u.id + '">← Unit ' + u.unit + ' defterleri</a>' + misafirPerde(ep.title + " · ücretsiz hesapla açılır");
        bitti(); return;
      }
      kok.innerHTML = '<div class="row" style="align-items:center;justify-content:space-between;gap:12px"><a class="btn btn--link" href="' + ROOT + 'defterler/?u=' + u.id + '">← Unit ' + u.unit + ' defterleri</a><span class="mono muted">' + esc(dersEtiketi(C.DEFTER_DERS[u.ders]).toLocaleUpperCase("tr-TR")) + ' · UNIT ' + u.unit + ' · ' + esc(ep.code || "") + '</span></div>';
      defterCercevesi(kok, u, slug, ep.title, "df-kutu--sayfa");
      if (param("bolum") !== null) history.replaceState(null, "", "?u=" + u.id + "&b=" + slug);
      bitti();
    }, hata);
  }

  /* ---------- ders: ünite seçme ekranı (?d=macro) ---------- */
  pages.ders = function () {
    if (!C) return;
    var id = param("d"), d = C.DERSLER[id], kok = $('[data-k="ders-kok"]');
    if (!d) { location.replace(ROOT + "kitler/"); return; }
    if (engelKontrol()) return;
    if (HESAPLI) kilitTazele(id);
    var col = COLORS[d.renk || d.art], kits = C.KITLER.filter(function (k) { return k.ders === id; });
    var defterVar = C.DEFTER_UNITELER.some(function (u) { return u.ders === id; });
    document.title = "AP " + d.title + " · Kitpath";
    body.style.setProperty("--macro", col);
    kok.innerHTML = '<a class="btn btn--link" style="align-self:flex-start" href="' + ROOT + 'kitler/">← Tüm kitler</a>' +
      '<section class="ders-head rise" style="--c:' + col + '"><div class="ders-head__band" aria-hidden="true"><span class="bob-dot"></span>' + art(d.art, col) + '</div>' +
      '<div class="stack" style="gap:8px;flex:1;min-width:0"><span class="eyebrow accent">// ' + esc(d.code) + '</span><h1 class="display" style="font-size:clamp(36px,4.5vw,54px)">AP <span class="hl">' + esc(d.title) + '</span></h1>' +
      '<span class="muted">' + kits.length + ' ünite hazır · hangisinden başlamak istersin?</span></div>' +
      (defterVar ? '<a class="btn btn--ghost" href="' + ROOT + 'defterler/?ders=' + id + '">' + I.defter + ' Defterleri</a>' : "") + '</section>' +
      (kilitliMi(id) ? kilitPerde(kilitliMi(id), "AP " + d.title + " şimdilik kilitli", true) : "") +
      '<div class="kit-grid ders-uniteler rise d1" data-k="ders-uniteler"></div>';
    fill('[data-k="ders-uniteler"]', kits.map(function (k) {
      var o = C.ozet(k), kilitli = !HESAPLI && k.unit > 1, pct = o ? o.pct : 0;
      var durum = kilitli ? '<span class="row muted" style="align-items:center;gap:6px;font-size:14px">' + I.lock + ' Ücretsiz hesapla açılır</span>'
        : o && o.bitenler >= o.n ? '<span class="chip chip--ok">Bitti ✓</span>' : o ? '<span class="chip chip--info">Devam et · Bölüm ' + (o.cur + 1) + '</span>' : '<span class="chip chip--plain">Başla →</span>';
      var ucol = uniteTonu(col, k.unit);
      return '<a class="kit-card" href="' + ROOT + 'unite/?kit=' + k.id + '" style="--c:' + ucol + ';--rot:0deg"><div class="kit-card__band"><span class="bob-dot" aria-hidden="true"></span><span class="kit-card__code">UNIT ' + k.unit + '</span>' + uniteArt(id, k.unit, ucol, d.art) + '</div>' +
        '<div class="kit-card__body"><span class="kit-card__title" style="font-size:20px" data-ad="' + k.id + '">Unit ' + k.unit + '</span><span class="kit-card__meta" data-bilgi="' + k.id + '">…</span>' + durum +
        '<div class="kit-card__progress"><div class="progress progress--thin" role="progressbar" aria-label="Unit ' + k.unit + ' ilerleme" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><span style="--w:' + pct + '%"></span></div><span class="mono muted">%' + pct + '</span></div></div>' + (kilitliMi(id) ? kilitRozet(k.unit === 1 ? "Sadece 1. video açık" : "Quiz notu bekleniyor") : "") + '</a>';
    }).join(""));
    /* ünite adı ve bölüm/deneme sayısı kit-data.js'ten (sırayla yüklenir) */
    kits.forEach(function (k) {
      C.kitVerisi(k).then(function (K) {
        var ad = String(K.unitLabel || "").split(/\s+[—–-]\s+/).slice(1).join(" — ");
        if (ad) fill('[data-ad="' + k.id + '"]', esc(ad));
        var n = (K.episodes || []).length, den = K.denemeler && K.denemeler.count;
        fill('[data-bilgi="' + k.id + '"]', n + " bölüm" + (den ? " · " + den + " deneme" : ""));
      }, function () { fill('[data-bilgi="' + k.id + '"]', "yakında"); });
    });
  };

  /* ---------- Kitlerim sayfası ---------- */
  pages.kitlerim = function () {
    kitDinle();
    if (!HESAPLI) {
      ornekSerit("Bu bir örnek raf. Giriş yapınca sınıfına göre gelen kitlerin ve eklediklerin burada durur.");
      fill('[data-k="my-courses"]', D.courses.map(function (c) {
        return '<a class="card course-tile" href="' + ROOT + c.href + '"><div class="row" style="align-items:center;gap:12px"><span class="dot" style="--c:' + COLORS[c.art] + ';width:14px;height:14px;border-radius:4px"></span><span class="mono muted">' + esc(c.code) + '</span></div>' +
          '<span class="h3">' + esc(c.title) + '</span><span class="muted" style="font-size:13px">' + esc(c.next) + '</span>' +
          '<div class="row" style="align-items:center;gap:10px;margin-top:auto;flex-wrap:nowrap"><span class="display" style="font-size:30px">%' + c.pct + '</span><div class="progress progress--thin"><span style="--w:' + c.pct + '%;--c:' + COLORS[c.art] + '"></span></div></div></a>';
      }).join(""));
      return;
    }
    if (engelKontrol(true)) return;
    function ciz(p) {
      panelP = p || panelP || {};
      var engel = H.engel(panelP) === "not";
      $('[data-k="kit-engel"]').hidden = !engel;
      kitlerim();
    }
    ciz(H.profil());
    H.profilYenile().then(ciz, function () {});
  };

  /* ---------- Notlarım sayfası ---------- */
  pages.notlarim = function () {
    if (HESAPLI && !notTakibi()) {
      var mm = $("main") || $("#main");
      if (mm) mm.innerHTML = '<section class="card empty" style="margin-top:24px"><div class="stack" style="flex:1 1 320px;gap:12px"><span class="hand" style="color:var(--macro);font-size:28px">burası sana kapalı</span><h1 class="h2" style="font-size:30px">Quiz ve not takibi Üsküdar Amerikan Lisesi 11. sınıflar içindir.</h1><p class="muted">Bütün kitler ve defterler sana açık; rafından devam edebilirsin.</p><a class="btn btn--primary" style="align-self:flex-start" href="' + ROOT + 'kitlerim/">Kitlerime git</a></div></section>';
      return;
    }
    var f = "hepsi", satir = [];
    function tablo() {
      var adlar = [];
      satir.forEach(function (g) { if (adlar.indexOf(g.ders) < 0) adlar.push(g.ders); });
      if (f !== "hepsi" && adlar.indexOf(f) < 0) f = "hepsi";
      fill('[data-k="filters"]', ["hepsi"].concat(adlar).map(function (d) { return '<button type="button" class="filter" data-filter="' + esc(d) + '" aria-pressed="' + (d === f) + '">' + esc(d === "hepsi" ? "Hepsi" : d.replace(/^(AP|Honours)\s+/, "")) + '</button>'; }).join(""));
      var g = satir.filter(function (x) { return f === "hepsi" || x.ders === f; });
      fill('[data-k="grades"]', g.length ? g.map(function (x) {
        return '<tr><td><span class="row" style="align-items:center;gap:10px;flex-wrap:nowrap"><span class="dot" style="--c:' + x.renk + '"></span>' + esc(x.title) + '</span></td><td class="muted">' + esc(x.date) + '</td><td><span class="chip ' + x.cls + '">' + esc(x.status) + '</span></td><td class="num">' + esc(x.score) + '</td></tr>';
      }).join("") : '<tr><td colspan="4" class="muted">Henüz quiz yok. Hocan quiz açınca burada görünür.</td></tr>');
    }
    document.addEventListener("click", function (e) { var b = e.target.closest("[data-filter]"); if (b) { f = b.dataset.filter; tablo(); } });
    if (!HESAPLI) {
      ornekSerit("Bu örnek notlar. Giriş yapınca kendi quizlerin ve notların burada görünür.");
      fill('[data-k="quizzes"]', D.quizzes.filter(function (q) { return q.status === "open"; }).map(function (q) {
        return '<div class="quiz-item"><div class="date-tile" style="--c:' + COLORS[q.course] + '"><b>' + q.day + '</b><small>' + q.mon + '</small></div><div class="stack" style="flex-grow:1;gap:3px;min-width:0"><strong style="font-size:15px">' + esc(q.title) + '</strong><span class="muted" style="font-size:13px">' + esc(q.meta) + '</span></div><span class="chip ' + (q.urgent ? "chip--hot" : "chip--plain") + ' mono">' + esc(q.left) + '</span></div>';
      }).join(""));
      satir = D.grades.map(function (g) { return { ders: { stats: "AP Statistics", hug: "AP Human Geography" }[g.course] || g.course, renk: COLORS[g.course], title: g.title, date: g.date, status: g.status, cls: g.open ? "chip--warn" : "chip--ok", score: g.score }; });
      tablo();
      return;
    }
    if (engelKontrol(true)) return;
    function ciz(p) {
      p = p || {};
      var bek = p.bekleyen || [], yak = p.yaklasan || [];
      var engel = H.engel(p) === "not" && bek.length > 0;
      $('[data-k="alert"]').hidden = !engel;
      if (engel) notKutusu(bek);
      fill('[data-k="quizzes"]', yak.length ? yak.map(quizSatiri).join("") : '<p class="muted" style="font-size:14px;line-height:1.55">Yaklaşan quiz yok.</p>');
      satir = [];
      function ekle(q, status, cls, score) { satir.push({ ders: q.ders, renk: COLORS[C.dersRengi(q.ders)], title: q.ders + " · " + q.baslik, t: new Date(q.son_tarih), date: tarihUzun(q.son_tarih), status: status, cls: cls, score: score }); }
      bek.forEach(function (q) { ekle(q, "Not bekliyor", "chip--hot", "— / " + sayi(q.max_puan)); });
      yak.forEach(function (q) { ekle(q, "Açık", "chip--warn", "— / " + sayi(q.max_puan)); });
      (p.notlar || []).forEach(function (q) { ekle(q, "Notlandı", "chip--ok", sayi(q.puan) + " / " + sayi(q.max_puan)); });
      satir.sort(function (a, b) { return b.t - a.t; });
      tablo();
    }
    ciz(H.profil());
    H.profilYenile().then(ciz, function () { toast("Bağlantı kurulamadı; son kaydedilen bilgiler gösteriliyor"); });
    notFormu(function (p) { ciz(p); var dv = devamAdresi(); if (dv && !H.engel(p)) setTimeout(function () { location.replace(dv); }, 900); });
  };

  function panelOrnek() {
    var durum = param("durum");
    $('[data-k="alert"]').hidden = durum !== "engel";
    $('[data-k="empty"]').hidden = durum !== "bos";
    $('[data-k="full"]').hidden = durum === "bos";
    if (durum === "engel") { $$("[data-dim]").forEach(function (x) { x.classList.add("dimmed"); x.setAttribute("aria-disabled", "true"); }); fill('[data-k="cheer"]', "not gelince devam!"); }
    if (durum === "bos") fill('[data-k="cheer"]', "hoş geldin, rafın seni bekliyor");
    fill('[data-k="quizzes"]', D.quizzes.filter(function (q) { return q.status === "open"; }).map(function (q) {
      return '<div class="quiz-item"><div class="date-tile" style="--c:' + COLORS[q.course] + '"><b>' + q.day + '</b><small>' + q.mon + '</small></div>' +
        '<div class="stack" style="flex-grow:1;gap:3px;min-width:0"><strong style="font-size:15px">' + esc(q.title) + '</strong><span class="muted" style="font-size:13px">' + esc(q.meta) + '</span></div>' +
        '<span class="chip ' + (q.urgent ? "chip--hot" : "chip--plain") + ' mono">' + esc(q.left) + '</span></div>';
    }).join(""));
    fill('[data-k="my-courses"]', D.courses.map(function (c) {
      return '<a class="card course-tile" href="' + ROOT + c.href + '"><div class="row" style="align-items:center;gap:12px"><span class="dot" style="--c:' + COLORS[c.art] + ';width:14px;height:14px;border-radius:4px"></span><span class="mono muted">' + esc(c.code) + '</span></div>' +
        '<span class="h3">' + esc(c.title) + '</span><span class="muted" style="font-size:13px">' + esc(c.next) + '</span>' +
        '<div class="row" style="align-items:center;gap:10px;margin-top:auto;flex-wrap:nowrap"><span class="display" style="font-size:30px">%' + c.pct + '</span><div class="progress progress--thin" role="progressbar" aria-label="' + esc(c.title) + ' ilerleme" aria-valuenow="' + c.pct + '" aria-valuemin="0" aria-valuemax="100"><span style="--w:' + c.pct + '%;--c:' + COLORS[c.art] + '"></span></div></div></a>';
    }).join(""));
    fill('[data-k="grades"]', D.grades.filter(function (g) { return !g.open; }).map(function (g) {
      return '<tr><td><span class="row" style="align-items:center;gap:10px;flex-wrap:nowrap"><span class="dot" style="--c:' + COLORS[g.course] + '"></span>' + esc(g.title) + '</span></td><td class="muted">' + esc(g.date) + '</td><td class="num">' + esc(g.score) + '</td></tr>';
    }).join(""));
    fill('[data-k="badges"]', D.badges.slice(0, 6).map(badge).join(""));
    var cal = { hucreler: D.calendar, bugun: D.todayIndex };
    panelEk({ seri: D.user.streak, bolum: 7, soru: 85, dogru: 66 }, cal, D.courses.map(function (c) { return { ad: c.title, renk: COLORS[c.art], pct: c.pct, href: ROOT + c.href }; }),
      D.badges.map(function (b) { return { name: b.name, glyph: b.glyph, how: b.how, c: b.c || "#F4A97A", rot: b.rot || "2deg", got: !!b.got, n: b.got ? 1 : (b.name === "7 gün seri" ? 3 : 0), hedef: b.name === "7 gün seri" ? 7 : 1 }; }));
    if (!D.quizzes.some(function (q) { return q.status === "open"; })) fill('[data-k="quizzes"]', bosQuiz());
  }

  /* ---------- deneme (Bluebook): ekranın kendisi assets/bluebook.js'te ---------- */
  pages.deneme = function () {
    if (!C) return;
    var k = C.kit(param("kit")) || C.kit("macro-u1"), no = parseInt(param("n"), 10) || 1;
    if (!HESAPLI) { location.replace(ROOT + "unite/?kit=" + k.id + "&sekme=deneme"); return; }   /* hesapsız: denemeler kilitli */
    if (engelKontrol()) return;
    if (kilitliMi(k.ders)) { location.replace(ROOT + "unite/?kit=" + k.id + "&sekme=deneme"); return; }
    var BB = window.KPBluebook, geri = ROOT + "unite/?kit=" + k.id;
    if (!BB) return;
    Promise.all([C.denemeVerisi(k), C.sekiller()]).then(function (r) {
      var T = (r[0].tests || []).filter(function (t) { return t && t.no === no; })[0];
      if (!T) { BB.hata("Bu deneme bulunamadı.", geri, "Üniteye dön"); return; }
      BB.basla({ k: k, no: no, DEN: r[0], T: T, C: C, ROOT: ROOT, ad: ME ? ME.name : "", md: md, esc: esc, fmt: fmt, tabloHTML: tabloHTML, sekilKoy: sekilKoy, param: param });
    }, function () { BB.hata("Deneme şu an yüklenemedi. İnternetini kontrol edip sayfayı yenile.", geri, "Üniteye dön"); });
  };

  /* ---------- deneme sonucu ---------- */
  pages.sonuc = function () {
    if (!C) return;
    var k = C.kit(param("kit")) || C.kit("macro-u1"), no = parseInt(param("n"), 10) || 1, ders = C.DERSLER[k.ders];
    var hd = $('[data-k="header"]');
    hd.dataset.back = ROOT + "unite/?kit=" + k.id; hd.dataset.backLabel = ders.title + " Unit " + k.unit;
    header();
    if (engelKontrol()) return;
    if (!HESAPLI || kilitliMi(k.ders)) { location.replace(ROOT + "unite/?kit=" + k.id + "&sekme=deneme"); return; }
    var main = $("main"), S = C.deneme(k, no);
    function bos(msg) {
      main.innerHTML = '<section class="card empty"><div class="stack" style="flex:1 1 320px;gap:12px"><span class="hand" style="color:var(--macro);font-size:30px">henüz sonuç yok</span><h1 class="h2" style="font-size:32px">' + esc(msg) + '</h1><a class="btn btn--primary" style="align-self:flex-start" href="' + ROOT + 'deneme/?kit=' + k.id + '&n=' + no + '">Denemeyi çöz →</a></div></section>';
    }
    if (!S || !S.done) { bos("Deneme " + no + " henüz bitmedi."); return; }
    C.denemeVerisi(k).then(function (DEN) {
      var tests = (DEN.tests || []).filter(function (t) { return t && Array.isArray(t.questions); });
      var T = tests.filter(function (t) { return t.no === no; })[0];
      if (!T || T.questions.length !== S.ans.length) { bos("Bu denemenin soruları değişmiş; yeniden çözmen gerekiyor."); return; }
      var Q = T.questions, N = Q.length, L = "ABCDE", ok = S.score, oran = ok / N;
      var topics = Object.keys(DEN.topics || {}), say = {};
      Q.forEach(function (q, i) { var t = q.t || "?"; if (!say[t]) { say[t] = { n: 0, ok: 0 }; if (topics.indexOf(t) < 0) topics.push(t); } say[t].n++; if (S.ans[i] === q.a) say[t].ok++; });
      var zayif = null;
      topics.forEach(function (t) { var c = say[t]; if (c && c.ok < c.n && (!zayif || c.n - c.ok > say[zayif].n - say[zayif].ok)) zayif = t; });
      var yanlis = [];
      Q.forEach(function (q, i) { if (S.ans[i] !== q.a) yanlis.push(i); });
      var dk = Math.floor(S.used / 60000), sn = Math.round(S.used / 1000) % 60;
      var arc = $(".ring__arc"); if (arc) arc.setAttribute("stroke-dashoffset", String(Math.round(415 * (1 - oran))));
      fill(".ring__val", '<span class="display" style="font-size:46px">' + ok + '</span><span class="mono muted">/ ' + N + ' DOĞRU</span>');
      var lvl = T.level || "Deneme " + no, sc = $(".score");
      fill($(":scope > .stack > .mono", sc), "DENEME " + no + " · " + esc(lvl.toLocaleUpperCase("tr-TR")) + " · " + dk + " DK " + sn + " SN" + (S.auto ? " · SÜRE DOLDU" : ""));
      fill($("h1", sc), esc(lvl) + ' <span class="hl">' + (oran >= .9 ? "harika!" : oran >= .7 ? "tamam!" : oran >= .5 ? "yarı yolda" : "tekrar zamanı") + '</span>');
      var sonraki = tests.filter(function (t) { return t.no === no + 1; })[0];
      var zi = zayif ? Object.keys(DEN.topics || {}).indexOf(zayif) : -1;
      fill($(".lead", sc), yanlis.length
        ? yanlis.length + " yanlışın var" + (zayif ? "; en çok <strong style=\"color:var(--ink)\">" + esc((DEN.topics || {})[zayif] || zayif) + "</strong> konusunda. " + esc(zayif) + " bölümüne bir kez daha bakıp " + (sonraki ? "Deneme " + sonraki.no + "'ye" : "tekrar denemeye") + " geçebilirsin." : ".")
        : "Hiç yanlışın yok!" + (sonraki ? " Deneme " + sonraki.no + "'ye hazırsın." : " Bütün denemeleri bitirdin."));
      fill($(":scope > .stack > .row", sc), (zayif ? '<a class="btn btn--primary" href="' + ROOT + 'unite/?kit=' + k.id + (zi > -1 ? "&b=" + zi : "") + '">' + esc(zayif) + '\'i tekrar izle</a>' : "") +
        (sonraki ? '<a class="btn btn--' + (zayif ? "ghost" : "primary") + '" href="' + ROOT + 'deneme/?kit=' + k.id + '&n=' + sonraki.no + '">Deneme ' + sonraki.no + ': ' + esc(sonraki.level || "") + ' →</a>' : "") +
        '<a class="btn btn--ghost" href="' + ROOT + 'deneme/?kit=' + k.id + '&n=' + no + '&yeni=1">Tekrar çöz</a>');
      var r = C.istatistik(), tst = $(".score .toast");
      if (tst && r.deneme !== 1) tst.remove();
      fill('[data-k="topics"]', topics.filter(function (t) { return say[t]; }).map(function (t) {
        var c = say[t], cl = c.ok === c.n ? "var(--ok)" : (c.ok * 2 >= c.n ? "#E0A43F" : "var(--bad)");
        return '<div class="topic"><span class="mono muted">' + esc(t) + '</span><div class="stack" style="gap:5px;min-width:0"><span class="topic__name">' + esc((DEN.topics || {})[t] || t) + '</span><div class="progress progress--thin"><span style="--w:' + Math.round(100 * c.ok / c.n) + '%;--c:' + cl + '"></span></div></div><span class="mono" style="text-align:right">' + c.ok + '/' + c.n + '</span></div>';
      }).join(""));
      fill("#yy-h .mono", String(yanlis.length));
      fill('[data-k="yanlis-sayi"]', String(yanlis.length));
      fill('[data-k="wrongs"]', yanlis.length ? yanlis.map(function (i, j) {
        var q = Q[i], p = S.ans[i], open = j === 0;
        return '<article class="card wrong"><button type="button" class="wrong__head" aria-expanded="' + open + '" aria-controls="w' + i + '"><span class="wrong__num">' + (i + 1) + '</span><span class="wrong__q">' + md(q.q) + '</span><span class="mono muted hide-sm">' + esc(q.t || "") + '</span>' + I.chev + '</button>' +
          '<div class="wrong__body" id="w' + i + '"' + (open ? "" : " hidden") + '><div class="row" style="gap:10px"><span class="ans ans--bad"><strong>Senin cevabın:</strong> ' + (p >= 0 ? L[p] + " · " + md(q.o[p]) : "boş") + '</span><span class="ans ans--ok"><strong>Doğrusu:</strong> ' + L[q.a] + ' · ' + md(q.o[q.a]) + '</span></div>' + (q.w ? '<p style="font-size:15px;line-height:1.65">' + md(q.w) + '</p>' : "") + '</div></article>';
      }).join("") : '<p class="muted">Yanlışın yok; bu denemeyi tam puanla bitirdin.</p>');
    }, function () { bos("Sonuç şu an yüklenemedi."); });
    $('[data-k="wrongs"]').addEventListener("click", function (e) {
      var h = e.target.closest(".wrong__head"); if (!h) return;
      var open = h.getAttribute("aria-expanded") === "true";
      h.setAttribute("aria-expanded", String(!open));
      document.getElementById(h.getAttribute("aria-controls")).hidden = open;
    });
  };

  /* ---------- profil ---------- */
  pages.profil = function () {
    theme.apply(theme.pref());
    if (!HESAPLI) { ornekSerit("Bu bir örnek profil. Giriş yapınca kendi bilgilerin, serin ve notların burada görünür."); profilOrnek(); return; }
    var p = H.profil() || {};
    function ciz() {
      var r = C.istatistik(), tk = C.takvim();
      fill('[data-k="p-avatar"]', esc(initials(ME.name)));
      fill('[data-k="p-ad"]', esc(ME.name));
      fill('[data-k="p-sinif"]', (p.sinif ? p.sinif + ". sınıf · " : "") + "UAA");
      fill('[data-k="p-eposta"]', esc(ME.email || ""));
      fill('[data-k="p-dersler"]', (p.secmeliler || []).map(function (d) { return '<span class="chip" style="--c:' + COLORS[C.dersRengi(d)] + ';font-size:13px;font-weight:500">' + esc(d) + '</span>'; }).join(""));
      fill('[data-k="s-bolum"]', r.bolum);
      fill('[data-k="s-soru"]', r.soru);
      fill('[data-k="s-oran"]', r.soru ? "%" + Math.round(100 * r.dogru / r.soru) : "—");
      fill('[data-k="s-seri"]', r.enIyiSeri + " gün");
      fill('[data-k="seri-not"]', r.seri ? "şu an " + r.seri + " gün" + (r.enIyiSeri > r.seri ? ", rekor " + r.enIyiSeri + "!" : ", rekor bu!") : (r.enIyiSeri ? "rekorun " + r.enIyiSeri + " gün, yenisine başla" : "ilk bölümle seri başlar"));
      fill('[data-k="cal"]', tk.hucreler.map(function (v, i) { return '<i data-l="' + v + '"' + (i === tk.bugun ? " data-today" : "") + ' style="animation-delay:' + (i * .015) + 's" title="' + (v ? "çalışıldı" : "çalışılmadı") + '"></i>'; }).join(""));
      var rz = C.rozetler(r);
      fill('[data-k="badges"]', rz.map(badge).join(""));
      fill('[data-k="roz-sayi"]', rz.filter(function (b) { return b.got; }).length + " / " + rz.length);
      $$("[data-grade-pick]").forEach(function (b) { b.setAttribute("aria-checked", String(+b.dataset.gradePick === p.sinif)); });
    }
    document.addEventListener("click", function (e) {
      var gp = e.target.closest("[data-grade-pick]");
      if (gp) {
        var g = +gp.dataset.gradePick;
        if (g === p.sinif) return;
        if (g === 11) { location.href = ROOT + "hosgeldin/?adim=2&devam=" + encodeURIComponent(buradan()); return; }
        H.profilKaydet(10, [], !(p.katilim === false)).then(function (p2) { p = p2 || p; ciz(); toast("Sınıfın güncellendi"); }, function (x) { toast(H.hataMetni(x)); });
        return;
      }
      if (e.target.closest('[data-k="cikis"]')) { e.preventDefault(); H.cikis(); location.href = ROOT + "index.html"; return; }
      if (e.target.closest('[data-k="reset"]')) {
        if (confirm("Bütün ilerlemen (bölümler, denemeler, seri) silinsin mi? Notların kalır. Bu geri alınamaz.")) { C.sifirla(); ciz(); toast("İlerleme sıfırlandı"); }
      }
    });
    ciz();
    H.profilYenile().then(function (p2) { if (p2) { p = p2; ciz(); } }, function () {});
  };

  function profilOrnek() {
    fill('[data-k="cal"]', D.calendar.map(function (v, i) { return '<i data-l="' + v + '"' + (i === D.todayIndex ? " data-today" : "") + ' style="animation-delay:' + (i * .015) + 's" title="' + (v ? v + " bölüm" : "çalışılmadı") + '"></i>'; }).join(""));
    fill('[data-k="badges"]', D.badges.map(badge).join(""));
    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-grade-pick]") || e.target.closest('[data-k="reset"]')) toast("Örnek görünüm; önce giriş yap");
      if (e.target.closest('[data-k="cikis"]')) { e.preventDefault(); location.href = ROOT + "giris/?mod=giris"; }
    });
  }

  /* ---------- yönetim ---------- */
  pages.yonetim = function () {
    if (!HESAPLI) { ornekSerit("Bu bir örnek yönetim ekranı. Yönetici hesabıyla giriş yapınca quizler ve notlar gerçekten kaydedilir."); yonetimOrnek(); return; }
    var view = "quiz", quizzes = [], ozet = null, acik = null, satirlar = [], degisen = {};
    var f = $('[data-k="new-quiz"]');
    /* ders listesi: veritabanındaki adlarla (öğrencinin seçtiği derslerle eşleşmeli) */
    f.ders.innerHTML = '<option value="" disabled selected>Ders seç</option>' + [["11 · Matematik", C.OKUL.matematik], ["11 · Seçmeli dersler", C.OKUL.secmeli], ["11 · AP sınavları", C.OKUL.ap], ["10. sınıf ortak dersleri", C.OKUL.onuncu]].map(function (g) {
      return '<optgroup label="' + esc(g[0]) + '">' + g[1].map(function (d) { return '<option value="' + esc(d) + '">' + esc(d) + '</option>'; }).join("") + '</optgroup>';
    }).join("");
    function varsayilanTarih() { var d0 = new Date(Date.now() + 7 * 864e5); d0.setHours(23, 59, 0, 0); return new Date(d0.getTime() - d0.getTimezoneOffset() * 6e4).toISOString().slice(0, 16); }
    f.tarih.value = varsayilanTarih();
    function show() {
      $$(".admin__nav [data-view]").forEach(function (b) { if (b.dataset.view === view) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current"); });
      $$(".admin__view").forEach(function (v) { v.hidden = v.dataset.view !== view; });
    }
    /* geri bildirim sekmesi */
    var gbSatir = [], gbSuz = "hepsi";
    var GB_TUR = { hata: ["Hata", "chip--hot"], oneri: ["Öneri", "chip--info"], begendim: ["Beğendim", "chip--ok"] };
    function gbSayi() { var n = gbSatir.filter(function (x) { return !x.okundu; }).length, el = $('[data-k="gb-sayi"]'); if (el) { el.textContent = n; el.hidden = !n; } }
    function gbCiz() {
      $$("[data-gb-suz]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.gbSuz === gbSuz)); });
      var l = gbSatir.filter(function (x) { return gbSuz === "hepsi" || (gbSuz === "yeni" ? !x.okundu : x.tur === gbSuz); });
      fill('[data-k="gb-liste"]', l.length ? l.map(function (x) {
        var t = GB_TUR[x.tur] || ["?", "chip--plain"], tarih = new Date(x.olusma).toLocaleString("tr-TR", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" });
        return '<article class="card gb-satir" data-okundu="' + !!x.okundu + '"><div class="row" style="align-items:center;gap:10px;flex-wrap:wrap">' + (x.okundu ? "" : '<span class="gb-yeni" title="Okunmadı"></span>') + '<span class="chip ' + t[1] + '">' + t[0] + '</span><strong style="font-size:15px">' + esc(x.ad || "İsimsiz") + '</strong>' + (x.sinif ? '<span class="muted" style="font-size:13px">' + x.sinif + '. sınıf</span>' : "") + '<span class="mono muted" style="margin-left:auto">' + esc(tarih) + '</span></div>' +
          '<p class="gb-mesaj">' + esc(x.mesaj) + '</p>' +
          '<div class="row" style="align-items:center;justify-content:space-between;gap:10px"><span class="mono muted" style="font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:70%">' + esc(x.sayfa || "") + '</span><button type="button" class="btn btn--ghost btn--sm" data-gb-okundu="' + x.id + '">' + (x.okundu ? "Okunmadı yap" : "Okundu ✓") + '</button></div></article>';
      }).join("") : '<div class="card empty"><div class="stack" style="gap:8px"><span class="hand" style="font-size:26px">' + (gbSatir.length ? "bu süzgeçte mesaj yok" : "henüz mesaj yok") + '</span><span class="muted">Öğrenciler sağ alttaki "Geri bildirim" düğmesiyle yazınca burada görünür.</span></div></div>');
      gbSayi();
    }
    function gbYukle() {
      fill('[data-k="gb-liste"]', '<p class="muted">Yükleniyor…</p>');
      return H.yonetim("ap_geribildirim_liste", {}).then(function (d) { gbSatir = (d && d.satirlar) || []; gbCiz(); }, function (x) { fill('[data-k="gb-liste"]', '<p class="muted">' + esc(H.hataMetni(x)) + '</p>'); });
    }
    H.yonetim("ap_geribildirim_liste", {}).then(function (d) { gbSatir = (d && d.satirlar) || []; gbSayi(); }, function () {});
    function yetkisiz(err) {
      if (/oturum_gerekli/.test(String(err && err.message))) {
        fill(".admin", '<section class="card empty" style="grid-column:1/-1"><div class="stack" style="flex:1 1 320px;gap:12px"><span class="hand" style="color:var(--macro);font-size:30px">bir adım kaldı</span><h1 class="h2" style="font-size:32px">Güvenlik için yeniden giriş yap.</h1><p class="muted">Yönetim ekranı artık her girişte verilen oturum anahtarıyla açılıyor. Bir kez çıkış yapıp tekrar girmen yeterli.</p><a class="btn btn--primary" style="align-self:flex-start" href="' + ROOT + 'giris/?mod=giris&devam=' + encodeURIComponent(location.pathname + location.search) + '" data-k="yeniden-giris">Yeniden giriş yap</a></div></section>');
        var yg = $('[data-k="yeniden-giris"]'); if (yg) yg.addEventListener("click", function () { H.cikis(); });
        return;
      }
      var y = /yetki/.test(String(err && err.message));
      fill(".admin", '<section class="card empty" style="grid-column:1/-1"><div class="stack" style="flex:1 1 320px;gap:12px"><span class="hand" style="color:var(--macro);font-size:30px">' + (y ? "burası öğretmen odası" : "hay aksi") + '</span><h1 class="h2" style="font-size:32px">' + (y ? "Bu sayfa yönetici hesabı içindir." : "Bağlantı kurulamadı.") + '</h1><p class="muted">' + (y ? "Hesabın yönetici değil." : "İnternetini kontrol edip sayfayı yenile.") + '</p><a class="btn btn--primary" style="align-self:flex-start" href="' + ROOT + 'panel/">Panelime dön</a></div></section>');
    }
    function durumu(q) {
      var gecti = new Date(q.son_tarih) <= new Date();
      if (!gecti) return "open";
      return q.giren < q.hedef ? "wait" : "done";
    }
    function chip(q) {
      var st = durumu(q);
      if (st === "wait") return '<span class="chip chip--hot">Not bekliyor · ' + (q.hedef - q.giren) + '</span>';
      if (st === "done") return '<span class="chip chip--ok">Tamamlandı</span>';
      return '<span class="chip chip--info">Açık · ' + esc(kalan(q.son_tarih)) + '</span>';
    }
    function list() {
      fill('[data-k="quiz-list"]', quizzes.length ? quizzes.map(function (q) {
        var st = durumu(q);
        return '<div class="quiz-row"><span class="dot" style="--c:' + COLORS[C.dersRengi(q.ders)] + ';width:12px;height:12px;border-radius:4px"></span><div class="stack" style="flex:1 1 260px;gap:3px"><strong style="font-size:15px">' + esc(q.ders + " · " + q.baslik) + '</strong><span class="muted" style="font-size:13px">Son tarih ' + esc(tarihUzun(q.son_tarih)) + ' · ' + sayi(q.max_puan) + ' üzerinden · ' + q.giren + '/' + q.hedef + ' not' + (q.ortalama != null ? ' · ortalama ' + sayi(q.ortalama) : "") + '</span></div>' + chip(q) +
          '<button type="button" class="btn btn--ghost btn--sm" data-open="' + esc(q.id) + '">' + (st === "wait" ? "Not gir" : "Notlar") + '</button></div>';
      }).join("") : '<p class="muted" style="padding:16px 0">Henüz quiz yok. Yukarıdan ilkini aç.</p>');
      var bek = quizzes.reduce(function (s, q) { return s + (durumu(q) === "wait" ? Math.max(0, q.hedef - q.giren) : 0); }, 0);
      var cnt = $('[data-k="not-sayi"]'); if (cnt) { cnt.textContent = String(bek); cnt.hidden = !bek; }
      var acikQ = quizzes.filter(function (q) { return durumu(q) === "open"; }).length;
      fill('[data-k="quiz-ozet"]', ozet ? [
        yonStat(acikQ, "açık quiz", "son tarihi gelmemiş"),
        yonStat(bek, "not bekliyor", bek ? "bu öğrencilerin kitleri kilitli" : "kimse kilitli değil", bek ? "hot" : ""),
        yonStat(ozet.hesap, "hesap", ozet.katilimci + " tanesinde not takibi açık"),
        yonStat(quizzes.length, "quiz toplam", quizzes.length ? "en yenisi en üstte" : "henüz yok")
      ].join("") : "");
    }
    function yukle() {
      return H.yonetim("ap_quiz_ozet", {}).then(function (o) { ozet = o; quizzes = o.quizler || []; list(); }, function (err) { yetkisiz(err); throw err; });
    }
    /* seviye sınavı sekmesi: aç / kapat, takvim, önizleme, tur özetleri */
    function sevYon() {
      fill('[data-k="sev-yon"]', '<p class="muted">Yükleniyor…</p>');
      Promise.all([H.yonetim("ap_yonetici_seviye", {}), sevDizin()]).then(function (rr) { var d = rr[0];
        var t = d.takvim || {}, ozet = d.ozet || [], son = d.son || [];
        var n = $('[data-k="sev-durum-n"]'); if (n) { n.textContent = t.acik ? "AÇIK" : "KAPALI"; n.hidden = false; }
        var durum = !t.basladi ? "Henüz hiç tur açılmadı. Sen yeni tur açana kadar öğrenciler sınav çözemez, bildirim de görmez."
          : t.acik ? "Tur " + t.tur + " açık" + (t.tur_bitis ? " · " + new Date(t.tur_bitis).toLocaleString("tr-TR", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" }) + "'de kendiliğinden kapanacak." : " · sen kapatana kadar açık kalacak.")
          : "Tur " + t.tur + " kapandı. Yeni tur açana kadar öğrenciler sınav çözemez.";
        var maxU = function (x) { var u = sevUniteler(x); return u[u.length - 1].unit; };
        fill('[data-k="sev-yon"]',
          '<div class="card card--pad stack sev-yon-durum" data-acik="' + !!t.acik + '" style="gap:14px"><div class="row" style="align-items:center;gap:12px;flex-wrap:wrap"><span class="sev-durum" data-d="' + (t.acik ? "acik" : "kapali") + '"><i></i>' + (t.acik ? "Tur " + t.tur + " açık" : "Kapalı") + '</span><strong style="font-size:16px">' + esc(durum) + '</strong></div>' +
          (t.acik ? '<div class="row" style="gap:10px;flex-wrap:wrap"><button type="button" class="btn--danger-link" data-sev-yon-kapat>Turu şimdi kapat</button></div>'
                : '<div class="row" style="gap:12px;align-items:flex-end;flex-wrap:wrap"><label class="field" style="flex:0 1 240px">Tur ne kadar açık kalsın?<select data-k="sev-gun"><option value="3">3 gün</option><option value="7" selected>7 gün</option><option value="14">14 gün</option><option value="">Ben kapatana kadar</option></select></label><button type="button" class="btn btn--primary" data-sev-yon-ac>Tur ' + ((t.tur || 0) + 1) + '\'i başlat</button></div><p class="muted" style="font-size:13px;margin:0">Başlattığın an bütün öğrencilere açılır ve sitenin üstünde bildirim çıkar. Ders başına turda bir sınav, 20 soru; sonuçlar ve gelişim grafikleri tur tur birikir.</p>') + '</div>' +
          '<div class="card card--pad stack" style="gap:12px"><div class="section__head"><h2 class="h3">Önizle</h2><span class="muted" style="font-size:13px">kaydedilmez · bütün ünitelerden</span></div><div class="row" style="gap:8px;flex-wrap:wrap">' +
            sevDersler().map(function (x) { return '<a class="filter" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;color:var(--ink)" href="' + ROOT + 'seviye/sinav/?ders=' + x + '&u=' + maxU(x) + '&yeni"><span class="dot" style="--c:' + sevRenk(x) + ';width:9px;height:9px;border-radius:3px"></span>' + esc(sevAd(x)) + '</a>'; }).join("") + '</div></div>' +
          '<div class="card card--pad stack" style="gap:12px"><h2 class="h3">Turlar</h2>' + (ozet.length ? '<div class="table-box"><table class="table" style="min-width:480px"><thead><tr><th>Tur</th><th>Ders</th><th>Katılan</th><th>Ortalama</th><th style="text-align:right">Ort. seviye</th></tr></thead><tbody>' +
            ozet.map(function (r) { return '<tr><td class="mono">T' + r.tur + '</td><td><span class="dot" style="--c:' + sevRenk(r.ders) + ';width:9px;height:9px;border-radius:3px;display:inline-block;margin-right:8px"></span>' + esc(sevAd(r.ders)) + '</td><td>' + r.katilan + '</td><td>%' + sayi(r.ortalama) + '</td><td class="num">' + sayi(r.seviye) + '</td></tr>'; }).join("") + '</tbody></table></div>' : '<p class="muted" style="margin:0">Henüz sonuç yok.</p>') + '</div>' +
          (son.length ? '<div class="card card--pad stack" style="gap:12px"><h2 class="h3">Son sonuçlar</h2><div class="table-box"><table class="table" style="min-width:560px"><thead><tr><th>Öğrenci</th><th>Ders</th><th>Tur</th><th>Ünite</th><th style="text-align:right">Sonuç</th></tr></thead><tbody>' +
            son.slice(0, 40).map(function (r) { return '<tr><td>' + esc(r.ad) + ' <span class="muted" style="font-size:12px">' + (r.sinif ? r.sinif + "." : "") + (r.okul ? " · " + esc(OKUL_KISA[r.okul] || "") : "") + '</span></td><td>' + esc(sevAd(r.ders)) + '</td><td class="mono">T' + r.tur + '</td><td>1–' + r.unite + '</td><td class="num">%' + sayi(r.yuzde) + ' · S' + r.seviye + '</td></tr>'; }).join("") + '</tbody></table></div></div>' : ""));
      }, function (x) { fill('[data-k="sev-yon"]', '<p class="muted">' + esc(H.hataMetni(x)) + '</p>'); });
    }
    /* öğrenciler sekmesi */
    var ogrSatir = null, ogrSuz = "hepsi", ogrOkul = "hepsi", ogrAra = "", ogrAcik = {};
    function ogrDurum(s) {
      if (s.bekleyen > 0) return ["chip--hot", "Kilitli · " + s.bekleyen + " not"];
      if (s.yonetici) return ["chip--info", "Yönetici"];
      if (!s.sinif) return ["chip--warn", "Kurulum yarım"];
      if (s.katilim !== true) return ["chip--plain", "Takip kapalı"];
      return ["chip--ok", "Açık"];
    }
    function ogrDersler(s) {
      var d = s.secmeliler || [];
      if (!d.length) return '<span class="muted">—</span>';
      return '<span class="yon-dersler">' + d.slice(0, 2).map(function (x) { return '<span class="yon-ders" style="--c:' + COLORS[C.dersRengi(x)] + '">' + esc(x.replace(/^AP\s+/, "").replace(/^Honours\s+/, "")) + '</span>'; }).join("") + (d.length > 2 ? '<span class="muted" style="font-size:12px">+' + (d.length - 2) + '</span>' : "") + '</span>';
    }
    function ogrCiz() {
      if (!ogrSatir) return;
      $$("[data-ogr-suz]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.ogrSuz === ogrSuz)); });
      $$("[data-ogr-okul]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.ogrOkul === ogrOkul)); });
      var a = ogrAra.toLocaleLowerCase("tr-TR");
      var l = ogrSatir.filter(function (s) {
        if (ogrOkul !== "hepsi" && (s.okul || "") !== ogrOkul) return false;
        if (ogrSuz === "11" || ogrSuz === "10") { if (String(s.sinif) !== ogrSuz) return false; }
        else if (ogrSuz === "kilitli") { if (!(s.bekleyen > 0)) return false; }
        else if (ogrSuz === "yarim") { if (s.sinif) return false; }
        return !a || (String(s.ad || "") + " " + String(s.email || "")).toLocaleLowerCase("tr-TR").indexOf(a) > -1;
      });
      fill('[data-k="ogr-liste"]', l.length ? l.map(function (s) {
        var d = ogrDurum(s), ac = !!ogrAcik[s.id];
        var satir = '<tr class="yon-satir" data-ogr="' + esc(s.id) + '" tabindex="0" aria-expanded="' + ac + '"><td><span class="row" style="align-items:center;gap:10px;flex-wrap:nowrap"><span class="mini-av" style="--c:' + renk(s.id) + '">' + esc(initials(s.ad)) + '</span><span class="stack" style="gap:1px;min-width:0"><strong style="font-size:15px">' + esc(s.ad) + '</strong><span class="muted yon-eposta">' + esc(s.email) + '</span></span></span></td>' +
          '<td class="muted" style="white-space:nowrap">' + (s.sinif ? s.sinif + "." : "–") + (s.okul ? ' <span class="yon-okul" data-okul="' + esc(s.okul) + '" title="' + esc(OKUL_AD[s.okul] || "") + '">' + esc(OKUL_KISA[s.okul] || "") + '</span>' : "") + '</td><td>' + ogrDersler(s) + '</td><td class="muted" style="font-size:13px;white-space:nowrap">' + esc(goreli(s.son_giris)) + '</td><td style="text-align:right"><span class="chip ' + d[0] + '">' + esc(d[1]) + '</span></td></tr>';
        if (!ac) return satir;
        var notlar = s.notlar || [];
        return satir + '<tr class="yon-detay"><td colspan="5"><div class="yon-detay__ic">' +
          '<div class="stack" style="gap:6px"><span class="mono muted">HESAP</span><span>Okul: ' + esc(OKUL_AD[s.okul] || "seçilmedi") + '</span><span>Açılış: ' + esc(tarihUzun(s.olusturma)) + '</span><span>Not takibi: ' + (s.katilim === true ? "açık" : "kapalı") + '</span></div>' +
          '<div class="stack" style="gap:6px"><span class="mono muted">DERSLER</span>' + ((s.secmeliler || []).length ? '<span class="yon-dersler" style="flex-wrap:wrap">' + s.secmeliler.map(function (x) { return '<span class="yon-ders" style="--c:' + COLORS[C.dersRengi(x)] + '">' + esc(x) + '</span>'; }).join("") + '</span>' : '<span class="muted">Ders seçmemiş</span>') + '</div>' +
          '<div class="stack" style="gap:6px"><span class="mono muted">NOTLAR</span>' + (notlar.length ? notlar.map(function (n) { return '<span>' + esc(n.baslik) + ' · <strong>' + sayi(n.puan) + '</strong> / ' + sayi(n.max_puan) + '</span>'; }).join("") : '<span class="muted">Henüz not yok</span>') + '</div>' +
          '</div></td></tr>';
      }).join("") : '<tr><td colspan="5" class="muted" style="padding:20px 0">' + (ogrSatir.length ? "Bu aramada öğrenci yok." : "Henüz hesap yok.") + '</td></tr>');
    }
    function ogrOzet() {
      var n = ogrSatir.length, g7 = Date.now() - 7 * 864e5;
      var aktif = ogrSatir.filter(function (s) { return s.son_giris && new Date(s.son_giris) > g7; }).length;
      var kil = ogrSatir.filter(function (s) { return s.bekleyen > 0; }).length;
      var on = ogrSatir.filter(function (s) { return s.sinif === 10; }).length, onbir = ogrSatir.filter(function (s) { return s.sinif === 11; }).length;
      var okSay = function (o) { return ogrSatir.filter(function (s) { return s.okul === o; }).length; };
      fill('[data-k="ogr-ozet"]', [yonStat(n, "hesap", onbir + " tane 11. sınıf · " + on + " tane 10. sınıf"), yonStat(okSay("uaa"), "Üsküdar Amerikan", "Robert " + okSay("robert") + " · Koç " + okSay("koc")), yonStat(aktif, "son 7 gün", "giriş yapan"), yonStat(kil, "kilitli", kil ? "notu bekleniyor" : "herkes açık", kil ? "hot" : "")].join(""));
      var c = $('[data-k="ogr-sayi"]'); if (c) { c.textContent = String(n); c.hidden = !n; }
    }
    function ogrYukle() {
      if (!ogrSatir) fill('[data-k="ogr-liste"]', '<tr><td colspan="5" class="muted" style="padding:20px 0">Yükleniyor…</td></tr>');
      return H.yonetim("ap_yonetici_hesaplar", {}).then(function (d) { ogrSatir = (d && d.satirlar) || []; ogrOzet(); ogrCiz(); }, function (x) { fill('[data-k="ogr-liste"]', '<tr><td colspan="5" class="muted">' + esc(H.hataMetni(x)) + '</td></tr>'); });
    }
    $('[data-k="ogr-ara"]').addEventListener("input", function (e) { ogrAra = e.target.value.trim(); ogrCiz(); });
    $('[data-k="ogr-liste"]').addEventListener("keydown", function (e) { if ((e.key === "Enter" || e.key === " ") && e.target.matches("[data-ogr]")) { e.preventDefault(); e.target.click(); } });
    function notlariAc(q) {
      acik = q; degisen = {}; view = "not"; show();
      var sec = $('.admin__view[data-view="not"]');
      fill($(".section__head .mono", sec), "NOT GİRİŞİ · " + sayi(q.max_puan) + " ÜZERİNDEN · SON TARİH " + esc(tarihUzun(q.son_tarih).toLocaleUpperCase("tr-TR")));
      fill($("h1", sec), esc(q.ders) + ' · <span class="hl">' + esc(q.baslik) + '</span>');
      fill($("thead th:last-child", sec), "Not / " + sayi(q.max_puan));
      fill('[data-k="students"]', '<tr><td colspan="4" class="muted">Yükleniyor…</td></tr>');
      H.yonetim("ap_yonetici_ogrenciler", { p_quiz: q.id }).then(function (d) {
        if (acik !== q) return;
        satirlar = d.satirlar || [];
        fill('[data-k="students"]', satirlar.length ? satirlar.map(function (s, i) {
          return '<tr data-st="' + i + '"><td><span class="row" style="align-items:center;gap:10px;flex-wrap:nowrap"><span class="mini-av" style="--c:' + renk(s.hesap) + '">' + esc(initials(s.ad)) + '</span>' + esc(s.ad) + '</span></td><td class="muted">' + (s.sinif || "–") + '</td><td><span class="chip"></span></td>' +
            '<td class="num"><input class="grade-in" type="text" inputmode="decimal" autocomplete="off" value="' + (s.puan == null ? "" : sayi(s.puan)) + '" placeholder="—" aria-label="' + esc(s.ad) + ' notu, ' + sayi(q.max_puan) + ' üzerinden"></td></tr>';
        }).join("") : '<tr><td colspan="4" class="muted">Bu dersi alan, not takibi açık öğrenci yok.</td></tr>');
        ogrenciler();
      }, function (err) { fill('[data-k="students"]', '<tr><td colspan="4" class="muted">' + esc(H.hataMetni(err)) + '</td></tr>'); });
    }
    function deger(i) { return Object.prototype.hasOwnProperty.call(degisen, i) ? degisen[i] : satirlar[i].puan; }
    function ogrenciler() {
      if (!acik) return;
      var gecti = new Date(acik.son_tarih) <= new Date();
      var entered = satirlar.filter(function (_, i) { return deger(i) != null; }).length, n = satirlar.length;
      fill('[data-k="entered"]', entered + " / " + n + " GİRİLDİ");
      $('[data-k="entered-bar"]').style.setProperty("--w", (n ? entered / n * 100 : 0) + "%");
      $('[data-k="entered-bar"]').style.setProperty("--c", COLORS[C.dersRengi(acik.ders)]);
      fill('[data-k="locked-note"]', !n ? "" : !gecti ? "son tarih geçmedi, kimse kilitli değil" : n - entered ? (n - entered) + " öğrenci kilitli, onları bekliyor" : "herkesin kitleri açık!");
      $$("[data-st]").forEach(function (row) {
        var i = +row.dataset.st, has = deger(i) != null;
        var c = row.querySelector(".chip"); c.className = "chip " + (has || !gecti ? "chip--ok" : "chip--hot"); c.textContent = has || !gecti ? "Açık" : "Kilitli";
        row.querySelector(".grade-in").dataset.missing = String(!has && gecti);
      });
    }
    $('[data-k="students"]').addEventListener("input", function (e) {
      var inp = e.target.closest(".grade-in"); if (!inp) return;
      var i = +inp.closest("[data-st]").dataset.st, t = inp.value.trim().replace(",", "."), v = Number(t);
      if (t !== "" && !(v >= 0 && v <= acik.max_puan)) { inp.setAttribute("aria-invalid", "true"); return; }
      inp.removeAttribute("aria-invalid");
      var yeni = t === "" ? null : v;
      if (yeni === (satirlar[i].puan == null ? null : Number(satirlar[i].puan))) delete degisen[i]; else degisen[i] = yeni;
      ogrenciler();
    });
    document.addEventListener("click", function (e) {
      var v = e.target.closest(".admin__nav [data-view]");
      if (v) {
        if (v.dataset.view === "quiz") { view = "quiz"; show(); }
        else if (v.dataset.view === "not") { var w = quizzes.filter(function (q) { return durumu(q) === "wait"; })[0] || quizzes[0]; if (w) notlariAc(w); else toast("Önce bir quiz aç"); }
        else if (v.dataset.view === "gb") { view = "gb"; show(); gbYukle(); }
        else if (v.dataset.view === "ogr") { view = "ogr"; show(); ogrYukle(); }
        else if (v.dataset.view === "kit") { view = "kit"; show(); yonKitler(); }
        else if (v.dataset.view === "seviye") { view = "seviye"; show(); sevYon(); }
      }
      var sa = e.target.closest("[data-sev-yon-ac]");
      if (sa) {
        var gs = $('[data-k="sev-gun"]'), gun = gs && gs.value ? +gs.value : null;
        if (!confirm("Yeni seviye sınavı turu başlatılsın mı?\n\nBütün öğrencilere hemen açılır ve sitenin üstünde bildirim çıkar. " + (gun ? gun + " gün sonra kendiliğinden kapanır." : "Sen kapatana kadar açık kalır."))) return;
        sa.disabled = true;
        H.yonetim("ap_yonetici_seviye_tur", { p_islem: "ac", p_gun: gun }).then(function () { toast("Yeni tur başladı; öğrencilere açıldı"); sevYon(); }, function (x) { sa.disabled = false; toast(H.hataMetni(x)); });
      }
      var sk = e.target.closest("[data-sev-yon-kapat]");
      if (sk) {
        if (!confirm("Açık tur şimdi kapatılsın mı? Öğrenciler bu turun sınavını artık çözemez; çözülen sonuçlar silinmez.")) return;
        sk.disabled = true;
        H.yonetim("ap_yonetici_seviye_tur", { p_islem: "kapat" }).then(function () { toast("Tur kapatıldı"); sevYon(); }, function (x) { sk.disabled = false; toast(H.hataMetni(x)); });
      }
      var sz = e.target.closest("[data-gb-suz]"); if (sz) { gbSuz = sz.dataset.gbSuz; gbCiz(); }
      var os = e.target.closest("[data-ogr-suz]"); if (os) { ogrSuz = os.dataset.ogrSuz; ogrCiz(); }
      var oo = e.target.closest("[data-ogr-okul]"); if (oo) { ogrOkul = oo.dataset.ogrOkul; ogrCiz(); }
      var or_ = e.target.closest("[data-ogr]"); if (or_) { var oid = or_.dataset.ogr; ogrAcik[oid] = !ogrAcik[oid]; ogrCiz(); var yeni = $('[data-ogr="' + oid + '"]'); if (yeni) yeni.focus(); }
      var ok_ = e.target.closest("[data-gb-okundu]");
      if (ok_) {
        var g = gbSatir.filter(function (x) { return x.id === ok_.dataset.gbOkundu; })[0]; if (!g) return;
        ok_.disabled = true;
        H.yonetim("ap_geribildirim_okundu", { p_gb: g.id, p_okundu: !g.okundu }).then(function () { g.okundu = !g.okundu; gbCiz(); }, function (x) { ok_.disabled = false; toast(H.hataMetni(x)); });
      }
      var o = e.target.closest("[data-open]"); if (o) { var q = quizzes.filter(function (x) { return x.id === o.dataset.open; })[0]; if (q) notlariAc(q); }
      if (e.target.closest('[data-k="to-quiz"]')) { view = "quiz"; show(); }
      var sv = e.target.closest('[data-k="save-grades"]');
      if (sv && acik) {
        if ($('[data-k="students"] [aria-invalid="true"]')) { toast("0 ile " + sayi(acik.max_puan) + " arasında not yaz"); return; }
        var idx = Object.keys(degisen);
        if (!idx.length) { toast("Değişen not yok"); return; }
        sv.disabled = true;
        var hata = null;
        idx.reduce(function (pr, i) {
          return pr.then(function () { return H.yonetim("ap_yonetici_not", { p_quiz: acik.id, p_hesap: satirlar[+i].hesap, p_puan: degisen[i] }).then(null, function (x) { hata = x; }); });
        }, Promise.resolve()).then(function () {
          sv.disabled = false;
          toast(hata ? H.hataMetni(hata) : "Notlar kaydedildi; notu girilen öğrencilerin kitleri açıldı");
          var q = acik;
          yukle().then(function () { var q2 = quizzes.filter(function (x) { return x.id === q.id; })[0]; if (q2) notlariAc(q2); }, function () {});
        });
      }
      var del = e.target.closest('[data-k="delete-quiz"]');
      if (del && acik) {
        if (!confirm("“" + acik.baslik + "” silinsin mi? Bu quize girilmiş bütün notlar da silinir.")) return;
        del.disabled = true;
        H.yonetim("ap_quiz_sil", { p_quiz: acik.id }).then(function () { del.disabled = false; acik = null; view = "quiz"; show(); toast("Quiz silindi"); yukle(); }, function (x) { del.disabled = false; toast(H.hataMetni(x)); });
      }
    });
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var title = f.baslik.value.trim(), when = f.tarih.value, out = Number(String(f.uzerinden.value).replace(",", "."));
      $$(".field__err", f).forEach(function (x) { x.remove(); });
      var bad = null;
      function err(inp, msg) { var s = document.createElement("span"); s.className = "field__err"; s.textContent = msg; inp.closest(".field").appendChild(s); bad = bad || inp; }
      if (!f.ders.value) err(f.ders, "Ders seç");
      if (!title) err(f.baslik, "Başlık yaz");
      if (!when) err(f.tarih, "Son tarihi seç");
      if (!(out > 0 && out <= 1000)) err(f.uzerinden, "1 ile 1000 arasında bir sayı yaz");
      if (bad) { bad.focus(); return; }
      var bt = f.querySelector('[type="submit"]'); bt.disabled = true;
      H.yonetim("ap_quiz_ekle", { p_baslik: title, p_ders: f.ders.value, p_son_tarih: new Date(when).toISOString(), p_max: out }).then(function () {
        bt.disabled = false; f.baslik.value = ""; f.hidden = true; var qa = $('[data-k="quiz-ac"]'); qa.textContent = "+ Yeni quiz"; qa.setAttribute("aria-expanded", "false"); toast("Quiz yayınlandı; öğrencilerin panelinde görünüyor"); yukle();
      }, function (x) { bt.disabled = false; toast(H.hataMetni(x)); });
    });
    f.addEventListener("reset", function () { setTimeout(function () { f.tarih.value = varsayilanTarih(); $$(".field__err", f).forEach(function (x) { x.remove(); }); }, 0); });
    show();
    fill('[data-k="quiz-list"]', '<p class="muted" style="padding:16px 0">Yükleniyor…</p>');
    yukle().then(function () {
      var g = param("gorunum");
      if (g === "not") { var w = quizzes.filter(function (q) { return durumu(q) === "wait"; })[0]; if (w) notlariAc(w); }
      else if (g === "ogr") { view = "ogr"; show(); ogrYukle(); }
      else if (g === "kit") { view = "kit"; show(); yonKitler(); }
      else if (g === "seviye") { view = "seviye"; show(); sevYon(); }
      else ogrYukle();
    }, function () {});
  };

  /* yönetim yardımcıları (gerçek ve örnek ekran) */
  var OKUL_AD = { robert: "Robert Kolej", uaa: "Üsküdar Amerikan Lisesi", koc: "Koç Lisesi" };
  var OKUL_KISA = { robert: "RC", uaa: "ÜAL", koc: "KL" };
  function yonStat(n, etiket, alt, ton) {
    return '<div class="card stat yon-stat"' + (ton ? ' data-ton="' + ton + '"' : "") + '><b>' + esc(n == null ? "—" : n) + '</b><span style="font-weight:600">' + esc(etiket) + '</span><span class="muted" style="font-size:13px">' + esc(alt || "") + '</span></div>';
  }
  function goreli(iso) {
    if (!iso) return "hiç girmedi";
    var ms = Date.now() - new Date(iso), dk = Math.round(ms / 6e4);
    if (dk < 2) return "az önce";
    if (dk < 60) return dk + " dk önce";
    if (dk < 1440) return Math.round(dk / 60) + " saat önce";
    var g = Math.round(dk / 1440);
    if (g === 1) return "dün";
    if (g < 7) return g + " gün önce";
    return tarihUzun(iso);
  }
  function yonKitler() {
    if (!C) { fill('[data-k="kit-liste"]', '<p class="muted">Kit listesi yüklenemedi.</p>'); return; }
    var dersler = Object.keys(C.DERSLER).map(function (id) {
      return { id: id, d: C.DERSLER[id], u: C.KITLER.filter(function (k) { return k.ders === id; }) };
    }).filter(function (x) { return x.u.length; });
    var n = dersler.reduce(function (s, x) { return s + x.u.length; }, 0);
    fill('[data-k="kit-sayi"]', dersler.length + " ders · " + n + " ünite yayında");
    fill('[data-k="kit-liste"]', dersler.map(function (x) {
      var c = COLORS[x.d.renk || x.d.art] || "var(--macro)";
      return '<article class="card yon-kit" style="--c:' + c + '"><div class="row" style="align-items:center;justify-content:space-between;gap:10px"><span class="mono muted">' + esc(x.d.code) + '</span>' + (x.d.not ? '<span class="chip chip--warn">' + esc(x.d.not) + '</span>' : (x.d.video ? '<span class="chip chip--plain">Videolu</span>' : "")) + '</div>' +
        '<h2 class="h3" style="font-size:22px;margin:0">' + esc(x.d.title) + '</h2>' +
        '<div class="yon-uniteler">' + x.u.map(function (k) { return '<a class="yon-unite" href="' + ROOT + 'unite/?kit=' + esc(k.id) + '">Unit ' + k.unit + '</a>'; }).join("") + '</div>' +
        '<a class="btn btn--ghost btn--sm" style="align-self:flex-start" href="' + ROOT + 'ders/?d=' + esc(x.id) + '">Ders sayfası →</a></article>';
    }).join(""));
  }

  function yonetimOrnek() {
    var view = param("gorunum") === "not" ? "not" : "quiz";
    var quizzes = D.quizzes.slice();
    function show() {
      $$(".admin__nav [data-view]").forEach(function (b) { if (b.dataset.view === view) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current"); });
      $$(".admin__view").forEach(function (v) { v.hidden = v.dataset.view !== view; });
    }
    function chip(q) {
      if (q.status === "wait") return '<span class="chip chip--hot">Not bekliyor · ' + q.pending + '</span>';
      if (q.status === "done") return '<span class="chip chip--ok">Tamamlandı</span>';
      return '<span class="chip chip--info">Açık' + (q.left ? " · " + esc(q.left) : "") + '</span>';
    }
    fill('[data-k="quiz-list"]', quizzes.map(function (q) {
      return '<div class="quiz-row"><span class="dot" style="--c:' + COLORS[q.course] + ';width:12px;height:12px;border-radius:4px"></span><div class="stack" style="flex:1 1 260px;gap:3px"><strong style="font-size:15px">' + esc(q.title) + '</strong><span class="muted" style="font-size:13px">' + esc(q.meta) + '</span></div>' + chip(q) +
        '<button type="button" class="btn btn--ghost btn--sm" data-open="' + q.id + '">' + (q.status === "wait" ? "Not gir" : (q.status === "done" ? "Notlar" : "Düzenle")) + '</button></div>';
    }).join(""));
    var entered = D.students.filter(function (s) { return s.score !== null; }).length;
    var nc = $('[data-k="not-sayi"]'); if (nc) { nc.textContent = String(D.students.length - entered); nc.hidden = entered === D.students.length; }
    fill('[data-k="entered"]', entered + " / " + D.students.length + " GİRİLDİ");
    $('[data-k="entered-bar"]').style.setProperty("--w", (entered / D.students.length * 100) + "%");
    fill('[data-k="locked-note"]', (D.students.length - entered) + " öğrenci kilitli, onları bekliyor");
    fill('[data-k="students"]', D.students.map(function (s) {
      var has = s.score !== null;
      return '<tr><td><span class="row" style="align-items:center;gap:10px;flex-wrap:nowrap"><span class="mini-av" style="--c:' + s.c + '">' + s.ini + '</span>' + esc(s.name) + '</span></td><td class="muted">11</td><td><span class="chip ' + (has ? "chip--ok" : "chip--hot") + '">' + (has ? "Açık" : "Kilitli") + '</span></td>' +
        '<td class="num"><input class="grade-in" type="text" value="' + (has ? s.score : "") + '" placeholder="—" data-missing="' + !has + '" aria-label="' + esc(s.name) + ' notu"></td></tr>';
    }).join(""));
    document.addEventListener("click", function (e) {
      var v = e.target.closest(".admin__nav [data-view]");
      if (v) {
        if (v.dataset.view === "gb") { toast("Örnek görünüm; yönetici hesabıyla giriş yap"); return; }
        view = v.dataset.view; show();
        if (view === "kit") yonKitler();
        if (view === "seviye") fill('[data-k="sev-yon"]', '<p class="muted">Örnek görünüm; yönetici hesabıyla giriş yapınca seviye sınavlarını buradan açıp kapatırsın.</p>');
        if (view === "ogr") {
          fill('[data-k="ogr-ozet"]', [yonStat(D.students.length, "hesap", "örnek veri"), yonStat(D.students.length - 1, "son 7 gün", "giriş yapan"), yonStat(D.students.filter(function (s) { return s.score === null; }).length, "kilitli", "notu bekleniyor", "hot")].join(""));
          fill('[data-k="ogr-liste"]', D.students.map(function (s) {
            var has = s.score !== null;
            return '<tr class="yon-satir"><td><span class="row" style="align-items:center;gap:10px;flex-wrap:nowrap"><span class="mini-av" style="--c:' + s.c + '">' + s.ini + '</span><strong style="font-size:15px">' + esc(s.name) + '</strong></span></td><td class="muted">11.</td><td class="muted">AP Statistics</td><td class="muted" style="font-size:13px">dün</td><td style="text-align:right"><span class="chip ' + (has ? "chip--ok" : "chip--hot") + '">' + (has ? "Açık" : "Kilitli · 1 not") + '</span></td></tr>';
          }).join(""));
        }
      }
      if (e.target.closest("[data-open]")) { view = "not"; show(); }
      if (e.target.closest('[data-k="to-quiz"]')) { view = "quiz"; show(); }
      if (e.target.closest('[data-k="save-grades"]') || e.target.closest('[data-k="delete-quiz"]')) toast("Örnek görünüm; yönetici hesabıyla giriş yap");
    });
    $('[data-k="new-quiz"]').addEventListener("submit", function (e) { e.preventDefault(); toast("Örnek görünüm; yönetici hesabıyla giriş yap"); });
    show();
  }

  /* yönetim: "+ Yeni quiz" formu aç/kapa (liste kısa kalsın) */
  document.addEventListener("click", function (e) {
    var b = e.target.closest('[data-k="quiz-ac"]'); if (!b) return;
    var f = $('[data-k="new-quiz"]'), ac = f.hidden;
    f.hidden = !ac; b.setAttribute("aria-expanded", String(ac)); b.textContent = ac ? "Kapat" : "+ Yeni quiz";
    if (ac) { var i = f.querySelector("select, input"); if (i) i.focus(); }
  });

  /* ---------- basit sekmeler (sayfa kısa kalsın): [data-tgo] düğmeleri, [data-tpanel] bölümleri ---------- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-tgo]"); if (!b) return;
    $$("[data-tgo]").forEach(function (x) { x.setAttribute("aria-selected", String(x === b)); });
    $$("[data-tpanel]").forEach(function (x) { x.hidden = x.dataset.tpanel !== b.dataset.tgo; });
  });

  /* ---------- geri bildirim: sağ altta düğme, küçük pencere; mesaj Supabase'e (yönetim → Geri bildirim) ---------- */
  function geriBildirim() {
    if (!H || !H.geriBildirim || body.dataset.page === "deneme" || $(".gb-fab")) return;
    var TUR = [
      ["hata", "Hata", '<path d="M8 8h8v9a4 4 0 0 1-8 0z M9 5l1.5 2 M15 5l-1.5 2 M8 12H4 M20 12h-4 M8 16H5 M19 16h-3"/>'],
      ["oneri", "Öneri", '<path d="M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>'],
      ["begendim", "Beğendim", '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>']
    ];
    var ik = function (d) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>'; };
    body.insertAdjacentHTML("beforeend",
      '<button type="button" class="gb-fab" aria-haspopup="dialog" aria-controls="gb-pencere">' + ik('<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8 M8 12h5"/>') + '<span>Geri bildirim</span></button>' +
      '<div class="gb-perde" hidden></div>' +
      '<div class="gb-pencere card" id="gb-pencere" role="dialog" aria-modal="true" aria-labelledby="gb-h" hidden>' +
        '<div class="gb-icerik">' +
          '<div class="row" style="align-items:center;justify-content:space-between;gap:10px"><h2 class="h3" id="gb-h" style="font-size:24px">Bir şey mi söyleyeceksin?</h2><button type="button" class="icon-btn" data-gb="kapat" aria-label="Kapat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
          '<div class="gb-turler" role="radiogroup" aria-label="Tür">' + TUR.map(function (t) { return '<button type="button" role="radio" aria-checked="false" data-tur="' + t[0] + '">' + ik(t[2]) + '<span>' + t[1] + '</span></button>'; }).join("") + '</div>' +
          '<label class="field">Mesajın<textarea data-gb="mesaj" rows="5" maxlength="2000" placeholder="Ne oldu, ne olsun istersin? Ne kadar ayrıntı, o kadar iyi."></textarea><span class="field__hint" data-gb="sayac">0 / 2000</span></label>' +
          '<p class="muted" style="font-size:13px;margin:0" data-gb="bilgi"></p>' +
          '<div class="row" style="justify-content:flex-end;gap:10px"><button type="button" class="btn btn--ghost" data-gb="kapat">Vazgeç</button><button type="button" class="btn btn--primary" data-gb="gonder">Gönder</button></div>' +
        '</div>' +
        '<div class="gb-tesekkur" hidden><span class="gb-tik" aria-hidden="true">' + I.check + '</span><h2 class="h3" style="font-size:26px">Teşekkürler!</h2><p class="muted" style="margin:0">Mesajın ulaştı; okuyup değerlendireceğiz.</p><button type="button" class="btn btn--primary" data-gb="kapat">Tamam</button></div>' +
      '</div>');
    var fab = $(".gb-fab"), perde = $(".gb-perde"), pen = $("#gb-pencere"), ta = $('[data-gb="mesaj"]', pen), tur = null, gidiyor = false;
    function sayfa() { return (location.pathname + location.search).slice(-300); }
    function ac() {
      tur = null; $$("[data-tur]", pen).forEach(function (b) { b.setAttribute("aria-checked", "false"); });
      $(".gb-icerik", pen).hidden = false; $(".gb-tesekkur", pen).hidden = true; temizle();
      fill($('[data-gb="bilgi"]', pen), "Bulunduğun sayfa (" + esc(document.title.replace(/\s*·\s*Kitpath$/, "")) + ") mesaja eklenir." + (HESAPLI ? "" : " Hesapsız gönderiyorsun; mesajın isimsiz gider."));
      perde.hidden = false; pen.hidden = false; fab.setAttribute("aria-expanded", "true");
      setTimeout(function () { $("[data-tur]", pen).focus(); }, 30);
    }
    function kapat() { perde.hidden = true; pen.hidden = true; fab.setAttribute("aria-expanded", "false"); fab.focus(); }
    function temizle() { $$(".field__err", pen).forEach(function (x) { x.remove(); }); }
    function hata(msg) { temizle(); var s = document.createElement("span"); s.className = "field__err"; s.setAttribute("role", "alert"); s.textContent = msg; $(".gb-turler", pen).insertAdjacentElement("afterend", s); }
    fab.addEventListener("click", ac);
    perde.addEventListener("click", kapat);
    ta.addEventListener("input", function () { fill($('[data-gb="sayac"]', pen), ta.value.length + " / 2000"); temizle(); });
    pen.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { kapat(); return; }
      if (e.key !== "Tab") return;
      var f = $$("button:not([hidden]), textarea", pen).filter(function (x) { return x.offsetParent !== null; });
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
    pen.addEventListener("click", function (e) {
      var t = e.target.closest("[data-tur]");
      if (t) { tur = t.dataset.tur; $$("[data-tur]", pen).forEach(function (b) { b.setAttribute("aria-checked", String(b === t)); }); temizle(); ta.focus(); return; }
      if (e.target.closest('[data-gb="kapat"]')) { kapat(); return; }
      if (!e.target.closest('[data-gb="gonder"]') || gidiyor) return;
      var m = ta.value.trim();
      if (!tur) { hata("Önce türünü seç: hata, öneri ya da beğendim."); return; }
      if (m.length < 2) { hata("Birkaç kelime yaz."); ta.focus(); return; }
      var b = $('[data-gb="gonder"]', pen); gidiyor = true; b.disabled = true; b.textContent = "Gönderiliyor…";
      var cihaz = (innerWidth < 720 ? "telefon" : "masaüstü") + " · " + innerWidth + "px · " + (document.documentElement.getAttribute("data-theme") === "dark" ? "koyu" : "açık");
      H.geriBildirim(tur, m, sayfa(), cihaz).then(function () {
        ta.value = ""; fill($('[data-gb="sayac"]', pen), "0 / 2000");
        $(".gb-icerik", pen).hidden = true; $(".gb-tesekkur", pen).hidden = false; $('.gb-tesekkur [data-gb="kapat"]', pen).focus();
      }, function (x) { hata(H.hataMetni(x)); }).then(function () { gidiyor = false; b.disabled = false; b.textContent = "Gönder"; });
    });
  }

  /* ---------- seviye sınavları ----------
     Her ders için isteğe bağlı gelişim sınavı. Turları yalnızca Ada yönetimden açar / kapatır (ap_ayarlar 'seviye');
     tur açık değilken öğrenci çözemez, yalnızca yönetici "önizleme" çözebilir (kaydedilmez).
     İki modüllü uyarlanabilir sınav (Bluebook): Modül 1 karışık zorlukta; Modül 1'den kestirilen yeteneğe göre
     Modül 2 kolay ya da zor yoldan gelir. Puan, Rasch modeliyle (soru zorluğu 1–5 → b = zor − 3) kestirilen yetenekten
     0–100 ölçeğine çevrilir; aynı doğru sayısı zor yolda daha yüksek puan eder.
     Sorular: ünitenin seviye bankası (ap/<ders>/unit-N/seviye/banka.js, her soruda zor) varsa o; yoksa deneme bankası
     (testin düzeyi → zorluk). Seçim tura + üniteye göre sabit tohumlu; aynı turda herkes aynı Modül 1'i görür. */
  var SEV = { p: null, d: null, dizin: null };
  var SEV_AD = ["", "Başlangıç", "Gelişiyor", "Orta", "İyi", "Çok iyi"];
  var SEV_DUZEY = { "Isınma": 1, "Temel": 2, "Orta": 3, "Zor": 4, "Çok zor": 5 };
  var SEV_MODUL = 15;   /* modül başına soru (2 modül) */
  /* soru başına dakika: gerçek AP çoktan seçmeli bölümünün temposu (2025-26 sınav formatları) */
  var SEV_TEMPO = { calc: 105 / 45, stats: 90 / 40, csa: 90 / 42, physc: 2, physem: 2, macro: 70 / 60, micro: 70 / 60, psych: 90 / 75, hug: 1, bpf: 1.2 };
  function sevDakika(ders, n) { return Math.ceil(n * (SEV_TEMPO[ders] || 1.5)); }
  var SEV_KARISIM = { m1: { 1: .1, 2: .25, 3: .3, 4: .25, 5: .1 }, kolay: { 1: .25, 2: .35, 3: .3, 4: .1 }, zor: { 2: .1, 3: .3, 4: .35, 5: .25 } };
  function sevYukle(tazele) {
    if (!HESAPLI || !H.seviyeDurum) return Promise.resolve(null);
    if (SEV.p && !tazele) return SEV.p;
    SEV.p = Promise.all([H.seviyeDurum().then(null, function () { return null; }), C.seviyeDizini()]).then(function (r) {
      var d = r[0]; SEV.d = d; SEV.dizin = r[1] || {};
      try { var t = (d && d.takvim) || {}; sessionStorage.setItem("kp-sev", JSON.stringify({ acik: !!t.acik, gecmis: !!(d && d.gecmis && d.gecmis.length) })); } catch (e) {}
      return d;
    });
    return SEV.p;
  }
  function sevDizin() { return SEV.dizin ? Promise.resolve(SEV.dizin) : C.seviyeDizini().then(function (z) { SEV.dizin = z || {}; return SEV.dizin; }); }
  function sevTakvimOnbellek() { try { return JSON.parse(sessionStorage.getItem("kp-sev") || "null") || {}; } catch (e) { return {}; } }
  function sevAcikMi(t) { return !!(t && t.acik && t.basladi && t.pencere_acik); }
  /* ünite: seviye bankası ya da (videolu ünitede) deneme bankası olan bütün üniteler; HuG kitinde deneme yok */
  function sevTumUniteler(ders) {
    var z = SEV.dizin || {};
    return C.DEFTER_UNITELER.filter(function (u) { return u.ders === ders; }).sort(function (a, b) { return a.unit - b.unit; }).map(function (u) {
      var k = C.kit(u.id);
      return { id: u.id, ders: ders, unit: u.unit, path: u.path, baslik: u.baslik, banka: !!z[u.id], deneme: !!k && ders !== "hug", kit: k };
    });
  }
  function sevUniteler(ders) { return sevTumUniteler(ders).filter(function (u) { return u.banka || u.deneme; }); }
  function sevDersler() { return Object.keys(C.DEFTER_DERS).filter(function (d) { return C.DEFTER_DERS[d].grup === "ap" && sevUniteler(d).length; }); }
  function sevAd(ders) { var d = C.DEFTER_DERS[ders] || C.DERSLER[ders]; return d ? (d.ad || d.title) : ders; }
  function sevKod(ders) { var d = C.DERSLER[ders]; return d ? d.code : "AP"; }
  function sevRenk(ders) { var d = C.DEFTER_DERS[ders] || C.DERSLER[ders]; return COLORS[(d && (d.renk || d.art)) || "macro"] || COLORS.macro; }
  function sevYonetici() { var p = HESAPLI && H.profil ? H.profil() : null; return !!(p && p.yonetici); }
  /* yerel kayıtlar: S (Bluebook durumu, cihazlar arası eşitlenir) ve soru seti / sonuç (yalnızca bu cihazda) */
  function sevKey(ders, tur, m) { return "kitpath:v1:" + C.kim() + ":seviye:" + ders + ":" + tur + ":m" + m; }
  function sevYerel(ad, ders, tur) { return "kitpath:v1:seviye-" + ad + ":" + C.kim() + "-" + ders + "-" + tur; }
  function lsOku(k) { try { return JSON.parse(localStorage.getItem(k) || "null"); } catch (e) { return null; } }
  function lsYaz(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function sevRng(seed) {
    var h = 2166136261 >>> 0, i;
    for (i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
    return function () { h = (h + 0x6D2B79F5) | 0; var t = h; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  function sevKaristir(a, rnd) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function sevGecerli(q) { return q && typeof q.q === "string" && Array.isArray(q.o) && q.o.length >= 2 && typeof q.a === "number" && q.a >= 0 && q.a < q.o.length; }
  /* havuz: seçilen üniteye kadar bütün soru adayları (zorluk + ünite + konu ile) */
  function sevHavuz(ders, U) {
    return sevDizin().then(function () {
      var us = sevUniteler(ders).filter(function (u) { return u.unit <= U; });
      return Promise.all(us.map(function (u) {
        if (u.banka) return C.seviyeBankasi(u).then(function (B) {
          return (B.questions || []).filter(sevGecerli).map(function (q) { return { id: q.id || (u.id + ":" + q.q.slice(0, 40)), q: q.q, o: q.o, a: q.a, w: q.w || "", fig: q.fig, t: q.t || "", zor: Math.max(1, Math.min(5, +q.zor || 3)), u: u.unit, konu: (B.topics || {})[q.t] || q.t || "", hesap: q.hesap }; });
        }, function () { return u.deneme ? sevDenemeden(u) : []; });
        return sevDenemeden(u);
      })).then(function (ls) { return [].concat.apply([], ls); });
    });
  }
  function sevDenemeden(u) {
    return C.denemeVerisi(u.kit).then(function (D) {
      var gor = {}, l = [];
      (D.tests || []).forEach(function (T) {
        var zor = SEV_DUZEY[T.level] || Math.max(1, Math.min(5, T.no || 3));
        (T.questions || []).forEach(function (q) {
          if (!sevGecerli(q) || gor[q.q]) return; gor[q.q] = 1;
          l.push({ id: u.id + ":d" + T.no + ":" + l.length, q: q.q, o: q.o, a: q.a, w: q.w || "", fig: q.fig, t: q.t || "", zor: zor, u: u.unit, konu: (D.topics || {})[q.t] || q.t || "" });
        });
      });
      return l;
    }, function () { return []; });
  }
  /* karışımı n zorluk hedefine çevir (en büyük kalan yöntemi) */
  function sevHedefler(karisim, n) {
    var ks = Object.keys(karisim), out = [], kal = [];
    ks.forEach(function (k) { var v = karisim[k] * n, t = Math.floor(v); for (var i = 0; i < t; i++) out.push(+k); kal.push([v - t, +k]); });
    kal.sort(function (a, b) { return b[0] - a[0]; });
    for (var i = 0; out.length < n && i < kal.length; i++) out.push(kal[i][1]);
    return out.sort();
  }
  /* modül seçimi: üniteler arasında eşit pay (artan sorular son ünitelere), her yuvaya hedef zorluğa en yakın soru */
  function sevSec(havuz, n, karisim, rnd, kullanilan) {
    var uns = []; havuz.forEach(function (q) { if (uns.indexOf(q.u) < 0) uns.push(q.u); }); uns.sort(function (a, b) { return a - b; });
    if (!uns.length) return [];
    var hedef = sevKaristir(sevHedefler(karisim, n), rnd), pay = {}, taban = Math.floor(n / uns.length), artan = n - taban * uns.length;
    uns.forEach(function (u, i) { pay[u] = taban + (i >= uns.length - artan ? 1 : 0); });
    var yuvalar = []; uns.forEach(function (u) { for (var i = 0; i < pay[u]; i++) yuvalar.push(u); });
    var kul = {}; Object.keys(kullanilan || {}).forEach(function (k) { kul[k] = 1; });
    var aday = sevKaristir(havuz.slice(), rnd), sec = [];
    yuvalar.forEach(function (u, i) {
      var z = hedef[i] || 3, en = null, enF = 9;
      aday.forEach(function (q) { if (kul[q.id]) return; var f = Math.abs(q.zor - z) + (q.u === u ? 0 : 3); if (f < enF) { enF = f; en = q; } });
      if (en) { kul[en.id] = 1; sec.push(en); }
    });
    return sevKaristir(sec, rnd);
  }
  /* Rasch MAP kestirimi: θ, önsel N(0, 1.5²); b = zor − 3 */
  function sevTeta(cevaplar) {
    var t = 0, s2 = 2.25, i, k;
    for (k = 0; k < 40; k++) {
      var g = -t / s2, h = -1 / s2;
      for (i = 0; i < cevaplar.length; i++) { var p = 1 / (1 + Math.exp(-(t - (cevaplar[i].zor - 3)))); g += cevaplar[i].dogru - p; h -= p * (1 - p); }
      var adim = g / h; t -= adim; t = Math.max(-4, Math.min(4, t));
      if (Math.abs(adim) < 1e-4) break;
    }
    return t;
  }
  function sevOlcek(teta) { return Math.max(0, Math.min(100, Math.round(55 + 15 * teta))); }
  function sevSeviye(y) { return y >= 85 ? 5 : y >= 70 ? 4 : y >= 55 ? 3 : y >= 40 ? 2 : 1; }
  function sevCevaplar(Q, S) { return Q.map(function (q, i) { return { zor: q.zor || 3, dogru: S && S.ans[i] === q.a ? 1 : 0 }; }); }
  function sevDetay(set, S1, S2) {
    var Q = set.M1.concat(set.M2 || []), ans = (S1 ? S1.ans : []).concat(S2 ? S2.ans : []);
    var b = {}, k = {}, d = 0;
    Q.forEach(function (q, i) {
      var ok = ans[i] === q.a ? 1 : 0; d += ok;
      var bu = b[q.u] || (b[q.u] = [0, 0]); bu[0] += ok; bu[1]++;
      var kk = q.u + "|" + q.t, ko = k[kk] || (k[kk] = [0, 0, q.konu, q.u]); ko[0] += ok; ko[1]++;
    });
    var c1 = sevCevaplar(set.M1, S1), c2 = sevCevaplar(set.M2 || [], S2), teta = sevTeta(c1.concat(c2));
    var say = function (c) { return [c.reduce(function (s, x) { return s + x.dogru; }, 0), c.length]; };
    return { dogru: d, toplam: Q.length, birim: b, konu: k, yol: set.yol, m1: say(c1), m2: say(c2), teta: Math.round(teta * 100) / 100, olcek: sevOlcek(teta) };
  }

  /* üst bildirim: tur açık, öğrencinin çözmediği ders var ve bu tur için kapatılmadıysa */
  function sevBant() {
    var sayfa = body.dataset.page;
    if (!HESAPLI || !C || /^(seviye|seviye-sinav|deneme|hosgeldin|giris|yonetim)$/.test(sayfa)) return;
    sevYukle().then(function (d) {
      var t = d && d.takvim; if (!sevAcikMi(t)) return;
      var gizli = sevYerel("bant", "x", t.tur); if (lsOku(gizli)) return;
      var yapilan = (d.gecmis || []).filter(function (g) { return g.tur === t.tur; }).map(function (g) { return g.ders; });
      var kalan = sevDersler().filter(function (x) { return yapilan.indexOf(x) < 0; });
      if (!kalan.length || $(".sev-bant")) return;
      var gun = t.tur_bitis ? Math.max(0, Math.ceil((new Date(t.tur_bitis) - Date.now()) / 864e5)) : null;
      var h = $('[data-k="header"]'); if (!h) return;
      h.insertAdjacentHTML("afterend", '<aside class="sev-bant" role="status"><span class="sev-bant__ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/></svg></span>' +
        '<span class="sev-bant__m"><strong>Seviye sınavı açıldı · Tur ' + t.tur + '</strong><span>' + (gun == null ? "Tur açık" : gun <= 1 ? "Bugün son gün" : gun + " gün içinde kapanıyor") + ' · nerede olduğunu gör, gelişimini takip et</span></span>' +
        '<a class="btn btn--primary btn--sm" href="' + ROOT + 'seviye/">Başla</a><button type="button" class="sev-bant__x" aria-label="Bu tur için gizle">×</button></aside>');
      $(".sev-bant__x").addEventListener("click", function () { lsYaz(gizli, 1); var b = $(".sev-bant"); if (b) b.remove(); });
    });
  }
  /* panel: seviye sınavı geçmişi varsa gelişim grafiği */
  function sevPanel() {
    if (!HESAPLI || !C || body.dataset.page !== "panel") return;
    sevYukle().then(function (d) {
      var g = (d && d.gecmis) || [], kok = $('[data-k="full"]');
      if (!g.length || !kok || $(".sev-panel")) return;
      kok.insertAdjacentHTML("beforeend", '<section class="card card--pad stack sev-panel rise" style="gap:14px" aria-labelledby="sevp-h"><div class="section__head"><div><span class="mono muted">SEVİYE SINAVI</span><h2 class="h3" id="sevp-h" style="font-size:24px">Gelişimin</h2></div><a class="btn btn--link" style="font-size:14px" href="' + ROOT + 'seviye/">Bütün sonuçlar →</a></div>' + sevGelisim(g) + '</section>');
    });
  }

  /* çizimler */
  function sevHalka(y, renk, boy) {
    boy = boy || 132; var r = boy / 2 - 9, c = 2 * Math.PI * r, d = c * Math.max(0, Math.min(100, y)) / 100;
    return '<svg class="sev-halka" width="' + boy + '" height="' + boy + '" viewBox="0 0 ' + boy + ' ' + boy + '" aria-hidden="true"><circle cx="' + boy / 2 + '" cy="' + boy / 2 + '" r="' + r + '" fill="none" stroke="var(--track)" stroke-width="12"/>' +
      '<circle cx="' + boy / 2 + '" cy="' + boy / 2 + '" r="' + r + '" fill="none" stroke="' + renk + '" stroke-width="12" stroke-linecap="round" stroke-dasharray="' + d + ' ' + c + '" transform="rotate(-90 ' + boy / 2 + ' ' + boy / 2 + ')" style="transition:stroke-dasharray 1s var(--ease)"/></svg>';
  }
  function sevCizgi(seri, renk, gen, yuk) {
    gen = gen || 560; yuk = yuk || 180;
    if (!seri.length) return "";
    var px = 36, py = 18, w = gen - px - 12, h = yuk - py * 2, n = seri.length;
    var x = function (i) { return px + (n === 1 ? w / 2 : i * w / (n - 1)); }, y = function (v) { return py + h - h * v / 100; };
    var izgara = [0, 25, 50, 75, 100].map(function (v) { return '<line x1="' + px + '" x2="' + (px + w) + '" y1="' + y(v) + '" y2="' + y(v) + '" stroke="var(--line)" stroke-dasharray="3 4"/><text x="' + (px - 8) + '" y="' + (y(v) + 4) + '" text-anchor="end" class="sev-eksen">' + v + '</text>'; }).join("");
    var yol = seri.map(function (p, i) { return (i ? "L" : "M") + x(i).toFixed(1) + " " + y(p.y).toFixed(1); }).join(" ");
    var alan = yol + " L" + x(n - 1).toFixed(1) + " " + (py + h) + " L" + x(0).toFixed(1) + " " + (py + h) + " Z";
    var noktalar = seri.map(function (p, i) { return '<g><circle cx="' + x(i) + '" cy="' + y(p.y) + '" r="5" fill="var(--surface)" stroke="' + renk + '" stroke-width="3"><title>' + esc(p.ad + ": " + sayi(p.y)) + '</title></circle><text x="' + x(i) + '" y="' + (py + h + 16) + '" text-anchor="middle" class="sev-eksen">' + esc(p.ad) + '</text></g>'; }).join("");
    return '<svg class="sev-cizgi" viewBox="0 0 ' + gen + ' ' + (yuk + 8) + '" role="img" aria-label="Gelişim grafiği">' + izgara +
      '<path d="' + alan + '" fill="' + renk + '" opacity=".14"/><path d="' + yol + '" fill="none" stroke="' + renk + '" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>' + noktalar + '</svg>';
  }
  function sevRozet(sev) { return '<span class="sev-rozet" data-s="' + sev + '"><b>' + sev + '</b><span>' + esc(SEV_AD[sev] || "") + '</span></span>'; }
  function sevTarih(iso) { return new Date(iso).toLocaleDateString("tr-TR", { day: "numeric", month: "long" }); }

  /* ---------- seviye/ : merkez, ders seçimi, sonuç ve gelişim ---------- */
  pages.seviye = function () {
    var kok = $('[data-k="sev-kok"]');
    if (!HESAPLI) { girisGerek(); return; }
    if (engelKontrol()) return;
    var sonucDers = param("sonuc"), sonucTur = param("tur");
    sevYukle(true).then(function (d) {
      d = d || { takvim: {}, gecmis: [] };
      if (sonucDers) { sevSonuc(kok, d, sonucDers, +sonucTur); return; }
      sevMerkez(kok, d);
    });
  };
  function sevDurumMetni(t, yon) {
    if (t && t.acik) { if (!t.tur_bitis) return ["acik", "Tur " + t.tur + " açık"]; var g = Math.max(0, Math.ceil((new Date(t.tur_bitis) - Date.now()) / 864e5)); return ["acik", "Tur " + t.tur + " açık · " + (g <= 1 ? "bugün son gün" : g + " gün kaldı")]; }
    if (yon) return ["kapali", (t && t.basladi ? "Tur " + t.tur + " kapandı" : "Kapalı") + " · yalnızca sen önizleyebilirsin"];
    return t && t.basladi ? ["bekliyor", "Tur " + t.tur + " kapandı · yeni tur açılınca haber vereceğiz"] : ["kapali", "Yakında"];
  }
  function sevMerkez(kok, d) {
    var t = d.takvim || {}, yon = sevYonetici(), acik = sevAcikMi(t), on = !acik && yon;
    var g = d.gecmis || [], st = sevDurumMetni(t, yon);
    var raf = C.raf(H.profil()).filter(function (r) { return r.rafta && r.kit.ders; }).map(function (r) { return r.kit.ders; });
    var dersler = sevDersler().sort(function (a, b) { return (raf.indexOf(b) > -1) - (raf.indexOf(a) > -1); });
    var son = function (x) { var l = g.filter(function (r) { return r.ders === x; }); return l[l.length - 1] || null; };
    var buTur = function (x) { return acik && g.some(function (r) { return r.ders === x && r.tur === t.tur; }); };
    var n = SEV_MODUL * 2;
    document.title = "Seviye sınavı · Kitpath";
    kok.innerHTML =
      '<section class="sev-hero rise"><div class="stack" style="gap:14px;flex:1 1 380px">' +
        '<span class="sev-durum" data-d="' + st[0] + '"><i></i>' + esc(st[1]) + '</span>' +
        '<h1 class="display" style="font-size:clamp(42px,5vw,60px)"><span class="hl">Seviye sınavı</span></h1>' +
        '<p class="lead" style="max-width:560px">Yeni bir tur açıldığında her ders için kısa, uyarlanabilir bir sınav. Geldiğin üniteyi işaretle, Bluebook ekranında çöz; seviyeni ve hangi konularda güçlendiğini tur tur gör. Zorunlu değil, not değil: sadece senin için.</p>' +
      '</div><ol class="sev-adimlar"><li><b>1</b><span><strong>Üniteni işaretle</strong>Sorular oraya kadar olan bütün konulardan gelir.</span></li><li><b>2</b><span><strong>2 modül · ' + n + ' soru · AP temposunda</strong>Süre gerçek AP ile aynı; ikinci modül, birinci modüldeki performansına göre kolay ya da zor gelir.</span></li><li><b>3</b><span><strong>Seviyeni gör</strong>0–100 seviye puanı, ünite ve konu kırılımı, turdan tura grafik.</span></li></ol></section>' +
      (on ? '<div class="note rise d1"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" style="flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg><span>Şu an açık tur yok; öğrenciler sınav çözemiyor. Sen önizleme çözebilirsin, sonucu kaydedilmez. Yeni tur açmak için <a href="' + ROOT + 'yonetim/?gorunum=seviye">Yönetim → Seviye sınavı</a>.</span></div>' : "") +
      '<section class="stack rise d1" style="gap:16px"><div class="section__head"><h2 class="h3" style="font-size:26px">Dersler</h2><span class="muted" style="font-size:14px">' + (acik ? "Bu turda her dersten bir sınav çözebilirsin." : on ? "Önizleme: istediğin dersten dene." : "Tur açılınca buradan başlarsın.") + '</span></div>' +
      '<div class="sev-dersler">' + dersler.map(function (x) {
        var s = son(x), renk = sevRenk(x), yapti = buTur(x), us = sevUniteler(x), tum = sevTumUniteler(x);
        var seri = g.filter(function (r) { return r.ders === x; }).map(function (r) { return +r.yuzde; });
        var mini = seri.length > 1 ? '<svg class="sev-mini" viewBox="0 0 80 24" aria-hidden="true"><polyline fill="none" stroke="' + renk + '" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" points="' + seri.map(function (v, i) { return (i * 80 / (seri.length - 1)).toFixed(1) + "," + (22 - v * 20 / 100).toFixed(1); }).join(" ") + '"/></svg>' : "";
        var alt = yapti ? '<a class="btn btn--ghost btn--sm" href="?sonuc=' + x + '&tur=' + t.tur + '">Sonucu gör</a>' : (acik || on) ? '<button type="button" class="btn btn--primary btn--sm" data-sev-ac="' + x + '">' + (on ? "Önizle" : "Başla") + '</button>' : "";
        return '<article class="card sev-ders" style="--c:' + renk + '" data-sev-ders="' + x + '"><div class="sev-ders__ust"><span class="mono muted">' + esc(sevKod(x)) + '</span>' + (yapti ? '<span class="chip chip--ok">Bu tur çözüldü</span>' : s ? '<span class="chip chip--plain">Tur ' + s.tur + '</span>' : "") + '</div>' +
          '<h3 class="h3" style="font-size:22px;margin:0">' + esc(sevAd(x)) + '</h3>' +
          '<div class="sev-ders__orta">' + (s ? sevRozet(s.seviye) + '<span class="stack" style="gap:2px"><strong style="font-size:20px">' + sayi(s.yuzde) + '<span class="muted" style="font-size:13px"> / 100</span></strong><span class="muted" style="font-size:12px">son seviye puanı · Unit 1–' + s.unite + '</span></span>' + mini : '<span class="muted" style="font-size:14px">Henüz sınav yok · ' + us.length + '/' + tum.length + ' ünitede soru hazır</span>') + '</div>' +
          '<div class="sev-ders__alt">' + alt + (s ? '<a class="btn btn--link" style="font-size:14px" href="?sonuc=' + x + '&tur=' + s.tur + '">Geçmiş →</a>' : "") + '</div>' +
          '<div class="sev-kur" data-sev-kur hidden></div></article>';
      }).join("") + '</div></section>' +
      (g.length ? '<section class="card card--pad stack rise d2" style="gap:14px"><div class="section__head"><h2 class="h3" style="font-size:24px">Gelişimin</h2><span class="muted" style="font-size:14px">turdan tura seviye puanı</span></div>' + sevGelisim(g) + '</section>' : "");
    kok.addEventListener("click", function (e) {
      var b = e.target.closest("[data-sev-ac]"); if (!b) return;
      var kart = b.closest("[data-sev-ders]"), x = kart.dataset.sevDers, kur = $("[data-sev-kur]", kart);
      $$("[data-sev-kur]", kok).forEach(function (k) { if (k !== kur) k.hidden = true; });
      if (!kur.hidden) { kur.hidden = true; return; }
      var tum = sevTumUniteler(x), us = tum.filter(function (u) { return u.banka || u.deneme; }), oner = us[0].unit;
      us.forEach(function (u) { var o = u.kit && C.ozet(u.kit); if (o && o.bitenler > 0) oner = Math.max(oner, u.unit); });
      var s = son(x); if (s) oner = Math.max(oner, s.unite);
      if (!us.some(function (u) { return u.unit === oner; })) oner = us[us.length - 1].unit;
      kur.innerHTML = '<span class="mono muted">HANGİ ÜNİTEYE KADAR GELDİN?</span><div class="sev-uniteler" role="radiogroup" aria-label="Ünite">' + tum.map(function (u) {
          var var_ = u.banka || u.deneme;
          return '<button type="button" role="radio" class="sev-u" data-u="' + u.unit + '" aria-checked="' + (u.unit === oner) + '"' + (var_ ? "" : ' disabled title="Bu ünitenin soruları hazırlanıyor"') + '>Unit ' + u.unit + '</button>';
        }).join("") + '</div>' +
        '<p class="muted" style="font-size:13px;margin:0" data-sev-bilgi></p><a class="btn btn--primary" data-sev-git href="#">' + (on ? "Önizlemeyi başlat" : "Sınava başla") + ' →</a>';
      function bilgi(u) {
        var hazir = us.filter(function (q) { return q.unit <= u; }).map(function (q) { return q.unit; });
        fill($("[data-sev-bilgi]", kur), "Unit 1–" + u + " konularından " + n + " soru: 2 modül × " + SEV_MODUL + " soru, her modül " + sevDakika(x, SEV_MODUL) + " dakika (gerçek AP temposu)." + (hazir.length < u ? " Şimdilik soru olan üniteler: " + hazir.join(", ") + "." : "") + " Kaydet ve çık ile ara verebilirsin; süre durur.");
        $("[data-sev-git]", kur).href = ROOT + "seviye/sinav/?ders=" + x + "&u=" + u + (on ? "&yeni" : "");
      }
      bilgi(oner);
      kur.onclick = function (ev) { var ub = ev.target.closest("[data-u]"); if (!ub || ub.disabled) return; $$("[data-u]", kur).forEach(function (q) { q.setAttribute("aria-checked", String(q === ub)); }); bilgi(+ub.dataset.u); };
      kur.hidden = false;
    });
  }
  function sevGelisim(g) {
    var dersler = []; g.forEach(function (r) { if (dersler.indexOf(r.ders) < 0) dersler.push(r.ders); });
    return '<div class="sev-gelisim">' + dersler.map(function (x) {
      var l = g.filter(function (r) { return r.ders === x; }), ilk = l[0], son = l[l.length - 1], fark = l.length > 1 ? son.yuzde - ilk.yuzde : null;
      return '<div class="sev-gelisim__d"><div class="row" style="align-items:center;gap:10px;justify-content:space-between"><strong><span class="dot" style="--c:' + sevRenk(x) + ';width:10px;height:10px;border-radius:3px;display:inline-block;margin-right:8px"></span>' + esc(sevAd(x)) + '</strong>' +
        (fark != null ? '<span class="chip ' + (fark >= 0 ? "chip--ok" : "chip--hot") + '">' + (fark >= 0 ? "+" : "") + sayi(fark) + ' puan</span>' : '<span class="muted" style="font-size:13px">ilk tur · ' + sayi(son.yuzde) + '</span>') + '</div>' +
        sevCizgi(l.map(function (r) { return { ad: "T" + r.tur, y: +r.yuzde }; }), sevRenk(x)) + '</div>';
    }).join("") + '</div>';
  }
  function sevSonuc(kok, d, ders, tur) {
    var g = (d.gecmis || []).filter(function (r) { return r.ders === ders; });
    var kayit = g.filter(function (r) { return r.tur === tur; })[0] || null;
    var yerel = lsOku(sevYerel("sonuc", ders, tur)), set = lsOku(sevYerel("set", ders, tur));
    var S1 = C.oku(sevKey(ders, tur, 1)), S2 = C.oku(sevKey(ders, tur, 2));
    var det = kayit ? kayit.detay : yerel && yerel.detay;
    var onizleme = tur === 0;
    if (!det || det.olcek == null && det.toplam == null) { kok.innerHTML = '<section class="card empty"><div class="stack" style="gap:12px"><h1 class="h2">Bu sonucu bulamadım.</h1><a class="btn btn--primary" style="align-self:flex-start" href="' + ROOT + 'seviye/">Seviye sınavına dön</a></div></section>'; return; }
    var dogru = det.dogru, toplam = det.toplam, puan = kayit ? +kayit.yuzde : det.olcek != null ? det.olcek : Math.round(100 * dogru / toplam), sev = kayit ? kayit.seviye : sevSeviye(puan);
    var renk = sevRenk(ders), onceki = g.filter(function (r) { return r.tur < tur; }).pop();
    var fark = onceki ? puan - onceki.yuzde : null;
    var konular = Object.keys(det.konu || {}).map(function (k) { var v = det.konu[k]; return { ad: v[2] || k.split("|")[1], u: v[3], d: v[0], t: v[1], y: v[1] ? v[0] / v[1] : 0 }; });
    var zayif = konular.filter(function (k) { return k.y < .6; }).sort(function (a, b) { return a.y - b.y || b.t - a.t; }).slice(0, 4);
    var guclu = konular.filter(function (k) { return k.y >= .99 && k.t >= 2; }).slice(0, 4);
    var yolChip = det.yol ? '<span class="chip ' + (det.yol === "zor" ? "chip--info" : "chip--plain") + '" style="font-size:13px">Modül 2: ' + (det.yol === "zor" ? "zor yol" : "kolay yol") + '</span>' : "";
    var mod = det.m1 ? '<div class="sev-moduller"><div><span class="mono muted">MODÜL 1 · KARIŞIK</span><b>' + det.m1[0] + '/' + det.m1[1] + '</b></div><div><span class="mono muted">MODÜL 2 · ' + (det.yol === "zor" ? "ZOR" : "KOLAY") + '</span><b>' + det.m2[0] + '/' + det.m2[1] + '</b></div></div>' : "";
    document.title = "Sonuç · Seviye sınavı · Kitpath";
    kok.innerHTML =
      '<a class="btn btn--link rise" style="align-self:flex-start" href="' + ROOT + 'seviye/">← Seviye sınavı</a>' +
      '<section class="card sev-sonuc rise" style="--c:' + renk + '"><div class="sev-sonuc__sol">' + sevHalka(puan, renk, 168) + '<div class="sev-sonuc__ortala"><b>' + sayi(puan) + '</b><span>seviye puanı</span></div></div>' +
        '<div class="stack" style="gap:10px;flex:1 1 320px"><span class="mono muted">' + esc(sevKod(ders)) + ' · ' + (onizleme ? "ÖNİZLEME" : "TUR " + tur) + (kayit ? " · " + esc(sevTarih(kayit.tarih).toLocaleUpperCase("tr-TR")) : "") + '</span>' +
        '<h1 class="display" style="font-size:clamp(34px,4vw,48px)">' + esc(sevAd(ders)) + '</h1>' +
        '<div class="row" style="gap:12px;align-items:center;flex-wrap:wrap">' + sevRozet(sev) + '<span class="muted" style="font-size:14px">' + dogru + ' / ' + toplam + ' doğru</span>' + yolChip + (fark != null ? '<span class="chip ' + (fark >= 0 ? "chip--ok" : "chip--hot") + '" style="font-size:13px">' + (fark >= 0 ? "▲ +" : "▼ ") + sayi(fark) + ' · önceki tur ' + sayi(onceki.yuzde) + '</span>' : "") + (kayit && kayit.sure_ms ? '<span class="muted" style="font-size:14px">' + fmt(kayit.sure_ms / 1000) + ' dk</span>' : "") + '</div>' +
        mod +
        '<p class="muted" style="margin:0">' + esc(sev >= 4 ? "Bu ünitelerde sağlamsın. Bir sonraki turda yeni üniteleri ekleyerek kendini zorlamaya devam et." : sev === 3 ? "Temel oturmuş; aşağıdaki konuları tekrar edersen bir üst seviyeye çıkarsın." : "Başlangıç için gayet normal. Aşağıdaki konulardan başla; bir sonraki turda farkı göreceksin.") + '</p>' +
        (onizleme ? '<span class="chip chip--warn" style="align-self:flex-start">Önizleme · kaydedilmedi</span>' : "") + '</div></section>' +
      '<section class="sev-iki rise d1"><div class="card card--pad stack" style="gap:14px"><h2 class="h3">Ünitelere göre</h2>' +
        Object.keys(det.birim || {}).sort(function (a, b) { return a - b; }).map(function (u) { var v = det.birim[u], p = v[1] ? Math.round(100 * v[0] / v[1]) : 0; return '<div class="sev-bar"><span class="mono">UNIT ' + u + '</span><div class="progress"><span style="--w:' + p + '%;--c:' + uniteTonu(renk, +u) + '"></span></div><span class="mono">' + v[0] + '/' + v[1] + '</span></div>'; }).join("") + '</div>' +
        '<div class="card card--pad stack" style="gap:14px"><h2 class="h3">Odaklanman gerekenler</h2>' +
        (zayif.length ? zayif.map(function (k) { var su = sevTumUniteler(ders).filter(function (u) { return u.unit === k.u; })[0], href = su ? (su.kit ? ROOT + "unite/?kit=" + su.kit.id : ROOT + "defterler/?u=" + su.id) : "#"; return '<a class="sev-konu" href="' + href + '"><span class="sev-konu__p">' + k.d + '/' + k.t + '</span><span class="stack" style="gap:2px;min-width:0"><strong>' + esc(k.ad) + '</strong><span class="muted" style="font-size:12px">Unit ' + k.u + ' · ' + (su && su.kit ? "üniteye git" : "defterine git") + ' →</span></span></a>'; }).join("") : '<p class="muted" style="margin:0">Belirgin bir zayıf konu yok, tebrikler!</p>') +
        (guclu.length ? '<span class="mono muted" style="margin-top:6px">GÜÇLÜ OLDUKLARIN</span><div class="row" style="gap:6px;flex-wrap:wrap">' + guclu.map(function (k) { return '<span class="chip chip--ok">' + esc(k.ad) + '</span>'; }).join("") + '</div>' : "") + '</div></section>' +
      (g.length > 1 ? '<section class="card card--pad stack rise d2" style="gap:12px"><div class="section__head"><h2 class="h3">Gelişimin</h2><span class="muted" style="font-size:14px">' + esc(sevAd(ders)) + ' · bütün turlar</span></div>' + sevCizgi(g.map(function (r) { return { ad: "T" + r.tur, y: +r.yuzde }; }), renk) + '</section>' : "") +
      (set && S1 && S1.done && S2 && S2.done ? '<section class="card card--pad stack rise d2" style="gap:14px"><div class="section__head"><h2 class="h3">Soruları incele</h2><div class="row" style="gap:6px;flex-direction:row" role="group" aria-label="Süz"><button type="button" class="filter" data-sev-f="yanlis" aria-pressed="true">Yanlışlar</button><button type="button" class="filter" data-sev-f="hepsi" aria-pressed="false">Hepsi</button></div></div><div class="stack" style="gap:12px" data-sev-sorular></div></section>' : "");
    if (set && S1 && S1.done && S2 && S2.done) {
      var Q = set.M1.concat(set.M2 || []), ans = S1.ans.concat(S2.ans), f = "yanlis", ZA = ["", "Isınma", "Temel", "Orta", "Zor", "Çok zor"];
      var ciz = function () {
        $$("[data-sev-f]", kok).forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.sevF === f)); });
        var html = Q.map(function (q, i) {
          var c = ans[i], ok = c === q.a;
          if (f === "yanlis" && ok) return "";
          return '<details class="sev-soru" data-ok="' + ok + '"><summary><span class="sev-soru__n">' + (i + 1) + '</span><span class="sev-soru__q">' + md(q.q) + '</span><span class="chip ' + (ok ? "chip--ok" : c < 0 ? "chip--plain" : "chip--hot") + '">' + (ok ? "Doğru" : c < 0 ? "Boş" : "Yanlış") + '</span></summary>' +
            (q.fig ? '<div class="sev-fig" data-sev-fig="' + i + '"></div>' : "") +
            '<ol class="sev-secenek" type="A">' + q.o.map(function (o, j) { return '<li data-dogru="' + (j === q.a) + '" data-sen="' + (j === c) + '">' + md(o) + '</li>'; }).join("") + '</ol>' +
            (q.w ? '<div class="sev-acik"><span class="mono muted">AÇIKLAMA</span><div>' + md(q.w) + '</div></div>' : "") + '<span class="muted" style="font-size:12px">' + (i < SEV_MODUL ? "Modül 1" : "Modül 2") + ' · Unit ' + q.u + ' · ' + esc(q.konu) + ' · ' + (ZA[q.zor] || "") + '</span></details>';
        }).join("");
        fill("[data-sev-sorular]", html || '<p class="muted">Yanlışın yok!</p>');
        $$("[data-sev-fig]", kok).forEach(function (el) { var q = Q[+el.dataset.sevFig]; if (q.fig.type === "table") el.innerHTML = tabloHTML(q.fig); else sekilKoy(el, q.fig); });
      };
      C.sekiller().then(ciz, ciz);
      kok.addEventListener("click", function (e) { var b = e.target.closest("[data-sev-f]"); if (b) { f = b.dataset.sevF; ciz(); } });
    }
  }

  /* ---------- seviye/sinav/ : iki modül, Bluebook ekranı ---------- */
  pages["seviye-sinav"] = function () {
    var BB = window.KPBluebook, geri = ROOT + "seviye/";
    if (!C || !BB) return;
    if (!HESAPLI) { girisGerek(); return; }
    var ders = param("ders"), U = parseInt(param("u"), 10) || 1, modul = param("modul") === "2" ? 2 : 1;
    sevYukle(true).then(function (d) {
      if (sevDersler().indexOf(ders) < 0) { BB.hata("Bu ders için seviye sınavı yok.", geri, "Seviye sınavına dön"); return; }
      var t = (d && d.takvim) || {}, acik = sevAcikMi(t), on = !acik;
      if (on && !sevYonetici()) { BB.hata("Seviye sınavı şu an açık değil.", geri, "Seviye sınavına dön"); return; }
      var tur = on ? 0 : t.tur, sonucUrl = geri + "?sonuc=" + ders + "&tur=" + tur;
      if (!on && ((d && d.gecmis) || []).some(function (g) { return g.ders === ders && g.tur === tur; })) { location.replace(sonucUrl); return; }
      var setK = sevYerel("set", ders, tur), k1 = sevKey(ders, tur, 1), k2 = sevKey(ders, tur, 2);
      if (param("yeni") !== null && (on || modul === 1)) { if (on) { lsYaz(setK, null); C.yaz(k1, null); C.yaz(k2, null); } history.replaceState(null, "", "?ders=" + ders + "&u=" + U); }
      var set = lsOku(setK);
      var hazir = set && set.U === U && set.M1 && set.M1.length && (set.n || 10) === SEV_MODUL ? Promise.resolve(set) : sevHavuz(ders, U).then(function (havuz) {
        set = { U: U, tur: tur, n: SEV_MODUL, M1: sevSec(havuz, SEV_MODUL, SEV_KARISIM.m1, sevRng(ders + ":" + tur + ":" + U + ":m1"), {}), M2: null, yol: null };
        lsYaz(setK, set); C.yaz(k1, null); C.yaz(k2, null);
        return set;
      });
      Promise.all([hazir, C.sekiller()]).then(function (rs) {
        set = rs[0];
        if (!set.M1.length) { BB.hata("Bu ders için soru bulunamadı.", geri, "Seviye sınavına dön"); return; }
        var S1 = C.oku(k1), S2 = C.oku(k2);
        if (modul === 1 && S1 && S1.done) { location.replace("?ders=" + ders + "&u=" + U + "&modul=2"); return; }
        if (modul === 2 && !(S1 && S1.done && set.M2)) { location.replace("?ders=" + ders + "&u=" + U); return; }
        if (modul === 2 && S2 && S2.done) { location.replace(sonucUrl); return; }
        var Q = modul === 1 ? set.M1 : set.M2, dk = sevDakika(ders, Q.length);
        var baslik = (on ? "Seviye Sınavı · Önizleme" : "Seviye Sınavı · Tur " + tur) + " · Modül " + modul;
        var Cw = { deneme: function () { return C.oku(modul === 1 ? k1 : k2); }, denemeYaz: function (k, no, S) { C.yaz(modul === 1 ? k1 : k2, S); }, calisti: C.calisti };
        var basla = function () {
          BB.basla({
            k: { id: "sev-" + ders, ders: ders, unit: U }, no: modul, DEN: { course: "AP " + sevAd(ders), unit: "Unit 1–" + U },
            T: { no: modul, minutes: dk, questions: Q }, C: Cw, ROOT: ROOT, ad: ME ? ME.name : "", md: md, esc: esc, fmt: fmt, tabloHTML: tabloHTML, sekilKoy: sekilKoy, param: param,
            baslik: baslik, turAd: "module", geriUrl: geri, sonucUrl: modul === 1 ? "?ders=" + ders + "&u=" + U + "&modul=2" : sonucUrl,
            yonerge: '<h2>' + esc(baslik) + ' · AP ' + esc(sevAd(ders)) + ' · Unit 1–' + U + '</h2>' +
              (modul === 1 ? '<p>This level check has <strong>two modules</strong> of ' + SEV_MODUL + ' questions each. Module 1 has a mix of easier and harder questions; how you do on it decides whether Module 2 is easier or harder.</p>'
                           : '<p>Module 2 was built from your Module 1 answers. Harder questions count for more, so do your best on each one.</p>') +
              '<p>This module has <strong>' + Q.length + ' multiple-choice questions</strong> and a time limit of <strong>' + dk + ' minutes</strong>. It is <strong>optional and not graded</strong>. Unanswered questions count as incorrect; when time runs out, your answers are submitted automatically.</p>',
            bitti: function (S) {
              if (modul === 1) {
                var teta1 = sevTeta(sevCevaplar(set.M1, S)), yol = teta1 >= 0 ? "zor" : "kolay", kul = {};
                set.M1.forEach(function (q) { kul[q.id] = 1; });
                return sevHavuz(ders, U).then(function (havuz) {
                  set.yol = yol; set.teta1 = Math.round(teta1 * 100) / 100;
                  set.M2 = sevSec(havuz, SEV_MODUL, SEV_KARISIM[yol], sevRng(ders + ":" + tur + ":" + U + ":m2:" + yol + ":" + C.kim()), kul);
                  lsYaz(setK, set);
                });
              }
              var det = sevDetay(set, C.oku(k1), S);
              lsYaz(sevYerel("sonuc", ders, tur), { detay: det, tarih: Date.now() });
              if (on) return null;
              var s1 = C.oku(k1);
              return H.seviyeKaydet({ ders: ders, unite: U, dogru: det.dogru, toplam: det.toplam, olcek: det.olcek, detay: det, sure_ms: (s1 && s1.used || 0) + (S.used || 0) }).then(function () { SEV.p = null; }, function () {});
            }
          });
        };
        if (modul === 2 && !S2) {
          var app = $(".bbk-app");
          app.innerHTML = '<main class="bbk-main"><div class="bbk-arasi"><span class="bbk-arasi__ic" aria-hidden="true">✓</span><h1>Module 1 complete</h1><p>Module 2 is ready and was built from your answers. It has ' + set.M2.length + ' questions and a ' + dk + '-minute timer that starts when you continue.</p><p class="bbk-arasi__tr">Modül 1 bitti. Modül 2, cevaplarına göre hazırlandı; süre "Continue"a basınca başlar. İstersen biraz ara ver.</p><button type="button" class="bbk-btn" data-k="m2">Continue to Module 2</button><a class="bbk-arasi__geri" href="' + geri + '">Save and exit</a></div></main>';
          $('[data-k="m2"]').addEventListener("click", basla);
          return;
        }
        basla();
      }, function () { BB.hata("Sınav şu an yüklenemedi. İnternetini kontrol edip sayfayı yenile.", geri, "Seviye sınavına dön"); });
    });
  };

  /* ---------- başlat ---------- */
  header();
  bottomNav();
  var page = body.dataset.page;
  if (pages[page]) pages[page]();
  geriBildirim();
  sevBant();
  sevPanel();
  window.Kitora = { theme: theme, art: art, toast: toast };
})();
