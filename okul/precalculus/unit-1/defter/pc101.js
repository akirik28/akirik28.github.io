/* Kitora not defteri · pc101 · 1.1 Fonksiyonlara Giriş
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Exam hedefleri) + MEB 10. sınıf. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc101",
  amac: "Bu konu fonksiyonun ne olduğunu ve nasıl sınıflandırıldığını anlatıyor. Tablo, grafik ve denklemden fonksiyon okumayı; birebir, örten, sabit, birim, doğrusal türlerini; çift ve tek fonksiyonu öğreneceksin.",
  bolumler: [
    {
      baslik: "Fonksiyon nedir?",
      kisa: "Fonksiyon, her girdiye tam olarak bir çıktı veren kuraldır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "x", alt: "girdi (*input*)" },
            "→",
            { t: "f", alt: "kural" },
            "→",
            { t: "f(x)", alt: "çıktı (*output*)" }
          ],
          aciklama: "Bir girdinin **tek** çıktısı olur. Ama farklı girdiler aynı çıktıyı verebilir."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⚙️",
              terim: "Function",
              tr: "fonksiyon",
              tanim: "A kümesindeki her elemanı B kümesindeki tam bir elemana eşleyen kural; f: A → B diye yazılır.",
              ornek: "Her öğrenciyi, bulunduğu sınıfa eşleyen kural."
            },
            {
              ikon: "🚪",
              terim: "Domain",
              tr: "tanım kümesi",
              tanim: "Girdi olabilecek bütün değerlerin kümesi (A kümesi).",
              ornek: "f(x) = √x için domain x ≥ 0."
            },
            {
              ikon: "🎯",
              terim: "Codomain",
              tr: "değer (hedef) kümesi",
              tanim: "Çıktıların ait olabileceği hedef küme (B kümesi).",
              ornek: "f: ℝ → ℝ için codomain ℝ."
            },
            {
              ikon: "📤",
              terim: "Range",
              tr: "görüntü kümesi",
              tanim: "Gerçekten elde edilen çıktıların kümesi; codomain'in bir alt kümesidir.",
              ornek: "f(x) = x² için range [0, ∞)."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "✅",
            baslik: "Fonksiyon",
            maddeler: [
              "Her girdi eşleşmiş",
              "Her girdinin yalnız bir çıktısı var"
            ]
          },
          sag: {
            ikon: "❌",
            baslik: "Fonksiyon değil",
            maddeler: [
              "Bir girdi eşleşmemiş",
              "Bir girdinin birden çok çıktısı var"
            ]
          },
          oyun: [
            {
              metin: "Her öğrenci numarasını, öğrencinin sınıfına eşlemek.",
              cevap: "sol",
              neden: "Her numaranın tek sınıfı var; aynı sınıfı birçok öğrenci paylaşabilir."
            },
            {
              metin: "Her sınıfı, o sınıftaki öğrenci numarasına eşlemek.",
              cevap: "sag",
              neden: "Bir sınıfta çok öğrenci var: tek girdi, çok çıktı."
            },
            {
              metin: "{(1, a), (2, a), (3, b)}",
              cevap: "sol",
              neden: "1 ve 2 aynı çıktıyı paylaşıyor; bu sorun değil."
            },
            { metin: "{(1, a), (1, b), (2, c)}", cevap: "sag", neden: "1 girdisinin iki çıktısı var." },
            {
              metin: "A = {1, 2, 3} kümesinden {(1, a), (2, b)} eşlemesi.",
              cevap: "sag",
              neden: "3 hiçbir şeye eşlenmemiş; A'nın her elemanı eşleşmeli."
            }
          ]
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "*f is a function because every input has exactly one output.*",
              metin: "f fonksiyondur, çünkü her girdinin tam bir çıktısı var."
            },
            {
              ikon: "✍️",
              baslik: "*The domain is the set of inputs and the range is the set of outputs.*",
              metin: "Domain girdilerin, range çıktıların kümesidir."
            },
            {
              ikon: "✍️",
              baslik: "*This is not a function: the input 1 has two outputs.*",
              metin: "Bu bir fonksiyon değil: 1 girdisinin iki çıktısı var."
            }
          ]
        }
      ]
    },
    {
      baslik: "Tablo ve denklemle fonksiyon",
      kisa: "Tablo, ok diyagramı ve denklem aynı fonksiyonun farklı görünümleridir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "f(x) = x² − 1 fonksiyonunun tablosu",
          head: ["x", "−2", "−1", "0", "1", "2"],
          rows: [
            ["f(x)", "3", "0", "−1", "0", "3"]
          ],
          not: "Üst satır girdi, alt satır çıktı. Tablo fonksiyonu nokta nokta verir: (−2, 3), (−1, 0), (0, −1), (1, 0), (2, 3)."
        },
        {
          tip: "ornek",
          baslik: "Tablodan her şeyi oku",
          durum: "Yukarıdaki tabloyla verilen f için f(1), f(x) = 3 çözümü, domain, range ve birebirlik soruluyor.",
          adimlar: [
            "f(1): x = 1 sütununa bak, f(1) = 0.",
            "f(x) = 3 olan girdiler: (−2, 3) ve (2, 3) noktaları, yani x = −2 ya da x = 2.",
            "Domain = {−2, −1, 0, 1, 2}: üst satırdaki bütün değerler.",
            "Range = {−1, 0, 3}: alt satırdaki değerler, tekrar edenler bir kez yazılır.",
            "f(−1) = f(1) = 0: farklı iki girdi aynı çıktıyı veriyor, f birebir değil."
          ],
          sonuc: "Sınavda böyle yaz: *The domain is {−2, −1, 0, 1, 2} and the range is {−1, 0, 3}. Since f(−1) = f(1), f is not one-to-one.*"
        }
      ]
    },
    {
      baslik: "Grafikten fonksiyon: dikey doğru testi",
      kisa: "Hiçbir dikey doğru grafiği iki noktada kesmiyorsa grafik bir fonksiyondur.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Dikey doğru testi: x = 1 ve x = −1 doğrularını çek",
          xlabel: "x",
          ylabel: "y",
          xmax: 6,
          ymax: 6,
          xticks: [
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 4, label: "1" },
            { v: 5, label: "2" }
          ],
          yticks: [
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 4, label: "1" },
            { v: 5, label: "2" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 3], to: [6, 3], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [3, 0], to: [3, 6], etiket: "y" },
            {
              id: "a",
              tip: "egri",
              noktalar: [
                [1, 5], [1.25, 4.063], [1.5, 3.25], [1.75, 2.563], [2, 2], [2.25, 1.563],
                [2.5, 1.25], [2.75, 1.063], [3, 1], [3.25, 1.063], [3.5, 1.25], [3.75, 1.563],
                [4, 2], [4.25, 2.563], [4.5, 3.25], [4.75, 4.063], [5, 5]
              ],
              renk: 0,
              etiket: "f"
            },
            { id: "v1", tip: "cizgi", from: [4, 0], to: [4, 6], renk: 2, gizli: true },
            { id: "p1", tip: "nokta", x: 4, y: 2, etiket: "(1, −1)", renk: 2, gizli: true },
            {
              id: "b",
              tip: "egri",
              noktalar: [
                [5, 1], [4.063, 1.25], [3.25, 1.5], [2.563, 1.75], [2, 2], [1.563, 2.25],
                [1.25, 2.5], [1.063, 2.75], [1, 3], [1.063, 3.25], [1.25, 3.5], [1.563, 3.75],
                [2, 4], [2.563, 4.25], [3.25, 4.5], [4.063, 4.75], [5, 5]
              ],
              renk: 1,
              etiket: "g",
              gizli: true
            },
            { id: "v2", tip: "cizgi", from: [2, 0], to: [2, 6], renk: 2, gizli: true },
            { id: "p2", tip: "nokta", x: 2, y: 4, etiket: "(−1, 1)", renk: 2, gizli: true },
            { id: "p3", tip: "nokta", x: 2, y: 2, etiket: "(−1, −1)", renk: 2, gizli: true }
          ],
          durumlar: [
            { metin: "Bu, f(x) = x² − 2 parabolü. Soru: grafik bir fonksiyon mu?" },
            {
              metin: "x = 1 dikey doğrusunu çekiyoruz: grafiği yalnızca (1, −1) noktasında kesiyor. Hangi dikey doğruyu çizersek çizelim hep en fazla bir kez kesiyor: ==fonksiyon==.",
              goster: ["v1", "p1"]
            },
            { metin: "Şimdi sağa yatık parabole bak: x = y² − 2.", gizle: ["a", "v1", "p1"], goster: ["b"] },
            {
              metin: "x = −1 doğrusu grafiği iki noktada kesiyor: (−1, 1) ve (−1, −1). Aynı girdiye iki çıktı var: ==fonksiyon değil.==",
              goster: ["v2", "p2", "p3"]
            }
          ]
        },
        {
          tip: "tuzak",
          metin: "Dikey doğru testi yalnızca \"fonksiyon mu?\" sorusunu yanıtlar. \"Birebir mi?\" sorusu için yatay doğru testi gerekir.",
          yanlis: "Her dikey doğru grafiği bir kez kesiyorsa fonksiyon birebirdir.",
          dogru: "Dikey test: fonksiyon mu. Yatay test: birebir mi. Sınavda böyle yaz: *The graph passes the vertical line test, so it is a function.*"
        }
      ]
    },
    {
      baslik: "Birebir, örten, içine",
      kisa: "Birebir: farklı girdi, farklı çıktı. Örten: hedefte boşta eleman kalmaz.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "1️⃣",
              terim: "One-to-one",
              tr: "birebir (*injective*)",
              tanim: "Farklı girdiler hep farklı çıktı verir: f(a) = f(b) ise a = b. Yatay doğru grafiği en fazla bir kez keser.",
              ornek: "f(x) = 2x + 1."
            },
            {
              ikon: "🎯",
              terim: "Onto",
              tr: "örten (*surjective*)",
              tanim: "Range = codomain: hedef kümedeki her eleman bir girdiden gelir.",
              ornek: "f: ℝ → ℝ, f(x) = x³."
            },
            {
              ikon: "🕳️",
              terim: "Into",
              tr: "içine",
              tanim: "Örten olmayan fonksiyon: hedef kümede boşta kalan eleman var.",
              ornek: "f: ℝ → ℝ, f(x) = x²: −1 hiç çıkmaz."
            },
            {
              ikon: "🤝",
              terim: "Many-to-one",
              tr: "çoktan bire",
              tanim: "En az iki girdi aynı çıktıyı paylaşır; fonksiyon birebir değildir.",
              ornek: "f(2) = f(−2) = 4."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Dört eşleme, dört sonuç",
          head: ["Eşleme", "Birebir?", "Örten?"],
          rows: [
            [
              "A = {1, 2, 3} → B = {a, b, c}: 1→a, 2→b, 3→c",
              "Evet",
              "Evet"
            ],
            [
              "A = {1, 2, 3} → B = {a, b}: 1→a, 2→a, 3→b",
              "Hayır",
              "Evet"
            ],
            [
              "A = {1, 2} → B = {a, b, c}: 1→a, 2→b",
              "Evet",
              "Hayır (c boşta)"
            ],
            [
              "A = {1, 2, 3} → B = {a, b}: hepsi → a",
              "Hayır",
              "Hayır (b boşta)"
            ]
          ],
          not: "Sonlu kümelerde birebir için eleman sayısı |A| ≤ |B|, örten için |A| ≥ |B| olmalı."
        },
        {
          tip: "ornek",
          baslik: "Cebirle kanıtla",
          durum: "f(x) = 2x + 3 ve g(x) = x² fonksiyonları ℝ → ℝ. Hangisi birebir, hangisi örten?",
          adimlar: [
            "f birebir mi? f(a) = f(b) → 2a + 3 = 2b + 3 → a = b. Evet.",
            "f örten mi? y = 2x + 3 denkleminden x = (y − 3)/2; her y için bir gerçek x var. Evet.",
            "g birebir mi? g(2) = g(−2) = 4 ama 2 ≠ −2. Hayır.",
            "g örten mi? x² = −1 denkleminin gerçek çözümü yok, −1 boşta kalır. Hayır.",
            "Domain'i [0, ∞), codomain'i [0, ∞) yaparsak g hem birebir hem örten olur."
          ],
          sonuc: "f birebir ve örten; g ikisi de değil. Sınavda böyle yaz: *To show f is one-to-one, assume f(a) = f(b) and prove that a = b.*"
        }
      ]
    },
    {
      baslik: "Sabit, birim ve doğrusal fonksiyon",
      kisa: "Sabit hep aynı çıktıyı, birim girdiyi aynen verir; doğrusal sabit eğimlidir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Fonksiyon türleri",
          head: ["Tür", "Kural", "Grafik", "Birebir?", "Örten (ℝ→ℝ)?"],
          rows: [
            ["*Constant* (sabit)", "f(x) = c", "yatay doğru", "Hayır", "Hayır (range = {c})"],
            ["*Identity* (birim)", "f(x) = x", "y = x doğrusu", "Evet", "Evet"],
            ["*Linear* (doğrusal)", "f(x) = mx + n, m ≠ 0", "eğimi m olan doğru", "Evet", "Evet"],
            [
              "*Quadratic* (ikinci derece)",
              "f(x) = ax² + bx + c, a ≠ 0",
              "parabol",
              "Hayır",
              "Hayır"
            ],
            [
              "*Absolute value* (mutlak değer)",
              "f(x) = |x|",
              "V biçimi",
              "Hayır",
              "Hayır"
            ]
          ],
          not: "m = 0 olursa doğrusal fonksiyon sabit fonksiyona dönüşür. Sınavda böyle yaz: *f(x) = 5 is a constant function because every input has the same output.*"
        },
        {
          tip: "grafik",
          baslik: "Sabit, birim ve doğrusal fonksiyonun grafikleri",
          xlabel: "x",
          ylabel: "y",
          xmax: 6,
          ymax: 6,
          xticks: [
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 4, label: "1" },
            { v: 5, label: "2" }
          ],
          yticks: [
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 4, label: "1" },
            { v: 5, label: "2" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 3], to: [6, 3], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [3, 0], to: [3, 6], etiket: "y" },
            { id: "id", tip: "cizgi", from: [0, 0], to: [6, 6], renk: 0, etiket: "y = x", gizli: true },
            { id: "c", tip: "cizgi", from: [0, 5], to: [6, 5], renk: 1, etiket: "y = 2", gizli: true },
            { id: "l", tip: "cizgi", from: [2, 0], to: [5, 6], renk: 2, etiket: "y = 2x − 1", gizli: true },
            { id: "li", tip: "nokta", x: 3, y: 2, etiket: "(0, −1)", renk: 2, gizli: true }
          ],
          durumlar: [
            {
              metin: "**Birim fonksiyon** f(x) = x: orijinden geçen, eğimi 1 olan doğru. Çıktı her zaman girdiye eşit.",
              goster: ["id"]
            },
            {
              metin: "**Sabit fonksiyon** f(x) = 2: yatay doğru. Her girdiye aynı çıktı. Yatay doğru grafiği sonsuz kez keser: birebir ==değil==.",
              goster: ["c"]
            },
            {
              metin: "**Doğrusal fonksiyon** f(x) = 2x − 1: eğim 2, y eksenini (0, −1)'de keser. Her yatay doğru grafiği bir kez keser: birebir.",
              goster: ["l", "li"]
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "📏",
            baslik: "Doğrusal aile",
            maddeler: ["Sabit, birim ya da doğrusal", "Grafik düz bir doğru"]
          },
          sag: {
            ikon: "🌀",
            baslik: "Doğrusal değil",
            maddeler: [
              "Grafik doğru değil",
              "Eğim değişiyor ya da kırılıyor"
            ]
          },
          oyun: [
            { metin: "f(x) = 7", cevap: "sol", neden: "Sabit fonksiyon; m = 0 olan doğrusal hâl." },
            { metin: "f(x) = x", cevap: "sol", neden: "Birim fonksiyon." },
            { metin: "f(x) = −2x + 5", cevap: "sol", neden: "Eğimi −2 olan doğru." },
            { metin: "f(x) = x²", cevap: "sag", neden: "Grafik parabol." },
            { metin: "f(x) = |x|", cevap: "sag", neden: "Orijinde kırılan V biçimi: iki farklı eğim." },
            { metin: "f(x) = 1/x", cevap: "sag", neden: "x paydada: grafik hiperbol." }
          ]
        }
      ]
    },
    {
      baslik: "Çift ve tek fonksiyon",
      kisa: "Çift: f(−x) = f(x), y eksenine simetrik. Tek: f(−x) = −f(x), orijine simetrik.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "f(−x) = f(x)", alt: "çift (*even*): y eksenine göre simetri" },
            "ya da",
            { t: "f(−x) = −f(x)", alt: "tek (*odd*): orijine göre simetri" }
          ],
          aciklama: "Eşitlik domain'deki **her** x için doğru olmalı. Sınavda böyle yaz: *f is even because f(−x) = f(x) for all x in the domain.*"
        },
        {
          tip: "grafik",
          baslik: "Çift fonksiyon aynalanır, tek fonksiyon döndürülür",
          xlabel: "x",
          ylabel: "y",
          xmax: 6,
          ymax: 8,
          xticks: [
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 4, label: "1" },
            { v: 5, label: "2" }
          ],
          yticks: [
            { v: 0, label: "−4" },
            { v: 2, label: "−2" },
            { v: 6, label: "2" },
            { v: 8, label: "4" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 4], to: [6, 4], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [3, 0], to: [3, 8], etiket: "y" },
            {
              id: "par",
              tip: "egri",
              noktalar: [
                [1, 8], [1.25, 7.063], [1.5, 6.25], [1.75, 5.563], [2, 5], [2.25, 4.563],
                [2.5, 4.25], [2.75, 4.063], [3, 4], [3.25, 4.063], [3.5, 4.25], [3.75, 4.563],
                [4, 5], [4.25, 5.563], [4.5, 6.25], [4.75, 7.063], [5, 8]
              ],
              renk: 0,
              etiket: "x²"
            },
            { id: "pa", tip: "nokta", x: 5, y: 8, etiket: "(2, 4)", renk: 2, gizli: true },
            { id: "pb", tip: "nokta", x: 1, y: 8, etiket: "(−2, 4)", renk: 2, gizli: true },
            { id: "hl", tip: "cizgi", from: [1, 8], to: [5, 8], renk: 2, kesik: true, gizli: true },
            {
              id: "cub",
              tip: "egri",
              noktalar: [
                [1.5, 0.625], [1.75, 2.047], [2, 3], [2.25, 3.578], [2.5, 3.875], [2.75, 3.984],
                [3, 4], [3.25, 4.016], [3.5, 4.125], [3.75, 4.422], [4, 5], [4.25, 5.953],
                [4.5, 7.375]
              ],
              renk: 1,
              etiket: "x³",
              gizli: true
            },
            { id: "q1", tip: "nokta", x: 4, y: 5, etiket: "(1, 1)", renk: 2, gizli: true },
            { id: "q2", tip: "nokta", x: 2, y: 3, etiket: "(−1, −1)", renk: 2, gizli: true },
            { id: "dg", tip: "cizgi", from: [2, 3], to: [4, 5], renk: 2, kesik: true, gizli: true }
          ],
          durumlar: [
            {
              metin: "f(x) = x²: grafik y eksenine göre ayna gibi, sol yarısı sağ yarısının yansıması.",
              goster: ["par"]
            },
            {
              metin: "f(2) = 4 ve f(−2) = 4: iki yüksekliği eşit. Her x için f(−x) = f(x) olduğundan ==çift== fonksiyon.",
              goster: ["pa", "pb", "hl"]
            },
            { metin: "Şimdi f(x) = x³.", gizle: ["par", "pa", "pb", "hl"], goster: ["cub"] },
            {
              metin: "f(1) = 1 ve f(−1) = −1: (1, 1) noktası orijin üzerinden (−1, −1)'e karşılık geliyor. Grafik orijin etrafında 180° döndürülünce kendisiyle çakışıyor: ==tek== fonksiyon.",
              goster: ["q1", "q2", "dg"]
            }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "🪞", baslik: "Çift", maddeler: ["f(−x) = f(x)", "y eksenine göre ayna"] },
          sag: { ikon: "🔄", baslik: "Tek", maddeler: ["f(−x) = −f(x)", "Orijin etrafında 180° dönüş"] },
          oyun: [
            { metin: "f(x) = x² + 5", cevap: "sol", neden: "f(−x) = (−x)² + 5 = x² + 5 = f(x)." },
            { metin: "f(x) = x³ − x", cevap: "sag", neden: "f(−x) = −x³ + x = −f(x)." },
            { metin: "f(x) = |x|", cevap: "sol", neden: "|−x| = |x|." },
            { metin: "f(x) = 1/x", cevap: "sag", neden: "1/(−x) = −1/x = −f(x)." },
            { metin: "f(x) = 3x", cevap: "sag", neden: "f(−x) = −3x = −f(x)." }
          ]
        }
      ]
    },
    {
      baslik: "Çift mi, tek mi, hiçbiri mi?",
      kisa: "f(−x) hesapla, sonra f(x) ve −f(x) ile karşılaştır.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Üç fonksiyonu sınıflandır",
          durum: "f(x) = x⁴ − 3x², g(x) = 2x³ + x, h(x) = x² + x.",
          adimlar: [
            "Her birinde x yerine (−x) yaz ve sadeleştir.",
            "f(−x) = (−x)⁴ − 3(−x)² = x⁴ − 3x² = f(x). Çift.",
            "g(−x) = 2(−x)³ + (−x) = −2x³ − x = −(2x³ + x) = −g(x). Tek.",
            "h(−x) = (−x)² + (−x) = x² − x. Bu ne h(x) = x² + x ne de −h(x) = −x² − x. Hiçbiri.",
            "Kısa yol: tüm kuvvetler çiftse çift, tüm kuvvetler tekse tek; hem çift hem tek kuvvet varsa hiçbiri (sabit terim x⁰, yani çift kuvvettir)."
          ],
          sonuc: "f çift, g tek, h hiçbiri. Sınavda böyle yaz: *Since h(−x) ≠ h(x) and h(−x) ≠ −h(x), h is neither even nor odd.*"
        },
        {
          tip: "tablo",
          baslik: "İşlem kuralları",
          head: ["İşlem", "Sonuç", "Örnek"],
          rows: [
            ["çift + çift", "çift", "x² + x⁴"],
            ["tek + tek", "tek", "x + x³"],
            ["çift + tek", "hiçbiri", "x² + x"],
            ["çift × çift", "çift", "x² · x⁴ = x⁶"],
            ["tek × tek", "çift", "x · x³ = x⁴"],
            ["çift × tek", "tek", "x² · x = x³"]
          ],
          not: "Kural yetmezse her zaman f(−x)'i hesapla."
        },
        {
          tip: "tuzak",
          metin: "Kuvvetin çift ya da tek olması işe yarar, ama sabit terim ve domain tuzak kurar.",
          yanlis: "f(x) = x³ + 1 tektir, çünkü en büyük kuvvet 3.",
          dogru: "f(−x) = −x³ + 1; ne f(x) ne −f(x): hiçbiri. Domain 0'a göre simetrik olmalı: [−2, 3] üzerinde x² çift değildir. Yalnızca f(x) = 0 hem çift hem tektir."
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
            "Fonksiyonda her girdinin tam bir çıktısı vardır; grafikte dikey doğru testi.",
            "Domain girdilerin, codomain hedefin, range gerçekten çıkan değerlerin kümesidir.",
            "Birebir: f(a) = f(b) ise a = b; yatay doğru testi. Örten: range = codomain.",
            "Sabit f(x) = c, birim f(x) = x, doğrusal f(x) = mx + n.",
            "Tablodan: f(a) değerini oku, domain üst satır, range alt satır; tekrar eden çıktı birebir değil demek.",
            "Çift: f(−x) = f(x), y eksenine simetri. Tek: f(−x) = −f(x), orijine simetri.",
            "Sınıflandırma: f(−x) hesapla; ikisi de olmuyorsa hiçbiri.",
            "Sınavda neden yaz: *since f(−x) = f(x), f is even.*"
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "Tabloyla verilen g fonksiyonu için hangisi doğrudur?",
      fig: {
        type: "table",
        head: ["x", "1", "2", "3", "4"],
        rows: [
          ["g(x)", "5", "7", "5", "9"]
        ],
        caption: "g fonksiyonu"
      },
      opts: [
        "g bir fonksiyon değildir, çünkü 5 iki kez görünüyor.",
        "g birebirdir, çünkü her x farklı bir değer.",
        "g(1) = g(3) olduğundan g birebir değildir; range = {5, 7, 9}.",
        "g'nin range'i {1, 2, 3, 4} kümesidir."
      ],
      a: 2,
      why: "Fonksiyon kuralı yalnızca bir girdinin iki çıktısı olmasını yasaklar; iki girdinin aynı çıktıyı paylaşması serbest. g(1) = g(3) = 5 olduğundan g birebir değildir. Range, alt satırdaki değerlerdir: {5, 7, 9}. A seçeneği çekici ama yanlış: 5'in iki kez görünmesi fonksiyonluğu bozmaz."
    },
    {
      q: "f(x) = x⁵ − 4x³ + 2x fonksiyonu için hangisi doğrudur?",
      opts: [
        "Çifttir, çünkü f(−x) = f(x).",
        "Tektir, çünkü f(−x) = −f(x).",
        "Hiçbiri, çünkü hem x⁵ hem x³ var.",
        "Hem çift hem tektir."
      ],
      a: 1,
      why: "f(−x) = −x⁵ + 4x³ − 2x = −(x⁵ − 4x³ + 2x) = −f(x). Bütün kuvvetler tek olduğundan fonksiyon tektir. C seçeneği çekici: farklı kuvvetler var ama hepsi tek kuvvet; karışık olması için çift kuvvet de gerekirdi."
    },
    {
      q: "f: {1, 2, 3} → {a, b, c, d} fonksiyonunda f(1) = a, f(2) = c, f(3) = d veriliyor. Hangisi doğrudur?",
      opts: [
        "f birebirdir ama örten değildir.",
        "f örtendir ama birebir değildir.",
        "f hem birebir hem örtendir.",
        "f ne birebir ne örtendir."
      ],
      a: 0,
      why: "Üç girdi üç farklı çıktı verdi: birebir. Ama codomain'de d dışında b de var ve hiçbir girdi b'ye gitmiyor: range = {a, c, d} ≠ codomain, yani örten değil. Eleman sayısı da bunu söyler: 3 girdi, 4 hedef; 4 elemanın hepsi dolamaz."
    },
    {
      q: "g(x) = (k − 3)x² + (k + 1)x fonksiyonu tek fonksiyon olduğuna göre k kaçtır?",
      opts: ["−1", "0", "1", "3"],
      a: 3,
      why: "g(−x) = (k − 3)x² − (k + 1)x ve −g(x) = −(k − 3)x² − (k + 1)x. Eşit olması için x² katsayısı sıfır olmalı: k − 3 = 0, k = 3. Bu durumda g(x) = 4x tek fonksiyon. k = −1 (A) fonksiyonu çift yapardı: g(x) = −4x²."
    },
    {
      q: "h(x) = x², tanımlı olduğu kümeler değiştirilerek bijective (birebir ve örten) yapılmak isteniyor. Hangi seçim h'yi bijective yapar?",
      opts: ["h: ℝ → ℝ", "h: [0, ∞) → ℝ", "h: ℝ → [0, ∞)", "h: [0, ∞) → [0, ∞)"],
      a: 3,
      why: "h(x) = x² birebir olması için domain'in tek işaretli olması gerekir (x ≥ 0); örten olması için codomain range'e, yani [0, ∞)'e eşit olmalı. B seçeneği birebir ama negatif sayılar boşta (örten değil); C seçeneği örten ama h(2) = h(−2) (birebir değil)."
    }
  ]
};
