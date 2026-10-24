/* Kitpath not defteri · pc302 · 3.3 Potansiyel Enerji
   Kaynak: kaynak/ced-physc.md (Topic 3.3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc302",
  amac: "Bu konu birbirini etkileyen nesnelerin sisteminde depolanan enerjiyi anlatıyor: potansiyel enerji. Yerçekimi ve yay için formülleri, U(x) grafiğinden kuvveti ve dengeyi okumayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Potansiyel enerji bir sisteme aittir",
      kisa: "U, conservative kuvvetle etkileşen nesnelere aittir; sıfır noktasını sen seçersin.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔋",
              terim: "Potential energy",
              tr: "potansiyel enerji",
              tanim: "Conservative kuvvetle etkileşen en az iki nesnenin konumuna bağlı, depolanmış enerji. Skalerdir.",
              ornek: "Elindeki kitap tek başına U taşımaz; kitap–Dünya sistemi taşır."
            },
            {
              ikon: "📍",
              terim: "Zero of potential energy",
              tr: "U = 0 seçimi",
              tanim: "U'nun sıfır noktasını sen seçersin. Fiziksel olan değişimdir, ΔU.",
              ornek: "Zemini ya da masayı y = 0 seç: ΔU aynı çıkar."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "✅",
            baslik: "*U* tanımlanabilir",
            maddeler: ["Kuvvet conservative", "En az iki nesne: sistem"]
          },
          sag: {
            ikon: "🚫",
            baslik: "*U* tanımlanamaz",
            maddeler: ["Kuvvet nonconservative", "Tek başına bir nesne"]
          },
          oyun: [
            {
              metin: "Sıkıştırılmış yay ve ona bağlı blok.",
              cevap: "sol",
              neden: "Yay kuvveti conservative: yay–blok sistemi U_s taşır."
            },
            {
              metin: "Kayan blok ile pürüzlü masa arasındaki sürtünme.",
              cevap: "sag",
              neden: "Sürtünme nonconservative: ona ait U tanımlanmaz."
            },
            {
              metin: "Dünya–Ay sistemi.",
              cevap: "sol",
              neden: "Çekim kuvveti conservative: iki cisim bir U_G taşır."
            },
            {
              metin: "Çevresi düşünülmeyen tek bir tuğla.",
              cevap: "sag",
              neden: "U için etkileşen ikinci bir nesne gerekir."
            },
            {
              metin: "Hava direnci.",
              cevap: "sag",
              neden: "Hava direnci nonconservative: enerji ısıya gider."
            }
          ]
        },
        {
          tip: "not",
          metin: "Sınavda böyle yaz: *The potential energy belongs to the block–Earth system, not to the block alone.* Üç ya da daha çok nesnede toplam U, her nesne çiftinin U'sunun toplamıdır."
        }
      ]
    },
    {
      baslik: "Yerçekimi ve yay potansiyel enerjisi",
      kisa: "ΔU_g = mgΔy ve U_s = ½k(Δx)²; yay enerjisi hep sıfır ya da pozitif.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "İki temel formül",
          head: ["Sistem", "Formül", "Dikkat"],
          rows: [
            ["Cisim–Dünya (yüzeye yakın)", "ΔU_g = mgΔy", "Yükseklik farkı küçük olmalı; yukarı çıkınca +, inince −"],
            ["Yay", "U_s = ½k(Δx)²", "Δx doğal boydan sapma; sıkışma da uzama da U_s ≥ 0"]
          ],
          not: "Sınavda böyle yaz: *The spring is stretched or compressed by Δx from its natural length, so U_s = ½k(Δx)² is never negative.*"
        },
        {
          tip: "grafik",
          baslik: "k = 200 N/m'lik yay: U_s = ½kx² = 100x²",
          xlabel: "x (m)",
          ylabel: "U_s (J)",
          xmax: 9,
          ymax: 18,
          xticks: [
            { v: 0, label: "−0,4" },
            { v: 2, label: "−0,2" },
            { v: 4, label: "0" },
            { v: 6, label: "0,2" },
            { v: 8, label: "0,4" }
          ],
          yticks: [
            { v: 4, label: "4" },
            { v: 8, label: "8" },
            { v: 12, label: "12" },
            { v: 16, label: "16" }
          ],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 16], [0.5, 12.25], [1, 9], [1.5, 6.25], [2, 4], [2.5, 2.25], [3, 1], [3.5, 0.25], [4, 0],
                [4.5, 0.25], [5, 1], [5.5, 2.25], [6, 4], [6.5, 6.25], [7, 9], [7.5, 12.25], [8, 16]
              ],
              renk: 0,
              etiket: "U_s"
            },
            { id: "p0", tip: "nokta", x: 4, y: 0, renk: 1, etiket: "0", gizli: true },
            { id: "pL", tip: "nokta", x: 1, y: 9, renk: 2, etiket: "9 J", kilavuz: true, gizli: true },
            { id: "pR", tip: "nokta", x: 7, y: 9, renk: 2, etiket: "9 J", kilavuz: true, gizli: true },
            { id: "p2", tip: "nokta", x: 6, y: 4, renk: 3, etiket: "4 J", gizli: true },
            { id: "pM", tip: "nokta", x: 8, y: 16, renk: 3, etiket: "16 J", gizli: true }
          ],
          durumlar: [
            { metin: "Doğal boyda (x = 0) yay hiç depolamaz: U_s = 0. Eğri bir paraboldür.", goster: ["p0"] },
            { metin: "0,3 m sıkıştır: U_s = ½ × 200 × 0,3² = 9 J.", goster: ["pL"] },
            { metin: "0,3 m uzat: yine 9 J. Parabol simetrik, işaret önemsiz.", goster: ["pR"] },
            {
              metin: "Sapma 0,2 m'den 0,4 m'ye çıkınca U_s 4 J'den 16 J'ye, ==dört katına== çıkar.",
              goster: ["p2", "pM"]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Çantayı rafa kaldırmak",
          durum: "3 kg'lık çantayı yerden 2 m yüksekteki rafa kaldırıyorsun (g = 9,8 m/s²). Çanta–Dünya sisteminin U_g değişimi nedir? Sıfır noktasını yerden 1 m yukarı alsan değişir mi?",
          adimlar: [
            "ΔU_g = mgΔy = 3 × 9,8 × 2 = 58,8 J (yukarı çıkınca artar).",
            "Sıfır noktası yerden 1 m yukarıda olsun: başlangıç U = 3 × 9,8 × (−1) = −29,4 J, son U = 3 × 9,8 × (+1) = +29,4 J.",
            "Fark: 29,4 − (−29,4) = 58,8 J. Sıfır noktası değişti, ΔU değişmedi."
          ],
          sonuc: "ΔU_g = +58,8 J; sıfır noktasının seçiminden bağımsız"
        }
      ]
    },
    {
      baslik: "U(x) grafiği: kuvvet ve denge",
      kisa: "F = −dU/dx: kuvvet U'nun eğiminin negatifidir ve düşük U yönüne iter.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "U(x) = x³ − 6x² + 9x + 2 (x metre, U joule)",
          xlabel: "x (m)",
          ylabel: "U (J)",
          xmax: 4.5,
          ymax: 8,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" }
          ],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 2], [0.25, 3.8906], [0.5, 5.125], [0.75, 5.7969], [1, 6], [1.25, 5.8281], [1.5, 5.375],
                [1.75, 4.7344], [2, 4], [2.25, 3.2656], [2.5, 2.625], [2.75, 2.1719], [3, 2], [3.25, 2.2031],
                [3.5, 2.875], [3.75, 4.1094], [4, 6]
              ],
              renk: 0,
              etiket: "U"
            },
            { id: "pmax", tip: "nokta", x: 1, y: 6, renk: 2, etiket: "unstable", gizli: true },
            { id: "pmin", tip: "nokta", x: 3, y: 2, renk: 1, etiket: "stable", gizli: true },
            { id: "tg", tip: "cizgi", from: [1.5, 5.5], to: [2.5, 2.5], renk: 3, gizli: true },
            { id: "p2", tip: "nokta", x: 2, y: 4, renk: 3, gizli: true },
            { id: "fo", tip: "ok", from: [2, 4], to: [2.8, 4], renk: 1, gizli: true },
            { id: "ft", tip: "yazi", x: 3.05, y: 4.5, metin: "F = +3 N", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Parçacığın potansiyel enerjisi eğrideki gibi değişiyor. Kuvveti eğimden okuyacağız." },
            {
              metin: "x = 1 m: yerel ==maksimum== (U = 6 J). Eğim 0, F = 0. Küçük sapma kuvveti uzaklaştırır: ==unstable== denge.",
              goster: ["pmax"]
            },
            {
              metin: "x = 3 m: yerel ==minimum== (U = 2 J). Eğim 0, F = 0. Sapma geri çağıran kuvvet doğurur: ==stable== denge.",
              goster: ["pmin"]
            },
            {
              metin: "x = 2 m'de eğim −3 J/m (aşağı). F = −dU/dx = +3 N: kuvvet +x yönünde, yani U'nun azaldığı yöne.",
              goster: ["tg", "p2", "fo", "ft"]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "U(x)'ten F(x) ve denge noktaları",
          durum: "U(x) = x³ − 6x² + 9x + 2 için F(x)'i bul; denge noktalarını ve türlerini belirle.",
          adimlar: [
            "F = −dU/dx = −(3x² − 12x + 9) = −3x² + 12x − 9 = −3(x − 1)(x − 3).",
            "Denge: F = 0 ⇒ x = 1 m ve x = 3 m.", "x = 2 m'de F = −3(1)(−1) = +3 N: +x yönünde.",
            "Tür: dF/dx = −6x + 12. x = 1'de +6: kuvvet sapmayı büyütür, unstable. x = 3'te −6: kuvvet geri çağırır, stable."
          ],
          sonuc: "F = −3x² + 12x − 9 (N); x = 3 m stable, x = 1 m unstable"
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🥣",
            baslik: "*Stable* denge",
            maddeler: ["U(x) yerel minimum", "Sapınca kuvvet geri çağırır"]
          },
          sag: {
            ikon: "⛰️",
            baslik: "*Unstable* denge",
            maddeler: ["U(x) yerel maksimum", "Sapınca kuvvet uzaklaştırır"]
          },
          oyun: [
            { metin: "U(x) grafiğinde vadinin dibi.", cevap: "sol", neden: "Yerel minimum: stable." },
            {
              metin: "Dengede ama küçük bir itmeyle sürekli uzaklaşan parçacık.",
              cevap: "sag",
              neden: "Kuvvet sapmayı büyütüyor: unstable."
            },
            {
              metin: "Sapınca F = −dU/dx parçacığı denge noktasına doğru itiyor.",
              cevap: "sol",
              neden: "Geri çağırıcı kuvvet stable dengenin işaretidir."
            },
            { metin: "Grafikte tepe noktası.", cevap: "sag", neden: "Yerel maksimum: unstable." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Eksi işaretini unutma",
          metin: "F = −dU/dx: kuvvet eğimin tersi yönündedir, yani düşük U'ya bakar. Sınavda böyle yaz: *The force is the negative of the slope of the U versus x graph.*",
          yanlis: "x = 2 m'de eğim −3 olduğundan F = −3 N.",
          dogru: "F = −(−3) = +3 N: eğim aşağı, kuvvet +x yönünde."
        }
      ]
    },
    {
      baslik: "Çekim potansiyel enerjisi: büyük mesafeler",
      kisa: "U_G = −Gm₁m₂/r: sonsuzda 0, yaklaştıkça negatif; mgΔy yalnız yüzeye yakındır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "U_G(r): r yarıçap R biriminde, U birimi GMm/R (eksen 1,2 yukarı kaydırıldı)",
          xlabel: "r",
          ylabel: "U_G",
          xmax: 7,
          ymax: 1.5,
          xticks: [
            { v: 1, label: "R" },
            { v: 2, label: "2R" },
            { v: 3, label: "3R" },
            { v: 4, label: "4R" },
            { v: 5, label: "5R" },
            { v: 6, label: "6R" }
          ],
          yticks: [
            { v: 0.2, label: "−1" },
            { v: 0.7, label: "−½" },
            { v: 1.2, label: "0" }
          ],
          ogeler: [
            { id: "z", tip: "cizgi", from: [0, 1.2], to: [7, 1.2], renk: 3, kesik: true, etiket: "U = 0" },
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [1, 0.2], [1.25, 0.4], [1.5, 0.5333], [2, 0.7], [2.5, 0.8], [3, 0.8667], [4, 0.95], [5, 1],
                [6, 1.0333]
              ],
              renk: 0,
              etiket: "U_G"
            },
            { id: "p1", tip: "nokta", x: 1, y: 0.2, renk: 2, etiket: "r = R", gizli: true },
            { id: "p2", tip: "nokta", x: 2, y: 0.7, renk: 1, etiket: "r = 2R", gizli: true },
            { id: "tg", tip: "cizgi", from: [1, 0.2], to: [1.8, 1], renk: 3, gizli: true },
            { id: "tt", tip: "yazi", x: 2.2, y: 1.05, metin: "≈ mgΔy", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "U_G = −GMm/r. Sıfır noktası sonsuzda seçilir; bağlı sistemde U hep negatiftir." },
            { metin: "Yüzeyde (r = R) U = −1 birim: çukurun dibi, uzaklaşmak enerji ister.", goster: ["p1"] },
            {
              metin: "r = 2R'de U = −½: mesafe iki katına çıkınca U yarıya iner ve sıfıra yaklaşır.",
              goster: ["p2"]
            },
            {
              metin: "Yüzeye yakın teğet eğimi mg'dir: küçük Δy için ΔU ≈ mgΔy. Büyük adımda teğet eğriden uzaklaşır; orada U_G farkını kullan.",
              goster: ["tg", "tt"]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Hizalı üç eşit kütle",
          durum: "m kütleli üç cisim bir doğru üzerinde yan yana, komşu aralığı d. Sistemin toplam çekim potansiyel enerjisi nedir?",
          adimlar: [
            "Üç cisim, üç çift: (1,2), (2,3) ve (1,3).", "U = −Gm²/d − Gm²/d − Gm²/(2d) = −Gm²/d (1 + 1 + ½).",
            "Sınavda böyle yaz: *The total potential energy is the sum over every pair of objects.*"
          ],
          sonuc: "U = −2,5 Gm²/d"
        },
        {
          tip: "tuzak",
          baslik: "Negatif U ve büyük yükseklik",
          metin: "U_G < 0, enerji yok demek değildir: sıfır noktası sonsuzdadır ve bağlı sistem sıfırdan daha düşük enerjidedir.",
          yanlis: "Uydunun yörünge yüksekliği için de ΔU = mgΔy kullanırım.",
          dogru: "Dünya yarıçapı mertebesindeki farklarda U_G = −GMm/r'nin farkını al."
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
            "U tek bir nesneye değil, conservative kuvvetle etkileşen nesne sistemine aittir; skalerdir.",
            "U = 0 noktasını sen seçersin; fiziksel olan ΔU'dur (ΔU = −∫F·dr).",
            "Yüzeye yakın ΔU_g = mgΔy; yay U_s = ½k(Δx)², sıkışmada da uzamada da ≥ 0.",
            "Büyük mesafede U_G = −Gm₁m₂/r: sonsuzda 0, yaklaştıkça negatif.",
            "İkiden çok nesnede toplam U, bütün nesne çiftlerinin U'sunun toplamıdır (hizalı üç kütle: −2,5 Gm²/d).",
            "F = −dU/dx: kuvvet U'nun eğiminin negatifidir, düşük U'ya bakar.",
            "Denge: F = 0 (eğim 0). Yerel minimum stable, yerel maksimum unstable.",
            "U = x³ − 6x² + 9x + 2 için F = −3x² + 12x − 9; x = 1 m unstable, x = 3 m stable."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A spring is compressed 0.10 m from its natural length and stores 2 J of potential energy. How much energy does it store when compressed 0.30 m?",
      opts: ["6 J", "9 J", "18 J", "54 J"],
      a: 2,
      why: "U_s = ½kx² ile x üç katına çıkınca U dokuz katı olur: 2 × 9 = 18 J. 6 J doğrusal artış varsaymaktır."
    },
    {
      q: "A particle moves along the x-axis with the potential energy U(x) shown. What is the force on the particle at x = 1 m?",
      fig: {
        type: "graph",
        xlabel: "x (m)",
        ylabel: "U (J)",
        xmax: 7,
        ymax: 9,
        lines: [
          { from: [0, 8], to: [2, 2] },
          { from: [2, 2], to: [4, 2] },
          { from: [4, 2], to: [6, 8] }
        ],
        xticks: [
          { v: 1, label: "1" },
          { v: 2, label: "2" },
          { v: 3, label: "3" },
          { v: 4, label: "4" },
          { v: 5, label: "5" },
          { v: 6, label: "6" }
        ],
        yticks: [
          { v: 2, label: "2" },
          { v: 4, label: "4" },
          { v: 6, label: "6" },
          { v: 8, label: "8" }
        ],
        caption: "Potential energy U of a particle as a function of position x"
      },
      opts: ["3 N in the +x direction", "3 N in the −x direction", "6 N in the +x direction", "0 N"],
      a: 0,
      why: "x = 1 m'de eğim (2 − 8)/(2 − 0) = −3 J/m. F = −dU/dx = +3 N: +x yönünde. 3 N'u −x yönünde yazmak eksi işaretini unutmaktır."
    },
    {
      q: "The graph shows a smooth potential energy curve U(x) for a particle. Which statement about the equilibrium points A and B is correct?",
      fig: {
        type: "graph",
        xlabel: "x (m)",
        ylabel: "U (J)",
        xmax: 7,
        ymax: 9,
        lines: [
          { from: [0, 4], to: [0.25, 4.776] },
          { from: [0.25, 4.776], to: [0.5, 5.5] },
          { from: [0.5, 5.5], to: [0.75, 6.121] },
          { from: [0.75, 6.121], to: [1, 6.598] },
          { from: [1, 6.598], to: [1.25, 6.898] },
          { from: [1.25, 6.898], to: [1.5, 7] },
          { from: [1.5, 7], to: [1.75, 6.898] },
          { from: [1.75, 6.898], to: [2, 6.598] },
          { from: [2, 6.598], to: [2.25, 6.121] },
          { from: [2.25, 6.121], to: [2.5, 5.5] },
          { from: [2.5, 5.5], to: [2.75, 4.776] },
          { from: [2.75, 4.776], to: [3, 4] },
          { from: [3, 4], to: [3.25, 3.224] },
          { from: [3.25, 3.224], to: [3.5, 2.5] },
          { from: [3.5, 2.5], to: [3.75, 1.879] },
          { from: [3.75, 1.879], to: [4, 1.402] },
          { from: [4, 1.402], to: [4.25, 1.102] },
          { from: [4.25, 1.102], to: [4.5, 1] },
          { from: [4.5, 1], to: [4.75, 1.102] },
          { from: [4.75, 1.102], to: [5, 1.402] },
          { from: [5, 1.402], to: [5.25, 1.879] },
          { from: [5.25, 1.879], to: [5.5, 2.5] },
          { from: [5.5, 2.5], to: [5.75, 3.224] },
          { from: [5.75, 3.224], to: [6, 4] }
        ],
        points: [
          { q: 1.5, p: 7, label: "A" },
          { q: 4.5, p: 1, label: "B" }
        ],
        xticks: [
          { v: 1, label: "1" },
          { v: 2, label: "2" },
          { v: 3, label: "3" },
          { v: 4, label: "4" },
          { v: 5, label: "5" },
          { v: 6, label: "6" }
        ],
        yticks: [
          { v: 2, label: "2" },
          { v: 4, label: "4" },
          { v: 6, label: "6" },
          { v: 8, label: "8" }
        ],
        caption: "Smooth potential energy curve U(x)"
      },
      opts: [
        "A is stable and B is unstable.", "A is unstable and B is stable.", "Both A and B are stable.",
        "Both A and B are unstable."
      ],
      a: 1,
      why: "A yerel maksimum (7 J): küçük sapmada kuvvet uzaklaştırır, unstable. B yerel minimum (1 J): kuvvet geri çağırır, stable. İki noktada da eğim 0 olduğundan F = 0'dır."
    },
    {
      q: "A satellite of mass m moves from a circular orbit of radius r to one of radius 2r around Earth (mass M). What happens to the gravitational potential energy of the satellite–Earth system?",
      opts: [
        "It decreases from −GMm/r to −2GMm/r.", "It stays the same because the satellite's mass is unchanged.",
        "It increases from −GMm/r to −GMm/(2r).", "It increases from GMm/r to GMm/(2r)."
      ],
      a: 2,
      why: "U_G = −GMm/r: r iki katına çıkınca U −GMm/r'den −GMm/(2r)'e çıkar; sıfıra yaklaşır, yani artar. U_G sistem için negatiftir; D şıkkındaki pozitif işaret yanlış."
    },
    {
      q: "Three identical point masses m sit at the corners of an equilateral triangle of side d. What is the total gravitational potential energy of the system?",
      opts: ["−Gm²/d", "−6Gm²/d", "3Gm²/d", "−3Gm²/d"],
      a: 3,
      why: "Üç nesne üç çift oluşturur ve her çift −Gm²/d verir: toplam −3Gm²/d. −6Gm²/d çiftleri iki kez saymaktır; pozitif işaret U_G'nin negatif olduğunu unutmaktır."
    }
  ]
};
