/* Kitora not defteri · bf25 · 2.5 Fiyat
   Kaynak: ap-videolar/src/episodes/bf25 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf25",
  amac: "Bu konu fiyatı, yani dört P'nin ikincisini anlatıyor: fiyat yalnızca ödediğin para değil, müşteriye giden bir mesajdır. Dört ana fiyatlama stratejisini, *markup* ile *margin* hesabını, fiyatlama gücünü ve fiyatın yasal sınırlarını öğreneceksin.",
  bolumler: [
    {
      baslik: "Fiyat bir mesajdır: *value-based pricing*",
      kisa: "Fiyat bir sinyaldir; müşteri en fazla kaç para verir, ona göre fiyatlanır.",
      bloklar: [
        { tip: "hikaye", ikon: "🥂", baslik: "10 dolarlık mı, 90 dolarlık mı?",
          metin: "Aynı içeceği iki bardağa koy; birine \"10 dolarlık\", diğerine \"90 dolarlık\" de. 2008'de bilim insanları bunu denedi: insanlar pahalı sandıkları bardağı daha lezzetli buldu, beyin taramaları da öyle gösterdi. (Videodaki asıl deney şarapla, 5 ile 90 dolar arası fiyatlarla yapıldı; aynı şarap bir kez ucuz, bir kez pahalı etiketle verildi (ör. 10 dolarlık şarap \"90 dolarlık\" diye).)" },
        { tip: "kavramlar", kartlar: [
            { ikon: "🏷️", terim: "Price", tr: "fiyat", tanim: "*Four Ps*'in ikincisi: ürün için müşteriden istenen para; aynı zamanda kalite hakkında müşteriye giden bir sinyal. Fiyatı belirleme yöntemine *pricing strategy* denir.", ornek: "Aynı içeceği \"90 dolarlık\" diye sunmak onu daha lezzetli gösterir." },
            { ikon: "👁️", terim: "Perceived value", tr: "algılanan değer", tanim: "Müşterinin gözünde ürünün değeri; fiyat değişince ürün aynı kalsa bile değişebilir.", ornek: "Aynı şarap, daha pahalı etiketle daha lezzetli bulundu." },
            { ikon: "💎", terim: "Value-based pricing", tr: "değere dayalı fiyatlama", tanim: "Fiyatı, müşterinin ürüne biçtiği değere (*perceived value*) göre belirlemek. Maliyet değil, müşterinin algısı esas alınır.", ornek: "Lüks bir çantanın yapımı birkaç yüz dolar tutar; markası ve statüsü için binlerce dolar ödenir." },
            { ikon: "🙋", terim: "Willingness to pay", tr: "ödeme istekliliği", tanim: "Müşterinin bir ürün için ödemeye razı olduğu en yüksek tutar; anket (*survey customers*) ve fiyat denemeleriyle (*test prices*) tahmin edilir.", ornek: "Müşterilere anket yapıp farklı fiyatları denemek." },
            { ikon: "👑", terim: "Premium pricing", tr: "premium fiyatlama", tanim: "Ürün kaliteli, ayrıcalıklı ya da lüks görünsün diye fiyatı bilerek yüksek tutmak; *value-based pricing*'in bir türü.", ornek: "iPhone; Gucci'nin 1.600 dolarlık peluş köpeği; müzayedede 6,2 milyon dolara giden duvara bantlanmış muz." }
          ] },
        { tip: "tuzak", baslik: "\"Value\" yanıltmasın", metin: "Kelimede \"değer\" geçse de bu en ucuza satmak demek değildir.", yanlis: "*Value-based pricing*, değerli (ucuz) fiyat koymaktır.", dogru: "Tersine çok yüksek fiyatlara götürebilir. Sorulan soru şudur: ==müşteri en fazla kaç para verir?== *Premium pricing* de onun bir türüdür; *freemium* ise ters yöndedir." }
      ]
    },
    {
      baslik: "*Cost-based pricing*: *markup* ve *margin*",
      kisa: "*Markup* kârı maliyete, *margin* kârı fiyata böler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧮", terim: "Cost-based pricing", tr: "maliyete dayalı fiyatlama", tanim: "Fiyatı, üretim maliyetinin üstüne istenen kâr payını ekleyerek belirlemek. Artısı maliyeti karşılar ve kârı öngörülebilir kılar; eksisi müşterinin ne kadar ödemeye razı olduğunu hesaba katmaz.", ornek: "Tişörtün maliyeti 80 TL; üstüne 20 TL ekleyip 100 TL'ye satmak." }
          ] },
        { tip: "grafik", baslik: "Okulda tişört: aynı 20 TL kâr, iki farklı yüzde", xlabel: "TL", ylabel: "TL", xmax: 4, ymax: 120, xticks: [{ v: 1, label: "Maliyet" }, { v: 2, label: "Fiyat" }, { v: 3, label: "Kâr" }], yticks: [{ v: 20, label: "20" }, { v: 80, label: "80" }, { v: 100, label: "100" }],
          ogeler: [
            { id: "c", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "p", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "k", tip: "alan", renk: 2, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "tc", tip: "yazi", x: 1, y: 86, metin: "80", gizli: true },
            { id: "tp", tip: "yazi", x: 2, y: 106, metin: "100", gizli: true },
            { id: "tk", tip: "yazi", x: 3, y: 26, metin: "20", gizli: true },
            { id: "mk", tip: "yazi", x: 3.9, y: 70, metin: "Markup = 20 ÷ 80 = %25", hiza: "end", gizli: true },
            { id: "mg", tip: "yazi", x: 3.9, y: 55, metin: "Margin = 20 ÷ 100 = %20", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Maliyet ==80 TL==.", set: { c: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 80], [0.65, 80]] } }, goster: ["tc"] },
            { metin: "Satış fiyatı ==100 TL==.", set: { p: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 100], [1.65, 100]] } }, goster: ["tp"] },
            { metin: "Aradaki fark, yani kâr ==20 TL==.", set: { k: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 20], [2.65, 20]] } }, goster: ["tk"] },
            { metin: "*Markup*: kârı ==maliyete== böl → %25.", goster: ["mk"] },
            { metin: "*Margin*: kârı ==fiyata== böl → %20. Maliyet fiyattan küçük olduğu için markup yüzdesi margin'den hep büyük çıkar.", goster: ["mk", "mg"] }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "➕", baslik: "*Markup* (maliyete eklenen kâr payı)", maddeler: ["Kâr ÷ MALİYET × 100", "Maliyetin üstüne ne kadar eklendi?", "Müteahhit: (10.000 − 8.000) ÷ 8.000 = %25"] },
          sag: { ikon: "📐", baslik: "*Margin* (*profit margin*, kâr marjı)", maddeler: ["Kâr ÷ FİYAT × 100", "Fiyatın ne kadarı kâr?", "Müteahhit: 2.000 ÷ 10.000 = %20"] },
          oyun: [
            { metin: "40 TL maliyetli kahve 50 TL'ye satılıyor; kâr 10 TL, 10 ÷ 40 = %25.", cevap: "sol", neden: "Payda maliyet (40): *markup*." },
            { metin: "Aynı kahvede 10 ÷ 50 = %20.", cevap: "sag", neden: "Payda fiyat (50): *margin*." },
            { metin: "Fiyatın yüzde kaçının kâr olduğunu soruyorsun.", cevap: "sag", neden: "Fiyattaki kâr payı: *margin*." },
            { metin: "Maliyetin üstüne yüzde kaç ekleyip fiyat koydun?", cevap: "sol", neden: "Maliyete eklenen oran: *markup*." }
          ] },
        { tip: "tuzak", baslik: "Markup ile margin'i karıştırma", metin: "Clifford'ın en çok vurguladığı nokta bu.", yanlis: "Kâr 10 TL, fiyat 50 TL; demek ki *markup* %20.", dogru: "*Markup* kârı ==maliyete== böler (10 ÷ 40 = %25); fiyata bölünce çıkan %20 *margin*'dir." }
      ]
    },
    {
      baslik: "*Competitive pricing* ve *positioning*",
      kisa: "Rakibin fiyatına bakılır; biraz altı ya da üstü bir konumlandırma kararıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚔️", terim: "Competitive pricing", tr: "rekabete dayalı fiyatlama", tanim: "Fiyatı, rakiplerin benzer ürünler için istediği fiyata bakarak belirlemek (aynısı, biraz altı ya da biraz üstü). Referans maliyet değil, ==rakibin fiyatı==dır.", ornek: "Sokaktaki simitçiler 20 liraya satıyorsa sen 50 liraya satamazsın." },
            { ikon: "📍", terim: "Positioning", tr: "konumlandırma", tanim: "Ürünü, fiyatı ve imajıyla pazarda bilinçli olarak belli bir yere yerleştirmek (ucuz taraf, pahalı taraf).", ornek: "BİM ucuz tarafta, Macrocenter pahalı tarafta durur." }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🛒", baslik: "Ucuz taraf", maddeler: ["Rakibin biraz altı", "\"Discount prices\" imajı", "Örnek: BİM"] },
          sag: { ikon: "🛍️", baslik: "Pahalı taraf", maddeler: ["Rakibin biraz üstü", "\"Premium prices\" imajı", "Örnek: Macrocenter"] },
          oyun: [
            { metin: "Rakiplerin 20 TL'lik simidine karşı 18 TL'lik simit satmak.", cevap: "sol", neden: "Rakibin biraz altı: ucuz taraf." },
            { metin: "Rakiplerden biraz pahalı ama kaliteli bir imajla satmak.", cevap: "sag", neden: "Rakibin biraz üstü: pahalı taraf." },
            { metin: "Fiyatı ucuz diye bilinen bir zincir gibi koymak.", cevap: "sol", neden: "Ucuz konum (BİM gibi)." },
            { metin: "Fiyat yüksek, mağaza şık; müşteri ayrıcalık arıyor.", cevap: "sag", neden: "Pahalı konum (Macrocenter gibi)." }
          ] }
      ]
    },
    {
      baslik: "*Penetration pricing* ve *loss leader*",
      kisa: "*Penetration* girişte geçici düşük fiyattır; *loss leader* tek ürünü zararına satar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚪", terim: "Penetration pricing", tr: "pazara sızma fiyatlaması", tanim: "Pazara çok düşük bir başlangıç fiyatıyla girip hızla müşteri ve pazar payı kazanmak; fiyatı sonra artırmak. Başta zarar bile edilebilir.", ornek: "Disney Plus 2019'da ayda yaklaşık 7 dolarla açıldı; sonra defalarca zam yaptı." },
            { ikon: "🥧", terim: "Market share", tr: "pazar payı", tanim: "Pazardaki toplam satışın bir işletmeye düşen payı.", ornek: "Tost pazarının %40'ı sende." },
            { ikon: "🧲", terim: "Loss leader pricing", tr: "zararına satış fiyatlaması", tanim: "Bir ürünü maliyetinin altında satarak müşteriyi çekmek; kârı müşterinin alacağı diğer, daha kârlı ürünlerden beklemek.", ornek: "Costco'nun 1,5 dolarlık sosisli menüsü 1985'ten beri zamlanmadı." }
          ] },
        { tip: "grafik", baslik: "Önce ucuza gir, sonra zam yap", xlabel: "Zaman", ylabel: "", xmax: 10, ymax: 10, xticks: [], yticks: [],
          ogeler: [
            { id: "fy", tip: "egri", renk: 1, noktalar: [[0.5, 2], [2.5, 2], [4.5, 2], [6.5, 2], [8.5, 2]], etiket: "Fiyat" },
            { id: "ps", tip: "egri", renk: 2, noktalar: [[0.5, 1], [2.5, 1], [4.5, 1], [6.5, 1], [8.5, 1]], etiket: "Pazar payı" }
          ],
          durumlar: [
            { metin: "Pazara ==çok düşük fiyatla== girersin (Disney Plus: ayda yaklaşık 7 dolar). Başta zarar bile edebilirsin." },
            { metin: "Ucuz fiyat hızla müşteri toplar: ==pazar payı== yükselir.", set: { ps: { noktalar: [[0.5, 1], [2.5, 3.5], [4.5, 6], [6.5, 7], [8.5, 7.5]] } } },
            { metin: "Pay büyüyünce fiyatı artırırsın (Disney Plus defalarca zam yaptı).", set: { fy: { noktalar: [[0.5, 2], [2.5, 2], [4.5, 3], [6.5, 5.5], [8.5, 7.5]] } } },
            { metin: "Risk: ucuza gelen müşteri, zam gelince ==gidebilir==.", set: { ps: { noktalar: [[0.5, 1], [2.5, 3.5], [4.5, 6], [6.5, 5.5], [8.5, 4]] } } }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🚪", baslik: "*Penetration pricing*", maddeler: ["Pazara girişte GEÇİCİ düşük fiyat", "Amaç: *market share*", "Fiyat sonra artar"] },
          sag: { ikon: "🧲", baslik: "*Loss leader pricing*", maddeler: ["TEK bir ürün zararına satılır", "Amaç: müşteriyi mağazaya çekmek", "Kâr sepetteki diğer ürünlerden gelir"] },
          oyun: [
            { metin: "Yeni bir yayın platformu ilk aylarda çok düşük aboneliğe giriyor, sonra zam yapıyor.", cevap: "sol", neden: "Girişte düşük fiyat, sonra artış: *penetration*." },
            { metin: "Costco'nun 1,5 dolarlık sosisli menüsü 1985'ten beri zamlanmadı.", cevap: "sag", neden: "Zararına satılan tek ürün, müşteriyi çeker: *loss leader*." },
            { metin: "Bir market, bir ürünü zararına satıp müşteri sepetteki diğer ürünleri alsın istiyor.", cevap: "sag", neden: "Kâr diğer ürünlerden: *loss leader*." },
            { metin: "Yeni bir uygulama, pazar payı kazanmak için fiyatını başta çok düşük tuttu.", cevap: "sol", neden: "Amaç pazar payı: *penetration*." }
          ] },
        { tip: "tuzak", baslik: "Penetration'ın riski", metin: "Düşük fiyat için gelen müşteri, fiyat artınca gidebilir.", yanlis: "Ucuza girip fiyatı artırmak her zaman başarılı olur.", dogru: "*Penetration*'ın riski sadakatsizliktir. Ayrıca *loss leader* ile karıştırma: *penetration* pazara girişte geçici düşük fiyattır, *loss leader* ise tek ürünün zararına satılmasıdır." }
      ]
    },
    {
      baslik: "Diğer fiyatlama stratejileri",
      kisa: "Abonelik, paket, freemium, dinamik ve psikolojik fiyat farklı amaçlara hizmet eder.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔁", terim: "Subscription pricing", tr: "abonelik fiyatlaması", tanim: "Tek seferlik fiyat yerine, sürekli erişim karşılığında düzenli aralıklarla ücret almak.", ornek: "Netflix'e her ay ödersin; oto detaylı temizlik de tek seferlik yerine abonelikle satılabilir." },
            { ikon: "🍔", terim: "Bundle pricing", tr: "paket fiyatlama", tanim: "Birkaç ürünü bir araya getirip tek ve indirimli bir fiyata satmak.", ornek: "Ayrı ayrı 300 TL tutan hamburger, patates ve içecek, menüde 240 TL." },
            { ikon: "🎮", terim: "Freemium pricing", tr: "freemium fiyatlama", tanim: "Temel sürümü bedava vermek, ek özellikler ya da ayrıcalıklar için para almak.", ornek: "Fortnite ücretsiz; kostümler ve battle pass paralı." },
            { ikon: "⚡", terim: "Dynamic pricing", tr: "dinamik fiyatlama", tanim: "Fiyatı talebe, zamana ya da pazar koşullarına göre sürekli değiştirmek.", ornek: "Yağmurda Uber pahalanır; bayram öncesi uçak bileti de." },
            { ikon: "💡", terim: "Psychological pricing", tr: "psikolojik fiyatlama", tanim: "Müşterinin fiyatı algılayışını etkilemek için tasarlanmış fiyat.", ornek: "100 TL yerine 99,90 TL: fark 10 kuruş ama göze ucuz gelir." }
          ] },
        { tip: "ornek", baslik: "Menü gerçekten ucuz mu?", durum: "Hamburger, patates ve içecek ayrı ayrı alınınca toplam 300 TL. Menüde 240 TL. Müşteri ne kadar tasarruf eder ve bu yüzde kaç?",
          adimlar: ["Tasarruf = 300 − 240 = 60 TL.", "Yüzde = 60 ÷ 300 = 0,20 → %20 indirim.", "Bu *bundle pricing*: paketlenen ürünler indirimli satılıyor."],
          sonuc: "Müşteri ==60 TL== (%20) kazanır." },
        { tip: "tuzak", baslik: "Premium ve freemium aynı yönde mi?", metin: "İkisi zıttır.", yanlis: "*Freemium*, *premium pricing*'in başka adıdır.", dogru: "*Premium pricing* fiyatı bilerek yüksek tutar (*value-based*'in bir türü). *Freemium* temel ürünü bedava verir, ek özellik için para alır." }
      ]
    },
    {
      baslik: "*Pricing power* ve *elasticity*",
      kisa: "Talep esnek olmadıkça fiyatlama gücü artar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💪", terim: "Pricing power", tr: "fiyatlama gücü", tanim: "Bir işletmenin, talebi ya da pazar payını önemli ölçüde kaybetmeden fiyat artırabilme gücü. Ürün rakiplerinkiyle neredeyse aynıysa azdır; kaliteli ya da farklılaşmış (*differentiated*) ise çoktur.", ornek: "Müşteri kaybetmeden zam yapabilmek." },
            { ikon: "📏", terim: "Price elasticity of demand", tr: "talebin fiyat esnekliği", tanim: "Talep edilen miktarın fiyat değişimine ne kadar duyarlı olduğunun ölçüsü.", ornek: "Fiyat %10 artınca satış ne kadar düştü?" },
            { ikon: "🌊", terim: "Elastic demand", tr: "esnek talep", tanim: "Fiyat değişince talep edilen miktarın oransal olarak daha çok değişmesi; müşteri fiyata çok duyarlı.", ornek: "%10 zam, satış %30 düştü." },
            { ikon: "🧱", terim: "Inelastic demand", tr: "esnek olmayan talep", tanim: "Fiyat değişince talep edilen miktarın oransal olarak daha az değişmesi; müşteri fiyata az duyarlı (zorunlu ihtiyaçlar).", ornek: "Benzin ve ilaç: %10 zam, satış yalnızca %2 düştü." }
          ] },
        { tip: "ornek", baslik: "Zam yaptık: talep esnek mi?", durum: "Fiyatı %10 artırınca bir üründe satış %30, başka bir üründe yalnızca %2 düşüyor. Hangisi esnek, hangisi esnek değil?",
          adimlar: ["Birinci ürün: %30 ÷ %10 = 3. Miktar fiyattan çok daha fazla değişti → esnek (*elastic*).", "İkinci ürün: %2 ÷ %10 = 0,2. Miktar fiyattan çok daha az değişti → esnek değil (*inelastic*).", "Esnek olmayan üründe zam yapmak kolaydır: *pricing power* yüksek."],
          sonuc: "Birinci ürün ==*elastic*==, ikinci ürün (benzin, ilaç gibi) ==*inelastic*==." },
        { tip: "grafik", baslik: "Aynı zam, iki farklı talep", xlabel: "Miktar", ylabel: "Fiyat", xmax: 10, ymax: 10, xticks: [], yticks: [{ v: 5, label: "5" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "el", tip: "cizgi", renk: 0, from: [1, 7], to: [9, 3], etiket: "Esnek" },
            { id: "in", tip: "cizgi", renk: 1, from: [3, 8], to: [6.5, 1], etiket: "Esnek değil", gizli: true },
            { id: "p5", tip: "cizgi", renk: 3, kesik: true, from: [0, 5], to: [10, 5], etiket: "", gizli: true },
            { id: "p6", tip: "cizgi", renk: 3, kesik: true, from: [0, 6], to: [10, 6], etiket: "", gizli: true },
            { id: "e5", tip: "nokta", x: 5, y: 5, etiket: "5", kilavuz: true, gizli: true },
            { id: "e6", tip: "nokta", x: 3, y: 6, etiket: "3", kilavuz: true, gizli: true },
            { id: "i5", tip: "nokta", x: 4.5, y: 5, etiket: "4,5", kilavuz: true, gizli: true },
            { id: "i6", tip: "nokta", x: 4, y: 6, etiket: "4", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "==Esnek talep==: eğri yatık. Müşteri fiyata çok duyarlı." },
            { metin: "Fiyat 5'ten 6'ya çıkar: miktar 5'ten 3'e ==çok düşer==.", goster: ["p5", "p6", "e5", "e6"] },
            { metin: "==Esnek olmayan talep==: eğri dik. Benzin ve ilaç gibi zorunlu ihtiyaçlar.", gizle: ["e5", "e6"], goster: ["in"] },
            { metin: "Fiyat 5'ten 6'ya çıkınca miktar 4,5'ten 4'e ==az düşer==: *pricing power* yüksek.", goster: ["i5", "i6"] }
          ] },
        { tip: "ikili", sol: { ikon: "🌊", baslik: "*Elastic*", maddeler: ["Fiyata çok duyarlı", "Zam yapınca satış çok düşer", "*Pricing power* az"] },
          sag: { ikon: "🧱", baslik: "*Inelastic*", maddeler: ["Fiyata az duyarlı", "Zam yapınca satış az düşer", "*Pricing power* çok"] },
          oyun: [
            { metin: "Ayakkabı fiyatı %10 arttı, satış %30 düştü.", cevap: "sol", neden: "Satış fiyattan çok daha fazla değişti: *elastic*." },
            { metin: "Benzin pahalansa da insanlar alıyor.", cevap: "sag", neden: "Zorunlu ihtiyaç: *inelastic*." },
            { metin: "İlaç fiyatı arttı, satış yalnızca %2 düştü.", cevap: "sag", neden: "Az duyarlılık: *inelastic*." },
            { metin: "Rakiplerinkiyle neredeyse aynı bir üründe fiyat artırınca müşteriler rakibe geçti.", cevap: "sol", neden: "Çok duyarlılık, az *pricing power*: *elastic*." }
          ] }
      ]
    },
    {
      baslik: "Fiyatın yasal sınırları",
      kisa: "Fiyat sabitleme yasa dışıdır; fahiş artış çoğu yerde yasaktır; fiyat ayrımcılığı çoğu zaman yasaldır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🤫", terim: "Price fixing", tr: "fiyat sabitleme", tanim: "Rakip işletmelerin fiyatı birlikte belirlemek için yaptığı yasa dışı anlaşma. Diğer adı *collusion*: rakiplerin rekabet etmek yerine gizlice iş birliği yapması.", ornek: "Kasabadaki bütün benzin istasyonu sahipleri gizlice buluşup galonu 20 dolardan satmaya karar veriyor." },
            { ikon: "🌪️", terim: "Price gouging", tr: "fahiş fiyat artırma", tanim: "Özellikle afet, kriz ya da kıtlık sırasında fiyatı aşırı ölçüde artırmak; birçok yerde yasa dışı.", ornek: "Selden sonra 10 liralık suyu 100 liraya satmak." },
            { ikon: "🎟️", terim: "Price discrimination", tr: "fiyat ayrımcılığı", tanim: "Aynı ürünü farklı müşterilere, ödemeye razı oldukları tutara göre farklı fiyatlarla satmak; çoğu zaman yasal.", ornek: "Sinemada öğrenci indirimi, uçak biletinde alış zamanına göre fiyat." }
          ] },
        { tip: "ikili", sol: { ikon: "🚫", baslik: "Yasa dışı", maddeler: ["*Price fixing* (*collusion*)", "*Price gouging* (birçok yerde)", "Irk, milliyet, cinsiyete göre fiyat farkı"] },
          sag: { ikon: "✅", baslik: "Yasal", maddeler: ["*Price discrimination* (çoğu zaman)", "Öğrenci, yaşlı indirimi", "Alış zamanına göre bilet fiyatı"] },
          oyun: [
            { metin: "Kasabadaki benzin istasyonu sahipleri gizlice buluşup fiyatı birlikte belirliyor.", cevap: "sol", neden: "Rakiplerin gizli anlaşması: *price fixing*, yasa dışı." },
            { metin: "Selden sonra 10 liralık su 100 liraya satılıyor.", cevap: "sol", neden: "Afette fahiş artış: *price gouging*, birçok yerde yasak." },
            { metin: "Sinema, öğrencilere indirimli bilet satıyor.", cevap: "sag", neden: "Ödeme isteğine göre farklı fiyat: yasal *price discrimination*." },
            { metin: "Bir mağaza, müşteriye ırkına göre farklı fiyat söylüyor.", cevap: "sol", neden: "Korunan özelliğe göre ayrım yasa dışıdır." }
          ] },
        { tip: "tuzak", baslik: "Adı kötü, kendisi yasal", metin: "*Price discrimination* adı kötü dursa da çoğu zaman yasal ve çok yaygındır.", yanlis: "Aynı ürünü farklı fiyata satmak her zaman yasa dışıdır.", dogru: "Yalnızca ırk, milliyet ve cinsiyet gibi korunan özelliklere göre fiyat koymak yasa dışıdır. *Price fixing* (*collusion*) ve birçok yerde *price gouging* yasaktır." }
      ]
    },
    {
      baslik: "Hangi fiyat? Duruma bağlı",
      kisa: "\"Hangi fiyat?\" sorusunun cevabı çoğu zaman duruma bağlıdır.",
      bloklar: [
        { tip: "tablo", baslik: "Hangi strateji, hangi soru?", head: ["Strateji", "Neye bakar?", "Örnek"], rows: [
            ["*Value-based*", "Müşterinin algıladığı değer", "Lüks çanta"],
            ["*Cost-based*", "Maliyet + kâr payı (*markup*)", "Müteahhit, tişört"],
            ["*Competitive*", "Rakibin fiyatı", "Simitçiler, taco tezgâhı"],
            ["*Penetration*", "Pazara girişte düşük fiyat, *market share*", "Disney Plus"],
            ["*Loss leader*", "Tek ürünü zararına sat, sepeti doldur", "Costco sosisli"],
            ["*Psychological*", "Fiyatın algılanışı", "99,90 TL"]
          ] },
        { tip: "not", metin: "Fiyatı belirleyen beş şey: müşteriler (*customers*), maliyet (*cost*), rakipler (*competitors*), hedefler (*goals*: pazar payı mı, kâr mı, imaj mı) ve *pricing power*. Fiyat yalnızca bir sayı değil; ürünün premium mu, ucuz mu, ayrıcalıklı mı, kelepir mi olduğunu söyleyen bir sinyaldir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Fiyat bir mesajdır; aynı ürün pahalı etiketle daha değerli görünür (*perceived value*).",
            "Dört ana strateji: *value-based* (müşterinin algısı), *cost-based* (maliyet + *markup*), *competitive* (rakip), *penetration* (ucuza gir, pay kazan).",
            "*Markup* = kâr ÷ maliyet; *margin* = kâr ÷ fiyat. Tişört ve kahve: %25 ve %20.",
            "*Competitive pricing* aynı zamanda *positioning*'dir: BİM ucuz, Macrocenter pahalı tarafta.",
            "*Penetration*'ın riski: ucuza gelen müşteri zamda gidebilir. *Loss leader*'da tek ürün zararına satılır.",
            "Diğer stratejiler: *premium*, *subscription*, *bundle* (300 → 240 TL), *freemium*, *dynamic*, *psychological*.",
            "*Pricing power*, talep *inelastic* oldukça artar; %10 zamda %30 düşüş *elastic*, %2 düşüş *inelastic*.",
            "*Price fixing* (*collusion*) yasa dışı; *price gouging* birçok yerde yasak; *price discrimination* çoğu zaman yasal.",
            "Fiyat; müşteriler, maliyet, rakipler, hedefler ve *pricing power*'a bağlıdır."
          ] }
      ]
    }
  ]
};
