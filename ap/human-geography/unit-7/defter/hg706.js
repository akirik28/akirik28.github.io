/* Kitora not defteri · hg706 · Ticaret ve Dünya Ekonomisi
   Kaynak: AP HuG CED Topic 7.6 (PSO-7.A.1–A.4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg706",
  amac: "Bu konu ülkelerin neden ticaret yaptığını ve bu ticareti hangi örgütlerin ve politikaların şekillendirdiğini anlatıyor. Tamamlayıcılığı, karşılaştırmalı üstünlüğü, tarifeyi, AB, WTO, Mercosur ve OPEC'i, borç krizlerini ve IMF'yi öğreneceksin.",
  bolumler: [
    {
      baslik: "Ticaretin temeli",
      kisa: "Bir yerin fazlası diğerinin eksiğiyse ve herkes en ucuza ürettiğini satıyorsa ticaret kazandırır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Complementarity", tr: "tamamlayıcılık", tanim: "Bir yerin fazlası olan şeyin başka bir yerin ihtiyacı olması. Böylece iki yer birbirini tamamlar.", ornek: "Norveç'te balık bol, fındık yok; Türkiye'de fındık bol." },
            { ikon: "⚖️", terim: "Comparative advantage", tr: "karşılaştırmalı üstünlük", tanim: "Bir malı başka bir malı feda ederek (fırsat maliyeti) daha ucuza üretebilmek. Herkes fırsat maliyeti düşük olduğu işte uzmanlaşıp takas ederse ikisi de kazanır.", ornek: "Her şeyde daha iyi olan ülke bile bir malda daha 'ucuza' üretebilir." }
          ] },
        { tip: "adimlar", baslik: "Ticaret nasıl doğar?", adimlar: [
            { baslik: "Fazla ve eksik", metin: "Bir ülkenin fazlası, öbürünün eksiğidir (tamamlayıcılık)." },
            { baslik: "Fırsat maliyeti", metin: "Her ülke hangi malı daha az feda ederek ürettiğine bakar." },
            { baslik: "Uzmanlaş ve takas et", metin: "Herkes karşılaştırmalı üstün olduğu malı üretir, gerisini ticaretle alır." }
          ] }
      ]
    },
    {
      baslik: "Karşılaştırmalı üstünlük, ölçülü bir örnek",
      kisa: "Her şeyde daha iyi olan taraf bile, daha ucuz yaptığı işte uzmanlaşarak kazanır.",
      bloklar: [
        { tip: "grafik", baslik: "Ada ve Efe: kantinde bir saat (tost–limonata)", xlabel: "Limonata", ylabel: "Tost", xmax: 6, ymax: 10,
          ogeler: [
            { id: "ada", tip: "cizgi", renk: 0, etiket: "Ada", from: [4, 0], to: [0, 8] },
            { id: "efe", tip: "cizgi", renk: 1, etiket: "Efe", from: [4, 0], to: [0, 4], gizli: true },
            { id: "a0", tip: "nokta", renk: 0, x: 2, y: 4, etiket: "Ada", gizli: true },
            { id: "e0", tip: "nokta", renk: 1, x: 2, y: 2, etiket: "Efe", gizli: true },
            { id: "a1", tip: "nokta", renk: 0, x: 0, y: 8, etiket: "Ada", gizli: true },
            { id: "e1", tip: "nokta", renk: 1, x: 4, y: 0, etiket: "Efe", gizli: true },
            { id: "a2", tip: "nokta", renk: 0, x: 2, y: 5, etiket: "Ada", gizli: true },
            { id: "e2", tip: "nokta", renk: 1, x: 2, y: 3, etiket: "Efe", gizli: true }
          ],
          durumlar: [
            { metin: "Ada bir saatte ==8 tost ya da 4 limonata== yapabilir. Çizgi, yapabileceği bütün karışımları gösterir." },
            { metin: "Efe bir saatte ==4 tost ya da 4 limonata== yapabilir. Ada tostta daha iyi, limonatada aynı.", goster: ["efe"] },
            { metin: "Ticaret yokken ikisi de zamanını yarı yarıya böler: Ada 4 tost + 2 limonata, Efe 2 tost + 2 limonata.", goster: ["a0", "e0"] },
            { metin: "Uzmanlaşma: Ada yalnız tost (8), Efe yalnız limonata (4) yapar. Efe'nin limonata fırsat maliyeti 1 tost, Ada'nınki 2 tost.", gizle: ["a0", "e0"], goster: ["a1", "e1"] },
            { metin: "Takas: Ada 3 tost verir, 2 limonata alır. Ada 5 tost + 2 limonata, Efe 3 tost + 2 limonata. ==İkisi de çizgisinin dışına çıktı.==", gizle: ["a1", "e1"], goster: ["a2", "e2"] }
          ] },
        { tip: "tablo", baslik: "Fırsat maliyetleri", head: ["", "Ada", "Efe", "Karşılaştırmalı üstünlük"], rows: [
            ["1 tost için feda edilen limonata", "½", "1", "Ada (daha az feda ediyor)"],
            ["1 limonata için feda edilen tost", "2", "1", "Efe (daha az feda ediyor)"]
          ], vurgu: 0 },
        { tip: "tuzak", metin: "Mutlak üstünlük ile karşılaştırmalı üstünlük aynı şey değildir.", yanlis: "Ada her şeyde daha iyi (ya da eşit) olduğu için Efe ile ticarete ihtiyaç duymaz.", dogru: "==Ticaretten kazanç fırsat maliyetiyle belirlenir==, mutlak verimlilikle değil. Hem Ada hem Efe, kendi karşılaştırmalı üstünlüğü olan işte uzmanlaşıp takas ederek kazanır." }
      ]
    },
    {
      baslik: "Serbest ticaret ve korumacılık",
      kisa: "Serbest ticaret engelleri kaldırır; tarife gibi korumacı araçlar ithal malı pahalılaştırır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔓", baslik: "Serbest ticaret (*free trade*)", maddeler: ["Tarife ve kotalar azaltılır ya da kaldırılır", "*Free trade agreement* (serbest ticaret anlaşması) ile üyeler arası engeller düşer"] },
          sag: { ikon: "🛡️", baslik: "Korumacılık (*protectionism*)", maddeler: ["Yerli üreticiyi korumak için *tariff* (ithalat vergisi), kota, sübvansiyon", "İthal mal pahalılaşır"] },
          oyun: [
            { metin: "İthal otomobile yüzde 30 gümrük vergisi konuluyor.", cevap: "sag", neden: "Tarife korumacı araçtır." },
            { metin: "İki ülke, birbirinin mallarındaki gümrük vergisini sıfırlıyor.", cevap: "sol", neden: "Serbest ticaret anlaşması." },
            { metin: "Devlet, yerli çelik üreticisine sübvansiyon veriyor.", cevap: "sag", neden: "Yerli üreticiyi destekleyen korumacı politika." },
            { metin: "Bir bölge, üyeleri arasında ithalat kotalarını kaldırıyor.", cevap: "sol", neden: "Engellerin kaldırılması: serbest ticaret." }
          ] },
        { tip: "ornek", baslik: "Tarife kimin işine yarar?", durum: "İthal bir telefon 10.000 TL, aynı özellikli yerli telefon 11.000 TL. Devlet ithal telefona yüzde 20 tarife koyuyor. Ne olur?",
          adimlar: ["Tarife: 10.000 × 0,20 = 2.000 TL.", "İthal telefonun yeni fiyatı: 10.000 + 2.000 = 12.000 TL.", "Yerli telefon 11.000 TL < 12.000 TL: yerli telefon artık daha ucuz."],
          sonuc: "Tarife ==yerli üreticiyi korur== ve devlete gelir sağlar (telefon başına 2.000 TL); ama ==tüketici daha çok öder== ya da daha az seçeneğe sahip olur." },
        { tip: "liste", maddeler: [
            { ikon: "🏘️", baslik: "Yerel ölçek", metin: "Belediye vergi indirimi ya da bedava arsa ile fabrikayı çeker." },
            { ikon: "🏛️", baslik: "Ulusal ölçek", metin: "Tarife, kota, sübvansiyon ve serbest bölge kararları." },
            { ikon: "🌐", baslik: "Uluslararası ölçek", metin: "Ortak kurallar koyan ve engelleri kaldıran örgütler (AB, WTO)." }
          ] }
      ]
    },
    {
      baslik: "Ticaret örgütleri: AB, WTO, Mercosur, OPEC",
      kisa: "Neoliberal politikalar yeni örgütler kurdu; her örgütün işlevi farklıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧭", terim: "Neoliberal policies", tr: "neoliberal politikalar", tanim: "Piyasayı serbestleştirmeyi, özelleştirmeyi ve engelleri kaldırmayı öne çıkaran politikalar. Serbest ticaret anlaşmalarını ve ticaret örgütlerini büyüttü.", ornek: "Gümrük vergilerini indiren ticaret anlaşmaları." }
          ] },
        { tip: "tablo", baslik: "Dört örgüt", head: ["Örgüt", "Tür", "Ne yapar?"], rows: [
            ["*EU* (Avrupa Birliği)", "Ekonomik ve siyasi birlik", "Üyeler arasında tek pazar: gümrük ve tarife yok; birçoğu ortak para (euro) kullanır"],
            ["*WTO* (Dünya Ticaret Örgütü)", "Küresel kural koyucu", "Dünya ticaretinin kurallarını belirler, anlaşmazlıkları çözer; bir ticaret bloku değildir"],
            ["*Mercosur*", "Güney Amerika ortak pazarı", "Brezilya, Arjantin, Paraguay, Uruguay ekseninde üyeler arası ticareti serbestleştirir"],
            ["*OPEC*", "Petrol ihraç eden ülkelerin örgütü", "Üyelerin petrol üretimini koordine ederek fiyatı etkilemeye çalışır"]
          ] },
        { tip: "tuzak", metin: "Dört örgüt aynı türden değildir.", yanlis: "OPEC de AB gibi serbest ticaret bölgesidir.", dogru: "==OPEC ticareti serbestleştirmez==, bir malın (petrol) üretimini ve fiyatını koordine eder. WTO da bir bölge değil, küresel kural koyucudur." }
      ]
    },
    {
      baslik: "Borç krizleri, IMF ve karşılıklı bağımlılık",
      kisa: "Bir ülkenin krizi başkalarına sıçrar; bu, ekonomilerin birbirine bağlı olduğunu gösterir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏛️", terim: "International Monetary Fund (IMF)", tr: "Uluslararası Para Fonu", tanim: "Ödeme sıkıntısındaki ülkelere kredi veren uluslararası kredi kurumu. Karşılığında çoğu zaman bütçe ve ekonomi politikasında şartlar ister.", ornek: "Borcunu ödeyemeyen bir ülkenin IMF'den kredi alması." }
          ] },
        { tip: "adimlar", baslik: "Bir borç krizi nasıl yayılır?", adimlar: [
            { baslik: "Borçlanma", metin: "Bir ülke dış kaynaklı yüksek borç alır." },
            { baslik: "Ödeme sıkıntısı", metin: "Gelir düşer ya da faiz yükselir; borç ödenemez hale gelir (*debt crisis*)." },
            { baslik: "Kurtarma kredisi", metin: "IMF gibi kuruluşlar şartlı kredi verir." },
            { baslik: "Sıçrama", metin: "Borç veren bankalar ve ticaret ortakları da zarar görür; kriz başka ülkelere yayılır." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💥", baslik: "Küresel krizler", metin: "2008 gibi küresel finans krizleri, ülkelerin birbirine bağlı olduğunu gösterir." },
            { ikon: "🌱", baslik: "Kalkınma stratejileri", metin: "Mikrokredi gibi stratejiler yoksullara küçük ölçekli finans sağlar; bu da küresel finans ağıyla ilişkilidir." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Ticaretin temeli *complementarity* (birinin fazlası öbürünün eksiği) ve *comparative advantage* (düşük fırsat maliyeti)'dir.",
            "Karşılaştırmalı üstünlük, mutlak üstünlükten farklıdır: her şeyde daha iyi olan ülke bile uzmanlaşıp ticaretten kazanır.",
            "Serbest ticaret engelleri kaldırır; *tariff* (ithalat vergisi), kota ve sübvansiyon korumacı araçlardır.",
            "Tarife ithal malı pahalılaştırır, yerli üreticiyi korur, devlete gelir sağlar; tüketici daha çok öder.",
            "Neoliberal politikalar *EU*, *WTO*, *Mercosur* ve *OPEC* gibi örgütleri ve serbest ticaret anlaşmalarını doğurdu; OPEC ticareti serbestleştirmez, petrol üretimini koordine eder.",
            "Hükümet girişimleri yerel, ulusal ve uluslararası ölçekte kalkınmayı etkileyebilir.",
            "Borç krizleri, IMF ve küresel finans krizleri ekonomilerin birbirine bağlı (*interdependent*) olduğunu gösterir; mikrokredi de bir kalkınma stratejisidir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Tabloya göre hangisi doğrudur?",
      fig: { type: "table", caption: "Bir saatte üretim", head: ["Ülke", "Buğday", "Kumaş"], rows: [["X", "6 birim ya da", "3 birim"], ["Y", "2 birim ya da", "2 birim"]] },
      opts: ["X her iki malda mutlak üstün olduğu için ticaretten kazanmaz", "X buğdayda, Y kumaşta karşılaştırmalı üstünlüğe sahiptir; uzmanlaşıp takas ederlerse ikisi de kazanabilir", "Y her iki malda karşılaştırmalı üstündür", "X buğday için daha çok kumaş feda eder, bu yüzden Y buğdayda üstündür"],
      a: 1,
      why: "X'in buğday fırsat maliyeti 0,5 kumaş, Y'nin 1 kumaş: X buğdayda; Y'nin kumaş fırsat maliyeti 1 buğday, X'inki 2 buğday: Y kumaşta karşılaştırmalı üstündür. A şıkkı en çekici yanlış: mutlak üstünlüğü karşılaştırmalı üstünlükle karıştırıyor." },
    { q: "Bir ülke 8.000 TL'lik ithal bisiklete yüzde 25 tarife koyuyor. Yerli bisiklet 9.000 TL. Bu durumda ne olur?",
      opts: ["İthal bisiklet 8.000 TL olarak kalır ve yerli bisikletle yarışır", "İthal bisikletin fiyatı 6.000 TL'ye iner", "İthal bisiklet 10.000 TL olur; yerli bisiklet daha ucuz kalır ve yerli üretici korunur", "Tarife hiçbir fiyatı değiştirmez"],
      a: 2,
      why: "8.000 × 0,25 = 2.000; 8.000 + 2.000 = 10.000 TL > 9.000 TL. Tarife ithal malı pahalılaştırır. B şıkkı en çekici yanlış: tarife fiyatı düşürmez, yükseltir." },
    { q: "Aşağıdaki eşleşmelerden hangisi doğrudur?",
      opts: ["Mercosur: Güney Amerika'da üyeler arasında ticareti serbestleştiren bir ortak pazar", "OPEC: tüm dünya ticaretinin kurallarını koyan örgüt", "WTO: yalnızca Avrupa ülkelerinin kurduğu ortak para birliği", "AB: petrol fiyatını belirlemek için kurulan örgüt"],
      a: 0,
      why: "Mercosur Güney Amerika'da ticareti serbestleştirir. D şıkkı en çekici yanlış: petrol fiyatını etkileyen örgüt OPEC'tir; AB tek pazar ve siyasi birliktir." },
    { q: "ABD'de başlayan bir finans krizi kısa sürede Avrupa ve Asya'daki bankaları ve ihracatı da vuruyor. Bu durum neyi gösterir?",
      opts: ["Her ülkenin ekonomisinin tamamen bağımsız olduğunu", "Ticaretin bir ülke için asla fayda sağlamadığını", "Küresel finansın bölgesel olduğunu", "Ekonomilerin birbirine bağlı, hatta karşılıklı bağımlı hale geldiğini"],
      a: 3,
      why: "Krizin sınır tanımaması karşılıklı bağımlılığın işaretidir. A şıkkı en çekici yanlış: tam tersini söylüyor; kriz yayıldığına göre ekonomiler bağımsız değildir." },
    { q: "Bir ülke, çok fazla balığı olup tarım ürünü yetiştiremezken diğer ülke çok buğday üretip balığı yoktur. İki ülke arasındaki ticaretin temel nedeni hangisidir?",
      opts: ["Complementarity: birinin fazlası diğerinin eksiğini karşılıyor", "Tarife: ikisi de birbirine vergi koyuyor", "Neoliberal politikalar zorunlu kılıyor", "OPEC kararı"],
      a: 0,
      why: "Bir yerin fazlası başka yerin ihtiyacı olduğunda tamamlayıcılık ticareti doğurur. B şıkkı en çekici yanlış: tarife ticaretin temeli değil, ticareti etkileyen bir araçtır." }
  ]
};
