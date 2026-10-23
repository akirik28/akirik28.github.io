/* Kitpath not defteri · py302 · 3.2 Yaşam Boyu Fiziksel Gelişim
   Kaynak: AP Psychology CED (2024) Topic 3.2. Blok türleri: /ap/_kit/defter.js başı.
   Not: motor dönüm noktası aralıkları ve büyüme hızı eğrileri yaklaşık, şematik değerlerdir. */
window.DEFTER = {
  slug: "py302",
  amac: "Bu konu bedenin yaşam boyu nasıl geliştiğini ve bunun davranışı nasıl etkilediğini anlatıyor. Doğum öncesi etkenleri, bebeklikteki refleksleri ve motor becerileri, kritik dönemleri, ergenlikteki değişimleri ve yetişkinlikteki yavaş değişimi öğreneceksin.",
  bolumler: [
    {
      baslik: "Doğum öncesi: bebeği etkileyen etkenler",
      kisa: "Anne karnındaki ortam ve genler, bebeğin gelişimini daha doğmadan etkiler.",
      bloklar: [
        { tip: "harita", merkez: "Doğum öncesi gelişimi etkileyenler", dallar: [
            { baslik: "*Teratogens*", alt: "Zarar verebilen madde ya da etkenler: alkol, sigara, uyuşturucu" },
            { baslik: "Anne hastalığı", alt: "Bazı enfeksiyonlar, ör. kızamıkçık" },
            { baslik: "Genetik mutasyonlar", alt: "Kalıtımla gelen ya da sonradan oluşan gen ve kromozom farklılıkları" },
            { baslik: "Hormonal etkenler", alt: "Anne ve bebeğin hormon ortamı" },
            { baslik: "Çevresel etkenler", alt: "Beslenme, kirlilik, yoğun ve uzun süren stres" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "⚠️", terim: "Teratogen", tr: "gelişimi bozabilen etken", tanim: "Gelişen bebeğe zarar verebilen madde ya da etken. Etkisi ==ne zaman== ve ==ne kadar== maruz kalındığına bağlıdır.", ornek: "Hamilelikte alkol, sigara ve bazı ilaçlar." },
            { ikon: "🍷", terim: "Fetal alcohol spectrum disorders", tr: "fetal alkol spektrum bozuklukları", tanim: "Anne karnında alkole maruz kalan bebeklerde görülebilen fiziksel, öğrenme ve davranış güçlükleri. Bilinen güvenli bir alkol miktarı yoktur.", ornek: "Dikkat ve öğrenme güçlüğü, yüz özelliklerinde farklılıklar." }
          ] },
        { tip: "tuzak", metin: "Anne karnı bebeği her şeyden korumaz; alkol gibi birçok madde ve bazı enfeksiyonlar bebeğe ulaşabilir. (Zigot, embriyo ve fetüs evreleri sınav kapsamı dışındadır; ezberlemene gerek yok.)", yanlis: "Plasenta zararlı her maddeyi süzer; hamilelikte maruz kalınan etkenler bebeği etkilemez.", dogru: "Teratogenler ==doğum öncesi gelişimi etkileyebilir==; etki zamanlamaya ve miktara bağlıdır." }
      ]
    },
    {
      baslik: "Bebeklik ve çocuklukta motor gelişim",
      kisa: "Motor gelişimin sırası genelde aynıdır; zamanlaması bebekten bebeğe değişir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🤏", baslik: "*Fine motor* (ince motor)", maddeler: ["Küçük kasların koordinasyonu", "Parmaklarla yapılan işler: kavrama, yazı yazma"] },
          sag: { ikon: "🏃", baslik: "*Gross motor* (kaba motor)", maddeler: ["Büyük kasların koordinasyonu", "Oturma, emekleme, yürüme, koşma"] },
          oyun: [
            { metin: "Bebeğin küçük bir mamayı iki parmağıyla tutması.", cevap: "sol", neden: "Parmak ve el koordinasyonu: *fine motor*." },
            { metin: "Çocuğun merdiven çıkması.", cevap: "sag", neden: "Bacak ve gövde gibi büyük kasların işi: *gross motor*." },
            { metin: "Çocuğun kalemi tutup harf çizmesi.", cevap: "sol", neden: "Küçük kasların koordinasyonu: *fine motor*." },
            { metin: "Bebeğin desteksiz oturmayı öğrenmesi.", cevap: "sag", neden: "Gövde kaslarının kontrolü: *gross motor*." }
          ] },
        { tip: "grafik", baslik: "Her bebekte sıra aynı, zamanlama farklı (yaklaşık aralıklar)", xlabel: "Yaş (ay)", ylabel: "", xmax: 20, ymax: 10,
          xticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }, { v: 16, label: "16" }],
          ogeler: [
            { id: "oL", tip: "yazi", x: 4, y: 3.2, metin: "Desteksiz oturma", hiza: "start", gizli: true },
            { id: "oturma", tip: "alan", renk: 0, noktalar: [[4, 1.4], [4, 1.4], [4, 2.6], [4, 2.6]], gizli: true },
            { id: "oM", tip: "nokta", renk: 0, x: 6, y: 2, etiket: "", gizli: true },
            { id: "eL", tip: "yazi", x: 5, y: 6.2, metin: "Emekleme", hiza: "start", gizli: true },
            { id: "emekleme", tip: "alan", renk: 1, noktalar: [[5, 4.4], [5, 4.4], [5, 5.6], [5, 5.6]], gizli: true },
            { id: "eM", tip: "nokta", renk: 1, x: 8.5, y: 5, etiket: "", gizli: true },
            { id: "yL", tip: "yazi", x: 8, y: 9.2, metin: "Desteksiz yürüme", hiza: "start", gizli: true },
            { id: "yurume", tip: "alan", renk: 2, noktalar: [[8, 7.4], [8, 7.4], [8, 8.6], [8, 8.6]], gizli: true },
            { id: "yM", tip: "nokta", renk: 2, x: 12, y: 8, etiket: "", gizli: true }
          ],
          durumlar: [
            { metin: "Yatay eksen bebeğin yaşı. Her çubuk, bir becerinin çoğu bebekte ortaya çıktığı yaklaşık aralığı gösterir." },
            { metin: "**Desteksiz oturma:** yaklaşık 4–9 ay arasında; ortalama 6 ay civarı.", goster: ["oL", "oturma", "oM"], set: { oturma: { noktalar: [[4, 1.4], [9, 1.4], [9, 2.6], [4, 2.6]] } } },
            { metin: "**Emekleme:** yaklaşık 5–13 ay arasında; ortalama 8–9 ay civarı.", goster: ["eL", "emekleme", "eM"], set: { emekleme: { noktalar: [[5, 4.4], [13, 4.4], [13, 5.6], [5, 5.6]] } } },
            { metin: "**Desteksiz yürüme:** yaklaşık 8–18 ay arasında; ortalama 12 ay civarı. Aralıklar geniştir ==ama sıra aynıdır==: oturma, emekleme, yürüme.", goster: ["yL", "yurume", "yM"], set: { yurume: { noktalar: [[8, 7.4], [18, 7.4], [18, 8.6], [8, 8.6]] } } }
          ] },
        { tip: "tuzak", metin: "Bir bebeğin 12. ayda yürümemesi tek başına bir sorun işareti değildir.", yanlis: "Bebek 12 aydan sonra yürürse gelişimi geridir.", dogru: "Motor dönüm noktalarının ==sırası== genelde aynıdır, ==zamanlaması== geniş bir aralıkta değişir." }
      ]
    },
    {
      baslik: "Refleksler ve görsel uçurum",
      kisa: "Refleksler beklenen gelişimin göstergesidir; görsel uçurum bebeğin derinliği algıladığını gösterir.",
      bloklar: [
        { tip: "tablo", baslik: "Yenidoğanın başlıca refleksleri", head: ["Refleks", "Uyaran", "Tepki"], rows: [
            ["*Rooting* (arama)", "Yanağa dokunma", "Başını çevirip ağzıyla dokunan yöne yönelir"],
            ["*Sucking* (emme)", "Ağıza bir şey girmesi", "Ritmik olarak emer"],
            ["*Grasping* (kavrama)", "Avuca dokunma", "Parmaklarını sıkıca kapatır"],
            ["*Moro* (irkilme)", "Ani ses ya da destek kaybı", "Kollarını açar, sonra göğsüne çeker"]
          ], not: "Refleksler çoğunlukla ilk aylarda ve yıllarda kaybolur; zamanında görülüp kaybolmaları sinir sisteminin beklendiği gibi olgunlaştığını gösterir." },
        { tip: "adimlar", baslik: "Görsel uçurum deneyi (Gibson ve Walk)", adimlar: [
            { baslik: "Düzenek", metin: "Yarısı desenli zemin, yarısı cam olan masa: cam altında uçurum gibi görünen derin bir kısım var." },
            { baslik: "Bebek yerleştirilir", metin: "Emekleme çağındaki bebek sığ tarafa konur; anne karşı taraftan, derin kısmın üzerinden çağırır." },
            { baslik: "Sonuç", metin: "Bebeklerin çoğu cam üstünden derin tarafa geçmeyi reddeder. Derinliği algılıyorlar." },
            { baslik: "Yorum", metin: "==Derinlik algısı, emekleme çağında zaten var.== Konuşamayan bebeğin davranışına bakarak algısını ölçmek yenilikçi bir yoldu." }
          ] },
        { tip: "tuzak", metin: "Bebekler derinliği algılar; ama bu deney bunun doğuştan mı, deneyimle mi geldiğini tek başına ayırmaz, çünkü bebekler zaten emekleyebiliyor.", yanlis: "Görsel uçurum, derinlik algısının tamamen doğuştan olduğunu kanıtlar.", dogru: "Görsel uçurum ==emekleme çağında derinlik algısı== olduğunu gösterir; kökeni (doğuştan mı, öğrenilmiş mi) bu deneyle kesinleşmez." }
      ]
    },
    {
      baslik: "Kritik ve duyarlı dönemler",
      kisa: "Belirli yetenekler, gelişimin belli dönemlerinde en kolay edinilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪟", terim: "Critical / sensitive period", tr: "kritik / duyarlı dönem", tanim: "Belli bir deneyimin gelişim üzerinde özellikle güçlü etki yaptığı zaman aralığı. Bu aralık geçince aynı yeteneği edinmek çok daha zor olur.", ornek: "Dil edinimi: çocukluk boyunca hiç dil duymayan çocuk, dili sonradan ancak zorlukla edinir." },
            { ikon: "🦆", terim: "Imprinting", tr: "damgalama", tanim: "Bazı hayvanların yaşamın ilk saatlerinde gördükleri ilk hareketli nesneye bağlanması. Hayatta kalmayı sağlar.", ornek: "Yavru kaz, yumurtadan çıkınca ilk gördüğü annesini ya da bir insanı takip eder." }
          ] },
        { tip: "grafik", baslik: "Dil öğrenme kolaylığı yaşla nasıl değişir? (şematik)", xlabel: "Dile maruz kalmaya başlama yaşı", ylabel: "Ana dile yakın ustalık", xmax: 18, ymax: 10,
          xticks: [{ v: 3, label: "3" }, { v: 6, label: "6" }, { v: 9, label: "9" }, { v: 12, label: "12" }, { v: 15, label: "15" }],
          ogeler: [
            { id: "egri", tip: "egri", renk: 0, noktalar: [[0, 9], [5, 9], [7, 8], [10, 6], [13, 4], [16, 3], [18, 2.6]], etiket: "Ustalık" },
            { id: "pencere", tip: "alan", renk: 1, noktalar: [[0, 0], [7, 0], [7, 10], [0, 10]], gizli: true },
            { id: "pt", tip: "yazi", x: 3.5, y: 9.5, metin: "Duyarlı dönem", gizli: true },
            { id: "gec", tip: "yazi", x: 14, y: 5.4, metin: "Sonradan zor", gizli: true }
          ],
          durumlar: [
            { metin: "Dil çok erken yaşlarda başlayınca ustalık yüksek; başlama yaşı büyüdükçe ustalık düşüyor." },
            { metin: "İlk yılların geniş bir **duyarlı dönem** olduğu düşünülür: dil bu dönemde en kolay edinilir.", goster: ["pencere", "pt"] },
            { metin: "Dönem kapandıktan sonra da öğrenme mümkündür ama ==çok daha zahmetli== ve çoğu zaman daha az ustacadır.", goster: ["gec"] }
          ] }
      ]
    },
    {
      baslik: "Ergenlik: *puberty*",
      kisa: "Ergenlikte büyüme atılımı olur ve üreme yeteneği gelişir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Adolescent growth spurt", tr: "ergenlik büyüme atılımı", tanim: "Ergenlikte boyun ve ağırlığın bir süre çok hızlı artması.", ornek: "Bir yıl içinde yedi sekiz santim uzamak." },
            { ikon: "🔄", terim: "Puberty", tr: "ergenlik (cinsel olgunlaşma)", tanim: "Üreme yeteneğinin geliştiği dönem. Ergenlik, ilk adet (*menarche*) ve ilk boşalma (*spermarche*) gibi dönüm noktalarıyla ilerler.", ornek: "Menarche kızlarda, spermarche erkeklerde ergenliğin tipik işaretlerindendir." }
          ] },
        { tip: "grafik", baslik: "Boy uzama hızı yaşla nasıl değişir? (şematik)", xlabel: "Yaş", ylabel: "cm/yıl", xmax: 18, ymax: 12,
          xticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }, { v: 16, label: "16" }],
          yticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }],
          ogeler: [
            { id: "kiz", tip: "egri", renk: 0, noktalar: [[2, 8], [4, 7], [6, 6], [8, 5.5], [9.5, 6], [11.5, 8.3], [13, 6], [14.5, 3], [16, 1.2], [18, 0.4]], etiket: "Kızlar" },
            { id: "erkek", tip: "egri", renk: 1, noktalar: [[2, 8], [4, 7], [6, 6], [8, 5.5], [10, 5.2], [12, 6.2], [13.8, 9.5], [15.5, 5], [17, 2.2], [18, 1.2]], etiket: "Erkekler", gizli: true },
            { id: "kizT", tip: "nokta", renk: 0, x: 11.5, y: 8.3, etiket: "tepe", gizli: true },
            { id: "erkekT", tip: "nokta", renk: 1, x: 13.8, y: 9.5, etiket: "tepe", gizli: true }
          ],
          durumlar: [
            { metin: "Çocuklukta büyüme yavaş yavaş yavaşlar; ergenlik gelene kadar nispeten düşük ve sabit bir hızda sürer.", gizle: ["erkek", "kizT", "erkekT"] },
            { metin: "Ergenlikte **büyüme atılımı** başlar: kızlarda genelde yaklaşık 11–12 yaşında hız en yüksek.", goster: ["kizT"] },
            { metin: "Erkeklerde atılım genelde ==daha geç== (yaklaşık 13–14 yaş) ve biraz daha yüksektir. Zamanlama kişiden kişiye değişir.", goster: ["erkek", "erkekT"] }
          ] },
        { tip: "ikili", sol: { ikon: "🧬", baslik: "*Primary sex characteristics*", maddeler: ["Doğrudan üremeyle ilgili organlar", "Yumurtalıklar, rahim, testisler"] },
          sag: { ikon: "✨", baslik: "*Secondary sex characteristics*", maddeler: ["Üreme organı olmayan, ergenlikte belirginleşen özellikler", "Ses kalınlaşması, göğüs gelişimi, kıllanma"] },
          oyun: [
            { metin: "Ses telinin uzayıp sesin kalınlaşması.", cevap: "sag", neden: "Üreme organı değil, ergenlikte ortaya çıkan ikincil özellik." },
            { metin: "Testislerin sperm üretmeye başlaması.", cevap: "sol", neden: "Doğrudan üreme organının işlevi: birincil özellik." },
            { metin: "Göğüslerin gelişmesi.", cevap: "sag", neden: "İkincil özellik." },
            { metin: "Yumurtalıkların olgunlaşması.", cevap: "sol", neden: "Üreme organı: birincil özellik." }
          ] }
      ]
    },
    {
      baslik: "Yetişkinlikte fiziksel değişim",
      kisa: "Yetişkinlik uzundur: önce düzleşme, sonra değişken bir azalma gelir.",
      bloklar: [
        { tip: "tablo", baslik: "Yetişkinlikte neler değişir?", head: ["Alan", "Genel eğilim"], rows: [
            ["Üreme yeteneği", "Düzleşir, sonra azalır; kadınlarda *menopause* (adetin sona ermesi) genelde 50 yaş civarı"],
            ["Hareketlilik ve esneklik", "Kademeli azalma"],
            ["Tepki süresi (*reaction time*)", "Zamanla uzar"],
            ["Görme ve işitme keskinliği", "Yaşla azalır; gözlük ve işitme cihazı destek olur"]
          ], not: "Hız ve çeşitlilik kişiden kişiye çok değişir; düzenli hareket ve sağlıklı beslenme etkiyi yumuşatabilir." },
        { tip: "tuzak", metin: "Yetişkinlik gençlikten sonra bir çöküş dönemi değildir; uzun bir dönemin büyük kısmında beden düzenli çalışır.", yanlis: "Yaşlandıkça her fiziksel yetenek hızla ve herkeste aynı oranda düşer.", dogru: "Yetişkinlikte ==genel bir düzleşme==, ardından kişiden kişiye ==değişen bir azalma== görülür." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Doğum öncesi gelişimi *teratogen*ler, anne hastalıkları, genetik mutasyonlar, hormonal ve çevresel etkenler etkileyebilir; etki zamanlamaya ve miktara bağlıdır.",
            "Motor gelişimde sıra genelde aynıdır (oturma, emekleme, yürüme), zamanlama bebekten bebeğe değişir.",
            "*Fine motor* küçük kasları, *gross motor* büyük kasları içerir.",
            "*Rooting* gibi refleksler beklenen gelişimin işaretleridir.",
            "Görsel uçurum, emekleme çağındaki bebeklerin derinliği algıladığını gösterir.",
            "Kritik ya da duyarlı dönemlerde (dil gibi) deneyim özellikle güçlü etki yapar; bazı hayvanlar ilk nesneye *imprint* olur.",
            "Ergenlikte büyüme atılımı olur; birincil ve ikincil cinsel özellikler gelişir (*menarche*, *spermarche*).",
            "Yetişkinlikte düzleşmeyi, üreme yeteneği, hareketlilik, esneklik, tepki süresi ve duyu keskinliğinde değişken azalma izler."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir kadın hamilelik boyunca düzenli alkol kullanmıştır. Bebeğinde yüz özelliklerinde farklılıklar ile dikkat ve öğrenme güçlüğü görülüyor. Bu durum en iyi hangi kavramla açıklanır?",
      opts: ["Anne hastalığının bebeğe geçmesi", "Doğuştan gelen bir gen mutasyonu", "*Teratogen* maruziyetinin doğum öncesi gelişimi etkilemesi", "*Critical period* sonrası öğrenme"],
      a: 2,
      why: "Alkol, gelişen bebeğe zarar verebilen bir *teratogen*dir. En çekici yanlış şık B: belirtiler genetik bir değişiklikten değil, doğum öncesi maruziyetten kaynaklanıyor." },
    { q: "Bir anne, bebeğinin yanağına dokunduğunda bebeğin başını dokunulan yöne çevirip ağzını açtığını fark ediyor. Bu davranış nedir ve ne anlama gelir?",
      opts: ["*Rooting reflex*; beklenen gelişimin bir göstergesidir", "*Imprinting*; anneye bağlanma kritik döneminin sonudur", "*Gross motor* beceri; bebek yürümeye hazırdır", "Görsel uçurum tepkisi; derinlik algısı gelişmemiştir"],
      a: 0,
      why: "Yanağa dokunma ile başı çevirip ağzıyla arama, beslenmeyi sağlayan *rooting* refleksidir ve ilk aylarda beklenen bir göstergedir. En çekici yanlış şık B: *imprinting* bazı hayvanların ilk gördüğü nesneye bağlanmasıdır, bebek refleksi değildir." },
    { q: "Tabloda üç bebeğin dönüm noktalarını kazandığı yaşlar (ay olarak) verilmiştir. Bu verilerle ilgili hangi yorum doğrudur?",
      fig: { type: "table", caption: "Motor dönüm noktaları (ay)", head: ["Bebek", "Desteksiz oturma", "Emekleme", "Desteksiz yürüme"], rows: [["A", 5, 7, 10], ["B", 6, 9, 13], ["C", 7, 10, 16]] },
      opts: ["Bebek C gelişimsel olarak geridir", "Bebekler dönüm noktalarını birbirinden farklı sırayla kazanmıştır", "Dönüm noktalarının zamanlaması bütün bebeklerde aynıdır", "Zamanlama değişse de sıra aynıdır: oturma, emekleme, yürüme"],
      a: 3,
      why: "Üç bebekte de sıra aynı (oturma, emekleme, yürüme) ama yaşlar farklı; bu motor gelişimin genel örüntüsüdür. En çekici yanlış şık A: yürümenin 16. ayda olması, geniş normal aralık içinde tek başına geri kalma kanıtı değildir." },
    { q: "Bir araştırmacı, 8 aylık bir bebeği cam zeminli bir masanın sığ tarafına koyuyor ve anneyi derin görünen tarafa geçirip bebeği çağırtıyor. Bebek cama çıkmıyor. Bu araştırma neyi gösterir?",
      opts: ["Bebekler derinliği henüz algılayamaz", "Emekleme çağındaki bebekler derinliği algılar; ayrıca konuşamayan bebeğin algısı davranışıyla ölçülebilir", "Derinlik algısı yalnızca deneyimle öğrenilir", "Bebeklerin refleksleri bu yaşta kaybolur"],
      a: 1,
      why: "Bebeğin derin tarafa geçmeyi reddetmesi, derinlik algısı olduğunu gösterir; araştırma bebek tepkilerini ölçmek için yenilikçi bir yöntemdir. En çekici yanlış şık C: deney kökeni (doğuştan mı, öğrenilmiş mi) kesinleştirmez; zaten emekleyen bebekler test edilmiştir." },
    { q: "Aşağıdakilerden hangisi yetişkinlikte beklenen genel fiziksel değişimi en iyi tanımlar?",
      opts: ["20'li yaşlardan itibaren her yetenekte hızlı ve herkeste aynı oranda bir düşüş", "Yetişkinlikte hiçbir fiziksel değişim olmaz", "Bir düzleşme döneminin ardından üreme yeteneği, esneklik, tepki süresi ve duyu keskinliğinde kişiden kişiye değişen bir azalma", "Yalnızca görme ve işitmede, ani bir kayıp"],
      a: 2,
      why: "Yetişkinlik, düzleşme ve ardından değişken bir azalma ile tanımlanır (menopoz, hareketlilik, esneklik, tepki süresi, görme ve işitme). En çekici yanlış şık A: azalma hızlı ve herkeste aynı değil, çok değişken ve bazen yumuşatılabilir." }
  ]
};
