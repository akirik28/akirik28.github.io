/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/cb2N/questions.json) */
window.KIT = {
  "store": "calcbc-u2:v1:",
  "course": "AP Calculus BC",
  "unitLabel": "Unit 2 — Differentiation: Definition and Fundamental Properties",
  "denemeler": {
    "url": "deneme/",
    "count": 5
  },
  "episodes": [
    {
      "no": 1,
      "code": "2.1",
      "slug": "cb201",
      "title": "Ortalama ve Anlık Değişim Hızı",
      "en": "Average and Instantaneous Rates of Change",
      "accent": "#F6B94A",
      "seconds": 274,
      "terms": [
        "Average rate of change",
        "Instantaneous rate of change",
        "Secant line",
        "Tangent line",
        "Difference quotient",
        "Slope",
        "Interval",
        "Units of rate",
        "Limit"
      ],
      "questions": [
        {
          "q": "f(x) = x² + 3x fonksiyonunun [1, 4] aralığındaki *average rate of change* değeri kaçtır?",
          "opts": [
            "24",
            "7",
            "8",
            "11"
          ],
          "a": 2,
          "why": "f(4) = 16 + 12 = 28, f(1) = 1 + 3 = 4. (28 − 4)/(4 − 1) = 24/3 = 8. 24 toplam değişimdir; aralığın uzunluğuna bölmek gerekir."
        },
        {
          "q": "Bir şehirde sıcaklık T(t) (°C), t saat olmak üzere tabloda verilmiştir. 2 ≤ t ≤ 8 aralığında sıcaklığın ortalama değişim hızı nedir?",
          "opts": [
            "−3 °C/saat",
            "−0,5 °C/saat",
            "0,5 °C/saat",
            "−2 °C/saat"
          ],
          "a": 1,
          "why": "(T(8) − T(2))/(8 − 2) = (15 − 18)/6 = −3/6 = −0,5. Birim, çıktı birimi bölü girdi birimi: °C/saat. Eksi işareti sıcaklığın ortalamada düştüğünü gösterir.",
          "fig": {
            "type": "table",
            "head": [
              "t (saat)",
              "0",
              "2",
              "5",
              "8"
            ],
            "rows": [
              [
                "T(t) (°C)",
                "12",
                "18",
                "24",
                "15"
              ]
            ],
            "caption": "Seçilmiş saatlerdeki sıcaklık"
          }
        },
        {
          "q": "f(x) = 2x² için lim (h → 0) (f(1 + h) − f(1))/h kaçtır?",
          "opts": [
            "4",
            "2",
            "0",
            "Limit yoktur"
          ],
          "a": 0,
          "why": "f(1 + h) − f(1) = 2(1 + 2h + h²) − 2 = 4h + 2h². h'ye bölünce 4 + 2h; h → 0 iken 4. Bu, x = 1'deki *instantaneous rate of change*."
        },
        {
          "q": "lim (x → 2) (x⁴ − 16)/(x − 2) limiti aşağıdakilerden hangisinin anlık değişim hızıdır?",
          "opts": [
            "f(x) = x⁴ − 16 fonksiyonunun x = 16'daki",
            "f(x) = x² fonksiyonunun x = 4'teki",
            "f(x) = x⁴ fonksiyonunun x = 16'daki",
            "f(x) = x⁴ fonksiyonunun x = 2'deki"
          ],
          "a": 3,
          "why": "Kalıp lim (x → a) (f(x) − f(a))/(x − a). Burada a = 2 ve f(2) = 16 olmalı: f(x) = x⁴. (f(x) = x⁴ − 16 de olurdu, ama o zaman da nokta x = 2'dir, 16 değil.)"
        },
        {
          "q": "Grafikteki f fonksiyonu 0 ≤ x ≤ 4 aralığında doğru parçalarından oluşuyor. Aşağıdakilerden hangisi doğrudur?",
          "opts": [
            "f'nin [0, 4] üzerindeki ortalama değişim hızı 0'dır",
            "f, [0, 4] üzerinde sabittir",
            "f'nin [0, 2] üzerindeki ortalama değişim hızı 0'dır",
            "f'nin [2, 4] üzerindeki ortalama değişim hızı 1'dir"
          ],
          "a": 0,
          "why": "f(0) = 2 ve f(4) = 2, yani (2 − 2)/4 = 0. Ama f sabit değil: [0, 2]'de 2'den 5'e çıkar (ortalama 3/2), [2, 4]'te 5'ten 2'ye iner (ortalama −3/2). Ortalama hız 0 olması yalnızca iki ucun aynı yükseklikte olduğunu söyler.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 5,
            "ymax": 6,
            "lines": [
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  2,
                  5
                ],
                "label": ""
              },
              {
                "from": [
                  2,
                  5
                ],
                "to": [
                  4,
                  2
                ],
                "label": "f"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 2,
                "label": "(0, 2)"
              },
              {
                "q": 2,
                "p": 5,
                "label": "(2, 5)"
              },
              {
                "q": 4,
                "p": 2,
                "label": "(4, 2)"
              }
            ],
            "xticks": [
              {
                "v": 2,
                "label": "2"
              },
              {
                "v": 4,
                "label": "4"
              }
            ],
            "yticks": [
              {
                "v": 2,
                "label": "2"
              },
              {
                "v": 5,
                "label": "5"
              }
            ],
            "caption": "f'nin grafiği"
          }
        }
      ]
    },
    {
      "no": 2,
      "code": "2.2",
      "slug": "cb202",
      "title": "Türevin Tanımı ve Gösterimleri",
      "en": "Defining the Derivative",
      "accent": "#2FD6B9",
      "seconds": 278,
      "terms": [
        "Derivative",
        "Definition of the derivative",
        "Differentiable",
        "Lagrange notation",
        "Leibniz notation",
        "Tangent line",
        "Point-slope form",
        "Rate of change",
        "Units"
      ],
      "questions": [
        {
          "q": "lim (h → 0) [(x + h)² + 4(x + h) − x² − 4x]/h ifadesi neye eşittir?",
          "opts": [
            "2x",
            "2x + 4",
            "x² + 4x",
            "2x + 4h"
          ],
          "a": 1,
          "why": "Bu, f(x) = x² + 4x için türevin tanımı. Pay 2xh + h² + 4h; h'ye bölünce 2x + h + 4; h → 0 iken 2x + 4."
        },
        {
          "q": "V(t), bir havuzdaki su miktarıdır (litre), t dakika. V′(5) = −3 ifadesinin anlamı nedir?",
          "opts": [
            "5. dakikada havuzda 3 litre su vardır",
            "İlk 5 dakikada havuzdan 3 litre su boşalmıştır",
            "t = 5 dakikada havuzdaki su miktarı dakikada 3 litre hızla azalmaktadır",
            "t = 5 dakikada su seviyesi 3 metre düşmüştür"
          ],
          "a": 2,
          "why": "Türev bir hızdır: birimi litre/dakika. Eksi işaret azalma demek. V′(5), 5. dakikadaki anlık hızı verir; toplam miktarı ya da toplam değişimi değil."
        },
        {
          "q": "f(−1) = 4 ve f′(x) = x² + 3 olduğuna göre, f'nin x = −1'deki teğet doğrusunun denklemi hangisidir?",
          "opts": [
            "y − 4 = 4(x − 1)",
            "y − 4 = 2(x + 1)",
            "y − 4 = 4(x + 1)",
            "y + 1 = 4(x − 4)"
          ],
          "a": 2,
          "why": "Nokta (−1, 4), eğim f′(−1) = (−1)² + 3 = 4. y − 4 = 4(x − (−1)) = 4(x + 1). (−1)²'yi −1 sanırsan eğimi yanlışlıkla 2 bulursun."
        },
        {
          "q": "Şekildeki doğru, f'nin grafiğine x = 0'da teğettir ve (0, 3) ile (3, 0) noktalarından geçer. Hangisi doğrudur?",
          "opts": [
            "f(0) = 3 ve f′(0) = −1",
            "f(0) = 3 ve f′(0) = 3",
            "f(0) = 0 ve f′(0) = −1",
            "f(0) = 3 ve f′(0) = 1"
          ],
          "a": 0,
          "why": "Teğet, eğriye (0, f(0))'da dokunur, yani f(0) = 3. Teğetin eğimi (0 − 3)/(3 − 0) = −1 = f′(0).",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 4,
            "ymax": 4,
            "lines": [
              {
                "from": [
                  0,
                  3
                ],
                "to": [
                  3,
                  0
                ],
                "label": "teğet"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 3,
                "label": "(0, 3)"
              },
              {
                "q": 3,
                "p": 0,
                "label": "(3, 0)"
              }
            ],
            "xticks": [
              {
                "v": 3,
                "label": "3"
              }
            ],
            "yticks": [
              {
                "v": 3,
                "label": "3"
              }
            ],
            "caption": "f'nin x = 0'daki teğet doğrusu"
          }
        },
        {
          "q": "Bir öğrenci f(x) = x² − 3x için türevi tanımla bulurken f(x + h) − f(x) = (x + h)² − 3(x + h) − x² − 3x yazıyor. Değerlendirme hangisi?",
          "opts": [
            "Doğru; sonuç 2x − 3 çıkar",
            "f(x) parantez içinde çıkarılmadı; doğrusu ... − x² + 3x ve f′(x) = 2x − 3",
            "Hata yok ama sonuç 2x + 3'tür",
            "f(x + h) yanlış açılmış; doğrusu x² + h² − 3x − 3h"
          ],
          "a": 1,
          "why": "f(x) = x² − 3x'in tamamı çıkarılmalı: −(x² − 3x) = −x² + 3x. O zaman pay 2xh + h² − 3h, h'ye bölüp h → 0: 2x − 3. Öğrencinin yazdığıyla −6x sabit terimi kalır ve h'ye bölünce limit sonsuza kaçar."
        }
      ]
    },
    {
      "no": 3,
      "code": "2.3",
      "slug": "cb203",
      "title": "Türevi Tahmin Etmek",
      "en": "Estimating Derivatives",
      "accent": "#58C9FF",
      "seconds": 267,
      "terms": [
        "Estimate",
        "Difference quotient",
        "Secant line",
        "Tangent line",
        "Units",
        "Differentiable",
        "Graph of f′",
        "Numerical derivative",
        "Calculator active"
      ],
      "questions": [
        {
          "q": "Bir fırının sıcaklığı H(t) (°C), t dakika olmak üzere tabloda verilmiştir. H türevlenebilir. H′(5) için en iyi tahmin hangisidir?",
          "opts": [
            "16 °C/dakika",
            "40 °C/dakika",
            "20 °C/dakika",
            "30 °C/dakika"
          ],
          "a": 2,
          "why": "5'i içine alan en dar aralık [4, 6]: (140 − 100)/(6 − 4) = 40/2 = 20 °C/dakika. 16, bütün aralığın ortalaması ((180 − 20)/10); 40 ise bölmeyi unutmak.",
          "fig": {
            "type": "table",
            "head": [
              "t (dakika)",
              "0",
              "4",
              "6",
              "10"
            ],
            "rows": [
              [
                "H(t) (°C)",
                "20",
                "100",
                "140",
                "180"
              ]
            ],
            "caption": "Fırının sıcaklığı"
          }
        },
        {
          "q": "f'nin grafiği iki doğru parçasından oluşuyor. f′(4) kaçtır?",
          "opts": [
            "4",
            "−1/2",
            "1/2",
            "−2"
          ],
          "a": 1,
          "why": "x = 4, (2, 5)'ten (6, 3)'e giden parçanın üzerinde. Doğru parçasında türev, parçanın eğimidir: (3 − 5)/(6 − 2) = −1/2. 4 ise f(4)'tür, eğim değil.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 7,
            "ymax": 6,
            "lines": [
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  2,
                  5
                ],
                "label": ""
              },
              {
                "from": [
                  2,
                  5
                ],
                "to": [
                  6,
                  3
                ],
                "label": "f"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 1,
                "label": "(0, 1)"
              },
              {
                "q": 2,
                "p": 5,
                "label": "(2, 5)"
              },
              {
                "q": 6,
                "p": 3,
                "label": "(6, 3)"
              }
            ],
            "xticks": [
              {
                "v": 2,
                "label": "2"
              },
              {
                "v": 4,
                "label": "4"
              },
              {
                "v": 6,
                "label": "6"
              }
            ],
            "yticks": [
              {
                "v": 3,
                "label": "3"
              },
              {
                "v": 5,
                "label": "5"
              }
            ],
            "caption": "f'nin grafiği"
          }
        },
        {
          "q": "f′'nin grafiği x = 1'de x eksenini yukarıdan aşağıya doğru kesiyor (x < 1 için f′ > 0, x > 1 için f′ < 0). f için x = 1 civarında hangisi doğrudur?",
          "opts": [
            "f, x = 1'de bir tepe yapar: önce artar, sonra azalır",
            "f, x = 1'de bir çukur yapar: önce azalır, sonra artar",
            "f(1) = 0'dır",
            "f, x = 1'in iki yanında da azalandır"
          ],
          "a": 0,
          "why": "f′ > 0 iken f artar, f′ < 0 iken f azalır. Önce artıp sonra azalan fonksiyon x = 1'de tepe yapar; orada teğet yataydır (f′(1) = 0). f′(1) = 0 olması f(1) = 0 demek değildir."
        },
        {
          "q": "Hesap makinesi serbest. f(x) = x·eˣ ise f′(1)'in üç ondalık basamaklı değeri nedir?",
          "opts": [
            "2.718",
            "5.437",
            "8.155",
            "1.000"
          ],
          "a": 1,
          "why": "Hesap makinesinin sayısal türevi: d/dx(x·eˣ) x = 1'de ≈ 5.437 (tam değeri 2e; çarpım kuralını cb208'de göreceğiz). 2.718 ise f(1) = e'dir, türev değil."
        },
        {
          "q": "f, x = 6'da sıçrama yapan parçalı bir fonksiyon; x ≥ 6 için sağ parça geçerli ve türevlenebilir. Tablodaki verilerle f′(6,5) için uygun tahmin hangisidir?",
          "opts": [
            "1,27",
            "2,3",
            "0",
            "−0,8"
          ],
          "a": 3,
          "why": "Sıçramanın iki yanını birleştirmek yanlış olur. Sağ parçadaki noktaları kullan: (f(7) − f(6))/(7 − 6) = (4,2 − 5)/1 = −0,8 ([6, 6,5] ve [6,5, 7] de −0,8 verir). 1,27, sıçramanın üstünden atlayan (4,2 − 2,3)/1,5'tir.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "5",
              "5,5",
              "6",
              "6,5",
              "7"
            ],
            "rows": [
              [
                "f(x)",
                "2,0",
                "2,3",
                "5",
                "4,6",
                "4,2"
              ]
            ],
            "caption": "x = 6'da sıçrama: f(6) = 5 sağ parçaya ait"
          }
        }
      ]
    },
    {
      "no": 4,
      "code": "2.4",
      "slug": "cb204",
      "title": "Türevlenebilirlik ve Süreklilik",
      "en": "Connecting Differentiability and Continuity",
      "accent": "#FF6F61",
      "seconds": 250,
      "terms": [
        "Differentiable",
        "Continuous",
        "Local linearity",
        "Corner",
        "Cusp",
        "Vertical tangent",
        "Discontinuity",
        "One-sided limit",
        "Differentiability implies continuity"
      ],
      "questions": [
        {
          "q": "f'nin grafiği üç doğru parçasından oluşuyor. f hangi x değerlerinde sürekli olduğu hâlde türevlenemez?",
          "opts": [
            "Yalnız x = 4",
            "Yalnız x = 2",
            "x = 2 ve x = 4",
            "Hiçbir x değerinde"
          ],
          "a": 1,
          "why": "x = 2'de grafik kopmuyor ama eğim −3/2'den 1'e sıçrıyor: köşe, yani sürekli ama türevlenemez. x = 4'te grafik kopuyor (sıçrama); orada f sürekli bile değil, bu yüzden \"sürekli ama türevlenemez\" listesine girmez.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 6,
            "ymax": 6,
            "lines": [
              {
                "from": [
                  0,
                  4
                ],
                "to": [
                  2,
                  1
                ],
                "label": ""
              },
              {
                "from": [
                  2,
                  1
                ],
                "to": [
                  4,
                  3
                ],
                "label": "f"
              },
              {
                "from": [
                  4,
                  5
                ],
                "to": [
                  6,
                  4
                ],
                "label": ""
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 1,
                "label": "(2, 1)"
              },
              {
                "q": 4,
                "p": 3,
                "label": "(4, 3) dolu"
              }
            ],
            "xticks": [
              {
                "v": 2,
                "label": "2"
              },
              {
                "v": 4,
                "label": "4"
              }
            ],
            "yticks": [
              {
                "v": 1,
                "label": "1"
              },
              {
                "v": 3,
                "label": "3"
              },
              {
                "v": 5,
                "label": "5"
              }
            ],
            "caption": "x = 4'te sağ parçanın başı (4, 5) açık daire"
          }
        },
        {
          "q": "Aşağıdakilerden hangisi her f fonksiyonu için doğrudur?",
          "opts": [
            "f, x = a'da sürekli ise x = a'da türevlenebilirdir",
            "f, x = a'da türevlenemiyorsa x = a'da sürekli değildir",
            "f, x = a'da sürekli değilse x = a'da türevlenemez",
            "f′(a) = 0 ise f, x = a'da süreksizdir"
          ],
          "a": 2,
          "why": "Türevlenebilirlik sürekliliği gerektirir; bunun karşıt tersi (contrapositive) \"sürekli değilse türevlenemez\"dir ve her zaman doğrudur. İlk iki şık |x − a| köşesiyle çürür: sürekli ama türevlenemez."
        },
        {
          "q": "f(x) = ∛(x − 2) fonksiyonu için x = 2'de hangisi doğrudur?",
          "opts": [
            "Sürekli ve türevlenebilir; f′(2) = 0",
            "Süreksiz, bu yüzden türevlenemez",
            "Sürekli; x = 2'de köşe olduğu için türevlenemez",
            "Sürekli; dikey teğet olduğu için türevlenemez"
          ],
          "a": 3,
          "why": "∛(x − 2) her yerde sürekli. Fark bölümü ∛h / h = 1/∛(h²); h → 0 iken iki taraftan da +∞. Eğim sonsuza kaçıyor ve iki taraf aynı yöne dikleşiyor: dikey teğet. Dikey doğrunun eğimi tanımsız, f′(2) yok."
        },
        {
          "q": "f(x) = x² (x ≤ 1) ve f(x) = 2x − 1 (x > 1) olarak tanımlanıyor. x = 1'de f için hangisi doğrudur?",
          "opts": [
            "Türevlenebilir ve f′(1) = 2",
            "Sürekli ama köşe var, türevlenemez",
            "Süreksiz",
            "Türevlenebilir ve f′(1) = 1"
          ],
          "a": 0,
          "why": "f(1) = 1 ve sağ parça da 1'e gider: sürekli. Soldan fark bölümü (x² − 1)/(x − 1) = x + 1 → 2; sağdan ((2x − 1) − 1)/(x − 1) = 2. İki taraf eşit: f′(1) = 2. (1 ise f(1)'in değeri.)"
        },
        {
          "q": "f(x) = x^(2/3) için x = 0'daki fark bölümü (f(h) − f(0))/h = h^(−1/3). Soldan −∞'a, sağdan +∞'a gidiyor. Grafikte x = 0'da ne vardır?",
          "opts": [
            "Köşe (iki farklı sonlu eğim)",
            "Sivri uç (cusp)",
            "Dikey teğet (iki taraf aynı sonsuza)",
            "Sıçrama süreksizliği"
          ],
          "a": 1,
          "why": "Eğimler iki taraftan zıt sonsuzlara kaçıyor: iki kol dikleşerek bir sivri uçta birleşiyor (cusp). Köşede eğimler sonlu iki farklı sayıdır; dikey teğette ise iki taraf aynı sonsuza gider. f sürekli olduğu için sıçrama yok."
        }
      ]
    },
    {
      "no": 5,
      "code": "2.5",
      "slug": "cb205",
      "title": "Kuvvet Kuralı",
      "en": "The Power Rule",
      "accent": "#A98BFF",
      "seconds": 282,
      "terms": [
        "Power rule",
        "Exponent",
        "Negative exponent",
        "Rational exponent",
        "Rewrite before differentiating",
        "Constant",
        "Tangent line",
        "Parallel lines",
        "Derivative at a point"
      ],
      "questions": [
        {
          "q": "y = 6∛x ise dy/dx nedir?",
          "opts": [
            "6x^(−2/3)",
            "2x^(−2/3)",
            "2x^(2/3)",
            "(9/2)x^(4/3)"
          ],
          "a": 1,
          "why": "Önce yaz: 6x^(1/3). Sabit bekler, kural x^(1/3)'e: 6 · (1/3) · x^(1/3 − 1) = 2x^(−2/3)."
        },
        {
          "q": "y = 1/(2x)² fonksiyonunun türevi hangisidir?",
          "opts": [
            "−1/(4x³)",
            "−2/x³",
            "−1/(2x³)",
            "−1/(8x³)"
          ],
          "a": 2,
          "why": "Önce aç: (2x)² = 4x², yani y = (1/4)x^(−2). Türev: (1/4)(−2)x^(−3) = −1/(2x³). −1/(4x³), parantezin içindeki 2'yi unutarak (2x)^(−2) → −2(2x)^(−3) yazmaktan gelir."
        },
        {
          "q": "lim (h → 0) [(3 + h)⁴ − 81]/h kaçtır?",
          "opts": [
            "81",
            "108",
            "27",
            "0"
          ],
          "a": 1,
          "why": "Bu, f(x) = x⁴ için f′(3)'ün tanımı (3⁴ = 81). f′(x) = 4x³, f′(3) = 4 · 27 = 108."
        },
        {
          "q": "y = x³ eğrisinin hangi noktalarında teğet doğrusu y = 12x + 5 doğrusuna paraleldir?",
          "opts": [
            "(2, 8) ve (−2, −8)",
            "Yalnız (2, 8)",
            "(4, 64)",
            "(2, 8) ve (−2, 8)"
          ],
          "a": 0,
          "why": "Paralel ⇒ eğim 12. y′ = 3x² = 12 ⇒ x² = 4 ⇒ x = 2 veya x = −2. Noktalar (2, 8) ve (−2, (−2)³) = (−2, −8). Negatif kökü unutma."
        },
        {
          "q": "Bir öğrenci d/dx (1/x⁴) = 1/(4x³) yazıyor. Doğru değerlendirme hangisi?",
          "opts": [
            "Doğru",
            "Yanlış; doğrusu −4/x³",
            "Yanlış; doğrusu −4/x⁵",
            "Yanlış; doğrusu 4/x⁵"
          ],
          "a": 2,
          "why": "Kural paydaya ters yönde uygulanmaz. Önce yaz: x^(−4). Türev: −4x^(−5) = −4/x⁵. Üs −4'ten bir azalınca −5 olur."
        }
      ]
    },
    {
      "no": 6,
      "code": "2.6",
      "slug": "cb206",
      "title": "Temel Türev Kuralları",
      "en": "Constant, Sum, Difference, and Constant Multiple Rules",
      "accent": "#B9E552",
      "seconds": 278,
      "terms": [
        "Constant rule",
        "Constant multiple rule",
        "Sum rule",
        "Difference rule",
        "Rewrite before differentiating",
        "Horizontal tangent",
        "Normal line",
        "Perpendicular slopes",
        "Piecewise function",
        "Differentiable"
      ],
      "questions": [
        {
          "q": "y = (x² − 4)(x + 1) ise x = 1'de dy/dx kaçtır?",
          "opts": [
            "2",
            "1",
            "0",
            "−6"
          ],
          "a": 1,
          "why": "Önce aç: x³ + x² − 4x − 4. Türev: 3x² + 2x − 4; x = 1'de 3 + 2 − 4 = 1. Türevleri çarpmak (2x · 1 = 2) yanlıştır; −6 ise y(1)'dir."
        },
        {
          "q": "f(x) = 10 − x² ve g(x) = 2√x. 0 ≤ x ≤ 2 aralığında f'nin grafiği g'ninkinin üstünde. h(x) = f(x) − g(x) iki grafik arasındaki dikey uzaklıktır. x = 1'de h'nin değişim hızı kaçtır?",
          "opts": [
            "7",
            "−1",
            "3",
            "−3"
          ],
          "a": 3,
          "why": "Fark kuralı: h′(x) = f′(x) − g′(x) = −2x − 1/√x. x = 1'de −2 − 1 = −3. 7, h(1) = 9 − 2 değeridir; hız değil."
        },
        {
          "q": "f(x) = x³ − 3x² − 9x + 2 fonksiyonunun grafiği hangi x değerlerinde yatay teğete sahiptir?",
          "opts": [
            "x = −1 ve x = 3",
            "x = 1 ve x = −3",
            "x = 0 ve x = 2",
            "Yalnız x = 3"
          ],
          "a": 0,
          "why": "f′(x) = 3x² − 6x − 9 = 3(x² − 2x − 3) = 3(x − 3)(x + 1). Sıfır olduğu yerler x = 3 ve x = −1."
        },
        {
          "q": "f(x) = 2√x fonksiyonunun x = 4'teki *normal line* denklemi hangisidir?",
          "opts": [
            "y − 4 = (1/2)(x − 4)",
            "y − 4 = −2(x − 4)",
            "y − 4 = 2(x − 4)",
            "y − 2 = −2(x − 4)"
          ],
          "a": 1,
          "why": "f(4) = 2 · 2 = 4. f′(x) = 2 · (1/2)x^(−1/2) = 1/√x, f′(4) = 1/2 (teğet eğimi). Normal eğimi −1/(1/2) = −2: y − 4 = −2(x − 4)."
        },
        {
          "q": "f(x) = ax³ (x < 1) ve f(x) = 6x + b (x ≥ 1). f'nin x = 1'de türevlenebilir olması için a ve b ne olmalıdır?",
          "opts": [
            "a = 2, b = 4",
            "a = 6, b = 0",
            "a = 2, b = −4",
            "a = 3, b = −3"
          ],
          "a": 2,
          "why": "Eğimler: soldan 3ax² → 3a, sağdan 6; 3a = 6 ⇒ a = 2. Süreklilik: a · 1³ = 6 + b ⇒ 2 = 6 + b ⇒ b = −4. a = 6, b = 0 yalnız sürekliliği sağlar (köşe kalır)."
        }
      ]
    },
    {
      "no": 7,
      "code": "2.7",
      "slug": "cb207",
      "title": "sin x, cos x, eˣ ve ln x'in Türevleri",
      "en": "Derivatives of cos x, sin x, eˣ, and ln x",
      "accent": "#FF7DB8",
      "seconds": 267,
      "terms": [
        "Derivative of sin x",
        "Derivative of cos x",
        "Natural exponential function",
        "Natural logarithm",
        "Radians",
        "Exponential function aˣ",
        "Logarithm base a",
        "Tangent line",
        "Horizontal tangent"
      ],
      "questions": [
        {
          "q": "f(x) = 4 sin x − 3 cos x ise f′(π/2) kaçtır?",
          "opts": [
            "−3",
            "4",
            "3",
            "0"
          ],
          "a": 2,
          "why": "f′(x) = 4 cos x − 3(−sin x) = 4 cos x + 3 sin x. x = π/2'de 4 · 0 + 3 · 1 = 3. Kosinüsün türevindeki eksiyi unutursan −3 bulursun."
        },
        {
          "q": "g(x) = x² − eˣ. Aşağıdaki x değerlerinden hangisinde g'nin teğet doğrusunun eğimi en büyüktür?",
          "opts": [
            "x = −1",
            "x = 0",
            "x = 1",
            "x = 2"
          ],
          "a": 2,
          "why": "g′(x) = 2x − eˣ. g′(−1) ≈ −2,37; g′(0) = −1; g′(1) = 2 − e ≈ −0,72; g′(2) = 4 − e² ≈ −3,39. En büyüğü x = 1'de. (Eğim soruluyor; g'nin kendi değerleri değil.)"
        },
        {
          "q": "lim (h → 0) cos(π/2 + h)/h kaçtır?",
          "opts": [
            "0",
            "−1",
            "1",
            "Limit yoktur"
          ],
          "a": 1,
          "why": "cos(π/2) = 0 olduğu için ifade [cos(π/2 + h) − cos(π/2)]/h, yani cos x'in π/2'deki türevi: −sin(π/2) = −1."
        },
        {
          "q": "f(x) = 2eˣ + ln x fonksiyonunun x = 1'deki teğet doğrusu hangisidir?",
          "opts": [
            "y − 2e = (2e + 1)(x − 1)",
            "y − 2e = 2e(x − 1)",
            "y − 1 = (2e + 1)(x − 2e)",
            "y = (2e + 1)(x − 1)"
          ],
          "a": 0,
          "why": "f(1) = 2e + ln 1 = 2e. f′(x) = 2eˣ + 1/x, f′(1) = 2e + 1. Nokta-eğim: y − 2e = (2e + 1)(x − 1). ln 1 = 0 olduğu için nokta 2e'dir, 0 değil."
        },
        {
          "q": "d/dx (3ˣ) hangisidir?",
          "opts": [
            "x · 3^(x − 1)",
            "3ˣ",
            "3ˣ / ln 3",
            "3ˣ · ln 3"
          ],
          "a": 3,
          "why": "Değişken üsteyken kuvvet kuralı çalışmaz. aˣ'in türevi aˣ ln a: 3ˣ ln 3. Yalnız taban e olunca ln e = 1 olduğu için türev kendisine eşit kalır."
        }
      ]
    },
    {
      "no": 8,
      "code": "2.8",
      "slug": "cb208",
      "title": "Çarpım Kuralı",
      "en": "The Product Rule",
      "accent": "#5C8DFF",
      "seconds": 289,
      "terms": [
        "Product rule",
        "Factor",
        "Table of values",
        "Line segment slope",
        "Tangent line",
        "Sign of the derivative",
        "Constant multiple",
        "Simplify"
      ],
      "questions": [
        {
          "q": "y = x²eˣ ise x = 1'de dy/dx kaçtır?",
          "opts": [
            "2e",
            "3e",
            "e",
            "2"
          ],
          "a": 1,
          "why": "*Product rule*: y′ = 2x · eˣ + x² · eˣ. x = 1'de 2e + e = 3e. 2e, yalnız türevleri çarpmaktan (2x · eˣ) gelir."
        },
        {
          "q": "Tablodaki değerlere göre h(x) = 3f(x)g(x) ise h′(2) kaçtır?",
          "opts": [
            "11",
            "−6",
            "24",
            "33"
          ],
          "a": 3,
          "why": "h′(x) = 3[f′(x)g(x) + f(x)g′(x)]. x = 2'de 3[(−1)(−3) + (4)(2)] = 3(3 + 8) = 33. −6, 3 · f′(2) · g′(2)'dir: türevleri çarpmak yanlış.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "f(x)",
              "f′(x)",
              "g(x)",
              "g′(x)"
            ],
            "rows": [
              [
                "2",
                "4",
                "−1",
                "−3",
                "2"
              ]
            ],
            "caption": "f ve g türevlenebilir"
          }
        },
        {
          "q": "f ve g'nin grafikleri doğrulardır. h(x) = f(x)g(x) ise h′(2) kaçtır?",
          "opts": [
            "1",
            "−1",
            "7",
            "12"
          ],
          "a": 0,
          "why": "Grafikten f(2) = 3, f′ = 1 (eğim (5 − 1)/4); g(2) = 4, g′ = −1 (eğim −6/6). h′(2) = f′g + fg′ = (1)(4) + (3)(−1) = 1. 12 ise h(2) = 3 · 4.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 6,
            "ymax": 6,
            "lines": [
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  4,
                  5
                ],
                "label": "f"
              },
              {
                "from": [
                  0,
                  6
                ],
                "to": [
                  6,
                  0
                ],
                "label": "g"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 3,
                "label": "(2, 3)"
              },
              {
                "q": 2,
                "p": 4,
                "label": "(2, 4)"
              }
            ],
            "xticks": [
              {
                "v": 2,
                "label": "2"
              },
              {
                "v": 4,
                "label": "4"
              }
            ],
            "yticks": [
              {
                "v": 1,
                "label": "1"
              },
              {
                "v": 3,
                "label": "3"
              },
              {
                "v": 4,
                "label": "4"
              },
              {
                "v": 6,
                "label": "6"
              }
            ],
            "caption": "f: (0, 1)'den (4, 5)'e; g: (0, 6)'dan (6, 0)'a"
          }
        },
        {
          "q": "f(1) = 2 ve f′(1) = −3. g(x) = 4x·f(x) ise g'nin x = 1'deki teğet doğrusu hangisidir?",
          "opts": [
            "y − 8 = −12(x − 1)",
            "y − 2 = −4(x − 1)",
            "y − 8 = −4(x − 1)",
            "y − 8 = 20(x − 1)"
          ],
          "a": 2,
          "why": "Nokta: g(1) = 4 · 1 · 2 = 8. g′(x) = 4f(x) + 4x f′(x); g′(1) = 4(2) + 4(−3) = 8 − 12 = −4. Teğet y − 8 = −4(x − 1). −12, ilk terimi (4f) unutmaktan gelir."
        },
        {
          "q": "Bir öğrenci d/dx (x sin x) = cos x yazıyor. Doğru değerlendirme hangisi?",
          "opts": [
            "Doğru",
            "Yanlış; doğrusu sin x + x cos x",
            "Yanlış; doğrusu x cos x",
            "Yanlış; doğrusu sin x − x cos x"
          ],
          "a": 1,
          "why": "Öğrenci türevleri çarpmış: (1)(cos x). *Product rule*: (x)′ sin x + x (sin x)′ = sin x + x cos x."
        }
      ]
    },
    {
      "no": 9,
      "code": "2.9",
      "slug": "cb209",
      "title": "Bölüm Kuralı",
      "en": "The Quotient Rule",
      "accent": "#F6B94A",
      "seconds": 286,
      "terms": [
        "Quotient rule",
        "Numerator",
        "Denominator",
        "Low d-high minus high d-low",
        "Rewrite before differentiating",
        "Table of values",
        "Instantaneous rate of change",
        "Horizontal tangent",
        "Tangent line"
      ],
      "questions": [
        {
          "q": "y = (2x + 1)/(x − 3) ise dy/dx nedir?",
          "opts": [
            "7/(x − 3)²",
            "−7/(x − 3)²",
            "2",
            "(4x − 5)/(x − 3)²"
          ],
          "a": 1,
          "why": "*Quotient rule*: [2(x − 3) − (2x + 1)(1)]/(x − 3)² = (2x − 6 − 2x − 1)/(x − 3)² = −7/(x − 3)². Paydaki terimlerin yerini değiştirirsen işaret döner ve 7 bulursun."
        },
        {
          "q": "Tablodaki değerlere göre h(x) = f(x)/g(x) ise h′(1) kaçtır?",
          "opts": [
            "0",
            "−2",
            "4/3",
            "2/3"
          ],
          "a": 2,
          "why": "h′(1) = [f′(1)g(1) − f(1)g′(1)]/[g(1)]² = [(2)(3) − (6)(−1)]/9 = (6 + 6)/9 = 4/3. Eksiyi artı yazarsan 0; f′/g′ yaparsan −2 bulursun.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "f(x)",
              "f′(x)",
              "g(x)",
              "g′(x)"
            ],
            "rows": [
              [
                "1",
                "6",
                "2",
                "3",
                "−1"
              ]
            ],
            "caption": "f ve g türevlenebilir"
          }
        },
        {
          "q": "g'nin grafiği bir doğrudur. w(x) = x²/g(x) ise w′(2) kaçtır?",
          "opts": [
            "8/9",
            "4/3",
            "−8/9",
            "4"
          ],
          "a": 0,
          "why": "Grafikten g(2) = 3, g′ = (4 − 1)/3 = 1. w′(2) = [(2·2)(3) − (2²)(1)]/3² = (12 − 4)/9 = 8/9. 4/3 ise w(2) = 4/3.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 4,
            "ymax": 5,
            "lines": [
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  3,
                  4
                ],
                "label": "g"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 1,
                "label": "(0, 1)"
              },
              {
                "q": 2,
                "p": 3,
                "label": "(2, 3)"
              },
              {
                "q": 3,
                "p": 4,
                "label": "(3, 4)"
              }
            ],
            "xticks": [
              {
                "v": 2,
                "label": "2"
              },
              {
                "v": 3,
                "label": "3"
              }
            ],
            "yticks": [
              {
                "v": 1,
                "label": "1"
              },
              {
                "v": 3,
                "label": "3"
              },
              {
                "v": 4,
                "label": "4"
              }
            ],
            "caption": "g'nin grafiği"
          }
        },
        {
          "q": "y = x/(x² + 9) fonksiyonunun grafiği hangi x değerlerinde yatay teğete sahiptir?",
          "opts": [
            "Yalnız x = 0",
            "x = 9 ve x = −9",
            "Yalnız x = 3",
            "x = 3 ve x = −3"
          ],
          "a": 3,
          "why": "y′ = [(x² + 9)(1) − x(2x)]/(x² + 9)² = (9 − x²)/(x² + 9)². Payda hiç sıfır olmaz; pay sıfır: x² = 9, x = ±3."
        },
        {
          "q": "Bir öğrenci y = x²/(x + 1) için türevin payını x² · 1 − 2x(x + 1) yazıyor. Doğru türev hangisi?",
          "opts": [
            "−(x² + 2x)/(x + 1)²",
            "(x² + 2x)/(x + 1)²",
            "2x",
            "(3x² + 2x)/(x + 1)²"
          ],
          "a": 1,
          "why": "Pay \"alt çarpı üstün türevi eksi üst çarpı altın türevi\": (x + 1)(2x) − x²(1) = x² + 2x. Öğrencinin sırası tersti; bu yüzden işaret tam tersi çıkar (ilk şık)."
        }
      ]
    },
    {
      "no": 10,
      "code": "2.10",
      "slug": "cb210",
      "title": "tan x, cot x, sec x ve csc x'in Türevleri",
      "en": "Derivatives of tan x, cot x, sec x, and csc x",
      "accent": "#2FD6B9",
      "seconds": 272,
      "terms": [
        "Derivative of tan x",
        "Derivative of sec x",
        "Derivative of cot x",
        "Derivative of csc x",
        "Quotient rule",
        "Pythagorean identity",
        "Unit circle",
        "Tangent line",
        "Horizontal tangent"
      ],
      "questions": [
        {
          "q": "y = 2 tan x − sec x ise x = 0'da dy/dx kaçtır?",
          "opts": [
            "1",
            "0",
            "3",
            "2"
          ],
          "a": 3,
          "why": "y′ = 2 sec² x − sec x tan x. x = 0'da sec 0 = 1, tan 0 = 0: 2 · 1 − 1 · 0 = 2."
        },
        {
          "q": "y = cos x/(1 + sin x) ise y′ hangisine sadeleşir?",
          "opts": [
            "1/(1 + sin x)",
            "−1/(1 + sin x)",
            "−sin x/cos x",
            "−1/(1 + sin x)²"
          ],
          "a": 1,
          "why": "*Quotient rule*: [(1 + sin x)(−sin x) − cos x · cos x]/(1 + sin x)² = (−sin x − sin² x − cos² x)/(1 + sin x)² = −(1 + sin x)/(1 + sin x)² = −1/(1 + sin x). sin² x + cos² x = 1 kullanıldı."
        },
        {
          "q": "y = sec x eğrisinin x = π/3'teki teğet doğrusu hangisidir?",
          "opts": [
            "y − 2 = 2√3(x − π/3)",
            "y − 2 = √3(x − π/3)",
            "y − 1/2 = 2√3(x − π/3)",
            "y − 2 = 4(x − π/3)"
          ],
          "a": 0,
          "why": "cos(π/3) = 1/2 ⇒ sec(π/3) = 2 (nokta). Eğim sec x tan x = 2 · √3 = 2√3. 4 ise sec²(π/3): tanjantın türevini sekanta uygulamak."
        },
        {
          "q": "lim (h → 0) [cot(π/4 + h) − 1]/h kaçtır?",
          "opts": [
            "2",
            "−1",
            "−2",
            "Limit yoktur"
          ],
          "a": 2,
          "why": "cot(π/4) = 1, yani bu cot x'in π/4'teki türevi: −csc²(π/4) = −(√2)² = −2. \"Ko\"lu fonksiyonun türevinde eksi var."
        },
        {
          "q": "f(x) = eˣ tan x ise f′(0) kaçtır?",
          "opts": [
            "1",
            "0",
            "2",
            "e"
          ],
          "a": 0,
          "why": "*Product rule*: f′(x) = eˣ tan x + eˣ sec² x. x = 0'da 1 · 0 + 1 · 1 = 1."
        }
      ]
    }
  ],
  "final": [],
  "defter": false
};
