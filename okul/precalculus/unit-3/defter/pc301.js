/* Kitpath not defteri · pc301 · 3.1 Polinomlar ve İşlemler
   Kaynak: öğretmenin ders sunumu (Unit#3_1 Polynomials) + Review for Exam#3; ders notuyla aynı terim ve gösterim. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc301",
  amac: "Bu konu polinomları tanıtıyor: derece, katsayı ve sabit terim gibi parçalarını, toplama, çıkarma ve çarpmayı, özel çarpımları ve P(a) değerini. Sonraki konuların (bölme, kök, grafik) temeli burası.",
  bolumler: [
    {
      baslik: "Polinomun parçaları",
      kisa: "Polinom, azalan kuvvetli terimlerin toplamıdır; her parçanın bir adı vardır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "aₙxⁿ", alt: "başkatsayı × en büyük kuvvet" },
            "+",
            { t: "…", alt: "ara terimler" },
            "+",
            { t: "a₁x", alt: "birinci dereceden terim" },
            "+",
            { t: "a₀", alt: "sabit terim" }
          ],
          aciklama: "*Standard form*: kuvvetler büyükten küçüğe yazılır ve n = 0, 1, 2, … bir tam sayıdır. Örnek: P(x) = 3x⁴ − 5x² + x − 7."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧩",
              terim: "Term",
              tr: "terim",
              tanim: "Toplanan her parça: bir katsayı ile x'in bir kuvvetinin çarpımı.",
              ornek: "3x⁴, −5x², x ve −7 dört terimdir."
            },
            {
              ikon: "🔢",
              terim: "Coefficient",
              tr: "katsayı",
              tanim: "x'in kuvvetinin önündeki sayı. Yazılmayan terimin katsayısı ==0==.",
              ornek: "3x⁴ − 5x² + x − 7'de x³'ün katsayısı 0, x'in katsayısı 1."
            },
            {
              ikon: "📏",
              terim: "Degree",
              tr: "derece",
              tanim: "En büyük kuvvet. Polinomun adını ve grafiğinin şeklini belirler.",
              ornek: "3x⁴ − 5x² + x − 7 dördüncü derecedendir."
            },
            {
              ikon: "👑",
              terim: "Leading coefficient",
              tr: "başkatsayı (en büyük dereceli terime *leading term* denir)",
              tanim: "En büyük dereceli terim *leading term*, onun katsayısı *leading coefficient*.",
              ornek: "Yukarıdaki polinomda leading term 3x⁴, leading coefficient 3."
            },
            {
              ikon: "🪨",
              terim: "Constant term",
              tr: "sabit terim",
              tanim: "x içermeyen terim. P(0) değerine eşittir.",
              ornek: "Yukarıdaki polinomda −7."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Parçaları oku: P(x) = 3x⁴ − 5x² + x − 7",
          durum: "Derece, başkatsayı, sabit terim ve eksik terimi bul.",
          adimlar: [
            "**Derece:** en büyük kuvvet 4.",
            "**Başkatsayı:** x⁴'ün katsayısı 3.",
            "**Sabit terim:** −7. Bu aynı zamanda P(0) = −7 demektir.",
            "**Eksik terim:** x³ yok, yani katsayısı 0. Bölme yaparken 3x⁴ + 0x³ − 5x² + x − 7 diye yazacağız."
          ],
          sonuc: "Derece 4, başkatsayı 3, sabit terim −7. Sınavda böyle yaz: *The degree of P is 4, the leading coefficient is 3 and the constant term is −7.*"
        }
      ]
    },
    {
      baslik: "Polinom mu, değil mi?",
      kisa: "Kuvvetler 0, 1, 2… olmalı; x paydada ya da kökün içinde olamaz.",
      bloklar: [
        {
          tip: "ikili",
          sol: {
            ikon: "✅",
            baslik: "Polinomdur",
            maddeler: ["x'in kuvvetleri 0, 1, 2, 3… (negatif ya da kesirli değil)", "Katsayılar herhangi bir gerçek sayı olabilir (½, √3 gibi)"]
          },
          sag: {
            ikon: "❌",
            baslik: "Polinom değildir",
            maddeler: ["x paydada: 3/x + 1", "x kökün içinde: √x + 2", "x üstte: 2ˣ + 1", "Negatif kuvvet: x⁻² + 5"]
          },
          oyun: [
            { metin: "4x³ − ½x + √3", cevap: "sol", neden: "Kuvvetler 3 ve 1; ½ ve √3 yalnızca katsayı." },
            { metin: "x² + 5/x", cevap: "sag", neden: "5/x = 5x⁻¹: negatif kuvvet." },
            { metin: "√x + 2", cevap: "sag", neden: "√x = x^(1/2): kesirli kuvvet." },
            { metin: "7", cevap: "sol", neden: "Sabit polinom: 7x⁰, derecesi 0." },
            { metin: "(x + 1)² − x²", cevap: "sol", neden: "Açınca 2x + 1 olur: polinom." }
          ]
        },
        {
          tip: "tuzak",
          metin: "Kök ya da kesir görmek tek başına polinom olmadığını göstermez; yalnızca ==x'in kuvveti== önemlidir. Sınavda böyle yaz: *P is not a polynomial because x has a negative exponent.*",
          yanlis: "√3·x + 1 polinom değildir, çünkü içinde kök var.",
          dogru: "√3 yalnızca katsayıdır, x'in kuvveti 1'dir. Polinomdur."
        }
      ]
    },
    {
      baslik: "Dereceye göre adlar",
      kisa: "Derece polinomun adını belirler; terim sayısı ikinci bir ad verir.",
      bloklar: [
        {
          tip: "tablo",
          head: ["Derece", "Adı", "Örnek"],
          rows: [
            ["0", "*constant*", "7"],
            ["1", "*linear*", "2x − 3"],
            ["2", "*quadratic*", "x² − 4x + 3"],
            ["3", "*cubic*", "x³ − x"],
            ["4", "*quartic*", "x⁴ − 5x² + 4"],
            ["5", "*quintic* (ek bilgi)", "x⁵ + 2x"]
          ],
          not: "Sınavda böyle yaz: *P is a cubic polynomial.*"
        },
        {
          tip: "liste",
          maddeler: [
            { ikon: "1️⃣", baslik: "*Monomial*", metin: "tek terim: 5x³" },
            { ikon: "2️⃣", baslik: "*Binomial*", metin: "iki terim: x² − 9" },
            { ikon: "3️⃣", baslik: "*Trinomial*", metin: "üç terim: x² + 2x + 1" }
          ]
        },
        {
          tip: "not",
          metin: "Üçten çok terimli polinomlara genelde özel ad verilmez. Tek istisna *zero polynomial* P(x) = 0'dır: derecesi tanımsızdır (*undefined*). P(x) = a₀ ≠ 0 gibi sabit polinomlar ise 0. derecedendir."
        }
      ]
    },
    {
      baslik: "Toplama ve çıkarma",
      kisa: "Yalnızca benzer terimler, yani aynı kuvvetli terimler toplanır ya da çıkarılır.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "A(x) = 3x³ − 2x + 5 ve B(x) = x³ + 4x² − x − 2",
          durum: "A + B ve A − B bulunur.",
          adimlar: [
            "**Hizala:** A(x) = 3x³ + 0x² − 2x + 5 yaz (x² yok, yerine 0 koy).",
            "**Topla:** x³: 3 + 1 = 4 · x²: 0 + 4 = 4 · x: −2 + (−1) = −3 · sabit: 5 + (−2) = 3.",
            "**Çıkar:** x³: 3 − 1 = 2 · x²: 0 − 4 = −4 · x: −2 − (−1) = −1 · sabit: 5 − (−2) = 7."
          ],
          sonuc: "A + B = 4x³ + 4x² − 3x + 3 ve A − B = 2x³ − 4x² − x + 7."
        },
        {
          tip: "tuzak",
          metin: "Çıkarırken eksi işareti parantezin ==her terimini== etkiler. Toplamın derecesi iki dereceden büyük olamaz ama düşebilir: (x³ + x) − (x³ − x) = 2x. Sınavda böyle yaz: *The degree of P + Q is at most the larger of the two degrees.*",
          yanlis: "A − (x³ + 4x² − x − 2) = 3x³ − 2x + 5 − x³ + 4x² − x − 2",
          dogru: "Eksi her terime dağılır: − x³ − 4x² + x + 2 yazılır."
        }
      ]
    },
    {
      baslik: "Çarpma",
      kisa: "Her terim her terimle çarpılır; dereceler toplanır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "deg(P · Q)", alt: "çarpımın derecesi" },
            "=",
            { t: "deg P", alt: "1. polinomun derecesi" },
            "+",
            { t: "deg Q", alt: "2. polinomun derecesi" }
          ],
          aciklama: "Başkatsayılar da birbiriyle çarpılır, sabit terimler de. Sınavda böyle yaz: *The degree of the product is the sum of the degrees.*"
        },
        {
          tip: "ornek",
          baslik: "(x + 2)(x² − 3x + 1)",
          durum: "Dağıtma özelliği (*distributive property*) ile çarp.",
          adimlar: [
            "x ile dağıt: x·x² + x·(−3x) + x·1 = x³ − 3x² + x.",
            "2 ile dağıt: 2·x² + 2·(−3x) + 2·1 = 2x² − 6x + 2.",
            "Benzer terimleri topla: x³ + (−3x² + 2x²) + (x − 6x) + 2."
          ],
          sonuc: "x³ − x² − 5x + 2. Kontrol: derece 1 + 2 = 3, sabit terim 2·1 = 2."
        },
        {
          tip: "grafik",
          baslik: "Çarpımın derecesi çarpanların derecelerinin toplamıdır",
          xlabel: "",
          ylabel: "",
          xmax: 6,
          ymax: 10,
          xticks: [
            { v: 0, label: "−3" },
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 3, label: "0" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" }
          ],
          yticks: [
            { v: 0, label: "−4" },
            { v: 1, label: "−3" },
            { v: 2, label: "−2" },
            { v: 3, label: "−1" },
            { v: 4, label: "0" },
            { v: 5, label: "1" },
            { v: 6, label: "2" },
            { v: 7, label: "3" },
            { v: 8, label: "4" },
            { v: 9, label: "5" },
            { v: 10, label: "6" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 0, kesik: true, from: [0, 4], to: [6, 4], etiket: "x" },
            { id: "ey", tip: "cizgi", renk: 0, kesik: true, from: [3, 0], to: [3, 10], etiket: "y" },
            { id: "a", tip: "cizgi", renk: 1, from: [0, 2], to: [6, 8], etiket: "x + 1", gizli: true },
            { id: "b", tip: "cizgi", renk: 3, from: [0, 0], to: [6, 6], etiket: "x − 1", gizli: true },
            {
              id: "p",
              tip: "egri",
              renk: 2,
              noktalar: [
                [0.4, 9.76],
                [0.725, 8.176],
                [1.05, 6.803],
                [1.375, 5.641],
                [1.7, 4.69],
                [2.025, 3.951],
                [2.35, 3.423],
                [2.675, 3.106],
                [3, 3],
                [3.325, 3.106],
                [3.65, 3.423],
                [3.975, 3.951],
                [4.3, 4.69],
                [4.625, 5.641],
                [4.95, 6.802],
                [5.275, 8.176],
                [5.6, 9.76]
              ],
              etiket: "x² − 1",
              gizli: true
            },
            { id: "r1", tip: "nokta", renk: 0, x: 2, y: 4, etiket: "−1", gizli: true },
            { id: "r2", tip: "nokta", renk: 0, x: 4, y: 4, etiket: "1", gizli: true }
          ],
          durumlar: [
            { metin: "y = x + 1 birinci derece bir polinom; kökü x = −1.", goster: ["a"] },
            { metin: "y = x − 1 de birinci derece; kökü x = 1.", goster: ["b"] },
            { metin: "Çarpım (x + 1)(x − 1) = x² − 1: derece 1 + 1 = 2, grafik parabol.", goster: ["p"] },
            { metin: "Çarpımın kökleri, çarpanların kökleridir: x = −1 ve x = 1.", goster: ["r1", "r2"] }
          ]
        }
      ]
    },
    {
      baslik: "Özel çarpımlar ve çarpanlara ayırma (ek bilgi)",
      kisa: "Kalıpları tanırsan çarpmayı da çarpanlara ayırmayı da kısaltırsın.",
      bloklar: [
        {
          tip: "tablo",
          head: ["Kalıp", "Açılımı"],
          rows: [
            ["(a + b)²", "a² + 2ab + b²"],
            ["(a − b)²", "a² − 2ab + b²"],
            ["a² − b²", "(a − b)(a + b)"],
            ["(a + b)³", "a³ + 3a²b + 3ab² + b³"],
            ["(a − b)³", "a³ − 3a²b + 3ab² − b³"],
            ["a³ + b³", "(a + b)(a² − ab + b²)"],
            ["a³ − b³", "(a − b)(a² + ab + b²)"]
          ],
          not: "Sınavda böyle yaz: *Factor completely.* ve *Factor by grouping.*"
        },
        {
          tip: "ornek",
          baslik: "Gruplayarak çarpanlara ayır: x³ + 3x² − 4x − 12",
          durum: "Dört terimli polinomu ikişer ikişer grupla (*factor by grouping*).",
          adimlar: [
            "İlk iki terimden x², son ikiden −4 çıkar: x²(x + 3) − 4(x + 3).",
            "Ortak çarpan (x + 3): (x + 3)(x² − 4).",
            "x² − 4 kareler farkıdır: (x − 2)(x + 2)."
          ],
          sonuc: "(x + 3)(x − 2)(x + 2). Kökler −3, 2 ve −2 olur."
        },
        {
          tip: "tuzak",
          metin: "(a + b)³ ile a³ + b³ karıştırılır. Ayrıca a³ + b³'ün ikinci çarpanı a² − ab + b², gerçek sayılarda bir daha ayrılmaz.",
          yanlis: "(a + b)³ = a³ + b³",
          dogru: "(a + b)³ = a³ + 3a²b + 3ab² + b³. a³ + b³ ise (a + b)(a² − ab + b²) olarak ayrılır."
        }
      ]
    },
    {
      baslik: "P(a): polinomun değeri",
      kisa: "P(a) için x yerine a yaz; P(0) sabit terim, P(1) katsayılar toplamıdır.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "P(x) = 2x³ − x² + 4x − 5",
          durum: "P(2), P(1), P(0) ve P(−1) bulunur.",
          adimlar: [
            "P(2) = 2·8 − 4 + 8 − 5 = 15.",
            "P(1) = 2 − 1 + 4 − 5 = 0. Katsayılar toplamı da 0.",
            "P(0) = −5, yani sabit terim.",
            "P(−1) = −2 − 1 − 4 − 5 = −12."
          ],
          sonuc: "P(2) = 15, P(1) = 0, P(0) = −5, P(−1) = −12. P(1) = 0 olduğu için x = 1 bu polinomun köküdür; bunu 3.3'te kullanacağız."
        },
        {
          tip: "liste",
          maddeler: [
            { ikon: "0️⃣", baslik: "P(0) = sabit terim", metin: "x yerine 0 yazınca yalnızca a₀ kalır." },
            { ikon: "1️⃣", baslik: "P(1) = katsayılar toplamı", metin: "Bütün x'ler 1 olur." },
            { ikon: "➖", baslik: "P(−1) = çift kuvvetli terimlerin toplamı − tek kuvvetlilerin toplamı", metin: "Örnekte (−1 − 5) − (2 + 4) = −12." },
            { ikon: "➗", baslik: "Ders teoremi: P_o = (P(1) − P(−1))/2 ve P_e = (P(1) + P(−1))/2", metin: "P_o tek, P_e çift kuvvetli terimlerin katsayıları toplamıdır. Örnekte P_o = (0 + 12)/2 = 6, P_e = (0 − 12)/2 = −6." },
            { ikon: "✍️", baslik: "Sınavda böyle yaz", metin: "*Evaluate P(2).* → *P(2) = 15.*" }
          ]
        }
      ]
    },
    {
      baslik: "İç içe polinom ve parametre soruları",
      kisa: "x yerine uygun sayıyı yaz; sabit ve sıfır polinomda katsayıları eşitle.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "P(2x − 4) = 3x² − 5x + 4 ve benzerleri",
          durum: "(a) P(−2)? (b) P(x + 4) = 2x² − 9x + 7 ise P(x² − 3)'ün sabit terimi? (c) P(2x − 3) = 5x² + 4x − 1 ise P(x)'in katsayılar toplamı?",
          adimlar: [
            "(a) P(−2) için 2x − 4 = −2 → x = 1. P(−2) = 3 − 5 + 4 = 2.",
            "(b) Sabit terim, x = 0 yazınca bulunur: P(0² − 3) = P(−3). x + 4 = −3 → x = −7.",
            "P(−3) = 2·49 − 9·(−7) + 7 = 98 + 63 + 7 = 168.",
            "(c) Katsayılar toplamı P(1)'dir. 2x − 3 = 1 → x = 2. P(1) = 5·4 + 4·2 − 1 = 27."
          ],
          sonuc: "(a) 2, (b) 168, (c) 27. Sınavda böyle yaz: *To find the constant term, substitute x = 0.*"
        },
        {
          tip: "ornek",
          baslik: "Sabit, sıfır ve polinom olma şartları",
          durum: "(a) P(x) = (2a − 3)x² − (3b + 2)x − 5 sabit polinom ise a + b + P(100)? (b) P(x) = (a − 5)x² − (b + 3)x − 2c + 5 sıfır polinom ise a + b + c? (c) 5x^(m+2) − 6x^(4−m) + 3 bir polinom ise m'nin tam sayı değerleri?",
          adimlar: [
            "(a) Sabit polinomda x'li terimlerin katsayıları 0: 2a − 3 = 0 → a = 3/2 ve 3b + 2 = 0 → b = −2/3.",
            "P(100) = −5 (sabit). a + b + P(100) = 3/2 − 2/3 − 5 = 5/6 − 5 = −25/6.",
            "(b) Sıfır polinomda bütün katsayılar 0: a = 5, b = −3, −2c + 5 = 0 → c = 5/2. a + b + c = 5 − 3 + 5/2 = 9/2.",
            "(c) Kuvvetler 0, 1, 2… olmalı: m + 2 ≥ 0 ve 4 − m ≥ 0 → −2 ≤ m ≤ 4."
          ],
          sonuc: "(a) −25/6, (b) 9/2, (c) m ∈ {−2, −1, 0, 1, 2, 3, 4}. Sınavda böyle yaz: *All coefficients of the zero polynomial are 0.*"
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: [
            "Polinomda x'in kuvvetleri 0, 1, 2… olur; x paydada, kökte ya da üstte olamaz. Katsayılar √3, ½ olabilir.",
            "*Degree* en büyük kuvvet, *leading coefficient* onun katsayısı, *constant term* x'siz terimdir. Eksik terimin katsayısı 0'dır.",
            "Derece adları: 1 *linear*, 2 *quadratic*, 3 *cubic*, 4 *quartic*. Terim sayısı: *monomial*, *binomial*, *trinomial*.",
            "Toplama ve çıkarmada yalnızca benzer terimler birleşir; çıkarırken eksi her terime dağılır.",
            "Çarpımın derecesi derecelerin toplamıdır: deg(P · Q) = deg P + deg Q.",
            "Kalıplar: (a ± b)², a² − b², (a ± b)³, a³ ± b³. Dört terimde gruplama dene.",
            "P(0) sabit terim, P(1) katsayılar toplamı; P(a) = 0 ise a bir köktür.",
            "İç içe polinomda iç ifadeyi hedef sayıya eşitle: P(2x − 3) için P(1), x = 2'de bulunur. Sabit polinomda x'li katsayılar, sıfır polinomda bütün katsayılar 0.",
            "Sınavda hep *degree*, *leading coefficient*, *factor completely* ifadelerini kullan."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "Which of the following is a polynomial?",
      opts: ["x² + 3/x − 1", "√x + 4", "x³ − √2·x + ½", "2ˣ + x"],
      a: 2,
      why: "C'de x'in kuvvetleri 3 ve 1'dir; √2 ve ½ yalnızca katsayıdır. A'da x paydada (x⁻¹), B'de x kökün içinde (x^(1/2)), D'de x üstte olduğu için polinom değildirler."
    },
    {
      q: "What are the degree and the leading coefficient of the product (2x² − 1)(x³ + 4x − 3)?",
      opts: ["Degree 6, leading coefficient 2", "Degree 5, leading coefficient 2", "Degree 5, leading coefficient −1", "Degree 3, leading coefficient 2"],
      a: 1,
      why: "Dereceler toplanır: 2 + 3 = 5; başkatsayılar çarpılır: 2·1 = 2. A şıkkı dereceleri çarpmak (2·3 = 6) gibi yaygın bir hatadan çıkar."
    },
    {
      q: "If A(x) = x³ − 2x + 1 and B(x) = x³ + x² − 3, what is A(x) − B(x)?",
      opts: ["−x² − 2x + 4", "−x² − 2x − 2", "2x³ + x² − 2x − 2", "x² + 2x − 4"],
      a: 0,
      why: "x³ terimleri sadeleşir; x²: 0 − 1 = −1; x: −2; sabit: 1 − (−3) = 4. B, −3'ün işaretini dağıtmayı unutur; C aslında A + B'dir."
    },
    {
      q: "A canteen sells a box with a square base of side x cm and height (x + 3) cm. What are the volume V(x) and V(2)?",
      opts: ["V(x) = x³ + 3, V(2) = 11", "V(x) = x² + 3x, V(2) = 10", "V(x) = 2x² + 3x, V(2) = 14", "V(x) = x³ + 3x², V(2) = 20"],
      a: 3,
      why: "Taban alanı x², hacim = taban × yükseklik = x²(x + 3) = x³ + 3x². x = 2 için 8 + 12 = 20. A dağıtmayı unutur; B tabanın alanı yerine bir dikdörtgenin alanını yazar."
    },
    {
      q: "The table gives the coefficients of P(x). What is P(1) − P(−1)?",
      fig: {
        type: "table",
        head: ["Power", "x⁴", "x³", "x²", "x¹", "x⁰"],
        rows: [["Coefficient", "2", "0", "−3", "5", "−4"]],
        caption: "Coefficients of P(x)"
      },
      opts: ["−10", "10", "0", "5"],
      a: 1,
      why: "P(x) = 2x⁴ − 3x² + 5x − 4. P(1) = 2 − 3 + 5 − 4 = 0 ve P(−1) = 2 − 3 − 5 − 4 = −10; fark 0 − (−10) = 10. A şıkkı P(−1)'in kendisidir; C yalnızca P(1)'i verir."
    }
  ]
};
