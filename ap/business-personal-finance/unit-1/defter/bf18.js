/* Kitora not defteri · bf18 · 1.8 Tedarik Zincirleri
   Kaynak: ap-videolar/src/episodes/bf18 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf18",
  amac: "Bu konu tedarik zincirini (*supply chain*) anlatıyor: bir ürünün müşteriye ulaşana kadar geçtiği, görünmeyen işletmeler ağı. Zincirin halkalarını, üretim biçimlerini, stok ve lojistiği, küreselleşmenin fırsat ve riskini öğreneceksin.",
  bolumler: [
    {
      baslik: "*Supply chain*: tedarik zinciri",
      kisa: "Hiçbir işletme her şeyi tek başına yapmaz; ürünün arkasında bir ağ vardır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔗", terim: "Supply chain", tr: "tedarik zinciri", tanim: "Bir ürünü ya da hizmeti üretip son müşteriye ulaştıran işletmelerin, insanların, faaliyetlerin ve kaynakların oluşturduğu ağ.", ornek: "50 liralık tostu sıfırdan yapsan buğday, inek, demir ve santral gerekir: yıllar, milyonlarca lira." }
          ] },
        { tip: "ikili", sol: { ikon: "✂️", baslik: "Kısa zincir", maddeler: ["Berber: makas, tıraş makinesi, koltuk", "Az halka"] },
          sag: { ikon: "📱", baslik: "Uzun zincir", maddeler: ["Telefon: yüzlerce parça", "Tasarlanır, üretilir, birleştirilir, paketlenir, taşınır"] },
          oyun: [
            { metin: "Berberin dükkânı için makas, tıraş makinesi ve koltuk almak.", cevap: "sol", neden: "Az halkalı basit zincir." },
            { metin: "Telefondaki yüzlerce parçanın dünyanın çeşitli yerlerinde üretilmesi.", cevap: "sag", neden: "Çok halkalı karmaşık zincir." },
            { metin: "Mahalle fırınının un alıp ekmek satması.", cevap: "sol", neden: "Kısa ve basit zincir." },
            { metin: "Bir arabanın lastiğinin, camının ve çipinin ayrı firmalardan gelmesi.", cevap: "sag", neden: "Çok sayıda tedarikçi." }
          ] },
        { tip: "tuzak", baslik: "Hizmetlerin de zinciri var", metin: "Tüketici yalnızca son ürünü görür; arkadaki işletmeleri görmez. Yalnızca elle tutulan ürünlerin değil, hizmetlerin de *supply chain*'i vardır.", yanlis: "*Supply chain* yalnızca mal üretenler içindir.", dogru: "Hizmetler de kaynaklar, insanlar ve işletmelerden oluşan bir ağa dayanır." }
      ]
    },
    {
      baslik: "Zincirin halkaları",
      kisa: "Ham maddeden tüketiciye halkalar sırayla ilerler; tedarikçi üretici değildir.",
      bloklar: [
        { tip: "adimlar", baslik: "Ham maddeden tüketiciye", adimlar: [
            { baslik: "1 · *Raw materials*", metin: "Ham maddeler: pamuk, kereste, petrol, buğday; piller için lityum." },
            { baslik: "2 · *Suppliers*", metin: "Ham madde ya da parçayı üreticiye satan tedarikçiler." },
            { baslik: "3 · *Manufacturer*", metin: "Üretici: ham madde ve parçaları bitmiş ürüne çevirir." },
            { baslik: "4 · *Distributor*", metin: "Bitmiş ürünü toptancıya, mağazaya ya da depoya taşır." },
            { baslik: "5 · *Wholesaler*", metin: "Toplu alıp perakendecilere satan toptancı." },
            { baslik: "6 · *Retailer*", metin: "Doğrudan son tüketiciye satan perakendeci." },
            { baslik: "Son · *Consumer*", metin: "Ürünü kullanan tüketici." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🌾", terim: "Raw materials", tr: "ham maddeler", tanim: "Ürün yapmak için kullanılan temel doğal kaynaklar.", ornek: "Kereste, petrol, pamuk, metaller, tarım ürünleri; lityum, bakır." },
            { ikon: "🚚", terim: "Suppliers", tr: "tedarikçiler", tanim: "Üreticiye ham madde ya da ara parça sağlayan işletmeler.", ornek: "Lastik, cam ve çip ayrı tedarikçilerden." },
            { ikon: "⚙️", terim: "Components", tr: "bileşenler", tanim: "Bitmiş ürünün içine giren, tek başına satışa hazır olmayan ara parçalar.", ornek: "Lastik, cam, çip." },
            { ikon: "🏭", terim: "Manufacturer", tr: "üretici", tanim: "Ham maddeleri ve parçaları bitmiş ürüne dönüştüren işletme.", ornek: "Ford araba, Ülker bisküvi." },
            { ikon: "🎁", terim: "Finished goods", tr: "bitmiş ürün", tanim: "Üretimi tamamlanmış, satışa hazır ürünler.", ornek: "Fabrikadan çıkan otomobil." }
          ] },
        { tip: "tuzak", baslik: "Supplier ≠ manufacturer", metin: "*Supplier* ham madde ya da ara parça sağlar; *manufacturer* bunları bitmiş ürüne çevirir. Soruda “bu işletme kimden alıyor, kime satıyor?” diye bak; halka oradan çıkar.", yanlis: "Lastiği sağlayan firma otomobil üreticisidir.", dogru: "Lastiği sağlayan *supplier*; arabayı birleştiren *manufacturer*." }
      ]
    },
    {
      baslik: "*Distributor*, *wholesaler*, *retailer*",
      kisa: "Distributor taşır, wholesaler toplu alıp satar, retailer tüketiciye satar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚛", terim: "Distributor", tr: "dağıtıcı", tanim: "Bitmiş ürünü üreticiden toptancılara, perakendecilere ya da bölge depolarına taşıyan aracı işletme.", ornek: "Ürünü ülke çapında taşıyan aracı." },
            { ikon: "📦", terim: "Wholesaler", tr: "toptancı", tanim: "Ürünü toplu, bu yüzden daha ucuza alıp perakendecilere satan işletme.", ornek: "Bisküviyi 8 TL'ye alıp bakkala 10 TL'ye verir." },
            { ikon: "🏪", terim: "Retailer", tr: "perakendeci", tanim: "Bitmiş ürünü doğrudan son tüketiciye satan işletme; zincirin son halkası.", ornek: "Bakkal, Migros, Walmart." }
          ] },
        { tip: "grafik", baslik: "Bisküvinin fiyatı halka halka (TL)", xlabel: "Halka", ylabel: "TL", xmax: 4, ymax: 15,
          xticks: [{ v: 0.8, label: "Toptancı alış" }, { v: 2, label: "Bakkal alış" }, { v: 3.2, label: "Tüketici" }],
          yticks: [{ v: 8, label: "8" }, { v: 10, label: "10" }, { v: 13, label: "13" }],
          ogeler: [
            { id: "a", tip: "alan", renk: 1, noktalar: [[0.4, 0], [1.2, 0], [1.2, 0], [0.4, 0]] },
            { id: "b", tip: "alan", renk: 2, noktalar: [[1.6, 0], [2.4, 0], [2.4, 0], [1.6, 0]] },
            { id: "c", tip: "alan", renk: 0, noktalar: [[2.8, 0], [3.6, 0], [3.6, 0], [2.8, 0]] },
            { id: "at", tip: "yazi", x: 0.8, y: 9, metin: "8", gizli: true },
            { id: "bt", tip: "yazi", x: 2, y: 11, metin: "10", gizli: true },
            { id: "ct", tip: "yazi", x: 3.2, y: 14, metin: "13", gizli: true }
          ],
          durumlar: [
            { metin: "Toptancı bisküviyi ==8 TL==’ye alır.", set: { a: { noktalar: [[0.4, 0], [1.2, 0], [1.2, 8], [0.4, 8]] } }, goster: ["at"] },
            { metin: "Bakkala ==10 TL==’ye satar (payı 10 − 8 = 2 TL).", set: { b: { noktalar: [[1.6, 0], [2.4, 0], [2.4, 10], [1.6, 10]] } }, goster: ["bt"] },
            { metin: "Bakkal sana ==13 TL==’ye satar (payı 13 − 10 = 3 TL). Toplam artış 5 TL.", set: { c: { noktalar: [[2.8, 0], [3.6, 0], [3.6, 13], [2.8, 13]] } }, goster: ["ct"] }
          ] },
        { tip: "ikili", sol: { ikon: "📦", baslik: "*Wholesaler*", maddeler: ["Toplu ve ucuza alır", "Perakendecilere ve mağazalara satar", "Son tüketiciye satmaz"] },
          sag: { ikon: "🏪", baslik: "*Retailer*", maddeler: ["Doğrudan son tüketiciye satar", "Zincirin son halkası", "Bakkal, Migros, Walmart"] },
          oyun: [
            { metin: "Fabrikadan 5 bin koli makarnayı toplu alıp bakkal ve marketlere satan firma.", cevap: "sol", neden: "Toplu alıp mağazalara satıyor: *wholesaler*." },
            { metin: "Mahalledeki bakkal.", cevap: "sag", neden: "Doğrudan tüketiciye satar: *retailer*." },
            { metin: "Migros.", cevap: "sag", neden: "Son halka: *retailer*." },
            { metin: "Bisküviyi 8 TL'ye alıp bakkala 10 TL'ye veren işletme.", cevap: "sol", neden: "Toplu alıp perakendeciye satar: *wholesaler*." },
            { metin: "Costco, bir işletmeye toplu satış yaptığında.", cevap: "sol", neden: "Müşterisine göre hem *wholesaler* hem *retailer* olabilir." }
          ] },
        { tip: "tuzak", baslik: "Üçlüyü karıştırma", metin: "*Distributor* taşır; *wholesaler* toplu alıp mağazalara satar; *retailer* doğrudan tüketiciye satar. Son tüketiciye satış varsa cevap *retailer*'dır. Aynı işletme iki rol oynayabilir (Costco).", yanlis: "Her zincirde mutlaka *wholesaler* vardır.", dogru: "Her zincirde bütün halkalar bulunmaz; bazı sektörlerde toptancı yoktur. Kimden alıyor, kime satıyor diye bak." }
      ]
    },
    {
      baslik: "Üretim biçimleri: usta işi mi, seri mi?",
      kisa: "Zanaat üretimi az ve pahalı, seri üretim çok ve ucuzdur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧵", terim: "Artisan production", tr: "zanaat üretimi", tanim: "Kişiye özel üretime ve usta emeğine dayanan üretim biçimi; kalite yüksek, ama birim maliyet yüksek ve üretim miktarı düşük.", ornek: "Terzi, mahalle fırını, elde gitar yapan usta, ısmarlama mobilya." },
            { ikon: "🏭", terim: "Mass production", tr: "seri üretim", tanim: "Teknoloji, makine ve montaj hatlarıyla çok sayıda ürünü düşük maliyetle üretmek.", ornek: "Ford Model T." },
            { ikon: "🔧", terim: "Assembly line", tr: "montaj hattı", tanim: "Ürünün istasyondan istasyona ilerlediği, her adımda bir parçanın eklendiği hat.", ornek: "İşçilerin önünden akan şasi." }
          ] },
        { tip: "ikili", sol: { ikon: "🧵", baslik: "*Artisan production*", maddeler: ["Kişiye özel, usta işi", "Kalite yüksek", "Üretim az, birim maliyet yüksek"] },
          sag: { ikon: "🏭", baslik: "*Mass production*", maddeler: ["Standart ürün, makine ve hat", "Üretim çok", "Birim maliyet düşük"] },
          oyun: [
            { metin: "Ölçünü alıp dikilen takım elbise.", cevap: "sol", neden: "Kişiye özel: *artisan*." },
            { metin: "Bir günde milyonlarca bisküvi üreten fabrika.", cevap: "sag", neden: "Çok sayıda, düşük maliyetli: *mass*." },
            { metin: "Elde gitar yapan usta.", cevap: "sol", neden: "Usta emeği, az üretim." },
            { metin: "Montaj hattından saatte çok sayıda araba çıkması.", cevap: "sag", neden: "*Assembly line* ile seri üretim." },
            { metin: "Etsy'deki elde yapılmış ürünler.", cevap: "sol", neden: "Zanaat işi." }
          ] },
        { tip: "ornek", baslik: "Ford Model T: montaj süresi", durum: "Ford arabayı işçilerin önünden akan bir hatta koyunca montaj süresi 12 saatten yaklaşık 1,5 saate (90 dakikaya) indi. Süre kaç kat kısaldı?",
          adimlar: ["12 saat = 720 dakika.", "Yeni süre = 90 dakika.", "720 ÷ 90 = 8 kat daha hızlı.", "Süre kısalınca maliyet ve fiyat da düştü."],
          sonuc: "Montaj 8 kat hızlandı. Maliyet düşünce fiyat da düştü ve arabayı milyonlar alabildi." },
        { tip: "tuzak", baslik: "Maliyet mi, miktar mı?", metin: "Soru genelde “hangisinin maliyeti, hangisinin miktarı” diye gelir.", yanlis: "*Mass production* birim maliyeti yükseltir.", dogru: "*Artisan*: birim maliyet yüksek, üretim az. *Mass*: birim maliyet düşük, üretim çok." }
      ]
    },
    {
      baslik: "*Logistics*: halkaları bağlayan iş",
      kisa: "Lojistik, malın üreticiden müşteriye akışını planlamak ve yönetmektir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗺️", terim: "Logistics", tr: "lojistik", tanim: "Malların, hizmetlerin ve bilginin üreticiden müşteriye nasıl akacağının planlanması ve yönetilmesi.", ornek: "Siparişin depodan çıkıp kamyonla, kuryeyle kapına gelmesi; aksarsa raflar boşalır (Mart 2020)." }
          ] },
        { tip: "harita", merkez: "*Logistics*'in dört parçası", dallar: [
            { baslik: "Taşıma", alt: "*Transportation*: kamyon, kurye" },
            { baslik: "Depolama", alt: "*Warehousing*: depo" },
            { baslik: "Zamanlama", alt: "*Scheduling*: ne zaman, hangi sırayla" },
            { baslik: "Teslimat", alt: "*Delivery*: son müşteriye ulaştırma" }
          ] },
        { tip: "tuzak", baslik: "Lojistik = kargo mu?", metin: "*Logistics* planlama ve yönetimdir; taşıma, depolama, zamanlama ve teslimatın dördünü birden kapsar.", yanlis: "*Logistics* yalnızca ürünü kargoyla taşımaktır.", dogru: "*Logistics* taşıma, depolama, zamanlama ve teslimatı planlayıp yönetmektir." }
      ]
    },
    {
      baslik: "*Inventory* ve *stockout*",
      kisa: "Fazla stok masraf, az stok satış kaybı getirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📚", terim: "Inventory", tr: "stok", tanim: "İşletmenin satmak ya da üretimde kullanmak için elinde tuttuğu mal stoku. Yalnızca satılacak mal değil, üretimde kullanılacak mal da sayılır.", ornek: "Kantinde 100 tostluk ekmek." },
            { ikon: "🕳️", terim: "Stockout", tr: "stok tükenmesi", tanim: "Stokun, işletmenin ya da müşterilerin ihtiyacını karşılamaya yetmediği durum.", ornek: "Öğlen 130 kişi geldi, 100 tost var." }
          ] },
        { tip: "grafik", baslik: "Stok ve talep (tost)", xlabel: "Kalem", ylabel: "Tost", xmax: 4, ymax: 150,
          yticks: [{ v: 100, label: "100" }, { v: 130, label: "130" }],
          ogeler: [
            { id: "s", tip: "alan", renk: 1, noktalar: [[0.5, 0], [1.5, 0], [1.5, 0], [0.5, 0]] },
            { id: "t", tip: "alan", renk: 0, noktalar: [[2.3, 0], [3.3, 0], [3.3, 0], [2.3, 0]] },
            { id: "st", tip: "yazi", x: 1, y: 108, metin: "Stok 100", gizli: true },
            { id: "tt", tip: "yazi", x: 2.8, y: 138, metin: "Talep 130", gizli: true },
            { id: "ok", tip: "ok", from: [1.9, 100], to: [1.9, 130], gizli: true },
            { id: "kt", tip: "yazi", x: 1.2, y: 144, metin: "30 kişi tostsuz: 1.500 TL kayıp", gizli: true }
          ],
          durumlar: [
            { metin: "Kantin ==100 tostluk== ekmek aldı.", set: { s: { noktalar: [[0.5, 0], [1.5, 0], [1.5, 100], [0.5, 100]] } }, goster: ["st"] },
            { metin: "Öğlen ==130 kişi== geldi.", set: { t: { noktalar: [[2.3, 0], [3.3, 0], [3.3, 130], [2.3, 130]] } }, goster: ["tt"] },
            { metin: "Aradaki ==30 tost== (130 − 100) eksik: tost 50 TL, 30 × 50 = 1.500 TL’lik satış kaçtı.", goster: ["ok", "kt"] }
          ] },
        { tip: "ikili", sol: { ikon: "📈", baslik: "Fazla stok", maddeler: ["Depo masrafı", "Bayatlayan mal"] },
          sag: { ikon: "📉", baslik: "Az stok", maddeler: ["*Stockout*", "Satış kaybı"] },
          oyun: [
            { metin: "Depoda aylarca satılmayan, bayatlayan koliler.", cevap: "sol", neden: "Fazla stok: depo masrafı ve bayatlama." },
            { metin: "Boş market rafları ve “out of stock” etiketleri.", cevap: "sag", neden: "Stok talebe yetmedi." },
            { metin: "Depo kirası ödemek için sürekli fazladan mal stoklamak.", cevap: "sol", neden: "Fazla stok pahalıdır." },
            { metin: "Öğlen gelen 30 kişinin eli boş dönmesi.", cevap: "sag", neden: "*Stockout* satış kaybı demektir." }
          ] },
        { tip: "tuzak", baslik: "İkilemin iki yüzü", metin: "Fazla stok depolama masrafı getirir; az stok *stockout*'a yani satış kaybına yol açar.", yanlis: "Ne kadar çok stok tutarsan o kadar iyi.", dogru: "Çok stok = depo masrafı; az stok = *stockout*. İkisinin dengesi gerekir." }
      ]
    },
    {
      baslik: "*Scaling operations*: büyürken bozulma",
      kisa: "İyi ölçekleme, büyürken verimliliği ve kaliteyi korumaktır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Scaling operations", tr: "operasyonları ölçeklemek", tanim: "İşletmenin üretim ve teslimat kapasitesini, verimliliği koruyarak ya da artırarak büyütmesi.", ornek: "Evde günde 10 kurabiye yapan girişimci, 10 bin siparişe yetişmeye çalışır." }
          ] },
        { tip: "adimlar", baslik: "Kurabiyeci büyüyor", adimlar: [
            { baslik: "Ev", metin: "Evde günde 10 kurabiye, Instagram'dan satış." },
            { baslik: "Büyüme", metin: "Sipariş 100'e, sonra 10 bine çıktı." },
            { baslik: "İhtiyaç", metin: "Büyük fırın, çalışan, depo, kargo anlaşması." },
            { baslik: "Zor kısım", metin: "Büyürken kaliteyi ve birim maliyeti bozmamak." }
          ] },
        { tip: "tuzak", baslik: "Büyümek = iyi ölçeklemek mi?", metin: "Tanımın ikinci yarısı önemli: verimlilik korunmalı ya da artmalı. Üretim artarken birim maliyet yükseliyor ya da kalite düşüyorsa iyi ölçeklenme yoktur.", yanlis: "*Scaling operations* yalnızca daha çok üretmektir.", dogru: "Daha çok üretirken verimliliği korumak ya da artırmaktır." }
      ]
    },
    {
      baslik: "*Globalization*: dünya bağlandı",
      kisa: "Küreselleşme fırsat da getirir, uzaktaki sorunu yakına da taşır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌍", terim: "Globalization", tr: "küreselleşme", tanim: "Ülkelerin ticaret, teknoloji, iletişim ve mal, hizmet, insan, para hareketleriyle birbirine giderek daha çok bağlanması.", ornek: "Brezilya'da kuraklık, Vietnam'da sel: ABD'de kahve bir yılda ~%20 zamlandı; 10 dolarlık kahve ≈ 12 dolar." },
            { ikon: "🌐", terim: "Global supply chain", tr: "küresel tedarik zinciri", tanim: "Halkaları birden çok ülkeye yayılmış tedarik zinciri.", ornek: "Telefonunun parçaları onlarca ülkeden gelir." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Küreselleşmenin avantajı", maddeler: ["Yeni kaynaklar", "Yeni müşteriler"] },
          sag: { ikon: "⚠️", baslik: "Küreselleşmenin riski", maddeler: ["Uzaktaki sorun seni de vurur", "Hava, afet, gümrük vergisi, salgın"] },
          oyun: [
            { metin: "Başka ülkedeki bir tedarikçiden daha ucuz ham madde bulmak.", cevap: "sol", neden: "Yeni kaynak." },
            { metin: "Brezilya'da kuraklık ve Vietnam'da sel yüzünden kahve hasadının zarar görmesi.", cevap: "sag", neden: "Uzaktaki olay seni vurdu." },
            { metin: "Ürünü başka bir ülkenin müşterilerine satmak.", cevap: "sol", neden: "Yeni müşteri." },
            { metin: "Bir ülkedeki gümrük vergisi yüzünden parça fiyatının artması.", cevap: "sag", neden: "Dünyanın öbür ucundaki karar sorununa dönüştü." }
          ] },
        { tip: "tuzak", baslik: "İki yönlü", metin: "Kahvedeki yüzde 20 civarı artış 2025'e ait ABD verisidir. Büyük çıkarım: ==tedarik zincirini ne kadar iyi anlar ve yönetirsen o kadar çok müşteriye ulaşır, o kadar çok kâr edersin.==", yanlis: "*Globalization* yalnızca fırsat demektir.", dogru: "*Globalization* yeni kaynaklar ve müşteriler getirir; ama uzaktaki bir olayı senin sorunun da yapar. Hem fırsatı hem riski büyütür." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Supply chain*: ürünü üretip son müşteriye ulaştıran bütün işletmeler, insanlar ve kaynaklar. Hiçbir işletme her şeyi tek başına yapmaz.",
            "Sıra: *raw materials* → *suppliers* → *manufacturer* → *distributor* → *wholesaler* → *retailer* → tüketici. Her zincirde bütün halkalar olmaz.",
            "*Supplier* ham madde/parça (*components*) sağlar; *manufacturer* bitmiş ürüne (*finished goods*) çevirir.",
            "*Distributor* taşır; *wholesaler* toplu alıp mağazalara satar (8 → 10 TL); *retailer* tüketiciye satar (13 TL).",
            "*Artisan production*: kişiye özel, yüksek kalite, az üretim, yüksek birim maliyet. *Mass production*: montaj hattı, çok üretim, düşük birim maliyet (Model T: 12 saat → ~1,5 saat).",
            "*Logistics* planlama ve yönetimdir: taşıma, depolama, zamanlama, teslimat.",
            "*Inventory* fazla olursa depo masrafı, az olursa *stockout* (100 tost, 130 kişi, 1.500 TL kayıp).",
            "*Scaling operations*: kapasiteyi verimliliği koruyarak büyütmek.",
            "*Globalization* yeni kaynak ve müşteri getirir ama uzaktaki sorunu da yakına taşır (kahve ~%20 zam)."
          ] }
      ]
    }
  ]
};
