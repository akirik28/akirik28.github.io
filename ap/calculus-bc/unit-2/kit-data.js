/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/cb2N/questions.json) */
window.KIT = {
  "store": "calcbc-u2:v1:",
  "course": "Calculus BC",
  "unitLabel": "Unit 2 — Differentiation: Definition and Fundamental Properties",
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
    }
  ],
  "final": []
};
