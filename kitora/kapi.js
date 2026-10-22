/* Kitora kapısı: bu sekmede seçili hesap yoksa sayfa açılmaz; kişi Kitora'daki hesap kutusuna gider,
   hesabını açınca (ya da seçince) bu sayfaya geri döner. /ap/_kit/hesap.js'ten SONRA, <head> içinde yüklenir. */
(function () {
  var H = window.HESAP;
  if (!H || H.aktif()) return;                     /* hesap betiği yüklenemediyse kimseyi kilitleme */
  var u = location.pathname + location.search + location.hash;
  location.replace("/kitora/?devam=" + encodeURIComponent(u) + "#hesap");
})();
