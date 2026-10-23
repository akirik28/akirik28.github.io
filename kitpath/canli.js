/* Kitpath canlılık katmanı: arka plan ışıklarını ekler, kartları kaydırdıkça sırayla belirtir.
   Sonradan çizilen öğeler (notlar, yönetim listeleri) de yakalanır. canli.css ile birlikte yüklenir. */
(function () {
  var b = document.createElement("div");
  b.className = "blobs"; b.setAttribute("aria-hidden", "true");
  b.innerHTML = "<i></i><i></i><i></i>";
  document.body.insertBefore(b, document.body.firstChild);

  var RM = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (RM || !("IntersectionObserver" in window)) return;
  var SEL = ".hero > *, .side > *, .card, .pack, .stat, .qz, .q, .shelf-h, .need, .acct, .lock-view";
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -5% 0px" });
  var sira = 0, sifirla = null;
  function tara() {
    document.querySelectorAll(SEL).forEach(function (n) {
      if (n.getAttribute("data-rise")) return;
      n.setAttribute("data-rise", "1");
      n.classList.add("rise");
      n.style.transitionDelay = Math.min(sira++ * 60, 360) + "ms";     /* aynı anda gelenler sırayla belirir */
      io.observe(n);
      /* güvenlik: gözlemci tetiklenmezse (arka plan sekmesi vb.) öğe yine de görünür olsun */
      setTimeout(function () { if (n.getBoundingClientRect().top < window.innerHeight) n.classList.add("in"); }, 1600);
    });
    clearTimeout(sifirla); sifirla = setTimeout(function () { sira = 0; }, 120);
  }
  tara();
  new MutationObserver(tara).observe(document.body, { childList: true, subtree: true });
})();
