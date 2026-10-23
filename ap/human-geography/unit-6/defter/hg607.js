/* Kitpath not defteri · hg607 · Altyapı
   Kaynak: AP HuG CED Topic 6.7 (IMP-6.B.1). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg607",
  amac: "Bu konu kentin altyapısının (yol, toplu taşıma, su, enerji, iletişim) nerede ve ne kalitede olduğunun kentin ekonomik ve toplumsal gelişimini nasıl yönlendirdiğini anlatıyor. Altyapının siyaset, toplum ve çevreyle ilişkisini öğreneceksin.",
  bolumler: [
    {
      baslik: "Altyapı nedir?",
      kisa: "Altyapı, kentin işleyişini sağlayan yol, su, enerji ve iletişim ağlarıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏗️", terim: "Infrastructure", tr: "altyapı", tanim: "Bir kentin ya da bölgenin çalışmasını sağlayan fiziksel ve örgütsel sistemlerin tümü: ulaşım, su, enerji, iletişim ve atık sistemleri. Çoğu devlet ya da belediye tarafından kurulur.", ornek: "Metro hattı, kanalizasyon borusu, fiber internet kablosu." }
          ] },
        { tip: "harita", merkez: "Kent altyapısı", dallar: [
            { baslik: "Ulaşım", alt: "Yollar, köprüler, metro, tramvay, otobüs, liman, havalimanı" },
            { baslik: "Su ve kanalizasyon", alt: "İçme suyu şebekesi, atık su arıtma" },
            { baslik: "Enerji", alt: "Elektrik, doğal gaz, ısıtma" },
            { baslik: "İletişim", alt: "Telefon, internet, fiber ağ" },
            { baslik: "Atık", alt: "Çöp toplama, geri dönüşüm, depolama" },
            { baslik: "Toplumsal hizmet binaları", alt: "Okul, hastane, park" }
          ] }
      ]
    },
    {
      baslik: "Konum: altyapı nereye, gelişme oraya",
      kisa: "Altyapının konumu fiyatı, yoğunluğu ve yatırımı çeker.",
      bloklar: [
        { tip: "grafik", baslik: "Metro hattı açılınca konut fiyatı (şematik)", xlabel: "İstasyondan uzaklık", ylabel: "Konut fiyatı (endeks)", xmax: 10, ymax: 10,
          xticks: [{ v: 0, label: "0" }, { v: 5, label: "500 m" }, { v: 10, label: "1 km" }],
          ogeler: [
            { id: "eski", tip: "egri", renk: 1, kesik: true, etiket: "", noktalar: [[0, 4], [2, 3.8], [4, 3.6], [6, 3.4], [8, 3.3], [10, 3.2]], gizli: true },
            { id: "c", tip: "egri", renk: 0, etiket: "Fiyat", noktalar: [[0, 4], [2, 3.8], [4, 3.6], [6, 3.4], [8, 3.3], [10, 3.2]] },
            { id: "ok", tip: "ok", renk: 3, from: [0.7, 4.3], to: [0.7, 7.2], gizli: true },
            { id: "yz", tip: "yazi", x: 6.5, y: 8.8, metin: "Yatırım ve iş istasyona toplanır", gizli: true }
          ],
          durumlar: [
            { metin: "Henüz metro yok: istasyona yakınlık fiyatı fazla etkilemez. Eğri neredeyse düzdür." },
            { metin: "==Metro hattı açılır==: ulaşım kolaylaşır, istasyon yanında fiyat sıçrar. Eski eğri kesikli kalır.", goster: ["eski", "ok"], set: { c: { noktalar: [[0, 7.5], [2, 6.5], [4, 5.2], [6, 4.2], [8, 3.6], [10, 3.3]] } } },
            { metin: "Fiyat artınca mağaza, ofis ve yeni konutlar istasyon çevresinde toplanır: ==altyapının konumu gelişmeyi yönlendirir==.", goster: ["yz"] }
          ] },
        { tip: "not", metin: "Altyapı yalnızca kalitesiyle değil konumuyla da gelişmeyi kentte bir yere çeker. İstanbul'da metro ve Marmaray hatları çevrelerindeki ilçelerde konut ve iş yeri yoğunluğunu artırdı. Aynı şekilde yeni köprüler ve otoyollar kentin kuzeye doğru büyümesini hızlandırdı; bu da orman alanları üzerinde baskı yarattı." }
      ]
    },
    {
      baslik: "Altyapı siyasetten bağımsız değildir",
      kisa: "Altyapı kararları yerel siyasetin, toplumsal eşitliğin ve çevrenin işidir.",
      bloklar: [
        { tip: "tablo", baslik: "Altyapının üç ilişkisi", head: ["Boyut", "Altyapı nasıl bağlantılı?", "Örnek"], rows: [
            ["Yerel siyaset", "Bütçe ve güzergâhı seçilmiş yöneticiler, kurumlar ve baskı grupları belirler", "Metro hattının hangi ilçelerden geçeceği"],
            ["Toplum", "Altyapıya erişim fırsatları ve eşitsizliği belirler", "Bir mahallede temiz su, hızlı internet ve düzenli otobüs var; yan mahallede yok"],
            ["Çevre", "Altyapı doğal sistemleri değiştirir", "Asfalt yağmur suyunu emmez, sel riskini artırır; arıtma tesisi nehri korur"]
          ] },
        { tip: "tuzak", metin: "Altyapı kararlarını yalnızca mühendislik sanma.", yanlis: "Altyapı yatırımı tamamen teknik bir karardır; kime fayda sağladığı önemli değildir.", dogru: "Güzergâh, bütçe ve öncelik ==siyasi tercihlerdir==. Bir otoyol bir mahalleyi ikiye bölebilir, bir metro başka bir mahalleyi değerlendirir; kimin kazanıp kaybettiği toplumsal ve çevresel sonuç doğurur." }
      ]
    },
    {
      baslik: "Ulaşım altyapısı kentin biçimini belirler",
      kisa: "Otoyol seyrek yayılmayı, toplu taşıma yoğun gelişmeyi destekler.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🛣️", baslik: "Otomobil altyapısı", maddeler: ["Otoyol, geniş cadde, otopark", "Seyrek yayılma, uzak banliyöler, araç bağımlılığı"] },
          sag: { ikon: "🚇", baslik: "Toplu taşıma altyapısı", maddeler: ["Metro, tramvay, otobüs şeridi", "Duraklar çevresinde yoğun ve karma gelişme"] },
          oyun: [
            { metin: "Yeni çevre yolu açılınca uzak arsalarda siteler yükselir.", cevap: "sol", neden: "Otoyol yayılmayı kolaylaştırır." },
            { metin: "Metro istasyonunun çevresinde mağaza ve yüksek katlı konutlar yoğunlaşır.", cevap: "sag", neden: "Toplu taşıma istasyon çevresini yoğunlaştırır." },
            { metin: "Her yeni mahalle kendi otoparkı ve geniş yoluyla planlanır.", cevap: "sol", neden: "Araç yönelimli tasarım." },
            { metin: "İnsanlar işe metroyla gidip akşam mahalle çarşısında alışveriş yapar.", cevap: "sag", neden: "Yürünebilirlik ve toplu taşıma." }
          ] },
        { tip: "adimlar", baslik: "Yeni otoyoldan yayılmaya", adimlar: [
            { baslik: "Yeni otoyol", metin: "Uzak arsalar araçla kısa sürede ulaşılabilir olur." },
            { baslik: "Arazi değer kazanır", metin: "Çıkışlar çevresinde siteler, alışveriş merkezleri açılır." },
            { baslik: "Araç sayısı artar", metin: "Yolculuk uzar; trafik ve hava kirliliği çoğalır." },
            { baslik: "Yeni yol talebi", metin: "Yeni yollar yapılır, kent daha da yayılır." }
          ] }
      ]
    },
    {
      baslik: "Altyapı eşitsizliği",
      kisa: "Altyapı eksik mahallelerde iş, sağlık ve eğitime erişim zorlaşır.",
      bloklar: [
        { tip: "ornek", baslik: "İki mahalle, iki yolculuk", durum: "Ayşe metro hattının yakınında oturuyor ve işine 25 dakikada gidiyor. Can ise hat olmayan bir mahallede oturuyor; otobüs ve yürüyüşle işine 70 dakikada gidiyor. İkisi de haftada 5 gün, gidiş ve dönüş yapıyor. Haftalık yolculuk süreleri arasındaki fark kaç saat?",
          adimlar: ["Ayşe: 25 dk × 2 × 5 = 250 dakika.", "Can: 70 dk × 2 × 5 = 700 dakika.", "Fark: 700 − 250 = 450 dakika = 7,5 saat."],
          sonuc: "Can her hafta ==7,5 saat== daha fazla yolda geçiriyor. Altyapının konumu zaman, iş seçeneği ve gelir fırsatını doğrudan etkiler." },
        { tip: "liste", maddeler: [
            { ikon: "💧", baslik: "Su ve kanalizasyon yoksa", metin: "Hastalık, düşük yaşam kalitesi ve sağlık gideri artar." },
            { ikon: "🚌", baslik: "Toplu taşıma zayıfsa", metin: "İş ve okula erişim zorlaşır; hareketlilik düşer." },
            { ikon: "🌐", baslik: "İnternet yetersizse", metin: "Uzaktan eğitim, iş başvurusu ve dijital hizmetlerden yararlanmak zorlaşır." },
            { ikon: "💡", baslik: "Aydınlatma ve altyapı bakımı eksikse", metin: "Güvenlik ve yatırım çekme gücü düşer; mahalle gelişmeden kalır." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Infrastructure* = ulaşım, su, enerji, iletişim ve atık gibi kentin işleyişini sağlayan ağlar.",
            "Altyapının konumu ve kalitesi, kentte ekonomik ve toplumsal gelişmenin nerede toplandığını belirler.",
            "Metro istasyonu çevresinde fiyat, yoğunluk ve yatırım artar; eğri istasyon yanında yükselir.",
            "Altyapı yerel siyaset (bütçe, güzergâh), toplum (erişim ve eşitlik) ve çevreyle (sel, kirlilik, orman baskısı) bağlantılıdır.",
            "Otomobil altyapısı seyrek yayılmayı, toplu taşıma altyapısı yoğun ve karma gelişmeyi destekler.",
            "Altyapıdan yoksun mahalleler iş, sağlık ve eğitime erişimde geride kalır; örnekte haftada 7,5 saat daha uzun yolculuk."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir kentte yeni bir metro hattı açılmıştır. Aşağıdakilerden hangisi istasyonlara 300 metre yakınlıktaki mahallelerde en olası sonuçtur?",
      opts: ["Konut ve arazi fiyatlarında düşüş", "Konut fiyatlarında artış ve ticari yoğunlaşma", "İstasyondan uzak yerlerde fiyat artışı", "Nüfusun hat boyunca azalması"],
      a: 1, why: "Metro erişimi istasyon çevresinde arazi değerini, ticareti ve yoğunluğu artırır. C çekici yanlıştır: fiyat artışı en çok istasyon çevresinde olur, uzakta değil." },
    { q: "Tablo iki mahallenin altyapı özelliklerini göstermektedir. Tablodan hangi çıkarım yapılabilir?",
      fig: { type: "table", head: ["Özellik", "A mahallesi", "B mahallesi"], rows: [["Kanalizasyona bağlı hane", "%98", "%40"], ["Metro erişimi", "Var", "Yok"], ["İşe ortalama yolculuk", "20 dk", "75 dk"]], caption: "Altyapı karşılaştırması (kurgusal)" },
      opts: ["İki mahallenin gelişme fırsatları aynıdır", "A mahallesi daha az gelişmiştir", "B mahallesinin sakinlerinin iş, sağlık ve hizmetlere erişimi daha zordur", "Altyapının mahalle gelişimiyle ilgisi yoktur"],
      a: 2, why: "B mahallesinde kanalizasyon düşük, metro yok ve yolculuk uzun; bu iş ve hizmetlere erişimi zorlaştırır. A en çekici yanlıştır: veri iki mahalle arasında açık bir fark gösterir." },
    { q: "Bir kentte yeni otoyolun güzergâhı, siyasi etkisi düşük bir mahalleyi ikiye bölmektedir. Bu durum aşağıdakilerden hangisini en iyi gösterir?",
      opts: ["Altyapı kararlarının yerel siyaset ve toplumsal eşitlikle ilişkili olduğunu", "Altyapının yalnızca mühendislik kararı olduğunu", "Otoyolların çevreyi etkilemediğini", "Altyapının ekonomik gelişmeyle ilgisi olmadığını"],
      a: 0, why: "Güzergâh bir siyasi tercihtir ve kimin kazanıp kaybedeceğini belirler. B en çekici yanlıştır: karar teknik görünse de siyaset ve toplum sonuçları vardır. C ve D de senaryoyla çelişir." },
    { q: "Bir kentte asfalt ve betonla kaplı alanlar çok artmış, yağmur yağdığında sık sık sel baskınları yaşanıyor. Altyapı ve çevre ilişkisi açısından en iyi açıklama hangisidir?",
      opts: ["Yağmurun artması tek neden", "Elektrik şebekesinin yetersizliği", "Toplu taşıma hatlarının fazla olması", "Geçirimsiz yüzeyler yağmurun toprağa sızmasını engelleyip yüzey akışını ve sel riskini artırır"],
      a: 3, why: "Asfalt ve beton suyu emmez; yağmur kanalizasyona ve sokaklara akar, sel riski artar. A çekici ama yetersizdir: senaryo yağmurun arttığını değil, yapılaşmanın arttığını anlatır." },
    { q: "Bir belediye dar bir alanda yoğun, yürünebilir ve karma kullanımlı gelişmeyi teşvik etmek istiyor. Hangi altyapı yatırımı bu amaca en uygundur?",
      opts: ["Geniş otoyollar ve çok katlı otoparklar", "Kent dışındaki alışveriş merkezlerine giden yeni yollar", "Metro hattı ve istasyon çevresinde yaya yolları", "Her mahalleye ayrı bir çevre yolu"],
      a: 2, why: "Toplu taşıma ve yaya altyapısı istasyon çevresinde yoğun ve yürünebilir gelişmeyi destekler. A çekici yanlıştır: otoyol ve otopark seyrek, araca bağımlı yayılmayı kolaylaştırır." }
  ]
};
