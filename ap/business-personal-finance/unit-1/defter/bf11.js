/* Kitpath not defteri · bf11 · 1.1 İşletme Nedir?
   Kaynak: ap-videolar/src/episodes/bf11 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf11",
  amac: "Bu konu işletmenin (*business*) ne olduğunu anlatıyor: *goods* ya da *services* üretip kâr eden kuruluş. İşletmelerin çoğunun küçük olduğunu, kârın nasıl hesaplandığını ve işletmenin değeri nasıl yaratıp paraya çevirdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "İşletme, mal ve hizmet",
      kisa: "İşletme, ihtiyaç ve istekleri karşılayan mal ya da hizmeti satarak para kazanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏪", terim: "Business", tr: "işletme", tanim: "İnsanların ihtiyaç ve isteklerini karşılamak için mal ya da hizmet üreten, bundan para kazanan kuruluş.", ornek: "Köşedeki simitçi de, Apple de bir *business*." },
            { ikon: "🥖", terim: "Needs", tr: "ihtiyaçlar", tanim: "Olmazsa olmaz şeyler.", ornek: "Ekmek, su, barınma." },
            { ikon: "📱", terim: "Wants", tr: "istekler", tanim: "Şart olmayan ama canımızın çektiği şeyler.", ornek: "Yeni telefon kılıfı." },
            { ikon: "👟", terim: "Goods", tr: "mallar", tanim: "Elle tutulan, sahip olunabilen fiziksel ürünler.", ornek: "Simit, ayakkabı, telefon, araba." },
            { ikon: "✂️", terim: "Services", tr: "hizmetler", tanim: "Müşteri için yapılan iş ya da eylemler.", ornek: "Berber tıraşı, araba tamiri, Netflix, Uber." },
            { ikon: "🥯", terim: "Small business", tr: "küçük işletme", tanim: "İşletmelerin ezici çoğunluğunu oluşturan, çoğu tek kişilik işletmeler.", ornek: "Simit arabası ve tek bir kişi." }
          ] },
        { tip: "ikili", sol: { ikon: "👟", baslik: "*Goods*", maddeler: ["Elle tutulur, sahip olunur", "Simit, ayakkabı, telefon, araba"] },
          sag: { ikon: "✂️", baslik: "*Services*", maddeler: ["Senin için yapılan iş", "Tıraş, tamir, abonelik, Uber"] },
          oyun: [
            { metin: "Bir çift spor ayakkabı.", cevap: "sol", neden: "Elle tutulan ürün: *goods*." },
            { metin: "Berberde saç kesimi.", cevap: "sag", neden: "Senin için yapılan iş: *services*." },
            { metin: "Aylık yayın platformu aboneliği.", cevap: "sag", neden: "Abonelikler ve uygulamalar *services* tarafındadır." },
            { metin: "Fırından alınan sıcak simit.", cevap: "sol", neden: "Yiyecek de fiziksel üründür: *goods*." },
            { metin: "Arabanı onarım için ustaya bırakmak.", cevap: "sag", neden: "Tamir bir iştir: *services*." }
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 99.9, sonek: "%", etiket: "ABD'de işletmelerin küçük işletme oranı" },
            { deger: 80, sonek: "%", etiket: "bunların hiç çalışanı olmayanı (tek kişilik)" },
            { deger: 97, sonek: "%", etiket: "işletmelerin temel amacı kâr olanı" }
          ] },
        { tip: "tuzak", baslik: "Dev şirket tuzağı", metin: "Apple bir garajda, Walmart küçük bir kasabadaki tek mağazada, Amazon bir evde kitap satarak başladı. Hepsi bir sorunu çözdü; Kevin O'Leary'nin dediği gibi ==büyük bir sorunu çözmeden işletme kuramazsın.==", yanlis: "İşletmeler büyük şirketlerdir.", dogru: "İşletmelerin ezici çoğunluğu küçüktür ve çoğu tek kişiliktir." }
      ]
    },
    {
      baslik: "Yer ve ölçek: fiziksel mi, sanal mı?",
      kisa: "İşletme fiziksel ya da sanal olur; ölçeği yerelden küreselliğe uzanır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏬", baslik: "*Physical*", maddeler: ["Dükkânı var, yüz yüze çalışır", "Mahalle fırını"] },
          sag: { ikon: "🛒", baslik: "*Virtual*", maddeler: ["İşini internetten yürütür", "Trendyol"] },
          oyun: [
            { metin: "Sokaktaki, kapısından müşteri giren fırın.", cevap: "sol", neden: "Dükkân ve yüz yüze satış: *physical*." },
            { metin: "Koliyi telefon ekranındaki sipariş tetikleyen mağaza.", cevap: "sag", neden: "İş internet üzerinden yürüyor: *virtual*." },
            { metin: "Yalnızca uygulamadan satış yapan giyim sitesi.", cevap: "sag", neden: "Fiziksel dükkân yok: *virtual*." }
          ] },
        { tip: "adimlar", baslik: "Ölçek merdiveni", adimlar: [
            { baslik: "*Local*", metin: "Tek bir yerde, tek mahalleye satar. Örnek: mahalle fırını." },
            { baslik: "*Regional*", metin: "Birkaç şehir ya da eyalette çalışır. Örnek: birkaç şehirde şubesi olan börekçi." },
            { baslik: "*National*", metin: "Ülkenin tamamında çalışır. Örnek: her ilde mağazası olan A101." },
            { baslik: "*Global*", metin: "Birçok ülkede çalışır. Örnek: onlarca ülkedeki IKEA." }
          ] }
      ]
    },
    {
      baslik: "Kâr: elinde kalan para",
      kisa: "Kâr, gelirden maliyetler çıkınca elde kalan paradır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💰", terim: "Revenue", tr: "gelir", tanim: "Satışlardan kasaya giren toplam para.", ornek: "200 tost × 50 TL = 10.000 TL." },
            { ikon: "🧾", terim: "Costs", tr: "maliyetler", tanim: "O satışları yapabilmek için harcanan para.", ornek: "Ekmek, peynir, kira: 7.000 TL." },
            { ikon: "🏆", terim: "Profit", tr: "kâr", tanim: "Gelirden bütün maliyetler çıkınca elde kalan para. Neredeyse her işletmenin temel amacı budur.", ornek: "10.000 − 7.000 = 3.000 TL." }
          ] },
        { tip: "ornek", baslik: "Okul kantini: tost kârı", durum: "Kantin tanesi 50 TL'den 200 tost satıyor. Malzeme ve kira toplam 7.000 TL. Kâr kaç lira?",
          adimlar: ["Gelir = 200 × 50 = 10.000 TL.", "Maliyet = 7.000 TL.", "Kâr = 10.000 − 7.000 = 3.000 TL."],
          sonuc: "*Profit* = 3.000 TL. Kasaya 10 bin girdi, elde 3 bin kaldı." },
        { tip: "grafik", baslik: "Tost kantini: gelir, maliyet, kâr (bin TL)", xlabel: "Kalem", ylabel: "Bin TL", xmax: 4, ymax: 11,
          yticks: [{ v: 3, label: "3" }, { v: 7, label: "7" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "g", tip: "alan", renk: 1, noktalar: [[0.4, 0], [1.2, 0], [1.2, 0], [0.4, 0]] },
            { id: "m", tip: "alan", renk: 0, noktalar: [[1.6, 0], [2.4, 0], [2.4, 0], [1.6, 0]] },
            { id: "k", tip: "alan", renk: 2, noktalar: [[2.8, 0], [3.6, 0], [3.6, 0], [2.8, 0]] },
            { id: "gt", tip: "yazi", x: 0.8, y: 10.5, metin: "Gelir 10", gizli: true },
            { id: "mt", tip: "yazi", x: 2, y: 7.5, metin: "Maliyet 7", gizli: true },
            { id: "kt", tip: "yazi", x: 3.2, y: 3.5, metin: "Kâr 3", gizli: true }
          ],
          durumlar: [
            { metin: "200 tost × 50 TL: ==*revenue* 10.000 TL.==", set: { g: { noktalar: [[0.4, 0], [1.2, 0], [1.2, 10], [0.4, 10]] } }, goster: ["gt"] },
            { metin: "Malzeme ve kira: ==*costs* 7.000 TL.==", set: { m: { noktalar: [[1.6, 0], [2.4, 0], [2.4, 7], [1.6, 7]] } }, goster: ["mt"] },
            { metin: "Aradaki fark kalan para: ==*profit* 3.000 TL.==", set: { k: { noktalar: [[2.8, 0], [3.6, 0], [3.6, 3], [2.8, 3]] } }, goster: ["kt"] }
          ] },
        { tip: "tuzak", baslik: "Kasa dolu, cep boş olabilir", metin: "Soruda satış tutarı verilip kâr isteniyorsa maliyeti çıkarmayı unutma.", yanlis: "*Revenue* ile *profit* aynı şeydir.", dogru: "*Profit* = *revenue* eksi *costs*. Gelir kâr değildir." }
      ]
    },
    {
      baslik: "*Customer* mı, *consumer* mı?",
      kisa: "Parayı ödeyen *customer*, ürünü kullanan *consumer*'dır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "💳", baslik: "*Customer*", maddeler: ["Satın alan kişi, parayı o öder", "Fiyata, değere (*value*) ve kolaylığa bakar"] },
          sag: { ikon: "🎁", baslik: "*Consumer*", maddeler: ["Gerçekten kullanan kişi", "Kaliteye, deneyime ve memnuniyete bakar"] },
          oyun: [
            { metin: "Doğum günün için sana kazak satın alan halan.", cevap: "sol", neden: "Parayı ödeyen: *customer*." },
            { metin: "Halanın aldığı kazağı giyen sen.", cevap: "sag", neden: "Kullanan sensin: *consumer*." },
            { metin: "Fiyatı karşılaştırıp en ucuz olanı seçmeye çalışan kişi.", cevap: "sol", neden: "Fiyat ve kolaylık, satın alanın (*customer*) kaygısıdır." },
            { metin: "Kazak rahat mı, rengi hoş mu diye bakan kişi.", cevap: "sag", neden: "Kalite ve memnuniyet, kullanıcının (*consumer*) kaygısıdır." }
          ] },
        { tip: "tuzak", baslik: "Aynı kişi mi?", metin: "Soruda “kim ödüyor, kim kullanıyor?” diye bak. Akrabadan gelen pembe tavşan kostümünü (*A Christmas Story*) alan *customer*, giyen *consumer*'dır. İşletme ikisini de memnun etmek zorunda.", yanlis: "*Customer* ve *consumer* her zaman aynı kişidir.", dogru: "Aynı kişi olabilirler ama olmak zorunda değiller: parayı ödeyen *customer*, kullanan *consumer*." }
      ]
    },
    {
      baslik: "Dert çözen kazanır",
      kisa: "İşletme, insanların para vereceği gerçek bir sorunu çözmelidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "😣", terim: "Pain point", tr: "can sıkan sorun", tanim: "Müşterinin canını sıkan ve çözülmesi için para vermeye razı olduğu sorun.", ornek: "Gece 11'de süt bitti, market kapalı." },
            { ikon: "🧩", terim: "Problem-solution fit", tr: "sorun-çözüm uyumu", tanim: "Ürünün gerçek müşterilerin gerçek bir sorununu çözmesi, bir ihtiyacını karşılaması.", ornek: "Getir, süt sorununu telefondan siparişle dakikalar içinde çözüyor." }
          ] },
        { tip: "grafik", baslik: "Küçük işletmeler ne zaman kapanıyor?", xlabel: "Yıl", ylabel: "Kapananlar (%)", xmax: 6, ymax: 60,
          xticks: [{ v: 1, label: "1" }, { v: 5, label: "5" }], yticks: [{ v: 20, label: "%20" }, { v: 50, label: "%50" }],
          ogeler: [
            { id: "p1", tip: "nokta", x: 1, y: 20, etiket: "", kilavuz: true, gizli: true },
            { id: "p5", tip: "nokta", x: 5, y: 50, etiket: "", kilavuz: true, gizli: true },
            { id: "c", tip: "cizgi", renk: 0, kesik: true, from: [1, 20], to: [5, 50], etiket: "", gizli: true },
            { id: "t1", tip: "yazi", x: 1.2, y: 26, metin: "1. yıl: yaklaşık %20", gizli: true },
            { id: "t5", tip: "yazi", x: 4.9, y: 55, metin: "5 yıl: yaklaşık %50", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Her işletme ayakta kalmayı hedefler ama kapanmak çok yaygın.", goster: [] },
            { metin: "Küçük işletmelerin ==yaklaşık %20'si ilk yıl== içinde kapanıyor.", goster: ["p1", "t1"] },
            { metin: "==Yaklaşık yarısı== beş yıl içinde kapanıyor.", goster: ["p5", "t5", "c"] }
          ] },
        { tip: "tuzak", baslik: "İşletme neden batar?", metin: "Parasızlık ve kötü yönetim de gerçek sebepler; ama sınavda vurgulanan neden *problem-solution fit* eksikliğidir.", yanlis: "İşletmeler yalnızca paraları bittiği için kapanır.", dogru: "Çoğu zaman kimsenin para vermeyeceği bir sorunu çözdükleri için kapanırlar." }
      ]
    },
    {
      baslik: "Değer yaratmak ve yakalamak",
      kisa: "Değer üretmek yetmez; müşteri maliyetten fazlasını ödemelidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💡", terim: "Value creation", tr: "değer yaratmak", tanim: "Müşterinin yararlı ve değerli bulduğu bir mal ya da hizmet üretmek.", ornek: "Limonata yapıp insanların beğenmesi." },
            { ikon: "🐷", terim: "Value capture", tr: "değeri paraya çevirmek", tanim: "Yaratılan değerden para kazanmak: müşterinin, sağlamanın maliyetinden fazlasını ödemesi.", ornek: "15 TL'ye mal olan limonataya 40 TL ödenmesi." }
          ] },
        { tip: "grafik", baslik: "Limonata: maliyet ve ödemeye razı tutar (TL)", xlabel: "Bardak", ylabel: "TL", xmax: 4, ymax: 50,
          yticks: [{ v: 15, label: "15" }, { v: 25, label: "25" }, { v: 40, label: "40" }],
          ogeler: [
            { id: "mal", tip: "alan", renk: 0, noktalar: [[0.5, 0], [1.4, 0], [1.4, 0], [0.5, 0]] },
            { id: "razi", tip: "alan", renk: 1, noktalar: [[2.2, 0], [3.1, 0], [3.1, 0], [2.2, 0]] },
            { id: "mt", tip: "yazi", x: 0.95, y: 17, metin: "Maliyet 15", gizli: true },
            { id: "rt", tip: "yazi", x: 2.65, y: 42, metin: "Razı 40", gizli: true },
            { id: "fark", tip: "ok", from: [3.5, 15], to: [3.5, 40], gizli: true },
            { id: "ft", tip: "yazi", x: 3.5, y: 45, metin: "Fark 25 TL", gizli: true },
            { id: "yok", tip: "yazi", x: 2.65, y: 20, metin: "Fark yok: kazanç yok", gizli: true }
          ],
          durumlar: [
            { metin: "Bir bardak sana ==15 TL== tutuyor.", set: { mal: { noktalar: [[0.5, 0], [1.4, 0], [1.4, 15], [0.5, 15]] } }, goster: ["mt"] },
            { metin: "İnsanlar ==40 TL== vermeye razı.", set: { razi: { noktalar: [[2.2, 0], [3.1, 0], [3.1, 40], [2.2, 40]] } }, goster: ["rt"] },
            { metin: "Aradaki ==25 TL== (40 − 15) yakaladığın değer: *value capture*.", goster: ["fark", "ft"] },
            { metin: "Ödemeye razı tutar 15'e inerse fark kapanır ve değer yakalayamazsın.", set: { razi: { noktalar: [[2.2, 0], [3.1, 0], [3.1, 15], [2.2, 15]] } }, gizle: ["rt", "fark", "ft"], goster: ["yok"] }
          ] },
        { tip: "ikili", sol: { ikon: "🎸", baslik: "Hobi", maddeler: ["Para kazandırmaz", "Zevk için yapılır"] },
          sag: { ikon: "💼", baslik: "*Side hustle*", maddeler: ["Asıl işin yanında para kazandıran ek iş", "Gelir getirir"] },
          oyun: [
            { metin: "Hafta sonu elde boya yapıp hiç satmayan kişi.", cevap: "sol", neden: "Para kazandırmıyor: hobi." },
            { metin: "Akşamları el yapımı sabun satıp ek gelir elde eden kişi.", cevap: "sag", neden: "Para kazandırıyor: *side hustle*." },
            { metin: "Kimsenin ödemediği ama herkesin sevdiği bir uygulama yapmak.", cevap: "sol", neden: "Para yoksa ek iş değil, hobidir." },
            { metin: "Fotoğraf çekip müşterilere ücretle sunan lise öğrencisi.", cevap: "sag", neden: "Gelir getiriyor: *side hustle*." }
          ] },
        { tip: "tuzak", baslik: "İkisi birlikte şart: Vine", metin: "Altı saniyelik videolarla çok popüler olan Vine'ı milyonlarca kişi sevdi (*value creation*) ama paraya çeviremedi (*value capture* yok) ve 2017'de kapandı.", yanlis: "Müşteri seviyorsa işletme başarılıdır.", dogru: "*Value creation* tek başına yetmez; *value capture* de gerekir." }
      ]
    },
    {
      baslik: "Değer sadece ürün değildir",
      kisa: "Müşteri deneyimi ve satış biçimi de değer yaratır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🍔", terim: "Customer experience", tr: "müşteri deneyimi", tanim: "Müşterinin ürünü alırken ve kullanırken yaşadığı deneyimin tamamı; değerin bir parçasıdır.", ornek: "McDonald's yemeğe ulaşmayı hızlı ve kolay yaptı (*The Founder*)." }
          ] },
        { tip: "grafik", baslik: "Starbucks Pumpkin Spice Latte: sezonluk satış", xlabel: "Ay", ylabel: "Özlem / ilgi", xmax: 12, ymax: 10,
          xticks: [{ v: 3, label: "Mart" }, { v: 6, label: "Haz" }, { v: 9, label: "Eyl" }, { v: 11, label: "Kas" }],
          ogeler: [
            { id: "sez", tip: "alan", renk: 2, noktalar: [[8.5, 0], [11.5, 0], [11.5, 0], [8.5, 0]] },
            { id: "oz", tip: "egri", renk: 1, noktalar: [[0, 2], [2, 3], [4, 4.5], [6, 6], [8, 8], [9, 9]], gizli: true },
            { id: "yil", tip: "egri", renk: 0, noktalar: [[0, 8], [3, 7], [6, 5], [9, 3.5], [12, 2]], gizli: true },
            { id: "t1", tip: "yazi", x: 10, y: 9.4, metin: "Sezon: Eyl–Kas", gizli: true },
            { id: "t2", tip: "yazi", x: 4, y: 6.5, metin: "Bütün yıl: ilgi düşer", gizli: true },
            { id: "t3", tip: "yazi", x: 4, y: 5.3, metin: "Sezonluk: özlem artar", gizli: true }
          ],
          durumlar: [
            { metin: "Latte yalnızca ==eylül–kasım== arasında satılıyor; ürün yaklaşık 20 yıldır yaşıyor.", set: { sez: { noktalar: [[8.5, 0], [11.5, 0], [11.5, 9], [8.5, 9]] } }, goster: ["t1"] },
            { metin: "Bütün yıl satılsaydı insanlar bıkardı; ilgi düşerdi.", goster: ["yil", "t2"] },
            { metin: "Kapalı aylarda ==özlem== birikir, sonbaharda zirve yapar.", gizle: ["yil", "t2"], goster: ["oz", "t3"] }
          ] },
        { tip: "tuzak", baslik: "Değer = ucuz ve iyi ürün mü?", metin: "Müşteri deneyimini iyileştirmek (McDonald's'ın hızı) ya da ürünün satılma biçimini değiştirmek (sezonluk içecek) de değer yaratır.", yanlis: "Değer yalnızca daha ucuz ya da daha iyi ürün demektir.", dogru: "Deneyim ve satış biçimi de değerdir." }
      ]
    },
    {
      baslik: "*Value proposition*: neden ben?",
      kisa: "*Value proposition*, müşterinin neden rakibi değil seni seçeceğini söyler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📣", terim: "Value proposition", tr: "değer önerisi", tanim: "İşletmenin hangi sorunu çözdüğünü, nasıl değer yarattığını ve müşterinin neden rakipleri değil onu seçmesi gerektiğini söyleyen ifade.", ornek: "BİM: düşük fiyat." },
            { ikon: "🏁", terim: "Competitors", tr: "rakipler", tanim: "Aynı müşteriye benzer çözümü sunan diğer işletmeler.", ornek: "Kahveyi evdeki makine de yapar." }
          ] },
        { tip: "harita", merkez: "Starbucks'ın *value proposition*'ı", dallar: [
            { baslik: "*Consistency*", alt: "Her şubede, her seferinde aynı tat" },
            { baslik: "*Convenience*", alt: "Hızlı ve kişiye özel sipariş, uygulamayla sırayı atlama" },
            { baslik: "*Experience*", alt: "Buluşup çalışılacak rahat ve güvenli ortam, markanın imajı" }
          ] },
        { tip: "ikili", sol: { ikon: "☕", baslik: "Ürün tarifi", maddeler: ["“Kahve, süt, şurup.”", "Ne olduğunu anlatır"] },
          sag: { ikon: "📣", baslik: "*Value proposition*", maddeler: ["Hangi sorunu çözüyorum?", "Nasıl değer yaratıyorum?", "Neden rakip yerine ben?"] },
          oyun: [
            { metin: "“Her şubede aynı tat, uygulamadan sıra atlama.”", cevap: "sag", neden: "Müşteriye neden seni seçeceğini söylüyor." },
            { metin: "“Ürünümüz süt, kahve ve şuruptan yapılır.”", cevap: "sol", neden: "Yalnızca ürünü anlatıyor, neden ben sorusunu cevaplamıyor." },
            { metin: "“Marketimizde fiyatlar rakiplerden düşük.”", cevap: "sag", neden: "Düşük fiyat, rakip yerine seçilme nedenidir." },
            { metin: "“İçinde şu malzemeler var.”", cevap: "sol", neden: "Bir tarif; sorun ve rakip kıyası yok." }
          ] },
        { tip: "tuzak", baslik: "Value proposition ürün listesi değil", metin: "Evdeki 20 dolarlık makine de kahve yapar; Starbucks kahveyi değil ==tutarlılık, kolaylık ve deneyim== satar. İyi bir teklif üç şeyi söyler: hangi sorunu çözüyorum, nasıl değer yaratıyorum, neden rakip yerine ben.", yanlis: "*Value proposition* ürünün özelliklerinin listesidir.", dogru: "Sorunu, değeri ve rakiplere karşı seçilme nedenini birlikte açıklar." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Business* = *goods* ya da *services* üretip bundan para kazanan kuruluş. İşletmelerin %99,9'u küçüktür, yaklaşık %80'inin çalışanı yoktur.",
            "*Needs* olmazsa olmaz, *wants* istenendir. Elle tutulan *goods*, yapılan iş *services*.",
            "Ölçek: *local* → *regional* → *national* → *global*; yer: *physical* ya da *virtual*.",
            "*Profit* = *revenue* − *costs*. Örnek: 200 × 50 = 10.000 − 7.000 = 3.000 TL. Gelir kâr değildir.",
            "*Customer* satın alır (fiyat, değer, kolaylık); *consumer* kullanır (kalite, deneyim, memnuniyet).",
            "Önce bir *pain point* çöz: *problem-solution fit*. Küçük işletmelerin ~%20'si ilk yıl, ~%50'si beş yıl içinde kapanıyor.",
            "*Value creation* (değer üret) + *value capture* (maliyetinden fazlasına sat) birlikte şart. Vine yaratıp yakalayamadı; para kazandırmayan şey *side hustle* değil hobidir.",
            "Değer ürünle sınırlı değil: *customer experience* (McDonald's hızı) ve satış biçimi (sezonluk latte) de değerdir.",
            "*Value proposition*: hangi sorunu çözüyorsun, nasıl değer yaratıyorsun, neden *competitors* yerine sen?"
          ] }
      ]
    }
  ]
};
