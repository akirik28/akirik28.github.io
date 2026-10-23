/* Kitora not defteri · pc105 · 1.5 Fonksiyon Dönüşümleri
   Kaynak: öğretmenin ders sunumu (Unit#1_5 Transformations of Functions) + Exam 1 objectives; ders notuyla aynı terim ve gösterim. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc105",
  amac: "Bu konu fonksiyon grafiklerinin dönüşümlerini anlatıyor: ana fonksiyon ve fonksiyon ailesi, dikey ve yatay öteleme, dikey ve yatay germe ve sıkıştırma, x ve y eksenine göre yansıma. Grafikten denklem yazmayı ve denklemden grafik çizmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Ana fonksiyon ve fonksiyon ailesi",
      kisa: "Ana fonksiyon ailenin şablonudur; dönüşümler onu taşır, geriyor ya da yansıtır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧬",
              terim: "Parent function",
              tr: "ana fonksiyon",
              tanim: "Bir ailenin en yalın hali: aile üyeleri ondan dönüşümle elde edilir.",
              ornek: "y = x² parabol ailesinin ana fonksiyonu."
            },
            {
              ikon: "👪",
              terim: "Family of functions",
              tr: "fonksiyon ailesi",
              tanim: "Aynı ana fonksiyondan türeyen, grafikleri aynı temel şekle sahip fonksiyonlar.",
              ornek: "y = 2x² + 3 ve y = −(x − 1)² aynı aileden."
            },
            {
              ikon: "🔧",
              terim: "Transformation",
              tr: "dönüşüm",
              tanim: "Grafiği taşıyan (*translation / shift*), geren ya da sıkıştıran (*stretch / shrink / compress, dilation*) ve aynalayan (*reflection / flip*) işlem.",
              ornek: "x² → (x − 2)² + 1."
            },
            {
              ikon: "📐",
              terim: "Rigid / non-rigid",
              tr: "şekli koruyan / bozan",
              tanim: "Öteleme ve yansıma şekli korur; germe ve sıkıştırma şekli değiştirir.",
              ornek: "x² → x² + 3 şekil aynı; x² → 3x² daha dar."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Altı ana fonksiyon",
          head: ["Ana fonksiyon", "Kural", "Şekil", "Önemli noktalar"],
          rows: [
            ["*Linear*", "f(x) = x", "eğimi 1 olan doğru", "(0, 0), (1, 1)"],
            ["*Quadratic*", "f(x) = x²", "parabol", "(0, 0), (1, 1), (2, 4)"],
            ["*Cubic*", "f(x) = x³", "S biçimi", "(−1, −1), (0, 0), (1, 1)"],
            ["*Absolute value*", "f(x) = |x|", "V biçimi", "(−1, 1), (0, 0), (1, 1)"],
            ["*Square root*", "f(x) = √x", "yatık yarım parabol", "(0, 0), (1, 1), (4, 2)"],
            ["*Reciprocal*", "f(x) = 1/x", "hiperbol, iki kol", "(−1, −1), (1, 1)"]
          ],
          not: "Sınavda böyle yaz: *The graph of g is a transformation of the parent function f(x) = x².*"
        }
      ]
    },
    {
      baslik: "Dikey öteleme",
      kisa: "f(x) + c grafiği, f'yi c > 0 ise yukarı, c < 0 ise aşağı taşır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "g(x) = f(x) + c", alt: "dikey öteleme (*vertical translation*)" },
            "→",
            { t: "(x, y) → (x, y + c)", alt: "c > 0 yukarı, c < 0 aşağı" }
          ],
          aciklama: "Sınavda böyle yaz: *The graph of g is the graph of f shifted 2 units up.*"
        },
        {
          tip: "grafik",
          baslik: "Dikey öteleme: f(x) + c",
          xlabel: "x",
          ylabel: "y",
          xmax: 8,
          ymax: 11,
          xticks: [
            { v: 1, label: "−3" },
            { v: 2, label: "−2" },
            { v: 3, label: "−1" },
            { v: 5, label: "1" },
            { v: 6, label: "2" },
            { v: 7, label: "3" }
          ],
          yticks: [
            { v: 1, label: "−3" },
            { v: 2, label: "−2" },
            { v: 3, label: "−1" },
            { v: 5, label: "1" },
            { v: 6, label: "2" },
            { v: 7, label: "3" },
            { v: 8, label: "4" },
            { v: 9, label: "5" },
            { v: 10, label: "6" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 4], to: [8, 4], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [4, 0], to: [4, 11], etiket: "y" },
            {
              id: "f",
              tip: "egri",
              noktalar: [
                [2, 8], [2.25, 7.063], [2.5, 6.25], [2.75, 5.563], [3, 5], [3.25, 4.563],
                [3.5, 4.25], [3.75, 4.063], [4, 4], [4.25, 4.063], [4.5, 4.25], [4.75, 4.563],
                [5, 5], [5.25, 5.563], [5.5, 6.25], [5.75, 7.063], [6, 8]
              ],
              renk: 0,
              kesik: true,
              etiket: "f"
            },
            {
              id: "up",
              tip: "egri",
              noktalar: [
                [2, 10], [2.25, 9.063], [2.5, 8.25], [2.75, 7.563], [3, 7], [3.25, 6.563],
                [3.5, 6.25], [3.75, 6.063], [4, 6], [4.25, 6.063], [4.5, 6.25], [4.75, 6.563],
                [5, 7], [5.25, 7.563], [5.5, 8.25], [5.75, 9.063], [6, 10]
              ],
              renk: 2,
              etiket: "f+2",
              gizli: true
            },
            { id: "vu", tip: "nokta", x: 4, y: 6, etiket: "(0, 2)", renk: 2, gizli: true },
            { id: "au", tip: "ok", from: [5.5, 6.4], to: [5.5, 8.1], renk: 2, gizli: true },
            {
              id: "dn",
              tip: "egri",
              noktalar: [
                [2, 5], [2.25, 4.063], [2.5, 3.25], [2.75, 2.563], [3, 2], [3.25, 1.563],
                [3.5, 1.25], [3.75, 1.063], [4, 1], [4.25, 1.063], [4.5, 1.25], [4.75, 1.563],
                [5, 2], [5.25, 2.563], [5.5, 3.25], [5.75, 4.063], [6, 5]
              ],
              renk: 1,
              etiket: "f−3",
              gizli: true
            },
            { id: "vd", tip: "nokta", x: 4, y: 1, etiket: "(0, −3)", renk: 1, gizli: true },
            { id: "ad", tip: "ok", from: [5.5, 6.1], to: [5.5, 3.4], renk: 1, gizli: true }
          ],
          durumlar: [
            { metin: "Kesikli çizgi ana fonksiyon f(x) = x²; köşesi (0, 0).", goster: ["f"] },
            {
              metin: "g(x) = x² + 2: her y koordinatına +2 eklenir. Grafik 2 birim ==yukarı== kayar, köşe (0, 2).",
              goster: ["up", "vu", "au"]
            },
            {
              metin: "h(x) = x² − 3: her y'den 3 çıkar. Grafik 3 birim ==aşağı== kayar, köşe (0, −3). Şekil aynı kalır.",
              gizle: ["up", "vu", "au"],
              goster: ["dn", "vd", "ad"]
            }
          ]
        }
      ]
    },
    {
      baslik: "Yatay öteleme",
      kisa: "f(x − c) grafiği f'yi sağa taşır; işaret sezgiye terstir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Yatay öteleme: f(x − c)",
          xlabel: "x",
          ylabel: "y",
          xmax: 12,
          ymax: 7,
          xticks: [
            { v: 1, label: "−5" },
            { v: 2, label: "−4" },
            { v: 3, label: "−3" },
            { v: 4, label: "−2" },
            { v: 5, label: "−1" },
            { v: 7, label: "1" },
            { v: 8, label: "2" },
            { v: 9, label: "3" },
            { v: 10, label: "4" },
            { v: 11, label: "5" }
          ],
          yticks: [
            { v: 2, label: "1" },
            { v: 3, label: "2" },
            { v: 4, label: "3" },
            { v: 5, label: "4" },
            { v: 6, label: "5" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 1], to: [12, 1], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [6, 0], to: [6, 7], etiket: "y" },
            {
              id: "f",
              tip: "egri",
              noktalar: [
                [4, 5], [4.25, 4.063], [4.5, 3.25], [4.75, 2.563], [5, 2], [5.25, 1.563],
                [5.5, 1.25], [5.75, 1.063], [6, 1], [6.25, 1.063], [6.5, 1.25], [6.75, 1.563],
                [7, 2], [7.25, 2.563], [7.5, 3.25], [7.75, 4.063], [8, 5]
              ],
              renk: 0,
              kesik: true,
              etiket: "f"
            },
            {
              id: "r",
              tip: "egri",
              noktalar: [
                [7, 5], [7.25, 4.063], [7.5, 3.25], [7.75, 2.563], [8, 2], [8.25, 1.563],
                [8.5, 1.25], [8.75, 1.063], [9, 1], [9.25, 1.063], [9.5, 1.25], [9.75, 1.563],
                [10, 2], [10.25, 2.563], [10.5, 3.25], [10.75, 4.063], [11, 5]
              ],
              renk: 2,
              etiket: "f(x−3)",
              gizli: true
            },
            { id: "vr", tip: "nokta", x: 9, y: 1, etiket: "(3, 0)", renk: 2, gizli: true },
            { id: "ar", tip: "ok", from: [8.1, 5], to: [10.9, 5], renk: 2, gizli: true },
            {
              id: "l",
              tip: "egri",
              noktalar: [
                [1, 5], [1.25, 4.063], [1.5, 3.25], [1.75, 2.563], [2, 2], [2.25, 1.563],
                [2.5, 1.25], [2.75, 1.063], [3, 1], [3.25, 1.063], [3.5, 1.25], [3.75, 1.563],
                [4, 2], [4.25, 2.563], [4.5, 3.25], [4.75, 4.063], [5, 5]
              ],
              renk: 1,
              etiket: "f(x+3)",
              gizli: true
            },
            { id: "vl", tip: "nokta", x: 3, y: 1, etiket: "(−3, 0)", renk: 1, gizli: true },
            { id: "al", tip: "ok", from: [3.9, 5], to: [1.1, 5], renk: 1, gizli: true }
          ],
          durumlar: [
            { metin: "Ana fonksiyon f(x) = x² (kesikli). Köşe (0, 0).", goster: ["f"] },
            {
              metin: "g(x) = (x − 3)²: köşe, parantezin içini sıfır yapan x'te: x = 3. Grafik 3 birim ==sağa== kayar.",
              goster: ["r", "vr", "ar"]
            },
            {
              metin: "h(x) = (x + 3)²: içi sıfır yapan x = −3. Grafik 3 birim ==sola== kayar.",
              gizle: ["r", "vr", "ar"],
              goster: ["l", "vl", "al"]
            }
          ]
        },
        {
          tip: "tuzak",
          metin: "Parantezin içindeki işaret kaymanın yönünü tersine gösterir: köşe, içi sıfır yapan x'tedir.",
          yanlis: "f(x + 3) grafiği f'yi sağa 3 birim kaydırır (artı, artı yönü).",
          dogru: "x + 3 = 0 → x = −3: grafik sola 3 birim kayar. f(x − c) sağa c, f(x + c) sola c; (x, y) noktası (x + c, y) olur. Sınavda böyle yaz: *The graph of g(x) = f(x + 3) is f shifted 3 units to the left.*"
        }
      ]
    },
    {
      baslik: "Yansımalar",
      kisa: "−f(x) grafiği x eksenine, f(−x) grafiği y eksenine göre yansıtır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Yansımalar: −f(x) ve f(−x)",
          xlabel: "x",
          ylabel: "y",
          xmax: 10,
          ymax: 6,
          xticks: [
            { v: 1, label: "−4" },
            { v: 2, label: "−3" },
            { v: 3, label: "−2" },
            { v: 4, label: "−1" },
            { v: 6, label: "1" },
            { v: 7, label: "2" },
            { v: 8, label: "3" },
            { v: 9, label: "4" }
          ],
          yticks: [
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 4, label: "1" },
            { v: 5, label: "2" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 3], to: [10, 3], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [5, 0], to: [5, 6], etiket: "y" },
            {
              id: "f",
              tip: "egri",
              noktalar: [
                [5, 3], [5.063, 3.25], [5.25, 3.5], [5.563, 3.75], [6, 4], [6.563, 4.25],
                [7.25, 4.5], [8.063, 4.75], [9, 5]
              ],
              renk: 0,
              kesik: true,
              etiket: "f"
            },
            { id: "q0", tip: "nokta", x: 9, y: 5, etiket: "(4, 2)", renk: 0 },
            {
              id: "rx",
              tip: "egri",
              noktalar: [
                [5, 3], [5.063, 2.75], [5.25, 2.5], [5.563, 2.25], [6, 2], [6.563, 1.75],
                [7.25, 1.5], [8.063, 1.25], [9, 1]
              ],
              renk: 2,
              etiket: "−f(x)",
              gizli: true
            },
            { id: "qx", tip: "nokta", x: 9, y: 1, etiket: "(4, −2)", renk: 2, gizli: true },
            {
              id: "ry",
              tip: "egri",
              noktalar: [
                [5, 3], [4.938, 3.25], [4.75, 3.5], [4.438, 3.75], [4, 4], [3.438, 4.25],
                [2.75, 4.5], [1.938, 4.75], [1, 5]
              ],
              renk: 1,
              etiket: "f(−x)",
              gizli: true
            },
            { id: "qy", tip: "nokta", x: 1, y: 5, etiket: "(−4, 2)", renk: 1, gizli: true },
            {
              id: "rb",
              tip: "egri",
              noktalar: [
                [5, 3], [4.938, 2.75], [4.75, 2.5], [4.438, 2.25], [4, 2], [3.438, 1.75],
                [2.75, 1.5], [1.938, 1.25], [1, 1]
              ],
              renk: 3,
              etiket: "−f(−x)",
              gizli: true
            },
            { id: "qb", tip: "nokta", x: 1, y: 1, etiket: "(−4, −2)", renk: 3, gizli: true }
          ],
          durumlar: [
            { metin: "Ana fonksiyon f(x) = √x (kesikli); (4, 2) noktası var." },
            {
              metin: "y = −√x: bütün y'ler işaret değiştirir, (4, 2) → (4, −2). x eksenine göre yansıma.",
              goster: ["rx", "qx"]
            },
            {
              metin: "y = √(−x): bütün x'ler işaret değiştirir, (4, 2) → (−4, 2). y eksenine göre yansıma.",
              gizle: ["rx", "qx"],
              goster: ["ry", "qy"]
            },
            {
              metin: "İkisi birden y = −√(−x): (4, 2) → (−4, −2). Orijine göre yansıma (180° dönüş).",
              gizle: ["ry", "qy"],
              goster: ["rb", "qb"]
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Üç yansıma",
          head: ["Yansıma", "Denklem", "Nokta kuralı", "Etkisi"],
          rows: [
            [
              "x eksenine göre",
              "y = −f(x)",
              "(x, y) → (x, −y)",
              "y işaretleri değişir; x-kesişimleri sabit"
            ],
            [
              "y eksenine göre",
              "y = f(−x)",
              "(x, y) → (−x, y)",
              "x işaretleri değişir; y-kesişimi sabit"
            ],
            ["Orijine göre", "y = −f(−x)", "(x, y) → (−x, −y)", "180° dönüş"]
          ],
          not: "Sınavda böyle yaz: *The graph of g(x) = −f(x) is the reflection of f in the x-axis.*"
        },
        {
          tip: "ikili",
          sol: {
            ikon: "↕️",
            baslik: "Dıştaki eksi: −f(x)",
            maddeler: ["y'ler işaret değiştirir", "x eksenine göre yansıma"]
          },
          sag: {
            ikon: "↔️",
            baslik: "İçteki eksi: f(−x)",
            maddeler: ["x'ler işaret değiştirir", "y eksenine göre yansıma"]
          },
          oyun: [
            { metin: "y = −√x", cevap: "sol", neden: "Eksi, kökün dışında: y'ye etki eder." },
            { metin: "y = √(−x)", cevap: "sag", neden: "Eksi parantezin içinde: x'e etki eder." },
            { metin: "y = −|x|", cevap: "sol", neden: "V ters döner, tepe noktası üstte." },
            { metin: "y = (−x)³", cevap: "sag", neden: "x yerine −x yazılmış: y eksenine göre yansıma." }
          ]
        }
      ]
    },
    {
      baslik: "Dikey germe ve sıkıştırma",
      kisa: "a·f(x) y'leri a ile çarpar; uzatır ya da basıklaştırır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "g(x) = a · f(x)", alt: "dikey germe / sıkıştırma" },
            "→",
            { t: "(x, y) → (x, a·y)", alt: "|a| > 1 gerer · 0 < |a| < 1 sıkıştırır · a < 0 ayrıca yansıtır" }
          ],
          aciklama: "Sınavda böyle yaz: *The graph of g(x) = 2f(x) is a vertical stretch of f by a factor of 2.*"
        },
        {
          tip: "grafik",
          baslik: "Dikey germe ve sıkıştırma: a · f(x)",
          xlabel: "x",
          ylabel: "y",
          xmax: 8,
          ymax: 10,
          xticks: [
            { v: 1, label: "−3" },
            { v: 2, label: "−2" },
            { v: 3, label: "−1" },
            { v: 5, label: "1" },
            { v: 6, label: "2" },
            { v: 7, label: "3" }
          ],
          yticks: [
            { v: 2, label: "1" },
            { v: 3, label: "2" },
            { v: 4, label: "3" },
            { v: 5, label: "4" },
            { v: 6, label: "5" },
            { v: 7, label: "6" },
            { v: 8, label: "7" },
            { v: 9, label: "8" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 1], to: [8, 1], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [4, 0], to: [4, 10], etiket: "y" },
            {
              id: "f",
              tip: "egri",
              noktalar: [
                [2, 5], [2.25, 4.063], [2.5, 3.25], [2.75, 2.563], [3, 2], [3.25, 1.563],
                [3.5, 1.25], [3.75, 1.063], [4, 1], [4.25, 1.063], [4.5, 1.25], [4.75, 1.563],
                [5, 2], [5.25, 2.563], [5.5, 3.25], [5.75, 4.063], [6, 5]
              ],
              renk: 0,
              kesik: true,
              etiket: "f"
            },
            {
              id: "s",
              tip: "egri",
              noktalar: [
                [2, 9], [2.25, 7.125], [2.5, 5.5], [2.75, 4.125], [3, 3], [3.25, 2.125],
                [3.5, 1.5], [3.75, 1.125], [4, 1], [4.25, 1.125], [4.5, 1.5], [4.75, 2.125],
                [5, 3], [5.25, 4.125], [5.5, 5.5], [5.75, 7.125], [6, 9]
              ],
              renk: 2,
              etiket: "2f",
              gizli: true
            },
            { id: "ps", tip: "nokta", x: 6, y: 9, etiket: "(2, 8)", renk: 2, gizli: true },
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [2, 3], [2.25, 2.531], [2.5, 2.125], [2.75, 1.781], [3, 1.5], [3.25, 1.281],
                [3.5, 1.125], [3.75, 1.031], [4, 1], [4.25, 1.031], [4.5, 1.125], [4.75, 1.281],
                [5, 1.5], [5.25, 1.781], [5.5, 2.125], [5.75, 2.531], [6, 3]
              ],
              renk: 1,
              etiket: "½f",
              gizli: true
            },
            { id: "pc", tip: "nokta", x: 6, y: 3, etiket: "(2, 2)", renk: 1, gizli: true }
          ],
          durumlar: [
            { metin: "f(x) = x²: (2, 4) noktası var. Her y'yi bir sayıyla çarpacağız.", goster: ["f"] },
            {
              metin: "g(x) = 2x²: y'ler 2 katı, (2, 4) → (2, 8). Grafik dikeyde gerildi, dar görünüyor. x-kesişimi (0, 0) yerinde.",
              goster: ["s", "ps"]
            },
            {
              metin: "h(x) = ½x²: y'ler yarıya iner, (2, 4) → (2, 2). Grafik dikeyde sıkıştı, basık görünüyor.",
              gizle: ["s", "ps"],
              goster: ["c", "pc"]
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "⬆️",
            baslik: "Dikey germe (|a| > 1)",
            maddeler: ["Yükseklikler büyür", "Grafik dar görünür"]
          },
          sag: {
            ikon: "⬇️",
            baslik: "Dikey sıkıştırma (0 < |a| < 1)",
            maddeler: ["Yükseklikler küçülür", "Grafik basık görünür"]
          },
          oyun: [
            { metin: "y = 3x²", cevap: "sol", neden: "a = 3 > 1: yükseklikler 3 katı." },
            { metin: "y = ¼x²", cevap: "sag", neden: "a = ¼ < 1: yükseklikler dörtte bire iner." },
            { metin: "y = 5√x", cevap: "sol", neden: "a = 5: dikey germe." },
            { metin: "y = 0,5|x|", cevap: "sag", neden: "a = 0,5: V daha açık, yani sıkıştı." }
          ]
        }
      ]
    },
    {
      baslik: "Yatay germe ve sıkıştırma",
      kisa: "f(ax): her x'i 1/a ile çarpar; a > 1 sıkıştırır, 0 < a < 1 gerer.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Yatay germe ve sıkıştırma: f(a·x)",
          xlabel: "x",
          ylabel: "y",
          xmax: 10,
          ymax: 10,
          xticks: [
            { v: 1, label: "−4" },
            { v: 2, label: "−3" },
            { v: 3, label: "−2" },
            { v: 4, label: "−1" },
            { v: 6, label: "1" },
            { v: 7, label: "2" },
            { v: 8, label: "3" },
            { v: 9, label: "4" }
          ],
          yticks: [
            { v: 1, label: "−4" },
            { v: 2, label: "−3" },
            { v: 3, label: "−2" },
            { v: 4, label: "−1" },
            { v: 6, label: "1" },
            { v: 7, label: "2" },
            { v: 8, label: "3" },
            { v: 9, label: "4" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 5], to: [10, 5], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [5, 0], to: [5, 10], etiket: "y" },
            {
              id: "f",
              tip: "egri",
              noktalar: [
                [2, 10], [2.333, 8.111], [2.667, 6.444], [3, 5], [3.333, 3.778], [3.667, 2.778],
                [4, 2], [4.333, 1.444], [4.667, 1.111], [5, 1], [5.333, 1.111], [5.667, 1.444],
                [6, 2], [6.333, 2.778], [6.667, 3.778], [7, 5], [7.333, 6.444], [7.667, 8.111],
                [8, 10]
              ],
              renk: 0,
              kesik: true,
              etiket: "f"
            },
            { id: "f1", tip: "nokta", x: 7, y: 5, renk: 0 },
            { id: "f2", tip: "nokta", x: 3, y: 5, renk: 0 },
            {
              id: "k",
              tip: "egri",
              noktalar: [
                [3.5, 10], [3.667, 8.111], [3.833, 6.444], [4, 5], [4.167, 3.778], [4.333, 2.778],
                [4.5, 2], [4.667, 1.444], [4.833, 1.111], [5, 1], [5.167, 1.111], [5.333, 1.444],
                [5.5, 2], [5.667, 2.778], [5.833, 3.778], [6, 5], [6.167, 6.444], [6.333, 8.111],
                [6.5, 10]
              ],
              renk: 2,
              etiket: "f(2x)",
              gizli: true
            },
            { id: "k1", tip: "nokta", x: 6, y: 5, etiket: "(1, 0)", renk: 2, gizli: true },
            { id: "k2", tip: "nokta", x: 4, y: 5, etiket: "(−1, 0)", renk: 2, gizli: true },
            {
              id: "g",
              tip: "egri",
              noktalar: [
                [0, 7.25], [0.5, 6.063], [1, 5], [1.5, 4.063], [2, 3.25], [2.5, 2.563],
                [3, 2], [3.5, 1.563], [4, 1.25], [4.5, 1.063], [5, 1], [5.5, 1.063],
                [6, 1.25], [6.5, 1.563], [7, 2], [7.5, 2.563], [8, 3.25], [8.5, 4.063],
                [9, 5], [9.5, 6.063], [10, 7.25]
              ],
              renk: 1,
              etiket: "f(x/2)",
              gizli: true
            },
            { id: "g1", tip: "nokta", x: 9, y: 5, etiket: "(4, 0)", renk: 1, gizli: true },
            { id: "g2", tip: "nokta", x: 1, y: 5, etiket: "(−4, 0)", renk: 1, gizli: true },
            { id: "yi", tip: "nokta", x: 5, y: 1, etiket: "(0, −4)", renk: 3 }
          ],
          durumlar: [
            { metin: "f(x) = x² − 4 (kesikli): x-kesişimleri ±2, y-kesişimi (0, −4)." },
            {
              metin: "g(x) = f(2x) = 4x² − 4: x-kesişimleri ±1. x'ler yarıya indi: yatayda ==sıkıştı==. y-kesişimi yerinde.",
              gizle: ["f1", "f2"],
              goster: ["k", "k1", "k2"]
            },
            {
              metin: "h(x) = f(x/2) = x²/4 − 4: x-kesişimleri ±4. x'ler 2 katına çıktı: yatayda ==gerildi==. y-kesişimi yine (0, −4).",
              gizle: ["k", "k1", "k2"],
              goster: ["g", "g1", "g2"]
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "g(x) = f(a · x)", alt: "yatay germe / sıkıştırma" },
            "→",
            { t: "(x, y) → (x/a, y)", alt: "a > 1 sıkıştırır · 0 < a < 1 gerer · a < 0 ayrıca yansıtır" }
          ],
          aciklama: "y-kesişimi değişmez, x-kesişimleri değişir. Sınavda böyle yaz: *The graph of g(x) = f(2x) is a horizontal compression of f by a factor of 1/2.*"
        },
        {
          tip: "tuzak",
          metin: "Yatay dönüşümler, parantezin içindeki sayıya ters davranır (yatay ötelemedeki gibi).",
          yanlis: "f(2x) grafiği yatayda 2 katına gerilir.",
          dogru: "x'ler 1/2 ile çarpılır: yarıya sıkışır. f(x/2) ise 2 katına gerilir."
        }
      ]
    },
    {
      baslik: "Dönüşümleri birleştirmek, denklem yazmak",
      kisa: "g(x) = a·f(b(x − c)) + d: önce şekli değiştir, sonra taşı.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Beş adımda y = −2(x − 1)² + 3",
          xlabel: "x",
          ylabel: "y",
          xmax: 7,
          ymax: 10,
          xticks: [
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" }
          ],
          yticks: [
            { v: 1, label: "−4" },
            { v: 2, label: "−3" },
            { v: 3, label: "−2" },
            { v: 4, label: "−1" },
            { v: 6, label: "1" },
            { v: 7, label: "2" },
            { v: 8, label: "3" },
            { v: 9, label: "4" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 5], to: [7, 5], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [3, 0], to: [3, 10], etiket: "y" },
            {
              id: "f",
              tip: "egri",
              noktalar: [
                [1.5, 7.25], [1.75, 6.563], [2, 6], [2.25, 5.563], [2.5, 5.25], [2.75, 5.063],
                [3, 5], [3.25, 5.063], [3.5, 5.25], [3.75, 5.563], [4, 6], [4.25, 6.563],
                [4.5, 7.25]
              ],
              renk: 0,
              kesik: true,
              etiket: "f"
            },
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [2.5, 7.25], [2.75, 6.563], [3, 6], [3.25, 5.563], [3.5, 5.25], [3.75, 5.063],
                [4, 5], [4.25, 5.063], [4.5, 5.25], [4.75, 5.563], [5, 6], [5.25, 6.563],
                [5.5, 7.25]
              ],
              renk: 2,
              gizli: true
            },
            { id: "v", tip: "nokta", x: 3, y: 5, etiket: "(0, 0)", renk: 3 }
          ],
          durumlar: [
            { metin: "Ana fonksiyon f(x) = x²: köşe (0, 0).", goster: [] },
            {
              metin: "1) 1 sağa: (x − 1)². Köşe (1, 0).",
              goster: ["c"],
              set: {
                v: { x: 4, y: 5, etiket: "(1, 0)" }
              }
            },
            {
              metin: "2) Dikey germe ×2: 2(x − 1)². Köşe yerinde, yükseklikler 2 katı.",
              set: {
                c: {
                  noktalar: [
                    [2.5, 9.5], [2.75, 8.125], [3, 7], [3.25, 6.125], [3.5, 5.5], [3.75, 5.125],
                    [4, 5], [4.25, 5.125], [4.5, 5.5], [4.75, 6.125], [5, 7], [5.25, 8.125],
                    [5.5, 9.5]
                  ]
                }
              }
            },
            {
              metin: "3) x eksenine yansıt: −2(x − 1)². Parabol aşağı bakar.",
              set: {
                c: {
                  noktalar: [
                    [2.5, 0.5], [2.75, 1.875], [3, 3], [3.25, 3.875], [3.5, 4.5], [3.75, 4.875],
                    [4, 5], [4.25, 4.875], [4.5, 4.5], [4.75, 3.875], [5, 3], [5.25, 1.875],
                    [5.5, 0.5]
                  ]
                }
              }
            },
            {
              metin: "4) 3 yukarı: −2(x − 1)² + 3. Köşe (1, 3), en büyük değer 3.",
              set: {
                c: {
                  noktalar: [
                    [2.5, 3.5], [2.75, 4.875], [3, 6], [3.25, 6.875], [3.5, 7.5], [3.75, 7.875],
                    [4, 8], [4.25, 7.875], [4.5, 7.5], [4.75, 6.875], [5, 6], [5.25, 4.875],
                    [5.5, 3.5]
                  ]
                },
                v: { x: 4, y: 8, etiket: "(1, 3)" }
              }
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Altı dönüşüm tek tabloda",
          head: ["Denklem", "Dönüşüm", "Nokta kuralı"],
          rows: [
            ["y = f(x) + c", "dikey öteleme", "(x, y + c)"],
            ["y = f(x − c)", "yatay öteleme (c > 0 sağa)", "(x + c, y)"],
            ["y = a·f(x)", "dikey germe / sıkıştırma", "(x, a·y)"],
            ["y = f(ax)", "yatay sıkıştırma / germe", "(x/a, y)"],
            ["y = −f(x)", "x eksenine yansıma", "(x, −y)"],
            ["y = f(−x)", "y eksenine yansıma", "(−x, y)"]
          ],
          not: "Birden çok dönüşüm verilirse sırayla uygulanır; sıra değişince denklem değişir (aşağıdaki tuzağa bak). Genel biçim a·f(b(x − c)) + d (ek bilgi): a dikey, b yatay çarpan; burada önce germe ve yansıma, sonra öteleme yapılır."
        },
        {
          tip: "ornek",
          baslik: "Dönüşümden denklem yazmak ve noktayı izlemek",
          durum: "y = √x grafiği önce x eksenine yansıtılıyor, sonra 2 sola, sonra 3 aşağı kaydırılıyor. Denklem ve (4, 2) noktasının yeni yeri?",
          adimlar: [
            "x eksenine yansıma: y = −√x.",
            "2 sola: x yerine (x + 2): y = −√(x + 2).",
            "3 aşağı: sonuna −3: y = −√(x + 2) − 3.",
            "(4, 2) noktası: yansıtınca (4, −2); 2 sola (2, −2); 3 aşağı (2, −5).",
            "Kontrol: x = 2 için −√4 − 3 = −2 − 3 = −5 ✓. Başlangıç noktası (0, 0) ise (−2, −3)'e gitti."
          ],
          sonuc: "g(x) = −√(x + 2) − 3, domain [−2, ∞). Sınavda böyle yaz: *The graph of g is the graph of f reflected in the x-axis, shifted 2 units left and 3 units down.*"
        },
        {
          tip: "tuzak",
          metin: "Dönüşümler verilen sırayla uygulanır; germe, önceki kaymayı da ölçekler.",
          yanlis: "√x'i 3 sola, 4 aşağı kaydırıp sonra dikey 2 ile germek de 2√(x + 3) − 4 verir.",
          dogru: "3 sola, dikey ×2 germe, 4 aşağı: 2√(x + 3) − 4. 3 sola, 4 aşağı, sonra ×2 germe: 2(√(x + 3) − 4) = 2√(x + 3) − 8. Sıra değişince sonuç değişir."
        }
      ]
    },
    {
      baslik: "Nokta, kök ve sıra: dönüşümleri uygulamak",
      kisa: "İçteki ifade x'i, dıştaki ifade y'yi değiştirir; adımları sırayla uygula.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "P(2, −3) noktası f grafiğinde; yeni grafikte nerede?",
          head: ["Yeni grafik", "P'nin yeni yeri"],
          rows: [
            ["y = f(x) + 3", "(2, 0)"],
            ["y = f(x + 3)", "(−1, −3)"],
            ["y = f(x − 1)", "(3, −3)"],
            ["y = 3f(x)", "(2, −9)"],
            ["y = f(3x)", "(2/3, −3)"],
            ["y = −f(x)", "(2, 3)"],
            ["y = f(−x)", "(−2, −3)"],
            ["y = f(x − 3) + 1", "(5, −2)"],
            ["y = 3f(2x) − 1", "(1, −10)"],
            ["y = 4 − f(3x − 1)", "(1, 7)"]
          ],
          not: "Kural: içteki ifadeyi eski x'i verecek şekilde çöz, dıştakini y'ye uygula. Son satır: 3x − 1 = 2 → x = 1; y = 4 − (−3) = 7."
        },
        {
          tip: "ornek",
          baslik: "Denklemin köklerini dönüşümle bul",
          durum: "x³ − x + 4 = 0 denkleminin gerçek kökü üç ondalık basamakla −1,796'dır. (x − 1)³ − (x − 1) + 4 = 0 ve 8x³ − 2x + 4 = 0 denklemlerinin gerçek kökleri nedir?",
          adimlar: [
            "p(t) = t³ − t + 4 olsun. (x − 1)³ − (x − 1) + 4 = p(x − 1). p(t) = 0 için t ≈ −1,796.",
            "x − 1 = −1,796 → x ≈ −0,796. Grafik 1 birim sağa kaydı, kök de 1 birim sağa kaydı.",
            "8x³ − 2x + 4 = (2x)³ − (2x) + 4 = p(2x). 2x ≈ −1,796 → x ≈ −0,898.",
            "Grafik yatayda yarıya sıkıştı, kök de yarıya indi."
          ],
          sonuc: "x ≈ −0,796 ve x ≈ −0,898. Sınavda böyle yaz: *Replacing x with x − 1 shifts the graph, and therefore the root, 1 unit to the right.*"
        },
        {
          tip: "ornek",
          baslik: "f(x) = √x ile adım adım: sıra önemli",
          durum: "Her dönüşüm listesini verilen sırayla uygula.",
          adimlar: [
            "x eksenine yansıt, sonra 1 yukarı: −√x, sonra +1 → −√x + 1.",
            "1 yukarı, sonra x eksenine yansıt: √x + 1, sonra hepsinin işareti döner → −(√x + 1) = −√x − 1.",
            "1 sola, y eksenine yansıt, 2 yukarı: √(x + 1); x yerine −x: √(−x + 1); +2 → √(1 − x) + 2.",
            "3 sağa, yatay ×2 sıkıştırma, 1 yukarı: √(x − 3); x yerine 2x: √(2x − 3); +1 → √(2x − 3) + 1."
          ],
          sonuc: "Her adım, o ana kadar elde edilen fonksiyona uygulanır; ilk iki satır bu yüzden farklı çıkar (+1 ya da −1). Sınavda böyle yaz: *First reflect in the x-axis, then shift up 1 unit.*"
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
            "Ana fonksiyonlar: x, x², x³, |x|, √x, 1/x; dönüşümlerle aile oluşur.",
            "f(x) + c: dikey öteleme; c > 0 yukarı.",
            "f(x − c): yatay öteleme; c > 0 sağa. Köşe, parantez içini sıfır yapan x'tedir.",
            "−f(x): x eksenine, f(−x): y eksenine göre yansıma.",
            "a·f(x): dikey germe (|a| > 1) ya da sıkıştırma (0 < |a| < 1); y-kesişimi a ile çarpılır.",
            "f(ax): x'ler 1/a ile çarpılır; a > 1 sıkıştırır, 0 < a < 1 gerer; y-kesişimi sabit.",
            "Nokta kuralı (ek bilgi): a·f(b(x − c)) + d için (x, y) → (x/b + c, a·y + d).",
            "Dönüşümler verilen sırayla uygulanır; sıra değişirse denklem değişir. Cümle: *g is f shifted … reflected … stretched …*"
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "How is the graph of y = −2√(x + 3) + 1 obtained from the graph of y = √x?",
      opts: [
        "Shift 3 units left, stretch vertically by a factor of 2, reflect in the x-axis, shift 1 unit up",
        "Shift 3 units right, stretch vertically by a factor of 2, reflect in the x-axis, shift 1 unit up",
        "Shift 3 units left, stretch horizontally by a factor of 2, reflect in the y-axis, shift 1 unit down",
        "Shift 3 units left, stretch vertically by a factor of 2, reflect in the y-axis, shift 1 unit up"
      ],
      a: 0,
      why: "(x + 3) içeride: 3 sola. −2 dışarıda: dikey ×2 germe ve x eksenine yansıma. +1 dışarıda: 1 yukarı. B seçeneği yönü yanlış alır (+3 sağa değil, sola). D, dıştaki eksiyi y eksenine yansıma sanıyor."
    },
    {
      q: "The point (4, −6) lies on the graph of f. Which point lies on the graph of g(x) = 3f(x − 2) + 1?",
      opts: ["(2, −17)", "(6, −15)", "(6, −17)", "(6, −5)"],
      a: 2,
      why: "x − 2 = 4 → x = 6 (2 sağa). y: 3·(−6) + 1 = −17 (önce 3 ile çarp, sonra 1 ekle). (6, −15) sırayı karıştırır: 3(−6 + 1). (6, −5) ×3'ü unutur. (2, −17) kaydırmayı ters yönde yapar."
    },
    {
      q: "Let f(x) = x² − 4. What are the x-intercepts of g(x) = f(2x)?",
      opts: ["x = ±4", "x = ±1", "x = ±2", "x = ±1/4"],
      a: 1,
      why: "g(x) = (2x)² − 4 = 4x² − 4 = 0 → x = ±1. f(2x) yatayda yarıya sıkıştırır: f'nin x-kesişimleri ±2 idi, şimdi ±1. A seçeneği 2 katına gerilmiş (f(x/2) için) olurdu."
    },
    {
      q: "The solid graph is f(x) and the dashed graph is g(x). Which transformation of f gives g?",
      fig: {
        type: "graph",
        xlabel: "x",
        ylabel: "y",
        xmax: 9,
        ymax: 6,
        xticks: [
          { v: 1, label: "1" },
          { v: 2, label: "2" },
          { v: 3, label: "3" },
          { v: 4, label: "4" },
          { v: 5, label: "5" },
          { v: 6, label: "6" },
          { v: 7, label: "7" },
          { v: 8, label: "8" }
        ],
        yticks: [
          { v: 1, label: "1" },
          { v: 2, label: "2" },
          { v: 3, label: "3" },
          { v: 4, label: "4" },
          { v: 5, label: "5" }
        ],
        lines: [
          { from: [1, 4], to: [3, 2], label: "f", color: 0 },
          { from: [3, 2], to: [5, 4], label: "", color: 0 },
          { from: [3, 4], to: [5, 2], label: "g", color: 2, dash: true },
          { from: [5, 2], to: [7, 4], label: "", color: 2, dash: true }
        ]
      },
      opts: ["f(x) + 2", "f(x + 2)", "f(x) − 2", "f(x − 2)"],
      a: 3,
      why: "f'nin köşesi (3, 2), g'nin köşesi (5, 2): grafik aynı yükseklikte 2 birim sağa kaymış. Sağa kayma f(x − 2) ile yazılır. B seçeneği (f(x + 2)) sola kayma olurdu; A ve C dikey kaymadır."
    },
    {
      q: "The graph of f crosses the x-axis at x = −2 and x = 3, and the y-axis at y = −6. Which statement is true?",
      opts: [
        "y = −f(x) has x-intercepts 2 and −3 and y-intercept −6",
        "y = −f(x) has x-intercepts −2 and 3 and y-intercept 6",
        "y = f(−x) has x-intercepts −2 and 3 and y-intercept 6",
        "y = f(−x) has x-intercepts 2 and −3 and y-intercept 6"
      ],
      a: 1,
      why: "−f(x) yalnız y'leri çevirir: x-kesişimleri aynı kalır (−2, 3), y-kesişimi −6 → 6. f(−x) yalnız x'leri çevirir: x-kesişimleri 2 ve −3, y-kesişimi aynı kalır (−6). Diğer şıklar bu iki etkiyi karıştırıyor."
    }
  ]
};
