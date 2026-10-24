/* Kitpath not defteri · cb109 · 1.15 Sonsuzda Limit ve Yatay Asimptotlar
   Kaynak: ap-videolar/src/episodes/cb109 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb109",
  amac: "Bu konu x sonsuza giderken fonksiyonun nereye yaklaştığını (*end behavior*, uç davranış) ve grafikteki izi olan *horizontal asymptote*'u (yatay asimptot) anlatıyor. Rasyonel, kökli, üstel fonksiyonlarda ve büyüme hızı yarışında uç davranışı bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Sonsuzda limit ve yatay asimptot",
      kisa: "x sonsuza giderken f(x) b'ye yaklaşıyorsa y = b yatay asimptottur.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "🔭", terim: "Limit at infinity", tr: "sonsuzda limit", tanim: "x → +∞ ya da x → −∞ iken f(x)'in yaklaştığı değer.", ornek: "x → ∞ iken 1/x → 0: x = 10'da 0,1; x = 1000'de 0,001." },
            { ikon: "🏁", terim: "End behavior", tr: "uç davranış", tanim: "x sonsuza giderken fonksiyonun ne yaptığı: bir sayıya yaklaşır, sonsuza kaçar ya da salınır.", ornek: "Soğuyan kahve oda sıcaklığına yaklaşır." },
            { ikon: "➖", terim: "Horizontal asymptote", tr: "yatay asimptot", tanim: "x → +∞ veya x → −∞ iken f(x) → b ise y = b. Asimptot yalnızca uçlarda ne olduğunu söyler.", ornek: "T(t) = 22 + 68e^(−0,1t) için y = 22." }
          ]
        },
        {
          tip: "grafik",
          baslik: "☕ Soğuyan kahve: T(t) = 22 + 68e^(−0,1t)",
          xlabel: "t (dk)",
          ylabel: "T (°C)",
          xmax: 8,
          ymax: 10,
          xticks: [
            { v: 2, label: "10" },
            { v: 4, label: "20" },
            { v: 6, label: "30" },
            { v: 8, label: "40" }
          ],
          yticks: [
            { v: 2.2, label: "22" },
            { v: 9, label: "90" }
          ],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 9], [0.5, 7.495845324885553], [1, 6.3244084860459076], [1.5, 5.4120925586389], [2, 4.701580199965808], [2.5, 4.148232618649293], [3, 3.717285089009323], [3.5, 3.3816628154630264], [4, 3.1202799260089664], [4.5, 2.9167147270206777], [5, 2.758177990642512], [5.5, 2.6347094562056115], [6, 2.5385520649014746], [6.5, 2.46366461325571], [7, 2.405342207271766], [7.5, 2.359920671820862], [8, 2.3245463444433923]] },
            { id: "p0", tip: "nokta", x: 0, y: 9, renk: 2, etiket: "90", gizli: true },
            { id: "p5", tip: "nokta", x: 1, y: 6.324, renk: 2, etiket: "63", gizli: true },
            { id: "p10", tip: "nokta", x: 2, y: 4.702, renk: 2, etiket: "47", gizli: true },
            { id: "p20", tip: "nokta", x: 4, y: 3.12, renk: 2, etiket: "31", gizli: true },
            { id: "ha", tip: "cizgi", renk: 1, kesik: true, from: [0, 2.2], to: [8, 2.2], gizli: true },
            { id: "th", tip: "yazi", x: 6.4, y: 1.4, metin: "y = 22", gizli: true }
          ],
          durumlar: [
            { metin: "Kahve başta 90 °C. Dakikalar geçtikçe soğuyor.", goster: ["p0"] },
            { metin: "5 dk sonra 63, 10 dk sonra 47, 20 dk sonra 31 °C: eğri yatay uzanıyor.", goster: ["p5", "p10", "p20"] },
            { metin: "Oda sıcaklığı 22 °C'nin altına inmez; ona gittikçe yaklaşır: y = 22 bir ==yatay asimptot==.", goster: ["ha", "th"] }
          ]
        },
        {
          tip: "tuzak",
          metin: "Dikey asimptot yakınında patlamadır; yatay asimptot ise yalnızca uçlardaki davranışı anlatır. y = 1 + (sin x)/x eğrisi, y = 1 asimptotunu x = kπ noktalarında defalarca keser ve yine de ona yerleşir.",
          yanlis: "Grafik yatay asimptotu kesemez.",
          dogru: "Kesebilir, hatta defalarca; asimptot yalnızca uçlarda ne olduğunu belirler."
        }
      ]
    },
    {
      baslik: "Rasyonel fonksiyonlar: dereceleri karşılaştır",
      kisa: "Derece eşitse katsayı oranı, payda büyükse 0, pay büyükse asimptot yok.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "🔢", terim: "Degree", tr: "derece", tanim: "Polinomdaki en büyük kuvvet.", ornek: "3x² − 5x polinomunun derecesi 2." },
            { ikon: "🎯", terim: "Leading coefficient", tr: "baş katsayı", tanim: "En büyük kuvvetin katsayısı.", ornek: "3x² − 5x için baş katsayı 3." },
            { ikon: "👑", terim: "Dominant term", tr: "baskın terim", tanim: "Büyük |x|'te ifadeyi belirleyen, en büyük kuvvetli terim. Diğerleri onun yanında önemsizleşir.", ornek: "6x² + 1'de baskın terim 6x²." }
          ]
        },
        {
          tip: "tablo",
          baslik: "Pay derecesi n, payda derecesi m",
          head: ["Durum", "x → ±∞ iken limit", "Örnek"],
          rows: [["n = m", "baş katsayıların oranı", "3x²/6x² → 1/2"], ["n < m", "0 (y = 0 yatay asimptot)", "(4x + 7)/(x² − 3) → 0"], ["n > m", "±∞ (yatay asimptot yok)", "2x³/(x² + 1) ≈ 2x → ∞"]],
          not: "İşareti bulmak için yalnızca baş terimlere bak."
        },
        {
          tip: "ornek",
          baslik: "lim x→∞ (3x² − 5x)/(6x² + 1)",
          durum: "En büyük kuvvet x²: her terimi ona böl.",
          adimlar: ["x²'ye böl: (3 − 5/x)/(6 + 1/x²).", "x → ∞ iken 5/x ve 1/x² sıfıra gider.", "Geriye 3/6 = 1/2 kalır."],
          sonuc: "Limit 1/2, yatay asimptot y = 1/2. Kontrol: x = 10 → 0,4160; x = 100 → 0,4917; x = 1000 → 0,4992."
        },
        {
          tip: "grafik",
          baslik: "f(x) = (3x² − 5x)/(6x² + 1)",
          xlabel: "x",
          ylabel: "f(x)",
          xmax: 20,
          ymax: 8,
          xticks: [
            { v: 5, label: "5" },
            { v: 10, label: "10" },
            { v: 15, label: "15" },
            { v: 20, label: "20" }
          ],
          yticks: [
            { v: 4, label: "0" },
            { v: 6, label: "0,5" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 3, kesik: true, from: [0, 4], to: [20, 4] },
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 4], [0.1, 2.2264150943396226], [0.2, 1.161290322580645], [0.3, 0.8051948051948052], [0.4, 0.8979591836734695], [0.5, 1.2000000000000002], [0.6, 1.5696202531645564], [0.8, 2.2809917355371905], [1, 2.857142857142857], [1.5, 3.793103448275862], [2, 4.32], [3, 4.872727272727273], [4, 5.154639175257731], [5, 5.324503311258278], [6, 5.43778801843318], [8, 5.57922077922078], [10, 5.663893510815308], [12, 5.720231213872832], [14, 5.760407816482583], [16, 5.790500975927131], [18, 5.81388174807198], [20, 5.832569762598917]] },
            { id: "ha", tip: "cizgi", renk: 1, kesik: true, from: [0, 6], to: [20, 6], gizli: true },
            { id: "th", tip: "yazi", x: 3, y: 6.5, metin: "y = 1/2", gizli: true },
            { id: "p", tip: "nokta", x: 10, y: 5.664, renk: 2, etiket: "0,416", gizli: true }
          ],
          durumlar: [
            { metin: "x büyüdükçe 3x²/6x² baskın olur. (Kesikli mor çizgi: gerçek x ekseni, y = 0.)" },
            { metin: "x = 10'da 0,4160; x = 100'de 0,4917; x = 1000'de 0,4992: değerler 1/2'ye sokulur.", goster: ["p"] },
            { metin: "y = 1/2 bir ==yatay asimptot==; eğri ona asla tam değmeden yaklaşır.", goster: ["ha", "th"] }
          ]
        }
      ]
    },
    {
      baslik: "Polinomlar: yalnızca baş terim önemli",
      kisa: "Büyük |x|'te baş terim belirler; sabit olmayan polinomun yatay asimptotu olmaz.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "−x³ + 6x² + 100, x → ±∞",
          durum: "Baş terim −x³; diğerleri onun yanında önemsizleşir.",
          adimlar: ["x = 10: −x³ = −1000, 6x² = 600, sabit 100; toplam −300.", "x = 100: −x³ = −1 000 000, 6x² = 60 000; toplam −939 900. Baş terim hâlâ ezici.", "x → +∞: −x³ → −∞, limit −∞.", "x → −∞: −x³ pozitif olur, limit +∞.", "İki ucu da sonsuza kaçtığı için yatay asimptot olmaz."],
          sonuc: "lim x→∞ = −∞, lim x→−∞ = +∞; yatay asimptot yok."
        },
        {
          tip: "grafik",
          baslik: "y = −x³ + 6x² + 100",
          xlabel: "x",
          ylabel: "y",
          xmax: 18,
          ymax: 12,
          xticks: [
            { v: 0, label: "-6" },
            { v: 6, label: "0" },
            { v: 12, label: "6" }
          ],
          yticks: [
            { v: 3, label: "-300" },
            { v: 6, label: "0" },
            { v: 9, label: "300" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 3, kesik: true, from: [0, 6], to: [18, 6] },
            { id: "ey", tip: "cizgi", renk: 3, kesik: true, from: [6, 0], to: [6, 12] },
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 11.32], [0.5, 10.47875], [1, 9.75], [1.5, 9.12625], [2, 8.6], [2.5, 8.16375], [3, 7.8100000000000005], [3.5, 7.53125], [4, 7.32], [4.5, 7.16875], [5, 7.07], [5.5, 7.01625], [6, 7], [6.5, 7.01375], [7, 7.05], [7.5, 7.10125], [8, 7.16], [8.5, 7.21875], [9, 7.27], [9.5, 7.30625], [10, 7.32], [10.5, 7.30375], [11, 7.25], [11.5, 7.15125], [12, 7], [12.5, 6.78875], [13, 6.51], [13.5, 6.15625], [14, 5.72], [14.5, 5.19375], [15, 4.57], [15.5, 3.84125], [16, 3], [16.5, 2.03875], [17, 0.9500000000000002]] },
            { id: "tr", tip: "yazi", x: 13.5, y: 1.4, metin: "x → ∞: −∞", gizli: true },
            { id: "tl", tip: "yazi", x: 4.8, y: 11.4, metin: "x → −∞: +∞", gizli: true }
          ],
          durumlar: [
            { metin: "Baş terim −x³. (Kesikli mor çizgiler gerçek eksenler; y ölçeği 100'er 100'er.)" },
            { metin: "Sağ uç aşağı dalar: x → ∞ iken −x³ her şeyi ezer, limit −∞.", goster: ["tr"] },
            { metin: "Sol uç yukarı tırmanır: x → −∞ iken −x³ pozitif, limit +∞. Yatay asimptot yok.", goster: ["tl"] }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "✅", baslik: "Yatay asimptot *var*", maddeler: ["Rasyonelde n ≤ m", "x → ∞ iken sonlu bir değer"] },
          sag: { ikon: "⛔", baslik: "Yatay asimptot *yok*", maddeler: ["Rasyonelde n > m", "Sabit olmayan polinom"] },
          oyun: [
            { metin: "(4x + 7)/(x² − 3)", cevap: "sol", neden: "n < m: y = 0." },
            { metin: "2x³/(x² + 1)", cevap: "sag", neden: "n > m: yaklaşık 2x gibi büyür." },
            { metin: "−x³ + 6x² + 100", cevap: "sag", neden: "Sabit olmayan polinom: iki uç da sonsuza kaçar." },
            { metin: "(3x² − 5x)/(6x² + 1)", cevap: "sol", neden: "n = m: y = 3/6 = 1/2." },
            { metin: "(5x³ − 2x)/(1 − 2x³)", cevap: "sol", neden: "n = m: y = 5/(−2) = −5/2." }
          ]
        }
      ]
    },
    {
      baslik: "Köklü ifadeler: eksi sonsuzda işaret değişir",
      kisa: "√(x²) = |x| olduğundan x → −∞'da işaret değişir; iki farklı asimptot çıkabilir.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "lim √(9x² + 1)/(2x − 5), x → ±∞",
          durum: "Pay ve payda x ile orantılı büyür; ama kök işareti sakladığı için iki uca ayrı bak.",
          adimlar: ["x → +∞: √(9x² + 1) ≈ 3x. Bölüm 3x/(2x) = 3/2.", "x → −∞: √(x²) = |x| ve x negatifken |x| = −x. Kök ≈ −3x.", "Bölüm (−3x)/(2x) = −3/2.", "Kontrol: x = 1000 → 1,504; x = −1000 → −1,496. Ayrıca x = 5/2'de dikey asimptot var."],
          sonuc: "İki yatay asimptot: y = 3/2 ve y = −3/2."
        },
        {
          tip: "grafik",
          baslik: "y = √(9x² + 1)/(2x − 5)",
          xlabel: "x",
          ylabel: "y",
          xmax: 20,
          ymax: 8,
          xticks: [
            { v: 0, label: "-30" },
            { v: 10, label: "0" },
            { v: 20, label: "30" }
          ],
          yticks: [
            { v: 2.5, label: "-1,5" },
            { v: 4, label: "0" },
            { v: 5.5, label: "1,5" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 3, kesik: true, from: [0, 4], to: [20, 4] },
            { id: "R", tip: "egri", renk: 0, noktalar: [[20, 5.636464643347243], [19.283774774845416, 5.64803928673567], [18.601119809108727, 5.661059585877209], [17.95176207715168, 5.67576412110093], [17.335419290369327, 5.692440118922713], [16.751799158390536, 5.711435078065268], [16.200598554311735, 5.733171478093116], [15.681502566211961, 5.758165403111953], [15.19418341283418, 5.787050092085584], [14.738299195587807, 5.820605584531081], [14.313492451399362, 5.859795682373041], [13.919388460630037, 5.905813214075008], [13.555593250113239, 5.960133691087034], [13.221691211531606, 6.024575146028672], [12.91724222699056, 6.101356820533068], [12.641778152102367, 6.193138863168079], [12.3947984443486, 6.303005022031633], [12.17576462726784, 6.4343143811709975], [11.984093124126119, 6.59029104354998], [11.819145729975789, 6.7731480758228795], [11.680216519285764, 6.982500494611253], [11.566513086968385, 7.212954187857191], [11.477128150001286, 7.451335340416016], [11.410993162622214, 7.675245746428253], [11.366793489052341, 7.85587094945979], [11.342780513742293, 7.967152379056823], [11.336100581822834, 8]], gizli: true },
            { id: "h1", tip: "cizgi", renk: 1, kesik: true, from: [0, 5.5], to: [20, 5.5], gizli: true },
            { id: "t1", tip: "yazi", x: 16, y: 6.7, metin: "y = 3/2", gizli: true },
            { id: "L", tip: "egri", renk: 0, noktalar: [[0, 2.6152991479369483], [0.8765505929666352, 2.6254406352329362], [1.7120163012275522, 2.636919137333222], [2.506731266581596, 2.649972867801373], [3.261040967288069, 2.6648940695185512], [3.9753031222447865, 2.6820439992822296], [4.649888712614858, 2.7018728389230864], [5.285183142627779, 2.7249463993691756], [5.88158756662038, 2.7519822721919125], [6.439520416395662, 2.7838992217542042], [6.959419172313169, 2.8218852398318983], [7.441742434140214, 2.867491947193926], [7.886972365029757, 2.9227659310954146], [8.295617606264212, 2.99043047969462], [8.66821679511566, 3.0741305408654003], [9.005342869015303, 3.1787343202177314], [9.307608415772, 3.310573468534643], [9.575672448563425, 3.4768457822125347], [9.81024917643198, 3.677609027176437], [10.012119665033618, 3.7958445848692337], [10.182147859704427, 3.5085215482526584], [10.321303543586726, 3.004043276123602], [10.430697092918761, 2.342926904401559], [10.51163624497174, 1.5587493476646346], [10.56572991371713, 0.7683262990755377], [10.5951181382695, 0.18788959692305518], [10.603293357571106, 9.769962616701378e-15]], gizli: true },
            { id: "h2", tip: "cizgi", renk: 1, kesik: true, from: [0, 2.5], to: [20, 2.5], gizli: true },
            { id: "t2", tip: "yazi", x: 4, y: 1.5, metin: "y = −3/2", gizli: true },
            { id: "va", tip: "cizgi", renk: 2, kesik: true, from: [10.833333333333334, 0], to: [10.833333333333334, 8], gizli: true }
          ],
          durumlar: [
            { metin: "x → +∞: kök ≈ 3x, bölüm 3x/2x = 3/2. Sağ uç y = 3/2'ye yaklaşır.", goster: ["R", "h1", "t1"] },
            { metin: "x → −∞: kök ≈ −3x (|x| = −x), bölüm −3x/2x = −3/2. Sol uç y = −3/2'ye yaklaşır.", goster: ["L", "h2", "t2"] },
            { metin: "Ayrıca x = 5/2'de payda sıfır: dikey asimptot. (Yatay eksen 3'er 3'er ölçeklidir.)", goster: ["va"] }
          ]
        },
        {
          tip: "tuzak",
          metin: "Karekök her zaman pozitiftir. Bu yüzden x negatifken √(x²) değeri −x'tir, x değil.",
          yanlis: "√(x²) = x, her iki uçta da aynı asimptot.",
          dogru: "√(x²) = |x|; x → −∞'da |x| = −x ve asimptot −3/2."
        }
      ]
    },
    {
      baslik: "Üstel fonksiyonlar ve lojistik eğri",
      kisa: "eˣ solda 0'a iner; lojistik eğrinin iki yatay asimptotu vardır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "📈", terim: "Exponential function", tr: "üstel fonksiyon", tanim: "Değişkenin üs olduğu fonksiyon. eˣ solda x eksenine yapışır, sağda sınırsız büyür.", ornek: "lim x→−∞ eˣ = 0 ve lim x→∞ eˣ = ∞." },
            { ikon: "🛤️", terim: "Logistic curve", tr: "lojistik eğri", tanim: "İki yatay asimptotlu, S biçimli büyüme eğrisi.", ornek: "Bir okulda yayılan dedikodu ya da viral bir videonun izlenme sayacı." }
          ]
        },
        {
          tip: "grafik",
          baslik: "y = eˣ ve y = e^(−x)",
          xlabel: "x",
          ylabel: "y",
          xmax: 9,
          ymax: 8,
          xticks: [
            { v: 0, label: "-6" },
            { v: 6, label: "0" },
            { v: 9, label: "3" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 4, label: "4" }
          ],
          ogeler: [
            { id: "ey", tip: "cizgi", renk: 3, kesik: true, from: [6, 0], to: [6, 8] },
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0.0024787521766663585], [0.2693147180559947, 0.003244852832469623], [0.5386294361119894, 0.0042477299681271665], [0.8079441541679842, 0.0055605633949177054], [1.077258872223978, 0.007279150393482127], [1.3465735902799727, 0.009528896028657764], [1.6158883083359674, 0.012473963940389722], [1.8852030263919621, 0.01632925534271579], [2.1545177444479564, 0.02137609033678843], [2.423832462503951, 0.027982735801260653], [2.6931471805599454, 0.036631277777468364], [2.96246189861594, 0.047952799223784134], [3.231776616671935, 0.06277343005520107], [3.501091334727929, 0.08217462973341436], [3.770406052783924, 0.10757210121998517], [4.039720770839918, 0.14081909463325942], [4.309035488895913, 0.1843416386631554], [4.5783502069519075, 0.24131556756218006], [4.847664925007902, 0.3158982613486784], [5.116979643063896, 0.41353200927414], [5.386294361119891, 0.5413411329464508], [5.6556090791758855, 0.7086518471305983], [5.92492379723188, 0.9276727924003603], [6.194238515287875, 1.2143858980181073], [6.46355323334387, 1.5897125811886341], [6.7328679513998635, 2.0810403800915562], [7.002182669455858, 2.724221418901717], [7.271497387511853, 3.566188532524476], [7.540812105567848, 4.668379949320081], [7.810126823623842, 6.111222430460266], [8.079441541679836, 8.000000000000002]] },
            { id: "ha", tip: "cizgi", renk: 1, kesik: true, from: [0, 0.03], to: [9, 0.03], gizli: true },
            { id: "th", tip: "yazi", x: 2, y: 1.2, metin: "x → −∞: 0", gizli: true },
            { id: "m", tip: "egri", renk: 2, noktalar: [[3.9205584583201643, 7.999999999999998], [4.089873176376159, 6.753945304036256], [4.259187894432153, 5.701972146239175], [4.428502612488148, 4.813851000104702], [4.597817330544142, 4.064060794560924], [4.767132048600137, 3.431055539842826], [4.936446766656132, 2.89664518140113], [5.105761484712126, 2.445472890047927], [5.275076202768121, 2.0645737677358964], [5.444390920824115, 1.7430022879295375], [5.613705638880109, 1.4715177646857693], [5.783020356936104, 1.2423188120756723], [5.952335074992099, 1.0488191633667985], [6.121649793048093, 0.8854584079005533], [6.290964511104088, 0.7475422069949202], [6.460279229160083, 0.6311073973127801], [6.629593947216077, 0.5328081053028993], [6.798908665272071, 0.4498196000953716], [6.968223383328066, 0.37975712196595035], [7.13753810138406, 0.3206073538220318], [7.306852819440055, 0.2706705664732254], [7.47616753749605, 0.22851177517158416], [7.645482255552045, 0.1929195038546387], [7.814796973608038, 0.16287097213950527], [7.984111691664033, 0.13750270468067888], [8.153426409720028, 0.11608571832129447], [8.322741127776021, 0.09800457401522285], [8.492055845832017, 0.08273969155552346], [8.661370563888012, 0.06985241890485454], [8.830685281944007, 0.05897242707975194], [9, 0.049787068367863924]], gizli: true },
            { id: "tm", tip: "yazi", x: 8.9, y: 0.9, metin: "x → ∞: 0", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "eˣ sağda sınırsız büyür: lim x→∞ eˣ = ∞." },
            { metin: "Solda x eksenine yapışır: lim x→−∞ eˣ = 0, yani y = 0 yatay asimptot.", goster: ["ha", "th"] },
            { metin: "e^(−x) ayna görüntüsüdür: sağ uçta 0'a iner.", goster: ["m", "tm"] }
          ]
        },
        {
          tip: "grafik",
          baslik: "Lojistik eğri: y = 4/(1 + e^(−x))",
          xlabel: "x",
          ylabel: "y",
          xmax: 16,
          ymax: 5,
          xticks: [
            { v: 0, label: "-8" },
            { v: 8, label: "0" },
            { v: 16, label: "8" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" }
          ],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0.0013414005218659124], [0.5, 0.002211114547694398], [1, 0.0036442047776025816], [1.5, 0.006004729026947967], [2, 0.009890492626539097], [2.5, 0.01628055086358451], [3, 0.026771403697139422], [3.5, 0.04394777052237272], [4, 0.07194483984836623], [4.5, 0.11724892300542528], [5, 0.18970349271026712], [5.5, 0.3034327200849742], [6, 0.4768116880884702], [6.5, 0.7297020952254254], [7, 1.0757656854799804], [7.5, 1.5101626751925816], [8, 2], [8.5, 2.4898373248074184], [9, 2.9242343145200196], [9.5, 3.2702979047745746], [10, 3.5231883119115293], [10.5, 3.696567279915026], [11, 3.8102965072897335], [11.5, 3.8827510769945746], [12, 3.928055160151634], [12.5, 3.9560522294776272], [13, 3.973228596302861], [13.5, 3.983719449136416], [14, 3.9901095073734614], [14.5, 3.993995270973052], [15, 3.9963557952223976], [15.5, 3.9977888854523056], [16, 3.9986585994781345]] },
            { id: "h0", tip: "cizgi", renk: 1, kesik: true, from: [0, 0.03], to: [16, 0.03], gizli: true },
            { id: "t0", tip: "yazi", x: 3, y: 0.8, metin: "→ 0", gizli: true },
            { id: "h4", tip: "cizgi", renk: 1, kesik: true, from: [0, 4], to: [16, 4], gizli: true },
            { id: "t4", tip: "yazi", x: 13, y: 4.4, metin: "→ 4", gizli: true }
          ],
          durumlar: [
            { metin: "S biçimli bir büyüme eğrisi: yavaş başlar, hızlanır, sonra yavaşlar." },
            { metin: "Solda x → −∞ iken e^(−x) çok büyür, kesir 0'a iner: y = 0 asimptot.", goster: ["h0", "t0"] },
            { metin: "Sağda e^(−x) → 0 olur, kesir 4/1 = 4'e gider: y = 4 ikinci asimptot.", goster: ["h4", "t4"] }
          ]
        }
      ]
    },
    {
      baslik: "Büyüme hızları: logaritma, kuvvet, üstel",
      kisa: "ln x ≪ xⁿ ≪ aˣ: hızlı olan paydaysa limit 0, paysa ∞.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [{ ikon: "🏎️", terim: "Rates of growth", tr: "büyüme hızları", tanim: "Logaritma kaplumbağa, kuvvet bisiklet, üstel roket gibidir: başta bisiklet önde olabilir ama sonunda roket herkesi geçer.", ornek: "x¹⁰⁰ başta öndedir (x = 10'da 10¹⁰⁰, 2¹⁰ = 1024), ama yaklaşık x = 996'dan sonra 2ˣ geçer." }]
        },
        {
          tip: "formul",
          parcalar: [{ t: "ln x", alt: "kaplumbağa" }, "≪", { t: "xⁿ (n > 0)", alt: "bisiklet" }, "≪", { t: "aˣ (a > 1)", alt: "roket" }],
          aciklama: "Hızlı olan paydaysa limit ==0==, hızlı olan paysa limit ==∞==. Örnekler: lim x¹⁰⁰/2ˣ = 0 ve lim (ln x)/x = 0."
        },
        {
          tip: "ikili",
          sol: { ikon: "0️⃣", baslik: "Limit 0", maddeler: ["Hızlı olan paydada", "Pay geride kalır"] },
          sag: { ikon: "♾️", baslik: "Limit ∞", maddeler: ["Hızlı olan payın içinde", "Pay payı yutar"] },
          oyun: [
            { metin: "lim x→∞ x¹⁰⁰ / 2ˣ", cevap: "sol", neden: "Üstel (2ˣ) paydada ve kuvvetten hızlı." },
            { metin: "lim x→∞ (ln x) / x", cevap: "sol", neden: "Kuvvet (x) paydada ve logaritmadan hızlı." },
            { metin: "lim x→∞ 2ˣ / x¹⁰⁰", cevap: "sag", neden: "Hızlı olan üstel artık payın içinde." },
            { metin: "lim x→∞ x / (ln x)", cevap: "sag", neden: "Hızlı olan kuvvet payın içinde." },
            { metin: "lim x→∞ (ln x) / 2ˣ", cevap: "sol", neden: "Hızlı olan 2ˣ paydada." }
          ]
        }
      ]
    },
    {
      baslik: "e sayısı ve 1^∞ belirsizliği",
      kisa: "(1 + 1/x)ˣ, x → ∞ iken e ≈ 2,718'e gider; 1^∞ belirsizdir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "(1 + 1/x)ˣ değerleri",
          head: ["x", "(1 + 1/x)ˣ"],
          rows: [["10", "2,5937"], ["100", "2,7048"], ["1 000", "2,7169"], ["10 000", "2,7181"]],
          vurgu: 3,
          not: "Değerler e ≈ 2,71828'e yaklaşır."
        },
        {
          tip: "grafik",
          baslik: "y = (1 + 1/x)ˣ",
          xlabel: "x",
          ylabel: "y",
          xmax: 20,
          ymax: 3,
          xticks: [
            { v: 5, label: "5" },
            { v: 10, label: "10" },
            { v: 15, label: "15" },
            { v: 20, label: "20" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 2.718281828459045, label: "e" }
          ],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0.1, 1.2709816152101407], [0.2, 1.4309690811052556], [0.5, 1.7320508075688772], [1, 2], [1.5, 2.1516574145596756], [2, 2.25], [3, 2.37037037037037], [4, 2.44140625], [6, 2.5216263717421135], [8, 2.565784513950348], [10, 2.5937424601000023], [12, 2.613035290224676], [15, 2.6328787177279187], [20, 2.653297705144422]] },
            { id: "p", tip: "nokta", x: 10, y: 2.594, renk: 2, etiket: "2,594", gizli: true },
            { id: "ha", tip: "cizgi", renk: 1, kesik: true, from: [0, 2.718281828459045], to: [20, 2.718281828459045], gizli: true },
            { id: "th", tip: "yazi", x: 15, y: 1.9, metin: "y = e", gizli: true }
          ],
          durumlar: [
            { metin: "x büyüdükçe eğri yavaş yavaş yükselir." },
            { metin: "x = 10'da 2,594; x = 100'de 2,705; x = 1000'de 2,717; x = 10 000'de 2,718.", goster: ["p"] },
            { metin: "Değerler e ≈ 2,71828'e sokulur: y = e bir ==yatay asimptot==.", goster: ["ha", "th"] }
          ]
        },
        {
          tip: "tuzak",
          metin: "Taban 1'e, üs sonsuza gidiyor: 1^∞. Bu, 0/0 gibi bir belirsiz şekildir; sonucu önceden söyleyemezsin.",
          yanlis: "1 üzeri her şey 1'dir, limit 1.",
          dogru: "1^∞ belirsiz şekil; bu limit e sayısıdır."
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: ["x → ±∞ iken f(x) → b ise y = b yatay asimptot; grafik onu kesebilir.", "Rasyonelde dereceleri karşılaştır: eşitse baş katsayı oranı, payda büyükse 0, pay büyükse asimptot yok.", "Sabit olmayan polinomun yatay asimptotu olmaz; uçlarda yalnız baş terim önemlidir.", "√(x²) = |x|; x → −∞'da işaret değişir, iki farklı asimptot çıkabilir.", "eˣ solda 0'a iner; lojistik eğrinin iki yatay asimptotu vardır.", "Hız sırası: ln x ≪ xⁿ ≪ aˣ; hızlı olan paydaysa limit 0.", "(1 + 1/x)ˣ → e; 1^∞ belirsiz şekildir."]
        }
      ]
    }
  ]
};
