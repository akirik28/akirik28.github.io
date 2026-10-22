/* Kitora not defteri · bf23 · 2.3 Pazar Araştırması
   Kaynak: ap-videolar/src/episodes/bf23 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf23",
  ozet: "Fikrine değil, kanıta âşık ol. Bu defterde *market research*'ün ne olduğunu, *quantitative* ile *qualitative* veriyi, *primary* ile *secondary* araştırmayı, *hypothesis* kurmayı, *desirable-feasible-viable* üçlüsünü, veri toplama yöntemlerini ve *data visualization* grafiklerini göreceksin.",
  bolumler: [
    {
      baslik: "Önce sor, sonra atla",
      bloklar: [
        { tip: "hikaye", ikon: "🚕", baslik: "Masaj koltuklu taksi",
          metin: "Bir sabah harika bir fikirle uyanıyorsun: içinde masaj koltuğu olan bir taksi. Hem yolculuk, hem rahatlama. Bütün birikimini hemen arabalara mı yatırırsın? Yoksa önce insanlara, \"böyle bir taksiye biner misiniz?\" diye mi sorarsın?" },
        { tip: "adimlar", baslik: "İki yol", adimlar: [
            { baslik: "1. yol: körü körüne atla", metin: "Birikimi hemen arabalara yatır. Fikir tutarsa harika; tutmazsa her şey gider." },
            { baslik: "2. yol: önce araştır", metin: "Olası müşterilere sor, veri topla. Fikri harcamadan önce test et." },
            { baslik: "Girişimcinin ilkesi", metin: "Başarılı girişimci körü körüne atlamaz: pazarı araştırır, müşteriyi dinler, fikrini test eder, ==sonra atlar==. Girişimcilik pervasızlık değil, stratejidir." }
          ] }
      ]
    },
    {
      baslik: "*Market research* nedir?",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔍", terim: "Market research", tr: "pazar araştırması", tanim: "Müşteriler, rakipler ve pazar hakkında bilgi toplayıp analiz ederek iş kararlarına yön verme süreci. Tahmin yerine kanıt.", ornek: "Taksiyi almadan önce 200 kişiye \"biner misiniz?\" diye sormak." },
            { ikon: "📌", terim: "Evidence-based decision", tr: "kanıta dayalı karar", tanim: "Sezgiyle değil, toplanan veriyle alınan karar.", ornek: "Anket sonucuna göre hangi tostun menüye gireceğine karar vermek." }
          ] },
        { tip: "formul", parcalar: [
            { t: "Müşteriler", alt: "kim, ne istiyor" }, "+",
            { t: "Rakipler", alt: "kim ne yapıyor" }, "+",
            { t: "Pazar", alt: "ne kadar büyük" }, "=",
            { t: "*Market research*", alt: "bilgi topla ve analiz et" }
          ], aciklama: "Bu üçü hakkında veri topla, analiz et, kararı ona göre ver." },
        { tip: "sayilar", ogeler: [
            { deger: 2, onek: "~", sonek: " milyar $", etiket: "Quibi'nin topladığı yatırım (yaklaşık 1,75 milyar $)" },
            { deger: 6, sonek: " ay", etiket: "yayına girdikten sonra kapanma kararı" }
          ] },
        { tip: "hikaye", ikon: "📱", baslik: "Quibi: araştırmayı atlamanın bedeli",
          metin: "*Quibi*, \"quick bites\" adıyla telefonda izlenecek, on dakikadan kısa, profesyonel yapım diziler sunuyordu. Pazarlamaya 470 milyon dolar, içeriğe 1 milyar dolar harcandı; bilinen toplam yatırım 2 milyar dolara yakındı. Ama izleyici gelmedi ve yayına girdikten altı ay sonra kapanacağını duyurdu. Videodaki küçük bir ayrıntı: uygulamadan ekran görüntüsü alınamıyordu, bu yüzden insanlar dizilerden kesit paylaşamıyordu." },
        { tip: "hikaye", ikon: "🛫", baslik: "Veri işin ne olduğunu bile değiştirir",
          metin: "*The Reluctant Fundamentalist* filminde ışınlama yapan hayalî bir şirkete 48 milyar dolar değer biçiliyor. Kahraman \"şirket değersiz\" der: şirketin kendi anketine göre yolcuların %72'si ne kadar güvenli olursa olsun silindire girmez, ama %94'ü bagajının ışınlanmasına razıdır. Sonuç: \"işiniz yolculuk değil, kargo.\"" }
      ]
    },
    {
      baslik: "*Quantitative* ve *qualitative* veri",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔢", baslik: "*Quantitative data*", maddeler: ["Sayıdır", "Kaç kişi? Ne kadar? Ne sıklıkta?", "==Ne olduğunu== söyler", "Talebi tahmin etmeye yarar"] },
          sag: { ikon: "💬", baslik: "*Qualitative data*", maddeler: ["Betimleyicidir: görüş, duygu, neden", "İnsanlar ne düşünüyor, neden öyle davranıyor?", "==Nedenini== söyler", "Çoğunlukla *interview*, *focus group*, açık uçlu sorulardan gelir"] },
          oyun: [
            { metin: "200 öğrencinin 140'ı haftada iki kez tost alıyor.", cevap: "sol", neden: "Kaç kişi sorusunun cevabı, sayı: *quantitative*." },
            { metin: "Öğrenciler \"kantinde sıra çok uzun\" diyor.", cevap: "sag", neden: "Neden ve düşünce: *qualitative*." },
            { metin: "Çevrede kaç pizzacı olduğu.", cevap: "sol", neden: "Sayı: *quantitative*." },
            { metin: "Müşterinin neden şu pizzayı ötekine tercih ettiği.", cevap: "sag", neden: "Neden: *qualitative*." },
            { metin: "Kaç müşterinin ekstra büyük pizzaya para verdiği.", cevap: "sol", neden: "Sayı: *quantitative*." }
          ] },
        { tip: "ornek", baslik: "Tostçu açıyoruz: yüzdeyi hesapla", durum: "Okulunun karşısına tostçu açacaksın. 200 öğrenciye soruyorsun: 140'ı haftada iki kez tost alıyor. Bu kaç yüzde ve hangi tür veri?",
          adimlar: ["Oran = 140 ÷ 200 = 0,70.", "Yüzde: 0,70 × 100 = %70.", "Sayı ve yüzde cevabı verdiği için bu *quantitative*. \"Kantinde sıra çok uzun\" yorumu ise nedeni anlatır: *qualitative*."],
          sonuc: "%70 haftada iki kez tost alıyor (==*quantitative*==). Biri ne olduğunu, diğeri nedenini söyler." },
        { tip: "tuzak", baslik: "Sayı mı, neden mi?", metin: "Tek cümlelik özet: ==*quantitative* ne olduğunu, *qualitative* nedenini söyler==.", yanlis: "Yüzde ve sayı içeren her ifade *qualitative*'dir, çünkü müşteriyle ilgilidir.", dogru: "Sayı görürsen *quantitative*; görüş, duygu, neden görürsen *qualitative*." }
      ]
    },
    {
      baslik: "*Primary* ve *secondary* araştırma",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧑‍🔬", baslik: "*Primary-source research*", maddeler: ["Yepyeni veriyi doğrudan müşteriden KENDİN toplarsın", "Anket, görüşme, gözlem, deney", "Tam senin sorunu cevaplar ama daha yavaş ve pahalı"] },
          sag: { ikon: "📚", baslik: "*Secondary-source research*", maddeler: ["BAŞKASININ topladığı hazır veriyi kullanırsın", "Devlet raporu, nüfus sayımı, sektör raporu, haber, akademik çalışma", "==Daha ucuz ve hızlı== ama tam senin sorunu cevaplamayabilir"] },
          oyun: [
            { metin: "Mahalle sakinlerine sevdikleri malzemeleri soran bir anket yaptın.", cevap: "sol", neden: "Veriyi kendin topladın: *primary*." },
            { metin: "TÜİK'in ilçendeki nüfus rakamlarını inceledin.", cevap: "sag", neden: "Başkasının hazır verisi: *secondary*." },
            { metin: "Hazır bir \"Pizza Crust Market\" sektör raporu satın aldın.", cevap: "sag", neden: "Raporu başkası hazırladı: *secondary*." },
            { metin: "Beş müşteriyle yüz yüze görüşme yaptın.", cevap: "sol", neden: "Yeni veriyi doğrudan müşteriden aldın: *primary*." },
            { metin: "Kafe sahibi, nüfus sayımı verilerinden ilçedeki yaş dağılımına baktı.", cevap: "sag", neden: "Veriyi kendisi toplamadı: *secondary*." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧑‍🔬", terim: "Primary-source research", tr: "birincil kaynak araştırması", tanim: "Anket, görüşme, gözlem ya da deneyle yepyeni veriyi doğrudan müşteriden işletmenin kendisinin toplaması.", ornek: "Mahalle sakinlerine sevdikleri malzemeleri soran anket." },
            { ikon: "📚", terim: "Secondary-source research", tr: "ikincil kaynak araştırması", tanim: "Başkasının daha önce topladığı hazır veriyi kullanmak: devlet raporları, nüfus sayımı, sektör ve pazar raporları, haberler, akademik araştırmalar.", ornek: "TÜİK nüfus rakamları; bölgeye taşınan kişi sayısı, ortalama hane geliri, mahalledeki rakip sayısı." }
          ] },
        { tip: "tablo", baslik: "Artı ve eksi", head: ["", "*Primary*", "*Secondary*"], rows: [
            ["Kim topluyor?", "İşletme kendisi", "Başkası"],
            ["Maliyet ve hız", "Daha pahalı, yavaş", "Daha ucuz, hızlı"],
            ["Uygunluk", "Tam senin sorunu cevaplar", "Karar için gereken bilgiyi tam vermeyebilir"],
            ["Örnek", "Anket", "TÜİK verisi"]
          ], not: "TÜİK ilçende kaç genç yaşadığını bilir; tostunu severler mi, bilemez." },
        { tip: "tuzak", baslik: "Ölçüt: kim topladı?", metin: "*Primary* ile *secondary* ayrımı veriyi kimin topladığına bakar; verinin konusu ya da sayısal olup olmaması ölçüt değildir.", yanlis: "Sayısal veri hep *secondary*, görüş verisi hep *primary*'dir.", dogru: "Yeni veriyi işletme kendisi topluyorsa *primary*; başkasının topladığı hazır veriyi kullanıyorsa *secondary*." }
      ]
    },
    {
      baslik: "*Hypothesis*: test edilebilir tahmin",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧪", terim: "Hypothesis", tr: "hipotez", tanim: "Müşteri, ürün ya da pazar hakkında veriyle test edilebilen, bilgiye dayalı tahmin. (Videodaki kartta *business hypothesis*.) İçinde ölçülebilir bir beklenti bulunur.", ornek: "Ayran hediye edersem öğle satışım 100 tosttan 130'a çıkar." }
          ] },
        { tip: "adimlar", baslik: "Hipotez nasıl sınanır?", adimlar: [
            { baslik: "Kur", metin: "\"Ayran hediye edersem öğle satışım 100 tosttan 130'a çıkar.\" Sayı var, yani ölçülebilir." },
            { baslik: "Dene", metin: "Bir hafta boyunca ayran hediye et." },
            { baslik: "Veriye bak", metin: "Veri hipotezi ya ==destekler== (*support*) ya ==çürütür== (*reject*)." },
            { baslik: "Sonuç", metin: "Çürüttüyse üzülme: tutmayacak bir fikre para gömmekten kurtuldun." }
          ] },
        { tip: "grafik", baslik: "Ayran hediyesi işe yaradı mı?", xlabel: "Hafta", ylabel: "Öğle tost satışı", xmax: 3, ymax: 150, xticks: [{ v: 1, label: "Önce" }, { v: 2, label: "Ayranlı" }], yticks: [{ v: 100, label: "100" }, { v: 130, label: "130" }],
          ogeler: [
            { id: "h1", tip: "alan", renk: 0, noktalar: [[0.6, 0], [1.4, 0], [1.4, 0], [0.6, 0]] },
            { id: "h2", tip: "alan", renk: 1, noktalar: [[1.6, 0], [2.4, 0], [2.4, 0], [1.6, 0]] },
            { id: "hed", tip: "cizgi", renk: 3, kesik: true, from: [0, 130], to: [3, 130], etiket: "", gizli: true },
            { id: "hl", tip: "yazi", x: 2.9, y: 138, metin: "Hedef: 130", hiza: "end", gizli: true },
            { id: "ok", tip: "yazi", x: 2, y: 112, metin: "Destekledi", gizli: true },
            { id: "no", tip: "yazi", x: 2, y: 96, metin: "Çürüttü", gizli: true }
          ],
          durumlar: [
            { metin: "Ayran vermeden önce günde 100 tost satılıyor.", set: { h1: { noktalar: [[0.6, 0], [1.4, 0], [1.4, 100], [0.6, 100]] } } },
            { metin: "Hipotez: ayran hediye edersem satış ==130=='a çıkar.", goster: ["hed", "hl"] },
            { metin: "Bir hafta sonra satış 130. Veri hipotezi ==destekledi==.", set: { h2: { noktalar: [[1.6, 0], [2.4, 0], [2.4, 130], [1.6, 130]] } }, goster: ["ok"] },
            { metin: "Satış 100'de kalsaydı veri hipotezi ==çürütürdü==. O da değerli bilgi: tutmayacak fikre para gömmedin.", set: { h2: { noktalar: [[1.6, 0], [2.4, 0], [2.4, 100], [1.6, 100]] } }, gizle: ["ok"], goster: ["no"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "💰", terim: "Hypothesis örneği 1", tr: "fiyat", tanim: "\"Bu ay fiyatı %10 indirirsek satış %30 artar.\"", ornek: "Ölçülebilir: satışta %30'luk artış var mı, bakılır." },
            { ikon: "🎓", terim: "Hypothesis örneği 2", tr: "anket", tanim: "\"Ankete katılan lise öğrencilerinin en az %60'ı ürünümüzü almak ister.\"", ornek: "Ölçülebilir: ankette %60 eşiği aşılıyor mu, bakılır." }
          ] },
        { tip: "tuzak", baslik: "Yanlış çıkan hipotez", metin: "Hipotezin yanlış çıkması başarısızlık değildir.", yanlis: "Hipotez çürüdüyse araştırma başarısız olmuştur.", dogru: "Tutmayacak bir fikri erken fark etmek, *market research*'ün ana amaçlarından biridir. İyi hipotez ==test edilebilir== olmalıdır." }
      ]
    },
    {
      baslik: "Üç soru: *desirable*, *feasible*, *viable*",
      bloklar: [
        { tip: "harita", merkez: "Fikre ilerlemeden önce üç soru", dallar: [
            { baslik: "*Desirability*", alt: "Müşteri bunu gerçekten istiyor mu?" },
            { baslik: "*Feasibility*", alt: "Elimdeki kaynak, beceri, teknoloji ve zamanla yapabilir miyim?" },
            { baslik: "*Viability*", alt: "Yeterince kâr bırakır mı?" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "❤️", terim: "Desirability", tr: "istenirlik", tanim: "Ürünün bir sorunu çözme ya da müşterinin ihtiyacını ve isteğini karşılama derecesi: müşteri bunu gerçekten istiyor mu?", ornek: "Okulun karşısındaki tostçuyu öğrenciler istiyor mu?" },
            { ikon: "🛠️", terim: "Feasibility", tr: "yapılabilirlik", tanim: "Ürünü eldeki kaynak, teknoloji, beceri ve zamanla üretebilme gücü: yapabilir miyim?", ornek: "Tost makinesi, tezgâh ve ustan var mı?" },
            { ikon: "💹", terim: "Viability", tr: "kârlılık / sürdürülebilirlik", tanim: "Ürünün ya da kararın uğraşmaya değecek kadar kâr getirebilmesi: kâr bırakır mı?", ornek: "Tost 80 TL'ye satılıp 50 TL'ye mal oluyorsa tanesinden 30 TL kalır." }
          ] },
        { tip: "ornek", baslik: "Tostçu kâr bırakır mı? (*viability*)", durum: "Tostu 80 liraya satıp 50 liraya mal ediyorsun. Günde 100 tost satarsan günlük kâr ne kadar?",
          adimlar: ["Tek tostta kâr = 80 − 50 = 30 TL.", "Günlük kâr = 30 × 100 = 3.000 TL.", "Müşteri istiyor (*desirable*), yapabiliyorsun (*feasible*), kâr da kalıyor (*viable*)."],
          sonuc: "Günlük kâr = ==3.000 TL==; üçüne de evet, ilerle." },
        { tip: "tuzak", baslik: "Üçü birden evet olmalı", metin: "Sınavda üç soruyu birbirinin yerine koyma.", yanlis: "Müşteri istiyorsa (*desirable*) iş otomatik olarak kârlıdır.", dogru: "*Desirable* = müşteri istiyor mu; *feasible* = yapabilir miyim; *viable* = kâr getirir mi. ==Üçüne de evet== diyorsan ilerle." }
      ]
    },
    {
      baslik: "Veri toplama yöntemleri",
      bloklar: [
        { tip: "harita", merkez: "Veri toplama yöntemleri", dallar: [
            { baslik: "*Survey*", alt: "aynı soruları çok kişiye sor" },
            { baslik: "*Interview*", alt: "tek kişiyle birebir, derinlemesine" },
            { baslik: "*Focus group*", alt: "küçük grup birlikte tartışır" },
            { baslik: "*Observation*", alt: "sorma, izle" },
            { baslik: "*Experiment*", alt: "tek şeyi değiştir, etkisini ölç" },
            { baslik: "*A-B testing*", alt: "iki versiyonu karşılaştır" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "📋", terim: "Survey", tr: "anket", tanim: "Aynı soruları çok sayıda kişiye sorarak veri toplama yöntemi.", ornek: "200 öğrenciye \"Haftada kaç kez tost alıyorsun?\" diye sormak." },
            { ikon: "✍️", terim: "Open-ended question", tr: "açık uçlu soru", tanim: "Şık vermeyen, kişinin görüşünü kendi cümleleriyle yazdığı soru. *Qualitative data* üretir.", ornek: "\"Tostumuzda neyi değiştirirdin?\"" },
            { ikon: "🎤", terim: "Interview", tr: "derinlemesine görüşme", tanim: "Tek bir kişiyle birebir yapılan, ayrıntılı görüş ve içgörü toplayan görüşme.", ornek: "Bir müşteriyle yarım saat sohbet etmek." },
            { ikon: "👥", terim: "Focus group", tr: "odak grubu", tanim: "Bir ürün, hizmet ya da fikir hakkında derinlemesine geri bildirim almak için yapılan küçük grup tartışması.", ornek: "Sekiz öğrenciye üç tost tattırıp neden sevdiklerini dinlemek." },
            { ikon: "👀", terim: "Observation", tr: "gözlem", tanim: "Soru sormadan, müşterilerin gerçek hayatta nasıl davrandığını izleyerek yapılan araştırma.", ornek: "Kantin sırasında kaç kişi bekliyor, kaçı vazgeçiyor?" },
            { ikon: "⚗️", terim: "Experiment", tr: "deney", tanim: "Tek bir etkeni değiştirip bunun müşteri davranışına etkisini ölçen yöntem.", ornek: "Sadece fiyatı değiştirip satışa bakmak." },
            { ikon: "🅰️", terim: "A-B testing", tr: "A/B testi", tanim: "Bir ürünün, sitenin, reklamın ya da başka bir pazarlama ögesinin iki versiyonunu karşılaştırıp hangisinin daha iyi sonuç verdiğini bulan deney türü.", ornek: "Netflix'in aynı diziye farklı kapak görselleri denemesi; çok tıklanan kalır. \"Buy Now\" butonunun rengi bile sonucu değiştirir." }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "📋", baslik: "*Survey*", maddeler: ["Aynı sorular, ÇOK kişiye", "Sayısal sonuç (yüzde) verir", "Şıklı sorular"] },
          sag: { ikon: "🎤", baslik: "*Interview*", maddeler: ["TEK kişiyle birebir", "Derin, ayrıntılı görüş", "Neden sorusunu cevaplar"] },
          oyun: [
            { metin: "200 öğrenciye aynı beş soru soruldu.", cevap: "sol", neden: "Aynı sorular, çok kişi: *survey*." },
            { metin: "Bir müşteriyle yarım saat süren, kapsamlı sohbet.", cevap: "sag", neden: "Tek kişi, derinlemesine: *interview*." },
            { metin: "Online forma 1.000 kişi katıldı.", cevap: "sol", neden: "Çok kişi, aynı sorular: *survey*." },
            { metin: "Bir müşteriye \"Neden bu tostu seçtin?\" diye ayrıntılı soruldu.", cevap: "sag", neden: "Birebir görüşme: *interview*." }
          ] },
        { tip: "tuzak", baslik: "Videodaki ekran hatası", metin: "Videoda *survey* ve *interview* tanım kartları ekranda yer değiştirmiş: *Survey* kartında birebir görüşme, *interview* kartında anket tanımı yazıyor.", yanlis: "*Survey* tek kişiyle birebir derinlemesine konuşmadır.", dogru: "*Survey* aynı soruları çok kişiye sorar; *interview* tek kişiyle birebir konuşmadır. *A-B testing*, bir *experiment* türüdür." },
        { tip: "tuzak", baslik: "Sormak mı, izlemek mi?", metin: "İnsanlar söylediklerini her zaman yapmaz.", yanlis: "Müşterinin ne yaptığını öğrenmek için tek yol ona sormaktır.", dogru: "*Observation* müşterinin gerçekte ne yaptığına bakar; *experiment* tek bir şeyi değiştirip etkisini ölçer. Küçük değişiklikler büyük fark yaratabilir: her şeyi test et." }
      ]
    },
    {
      baslik: "Araştırmanın sınırları",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "İyi veri", maddeler: ["Tarafsız sorular", "Olası müşteriden alınan geniş örnek", "Hem sayı hem neden"] },
          sag: { ikon: "🗑️", baslik: "Kötü veri", maddeler: ["*Leading question*: \"Tostlarımız harika, değil mi?\"", "Yalnızca arkadaşlara sormak (kırmamak için evet derler)", "Olası müşteriyle hiç konuşmamak"] },
          oyun: [
            { metin: "\"Tostlarımız harika, değil mi?\"", cevap: "sag", neden: "Cevabı içinde taşıyan yönlendirici soru: *leading question*." },
            { metin: "Okulun karşısından geçen 200 rastgele öğrenciye tarafsız sorular sormak.", cevap: "sol", neden: "Geniş ve tarafsız örnek: iyi veri." },
            { metin: "Anketi sadece en yakın üç arkadaşına yapmak.", cevap: "sag", neden: "Kırmamak için evet derler: kötü veri." },
            { metin: "Hiçbir olası müşteriyle konuşmadan ürünü çıkarmak.", cevap: "sag", neden: "Araştırma yok: kötü karar." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧲", terim: "Leading question", tr: "yönlendirici soru", tanim: "Cevabı içinde taşıyan, kişiyi belli bir yanıta iten soru; veriyi bozar.", ornek: "\"Tostlarımız harika, değil mi?\"" },
            { ikon: "🗑️", terim: "Garbage in, garbage out", tr: "çöp girerse çöp çıkar", tanim: "Kalitesiz veriyle alınan karar da kalitesiz olur.", ornek: "Sadece arkadaşlara sorulan anket, kötü bir menü kararına yol açar." },
            { ikon: "🎲", terim: "Calculated risk", tr: "hesaplı risk", tanim: "Araştırma riski azaltır ama sıfırlamaz: zevkler değişir, rakipler gelir, teknoloji gelişir.", ornek: "Anket güzel çıktı ama yeni bir rakip kantin açtı." },
            { ikon: "♻️", terim: "Ongoing process", tr: "sürekli süreç", tanim: "*Market research* bir kerelik değildir; işletme büyüdükçe veri toplamaya ve varsayımları test etmeye devam edilir.", ornek: "Her yıl yeni menü için yeniden anket yapmak." }
          ] },
        { tip: "tuzak", baslik: "Araştırma garanti değildir", metin: "Güvenilir veriyle karar veren işletme, tahminle hareket edenden genellikle daha başarılıdır; ama garanti yoktur.", yanlis: "Araştırma yaptıysam başarısızlık riski sıfırdır.", dogru: "*Market research* riski azaltır ama sıfırlamaz; bu yüzden ==sürekli yapılır==. Kötü veri, kötü karardır (*garbage in, garbage out*)." }
      ]
    },
    {
      baslik: "*Data visualization*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Data visualization", tr: "veri görselleştirme", tanim: "Veriyi, örüntü ve eğilimler kolay görülsün diye çizelge ve grafiklerle sunmak.", ornek: "Tost satışlarını sayı tablosu yerine grafikle göstermek." },
            { ikon: "📊", terim: "Bar chart", tr: "sütun grafik", tanim: "Değerleri kategoriler arasında karşılaştırır.", ornek: "Kaşarlı 60, karışık 90, sucuklu 50 adet." },
            { ikon: "📉", terim: "Line graph", tr: "çizgi grafik", tanim: "Veri noktalarını çizgiyle birleştirip zaman içindeki değişimi ve eğilimi gösterir.", ornek: "Aylık tost satışı artıyor mu?" },
            { ikon: "🥧", terim: "Pie chart", tr: "pasta grafik", tanim: "Bir bütünün parçalarını yüzde olarak gösterir.", ornek: "Tost satışının %40'ı sende, %60'ı kantinde." },
            { ikon: "🍰", terim: "Market share", tr: "pazar payı", tanim: "Bir işletmenin, pazardaki toplam satış içindeki yüzdelik payı.", ornek: "Bu pazarda %40 payın var." }
          ] },
        { tip: "grafik", baslik: "Bar chart: hangi tost çok satıyor?", xlabel: "Tost türü", ylabel: "Satılan adet", xmax: 4, ymax: 100, xticks: [{ v: 1, label: "Kaşarlı" }, { v: 2, label: "Karışık" }, { v: 3, label: "Sucuklu" }], yticks: [{ v: 50, label: "50" }, { v: 60, label: "60" }, { v: 90, label: "90" }],
          ogeler: [
            { id: "k1", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "k2", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "k3", tip: "alan", renk: 2, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "v1", tip: "yazi", x: 1, y: 66, metin: "60", gizli: true },
            { id: "v2", tip: "yazi", x: 2, y: 96, metin: "90", gizli: true },
            { id: "v3", tip: "yazi", x: 3, y: 56, metin: "50", gizli: true },
            { id: "en", tip: "yazi", x: 3.4, y: 85, metin: "En çok: karışık", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Kaşarlı tostlar: ==60== adet.", set: { k1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 60], [0.65, 60]] } }, goster: ["v1"] },
            { metin: "Karışık tostlar: ==90== adet.", set: { k2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 90], [1.65, 90]] } }, goster: ["v2"] },
            { metin: "Sucuklu tostlar: ==50== adet.", set: { k3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 50], [2.65, 50]] } }, goster: ["v3"] },
            { metin: "Sütunlar kategorileri yan yana karşılaştırır: en çok satan ==karışık==.", goster: ["en"] }
          ] },
        { tip: "grafik", baslik: "Line graph: aylık satış eğilimi", xlabel: "Ay", ylabel: "Satış (adet)", xmax: 6, ymax: 100, xticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 6, label: "6" }], yticks: [{ v: 40, label: "40" }, { v: 95, label: "95" }],
          ogeler: [
            { id: "ln", tip: "egri", renk: 1, noktalar: [[1, 40], [2, 40], [3, 40], [4, 40], [5, 40], [6, 40]], etiket: "" },
            { id: "yz", tip: "yazi", x: 3.5, y: 90, metin: "Eğilim: yukarı", gizli: true }
          ],
          durumlar: [
            { metin: "İlk ay satış 40. Çizgi grafik, zaman içindeki değişimi gösterir." },
            { metin: "Aylar geçtikçe satış tırmanıyor: 48, 55, 70, 78.", set: { ln: { noktalar: [[1, 40], [2, 48], [3, 55], [4, 70], [5, 78], [6, 78]] } } },
            { metin: "Altıncı ayda 95: aylık satışın ==artıyor==.", set: { ln: { noktalar: [[1, 40], [2, 48], [3, 55], [4, 70], [5, 78], [6, 95]] } }, goster: ["yz"] }
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 40, sonek: "%", etiket: "tost pazarında senin payın" },
            { deger: 60, sonek: "%", etiket: "kantinin payı (pasta grafiğin diğer dilimi)" }
          ] },
        { tip: "ikili", sol: { ikon: "📊", baslik: "Bar chart", maddeler: ["Kategorileri karşılaştırır", "Hangisi daha büyük?"] },
          sag: { ikon: "📉", baslik: "Line graph", maddeler: ["Zaman içindeki eğilimi gösterir", "Artıyor mu, azalıyor mu?"] },
          oyun: [
            { metin: "Üç tost türünün satışını yan yana görmek.", cevap: "sol", neden: "Kategori karşılaştırması: bar chart." },
            { metin: "Son altı ayda aylık satışın nasıl değiştiğini görmek.", cevap: "sag", neden: "Zaman içindeki eğilim: line graph." },
            { metin: "Farklı ürünlerin satışını kıyaslamak.", cevap: "sol", neden: "Kategoriler arası: bar chart." },
            { metin: "Yıllık gelirin yıldan yıla gidişini izlemek.", cevap: "sag", neden: "Zaman serisi: line graph." }
          ] },
        { tip: "tuzak", baslik: "Doğru grafik", metin: "Clifford, bu grafikleri yorumlamanın derste sık sık isteneceğini söylüyor.", yanlis: "Pazar payını göstermek için en iyi seçim *line graph*'tır.", dogru: "*Bar chart* kategorileri karşılaştırır, *line graph* zaman içindeki eğilimi gösterir, *pie chart* bir bütünün nasıl bölündüğünü (örneğin *market share*) gösterir." }
      ]
    },
    {
      baslik: "Mini sınav",
      bloklar: [
        { tip: "ornek", baslik: "Hangi araştırma türü?", durum: "Bir kafe sahibi, devletin yayımladığı nüfus sayımı verilerinden ilçedeki yaş dağılımına bakıyor. Bu hangi araştırma türü?",
          adimlar: ["Ölçüt: veriyi kim topladı?", "Nüfus sayımı verisini devlet topladı; kafe sahibi hazır veriyi kullandı.", "Anket yapsaydı veriyi kendisi toplayacaktı: *primary* olurdu."],
          sonuc: "==*Secondary-source research*==: veriyi kendisi toplamadı, hazır veriyi kullandı." },
        { tip: "not", metin: "Kapanış cümlesi: ==fikrine değil, kanıta âşık ol==. Pazar araştırmasını sezgini haklı çıkarmak için değil, daha iyi karar vermek için kullan." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Market research*: müşteriler, rakipler ve pazar hakkında veri toplayıp analiz etmek; tahmin değil, kanıt. (Quibi araştırmayı atladı ve altı ayda kapandı.)",
            "*Quantitative* sayıdır ve ne olduğunu söyler; *qualitative* nedeni anlatır.",
            "*Primary* araştırmada veriyi kendin toplarsın; *secondary*'de başkasının hazır verisini kullanırsın (daha ucuz ve hızlı ama tam uymayabilir).",
            "*Hypothesis* test edilebilir olmalıdır; veri onu destekler ya da çürütür. Çürümesi başarısızlık değildir.",
            "Üç soru: *desirable* (istiyor mu), *feasible* (yapabilir miyim), *viable* (kâr bırakır mı). Üçüne de evet, ilerle.",
            "Yöntemler: *survey* (çok kişi), *interview* (tek kişi), *focus group*, *observation*, *experiment*, *A-B testing*.",
            "*Leading question*, yalnızca arkadaşlara sormak ve müşteriyle konuşmamak kötü veridir: *garbage in, garbage out*.",
            "Araştırma riski azaltır ama sıfırlamaz; zevkler değişir, rakipler gelir. Bu yüzden sürekli yapılır.",
            "*Bar chart* kategorileri karşılaştırır, *line graph* eğilimi gösterir, *pie chart* bütünün bölünüşünü (*market share*) gösterir.",
            "Fikrine değil, kanıta âşık ol."
          ] }
      ]
    }
  ]
};
