/* Kitora not defteri · bf12 · 1.2 Pazarlar ve Rekabet Avantajı
   Kaynak: ap-videolar/src/episodes/bf12 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf12",
  ozet: "Her alışveriş bir *market* içinde, iki tarafın da kazandığı bir *voluntary exchange*'dir. Fiyatı *demand* ve *supply* belirler; işletmeler müşteri için *competition* yapar ve *competitive advantage* arar. Bu defterde denge fiyatını, *shortage* ile *surplus*'u, *market share*'i, *barriers to entry*'yi ve dört *market structure*'ı göreceksin.",
  bolumler: [
    {
      baslik: "Kim kime iyilik yaptı?",
      bloklar: [
        { tip: "hikaye", ikon: "🥯", baslik: "Bu hafta neler aldın?",
          metin: "Kantinden bir simit, internetten bir telefon kılıfı, belki bir konser bileti. Hepsinde aynı şey oldu: parayı uzatırken sen teşekkür ettin, satıcı da sana teşekkür etti. Peki burada kim kime iyilik yaptı?" },
        { tip: "adimlar", baslik: "Simit alışverişi", adimlar: [
            { baslik: "Sen", metin: "20 TL verirsin; simit senin için 20 TL'den değerlidir." },
            { baslik: "Kantinci", metin: "Simidi verir; 20 TL onun için simitten değerlidir." },
            { baslik: "Sonuç", metin: "İki taraf da kazandı, o yüzden teşekkür karşılıklı." }
          ] },
        { tip: "not", metin: "Cevap: ==kimse kimseye iyilik yapmadı, ikisi de kazandı.== Alışveriş, iki taraf da kazanacağına inanmadıkça olmaz. Bunun adı *voluntary exchange* ve pazarın temelidir." }
      ]
    },
    {
      baslik: "*Market* ve gönüllü takas",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏪", terim: "Market", tr: "pazar", tanim: "Alıcılarla satıcıların mal, hizmet ya da kaynak alışverişi için buluştuğu fiziksel ya da sanal yer.", ornek: "Semt pazarı, alışveriş merkezi, Trendyol, Amazon, eBay, Facebook Marketplace." },
            { ikon: "🤝", terim: "Voluntary exchange", tr: "gönüllü takas", tanim: "İki tarafın da kazançlı çıkacağına inandığı için kendi isteğiyle yaptığı alışveriş.", ornek: "Bir doları verip pretzel alan adam; ikisi de “teşekkürler” der." }
          ] },
        { tip: "ikili", sol: { ikon: "🧺", baslik: "*Physical market*", maddeler: ["Fiziksel yer", "Semt pazarı, alışveriş merkezi"] },
          sag: { ikon: "💻", baslik: "*Virtual market*", maddeler: ["İnternet üzerinden", "Trendyol, Amazon, eBay"] },
          oyun: [
            { metin: "Cumartesi kurulan tentelerle dolu semt pazarı.", cevap: "sol", neden: "Fiziksel yer: *physical*." },
            { metin: "Telefondan sepete ürün ekleyip kargoyla almak.", cevap: "sag", neden: "Pazar internette: *virtual*." },
            { metin: "Alışveriş merkezindeki mağaza.", cevap: "sol", neden: "Alıcı ve satıcı fiziksel olarak buluşuyor." },
            { metin: "Facebook Marketplace'te ikinci el ilan.", cevap: "sag", neden: "Buluşma yeri çevrimiçi: *virtual*." }
          ] },
        { tip: "ornek", baslik: "Simit neden el değiştirir?", durum: "Kantinci simidi 20 TL'den satmak istiyor, sen 20 TL'ye almak istiyorsun. İki tarafın terazisi nasıl yatar?",
          adimlar: ["Kantinci için: 20 TL > simit. Parayı simitten çok ister.", "Senin için: simit > 20 TL. Simidi paradan çok istersin.", "Takas olunca ikisi de kazanır: + kazanç, + kazanç."],
          sonuc: "Alışveriş ==iki taraf da kazandığı için== olur. Bu yüzden teşekkür karşılıklıdır." },
        { tip: "tuzak", baslik: "Tek taraflı kazanç yok", metin: "Bir işletme müşterisini memnun etmeden kâr edemez.", yanlis: "Satıcı kazanıyorsa alıcı kaybediyordur.", dogru: "*Voluntary exchange*'te iki taraf da kazanacağına inanır; yoksa alışveriş olmaz." }
      ]
    },
    {
      baslik: "*Competition*: rekabet",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏁", terim: "Competition", tr: "rekabet", tanim: "İşletmelerin fiyat indirerek, yeni ürün çıkararak ve rakibinden iyi olmaya çalışarak müşteri için yarışması.", ornek: "Coca-Cola ile Pepsi, Uber ile Lyft, Apple ile Samsung, BİM ile ŞOK." }
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "1", baslik: "Gönüllü takas", metin: "İşletmeyi insanların istediğini üretmeye zorlar." },
            { tarih: "2", baslik: "Pontiac Aztek", metin: "Müşteriler çirkin bulup almadı; General Motors üretimi durdurdu." },
            { tarih: "3", baslik: "Rekabet", metin: "Pazarın ikinci motoru: şirketler müşteri için fiyat indirir, yeni ürün çıkarır." },
            { tarih: "4", baslik: "Bedeli", metin: "Pahalı ya da kalitesiz satan, müşterisini rakibe kaptırır." }
          ] },
        { tip: "grafik", baslik: "İki dükkân müşteri için yarışıyor", xlabel: "Zaman", ylabel: "Simit fiyatı (TL)", xmax: 4, ymax: 60,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }],
          yticks: [{ v: 40, label: "40" }, { v: 45, label: "45" }, { v: 50, label: "50" }],
          ogeler: [
            { id: "fiyat", tip: "egri", renk: 1, noktalar: [[0.5, 50], [1.5, 50], [2.5, 50], [3.5, 50]] },
            { id: "t1", tip: "yazi", x: 0.6, y: 53, metin: "Fiyat 50", gizli: true },
            { id: "t2", tip: "yazi", x: 1.7, y: 48, metin: "Rakip indirdi: 45", gizli: true },
            { id: "t3", tip: "yazi", x: 2.9, y: 43, metin: "Yine indirim: 40", gizli: true }
          ],
          durumlar: [
            { metin: "Fiyat 50 TL. Rakip yok gibi.", goster: ["t1"] },
            { metin: "Rakip dükkân müşteri için fiyatı ==45'e== indirir.", set: { fiyat: { noktalar: [[0.5, 50], [1.5, 45], [2.5, 45], [3.5, 45]] } }, gizle: ["t1"], goster: ["t2"] },
            { metin: "Yarış sürer: fiyat ==40'a== iner. Kazanan müşteridir.", set: { fiyat: { noktalar: [[0.5, 50], [1.5, 45], [2.5, 40], [3.5, 40]] } }, gizle: ["t2"], goster: ["t3"] }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Rekabette kazanan", maddeler: ["Fiyatı düşüren ya da kalitesini artıran", "Müşteriyi memnun eden"] },
          sag: { ikon: "❌", baslik: "Rekabette kaybeden", maddeler: ["Pahalı satan", "Kalitesiz ürün sunan"] },
          oyun: [
            { metin: "Kalitesini artırıp fiyatı sabit tutan dükkân.", cevap: "sol", neden: "Müşteriye daha iyisini sunuyor." },
            { metin: "Kalitesi düşük ama fiyatı yüksek dükkân.", cevap: "sag", neden: "Müşteri karşıdaki rakibe gider." },
            { metin: "Yeni bir ürün çıkarıp müşteriyi çeken şirket.", cevap: "sol", neden: "Yenilik rekabetin silahıdır." },
            { metin: "Rakip indirim yaparken fiyatını yükselten dükkân.", cevap: "sag", neden: "Kuyruktaki müşteriler karşı dükkâna yürür." }
          ] }
      ]
    },
    {
      baslik: "Talep, arz ve denge",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛍️", terim: "Demand", tr: "talep", tanim: "Alıcıların almaya istekli olduğu ve gücünün yettiği miktar.", ornek: "Fiyat düştükçe daha çok simit istenir." },
            { ikon: "🏭", terim: "Supply", tr: "arz", tanim: "Satıcıların satmaya istekli olduğu ve satabildiği miktar.", ornek: "Fiyat yükseldikçe kantinci daha çok simit getirir." },
            { ikon: "⚖️", terim: "Equilibrium price", tr: "denge fiyatı", tanim: "İstenen miktar ile sunulan miktarın eşitlendiği, alıcıyla satıcının anlaştığı fiyat.", ornek: "Simit 20 TL: 100 istenir, 100 sunulur." },
            { ikon: "🏷️", terim: "Market price", tr: "pazar fiyatı", tanim: "*Equilibrium price*'ın öbür adı; pazarda oluşan fiyat.", ornek: "Simidin pazarda oluşan fiyatı 20 TL." },
            { ikon: "🙋", terim: "Quantity demanded", tr: "talep edilen miktar", tanim: "Belirli bir fiyattan alıcıların almak istediği miktar.", ornek: "10 TL'de 160 simit." },
            { ikon: "📦", terim: "Quantity supplied", tr: "arz edilen miktar", tanim: "Belirli bir fiyattan satıcıların satışa sunduğu miktar.", ornek: "10 TL'de 60 simit." }
          ] },
        { tip: "tablo", baslik: "Simit pazarı", head: ["Fiyat", "*Quantity demanded*", "*Quantity supplied*", "Sonuç"], rows: [
            ["10 TL", "160", "60", "*Shortage*: 100"],
            ["20 TL", "100", "100", "*Equilibrium*"],
            ["30 TL", "40", "140", "*Surplus*: 100"]
          ], vurgu: 1, not: "Dengede ikisi eşit: istenen miktar = sunulan miktar." },
        { tip: "grafik", baslik: "Simit pazarında arz-talep", xlabel: "Simit (adet)", ylabel: "Fiyat (TL)", xmax: 200, ymax: 40,
          xticks: [{ v: 40, label: "40" }, { v: 100, label: "100" }, { v: 160, label: "160" }],
          yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }],
          ogeler: [
            { id: "D", tip: "cizgi", renk: 0, from: [10, 35], to: [190, 5], etiket: "Talep", gizli: true },
            { id: "S", tip: "cizgi", renk: 1, from: [40, 5], to: [160, 35], etiket: "Arz", gizli: true },
            { id: "E", tip: "nokta", x: 100, y: 20, etiket: "Denge", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "==Talep:== fiyat düştükçe alıcılar daha çok simit ister. Çizgi aşağı eğimli.", goster: ["D"] },
            { metin: "==Arz:== fiyat yükseldikçe satıcılar daha çok simit getirir. Çizgi yukarı eğimli.", goster: ["S"] },
            { metin: "Kesiştikleri nokta ==denge==: fiyat 20 TL, miktar 100.", goster: ["E"] }
          ] },
        { tip: "formul", parcalar: [{ t: "*Quantity demanded*", alt: "100" }, "=", { t: "*Quantity supplied*", alt: "100" }, "→", { t: "*Equilibrium price*", alt: "20 TL" }] },
        { tip: "tuzak", baslik: "Aynı şeyin iki adı", metin: "*Equilibrium price* ile *market price* aynı fiyattır: istenen miktar ile sunulan miktarın eşit olduğu fiyat.", yanlis: "*Market price* ile *equilibrium price* farklı kavramlardır.", dogru: "İkisi de dengede oluşan fiyatın adıdır." }
      ]
    },
    {
      baslik: "*Shortage* ve *surplus*",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🕳️", baslik: "*Shortage*", maddeler: ["İstenen > sunulan", "Fiyat dengenin altında", "Raf boşalır: “out of stock”"] },
          sag: { ikon: "📚", baslik: "*Surplus*", maddeler: ["Sunulan > istenen", "Fiyat dengenin üstünde", "Ürün rafta kalır: “SALE”"] },
          oyun: [
            { metin: "Simit 10 TL'ye indi; 160 kişi istiyor, 60 simit var.", cevap: "sol", neden: "İstenen sunulandan fazla: *shortage*." },
            { metin: "Simit 30 TL'ye çıktı; 40 kişi alıyor, 140 simit getirildi.", cevap: "sag", neden: "Sunulan istenenden fazla: *surplus*." },
            { metin: "Mağazada indirim tabelası ve dolu depo.", cevap: "sag", neden: "Satılmayan ürün birikiyor: *surplus*." },
            { metin: "Raflar boş, etiket “out of stock”.", cevap: "sol", neden: "Ürün yetmiyor: *shortage*." }
          ] },
        { tip: "grafik", baslik: "Fiyat dengeden sapınca", xlabel: "Simit (adet)", ylabel: "Fiyat (TL)", xmax: 200, ymax: 40,
          xticks: [{ v: 40, label: "40" }, { v: 60, label: "60" }, { v: 100, label: "100" }, { v: 140, label: "140" }, { v: 160, label: "160" }],
          yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }],
          ogeler: [
            { id: "D", tip: "cizgi", renk: 0, from: [10, 35], to: [190, 5], etiket: "Talep" },
            { id: "S", tip: "cizgi", renk: 1, from: [40, 5], to: [160, 35], etiket: "Arz" },
            { id: "E", tip: "nokta", x: 100, y: 20, etiket: "Denge" },
            { id: "p10", tip: "cizgi", renk: 2, kesik: true, from: [0, 10], to: [200, 10], etiket: "", gizli: true },
            { id: "sh", tip: "cizgi", renk: 2, from: [60, 10], to: [160, 10], etiket: "Eksik 100", gizli: true },
            { id: "p30", tip: "cizgi", renk: 3, kesik: true, from: [0, 30], to: [200, 30], etiket: "", gizli: true },
            { id: "su", tip: "cizgi", renk: 3, from: [40, 30], to: [140, 30], etiket: "Fazla 100", gizli: true }
          ],
          durumlar: [
            { metin: "Denge: 20 TL'de 100 istenir, 100 sunulur." },
            { metin: "Fiyat ==10 TL'ye== iner: 160 kişi ister, kantinci 60 tane getirir.", goster: ["p10"] },
            { metin: "İstenen > sunulan: ==*shortage*.== 100 kişi simitsiz kalır.", goster: ["sh"] },
            { metin: "Fiyat ==30 TL'ye== çıkar: 40 kişi alır, 140 simit gelir.", gizle: ["p10", "sh"], goster: ["p30"] },
            { metin: "Sunulan > istenen: ==*surplus*.== 100 simit elde kalır.", goster: ["su"] }
          ] },
        { tip: "ornek", baslik: "Fiyat 10 TL ve 30 TL olursa", durum: "Dengede 20 TL. Fiyat 10 TL'ye inerse ve 30 TL'ye çıkarsa ne olur?",
          adimlar: ["10 TL: *quantity demanded* = 160, *quantity supplied* = 60. Fark: 160 − 60 = 100, *shortage*.", "30 TL: *quantity demanded* = 40, *quantity supplied* = 140. Fark: 140 − 40 = 100, *surplus*.", "İyi işletmeci arzını talebe uydurur; fiyat yavaşça 20 TL'ye geri oturur."],
          sonuc: "10 TL'de 100 simit eksik, 30 TL'de 100 simit fazla." },
        { tip: "tuzak", baslik: "Hangisi hangisi?", metin: "*Shortage* fiyat dengenin altındayken, *surplus* fiyat dengenin üstündeyken görülür.", yanlis: "Fiyat yükselince *shortage* oluşur.", dogru: "Fiyat dengenin üstündeyse sunulan fazladır: *surplus*. Altındaysa istenen fazladır: *shortage*." }
      ]
    },
    {
      baslik: "*Competitive advantage*: neden seni seçsinler?",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🥇", terim: "Competitive advantage", tr: "rekabet avantajı", tanim: "Bir işletmenin rakiplerinden daha iyi yaptığı ve müşterinin onu seçmesini sağlayan şey; daha büyük pay ve daha yüksek kâr getirir.", ornek: "BİM'in düşük fiyatı, Apple'ın kalitesi." },
            { ikon: "💎", terim: "Premium price", tr: "üst fiyat", tanim: "Müşteri ürünü üstün bulduğu için ödemeye razı olduğu, ortalamanın üstündeki fiyat.", ornek: "Apple kalitesi sayesinde yüksek fiyat isteyebilir." }
          ] },
        { tip: "harita", merkez: "*Competitive advantage*'ın dört yolu", dallar: [
            { baslik: "1 · Düşük maliyet", alt: "Verimli çalış, ucuza sat: Walmart, Costco, BİM" },
            { baslik: "2 · Kalite", alt: "Üstün ürün, *premium price*: Apple" },
            { baslik: "3 · Marka ve deneyim", alt: "Ortama da para ödersin: Starbucks" },
            { baslik: "4 · Yenilik ve teknoloji", alt: "Elektrikli arabalarıyla Tesla (Model Y)" }
          ] },
        { tip: "ikili", sol: { ikon: "💰", baslik: "Maliyet yarışı", maddeler: ["Verimlilik (*efficiency*)", "Ucuza satmak", "Walmart, Costco, BİM"] },
          sag: { ikon: "✨", baslik: "Fark yaratma yarışı", maddeler: ["Kalite, marka, yenilik", "Daha yüksek fiyat istemek", "Apple, Starbucks, Tesla"] },
          oyun: [
            { metin: "Depoda toplu alım yapıp raflarda en ucuz fiyatı sunan market.", cevap: "sol", neden: "Verimlilikle düşük maliyet." },
            { metin: "Beş yıldızlı kalitesi sayesinde yüksek fiyat isteyen telefon.", cevap: "sag", neden: "Kalite, *premium price* getirir." },
            { metin: "Kahve bardağı, koltuk ve ortam için para ödediğin kafe.", cevap: "sag", neden: "Marka ve deneyim." },
            { metin: "Verimli çalışarak maliyeti düşürüp indirimli satan zincir.", cevap: "sol", neden: "Düşük maliyet stratejisi." }
          ] },
        { tip: "tuzak", baslik: "Avantaj, ürüne göre seçilir", metin: "Her işletme aynı yolu seçmez; yol ürünün türüne bağlıdır (sonraki başlık).", yanlis: "*Competitive advantage* yalnızca düşük fiyat demektir.", dogru: "Düşük maliyet, kalite, marka ve deneyim ya da yenilik: bir şeyde gerçekten iyi olmak." }
      ]
    },
    {
      baslik: "Aynı ürün mü, farklı ürün mü?",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌽", baslik: "*Identical products*", maddeler: ["Neredeyse birbirinin aynısı", "Kimin ürettiği fark etmez", "Tek silah: verimlilik ve düşük maliyet"] },
          sag: { ikon: "🍔", baslik: "*Differentiated products*", maddeler: ["Benzer ama aynı değil", "Kendine özgü özellikleri var", "Reklam, marka, kalite, fiyat, müşteri hizmeti"] },
          oyun: [
            { metin: "İki çiftçinin tarladan çıkardığı mısır.", cevap: "sol", neden: "Alıcı kimin ürettiğine bakmaz: *identical*." },
            { metin: "McDonald's ve Burger King hamburgerleri.", cevap: "sag", neden: "Benzer ama marka ve lezzet farklı: *differentiated*." },
            { metin: "Aynı boydaki iki farklı çiftliğin yumurtası.", cevap: "sol", neden: "Neredeyse aynı: *identical*." },
            { metin: "İki giyim markasının benzer tişörtleri.", cevap: "sag", neden: "Marka ve tasarımla ayrışıyor: *differentiated*." },
            { metin: "Reklamla kendini farklı gösteren fast food zinciri.", cevap: "sag", neden: "Reklam ve marka *differentiated* ürünlerin silahı." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "⚙️", baslik: "*Identical products*: tek silah", metin: "Mısırda bir çiftçi ötekinden farklı değil; yarışmanın yolu verimli çalışıp maliyeti düşürmek." },
            { ikon: "📣", baslik: "*Advertising*", metin: "Müşteriye kendini göster." },
            { ikon: "🏷️", baslik: "*Branding* ve *pricing*", metin: "Marka kimliği ve fiyat kararı." },
            { ikon: "⭐", baslik: "*Quality* ve *customer service*", metin: "Kalite ve müşteri hizmeti." }
          ] },
        { tip: "tuzak", baslik: "Yol ürüne bağlı", metin: "Soruda ürün aynıysa cevap verimlilik ve düşük maliyettir; farklıysa reklam, marka, kalite ve hizmet.", yanlis: "*Identical products* satan çiftçi reklamla rekabet eder.", dogru: "*Identical products* satan verimlilik ve düşük maliyetle yarışır." }
      ]
    },
    {
      baslik: "*Market share*: pazar payı",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🥧", terim: "Market share", tr: "pazar payı", tanim: "Bir pazardaki toplam satışın tek bir şirkete ait olan yüzdesi.", ornek: "Mahallede ayda 1 milyon TL'lik ekmek satılıyor, 250 bini senin fırınından." }
          ] },
        { tip: "formul", parcalar: [{ t: "Şirketin satışı", alt: "250.000 TL" }, "÷", { t: "Pazarın toplam satışı", alt: "1.000.000 TL" }, "×", { t: "100", alt: "yüzde olsun" }, "=", { t: "*Market share*", alt: "%25" }] },
        { tip: "ornek", baslik: "Mahalle fırınının payı", durum: "Mahallede ayda 1.000.000 TL'lik ekmek satılıyor. Senin fırının satışı 250.000 TL. Pazar payın kaç?",
          adimlar: ["Şirketin satışı = 250.000 TL.", "Pazarın toplam satışı = 1.000.000 TL.", "250.000 ÷ 1.000.000 = 0,25.", "0,25 × 100 = %25."],
          sonuc: "*Market share* = %25." },
        { tip: "sekil", fig: { type: "bar", cats: ["Apple", "Samsung", "Diğerleri"], series: [{ name: "ABD akıllı telefon payı (2025)", values: [57, 23, 20] }], ylabel: "Yüzde" }, baslik: "ABD akıllı telefon pazarı (yaklaşık)" },
        { tip: "ornek", baslik: "Satış artsa da pay düşebilir", durum: "Fırının satışı 250.000 TL'den 300.000 TL'ye çıktı ama mahalledeki toplam satış 1.000.000 TL'den 1.500.000 TL'ye çıktı. Pay ne oldu?",
          adimlar: ["Eski pay = 250.000 ÷ 1.000.000 = %25.", "Yeni pay = 300.000 ÷ 1.500.000 = %20.", "Satış arttı ama pazar daha hızlı büyüdü."],
          sonuc: "Pay %25'ten %20'ye düştü: satış artsa bile pazar daha hızlı büyüyorsa pay düşer." },
        { tip: "tuzak", baslik: "Payı büyük her zaman kazanır mı?", metin: "Payı büyük olan şirket genelde daha etkilidir ve çoğu zaman daha çok kâr eder; ama bu kesin kural değildir.", yanlis: "Pazar payı yüksek olan şirket her zaman en kârlıdır.", dogru: "Payı büyük şirket “genelde” ve “çoğu zaman” daha çok kazanır." }
      ]
    },
    {
      baslik: "Giriş engelleri",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧱", terim: "Barriers to entry", tr: "pazara giriş engelleri", tanim: "Yeni işletmelerin bir pazara girip mevcut şirketlerle yarışmasını zorlaştıran engeller.", ornek: "Telefon kârlıysa neden herkes üretmiyor? Engeller var." },
            { ikon: "💵", terim: "Startup costs", tr: "kuruluş maliyeti", tanim: "Bir işi kurmak için baştan harcanması gereken para; çok yüksekse giriş engeli olur.", ornek: "Havayolu kurmak milyarlarca dolar ister." },
            { ikon: "📜", terim: "Patent", tr: "patent", tanim: "Bir buluşu sınırlı bir süre için yasal olarak koruyan ve rakiplerin kopyalamasını engelleyen hak.", ornek: "İlaç ve teknoloji buluşları." }
          ] },
        { tip: "harita", merkez: "*Barriers to entry*", dallar: [
            { baslik: "1 · *Startup costs*", alt: "Otomobil şirketi, havayolu, telefon üretimi: milyarlarca dolar" },
            { baslik: "2 · Coğrafya", alt: "Denize sıfır otel, kayak merkezi: yerini kopyalayamazsın" },
            { baslik: "3 · Ham madde sahipliği", alt: "Petrol kuyuları, elmas madenleri" },
            { baslik: "4 · Yasal engeller", alt: "Bankacılık ve sağlıktaki sıkı kurallar; sınırlı süreli *patent*" }
          ] },
        { tip: "adimlar", baslik: "Girişimci surlara yürüyor", adimlar: [
            { baslik: "Engel 1", metin: "Kuruluş maliyeti çok yüksek: havayolu için milyarlarca dolar." },
            { baslik: "Engel 2", metin: "Coğrafya tek: sahildeki otelin yerini kopyalayamazsın." },
            { baslik: "Engel 3", metin: "Ham madde başkasının elinde: petrol, elmas." },
            { baslik: "Engel 4", metin: "Yasa ve *patent*: kurallara uy, süreli korumaya takıl." }
          ] },
        { tip: "ikili", sol: { ikon: "🚧", baslik: "Yüksek engel", maddeler: ["Yüksek kuruluş maliyeti", "Tek bir yer ya da ham madde", "Sıkı yasa ve patent"] },
          sag: { ikon: "🚪", baslik: "Düşük engel", maddeler: ["Az parayla açılabilir", "Herkes girebilir"] },
          oyun: [
            { metin: "Yeni bir havayolu kurmak milyarlarca dolar istiyor.", cevap: "sol", neden: "Yüksek *startup costs*." },
            { metin: "Bir şirketin elmas madenlerinin tamamına sahip olması.", cevap: "sol", neden: "Ham madde sahipliği yüksek engel kurar." },
            { metin: "Küçük bir mısır tarlası açıp pazara girmek.", cevap: "sag", neden: "*Perfect competition*'da engel yok gibi." },
            { metin: "Bir buluşun yıllarca yasal korumaya alınması.", cevap: "sol", neden: "*Patent* sınırlı süreli yasal engeldir." },
            { metin: "Şehirde yeni bir kafe açmak.", cevap: "sag", neden: "*Monopolistic competition*'da engel az." }
          ] },
        { tip: "tuzak", baslik: "Patent kalıcı değildir", metin: "*Patent* korumayı sınırlı bir süre için verir.", yanlis: "*Patent* buluşu sonsuza kadar korur.", dogru: "*Patent* sınırlı süreli yasal korumadır." }
      ]
    },
    {
      baslik: "Dört *market structure*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏗️", terim: "Market structure", tr: "pazar yapısı", tanim: "Bir pazarın satıcı sayısına, ürün türüne ve giriş engellerine göre aldığı biçim; dört türü vardır.", ornek: "Mısır pazarı ile elektrik dağıtımı farklı yapılardır." },
            { ikon: "🌽", terim: "Perfect competition", tr: "tam rekabet", tanim: "Çok sayıda küçük işletmenin aynı ürünü sattığı, engelin çok düşük olduğu ve kimsenin fiyata söz geçiremediği yapı.", ornek: "Mısır, yumurta." },
            { ikon: "🍽️", terim: "Monopolistic competition", tr: "monopolcü rekabet", tanim: "Çok sayıda işletmenin farklılaştırılmış ürün sattığı, engelin az olduğu ve her işletmenin fiyata biraz söz geçirebildiği yapı.", ornek: "Restoranlar, giyim markaları, kafeler." },
            { ikon: "✈️", terim: "Oligopoly", tr: "oligopol", tanim: "Birkaç büyük şirketin hâkim olduğu, giriş engelleri yüksek yapı.", ornek: "Havayolları, telefon şirketleri, otomobil üreticileri." },
            { ikon: "⚡", terim: "Monopoly", tr: "monopol", tanim: "Tek bir işletmenin bütün pazarı elinde tuttuğu, giriş engelleri çok yüksek yapı.", ornek: "Şehrin elektrik dağıtım şirketi, yerel su idaresi." }
          ] },
        { tip: "tablo", baslik: "Dört yapının karşılaştırması", head: ["Yapı", "Satıcı sayısı", "Ürün", "Giriş engeli", "Fiyata söz hakkı"], rows: [
            ["*Perfect competition*", "Çok sayıda küçük", "*Identical*", "Çok düşük", "Yok denecek kadar az"],
            ["*Monopolistic competition*", "Çok sayıda", "*Differentiated*", "Görece az", "Biraz"],
            ["*Oligopoly*", "Birkaç büyük", "Değişebilir", "Yüksek", "Daha fazla"],
            ["*Monopoly*", "Tek", "Tek satıcının ürünü", "Çok yüksek", "En fazla"]
          ], not: "Üç ölçüyle ayır: kaç satıcı var, ürün aynı mı farklı mı, giriş engeli ne kadar yüksek." },
        { tip: "adimlar", baslik: "Engel yükseldikçe", adimlar: [
            { baslik: "*Perfect competition*", metin: "Onlarca küçük satıcı, aynı ürün, engel yok gibi." },
            { baslik: "*Monopolistic competition*", metin: "Çok satıcı, farklı ürün, alçak duvar." },
            { baslik: "*Oligopoly*", metin: "Üç dört dev, yüksek duvar." },
            { baslik: "*Monopoly*", metin: "Tek dev, çok yüksek sur." }
          ] },
        { tip: "ikili", sol: { ikon: "🌽", baslik: "*Perfect competition*", maddeler: ["Çok işletme, ürün aynı", "Fiyata kimse söz geçiremez"] },
          sag: { ikon: "🍽️", baslik: "*Monopolistic competition*", maddeler: ["Çok işletme, ürün farklı", "Fiyata biraz söz geçirir"] },
          oyun: [
            { metin: "Yüzlerce çiftçinin sattığı aynı yumurta.", cevap: "sol", neden: "Aynı ürün, çok satıcı: *perfect competition*." },
            { metin: "Şehirde farklı menü ve markalı yüzlerce kafe.", cevap: "sag", neden: "Çok işletme ama ürünler farklı: *monopolistic competition*." },
            { metin: "Her biri kendi tasarımını satan giyim markaları.", cevap: "sag", neden: "Farklılaştırılmış ürün: *monopolistic competition*." },
            { metin: "Pazarda mısır satan onlarca küçük üretici.", cevap: "sol", neden: "Aynı ürün, engel yok gibi: *perfect competition*." }
          ] },
        { tip: "ikili", sol: { ikon: "✈️", baslik: "*Oligopoly*", maddeler: ["Birkaç dev şirket", "Giriş engelleri yüksek"] },
          sag: { ikon: "⚡", baslik: "*Monopoly*", maddeler: ["Tek şirket", "Giriş engelleri çok yüksek"] },
          oyun: [
            { metin: "Ülkede hizmet veren üç dört büyük havayolu.", cevap: "sol", neden: "Birkaç dev: *oligopoly*." },
            { metin: "Şehirde elektriği dağıtan tek şirket.", cevap: "sag", neden: "Tek satıcı: *monopoly*." },
            { metin: "Pazarın büyük kısmını elinde tutan birkaç telefon üreticisi.", cevap: "sol", neden: "Birkaç dev: *oligopoly*." },
            { metin: "Yerel su dağıtımını yapan tek idare.", cevap: "sag", neden: "Tek satıcı: *monopoly*." }
          ] },
        { tip: "tuzak", baslik: "İsimler birbirine benziyor", metin: "*Monopolistic competition* ile *monopoly* adları benzer ama zıt uçlara yakındır: birincisinde çok sayıda işletme vardır, ikincisinde tek.", yanlis: "*Monopolistic competition* tek şirketli bir pazardır.", dogru: "*Monopolistic competition*: çok işletme, farklı ürün. *Monopoly*: tek işletme." },
        { tip: "tuzak", baslik: "İkisinde de çok işletme var", metin: "*Perfect competition* ile *monopolistic competition*'ın ikisinde de çok işletme vardır.", yanlis: "Çok işletme varsa yapı *perfect competition*'dır.", dogru: "Ayıran şey ürün: *identical* ise *perfect competition*, *differentiated* ise *monopolistic competition*." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Market* alıcı ile satıcının buluştuğu yerdir; temeli *voluntary exchange*: iki taraf da kazanır.",
            "*Competition* işletmeyi fiyat indirmeye, yenilik yapmaya zorlar; pahalı ya da kalitesiz satan müşterisini kaybeder.",
            "Fiyatı *demand* ve *supply* belirler; *equilibrium price* = *market price* (simitte 20 TL, 100 adet).",
            "Fiyat dengenin altındaysa *shortage* (istenen > sunulan), üstündeyse *surplus* (sunulan > istenen).",
            "*Competitive advantage* yolları: düşük maliyet, kalite, marka ve deneyim, yenilik. *Identical products* verimlilikle, *differentiated products* reklam ve markayla yarışır.",
            "*Market share* = şirketin satışı ÷ pazarın toplam satışı × 100 (250.000 ÷ 1.000.000 = %25).",
            "*Barriers to entry*: *startup costs*, coğrafya, ham madde sahipliği, yasal engeller (*patent* süreli).",
            "Dört *market structure*: *perfect competition* → *monopolistic competition* → *oligopoly* → *monopoly*.",
            "Üç ölçüyle ayır: kaç satıcı, ürün aynı mı farklı mı, giriş engeli ne kadar yüksek.",
            "İş kuracaksan pazarı anla, engelleri belirle, rakipleri tart ve *market share* kapmanın yolunu bul."
          ] }
      ]
    }
  ]
};
