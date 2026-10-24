/* Kitpath not defteri · pe901 · 9.1 Elektrik Potansiyel Enerjisi
   Kaynak: defter-araclari/kaynak/ced-physc.md (Unit 9, Topic 9.1). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe901",
  amac: "Bu konu yüklü bir sistemin elektrik potansiyel enerjisini anlatıyor: iki nokta yükün U_E = kq₁q₂/r enerjisini, işaretin ne dediğini ve çok yüklü sistemde çiftleri toplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "U_E nedir?",
      kisa: "U_E, yük çiftinin birbirine göre konumundan gelen enerjidir; sonsuzda sıfır alınır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔋",
              terim: "Electric potential energy",
              tr: "elektrik potansiyel enerjisi",
              tanim: "Yüklerin birbirine göre konumundan gelen enerji: bir dış kuvvetin yükleri sonsuzdan bulundukları konuma getirmek için yaptığı iş. Birimi joule (J).",
              ornek: "Kitabı rafa çıkarırken yerçekimine karşı yaptığın iş depolanır; burada itmeye ya da çekmeye karşı yapılan iş depolanır."
            },
            {
              ikon: "♾️",
              terim: "Zero reference",
              tr: "sıfır referansı",
              tanim: "Yükler birbirinden sonsuz uzaktayken U_E = 0 alınır. Sınavda aksi yazılmadıkça bu kabul geçerlidir.",
              ornek: "Yükleri sonsuzdan getirirken yapılan iş, doğrudan sistemin U_E değeri olur."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🔋",
            baslik: "U_E (enerji)",
            maddeler: [
              "Skaler; işareti var (+ ya da −)",
              "Birimi joule (J)",
              "Uzaklıkla 1/r gibi azalır",
              "Yük çiftine aittir"
            ]
          },
          sag: {
            ikon: "🧲",
            baslik: "F_E (kuvvet)",
            maddeler: [
              "Vektör; yönü var",
              "Birimi newton (N)",
              "Uzaklıkla 1/r² gibi azalır",
              "Her yüke ayrı etki eder"
            ]
          },
          oyun: [
            {
              metin: "Uzaklık iki katına çıkınca dörtte birine iner.",
              cevap: "sag",
              neden: "Kuvvet 1/r² ile azalır; U_E ise yalnızca yarıya iner."
            },
            {
              metin: "Değeri −0,09 J olabilir.",
              cevap: "sol",
              neden: "U_E işaretli bir skalerdir; zıt yüklerde negatiftir."
            },
            {
              metin: "Sağa ya da sola diye yönü söylenir.",
              cevap: "sag",
              neden: "Yön vektöre aittir, yani kuvvete; U_E'nin yönü yoktur."
            },
            {
              metin: "İki yüklü sistemde sistemin tamamına aittir, tek yüke değil.",
              cevap: "sol",
              neden: "U_E çiftin ortak enerjisidir; hangi yüke ait diye bölünmez."
            }
          ]
        },
        {
          tip: "liste",
          baslik: "Sınavda böyle yaz",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: tanım",
              metin: "\"U_E is the work done by an external agent in bringing the charges from infinity to their positions without changing their kinetic energy.\""
            },
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: referans",
              metin: "\"Take U_E = 0 when the charges are infinitely far apart.\""
            }
          ]
        }
      ]
    },
    {
      baslik: "İki nokta yük",
      kisa: "U_E = kq₁q₂/r; yükleri işaretleriyle yaz, sonucun işareti anlam taşır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "U_E" },
            "=",
            { t: "k q₁q₂ / r", alt: "yükleri işaretiyle yaz" },
            "=",
            { t: "q₁q₂ / (4πε₀ r)", alt: "formül tablosundaki biçim" }
          ],
          aciklama: "k = 9×10⁹ N·m²/C²; r iki yük arasındaki uzaklık. Aynı işaret: U_E > 0 (itiyorlar). Zıt işaret: U_E < 0 (çekiyorlar, bağlı sistem)."
        },
        {
          tip: "grafik",
          baslik: "U_E uzaklığa göre: q₁ = 1,0 μC ve q₂ = ±2,0 μC",
          xlabel: "r (cm)",
          ylabel: "U_E (mJ)",
          xmax: 16,
          ymax: 20,
          xticks: [
            { v: 2, label: "5" },
            { v: 4, label: "10" },
            { v: 8, label: "20" },
            { v: 12, label: "30" },
            { v: 16, label: "40" }
          ],
          yticks: [
            { v: 10, label: "0" },
            { v: 14, label: "+160" },
            { v: 18, label: "+320" },
            { v: 6, label: "−160" },
            { v: 2, label: "−320" }
          ],
          ogeler: [
            { id: "sifir", tip: "cizgi", from: [0, 10], to: [16, 10], renk: 3, kesik: true },
            {
              id: "arti",
              tip: "egri",
              noktalar: [
                [2, 19], [2.4, 17.5], [2.8, 16.429], [3.2, 15.625], [4, 14.5], [4.8, 13.75],
                [6, 13], [8, 12.25], [10, 11.8], [12, 11.5], [14, 11.286], [16, 11.125]
              ],
              renk: 1,
              etiket: "q₁q₂ > 0",
              gizli: true
            },
            {
              id: "eksi",
              tip: "egri",
              noktalar: [
                [2, 1], [2.4, 2.5], [2.8, 3.571], [3.2, 4.375], [4, 5.5], [4.8, 6.25],
                [6, 7], [8, 7.75], [10, 8.2], [12, 8.5], [14, 8.714], [16, 8.875]
              ],
              renk: 2,
              etiket: "q₁q₂ < 0",
              gizli: true
            },
            { id: "pa", tip: "nokta", x: 4, y: 14.5, renk: 1, etiket: "+180", kilavuz: true, gizli: true },
            { id: "pe", tip: "nokta", x: 4, y: 5.5, renk: 2, etiket: "−180", kilavuz: true, gizli: true }
          ],
          durumlar: [
            {
              metin: "Aynı işaretli iki yük (q₁q₂ > 0): U_E pozitif. Yaklaştırdıkça itmeye karşı iş gerekir, U_E artar.",
              goster: ["arti"]
            },
            {
              metin: "Zıt işaretli iki yük (q₁q₂ < 0): U_E negatif. Çekim yardım ettiği için yaklaştıkça U_E daha da negatif olur.",
              goster: ["eksi"]
            },
            {
              metin: "r = 10 cm'de değerler +180 mJ ve −180 mJ. Büyüklük aynı, işaret farklı.",
              goster: ["pa", "pe"]
            },
            {
              metin: "Uzaklaştıkça iki eğri de 0'a yaklaşır: sonsuzda U_E = 0. Negatif U_E, yükleri ayırmak için dışarıdan iş gerektiğini söyler."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "q₁ = +2,0 μC, q₂ = −3,0 μC, r = 0,60 m",
          durum: "Sistemin U_E değerini bul; yükleri sonsuza ayırmak için gereken işi söyle.",
          adimlar: [
            "U_E = kq₁q₂/r ile başla, yükleri işaretleriyle yaz.",
            "q₁q₂ = (+2,0×10⁻⁶)(−3,0×10⁻⁶) = −6,0×10⁻¹² C².",
            "U_E = (9×10⁹)(−6,0×10⁻¹²)/0,60 = −0,054/0,60 = −0,090 J.",
            "Negatif: sistem bağlı. Yükleri sonsuza ayırmak için dışarıdan W = 0 − (−0,090) = +0,090 J iş gerekir."
          ],
          sonuc: "U_E = −0,090 J; ayırmak için W = +0,090 J"
        },
        {
          tip: "tuzak",
          baslik: "İşareti atmak",
          metin: "Zıt yüklerde |q| yazıp U_E'yi pozitif bulmak, bağlı sistemi yanlış anlatır.",
          yanlis: "|q₁q₂| koyup U_E = +0,090 J yazmak.",
          dogru: "İşaretleri koy: U_E = −0,090 J. Sınavda böyle yaz: \"U_E < 0 because q₁ and q₂ have opposite signs, so the charges attract.\""
        }
      ]
    },
    {
      baslik: "Çok yüklü sistem",
      kisa: "Toplam U_E, her yük çiftinin enerjisinin toplamıdır; n yükte n(n−1)/2 çift vardır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Üç yük, üç çift (kenar a = 0,20 m)",
          xlabel: "",
          ylabel: "",
          xmax: 16,
          ymax: 11,
          xticks: [],
          yticks: [],
          ogeler: [
            { id: "ab", tip: "cizgi", from: [5, 2], to: [11, 2], renk: 1, gizli: true },
            { id: "ac", tip: "cizgi", from: [5, 2], to: [8, 7.196], renk: 2, gizli: true },
            { id: "bc", tip: "cizgi", from: [11, 2], to: [8, 7.196], renk: 2, gizli: true },
            { id: "A", tip: "nokta", x: 5, y: 2, renk: 1 },
            { id: "B", tip: "nokta", x: 11, y: 2, renk: 1 },
            { id: "C", tip: "nokta", x: 8, y: 7.196, renk: 2 },
            { id: "tA", tip: "yazi", x: 5, y: 0.9, metin: "q₁ = +2,0 μC" },
            { id: "tB", tip: "yazi", x: 11, y: 0.9, metin: "q₂ = +2,0 μC" },
            { id: "tC", tip: "yazi", x: 8, y: 8.096, metin: "q₃ = −2,0 μC" },
            { id: "u12", tip: "yazi", x: 8, y: 2.9, metin: "U₁₂ = +0,18 J", gizli: true },
            { id: "u13", tip: "yazi", x: 6.1, y: 4.9, metin: "U₁₃ = −0,18 J", hiza: "end", gizli: true },
            { id: "u23", tip: "yazi", x: 9.9, y: 4.9, metin: "U₂₃ = −0,18 J", hiza: "start", gizli: true },
            { id: "tot", tip: "yazi", x: 13.6, y: 9.8, metin: "U_E = −0,18 J", gizli: true }
          ],
          durumlar: [
            { metin: "Eşkenar üçgenin köşelerinde üç yük: +2,0 μC, +2,0 μC ve −2,0 μC. Kenar a = 0,20 m." },
            {
              metin: "1–2 çifti: aynı işaret. U₁₂ = kq₁q₂/a = (9×10⁹)(4,0×10⁻¹²)/0,20 = +0,18 J.",
              goster: ["ab", "u12"]
            },
            {
              metin: "1–3 çifti: zıt işaret, U₁₃ = −0,18 J.",
              goster: ["ac", "u13"]
            },
            {
              metin: "2–3 çifti: zıt işaret, U₂₃ = −0,18 J.",
              goster: ["bc", "u23"]
            },
            {
              metin: "Toplam: U_E = U₁₂ + U₁₃ + U₂₃ = +0,18 − 0,18 − 0,18 = −0,18 J. Her çift bir kez sayıldı.",
              goster: ["tot"]
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Kaç çift var?",
          head: ["Yük sayısı n", "Çiftler", "Çift sayısı n(n−1)/2"],
          rows: [
            ["2", "12", "1"],
            ["3", "12, 13, 23", "3"],
            ["4", "12, 13, 14, 23, 24, 34", "6"],
            ["5", "—", "10"]
          ],
          vurgu: 2,
          not: "12 ile 21 aynı çifttir; her çifti bir kez say."
        },
        {
          tip: "tuzak",
          baslik: "Çift sayma hatası",
          metin: "Dört yüklü sistemde 6 terim toplanır; 4 ya da 12 değil.",
          yanlis: "Her yük için bir terim yazıp 4 terim toplamak (ya da her çifti iki kez sayıp 12).",
          dogru: "Her çifti bir kez say: 12, 13, 14, 23, 24, 34. Sınavda böyle yaz: \"U_E is the sum over every pair of charges.\""
        }
      ]
    },
    {
      baslik: "Yükleri sırayla getirmek",
      kisa: "Sistemi kurmak için yapılan iş toplam U_E'ye eşittir; sıranın önemi yoktur.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Aynı üçgeni sonsuzdan tek tek kur",
          durum: "+2,0 μC, +2,0 μC ve −2,0 μC yükleri (a = 0,20 m) sırayla sonsuzdan getir. Her adımda dış kuvvetin işini bul.",
          adimlar: [
            "q₁ boş uzaya gelir: başka yük yok, W₁ = 0.",
            "q₂ gelir; yalnızca q₁ ile etkileşir: W₂ = kq₁q₂/a = +0,18 J (itmeyi yenmek gerekir).",
            "q₃ gelir; q₁ ve q₂ ile etkileşir: W₃ = kq₃q₁/a + kq₃q₂/a = −0,18 − 0,18 = −0,36 J (çekim yardım eder).",
            "Toplam: W = 0 + 0,18 − 0,36 = −0,18 J. Bu, çiftlerin toplamıyla aynı.",
            "Sırayı değiştirsen de −0,18 J çıkar: U_E sistemin şimdiki hâline bağlıdır, nasıl kurulduğuna değil."
          ],
          sonuc: "Dış kuvvetin toplam işi = U_E = −0,18 J"
        },
        {
          tip: "liste",
          baslik: "Sınavda böyle yaz",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: iş",
              metin: "\"The work done by the external agent equals the total electric potential energy of the system.\""
            },
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: kontrol",
              metin: "\"Adding the charges one at a time gives the same result as summing over pairs.\""
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
            "*Electric potential energy*, bir dış kuvvetin yükleri sonsuzdan getirmek için yaptığı iştir; sonsuzda U_E = 0.",
            "İki nokta yük için U_E = kq₁q₂/r; skalerdir, birimi joule.",
            "Yükleri işaretleriyle yaz: aynı işaret U_E > 0 (itme), zıt işaret U_E < 0 (çekim, bağlı sistem).",
            "U_E uzaklıkla 1/r gibi, kuvvet 1/r² gibi azalır.",
            "Çok yüklü sistemde her çifti bir kez topla; n yükte n(n−1)/2 çift vardır.",
            "Eşkenar üçgen örneğinde (a = 0,20 m, ±2,0 μC) U_E = −0,18 J.",
            "Yükleri sırayla getirirken yapılan işlerin toplamı çift toplamına eşittir; sıra önemsizdir.",
            "Negatif U_E, yükleri sonsuza ayırmak için dışarıdan iş gerektiğini söyler."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "Two point charges, q₁ = +3.0 nC and q₂ = +6.0 nC, are 0.090 m apart. What is the electric potential energy of the system? (k = 9.0×10⁹ N·m²/C²)",
      opts: ["1.8×10⁻⁶ J", "−1.8×10⁻⁶ J", "2.0×10⁻⁵ J", "1.6×10⁻⁷ J"],
      a: 0,
      why: "U_E = kq₁q₂/r = (9,0×10⁹)(3,0×10⁻⁹)(6,0×10⁻⁹)/0,090 = 1,8×10⁻⁶ J; aynı işaret olduğundan pozitif. En çekici yanlış şık C: r yerine r² ile bölünce kuvvet formülü çıkar (2,0×10⁻⁵ N); enerji için r'ye bölünür."
    },
    {
      q: "A student measures the electric potential energy U_E of two small charged spheres at several separations r, as shown in the table. Which relationship is best supported by the data?",
      fig: {
        type: "table",
        caption: "Measured U_E of two point-like charges",
        head: ["r (cm)", "U_E (μJ)"],
        rows: [
          ["2.0", "90"],
          ["4.0", "45"],
          ["8.0", "22.5"]
        ]
      },
      opts: [
        "U_E is proportional to 1/r²",
        "U_E is proportional to r",
        "U_E is proportional to 1/r",
        "U_E does not depend on r"
      ],
      a: 2,
      why: "r iki katına çıkınca U_E yarıya iniyor (90 → 45 → 22,5): U_E ∝ 1/r. En çekici yanlış şık A: 1/r² kuvvet için geçerlidir; r iki katına çıkınca değer dörtte birine inerdi."
    },
    {
      q: "Three point charges lie on a line as shown in the table: +q at x = 0, −q at x = d, and +q at x = 2d. What is the total electric potential energy of the system?",
      fig: {
        type: "table",
        caption: "Positions of the charges",
        head: ["Charge", "Position"],
        rows: [
          ["+q", "x = 0"],
          ["−q", "x = d"],
          ["+q", "x = 2d"]
        ]
      },
      opts: ["−2kq²/d", "−3kq²/(2d)", "−5kq²/(2d)", "+kq²/(2d)"],
      a: 1,
      why: "Üç çift var: (1,2) → −kq²/d, (2,3) → −kq²/d, (1,3) → +kq²/(2d). Toplam = −2kq²/d + kq²/(2d) = −3kq²/(2d). En çekici yanlış şık A: en uzaktaki (1,3) çiftini unutmak."
    },
    {
      q: "Two positive point charges q₁ and q₂ are initially at rest a distance r apart. An external agent slowly moves them apart to a distance 2r. The work done by the external agent on the two-charge system is",
      opts: ["+kq₁q₂/(2r)", "+kq₁q₂/r", "0", "−kq₁q₂/(2r)"],
      a: 3,
      why: "Yavaş harekette W_dış = ΔU_E = kq₁q₂/(2r) − kq₁q₂/r = −kq₁q₂/(2r). İtme yükleri zaten ayırmak istiyor; dış kuvvet onları tutarak negatif iş yapar. En çekici yanlış şık A: işareti atmak."
    },
    {
      q: "The graph shows the electric potential energy U_E of two point charges as a function of 1/r. Using the line, what is the product q₁q₂? (k = 9.0×10⁹ N·m²/C²)",
      fig: {
        type: "graph",
        xlabel: "1/r (m⁻¹)",
        ylabel: "U_E (J)",
        xmax: 10,
        ymax: 10,
        lines: [
          { from: [0, 0], to: [10, 9], label: "data" }
        ],
        points: [
          { q: 10, p: 9, label: "(10, 0.18)", guides: true }
        ],
        xticks: [
          { v: 5, label: "5" },
          { v: 10, label: "10" }
        ],
        yticks: [
          { v: 5, label: "0.10" },
          { v: 9, label: "0.18" }
        ]
      },
      opts: ["2.0×10⁻¹¹ C²", "1.8×10⁻² C²", "2.0×10⁻¹² C²", "1.6×10⁸ C²"],
      a: 2,
      why: "U_E = (kq₁q₂)(1/r), eğim = kq₁q₂ = 0,18 J / 10 m⁻¹ = 0,018 J·m. q₁q₂ = 0,018/(9,0×10⁹) = 2,0×10⁻¹² C². En çekici yanlış şık B: eğimi doğrudan q₁q₂ sanmak, k'ye bölmeyi unutmak."
    }
  ]
};
