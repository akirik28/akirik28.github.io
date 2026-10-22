/* Kitora not defteri · bf17 · 1.7 Organizasyon ve Roller
   Kaynak: ap-videolar/src/episodes/bf17 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf17",
  ozet: "İş büyüyünce daha çok insan, net bir yapı ve karar düzeni gerekir. Bu defterde dört yasal yapıyı (*sole proprietorship*, *partnership*, *LLC*, *corporation*), onları ayıran ölçütü (*liability*), *corporation*'da kimin ne yaptığını (*shareholder*, *board of directors*, *executive leadership*), bölümleri (*departments*) ve *outsourcing*'i göreceksin.",
  bolumler: [
    {
      baslik: "Tek başına yetişemiyorsun",
      bloklar: [
        { tip: "hikaye", ikon: "🍪", baslik: "Evden kurabiye satıyorsun",
          metin: "Evde kurabiye yapıp internetten satıyorsun. Siparişler patladı. Mesajlara sen bakıyorsun, kargoyu sen hazırlıyorsun, hesabı sen tutuyorsun. Bir gün bakıyorsun: tek başına yetişemiyorsun. Büyüyen iş daha çok insan, net bir yapı ve karar düzeni ister." },
        { tip: "adimlar", baslik: "Büyüyen işin üç ihtiyacı", adimlar: [
            { baslik: "*People*", metin: "Daha çok insan." },
            { baslik: "*Structure*", metin: "Net bir yapı." },
            { baslik: "*Systems*", metin: "Net bir karar düzeni." }
          ] },
        { tip: "not", metin: "Her şey yolunda giderse yeni bir sorunun olur: hepsini tek başına yapamazsın. E-postalara cevap, sosyal medya, gider takibi, stok siparişi hep sende. Dave Ramsey'e göre ilk çalışanı almadan önce işin ==altında ezilmek normaldir.==" }
      ]
    },
    {
      baslik: "Yasal yapı: *business structure*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏛️", terim: "Business structure", tr: "işletme yapısı", tanim: "İşletmenin yasal yapısı; kimin sahip olduğunu, kimin karar verdiğini ve borçtan kimin sorumlu olduğunu belirler.", ornek: "Şahıs şirketi, limited şirket, anonim şirket." }
          ] },
        { tip: "harita", merkez: "Dört yasal yapı", dallar: [
            { baslik: "1 · *Sole proprietorship*", alt: "Tek sahip; şahıs şirketine yakın" },
            { baslik: "2 · *Partnership*", alt: "İki ya da daha fazla sahip" },
            { baslik: "3 · *LLC*", alt: "Limited şirkete yakın" },
            { baslik: "4 · *Corporation*", alt: "Anonim şirkete yakın" }
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 65, sonek: "%", etiket: "ABD'de işletmelerin yaklaşık payı: sole proprietorship (en yaygın yapı)" }
          ] }
      ]
    },
    {
      baslik: "*Sole proprietorship*: tek kişilik işletme",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧵", terim: "Sole proprietorship", tr: "şahıs işletmesi", tanim: "Tek kişinin sahip olduğu ve işlettiği, sahibiyle işletme arasında yasal ayrım bulunmayan işletme.", ornek: "Mahalledeki terzi." },
            { ikon: "⛓️", terim: "Liability", tr: "yasal sorumluluk", tanim: "İşletmenin borçlarından, yükümlülüklerinden ve yaptıklarından doğan yasal sorumluluk.", ornek: "Borç kalırsa kim öder?" },
            { ikon: "♾️", terim: "Unlimited liability", tr: "sınırsız sorumluluk", tanim: "İşletme borcunu ödeyemezse ya da dava edilirse sahibinin kişisel mal varlığıyla sorumlu olması; sorumluluğun sınırı yoktur.", ornek: "400 bin liralık borç için arabana el konabilir." }
          ] },
        { tip: "ikili", sol: { ikon: "👑", baslik: "Kontrol ve kâr", maddeler: ["Bütün kararlar senin", "Kârın tamamı senin"] },
          sag: { ikon: "💣", baslik: "Risk", maddeler: ["Bütün risk de senin", "Kişisel mal varlığın tehlikede"] },
          oyun: [
            { metin: "Fiyatı ve tasarımı kimseye sormadan belirlemek.", cevap: "sol", neden: "Tüm kontrol sende." },
            { metin: "Dava edilince kişisel birikimine el konması.", cevap: "sag", neden: "*Unlimited liability*." },
            { metin: "Yıl sonunda kârın tamamını cebine koymak.", cevap: "sol", neden: "Kâr paylaşılmaz." },
            { metin: "Borcu ödeyemeyince arabanın haczedilmesi.", cevap: "sag", neden: "Tüm risk de sende." }
          ] },
        { tip: "ornek", baslik: "İş battı: kim ödüyor?", durum: "Sole proprietorship'in 500.000 TL borcu kaldı, kasada 100.000 TL var. Kalan borç için kim sorumlu?",
          adimlar: ["Toplam borç = 500.000 TL.", "Kasadaki para = 100.000 TL.", "Kalan borç = 500.000 − 100.000 = 400.000 TL.", "*Unlimited liability*: kalan 400.000 TL için birikimine, arabana el konabilir."],
          sonuc: "Sahip kişisel mal varlığıyla 400.000 TL öder. Yasalara göre sen ve işletmen aynısınız." },
        { tip: "grafik", baslik: "500 bin liralık borç kimin cebinden? (bin TL)", xlabel: "Kalem", ylabel: "Bin TL", xmax: 4, ymax: 600,
          yticks: [{ v: 100, label: "100" }, { v: 400, label: "400" }, { v: 500, label: "500" }],
          ogeler: [
            { id: "b", tip: "alan", renk: 0, noktalar: [[0.4, 0], [1.2, 0], [1.2, 0], [0.4, 0]] },
            { id: "k", tip: "alan", renk: 1, noktalar: [[1.6, 0], [2.4, 0], [2.4, 0], [1.6, 0]] },
            { id: "p", tip: "alan", renk: 3, noktalar: [[2.8, 0], [3.6, 0], [3.6, 0], [2.8, 0]] },
            { id: "bt", tip: "yazi", x: 0.8, y: 530, metin: "Borç 500", gizli: true },
            { id: "kt", tip: "yazi", x: 2, y: 130, metin: "Kasa 100", gizli: true },
            { id: "pt", tip: "yazi", x: 3.2, y: 430, metin: "Kişisel 400", gizli: true }
          ],
          durumlar: [
            { metin: "İş battı: ==500 bin TL borç== kaldı.", set: { b: { noktalar: [[0.4, 0], [1.2, 0], [1.2, 500], [0.4, 500]] } }, goster: ["bt"] },
            { metin: "Kasada yalnızca ==100 bin TL== var.", set: { k: { noktalar: [[1.6, 0], [2.4, 0], [2.4, 100], [1.6, 100]] } }, goster: ["kt"] },
            { metin: "Kalan ==400 bin TL== kişisel birikimden çıkar. Tüm kontrol da, tüm risk de sende.", set: { p: { noktalar: [[2.8, 0], [3.6, 0], [3.6, 400], [2.8, 400]] } }, goster: ["pt"] }
          ] },
        { tip: "tuzak", baslik: "Sahip ile işletme aynı", metin: "*Sole proprietorship*'te sahip ile işletme arasında yasal ayrım yoktur.", yanlis: "İşletme borçlanırsa sahibin kişisel mal varlığı güvendedir.", dogru: "Yasalara göre sen ve işletmen aynısınız; *unlimited liability* geçerlidir." }
      ]
    },
    {
      baslik: "*Partnership*: ortaklık",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🤝", terim: "Partnership", tr: "ortaklık", tanim: "İki ya da daha fazla kişinin sahip olup işlettiği; kârın, zararın ve sorumluluğun paylaşıldığı işletme.", ornek: "Sen kurabiyeyi yaparsın, arkadaşın Elif satar." }
          ] },
        { tip: "adimlar", baslik: "Yükü paylaşmak", adimlar: [
            { baslik: "Yetenekler birleşir", metin: "Biri ürünü yaratmada, diğeri pazarlama ve satışta iyi." },
            { baslik: "Paylaşım", metin: "Kâr, zarar ve sorumluluk paylaşılır." },
            { baslik: "Güven şart", metin: "Ortağınla her şeyi paylaşırsın." },
            { baslik: "Dikkat", metin: "Burada da *unlimited liability* var." }
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "1976", baslik: "Apple kuruldu", metin: "Üç ortaklı bir *partnership* olarak." },
            { tarih: "+12 gün", baslik: "Ortaklardan biri ayrıldı", metin: "Borçlardan sorumlu olmaktan korkup payını 800 dolara sattı." },
            { tarih: "Ders", baslik: "Risk gerçek", metin: "Ortak sayısı artınca *unlimited liability* kaybolmaz." }
          ] },
        { tip: "tuzak", baslik: "Ortak çoksa risk azalır mı?", metin: "Clifford özellikle vurguluyor: *partnership*'te de “tıpkı *sole proprietorship* gibi” *unlimited liability* var.", yanlis: "Ortak sayısı artınca kişisel sorumluluk azalır.", dogru: "Ortak sayısı riski azaltmaz; her ortak borçtan kişisel olarak sorumlu olabilir." }
      ]
    },
    {
      baslik: "*LLC*: sınırlı sorumluluk",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛡️", terim: "LLC (Limited liability company)", tr: "limited şirket", tanim: "*Partnership* ile *corporation* özelliklerini birleştiren ve sahiplerine *limited liability* sağlayan yapı.", ornek: "Doktor, dişçi, muhasebeci gibi profesyonel hizmet işlerinde yaygın." },
            { ikon: "🧱", terim: "Limited liability", tr: "sınırlı sorumluluk", tanim: "Sahiplerin, işletmenin borçlarından yatırdıkları paranın ötesinde kişisel olarak sorumlu olmaması; kişisel mal varlığı korunur.", ornek: "200 bin TL koydun, kaybın en fazla 200 bin TL." }
          ] },
        { tip: "ornek", baslik: "LLC battı: ne kaybedersin?", durum: "Şirkete 200.000 TL koydun. Şirket 500.000 TL borçla battı. *Limited liability* varsa ne kaybedersin?",
          adimlar: ["Yatırdığın para = 200.000 TL.", "Şirketin borcu = 500.000 TL, ama kişisel sorumluluk yok.", "Kaybın = yatırdığın 200.000 TL.", "Evin ve birikimin güvende."],
          sonuc: "Kaybın 200.000 TL. Aynı borçta *sole proprietorship* olsaydı kişisel birikimden de çıkardı." },
        { tip: "grafik", baslik: "Aynı batış, iki yapı: kim ne kaybeder? (bin TL)", xlabel: "Yapı", ylabel: "Kayıp (bin TL)", xmax: 4, ymax: 600,
          yticks: [{ v: 200, label: "200" }, { v: 500, label: "500" }],
          ogeler: [
            { id: "sp", tip: "alan", renk: 0, noktalar: [[0.5, 0], [1.5, 0], [1.5, 0], [0.5, 0]] },
            { id: "ll", tip: "alan", renk: 1, noktalar: [[2.3, 0], [3.3, 0], [3.3, 0], [2.3, 0]] },
            { id: "spt", tip: "yazi", x: 1, y: 540, metin: "Şahıs: borcun hepsi (500)", gizli: true },
            { id: "llt", tip: "yazi", x: 2.8, y: 240, metin: "LLC: yatırım (200)", gizli: true },
            { id: "gv", tip: "yazi", x: 2.8, y: 320, metin: "Ev ve birikim güvende", gizli: true }
          ],
          durumlar: [
            { metin: "*Sole proprietorship*: borcun hepsi sahibin sorumluluğunda: ==500 bin TL.==", set: { sp: { noktalar: [[0.5, 0], [1.5, 0], [1.5, 500], [0.5, 500]] } }, goster: ["spt"] },
            { metin: "*LLC*: kayıp yalnızca yatırılan ==200 bin TL.==", set: { ll: { noktalar: [[2.3, 0], [3.3, 0], [3.3, 200], [2.3, 200]] } }, goster: ["llt"] },
            { metin: "Evin ve birikimin ==güvende==.", goster: ["gv"] }
          ] },
        { tip: "not", metin: "LLC'nin tanım kalıbı: ==“*partnership* ile *corporation* özelliklerini birleştirir ve *limited liability* sağlar.”== Küçük işletmenin esnekliği, daha az kişisel risk." }
      ]
    },
    {
      baslik: "Dört yapıyı karşılaştır",
      bloklar: [
        { tip: "tablo", baslik: "Liability dört yapıyı ayıran ana ölçüt", head: ["Yapı", "Sahip", "*Liability*", "Not"], rows: [
            ["*Sole proprietorship*", "Tek kişi", "Sınırsız (*unlimited*)", "Tüm kontrol ve tüm risk sende"],
            ["*Partnership*", "İki ya da daha fazla", "Sınırsız (*unlimited*)", "Güven şart; kâr, zarar paylaşılır"],
            ["*LLC*", "Sahipler", "Sınırlı (*limited*)", "Partnership + corporation özellikleri"],
            ["*Corporation*", "Çok sayıda *shareholder*", "Sınırlı (*limited*)", "Sahiplerinden ayrı var olur"]
          ], vurgu: 2 },
        { tip: "ikili", sol: { ikon: "♾️", baslik: "*Unlimited liability*", maddeler: ["*Sole proprietorship*", "*Partnership*", "Kişisel mal varlığına el konabilir"] },
          sag: { ikon: "🛡️", baslik: "*Limited liability*", maddeler: ["*LLC*", "*Corporation*", "Kayıp, yatırılan paranın ötesine geçmez"] },
          oyun: [
            { metin: "Mahalledeki terzi dava edilince birikimine el konabiliyor.", cevap: "sol", neden: "Tek sahipli yapı: *sole proprietorship*." },
            { metin: "Deniz ile Ece'nin kafesi battı, alacaklılar Deniz'in birikimine de el koyuyor.", cevap: "sol", neden: "*Partnership*'te de *unlimited liability*." },
            { metin: "Şirkete koyduğun 200 bin TL'den fazlasını kaybetmezsin.", cevap: "sag", neden: "*Limited liability*." },
            { metin: "Hisseleri halka açık, sahiplerinden ayrı bir şirket borçla battı.", cevap: "sag", neden: "*Corporation* sahiplerini korur." },
            { metin: "Bir dişçi kliniğini *LLC* olarak kuruyor.", cevap: "sag", neden: "*LLC* *limited liability* sağlar." }
          ] },
        { tip: "tuzak", baslik: "Kişisel birikime el konuyorsa", metin: "Soruda “kişisel birikimine, evine el konabiliyor” ifadesi varsa cevap ilk ikisinden biridir; sahip sayısına bak. Soruda *limited liability* görürsen *LLC* ya da *corporation*.", yanlis: "İkinci bir ortak eklenince borç sorumluluğu sınırlanır.", dogru: "Sahip sayısı değil, yapı belirler: *sole proprietorship* ve *partnership* sınırsız; *LLC* ve *corporation* sınırlı." }
      ]
    },
    {
      baslik: "*Corporation*: hisseler ve sahipler",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏢", terim: "Corporation", tr: "anonim şirket", tanim: "Sahiplerinden ayrı bir tüzel kişi olarak var olan ve *shareholder*'ların sahip olduğu şirket.", ornek: "Disney." },
            { ikon: "🙋", terim: "Shareholder", tr: "hissedar", tanim: "Bir *corporation*'ın hisselerine sahip olan kişi ya da kurum; yani şirketin ortağı.", ornek: "Disney hissesi alan, Disney'in küçücük bir ortağıdır." },
            { ikon: "🧩", terim: "Shares of stock", tr: "hisse senedi", tanim: "Şirketin sahipliğinin bölündüğü küçük parçalar.", ornek: "1 milyon hisse." },
            { ikon: "🔔", terim: "IPO (Initial public offering)", tr: "halka arz", tanim: "Bir şirketin hisselerini ilk kez halka satması.", ornek: "Özel yatırımcılara da satılabilir." }
          ] },
        { tip: "ornek", baslik: "Hisse satarak para toplamak", durum: "Bir şirket 1.000.000 hisseyi hisse başına 50 TL'den satıyor. Kaç lira toplar, bu parayla ne yapar?",
          adimlar: ["Hisse sayısı = 1.000.000.", "Hisse başına fiyat = 50 TL.", "Toplanan = 1.000.000 × 50 = 50.000.000 TL.", "Bu para yeni ürün, çalışan ve şube için kullanılır."],
          sonuc: "Şirket 50 milyon TL toplar: yeni ürün çıkarır, çalışan alır, yeni şube açar. Hisse ve borsa ayrıntısı Personal Finance ünitelerinde; burada yalnızca fikir yeter." },
        { tip: "grafik", baslik: "IPO ile toplanan para (milyon TL)", xlabel: "Hisse sayısı (milyon)", ylabel: "Toplanan (milyon TL)", xmax: 2, ymax: 110,
          xticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }, { v: 1.5, label: "1,5" }],
          yticks: [{ v: 25, label: "25" }, { v: 50, label: "50" }, { v: 75, label: "75" }],
          ogeler: [
            { id: "dogru", tip: "cizgi", renk: 1, from: [0, 0], to: [2, 100], etiket: "Hisse × 50 TL", gizli: true },
            { id: "n", tip: "nokta", x: 1, y: 50, etiket: "1 milyon hisse = 50 milyon TL", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Her hisse ==50 TL==: sattığın hisse arttıkça toplanan para doğrusal artar.", goster: ["dogru"] },
            { metin: "==1 milyon hisse== satarsan ==50 milyon TL== toplarsın.", goster: ["n"] }
          ] },
        { tip: "tuzak", baslik: "Sahipler ve şirket ayrı", metin: "*Corporation* sahiplerinden ayrı var olur. *Sole proprietorship* ve *partnership*'te böyle bir ayrım yok.", yanlis: "*Corporation* ile sahipleri yasal olarak aynıdır.", dogru: "*Corporation* sahiplerinden ayrı bir tüzel kişidir; sahipleri *shareholder*'lardır." }
      ]
    },
    {
      baslik: "Kim karar verir? Kurul ve yönetim",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪑", terim: "Board of directors", tr: "yönetim kurulu", tanim: "*Shareholder*'ların seçtiği, şirketin uzun vadeli stratejisini ve üst yönetimini gözeten kurul; günlük işleri yürütmez.", ornek: "Steve Jobs 1985'te kurul kararıyla Apple'dan alındı." },
            { ikon: "💼", terim: "Executive leadership", tr: "üst yönetim", tanim: "Şirketin genel stratejisini ve operasyonlarını yöneten üst düzey yöneticiler (CEO, CFO gibi).", ornek: "CEO ve CFO." },
            { ikon: "👔", terim: "CEO (Chief executive officer)", tr: "genel müdür", tanim: "Şirketin en üst yöneticisi; *executive leadership*'in başı.", ornek: "En tepedeki yönetici." },
            { ikon: "💵", terim: "CFO (Chief financial officer)", tr: "mali işler başkanı", tanim: "Şirketin finansından sorumlu üst yönetici.", ornek: "Paranın başındaki yönetici." }
          ] },
        { tip: "adimlar", baslik: "Karar zinciri", adimlar: [
            { baslik: "*Shareholders*", metin: "Şirketin sahipleri; kurulu seçerler." },
            { baslik: "*Board of directors*", metin: "Uzun vadeli stratejiyi gözetir, yürütenleri denetler." },
            { baslik: "*Executive leadership*", metin: "CEO ve CFO; günlük işi yönetir." },
            { baslik: "*Managers* ve çalışanlar", metin: "Günlük işleri yürütür." }
          ] },
        { tip: "ikili", sol: { ikon: "🪑", baslik: "*Board of directors*", maddeler: ["Gözetir, denetler", "Uzun vadeli strateji", "Günlük işi yürütmez"] },
          sag: { ikon: "💼", baslik: "*Executive leadership*", maddeler: ["Yürütür, yönetir", "Genel strateji ve operasyon", "CEO, CFO"] },
          oyun: [
            { metin: "Hissedarların seçtiği, uzun vadeli stratejiyi gözeten kurul.", cevap: "sol", neden: "*Board of directors*." },
            { metin: "Her gün operasyonları yöneten CEO.", cevap: "sag", neden: "Yürütme: *executive leadership*." },
            { metin: "CEO'yu denetleyip performansını değerlendiren grup.", cevap: "sol", neden: "Yürütenleri denetler." },
            { metin: "Şirketin parasını yöneten CFO.", cevap: "sag", neden: "Üst yönetimin bir parçası." }
          ] },
        { tip: "tuzak", baslik: "Kurucu her zaman karar verici değil", metin: "*Board of directors* günlük işi yürütmez; uzun vadeli stratejiyi gözetir ve yürütenleri, yani *executive leadership*'i denetler. Kararı veren mutlaka kurucu değildir: Steve Jobs 1985'te Apple'da kurul kararıyla görevinden alınmıştı.", yanlis: "Şirketi kuran kişi her zaman şirketi yönetir.", dogru: "Büyük şirketlerde kurul yönetimi denetler; kurucu bile görevden alınabilir." }
      ]
    },
    {
      baslik: "Bölümler ve organizasyon şeması",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗂️", terim: "Departments", tr: "bölümler", tanim: "İşletme içinde belirli bir işleve odaklanan birimler.", ornek: "Marketing, operations, accounting, finance, human resources." },
            { ikon: "🌳", terim: "Organization chart (org chart)", tr: "organizasyon şeması", tanim: "Bölümleri ve kimin kime bağlı olduğunu gösteren şema.", ornek: "Dunder Mifflin'in şeması (The Office)." }
          ] },
        { tip: "harita", merkez: "Trendyol'un bölümleri", dallar: [
            { baslik: "*Marketing*", alt: "Müşteri çek ve elde tut: pazar araştırması, reklam, sosyal medya, marka" },
            { baslik: "*Research and development*", alt: "Ürünü geliştir: uygulamaya yeni özellik ekle, yeni çözümler ara" },
            { baslik: "*Operations*", alt: "Üret ve teslim et: siparişi kapına getir" },
            { baslik: "*Accounting*", alt: "Kaydet ve raporla: gelir, gider, kâr" },
            { baslik: "*Finance*", alt: "Parayı yönet: fon bul, yatırımcı çek, harcamaya karar ver" },
            { baslik: "*Human resources*", alt: "İşe al, eğit, performansı değerlendir, yan hakları yönet" }
          ] },
        { tip: "ikili", sol: { ikon: "🧾", baslik: "*Accounting*", maddeler: ["Olanı kaydeder ve raporlar", "Gelir, gider, kâr", "“Geçen ay ne kazandık?”"] },
          sag: { ikon: "💰", baslik: "*Finance*", maddeler: ["Parayı yönetir", "Fon bulur, yatırımcı çeker", "“Yeni depoya parayı nereden buluruz?”"] },
          oyun: [
            { metin: "Geçen ay ne kadar kâr ettik?", cevap: "sol", neden: "Olanı kaydedip raporlamak: *accounting*." },
            { metin: "Yeni depo için kredi mi alalım, yatırımcı mı bulalım?", cevap: "sag", neden: "Fon bulmak: *finance*." },
            { metin: "Bu çeyreğin gelir ve gider tablosunu hazırlamak.", cevap: "sol", neden: "Kayıt ve raporlama." },
            { metin: "Büyüme için hangi projeye ne kadar harcanacağına karar vermek.", cevap: "sag", neden: "Harcama ve büyüme kararları: *finance*." }
          ] },
        { tip: "ikili", sol: { ikon: "📣", baslik: "*Marketing*", maddeler: ["Müşteri çeker ve elde tutar", "Reklam, sosyal medya"] },
          sag: { ikon: "📦", baslik: "*Operations*", maddeler: ["Üretir ve teslim eder", "Siparişi kapıya getirir"] },
          oyun: [
            { metin: "Sosyal medyada indirim kampanyası yönetmek.", cevap: "sol", neden: "*Marketing*." },
            { metin: "Siparişi depodan çıkarıp müşteriye ulaştırmak.", cevap: "sag", neden: "*Operations*." },
            { metin: "Pazar araştırması yapıp müşteri tercihini öğrenmek.", cevap: "sol", neden: "*Marketing*." },
            { metin: "Hizmeti sunmak ve ürünün müşterinin eline geçmesini sağlamak.", cevap: "sag", neden: "*Operations*." }
          ] },
        { tip: "tuzak", baslik: "Accounting ≠ finance", metin: "*Accounting* olanı kaydeder ve raporlar (revenue, expenses, profit). *Finance* parayı yönetir: fon bulur, yatırımcı çeker, harcama ve büyüme kararlarını verir.", yanlis: "*Accounting* ile *finance* aynı bölümdür.", dogru: "Geçmişi kaydeden *accounting*, geleceğe dair para kararlarını veren *finance*'tir." },
        { tip: "not", metin: "Her işletmede bütün *departments* bulunmaz. *Human resources* (HR) işe alır, eğitir, yan hakları yönetir, performansı değerlendirir." }
      ]
    },
    {
      baslik: "*Outsourcing*: dışarıya yaptır",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏭", terim: "Outsourcing", tr: "dış kaynak kullanımı", tanim: "Belirli bir işi şirket içinde (*in-house*) yapmak yerine başka bir firmaya yaptırmak.", ornek: "Apple iPhone'u tasarlar, üretimini Foxconn gibi firmalara yaptırır." }
          ] },
        { tip: "ikili", sol: { ikon: "🏠", baslik: "*In-house*", maddeler: ["İşi şirket içinde yaparsın", "Kontrol sende"] },
          sag: { ikon: "🌍", baslik: "*Outsourcing*", maddeler: ["İşi başka firmaya yaptırırsın", "Başkası daha ucuza yapıyorsa mantıklı"] },
          oyun: [
            { metin: "Apple iPhone'u kendisi tasarlar.", cevap: "sol", neden: "Tasarım şirketin içinde." },
            { metin: "Apple iPhone üretimini Foxconn'a yaptırır.", cevap: "sag", neden: "Üretim dışarıya veriliyor." },
            { metin: "Bordro hesabını başka bir firmaya yaptırmak.", cevap: "sag", neden: "Bordro *outsourcing*'e örnek." },
            { metin: "Müşteri hizmetlerini kendi çalışanlarınla vermek.", cevap: "sol", neden: "İş şirket içinde yapılıyor." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🧾", baslik: "Bordro", metin: "*Payroll* işini dışarıya yaptırmak." },
            { ikon: "☎️", baslik: "Müşteri hizmetleri", metin: "*Customer service* dışarıdan alınabilir." },
            { ikon: "🖥️", baslik: "Web tasarımı", metin: "Siteyi başka bir firma yapar." },
            { ikon: "🏭", baslik: "Üretim", metin: "*Manufacturing*: iPhone üretimi gibi." }
          ] },
        { tip: "tuzak", baslik: "Neden outsourcing?", metin: "Her iş şirket içinde yapılmak zorunda değildir; *outsourcing*’in gerekçesi çoğunlukla maliyettir.", yanlis: "Her işi şirketin kendisinin yapması şarttır.", dogru: "Başka bir firma daha ucuza yapabiliyorsa işi dışarıya vermek mantıklıdır." },
        { tip: "not", metin: "Büyük çıkarım: başarılı işletmeler yalnızca iyi ürünle değil, ==etkili ve verimli organizasyonla== kurulur." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "İş büyüyünce daha çok insan, net bir yapı ve karar düzeni gerekir.",
            "*Sole proprietorship*: tek sahip, tüm kontrol ve kâr sende ama *unlimited liability* de sende (500.000 borç − 100.000 kasa = 400.000 TL kişisel).",
            "*Partnership*: ortaklar yükü ve kârı paylaşır; güven şart; yine *unlimited liability* (Apple'ın üçüncü ortağı payını 800 dolara sattı).",
            "*LLC*: *partnership* esnekliği + *limited liability*; 200.000 TL yatırdıysan kaybın 200.000 TL, ev ve birikim güvende.",
            "*Corporation*: sahiplerinden ayrı; sahipleri *shareholder*'lar (hisseler); IPO ile halka arz. 1 milyon × 50 TL = 50 milyon TL.",
            "*Board of directors* gözetir ve denetler; *executive leadership* (CEO, CFO) yürütür.",
            "*Departments*: *marketing*, *R&D*, *operations*, *accounting*, *finance*, *HR*. *Org chart* kimin kime bağlı olduğunu gösterir.",
            "*Accounting* olanı kaydeder; *finance* parayı yönetir.",
            "*Outsourcing*: işi başka firmaya yaptırmak; çoğunlukla maliyet nedeniyle."
          ] }
      ]
    }
  ]
};
