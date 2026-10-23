/* Kitora not defteri · cb302 · 3.1-2 Üstel, Logaritmik ve İç İçe Zincirler
   Kaynak: ap-videolar/src/episodes/cb302 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb302",
  amac: "Bu konu zincir kuralının üstel (eᵘ, aᵘ), logaritmik (ln u) ve üç katlı iç içe fonksiyonlarda nasıl çalıştığını anlatıyor. Her katmanın türevini sırayla çarpmayı ve yatay teğeti bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "eᵘ: kendisi çarpı üssün türevi",
      kisa: "eᵘ'nun türevi kendisidir, çarpı üssün türevi.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Exponential function", tr: "üstel fonksiyon", tanim: "Değişkenin üstte olduğu fonksiyon (eˣ, 2ˣ). eˣ'in türevi kendisidir.", ornek: "d/dx eˣ = eˣ: her noktada eğim, eğrinin yüksekliğine eşit." }
          ] },
        { tip: "formul", parcalar: [
            { t: "(eᵘ)′", alt: "üstel zincir" }, "=",
            { t: "eᵘ", alt: "kendisi aynen" }, "×",
            { t: "u′", alt: "üssün türevi" }
          ], aciklama: "Üs aşağı inmez, üs aynen kalır. Bu kuvvet kuralı değil." },
        { tip: "ornek", baslik: "y = e^(3x²)", durum: "dy/dx = ?",
          adimlar: [
            "Dış fonksiyon eᵘ, iç fonksiyon (üs) u = 3x².",
            "Kendisini aynen yaz: e^(3x²).",
            "Üssün türevi: (3x²)′ = 6x.",
            "Çarp: 6x · e^(3x²)."
          ], sonuc: "dy/dx = 6x · e^(3x²)" },
        { tip: "grafik", baslik: "y = eˣ: eğim her zaman yüksekliğe eşit", xlabel: "x", ylabel: "y", xmax: 4, ymax: 8,
          xticks: [{ v: 0, label: "−2" }, { v: 1, label: "−1" }, { v: 2, label: "0" }, { v: 3, label: "1" }, { v: 4, label: "2" }], yticks: [{ v: 1, label: "1" }, { v: 2.718, label: "e" }, { v: 7.389, label: "e²" }],
          ogeler: [
            { id: "ay", tip: "cizgi", renk: 1, kesik: true, from: [2, 0], to: [2, 8] },
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0.135], [0.25, 0.174], [0.5, 0.223], [0.75, 0.287], [1, 0.368], [1.25, 0.472], [1.5, 0.607], [1.75, 0.779], [2, 1], [2.25, 1.284], [2.5, 1.649], [2.75, 2.117], [3, 2.718], [3.25, 3.49], [3.5, 4.482], [3.75, 5.755], [4, 7.389]] },
            { id: "p", tip: "nokta", renk: 2, x: 1, y: 0.368, gizli: true },
            { id: "t", tip: "cizgi", renk: 2, from: [0.5, 0.184], to: [1.5, 0.552], etiket: "eğim 0,37", gizli: true }
          ],
          durumlar: [
            { metin: "y = eˣ eğrisi (x = −2…2). Kesikli çizgi gerçek y ekseni (x = 0)." },
            { metin: "x = −1'de yükseklik e⁻¹ ≈ 0,37 ve teğetin eğimi de 0,37.", goster: ["p", "t"] },
            { metin: "x = 0'da yükseklik 1, eğim 1.", set: { p: { x: 2, y: 1 }, t: { from: [1.5, 0.5], to: [2.5, 1.5], etiket: "eğim 1" } } },
            { metin: "x = 1'de yükseklik e ≈ 2,72, eğim de 2,72.", set: { p: { x: 3, y: 2.718 }, t: { from: [2.5, 1.359], to: [3.5, 4.077], etiket: "eğim 2,72" } } }
          ] }
      ]
    },
    {
      baslik: "aᵘ: gizli bir e üzeri",
      kisa: "Taban e değilse bir ln a çarpanı gelir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "(aᵘ)′", alt: "tabanı e olmayan üstel" }, "=",
            { t: "aᵘ", alt: "kendisi" }, "×",
            { t: "ln a", alt: "taban çarpanı" }, "×",
            { t: "u′", alt: "üssün türevi" }
          ], aciklama: "Neden ln a? Çünkü a = e^(ln a); yani her üstel fonksiyon gizli bir e üzeridir: 2ˣ = e^((ln 2)·x)." },
        { tip: "ornek", baslik: "y = 2^(x²)", durum: "dy/dx = ?",
          adimlar: [
            "Taban 2, üs u = x². Kural: aᵘ · ln a · u′.",
            "Kendisi: 2^(x²).",
            "Taban çarpanı: ln 2.",
            "Üssün türevi: (x²)′ = 2x."
          ], sonuc: "dy/dx = 2^(x²) · ln 2 · 2x" }
      ]
    },
    {
      baslik: "Taban mı, üs mü?",
      kisa: "Değişken tabandaysa kuvvet kuralı, üsteyse üstel kural.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏗️", terim: "Base", tr: "taban", tanim: "Üssü alınan sayı ya da ifade. Değişken tabandaysa ve üs sabitse kuvvet kuralı kullanılır.", ornek: "x² içinde taban x, türev 2x." },
            { ikon: "🚀", terim: "Exponent", tr: "üs", tanim: "Kaç kez çarpılacağını söyleyen sayı ya da ifade. Değişken üstteyse üstel kural kullanılır.", ornek: "2ˣ içinde üs x, türev 2ˣ · ln 2." }
          ] },
        { tip: "ikili", sol: { ikon: "🏗️", baslik: "Değişken *base*'de", maddeler: ["Kuvvet kuralı: (xⁿ)′ = n·xⁿ⁻¹", "x² → 2x"] },
          sag: { ikon: "🚀", baslik: "Değişken *exponent*'te", maddeler: ["Üstel kural: aᵘ · ln a · u′", "2ˣ → 2ˣ · ln 2"] },
          oyun: [
            { metin: "x³", cevap: "sol", neden: "Değişken tabanda, üs sabit: kuvvet kuralı." },
            { metin: "3ˣ", cevap: "sag", neden: "Taban sabit, değişken üste: üstel kural." },
            { metin: "(x² + 1)⁵", cevap: "sol", neden: "Taban değişkenli, üs 5 sabit: kuvvet kuralı + zincir." },
            { metin: "e^(x²)", cevap: "sag", neden: "Değişken üste: eᵘ kuralı." },
            { metin: "5^(2x)", cevap: "sag", neden: "Taban sabit, üs 2x: aᵘ · ln a · u′." }
          ] },
        { tip: "tuzak", metin: "Üs aşağı yalnızca taban değişken, üs sabitken iner. eᵘ ve aᵘ'da üs aşağı inmez.", yanlis: "d/dx 2ˣ = x · 2^(x−1) ve d/dx e^(x²) = x² · e^(x²−1).", dogru: "d/dx 2ˣ = 2ˣ · ln 2 ve d/dx e^(x²) = 2x · e^(x²)." }
      ]
    },
    {
      baslik: "Doğal logaritma: u′/u",
      kisa: "ln u'nun türevi, u′ bölü u.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔍", terim: "Natural logarithm", tr: "doğal logaritma", tanim: "e tabanlı logaritma, ln. eˣ'in tersidir; ln e = 1 ve ln 1 = 0.", ornek: "ln(e²) = 2." }
          ] },
        { tip: "formul", parcalar: [
            { t: "(ln u)′", alt: "doğal logaritma" }, "=",
            { t: "u′ / u", alt: "iç türev bölü iç" }
          ], aciklama: "İçinde çarpım ya da kuvvet varsa önce logaritma kurallarıyla sadeleştir, sonra türev al." },
        { tip: "ornek", baslik: "Doğal logaritma örnekleri", durum: "Her birinin türevini al.",
          adimlar: [
            "ln(x² + 1): u′/u = 2x/(x² + 1).",
            "ln(x⁵), zincirle: 5x⁴/x⁵ = 5/x.",
            "Aynısı logaritma kuralıyla: ln(x⁵) = 5 ln x, türevi 5/x. İki yol aynı sonuç.",
            "ln(7x): 7/(7x) = 1/x. Çünkü ln(7x) = ln 7 + ln x ve ln 7 sabittir.",
            "ln(cos x): u′/u = −sin x / cos x = −tan x."
          ], sonuc: "ln(x² + 1) → 2x/(x² + 1) · ln(x⁵) → 5/x · ln(7x) → 1/x · ln(cos x) → −tan x" },
        { tip: "grafik", baslik: "ln x ve ln 7x: paralel teğetler", xlabel: "x", ylabel: "y", xmax: 5, ymax: 6,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }], yticks: [{ v: 0, label: "−2" }, { v: 1, label: "−1" }, { v: 2, label: "0" }, { v: 3, label: "1" }, { v: 4, label: "2" }, { v: 5, label: "3" }],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 2], to: [5, 2] },
            { id: "a", tip: "egri", renk: 0, etiket: "ln x", noktalar: [[0.2, 0.391], [0.3, 0.796], [0.4, 1.084], [0.6, 1.489], [0.8, 1.777], [1, 2], [1.5, 2.405], [2, 2.693], [2.5, 2.916], [3, 3.099], [3.5, 3.253], [4, 3.386], [4.5, 3.504], [5, 3.609]] },
            { id: "b", tip: "egri", renk: 3, etiket: "ln 7x", noktalar: [[0.2, 2.336], [0.3, 2.742], [0.4, 3.03], [0.6, 3.435], [0.8, 3.723], [1, 3.946], [1.5, 4.351], [2, 4.639], [2.5, 4.862], [3, 5.045], [3.5, 5.199], [4, 5.332], [4.5, 5.45], [5, 5.555]] },
            { id: "pa", tip: "nokta", renk: 2, x: 2, y: 2.693, gizli: true },
            { id: "pb", tip: "nokta", renk: 2, x: 2, y: 4.639, gizli: true },
            { id: "ta", tip: "cizgi", renk: 2, from: [1, 2.193], to: [3, 3.193], etiket: "eğim 1/2", gizli: true },
            { id: "tb", tip: "cizgi", renk: 2, from: [1, 4.139], to: [3, 5.139], etiket: "eğim 1/2", gizli: true }
          ],
          durumlar: [
            { metin: "ln 7x = ln 7 + ln x: ln x'in ln 7 ≈ 1,95 kadar yukarı kaymış hali. Kesikli çizgi y = 0." },
            { metin: "x = 2'de iki teğet de paralel: ikisinin eğimi 1/2. Sabit ln 7 türevde yok olur.", goster: ["pa", "pb", "ta", "tb"] }
          ] }
      ]
    },
    {
      baslik: "Üç katlı zincir: matruşka",
      kisa: "Her katman için bir türev çarpanı yaz, hepsini çarp.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪆", terim: "Nested composition", tr: "iç içe bileşke", tanim: "Üç ya da daha çok katlı bileşke. Matruşka gibi: bebeği aç, içinden bir bebek daha çıkar; her katman bir türev çarpanı getirir.", ornek: "e^(sin πx): dışta e üzeri, ortada sinüs, en içte πx." }
          ] },
        { tip: "ornek", baslik: "y = e^(sin πx)", durum: "dy/dx = ? ve x = 1'de değeri?",
          adimlar: [
            "Dış katman e üzeri: kendisini aynen yaz, e^(sin πx).",
            "Orta katman sinüs: türevi cos(πx).",
            "İç katman πx: türevi π.",
            "Hepsini çarp: e^(sin πx) · cos(πx) · π.",
            "x = 1: sin π = 0, e⁰ = 1; cos π = −1. Türev 1 · (−1) · π = −π."
          ], sonuc: "dy/dx = π · cos(πx) · e^(sin πx); x = 1'de −π" },
        { tip: "grafik", baslik: "y = e^(sin πx) ve x = 1'deki teğet", xlabel: "x", ylabel: "y", xmax: 2, ymax: 3,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 1], [0.125, 1.466], [0.25, 2.028], [0.375, 2.519], [0.5, 2.718], [0.625, 2.519], [0.75, 2.028], [0.875, 1.466], [1, 1], [1.125, 0.682], [1.25, 0.493], [1.375, 0.397], [1.5, 0.368], [1.625, 0.397], [1.75, 0.493], [1.875, 0.682], [2, 1]] },
            { id: "p", tip: "nokta", renk: 2, x: 1, y: 1, etiket: "(1, 1)", kilavuz: true, gizli: true },
            { id: "t", tip: "cizgi", renk: 2, from: [0.8, 1.628], to: [1.2, 0.372], etiket: "eğim −π", gizli: true }
          ],
          durumlar: [
            { metin: "Sinüs dalgasının üstel hali: en yüksek e ≈ 2,72, en düşük e⁻¹ ≈ 0,37." },
            { metin: "x = 1'de y = e^(sin π) = e⁰ = 1: nokta (1, 1).", goster: ["p"] },
            { metin: "Eğri iniyor; eğim −π ≈ −3,14.", goster: ["t"] }
          ] },
        { tip: "tuzak", metin: "İç içe fonksiyonda her katman bir çarpandır; hiçbirini atlama. Üç katman varsa çarpımda üç çarpan olmalı.", yanlis: "(e^(sin πx))′ = e^(sin πx) · cos(πx).", dogru: "e^(sin πx) · cos(πx) · π: en içteki πx'in türevi π de çarpılır." }
      ]
    },
    {
      baslik: "Çarpım kuralı ile zincir bir arada",
      kisa: "Dışta çarpım varsa önce çarpım kuralı, içindeki parçada zincir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✖️", terim: "Product rule", tr: "çarpım kuralı", tanim: "İki fonksiyon yan yana çarpılıyorsa: (uv)′ = u′v + uv′. Çarpanlardan biri bileşkeyse onun türevi zincirle alınır.", ornek: "x · (2x + 1)³ çarpımında ikinci çarpanın türevi zincir ister." }
          ] },
        { tip: "ornek", baslik: "f(x) = x · (2x + 1)³", durum: "f′(1) = ?",
          adimlar: [
            "Dışta çarpım var: f′ = 1 · (2x + 1)³ + x · ((2x + 1)³)′.",
            "İkinci çarpanın türevi zincirle: 3(2x + 1)² · 2.",
            "f′(x) = (2x + 1)³ + 6x(2x + 1)².",
            "x = 1: 3³ + 6 · 1 · 3² = 27 + 54."
          ], sonuc: "f′(1) = 81" }
      ]
    },
    {
      baslik: "Teğet doğrusu ve tanım kümesi",
      kisa: "ln'in içi pozitif olmalı; teğeti ancak orada yazabilirsin.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Tangent line", tr: "teğet doğrusu", tanim: "Eğriye bir noktada değen doğru: nokta (x₀, y₀) ve eğim y′(x₀) ile y − y₀ = m(x − x₀).", ornek: "ln(x² − 3) için x = 2'de nokta (2, 0), eğim 4." },
            { ikon: "🗺️", terim: "Domain", tr: "tanım kümesi", tanim: "Fonksiyonun tanımlı olduğu x değerleri. ln u için u > 0 olmalı.", ornek: "ln(x² − 3) için x² > 3 gerekir." }
          ] },
        { tip: "ornek", baslik: "y = ln(x² − 3) eğrisine x = 2'de teğet", durum: "Teğet doğrusunun denklemini yaz.",
          adimlar: [
            "Nokta: ln(4 − 3) = ln 1 = 0. Nokta (2, 0).",
            "Türev: y′ = 2x/(x² − 3).",
            "Eğim: y′(2) = 4/1 = 4.",
            "Doğru: y − 0 = 4(x − 2)."
          ], sonuc: "y = 4(x − 2)" },
        { tip: "grafik", baslik: "y = ln(x² − 3) ve asimptot", xlabel: "x", ylabel: "y", xmax: 5, ymax: 5,
          xticks: [{ v: 1, label: "2" }, { v: 3, label: "3" }, { v: 5, label: "4" }], yticks: [{ v: 0, label: "−2" }, { v: 1, label: "−1" }, { v: 2, label: "0" }, { v: 3, label: "1" }, { v: 4, label: "2" }],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 2], to: [5, 2] },
            { id: "as", tip: "cizgi", renk: 3, kesik: true, from: [0.464, 0], to: [0.464, 5], gizli: true },
            { id: "as1", tip: "yazi", x: 1.3, y: 0.4, metin: "x = √3", gizli: true },
            { id: "c", tip: "egri", renk: 0, noktalar: [[0.6, 0.573], [0.8, 1.506], [1, 2], [1.2, 2.344], [1.4, 2.61], [1.6, 2.829], [1.8, 3.015], [2, 3.179], [2.2, 3.324], [2.4, 3.456], [2.6, 3.577], [2.8, 3.688], [3, 3.792], [3.2, 3.889], [3.4, 3.98], [3.6, 4.066], [3.8, 4.147], [4, 4.225], [4.2, 4.299], [4.4, 4.369], [4.6, 4.437], [4.8, 4.502], [5, 4.565]] },
            { id: "p", tip: "nokta", renk: 2, x: 1, y: 2, etiket: "(2, 0)", gizli: true },
            { id: "t", tip: "cizgi", renk: 2, from: [0.7, 1.4], to: [1.4, 2.8], etiket: "eğim 4", gizli: true }
          ],
          durumlar: [
            { metin: "Eğri yalnızca x > √3 ≈ 1,73 için var; x = √3'te dikey asimptot. Kesikli yatay çizgi y = 0.", goster: ["as", "as1"] },
            { metin: "x = 2'de ln 1 = 0: nokta (2, 0).", goster: ["p"] },
            { metin: "Eğim 4: teğet y = 4(x − 2).", goster: ["t"] }
          ] },
        { tip: "tuzak", metin: "ln u'nun türevi yalnızca u > 0 olan yerlerde anlamlıdır. x = 1'de x² − 3 = −2 negatif: orada türev sormak anlamsız, cevap tanımsız.", yanlis: "x = 1'de y′ = 2/(1 − 3) = −1.", dogru: "x² − 3 > 0 değilse fonksiyon orada tanımsızdır; önce tanım kümesine bak." }
      ]
    },
    {
      baslik: "Yatay teğet: türev sıfır",
      kisa: "Türevi sıfıra eşitle; eᵘ asla sıfır olmaz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "➖", terim: "Horizontal tangent", tr: "yatay teğet", tanim: "Eğimin 0 olduğu noktadaki teğet. Bulmak için f′(x) = 0 çözülür.", ornek: "e^(x²−4x) için f′(x) = e^(x²−4x) · (2x − 4) = 0." }
          ] },
        { tip: "ornek", baslik: "f(x) = e^(x²−4x)", durum: "Yatay teğet nerede?",
          adimlar: [
            "Yatay teğet demek f′(x) = 0.",
            "Türev: f′(x) = e^(x²−4x) · (2x − 4).",
            "e üzeri herhangi bir şey hep pozitiftir, asla 0 olmaz.",
            "O halde yalnızca 2x − 4 = 0, yani x = 2.",
            "Nokta: f(2) = e^(4−8) = e⁻⁴ ≈ 0,018."
          ], sonuc: "Yatay teğet (2, e⁻⁴) noktasında" },
        { tip: "grafik", baslik: "y = e^(x²−4x): yatay teğet", xlabel: "x", ylabel: "y", xmax: 4, ymax: 1.2,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 1], [0.25, 0.392], [0.5, 0.174], [0.75, 0.087], [1, 0.05], [1.25, 0.032], [1.5, 0.024], [1.75, 0.019], [2, 0.018], [2.25, 0.019], [2.5, 0.024], [2.75, 0.032], [3, 0.05], [3.25, 0.087], [3.5, 0.174], [3.75, 0.392], [4, 1]] },
            { id: "p", tip: "nokta", renk: 2, x: 2, y: 0.018, etiket: "(2, e⁻⁴)", gizli: true },
            { id: "t", tip: "cizgi", renk: 2, from: [1.2, 0.018], to: [2.8, 0.018], etiket: "eğim 0", gizli: true }
          ],
          durumlar: [
            { metin: "Eğri x = 2'ye inip yeniden çıkıyor: çukur noktası (2, e⁻⁴)." },
            { metin: "En alt noktada teğet yataydır: eğim 0.", goster: ["p", "t"] }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "(eᵘ)′ = eᵘ · u′. Üs aşağı inmez.",
            "(aᵘ)′ = aᵘ · ln a · u′. Taban e değilse ln a çarpanı gelir.",
            "Değişken tabandaysa kuvvet kuralı, üsteyse üstel kural.",
            "(ln u)′ = u′/u. ln(kx) türevi 1/x. İçinde çarpım ya da kuvvet varsa önce logaritma kurallarıyla sadeleştir.",
            "İç içe fonksiyonda dıştan içe her katmanın türevini çarp; hiçbirini atlama.",
            "Dışta çarpım varsa önce çarpım kuralı; çarpanlardan biri bileşkeyse onun için zincir.",
            "ln u'nun türevi yalnızca u > 0 olan yerlerde anlamlıdır.",
            "Yatay teğet için türevi sıfıra eşitle; eᵘ > 0 olduğundan yalnızca parantez sıfır olabilir."
          ] }
      ]
    }
  ]
};
