/* Kitora not defteri · st110 · 1E Dağılımları Karşılaştırmak
   Kaynak: ap-videolar/src/episodes/st110 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st110",
  ozet: "İki grubu adil karşılaştırmak için dört başlığa bakar (*shape*, *outliers*, *center*, *variability*), hepsini *in context* yazar ve ==karşılaştırma sözcüğü== kullanırsın. Bu defterde *parallel dotplots*, *back-to-back stemplot*, karşılaştırmalı *histogram* ve *side-by-side boxplots* araçlarını, grup büyüklükleri farklıyken *relative frequency* kullanmayı ve iki bireyi *z-score* ile kıyaslamayı göreceksin.",
  bolumler: [
    {
      baslik: "Kim daha golcü?",
      bloklar: [
        { tip: "hikaye", ikon: "⚽", baslik: "Manchester United mı, Liverpool mu?",
          metin: "Arkadaşınla tartışıyorsun: hangi takım daha golcü? O diyor ki: “Liverpool bir maçta 9 gol attı!” Sen diyorsun ki: “United her maç bir iki gol buluyor.” İkiniz de ==tek bir şeye== bakıyorsunuz: o 9 gollü maça, sen tipik maça. İki grubu adil karşılaştırmak için birkaç şeye birden bakmak ve bunu doğru cümleyle söylemek gerekir." },
        { tip: "ikili", ayirici: "vs",
          sol: { ikon: "🔴", baslik: "United diyor ki", maddeler: ["Her maç 1–2 gol", "Gol sayıları: 1 · 2 · 1 · 2 · 2", "Bakışı: tipik maç"] },
          sag: { ikon: "🏟️", baslik: "Arkadaşın diyor ki", maddeler: ["Bir maçta 9 gol", "Tek bir maç", "Bakışı: en uçtaki değer"] } },
        { tip: "not", metin: "İkisi de haklı, ikisi de eksik. Tek bir sayı iki dağılımı anlatmaz. Bu bölümün işi, ==hangi dört şeye bakacağını== ve ==nasıl cümle kuracağını== öğretmek." }
      ]
    },
    {
      baslik: "Dört başlık ve karşılaştırma dili",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Comparing distributions", tr: "dağılımları karşılaştırmak", tanim: "Aynı *quantitative* değişkenin iki (ya da daha çok) gruptaki dağılımını yan yana değerlendirmek.", ornek: "United'ın ve Liverpool'un maç başına attığı gol sayıları." },
            { ikon: "🔷", terim: "Shape", tr: "şekil", tanim: "Dağılımın görünümü: kabaca simetrik mi, sağa ya da sola çarpık mı?", ornek: "United kabaca simetrik; Liverpool sağa çarpık." },
            { ikon: "🎯", terim: "Outliers", tr: "aykırı değerler", tanim: "Kalabalıktan belirgin biçimde uzakta kalan değerler.", ornek: "Liverpool'un 9 gollü maçı." },
            { ikon: "📍", terim: "Center", tr: "merkez", tanim: "Dağılımın tipik değeri: genellikle *median* (ya da *mean*).", ornek: "Liverpool'un *median*'ı 3, United'ınki 2." },
            { ikon: "↔️", terim: "Variability", tr: "değişkenlik", tanim: "Değerlerin ne kadar dağınık olduğu: *range*, *IQR* ya da *standard deviation*.", ornek: "Liverpool'un golleri 1 ile 9 arasında, United'ınkiler 0 ile 3 arasında." },
            { ikon: "🏷️", terim: "In context", tr: "bağlamıyla", tanim: "Cevapta değişkenin adını ve grupları kullanmak; yalnızca sayı ya da birim yazmamak.", ornek: "“goals scored”, “Liverpool”, “United” gibi adları cümlede geçirmek." },
            { ikon: "🗣️", terim: "Comparative language", tr: "karşılaştırma dili", tanim: "Açıkça karşılaştıran sözcükler: *greater than*, *less than*, *higher*, *lower*, *more variable than*, *less variable than*, *similar to*.", ornek: "“Liverpool's median is greater than United's.”" }
          ] },
        { tip: "formul", parcalar: [
            { t: "*Shape*", alt: "şekil" }, "+", { t: "*Outliers*", alt: "aykırı değer" }, "+", { t: "*Center*", alt: "merkez" }, "+", { t: "*Variability*", alt: "değişkenlik" }, "=",
            { t: "Tam cevap", alt: "hepsi *in context*, hepsi karşılaştırmalı" }
          ], aciklama: "Tek dağılımı anlatırken kullandığın listenin aynısı; karşılaştırırken tek ekleme: karşılaştırma sözcüğü." },
        { tip: "ikili",
          sol: { ikon: "✅", baslik: "Karşılaştırma", maddeler: ["Tek cümlede iki grubu bağlar", "“Liverpool's median (3) is greater than United's (2).”", "Tam puan getirir"] },
          sag: { ikon: "❌", baslik: "İki ayrı liste", maddeler: ["Her grubu ayrı ayrı anlatır", "“United's median is 2. Liverpool's median is 3.”", "Puan getirmez"] },
          oyun: [
            { metin: "A şubesinin median'ı 70. B şubesinin median'ı 78.", cevap: "sag", neden: "İki sayı yan yana duruyor ama aralarında karşılaştırma sözcüğü yok: iki ayrı liste." },
            { metin: "B şubesinin median'ı A şubesinin median'ından daha yüksek.", cevap: "sol", neden: "*Higher than* ile iki grubu açıkça bağlıyor: gerçek karşılaştırma." },
            { metin: "Liverpool'un gol sayıları United'ınkinden daha değişken (range 8, range 3).", cevap: "sol", neden: "*More variable* sözcüğü ve iki sayı birlikte: karşılaştırma." },
            { metin: "United'ın range'i 3. Liverpool'un range'i 8.", cevap: "sag", neden: "Sayılar doğru ama hangisinin daha değişken olduğu hiçbir yerde yazmıyor." },
            { metin: "Her iki hattın tipik yolculuk süresi benzer (median 30 dakika).", cevap: "sol", neden: "*Similar to* de bir karşılaştırma ifadesidir." }
          ] },
        { tip: "tuzak", baslik: "İki ayrı liste karşılaştırma değildir", metin: "Center ve variability için mutlaka bir karşılaştırma cümlesi kur.", yanlis: "“A'nın median'ı 70. B'nin median'ı 78.”", dogru: "“B's median is greater than A's.” Sayıları da yanına ekleyebilirsin." },
        { tip: "tablo", baslik: "Anahtar sözcükler", head: ["Daha büyük / küçük", "Değişkenlik", "Benzerlik"], rows: [
            ["*greater than*", "*more variable than*", "*similar to*"],
            ["*less than*", "*less variable than*", "*about the same as*"],
            ["*higher*", "*more spread out*", ""],
            ["*lower*", "", ""]
          ], not: "Cümlede bu sözcüklerden en az biri geçmeli." }
      ]
    },
    {
      baslik: "*Parallel dotplots*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🟣", terim: "Parallel dotplots", tr: "paralel nokta grafikleri", tanim: "Aynı eksen üzerinde alt alta çizilmiş iki *dotplot*. Eksen ortak olduğu için gruplar doğrudan kıyaslanır.", ornek: "Dokuz maçın gol sayıları: üstte United, altta Liverpool." }
          ] },
        { tip: "tablo", baslik: "Örnek veri: dokuzar maç (gol sayısı)", head: ["Takım", "Dokuz maçta attığı goller"], rows: [
            ["Manchester United", "0, 1, 1, 1, 2, 2, 2, 3, 3"],
            ["Liverpool", "1, 1, 2, 2, 3, 3, 4, 4, 9"]
          ], not: "Bu değerler ekranda “örnek veri” olarak gösterilen, bu bölüm için uydurulmuş değerlerdir." },
        { tip: "grafik", baslik: "Dotplot'ları kur ve oku", xlabel: "Goals scored", ylabel: "", xmax: 10, ymax: 6,
          xticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (v) { return { v: v, label: String(v) }; }), yticks: [],
          ogeler: [
            { id: "ul", tip: "cizgi", renk: 1, from: [0, 3], to: [10, 3], etiket: "" },
            { id: "ut", tip: "yazi", x: 0.15, y: 5.4, metin: "Manchester United", hiza: "start" },
            { id: "u0a", tip: "nokta", x: 0, y: 3.35 },
            { id: "u1a", tip: "nokta", x: 1, y: 3.35 }, { id: "u1b", tip: "nokta", x: 1, y: 3.65 }, { id: "u1c", tip: "nokta", x: 1, y: 3.95 },
            { id: "u2a", tip: "nokta", x: 2, y: 3.35 }, { id: "u2b", tip: "nokta", x: 2, y: 3.65 }, { id: "u2c", tip: "nokta", x: 2, y: 3.95 },
            { id: "u3a", tip: "nokta", x: 3, y: 3.35 }, { id: "u3b", tip: "nokta", x: 3, y: 3.65 },
            { id: "lt", tip: "yazi", x: 0.15, y: 2.45, metin: "Liverpool", hiza: "start", gizli: true },
            { id: "l1a", tip: "nokta", x: 1, y: 0.35, gizli: true }, { id: "l1b", tip: "nokta", x: 1, y: 0.65, gizli: true },
            { id: "l2a", tip: "nokta", x: 2, y: 0.35, gizli: true }, { id: "l2b", tip: "nokta", x: 2, y: 0.65, gizli: true },
            { id: "l3a", tip: "nokta", x: 3, y: 0.35, gizli: true }, { id: "l3b", tip: "nokta", x: 3, y: 0.65, gizli: true },
            { id: "l4a", tip: "nokta", x: 4, y: 0.35, gizli: true }, { id: "l4b", tip: "nokta", x: 4, y: 0.65, gizli: true },
            { id: "l9a", tip: "nokta", x: 9, y: 0.35, gizli: true },
            { id: "um", tip: "cizgi", renk: 0, kesik: true, from: [2, 3], to: [2, 5], etiket: "", gizli: true },
            { id: "umt", tip: "yazi", x: 2.1, y: 4.9, metin: "Median = 2", hiza: "start", gizli: true },
            { id: "lm", tip: "cizgi", renk: 2, kesik: true, from: [3, 0], to: [3, 2], etiket: "", gizli: true },
            { id: "lmt", tip: "yazi", x: 3.1, y: 1.9, metin: "Median = 3", hiza: "start", gizli: true },
            { id: "ur", tip: "ok", from: [0, 4.4], to: [3, 4.4], gizli: true },
            { id: "urt", tip: "yazi", x: 4.5, y: 4.3, metin: "Range = 3 − 0 = 3", hiza: "start", gizli: true },
            { id: "lr", tip: "ok", from: [1, 1.4], to: [9, 1.4], gizli: true },
            { id: "lrt", tip: "yazi", x: 5, y: 1.9, metin: "Range = 9 − 1 = 8", hiza: "middle", gizli: true },
            { id: "fence", tip: "cizgi", renk: 3, kesik: true, from: [7.75, 0], to: [7.75, 2.2], etiket: "", gizli: true },
            { id: "fencet", tip: "yazi", x: 7.65, y: 2.4, metin: "7.75 sınır", hiza: "end", gizli: true },
            { id: "outt", tip: "yazi", x: 9, y: 1.2, metin: "high outlier", gizli: true },
            { id: "cu", tip: "egri", renk: 0, etiket: "", gizli: true, noktalar: [[0, 3.1], [0.8, 3.9], [1.7, 4.4], [2.6, 3.9], [3.6, 3.1]] },
            { id: "cl", tip: "egri", renk: 2, etiket: "", gizli: true, noktalar: [[0.6, 0.15], [1.5, 1.1], [2.5, 1.7], [3.7, 1.2], [5.2, 0.7], [7.2, 0.35], [8.7, 0.2]] }
          ],
          durumlar: [
            { metin: "Önce Manchester United'ın dokuz maçı: 0'da 1, 1'de 3, 2'de 3, 3'te 2 nokta. Her nokta bir maç." },
            { metin: "Aynı eksenin altına Liverpool: 1, 2, 3 ve 4'te ikişer, 9'da 1 nokta. 5–8 arası boş.", goster: ["lt", "l1a", "l1b", "l2a", "l2b", "l3a", "l3b", "l4a", "l4b", "l9a"] },
            { metin: "==*Center*==: dokuz değerin ortancası 5. değerdir. United'da *median* 2, Liverpool'da 3.", goster: ["um", "umt", "lm", "lmt"] },
            { metin: "==*Variability*==: United'ın *range*'i 3, Liverpool'unki 8. Liverpool daha değişken.", goster: ["ur", "urt", "lr", "lrt"], gizle: ["um", "umt", "lm", "lmt"] },
            { metin: "==*Outliers*==: Liverpool'da üst sınır 4 + 1.5 × 2.5 = 7.75. 9 bu sınırın dışında: ==high outlier==. United'da aykırı değer yok.", goster: ["fence", "fencet", "outt"], gizle: ["ur", "urt", "lr", "lrt"] },
            { metin: "==*Shape*==: United kabaca simetrik; Liverpool'un kuyruğu sağa uzuyor, yani *skewed right*.", goster: ["cu", "cl"], gizle: ["fence", "fencet", "outt"] }
          ] }
      ]
    },
    {
      baslik: "Dört başlıkla tam cevap",
      bloklar: [
        { tip: "ornek", baslik: "*Center*: iki *median*", durum: "Dokuz değerin ortancası 5. değerdir. United: 0, 1, 1, 1, **2**, 2, 2, 3, 3. Liverpool: 1, 1, 2, 2, **3**, 3, 4, 4, 9.",
          adimlar: ["United'ın 5. değeri 2, yani *median* = 2.", "Liverpool'un 5. değeri 3, yani *median* = 3.", "3 > 2 olduğu için Liverpool'un tipik gol sayısı daha yüksek."],
          sonuc: "“Liverpool's median number of goals (3) is greater than United's (2).”" },
        { tip: "ornek", baslik: "*Variability*: *range* ve *IQR*", durum: "Aynı iki veri kümesi için dağılımın yayılımını sayıyla söyle.",
          adimlar: [
            "United: *range* = 3 − 0 = 3. Alt yarı 0, 1, 1, 1 → Q1 = 1; üst yarı 2, 2, 3, 3 → Q3 = 2.5; *IQR* = 2.5 − 1 = 1.5.",
            "Liverpool: *range* = 9 − 1 = 8. Alt yarı 1, 1, 2, 2 → Q1 = 1.5; üst yarı 3, 4, 4, 9 → Q3 = 4; *IQR* = 4 − 1.5 = 2.5.",
            "8 > 3 ve 2.5 > 1.5: iki ölçüye göre de Liverpool daha değişken."
          ],
          sonuc: "Liverpool'un gol sayıları United'ınkinden daha değişken." },
        { tip: "ornek", baslik: "*Outliers*: 1.5 × *IQR* kuralı", durum: "9 gerçekten aykırı mı? Sınırları hesapla.",
          adimlar: [
            "Liverpool: üst sınır = Q3 + 1.5 × *IQR* = 4 + 1.5 × 2.5 = 4 + 3.75 = 7.75.",
            "Alt sınır = 1.5 − 3.75 = −2.25. Hiçbir değer bunun altında değil.",
            "9 > 7.75 olduğu için 9 bir ==high outlier==.",
            "United: sınırlar 1 − 2.25 = −1.25 ve 2.5 + 2.25 = 4.75. Bütün değerler (0–3) içeride: aykırı değer yok."
          ],
          sonuc: "Liverpool'un 9 gollü maçı *high outlier*; United'da aykırı değer yok." },
        { tip: "adimlar", baslik: "Dördü birden: tam puanlık cevap", adimlar: [
            { baslik: "*Shape*", metin: "“United's distribution of goals scored is roughly symmetric, while Liverpool's is skewed to the right.”" },
            { baslik: "*Outliers*", metin: "“Liverpool has a high outlier at 9 goals; United has none.”" },
            { baslik: "*Center*", metin: "“Liverpool's median (3) is greater than United's (2).”" },
            { baslik: "*Variability*", metin: "“Liverpool's goals scored vary more (range 8 vs. 3).”" },
            { baslik: "Sonuç: 4/4", metin: "Dördü de gol sayısı (*goals scored*) üzerinden ve karşılaştırarak yazıldı." }
          ] },
        { tip: "not", metin: "Dikkat: cümlelerde *while*, *greater than*, *vary more* gibi bağlayıcılar var. Bunlar, iki grubu tek cümlede buluşturan kısımlar." }
      ]
    },
    {
      baslik: "*Back-to-back stemplot*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪜", terim: "Back-to-back stemplot", tr: "sırt sırta gövde-yaprak grafiği", tanim: "*Stem* sütunu ortada tek; bir grubun yaprakları (*leaves*) sola, öbürününki sağa yazılır. Yapraklar *stem*'den dışa doğru büyür.", ornek: "11-A ve 11-B şubelerinin quiz puanları." },
            { ikon: "🗝️", terim: "Key", tr: "anahtar", tanim: "Stem ve leaf'in ne anlama geldiğini bağlamıyla anlatan not. ==Her stemplot'ta yazılmalı.==", ornek: "Key: 2 | 7 | 1 = 72 points in 11-A and 71 points in 11-B" }
          ] },
        { tip: "tablo", baslik: "Veri: iki şubenin quiz puanları", head: ["Şube", "Puanlar (8'er öğrenci)"], rows: [
            ["11-A", "58, 63, 67, 72, 74, 75, 81, 88"],
            ["11-B", "71, 76, 78, 82, 84, 85, 89, 93"]
          ] },
        { tip: "sekil", baslik: "11-A (sol) | stem | 11-B (sağ)", fig: { type: "stem", stems: [
            { s: "8 | 5", leaves: "" },
            { s: "7 3 | 6", leaves: "" },
            { s: "5 4 2 | 7", leaves: "1 6 8" },
            { s: "8 1 | 8", leaves: "2 4 5 9" },
            { s: "| 9", leaves: "3" }
          ], key: "2 | 7 | 1 = 72 points in 11-A and 71 points in 11-B" } },
        { tip: "adimlar", baslik: "Grafiği nasıl okursun?", adimlar: [
            { baslik: "Yapraklar dışa doğru büyür", metin: "Sağ taraf soldan sağa küçükten büyüğe okunur. Sol taraf ==sağdan sola== okunur: 7'nin solunda 5, 4, 2 yazıyorsa değerler 72, 74, 75." },
            { baslik: "Stem'le birleştir", metin: "7 | 2 → 72. 7'nin sağındaki 1, 6, 8 ise B şubesinde 71, 76, 78 demek." },
            { baslik: "Key'i oku", metin: "Key birimi ve bağlamı söyler: puanlar, puan. Key olmadan 7 | 2 hem 72, hem 7.2, hem 720 olabilir." }
          ] },
        { tip: "ornek", baslik: "İki şubenin merkezini ve yayılımını karşılaştır", durum: "Sekiz değer olduğu için *median* ortadaki iki değerin ortalamasıdır.",
          adimlar: [
            "11-A: 58, 63, 67, **72, 74**, 75, 81, 88 → *median* = (72 + 74) ÷ 2 = 73.",
            "11-B: 71, 76, 78, **82, 84**, 85, 89, 93 → *median* = (82 + 84) ÷ 2 = 83.",
            "Fark: 83 − 73 = 10 puan.",
            "*Range*: A için 88 − 58 = 30, B için 93 − 71 = 22. A daha değişken."
          ],
          sonuc: "“Class B's quiz scores are typically about 10 points higher than Class A's; Class A's scores are more variable (range 30 vs. 22).”" },
        { tip: "tuzak", baslik: "Stemplot'ta üç tuzak", metin: "Back-to-back stemplot için üç şart: tek ortak *stem*, dışa doğru sıralı yapraklar ve bir *key*.", yanlis: "Sol yaprakları soldan sağa 2 4 5 diye yazmak ve key'i atlamak.", dogru: "Sol yapraklar stem'den dışa doğru büyür, yani soldan sağa 5 4 2 yazılır; key mutlaka yazılır." }
      ]
    },
    {
      baslik: "Karşılaştırmalı *histogram*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📊", terim: "Comparative histograms", tr: "karşılaştırmalı histogramlar", tanim: "Aynı aralıklar (*intervals*) ve aynı ölçekle çizilmiş histogramlar; alt alta konunca sütunlar doğrudan kıyaslanır.", ornek: "Ekran süresi: 0–2, 2–4, 4–6, 6–8 saat aralıkları iki grafikte de aynı." },
            { ikon: "💯", terim: "Relative frequency", tr: "bağıl frekans", tanim: "Sayı yerine oran ya da yüzde. Grup büyüklükleri farklıyken adil kıyas için kullanılır.", ornek: "40 kişi / 200 kişi = %20." }
          ] },
        { tip: "adimlar", baslik: "Histogramla karşılaştırırken iki kural", adimlar: [
            { baslik: "Bir: aynı aralıklar, aynı ölçek", metin: "İki grafiğin yatay ekseni aynı sınırlarda ve aynı genişlikte olmalı; yoksa şekil farkı grafikten gelir, veriden değil." },
            { baslik: "İki: grup büyüklükleri farklıysa yüzde", metin: "Sayıları değil *relative frequency*'yi karşılaştır; büyük grup her sütunda sayıca öne geçer." }
          ] },
        { tip: "ornek", baslik: "Okulda ekran süresi", durum: "Okulda 200 dokuzuncu sınıf, 50 on ikinci sınıf öğrencisi var. Günde 4 saatten fazla ekrana bakanlar: dokuzlarda 40, on ikilerde 20 kişi.",
          adimlar: [
            "Sayıya bak: 40 > 20, dokuzlar önde görünüyor.",
            "Ama gruplar eşit değil. Dokuzlar: 40 ÷ 200 = 0.20 = %20.",
            "On ikiler: 20 ÷ 50 = 0.40 = %40.",
            "40% > 20%: yüzdeler tersini söylüyor."
          ],
          sonuc: "“A greater percentage of 12th graders (40%) than 9th graders (20%) spend more than 4 hours.”" },
        { tip: "grafik", baslik: "Sayıdan yüzdeye geçince sıralama tersine döner", xlabel: "Sınıf düzeyi", ylabel: "", xmax: 4, ymax: 48,
          xticks: [{ v: 1, label: "Grade 9 (n=200)" }, { v: 3, label: "Grade 12 (n=50)" }], yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }, { v: 40, label: "40" }],
          ogeler: [
            { id: "g9", tip: "alan", renk: 0, noktalar: [[0.5, 0], [1.5, 0], [1.5, 40], [0.5, 40]] },
            { id: "g12", tip: "alan", renk: 2, noktalar: [[2.5, 0], [3.5, 0], [3.5, 20], [2.5, 20]] },
            { id: "tf", tip: "yazi", x: 2, y: 45.5, metin: "Frekans (kişi sayısı)" },
            { id: "tp", tip: "yazi", x: 2, y: 45.5, metin: "Relative frequency (%)", gizli: true },
            { id: "v9", tip: "yazi", x: 1, y: 41.5, metin: "40 kişi" },
            { id: "v12", tip: "yazi", x: 3, y: 22, metin: "20 kişi" },
            { id: "p9", tip: "yazi", x: 1, y: 22, metin: "%20", gizli: true },
            { id: "p12", tip: "yazi", x: 3, y: 41.5, metin: "%40", gizli: true }
          ],
          durumlar: [
            { metin: "Sayıya göre: dokuzlarda 40, on ikilerde 20 kişi. Dokuzların sütunu iki kat uzun." },
            { metin: "Sayılar yerine oran: 40 ÷ 200 = %20 ve 20 ÷ 50 = %40. Eksen artık yüzde.", set: { g9: { noktalar: [[0.5, 0], [1.5, 0], [1.5, 20], [0.5, 20]] }, g12: { noktalar: [[2.5, 0], [3.5, 0], [3.5, 40], [2.5, 40]] } }, goster: ["tp", "p9", "p12"], gizle: ["tf", "v9", "v12"] },
            { metin: "Sıralama tersine döndü: ==grup büyüklükleri farklıyken sayıya değil yüzdeye bak.==", set: { g12: { noktalar: [[2.5, 0], [3.5, 0], [3.5, 40], [2.5, 40]] } } }
          ] },
        { tip: "sekil", baslik: "Aynı bilgi: iki farklı bakış", fig: { type: "bar", cats: ["Grade 9", "Grade 12"], series: [{ name: "Frekans (kişi)", values: [40, 20] }, { name: "Relative frequency (%)", values: [20, 40] }], ylabel: "Frekans ve yüzde" } },
        { tip: "ikili",
          sol: { ikon: "🔢", baslik: "Frekans (sayı)", maddeler: ["Gruplar eşit büyüklükteyse yeterli", "Büyük grup her sütunda öne geçer", "“Kaç kişi?” sorusunu cevaplar"] },
          sag: { ikon: "💯", baslik: "*Relative frequency* (yüzde)", maddeler: ["Gruplar farklı büyüklükteyse şart", "Büyüklük etkisini ortadan kaldırır", "“Grubun yüzde kaçı?” sorusunu cevaplar"] },
          oyun: [
            { metin: "İki sınıfta 30'ar öğrenci var; kaç kişinin geç kaldığını karşılaştırıyoruz.", cevap: "sol", neden: "Gruplar eşit, sayı yeterli." },
            { metin: "Şehirde 5 milyon, kasabada 20 bin kişi var; hangisinde kişi başına daha çok bisiklet var?", cevap: "sag", neden: "Gruplar çok farklı; oran gerekli." },
            { metin: "200 dokuzuncu ve 50 on ikinci sınıf öğrencisinin ekran süresi.", cevap: "sag", neden: "n = 200 ve n = 50 eşit değil; yüzde karşılaştırılır." },
            { metin: "Aynı sınıfın iki ayrı sınavında 4 saatten fazla çalışanların sayısı.", cevap: "sol", neden: "Aynı kişiler, aynı grup büyüklüğü: sayı yeterli." }
          ] },
        { tip: "tuzak", baslik: "Eksen kaydırma tuzağı", metin: "İki histogram karşılaştırılırken ekseni bir yerde farklı ölçeğe çekersen şekil bozulur.", yanlis: "Her grafiğe kendi eksenini ve kendi aralıklarını çizmek.", dogru: "Aynı aralıklar, ortak yatay eksen ölçeği; farklı grup büyüklüklerinde *relative frequency*." }
      ]
    },
    {
      baslik: "*Side-by-side boxplots*: merkez",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📦", terim: "Side-by-side (parallel) boxplots", tr: "yan yana (paralel) kutu grafikleri", tanim: "Aynı sayı doğrusunda alt alta çizilmiş *boxplot*'lar. Grupları karşılaştırmanın en hızlı yolu.", ornek: "1968 ve 1978 takım başına *home run* sayıları." }
          ] },
        { tip: "hikaye", ikon: "⚾", baslik: "İkinci *Dead-Ball Era* var mıydı?", metin: "Beyzbol tarihinde, yaklaşık 1964–1972 arası için çok az *home run* atıldığı söylenir; buna ikinci *Dead-Ball Era* deniyor. Doğru mu? 1968 ile 1978'i *side-by-side boxplots* ile karşılaştıralım. Aşağıdaki sayılar ==temsili değerlerdir==, gerçek ligin tam verisi değil." },
        { tip: "tablo", baslik: "Takım başına home run: beş sayı özeti (temsili değerler)", head: ["Yıl", "min", "Q1", "median", "Q3", "bıyık ucu", "outlier"], rows: [
            ["1968", "65", "80", "95", "110", "135", "185"],
            ["1978", "70", "100", "120", "145", "175", "yok"]
          ] },
        { tip: "grafik", baslik: "1968 ve 1978 kutularını kur ve kıyasla", xlabel: "Home runs per team", ylabel: "", xmax: 200, ymax: 10,
          xticks: [{ v: 50, label: "50" }, { v: 100, label: "100" }, { v: 150, label: "150" }, { v: 200, label: "200" }], yticks: [],
          ogeler: [
            { id: "a68", tip: "yazi", x: 4, y: 8.6, metin: "1968", hiza: "start" },
            { id: "w68a", tip: "cizgi", renk: 0, etiket: "", from: [65, 7], to: [80, 7] },
            { id: "w68b", tip: "cizgi", renk: 0, etiket: "", from: [110, 7], to: [135, 7] },
            { id: "c68a", tip: "cizgi", renk: 0, etiket: "", from: [65, 6.5], to: [65, 7.5] },
            { id: "c68b", tip: "cizgi", renk: 0, etiket: "", from: [135, 6.5], to: [135, 7.5] },
            { id: "b68", tip: "alan", renk: 0, noktalar: [[80, 6.1], [110, 6.1], [110, 7.9], [80, 7.9]] },
            { id: "m68", tip: "cizgi", renk: 0, etiket: "", from: [95, 6.1], to: [95, 7.9] },
            { id: "o68", tip: "nokta", x: 185, y: 7, renk: 0 },
            { id: "a78", tip: "yazi", x: 4, y: 4.2, metin: "1978", hiza: "start", gizli: true },
            { id: "w78a", tip: "cizgi", renk: 2, etiket: "", from: [70, 2.5], to: [100, 2.5], gizli: true },
            { id: "w78b", tip: "cizgi", renk: 2, etiket: "", from: [145, 2.5], to: [175, 2.5], gizli: true },
            { id: "c78a", tip: "cizgi", renk: 2, etiket: "", from: [70, 2], to: [70, 3], gizli: true },
            { id: "c78b", tip: "cizgi", renk: 2, etiket: "", from: [175, 2], to: [175, 3], gizli: true },
            { id: "b78", tip: "alan", renk: 2, noktalar: [[100, 1.6], [145, 1.6], [145, 3.4], [100, 3.4]], gizli: true },
            { id: "m78", tip: "cizgi", renk: 2, etiket: "", from: [120, 1.6], to: [120, 3.4], gizli: true },
            { id: "md1", tip: "yazi", x: 95, y: 8.4, metin: "95", gizli: true },
            { id: "md2", tip: "yazi", x: 120, y: 0.7, metin: "120", gizli: true },
            { id: "plus", tip: "yazi", x: 108, y: 4.9, metin: "+25", gizli: true },
            { id: "gd", tip: "cizgi", renk: 3, kesik: true, etiket: "", from: [95, 0.4], to: [95, 9.4], gizli: true },
            { id: "gdt", tip: "yazi", x: 93, y: 5, metin: "median 1968 = 95", hiza: "end", gizli: true },
            { id: "q1t", tip: "yazi", x: 100, y: 4.6, metin: "Q1 1978 = 100", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "1968: min 65, Q1 80, *median* 95, Q3 110, bıyık ucu 135 ve ayrı duran bir nokta, 185." },
            { metin: "1978: min 70, Q1 100, *median* 120, Q3 145, en büyük 175. Aykırı değer yok.", goster: ["a78", "w78a", "w78b", "c78a", "c78b", "b78", "m78"] },
            { metin: "==*Center*==: *median*'lar 95 ve 120; 1978'in merkezi 25 yüksek.", goster: ["md1", "md2", "plus"] },
            { metin: "Daha güçlü bir sonuç: 1978'in Q1'i (100), 1968'in *median*'ının (95) sağında. 1978 takımlarının en az dörtte üçü, 1968'in ortanca takımından fazla atmış.", goster: ["gd", "gdt", "q1t"], gizle: ["md1", "md2", "plus"] }
          ] },
        { tip: "ornek", baslik: "Merkez cümlesi ve “en az %75” yorumu", durum: "1968: *median* 95. 1978: *median* 120 ve Q1 = 100.",
          adimlar: [
            "*Center*: 120 > 95, fark 25.",
            "Q1 = 100 demek, 1978 takımlarının en az %75'i 100 ya da daha fazla *home run* atmış demek.",
            "100 > 95 olduğu için bu takımların hepsi, 1968'in ortanca takımından daha fazla atmış."
          ],
          sonuc: "“The median number of home runs was higher in 1978 (120) than in 1968 (95).”" }
      ]
    },
    {
      baslik: "*Boxplot*'larla değişkenlik, aykırı değer, şekil",
      bloklar: [
        { tip: "ornek", baslik: "*Variability*: kutu boyu = *IQR*", durum: "1968: Q1 = 80, Q3 = 110. 1978: Q1 = 100, Q3 = 145.",
          adimlar: ["1968: *IQR* = 110 − 80 = 30.", "1978: *IQR* = 145 − 100 = 45.", "45 > 30: 1978'in kutusu daha uzun, yani daha değişken."],
          sonuc: "“Home runs were more variable in 1978 (IQR 45) than in 1968 (IQR 30).”" },
        { tip: "ornek", baslik: "*Outliers*: 1.5 × *IQR* kuralı", durum: "Her yıl için üst ve alt sınırı bul.",
          adimlar: [
            "1968: 110 + 1.5 × 30 = 110 + 45 = 155 ve 80 − 45 = 35.",
            "185 > 155 olduğu için 185 bir ==high outlier==. Alt tarafta 65 > 35: sorun yok.",
            "1978: 145 + 1.5 × 45 = 145 + 67.5 = 212.5 ve 100 − 67.5 = 32.5. 70 ve 175 bu sınırların içinde: aykırı değer yok."
          ],
          sonuc: "1968'de 185'lik bir *high outlier* var; 1978'de yok." },
        { tip: "tablo", baslik: "*Range* neden yanıltır?", head: ["Yıl", "Range", "IQR", "Neden"], rows: [
            ["1968", "185 − 65 = 120", "30", "Uçtaki outlier range'i şişirir"],
            ["1978", "175 − 70 = 105", "45", "Outlier yok"]
          ], vurgu: 0, not: "Range'e bakarsan 1968 daha değişken görünür (120 > 105). IQR'a bakarsan tam tersi (30 < 45)." },
        { tip: "tuzak", baslik: "Range resistant değildir", metin: "Tek bir *outlier*, *range*'i ve dolayısıyla “değişkenlik” sonucunu tersine çevirebilir.", yanlis: "“Range 120 > 105, yani 1968 daha değişken.”", dogru: "Boxplot'la karşılaştırırken *center* için *median*, *variability* için *IQR* (kutu boyu) kullan; *range* aykırı değerden etkilenir." },
        { tip: "ikili",
          sol: { ikon: "🛡️", baslik: "Dirençli (*resistant*)", maddeler: ["*Median*", "*IQR*", "Aykırı değer çok etkilemez"] },
          sag: { ikon: "⚠️", baslik: "Dirençli değil", maddeler: ["*Range*", "*Mean*", "*Standard deviation*", "Tek bir uç değer sonucu değiştirir"] },
          oyun: [
            { metin: "Median", cevap: "sol", neden: "Ortadaki değer; uç değerler yer değiştirmez." },
            { metin: "Range", cevap: "sag", neden: "En büyük eksi en küçük: tek aykırı değer değiştirir." },
            { metin: "IQR", cevap: "sol", neden: "Yalnızca Q1 ve Q3'e bağlı, uç değerlere değil." },
            { metin: "Mean", cevap: "sag", neden: "Her değer toplama girer; aykırı değer ortalamayı çeker." },
            { metin: "Standard deviation", cevap: "sag", neden: "Ortalamaya bağlı hesaplanır; aykırı değere duyarlıdır." }
          ] },
        { tip: "not", metin: "*Shape* için: iki yılın da kutularında *median* çizgisinin iki yanı kabaca eşit uzunlukta: ==kabaca simetrik==. Ama dikkat: *boxplot* ==*peaks*, *gaps* ve *clusters*== göstermez; şekil için yalnızca kabaca simetri ya da çarpıklık söylenebilir." },
        { tip: "adimlar", baslik: "Tam sonuç cümlesi", adimlar: [
            { baslik: "*Center*", metin: "1978'in *median*'ı daha yüksek: 120 > 95." },
            { baslik: "*Variability*", metin: "1978 daha değişken: *IQR* 45 > 30." },
            { baslik: "*Outliers*", metin: "1968'de 185'lik *high outlier*; 1978'de yok." },
            { baslik: "*Shape*", metin: "İkisi de kabaca simetrik." },
            { baslik: "Sonuç", metin: "“Yes, the data support the claim: teams typically hit fewer home runs in 1968 (median 95 vs. 120).”" }
          ] },
        { tip: "ornek", baslik: "Mini sınav: iki otobüs hattı", durum: "Route 15: *median* 30 dk, *IQR* 6 dk. Route 20: *median* 30 dk, *IQR* 14 dk. Hangi karşılaştırma doğru?",
          adimlar: ["*Median*'lar eşit (30 = 30): merkez aynı.", "*IQR*'lar 6 ve 14: Route 20'nin süreleri daha dağınık.", "“Tipik süre daha uzun” demek yanlış (merkez eşit); “Route 15 daha değişken” demek de yanlış."],
          sonuc: "“The typical travel times are similar, but Route 20's times are more variable (IQR 14 min vs. 6 min).”" },
        { tip: "sekil", baslik: "Hatların kutuları (temsili değerler)", fig: { type: "box", label: "Travel time (min)", items: [
            { name: "Route 15", min: 22, q1: 27, med: 30, q3: 33, max: 38 },
            { name: "Route 20", min: 20, q1: 23, med: 30, q3: 37, max: 45 }
          ] } }
      ]
    },
    {
      baslik: "Bireyleri karşılaştırmak",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📌", terim: "Relative position", tr: "göreli konum", tanim: "Bir değerin kendi dağılımı içindeki yeri. *z-score* ya da *percentile* ile ölçülür.", ornek: "84 puan, sınıf ortalamasının 1 standart sapma üstünde." },
            { ikon: "📐", terim: "z-score", tr: "z-puanı", tanim: "Bir değerin ortalamadan kaç *standard deviation* uzakta olduğu: (değer − *mean*) ÷ *standard deviation*.", ornek: "İstatistik quiz'inde z = (84 − 76) ÷ 8 = 1." },
            { ikon: "📈", terim: "Percentile", tr: "yüzdelik dilim", tanim: "Dağılımın yüzde kaçının bu değerin altında kaldığını söyler.", ornek: "88. *percentile*: öğrencilerin %88'i bu puanın altında." }
          ] },
        { tip: "hikaye", ikon: "🧪", baslik: "84 mü, 90 mı daha iyi?", metin: "İstatistik quiz'inden 84, kimya sınavından 90 aldın. Hangisinde daha iyisin? Ham puana bakma; ==sınıfa göre konumuna== bak." },
        { tip: "formul", parcalar: [{ t: "z", alt: "z-score" }, "=", { t: "(değer − *mean*)", alt: "ortalamadan fark" }, "÷", { t: "*standard deviation*", alt: "bir adımın büyüklüğü" }], aciklama: "z, ortalamadan kaç standart sapma uzakta olduğunu söyler." },
        { tip: "ornek", baslik: "İki sınavın *z-score*'u", durum: "İstatistik quiz: 84, *mean* 76, *standard deviation* 8. Kimya sınavı: 90, *mean* 85, *standard deviation* 10.",
          adimlar: [
            "İstatistik: z = (84 − 76) ÷ 8 = 8 ÷ 8 = 1.00.",
            "Kimya: z = (90 − 85) ÷ 10 = 5 ÷ 10 = 0.50.",
            "1.00 > 0.50: istatistikte ortalamanın 1, kimyada yalnızca 0.5 standart sapma üstündesin.",
            "Ham puan kimyada yüksek (90 > 84) ama göreli konum istatistikte daha iyi."
          ],
          sonuc: "“The statistics score of 84 is 1 standard deviation above the mean; the chemistry score of 90 is 0.5 standard deviations above the mean.” Göreli olarak istatistikte daha iyisin." },
        { tip: "grafik", baslik: "İki puan aynı z-eksenine konunca", xlabel: "z-score", ylabel: "", xmax: 6, ymax: 10,
          xticks: [{ v: 0, label: "−3" }, { v: 1, label: "−2" }, { v: 2, label: "−1" }, { v: 3, label: "0" }, { v: 4, label: "1" }, { v: 5, label: "2" }, { v: 6, label: "3" }], yticks: [],
          ogeler: [
            { id: "nc", tip: "egri", renk: 1, etiket: "", noktalar: [[0, 0.07], [0.5, 0.29], [1, 0.88], [1.5, 2.11], [2, 3.94], [2.5, 5.74], [3, 6.5], [3.5, 5.74], [4, 3.94], [4.5, 2.11], [5, 0.88], [5.5, 0.29], [6, 0.07]] },
            { id: "mn", tip: "cizgi", renk: 1, kesik: true, etiket: "", from: [3, 0], to: [3, 6.5] },
            { id: "zs", tip: "nokta", x: 4, y: 3.94, etiket: "Stat z = 1.0", renk: 0, gizli: true },
            { id: "zc", tip: "nokta", x: 3.5, y: 5.74, etiket: "Kimya z = 0.5", renk: 2, gizli: true },
            { id: "zw", tip: "yazi", x: 3, y: 8.6, metin: "İstatistik göreli olarak daha iyi", gizli: true }
          ],
          durumlar: [
            { metin: "Her sınavın kendi dağılımı var; z-score hepsini aynı ölçeğe taşır. Ortada ortalama (z = 0)." },
            { metin: "Kimya: 90, ortalama 85'in yalnızca yarım standart sapma üstünde. z = 0.5.", goster: ["zc"] },
            { metin: "İstatistik: 84, ortalama 76'nın tam 1 standart sapma üstünde. z = 1.0.", goster: ["zs"] },
            { metin: "Sağa daha uzakta olan nokta göreli olarak daha iyidir: ==istatistik==.", goster: ["zw"] }
          ] },
        { tip: "ikili",
          sol: { ikon: "📐", baslik: "*z-score*", maddeler: ["Ortalama ve standart sapmadan hesaplanır", "“Ortalamanın 1 standart sapma üstü”", "Pozitif: ortalamanın üstü, negatif: altı"] },
          sag: { ikon: "📈", baslik: "*Percentile*", maddeler: ["Sıralamadan okunur", "“88. percentile'da”", "Yüksek percentile = çoğu değerin üstünde"] },
          oyun: [
            { metin: "Ortalamanın 1.5 standart sapma altında.", cevap: "sol", neden: "Standart sapma birimiyle konum: z = −1.5." },
            { metin: "Sınıfın %70'inin altında kalan puan.", cevap: "sag", neden: "Yüzde ile ifade edilen sıra: 70. percentile." },
            { metin: "z = 0.5", cevap: "sol", neden: "z-score." },
            { metin: "88. percentile'da olmak.", cevap: "sag", neden: "Yüzdelik dilim." }
          ] },
        { tip: "tuzak", baslik: "Düşük değer iyi olduğunda", metin: "Koşu süresi ya da kolesterolde küçük değer iyidir; ham puan karşılaştırması da yönü ters çevirir.", yanlis: "“Yüksek z-score her zaman daha iyidir.”", dogru: "Düşük değerin iyi olduğu durumlarda daha negatif z-score ya da daha düşük percentile göreli olarak daha iyidir." },
        { tip: "tuzak", baslik: "Percentile dili", metin: "Doğru kalıp: “at the 84th percentile”. Başka bir yanlış: ham puanları doğrudan kıyaslamak.", yanlis: "“In the 84th percentile” ya da ham puanları kıyaslamak.", dogru: "“At the 84th percentile”; bireyleri kıyaslarken ham değere değil *z-score* ya da *percentile*'a bak." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 8, etiket: "Liverpool'un range'i (United: 3)" },
            { deger: 7.75, etiket: "Liverpool'da üst aykırı değer sınırı; 9 bunun dışında" },
            { deger: 10, sonek: " puan", etiket: "11-B ile 11-A median farkı (83 − 73)" },
            { deger: 45, etiket: "1978 boxplot'unda IQR (1968: 30)" },
            { deger: 40, sonek: "%", etiket: "12. sınıflarda yüzde (9. sınıflarda %20)" },
            { deger: 1, etiket: "İstatistik quiz'inin z-score'u (kimya: 0.5)" }
          ] },
        { tip: "ozet", maddeler: [
            "Karşılaştırırken dört başlık: *shape*, *outliers*, *center*, *variability*; hepsi *in context*.",
            "İki ayrı liste yetmez; *greater than*, *more variable than*, *similar to* gibi ==karşılaştırma sözcükleri== şart.",
            "*Parallel dotplots*, *back-to-back stemplot* ve *side-by-side boxplots* aynı eksen ve ölçekte çizilir; stemplot'ta *key* ve dışa doğru sıralı yapraklar şart.",
            "Karşılaştırmalı *histogram*: aynı aralıklar, aynı ölçek; grup büyüklükleri farklıysa *relative frequency* (40 ÷ 200 = %20, 20 ÷ 50 = %40).",
            "*Boxplot*'ta merkez için *median*, değişkenlik için *IQR*; *range* aykırı değerden etkilenir (1968: range 120, IQR 30).",
            "*Boxplot* *peaks*, *gaps* ve *clusters* göstermez; şekil için yalnızca kabaca simetri ya da çarpıklık söylenir.",
            "Aykırı değer sınırları: Q3 + 1.5 × *IQR* ve Q1 − 1.5 × *IQR*.",
            "Bireyleri kıyaslamak için ham puana değil *z-score* (84 → 1.0, 90 → 0.5) ya da *percentile*'a bak; düşük değer iyiyse yön tersine döner."
          ] }
      ]
    }
  ]
};
