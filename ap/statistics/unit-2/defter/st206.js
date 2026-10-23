/* Kitpath not defteri · st206 · 2.8 En Küçük Kareler Regresyonu
   Kaynak: AP Statistics CED Unit 2, Topic 2.8 (Least Squares Regression). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st206",
  amac: "Bu konu \"en iyi doğru\"nun nasıl seçildiğini anlatır: *least-squares regression line*, eğim ve kesişim formülleri, r² (*coefficient of determination*) ve artıkların standart sapması s. Bilgisayar çıktısından bu sayıları okumayı da öğreneceksin.",
  bolumler: [
    {
      baslik: "Neden *least squares*?",
      kisa: "En küçük kareler doğrusu, artıkların karelerinin toplamını en küçük yapar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📐", terim: "Least-squares regression line (LSRL)", tr: "en küçük kareler regresyon doğrusu", tanim: "Artıkların ==karelerinin toplamını en küçük== yapan doğru. Verilere uyan en iyi doğru olarak bunu seçeriz.", ornek: "Aynı beş nokta için üç doğrudan en küçük kareler toplamını LSRL verir." }
          ] },
        { tip: "grafik", baslik: "Üç doğru, beş nokta", xlabel: "x", ylabel: "y", xmax: 6, ymax: 6,
          xticks: [1, 2, 3, 4, 5].map(function (v) { return { v: v, label: String(v) }; }),
          yticks: [1, 2, 3, 4, 5].map(function (v) { return { v: v, label: String(v) }; }),
          ogeler: [
            { id: "a", tip: "nokta", x: 1, y: 2 }, { id: "b", tip: "nokta", x: 2, y: 1 }, { id: "c", tip: "nokta", x: 3, y: 4 },
            { id: "d", tip: "nokta", x: 4, y: 3 }, { id: "e", tip: "nokta", x: 5, y: 5 },
            { id: "l1", tip: "cizgi", renk: 1, from: [0, 0], to: [6, 6], etiket: "", gizli: true },
            { id: "l2", tip: "cizgi", renk: 2, from: [0, 3], to: [6, 3], etiket: "", gizli: true },
            { id: "l3", tip: "cizgi", renk: 0, from: [0, 0.6], to: [6, 5.4], etiket: "", gizli: true },
            { id: "sse", tip: "yazi", x: 4.6, y: 0.7, metin: "toplam = 4", gizli: true }
          ],
          durumlar: [
            { metin: "Beş nokta: (1, 2), (2, 1), (3, 4), (4, 3), (5, 5). Hangi doğru bunlara en iyi uyar?" },
            { metin: "Doğru ŷ = x: artıklar 1, −1, 1, −1, 0. Kareler toplamı 4.", goster: ["l1", "sse"], set: { sse: { metin: "toplam = 4" } } },
            { metin: "Düz doğru ŷ = 3: artıklar −1, −2, 1, 0, 2. Kareler toplamı 10; daha kötü.", gizle: ["l1"], goster: ["l2"], set: { sse: { metin: "toplam = 10" } } },
            { metin: "ŷ = 0,6 + 0,8x: artıklar 0,6; −1,2; 1,0; −0,8; 0,4. Kareler toplamı ==3,6==. Hiçbir doğru bundan küçük değil: LSRL budur.", gizle: ["l2"], goster: ["l3"], set: { sse: { metin: "toplam = 3,6" } } }
          ] },
        { tip: "tablo", baslik: "Artıkların kareler toplamı", head: ["Doğru", "Artıklar (x = 1…5)", "Kareler toplamı"], rows: [
            ["ŷ = x", "1, −1, 1, −1, 0", "4"],
            ["ŷ = 3", "−1, −2, 1, 0, 2", "10"],
            ["ŷ = 0,6 + 0,8x (LSRL)", "0,6; −1,2; 1,0; −0,8; 0,4", "3,6"]
          ], vurgu: 2, not: "LSRL'de artıkların toplamı da 0'dır: 0,6 − 1,2 + 1,0 − 0,8 + 0,4 = 0." }
      ]
    },
    {
      baslik: "Eğim ve kesişim formülleri",
      kisa: "b = r·s_y / s_x ve a = ȳ − b·x̄; doğru (x̄, ȳ) noktasından geçer.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "b" }, "=", { t: "r" }, "·", { t: "s_y / s_x", alt: "y'nin yayılımı ÷ x'in yayılımı" }], aciklama: "Kesişim: a = ȳ − b·x̄. Bu iki formül AP formül sayfasında verilir, ama nasıl kullanılacağını bilmelisin." },
        { tip: "ornek", baslik: "Özet istatistiklerden LSRL", durum: "20 öğrencide haftalık çalışma saati (x): x̄ = 5, s_x = 2. Deneme puanı (y): ȳ = 60, s_y = 10. r = 0,8.",
          adimlar: ["Eğim: b = r · s_y ÷ s_x = 0,8 · 10 ÷ 2 = 4.", "Kesişim: a = ȳ − b·x̄ = 60 − 4 · 5 = 40.", "Doğru: ŷ = 40 + 4x.", "Tahmin: 7 saat çalışan için ŷ = 40 + 4 · 7 = 68."],
          sonuc: "Haftalık çalışma süresi 1 saat arttığında tahmin edilen deneme puanı ortalama 4 artar. Kesişim 40: 0 saat çalışana tahmin edilen puan." },
        { tip: "grafik", baslik: "LSRL ortalama noktasından geçer", xlabel: "x", ylabel: "y", xmax: 6, ymax: 6,
          xticks: [1, 2, 3, 4, 5].map(function (v) { return { v: v, label: String(v) }; }),
          yticks: [1, 2, 3, 4, 5].map(function (v) { return { v: v, label: String(v) }; }),
          ogeler: [
            { id: "a", tip: "nokta", x: 1, y: 2 }, { id: "b", tip: "nokta", x: 2, y: 1 }, { id: "c", tip: "nokta", x: 3, y: 4 },
            { id: "d", tip: "nokta", x: 4, y: 3 }, { id: "e", tip: "nokta", x: 5, y: 5 },
            { id: "ln", tip: "cizgi", renk: 0, from: [0, 0.6], to: [6, 5.4], etiket: "", gizli: true },
            { id: "m", tip: "nokta", x: 3, y: 3, renk: 2, kilavuz: true, gizli: true },
            { id: "my", tip: "yazi", x: 3.9, y: 2.1, metin: "(x̄, ȳ) = (3, 3)", gizli: true }
          ],
          durumlar: [
            { metin: "Bu beş noktanın ortalamaları: x̄ = 15 ÷ 5 = 3 ve ȳ = 15 ÷ 5 = 3." },
            { metin: "Doğru: ŷ = 0,6 + 0,8x. Eğim: b = r · s_y ÷ s_x = 0,8 · 1,581 ÷ 1,581 = 0,8 (iki sapma eşit olduğu için eğim r'ye eşit).", goster: ["ln"] },
            { metin: "Ortalama noktası (3, 3) doğrunun üzerinde: ŷ = 0,6 + 0,8 · 3 = 3. ==LSRL her zaman (x̄, ȳ) noktasından geçer==.", goster: ["m", "my"] }
          ] },
        { tip: "tuzak", baslik: "Eğim r değildir", metin: "Eğim b ve korelasyon r ilişkili ama aynı şey değildir.", yanlis: "Eğim r'ye eşittir.", dogru: "b = r · s_y ÷ s_x. Eğim yalnızca s_x = s_y ise r'ye eşit olur. r birimsizdir; b ise y birimi ÷ x birimi taşır." }
      ]
    },
    {
      baslik: "r²: modelin açıkladığı değişim",
      kisa: "r², y'deki değişimin x ile doğrusal modelin açıkladığı yüzdesidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🥧", terim: "Coefficient of determination (r²)", tr: "belirleme katsayısı", tanim: "y'deki değişimin ==x ile doğrusal model tarafından açıklanan== payı. r'nin karesidir ve 0 ile 1 arasındadır.", ornek: "r² = 0,64: değişimin yaklaşık %64'ü açıklanır." }
          ] },
        { tip: "ornek", baslik: "Beş noktanın r²'si", durum: "Aynı beş nokta için y'nin ortalamadan sapmalarının kareler toplamı 10, LSRL artıklarının kareler toplamı 3,6'dır.",
          adimlar: ["Toplam değişim: (2−3)² + (1−3)² + (4−3)² + (3−3)² + (5−3)² = 1 + 4 + 1 + 0 + 4 = 10.", "Açıklanmayan değişim (artıkların kareler toplamı): 3,6.", "r² = 1 − 3,6 ÷ 10 = 0,64. Bu, r = 0,8'in karesiyle uyuşuyor."],
          sonuc: "Enerji puanlarındaki değişimin yaklaşık %64'ü antrenman günü sayısıyla doğrusal bir modelle açıklanır; kalan %36 başka etkenlere ve rastgeleliğe bağlıdır." },
        { tip: "sekil", baslik: "r² = 0,64: değişimin payları", fig: { type: "bar", cats: ["Modelin açıkladığı", "Açıklanmayan"], series: [{ name: "Yüzde", values: [64, 36] }], ylabel: "Yüzde" } },
        { tip: "tuzak", baslik: "r² r değildir, doğruluk oranı da değildir", metin: "r² bir açıklama payıdır; tahminlerin yüzde kaçının doğru olduğunu söylemez.", yanlis: "r² = 0,64 ise tahminlerin %64'ü doğrudur ve r = 0,64'tür.", dogru: "r² değişimin açıklanan payıdır. r = ±√0,64 = ±0,80; işareti eğimin işaretiyle aynıdır." }
      ]
    },
    {
      baslik: "s: tahmin hatasının tipik büyüklüğü",
      kisa: "s artıkların standart sapmasıdır; tahminlerin gerçekten tipik sapmasıdır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "s" }, "=", { t: "√ ( Σ ( y − ŷ )² / ( n − 2 ) )", alt: "artıkların kareler toplamı ÷ (n − 2), sonra karekök" }], aciklama: "Payda n − 2'dir çünkü iki parametre (a ve b) tahmin edildi. s, y ile aynı birimdedir." },
        { tip: "ornek", baslik: "Beş nokta için s", durum: "LSRL ŷ = 0,6 + 0,8x'in artıkları 0,6; −1,2; 1,0; −0,8; 0,4. Kareler toplamı 3,6.",
          adimlar: ["Kareler toplamı: 0,36 + 1,44 + 1,00 + 0,64 + 0,16 = 3,6.", "n − 2 = 5 − 2 = 3.", "s = √(3,6 ÷ 3) = √1,2 ≈ 1,10."],
          sonuc: "Gerçek enerji puanları, doğrunun tahminlerinden tipik olarak yaklaşık 1,1 puan sapar. s ne kadar küçükse tahminler o kadar iyidir." }
      ]
    },
    {
      baslik: "Bilgisayar çıktısını okumak",
      kisa: "Coef sütunu a ve b'yi, R-Sq r²'yi, S artıkların standart sapmasını verir.",
      bloklar: [
        { tip: "tablo", baslik: "Regresyon çıktısı: ders çalışma saati ve deneme puanı", head: ["Predictor", "Coef", "SE Coef", "T", "P"], rows: [
            ["Constant", "40,00", "3,79", "10,54", "0,000"],
            ["Hours", "4,00", "0,71", "5,66", "0,000"]
          ], not: "S = 6,16     R-Sq = 64,0%     (n = 20). T ve P sütunları eğim için çıkarım yaparken (Unit 9) kullanılacak." },
        { tip: "ornek", baslik: "Çıktıdan model", durum: "Yukarıdaki çıktıyı okuyup modeli ve sayıları bulalım.",
          adimlar: ["Coef sütunu: Constant = 40 (kesişim a), Hours = 4 (eğim b). Model: ŷ = 40 + 4·Hours.", "R-Sq = %64: r² = 0,64. Eğim pozitif olduğundan r = +0,80.", "S = 6,16: artıkların standart sapması; tahminler gerçek puandan tipik olarak yaklaşık 6,2 puan sapar."],
          sonuc: "Eğim: çalışma süresi 1 saat arttığında tahmin edilen deneme puanı ortalama 4 artar. r² = 0,64: puan değişiminin yaklaşık %64'ü çalışma süresiyle doğrusal modelle açıklanır." },
        { tip: "ikili", sol: { ikon: "📋", baslik: "Coef sütunundan", maddeler: ["Model katsayıları"] },
          sag: { ikon: "🧾", baslik: "S ve R-Sq satırından", maddeler: ["Modelin başarısı"] },
          oyun: [
            { metin: "Eğim b.", cevap: "sol", neden: "Eğim, değişkenin (Hours) Coef değeridir." },
            { metin: "Kesişim a.", cevap: "sol", neden: "Kesişim, Constant satırının Coef değeridir." },
            { metin: "Belirleme katsayısı r².", cevap: "sag", neden: "R-Sq olarak ayrı satırda verilir." },
            { metin: "Artıkların standart sapması s.", cevap: "sag", neden: "S olarak ayrı satırda verilir." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "LSRL, artıkların karelerinin toplamını en küçük yapan doğrudur; artıkların toplamı 0'dır.",
            "Eğim b = r · s_y ÷ s_x; kesişim a = ȳ − b·x̄. LSRL her zaman (x̄, ȳ) noktasından geçer.",
            "Eğim r değildir; yalnızca s_x = s_y ise eşittirler.",
            "r² y'deki değişimin x ile doğrusal modelin açıkladığı paydır. r = ±√r²; işareti eğimin işaretidir.",
            "r² doğruluk oranı değildir; \"değişimin yaklaşık %…'ü … ile doğrusal modelle açıklanır\" diye yorumla.",
            "s = √(Σ(y − ŷ)² ÷ (n − 2)): tahminlerin gerçek değerden tipik sapması, y ile aynı birimde.",
            "Çıktıda Coef sütunu a ve b'yi, R-Sq r²'yi, S artıkların standart sapmasını verir.",
            "Yorumlarda değişken adlarını, birimleri ve \"tahmin edilen\", \"ortalama\" sözcüklerini kullan."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir veri kümesinde x̄ = 10, s_x = 4, ȳ = 50, s_y = 12 ve r = −0,5'tir. En küçük kareler doğrusu hangisidir?",
      opts: ["ŷ = 65 − 1,5x", "ŷ = 35 + 1,5x", "ŷ = 55 − 0,5x", "ŷ ≈ 51,7 − 0,17x"],
      a: 0, why: "b = r · s_y ÷ s_x = −0,5 · 12 ÷ 4 = −1,5 ve a = ȳ − b·x̄ = 50 − (−1,5)(10) = 65. B işareti, C eğimi r sanmaktan, D ise s_y ve s_x'i ters bölmekten çıkar." },
    { q: "Günlük ekran süresine göre uyku süresini tahmin eden en küçük kareler doğrusu için r² = 0,49'dur. Bu değer nasıl yorumlanır?",
      opts: ["Tahminlerin %49'u doğrudur.", "Ekran süresi, uyku süresindeki değişimin %49'una sebep olur.", "Uyku süresindeki değişimin yaklaşık %49'u ekran süresiyle doğrusal bir modelle açıklanır.", "Korelasyon katsayısı r = 0,49'dur."],
      a: 2, why: "r² açıklanan değişim payıdır. A doğruluk oranı sanır, B sebep-sonuç iddia eder, D ise r² ile r'yi karıştırır (r = ±0,70 olurdu)." },
    { q: "Aşağıdaki regresyon çıktısına göre değişkenler arasındaki korelasyon katsayısı r kaçtır?",
      fig: { type: "table", head: ["Predictor", "Coef", "SE Coef"], rows: [["Constant", "12,0", "2,1"], ["Temp", "2,5", "0,4"]], caption: "S = 4,0     R-Sq = 81,0%" },
      opts: ["0,81", "0,90", "−0,90", "2,5"],
      a: 1, why: "r² = 0,81 olduğundan |r| = 0,90. Eğim (2,5) pozitif olduğundan r = +0,90. 0,81 r²'dir; −0,90 işareti yanlış; 2,5 eğimdir." },
    { q: "Bir en küçük kareler doğrusunun eğimi 2'dir. Verilerde x̄ = 6 ve ȳ = 30 ise x = 6 için tahmin edilen y nedir?",
      opts: ["12", "18", "42", "30"],
      a: 3, why: "LSRL her zaman (x̄, ȳ) noktasından geçer: x = x̄ = 6 iken ŷ = ȳ = 30. Kesişim a = 30 − 2·6 = 18'dir; 18 seçeneği kesişimi, 12 ise b·x̄'yi verir." },
    { q: "Bir en küçük kareler regresyonunda artıkların standart sapması s = 3,2 puandır. Bu nasıl yorumlanır?",
      opts: ["Tahminlerin %3,2'si yanlıştır.", "Doğrunun eğimi 3,2'dir.", "Gerçek değerler, doğrunun tahminlerinden tipik olarak yaklaşık 3,2 puan sapar.", "Değişimin 3,2'si x ile açıklanır."],
      a: 2, why: "s, artıkların standart sapmasıdır ve y ile aynı birimdedir: tahmin hatasının tipik büyüklüğü. Yüzde ya da eğim değildir." }
  ]
};
