/* Kitora not defteri · cb305 · 3.2-2 Kapalı Eğrilerde Teğet Doğruları
   Kaynak: ap-videolar/src/episodes/cb305 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb305",
  amac: "Bu konu kapalı eğrilerde teğet doğrusunu anlatıyor. Eğimi kapalı türevle bulacak, yatay ve dikey teğetleri yakalayacak, teğete dik olan normal doğrusunu yazacaksın.",
  bolumler: [
    {
      baslik: "Kapalı eğride teğet doğrusu",
      kisa: "Nokta ve kapalı türevden gelen eğimle y − y₀ = m(x − x₀) yazılır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔗",
              terim: "Implicit differentiation",
              tr: "kapalı türev",
              tanim: "y'yi x'in fonksiyonu sayıp her y teriminden sonra dy/dx yazmak. Eğim genelde pay/payda kesiri çıkar.",
              ornek: "x² + y² = 10 → 2x + 2y·dy/dx = 0 → dy/dx = −x/y."
            },
            {
              ikon: "📍",
              terim: "Tangent line",
              tr: "teğet doğrusu",
              tanim: "Bir noktada eğriye değen, o noktadaki eğimi taşıyan doğru.",
              ornek: "Çemberin (1, 3) noktasında eğim −1/3."
            },
            {
              ikon: "✏️",
              terim: "Point-slope form",
              tr: "nokta-eğim denklemi",
              tanim: "Nokta (x₀, y₀) ve eğim m biliniyorsa doğru ==y − y₀ = m(x − x₀)==.",
              ornek: "y − 3 = −⅓(x − 1)."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "x² + y² = 10 çemberinde x = 1'deki teğetler",
          xlabel: "x",
          ylabel: "y",
          xmax: 8,
          ymax: 8,
          xticks: [
            { v: 0, label: "−4" },
            { v: 2, label: "−2" },
            { v: 4, label: "0" },
            { v: 6, label: "2" },
            { v: 8, label: "4" }
          ],
          yticks: [
            { v: 0, label: "−4" },
            { v: 2, label: "−2" },
            { v: 4, label: "0" },
            { v: 6, label: "2" },
            { v: 8, label: "4" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 0, kesik: true, from: [0, 4], to: [8, 4] },
            { id: "ay", tip: "cizgi", renk: 0, kesik: true, from: [4, 0], to: [4, 8] },
            {
              id: "c",
              tip: "egri",
              renk: 0,
              noktalar: [[7.162, 4], [7.135, 4.413], [7.055, 4.818], [6.922, 5.21], [6.739, 5.581], [6.509, 5.925], [6.236, 6.236], [5.925, 6.509], [5.581, 6.739], [5.21, 6.922], [4.818, 7.055], [4.413, 7.135], [4, 7.162], [3.587, 7.135], [3.182, 7.055], [2.79, 6.922], [2.419, 6.739], [2.075, 6.509], [1.764, 6.236], [1.491, 5.925], [1.261, 5.581], [1.078, 5.21], [0.945, 4.818], [0.865, 4.413], [0.838, 4], [0.865, 3.587], [0.945, 3.182], [1.078, 2.79], [1.261, 2.419], [1.491, 2.075], [1.764, 1.764], [2.075, 1.491], [2.419, 1.261], [2.79, 1.078], [3.182, 0.945], [3.587, 0.865], [4, 0.838], [4.413, 0.865], [4.818, 0.945], [5.21, 1.078], [5.581, 1.261], [5.925, 1.491], [6.236, 1.764], [6.509, 2.075], [6.739, 2.419], [6.922, 2.79], [7.055, 3.182], [7.135, 3.587], [7.162, 4]]
            },
            { id: "v1", tip: "cizgi", renk: 3, kesik: true, from: [5, 0], to: [5, 8], gizli: true },
            { id: "p1", tip: "nokta", renk: 1, x: 5, y: 7, etiket: "(1, 3)", gizli: true },
            { id: "p2", tip: "nokta", renk: 1, x: 5, y: 1, etiket: "(1, −3)", gizli: true },
            { id: "t1", tip: "cizgi", renk: 2, from: [2, 8], to: [8, 6], etiket: "m = −1/3", gizli: true },
            { id: "t2", tip: "cizgi", renk: 2, from: [2, 0], to: [8, 2], etiket: "m = 1/3", gizli: true }
          ],
          durumlar: [
            { metin: "x² + y² = 10 çemberi. Soru: x = 1'deki bütün teğetler.", goster: ["v1"] },
            { metin: "x = 1'i koy: 1 + y² = 10 → y = ±3. İki nokta, yani ==iki teğet==.", goster: ["p1", "p2"] },
            { metin: "Kapalı türev dy/dx = −x/y. (1, 3)'te −1/3; (1, −3)'te +1/3." },
            {
              metin: "y − 3 = −⅓(x − 1) ve y + 3 = ⅓(x − 1). İkisi x eksenine göre simetrik.",
              goster: ["t1", "t2"]
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Tek teğet yazıp bırakma",
          metin: "Kapalı bir eğride aynı x değerine birden çok y düşebilir ve her noktanın kendi teğeti vardır.",
          yanlis: "“x = 1'deki teğet” için yalnızca (1, 3) noktasındaki doğruyu yazmak.",
          dogru: "x = 1'e karşılık gelen bütün y'leri bul; her nokta için ayrı teğet yaz."
        }
      ]
    },
    {
      baslik: "Yatay ve dikey teğet",
      kisa: "Eğim kesirdir: pay sıfırsa teğet yatay, payda sıfırsa dikey.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "➖",
              terim: "Horizontal tangent",
              tr: "yatay teğet",
              tanim: "Eğimi 0 olan teğet: kesirde ==pay = 0==, payda ≠ 0.",
              ornek: "dy/dx = −x/y kesirinde x = 0 ve y ≠ 0."
            },
            {
              ikon: "↕️",
              terim: "Vertical tangent",
              tr: "dikey teğet",
              tanim: "Eğimi tanımsız olan teğet: kesirde ==payda = 0==, pay ≠ 0.",
              ornek: "dy/dx = −x/y kesirinde y = 0 ve x ≠ 0."
            },
            {
              ikon: "🚫",
              terim: "Undefined slope",
              tr: "tanımsız eğim",
              tanim: "Bir sayıyı sıfıra bölmek: eğim yok demektir, dikey teğetin işareti.",
              ornek: "−3/0."
            },
            {
              ikon: "❓",
              terim: "Indeterminate 0/0",
              tr: "belirsiz 0/0",
              tanim: "Pay ve payda aynı anda 0: tek başına ne yatay ne dikey der, eğri ayrıca incelenir.",
              ornek: "y² = x³ eğrisinin (0, 0) sivri ucu."
            }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "➖", baslik: "*Horizontal tangent*", maddeler: ["Eğim = 0", "Pay = 0, payda ≠ 0"] },
          sag: { ikon: "↕️", baslik: "*Vertical tangent*", maddeler: ["Eğim tanımsız", "Payda = 0, pay ≠ 0"] },
          oyun: [
            {
              metin: "dy/dx = −x/(y − 3) eğrisinde x = 0 noktaları (y ≠ 3).",
              cevap: "sol",
              neden: "Pay sıfır, payda sıfır değil: yatay."
            },
            {
              metin: "dy/dx = −4x/(9y) eğrisinde y = 0 noktaları (x ≠ 0).",
              cevap: "sag",
              neden: "Payda sıfır, pay sıfır değil: eğim tanımsız, dikey."
            },
            { metin: "Teğet doğrusunun denklemi x = 3.", cevap: "sag", neden: "x = sabit doğrusu dikeydir." },
            {
              metin: "Teğet doğrusunun denklemi y = −2.",
              cevap: "sol",
              neden: "y = sabit doğrusu yataydır, eğimi 0."
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Koşul cevap değildir",
          metin: "x = 0 ya da y = −2x bir koşuldur, nokta değildir. Kesrin diğer yarısının sıfır olmadığını da kontrol etmelisin.",
          yanlis: "“Yatay teğet x = 0'da.” (koşulu cevap sanmak, payda kontrolü yok)",
          dogru: "Koşulu orijinal denkleme koy, noktaları bul; yatayda paydanın, dikeyde payın sıfır olmadığını doğrula."
        }
      ]
    },
    {
      baslik: "Elips pisti: dört özel nokta",
      kisa: "Elipste yatay teğetler y = ±2, dikey teğetler x = ±3.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🏎️",
          baslik: "Elips biçimli yarış pisti",
          metin: "Araba bir noktada tam doğuya gidiyor: yönü yatay. Başka bir noktada tam kuzeye: yönü dikey. Bu noktaları formülle bulabilir misin? Pist 4x² + 9y² = 36 elipsi olsun."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🥚",
              terim: "Ellipse",
              tr: "elips",
              tanim: "Basılmış çembere benzeyen kapalı eğri; iki yarı ekseni farklıdır.",
              ornek: "4x² + 9y² = 36: yarı eksenler 3 ve 2."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Pistte yatay ve dikey teğetler",
          durum: "4x² + 9y² = 36 elipsinde yatay ve dikey teğetlerin olduğu noktaları bul.",
          adimlar: ["Kapalı türev: 8x + 18y·dy/dx = 0 → dy/dx = −4x/(9y).", "Yatay: pay sıfır → x = 0. Denkleme koy: 9y² = 36 → y = ±2.", "Dikey: payda sıfır → y = 0. Denkleme koy: 4x² = 36 → x = ±3.", "Kontrol: yatayda payda 9y = ±18 ≠ 0; dikeyde pay −4x = ∓12 ≠ 0."],
          sonuc: "Yatay teğetler y = 2 ve y = −2 ((0, ±2) noktaları); dikey teğetler x = 3 ve x = −3 ((±3, 0) noktaları)."
        },
        {
          tip: "grafik",
          baslik: "4x² + 9y² = 36 pisti ve dört özel nokta",
          xlabel: "x",
          ylabel: "y",
          xmax: 8,
          ymax: 6,
          xticks: [
            { v: 0, label: "−4" },
            { v: 2, label: "−2" },
            { v: 4, label: "0" },
            { v: 6, label: "2" },
            { v: 8, label: "4" }
          ],
          yticks: [
            { v: 0, label: "−3" },
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 3, label: "0" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 0, kesik: true, from: [0, 3], to: [8, 3] },
            { id: "ay", tip: "cizgi", renk: 0, kesik: true, from: [4, 0], to: [4, 6] },
            {
              id: "e",
              tip: "egri",
              renk: 0,
              noktalar: [[7, 3], [6.974, 3.261], [6.898, 3.518], [6.772, 3.765], [6.598, 4], [6.38, 4.218], [6.121, 4.414], [5.826, 4.587], [5.5, 4.732], [5.148, 4.848], [4.776, 4.932], [4.392, 4.983], [4, 5], [3.608, 4.983], [3.224, 4.932], [2.852, 4.848], [2.5, 4.732], [2.174, 4.587], [1.879, 4.414], [1.62, 4.218], [1.402, 4], [1.228, 3.765], [1.102, 3.518], [1.026, 3.261], [1, 3], [1.026, 2.739], [1.102, 2.482], [1.228, 2.235], [1.402, 2], [1.62, 1.782], [1.879, 1.586], [2.174, 1.413], [2.5, 1.268], [2.852, 1.152], [3.224, 1.068], [3.608, 1.017], [4, 1], [4.392, 1.017], [4.776, 1.068], [5.148, 1.152], [5.5, 1.268], [5.826, 1.413], [6.121, 1.586], [6.38, 1.782], [6.598, 2], [6.772, 2.235], [6.898, 2.482], [6.974, 2.739], [7, 3]]
            },
            { id: "h1", tip: "cizgi", renk: 1, from: [1, 5], to: [7, 5], etiket: "y = 2", gizli: true },
            { id: "h2", tip: "cizgi", renk: 1, from: [1, 1], to: [7, 1], etiket: "y = −2", gizli: true },
            { id: "hp1", tip: "nokta", renk: 1, x: 4, y: 5, gizli: true },
            { id: "hp2", tip: "nokta", renk: 1, x: 4, y: 1, gizli: true },
            { id: "v1", tip: "cizgi", renk: 2, from: [7, 1], to: [7, 5], etiket: "x = 3", gizli: true },
            { id: "v2", tip: "cizgi", renk: 2, from: [1, 1], to: [1, 5], etiket: "x = −3", gizli: true },
            { id: "vp1", tip: "nokta", renk: 2, x: 7, y: 3, gizli: true },
            { id: "vp2", tip: "nokta", renk: 2, x: 1, y: 3, gizli: true }
          ],
          durumlar: [
            { metin: "4x² + 9y² = 36: yarı eksenleri 3 ve 2 olan elips." },
            {
              metin: "Yatay teğet: pay 4x = 0 → x = 0. Denkleme koy: 9y² = 36 → y = ±2.",
              goster: ["h1", "h2", "hp1", "hp2"]
            },
            {
              metin: "Dikey teğet: payda 9y = 0 → y = 0. Denkleme koy: 4x² = 36 → x = ±3.",
              goster: ["v1", "v2", "vp1", "vp2"]
            },
            {
              metin: "Dört temas noktası elipsi çevreleyen bir dikdörtgen çizer; araba burada tam yatay ya da tam dikey gider."
            }
          ]
        }
      ]
    },
    {
      baslik: "AP örneği: eğik elips",
      kisa: "Eğik elipste yatay noktalar (1, −2), (−1, 2); dikey (−2, 1), (2, −1).",
      bloklar: [
        {
          tip: "ornek",
          baslik: "x² + xy + y² = 3: yatay teğetler",
          durum: "x² + xy + y² = 3 eğrisinin yatay teğetinin olduğu bütün noktaları bul.",
          adimlar: ["Kapalı türev: 2x + y + x·dy/dx + 2y·dy/dx = 0 → dy/dx = −(2x + y)/(x + 2y).", "Yatay: pay sıfır → 2x + y = 0 → y = −2x.", "Eğriye koy: x² − 2x² + 4x² = 3 → 3x² = 3 → x = ±1.", "Noktalar: (1, −2) ve (−1, 2).", "Payda kontrolü: x + 2y = 1 − 4 = −3 ve −1 + 4 = 3; sıfır değil, ikisi de geçerli."],
          sonuc: "Yatay teğetler (1, −2) ve (−1, 2) noktalarında."
        },
        {
          tip: "ornek",
          baslik: "Aynı eğri: dikey teğetler",
          durum: "Aynı eğrinin dikey teğetlerinin olduğu noktaları bul.",
          adimlar: ["Dikey: payda sıfır → x + 2y = 0 → x = −2y.", "Eğriye koy: 4y² − 2y² + y² = 3 → 3y² = 3 → y = ±1.", "Noktalar: y = 1 için x = −2; y = −1 için x = 2 → (−2, 1) ve (2, −1).", "Pay kontrolü: 2x + y = −4 + 1 = −3 ve 4 − 1 = 3; sıfır değil."],
          sonuc: "Dikey teğetler (−2, 1) ve (2, −1) noktalarında. Dört nokta eğriyi çevreleyen kareyi çizer."
        },
        {
          tip: "grafik",
          baslik: "x² + xy + y² = 3: yatay ve dikey teğetler",
          xlabel: "x",
          ylabel: "y",
          xmax: 6,
          ymax: 6,
          xticks: [
            { v: 0, label: "−3" },
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 3, label: "0" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" }
          ],
          yticks: [
            { v: 0, label: "−3" },
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 3, label: "0" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 0, kesik: true, from: [0, 3], to: [6, 3] },
            { id: "ay", tip: "cizgi", renk: 0, kesik: true, from: [3, 0], to: [3, 6] },
            {
              id: "e",
              tip: "egri",
              renk: 0,
              noktalar: [[4, 4], [4.176, 3.813], [4.338, 3.618], [4.486, 3.416], [4.618, 3.209], [4.732, 3], [4.827, 2.791], [4.902, 2.584], [4.956, 2.382], [4.989, 2.187], [5, 2], [4.989, 1.824], [4.956, 1.662], [4.902, 1.514], [4.827, 1.382], [4.732, 1.268], [4.618, 1.173], [4.486, 1.098], [4.338, 1.044], [4.176, 1.011], [4, 1], [3.813, 1.011], [3.618, 1.044], [3.416, 1.098], [3.209, 1.173], [3, 1.268], [2.791, 1.382], [2.584, 1.514], [2.382, 1.662], [2.187, 1.824], [2, 2], [1.824, 2.187], [1.662, 2.382], [1.514, 2.584], [1.382, 2.791], [1.268, 3], [1.173, 3.209], [1.098, 3.416], [1.044, 3.618], [1.011, 3.813], [1, 4], [1.011, 4.176], [1.044, 4.338], [1.098, 4.486], [1.173, 4.618], [1.268, 4.732], [1.382, 4.827], [1.514, 4.902], [1.662, 4.956], [1.824, 4.989], [2, 5], [2.187, 4.989], [2.382, 4.956], [2.584, 4.902], [2.791, 4.827], [3, 4.732], [3.209, 4.618], [3.416, 4.486], [3.618, 4.338], [3.813, 4.176], [4, 4]]
            },
            {
              id: "hl",
              tip: "cizgi",
              renk: 3,
              kesik: true,
              from: [1.5, 6],
              to: [4.5, 0],
              etiket: "y = −2x",
              gizli: true
            },
            { id: "hp1", tip: "nokta", renk: 1, x: 4, y: 1, etiket: "(1, −2)", gizli: true },
            { id: "hp2", tip: "nokta", renk: 1, x: 2, y: 5, etiket: "(−1, 2)", gizli: true },
            { id: "ht1", tip: "cizgi", renk: 1, from: [1, 1], to: [5, 1], gizli: true },
            { id: "ht2", tip: "cizgi", renk: 1, from: [1, 5], to: [5, 5], gizli: true },
            {
              id: "vl",
              tip: "cizgi",
              renk: 3,
              kesik: true,
              from: [0, 4.5],
              to: [6, 1.5],
              etiket: "x = −2y",
              gizli: true
            },
            { id: "vp1", tip: "nokta", renk: 2, x: 1, y: 4, etiket: "(−2, 1)", gizli: true },
            { id: "vp2", tip: "nokta", renk: 2, x: 5, y: 2, etiket: "(2, −1)", gizli: true },
            { id: "vt1", tip: "cizgi", renk: 2, from: [1, 1], to: [1, 5], gizli: true },
            { id: "vt2", tip: "cizgi", renk: 2, from: [5, 1], to: [5, 5], gizli: true }
          ],
          durumlar: [
            { metin: "x² + xy + y² = 3: eğik bir elips." },
            {
              metin: "Yatay teğet için pay: 2x + y = 0, yani y = −2x. Bu doğru elipsi iki yerde keser.",
              goster: ["hl"]
            },
            {
              metin: "Eğriye koy: 3x² = 3 → x = ±1. Yatay teğetler (1, −2) ve (−1, 2) noktalarında.",
              goster: ["hp1", "hp2", "ht1", "ht2"],
              gizle: ["hl"]
            },
            { metin: "Dikey teğet için payda: x + 2y = 0, yani x = −2y.", goster: ["vl"] },
            {
              metin: "Eğriye koy: 3y² = 3 → y = ±1. Dikey teğetler (−2, 1) ve (2, −1) noktalarında.",
              goster: ["vp1", "vp2", "vt1", "vt2"],
              gizle: ["vl"]
            },
            { metin: "Dört teğet, elipsi çevreleyen bir kare çizer (x = ±2, y = ±2)." }
          ]
        }
      ]
    },
    {
      baslik: "Normal doğrusu",
      kisa: "Normal doğrusu teğete diktir; eğimi −1/m'dir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⟂",
              terim: "Normal line",
              tr: "normal doğrusu",
              tanim: "Teğete değme noktasında dik olan doğru; eğimi ==−1/m==. Teğet yataysa normal dikeydir.",
              ornek: "Teğet eğimi −1 ise normal eğimi +1."
            },
            {
              ikon: "📐",
              terim: "Perpendicular",
              tr: "dik",
              tanim: "İki doğru, eğimlerinin çarpımı −1 ise birbirine diktir.",
              ornek: "2 ve −1/2: 2·(−1/2) = −1."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "(1, 1) noktasında normal doğrusu",
          durum: "x² + xy + y² = 3 eğrisinin (1, 1) noktasındaki normal doğrusunu yaz.",
          adimlar: ["Nokta eğride mi? 1 + 1 + 1 = 3 ✓.", "Teğet eğimi: −(2·1 + 1)/(1 + 2·1) = −3/3 = −1.", "Normal eğimi: −1/(−1) = 1.", "Normal doğrusu: y − 1 = 1·(x − 1) → y = x."],
          sonuc: "Normal doğrusu y = x; eğrinin merkezi (0, 0)'dan geçer."
        },
        {
          tip: "grafik",
          baslik: "(1, 1) noktasında teğet ve normal",
          xlabel: "x",
          ylabel: "y",
          xmax: 6,
          ymax: 6,
          xticks: [
            { v: 0, label: "−3" },
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 3, label: "0" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" }
          ],
          yticks: [
            { v: 0, label: "−3" },
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 3, label: "0" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 0, kesik: true, from: [0, 3], to: [6, 3] },
            { id: "ay", tip: "cizgi", renk: 0, kesik: true, from: [3, 0], to: [3, 6] },
            {
              id: "e",
              tip: "egri",
              renk: 0,
              noktalar: [[4, 4], [4.176, 3.813], [4.338, 3.618], [4.486, 3.416], [4.618, 3.209], [4.732, 3], [4.827, 2.791], [4.902, 2.584], [4.956, 2.382], [4.989, 2.187], [5, 2], [4.989, 1.824], [4.956, 1.662], [4.902, 1.514], [4.827, 1.382], [4.732, 1.268], [4.618, 1.173], [4.486, 1.098], [4.338, 1.044], [4.176, 1.011], [4, 1], [3.813, 1.011], [3.618, 1.044], [3.416, 1.098], [3.209, 1.173], [3, 1.268], [2.791, 1.382], [2.584, 1.514], [2.382, 1.662], [2.187, 1.824], [2, 2], [1.824, 2.187], [1.662, 2.382], [1.514, 2.584], [1.382, 2.791], [1.268, 3], [1.173, 3.209], [1.098, 3.416], [1.044, 3.618], [1.011, 3.813], [1, 4], [1.011, 4.176], [1.044, 4.338], [1.098, 4.486], [1.173, 4.618], [1.268, 4.732], [1.382, 4.827], [1.514, 4.902], [1.662, 4.956], [1.824, 4.989], [2, 5], [2.187, 4.989], [2.382, 4.956], [2.584, 4.902], [2.791, 4.827], [3, 4.732], [3.209, 4.618], [3.416, 4.486], [3.618, 4.338], [3.813, 4.176], [4, 4]]
            },
            { id: "p", tip: "nokta", renk: 1, x: 4, y: 4, etiket: "(1, 1)" },
            { id: "tg", tip: "cizgi", renk: 1, from: [2, 6], to: [6, 2], etiket: "teğet m = −1", gizli: true },
            { id: "nm", tip: "cizgi", renk: 2, from: [0, 0], to: [6, 6], etiket: "normal m = 1", gizli: true },
            { id: "o", tip: "nokta", renk: 3, x: 3, y: 3, etiket: "(0, 0)", gizli: true }
          ],
          durumlar: [
            { metin: "(1, 1) noktası eğride: 1 + 1 + 1 = 3 ✓." },
            { metin: "Teğet eğimi −(2 + 1)/(1 + 2) = −1.", goster: ["tg"] },
            { metin: "Normal doğrusu teğete dik: eğim +1, y = x.", goster: ["nm"] },
            { metin: "Normal doğrusu elipsin merkezinden, (0, 0)'dan geçiyor.", goster: ["o"] }
          ]
        }
      ]
    },
    {
      baslik: "Aynı y değerinde birden çok nokta",
      kisa: "Bir değere birden çok nokta düşebilir; 0/0 çıkarsa eğri ayrıca incelenir.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "y = 1 olan noktalardaki teğetler",
          durum: "x² + xy + y² = 3 eğrisinde y = 1 olan noktalardaki teğetleri incele.",
          adimlar: ["y = 1'i koy: x² + x + 1 = 3 → x² + x − 2 = 0 → x = 1 veya x = −2.", "x = 1: eğim −(2 + 1)/(1 + 2) = −1.", "x = −2: pay 2(−2) + 1 = −3, payda −2 + 2 = 0 → −3/0, dikey teğet, eğim tanımsız.", "Pay ve payda birlikte 0 olsaydı 0/0 çıkardı; o zaman karar vermeden eğriyi ayrıca incelerdin."],
          sonuc: "y = 1'de iki nokta var: (1, 1) noktasında eğim −1, (−2, 1) noktasında dikey teğet."
        },
        {
          tip: "grafik",
          baslik: "y = 1 doğrusu eğriyi iki noktada keser",
          xlabel: "x",
          ylabel: "y",
          xmax: 6,
          ymax: 6,
          xticks: [
            { v: 0, label: "−3" },
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 3, label: "0" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" }
          ],
          yticks: [
            { v: 0, label: "−3" },
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 3, label: "0" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 0, kesik: true, from: [0, 3], to: [6, 3] },
            { id: "ay", tip: "cizgi", renk: 0, kesik: true, from: [3, 0], to: [3, 6] },
            {
              id: "e",
              tip: "egri",
              renk: 0,
              noktalar: [[4, 4], [4.176, 3.813], [4.338, 3.618], [4.486, 3.416], [4.618, 3.209], [4.732, 3], [4.827, 2.791], [4.902, 2.584], [4.956, 2.382], [4.989, 2.187], [5, 2], [4.989, 1.824], [4.956, 1.662], [4.902, 1.514], [4.827, 1.382], [4.732, 1.268], [4.618, 1.173], [4.486, 1.098], [4.338, 1.044], [4.176, 1.011], [4, 1], [3.813, 1.011], [3.618, 1.044], [3.416, 1.098], [3.209, 1.173], [3, 1.268], [2.791, 1.382], [2.584, 1.514], [2.382, 1.662], [2.187, 1.824], [2, 2], [1.824, 2.187], [1.662, 2.382], [1.514, 2.584], [1.382, 2.791], [1.268, 3], [1.173, 3.209], [1.098, 3.416], [1.044, 3.618], [1.011, 3.813], [1, 4], [1.011, 4.176], [1.044, 4.338], [1.098, 4.486], [1.173, 4.618], [1.268, 4.732], [1.382, 4.827], [1.514, 4.902], [1.662, 4.956], [1.824, 4.989], [2, 5], [2.187, 4.989], [2.382, 4.956], [2.584, 4.902], [2.791, 4.827], [3, 4.732], [3.209, 4.618], [3.416, 4.486], [3.618, 4.338], [3.813, 4.176], [4, 4]]
            },
            {
              id: "yl",
              tip: "cizgi",
              renk: 3,
              kesik: true,
              from: [0, 4],
              to: [6, 4],
              etiket: "y = 1",
              gizli: true
            },
            { id: "pa", tip: "nokta", renk: 1, x: 4, y: 4, etiket: "(1, 1)", gizli: true },
            { id: "pb", tip: "nokta", renk: 2, x: 1, y: 4, etiket: "(−2, 1)", gizli: true },
            { id: "ta", tip: "cizgi", renk: 1, from: [2, 6], to: [6, 2], etiket: "m = −1", gizli: true },
            { id: "tb", tip: "cizgi", renk: 2, from: [1, 2], to: [1, 5], gizli: true }
          ],
          durumlar: [
            { metin: "Soru yalnızca “y = 1” diyor. Bu doğru eğriyi nerede kesiyor?", goster: ["yl"] },
            { metin: "x² + x + 1 = 3 → x² + x − 2 = 0 → x = 1 veya x = −2. İki nokta.", goster: ["pa", "pb"] },
            { metin: "x = 1'de eğim −1.", goster: ["ta"] },
            { metin: "x = −2'de pay −3, payda 0: dikey teğet, eğim tanımsız.", goster: ["tb"] }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Tek nokta ve 0/0",
          metin: "“y = 1” gibi bir koşul birden çok noktaya karşılık gelebilir. 0/0 çıkan noktada ne yatay ne dikey diyebilirsin.",
          yanlis: "y = 1 → x = 1, bitti. 0/0 çıkınca “eğim 0” ya da “dikey”.",
          dogru: "Bütün x değerlerini bul, her birinde eğimi ayrı hesapla. 0/0 ise eğriyi ayrıca incele (ör. y² = x³'ün (0, 0) ucu)."
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: ["Teğet: nokta ve kapalı türevden eğim; y − y₀ = m(x − x₀).", "Aynı x için birden çok y olabilir; her noktanın kendi teğeti vardır.", "Yatay teğet: pay = 0, payda ≠ 0. Dikey teğet: payda = 0, pay ≠ 0.", "Bulduğun koşulu (x = 0, y = −2x …) orijinal denkleme geri koy; koşul cevap değildir.", "4x² + 9y² = 36: yatay y = ±2, dikey x = ±3.", "x² + xy + y² = 3: yatay (1, −2), (−1, 2); dikey (−2, 1), (2, −1).", "Normal doğrusunun eğimi −1/m; teğet yataysa normal dikeydir.", "0/0 çıkarsa eğriyi ayrıca incele."]
        }
      ]
    }
  ]
};
