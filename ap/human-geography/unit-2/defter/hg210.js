/* Kitpath not defteri · hg210 · Göçün Nedenleri
   Kaynak: AP HuG CED Unit 2, Topic 2.10 (IMP-2.C). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg210",
  amac: "Bu konu insanların neden göç ettiğini anlatıyor: yaşadıkları yerden iten (*push*) ve gidecekleri yere çeken (*pull*) etkenler. Bunların beş türünü (kültürel, demografik, ekonomik, çevresel, siyasi), yolda karşılaşılan fırsat ve engelleri ve Ravenstein'la bağlantıyı öğreneceksin.",
  bolumler: [
    {
      baslik: "Göç ve temel terimler",
      kisa: "*Emigration* çıkıştır, *immigration* varıştır; ikisinin farkı *net migration*'dır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧳", terim: "Migration", tr: "göç", tanim: "İnsanların yaşadıkları yeri uzun süreli ya da kalıcı olarak değiştirmesi. Kısa gezi (tatil, hafta sonu) göç sayılmaz.", ornek: "Bir ailenin Sivas'tan İstanbul'a taşınması." },
            { ikon: "🚪", terim: "Emigration", tr: "dışarı göç", tanim: "Yaşadığı ülkeden ayrılmak. Kaynak ülke açısından bakılır (*exit*: çıkış).", ornek: "Türkiye'den Almanya'ya gidenler, Türkiye için *emigrant*'tır." },
            { ikon: "🛬", terim: "Immigration", tr: "içeri göç", tanim: "Yeni bir ülkeye yerleşmek. Hedef ülke açısından bakılır (*in*: içeri).", ornek: "Aynı kişiler Almanya için *immigrant*'tır." }
          ] },
        { tip: "formul", parcalar: [
            { t: "*Immigrants*", alt: "gelenler" }, "−",
            { t: "*Emigrants*", alt: "gidenler" }, "=",
            { t: "*Net migration*", alt: "net göç" }
          ], aciklama: "Sonuç artıysa ülke göçle kazanır (net giriş); eksiyse kaybeder (net çıkış). Örnek: 1.200 gelen, 1.500 giden → −300." }
      ]
    },
    {
      baslik: "İtici ve çekici etkenler",
      kisa: "*Push* yaşadığın yerden iter, *pull* gideceğin yere çeker.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "⬅️", baslik: "*Push factor* (itici etken)", maddeler: ["Yaşadığı yerdeki olumsuz koşul", "Kişiyi ayrılmaya zorlar ya da isteklendirir"] },
          sag: { ikon: "➡️", baslik: "*Pull factor* (çekici etken)", maddeler: ["Gideceği yerdeki olumlu koşul", "Kişiyi oraya doğru çeker"] },
          oyun: [
            { metin: "Köyde tarım geliri yetersiz ve iş yok.", cevap: "sol", neden: "Yaşadığı yerin olumsuz yanı: *push*." },
            { metin: "İzmir'deki bir üniversite burs veriyor.", cevap: "sag", neden: "Gidilecek yerin avantajı: *pull*." },
            { metin: "Şiddetli kuraklık tarlaları kurutuyor.", cevap: "sol", neden: "Yaşadığı yerdeki olumsuz koşul: *push*." },
            { metin: "Şehirdeki akrabalar yeni gelene iş ve konut bulabiliyor.", cevap: "sag", neden: "Gidilecek yerdeki fırsat: *pull*." },
            { metin: "Şehrin savaş yüzünden yaşanamaz hale gelmesi.", cevap: "sol", neden: "Yaşadığı yerden kaçış nedeni: *push*." }
          ] },
        { tip: "grafik", baslik: "Köyden şehre: iticiler ve çekiciler", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "a", tip: "nokta", x: 2, y: 5, etiket: "Köy" },
            { id: "b", tip: "nokta", x: 7.2, y: 5, etiket: "Şehir" },
            { id: "pu1", tip: "ok", renk: 2, from: [2, 5.7], to: [2, 7.2], gizli: true },
            { id: "pu2", tip: "ok", renk: 2, from: [2, 4.3], to: [2, 2.8], gizli: true },
            { id: "pt1", tip: "yazi", x: 2.7, y: 8, metin: "itici: işsizlik", gizli: true },
            { id: "pt2", tip: "yazi", x: 2.7, y: 1.8, metin: "itici: kuraklık", gizli: true },
            { id: "mv", tip: "ok", renk: 0, from: [3, 5], to: [6.4, 5], gizli: true },
            { id: "cl1", tip: "ok", renk: 1, from: [7.2, 5.7], to: [7.2, 7.2], gizli: true },
            { id: "cl2", tip: "ok", renk: 1, from: [7.2, 4.3], to: [7.2, 2.8], gizli: true },
            { id: "ct1", tip: "yazi", x: 7, y: 8, metin: "çekici: iş ve okul", gizli: true },
            { id: "ct2", tip: "yazi", x: 7, y: 1.8, metin: "çekici: güvenlik", gizli: true }
          ],
          durumlar: [
            { metin: "İki yer var: köy ve şehir. Köyde yaşayan biri taşınmayı düşünüyor." },
            { metin: "==İtici etkenler== (*push*) köydeki sorunlardır: işsizlik, kuraklık. Yaşadığı yerden uzaklaştırırlar.", goster: ["pu1", "pu2", "pt1", "pt2"] },
            { metin: "==Çekici etkenler== (*pull*) şehrin avantajlarıdır: iş, okul, güvenlik. Kişiyi oraya çekerler; göç gerçekleşir.", goster: ["cl1", "cl2", "ct1", "ct2", "mv"] }
          ] }
      ]
    },
    {
      baslik: "Etkenlerin beş türü",
      kisa: "Etkenler kültürel, demografik, ekonomik, çevresel ya da siyasi olabilir.",
      bloklar: [
        { tip: "tablo", baslik: "Beş tür etken (itici, çekici, ara engel ve fırsat)", head: ["Tür", "İtici", "Çekici", "Ara engel / fırsat"], rows: [
            ["Kültürel", "Dil, din ya da etnik köken yüzünden ayrımcılık", "Aynı dili ve inancı paylaşan topluluk", "Dil bilmemek (engel); aynı dilin konuşulduğu ara şehir (fırsat)"],
            ["Demografik", "Aşırı kalabalık, genç işsizliği", "Çalışan arayan, yaşlanan ülke", "Yaş sınırı ve aile durumu (engel)"],
            ["Ekonomik", "İşsizlik, düşük ücret", "İş ve yüksek ücret", "Yol masrafı, çalışma izni (engel); yolda iş bulmak (fırsat)"],
            ["Çevresel", "Kuraklık, sel, deprem, çölleşme", "Verimli toprak, ılıman iklim", "Dağ, çöl, deniz (engel); yolda verimli bir vadi (fırsat)"],
            ["Siyasi", "Savaş, baskı, zulüm", "Barış, güvenlik, haklar", "Sınır, vize, duvar (engel); yolda kabul eden bir ülke (fırsat)"]
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "1950'ler", baslik: "Makineleşme: ekonomik itici", metin: "Tarımda traktör yayılınca köyde işgücü fazlası oluştu; birçok kişi geçimini bulamadı." },
            { tarih: "1960–70'ler", baslik: "Şehirde iş: ekonomik çekici", metin: "İstanbul, Ankara ve İzmir'de fabrika ve inşaat işleri vardı; gecekondu mahalleleri doğdu." },
            { tarih: "Bugün", baslik: "Kırdan kente göçün sonucu", metin: "Türkiye nüfusunun büyük çoğunluğu şehirlerde yaşıyor; bazı köy ve ilçelerde ise nüfus azaldı." }
          ] },
        { tip: "tuzak", metin: "Etkenin türü ile yönü iki ayrı sorudur.", yanlis: "\"Savaş\" siyasi bir çekici etkendir çünkü siyasetle ilgilidir.", dogru: "Önce ==türe== bak (siyasi), sonra ==yöne== (savaş yaşadığın yerden iter: *push*; barış gideceğin yere çeker: *pull*). Aynı tür hem itici hem çekici olabilir." }
      ]
    },
    {
      baslik: "Ara fırsatlar ve engeller",
      kisa: "Yolda çıkan fırsat göçmeni durdurur; engel yolculuğu zorlaştırır ya da yönünü değiştirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏙️", terim: "Intervening opportunity", tr: "ara fırsat", tanim: "Göç yolunda, asıl hedefe varmadan karşılaşılan daha yakın ve cazip bir fırsat. Göçmen orada kalıp yolculuğunu bitirebilir.", ornek: "Köyden İstanbul'a giden biri, Bolu'da iş bulursa orada kalır." },
            { ikon: "🚧", terim: "Intervening obstacle", tr: "ara engel", tanim: "Göç yolunda karşılaşılan, yolculuğu zorlaştıran ya da imkânsız kılan engel: sınır, vize, para, dil, deniz ya da dağ.", ornek: "Vizenin reddedilmesi ya da yol ücretinin çok yüksek olması." }
          ] },
        { tip: "grafik", baslik: "Hedefe giden yol: fırsat ve engel", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "a", tip: "nokta", x: 1.5, y: 2, etiket: "A" },
            { id: "b", tip: "nokta", x: 8.5, y: 8, etiket: "B" },
            { id: "f", tip: "nokta", x: 5, y: 5, etiket: "F", gizli: true },
            { id: "yol", tip: "ok", renk: 0, from: [1.9, 2.4], to: [8.1, 7.6] },
            { id: "eng", tip: "cizgi", renk: 2, from: [5.8, 7.2], to: [7.4, 5.2], gizli: true },
            { id: "engyz", tip: "yazi", x: 8, y: 4.3, metin: "sınır / vize", gizli: true }
          ],
          durumlar: [
            { metin: "A'da yaşayan insanlar uzaktaki B'ye gitmek istiyor." },
            { metin: "==Ara fırsat==: yolda F şehri var; orada iş ve konut bulunuyor. Göçmenlerin çoğu F'de kalıyor, yolculuk F'de bitiyor.", goster: ["f"], set: { yol: { to: [4.6, 4.6] } } },
            { metin: "==Ara engel==: B'ye giden yolda sınır ve vize kuralı var. Yol uzar, masraf artar, bazıları vazgeçer ya da yön değiştirir.", goster: ["eng", "engyz"], set: { yol: { to: [6.2, 6.05] } } }
          ] },
        { tip: "ikili", sol: { ikon: "🛣️", baslik: "Ara fırsat", maddeler: ["Yolda karşılaşılan cazip olanak", "Yolculuğu kısaltır ya da bitirir"] },
          sag: { ikon: "⛔", baslik: "Ara engel", maddeler: ["Yolda karşılaşılan güçlük", "Yolculuğu zorlaştırır ya da engeller"] },
          oyun: [
            { metin: "Yolculuk sırasında uğranan şehirde iyi bir iş bulunuyor.", cevap: "sol", neden: "Hedefe varmadan cazip bir olanak: ara fırsat." },
            { metin: "Sınırda vize başvurusu reddediliyor.", cevap: "sag", neden: "Yolu kapayan engel: ara engel." },
            { metin: "Denizi geçmek için gereken bilet ücreti çok yüksek.", cevap: "sag", neden: "Maliyet göçü zorlaştırır: ara engel." },
            { metin: "Yol üstündeki bir kasabada akrabalar konut ve iş sunuyor.", cevap: "sol", neden: "Orada kalmayı cazip kılan olanak: ara fırsat." }
          ] }
      ]
    },
    {
      baslik: "Ravenstein ve göç nedenleri",
      kisa: "Ravenstein'a göre göçmenler çoğunlukla yakına gider ve ana neden ekonomiktir.",
      bloklar: [
        { tip: "grafik", baslik: "Mesafe arttıkça göç azalır (şematik)", xlabel: "Uzaklık", ylabel: "Göçmen sayısı", xmax: 10, ymax: 10,
          ogeler: [
            { id: "eski", tip: "egri", renk: 3, kesik: true, noktalar: [[0.5, 9], [2, 6], [4, 3.6], [6, 2.2], [8, 1.3], [9.5, 0.9]], gizli: true },
            { id: "egri", tip: "egri", renk: 0, etiket: "Göç", noktalar: [[0.5, 9], [2, 6], [4, 3.6], [6, 2.2], [8, 1.3], [9.5, 0.9]] },
            { id: "yak", tip: "nokta", x: 2, y: 6, etiket: "yakın", kilavuz: true, gizli: true },
            { id: "uz", tip: "nokta", x: 8, y: 1.3, etiket: "uzak", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Uzaklık arttıkça göçmen sayısı azalır: bu ilişkiye ==*distance decay*== denir." },
            { metin: "Yakın yerlere çok kişi gider (2. nokta), uzağa az (8. nokta). Ravenstein'a göre ==çoğu göçmen kısa mesafe== gider.", goster: ["yak", "uz"] },
            { metin: "Ara engel (vize, sınır, masraf) eklenirse ==eğri aşağı kayar==: her uzaklıkta göç azalır (eski eğri kesikli).", goster: ["eski"], set: { egri: { noktalar: [[0.5, 6.5], [2, 4.2], [4, 2.4], [6, 1.4], [8, 0.8], [9.5, 0.5]] }, yak: { y: 4.2 }, uz: { y: 0.8 } } }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💰", baslik: "Ekonomik nedenler baskın", metin: "İş ve gelir, göçün ana motorudur; yani çoğu zaman ekonomik itici ve çekici etkenler belirleyicidir." },
            { ikon: "↔️", baslik: "Karşı akım", metin: "Her göç akımı bir karşı akım doğurur: gidenlerin bir kısmı geri döner ya da ters yönde gider." },
            { ikon: "🏙️", baslik: "Büyük şehirler çeker", metin: "Uzun mesafe göçmenleri ticaret ve sanayi merkezlerini seçer. Ravenstein'ın bütün yasaları 2.8'de." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Migration* kalıcı ya da uzun süreli yer değiştirmedir; *emigration* çıkış, *immigration* varıştır; *net migration* = gelenler − gidenler.",
            "*Push* etkenler yaşadığın yerden iter (işsizlik, kuraklık, savaş); *pull* etkenler gideceğin yere çeker (iş, okul, güvenlik).",
            "Etkenler beş türdür: kültürel, demografik, ekonomik, çevresel ve siyasi; her biri hem itici hem çekici olabilir.",
            "Önce türü, sonra yönü bul: aynı tür hem *push* hem *pull* olabilir.",
            "*Intervening opportunity* yolda karşılaşılan cazip fırsattır (göçmen orada kalabilir); *intervening obstacle* yolu zorlaştıran engeldir (sınır, vize, masraf, dil, deniz).",
            "Ara fırsat ve engeller de beş türden biri olabilir (kültürel, demografik, ekonomik, çevresel, siyasi).",
            "Ravenstein: çoğu göçmen kısa mesafe gider (*distance decay*), ekonomik nedenler baskındır, her akımın bir karşı akımı vardır.",
            "Türkiye örneği: 1950'lerde tarımda makineleşme (ekonomik itici) ve şehirde fabrika işleri (ekonomik çekici) kırdan kente göçü başlattı."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Kuraklık yüzünden gelirini kaybeden bir çiftçi ailesi, başka bir ülkedeki fabrikada iş bulma umuduyla göç ediyor. Ailenin göçünü hangi etkenler birlikte en iyi açıklar?",
      opts: ["Çevresel itici etken ve ekonomik çekici etken", "Siyasi itici etken ve kültürel çekici etken", "Demografik itici etken ve çevresel çekici etken", "Ekonomik itici etken ve siyasi çekici etken"],
      a: 0,
      why: "Kuraklık yaşanılan yerdeki çevresel bir sorun olduğu için çevresel *push*; fabrikadaki iş ise ekonomik *pull*'dur. D şıkkı çekicidir: gelir kaybı ekonomik görünür, ama kaybın kaynağı kuraklık (çevresel) olduğu için etken türü çevreseldir."
    },
    {
      q: "Orta Doğu'daki bir savaştan kaçan bir aile, Avrupa'ya gitmek amacıyla yola çıkıyor, ancak Türkiye'de iş ve ucuz konut bulup orada kalıyor. Bu durum hangi kavramla açıklanır?",
      opts: ["*Intervening obstacle* (ara engel)", "*Push factor* (itici etken)", "*Intervening opportunity* (ara fırsat)", "*Distance decay* (mesafe etkisi)"],
      a: 2,
      why: "Asıl hedefe varmadan yolda cazip bir olanak (iş, konut) bulunup orada kalınmıştır: ara fırsat. B şıkkı çekicidir çünkü savaş itici etkendir, ancak soru göçmenin yolda kalma nedenini sormaktadır. *Distance decay* ise uzaklıkla göç sayısının azalmasıdır."
    },
    {
      q: "Grafikte uzaklık ile göçmen sayısı arasındaki ilişki gösterilmiştir. Kesikli çizgi, bir sınırda vize zorunluluğu getirilmeden önceki eğrilerdir. Grafikten çıkarılabilecek en doğru sonuç hangisidir?",
      fig: { type: "graph", xlabel: "Uzaklık", ylabel: "Göçmen sayısı", xmax: 10, ymax: 10, lines: [{ from: [0.5, 9], to: [9.5, 1], label: "Önce", dash: true }, { from: [0.5, 6], to: [9.5, 0.6], label: "Sonra" }], caption: "Varsayımsal veri" },
      opts: ["Uzaklık arttıkça göç artar ve vize bunu etkilemez.", "Uzaklık arttıkça göç azalır; vize gibi bir ara engel her uzaklıkta göçü azaltır.", "Vize, yalnızca yakın mesafelerdeki göçü azaltır.", "Vize göçü artırır çünkü insanlar daha çok çabalar."],
      a: 1,
      why: "İki doğru da uzaklıkla azalıyor (*distance decay*), ve \"Sonra\" doğrusu \"Önce\"nin altında; yani engel her uzaklıkta göçü düşürmüştür. C şıkkı çekici ama yanlıştır: aradaki fark uzak mesafede de görülür."
    },
    {
      q: "Aşağıdakilerden hangisi kültürel bir çekici etkene örnektir?",
      opts: ["Göç edilen yerde sel ve deprem riskinin düşük olması", "Göç edilen yerde ücretlerin yüksek olması", "Göç edilen yerde savaşın bitmesi ve güvenlik", "Göç edilen yerde aynı dili ve inancı paylaşan akraba ve topluluğun yaşaması"],
      a: 3,
      why: "Dil, din ve etnik topluluk kültürel etkenlerdir; bunların gidilen yerde bulunması kültürel *pull*'dur. A çevresel, B ekonomik, C siyasi çekici etkendir."
    },
    {
      q: "Bir ilçeye bir yılda 1.200 kişi gelmiş, 1.500 kişi ilçeden ayrılmıştır. Net göç nedir?",
      opts: ["−300 (net çıkış)", "+300 (net giriş)", "+2.700", "−2.700"],
      a: 0,
      why: "*Net migration* = gelenler − gidenler = 1.200 − 1.500 = −300; ilçe göçle kaybetmiştir. B şıkkı çıkarma yönünü ters çevirir; C ve D ise iki sayıyı toplar."
    }
  ]
};
