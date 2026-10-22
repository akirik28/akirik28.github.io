/* Kitora not defteri · bf26 · 2.6 Yer ve Dağıtım Kanalları
   Kaynak: ap-videolar/src/episodes/bf26 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf26",
  ozet: "Ürünün müşteriye nerede ve nasıl ulaştığı da bir pazarlama kararıdır. Bu defterde *place*'i, dağıtım kanallarını ve aracıları, *B2C* ile *B2B* farkını, *direct* ile *indirect* farkını, kontrol-*reach* *trade-off*'unu ve Nike vakasını göreceksin.",
  bolumler: [
    {
      baslik: "Raflardan çekilen Nike",
      bloklar: [
        { tip: "hikaye", ikon: "👟", baslik: "Nike raflarını boşaltınca",
          metin: "Canın cips çekti. Bakkalda, markette, telefondaki uygulamada; cips hep bir adım ötende. Peki dev bir marka, ürününü o raflardan kendi eliyle çekerse? Nike denedi. Hisse değeri birkaç yılda yarıdan fazla eridi. Sorun ayakkabıdan ya da fiyattan çok, ==nerede satıldığında==ydı." },
        { tip: "sayilar", ogeler: [
            { deger: 160, onek: "$", etiket: "Nike hissesi (videodaki rakam, yaklaşık)" },
            { deger: 40, onek: "$", etiket: "yaklaşık beş yıl sonra" },
            { deger: 200, onek: ">", sonek: " milyar $", etiket: "eriyen piyasa değeri" }
          ] },
        { tip: "not", metin: "Bu defterin sorusu: ürünü müşteriye ulaştıran yolu nasıl seçersin ve her seçimin bedeli ne? Sonda Nike vakasına geri döneceğiz." }
      ]
    },
    {
      baslik: "*Place*: ürün müşteriye nasıl ulaşır?",
      bloklar: [
        { tip: "harita", merkez: "*Four Ps*", dallar: [
            { baslik: "*Product*", alt: "ne sattığın" },
            { baslik: "*Price*", alt: "kaça sattığın" },
            { baslik: "*Place*", alt: "ÜÇÜNCÜ P: ürünün müşteriye nerede ve nasıl ulaştığı" },
            { baslik: "*Promotion*", alt: "nasıl ikna ettiğin" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "📍", terim: "Place", tr: "yer / dağıtım", tanim: "Dört P'nin üçüncüsü: ürünün müşteriye nerede ve nasıl ulaştığı. Yalnızca fiziksel mağaza değil; web sitesi, uygulama, online marketplace de olabilir.", ornek: "Bakkal, market, telefondaki uygulama." },
            { ikon: "🛍️", terim: "Online marketplace", tr: "çevrim içi pazar yeri", tanim: "Birçok satıcının ürününü tek bir site ya da uygulamada sattığı pazar yeri.", ornek: "Trendyol, Amazon." },
            { ikon: "🛣️", terim: "Marketing channel / Distribution channel", tr: "pazarlama / dağıtım kanalı", tanim: "Bitmiş ürünün son müşteriye ulaşırken izlediği yol. İki ad aynı şeydir.", ornek: "Fabrika → toptancı → market → sen." },
            { ikon: "🔗", terim: "Supply chain", tr: "tedarik zinciri", tanim: "Ürünü üretip son müşteriye ulaştıran bütün ağ (1.8'de işlendi). Marketing channels bu zincirin son aşamasıdır.", ornek: "Hammaddeden rafa uzanan zincirin son halkaları." }
          ] },
        { tip: "tuzak", baslik: "Place yalnızca mağaza mı?", metin: "Sınavda \"yer\" kelimesi mağaza çağrıştırır.", yanlis: "*Place* sadece fiziksel mağazadır.", dogru: "*Place* müşterinin ürüne nerede ve nasıl ulaştığıdır; site, uygulama ve *online marketplace* de sayılır. *Marketing channel* ile *distribution channel* aynı şeydir." }
      ]
    },
    {
      baslik: "Zincirdeki oyuncular",
      bloklar: [
        { tip: "adimlar", baslik: "Kısa yol ve uzun yol", adimlar: [
            { baslik: "Kısa yol", metin: "Simitçi simidi doğrudan sana satar: üretici → son müşteri." },
            { baslik: "Uzun yol 1", metin: "Çikolata fabrikası, *wholesaler*'a (toptancıya) satar." },
            { baslik: "Uzun yol 2", metin: "Toptancı, *retailer*'a (perakendeciye), mesela markete satar." },
            { baslik: "Uzun yol 3", metin: "Market sana satar: sen *final customer*'sın." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🏭", terim: "Wholesaler", tr: "toptancı", tanim: "Üreticiden toplu alıp perakendecilere satan aracı.", ornek: "Çikolata fabrikasından toplu alan toptancı." },
            { ikon: "🏪", terim: "Retailer", tr: "perakendeci", tanim: "Ürünü son müşteriye satan mağaza (bakkal, market, mağaza zinciri).", ornek: "Mahalle marketi." },
            { ikon: "🚚", terim: "Distributor", tr: "distribütör", tanim: "Ürünü üreticiden alıp toptancılara ve mağazalara dağıtan aracı.", ornek: "Fabrikadan alıp marketlere dağıtan firma." },
            { ikon: "🔀", terim: "Intermediary", tr: "aracı", tanim: "Ürünün üreticiden son müşteriye ulaşmasına yardım eden aracı işletme: *wholesaler*, *distributor* ya da *retailer*.", ornek: "Fabrika ile sen arasındaki toptancı ve market." },
            { ikon: "🙋", terim: "Final customer", tr: "son müşteri", tanim: "Zincirin ucundaki, ürünü en sonda satın alan kişi ya da işletme.", ornek: "Markette çikolatayı alan sen." }
          ] },
        { tip: "formul", parcalar: [
            { t: "Sen (üretici)" }, "→", { t: "*Wholesaler*", alt: "toptancı" }, "→", { t: "*Retailer*", alt: "perakendeci" }, "→", { t: "*Final customer*", alt: "son müşteri" }
          ], aciklama: "Aradaki *wholesaler* ve *retailer* birer *intermediary*'dir." }
      ]
    },
    {
      baslik: "*B2C* mi *B2B* mi?",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧑", baslik: "*B2C channel* (*business to consumer*)", maddeler: ["Alıcı: bireysel tüketici", "Örnek: arkadaşlarına baskılı tişört satmak", "Örnek: fırının sana bir ekmek satması"] },
          sag: { ikon: "🏢", baslik: "*B2B channel* (*business to business*)", maddeler: ["Alıcı: ürünü KENDİ kullanmak için alan işletme", "Örnek: aynı tişörtü bir restorana garson üniforması diye satmak", "Örnek: fırının lokantaya günde 200 ekmek satması"] },
          oyun: [
            { metin: "Okuldaki öğrencilere özel baskılı tişört satmak.", cevap: "sol", neden: "Alıcılar bireysel tüketici: *B2C*." },
            { metin: "Aynı tişörtü bir restorana çalışan üniforması olarak satmak.", cevap: "sag", neden: "Alıcı ürünü kendi işinde kullanan işletme: *B2B*." },
            { metin: "Fırın, günde 200 ekmeği sandviçinde kullanan lokantaya satıyor.", cevap: "sag", neden: "Alıcı işletme, ekmeği kendi ürününde kullanıyor: *B2B*." },
            { metin: "Fırın, sabah gelen mahalleliye tek tek ekmek satıyor.", cevap: "sol", neden: "Bireysel tüketiciye satış: *B2C*." },
            { metin: "Elif'in otele mum satması; otel mumları odalarında kullanıyor.", cevap: "sag", neden: "Alıcı işletme ve kendi kullanıyor: *B2B*." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧑", terim: "B2C channel", tr: "işletmeden tüketiciye kanal", tanim: "İşletmenin ürünü bireysel tüketicilere sattığı kanal.", ornek: "Ekşi mayalı ekmek yapan işletmenin tek tek müşteriye somun satması." },
            { ikon: "🏢", terim: "B2B channel", tr: "işletmeden işletmeye kanal", tanim: "İşletmenin ürünü, kullanması için başka bir işletmeye sattığı kanal.", ornek: "Aynı işletmenin ekmeği sandviçinde kullanan restorana satması." }
          ] },
        { tip: "not", metin: "İkisi birden de olur: fırın sana bir ekmek, lokantaya günde 200 ekmek satar. ==Ürün aynı; kanal da pazarlama stratejisi de iki tane.== Her kanal ayrı bir pazarlama stratejisi isteyebilir." },
        { tip: "tuzak", baslik: "Ürünü yeniden satan işletme", metin: "B2B tanımındaki kilit nokta: alıcı işletme ürünü kendi kullanır (üniforma, sandviç ekmeği).", yanlis: "Markete ürün satmak da *B2B*'dir ve kanal *direct*'tir.", dogru: "Ürünü yeniden satan market bir ==aracıdır==; o durumda kanal *indirect* olur. *B2B*'de alıcı ürünü kendi işinde kullanır." }
      ]
    },
    {
      baslik: "*Direct* mi *indirect* mi?",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🤝", baslik: "*Direct channel*", maddeler: ["Aracı YOK", "Pazarda kendi domatesini satan çiftçi", "Tesla arabasını kendi mağazasında satar", "Alıcı tüketici de olabilir, işletme de"] },
          sag: { ikon: "🔀", baslik: "*Indirect channel*", maddeler: ["Bir ya da daha çok aracı VAR", "Çiftçi → Migros → sen", "Market burada *intermediary*"] },
          oyun: [
            { metin: "Üretici pazarında kendi sebzesini müşteriye satan çiftçi.", cevap: "sol", neden: "Aracı yok: *direct*." },
            { metin: "Çiftçi domatesi markete satıyor, market de müşteriye.", cevap: "sag", neden: "Market aracı: *indirect*." },
            { metin: "Tesla, arabayı kendi mağazasında satıyor.", cevap: "sol", neden: "Aracısız satış: *direct*." },
            { metin: "Fabrika → toptancı → market → sen.", cevap: "sag", neden: "İki aracı var: *indirect*." },
            { metin: "Elif, mumları otele kendisi götürüp satıyor.", cevap: "sol", neden: "Aracı yok (alıcı işletme olsa da): *direct*." }
          ] },
        { tip: "tablo", baslik: "İki ayrı soru, iki ayrı sınıflandırma", head: ["", "Aracı yok (*direct*)", "Aracı var (*indirect*)"], rows: [
            ["Alıcı tüketici (*B2C*)", "Pazarda domates satan çiftçi", "Çiftçi → Migros → sen"],
            ["Alıcı işletme (*B2B*)", "Elif'in mumu → otel", "Fabrika → toptancı → işletme"]
          ], not: "*B2C/B2B* \"kime satıyorsun\" sorusudur; *direct/indirect* \"arada aracı var mı\" sorusudur. Direct bir kanal hem B2C hem B2B olabilir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🤝", terim: "Direct channel", tr: "doğrudan kanal", tanim: "İşletmenin müşteriye aracı olmadan, doğrudan sattığı kanal (müşteri tüketici de olabilir, işletme de).", ornek: "Tesla'nın kendi mağazası." },
            { ikon: "🔀", terim: "Indirect channel", tr: "dolaylı kanal", tanim: "Ürünün müşteriye bir ya da daha çok aracı üzerinden ulaştığı kanal.", ornek: "Çiftçinin Migros'a, Migros'un sana satması." }
          ] },
        { tip: "tuzak", baslik: "İki sınıflandırmayı karıştırma", metin: "Alıcının kim olduğu ile arada aracı olup olmadığı birbirinden bağımsızdır.", yanlis: "Alıcı işletmeyse kanal otomatik olarak *indirect*'tir.", dogru: "Alıcın işletme de olsa tüketici de olsa, ==aracısız satıyorsan *direct*==." }
      ]
    },
    {
      baslik: "Trade-off: kontrol mü, *reach* mi?",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Trade-off", tr: "ödünleşim", tanim: "Bir şeyi kazanırken başka bir şeyden vazgeçmek. Burada kontrol ile *reach* arasındaki denge.", ornek: "Direct kanalda kontrol kazanırsın, reach'ten vazgeçersin." },
            { ikon: "📦", terim: "Inventory", tr: "stok", tanim: "İşletmenin satmak için elinde tuttuğu mal; direct kanalda yönetimi işletmenin kendisindedir.", ornek: "Kendi sitenden satıyorsan stok sende." },
            { ikon: "🌐", terim: "Reach", tr: "ulaşılan müşteri sayısı", tanim: "İşletmenin ulaşabildiği müşteri sayısı; indirect kanal bunu büyütür.", ornek: "Yüzlerce mağazada satılan ürün çok daha fazla kişiye ulaşır." },
            { ikon: "📐", terim: "Profit margin", tr: "kâr marjı", tanim: "Satıştan kâr olarak kalan pay. Aracı pay almadığında birim başına yükselir.", ornek: "Kendin sattığın sabunda tanesinin 100 TL'si sende kalır." }
          ] },
        { tip: "ikili", sol: { ikon: "🤝", baslik: "*Direct channel* kazandırır / yükler", maddeler: ["KONTROL: fiyat, marka, müşteri deneyimi senin", "Birim başına yüksek kâr marjı", "Ama: dükkân/site, kargo, stok, müşteri hizmetleri, iadeler hep sende", "Müşteriyi sana gelmeye ikna etmelisin: *reach* sınırlı"] },
          sag: { ikon: "🔀", baslik: "*Indirect channel* kazandırır / yükler", maddeler: ["Hazır altyapı: mağaza, müşteri, dağıtım ağı, satış uzmanlığı", "GENİŞ *reach*", "Ama: her satıştan pay alır", "Ürünün rafta nereye konacağına o karar verir; rafa girmek zor"] },
          oyun: [
            { metin: "Fiyat, marka ve müşteri deneyimi tamamen senin elinde.", cevap: "sol", neden: "Kontrol *direct*'in artısı." },
            { metin: "Mağaza hazır müşterisiyle ürünü bir anda binlerce kişiye ulaştırıyor.", cevap: "sag", neden: "Geniş *reach* *indirect*'in artısı." },
            { metin: "Her satıştan mağaza pay alıyor, birim başına daha az kalıyor.", cevap: "sag", neden: "*Indirect*'in bedeli." },
            { metin: "Stok, kargo, iade ve müşteri hizmeti sende.", cevap: "sol", neden: "*Direct*'in yükü." },
            { metin: "Ürünün hangi rafta, hangi rakibin yanında duracağına mağaza karar veriyor.", cevap: "sag", neden: "Kontrol kaybı: *indirect*." }
          ] },
        { tip: "ornek", baslik: "Sabun: kendin mi sat, mağaza mı sattırsın?", durum: "El yapımı sabunun tanesi 100 TL. Kendin satarsan ayda 50 tane satıyorsun. Bir mağaza sattırırsa tanesi sana 60 TL kalıyor ama ayda 300 tane gidiyor. Hangisi daha çok kazandırır?",
          adimlar: ["Direct: 50 × 100 = 5.000 TL.", "Indirect: 300 × 60 = 18.000 TL.", "Mağaza her satıştan pay aldı (tanesi 40 TL gitti) ama *reach* sayesinde toplam gelir çok arttı.", "Bedeli: ürünün rafta nereye konacağını mağaza belirler."],
          sonuc: "*Direct* ==5.000 TL==, *indirect* ==18.000 TL==: daha az kâr marjı, çok daha fazla *reach*." },
        { tip: "grafik", baslik: "Aylık gelir: direct mi indirect mi?", xlabel: "Kanal", ylabel: "Gelir (bin TL)", xmax: 3, ymax: 20, xticks: [{ v: 1, label: "Direct" }, { v: 2, label: "Indirect" }], yticks: [{ v: 5, label: "5" }, { v: 18, label: "18" }],
          ogeler: [
            { id: "d", tip: "alan", renk: 0, noktalar: [[0.6, 0], [1.4, 0], [1.4, 0], [0.6, 0]] },
            { id: "i", tip: "alan", renk: 1, noktalar: [[1.6, 0], [2.4, 0], [2.4, 0], [1.6, 0]] },
            { id: "td", tip: "yazi", x: 1, y: 6.5, metin: "50 × 100 = 5", gizli: true },
            { id: "ti", tip: "yazi", x: 2, y: 19.2, metin: "300 × 60 = 18", gizli: true }
          ],
          durumlar: [
            { metin: "Kendin satarsan tanesi ==100 TL== sende kalır ama ayda yalnızca 50 tane satarsın: 5.000 TL.", set: { d: { noktalar: [[0.6, 0], [1.4, 0], [1.4, 5], [0.6, 5]] } }, goster: ["td"] },
            { metin: "Mağaza sattırırsa tanesi ==60 TL== kalır ama 300 tane gider: 18.000 TL.", set: { i: { noktalar: [[1.6, 0], [2.4, 0], [2.4, 18], [1.6, 18]] } }, goster: ["td", "ti"] },
            { metin: "Birim başına kâr düştü ama ==*reach*== sayesinde toplam gelir ~3,6 kat arttı. Bedeli: kontrol." , goster: ["td", "ti"] }
          ] },
        { tip: "tuzak", baslik: "Trade-off'u iki yönüyle bil", metin: "Sınav iki yönü de sorar.", yanlis: "*Indirect channel* her zaman daha kârlıdır çünkü daha çok satar.", dogru: "*Direct*: kontrol ve birim başına yüksek kâr marjı, ama maliyet, emek ve sınırlı *reach*. *Indirect*: hazır altyapı ve geniş *reach*, ama satıştan pay ve kontrol kaybı. Yeni başlıyorsan dev zinciri değil, yerel pazarı ya da başka bir satıcıyı dene." }
      ]
    },
    {
      baslik: "Nike vakası: kontrol kazandı, *reach* kaybetti",
      bloklar: [
        { tip: "zaman", olaylar: [
            { tarih: "~6 yıl önce", baslik: "Raflardan çekilme", metin: "Birçok mağaza zincirinden çıkıp kendi mağazasına, sitesine ve uygulamasına yöneldi: *indirect*'ten *direct*'e geçti." },
            { tarih: "2020", baslik: "CEO değişimi", metin: "Mark Parker'ın yerine teknoloji kökenli John Donahoe geldi; e-ticaret hızlandı." },
            { tarih: "Sonuç 1", baslik: "Rakipler yükseldi", metin: "Boşalan raflara Hoka ve On Running yerleşti." },
            { tarih: "Sonuç 2", baslik: "Stok birikti", metin: "Elde kalan stok TJ Maxx gibi indirim mağazalarına ucuza verildi; marka imajı zedelendi." }
          ] },
        { tip: "grafik", baslik: "Nike'ın bıraktığı raflarda büyüyenler", xlabel: "Şirket ve yıl", ylabel: "Gelir (milyar $)", xmax: 5, ymax: 2.2, xticks: [{ v: 1, label: "Hoka 2018" }, { v: 2, label: "Hoka 2023" }, { v: 3, label: "On 2018" }, { v: 4, label: "On 2023" }], yticks: [{ v: 0.4, label: "0,4" }, { v: 1.8, label: "1,8" }],
          ogeler: [
            { id: "h18", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "h23", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "o18", tip: "alan", renk: 0, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "o23", tip: "alan", renk: 1, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 0.55, metin: "0,4", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 1.95, metin: "1,8", gizli: true },
            { id: "t3", tip: "yazi", x: 3, y: 0.4, metin: "0,25", gizli: true },
            { id: "t4", tip: "yazi", x: 4, y: 1.85, metin: "1,7", gizli: true }
          ],
          durumlar: [
            { metin: "Hoka'nın geliri 2018'de ==400 milyon $==.", set: { h18: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 0.4], [0.65, 0.4]] } }, goster: ["t1"] },
            { metin: "2023'te ==1,8 milyar $==: Nike'ın bıraktığı rafa yerleşti.", set: { h23: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 1.8], [1.65, 1.8]] } }, goster: ["t1", "t2"] },
            { metin: "On Running 2018'de ==250 milyon $==.", set: { o18: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 0.25], [2.65, 0.25]] } }, goster: ["t1", "t2", "t3"] },
            { metin: "2023'te ==1,7 milyar $==. Koşu kategorisinde Nike'ın payı %34'ten %26'ya düştü.", set: { o23: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 1.7], [3.65, 1.7]] } }, goster: ["t1", "t2", "t3", "t4"] }
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 34, sonek: "%", etiket: "Nike'ın koşu kategorisindeki payı (önce)" },
            { deger: 26, sonek: "%", etiket: "payı (sonra)" }
          ] },
        { tip: "tuzak", baslik: "Nike'ın dersi", metin: "Sorun ürün ya da fiyat değildi, *place* ve kanallardı.", yanlis: "Nike'ın sorunu ayakkabı kalitesiydi.", dogru: "Kâğıt üstünde mantıklıydı (daha çok kontrol, daha yüksek *profit margin*) ama ==kontrol kazandı, *reach* kaybetti==." }
      ]
    },
    {
      baslik: "Hangisini seçmeli?",
      bloklar: [
        { tip: "harita", merkez: "Kanal seçimini belirleyenler", dallar: [
            { baslik: "Ne sattığın", alt: "ürünün türü" },
            { baslik: "Kendi *reach*'in", alt: "tek başına kaç müşteriye ulaşırsın" },
            { baslik: "İstediğin kontrol", alt: "marka ve deneyim üzerinde" },
            { baslik: "Uzmanlık ve kaynak", alt: "kanalı yönetebilir misin" },
            { baslik: "*Regulations*", alt: "yasal kurallar" }
          ] },
        { tip: "ikili", sol: { ikon: "👜", baslik: "Küçük lüks marka", maddeler: ["Kendi sitesinden satmayı seçebilir", "Marka ve deneyim kontrolü önemli"] },
          sag: { ikon: "🧴", baslik: "Yeni cilt kremi", maddeler: ["Tanınmak için *indirect kanal*a ihtiyaç duyabilir", "Market rafı hazır müşteri getirir"] } },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Multichannel distribution", tr: "çok kanallı dağıtım", tanim: "Müşteriye ulaşmak için birden çok kanalı birlikte kullanmak. Reach, kontrol, maliyet ve kârlılığı dengeler.", ornek: "Apple, iPhone'u hem kendi mağazasında hem başka mağazalarda satar." },
            { ikon: "📜", terim: "Regulations", tr: "yasal kurallar", tanim: "Bazı ürünlerin hangi kanallardan satılabileceğini belirleyen yasal kurallar.", ornek: "Reçeteli ilaç Türkiye'de yalnızca eczanede satılır. Ev yapımı ekmek satmak için bile izin ya da ruhsat (*permit*, *license*) gerekebilir." }
          ] },
        { tip: "tuzak", baslik: "Her yere koymak amaç değil", metin: "Hedef müşterinin karşısına çıkmak ve gelir ile kârı artırmak amaçtır.", yanlis: "Ürünü olabildiğince çok yere koymak her zaman en iyisidir.", dogru: "Amaç her yerde değil, ==hedef müşterinin önünde== olmak. Kanal seçmeden önce de yasalara bak (*regulations*)." }
      ]
    },
    {
      baslik: "Mini sınav",
      bloklar: [
        { tip: "ornek", baslik: "Elif'in mumları", durum: "Elif evde mum yapıyor. Mumları kendisi götürüp bir otele satıyor; otel de onları odalarında kullanıyor. Bu hangi kanal?",
          adimlar: ["Arada aracı var mı? Hayır, Elif doğrudan satıyor → *direct*.", "Alıcı kim? Mumu kendi odalarında kullanan bir işletme → *B2B*.", "İkisini birleştir."],
          sonuc: "==*Direct B2B channel*==." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Place* (üçüncü P): ürün müşteriye nerede ve nasıl ulaşıyor; site, uygulama ve *online marketplace* de sayılır. Yolun adı *marketing / distribution channel*, *supply chain*'in son aşaması.",
            "Zincir: üretici → *wholesaler* → *retailer* → *final customer*; aradakiler *intermediaries*.",
            "Alıcı tüketiciyse *B2C*, ürünü kendi kullanan işletmeyse *B2B*.",
            "Aracı yoksa *direct*, varsa *indirect*. İki sınıflandırma birbirinden bağımsız.",
            "*Direct*: kontrol ve yüksek birim kâr marjı, ama maliyet, emek ve sınırlı *reach*.",
            "*Indirect*: hazır altyapı ve geniş *reach*, ama pay ve kontrol kaybı (sabun: 5.000 TL ve 18.000 TL).",
            "Nike *direct*'e geçip kontrol kazandı, *reach* kaybetti; Hoka ve On büyüdü.",
            "*Multichannel distribution* iki kanalı birleştirir (Apple); *regulations* bazı kanalları zorunlu kılar (eczane).",
            "Amaç her yerde değil, hedef müşterinin önünde olmak."
          ] }
      ]
    }
  ]
};
