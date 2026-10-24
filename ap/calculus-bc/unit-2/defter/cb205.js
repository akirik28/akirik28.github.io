/* Kitpath not defteri · cb205 · 2.5 Kuvvet Kuralı
   Kaynak: ap-videolar/src/episodes/cb205 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb205",
  amac: "Bu konu kuvvet kuralını anlatıyor: xⁿ'in türevi n·xⁿ⁻¹. Kökleri ve paydadaki x'leri üs yapıp türev almayı, parantez tuzağını ve kuralla teğet ve paralel teğet bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Limit tanımından desen çıkar",
      kisa: "x², x³, x⁴ türevlerinde üs öne gelir, kendisi bir azalır.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "f(x) = x³ için tanımla türev",
          durum: "Limit tanımını x³'e uygula; sonucu x² ve x⁴ ile karşılaştır.",
          adimlar: [
            "(x + h)³ = x³ + 3x²h + 3xh² + h³.",
            "Çıkar: (x + h)³ − x³ = 3x²h + 3xh² + h³.",
            "h'ye böl: 3x² + 3xh + h².",
            "h → 0: 3x²."
          ],
          sonuc: "(x³)′ = ==3x²==. Aynı yöntemle x⁴ → 4x³ ve x⁵ → 5x⁴ çıkar."
        },
        {
          tip: "tablo",
          head: [
            "f(x)",
            "f′(x)",
            "Desen"
          ],
          rows: [
            [
              "x²",
              "2x",
              "2 öne geldi, üs 1'e düştü"
            ],
            [
              "x³",
              "3x²",
              "3 öne geldi, üs 2'ye düştü"
            ],
            [
              "x⁴",
              "4x³",
              "4 öne geldi, üs 3'e düştü"
            ],
            [
              "x⁵",
              "5x⁴",
              "5 öne geldi, üs 4'e düştü"
            ]
          ],
          vurgu: 3
        }
      ]
    },
    {
      baslik: "Kuvvet kuralı",
      kisa: "xⁿ'in türevi n·xⁿ⁻¹; x'in türevi 1, sabitin türevi 0.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "d/dx xⁿ", alt: "x üzeri n" },
            "=",
            { t: "n", alt: "üs öne gelir" },
            "·",
            { t: "xⁿ⁻¹", alt: "üs bir azalır" }
          ],
          aciklama: "Kural yalnızca pozitif tam sayılar için değil: n negatif ya da kesir de olabilir."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⚡",
              terim: "Power rule",
              tr: "kuvvet kuralı",
              tanim: "d/dx xⁿ = n·xⁿ⁻¹. Üs öne çarpan olur, üs bir azalır.",
              ornek: "x⁷ → 7x⁶, x²⁰ → 20x¹⁹."
            },
            {
              ikon: "🔢",
              terim: "Exponent",
              tr: "üs",
              tanim: "xⁿ'deki n sayısı. Kuralda hem çarpan hem de yeni üssün kaynağıdır.",
              ornek: "x⁷'de n = 7."
            },
            {
              ikon: "🧱",
              terim: "Constant",
              tr: "sabit",
              tanim: "x içermeyen sayı. Türevi 0'dır, çünkü y = c yatay bir doğrudur ve eğimi 0'dır.",
              ornek: "d/dx 5 = 0; d/dx x = 1."
            }
          ]
        }
      ]
    },
    {
      baslik: "Kural neden çalışır?",
      kisa: "Açılımda yalnızca ilk h'li terim n·xⁿ⁻¹ kalır; gerisi h² ve üstü.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "(x + h)ⁿ" },
            "=",
            { t: "xⁿ", alt: "ilk terim" },
            "+",
            { t: "n·xⁿ⁻¹·h", alt: "ikinci terim" },
            "+",
            { t: "h², h³, …", alt: "geri kalan terimler" }
          ]
        },
        {
          tip: "adimlar",
          baslik: "Limitte ne olur?",
          adimlar: [
            { baslik: "Çıkar", metin: "(x + h)ⁿ − xⁿ: xⁿ gider; n·xⁿ⁻¹·h ve h²'li terimler kalır." },
            { baslik: "h'ye böl", metin: "n·xⁿ⁻¹ + (h'li terimler)." },
            { baslik: "h → 0", metin: "h'li terimler yok olur; geriye n·xⁿ⁻¹ kalır. Kural, tanımın kısa yoludur." }
          ]
        }
      ]
    },
    {
      baslik: "Önce üs olarak yaz: negatif üs ve kökler",
      kisa: "1/x³ → x⁻³, √x → x^(1/2); sonra kuralı uygula, en son geri çevir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Yeniden yaz, türev al, geri çevir",
          head: [
            "Fonksiyon",
            "Üs olarak",
            "Türev",
            "Sade yazılış"
          ],
          rows: [
            [
              "1/x³",
              "x⁻³",
              "−3x⁻⁴",
              "−3/x⁴"
            ],
            [
              "√x",
              "x^(1/2)",
              "(1/2)x^(−1/2)",
              "1/(2√x)"
            ],
            [
              "∛(x²)",
              "x^(2/3)",
              "(2/3)x^(−1/3)",
              "2/(3∛x)"
            ],
            [
              "5/x²",
              "5x⁻²",
              "−10x⁻³",
              "−10/x³"
            ]
          ],
          not: "Köklü sonuçlar x = 0'da patlar: payda sıfır olur, türev tanımsızdır (x^(2/3) sıfırda sivri uçtur)."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "➖",
              terim: "Negative exponent",
              tr: "negatif üs",
              tanim: "1/xⁿ = x⁻ⁿ. Paydadaki x'i paya taşıyınca üs negatif olur.",
              ornek: "1/x³ = x⁻³."
            },
            {
              ikon: "🌱",
              terim: "Rational exponent",
              tr: "kesirli üs",
              tanim: "Kök, kesirli üstür: ⁿ√(xᵐ) = x^(m/n).",
              ornek: "√x = x^(1/2), ∛(x²) = x^(2/3)."
            },
            {
              ikon: "✍️",
              terim: "Rewrite before differentiating",
              tr: "türevden önce yeniden yaz",
              tanim: "Kuralı uygulamadan önce kökleri ve paydaları üs yap, parantezleri aç. Sıra: yeniden yaz, türev al, sadeleştir.",
              ornek: "5/x² önce 5x⁻² olur."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "y = √x: sağa gidince teğet yataylaşır",
          xlabel: "x",
          ylabel: "y",
          xmax: 10,
          ymax: 4,
          xticks: [
            { v: 1, label: "1" },
            { v: 4, label: "4" },
            { v: 9, label: "9" }
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
              etiket: "√x",
              noktalar: [[0, 0], [0.25, 0.5], [0.5, 0.707], [1, 1], [2, 1.414], [3, 1.732], [4, 2], [5, 2.236], [6, 2.449], [7, 2.646], [8, 2.828], [9, 3], [10, 3.162]]
            },
            { id: "pt", tip: "nokta", x: 1, y: 1 },
            { id: "tg", tip: "cizgi", renk: 1, from: [0, 0.5], to: [3, 2] },
            { id: "sl", tip: "yazi", x: 0.3, y: 3.6, metin: "x = 1: eğim = 1/(2√1) = 1/2", hiza: "start" }
          ],
          durumlar: [
            { metin: "x = 1'de eğim 1/2 (x^(−1/2) / 2 = 1 / (2√x))." },
            {
              metin: "x = 4'te eğim 1/4: teğet yataylaşıyor.",
              set: {
                pt: { x: 4, y: 2 },
                tg: { from: [1, 1.25], to: [7, 2.75] },
                sl: { metin: "x = 4: eğim = 1/(2√4) = 1/4" }
              }
            },
            {
              metin: "x = 9'da eğim 1/6. x büyüdükçe eğim küçülüyor.",
              set: {
                pt: { x: 9, y: 3 },
                tg: { from: [5, 2.333], to: [10, 3.167] },
                sl: { metin: "x = 9: eğim = 1/(2√9) = 1/6" }
              }
            }
          ]
        },
        {
          tip: "tuzak",
          metin: "Negatif üsten bir çıkarınca sayı daha da küçülür.",
          yanlis: "x⁻³'ün türevi −3x⁻².",
          dogru: "Üs bir azalır: −3 − 1 = ==−4==. Türev −3x⁻⁴ = −3/x⁴. Kontrol: 1/x = x⁻¹ → −x⁻² = −1/x² (tanımla bulduğun sonuç)."
        }
      ]
    },
    {
      baslik: "Sabit ve parantez: önce düzenle",
      kisa: "Öndeki sabit bekler; (2x)³ gibi parantezli kuvveti önce aç.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "(2x)³'ün türevi",
          durum: "d/dx (2x)³ nedir?",
          adimlar: [
            "Önce aç: (2x)³ = 8x³.",
            "Sabit 8 bekler, kural x³'e uygulanır: 8 · 3x².",
            "Sonuç: 24x²."
          ],
          sonuc: "==24x²==. Kontrol: x = 1 için 24."
        },
        {
          tip: "ikili",
          sol: {
            ikon: "✅",
            baslik: "Doğru hesap",
            maddeler: [
              "Kural tek başına xⁿ'e uygulanır",
              "Sabit çarpan bekler: 5x² → 10x"
            ]
          },
          sag: {
            ikon: "❌",
            baslik: "Yanlış hesap",
            maddeler: [
              "Parantezin içindeki sabiti unutmak",
              "Sabitin türevini kendisi sanmak"
            ]
          },
          oyun: [
            { metin: "d/dx 5x² = 10x", cevap: "sol", neden: "Sabit 5 bekler, x² → 2x." },
            { metin: "d/dx (2x)³ = 3 · (2x)² = 12x²", cevap: "sag", neden: "İçteki 2 unutuldu; doğrusu 8x³ → 24x²." },
            { metin: "d/dx 7 = 0", cevap: "sol", neden: "Sabitin türevi 0." },
            { metin: "d/dx (5/x²): 5x⁻² → −10x⁻³", cevap: "sol", neden: "5 bekler, üs −2 → −3." },
            { metin: "d/dx 7 = 7", cevap: "sag", neden: "Sabitin türevi kendisi değil, 0'dır." }
          ]
        },
        {
          tip: "tuzak",
          metin: "Parantezli kuvvette dış üssü hemen kuralla düşürmek cazip gelir.",
          yanlis: "(2x)³ → 3 · (2x)² = 12x².",
          dogru: "Önce aç: (2x)³ = ==8x³==, türev 24x². Kuralı yalnızca tek başına xⁿ'e uygula; gerisini önce düzenle."
        }
      ]
    },
    {
      baslik: "Limit kılığında kuvvet kuralı",
      kisa: "Limiti f′(a) olarak tanı; f′'yi kuralla bul, a'yı yerine koy.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📍",
              terim: "Derivative at a point",
              tr: "bir noktadaki türev",
              tanim: "f′(a): türev fonksiyonunun x = a'daki değeri, yani o noktadaki eğim.",
              ornek: "f(x) = x⁵ için f′(2) = 80."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "lim (h → 0) [(2 + h)⁵ − 32] / h",
          durum: "Bu limitin değeri nedir?",
          adimlar: [
            "Kalıbı tanı: (2 + h)⁵ → f(x) = x⁵, a = 2 ve 32 = 2⁵ = f(2).",
            "Limit f′(2) demektir; f′(x) = 5x⁴.",
            "f′(2) = 5 · 16 = 80."
          ],
          sonuc: "Limit = ==80==."
        },
        {
          tip: "ornek",
          baslik: "lim (x → 4) (√x − 2) / (x − 4)",
          durum: "Bu limitin değeri nedir?",
          adimlar: [
            "Kalıp (f(x) − f(a)) / (x − a): a = 4, f(x) = √x, 2 = √4 = f(4).",
            "f′(x) = 1 / (2√x).",
            "f′(4) = 1 / (2 · 2) = 1/4."
          ],
          sonuc: "Limit = ==1/4==."
        }
      ]
    },
    {
      baslik: "Kuralla teğet doğrusu",
      kisa: "Nokta f'den, eğim f′'den gelir; limitle yarım sayfa süren iş iki satıra iner.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📍",
              terim: "Tangent line",
              tr: "teğet doğrusu",
              tanim: "(a, f(a)) noktasından geçen, eğimi f′(a) olan doğru: y − f(a) = f′(a)(x − a).",
              ornek: "√x için x = 9'da eğim 1/6."
            },
            {
              ikon: "🛤️",
              terim: "Parallel lines",
              tr: "paralel doğrular",
              tanim: "Eğimleri eşit doğrular. Paralel teğet sorusunda türevi o eğime eşitlersin.",
              ornek: "y = 32x − 1 ile eğimi 32 olan her doğru paraleldir."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "√x'in x = 9'daki teğeti",
          durum: "f(x) = √x eğrisine x = 9'da çizilen teğetin denklemi nedir?",
          adimlar: [
            "Nokta: f(9) = √9 = 3, yani (9, 3).",
            "Eğim: f′(x) = 1 / (2√x), f′(9) = 1 / (2 · 3) = 1/6.",
            "Nokta-eğim: y − 3 = (1/6)(x − 9)."
          ],
          sonuc: "Teğet: ==y − 3 = (1/6)(x − 9)==. Bölüm 2.1'deki [√(9 + h) − 3] / h limitinin değeri de 1/6 idi: aynı sayı."
        }
      ]
    },
    {
      baslik: "Paralel teğetler: türevi eğime eşitle",
      kisa: "Paralel demek eğimler eşit: türevi verilen eğime eşitle, tüm kökleri bul.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "y = x⁴ ve y = 32x − 1",
          durum: "x⁴ eğrisinin hangi noktasındaki teğet, y = 32x − 1 doğrusuna paraleldir?",
          adimlar: [
            "Paralel: eğim 32.",
            "Türev: 4x³ = 32.",
            "x³ = 8, yani x = 2.",
            "Nokta: y = 2⁴ = 16, yani (2, 16).",
            "Teğet: y − 16 = 32(x − 2), yani y = 32x − 48."
          ],
          sonuc: "Nokta ==(2, 16)==. Verilen doğru x = 2'de 63'tür; teğetle çakışmaz, yalnızca paraleldir."
        },
        {
          tip: "grafik",
          baslik: "y = x⁴ ve eğimi 32 olan doğrular",
          xlabel: "x",
          ylabel: "y",
          xmax: 3,
          ymax: 30,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" }
          ],
          yticks: [
            { v: 16, label: "16" },
            { v: 30, label: "30" }
          ],
          ogeler: [
            {
              id: "f",
              tip: "egri",
              renk: 0,
              etiket: "x⁴",
              noktalar: [[0, 0], [0.2, 0.002], [0.4, 0.026], [0.6, 0.13], [0.8, 0.41], [1, 1], [1.2, 2.074], [1.4, 3.842], [1.6, 6.554], [1.8, 10.498], [2, 16], [2.2, 23.426]]
            },
            {
              id: "d",
              tip: "cizgi",
              renk: 3,
              kesik: true,
              from: [0.1, 2.2],
              to: [0.9, 27.8],
              etiket: "32x − 1"
            },
            {
              id: "pt",
              tip: "nokta",
              x: 2,
              y: 16,
              etiket: "(2, 16)",
              gizli: true
            },
            {
              id: "tg",
              tip: "cizgi",
              renk: 1,
              from: [1.5, 0],
              to: [2.4, 28.8],
              gizli: true
            },
            {
              id: "sl",
              tip: "yazi",
              x: 2.95,
              y: 4,
              metin: "iki doğru paralel: eğim 32",
              hiza: "end",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "y = x⁴ eğrisi ve eğimi 32 olan y = 32x − 1 doğrusu (kesikli)." },
            {
              metin: "4x³ = 32 ⇒ x = 2. Teğet (2, 16) noktasından geçer: y = 32x − 48.",
              goster: [
                "pt",
                "tg"
              ]
            },
            {
              metin: "İki doğrunun eğimi aynı: ==paralel==. Ama çakışmıyorlar (verilen doğru x = 2'de 63).",
              goster: [
                "sl"
              ]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "y = x³ ve y = x²",
          durum: "İki eğrinin teğetleri hangi x değerlerinde birbirine paraleldir?",
          adimlar: [
            "Eğimler: (x³)′ = 3x², (x²)′ = 2x.",
            "Eşitle: 3x² = 2x, yani 3x² − 2x = 0.",
            "Çarpanlara ayır: x(3x − 2) = 0.",
            "x = 0 ya da x = 2/3.",
            "Eğimler: x = 0'da ikisi de 0; x = 2/3'te ikisi de 4/3."
          ],
          sonuc: "x = ==0== ve x = ==2/3==."
        },
        {
          tip: "tuzak",
          metin: "3x² = 2x denklemini x'e bölerek çözmek kökün birini yok eder.",
          yanlis: "3x² = 2x ⇒ 3x = 2 ⇒ x = 2/3 (tek cevap).",
          dogru: "x'e bölme; her şeyi bir tarafa al, çarpanlara ayır. ==x = 0== kökü de vardır. Eğim verilen sorularda bütün kökleri bul (x² = 4 ⇒ x = ±2)."
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
            "*Power rule*: d/dx xⁿ = n·xⁿ⁻¹; üs öne, üs bir eksik. n negatif ya da kesir olabilir.",
            "x'in türevi 1, sabitin türevi 0; öndeki sabit bekler.",
            "Sıra: önce yeniden yaz (kökler ve paydalar üs olsun, parantezler açılsın), sonra türev al, en son sadeleştir.",
            "√x = x^(1/2) → 1/(2√x); 1/x³ = x⁻³ → −3/x⁴; ∛(x²) → 2/(3∛x).",
            "Negatif üsten bir çıkarınca −3 → −4 olur, −2 değil.",
            "(2x)³ = 8x³ → 24x²; 3 · (2x)² = 12x² yanlıştır.",
            "Limit kılığında f ve a'yı tanı: [(2 + h)⁵ − 32] / h → f′(2) = 80.",
            "Teğet: nokta f'den, eğim f′'den. Paralel teğet: türevi eğime eşitle, tüm kökleri bul."
          ]
        }
      ]
    }
  ]
};
