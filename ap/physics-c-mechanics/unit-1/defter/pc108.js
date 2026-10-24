/* Kitpath not defteri · pc108 · 1.3 Hareket Grafikleri: Eğim ve Alan
   Kaynak: ap-videolar/src/episodes/pc108 (script.ts + notes.md) ve ders sunumu (Bölüm 2: x–t, v–t grafikleri ve integralle hareket). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc108",
  amac: "Bu konu hareketin üç grafiğini birbirine bağlıyor: konum–zaman, hız–zaman ve ivme–zaman. Aşağı inerken eğimi, yukarı çıkarken alanı kullanarak bir grafikten ötekini çıkarmayı ve işaretli alanla yer değiştirme ile yolu bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Üç grafik, tek hareket",
      kisa: "x–t, v–t ve a–t aynı hareketi aynı zaman çizgisinde anlatır.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🛗",
          baslik: "Asansör üç grafikle anlatılır",
          metin: "Apartmanın asansörü zemin kattan yukarı çıkıyor. Aynı hareketi üç grafikle anlatabilirsin: konum–zaman, hız–zaman ve ivme–zaman. Üçü alt alta durur ve ==aynı zaman çizgisini== paylaşır. Aralarında gidip gelmenin iki anahtarı var: eğim ve alan."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📍",
              terim: "Position–time graph",
              tr: "konum–zaman grafiği",
              tanim: "Yatay eksen zaman, dikey eksen konum. Eğimi hızdır.",
              ornek: "Eğim 2 ise cisim 2 m/s ile gidiyor."
            },
            {
              ikon: "🏎️",
              terim: "Velocity–time graph",
              tr: "hız–zaman grafiği",
              tanim: "Eğimi ivme, altındaki işaretli alan yer değiştirmedir.",
              ornek: "(0, 0) → (4, 8) doğrusu: a = 2 m/s², alan 16 m."
            },
            {
              ikon: "🚀",
              terim: "Acceleration–time graph",
              tr: "ivme–zaman grafiği",
              tanim: "Altındaki işaretli alan hız değişimi Δv'dir.",
              ornek: "a = +1 m/s² iken 2 s: Δv = +2 m/s."
            }
          ]
        }
      ]
    },
    {
      baslik: "Kural: eğim aşağı, alan yukarı",
      kisa: "Türev aşağı, integral yukarı: eğim bir kademe indirir, alan bir kademe çıkarır.",
      bloklar: [
        {
          tip: "harita",
          merkez: "x–t → v–t → a–t",
          dallar: [
            { baslik: "x–t'nin eğimi", alt: "= hız: v = dx/dt" },
            { baslik: "v–t'nin eğimi", alt: "= ivme: a = dv/dt" },
            { baslik: "a–t'nin altındaki alan", alt: "= hız değişimi: Δv = ∫a dt" },
            { baslik: "v–t'nin altındaki alan", alt: "= yer değiştirme: Δx = ∫v dt" }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📐",
              terim: "Slope",
              tr: "eğim",
              tanim: "Grafiğin bir noktadaki dikliği: yükselme / yürüme. Eğri için teğetin eğimi, yani türev.",
              ornek: "v–t'de (0, 0) → (3, 6): eğim 2 m/s²."
            },
            {
              ikon: "🟩",
              terim: "Area under the curve",
              tr: "eğri altı alan",
              tanim: "Grafikle eksen arasındaki alan, yani integral. Eksenin altı negatif sayılır.",
              ornek: "v–t'de 3 s boyunca sabit 4 m/s: alan 12 m."
            }
          ]
        }
      ]
    },
    {
      baslik: "Asansör: üç bağlı grafik",
      kisa: "Aynı zaman imleci üç grafikte aynı anı gösterir: v, a ve x birlikte okunur.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Hız–zaman (v–t)",
          xlabel: "t (s)",
          ylabel: "v (m/s)",
          xmax: 10,
          ymax: 3,
          xticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" },
            { v: 10, label: "10" }
          ],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }],
          ogeler: [
            { id: "l1", tip: "cizgi", from: [0, 0], to: [2, 2], renk: 0 },
            { id: "l2", tip: "cizgi", from: [2, 2], to: [8, 2], renk: 0 },
            { id: "l3", tip: "cizgi", from: [8, 2], to: [10, 0], renk: 0 },
            { id: "cur", tip: "cizgi", from: [1, 0], to: [1, 3], renk: 2, kesik: true, gizli: true },
            { id: "pt", tip: "nokta", x: 1, y: 1, renk: 2, gizli: true },
            { id: "A1", tip: "alan", noktalar: [[0, 0], [2, 2], [2, 0]], renk: 1, gizli: true },
            { id: "A2", tip: "alan", noktalar: [[2, 0], [2, 2], [8, 2], [8, 0]], renk: 3, gizli: true },
            { id: "A3", tip: "alan", noktalar: [[8, 0], [8, 2], [10, 0]], renk: 1, gizli: true },
            { id: "k1", tip: "yazi", x: 1.4, y: 0.4, metin: "2", gizli: true },
            { id: "k2", tip: "yazi", x: 5, y: 1, metin: "12", gizli: true },
            { id: "k3", tip: "yazi", x: 8.7, y: 0.4, metin: "2", gizli: true }
          ],
          durumlar: [
            { metin: "Asansör 2 s'de durgunluktan 2 m/s'ye hızlanıyor, 6 s sabit hızla gidiyor, son 2 s'de duruyor." },
            { metin: "t = 1 s: çizgi yükseliyor. Eğim +1 ⇒ ==a = +1 m/s²==; v = 1 m/s.", goster: ["cur", "pt"] },
            {
              metin: "t = 5 s: çizgi yatay. Eğim 0 ⇒ a = 0, v = 2 m/s. ==İvme sıfır diye asansör durmuş değil==: sabit hızla çıkıyor.",
              set: { cur: { from: [5, 0], to: [5, 3] }, pt: { x: 5, y: 2 } }
            },
            {
              metin: "t = 9 s: çizgi iniyor. Eğim −1 ⇒ a = −1 m/s²; v = 1 m/s.",
              set: { cur: { from: [9, 0], to: [9, 3] }, pt: { x: 9, y: 1 } }
            },
            {
              metin: "Eğrinin altındaki alan yer değiştirmedir: 2 + 12 + 2 = 16 m (yaklaşık 5 kat).",
              gizle: ["cur", "pt"],
              goster: ["A1", "A2", "A3", "k1", "k2", "k3"]
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "İvme–zaman (a–t)",
          xlabel: "t (s)",
          ylabel: "a (m/s²)",
          xmax: 10,
          ymax: 2,
          xticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" },
            { v: 10, label: "10" }
          ],
          yticks: [{ v: 0, label: "-1" }, { v: 1, label: "0" }, { v: 2, label: "1" }],
          ogeler: [
            { id: "zero", tip: "cizgi", from: [0, 1], to: [10, 1], renk: 0, kesik: true },
            { id: "s1", tip: "cizgi", from: [0, 2], to: [2, 2], renk: 1 },
            { id: "s2", tip: "cizgi", from: [2, 1], to: [8, 1], renk: 3 },
            { id: "s3", tip: "cizgi", from: [8, 0], to: [10, 0], renk: 2 },
            { id: "cur", tip: "cizgi", from: [1, 0], to: [1, 2], renk: 2, kesik: true, gizli: true },
            { id: "pt", tip: "nokta", x: 1, y: 2, renk: 2, gizli: true }
          ],
          durumlar: [
            {
              metin: "a–t grafiği basamaklardan oluşur: +1, 0 ve −1 m/s². Her basamağın yüksekliği, v–t'deki ilgili parçanın eğimidir."
            },
            { metin: "t = 1 s: a = +1 m/s². v–t'de yükselen parça.", goster: ["cur", "pt"] },
            {
              metin: "t = 5 s: a = 0 m/s². Hız sabit.",
              set: { cur: { from: [5, 0], to: [5, 2] }, pt: { x: 5, y: 1 } }
            },
            {
              metin: "t = 9 s: a = −1 m/s². Hız azalıyor, asansör duruyor.",
              set: { cur: { from: [9, 0], to: [9, 2] }, pt: { x: 9, y: 0 } }
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Konum–zaman (x–t)",
          xlabel: "t (s)",
          ylabel: "x (m)",
          xmax: 10,
          ymax: 16,
          xticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" },
            { v: 10, label: "10" }
          ],
          yticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }, { v: 16, label: "16" }],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 0], [0.25, 0.031], [0.5, 0.125], [0.75, 0.281], [1, 0.5], [1.25, 0.781],
                [1.5, 1.125], [1.75, 1.531], [2, 2], [2.25, 2.5], [2.5, 3], [2.75, 3.5],
                [3, 4], [3.25, 4.5], [3.5, 5], [3.75, 5.5], [4, 6], [4.25, 6.5],
                [4.5, 7], [4.75, 7.5], [5, 8], [5.25, 8.5], [5.5, 9], [5.75, 9.5],
                [6, 10], [6.25, 10.5], [6.5, 11], [6.75, 11.5], [7, 12], [7.25, 12.5],
                [7.5, 13], [7.75, 13.5], [8, 14], [8.25, 14.469], [8.5, 14.875], [8.75, 15.219],
                [9, 15.5], [9.25, 15.719], [9.5, 15.875], [9.75, 15.969], [10, 16]
              ],
              renk: 0
            },
            { id: "cur", tip: "cizgi", from: [1, 0], to: [1, 16], renk: 2, kesik: true, gizli: true },
            { id: "pt", tip: "nokta", x: 1, y: 0.5, renk: 2, gizli: true },
            { id: "lb", tip: "yazi", x: 3.2, y: 2.4, metin: "yukarı bükülür", gizli: true }
          ],
          durumlar: [
            { metin: "x–t grafiği 0'dan 16 m'ye yükselir. Eğim her an v–t'deki yüksekliktir." },
            {
              metin: "t = 1 s: eğri yukarı bükülüyor (eğim artıyor): ==a > 0==. Konum 0,5 m.",
              goster: ["cur", "pt", "lb"]
            },
            {
              metin: "t = 5 s: çizgi düz, eğim 2 m/s sabit. Bükülme yok: a = 0. Konum 8 m.",
              set: { cur: { from: [5, 0], to: [5, 16] }, pt: { x: 5, y: 8 }, lb: { metin: "düz çizgi", x: 6.6, y: 4 } }
            },
            {
              metin: "t = 9 s: eğri aşağı bükülüyor (eğim azalıyor): ==a < 0==. Konum 15,5 m; t = 10'da yatay teğet.",
              set: {
                cur: { from: [9, 0], to: [9, 16] },
                pt: { x: 9, y: 15.5 },
                lb: { metin: "aşağı bükülür", x: 8, y: 6 }
              }
            }
          ]
        }
      ]
    },
    {
      baslik: "Bükülme ve ivmenin işareti",
      kisa: "x–t yukarı bükülüyorsa a > 0, aşağı bükülüyorsa a < 0, düzse a = 0.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "😊",
              terim: "Concave up",
              tr: "yukarı bükülme",
              tanim: "Eğri bir kâse gibi açılır; eğim artıyor. x–t'de bu a > 0 demektir.",
              ornek: "Asansörün ilk 2 saniyesi: eğim 0'dan 2 m/s'ye çıkıyor."
            },
            {
              ikon: "☹️",
              terim: "Concave down",
              tr: "aşağı bükülme",
              tanim: "Eğri ters kâse gibi kapanır; eğim azalıyor. x–t'de bu a < 0 demektir.",
              ornek: "Asansörün son 2 saniyesi: eğim 2'den 0'a iniyor."
            }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "😊", baslik: "*Concave up* (a > 0)", maddeler: ["x–t kâse gibi açılır", "eğim artıyor"] },
          sag: { ikon: "☹️", baslik: "*Concave down* (a < 0)", maddeler: ["x–t ters kâse gibi kapanır", "eğim azalıyor"] },
          oyun: [
            {
              metin: "x–t eğrisi yukarı doğru açılıyor, eğim gittikçe artıyor.",
              cevap: "sol",
              neden: "Eğim artıyor: yukarı bükülme, a > 0."
            },
            {
              metin: "Sağa giden bir cismin hareket diyagramında noktalar sıklaşıyor.",
              cevap: "sag",
              neden: "Sürat azalıyor: x–t yatıklaşır, aşağı bükülür, a < 0."
            },
            {
              metin: "Sağa giden bir cismin hareket diyagramında noktalar açılıyor.",
              cevap: "sol",
              neden: "Sürat artıyor: x–t dikleşir, yukarı bükülür, a > 0."
            },
            {
              metin: "x–t artan ama eğimi giderek azalan bir eğri (tepeye yaklaşıyor).",
              cevap: "sag",
              neden: "Eğim azalıyor: aşağı bükülme, a < 0."
            }
          ]
        }
      ]
    },
    {
      baslik: "Alan yalnızca değişimi verir",
      kisa: "Alan Δv ya da Δx verir; başlangıç değerini kendin eklersin.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "v", alt: "son hız" },
            "=",
            { t: "v₀", alt: "başlangıç hızı" },
            "+",
            { t: "∫ a dt", alt: "a–t altındaki alan (Δv)" }
          ],
          aciklama: "Konumda da aynı: x = x₀ + ∫ v dt."
        },
        {
          tip: "grafik",
          baslik: "Aynı a–t alanı, farklı başlangıç hızı",
          xlabel: "t (s)",
          ylabel: "v (m/s)",
          xmax: 3,
          ymax: 5,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          ogeler: [
            { id: "L0", tip: "cizgi", from: [0, 0], to: [2, 2], renk: 1 },
            { id: "t0", tip: "yazi", x: 2.5, y: 1.9, metin: "v₀ = 0", gizli: false },
            { id: "L1", tip: "cizgi", from: [0, 1], to: [2, 3], renk: 3, gizli: true },
            { id: "t1", tip: "yazi", x: 2.5, y: 2.9, metin: "v₀ = 1", gizli: true },
            { id: "L2", tip: "cizgi", from: [0, 2], to: [2, 4], renk: 2, gizli: true },
            { id: "t2", tip: "yazi", x: 2.5, y: 3.9, metin: "v₀ = 2", gizli: true },
            { id: "dv", tip: "yazi", x: 1, y: 4.6, metin: "hepsinde Δv = +2 m/s", gizli: true }
          ],
          durumlar: [
            {
              metin: "a = +1 m/s², 2 s boyunca: a–t altındaki alan 1 · 2 = 2. Durgun başlayan asansörde v(2) = 0 + 2 = 2 m/s."
            },
            { metin: "Aynı alan, v₀ = 1 m/s ile başlayan cisimde v(2) = 3 m/s verir.", goster: ["L1", "t1"] },
            { metin: "v₀ = 2 m/s ile başlarsa v(2) = 4 m/s.", goster: ["L2", "t2"] },
            {
              metin: "Üç çizgide de alan, yani Δv aynı: +2 m/s. Hızı bulmak için ==v₀'ı kendin eklersin==.",
              goster: ["dv"]
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Başlangıç değerini unutmak",
          metin: "a–t altındaki alan hız değil, hız değişimidir. Asansör durarak başladığı için v(2) = 0 + 2 = 2 m/s; aynı alan başka bir v₀ ile başka bir hız verirdi.",
          yanlis: "a–t altındaki alan = hız.",
          dogru: "Alan = Δv. Hız = v₀ + Δv; konum = x₀ + Δx."
        }
      ]
    },
    {
      baslik: "Alan hesabı: işaret ve eğri",
      kisa: "Eksenin altı negatif alandır; eğri altı alan için integral al.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Topun v–t grafiği: işaretli alan",
          xlabel: "t (s)",
          ylabel: "v (m/s)",
          xmax: 5,
          ymax: 8,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" }
          ],
          yticks: [{ v: 1, label: "-2" }, { v: 3, label: "0" }, { v: 5, label: "2" }, { v: 7, label: "4" }],
          ogeler: [
            { id: "zero", tip: "cizgi", from: [0, 3], to: [5, 3], renk: 0, kesik: true },
            { id: "u1", tip: "cizgi", from: [0, 7], to: [3, 7], renk: 1 },
            { id: "jmp", tip: "cizgi", from: [3, 7], to: [3, 1], renk: 0, kesik: true },
            { id: "u2", tip: "cizgi", from: [3, 1], to: [5, 1], renk: 2 },
            { id: "P", tip: "alan", noktalar: [[0, 3], [3, 3], [3, 7], [0, 7]], renk: 1, gizli: true },
            { id: "pt", tip: "yazi", x: 1.5, y: 4.6, metin: "+12", gizli: true },
            { id: "N", tip: "alan", noktalar: [[3, 3], [5, 3], [5, 1], [3, 1]], renk: 2, gizli: true },
            { id: "nt", tip: "yazi", x: 4, y: 1.6, metin: "−4", gizli: true },
            { id: "r1", tip: "yazi", x: 4.1, y: 6.2, metin: "Δx = 8 m", gizli: true },
            { id: "r2", tip: "yazi", x: 4.1, y: 5, metin: "yol = 16 m", gizli: true }
          ],
          durumlar: [
            { metin: "Top 4 m/s ile 3 s ileri gidiyor, duvardan dönüp 2 m/s ile 2 s geri geliyor (hız −2 m/s)." },
            { metin: "Eksenin üstündeki alan pozitif: 4 · 3 = +12 m.", goster: ["P", "pt"] },
            { metin: "Eksenin altındaki alan negatif: (−2) · 2 = −4 m.", goster: ["N", "nt"] },
            {
              metin: "==İşaretli toplam== yer değiştirmedir: 12 − 4 = 8 m. ==Mutlak değerlerin toplamı== yoldur: 12 + 4 = 16 m.",
              goster: ["r1", "r2"]
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "↔️",
              terim: "Displacement",
              tr: "yer değiştirme",
              tanim: "v–t altındaki işaretli alanların toplamı: Δx = ∫v dt.",
              ornek: "12 − 4 = 8 m."
            },
            {
              ikon: "👣",
              terim: "Distance",
              tr: "alınan yol",
              tanim: "Alanların mutlak değerlerinin toplamı.",
              ornek: "12 + 4 = 16 m."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "v = 3t² (m/s), 0–2 s",
          xlabel: "t (s)",
          ylabel: "v (m/s)",
          xmax: 3,
          ymax: 14,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }],
          yticks: [{ v: 3, label: "3" }, { v: 6, label: "6" }, { v: 9, label: "9" }, { v: 12, label: "12" }],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 0], [0.125, 0.047], [0.25, 0.188], [0.375, 0.422], [0.5, 0.75], [0.625, 1.172],
                [0.75, 1.688], [0.875, 2.297], [1, 3], [1.125, 3.797], [1.25, 4.688], [1.375, 5.672],
                [1.5, 6.75], [1.625, 7.922], [1.75, 9.188], [1.875, 10.547], [2, 12]
              ],
              renk: 0
            },
            {
              id: "A",
              tip: "alan",
              noktalar: [[0, 0], [0.125, 0.047], [0.25, 0.188], [0.375, 0.422], [0.5, 0.75], [0.625, 1.172], [0.75, 1.688], [0.875, 2.297], [1, 3], [1.125, 3.797], [1.25, 4.688], [1.375, 5.672], [1.5, 6.75], [1.625, 7.922], [1.75, 9.188], [1.875, 10.547], [2, 12], [2, 0]],
              renk: 1,
              gizli: true
            },
            { id: "at", tip: "yazi", x: 1.5, y: 2.4, metin: "8 m", gizli: true },
            { id: "tri", tip: "cizgi", from: [0, 0], to: [2, 12], renk: 2, kesik: true, gizli: true },
            { id: "tt", tip: "yazi", x: 0.8, y: 9.8, metin: "üçgen: 12 ✗", gizli: true }
          ],
          durumlar: [
            { metin: "Hız eğri: v = 3t². Altındaki alan üçgen ya da dikdörtgen değil." },
            { metin: "Doğru yol integral: Δx = ∫₀² 3t² dt = [t³]₀² = ==8 m==.", goster: ["A", "at"] },
            {
              metin: "Eğriyi düz çizgi sanıp üçgen alsaydın ½ · 2 · 12 = 12 m bulurdun: 4 m fazla.",
              goster: ["tri", "tt"]
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Eğri altı alanı üçgenle bulma",
          metin: "v = 3t² doğru değil, eğridir. Düz çizgi sanıp üçgen alırsan 12 m bulur, gerçek değerden 4 m fazla yazarsın.",
          yanlis: "Eğri altı alan = ½ · taban · yükseklik.",
          dogru: "Eğri ise integral al: ∫₀² 3t² dt = 8 m."
        }
      ]
    },
    {
      baslik: "AP örneği: grafikten grafiğe çeviri",
      kisa: "Verilen v–t'den a(8), Δx ve a–t çizimini adım adım çıkar.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Bisikletlinin v–t grafiği",
          durum: "Bisikletli 3 s'de 0'dan 6 m/s'ye çıkıyor, t = 7 s'ye kadar 6 m/s'de gidiyor, t = 10 s'de duruyor. a(8), 0–10 s yer değiştirmesi ve ortalama hızı bul; a–t grafiğini çiz.",
          adimlar: [
            "a(8): son parçanın eğimi (0 − 6)/(10 − 7) = −2 m/s².",
            "Alanlar: ½ · 3 · 6 = 9; 4 · 6 = 24; ½ · 3 · 6 = 9 ⇒ Δx = 42 m.",
            "Ortalama hız = Δx/Δt = 42/10 = 4,2 m/s.",
            "a–t: 0–3 s için +2; 3–7 s için 0; 7–10 s için −2 m/s². Basamak yüksekliği, o parçanın v–t eğimidir."
          ],
          sonuc: "a(8) = −2 m/s², Δx = 42 m, ortalama hız 4,2 m/s"
        },
        {
          tip: "grafik",
          baslik: "Bisikletlinin v–t grafiği",
          xlabel: "t (s)",
          ylabel: "v (m/s)",
          xmax: 11,
          ymax: 8,
          xticks: [{ v: 3, label: "3" }, { v: 7, label: "7" }, { v: 10, label: "10" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "b1", tip: "cizgi", from: [0, 0], to: [3, 6], renk: 0 },
            { id: "b2", tip: "cizgi", from: [3, 6], to: [7, 6], renk: 0 },
            { id: "b3", tip: "cizgi", from: [7, 6], to: [10, 0], renk: 0 },
            { id: "e3", tip: "yazi", x: 9.2, y: 4.2, metin: "eğim = −2", gizli: true },
            { id: "B1", tip: "alan", noktalar: [[0, 0], [3, 6], [3, 0]], renk: 1, gizli: true },
            { id: "B2", tip: "alan", noktalar: [[3, 0], [3, 6], [7, 6], [7, 0]], renk: 3, gizli: true },
            { id: "B3", tip: "alan", noktalar: [[7, 0], [7, 6], [10, 0]], renk: 1, gizli: true },
            { id: "m1", tip: "yazi", x: 2.3, y: 1.2, metin: "9", gizli: true },
            { id: "m2", tip: "yazi", x: 5, y: 3, metin: "24", gizli: true },
            { id: "m3", tip: "yazi", x: 8.7, y: 1.2, metin: "9", gizli: true },
            { id: "tot", tip: "yazi", x: 5.5, y: 7.3, metin: "Δx = 42 m", gizli: true }
          ],
          durumlar: [
            { metin: "v–t: 3 s'de 0 → 6 m/s, 7. saniyeye kadar sabit, 10. saniyede duruyor." },
            { metin: "a(8): son parçanın eğimi = (0 − 6)/(10 − 7) = ==−2 m/s²==.", goster: ["e3"] },
            { metin: "Alanlar: ½·3·6 = 9, 4·6 = 24, ½·3·6 = 9.", goster: ["B1", "B2", "B3", "m1", "m2", "m3"] },
            { metin: "Toplam Δx = 9 + 24 + 9 = 42 m; ortalama hız 42/10 = 4,2 m/s.", goster: ["tot"] }
          ]
        },
        {
          tip: "grafik",
          baslik: "İstenen çizim: a–t",
          xlabel: "t (s)",
          ylabel: "a (m/s²)",
          xmax: 11,
          ymax: 6,
          xticks: [{ v: 3, label: "3" }, { v: 7, label: "7" }, { v: 10, label: "10" }],
          yticks: [{ v: 1, label: "-2" }, { v: 3, label: "0" }, { v: 5, label: "2" }],
          ogeler: [
            { id: "zero", tip: "cizgi", from: [0, 3], to: [11, 3], renk: 0, kesik: true },
            { id: "c1", tip: "cizgi", from: [0, 5], to: [3, 5], renk: 1, gizli: true },
            { id: "c2", tip: "cizgi", from: [3, 3], to: [7, 3], renk: 3, gizli: true },
            { id: "c3", tip: "cizgi", from: [7, 1], to: [10, 1], renk: 2, gizli: true },
            { id: "j1", tip: "cizgi", from: [3, 5], to: [3, 3], renk: 0, kesik: true, gizli: true },
            { id: "j2", tip: "cizgi", from: [7, 3], to: [7, 1], renk: 0, kesik: true, gizli: true },
            { id: "q1", tip: "yazi", x: 1.5, y: 5.5, metin: "+2", gizli: true },
            { id: "q3", tip: "yazi", x: 8.5, y: 1.5, metin: "−2", gizli: true }
          ],
          durumlar: [
            { metin: "a–t ekseni boş. Her v–t parçası için bir basamak çizeceksin." },
            { metin: "0–3 s: v–t eğimi +2 ⇒ a–t'de +2 m/s² basamağı.", goster: ["c1", "q1"] },
            { metin: "3–7 s: v–t yatay ⇒ a = 0.", goster: ["c2"] },
            { metin: "7–10 s: eğim −2 ⇒ a = −2 m/s².", goster: ["c3", "q3"] },
            { metin: "v–t'deki köşeler (t = 3 ve 7 s), a–t'de basamak sıçramalarıdır.", goster: ["j1", "j2"] }
          ]
        }
      ]
    },
    {
      baslik: "Sınav ne ister?",
      kisa: "Grafikler arası çeviride ölçek değil, özellikler puanlanır.",
      bloklar: [
        {
          tip: "liste",
          maddeler: [
            { ikon: "✅", baslik: "Eğimin işareti", metin: "Artı, eksi ya da sıfır doğru olsun." },
            { ikon: "✅", baslik: "Bükülme yönü", metin: "x–t yukarı bükülüyorsa a > 0." },
            {
              ikon: "✅",
              baslik: "Sıfır geçişleri",
              metin: "v = 0 anında x–t'de tepe ya da dip; v en büyükken a = 0."
            },
            { ikon: "✅", baslik: "Köşeler", metin: "v–t'nin düz parçası, a–t'de yatay basamak olur." },
            { ikon: "✍️", baslik: "Eksen adı ve birim", metin: "t (s), v (m/s), a (m/s²) yaz." },
            {
              ikon: "🧠",
              baslik: "Eğim ve alanın anlamı",
              metin: "Sorulabilir; ileride F–t grafiğinin altı impuls olacak."
            },
            {
              ikon: "➖",
              baslik: "Kesin ölçek gerekmez",
              metin: "Alanları üçgen ve dikdörtgenle, eğriyse integralle hesapla."
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Konum sıçramaz",
          metin: "Konum sürekli bir fonksiyondur. v–t'deki köşe a–t'de basamak olur; x–t'de ise yalnızca eğim değişir, grafik kopmaz.",
          yanlis: "x–t grafiğinde konum bir anda sıçrayabilir.",
          dogru: "Konum sürekli: x–t kopmadan çizilir; ivme değişince yalnızca bükülme yönü değişir."
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
            "Aşağı inerken eğim: x–t'nin eğimi hız, v–t'nin eğimi ivme.",
            "Yukarı çıkarken alan: a–t altındaki alan Δv, v–t altındaki alan Δx.",
            "Alan yalnızca değişimi verir: v = v₀ + Δv, x = x₀ + Δx.",
            "x–t yukarı bükülüyorsa a > 0, aşağı bükülüyorsa a < 0, düzse a = 0.",
            "Eksenin altındaki alan negatif; yer değiştirme için topla, yol için mutlak değerleri topla.",
            "Eğri altı alan için integral al; eğriyi düz çizgi sanma.",
            "Asansör: 2 + 12 + 2 = 16 m. Bisikletli: 9 + 24 + 9 = 42 m.",
            "a–t çiziminde eğim işareti, sıfır geçişi ve köşeler doğru olsun; eksenleri adlandır."
          ]
        }
      ]
    }
  ]
};
