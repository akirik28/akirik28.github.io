/* Kitpath not defteri · mc101 · 1.1 Kıtlık ve Ekonomist Gibi Düşünmek
   Kaynak: ap-videolar/src/episodes/mc101 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "mc101",
  amac: "Ekonominin ilk konusu: *scarcity* yani kıtlık. Neden her zaman seçim yapmak zorunda olduğumuzu, üretimin dört kaynağını ve bir ekonomistin karar verirken nasıl düşündüğünü öğreneceksin.",
  bolumler: [
    {
      baslik: "*Scarcity*: neden seçmek zorundayız?",
      kisa: "İstekler sınırsız, kaynaklar sınırlı; bu yüzden hep seçeriz.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Sınırsız istekler", alt: "konser, maç, ders, doğum günü…" }, "+",
            { t: "Sınırlı kaynaklar", alt: "24 saat, 500 TL harçlık" }, "=",
            { t: "*Scarcity*", alt: "seçmek zorundasın" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "⏳", terim: "Scarcity", tr: "kıtlık", tanim: "İsteklerin sınırsız, kaynakların sınırlı olması. ==Hiç bitmez==; en zengin ülkede bile vardır.", ornek: "Cumartesin 24 saat; hem konsere hem maça hem derse yetmiyor." },
            { ikon: "📚", terim: "Economics", tr: "ekonomi bilimi", tanim: "Kıt kaynakları sınırsız isteklere karşı nasıl kullandığımızı inceleyen sosyal bilim. Paranın değil, kıtlığın bilimi.", ornek: "Bireyler, firmalar ve devletler kıt kaynakla nasıl seçim yapar?" }
          ] },
        { tip: "not", metin: "Kıtlık varsa her seçimin bir bedeli vardır. Okulun bedava dağıttığı yemek bile bedava değil: un, fırın ve aşçının emeği başka bir işte kullanılabilirdi. Ekonomistler buna ==*no free lunch*== der." }
      ]
    },
    {
      baslik: "*Scarcity* ile *shortage* farkı",
      kisa: "Scarcity kalıcıdır; shortage belli bir fiyatta geçici bir eksikliktir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "⏳", baslik: "*Scarcity*", maddeler: ["Kalıcı ve her yerde", "Seçim yapmayı zorunlu kılar"] },
          sag: { ikon: "🎟️", baslik: "*Shortage*", maddeler: ["Geçici, belli bir fiyatta", "Fiyat yükselince ya da arz artınca kapanır"] },
          oyun: [
            { metin: "Dünyada herkese yetecek kadar temiz su ve zaman yok.", cevap: "sol", neden: "Bitmeyen, genel bir sınır: *scarcity*." },
            { metin: "Yeni çıkan telefon mağazada ilk gün tükendi.", cevap: "sag", neden: "O fiyattan isteyen, satılandan fazla; stok gelince kapanır: *shortage*." },
            { metin: "Zengin bir ülkenin bile hastane, okul ve yol için sınırlı bütçesi var.", cevap: "sol", neden: "Zenginlik kıtlığı ortadan kaldırmaz: *scarcity*." },
            { metin: "Konser biletleri 5 dakikada tükendi.", cevap: "sag", neden: "Ek konser açılınca ya da fiyat artınca kapanır: *shortage*." }
          ] },
        { tip: "tuzak", metin: "Sınav, kıtlığı yalnızca fakir ülkelere ait gibi gösterebilir.", yanlis: "Zengin ülkelerde *scarcity* yoktur.", dogru: "*Scarcity* her ülkede vardır; *shortage* ise geçici bir eksikliktir." }
      ]
    },
    {
      baslik: "Dört üretim faktörü",
      kisa: "Üretimin kaynakları dörttür; para bunlardan biri değildir.",
      bloklar: [
        { tip: "harita", merkez: "*Factors of production*", dallar: [
            { baslik: "*Land*", alt: "Doğal kaynaklar: buğday, su, petrol → kazancı *rent*" },
            { baslik: "*Labor*", alt: "İnsan emeği: hamuru açan çırak → *wages*" },
            { baslik: "*Capital*", alt: "İnsan yapımı alet ve makine: fırın → *interest*" },
            { baslik: "*Entrepreneurship*", alt: "Hepsini bir araya getirip riski alan kişi → *profit*" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔥", terim: "Physical capital", tr: "fiziksel sermaye", tanim: "Başka malları üretmek için yapılmış alet, makine ve binalar.", ornek: "Pizza fırını, dükkânın kendisi." },
            { ikon: "🎓", terim: "Human capital", tr: "beşerî sermaye", tanim: "İşçinin eğitimi, becerisi ve deneyimi. ==Daha çok işçi değil, daha iyi işçi.==", ornek: "Ustanın yıllarca öğrendiği hamur tekniği." }
          ] },
        { tip: "tuzak", baslik: "Para tuzağı", metin: "Fırına bir tomar banknot koysan tek dilim pizza çıkmaz. Para alışverişi kolaylaştırır ama kendisi üretmez. Hisse senedi almak da ekonomik anlamda *investment* sayılmaz.", yanlis: "Para (*money*, *financial capital*) bir üretim faktörüdür.", dogru: "Ekonomide *capital* = makine, alet, bina. *Investment* = bunlara yapılan harcama." }
      ]
    },
    {
      baslik: "*Micro* mu *macro* mu?",
      kisa: "Micro tek bir parçaya, macro ekonominin bütününe bakar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔍", baslik: "*Microeconomics*", maddeler: ["Bireyler, firmalar, tek bir piyasa", "Örnek: bir pizzacının fiyatı ve kaç işçi alacağı"] },
          sag: { ikon: "🌍", baslik: "*Macroeconomics*", maddeler: ["Ülkenin ekonomisinin bütünü", "Örnek: işsizlik, enflasyon, büyüme, Merkez Bankası"] },
          oyun: [
            { metin: "Türkiye'nin ulusal işsizlik oranı yükseldi.", cevap: "sag", neden: "Bütün ülke: *macro*." },
            { metin: "Bir kafe, kahve fiyatını 10 lira artırdı.", cevap: "sol", neden: "Tek firma, tek fiyat: *micro*." },
            { metin: "Merkez Bankası faiz oranını düşürdü.", cevap: "sag", neden: "Ülke çapında para politikası: *macro*." },
            { metin: "Kuraklık yüzünden domates fiyatları arttı.", cevap: "sol", neden: "Tek bir piyasa: *micro*." }
          ] }
      ]
    },
    {
      baslik: "*Positive* mi *normative* mi?",
      kisa: "Positive olanı söyler ve test edilir; normative olması gerekeni söyler.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔬", baslik: "*Positive statement*", maddeler: ["Ne olduğunu söyler, veriyle test edilir", "\"Asgari ücret artarsa bazı işletmeler daha az işçi alır.\""] },
          sag: { ikon: "⚖️", baslik: "*Normative statement*", maddeler: ["Ne olması gerektiğini söyler, değer yargısıdır", "\"Asgari ücret artırılmalı.\""] },
          oyun: [
            { metin: "Devlet üniversiteyi herkese ücretsiz yapmalı.", cevap: "sag", neden: "\"-malı\" bir değer yargısı: *normative*." },
            { metin: "Sigara vergisi artınca sigara satışları düştü.", cevap: "sol", neden: "Veriyle kontrol edilebilir: *positive*." },
            { metin: "Enflasyon, işsizlikten daha kötü bir sorundur.", cevap: "sag", neden: "\"daha kötü\" bir yargı: *normative*." },
            { metin: "Ay peynirden yapılmıştır.", cevap: "sol", neden: "Yanlış ama test edilebilir; yine de *positive*." }
          ] },
        { tip: "tuzak", metin: "*Positive* \"doğru\" demek değildir; yanlış ama test edilebilir bir cümle de *positive*'dir. Cümlede *should*, *ought*, *better*, *fair*, \"-malı\" ya da \"gerekir\" varsa *normative*'dir.", yanlis: "Yanlış olan cümle *normative*'dir.", dogru: "Test edilebiliyorsa *positive*, değer yargısıysa *normative*." }
      ]
    },
    {
      baslik: "Görüneni ve görünmeyeni tart",
      kisa: "İyi karar, gizli maliyetleri de hesaba katar.",
      bloklar: [
        { tip: "hikaye", ikon: "✈️", baslik: "1943: delik deşik dönen uçaklar",
          metin: "Komutanlar zırhı, dönen uçaklarda en çok delik olan yere koymak istedi. Matematikçi Abraham Wald itiraz etti: delik OLMAYAN yere koyun. Çünkü motorundan vurulan uçaklar hiç dönmedi; onları kimse görmedi." },
        { tip: "adimlar", baslik: "Kantin tostu 10 liraya sabitlenirse", adimlar: [
            { baslik: "Görünen", metin: "Herkes ucuz tost yer." },
            { baslik: "Görünmeyen", metin: "Kantin zarar eder, daha az tost yapar." },
            { baslik: "Sonuç", metin: "Tost azalır, kuyruk uzar. Fayda tek başına yetmez; ==fayda maliyetten büyük olmalı.==" }
          ] }
      ]
    },
    {
      baslik: "Marjinal düşünmek: bir tane daha mı?",
      kisa: "Ek fayda ek maliyetten büyükse devam et, küçükse dur.",
      bloklar: [
        { tip: "not", metin: "*Marginal* \"ek\" demektir. Bir birim daha almanın faydası ==*marginal benefit* (MB)==, ek maliyeti ==*marginal cost* (MC)==." },
        { tip: "grafik", baslik: "Dilimi 30 TL olan pizzadan kaç dilim yemeli?", xlabel: "Dilim", ylabel: "TL", xmax: 4, ymax: 10, xticks: [{ v: 1, label: "1." }, { v: 2, label: "2." }, { v: 3, label: "3." }], yticks: [{ v: 3, label: "30" }, { v: 5, label: "50" }, { v: 8, label: "80" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 1, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b3", tip: "alan", renk: 2, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 8.6, metin: "80 TL ✓", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 5.6, metin: "50 TL ✓", gizli: true },
            { id: "t3", tip: "yazi", x: 3, y: 2.6, metin: "20 TL ✗", gizli: true },
            { id: "mc", tip: "cizgi", renk: 0, kesik: true, from: [0, 3], to: [4, 3], gizli: true },
            { id: "mcl", tip: "yazi", x: 3.95, y: 3.4, metin: "MC = 30 TL", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Her dilim 30 TL: bu, her ek dilimin *marginal cost*'u.", goster: ["mc", "mcl"] },
            { metin: "1. dilim sana 80 TL değerinde. 80 > 30: ye.", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 8], [0.65, 8]] } }, goster: ["t1"] },
            { metin: "2. dilim 50 TL değerinde. 50 > 30: yine ye.", set: { b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 5], [1.65, 5]] } }, goster: ["t2"] },
            { metin: "3. dilim sadece 20 TL değerinde. 20 < 30: ==dur.==", set: { b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 2], [2.65, 2]] } }, goster: ["t3"] }
          ] },
        { tip: "tuzak", metin: "Üç dilimin toplam faydası 150 TL, toplam maliyeti 90 TL. \"Toplamda kârdayım, üçüncüyü de yerim\" demek yanlıştır.", yanlis: "Toplam fayda toplam maliyetten büyükse devam et.", dogru: "Karar ==sıradaki birime== göre verilir: MB < MC ise dur." }
      ]
    },
    {
      baslik: "*Ceteris paribus* ve beş varsayım",
      kisa: "Ekonomi modelleri diğer her şeyi sabit tutup tek bir etkiye bakar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧊", terim: "Ceteris paribus", tr: "diğer her şey sabitken", tanim: "Bir değişkenin etkisini görmek için diğer her şeyi sabit tutarız.", ornek: "Tost zamlanırsa daha az tost alınır; harçlığın ve öteki fiyatlar aynı kalırsa." },
            { ikon: "🎯", terim: "Self-interest", tr: "kişisel çıkar", tanim: "İnsanların kendi faydasını artırmaya çalışması; kendi hedefine göre seçim yapmak.", ornek: "Harçlığını en çok sevdiğin şeye harcamak." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "1️⃣", baslik: "Kaynaklar sınırlıdır", metin: "*Scarcity* her yerde." },
            { ikon: "2️⃣", baslik: "Her seçimin bir maliyeti vardır", metin: "*No free lunch*." },
            { ikon: "3️⃣", baslik: "Herkes kendi faydasını artırmaya çalışır", metin: "*Self-interest*." },
            { ikon: "4️⃣", baslik: "Kararlar marjinalde verilir", metin: "MB ile MC karşılaştırılır." },
            { ikon: "5️⃣", baslik: "Dünya basit modellerle anlatılır", metin: "Grafikler ve *ceteris paribus*." }
          ] },
        { tip: "not", metin: "Teori kuran tarafa *theoretical economics*, teoriyi gerçek sorunlara uygulayan tarafa *policy economics* denir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Scarcity*: sınırsız istek, sınırlı kaynak; kalıcıdır. *Shortage* geçicidir.",
            "*No free lunch*: her seçimin bir maliyeti vardır.",
            "Dört faktör: *land*, *labor*, *capital*, *entrepreneurship* → *rent*, *wages*, *interest*, *profit*. Para faktör değildir.",
            "*Human capital* daha iyi işçi, *physical capital* alet ve makinedir.",
            "*Micro* parçaya, *macro* bütüne bakar.",
            "*Positive* test edilir; *normative* olması gerekeni söyler.",
            "MB > MC ise devam, MB < MC ise dur; toplama değil sıradaki birime bak.",
            "*Ceteris paribus*: diğer her şey sabitken."
          ] }
      ]
    }
  ]
};
