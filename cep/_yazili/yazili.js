/* Kitpath · yazılı kitleri ortak kabuğu (yazili.js, v2)
   <head> içinde, hesap.js + kapi.js'ten sonra yüklenir:
   1) temayı sayfa çizilmeden uygular (kitora-tema: acik | koyu | cihaz; yoksa kitin eski tema anahtarı),
   2) window.YAZILI'yi tanımlar. Kit, <body> sonunda YAZILI.kur({...}) çağırır.
   Kurallar: her adımın kendi rengi (renk: lacivert|kirmizi|yesil|mor|turuncu|mavi|petrol); ekran başına tek ana düğme;
   ikincil eylemler "⋯ Diğer" altında; kartın tamamı tıklanır. */
(function () {
  "use strict";
  var D = document, R = D.documentElement;
  var mq = window.matchMedia ? matchMedia("(prefers-color-scheme: dark)") : null;
  function lg(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function ls(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  /* ---------------- tema ---------------- */
  function temaPref() {
    var p = lg("kitora-tema");
    if (p === "acik" || p === "koyu" || p === "cihaz") return p;
    var eski = R.getAttribute("data-eski-tema"), e = eski ? lg(eski) : null;
    if (e === "light") return "acik";
    if (e === "dark") return "koyu";
    return "cihaz";
  }
  function temaUygula(p) {
    var koyu = p === "koyu" || (p === "cihaz" && mq && mq.matches);
    R.setAttribute("data-theme", koyu ? "dark" : "light");
    var m = D.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute("content", koyu ? "#0F1320" : "#F3F4F7");
  }
  temaUygula(temaPref());
  if (mq && mq.addEventListener) mq.addEventListener("change", function () { if (temaPref() === "cihaz") temaUygula("cihaz"); });
  function temaDegistir() { var p = R.getAttribute("data-theme") === "dark" ? "acik" : "koyu"; ls("kitora-tema", p); temaUygula(p); }

  /* ---------------- yardımcılar ---------------- */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function hash(s) { var h = 2166136261, i; s = String(s); for (i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619); return h >>> 0; }
  function karistir(n, tohum) { var a = [], i, j, t, x = tohum || 1; for (i = 0; i < n; i++) a.push(i); for (i = n - 1; i > 0; i--) { x = (Math.imul(x, 1103515245) + 12345) >>> 0; j = (x >>> 16) % (i + 1); t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  var uid = 0;
  function yeniId() { return "yz" + (++uid); }
  function tohum() { return (Date.now() % 100000) + 1; }
  function sure(sn) { sn = Math.round(sn || 0); return Math.floor(sn / 60) + ":" + String(sn % 60).padStart(2, "0"); }
  function gunKaldi(tarih) { var p = String(tarih).split("-"), s = new Date(+p[0], +p[1] - 1, +p[2]), b = new Date(); b.setHours(0, 0, 0, 0); return Math.round((s - b) / 864e5); }
  function sayacMetni(n) { return n > 1 ? "Sınava " + n + " gün" : n === 1 ? "Sınav yarın" : n === 0 ? "Sınav bugün" : "Sınav geçti"; }
  var GUN = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"], AY = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  function renkStil(r) { return ' style="--a:var(--r-' + (r || "lacivert") + ')"'; }
  function svg(ic, boy) { return ic.replace("<svg", '<svg width="' + boy + '" height="' + boy + '"'); }

  var S0 = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
  var IK = {
    geri: S0 + '<path d="M15 18l-6-6 6-6"/></svg>',
    ileri: S0 + '<path d="M9 18l6-6-6-6"/></svg>',
    asagi: S0 + '<path d="M6 9l6 6 6-6"/></svg>',
    tik: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    oynat: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z"/></svg>',
    gunes: '<svg class="gunes" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></svg>',
    ay: '<svg class="ay" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.8 6.8 0 0 0 10.7 10.7z"/></svg>',
    plan: S0 + '<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4M8 14h3"/></svg>',
    video: S0 + '<rect x="3" y="5" width="18" height="14" rx="4"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/></svg>',
    liste: S0 + '<path d="M4 7l2 2 3.5-4M4 16l2 2 3.5-4M13 7.5h7M13 16.5h7"/></svg>',
    kart: S0 + '<rect x="3" y="6" width="14" height="14" rx="3"/><path d="M7 3h11a3 3 0 0 1 3 3v11"/></svg>',
    uyari: S0 + '<path d="M12 3.5l9 16H3z"/><path d="M12 10v4M12 17h.01"/></svg>',
    soru: S0 + '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.2a2.6 2.6 0 0 1 5 1c0 1.8-2.5 2.2-2.5 3.8M12 17h.01"/></svg>',
    kalem: S0 + '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>',
    saat: S0 + '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
    bayrak: S0 + '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>',
    cicek: S0 + '<path d="M12 21v-8M12 13c-3 0-5-2-5-5 2 0 3 1 3.5 2C11 7 11.5 5 12 3c.5 2 1 4 1.5 7 .5-1 1.5-2 3.5-2 0 3-2 5-5 5zM12 18c-2-2-4-2-5-1M12 18c2-2 4-2 5-1"/></svg>',
    cevir: S0 + '<path d="M4 12a8 8 0 0 1 13.7-5.6L20 9M20 4v5h-5M20 12a8 8 0 0 1-13.7 5.6L4 15M4 20v-5h5"/></svg>'
  };

  /* ⋯ Diğer ve katlanır bölüm */
  function diger(ic, etiket) { return '<details class="y-diger"><summary>⋯ ' + esc(etiket || "Diğer") + '</summary><div class="y-diger-ic">' + ic + "</div></details>"; }
  function katla(baslik, ic, not, acik) { return '<details class="y-katla"' + (acik ? " open" : "") + "><summary>" + baslik + (not ? "<small>" + not + "</small>" : "") + '</summary><div class="y-katla-ic">' + ic + "</div></details>"; }

  /* ---------------- kabuk ---------------- */
  var K = null, simdi = null, el = {};
  function adimBul(id) { for (var i = 0; i < K.adimlar.length; i++) if (K.adimlar[i].id === id) return i; return -1; }
  function ilerleme(a) { var p = a.ilerleme ? a.ilerleme() : null; return p && p[1] ? p : null; }
  function genelYuzde() { var t = 0, n = 0; K.adimlar.forEach(function (a) { var p = ilerleme(a); if (p) { t += Math.min(1, p[0] / p[1]); n++; } }); return n ? 100 * t / n : 0; }
  function bittiMi(a) { var p = ilerleme(a); return !!(p && p[0] >= p[1]); }
  function noHTML(a, i) { return bittiMi(a) ? svg(IK.tik, 15) : String(i + 1); }

  function adimListesi() {
    return '<ol class="y-adimlar">' + K.adimlar.map(function (a, i) {
      return '<li><button type="button" class="y-adim y-renk"' + renkStil(a.renk) + ' data-adim="' + a.id + '"><span class="y-adim-no">' + (i + 1) + '</span><span class="y-adim-ad">' + esc(a.ad) + '</span><span class="y-adim-say"></span></button></li>';
    }).join("") + "</ol>";
  }
  function panel() {
    return '<div class="y-panel"><div class="y-panel-ders"><span class="y-nokta-ders"></span>' + esc(K.ders) + '</div><div class="y-panel-ad">' + esc(K.ad) + '</div><div class="y-panel-gun"><b class="y-sayac-yazi"></b> · <span class="y-yuzde"></span></div></div>';
  }
  var temaBtn = '<button type="button" class="y-tema" data-tema>' + IK.gunes + IK.ay + '<span class="t-koyu">Koyu temaya geç</span><span class="t-acik">Açık temaya geç</span></button>';

  function kur(cfg) {
    K = cfg; K.geri = K.geri || "/kitpath/kitlerim/";
    var app = D.createElement("div");
    app.className = "y-app y-renk";
    app.innerHTML =
      '<header class="y-ust"><button type="button" class="y-ust-btn y-renk" data-sayfa-ac aria-haspopup="dialog" aria-label="Adımlar menüsünü aç"><span class="y-adim-no"></span><span class="ad"></span><span class="menu">Menü' + svg(IK.asagi, 16) + "</span></button></header>" +
      '<aside class="y-yan" aria-label="Kit adımları"><a class="y-geri" href="' + esc(K.geri) + '">' + svg(IK.geri, 16) + "Kitlerim</a>" + panel() + adimListesi() + '<div class="y-yan-alt">' + temaBtn + "</div></aside>" +
      '<main class="y-ana" id="icerik"><div class="y-sahne y-renk"></div></main>' +
      '<div class="y-perde" data-sayfa-kapat></div>' +
      '<div class="y-sayfa" role="dialog" aria-modal="true" aria-label="Adımlar"><div class="y-sayfa-tutamak"></div>' + panel() + adimListesi() +
        '<div class="y-yan-alt">' + temaBtn + '<a class="y-tema" href="' + esc(K.geri) + '">' + svg(IK.geri, 18) + "Kitlerime dön</a></div></div>";
    D.body.insertBefore(app, D.body.firstChild);
    el.sahne = app.querySelector(".y-sahne"); el.sayfa = app.querySelector(".y-sayfa"); el.perde = app.querySelector(".y-perde"); el.ust = app.querySelector(".y-ust");

    D.addEventListener("click", function (e) {
      var t = e.target.closest("[data-adim],[data-git],[data-tema],[data-sayfa-ac],[data-sayfa-kapat]");
      if (!t) return;
      if (t.hasAttribute("data-tema")) { temaDegistir(); return; }
      if (t.hasAttribute("data-sayfa-ac")) { sayfa(true); return; }
      if (t.hasAttribute("data-sayfa-kapat")) { sayfa(false); return; }
      e.preventDefault(); e.stopPropagation();
      var g = t.getAttribute("data-adim") || t.getAttribute("data-git"), p = g.split("/");
      sayfa(false);
      git(p[0], p.slice(1).join("/") || null);
    });
    D.addEventListener("keydown", function (e) { if (e.key === "Escape" && el.sayfa.classList.contains("acik")) sayfa(false); });
    window.addEventListener("hashchange", rota);
    rota();
  }
  function sayfa(ac) {
    el.sayfa.classList.toggle("acik", ac); el.perde.classList.toggle("acik", ac);
    D.body.style.overflow = ac ? "hidden" : "";
    if (ac) { var b = el.sayfa.querySelector('[aria-current="step"]'); if (b) setTimeout(function () { b.focus(); }, 60); }
  }
  function rota() {
    var h = decodeURIComponent(location.hash.replace(/^#/, "")), p = h.split("/"), id = p[0], alt = p.slice(1).join("/") || null;
    if (adimBul(id) < 0) {
      id = (K.ilkAdim && K.ilkAdim()) || K.adimlar[0].id; alt = null;
      if (adimBul(id) < 0) id = K.adimlar[0].id;
      try { history.replaceState(null, "", "#" + id); } catch (e) {}
    }
    goster(id, alt);
  }
  function git(id, alt) { var h = "#" + id + (alt ? "/" + alt : ""); if (location.hash === h) goster(id, alt); else location.hash = h; }
  function hashAyarla(id, alt) { try { history.replaceState(null, "", "#" + id + (alt ? "/" + alt : "")); } catch (e) {} }

  function goster(id, alt) {
    var i = adimBul(id), a = K.adimlar[i], onceki = simdi == null ? -1 : adimBul(simdi), ayni = simdi === id;
    simdi = id;
    if (K.adimKaydet) K.adimKaydet(id);
    var s = el.sahne;
    s.innerHTML = ""; s.className = "y-sahne y-renk"; s.setAttribute("style", "--a:var(--r-" + (a.renk || "lacivert") + ")");
    var bas = D.createElement("div"); bas.className = "y-sahne-bas";
    bas.innerHTML = '<span class="y-ikon-kare">' + (IK[a.ikon] || IK.liste) + '</span><div><span class="y-etiket">Adım ' + (i + 1) + " / " + K.adimlar.length + '</span><h1 class="y-h1">' + esc(a.baslik || a.ad) + "</h1></div>";
    s.appendChild(bas);
    if (a.metin) { var p = D.createElement("p"); p.className = "y-lead"; p.innerHTML = a.metin; s.appendChild(p); }
    var g = D.createElement("div"); g.className = "y-govde"; s.appendChild(g);
    a.ciz(g, alt);
    var n = K.adimlar[i + 1], nav = D.createElement("nav"); nav.className = "y-alt"; nav.setAttribute("aria-label", "Sonraki adım");
    nav.innerHTML = n ? '<a class="y-btn y-btn--sonraki y-renk"' + renkStil(n.renk) + ' href="#' + n.id + '" data-git="' + n.id + '"><span>Sonraki adım: ' + esc(n.ad) + "</span>" + svg(IK.ileri, 18) + "</a>"
      : '<a class="y-lnk" href="' + esc(K.geri) + '">Kitlerime dön</a>';
    if (i > 0) s.appendChild(nav);
    if (!ayni && !reduce) { s.classList.add("y-giris"); if (onceki > i) s.classList.add("geri"); }
    if (!alt || a.id !== "videolar") window.scrollTo(0, 0);
    D.querySelectorAll(".y-adim").forEach(function (b) { if (b.getAttribute("data-adim") === id) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current"); });
    var ub = el.ust.querySelector(".y-ust-btn"); ub.setAttribute("style", "--a:var(--r-" + (a.renk || "lacivert") + ")");
    ub.querySelector(".ad").textContent = a.ad;
    D.title = a.ad + " · " + K.ad;
    yenile();
  }

  function yenile() {
    if (!K) return;
    var y = genelYuzde(), sm = sayacMetni(gunKaldi(K.sinav));
    D.querySelectorAll(".y-sayac-yazi").forEach(function (o) { o.textContent = sm; });
    D.querySelectorAll(".y-yuzde").forEach(function (o) { o.textContent = "%" + Math.round(y) + " hazır"; });
    var i = adimBul(simdi), cur = K.adimlar[i];
    if (cur) el.ust.querySelector(".y-adim-no").innerHTML = noHTML(cur, i);
    K.adimlar.forEach(function (a, k) {
      var p = ilerleme(a);
      D.querySelectorAll('.y-adim[data-adim="' + a.id + '"]').forEach(function (b) {
        b.querySelector(".y-adim-no").innerHTML = noHTML(a, k);
        b.querySelector(".y-adim-say").textContent = p ? p[0] + "/" + p[1] : "";
      });
    });
  }

  /* ---------------- plan üstü: geri sayım + sıradaki adım + renkli adım listesi ---------------- */
  function planUst(kutu) {
    var n = gunKaldi(K.sinav), sira = null;
    for (var i = 1; i < K.adimlar.length; i++) { if (!bittiMi(K.adimlar[i])) { sira = K.adimlar[i]; break; } }
    if (!sira) sira = K.adimlar[K.adimlar.length - 1];
    kutu.insertAdjacentHTML("beforeend",
      '<div class="y-geri-sayim"><b>' + (n > 0 ? n : n === 0 ? "0" : "–") + "</b><div><strong>" + (n > 1 ? "gün kaldı" : n === 1 ? "gün kaldı: sınav yarın" : n === 0 ? "Sınav bugün" : "Sınav geçti") + "</strong><span>" + esc(K.sinavMetin) + "</span></div></div>" +
      '<a class="y-btn y-btn--ana y-btn--buyuk y-btn--genis y-renk"' + renkStil(sira.renk) + ' href="#' + sira.id + '" data-git="' + sira.id + '"><span>Sıradaki adım: ' + esc(sira.ad) + "</span>" + svg(IK.ileri, 20) + "</a>" +
      '<ol class="y-yol">' + K.adimlar.slice(1).map(function (a, k) {
        var p = ilerleme(a), b = bittiMi(a);
        return '<li><a class="y-yol-satir y-renk' + (b ? " bitti" : "") + '"' + renkStil(a.renk) + ' href="#' + a.id + '" data-git="' + a.id + '"><span class="y-adim-no">' + noHTML(a, k + 1) + '</span><span class="m"><b>' + esc(a.ad) + "</b><span>" + (a.kisa || "") + '</span></span><span class="say">' + (p ? (b ? "bitti" : p[0] + "/" + p[1]) : "") + "</span></a></li>";
      }).join("") + "</ol>");
  }

  /* ---------------- günlük plan ---------------- */
  function gunlukPlan(kutu, o) {
    var n = gunKaldi(K.sinav), bitmis = [], kalan = [];
    o.gorevler.forEach(function (g) { var p = g.ilerleme ? g.ilerleme() : null; if (p && p[1] && p[0] >= p[1]) bitmis.push(g); else kalan.push(g); });
    if (n < 0) { kutu.innerHTML = '<p class="y-soluk">Sınav tarihi geçti. Kit açık kalıyor; yanlışlarını tekrar etmek için kullanabilirsin.</p>'; return; }
    if (n === 0) { kutu.innerHTML = "<p><b>Sınav bugün.</b> " + esc(o.sonGun.ad) + ". Yeni konuya başlama.</p>"; return; }
    var gunler = [], is = n - 1;
    if (n === 1) gunler.push(kalan.length ? kalan : [o.sonGun]);
    else {
      if (kalan.length <= is) { kalan.forEach(function (g) { gunler.push([g]); }); while (gunler.length < is) gunler.push([o.bosGun || o.sonGun]); }
      else {
        var top = kalan.reduce(function (a, g) { return a + (g.dk || 30); }, 0), hedef = top / is, kova = [], say = 0;
        kalan.forEach(function (g, k) {
          var kalanIs = kalan.length - k, kalanGun = is - gunler.length;
          if (kova.length && (say + (g.dk || 30) / 2 > hedef || kalanIs < kalanGun) && gunler.length < is - 1) { gunler.push(kova); kova = []; say = 0; }
          kova.push(g); say += g.dk || 30;
        });
        if (kova.length) gunler.push(kova);
      }
      gunler.push([o.sonGun]);
    }
    var bugun = new Date(); bugun.setHours(0, 0, 0, 0);
    kutu.innerHTML = '<ol class="y-plan">' + gunler.map(function (isler, k) {
      var t = new Date(bugun.getTime() + k * 864e5), ad = k === 0 ? "Bugün" : k === 1 ? "Yarın" : GUN[t.getDay()];
      return '<li class="y-gun' + (k === 0 ? " bugun" : "") + '"><div class="y-gun-tarih"><b>' + ad + "</b><span>" + t.getDate() + " " + AY[t.getMonth()] + '</span></div><div class="y-gun-isler">' +
        isler.map(function (g) { return '<button type="button" class="y-is" data-git="' + g.git + '"><span class="y-is-tik">' + svg(IK.tik, 12) + '</span><span class="y-is-ad">' + esc(g.ad) + "</span>" + (g.dk ? '<span class="y-is-dk">' + g.dk + " dk</span>" : "") + "</button>"; }).join("") + "</div></li>";
    }).join("") + "</ol>" + (bitmis.length ? '<p class="y-mini y-soluk" style="margin-top:10px">Bitirdiklerin: ' + bitmis.map(function (g) { return esc(g.ad); }).join(" · ") + "</p>" : "");
  }

  /* ---------------- kontrol listesi (satırın tamamı tıklanır) ---------------- */
  function liste(kutu, o) {
    var ul = D.createElement("ul"); ul.className = "y-liste" + (o.sinif ? " " + o.sinif : "");
    o.maddeler.forEach(function (m, i) {
      var k = m.k != null ? m.k : i, on = !!o.durum[k], li = D.createElement("li"), id = yeniId();
      li.className = on ? "on" : "";
      li.innerHTML = '<label class="y-tik" for="' + id + '"><input type="checkbox" id="' + id + '"' + (on ? " checked" : "") + '><span class="y-kutu">' + IK.tik + '</span><span class="y-tik-metin">' + m.html + (m.alt ? '<span class="alt">' + m.alt + "</span>" : "") + "</span></label>";
      li.querySelector("input").addEventListener("change", function (e) {
        if (e.target.checked) o.durum[k] = true; else delete o.durum[k];
        li.classList.toggle("on", e.target.checked); o.kaydet(); if (o.degisti) o.degisti(); yenile();
      });
      ul.appendChild(li);
    });
    kutu.appendChild(ul);
    return ul;
  }

  /* ---------------- video ızgarası (kartın tamamı tıklanır) ---------------- */
  var varMi = {};
  function dosyaKontrol(src, cb) {
    if (varMi[src] != null) { cb(varMi[src]); return; }
    if (!/^https?:/.test(location.protocol) || !window.fetch) return;
    fetch(src, { method: "HEAD", cache: "no-store" }).then(function (r) { varMi[src] = r.ok; cb(r.ok); }, function () {});
  }
  function videolar(kutu, o) {
    var hepsi = [];
    o.gruplar.forEach(function (g) { g.videolar.forEach(function (v) { hepsi.push(v); }); });
    kutu.innerHTML = o.gruplar.map(function (g, gi) {
      return '<section class="y-vgrup">' + (g.baslik ? '<div class="y-blok-bas"><h2 class="y-h2">' + g.baslik + '</h2><span class="y-mini y-soluk" data-gsay="' + gi + '"></span></div>' : "") +
        '<div class="y-vgrid">' + g.videolar.map(function (v) {
          return '<article class="y-vkart' + (o.durum[v.id] ? " izlendi" : "") + '" data-vid="' + v.id + '" id="v-' + v.id + '" tabindex="0" role="button" aria-label="Oynat: ' + esc(v.baslik) + '">' + kapakHTML(v) +
            '<div class="y-vmeta"><span class="y-etiket">' + esc(v.etiket || "") + "</span><h4>" + esc(v.baslik) + "</h4>" + (v.aciklama ? "<p>" + v.aciklama + "</p>" : "") + "</div></article>";
        }).join("") + "</div></section>";
    }).join("");
    function kapakHTML(v) {
      return '<div class="y-vkapak"><span class="yedek">' + esc(v.etiket || "") + '</span>' + (v.kapak ? '<img src="' + v.kapak + '" alt="" loading="lazy" onerror="this.remove()">' : '') + '<span class="y-voynat">' + IK.oynat + "</span>" +
        (v.sure ? '<span class="y-vsure">' + sure(v.sure) + "</span>" : "") + '<span class="y-vrozet">' + IK.tik + 'İzlendi</span><span class="y-vrozet yok">Hazırlanıyor</span></div>';
    }
    function sayac() { o.gruplar.forEach(function (g, gi) { var c = kutu.querySelector('[data-gsay="' + gi + '"]'); if (c) c.textContent = g.videolar.filter(function (v) { return o.durum[v.id]; }).length + "/" + g.videolar.length + " izlendi"; }); }
    function bul(id) { for (var i = 0; i < hepsi.length; i++) if (hepsi[i].id === id) return i; return -1; }
    function isaretle(id) { o.durum[id] = 1; o.kaydet(); sayac(); yenile(); var k = kutu.querySelector('[data-vid="' + id + '"]'); if (k) k.classList.add("izlendi"); }
    function kapat(k) {
      if (!k) return;
      var v = hepsi[bul(k.getAttribute("data-vid"))], vd = k.querySelector("video");
      if (vd) { try { vd.pause(); } catch (e) {} vd.removeAttribute("src"); try { vd.load(); } catch (e) {} }
      k.classList.remove("acik"); k.setAttribute("role", "button"); k.tabIndex = 0;
      var oyn = k.querySelector(".y-voyn,.y-hazirlaniyor"); if (oyn) oyn.outerHTML = kapakHTML(v);
      var ar = k.querySelector(".y-varac"); if (ar) ar.remove();
      if (varMi[v.src] === false) k.classList.add("yok");
    }
    function ac(id) {
      var i = bul(id); if (i < 0) return;
      var v = hepsi[i], k = kutu.querySelector('[data-vid="' + id + '"]');
      kutu.querySelectorAll(".y-vkart.acik").forEach(function (x) { if (x !== k) kapat(x); });
      if (k.classList.contains("acik")) return;
      k.classList.add("acik"); k.removeAttribute("role"); k.removeAttribute("tabindex");
      var kap = k.querySelector(".y-vkapak"), sonraki = hepsi[i + 1];
      var ar = D.createElement("div"); ar.className = "y-varac";
      ar.innerHTML = '<button type="button" class="y-lnk" data-kapat>Kapat</button>' + (sonraki ? '<button type="button" class="y-btn y-btn--ana" data-sonraki><span>Sonraki video</span>' + svg(IK.ileri, 18) + "</button>" : "");
      k.insertBefore(ar, k.querySelector(".y-vmeta"));
      ar.querySelector("[data-kapat]").onclick = function (e) { e.stopPropagation(); kapat(k); hashAyarla(simdi, null); };
      var sb = ar.querySelector("[data-sonraki]"); if (sb) sb.onclick = function (e) { e.stopPropagation(); ac(sonraki.id); hashAyarla(simdi, sonraki.id); };
      function hazirlaniyor(x) { varMi[v.src] = false; var nn = D.createElement("div"); nn.className = "y-hazirlaniyor"; nn.innerHTML = "<div><b>Bu video hazırlanıyor</b>Sınavdan önce burada olacak. Bu arada diğer adımlarla çalışabilirsin.</div>"; x.replaceWith(nn); }
      if (varMi[v.src] === false) hazirlaniyor(kap);
      else {
        var w = D.createElement("div"); w.className = "y-voyn";
        w.innerHTML = '<video controls playsinline preload="none"' + (v.kapak ? ' poster="' + v.kapak + '"' : '') + '></video>';
        var vd = w.firstChild;
        vd.addEventListener("error", function () { hazirlaniyor(w); });
        vd.addEventListener("timeupdate", function () { if (vd.duration && vd.currentTime / vd.duration >= 0.8 && !o.durum[id]) isaretle(id); });
        vd.addEventListener("ended", function () { if (!o.durum[id]) isaretle(id); });
        vd.src = v.src; kap.replaceWith(w);
        var p = vd.play(); if (p && p.catch) p.catch(function () {});
      }
      setTimeout(function () { k.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }); }, 30);
    }
    function tikla(e) {
      var k = e.target.closest(".y-vkart"); if (!k || !kutu.contains(k) || k.classList.contains("acik")) return;
      var id = k.getAttribute("data-vid"); ac(id); hashAyarla(simdi, id);
    }
    kutu.addEventListener("click", tikla);
    kutu.addEventListener("keydown", function (e) { if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("y-vkart") && !e.target.classList.contains("acik")) { e.preventDefault(); tikla(e); } });
    sayac();
    hepsi.forEach(function (v) { dosyaKontrol(v.src, function (ok) { var k = kutu.querySelector('[data-vid="' + v.id + '"]'); if (k && !ok && !k.classList.contains("acik")) k.classList.add("yok"); }); });
    if (o.ac && bul(o.ac) >= 0) ac(o.ac);
  }

  /* ---------------- çevrilebilir kartlar (kartın tamamı çevirir) ---------------- */
  function cevir(kutu, o) {
    var acik = {}, sira = null;
    var g = D.createElement("div"); g.className = "y-cgrid" + (o.dar ? " y-cgrid--dar" : ""); kutu.appendChild(g);
    function ciz() {
      var dizi = sira || o.kartlar.map(function (_, i) { return i; });
      g.innerHTML = dizi.map(function (i) { var c = o.kartlar[i], a = !!acik[c.k]; return '<div class="y-cevir' + (a ? " acik" : "") + '" data-k="' + c.k + '" role="button" tabindex="0" aria-expanded="' + a + '">' + yuz(c, a) + "</div>"; }).join("");
    }
    function yuz(c, a) {
      var on = '<div class="y-cevir-on"><span>' + c.on + "</span>" + (o.durum[c.k] ? '<span class="ok-ikon" title="görüldü">' + svg(IK.tik, 16) + "</span>" : "") + "</div>";
      return a ? on + '<div class="y-cevir-arka"' + (c.lang ? ' lang="' + c.lang + '"' : "") + ">" + c.arka + "</div>" : on + '<span class="y-cevir-ipucu">' + svg(IK.cevir, 15) + " " + esc(o.ipucu || "Çevir") + "</span>";
    }
    function bul(k) { for (var i = 0; i < o.kartlar.length; i++) if (String(o.kartlar[i].k) === String(k)) return o.kartlar[i]; return null; }
    function cevr(d) {
      var c = bul(d.getAttribute("data-k")); if (!c) return;
      var ac = !acik[c.k];
      if (ac) acik[c.k] = 1; else delete acik[c.k];
      if (ac && !o.durum[c.k]) { o.durum[c.k] = 1; o.kaydet(); yenile(); }
      var degis = function () { d.classList.toggle("acik", ac); d.setAttribute("aria-expanded", String(ac)); d.innerHTML = yuz(c, ac); };
      if (reduce) degis(); else { d.classList.remove("don"); void d.offsetWidth; d.classList.add("don"); setTimeout(degis, 160); }
    }
    g.addEventListener("click", function (e) { var d = e.target.closest(".y-cevir"); if (!d) return; if (String(window.getSelection && window.getSelection()).length) return; cevr(d); });
    g.addEventListener("keydown", function (e) { var d = e.target.closest(".y-cevir"); if (!d || e.target !== d) return; if (e.key === "Enter" || e.key === " ") { e.preventDefault(); cevr(d); } });
    ciz();
    return {
      hepsi: function (ac) { acik = {}; if (ac) o.kartlar.forEach(function (c) { acik[c.k] = 1; o.durum[c.k] = 1; }); if (ac) { o.kaydet(); yenile(); } ciz(); },
      karistir: function () { sira = karistir(o.kartlar.length, tohum()); acik = {}; ciz(); }
    };
  }

  /* ---------------- tek soru tek ekran: şıkkı seçmek = kontrol etmek ---------------- */
  function oynatici(kutu, o) {
    var d = o.durum, HARF = "ABCDEFG";
    var gecerli = d.sira && d.sira.length && d.sira.every(function (q) { return o.havuz.indexOf(q) >= 0; });
    if (!gecerli || (d.tur !== "yanlis" && d.sira.length !== o.havuz.length)) yeni();
    function yeni() {
      d.tohum = tohum(); d.sira = o.karistir === false ? o.havuz.slice() : karistir(o.havuz.length, d.tohum).map(function (i) { return o.havuz[i]; });
      d.sec = {}; d.kon = {}; d.i = 0; d.bitti = false; d.tur = "ana"; delete d.yedek; o.kaydet();
    }
    var w = D.createElement("div"); w.className = "y-oyn"; kutu.appendChild(w);
    function dogruMu(q) { return d.kon[q] && d.sec[q] === o.soru(q).a; }
    function dogruSay() { return d.sira.filter(dogruMu).length; }
    function noktalar() {
      return '<div class="y-noktalar">' + d.sira.map(function (q, p) {
        var c = d.kon[q] ? (dogruMu(q) ? "ok" : "bad") : "";
        return '<button type="button" class="y-nokta ' + c + (p === d.i && !d.bitti ? " simdi" : "") + '" data-p="' + p + '" aria-label="Soru ' + (p + 1) + '">' + (p + 1) + "</button>";
      }).join("") + "</div>";
    }
    function digerHTML() {
      var b = d.sira.filter(function (q) { return !d.kon[q]; }).length;
      return diger((b ? '<button type="button" class="y-lnk" data-bitir>Şimdi bitir ve puanla</button>' : "") + '<button type="button" class="y-lnk" data-yeni>Yeni sırayla baştan</button>');
    }
    function ciz(anim) {
      if (d.bitti) { sonuc(); return; }
      if (d.i >= d.sira.length) d.i = 0;
      var q = d.sira[d.i], it = o.soru(q), n = d.sira.length, kon = !!d.kon[q], s = d.sec[q];
      var sira = karistir(it.o.length, hash(q + ":" + d.tohum));
      var bekleyen = d.sira.filter(function (x) { return !d.kon[x]; }).length;
      w.innerHTML = '<div class="y-oyn-ust"><span>Soru <b>' + (d.i + 1) + "</b> / " + n + (d.tur === "yanlis" ? " · yanlışları tekrar" : "") + "</span><span>Doğru: <b>" + dogruSay() + "</b></span></div>" + noktalar() +
        '<div class="y-soru-kart' + (anim ? " y-gir" : "") + '">' + (kon && o.etiket ? '<div class="y-soru-etiket">' + o.etiket(q) + "</div>" : "") + '<div class="y-soru"' + (it.lang ? ' lang="' + it.lang + '"' : "") + ">" + it.q + "</div>" +
        '<div class="y-secenekler" role="group" aria-label="Seçenekler">' + sira.map(function (oi, p) {
          var c = kon ? (oi === it.a ? " ok" : s === oi ? " bad" : "") : "";
          return '<button type="button" class="y-sec' + c + '" data-oi="' + oi + '"' + (kon ? " disabled" : "") + '><span class="h">' + HARF[p] + '</span><span class="m"' + (it.lang ? ' lang="' + it.lang + '"' : "") + ">" + it.o[oi] + "</span></button>";
        }).join("") + "</div>" +
        (kon ? '<div class="y-aciklama"><div class="bas ' + (s === it.a ? "ok" : "bad") + '">' + (s === it.a ? "Doğru" : s == null ? "Boş bıraktın" : "Yanlış") + "</div>" + it.e + (o.aciklamaEk ? '<div class="ek">' + o.aciklamaEk(q) + "</div>" : "") + "</div>" : "") + "</div>" +
        '<div class="y-oyn-alt">' + (kon ? '<button type="button" class="y-btn y-btn--ana y-btn--genis" data-sonraki><span>' + (d.i < n - 1 ? "Sonraki soru" : bekleyen ? "Kalan soruya git" : "Sonucu gör") + "</span>" + svg(IK.ileri, 18) + "</button>" : "") + "</div>" + digerHTML();
    }
    function bitir() { d.bitti = true; o.kaydet(); var r = sonucHesap(); if (d.tur === "ana" && o.bitti) o.bitti(r); ciz(); ustuGor(); }
    function sonucHesap() { var dogru = 0, yanlis = []; d.sira.forEach(function (q) { if (dogruMu(q)) dogru++; else yanlis.push(q); }); return { dogru: dogru, toplam: d.sira.length, yanlis: yanlis, sec: d.sec, tur: d.tur }; }
    function sonuc() {
      var r = sonucHesap();
      w.innerHTML = '<div class="y-kart y-sonuc y-gir"><div class="y-etiket">' + (d.tur === "yanlis" ? "Yanlışları tekrar · sonuç" : "Sonuç") + '</div><div class="puan">' + r.dogru + "/" + r.toplam + '</div><p class="y-lead">' + (o.mesaj ? o.mesaj(r.dogru, r.toplam, d.tur) : "") + "</p>" +
        (d.tur === "ana" && o.ozet ? o.ozet(r) : "") +
        (r.yanlis.length ? '<button type="button" class="y-btn y-btn--ana y-btn--genis" data-yanlis><span>Sadece yanlışları tekrar et (' + r.yanlis.length + ")</span></button>" : '<button type="button" class="y-btn y-btn--ana y-btn--genis" data-yeni><span>Yeni sırayla baştan</span></button>') +
        "</div>" + diger((d.tur === "yanlis" ? '<button type="button" class="y-lnk" data-anaya>Ana sonuca dön</button>' : "") + '<button type="button" class="y-lnk" data-gozden>Soruları gözden geçir</button>' + (r.yanlis.length ? '<button type="button" class="y-lnk" data-yeni>Yeni sırayla baştan</button>' : ""));
    }
    function ustuGor() { var b = w.getBoundingClientRect(); if (b.top < 60 || b.top > innerHeight * 0.6) w.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }); }
    function sec(oi) {
      var q = d.sira[d.i]; if (d.kon[q] || d.bitti) return;
      d.sec[q] = oi; d.kon[q] = 1; o.kaydet();
      if (o.kontrol) o.kontrol(q, oi === o.soru(q).a);
      ciz(); yenile();
      var a = w.querySelector(".y-oyn-alt .y-btn"); if (a && a.getBoundingClientRect().bottom > innerHeight) a.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
    }
    function sonraki() {
      var n = d.sira.length;
      if (d.i < n - 1) d.i++;
      else { var k = d.sira.findIndex(function (q) { return !d.kon[q]; }); if (k < 0) { bitir(); return; } d.i = k; }
      o.kaydet(); ciz(true); ustuGor();
    }
    w.addEventListener("click", function (e) {
      var t = e.target.closest("button"); if (!t || t.disabled) return;
      if (t.hasAttribute("data-oi")) sec(+t.getAttribute("data-oi"));
      else if (t.hasAttribute("data-sonraki")) sonraki();
      else if (t.hasAttribute("data-p")) { d.i = +t.getAttribute("data-p"); if (d.bitti) d.bitti = false; o.kaydet(); ciz(true); }
      else if (t.hasAttribute("data-bitir")) { var b = d.sira.filter(function (q) { return !d.kon[q]; }).length; if (b && !confirm(b + " soru cevaplanmadı; boş sayılacak. Yine de bitirilsin mi?")) return; bitir(); }
      else if (t.hasAttribute("data-yanlis")) {
        var r = sonucHesap();
        if (d.tur === "ana") d.yedek = { sira: d.sira, sec: d.sec, kon: d.kon, tohum: d.tohum };
        d.sira = r.yanlis.slice(); d.sec = {}; d.kon = {}; d.i = 0; d.bitti = false; d.tur = "yanlis"; d.tohum = tohum(); o.kaydet(); ciz(true); ustuGor();
      }
      else if (t.hasAttribute("data-anaya")) { if (d.yedek) { d.sira = d.yedek.sira; d.sec = d.yedek.sec; d.kon = d.yedek.kon; d.tohum = d.yedek.tohum; delete d.yedek; } d.tur = "ana"; d.bitti = true; o.kaydet(); ciz(); }
      else if (t.hasAttribute("data-gozden")) { d.bitti = false; d.i = 0; o.kaydet(); ciz(true); ustuGor(); }
      else if (t.hasAttribute("data-yeni")) { yeni(); ciz(true); ustuGor(); yenile(); }
    });
    function tus(e) {
      if (!w.isConnected) { D.removeEventListener("keydown", tus); return; }
      if (d.bitti || e.metaKey || e.ctrlKey || e.altKey || /^(INPUT|TEXTAREA|SELECT|SUMMARY)$/.test(e.target.tagName || "")) return;
      var k = e.key.toUpperCase(), p = HARF.indexOf(k);
      if (p < 0 && /^[1-7]$/.test(k)) p = +k - 1;
      var q = d.sira[d.i], it = o.soru(q);
      if (p >= 0 && p < it.o.length && !d.kon[q]) { e.preventDefault(); sec(karistir(it.o.length, hash(q + ":" + d.tohum))[p]); }
      else if (e.key === "Enter" && d.kon[q] && !(e.target.closest && e.target.closest("button,a"))) { e.preventDefault(); sonraki(); }
    }
    D.addEventListener("keydown", tus);
    ciz();
    return { yeni: function () { yeni(); ciz(); } };
  }

  /* ---------------- açık uçlu prova ---------------- */
  /* Ölçüt iki biçimde olabilir: [puan, metin] işaret kutusu, ya da MEB tarzı kademe
     {ad, m, l:[[tam puan, metin], [kısmi puan, metin], …, [0, sıfır metni]]} (c[j] = seçilen kademenin sırası). */
  function olcutPuan(olcut, c) {
    return olcut.reduce(function (a, x, j) {
      if (Array.isArray(x)) return a + (c[j] === true ? x[0] : 0);
      var k = c[j]; return a + (typeof k === "number" && x.l[k] ? x.l[k][0] : 0);
    }, 0);
  }
  function kademeAd(l, k) { return k === 0 ? "Tam" : l[k][0] === 0 ? "Sıfır" : "Kısmi"; }
  var ZOR = { kolay: "Kolay", orta: "Orta", zor: "Zor" };
  function prova(kutu, o) {
    var w = D.createElement("div"); w.className = "y-prova"; kutu.appendChild(w);
    var konum = o.konum || { i: 0 }, uyar = false;
    function puan(i) { return olcutPuan(o.sorular[i].olcut, o.durum(i).c); }
    function toplam() { var t = 0, m = 0; o.sorular.forEach(function (s, i) { t += puan(i); m += s.puan; }); return [t, m]; }
    function ciz(anim) {
      if (konum.i >= o.sorular.length) konum.i = 0;
      var i = konum.i, s = o.sorular[i], st = o.durum(i), n = o.sorular.length, tp = toplam();
      if (o.kagit && !st.o) { st.o = true; o.kaydet(); }
      w.innerHTML = '<div class="y-oyn-ust"><span>Soru <b>' + (i + 1) + "</b> / " + n + " · " + s.puan + " puan</span><span>" + esc(o.toplamAd || "Toplam") + ": <b>" + tp[0] + " / " + tp[1] + "</b></span></div>" +
        '<div class="y-noktalar">' + o.sorular.map(function (x, k) {
          var sk = o.durum(k), c = (o.kagit ? sk.c.some(function (v) { return v != null && v !== false; }) : sk.o) ? (puan(k) >= x.puan ? "ok" : puan(k) > 0 ? "sec" : "bad") : sk.t ? "sec" : "";
          return '<button type="button" class="y-nokta ' + c + (k === i ? " simdi" : "") + '" data-p="' + k + '" aria-label="Soru ' + (k + 1) + '">' + (k + 1) + "</button>";
        }).join("") + "</div>" +
        '<div class="y-soru-kart' + (anim ? " y-gir" : "") + '">' + (s.ust ? '<div class="y-soru-etiket">' + s.ust + "</div>" : "") +
        (s.zor || s.tur ? '<div class="y-cipler">' + (s.tur ? '<span class="y-cip">' + (s.tur === "kisa" ? "Kısa cevaplı" : "Açık uçlu") + "</span>" : "") + (ZOR[s.zor] ? '<span class="y-cip y-cip--' + s.zor + '">' + ZOR[s.zor] + "</span>" : "") + "</div>" : "") +
        (s.kaynak ? '<div class="y-kaynak">' + s.kaynak + "</div>" : "") +
        '<div class="y-soru"' + (s.lang ? ' lang="' + s.lang + '"' : "") + ">" + s.q + "</div>" +
        (o.kagit ? "" : '<textarea class="y-yaz' + (s.tur === "kisa" ? " y-yaz--kisa" : "") + '" placeholder="Cevabını buraya yaz… (bu cihazda saklanır)" aria-label="Soru ' + (i + 1) + ' için cevabın">' + esc(st.t) + "</textarea>") +
        (st.o ? '<div class="y-ornek"><div class="bas">Örnek cevap' + (o.kagit ? ": kağıdındakiyle karşılaştır" : "") + '</div>' + s.ornek + "</div>" +
          '<div class="y-olcut-bas">Kendini puanla: ' + puan(i) + " / " + s.puan + '</div><ul class="y-olcut">' + s.olcut.map(function (x, j) {
            var id = yeniId();
            if (!Array.isArray(x)) return '<li class="y-kademe"><fieldset><legend>' + (x.ad ? "<b>" + x.ad + ")</b> " : "") + (x.m || "") + "</legend>" + x.l.map(function (L, k) {
              return '<label class="y-kad' + (st.c[j] === k ? " on" : "") + '"><input type="radio" name="' + id + '" data-j="' + j + '" data-k="' + k + '"' + (st.c[j] === k ? " checked" : "") + '><span class="y-kad-ust"><b>' + kademeAd(x.l, k) + "</b> · " + L[0] + ' p</span><span class="y-kad-metin">' + L[1] + "</span></label>";
            }).join("") + "</fieldset></li>";
            return '<li class="' + (st.c[j] ? "on" : "") + '"><label class="y-tik" for="' + id + '"><input type="checkbox" id="' + id + '" data-j="' + j + '"' + (st.c[j] ? " checked" : "") + '><span class="y-kutu">' + IK.tik + '</span><span class="y-tik-metin">' + x[1] + '</span><span class="p">' + x[0] + " p</span></label></li>";
          }).join("") + "</ul>" + (s.ek ? '<div class="y-ekler">' + s.ek + "</div>" : "") : "") +
        '<p class="y-mini y-soluk" data-uyari style="margin-top:10px"></p></div>' +
        '<div class="y-oyn-alt">' + (!st.o ? '<button type="button" class="y-btn y-btn--ana y-btn--genis" data-goster><span>Örnek cevabı göster</span></button>'
          : i < n - 1 ? '<button type="button" class="y-btn y-btn--ana y-btn--genis" data-sonraki><span>Sonraki soru</span>' + svg(IK.ileri, 18) + "</button>" : "") + "</div>" + (o.diger ? o.diger() : "");
      var ta = w.querySelector("textarea");
      if (ta) ta.addEventListener("input", function () { st.t = ta.value; o.kaydet(); });
      w.querySelectorAll("[data-j]").forEach(function (cb) {
        cb.addEventListener("change", function () { st.c[+cb.getAttribute("data-j")] = cb.type === "radio" ? +cb.getAttribute("data-k") : cb.checked; o.kaydet(); yenile(); var j = cb.getAttribute("data-j"); ciz(); var y = w.querySelector('[data-j="' + j + '"]:checked') || w.querySelector('[data-j="' + j + '"]'); if (y) y.focus({ preventScroll: true }); });
      });
    }
    function ustuGor() { var r = w.getBoundingClientRect(); if (r.top < 60) w.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }); }
    w.addEventListener("click", function (e) {
      var t = e.target.closest("button"); if (!t || t.disabled) return;
      var st = o.durum(konum.i);
      if (t.hasAttribute("data-goster")) {
        if (!st.t.trim() && !uyar) { uyar = true; w.querySelector("[data-uyari]").textContent = "Önce kendi cevabını yazman daha faydalı. Yine de görmek için tekrar dokun."; return; }
        uyar = false; st.o = true; o.kaydet(); ciz(); yenile();
        var orn = w.querySelector(".y-ornek"); if (orn) orn.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
      }
      else if (t.hasAttribute("data-sonraki")) { konum.i++; uyar = false; ciz(true); ustuGor(); }
      else if (t.hasAttribute("data-p")) { konum.i = +t.getAttribute("data-p"); uyar = false; ciz(true); }
    });
    ciz();
    return { yenile: function () { ciz(); }, toplam: toplam };
  }

  window.YAZILI = {
    kur: kur, git: git, yenile: yenile, hashAyarla: hashAyarla,
    olcutPuan: olcutPuan, planUst: planUst, gunlukPlan: gunlukPlan, liste: liste, videolar: videolar, cevir: cevir, oynatici: oynatici, prova: prova,
    diger: diger, katla: katla, esc: esc, hash: hash, karistir: karistir, tohum: tohum, sure: sure, gunKaldi: gunKaldi, sayacMetni: sayacMetni, ikon: IK, svg: svg,
    temaDegistir: temaDegistir
  };
})();
