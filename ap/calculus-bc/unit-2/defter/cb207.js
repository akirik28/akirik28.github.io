/* Kitora not defteri · cb207 · 2.7 sin x, cos x, eˣ ve ln x'in Türevleri
   Kaynak: ap-videolar/src/episodes/cb207 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb207",
  amac: "Bu konu, trigonometri ve üstel-logaritma fonksiyonlarının türevlerini veriyor: sin x, cos x, eˣ, aˣ, ln x ve logₐ x. Her türevin neden öyle olduğunu görecek, teğet, yatay teğet ve limit sorularında kullanacaksın.",
  bolumler: [
    {
      baslik: "sin x'in türevi: eğimlerden doğar",
      kisa: "sin x'in türevi cos x'tir; yalnız x radyan iken geçerli.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "sin x üzerinde kayan teğetin eğimleri bir kosinüs dalgası çizer",
          xlabel: "x (radyan)",
          ylabel: "y",
          xmax: 6.5,
          ymax: 4,
          xticks: [
            { v: 0, label: "0" },
            { v: 1.571, label: "π/2" },
            { v: 3.142, label: "π" },
            { v: 4.712, label: "3π/2" },
            { v: 6.283, label: "2π" }
          ],
          yticks: [{ v: 1, label: "−1" }, { v: 2, label: "0" }, { v: 3, label: "1" }],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 2], to: [6.5, 2] },
            {
              id: "s",
              tip: "egri",
              renk: 0,
              etiket: "sin x",
              noktalar: [
                [0, 2], [0.196, 2.195], [0.393, 2.383], [0.589, 2.556], [0.785, 2.707], [0.982, 2.831], [1.178, 2.924],
                [1.374, 2.981], [1.571, 3], [1.767, 2.981], [1.963, 2.924], [2.16, 2.831], [2.356, 2.707], [2.553, 2.556],
                [2.749, 2.383], [2.945, 2.195], [3.142, 2], [3.338, 1.805], [3.534, 1.617], [3.731, 1.444], [3.927, 1.293],
                [4.123, 1.169], [4.32, 1.076], [4.516, 1.019], [4.712, 1], [4.909, 1.019], [5.105, 1.076], [5.301, 1.169],
                [5.498, 1.293], [5.694, 1.444], [5.89, 1.617], [6.087, 1.805], [6.283, 2]
              ]
            },
            { id: "t", tip: "cizgi", renk: 1, from: [0, 2], to: [1, 3], etiket: "eğim 1", gizli: true },
            { id: "m0", tip: "nokta", renk: 2, x: 0, y: 3, gizli: true },
            { id: "m1", tip: "nokta", renk: 2, x: 1.571, y: 2, gizli: true },
            { id: "m2", tip: "nokta", renk: 2, x: 3.142, y: 1, gizli: true },
            {
              id: "c",
              tip: "egri",
              renk: 2,
              etiket: "cos x",
              noktalar: [
                [0, 3], [0.196, 2.981], [0.393, 2.924], [0.589, 2.831], [0.785, 2.707], [0.982, 2.556], [1.178, 2.383],
                [1.374, 2.195], [1.571, 2], [1.767, 1.805], [1.963, 1.617], [2.16, 1.444], [2.356, 1.293], [2.553, 1.169],
                [2.749, 1.076], [2.945, 1.019], [3.142, 1], [3.338, 1.019], [3.534, 1.076], [3.731, 1.169], [3.927, 1.293],
                [4.123, 1.444], [4.32, 1.617], [4.516, 1.805], [4.712, 2], [4.909, 2.195], [5.105, 2.383], [5.301, 2.556],
                [5.498, 2.707], [5.694, 2.831], [5.89, 2.924], [6.087, 2.981], [6.283, 3]
              ],
              gizli: true
            }
          ],
          durumlar: [
            { metin: "y = sin x. Üzerinde bir teğet kaydıracağız ve her yerdeki eğimi not edeceğiz." },
            { metin: "x = 0'da eğim 1. Bu eğimi (0, 1) noktası olarak işaretledik.", goster: ["t", "m0"] },
            {
              metin: "x = π/2 (tepe): teğet yatay, eğim 0. Nokta (π/2, 0).",
              goster: ["m1"],
              set: { t: { from: [0.571, 3], to: [2.571, 3], etiket: "eğim 0" } }
            },
            {
              metin: "x = π'de eğim −1. Nokta (π, −1).",
              goster: ["m2"],
              set: { t: { from: [2.142, 3], to: [4.142, 1], etiket: "eğim −1" } }
            },
            {
              metin: "Eğim noktalarını birleştir: ortaya cos x çıkar. Yani (sin x)′ = cos x.",
              goster: ["c"],
              gizle: ["t"]
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🌊",
              terim: "Derivative of sin x",
              tr: "sin x'in türevi",
              tanim: "(sin x)′ = cos x. Sinüs dalgasının her noktadaki eğimi, kosinüs dalgasının o noktadaki değeridir.",
              ornek: "x = 0'da sin eğimi cos 0 = 1; x = π'de cos π = −1."
            },
            {
              ikon: "📏",
              terim: "Radians",
              tr: "radyan",
              tanim: "Trigonometrik türev kuralları yalnız ==radyan== için geçerlidir. Derece kullanırsan kurallar bozulur.",
              ornek: "π radyan = 180°; hesap makinesi RAD modunda olmalı."
            }
          ]
        }
      ]
    },
    {
      baslik: "cos x'in türevi: −sin x",
      kisa: "cos x'in türevi −sin x'tir; \"ko\" ile başlayan türevlerde eksi gelir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "cos x üzerinde kayan teğetin eğimleri −sin x çizer",
          xlabel: "x (radyan)",
          ylabel: "y",
          xmax: 6.5,
          ymax: 4,
          xticks: [
            { v: 0, label: "0" },
            { v: 1.571, label: "π/2" },
            { v: 3.142, label: "π" },
            { v: 4.712, label: "3π/2" },
            { v: 6.283, label: "2π" }
          ],
          yticks: [{ v: 1, label: "−1" }, { v: 2, label: "0" }, { v: 3, label: "1" }],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 2], to: [6.5, 2] },
            {
              id: "c",
              tip: "egri",
              renk: 0,
              etiket: "cos x",
              noktalar: [
                [0, 3], [0.196, 2.981], [0.393, 2.924], [0.589, 2.831], [0.785, 2.707], [0.982, 2.556], [1.178, 2.383],
                [1.374, 2.195], [1.571, 2], [1.767, 1.805], [1.963, 1.617], [2.16, 1.444], [2.356, 1.293], [2.553, 1.169],
                [2.749, 1.076], [2.945, 1.019], [3.142, 1], [3.338, 1.019], [3.534, 1.076], [3.731, 1.169], [3.927, 1.293],
                [4.123, 1.444], [4.32, 1.617], [4.516, 1.805], [4.712, 2], [4.909, 2.195], [5.105, 2.383], [5.301, 2.556],
                [5.498, 2.707], [5.694, 2.831], [5.89, 2.924], [6.087, 2.981], [6.283, 3]
              ]
            },
            { id: "t", tip: "cizgi", renk: 1, from: [0, 3], to: [1, 3], etiket: "eğim 0", gizli: true },
            { id: "m0", tip: "nokta", renk: 2, x: 0, y: 2, gizli: true },
            { id: "m1", tip: "nokta", renk: 2, x: 1.571, y: 1, gizli: true },
            { id: "m2", tip: "nokta", renk: 2, x: 3.142, y: 2, gizli: true },
            { id: "m3", tip: "nokta", renk: 2, x: 4.712, y: 3, gizli: true },
            {
              id: "d",
              tip: "egri",
              renk: 2,
              etiket: "−sin x",
              noktalar: [
                [0, 2], [0.196, 1.805], [0.393, 1.617], [0.589, 1.444], [0.785, 1.293], [0.982, 1.169], [1.178, 1.076],
                [1.374, 1.019], [1.571, 1], [1.767, 1.019], [1.963, 1.076], [2.16, 1.169], [2.356, 1.293], [2.553, 1.444],
                [2.749, 1.617], [2.945, 1.805], [3.142, 2], [3.338, 2.195], [3.534, 2.383], [3.731, 2.556], [3.927, 2.707],
                [4.123, 2.831], [4.32, 2.924], [4.516, 2.981], [4.712, 3], [4.909, 2.981], [5.105, 2.924], [5.301, 2.831],
                [5.498, 2.707], [5.694, 2.556], [5.89, 2.383], [6.087, 2.195], [6.283, 2]
              ],
              gizli: true
            }
          ],
          durumlar: [
            { metin: "y = cos x. Aynı oyunu oynuyoruz: teğeti kaydır, eğimleri not et." },
            { metin: "x = 0'da kosinüs tepede: teğet yatay, eğim 0. Nokta (0, 0).", goster: ["t", "m0"] },
            {
              metin: "x = π/2'de en dik iniş: eğim −1. Nokta (π/2, −1).",
              goster: ["m1"],
              set: { t: { from: [0.571, 3], to: [2.571, 1], etiket: "eğim −1" } }
            },
            {
              metin: "x = π'de çukur: eğim yine 0. Nokta (π, 0).",
              goster: ["m2"],
              set: { t: { from: [2.142, 1], to: [4.142, 1], etiket: "eğim 0" } }
            },
            {
              metin: "x = 3π/2'de dik çıkış: eğim 1. Nokta (3π/2, 1).",
              goster: ["m3"],
              set: { t: { from: [3.712, 1], to: [5.712, 3], etiket: "eğim 1" } }
            },
            {
              metin: "Noktaları birleştir: sinüsün baş aşağı hâli, −sin x. Yani (cos x)′ = −sin x.",
              goster: ["d"],
              gizle: ["t"]
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🪞",
              terim: "Derivative of cos x",
              tr: "cos x'in türevi",
              tanim: "(cos x)′ = −sin x. Önünde eksi var: ==\"ko\" ile başlayan fonksiyonların türevinde eksi gelir.==",
              ornek: "x = π/2'de cos x'in eğimi −sin(π/2) = −1."
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Eksiyi unutma",
          metin: "En sık yapılan hata, kosinüsün türevinde eksi işaretini düşürmektir.",
          yanlis: "(cos x)′ = sin x",
          dogru: "(cos x)′ = −sin x. Kısa yol: cos, cot, csc türevlerinde eksi var."
        }
      ]
    },
    {
      baslik: "eˣ ve aˣ: yüksekliğe eşit eğim",
      kisa: "eˣ'in türevi kendisidir; aˣ'in türevi aˣ·ln a'dır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "y = eˣ: her noktada eğim = yükseklik",
          xlabel: "x",
          ylabel: "y",
          xmax: 2.5,
          ymax: 8,
          xticks: [{ v: 0, label: "0" }, { v: 1, label: "1" }, { v: 2, label: "2" }],
          yticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 5, label: "5" }, { v: 7, label: "7" }],
          ogeler: [
            {
              id: "f",
              tip: "egri",
              renk: 0,
              etiket: "eˣ",
              noktalar: [
                [0, 1], [0.125, 1.133], [0.25, 1.284], [0.375, 1.455], [0.5, 1.649], [0.625, 1.868], [0.75, 2.117],
                [0.875, 2.399], [1, 2.718], [1.125, 3.08], [1.25, 3.49], [1.375, 3.955], [1.5, 4.482], [1.625, 5.078],
                [1.75, 5.755], [1.875, 6.521], [2, 7.389]
              ]
            },
            { id: "p0", tip: "nokta", renk: 1, x: 0, y: 1, etiket: "yükseklik 1", gizli: true },
            { id: "t0", tip: "cizgi", renk: 1, from: [0, 1], to: [1.5, 2.5], etiket: "eğim 1", gizli: true },
            { id: "p1", tip: "nokta", renk: 2, x: 1, y: 2.718, etiket: "yükseklik e", gizli: true },
            { id: "t1", tip: "cizgi", renk: 2, from: [0.5, 1.359], to: [1.5, 4.077], etiket: "eğim e", gizli: true },
            {
              id: "g",
              tip: "egri",
              renk: 3,
              etiket: "2ˣ",
              noktalar: [
                [0, 1], [0.125, 1.091], [0.25, 1.189], [0.375, 1.297], [0.5, 1.414], [0.625, 1.542], [0.75, 1.682],
                [0.875, 1.834], [1, 2], [1.125, 2.181], [1.25, 2.378], [1.375, 2.594], [1.5, 2.828], [1.625, 3.084],
                [1.75, 3.364], [1.875, 3.668], [2, 4]
              ],
              gizli: true
            },
            { id: "tg", tip: "cizgi", renk: 3, from: [0, 1], to: [1.5, 2.04], etiket: "eğim 0,693", gizli: true }
          ],
          durumlar: [
            { metin: "y = eˣ. Bu eğrinin özelliği: her noktada eğim, o noktadaki yüksekliğe eşit." },
            { metin: "x = 0'da yükseklik 1, eğim de 1.", goster: ["p0", "t0"] },
            {
              metin: "x = 1'de yükseklik e ≈ 2,718, eğim de e. Yani (eˣ)′ = eˣ.",
              goster: ["p1", "t1"],
              gizle: ["p0", "t0"]
            },
            {
              metin: "y = 2ˣ eğrisi: x = 0'da yükseklik 1 ama eğim yalnız ln 2 ≈ 0,693. (aˣ)′ = aˣ·ln a.",
              goster: ["g", "tg"],
              gizle: ["p1", "t1"]
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🚀",
              terim: "Natural exponential function",
              tr: "doğal üstel fonksiyon",
              tanim: "eˣ: eğimi her noktada yüksekliğine eşit. (eˣ)′ = eˣ.",
              ornek: "x = 1'de yükseklik e, eğim de e."
            },
            {
              ikon: "🔧",
              terim: "Exponential function aˣ",
              tr: "a tabanlı üstel fonksiyon",
              tanim: "(aˣ)′ = aˣ·ln a. ln a, taban e olmadığında gelen düzeltme çarpanıdır.",
              ornek: "(2ˣ)′ = 2ˣ·ln 2, ln 2 ≈ 0,693."
            }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "🔢", baslik: "Sabit üs: kuvvet kuralı", maddeler: ["Taban değişken, üs sabit", "(xⁿ)′ = n·xⁿ⁻¹"] },
          sag: {
            ikon: "📈",
            baslik: "Değişken üs: üstel kural",
            maddeler: ["Taban sabit, üs değişken", "(eˣ)′ = eˣ; (aˣ)′ = aˣ·ln a"]
          },
          oyun: [
            { metin: "xᵉ", cevap: "sol", neden: "Üs e bir sabit: kuvvet kuralı, e·xᵉ⁻¹." },
            { metin: "eˣ", cevap: "sag", neden: "Üs değişken: türevi yine eˣ." },
            { metin: "x⁵", cevap: "sol", neden: "Sabit üs: 5x⁴." },
            { metin: "5ˣ", cevap: "sag", neden: "Değişken üs: 5ˣ·ln 5." },
            { metin: "πˣ", cevap: "sag", neden: "Taban sabit, üs değişken: πˣ·ln π." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "eˣ'e kuvvet kuralı uygulama",
          metin: "Kuvvet kuralı yalnız üs sabitken çalışır. eˣ'te değişken üste çıkmıştır.",
          yanlis: "(eˣ)′ = x·eˣ⁻¹",
          dogru: "(eˣ)′ = eˣ. Kuvvet kuralı xᵉ için geçerlidir: e·xᵉ⁻¹."
        }
      ]
    },
    {
      baslik: "ln x ve logₐ x",
      kisa: "ln x'in türevi 1/x'tir; logₐ x'inki 1/(x·ln a).",
      bloklar: [
        {
          tip: "grafik",
          baslik: "y = ln x: x büyüdükçe eğim 1/x kadar küçülür",
          xlabel: "x",
          ylabel: "y",
          xmax: 5,
          ymax: 4,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" }
          ],
          yticks: [
            { v: 0, label: "−2" },
            { v: 1, label: "−1" },
            { v: 2, label: "0" },
            { v: 3, label: "1" },
            { v: 4, label: "2" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 2], to: [5, 2] },
            {
              id: "f",
              tip: "egri",
              renk: 0,
              etiket: "ln x",
              noktalar: [
                [0.25, 0.614], [0.5, 1.307], [0.75, 1.712], [1, 2], [1.25, 2.223], [1.5, 2.405], [1.75, 2.56],
                [2, 2.693], [2.25, 2.811], [2.5, 2.916], [2.75, 3.012], [3, 3.099], [3.25, 3.179], [3.5, 3.253],
                [3.75, 3.322], [4, 3.386], [4.25, 3.447], [4.5, 3.504], [4.75, 3.558], [5, 3.609]
              ]
            },
            { id: "p", tip: "nokta", renk: 1, x: 1, y: 2, gizli: true },
            { id: "t", tip: "cizgi", renk: 1, from: [0.5, 1.5], to: [2, 3], etiket: "eğim 1", gizli: true }
          ],
          durumlar: [
            { metin: "y = ln x. Kuralı kontrol etmek için üç yerde eğime bakacağız." },
            { metin: "x = 1'de eğim 1 = 1/1.", goster: ["p", "t"] },
            {
              metin: "x = 2'de eğim 1/2: eğri yataylaşmaya başladı.",
              set: { p: { x: 2, y: 2.693 }, t: { from: [1, 2.193], to: [3, 3.193], etiket: "eğim 1/2" } }
            },
            {
              metin: "x = 1/2'de eğim 2 = 1/(1/2). Yani (ln x)′ = 1/x; x büyüdükçe eğim küçülür.",
              set: { p: { x: 0.5, y: 1.307 }, t: { from: [0.25, 0.807], to: [0.75, 1.807], etiket: "eğim 2" } }
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📉",
              terim: "Natural logarithm",
              tr: "doğal logaritma",
              tanim: "ln x = logₑ x. Türevi (ln x)′ = 1/x (x > 0). Hatırla: ln 1 = 0, ln e = 1, e^(ln a) = a, ln eᵃ = a.",
              ornek: "x = 4'te (ln x)′ = 1/4."
            },
            {
              ikon: "🔁",
              terim: "Logarithm base a",
              tr: "a tabanlı logaritma",
              tanim: "(logₐ x)′ = 1/(x·ln a). Taban e değilse paydaya ln a gelir.",
              ornek: "(log₂ x)′ = 1/(x·ln 2)."
            }
          ]
        }
      ]
    },
    {
      baslik: "Hepsi bir arada: türev tablosu",
      kisa: "Önceki bölümün kuralları aynen geçerli; listeye dört yeni türev eklendi.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Yeni türevler",
          head: ["f(x)", "f′(x)"],
          rows: [
            ["sin x", "cos x"],
            ["cos x", "−sin x"],
            ["eˣ", "eˣ"],
            ["aˣ", "aˣ·ln a"],
            ["ln x", "1/x"],
            ["logₐ x", "1/(x·ln a)"]
          ],
          vurgu: 1,
          not: "Sabit, toplam ve fark kuralları bu fonksiyonlarla aynen çalışır."
        },
        {
          tip: "ornek",
          baslik: "Karışık bir türev",
          durum: "f(x) = 3eˣ − 2 ln x + 5 cos x ise f′(x) = ?",
          adimlar: ["3eˣ → sabit bekler: 3eˣ.", "−2 ln x → −2 · (1/x) = −2/x.", "5 cos x → 5 · (−sin x) = −5 sin x."],
          sonuc: "f′(x) = 3eˣ − 2/x − 5 sin x"
        }
      ]
    },
    {
      baslik: "Teğet doğrusu: 3 sin x − x",
      kisa: "Nokta f'den, eğim f′'den gelir; hesap makinesi radyan modunda olmalı.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📍",
              terim: "Tangent line",
              tr: "teğet doğrusu",
              tanim: "x = a'daki teğet: y − f(a) = f′(a)(x − a). Nokta f'den, eğim f′'den gelir.",
              ornek: "f(x) = 3 sin x − x, a = π: nokta (π, −π), eğim −4."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "f(x) = 3 sin x − x, x = π'deki teğet",
          durum: "Teğet doğrusunun denklemini yaz.",
          adimlar: [
            "Nokta: sin π = 0 olduğundan f(π) = −π. Nokta (π, −π).",
            "Türev: f′(x) = 3 cos x − 1.",
            "Eğim: cos π = −1 olduğundan f′(π) = −3 − 1 = −4.",
            "Nokta-eğim biçimi: y − (−π) = −4(x − π)."
          ],
          sonuc: "y + π = −4(x − π)"
        },
        {
          tip: "grafik",
          baslik: "f(x) = 3 sin x − x ve x = π'deki teğet",
          xlabel: "x (radyan)",
          ylabel: "y",
          xmax: 6.5,
          ymax: 12,
          xticks: [
            { v: 0, label: "0" },
            { v: 1.571, label: "π/2" },
            { v: 3.142, label: "π" },
            { v: 4.712, label: "3π/2" },
            { v: 6.283, label: "2π" }
          ],
          yticks: [
            { v: 2, label: "−7" },
            { v: 4, label: "−5" },
            { v: 6, label: "−3" },
            { v: 9, label: "0" },
            { v: 11, label: "2" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 9], to: [6.5, 9] },
            {
              id: "f",
              tip: "egri",
              renk: 0,
              noktalar: [
                [0, 9], [0.196, 9.389], [0.393, 9.755], [0.589, 10.078], [0.785, 10.336], [0.982, 10.513], [1.178, 10.594],
                [1.374, 10.568], [1.571, 10.429], [1.767, 10.175], [1.963, 9.808], [2.16, 9.335], [2.356, 8.765],
                [2.553, 8.114], [2.749, 7.399], [2.945, 6.64], [3.142, 5.858], [3.338, 5.077], [3.534, 4.318],
                [3.731, 3.603], [3.927, 2.952], [4.123, 2.382], [4.32, 1.909], [4.516, 1.542], [4.712, 1.288],
                [4.909, 1.149], [5.105, 1.123], [5.301, 1.204], [5.498, 1.381], [5.694, 1.639], [5.89, 1.961],
                [6.087, 2.328], [6.283, 2.717]
              ]
            },
            { id: "P", tip: "nokta", renk: 1, x: 3.142, y: 5.858, etiket: "(π, −π)", gizli: true },
            { id: "t", tip: "cizgi", renk: 1, from: [2.4, 8.825], to: [4, 2.425], etiket: "eğim −4", gizli: true }
          ],
          durumlar: [
            { metin: "f(x) = 3 sin x − x. Kesikli çizgi gerçek x ekseni." },
            { metin: "x = π'de f(π) = 0 − π = −π: nokta (π, −π).", goster: ["P"] },
            { metin: "f′(π) = 3 cos π − 1 = −4: eğri o noktada dik biçimde aşağı iniyor.", goster: ["t"] }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Derece modu",
          metin: "Trigonometrik türevlerde değerleri birim çemberden oku. Hesap makinesi derece modundaysa cos π yerine cos 180° mantığıyla yanlış sonuç alırsın.",
          yanlis: "Hesap makinesi DEG modunda cos(π) hesaplamak.",
          dogru: "RAD modu: cos π = −1."
        }
      ]
    },
    {
      baslik: "Yatay teğet: eˣ = 4",
      kisa: "f′(x) = 0 denklemini çöz; eˣ = 4 için iki tarafın ln'sini al.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "➡️",
              terim: "Horizontal tangent",
              tr: "yatay teğet",
              tanim: "Eğimi 0 olan teğet; f′(x) = 0 denklemini çözerek bulunur. Yeni fonksiyonlarla da aynı yöntem geçerli.",
              ornek: "f(x) = eˣ − 4x için f′(x) = eˣ − 4 = 0 ⇒ x = ln 4."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "f(x) = eˣ − 4x nerede yatay?",
          durum: "Yatay teğetin olduğu x değerini ve noktayı bul.",
          adimlar: [
            "Türev: f′(x) = eˣ − 4.",
            "Sıfıra eşitle: eˣ = 4.",
            "İki tarafın doğal logaritmasını al: x = ln 4 ≈ 1,386.",
            "Nokta: f(ln 4) = 4 − 4 ln 4 ≈ −1,545."
          ],
          sonuc: "x = ln 4 ≈ 1,386; nokta (ln 4, ≈ −1,545)"
        },
        {
          tip: "grafik",
          baslik: "f(x) = eˣ − 4x: dibe vuran nokta",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 8,
          xticks: [
            { v: 0, label: "−1" },
            { v: 1, label: "0" },
            { v: 2, label: "1" },
            { v: 3, label: "2" },
            { v: 4, label: "3" }
          ],
          yticks: [{ v: 0, label: "−2" }, { v: 2, label: "0" }, { v: 4, label: "2" }, { v: 6, label: "4" }],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 2], to: [4, 2] },
            { id: "ay", tip: "cizgi", renk: 3, kesik: true, from: [1, 0], to: [1, 8] },
            {
              id: "f",
              tip: "egri",
              renk: 0,
              noktalar: [
                [0, 6.368], [0.2, 5.649], [0.4, 4.949], [0.6, 4.27], [0.8, 3.619], [1, 3], [1.2, 2.421], [1.4, 1.892],
                [1.6, 1.422], [1.8, 1.026], [2, 0.718], [2.2, 0.52], [2.4, 0.455], [2.6, 0.553], [2.8, 0.85],
                [3, 1.389], [3.2, 2.225], [3.4, 3.423], [3.6, 5.064], [3.8, 7.245]
              ]
            },
            { id: "P", tip: "nokta", renk: 1, x: 2.386, y: 0.455, etiket: "x = ln 4", gizli: true },
            { id: "t", tip: "cizgi", renk: 1, from: [1.586, 0.455], to: [3.186, 0.455], gizli: true },
            { id: "n", tip: "yazi", x: 1.9, y: 5.2, metin: "solda f′ < 0", gizli: true },
            { id: "pz", tip: "yazi", x: 3.2, y: 5.2, metin: "sağda f′ > 0", gizli: true }
          ],
          durumlar: [
            { metin: "f(x) = eˣ − 4x. Kesikli çizgiler gerçek eksenler; koordinatları kaydırdık." },
            { metin: "x = ln 4 ≈ 1,386'da teğet yatay. Eğri burada dibe vuruyor.", goster: ["P", "t"] },
            {
              metin: "Solunda eˣ < 4, yani f′ < 0 (iniyor); sağında eˣ > 4, yani f′ > 0 (çıkıyor).",
              goster: ["n", "pz"]
            }
          ]
        }
      ]
    },
    {
      baslik: "Limit kılığında türev",
      kisa: "Limitte gizli f(a) ve a'yı bul; limit f′(a)'dır.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "İki limit, iki gizli türev",
          durum: "(1) lim h→0 [sin(π/3 + h) − sin(π/3)] / h   (2) lim h→0 [ln(e + h) − 1] / h",
          adimlar: [
            "(1) Kalıp: [f(a + h) − f(a)]/h. Burada f(x) = sin x, a = π/3.",
            "(1) Limit f′(π/3) = cos(π/3) = 1/2.",
            "(2) Payda f(e + h) = ln(e + h) var; çıkarılan 1 de f(e) = ln e.",
            "(2) f(x) = ln x, a = e: limit f′(e) = 1/e."
          ],
          sonuc: "(1) 1/2   (2) 1/e"
        },
        {
          tip: "tuzak",
          baslik: "Gizli sayıyı fark et",
          metin: "Limitlerde f(a) çoğu zaman sayı kılığındadır: 1 = ln e, 1/2 = sin(π/6), 0 = cos(π/2).",
          yanlis: "ln(e + h) − 1 ifadesindeki 1 rastgele bir sayıdır.",
          dogru: "1 = ln e olduğu için ifade ln fonksiyonunun e'deki türevidir."
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
            "(sin x)′ = cos x ve (cos x)′ = −sin x; x radyan olmalı.",
            "\"Ko\" ile başlayan türevlerde eksi var: cos x → −sin x.",
            "(eˣ)′ = eˣ; (aˣ)′ = aˣ·ln a. xᵉ ile eˣ'i karıştırma: xᵉ sabit üs, kuvvet kuralı.",
            "(ln x)′ = 1/x; (logₐ x)′ = 1/(x·ln a).",
            "Sabit, toplam ve fark kuralları yeni fonksiyonlarla aynen geçerli.",
            "Teğet: nokta f(a)'dan, eğim f′(a)'dan. Yatay teğet: f′(x) = 0.",
            "Limit kılığındaki türevde f ve a'yı tanı: 1 = ln e, 1/2 = sin(π/6)."
          ]
        }
      ]
    }
  ]
};
