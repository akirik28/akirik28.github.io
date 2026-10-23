/* Kitora not defteri · cb206 · 2.6 Temel Türev Kuralları
   Kaynak: ap-videolar/src/episodes/cb206 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb206",
  amac: "Bu konu, türevi parçalara ayırarak almayı anlatıyor: sabit, sabit kat, toplam ve fark kuralları. Bu kurallarla yatay teğet, normal doğru ve parçalı fonksiyonun türevlenebilirliği sorularını çözmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Sabit ve sabit kat kuralı",
      kisa: "Sabitin türevi sıfırdır; öndeki sabit türevde aynen kalır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [{ t: "d/dx [ c·f(x) ]", alt: "c bir sabit" }, "=", { t: "c·f′(x)", alt: "sabit bekler" }],
          aciklama: "Sabitin kendisinin türevi sıfırdır: d/dx [ c ] = 0."
        },
        {
          tip: "grafik",
          baslik: "y = x² dikeyde 3 kat gerilirse eğim de 3 katı olur",
          xlabel: "x",
          ylabel: "y",
          xmax: 2.5,
          ymax: 13,
          xticks: [{ v: 0, label: "0" }, { v: 1, label: "1" }, { v: 2, label: "2" }],
          yticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }],
          ogeler: [
            {
              id: "f",
              tip: "egri",
              renk: 0,
              etiket: "y = x²",
              noktalar: [
                [0, 0], [0.25, 0.063], [0.5, 0.25], [0.75, 0.563], [1, 1], [1.25, 1.563], [1.5, 2.25], [1.75, 3.063],
                [2, 4]
              ]
            },
            { id: "p", tip: "nokta", renk: 1, x: 1, y: 1, gizli: true },
            { id: "t", tip: "cizgi", renk: 1, from: [0.5, 0], to: [1.5, 2], etiket: "eğim 2", gizli: true }
          ],
          durumlar: [
            { metin: "y = x² eğrisi. x = 1 noktasındaki eğime bakacağız." },
            { metin: "x = 1'de teğetin eğimi 2: (x²)′ = 2x.", goster: ["p", "t"] },
            {
              metin: "Eğriyi dikeyde 3 kat gerdik: y = 3x². Aynı x'te eğim de 3 katı olur: 6. Yani (3f)′ = 3·f′.",
              set: {
                f: {
                  noktalar: [
                    [0, 0], [0.25, 0.188], [0.5, 0.75], [0.75, 1.688], [1, 3], [1.25, 4.688], [1.5, 6.75], [1.75, 9.188],
                    [2, 12]
                  ],
                  etiket: "y = 3x²"
                },
                p: { y: 3 },
                t: { from: [0.5, 0], to: [1.5, 6], etiket: "eğim 6" }
              }
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "0️⃣",
              terim: "Constant rule",
              tr: "sabit kuralı",
              tanim: "Sabitin türevi sıfırdır. x içermeyen her ifade sabittir: ==π², e³, √7== hepsi sabit.",
              ornek: "d/dx [π²] = 0; y = 4 yatay bir doğrudur, eğimi 0."
            },
            {
              ikon: "✖️",
              terim: "Constant multiple rule",
              tr: "sabitle çarpma kuralı",
              tanim: "Öndeki sabit türevde aynen kalır: (c·f)′ = c·f′.",
              ornek: "(3x²)′ = 3 · 2x = 6x."
            }
          ]
        }
      ]
    },
    {
      baslik: "Toplam ve fark kuralı: terim terim",
      kisa: "Toplamın ya da farkın türevi, terimlerin türevlerinin toplamı ya da farkıdır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "➕",
              terim: "Sum rule",
              tr: "toplam kuralı",
              tanim: "Toplamın türevi, türevlerin toplamıdır: (f + g)′ = f′ + g′. Terim terim git.",
              ornek: "(x³ + 5x)′ = 3x² + 5."
            },
            {
              ikon: "➖",
              terim: "Difference rule",
              tr: "fark kuralı",
              tanim: "Farkın türevi, türevlerin farkıdır: (f − g)′ = f′ − g′.",
              ornek: "(x⁴ − 2x)′ = 4x³ − 2."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Dört terimli bir türev",
          durum: "y = 2x⁵ − 6/x + 4√x − π² ise y′ = ?",
          adimlar: [
            "Önce yeniden yaz: y = 2x⁵ − 6x⁻¹ + 4x^(1/2) − π².",
            "1. terim: (2x⁵)′ = 10x⁴.",
            "2. terim: (−6x⁻¹)′ = +6x⁻²; iki eksi artı yapar.",
            "3. terim: (4x^(1/2))′ = 2x^(−1/2).",
            "4. terim: π² bir sabit; türevi 0."
          ],
          sonuc: "y′ = 10x⁴ + 6/x² + 2/√x"
        },
        {
          tip: "ornek",
          baslik: "Bilinmeyen sabit: k kaç?",
          durum: "g(x) = 2x⁴ + k/x ve g′(1) = 5 ise k = ?",
          adimlar: [
            "k/x = k·x⁻¹; k bir sabit olduğu için türevde öne çıkıp bekler.",
            "g′(x) = 8x³ − k/x².",
            "x = 1 koy: g′(1) = 8 − k.",
            "8 − k = 5 denklemini çöz."
          ],
          sonuc: "k = 3"
        }
      ]
    },
    {
      baslik: "Önce düzenle, sonra türev al",
      kisa: "Çarpım ya da bölüm görürsen önce aç ya da terimlere böl.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧹",
              terim: "Rewrite before differentiating",
              tr: "türevden önce düzenle",
              tanim: "Çarpımı dağıt, bölümü terimlere ayır, kök ve 1/x'i kuvvet olarak yaz; sonra kuralları uygula.",
              ornek: "(x³ − 2x + 7)/x = x² − 2 + 7x⁻¹."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Aç ya da böl, sonra türevle",
          durum: "İki ifade: (x² + 3)(2x − 1) ve (x³ − 2x + 7)/x",
          adimlar: [
            "Çarpımı aç: (x² + 3)(2x − 1) = 2x³ − x² + 6x − 3.",
            "Terim terim türev: 6x² − 2x + 6.",
            "Bölümü terimlere ayır: (x³ − 2x + 7)/x = x² − 2 + 7x⁻¹.",
            "Terim terim türev: 2x + 0 − 7x⁻² = 2x − 7/x²."
          ],
          sonuc: "(x² + 3)(2x − 1) için 6x² − 2x + 6; (x³ − 2x + 7)/x için 2x − 7/x²"
        },
        {
          tip: "tuzak",
          baslik: "Türevleri çarpma tuzağı",
          metin: "Çarpımın türevi, türevlerin çarpımı değildir. Açmadan çarpmaya kalkarsan gerçek cevaptan çok uzaklaşırsın.",
          yanlis: "((x² + 3)(2x − 1))′ = (2x)(2) = 4x",
          dogru: "Önce aç, sonra türevle: 6x² − 2x + 6. (Çarpım kuralı bir sonraki konuda.)"
        }
      ]
    },
    {
      baslik: "Yatay teğet: f′(x) = 0",
      kisa: "Teğet yataysa eğim sıfırdır; f′(x) = 0 denklemini çöz.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "➡️",
              terim: "Horizontal tangent",
              tr: "yatay teğet",
              tanim: "Eğimi 0 olan teğet. Yerini bulmak için f′(x) = 0 denklemini çözersin.",
              ornek: "f(x) = x² için f′(0) = 0; (0, 0)'da teğet yataydır."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "f(x) = x³ − 6x² + 9x + 1 nerede yatay?",
          durum: "Yatay teğetin olduğu x değerlerini ve noktaları bul.",
          adimlar: [
            "Türev: f′(x) = 3x² − 12x + 9.",
            "Sıfıra eşitle, 3 parantezine al: 3(x − 1)(x − 3) = 0.",
            "Kökler: x = 1 ve x = 3.",
            "Noktalar için f'den y'yi bul: f(1) = 1 − 6 + 9 + 1 = 5; f(3) = 27 − 54 + 27 + 1 = 1."
          ],
          sonuc: "(1, 5) ve (3, 1) noktalarında teğet yatay"
        },
        {
          tip: "grafik",
          baslik: "Biri tepe, biri çukur: iki yatay teğet",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 6,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }],
          yticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 5, label: "5" }],
          ogeler: [
            {
              id: "f",
              tip: "egri",
              renk: 0,
              noktalar: [
                [0, 1], [0.25, 2.891], [0.5, 4.125], [0.75, 4.797], [1, 5], [1.25, 4.828], [1.5, 4.375], [1.75, 3.734],
                [2, 3], [2.25, 2.266], [2.5, 1.625], [2.75, 1.172], [3, 1], [3.25, 1.203], [3.5, 1.875], [3.75, 3.109],
                [4, 5]
              ]
            },
            { id: "p1", tip: "nokta", renk: 1, x: 1, y: 5, etiket: "(1, 5)", gizli: true },
            { id: "t1", tip: "cizgi", renk: 1, from: [0.4, 5], to: [1.6, 5], gizli: true },
            { id: "p3", tip: "nokta", renk: 2, x: 3, y: 1, etiket: "(3, 1)", gizli: true },
            { id: "t3", tip: "cizgi", renk: 2, from: [2.4, 1], to: [3.6, 1], gizli: true }
          ],
          durumlar: [
            { metin: "f(x) = x³ − 6x² + 9x + 1 eğrisi." },
            { metin: "x = 1'de eğri tepeye çıkıp dönüyor: teğet yatay, eğim 0.", goster: ["p1", "t1"] },
            { metin: "x = 3'te çukur: teğet yine yatay.", goster: ["p3", "t3"] },
            { metin: "f′(x) = 3(x − 1)(x − 3) tam bu iki x'te sıfır olur." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Bütün kökleri yaz",
          metin: "f(x) = x³ − 12x için 3x² − 12 = 0 olur. Kareyi kaldırınca iki kök çıkar.",
          yanlis: "x² = 4 olduğuna göre x = 2.",
          dogru: "x = 2 ve x = −2. Nokta istenirse y değerini f'den hesapla."
        }
      ]
    },
    {
      baslik: "Normal doğru",
      kisa: "Normal doğru teğete diktir; eğimi −1/m'dir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📐",
              terim: "Normal line",
              tr: "normal doğru",
              tanim: "Teğetle aynı noktadan geçen ve ona dik olan doğru. Teğet eğimi m ise normalin eğimi −1/m.",
              ornek: "m = 2 ise normalin eğimi −1/2."
            },
            {
              ikon: "⟂",
              terim: "Perpendicular slopes",
              tr: "dik doğruların eğimleri",
              tanim: "Dik iki doğrunun eğimlerinin çarpımı −1'dir: m₁ · m₂ = −1.",
              ornek: "2 · (−1/2) = −1."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "📏",
            baslik: "Teğet doğrusu",
            maddeler: ["Eğimi f′(a)", "f(x) = x² − 4x, x = 3: y + 3 = 2(x − 3)"]
          },
          sag: {
            ikon: "📐",
            baslik: "Normal doğru",
            maddeler: ["Eğimi −1/f′(a); teğet yataysa dikey (x = a)", "f(x) = x² − 4x, x = 3: y + 3 = −½(x − 3)"]
          },
          oyun: [
            {
              metin: "(3, −3)'ten geçen, eğimi 2 olan doğru.",
              cevap: "sol",
              neden: "Eğim f′(3) = 2·3 − 4 = 2: teğet."
            },
            { metin: "(3, −3)'ten geçen, eğimi −1/2 olan doğru.", cevap: "sag", neden: "−1/f′(3) = −1/2: normal." },
            { metin: "y + 3 = −½(x − 3)", cevap: "sag", neden: "Eğim −1/2: normal doğru." },
            { metin: "(2, −4) noktasında yatay olan doğru (f′(2) = 0).", cevap: "sol", neden: "Eğim 0: yatay teğet." },
            {
              metin: "(2, −4) noktasındaki x = 2 doğrusu.",
              cevap: "sag",
              neden: "Teğet yataysa normal dikeydir: x = 2."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "f(x) = x² − 4x: x = 3'te teğet ve normal",
          xlabel: "x",
          ylabel: "y",
          xmax: 6,
          ymax: 10,
          xticks: [
            { v: 0, label: "−1" },
            { v: 1, label: "0" },
            { v: 2, label: "1" },
            { v: 3, label: "2" },
            { v: 4, label: "3" },
            { v: 5, label: "4" },
            { v: 6, label: "5" }
          ],
          yticks: [
            { v: 1, label: "−4" },
            { v: 3, label: "−2" },
            { v: 5, label: "0" },
            { v: 7, label: "2" },
            { v: 9, label: "4" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 5], to: [6, 5] },
            { id: "ay", tip: "cizgi", renk: 3, kesik: true, from: [1, 0], to: [1, 10] },
            {
              id: "f",
              tip: "egri",
              renk: 0,
              noktalar: [
                [0, 10], [0.5, 7.25], [1, 5], [1.5, 3.25], [2, 2], [2.5, 1.25], [3, 1], [3.5, 1.25], [4, 2],
                [4.5, 3.25], [5, 5], [5.5, 7.25], [6, 10]
              ]
            },
            { id: "P", tip: "nokta", renk: 1, x: 4, y: 2, etiket: "(3, −3)", gizli: true },
            { id: "t", tip: "cizgi", renk: 1, from: [3, 0], to: [6, 6], etiket: "teğet", gizli: true },
            { id: "n", tip: "cizgi", renk: 2, from: [0, 4], to: [6, 1], etiket: "normal", gizli: true },
            { id: "Q", tip: "nokta", renk: 3, x: 3, y: 1, etiket: "(2, −4)", gizli: true },
            { id: "h", tip: "cizgi", renk: 1, from: [1.5, 1], to: [4.5, 1], gizli: true },
            { id: "v", tip: "cizgi", renk: 2, kesik: true, from: [3, 0], to: [3, 10], gizli: true }
          ],
          durumlar: [
            { metin: "f(x) = x² − 4x. Kesikli çizgiler gerçek eksenler; eksi değerler için koordinatları kaydırdık." },
            { metin: "x = 3'te f(3) = 9 − 12 = −3 ve f′(3) = 2·3 − 4 = 2.", goster: ["P"] },
            { metin: "Teğet: eğim 2, y + 3 = 2(x − 3).", goster: ["t"] },
            { metin: "Normal: aynı noktadan geçer, eğim −1/2: y + 3 = −½(x − 3).", goster: ["n"] },
            {
              metin: "En alt nokta (2, −4): teğet yatay, normal dikey (x = 2).",
              goster: ["Q", "h", "v"],
              gizle: ["P", "t", "n"]
            }
          ]
        }
      ]
    },
    {
      baslik: "Parçalı fonksiyon: a ve b",
      kisa: "Türevlenebilir olmak için hem süreklilik hem eşit eğim gerekir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧩",
              terim: "Piecewise function",
              tr: "parçalı fonksiyon",
              tanim: "Aralığa göre farklı formülle tanımlı fonksiyon. Birleşme noktasında iki formül ayrı ayrı kontrol edilir.",
              ornek: "x < 2 için ax² + 1, x ≥ 2 için 4x + b."
            },
            {
              ikon: "✅",
              terim: "Differentiable",
              tr: "türevlenebilir",
              tanim: "Bir noktada türevli olmak için orada sürekli olmak ve soldan-sağdan eğimlerin eşit olmak gerekir.",
              ornek: "Kopuk ya da köşeli bir noktada türev yoktur."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "f, x = 2'de türevlenebilir: a ve b kaç?",
          durum: "f(x) = ax² + 1 (x < 2) ve 4x + b (x ≥ 2).",
          adimlar: [
            "1. şart, süreklilik: a·2² + 1 = 4·2 + b, yani 4a + 1 = 8 + b.",
            "2. şart, eğim: (ax² + 1)′ = 2ax → x = 2'de 4a; (4x + b)′ = 4.",
            "Eğimleri eşitle: 4a = 4 ⇒ a = 1.",
            "Süreklilikte yerine koy: 5 = 8 + b ⇒ b = −3."
          ],
          sonuc: "a = 1, b = −3; birleşme noktası (2, 5), eğim 4"
        },
        {
          tip: "grafik",
          baslik: "Üç deneme: kopuk, köşeli, pürüzsüz",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 14,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }],
          yticks: [{ v: 2, label: "2" }, { v: 5, label: "5" }, { v: 8, label: "8" }, { v: 13, label: "13" }],
          ogeler: [
            {
              id: "L",
              tip: "egri",
              renk: 0,
              noktalar: [
                [0, 1], [0.25, 1.063], [0.5, 1.25], [0.75, 1.563], [1, 2], [1.25, 2.563], [1.5, 3.25], [1.75, 4.063],
                [2, 5]
              ]
            },
            { id: "R", tip: "cizgi", renk: 2, from: [2, 8], to: [3.5, 14], etiket: "4x + b" },
            { id: "pL", tip: "nokta", renk: 0, x: 2, y: 5, etiket: "(2, 5)" },
            { id: "pR", tip: "nokta", renk: 2, x: 2, y: 8, etiket: "(2, 8)" }
          ],
          durumlar: [
            {
              metin: "a = 1, b = 0: eğimler eşit (4a = 4) ama (2, 5) ile (2, 8) arasında boşluk var. Kopuk yerde türev yok."
            },
            {
              metin: "a = 3, b = 5: süreklilik tamam (13 = 13) ama eğimler 12 ve 4. Köşe oluşur, türev yok.",
              set: {
                L: {
                  noktalar: [
                    [0, 1], [0.25, 1.188], [0.5, 1.75], [0.75, 2.688], [1, 4], [1.25, 5.688], [1.5, 7.75], [1.75, 10.188],
                    [2, 13]
                  ]
                },
                R: { from: [2, 13], to: [2.25, 14] },
                pL: { y: 13, etiket: "(2, 13)" },
                pR: { y: 13, etiket: "" }
              }
            },
            {
              metin: "a = 1, b = −3: hem sürekli hem eğimler 4 = 4. (2, 5)'te pürüzsüz birleşir.",
              set: {
                L: {
                  noktalar: [
                    [0, 1], [0.25, 1.063], [0.5, 1.25], [0.75, 1.563], [1, 2], [1.25, 2.563], [1.5, 3.25], [1.75, 4.063],
                    [2, 5]
                  ]
                },
                R: { from: [2, 5], to: [3.5, 11], renk: 1 },
                pL: { y: 5, etiket: "(2, 5)" },
                pR: { y: 5, etiket: "" }
              }
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Tek şartla yetinme",
          metin: "Yalnız eğimleri eşitlersen grafik kopuk kalabilir; yalnız süreklilik sağlarsan köşe kalır.",
          yanlis: "Eğimleri eşitledim (a = 1), b ne olursa olsun türevlenebilir.",
          dogru: "Önce süreklilik denklemi, sonra eğim denklemi. İkisi de şart."
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
            "Sabitin türevi sıfırdır (π², e³ da sabit); öndeki sabit türevde bekler.",
            "Toplam ve farkta terim terim türev al; kök ve 1/x'i önce kuvvet olarak yaz.",
            "Çarpım ya da bölüm görürsen önce aç ya da terimlere böl; türevleri çarpmak yanlıştır.",
            "Yatay teğet: f′(x) = 0'ı çöz, bütün kökleri yaz, y'yi f'den bul.",
            "Normal doğru: teğete dik, eğimi −1/m; teğet yataysa normal dikey (x = a).",
            "Bilinmeyen sabit de bir sabittir: öne çıkar, bekler; sonra verilen şarta göre çöz.",
            "Parçalı fonksiyonda türevlenebilirlik: önce süreklilik, sonra eşit eğim. İkisi de şart."
          ]
        }
      ]
    }
  ]
};
