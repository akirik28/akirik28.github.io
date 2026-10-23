/* Kitpath not defteri · hg707 · Dünya Ekonomisinin Yol Açtığı Değişimler
   Kaynak: AP HuG CED Topic 7.7 (PSO-7.A.5–A.7). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg707",
  amac: "Bu konu küresel ekonominin üretimi ve işleri nasıl yeniden dağıttığını anlatıyor. Outsourcing'i, sanayisizleşmeyi, serbest bölgeleri, uluslararası iş bölümünü, Fordizmden post-Fordizme geçişi ve ölçek, yığılma ile çarpan etkisini öğreneceksin.",
  bolumler: [
    {
      baslik: "Outsourcing ve yeniden yapılanma",
      kisa: "Firmalar işleri ucuz yerlere kaydırınca çekirdekte iş azaldı, yeni sanayileşen ülkelerde arttı.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📤", terim: "Outsourcing", tr: "dış kaynak kullanımı", tanim: "Bir firmanın bir işi (üretim, çağrı merkezi, yazılım) başka bir firmaya yaptırması; çoğu zaman bu iş daha ucuz bir ülkeye kayar.", ornek: "Bir şirketin müşteri hizmetlerini başka ülkedeki çağrı merkezine vermesi." },
            { ikon: "🔄", terim: "Economic restructuring", tr: "ekonomik yeniden yapılanma", tanim: "Bir bölgenin ekonomisinin ağırlığının bir sektörden (ör. imalat) başka bir sektöre (ör. hizmet) kayması.", ornek: "Bir sanayi kentinin finans ve teknoloji merkezi olması." },
            { ikon: "🚀", terim: "Newly industrialized country (NIC)", tr: "yeni sanayileşen ülke", tanim: "Çekirdek dışında olup sanayisi hızla büyüyen ülke; fabrikaların kaydığı yer.", ornek: "Güney Kore, Tayvan, Meksika ve Çin." }
          ] },
        { tip: "grafik", baslik: "İşler nereye kayıyor? (şematik)", xlabel: "Zaman", ylabel: "İş sayısı (göreli)", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "Eskiden" }, { v: 9, label: "Bugün" }],
          ogeler: [
            { id: "cim", tip: "egri", renk: 0, etiket: "Çekirdekte imalat", noktalar: [[0.5, 8], [3, 8.4], [5, 6.4], [7, 4.5], [9.5, 3.4]] },
            { id: "nic", tip: "egri", renk: 1, etiket: "NIC'lerde imalat", noktalar: [[0.5, 1.5], [3, 2], [5, 4], [7, 6.4], [9.5, 8.2]], gizli: true },
            { id: "chz", tip: "egri", renk: 2, etiket: "Çekirdekte hizmet", noktalar: [[0.5, 3], [3, 3.5], [5, 4.6], [7, 6], [9.5, 7.4]], gizli: true }
          ],
          durumlar: [
            { metin: "Önce çekirdek ülkeler dünya imalatının merkezidir; çok sayıda fabrika işi vardır." },
            { metin: "Firmalar maliyeti düşürmek için üretimi ==*outsource*== eder: çekirdekte imalat işleri ==azalır.==", set: { cim: { noktalar: [[0.5, 8], [3, 6.8], [5, 5.4], [7, 4.3], [9.5, 3.4]] } } },
            { metin: "Aynı işler ==NIC'lerde artar==: fabrikalar ucuz işgücü olan ülkelere kayar.", goster: ["nic"] },
            { metin: "Çekirdekte işler ==hizmet ve bilgi alanlarına kayar==: *restructuring*.", goster: ["chz"] }
          ] },
        { tip: "tuzak", metin: "Outsourcing her zaman yurt dışına iş vermek demek değildir.", yanlis: "Outsourcing yalnızca yurt dışında olur ve çekirdeğin toplam işini yok eder.", dogru: "Outsourcing işi başka bir firmaya vermektir; yurt içinde de olabilir. AP bağlamında ==imalat işleri çekirdekten NIC'lere kayar==, ama çekirdekte hizmet işleri de büyür." }
      ]
    },
    {
      baslik: "Sanayisizleşme ve yeni ekonomi",
      kisa: "Fabrikalar kapanınca sanayi kenti çöker; ancak bazıları hizmet ve yüksek teknolojiye geçer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏚️", terim: "Deindustrialization", tr: "sanayisizleşme", tanim: "Bir bölgede imalat sanayisinin ve imalat işlerinin azalması. Fabrikalar kapanır ya da başka yere taşınır.", ornek: "Ruhr, Sheffield ve Detroit gibi eski sanayi bölgeleri." }
          ] },
        { tip: "adimlar", baslik: "Bir sanayi kenti nasıl dönüşür?", adimlar: [
            { baslik: "Fabrika kapanır", metin: "Üretim daha ucuz bir ülkeye taşınır; imalat işleri kaybolur." },
            { baslik: "Çarpan tersine işler", metin: "İşçilerin harcamasına dayanan kafe, market ve servis işleri de azalır." },
            { baslik: "Yeniden yapılanma", metin: "Kent hizmet sektörüne, yüksek teknolojiye ya da turizme yönelir; *service sector* ve *high technology industries* büyür." }
          ] }
      ]
    },
    {
      baslik: "Yeni sanayi bölgeleri: SEZ, FTZ ve EPZ",
      kisa: "Çekirdek dışında kurulan özel bölgeler, fabrikaları vergi avantajlarıyla çeker.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏙️", terim: "Special Economic Zone (SEZ)", tr: "özel ekonomik bölge", tanim: "Yabancı yatırımı çekmek için vergi indirimi ve esnek kurallar uygulanan geniş bölge.", ornek: "Çin'deki Shenzhen." },
            { ikon: "⚓", terim: "Free-Trade Zone (FTZ)", tr: "serbest ticaret bölgesi", tanim: "Malın gümrük vergisi ödenmeden girip depolandığı, işlendiği ve yeniden ihraç edildiği bölge; çoğu zaman limanların yanındadır.", ornek: "Türkiye'de Mersin'deki serbest bölge." },
            { ikon: "📦", terim: "Export-Processing Zone (EPZ)", tr: "ihracat işleme bölgesi", tanim: "İthal girdileri vergisiz alıp işleyen ve ürünün çoğunu ihraç eden fabrikalar için ayrılmış bölge.", ornek: "Meksika'nın ABD sınırındaki maquiladora fabrikaları." }
          ] },
        { tip: "ornek", baslik: "Bölgenin avantajı", durum: "EPZ'de bir tişört fabrikası 1.000 parça kumaş ithal ediyor. Normalde parça başına 5 TL gümrük vergisi var; bölgede yok. Bu vergisizlik fabrikaya ne kazandırır?",
          adimlar: ["Normal ülkede: 1.000 × 5 = 5.000 TL gümrük vergisi.", "Bölgede vergi 0 TL: 5.000 TL tasarruf.", "Tasarruf maliyeti düşürür, fabrika daha ucuza ihraç edebilir."],
          sonuc: "==Vergi ve kural avantajları fabrikayı çeker.== İşler çekirdekten bu bölgelere kayar; ama çoğu zaman düşük ücretli işlerdir." }
      ]
    },
    {
      baslik: "Uluslararası iş bölümü",
      kisa: "Çekirdek tasarım ve finansı, çevre ve yarı çevre düşük ücretli üretimi yapar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧠", baslik: "Çekirdekte kalan işler", maddeler: ["Tasarım, araştırma, finans, yönetim", "Yüksek ücretli, yüksek becerili"] },
          sag: { ikon: "🔧", baslik: "Çevre ve yarı çevreye giden işler", maddeler: ["Montaj, basit imalat, çağrı merkezi", "Düşük ücretli, çoğu zaman becerisiz"] },
          oyun: [
            { metin: "Bir telefonun tasarımını yapan mühendis ekibi.", cevap: "sol", neden: "Tasarım ve araştırma çekirdekte kalır." },
            { metin: "Telefonun parçalarını birleştiren montaj hattı işçisi.", cevap: "sag", neden: "Düşük ücretli montaj çevre ya da yarı çevreye gider." },
            { metin: "Şirketin küresel pazarlama ve finans kararlarını veren merkez.", cevap: "sol", neden: "Karar ve finans çekirdekte." },
            { metin: "Müşteri şikâyetlerini telefonla karşılayan çağrı merkezi çalışanı.", cevap: "sag", neden: "Düşük ücretli hizmet işi başka ülkeye kaydırılabilir." }
          ] },
        { tip: "tuzak", metin: "Bu bir iş bölümüdür; iş kaybı değil yeniden dağılımdır.", yanlis: "Uluslararası iş bölümünde gelişmekte olan ülkeler yüksek ücretli işleri yapar.", dogru: "CED: gelişmekte olan ülkeler ==daha düşük ücretli işleri== yapar. Yüksek ücretli, becerili işler (tasarım, finans) çekirdekte kalır." }
      ]
    },
    {
      baslik: "Fordizmden post-Fordizme",
      kisa: "Seri üretimden esnek, dağınık ve talebe göre üretime geçildi.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏭", baslik: "*Fordism* (Fordizm)", maddeler: ["Tek tip ürünün seri üretimi ve montaj hattı", "Büyük, tek yerde toplanmış fabrika"] },
          sag: { ikon: "🌐", baslik: "*Post-Fordism* (post-Fordizm)", maddeler: ["Esnek, küçük partilerle, müşteriye göre üretim", "Dünyaya yayılmış üretim, *outsourcing* ve *just-in-time*"] },
          oyun: [
            { metin: "Aynı model arabadan günde binlercesi montaj hattında üretiliyor.", cevap: "sol", neden: "Tek tip seri üretim: Fordizm." },
            { metin: "Parçalar farklı ülkelerden tam gerektiğinde geliyor, depoda stok yok.", cevap: "sag", neden: "*Just-in-time* teslim: post-Fordizm." },
            { metin: "Müşterinin seçtiği renk ve donanıma göre küçük partilerde üretim.", cevap: "sag", neden: "Esnek ve özelleştirilmiş üretim: post-Fordizm." },
            { metin: "Dev bir fabrikada tek bir ürünün tüm aşamaları aynı çatı altında.", cevap: "sol", neden: "Merkezî seri üretim: Fordizm." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "⏱️", terim: "Just-in-time delivery", tr: "tam zamanında teslim", tanim: "Parçaların ihtiyaç duyulduğu anda fabrikaya ulaşması; depolama maliyetini azaltır ama hızlı ve güvenilir ulaşım ister.", ornek: "Montaj hattına parçanın tam saatinde gelmesi." }
          ] }
      ]
    },
    {
      baslik: "Ölçek ekonomisi, yığılma, çarpan ve büyüme kutbu",
      kisa: "Büyük üretim ucuzlar, kümelenme avantaj sağlar, bir iş başka işleri doğurur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Economies of scale", tr: "ölçek ekonomisi", tanim: "Üretim arttıkça birim maliyetin düşmesi (firma düzeyinde).", ornek: "Bir kantin 100 tost yapınca birim 10 TL, 1.000 tost yapınca birim 6 TL." },
            { ikon: "🧲", terim: "Agglomeration", tr: "yığılma", tanim: "Benzer ya da bağlantılı firmaların bir yerde toplanıp ortak işgücü, tedarikçi ve bilgiden yararlanması.", ornek: "Silikon Vadisi'ndeki teknoloji şirketleri." },
            { ikon: "🌊", terim: "Multiplier effect", tr: "çarpan etkisi", tanim: "Yeni bir temel sanayinin yarattığı işlerin, çevrede ek hizmet ve destek işleri doğurması.", ornek: "Yeni fabrikanın çevresinde kafe, servis ve market açılması." },
            { ikon: "🌟", terim: "Growth pole", tr: "büyüme kutbu", tanim: "Bir öncü sektör ve yatırımın etrafında hızla büyüyen, çevre bölgeleri de çeken merkez.", ornek: "Bir teknoloji vadisi ya da büyük bir liman kenti." }
          ] },
        { tip: "ornek", baslik: "Çarpan etkisi hesabı", durum: "Bir fabrika 200 işçi alıyor. İşçilerin harcamaları (kantin, market, servis, kiralık ev) çevrede 100 ek iş doğuruyor. Toplam iş ve çarpan ne olur? Fabrika kapanırsa ne olur?",
          adimlar: ["Toplam iş: 200 + 100 = 300.", "Çarpan: 300 ÷ 200 = 1,5.", "Kapanırsa: 200 fabrika işi + 100 destek işi = 300 iş kaybolur."],
          sonuc: "Çarpan etkisi ==iki yönde== işler: açılış işleri çoğaltır, kapanış işleri çoğaltarak azaltır." },
        { tip: "tuzak", metin: "İki kavram sık karıştırılır.", yanlis: "*Economies of scale* ile *agglomeration* aynı şeydir.", dogru: "==*Economies of scale* bir firmanın büyüdükçe birim maliyetinin düşmesidir==; ==*agglomeration* ise farklı firmaların bir yerde kümelenmesidir.==" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Outsourcing* ve yeniden yapılanma çekirdekte imalat işlerini azalttı, yeni sanayileşen ülkelerde artırdı.",
            "*Deindustrialization* eski sanayi bölgelerinde fabrika ve iş kaybına yol açar; kentler hizmet ya da yüksek teknolojiye yönelebilir.",
            "*SEZ*, *FTZ* ve *EPZ* çekirdek dışında vergi ve kural avantajıyla fabrika çeken yeni sanayi bölgeleridir.",
            "Uluslararası iş bölümünde çekirdek tasarım ve finansı, gelişmekte olan ülkeler düşük ücretli işleri yapar.",
            "*Post-Fordism* esnek, dağınık, talebe göre üretimdir; *just-in-time* teslim stok maliyetini azaltır.",
            "*Economies of scale* birim maliyeti düşürür, *agglomeration* kümelenme avantajı verir.",
            "*Multiplier effect* ve *growth pole* bir sektörün çevresinde ek işler ve büyüme doğurur; çarpan iki yönde işler."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir otomobil üreticisi montaj hattını daha düşük ücretli bir ülkeye taşıyor, tasarım ve finans ekibini ise ana ülkesinde bırakıyor. Bu durumun sonucu olarak en olası değişim hangisidir?",
      opts: ["Ana ülkede imalat işleri azalır, yeni ülkede artar; ana ülkede tasarım ve finans işleri kalır", "İki ülkede de imalat işleri artar", "Ana ülkede tüm işler yok olur", "Yeni ülkede tasarım ve finans işleri doğar, imalat azalır"],
      a: 0,
      why: "Outsourcing ve uluslararası iş bölümünde imalat işleri ucuz ülkeye kayar, yüksek ücretli işler çekirdekte kalır. C şıkkı en çekici yanlış: çekirdekte iş tamamen yok olmaz, hizmet ve bilgi işlerine kayar." },
    { q: "Grafikteki iki eğri hangi gelişmeyi en iyi gösterir?",
      fig: { type: "graph", xlabel: "Zaman", ylabel: "İmalat işleri", xmax: 10, ymax: 10, lines: [{ from: [0.5, 8], to: [9.5, 3.4], label: "X" }, { from: [0.5, 1.5], to: [9.5, 8.2], label: "Y" }], caption: "Şematik eğriler" },
      opts: ["X çekirdek ülkelerde, Y yeni sanayileşen ülkelerde imalat işleri; işler çekirdekten NIC'lere kaymıştır", "X yeni sanayileşen ülkelerde, Y çekirdekte imalat işleri; işler NIC'lerden çekirdeğe kaymıştır", "İki eğri de çekirdekte imalat işlerini gösterir", "Grafik işlerin yer değiştirmediğini gösterir"],
      a: 0,
      why: "Çekirdekte imalat işleri azalırken NIC'lerde artar. B şıkkı en çekici yanlış: yönleri ters koyuyor." },
    { q: "Bir hükümet, ihracat için üretim yapan firmalara ithal girdilerde gümrük vergisi muafiyeti veren ve üretimin çoğunun yurt dışına satılacağı özel bir sanayi bölgesi kuruyor. Bu bölge en iyi hangi kavramla adlandırılır?",
      opts: ["Break-of-bulk point", "Growth pole", "Export-processing zone", "Quinary sector"],
      a: 2,
      why: "İthal girdiyi vergisiz alıp işleyen ve ihraç eden bölge EPZ'dir. B şıkkı en çekici yanlış: growth pole bir bölgenin büyümesini çeken merkezi anlatır, vergi muafiyeti değil." },
    { q: "Bir telefon üreticisi parçaları ihtiyaç duyduğunda satın alıyor, depoda stok tutmuyor ve ürünleri müşterinin seçimine göre küçük partilerde üretiyor. Bu üretim biçimi hangisidir?",
      opts: ["Fordizm", "Geleneksel geçimlik tarım", "Quinary sektör", "Post-Fordizm"],
      a: 3,
      why: "Esnek üretim, küçük partiler ve tam zamanında teslim post-Fordizmin özellikleridir. A şıkkı en çekici yanlış: Fordizm tek tip seri üretimdir." },
    { q: "Bir bölgede yeni kurulan fabrika 400 işçi çalıştırıyor ve çevrede 200 ek destek işi doğuruyor. Fabrika kapanırsa çarpan etkisi nedeniyle toplam kaç iş kaybolur?",
      opts: ["200", "600", "400", "800"],
      a: 1,
      why: "400 fabrika işi ve 200 destek işi: toplam 600. C şıkkı en çekici yanlış: yalnızca fabrika işlerini sayıyor; çarpan etkisi destek işlerini de kapsar." }
  ]
};
