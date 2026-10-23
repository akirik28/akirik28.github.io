/* Kitora not defteri · pc503 · 5.3 Logaritmik Fonksiyonlar ve Grafikler
   Kaynak: okul-10-2025-26.md (Precalculus Unit 5) + MEB 10. sınıf programı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc503",
  amac: "Bu konu *logarithmic function* yani logaritmik fonksiyonu anlatıyor: y = log_b x. Grafiğini, üstel fonksiyonun tersi olduğunu (y = x simetrisi), dönüşümleri, tanım kümesi koşullarını öğreneceksin. Ek bilgi olarak pH gibi logaritmik ölçeğe de değiniliyor.",
  bolumler: [
    {
      baslik: "Logaritmik fonksiyon ve grafiği",
      kisa: "y = log_b x eğrisi (1, 0)'dan geçer ve x = 0 asimptotuna yaklaşır.",
      bloklar: [
        { tip: "grafik", baslik: "f(x) = log₂ x ve g(x) = log_(1/2) x", xlabel: "x", ylabel: "y", xmax: 9, ymax: 7,
          yticks: [{ v: 1, label: "−2" }, { v: 2, label: "−1" }, { v: 3, label: "0" }, { v: 4, label: "1" }, { v: 5, label: "2" }, { v: 6, label: "3" }],
          ogeler: [
            { id: "xax", tip: "cizgi", renk: 0, from: [0, 3], to: [9, 3], etiket: "x" },
            { id: "f", tip: "egri", renk: 1, etiket: "f", gizli: true, noktalar: [[0.125, 0], [0.18, 0.526], [0.25, 1], [0.35, 1.485], [0.5, 2], [0.7, 2.485], [1, 3], [1.4, 3.485], [2, 4], [2.8, 4.485], [4, 5], [5.7, 5.511], [8, 6]] },
            { id: "p1", tip: "nokta", renk: 0, x: 1, y: 3, gizli: true },
            { id: "p2", tip: "nokta", renk: 0, x: 2, y: 4, gizli: true },
            { id: "p3", tip: "nokta", renk: 0, x: 4, y: 5, gizli: true },
            { id: "p4", tip: "nokta", renk: 0, x: 8, y: 6, gizli: true },
            { id: "t1", tip: "yazi", x: 1.15, y: 2.3, metin: "(1, 0)", hiza: "start", gizli: true },
            { id: "t2", tip: "yazi", x: 2.15, y: 3.3, metin: "(2, 1)", hiza: "start", gizli: true },
            { id: "t3", tip: "yazi", x: 4.15, y: 4.3, metin: "(4, 2)", hiza: "start", gizli: true },
            { id: "t4", tip: "yazi", x: 7.9, y: 4.9, metin: "(8, 3)", hiza: "end", gizli: true },
            { id: "ok0", tip: "ok", renk: 3, from: [1.2, 0.5], to: [0.15, 0.5], gizli: true },
            { id: "as0", tip: "yazi", x: 0.3, y: 6.5, metin: "x = 0 asimptot", hiza: "start", gizli: true },
            { id: "g", tip: "egri", renk: 2, etiket: "g", gizli: true, noktalar: [[0.125, 6], [0.18, 5.474], [0.25, 5], [0.35, 4.515], [0.5, 4], [0.7, 3.515], [1, 3], [1.4, 2.515], [2, 2], [2.8, 1.515], [4, 1], [5.7, 0.489], [8, 0]] }
          ],
          durumlar: [
            { metin: "**f(x) = log₂ x**: taban 2 > 1, grafik soldan sağa yükselir (*increasing*). Sol kenar y eksenidir; kalın yatay çizgi x eksenidir.", goster: ["f"] },
            { metin: "Anahtar noktalar: (1, 0), (2, 1), (4, 2), (8, 3). log_b 1 = 0 ve log_b b = 1 olduğundan (1, 0) ve (b, 1) her zaman grafiktedir.", goster: ["p1", "p2", "p3", "p4", "t1", "t2", "t3", "t4"] },
            { metin: "x sıfıra yaklaşırken eğri aşağı iner ve y eksenine yapışır: ==*vertical asymptote*== x = 0. Tanım kümesi x > 0; değer kümesi bütün reel sayılardır.", goster: ["ok0", "as0"] },
            { metin: "Taban 0 < b < 1 ise **g(x) = log_(1/2) x = −log₂ x**: x eksenine göre yansıma. Soldan sağa ==azalır==; (1, 0)'dan geçer, asimptot yine x = 0.", goster: ["g"] }
          ] },
        { tip: "tablo", baslik: "f(x) = log₂ x özellikleri", head: ["Özellik", "Değer", "Sınavda böyle yaz"], rows: [
            ["Tanım kümesi", "x > 0", "*The domain is x > 0.*"],
            ["Değer kümesi", "bütün reel sayılar", "*The range is all real numbers.*"],
            ["x-kesişimi", "(1, 0)", "*The x-intercept is (1, 0).*"],
            ["y-kesişimi", "yok", "*There is no y-intercept.*"],
            ["Düşey asimptot", "x = 0", "*The vertical asymptote is x = 0.*"],
            ["Yön (b > 1)", "artan", "*The function is increasing on its domain.*"]
          ] },
        { tip: "ikili", sol: { ikon: "📈", baslik: "Artan (*increasing*)", maddeler: ["b > 1", "Soldan sağa yükselir"] },
          sag: { ikon: "📉", baslik: "Azalan (*decreasing*)", maddeler: ["0 < b < 1", "Soldan sağa alçalır"] },
          oyun: [
            { metin: "y = log₅ x", cevap: "sol", neden: "Taban 5 > 1: artan." },
            { metin: "y = log_(1/3) x", cevap: "sag", neden: "Taban 1/3 < 1: azalan." },
            { metin: "y = ln x", cevap: "sol", neden: "Taban e ≈ 2,718 > 1: artan." },
            { metin: "y = log_(0,5) x", cevap: "sag", neden: "Taban 0,5 < 1: azalan." }
          ] }
      ]
    },
    {
      baslik: "Ters fonksiyon: üstel ve logaritmik birbirini geri alır",
      kisa: "2^x ile log₂ x birbirinin tersidir; grafikleri y = x'e göre simetriktir.",
      bloklar: [
        { tip: "grafik", baslik: "f(x) = 2^x ve tersi f⁻¹(x) = log₂ x", xlabel: "x", ylabel: "y", xmax: 8.7, ymax: 6,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          ogeler: [
            { id: "f", tip: "egri", renk: 1, etiket: "f", noktalar: [[0, 1], [0.5, 1.414], [1, 2], [1.5, 2.828], [2, 4], [2.5, 5.657]] },
            { id: "p1", tip: "nokta", renk: 1, x: 0, y: 1 },
            { id: "m", tip: "cizgi", renk: 3, kesik: true, from: [0, 0], to: [6, 6], etiket: "y = x", gizli: true },
            { id: "pa", tip: "nokta", renk: 1, x: 2, y: 4, gizli: true },
            { id: "pb", tip: "nokta", renk: 2, x: 4, y: 2, gizli: true },
            { id: "ok", tip: "ok", renk: 3, from: [2.25, 3.75], to: [3.75, 2.25], gizli: true },
            { id: "g", tip: "egri", renk: 2, etiket: "f⁻¹", gizli: true, noktalar: [[1, 0], [1.414, 0.5], [2, 1], [2.828, 1.5], [4, 2], [5.657, 2.5]] },
            { id: "p2", tip: "nokta", renk: 2, x: 1, y: 0, gizli: true }
          ],
          durumlar: [
            { metin: "**f(x) = 2^x**: (0, 1), (1, 2), (2, 4) noktalarından geçer (burada yalnızca x ≥ 0 parçası çizili)." },
            { metin: "Ayna doğrusu: ==y = x==. Ters fonksiyonun grafiği, f'nin bu doğruya göre yansımasıdır.", goster: ["m"] },
            { metin: "(2, 4) noktasının yansıması (4, 2): ==x ile y yer değiştirir==. Doğru üzerindeki bir ayna gibi.", goster: ["pa", "pb", "ok"] },
            { metin: "Bütün noktalar yansıyınca **f⁻¹(x) = log₂ x** eğrisi oluşur: (1, 0), (2, 1), (4, 2) … 2^x ile log₂ x birbirini geri alır.", gizle: ["ok"], goster: ["g", "p2"] },
            { metin: "Tanım ve değer kümeleri de yer değiştirir: f için değer kümesi y > 0, f⁻¹ için tanım kümesi x > 0. Asimptot y = 0, x = 0 olur.", goster: [] }
          ] },
        { tip: "ikili", sol: { ikon: "⬆️", baslik: "f(x) = 2^x", maddeler: ["Tanım kümesi: bütün reel sayılar", "Değer kümesi: y > 0", "Asimptot: y = 0", "(0, 1) noktasından geçer"] },
          sag: { ikon: "🔑", baslik: "f⁻¹(x) = log₂ x", maddeler: ["Tanım kümesi: x > 0", "Değer kümesi: bütün reel sayılar", "Asimptot: x = 0", "(1, 0) noktasından geçer"] } },
        { tip: "ornek", baslik: "Ters fonksiyonu bul", durum: "f(x) = 3^(x−1) + 2 fonksiyonunun tersini bul ve kontrol et.",
          adimlar: ["y = 3^(x−1) + 2 yaz.", "x ile y'nin yerini değiştir: x = 3^(y−1) + 2.", "Üstel terimi yalnız bırak: x − 2 = 3^(y−1).", "Logaritmik biçime çevir: y − 1 = log₃(x − 2).", "y'yi yalnız bırak: y = log₃(x − 2) + 1.", "Kontrol: f(1) = 3^0 + 2 = 3 ve f⁻¹(3) = log₃ 1 + 1 = 1."],
          sonuc: "f⁻¹(x) = log₃(x − 2) + 1; tanım kümesi x > 2 (f'nin değer kümesi). **Sınavda böyle yaz:** *To find the inverse, swap x and y and solve for y.*" },
        { tip: "tuzak", metin: "Üssün −1'i ile tersin gösterimi karışıyor.", yanlis: "f⁻¹(x) = 1 ÷ f(x).", dogru: "f⁻¹ geri alan fonksiyondur: f(f⁻¹(x)) = x. 2^x'in tersi 1 ÷ 2^x değil, log₂ x'tir." }
      ]
    },
    {
      baslik: "Logaritmik grafikte dönüşümler",
      kisa: "a·log_b(x − h) + k: asimptot x = h, tanım kümesi x > h.",
      bloklar: [
        { tip: "grafik", baslik: "f(x) = log₂ x grafiğinden h(x) = log₂(x − 2) + 1", xlabel: "x", ylabel: "y", xmax: 9, ymax: 7,
          yticks: [{ v: 1, label: "−2" }, { v: 2, label: "−1" }, { v: 3, label: "0" }, { v: 4, label: "1" }, { v: 5, label: "2" }, { v: 6, label: "3" }],
          ogeler: [
            { id: "xax", tip: "cizgi", renk: 0, from: [0, 3], to: [9, 3], etiket: "x" },
            { id: "f", tip: "egri", renk: 1, etiket: "f", noktalar: [[0.125, 0], [0.18, 0.526], [0.25, 1], [0.35, 1.485], [0.5, 2], [0.7, 2.485], [1, 3], [1.4, 3.485], [2, 4], [2.8, 4.485], [4, 5], [5.7, 5.511], [8, 6]] },
            { id: "g", tip: "egri", renk: 2, etiket: "g", gizli: true, noktalar: [[2.125, 0], [2.25, 1], [2.4, 1.678], [2.5, 2], [2.7, 2.485], [3, 3], [3.5, 3.585], [4, 4], [5, 4.585], [6, 5], [7.5, 5.459], [9, 5.807]] },
            { id: "as", tip: "cizgi", renk: 0, kesik: true, from: [2, 0], to: [2, 7], gizli: true },
            { id: "ast", tip: "yazi", x: 2.15, y: 6.6, metin: "x = 2", hiza: "start", gizli: true },
            { id: "ok1", tip: "ok", renk: 2, from: [2.15, 4], to: [3.85, 4], gizli: true },
            { id: "h", tip: "egri", renk: 3, etiket: "h", gizli: true, noktalar: [[2.125, 1], [2.25, 2], [2.4, 2.678], [2.5, 3], [2.7, 3.485], [3, 4], [3.5, 4.585], [4, 5], [5, 5.585], [6, 6], [7.5, 6.459], [9, 6.807]] },
            { id: "ok2", tip: "ok", renk: 3, from: [4, 4.1], to: [4, 4.9], gizli: true },
            { id: "pi", tip: "nokta", renk: 3, x: 2.5, y: 3, gizli: true },
            { id: "pit", tip: "yazi", x: 2.65, y: 2.3, metin: "(2,5 ; 0)", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: **f(x) = log₂ x**. Düşey asimptot x = 0, (1, 0) noktası." },
            { metin: "**x − 2**: grafik 2 birim ==sağa== kayar, g(x) = log₂(x − 2). Asimptot da sağa gider: ==x = 2==. (2, 1) noktası (4, 1) olur.", goster: ["g", "as", "ast", "ok1"] },
            { metin: "**+ 1**: grafik 1 birim ==yukarı== kayar, h(x) = log₂(x − 2) + 1. Düşey asimptot x = 2 değişmez; yukarı-aşağı kayma onu etkilemez.", goster: ["h", "ok2"], gizle: ["ok1"] },
            { metin: "Sonuç: tanım kümesi x > 2, değer kümesi bütün reel sayılar. x-kesişimi: log₂(x − 2) = −1 ise x − 2 = 1/2, yani x = 2,5.", goster: ["pi", "pit"], gizle: ["ok2"] }
          ] },
        { tip: "tablo", baslik: "Dönüşümün etkisi", head: ["Fonksiyon", "Etki", "Tanım kümesi · asimptot"], rows: [
            ["log₂(x − 2)", "2 birim sağa", "x > 2 · x = 2"],
            ["log₂(x + 1)", "1 birim sola", "x > −1 · x = −1"],
            ["log₂ x + 3", "3 birim yukarı", "x > 0 · x = 0"],
            ["−log₂ x", "x eksenine göre yansıma", "x > 0 · x = 0"],
            ["log₂(−x)", "y eksenine göre yansıma", "x < 0 · x = 0"]
          ] },
        { tip: "ornek", baslik: "Denklemden özellik oku", durum: "g(x) = log₃(x + 4) − 1 için tanım kümesini, düşey asimptotu ve x-kesişimini bul.",
          adimlar: ["x + 4 > 0 olmalı: x > −4.", "Düşey asimptot x = −4. (−1 asimptotu değiştirmez.)", "x-kesişimi için g(x) = 0: log₃(x + 4) = 1.", "Üstel biçim: x + 4 = 3^1, yani x = −1.", "Kontrol: log₃ 3 − 1 = 0."],
          sonuc: "Tanım kümesi x > −4, asimptot x = −4, x-kesişimi (−1, 0). **Sınavda böyle yaz:** *The domain is x > −4 and the vertical asymptote is x = −4.*" }
      ]
    },
    {
      baslik: "Tanım kümesi: logun içi pozitif olmalı",
      kisa: "Logun içi pozitif, taban pozitif ve 1'den farklı olmalıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "log_b(g(x)) tanımlı" }, "⇔",
            { t: "g(x) > 0", alt: "b > 0 ve b ≠ 1" }
          ], aciklama: "Önce logun içini pozitif yap, sonra eşitsizliği çöz. Sınavda böyle yaz: *Find the domain of the function.*" },
        { tip: "ornek", baslik: "İçi doğrusal ve ikinci dereceli", durum: "f(x) = log(3x − 6) ve g(x) = log₂(x² − 4) fonksiyonlarının tanım kümesini bul.",
          adimlar: ["f için 3x − 6 > 0, yani 3x > 6 ve x > 2.", "g için x² − 4 > 0, yani (x − 2)(x + 2) > 0.", "Çarpım pozitifse iki çarpan da pozitif ya da ikisi de negatiftir.", "x > 2 ya da x < −2. (−2 ile 2 arasında çarpım negatiftir.)"],
          sonuc: "Dom f = (2, ∞); Dom g = (−∞, −2) ∪ (2, ∞). **Sınavda böyle yaz:** *The domain of g is x < −2 or x > 2.*" },
        { tip: "ornek", baslik: "Kesir ve değişken taban", durum: "h(x) = ln((x − 1) ÷ (x + 3)) ve k(x) = log_(x−1) 5 için tanım kümesini bul.",
          adimlar: ["h için (x − 1) ÷ (x + 3) > 0 olmalı. Kritik noktalar 1 ve −3.", "x < −3: (−) ÷ (−) = + ; −3 < x < 1: (−) ÷ (+) = − ; x > 1: (+) ÷ (+) = +.", "h için x < −3 ya da x > 1.", "k için taban x − 1 > 0 ve x − 1 ≠ 1 olmalı: x > 1 ve x ≠ 2."],
          sonuc: "Dom h = (−∞, −3) ∪ (1, ∞); Dom k = (1, 2) ∪ (2, ∞). **Sınavda böyle yaz:** *The base must be positive and not equal to 1.*" },
        { tip: "tuzak", metin: "İki logaritmayı birleştirmek tanım kümesini değiştirebilir.", yanlis: "log(x − 2) + log(x + 2) ile log(x² − 4) aynı fonksiyondur.", dogru: "Birincinin tanım kümesi x > 2'dir (iki iç de pozitif olmalı). İkincininki x < −2 ya da x > 2. Çözerken ilk hâlin tanım kümesini kullan." }
      ]
    },
    {
      baslik: "Uygulama: pH ölçeği (ek bilgi)",
      kisa: "Ek bilgi: logaritmik ölçekte eşit adımlar 10 kat farkı anlatır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Logarithmic scale", tr: "logaritmik ölçek", tanim: "Eşit adımların eşit farkı değil, eşit oranı (örneğin 10 katı) gösterdiği ölçek.", ornek: "pH ölçeğinde her 1 birim, derişimde 10 kat demektir." },
            { ikon: "🧪", terim: "pH", tr: "asitlik ölçüsü", tanim: "H⁺ derişiminin onluk logaritmasının eksilisi: pH = −log [H⁺]. pH küçüldükçe çözelti daha asidiktir.", ornek: "pH 2 olan çözelti, pH 3 olandan 10 kat daha fazla H⁺ içerir." }
          ] },
        { tip: "tablo", baslik: "pH = −log [H⁺]", head: ["Çözelti", "[H⁺] (mol/L)", "pH"], rows: [["Asidik", "10^(−3)", "3"], ["Nötr (saf su)", "10^(−7)", "7"], ["Bazik", "10^(−10)", "10"]], not: "pH, [H⁺] derişiminin onluk logaritmasının eksilisidir. [H⁺] = 10^(−pH)." },
        { tip: "ornek", baslik: "pH 3 ile pH 5'i kıyasla", durum: "pH 3 olan çözeltinin H⁺ derişimi, pH 5 olanınkinin kaç katıdır?",
          adimlar: ["[H⁺] = 10^(−pH) olduğundan pH 3 için 10^(−3), pH 5 için 10^(−5).", "Oran: 10^(−3) ÷ 10^(−5) = 10^2 = 100."],
          sonuc: "100 kat. pH'da 1 birim fark, derişimde 10 kat fark demektir. **Sınavda böyle yaz:** *Each decrease of 1 in pH means the concentration of H⁺ is 10 times greater.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "y = log_b x: tanım kümesi x > 0, değer kümesi bütün reel sayılar, düşey asimptot x = 0.",
            "Grafik (1, 0) ve (b, 1) noktalarından geçer. b > 1 artan, 0 < b < 1 azalan.",
            "b^x ile log_b x birbirinin tersidir; grafikleri y = x doğrusuna göre simetriktir. Tanım ve değer kümeleri yer değiştirir.",
            "Ters bulma: y yaz, x ile y'yi değiştir, y'yi çöz. f(x) = 3^(x−1) + 2 için f⁻¹(x) = log₃(x − 2) + 1.",
            "f(x) = a·log_b(x − h) + k: h kadar sağa, k kadar yukarı. Düşey asimptot x = h, tanım kümesi x > h, değer kümesi bütün reel sayılar.",
            "−log_b x x eksenine, log_b(−x) y eksenine göre yansımadır; ikincisinde tanım kümesi x < 0.",
            "Tanım kümesi: logun içi > 0, taban > 0 ve ≠ 1. log(x² − 4) için x < −2 ya da x > 2.",
            "Ek bilgi (derste yok): pH = −log [H⁺]; pH'da 1 birim fark, derişimde 10 kat fark."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "What is the domain of f(x) = log(x² − 9)?",
      opts: ["x > 3", "−3 < x < 3", "x < −3 or x > 3", "x ≠ 3"],
      a: 2, why: "x² − 9 > 0 ise (x − 3)(x + 3) > 0 olur: x < −3 ya da x > 3. B, ifadenin negatif olduğu aralıktır; x = 3 dışındaki her değer de uygun değildir, bu yüzden D de yanlıştır." },
    { q: "What is the inverse of f(x) = 2^(x+1) − 3?",
      opts: ["f⁻¹(x) = log₂(x − 3) − 1", "f⁻¹(x) = log₂(x + 3) − 1", "f⁻¹(x) = log₂(x + 3) + 1", "f⁻¹(x) = 2^(x−1) + 3"],
      a: 1, why: "x = 2^(y+1) − 3 ise x + 3 = 2^(y+1), y + 1 = log₂(x + 3) ve y = log₂(x + 3) − 1. C, son adımda −1 yerine +1 yazar." },
    { q: "The table shows values of a function g(x) = log_b(x − h). What is the vertical asymptote of g?",
      fig: { type: "table", head: ["x", "g(x)"], rows: [["2", "0"], ["4", "1"], ["10", "2"]], caption: "g(x) = log_b(x − h)" },
      opts: ["x = 0", "x = 1", "x = 2", "y = 1"],
      a: 1, why: "log yalnızca içi 1 iken 0 olur: g(2) = 0 ise 2 − h = 1 ve h = 1. Kontrol: g(4) = log_b 3 = 1 ise b = 3, g(10) = log₃ 9 = 2. Asimptot x = h = 1. C, tablodaki ilk x değerini asimptot sanır." },
    { q: "The graph of y = log₂ x is shifted 3 units to the left and 2 units down. What are the new function and its vertical asymptote?",
      opts: ["y = log₂(x + 3) − 2 ; x = −3", "y = log₂(x − 3) − 2 ; x = 3", "y = log₂(x + 3) + 2 ; x = −3", "y = log₂(x − 2) + 3 ; x = 2"],
      a: 0, why: "Sola kayma x yerine x + 3, aşağı kayma −2 getirir; asimptot x = −3 olur. B sağa kaymayı, C yukarı kaymayı anlatır." },
    { q: "Let f(x) = e^x + 2. Which statement about the inverse function f⁻¹ is correct?",
      opts: ["f⁻¹(x) = ln(x) − 2, with vertical asymptote x = 0", "f⁻¹(x) = ln(x + 2), with vertical asymptote x = −2", "f⁻¹(x) = e^(x−2), with horizontal asymptote y = −2", "f⁻¹(x) = ln(x − 2), with vertical asymptote x = 2"],
      a: 3, why: "y = e^x + 2: x ile y yer değiştirir, x − 2 = e^y ve y = ln(x − 2). f'nin asimptotu y = 2 idi; f⁻¹'in asimptotu x = 2, tanım kümesi x > 2 ve x-kesişimi (3, 0). A, 2'yi logaritmanın dışında çıkarmaktır." }
  ]
};
