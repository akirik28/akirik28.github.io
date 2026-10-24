/* Kitpath not defteri · cb804 · AP Calculus BC 8.4–8.5
   Video kiti yok; içerik College Board CED öğrenme hedeflerine göre yazıldı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb804",
  amac: "Bu konu iki eğri arasında kalan bölgenin alanını integralle bulmayı anlatıyor: x'e göre alan = ∫(üst − alt) dx, y'ye göre alan = ∫(sağ − sol) dy. Sınırları bulmayı, hangi eğrinin üstte olduğunu belirlemeyi ve dilim yönünü seçmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Alan = üst − alt",
      kisa: "İki eğri arasındaki alan, üst eğri eksi alt eğrinin integralidir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            {
              t: "A",
              alt: "iki eğri arasındaki alan"
            },
            "=",
            {
              t: "∫ₐᵇ",
              alt: "kesişimler ya da verilen sınırlar"
            },
            {
              t: "[ f(x) − g(x) ]",
              alt: "üst − alt"
            },
            {
              t: "dx"
            }
          ],
          aciklama: "Burada ==f(x) ≥ g(x)== olmalı. Eksenin altında kalan bölgelerde de çalışır: fark yine pozitiftir, çünkü her x'te f(x) ≥ g(x); dilimin yüksekliği f − g, eğrilerin eksene göre yerinden bağımsızdır."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🍰",
              terim: "Representative rectangle",
              tr: "tipik dilim",
              tanim: "Bölgeyi ince bir dikdörtgenle kesince elde edilen dilim: yüksekliği (üst − alt), genişliği dx. Alan, bu dilimlerin toplamıdır.",
              ornek: "x = 1,5'te dilimin yüksekliği f(1,5) − g(1,5)."
            },
            {
              ikon: "📍",
              terim: "Points of intersection",
              tr: "kesişim noktaları",
              tanim: "f(x) = g(x) denklemini çözünce bulunan x değerleri; bölgenin sol ve sağ sınırı olur.",
              ornek: "4x − x² = x denkleminin kökleri x = 0 ve x = 3."
            }
          ]
        }
      ]
    },
    {
      baslik: "Adım adım bir bölge",
      kisa: "Eğrileri çiz, kesişimi bul, dilimi çiz, sonra integral kur.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "f(x) = 4x − x² ve g(x) = x",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 5,
          xticks: [
            {
              v: 1,
              label: "1"
            },
            {
              v: 2,
              label: "2"
            },
            {
              v: 3,
              label: "3"
            },
            {
              v: 4,
              label: "4"
            }
          ],
          yticks: [
            {
              v: 2,
              label: "2"
            },
            {
              v: 4,
              label: "4"
            }
          ],
          ogeler: [
            {
              id: "f",
              tip: "egri",
              renk: 0,
              etiket: "f",
              noktalar: [[0, 0], [0.25, 0.938], [0.5, 1.75], [0.75, 2.438], [1, 3], [1.25, 3.438], [1.5, 3.75], [1.75, 3.938], [2, 4], [2.25, 3.938], [2.5, 3.75], [2.75, 3.438], [3, 3], [3.25, 2.438], [3.5, 1.75], [3.75, 0.938], [4, 0]]
            },
            {
              id: "g",
              tip: "cizgi",
              renk: 2,
              from: [0, 0],
              to: [4, 4],
              etiket: "g"
            },
            {
              id: "p0",
              tip: "nokta",
              renk: 1,
              x: 0,
              y: 0,
              etiket: "x = 0",
              gizli: true
            },
            {
              id: "p3",
              tip: "nokta",
              renk: 1,
              x: 3,
              y: 3,
              etiket: "x = 3",
              kilavuz: true,
              gizli: true
            },
            {
              id: "a",
              tip: "alan",
              renk: 0,
              gizli: true,
              noktalar: [[0, 0], [0.125, 0.484], [0.25, 0.938], [0.375, 1.359], [0.5, 1.75], [0.625, 2.109], [0.75, 2.438], [0.875, 2.734], [1, 3], [1.125, 3.234], [1.25, 3.438], [1.375, 3.609], [1.5, 3.75], [1.625, 3.859], [1.75, 3.938], [1.875, 3.984], [2, 4], [2.125, 3.984], [2.25, 3.938], [2.375, 3.859], [2.5, 3.75], [2.625, 3.609], [2.75, 3.438], [2.875, 3.234], [3, 3], [3, 3], [2.875, 2.875], [2.75, 2.75], [2.625, 2.625], [2.5, 2.5], [2.375, 2.375], [2.25, 2.25], [2.125, 2.125], [2, 2], [1.875, 1.875], [1.75, 1.75], [1.625, 1.625], [1.5, 1.5], [1.375, 1.375], [1.25, 1.25], [1.125, 1.125], [1, 1], [0.875, 0.875], [0.75, 0.75], [0.625, 0.625], [0.5, 0.5], [0.375, 0.375], [0.25, 0.25], [0.125, 0.125], [0, 0]]
            },
            {
              id: "s",
              tip: "cizgi",
              renk: 1,
              from: [1.5, 1.5],
              to: [1.5, 3.75],
              etiket: "f − g",
              gizli: true
            },
            {
              id: "ta",
              tip: "yazi",
              renk: 0,
              x: 2.3,
              y: 3,
              metin: "A = 9/2",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Üstte parabol f, altta doğru g."
            },
            {
              metin: "Kesişim: 4x − x² = x → x(3 − x) = 0 → x = 0 ve x = 3. Bunlar bölgenin sınırları.",
              goster: [
                "p0",
                "p3"
              ]
            },
            {
              metin: "Aradaki bölge: [0, 3] üzerinde f ≥ g.",
              goster: [
                "a"
              ]
            },
            {
              metin: "Tipik dilim x = 1,5'te: yüksekliği f − g = 3,75 − 1,5 = 2,25. Dilimleri topla.",
              goster: [
                "s"
              ]
            },
            {
              metin: "A = ∫₀³ (3x − x²) dx = [3x²/2 − x³/3]₀³ = 27/2 − 9 = 9/2.",
              goster: [
                "ta"
              ]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "y = √x ve y = x²",
          durum: "İki eğri arasındaki alanı bul.",
          adimlar: [
            "Kesişim: √x = x² → x = 0 ve x = 1.",
            "Test noktası x = 0,25: √x = 0,5 ve x² = 0,0625; üstte √x.",
            "A = ∫₀¹ (√x − x²) dx = [2x^(3/2)/3 − x³/3]₀¹ = 2/3 − 1/3 = 1/3."
          ],
          sonuc: "A = 1/3"
        }
      ]
    },
    {
      baslik: "y'ye göre alan: sağ − sol",
      kisa: "Yatay dilim çiz; uzunluğu sağ eğri eksi sol eğridir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            {
              t: "A",
              alt: "alan"
            },
            "=",
            {
              t: "∫_c^d",
              alt: "y sınırları"
            },
            {
              t: "[ R(y) − L(y) ]",
              alt: "sağ − sol"
            },
            {
              t: "dy"
            }
          ],
          aciklama: "Eğriler x = R(y) ve x = L(y) biçiminde yazılır. Dilim yatay, kalınlığı dy; sınırlar y eksenindeki değerlerdir."
        },
        {
          tip: "grafik",
          baslik: "y = √x, y = x − 2 ve x ekseni",
          xlabel: "x",
          ylabel: "y",
          xmax: 5,
          ymax: 3,
          xticks: [
            {
              v: 1,
              label: "1"
            },
            {
              v: 2,
              label: "2"
            },
            {
              v: 3,
              label: "3"
            },
            {
              v: 4,
              label: "4"
            }
          ],
          yticks: [
            {
              v: 1,
              label: "1"
            },
            {
              v: 2,
              label: "2"
            }
          ],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              renk: 0,
              etiket: "√x",
              noktalar: [[0, 0], [0.125, 0.354], [0.25, 0.5], [0.375, 0.612], [0.5, 0.707], [0.625, 0.791], [0.75, 0.866], [0.875, 0.935], [1, 1], [1.125, 1.061], [1.25, 1.118], [1.375, 1.173], [1.5, 1.225], [1.625, 1.275], [1.75, 1.323], [1.875, 1.369], [2, 1.414], [2.125, 1.458], [2.25, 1.5], [2.375, 1.541], [2.5, 1.581], [2.625, 1.62], [2.75, 1.658], [2.875, 1.696], [3, 1.732], [3.125, 1.768], [3.25, 1.803], [3.375, 1.837], [3.5, 1.871], [3.625, 1.904], [3.75, 1.936], [3.875, 1.969], [4, 2]]
            },
            {
              id: "l",
              tip: "cizgi",
              renk: 2,
              from: [2, 0],
              to: [4, 2],
              etiket: "x − 2"
            },
            {
              id: "a",
              tip: "alan",
              renk: 0,
              gizli: true,
              noktalar: [[0, 0], [0.125, 0.354], [0.25, 0.5], [0.375, 0.612], [0.5, 0.707], [0.625, 0.791], [0.75, 0.866], [0.875, 0.935], [1, 1], [1.125, 1.061], [1.25, 1.118], [1.375, 1.173], [1.5, 1.225], [1.625, 1.275], [1.75, 1.323], [1.875, 1.369], [2, 1.414], [2.125, 1.458], [2.25, 1.5], [2.375, 1.541], [2.5, 1.581], [2.625, 1.62], [2.75, 1.658], [2.875, 1.696], [3, 1.732], [3.125, 1.768], [3.25, 1.803], [3.375, 1.837], [3.5, 1.871], [3.625, 1.904], [3.75, 1.936], [3.875, 1.969], [4, 2], [4, 2], [2, 0]]
            },
            {
              id: "d",
              tip: "cizgi",
              renk: 1,
              kesik: true,
              from: [2, 0],
              to: [2, 3],
              gizli: true
            },
            {
              id: "s1",
              tip: "cizgi",
              renk: 1,
              from: [1, 0],
              to: [1, 1],
              etiket: "alt: y = 0",
              gizli: true
            },
            {
              id: "s2",
              tip: "cizgi",
              renk: 1,
              from: [3, 1],
              to: [3, 1.732],
              etiket: "alt: x − 2",
              gizli: true
            },
            {
              id: "h",
              tip: "cizgi",
              renk: 2,
              from: [1, 1],
              to: [3, 1],
              etiket: "R − L",
              gizli: true
            },
            {
              id: "ta",
              tip: "yazi",
              renk: 0,
              x: 1.5,
              y: 0.5,
              metin: "A = 10/3",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Parabolün yarısı √x ve doğru y = x − 2; ikisi (4, 2)'de kesişir."
            },
            {
              metin: "Bölge: √x'in altında, x eksenin üstünde ve doğrunun solunda.",
              goster: [
                "a"
              ]
            },
            {
              metin: "Dikey dilimde alt sınır x = 2'de değişir (önce eksen, sonra doğru): iki ayrı integral gerekir.",
              goster: [
                "d",
                "s1",
                "s2"
              ]
            },
            {
              metin: "Yatay dilimde sol eğri hep x = y², sağ eğri hep x = y + 2: tek integral yeter.",
              gizle: [
                "d",
                "s1",
                "s2"
              ],
              goster: [
                "h"
              ]
            },
            {
              metin: "A = ∫₀² (y + 2 − y²) dy = [y²/2 + 2y − y³/3]₀² = 2 + 4 − 8/3 = 10/3.",
              goster: [
                "ta"
              ]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "x = y² ve x = y + 2",
          durum: "Aralarındaki alanı y'ye göre bul.",
          adimlar: [
            "Kesişim: y² = y + 2 → (y − 2)(y + 1) = 0 → y = −1 ve y = 2.",
            "y = 0'da: y² = 0, y + 2 = 2; sağda x = y + 2.",
            "A = ∫₋₁² (y + 2 − y²) dy = [y²/2 + 2y − y³/3]₋₁² = 10/3 − (−7/6) = 9/2."
          ],
          sonuc: "A = 9/2"
        }
      ]
    },
    {
      baslik: "Hangi yönde dilimlemeli?",
      kisa: "Üst ve alt eğri değişmiyorsa dx, sağ ve sol eğri değişmiyorsa dy.",
      bloklar: [
        {
          tip: "ikili",
          sol: {
            ikon: "↕️",
            baslik: "Dikey dilim, *dx*",
            maddeler: [
              "Üst − alt: ∫ [f(x) − g(x)] dx",
              "Sınırlar x değerleri"
            ]
          },
          sag: {
            ikon: "↔️",
            baslik: "Yatay dilim, *dy*",
            maddeler: [
              "Sağ − sol: ∫ [R(y) − L(y)] dy",
              "Sınırlar y değerleri"
            ]
          },
          oyun: [
            {
              metin: "Bölgenin altı x = 2'de eğri değiştiriyor, üstü hep aynı eğri.",
              cevap: "sag",
              neden: "Yatay dilimde sol ve sağ eğri sabit kalır."
            },
            {
              metin: "Kesişim noktaları x = 0 ve x = 3.",
              cevap: "sol",
              neden: "x sınırları dx integraline işaret eder."
            },
            {
              metin: "Eğriler x = y² ve x = 2y biçiminde verilmiş.",
              cevap: "sag",
              neden: "x'i y cinsinden yazılan eğrilerde dy daha doğal."
            },
            {
              metin: "Dilimin yüksekliği f(x) − g(x).",
              cevap: "sol",
              neden: "Dikey dilimin uzunluğu üst eksi alttır."
            }
          ]
        },
        {
          tip: "tuzak",
          metin: "Üst ve alt ya da sağ ve sol karıştırılırsa alan eksi çıkar. Alan eksi olamaz; işareti çevirmek yerine eğrilerin yerini kontrol et.",
          yanlis: "A = ∫₀³ (x − (4x − x²)) dx = −9/2.",
          dogru: "Test noktası al (x = 1,5): f = 3,75 > g = 1,5. Üst f; A = ∫₀³ (f − g) dx = 9/2."
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
            "x'e göre alan: A = ∫ₐᵇ [üst − alt] dx, f ≥ g olmalı.",
            "y'ye göre alan: A = ∫_c^d [sağ − sol] dy; eğriler x = R(y), x = L(y).",
            "Sınırlar kesişimlerden gelir: f = g denklemini çöz (gerekirse hesap makinesi).",
            "Test noktasıyla hangi eğrinin üstte (sağda) olduğunu doğrula.",
            "Tipik dilimi çiz: uzunluğu integralin içi, kalınlığı dx ya da dy.",
            "Eğri sayısı değişiyorsa dilim yönünü değiştir ya da integrali parçala.",
            "Alan hiçbir zaman eksi olamaz. Eksi sonuç, üst-alt yerlerinin karıştığını gösterir.",
            "Eksenin altında kalan bölgeler de aynı formülle bulunur."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "y = x² parabolü ile y = 4 doğrusu arasında kalan bölgenin alanı kaçtır?",
      opts: [
        "16/3",
        "32/3",
        "16",
        "64/3"
      ],
      a: 1,
      why: "Kesişimler x = ±2. A = ∫₋₂² (4 − x²) dx = 2(8 − 8/3) = 32/3. 16/3 bölgenin yalnızca yarısıdır (x ≥ 0 tarafı); 16 ise 4 · 4 dikdörtgeninin alanıdır (parabol çıkarılmamış)."
    },
    {
      q: "x = y² ve x = y + 2 eğrileri arasında kalan bölgenin alanı kaçtır?",
      opts: [
        "9/2",
        "−9/2",
        "9",
        "3/2"
      ],
      a: 0,
      why: "Kesişim y = −1 ve y = 2. Sağda x = y + 2, solda x = y². A = ∫₋₁² (y + 2 − y²) dy = 9/2. −9/2, sağ-sol yer değiştirmiş integraldir; alan eksi olamaz."
    },
    {
      q: "f(x) = 2x ve g(x) = x² eğrileri arasında kalan bölgenin alanını hangi integral verir? Tablodaki değerlere bakınız.",
      opts: [
        "∫₀² (x² − 2x) dx",
        "∫₀⁴ (2x − x²) dx",
        "∫₀² (2x + x²) dx",
        "∫₀² (2x − x²) dx"
      ],
      a: 3,
      fig: {
        type: "table",
        head: [
          "x",
          "0",
          "1",
          "2"
        ],
        rows: [
          [
            "f(x) = 2x",
            "0",
            "2",
            "4"
          ],
          [
            "g(x) = x²",
            "0",
            "1",
            "4"
          ]
        ]
      },
      why: "Tablo f(x) = g(x)'in x = 0 ve x = 2'de olduğunu, arada f > g olduğunu gösterir (x = 1'de 2 > 1). Üst − alt = 2x − x², sınırlar 0 ve 2. Birinci şık çıkarmayı ters kurar; ikinci şıkta üst sınır yanlış."
    },
    {
      q: "x = y² ve x = 2y (y ≥ 0) eğrilerinin sınırladığı bölgenin alanı kaçtır?",
      opts: [
        "8/3",
        "−4/3",
        "4/3",
        "4"
      ],
      a: 2,
      why: "Kesişim y = 0 ve y = 2. y = 1'de 2y = 2 > y² = 1: sağda x = 2y. A = ∫₀² (2y − y²) dy = 4 − 8/3 = 4/3. −4/3, sağ ve solun ters yazılmasıyla çıkar."
    },
    {
      q: "f ve g, [1, 4] üzerinde sürekli ve f(x) ≥ g(x) olsun. ∫₁⁴ f(x) dx = 20 ve ∫₁⁴ g(x) dx = 12 ise eğriler arasındaki alan kaçtır?",
      opts: [
        "8",
        "32",
        "12",
        "20"
      ],
      a: 0,
      why: "A = ∫₁⁴ (f − g) dx = 20 − 12 = 8. 32 iki integralin toplamıdır; fark gerekir. 20 ve 12 tek başına ilgili eğrinin altındaki alandır."
    }
  ]
};
