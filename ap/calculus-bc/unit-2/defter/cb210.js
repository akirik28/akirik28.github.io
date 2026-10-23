/* Kitora not defteri · cb210 · 2.10 tan x, cot x, sec x ve csc x'in Türevleri
   Kaynak: ap-videolar/src/episodes/cb210 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb210",
  amac: "Bu konu, tan x, cot x, sec x ve csc x fonksiyonlarının türevlerini veriyor. Hepsini sin x ve cos x'ten bölüm kuralıyla türetecek, sonra değer, teğet, yatay teğet ve limit sorularında kullanacaksın.",
  bolumler: [
    {
      baslik: "tan x'in türevi: sec² x",
      kisa: "tan x'in türevi sec² x'tir; bölüm kuralı ve sin² + cos² = 1 ile çıkar.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "y = tan x üzerinde kayan teğetin eğimi",
          xlabel: "x (radyan)",
          ylabel: "y",
          xmax: 3.5,
          ymax: 8,
          xticks: [{ v: 0, label: "−π/2" }, { v: 1.571, label: "0" }, { v: 3.142, label: "π/2" }],
          yticks: [
            { v: 0, label: "−4" },
            { v: 2, label: "−2" },
            { v: 4, label: "0" },
            { v: 6, label: "2" },
            { v: 8, label: "4" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 4], to: [3.5, 4] },
            { id: "ay", tip: "cizgi", renk: 3, kesik: true, from: [1.571, 0], to: [1.571, 8] },
            { id: "as", tip: "cizgi", renk: 2, kesik: true, from: [3.142, 0], to: [3.142, 8], etiket: "x = π/2" },
            {
              id: "f",
              tip: "egri",
              renk: 0,
              noktalar: [
                [0.271, 0.398], [0.371, 1.428], [0.471, 2.035], [0.571, 2.443], [0.671, 2.74], [0.771, 2.97],
                [0.871, 3.158], [0.971, 3.316], [1.071, 3.454], [1.171, 3.577], [1.271, 3.691], [1.371, 3.797],
                [1.471, 3.9], [1.571, 4], [1.671, 4.1], [1.771, 4.203], [1.871, 4.309], [1.971, 4.423], [2.071, 4.546],
                [2.171, 4.684], [2.271, 4.842], [2.371, 5.03], [2.471, 5.26], [2.571, 5.557], [2.671, 5.965],
                [2.771, 6.572], [2.871, 7.602]
              ]
            },
            { id: "t", tip: "cizgi", renk: 1, from: [0.571, 3], to: [2.571, 5], etiket: "eğim 1", gizli: true },
            { id: "p", tip: "nokta", renk: 1, x: 1.571, y: 4, gizli: true }
          ],
          durumlar: [
            {
              metin: "y = tan x: kol aşağıdan yukarı tırmanır ve asimptota yapışır. Kesikli çizgiler gerçek eksenler; koordinatlar kaydırıldı."
            },
            { metin: "x = 0'da teğetin eğimi 1.", goster: ["t", "p"] },
            {
              metin: "x = π/4'te eğim 2: eğri daha dik.",
              set: { t: { from: [1.871, 4.029], to: [2.771, 5.829], etiket: "eğim 2" }, p: { x: 2.356, y: 5 } }
            },
            {
              metin: "Asimptota yaklaştıkça eğim sonsuza gider; hiçbir yerde 1'in altına inmez. Bu eğimleri veren fonksiyon sec² x.",
              set: { t: { from: [2.671, 5.811], to: [2.871, 7.334], etiket: "eğim ↑↑" }, p: { x: 2.771, y: 6.572 } }
            }
          ]
        },
        {
          tip: "adimlar",
          baslik: "Bölüm kuralıyla türetme",
          adimlar: [
            { baslik: "Yeniden yaz", metin: "tan x = sin x / cos x" },
            { baslik: "Bölüm kuralı", metin: "[cos x · cos x − sin x · (−sin x)] / cos² x" },
            { baslik: "Payı düzenle", metin: "pay = cos² x + sin² x" },
            { baslik: "Pisagor özdeşliği", metin: "cos² x + sin² x = 1 olduğundan türev 1 / cos² x = sec² x" }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📐",
              terim: "Derivative of tan x",
              tr: "tan x'in türevi",
              tanim: "(tan x)′ = sec² x. Eğim her yerde en az 1: x = 0'da 1, asimptota yaklaşırken sonsuz.",
              ornek: "x = 0'da sec² 0 = 1."
            },
            {
              ikon: "➗",
              terim: "Quotient rule",
              tr: "bölüm kuralı",
              tanim: "(f/g)′ = (f′g − fg′)/g². tan, cot, sec ve csc'nin hepsi sin ve cos'un bölümüdür.",
              ornek: "tan x = sin x / cos x."
            },
            {
              ikon: "⭕",
              terim: "Pythagorean identity",
              tr: "Pisagor özdeşliği",
              tanim: "sin² x + cos² x = 1. Türevin payını sadeleştirmenin anahtarı.",
              ornek: "cos² x + sin² x payı 1 olur."
            }
          ]
        }
      ]
    },
    {
      baslik: "sec x, cot x ve csc x'in türevleri",
      kisa: "Aynı yöntemle üç türev daha: sec, cot ve csc.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "sec x = 1/cos x'in türevi",
          durum: "Bölüm kuralı: f = 1, g = cos x.",
          adimlar: [
            "Bölüm kuralı: [cos x · 0 − 1 · (−sin x)] / cos² x.",
            "Pay sin x: sin x / cos² x.",
            "İkiye ayır: (1 / cos x) · (sin x / cos x) = sec x · tan x."
          ],
          sonuc: "(sec x)′ = sec x tan x"
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "↗️",
              terim: "Derivative of sec x",
              tr: "sec x'in türevi",
              tanim: "(sec x)′ = sec x · tan x.",
              ornek: "x = 0'da sec 0 · tan 0 = 1 · 0 = 0."
            },
            {
              ikon: "🪞",
              terim: "Derivative of cot x",
              tr: "cot x'in türevi",
              tanim: "(cot x)′ = −csc² x. cot x = cos x / sin x'ten aynı yöntemle çıkar.",
              ornek: "(3 + cot x)′ = −csc² x."
            },
            {
              ikon: "🔻",
              terim: "Derivative of csc x",
              tr: "csc x'in türevi",
              tanim: "(csc x)′ = −csc x · cot x.",
              ornek: "x = π/6'da −2 · √3 = −2√3."
            }
          ]
        }
      ]
    },
    {
      baslik: "Altı türev: \"ko\" aynası",
      kisa: "\"Ko\"lu fonksiyonun türevi, \"ko\"suz olanın aynasıdır ve eksi alır.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Altı trigonometrik türev",
          head: ["\"Ko\"suz", "Türevi", "\"Ko\"lu", "Türevi"],
          rows: [
            ["sin x", "cos x", "cos x", "−sin x"],
            ["tan x", "sec² x", "cot x", "−csc² x"],
            ["sec x", "sec x tan x", "csc x", "−csc x cot x"]
          ],
          vurgu: 1,
          not: "tan ile sec bir aile, cot ile csc öteki aile. Ayna: ko'suz satırda her fonksiyon adına \"ko\" ekle ve başa eksi koy."
        },
        {
          tip: "ikili",
          sol: { ikon: "➕", baslik: "\"Ko\"suz: sin, tan, sec", maddeler: ["Türevde eksi yok", "cos, sec², sec·tan"] },
          sag: { ikon: "➖", baslik: "\"Ko\"lu: cos, cot, csc", maddeler: ["Türevde eksi var", "−sin, −csc², −csc·cot"] },
          oyun: [
            { metin: "(sec x)′ = sec x tan x", cevap: "sol", neden: "sec \"ko\"suz: eksi yok." },
            { metin: "(cot x)′ = −csc² x", cevap: "sag", neden: "cot \"ko\"lu: eksi var." },
            { metin: "(tan x)′ = sec² x", cevap: "sol", neden: "tan \"ko\"suz: eksi yok." },
            { metin: "(csc x)′ = −csc x cot x", cevap: "sag", neden: "csc \"ko\"lu: eksi var." },
            { metin: "(sin x)′ = cos x", cevap: "sol", neden: "sin \"ko\"suz: eksi yok." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Aileleri karıştırma",
          metin: "tan x'in türevi sec² x'tir; sec x'in türevi sec² x değildir. \"Ko\"lu üç türevde de eksi var.",
          yanlis: "(sec x)′ = sec² x ve (cot x)′ = csc² x",
          dogru: "(sec x)′ = sec x tan x ve (cot x)′ = −csc² x"
        }
      ]
    },
    {
      baslik: "Değer hesabı: birim çember",
      kisa: "Önce sin ve cos'u çemberden bul: sec = 1/cos, csc = 1/sin, cot = cos/sin.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🕒",
              terim: "Unit circle",
              tr: "birim çember",
              tanim: "π/6, π/4, π/3 gibi açıların sin ve cos değerlerini veren çember. Öteki trigonometrik değerler buradan türer.",
              ornek: "cos(π/3) = 1/2 ⇒ sec(π/3) = 2."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Sık kullanılan değerler",
          head: ["", "π/6", "π/4", "π/3"],
          rows: [
            ["sin", "1/2", "√2/2", "√3/2"],
            ["cos", "√3/2", "√2/2", "1/2"],
            ["tan", "√3/3", "1", "√3"],
            ["sec", "2√3/3", "√2", "2"],
            ["csc", "2", "√2", "2√3/3"],
            ["cot", "√3", "1", "√3/3"]
          ]
        },
        {
          tip: "ornek",
          baslik: "f(x) = 4 sec x, f′(π/3) = ?",
          durum: "Eğimi π/3'te hesapla.",
          adimlar: ["f′(x) = 4 sec x tan x.", "π/3'te cos = 1/2 ⇒ sec = 2; tan = √3.", "f′(π/3) = 4 · 2 · √3."],
          sonuc: "f′(π/3) = 8√3 ≈ 13,86"
        },
        {
          tip: "ornek",
          baslik: "y = x tan x",
          durum: "Çarpım kuralı yeni türevle de çalışır: f = x, g = tan x.",
          adimlar: ["f′g = 1 · tan x.", "fg′ = x · sec² x."],
          sonuc: "y′ = tan x + x sec² x"
        }
      ]
    },
    {
      baslik: "Teğet doğrusu: tan x, x = π/4",
      kisa: "Nokta tan(π/4) = 1; eğim sec²(π/4) = 2.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📍",
              terim: "Tangent line",
              tr: "teğet doğrusu",
              tanim: "x = a'daki teğet: y − f(a) = f′(a)(x − a). Nokta f'den, eğim f′'den.",
              ornek: "y = tan x, a = π/4: nokta (π/4, 1), eğim 2."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "y = tan x eğrisinin x = π/4'teki teğeti",
          durum: "Teğet doğrusunun denklemini yaz.",
          adimlar: [
            "Nokta: tan(π/4) = 1 ⇒ (π/4, 1).",
            "Eğim: (tan x)′ = sec² x.",
            "cos(π/4) = √2/2 ⇒ sec(π/4) = √2 ⇒ sec²(π/4) = 2.",
            "Nokta-eğim biçimi: y − 1 = 2(x − π/4)."
          ],
          sonuc: "y − 1 = 2(x − π/4)"
        },
        {
          tip: "grafik",
          baslik: "tan x ve x = π/4'teki teğet",
          xlabel: "x (radyan)",
          ylabel: "y",
          xmax: 3.5,
          ymax: 8,
          xticks: [{ v: 0, label: "−π/2" }, { v: 1.571, label: "0" }, { v: 3.142, label: "π/2" }],
          yticks: [
            { v: 0, label: "−4" },
            { v: 2, label: "−2" },
            { v: 4, label: "0" },
            { v: 6, label: "2" },
            { v: 8, label: "4" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 4], to: [3.5, 4] },
            { id: "ay", tip: "cizgi", renk: 3, kesik: true, from: [1.571, 0], to: [1.571, 8] },
            { id: "as", tip: "cizgi", renk: 2, kesik: true, from: [3.142, 0], to: [3.142, 8], etiket: "x = π/2" },
            {
              id: "f",
              tip: "egri",
              renk: 0,
              noktalar: [
                [0.271, 0.398], [0.371, 1.428], [0.471, 2.035], [0.571, 2.443], [0.671, 2.74], [0.771, 2.97],
                [0.871, 3.158], [0.971, 3.316], [1.071, 3.454], [1.171, 3.577], [1.271, 3.691], [1.371, 3.797],
                [1.471, 3.9], [1.571, 4], [1.671, 4.1], [1.771, 4.203], [1.871, 4.309], [1.971, 4.423], [2.071, 4.546],
                [2.171, 4.684], [2.271, 4.842], [2.371, 5.03], [2.471, 5.26], [2.571, 5.557], [2.671, 5.965],
                [2.771, 6.572], [2.871, 7.602]
              ]
            },
            {
              id: "t0",
              tip: "cizgi",
              renk: 3,
              kesik: true,
              from: [0.771, 3.2],
              to: [2.371, 4.8],
              etiket: "x = 0: eğim 1",
              gizli: true
            },
            { id: "P", tip: "nokta", renk: 1, x: 2.356, y: 5, etiket: "(π/4, 1)", gizli: true },
            {
              id: "t",
              tip: "cizgi",
              renk: 1,
              from: [1.871, 4.029],
              to: [2.771, 5.829],
              etiket: "eğim 2",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "y = tan x, kaydırılmış koordinatlarda." },
            { metin: "x = π/4'te nokta (π/4, 1); teğetin eğimi sec²(π/4) = 2.", goster: ["P", "t"] },
            { metin: "Karşılaştır: x = 0'daki teğetin eğimi 1. π/4'te eğri daha dik.", goster: ["t0"] }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Radyan modu",
          metin: "Değerleri birim çemberden oku. Hesap makinesi derece modundaysa tan(π/4) = 1 çıkmaz.",
          yanlis: "Hesap makinesi DEG modunda tan(π/4) hesaplamak.",
          dogru: "RAD modu: tan(π/4) = 1 ve sec²(π/4) = 2."
        }
      ]
    },
    {
      baslik: "Yatay teğet: 2x − tan x",
      kisa: "2 − sec² x = 0 olunca grafik yataydır: x = ±π/4.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "➡️",
              terim: "Horizontal tangent",
              tr: "yatay teğet",
              tanim: "Eğimi 0 olan teğet; f′(x) = 0 çözülür. Yeni türevlerle de aynı yöntem.",
              ornek: "2 − sec² x = 0 ⇒ sec² x = 2."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "f(x) = 2x − tan x, −π/2 < x < π/2",
          durum: "Grafik nerede yatay?",
          adimlar: [
            "f′(x) = 2 − sec² x.",
            "Sıfıra eşitle: sec² x = 2 ⇒ cos² x = 1/2.",
            "Bu aralıkta cos pozitif: cos x = √2/2 ⇒ x = π/4 ve x = −π/4.",
            "f(π/4) = π/2 − 1 ≈ 0,571 (tepe); f(−π/4) = 1 − π/2 ≈ −0,571 (çukur)."
          ],
          sonuc: "x = ±π/4; tepe (π/4, ≈ 0,571), çukur (−π/4, ≈ −0,571)"
        },
        {
          tip: "grafik",
          baslik: "y = 2x − tan x: iner, çıkar, yine iner",
          xlabel: "x (radyan)",
          ylabel: "y",
          xmax: 3.5,
          ymax: 4,
          xticks: [{ v: 0, label: "−π/2" }, { v: 1.571, label: "0" }, { v: 3.142, label: "π/2" }],
          yticks: [
            { v: 0, label: "−2" },
            { v: 1, label: "−1" },
            { v: 2, label: "0" },
            { v: 3, label: "1" },
            { v: 4, label: "2" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 2], to: [3.5, 2] },
            { id: "ay", tip: "cizgi", renk: 3, kesik: true, from: [1.571, 0], to: [1.571, 4] },
            { id: "as", tip: "cizgi", renk: 3, kesik: true, from: [3.142, 0], to: [3.142, 4] },
            {
              id: "f",
              tip: "egri",
              renk: 0,
              noktalar: [
                [0.221, 3.755], [0.321, 2.51], [0.421, 1.934], [0.521, 1.643], [0.621, 1.498], [0.721, 1.438],
                [0.821, 1.432], [0.921, 1.46], [1.021, 1.513], [1.121, 1.583], [1.221, 1.665], [1.321, 1.755],
                [1.421, 1.851], [1.521, 1.95], [1.621, 2.05], [1.721, 2.149], [1.821, 2.245], [1.921, 2.335],
                [2.021, 2.417], [2.121, 2.487], [2.221, 2.54], [2.321, 2.568], [2.421, 2.562], [2.521, 2.502],
                [2.621, 2.357], [2.721, 2.066], [2.821, 1.49], [2.921, 0.245]
              ]
            },
            { id: "Pc", tip: "nokta", renk: 2, x: 0.785, y: 1.429, etiket: "çukur", gizli: true },
            { id: "tc", tip: "cizgi", renk: 2, from: [0.285, 1.429], to: [1.285, 1.429], gizli: true },
            { id: "Pt", tip: "nokta", renk: 1, x: 2.356, y: 2.571, etiket: "tepe", gizli: true },
            { id: "tt", tip: "cizgi", renk: 1, from: [1.856, 2.571], to: [2.856, 2.571], gizli: true }
          ],
          durumlar: [
            { metin: "y = 2x − tan x. Kesikli çizgiler gerçek eksenler ve asimptotlar." },
            { metin: "x = −π/4'te yatay teğet: eğri burada çukura iniyor (≈ −0,571).", goster: ["Pc", "tc"] },
            { metin: "x = π/4'te yatay teğet: eğri burada tepeye çıkıyor (≈ 0,571).", goster: ["Pt", "tt"] },
            { metin: "Eğim işareti: − (iniyor), + (çıkıyor), − (yine iniyor). Sıfırlar ±π/4." }
          ]
        }
      ]
    },
    {
      baslik: "Limit kılığında türev",
      kisa: "Gizli f(a) ve a'yı bul; limit f′(a)'dır.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "csc'nin gizli limiti",
          durum: "lim (h → 0) [csc(π/6 + h) − 2] / h = ?",
          adimlar: [
            "Gizli sayı: csc(π/6) = 1 / sin(π/6) = 1 / (1/2) = 2.",
            "Kalıp: [f(a + h) − f(a)] / h ile f(x) = csc x, a = π/6.",
            "Limit f′(π/6) = −csc(π/6) · cot(π/6).",
            "csc(π/6) = 2 ve cot(π/6) = √3 ⇒ −2√3."
          ],
          sonuc: "−2√3 ≈ −3,46"
        },
        {
          tip: "tuzak",
          baslik: "Eksiyi unutma",
          metin: "csc ve cot türevlerinde eksi var. Eksiyi unutan 2√3 şıkkını işaretler.",
          yanlis: "Limit = 2√3",
          dogru: "Limit = −csc(π/6) cot(π/6) = −2√3"
        }
      ]
    },
    {
      baslik: "Unit 2'nin alet çantası",
      kisa: "Tanım, kurallar ve fonksiyonlar tamam; iç içe fonksiyonlar zincir kuralı ister.",
      bloklar: [
        {
          tip: "harita",
          merkez: "Unit 2 türev aletleri",
          dallar: [
            { baslik: "Tanım", alt: "h → 0 iken [f(x + h) − f(x)]/h" },
            { baslik: "Kuvvet ve sabit", alt: "xⁿ, c, c·f" },
            { baslik: "Toplam ve fark", alt: "terim terim" },
            { baslik: "Çarpım kuralı", alt: "f′g + fg′" },
            { baslik: "Bölüm kuralı", alt: "(f′g − fg′)/g²" },
            { baslik: "Trigonometri", alt: "sin, cos, tan, cot, sec, csc" },
            { baslik: "Üstel", alt: "eˣ ve aˣ" },
            { baslik: "Logaritma", alt: "ln x ve logₐ x" }
          ]
        },
        {
          tip: "not",
          metin: "Bir eksik kaldı: sin 3x ya da e^(x²) gibi iç içe fonksiyonlar. Onların türevi ==zincir kuralı== ister; Unit 3'ün ilk konusu bu."
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
            "(tan x)′ = sec² x; (sec x)′ = sec x tan x.",
            "(cot x)′ = −csc² x; (csc x)′ = −csc x cot x. \"Ko\"lu türevlerde eksi var.",
            "Hepsi sin ve cos'tan bölüm kuralı ve sin² + cos² = 1 ile türetilir.",
            "tan ile sec bir aile; sec² x, sec x'in türevi değildir.",
            "Değer hesabında önce sin ve cos'u birim çemberden bul: π/6, π/4, π/3.",
            "Teğet: nokta f(a)'dan, eğim f′(a)'dan; yatay teğet için f′(x) = 0.",
            "Hesap makinesi radyan modunda olmalı.",
            "Limit kılığında türevde f ve a'yı tanı; eksiyi unutma."
          ]
        }
      ]
    }
  ]
};
