/* Kitpath not defteri · pc111 · 1.4–1.5 İki Boyutta Hareket ve Göreli Hareket (ileri bölüm)
   Kaynak: ap-videolar/src/episodes/pc111 (script.ts + notes.md); notasyon: ders sunumları (Bölüm 2 ve Vectors: î ĵ, bileşenler). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc111",
  amac: "Bu konu hareketi iki boyuta taşıyor: konum vektörü, eğik atış ve göreli hareket. İki boyutlu hareketi bağımsız yatay ve dikey hareketlere ayırmayı ve hızları vektör olarak toplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "İki boyut = iki bağımsız hareket",
      kisa: "Yatay ve dikey hareketler birbirinden bağımsızdır; ortak olan yalnızca zamandır.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🏀",
          baslik: "Üçlük atışı",
          metin: "Basketbolda üçlük atıyorsun ve top havada bir yay çiziyor. (Bu bölüm biraz ileriden: Unit 1'in son iki konusu sınıfta henüz işlenmedi.) Tek bir fikir her şeyi çözüyor: ==iki boyutlu hareket, birbirinden bağımsız iki tek boyutlu harekettir==. Elindeki araçlar zaten tamam: vektör bileşenleri, türev ve sabit ivme denklemleri."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔀",
              terim: "Independence of motion",
              tr: "hareketin bağımsızlığı",
              tanim: "x ve y yönündeki hareketler birbirini etkilemez; yalnızca aynı zamanı paylaşırlar.",
              ornek: "Yatay fırlatılan bilye ile serbest bırakılan bilye aynı anda yere düşer."
            },
            {
              ikon: "↔️",
              terim: "Horizontal component",
              tr: "yatay bileşen",
              tanim: "Hareketin x yönündeki kısmı: x, vₓ, aₓ.",
              ornek: "Eğik atışta aₓ = 0, yani vₓ sabit."
            },
            {
              ikon: "↕️",
              terim: "Vertical component",
              tr: "dikey bileşen",
              tanim: "Hareketin y yönündeki kısmı: y, v_y, a_y.",
              ornek: "Eğik atışta a_y = −g."
            }
          ]
        }
      ]
    },
    {
      baslik: "Konum vektörü ve bileşen bileşen türev",
      kisa: "r = xî + yĵ; hız ve ivme bileşen bileşen türevle bulunur.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "r = x î + y ĵ", alt: "konum vektörü" },
            "→",
            { t: "v = dr/dt = (dx/dt) î + (dy/dt) ĵ", alt: "hız" },
            "→",
            { t: "a = dv/dt", alt: "ivme" }
          ],
          aciklama: "î ve ĵ birim vektörlerdir: yönü gösterir, büyüklükleri 1'dir."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📍",
              terim: "Position vector",
              tr: "konum vektörü",
              tanim: "Orijinden cisme çizilen ok: r = xî + yĵ. Bileşenleri x(t) ve y(t) fonksiyonlarıdır.",
              ornek: "r = 3t î + (4t − t²) ĵ: t = 2 s'de r = 6î + 4ĵ."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "r = 3t î + (4t − t²) ĵ: yörünge, hız ve ivme",
          xlabel: "x (m)",
          ylabel: "y (m)",
          xmax: 12,
          ymax: 6,
          xticks: [{ v: 3, label: "3" }, { v: 6, label: "6" }, { v: 9, label: "9" }, { v: 12, label: "12" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            {
              id: "yol",
              tip: "egri",
              noktalar: [
                [0, 0], [0.75, 0.938], [1.5, 1.75], [2.25, 2.438], [3, 3], [3.75, 3.438],
                [4.5, 3.75], [5.25, 3.938], [6, 4], [6.75, 3.938], [7.5, 3.75], [8.25, 3.438],
                [9, 3], [9.75, 2.438], [10.5, 1.75], [11.25, 0.938], [12, 0]
              ],
              renk: 0
            },
            { id: "P", tip: "nokta", x: 3, y: 3, renk: 3, gizli: true },
            { id: "V", tip: "ok", from: [3, 3], to: [6, 5], renk: 1, gizli: true },
            { id: "vl", tip: "yazi", x: 6, y: 5.4, metin: "v = 3î + 2ĵ", gizli: true },
            { id: "A", tip: "ok", from: [6, 4], to: [6, 2], renk: 2, gizli: true },
            { id: "al", tip: "yazi", x: 5.7, y: 2.8, metin: "a = −2ĵ", gizli: true, hiza: "end" }
          ],
          durumlar: [
            { metin: "Konum vektörünün ucu bu parabolü çiziyor: x = 3t, y = 4t − t². Her bileşen kendi fonksiyonu." },
            {
              metin: "t = 1 s: konum (3, 3). Hız bileşen bileşen türevdir: v = 3î + (4 − 2t)ĵ = 3î + 2ĵ.",
              goster: ["P", "V", "vl"]
            },
            {
              metin: "t = 2 s: tepe. v = 3î + 0ĵ: ==dikey hız sıfır ama yatay hız 3 m/s==, cisim durmadı. İvme a = −2ĵ her yerde aşağı.",
              set: { P: { x: 6, y: 4 }, V: { from: [6, 4], to: [9, 4] }, vl: { x: 9.2, y: 4.7, metin: "v = 3î" } },
              goster: ["A", "al"]
            },
            {
              metin: "t = 3 s: konum (9, 3), v = 3î − 2ĵ. Yatay bileşen sabit, dikey bileşen işaret değiştirdi; ivme hep −2ĵ.",
              set: {
                P: { x: 9, y: 3 },
                V: { from: [9, 3], to: [12, 1] },
                vl: { x: 9.8, y: 0.5, metin: "v = 3î − 2ĵ" },
                A: { from: [9, 3], to: [9, 1] },
                al: { x: 8.7, y: 1.6 }
              }
            }
          ]
        }
      ]
    },
    {
      baslik: "Yatay ve dikey bağımsızdır",
      kisa: "Yatayda a = 0, dikeyde a = −g: bırakılan ve yatay atılan top aynı anda düşer.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🎯",
              terim: "Projectile motion",
              tr: "eğik atış",
              tanim: "Hava direnci ihmal edilince yalnızca yerçekiminin etkisindeki iki boyutlu hareket. Yatayda aₓ = 0, dikeyde a_y = −g.",
              ornek: "Üçlük atışında top yay çizerek potaya gider."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Bırakılan (kırmızı) ve yatay atılan (mavi) top",
          xlabel: "x (m)",
          ylabel: "y (m)",
          xmax: 12,
          ymax: 7,
          xticks: [
            { v: 1, label: "1" },
            { v: 3.5, label: "3,5" },
            { v: 6, label: "6" },
            { v: 8.5, label: "8,5" },
            { v: 11, label: "11" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" }
          ],
          ogeler: [
            {
              id: "yol",
              tip: "egri",
              noktalar: [
                [1, 4.9], [2.25, 4.823], [3.5, 4.594], [4.75, 4.211], [6, 3.675], [7.25, 2.986],
                [8.5, 2.144], [9.75, 1.148], [11, 0]
              ],
              renk: 0
            },
            { id: "lv", tip: "cizgi", from: [1, 4.9], to: [1, 4.9], renk: 0, kesik: true },
            { id: "kr", tip: "nokta", x: 1, y: 4.9, renk: 2 },
            { id: "ab", tip: "nokta", x: 1, y: 4.9, renk: 0 }
          ],
          durumlar: [
            {
              metin: "İkisi aynı yükseklikten (4,9 m) aynı anda başlıyor: kırmızı serbest bırakılıyor, mavi 10 m/s ile yatay fırlatılıyor."
            },
            {
              metin: "t = 0,25 s: ikisi de aynı yükseklikte (4,59 m); mavi yatayda 2,5 m ilerlemiş.",
              set: { kr: { y: 4.594 }, ab: { x: 3.5, y: 4.594 }, lv: { to: [3.5, 4.594], from: [1, 4.594] } }
            },
            {
              metin: "t = 0,5 s: hâlâ aynı yükseklikte.",
              set: { kr: { y: 3.675 }, ab: { x: 6, y: 3.675 }, lv: { to: [6, 3.675], from: [1, 3.675] } }
            },
            {
              metin: "t = 0,75 s: kesikli çizgi yatay kalıyor; iki topun yüksekliği her an eşit.",
              set: { kr: { y: 2.144 }, ab: { x: 8.5, y: 2.144 }, lv: { to: [8.5, 2.144], from: [1, 2.144] } }
            },
            {
              metin: "t = 1 s: ikisi aynı anda yere değiyor. Yatay hız süreyi değiştirmedi.",
              set: { kr: { y: 0 }, ab: { x: 11, y: 0 }, lv: { to: [11, 0], from: [1, 0] } }
            }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "↔️", baslik: "Yatay (x)", maddeler: ["aₓ = 0, vₓ sabit", "Menzili belirler: x = vₓ · t"] },
          sag: { ikon: "↕️", baslik: "Dikey (y)", maddeler: ["a_y = −g, v_y değişir", "Uçuş süresini belirler"] },
          oyun: [
            {
              metin: "Her saniyede aynı mesafe ilerliyor (eşit aralıklı noktalar).",
              cevap: "sol",
              neden: "İvme sıfır olduğu için hız sabit: yatay hareket."
            },
            {
              metin: "Bileşeni tepe noktasında sıfır oluyor.",
              cevap: "sag",
              neden: "Tepede v_y = 0; vₓ ise sıfır olmaz."
            },
            { metin: "İvmesi −9,8 m/s².", cevap: "sag", neden: "Yerçekimi yalnızca dikeyde etkir." },
            { metin: "Atış boyunca hiç değişmiyor.", cevap: "sol", neden: "Yatayda kuvvet yok: vₓ sabit." },
            {
              metin: "Havada kalma süresini bu hareket belirler.",
              cevap: "sag",
              neden: "Yere düşme dikey harekettir."
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Yatay hız süreyi değiştirmez",
          metin: "Aynı yükseklikten biri bırakılsa, öbürü yatay fırlatılsa dikey ilk hızları da dikey ivmeleri de aynıdır. İkisi aynı anda yere düşer.",
          yanlis: "Yatay fırlatılan top daha geç ya da daha erken düşer.",
          dogru: "Süre yalnızca dikey harekete bağlıdır: ikisi aynı anda düşer."
        }
      ]
    },
    {
      baslik: "Açılı atış: tepe, uçuş süresi, menzil",
      kisa: "Başlangıç hızını bileşenlerine ayır; dikeyde tepe ve süre, yatayda menzil bulunur.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⏱️",
              terim: "Time of flight",
              tr: "uçuş süresi",
              tanim: "Cismin havada kaldığı süre; dikey harekete bakılarak bulunur. Aynı yüksekliğe inişte T = 2v₀ sinθ / g.",
              ornek: "20 m/s, 30°: T ≈ 2,04 s."
            },
            {
              ikon: "📏",
              terim: "Range",
              tr: "menzil",
              tanim: "Yatay mesafe: R = vₓ · T.",
              ornek: "17,3 m/s · 2,04 s ≈ 35,3 m."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "20 m/s, 30° yukarı atış",
          durum: "Top yerden 20 m/s hızla, yatayla 30° yukarı atılıyor (g = 9,8 m/s²). Tepeye varma süresi, en büyük yükseklik, uçuş süresi ve menzil nedir?",
          adimlar: [
            "Bileşenler: v₀ₓ = 20 cos30° ≈ 17,3 m/s; v₀y = 20 sin30° = 10 m/s.",
            "Tepede v_y = 0: t = 10/9,8 ≈ 1,02 s.",
            "H = v₀y²/(2g) = 100/19,6 ≈ 5,10 m.",
            "Aynı yüksekliğe inişte T = 2 · 1,02 ≈ 2,04 s.",
            "R = vₓ T ≈ 17,3 · 2,04 ≈ 35,3 m."
          ],
          sonuc: "t_tepe ≈ 1,02 s; H ≈ 5,10 m; T ≈ 2,04 s; R ≈ 35,3 m"
        },
        {
          tip: "grafik",
          baslik: "Eğik atış yörüngesi (v₀ = 20 m/s, 30°)",
          xlabel: "x (m)",
          ylabel: "y (m)",
          xmax: 36,
          ymax: 8,
          xticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            {
              id: "yol",
              tip: "egri",
              noktalar: [
                [0, 0], [2.209, 1.196], [4.418, 2.232], [6.628, 3.109], [8.837, 3.827], [11.046, 4.385],
                [13.255, 4.783], [15.465, 5.022], [17.674, 5.102], [19.883, 5.022], [22.092, 4.783], [24.302, 4.385],
                [26.511, 3.827], [28.72, 3.109], [30.929, 2.232], [33.139, 1.196], [35.348, 0]
              ],
              renk: 0
            },
            { id: "l0", tip: "yazi", x: 2, y: 7.1, metin: "v₀ = 20 m/s, 30°", hiza: "start" },
            { id: "lx", tip: "yazi", x: 29, y: 6.3, metin: "vₓ = 17,3 m/s", gizli: true },
            { id: "ly", tip: "yazi", x: 29, y: 5.5, metin: "v_y = 10 m/s", gizli: true },
            {
              id: "tp",
              tip: "nokta",
              x: 17.674,
              y: 5.102,
              renk: 3,
              etiket: "tepe 5,10 m",
              kilavuz: true,
              gizli: true
            },
            { id: "ln", tip: "nokta", x: 35.348, y: 0, renk: 1, etiket: "R = 35,3 m", gizli: true }
          ],
          durumlar: [
            {
              metin: "Top yerden 20 m/s hızla, yatayla 30° yukarı atılıyor. Yörünge bir parabol (dikey eksen yatay eksenden büyütülmüş)."
            },
            {
              metin: "Hızı bileşenlerine ayır: vₓ = 20 cos30° ≈ 17,3 m/s (hiç değişmez), v_y = 20 sin30° = 10 m/s (başlangıç).",
              goster: ["lx", "ly"]
            },
            {
              metin: "Tepede v_y = 0: t = 10/9,8 ≈ 1,02 s. Yükseklik H = 10²/(2 · 9,8) ≈ 5,10 m; yatay konum yaklaşık 17,7 m.",
              goster: ["tp"]
            },
            {
              metin: "Aynı yüksekliğe inişte uçuş süresi T = 2 · 1,02 ≈ 2,04 s. Menzil R = vₓ T ≈ 17,3 · 2,04 ≈ 35,3 m.",
              goster: ["ln"]
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Tepede hız sıfır mı? Menzil formülü",
          metin: "Tepede yalnızca dikey bileşen sıfırdır; yatay hız 17,3 m/s olarak sürer, yani sürat sıfır değildir. R = v₀² sin2θ / g formülü yalnızca aynı yüksekliğe inişte geçerli; terastan atışta kullanma.",
          yanlis: "Tepede hız sıfırdır; menzil formülü her atışta geçerlidir.",
          dogru: "Tepede v_y = 0, vₓ ≠ 0. Formülü ezberleme; yatay ve dikeyi ayrı yazıp türet."
        }
      ]
    },
    {
      baslik: "AP örneği: terastan yatay atış",
      kisa: "Dikeyde v₀y = 0'dan süreyi, yatayda sabit hızla mesafeyi bul.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "20 m terastan 15 m/s",
          durum: "20 m yüksekliğindeki okul terasından bir top yatay olarak 15 m/s ile atılıyor. Uçuş süresi, yatay mesafe ve çarpma sürati nedir?",
          adimlar: [
            "Dikey (v₀y = 0): 20 = ½(9,8)t² ⇒ t = √(40/9,8) ≈ 2,02 s.",
            "Yatay (aₓ = 0): x = 15 · 2,02 ≈ 30,3 m.",
            "Çarpmada v_y = −9,8 · 2,02 ≈ −19,8 m/s, vₓ = 15 m/s.",
            "Sürat = √(15² + 19,8²) ≈ 24,8 m/s; yatayın altında tan⁻¹(19,8/15) ≈ 52,9°."
          ],
          sonuc: "t ≈ 2,02 s; x ≈ 30,3 m; sürat ≈ 24,8 m/s, yatayın yaklaşık 52,9° altında"
        },
        {
          tip: "grafik",
          baslik: "20 m terastan yatay 15 m/s",
          xlabel: "x (m)",
          ylabel: "y (m)",
          xmax: 36,
          ymax: 22,
          xticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }],
          yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }, { v: 15, label: "15" }, { v: 20, label: "20" }],
          ogeler: [
            { id: "bina", tip: "alan", noktalar: [[0, 0], [0, 20], [2, 20], [2, 0]], renk: 3 },
            {
              id: "yol",
              tip: "egri",
              noktalar: [
                [0, 20], [2.525, 19.861], [5.051, 19.444], [7.576, 18.75], [10.102, 17.778], [12.627, 16.528],
                [15.152, 15], [17.678, 13.194], [20.203, 11.111], [22.728, 8.75], [25.254, 6.111], [27.779, 3.194],
                [30.305, 0]
              ],
              renk: 0
            },
            { id: "s", tip: "nokta", x: 0, y: 20, renk: 1, etiket: "y₀ = 20 m" },
            { id: "e", tip: "nokta", x: 30.305, y: 0, renk: 2, etiket: "30,3 m", kilavuz: true, gizli: true },
            { id: "R", tip: "ok", from: [24, 7.9], to: [30, 0], renk: 1, gizli: true },
            { id: "Ox", tip: "ok", from: [24, 7.9], to: [30, 7.9], renk: 0, gizli: true },
            { id: "Oy", tip: "ok", from: [30, 7.9], to: [30, 0], renk: 2, gizli: true },
            { id: "lx", tip: "yazi", x: 27.3, y: 8.7, metin: "vₓ = 15", gizli: true },
            { id: "ly", tip: "yazi", x: 33.3, y: 4, metin: "−19,8", gizli: true },
            { id: "lr", tip: "yazi", x: 20.5, y: 4.6, metin: "24,8 m/s", gizli: true }
          ],
          durumlar: [
            { metin: "Top 20 m yüksekliğindeki terastan yatay olarak 15 m/s ile atılıyor. Dikeyde ilk hız sıfır." },
            { metin: "Dikeyde 20 = ½(9,8)t² ⇒ t ≈ 2,02 s. Yatayda x = 15 · 2,02 ≈ 30,3 m.", goster: ["e"] },
            {
              metin: "Çarpma anında vₓ = 15 m/s (değişmedi), v_y = −9,8 · 2,02 ≈ −19,8 m/s. Sürat √(15² + 19,8²) ≈ 24,8 m/s, yatayın yaklaşık 52,9° altında.",
              goster: ["R", "Ox", "Oy", "lx", "ly", "lr"]
            }
          ]
        }
      ]
    },
    {
      baslik: "Göreli hız: referans çerçevesi",
      kisa: "Hız kime göre ölçtüğüne bağlıdır: v_AC = v_AB + v_BC.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "👀",
              terim: "Reference frame",
              tr: "referans çerçevesi",
              tanim: "Hareketin ölçüldüğü gözlemci ya da koordinat sistemi: yer, tren, nehir…",
              ornek: "Perondaki arkadaşın ve trendeki sen farklı çerçevelerdesiniz."
            },
            {
              ikon: "🚆",
              terim: "Relative velocity",
              tr: "göreli hız",
              tanim: "Bir cismin başka bir çerçeveye göre hızı. A'nın C'ye göre hızı: v_AC = v_AB + v_BC.",
              ornek: "Tren yere göre 20 m/s, sen trene göre 1,5 m/s ⇒ yere göre 21,5 m/s."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "v_AC", alt: "A'nın C'ye göre hızı" },
            "=",
            { t: "v_AB", alt: "A'nın B'ye göre" },
            "+",
            { t: "v_BC", alt: "B'nin C'ye göre" }
          ],
          aciklama: "Alt indisler zincir gibi bağlanır: B iki kez geçip sadeleşir. Vektör toplamıdır; tek boyutta işaretle yaparsın."
        },
        {
          tip: "ornek",
          baslik: "Marmaray'da yürümek",
          durum: "Marmaray yere göre 20 m/s ile gidiyor. İçinde trene göre ileri doğru 1,5 m/s ile yürüyorsun. Perondaki arkadaşına göre hızın nedir?",
          adimlar: [
            "Sen = A, tren = B, yer = C: v_AB = +1,5 m/s, v_BC = +20 m/s.",
            "v_AC = v_AB + v_BC = 1,5 + 20 = 21,5 m/s.",
            "Geri doğru yürüseydin v_AB = −1,5 olurdu ve v_AC = 18,5 m/s."
          ],
          sonuc: "Arkadaşına göre 21,5 m/s ileri"
        }
      ]
    },
    {
      baslik: "İki boyutta göreli hız: vapur",
      kisa: "Hızlar vektör olarak toplanır; karşıya geçiş süresi akıntıdan etkilenmez.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Hızlar vektör olarak toplanır",
          xlabel: "doğu (m/s)",
          ylabel: "kuzey (m/s)",
          xmax: 6,
          ymax: 6,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          yticks: [{ v: 0, label: "-3" }, { v: 3, label: "0" }, { v: 6, label: "3" }],
          ogeler: [
            { id: "zero", tip: "cizgi", from: [0, 3], to: [6, 3], renk: 0, kesik: true },
            { id: "A", tip: "ok", from: [0, 3], to: [4, 3], renk: 0, gizli: true },
            { id: "ta", tip: "yazi", x: 2, y: 3.5, metin: "4 m/s doğu", gizli: true },
            { id: "B", tip: "ok", from: [4, 3], to: [4, 0], renk: 2, gizli: true },
            { id: "tb", tip: "yazi", x: 4.9, y: 1.5, metin: "3 m/s güney", gizli: true },
            { id: "Rr", tip: "ok", from: [0, 3], to: [4, 0], renk: 1, gizli: true },
            { id: "tr", tip: "yazi", x: 1, y: 0.7, metin: "5 m/s", gizli: true },
            { id: "an", tip: "yazi", x: 2.4, y: 2.3, metin: "36,9°", gizli: true }
          ],
          durumlar: [
            { metin: "Eksenler hız bileşenleri. Vapurun suya göre hızı: 4 m/s doğuya.", goster: ["A", "ta"] },
            {
              metin: "Akıntının yere göre hızı: 3 m/s güneye. İkinci vektörü birincinin ucuna ekle.",
              goster: ["B", "tb"]
            },
            {
              metin: "Bileşke (vapurun yere göre hızı): √(4² + 3²) = 5 m/s, doğunun 36,9° güneyi.",
              goster: ["Rr", "tr", "an"]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Boğaz'ı geçmek",
          durum: "Boğaz o noktada 1200 m genişliğinde. Vapur suya göre doğuya 4 m/s gidiyor, akıntı güneye 3 m/s. Geçiş süresi, güneye kayma ve yere göre hız nedir?",
          adimlar: [
            "Doğu bileşeni 4 m/s'dir; akıntı vapuru doğuya itmez.",
            "Süre: t = 1200/4 = 300 s. Akıntı yalnızca güneye taşır, süreyi etkilemez.",
            "Kayma: Δy = 3 · 300 = 900 m güneye.",
            "Yere göre hız: √(4² + 3²) = 5 m/s, doğunun 36,9° güneyi (yol: 5 · 300 = 1500 m)."
          ],
          sonuc: "300 s; 900 m güneye kayar; yere göre 5 m/s"
        }
      ]
    },
    {
      baslik: "Sınav ne ister?",
      kisa: "Yatay ve dikeyi ayrı yaz, sembolle türet; hızlar vektör olarak toplanır.",
      bloklar: [
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✅",
              baslik: "Yatay ve dikey ayrımı",
              metin: "Hareketi bileşenlerine ayırıp her birine tek boyutlu denklemleri uygula."
            },
            {
              ikon: "✅",
              baslik: "Sembolik türetme",
              metin: "Örnek: uçuş süresi T = 2v₀ sinθ / g (yalnızca aynı yüksekliğe iniş)."
            },
            { ikon: "✅", baslik: "Konum vektörü verilirse", metin: "Bileşen bileşen türev al: v = dr/dt, a = dv/dt." },
            {
              ikon: "✅",
              baslik: "Göreli hız",
              metin: "Alt indisleri zincirle: v_AC = v_AB + v_BC; vektör olarak topla."
            },
            { ikon: "✍️", baslik: "İki sütun", metin: "x ve y'yi ayrı sütunlarda yaz; ortak olan yalnızca t." },
            { ikon: "➖", baslik: "Gerekmez", metin: "Hava dirençli atış ve menzil formülü ezberi." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Dik hızları cebirsel toplamak",
          metin: "Doğuya 4 m/s ve güneye 3 m/s birbirine dik; toplamları 7 değil, Pisagor ile 5 m/s'dir.",
          yanlis: "Vapurun yere göre hızı 4 + 3 = 7 m/s.",
          dogru: "Dik bileşenler vektör toplanır: √(4² + 3²) = 5 m/s."
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
            "İki boyutlu hareket, birbirinden bağımsız iki tek boyutlu hareket gibidir; ortak olan zamandır.",
            "Konum, hız ve ivme vektörleri bileşen bileşen türevlenir: v = dr/dt, a = dv/dt.",
            "*Projectile motion*: yatayda aₓ = 0 (vₓ sabit), dikeyde a_y = −g.",
            "Tepede yalnızca v_y = 0; vₓ ≠ 0. 20 m/s, 30° atışta T ≈ 2,04 s, H ≈ 5,10 m, R ≈ 35,3 m.",
            "Menzil formülü yalnızca aynı yüksekliğe iniş içindir; terastan atışta yatay ve dikeyi ayrı çöz (2,02 s, 30,3 m, 24,8 m/s).",
            "Bırakılan ve yatay atılan top aynı anda yere düşer.",
            "*Relative velocity*: v_AC = v_AB + v_BC; vektör toplamıdır (vapur: 5 m/s, 36,9°).",
            "Karşıya geçiş süresini dik bileşen belirler; akıntı süreyi değiştirmez (300 s, 900 m kayma)."
          ]
        }
      ]
    }
  ]
};
