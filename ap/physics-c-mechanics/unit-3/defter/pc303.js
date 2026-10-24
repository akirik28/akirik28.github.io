/* Kitpath not defteri · pc303 · 3.4 Enerjinin Korunumu
   Kaynak: kaynak/ced-physc.md (Topic 3.4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc303",
  amac: "Bu konu enerjinin korunumunu anlatıyor: enerji hiç yok olmaz, yalnızca türü değişir ya da sistemin dışına geçer. Sistem seçmeyi, korunum denklemini kurmayı ve enerji–konum grafiğini okumayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Sistem seçimi: enerji nerede sabit?",
      kisa: "Enerji hep korunur; sabit kalıp kalmaması seçtiğin sisteme bağlıdır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⚙️",
              terim: "Mechanical energy",
              tr: "mekanik enerji",
              tanim: "Sistemin kinetik ve potansiyel enerjilerinin toplamı: E = K + U.",
              ornek: "Düşen top–Dünya sisteminde yükseklik azalırken U azalır, K artar; toplam sabit."
            },
            {
              ikon: "🔒",
              terim: "Conserved / constant",
              tr: "korunur / sabit",
              tanim: "Enerji her zaman korunur, yok olmaz. Seçtiğin sistemde sabit olması ise dışarıyla iş alışverişi olup olmadığına bağlıdır.",
              ornek: "Yalnız top sisteminde yerçekimi dışarıdan iş yapar, E değişir; top–Dünya sisteminde E sabittir."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Düşen 1 kg'lık top: top–Dünya sisteminin enerji çubukları",
          xlabel: "",
          ylabel: "E (J)",
          xmax: 12,
          ymax: 125,
          xticks: [
            { v: 2, label: "U_g" },
            { v: 5.5, label: "K" },
            { v: 9, label: "E = K + U" }
          ],
          yticks: [
            { v: 25, label: "25" },
            { v: 50, label: "50" },
            { v: 75, label: "75" },
            { v: 100, label: "100" }
          ],
          ogeler: [
            {
              id: "bu",
              tip: "alan",
              noktalar: [[1, 0], [3, 0], [3, 98], [1, 98]],
              renk: 2
            },
            {
              id: "bk",
              tip: "alan",
              noktalar: [[4.5, 0], [6.5, 0], [6.5, 0], [4.5, 0]],
              renk: 0
            },
            {
              id: "be",
              tip: "alan",
              noktalar: [[8, 0], [10, 0], [10, 98], [8, 98]],
              renk: 1
            },
            { id: "vu", tip: "yazi", x: 2, y: 104, metin: "98 J" },
            { id: "vk", tip: "yazi", x: 5.5, y: 6, metin: "0 J" },
            { id: "ve", tip: "yazi", x: 9, y: 104, metin: "98 J" },
            { id: "ht", tip: "yazi", x: 6, y: 118, metin: "h = 10 m" }
          ],
          durumlar: [
            {
              metin: "Top 10 m yükseklikten bırakılıyor. Sistem: top + Dünya. U_g = mgh = 98 J, K = 0, toplam E = 98 J."
            },
            {
              metin: "7,5 m: U_g = 73,5 J, K = 24,5 J. Toplam hâlâ 98 J.",
              set: {
                bu: {
                  noktalar: [[1, 0], [3, 0], [3, 73.5], [1, 73.5]]
                },
                bk: {
                  noktalar: [[4.5, 0], [6.5, 0], [6.5, 24.5], [4.5, 24.5]]
                },
                vu: { y: 79.5, metin: "73,5 J" },
                vk: { y: 30.5, metin: "24,5 J" },
                ht: { metin: "h = 7,5 m" }
              }
            },
            {
              metin: "5 m: enerji yarı yarıya U_g ve K. Toplam 98 J.",
              set: {
                bu: {
                  noktalar: [[1, 0], [3, 0], [3, 49], [1, 49]]
                },
                bk: {
                  noktalar: [[4.5, 0], [6.5, 0], [6.5, 49], [4.5, 49]]
                },
                vu: { y: 55, metin: "49 J" },
                vk: { y: 55, metin: "49 J" },
                ht: { metin: "h = 5 m" }
              }
            },
            {
              metin: "2,5 m: U_g = 24,5 J, K = 73,5 J.",
              set: {
                bu: {
                  noktalar: [[1, 0], [3, 0], [3, 24.5], [1, 24.5]]
                },
                bk: {
                  noktalar: [[4.5, 0], [6.5, 0], [6.5, 73.5], [4.5, 73.5]]
                },
                vu: { y: 30.5, metin: "24,5 J" },
                vk: { y: 79.5, metin: "73,5 J" },
                ht: { metin: "h = 2,5 m" }
              }
            },
            {
              metin: "Yere varırken U_g = 0, K = 98 J ⇒ v = √(2K/m) = 14 m/s. Sınavda böyle yaz: *Taking the ball and Earth as the system, mechanical energy is constant because only gravity, a conservative force, does work.*",
              set: {
                bu: {
                  noktalar: [[1, 0], [3, 0], [3, 0], [1, 0]]
                },
                bk: {
                  noktalar: [[4.5, 0], [6.5, 0], [6.5, 98], [4.5, 98]]
                },
                vu: { y: 6, metin: "0 J" },
                vk: { y: 104, metin: "98 J" },
                ht: { metin: "h = 0 m" }
              }
            }
          ]
        }
      ]
    },
    {
      baslik: "Korunum denklemi",
      kisa: "İlk ve son durumdaki bütün enerji türlerini yaz: K_i + U_i + W_nc = K_f + U_f.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "K_i + U_i + W_nc", alt: "başlangıç + dışarıdan ya da sürtünmeyle gelen iş" },
            "=",
            { t: "K_f + U_f", alt: "son durum" }
          ],
          aciklama: "W_nc dışarıdan itme ise artı, sürtünme ise eksidir. Hiçbiri yoksa mekanik enerji sabittir. Sınavda böyle yaz: *There is no friction and no external work, so K_i + U_i = K_f + U_f.*"
        },
        {
          tip: "ornek",
          baslik: "Pürüzlü rampada kaybolan enerji",
          durum: "m = 2 kg'lık blok h = 5 m yükseklikteki rampanın tepesinden durgun bırakılıyor ve altta 8 m/s hıza ulaşıyor (g = 9,8 m/s²). Sürtünme ne kadar mekanik enerji aldı?",
          adimlar: [
            "Başlangıç: K_i = 0, U_i = mgh = 2 × 9,8 × 5 = 98 J.", "Son: U_f = 0, K_f = ½ × 2 × 8² = 64 J.",
            "98 + W_f = 64 ⇒ W_f = −34 J. Mekanik enerjiden 34 J ısıya gitti.",
            "Karşılaştır: sürtünmesiz olsaydı v = √(2gh) = √98 ≈ 9,9 m/s olurdu. Rampa 10 m uzunluğundaysa f = 34/10 = 3,4 N."
          ],
          sonuc: "W_f = −34 J (mekanik enerji ısıya dönüştü)"
        },
        {
          tip: "tuzak",
          baslik: "Eksik enerji terimi",
          metin: "İlk ve son durumdaki bütün enerji türlerini yaz: K, yerçekimi U'su ve her yay için ayrı U_s. Önce sözle say, sonra denklemi kur.",
          yanlis: "İki yay için tek terim: ½k(x₂ − x₁)².",
          dogru: "Yay A ve yay B ayrı ayrı: ½k_A x_A² + ½k_B x_B²."
        }
      ]
    },
    {
      baslik: "Enerji–konum grafiği (E–x)",
      kisa: "Toplam E yatay bir çizgidir; K = E − U, eğri ile çizgi arasındaki boşluktur.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "k = 100 N/m'lik yay, E = 8 J (eksen kaydırıldı: x = 0 ortada)",
          xlabel: "x (m)",
          ylabel: "enerji (J)",
          xmax: 10,
          ymax: 14,
          xticks: [
            { v: 1, label: "−0,4" },
            { v: 3, label: "−0,2" },
            { v: 5, label: "0" },
            { v: 7, label: "0,2" },
            { v: 9, label: "0,4" }
          ],
          yticks: [
            { v: 4, label: "4" },
            { v: 8, label: "8" },
            { v: 12, label: "12" }
          ],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 12.5], [0.5, 10.125], [1, 8], [1.5, 6.125], [2, 4.5], [2.5, 3.125], [3, 2], [3.5, 1.125],
                [4, 0.5], [4.5, 0.125], [5, 0], [5.5, 0.125], [6, 0.5], [6.5, 1.125], [7, 2], [7.5, 3.125],
                [8, 4.5], [8.5, 6.125], [9, 8], [9.5, 10.125], [10, 12.5]
              ],
              renk: 0,
              etiket: "U_s"
            },
            { id: "E", tip: "cizgi", from: [0, 8], to: [10, 8], renk: 1, kesik: true, etiket: "E" },
            { id: "k0", tip: "ok", from: [5, 0.1], to: [5, 8], renk: 2, gizli: true },
            { id: "t0", tip: "yazi", x: 5.3, y: 4, metin: "K = 8 J", hiza: "start", gizli: true },
            { id: "p2", tip: "nokta", x: 7, y: 2, renk: 3, etiket: "U = 2 J", gizli: true },
            { id: "k2", tip: "ok", from: [7, 2], to: [7, 8], renk: 2, gizli: true },
            { id: "t2", tip: "yazi", x: 7.3, y: 5.2, metin: "K = 6 J", hiza: "start", gizli: true },
            { id: "d1", tip: "nokta", x: 1, y: 8, renk: 3, etiket: "dönüş", gizli: true },
            { id: "d2", tip: "nokta", x: 9, y: 8, renk: 3, etiket: "dönüş", gizli: true }
          ],
          durumlar: [
            { metin: "Parabol U_s = ½kx² = 50x²; toplam enerji E = 8 J yatay çizgi." },
            { metin: "x = 0'da U = 0: bütün enerji kinetik, K = 8 J.", goster: ["k0", "t0"] },
            { metin: "x = 0,2 m'de U = 2 J; boşluk K = E − U = 6 J.", goster: ["p2", "k2", "t2"] },
            {
              metin: "x = ±0,4 m'de U = E, K = 0: ==dönüş noktası==. Parçacık ötesine geçemez (K < 0 olamaz). Sınavda böyle yaz: *At the turning points, K = 0 and all of the energy is potential.*",
              goster: ["d1", "d2"]
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Aynı grafik sayılarla",
          head: ["x (m)", "U_s (J)", "K (J)", "E (J)"],
          rows: [
            ["−0,4", "8", "0", "8"], ["−0,2", "2", "6", "8"], ["0", "0", "8", "8"], ["0,2", "2", "6", "8"],
            ["0,4", "8", "0", "8"]
          ],
          vurgu: 2,
          not: "U ve K her konumda toplam 8 J'ü paylaşır."
        }
      ]
    },
    {
      baslik: "Dışarıdan iş ve sürtünme",
      kisa: "İş sıfırsa ve iç sürtünme yoksa mekanik enerji sabittir; yoksa enerji aktarılır.",
      bloklar: [
        {
          tip: "ikili",
          sol: {
            ikon: "🔒",
            baslik: "Mekanik enerji sabit",
            maddeler: ["Dışarıdan net iş yok", "İçeride sürtünme yok"]
          },
          sag: {
            ikon: "🔄",
            baslik: "Mekanik enerji değişir",
            maddeler: ["Dış iş var ya da", "İçeride sürtünme enerjiyi ısıya çevirir"]
          },
          oyun: [
            {
              metin: "Sürtünmesiz rampada kayan blok; sistem = blok + Dünya.",
              cevap: "sol",
              neden: "Yerçekimi iç kuvvet, normal kuvvet iş yapmaz: E sabit."
            },
            {
              metin: "Aynı rampada kayan blok; sistem = yalnız blok.",
              cevap: "sag",
              neden: "Yerçekimi dışarıdan iş yapar: bloğun E'si değişir."
            },
            {
              metin: "Kaba yüzeyde kayan blok; sistem = blok + Dünya.",
              cevap: "sag",
              neden: "Sürtünme mekanik enerjiyi ısıya çevirir: E azalır."
            },
            {
              metin: "Bir kişi kutuyu yukarı kaldırıyor; sistem = kutu + Dünya.",
              cevap: "sag",
              neden: "Kişinin dış işi sisteme enerji ekler."
            },
            {
              metin: "Sürtünmesiz masada yaya bağlı blok; sistem = blok + yay.",
              cevap: "sol",
              neden: "Yalnız yay kuvveti çalışıyor, iç kuvvet: E sabit."
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Enerji kaybolmaz",
          metin: "Sürtünmede mekanik enerji azalır ama toplam enerji korunur: ısıya dönüşür. İdeal yuvarlanmadaki statik sürtünme ise enerji harcamaz; onu enerji denkleminde değil ΣF = ma ile bul.",
          yanlis: "Sürtünme varsa enerji korunmaz.",
          dogru: "Toplam enerji korunur; mekanik enerji ısıya geçti (sistemi yüzeyi de katarak seç)."
        },
        {
          tip: "not",
          metin: "Sınavda böyle yaz: *Energy is conserved, but the mechanical energy of the block–Earth system decreases because friction transfers energy to thermal energy.*"
        }
      ]
    },
    {
      baslik: "Deney: v² – h grafiğinden g",
      kisa: "Serbest düşmede v² = 2gh: v²–h grafiği doğrudur ve eğimi 2g'dir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "mgh", alt: "ilk U_g" },
            "=",
            { t: "½mv²", alt: "son K" },
            "⇒",
            { t: "v² = 2g · h", alt: "y = (eğim) · x" }
          ],
          aciklama: "Kütle iki yanda da sadeleşir. v²'yi y, h'yi x eksenine koyarsan eğim 2g olur."
        },
        {
          tip: "grafik",
          baslik: "Beş bırakma: v² (m²/s²) ve h (m)",
          xlabel: "h (m)",
          ylabel: "v² (m²/s²)",
          xmax: 1.4,
          ymax: 24,
          xticks: [
            { v: 0.2, label: "0,2" },
            { v: 0.4, label: "0,4" },
            { v: 0.6, label: "0,6" },
            { v: 0.8, label: "0,8" },
            { v: 1, label: "1" },
            { v: 1.2, label: "1,2" }
          ],
          yticks: [
            { v: 5, label: "5" },
            { v: 10, label: "10" },
            { v: 15, label: "15" },
            { v: 20, label: "20" }
          ],
          ogeler: [
            { id: "d0", tip: "nokta", x: 0.2, y: 3.92, renk: 0, gizli: false },
            { id: "d1", tip: "nokta", x: 0.4, y: 7.84, renk: 0, gizli: false },
            { id: "d2", tip: "nokta", x: 0.6, y: 11.76, renk: 0, gizli: false },
            { id: "d3", tip: "nokta", x: 0.8, y: 15.68, renk: 0, gizli: true },
            { id: "d4", tip: "nokta", x: 1, y: 19.6, renk: 0, gizli: true },
            { id: "fit", tip: "cizgi", from: [0, 0], to: [1.2, 23.52], renk: 1, gizli: true },
            { id: "h1", tip: "cizgi", from: [0.2, 3.92], to: [1, 3.92], renk: 3, kesik: true, gizli: true },
            { id: "h2", tip: "cizgi", from: [1, 3.92], to: [1, 19.6], renk: 3, kesik: true, gizli: true },
            { id: "t1", tip: "yazi", x: 0.6, y: 1.6, metin: "Δh = 0,8 m", gizli: true },
            { id: "t2", tip: "yazi", x: 1.03, y: 11.5, metin: "Δ(v²) = 15,68", hiza: "start", gizli: true }
          ],
          durumlar: [
            {
              metin: "Top h yüksekten bırakılıyor, sensör çarpmadan hemen önceki hızı ölçüyor. İlk üç ölçüm."
            },
            { metin: "Beş ölçümün hepsi: h arttıkça v² doğrusal artıyor.", goster: ["d3", "d4"] },
            { metin: "En iyi uyum doğrusu orijinden geçiyor (cetvelle çizilir).", goster: ["fit"] },
            {
              metin: "Eğimi çizgi üzerindeki iki noktadan hesapla: (19,6 − 3,92)/(1,0 − 0,2) = 19,6 m/s². Eğim 2g ⇒ g = 9,8 m/s². Sınavda böyle yaz: *The slope of the best-fit line equals 2g.*",
              goster: ["h1", "h2", "t1", "t2"]
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
            "Mekanik enerji E = K + U. Enerji her etkileşimde korunur; sistemde sabit olup olmadığı sistem seçimine bağlıdır.",
            "Top–Dünya sisteminde yerçekimi iç kuvvettir ve E sabittir; yalnız top sisteminde yerçekimi dış iş yapar, E değişir.",
            "Denklem: K_i + U_i + W_nc = K_f + U_f. Bütün enerji türlerini (her yay ayrı) önce sözle say.",
            "Sürtünme: W_nc = −f × yol; mekanik enerji ısıya dönüşür, toplam enerji korunur (2 kg, 5 m, 8 m/s ⇒ 34 J).",
            "E–x grafiğinde E yatay çizgidir, K = E − U; K = 0 olan yer dönüş noktasıdır.",
            "Sürtünmesiz rampada h = 5 m için v = √(2gh) ≈ 9,9 m/s; gerçekte 8 m/s ise fark ısıya gitmiştir.",
            "Kaymadan yuvarlanmadaki statik sürtünme enerji harcamaz; onu ΣF = ma ile bul.",
            "Serbest düşmede v² = 2gh: v²–h grafiğinin eğimi 2g'dir."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A ball is dropped from rest from a height of 5 m. Neglecting air resistance and using g = 10 m/s², what is its speed just before it hits the ground?",
      opts: ["5 m/s", "7 m/s", "10 m/s", "25 m/s"],
      a: 2,
      why: "mgh = ½mv² ⇒ v = √(2gh) = √(2 × 10 × 5) = 10 m/s. 7 m/s 2 çarpanını unutmaktır (√(gh)); 25 m/s ½gh hesaplamaktır (½ × 10 × 5); karekök almayı unutan 100 bulurdu."
    },
    {
      q: "A 1.0 kg particle moves along the x-axis with potential energy U(x) shown. Its total mechanical energy is 6 J, shown by the dashed line. What is the particle's speed at x = 2 m?",
      fig: {
        type: "graph",
        xlabel: "x (m)",
        ylabel: "energy (J)",
        xmax: 9,
        ymax: 9,
        lines: [
          { from: [0, 8], to: [4, 0] },
          { from: [4, 0], to: [8, 8], label: "U" },
          { from: [0, 6], to: [8, 6], dash: true, label: "E" }
        ],
        xticks: [
          { v: 2, label: "2" },
          { v: 4, label: "4" },
          { v: 6, label: "6" },
          { v: 8, label: "8" }
        ],
        yticks: [
          { v: 2, label: "2" },
          { v: 4, label: "4" },
          { v: 6, label: "6" },
          { v: 8, label: "8" }
        ],
        caption: "Potential energy U(x) and total mechanical energy E"
      },
      opts: ["1.4 m/s", "2.0 m/s", "2.8 m/s", "3.5 m/s"],
      a: 1,
      why: "x = 2 m'de U = 4 J (eğim −2 J/m). K = E − U = 6 − 4 = 2 J ⇒ v = √(2K/m) = 2 m/s. 3,5 m/s K = E almaktır; 2,8 m/s K = U almaktır; 1,4 m/s v = √(K/m) almaktır (2 çarpanı unutulmuş)."
    },
    {
      q: "A block slides down a frictionless incline. For which system is the mechanical energy constant during the slide?",
      opts: [
        "The block alone, because gravity is the only force doing work.",
        "The block and the incline only, because the normal force does no work.",
        "The block and Earth, because gravity is then an internal force and the normal force does no work.",
        "None; mechanical energy cannot be constant when the block speeds up."
      ],
      a: 2,
      why: "Blok–Dünya sisteminde yerçekimi iç kuvvettir (U_g var), normal kuvvet harekete diktir ve iş yapmaz: E sabit. Yalnız blok sisteminde yerçekimi dışarıdan iş yapar ve K değişir."
    },
    {
      q: "A 1.0 kg block slides from rest down a rough incline, starting 2.0 m above the bottom, and reaches the bottom at 5.0 m/s. Using g = 9.8 m/s², how much mechanical energy was converted to thermal energy?",
      opts: ["7.1 J", "12.5 J", "19.6 J", "32.1 J"],
      a: 0,
      why: "U_i = mgh = 1 × 9,8 × 2 = 19,6 J, K_f = ½ × 1 × 25 = 12,5 J. Isıya giden = 19,6 − 12,5 = 7,1 J. 12,5 J yalnız son K'dir; 32,1 J ikisini toplamaktır."
    },
    {
      q: "A student releases a ball from rest at several heights h and measures its speed v just before impact. The data are in the table. Which value of g does the slope of a v² versus h graph give?",
      fig: {
        type: "table",
        head: ["h (m)", "v² (m²/s²)"],
        rows: [["0.10", "1.96"], ["0.20", "3.92"], ["0.30", "5.88"], ["0.40", "7.84"]],
        caption: "Free-fall data"
      },
      opts: ["19.6 m/s²", "4.9 m/s²", "39.2 m/s²", "9.8 m/s²"],
      a: 3,
      why: "v² = 2gh olduğundan eğim 2g'dir. Eğim = (7,84 − 1,96)/(0,40 − 0,10) = 19,6 m/s², dolayısıyla g = 19,6/2 = 9,8 m/s². 19,6 eğimin kendisini g sanmaktır."
    }
  ]
};
