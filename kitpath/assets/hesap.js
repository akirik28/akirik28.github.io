/* ==========================================================================
   Kitpath UI v2 · hesap katmanı (window.HESAP)
   Canlı sitedeki sunum-sitesi/ap/_kit/hesap.js ile aynı sunucu fonksiyonlarını ve aynı
   localStorage anahtarlarını kullanır; v2 canlıya geçince iki taraf aynı oturumu görür.
   Sunucu: Supabase "satist" projesi, ap_* tabloları; tablolara yalnızca fonksiyonlarla erişilir.
     ap_kayit / ap_giris              hesap aç, giriş yap → { id, ad } | { hata }
     ap_profil / ap_profil_kaydet     sınıf, seçmeliler, not takibi, quizler ve notlar
     ap_not_gir                       öğrenci kendi quiz notunu girer
     ap_cek / ap_yaz                  ilerleme kayıtları (anahtarında hesap kimliği geçenler)
     ap_quiz_ekle / _sil / _ozet      yönetici: quiz aç, sil, özet
     ap_yonetici_ogrenciler / _not    yönetici: quizi alan öğrenciler adlarıyla, not gir / düzelt
     ap_geribildirim_gonder           herkes: hata / öneri / beğendim mesajı (hesapsızsa isimsiz)
     ap_geribildirim_liste / _okundu  yönetici: gelen geri bildirimler
   Yerelde:
     ap-hesap:v1:hesaplar   bu cihazda açılmış hesaplar [{ id, name, email }]
     ap-hesap:v1:oturum     açık oturumun kimliği ("Çıkış yap"a kadar)
     ap-hesap:v1:profil:<id> sunucudan son gelen profil
     ap-hesap:v1:bekleyen   sunucuya henüz gitmemiş kayıt anahtarları
   ========================================================================== */
(function () {
  "use strict";
  if (window.HESAP) return;
  var API = "https://injjkkulpcvinrglzhjd.supabase.co/rest/v1/rpc/";
  var KEY = "sb_publishable_ESPPnGFiTXokLqmql-zPTg_siER2Hjp";   /* herkese açık anahtar */
  var P = "ap-hesap:v1:", LISTE = P + "hesaplar", AKTIF = P + "oturum", BEK = P + "bekleyen";

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
  function ekle(h) { var l = hesaplar().filter(function (x) { return x.id !== h.id; }); l.push(h); ls(LISTE, JSON.stringify(l)); }
  function sahibi(k) {
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

  /* ---------------- gönderilecekler kuyruğu (canlı hesap.js ile aynı) ---------------- */
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
      if (v == null) { var s0 = bekleyen(); delete s0[k]; bekleyenYaz(s0); return null; }   /* silinen kayıt: sunucuya boş değer gönderme */
      return rpc("ap_yaz", { p_id: id, p_anahtar: k, p_deger: v }, keepalive).then(function () {
        var simdi = bekleyen();
        if (lg(k) === v) { delete simdi[k]; bekleyenYaz(simdi); }
      }, function (e) {
        if (/hesap_yok/.test(String(e && e.message))) { var s = bekleyen(); delete s[k]; bekleyenYaz(s); }
      });
    })).then(function () { gidiyor = false; }, function () { gidiyor = false; });
  }
  window.addEventListener("pagehide", function () { if (Object.keys(bekleyen()).length) gonder(true); });
  window.addEventListener("online", function () { gonder(); });

  function cek(id) {
    return rpc("ap_cek", { p_id: id }).then(function (rows) {
      var b = bekleyen(), sunucu = {};
      (Array.isArray(rows) ? rows : []).forEach(function (r) {
        if (!r || typeof r.anahtar !== "string" || r.anahtar.indexOf(":" + id + ":") < 0) return;
        sunucu[r.anahtar] = 1;
        if (!b[r.anahtar]) ls(r.anahtar, r.deger);
      });
      anahtarlar().forEach(function (k) { if (k && k.indexOf(":" + id + ":") > -1 && !sunucu[k]) b[k] = 1; });
      bekleyenYaz(b);
      return gonder();
    });
  }
  function sinirli(p, ms) {
    return new Promise(function (ok) { var t = setTimeout(ok, ms); p.then(function () { clearTimeout(t); ok(); }, function () { clearTimeout(t); ok(); }); });
  }

  /* hesapsız çalışırken biriken ilerleme (…:misafir:…) yeni açılan hesaba taşınır */
  function misafirdenAl(id) {
    var re = /^([a-z0-9-]+:v\d+:)misafir(:.+)$/;
    anahtarlar().forEach(function (k) {
      var m = k && re.exec(k), yeni;
      if (!m) return;
      yeni = m[1] + id + m[2];
      if (lg(yeni) == null) { ls(yeni, lg(k)); isaretle(yeni); }
    });
  }

  function oturumAc(d, email, yeni) {
    if (!d || d.hata) throw new Error((d && d.hata) || "sunucu");
    if (typeof d.id !== "string") throw new Error("sunucu");
    var h = { id: d.id, name: String(d.ad || ""), email: String(email).trim().toLowerCase() };
    ekle(h); ls(AKTIF, h.id);
    if (yeni) misafirdenAl(h.id);
    return sinirli(Promise.all([cek(h.id), profilYenile()]), 4000).then(function () { return h; });
  }

  /* ---------------- profil ---------------- */
  function aktifId() { var h = bul(lg(AKTIF)); return h ? h.id : null; }
  function profilKey(id) { return P + "profil:" + id; }
  function profil() { var id = aktifId(); return id ? oku(lg(profilKey(id)), null) : null; }
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
  /* kitlerden önce tamamlanması gereken adım: "kurulum" (sınıf / seçmeli) ya da "not" (süresi geçmiş quiz) */
  function engel(p) {
    if (!p) return "kurulum";
    if (!p.onay || !p.sinif || p.katilim == null) return "kurulum";
    if (p.sinif >= 11 && (!p.secmeliler || !p.secmeliler.length)) return "kurulum";
    if (p.katilim && p.bekleyen && p.bekleyen.length) return "not";
    return null;
  }

  var YONETIM = /^ap_(quiz_(ekle|sil|ozet|notlari)|yonetici_(ogrenciler|not)|geribildirim_(liste|okundu))$/;

  window.HESAP = {
    hesaplar: hesaplar,
    bul: bul,
    aktif: function () { return bul(lg(AKTIF)); },
    yenile: function () { var h = bul(lg(AKTIF)); return h ? sinirli(cek(h.id), 3000).then(function () { return h; }) : Promise.resolve(null); },
    /* yeni hesap: ad + soyad + e-posta + şifre; sunucu tek "ad" alanı tutar ("Ad Soyad", en çok 40 harf) */
    kayit: function (ad, soyad, email, sifre) {
      var tam = (String(ad || "").trim() + " " + String(soyad || "").trim()).trim();
      return rpc("ap_kayit", { p_email: email, p_ad: tam, p_sifre: sifre }).then(function (d) { return oturumAc(d, email, true); });
    },
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
    notGir: function (quiz, puan) { return cagir("ap_not_gir", { p_quiz: quiz, p_puan: puan }).then(profilYenile); },
    /* geri bildirim: hesapsız da gönderilebilir (o zaman isimsiz kaydedilir) */
    geriBildirim: function (tur, mesaj, sayfa, cihaz) {
      return rpc("ap_geribildirim_gonder", { p_id: aktifId(), p_tur: tur, p_mesaj: mesaj, p_sayfa: sayfa, p_tarayici: cihaz || "" })
        .then(function (d) { if (d && d.hata) throw new Error(d.hata); return d; });
    },
    yonetim: function (f, args) {
      if (!YONETIM.test(f)) return Promise.reject(new Error("gecersiz"));
      return cagir(f, args || {});
    },
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
        katilimci_degil: "Not takibin kapalı.",
        ders_yok: "Bu quizin dersi senin derslerin arasında yok.",
        quiz_yok: "Bu quiz silinmiş.",
        yetki_yok: "Bu işlem için yönetici hesabı gerekiyor.",
        gecersiz_max: "Tam puan 1 ile 1000 arasında olmalı.",
        eksik: "Başlık, ders ve son tarihi doldur.",
        oturum_yok: "Önce giriş yap.",
        mesaj_gerekli: "Birkaç kelime yaz.",
        gecersiz_tur: "Önce türünü seç: hata, öneri ya da beğendim.",
        cok_fazla: "Kısa sürede çok mesaj gitti; biraz sonra tekrar dene."
      })[k] || "Bağlantı kurulamadı. İnternetini kontrol edip tekrar dene.";
    },
    yaz: isaretle,
    sil: isaretle
  };
})();
