/* Kitpath not defteri · pc203 · 2.3 İkinci Dereceden Fonksiyonlar
   Kaynak: öğretmenin ders sunumu (Unit#2_2 Quadratic Functions) + Review for Exam#2; ders notuyla aynı terim ve gösterim. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc203",
  amac: "Bu konu ikinci dereceden fonksiyonun grafiği olan parabolü anlatıyor. Tepe noktasını, simetri eksenini, eksenleri kestiği noktaları, üç biçimi, bir doğru ile parabolün konumunu ve en büyük ya da en küçük değer problemlerini öğreneceksin.",
  bolumler: [
    {
      baslik: "Parabol ve a katsayısı",
      kisa: "f(x) = ax² + bx + c bir paraboldür; a yönü ve genişliği belirler.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📈",
              terim: "Quadratic function",
              tr: "ikinci dereceden fonksiyon",
              tanim: "f(x) = ax² + bx + c, a, b, c ∈ ℝ ve a ≠ 0. Domain (−∞, ∞); grafiği parabol.",
              ornek: "f(x) = x² − 4x + 3."
            },
            {
              ikon: "🌙",
              terim: "Parabola",
              tr: "parabol",
              tanim: "İkinci dereceden fonksiyonun U biçimli grafiği; simetri eksenine göre aynalanır.",
              ornek: "Havaya atılan topun yolu."
            },
            {
              ikon: "🏔️",
              terim: "Vertex",
              tr: "tepe noktası",
              tanim: "Parabolün dönüş noktası: a > 0 ise en alçak, a < 0 ise en yüksek nokta.",
              ornek: "x² − 4x + 3 için (2, −1)."
            },
            {
              ikon: "🪞",
              terim: "Axis of symmetry",
              tr: "simetri ekseni",
              tanim: "Tepe noktasından geçen dikey doğru; parabolü iki eş parçaya böler.",
              ornek: "x² − 4x + 3 için x = 2."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "a katsayısı yönü ve genişliği belirler",
          xlabel: "x",
          ylabel: "y",
          xmax: 8,
          ymax: 14,
          xticks: [
            { v: 1, label: "−3" },
            { v: 2, label: "−2" },
            { v: 3, label: "−1" },
            { v: 5, label: "1" },
            { v: 6, label: "2" },
            { v: 7, label: "3" }
          ],
          yticks: [
            { v: 1, label: "−4" },
            { v: 3, label: "−2" },
            { v: 7, label: "2" },
            { v: 9, label: "4" },
            { v: 11, label: "6" },
            { v: 13, label: "8" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 5], to: [8, 5], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [4, 0], to: [4, 14], etiket: "y" },
            {
              id: "p1",
              tip: "egri",
              noktalar: [
                [2, 9], [2.25, 8.063], [2.5, 7.25], [2.75, 6.563], [3, 6], [3.25, 5.563],
                [3.5, 5.25], [3.75, 5.063], [4, 5], [4.25, 5.063], [4.5, 5.25], [4.75, 5.563],
                [5, 6], [5.25, 6.563], [5.5, 7.25], [5.75, 8.063], [6, 9]
              ],
              renk: 0,
              etiket: "x²"
            },
            {
              id: "p2",
              tip: "egri",
              noktalar: [
                [2, 13], [2.25, 11.125], [2.5, 9.5], [2.75, 8.125], [3, 7], [3.25, 6.125],
                [3.5, 5.5], [3.75, 5.125], [4, 5], [4.25, 5.125], [4.5, 5.5], [4.75, 6.125],
                [5, 7], [5.25, 8.125], [5.5, 9.5], [5.75, 11.125], [6, 13]
              ],
              renk: 2,
              etiket: "2x²",
              gizli: true
            },
            {
              id: "p3",
              tip: "egri",
              noktalar: [
                [2, 7], [2.25, 6.531], [2.5, 6.125], [2.75, 5.781], [3, 5.5], [3.25, 5.281],
                [3.5, 5.125], [3.75, 5.031], [4, 5], [4.25, 5.031], [4.5, 5.125], [4.75, 5.281],
                [5, 5.5], [5.25, 5.781], [5.5, 6.125], [5.75, 6.531], [6, 7]
              ],
              renk: 1,
              etiket: "½x²",
              gizli: true
            },
            {
              id: "p4",
              tip: "egri",
              noktalar: [
                [2, 1], [2.25, 1.938], [2.5, 2.75], [2.75, 3.438], [3, 4], [3.25, 4.438],
                [3.5, 4.75], [3.75, 4.938], [4, 5], [4.25, 4.938], [4.5, 4.75], [4.75, 4.438],
                [5, 4], [5.25, 3.438], [5.5, 2.75], [5.75, 1.938], [6, 1]
              ],
              renk: 3,
              etiket: "−x²",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "f(x) = x²: a = 1 > 0, yukarı açılan parabol, tepe (0, 0)." },
            { metin: "a = 2: y'ler 2 katı, parabol ==daralır==.", goster: ["p2"] },
            { metin: "a = ½: y'ler yarıya iner, parabol ==genişler==.", gizle: ["p2"], goster: ["p3"] },
            {
              metin: "a = −1 < 0: parabol ==aşağı== açılır; tepe noktası artık en yüksek nokta.",
              gizle: ["p3"],
              goster: ["p4"]
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "a ve c ne söyler?",
          head: ["Katsayı", "Durum", "Etkisi"],
          rows: [
            [
              "a",
              "a > 0",
              "yukarı açılır, tepe noktası minimum"
            ],
            [
              "a",
              "a < 0",
              "aşağı açılır, tepe noktası maksimum"
            ],
            ["a", "|a| büyük / küçük", "parabol dar / geniş"],
            ["c", "f(0) = c", "y-kesişimi (0, c)"]
          ],
          not: "Sınavda böyle yaz: *The parabola opens upward because a > 0.*"
        }
      ]
    },
    {
      baslik: "Tepe noktası ve simetri ekseni",
      kisa: "Tepe noktasının x'i −b/2a'dır; y'si bu x'in f değeridir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "h = −b/2a", alt: "simetri ekseni: x = h" },
            "→",
            { t: "k = f(h)", alt: "ya da (4ac − b²)/4a = −Δ/4a" }
          ],
          aciklama: "Tepe noktası V(h, k). Ders notunda da böyle yazılır. Sınavda böyle yaz: *The vertex is at x = −b/2a; the axis of symmetry is the line x = −b/2a.*"
        },
        {
          tip: "ornek",
          baslik: "İki parabolün tepe noktası",
          durum: "f(x) = x² − 4x + 3 ve g(x) = −2x² + 8x − 5.",
          adimlar: [
            "f: a = 1, b = −4. h = −(−4)/(2·1) = 2. f(2) = 4 − 8 + 3 = −1. Tepe (2, −1).",
            "a > 0 → minimum değer −1; simetri ekseni x = 2; range [−1, ∞).",
            "g: a = −2, b = 8. h = −8/(2·(−2)) = 2. g(2) = −8 + 16 − 5 = 3. Tepe (2, 3).",
            "a < 0 → maksimum değer 3; simetri ekseni x = 2; range (−∞, 3]."
          ],
          sonuc: "f'nin minimumu −1, g'nin maksimumu 3; ikisi de x = 2'de."
        },
        {
          tip: "tuzak",
          metin: "Tepe formülünde işaret ve max/min karışır.",
          yanlis: "x² − 6x + 5 için h = b/2a = −3. Ayrıca a < 0 iken tepe noktası minimumdur.",
          dogru: "h = −b/2a = 6/2 = 3. a < 0 ise parabol aşağı açılır ve tepe noktası maksimumdur."
        }
      ]
    },
    {
      baslik: "Eksenleri kestiği noktalar",
      kisa: "y-kesişimi (0, c); x-kesişimleri ax² + bx + c = 0'ın kökleridir.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "f(x) = 2x² − 3x − 2",
          durum: "Kesişimleri ve tepe noktasını bul.",
          adimlar: [
            "y-kesişimi: f(0) = −2 → (0, −2).",
            "x-kesişimleri: 2x² − 3x − 2 = (2x + 1)(x − 2) = 0 → x = −1/2 ve x = 2.",
            "Tepe: h = 3/4 (köklerin ortası: (−1/2 + 2)/2 = 3/4 ✓).",
            "f(3/4) = 2·9/16 − 9/4 − 2 = 9/8 − 18/8 − 16/8 = −25/8. Kontrol: −Δ/4a = −25/8 ✓ (Δ = 25)."
          ],
          sonuc: "(0, −2), (−1/2, 0), (2, 0) ve tepe (3/4, −25/8). Sınavda böyle yaz: *The y-intercept is (0, −2) and the x-intercepts are (−1/2, 0) and (2, 0).*"
        },
        {
          tip: "tablo",
          baslik: "Δ ve x-kesişimleri",
          head: ["Δ", "x-kesişimi", "Örnek"],
          rows: [
            ["Δ > 0", "iki nokta", "x² − 4x + 3: (1, 0), (3, 0)"],
            [
              "Δ = 0",
              "bir nokta: tepe x eksenine değer",
              "x² − 6x + 9: (3, 0)"
            ],
            [
              "Δ < 0",
              "yok: parabol x eksenine değmez",
              "x² + 2x + 5: tepe (−1, 4), hep yukarıda"
            ]
          ]
        },
        {
          tip: "tuzak",
          metin: "x-kesişimi ile y-kesişimini karıştırma.",
          yanlis: "f(x) = x² − 4x + 3 grafiğinin y-kesişimleri x = 1 ve x = 3'tür.",
          dogru: "x = 1 ve x = 3 x-kesişimleridir. y-kesişimi f(0) = 3, yani (0, 3). Bir fonksiyonun en fazla bir y-kesişimi olur."
        }
      ]
    },
    {
      baslik: "Üç biçim: standart, tepe, çarpan",
      kisa: "Aynı parabol üç biçimde yazılır; her biçim farklı bir bilgiyi gösterir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Üç biçim",
          head: ["Biçim", "Yazılış", "Doğrudan gösterdiği"],
          rows: [
            ["Standart (*standard form*)", "f(x) = ax² + bx + c", "y-kesişimi (0, c)"],
            [
              "Tepe (*vertex form*, tamamlanmış kare biçimi)",
              "f(x) = a(x − h)² + k",
              "tepe (h, k) ve simetri ekseni x = h"
            ],
            [
              "Çarpan (*intercept / factored form*)",
              "f(x) = a(x − r₁)(x − r₂)",
              "x-kesişimleri r₁ ve r₂"
            ]
          ],
          not: "h = −b/2a ve k = f(h). Sınavda böyle yaz: *Write the function in vertex form to find the vertex.*"
        },
        {
          tip: "ornek",
          baslik: "Standarttan tepe ve çarpan biçimine",
          durum: "f(x) = x² − 6x + 5 ve g(x) = 2x² + 8x + 3.",
          adimlar: [
            "f: x² − 6x + 9 − 9 + 5 = (x − 3)² − 4. Tepe (3, −4).",
            "f ayrıca çarpanlarına ayrılır: (x − 1)(x − 5). x-kesişimleri 1 ve 5.",
            "g: x'li terimlerden 2'yi dışarı al: 2(x² + 4x) + 3 = 2(x² + 4x + 4 − 4) + 3 = 2(x + 2)² − 8 + 3.",
            "g(x) = 2(x + 2)² − 5. Tepe (−2, −5). Kontrol: −b/2a = −8/4 = −2, g(−2) = 8 − 16 + 3 = −5 ✓."
          ],
          sonuc: "f(x) = (x − 3)² − 4 = (x − 1)(x − 5); g(x) = 2(x + 2)² − 5."
        },
        {
          tip: "ornek",
          baslik: "Bilgilerden denklem yazmak",
          durum: "Ders notundaki üç yol: (a) tepesi (2, −1) olan ve (0, 3)'ten geçen; (b) x-kesişimleri −1 ve 4, y-kesişimi −8 olan; (c) (−1, −4), (0, −3), (1, 0) noktalarından geçen parabol.",
          adimlar: [
            "(a) Tepe ve bir nokta bilinirse f(x) = a(x − h)² + k: f(x) = a(x − 2)² − 1. (0, 3): a·4 − 1 = 3 → a = 1. f(x) = (x − 2)² − 1 = x² − 4x + 3.",
            "(b) x-kesişimleri ve bir nokta bilinirse f(x) = a(x − r₁)(x − r₂): f(x) = a(x + 1)(x − 4). (0, −8): a·1·(−4) = −8 → a = 2. f(x) = 2x² − 6x − 8.",
            "(c) Üç nokta bilinirse f(x) = ax² + bx + c: (0, −3) → c = −3. (1, 0): a + b − 3 = 0. (−1, −4): a − b − 3 = −4 → a − b = −1.",
            "a + b = 3 ve a − b = −1 → a = 1, b = 2: f(x) = x² + 2x − 3.",
            "Kontrol (c): f(−1) = 1 − 2 − 3 = −4 ✓ ve f(1) = 1 + 2 − 3 = 0 ✓."
          ],
          sonuc: "(a) x² − 4x + 3, (b) 2x² − 6x − 8, (c) x² + 2x − 3. Hangi yol? Tepe → tepe biçimi, kökler → çarpan biçimi, üç nokta → standart biçim."
        }
      ]
    },
    {
      baslik: "Parabol çizmek ve okumak",
      kisa: "Yönü, y-kesişimini, kökleri ve tepe noktasını bul; noktaları birleştir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "f(x) = x² − 4x + 3 parabolünü adım adım çiz",
          xlabel: "x",
          ylabel: "y",
          xmax: 7,
          ymax: 10,
          xticks: [
            { v: 2, label: "1" },
            { v: 3, label: "2" },
            { v: 4, label: "3" },
            { v: 5, label: "4" },
            { v: 6, label: "5" }
          ],
          yticks: [
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" },
            { v: 7, label: "4" },
            { v: 8, label: "5" },
            { v: 9, label: "6" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 3], to: [7, 3], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [1, 0], to: [1, 10], etiket: "y" },
            { id: "yi", tip: "nokta", x: 1, y: 6, etiket: "(0, 3)", renk: 1, gizli: true },
            { id: "z1", tip: "nokta", x: 2, y: 3, etiket: "(1, 0)", renk: 2, gizli: true },
            { id: "z2", tip: "nokta", x: 4, y: 3, etiket: "(3, 0)", renk: 2, gizli: true },
            { id: "se", tip: "cizgi", from: [3, 0], to: [3, 10], renk: 1, kesik: true, gizli: true },
            { id: "yi2", tip: "nokta", x: 5, y: 6, etiket: "(4, 3)", renk: 1, gizli: true },
            { id: "tp", tip: "nokta", x: 3, y: 2, etiket: "(2, −1)", renk: 3, gizli: true },
            {
              id: "p",
              tip: "egri",
              noktalar: [
                [0.5, 8.25], [0.75, 7.063], [1, 6], [1.25, 5.063], [1.5, 4.25], [1.75, 3.563],
                [2, 3], [2.25, 2.563], [2.5, 2.25], [2.75, 2.063], [3, 2], [3.25, 2.063],
                [3.5, 2.25], [3.75, 2.563], [4, 3], [4.25, 3.563], [4.5, 4.25], [4.75, 5.063],
                [5, 6], [5.25, 7.063], [5.5, 8.25]
              ],
              renk: 0,
              etiket: "f",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "a = 1 > 0: parabol yukarı açılır, bir minimum noktası olacak." },
            { metin: "y-kesişimi: f(0) = c = 3, nokta (0, 3).", goster: ["yi"] },
            {
              metin: "x-kesişimleri: x² − 4x + 3 = (x − 1)(x − 3) = 0 → (1, 0) ve (3, 0).",
              goster: ["z1", "z2"]
            },
            {
              metin: "Simetri ekseni x = −b/2a = 2; tepe (2, f(2)) = (2, −1). (0, 3)'ün aynadaki karşılığı (4, 3).",
              goster: ["se", "tp", "yi2"]
            },
            { metin: "Noktaları pürüzsüz bir eğriyle birleştir: ==parabol== hazır.", goster: ["p"] }
          ]
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "*The parabola opens upward because a > 0.*",
              metin: "Parabol yukarı açılıyor, çünkü a > 0."
            },
            {
              ikon: "✍️",
              baslik: "*The vertex is (2, −1) and the axis of symmetry is x = 2.*",
              metin: "Tepe (2, −1), simetri ekseni x = 2."
            },
            {
              ikon: "✍️",
              baslik: "*The graph crosses the x-axis at (1, 0) and (3, 0) and the y-axis at (0, 3).*",
              metin: "Grafik x eksenini ve y eksenini bu noktalarda keser."
            }
          ]
        }
      ]
    },
    {
      baslik: "Parabol ile doğrunun konumu",
      kisa: "Denklemleri eşitle: elde edilen ikinci dereceden denklemin Δ'sı kesişim sayısını verir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "y = x² parabolü ve y = 2x + k doğrusu",
          xlabel: "x",
          ylabel: "y",
          xmax: 7,
          ymax: 12,
          xticks: [
            { v: 0, label: "−2" },
            { v: 1, label: "−1" },
            { v: 3, label: "1" },
            { v: 4, label: "2" },
            { v: 5, label: "3" }
          ],
          yticks: [
            { v: 0, label: "−3" },
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 4, label: "1" },
            { v: 6, label: "3" },
            { v: 9, label: "6" },
            { v: 12, label: "9" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 3], to: [7, 3], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [2, 0], to: [2, 12], etiket: "y" },
            {
              id: "par",
              tip: "egri",
              noktalar: [
                [0.0, 7.0], [0.25, 6.062], [0.5, 5.25], [0.75, 4.562], [1.0, 4.0], [1.25, 3.562],
                [1.5, 3.25], [1.75, 3.062], [2.0, 3.0], [2.25, 3.062], [2.5, 3.25], [2.75, 3.562],
                [3.0, 4.0], [3.25, 4.562], [3.5, 5.25], [3.75, 6.062], [4.0, 7.0], [4.25, 8.062],
                [4.5, 9.25], [4.75, 10.562], [5.0, 12.0]
              ],
              renk: 0,
              etiket: "y = x²"
            },
            { id: "l", tip: "cizgi", from: [0, 2], to: [5, 12], renk: 2, etiket: "y = 2x + k" },
            { id: "p1", tip: "nokta", x: 1, y: 4, etiket: "(−1, 1)", renk: 3, gizli: true },
            { id: "p2", tip: "nokta", x: 5, y: 12, etiket: "(3, 9)", renk: 3, gizli: true },
            { id: "tp", tip: "nokta", x: 3, y: 4, etiket: "(1, 1)", renk: 3, gizli: true }
          ],
          durumlar: [
            { metin: "Parabol y = x² ve doğru y = 2x + k, önce k = 3. Doğru parabolü kaç noktada keser?" },
            {
              metin: "x² = 2x + 3 → x² − 2x − 3 = 0, Δ = 16 > 0: ==iki ortak nokta==, (−1, 1) ve (3, 9).",
              goster: ["p1", "p2"]
            },
            {
              metin: "k = −1: x² − 2x + 1 = (x − 1)² = 0, Δ = 0: doğru parabole ==teğet==, tek ortak nokta (1, 1).",
              gizle: ["p1", "p2"],
              goster: ["tp"],
              set: { l: { from: [1, 0], to: [5, 8] } }
            },
            {
              metin: "k = −3: x² − 2x + 3 = 0, Δ = −8 < 0: doğru parabolü ==kesmez==.",
              gizle: ["tp"],
              set: { l: { from: [2, 0], to: [5, 6] } }
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Konum ve diskriminant",
          head: ["Δ (eşitlenen denklemin)", "Doğru ve parabol", "İki parabol"],
          rows: [
            ["Δ > 0", "iki ortak nokta (keser)", "iki ortak nokta"],
            ["Δ = 0", "teğet, tek ortak nokta", "tek ortak nokta (teğet)"],
            ["Δ < 0", "ortak nokta yok", "ortak nokta yok"]
          ],
          not: "Doğru için parabolün denklemiyle y = mx + n'yi, iki parabol için f(x) = g(x)'i eşitle; ax² + bx + c = 0 çıkar. Sınavda böyle yaz: *Set the two expressions equal and use the discriminant.*"
        },
        {
          tip: "ornek",
          baslik: "Teğet doğru ve kesişim toplamları",
          durum: "(a) y = x + 1 doğrusu g(x) = 2x² + kx + 3 parabolüne teğet; k? (b) f(x) = x² − 5x + 7 ile y = x + 5 kesişince A ve B noktalarının y-koordinatları toplamı? (c) y = 3x² + 4x + m ile y = −x² + 5x + n iki noktada kesişiyorsa x-koordinatları toplamı?",
          adimlar: [
            "(a) 2x² + kx + 3 = x + 1 → 2x² + (k − 1)x + 2 = 0. Teğet: Δ = (k − 1)² − 16 = 0 → k − 1 = ±4 → k = 5 ya da k = −3.",
            "(b) x² − 5x + 7 = x + 5 → x² − 6x + 2 = 0. Vieta: x_A + x_B = 6.",
            "A ve B doğru üzerinde: y_A + y_B = (x_A + 5) + (x_B + 5) = 6 + 10 = 16.",
            "(c) 3x² + 4x + m = −x² + 5x + n → 4x² − x + (m − n) = 0. Vieta: x-koordinatları toplamı = −(−1)/4 = 1/4."
          ],
          sonuc: "(a) k = 5 ya da k = −3, (b) 16, (c) 1/4. Kesişim noktalarını bulmadan Vieta kullanılır."
        }
      ]
    },
    {
      baslik: "Dönüşüm yorumu, domain ve range",
      kisa: "f(x) = a(x − h)² + k, y = x²'nin dönüşümüdür; range k'dan başlar ya da biter.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "f(x) = −3(x + 1)² + 5",
          durum: "Ana fonksiyon y = x²'den nasıl elde edilir? Tepe, yön, domain, range?",
          adimlar: [
            "(x + 1): 1 birim sola. 3: dikey ×3 germe. Eksi: x eksenine göre yansıma. +5: 5 yukarı.",
            "Tepe noktası (−1, 5); simetri ekseni x = −1.",
            "a = −3 < 0: parabol aşağı açılır, maksimum değer 5 (x = −1'de).",
            "Domain ℝ. Range (−∞, 5]. y-kesişimi f(0) = −3 + 5 = 2."
          ],
          sonuc: "Domain ℝ, range (−∞, 5]. Sınavda böyle yaz: *The graph of f is the graph of y = x² shifted 1 unit left, stretched by 3, reflected in the x-axis and shifted 5 units up.*"
        },
        {
          tip: "tablo",
          baslik: "Range kuralı",
          head: ["Fonksiyon", "a", "Tepe", "Range"],
          rows: [
            ["f(x) = 2(x − 1)² − 4", "a > 0", "(1, −4)", "[−4, ∞)"],
            ["f(x) = −(x + 2)² + 1", "a < 0", "(−2, 1)", "(−∞, 1]"],
            [
              "f(x) = x² + 6x + 5 = (x + 3)² − 4",
              "a > 0",
              "(−3, −4)",
              "[−4, ∞)"
            ],
            [
              "f(x) = x² + 4x + 7, x ∈ [−4, 1]",
              "a > 0",
              "(−2, 3), aralığın içinde",
              "[3, 12]"
            ]
          ],
          not: "Domain kısıtlanmadıkça ℝ. a > 0 ise range [k, ∞), a < 0 ise (−∞, k]. Aralık kısıtlıysa tepe aralığın içinde mi bak ve uç noktaları da hesapla: f(−4) = 7, f(1) = 12, en küçük f(−2) = 3."
        },
        {
          tip: "ikili",
          sol: { ikon: "⬇️", baslik: "Minimum var", maddeler: ["a > 0", "Parabol yukarı açık"] },
          sag: { ikon: "⬆️", baslik: "Maksimum var", maddeler: ["a < 0", "Parabol aşağı açık"] },
          oyun: [
            { metin: "f(x) = −x² + 4x", cevap: "sag", neden: "a = −1 < 0: aşağı açık, maksimum." },
            { metin: "f(x) = 3x² − 6x + 1", cevap: "sol", neden: "a = 3 > 0: minimum." },
            { metin: "f(x) = −2(x − 1)² + 7", cevap: "sag", neden: "a = −2 < 0: maksimum 7." },
            { metin: "f(x) = x² + 1", cevap: "sol", neden: "a = 1 > 0: minimum 1." }
          ]
        }
      ]
    },
    {
      baslik: "En büyük ve en küçük değer problemleri",
      kisa: "Tepe noktası, en iyi durumu verir: en büyük ya da en küçük değer.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Konser bileti",
          durum: "Okul konserinde bilet fiyatı p TL ise satılan bilet sayısı 100 − 5p. Gelir hangi fiyatta en büyük olur?",
          adimlar: [
            "Gelir = fiyat × satış: R(p) = p(100 − 5p) = −5p² + 100p.",
            "a = −5 < 0: aşağı açık parabol, maksimum var.",
            "p_t = −b/2a = −100/(−10) = 10 TL.",
            "R(10) = 10·(100 − 50) = 500 TL. Kontrol: R(0) = 0 ve R(20) = 0 (köklerin ortası 10 ✓)."
          ],
          sonuc: "En büyük gelir 500 TL, bilet fiyatı 10 TL iken."
        },
        {
          tip: "ornek",
          baslik: "Havaya atılan top",
          durum: "Topun yüksekliği h(t) = −5t² + 20t (metre, t saniye). En yüksek nokta ve yere iniş zamanı?",
          adimlar: [
            "t_t = −20/(−10) = 2 saniye. h(2) = −20 + 40 = 20 m.",
            "Yere iniş: h(t) = 0 → −5t(t − 4) = 0 → t = 0 (atış) ya da t = 4.",
            "Yere iniş 4. saniye; tepe zamanı iniş zamanının tam yarısı (2 = 4/2)."
          ],
          sonuc: "En yüksek nokta 20 m (t = 2 s), top 4 saniyede yere iner. Sınavda böyle yaz: *The maximum height is 20 m, reached after 2 seconds.*"
        },
        {
          tip: "ornek",
          baslik: "Çevresi sabit dikdörtgen",
          durum: "Çevresi 32 cm olan dikdörtgenin en büyük alanı kaç cm²'dir?",
          adimlar: [
            "Kenarlar x ve 16 − x (yarım çevre 16).",
            "A(x) = x(16 − x) = −x² + 16x. a = −1 < 0: maksimum var.",
            "h = −16/(−2) = 8; A(8) = 8·8 = 64."
          ],
          sonuc: "En büyük alan 64 cm² (kare, kenar 8 cm)."
        },
        {
          tip: "tuzak",
          metin: "Soruya dikkat: maksimum değer mi, onu veren x mi isteniyor?",
          yanlis: "\"En büyük gelir kaç TL?\" sorusuna 10 yazmak.",
          dogru: "10 TL, en büyük geliri veren fiyattır (h). En büyük gelir f(h) = 500 TL'dir. Birimi de yaz."
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
            "f(x) = ax² + bx + c bir paraboldür; a > 0 yukarı, a < 0 aşağı açar; |a| büyüdükçe dar.",
            "Simetri ekseni ve tepe: h = −b/2a, k = f(h); a > 0 minimum, a < 0 maksimum.",
            "y-kesişimi (0, c); x-kesişimleri ax² + bx + c = 0'ın kökleri; Δ < 0 ise yok.",
            "Üç biçim: standart (y-kesişimi), tepe a(x − h)² + k (tepe), çarpan a(x − r₁)(x − r₂) (kökler). Parabol denklemi: tepe → tepe biçimi, kökler → çarpan biçimi, üç nokta → standart.",
            "Tepe biçimine tam kare tamamlamayla geçilir; h = −b/2a, k = f(h).",
            "Çizim: yön, y-kesişimi, kökler, simetri ekseni ve tepe, ayna noktası.",
            "Domain ℝ; range a > 0 için [k, ∞), a < 0 için (−∞, k].",
            "Doğru ile parabol (ya da iki parabol): denklemleri eşitle; Δ > 0 kesişir, Δ = 0 teğet, Δ < 0 kesişmez.",
            "Problemde h optimum girdiyi, f(h) optimum değeri verir."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "The line y = x + 1 is tangent to the graph of g(x) = 2x² + kx + 3. What are the possible values of k?",
      opts: ["k = 5 only", "k = −3 only", "k = 5 or k = −3", "k = 3 or k = −5"],
      a: 2,
      why: "2x² + kx + 3 = x + 1 → 2x² + (k − 1)x + 2 = 0. Teğet olduğu için Δ = (k − 1)² − 16 = 0 → k − 1 = ±4 → k = 5 ya da k = −3. A ve B seçenekleri iki durumdan yalnız birini alır; D seçeneği işareti ters alır."
    },
    {
      q: "Which statement is true for f(x) = −2x² + 8x + 1?",
      opts: [
        "Its minimum value is 9.",
        "Its maximum value is 2 and it occurs at x = 9.",
        "Its maximum value is 9 and it occurs at x = 2.",
        "Its maximum value is 1."
      ],
      a: 2,
      why: "a = −2 < 0: aşağı açık, maksimum var. h = −8/(−4) = 2 ve f(2) = −8 + 16 + 1 = 9. Maksimum değer 9, x = 2'de. B seçeneği x ve y'yi birbirine karıştırmış; D seçeneği y-kesişimi olan 1'i maksimum sanmış."
    },
    {
      q: "The table gives values of a quadratic function f. What is f(x)?",
      fig: {
        type: "table",
        head: ["x", "0", "1", "2", "3", "4"],
        rows: [
          ["f(x)", "3", "0", "−1", "0", "3"]
        ],
        caption: "Values of f(x)"
      },
      opts: ["(x − 2)² + 1", "(x − 2)² − 1", "(x + 2)² − 1", "−(x − 2)² − 1"],
      a: 1,
      why: "Değerler x = 2'ye göre simetrik (f(1) = f(3) = 0, f(0) = f(4) = 3), en küçük değer f(2) = −1: tepe (2, −1), a > 0. f(x) = (x − 2)² − 1; kontrol f(0) = 4 − 1 = 3 ✓. A seçeneği f(2) = 1 verirdi; C seçeneği simetri eksenini x = −2'ye koyardı."
    },
    {
      q: "A café sells 60 − 3p toasts per day when the price of a toast is p TL. What is the maximum daily revenue in TL?",
      opts: ["200", "300", "600", "10"],
      a: 1,
      why: "R(p) = p(60 − 3p) = −3p² + 60p. h = −60/(−6) = 10 TL; R(10) = 10·30 = 300 TL. 10 cevabı en büyük geliri veren fiyattır, gelirin kendisi değil. 600 ise satışın fiyat arttıkça azaldığını yok sayan hatalı bir çarpımdır (60 · 10)."
    },
    {
      q: "A parabola has vertex (−1, 2) and passes through the point (1, −6). Which equation describes it?",
      opts: ["2(x + 1)² + 2", "−2(x − 1)² + 2", "−(x + 1)² + 2", "−2(x + 1)² + 2"],
      a: 3,
      why: "f(x) = a(x + 1)² + 2. (1, −6): a·4 + 2 = −6 → a = −2. f(x) = −2(x + 1)² + 2. A seçeneğinde f(1) = 10; B seçeneğinde tepe (1, 2); C seçeneğinde f(1) = −2: üçü de verilen noktayı sağlamıyor."
    }
  ]
};
