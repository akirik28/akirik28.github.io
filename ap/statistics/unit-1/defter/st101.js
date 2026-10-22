/* Kitora not defteri · st101 · 1A Veriyle Tanış
   Kaynak: ap-videolar/src/episodes/st101 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st101",
  amac: "Bu konu istatistiğin temelini anlatıyor: veriden öğrenmeyi. *Population* ile *sample* farkını, tablonun satır ve sütunlarını, *categorical*, *quantitative*, *discrete*, *continuous* ayrımını ve *distribution* kavramını öğreneceksin.",
  bolumler: [
    {
      baslik: "*Statistics* ve dört adım",
      kisa: "İstatistik: soru sor, veri topla, analiz et, yorumla.",
      bloklar: [
        { tip: "hikaye", ikon: "🍲", baslik: "Tencerenin tuzu",
          metin: "Çorbanın tuzuna bakmak için tencerenin hepsini içmezsin; bir kaşık alıp tadarsın. Seçim anketleri de böyle: 85 milyonluk bir ülkeyi birkaç bin kişiye sorarak anlar. ==Önemli olan kaşığın tencereyi iyi temsil etmesi.==" },
        { tip: "kavramlar", kartlar: [
            { ikon: "📊", terim: "Statistics", tr: "istatistik", tanim: "Veri toplamanın, analiz etmenin ve veriden sonuç çıkarmanın ==bilimi ve sanatı==.", ornek: "Okula ortalama kaç dakikada geldiğimizi 40 öğrenciye sorup sonuç çıkarmak." },
            { ikon: "❓", terim: "Investigative question", tr: "araştırma sorusu", tanim: "Veriyle cevaplanabilecek soru; sürecin 1. adımı.", ornek: "\"Okulumuzdaki öğrenciler okula ortalama kaç dakikada geliyor?\"" }
          ] },
        { tip: "adimlar", baslik: "Dört adım: okula geliş süresi", adimlar: [
            { baslik: "1 · *Formulate questions*", metin: "Veriyle cevaplanabilecek bir soru sor: okuldaki öğrenciler okula ortalama kaç dakikada geliyor?" },
            { baslik: "2 · *Collect data*", metin: "40 öğrenciye sor ve cevapları kaydet." },
            { baslik: "3 · *Analyze data*", metin: "Grafiğini çiz, ortalamasını bul." },
            { baslik: "4 · *Interpret results*", metin: "Sonucu soruya geri bağla ve bağlamıyla yaz: \"Öğrenciler okula ortalama 27 dakikada geliyor.\"" }
          ] }
      ]
    },
    {
      baslik: "*Population*, *sample*, *census*",
      kisa: "Population grubun tamamı, sample veri topladığın parça, census herkesten veri toplamak.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🍲", terim: "Population", tr: "ana kütle", tanim: "Hakkında bilgi edinmek istediğin grubun ==tamamı==.", ornek: "Okuldaki 800 öğrencinin hepsi (tencere)." },
            { ikon: "🥄", terim: "Sample", tr: "örneklem", tanim: "Population içinden, gerçekten veri topladığın ==alt grup==.", ornek: "Sorduğun 40 öğrenci (kaşık)." },
            { ikon: "📋", terim: "Census", tr: "sayım", tanim: "Population'daki ==herkesten== veri toplamak.", ornek: "800 öğrencinin hepsine sormak." }
          ] },
        { tip: "ikili", sol: { ikon: "🍲", baslik: "*Population*", maddeler: ["Grubun tamamı (tencere)", "Örnek: 800 öğrenci (N = 800)"] },
          sag: { ikon: "🥄", baslik: "*Sample*", maddeler: ["Gerçekten veri toplanan parça (kaşık)", "Örnek: sorulan 40 öğrenci (n = 40)"] },
          oyun: [
            { metin: "Okuldaki 800 öğrencinin hepsi.", cevap: "sol", neden: "Hakkında bilgi istediğin grubun tamamı: *population*." },
            { metin: "Anket formunu dolduran 40 öğrenci.", cevap: "sag", neden: "Gerçekten veri toplanan alt grup: *sample*." },
            { metin: "Bir ülkedeki bütün seçmenler.", cevap: "sol", neden: "Merak edilen grubun tamamı: *population*." },
            { metin: "Telefonla aranıp görüşü alınan 2 bin seçmen.", cevap: "sag", neden: "Veri toplanan parça: *sample*." }
          ] },
        { tip: "ornek", baslik: "Acil servis: kim population, kim sample?", durum: "Bir hastane, acil servise o hafta gelenlerden 50 hastanın bekleme süresini kaydediyor.",
          adimlar: ["Hakkında bilgi istenen grup: o hafta acil servise gelen bütün hastalar. Bu *population*.", "Gerçekten veri toplanan grup: bekleme süresi kaydedilen 50 hasta. Bu *sample*.", "Ölçülen özellik (*variable*): bekleme süresi, dakika cinsinden; sayısal."],
          sonuc: "*Population* = o hafta gelen bütün hastalar; *sample* = bekleme süresi kaydedilen 50 hasta. Bağlamıyla ve tam yaz: yalnızca \"hastalar\" değil." },
        { tip: "tuzak", baslik: "Census sorusu", metin: "800 öğrencinin hepsine sorsaydın ortada bir *sample* kalmazdı.", yanlis: "Herkese sorduk ama yine de elimizde bir sample var.", dogru: "Herkesten veri toplamak *census*'tur; *sample* ancak population'ın bir parçasından veri alınınca vardır." }
      ]
    },
    {
      baslik: "Tablo: birimler ve değişkenler",
      kisa: "Satırlar observational units, sütunlar variables; birim her zaman insan değildir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧍", terim: "Observational units", tr: "gözlem birimleri (individuals)", tanim: "Hakkında bilgi topladığın kişi ya da nesneler; tablonun ==satırları==.", ornek: "Anketteki her öğrenci." },
            { ikon: "📏", terim: "Variable", tr: "değişken", tanim: "Birimden birime değişebilen özellik; tablonun ==sütunları==.", ornek: "Geliş şekli, geliş süresi, kardeş sayısı." }
          ] },
        { tip: "tablo", baslik: "Sınıf anketi", head: ["Student", "Transport", "Commute time (min)", "Siblings"], rows: [
            ["Ada", "Metro", "35", "1"],
            ["Deniz", "Service bus", "20", "0"],
            ["Ece", "Bus", "45", "2"],
            ["Kerem", "Walk", "10", "1"],
            ["Zeynep", "Service bus", "25", "3"]
          ], not: "5 birim (öğrenci), 3 değişken (Transport, Commute time, Siblings)." },
        { tip: "ornek", baslik: "Cankurtaran vardiyaları", durum: "Bir havuzun iki aylık cankurtaran vardiya çizelgesinden 20 vardiya seçilip habersiz test yapılıyor.",
          adimlar: ["Çizelgedeki her satır bir vardiya; test edilen şey cankurtaranlar değil, vardiyalar.", "*Population*: iki aydaki bütün vardiyalar.", "*Sample*: seçilen 20 vardiya."],
          sonuc: "Burada ==birim insan değil, vardiya==. *Population* = iki aydaki bütün vardiyalar; *sample* = 20 vardiya." },
        { tip: "tuzak", baslik: "Birim ve değer karışıklığı", metin: "Satırlar vardiya, havalimanı, maç ya da hane de olabilir. Tablodaki \"35\" bir değişken değil, değerdir; \"50 hasta\" ise sample büyüklüğüdür.", yanlis: "Birim hep kişidir; \"50 hasta\" bir variable'dır.", dogru: "\"Her satır neyi anlatıyor?\" diye sor: o *observational unit*'tir. \"Bekleme süresi\" variable'dır." }
      ]
    },
    {
      baslik: "*Categorical* mı, *quantitative* mi?",
      kisa: "Ortalaması anlamlıysa quantitative, anlamsızsa categorical.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🗂️", baslik: "*Categorical variable*", maddeler: ["Birimi bir kategoriye yerleştirir", "Ortalaması anlamsız", "Diğer adı: *qualitative*"] },
          sag: { ikon: "🔢", baslik: "*Quantitative variable*", maddeler: ["Sayma ya da ölçmeyle bulunan sayısal değer", "Ortalaması anlamlı", "Diğer adı: *numerical*"] },
          oyun: [
            { metin: "Okula geliş şekli (servis, otobüs, metro, yürüyüş).", cevap: "sol", neden: "Her öğrenci bir kategoriye girer: *categorical*." },
            { metin: "Okula geliş süresi (dakika).", cevap: "sag", neden: "Ölçülen sayı, ortalaması anlamlı: *quantitative*." },
            { metin: "Bir öğrencinin kardeş sayısı.", cevap: "sag", neden: "Sayılan miktar: *quantitative*." },
            { metin: "Havalimanının ülkesi.", cevap: "sol", neden: "Kategori: *categorical*." },
            { metin: "Bir havalimanının yıllık yolcu sayısı.", cevap: "sag", neden: "Miktar: *quantitative*." }
          ] },
        { tip: "ornek", baslik: "Pratik test: ortalaması anlamlı mı?", durum: "Tablodaki geliş süreleri: 35, 20, 45, 10, 25 dakika. Geliş şekillerinin de ortalamasını almaya çalışalım.",
          adimlar: ["Toplam: 35 + 20 + 45 + 10 + 25 = 135.", "Ortalama: 135 ÷ 5 = 27 dakika. Anlamlı.", "Geliş şekli: (Metro + Bus + Walk + …) ÷ 5 = ? Hesap yapılamaz, sonuç anlamsız."],
          sonuc: "Ortalama süre 27 dakika; ortalama geliş şekli diye bir şey yok. Ortalaması anlamlıysa *quantitative*, değilse *categorical*." },
        { tip: "sekil", baslik: "Geliş süreleri (dakika)", fig: { type: "dot", values: [35, 20, 45, 10, 25], label: "Commute time (min)" } }
      ]
    },
    {
      baslik: "Plaka kodu tuzağı",
      kisa: "Sayıyla yazılan her şey miktar değildir; etiket categorical'dır.",
      bloklar: [
        { tip: "ornek", baslik: "İstanbul, Ankara, İzmir ortalaması", durum: "Plaka kodları: İstanbul 34, Ankara 6 (06), İzmir 35. Hepsi sayı; ortalamalarını alalım.",
          adimlar: ["Toplam: 34 + 6 + 35 = 75.", "Ortalama: 75 ÷ 3 = 25.", "25, Erzurum'un plaka kodu. Üç batı şehrinin ortalaması Erzurum olamaz.", "Neden? Bu sayılar miktar değil, sadece etiket."],
          sonuc: "Sayıyla yazılmış olsa da plaka kodu ==*categorical*==. Ortalaması anlamsız." },
        { tip: "tuzak", baslik: "Ders notundaki uyarı (Caution)", metin: "Sayı değeri alan her değişken *quantitative* değildir. Miktar (sayma ya da ölçme) *quantitative*'dir; etiket (plaka kodu, posta kodu, forma numarası, öğrenci numarası) *categorical*'dır.", yanlis: "Sayıyla yazıldıysa quantitative'dir.", dogru: "Önce sor: ortalaması anlamlı mı? Anlamsızsa sayı bir etikettir: *categorical*." }
      ]
    },
    {
      baslik: "*Discrete* ve *continuous*",
      kisa: "Sayıyorsan discrete, ölçüyorsan continuous; yalnızca quantitative için.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🖐️", baslik: "*Discrete*", maddeler: ["Genellikle sayarak bulunur", "Ara değer yok", "Kardeş sayısı: 0, 1, 2…"] },
          sag: { ikon: "📏", baslik: "*Continuous*", maddeler: ["Genellikle ölçerek bulunur", "Aralıktaki her değeri alabilir", "Geliş süresi: 23 dk da 23,5 dk da"] },
          oyun: [
            { metin: "Bir ailedeki kardeş sayısı.", cevap: "sol", neden: "Sayıyorsun; 1,5 kardeş olmaz: *discrete*." },
            { metin: "Okula geliş süresi.", cevap: "sag", neden: "Ölçüyorsun; 23 de olur 23,52 de: *continuous*." },
            { metin: "Bir havalimanının pist sayısı.", cevap: "sol", neden: "Pistleri sayarsın: *discrete*." },
            { metin: "Bir öğrencinin boyu.", cevap: "sag", neden: "Ölçülür: *continuous*." },
            { metin: "Bir odanın sıcaklığı.", cevap: "sag", neden: "Ölçülür, aralıktaki her değer olabilir: *continuous*." }
          ] },
        { tip: "grafik", baslik: "*Discrete*: kardeş sayısı", xlabel: "Kardeş sayısı", ylabel: "", xmax: 5, ymax: 4,
          xticks: [{ v: 0, label: "0" }, { v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          ogeler: [
            { id: "p0", tip: "nokta", x: 0, y: 1.5, gizli: true },
            { id: "p1", tip: "nokta", x: 1, y: 1.5, gizli: true },
            { id: "p2", tip: "nokta", x: 2, y: 1.5, gizli: true },
            { id: "p3", tip: "nokta", x: 3, y: 1.5, gizli: true },
            { id: "p4", tip: "nokta", x: 4, y: 1.5, gizli: true },
            { id: "yok", tip: "yazi", x: 1.5, y: 2.6, metin: "1,5 ✗ olmaz", gizli: true }
          ],
          durumlar: [
            { metin: "Kardeş sayısını ==sayarsın==: 0, 1, 2…", goster: ["p0", "p1", "p2"] },
            { metin: "3 ve 4 de mümkün; ama sayı doğrusunun bütün noktaları değil.", goster: ["p3", "p4"] },
            { metin: "Aralar boş: 1 ile 2 arasında kardeş olmaz. Bu yüzden *discrete*.", goster: ["yok"] }
          ] },
        { tip: "grafik", baslik: "*Continuous*: geliş süresi", xlabel: "Dakika", ylabel: "", xmax: 6, ymax: 4,
          xticks: [{ v: 0, label: "20" }, { v: 1, label: "21" }, { v: 2, label: "22" }, { v: 3, label: "23" }, { v: 4, label: "24" }, { v: 5, label: "25" }, { v: 6, label: "26" }],
          ogeler: [
            { id: "cizgi", tip: "cizgi", renk: 0, from: [0, 1.5], to: [6, 1.5], etiket: "", gizli: true },
            { id: "m", tip: "nokta", x: 3, y: 1.5, etiket: "23 dk", gizli: true }
          ],
          durumlar: [
            { metin: "Süreyi ==ölçersin==. Bir işaretçi 23 dakikada duruyor.", goster: ["m"] },
            { metin: "23,5 dakika da olabilir.", set: { m: { x: 3.5, etiket: "23,5 dk" } } },
            { metin: "23,52 dakika da. Her ara değer geçerli.", set: { m: { x: 3.52, etiket: "23,52 dk" } } },
            { metin: "Aralıktaki her değeri alabildiği için doğru kesintisiz dolar: *continuous*.", goster: ["cizgi"] }
          ] },
        { tip: "tuzak", baslik: "Sıra önemli", metin: "Önce *quantitative* mi diye bak, sonra sayma/ölçme ayrımına geç. Forma numarası ne discrete ne continuous'tur; *categorical*'dır.", yanlis: "Forma numarası sayı olduğu için discrete'tir.", dogru: "Sayıyorsan *discrete*, ölçüyorsan *continuous*; ama bu ayrım yalnızca *quantitative* değişkenler içindir." }
      ]
    },
    {
      baslik: "Havalimanları: hepsini birlikte uygula",
      kisa: "Önce birim, sonra değişkenler, sonra her değişkenin türü.",
      bloklar: [
        { tip: "tablo", baslik: "Beş büyük havalimanı (yaklaşık 2024)", head: ["Airport", "Country", "Code", "Runways", "Passengers (millions)"], rows: [
            ["Atlanta", "USA", "ATL", "5", "108"],
            ["Dubai", "UAE", "DXB", "2", "92"],
            ["Tokyo Haneda", "Japan", "HND", "4", "86"],
            ["London Heathrow", "UK", "LHR", "2", "84"],
            ["Istanbul", "Türkiye", "IST", "5", "80"]
          ], not: "Değerler yaklaşık; yolcu sayıları milyon olarak yuvarlanmış." },
        { tip: "ornek", baslik: "Üç soruluk kontrol listesi", durum: "Yukarıdaki havalimanları tablosunda birimleri, değişkenleri ve değişken türlerini bulalım.",
          adimlar: ["Satırlar kim? *Observational units* = havalimanları (5 tane).", "Sütunlar ne? Country, Code, Runways, Passengers: dört *variable*.", "Kategori mi, sayı mı? Country ve Code *categorical* (ülke bir kategori, kod üç harfli etiket). Runways *quantitative* ve *discrete* (pist sayılır). Passengers *quantitative* (miktar, yaklaşık 80–108 milyon)."],
          sonuc: "5 birim, 4 değişken: Country ve Code *categorical*; Runways *quantitative*, *discrete*; Passengers *quantitative*." }
      ]
    },
    {
      baslik: "*Distribution*: dağılım",
      kisa: "Dağılım: değişkenin hangi değerleri ne sıklıkla aldığı.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Distribution", tr: "dağılım", tanim: "Bir variable'ın ==hangi değerleri aldığı== ve her birini ==ne sıklıkla== aldığı.", ornek: "20 kişilik sınıfta geliş şekli: servis 8, otobüs 6, metro 4, yürüyüş 2." }
          ] },
        { tip: "sekil", baslik: "Geliş şeklinin *distribution*'ı", fig: { type: "bar", cats: ["Service bus", "Bus", "Metro", "Walk"], series: [{ name: "Öğrenci", values: [8, 6, 4, 2] }], ylabel: "Frequency" } },
        { tip: "ornek", baslik: "Dağılım toplamı", durum: "20 kişilik sınıfta 8 kişi servisle, 6 kişi otobüsle, 4 kişi metroyla, 2 kişi yürüyerek geliyor.",
          adimlar: ["Toplam: 8 + 6 + 4 + 2 = 20, sınıfın tamamı.", "En sık değer: servis (8 kişi).", "En seyrek değer: yürüyüş (2 kişi)."],
          sonuc: "Dağılım = değerler (servis, otobüs, metro, yürüyüş) + her birinin sıklığı (8, 6, 4, 2)." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Statistics* dört adımdır: soru sor, veri topla, analiz et, yorumla.",
            "*Population* grubun tamamı (tencere), *sample* veri topladığın parçası (kaşık); herkese sorarsan *census*.",
            "*Population* ve *sample*'ı bağlamıyla ve tam yaz; birim bazen insan değil vardiya, havalimanı olabilir.",
            "Satırlar *observational units*, sütunlar *variables*; variable ile değerini karıştırma.",
            "*Categorical* kategori, *quantitative* sayısal değerdir; test: ortalaması anlamlı mı? Plaka, posta kodu, forma numarası etikettir: *categorical*.",
            "Sayıyorsan *discrete* (kardeş sayısı, pist), ölçüyorsan *continuous* (süre, boy, sıcaklık).",
            "*Distribution*: değişkenin hangi değerleri ne sıklıkla aldığı.",
            "Eş adlar: *categorical* = *qualitative*, *quantitative* = *numerical*, *observational units* = *individuals*."
          ] }
      ]
    }
  ]
};
