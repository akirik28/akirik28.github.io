/* Kitpath not defteri · hg501 · Tarıma Giriş (5.1)
   Kaynak: AP HuG CED Topic 5.1 (PSO-5.A). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg501",
  amac: "Bu konu tarımın iklim, toprak ve yer şekli gibi fiziksel koşullara göre nasıl şekillendiğini anlatıyor. *Intensive* ile *extensive* tarım farkını ve altı tarım türünü (*market gardening*, *plantation*, karma çiftlik, *shifting cultivation*, *nomadic herding*, *ranching*) öğreneceksin.",
  bolumler: [
    {
      baslik: "Tarım fiziksel çevreye bağlıdır",
      kisa: "İklim, toprak ve yer şekli neyin nerede yetişeceğini belirler.",
      bloklar: [
        { tip: "not", metin: "*Agriculture* (tarım), bitki ve hayvan yetiştirerek besin ve hammadde üretmektir. Ne yetişeceğini en başta **sıcaklık, yağış, büyüme mevsiminin uzunluğu, toprak ve yer şekli** belirler. İnsan sulama ve seralarla bu sınırları zorlayabilir, ama başlangıç noktası yine fiziksel çevredir." },
        { tip: "tablo", baslik: "İki iklim, iki farklı tarım", head: ["İklim", "Nasıl bir iklim?", "Tipik tarım", "Örnek bölge"], rows: [
            ["*Mediterranean climate*", "Yazlar sıcak ve kurak, kışlar ılık ve yağışlı", "Zeytin, üzüm, narenciye; yazın sulama", "Ege ve Akdeniz kıyısı, Kaliforniya"],
            ["*Tropical climates*", "Yıl boyu sıcak; bol yağmur ya da yağmurlu-kurak mevsim", "Pirinç, kakao, kahve, muz, şeker kamışı", "Güneydoğu Asya, Batı Afrika, Brezilya"],
            ["Kurak ve yarı kurak iklimler", "Az yağış; çim ve çalı", "Hayvan otlatma", "Moğolistan bozkırı, Sahel"]
          ], not: "Aynı enlemde bile yağış ve toprak değişirse tarım değişir." },
        { tip: "tuzak", metin: "Fiziksel çevre tarımı etkiler ama tek başına belirlemez.", yanlis: "Bir bölgede ne yetişeceğini yalnızca iklim kararlaştırır.", dogru: "İklim ve toprak **sınır** çizer; içinde neyin yetişeceğini kültür, pazar ve teknoloji de belirler (örneğin sulama kurak yere pamuk, sera kışa domates getirir)." }
      ]
    },
    {
      baslik: "*Intensive* ve *extensive* tarım",
      kisa: "*Intensive*: az yere çok girdi; *extensive*: çok yere az girdi.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌱", baslik: "*Intensive agriculture*", maddeler: ["Küçük alana çok emek ve sermaye (işçi, gübre, sulama)", "Hektar başına verim yüksek"] },
          sag: { ikon: "🐄", baslik: "*Extensive agriculture*", maddeler: ["Geniş alana az emek ve sermaye", "Hektar başına verim düşük; arazi bol ve ucuz"] },
          oyun: [
            { metin: "Küçük bir tarlaya çok işçi, gübre ve sulama konur.", cevap: "sol", neden: "Birim alana yoğun girdi: *intensive*." },
            { metin: "Çok geniş bir otlakta hektar başına birkaç hayvan gezer.", cevap: "sag", neden: "Birim alana az girdi: *extensive*." },
            { metin: "Aynı arazide yılda birkaç kez hasat alınır.", cevap: "sol", neden: "Yoğun kullanım: *intensive*." },
            { metin: "Çiftçi arazisini az işleyip büyük bir alana yayılır.", cevap: "sag", neden: "Az girdi, çok alan: *extensive*." }
          ] },
        { tip: "grafik", baslik: "Girdi arttıkça hektardan çıkan ürün artar (şematik)", xlabel: "Hektar başına emek ve sermaye", ylabel: "Hektar başına ürün", xmax: 10, ymax: 10,
          xticks: [{ v: 1.5, label: "az" }, { v: 8.5, label: "çok" }], yticks: [{ v: 1.5, label: "az" }, { v: 8.5, label: "çok" }],
          ogeler: [
            { id: "ext", tip: "alan", renk: 1, noktalar: [[0, 0], [4.6, 0], [4.6, 4.6], [0, 4.6]], gizli: true },
            { id: "int", tip: "alan", renk: 0, noktalar: [[5.2, 5.2], [10, 5.2], [10, 10], [5.2, 10]], gizli: true },
            { id: "tr", tip: "cizgi", from: [0.3, 0.4], to: [9.7, 9.6], kesik: true },
            { id: "n1", tip: "nokta", x: 0.7, y: 1.0, etiket: "Nomadic herding", gizli: true },
            { id: "n2", tip: "nokta", x: 2.0, y: 2.4, etiket: "Shifting", gizli: true },
            { id: "n3", tip: "nokta", x: 3.2, y: 3.7, etiket: "Ranching", gizli: true },
            { id: "i1", tip: "nokta", x: 5.8, y: 5.9, etiket: "Mixed", gizli: true },
            { id: "i2", tip: "nokta", x: 6.8, y: 7.2, etiket: "Plantation", gizli: true },
            { id: "i3", tip: "nokta", x: 6.4, y: 8.8, etiket: "Market gardening", gizli: true },
            { id: "te", tip: "yazi", x: 2.6, y: 0.4, metin: "EXTENSIVE", gizli: true },
            { id: "ti", tip: "yazi", x: 8.6, y: 5.7, metin: "INTENSIVE", gizli: true }
          ],
          durumlar: [
            { metin: "Kesikli çizgi genel eğilim: birim alana ne kadar emek ve sermaye konursa o kadar ürün alınır." },
            { metin: "Sol alt: ==*extensive*==. Sürü ya da tarla çok geniş alana yayılır, hektar başına girdi azdır.", goster: ["ext", "te", "n1", "n2", "n3"] },
            { metin: "Sağ üst: ==*intensive*==. Küçük ya da yoğun işlenen alana çok emek ve sermaye konur.", goster: ["int", "ti", "i1", "i2", "i3"] },
            { metin: "Dikkat: ölçüt çiftliğin toplam büyüklüğü değil, **birim alana düşen girdidir**. *Plantation* çok geniştir ama yine de sağ üsttedir.", gizle: ["ext", "te", "n1", "n2", "n3"] }
          ] },
        { tip: "tuzak", metin: "\"Büyük çiftlik = *extensive*\" sanmak.", yanlis: "*Plantation* çok geniş olduğu için *extensive*'dir.", dogru: "*Intensive* ya da *extensive*, alanın büyüklüğüne değil **hektar başına girdiye** bağlıdır. *Plantation* devasa olsa da hektar başına çok işçi ve sermaye kullandığı için *intensive*'dir." }
      ]
    },
    {
      baslik: "*Intensive* tarım türleri",
      kisa: "*Market gardening*, *plantation* ve karma çiftlik hektarı yoğun işler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🥬", terim: "Market gardening", tr: "pazar bahçeciliği", tanim: "Kente yakın küçük arazide taze sebze, meyve ve çiçeğin satmak için yoğun yetiştirilmesi. Ürün çabuk bozulduğu için pazar yakın olmalıdır.", ornek: "Kentin kenarındaki bostanlar ve seralar." },
            { ikon: "🍵", terim: "Plantation agriculture", tr: "plantasyon tarımı", tanim: "Tek bir nakit ürünün (çay, kahve, kauçuk, şeker kamışı, muz) geniş arazide, çok işçiyle ve çoğunlukla ihracat için yetiştirilmesi. Çoğu tropik bölgededir; kökeni sömürge dönemine uzanır.", ornek: "Sri Lanka'daki çay tarlaları." },
            { ikon: "🐔", terim: "Mixed crop-livestock systems", tr: "karma ürün-hayvan sistemi", tanim: "Aynı çiftlikte hem ürün hem hayvan yetiştirilir: ürün ve artıkları hayvanı besler, hayvan gübresi toprağı besler.", ornek: "Buğday ekip inek ve tavuk da besleyen bir köy çiftliği." }
          ] },
        { tip: "ikili", sol: { ikon: "🥬", baslik: "*Market gardening*", maddeler: ["Küçük arazi, taze ve çabuk bozulan ürün", "Pazara (kente) yakın"] },
          sag: { ikon: "🍵", baslik: "*Plantation agriculture*", maddeler: ["Geniş arazi, tek nakit ürün", "Çoğu ihracat için; tropiklerde"] },
          oyun: [
            { metin: "Domates ve marul kentin hemen kenarında yetiştirilir.", cevap: "sol", neden: "Çabuk bozulan ürün pazara yakın: *market gardening*." },
            { metin: "Sömürge döneminden kalma, yüzlerce işçinin çalıştığı büyük çay arazisi.", cevap: "sag", neden: "Geniş arazi, çok işçi, nakit ürün: *plantation*." },
            { metin: "Ürün gemiyle yurt dışındaki fabrikalara gönderilir.", cevap: "sag", neden: "İhracat odağı *plantation*'ın özelliğidir." },
            { metin: "Her sabah halin yakınına taze ürün yetiştiren küçük bir bahçe.", cevap: "sol", neden: "Küçük ölçek ve yakın pazar: *market gardening*." }
          ] }
      ]
    },
    {
      baslik: "*Extensive* tarım türleri",
      kisa: "*Shifting cultivation*, *nomadic herding*, *ranching*: geniş alan, az girdi.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔥", terim: "Shifting cultivation", tr: "gezici tarım (kes-yak)", tanim: "Ormanın küçük bir parçası kesilip yakılır; külün gübresiyle birkaç yıl ekim yapılır. Verim düşünce topluluk başka parçaya geçer, eski parça yıllarca dinlenir.", ornek: "Amazon ve Güneydoğu Asya ormanlarındaki kes-yak tarlaları." },
            { ikon: "🐪", terim: "Nomadic herding", tr: "göçebe hayvancılık", tanim: "Sürülerle birlikte mevsime göre otlak arayıp yer değiştirmek. Süt, et ve yün temel geçim kaynağıdır; çoğunlukla ailenin kendi ihtiyacı içindir.", ornek: "Sahel, Orta Asya ve Moğolistan'daki göçebe çobanlar." },
            { ikon: "🤠", terim: "Ranching", tr: "büyükbaş-küçükbaş çiftliği", tanim: "Satmak için sığır ya da koyunun geniş, çoğunlukla çitli ve sabit bir arazide yetiştirilmesi. Ticari bir işletmedir.", ornek: "Avustralya'nın iç kesimi, ABD'nin batı otlakları." }
          ] },
        { tip: "ikili", sol: { ikon: "🐪", baslik: "*Nomadic herding*", maddeler: ["Sürü mevsime göre yer değiştirir", "Genelde ailenin geçimi için"] },
          sag: { ikon: "🤠", baslik: "*Ranching*", maddeler: ["Hayvanlar sabit, çitli arazide kalır", "Satış amaçlı ticari işletme"] },
          oyun: [
            { metin: "Sahibi, sürüsünü yaz otlağından kış otlağına götürür.", cevap: "sol", neden: "Hareket eden sürüdür: *nomadic herding*." },
            { metin: "Sığırlar, tel örgüyle çevrili geniş bir arazide otlar ve etleri satılır.", cevap: "sag", neden: "Sabit, ticari: *ranching*." },
            { metin: "Süt ve yün ailenin kendi ihtiyacına gider.", cevap: "sol", neden: "Geçim amacı: *nomadic herding*." },
            { metin: "Sahip araziyi satın almış ya da kiralamış, orada yaşıyor.", cevap: "sag", neden: "Arazi sahibi sabit: *ranching*." }
          ] },
        { tip: "tuzak", metin: "İkisinde de bir şey \"geziyor\" ama gezen şey farklıdır.", yanlis: "*Shifting cultivation* ile *nomadic herding* aynıdır; ikisinde de hayvanlar gezer.", dogru: "*Shifting cultivation*'da gezen **tarla**dır (ekim alanı değişir, ekici yeni parçaya geçer). *Nomadic herding*'de gezen **sürü**dür." }
      ]
    },
    {
      baslik: "Sınıflandırma: hangisi hangisi?",
      kisa: "Altı tarım türü, iki grup: yoğun üç, geniş üç.",
      bloklar: [
        { tip: "tablo", baslik: "Altı tarım türü bir arada", head: ["Tarım türü", "Grup", "Ne yetişir", "Hareket"], rows: [
            ["*Market gardening*", "*Intensive*", "Taze sebze, meyve, çiçek", "Sabit; kente yakın"],
            ["*Plantation agriculture*", "*Intensive*", "Çay, kahve, kauçuk, muz", "Sabit; işçiler gelir"],
            ["Karma ürün-hayvan", "*Intensive*", "Ürün ve hayvan birlikte", "Sabit"],
            ["*Shifting cultivation*", "*Extensive*", "Mısır, manyok, pirinç", "Tarla yer değiştirir"],
            ["*Nomadic herding*", "*Extensive*", "Koyun, keçi, sığır, deve", "Sürü yer değiştirir"],
            ["*Ranching*", "*Extensive*", "Sığır, koyun (satış için)", "Sabit; çitli geniş arazi"]
          ] },
        { tip: "ornek", baslik: "Haritadaki üç tarım alanını adlandır", durum: "Üç farklı yer gözlüyorsun. (1) Büyük bir kentin kenarında cam seralarda domates ve marul. (2) Tropik bir adada sıra sıra çay çalıları, yüzlerce işçi, ürün gemiyle yurt dışına. (3) Amazon'da ormanın bir parçası yakılmış; burada üç yıl mısır ve manyok ekilecek, sonra aile başka yere geçecek.",
          adimlar: ["(1) Kente yakın, taze ürün, küçük alan, yoğun emek ve sermaye: *market gardening*, *intensive*.", "(2) Tek nakit ürün, geniş arazi, çok işçi, ihracat: *plantation agriculture*, *intensive*.", "(3) Yakma, birkaç yıl ekim, sonra yer değiştirme: *shifting cultivation*, *extensive*."],
          sonuc: "==(1) *market gardening* (*intensive*), (2) *plantation* (*intensive*), (3) *shifting cultivation* (*extensive*).== İpucu: önce gezen şeye, sonra hektar başına girdiye bak." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Tarım fiziksel çevreden etkilenir: *Mediterranean climate* zeytin, üzüm, narenciye; tropik iklimler pirinç, kakao, kahve, muz, şeker kamışı verir.",
            "*Intensive* tarım: küçük alana çok emek ve sermaye, hektar başına verim yüksek. *Extensive* tarım: geniş alana az girdi.",
            "Ölçüt çiftliğin toplam büyüklüğü değil, birim alana düşen girdidir; *plantation* büyüktür ama *intensive*'dir.",
            "*Intensive* türler: *market gardening* (kente yakın taze ürün), *plantation agriculture* (tek nakit ürün, ihracat), karma ürün-hayvan sistemi.",
            "*Extensive* türler: *shifting cultivation* (kes-yak, tarla gezer), *nomadic herding* (sürü gezer), *ranching* (sabit ve ticari).",
            "Sınav tuzağı: *shifting cultivation*'da gezen tarla, *nomadic herding*'de gezen sürüdür.",
            "İklim ve toprak sınır çizer; kültür, pazar ve teknoloji de neyin yetişeceğini etkiler."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Yazları sıcak ve kurak, kışları ılık ve yağışlı bir bölgede zeytin, üzüm ve narenciye yaygındır. Bu durum aşağıdakilerden hangisini en iyi gösterir?",
      opts: ["Tarım uygulamaları, o bölgenin iklim koşullarından etkilenir.", "Tarım türü yalnızca pazara uzaklıkla belirlenir.", "Bu bölgede yalnızca *extensive* tarım yapılabilir.", "İklim, tarımı hiçbir biçimde etkilemez."],
      a: 0, why: "*Mediterranean climate* belirli ürünlere uygundur; bu, fiziksel çevrenin tarımı etkilediğini gösterir. B yanlış: pazara uzaklık bir etkendir ama burada soruyu açıklayan şey iklimdir." },
    { q: "Aşağıdakilerden hangisi *extensive* tarıma örnektir?",
      opts: ["Büyük bir kentin kenarında seralarda marul yetiştirmek", "Tropik bir adada ihracat için çay yetiştirmek", "Aynı çiftlikte buğday ekip hayvan beslemek", "Çok geniş bir otlakta hektar başına az sayıda sığır yetiştirmek"],
      a: 3, why: "Geniş alan ve az girdi *extensive* tarımın özelliğidir (*ranching*). B çekici bir yanlıştır: çay *plantation*'ı çok geniştir ama hektar başına yoğun işçi kullanır, yani *intensive*'dir." },
    { q: "Bir köy topluluğu ormanın küçük bir parçasını kesip yakıyor, külün gübresiyle üç yıl mısır ekiyor, sonra başka bir parçaya geçiyor. Bu uygulama için hangisi doğrudur?",
      opts: ["*Plantation agriculture*; çünkü mısır nakit üründür.", "*Shifting cultivation*; *extensive* bir tarımdır.", "*Nomadic herding*; çünkü topluluk yer değiştiriyor.", "*Market gardening*; çünkü alan küçüktür."],
      a: 1, why: "Yakıp ekme ve birkaç yıl sonra yer değiştirme *shifting cultivation*'dır; hektar başına girdi düşüktür. C çekici bir yanlıştır: orada gezen sürü değil, tarlanın yeridir." },
    { q: "Tabloda üç çiftlik verilmiştir. Hangisi hektar başına girdi bakımından en *intensive* çiftliktir?",
      fig: { type: "table", caption: "Üç çiftlik", head: ["Çiftlik", "Alan (hektar)", "Çalışan sayısı", "Ürün (ton)"], rows: [["X", 2, 10, 40], ["Y", 500, 5, 100], ["Z", 100, 40, 500]] },
      opts: ["Çiftlik Y; en geniş alana sahiptir.", "Çiftlik Z; toplam üretimi en yüksektir.", "Çiftlik X; hektar başına 5 çalışan ve 20 ton ürün düşer.", "Üçü de aynıdır; alan fark yaratmaz."],
      a: 2, why: "X'te hektar başına 10 ÷ 2 = 5 çalışan ve 40 ÷ 2 = 20 ton ürün vardır; Z'de 0,4 çalışan ve 5 ton, Y'de 0,01 çalışan ve 0,2 ton. Ölçüt toplam büyüklük ya da toplam üretim değil, birim alana girdidir; B bu yüzden çekici ama yanlıştır." },
    { q: "*Plantation agriculture* ile ilgili hangisi doğrudur?",
      opts: ["Geniş arazide, çok işçiyle tek bir nakit ürün yetiştirilir ve ürün çoğunlukla ihracata gider.", "Sürüler mevsime göre otlak değiştirir.", "Ürünler yalnızca çiftçinin kendi ailesi içindir.", "Ormanın küçük parçaları yakılıp birkaç yıl sonra terk edilir."],
      a: 0, why: "*Plantation*, tek nakit ürünün geniş arazide çok işçiyle ve ihracat için yetiştirilmesidir. B *nomadic herding*'i, D *shifting cultivation*'ı anlatır." }
  ]
};
