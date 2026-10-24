/* Kitpath not defteri · cb201 · 2.1 Ortalama ve Anlık Değişim Hızı
   Kaynak: ap-videolar/src/episodes/cb201 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb201",
  amac: "Bu konu değişim hızını anlatıyor: bir aralıktaki *average rate of change* ile tek bir andaki *instantaneous rate of change*. *Secant* ile *tangent* farkını, h → 0 limitini ve limitten fonksiyonu tanımayı öğreneceksin.",
  bolumler: [
    {
      baslik: "İki ayrı soru: aralık mı, an mı?",
      kisa: "Aralıkta ortalama hız, tek anda anlık hız sorulur; türev ikincisidir.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🚌",
          baslik: "İstanbul–Ankara otobüsü",
          metin: "Otobüs 450 km'yi 5 saatte gitti: ortalama hız 450 ÷ 5 = ==90 km/sa==. Ama ikinci saatte hız göstergesi 110'u gösteriyordu. Tam bir andaki hız, yani ikinci soru, Unit 2'nin konusu: türev."
        },
        {
          tip: "ikili",
          sol: {
            ikon: "📏",
            baslik: "*Average rate of change*",
            maddeler: [
              "Bir aralık için: [a, b]",
              "Örnek: 5 saatte ortalama 90 km/sa"
            ]
          },
          sag: {
            ikon: "📍",
            baslik: "*Instantaneous rate of change*",
            maddeler: [
              "Tek bir an için: x = a",
              "Örnek: 2. saatte gösterge 110"
            ]
          },
          oyun: [
            {
              metin: "Otobüs 450 km'yi 5 saatte gitti: 90 km/sa.",
              cevap: "sol",
              neden: "Aralığın tamamına bölünen toplam değişim."
            },
            { metin: "Hız göstergesi tam o anda 110 yazıyor.", cevap: "sag", neden: "Tek bir andaki hız." },
            {
              metin: "Tabloda t = 3 ile t = 9 arasında hesapladığın eğim.",
              cevap: "sol",
              neden: "İki nokta, yani bir aralık."
            },
            {
              metin: "h → 0 iken fark bölümünün limiti.",
              cevap: "sag",
              neden: "Aralık sıfıra daralıyor: geriye tek nokta kalır."
            },
            {
              metin: "Grafikte iki noktayı birleştiren *secant*'ın eğimi.",
              cevap: "sol",
              neden: "*Secant* ortalamaya, *tangent* ana aittir."
            }
          ]
        }
      ]
    },
    {
      baslik: "Ortalama değişim hızı = *secant* eğimi",
      kisa: "Ortalama hız, (f(b) − f(a)) / (b − a); secant doğrusunun eğimidir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "Ortalama hız", alt: "[a, b] aralığında" },
            "=",
            { t: "f(b) − f(a)", alt: "çıktıdaki değişim" },
            "÷",
            { t: "b − a", alt: "girdideki değişim" }
          ],
          aciklama: "Eşdeğer yazılış: (f(a + h) − f(a)) / h; burada b = a + h."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📏",
              terim: "Average rate of change",
              tr: "ortalama değişim hızı",
              tanim: "Çıktıdaki değişimin girdideki değişime oranı. ==Toplam değişim değil, oranıdır.==",
              ornek: "√x için [1, 9]: (3 − 1) / (9 − 1) = 1/4."
            },
            {
              ikon: "✂️",
              terim: "Secant line",
              tr: "kesen doğru",
              tanim: "Grafikteki iki noktadan geçen doğru. Eğimi, o aralıktaki ortalama değişim hızıdır.",
              ornek: "P(1, 1) ve Q(9, 3) arasındaki secant'ın eğimi 1/4."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "√x için [1, 9] aralığı",
          xlabel: "x",
          ylabel: "y",
          xmax: 10,
          ymax: 4,
          xticks: [
            { v: 1, label: "1" },
            { v: 9, label: "9" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 3, label: "3" }
          ],
          ogeler: [
            {
              id: "f",
              tip: "egri",
              renk: 0,
              etiket: "y = √x",
              noktalar: [[0, 0], [0.25, 0.5], [0.5, 0.707], [1, 1], [2, 1.414], [3, 1.732], [4, 2], [5, 2.236], [6, 2.449], [7, 2.646], [8, 2.828], [9, 3], [10, 3.162]]
            },
            {
              id: "p",
              tip: "nokta",
              x: 1,
              y: 1,
              etiket: "P(1, 1)",
              gizli: true
            },
            {
              id: "q",
              tip: "nokta",
              x: 9,
              y: 3,
              etiket: "Q(9, 3)",
              gizli: true
            },
            {
              id: "sec",
              tip: "cizgi",
              renk: 1,
              from: [0, 0.75],
              to: [10, 3.25],
              gizli: true
            },
            {
              id: "run",
              tip: "ok",
              renk: 2,
              from: [1, 1],
              to: [9, 1],
              gizli: true
            },
            {
              id: "rise",
              tip: "ok",
              renk: 2,
              from: [9, 1],
              to: [9, 3],
              gizli: true
            },
            {
              id: "runl",
              tip: "yazi",
              x: 5,
              y: 0.6,
              metin: "run = 8",
              gizli: true
            },
            {
              id: "risel",
              tip: "yazi",
              x: 9.2,
              y: 2,
              metin: "rise = 2",
              hiza: "start",
              gizli: true
            },
            {
              id: "res",
              tip: "yazi",
              x: 0.3,
              y: 3.6,
              metin: "eğim = 2/8 = 1/4",
              hiza: "start",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "y = √x eğrisi. [1, 9] aralığında ortalama değişim hızını arıyoruz." },
            {
              metin: "Aralığın iki ucu: P(1, 1) ve Q(9, 3).",
              goster: [
                "p",
                "q"
              ]
            },
            {
              metin: "İkisini birleştiren doğru *secant line*. Yükselme (rise) 3 − 1 = 2, yatay mesafe (run) 9 − 1 = 8.",
              goster: [
                "sec",
                "run",
                "rise",
                "runl",
                "risel"
              ]
            },
            {
              metin: "Ortalama değişim hızı = rise ÷ run = 2/8 = ==1/4==: *secant*'ın eğimi.",
              goster: [
                "res"
              ]
            }
          ]
        },
        {
          tip: "tuzak",
          metin: "Soru, f(b) − f(a)'yı hız gibi sunabilir.",
          yanlis: "Ortalama değişim hızı f(b) − f(a)'dır.",
          dogru: "f(b) − f(a) yalnızca ==toplam değişimdir==. Aralığın uzunluğu b − a'ya bölünce hız olur."
        }
      ]
    },
    {
      baslik: "Tablodan ortalama hız ve birim",
      kisa: "Aralığın iki ucunu seç, farkı uzunluğa böl, birimi çıktı/girdi yaz.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Depodaki su",
          head: [
            "t (dk)",
            "0",
            "3",
            "5",
            "9"
          ],
          rows: [
            [
              "W(t) (litre)",
              "40",
              "46",
              "43",
              "34"
            ]
          ],
          not: "Su deposundaki litre, dakikalara göre ölçülmüş."
        },
        {
          tip: "ornek",
          baslik: "3. ve 9. dakika arası",
          durum: "Tabloya göre 3 ≤ t ≤ 9 aralığında suyun ortalama değişim hızı nedir?",
          adimlar: [
            "Uçları seç: W(3) = 46, W(9) = 34.",
            "Farkı al: 34 − 46 = −12 litre.",
            "Aralığın uzunluğuna böl: 9 − 3 = 6 dakika, yani −12 ÷ 6 = −2.",
            "Birim: litre/dakika."
          ],
          sonuc: "==−2 L/dk==: su ortalama dakikada 2 litre azalıyor (eksi işareti azalmayı gösterir)."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📐",
              terim: "Units of rate",
              tr: "hızın birimi",
              tanim: "Çıktının birimi bölü girdinin birimi.",
              ornek: "litre/dakika, °C/saat."
            },
            {
              ikon: "↔️",
              terim: "Interval",
              tr: "aralık",
              tanim: "Ortalama hızın hesaplandığı girdi aralığı [a, b]; uzunluğu b − a.",
              ornek: "Tabloda [3, 9] dakika."
            },
            {
              ikon: "📈",
              terim: "Slope",
              tr: "eğim",
              tanim: "Bir doğrunun yükselmesinin yatay mesafeye oranı (rise/run).",
              ornek: "Secant'ın eğimi = ortalama hız."
            }
          ]
        }
      ]
    },
    {
      baslik: "Aralık daralınca *secant*, *tangent*'a döner",
      kisa: "Aralık daraldıkça secant dönüp tangent'a oturur; eğimler 4'e yaklaşır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "f(x) = x² − 2x: x = 3'te hız",
          xlabel: "x",
          ylabel: "y",
          xmax: 5,
          ymax: 10,
          xticks: [
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" }
          ],
          yticks: [
            { v: 3, label: "3" },
            { v: 8, label: "8" }
          ],
          ogeler: [
            {
              id: "f",
              tip: "egri",
              renk: 0,
              etiket: "x² − 2x",
              noktalar: [[2, 0], [2.25, 0.563], [2.5, 1.25], [2.75, 2.063], [3, 3], [3.25, 4.063], [3.5, 5.25], [3.75, 6.563], [4, 8], [4.2, 9.24]]
            },
            { id: "p", tip: "nokta", x: 3, y: 3, etiket: "P" },
            {
              id: "q",
              tip: "nokta",
              x: 4,
              y: 8,
              etiket: "Q",
              gizli: true
            },
            {
              id: "sec",
              tip: "cizgi",
              renk: 1,
              from: [2.5, 0.5],
              to: [4.2, 9],
              gizli: true
            },
            {
              id: "sl",
              tip: "yazi",
              x: 0.2,
              y: 9,
              metin: "h = 1 → eğim = 5",
              hiza: "start",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "P(3, 3) noktasındaki hızı istiyoruz. Elimizdeki tek araç, iki nokta arasındaki ortalama hız." },
            {
              metin: "Q(4, 8) ile P arasındaki *secant*'ın eğimi 5 (h = 1).",
              goster: [
                "q",
                "sec",
                "sl"
              ]
            },
            {
              metin: "Q, P'ye yaklaştı: Q(3,1; 3,41). *Secant* döndü, eğim 4,1.",
              set: {
                q: { x: 3.1, y: 3.41 },
                sec: { from: [2.5, 0.95], to: [4.2, 7.92] },
                sl: { metin: "h = 0,1 → eğim = 4,1" }
              }
            },
            {
              metin: "Q(3,01; 3,0401): eğim 4,01. Eğimler 4'e yaklaşıyor.",
              set: {
                q: { x: 3.01, y: 3.0401 },
                sec: { from: [2.5, 0.995], to: [4.2, 7.812] },
                sl: { metin: "h = 0,01 → eğim = 4,01" }
              }
            },
            {
              metin: "Aralık sıfıra daralınca *secant*, eğriye P'de dokunan *tangent line*'a oturur: eğim ==4==.",
              set: {
                sec: { from: [2.5, 1], to: [4.2, 7.8] },
                sl: { metin: "h → 0 → teğet eğimi = 4" }
              },
              gizle: [
                "q"
              ]
            }
          ]
        },
        {
          tip: "tablo",
          head: [
            "h (aralık)",
            "Q noktası",
            "secant eğimi"
          ],
          rows: [
            [
              "1",
              "(4, 8)",
              "5"
            ],
            [
              "0,1",
              "(3,1; 3,41)",
              "4,1"
            ],
            [
              "0,01",
              "(3,01; 3,0401)",
              "4,01"
            ],
            [
              "h → 0",
              "Q → P",
              "→ 4"
            ]
          ],
          vurgu: 3,
          not: "Sadeleşince eğim = 4 + h. Ama fark bölümüne [f(3 + h) − f(3)]/h doğrudan h = 0 koyarsak 0/0 çıkar; bu yüzden oraya yürümeyiz, limitle yaklaşırız."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📍",
              terim: "Tangent line",
              tr: "teğet doğru",
              tanim: "Eğriye bir noktada dokunan doğru. Eğimi, o noktadaki anlık değişim hızıdır.",
              ornek: "x² − 2x için x = 3'te teğet y = 4x − 9."
            },
            {
              ikon: "🎯",
              terim: "Limit",
              tr: "limit",
              tanim: "Değişken bir değere yaklaşırken ifadenin gittiği sayı; h tam 0 olmaz ama 0'a yaklaşır.",
              ornek: "h → 0 iken 4 + h → 4."
            }
          ]
        }
      ]
    },
    {
      baslik: "Anlık hız: iki limit biçimi",
      kisa: "Anlık hız, fark bölümünün limitidir; iki biçim de aynı sonucu verir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "Anlık hız", alt: "x = a'da" },
            "=",
            { t: "lim (h → 0) [f(a + h) − f(a)] / h", alt: "h biçimi" },
            "=",
            { t: "lim (x → a) [f(x) − f(a)] / (x − a)", alt: "x biçimi" }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⚡",
              terim: "Instantaneous rate of change",
              tr: "anlık değişim hızı",
              tanim: "Aralık sıfıra daralırken ortalama hızların limiti: tek noktadaki hız, *tangent*'ın eğimi.",
              ornek: "x² − 2x için x = 3'te 4."
            },
            {
              ikon: "➗",
              terim: "Difference quotient",
              tr: "fark bölümü",
              tanim: "(f(a + h) − f(a)) / h ifadesi: *secant*'ın eğimi.",
              ornek: "x² − 2x ve a = 3 için 4 + h."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "h biçimi: f(x) = x² − 2x, x = 3",
          durum: "x = 3'teki anlık değişim hızını h → 0 limitiyle bul.",
          adimlar: [
            "f(3) = 9 − 6 = 3.",
            "f(3 + h) = (3 + h)² − 2(3 + h) = 9 + 6h + h² − 6 − 2h = 3 + 4h + h².",
            "Fark: f(3 + h) − f(3) = 4h + h².",
            "h'ye böl: (4h + h²) / h = 4 + h.",
            "h → 0: 4 + h → 4."
          ],
          sonuc: "x = 3'te anlık değişim hızı ==4==."
        },
        {
          tip: "ornek",
          baslik: "x biçimi: aynı fonksiyon, aynı nokta",
          durum: "Bu kez lim (x → 3) [f(x) − f(3)] / (x − 3) limitini hesapla.",
          adimlar: [
            "f(x) − f(3) = x² − 2x − 3.",
            "Çarpanlara ayır: x² − 2x − 3 = (x − 3)(x + 1).",
            "(x − 3) sadeleşir: (x − 3)(x + 1) / (x − 3) = x + 1.",
            "x → 3: x + 1 → 4."
          ],
          sonuc: "Yine ==4==. İki kapı, aynı oda: hangisi kolaysa onu kullan."
        }
      ]
    },
    {
      baslik: "Limitten fonksiyonu ve noktayı tanımak",
      kisa: "Gizli f(a) sayısını ara: 8 = 2³, −1 = cos π.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Limit kalıbını oku",
          head: [
            "Limit",
            "f(x)",
            "a",
            "Gizli f(a)"
          ],
          rows: [
            [
              "lim (h → 0) [(2 + h)³ − 8] / h",
              "x³",
              "2",
              "8 = 2³"
            ],
            [
              "lim (x → π) (cos x + 1) / (x − π)",
              "cos x",
              "π",
              "−1 = cos π"
            ],
            [
              "lim (h → 0) [√(9 + h) − 3] / h",
              "√x",
              "9",
              "3 = √9"
            ]
          ],
          not: "Üçüncü limit eşlenikle çözülür: [√(9 + h) − 3] / h = 1 / (√(9 + h) + 3) → 1/6."
        },
        {
          tip: "ornek",
          baslik: "(cos x + 1) neden f(x) − f(a)?",
          durum: "lim (x → π) (cos x + 1) / (x − π) hangi fonksiyonun hangi noktadaki anlık hızıdır?",
          adimlar: [
            "Şablon: lim (x → a) [f(x) − f(a)] / (x − a). Paydada x − π var, yani a = π.",
            "Pay: cos x + 1 = cos x − (−1). Demek ki f(a) = −1.",
            "cos π = −1 olduğu için f(x) = cos x uyuyor."
          ],
          sonuc: "f(x) = ==cos x==, a = ==π==."
        }
      ]
    },
    {
      baslik: "AP örneği: ortalama hız verilip uç aranır",
      kisa: "Denklemi kur, sadeleştir, b > 1 şartıyla kökü seç.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "f(x) = x³ − x, [1, b] aralığı",
          durum: "[1, b] aralığındaki ortalama değişim hızı 12 ve b > 1. b kaçtır?",
          adimlar: [
            "Denklemi kur: (f(b) − f(1)) / (b − 1) = 12.",
            "f(1) = 1 − 1 = 0; pay b³ − b = b(b − 1)(b + 1).",
            "(b − 1) sadeleşir: b(b + 1) = 12, yani b² + b − 12 = 0.",
            "(b − 3)(b + 4) = 0 ⇒ b = 3 ya da b = −4.",
            "b > 1 şartı −4'ü eler.",
            "Kontrol: f(3) = 24; (24 − 0) / (3 − 1) = 12 ✓."
          ],
          sonuc: "b = ==3==."
        },
        {
          tip: "grafik",
          baslik: "f(x) = x³ − x: [1, b] aralığında eğim 12",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 28,
          xticks: [
            { v: 1, label: "1" },
            { v: 3, label: "3" }
          ],
          yticks: [
            { v: 12, label: "12" },
            { v: 24, label: "24" }
          ],
          ogeler: [
            {
              id: "f",
              tip: "egri",
              renk: 0,
              etiket: "x³ − x",
              noktalar: [[1, 0], [1.25, 0.703], [1.5, 1.875], [1.75, 3.609], [2, 6], [2.25, 9.141], [2.5, 13.125], [2.75, 18.047], [3, 24], [3.1, 26.691]]
            },
            {
              id: "p",
              tip: "nokta",
              x: 1,
              y: 0,
              etiket: "(1, 0)",
              gizli: true
            },
            {
              id: "q",
              tip: "nokta",
              x: 3,
              y: 24,
              etiket: "(3, 24)",
              gizli: true
            },
            {
              id: "sec",
              tip: "cizgi",
              renk: 1,
              from: [1, 0],
              to: [3.1, 25.2],
              gizli: true
            },
            {
              id: "sl",
              tip: "yazi",
              x: 0.2,
              y: 26,
              metin: "eğim = 24/2 = 12",
              hiza: "start",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "y = x³ − x eğrisi, x ≥ 1 kısmı." },
            {
              metin: "Sabit uç f(1) = 0 ve çözdüğümüz uç f(3) = 24.",
              goster: [
                "p",
                "q"
              ]
            },
            {
              metin: "Aralarındaki *secant*'ın eğimi (24 − 0)/(3 − 1) = ==12==: tam istenen değer.",
              goster: [
                "sec",
                "sl"
              ]
            }
          ]
        }
      ]
    },
    {
      baslik: "Ortalama hız 0 ise fonksiyon değişmedi mi?",
      kisa: "Ortalama hız 0, iki ucun aynı yükseklikte olduğunu söyler; arası bilinmez.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "İki ucu aynı yükseklikte olan eğri",
          xlabel: "x",
          ylabel: "y",
          xmax: 6,
          ymax: 5,
          xticks: [
            { v: 1, label: "1" },
            { v: 5, label: "5" }
          ],
          yticks: [
            { v: 2, label: "2" }
          ],
          ogeler: [
            {
              id: "f",
              tip: "egri",
              renk: 0,
              noktalar: [[0.5, 0.939], [0.75, 1.426], [1, 2], [1.25, 2.574], [1.5, 3.061], [1.75, 3.386], [2, 3.5], [2.25, 3.386], [2.5, 3.061], [2.75, 2.574], [3, 2], [3.25, 1.426], [3.5, 0.939], [3.75, 0.614], [4, 0.5], [4.25, 0.614], [4.5, 0.939], [4.75, 1.426], [5, 2], [5.25, 2.574], [5.5, 3.061]]
            },
            {
              id: "a",
              tip: "nokta",
              x: 1,
              y: 2,
              etiket: "(1, 2)",
              gizli: true
            },
            {
              id: "b",
              tip: "nokta",
              x: 5,
              y: 2,
              etiket: "(5, 2)",
              gizli: true
            },
            {
              id: "sec",
              tip: "cizgi",
              renk: 1,
              from: [1, 2],
              to: [5, 2],
              gizli: true
            },
            {
              id: "sl",
              tip: "yazi",
              x: 3,
              y: 4.6,
              metin: "ortalama hız = (2 − 2)/(5 − 1) = 0",
              gizli: true
            },
            {
              id: "t",
              tip: "nokta",
              x: 2,
              y: 3.5,
              etiket: "tepe",
              gizli: true
            },
            {
              id: "c",
              tip: "nokta",
              x: 4,
              y: 0.5,
              etiket: "çukur",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "Bir eğri, x = 1 ve x = 5'te aynı yükseklikte (y = 2)." },
            {
              metin: "İki ucu birleştiren *secant* yatay: ortalama değişim hızı 0.",
              goster: [
                "a",
                "b",
                "sec",
                "sl"
              ]
            },
            {
              metin: "Ama arada eğri yükselip alçalıyor: tepe de var, çukur da. ==Hız 0 ≠ değişim yok.==",
              goster: [
                "t",
                "c"
              ]
            }
          ]
        },
        {
          tip: "tuzak",
          metin: "Sıfır ortalama hız, aradaki davranış hakkında bilgi vermez.",
          yanlis: "Ortalama değişim hızı 0 ise fonksiyon hiç değişmemiştir.",
          dogru: "Sıfır, yalnızca ==f(a) = f(b)== demektir; arada tepe de olabilir, çukur da."
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
            "*Average rate of change*: (f(b) − f(a)) / (b − a), yani *secant line*'ın eğimi. f(b) − f(a) tek başına hız değildir.",
            "Birim: çıktının birimi bölü girdinin birimi (L/dk, °C/sa).",
            "Anlık değişim hızı bir limittir: h → 0 iken (f(a + h) − f(a)) / h.",
            "Aynı limit x → a iken (f(x) − f(a)) / (x − a) olarak da yazılır; ikisi de *tangent line*'ın eğimidir.",
            "Aralık daraldıkça *secant* döner ve *tangent*'a oturur: x² − 2x için x = 3'te eğimler 5, 4,1, 4,01 → 4.",
            "Limit kalıbında gizli f(a)'yı ara: 8 = 2³, −1 = cos π, 3 = √9.",
            "Ortalama hız 0, fonksiyonun hiç değişmediği anlamına gelmez; yalnızca f(a) = f(b) demektir."
          ]
        }
      ]
    }
  ]
};
