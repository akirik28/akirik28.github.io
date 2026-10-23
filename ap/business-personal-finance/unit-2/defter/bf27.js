/* Kitpath not defteri · bf27 · 2.7 Tutundurma
   Kaynak: ap-videolar/src/episodes/bf27 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf27",
  amac: "Bu konu *promotion*'ı, yani müşteriyle kurulan bütün iletişimi anlatıyor; reklam bunun yalnızca bir parçası. Beş tutundurma aracını, satış hunisini, dijital pazarlamayı ve reklamın başarısını ölçen oranları öğreneceksin.",
  bolumler: [
    {
      baslik: "*Promotion* ve *marketing campaign*",
      kisa: "Tutundurma müşteriyle bütün iletişimdir; reklam yalnızca bir parçasıdır.",
      bloklar: [
        { tip: "hikaye", ikon: "🏈", baslik: "8 milyon dolarlık 30 saniye",
          metin: "Super Bowl maçında 30 saniyelik reklam yaklaşık 8 milyon dolar (videoda \"7 ila 10 milyon\" geçiyor). Kimse o reklamı görüp hemen araba ya da sigorta almaya koşmaz. Amaç anında satmak değil; ==akılda kalmak ve güven kazanmak== (*brand awareness*), reklam da büyük bir stratejinin parçası." },
        { tip: "kavramlar", kartlar: [
            { ikon: "📣", terim: "Promotion", tr: "tutundurma", tanim: "Dört P'nin dördüncüsü: bir işletmenin ürünleri ve markası hakkında müşteriyle kurduğu bütün iletişim yolları. Hedef: ==doğru mesaj, doğru kişiye, doğru zamanda==.", ornek: "Instagram'da reklam vermekten yerel spor takımına sponsor olmaya kadar her şey." },
            { ikon: "🎯", terim: "Marketing campaign", tr: "pazarlama kampanyası", tanim: "Bir ürünü tanıtmak için bir ya da birden çok tutundurma aracını kullanan, belli bir hedefi olan planlı ve uyumlu çalışma.", ornek: "Trendyol'un kasım indirimleri: televizyon, bildirim, e-posta; hepsi aynı şeyi söyler." },
            { ikon: "🎛️", terim: "Promotional mix", tr: "tutundurma karması", tanim: "İşletmenin müşteriyle iletişim kurarken kullandığı tutundurma araçlarının bileşimi (beş araç).", ornek: "Reklam + e-posta + indirim + sponsorluk." }
          ] },
        { tip: "tuzak", baslik: "Promotion = advertising? Kampanya = tek e-posta?", metin: "Advertising beş araçtan yalnızca biri; kampanyanın anahtar sözcüğü \"stratejik\"tir.", yanlis: "*Promotion* demek reklam yapmak demektir; tek bir e-posta göndermek bir *marketing campaign*'dir.", dogru: "*Promotion* müşteriyle bütün iletişimdir; reklamın amacı da çoğu zaman anında satış değil, *brand awareness* ve güvendir. Kampanyada birlikte çalışan parçalar, belli bir hedef (satışı artırmak, yeni ürün çıkarmak, marka algısını değiştirmek) ve tutarlı bir mesaj gerekir." }
      ]
    },
    {
      baslik: "Beş araç: reklam ve doğrudan pazarlama",
      kisa: "*Media advertising* aynı mesajı geniş kitleye, *direct marketing* seçilmiş kişilere verir.",
      bloklar: [
        { tip: "tablo", baslik: "Bilmen gereken beş araç", head: ["Araç", "Kime?", "Amaç", "Örnek"], rows: [
            ["*Media advertising*", "Geniş kitle", "*Brand awareness*", "Coca-Cola TV reklamı"],
            ["*Personal selling*", "Tek müşteri, birebir", "Satış, soruları yanıtlama", "Araba galerisi"],
            ["*Sales promotion*", "Alıcılar", "Hemen satın aldırma", "Kupon, bir alana bir bedava"],
            ["*Direct marketing*", "Seçilmiş kişiler", "Hedefli satış", "Eski müşterilere e-posta"],
            ["*Public relations*", "Kamuoyu", "İmaj ve güven", "Okul takımına forma sponsorluğu"]
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "📺", terim: "Media advertising", tr: "medya reklamcılığı", tanim: "Televizyon, radyo, reklam panosu, internet sitesi ve sosyal medya gibi kitle iletişim araçlarıyla aynı mesajı geniş bir kitleye ulaştırmak.", ornek: "Coca-Cola'nın televizyon reklamı; State Farm ve Progressive sigorta reklamları." },
            { ikon: "🏷️", terim: "Brand awareness", tr: "marka bilinirliği", tanim: "Markanın tanınması, bilinir olması; çoğu reklamın asıl amacı (hemen satış değil).", ornek: "Reklamı gören birinin markayı tanıması." },
            { ikon: "✉️", terim: "Direct marketing", tr: "doğrudan pazarlama", tanim: "Hedeflenmiş bir mesajı belirli müşterilere doğrudan iletmek: e-posta, kısa mesaj, broşür, el ilanı.", ornek: "Pizzacının yalnızca yakındaki apartmanlara broşür bırakması." }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "📺", baslik: "*Media advertising*", maddeler: ["AYNI mesaj, GENİŞ kitleye", "TV, radyo, afiş, sosyal medya", "Amaç çoğu zaman *brand awareness*"] },
          sag: { ikon: "✉️", baslik: "*Direct marketing*", maddeler: ["Mesaj SEÇİLMİŞ kişilere", "E-posta, kısa mesaj, broşür, el ilanı", "Hedefli"] },
          oyun: [
            { metin: "Coca-Cola televizyonda herkese aynı reklamı gösteriyor.", cevap: "sol", neden: "Geniş kitle, aynı mesaj: *media advertising*." },
            { metin: "Pizzacı yalnızca yakındaki apartmanlara broşür bırakıyor.", cevap: "sag", neden: "Seçilmiş kişilere doğrudan: *direct marketing*." },
            { metin: "Mağaza eski müşterilerine yeni ürün e-postası gönderiyor.", cevap: "sag", neden: "Belirli müşteriler: *direct marketing*." },
            { metin: "Şehir merkezinde dev bir reklam panosu.", cevap: "sol", neden: "Herkes görür: *media advertising*." }
          ] }
      ]
    },
    {
      baslik: "*Personal selling*: birebir satış",
      kisa: "*Personal selling*, alım ne kadar önemliyse o kadar yararlıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🤝", terim: "Personal selling", tr: "birebir satış", tanim: "Satış elemanı ile olası müşteri arasındaki birebir, doğrudan görüşme; ürün anlatılır, gösterilir, sorular yanıtlanır.", ornek: "Araba galerisinde danışmanla konuşup test sürüşü yapmak." },
            { ikon: "🎙️", terim: "Sales pitch", tr: "satış konuşması", tanim: "Ürünün sunduğu değeri anlatan ve müşteriyi almaya ikna etmeye çalışan kısa sunum.", ornek: "ShamWow tanıtımındaki satıcı konuşması." },
            { ikon: "🚗", terim: "Consequential purchase", tr: "önemli alım", tanim: "Pahalı, riskli, üzerine düşünülen alım; müşteri karar vermeden önce daha çok bilgi ister.", ornek: "Araba." },
            { ikon: "🍬", terim: "Routine purchase", tr: "rutin alım", tanim: "Ucuz, riski düşük, alışkanlıkla yapılan alım.", ornek: "Sakız: kimse sana sakız sunumu yapmaz." }
          ] },
        { tip: "ikili", sol: { ikon: "🚗", baslik: "*Consequential purchase*", maddeler: ["Pahalı ve riskli", "Daha çok bilgi isterim", "*Personal selling* çok yararlı"] },
          sag: { ikon: "🍬", baslik: "*Routine purchase*", maddeler: ["Ucuz ve risksiz", "Alışkanlıkla alırım", "*Personal selling* gereksiz: her ürün için satış elemanı şart değil"] },
          oyun: [
            { metin: "Araba almak.", cevap: "sol", neden: "Pahalı ve riskli: *consequential*." },
            { metin: "Kasada sakız almak.", cevap: "sag", neden: "Ucuz ve risksiz: *routine*." },
            { metin: "Ev almak için kredi çekmek.", cevap: "sol", neden: "Çok pahalı ve düşünülen karar: *consequential*." },
            { metin: "Her hafta aynı markanın diş macununu almak.", cevap: "sag", neden: "Alışkanlık alımı: *routine*." }
          ] }
      ]
    },
    {
      baslik: "*Sales promotion*: hemen aldıran teşvik",
      kisa: "*Sales promotion* satışı hızla artırır ama marka bağlılığı kurmaz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎫", terim: "Sales promotion", tr: "satış teşviki", tanim: "Müşteriyi hemen satın almaya yönelten kısa süreli teşvik: indirim, kupon, bir alana bir bedava, süreli fırsat.", ornek: "\"Bir alana bir bedava\", bu haftaya özel %80 indirim." },
            { ikon: "💵", terim: "Rebate", tr: "para iadesi", tanim: "Alışverişten sonra paranın bir kısmının müşteriye geri ödenmesi; bir *sales promotion* türü.", ornek: "Ürünü alırsın, sonra posta ile 200 TL iade alırsın." },
            { ikon: "💞", terim: "Brand loyalty", tr: "marka bağlılığı", tanim: "Müşterinin markaya bağlılığı, tekrar tekrar aynı markayı seçmesi. *Sales promotion* bunu kurmak için tasarlanmamıştır.", ornek: "Fiyat ne olursa olsun aynı sporcu ayakkabısı markasını almak." }
          ] },
        { tip: "grafik", baslik: "İndirim satışı artırır ama bağlılığı değil", xlabel: "Zaman", ylabel: "", xmax: 8, ymax: 10, xticks: [], yticks: [],
          ogeler: [
            { id: "sat", tip: "egri", renk: 1, noktalar: [[1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3]], etiket: "Satış" },
            { id: "bag", tip: "egri", renk: 2, noktalar: [[1, 1.5], [2, 1.5], [3, 1.5], [4, 1.5], [5, 1.5], [6, 1.5], [7, 1.5]], etiket: "Marka bağlılığı" }
          ],
          durumlar: [
            { metin: "Normal günlerde satış ve marka bağlılığı sabit." },
            { metin: "==%80 indirim== haftası: satış hızla fırlar.", set: { sat: { noktalar: [[1, 3], [2, 3], [3, 8.5], [4, 8.5], [5, 3.5], [6, 3], [7, 3]] } } },
            { metin: "İndirim bitince satış eski seviyesine döner; ==*brand loyalty*== artmadı.", set: { sat: { noktalar: [[1, 3], [2, 3], [3, 8.5], [4, 8.5], [5, 3.2], [6, 3], [7, 3]] } } }
          ] },
        { tip: "tuzak", baslik: "İndirimi seven, markayı sevmez", metin: "Ürünü %80 indirimde diye alan müşteri markayı değil, indirimi seviyordur.", yanlis: "*Sales promotion* uzun vadeli *brand loyalty* kurar.", dogru: "*Sales promotion* kısa vadelidir: satışı hızla artırır ama bağlılık kurmak için tasarlanmamıştır." }
      ]
    },
    {
      baslik: "*Public relations* ve doğru araç karışımı",
      kisa: "*PR* imaj ve güven kurar; *sales promotion* hemen aldırır; araçlar çakışabilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏅", terim: "Public relations (PR)", tr: "halkla ilişkiler", tanim: "İşletme ya da ürün için olumlu bir kamuoyu imajı, güven ve itibar oluşturmayı amaçlayan etkinlikler: basın bülteni, röportaj, sponsorluk, toplum etkinlikleri. Amaç hemen satış değil.", ornek: "Fırının okul takımına forma yaptırması." }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🎫", baslik: "*Sales promotion*", maddeler: ["Amaç: HEMEN satış", "Kısa süreli teşvik", "İndirim, kupon, süreli fırsat"] },
          sag: { ikon: "🏅", baslik: "*Public relations*", maddeler: ["Amaç: imaj, güven, itibar", "Satış hemen değil", "Basın bülteni, sponsorluk, etkinlik"] },
          oyun: [
            { metin: "Süt markası kasabadaki çocuk koşusuna sponsor oldu ve basın bülteniyle duyurdu.", cevap: "sag", neden: "İndirim ya da ürün reklamı yok; amaç olumlu imaj: *public relations*." },
            { metin: "Mağaza bu hafta bir alana bir bedava kampanyası yapıyor.", cevap: "sol", neden: "Hemen aldıran kısa süreli teşvik: *sales promotion*." },
            { metin: "Şirket, yöneticisinin röportajını gazetede yayımlattı.", cevap: "sag", neden: "Röportaj PR aracı: *public relations*." },
            { metin: "Kupon koduyla yüzde 20 indirim.", cevap: "sol", neden: "Hemen satın alma teşviki: *sales promotion*." }
          ] },
        { tip: "ornek", baslik: "Tek e-posta, iki araç", durum: "Mağaza eski müşterilerine, yüzde 20 indirim kodu olan bir e-posta gönderiyor. Hangi tutundurma araçlarını kullanıyor?",
          adimlar: ["E-posta belirli (eski) müşterilere gidiyor → *direct marketing*.", "İndirim kodu hemen aldırmayı amaçlayan kısa süreli teşvik → *sales promotion*."],
          sonuc: "Hem ==*direct marketing*== hem ==*sales promotion*==: araçlar çakışabilir (tek e-posta, iki araç)." },
        { tip: "tablo", baslik: "Duruma göre promotional mix", head: ["Durum", "Uygun araç"], rows: [
            ["Ucuz, sıradan ürün", "*Media advertising* + *direct marketing*"],
            ["Pahalı ya da karmaşık ürün", "*Personal selling*"],
            ["Stok eritmek", "*Sales promotion*"],
            ["İmaj ve güven kurmak", "*Public relations*"]
          ], not: "En iyi *promotional mix* ürüne, müşteriye, duruma ve hedefe göre değişir; kural yok." }
      ]
    },
    {
      baslik: "*Sales funnel*: satış hunisi",
      kisa: "Satış hunisi her katta daralır; kayıp normaldir, nedenini bulmak önemlidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔻", terim: "Sales funnel", tr: "satış hunisi", tanim: "Olası müşterilerin ürünü ilk duymaktan satın almaya kadar geçtiği adımları gösteren, aşağı doğru daralan model. Her aşamada müşteri kaybedilir; nedenini bulursan pazarlamayı düzeltirsin.", ornek: "10 bin kişi reklamı görür, 50'si alır." }
          ] },
        { tip: "adimlar", baslik: "Huninin dört katı", adimlar: [
            { baslik: "1 · *Awareness*: fark etme", metin: "Ürünü fark eder. Araçlar: reklam, sosyal medya, içerik (blog, video)." },
            { baslik: "2 · *Interest*: ilgi", metin: "İlgilenir. Araçlar: özel teklifli e-posta bülteni, ilgi çekici site, ürün gösterimi." },
            { baslik: "3 · *Consideration*: değerlendirme", metin: "Yorum okur, özellik ve faydaları karşılaştırır." },
            { baslik: "4 · *Purchase*: satın alma", metin: "İndirim ya da özel teklif ve net bir harekete geçirici çağrıyla satın alır." }
          ] },
        { tip: "grafik", baslik: "Huni her katta daralır", xlabel: "Aşama", ylabel: "Kişi", xmax: 5, ymax: 10000, xticks: [{ v: 1, label: "Fark etti" }, { v: 2, label: "İlgilendi" }, { v: 3, label: "Karşılaştırdı" }, { v: 4, label: "Satın aldı" }], yticks: [{ v: 200, label: "200" }, { v: 1000, label: "1.000" }, { v: 10000, label: "10.000" }],
          ogeler: [
            { id: "h1", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "h2", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "h3", tip: "alan", renk: 2, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "h4", tip: "alan", renk: 3, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 9000, metin: "10.000", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 1500, metin: "1.000", gizli: true },
            { id: "t3", tip: "yazi", x: 3, y: 700, metin: "200", gizli: true },
            { id: "t4", tip: "yazi", x: 4, y: 600, metin: "50", gizli: true }
          ],
          durumlar: [
            { metin: "Reklamı ==10.000== kişi görür (*awareness*).", set: { h1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 10000], [0.65, 10000]] } }, goster: ["t1"] },
            { metin: "==1.000== kişi siteye girer (*interest*): 1.000 ÷ 10.000 = %10 kaldı.", set: { h2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 1000], [1.65, 1000]] } }, goster: ["t1", "t2"] },
            { metin: "==200== kişi karşılaştırır (*consideration*): 200 ÷ 1.000 = %20.", set: { h3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 200], [2.65, 200]] } }, goster: ["t1", "t2", "t3"] },
            { metin: "==50== kişi satın alır (*purchase*): 50 ÷ 200 = %25. Baştan sona 50 ÷ 10.000 = %0,5; her adımda müşteri kaybettin.", set: { h4: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 50], [3.65, 50]] } }, goster: ["t1", "t2", "t3", "t4"] }
          ] },
        { tip: "tuzak", baslik: "Hunide kayıp normaldir", metin: "Önemli olan kayıp olması değil, nedenini bulmaktır.", yanlis: "Hunide müşteri kaybetmek pazarlamanın başarısız olduğunu gösterir.", dogru: "Her aşamada müşteri kaybedilir. Neden kaybedildiğini anlamak pazarlamayı iyileştirir; hedef, insanları huniden aşağı taşımaktır." }
      ]
    },
    {
      baslik: "*Digital* ve *traditional marketing*",
      kisa: "Dijital pazarlama hedefli, ucuz, esnek ve ölçülebilir; en önemli üstünlüğü veridir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💻", terim: "Digital marketing", tr: "dijital pazarlama", tanim: "Müşteriye ulaşmak ve hizmet vermek için interneti ve dijital araçları kullanmak: web sitesi, sosyal medya, e-posta, mobil uygulama.", ornek: "Spotify'ın kişiye özel yıl sonu özeti." },
            { ikon: "📰", terim: "Traditional marketing", tr: "geleneksel pazarlama", tanim: "Televizyon reklamı ve reklam panosu gibi dijital olmayan araçlar; müşteri tepkisine dair veri toplamaya elvermez.", ornek: "Reklam panosu, TV reklamı." },
            { ikon: "🗄️", terim: "Big data", tr: "büyük veri", tanim: "İşletmelerin kalıpları ve eğilimleri bulmak için incelediği çok büyük ve karmaşık veri yığını.", ornek: "Kim tıkladı, kim aldı, ne kadar kaldı?" }
          ] },
        { tip: "ikili", sol: { ikon: "📰", baslik: "*Traditional*", maddeler: ["Herkese aynı mesaj", "Tepkiyi ölçmek zor, veri toplayamaz", "Değiştirmek yavaş ve pahalı"] },
          sag: { ikon: "💻", baslik: "*Digital*: dört üstünlük", maddeler: ["Hedefleme ve kişiselleştirme", "Düşük maliyet (Instagram reklamı afişten ucuz)", "Esneklik (tutmayan görseli hemen değiştir)", "Veri: kim tıkladı, kim aldı"] },
          oyun: [
            { metin: "Reklam panosunu kaç kişinin gerçekten görüp aldığını bilmek zor.", cevap: "sol", neden: "Veri toplamaya elvermez: geleneksel." },
            { metin: "Reklamı yalnızca basketbol seven gençlere gösterdin.", cevap: "sag", neden: "Hedefleme: dijital." },
            { metin: "Görsel tutmadı, ertesi gün değiştirdin.", cevap: "sag", neden: "Esneklik: dijital." },
            { metin: "Televizyon reklamı, ekrana bakan herkese ulaşıyor.", cevap: "sol", neden: "Geniş kitleye aynı mesaj: geleneksel." }
          ] },
        { tip: "tuzak", baslik: "En önemli üstünlük", metin: "Clifford'a göre dört üstünlüğün en önemlisi veridir.", yanlis: "Geleneksel araçlar da müşteri verisi toplayabilir.", dogru: "Televizyon ve reklam panosu gibi geleneksel araçlar bu veriyi toplayamaz; dijital araçlar kim tıkladı, kim aldı gösterir." }
      ]
    },
    {
      baslik: "Reklam ölçüleri: *CTR*, *conversion rate*, *ROAS*",
      kisa: "*CTR* tıkı gösterime, *conversion rate* satın almayı tıka, *ROAS* geliri harcamaya böler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👁️", terim: "Impressions", tr: "gösterim", tanim: "Bir reklamın ekranda kaç kez gösterildiği.", ornek: "10.000 gösterim." },
            { ikon: "🖱️", terim: "Click-through rate (CTR)", tr: "tıklanma oranı", tanim: "Reklamı görenlerin yüzde kaçının tıkladığı: Clicks ÷ Impressions.", ornek: "200 ÷ 10.000 = %2." },
            { ikon: "🛒", terim: "Conversion rate", tr: "dönüşüm oranı", tanim: "Tıklayanların yüzde kaçının işletmenin istediği şeyi (satın alma, üye olma) yaptığı: Conversions ÷ Clicks.", ornek: "10 ÷ 200 = %5." },
            { ikon: "💹", terim: "Return on ad spend (ROAS)", tr: "reklam harcaması getirisi", tanim: "Reklama harcanan her bir birim paranın getirdiği gelir: Revenue ÷ Ad spend.", ornek: "4.000 ÷ 1.000 = 4." }
          ] },
        { tip: "ornek", baslik: "Instagram reklamının karnesi", durum: "Reklam 10.000 kez gösterildi, 200 kişi tıkladı. Tıklayanlardan 10'u satın aldı. Reklam bütçesi 1.000 TL, getirdiği gelir 4.000 TL. *CTR*, *conversion rate* ve *ROAS* kaç?",
          adimlar: ["*CTR* = 200 ÷ 10.000 = 0,02 → %2.", "*Conversion rate* = 10 ÷ 200 = 0,05 → %5.", "*ROAS* = 4.000 ÷ 1.000 = 4.", "Yani reklama verilen her 1 TL, 4 TL gelir getirdi."],
          sonuc: "*CTR* ==%2==, *conversion rate* ==%5==, *ROAS* ==4==." },
        { tip: "tuzak", baslik: "Conversion rate'in paydası", metin: "En sık hata: paydayı karıştırmak.", yanlis: "*Conversion rate* = satın alanlar ÷ gösterim (10 ÷ 10.000 = %0,1).", dogru: "*Conversion rate*'in paydası ==tık== sayısıdır: 10 ÷ 200 = %5. Gösterim sayısına bölünen oran *CTR*'dır (tıklar ÷ gösterim)." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Promotion* müşteriyle bütün iletişimdir; reklam yalnızca bir parçası. Hedef: doğru mesajı, doğru kişiye, doğru zamanda ulaştırmak. *Marketing campaign* tek hedef için planlanmış, uyumlu çalışmadır.",
            "Beş araç: *media advertising*, *personal selling*, *sales promotion*, *direct marketing*, *public relations*.",
            "*Media advertising* aynı mesajı geniş kitleye, *direct marketing* seçilmiş kişilere gönderir.",
            "*Personal selling* pahalı ve riskli (*consequential*) alımlarda değerli; *routine* alımlarda gereksiz.",
            "*Sales promotion* satışı hızla artırır ama *brand loyalty* kurmaz; *PR* amacı imaj ve güvendir. Araçlar çakışabilir (indirim kodlu e-posta).",
            "*Sales funnel*: *awareness*, *interest*, *consideration*, *purchase*; 10.000 → 1.000 → 200 → 50, her adımda kayıp.",
            "*Digital marketing*: hedefli, ucuz, esnek, ölçülebilir; *big data* en büyük avantaj.",
            "*CTR* = tık ÷ gösterim, *conversion rate* = satın alma ÷ tık, *ROAS* = gelir ÷ reklam harcaması.",
            "Dört P tamam: *product*, *price*, *place*, *promotion*. Unit 2 bitti."
          ] }
      ]
    }
  ]
};
