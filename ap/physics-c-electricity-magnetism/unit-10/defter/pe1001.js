/* Kitpath not defteri · pe1001 · 10.1–10.2 İletkenlerde Elektrostatik ve Yük Paylaşımı
   Kaynak: defter-araclari/kaynak/ced-physc.md (Unit 10, Topic 10.1 ve 10.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe1001",
  amac: "Bu konu iletkenlerin elektrostatik dengedeki davranışını anlatıyor: yükün yüzeyde toplanması, içeride alanın sıfır ve potansiyelin sabit olması, kalkanlama, temas eden iletkenlerin yük paylaşımı ve topraklama.",
  bolumler: [
    {
      baslik: "Dengedeki iletken",
      kisa: "Dengede yük yüzeydedir; içeride E = 0, potansiyel sabit ve yüzeyle aynıdır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔩",
              terim: "Ideal conductor",
              tr: "ideal iletken",
              tanim: "Yük taşıyıcıları (elektronlar) içinde serbestçe hareket eden madde.",
              ornek: "Bakır tel ya da metal bir top."
            },
            {
              ikon: "⚖️",
              terim: "Electrostatic equilibrium",
              tr: "elektrostatik denge",
              tanim: "Yükler artık hareket etmiyor: fazla yük yüzeydedir, içeride net alan sıfırdır. Dengeye gelme süresi ihmal edilir.",
              ornek: "Metal küreye yük verince fazla yük hemen yüzeye yayılır ve durur."
            },
            {
              ikon: "📏",
              terim: "Equipotential conductor",
              tr: "eşpotansiyelli iletken",
              tanim: "Dengede iletkenin her noktası, iç ve yüzey dahil, aynı potansiyeldedir.",
              ornek: "Yüklü metal kürenin içi kQ/R değerinde sabittir, sıfır değil."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Yüklü metal küre: V(r), Q = +8,0 nC, R = 10 cm",
          xlabel: "r (cm)",
          ylabel: "V (volt)",
          xmax: 10,
          ymax: 8,
          xticks: [
            { v: 2.5, label: "10" },
            { v: 5, label: "20" },
            { v: 7.5, label: "30" },
            { v: 10, label: "40" }
          ],
          yticks: [
            { v: 2, label: "200" },
            { v: 4, label: "400" },
            { v: 6, label: "600" },
            { v: 7.2, label: "720" }
          ],
          ogeler: [
            { id: "yuz", tip: "cizgi", from: [2.5, 0], to: [2.5, 7.2], renk: 3, kesik: true },
            { id: "yt", tip: "yazi", x: 2.65, y: 0.6, metin: "yüzey", hiza: "start" },
            { id: "ic", tip: "cizgi", from: [0, 7.2], to: [2.5, 7.2], renk: 1, gizli: true },
            { id: "ie", tip: "yazi", x: 1.25, y: 6.4, metin: "E = 0", gizli: true },
            { id: "n", tip: "nokta", x: 2.5, y: 7.2, renk: 1, etiket: "720 V", gizli: true },
            {
              id: "dis",
              tip: "egri",
              noktalar: [
                [2.5, 7.2], [3, 6], [3.75, 4.8], [5, 3.6], [6.25, 2.88], [7.5, 2.4],
                [8.75, 2.057], [10, 1.8]
              ],
              renk: 2,
              etiket: "kQ/r",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "Q = +8,0 nC yüklü, R = 10 cm yarıçaplı metal küre. Fazla yük yalnızca yüzeyde (kesikli çizgi)." },
            {
              metin: "İçeride (r < R) V sabit: kQ/R = 720 V. Eğim 0 olduğundan E = −dV/dr = 0.",
              goster: ["ic", "ie", "n"]
            },
            {
              metin: "Dışarıda (r > R) küre, merkezine konmuş nokta yük gibidir: V = kQ/r. 20 cm'de 360 V.",
              goster: ["dis"]
            },
            { metin: "Sonuç: içeride alan sıfır ama potansiyel sıfır değil; yüzeyle aynı 720 V." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "İçeride V = 0 sanmak",
          metin: "Alan sıfır olunca potansiyelin de sıfır olduğunu düşünmek çok yaygın. Alan sıfırsa potansiyel değişmez, ama değeri yüzeydekiyle aynıdır. Yükün iletken içinde yayıldığını sanmak da yanlış.",
          yanlis: "İletkenin içinde V = 0 ve yük içeride yayılır.",
          dogru: "İçeride E = 0 ve V = yüzeydeki V (sabit); fazla yük yalnızca yüzeyde. Sınavda böyle yaz: \"In electrostatic equilibrium E = 0 inside the conductor, so V is constant and equal to its surface value.\""
        }
      ]
    },
    {
      baslik: "Dış alan, sivri uç ve kalkanlama",
      kisa: "Dış alan iletkeni polarize eder; içerisi korunur, sivri uçlarda yük yoğunluğu fazladır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Dış alanda metal blok",
          xlabel: "",
          ylabel: "",
          xmax: 16,
          ymax: 11,
          xticks: [],
          yticks: [],
          ogeler: [
            {
              id: "blok",
              tip: "alan",
              noktalar: [
                [5, 3], [11, 3], [11, 8], [5, 8], [5, 3]
              ],
              renk: 3
            },
            { id: "bt", tip: "yazi", x: 8, y: 8.7, metin: "metal blok" },
            { id: "gl0", tip: "ok", from: [0.6, 4], to: [4.5, 4], renk: 0 },
            { id: "gr0", tip: "ok", from: [11.5, 4], to: [15.4, 4], renk: 0 },
            { id: "gl1", tip: "ok", from: [0.6, 5.5], to: [4.5, 5.5], renk: 0 },
            { id: "gr1", tip: "ok", from: [11.5, 5.5], to: [15.4, 5.5], renk: 0 },
            { id: "gl2", tip: "ok", from: [0.6, 7], to: [4.5, 7], renk: 0 },
            { id: "gr2", tip: "ok", from: [11.5, 7], to: [15.4, 7], renk: 0 },
            { id: "e0", tip: "yazi", x: 2.5, y: 8.3, metin: "E₀", renk: 0 },
            { id: "m0", tip: "yazi", x: 5.45, y: 3.9, metin: "−", renk: 1, gizli: true },
            { id: "m1", tip: "yazi", x: 5.45, y: 4.9, metin: "−", renk: 1, gizli: true },
            { id: "m2", tip: "yazi", x: 5.45, y: 5.9, metin: "−", renk: 1, gizli: true },
            { id: "m3", tip: "yazi", x: 5.45, y: 6.9, metin: "−", renk: 1, gizli: true },
            { id: "p0", tip: "yazi", x: 10.55, y: 3.9, metin: "+", renk: 2, gizli: true },
            { id: "p1", tip: "yazi", x: 10.55, y: 4.9, metin: "+", renk: 2, gizli: true },
            { id: "p2", tip: "yazi", x: 10.55, y: 5.9, metin: "+", renk: 2, gizli: true },
            { id: "p3", tip: "yazi", x: 10.55, y: 6.9, metin: "+", renk: 2, gizli: true },
            { id: "i0", tip: "ok", from: [6.4, 4.5], to: [9.6, 4.5], renk: 0, gizli: true },
            { id: "i0t", tip: "yazi", x: 8, y: 3.8, metin: "E₀", renk: 0, gizli: true },
            { id: "ii", tip: "ok", from: [9.6, 6.6], to: [6.4, 6.6], renk: 2, gizli: true },
            { id: "iit", tip: "yazi", x: 8, y: 7.2, metin: "E_ind", renk: 2, gizli: true },
            { id: "net", tip: "yazi", x: 8, y: 5.5, metin: "E_net = 0", gizli: true }
          ],
          durumlar: [
            { metin: "Yüksüz metal blok, sağa doğru düzgün bir dış alan E₀ içinde." },
            {
              metin: "Serbest elektronlar alanın tersine, sola kayar: sol yüz negatif, sağ yüz pozitif olur (polarizasyon). Net yük hâlâ 0.",
              goster: ["m0", "m1", "m2", "m3", "p0", "p1", "p2", "p3"]
            },
            {
              metin: "Yüzey yükleri, içeride dış alana ters yönde bir E_ind üretir.",
              goster: ["i0", "i0t", "ii", "iit"]
            },
            {
              metin: "Denge: içeride E_net = E₀ − E_ind = 0; yük akışı durur. Dış yüzeyde alan yüzeye diktir.",
              gizle: ["i0", "i0t", "ii", "iit"],
              goster: ["net"]
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🛡️",
              terim: "Electrostatic shielding",
              tr: "elektrostatik kalkanlama",
              tanim: "Kapalı bir iletken kabuğun içi, dış alanlardan etkilenmez; kabuktaki yükler dış alanı içeride sıfırlar.",
              ornek: "Betonarme ve metal yapılarda cep telefonu sinyali zayıflar."
            },
            {
              ikon: "📍",
              terim: "Surface charge density at points",
              tr: "sivri uçta yük yoğunluğu",
              tanim: "Dengede yük, sivri uç ve kenarlarda düz bölgelerden daha yoğundur. Yüzeyin hemen dışındaki alan yüzeye diktir: E = σ/ε₀.",
              ornek: "Paratonerin sivri ucunda alan çok güçlüdür; yük oradan kolay boşalır."
            }
          ]
        },
        {
          tip: "liste",
          baslik: "Sınavda böyle yaz",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: kalkan",
              metin: "\"The charges on the shell rearrange so that their field cancels the external field inside; the net field inside is zero.\""
            },
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: yüzey",
              metin: "\"The field just outside a conductor is perpendicular to its surface; a parallel component would move the charges.\""
            }
          ]
        }
      ]
    },
    {
      baslik: "Temas eden iletkenler",
      kisa: "Temas eden iletkenlerin potansiyeli eşitlenir; yük yarıçapla orantılı paylaşılır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "V₁ = V₂" },
            "→",
            { t: "q₁/r₁ = q₂/r₂", alt: "yük yarıçapla orantılı" },
            "|",
            { t: "σ₁/σ₂ = r₂/r₁", alt: "yoğunluk ters orantılı" }
          ],
          aciklama: "Küreler birbirinden uzak (ince telle bağlı) sayılır. σ = q/(4πr²) olduğundan σ₁/σ₂ = (q₁/q₂)(r₂/r₁)² = r₂/r₁. Küçük küre daha az yük taşır ama yüzey yük yoğunluğu daha büyüktür."
        },
        {
          tip: "ornek",
          baslik: "r₁ = 2,0 cm ve r₂ = 6,0 cm yarıçaplı iki küre",
          durum: "Küre 1'e +8,0 nC verilmiş, küre 2 nötr. İnce bir iletken telle birleştirilip ayrılıyor (küreler uzak). Son yükleri, ortak potansiyeli ve yüzey yük yoğunluklarını bul.",
          adimlar: [
            "Yük korunur: q₁ + q₂ = 8,0 nC.",
            "Temasta V₁ = V₂ → q₁/r₁ = q₂/r₂ → q₂ = 3q₁ (r₂ = 3r₁).",
            "q₁ + 3q₁ = 8,0 nC → q₁ = 2,0 nC ve q₂ = 6,0 nC.",
            "Ortak potansiyel: V = kq₁/r₁ = (9×10⁹)(2,0×10⁻⁹)/0,020 = 900 V. Kontrol: kq₂/r₂ = 54/0,060 = 900 V.",
            "σ = q/(4πr²): σ₁ ≈ 4,0×10⁻⁷ C/m² ve σ₂ ≈ 1,3×10⁻⁷ C/m²; küçük kürede 3 kat yoğun."
          ],
          sonuc: "q₁ = 2,0 nC, q₂ = 6,0 nC; V = 900 V; σ₁/σ₂ = 3"
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🤝",
            baslik: "Eşit olur",
            maddeler: ["Yüzey potansiyeli V", "İletkenin içindeki V"]
          },
          sag: {
            ikon: "↔️",
            baslik: "Eşit olmaz",
            maddeler: [
              "Yük miktarı q (r ile orantılı)",
              "Yüzey yük yoğunluğu σ (1/r ile orantılı)",
              "Yüzeyin hemen dışındaki alan E = σ/ε₀"
            ]
          },
          oyun: [
            {
              metin: "Temastan sonra iki kürenin yüzey potansiyeli.",
              cevap: "sol",
              neden: "Bağlı iletkenler tek bir eşpotansiyel iletken gibi davranır."
            },
            { metin: "Her küredeki yük miktarı.", cevap: "sag", neden: "q ∝ r: büyük küre daha çok yük alır." },
            {
              metin: "Küçük kürenin yüzeyinin hemen dışındaki alan büyüklüğü.",
              cevap: "sag",
              neden: "E = σ/ε₀ ve σ küçük kürede büyük; alan orada daha güçlü."
            },
            {
              metin: "Tel üzerindeki iki farklı noktanın potansiyeli.",
              cevap: "sol",
              neden: "Dengede iletkenin her yeri aynı potansiyeldedir."
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Yükü eşit paylaşmak",
          metin: "Farklı büyüklükteki iki kürenin yükü eşit paylaştığını sanmak çok yaygın. Eşitlenen şey yük değil, potansiyeldir.",
          yanlis: "Temastan sonra her küre 4,0 nC taşır.",
          dogru: "Potansiyel eşit, yük yarıçapla orantılı: 2,0 nC ve 6,0 nC. Sınavda böyle yaz: \"The spheres reach the same potential, so q₁/r₁ = q₂/r₂ and the larger sphere carries more charge.\""
        }
      ]
    },
    {
      baslik: "Topraklama",
      kisa: "Topraklama potansiyeli sıfıra sabitler; dış yük varken indüklenmiş yük kalır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🌍",
              terim: "Ground",
              tr: "toprak",
              tanim: "Potansiyeli sıfır olan, potansiyelini değiştirmeden sınırsız yük alıp verebilen idealleştirilmiş referans.",
              ornek: "Yerküre ve ona bağlı metal topraklama çubuğu."
            },
            {
              ikon: "🪄",
              terim: "Charging by induction",
              tr: "indükleme ile yükleme",
              tanim: "Dış yük yakındayken iletkeni topraklayıp teli çekerek ona yük kazandırma.",
              ornek: "Pozitif çubuk yaklaşırken topraklanan metal küre, sonunda negatif yüklü kalır."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Topraklamayla indükleme",
          xlabel: "",
          ylabel: "",
          xmax: 16,
          ymax: 11,
          xticks: [],
          yticks: [],
          ogeler: [
            {
              id: "kure",
              tip: "egri",
              noktalar: [
                [11.5, 5.5], [11.469, 5.891], [11.378, 6.273], [11.228, 6.635], [11.023, 6.969], [10.768, 7.268],
                [10.469, 7.523], [10.135, 7.728], [9.773, 7.878], [9.391, 7.969], [9, 8], [8.609, 7.969],
                [8.227, 7.878], [7.865, 7.728], [7.531, 7.523], [7.232, 7.268], [6.977, 6.969], [6.772, 6.635],
                [6.622, 6.273], [6.531, 5.891], [6.5, 5.5], [6.531, 5.109], [6.622, 4.727], [6.772, 4.365],
                [6.977, 4.031], [7.232, 3.732], [7.531, 3.477], [7.865, 3.272], [8.227, 3.122], [8.609, 3.031],
                [9, 3], [9.391, 3.031], [9.773, 3.122], [10.135, 3.272], [10.469, 3.477], [10.768, 3.732],
                [11.023, 4.031], [11.228, 4.365], [11.378, 4.727], [11.469, 5.109], [11.5, 5.5]
              ],
              renk: 0
            },
            {
              id: "cub",
              tip: "alan",
              noktalar: [
                [0.6, 5], [5.2, 5], [5.2, 6], [0.6, 6], [0.6, 5]
              ],
              renk: 3
            },
            { id: "cubt", tip: "yazi", x: 2.9, y: 5.35, metin: "+ + + +" },
            { id: "L0", tip: "yazi", x: 7.181, y: 6.55, metin: "−", renk: 1, gizli: true },
            { id: "L1", tip: "yazi", x: 6.9, y: 5.5, metin: "−", renk: 1, gizli: true },
            { id: "L2", tip: "yazi", x: 7.181, y: 4.45, metin: "−", renk: 1, gizli: true },
            { id: "R0", tip: "yazi", x: 10.819, y: 4.45, metin: "+", renk: 2, gizli: true },
            { id: "R1", tip: "yazi", x: 11.1, y: 5.5, metin: "+", renk: 2, gizli: true },
            { id: "R2", tip: "yazi", x: 10.819, y: 6.55, metin: "+", renk: 2, gizli: true },
            { id: "tel", tip: "cizgi", from: [9, 3], to: [9, 1], renk: 0, gizli: true },
            { id: "tt", tip: "yazi", x: 9, y: 0.4, metin: "toprak", gizli: true },
            { id: "ee", tip: "ok", from: [9.9, 1.2], to: [9.9, 2.9], renk: 1, gizli: true },
            { id: "eet", tip: "yazi", x: 10.5, y: 2, metin: "e⁻", hiza: "start", renk: 1, gizli: true }
          ],
          durumlar: [
            { metin: "Nötr bir metal küre ve yakında (dokunmayan) pozitif yüklü bir çubuk." },
            {
              metin: "Küre polarize olur: elektronlar çubuğa doğru kayar, yakın yüz −, uzak yüz +. Net yük hâlâ 0.",
              goster: ["L0", "L1", "L2", "R0", "R1", "R2"]
            },
            {
              metin: "Küre topraklanır: potansiyeli 0'a sabitlenir. Topraktan gelen elektronlar uzak yüzdeki + yükü nötrler.",
              goster: ["tel", "tt", "ee", "eet"],
              gizle: ["R0", "R1", "R2"]
            },
            {
              metin: "Önce toprak teli çekilir, sonra çubuk uzaklaştırılır: küre net negatif yükle kalır.",
              gizle: ["tel", "tt", "ee", "eet", "cub", "cubt"]
            },
            {
              metin: "Çubuk yokken itme dengesi kurulur: fazla elektronlar yüzeye yayılır.",
              set: {
                L0: { x: 9, y: 7.6 },
                L1: { x: 7.181, y: 4.45 },
                L2: { x: 10.819, y: 4.45 }
              }
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Topraklama her zaman nötrler mi?",
          metin: "Topraklama iletkeni her durumda nötr yapmaz. Dış yük yakındayken topraklarsan iletken ona zıt işaretli yük kazanır ve toprak teli çekilince bu yük kalır.",
          yanlis: "Topraklanan iletken her zaman yüksüzdür.",
          dogru: "Dış yük varken topraklama zıt işaretli yük indükler. Sınavda böyle yaz: \"With the rod nearby, the grounded sphere stays at V = 0, so electrons flow in until the sphere has net charge opposite to the rod.\""
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
            "Dengedeki iletkende fazla yük yalnızca yüzeydedir; içeride net yük ve E sıfırdır.",
            "İletken eşpotansiyeldir: içerideki V sabittir ve yüzeyle aynıdır; sıfır olmak zorunda değil (örnekte 720 V).",
            "Yüzeyin hemen dışında alan yüzeye diktir (E = σ/ε₀); sivri uç ve kenarlarda yük yoğunluğu fazladır.",
            "Dış alanda iletken polarize olur; iç alan sıfırlanır. Kapalı iletken kabuğun içi dış alanlardan korunur (*electrostatic shielding*).",
            "Temas eden iletkenler aynı potansiyele gelir: q₁/r₁ = q₂/r₂, yani yük yarıçapla orantılı paylaşılır.",
            "σ yarıçapla ters orantılıdır: küçük küre daha az yük taşır ama daha yoğundur.",
            "*Ground*: potansiyeli 0 olan, sınırsız yük alıp verebilen referans.",
            "Dış yük varken topraklama zıt işaretli yük indükler; toprak teli ve dış yük çekilince yük iletkende kalır."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A solid conducting sphere of radius R carries a net charge +Q and is in electrostatic equilibrium. Which statement is correct at a point inside the sphere at r = R/2? (V = 0 at infinity)",
      opts: [
        "E = 0 and V = kQ/R",
        "E = 0 and V = 0",
        "E = kQ/(R/2)² and V = kQ/(R/2)",
        "E = 0 and V = kQ/(R/2)"
      ],
      a: 0,
      why: "İçeride alan sıfırdır; alan sıfırsa V sabittir ve yüzeydeki değere eşittir: kQ/R. En çekici yanlış şık B: alan sıfır olduğundan potansiyeli de sıfır sanmak."
    },
    {
      q: "Two conducting spheres of radii 1.0 cm and 4.0 cm are far apart. They are connected by a long, thin conducting wire, and the total charge on the system is +10 nC. What is the charge on the smaller sphere?",
      opts: ["5.0 nC", "2.0 nC", "8.0 nC", "2.5 nC"],
      a: 1,
      why: "Aynı potansiyel: q₁/r₁ = q₂/r₂ → q₂ = 4q₁; q₁ + 4q₁ = 10 nC → q₁ = 2,0 nC. En çekici yanlış şık A: yükü eşit paylaştırmak (5,0 nC)."
    },
    {
      q: "A conductor of irregular shape carries a net charge and is in electrostatic equilibrium. The table lists the local radius of curvature at three points on its surface. At which point is the surface charge density greatest?",
      fig: {
        type: "table",
        caption: "Points on the surface of the conductor",
        head: ["Point", "Local shape", "Radius of curvature (cm)"],
        rows: [
          ["A", "sharp tip", "0.5"],
          ["B", "nearly flat region", "50"],
          ["C", "rounded end", "3.0"]
        ]
      },
      opts: [
        "Point B",
        "Point C",
        "The same at all three points, because a conductor is an equipotential",
        "Point A"
      ],
      a: 3,
      why: "Sivri uçlarda (küçük eğrilik yarıçapı) yük yoğunluğu ve dolayısıyla yüzeyin hemen dışındaki alan en büyüktür. En çekici yanlış şık C: V her yerde aynıdır ama σ aynı değildir."
    },
    {
      q: "A positively charged rod is held near, but not touching, a neutral conducting sphere mounted on an insulating stand. The sphere is briefly touched with a grounding wire, the wire is removed, and then the rod is taken far away. What is the final charge of the sphere?",
      opts: [
        "The sphere is neutral.",
        "The sphere is positively charged.",
        "The sphere is negatively charged.",
        "The sign cannot be determined."
      ],
      a: 2,
      why: "Topraklama sırasında küre V = 0'da tutulur; pozitif çubuk potansiyeli yükselttiğinden topraktan elektron girer. Tel çekilince bu elektronlar küreye hapsolur, çubuk gidince net yük negatif kalır. En çekici yanlış şık A: topraklamanın her zaman nötrlediğini sanmak."
    },
    {
      q: "A neutral hollow metal shell with an empty cavity is placed in a uniform external electric field E₀. Which statement about the field in the cavity is correct?",
      opts: [
        "The field is E₀ in the cavity, because the shell has no net charge.",
        "The field is zero in the cavity, because charges on the shell surface cancel the external field there.",
        "The field is smaller than E₀ but not zero.",
        "The field is zero because a conductor cannot be placed in an electric field."
      ],
      a: 1,
      why: "Kabuğun yüzeyindeki yükler yeniden dağılır ve içeride dış alanı tam sıfırlayan bir alan üretir: electrostatic shielding. En çekici yanlış şık A: kabuğun net yükünün sıfır olması içerideki alanın sıfır olmadığı anlamına gelmez."
    }
  ]
};
