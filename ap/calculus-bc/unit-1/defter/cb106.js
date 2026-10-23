/* Kitpath not defteri · cb106 · 1.10–1.11 Süreklilik ve Süreksizlik Türleri
   Kaynak: ap-videolar/src/episodes/cb106 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb106",
  amac: "Bu konu bir fonksiyonun bir noktada *continuous* (sürekli) olup olmadığını anlatıyor. Üç şartlı testi, dört süreksizlik türünü (delik, sıçrama, sonsuz, salınım) ve cevabı gerekçeyle yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Süreklilik: kalemi kaldırmadan çizmek",
      kisa: "Kalemi kaldırmadan çizilen grafik süreklidir; kopukluk süreksizliktir.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🎢",
          baslik: "Lunapark rayı",
          metin: "Vagon rayın her yerinde kesintisiz gidebilmeli. Rayda bir delik, bir basamak ya da gökyüzüne uzanan bir kopukluk varsa vagon orada takılır. Grafikte de aynı şey var: kalemi hiç kaldırmadan çizdiğin grafik süreklidir."
        },
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "✏️", terim: "Continuous", tr: "sürekli (bir noktada süreklilik)", tanim: "Grafik x = c'de kopmaz. Bu, üç şartlı bir testle matematiğe çevrilir.", ornek: "y = x + 1 doğrusu c = 2'de de kopmaz: limit 3 ve f(2) = 3." },
            { ikon: "🚧", terim: "Discontinuity", tr: "süreksizlik", tanim: "Üç şarttan en az biri bozulduğunda oluşur: grafikte delik, basamak ya da kaçış görürsün.", ornek: "Kargo ücreti 1 kg'da 50 TL iken 1 kg'ı biraz geçince 80 TL olur." }
          ]
        }
      ]
    },
    {
      baslik: "Sürekliliğin üç şartı",
      kisa: "Üç şart: f(c) tanımlı, limit var, limit f(c)'ye eşit.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [{ t: "f(c) tanımlı", alt: "1. şart: dolu nokta var" }, "+", { t: "lim f(x) var", alt: "2. şart: x → c" }, "+", { t: "lim f(x) = f(c)", alt: "3. şart: ikisi eşit" }, "=", { t: "c'de sürekli" }],
          aciklama: "Kısaca ==limit = değer==. Şartlardan biri bile bozulursa c'de süreksizlik vardır."
        },
        {
          tip: "adimlar",
          baslik: "Testi sırayla uygula",
          adimlar: [
            { baslik: "1 · f(c) tanımlı mı?", metin: "Grafikte x = c'de dolu bir nokta aranır." },
            { baslik: "2 · Limit var mı?", metin: "x, c'ye iki yandan yaklaşırken f(x) aynı yüksekliğe gitmeli." },
            { baslik: "3 · Limit = f(c) mi?", metin: "Yaklaşılan yükseklik, dolu noktanın yüksekliğine eşit olmalı." }
          ]
        }
      ]
    },
    {
      baslik: "Giderilebilir süreksizlik: delik ve oynamış nokta",
      kisa: "Limit var ama f(c) yok ya da yanlış yerde; tek noktayla onarılır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "🔧", terim: "Removable discontinuity", tr: "giderilebilir süreksizlik", tanim: "Limit vardır; f(c) ya yoktur ya da limite eşit değildir. Tek bir nokta düzeltilerek onarılır.", ornek: "g(x) = (x² − 9)/(x − 3) için g(3) = 4 verilmiş; limit 6 olduğu için nokta yerinden oynamıştır." },
            { ikon: "🕳️", terim: "Hole", tr: "delik", tanim: "Grafikte tek bir noktanın eksik olduğu yer. Çoğu zaman sadeleşen bir çarpandan doğar.", ornek: "(x² − 4)/(x − 2) grafiği x = 2'de delikli bir doğrudur." }
          ]
        },
        {
          tip: "grafik",
          baslik: "y = x + 1 üzerinde x = 2'de ne olabilir?",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 5,
          xticks: [{ v: 2, label: "2" }],
          yticks: [
            { v: 1, label: "1" },
            { v: 3, label: "3" }
          ],
          ogeler: [
            { id: "l1", tip: "cizgi", renk: 0, from: [0, 1], to: [1.8, 2.8] },
            { id: "l2", tip: "cizgi", renk: 0, from: [2.2, 3.2], to: [4, 5] },
            { id: "hole", tip: "yazi", x: 2, y: 2.88, metin: "○", gizli: true },
            { id: "th", tip: "yazi", x: 3, y: 2.3, metin: "limit 3, f(2) yok", gizli: true },
            { id: "mv", tip: "nokta", x: 2, y: 1, renk: 2, etiket: "f(2) = 1", gizli: true }
          ],
          durumlar: [
            { metin: "x ≠ 2 için grafik y = x + 1 doğrusu; x = 2'de bir boşluk var." },
            { metin: "Birinci durum: f(2) tanımsız. Limit 3 ama grafikte ==delik== var.", goster: ["hole", "th"] },
            { metin: "İkinci durum: f(2) = 1. Limit hâlâ 3 ama nokta yerinden oynamış.", goster: ["mv"], gizle: ["hole", "th"] },
            { metin: "Noktayı (2, 3)'e taşıyınca grafik onarılır: tek noktayla ==giderilebilir==.", set: { mv: { y: 3, etiket: "f(2) = 3" } } }
          ]
        },
        {
          tip: "tuzak",
          metin: "f(c) tanımlı olması tek başına süreklilik değildir. Yerinden oynamış noktada f(c) vardır, ama limit başka bir yüksekliktedir.",
          yanlis: "f(2) tanımlı, o hâlde f x = 2'de süreklidir.",
          dogru: "Limit de f(2)'ye eşit olmalı. Limit 3, f(2) = 1 ise süreklilik bozulur."
        }
      ]
    },
    {
      baslik: "Sıçrama süreksizliği",
      kisa: "Soldan ve sağdan limitler var ama farklı; grafik basamak gibi kırılır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [{ ikon: "🪜", terim: "Jump discontinuity", tr: "sıçrama süreksizliği", tanim: "Tek taraflı limitler vardır ama birbirine eşit değildir. Hangi noktayı koyarsan koy iki ucu birleştiremezsin.", ornek: "Kargo ücretinde tam 1 kg'da 50 TL'den 80 TL'ye basamak vardır." }]
        },
        {
          tip: "grafik",
          baslik: "Sıçrama: iki yandan farklı yüksekliğe",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 5,
          xticks: [{ v: 2, label: "2" }],
          yticks: [
            { v: 1, label: "1" },
            { v: 3, label: "3" }
          ],
          ogeler: [
            { id: "a", tip: "cizgi", renk: 0, from: [0, 1], to: [1.85, 1], gizli: true },
            { id: "ao", tip: "yazi", x: 2, y: 0.88, metin: "○", gizli: true },
            { id: "ta", tip: "yazi", x: 1, y: 1.5, metin: "soldan 1", gizli: true },
            { id: "b", tip: "cizgi", renk: 1, from: [2, 3], to: [4, 3], gizli: true },
            { id: "bp", tip: "nokta", x: 2, y: 3, renk: 1, gizli: true },
            { id: "tb", tip: "yazi", x: 3, y: 3.5, metin: "sağdan 3", gizli: true },
            { id: "m", tip: "nokta", x: 2, y: 1.5, renk: 2, etiket: "deneme", gizli: true }
          ],
          durumlar: [
            { metin: "Soldan yaklaşırken değerler ==1=='e gidiyor: soldan limit 1.", goster: ["a", "ao", "ta"] },
            { metin: "Sağdan yaklaşırken değerler ==3==: sağdan limit 3 ve f(2) = 3.", goster: ["b", "bp", "tb"] },
            { metin: "İki yan farklı: limit yok. Araya bir nokta koymayı deneyelim.", goster: ["m"] },
            { metin: "Noktayı nereye koyarsan koy iki uç hâlâ ayrık: ==giderilemez==.", set: { m: { y: 2.5 } } }
          ]
        },
        {
          tip: "tablo",
          baslik: "Kargo ücreti: 1 kg'da sıçrama",
          head: ["Ağırlık", "Ücret"],
          rows: [["0,99 kg", "50 TL"], ["1,00 kg", "50 TL"], ["1,001 kg", "80 TL"]],
          vurgu: 2,
          not: "0 < x ≤ 1 için 50 TL, 1 < x ≤ 2 için 80 TL. Soldan limit 50, sağdan limit 80."
        }
      ]
    },
    {
      baslik: "Sonsuz ve salınımlı süreksizlik",
      kisa: "Sonsuza kaçış ve sıklaşan dalga: limit yok, tek noktayla onarılamaz.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "♾️", terim: "Infinite discontinuity", tr: "sonsuz süreksizlik", tanim: "Fonksiyon c'nin yanında +∞ ya da −∞'a kaçar; orada dikey asimptot vardır.", ornek: "1/(x − 2), x = 2'de sonsuza kaçar." },
            { ikon: "🌊", terim: "Oscillating discontinuity", tr: "salınım süreksizliği", tanim: "Değerler durmadan gidip gelir, hiçbir sayıya yerleşmez.", ornek: "sin(1/x), x = 0 yakınında −1 ile 1 arasında sıklaşan dalgalar çizer." },
            { ikon: "🚫", terim: "Non-removable", tr: "giderilemez", tanim: "Limit olmadığı için tek nokta ile onarılamayan süreksizlik: sıçrama, sonsuz ve salınım.", ornek: "x = 2'deki basamağa hangi f(2)'yi verirsen ver, iki yan ayrık kalır." }
          ]
        },
        {
          tip: "grafik",
          baslik: "y = 1/(x − 2): x = 2'de sonsuz süreksizlik",
          xlabel: "x",
          ylabel: "y",
          xmax: 6,
          ymax: 12,
          xticks: [
            { v: 1, label: "0" },
            { v: 3, label: "2" },
            { v: 5, label: "4" }
          ],
          yticks: [
            { v: 4, label: "-2" },
            { v: 6, label: "0" },
            { v: 8, label: "2" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 3, kesik: true, from: [1, 0], to: [1, 12] },
            { id: "ey", tip: "cizgi", renk: 3, kesik: true, from: [0, 6], to: [6, 6] },
            { id: "L", tip: "egri", renk: 0, noktalar: [[0, 5.666666666666667], [0.2756296930156814, 5.632942703333554], [0.5359484259853315, 5.594164338707122], [0.7811049242036154, 5.5493252425912525], [1.011253990841811, 5.497170581162706], [1.2265570963468815, 5.436125066141065], [1.427183061895148, 5.364198098473597], [1.6133088585219706, 5.278858882062135], [1.7851205502388792, 5.176873063251973], [1.9428144188165828, 5.05409228256727], [2.0865983213071746, 4.905191414328135], [2.2166933509985784, 4.723360766470163], [2.3333359020333786, 4.499994220402629], [2.4367802838392763, 4.224493974009542], [2.527302105613456, 3.884483912716015], [2.6052027761390644, 3.467054124088161], [2.6708156869952555, 2.9621881708999083], [2.7245150719671356, 2.370037347811988], [2.766729418913897, 1.7131328119301577], [2.7979633761920395, 1.0504023421490238], [2.8188378145294415, 0.4800842548760569], [2.830178562818334, 0.11146191790703242], [2.833333333333333, 1.0658141036401503e-14]], gizli: true },
            { id: "va", tip: "cizgi", renk: 2, kesik: true, from: [3, 0], to: [3, 12], gizli: true },
            { id: "R", tip: "egri", renk: 0, noktalar: [[6, 6.333333333333333], [5.724370306984318, 6.367057296666446], [5.464051574014668, 6.405835661292878], [5.218895075796384, 6.4506747574087475], [4.988746009158189, 6.502829418837294], [4.773442903653119, 6.563874933858935], [4.572816938104852, 6.635801901526403], [4.386691141478029, 6.721141117937865], [4.214879449761121, 6.823126936748027], [4.057185581183417, 6.945907717432729], [3.9134016786928254, 7.094808585671865], [3.7833066490014216, 7.276639233529837], [3.6666640979666214, 7.500005779597371], [3.5632197161607237, 7.775506025990458], [3.472697894386544, 8.115516087283986], [3.3947972238609356, 8.532945875911839], [3.3291843130047445, 9.037811829100091], [3.2754849280328644, 9.629962652188013], [3.233270581086103, 10.286867188069841], [3.2020366238079605, 10.949597657850976], [3.1811621854705585, 11.519915745123942], [3.169821437181666, 11.888538082092968], [3.166666666666667, 11.99999999999999]], gizli: true },
            { id: "tl", tip: "yazi", x: 2.2, y: 1.1, metin: "−∞", renk: 2, hiza: "end", gizli: true },
            { id: "tr", tip: "yazi", x: 3.8, y: 11, metin: "+∞", gizli: true }
          ],
          durumlar: [
            { metin: "Kesikli mor çizgiler gerçek eksenler (grafik kaydırıldı). Sol kol: x → 2⁻ iken f(x) → −∞.", goster: ["L", "tl"] },
            { metin: "Sağ kol: x → 2⁺ iken f(x) → +∞. x = 2 dikey asimptot: ==sonsuz süreksizlik==.", goster: ["R", "va", "tr"] }
          ]
        },
        {
          tip: "grafik",
          baslik: "y = sin(1/x): sıfır yakınında sıklaşan dalgalar",
          xlabel: "x",
          ylabel: "y",
          xmax: 1,
          ymax: 2,
          xticks: [{ v: 1, label: "1" }],
          yticks: [
            { v: 0, label: "-1" },
            { v: 1, label: "0" },
            { v: 2, label: "1" }
          ],
          ogeler: [
            { id: "w", tip: "egri", renk: 0, noktalar: [[1, 1.8414709848078965], [0.8333333333333334, 1.9320390859672263], [0.7142857142857143, 1.9854497299884601], [0.625, 1.9995736030415052], [0.5555555555555556, 1.9738476308781951], [0.5000000000000001, 1.909297426825682], [0.4545454545454546, 1.8084964038195903], [0.4166666666666667, 1.675463180551151], [0.3846153846153846, 1.5155013718214643], [0.3571428571428571, 1.3349881501559047], [0.33333333333333326, 1.1411200080598667], [0.31249999999999994, 0.9416258565724195], [0.2941176470588235, 0.7444588979731679], [0.2777777777777777, 0.5574795567051467], [0.26315789473684204, 0.38814210905727997], [0.24999999999999994, 0.24319750469207113], [0.23809523809523803, 0.12842422758641137], [0.2272727272727272, 0.04839792611048366], [0.21739130434782603, 0.006308996366535369], [0.20833333333333326, 0.0038353911641594296], [0.19999999999999993, 0.04107572533686199], [0.19230769230769224, 0.11654534427984764], [0.18518518518518512, 0.22723551244401397], [0.1785714285714285, 0.3687333621276805], [0.1724137931034482, 0.535397820586245], [0.1666666666666666, 0.7205845018010767], [0.16129032258064507, 0.9169105971825062], [0.15624999999999992, 1.1165492048504964], [0.15151515151515144, 1.3115413635133812], [0.1470588235294117, 1.4941133511386113], [0.1428571428571428, 1.6569865987187917], [0.1388888888888888, 1.7936678638491554], [0.13513513513513506, 1.8987080958116285], [0.131578947368421, 1.9679196720314875], [0.12820512820512814, 1.998543345374605], [0.12499999999999994, 1.9893582466233812], [0.12195121951219508, 1.940730556679772], [0.11904761904761901, 1.8545989080882794], [0.11627906976744184, 1.7343970978741121], [0.11363636363636363, 1.5849171928917616], [0.1111111111111111, 1.4121184852417565], [0.10869565217391305, 1.2228899141002476], [0.10638297872340427, 1.0247754254533596], [0.10416666666666669, 0.8256732187770222], [0.10204081632653064, 0.6335208707480748], [0.10000000000000003, 0.4559788891106331], [0.09803921568627455, 0.30012531240646023], [0.0961538461538462, 0.17217353091434928], [0.09433962264150948, 0.07722457838719543], [0.09259259259259264, 0.01906376993350989], [0.09090909090909097, 0.000009793449296524592], [0.08928571428571434, 0.020822270848681157], [0.0877192982456141, 0.08067147433532085], [0.08620689655172421, 0.17717140503128614], [0.08474576271186447, 0.30647491522286996], [0.08333333333333341, 0.46342708199955607], [0.08196721311475418, 0.6417707177631613], [0.08064516129032266, 0.8343958245516784], [0.07936507936507944, 1.0336230472211243], [0.07812500000000008, 1.231509825101525], [0.07692307692307701, 1.4201670368266281], [0.07575757575757584, 1.5920735147072116], [0.07462686567164188, 1.7403758899524377], [0.07352941176470597, 1.8591618148564877], [0.07246376811594211, 1.943695669444099], [0.07142857142857152, 1.990607355694868], [0.07042253521126769, 1.9980266527163628], [0.06944444444444453, 1.9656577765492824], [0.0684931506849316, 1.8947911721405128], [0.06756756756756767, 1.7882520673753293], [0.06666666666666676, 1.650287840157133], [0.06578947368421062, 1.4863986888538183], [0.06493506493506503, 1.3031183567457243], [0.0641025641025642, 1.107753652299467], [0.06329113924050643, 0.9080931497723431], [0.0625000000000001, 0.7120966833349585], [0.061728395061728496, 0.5275780136015558], [0.06097560975609766, 0.36189331765207167], [0.060240963855421784, 0.22164792146571932], [0.059523809523809625, 0.11243296641850853], [0.0588235294117648, 0.03860250812045096], [0.05813953488372103, 0.0030999339584061314], [0.05747126436781619, 0.007340619529363379], [0.05681818181818191, 0.05115550208186592], [0.05617977528089897, 0.1327978205144027], [0.05555555555555566, 0.24901275322830274], [0.05494505494505504, 0.39516717759369047], [0.05434782608695662, 0.5654343779280745], [0.05376344086021515, 0.7530263382633446], [0.053191489361702225, 0.9504643591215971], [0.05263157894736852, 1.1498772096629173], [0.05208333333333343, 1.343314928819862], [0.05154639175257742, 1.523065765157666], [0.051020408163265404, 1.681963620068107], [0.0505050505050506, 1.8136737375070826], [0.0500000000000001, 1.9129452507276117], [0.049504950495049604, 1.975820517766967], [0.04901960784313735, 1.9997929001426684], [0.048543689320388446, 1.9839066946186237], [0.04807692307692318, 1.9287952340772563], [0.047619047619047714, 1.8366556385360795], [0.04716981132075481, 1.7111612229060125], [0.04672897196261692, 1.557315053517697], [0.04629629629629639, 1.3812504916549828], [0.045871559633027616, 1.1899866757954831], [0.04545454545454555, 0.9911486907096423], [0.04504504504504514, 0.7926635793932864], [0.04464285714285724, 0.6024443168786096], [0.044247787610619566, 0.4280743448904769], [0.04385964912280711, 0.27650524395578935], [0.04347826086956531, 0.1537795958248559], [0.04310344827586216, 0.06479008480547865], [0.042735042735042826, 0.01308444187935931], [0.0423728813559323, 0.0007240078633703462], [0.04201680672268917, 0.02820155425612414], [0.04166666666666676, 0.09442163799335357], [0.04132231404958687, 0.19674427330601352], [0.04098360655737714, 0.3310901796219361], [0.04065040650406513, 0.49210340960932897], [0.04032258064516138, 0.673364873895224], [0.04000000000000009, 0.8676482499021706], [0.03968253968253977, 1.0672080725254183], [0.03937007874015757, 1.2640885213844146], [0.03906250000000009, 1.4504405942753353], [0.03875968992248071, 1.6188350221199919], [0.038461538461538554, 1.7625584504795637], [0.0381679389312978, 1.8758810798108603], [0.03787878787878797, 1.954285094492679], [0.0375939849624061, 1.9946447738778317], [0.03731343283582098, 1.9953511049115653], [0.037037037037037125, 1.9563759284045217], [0.036764705882353026, 1.8792730616507547], [0.03649635036496359, 1.767116352635571], [0.0362318840579711, 1.6243771354164442], [0.03597122302158282, 1.4567459721442528], [0.0357142857142858, 1.270905788307934], [0.035460992907801504, 1.0742654455844287], [0.03521126760563389, 0.8746643739036378], [0.03496503496503505, 0.6800600381158692], [0.03472222222222231, 0.49821069897948733], [0.03448275862068974, 0.33636611578708564], [0.034246575342465835, 0.20097852134042893], [0.03401360544217696, 0.09744539178984524], [0.03378378378378387, 0.02989426629283276], [0.033557046979865855, 0.0010181950530540052], [0.033333333333333416, 0.011968375907126738]] },
            { id: "tw", tip: "yazi", x: 0.6, y: 0.25, metin: "x → 0: limit yok", renk: 2, gizli: true }
          ],
          durumlar: [
            { metin: "x sıfıra yaklaştıkça dalga sıklaşır ve −1 ile 1 arasında durmadan gidip gelir." },
            { metin: "Hiçbir tek değere yaklaşmıyor: limit yok, ==salınım süreksizliği==.", goster: ["tw"] }
          ]
        }
      ]
    },
    {
      baslik: "Giderilebilir mi, giderilemez mi?",
      kisa: "Limit varsa giderilebilir; limit yoksa giderilemez.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Her türde hangi şart bozulur?",
          head: ["Tür", "1 · f(c) tanımlı", "2 · limit var", "3 · limit = f(c)"],
          rows: [["Delik", "✗", "✓", "✗"], ["Yerinden oynamış nokta", "✓", "✓", "✗"], ["Sıçrama", "✓", "✗", "✗"], ["Sonsuz", "çoğu zaman ✗", "✗", "✗"], ["Salınım", "çoğu zaman ✗", "✗", "✗"]],
          not: "AP en çok ilk üçünü sorar: delik, sıçrama ve asimptot."
        },
        {
          tip: "ikili",
          sol: { ikon: "🔧", baslik: "*Removable*", maddeler: ["Limit var", "Delik ya da oynamış nokta"] },
          sag: { ikon: "🚫", baslik: "*Non-removable*", maddeler: ["Limit yok", "Sıçrama, sonsuz, salınım"] },
          oyun: [
            { metin: "Grafikte (2, 3) noktasında bir delik var.", cevap: "sol", neden: "Limit 3 var; tek noktayı doldurmak yeter." },
            { metin: "x = 4'te soldan limit 7, sağdan limit 6.", cevap: "sag", neden: "İki yan farklı: sıçrama, limit yok." },
            { metin: "lim f(x) = 3 ama f(2) = 1.", cevap: "sol", neden: "Limit var; nokta yerinden oynamış." },
            { metin: "x = 2'de grafik dikey asimptota doğru kaçıyor.", cevap: "sag", neden: "Sonsuza kaçış: limit yok." },
            { metin: "sin(1/x), x = 0 yakınında sıklaşan dalgalar çiziyor.", cevap: "sag", neden: "Hiçbir değere yerleşmiyor: limit yok." }
          ]
        }
      ]
    },
    {
      baslik: "Parçalı fonksiyonda süreklilik ve gerekçe",
      kisa: "Her noktada limitleri hesapla, f(c) ile karşılaştır ve sayıyla yaz.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Parçalı fonksiyon: üç parça",
          xlabel: "x",
          ylabel: "f(x)",
          xmax: 7,
          ymax: 9,
          xticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" }
          ],
          yticks: [
            { v: 1, label: "0" },
            { v: 4, label: "3" },
            { v: 7, label: "6" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 1], to: [7, 1] },
            { id: "p1", tip: "egri", renk: 0, noktalar: [[0, 0], [0.25, 0.0625], [0.5, 0.25], [0.75, 0.5625], [1, 1], [1.25, 1.5625], [1.5, 2.25], [1.75, 3.0625], [2, 4]], gizli: true },
            { id: "p2", tip: "cizgi", renk: 1, from: [2, 4], to: [3.9, 7.8], gizli: true },
            { id: "d2", tip: "nokta", x: 2, y: 4, renk: 1, gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 5.2, metin: "3 = 3", hiza: "end", gizli: true },
            { id: "o4", tip: "yazi", x: 4, y: 7.784, metin: "○", gizli: true },
            { id: "p3", tip: "cizgi", renk: 2, from: [4, 7], to: [7, 4], gizli: true },
            { id: "d4", tip: "nokta", x: 4, y: 7, renk: 2, gizli: true },
            { id: "t4", tip: "yazi", x: 5.5, y: 8, metin: "7 ≠ 6", renk: 2, gizli: true }
          ],
          durumlar: [
            { metin: "x < 2 için f(x) = x² − 1: (0, −1)'den (2, 3)'e. (Kesikli çizgi: gerçek x ekseni.)", goster: ["p1"] },
            { metin: "2 ≤ x < 4 için f(x) = 2x − 1. x = 2'de iki parça (2, 3)'te buluşur: ==sürekli==.", goster: ["p2", "d2", "t2"] },
            { metin: "x ≥ 4 için f(x) = 10 − x. x = 4'te soldan 7, sağdan 6: ==sıçrama==.", goster: ["p3", "d4", "o4", "t4"] }
          ]
        },
        {
          tip: "ornek",
          baslik: "f, x = 2 ve x = 4'te sürekli mi?",
          durum: "f(x) = x² − 1 (x < 2), 2x − 1 (2 ≤ x < 4), 10 − x (x ≥ 4).",
          adimlar: ["x = 2: f(2) ortadaki formülden gelir (2 ≤ x): 2 × 2 − 1 = 3.", "Soldan limit: 2² − 1 = 3. Sağdan limit: 2 × 2 − 1 = 3. Limit 3 = f(2): üç şart tamam.", "x = 4: f(4) son formülden gelir (x ≥ 4): 10 − 4 = 6.", "Soldan limit: 2 × 4 − 1 = 7. Sağdan limit: 10 − 4 = 6.", "7 ≠ 6, yani limit yok. Gerekçe: lim x→4⁻ f(x) = 7 ≠ 6 = lim x→4⁺ f(x), bu yüzden f x = 4'te sürekli değildir."],
          sonuc: "x = 2'de sürekli (3 = 3 = 3); x = 4'te sıçrama süreksizliği (7 ≠ 6)."
        },
        {
          tip: "kavramlar",
          kartlar: [{ ikon: "📝", terim: "Justification", tr: "gerekçe", tanim: "AP'de cevabın nedenini limitleri ve f(c)'yi sayıyla yazarak göstermek. Cevap kadar gerekçe de puan getirir.", ornek: "lim x→2 f(x) = 3 = f(2), bu yüzden f x = 2'de süreklidir." }]
        },
        {
          tip: "tuzak",
          metin: "Gerekçeyi “grafik bağlı görünüyor” gibi bir cümleyle yazmak puan getirmez. Parçalı fonksiyonda f(c)'yi hangi parçadan hesaplayacağını eşitlik işaretine (≤ ya da ≥) bakarak seç.",
          yanlis: "Grafik bağlı görünüyor, o yüzden süreklidir.",
          dogru: "Üç şartı sayılarla göster: lim = 3 = f(2)."
        }
      ]
    },
    {
      baslik: "Grafikten süreksizlik türünü okumak",
      kisa: "Her x değerinde limit ve değeri ayrı oku; köşe süreksizlik değildir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Grafikten süreksizlik türünü oku",
          xlabel: "x",
          ylabel: "y",
          xmax: 8,
          ymax: 7,
          xticks: [
            { v: 1, label: "1" },
            { v: 3, label: "3" },
            { v: 5, label: "5" },
            { v: 7, label: "7" }
          ],
          ogeler: [
            { id: "A1", tip: "cizgi", renk: 0, from: [0, 1], to: [0.85, 1.85] },
            { id: "A2", tip: "cizgi", renk: 0, from: [1.15, 2.15], to: [2.85, 3.85] },
            { id: "h1", tip: "yazi", x: 1, y: 1.832, metin: "○" },
            { id: "h3", tip: "yazi", x: 3, y: 3.832, metin: "○" },
            { id: "Bc", tip: "egri", renk: 0, noktalar: [[3, 0.5], [3.1806648408001945, 0.5496513355130387], [3.3512939262760995, 0.6065362504192875], [3.5119847402343023, 0.6720361188751919], [3.6628387502996747, 0.7478529610576978], [3.8039617942441746, 0.8360936926492738], [3.935464527964887, 0.9393768702589702], [4.057462949283308, 1.060966249803776], [4.170079016122963, 1.2049339870025049], [4.27344138376213, 1.3763514431609285], [4.367686294638316, 1.581493476292752], [4.452958667041085, 1.8280154345761372], [4.529413448391626, 2.125007602920638], [4.597217328903055, 2.482728458194546], [4.656550959981929, 2.911640108085273], [4.7076119036877895, 3.4201118739533265], [4.750618685593529, 4.00992352767089], [4.785816601793584, 4.66889594793088], [4.813486509876336, 5.36154247790318], [4.833959187756127, 6.022615683975624], [4.847641592716776, 6.563471080011162], [4.855075024368319, 6.90012191232964], [4.857142857142857, 6.999999999999981]] },
            { id: "B0", tip: "nokta", x: 3, y: 0.5, renk: 0 },
            { id: "VA", tip: "cizgi", renk: 2, kesik: true, from: [5, 0], to: [5, 7], gizli: true },
            { id: "h5", tip: "yazi", x: 5, y: 2.832, metin: "○" },
            { id: "C1", tip: "cizgi", renk: 0, from: [5.12, 2.88], to: [7, 1] },
            { id: "C2", tip: "cizgi", renk: 0, from: [7, 1], to: [8, 2] },
            { id: "C0", tip: "nokta", x: 8, y: 2, renk: 0 },
            { id: "k1", tip: "yazi", x: 1.9, y: 1.1, metin: "x=1 delik", gizli: true },
            { id: "k3", tip: "yazi", x: 2.2, y: 5, metin: "x=3 sıçrama", renk: 2, gizli: true },
            { id: "k5", tip: "yazi", x: 5.2, y: 6.3, metin: "x=5 sonsuz", renk: 2, hiza: "start", gizli: true },
            { id: "cor", tip: "nokta", x: 7, y: 1, renk: 1, gizli: true },
            { id: "k7", tip: "yazi", x: 7, y: 3.3, metin: "x=7 sürekli", renk: 1, gizli: true }
          ],
          durumlar: [
            { metin: "Üç parçalı bir grafik. Dört noktaya sırayla bakalım." },
            { metin: "x = 1: limit 2 var ama f(1) yok. ==Delik==: giderilebilir.", goster: ["k1"] },
            { metin: "x = 3: soldan 4'e, sağdan 0,5'e gidiyor (f(3) = 0,5). ==Sıçrama==.", goster: ["k3"] },
            { metin: "x = 5: grafik yukarı kaçıyor. ==Sonsuz== süreksizlik, dikey asimptot.", goster: ["VA", "k5"] },
            { metin: "x = 7: sivri köşe ama kalem kalkmadan geçiyor; limit = değer = 1. ==Sürekli==.", goster: ["cor", "k7"] }
          ]
        },
        {
          tip: "tuzak",
          metin: "|x − 7| gibi sivri köşede kalemi kaldırmadan geçersin. Limit var ve değere eşit; fonksiyon orada süreklidir.",
          yanlis: "Sivri köşe bir süreksizliktir.",
          dogru: "Köşe süreksizlik değildir. Yalnızca türev için sorun çıkarır; onu Unit 2'de göreceğiz."
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: ["c'de sürekli: f(c) tanımlı, limit var ve limit = f(c).", "Bir şart bozulursa süreksizlik var. Limit varsa *removable* (delik ya da oynamış nokta).", "*Jump*: tek taraflı limitler var ama farklı. *Infinite*: ±∞'a kaçış, dikey asimptot. Salınım: dalgalar, limit yok.", "Son üçü *non-removable*: limit olmadığı için tek nokta onarmaz.", "f(c) tanımlı olması yetmez: yerinden oynamış nokta süreksizdir.", "Parçalı fonksiyonda f(c) eşitlik işaretinin olduğu parçadan hesaplanır.", "Gerekçeyi sayıyla yaz: lim = 3 = f(2); “bağlı görünüyor” puan getirmez.", "Sivri köşe süreksizlik değildir."]
        }
      ]
    }
  ]
};
