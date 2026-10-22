/* Kitora not defteri · hg611 · Kentsel Sürdürülebilirliğin Sorunları
   Kaynak: AP HuG CED Topic 6.11 (SPS-6.B.1, SPS-6.B.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg611",
  amac: "Bu konu kentlerin çevreye ve doğal kaynaklara getirdiği yükü ve bunu hafifletmeye çalışan çözümleri anlatıyor: ekolojik ayak izi, yayılma, hava ve su kalitesi, sanitasyon, enerji ve iklim; bölgesel planlama, büyüme sınırları, tarım arazisi koruma ve *brownfield* yenileme.",
  bolumler: [
    {
      baslik: "Kentin ekolojik ayak izi",
      kisa: "Kent, kaplamadığı alandan da kaynak ve atık alanı kullanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👣", terim: "Ecological footprint", tr: "ekolojik ayak izi", tanim: "Bir nüfusun tükettiği kaynakları üretmek ve ürettiği atığı emmek için gereken kara ve su alanı.", ornek: "Kentin yediği yiyecek, kullandığı enerji ve attığı çöp başka alanlara dayanır." }
          ] },
        { tip: "ornek", baslik: "Kent kendi alanının kaç katını kullanıyor?", durum: "Bir kentte 1 milyon kişi yaşıyor ve kent 100 km² alan kaplıyor. Kişi başı ekolojik ayak izi 3 hektar olsun (varsayım). 1 km² = 100 hektar. Kentin ayak izi kendi alanının kaç katıdır?",
          adimlar: ["Kent alanı: 100 km² × 100 = 10.000 hektar.", "Toplam ayak izi: 1.000.000 × 3 = 3.000.000 hektar.", "Oran: 3.000.000 ÷ 10.000 = 300."],
          sonuc: "Kentin ayak izi kendi alanının ==300 katıdır==. Kent, ihtiyaçlarını kendi sınırlarının çok ötesinden karşılar." },
        { tip: "tuzak", metin: "Ayak izi, kentin harita üzerindeki kaplama alanı değildir.", yanlis: "Kent küçük bir alan kapladığı için çevreye etkisi de küçüktür.", dogru: "Etki ==ayak iziyle== ölçülür: yiyecek, su, enerji ve atık için kullanılan tüm alan. Büyük ve zengin kentlerin ayak izi, kapladıkları alanın katlarıdır." }
      ]
    },
    {
      baslik: "Sorunların haritası",
      kisa: "Yayılma, atık, iklim, hava, su ve enerji sorunları birbirine bağlıdır.",
      bloklar: [
        { tip: "harita", merkez: "Kentsel sürdürülebilirlik sorunları", dallar: [
            { baslik: "Kentsel yayılma", alt: "Tarım arazisi kaybı, araç bağımlılığı" },
            { baslik: "Sanitasyon ve atık", alt: "Kanalizasyon, çöp, temiz su erişimi" },
            { baslik: "İklim değişikliği", alt: "Isı dalgaları, kıyı kentlerinde deniz seviyesi" },
            { baslik: "Hava kalitesi", alt: "Duman, ozon, partikül" },
            { baslik: "Su kalitesi", alt: "Yağmur suyu akışı, atık su, kirlenmiş nehir" },
            { baslik: "Ekolojik ayak izi", alt: "Büyük kaynak ve arazi tüketimi" },
            { baslik: "Enerji kullanımı", alt: "Binalar ve ulaşım; yayılma kişi başı enerjiyi artırır" }
          ] },
        { tip: "adimlar", baslik: "Yayılma nasıl iklime uzanır?", adimlar: [
            { baslik: "Seyrek yayılma", metin: "Düşük yoğunluklu siteler ve geniş otoparklar tarım arazisini tüketir." },
            { baslik: "Araç bağımlılığı", metin: "Mesafeler uzar, çoğu yolculuk araçla yapılır." },
            { baslik: "Enerji ve emisyon", metin: "Yakıt ve elektrik kullanımı, sera gazı salımı artar." },
            { baslik: "İklim ve hava etkisi", metin: "Hava kirliliği ve ısınma güçlenir." }
          ] }
      ]
    },
    {
      baslik: "Hava kalitesi ve kent ısı adası",
      kisa: "Kentler çevresinden daha sıcaktır ve hava kirliliği ısınmayla birlikte artar.",
      bloklar: [
        { tip: "grafik", baslik: "Kent ısı adası: kırsaldan merkeze sıcaklık farkı (şematik)", xlabel: "Konum", ylabel: "Kırsala göre sıcaklık farkı (°C)", xmax: 10, ymax: 6,
          xticks: [{ v: 0, label: "Kırsal" }, { v: 5, label: "Merkez" }, { v: 10, label: "Kırsal" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }],
          ogeler: [
            { id: "eski", tip: "egri", renk: 1, kesik: true, etiket: "", noktalar: [[0, 0], [1, 0.1], [2, 0.5], [3, 1.5], [4, 2.5], [5, 4], [6, 2.7], [7, 1.6], [8, 0.4], [9, 0.1], [10, 0]], gizli: true },
            { id: "u", tip: "egri", renk: 0, etiket: "", noktalar: [[0, 0], [1, 0.1], [2, 0.5], [3, 1.5], [4, 2.5], [5, 4], [6, 2.7], [7, 1.6], [8, 0.4], [9, 0.1], [10, 0]] },
            { id: "p", tip: "nokta", x: 5, y: 4, etiket: "Merkez: +4", kilavuz: true, gizli: true },
            { id: "yz", tip: "yazi", x: 8, y: 5.2, metin: "Yeşil alan fark azaltır", gizli: true }
          ],
          durumlar: [
            { metin: "Kırsal alan serindir. Kent merkezine gittikçe sıcaklık fark yükselir." },
            { metin: "Merkezde fark yaklaşık ==4 °C==: koyu asfalt ve beton ısıyı tutar, bitki ve su azdır, araç ve klima ısı salar. Buna ==kent ısı adası== denir.", goster: ["p"] },
            { metin: "Ağaçlandırma, parklar ve yeşil çatılar farkı ==azaltır== (eski eğri kesikli).", goster: ["eski", "yz"], set: { u: { noktalar: [[0, 0], [1, 0.1], [2, 0.4], [3, 1.2], [4, 2], [5, 3], [6, 2.1], [7, 1.3], [8, 0.3], [9, 0.1], [10, 0]] }, p: { y: 3, etiket: "Merkez: +3" } } }
          ] },
        { tip: "not", metin: "Taşıt ve sanayi egzozu güneş ışığıyla tepkimeye girip yer seviyesinde ozon ve duman (*smog*) oluşturur. Vadi ya da çanak gibi çevresi yüksek kentlerde soğuk hava tabakası kirli havayı hapsedebilir (*thermal inversion*); hava kirliliği daha da kötüleşir." }
      ]
    },
    {
      baslik: "Su kalitesi ve sanitasyon",
      kisa: "Geçirimsiz yüzeyler yağmuru kirli akışa çevirir; sanitasyon eksikliği hastalık getirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚰", terim: "Sanitation", tr: "sanitasyon", tanim: "Temiz içme suyu, kanalizasyon, atık su arıtma ve çöp toplama hizmetlerinin bütünü. Yetersizse bulaşıcı hastalıklar çoğalır.", ornek: "Kanalizasyonu olmayan mahallede atık suyun sokağa ya da dereye akması." },
            { ikon: "🛣️", terim: "Impervious surface", tr: "geçirimsiz yüzey", tanim: "Suyu geçirmeyen asfalt, beton ve çatı yüzeyi. Yağmur toprağa sızmak yerine yüzeyden akar.", ornek: "Otopark ve çok katlı yapılar." }
          ] },
        { tip: "ikili", sol: { ikon: "🌳", baslik: "Doğal ve geçirgen yüzey", maddeler: ["Yağmur toprağa sızar", "Taşkın riski düşük, akış temizdir"] },
          sag: { ikon: "🧱", baslik: "Asfalt ve beton", maddeler: ["Yağmur hızla yüzeyden akar", "Taşkın riski ve kirli akış artar"] },
          oyun: [
            { metin: "Yağmur suyu toprağa sızıp yer altı suyuna karışır.", cevap: "sol", neden: "Geçirgen yüzey: sızma." },
            { metin: "Yağmur sonrası sokaklardaki yağ ve çöp doğrudan nehre akar.", cevap: "sag", neden: "Geçirimsiz yüzey: kirli yüzey akışı." },
            { metin: "Park ve ağaçlık alan yağmur suyunu emip taşkını azaltır.", cevap: "sol", neden: "Doğal yüzey emer." },
            { metin: "Büyük otopark yağmurdan sonra sel yaratır.", cevap: "sag", neden: "Geçirimsiz yüzey: taşkın." }
          ] }
      ]
    },
    {
      baslik: "Çözümler: bölgesel planlama, büyüme sınırı, tarım koruma",
      kisa: "Bölgesel planlama, büyüme sınırları ve tarım arazisi koruma yayılmayı sınırlar.",
      bloklar: [
        { tip: "tablo", baslik: "Dört çözüm ve sınırları", head: ["Çözüm", "Nasıl çalışır?", "Olası sınırı"], rows: [
            ["Bölgesel planlama", "Birçok belediye ulaşım, su ve arazi kullanımını birlikte planlar", "Belediyeler anlaşamazsa uygulanamaz (6.10 parçalanma)"],
            ["*Urban growth boundary*", "Kentin çevresine çizilen sınırın ötesinde yeni yerleşime izin verilmez; Portland (Oregon) örneği", "Sınır içinde arsa ve konut fiyatı yükselir; gelişme sınırın ötesine sıçrayabilir"],
            ["Tarım arazisi koruma", "Tarım alanını imarla koruma, geliştirme haklarını satın alma", "Arsa sahipleri gelir kaybı yaşar; baskı sürer"],
            ["*Brownfield* yenileme", "Kirlenmiş eski sanayi arsasını temizleyip yeniden kullanma", "Temizlik pahalıdır; yatırımcı bulmak zor olabilir"]
          ] },
        { tip: "ornek", baslik: "Büyüme sınırının etkisi", durum: "Bir kent, çevresine büyüme sınırı çizdi. Sınırın içinde 100 hektar boş arsa var. Yılda 10 hektar yapılaşıyor ve talep sürüyor. Arsalar kaç yıl yeter?",
          adimlar: ["100 ÷ 10 = 10 yıl."],
          sonuc: "Arsalar yaklaşık ==10 yıl== yeter. Talep sürerse arsa fiyatı yükselir ve yoğunlaşma (*infill*) ya da sınırın genişletilmesi tartışılır." }
      ]
    },
    {
      baslik: "*Brownfield* ve *greenfield*",
      kisa: "*Brownfield* kirlenmiş eski arsadır; temizleyip kullanmak yayılmayı azaltır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏭", terim: "Brownfield", tr: "kahverengi alan", tanim: "Eski fabrika, depo ya da benzin istasyonu gibi kullanımdan çıkmış, toprağı ya da yapısı kirlenmiş kent arsası.", ornek: "Boya fabrikasının kapanan arsası." },
            { ikon: "🌾", terim: "Greenfield", tr: "yeşil alan", tanim: "Daha önce yapılaşmamış, çoğu kez tarım ya da doğal arazi.", ornek: "Kent dışındaki buğday tarlası." },
            { ikon: "🧪", terim: "Remediation", tr: "iyileştirme (temizleme)", tanim: "Kirlenmiş toprak ve suyun temizlenmesi.", ornek: "Zehirli toprağın kazılıp temizlenmesi." }
          ] },
        { tip: "adimlar", baslik: "Brownfield'dan yeni mahalleye", adimlar: [
            { baslik: "Fabrika kapanır", metin: "Kirlenmiş, boş ve değersiz bir arsa kalır." },
            { baslik: "Temizlik", metin: "Toprak ve su analiz edilir, temizlenir." },
            { baslik: "Yeniden geliştirme", metin: "Konut, park ya da iş yeri yapılır." },
            { baslik: "Yayılma azalır", metin: "Tarım arazisine taşmadan mevcut altyapı kullanılır." }
          ] },
        { tip: "tuzak", metin: "*Brownfield* ile boş arazi aynı şey değildir.", yanlis: "*Brownfield*, kent dışında yapılaşmamış tarım arazisidir.", dogru: "Bu ==*greenfield*==dir. *Brownfield* kent içinde, daha önce kullanılmış ve çoğunlukla kirlenmiş arsadır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Sorunlar: yayılma, sanitasyon ve atık, iklim değişikliği, hava ve su kalitesi, büyük ekolojik ayak izi, enerji kullanımı.",
            "*Ecological footprint* kentin kapladığı alan değil, kaynak ve atık için kullandığı alandır (1 milyon kişi, 3 ha: 300 kat).",
            "Kent ısı adası: koyu yüzey ve az bitki nedeniyle merkez birkaç °C daha sıcaktır; yeşil alan azaltır.",
            "Geçirimsiz yüzeyler yağmuru kirli ve hızlı yüzey akışına çevirir; sanitasyon eksikliği hastalık getirir.",
            "Bölgesel planlama, büyüme sınırı (*UGB*, Portland) ve tarım arazisi koruma yayılmayı sınırlar.",
            "*Brownfield* temizlenip yeniden kullanılırsa tarım arazisi korunur; *greenfield* yeni arazi tüketir.",
            "Her çözümün sınırı vardır: fiyat artışı, uygulama zorluğu, maliyet."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir kentte 500.000 kişi yaşıyor ve kent 50 km² alan kaplıyor (1 km² = 100 hektar). Kişi başı ekolojik ayak izi 2 hektar ise kentin ayak izi kendi alanının yaklaşık kaç katıdır?",
      opts: ["2", "20", "200", "20.000"],
      a: 2, why: "Kent alanı = 50 × 100 = 5.000 hektar. Ayak izi = 500.000 × 2 = 1.000.000 hektar. 1.000.000 ÷ 5.000 = 200. D çekici yanlıştır: km²'yi hektara çevirmeyi unutursanız 1.000.000 ÷ 50 = 20.000 çıkar." },
    { q: "Tablo bir kentin üç bölgesindeki yaz sıcaklığını ve ağaç kaplı alanı gösteriyor. Hangi çıkarım en uygundur?",
      fig: { type: "table", head: ["Bölge", "Ağaç kaplı alan", "Yaz sıcaklığı"], rows: [["Merkez", "%5", "33 °C"], ["Park çevresi", "%30", "30 °C"], ["Kırsal", "%60", "28 °C"]], caption: "Kent ısı adası (kurgusal)" },
      opts: ["Sıcaklık, kent büyüklüğünden bağımsızdır", "Kırsal bölge, merkezden her zaman daha sıcaktır", "Yeşil alan arttıkça sıcaklık artar", "Ağaç kaplı alan arttıkça sıcaklık düşüyor; merkez ısı adası etkisi gösteriyor"],
      a: 3, why: "Ağaç oranı %5'ten %60'a çıkarken sıcaklık 33'ten 28 °C'ye düşüyor: merkez ısı adasıdır. C çekici yanlıştır: ilişki ters yöndedir." },
    { q: "Bir bölge, kentin çevresine bir sınır çizip bu sınırın ötesinde yeni yerleşime izin vermemeyi ve sınır içinde yoğunlaşmayı teşvik etmeyi kararlaştırıyor. Bu araç nedir ve olası olumsuz sonucu nedir?",
      opts: ["*Urban growth boundary*; sınır içinde arsa ve konut fiyatlarının yükselmesi", "*Greenfield* geliştirme; yayılmanın artması", "Bölgesel planlama; belediyeler arasında anlaşmazlık", "*Brownfield* yenileme; toprağın kirlenmesi"],
      a: 0, why: "Kentin etrafına çizilen sınır *urban growth boundary*'dir; arz kısıtlanınca sınır içinde fiyatlar yükselebilir. C çekici yanlıştır: bölgesel planlama belediyelerin birlikte planlamasıdır, belirli bir sınır çizmek değildir." },
    { q: "Kapanan bir boya fabrikasının toprağı kirlenmiş arsası temizleniyor ve üzerine konut yapılıyor. Bu uygulama hangisidir?",
      opts: ["*Greenfield* geliştirme", "*Brownfield* iyileştirme ve yeniden geliştirme", "Tarım arazisi koruma", "Kentsel yayılma"],
      a: 1, why: "Kirlenmiş, kullanılmış kent arsasını temizleyip yeniden kullanmak *brownfield* yeniden geliştirmedir. A çekici yanlıştır: *greenfield* yapılaşmamış, çoğunlukla tarım arazisidir." },
    { q: "Dört belediyeden oluşan bir kentsel bölgede belediyeler ortak bir ulaşım, su ve arazi kullanım planı hazırlıyor. Bu uygulamanın en doğru adı hangisidir?",
      opts: ["Soylulaştırma", "Kentsel yayılma", "Bölgesel planlama", "Çevresel adaletsizlik"],
      a: 2, why: "Birden çok yönetimin ulaşım, su ve arazi kullanımını birlikte planlaması bölgesel planlamadır. B çekici yanlıştır: yayılma düşük yoğunluklu, plansız büyümedir, planlama değil." }
  ]
};
