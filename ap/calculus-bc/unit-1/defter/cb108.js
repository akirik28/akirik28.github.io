/* Kitpath not defteri · cb108 · 1.14 Sonsuz Limitler ve Dikey Asimptotlar
   Kaynak: ap-videolar/src/episodes/cb108 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb108",
  amac: "Bu konu f(x) sınırsız büyürken ya da küçülürken yazılan *infinite limit*'i (sonsuz limit) ve grafikteki izi olan *vertical asymptote*'u (dikey asimptot) anlatıyor. İşaret analiziyle ±∞'u bulmayı, delik ile asimptotu ayırmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Sonsuz limit: sınırsız büyüme",
      kisa: "Payda sıfıra giderse 1/x² sınırsız büyür; ∞ sayı değil, davranıştır.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "🔦 El feneri: I = 1/d²",
          head: ["Uzaklık d", "Parlaklık I = 1/d²"],
          rows: [["1", "1"], ["0,5", "4"], ["0,1", "100"], ["0,01", "10 000"], ["0,001", "1 000 000"]],
          vurgu: 4,
          not: "Işığın şiddeti uzaklığın karesiyle ters orantılı. Uzaklık sıfıra yaklaştıkça parlaklık sınırsız artar."
        },
        {
          tip: "grafik",
          baslik: "y = 1/x²: x sıfıra yaklaşırken",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 10,
          xticks: [
            { v: 0, label: "-2" },
            { v: 2, label: "0" },
            { v: 4, label: "2" }
          ],
          yticks: [
            { v: 4, label: "4" },
            { v: 8, label: "8" }
          ],
          ogeler: [
            { id: "R", tip: "egri", renk: 0, noktalar: [[4, 0.25], [3.836200838601962, 0.29659213973354775], [3.6815005605219713, 0.3536763070253809], [3.535810782399446, 0.4239596992568056], [3.3990395089585514, 0.5109048690855501], [3.2710907827445097, 0.6189375921707692], [3.151864277965839, 0.7536980298293693], [3.041254825593519, 0.9223291736561561], [2.9391518528923637, 1.1337788746104527], [2.845438714993354, 1.3990580573940385], [2.759991888155448, 1.7313388976819968], [2.6826799827059418, 2.1456835040493942], [2.6133625160941674, 2.658064629764905], [2.5518883592072297, 3.2832014623096923], [2.498093725063841, 4.030675716341279], [2.4517994946968913, 4.899012169549973], [2.412807542641432, 5.8681979067852845], [2.380895472030506, 6.892684186117551], [2.3558086442900272, 7.898907172946886], [2.3372471607527263, 8.792318174165082], [2.3248420549859583, 9.476664410128727], [2.318102559545454, 9.882473827424917], [2.316227766016838, 9.999999999999996]], gizli: true },
            { id: "tr", tip: "yazi", x: 2.9, y: 9.3, metin: "→ +∞", gizli: true },
            { id: "L", tip: "egri", renk: 0, noktalar: [[0, 0.25], [0.16379916139803785, 0.29659213973354775], [0.3184994394780287, 0.3536763070253809], [0.4641892176005542, 0.4239596992568056], [0.6009604910414486, 0.5109048690855501], [0.7289092172554903, 0.6189375921707692], [0.848135722034161, 0.7536980298293693], [0.9587451744064812, 0.9223291736561561], [1.0608481471076363, 1.1337788746104527], [1.1545612850066458, 1.3990580573940385], [1.2400081118445518, 1.7313388976819968], [1.3173200172940582, 2.1456835040493942], [1.3866374839058326, 2.658064629764905], [1.4481116407927703, 3.2832014623096923], [1.5019062749361594, 4.030675716341279], [1.5482005053031087, 4.899012169549973], [1.5871924573585678, 5.8681979067852845], [1.619104527969494, 6.892684186117551], [1.6441913557099725, 7.898907172946886], [1.6627528392472735, 8.792318174165082], [1.675157945014042, 9.476664410128727], [1.6818974404545461, 9.882473827424917], [1.683772233983162, 9.999999999999996]], gizli: true },
            { id: "tl", tip: "yazi", x: 1.1, y: 9.3, metin: "+∞ ←", hiza: "end", gizli: true },
            { id: "va", tip: "cizgi", renk: 2, kesik: true, from: [2, 0], to: [2, 10], gizli: true }
          ],
          durumlar: [
            { metin: "Sağdan: x = 0,1 → 100; 0,01 → 10 000; 0,001 → 1 000 000. x → 0⁺ iken f(x) sınırsız büyür.", goster: ["R", "tr"] },
            { metin: "Soldan da aynı, çünkü kare her şeyi pozitif yapar: x → 0⁻ iken f(x) → +∞.", goster: ["L", "tl"] },
            { metin: "lim x→0 1/x² = ∞ yazarız. y ekseni bir ==dikey asimptot==.", goster: ["va"] }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "♾️", terim: "Infinite limit", tr: "sonsuz limit", tanim: "x → a iken f(x) sınırsız büyür (+∞) ya da sınırsız küçülür (−∞). Bunu lim f(x) = ±∞ diye yazarız.", ornek: "x → 0 iken 1/x² → ∞; ayna görüntüsü −1/x² ise −∞'a iner." },
            { ikon: "🚀", terim: "Unbounded", tr: "sınırsız", tanim: "Değerler hiçbir sayıyla sınırlanamaz; limit bir gerçel sayı olarak yoktur.", ornek: "1/x² değerleri 100, 10 000, 1 000 000… diye büyür." }
          ]
        },
        {
          tip: "tuzak",
          metin: "∞ yazısı bir davranışı anlatır, bir değer vermez. Limitin var olmadığını ve nasıl var olmadığını (sınırsız) birlikte söyler.",
          yanlis: "lim 1/x² = ∞ yazdım, o hâlde limit vardır.",
          dogru: "∞ bir sayı değil. AP'de limit yine *does not exist*; gerekçede “unbounded” de."
        }
      ]
    },
    {
      baslik: "1/x: iki taraf zıt yöne kaçar",
      kisa: "1/x'te sağdan +∞, soldan −∞; iki taraflı limit yoktur.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [{ ikon: "↔️", terim: "One-sided limit", tr: "tek taraflı limit", tanim: "x, a'ya yalnız soldan (a⁻) ya da yalnız sağdan (a⁺) yaklaşırken f(x)'in gittiği yer.", ornek: "x → 0⁺ iken 1/x → +∞; x → 0⁻ iken −∞." }]
        },
        {
          tip: "grafik",
          baslik: "y = 1/x: iki kol zıt yöne kaçar",
          xlabel: "x",
          ylabel: "y",
          xmax: 6,
          ymax: 16,
          xticks: [
            { v: 0, label: "-3" },
            { v: 3, label: "0" },
            { v: 6, label: "3" }
          ],
          yticks: [
            { v: 0, label: "-8" },
            { v: 8, label: "0" },
            { v: 16, label: "8" }
          ],
          ogeler: [
            { id: "ey", tip: "cizgi", renk: 3, kesik: true, from: [0, 8], to: [6, 8] },
            { id: "R", tip: "egri", renk: 0, noktalar: [[6, 8.333333333333334], [5.720316929145852, 8.367604226289172], [5.456169979514884, 8.407137945801907], [5.207408238675743, 8.453019963629345], [4.973874626939927, 8.506617789373122], [4.7554052992950755, 8.569669010570706], [4.551828951900511, 8.644400917237244], [4.362966011205647, 8.733694011280166], [4.18862767696349, 8.84130633955507], [4.028614780906702, 8.972181246626187], [3.8827164092618376, 9.132866671002796], [3.7507082173690893, 9.332075468022145], [3.632350334701424, 9.581401867166194], [3.5273847119866164, 9.896149010905301], [3.4355316869510517, 10.296044191412387], [3.3564854183294788, 10.805163826015901], [3.2899076117254022, 11.449374764768821], [3.2354185299157003, 12.247753990979742], [3.1925833837491333, 13.192555975143938], [3.160890103569842, 14.21542268798344], [3.1397086881980667, 15.157750980971834], [3.1282011641990435, 15.800241177587225], [3.125, 16]], gizli: true },
            { id: "tr", tip: "yazi", x: 4.1, y: 14.8, metin: "0⁺ → +∞", hiza: "start", gizli: true },
            { id: "L", tip: "egri", renk: 0, noktalar: [[0, 7.666666666666667], [0.27968307085414734, 7.632395773710827], [0.5438300204851161, 7.592862054198093], [0.7925917613242568, 7.546980036370655], [1.0261253730600732, 7.493382210626879], [1.244594700704924, 7.430330989429294], [1.4481710480994887, 7.355599082762756], [1.6370339887943528, 7.266305988719833], [1.81137232303651, 7.15869366044493], [1.9713852190932974, 7.027818753373813], [2.1172835907381624, 6.867133328997204], [2.2492917826309107, 6.667924531977855], [2.367649665298576, 6.4185981328338055], [2.4726152880133836, 6.103850989094699], [2.5644683130489483, 5.703955808587613], [2.6435145816705212, 5.194836173984099], [2.7100923882745978, 4.550625235231179], [2.7645814700842997, 3.752246009020258], [2.8074166162508667, 2.8074440248560624], [2.839109896430158, 1.7845773120165607], [2.8602913118019333, 0.8422490190281664], [2.8717988358009565, 0.1997588224127762], [2.875, 0]], gizli: true },
            { id: "tl", tip: "yazi", x: 1.9, y: 1.2, metin: "0⁻ → −∞", hiza: "end", gizli: true },
            { id: "va", tip: "cizgi", renk: 2, kesik: true, from: [3, 0], to: [3, 16], gizli: true }
          ],
          durumlar: [
            { metin: "Sağdan, küçük pozitif sayılara bölünce: x → 0⁺ iken 1/x → +∞.", goster: ["R", "tr"] },
            { metin: "Soldan, küçük negatif sayılara bölünce: x → 0⁻ iken 1/x → −∞.", goster: ["L", "tl"] },
            { metin: "İki kol zıt yöne kaçıyor; x = 0 ==dikey asimptot==.", goster: ["va"] }
          ]
        },
        {
          tip: "formul",
          parcalar: [{ t: "lim x→0⁺ 1/x", alt: "+∞" }, "≠", { t: "lim x→0⁻ 1/x", alt: "−∞" }, "⇒", { t: "iki taraflı limit", alt: "yok (DNE)" }],
          aciklama: "İki taraf zıt yöne kaçtığı için tek bir ±∞ yazamayız; tek taraflı limitleri ayrı ayrı yazarız. Rasyonel fonksiyonda payda 0'a giderken pay 0'a gitmiyorsa grafik patlar."
        }
      ]
    },
    {
      baslik: "Dikey asimptot",
      kisa: "Tek taraflı limit bile ±∞ ise x = a dikey asimptottur.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "📏", terim: "Vertical asymptote", tr: "dikey asimptot", tanim: "Grafiğin yaklaşıp yukarı ya da aşağı kaçtığı dikey çizgi x = a. Tek taraflı limit bile ±∞ ise yeter.", ornek: "x = 0, 1/x² için dikey asimptottur." },
            { ikon: "🪵", terim: "Natural logarithm", tr: "doğal logaritma", tanim: "ln x yalnızca x > 0 için tanımlı; sıfıra sağdan yaklaşırken eksi sonsuza iner.", ornek: "lim x→0⁺ ln x = −∞, yani x = 0 dikey asimptot." },
            { ikon: "〰️", terim: "Tangent function", tr: "tanjant fonksiyonu", tanim: "π/2'de iki yöne kaçar: solda yukarı, sağda aşağı.", ornek: "lim x→π/2⁻ tan x = +∞ ve lim x→π/2⁺ tan x = −∞." }
          ]
        },
        {
          tip: "formul",
          parcalar: [{ t: "lim x→a⁻ f(x) = ±∞", alt: "ya da" }, "veya", { t: "lim x→a⁺ f(x) = ±∞", alt: "en az biri" }, "⇒", { t: "x = a", alt: "dikey asimptot" }],
          aciklama: "Tek taraf yeterli: ==iki tarafın da kaçması şart değil==."
        },
        {
          tip: "grafik",
          baslik: "y = ln x: sıfıra sağdan yaklaşırken",
          xlabel: "x",
          ylabel: "y",
          xmax: 5,
          ymax: 6,
          xticks: [
            { v: 1, label: "1" },
            { v: 3, label: "3" },
            { v: 5, label: "5" }
          ],
          yticks: [
            { v: 2, label: "-2" },
            { v: 4, label: "0" },
            { v: 6, label: "2" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 3, kesik: true, from: [0, 4], to: [5, 4] },
            { id: "c", tip: "egri", renk: 0, noktalar: [[0.020000000000000004, 0.08797699457185404], [0.02473195556439952, 0.30034087602809434], [0.03058348130197161, 0.5127047574843346], [0.03781946502825025, 0.7250686389405745], [0.04676746642740233, 0.9374325203968148], [0.05783254507710304, 1.149796401853055], [0.07151559675115221, 1.3621602833092954], [0.08843602805055055, 1.5745241647655357], [0.10935979580191027, 1.786888046221776], [0.13523408051523247, 1.9992519276780163], [0.16723016350475772, 2.211615809134256], [0.20679644864134678, 2.423979690590497], [0.25572402893367063, 2.6363435720467367], [0.3162277660168379, 2.848707453502977], [0.39104655286788814, 3.0610713349592173], [0.48356729845701074, 3.2734352164154576], [0.5979782468917754, 3.485799097871698], [0.7394585715302453, 3.698162979327938], [0.9144128266400184, 3.910526860784178], [1.1307608697988951, 4.122890742240418], [1.3982963792913998, 4.335254623696658], [1.7291301959247816, 4.547618505152899], [2.1382385585336583, 4.75998238660914], [2.6441410507870033, 4.97234626806538], [3.26973894870344, 5.184710149521619], [4.0433519193259935, 5.39707403097786], [4.999999999999998, 5.6094379124341]], gizli: true },
            { id: "va", tip: "cizgi", renk: 2, kesik: true, from: [0, 0], to: [0, 6], gizli: true },
            { id: "tv", tip: "yazi", x: 0.35, y: 0.8, metin: "→ −∞", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "ln x yalnızca x > 0 için tanımlı; sol taraf tanımsız.", goster: ["c"] },
            { metin: "x → 0⁺ iken ln x → −∞. Yalnız ==bir tek taraf== yeterli: x = 0 dikey asimptot.", goster: ["va", "tv"] }
          ]
        },
        {
          tip: "grafik",
          baslik: "y = tan x: π/2'de iki yöne kaçar",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 12,
          xticks: [
            { v: 1.5707963267948966, label: "π/2" },
            { v: 3.141592653589793, label: "π" }
          ],
          yticks: [
            { v: 0, label: "-6" },
            { v: 6, label: "0" },
            { v: 12, label: "6" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 3, kesik: true, from: [0, 6], to: [4, 6] },
            { id: "L", tip: "egri", renk: 0, noktalar: [[0, 6], [0.13674290473655226, 6.137601629391432], [0.26588987476776593, 6.272338198167393], [0.38751469433864677, 6.408152635962891], [0.5016941629952502, 6.548504309650463], [0.6085083879920058, 6.696700926922888], [0.7080411233605591, 6.8561283118946434], [0.8003801663667439, 7.030422065633443], [0.8856178254013038, 7.223597270884698], [0.963851477997044, 7.440131605062013], [1.03518424431044, 7.684974855645162], [1.0997258111393031, 7.963427739963467], [1.1575934562027566, 8.280790736350795], [1.2089133451887761, 8.641630073896728], [1.253822210833892, 9.048459139162986], [1.2924695853313515, 9.499641191436627], [1.3250208678892346, 9.986497503830735], [1.3516617199806074, 10.490125396281522], [1.3726047191179622, 10.979384805545791], [1.388100226869326, 11.412535949528264], [1.3984562639920681, 11.74492058946494], [1.404082533230125, 11.94262940546416], [1.4056476493802696, 11.999999999999995]], gizli: true },
            { id: "tl", tip: "yazi", x: 1.15, y: 11.2, metin: "+∞", hiza: "end", gizli: true },
            { id: "va", tip: "cizgi", renk: 2, kesik: true, from: [1.5707963267948966, 0], to: [1.5707963267948966, 12], gizli: true },
            { id: "R", tip: "egri", renk: 0, noktalar: [[3.141592653589793, 6], [3.004849748853241, 5.862398370608567], [2.8757027788220273, 5.727661801832607], [2.754077959251146, 5.591847364037109], [2.639898490594543, 5.451495690349537], [2.5330842655977874, 5.303299073077112], [2.433551530229234, 5.143871688105356], [2.341212487223049, 4.969577934366556], [2.2559748281884895, 4.776402729115302], [2.1777411755927494, 4.559868394937988], [2.106408409279353, 4.315025144354838], [2.04186684245049, 4.036572260036532], [1.9839991973870366, 3.7192092636492036], [1.932679308401017, 3.3583699261032707], [1.8877704427559012, 2.9515408608370137], [1.8491230682584416, 2.500358808563371], [1.8165717857005586, 2.013502496169263], [1.7899309336091858, 1.5098746037184752], [1.768987934471831, 1.020615194454206], [1.753492426720467, 0.5874640504717323], [1.743136389597725, 0.255079410535056], [1.7375101203596681, 0.05737059453583537], [1.7359450042095235, 0]], gizli: true },
            { id: "tr", tip: "yazi", x: 1.95, y: 0.8, metin: "−∞", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Solda: x → π/2⁻ iken tan x → +∞.", goster: ["L", "tl"] },
            { metin: "Sağda: x → π/2⁺ iken tan x → −∞. x = π/2 bir dikey asimptot.", goster: ["va", "R", "tr"] }
          ]
        }
      ]
    },
    {
      baslik: "İşaret analizi: sıfır olmayan sayı bölü sıfır",
      kisa: "k/0 görürsen ±∞ gelir; işareti paydanın hangi taraftan 0'a gittiği belirler.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "➗", terim: "Nonzero over zero", tr: "sıfırdan farklı sayı bölü sıfır", tanim: "Pay k ≠ 0 iken payda 0'a giderse ifade sınırsız büyür: tek taraflı limitler ±∞, x = c dikey asimptottur.", ornek: "x → 3 iken (x + 1)/(x − 3) için 4/0 çıkar." },
            { ikon: "➕", terim: "Sign analysis", tr: "işaret analizi", tanim: "Payın ve paydanın işaretine bakarak ±∞'u belirlemek. Payda 0⁺ (küçük pozitif) ya da 0⁻ (küçük negatif) olabilir.", ornek: "x → 3⁺ iken x − 3 küçük pozitif; x → 3⁻ iken küçük negatif." }
          ]
        },
        {
          tip: "ornek",
          baslik: "lim x→3 (x + 1)/(x − 3)",
          durum: "x = 3'te pay 4, payda 0: 4/0 biçimi.",
          adimlar: ["Yerine koy: 4/0. Sıfır olmayan sayı bölü sıfır: sonsuz geliyor, işareti bulmak gerek.", "Sağdan (x → 3⁺): payda küçük pozitif. 4/0⁺ = +∞.", "Soldan (x → 3⁻): payda küçük negatif. 4/0⁻ = −∞.", "Kısa kontrol: x = 3,01 → 4,01/0,01 = 401; x = 2,99 → 3,99/(−0,01) = −399."],
          sonuc: "Sağdan +∞, soldan −∞; iki taraflı limit yok. x = 3 dikey asimptot."
        },
        {
          tip: "grafik",
          baslik: "y = (x + 1)/(x − 3)",
          xlabel: "x",
          ylabel: "y",
          xmax: 10,
          ymax: 16,
          xticks: [
            { v: 2, label: "0" },
            { v: 5, label: "3" }
          ],
          yticks: [
            { v: 0, label: "-8" },
            { v: 8, label: "0" },
            { v: 16, label: "8" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 3, kesik: true, from: [2, 0], to: [2, 16] },
            { id: "ey", tip: "cizgi", renk: 3, kesik: true, from: [0, 8], to: [10, 8] },
            { id: "L", tip: "egri", renk: 0, noktalar: [[0, 8.2], [0.4431693103389389, 8.12219692316514], [0.8617209986430823, 8.033414615426262], [1.2558941918567934, 7.931654123849748], [1.6259377891966376, 7.814485403620462], [1.972111409812633, 7.6789474312354145], [2.2946864916745517, 7.521428297426443], [2.59394757644709, 7.337525832419986], [2.8701938258742765, 7.121894823766307], [3.1237408302541136, 6.868098360557648], [3.3549227911213393, 6.56850318124185], [3.5640951918016364, 6.214300016852219], [3.7516381169948447, 5.795800917622634], [3.917960456369033, 5.303277432378005], [4.063505346280459, 4.728752978874017], [4.1887574047726135, 4.069292436649208], [4.294252673208058, 3.3322491660259264], [4.380592860809904, 2.542211984785661], [4.448466908841953, 1.7474886563900487], [4.498686212700926, 1.020965508348005], [4.532249035125769, 0.448440943193944], [4.5504831794333995, 0.10155656698644133], [4.555555555555555, 3.552713678800501e-15]], gizli: true },
            { id: "tl", tip: "yazi", x: 4.1, y: 2, metin: "3⁻ → −∞", hiza: "end", gizli: true },
            { id: "R", tip: "egri", renk: 0, noktalar: [[10, 9.8], [9.569183841168766, 9.875429866480669], [9.16229909888007, 9.96100734353191], [8.77911331174897, 10.058449342485792], [8.41938451851616, 10.169801166946792], [8.082860336802353, 10.297496338789365], [7.769276894852961, 10.444420385492865], [7.478357582478264, 10.613972103250795], [7.2098115769375495, 10.810109079772028], [6.963332084874921, 11.03735273865034], [6.738594220477861, 11.30070936213085], [6.535252409363566, 11.605434764735648], [6.3529371615276595, 11.956530512831378], [6.191250984923483, 12.357814642442397], [6.049763095427707, 12.810383521217492], [5.928002383513731, 13.310333756746019], [5.825447749738507, 13.845854872421853], [5.741514257261451, 14.394366946864569], [5.675532168756429, 14.92125761732932], [5.626712706120005, 15.382509818197413], [5.594085432752301, 15.733038346805863], [5.576359557275545, 15.940112208615094], [5.571428571428571, 16.000000000000004]], gizli: true },
            { id: "tr", tip: "yazi", x: 6.2, y: 14.8, metin: "3⁺ → +∞", hiza: "start", gizli: true },
            { id: "va", tip: "cizgi", renk: 2, kesik: true, from: [5, 0], to: [5, 16], gizli: true }
          ],
          durumlar: [
            { metin: "Soldan x = 2,99: pay 3,99, payda −0,01. Bölüm −399; x → 3⁻ iken −∞.", goster: ["L", "tl"] },
            { metin: "Sağdan x = 3,01: pay 4,01, payda 0,01. Bölüm 401; x → 3⁺ iken +∞.", goster: ["R", "tr"] },
            { metin: "x = 3 dikey asimptot. (Kesikli mor çizgiler gerçek eksenler.)", goster: ["va"] }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "⬆️", baslik: "+∞", maddeler: ["(+)/0⁺ ya da (−)/0⁻", "İşaretler aynı"] },
          sag: { ikon: "⬇️", baslik: "−∞", maddeler: ["(+)/0⁻ ya da (−)/0⁺", "İşaretler zıt"] },
          oyun: [
            { metin: "lim x→3⁺ (x + 1)/(x − 3)", cevap: "sol", neden: "4/0⁺ = +∞." },
            { metin: "lim x→1⁻ (x + 2)/(x − 1)", cevap: "sag", neden: "3/0⁻ = −∞." },
            { metin: "lim x→−2⁺ (x + 1)/(x + 2)", cevap: "sag", neden: "−1/0⁺ = −∞." },
            { metin: "lim x→−2⁻ (x + 1)/(x + 2)", cevap: "sol", neden: "−1/0⁻ = +∞." },
            { metin: "lim x→0 1/x²", cevap: "sol", neden: "Kare her iki yanda pozitif: +∞." }
          ]
        }
      ]
    },
    {
      baslik: "Delik mi, asimptot mu? (AP örneği)",
      kisa: "Önce sadeleştir: sadeleşen çarpan delik, kalan sıfır dikey asimptot olur.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "🕳️", terim: "Hole", tr: "delik", tanim: "Ortak çarpan sadeleşince grafikte kalan tek eksik nokta. Limit vardır, f(c) yoktur.", ornek: "x = 2'de (2, 3/4) noktasındaki boşluk." },
            { ikon: "✂️", terim: "Common factor", tr: "ortak çarpan", tanim: "Pay ve paydada birlikte bulunan çarpan. Sadeleşirse delik bırakır.", ornek: "(x − 2), (x² − x − 2)/(x² − 4) ifadesinde sadeleşir." }
          ]
        },
        {
          tip: "ornek",
          baslik: "f(x) = (x² − x − 2)/(x² − 4): dikey asimptotlar nerede?",
          durum: "Payda x = 2 ve x = −2'de sıfır; ama ikisine de hemen asimptot deme.",
          adimlar: ["Çarpanlara ayır: pay (x − 2)(x + 1), payda (x − 2)(x + 2).", "(x − 2) sadeleşir: x ≠ 2 için f(x) = (x + 1)/(x + 2). x = 2'de asimptot yok, delik var.", "Deliğin yüksekliği: lim x→2 f(x) = 3/4.", "x = −2'de payda sıfır kalır, pay −1: −1/0. Orada dikey asimptot.", "Hesap makinesi deliği göstermez; bu yüzden cebir şart."],
          sonuc: "Dikey asimptot yalnızca x = −2; x = 2'de (2, 3/4) deliği var."
        },
        {
          tip: "grafik",
          baslik: "f(x) = (x² − x − 2)/(x² − 4) = (x + 1)/(x + 2), x ≠ 2",
          xlabel: "x",
          ylabel: "y",
          xmax: 11,
          ymax: 12,
          xticks: [
            { v: 4, label: "-2" },
            { v: 6, label: "0" },
            { v: 8, label: "2" }
          ],
          yticks: [
            { v: 0, label: "-6" },
            { v: 6, label: "0" },
            { v: 12, label: "6" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 3, kesik: true, from: [6, 0], to: [6, 12] },
            { id: "ey", tip: "cizgi", renk: 3, kesik: true, from: [0, 6], to: [11, 6] },
            { id: "L", tip: "egri", renk: 0, noktalar: [[0, 7.25], [0.36966805886809073, 7.275456904827333], [0.7188014183803269, 7.304766680566581], [1.0475995454024964, 7.338707440057053], [1.3562700583054879, 7.378253460850485], [1.6450295174534642, 7.424633772444848], [1.9141043418358459, 7.4794103655597635], [2.1637318808412314, 7.544582781548328], [2.3941616791439086, 7.6227276974352485], [2.605656985236358, 7.717183640905973], [2.798496572106093, 7.832290592589387], [2.972976964868682, 7.9736879951014314], [3.1294152097859436, 8.148653194083627], [3.268152380678559, 8.366404663483344], [3.38955811811687, 8.638157586624196], [3.494036664468863, 8.976427795801143], [3.58203515667599, 9.392545727164883], [3.654055508285335, 9.890637151190141], [3.7106723971315803, 10.456289652580363], [3.7525626457163828, 11.041426982175786], [3.780558951251251, 11.557032541094715], [3.795768896015177, 11.896413819876882], [3.8, 11.999999999999996]], gizli: true },
            { id: "R1", tip: "egri", renk: 0, noktalar: [[7.65, 6.726027397260274], [7.308821396796556, 6.697777582988265], [6.9865949315324425, 6.665170529340283], [6.683136509788298, 6.627301854992498], [6.398254513857153, 6.5830300769905845], [6.131749073177347, 6.530901637260003], [5.883411218343232, 6.469048506103907], [5.653021891930367, 6.395047334290159], [5.440350781090866, 6.305724679621003], [5.245154925279977, 6.1968870863397605], [5.067177035894565, 6.062948352180623], [4.906143440318566, 5.896421962014714], [4.761761526306582, 5.687253207905468], [4.633716505802306, 5.422007331600168], [4.521667225572587, 5.083069146423011], [4.425240597266519, 4.648390096270015], [4.344023943744528, 4.093225578674838], [4.27755403276673, 3.397097927089214], [4.225300475579688, 2.561482959913665], [4.186638610814391, 1.6420518474899932], [4.160799915292548, 0.7810912513189541], [4.146762165519827, 0.18625480580753795], [4.142857142857142, -3.552713678800501e-15]], gizli: true },
            { id: "R2", tip: "egri", renk: 0, noktalar: [[8.35, 6.7701149425287355], [8.791666666666668, 6.791304347826087], [9.233333333333334, 6.80891719745223], [9.675, 6.823788546255507], [10.116666666666667, 6.836512261580381], [10.558333333333334, 6.8475222363405335], [11, 6.857142857142857]], gizli: true },
            { id: "hole", tip: "yazi", x: 8, y: 6.462, metin: "○", gizli: true },
            { id: "th", tip: "yazi", x: 8, y: 8.2, metin: "delik 3/4", gizli: true },
            { id: "va", tip: "cizgi", renk: 2, kesik: true, from: [4, 0], to: [4, 12], gizli: true },
            { id: "tv", tip: "yazi", x: 3.2, y: 11, metin: "+∞", hiza: "end", gizli: true },
            { id: "tw", tip: "yazi", x: 4.7, y: 0.9, metin: "−∞", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Sadeleşmiş hâl: (x + 1)/(x + 2). (Kesikli mor çizgiler gerçek eksenler.)", goster: ["L", "R1", "R2"] },
            { metin: "x = 2: (x − 2) sadeleşti, asimptot yok. Limit 3/4: grafikte ==delik==.", goster: ["hole", "th"] },
            { metin: "x = −2: payda sıfır kalıyor, pay −1: ==dikey asimptot==.", goster: ["va"] },
            { metin: "Sağdan −1/0⁺ = −∞ (x = −1,99 → −99). Soldan −1/0⁻ = +∞ (x = −2,01 → 101).", goster: ["tv", "tw"] }
          ]
        }
      ]
    },
    {
      baslik: "Paydanın sıfırı her zaman asimptot değildir",
      kisa: "Paydası sıfır olan her yer asimptot değil; sadeleşen çarpan delik bırakır.",
      bloklar: [
        {
          tip: "ikili",
          sol: { ikon: "🕳️", baslik: "*Hole*", maddeler: ["Ortak çarpan sadeleşir", "Limit var, f(c) yok"] },
          sag: { ikon: "📏", baslik: "*Vertical asymptote*", maddeler: ["Payda sıfır kalır, pay ≠ 0", "Sonsuza kaçış"] },
          oyun: [
            { metin: "(x² − 9)/(x − 3), x = 3'te", cevap: "sol", neden: "(x − 3) sadeleşir; limit 6." },
            { metin: "1/(x − 3), x = 3'te", cevap: "sag", neden: "Sadeleşecek çarpan yok: 1/0." },
            { metin: "(x + 1)/(x² − 1), x = −1'de", cevap: "sol", neden: "(x + 1) sadeleşir: 1/(x − 1)." },
            { metin: "(x + 1)/(x² − 1), x = 1'de", cevap: "sag", neden: "Pay 2, payda 0 kalır." },
            { metin: "(x + 1)/(x + 2), x = −2'de", cevap: "sag", neden: "Pay −1, payda 0: −1/0." }
          ]
        },
        {
          tip: "tuzak",
          metin: "Paydanın sıfır olduğu yer yalnızca bir adaydır; önce sadeleştir, sonra karar ver. Asimptotun olduğu yerde f tanımlı bile olabilir: 1/x² grafiğine x = 0'da (0, 1) noktası konsa da asimptot yerinde kalır.",
          yanlis: "Payda sıfırsa orada dikey asimptot vardır.",
          dogru: "Ortak çarpan sadeleşirse delik, sadeleşmezse dikey asimptot. Tek bir nokta asimptotu silmez."
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: ["x → a iken f sınırsız büyürse lim = +∞ yazılır; ∞ sayı değil, limit yine yoktur (*DNE*).", "1/x gibi fonksiyonlarda iki taraf zıt yöne kaçabilir: tek taraflı limitleri ayrı yaz.", "Tek taraflı limitlerden biri bile ±∞ ise x = a dikey asimptottur.", "ln x, x = 0'da; tan x, x = π/2'de dikey asimptot yapar.", "Sıfır olmayan sayı bölü sıfır asimptot işaretidir; ±∞'u paydanın 0⁺ ya da 0⁻ olması belirler.", "Önce sadeleştir: ortak çarpan delik, kalan sıfır dikey asimptot.", "Asimptotta f tanımlı olabilir; tek bir nokta asimptotu silmez."]
        }
      ]
    }
  ]
};
