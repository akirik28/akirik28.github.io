/* Kitpath kapısı (kitler, denemeler, cep kitleri):
   - oturum yoksa giriş sayfasına gider, giriş yapınca bu sayfaya döner
   - kurulum (sınıf, dersler) eksikse ya da son tarihi geçmiş quiz notu varsa önce o sayfaya gider
   - oturum varsa bu kitin son açılış zamanını hesaba yazar
   /ap/_kit/hesap.js'ten SONRA, <head> içinde yüklenir. */
(function () {
  var H = window.HESAP;
  if (!H) return;                                  /* hesap betiği yüklenemediyse kimseyi kilitleme */
  var u = location.pathname + location.search + location.hash;
  function git(yol) { location.replace(yol + "?devam=" + encodeURIComponent(u)); }
  var a = H.aktif();
  if (!a) { git("/kitpath/giris/"); return; }
  var e = H.engel(H.profil());
  if (e) { git(e); return; }
  H.profilYenile().then(function (p) { var e2 = H.engel(p); if (e2) git(e2); }, function () {});
  var kit = (location.pathname.match(/^\/(ap\/[^/]+\/unit-\d+|[^/]+)\//) || [])[1];
  if (!kit) return;
  var k = "kitora:v1:" + a.id + ":son:" + kit;
  try { localStorage.setItem(k, String(Date.now())); } catch (x) {}
  H.yaz(k);
})();
