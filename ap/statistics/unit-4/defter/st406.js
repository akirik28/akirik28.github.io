/* Kitpath not defteri · st406 · 4.7 Rastgele Değişkenler ve Olasılık Dağılımları
   Kaynak: AP Statistics CED Topic 4.7 (video kiti yok). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st406",
  amac: "Bu konu rastgele bir sürecin sonucunu sayıya çevirmeyi anlatıyor: *random variable*. *Discrete* ve *continuous* ayrımını, *probability distribution* tablosunu ve kurallarını, \"en az\" ve \"en çok\" olasılıklarının nasıl hesaplandığını öğreneceksin.",
  bolumler: [
    {
      baslik: "*Random variable*: sonuca sayı yapıştırmak",
      kisa: "Rastgele değişken, rastgele bir sürecin sonucunu bir sayıya çevirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎲", terim: "Random variable", tr: "rastgele değişken", tanim: "Rastgele bir sürecin sonucunu ==sayısal bir değere== çeviren değişken. Büyük harfle yazılır: X, Y.", ornek: "Kantinde rastgele seçilen bir öğrencinin aldığı tost sayısı X." },
            { ikon: "🔢", terim: "Discrete random variable", tr: "ayrık rastgele değişken", tanim: "Alabileceği değerler tek tek ==sayılıp listelenebilir==; değerler arasında boşluk vardır.", ornek: "X = 0, 1, 2, 3 tost." },
            { ikon: "📏", terim: "Continuous random variable", tr: "sürekli rastgele değişken", tanim: "Bir aralıktaki ==her değeri== alabilir; değerler ölçülür, listelenemez.", ornek: "Servisin gelme süresi: 4 dk, 4,2 dk, 4,27 dk…" }
          ] },
        { tip: "ikili", sol: { ikon: "🔢", baslik: "*Discrete*", maddeler: ["Değerleri sayarsın", "Tek tek yazabilirsin: 0, 1, 2, 3", "Her değerin kendi olasılığı vardır"] },
          sag: { ikon: "📏", baslik: "*Continuous*", maddeler: ["Değerleri ölçersin", "Aralıktaki her sayı mümkün", "Olasılık bir aralık için verilir"] },
          oyun: [
            { metin: "Seçilen bir öğrencinin telefonundaki uygulama sayısı.", cevap: "sol", neden: "Uygulamalar sayılır: *discrete*." },
            { metin: "Servisin durağa gelme süresi (dakika).", cevap: "sag", neden: "Süre ölçülür, aralıktaki her değer olabilir: *continuous*." },
            { metin: "Bir öğrencinin haftada kaç konsere gittiği.", cevap: "sol", neden: "Sayılan tam sayı: *discrete*." },
            { metin: "Bir öğrencinin boyu (cm).", cevap: "sag", neden: "Ölçülür: *continuous*." }
          ] },
        { tip: "tuzak", baslik: "X ile x aynı şey değil", metin: "Büyük **X** rastgele değişkenin kendisidir (\"tost sayısı\"). Küçük **x** onun aldığı belirli bir değerdir (2 tost).", yanlis: "P(X) bir sayıdır; X = x yazmaya gerek yok.", dogru: "Olasılığı P(X = x) diye yaz: \"X'in x değerini alma olasılığı\". Büyük harf değişken, küçük harf değerdir." }
      ]
    },
    {
      baslik: "*Probability distribution*: tablo ve kurallar",
      kisa: "Dağılım, her değerin olasılığını listeler; olasılıklar toplamı 1 eder.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📋", terim: "Probability distribution", tr: "olasılık dağılımı", tanim: "Bir rastgele değişkenin ==alabileceği her değeri== ve o değerin ==olasılığını== gösteren tablo, grafik ya da formül.", ornek: "Tost sayısı için aşağıdaki tablo." }
          ] },
        { tip: "tablo", baslik: "Kantinde tost sayısı (X) dağılımı", head: ["x (tost)", "0", "1", "2", "3"], rows: [
            ["P(X = x)", "0,10", "0,40", "0,30", "0,20"]
          ], not: "Toplam: 0,10 + 0,40 + 0,30 + 0,20 = 1,00. Yani her öğrenci bu dört değerden tam birini alır." },
        { tip: "liste", maddeler: [
            { ikon: "1️⃣", baslik: "Her olasılık 0 ile 1 arasında", metin: "0 ≤ P(X = x) ≤ 1; negatif olasılık ya da 1'den büyük olasılık olmaz." },
            { ikon: "2️⃣", baslik: "Hepsinin toplamı tam 1", metin: "Σ P(X = x) = 1; çünkü her sonuç tabloda yer alır ve biri mutlaka gerçekleşir." },
            { ikon: "3️⃣", baslik: "Değerler birbirini dışlar", metin: "Bir öğrenci aynı anda hem 1 hem 2 tost almış olamaz; bu yüzden olasılıklar doğrudan toplanır." }
          ] },
        { tip: "ornek", baslik: "Eksik olasılığı bul", durum: "Bir öğrencinin haftada kantinden aldığı simit sayısı X'in dağılımı: P(0) = 0,20; P(1) = 0,30; P(2) = ?; P(3) = 0,15. P(2) kaçtır?",
          adimlar: ["Toplam 1 olmalı: 0,20 + 0,30 + P(2) + 0,15 = 1.", "Bilinen kısım: 0,20 + 0,30 + 0,15 = 0,65.", "P(2) = 1 − 0,65 = 0,35."],
          sonuc: "P(2) = 0,35. Kontrol: 0,20 + 0,30 + 0,35 + 0,15 = 1,00 ✓" }
      ]
    },
    {
      baslik: "Dağılımı çubuklarla oku",
      kisa: "Çubuk yüksekliği olasılıktır; bir olayın olasılığı o çubukların toplamıdır.",
      bloklar: [
        { tip: "grafik", baslik: "Tost sayısı dağılımı: bir olay seç, çubukları topla", xlabel: "x (tost sayısı)", ylabel: "P(X = x)", xmax: 5, ymax: 5,
          xticks: [{ v: 1, label: "0" }, { v: 2, label: "1" }, { v: 3, label: "2" }, { v: 4, label: "3" }],
          yticks: [{ v: 1, label: "0,1" }, { v: 2, label: "0,2" }, { v: 3, label: "0,3" }, { v: 4, label: "0,4" }],
          ogeler: [
            { id: "b0", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b1", tip: "alan", renk: 0, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b2", tip: "alan", renk: 0, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "b3", tip: "alan", renk: 0, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "h2", tip: "alan", renk: 2, gizli: true, noktalar: [[2.65, 0], [3.35, 0], [3.35, 3], [2.65, 3]] },
            { id: "h3", tip: "alan", renk: 2, gizli: true, noktalar: [[3.65, 0], [4.35, 0], [4.35, 2], [3.65, 2]] },
            { id: "g0", tip: "alan", renk: 3, gizli: true, noktalar: [[0.65, 0], [1.35, 0], [1.35, 1], [0.65, 1]] },
            { id: "g1", tip: "alan", renk: 3, gizli: true, noktalar: [[1.65, 0], [2.35, 0], [2.35, 4], [1.65, 4]] },
            { id: "t0", tip: "yazi", x: 1, y: 1.4, metin: "0,10", gizli: true },
            { id: "t1", tip: "yazi", x: 2, y: 4.4, metin: "0,40", gizli: true },
            { id: "t2", tip: "yazi", x: 3, y: 3.4, metin: "0,30", gizli: true },
            { id: "t3", tip: "yazi", x: 4, y: 2.4, metin: "0,20", gizli: true },
            { id: "s1", tip: "yazi", x: 3.9, y: 4.7, metin: "P(X ≥ 2) = 0,30 + 0,20 = 0,50", gizli: true },
            { id: "s2", tip: "yazi", x: 3.1, y: 4.7, metin: "P(X < 2) = 0,10 + 0,40 = 0,50", gizli: true },
            { id: "s3", tip: "yazi", x: 3.1, y: 4.7, metin: "Bütün çubuklar: toplam = 1", gizli: true }
          ],
          durumlar: [
            { metin: "Yatay eksende X'in değerleri, dikey eksende her değerin olasılığı var. Henüz çubuk yok." },
            { metin: "Çubuk yüksekliği = olasılık. En yüksek çubuk 1 tost: en olası değer.", set: { b0: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 1], [0.65, 1]] }, b1: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 4], [1.65, 4]] }, b2: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 3], [2.65, 3]] }, b3: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 2], [3.65, 2]] } }, goster: ["t0", "t1", "t2", "t3"] },
            { metin: "\"En az 2 tost\" olayı: 2 ve 3 çubuklarını boya ve ==yüksekliklerini topla==.", goster: ["h2", "h3", "s1"] },
            { metin: "Kalan çubuklar \"2'den az tost\" olayı; bu olay birinin tamamlayıcısı.", gizle: ["h2", "h3", "s1"], goster: ["g0", "g1", "s2"] },
            { metin: "İki olay birbirini tamamlıyor: 0,50 + 0,50. Bütün çubukların toplamı her zaman ==1==.", gizle: ["g0", "g1", "s2"], goster: ["h2", "h3", "g0", "g1", "s3"] }
          ] },
        { tip: "ornek", baslik: "Üç olay, üç hesap", durum: "Aynı tost dağılımı: P(0) = 0,10; P(1) = 0,40; P(2) = 0,30; P(3) = 0,20. Şu olasılıkları bul: (a) en az bir tost, (b) 1 ile 2 arasında (1 ve 2 dahil), (c) 3'ten az.",
          adimlar: ["(a) \"En az bir\" = X ≥ 1. Kısa yol: 1 − P(0) = 1 − 0,10 = 0,90. Uzun yol: 0,40 + 0,30 + 0,20 = 0,90.", "(b) P(1 ≤ X ≤ 2) = P(1) + P(2) = 0,40 + 0,30 = 0,70.", "(c) P(X < 3) = P(0) + P(1) + P(2) = 0,10 + 0,40 + 0,30 = 0,80; ya da 1 − P(3) = 0,80."],
          sonuc: "(a) 0,90  (b) 0,70  (c) 0,80. İki yoldan da aynı sonucu bulmak hesabı kontrol etmenin en iyi yolu." },
        { tip: "tuzak", baslik: "< ile ≤ aynı değil", metin: "Ayrık değişkende uç değer önemlidir: P(X < 2) yalnız 0 ve 1'i toplar; P(X ≤ 2) ise 2'yi de katar.", yanlis: "\"2'den fazla\" dendiğinde 2 de dahildir; P(X > 2) = P(2) + P(3).", dogru: "\"Fazla / az\" uç değeri katmaz: P(X > 2) = P(3) = 0,20. \"En az / en çok\" uç değeri katar: P(X ≥ 2) = 0,50." }
      ]
    },
    {
      baslik: "Birikimli olasılık: en az, en çok",
      kisa: "Birikimli olasılık P(X ≤ x), soldan o değere kadar çubukları toplar.",
      bloklar: [
        { tip: "tablo", baslik: "Dağılım ve birikimli olasılık", head: ["x", "P(X = x)", "P(X ≤ x)"], rows: [
            ["0", "0,10", "0,10"],
            ["1", "0,40", "0,50"],
            ["2", "0,30", "0,80"],
            ["3", "0,20", "1,00"]
          ], vurgu: 1, not: "Son değerde birikimli olasılık her zaman 1'dir. \"En az 2\" için: P(X ≥ 2) = 1 − P(X ≤ 1) = 1 − 0,50 = 0,50." },
        { tip: "sekil", baslik: "P(X ≤ x): çubuklar sağa doğru birikir", fig: { type: "bar", cats: ["0", "1", "2", "3"], series: [{ name: "P(X ≤ x)", values: [0.1, 0.5, 0.8, 1] }], ylabel: "P(X ≤ x)" } },
        { tip: "ikili", sol: { ikon: "⬆️", baslik: "P(X ≥ 2)", maddeler: ["\"En az 2\"", "\"2 ya da daha fazla\"", "Hesap: 1 − P(X ≤ 1)"] },
          sag: { ikon: "⬇️", baslik: "P(X ≤ 2)", maddeler: ["\"En çok 2\"", "\"2'yi geçmeyen\"", "Hesap: birikimli tablodan oku"] },
          oyun: [
            { metin: "En az 2 tost alan öğrenciler.", cevap: "sol", neden: "\"En az\" alt sınırdır: X ≥ 2." },
            { metin: "En çok 2 tost alan öğrenciler.", cevap: "sag", neden: "\"En çok\" üst sınırdır: X ≤ 2." },
            { metin: "İki ya da daha çok tost alanlar.", cevap: "sol", neden: "2 ve üstü: X ≥ 2." },
            { metin: "İkiyi geçmeyen sayıda tost alanlar.", cevap: "sag", neden: "2 ve altı: X ≤ 2." }
          ] }
      ]
    },
    {
      baslik: "Sürekli olunca olasılık alandır",
      kisa: "Sürekli değişkende olasılık çubuk değil, eğrinin altındaki alandır.",
      bloklar: [
        { tip: "grafik", baslik: "Servis 0 ile 10 dakika arasında rastgele geliyor", xlabel: "Bekleme süresi (dk)", ylabel: "Yoğunluk", xmax: 10, ymax: 4,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }],
          yticks: [{ v: 1, label: "0,1" }, { v: 2, label: "0,2" }],
          ogeler: [
            { id: "d", tip: "cizgi", renk: 0, from: [0, 1], to: [10, 1], etiket: "yoğunluk" },
            { id: "a", tip: "alan", renk: 2, gizli: true, noktalar: [[0, 0], [4, 0], [4, 1], [0, 1]] },
            { id: "n", tip: "nokta", x: 4, y: 1, etiket: "4 dk", gizli: true, kilavuz: true },
            { id: "y", tip: "yazi", x: 2, y: 2, metin: "P(X ≤ 4) = 4 × 0,1 = 0,4", gizli: true },
            { id: "z", tip: "yazi", x: 7, y: 2.6, metin: "P(X = 4) = 0 (genişlik 0)", gizli: true }
          ],
          durumlar: [
            { metin: "Süre 0 ile 10 arasında her değeri eşit şansla alabilir; yoğunluk eğrisi düz bir çizgi. Altındaki toplam alan 1 (10 × 0,1)." },
            { metin: "\"4 dakikadan az\" olasılığı = 0'dan 4'e kadar ==alan==.", goster: ["a", "n", "y"] },
            { metin: "Tek bir noktanın olasılığı 0'dır: genişliği olmayan şeridin alanı yok. Bu yüzden sürekli değişkende P(X = 4) = 0.", goster: ["z"] }
          ] },
        { tip: "not", metin: "Bu yüzden sürekli değişkenlerde olasılık **aralık** için sorulur: P(X ≤ 4), P(2 < X < 6). Normal dağılımda (Unit 5) alan hesabı tam bu fikre dayanır. Burada yalnız fikri tut: ayrık değişkende çubuk, sürekli değişkende alan." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Random variable* rastgele sürecin sonucunu sayıya çevirir; büyük X değişkendir, küçük x değeridir.",
            "*Discrete* değerler sayılıp listelenir (tost sayısı); *continuous* değerler ölçülür (bekleme süresi).",
            "*Probability distribution* her değeri ve olasılığını gösterir: tablo, çubuk grafik ya da formül.",
            "Geçerli dağılımda her olasılık 0 ile 1 arasında, toplam tam 1'dir.",
            "Ayrık değişkende olay olasılığı = o olaya giren değerlerin olasılıkları toplamı.",
            "\"En az\" ve \"en çok\" uç değeri katar (≥, ≤); \"fazla\" ve \"az\" katmaz (>, <).",
            "Tamamlayıcı yol: P(X ≥ 1) = 1 − P(X = 0). Hesabı iki yoldan kontrol et.",
            "Birikimli olasılık P(X ≤ x), soldan x'e kadar çubukları toplar.",
            "Sürekli değişkende olasılık eğri altındaki alandır; tek bir noktanın olasılığı 0'dır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi bir *discrete random variable*'dır?",
      opts: ["Rastgele seçilen bir öğrencinin boyu (cm)", "Rastgele seçilen bir öğrencinin telefonundaki uygulama sayısı", "Servisin durağa gelme süresi", "Okul bahçesinde öğle saatindeki sıcaklık"],
      a: 1, why: "Uygulama sayısı sayılır ve 0, 1, 2, … diye listelenir: *discrete*. Boy, süre ve sıcaklık ölçülür; bir aralıktaki her değeri alabildikleri için *continuous*'tur. En çekici yanlış şık C: süreyi tam dakikaya yuvarlamak onu sayı yapmaz, ölçülen şey hâlâ sürekli." },
    { q: "X, bir öğrencinin haftada kantinden aldığı simit sayısıdır. Dağılımı tabloda verilmiştir. P(X ≥ 2) kaçtır?",
      opts: ["0,35", "0,65", "0,85", "0,50"],
      a: 3,
      fig: { type: "table", head: ["x", "0", "1", "2", "3"], rows: [["P(X = x)", "0,20", "0,30", "?", "0,15"]], caption: "Simit sayısı dağılımı; P(X = 2) eksik." },
      why: "Toplam 1 olmalı: P(2) = 1 − (0,20 + 0,30 + 0,15) = 0,35. \"En az 2\" = P(2) + P(3) = 0,35 + 0,15 = 0,50. En çekici yanlış şık A: yalnız P(2)'yi vermek, 3'ü unutmak olur. B ise P(X ≠ 2)'dir." },
    { q: "Aşağıdaki tablolardan hangisi x = 1, 2, 3 için geçerli bir *probability distribution* gösterir?",
      opts: ["P: 0,3 ; 0,4 ; 0,3", "P: 0,5 ; 0,4 ; 0,3", "P: 0,6 ; 0,5 ; −0,1", "P: 0,2 ; 0,3 ; 0,4"],
      a: 0, why: "Geçerli dağılımda her olasılık 0 ile 1 arasında ve toplam 1 olmalı: 0,3 + 0,4 + 0,3 = 1. B'nin toplamı 1,2; C'de negatif olasılık var; D'nin toplamı yalnız 0,9. D en çekici yanlış şık, çünkü her sayı geçerli görünüyor ama toplam eksik." },
    { q: "Bir okulda rastgele seçilen bir öğrenci için X, haftada gittiği konser sayısıdır. Çubuk grafik X'in dağılımını gösteriyor. P(X ≤ 1) kaçtır?",
      opts: ["0,10", "0,30", "0,40", "0,60"],
      a: 2,
      fig: { type: "bar", cats: ["0", "1", "2", "3"], series: [{ name: "Öğrenci oranı", values: [0.1, 0.3, 0.4, 0.2] }], ylabel: "P(X = x)" },
      why: "P(X ≤ 1) = P(0) + P(1) = 0,1 + 0,3 = 0,4. En çekici yanlış şık D (0,6): bu P(X ≥ 2) = 0,4 + 0,2 değeridir, yani aranan olayın tamamlayıcısı. Soru \"en çok 1\" diyor, yani soldan toplanır." },
    { q: "Ada iki jetonu aynı anda atıyor. X, gelen tura sayısı: P(0) = 0,25; P(1) = 0,50; P(2) = 0,25. En az bir tura gelme olasılığı kaçtır?",
      opts: ["0,25", "0,75", "0,50", "1,00"],
      a: 1, why: "\"En az bir\" = X ≥ 1. Tamamlayıcı yol: 1 − P(0) = 1 − 0,25 = 0,75. Doğrudan: 0,50 + 0,25 = 0,75. En çekici yanlış şık C: yalnız P(1) = 0,50'yi almak, iki tura gelme durumunu unutmak olur." }
  ]
};
