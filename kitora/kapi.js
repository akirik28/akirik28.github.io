/* Kitora kapısı: oturum yoksa sayfa açılmaz; kişi giriş sayfasına gider, giriş yapınca bu sayfaya döner.
   Oturum varsa bu kitin son açılış zamanını hesaba yazar (Gelişimim sayfası okur).
   /ap/_kit/hesap.js'ten SONRA, <head> içinde yüklenir. */
(function () {
  var H = window.HESAP;
  if (!H) return;                                  /* hesap betiği yüklenemediyse kimseyi kilitleme */
  var a = H.aktif();
  if (!a) {
    var u = location.pathname + location.search + location.hash;
    location.replace("/kitora/giris/?devam=" + encodeURIComponent(u));
    return;
  }
  var kit = (location.pathname.match(/^\/(ap\/[^/]+\/unit-\d+|[^/]+)\//) || [])[1];
  if (!kit) return;
  var k = "kitora:v1:" + a.id + ":son:" + kit;
  try { localStorage.setItem(k, String(Date.now())); } catch (e) {}
  H.yaz(k);
})();
