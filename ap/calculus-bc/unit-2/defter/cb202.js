/* Kitora not defteri · cb202 · 2.2 Türevin Tanımı ve Gösterimleri
   Kaynak: ap-videolar/src/episodes/cb202 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb202",
  amac: "Bu konu türevi tanıtıyor: her x için teğetin eğimini veren yeni bir fonksiyon. Limit tanımıyla türev almayı, f′(x) ve dy/dx gösterimlerini, teğet doğrusunu ve türevin bağlamdaki anlamını öğreneceksin.",
  bolumler: [
    {
      baslik: "Türev: her x için bir eğim",
      kisa: "Türev, her x'teki teğet eğimini veren yeni bir fonksiyondur.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "⚙️",
          baslik: "Eğim makinesi",
          metin: "Geçen bölümde tek bir noktadaki eğimi bulduk. Her nokta için hesabı baştan yapmak yerine bir makine kuruyoruz: içine ==f(x)== atıyorsun, dışarı her x'teki eğimi veren ==f′(x)== çıkıyor."
        },
        {
          tip: "formul",
          parcalar: [
            { t: "f(x)", alt: "fonksiyon" },
            "→",
            { t: "türev almak", alt: "limit tanımı" },
            "→",
            { t: "f′(x)", alt: "her x'teki eğim" }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔧",
              terim: "Derivative",
              tr: "türev",
              tanim: "Her x için o noktadaki teğetin eğimini veren fonksiyon. Sonuç bir sayı değil, x'in fonksiyonudur.",
              ornek: "f(x) = x² için f′(x) = 2x."
            },
            {
              ikon: "🏎️",
              terim: "Rate of change",
              tr: "değişim hızı",
              tanim: "Çıktının girdiye göre ne kadar hızlı değiştiği. Türev, bunun anlık hâlidir.",
              ornek: "Bir noktadaki türev = o andaki hız."
            }
          ]
        }
      ]
    },
    {
      baslik: "Türevin limit tanımı",
      kisa: "Türev, anlık hız limitinin a yerine x yazılmış hâlidir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "f′(x)" },
            "=",
            { t: "lim (h → 0) [f(x + h) − f(x)] / h", alt: "h sıfıra yaklaşırken" }
          ],
          aciklama: "h'yi doğrudan 0 yapamazsın (0/0 çıkar); bu yüzden limit alırsın. x yerine bir sayı koyunca o noktadaki teğetin eğimini bulursun: f′(3), x = 3'teki eğimdir."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📜",
              terim: "Definition of the derivative",
              tr: "türevin tanımı",
              tanim: "Yukarıdaki limit. x'e bağlı olduğu için sonucu bir fonksiyondur.",
              ornek: "f(x) = x²: limit 2x + h → 2x."
            },
            {
              ikon: "✅",
              terim: "Differentiable",
              tr: "türevlenebilir",
              tanim: "Limit bir sayı olarak varsa f o noktada türevlenebilirdir.",
              ornek: "x², her x'te türevlenebilir."
            }
          ]
        }
      ]
    },
    {
      baslik: "x² örneği: eğimlerden f′(x) = 2x",
      kisa: "Teğet eğimlerini işaretleyince y = 2x doğrusu çıkar: türev 2x.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "f(x) = x² için tanımla türev",
          durum: "Limit tanımıyla f′(x)'i bul.",
          adimlar: [
            "f(x + h) = (x + h)² = x² + 2xh + h².",
            "Çıkar: f(x + h) − f(x) = 2xh + h².",
            "h'ye böl: (2xh + h²) / h = 2x + h.",
            "h → 0: 2x + h → 2x."
          ],
          sonuc: "f′(x) = ==2x==. Kontrol: f′(−2) = −4, f′(1) = 2, f′(2) = 4."
        },
        {
          tip: "grafik",
          baslik: "f(x) = x²: teğet kayarken eğimi ölç",
          xlabel: "x",
          ylabel: "y",
          xmax: 6,
          ymax: 9,
          xticks: [
            { v: 0, label: "−3" },
            { v: 1, label: "−2" },
            { v: 3, label: "0" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" }
          ],
          yticks: [
            { v: 4, label: "4" },
            { v: 9, label: "9" }
          ],
          ogeler: [
            {
              id: "f",
              tip: "egri",
              renk: 0,
              etiket: "x²",
              noktalar: [[0, 9], [0.5, 6.25], [1, 4], [1.5, 2.25], [2, 1], [2.5, 0.25], [3, 0], [3.5, 0.25], [4, 1], [4.5, 2.25], [5, 4], [5.5, 6.25], [6, 9]]
            },
            { id: "pt", tip: "nokta", x: 1, y: 4 },
            { id: "tg", tip: "cizgi", renk: 1, from: [0.2, 7.2], to: [2, 0] },
            { id: "sl", tip: "yazi", x: 3.1, y: 8.4, metin: "x = −2: eğim = −4", hiza: "start" }
          ],
          durumlar: [
            { metin: "x = −2'de teğet aşağı eğimli: eğim ==−4==." },
            {
              metin: "x = 1'e kaydı: eğim ==2==.",
              set: {
                pt: { x: 4, y: 1 },
                tg: { from: [3.5, 0], to: [4.8, 2.6] },
                sl: { metin: "x = 1: eğim = 2" }
              }
            },
            {
              metin: "x = 2'de eğim ==4==. Eğim, x büyüdükçe artıyor.",
              set: {
                pt: { x: 5, y: 4 },
                tg: { from: [4, 0], to: [5.8, 7.2] },
                sl: { metin: "x = 2: eğim = 4" }
              }
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Eğimleri işaretle: f′ grafiği",
          xlabel: "x",
          ylabel: "f′(x)",
          xmax: 6,
          ymax: 12,
          xticks: [
            { v: 0, label: "−3" },
            { v: 1, label: "−2" },
            { v: 3, label: "0" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" }
          ],
          yticks: [
            { v: 0, label: "−6" },
            { v: 2, label: "−4" },
            { v: 6, label: "0" },
            { v: 8, label: "2" },
            { v: 10, label: "4" },
            { v: 12, label: "6" }
          ],
          ogeler: [
            {
              id: "xa",
              tip: "cizgi",
              renk: 3,
              kesik: true,
              from: [0, 6],
              to: [6, 6]
            },
            {
              id: "ya",
              tip: "cizgi",
              renk: 3,
              kesik: true,
              from: [3, 0],
              to: [3, 12]
            },
            { id: "p1", tip: "nokta", x: 1, y: 2, etiket: "(−2, −4)" },
            {
              id: "p2",
              tip: "nokta",
              x: 4,
              y: 8,
              etiket: "(1, 2)",
              gizli: true
            },
            {
              id: "p3",
              tip: "nokta",
              x: 5,
              y: 10,
              etiket: "(2, 4)",
              gizli: true
            },
            {
              id: "fp",
              tip: "cizgi",
              renk: 1,
              from: [0, 0],
              to: [6, 12],
              etiket: "f′(x) = 2x",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Üstteki grafikte x = −2'de eğim −4 idi: (−2, −4) noktasını işaretle. Kesikli çizgiler gerçek eksenler."
            },
            {
              metin: "x = 1'de eğim 2: (1, 2).",
              goster: [
                "p2"
              ]
            },
            {
              metin: "x = 2'de eğim 4: (2, 4).",
              goster: [
                "p3"
              ]
            },
            {
              metin: "Noktalar bir doğru üzerinde: ==f′(x) = 2x==. Her x için eğimi veren yeni bir fonksiyon!",
              goster: [
                "fp"
              ]
            }
          ]
        }
      ]
    },
    {
      baslik: "Tanımla türev almak: polinom",
      kisa: "Aç, f(x)'i parantezle çıkar, h'ye böl; her terimde h kalmalı.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "f(x) = 3x² + 5x − 2",
          durum: "Tanımı kullanarak f′(x)'i bul.",
          adimlar: [
            "f(x + h) = 3(x + h)² + 5(x + h) − 2 = 3x² + 6xh + 3h² + 5x + 5h − 2.",
            "Çıkar: f(x + h) − (3x² + 5x − 2) = 6xh + 3h² + 5h (3x², 5x ve −2 birbirini götürür).",
            "h'ye böl: 6x + 3h + 5.",
            "h → 0: 6x + 5."
          ],
          sonuc: "f′(x) = ==6x + 5==. Kontrol: x = 1 için 11."
        },
        {
          tip: "tuzak",
          metin: "Çıkarmadan sonra h'siz terim kalıyorsa hesapta hata vardır.",
          yanlis: "f(x + h) − f(x) alırken eksi işaretini yalnızca ilk terime uygulamak.",
          dogru: "f(x)'i ==parantez içinde== çıkar: bütün terimlerin işareti döner. Pay sadeleşince her terimde h kalmalı; kalmıyorsa bir işlemi yanlış yaptın."
        }
      ]
    },
    {
      baslik: "Kesirli fonksiyon: 1/x",
      kisa: "Ortak paydaya getir; 1/x'in türevi −1/x² her yerde negatiftir.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "f(x) = 1/x",
          durum: "Tanımla f′(x)'i bul. (Unit 1'in cebir aletleri burada işe yarıyor.)",
          adimlar: [
            "f(x + h) − f(x) = 1/(x + h) − 1/x.",
            "Ortak payda x(x + h): [x − (x + h)] / [x(x + h)] = −h / [x(x + h)].",
            "h'ye böl: −1 / [x(x + h)].",
            "h → 0: −1 / x²."
          ],
          sonuc: "f′(x) = ==−1/x²==. x = 2 için −1/4."
        },
        {
          tip: "grafik",
          baslik: "f(x) = 1/x: teğet hep aşağı eğimli",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 4,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" }
          ],
          ogeler: [
            {
              id: "f",
              tip: "egri",
              renk: 0,
              etiket: "1/x",
              noktalar: [[0.3, 3.333], [0.4, 2.5], [0.5, 2], [0.65, 1.538], [0.8, 1.25], [1, 1], [1.25, 0.8], [1.5, 0.667], [2, 0.5], [2.5, 0.4], [3, 0.333], [3.5, 0.286], [4, 0.25]]
            },
            { id: "pt", tip: "nokta", x: 0.5, y: 2 },
            { id: "tg", tip: "cizgi", renk: 1, from: [0.35, 2.6], to: [0.9, 0.4] },
            { id: "sl", tip: "yazi", x: 2.2, y: 3.5, metin: "x = 0,5: eğim = −4", hiza: "start" }
          ],
          durumlar: [
            { metin: "x = 0,5'te teğet çok dik iniyor: eğim ==−4==." },
            {
              metin: "x = 1'de eğim −1.",
              set: {
                pt: { x: 1, y: 1 },
                tg: { from: [0.5, 1.5], to: [1.8, 0.2] },
                sl: { metin: "x = 1: eğim = −1" }
              }
            },
            {
              metin: "x = 2'de eğim −1/4: iniş yavaşlıyor ama hep negatif. −1/x² her yerde negatiftir.",
              set: {
                pt: { x: 2, y: 0.5 },
                tg: { from: [1, 0.75], to: [3.2, 0.2] },
                sl: { metin: "x = 2: eğim = −1/4" }
              }
            }
          ]
        }
      ]
    },
    {
      baslik: "Türevin yazılışları: *Lagrange* ve *Leibniz*",
      kisa: "f′(x) ve y′ Lagrange; dy/dx ve d/dx Leibniz; hepsi aynı türev.",
      bloklar: [
        {
          tip: "ikili",
          sol: {
            ikon: "✏️",
            baslik: "*Lagrange* gösterimi",
            maddeler: [
              "f′(x) ya da y′ (\"f üssü x\", \"y üssü\")",
              "Noktada: f′(3)"
            ]
          },
          sag: {
            ikon: "➗",
            baslik: "*Leibniz* gösterimi",
            maddeler: [
              "dy/dx ya da d/dx f(x)",
              "\"y'deki küçücük değişim bölü x'teki küçücük değişim\"",
              "Birimi de gösterir: y metre, x saniye ise m/s"
            ]
          },
          oyun: [
            { metin: "y′", cevap: "sol", neden: "Üssü işaretli kısa yazılış: Lagrange." },
            { metin: "dy/dx", cevap: "sag", neden: "Küçük değişimlerin oranı: Leibniz." },
            { metin: "f′(3)", cevap: "sol", neden: "Noktadaki değerin Lagrange yazılışı." },
            { metin: "d/dx f(x)", cevap: "sag", neden: "\"x'e göre türev al\" işlemi: Leibniz." },
            {
              metin: "y metre, x saniye ise birim m/s.",
              cevap: "sag",
              neden: "dy/dx çıktı birimi bölü girdi birimini gösterir."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "f′(3)" },
            "=",
            { t: "dy/dx", alt: "x = 3'te" }
          ],
          aciklama: "İkisi de aynı sayıyı anlatır: x = 3'teki teğet eğimi."
        }
      ]
    },
    {
      baslik: "Teğet doğrusu: nokta ve eğim",
      kisa: "Nokta f'den, eğim f′'den gelir; sonra nokta-eğim formu.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📍",
              terim: "Tangent line",
              tr: "teğet doğrusu",
              tanim: "(a, f(a)) noktasından geçen, eğimi f′(a) olan doğru.",
              ornek: "x² için x = 1'de eğim 2."
            },
            {
              ikon: "📝",
              terim: "Point-slope form",
              tr: "nokta-eğim formu",
              tanim: "y − y₁ = m(x − x₁): bir nokta ve eğimle doğru denklemi.",
              ornek: "(1, 6) ve m = 11: y − 6 = 11(x − 1)."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "f(x) = 3x² + 5x − 2, x = 1",
          durum: "x = 1'deki teğet doğrusunun denklemi nedir?",
          adimlar: [
            "Nokta f'den: f(1) = 3 + 5 − 2 = 6, yani (1, 6).",
            "Eğim f′'den: f′(x) = 6x + 5, f′(1) = 11.",
            "Nokta-eğim: y − 6 = 11(x − 1)."
          ],
          sonuc: "Teğet: ==y − 6 = 11(x − 1)==, yani y = 11x − 5."
        },
        {
          tip: "ornek",
          baslik: "g(2) = −3 ve g′(x) = (x³ + 4) / x",
          durum: "x = 2'deki teğet doğrusunu bul.",
          adimlar: [
            "Nokta g'den: (2, −3).",
            "Eğim g′'den: g′(2) = (8 + 4) / 2 = 6.",
            "Nokta-eğim: y + 3 = 6(x − 2)."
          ],
          sonuc: "Teğet: ==y + 3 = 6(x − 2)==."
        },
        {
          tip: "tuzak",
          metin: "g′(2) = 6 değerini noktanın y'si sanma.",
          yanlis: "Nokta (2, 6), çünkü g′(2) = 6.",
          dogru: "g′(2) ==eğimi== verir; noktanın y değeri g(2) = −3'tür. Nokta her zaman g'den, eğim g′'den gelir."
        }
      ]
    },
    {
      baslik: "Bağlamda türev: değer mi, hız mı?",
      kisa: "P′(10) bir hızdır: 10. günde izlenme günde 1500 hızla artıyor.",
      bloklar: [
        {
          tip: "ikili",
          sol: {
            ikon: "🧮",
            baslik: "P(10) = 20 000",
            maddeler: [
              "Değer: miktar",
              "10. günün sonunda 20 000 izlenme",
              "Birimi: izlenme"
            ]
          },
          sag: {
            ikon: "🚀",
            baslik: "P′(10) = 1500",
            maddeler: [
              "Türev: hız",
              "10. günde izlenme günde 1500 hızla artıyor",
              "Birimi: izlenme/gün"
            ]
          },
          oyun: [
            {
              metin: "10. günün sonunda video toplam 20 000 kez izlenmiş.",
              cevap: "sol",
              neden: "Miktarı verir: P'nin değeri."
            },
            { metin: "10. günde izlenme sayısı günde 1500 hızla artıyor.", cevap: "sag", neden: "Anlık hız: türev." },
            { metin: "Birimi izlenme/gün.", cevap: "sag", neden: "Türevin birimi: çıktı bölü girdi." },
            { metin: "Birimi izlenme.", cevap: "sol", neden: "Miktarın birimi çıktının birimidir." }
          ]
        },
        {
          tip: "adimlar",
          baslik: "Sınavda cümleyi tam kur",
          adimlar: [
            { baslik: "1. An", metin: "t = 10. günde" },
            { baslik: "2. Ne değişiyor", metin: "izlenme sayısı" },
            { baslik: "3. Artıyor mu, azalıyor mu", metin: "artıyor (P′ > 0)" },
            { baslik: "4. Hız", metin: "1500" },
            { baslik: "5. Birim", metin: "izlenme/gün" }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📏",
              terim: "Units",
              tr: "birim",
              tanim: "Türevin birimi her zaman çıktının birimi bölü girdinin birimidir.",
              ornek: "izlenme/gün, litre/dakika."
            }
          ]
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
            "Türev: h → 0 iken [f(x + h) − f(x)] / h; her x'te teğetin eğimini veren fonksiyon.",
            "Tanımla hesap: aç, f(x)'i parantezle çıkar, h'ye böl, h'yi 0'a götür. Çıkarmadan sonra her terimde h kalmalı.",
            "x² → 2x, 3x² + 5x − 2 → 6x + 5, 1/x → −1/x².",
            "*Differentiable*: limit bir sayı olarak varsa f o noktada türevlenebilirdir.",
            "Gösterimler: f′(x), y′ (*Lagrange*); dy/dx, d/dx (*Leibniz*).",
            "Teğet: nokta f'den (a, f(a)), eğim f′(a); y − y₁ = m(x − x₁). f′(a) bir eğimdir, y değeri değil.",
            "Bağlamda: an, ne değişiyor, artıyor/azalıyor, hız, birim (çıktı/girdi)."
          ]
        }
      ]
    }
  ]
};
