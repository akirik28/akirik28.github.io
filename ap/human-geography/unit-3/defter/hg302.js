/* Kitora not defteri · hg302 · Kültürel Peyzajlar
   Kaynak: AP HuG CED Topic 3.2 (PSO-3.B, PSO-3.C). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg302",
  amac: "Bu konu bir yerin görünümünün, orada yaşayanların kültürünü nasıl yansıttığını anlatıyor. *Cultural landscape*, *sequent occupance*, mimari, etnik mahalleler, *sacred space*, yerli toprakları ve cinsiyet tutumlarının mekânı nasıl şekillendirdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "*Cultural landscape*: kültürün izi",
      kisa: "Kültürel peyzaj, insanların bir yerde bıraktığı görünür kültür izlerinin toplamıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏞️", terim: "Cultural landscape", tr: "kültürel peyzaj", tanim: "Bir yerde doğal özelliklerle insanın eklediği her şeyin birleşimi: yapılar, tarlalar, tabelalar, ibadethaneler. Kısacası bir yerin kültürünü gösteren görünüm.", ornek: "Bir mahallede cami, kilise ve sinagogun yan yana olması." }
          ] },
        { tip: "harita", merkez: "Peyzajın bileşenleri", dallar: [
            { baslik: "Fiziki özellikler", alt: "nehir, yamaç, iklim" },
            { baslik: "Tarım ve sanayi", alt: "tarlalar, fabrikalar" },
            { baslik: "Din ve dil", alt: "ibadethaneler, tabelalar" },
            { baslik: "*Sequent occupance*", alt: "eski yerleşimcilerin izleri" },
            { baslik: "Mimari", alt: "geleneksel ve postmodern" },
            { baslik: "Arazi kullanımı", alt: "parseller, sokak düzeni" }
          ] }
      ]
    },
    {
      baslik: "Katman katman peyzaj: *sequent occupance*",
      kisa: "Her yeni halk bir önceki izlerin üstüne kendi katmanını ekler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🥞", terim: "Sequent occupance", tr: "ardışık yerleşim", tanim: "Aynı yeri sırayla farklı toplulukların kullanması; her biri peyzajda kendi izini bırakır. Eski izler tamamen silinmez, üst üste biner.", ornek: "Ayasofya: kilise, camii, müze, yeniden camii." }
          ] },
        { tip: "grafik", baslik: "Bir şehir tabakalanır", xlabel: "Katmanlar (eskiden yeniye)", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "k1", tip: "alan", renk: 0, noktalar: [[1, 0], [9, 0], [9, 0], [1, 0]] },
            { id: "k2", tip: "alan", renk: 1, noktalar: [[1, 2.5], [9, 2.5], [9, 2.5], [1, 2.5]] },
            { id: "k3", tip: "alan", renk: 2, noktalar: [[1, 5], [9, 5], [9, 5], [1, 5]] },
            { id: "t1", tip: "yazi", x: 5, y: 1.1, metin: "1. halk: ilk yerleşim", gizli: true },
            { id: "t2", tip: "yazi", x: 5, y: 3.6, metin: "2. halk: yeni yapılar, eskiler kalır", gizli: true },
            { id: "t3", tip: "yazi", x: 5, y: 6.1, metin: "Bugün: üç katman birlikte görünür", gizli: true }
          ],
          durumlar: [
            { metin: "Boş bir arazi. Önce ilk yerleşimci gelir." },
            { metin: "İlk halk yerleşir: ==ilk katman==.", set: { k1: { noktalar: [[1, 0], [9, 0], [9, 2.5], [1, 2.5]] } }, goster: ["t1"] },
            { metin: "İkinci halk gelir, eski yapıların bir kısmını kullanır ve kendi yapılarını ekler: ==ikinci katman==.", set: { k2: { noktalar: [[1, 2.5], [9, 2.5], [9, 5], [1, 5]] } }, goster: ["t2"] },
            { metin: "Üçüncü halk da kendi izini ekler. Sonuçta peyzaja bakan, üç dönemin izini birlikte okuyabilir.", set: { k3: { noktalar: [[1, 5], [9, 5], [9, 7.5], [1, 7.5]] } }, goster: ["t3"] }
          ] },
        { tip: "tuzak", metin: "*Sequent occupance* sıradan bir \"değişim\" değil, izlerin birikmesidir.", yanlis: "Yeni bir halk gelince eski kültürün izleri tamamen yok olur.", dogru: "Eski izler (yapılar, yer adları, arazi düzeni) kalır; yeni halk ==üstüne ekler==. Peyzaj bir tabaka kek gibi okunur." }
      ]
    },
    {
      baslik: "Mimari ve arazi kullanımı",
      kisa: "Geleneksel mimari yerel koşullara uyar; postmodern mimari stillerle oynar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏘️", baslik: "*Traditional architecture* (geleneksel mimari)", maddeler: ["Yerel malzeme ve yerel iklime uyum", "Kültürel kimliğin simgesi (Mardin taş evleri)"] },
          sag: { ikon: "🏙️", baslik: "*Postmodern architecture* (postmodern mimari)", maddeler: ["Geçmiş ve farklı stilleri karıştıran, oyuncu tasarım", "Eğlenceli, sıra dışı formlar; alışveriş merkezi cepheleri"] },
          oyun: [
            { metin: "Taş duvarlı, küçük pencereli, serin tutan evler.", cevap: "sol", neden: "Yerel malzemeye ve iklime uyum: geleneksel." },
            { metin: "Bir binada hem klasik sütunlar hem de neon renkli cam bölümler var.", cevap: "sag", neden: "Farklı stilleri oyuncu biçimde karıştırıyor: postmodern." },
            { metin: "Köy evlerinin ortak avlu etrafında dizilmesi.", cevap: "sol", neden: "Yerel yaşam biçimini yansıtan geleneksel düzen." },
            { metin: "Dışarıdan birçok tarihî stilin pastişini andıran alışveriş merkezi.", cevap: "sag", neden: "Eklektik ve gösterişli: postmodern." }
          ] },
        { tip: "not", metin: "*Land-use pattern* (arazi kullanım örüntüsü), toprağın nasıl bölündüğünü gösterir: dar şeritler halinde tarlalar, geniş çiftlikler, ızgara sokaklar ya da dolambaçlı çarşı sokakları. Bu düzen de bir toplumun mirasını, ekonomisini ve değerlerini yansıtır." }
      ]
    },
    {
      baslik: "Etnik mahalleler",
      kisa: "Aynı etnik kökenden insanlar bir mahallede toplanınca peyzaj onların izini taşır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏘️", terim: "Ethnic neighborhood", tr: "etnik mahalle", tanim: "Aynı etnik kökenden insanların yoğunlukla yaşadığı mahalle. Dil, yemek, tabela ve ibadethaneler peyzajda görünür.", ornek: "Berlin'in Kreuzberg semtinde Türk bakkalları ve çarşıları." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🤝", baslik: "Destek ağı", metin: "Aynı dili konuşan, iş ve konut bulmaya yardım eden akrabalar." },
            { ikon: "🍲", baslik: "Ortak kültür", metin: "Aynı yemek, ibadet yeri ve alışveriş ihtiyacı yakın yaşamayı kolaylaştırır." },
            { ikon: "🚧", baslik: "Dışlanma", metin: "Bazen ayrımcılık da insanları aynı mahallede toplanmaya iter." }
          ] }
      ]
    },
    {
      baslik: "*Sacred space* ve yerli toprakları",
      kisa: "Kutsal sayılan yerler ve yerli toprakları, mekânın nasıl kullanılacağını belirler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🕋", terim: "Sacred space", tr: "kutsal mekân", tanim: "Bir topluluğun dinî ya da manevi nedenlerle özel saydığı yer. Giriş kuralları, yapılaşma ve ziyaret biçimi o inanca göre belirlenir.", ornek: "Kâbe, Ganj kıyısındaki Varanasi." },
            { ikon: "🪶", terim: "Indigenous lands", tr: "yerli toprakları", tanim: "Bir bölgenin ilk sakinlerinin geleneksel olarak yaşadığı ve kutsal saydığı topraklar. Kullanım biçimi onların kültürel inancına bağlıdır.", ornek: "Avustralya'da Uluru, Anangu halkı için kutsaldır." }
          ] },
        { tip: "tablo", baslik: "Kutsal yer mekânı nasıl şekillendirir?", head: ["Yer", "Kimin için kutsal?", "Mekâna etkisi"], rows: [
            ["Kâbe (Mekke)", "Müslümanlar", "Kutsal alana yalnız Müslümanlar girer; hac için büyük konaklama ve ulaşım altyapısı kurulur"],
            ["Ganj Nehri (Varanasi)", "Hindular", "Nehir boyunca ghat denen merdivenli kıyılar"],
            ["Uluru (Avustralya)", "Anangu halkı", "Tırmanış 2019'da yasaklandı"],
            ["Kudüs", "Yahudiler, Hıristiyanlar, Müslümanlar", "Aynı kentte iç içe birden fazla kutsal mekân"]
          ] },
        { tip: "tuzak", metin: "*Sacred space* yalnızca binalar demek değildir.", yanlis: "Kutsal mekân, mutlaka bir ibadethane binasıdır.", dogru: "Nehirler, dağlar, ağaçlar ve açık araziler de ==kutsal mekân== olabilir; Uluru ve Ganj buna örnektir." }
      ]
    },
    {
      baslik: "Cinsiyet tutumları ve mekân kullanımı",
      kisa: "Etnik kimlik ve cinsiyet rolleri, kamusal alanın nasıl kullanıldığını belirler.",
      bloklar: [
        { tip: "not", metin: "Bir toplumun ==cinsiyet rollerine bakışı== iş yerini, okulu, ulaşımı ve kamusal alanı da şekillendirir. Kadınların işgücüne katılması yaygın olan toplumlarda kreş, esnek çalışma ve akşam ulaşımı gibi ihtiyaçlar peyzajda daha görünür olur." },
        { tip: "ikili", sol: { ikon: "🏢", baslik: "Kadınların işgücüne katılımı yaygın", maddeler: ["İş merkezlerinde ve ulaşımda kadınlar görünür", "Kreş, esnek çalışma düzeni gibi hizmet alanları"] },
          sag: { ikon: "🏠", baslik: "Kadınların işgücüne katılımı sınırlı", maddeler: ["İş ve kamusal alan kullanımı farklı biçimde düzenlenir", "Bazı mekânlar cinsiyete göre ayrılabilir"] } }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Cultural landscape*: fiziki özellikler, tarım ve sanayi, din ve dil, *sequent occupance*, mimari ve arazi kullanımının birleşimi.",
            "*Sequent occupance*: aynı yeri sırayla farklı halkların kullanması; izler birikir, silinmez.",
            "Geleneksel mimari yerel malzemeye ve iklime uyar; postmodern mimari stilleri oyuncu biçimde karıştırır.",
            "*Land-use pattern* (parsel ve sokak düzeni) bir toplumun miras ve değerlerini yansıtır.",
            "*Ethnic neighborhood*: destek ağı, ortak kültür ve bazen dışlanma nedeniyle oluşur; peyzajda dil, yemek ve ibadethane izi bırakır.",
            "*Sacred space*: dinî nedenle özel sayılan yer; binalar kadar nehir ve dağ da olabilir.",
            "Yerli toprakları, ilk sakinlerin inancıyla şekillenen kullanım biçimini taşır.",
            "Cinsiyet rollerine tutumlar (kadınların işgücündeki rolü) mekân kullanımını belirler."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir şehirde Roma dönemine ait surlar, Osmanlı çarşısı ve cam gökdelenler yan yana duruyor. Bu durumu en iyi hangi kavram açıklar?",
      opts: ["*Ethnocentrism*", "*Sequent occupance*", "*Cultural relativism*", "*Land-use pattern*"],
      a: 1,
      why: "Aynı yerin sırayla farklı halklar tarafından kullanılması ve izlerin birikmesi *sequent occupance*'tır. D şıkkı en çekici yanlış: arazi kullanımı bir bileşendir, ama katman katman oluşumu açıklamaz." },
    { q: "Bir göçmen mahallesinde tabelalar ana dillerinde yazılı, bakkallar kendi yemeklerini satıyor ve bir ibadethane var. Bu mahalle peyzaja nasıl katkı yapar?",
      opts: ["Fiziki özellikleri değiştirir", "*Sacred space*'i ortadan kaldırır", "Kültürel kimliği görünür kılar", "Arazi kullanımını dondurur"],
      a: 2,
      why: "Etnik mahalleler dil, yemek ve ibadethanelerle kültürel kimliği peyzajda görünür kılar. Fiziki özellikleri değiştirmek (A) bu örneğin ana etkisi değildir." },
    { q: "Avustralya'da bir kaya oluşumunun yerli bir halk için kutsal sayılması ve tırmanışa kapatılması, hangi fikri örneklendirir?",
      opts: ["Postmodern mimarinin yayılışı", "Kadınların işgücüne katılımının artması", "*Ethnocentrism*'in kaybolması", "Kültürel inançların arazi kullanımını belirlemesi"],
      a: 3,
      why: "Kutsal sayılan bir yer, kullanım biçimini (tırmanış yasağı) belirler. B ve C bu senaryoda hiç yok." },
    { q: "Aşağıdaki tabloya göre hangisi söylenebilir?",
      fig: { type: "table", caption: "İki mahallenin peyzajı", head: ["Mahalle", "Belirgin özellikler"], rows: [["X", "Ahşap evler, dar sokaklar, cami, geleneksel çarşı"], ["Y", "Cam-çelik binalar, alışveriş merkezi, neon tabelalar"]] },
      opts: ["Mahalle Y, geleneksel mimarinin güçlü olduğunu gösterir", "Mahalle X, yerel malzemeyi ve geleneksel düzeni; Y ise postmodern mimariyi yansıtır", "Her iki mahalle de aynı kültürel dönemden gelir", "Mahalle X'in fiziki özellikleri yoktur"],
      a: 1,
      why: "X'te yerel malzeme ve geleneksel çarşı; Y'de cam-çelik ve eklektik mekânlar var. A şıkkı yanlış: Y'nin özellikleri postmodern ya da modern yapılara işaret eder." },
    { q: "Bir toplumda kadınların işgücüne katılımı artınca şehirde kreşler, akşam ulaşım seferleri ve esnek çalışma ofisleri yaygınlaşıyor. Bu durum neyi gösterir?",
      opts: ["Cinsiyet tutumlarının mekân kullanımını şekillendirdiğini", "Kültürel peyzajın hiç değişmediğini", "*Sequent occupance*'ın bittiğini", "Fiziki coğrafyanın kültürü tamamen belirlediğini"],
      a: 0,
      why: "Cinsiyet rollerine tutumlar mekân kullanımını ve peyzajı şekillendirir. D şıkkı çekici ama aşırı: kültür yalnızca fiziki coğrafyayla belirlenmez; bu örnekte toplumsal tutum belirleyici." }
  ]
};
