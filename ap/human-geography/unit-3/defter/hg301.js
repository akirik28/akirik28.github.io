/* Kitora not defteri · hg301 · Kültüre Giriş
   Kaynak: AP HuG CED Topic 3.1 (PSO-3.A). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg301",
  amac: "Bu konu kültürün ne olduğunu ve coğrafyacıların ona nasıl baktığını anlatıyor. *Culture trait*'leri, kültürün yerden yere neden değiştiğini ve *cultural relativism* ile *ethnocentrism* farkını öğreneceksin.",
  bolumler: [
    {
      baslik: "Kültür nedir?",
      kisa: "Kültür, bir toplumun paylaştığı ve sonraki kuşaklara aktardığı yaşam biçimidir.",
      bloklar: [
        { tip: "not", metin: "*Culture*, bir toplumun paylaştığı ==pratikler, teknolojiler, tutumlar ve davranışlardan== oluşur. Doğuştan gelmez; aileden, okuldan, çevreden ==öğrenilir== ve nesilden nesile aktarılır." },
        { tip: "harita", merkez: "*Culture*", dallar: [
            { baslik: "Pratikler", alt: "bayramlar, yemek yapma, selamlaşma" },
            { baslik: "Teknolojiler", alt: "araçlar, yapı malzemesi, telefon" },
            { baslik: "Tutumlar", alt: "neyin önemli, neyin ayıp olduğu" },
            { baslik: "Davranışlar", alt: "sofra adabı, kuyruğa girme" }
          ] },
        { tip: "tuzak", metin: "Kültür yalnızca müzik, dans ve folklor demek değildir.", yanlis: "Kültür, sadece sanat ve geleneklerden ibarettir.", dogru: "Kültür; ==teknolojiyi, tutumları ve gündelik davranışı== da kapsar. Telefonla ödeme yapmak da, sofrada ayakkabı çıkarmak da kültürdür." }
      ]
    },
    {
      baslik: "Kültürel özellikler: *culture trait*",
      kisa: "*Culture trait* kültürün tek bir parçasıdır: yemek, mimari, arazi kullanımı.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Culture trait", tr: "kültürel özellik", tanim: "Bir kültürün tek bir parçası; gözlenebilir bir alışkanlık ya da nesne. Birçok özellik birleşince o toplumun kültürü ortaya çıkar.", ornek: "Okul çıkışında simit yemek bir kültürel özelliktir." }
          ] },
        { tip: "tablo", baslik: "AP'nin üç klasik örneği", head: ["Özellik", "Ne gösterir?", "Örnek"], rows: [
            ["Yemek tercihleri", "Hangi ürünün yetiştiği, neyin yenip neyin yenmediği", "Karadeniz'de hamsi, Hatay'da künefe"],
            ["Mimari", "Yapı malzemesi, iklim ve inanç", "Mardin'de taş evler, Safranbolu'da ahşap evler"],
            ["Arazi kullanımı", "Toprağın nasıl bölündüğü ve kullanıldığı", "Karadeniz yamaçlarında fındık bahçeleri"]
          ], not: "Üçü de haritada ya da fotoğrafta gözlenebilir; bu yüzden sınavda görsel sorulara girer." }
      ]
    },
    {
      baslik: "Doğa kültürü şekillendirir",
      kisa: "Fiziki coğrafya ve eldeki kaynaklar kültürel pratikleri yerden yere farklılaştırır.",
      bloklar: [
        { tip: "grafik", baslik: "Yağış arttıkça çatılar dikleşir", xlabel: "Yıllık yağış", ylabel: "Çatı eğimi", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "az" }, { v: 5, label: "orta" }, { v: 8, label: "çok" }],
          yticks: [{ v: 2, label: "yatay" }, { v: 8, label: "dik" }],
          ogeler: [
            { id: "trend", tip: "cizgi", renk: 0, from: [1, 1.5], to: [9, 8.5], gizli: true },
            { id: "ic", tip: "nokta", x: 2, y: 2.4, etiket: "kurak bölge: düz dam", kilavuz: true, gizli: true },
            { id: "kara", tip: "nokta", x: 8, y: 7.6, etiket: "yağışlı bölge: dik çatı", kilavuz: true, gizli: true },
            { id: "yaz", tip: "yazi", x: 5, y: 9.4, metin: "Aynı ihtiyaç, farklı yerel çözüm", gizli: true }
          ],
          durumlar: [
            { metin: "İnsanlar evi bulundukları yere göre yapar. Soru şu: yağış ile çatı biçimi arasında nasıl bir ilişki var?" },
            { metin: "Kurak bölgede yağmur suyu hızla akıtılmak zorunda değildir; ==düz ya da az eğimli dam== yeterlidir.", goster: ["ic"] },
            { metin: "Çok yağış alan yerde su ve kar birikmesin diye ==dik çatı== yapılır.", goster: ["kara"] },
            { metin: "Genel eğilim bu. Kültürel pratikler, fiziki coğrafya ve eldeki kaynaklarla şekillenir; bu yüzden yerden yere değişir.", goster: ["trend", "yaz"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🌦️", baslik: "İklim", metin: "Giyim, mimari, tarım takvimi." },
            { ikon: "⛰️", baslik: "Yer şekilleri", metin: "Teras tarım, dağ köyü, kıyı balıkçılığı." },
            { ikon: "🪵", baslik: "Eldeki kaynaklar", metin: "Taş, ahşap, kerpiç gibi yerel yapı malzemesi ve yetişen ürünler." }
          ] }
      ]
    },
    {
      baslik: "Bakış açısı: *relativism* ve *ethnocentrism*",
      kisa: "*Relativism* bir kültürü kendi ölçüsüyle anlar; *ethnocentrism* kendi ölçüsüyle yargılar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔍", baslik: "*Cultural relativism* (kültürel görecelik)", maddeler: ["Bir kültürü önce kendi bağlamında anlamaya çalışmak", "Kendi kültürünü ölçüt almamak"] },
          sag: { ikon: "🏆", baslik: "*Ethnocentrism* (etnosentrizm)", maddeler: ["Başka kültürleri kendi kültürünün ölçüsüyle yargılamak", "Kendi kültürünü üstün saymak"] },
          oyun: [
            { metin: "\"Orada yemek elle yeniyormuş; ne kadar kaba!\"", cevap: "sag", neden: "Kendi sofra adabını ölçü alıp yargılıyor: *ethnocentrism*." },
            { metin: "\"Elle yemenin orada neden saygı işareti sayıldığını araştıralım.\"", cevap: "sol", neden: "Kültürü kendi bağlamında anlamaya çalışıyor: *relativism*." },
            { metin: "\"Bizim bayram kutlamamız dünyanın en doğru yolu.\"", cevap: "sag", neden: "Kendi kültürünü üstün sayıyor: *ethnocentrism*." },
            { metin: "Bir coğrafyacı, bir köyün arazi kullanımını o köyün inançlarını ve kaynaklarını dikkate alarak inceler.", cevap: "sol", neden: "Bağlamı gözeterek anlamaya çalışmak: *relativism*." }
          ] },
        { tip: "tuzak", metin: "*Relativism*, \"her şey doğrudur\" demek değildir.", yanlis: "*Cultural relativism* her uygulamayı onaylamaktır.", dogru: "*Relativism* bir analiz tutumudur: ==önce anlamak, sonra yargılamak==. *Ethnocentrism* ise anlamadan, kendi ölçüsünü tek ölçü sayar." },
        { tip: "ornek", baslik: "Misafirlikte ikram", durum: "Almanya'dan gelen bir öğrenci, Türkiye'de misafirlikte ev sahibinin ısrarla tabağına yemek koymasına şaşırıyor ve \"çok baskıcı\" diye düşünüyor. Bu tutum hangisi, nasıl değişirdi?",
          adimlar: ["Öğrenci, davranışı kendi alışkanlığına göre yorumlamış; ölçü kendi kültürü.", "Burada ısrar etmek ikram ve misafire değer vermek anlamına geliyor.", "Bağlamı öğrenip öyle yorumlasaydı bu *relativist* bir bakış olurdu."],
          sonuc: "Verilen tutum ==*ethnocentrism*==; bağlamı öğrenerek yorumlamak ==*cultural relativism*== olur." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Culture*: bir toplumun paylaştığı pratikler, teknolojiler, tutumlar ve davranışlar; öğrenilir ve aktarılır.",
            "Kültür yalnızca sanat ve folklor değildir; teknoloji ve gündelik davranış da kültürdür.",
            "*Culture trait* kültürün tek bir parçasıdır: yemek tercihi, mimari, arazi kullanımı.",
            "Fiziki coğrafya ve eldeki kaynaklar kültürel pratikleri yerden yere farklılaştırır (yağışlı yerde dik çatı gibi).",
            "*Cultural relativism*: kültürü kendi bağlamında anlamak.",
            "*Ethnocentrism*: başka kültürleri kendi ölçüne göre yargılamak, kendi kültürünü üstün saymak.",
            "Relativism, her şeyi onaylamak değildir; önce anlamak demektir.",
            "Bu üç fikir (kültür, özellik, bakış açısı) sonraki konularda hep geri gelir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir coğrafyacı, kıyı köyündeki balıkçı evlerinin neden kazıklar üzerinde yapıldığını incelerken önce köylülerin deniz seviyesi, geçim kaynağı ve inançlarını öğrenmeyi seçiyor. Bu yaklaşım hangisini yansıtır?",
      opts: ["*Ethnocentrism*", "*Cultural relativism*", "*Culture trait*'in yok sayılması", "Kültürün yalnızca inançlardan ibaret olduğu görüşü"],
      a: 1,
      why: "Bir kültürü kendi bağlamında anlamaya çalışmak *cultural relativism*'dir. En çekici yanlış şık A: *ethnocentrism* kendi ölçüsünü tek ölçü sayar, oysa coğrafyacı bağlamı soruyor." },
    { q: "Aşağıdakilerden hangisi tek başına bir *culture trait* örneğidir?",
      opts: ["Bir ülkenin tüm kültürü", "Bir toplumun paylaştığı pratikler, teknolojiler ve tutumlar bütünü", "Bir bölgede yapıların yerel taştan yapılması", "Bir yerin kültürel peyzajının tamamı"],
      a: 2,
      why: "*Culture trait* kültürün tek bir parçasıdır; mimari ve yapı malzemesi bunun örneğidir. A ve B tüm kültürü, D ise bütün peyzajı anlatır; bunlar tek bir özellik değildir." },
    { q: "Bir bölgede bol yağış nedeniyle çatılar diktir ve evler yerel ahşaptan yapılır. Bu örüntü, kültürel pratiklerin neye bağlı olarak değiştiğini en iyi gösterir?",
      opts: ["Fiziki coğrafya ve eldeki kaynaklara", "Yalnızca ulusal hükümet politikalarına", "Küresel iletişim teknolojilerine", "Dilin yayılma hızına"],
      a: 0,
      why: "Kültürel pratikler yerden yere fiziki coğrafya (yağış) ve kullanılabilir kaynaklara göre değişir. Politika ve iletişim kültürü etkileyebilir, ama bu senaryo doğrudan iklimi gösteriyor." },
    { q: "Bir turist, gittiği ülkede insanların selamlaşırken sarılmak yerine hafifçe eğilmesini \"soğuk ve mesafeli\" bulup kendi alışkanlığının daha samimi olduğunu söylüyor. Turistin tutumu için hangisi doğrudur?",
      opts: ["*Cultural relativism*; çünkü iki alışkanlığı karşılaştırıyor", "*Culture trait*; çünkü selamlaşma kültür değildir", "*Ethnocentrism*; çünkü kendi kültürünü ölçüt alıp yargılıyor", "*Cultural relativism*; çünkü kendi bakışını açıkça söylüyor"],
      a: 2,
      why: "Başka kültürü kendi ölçüsüyle ve kendi lehine yargılamak *ethnocentrism*'dir. A şıkkı en çekici yanlış: karşılaştırmak yetmez, *relativism* bağlamı anlamayı gerektirir." },
    { q: "Aşağıdaki tabloya göre hangisi söylenebilir?",
      fig: { type: "table", caption: "Üç bölgede ev yapımı", head: ["Bölge", "Yıllık yağış", "Yerel malzeme", "Çatı"], rows: [["A", "Az", "Kerpiç", "Düz dam"], ["B", "Çok", "Ahşap", "Dik çatı"], ["C", "Orta", "Taş", "Hafif eğimli"]] },
      opts: ["Mimari, yağıştan bağımsız bir kültürel özelliktir", "A bölgesinin kültürü B'den daha geridir", "Her bölgede aynı mimari kullanılması beklenir", "Yağış ve yerel malzeme gibi koşullar mimari özellikleri şekillendirir"],
      a: 3,
      why: "Tablo, yağış ve yerel malzemeyle çatı biçiminin ilişkili olduğunu gösterir; kültürel özellikler yerel koşullara uyum sağlar. B şıkkı *ethnocentric* bir yorumdur: bir bölgeyi başka bir bölgenin ölçüsüyle \"geri\" sayar." }
  ]
};
