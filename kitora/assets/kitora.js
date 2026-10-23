/* Kitora UI v2 — ortak davranışlar ve sayfa modülleri.
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
  var COLORS = { macro: "#E07A3F", micro: "#D2557A", psych: "#1F9FB4", stats: "#2FA37A", hug: "#3D7BFF", bpf: "#9B6BDB", calc: "#E0A43F", cep: "#D9A21B",
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
  function devamAdresi() { var d = param("devam"); return d && /^\/(?!\/)/.test(d) ? d : null; }
  function girisGerek() { location.replace(ROOT + "giris/?mod=giris&devam=" + encodeURIComponent(buradan())); }
  /* kitlerden önce: kurulum eksikse onboarding, süresi geçmiş quiz notu varsa panel */
  function engelKontrol(panelde) {
    if (!HESAPLI) return false;
    function bak(p) {
      var e = H.engel(p);
      if (e === "kurulum") { git("hosgeldin/"); return true; }
      if (e === "not" && !panelde) { git("panel/"); return true; }
      return false;
    }
    var p0 = H.profil();
    if (p0 && bak(p0)) return true;
    H.profilYenile().then(function (p) { bak(p); }, function () {});
    return false;
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
  var LOGO = '<svg viewBox="0 0 120 120" aria-hidden="true"><rect width="120" height="120" rx="28" fill="#17110C"/><rect x="26" y="26" width="30" height="30" rx="8" fill="#F4EAD9"/><rect x="26" y="64" width="30" height="30" rx="8" fill="#F4EAD9"/><rect x="64" y="64" width="30" height="30" rx="8" fill="#F4EAD9"/><g transform="rotate(12 79 41)"><rect x="66" y="22" width="30" height="30" rx="8" fill="#E9B949"/></g></svg>';

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
      default:
        return '<svg class="art" viewBox="0 0 64 64" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 14h26l8 8v28H16z"/><path d="M24 30h18M24 38h18M24 46h10"/></svg>';
    }
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
    var brand = '<a class="brand" href="' + ROOT + 'index.html">' + LOGO + '<span class="brand__name">Kitora</span></a>';
    var streak = '<span class="streak" title="Çalışma serin">' + I.flame + u.streak + ' gün</span>';
    var avatar = '<a class="avatar" href="' + ROOT + 'profil/" aria-label="Profilim">' + esc(u.initials) + '</a>';
    var appNav = '<nav class="nav" aria-label="Ana menü">' +
      '<a href="' + ROOT + 'panel/"' + (active === "panel" ? ' aria-current="page"' : "") + '>Panelim</a>' +
      '<a href="' + ROOT + 'kitlerim/"' + (active === "kitlerim" ? ' aria-current="page"' : "") + '>Kitlerim</a>' +
      '<a href="' + ROOT + 'defterler/"' + (active === "defterler" ? ' aria-current="page"' : "") + '>Defterler</a>' +
      '<a href="' + ROOT + 'notlarim/"' + (active === "notlarim" ? ' aria-current="page"' : "") + '>Notlarım</a>' +
      '<a href="' + ROOT + 'kitler/"' + (active === "kitler" ? ' aria-current="page"' : "") + '>Tüm kitler</a></nav>';
    var html = "";
    /* tek menü: giriş yapılmışsa her sayfada aynı uygulama menüsü, yapılmamışsa aynı herkese açık menü */
    if (v === "public" || v === "app" || v === "unit") {
      var acikNav = '<nav class="nav" aria-label="Ana menü">' +
        '<a href="' + ROOT + 'kitler/"' + (active === "kitler" ? ' aria-current="page"' : "") + '>Tüm kitler</a>' +
        '<a href="' + ROOT + 'defterler/"' + (active === "defterler" ? ' aria-current="page"' : "") + '>Defterler</a></nav>';
      html = HESAPLI
        ? '<div class="k-header__left">' + brand + appNav + '</div><div class="k-header__right">' + streak + toggleBtn + avatar + '</div>'
        : '<div class="k-header__left">' + brand + acikNav + '</div><div class="k-header__right">' + toggleBtn + '<a class="btn btn--link hide-sm" href="' + ROOT + 'giris/?mod=giris">Giriş yap</a><a class="btn btn--primary btn--sm" href="' + ROOT + 'giris/">Hesap aç</a></div>';
    } else if (v === "admin") {
      html = '<div class="k-header__left">' + brand + '<span class="badge-admin">YÖNETİM</span></div><div class="k-header__right">' + toggleBtn + '<a class="btn btn--ghost btn--sm" href="' + ROOT + 'panel/">Öğrenci görünümü</a></div>';
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
    el.innerHTML = item("panel", "panel/", I.home, "Panelim") + item("kitlerim", "kitlerim/", I.books, "Kitlerim") + item("defterler", "defterler/", I.defter, "Defterler") + item("notlarim", "notlarim/", I.note, "Notlar") + item("profil", "profil/", I.user, "Profil");
  }

  /* ---------- kitler: katalog + bu hesabın (ya da misafirin) ilerlemesi ---------- */
  function dersler() {
    if (!C) return [];
    return Object.keys(C.DERSLER).map(function (id) {
      var d = C.DERSLER[id], kits = C.KITLER.filter(function (k) { return k.ders === id; }), n = 0, b = 0, son = null;
      kits.forEach(function (k) {
        var o = C.ozet(k);
        if (!o) return;
        n += o.n; b += o.bitenler;
        if (!son || (o.t || 0) > (son.o.t || 0)) son = { k: k, o: o };
      });
      var hedef = son && son.o.bitenler < son.o.n ? son.k : (kits.filter(function (k) { var o = C.ozet(k); return !o || o.bitenler < o.n; })[0] || kits[0]);
      return { id: id, title: d.title, code: d.code, art: d.art, renk: d.renk || d.art, rot: d.rot, video: d.video, kits: kits, pct: n ? Math.round(100 * b / n) : 0, son: son, href: "ders/?d=" + id, uniteHref: "unite/?kit=" + hedef.id };
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
      (c.video ? '<span class="chip">▶ Videolu</span>' : "") + (HESAPLI ? "" : '<span class="chip">Unit 1 hesapsız</span>') + '</div>' +
      '<span class="kit-card__title">' + esc(c.title) + '</span><span class="kit-card__meta">' + (HESAPLI ? esc(units.join(" · ")) + " açık" : c.kits.length + " ünite hazır") + '</span>' + lock +
      '<div class="kit-card__progress"><div class="progress progress--thin" role="progressbar" aria-label="İlerleme" aria-valuenow="' + c.pct + '" aria-valuemin="0" aria-valuemax="100"><span style="--w:' + c.pct + '%"></span></div><span class="mono muted">%' + c.pct + '</span></div>' +
      '</div></a>';
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
    var ders = C.DERSLER[k.ders], col = COLORS[ders.renk || ders.art];
    var main = $("main");
    if (col !== COLORS.macro) body.style.setProperty("--macro", col);
    header();
    var gb = $('[data-k="guest-bar"]');
    if (gb) gb.hidden = HESAPLI;
    if (engelKontrol()) return;
    if (!HESAPLI && k.unit > 1) {
      document.title = "AP " + ders.title + " · Unit " + k.unit + " · Kitora";
      main.innerHTML = '<section class="card empty rise">' + I.lock.replace('width="14" height="14"', 'width="72" height="72"') +
        '<div class="stack" style="flex:1 1 320px;gap:12px"><span class="hand" style="color:var(--macro);font-size:30px">bir adım kaldı</span><h1 class="h2" style="font-size:34px">' + esc(ders.title) + ' · Unit ' + k.unit + ' ücretsiz hesapla açılır.</h1>' +
        '<p class="muted" style="line-height:1.6">Unit 1 hesapsız açık. Ücretsiz bir hesapla bütün üniteler açılır ve ilerlemen her cihazda seninle olur.</p>' +
        '<div class="row" style="gap:10px"><a class="btn btn--primary" href="' + ROOT + 'giris/?devam=' + encodeURIComponent(buradan()) + '">Ücretsiz hesap aç</a><a class="btn btn--ghost" href="' + ROOT + 'giris/?mod=giris&devam=' + encodeURIComponent(buradan()) + '">Giriş yap</a></div></div></section>';
      return;
    }
    main.setAttribute("aria-busy", "true");
    C.kitVerisi(k).then(function (KIT) {
      var den = KIT.denemeler ? C.denemeVerisi(k).then(null, function () { return null; }) : Promise.resolve(null);
      return Promise.all([KIT, den, C.sekiller()]);
    }).then(function (r) { main.removeAttribute("aria-busy"); uniteBasla(k, ders, r[0], r[1]); }, function () {
      main.removeAttribute("aria-busy");
      main.innerHTML = '<section class="card empty"><div class="stack" style="flex:1 1 320px;gap:12px"><span class="hand" style="color:var(--macro);font-size:30px">hay aksi</span><h1 class="h2" style="font-size:32px">Kit şu an yüklenemedi.</h1><p class="muted">İnternet bağlantını kontrol edip sayfayı yenile.</p><button type="button" class="btn btn--primary" style="align-self:flex-start" onclick="location.reload()">Yenile</button></div></section>';
    });
  };

  function uniteBasla(k, ders, KIT, DEN) {
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
    document.title = "AP " + kurs + " · " + unitShort + " · Kitora";
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
        var state = C.bittiMi(x, s.eps[x.slug]) ? "done" : "todo";
        return '<button type="button" class="step" data-i="' + i + '" data-state="' + state + '"' + (i === s.cur ? ' aria-current="step"' : "") + ' aria-label="Bölüm ' + (i + 1) + ': ' + esc(x.title) + (state === "done" ? " (bitti)" : "") + '">' +
          '<span class="step__dot"><span class="num">' + (i + 1) + '</span>' + I.check + '</span><span class="step__code">' + esc(x.code || i + 1) + '</span></button>';
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
    }

    function defter() {
      var x = ep(), nb = $('[data-k="notebook"]');
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
      sec.innerHTML = head(Q.length + " soru bitince hepsini birlikte görürsün") + '<p class="q-text">' + md(q.q) + '</p>' + figHtml +
        '<div class="opts">' + q.opts.map(function (o, i) { return '<button type="button" class="opt" data-o="' + i + '" aria-pressed="' + (pick === i) + '"><span class="opt__letter">' + L[i] + '</span>' + md(o) + '</button>'; }).join("") + '</div>' +
        '<div class="row" style="justify-content:flex-end"><button type="button" class="btn btn--primary" data-k="next-q">' + (ilkBosSonra() < 0 ? "Bitir, sonuçları gör" : "Sonraki soru →") + '</button></div>';
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
      if (o) { pick = +o.dataset.o; $$(".opt", ev.currentTarget).forEach(function (x) { x.setAttribute("aria-pressed", String(+x.dataset.o === pick)); }); return; }
      if (ev.target.closest('[data-k="next-q"]')) {
        if (pick === null) { toast("Önce bir şık seç"); return; }
        est().ans[C.qid(ep().questions[qi])] = pick;
        pick = null; C.calisti();
        qi = ilkBos();
        save();
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
    var grade = p.sinif === 10 && step === 1 ? 10 : 11, el = [];   /* profilden "11. sınıf" seçilince ?adim=2 ile gelir */
    Object.keys(SEC).forEach(function (key) { if ((p.secmeliler || []).indexOf(SEC[key]) > -1) el.push(key); });
    var root = $('[data-k="ob"]'), devam = devamAdresi();
    fill('.ob__step[data-step="1"] h1', "Selam " + esc(ilkAd(ME.name)) + '! <span class="hl">Kaçıncı sınıftasın?</span>');
    $('[data-k="go"]').href = devam || ROOT + "kitlerim/";
    var kaydediliyor = false;
    function render() {
      $$(".ob__segs i").forEach(function (s, i) { s.className = i < step ? "on" : ""; });
      $('[data-k="ob-progress"]').setAttribute("aria-label", "Adım " + step + " / 3");
      $$(".ob__step", root).forEach(function (s) { s.hidden = +s.dataset.step !== step; });
      $$("[data-grade]", root).forEach(function (b) { b.setAttribute("aria-pressed", String(+b.dataset.grade === grade)); });
      $$("[data-el]", root).forEach(function (b) { b.setAttribute("aria-pressed", String(el.indexOf(b.dataset.el) > -1)); });
      $$("[data-for-grade]", root).forEach(function (x) { x.hidden = +x.dataset.forGrade !== grade; });
      $('[data-k="back"]').style.visibility = step > 1 ? "visible" : "hidden";
      $('[data-k="fwd"]').hidden = step === 3;
      $('[data-k="go"]').hidden = step !== 3;
      var ap = el.filter(function (x) { return x !== "calcx"; });
      fill('[data-k="summary"]', grade === 11
        ? (ap.length ? ap.map(function (x) { return adlar[x]; }).join(" ve ") + " rafının en üstünde. Macro, HuG ve Business de herkese açık." : "Macro, HuG ve Business herkese açık; seçmeli AP kitlerin hazır olunca rafına düşer.")
        : "10. sınıf ortak derslerin rafında. Macro, HuG ve Business de herkese açık.");
      var h = $(".ob__step:not([hidden]) h1", root);
      if (h && document.activeElement && document.activeElement.closest && document.activeElement.closest(".ob__nav")) h.focus();
    }
    function kaydet() {
      var korunan = (p.secmeliler || []).filter(function (d) { return Object.keys(SEC).every(function (x) { return SEC[x] !== d; }) && C.OKUL.onuncu.indexOf(d) < 0; });
      var liste = grade === 11 ? el.map(function (x) { return SEC[x]; }).concat(korunan) : [];
      var fwd = $('[data-k="fwd"]');
      kaydediliyor = true; fwd.disabled = true; fwd.textContent = "Kaydediliyor…";
      H.profilKaydet(grade, liste, !(p && p.katilim === false)).then(function (p2) {
        p = p2 || p; step = 3; kaydediliyor = false; fwd.disabled = false; fwd.textContent = "Devam →"; render();
      }, function (x) {
        kaydediliyor = false; fwd.disabled = false; fwd.textContent = "Devam →"; toast(H.hataMetni(x));
      });
    }
    root.addEventListener("click", function (e) {
      if (kaydediliyor) return;
      var g = e.target.closest("[data-grade]"); if (g) { grade = +g.dataset.grade; render(); }
      var x = e.target.closest("[data-el]");
      if (x) {
        var id = x.dataset.el, k = el.indexOf(id);
        if (k > -1) el.splice(k, 1); else { el.push(id); if (id === "calc") el = el.filter(function (y) { return y !== "calcx"; }); if (id === "calcx") el = el.filter(function (y) { return y !== "calc"; }); }
        render();
      }
      if (e.target.closest('[data-k="back"]')) { step = Math.max(1, step - 1); render(); }
      if (e.target.closest('[data-k="fwd"]')) {
        if (step === 1) { step = 2; render(); return; }
        if (grade === 11 && !el.length) { toast("Matematik dersin dahil, en az birini seç"); return; }
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
    fill('[data-k="alert"] .alert__body', '<strong>Kitlerin kısa bir mola verdi.</strong><span style="font-size:15px;line-height:1.55">' +
      bek.map(function (q) { return esc(q.ders + " · " + q.baslik); }).join(", ") + ' quizinin son tarihi geçti. Notunu buraya yaz ya da hocan girsin; not girilince kitlerin hemen açılır.</span>' +
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
    $$("[data-dim]").forEach(function (x) { x.classList.toggle("dimmed", engel); if (engel) x.setAttribute("aria-disabled", "true"); else x.removeAttribute("aria-disabled"); });

    var res = $(".resume");
    res.hidden = !r.son;
    if (r.son) {
      var k = r.son.kit, o = r.son.ozet, ders = C.DERSLER[k.ders];
      res.href = ROOT + "unite/?kit=" + k.id;
      res.style.setProperty("--macro", COLORS[ders.renk || ders.art]);
      var bodyEl = $(".resume__body", res);
      bodyEl.innerHTML = '<span class="mono muted">KALDIĞIN YER · AP ' + esc(ders.title.toUpperCase()) + ' · UNIT ' + k.unit + '</span>' +
        '<span class="display" style="font-size:32px;line-height:1.05;letter-spacing:-.02em">' + (o.bitenler >= o.n ? "Ünite bitti!" : "Bölüm " + (o.cur + 1) + " · " + esc(o.curTitle)) + '</span>' +
        '<span class="muted" style="font-size:15px">' + o.bitenler + '/' + o.n + ' bölüm bitti' + (o.ans ? ' · ' + o.ok + '/' + o.ans + ' soru doğru' : "") + '</span>' +
        '<div class="row" style="align-items:center;gap:12px;margin-top:auto;flex-wrap:nowrap"><div class="progress" role="progressbar" aria-label="Ünite ilerlemesi" aria-valuenow="' + o.pct + '" aria-valuemin="0" aria-valuemax="100"><span style="--w:' + o.pct + '%"></span></div><span class="mono">%' + o.pct + '</span></div>' +
        '<span class="btn btn--primary" style="align-self:flex-start;margin-top:6px">' + (o.bitenler >= o.n ? "Denemelere geç →" : "Devam et →") + '</span>';
    }
    fill('[data-k="quizzes"]', yak.length ? yak.slice(0, 3).map(quizSatiri).join("") : bosQuiz());
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
    var chips = (r.varsayilan ? '<span class="chip chip--info" style="font-size:11px">sınıfından</span>' : "") + (r.eklendi ? '<span class="chip chip--ok" style="font-size:11px">eklendi</span>' : "") + (!r.hazir ? '<span class="chip chip--warn" style="font-size:11px">yakında</span>' : "");
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
    function kilit(u2) {
      kok.innerHTML = '<a class="btn btn--link" style="align-self:flex-start" href="' + ROOT + 'defterler/">← Defterler</a><section class="card empty rise">' + I.lock.replace('width="14" height="14"', 'width="72" height="72"') +
        '<div class="stack" style="flex:1 1 320px;gap:12px"><span class="hand" style="color:var(--macro);font-size:30px">bir adım kaldı</span><h1 class="h2" style="font-size:32px">' + esc(C.DEFTER_DERS[u2.ders].ad) + ' · Unit ' + u2.unit + ' defterleri ücretsiz hesapla açılır.</h1>' +
        '<p class="muted" style="line-height:1.6">Unit 1 defterleri hesapsız açık. Ücretsiz bir hesapla bütün defterler açılır.</p>' +
        '<div class="row" style="gap:10px"><a class="btn btn--primary" href="' + ROOT + 'giris/?devam=' + encodeURIComponent(buradan()) + '">Ücretsiz hesap aç</a><a class="btn btn--ghost" href="' + ROOT + 'giris/?mod=giris&devam=' + encodeURIComponent(buradan()) + '">Giriş yap</a></div></div></section>';
      bitti();
    }
    function hata() { kok.innerHTML = '<a class="btn btn--link" style="align-self:flex-start" href="' + ROOT + 'defterler/">← Defterler</a><section class="card empty"><div class="stack" style="gap:12px"><span class="hand" style="font-size:28px">hay aksi</span><h1 class="h2" style="font-size:30px">Defter şu an yüklenemedi.</h1><p class="muted">İnternetini kontrol edip sayfayı yenile.</p></div></section>'; bitti(); }
    if (u && !HESAPLI && u.unit > 1) { kilit(u); return; }
    if (u && slug) { defterOkuma(kok, u, slug, bitti, hata); return; }
    if (u) { defterUnitesi(kok, u, bitti, hata); return; }
    defterMerkezi(kok, bitti);
  };

  function uniteRengi(u) { return COLORS[C.DEFTER_DERS[u.ders].renk]; }
  /* "AP Macroeconomics" ya da "10. sınıf · Chemistry" */
  function dersEtiketi(d) { return d.grup === "okul" ? "10. sınıf · " + d.ad : "AP " + d.ad; }
  function defterMerkezi(kok, bitti) {
    var tum = Object.keys(C.DEFTER_DERS), son = C.sonDefter(), f = param("ders") || (son && son.ders) || "";
    if (tum.indexOf(f) < 0) f = param("grup") === "okul" || (!param("grup") && HESAPLI && (H.profil() || {}).sinif === 10) ? "precalc" : "macro";
    var grup = C.DEFTER_DERS[f].grup, secili = {}, dersler_;
    secili[grup] = f;
    function grupDersleri(g) { return tum.filter(function (d) { return C.DEFTER_DERS[d].grup === g; }); }
    document.title = "Defterler · Kitora";
    kok.innerHTML = '<section class="hello rise"><h1 class="display" style="font-size:clamp(44px,5vw,60px)"><span class="hl">Defterler</span></h1><span class="hand" style="font-size:24px;rotate:-2deg">videosuz çalışmak isteyene</span></section>' +
      '<label class="df-ara rise d1"><span class="sr-only">Defterlerde ara</span>' + I.ara + '<input type="search" data-k="df-q" placeholder="Terim ya da konu ara: opportunity cost, GDP, function, mole…" autocomplete="off"></label>' +
      '<div class="row rise d1" style="gap:6px" role="group" aria-label="Defter türü" data-k="df-grup"><button type="button" class="filter" data-grup="ap">AP sınavları</button><button type="button" class="filter" data-grup="okul">10. sınıf okul dersleri</button></div>' +
      '<div class="seg tabs-row rise d1" role="tablist" aria-label="Ders" data-k="df-dersler"></div><p class="muted rise d1" style="font-size:13px;margin:-12px 0 0" data-k="df-grup-not" hidden>Geçen yılın (2025-26) müfredatına göre; bu yıl konular farklı olabilir.</p>' +
      '<div class="kit-grid df-units rise d2" data-k="df-uniteler"></div><div class="df-sonuc" data-k="df-sonuc" hidden></div>';
    var grid = $('[data-k="df-uniteler"]'), sonuc = $('[data-k="df-sonuc"]'), inp = $('[data-k="df-q"]');
    function cipler() {
      dersler_ = grupDersleri(grup);
      $$("[data-grup]", kok).forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.grup === grup)); });
      $('[data-k="df-grup-not"]').hidden = grup !== "okul";
      fill('[data-k="df-dersler"]', dersler_.map(function (d) { return '<button type="button" role="tab" data-ders="' + d + '" aria-selected="' + (d === f) + '">' + esc(C.DEFTER_DERS[d].kisa || C.DEFTER_DERS[d].ad) + '</button>'; }).join(""));
    }
    function kartlar() {
      $$("[data-ders]", kok).forEach(function (b) { b.setAttribute("aria-selected", String(b.dataset.ders === f)); });
      var us = C.DEFTER_UNITELER.filter(function (x) { return x.ders === f; });
      fill(grid, us.map(function (x) {
        var col = uniteRengi(x), kilitli = !HESAPLI && x.unit > 1;
        return '<a class="kit-card" href="' + ROOT + 'defterler/?u=' + x.id + '" style="--c:' + col + ';--rot:0deg"><div class="kit-card__band"><span class="bob-dot" aria-hidden="true"></span><span class="kit-card__code">UNIT ' + x.unit + '</span>' + art(C.DEFTER_DERS[x.ders].art, col) + '</div>' +
          '<div class="kit-card__body"><span class="kit-card__title" style="font-size:20px">' + esc(x.baslik) + '</span><span class="kit-card__meta" data-say="' + x.id + '">' + (kilitli ? '<span class="row" style="align-items:center;gap:6px">' + I.lock + " Ücretsiz hesapla açılır</span>" : "…") + '</span></div></a>';
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
    $('[data-k="df-dersler"]').addEventListener("click", function (e) { var b = e.target.closest("[data-ders]"); if (!b) return; f = secili[grup] = b.dataset.ders; history.replaceState(null, "", "?ders=" + f); kartlar(); if (inp.value.trim()) ara(); });
    $('[data-k="df-grup"]').addEventListener("click", function (e) {
      var b = e.target.closest("[data-grup]"); if (!b || b.dataset.grup === grup) return;
      grup = b.dataset.grup; f = secili[grup] || grupDersleri(grup)[0]; secili[grup] = f;
      history.replaceState(null, "", "?ders=" + f); cipler(); kartlar(); if (inp.value.trim()) ara();
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
    document.title = d.ad + " Unit " + u.unit + " defterleri · Kitora";
    C.defterListesi(u).then(function (K) {
      var oku_ = C.okunanlar(K.store), eps = K.episodes || [], o = eps.filter(function (e) { return oku_[e.slug]; }).length;
      kok.innerHTML = '<a class="btn btn--link" style="align-self:flex-start" href="' + ROOT + 'defterler/?ders=' + u.ders + '">← Defterler</a>' +
        '<section class="hello rise" style="--macro:' + col + '"><div class="stack" style="gap:6px"><span class="eyebrow accent">// ' + esc(dersEtiketi(d)) + ' · Unit ' + u.unit + '</span><h1 class="display" style="font-size:clamp(36px,4.5vw,52px)">' + esc(u.baslik) + '</h1>' +
          (K.not ? '<span class="muted" style="font-size:13px">' + esc(K.not) + '</span>' : "") + '</div>' +
        '<div class="stack" style="gap:6px;min-width:180px"><span class="mono muted">' + o + ' / ' + eps.length + ' OKUNDU</span><div class="progress"><span style="--w:' + (eps.length ? Math.round(100 * o / eps.length) : 0) + '%;--c:' + col + '"></span></div></div></section>' +
        '<div class="df-eps rise d1">' + eps.map(function (e, i) {
          return '<a class="df-ep card" href="' + ROOT + 'defterler/?u=' + u.id + '&b=' + e.slug + '" style="--c:' + col + '"><span class="df-ep__no">' + esc(e.code || i + 1) + '</span><span class="stack" style="gap:3px;min-width:0"><strong>' + esc(e.title) + '</strong><span class="mono muted" style="font-size:12px" lang="en">' + esc(e.en || "") + '</span></span>' + (oku_[e.slug] ? '<span class="chip chip--ok">okundu ✓</span>' : '<span class="df-ep__go" aria-hidden="true">→</span>') + '</a>';
        }).join("") + '</div>';
      bitti();
    }, hata);
  }

  /* orijinal defter: canlı sitedeki defter motoru, v2 içinde çerçevede (defterler/cerceve.html) */
  function cerceveAdresi(u, slug, bolum) {
    return ROOT + "defterler/cerceve.html?u=" + u.id + "&yol=" + encodeURIComponent(u.path) + "&liste=" + encodeURIComponent(u.liste) + "&b=" + encodeURIComponent(slug) +
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
    if (/\/kitora\/giris\//.test(yol)) { location.href = ROOT + "giris/?mod=giris&devam=" + encodeURIComponent(buradan()); return; }
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
      document.title = ep.title + " · Defter · Kitora";
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
    var col = COLORS[d.renk || d.art], kits = C.KITLER.filter(function (k) { return k.ders === id; });
    var defterVar = C.DEFTER_UNITELER.some(function (u) { return u.ders === id; });
    document.title = "AP " + d.title + " · Kitora";
    body.style.setProperty("--macro", col);
    kok.innerHTML = '<a class="btn btn--link" style="align-self:flex-start" href="' + ROOT + 'kitler/">← Tüm kitler</a>' +
      '<section class="ders-head rise" style="--c:' + col + '"><div class="ders-head__band" aria-hidden="true"><span class="bob-dot"></span>' + art(d.art, col) + '</div>' +
      '<div class="stack" style="gap:8px;flex:1;min-width:0"><span class="eyebrow accent">// ' + esc(d.code) + '</span><h1 class="display" style="font-size:clamp(36px,4.5vw,54px)">AP <span class="hl">' + esc(d.title) + '</span></h1>' +
      '<span class="muted">' + kits.length + ' ünite hazır · hangisinden başlamak istersin?</span></div>' +
      (defterVar ? '<a class="btn btn--ghost" href="' + ROOT + 'defterler/?ders=' + id + '">' + I.defter + ' Defterleri</a>' : "") + '</section>' +
      '<div class="kit-grid ders-uniteler rise d1" data-k="ders-uniteler"></div>';
    fill('[data-k="ders-uniteler"]', kits.map(function (k) {
      var o = C.ozet(k), kilitli = !HESAPLI && k.unit > 1, pct = o ? o.pct : 0;
      var durum = kilitli ? '<span class="row muted" style="align-items:center;gap:6px;font-size:14px">' + I.lock + ' Ücretsiz hesapla açılır</span>'
        : o && o.bitenler >= o.n ? '<span class="chip chip--ok">Bitti ✓</span>' : o ? '<span class="chip chip--info">Devam et · Bölüm ' + (o.cur + 1) + '</span>' : '<span class="chip chip--plain">Başla →</span>';
      return '<a class="kit-card" href="' + ROOT + 'unite/?kit=' + k.id + '" style="--c:' + col + ';--rot:0deg"><div class="kit-card__band"><span class="bob-dot" aria-hidden="true"></span><span class="kit-card__code">UNIT ' + k.unit + '</span>' + art(d.art, col) + '</div>' +
        '<div class="kit-card__body"><span class="kit-card__title" style="font-size:20px" data-ad="' + k.id + '">Unit ' + k.unit + '</span><span class="kit-card__meta" data-bilgi="' + k.id + '">…</span>' + durum +
        '<div class="kit-card__progress"><div class="progress progress--thin" role="progressbar" aria-label="Unit ' + k.unit + ' ilerleme" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><span style="--w:' + pct + '%"></span></div><span class="mono muted">%' + pct + '</span></div></div></a>';
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
      $$("[data-dim]").forEach(function (x) { x.classList.toggle("dimmed", engel); if (engel) x.setAttribute("aria-disabled", "true"); else x.removeAttribute("aria-disabled"); });
      kitlerim();
    }
    ciz(H.profil());
    H.profilYenile().then(ciz, function () {});
  };

  /* ---------- Notlarım sayfası ---------- */
  pages.notlarim = function () {
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

  /* ---------- deneme (Bluebook) ---------- */
  pages.deneme = function () {
    if (!C) return;
    var k = C.kit(param("kit")) || C.kit("macro-u1"), no = parseInt(param("n"), 10) || 1;
    if (!HESAPLI && k.unit > 1) { girisGerek(); return; }
    if (engelKontrol()) return;
    function hata(msg) {
      fill(".bb__main", '<section class="bb__q" aria-label="Hata"><div class="bb__qin"><p class="bb__text">' + esc(msg) + '</p><a class="btn btn--primary" style="align-self:flex-start" href="' + ROOT + 'unite/?kit=' + k.id + '">Üniteye dön</a></div></section>');
      $$(".bb__bottom button, .bb__bottom a, .bb__top button:not([data-k-toggle-theme])").forEach(function (b) { b.hidden = true; });
      fill('[data-k="timer"] time', "—");
    }
    Promise.all([C.denemeVerisi(k), C.sekiller()]).then(function (r) {
      var T = (r[0].tests || []).filter(function (t) { return t && t.no === no; })[0];
      if (!T) { hata("Bu deneme bulunamadı."); return; }
      denemeBasla(k, no, r[0], T);
    }, function () { hata("Deneme şu an yüklenemedi. İnternetini kontrol edip sayfayı yenile."); });
  };

  function denemeBasla(k, no, DEN, T) {
    var Q = (T.questions || []).filter(function (q) { return !!q && typeof q.q === "string" && Array.isArray(q.o) && q.o.length >= 2 && typeof q.a === "number"; });
    var N = Q.length, MIN = T.minutes > 0 ? T.minutes : N, L = "ABCDE";
    var sonucUrl = ROOT + "sonuc/?kit=" + k.id + "&n=" + no;
    var S = C.deneme(k, no);
    var gecersiz = !S || S.ans.length !== N || !Array.isArray(S.mark) || !Array.isArray(S.x) || (T.rev == null ? S.rev != null : S.rev !== T.rev);
    if (gecersiz || (param("yeni") !== null && S.done)) {
      var a = [], m = [], x = [], i;
      for (i = 0; i < N; i++) { a.push(-1); m.push(false); x.push([]); }
      S = { v: 1, started: Date.now(), endAt: Date.now() + MIN * 60000, i: 0, ans: a, mark: m, x: x, done: false, used: 0, elim: false, hideT: false, review: false, score: 0, auto: false };
      if (T.rev != null) S.rev = T.rev;
      C.denemeYaz(k, no, S);
    }
    if (param("yeni") !== null) history.replaceState(null, "", "?kit=" + k.id + "&n=" + no);
    if (S.done) { location.replace(sonucUrl); return; }
    if (!S.started) { S.started = Date.now(); S.endAt = S.started + MIN * 60000; }
    S.x = S.x.map(function (v) { return Array.isArray(v) ? v : []; });
    if (!(S.i >= 0 && S.i < N)) S.i = 0;
    var nav = false, bb = $(".bb"), WARN = MIN > 5 ? 300 : 60;
    var unitShort = String(DEN.unit || "").split(/\s+[—–-]\s+/)[0] || "Unit " + k.unit;
    document.title = "Deneme " + no + " · " + (DEN.course || "") + " · Kitora";
    fill(".bb__top .bb__side strong", "Deneme " + no + " · " + esc(T.level || ""));
    fill(".bb__top .bb__side .mono", esc(((DEN.course || "") + " · " + unitShort).toUpperCase()));
    fill(".bb__bottom .who", esc(HESAPLI ? ME.name : "Misafir"));
    fill('[data-k="pop"] strong', "Deneme " + no + " · sorular");
    function save() { C.denemeYaz(k, no, S); }
    function bitir(auto) {
      if (S.done) return;
      var c = 0, i;
      for (i = 0; i < N; i++) if (S.ans[i] === Q[i].a) c++;
      S.done = true; S.auto = !!auto; S.score = c; S.review = false;
      S.used = Math.min(MIN * 60000, Date.now() - S.started);
      save(); C.calisti();
      location.replace(sonucUrl);
    }
    function render() {
      var q = Q[S.i];
      bb.dataset.elim = String(!!S.elim);
      $('[data-k="elim"]').setAttribute("aria-pressed", String(!!S.elim));
      fill('[data-k="qnum"]', S.i + 1);
      fill('[data-k="qtopic"]', "KONU " + esc(q.t || ""));
      fill('[data-k="qtext"]', md(q.q));
      $('[data-k="mark"]').setAttribute("aria-pressed", String(!!S.mark[S.i]));
      var stim = $('[data-k="stim"]'), fig = q.fig;
      stim.hidden = !fig;
      if (fig) {
        stim.innerHTML = '<div class="stack" style="gap:14px"><span class="mono muted">' + (fig.type === "table" ? "TABLE" : "FIGURE") + '</span>' +
          (fig.type === "table" ? tabloHTML(fig) : '<div data-k="fig-node"></div>') + (fig.caption ? '<span class="muted" style="font-size:13px">' + md(fig.caption) + '</span>' : "") + '</div>';
        if (fig.type !== "table") sekilKoy($('[data-k="fig-node"]', stim), fig);
      }
      var cr = S.x[S.i] || [];
      fill('[data-k="opts"]', q.o.map(function (o, i) {
        var Lt = L[i];
        return '<div class="bb__optrow"><button type="button" class="bb__opt" data-o="' + i + '" aria-pressed="' + (S.ans[S.i] === i) + '" data-crossed="' + (cr.indexOf(i) > -1) + '"><span class="bb__letter">' + Lt + '</span><span class="bb__otext">' + md(o) + '</span></button>' +
          '<button type="button" class="bb__x" data-x="' + i + '" aria-label="' + Lt + ' şıkkını ' + (cr.indexOf(i) > -1 ? "geri al" : "ele") + '">' + Lt + '</button></div>';
      }).join(""));
      var answered = S.ans.filter(function (v) { return v >= 0; }).length;
      $('[data-k="prog"]').style.setProperty("--w", (answered / N * 100) + "%");
      fill('[data-k="navlabel"]', "Soru " + (S.i + 1) + " / " + N);
      $('[data-k="nav"]').setAttribute("aria-expanded", String(nav));
      $('[data-k="pop"]').hidden = !nav;
      fill('[data-k="grid"]', Q.map(function (_, i) {
        return '<button type="button" class="bb__cell" data-go="' + i + '" data-done="' + (S.ans[i] >= 0) + '" data-marked="' + !!S.mark[i] + '"' + (i === S.i ? ' aria-current="true"' : "") + ' aria-label="Soru ' + (i + 1) + '">' + (i + 1) + '</button>';
      }).join(""));
      $('[data-k="prev"]').style.visibility = S.i > 0 ? "visible" : "hidden";
      $('[data-k="next"]').hidden = S.i === N - 1;
      $('[data-k="finish"]').hidden = S.i !== N - 1;
      var tm = $('[data-k="timer"] time'); tm.hidden = !!S.hideT; $('[data-k="timer-off"]').hidden = !S.hideT;
      $('[data-k="hide"]').textContent = S.hideT ? "Göster" : "Gizle";
    }
    function tick() {
      var r = (S.endAt - Date.now()) / 1000, t = $('[data-k="timer"]');
      t.querySelector("time").textContent = fmt(Math.max(0, r));
      t.dataset.low = String(r < WARN);
      if (r <= 0) bitir(true);
    }
    if (Date.now() >= S.endAt) { bitir(true); return; }
    tick(); setInterval(tick, 1000);
    bb.addEventListener("click", function (e) {
      var o = e.target.closest(".bb__opt"); if (o) { S.ans[S.i] = +o.dataset.o; save(); render(); return; }
      var x = e.target.closest(".bb__x");
      if (x) { var i = +x.dataset.x, cr = S.x[S.i], kk = cr.indexOf(i); if (kk > -1) cr.splice(kk, 1); else cr.push(i); save(); render(); return; }
      var g = e.target.closest("[data-go]"); if (g) { S.i = +g.dataset.go; nav = false; save(); render(); return; }
      var k2 = e.target.closest("[data-k]"); if (!k2) return;
      switch (k2.dataset.k) {
        case "elim": S.elim = !S.elim; break;
        case "mark": S.mark[S.i] = !S.mark[S.i]; break;
        case "nav": case "close": nav = !nav; break;
        case "prev": S.i = Math.max(0, S.i - 1); break;
        case "next": S.i = Math.min(N - 1, S.i + 1); break;
        case "hide": S.hideT = !S.hideT; break;
        case "finish":
          e.preventDefault();
          var bos = S.ans.filter(function (v) { return v < 0; }).length;
          if (bos && !confirm(bos + " soru boş. Yine de bitirip gönderilsin mi?")) return;
          bitir(false); return;
        default: return;
      }
      save(); render();
    });
    document.addEventListener("keydown", function (e) {
      if ((e.target.closest && e.target.closest("input, textarea, select")) || e.metaKey || e.ctrlKey || e.altKey) return;
      var key = e.key.toUpperCase(), i = L.indexOf(key);
      if (key.length === 1 && i > -1 && i < Q[S.i].o.length) { S.ans[S.i] = i; save(); render(); }
      else if (e.key === "Escape" && nav) { nav = false; render(); }
    });
    render();
  }

  /* ---------- deneme sonucu ---------- */
  pages.sonuc = function () {
    if (!C) return;
    var k = C.kit(param("kit")) || C.kit("macro-u1"), no = parseInt(param("n"), 10) || 1, ders = C.DERSLER[k.ders];
    var hd = $('[data-k="header"]');
    hd.dataset.back = ROOT + "unite/?kit=" + k.id; hd.dataset.backLabel = ders.title + " Unit " + k.unit;
    header();
    if (engelKontrol()) return;
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
    var view = "quiz", quizzes = [], acik = null, satirlar = [], degisen = {};
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
    function yetkisiz(err) {
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
      var bek = quizzes.reduce(function (s, q) { return s + (durumu(q) === "wait" ? q.hedef - q.giren : 0); }, 0);
      var cnt = $(".admin__nav .count"); if (cnt) { cnt.textContent = String(bek); cnt.hidden = !bek; }
    }
    function yukle() {
      return H.yonetim("ap_quiz_ozet", {}).then(function (o) { quizzes = o.quizler || []; list(); }, function (err) { yetkisiz(err); throw err; });
    }
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
        else toast("Bu bölüm bir sonraki adımda");
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
    yukle().then(function () { if (param("gorunum") === "not") { var w = quizzes.filter(function (q) { return durumu(q) === "wait"; })[0]; if (w) notlariAc(w); } }, function () {});
  };

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
      if (v) { if (v.dataset.view === "quiz" || v.dataset.view === "not") { view = v.dataset.view; show(); } else toast("Bu bölüm bir sonraki adımda"); }
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

  /* ---------- başlat ---------- */
  header();
  bottomNav();
  var page = body.dataset.page;
  if (pages[page]) pages[page]();
  window.Kitora = { theme: theme, art: art, toast: toast };
})();
