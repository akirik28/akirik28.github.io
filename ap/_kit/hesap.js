/* ==========================================================================
   KİTORA HESAPLARI — Kitpath sayfaları, kit.js, bluebook.js ve Deneme 2 bunu kullanır.
   Hesap: ad + e-posta + şifre (ap_kayit), giriş: e-posta + şifre (ap_giris).
   - Bu cihazda giriş yapılmış hesaplar: localStorage "ap-hesap:v1:hesaplar"
   - Açık oturum:                        localStorage "ap-hesap:v1:oturum"
     ("Çıkış yap"a kadar açık kalır)
   - İlerleme kayıtları localStorage'da kalır; anahtarında hesap kimliği geçen
     her kayıt Supabase'e (ap_kayitlar) eşitlenir. Başka cihazda aynı
     e-posta ve şifreyle girince hepsi geri yüklenir.
   Sunucu: Supabase "satist" projesi · fonksiyonlar ap_kayit / ap_giris / ap_cek / ap_yaz
   ========================================================================== */
/* GitHub Pages kopyası kapandı: akirik28.github.io'da "süresi doldu" deyip kitpath.org'a gönder (bkz. /assets/js/kitpath-tasindi.js) */
(function () {
  if (!/(^|\.)akirik28\.github\.io$/.test(location.hostname)) return;
  if (!/^\/(kitpath|kitora|ap|cep|okul|crucible)(\/|$)/.test(location.pathname)) return;
  var hedef = "https://kitpath.org" + location.pathname + location.search + location.hash;
  function goster() {
    if (document.getElementById("kitpath-tasindi")) return;
    var d = document.createElement("div");
    d.id = "kitpath-tasindi";
    d.setAttribute("role", "alertdialog");
    d.setAttribute("aria-live", "assertive");
    d.style.cssText = "position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:24px;background:#10131C;color:#F3F1EA;font:16px/1.5 Inter,system-ui,-apple-system,sans-serif;text-align:center";
    d.innerHTML = '<div style="max-width:440px;display:flex;flex-direction:column;align-items:center;gap:14px">' +
      '<div style="font-size:44px;line-height:1">⏳</div>' +
      '<h1 style="margin:0;font-size:28px;line-height:1.2;font-weight:800;letter-spacing:-.02em">Bu bağlantının süresi doldu</h1>' +
      '<p style="margin:0;color:#A9AEC0">Kitpath artık <strong style="color:#F3F1EA">kitpath.org</strong> adresinde. Birkaç saniye içinde oraya yönlendiriliyorsun.</p>' +
      '<a href="' + hedef.replace(/"/g, "&quot;") + '" style="margin-top:6px;padding:12px 22px;border-radius:999px;background:#A8E07A;color:#14210B;font-weight:700;text-decoration:none">kitpath.org\'a git →</a>' +
      '<p style="margin:0;font-size:13px;color:#7E8497">Hesabınla tekrar giriş yapman gerekebilir; ilerlemen hesabında duruyor.</p></div>';
    (document.body || document.documentElement).appendChild(d);
  }
  if (document.body) goster(); else document.addEventListener("DOMContentLoaded", goster);
  setTimeout(function () { location.replace(hedef); }, 3500);
})();
(function () {
  "use strict";
  if (window.HESAP) return;                               /* sayfada iki kez yüklendiyse ikinciyi atla */
  var API = "https://injjkkulpcvinrglzhjd.supabase.co/rest/v1/rpc/";
  var KEY = "sb_publishable_ESPPnGFiTXokLqmql-zPTg_siER2Hjp";   /* herkese açık anahtar; tablolar yalnızca fonksiyonlarla açılır */
  var P = "ap-hesap:v1:", LISTE = P + "hesaplar", AKTIF = P + "oturum", BEK = P + "bekleyen";
  /* hesaplardan önceki sabit profiller: aynı adla açılan hesap bu cihazdaki eski ilerlemeyi devralır */
  var ESKI = { ada: 1, murad: 1, omer: 1, daghan: 1, merve: 1 };

  function lg(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function ls(k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }
  function ld(k) { try { window.localStorage.removeItem(k); } catch (e) {} }
  function oku(s, d) { try { var v = JSON.parse(s); return v == null ? d : v; } catch (e) { return d; } }
  function anahtarlar() { var a = [], k; try { for (k = 0; k < window.localStorage.length; k++) a.push(window.localStorage.key(k)); } catch (e) {} return a; }

  function hesaplar() {
    var l = oku(lg(LISTE), []);
    return Array.isArray(l) ? l.filter(function (h) { return h && typeof h.id === "string" && typeof h.name === "string"; }) : [];
  }
  function bul(id) { var l = hesaplar(), k; for (k = 0; k < l.length; k++) if (l[k].id === id) return l[k]; return null; }
  function ekle(h) {
    var l = hesaplar().filter(function (x) { return x.id !== h.id; });
    l.push(h); ls(LISTE, JSON.stringify(l));
  }
  function sahibi(k) {                                   /* kaydın anahtarında hangi hesabın kimliği geçiyor? */
    var l = hesaplar(), i;
    for (i = 0; i < l.length; i++) if (k.indexOf(":" + l[i].id + ":") > -1) return l[i].id;
    return null;
  }

  function rpc(f, govde, keepalive) {
    if (!window.fetch) return Promise.reject(new Error("baglanti_yok"));
    return window.fetch(API + f, {
      method: "POST", keepalive: !!keepalive,
      headers: { apikey: KEY, "Content-Type": "application/json" },
      body: JSON.stringify(govde)
    }).then(function (r) {
      return r.text().then(function (t) {
        var d = t ? oku(t, null) : null;
        if (!r.ok) throw new Error((d && d.message) || "http_" + r.status);
        return d;
      });
    });
  }

  /* ---------------- gönderilecekler kuyruğu ---------------- */
  function bekleyen() { var b = oku(lg(BEK), {}); return b && typeof b === "object" ? b : {}; }
  function bekleyenYaz(b) { ls(BEK, JSON.stringify(b)); }
  var zaman = null, gidiyor = false;
  function isaretle(k) {
    if (typeof k !== "string" || !sahibi(k)) return;
    var b = bekleyen(); b[k] = 1; bekleyenYaz(b);
    if (zaman) clearTimeout(zaman);
    zaman = setTimeout(gonder, 800);
  }
  function gonder(keepalive) {
    zaman = null;
    if (gidiyor && !keepalive) { zaman = setTimeout(gonder, 800); return Promise.resolve(); }
    var b = bekleyen(), liste = Object.keys(b);
    if (!liste.length) return Promise.resolve();
    gidiyor = true;
    return Promise.all(liste.map(function (k) {
      var id = sahibi(k);
      if (!id) return null;
      var v = lg(k);
      return rpc("ap_yaz", { p_id: id, p_anahtar: k, p_deger: v }, keepalive).then(function () {
        var simdi = bekleyen();
        if (lg(k) === v) { delete simdi[k]; bekleyenYaz(simdi); }   /* gönderirken değiştiyse kuyrukta kalsın */
      }, function (e) {
        if (/hesap_yok/.test(String(e && e.message))) { var s = bekleyen(); delete s[k]; bekleyenYaz(s); }
      });
    })).then(function () { gidiyor = false; }, function () { gidiyor = false; });
  }
  window.addEventListener("pagehide", function () { if (Object.keys(bekleyen()).length) gonder(true); });
  window.addEventListener("online", function () { gonder(); });

  /* ---------------- sunucudan çek ---------------- */
  function cek(id) {
    return rpc("ap_cek", { p_id: id }).then(function (rows) {
      var b = bekleyen(), sunucu = {};
      (Array.isArray(rows) ? rows : []).forEach(function (r) {
        if (!r || typeof r.anahtar !== "string" || r.anahtar.indexOf(":" + id + ":") < 0) return;
        sunucu[r.anahtar] = 1;
        if (!b[r.anahtar]) ls(r.anahtar, r.deger);          /* bu cihazda gönderilmemiş değişiklik varsa o kazanır */
      });
      anahtarlar().forEach(function (k) {                    /* sunucuda olmayan yerel kayıtlar yukarı gitsin */
        if (k && k.indexOf(":" + id + ":") > -1 && !sunucu[k]) b[k] = 1;
      });
      bekleyenYaz(b);
      return gonder();
    });
  }
  function sinirli(p, ms) {                                 /* yavaş bağlantıda ekranı bekletme */
    return new Promise(function (ok) { var t = setTimeout(ok, ms); p.then(function () { clearTimeout(t); ok(); }, function () { clearTimeout(t); ok(); }); });
  }

  function sade(s) {
    var m = { "ç": "c", "ğ": "g", "ı": "i", "İ": "i", "ö": "o", "ş": "s", "ü": "u", "Ç": "c", "Ğ": "g", "Ö": "o", "Ş": "s", "Ü": "u" };
    return String(s || "").replace(/[çğıİöşüÇĞÖŞÜ]/g, function (c) { return m[c]; }).toLowerCase().replace(/[^a-z]/g, "");
  }
  function devral(h) {                                      /* eski sabit profilin bu cihazdaki kayıtlarını yeni hesaba kopyala */
    var eski = sade(h.name.split(/\s+/)[0]);
    if (!ESKI[eski] || lg(P + "devralindi:" + eski)) return;
    var re = new RegExp("^([a-z0-9-]+:v\\d+:)" + eski + "(:.+)$");
    anahtarlar().forEach(function (k) {
      var m = k && re.exec(k), yeni;
      if (!m) return;
      yeni = m[1] + h.id + m[2];
      if (lg(yeni) == null) { ls(yeni, lg(k)); isaretle(yeni); }
    });
    ls(P + "devralindi:" + eski, h.id);
  }

  /* sunucu yanıtı { id, ad } ya da { hata } → oturumu aç, kayıtları indir */
  function oturumAc(d, email, yeni) {
    if (!d || d.hata) throw new Error((d && d.hata) || "sunucu");
    if (typeof d.id !== "string") throw new Error("sunucu");
    var h = { id: d.id, name: String(d.ad || ""), email: String(email).trim().toLowerCase() };
    ekle(h); ls(AKTIF, h.id);
    if (yeni) devral(h);
    return sinirli(Promise.all([cek(h.id), profilYenile()]), 4000).then(function () { return h; });
  }
  ld("ap-hesap:v1:aktif");                                /* şifresiz sürümün oturum anahtarı */

  /* ---------------- profil: sınıf, seçmeliler, not takibi, quiz notları ---------------- */
  function aktifId() { var h = bul(lg(AKTIF)); return h ? h.id : null; }
  function profilKey(id) { return P + "profil:" + id; }
  function profil() { var id = aktifId(); return id ? oku(lg(profilKey(id)), null) : null; }
  /* oturum sahibinin adına sunucu fonksiyonu çağır; { hata } yanıtı hataya dönüşür */
  function cagir(f, args) {
    var id = aktifId();
    if (!id) return Promise.reject(new Error("oturum_yok"));
    var b = { p_id: id }, k;
    for (k in args) if (Object.prototype.hasOwnProperty.call(args, k)) b[k] = args[k];
    return rpc(f, b).then(function (d) { if (d && d.hata) throw new Error(d.hata); return d; });
  }
  function profilYenile() {
    var id = aktifId();
    if (!id) return Promise.resolve(null);
    return cagir("ap_profil", {}).then(function (p) { ls(profilKey(id), JSON.stringify(p)); return p; });
  }
  /* kitler açılmadan önce tamamlanması gereken adım: kurulum ya da süresi geçen quiz notu */
  function engel(p) {
    if (!p) return "/kitpath/baslangic/";
    if (!p.onay || !p.sinif || p.katilim == null) return "/kitpath/baslangic/";
    if (p.sinif >= 11 && (!p.secmeliler || !p.secmeliler.length)) return "/kitpath/baslangic/";   /* seçmeliler yalnızca 11. sınıftan istenir */
    if (p.katilim && p.bekleyen && p.bekleyen.length) return "/kitpath/notlar/";
    return null;
  }

  window.HESAP = {
    hesaplar: hesaplar,
    bul: bul,
    aktif: function () { return bul(lg(AKTIF)); },
    /* açık oturumun sunucudaki son halini indir (en çok 3 sn beklenir) */
    sec: function (id) {
      var h = bul(id);
      if (!h || lg(AKTIF) !== id) return Promise.reject(new Error("oturum_yok"));
      return sinirli(cek(id), 3000).then(function () { return h; });
    },
    yenile: function () { var h = bul(lg(AKTIF)); return h ? sinirli(cek(h.id), 3000).then(function () { return h; }) : Promise.resolve(null); },
    /* yeni hesap: ad + e-posta + şifre (en az 6 karakter) */
    kayit: function (ad, email, sifre) {
      return rpc("ap_kayit", { p_email: email, p_ad: ad, p_sifre: sifre }).then(function (d) { return oturumAc(d, email, true); });
    },
    /* giriş: e-posta + şifre; başka cihazdaki ilerleme de gelir */
    giris: function (email, sifre) {
      return rpc("ap_giris", { p_email: email, p_sifre: sifre }).then(function (d) { return oturumAc(d, email, false); });
    },
    cikis: function () { if (Object.keys(bekleyen()).length) gonder(true); ld(AKTIF); },
    profil: profil,
    profilYenile: profilYenile,
    engel: engel,
    profilKaydet: function (sinif, secmeliler, katilim) {
      return cagir("ap_profil_kaydet", { p_sinif: sinif, p_secmeliler: secmeliler, p_katilim: katilim }).then(profilYenile);
    },
    katilim: function (evet) { return cagir("ap_katilim", { p_katilim: !!evet }).then(profilYenile); },
    notGir: function (quiz, puan) { return cagir("ap_not_gir", { p_quiz: quiz, p_puan: puan }).then(profilYenile); },
    /* yönetici fonksiyonları (ap_quiz_ekle, ap_quiz_sil, ap_quiz_ozet, ap_quiz_notlari); yetki sunucuda denetlenir */
    yonetim: function (f, args) {
      if (!/^ap_quiz_(ekle|sil|ozet|notlari)$/.test(f)) return Promise.reject(new Error("gecersiz"));
      return cagir(f, args || {});
    },
    /* hata kodu → kullanıcıya gösterilecek cümle */
    hataMetni: function (e) {
      var k = String(e && e.message || "");
      return ({
        gecersiz_email: "E-posta adresi hatalı görünüyor.",
        ad_gerekli: "Adını yaz.",
        kisa_sifre: "Şifre en az 6 karakter olmalı.",
        email_kayitli: "Bu e-postayla zaten bir hesap var. Giriş yap'ı dene.",
        hatali_giris: "E-posta ya da şifre yanlış.",
        kilitli: "Çok fazla yanlış deneme oldu. 15 dakika sonra tekrar dene.",
        gecersiz_puan: "Not, 0 ile quizin tam puanı arasında olmalı.",
        secmeli_gerekli: "En az bir ders seç.",
        sinif_gerekli: "Kaçıncı sınıf olduğunu seç.",
        katilim_gerekli: "Bir şeyler eksik; sayfayı yenileyip tekrar dene.",
        yetki_yok: "Bu işlem için yönetici hesabı gerekiyor.",
        gecersiz_max: "Tam puan 1 ile 1000 arasında olmalı.",
        eksik: "Başlık, ders ve son tarihi doldur."
      })[k] || "Bağlantı kurulamadı. İnternetini kontrol edip tekrar dene.";
    },
    yaz: isaretle,
    sil: isaretle
  };
})();
