/* Kitpath not defteri · hg602 · Dünyanın Kentleri
   Kaynak: AP HuG CED Topic 6.2 (PSO-6.A.3, PSO-6.A.4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg602",
  amac: "Bu konu dünyadaki kent biçimlerini anlatıyor: çok büyük kentler (*megacity*, *metacity*) nerede toplanıyor, banliyöler nasıl yayılıyor ve yayılma *edge city*, *exurb*, *boomburb* gibi yeni yerleşim türlerini nasıl doğuruyor.",
  bolumler: [
    {
      baslik: "*Megacity* ve *metacity*",
      kisa: "*Megacity* 10 milyonu, *metacity* 20 milyonu aşan kenttir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌆", terim: "Megacity", tr: "mega kent", tanim: "Nüfusu 10 milyonu aşan kent (kentsel bölge).", ornek: "İstanbul bir *megacity*dir." },
            { ikon: "🌃", terim: "Metacity", tr: "meta kent", tanim: "Nüfusu 20 milyonu aşan, *megacity*den de büyük kent.", ornek: "Tokyo, Delhi ve Şanghay gibi devasa kentler." }
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 10, sonek: " milyon+", etiket: "*Megacity* eşiği" },
            { deger: 20, sonek: " milyon+", etiket: "*Metacity* eşiği" }
          ] }
      ]
    },
    {
      baslik: "Büyük kentler neden çevre ve yarı çevrede?",
      kisa: "Yeni *megacity* ve *metacity*'lerin çoğu çevre ve yarı çevre ülkelerinde.",
      bloklar: [
        { tip: "harita", merkez: "Çevre ve yarı çevrede hızlı kent büyümesi", dallar: [
            { baslik: "Yüksek doğal artış", alt: "Çocuk ve genç nüfus çok; kentte de nüfus artar" },
            { baslik: "Köyden kente göç", alt: "Tarımda iş azalır, kentte iş ve okul çeker" },
            { baslik: "İhracat ve hizmet işleri", alt: "Fabrikalar ve hizmet işleri büyük kentlerde toplanır" },
            { baslik: "Hizmetler tek merkezde", alt: "Hastane, üniversite, liman çoğu zaman en büyük kentte" },
            { baslik: "Altyapı yetişemez", alt: "Gecekondu, trafik, kirlilik, su ve atık sorunu" }
          ] },
        { tip: "tuzak", metin: "Kentin büyüklüğü ile ülkenin zenginliğini karıştırma.", yanlis: "En büyük kentler, en zengin ülkelerin kentleridir.", dogru: "Bugün yeni *megacity*'lerin ve *metacity*'lerin çoğu ==çevre ve yarı çevre== ülkelerindedir; hızlı büyüme altyapıyı aşıyor. Büyük olmak, kentin dünya ekonomisindeki gücünü (6.3) göstermez." }
      ]
    },
    {
      baslik: "Banliyöleşme, yayılma ve merkezsizleşme",
      kisa: "Kent çevresine yayılınca *sprawl*, işler de çevreye giderse *decentralization* olur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏘️", terim: "Suburbanization", tr: "banliyöleşme", tanim: "Nüfusun ve işlerin kent merkezinden çevredeki yerleşimlere kayması (6.1).", ornek: "Merkezdeki aileler bahçeli sitelere taşınır." },
            { ikon: "🧈", terim: "Urban sprawl", tr: "kentsel yayılma", tanim: "Kentin çevreye doğru düşük yoğunlukla, plansız yayılması; tarım arazisini ve doğal alanı tüketir.", ornek: "Her yeni sitenin ayrı bir otoyol çıkışı ve geniş otoparkı olması." },
            { ikon: "🧲", terim: "Decentralization", tr: "merkezsizleşme", tanim: "İş yerlerinin, alışveriş ve hizmetlerin tek bir merkezden çevreye dağılması.", ornek: "Ofislerin merkez yerine çevre yoluna taşınması." }
          ] },
        { tip: "tablo", baslik: "Üçü birbirini besler", head: ["Süreç", "Neyin yer değiştirdiği", "Sonuç"], rows: [
            ["*Suburbanization*", "İnsanlar", "Çevrede konut alanları"],
            ["*Decentralization*", "İşler ve hizmetler", "Çevrede iş merkezleri"],
            ["*Sprawl*", "Yerleşimin biçimi", "Düşük yoğunluk, geniş alan, araca bağımlılık"]
          ] }
      ]
    },
    {
      baslik: "Yeni kent biçimleri: *edge city*, *exurb*, *boomburb*",
      kisa: "Yayılma, çevrede iş merkezleri ve uzak konut alanları doğurur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏢", terim: "Edge city", tr: "kenar kent", tanim: "Ana kentin çevresinde, ofis, alışveriş ve iş yerlerinin toplandığı yeni merkez. İnsanlar sadece yatmaz, burada çalışır da.", ornek: "Çevre yolu üstündeki ofis kuleleri ve alışveriş merkezi bölgesi." },
            { ikon: "🌳", terim: "Exurb", tr: "uzak banliyö", tanim: "Banliyölerin de ötesinde, kırsal görünümlü, düşük yoğunluklu, çoğu işe araçla uzaktan gidip gelen yerleşim.", ornek: "Şehir dışında büyük arsalı evler." },
            { ikon: "🚀", terim: "Boomburb", tr: "hızlı büyüyen banliyö", tanim: "Nüfusu yüz binleri bulan ve onlarca yıldır hızla büyüyen banliyö. Ana kentin yatak semti olmaktan çıkıp kendi merkezi olan bir şehre benzer.", ornek: "Bir banliyösünün kısa sürede küçük bir şehre dönüşmesi." }
          ] },
        { tip: "grafik", baslik: "Merkezden uzaklaştıkça yoğunluk ve iş", xlabel: "Merkezden uzaklık (km)", ylabel: "Yoğunluk (konut ve iş)", xmax: 10, ymax: 10,
          xticks: [{ v: 0, label: "0" }, { v: 5, label: "5" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "eski", tip: "egri", renk: 1, kesik: true, etiket: "", noktalar: [[0, 9], [1, 7], [2, 5], [3, 3.6], [4, 2.6], [5, 2], [6, 1.5], [7, 1.2], [8, 1], [9, 0.8], [10, 0.6]], gizli: true },
            { id: "k", tip: "egri", renk: 0, etiket: "Yoğunluk", noktalar: [[0, 9], [1, 7], [2, 5], [3, 3.6], [4, 2.6], [5, 2], [6, 1.5], [7, 1.2], [8, 1], [9, 0.8], [10, 0.6]] },
            { id: "cbd", tip: "nokta", x: 0, y: 9, etiket: "CBD", gizli: true },
            { id: "sub", tip: "nokta", x: 3, y: 3.6, etiket: "Banliyö", kilavuz: true, gizli: true },
            { id: "edge", tip: "nokta", x: 6, y: 4.4, etiket: "Edge city", kilavuz: true, gizli: true },
            { id: "ex", tip: "nokta", x: 9, y: 0.9, etiket: "Exurb", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Tek merkezli kent: iş ve konut yoğunluğu merkezden (*CBD*) uzaklaştıkça düzgünce azalır.", goster: ["cbd"] },
            { metin: "==Banliyöleşme==: insanlar çevreye taşınır. Konutlar yayılır, yoğunluk düşük kalır.", goster: ["sub"] },
            { metin: "==Merkezsizleşme==: ofisler ve alışveriş merkezleri de çevreye gidince ikinci bir tepe doğar: *edge city*. Eski eğri kesikli kalır.", goster: ["eski", "edge"], set: { k: { noktalar: [[0, 9], [1, 7], [2, 4.6], [3, 3], [4, 2.4], [5, 2.9], [6, 4.4], [7, 3], [8, 1.4], [9, 0.9], [10, 0.6]] }, sub: { y: 3 } } },
            { metin: "Daha uzakta, düşük yoğunluklu ve kırsal görünümlü ==*exurb*== kuşağı başlar. *Boomburb* ise bu çevre kuşağındaki hızla büyüyen yerleşimdir.", goster: ["ex"] }
          ] }
      ]
    },
    {
      baslik: "Yayılmanın yeni sorunları",
      kisa: "Yayılma araç bağımlılığı, tarım arazisi kaybı ve eşitsizlik getirir.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🚗", baslik: "Araç bağımlılığı", metin: "Mesafeler uzar, trafik ve hava kirliliği artar." },
            { ikon: "🌾", baslik: "Arazi kaybı", metin: "Tarım arazisi ve doğal alan konuta dönüşür." },
            { ikon: "🏗️", baslik: "Pahalı altyapı", metin: "Yol, su ve kanal ağı seyrek yerleşimde kişi başına daha pahalıdır." },
            { ikon: "🏚️", baslik: "Merkez zayıflar", metin: "Nüfus ve iş çevreye giderse kent merkezi yatırım ve vergi kaybeder." },
            { ikon: "🧱", baslik: "Ayrışma", metin: "Çevredeki sitelere taşınamayanlar merkezde kalır; gelire göre mekânsal ayrışma artar." }
          ] },
        { tip: "tuzak", metin: "*Edge city* ile yatak banliyö aynı şey değildir.", yanlis: "*Edge city* kentin çevresindeki konut alanıdır.", dogru: "*Edge city* çevrede kurulmuş bir ==iş ve alışveriş merkezi==dir. Ağırlıklı olarak konut olan yer bir banliyödür; banliyöden de uzak, kırsal görünümlü yerleşim *exurb*'dür." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Megacity* 10 milyonu, *metacity* 20 milyonu aşan kenttir.",
            "Yeni *megacity* ve *metacity*'lerin çoğu çevre ve yarı çevre ülkelerinde: yüksek doğal artış, köyden kente göç, iş fırsatları.",
            "Hızlı büyüme altyapıyı aşar: gecekondu, trafik, kirlilik, su ve atık sorunu.",
            "*Suburbanization* insanların, *decentralization* işlerin çevreye kaymasıdır; *sprawl* düşük yoğunluklu, plansız yayılmadır.",
            "*Edge city* = çevrede iş ve alışveriş merkezi; *exurb* = banliyöden de uzak, kırsal görünümlü, düşük yoğunluklu; *boomburb* = çok hızlı büyüyen banliyö.",
            "Yayılmanın sorunları: araç bağımlılığı, arazi kaybı, pahalı altyapı, zayıflayan merkez, gelire göre ayrışma."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Nüfusu 12 milyon olan bir kent hangi terimle en iyi tanımlanır?",
      opts: ["*Metacity*", "*Edge city*", "*Megacity*", "*Boomburb*"],
      a: 2, why: "10 milyonu aşan kent *megacity*dir. *Metacity* için 20 milyondan fazla gerekir; en çekici yanlış şık budur. *Edge city* ve *boomburb* kentin büyüklüğünü değil, çevredeki yerleşim biçimini anlatır." },
    { q: "Son yıllarda yeni *megacity*'lerin çoğu hangi ülke grubunda ortaya çıkmaktadır?",
      opts: ["Çevre ve yarı çevre ülkelerinde, çünkü köyden kente göç ve yüksek doğal artış nüfusu hızla kentte topluyor", "Çekirdek ülkelerde, çünkü zengin ülkeler daha yüksek doğal artış gösterir", "Yalnızca küçük ada ülkelerinde", "Çekirdek ülkelerde, çünkü sanayi devrimi orada yeni başlıyor"],
      a: 0, why: "Yeni büyük kentler çoğunlukla çevre ve yarı çevrede: göç ve doğal artış kentleri çok hızlı büyütüyor. B yanlıştır: çekirdek ülkelerde doğal artış düşüktür. D de yanlıştır: sanayi devrimi çekirdekte çok önce yaşandı." },
    { q: "Bir kentin çevre yolunda ofis kuleleri, büyük bir alışveriş merkezi ve oteller toplanmış; çalışanların çoğu da çevrede oturuyor. Bu yerleşim en iyi hangi terimle açıklanır?",
      opts: ["*Exurb*", "*Metacity*", "*Boomburb*", "*Edge city*"],
      a: 3, why: "Çevrede toplanan iş, alışveriş ve ofis merkezi *edge city*dir. *Boomburb* hızlı büyüyen banliyöyü anlatır, iş merkezi olması şart değildir; en çekici yanlış şık budur. *Exurb* kırsal görünümlü ve düşük yoğunluklu uzak yerleşimdir." },
    { q: "Tablodaki iki yoğunluk sütunu aynı kentin farklı zamanlarını göstermektedir. Eski sütundan yeni sütuna geçişi hangi süreç en iyi açıklar?",
      fig: { type: "table", head: ["Merkezden uzaklık", "Eski yoğunluk", "Yeni yoğunluk"], rows: [["2 km", "5", "4,6"], ["4 km", "2,6", "2,4"], ["6 km", "1,5", "4,4"], ["9 km", "0,8", "0,9"]], caption: "Yoğunluk (konut ve iş)" },
      opts: ["Merkezin yeniden canlanıp yoğunlaşması", "Çevrede iş merkezi oluşması: *decentralization* ve *edge city*", "Bütün nüfusun kırsala dönmesi", "Kentin küçülmesi"],
      a: 1, why: "6 km'de yoğunluk 1,5'ten 4,4'e çıkıyor: çevrede yeni bir iş merkezi doğmuş, yani *decentralization* ve *edge city*. 2 ve 4 km'de yoğunluk biraz düşmüş; A yanlıştır çünkü merkeze yakın yerlerde yoğunluk artmıyor. D de yanlıştır: kent küçülmüyor, merkezin dışındaki yoğunluk artıyor." },
    { q: "Banliyöleşme ve kentsel yayılmanın sonuçları olarak hangisi **doğru değildir**?",
      opts: ["Araç bağımlılığının ve trafiğin artması", "Tarım arazisi ve doğal alanın azalması", "Seyrek yerleşimde kişi başına altyapı maliyetinin düşmesi", "Merkezin yatırım ve vergi kaybetmesi"],
      a: 2, why: "Seyrek yerleşimde yol, su ve kanal ağı daha uzun olduğundan kişi başına altyapı maliyeti ==artar==, düşmez; C yanlış olan şıktır. Diğerleri yayılmanın bilinen sonuçlarıdır." }
  ]
};
