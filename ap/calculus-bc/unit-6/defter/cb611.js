/* Kitpath not defteri · cb611 · 6.13 Has Olmayan İntegraller
   Kaynak: AP Calculus BC CED 6.13. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb611",
  amac: "Bu konu *improper integral* yani has olmayan integrali anlatıyor: bir sınır sonsuz olduğunda ya da fonksiyon aralıkta sonsuza gittiğinde integral bir limit olarak tanımlanır. Yakınsayan ve ıraksayan integrali ayırmayı ve limitle hesaplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Has olmayan integral nedir?",
      kisa: "Sonsuz aralık ya da sonsuza giden fonksiyon: limitle çöz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "♾️", terim: "Improper integral", tr: "has olmayan integral", tanim: "Bir sınırı ±∞ olan ya da integrandı aralıkta düşey asimptota sahip olan integral. Sıradan Riemann integrali değil, bir limittir.", ornek: "∫₁^∞ 1/x² dx ve ∫₀¹ 1/√x dx has olmayan integrallerdir." },
            { ikon: "✅", terim: "Converges / diverges", tr: "yakınsar / ıraksar", tanim: "Limit sonlu bir sayıysa integral yakınsar; limit ±∞ ya da yoksa ıraksar.", ornek: "∫₁^∞ 1/x² dx = 1 yakınsar; ∫₁^∞ 1/x dx ıraksar." }
          ] },
        { tip: "ikili", sol: { ikon: "↔️", baslik: "Tip 1: sonsuz sınır", maddeler: ["Sınırlardan biri ya da ikisi ±∞", "Alan sonsuz uzunlukta bir aralıkta"] },
          sag: { ikon: "⬆️", baslik: "Tip 2: sınırsız integrand", maddeler: ["Aralıkta düşey asimptot var", "Asimptot uçta ya da aralığın içinde"] },
          oyun: [
            { metin: "∫₁^∞ 1/x² dx", cevap: "sol", neden: "Üst sınır sonsuz." },
            { metin: "∫₀¹ 1/√x dx", cevap: "sag", neden: "x = 0'da düşey asimptot, alt uçta." },
            { metin: "−∞'dan 0'a ∫ eˣ dx", cevap: "sol", neden: "Alt sınır −∞." },
            { metin: "∫₀² 1/(x − 2) dx", cevap: "sag", neden: "x = 2'de düşey asimptot, üst uçta." },
            { metin: "∫₀^∞ e^(−x) dx", cevap: "sol", neden: "Üst sınır sonsuz." }
          ] }
      ]
    },
    {
      baslik: "Sonsuz sınır: limitle hesapla",
      kisa: "b'ye kadar integre et, sonra b → ∞ limitini al.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "∫ₐ^∞ f(x) dx", alt: "has olmayan integral" }, "=",
            { t: "lim (b→∞) ∫ₐᵇ f(x) dx", alt: "önce b'ye kadar, sonra limit" }
          ], aciklama: "Limit sonlu bir sayıysa integral *converges*; ∞ ya da var olmayan bir limitse *diverges*. Alt sınır −∞ ise lim (a→−∞) ∫ₐᵇ f(x) dx yazılır." },
        { tip: "ornek", baslik: "∫₁^∞ 1/x² dx", durum: "Limitle hesapla.",
          adimlar: [
            "Önce üst sınırı b yap: ∫₁ᵇ x⁻² dx = [−1/x]₁ᵇ = 1 − 1/b.",
            "b → ∞ iken 1/b → 0.",
            "Limit: 1. Sonlu sayı: integral yakınsar."
          ], sonuc: "1  (yakınsar)" },
        { tip: "ornek", baslik: "∫₁^∞ 1/x dx", durum: "Aynı şekilde dene.",
          adimlar: [
            "∫₁ᵇ dx/x = ln b − ln 1 = ln b.",
            "b → ∞ iken ln b → ∞ (çok yavaş büyür ama sınırsızdır).",
            "Limit sonsuz: integral ıraksar."
          ], sonuc: "ıraksar" },
        { tip: "grafik", baslik: "y = 1/x²: sonsuza kadar uzanan alan sonlu", xlabel: "x", ylabel: "y", xmax: 10, ymax: 1.2,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }], yticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }],
          ogeler: [
            { id: "ar", tip: "alan", renk: 0, noktalar: [[1, 0], [1, 1], [1.0833, 0.8521], [1.1667, 0.7347], [1.25, 0.64], [1.3333, 0.5625], [1.4167, 0.4983], [1.5, 0.4444], [1.5833, 0.3989], [1.6667, 0.36], [1.75, 0.3265], [1.8333, 0.2975], [1.9167, 0.2722], [2, 0.25], [2, 0]], gizli: true },
            { id: "c", tip: "egri", renk: 0, etiket: "1/x²", noktalar: [[1, 1], [1.25, 0.64], [1.5, 0.4444], [1.75, 0.3265], [2, 0.25], [2.5, 0.16], [3, 0.1111], [4, 0.0625], [5, 0.04], [6, 0.0278], [8, 0.0156], [10, 0.01]] },
            { id: "t", tip: "yazi", renk: 1, x: 6.5, y: 0.7, metin: "alan → 1", gizli: true }
          ],
          durumlar: [
            { metin: "y = 1/x² eğrisi x = 1'den sağa doğru çok hızlı sıfıra yaklaşır." },
            { metin: "b = 2: alan = 1 − 1/2 = 0,5.", goster: ["ar"] },
            { metin: "b = 4: alan = 1 − 1/4 = 0,75.", set: { ar: { noktalar: [[1, 0], [1, 1], [1.25, 0.64], [1.5, 0.4444], [1.75, 0.3265], [2, 0.25], [2.25, 0.1975], [2.5, 0.16], [2.75, 0.1322], [3, 0.1111], [3.25, 0.0947], [3.5, 0.0816], [3.75, 0.0711], [4, 0.0625], [4, 0]] } } },
            { metin: "b = 10: alan = 1 − 1/10 = 0,9.", set: { ar: { noktalar: [[1, 0], [1, 1], [1.75, 0.3265], [2.5, 0.16], [3.25, 0.0947], [4, 0.0625], [4.75, 0.0443], [5.5, 0.0331], [6.25, 0.0256], [7, 0.0204], [7.75, 0.0166], [8.5, 0.0138], [9.25, 0.0117], [10, 0.01], [10, 0]] } } },
            { metin: "b → ∞: alan 1'e yaklaşır. Sonsuz uzunlukta bölgenin alanı sonlu.", goster: ["t"] }
          ] }
      ]
    },
    {
      baslik: "Sınırsız integrand: düşey asimptot",
      kisa: "Asimptota yaklaşan sınırı limite çevir; asimptot içerideyse böl.",
      bloklar: [
        { tip: "ornek", baslik: "∫₀¹ 1/√x dx", durum: "x = 0'da düşey asimptot var.",
          adimlar: [
            "Asimptota (0) doğru sınırı a yap: ∫ₐ¹ x^(−1/2) dx = [2√x]ₐ¹ = 2 − 2√a.",
            "a → 0⁺ iken √a → 0.",
            "Limit: 2. Sonlu: integral yakınsar."
          ], sonuc: "2  (yakınsar)" },
        { tip: "grafik", baslik: "y = 1/√x: sonsuz yükseklik, sonlu alan", xlabel: "x", ylabel: "y", xmax: 1, ymax: 6,
          xticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }], yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "ar", tip: "alan", renk: 0, noktalar: [[0.5, 0], [0.5, 1.414], [0.5417, 1.359], [0.5833, 1.309], [0.625, 1.265], [0.6667, 1.225], [0.7083, 1.188], [0.75, 1.155], [0.7917, 1.124], [0.8333, 1.095], [0.875, 1.069], [0.9167, 1.044], [0.9583, 1.022], [1, 1], [1, 0]], gizli: true },
            { id: "c", tip: "egri", renk: 0, etiket: "1/√x", noktalar: [[0.03, 5.774], [0.05, 4.472], [0.08, 3.536], [0.12, 2.887], [0.2, 2.236], [0.3, 1.826], [0.45, 1.491], [0.6, 1.291], [0.8, 1.118], [1, 1]] }
          ],
          durumlar: [
            { metin: "Eğri x = 0'a yaklaştıkça sonsuza tırmanır: eksen düşey asimptottur." },
            { metin: "a = 0,5: alan = 2 − 2√0,5 ≈ 0,59.", goster: ["ar"] },
            { metin: "a = 0,1: alan = 2 − 2√0,1 ≈ 1,37.", set: { ar: { noktalar: [[0.1, 0], [0.1, 3.162], [0.175, 2.39], [0.25, 2], [0.325, 1.754], [0.4, 1.581], [0.475, 1.451], [0.55, 1.348], [0.625, 1.265], [0.7, 1.195], [0.775, 1.136], [0.85, 1.085], [0.925, 1.04], [1, 1], [1, 0]] } } },
            { metin: "a = 0,03: alan ≈ 1,65. a → 0⁺ iken alan 2'ye yaklaşır.", set: { ar: { noktalar: [[0.03, 0], [0.03, 5.774], [0.1108, 3.004], [0.1917, 2.284], [0.2725, 1.916], [0.3533, 1.682], [0.4342, 1.518], [0.515, 1.393], [0.5958, 1.296], [0.6767, 1.216], [0.7575, 1.149], [0.8383, 1.092], [0.9192, 1.043], [1, 1], [1, 0]] } } }
          ] },
        { tip: "tuzak", metin: "Asimptot aralığın içinde kalıyorsa, integrali Temel Teorem'le doğrudan hesaplayamazsın. Asimptottan böl ve iki parçayı ayrı ayrı limitle çöz; ikisi de yakınsamalı.", yanlis: "∫₋₁¹ dx/x² = [−1/x]₋₁¹ = −1 − 1 = −2.", dogru: "x = 0 içeride. ∫₀¹ dx/x² = lim [−1/x]ₐ¹ = lim (−1 + 1/a) = ∞: ıraksar. (Pozitif fonksiyonun integrali negatif olamaz.)" }
      ]
    },
    {
      baslik: "p-kuralı: 1/xᵖ ne zaman yakınsar?",
      kisa: "Sonsuzda p > 1, sıfırda p < 1 ise yakınsar.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "∫₁^∞ 1/xᵖ dx", alt: "yalnızca p > 1 için yakınsar" }, "=",
            { t: "1/(p − 1)", alt: "p > 1" }
          ], aciklama: "Sıfırda ise tersine: ∫₀¹ 1/xᵖ dx yalnızca ==p < 1== için yakınsar ve değeri 1/(1 − p) olur. p = 1 her iki uçta da ıraksar (ln)." },
        { tip: "tablo", baslik: "p değerine göre sonuç", head: ["p", "∫₁^∞ 1/xᵖ dx", "∫₀¹ 1/xᵖ dx"],
          rows: [
            ["3", "yakınsar: 1/2", "ıraksar"],
            ["2", "yakınsar: 1", "ıraksar"],
            ["1", "ıraksar", "ıraksar"],
            ["1/2", "ıraksar", "yakınsar: 2"]
          ], vurgu: 2, not: "Kural: sonsuzda büyük p, sıfırda küçük p yakınsatır. Sonsuzda büyük p eğriyi hızla küçültür; sıfırda küçük p patlamayı yumuşatır." }
      ]
    },
    {
      baslik: "İki uçlu ve üstel örnekler",
      kisa: "İki yanı sonsuz integrali bir noktadan böl; her yarı yakınsamalı.",
      bloklar: [
        { tip: "ornek", baslik: "−∞'dan ∞'a ∫ dx/(1 + x²)", durum: "0'dan ikiye böl.",
          adimlar: [
            "Bir noktada böl (genelde 0): (−∞'dan 0'a) + (0'dan ∞'a). Her biri yakınsamalı.",
            "0'dan ∞'a: lim (b→∞) [arctan x]₀ᵇ = π/2 − 0 = π/2.",
            "−∞'dan 0'a: lim (a→−∞) [arctan x]ₐ⁰ = 0 − (−π/2) = π/2.",
            "Topla: π/2 + π/2 = π."
          ], sonuc: "π  (yakınsar)" },
        { tip: "ornek", baslik: "∫₀^∞ e^(−2x) dx", durum: "Üstel azalış: limitle hesapla.",
          adimlar: [
            "∫₀ᵇ e^(−2x) dx = [−½ e^(−2x)]₀ᵇ = ½ − ½ e^(−2b).",
            "b → ∞ iken e^(−2b) → 0.",
            "Limit ½: yakınsar. Kontrol: türev −½·(−2)e^(−2x) = e^(−2x). ✓"
          ], sonuc: "1/2  (yakınsar)" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Has olmayan integral bir limittir: sonsuz sınır ya da aralıkta düşey asimptot.",
            "Sonsuz sınır: ∫ₐ^∞ f dx = lim (b→∞) ∫ₐᵇ f dx; alt sınır −∞ ise lim (a→−∞).",
            "Limit sonlu sayıysa yakınsar (değer o sayı); ∞ ya da yok ise ıraksar.",
            "Asimptot uçtaysa o ucu limite çevir; içerideyse asimptottan böl, iki yarı da yakınsamalı.",
            "p-kuralı: ∫₁^∞ 1/xᵖ yalnız p > 1'de, ∫₀¹ 1/xᵖ yalnız p < 1'de yakınsar; p = 1 her yerde ıraksar.",
            "∫₁^∞ 1/x ıraksar: ln b yavaş büyür ama sınırsızdır.",
            "İçeride asimptot varken temel teoremi doğrudan kullanma (−2 tuzağı).",
            "Cevabı yaz: yakınsar ve değeri ya da ıraksar."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "∫₂^∞ 3/x² dx integralinin değeri kaçtır?",
      opts: ["3/2", "3", "ıraksar", "3/4"],
      a: 0,
      why: "∫₂ᵇ 3x⁻² dx = [−3/x]₂ᵇ = 3/2 − 3/b → 3/2. B şıkkı alt sınırı 1 alıp ∫₁^∞ 3/x² dx = 3 bulur; D şıkkı f(2) = 3/4 değerini integral sanar."
    },
    {
      q: "∫₀⁴ dx/√x integralinin değeri kaçtır?",
      opts: ["2", "4", "8", "ıraksar"],
      a: 1,
      why: "x = 0'da düşey asimptot var; ∫ₐ⁴ x^(−1/2) dx = [2√x]ₐ⁴ = 4 − 2√a → 4. D şıkkı çekicidir ama p = 1/2 < 1 olduğundan sıfırda yakınsar."
    },
    {
      q: "Tabloda ∫₁ᵇ dx/x değerleri verilmiştir. ∫₁^∞ dx/x hakkında hangisi doğrudur?",
      fig: { type: "table", head: ["b", "10", "100", "1000"], rows: [["∫₁ᵇ dx/x", "2,30", "4,61", "6,91"]], caption: "ln b değerleri" },
      opts: ["Değerler yavaşladığı için yaklaşık 7'ye yakınsar.", "Değerler arttığı için integral 1'e yakınsar.", "b her 10 kat büyüdüğünde değer sabit bir miktar artar; ln b sınırsızdır, integral ıraksar.", "b → ∞ iken integral sıfıra gider."],
      a: 2,
      why: "∫₁ᵇ dx/x = ln b ve ln b → ∞. Tablo yavaş büyüme gösterir ama her 10 kat için artış ln 10 ≈ 2,30 sabittir. A şıkkı yavaş büyümeyi yakınsamayla karıştırır."
    },
    {
      q: "Bir gölete eklenen kirlilik hızı r(t) = 6e^(−2t) kg/saattir. Sonsuz uzunlukta bir sürede göle eklenen toplam kirlilik kaç kg'dır?",
      opts: ["6", "12", "ıraksar (sonsuz)", "3"],
      a: 3,
      why: "∫₀^∞ 6e^(−2t) dt = lim [−3e^(−2t)]₀ᵇ = 3 − 3e^(−2b) → 3 kg. A şıkkı katsayıyı alır ama 1/2 çarpanını (iç türevi) unutur; C şıkkı üstel azalan hızın toplamı sonlu olduğundan yanlıştır."
    },
    {
      q: "Bir öğrenci ∫₋₁¹ dx/x² integralini [−1/x]₋₁¹ = −2 olarak hesaplıyor. Doğru sonuç nedir?",
      opts: ["−2", "ıraksar", "2", "0"],
      a: 1,
      why: "x = 0 aralığın içinde bir düşey asimptot. İntegral iki parçaya bölünür; ∫₀¹ dx/x² ıraksadığı için bütün integral ıraksar. Pozitif bir fonksiyonun integrali negatif de olamaz; A şıkkı bu tuzağın sonucudur."
    }
  ]
};
