/* Kitpath not defteri · ep09 · Projeksiyonlar
   Kaynak: ap-videolar/src/episodes/ep09 (script.ts) + AP HuG Unit 1 standart içeriği. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ep09",
  amac: "Bu konu küreyi düz kâğıda aktarmanın neden kusursuz olamadığını anlatıyor: her *projection* şekli, alanı, mesafeyi ya da yönü bozar. *Mercator*, *Gall-Peters*, *Robinson* gibi haritaları ve hangisini ne zaman seçeceğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Portakal kabuğu problemi",
      kisa: "Küreyi düzleme geçirmek kusursuz olamaz; her *projection* bir şeyi bozar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗺️", terim: "Projection", tr: "projeksiyon", tanim: "Küreyi düzleme aktarma yöntemi. Her harita bir *projection*dır ve ==her *projection* bir şeyi bozar==.", ornek: "Portakal kabuğunu masaya yaymayı dene: ya yırtılır ya da esner." }
          ] },
        { tip: "adimlar", baslik: "Küre düzleme nasıl geçer?", adimlar: [
            { baslik: "Küre", metin: "Dönen küre: şekil, alan, mesafe ve yön hep doğru." },
            { baslik: "Dilim dilim açılır", metin: "Kabuk dilimlere ayrılır; aralarında boşluklar kalır." },
            { baslik: "Gerilir", metin: "Boşluklar kapansın diye dilimler gerilir." },
            { baslik: "Düz harita", metin: "Dikdörtgen bir harita çıkar; ama bir şeyler bozulmuştur." }
          ] }
      ]
    },
    {
      baslik: "Bozulabilecek dört şey",
      kisa: "*Projection* şekli, alanı, mesafeyi ya da yönü bozar; hepsini korumak imkânsızdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔷", terim: "Shape", tr: "şekil", tanim: "Kıtaların ve ülkelerin görünüşü. Bozulursa kıtalar olduğundan uzun ya da basık görünür.", ornek: "Güney Amerika'nın yukarıdan aşağıya sünmüş görünmesi." },
            { ikon: "⬛", terim: "Area", tr: "alan", tanim: "Bir yerin yüzölçümünün doğru gösterilmesi. Bozulursa ülke olduğundan büyük ya da küçük görünür.", ornek: "Grönland'ın Afrika kadar görünmesi." },
            { ikon: "📏", terim: "Distance", tr: "mesafe", tanim: "İki nokta arasındaki uzaklığın doğru ölçülmesi.", ornek: "İki şehrin arası gerçekte olduğundan uzun ölçülür." },
            { ikon: "🧭", terim: "Direction", tr: "yön", tanim: "Haritadaki yönün pusulanın gösterdiğiyle tutması.", ornek: "Haritada doğuya giden bir çizgi pusulada sapıyorsa yön bozulmuştur." }
          ] },
        { tip: "tuzak", metin: "Her şeyi doğru gösteren bir harita aramak sınavda tuzak şıktır.", yanlis: "Bazı projeksiyonlar dört özelliği de aynı anda korur.", dogru: "==Hepsini aynı anda korumak imkânsızdır.== Her harita birini seçer, diğerlerinden vazgeçer." }
      ]
    },
    {
      baslik: "Üç yüzey: silindir, külah, levha",
      kisa: "Silindir ekvatorda, külah orta enlemde, levha merkezde doğrudur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🥫", terim: "Cylindrical", tr: "silindirik", tanim: "Küre bir silindire sarılır. Ekvator çevresi doğrudur; ==kutuplara gittikçe bozulur.==", ornek: "Dikdörtgen dünya haritalarının çoğu." },
            { ikon: "🍦", terim: "Conic", tr: "konik", tanim: "Küreye bir külah oturtulur. Orta enlemlerde bir paralele değer; orta enlemler için iyidir.", ornek: "Türkiye ya da Amerika gibi ülkelerin haritaları." },
            { ikon: "🔵", terim: "Planar (azimuthal)", tr: "düzlemsel", tanim: "Düz bir levha tek bir noktaya (örneğin kutba) değer. O merkez doğrudur; uzaklaştıkça bozulur.", ornek: "Kutup haritaları." }
          ] },
        { tip: "tuzak", metin: "Quiz: \"*Cylindrical* bir projeksiyonda bozulma nerede en azdır?\"", yanlis: "Kutuplarda ya da her yerde eşittir.", dogru: "Silindir küreye ekvatorda değer; bu yüzden ==ekvator çevresinde== bozulma en azdır." }
      ]
    },
    {
      baslik: "*Mercator*: gemici haritası",
      kisa: "*Mercator* şekli ve yönü korur, ama kutuplarda alanı şişirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⛵", terim: "Mercator", tr: "Mercator projeksiyonu", tanim: "Silindirik. ==Şekli ve yönü korur==, bu yüzden yüzyıllarca gemi navigasyonunda kullanıldı: pusulayla sabit bir rota çizebilirsin. Bedeli: kutuplara doğru alanlar devasa şişer.", ornek: "Haritada Grönland, Afrika kadar görünür." }
          ] },
        { tip: "grafik", baslik: "Mercator'da alan şişmesi enlemle artar", xlabel: "Enlem", ylabel: "Alan şişmesi (kat)", xmax: 8, ymax: 16,
          xticks: [{ v: 2, label: "20°" }, { v: 4, label: "40°" }, { v: 6, label: "60°" }, { v: 7, label: "70°" }],
          yticks: [{ v: 1, label: "1×" }, { v: 4, label: "4×" }, { v: 8, label: "8×" }, { v: 12, label: "12×" }],
          ogeler: [
            { id: "m", tip: "egri", renk: 0, etiket: "şişme", noktalar: [[0, 1], [1.5, 1.07], [3, 1.33], [4.5, 2], [6, 4], [7, 8.55], [7.5, 14.9]] },
            { id: "p45", tip: "nokta", x: 4.5, y: 2, etiket: "45°: 2×", kilavuz: true, gizli: true },
            { id: "p60", tip: "nokta", x: 6, y: 4, etiket: "60°: 4×", kilavuz: true, gizli: true },
            { id: "p70", tip: "nokta", x: 7, y: 8.55, etiket: "70°: ~8,5×", kilavuz: true, gizli: true },
            { id: "gr", tip: "yazi", x: 3.3, y: 12, metin: "Grönland: 10×'tan fazla şişmiş (kuzeyde 30×'u aşar)", gizli: true }
          ],
          durumlar: [
            { metin: "Ekvatorda (0°) alan doğrudur. Kutuplara gittikçe şişme hızla artar." },
            { metin: "45° enlemde alan yaklaşık **2 katına** çıkar.", goster: ["p45"] },
            { metin: "60° enlemde **4 kat**, 70° enlemde yaklaşık **8,5 kat** olur. ==Alan bozulur.==", goster: ["p60", "p70"] },
            { metin: "Grönland yaklaşık 70° enlemlerde olduğu için haritada ==Afrika'ya yakın== bir büyüklükte görünür.", goster: ["gr"] }
          ] },
        { tip: "ornek", baslik: "Grönland gerçekte ne kadar?", durum: "Afrika yaklaşık 30,4 milyon km², Grönland yaklaşık 2,17 milyon km². Mercator haritasında ikisi benzer büyüklükte görünür. Gerçekte kaç kat fark var?",
          adimlar: ["Oran: 30,4 ÷ 2,17.", "Hesapla: 30,4 ÷ 2,17 ≈ 14."],
          sonuc: "Gerçekte Afrika, Grönland'dan ==yaklaşık 14 kat== daha büyüktür." },
        { tip: "tuzak", metin: "Quiz: \"Hangi projeksiyon yönü ve şekli korur, ama kutuplara yakın alanları aşırı büyütür?\"", yanlis: "Gall-Peters, çünkü alanı bozar.", dogru: "==*Mercator*==. *Gall-Peters* ise alanı korur, şekli bozar; tam tersidir." }
      ]
    },
    {
      baslik: "*Gall-Peters*: alan doğru",
      kisa: "*Gall-Peters* alanı korur ama şekli bozar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Gall-Peters · equal-area", tr: "eş alanlı projeksiyon", tanim: "Alanları doğru gösterir: Afrika hak ettiği büyüklüğe kavuşur. ==Ama şekiller bozulur==; kıtalar yukarıdan aşağıya sünmüş görünür.", ornek: "Nüfus yoğunluğu gibi alan karşılaştırmaları." }
          ] },
        { tip: "ikili", sol: { ikon: "⛵", baslik: "*Mercator*", maddeler: ["Şekil ve yön ✓; alan ✗ (kutuplar şişer)", "Gemi navigasyonu"] },
          sag: { ikon: "⚖️", baslik: "*Gall-Peters*", maddeler: ["Alan ✓ (*equal-area*); şekil ✗ (sünme)", "Alan karşılaştırması"] },
          oyun: [
            { metin: "Bir öğretmen kıtaların gerçek büyüklüklerini karşılaştırmak istiyor.", cevap: "sag", neden: "Alan doğruluğu lazım: *Gall-Peters*." },
            { metin: "Bir kaptan pusulayla sabit bir rota çizmek istiyor.", cevap: "sol", neden: "Yön ve şekil korunmalı: *Mercator*." },
            { metin: "Haritada Grönland, Afrika kadar görünüyor.", cevap: "sol", neden: "Kutuplarda alan şişmesi: *Mercator*." },
            { metin: "Afrika ve Güney Amerika dikey olarak uzamış görünüyor.", cevap: "sag", neden: "Şekil bozulması: *Gall-Peters*." }
          ] },
        { tip: "tuzak", metin: "Öğretmen sınıfa *Gall-Peters* haritası asıyor; kazancı ve bedeli ne?", yanlis: "Hem alan hem şekil doğru olur.", dogru: "==Kazanç: alanlar doğru. Bedel: şekiller bozulur.== *Equal-area* projeksiyonlarda şekil kurban edilir." }
      ]
    },
    {
      baslik: "Uzlaşma haritaları: *Robinson* ve *Winkel Tripel*",
      kisa: "Uzlaşma haritaları hiçbir şeyi mükemmel korumaz, her şeyi biraz bozar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🤝", terim: "Robinson", tr: "Robinson projeksiyonu", tanim: "Orta yolu seçer: hiçbir şeyi tam korumaz ama her şeyi yalnızca biraz bozar. Göze doğal görünür, kenarları yuvarlaktır.", ornek: "Sınıf duvarlarındaki dünya haritaları." },
            { ikon: "🏆", terim: "Winkel Tripel", tr: "Winkel Tripel projeksiyonu", tanim: "Bir uzlaşmadır; genel bozulması daha da düşüktür. Atlasların ve National Geographic'in tercihi.", ornek: "Modern dünya atlasları." }
          ] },
        { tip: "tablo", baslik: "Dört özellik kimde ne durumda?", head: ["Projeksiyon", "Şekil", "Alan", "Mesafe", "Yön"], rows: [
            ["*Mercator*", "✓", "✗", "✗", "✓"],
            ["*Gall-Peters*", "✗", "✓", "—", "—"],
            ["*Robinson*", "≈", "≈", "≈", "≈"],
            ["*Winkel Tripel*", "≈ (daha iyi)", "≈ (daha iyi)", "≈", "≈"]
          ], not: "✓ korunur · ✗ bozulur · ≈ biraz bozulur · — odak değil. Uzlaşma haritaları hiçbirini mükemmel yapmaz." }
      ]
    },
    {
      baslik: "Özel amaçlı haritalar",
      kisa: "*Azimuthal equidistant* merkezden mesafe ve yönü, *Fuller* alan ve şekli korur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✈️", terim: "Azimuthal equidistant", tr: "eş uzaklıklı azimutal", tanim: "Merkezden her noktaya ==mesafe ve yön doğrudur==. Kuzey Kutbu merkezli hali Birleşmiş Milletler bayrağındadır; kutup üzerinden uçuş rotalarını göstermek için de kullanılır.", ornek: "New York'tan Pekin'e kutup üzerinden uçuş rotası düz bir çizgi olarak görünür." },
            { ikon: "🔺", terim: "Fuller (Dymaxion)", tr: "Fuller projeksiyonu", tanim: "Dünyayı üçgenlere açar. Alan ve şekil gayet iyidir; ama ==kuzey, güney gibi yönler anlamını kaybeder.==", ornek: "Üçgenlerden oluşan açılmış Dünya haritası." }
          ] },
        { tip: "ikili", sol: { ikon: "🧊", baslik: "Kutup merkezli *azimuthal equidistant*", maddeler: ["Merkezden mesafe ve yön ✓", "BM bayrağı, kutup uçuşları"] },
          sag: { ikon: "🔺", baslik: "*Fuller*", maddeler: ["Alan ve şekil iyi", "Yön anlamını yitirir"] },
          oyun: [
            { metin: "Bir havayolu, Kuzey Kutbu üzerinden geçen uçuş rotalarını göstermek istiyor.", cevap: "sol", neden: "Merkezden mesafe ve yön doğru: *azimuthal equidistant*." },
            { metin: "Kuzey, güney gibi yönler anlamını yitiriyor ama alan ve şekil iyi.", cevap: "sag", neden: "*Fuller (Dymaxion)*." },
            { metin: "Birleşmiş Milletler bayrağındaki harita.", cevap: "sol", neden: "Kutup merkezli *azimuthal*." }
          ] },
        { tip: "tuzak", metin: "Kutup merkezli *azimuthal equidistant* her yönü ve mesafeyi doğru gösterir sanılır.", yanlis: "Haritadaki herhangi iki nokta arası mesafe doğrudur.", dogru: "Yalnızca ==merkezden== her noktaya mesafe ve yön doğrudur; merkezden uzaklaştıkça bozulma artar." }
      ]
    },
    {
      baslik: "Hangisini ne zaman seçersin?",
      kisa: "Önce amacı belirle; seçtiğin projeksiyonun neyi bozduğunu bil.",
      bloklar: [
        { tip: "tablo", baslik: "Amaç → projeksiyon", head: ["Amaç", "Projeksiyon"], rows: [
            ["Nüfus yoğunluğu gibi alan karşılaştırması", "*Equal-area*, yani *Gall-Peters*"],
            ["Gemi rotası", "*Mercator*"],
            ["Kutup üzerinden uçuş", "*Azimuthal*"],
            ["Genel bir dünya atlası", "*Robinson* ya da *Winkel Tripel*"]
          ] },
        { tip: "adimlar", baslik: "Seçim yaparken", adimlar: [
            { baslik: "1 · Neyi korumalıyım?", metin: "Alan mı, yön mü, mesafe mi, şekil mi? Hepsi olmaz." },
            { baslik: "2 · Önce amaç", metin: "Alan karşılaştırması, navigasyon, kutup rotası ya da genel görünüm?" },
            { baslik: "3 · Bedelini bil", metin: "Seçtiğin her *projection* bir şeyi bozar; hangisinden vazgeçtiğini söyleyebilmelisin." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Küreyi düzleme geçirmek kusursuz olamaz; her *projection* şekil, alan, mesafe ya da yönü bozar.",
            "Üç yüzey: *cylindrical* (ekvatorda doğru), *conic* (orta enlemlerde), *planar/azimuthal* (merkezde).",
            "*Mercator*: şekil ve yön ✓, alan ✗; kutuplar şişer (Grönland Afrika kadar görünür; gerçekte Afrika 14 kat büyük).",
            "*Gall-Peters* (*equal-area*): alan ✓, şekil ✗.",
            "*Robinson*: her şeyi biraz bozar; *Winkel Tripel* daha da az bozar (atlas standardı).",
            "*Azimuthal equidistant*: merkezden mesafe ve yön doğru; kutup uçuşları, BM bayrağı.",
            "*Fuller (Dymaxion)*: üçgenlere açılır; alan ve şekil iyi, yönler anlamsız.",
            "Alan karşılaştırması → *Gall-Peters*; gemi rotası → *Mercator*; kutup uçuşu → *azimuthal*; atlas → *Robinson/Winkel Tripel*."
          ] }
      ]
    }
  ]
};
