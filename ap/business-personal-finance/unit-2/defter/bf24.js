/* Kitora not defteri · bf24 · 2.4 Ürün
   Kaynak: ap-videolar/src/episodes/bf24 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf24",
  ozet: "Parlak bir fikir yetmez; onu insanların vazgeçemeyeceği bir ürüne çevirmen gerekir. Bu defterde *four Ps*'in ilki *product*'ı, *problem-solution fit* ile *product-market fit* farkını, ürün geliştirmenin altı aşamasını, *prototype* ile *MVP* farkını, *branding*, *quality control* ve *product life cycle*'ı göreceksin.",
  bolumler: [
    {
      baslik: "Tutan ürün, batan ürün",
      bloklar: [
        { tip: "hikaye", ikon: "🥤", baslik: "Kantindeki yeni içecek",
          metin: "Kantine yeni bir içecek geliyor. İlk hafta herkesin elinde; bir ay sonra rafta tozlanıyor. Yanındaki tost ise yıllardır kapış kapış. Neden bazı ürünler tutuyor, bazıları batıyor? Çünkü parlak bir fikir yetmez; onu insanların vazgeçemeyeceği bir ürüne çevirmen gerekir." },
        { tip: "not", metin: "Cevap çoğu zaman pazarlamanın dört temel kararında gizli. Bu defter bunlardan ilkini, ==*product*==ı anlatıyor; diğer üçü (*price*, *place*, *promotion*) sonraki bölümlerde." }
      ]
    },
    {
      baslik: "Dört P ve *product*",
      bloklar: [
        { tip: "harita", merkez: "*Four Ps* (pazarlama karması)", dallar: [
            { baslik: "*Product*", alt: "ne sattığın" },
            { baslik: "*Price*", alt: "kaça sattığın" },
            { baslik: "*Place*", alt: "nerede sattığın" },
            { baslik: "*Promotion*", alt: "insanları nasıl ikna ettiğin" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🎁", terim: "Product", tr: "ürün", tanim: "Bir ihtiyacı ya da isteği karşılamak için müşteriye sunulan mal, hizmet ya da fikir. \"Ne sattığın.\"", ornek: "Simit bir mal, saç kesimi bir hizmet, Netflix üyeliği de bir *product*." },
            { ikon: "🏷️", terim: "Price", tr: "fiyat", tanim: "Ürün için müşteriden ne kadar ücret istediğin.", ornek: "Granola bar 40 TL." },
            { ikon: "📍", terim: "Place", tr: "yer / dağıtım", tanim: "Müşterinin ürünü nereden satın aldığı.", ornek: "Okul kantini." },
            { ikon: "📣", terim: "Promotion", tr: "tanıtım", tanim: "Müşteriyi ürünü almaya nasıl ikna ettiğin.", ornek: "Koridor panosundaki duyuru." }
          ] },
        { tip: "ikili", sol: { ikon: "🥯", baslik: "Mal", maddeler: ["Dokunulabilen, elle tutulan", "Simit, ayakkabı, telefon"] },
          sag: { ikon: "✂️", baslik: "Hizmet", maddeler: ["Biri senin için bir iş yapar", "Saç kesimi, ders, Netflix üyeliği"] },
          oyun: [
            { metin: "Simit.", cevap: "sol", neden: "Elle tutulan bir ürün: mal." },
            { metin: "Saç kesimi.", cevap: "sag", neden: "Biri senin için bir iş yapıyor: hizmet." },
            { metin: "Spor ayakkabı.", cevap: "sol", neden: "Fiziksel ürün: mal." },
            { metin: "Netflix üyeliği.", cevap: "sag", neden: "Erişim ve hizmet sunuluyor: hizmet (yine de bir *product*)." }
          ] },
        { tip: "tuzak", baslik: "Product yalnızca fiziksel mal mıdır?", metin: "Sınavda \"ürün\" kelimesi geniş kullanılır.", yanlis: "*Product* sadece elle tutulan şeylerdir.", dogru: "*Product* mal, hizmet ya da fikir olabilir; bir ihtiyacı ya da isteği karşılaması yeter." }
      ]
    },
    {
      baslik: "İyi ürünün iki sınavı",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🩹", baslik: "*Problem-solution fit*", maddeler: ["Ürün gerçek bir sorunu çözüyor mu?", "İlk sınav (Unit 1'den hatırlatma)", "Örnek: kantinde sağlıklı atıştırmalık yok, sen ev yapımı granola bar yapıyorsun"] },
          sag: { ikon: "💰", baslik: "*Product-market fit*", maddeler: ["Bir adım ötesi: yeterince insan bunu istiyor ve PARA ödüyor mu?", "Talep işi ayakta tutacak kadar mı?", "Örnek: her gün 80 öğrenci 40 liradan alıyor"] },
          oyun: [
            { metin: "Kantinde sağlıklı atıştırmalık yok; senin granola barın bu sorunu çözüyor.", cevap: "sol", neden: "Gerçek bir sorunu çözüyor: *problem-solution fit*." },
            { metin: "On arkadaşın \"güzelmiş\" deyip geçiyor ama kimse almıyor.", cevap: "sol", neden: "Sorun çözülüyor gibi ama para ödeyen yok: yalnızca *problem-solution fit*, *product-market fit* yok." },
            { metin: "Her gün 80 öğrenci barı tanesi 40 liradan alıyor.", cevap: "sag", neden: "Yeterince insan para ödüyor: *product-market fit*." },
            { metin: "Satışlar işi ayakta tutacak kadar talep gösteriyor.", cevap: "sag", neden: "Talep iş için yeterli: *product-market fit*." }
          ] },
        { tip: "ornek", baslik: "Granola bar günde ne kazandırır?", durum: "Her gün 80 öğrenci granola barı tanesi 40 liradan alıyor. Günlük satış geliri nedir?",
          adimlar: ["Satılan adet = 80.", "Fiyat = 40 TL.", "Gelir = 80 × 40 = 3.200 TL / gün.", "Yeterince insan para ödüyor: *product-market fit* var."],
          sonuc: "Günlük satış geliri = ==3.200 TL==." },
        { tip: "tuzak", baslik: "İki fit'i karıştırma", metin: "İkisi de \"fit\" ile bitiyor ama ayrı sorular soruyor.", yanlis: "Sorunu çözen her ürünün *product-market fit*'i vardır.", dogru: "*Problem-solution fit*: ürün sorunu çözüyor mu? *Product-market fit*: yeterince insan bunu istiyor ve para ödüyor mu, iş ayakta kalır mı?" }
      ]
    },
    {
      baslik: "*Product development* ve *iteration*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧱", terim: "Product development", tr: "ürün geliştirme", tanim: "Ürünü pazara çıkmadan önce ve sonra tasarlama, test etme ve geliştirme süreci.", ornek: "Granola barın tarifini öğrenci geri bildirimine göre değiştirmek." },
            { ikon: "🔄", terim: "Iteration", tr: "yineleme", tanim: "Test sonuçlarına ve müşteri geri bildirimine göre üründe tekrar tekrar iyileştirme yapma döngüsü.", ornek: "İlk iPhone'da uygulama mağazası bile yoktu; ürün sürüm sürüm gelişti. Mahalle dönercisi sosunu müşteri yorumuna göre değiştirir." }
          ] },
        { tip: "adimlar", baslik: "Geliştirme döngüsü", adimlar: [
            { baslik: "Test et", metin: "Ürünü müşteriye göster, dene." },
            { baslik: "Öğren", metin: "Geri bildirimi dinle." },
            { baslik: "Yap", metin: "Değişikliği üret." },
            { baslik: "İyileştir", metin: "Sonra baştan: bu döngüye *iteration* denir." }
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "1953", baslik: "Corvette C1", metin: "İlk kuşak." },
            { tarih: "1967", baslik: "Corvette C2", metin: "Tasarım yenilendi." },
            { tarih: "1968", baslik: "Corvette C3", metin: "Bir sonraki kuşak." },
            { tarih: "1988", baslik: "Holiday Barbie kutusu", metin: "Yıllar içinde kutular ve oyuncaklar değişti (1992 ve sonrası da öyle)." }
          ] },
        { tip: "not", metin: "Mesaj: bugün kullandığın her ürün, ilk hâlinden çok farklı. Ürünler müşteriyi dinleyerek sürekli yeniden şekillenir." }
      ]
    },
    {
      baslik: "Parlak fikir tuzağı: *core competencies*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💪", terim: "Core competencies", tr: "temel yetkinlikler", tanim: "İşletmenin en iyi yaptığı, onu güçlü kılan işler (Unit 1). Yeni ürün geliştirirken bunlara yaslanmak gerekir.", ornek: "Amazon'un donanımı ucuza satıp parayı kitaplardan ve içerikten kazanması (Kindle)." }
          ] },
        { tip: "adimlar", baslik: "Amazon Fire Phone hikâyesi", adimlar: [
            { baslik: "İşleyen formül", metin: "Kindle'ı ucuza sat, parayı kitaplardan kazan." },
            { baslik: "Parlak yeni fikir", metin: "Dört yıl ve bin mühendisle doğrudan iPhone'a rakip olacak bir telefon yap." },
            { baslik: "Sonuç", metin: "*Fire Phone* ilk haftalarda yaklaşık 35 bin sattı; çıkıştan altı hafta sonra ABD akıllı telefon pazarının yüzde 0,02'si." },
            { baslik: "Ders", metin: "Olmadığın şey olmaya çalışma: işe yarayanı bırakıp parlak fikre koşma." }
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 4, sonek: " yıl", etiket: "geliştirme süresi" },
            { deger: 1000, etiket: "mühendis" },
            { deger: 35000, onek: "~", etiket: "satılan adet (yaklaşık)" },
            { deger: 0.02, sonek: "%", etiket: "ABD akıllı telefon pazarı payı" }
          ] },
        { tip: "tuzak", baslik: "Her parlak fikre atlama", metin: "Başarı çoğu zaman işe yarayanı geliştirmekten gelir.", yanlis: "Yeni ve parlak bir fikir her zaman eldeki işi geliştirmekten daha iyidir.", dogru: "Başarı, ==*core competencies*==e, yani en iyi yaptığın işe odaklanınca gelir (Fire Phone dersi)." }
      ]
    },
    {
      baslik: "Altı aşama",
      bloklar: [
        { tip: "adimlar", baslik: "Ürün geliştirmenin sırası", adimlar: [
            { baslik: "1 · *Ideation*", metin: "Beyin fırtınasıyla fikir üret, çözmeye değer müşteri sorunlarını bul." },
            { baslik: "2 · *Validation*", metin: "Çok zaman ve para yatırmadan ÖNCE insanların bunu gerçekten istediğini doğrula." },
            { baslik: "3 · *Design*", metin: "Prototip yap, özelliklere karar ver, maliyeti tahmin et." },
            { baslik: "4 · *Messaging*", metin: "Ürün kimin için, hangi sorunu çözüyor, neden seni seçsinler?" },
            { baslik: "5 · *Production*", metin: "Üret ya da hizmeti satışa hazırla. Küçük başla; müşteri artmadan büyütme." },
            { baslik: "6 · *Launch*", metin: "Ürün pazara çıkar; müşteri artık satın alabilir. Sonra gerekirse baştan ideation'a dön." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "💡", terim: "Ideation", tr: "fikir üretme", tanim: "Beyin fırtınasıyla fikir üretme ve çözmeye değer müşteri sorunlarını bulma.", ornek: "Okulda acıkanların sorunu için fikirler yazmak." },
            { ikon: "✅", terim: "Validation", tr: "doğrulama", tanim: "Büyük yatırımdan önce müşterilerin fikri gerçekten istediğini doğrulama.", ornek: "50 öğrenciye sormak: 35'i \"alırım\" dedi." },
            { ikon: "✏️", terim: "Design", tr: "tasarım", tanim: "Prototip yapma, özelliklere karar verme, maliyeti tahmin etme ve son ürünün nasıl görüneceğini belirleme.", ornek: "Bir bar 15 liraya çıkıyor." },
            { ikon: "💬", terim: "Messaging", tr: "mesaj", tanim: "Ürün kimin için, hangi sorunu çözüyor, müşteri neden rakibi değil seni seçmeli sorularının cevabı.", ornek: "\"Derste acıkanlara şekersiz, doyurucu bar.\"" },
            { ikon: "🏭", terim: "Production", tr: "üretim", tanim: "Malın üretilmesi ya da hizmetin satışa hazırlanması; küçük başlanır, müşteri artınca büyütülür.", ornek: "Günde 30 bar yapıp müşteri artmadan büyütmemek." },
            { ikon: "🚀", terim: "Launch", tr: "piyasaya çıkış", tanim: "Ürünün pazara sunulması; müşteri artık satın alabilir.", ornek: "Barların kantinde satışa açılması." }
          ] },
        { tip: "ornek", baslik: "*Validation*: yüzde kaç \"alırım\" dedi?", durum: "50 öğrenciye granola bar alıp almayacaklarını soruyorsun; 35'i \"alırım\" diyor. Oran nedir? Ayrıca bir barın maliyeti 15 TL ve 40 TL'ye satılıyor; tek barda birim kâr kaç lira?",
          adimlar: ["Oran = 35 ÷ 50 = 0,70 = %70.", "Para harcamadan önce yapılan bu soru *validation* aşamasıdır.", "Birim kâr = 40 − 15 = 25 TL (*design* aşamasında maliyet hesaplanır)."],
          sonuc: "%70 \"alırım\" dedi; birim kâr ==25 TL==." },
        { tip: "tuzak", baslik: "Aşama sırası", metin: "Sınavda sıra sorulur ve *validation* büyük yatırımdan ÖNCE gelir.", yanlis: "Önce üret, sonra insanlar alır mı diye bak.", dogru: "Sıra: *ideation*, *validation*, *design*, *messaging*, *production*, *launch*. *Production*'da küçük başla; yeterince müşteri gelmeden üretimi büyütme." }
      ]
    },
    {
      baslik: "*Prototype* mı, *MVP* mi?",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧪", baslik: "*Prototype*", maddeler: ["SATILMAZ", "Ürünün çalışıp çalışmadığı denenir", "Ürünü test eder", "Spanx: Sara Blakely üretimden önce basit bir örnek yapıp denedi"] },
          sag: { ikon: "💸", baslik: "*MVP*", maddeler: ["SATILIR", "Sorunu çözen en sade sürüm", "Pazarı test eder", "Airbnb: şişme yatak kiraladılar, insanlar para öder mi diye baktılar"] },
          oyun: [
            { metin: "Sara Blakely, üretime yatırım yapmadan önce basit bir örnek yapıp denedi, satmadı.", cevap: "sol", neden: "Satılmıyor, ürün test ediliyor: *prototype*." },
            { metin: "Airbnb kurucuları evlerinde şişme yatak kiraladı.", cevap: "sag", neden: "Gerçek ödeme alınıyor, pazar test ediliyor: *MVP*." },
            { metin: "Deniz, 20 telefon kılıfını okulda 150 liradan satıyor.", cevap: "sag", neden: "Sade sürüm satılıyor, insanlar para verir mi bakıyor: *MVP*." },
            { metin: "Bir tasarımcı, kılıf çalışıyor mu diye bir örneği satmadan arkadaşlarına denetti.", cevap: "sol", neden: "Satış yok, amaç ürünü sınamak: *prototype*." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧪", terim: "Prototype", tr: "prototip", tanim: "Ürünün çalışıp çalışmadığını görmek ve tasarımı iyileştirmek için yapılan, satılmayan erken sürüm.", ornek: "Spanx'in ilk basit örneği." },
            { ikon: "💸", terim: "Minimum viable product (MVP)", tr: "asgari uygulanabilir ürün", tanim: "Sorunu çözen ve müşteriye gerçekten satılan en sade sürüm; insanların para ödeyip ödemeyeceğini gösterir.", ornek: "Airbnb'nin şişme yatağı." }
          ] },
        { tip: "ornek", baslik: "Deniz'in kılıfı", durum: "Deniz tasarladığı telefon kılıfından 20 tane yapıp okulda 150 liradan satıyor; amacı, insanlar para verir mi görmek. Hepsi satılırsa geliri ve bu neyin örneği?",
          adimlar: ["Gelir = 20 × 150 = 3.000 TL.", "Sade bir sürümü gerçekten satıp pazarı test ediyor.", "Satmasaydı sadece ürünü deneyen bir *prototype* olurdu."],
          sonuc: "Potansiyel gelir 3.000 TL; bu bir ==*minimum viable product*== (satıldığı için *prototype* değil)." },
        { tip: "tuzak", baslik: "Satıyor mu?", metin: "İkisinin amacı aynı: müşteri geri bildirimiyle değer yaratan bir ürün yapmak. Fark: biri satılır, biri satılmaz.", yanlis: "*MVP*, *prototype*'ın başka adıdır.", dogru: "*Prototype* satılmaz, ==ürünü== test eder. *MVP* satılır, ==pazarı== test eder. Soruda \"satıyor mu?\" diye bak." }
      ]
    },
    {
      baslik: "*Branding* ve *trademark*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏳️", terim: "Branding", tr: "markalaşma", tanim: "İşletme ya da ürün için tanınan bir kimlik ve imaj oluşturma süreci; ürünün akılda kalsın diye ona bir kimlik kurmak.", ornek: "Nike logosunu görünce kazanan sporcular; mor sarı motoru görünce Getir; Marvel logosu; Air Jordan." },
            { ikon: "™️", terim: "Trademark (TM)", tr: "ticari marka", tanim: "Markanın adını, logosunu ya da sembolünü yasal olarak koruyan hak. Logoların yanındaki küçük TM işareti.", ornek: "Bir logonun yanındaki küçük ™." }
          ] },
        { tip: "hikaye", ikon: "🐊", baslik: "Crocs: çirkinliği imzaya çevirmek",
          metin: "Danışmanlar Crocs'a \"daha az çirkin yap\" derken marka çirkinliği ayırt edici özelliği yaptı (\"come as you are\"). Sonuç: Balenciaga'nın 850 dolarlık Crocs'u bile hemen tükendi. Ders: mesajın, seni farklı kılan şeye odaklansın." },
        { tip: "sayilar", ogeler: [
            { deger: 850, onek: "$", etiket: "Balenciaga Crocs'un fiyatı, yine de tükendi" }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "📨", baslik: "Branding = mesaj gönderir", metin: "Mesaj seni benzersiz yapan şeye odaklanmalı (Crocs)." },
            { ikon: "🤞", baslik: "Marka söz verir", metin: "Branding ancak sözünü tutarsan işe yarar; ürün o beklentiyi karşılamalı. Bunu *quality control* sağlar." },
            { ikon: "⏳", baslik: "Trademark için acele etme", metin: "Önce korunmaya değecek kadar değerli bir marka kur." }
          ] },
        { tip: "tuzak", baslik: "Marka yalnızca logo mudur?", metin: "*Branding* logodan fazlasıdır.", yanlis: "*Branding*, güzel bir logo çizmektir.", dogru: "*Branding* akılda kalan bir kimlik ve imaj kurmaktır; logo bunun bir parçası. *Trademark* ise o adı ve logoyu yasayla korur." }
      ]
    },
    {
      baslik: "*Quality control* ve *product life cycle*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔎", terim: "Quality control", tr: "kalite kontrol", tanim: "Her müşterinin beklediği kaliteyi alması için ürünleri denetleme, test etme ve hataları azaltma süreci. Launch'tan sonra da sürer.", ornek: "Her barın aynı tada ve boyuta sahip olması." },
            { ikon: "🔄", terim: "Product life cycle", tr: "ürün yaşam döngüsü", tanim: "Bir ürünün pazardaki ömrü boyunca geçtiği dört evre.", ornek: "Stres çarkı 2017'de birkaç ayda söndü; simit yüzyıllardır tezgâhta." },
            { ikon: "✨", terim: "Innovation", tr: "yenilik", tanim: "Ürünü sürekli yenileme: iyileştirmek, yeni sürümler çıkarmak, pazarda güncel kalmak.", ornek: "Telefonların her yıl yeni modeli." }
          ] },
        { tip: "grafik", baslik: "Ürün yaşam döngüsü: satış zamanla nasıl değişir?", xlabel: "Zaman", ylabel: "Satış", xmax: 10, ymax: 10, xticks: [], yticks: [],
          ogeler: [
            { id: "i", tip: "egri", renk: 0, noktalar: [[0.5, 0.4], [1.5, 0.7], [2.5, 1.5]], etiket: "", gizli: true },
            { id: "g", tip: "egri", renk: 1, noktalar: [[2.5, 1.5], [3.5, 3.5], [4.5, 6.2], [5.5, 8]], etiket: "", gizli: true },
            { id: "m", tip: "egri", renk: 2, noktalar: [[5.5, 8], [6.5, 8.6], [7.5, 8.4]], etiket: "", gizli: true },
            { id: "d", tip: "egri", renk: 3, noktalar: [[7.5, 8.4], [8.5, 5], [9.5, 2]], etiket: "", gizli: true },
            { id: "ti", tip: "yazi", x: 1.5, y: 2.3, metin: "Introduction", gizli: true },
            { id: "tg", tip: "yazi", x: 3.5, y: 6, metin: "Growth", gizli: true },
            { id: "tm", tip: "yazi", x: 6.5, y: 9.4, metin: "Maturity", gizli: true },
            { id: "td", tip: "yazi", x: 8.7, y: 7, metin: "Decline", gizli: true }
          ],
          durumlar: [
            { metin: "==*Introduction*==: ürün yeni çıkmıştır; satış düşük, büyüme yavaş. Odak: tanıtım ve marka bilinirliği.", goster: ["i", "ti"] },
            { metin: "==*Growth*==: satışlar hızla artar; pazar genişler, ürün rakiplerden ayrışmaya çalışır.", goster: ["g", "tg"] },
            { metin: "==*Maturity*==: satışlar zirve yapar, pazar doyar. Odak: marka sadakati ve yenilik.", goster: ["m", "tm"] },
            { metin: "==*Decline*==: satışlar düşer; maliyet kısılır, ürünü sürdürme ya da bırakma kararı verilir.", goster: ["d", "td"] }
          ] },
        { tip: "tablo", baslik: "Dört evre", head: ["Evre", "Satış", "Odak"], rows: [
            ["*Introduction*", "Düşük, yavaş büyüme", "Tanıtım, marka bilinirliği"],
            ["*Growth*", "Hızla artar", "Pazar genişlemesi, rakiplerden ayrışma"],
            ["*Maturity*", "Zirve, doyma", "Marka sadakati, yenilik"],
            ["*Decline*", "Düşer", "Maliyet kısma, sürdür/bırak kararı"]
          ] },
        { tip: "ikili", sol: { ikon: "🌀", baslik: "Kısa ömürlü ürün", maddeler: ["Moda ya da trend", "Stres çarkı 2017'de birkaç ayda söndü"] },
          sag: { ikon: "🥯", baslik: "Uzun ömürlü ürün", maddeler: ["Sürekli ihtiyaç", "Simit yüzyıllardır tezgâhta"] },
          oyun: [
            { metin: "Stres çarkı 2017'de birkaç ayda söndü.", cevap: "sol", neden: "Hızlı yükselip hızlı düştü." },
            { metin: "Simit yüzyıllardır satılıyor.", cevap: "sag", neden: "Sürekli talep: uzun ömür." },
            { metin: "Çocukken oynadığın bir oyuncak bugün rafta yok.", cevap: "sol", neden: "Ürün ömrünü doldurmuş." },
            { metin: "Telefon markaları her yıl yeni model çıkarıyor.", cevap: "sag", neden: "Sürekli *innovation* ömrü uzatır." }
          ] },
        { tip: "tuzak", baslik: "Her ürünün ömrü farklıdır", metin: "Müşteri talebi, rekabet ya da teknoloji değişince ömür hızla kısalabilir.", yanlis: "Ürün yaşam döngüsü her ürün için aynı sürede tamamlanır.", dogru: "Dört evre aynıdır (*introduction*, *growth*, *maturity*, *decline*) ama süre ürüne göre değişir. Güçlü marka ve sürekli *innovation* ömrü uzatır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Product*, *four Ps*'in ilki: ihtiyacı ya da isteği karşılayan mal, hizmet ya da fikir.",
            "*Problem-solution fit*: ürün sorunu çözüyor. *Product-market fit*: yeterince insan para ödüyor (80 öğrenci × 40 TL = 3.200 TL/gün).",
            "*Product development* müşteri geri bildirimiyle dönen *iteration* döngüsüdür.",
            "Fire Phone dersi: parlak yeni fikre koşma, *core competencies*'e odaklan.",
            "Altı aşama: *ideation*, *validation*, *design*, *messaging*, *production*, *launch*. Önce doğrula, küçük üret.",
            "*Prototype* satılmaz ve ürünü test eder; *MVP* satılır ve pazarı test eder.",
            "*Branding* akılda kalan bir kimlik kurar (Nike, Getir, Crocs); *trademark* adı ve logoyu yasayla korur.",
            "*Quality control* markanın sözünü tutmasını sağlar; launch'tan sonra da sürer.",
            "*Product life cycle*: *introduction*, *growth*, *maturity*, *decline*. Süre ürüne göre değişir.",
            "*Innovation* hiç durmaz; ömrü uzatan, sürekli yenilenen ürünlerdir."
          ] }
      ]
    }
  ]
};
