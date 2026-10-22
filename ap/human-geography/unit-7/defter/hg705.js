/* Kitora not defteri · hg705 · Kalkınma Kuramları
   Kaynak: AP HuG CED Topic 7.5 (SPS-7.E.1). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg705",
  amac: "Bu konu ülkelerin neden farklı hızda kalkındığını açıklayan kuramları anlatıyor: Rostow'un büyüme aşamaları, Wallerstein'ın dünya sistemleri, bağımlılık kuramı ve emtia bağımlılığı. Her kuramın ana fikrini, güçlü ve zayıf yanını öğreneceksin.",
  bolumler: [
    {
      baslik: "Rostow: beş büyüme aşaması",
      kisa: "Rostow'a göre her ülke beş aşamadan geçerek geleneksel toplumdan kitlesel tüketime ulaşır.",
      bloklar: [
        { tip: "adimlar", baslik: "Rostow'un aşamaları", adimlar: [
            { baslik: "1. Traditional society (geleneksel toplum)", metin: "Geçimlik tarım, sınırlı teknoloji, üretimde sınırlı verimlilik." },
            { baslik: "2. Preconditions for take-off (kalkış öncesi)", metin: "Yol, liman ve eğitim altyapısı yapılır, yatırım artar, dış dünyayla ticaret başlar." },
            { baslik: "3. Take-off (kalkış)", metin: "Sanayileşme hızlanır; bir öncü sektör (ör. tekstil) hızla büyür." },
            { baslik: "4. Drive to maturity (olgunluğa ilerleyiş)", metin: "Sanayi çeşitlenir, ileri teknoloji yayılır, uluslararası ticaret artar." },
            { baslik: "5. Age of high mass consumption (kitlesel tüketim çağı)", metin: "Halk dayanıklı tüketim malı (otomobil, ev eşyası) ve hizmet tüketir." }
          ] },
        { tip: "grafik", baslik: "Rostow'un S eğrisi (şematik)", xlabel: "Zaman", ylabel: "Kişi başı üretim", xmax: 10, ymax: 10,
          ogeler: [
            { id: "e", tip: "egri", renk: 0, noktalar: [[0.5, 1], [2, 1.3], [3.5, 1.9], [4.5, 3.2], [5.5, 5.2], [7, 7.0], [8.5, 8.2], [9.5, 9.0]] },
            { id: "s1", tip: "nokta", x: 1.2, y: 1.15, etiket: "1", gizli: true },
            { id: "s2", tip: "nokta", x: 3, y: 1.7, etiket: "2", gizli: true },
            { id: "s3", tip: "nokta", x: 5, y: 4.2, etiket: "3", gizli: true },
            { id: "s4", tip: "nokta", x: 7, y: 7.0, etiket: "4", gizli: true },
            { id: "s5", tip: "nokta", x: 9, y: 8.6, etiket: "5", gizli: true }
          ],
          durumlar: [
            { metin: "Üretim yavaş büyür: ==geleneksel toplum== ve ==kalkış öncesi== dönemde eğri neredeyse düzdür.", goster: ["s1", "s2"] },
            { metin: "==Kalkış (take-off)== aşamasında eğri hızla yükselir: sanayi ve yatırım patlar.", goster: ["s3"] },
            { metin: "Olgunluk ve kitlesel tüketimde büyüme sürer ama hızı yavaşlar.", goster: ["s4", "s5"] }
          ] }
      ]
    },
    {
      baslik: "Rostow'un güçlü ve zayıf yanları",
      kisa: "Rostow kalkınmayı basit bir basamak merdiveni gibi gösterir; gerçek daha karmaşıktır.",
      bloklar: [
        { tip: "tablo", baslik: "Rostow'un değerlendirmesi", head: ["", "Güçlü yanı", "Sınırlılığı"], rows: [
            ["Anlatım", "Basit ve akılda kalır; kalkınmayı süreç olarak gösterir", "Gerçeği aşırı sadeleştirir"],
            ["Yol", "Bazı ülkelerin (ör. Güney Kore) sanayileşmesini anlamaya yardım eder", "Her ülke aynı yolu, aynı sırayla izlemez"],
            ["Bakış", "İç etkenleri (yatırım, altyapı) öne çıkarır", "Sömürge geçmişi ve eşitsiz ticareti yok sayar"],
            ["Model", "Batı sanayileşmesini örnek alır", "Batı'ya özgü ve doğrusal (*linear*) bir model"]
          ], vurgu: 1 },
        { tip: "tuzak", metin: "Rostow modeli bir tahmin değil bir modeldir.", yanlis: "Rostow'a göre her ülke aynı hızda aynı beş aşamadan geçer ve sonunda zengin olur.", dogru: "Rostow aşamaları anlatır ama ==aşamaların hızı ve sırası ülkeden ülkeye değişir==; modelin eleştirisi tam da **herkesin aynı yolu izleyeceğini varsaymasıdır**." }
      ]
    },
    {
      baslik: "Wallerstein: dünya sistemleri kuramı",
      kisa: "Dünya tek bir ekonomidir; çekirdek, yarı çevre ve çevre birbirine bağlı ve eşitsizdir.",
      bloklar: [
        { tip: "harita", merkez: "*World-systems theory* (Wallerstein)", dallar: [
            { baslik: "*Core* (çekirdek)", alt: "Yüksek teknoloji, finans, yüksek ücret; ör. ABD, Batı Avrupa, Japonya" },
            { baslik: "*Semi-periphery* (yarı çevre)", alt: "Sanayi var ama çekirdeğe bağımlı; hem sömüren hem sömürülen; ör. Brezilya, Meksika, Hindistan" },
            { baslik: "*Periphery* (çevre)", alt: "Hammadde, düşük ücret, basit işçilik; ör. Orta Afrika'daki birçok ülke" }
          ] },
        { tip: "ikili", sol: { ikon: "🏙️", baslik: "*Core*", maddeler: ["Sermaye ve bilgi yoğun üretim, yüksek ücret", "Çevreden ham madde ve ucuz işçilik alır"] },
          sag: { ikon: "⛏️", baslik: "*Periphery*", maddeler: ["Ham madde ihracı, düşük ücret", "Çekirdeğe bağımlı, pazarlık gücü zayıf"] },
          oyun: [
            { metin: "Bir ülke bilgisayar çipi tasarlayıp yüksek fiyata satıyor.", cevap: "sol", neden: "Yüksek teknoloji ve yüksek katma değer: çekirdek." },
            { metin: "Bir ülke ihracatının çoğunu ham kahveden elde ediyor.", cevap: "sag", neden: "Hammadde bağımlılığı: çevre." },
            { metin: "Bir ülke finans merkezi olup küresel şirket merkezlerine ev sahipliği yapıyor.", cevap: "sol", neden: "Finans ve kontrol işlevi: çekirdek." },
            { metin: "Bir ülke çekirdek şirketlerin basit işçilik fabrikalarına ucuz işgücü sağlıyor.", cevap: "sag", neden: "Ucuz işgücü ve basit işler: çevre." }
          ] },
        { tip: "tablo", baslik: "Üç kuşak", head: ["", "Core", "Semi-periphery", "Periphery"], rows: [
            ["Üretim", "Bilgi ve sermaye yoğun", "Karışık: sanayi + hammadde", "Hammadde ve basit imalat"],
            ["Ücret", "Yüksek", "Orta", "Düşük"],
            ["İlişki", "Çevreyi ve yarı çevreyi kontrol eder", "Çekirdeğe bağımlı, çevreyle de ilişkili", "Çekirdeğe bağımlı ve pazarlık gücü zayıf"]
          ] }
      ]
    },
    {
      baslik: "Bağımlılık kuramı",
      kisa: "Bağımlılık kuramına göre yoksulluğun nedeni dış sömürü ve eşitsiz ticaret ilişkisidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔗", terim: "Dependency theory", tr: "bağımlılık kuramı", tanim: "Yoksul ülkelerin geri kalmasını, sömürge geçmişi ve zengin ülkelere ham madde satıp mamul alma gibi eşitsiz ticaret ilişkilerine bağlayan kuram.", ornek: "Ucuza kahve satıp pahalıya makine alan ülke." }
          ] },
        { tip: "ikili", sol: { ikon: "📈", baslik: "Rostow", maddeler: ["Gelişme iç etkenlere (yatırım, altyapı) bağlı", "Herkes aynı aşamalardan geçer; yoksul ülke 'geride' kalmıştır"] },
          sag: { ikon: "🔗", baslik: "Bağımlılık kuramı", maddeler: ["Geri kalma dış etkenlerden gelir: sömürge geçmişi ve eşitsiz ticaret", "Yoksul ülke geride değil, sistem tarafından geri tutulmaktadır"] },
          oyun: [
            { metin: "Altyapı ve yatırım artarsa ülke kalkış aşamasına geçer.", cevap: "sol", neden: "İç etkenlere ve aşamalara vurgu: Rostow." },
            { metin: "Sömürge dönemi ve bugünkü eşitsiz ticaret ülkeyi yoksul tutuyor.", cevap: "sag", neden: "Dış sömürü ve eşitsiz ilişki: bağımlılık kuramı." },
            { metin: "Her ülke beş aşamadan geçer.", cevap: "sol", neden: "Aşamalı, doğrusal model: Rostow." },
            { metin: "Çevre ülkeler hammadde satıp pahalı mamul almak zorunda kalıyor.", cevap: "sag", neden: "Eşitsiz ticaret: bağımlılık kuramı." }
          ] },
        { tip: "tuzak", metin: "Wallerstein ile bağımlılık kuramını karıştırma.", yanlis: "Wallerstein'ın kuramı ile bağımlılık kuramı tamamen aynıdır.", dogru: "İkisi de çekirdek-çevre eşitsizliğini vurgular; fakat ==Wallerstein üçüncü bir kuşak olan *semi-periphery*'yi ekler== ve dünyayı tek bir kapitalist sistem olarak görür." }
      ]
    },
    {
      baslik: "Emtia bağımlılığı",
      kisa: "Tek bir ham maddeye bağımlı ülkenin geliri, o ürünün fiyatıyla inip çıkar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛢️", terim: "Commodity dependence", tr: "emtia bağımlılığı", tanim: "Ülke gelirinin çoğunun tek ya da birkaç ham madde ihracatından (petrol, bakır, kakao, kahve) gelmesi. Dünya fiyatı düşünce ülkenin geliri de düşer.", ornek: "Bakır ihracatına dayanan bir ülkede bakır fiyatı çökerse bütçe de çöker." }
          ] },
        { tip: "grafik", baslik: "Emtia fiyatı ve ülke geliri", xlabel: "Yıl", ylabel: "Fiyat / gelir (göreli)", xmax: 10, ymax: 10,
          ogeler: [
            { id: "fiyat", tip: "egri", renk: 0, etiket: "Bakır fiyatı", noktalar: [[0.5, 6], [2, 6.2], [3.5, 6.8], [5, 7], [6.5, 7], [8, 7], [9.5, 7]] },
            { id: "gelir", tip: "egri", renk: 1, etiket: "Ülke geliri", noktalar: [[0.5, 4.5], [2, 4.7], [3.5, 5.3], [5, 5.5], [6.5, 5.5], [8, 5.5], [9.5, 5.5]], gizli: true },
            { id: "cesit", tip: "egri", renk: 2, etiket: "Çeşitlenmiş ekonomi", noktalar: [[0.5, 4], [2, 4.2], [3.5, 4.6], [5, 4.9], [6.5, 4.8], [8, 4.8], [9.5, 5]], gizli: true }
          ],
          durumlar: [
            { metin: "Ülke ihracatının çoğunu ==tek bir ham maddeden== (bakır) elde ediyor; fiyat iyi seviyede." },
            { metin: "Ülkenin geliri ==fiyata bağlı== olarak hareket eder.", goster: ["gelir"] },
            { metin: "Dünya fiyatı çökünce ==gelir de çöker==. Bu *commodity dependence*'ın kırılganlığıdır.", set: { fiyat: { noktalar: [[0.5, 6], [2, 6.2], [3.5, 6.8], [5, 5.5], [6.5, 3.5], [8, 2.8], [9.5, 2.8]] }, gelir: { noktalar: [[0.5, 4.5], [2, 4.7], [3.5, 5.3], [5, 4.2], [6.5, 2.8], [8, 1.8], [9.5, 1.8]] } } },
            { metin: "Sanayi ve hizmetle ==çeşitlenen== bir ekonomi, tek bir fiyat şokundan daha az etkilenir.", goster: ["cesit"] }
          ] },
        { tip: "tuzak", metin: "Emtia bağımlılığı 'ham madde varlığı' demek değildir.", yanlis: "Ham maddesi bol olan her ülke emtia bağımlısıdır.", dogru: "==Bağımlılık gelirin neredeyse tamamının tek ya da birkaç üründen gelmesidir==; çeşitlenmiş ekonomisi olan ülke kaynak zengini olsa da bağımlı sayılmaz." }
      ]
    },
    {
      baslik: "Kuramları karşılaştırmak",
      kisa: "Her kuram, kalkınma farklarını farklı bir nedenle açıklar.",
      bloklar: [
        { tip: "tablo", baslik: "Dört kavram, dört bakış", head: ["Kuram", "Neden geri kalıyoruz?", "Bir sınırlılığı"], rows: [
            ["Rostow", "Henüz bir sonraki aşamaya geçmedik", "Herkesin aynı yoldan geçtiğini varsayar"],
            ["Wallerstein", "Çevrede kalıp çekirdeğe hammadde veriyoruz", "Yarı çevre sınırları bulanık"],
            ["Bağımlılık", "Sömürge geçmişi ve eşitsiz ticaret", "Doğu Asya'nın ihracatla yükselişini açıklamakta zorlanır"],
            ["Emtia bağımlılığı", "Gelir tek ürünün fiyatına bağlı", "Kaynak zengini her ülkeyi aynı sayabilir"]
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Rostow'un aşamaları: geleneksel toplum, kalkış öncesi, kalkış, olgunluğa ilerleyiş, kitlesel tüketim çağı.",
            "Rostow'un sınırlılığı: herkesin aynı doğrusal yolu izlediğini varsayar ve sömürge geçmişini yok sayar.",
            "Wallerstein: dünya tek bir sistemdir; *core*, *semi-periphery* ve *periphery* birbirine bağlı ve eşitsizdir.",
            "Çekirdek yüksek teknoloji ve finans, çevre hammadde ve düşük ücret, yarı çevre ikisinin karışımıdır.",
            "Bağımlılık kuramı: geri kalma, sömürge geçmişi ve eşitsiz ticaret ilişkisinin sonucudur; Rostow'un iç etkenlerine karşı dış etkenleri öne çıkarır.",
            "*Commodity dependence*: gelir tek ya da birkaç ham maddeye bağlıdır, fiyat düşünce gelir çöker.",
            "Kuramları yorumlarken hem güçlü yanını hem sınırlılığını söyleyebilmelisin."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir ülkede ekonomi büyük ölçüde geçimlik tarıma dayanıyor. Hükümet yeni yollar, limanlar ve okullar inşa ediyor, yatırım için dış kaynak çekiyor, ama sanayileşme henüz hızlanmadı. Rostow'a göre bu ülke hangi aşamadadır?",
      opts: ["Traditional society", "Take-off", "Preconditions for take-off", "Age of high mass consumption"],
      a: 2,
      why: "Altyapı ve yatırımın hazırlandığı ama sanayinin henüz patlamadığı evre 'kalkış öncesi'dir. En çekici yanlış şık B: take-off'ta sanayileşme hızla yükselir, burada henüz hızlanmamıştır." },
    { q: "Tabloya göre hangi ülke Wallerstein'ın sınıflandırmasında yarı çevre (semi-periphery) olarak en iyi tanımlanır?",
      fig: { type: "table", caption: "Üç ülke", head: ["Ülke", "İhracatın yapısı", "Ücret düzeyi"], rows: [["1", "Yüksek teknoloji, finans ve patentli ürünler", "Yüksek"], ["2", "Otomotiv ve tekstil imalatı; ham madde de ihraç ediyor", "Orta"], ["3", "Neredeyse yalnızca ham madde", "Düşük"]] },
      opts: ["2. ülke; çünkü hem sanayi ürünü hem ham madde ihraç ediyor ve ücretler ortada", "1. ülke; çünkü ihracatı çeşitlidir", "3. ülke; çünkü ücretleri düşüktür", "Hiçbiri; çünkü yarı çevre yalnızca Avrupa'da vardır"],
      a: 0,
      why: "Yarı çevre hem çekirdek hem çevre özellikleri taşır: sanayi ve ham madde, orta ücret. En çekici yanlış şık B: 1. ülke yüksek teknoloji ve finansla çekirdeğe aittir." },
    { q: "Bir ülke kahve ihraç edip makine ve elektronik ithal ediyor; kahve fiyatları düşük kalırken makine fiyatları yükseliyor. Bu durumu hangi kuram en iyi açıklar?",
      opts: ["Rostow'un kalkış aşaması", "Bağımlılık kuramı", "Yalnızca coğrafi şans", "Kitlesel tüketim çağı"],
      a: 1,
      why: "Ham madde satıp pahalı mamul almak, bağımlılık kuramının eşitsiz ticaret argümanıdır. A şıkkı en çekici yanlış: kalkış aşaması bu eşitsiz ticareti dikkate almaz, iç etkenlere odaklanır." },
    { q: "Bir ülke devlet gelirinin yüzde 80'ini kakao ihracatından elde ediyor. Tabloya göre hangi sonuca ulaşılır?",
      fig: { type: "table", caption: "Kakao fiyatı ve ülke geliri", head: ["Yıl", "Kakao fiyat endeksi", "Devlet geliri (milyar $)"], rows: [["1", 100, 10], ["2", 60, 6], ["3", 80, 8]] },
      opts: ["Gelir fiyatla ters yönde hareket eder", "Gelir fiyatla hiç ilgili değildir", "Fiyat 60'a inince devlet geliri de aynı oranda düşmüştür; ülke emtia bağımlısıdır ve kırılgandır", "Gelir her yıl artmıştır"],
      a: 2,
      why: "Fiyat 100'den 60'a düştüğünde gelir de 10'dan 6'ya (yüzde 40) düşmüştür; gelir tek ürünün fiyatını izliyor. A şıkkı en çekici yanlış: tabloda gelir fiyatla aynı yönde hareket ediyor." },
    { q: "Aşağıdakilerden hangisi Rostow modeline yöneltilen bir eleştiridir?",
      opts: ["Kalkınmanın hiçbir aşaması olmadığını söyler", "Bütün ülkelerin aynı doğrusal yolu izleyeceğini varsayar ve sömürge geçmişi ile eşitsiz ticareti dikkate almaz", "Dünyayı yalnızca iki kuşağa böler", "Yalnızca ham madde ihracatına dikkat eder"],
      a: 1,
      why: "Rostow'un temel zayıflığı tek tip, doğrusal bir yol varsaymasıdır. C şıkkı en çekici yanlış: iki kuşağa bölen bağımlılık kuramıdır, Rostow aşamalar önerir." }
  ]
};
