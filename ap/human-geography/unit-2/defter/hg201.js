/* Kitpath not defteri · hg201 · Nüfusun Dağılımı (Population Distribution)
   Kaynak: AP HuG CED Topic 2.1 (PSO-2.A.1, 2.A.2, 2.B.1, 2.C.1). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg201",
  amac: "Bu konu insanların Dünya'da nerede yaşadığını ve nedenini anlatıyor. Fiziksel ve insani faktörleri, ölçeğin etkisini ve üç yoğunluk hesabını (*arithmetic*, *physiological*, *agricultural*) öğreneceksin.",
  bolumler: [
    {
      baslik: "Dağılım ve yoğunluk",
      kisa: "Dağılım nüfusun nerede olduğunu, yoğunluk alan başına kaç kişi olduğunu söyler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗺️", terim: "Population distribution", tr: "nüfus dağılımı", tanim: "İnsanların yeryüzüne yayılış biçimi: nerede kalabalık, nerede seyrek.", ornek: "Türkiye'de nüfus kıyılarda ve Marmara çevresinde toplanır." },
            { ikon: "📏", terim: "Population density", tr: "nüfus yoğunluğu", tanim: "Belirli bir alana düşen kişi sayısı; genellikle kişi/km² olarak verilir.", ornek: "10.000 kişi ÷ 50 km² = 200 kişi/km²." },
            { ikon: "🏘️", terim: "Ecumene", tr: "yerleşilen alan", tanim: "İnsanların sürekli yaşadığı kara parçası. Çöller, kutuplar ve çok yüksek dağlar dışarıda kalır.", ornek: "Antarktika ecumene'nin dışındadır." }
          ] },
        { tip: "not", metin: "Dünya nüfusu eşit dağılmaz. Çoğu Kuzey Yarımküre'de yaşar; en büyük kümeler Doğu Asya, Güney Asya, Güneydoğu Asya ve Avrupa'dır. Bu kümeler çoğunlukla kıyılarda ve nehir ovalarındadır. Tek bir yoğunluk sayısı bu eşitsizliği gizleyebilir." }
      ]
    },
    {
      baslik: "Fiziksel faktörler",
      kisa: "İklim, yer şekilleri ve su kütleleri nüfusu çeker ya da uzak tutar.",
      bloklar: [
        { tip: "tablo", baslik: "Fiziksel faktörler nüfusu nasıl etkiler?", head: ["Faktör", "Nüfusu çeken", "Nüfusu uzak tutan"], rows: [
            ["İklim", "Ilıman sıcaklık, yeterli yağış (Marmara ve Ege kıyıları)", "Aşırı sıcak, soğuk ya da kuraklık (Sahra, Sibirya)"],
            ["Yer şekilleri", "Düz, verimli ova (Çukurova, Ganj Ovası)", "Dik ve yüksek dağlar (Himalayalar)"],
            ["Su kütleleri", "Nehir, göl, deniz: içme suyu, sulama, ulaşım (Nil Vadisi)", "Susuzluk (çöl) ya da kalıcı buz"],
            ["Toprak ve bitki örtüsü", "Verimli alüvyon toprak", "Yoğun yağmur ormanı, tundra (Amazon havzasının büyük kısmı)"]
          ], not: "İlk büyük uygarlıklar hep su kıyısında doğdu: Nil, Dicle–Fırat, İndus, Sarı Nehir." },
        { tip: "not", metin: "Fiziksel faktörler yerleşmenin zeminini hazırlar; ama tek başına belirleyici değildir. Bir sonraki başlıkta insanların bu sınırları nasıl aştığını göreceksin." }
      ]
    },
    {
      baslik: "İnsani faktörler",
      kisa: "Kültür, ekonomi, tarih ve politika insanları bir yere toplar ya da uzaklaştırır.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🎎", baslik: "Kültür", metin: "Aile bağları, inançlar ve kutsal sayılan yerler insanları bir bölgede tutar. Örnek: aileden uzaklaşmak istemeyenlerin köyde kalması." },
            { ikon: "💼", baslik: "Ekonomi", metin: "İş, sanayi ve ticaret insanları çeker. Örnek: Marmara çevresindeki fabrikalar ve limanlar." },
            { ikon: "📜", baslik: "Tarih", metin: "Uzun süredir yerleşilmiş bölgeler kalabalık kalır. Örnek: eski ticaret yolları üstündeki kentler." },
            { ikon: "🏛️", baslik: "Politika", metin: "Başkent seçimi, teşvikler, sınırlar ve savaşlar dağılımı değiştirir. Örnek: Ankara'nın 1923'te başkent olması." }
          ] },
        { tip: "ikili", sol: { ikon: "🏔️", baslik: "*Physical factor* (fiziksel faktör)", maddeler: ["Doğanın verdiği koşul: iklim, yer şekli, su, toprak", "Çok yavaş değişir"] },
          sag: { ikon: "🏙️", baslik: "*Human factor* (insani faktör)", maddeler: ["İnsanların kararları: kültür, ekonomi, tarih, politika", "Hızla değişebilir"] },
          oyun: [
            { metin: "Çukurova'daki düz, verimli alüvyon ova.", cevap: "sol", neden: "Yer şekli ve toprak: fiziksel." },
            { metin: "Hükümetin kamu kurumlarını iç bölgedeki yeni bir başkente taşıması.", cevap: "sag", neden: "Siyasi karar: insani." },
            { metin: "Sahra'da neredeyse hiç yağmur düşmemesi.", cevap: "sol", neden: "İklim: fiziksel." },
            { metin: "Bir limanın ticaret merkezi olması ve işçileri çekmesi.", cevap: "sag", neden: "Ekonomi: insani." },
            { metin: "Köylülerin atalarının topraklarından ayrılmak istememesi.", cevap: "sag", neden: "Kültür: insani." }
          ] },
        { tip: "tuzak", metin: "Çölde büyük bir şehir olamaz diye düşünmek.", yanlis: "Çöl iklimi nüfusu her zaman seyrek tutar.", dogru: "Fiziksel koşullar etkiler ama insani faktörler bunu aşabilir: Dubai, petrol geliri ve ticaret sayesinde çölde büyük bir şehir oldu. Cevabında ==fiziksel ve insani== faktörü birlikte ver." }
      ]
    },
    {
      baslik: "Ölçek değişince açıklama değişir",
      kisa: "Aynı nüfus deseni farklı ölçeklerde farklı faktörlerle açıklanır.",
      bloklar: [
        { tip: "adimlar", baslik: "Üç ölçek, üç açıklama", adimlar: [
            { baslik: "Dünya ölçeği", metin: "Nüfus ılıman iklimli alçak kıyılarda ve nehir ovalarında toplanır; çöller, kutuplar ve yüksek dağlar boştur. Fiziksel faktörler öne çıkar." },
            { baslik: "Ülke ölçeği (Türkiye)", metin: "Marmara, Ege ve Akdeniz kıyıları yoğun; yüksek ve sert iklimli doğu kesimleri daha seyrek. Fiziksel faktörlere ekonomi (sanayi, iş) eklenir." },
            { baslik: "Şehir ölçeği (İstanbul)", metin: "Nüfus Boğaz çevresinde, iş merkezlerine ve ulaşım hatlarına yakın toplanır. İklim aynıdır; fark iş, ulaşım ve konut fiyatı gibi insani faktörlerden gelir." }
          ] },
        { tip: "tuzak", metin: "Ölçeği okumadan açıklama seçmek.", yanlis: "Bir şehirdeki yoğunluk farkını da iklimle açıklarım.", dogru: "Şehir içinde iklim neredeyse aynıdır. Soruda ==ölçeği== oku; o ölçekte fark yaratan faktörü seç (şehirde çoğunlukla insani faktörler)." }
      ]
    },
    {
      baslik: "Üç yoğunluk yöntemi",
      kisa: "Aritmetik, fizyolojik ve tarımsal yoğunluk aynı ülkeyi farklı paydalara böler.",
      bloklar: [
        { tip: "tablo", baslik: "Üç yöntem", head: ["Yöntem", "Formül", "Neyi gösterir?"], rows: [
            ["*Arithmetic density*", "toplam nüfus ÷ toplam kara alanı", "Ülkenin kaba kalabalığı"],
            ["*Physiological density*", "toplam nüfus ÷ ekilebilir alan", "Besin üretebilecek toprağa binen baskı"],
            ["*Agricultural density*", "çiftçi sayısı ÷ ekilebilir alan", "Çiftçi başına toprak; tarımın verimi ve makineleşmesi hakkında ipucu"]
          ], vurgu: 1 },
        { tip: "grafik", baslik: "Aynı ülke, üç yoğunluk (1 nokta = 6 milyon kişi)", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "k1", tip: "cizgi", renk: 3, from: [0.5, 0.5], to: [9.5, 0.5] },
            { id: "k2", tip: "cizgi", renk: 3, from: [9.5, 0.5], to: [9.5, 9.5] },
            { id: "k3", tip: "cizgi", renk: 3, from: [9.5, 9.5], to: [0.5, 9.5] },
            { id: "k4", tip: "cizgi", renk: 3, from: [0.5, 9.5], to: [0.5, 0.5] },
            { id: "ek", tip: "alan", renk: 2, noktalar: [[0.8, 0.8], [4.8, 0.8], [4.8, 4.8], [0.8, 4.8]], gizli: true },
            { id: "d1", tip: "nokta", x: 1.5, y: 1.4 },
            { id: "d2", tip: "nokta", x: 3.2, y: 1.2 },
            { id: "d3", tip: "nokta", x: 4.2, y: 2.3 },
            { id: "d4", tip: "nokta", x: 2.1, y: 2.9 },
            { id: "d5", tip: "nokta", x: 3.5, y: 3.6 },
            { id: "d6", tip: "nokta", x: 1.4, y: 4.2 },
            { id: "d7", tip: "nokta", x: 4.3, y: 4.3 },
            { id: "d8", tip: "nokta", x: 7.2, y: 2.2 },
            { id: "d9", tip: "nokta", x: 6.5, y: 7.4 },
            { id: "d10", tip: "nokta", x: 8.4, y: 5.6 },
            { id: "f1", tip: "nokta", renk: 3, x: 2.1, y: 2.9, gizli: true },
            { id: "y0", tip: "yazi", x: 5, y: 8.6, metin: "Toplam alan: 300.000 km²" },
            { id: "y1", tip: "yazi", x: 2.8, y: 5.4, metin: "Ekilebilir: 60.000 km²", gizli: true },
            { id: "y2", tip: "yazi", x: 7.0, y: 4.0, metin: "10 nokta = 60 milyon kişi", gizli: true },
            { id: "y3", tip: "yazi", x: 7.0, y: 3.2, metin: "1 mor nokta = 6 milyon çiftçi", gizli: true }
          ],
          durumlar: [
            { metin: "Bir ülke: 60 milyon kişi, 300.000 km². ==*Arithmetic* = 60 milyon ÷ 300.000 = 200 kişi/km².==", goster: ["y0"] },
            { metin: "Ama toprağın yalnızca 60.000 km²'si ekilebilir. ==*Physiological* = 60 milyon ÷ 60.000 = 1.000 kişi/km².==", goster: ["ek", "y1", "y2"] },
            { metin: "Çiftçiler 6 milyon kişi (1 nokta). ==*Agricultural* = 6 milyon ÷ 60.000 = 100 çiftçi/km².==", goster: ["f1", "y3"], gizle: ["y0"] },
            { metin: "Aynı ülke, üç ayrı sayı: ==200 · 1.000 · 100.== Payda değiştikçe anlam değişir." }
          ] }
      ]
    },
    {
      baslik: "İki ülkeyi karşılaştır",
      kisa: "Aritmetik yoğunluğu düşük ülke, toprağa en çok baskı yapan ülke olabilir.",
      bloklar: [
        { tip: "ornek", baslik: "Nilova: dar bir vadi", durum: "Nilova'da 30 milyon kişi yaşıyor. Toplam kara alanı 600.000 km², ekilebilir alan 30.000 km², tarımda çalışan 6 milyon kişi. Üç yoğunluğu bul.",
          adimlar: ["*Arithmetic*: 30.000.000 ÷ 600.000 = 50 kişi/km².", "*Physiological*: 30.000.000 ÷ 30.000 = 1.000 kişi/km².", "*Agricultural*: 6.000.000 ÷ 30.000 = 200 çiftçi/km²."],
          sonuc: "Ülke geniş görünür (50) ama insanlar dar bir ekilebilir şeritte toplanmıştır: ==toprağa gerçek baskı 1.000==." },
        { tip: "ornek", baslik: "Platoya ile karşılaştırma", durum: "Platoya'da da 30 milyon kişi var. Kara alanı 100.000 km², ekilebilir alan 50.000 km², tarımda çalışan 3 milyon kişi. Nilova ile karşılaştır.",
          adimlar: ["*Arithmetic*: 30.000.000 ÷ 100.000 = 300 kişi/km² (Nilova'nın 6 katı).", "*Physiological*: 30.000.000 ÷ 50.000 = 600 kişi/km² (Nilova'dan düşük).", "*Agricultural*: 3.000.000 ÷ 50.000 = 60 çiftçi/km² (Nilova'dan düşük)."],
          sonuc: "Platoya daha kalabalık görünür ama toprağa binen baskı ==Nilova'da daha yüksektir==. Nilova'da çiftçi başına daha az toprak düşer; tarım büyük olasılıkla daha emek yoğundur." }
      ]
    },
    {
      baslik: "Hangi yöntem neyi gösterir?",
      kisa: "Yöntem değişince toprağa binen baskı hakkında söylediğin şey de değişir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📏", baslik: "*Arithmetic density*", maddeler: ["Tüm kara alanına böler", "Kaba kalabalığı gösterir; dağılımı ve toprak kalitesini gizler"] },
          sag: { ikon: "🌾", baslik: "*Physiological* ve *agricultural*", maddeler: ["Yalnızca ekilebilir alanı payda yapar", "Besin üretecek toprağa binen baskıyı gösterir"] },
          oyun: [
            { metin: "Nüfusun çoğu dar bir vadide yaşıyor, geri kalan çöl. Toprağa gerçek baskıyı bu ölçüt gösterir.", cevap: "sag", neden: "Ekilebilir alan paydaysa baskı görünür." },
            { metin: "İki ülkenin genel kalabalığını hızlıca karşılaştırmak.", cevap: "sol", neden: "Kaba ortalama: aritmetik." },
            { metin: "Çiftçi başına düşen toprak azsa tarım emek yoğun olabilir.", cevap: "sag", neden: "Çiftçi ÷ ekilebilir alan: tarımsal." },
            { metin: "Dağları, çölleri ve ormanları da paydaya katar.", cevap: "sol", neden: "Toplam alan kullanır: aritmetik." }
          ] },
        { tip: "tuzak", metin: "Aritmetik yoğunluğa bakıp sonuç çıkarmak.", yanlis: "Aritmetik yoğunluğu düşük olan ülkede toprağa baskı yoktur.", dogru: "Aritmetik yoğunluk ekilemeyen alanları da paydaya katar. ==Baskı için fizyolojik ya da tarımsal yoğunluğa bak.== Mısır buna klasik örnektir: aritmetik değer orta düzeyde (~110 kişi/km²), ama ekilebilir alan çok az olduğu için fizyolojik değer 3.000 kişi/km²'nin üstünde; nüfus Nil Vadisi'nde toplu." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Distribution* nüfusun nerede olduğu, *density* alan başına kişi sayısıdır; *ecumene* sürekli yerleşilen alandır.",
            "Fiziksel faktörler: iklim, yer şekilleri, su kütleleri (toprak ve bitki örtüsü de eklenebilir).",
            "İnsani faktörler: kültür, ekonomi, tarih, politika. Dubai örneği: insani faktör fiziksel sınırı aşabilir.",
            "Faktörler ölçeğe göre değişir: dünyada fiziksel, şehirde çoğunlukla insani faktörler belirleyicidir.",
            "*Arithmetic* = nüfus ÷ toplam alan; *physiological* = nüfus ÷ ekilebilir alan; *agricultural* = çiftçi ÷ ekilebilir alan.",
            "Aritmetik yoğunluk kaba kalabalığı verir; fizyolojik ve tarımsal yoğunluk toprağa binen baskıyı gösterir.",
            "Aritmetik yoğunluğu düşük bir ülkenin fizyolojik yoğunluğu çok yüksek olabilir (Nilova: 50 ve 1.000).",
            "Çiftçi başına az toprak (yüksek tarımsal yoğunluk) emek yoğun, az makineleşmiş tarıma işaret eder."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir ülkenin nüfusu 40 milyon, toplam kara alanı 200.000 km², ekilebilir alanı 20.000 km²'dir. Bu ülkenin *physiological density* değeri kaçtır?",
      opts: ["200 kişi/km²", "2.000 kişi/km²", "20 kişi/km²", "20.000 kişi/km²"],
      a: 1,
      why: "Fizyolojik yoğunluk = nüfus ÷ ekilebilir alan = 40.000.000 ÷ 20.000 = 2.000. A şıkkı en çekici yanlış: 200, toplam alanla bulunan *arithmetic density*'dir (40.000.000 ÷ 200.000)." },
    { q: "Hangisi nüfus dağılımını etkileyen bir insani faktör örneğidir?",
      opts: ["Kıyı boyunca uzanan geniş bir ovanın bulunması", "Yaz aylarında çok az yağış düşmesi", "Yüksek bir dağ sırasının ülkeyi ikiye bölmesi", "Hükümetin yeni bir başkent kurup kamu çalışanlarını oraya taşıması"],
      a: 3,
      why: "Başkent seçimi ve kamu kurumlarının taşınması siyasi bir karardır: insani faktör. A, B ve C ise yer şekli ve iklimdir: fiziksel faktörler. A şıkkı çekicidir ama ova bir yer şeklidir." },
    { q: "Tabloya göre hangi yorum yapılabilir?",
      fig: { type: "table", caption: "İki ülkenin yoğunlukları (kişi/km²)", head: ["Ülke", "Aritmetik", "Fizyolojik", "Tarımsal"], rows: [["X", 30, 900, 150], ["Y", 250, 500, 40]] },
      opts: ["X'te nüfus, besin üretebilecek toprağa Y'den daha fazla baskı yapar; ülkenin geniş bir kısmı ekilemez olabilir", "Y'nin aritmetik yoğunluğu yüksek olduğu için ekilebilir toprağa binen baskı X'ten büyüktür", "Y'de çiftçi başına düşen toprak X'ten azdır", "X ve Y'nin tarımsal yoğunlukları yakın olduğu için tarım sistemleri benzerdir"],
      a: 0,
      why: "X'in fizyolojik yoğunluğu (900) Y'ninkinden (500) yüksek: baskı daha fazla. Aritmetik değerin düşüklüğü (30), geniş alanın ekilemez olabileceğini düşündürür. B şıkkı en çekici yanlış: baskıyı aritmetik değil fizyolojik yoğunluk gösterir. C yanlış: Y'nin tarımsal yoğunluğu düşük (40), yani çiftçi başına daha fazla toprak düşer." },
    { q: "Bir coğrafyacı İstanbul içinde nüfusun neden Boğaz çevresinde ve metro hatları boyunca toplandığını açıklıyor. Bu ölçekte en açıklayıcı faktör hangisidir?",
      opts: ["Şehir içindeki iklim farkları", "Yağış miktarındaki bölgesel değişim", "İş yerlerine, ulaşım hatlarına ve konut fiyatlarına bağlı insani faktörler", "Dünya genelindeki enlem dağılımı"],
      a: 2,
      why: "Şehir ölçeğinde iklim hemen hemen aynıdır; fark iş, ulaşım ve konut gibi insani faktörlerden gelir. A şıkkı en çekici yanlış: iklim açıklaması dünya ya da bölge ölçeğinde işe yarar, şehir içinde fark yaratmaz." },
    { q: "Bir ülkede *arithmetic density* düşük, *agricultural density* ise çok yüksektir. Bu durum en iyi nasıl yorumlanır?",
      opts: ["Ülkede toprak boldur ve tarım yüksek oranda makineleşmiştir", "Çok az ekilebilir toprağa çok sayıda çiftçi düşüyor; tarım emek yoğun ve toprağa baskı yüksek olabilir", "Ülkenin kentleşme oranı çok yüksektir", "Tarımda çalışan nüfus azdır ve ekilebilir toprak kullanılmamaktadır"],
      a: 1,
      why: "Yüksek tarımsal yoğunluk, ekilebilir alan başına çok çiftçi demektir; düşük aritmetik yoğunluk ise ülkenin büyük kısmının ekilemez ya da seyrek olduğunu düşündürür. A şıkkı en çekici yanlış: yüksek tarımsal yoğunluk çiftçi başına az toprak demektir, yani makineleşmeden çok emek yoğun tarıma işaret eder." }
  ]
};
