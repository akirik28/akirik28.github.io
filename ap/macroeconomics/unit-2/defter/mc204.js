/* Kitora not defteri · mc204 · 2.4 Fiyat Endeksleri ve Enflasyon
   Kaynak: College Board CED, Topic 2.4 (MEA-1.F, G). Blok türleri: /ap/_kit/defter.js başı.
   Sepet: 10 tost + 5 kola + 2 sinema bileti. Y0: 400+100+200=700 · Y1: 500+120+220=840 · Y2: 550+120+240=910. */
window.DEFTER = {
  slug: "mc204",
  amac: "Bu konu fiyatların genel düzeyinin nasıl ölçüldüğünü anlatıyor. CPI'ı, enflasyon oranını ve reel değişkenleri hesaplayacak, enflasyon, deflasyon ve dezenflasyonu ayıracak, CPI'ın neden enflasyonu fazla gösterdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Enflasyon, deflasyon ve dezenflasyon",
      kisa: "Dezenflasyon, fiyat artışının yavaşlamasıdır; fiyatlar hâlâ yükselir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Inflation", tr: "enflasyon", tanim: "Genel fiyat düzeyinin artması; enflasyon oranı pozitiftir. Tek bir malın pahalanması enflasyon değildir.", ornek: "Tost, kira, bilet ve telefon birlikte pahalanıyor: fiyat düzeyi %10 arttı." },
            { ikon: "📉", terim: "Deflation", tr: "deflasyon", tanim: "Genel fiyat düzeyinin düşmesi; enflasyon oranı negatiftir.", ornek: "Fiyat düzeyi bir yılda %2 azaldı." },
            { ikon: "🐢", terim: "Disinflation", tr: "dezenflasyon", tanim: "Enflasyon oranının düşmesi, ama hâlâ pozitif kalması. Fiyatlar artmaya devam eder, yalnızca daha yavaş.", ornek: "Enflasyon %10'dan %5'e indi." }
          ] },
        { tip: "grafik", baslik: "Üç durumda fiyat düzeyinin yolu", xlabel: "Zaman", ylabel: "Fiyat düzeyi (CPI)", xmax: 6, ymax: 10,
          ogeler: [
            { id: "A", tip: "egri", renk: 2, etiket: "Enflasyon", noktalar: [[0, 2], [1, 3], [2, 4.2], [3, 5.6], [4, 7.2], [5, 9]] },
            { id: "B", tip: "egri", renk: 1, etiket: "Dezenflasyon", noktalar: [[0, 2], [1, 4], [2, 5.6], [3, 6.8], [4, 7.6], [5, 8.2]], gizli: true },
            { id: "C", tip: "egri", renk: 3, etiket: "Deflasyon", noktalar: [[0, 8], [1, 7.2], [2, 6.5], [3, 5.9], [4, 5.4], [5, 5]], gizli: true }
          ],
          durumlar: [
            { metin: "**Enflasyon:** fiyat düzeyi sürekli yükseliyor, eğri yukarı gidiyor." },
            { metin: "**Dezenflasyon:** fiyat düzeyi hâlâ ==yükseliyor==, ama eğim yatıklaşıyor: enflasyon oranı düştü.", gizle: ["A"], goster: ["B"] },
            { metin: "**Deflasyon:** fiyat düzeyi gerçekten ==düşüyor==, eğri aşağı iniyor.", gizle: ["B"], goster: ["C"] }
          ] },
        { tip: "tuzak", metin: "\"Dezenflasyon\" kelimesi fiyatların düştüğünü düşündürür; öyle değildir.", yanlis: "Enflasyon %6'dan %3'e düştü, yani fiyatlar düşüyor.", dogru: "Enflasyon oranı hâlâ pozitif: fiyatlar ==daha yavaş artıyor==. Fiyatların düşmesi ==deflasyondur== (oran negatif)." }
      ]
    },
    {
      baslik: "CPI: sabit sepetin fiyatı",
      kisa: "CPI, sabit bir sepetin bugünkü maliyetini baz yıldaki maliyetiyle kıyaslar.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "CPI", alt: "tüketici fiyat endeksi" }, "=",
            { t: "Sepetin güncel yıl maliyeti", alt: "bu yılın fiyatlarıyla" }, "÷",
            { t: "Sepetin baz yıl maliyeti", alt: "baz yılın fiyatlarıyla" }, "×",
            { t: "100" }
          ], aciklama: "*Consumer price index* (CPI), bir tüketicinin yaşam standardını yeni fiyatlarda eskisi kadar korumak için ne kadar gelire ihtiyaç duyduğunu gösterir. Baz yılda CPI = 100'dür. (Üretici fiyat endeksi PPI'ın hesabı sınav dışıdır.)" },
        { tip: "tablo", baslik: "Öğrenci sepeti: 10 tost + 5 kola + 2 sinema bileti", head: ["Mal (sepetteki miktar)", "Y0 fiyat (baz)", "Y1 fiyat", "Y2 fiyat"], rows: [
            ["Tost (10)", "40", "50", "55"],
            ["Kola (5)", "20", "24", "24"],
            ["Sinema bileti (2)", "100", "110", "120"],
            ["Sepetin maliyeti", "700", "840", "910"],
            ["CPI", "100", "120", "130"]
          ], vurgu: 4, not: "Sepetin miktarları her yıl aynı kalır; yalnızca fiyatlar değişir. Fiyatlar TL cinsindendir." },
        { tip: "ornek", baslik: "Y1 ve Y2'nin CPI'ını bul", durum: "Yukarıdaki sepette baz yıl Y0'dır. Y1 ve Y2'nin CPI'ı kaçtır?",
          adimlar: ["Y0 maliyeti: 10×40 + 5×20 + 2×100 = 400 + 100 + 200 = 700.", "Y1 maliyeti: 10×50 + 5×24 + 2×110 = 500 + 120 + 220 = 840.", "CPI(Y1) = 840 ÷ 700 × 100 = 120.", "Y2 maliyeti: 10×55 + 5×24 + 2×120 = 550 + 120 + 240 = 910; CPI(Y2) = 910 ÷ 700 × 100 = 130."],
          sonuc: "CPI: Y0 = 100, Y1 = ==120==, Y2 = ==130==. Aynı sepet baz yıla göre Y1'de %20, Y2'de %30 daha pahalı." }
      ]
    },
    {
      baslik: "Enflasyon oranı: puan farkı değil, yüzde değişim",
      kisa: "Enflasyon oranı, fiyat endeksindeki yüzde değişimdir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Enflasyon oranı", alt: "yüzde (%)" }, "=",
            { t: "Yeni endeks − Eski endeks" }, "÷",
            { t: "Eski endeks" }, "×",
            { t: "100" }
          ], aciklama: "Endeks olarak CPI ya da GSYH deflatörü kullanılabilir (*GDP deflator*, 2.6'da hesaplanır)." },
        { tip: "ornek", baslik: "İki yıllık enflasyon", durum: "Tablodaki CPI değerleri: Y0 = 100, Y1 = 120, Y2 = 130. Y1 ve Y2'nin enflasyon oranları kaçtır?",
          adimlar: ["Y1: (120 − 100) ÷ 100 × 100 = %20.", "Y2: (130 − 120) ÷ 120 × 100 = 10 ÷ 120 × 100 ≈ %8,3.", "Enflasyon oranı %20'den %8,3'e düştü.", "Fiyat düzeyi yine de artıyor (120 → 130): dezenflasyon."],
          sonuc: "Y1 enflasyonu ==%20==, Y2 enflasyonu ≈ ==%8,3==. Oran düştü ama pozitif: ==dezenflasyon==." },
        { tip: "tablo", baslik: "İki fiyat endeksi: CPI ve GSYH deflatörü", head: ["", "CPI", "GSYH deflatörü"], rows: [
            ["Neyi ölçer", "Tüketicinin aldığı sabit sepetin fiyatı", "Ülkede üretilen bütün son malların fiyat düzeyi"],
            ["İthal mallar", "Tüketici alıyorsa dahil", "Dahil değil (yurt içi üretim)"],
            ["Yatırım ve devlet malları", "Dahil değil", "Dahil"],
            ["Sepet", "Sabit (baz yıl)", "Her yıl üretime göre değişir"]
          ], not: "İkisiyle de enflasyon oranı hesaplanır: yeni endeks eski endeksten yüzde kaç büyük?" },
        { tip: "tuzak", metin: "İki farklı sayı akla gelir: endeksin kaç puan arttığı ve yüzde kaç arttığı. Enflasyon oranı yalnızca ikincisidir.", yanlis: "CPI 120'den 130'a çıktı; enflasyon %10'dur.", dogru: "Enflasyon oranı = 10 ÷ 120 ≈ ==%8,3==. Puan farkını eski endekse böl." }
      ]
    },
    {
      baslik: "Reel değişkenler: nominali fiyata böl",
      kisa: "Reel değer = nominal değer ÷ fiyat endeksi × 100; satın alma gücünü gösterir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Reel değer", alt: "baz yıl fiyatlarıyla" }, "=",
            { t: "Nominal değer" }, "÷",
            { t: "Fiyat endeksi" }, "×",
            { t: "100" }
          ], aciklama: "*Real variables* (reel ücret gibi), nominal değişkenlerin fiyat düzeyine bölünmesiyle bulunur. Böylece farklı yıllar aynı fiyatlarda karşılaştırılır." },
        { tip: "ornek", baslik: "Zamlı ücret gerçekten arttı mı?", durum: "Ada'nın saat ücreti Y0'da 100 TL (CPI = 100), Y1'de 108 TL (CPI = 120). Reel ücreti nasıl değişti?",
          adimlar: ["Nominal ücret: 100 → 108, yani %8 arttı.", "Reel ücret(Y0) = 100 ÷ 100 × 100 = 100.", "Reel ücret(Y1) = 108 ÷ 120 × 100 = 90.", "Reel ücret 100'den 90'a düştü: %10 azaldı."],
          sonuc: "Nominal ücret ==%8 arttı==, ama fiyatlar %20 arttığı için reel ücret ==%10 düştü==. Ada Y1'de daha az mal alabiliyor." },
        { tip: "ikili", sol: { ikon: "💵", baslik: "*Nominal*", maddeler: ["Güncel fiyatlarla, olduğu gibi", "Fiyat artışı içinde"] },
          sag: { ikon: "🛒", baslik: "*Real*", maddeler: ["Fiyat düzeyinden arındırılmış", "Satın alma gücünü gösterir"] },
          oyun: [
            { metin: "Maaşın 12.000 TL'den 13.000 TL'ye çıktı.", cevap: "sol", neden: "Fiyatlara bakmadan parasal tutar: nominal." },
            { metin: "Maaşınla geçen yıla göre %5 daha az tost alabiliyorsun.", cevap: "sag", neden: "Satın alma gücü: reel." },
            { metin: "Kira 8.000 TL'den 10.000 TL'ye yükseldi.", cevap: "sol", neden: "Parasal tutar: nominal." },
            { metin: "Baz yıl fiyatlarıyla ifade edilen harçlığın azaldı.", cevap: "sag", neden: "Fiyat etkisi arındırılmış: reel." }
          ] }
      ]
    },
    {
      baslik: "CPI'ın sorunu: yerine koyma yanlılığı",
      kisa: "Sepet sabit kaldığı için CPI enflasyonu olduğundan fazla gösterebilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔁", terim: "Substitution bias", tr: "yerine koyma yanlılığı", tanim: "CPI'ın sepeti sabittir; gerçekte tüketici pahalanan malı bırakıp ucuza kayar. CPI bunu görmediği için yaşam maliyeti artışını olduğundan ==fazla== gösterir.", ornek: "Kola zamlanınca ayrana geçen öğrenci." },
            { ikon: "✨", terim: "Quality change and new goods", tr: "kalite değişimi ve yeni mallar", tanim: "Malın kalitesi artarsa fiyat artışının bir kısmı gerçek bir iyileşmedir; yeni mallar da sepete geç girer. Bunlar da CPI'ı enflasyonu fazla gösterme yönünde etkileyebilir.", ornek: "Her yıl daha hızlı çalışan telefonlar." }
          ] },
        { tip: "ornek", baslik: "Kola zamlanınca ayrana geçen Ece", durum: "Eski sepet: 10 kola (20 TL) + 10 ayran (10 TL) = 300 TL. Kola 30 TL'ye çıkıyor, ayran 10 TL kalıyor. Ece yaklaşık aynı memnuniyetle 8 kola + 12 ayran almaya başlıyor.",
          adimlar: ["Sabit sepetin yeni maliyeti: 10×30 + 10×10 = 400 TL. CPI artışı: 400 ÷ 300 = %33.", "Ece'nin gerçek harcaması: 8×30 + 12×10 = 360 TL. Gerçek artış: 360 ÷ 300 = %20.", "CPI, Ece'nin ucuz olana kaydığını görmedi."],
          sonuc: "CPI %33 gösteriyor, Ece'nin gerçek maliyeti %20 arttı: CPI enflasyonu ==olduğundan fazla== gösterdi." },
        { tip: "tuzak", metin: "CPI'ın hatası belirli bir yöndedir. Sınavda şıkta \"az\" ya da \"fazla\" ayrımına bak.", yanlis: "CPI yerine koyma yüzünden enflasyonu olduğundan az gösterir.", dogru: "Sabit sepet ==enflasyonu olduğundan fazla== gösterir (*overstates*)." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Inflation* fiyat düzeyinin artması, *deflation* düşmesi, *disinflation* artışın yavaşlamasıdır (fiyatlar hâlâ artar).",
            "CPI = sepetin güncel maliyeti ÷ sepetin baz yıl maliyeti × 100; baz yılda CPI = 100.",
            "Enflasyon oranı = (yeni endeks − eski endeks) ÷ eski endeks × 100; puan farkı yüzde değildir.",
            "CPI ve GSYH deflatörü ile enflasyon hesaplanır; PPI hesabı sınav dışıdır.",
            "Reel değer = nominal değer ÷ fiyat endeksi × 100.",
            "Nominal ücret artıp fiyatlar daha çok artarsa reel ücret düşer.",
            "CPI sabit sepet kullandığı için yerine koyma yanlılığıyla enflasyonu olduğundan fazla gösterir.",
            "Kalite artışı ve yeni mallar da CPI'ı fazla gösterme yönünde etkileyebilir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Tabloya göre 2026 yılının enflasyon oranı ve durumu hangisidir?",
      fig: { type: "table", caption: "CPI", head: ["Yıl", "CPI"], rows: [["2024", 125], ["2025", 140], ["2026", 147]] },
      opts: ["%7; enflasyon hızlanıyor", "%5; dezenflasyon (enflasyon yavaşladı)", "%5; deflasyon", "%7; dezenflasyon"],
      a: 1,
      why: "2025: (140 − 125) ÷ 125 = %12. 2026: (147 − 140) ÷ 140 = %5. Oran %12'den %5'e düştü ama pozitif: dezenflasyon. %7 şıkları 7 puan farkını yüzde sanar; C şıkkı pozitif oranı deflasyon sanır." },
    { q: "Dilek'in aylık maaşı 20.000 TL'den 22.000 TL'ye çıkıyor. Aynı dönemde CPI 100'den 125'e yükseliyor. Dilek'in yeni reel maaşı (baz yıl fiyatlarıyla) kaçtır?",
      opts: ["27.500 TL; reel maaş artmıştır", "22.000 TL; reel maaş artmıştır", "17.600 TL; reel maaş azalmıştır", "20.000 TL; reel maaş değişmemiştir"],
      a: 2,
      why: "Reel maaş = 22.000 ÷ 125 × 100 = 17.600 TL; başlangıçtaki 20.000 TL'den düşük. A şıkkı en çekici yanlış: nominal maaşı CPI ile çarpar, bölmez." },
    { q: "Mandalina fiyatı hızla artınca tüketiciler mandalina yerine elma almaya başlıyor. CPI'ın sepeti sabit olduğu için aşağıdakilerden hangisi doğrudur?",
      opts: ["CPI enflasyonu olduğundan az gösterir", "CPI etkilenmez, çünkü sepet gerçek harcamayı yansıtır", "CPI deflasyon gösterir", "CPI yerine koyma yanlılığı nedeniyle enflasyonu olduğundan fazla gösterebilir"],
      a: 3,
      why: "Sabit sepet, tüketicinin ucuza kaymasını yansıtmaz; yaşam maliyeti artışı olduğundan fazla görünür. B şıkkı en çekici yanlış: sepetin gerçek davranışı yansıttığını varsayar, oysa sepet sabittir." },
    { q: "Bir ülkede enflasyon oranı iki yıl içinde %6'dan %3'e düşüyor. Hangisi doğrudur?",
      opts: ["Dezenflasyon yaşanıyor: fiyatlar hâlâ artıyor, ama daha yavaş", "Deflasyon yaşanıyor: fiyatlar düşüyor", "Fiyat düzeyi sabit kalıyor", "Reel ücretler kesinlikle artıyor"],
      a: 0,
      why: "Enflasyon oranı düştü ama pozitif: dezenflasyon. B şıkkı en çekici yanlış: oran negatif olmadığı için fiyatlar düşmüyor. D şıkkı ise nominal ücretlerin ne yaptığını bilmeden söylenemez." },
    { q: "Tabloda bir CPI sepeti verilmiştir. Bu yılın CPI'ı kaçtır?",
      fig: { type: "table", caption: "Sepet", head: ["Mal", "Sepetteki miktar", "Baz yıl fiyatı (TL)", "Bu yıl fiyatı (TL)"], rows: [["Tost", 4, 10, 15], ["Sinema bileti", 1, 40, 60]] },
      opts: ["50", "150", "120", "80"],
      a: 1,
      why: "Baz yıl maliyeti: 4×10 + 1×40 = 80. Bu yıl: 4×15 + 1×60 = 120. CPI = 120 ÷ 80 × 100 = 150. A şıkkı en çekici yanlış: %50 artış, endeks değeri değil." }
  ]
};
