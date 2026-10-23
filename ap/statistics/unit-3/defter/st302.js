/* Kitora not defteri · st302 · 3B Rastgele Örnekleme (CED 3.3)
   Kaynak: AP Statistics CED Unit 3 (3.3 Random Sampling and Data Collection). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st302",
  amac: "Bu konu rastgele örneklemeyi anlatıyor: *simple random sample*, *stratified random sample*, *cluster sample* ve *systematic random sample*. Her yöntemin nasıl uygulandığını, aralarındaki farkı ve bir örnekleme planını nasıl yazacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Neden rastgele seçim?",
      kisa: "Şansla seçilen örneklem population'ı temsil eder; kolay ulaşılan etmez.",
      bloklar: [
        { tip: "harita", merkez: "Rastgele örnekleme yöntemleri", dallar: [
            { baslik: "*Simple random sample*", alt: "her n kişilik grubun şansı eşit" },
            { baslik: "*Systematic random sample*", alt: "rastgele başlangıç, sonra her k. kişi" },
            { baslik: "*Stratified random sample*", alt: "benzer gruplardan ayrı ayrı SRS" },
            { baslik: "*Cluster sample*", alt: "rastgele gruplar seç, hepsini al" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🎟️", terim: "Random sample", tr: "rastgele örneklem", tanim: "Birimlerin ==şansla== seçildiği örneklem; sistemli bir yanlılığı yoktur ve sonuçlar population'a genellenebilir.", ornek: "Öğrenci listesinden kura ile 30 kişi çekmek." },
            { ikon: "📜", terim: "Sampling frame", tr: "örneklem çerçevesi", tanim: "Seçimin yapıldığı ==liste== ya da tanım; population'daki herkesi kapsaması gerekir.", ornek: "Okulun güncel 600 kişilik öğrenci listesi." }
          ] },
        { tip: "tuzak", baslik: "Rastgele, gelişigüzel demek değildir", metin: "Rastgele örneklem de population'dan biraz farklı çıkabilir; bu şans farkıdır. Yanlılık ise yöntemin sistemli olarak bir yöne itmesidir.", yanlis: "Koridorda önüme çıkan ilk 20 kişiyi rastgele seçtim.", dogru: "Rastgele seçim, her birime şans tanıyan bir mekanizma (sayı üreteci, kura) ister. Kolay ulaşılanı almak *convenience sample*'dır." }
      ]
    },
    {
      baslik: "*Simple random sample* (SRS)",
      kisa: "Listeye numara ver, rastgele sayı üret, tekrarları at.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Simple random sample (SRS)", tr: "basit rastgele örneklem", tanim: "n büyüklüğündeki ==her olası grubun== seçilme şansının eşit olduğu örneklem. Bu yüzden her birey de eşit şansa sahiptir.", ornek: "600 öğrencinin listesinden numara çekerek 30 kişi seçmek." }
          ] },
        { tip: "adimlar", baslik: "SRS nasıl çekilir? 600 öğrenciden 30", adimlar: [
            { baslik: "1 · Listeyi hazırla", metin: "Population'ın tam listesi (çerçeve): 600 öğrenci." },
            { baslik: "2 · Numara ver", metin: "Her öğrenciye 001'den 600'e kadar bir numara ata." },
            { baslik: "3 · Rastgele sayı üret", metin: "Rastgele sayı üretecinden (ör. hesap makinesinde randInt(1, 600)) numara çek." },
            { baslik: "4 · Tekrarı at", metin: "Aynı numara tekrar çıkarsa atla; 30 farklı numaraya ulaşana kadar sürdür." },
            { baslik: "5 · Ankete al", metin: "Çıkan 30 numaranın sahipleri örneklemdir." }
          ] },
        { tip: "tuzak", baslik: "Eşit şans SRS yapmaz", metin: "Her bireyin şansı eşit olan her yöntem SRS değildir. SRS'de her olası n kişilik grup eşit olasılıklıdır.", yanlis: "Her öğrencinin seçilme şansı eşit, o halde bu bir SRS'tir.", dogru: "*Cluster* örneklemede bir şubeden yalnızca bir öğrenci seçilemez: ya şubenin hepsi gelir ya hiçbiri. Her olası grup eşit şanslı olmadığı için SRS değildir." }
      ]
    },
    {
      baslik: "Dört yöntem yan yana",
      kisa: "Aynı 20 öğrenciden dört yöntemle 4 kişi seçtik; farkı gör.",
      bloklar: [
        { tip: "grafik", baslik: "Aynı 20 öğrenci, dört yöntem", xlabel: "Danışman sınıfı", ylabel: "Sınıf düzeyi", xmax: 6, ymax: 5,
          xticks: [{ v: 1, label: "A" }, { v: 2, label: "B" }, { v: 3, label: "C" }, { v: 4, label: "D" }, { v: 5, label: "E" }],
          yticks: [{ v: 1, label: "9" }, { v: 2, label: "10" }, { v: 3, label: "11" }, { v: 4, label: "12" }],
          ogeler: [
            { id: "p11", tip: "nokta", x: 1, y: 1 },
            { id: "p12", tip: "nokta", x: 1, y: 2 },
            { id: "p13", tip: "nokta", x: 1, y: 3 },
            { id: "p14", tip: "nokta", x: 1, y: 4 },
            { id: "p21", tip: "nokta", x: 2, y: 1 },
            { id: "p22", tip: "nokta", x: 2, y: 2 },
            { id: "p23", tip: "nokta", x: 2, y: 3 },
            { id: "p24", tip: "nokta", x: 2, y: 4 },
            { id: "p31", tip: "nokta", x: 3, y: 1 },
            { id: "p32", tip: "nokta", x: 3, y: 2 },
            { id: "p33", tip: "nokta", x: 3, y: 3 },
            { id: "p34", tip: "nokta", x: 3, y: 4 },
            { id: "p41", tip: "nokta", x: 4, y: 1 },
            { id: "p42", tip: "nokta", x: 4, y: 2 },
            { id: "p43", tip: "nokta", x: 4, y: 3 },
            { id: "p44", tip: "nokta", x: 4, y: 4 },
            { id: "p51", tip: "nokta", x: 5, y: 1 },
            { id: "p52", tip: "nokta", x: 5, y: 2 },
            { id: "p53", tip: "nokta", x: 5, y: 3 },
            { id: "p54", tip: "nokta", x: 5, y: 4 },
            { id: "r1", tip: "nokta", renk: 2, x: 2, y: 1, gizli: true },
            { id: "r2", tip: "nokta", renk: 2, x: 4, y: 1, gizli: true },
            { id: "r3", tip: "nokta", renk: 2, x: 1, y: 3, gizli: true },
            { id: "r4", tip: "nokta", renk: 2, x: 5, y: 4, gizli: true },
            { id: "s1", tip: "nokta", renk: 3, x: 1, y: 2, gizli: true },
            { id: "s2", tip: "nokta", renk: 3, x: 2, y: 3, gizli: true },
            { id: "s3", tip: "nokta", renk: 3, x: 3, y: 4, gizli: true },
            { id: "s4", tip: "nokta", renk: 3, x: 5, y: 1, gizli: true },
            { id: "t1", tip: "cizgi", renk: 1, kesik: true, from: [0.5, 1.5], to: [5.5, 1.5], etiket: "", gizli: true },
            { id: "t2", tip: "cizgi", renk: 1, kesik: true, from: [0.5, 2.5], to: [5.5, 2.5], etiket: "", gizli: true },
            { id: "t3", tip: "cizgi", renk: 1, kesik: true, from: [0.5, 3.5], to: [5.5, 3.5], etiket: "", gizli: true },
            { id: "q1", tip: "nokta", renk: 1, x: 4, y: 1, gizli: true },
            { id: "q2", tip: "nokta", renk: 1, x: 1, y: 2, gizli: true },
            { id: "q3", tip: "nokta", renk: 1, x: 5, y: 3, gizli: true },
            { id: "q4", tip: "nokta", renk: 1, x: 2, y: 4, gizli: true },
            { id: "kc", tip: "alan", noktalar: [[2.6, 0.6], [3.4, 0.6], [3.4, 4.4], [2.6, 4.4]], gizli: true },
            { id: "c1", tip: "nokta", renk: 2, x: 3, y: 1, gizli: true },
            { id: "c2", tip: "nokta", renk: 2, x: 3, y: 2, gizli: true },
            { id: "c3", tip: "nokta", renk: 2, x: 3, y: 3, gizli: true },
            { id: "c4", tip: "nokta", renk: 2, x: 3, y: 4, gizli: true }
          ],
          durumlar: [
            { metin: "Okulda 20 öğrenci var: sütunlar danışman sınıfları (A–E), satırlar sınıf düzeyi (9–12). Her yöntemle ==4 öğrenci== seçeceğiz." },
            { metin: "**SRS:** 20 öğrenci numaralandı, 4 numara rastgele çekildi. Tesadüfen 10. sınıftan kimse seçilmedi; bu şans, yanlılık değil.", goster: ["r1", "r2", "r3", "r4"] },
            { metin: "**Systematic:** Liste sırası A sınıfı 9→12, sonra B sınıfı… k = 20 ÷ 4 = 5. İlk beş içinden rastgele 2 çıktı: 2., 7., 12., 17. öğrenci.", gizle: ["r1", "r2", "r3", "r4"], goster: ["s1", "s2", "s3", "s4"] },
            { metin: "**Stratified:** Sınıf düzeylerine (==stratum==) böl; her düzeyden rastgele 1 kişi seç. Her düzey temsil edilir.", gizle: ["s1", "s2", "s3", "s4"], goster: ["t1", "t2", "t3", "q1", "q2", "q3", "q4"] },
            { metin: "**Cluster:** Danışman sınıfları (==cluster==) arasından rastgele C seçildi; C'deki ==herkes== ankete alınır.", gizle: ["t1", "t2", "t3", "q1", "q2", "q3", "q4"], goster: ["kc", "c1", "c2", "c3", "c4"] }
          ] },
        { tip: "tablo", baslik: "Dört yöntemin özeti", head: ["Yöntem", "Nasıl yapılır?", "Ne zaman uygun?"], rows: [
            ["*Simple random sample*", "Numaralandır, rastgele sayı üret", "Tam liste var, population çok büyük değil"],
            ["*Systematic random sample*", "k = N ÷ n; rastgele başlangıç, sonra her k. kişi", "Sıralı bir liste var, hızlı seçim isteniyor"],
            ["*Stratified random sample*", "Benzer gruplara (strata) böl, her gruptan SRS çek", "Gruplar birbirinden farklı; her grubun temsil edilmesi önemli"],
            ["*Cluster sample*", "Karışık gruplardan (clusters) rastgele grup seç, hepsini al", "Birimler dağınık; listeyi çıkarmak pahalı ya da zor"]
          ], not: "Stratified: gruplar kendi içinde benzer. Cluster: her grup küçük bir population gibi karışık." }
      ]
    },
    {
      baslik: "*Stratified* mı, *cluster* mı?",
      kisa: "Her gruptan örnek alıyorsan stratified; seçilen grupların hepsini alıyorsan cluster.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧱", baslik: "*Stratified random sample*", maddeler: ["Gruplar kendi içinde benzer", "Her gruptan ayrı SRS çekilir", "Gruplar birbirinden farklı"] },
          sag: { ikon: "🏘️", baslik: "*Cluster sample*", maddeler: ["Gruplar kendi içinde karışık", "Rastgele seçilen grupların herkesi alınır", "Gruplar birbirine benzer"] },
          oyun: [
            { metin: "Okulu 9, 10, 11, 12. sınıf düzeylerine bölüp her düzeyden 10 öğrenciyi kura ile seçmek.", cevap: "sol", neden: "Her gruptan ayrı örnek: *stratified*." },
            { metin: "Okuldaki 40 şubeden 3'ü kura ile seçilip o şubelerin bütün öğrencilerine anket yapmak.", cevap: "sag", neden: "Seçilen grupların herkesi alınıyor: *cluster*." },
            { metin: "Kantin müşterilerini \"öğrenci\" ve \"öğretmen\" diye ayırıp her gruptan 15 kişiyi rastgele seçmek.", cevap: "sol", neden: "Her gruptan ayrı SRS: *stratified*." },
            { metin: "Bir şehirdeki 20 mahalleden 4'ü kura ile seçilip o mahallelerdeki bütün haneleri ziyaret etmek.", cevap: "sag", neden: "Mahalleler grup, seçilen mahallelerin hepsi alınıyor: *cluster*." },
            { metin: "Bir mağaza zincirinin 60 şubesinden 5'ini kura ile seçip o şubelerin bütün çalışanlarına anket yapmak.", cevap: "sag", neden: "Şubeler grup; seçilen şubelerin herkesi alınıyor: *cluster*." }
          ] },
        { tip: "tuzak", baslik: "Gruba bölmek stratified yapmaz", metin: "İkisinde de population gruplara bölünür; fark gruplardan ne yaptığındadır.", yanlis: "Okulu gruplara böldüm, o halde stratified.", dogru: "Her gruptan SRS çekiyorsan *stratified*; bazı grupları seçip içindekilerin hepsini alıyorsan *cluster*." }
      ]
    },
    {
      baslik: "*Systematic random sample*",
      kisa: "Rastgele bir başlangıç seç, sonra listeden her k. kişiyi al.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "k", alt: "adım aralığı" }, "=", { t: "N", alt: "population büyüklüğü" }, "÷", { t: "n", alt: "örneklem büyüklüğü" }], aciklama: "Başlangıç noktası 1 ile k arasından rastgele seçilir; sonra her k. kişi alınır." },
        { tip: "ornek", baslik: "800 öğrenciden 40", durum: "Okulun 800 öğrencilik sıralı listesinden 40 kişilik bir *systematic random sample* seçilecek.",
          adimlar: ["k = N ÷ n = 800 ÷ 40 = 20.", "1 ile 20 arasından rastgele bir başlangıç çek: 7 çıktı.", "Sırayla 7., 27., 47., … numaraları alınır (her seferinde 20 eklenir).", "Son numara 7 + 20 × 39 = 787. Toplam 40 öğrenci."],
          sonuc: "Örneklem: 7, 27, 47, …, 787. numaralı 40 öğrenci." },
        { tip: "tuzak", baslik: "Her k. kişi SRS değildir", metin: "Başlangıç rastgele seçilse bile yalnızca k tane olası örneklem vardır. Ayrıca liste düzenli bir örüntüyle sıralıysa sonuç eğilebilir.", yanlis: "Her 20. öğrenciyi aldım, bu bir SRS'tir; başlangıç da 1. öğrenci.", dogru: "Başlangıç noktası ==rastgele== seçilmeli. Systematic sample, ardışık iki kişinin birlikte seçilemediği için SRS değildir." }
      ]
    },
    {
      baslik: "Bir örnekleme planı yazmak",
      kisa: "Planında population, numaralama, rastgele mekanizma ve örneklem büyüklüğü olsun.",
      bloklar: [
        { tip: "adimlar", baslik: "Plan anlatırken şunlar eksik olmasın", adimlar: [
            { baslik: "1 · *Population* ve çerçeve", metin: "Kimden örnek alınıyor, listesi nedir?" },
            { baslik: "2 · Gruplama ya da numaralama", metin: "Strata, cluster ya da 1'den N'ye numaralar." },
            { baslik: "3 · Rastgele mekanizma", metin: "Rastgele sayı üreteci ya da kura; tekrarı nasıl ele aldığını yaz." },
            { baslik: "4 · Büyüklük", metin: "Kaç kişi, kaç grup seçileceği." }
          ] },
        { tip: "ornek", baslik: "Stratified plan yazalım", durum: "Okulda 400 kız ve 200 erkek öğrenci var (toplam 600). Kız-erkek oranını koruyan 30 kişilik bir *stratified random sample* planı yazalım.",
          adimlar: ["Strata: kızlar ve erkekler. Örneklem oranı 30 ÷ 600 = %5.", "Kızlar: 400 × 0,05 = 20 kişi. Erkekler: 200 × 0,05 = 10 kişi.", "Kızları 001–400, erkekleri 001–200 diye numaralandır.", "randInt(1, 400) ile 20 farklı numara, randInt(1, 200) ile 10 farklı numara çek; tekrar çıkanı atla."],
          sonuc: "20 kız + 10 erkek = 30 öğrenci. Her stratum içinde ayrı SRS yapıldı." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Rastgele seçim, her birime şans tanıyan bir mekanizmayla yapılır; kolay ulaşılanı almak rastgele değildir.",
            "*Simple random sample*: numaralandır, rastgele sayı üret, tekrarı at; her olası n kişilik grubun şansı eşittir.",
            "*Systematic random sample*: k = N ÷ n, rastgele başlangıç (1 ile k arası), sonra her k. kişi.",
            "*Stratified random sample*: benzer gruplara (strata) böl, her gruptan SRS çek; her grup temsil edilir.",
            "*Cluster sample*: karışık gruplardan (clusters) rastgele grup seç ve seçilen grupların hepsini al; maliyeti düşürür.",
            "Stratified ile cluster'ı ayır: her gruptan örnek alıyorsan stratified, seçilen grupların hepsini alıyorsan cluster.",
            "Eşit şans SRS demek değildir; systematic, stratified ve cluster'da bazı n kişilik gruplar hiç seçilemez.",
            "Plan yazarken population, çerçeve, gruplama ya da numaralama, rastgele mekanizma ve büyüklüğü belirt."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir okulda her biri 28 öğrencili 12 şube var. Müdür 3 şubeyi kura ile seçiyor ve seçilen şubelerdeki bütün öğrencilere anket yapıyor. Bu örnekleme yöntemi hangisidir?",
      opts: ["*Simple random sample*", "*Stratified random sample*", "*Cluster sample*", "*Systematic random sample*"],
      a: 2,
      why: "Şubeler gruptur; rastgele seçilen şubelerin herkesi alınıyor: *cluster sample*. B en çekici yanlış şık: stratified'da her gruptan ayrı örnek çekilir, burada ise bazı gruplar tamamen dışarıda kalıyor." },
    { q: "Bir okulun 800 öğrencisinin sınıf düzeylerine göre dağılımı tabloda. Müdür sınıf düzeylerinden orantılı bir *stratified random sample* ile toplam 80 öğrenci seçecek. Hangi dağılım doğrudur?",
      fig: { type: "table", caption: "Öğrenci sayıları", head: ["Sınıf", "9", "10", "11", "12"], rows: [["Öğrenci", "300", "200", "200", "100"]] },
      opts: ["Her düzeyden 20 öğrenci", "9: 30, 10: 20, 11: 20, 12: 10", "9: 40, 10: 20, 11: 10, 12: 10", "9: 10, 10: 20, 11: 20, 12: 30"],
      a: 1,
      why: "Örneklem oranı 80 ÷ 800 = %10; her düzeyden %10: 30, 20, 20, 10 (toplam 80). A en çekici yanlış şık: eşit sayı orantılı değildir, 12. sınıf gereğinden çok temsil edilirdi." },
    { q: "Bir kulübün 1200 üyelik sıralı listesinden 60 üye *systematic random sample* ile seçilecek ve rastgele başlangıç 8 çıkmış. Seçilen ilk üç üye hangileridir?",
      opts: ["8., 28., 48.", "8., 16., 24.", "20., 40., 60.", "8., 68., 128."],
      a: 0,
      why: "k = 1200 ÷ 60 = 20; başlangıç 8, sonra her seferinde 20 eklenir: 8, 28, 48. D en çekici yanlış şık: 60 eklemek n değerini adım aralığı sanmaktır." },
    { q: "Basit rastgele örneklem (SRS) için hangisi doğrudur?",
      opts: ["Her bireyin seçilme şansı eşit olduğu sürece örneklem SRS'tir", "Population önce gruplara bölünür ve her gruptan örnek alınır", "Seçilen bir kişi örnekte yer alınca onunla aynı gruptaki herkes de örneğe girer", "n büyüklüğündeki her olası grubun seçilme olasılığı eşittir"],
      a: 3,
      why: "SRS'in tanımı: her olası n kişilik grup eşit olasılıklıdır. A en çekici yanlış şık: bireylere eşit şans yetmez; cluster ve systematic'te de bireyler eşit şanslıdır ama bazı gruplar hiç oluşamaz." },
    { q: "Bir araştırmacı kız ve erkek öğrencilerin kantin tercihlerinin farklı olmasını bekliyor ve her cinsiyetin örneklemde güvenle temsil edilmesini istiyor. Hangi yöntem en uygundur?",
      opts: ["Anket formunu kantinde sıraya giren ilk 40 öğrenciye vermek", "Bütün öğrencilerin listesinden yalnızca SRS çekmek", "Kız ve erkek öğrencilerden ayrı ayrı rastgele seçim yapan bir *stratified random sample*", "Rastgele iki şubeyi seçip içindeki herkese sormak"],
      a: 2,
      why: "Gruplar yanıt açısından farklı bekleniyorsa her gruptan ayrı SRS çekmek (stratified) her grubun temsilini garantiler. D en çekici yanlış şık: *cluster* şubeler karışık gruplar olduğundan bu amaca hizmet etmez." }
  ]
};
