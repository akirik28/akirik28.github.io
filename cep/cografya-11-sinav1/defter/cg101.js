/* Kitpath not defteri · cg101 · COĞ.11.1.1 Mekânsal sorunlar ve coğrafya
   Kaynak: cografya-11-sinav1/veri.js (KONU mekan, MUHTEMEL 1.1). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cg101",
  amac: "Bu konu mekânsal sorunları anlatıyor: sorun nedir, nasıl sınıflanır, coğrafya çözüme nasıl katkı verir. Sınavda bir sorunu okuyup üç basamakta cevap yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Mekân ve mekânsal sorun",
      kisa: "Mekân insanın anlam yüklediği yerdir; mekânsal sorun orada çıkan problemdir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📍", terim: "Mekân", tr: "dinamik yeryüzü parçası", tanim: "İnsanın doğal çevreyle etkileşip anlam yüklediği yerdir. Zamanla değişir ve dönüşür.", ornek: "Bir ova, bir kent, bir kıyı." },
            { ikon: "⚠️", terim: "Mekânsal sorun", tr: "yerde çıkan problem", tanim: "Yerel, bölgesel ya da küresel ölçekte ortaya çıkan fiziksel, sosyal, ekonomik ve çevresel problemlerdir.", ornek: "Plansız kentleşme." }
          ] },
        { tip: "harita", merkez: "Mekânsal sorun örnekleri", dallar: [
            { baslik: "Çevre kirliliği" },
            { baslik: "Plansız kentleşme" },
            { baslik: "Arazinin yanlış kullanımı" },
            { baslik: "Su yetersizliği" },
            { baslik: "Orman yangınları" },
            { baslik: "Tuzlanma" },
            { baslik: "Ulaşım sorunları" }
          ] }
      ]
    },
    {
      baslik: "Sorunları sınıflandırma",
      kisa: "Üç ölçüt var: ölçek, tematik içerik, mekânın niteliği.",
      bloklar: [
        { tip: "tablo", head: ["Ölçüt", "Gruplar", "Örnek"], rows: [
            ["Ölçeğe göre", "Yerel, bölgesel, küresel", "Iğdır'da hava kirliliği (yerel); Konya'da obruklar (bölgesel); küresel ısınma (küresel)"],
            ["Tematik içeriğe göre", "Sosyal, ekonomik, çevresel, politik/yönetsel", "Göç, işsizlik, kirlilik, kıyı yetki sorunları"],
            ["Mekânın niteliğine göre", "Kentsel, kırsal", "Trafik sıkışıklığı; kuraklıkla tarımın bozulması"]
          ] },
        { tip: "ikili", sol: { ikon: "🏙️", baslik: "Kentsel", maddeler: ["Örnek: trafik sıkışıklığı"] },
          sag: { ikon: "🌾", baslik: "Kırsal", maddeler: ["Örnek: kuraklıkla tarımın bozulması"] },
          oyun: [
            { metin: "Trafik sıkışıklığı.", cevap: "sol", neden: "Kentte görülen sorun: kentsel." },
            { metin: "Kuraklık yüzünden tarımın bozulması.", cevap: "sag", neden: "Tarım alanında görülen sorun: kırsal." },
            { metin: "İstanbul'da plansız kentleşme ve altyapı yetersizliği.", cevap: "sol", neden: "Kentin sorunu: kentsel." }
          ] },
        { tip: "tuzak", metin: "Üç ölçüt birbirine karışır.", yanlis: "Kentsel, ölçeğe göre bir sorun türüdür.", dogru: "Ölçek yerel, bölgesel, küreseldir. Kentsel ve kırsal ise mekânın niteliğidir." }
      ]
    },
    {
      baslik: "Hangi alt dal?",
      kisa: "Sorunun ana konusuna bak: toprak, nüfus, su, iklim ya da yer şekli.",
      bloklar: [
        { tip: "tablo", head: ["Sorun", "Alt dal"], rows: [
            ["Heyelanın ulaşım altyapısını bozması (Trabzon)", "Afetler coğrafyası"],
            ["Bilinçsiz sulamayla tuzlanma (Harran Ovası)", "Toprak coğrafyası"],
            ["Göçle yaş ortalamasının düşmesi, kırsalda yaşlı oranının artması", "Nüfus coğrafyası"],
            ["Orman yangınlarının bitki ve hayvan türlerini tehdit etmesi", "Biyocoğrafya"],
            ["Plansız kentleşme ve altyapı yetersizliği (İstanbul)", "Yerleşme coğrafyası"],
            ["Kömür madenciliği azalınca işsizlik (Zonguldak)", "Ekonomik coğrafya"],
            ["Sıcaklık artışıyla iklim bölgesi sınırlarının değişmesi", "Klimatoloji"],
            ["Akarsu debisinin düşmesi: sulama ve enerji etkilenir", "Hidrografya"],
            ["Dağlık arazi yüzünden ulaşımın zorlaşması (Artvin)", "Jeomorfoloji"]
          ], not: "Eşleştirmede ana konuya bak: toprak mı, nüfus mu, su mu, iklim mi, yer şekli mi?" },
        { tip: "tuzak", metin: "İki soru benzer görünür.", yanlis: "Engebeli arazinin ulaşımı zorlaştırması: afetler coğrafyası.", dogru: "Engebe bir yer şeklidir: jeomorfoloji. Heyelan ise afettir: afetler coğrafyası." }
      ]
    },
    {
      baslik: "Coğrafyanın cevabı: üç basamak",
      kisa: "Tespit ve izleme, etki analizi ve modelleme, çözüm ve planlama.",
      bloklar: [
        { tip: "adimlar", baslik: "Cevap kalıbı", adimlar: [
            { baslik: "Tespit ve izleme", metin: "Sorun nerede, ne kadar yaygın, nasıl değişiyor? Araç: harita, uzaktan algılama, CBS, saha gözlemi." },
            { baslik: "Etki analizi ve modelleme", metin: "Sorun iklimi, suyu, canlıları, insanı, ekonomiyi nasıl etkiliyor? Gelecek için senaryo kurulur." },
            { baslik: "Çözüm ve planlama", metin: "Hangi alana hangi önlem? Uygun yer seçimi, risk haritası, plan, denetim, izleme." }
          ] },
        { tip: "not", metin: "Akılda tut: ==nerede? ne yapıyor? ne yapmalı?== Açık uçlu soruda her basamağa birer cümle, soruna özgü örnekle yaz." }
      ]
    },
    {
      baslik: "Coğrafya diğer bilimlerden nasıl ayrılır?",
      kisa: "Veriyi konumla birleştirir; dağılışı gösterir; bütüncül çözüm önerir.",
      bloklar: [
        { tip: "harita", merkez: "Coğrafyanın farkı", dallar: [
            { baslik: "Konumla birleştirir", alt: "Veri yalnızca sayı ya da nitelik kalmaz." },
            { baslik: "Dağılışı gösterir", alt: "Harita ve CBS: sorun nerede, neden orada?" },
            { baslik: "Verileri bir araya getirir", alt: "Altyapı, çevre, nüfus, ekonomi verileri" },
            { baslik: "İş birliği yapar", alt: "Şehir planlama, çevre mühendisliği, sosyoloji, jeoloji, ziraat, orman bilimi" }
          ] },
        { tip: "not", metin: "Bu yüzden coğrafya karmaşık sorunlara ==çok boyutlu ve bütüncül== çözüm önerir." }
      ]
    },
    {
      baslik: "Model cevap: taşkınlar neden sıklaştı?",
      kisa: "Her basamağa havzaya özgü bir örnek yaz.",
      bloklar: [
        { tip: "ornek", baslik: "Taşkın sorunu", durum: "Yukarı havzada ormanlar tarla için kesildi. Aşağı havzada kent, taşkın ovasına yayıldı. Taşkınlar sıklaştı. Coğrafya soruna nasıl katkı verir?",
          adimlar: [
            "Tespit ve izleme: uydu görüntüsü ve haritayla orman azalması, taşkın ovası ve yapılaşma sınırı yıllar içinde izlenir.",
            "Etki analizi ve modelleme: yağış, eğim ve arazi kullanımıyla hangi konutların ne kadar su altında kalacağı modellenir.",
            "Çözüm ve planlama: taşkın ovasında yapılaşma sınırlanır, yukarı havzada ağaçlandırma yapılır, risk haritasına göre erken uyarı ve tahliye planı hazırlanır."
          ],
          sonuc: "==Model cevap:== Yukarı havzada orman azaldığı için yağmur hızla akışa geçer; aşağıda taşkın ovasına yapılan konutlar suyun yayılma alanını daraltır. Coğrafya önce bu değişimi haritalayıp izler, sonra etkilenecek alanları modeller, en son yapılaşmayı sınırlayıp ağaçlandırma ve erken uyarı planlar." },
        { tip: "tuzak", metin: "Puan, her basamağın soruya özgü örneğinden gelir.", yanlis: "Yalnızca basamak adlarını sıralamak yeter.", dogru: "Her basamağa havzaya özgü bir örnek yaz. Örneksiz adlar az puan alır." }
      ]
    },
    {
      baslik: "Vaka: Iğdır'da kirli hava",
      kisa: "Çukur konum ve sıcaklık terselmesi, kirleticileri yerde tutar.",
      bloklar: [
        { tip: "grafik", baslik: "Sıcaklık terselmesi (şematik)", xlabel: "Sıcaklık", ylabel: "Yükseklik", xmax: 10, ymax: 10, xticks: [], yticks: [],
          ogeler: [
            { id: "n", tip: "egri", renk: 0, noktalar: [[8, 0.8], [6.8, 4], [5.8, 7], [5, 9.2]], gizli: true },
            { id: "nl", tip: "yazi", x: 9.9, y: 9.4, metin: "Normal: yükseldikçe soğur", hiza: "end", gizli: true },
            { id: "inv", tip: "egri", renk: 2, noktalar: [[3, 0.8], [4.6, 2.6], [6.6, 4.6], [6.2, 6.5], [5.2, 9.2]], gizli: true },
            { id: "invl", tip: "yazi", x: 9.9, y: 5.4, metin: "Terselme", hiza: "end", gizli: true },
            { id: "band", tip: "alan", renk: 1, noktalar: [[0, 0], [10, 0], [10, 1.6], [0, 1.6]], gizli: true }
          ],
          durumlar: [
            { metin: "Normalde hava yükseldikçe soğur.", goster: ["n", "nl"] },
            { metin: "Dağlarla çevrili çukurda soğuk hava dipte kalır; üstte daha sıcak hava bulunur: ==sıcaklık terselmesi.==", goster: ["inv", "invl"] },
            { metin: "Kirleticiler çukurun dibinde birikir; kışın hava kalitesi düşer.", goster: ["band"] }
          ] },
        { tip: "adimlar", baslik: "Iğdır: neden, etki, çözüm", adimlar: [
            { baslik: "Doğal neden", metin: "Dağlarla çevrili çukur konum, kışın sıcaklık terselmesi." },
            { baslik: "Beşerî neden", metin: "Kalitesiz yakıt, sanayi ve ulaşım emisyonları." },
            { baslik: "Etki", metin: "Sağlık sorunları, canlı yaşamı ve ekosistemde olumsuzluk." },
            { baslik: "Çözüm", metin: "Temiz Hava Eylem Planı: yakıt denetimi, mantolama, doğal gaz, taşıt emisyonunu azaltma." }
          ] }
      ]
    },
    {
      baslik: "Vakalar: ova, deniz, obruk, sünger şehir",
      kisa: "Her vakada sorunu, nedeni ve çözümü aynı zincirde oku.",
      bloklar: [
        { tip: "tablo", head: ["Vaka", "Sorun", "Çözüm / katkı"], rows: [
            ["Bursa Ovası", "Verimli ova, sanayi ve yerleşme baskısıyla daralıyor", "Büyük Ova Koruma Alanı (2017); kaçak yapılaşma uydu görüntüleri ve CBS ile tespit"],
            ["Kerç Boğazı (15 Aralık 2024)", "İki petrol gemisi kaza yaptı; akaryakıt denize sızdı", "Kontrollü yakma, bariyerle toplama, biyolojik ayrıştırma"],
            ["Konya obrukları", "Aşırı yer altı suyu kullanımı; obruk sayısı 642", "Kontrollü su kullanımı; yapay zekâyla obruk duyarlılık haritası"]
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🕳️", terim: "Obruk", tr: "çöküntü çukuru", tanim: "Yer altı suyu kayacı çözer, oyuğun tavanı çöker.", ornek: "Konya'da Mayıs 2024 ile Mayıs 2025 arasında 20 yeni obruk oluştu." },
            { ikon: "🧽", terim: "Sünger şehir", tr: "yeşil altyapı", tanim: "Yağmuru kaynağında tutan, süzen, depolayan kentsel yaklaşım. Gri altyapı ise suyu kapalı kanalizasyonla hızla uzaklaştırır.", ornek: "Sel riski azalır, su kalitesi artar." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Mekânsal sorun: yerel, bölgesel ya da küresel problem",
            "Üç ölçüt: ölçek, tematik içerik, mekânın niteliği",
            "Cevap kalıbı: tespit → etki analizi → çözüm",
            "Her basamağa soruya özgü bir örnek yaz",
            "Alt dal: sorunun ana konusuna bak"
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Dağlarla çevrili bir çukurda kurulu kentte kış aylarında hava kalitesi düşüyor. Soğuk hava çukurda kalıyor, üstte daha sıcak hava bulunuyor. Bu olay hangisidir?",
      opts: ["Çakıştırma", "Sıcaklık terselmesi", "Obruk oluşumu", "Sünger şehir"],
      a: 1,
      why: "Yüksekle soğuması gereken havanın çukurda soğuk kalması sıcaklık terselmesidir; kirleticiler yerde birikir. Sünger şehir en çekici yanlış şık: o, yağmur suyunu kaynağında tutan kentsel yaklaşımdır." },
    { q: "Akdeniz kıyılarında orman yangınlarının bitki ve hayvan türlerini tehdit etmesi, coğrafyanın hangi alt dalının ağırlıklı inceleme alanındadır?",
      opts: ["Klimatoloji", "Hidrografya", "Yerleşme coğrafyası", "Biyocoğrafya"],
      a: 3,
      why: "Ana konu bitki ve hayvan türleridir: biyocoğrafya. Klimatoloji en çekici yanlış şık: yangın iklimle ilişkili görünür ama sorunun ana konusu tür kaybıdır." },
    { q: "\"Trafik sıkışıklığı\" ve \"kuraklıkla tarımın bozulması\" sorunları, mekânın niteliğine göre sırasıyla hangi gruba girer?",
      opts: ["Kırsal – kentsel", "Kentsel – kırsal", "Yerel – küresel", "Sosyal – ekonomik"],
      a: 1,
      why: "Trafik kentte, tarım bozulması kırsalda görülür. Yerel – küresel ölçeğe, sosyal – ekonomik tematik içeriğe göredir; mekânın niteliğiyle karıştırılmamalı." },
    { q: "Bir ovada verimli tarım alanları sanayi ve yerleşme yüzünden daralıyor. Kaçak yapılaşmanın uydu görüntüleri ve CBS ile bulunması, üç basamaktan hangisine örnektir?",
      opts: ["Tespit ve izleme", "Etki analizi ve modelleme", "Çözüm ve planlama", "Genelleştirme"],
      a: 0,
      why: "Sorunun yerini ve yayılışını belirlemek tespit ve izlemedir. Etki analizi, sorunun etkisini çözümleyip gelecek için senaryo kurmaktır. Genelleştirme ise bir CBS işlemidir, basamak değil." },
    { q: "Coğrafyayı diğer bilimlerden ayıran özellik hangisidir?",
      opts: ["Yalnızca sayısal veri kullanması", "Sorunun nedenlerini araştırmaması", "Veriyi konumla birleştirip dağılışı ve bağlantıları göstermesi", "Yalnızca doğal olayları incelemesi"],
      a: 2,
      why: "Coğrafya veriyi konum bilgisiyle birleştirir; harita ve CBS ile sorunun nerede ve neden orada olduğunu gösterir. Yalnızca doğal olayları incelediği düşüncesi yanlıştır: sosyal ve ekonomik sorunlar da konusudur." }
  ]
};
