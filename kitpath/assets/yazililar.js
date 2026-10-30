/* Yazılılar: sitedeki /kitpath/yazililar/ sayfası ve uygulamadaki "Yazılılar" sekmesi bu tek listeyi okur
   (uygulama dosyayı kitpath.org'dan yükler).
   - canli: false olan kit hiç gösterilmez. Kit yayına girince canli: true yap (href'i kontrol et) ve kitora-ui-v2'yi yayınla.
   - tarih: sınav günü (YYYY-AA-GG). Kartta gün adıyla ve "kaç gün kaldı" ile görünür; sınav geçince kart sona iner.
   - ikon: 64×64 çizim, beyaz çizgi (cep-card__icon). renk: kartın ikon zemini. Sarı kullanma. */
(function () {
  var Y = {
    donem: "1. dönem 1. yazılılar · 3–12 Kasım 2026",
    bos: { 10: "Kitler 2 Kasım'dan itibaren burada.", 11: "Bu dönemin kitleri yakında burada." },
    kitler: [
      /* ---------- 11. sınıf ---------- */
      { id: "tarih-11", sinif: 11, ders: "Tarih", tarih: "2026-11-04", canli: true, href: "cep/tarih-11-sinav1/", renk: "#B4532A",
        baslik: "Tarih 11: 1. yazılı kiti", etiket: "YAZILI KİTİ · 11. SINIF TARİH", aciklama: "1683–1789 ve Lale Devri: video, defter, test ve yazılı kağıdı.",
        ikon: '<path d="M14 50h36M18 50V28M28 50V28M36 50V28M46 50V28"/><path d="M12 28h40L32 14z"/>' },
      { id: "calcbc", sinif: 11, ders: "AP Calculus BC", tarih: "2026-11-05", canli: true, href: "cep/calcbc-exam1/", renk: "#3D5BD9",
        baslik: "AP Calc BC: Exam 1 hazırlık kiti", etiket: "YAZILI KİTİ · AP CALCULUS BC", aciklama: "Limit, süreklilik ve türev: video, defter, test ve yazılı kağıdı.",
        ikon: '<path d="M10 52h44M14 12v40"/><path d="M16 46c8-2 12-26 22-28s10 10 14 10"/>' },
      { id: "cografya-11", sinif: 11, ders: "Coğrafya", tarih: "2026-11-10", canli: true, href: "cep/cografya-11-sinav1/", renk: "#17837A",
        baslik: "Coğrafya 11: 1. yazılı kiti", etiket: "YAZILI KİTİ · 11. SINIF COĞRAFYA", aciklama: "Mekânsal sorunlar, web CBS ve su kaynakları: video, defter, test ve yazılı kağıdı.",
        ikon: '<circle cx="32" cy="32" r="20"/><path d="M12 32h40M32 12c-6 6-8 13-8 20s2 14 8 20M32 12c6 6 8 13 8 20s-2 14-8 20"/>' },
      { id: "felsefe-11", sinif: 11, ders: "Felsefe", tarih: "2026-11-10", canli: true, href: "cep/felsefe-11-sinav1/", renk: "#5B4FB8",
        baslik: "Felsefe 11: 1. yazılı kiti", etiket: "YAZILI KİTİ · 11. SINIF FELSEFE", aciklama: "Felsefenin doğası, düşünme ve dil, argümantasyon: video, defter, test ve yazılı kağıdı.",
        ikon: '<circle cx="32" cy="24" r="12"/><path d="M26 36v6h12v-6M28 48h8M30 54h4"/>' },
      { id: "turkdili-11", sinif: 11, ders: "Türk Dili", tarih: "2026-11-11", canli: true, href: "cep/turkdili-11-sinav1/", renk: "#A33B3B",
        baslik: "Türk Dili 11: 1. yazılı kiti", etiket: "YAZILI KİTİ · 11. SINIF TÜRK DİLİ", aciklama: "Karagöz, mektup, dilekçe ve e-posta: video, defter, test ve yazılı kağıdı.",
        ikon: '<path d="M12 16h40v26H30l-10 8v-8h-8z"/><path d="M20 26h24M20 33h16"/>' },
      { id: "stats", sinif: 11, ders: "AP Statistics", tarih: "2026-11-12", canli: false, href: "cep/stats-exam1/", renk: "#2FA37A",
        baslik: "AP Stats: Exam 1 hazırlık kiti", etiket: "YAZILI KİTİ · AP STATISTICS", aciklama: "Veri, dağılım ve grafikler: defter, test ve yazılı kağıdı.",
        ikon: '<path d="M10 52h44"/><path d="M16 52V36M28 52V20M40 52V30M52 52V42"/>' },

      /* ---------- 10. sınıf (İçerik raporları: sirket/raporlar/icerik-*-10-*.md; href'ler yayında kesinleşir) ---------- */
      { id: "biyoloji-10", sinif: 10, ders: "Biyoloji", tarih: "2026-11-03", canli: false, href: "cep/biyoloji-10-sinav1/", renk: "#2E9E5B",
        baslik: "Biyoloji 10: 1. yazılı kiti", etiket: "YAZILI KİTİ · 10. SINIF BİYOLOJİ", aciklama: "Enerji, ATP ve fotosentez deneyleri: defter, test ve yazılı kağıdı.",
        ikon: '<path d="M14 50C14 26 30 14 52 12c-2 22-14 38-38 38z"/><path d="M14 50l22-22"/>' },
      { id: "kimya-10", sinif: 10, ders: "Kimya", tarih: "2026-11-04", canli: false, href: "cep/kimya-10-sinav1/", renk: "#C2413A",
        baslik: "Kimya 10: 1. yazılı kiti", etiket: "YAZILI KİTİ · 10. SINIF KİMYA", aciklama: "Kimyasal değişim, tepkime türleri ve mol: defter, test ve yazılı kağıdı.",
        ikon: '<path d="M26 10h12M28 10v16L14 50a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4L36 26V10"/><path d="M20 40h24"/>' },
      { id: "tarih-10", sinif: 10, ders: "Tarih", tarih: "2026-11-04", canli: false, href: "cep/tarih-10-sinav1/", renk: "#B5452F",
        baslik: "Tarih 10: 1. yazılı kiti", etiket: "YAZILI KİTİ · 10. SINIF TARİH", aciklama: "1040–1299 savaşlar ve Türk devlet teşkilatı: defter, test ve yazılı kağıdı.",
        ikon: '<path d="M32 10l18 6v14c0 12-8 20-18 24-10-4-18-12-18-24V16z"/><path d="M32 22v20M24 30h16"/>' },
      { id: "english-10", sinif: 10, ders: "English", tarih: "2026-11-04", canli: false, href: "cep/english-10/", renk: "#9A6A45",
        baslik: "English 10: dinleme ve konuşma", etiket: "YAZILI KİTİ · 10. SINIF ENGLISH", aciklama: "4 Kasım sınavı: konuşma istemleri, 3 dakikalık prova ve puanlama.",
        ikon: '<path d="M14 18h22a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H26l-8 7v-7h-4a6 6 0 0 1-6-6v-8a6 6 0 0 1 6-6z"/><path d="M46 26h4a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-2v6l-7-6h-7"/>' },
      { id: "matematik-10", sinif: 10, ders: "Matematik", tarih: "2026-11-05", canli: false, href: "cep/matematik-10-sinav1/", renk: "#3D5BD9",
        baslik: "Math 10: 1. yazılı kiti", etiket: "YAZILI KİTİ · 10. SINIF MATH", aciklama: "Dik üçgen, yardımcı elemanlar, alan, sinüs ve kosinüs teoremi.",
        ikon: '<path d="M12 50h40L12 14z"/><path d="M12 42h8v8"/>' },
      { id: "fizik-10", sinif: 10, ders: "Fizik", tarih: "2026-11-06", canli: false, href: "cep/fizik-10-sinav1/", renk: "#5A67D8",
        baslik: "Fizik 10: 1. yazılı kiti", etiket: "YAZILI KİTİ · 10. SINIF FİZİK", aciklama: "Sabit hız, ivme, grafikler ve serbest düşme.",
        ikon: '<path d="M10 52h44M14 12v40"/><path d="M16 48L50 16"/><path d="M40 16h10v10"/>' },
      { id: "cografya-10", sinif: 10, ders: "Coğrafya", tarih: "2026-11-10", canli: false, href: "cep/cografya-10-sinav1/", renk: "#17837A",
        baslik: "Coğrafya 10: 1. yazılı kiti", etiket: "YAZILI KİTİ · 10. SINIF COĞRAFYA", aciklama: "Dünya'nın iç yapısı, levha tektoniği ve kayaçlar.",
        ikon: '<circle cx="32" cy="32" r="20"/><path d="M12 32h40M32 12c-6 6-8 13-8 20s2 14 8 20M32 12c6 6 8 13 8 20s-2 14-8 20"/>' },
      { id: "din-10", sinif: 10, ders: "Din Kültürü", tarih: "2026-11-11", canli: false, href: "cep/din-10-sinav1/", renk: "#2F7D8C",
        baslik: "Din Kültürü 10: 1. yazılı kiti", etiket: "YAZILI KİTİ · 10. SINIF DİN KÜLTÜRÜ", aciklama: "İslam'da varlık ve bilgi.",
        ikon: '<path d="M32 18c-6-4-14-5-20-4v34c6-1 14 0 20 4 6-4 14-5 20-4V14c-6-1-14 0-20 4z"/><path d="M32 18v34"/>' },
      { id: "kam-10", sinif: 10, ders: "Klasik Ahlak Metinleri", tarih: "2026-11-11", canli: false, href: "cep/kam-10-sinav1/", renk: "#6B5B95",
        baslik: "Klasik Ahlak Metinleri 10: 1. yazılı kiti", etiket: "YAZILI KİTİ · 10. SINIF KAM", aciklama: "Ahlak ve etik.",
        ikon: '<path d="M32 12v40M20 52h24M14 22h36"/><path d="M14 22l-6 14h12zM50 22l-6 14h12z"/>' },
      { id: "turkdili-10", sinif: 10, ders: "Türk Dili", tarih: "2026-11-12", canli: false, href: "cep/turkdili-10-sinav1/", renk: "#A33B3B",
        baslik: "Türk Dili 10: 1. yazılı kiti", etiket: "YAZILI KİTİ · 10. SINIF TÜRK DİLİ", aciklama: "Sözün Ezgisi: koşuk, koşma ve türkü.",
        ikon: '<path d="M26 46V16l24-6v30"/><circle cx="20" cy="46" r="6"/><circle cx="44" cy="40" r="6"/>' }
    ]
  };

  var GUNLER = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  var AYLAR = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  function gun(iso) { var p = iso.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  /* sınava kalan takvim günü (bugün 0; geçtiyse eksi) */
  Y.kalan = function (k, simdi) {
    var b = simdi ? new Date(simdi) : new Date(); b = new Date(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.round((gun(k.tarih) - b) / 864e5);
  };
  Y.tarihYazi = function (k) { var d = gun(k.tarih); return d.getDate() + " " + AYLAR[d.getMonth()] + " " + GUNLER[d.getDay()]; };
  Y.kalanYazi = function (k) { var n = Y.kalan(k); return n < 0 ? "Sınav geçti" : n === 0 ? "Sınav bugün" : n === 1 ? "Sınav yarın" : n + " gün kaldı"; };
  /* bir sınıfın yayındaki kitleri: yaklaşan sınav önce, geçenler sona */
  Y.liste = function (sinif) {
    return Y.kitler.filter(function (k) { return k.canli && k.sinif === sinif; }).sort(function (a, b) {
      var ga = Y.kalan(a) < 0, gb = Y.kalan(b) < 0;
      return ga !== gb ? (ga ? 1 : -1) : a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 : 0;
    });
  };
  window.KITPATH_YAZILILAR = Y;
})();
