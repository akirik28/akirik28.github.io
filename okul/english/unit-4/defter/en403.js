/* Kitora not defteri · en403 · 4.3 Tez ve Argüman Yapısı
   Okul dersi (10. sınıf English · Unit 4). Yapı ve cümle iskeletleri verir; hazır essay yazmaz. */
window.DEFTER = {
  slug: "en403",
  amac: "Tez cümlesini ve argümanın iskeletini kuracaksın: iddia, gerekçe, kanıt, çürütme. 1500–1700 kelimelik essay'in kelime bütçesini planlayacak ve akademik tonda yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Argüman: iddia, gerekçe, kanıt, bağ",
      kisa: "Argüman, kanıtla desteklenen ve açıklanan bir iddiadır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "*Claim*", alt: "iddia (tez)" }, "+",
            { t: "*Reasons*", alt: "gerekçeler" }, "+",
            { t: "*Evidence*", alt: "kanıt" }, "+",
            { t: "*Warrant*", alt: "bağ (analiz)" }, "=",
            { t: "Argüman", alt: "ikna edici metin" }
          ], aciklama: "*Warrant*: kanıtın iddiayı neden desteklediğini açıklayan cümle. Çoğu öğrenci kanıtı verir ama bağı kurmaz." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Claim", tr: "iddia", tanim: "Okuyucuyu ikna etmeye çalıştığın tek ana görüş. Tezin kendisidir.", ornek: "Okullar ilk dersi 09.00'a almalı." },
            { ikon: "🧱", terim: "Reason", tr: "gerekçe", tanim: "İddiayı destekleyen ana neden; her gerekçe ayrı bir paragraf olur.", ornek: "Gençlerin uyku ihtiyacı yüksek." },
            { ikon: "📊", terim: "Evidence", tr: "kanıt", tanim: "Gerekçeyi destekleyen veri, uzman sözü, araştırma ya da röportaj.", ornek: "Bir uyku araştırmasının bulgusu." },
            { ikon: "🔗", terim: "Warrant", tr: "bağ / analiz", tanim: "Kanıtın gerekçeyi ve iddiayı nasıl desteklediğini anlatan kendi yorumun.", ornek: "Bu bulgu, daha çok uykunun derse katılımı artırdığını gösterir." }
          ] }
      ]
    },
    {
      baslik: "Güçlü tez cümlesi",
      kisa: "Tez tek cümle, tartışılabilir, dar ve kanıtlanabilir olmalı.",
      bloklar: [
        { tip: "tablo", baslik: "Tez türleri", head: ["Tür", "Soru", "Kalıp"], rows: [
            ["*Claim of fact*", "Bu doğru mu? Neden oldu?", "*X causes / leads to Y because …*"],
            ["*Claim of value*", "İyi mi, adil mi, daha mı önemli?", "*X is more important / harmful than Y because …*"],
            ["*Claim of policy*", "Ne yapılmalı?", "*[Who] should [do what] because …*"]
          ], not: "Tez türü sana gerekçe türünü de gösterir: politika iddiası maliyet ve fayda kanıtı ister." },
        { tip: "ikili", sol: { ikon: "💪", baslik: "Güçlü tez", maddeler: ["Tek, net bir iddia", "Gerekçe içerir, tartışılabilir"] },
          sag: { ikon: "🫥", baslik: "Zayıf tez", maddeler: ["Konu duyurusu, olgu ya da çok geniş cümle", "Tartışmaya yer bırakmaz"] },
          oyun: [
            { metin: "This essay is about school phone rules.", cevap: "sag", neden: "Konuyu duyuruyor, iddia yok." },
            { metin: "Schools should delay the first class to 9:00 a.m. because later start times improve attendance and reduce sleep loss.", cevap: "sol", neden: "İddia + gerekçe; tartışılabilir." },
            { metin: "Many teenagers use phones.", cevap: "sag", neden: "Olgu; tartışılamaz." },
            { metin: "Social media is bad.", cevap: "sag", neden: "Çok geniş ve belirsiz." },
            { metin: "Although bus schedules would need to change, schools should adopt later start times because the benefits for sleep and attendance outweigh the logistical cost.", cevap: "sol", neden: "Karşı görüşü kabul edip iddiasını gerekçeyle savunuyor." }
          ] },
        { tip: "liste", baslik: "Tez kalıpları (kendi konunla doldur)", maddeler: [
            { ikon: "1️⃣", baslik: "*[Claim] because [reason 1], [reason 2], and [reason 3].*", metin: "Gerekçeleri sayan tez." },
            { ikon: "2️⃣", baslik: "*Although [opposing view], [claim] because [reason].*", metin: "Karşı görüşü baştan kabul eden tez." },
            { ikon: "3️⃣", baslik: "*This essay argues that [claim].*", metin: "Üçüncü şahıs; *I* yok." }
          ] },
        { tip: "tuzak", metin: "Tez konuyu duyurmaz, iddiayı söyler.", yanlis: "*In this essay, I will talk about school uniforms.*", dogru: "*Schools should … because …* gibi bir iddia yaz; konuyu duyurma ve *I* kullanma." }
      ]
    },
    {
      baslik: "Tez onayı ve projenin ölçüleri",
      kisa: "Onaylanmamış tezle essay yazılmaz; önce öğretmene göster.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 1500, sonek: "–1700", etiket: "kelime" },
            { deger: 4, onek: "≥ ", etiket: "kaynak" },
            { deger: 50, sonek: "+ kişi", etiket: "anket için önerilen" },
            { deger: 50, sonek: "%", etiket: "Exam 2'nin *Reading/Writing* payı" }
          ] },
        { tip: "adimlar", baslik: "Tez onayı akışı", adimlar: [
            { baslik: "Taslak tez + gerekçeler", metin: "Tek cümlelik tez ve 2–3 gerekçe; bir de beklenen karşı argüman." },
            { baslik: "Öğretmene göster", metin: "Öğretmenin istediği biçimde (yazılı ya da yüz yüze) sun." },
            { baslik: "Üç soruyla kendini sına", metin: "*Is it arguable? Is it specific? Can at least four sources support it?*" },
            { baslik: "Düzelt", metin: "Geri bildirime göre dar ve net hâle getir." },
            { baslik: "Onay sonrası outline yaz", metin: "Onay yoksa taslak yazmaya başlama." }
          ] }
      ]
    },
    {
      baslik: "Essay iskeleti ve kelime bütçesi",
      kisa: "Giriş, üç gerekçe, karşı argüman, sonuç; kelimeleri baştan bütçele.",
      bloklar: [
        { tip: "grafik", baslik: "Örnek kelime bütçesi (≈1675)", xlabel: "Kelime", ylabel: "", xmax: 1800, ymax: 5,
          xticks: [{ v: 0, label: "0" }, { v: 500, label: "500" }, { v: 1000, label: "1000" }, { v: 1500, label: "1500" }],
          ogeler: [
            { id: "min", tip: "cizgi", from: [1500, 0], to: [1500, 5], kesik: true, renk: 0, gizli: true },
            { id: "max", tip: "cizgi", from: [1700, 0], to: [1700, 5], kesik: true, renk: 0, gizli: true },
            { id: "tmin", tip: "yazi", x: 1490, y: 4.7, metin: "min 1500", hiza: "end", gizli: true },
            { id: "tmax", tip: "yazi", x: 1710, y: 4.7, metin: "max 1700", hiza: "start", gizli: true },
            { id: "g", tip: "alan", renk: 1, noktalar: [[0, 0], [175, 0], [175, 0], [0, 0]], gizli: true },
            { id: "b1", tip: "alan", renk: 2, noktalar: [[175, 0], [525, 0], [525, 0], [175, 0]], gizli: true },
            { id: "b2", tip: "alan", renk: 3, noktalar: [[525, 0], [875, 0], [875, 0], [525, 0]], gizli: true },
            { id: "b3", tip: "alan", renk: 2, noktalar: [[875, 0], [1225, 0], [1225, 0], [875, 0]], gizli: true },
            { id: "k", tip: "alan", renk: 1, noktalar: [[1225, 0], [1525, 0], [1525, 0], [1225, 0]], gizli: true },
            { id: "s", tip: "alan", renk: 3, noktalar: [[1525, 0], [1675, 0], [1675, 0], [1525, 0]], gizli: true },
            { id: "yg", tip: "yazi", x: 88, y: 1.5, metin: "175", gizli: true },
            { id: "y1", tip: "yazi", x: 350, y: 1.5, metin: "G1 350", gizli: true },
            { id: "y2", tip: "yazi", x: 700, y: 1.5, metin: "G2 350", gizli: true },
            { id: "y3", tip: "yazi", x: 1050, y: 1.5, metin: "G3 350", gizli: true },
            { id: "yk", tip: "yazi", x: 1375, y: 1.5, metin: "Karşı 300", gizli: true },
            { id: "ys", tip: "yazi", x: 1600, y: 3.6, metin: "Sonuç 150", gizli: true },
            { id: "yt", tip: "yazi", x: 900, y: 4.3, metin: "Toplam ≈ 1675", gizli: true }
          ],
          durumlar: [
            { metin: "Hedef: 1500–1700 kelime. Çizgilerin arasında kal.", goster: ["min", "max", "tmin", "tmax"] },
            { metin: "Giriş ≈ 175 kelime: konu, bağlam ve tez.", goster: ["g", "yg"], set: { g: { noktalar: [[0, 0], [175, 0], [175, 3], [0, 3]] } } },
            { metin: "Üç gerekçe paragrafı ≈ 350'şer kelime: iddia, kanıt, analiz.", goster: ["b1", "b2", "b3", "y1", "y2", "y3"], set: {
                b1: { noktalar: [[175, 0], [525, 0], [525, 3], [175, 3]] }, b2: { noktalar: [[525, 0], [875, 0], [875, 3], [525, 3]] }, b3: { noktalar: [[875, 0], [1225, 0], [1225, 3], [875, 3]] } } },
            { metin: "Karşı argüman ve çürütme ≈ 300 kelime.", goster: ["k", "yk"], set: { k: { noktalar: [[1225, 0], [1525, 0], [1525, 3], [1225, 3]] } } },
            { metin: "Sonuç ≈ 150 kelime. Toplam ≈ 1675: sınırların içinde.", goster: ["s", "ys", "yt"], set: { s: { noktalar: [[1525, 0], [1675, 0], [1675, 3], [1525, 3]] } } }
          ] },
        { tip: "tablo", baslik: "Bölümler ne yapar?", head: ["Bölüm", "İçerik", "≈ Kelime"], rows: [
            ["Giriş", "Dikkat çeken başlangıç, kısa bağlam, tez", "175"],
            ["Gerekçe 1–3", "Konu cümlesi, kanıt (alıntı/parafraz), analiz, tezle bağ", "3 × 350"],
            ["Karşı argüman", "Karşı görüşü adil sun, kabul et, çürüt", "300"],
            ["Sonuç", "Tezi yeni sözlerle hatırlat, genişlet, bitir", "150"]
          ], not: "Dağılım yalnızca örnektir; toplam 1500–1700 olmalı. *Works Cited* sayfasının kelime sayısına girip girmediğini öğretmenine sor." }
      ]
    },
    {
      baslik: "Gerekçe paragrafının yapısı",
      kisa: "Konu cümlesi, kanıt, analiz, tez bağlantısı.",
      bloklar: [
        { tip: "adimlar", baslik: "Bir gerekçe paragrafı", adimlar: [
            { baslik: "Konu cümlesi", metin: "Paragrafın tek gerekçesini söyle: *The first reason is that …*" },
            { baslik: "Alıntıyı tanıt", metin: "Kaynağı ve bağlamı ver: *A study from … found that …*" },
            { baslik: "Kanıt", metin: "Alıntı ya da parafraz + metin içi atıf: (Demir 45)." },
            { baslik: "Analiz", metin: "Kanıtın neden önemli olduğunu açıkla: *This evidence shows that …*" },
            { baslik: "Tez bağı", metin: "Gerekçeyi ana iddiaya bağla: *This supports the claim that …*" }
          ] },
        { tip: "liste", baslik: "Geçiş sözcükleri", maddeler: [
            { ikon: "➕", baslik: "*Moreover, Furthermore, In addition*", metin: "Aynı yönde yeni nokta ekler." },
            { ikon: "↔️", baslik: "*However, Nevertheless, On the other hand*", metin: "Karşı görüşe geçişi gösterir." },
            { ikon: "🧮", baslik: "*As a result, Therefore, Consequently*", metin: "Sonuç çıkarır." }
          ] },
        { tip: "tuzak", metin: "Kanıt koyup yorumlamamak en sık puan kaybı nedenidir.", yanlis: "Paragraf alıntıyla biter.", dogru: "Alıntıdan sonra mutlaka kendi analizini yaz; kanıtı ==tez ile ilişkilendir==." }
      ]
    },
    {
      baslik: "Akademik ton: *I* ve *you* yok",
      kisa: "Essay üçüncü şahısla, resmî ve kesin bir dille yazılır.",
      bloklar: [
        { tip: "tablo", baslik: "Sınavda böyle yaz", head: ["Kaçın", "Bunun yerine"], rows: [
            ["*I think that phones distract students.*", "*Evidence suggests that phones distract students.*"],
            ["*In my opinion, …*", "*This essay argues that …*"],
            ["*You can see that …*", "*The data show that …*"],
            ["*Don't, can't, isn't*", "*Do not, cannot, is not*"],
            ["*a lot of*", "*many, numerous, a significant number of*"]
          ], not: "Öğretmenin *we/our/us* için de ek kural koyabilir; yönergeye bak." },
        { tip: "ikili", sol: { ikon: "🎓", baslik: "Akademik", maddeler: ["Üçüncü şahıs", "Kısaltma yok, kesin ifade"] },
          sag: { ikon: "💬", baslik: "Gündelik", maddeler: ["*I*, *you*, *we*", "Kısaltma ve belirsiz ifadeler"] },
          oyun: [
            { metin: "Research indicates that sleep affects performance.", cevap: "sol", neden: "Üçüncü şahıs, kanıta yaslanıyor." },
            { metin: "You probably know that phones are distracting.", cevap: "sag", neden: "*You* ve belirsiz ifade." },
            { metin: "I believe schools should change their rules.", cevap: "sag", neden: "*I* kullanılıyor." },
            { metin: "Critics argue that later start times cost more.", cevap: "sol", neden: "Karşı görüş üçüncü şahısla veriliyor." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Argüman = *claim* + *reasons* + *evidence* + *warrant* (kanıt ile iddiayı bağlayan analiz).",
            "Güçlü tez: tek cümle, tartışılabilir, dar, gerekçeli. Konu duyurusu ya da olgu tez değildir.",
            "Tez türleri: *fact*, *value*, *policy*.",
            "Tez onaylanmadan essay'e başlanmaz; onay sonrası *outline* yazılır.",
            "Essay 1500–1700 kelime; örnek bütçe: giriş 175, üç gerekçe 3 × 350, karşı argüman 300, sonuç 150.",
            "Gerekçe paragrafı: konu cümlesi → tanıtma → kanıt → analiz → tez bağı.",
            "Essay'de *I* ve *you* yok; kısaltma ve gündelik dil de yok.",
            "Essay, Exam 2'nin *Reading/Writing* yarısını (%50) oluşturur."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi en güçlü tez cümlesidir?",
      opts: ["This essay discusses school uniforms.", "School uniforms are good.", "Schools should not require uniforms because they limit self-expression and do not measurably improve discipline.", "Many schools have uniforms."], a: 2,
      why: "Üçüncü şık tek, tartışılabilir bir iddia ve iki gerekçe taşır. İkinci şık çok geniş ve gerekçesizdir (çekici ama zayıf); birinci duyuru, dördüncü ise olgudur." },
    { q: "Bir öğrencinin essay planı aşağıdadır. 1500–1700 kelime kuralına uymak için toplam metne ne kadar kelime eklemelidir?",
      fig: { type: "table", head: ["Bölüm", "Kelime"], rows: [["Giriş", 150], ["Gerekçe 1", 300], ["Gerekçe 2", 300], ["Gerekçe 3", 300], ["Karşı argüman", 200], ["Sonuç", 100]] },
      opts: ["En az 50, en çok 150", "En az 150, en çok 350", "En az 350, en çok 550", "Eklemeye gerek yok"], a: 1,
      why: "Toplam 150 + 300 + 300 + 300 + 200 + 100 = 1350. Hedef 1500–1700 olduğundan 150 ile 350 arasında eklemek gerekir. \"Gerek yok\" şıkkı 1350'yi sınır içinde sanma tuzağıdır." },
    { q: "Hangisi, *I* ve *you* kullanmadan yazılmış akademik bir cümledir? (Orijinal: \"I think you can see that phones distract students.\")",
      opts: ["In my opinion, phones distract students.", "You can see that phones distract students.", "I believe phones distract students.", "Evidence suggests that phones distract students."], a: 3,
      why: "Dördüncü şık üçüncü şahıs ve kanıta dayanıyor. \"In my opinion\" ve \"I believe\" *I* içerir (\"my\" ve \"I\" kişisel ifadelerdir), ikinci şık ise *you* kullanıyor." },
    { q: "Bir paragrafta iddia: \"Later start times help students.\" Kanıt: \"A study found attendance rose after a 60-minute delay (Kaya 14).\" Bunların ardından hangi cümle *warrant* (analiz) görevini görür?",
      opts: ["This attendance gain suggests that extra sleep makes it easier for students to arrive on time and stay engaged.", "A second study also found that attendance rose.", "Later start times help students.", "Attendance rose after a 60-minute delay."], a: 0,
      why: "Analiz, kanıtın iddiayı neden desteklediğini açıklar. İkinci şık yeni bir kanıt, üçüncü iddianın tekrarı, dördüncü kanıtın tekrarıdır; hiçbiri bağ kurmaz." },
    { q: "Bir öğrenci tezini öğretmene göstermeden 1200 kelimelik taslak yazdı; öğretmen tezi çok geniş bulup onaylamadı. Çıkarılacak doğru ders hangisidir?",
      opts: ["Taslak aynen teslim edilir.", "Önce tez dar ve net hâle getirilip onaylatılmalı, sonra yazılmalıydı.", "Öğretmenin onayı gerekmez.", "Tezi silip konu duyurusu yazmak yeterlidir."], a: 1,
      why: "Proje kuralı gereği tez öğretmenden onaylı olmalıdır; erken yazmak emeğin boşa gitmesine yol açar. Konu duyurusu tez değildir, bu yüzden son şık da çözüm olmaz." }
  ]
};
