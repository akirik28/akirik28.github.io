/* Kitora not defteri · st107 · 1D-3 Outlier ve Boxplot
   Kaynak: ap-videolar/src/episodes/st107 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st107",
  amac: "Bu konu bir değerin gerçekten sıra dışı (*outlier*) olup olmadığını göz kararıyla değil kuralla belirlemeyi anlatıyor: 1,5 × *IQR* kuralı. Ayrıca *five-number summary*'yi, *boxplot* çizip okumayı ve boxplot'un neyi göstermediğini öğreneceksin.",
  bolumler: [
    {
      baslik: "1,5 × *IQR* kuralı",
      kisa: "Q1 − 1,5 × IQR'ın altı ve Q3 + 1,5 × IQR'ın üstü outlier'dır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚩", terim: "Outlier", tr: "aykırı değer", tanim: "Diğerlerinden belirgin biçimde uzağa düşen değer. Kuralı ==IQR== belirler, çünkü IQR *resistant*'tır.", ornek: "Okula geliş süreleri 14–32 dakika iken 60 dakika." }
          ] },
        { tip: "formul", parcalar: [{ t: "Alt sınır", alt: "lower fence" }, "=", { t: "Q1 − 1,5 × IQR", alt: "" }, { t: "Üst sınır", alt: "upper fence" }, "=", { t: "Q3 + 1,5 × IQR", alt: "" }], aciklama: "Sınırların dışında kalan her değer outlier. Adımlar: sırala → Q1 ve Q3'ü bul (median'ı yarılara katma) → IQR = Q3 − Q1 → 1,5 × IQR → iki sınır. Bu kural formül kâğıdında yoktur: ezberle." },
        { tip: "grafik", baslik: "Sınırlar: okula geliş süreleri (9 öğrenci)", xlabel: "Okula geliş süresi (dk)", ylabel: "", xmax: 7, ymax: 4,
          xticks: [{ v: 0, label: "0" }, { v: 1, label: "10" }, { v: 2, label: "20" }, { v: 3, label: "30" }, { v: 4, label: "40" }, { v: 5, label: "50" }, { v: 6, label: "60" }, { v: 7, label: "70" }],
          ogeler: [
            { id: "d0", tip: "nokta", x: 1.4, y: 1 }, { id: "d1", tip: "nokta", x: 1.6, y: 1 }, { id: "d2", tip: "nokta", x: 2, y: 1 },
            { id: "d3", tip: "nokta", x: 2.2, y: 1 }, { id: "d4", tip: "nokta", x: 2.4, y: 1 }, { id: "d5", tip: "nokta", x: 2.6, y: 1 },
            { id: "d6", tip: "nokta", x: 2.8, y: 1 }, { id: "d7", tip: "nokta", x: 3.2, y: 1 }, { id: "d8", tip: "nokta", x: 6, y: 1 },
            { id: "iqr", tip: "alan", renk: 1, noktalar: [[1.8, 0], [1.8, 3.6], [3, 3.6], [3, 0]], gizli: true },
            { id: "iqrt", tip: "yazi", x: 2.4, y: 3.9, metin: "IQR = 30 − 18 = 12", gizli: true },
            { id: "lo", tip: "cizgi", renk: 3, kesik: true, from: [0.02, 0], to: [0.02, 3.6], etiket: "alt sınır 0", gizli: true },
            { id: "hi", tip: "cizgi", renk: 3, kesik: true, from: [4.8, 0], to: [4.8, 3.6], etiket: "üst sınır 48", gizli: true },
            { id: "g45", tip: "nokta", x: 4.5, y: 2, etiket: "45: içeride", gizli: true },
            { id: "o60", tip: "yazi", x: 6, y: 2, metin: "60 > 48: OUTLIER", gizli: true }
          ],
          durumlar: [
            { metin: "Dokuz arkadaşa okula kaç dakikada geldikleri soruldu: 14, 16, 20, 22, 24, 26, 28, 32, 60. Biri çok uzakta; ama ne kadar uzaksa sıra dışı?" },
            { metin: "Q1 = 18 ve Q3 = 30; arası IQR = 12 genişliğinde (ortadaki yarı).", goster: ["iqr", "iqrt"] },
            { metin: "1,5 × 12 = 18. Alt sınır 18 − 18 = 0; üst sınır 30 + 18 = 48.", goster: ["lo", "hi"] },
            { metin: "60, 48'in dışında: ==outlier==. 45 sınırın içinde kalırdı: outlier değil.", goster: ["o60", "g45"] }
          ] }
      ]
    },
    {
      baslik: "Kuralı uygula: 9 süre",
      kisa: "İki sınırı da hesapla ve hangi değerlerin dışarıda kaldığını göster.",
      bloklar: [
        { tip: "ornek", baslik: "60 dakika outlier mı?", durum: "Sıralı süreler (dk): 14, 16, 20, 22, 24, 26, 28, 32, 60.",
          adimlar: ["Median: 5. değer = 24. Median hariç tutulur.", "Alt yarı: 14, 16, 20, 22 → Q1 = (16 + 20) ÷ 2 = 18.", "Üst yarı: 26, 28, 32, 60 → Q3 = (28 + 32) ÷ 2 = 30.", "IQR = 30 − 18 = 12; 1,5 × 12 = 18.", "Alt sınır: 18 − 18 = 0. Üst sınır: 30 + 18 = 48.", "60 > 48 → yüksek outlier. 45 < 48 olduğu için 45 outlier olmazdı."],
          sonuc: "==60 bir outlier'dır==; alt tarafta outlier yok (en küçük değer 14 > 0)." },
        { tip: "tuzak", baslik: "Yaygın hatalar", metin: "Sınırı yanlış yerden ölçmek, 1,5 ile çarpmayı unutmak, median'ı yarılara katmak ya da \"uzak görünüyor\" demekle yetinmek.", yanlis: "Üst sınır = median + 1,5 × IQR = 42 ya da Q3 + IQR = 42; alt yarı 14, 16, 20, 22, 24 → Q1 = 20; 60 çok uzak görünüyor, o yüzden outlier.", dogru: "Üst sınır = ==Q3 + 1,5 × IQR== = 48 (median'dan değil Q3'ten, IQR'dan değil 1,5 × IQR'dan). n tekken median iki yarıya girmez: alt yarı 14, 16, 20, 22 → Q1 = 18. 60 > 48 olduğu için outlier." }
      ]
    },
    {
      baslik: "Katamaranlar",
      kisa: "Aynı kural başka veride de: 360 galonluk tekne tek outlier.",
      bloklar: [
        { tip: "sekil", baslik: "19 katamaranın tatlı su kapasitesi (galon)", fig: { type: "dot", values: [79, 79, 100, 132, 145, 150, 155, 158, 158, 158.5, 158.5, 185, 185, 206, 206, 211, 227, 264, 360], label: "Freshwater capacity (gallons)" } },
        { tip: "ornek", baslik: "Katamaranlarda outlier var mı?", durum: "Sıralı 19 değer: 79, 79, 100, 132, 145, 150, 155, 158, 158, 158,5, 158,5, 185, 185, 206, 206, 211, 227, 264, 360.",
          adimlar: ["n = 19: median 10. değer = 158,5; yarılara katılmaz. Alt 9 değerin ortası (5. değer) Q1 = 145; üst 9 değerin ortası Q3 = 206.", "IQR = 206 − 145 = 61; 1,5 × 61 = 91,5.", "Üst sınır: 206 + 91,5 = 297,5. 360 > 297,5 → yüksek outlier. 264 < 297,5 → outlier değil.", "Alt sınır: 145 − 91,5 = 53,5. En küçük değer 79 > 53,5 → alt tarafta outlier yok."],
          sonuc: "==360 galonluk tekne tek outlier==. Özet: Q1 145, median 158,5, Q3 206, IQR 61, sınırlar 53,5 ve 297,5." }
      ]
    },
    {
      baslik: "*Five-number summary* ve *boxplot*",
      kisa: "Boxplot beş sayı özetinin grafiğidir; outlier'lar ayrı nokta olur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "5️⃣", terim: "Five-number summary", tr: "beş sayı özeti", tanim: "En küçük değer, Q1, median, Q3, en büyük değer.", ornek: "Geliş süresi: 14 · 18 · 24 · 30 · 60." },
            { ikon: "📦", terim: "Boxplot", tr: "kutu grafiği (box-and-whisker plot)", tanim: "Five-number summary'nin grafiği: kutu Q1'den Q3'e, içinde median çizgisi.", ornek: "Okula geliş süresi boxplot'u." },
            { ikon: "〰️", terim: "Whisker", tr: "bıyık", tanim: "Kutudan, ==outlier olmayan== en küçük ve en büyük değere uzanan çizgi.", ornek: "Süre grafiğinde max = 60 ama outlier olduğu için sağ bıyık 32'ye uzanır." }
          ] },
        { tip: "sekil", baslik: "Geliş süresi boxplot'u", fig: { type: "box", items: [{ name: "Commute", min: 14, q1: 18, med: 24, q3: 30, max: 32, outliers: [60] }], label: "Commute time (min)" } },
        { tip: "adimlar", baslik: "Boxplot nasıl çizilir?", adimlar: [
            { baslik: "1 · Ekseni kur", metin: "Etiketli ve ölçekli bir eksen çiz." },
            { baslik: "2 · Kutu", metin: "Q1'den Q3'e bir kutu, içinde median çizgisi." },
            { baslik: "3 · Outlier'ları ayır", metin: "1,5 × IQR kuralıyla outlier olanları belirle." },
            { baslik: "4 · Bıyıklar", metin: "Kutudan outlier olmayan en küçük ve en büyük değerlere çiz." },
            { baslik: "5 · Outlier noktaları", metin: "Outlier'lar ayrı birer nokta olarak gösterilir." }
          ] },
        { tip: "adimlar", baslik: "TI-84 ile boxplot", adimlar: [
            { baslik: "1 · Verileri gir", metin: "STAT → EDIT → L1 sütununa derinlikleri yaz." },
            { baslik: "2 · Plot'u aç", metin: "2nd → STAT PLOT → Plot1 → On." },
            { baslik: "3 · Türü seç", metin: "Type satırında outlier noktalı boxplot simgesini seç (modified boxplot): outlier'ları ayrı nokta gösterir. XList: L1." },
            { baslik: "4 · Çiz", metin: "ZOOM → 9: ZoomStat." },
            { baslik: "5 · Oku", metin: "TRACE ile gez: minX = 205, Q1 = 3499, Med = 4030,5, Q3 = 5161, maxX = 6006." }
          ] }
      ]
    },
    {
      baslik: "Okyanus derinlikleri: beş sayı",
      kisa: "14 derinlik ölçümünün beş sayı özeti: 205 · 3499 · 4030,5 · 5161 · 6006.",
      bloklar: [
        { tip: "sekil", baslik: "Okyanusun tipik derinliği 2 milden (3219 m) fazla mı? 14 rastgele ölçüm", fig: { type: "dot", values: [205, 747, 1372, 3499, 3596, 3699, 3998, 4063, 4158, 5087, 5161, 5364, 5907, 6006], label: "Ocean depth (m)" } },
        { tip: "ornek", baslik: "Beş sayı özeti", durum: "Ölçüm sırası: 5161, 747, 4158, 3699, 3499, 3998, 205, 3596, 6006, 4063, 5907, 5364, 1372, 5087. Sıralı: 205, 747, 1372, 3499, 3596, 3699, 3998, 4063, 4158, 5087, 5161, 5364, 5907, 6006.",
          adimlar: ["n = 14: median 7. ve 8. değerin ortası = (3998 + 4063) ÷ 2 = 4030,5.", "Alt 7 değer: 205 … 3998; ortadaki 4. değer Q1 = 3499.", "Üst 7 değer: 4063 … 6006; ortadaki 4. değer Q3 = 5161.", "En küçük 205, en büyük 6006."],
          sonuc: "==Beş sayı özeti: 205 · 3499 · 4030,5 · 5161 · 6006.==" }
      ]
    },
    {
      baslik: "Okyanus boxplot'u ve *outlier*'lar",
      kisa: "Bıyık sınıra değil, outlier olmayan en uç gerçek değere uzanır.",
      bloklar: [
        { tip: "grafik", baslik: "Derinlik verisinde sınırlar", xlabel: "Derinlik (1000 m)", ylabel: "", xmax: 8, ymax: 4,
          xticks: [{ v: 0, label: "0" }, { v: 1, label: "1000" }, { v: 2, label: "2000" }, { v: 3, label: "3000" }, { v: 4, label: "4000" }, { v: 5, label: "5000" }, { v: 6, label: "6000" }, { v: 7, label: "7000" }, { v: 8, label: "8000" }],
          ogeler: [
            { id: "n0", tip: "nokta", x: 0.205, y: 1 }, { id: "n1", tip: "nokta", x: 0.747, y: 1 }, { id: "n2", tip: "nokta", x: 1.372, y: 1 },
            { id: "n3", tip: "nokta", x: 3.499, y: 1 }, { id: "n4", tip: "nokta", x: 3.596, y: 1.3 }, { id: "n5", tip: "nokta", x: 3.699, y: 1 },
            { id: "n6", tip: "nokta", x: 3.998, y: 1 }, { id: "n7", tip: "nokta", x: 4.063, y: 1.3 }, { id: "n8", tip: "nokta", x: 4.158, y: 1 },
            { id: "n9", tip: "nokta", x: 5.087, y: 1 }, { id: "n10", tip: "nokta", x: 5.161, y: 1.3 }, { id: "n11", tip: "nokta", x: 5.364, y: 1 },
            { id: "n12", tip: "nokta", x: 5.907, y: 1 }, { id: "n13", tip: "nokta", x: 6.006, y: 1.3 },
            { id: "kutu", tip: "alan", renk: 1, noktalar: [[3.499, 2.2], [3.499, 3.2], [5.161, 3.2], [5.161, 2.2]], gizli: true },
            { id: "med", tip: "cizgi", renk: 2, from: [4.0305, 2.2], to: [4.0305, 3.2], etiket: "", gizli: true },
            { id: "lo", tip: "cizgi", renk: 3, kesik: true, from: [1.006, 0], to: [1.006, 3.7], etiket: "alt sınır 1006", gizli: true },
            { id: "hi", tip: "cizgi", renk: 3, kesik: true, from: [7.654, 0], to: [7.654, 3.7], etiket: "7654", gizli: true },
            { id: "ot", tip: "yazi", x: 0.5, y: 2, metin: "205 ve 747: outlier", gizli: true },
            { id: "bw", tip: "cizgi", renk: 0, from: [1.372, 2.7], to: [3.499, 2.7], etiket: "", gizli: true },
            { id: "bw2", tip: "cizgi", renk: 0, from: [5.161, 2.7], to: [6.006, 2.7], etiket: "", gizli: true },
            { id: "iddia", tip: "cizgi", renk: 3, from: [3.219, 0], to: [3.219, 3.9], etiket: "2 mil = 3219 m", gizli: true }
          ],
          durumlar: [
            { metin: "14 derinlik ölçümü. Bu ders notundaki gerçek veri." },
            { metin: "IQR = 5161 − 3499 = 1662; 1,5 × 1662 = 2493. Alt sınır 3499 − 2493 = 1006; üst sınır 5161 + 2493 = 7654.", goster: ["lo", "hi"] },
            { metin: "205 ve 747, alt sınırın (1006) altında: ikisi de ==outlier==. 1372 sınırın içinde. Üst sınırı aşan yok.", goster: ["ot"] },
            { metin: "Kutu Q1 = 3499'dan Q3 = 5161'e, içinde median = 4030,5. Bıyıklar sınıra değil gerçek veri değerlerine uzanır: solda 1372, sağda 6006.", goster: ["kutu", "med", "bw", "bw2"] },
            { metin: "2 mil = 3219 m çizgisi: kutunun sol kenarı (Q1) bile bu çizginin sağında.", goster: ["iddia"] }
          ] },
        { tip: "ornek", baslik: "Outlier kontrolü", durum: "Q1 = 3499, Q3 = 5161.",
          adimlar: ["IQR = 5161 − 3499 = 1662.", "1,5 × 1662 = 2493.", "Alt sınır: 3499 − 2493 = 1006. Üst sınır: 5161 + 2493 = 7654.", "205 < 1006 ve 747 < 1006 → ikisi de düşük outlier. 1372 > 1006 → outlier değil.", "6006 < 7654 → yüksek outlier yok."],
          sonuc: "==Outlier'lar: 205 ve 747.== Sol bıyık 1372'de, sağ bıyık 6006'da biter." },
        { tip: "sekil", baslik: "Okyanus derinliği boxplot'u", fig: { type: "box", items: [{ name: "Depth", min: 1372, q1: 3499, med: 4030.5, q3: 5161, max: 6006, outliers: [205, 747] }], label: "Ocean depth (m)" } },
        { tip: "tuzak", baslik: "Bıyık nereye uzanır?", metin: "Bıyık sınırı gösteren çizgi değildir.", yanlis: "Sol bıyık alt sınıra (1006) kadar uzanır.", dogru: "Bıyık ==outlier olmayan en uç gerçek veri değerine== uzanır: solda 1372, sağda 6006. Outlier'lar ayrı noktalardır." }
      ]
    },
    {
      baslik: "İddiayı grafikle savun",
      kisa: "Sayıyı ve bağlamı yaz: ne ölçüldüğünü cümlede söyle.",
      bloklar: [
        { tip: "ornek", baslik: "\"Tipik okyanus derinliği 2 milden fazla\"", durum: "İddia: tipik derinlik 2 mil = 3219 m'den fazla. Boxplot: Q1 = 3499, median = 4030,5.",
          adimlar: ["3219 m'ye bir çizgi çek.", "Kutunun sol kenarı Q1 = 3499 > 3219: verinin yaklaşık %75'i bu çizginin sağında.", "Sayarak kontrol: 14 noktanın 11'i 3219'dan derin (3499 ve sonrası).", "Median 4030,5 de 3219'un epey üstünde."],
          sonuc: "Grafik iddiayı ==destekliyor==: \"Yes. The first quartile of ocean depth (3499 m) is greater than 3219 m, so at least about 75% of the sampled locations are deeper than 2 miles. The median depth (4030.5 m) is also well above 3219 m.\"" },
        { tip: "tuzak", baslik: "Bağlamsız cevap", metin: "Sayı demeyeceksin, ne ölçüldüğünü söyleyeceksin.", yanlis: "Q1 3219'dan büyük, o yüzden evet.", dogru: "\"The first quartile of ocean depth is greater than 3219 m, so about 75% of the sampled locations are deeper than 2 miles.\" Değişkenin adı ve bağlamı cümlede olmalı." }
      ]
    },
    {
      baslik: "Boxplot'tan ne okunur?",
      kisa: "Boxplot median, IQR, range ve outlier'ı gösterir; tepe, boşluk, mean ve n'yi göstermez.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "👁️", baslik: "Boxplot'tan okunur", maddeler: ["*Median*: kutudaki çizgi", "*IQR*: kutunun boyu", "*Range*: bütün uzunluk (outlier'lar dahil)", "*Outlier*'lar ve çarpıklık"] },
          sag: { ikon: "🙈", baslik: "Boxplot'tan okunmaz", maddeler: ["*Peaks*, *gaps*, *clusters*", "*Mean*", "Kaç gözlem olduğu (n)"] },
          oyun: [
            { metin: "Kutunun içindeki çizginin değeri.", cevap: "sol", neden: "Median çizgisi: okunur." },
            { metin: "Verinin içinde iki ayrı öbek (cluster) olup olmadığı.", cevap: "sag", neden: "Boxplot tepe, boşluk ve öbekleri göstermez." },
            { metin: "Kutunun uzunluğu, yani IQR.", cevap: "sol", neden: "Q3 − Q1 doğrudan görünür." },
            { metin: "Verideki ortalama değer.", cevap: "sag", neden: "Mean boxplot'ta yok." },
            { metin: "Kaç öğrencinin ölçüldüğü.", cevap: "sag", neden: "Gözlem sayısı okunmaz." },
            { metin: "En küçük ile en büyük değer arasındaki fark (outlier'lar dahil).", cevap: "sol", neden: "Range bütün uzunluktur." }
          ] },
        { tip: "ornek", baslik: "Okyanus boxplot'undan okuma", durum: "Beş sayı özeti: 205 · 3499 · 4030,5 · 5161 · 6006.",
          adimlar: ["Median: 4030,5 m (kutudaki çizgi).", "IQR: 5161 − 3499 = 1662 m (kutunun boyu).", "Range: 6006 − 205 = 5801 m (outlier'lar dahil)."],
          sonuc: "==Median = 4030,5 m, IQR = 1662 m, range = 5801 m.==" },
        { tip: "tuzak", baslik: "Uzun parça ≠ daha çok veri; şekil saklanır", metin: "Dört parçanın her birinde verinin yaklaşık %25'i vardır. Boxplot şeklin ayrıntısını da saklar: tek tepeli ve iki tepeli dağılım aynı boxplot'u verebilir.", yanlis: "Kutunun sağ parçası uzun, o hâlde orada daha çok değer var; boxplot'a bakıp tek tepeli olduğunu söyleyebilirim.", dogru: "Her parçada yaklaşık %25 var; uzun parça = ==daha geniş bir aralığa yayılmış== aynı sayıda değer. Tepe, boşluk ve öbek için dotplot ya da histogram gerekir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Outlier* kuralı: x < Q1 − 1,5 × IQR ya da x > Q3 + 1,5 × IQR. Formül kâğıdında yok: ezberle.",
            "Adımlar: sırala → Q1, Q3 (median hariç) → IQR → 1,5 × IQR → iki sınır. Süre örneğinde sınırlar 0 ve 48; 60 outlier.",
            "Yaygın hatalar: median'dan ölçmek, 1,5 ile çarpmayı unutmak, median'ı yarılara katmak.",
            "*Five-number summary*: min · Q1 · median · Q3 · max (okyanus: 205 · 3499 · 4030,5 · 5161 · 6006).",
            "*Boxplot*'ta kutu Q1–Q3, içinde median; bıyıklar outlier olmayan en uç gerçek değerlere uzanır; outlier'lar ayrı nokta.",
            "Her parçada verinin yaklaşık %25'i vardır; uzun parça = daha yayılmış veri.",
            "Boxplot median, IQR, range ve outlier'ları gösterir; peaks, gaps, clusters, mean ve n'yi göstermez.",
            "İddiayı savunurken sayıyı ve bağlamı yaz (ocean depth, sampled locations).",
            "Katamaran örneğinde sınırlar 53,5 ve 297,5: 360 tek outlier."
          ] }
      ]
    }
  ]
};
