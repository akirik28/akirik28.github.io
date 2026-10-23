/* Kitpath not defteri · cb204 · 2.4 Türevlenebilirlik ve Süreklilik
   Kaynak: ap-videolar/src/episodes/cb204 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb204",
  amac: "Bu konu türevin nerede var olup nerede bozulduğunu anlatıyor: köşe, sivri uç, dikey teğet ve süreksizlik. Türevlenebilir ise sürekli teoremini, tersinin yanlış olduğunu ve grafikte bu noktaları ayırmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Yakınlaşınca doğru: *local linearity*",
      kisa: "Türev varsa eğri yakınlaşınca doğruya benzer; köşe köşe kalır.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🔬",
          baslik: "Mikroskopla bak",
          metin: "Eğrinin bir noktasına mikroskopla yaklaş: yaklaştıkça eğri düzleşir ve bir doğruya benzer. Mutlak değer grafiğinin sivri ucuna yaklaşırsan, ne kadar yakınlaşsan da köşe köşe kalır. İlkinde türev var, ikincisinde yok."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔭",
              terim: "Local linearity",
              tr: "yerel doğrusallık",
              tanim: "Türevlenebilir bir noktada grafik yakınlaştıkça bir doğruya benzer; bu doğru teğettir.",
              ornek: "x² − 2x + 2 grafiği (2, 2) çevresinde düz bir çizgiye benzer."
            },
            {
              ikon: "✅",
              terim: "Differentiable",
              tr: "türevlenebilir",
              tanim: "f′(a) var: h → 0 iken (f(a + h) − f(a)) / h bir sayıya gidiyor. Soldan ve sağdan aynı sayıya gitmeli.",
              ornek: "x² her noktada türevlenebilir."
            }
          ]
        }
      ]
    },
    {
      baslik: "Türev üç yerde bozulur",
      kisa: "Grafik ya kopar, ya kırılır, ya da dikleşir; türev yoktur.",
      bloklar: [
        {
          tip: "harita",
          merkez: "Türev yok",
          dallar: [
            { baslik: "Köşe", alt: "Soldan ve sağdan eğim farklı sayılar" },
            { baslik: "Sivri uç", alt: "Eğim −∞ ve +∞'a kaçar" },
            { baslik: "Dikey teğet", alt: "Eğim iki yandan aynı sonsuza gider" },
            { baslik: "Süreksizlik", alt: "Grafik kopuyor" }
          ]
        },
        {
          tip: "tablo",
          baslik: "Şüpheli noktada soldan ve sağdan eğim",
          head: [
            "Durum",
            "Soldan eğim",
            "Sağdan eğim",
            "Sürekli mi?"
          ],
          rows: [
            [
              "Köşe: |x − 2|, x = 2",
              "−1",
              "1",
              "Evet"
            ],
            [
              "Sivri uç: x^(2/3), x = 0",
              "−∞",
              "+∞",
              "Evet"
            ],
            [
              "Dikey teğet: ∛x, x = 0",
              "+∞",
              "+∞",
              "Evet"
            ],
            [
              "Sıçrama ya da delik",
              "bir yanı sonsuz ya da yok",
              "bir yanı sonsuz ya da yok",
              "Hayır"
            ]
          ],
          not: "Türev limitinin var olması için iki taraf aynı sayıya gitmeli; yukarıdaki her satırda bu bozuluyor."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "↔️",
              terim: "One-sided limit",
              tr: "tek taraflı limit",
              tanim: "x değere yalnızca soldan (a⁻) ya da yalnızca sağdan (a⁺) yaklaşırken limit.",
              ornek: "|x − 2| için soldan −1, sağdan +1: iki taraf farklı."
            }
          ]
        }
      ]
    },
    {
      baslik: "Köşe: |x − 2|",
      kisa: "Soldan eğim −1, sağdan +1; farklı olduğu için türev yok.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "f(x) = |x − 2|: x = 2'de köşe",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 3,
          xticks: [
            { v: 2, label: "2" }
          ],
          yticks: [
            { v: 2, label: "2" }
          ],
          ogeler: [
            { id: "l", tip: "cizgi", renk: 1, from: [0, 2], to: [2, 0] },
            { id: "r", tip: "cizgi", renk: 2, from: [2, 0], to: [4, 2] },
            { id: "p", tip: "nokta", x: 2, y: 0, etiket: "(2, 0)" },
            {
              id: "ls",
              tip: "yazi",
              x: 0.2,
              y: 0.5,
              metin: "soldan eğim = −1",
              hiza: "start",
              gizli: true
            },
            {
              id: "rs",
              tip: "yazi",
              x: 3.8,
              y: 0.5,
              metin: "sağdan eğim = +1",
              hiza: "end",
              gizli: true
            },
            {
              id: "dne",
              tip: "yazi",
              x: 2,
              y: 2.7,
              metin: "−1 ≠ 1 → türev yok",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "|x − 2| grafiği x = 2'de sivri bir köşe yapıyor." },
            {
              metin: "Soldan yaklaşırken fark bölümü hep −1: sol kol eğimi −1 olan bir doğru.",
              goster: [
                "ls"
              ]
            },
            {
              metin: "Sağdan yaklaşırken fark bölümü hep +1.",
              goster: [
                "rs"
              ]
            },
            {
              metin: "−1 ile 1 aynı sayı değil: limit yok, ==türev yok==. Tek bir teğet doğrusu seçilemiyor.",
              goster: [
                "dne"
              ]
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📐",
              terim: "Corner",
              tr: "köşe",
              tanim: "İki taraftan farklı, sonlu eğimlerin buluştuğu nokta. Grafik sürekli ama türevsizdir.",
              ornek: "|x − 2|, x = 2."
            }
          ]
        }
      ]
    },
    {
      baslik: "Sivri uç ve dikey teğet: eğim sonsuz",
      kisa: "Sivri uçta eğim zıt sonsuzlara gider, dikey teğette aynı sonsuza.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "y = x^(2/3): x = 0'da sivri uç",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 3,
          xticks: [
            { v: 0, label: "−2" },
            { v: 2, label: "0" },
            { v: 4, label: "2" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" }
          ],
          ogeler: [
            {
              id: "cl",
              tip: "egri",
              renk: 0,
              noktalar: [[0, 1.587], [0.5, 1.31], [1, 1], [1.4, 0.711], [1.7, 0.448], [1.9, 0.215], [1.97, 0.097], [2, 0]]
            },
            {
              id: "cr",
              tip: "egri",
              renk: 0,
              noktalar: [[2, 0], [2.03, 0.097], [2.1, 0.215], [2.3, 0.448], [2.6, 0.711], [3, 1], [3.5, 1.31], [4, 1.587]]
            },
            { id: "p", tip: "nokta", x: 2, y: 0, etiket: "x = 0" },
            {
              id: "ls",
              tip: "yazi",
              x: 0.2,
              y: 2.4,
              metin: "soldan eğim → −∞",
              hiza: "start",
              gizli: true
            },
            {
              id: "rs",
              tip: "yazi",
              x: 3.8,
              y: 2.4,
              metin: "sağdan eğim → +∞",
              hiza: "end",
              gizli: true
            },
            {
              id: "dne",
              tip: "yazi",
              x: 2,
              y: 2.85,
              metin: "uç hep sivri: türev yok",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "x^(2/3) grafiği (0, 0)'da sivri uç yapıyor." },
            {
              metin: "Fark bölümü h^(−1/3): soldan (h < 0) eğim −∞'a kaçıyor.",
              goster: [
                "ls"
              ]
            },
            {
              metin: "Sağdan (h > 0) eğim +∞'a kaçıyor.",
              goster: [
                "rs"
              ]
            },
            {
              metin: "Yakınlaşsan da uç sivri kalır; iki kol dikleşerek birleşir. ==Türev yok.==",
              goster: [
                "dne"
              ]
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "y = ∛x: x = 0'da dikey teğet",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 3,
          xticks: [
            { v: 0, label: "−2" },
            { v: 2, label: "0" },
            { v: 4, label: "2" }
          ],
          yticks: [
            { v: 0.5, label: "−1" },
            { v: 1.5, label: "0" },
            { v: 2.5, label: "1" }
          ],
          ogeler: [
            {
              id: "xa",
              tip: "cizgi",
              renk: 3,
              kesik: true,
              from: [0, 1.5],
              to: [4, 1.5]
            },
            {
              id: "f",
              tip: "egri",
              renk: 0,
              noktalar: [[0, 0.24], [1, 0.5], [1.5, 0.706], [1.8, 0.915], [1.95, 1.132], [2, 1.5], [2.05, 1.868], [2.2, 2.085], [2.5, 2.294], [3, 2.5], [4, 2.76]]
            },
            { id: "p", tip: "nokta", x: 2, y: 1.5, etiket: "x = 0" },
            {
              id: "vt",
              tip: "cizgi",
              renk: 1,
              from: [2, 0],
              to: [2, 3],
              gizli: true
            },
            {
              id: "tx",
              tip: "yazi",
              x: 3.9,
              y: 0.4,
              metin: "dikey doğru: eğim tanımsız",
              hiza: "end",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "∛x grafiği pürüzsüz, ama (0, 0)'da giderek dikleşiyor." },
            {
              metin: "Fark bölümü h^(−2/3): iki yandan da +∞. Teğet doğru dikey.",
              goster: [
                "vt"
              ]
            },
            {
              metin: "Dikey bir doğrunun eğimi ==tanımsız==, 0 değil. Türev yok.",
              goster: [
                "tx"
              ]
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⛰️",
              terim: "Cusp",
              tr: "sivri uç",
              tanim: "Eğimin bir yandan −∞'a, öbür yandan +∞'a kaçtığı sivri nokta.",
              ornek: "x^(2/3), x = 0: fark bölümü h^(−1/3)."
            },
            {
              ikon: "🧗",
              terim: "Vertical tangent",
              tr: "dikey teğet",
              tanim: "Eğri pürüzsüz ama teğet dimdik; eğim iki yandan aynı sonsuza gider.",
              ornek: "∛x, x = 0: fark bölümü h^(−2/3) → +∞."
            }
          ]
        },
        {
          tip: "tuzak",
          metin: "Dikey teğette 'eğim 0' yazmak sık yapılan hatadır.",
          yanlis: "Dikey teğette türev 0'dır.",
          dogru: "Dikey bir doğrunun eğimi ==tanımsızdır==; türev yoktur (0 değil)."
        }
      ]
    },
    {
      baslik: "Süreksizlik ve ana teorem",
      kisa: "Süreksiz noktada türev yoktur: türevlenebilir ise sürekli.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "x = 2'de sıçrama",
          xlabel: "x",
          ylabel: "y",
          xmax: 5,
          ymax: 5,
          xticks: [
            { v: 2, label: "2" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 3, label: "3" }
          ],
          ogeler: [
            { id: "a", tip: "cizgi", renk: 0, from: [0, 1], to: [2, 2] },
            { id: "b", tip: "cizgi", renk: 0, from: [2, 3], to: [4, 4] },
            { id: "fp", tip: "nokta", x: 2, y: 2, etiket: "f(2) = 2" },
            { id: "oc", tip: "yazi", x: 2, y: 2.9, metin: "○" },
            {
              id: "sl",
              tip: "yazi",
              x: 0.3,
              y: 3.6,
              metin: "soldan → 2",
              hiza: "start",
              gizli: true
            },
            {
              id: "sr",
              tip: "yazi",
              x: 4.7,
              y: 2.3,
              metin: "sağdan → 3",
              hiza: "end",
              gizli: true
            },
            {
              id: "q",
              tip: "yazi",
              x: 2.2,
              y: 4.6,
              metin: "sağdan fark bölümü ≈ 1/h → ∞",
              hiza: "start",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "x = 2'de grafik kopuyor: f(2) = 2, ama sağ taraf 3'ten başlıyor (içi boş daire)." },
            {
              metin: "Soldan limit 2, sağdan limit 3: sıçrama var, grafik süreksiz.",
              goster: [
                "sl",
                "sr"
              ]
            },
            {
              metin: "Fark bölümü sağdan (3 − 2)/h = 1/h → ∞. Tek bir teğet çizilemez: ==süreksiz noktada türev yok==.",
              goster: [
                "q"
              ]
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "f türevlenebilir", alt: "x = a'da f′(a) var" },
            "⇒",
            { t: "f sürekli", alt: "x = a'da lim f(x) = f(a)" }
          ],
          aciklama: "Bu teoremin adı *differentiability implies continuity*: türevlenebilirlik sürekliliği gerektirir."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "💥",
              terim: "Discontinuity",
              tr: "süreksizlik",
              tanim: "Grafiğin koptuğu nokta. Sıçramada fark bölümünün bir yanı sonsuza kaçar; delikte f(a) yoktur ya da yanlış yerdedir.",
              ornek: "x = 2'de sıçrama: soldan 2, sağdan 3."
            },
            {
              ikon: "✏️",
              terim: "Continuous",
              tr: "sürekli",
              tanim: "Kalemi kaldırmadan çizilebilir: lim f(x) = f(a).",
              ornek: "|x − 2| her yerde sürekli."
            }
          ]
        }
      ]
    },
    {
      baslik: "Tersi yanlış: sürekli olmak yetmez",
      kisa: "Türevlenebilir ⇒ sürekli doğru; sürekli ⇒ türevlenebilir yanlış.",
      bloklar: [
        {
          tip: "ikili",
          sol: {
            ikon: "✅",
            baslik: "Doğru ifade",
            maddeler: [
              "Türevlenebilir ise sürekli",
              "Sürekli değilse türevlenebilir değil"
            ]
          },
          sag: {
            ikon: "❌",
            baslik: "Yanlış ifade",
            maddeler: [
              "Sürekli ise türevlenebilir",
              "Karşı örnek: |x − 2|, x = 2"
            ]
          },
          oyun: [
            {
              metin: "g, x = 2'de türevlenebilirse g, x = 2'de süreklidir.",
              cevap: "sol",
              neden: "Türevlenebilirlik sürekliliği garanti eder: lim g(x) = g(2)."
            },
            {
              metin: "f, x = 4'te süreksiz; o halde f′(4) yoktur.",
              cevap: "sol",
              neden: "Teoremin karşıtı: sürekli değilse türevlenebilir değil."
            },
            {
              metin: "f, x = 1'de sürekli; o halde f′(1) vardır.",
              cevap: "sag",
              neden: "Süreklilik türevi garanti etmez: |x − 2| köşede türevsiz."
            },
            {
              metin: "Türevlenebilir bir g'nin teğeti yatay olmak zorundadır.",
              cevap: "sag",
              neden: "Teğet herhangi bir eğimde olabilir."
            },
            {
              metin: "|x − 2|, x = 2'de sürekli ama türevlenemez.",
              cevap: "sol",
              neden: "Kalemi kaldırmadan çizilir ama köşe var."
            }
          ]
        },
        {
          tip: "tuzak",
          metin: "Sınavda en sık mantık hatası, teoremin yönünü çevirmektir.",
          yanlis: "Sürekli olan her fonksiyon türevlenebilirdir.",
          dogru: "Okun yönü tek: ==türevlenebilir ⇒ sürekli==. Tersi için karşı örnek |x − 2|."
        }
      ]
    },
    {
      baslik: "Grafikten noktaları ayırmak",
      kisa: "Önce kopukluk ara; kalan noktalarda köşe, sivri uç, dikey teğet işaretle.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Noktaları ayır: delik, köşe, sivri uç, sıçrama, dikey teğet",
          xlabel: "x",
          ylabel: "y",
          xmax: 12,
          ymax: 6,
          xticks: [
            { v: 0, label: "−5" },
            { v: 2, label: "−3" },
            { v: 4, label: "−1" },
            { v: 6, label: "1" },
            { v: 8, label: "3" },
            { v: 10, label: "5" },
            { v: 12, label: "7" }
          ],
          yticks: [],
          ogeler: [
            { id: "p1", tip: "cizgi", renk: 0, from: [0, 3.5], to: [4, 1.5] },
            {
              id: "cl",
              tip: "egri",
              renk: 0,
              noktalar: [[4, 1.513], [4.5, 1.79], [5, 2.1], [5.5, 2.47], [5.8, 2.758], [5.95, 2.964], [6, 3.1]]
            },
            {
              id: "cr",
              tip: "egri",
              renk: 0,
              noktalar: [[6, 3.1], [6.05, 2.964], [6.2, 2.758], [6.5, 2.47], [7, 2.1], [7.5, 1.79], [8, 1.513]]
            },
            {
              id: "pr",
              tip: "egri",
              renk: 0,
              noktalar: [[8, 2.666], [8.5, 2.77], [9, 2.9], [9.5, 3.086], [9.9, 3.382], [10, 3.8], [10.1, 4.218], [10.5, 4.514], [11, 4.7], [11.5, 4.83], [12, 4.934]]
            },
            { id: "hole", tip: "yazi", x: 2, y: 2.4, metin: "○" },
            { id: "fj", tip: "nokta", x: 8, y: 1.513 },
            { id: "oj", tip: "yazi", x: 8, y: 2.55, metin: "○" },
            {
              id: "l1",
              tip: "yazi",
              x: 2,
              y: 3.3,
              metin: "delik",
              renk: 3,
              gizli: true
            },
            {
              id: "l2",
              tip: "yazi",
              x: 8,
              y: 0.8,
              metin: "sıçrama",
              renk: 3,
              gizli: true
            },
            {
              id: "k1",
              tip: "yazi",
              x: 4,
              y: 0.9,
              metin: "köşe",
              renk: 1,
              gizli: true
            },
            {
              id: "k2",
              tip: "yazi",
              x: 6,
              y: 3.7,
              metin: "sivri uç",
              renk: 1,
              gizli: true
            },
            {
              id: "k3",
              tip: "yazi",
              x: 10,
              y: 2.4,
              metin: "dikey teğet",
              renk: 1,
              gizli: true
            }
          ],
          durumlar: [
            { metin: "Beş özel noktası olan bir grafik: x = −3, −1, 1, 3, 5." },
            {
              metin: "Önce kopukluklar: x = −3'te delik, x = 3'te sıçrama. Bunlar ==süreksiz==, o yüzden türevlenemez.",
              goster: [
                "l1",
                "l2"
              ]
            },
            {
              metin: "Kalanlar sürekli ama türevsiz: x = −1 köşe, x = 1 sivri uç, x = 5 dikey teğet. Geri kalan her yerde eğri pürüzsüz.",
              goster: [
                "k1",
                "k2",
                "k3"
              ]
            }
          ]
        },
        {
          tip: "tablo",
          head: [
            "x",
            "Özellik",
            "Sürekli mi?",
            "Türevlenebilir mi?"
          ],
          rows: [
            [
              "−3",
              "Delik",
              "Hayır",
              "Hayır"
            ],
            [
              "−1",
              "Köşe",
              "Evet",
              "Hayır"
            ],
            [
              "1",
              "Sivri uç",
              "Evet",
              "Hayır"
            ],
            [
              "3",
              "Sıçrama",
              "Hayır",
              "Hayır"
            ],
            [
              "5",
              "Dikey teğet",
              "Evet",
              "Hayır"
            ],
            [
              "Diğer her yer",
              "Pürüzsüz",
              "Evet",
              "Evet"
            ]
          ]
        },
        {
          tip: "tuzak",
          metin: "\"Sürekli ama türevlenemez\" listesine süreksiz noktaları yazma.",
          yanlis: "Sürekli ama türevlenemez noktalar: −3, −1, 1, 3, 5.",
          dogru: "Yalnızca ==−1, 1 ve 5==. −3 (delik) ve 3 (sıçrama) süreksizdir; bu listeye girmezler."
        }
      ]
    },
    {
      baslik: "AP örneği: |x² − 9| ve x|x|",
      kisa: "Önce süreklilik, sonra soldan ve sağdan eğim; farklıysa köşe.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "f(x) = |x² − 9|: x = ±3'te köşe",
          xlabel: "x",
          ylabel: "y",
          xmax: 10,
          ymax: 10,
          xticks: [
            { v: 2, label: "−3" },
            { v: 5, label: "0" },
            { v: 8, label: "3" }
          ],
          yticks: [
            { v: 9, label: "9" }
          ],
          ogeler: [
            { id: "a", tip: "egri", renk: 0, noktalar: [[0.8, 8.64], [1, 7], [1.3, 4.69], [1.6, 2.56], [1.9, 0.61], [2, 0]] },
            {
              id: "b",
              tip: "egri",
              renk: 0,
              noktalar: [[2, 0], [2.1, 0.59], [2.5, 2.75], [3, 5], [4, 8], [5, 9], [6, 8], [7, 5], [7.5, 2.75], [7.9, 0.59], [8, 0]]
            },
            { id: "c", tip: "egri", renk: 0, noktalar: [[8, 0], [8.1, 0.61], [8.4, 2.56], [8.7, 4.69], [9, 7], [9.2, 8.64]] },
            {
              id: "pt",
              tip: "nokta",
              x: 8,
              y: 0,
              etiket: "x = 3",
              gizli: true
            },
            {
              id: "sr",
              tip: "cizgi",
              renk: 2,
              from: [8, 0],
              to: [9.2, 7.2],
              gizli: true
            },
            {
              id: "sl",
              tip: "cizgi",
              renk: 1,
              from: [8, 0],
              to: [6.8, 7.2],
              gizli: true
            },
            {
              id: "tx",
              tip: "yazi",
              x: 0.2,
              y: 9.4,
              metin: "sürekli: f(3) = 0",
              hiza: "start",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "x² − 9'un mutlak değeri: eksi kısımlar yukarı çevrilir, x = ±3'te iki köşe oluşur." },
            {
              metin: "x = 3'te f(3) = 0 ve grafik kopmuyor: ==sürekli==.",
              goster: [
                "pt",
                "tx"
              ]
            },
            {
              metin: "Sağdan (x > 3) eğim 6'ya gidiyor.",
              goster: [
                "sr"
              ],
              set: {
                tx: { metin: "sağdan eğim = 6" }
              }
            },
            {
              metin: "Soldan (x < 3) eğim −6'ya gidiyor.",
              goster: [
                "sl"
              ],
              set: {
                tx: { metin: "soldan eğim = −6" }
              }
            },
            {
              metin: "6 ≠ −6: soldan ve sağdan eğim farklı. Köşe var, ==türev yok==.",
              set: {
                tx: { metin: "6 ≠ −6 → türev yok" }
              }
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "f(x) = |x² − 9|, x = 3",
          durum: "f, x = 3'te türevlenebilir mi?",
          adimlar: [
            "Süreklilik: mutlak değer ve polinom sürekli; f(3) = |0| = 0. Sürekli.",
            "Sağdan (x > 3): x² − 9 pozitif, (x² − 9) / (x − 3) = x + 3 → 6.",
            "Soldan (x < 3): x² − 9 negatif, mutlak değer işareti çevirir: −(x² − 9) / (x − 3) = −(x + 3) → −6.",
            "6 ≠ −6: soldan ve sağdan eğim farklı."
          ],
          sonuc: "f, x = 3'te sürekli ama ==türevlenemez==: orada köşe var."
        },
        {
          tip: "ornek",
          baslik: "Karşılaştırma: g(x) = x|x|, x = 0",
          durum: "g, x = 0'da türevlenebilir mi?",
          adimlar: [
            "g(0) = 0; fark bölümü (h|h| − 0) / h = |h|.",
            "h → 0⁺: |h| → 0. h → 0⁻: |h| → 0.",
            "İki taraf da aynı sayıya gidiyor."
          ],
          sonuc: "g, x = 0'da türevlenebilir ve ==g′(0) = 0==: düzgün geçiş, köşe yok."
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
            "*Local linearity*: türevin olduğu yerde grafik yakınlaştıkça doğruya benzer.",
            "*Differentiable*: f′(a) var, yani h → 0 iken fark bölümü bir sayıya gidiyor; soldan ve sağdan aynı sayı gerekir.",
            "Türev üç yerde bozulur: köşe ya da sivri uç, dikey teğet, süreksizlik.",
            "*Corner*: iki yan eğim farklı sonlu (|x − 2|). *Cusp*: −∞ ve +∞ (x^(2/3)). *Vertical tangent*: aynı sonsuz (∛x); türev 0 değil, tanımsızdır.",
            "Türevlenebilir ise sürekli; sürekli değilse türevlenebilir değil.",
            "Sürekli ise türevlenebilir yanlıştır: |x − 2| karşı örnektir.",
            "Grafikte önce kopukluğu ara; \"sürekli ama türevlenemez\" listesine süreksiz noktaları yazma.",
            "Şüpheli noktada soldan ve sağdan eğimi ayrı hesapla; eşitse türev var."
          ]
        }
      ]
    }
  ]
};
