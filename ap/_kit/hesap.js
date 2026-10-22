/* ==========================================================================
   AP HESAPLARI — kit.js, bluebook.js ve Deneme 2 sayfası bunu kullanır.
   Kişi bir kez adını ve e-postasını yazar (doğrulama yok); hesap açılır.
   - Bu cihazda açılmış hesaplar:  localStorage  "ap-hesap:v1:hesaplar"
   - Sekmede etkin hesap:          sessionStorage "ap-hesap:v1:aktif"
     (yeni ziyarette yeniden sorulur, kit ↔ deneme geçişinde sorulmaz)
   - İlerleme kayıtları localStorage'da kalır; anahtarında hesap kimliği geçen
     her kayıt Supabase'e (ap_kayitlar) eşitlenir. Başka cihazda aynı
     e-postayla girince hepsi geri yüklenir.
   Sunucu: Supabase "satist" projesi · fonksiyonlar ap_giris / ap_cek / ap_yaz
   ========================================================================== */
(function () {
  "use strict";
  if (window.HESAP) return;                               /* sayfada iki kez yüklendiyse ikinciyi atla */
  var API = "https://injjkkulpcvinrglzhjd.supabase.co/rest/v1/rpc/";
  var KEY = "sb_publishable_ESPPnGFiTXokLqmql-zPTg_siER2Hjp";   /* herkese açık anahtar; tablolar yalnızca fonksiyonlarla açılır */
  var P = "ap-hesap:v1:", LISTE = P + "hesaplar", AKTIF = P + "aktif", BEK = P + "bekleyen";
  /* hesaplardan önceki sabit profiller: aynı adla açılan hesap bu cihazdaki eski ilerlemeyi devralır */
  var ESKI = { ada: 1, murad: 1, omer: 1, daghan: 1, merve: 1 };

  function lg(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function ls(k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }
  function sg(k) { try { return window.sessionStorage.getItem(k); } catch (e) { return null; } }
  function ss(k, v) { try { window.sessionStorage.setItem(k, v); } catch (e) {} }
  function sd(k) { try { window.sessionStorage.removeItem(k); } catch (e) {} }
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

  window.HESAP = {
    hesaplar: hesaplar,
    bul: bul,
    aktif: function () { return bul(sg(AKTIF)); },
    /* bu cihazdaki bir hesabı seç: sunucudaki son hali indirilir (en çok 3 sn beklenir) */
    sec: function (id) {
      var h = bul(id);
      if (!h) return Promise.reject(new Error("hesap_yok"));
      ss(AKTIF, id);
      return sinirli(cek(id), 3000).then(function () { return h; });
    },
    /* ad + e-posta: hesap yoksa açılır, varsa (başka cihazdan) aynı hesaba girilir */
    giris: function (email, ad) {
      return rpc("ap_giris", { p_email: email, p_ad: ad }).then(function (d) {
        if (!d || typeof d.id !== "string") throw new Error("sunucu");
        var h = { id: d.id, name: String(d.ad || ad), email: String(email).trim().toLowerCase() };
        ekle(h); ss(AKTIF, h.id); devral(h);
        return sinirli(cek(h.id), 4000).then(function () { return h; });
      });
    },
    cikis: function () { sd(AKTIF); },
    unut: function (id) { ls(LISTE, JSON.stringify(hesaplar().filter(function (x) { return x.id !== id; }))); if (sg(AKTIF) === id) sd(AKTIF); },
    yaz: isaretle,
    sil: isaretle
  };
})();
