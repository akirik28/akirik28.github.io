/* Kitpath not defteri · pc304 · 3.4 Polinomların Kökleri ve Grafikleri
   Kaynak: ders sunumunda (Unit#3_1 Polynomials) polinom grafiği bölümü yok; yalnızca "zeros of the polynomial" ve bilinen sıfırdan çözüm kümesi örneği var. Kalan içerik ek bilgi. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc304",
  amac: "Bu konu polinomun denklemi ile grafiği arasındaki bağı kuruyor: kökler, katlılık, uç davranışı, dönüm noktaları ve işaret. Ders notunda ayrı bölümü yok; yalnızca sıfırlar (*zeros*) ve bilinen sıfırdan çözüm kümesi geçer, geri kalanı ek bilgidir.",
  bolumler: [
    {
      baslik: "Grafiğin kimlik bilgileri (ek bilgi)",
      kisa: "Derece, kökler, katlılık ve P(0) grafiğin şeklini belirler.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔑",
              terim: "Zero / root",
              tr: "sıfır / kök (derste *zeros of the polynomial*)",
              tanim: "P(a) = 0 yapan a değeri; grafiğin x eksenine geldiği yer.",
              ornek: "(x − 1)(x + 2)'nin sıfırları 1 ve −2."
            },
            {
              ikon: "🔁",
              terim: "Multiplicity",
              tr: "katlılık",
              tanim: "Bir çarpanın kaç kez tekrarlandığı.",
              ornek: "(x − 3)²(x + 1)'de 3 iki katlı, −1 tek katlıdır."
            },
            {
              ikon: "↗️",
              terim: "End behavior",
              tr: "uç davranışı",
              tanim: "x çok büyük ya da çok küçük olurken grafiğin yukarı mı aşağı mı gittiği.",
              ornek: "x³'ün sol ucu aşağı, sağ ucu yukarıdır."
            },
            {
              ikon: "⛰️",
              terim: "Turning point",
              tr: "dönüm noktası",
              tanim: "Grafiğin artandan azalana ya da tersine geçtiği tepe veya çukur.",
              ornek: "x² − 1'in tek dönüm noktası (0, −1)."
            },
            {
              ikon: "📍",
              terim: "Intercept",
              tr: "kesişim",
              tanim: "x kesişimi köklerdedir; y kesişimi x = 0'da, yani (0, P(0)) noktasındadır.",
              ornek: "P(0) sabit terime eşittir."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "P(x) = (x + 3)(x − 1)(x − 2)'nin kesişimleri",
          durum: "Çarpanlı hâlde kökler hemen okunur.",
          adimlar: [
            "Her çarpanı 0'a eşitle: x = −3, x = 1, x = 2.",
            "y kesişimi: P(0) = 3·(−1)·(−2) = 6.",
            "Derece 3 (üç çarpan), başkatsayı 1 > 0: sol uç aşağı, sağ uç yukarı."
          ],
          sonuc: "x kesişimleri (−3, 0), (1, 0), (2, 0); y kesişimi (0, 6). Sınavda böyle yaz: *The x-intercepts are −3, 1 and 2, and the y-intercept is 6.*"
        }
      ]
    },
    {
      baslik: "Köklerden polinom yazmak (ek bilgi)",
      kisa: "Kökleri bilinen polinom a(x − r₁)(x − r₂)… olur; a bir noktadan bulunur.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [{ t: "P(x)", alt: "polinom" }, "=", { t: "a", alt: "başkatsayı" }, "·", { t: "(x − r₁)(x − r₂)…(x − rₙ)", alt: "her kök için bir çarpan" }],
          aciklama: "Kök r iki katlıysa çarpan (x − r)² olur. Sınavda böyle yaz: *Write a polynomial function with zeros −2, 1 and 3.*"
        },
        {
          tip: "ornek",
          baslik: "Kökleri −2, 1, 3 olan ve P(0) = 12 olan polinom",
          durum: "Önce çarpanları yaz, sonra a'yı P(0) ile bul.",
          adimlar: ["P(x) = a(x + 2)(x − 1)(x − 3).", "P(0) = a·2·(−1)·(−3) = 6a = 12 ⇒ a = 2.", "Aç: 2(x + 2)(x² − 4x + 3) = 2(x³ − 2x² − 5x + 6)."],
          sonuc: "P(x) = 2x³ − 4x² − 10x + 12."
        },
        {
          tip: "tuzak",
          metin: "Yalnızca kökler verilirse polinom tek değildir: her sabitle çarpılmış hâli de aynı köklere sahiptir. a'yı bulmak için ek bir nokta (çoğu zaman y kesişimi) gerekir.",
          yanlis: "Kökleri −2, 1, 3 olan polinom tektir: (x + 2)(x − 1)(x − 3).",
          dogru: "a(x + 2)(x − 1)(x − 3) biçimindedir; a bir noktadan hesaplanır."
        }
      ]
    },
    {
      baslik: "Katlılık ve grafiğin davranışı (ek bilgi)",
      kisa: "Tek katlı kökte eğri eksenden geçer; çift katlıda eksene değip döner.",
      bloklar: [
        {
          tip: "ikili",
          sol: {
            ikon: "✂️",
            baslik: "Eksenden geçer (tek katlı)",
            maddeler: ["Çarpanın kuvveti tek: (x − a), (x − a)³", "Değerin işareti değişir", "Üç katlıda kökte düzleşerek geçer"]
          },
          sag: {
            ikon: "🏀",
            baslik: "Eksene değip döner (çift katlı)",
            maddeler: ["Çarpanın kuvveti çift: (x − a)², (x − a)⁴", "Değerin işareti değişmez"]
          },
          oyun: [
            { metin: "(x − 3)² çarpanı: x = 3 kökünde", cevap: "sag", neden: "Kuvvet 2, çift: eğri eksene değip döner." },
            { metin: "(x + 1) çarpanı: x = −1 kökünde", cevap: "sol", neden: "Kuvvet 1, tek: eğri eksenden geçer." },
            { metin: "(x − 2)³ çarpanı: x = 2 kökünde", cevap: "sol", neden: "Kuvvet 3, tek: düzleşerek geçer." },
            { metin: "(x + 4)⁴ çarpanı: x = −4 kökünde", cevap: "sag", neden: "Kuvvet 4, çift: eksene değip döner." },
            { metin: "x² çarpanı: x = 0 kökünde", cevap: "sag", neden: "x² = (x − 0)²: çift katlı, eğri eksene değer." }
          ]
        },
        {
          tip: "grafik",
          baslik: "P(x) = (x + 2)(x − 1)²: tek katlı, çift katlı ve üç katlı kök",
          xlabel: "",
          ylabel: "",
          xmax: 6,
          ymax: 18,
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
            { v: 0, label: "−7" },
            { v: 1, label: "−6" },
            { v: 2, label: "−5" },
            { v: 3, label: "−4" },
            { v: 4, label: "−3" },
            { v: 5, label: "−2" },
            { v: 6, label: "−1" },
            { v: 7, label: "0" },
            { v: 8, label: "1" },
            { v: 9, label: "2" },
            { v: 10, label: "3" },
            { v: 11, label: "4" },
            { v: 12, label: "5" },
            { v: 13, label: "6" },
            { v: 14, label: "7" },
            { v: 15, label: "8" },
            { v: 16, label: "9" },
            { v: 17, label: "10" },
            { v: 18, label: "11" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 0, kesik: true, from: [0, 7], to: [6, 7], etiket: "x" },
            { id: "ey", tip: "cizgi", renk: 0, kesik: true, from: [3, 0], to: [3, 18], etiket: "y" },
            {
              id: "p",
              tip: "egri",
              renk: 2,
              noktalar: [
                [0.5, 0.875],
                [0.75, 4.359],
                [1, 7],
                [1.25, 8.891],
                [1.5, 10.125],
                [1.75, 10.797],
                [2, 11],
                [2.25, 10.828],
                [2.5, 10.375],
                [2.75, 9.734],
                [3, 9],
                [3.25, 8.266],
                [3.5, 7.625],
                [3.75, 7.172],
                [4, 7],
                [4.25, 7.203],
                [4.5, 7.875],
                [4.75, 9.109],
                [5, 11],
                [5.25, 13.641],
                [5.5, 17.125]
              ],
              etiket: "P(x)",
              gizli: true
            },
            { id: "k1", tip: "nokta", renk: 0, x: 1, y: 7, etiket: "−2", gizli: true },
            { id: "k2", tip: "nokta", renk: 1, x: 4, y: 7, etiket: "1", gizli: true },
            {
              id: "r",
              tip: "egri",
              renk: 3,
              noktalar: [
                [2.2, 1.168],
                [2.4, 2.904],
                [2.6, 4.256],
                [2.8, 5.272],
                [3, 6],
                [3.2, 6.488],
                [3.4, 6.784],
                [3.6, 6.936],
                [3.8, 6.992],
                [4, 7],
                [4.2, 7.008],
                [4.4, 7.064],
                [4.6, 7.216],
                [4.8, 7.512],
                [5, 8],
                [5.2, 8.728],
                [5.4, 9.744],
                [5.6, 11.096]
              ],
              etiket: "R(x)",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "P(x) = (x + 2)(x − 1)²: kökler −2 (tek katlı) ve 1 (çift katlı).", goster: ["p"] },
            { metin: "x = −2 tek katlı: eğri x eksenini keser, işaret değişir.", goster: ["k1"] },
            { metin: "x = 1 çift katlı: eğri eksene değip geri döner, işaret değişmez.", goster: ["k2"] },
            { metin: "R(x) = (x − 1)³: üç katlı kök; eğri x = 1'de düzleşerek eksenin öbür yanına geçer.", gizle: ["p", "k1"], goster: ["r"] }
          ]
        },
        {
          tip: "tuzak",
          metin: "Eğri eksene değip dönüyorsa kök yoktur sanılır. Oysa o nokta çift katlı bir köktür ve kök sayılırken iki kez sayılır. Sınavda böyle yaz: *x = 1 is a zero of multiplicity 2, so the graph touches the x-axis and turns around.*",
          yanlis: "Eğri x eksenini kesmiyorsa x = 1 kök değildir.",
          dogru: "Eğri eksene değiyorsa x = 1 çift katlı bir köktür: P(1) = 0."
        }
      ]
    },
    {
      baslik: "Uç davranışı (*end behavior*, ek bilgi)",
      kisa: "Uçları yalnızca derecenin tek ya da çift olması ve başkatsayının işareti belirler.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Derece ve başkatsayı uçları nasıl yönlendirir?",
          xlabel: "",
          ylabel: "",
          xmax: 6,
          ymax: 10,
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
            { v: 0, label: "−5" },
            { v: 1, label: "−4" },
            { v: 2, label: "−3" },
            { v: 3, label: "−2" },
            { v: 4, label: "−1" },
            { v: 5, label: "0" },
            { v: 6, label: "1" },
            { v: 7, label: "2" },
            { v: 8, label: "3" },
            { v: 9, label: "4" },
            { v: 10, label: "5" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 0, kesik: true, from: [0, 5], to: [6, 5], etiket: "x" },
            { id: "ey", tip: "cizgi", renk: 0, kesik: true, from: [3, 0], to: [3, 10], etiket: "y" },
            {
              id: "f",
              tip: "egri",
              renk: 2,
              noktalar: [
                [0.8, 0.952],
                [1.075, 3.642],
                [1.35, 5.458],
                [1.625, 6.525],
                [1.9, 6.969],
                [2.175, 6.913],
                [2.45, 6.484],
                [2.725, 5.804],
                [3, 5],
                [3.275, 4.196],
                [3.55, 3.516],
                [3.825, 3.087],
                [4.1, 3.031],
                [4.375, 3.475],
                [4.65, 4.542],
                [4.925, 6.358],
                [5.2, 9.048]
              ],
              etiket: "P(x)"
            }
          ],
          durumlar: [
            { metin: "Tek derece, başkatsayı +  (x³ − 3x): sol uç aşağı, sağ uç yukarı." },
            {
              metin: "Tek derece, başkatsayı −  (−x³ + 3x): sol uç yukarı, sağ uç aşağı.",
              set: {
                f: {
                  noktalar: [
                    [0.8, 9.048],
                    [1.075, 6.358],
                    [1.35, 4.542],
                    [1.625, 3.475],
                    [1.9, 3.031],
                    [2.175, 3.087],
                    [2.45, 3.516],
                    [2.725, 4.196],
                    [3, 5],
                    [3.275, 5.804],
                    [3.55, 6.484],
                    [3.825, 6.913],
                    [4.1, 6.969],
                    [4.375, 6.525],
                    [4.65, 5.458],
                    [4.925, 3.642],
                    [5.2, 0.952]
                  ]
                }
              }
            },
            {
              metin: "Çift derece, başkatsayı +  (x⁴ − 5x² + 4): iki uç da yukarı.",
              set: {
                f: {
                  noktalar: [
                    [0.8, 8.226],
                    [1.075, 4.204],
                    [1.35, 2.8],
                    [1.625, 3.121],
                    [1.9, 4.414],
                    [2.175, 6.06],
                    [2.45, 7.579],
                    [2.725, 8.628],
                    [3, 9],
                    [3.275, 8.628],
                    [3.55, 7.579],
                    [3.825, 6.06],
                    [4.1, 4.414],
                    [4.375, 3.121],
                    [4.65, 2.8],
                    [4.925, 4.204],
                    [5.2, 8.226]
                  ]
                }
              }
            },
            {
              metin: "Çift derece, başkatsayı −  (−x⁴ + 5x² − 4): iki uç da aşağı.",
              set: {
                f: {
                  noktalar: [
                    [0.8, 1.774],
                    [1.075, 5.796],
                    [1.35, 7.2],
                    [1.625, 6.879],
                    [1.9, 5.586],
                    [2.175, 3.94],
                    [2.45, 2.421],
                    [2.725, 1.372],
                    [3, 1],
                    [3.275, 1.372],
                    [3.55, 2.421],
                    [3.825, 3.94],
                    [4.1, 5.586],
                    [4.375, 6.879],
                    [4.65, 7.2],
                    [4.925, 5.796],
                    [5.2, 1.774]
                  ]
                }
              }
            }
          ]
        },
        {
          tip: "tablo",
          head: ["Derece", "Başkatsayı", "x → −∞", "x → ∞"],
          rows: [
            ["tek", "+", "P → −∞ (aşağı)", "P → ∞ (yukarı)"],
            ["tek", "−", "P → ∞ (yukarı)", "P → −∞ (aşağı)"],
            ["çift", "+", "P → ∞ (yukarı)", "P → ∞ (yukarı)"],
            ["çift", "−", "P → −∞ (aşağı)", "P → −∞ (aşağı)"]
          ],
          not: "Sınavda böyle yaz: *As x → ∞, P(x) → ∞.* ve *The end behavior is like that of y = x³.*"
        },
        {
          tip: "ornek",
          baslik: "P(x) = −2x⁵ + x² − 1'in uçları",
          durum: "Yalnızca en büyük kuvvetli terim uçları belirler.",
          adimlar: ["Derece 5: tek.", "Başkatsayı −2: negatif.", "Tek derece ve negatif başkatsayı: x → −∞ iken P → ∞, x → ∞ iken P → −∞."],
          sonuc: "Sol uç yukarı, sağ uç aşağı."
        }
      ]
    },
    {
      baslik: "Kaç kök, kaç dönüm noktası? (ek bilgi)",
      kisa: "Derece n ise en çok n kök ve en çok n − 1 dönüm noktası vardır.",
      bloklar: [
        {
          tip: "liste",
          maddeler: [
            { ikon: "🔢", baslik: "En çok n gerçek kök", metin: "Derece n ise katlılıklarla birlikte n kök vardır; bazıları gerçek olmayabilir." },
            { ikon: "↕️", baslik: "En çok n − 1 dönüm noktası", metin: "Dördüncü derecede en çok 3 tepe ya da çukur olur." },
            { ikon: "📉", baslik: "Tek derece: en az bir gerçek kök", metin: "Uçlar zıt yöne gider; sürekli grafik x eksenini mutlaka keser." },
            { ikon: "🪞", baslik: "Eşlenik kökler (ek bilgi)", metin: "Katsayılar tam sayıysa 1 + √2 kökse 1 − √2 de köktür." }
          ]
        },
        {
          tip: "ornek",
          baslik: "Kökleri 2 ve 1 + √2 olan, katsayıları tam sayı en düşük dereceli polinom",
          durum: "Eşleniği de kök olmak zorunda: 1 − √2.",
          adimlar: [
            "Kökler 2, 1 + √2 ve 1 − √2: P(x) = (x − 2)(x − 1 − √2)(x − 1 + √2).",
            "Son iki çarpan: (x − 1)² − 2 = x² − 2x − 1.",
            "(x − 2)(x² − 2x − 1) = x³ − 2x² − x − 2x² + 4x + 2."
          ],
          sonuc: "P(x) = x³ − 4x² + 3x + 2. Sınavda böyle yaz: *Since the coefficients are integers, the conjugate 1 − √2 is also a zero.*"
        },
        {
          tip: "tuzak",
          metin: "Dönüm noktası sınırı n − 1'dir, n değil. Beşinci derece bir polinomun en çok 4 tepe ya da çukuru olur.",
          yanlis: "Derecesi 5 olan polinomun 5 dönüm noktası vardır.",
          dogru: "En çok 4 (n − 1) dönüm noktası vardır."
        }
      ]
    },
    {
      baslik: "Grafik çizme adımları (ek bilgi)",
      kisa: "Uçlar, kökler, katlılık, y kesişimi; sonra eğriyi birleştir.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Eskiz (*sketch*) için sıra",
          adimlar: [
            { baslik: "Uçlar", metin: "Derecenin tek ya da çift olmasına ve başkatsayının işaretine bak." },
            { baslik: "Kökler ve katlılık", metin: "Çarpanlara ayır; tek katlıda eksenden geç, çift katlıda eksene değ." },
            { baslik: "y kesişimi", metin: "P(0) değerini hesapla." },
            { baslik: "Birleştir", metin: "Noktaları pürüzsüz bir eğriyle bağla; dönüm noktası sayısı n − 1'i geçmesin." }
          ]
        },
        {
          tip: "grafik",
          baslik: "P(x) = (x + 1)(x − 1)²(x − 2) eskizi",
          xlabel: "",
          ylabel: "",
          xmax: 5,
          ymax: 15,
          xticks: [{ v: 0, label: "−2" }, { v: 1, label: "−1" }, { v: 2, label: "0" }, { v: 3, label: "1" }, { v: 4, label: "2" }, { v: 5, label: "3" }],
          yticks: [
            { v: 0, label: "−4" },
            { v: 1, label: "−3" },
            { v: 2, label: "−2" },
            { v: 3, label: "−1" },
            { v: 4, label: "0" },
            { v: 5, label: "1" },
            { v: 6, label: "2" },
            { v: 7, label: "3" },
            { v: 8, label: "4" },
            { v: 9, label: "5" },
            { v: 10, label: "6" },
            { v: 11, label: "7" },
            { v: 12, label: "8" },
            { v: 13, label: "9" },
            { v: 14, label: "10" },
            { v: 15, label: "11" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 0, kesik: true, from: [0, 4], to: [5, 4], etiket: "x" },
            { id: "ey", tip: "cizgi", renk: 0, kesik: true, from: [2, 0], to: [2, 15], etiket: "y" },
            { id: "u1", tip: "ok", renk: 1, from: [0.3, 10], to: [0.3, 14], gizli: true },
            { id: "u2", tip: "ok", renk: 1, from: [4.8, 10], to: [4.8, 14], gizli: true },
            { id: "k1", tip: "nokta", renk: 0, x: 1, y: 4, etiket: "−1", gizli: true },
            { id: "k2", tip: "nokta", renk: 3, x: 3, y: 4, etiket: "1", gizli: true },
            { id: "k3", tip: "nokta", renk: 0, x: 4, y: 4, etiket: "2", gizli: true },
            { id: "y0", tip: "nokta", renk: 1, x: 2, y: 2, etiket: "(0, −2)", gizli: true },
            {
              id: "p",
              tip: "egri",
              renk: 2,
              noktalar: [
                [0.5, 14.938],
                [0.75, 8.113],
                [1, 4],
                [1.25, 1.895],
                [1.5, 1.188],
                [1.75, 1.363],
                [2, 2],
                [2.25, 2.77],
                [2.5, 3.438],
                [2.75, 3.863],
                [3, 4],
                [3.25, 3.895],
                [3.5, 3.688],
                [3.75, 3.613],
                [4, 4],
                [4.25, 5.27],
                [4.5, 7.938]
              ],
              etiket: "P(x)",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "Uçlar: derece 4 (çift), başkatsayı +1: iki uç da yukarı.", goster: ["u1", "u2"] },
            { metin: "Kökler −1, 1, 2. −1 ve 2 tek katlı (geçer); 1 çift katlı (değer).", goster: ["k1", "k2", "k3"] },
            { metin: "y kesişimi: P(0) = 1·1·(−2) = −2.", goster: ["y0"] },
            { metin: "Hepsini birleştir: soldan inip −1'den geçer, 1'de eksene değer, 2'den çıkıp yukarı gider.", goster: ["p"] }
          ]
        },
        {
          tip: "not",
          metin: "Eskiz hesap makinesi işi değildir: kesişimler, uç davranışı ve katlılık doğruysa tam puan alırsın. Sınavda böyle yaz: *Sketch the graph of P and label all intercepts.*"
        }
      ]
    },
    {
      baslik: "İşaret incelemesi: P(x) ≥ 0 nerede? (ek bilgi)",
      kisa: "Kökler sayı doğrusunu aralıklara böler; her aralıkta işaret sabittir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "P(x) = (x + 1)(x − 1)²(x − 2) için işaret tablosu",
          head: ["Aralık", "x + 1", "(x − 1)²", "x − 2", "P(x)"],
          rows: [["x < −1", "−", "+", "−", "+"], ["−1 < x < 1", "+", "+", "−", "−"], ["1 < x < 2", "+", "+", "−", "−"], ["x > 2", "+", "+", "+", "+"]],
          not: "(x − 1)² hiçbir aralıkta işaret değiştirmez: çift katlı kök."
        },
        {
          tip: "ornek",
          baslik: "P(x) ≥ 0 eşitsizliğini çöz",
          durum: "Tablodaki + aralıklarını al, sonra P = 0 olan noktaları ekle.",
          adimlar: ["P(x) > 0: x < −1 ya da x > 2.", "P(x) = 0: x = −1, x = 1, x = 2.", "Birleştir: x ≤ −1, x = 1 ve x ≥ 2."],
          sonuc: "(−∞, −1] ∪ {1} ∪ [2, ∞). Sınavda böyle yaz: *The solution set is (−∞, −1] ∪ {1} ∪ [2, ∞).*"
        },
        {
          tip: "tuzak",
          metin: "Çift katlı kök işaret değiştirmese de değeri 0 yapar. ≥ ya da ≤ eşitsizliğinde bu nokta çözüme girer; > ya da < eşitsizliğinde girmez.",
          yanlis: "P(x) ≥ 0 çözümü (−∞, −1] ∪ [2, ∞).",
          dogru: "x = 1 için P(1) = 0 olduğundan {1} de çözümdür."
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
            "Kök = sıfır = x kesişimi: P(a) = 0; çarpan x − a. y kesişimi P(0) = sabit terim.",
            "Köklerden polinom: P(x) = a(x − r₁)(x − r₂)…; a bir noktadan (çoğu zaman P(0)) bulunur.",
            "Tek katlı kökte eğri eksenden geçer; çift katlıda eksene değip döner; üç katlıda düzleşerek geçer.",
            "Uçlar: tek derece zıt yöne, çift derece aynı yöne gider; başkatsayı + ise sağ uç yukarı.",
            "Derece n: en çok n kök, en çok n − 1 dönüm noktası; tek derecede en az bir gerçek kök.",
            "Katsayılar tam sayıysa 1 + √2 ile 1 − √2 çift olarak gelir.",
            "Eskiz sırası: uçlar, kökler ve katlılık, P(0), birleştir.",
            "İşaret tablosunda çift katlı kök işareti değiştirmez ama ≥ eşitsizliğinde çözüme girer."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "Which statement about the graph of P(x) = −2(x + 1)²(x − 3) is true?",
      opts: [
        "It touches the x-axis and turns around at x = −1; the right end goes down",
        "It crosses the x-axis at x = −1; the right end goes down",
        "It touches the x-axis and turns around at x = −1; the right end goes up",
        "It touches the x-axis and turns around at x = 3; the left end goes down"
      ],
      a: 0,
      why: "(x + 1)² çift katlı: eğri x = −1'de eksene değer. Derece 3 (tek) ve başkatsayı −2 < 0: sol uç yukarı, sağ uç aşağı. C sağ ucu yanlış okur; B katlılığı yanlış yorumlar."
    },
    {
      q: "The table shows values of a cubic polynomial P(x). Which statement about its zeros and their multiplicities is true?",
      fig: {
        type: "table",
        head: ["x", "−3", "−2", "−1", "0", "1", "2", "3"],
        rows: [["P(x)", "−16", "0", "4", "2", "0", "4", "20"]],
        caption: "Values of P(x)"
      },
      opts: [
        "−2 and 1, both of multiplicity 1",
        "−2 has multiplicity 2 and 1 has multiplicity 1",
        "−2 has multiplicity 1 and 1 has multiplicity 2",
        "Only −2, with multiplicity 3"
      ],
      a: 2,
      why: "P(1) = 0 ve iki yanında değerler pozitif (P(0) = 2, P(2) = 4): işaret değişmiyor, çift katlı. P(−2) = 0 iken P(−3) < 0 < P(−1): işaret değişiyor, tek katlı. Derece 1 + 2 = 3 uyuyor; A'da toplam derece 2 olurdu."
    },
    {
      q: "What is the polynomial of least degree with zeros −1 and 2 (of multiplicity 2) and P(0) = −8?",
      opts: ["P(x) = (x + 1)(x − 2)²", "P(x) = 2(x + 1)(x − 2)²", "P(x) = −2(x + 1)(x − 2)", "P(x) = −2(x + 1)(x − 2)²"],
      a: 3,
      why: "P(x) = a(x + 1)(x − 2)²; P(0) = a·1·4 = 4a = −8 ⇒ a = −2. B, a'yı +2 alır (P(0) = 8 olur); C çift katlılığı unutur (P(0) = −2·1·(−2) = 4 olur)."
    },
    {
      q: "What is the solution set of P(x) ≥ 0 for P(x) = (x + 3)(x − 1)²(x − 4)?",
      opts: ["(−∞, −3] ∪ [4, ∞)", "(−∞, −3] ∪ {1} ∪ [4, ∞)", "[−3, 4]", "[−3, 1] ∪ [4, ∞)"],
      a: 1,
      why: "x < −3: (−)(+)(−) = +; −3 < x < 1: (+)(+)(−) = −; 1 < x < 4: − ; x > 4: +. Pozitif aralıklar ve kökler: x ≤ −3, x ≥ 4 ve çift katlı kök x = 1 (P = 0). A, x = 1 noktasını unutur."
    },
    {
      q: "The polynomial P(x) has degree 5. Which statement about its graph is always true?",
      opts: [
        "It crosses the x-axis exactly 5 times",
        "It has at least 5 turning points",
        "It crosses the x-axis at least once",
        "Both ends go in the same direction"
      ],
      a: 2,
      why: "Tek derecede uçlar zıt yöne gider ve grafik kesiksiz olduğundan x eksenini mutlaka keser. D yanlış (tek derecede uçlar zıt yöne gider), B yanlış (en çok 4 dönüm noktası), A yanlış (kökler katlı ya da gerçek olmayabilir)."
    }
  ]
};
