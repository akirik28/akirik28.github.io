/* Kitpath not defteri · hg203 · Nüfusun Yapısı (Population Composition)
   Kaynak: AP HuG CED Topic 2.3 (PSO-2.E.1, 2.F.1). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg203",
  amac: "Bu konu bir nüfusun kimlerden oluştuğunu anlatıyor: yaş yapısı ve cinsiyet oranı. Nüfus piramidini okumayı, üç piramit türünü ve piramidin hangi mal ve hizmetlerin pazarını tahmin ettirdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Nüfus bileşimi",
      kisa: "Bileşim, nüfusun yaşa ve cinsiyete göre dağılımıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👥", terim: "Age structure", tr: "yaş yapısı", tanim: "Nüfusun yaş gruplarına dağılımı. Genellikle 0–14 (çocuk), 15–64 (çalışma çağı) ve 65+ (yaşlı) olarak ayrılır.", ornek: "Üniversite kentinde 18–24 yaş grubu geniştir." },
            { ikon: "⚖️", terim: "Sex ratio", tr: "cinsiyet oranı", tanim: "Her 100 kadına düşen erkek sayısı.", ornek: "Oran 104 ise 100 kadına 104 erkek düşer." },
            { ikon: "🎂", terim: "Cohort", tr: "yaş kuşağı", tanim: "Aynı yaş aralığındaki (aynı yıllarda doğmuş) insanlar; piramitte bir çubuk bir *cohort*'tur.", ornek: "15–19 yaş grubu." },
            { ikon: "📍", terim: "Median age", tr: "medyan yaş", tanim: "Nüfusu ikiye bölen yaş: yarısı bundan genç, yarısı bundan yaşlıdır.", ornek: "Medyan yaş 20 ise nüfusun yarısı 20'den gençtir." }
          ] },
        { tip: "not", metin: "Yaş yapısı ve cinsiyet oranı bölgeden bölgeye değişir ve haritalanabilir. Ülkeler arasında (Japonya yaşlı, Nijer genç) ve şehir içinde de fark vardır: emekli kasabasında 65+ geniş, öğrenci mahallesinde 18–24 geniştir. Soruda ==ölçeği== oku." }
      ]
    },
    {
      baslik: "Cinsiyet oranı",
      kisa: "Oran 100 kadına düşen erkek sayısıdır; 100'ün üstü erkek fazlası demektir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Erkek sayısı" }, "÷",
            { t: "Kadın sayısı" }, "×",
            { t: "100" }, "=",
            { t: "Cinsiyet oranı", alt: "100 kadına düşen erkek" }
          ], aciklama: "100 = eşit; 100'ün üstü = erkek fazlası; 100'ün altı = kadın fazlası." },
        { tip: "ornek", baslik: "İki ilçe", durum: "A ilçesinde 52.000 erkek ve 50.000 kadın var. B ilçesi bir emekli kasabası: 1.800 erkek, 2.400 kadın. İkisinin cinsiyet oranını bul.",
          adimlar: ["A: 52.000 ÷ 50.000 = 1,04; × 100 = 104.", "B: 1.800 ÷ 2.400 = 0,75; × 100 = 75."],
          sonuc: "A'da her 100 kadına ==104 erkek==, B'de ==75 erkek== düşer. B'de oran düşüktür; çünkü yaşlı nüfusta kadınlar daha çok." },
        { tip: "liste", maddeler: [
            { ikon: "👶", baslik: "Doğumda", metin: "Her 100 kız bebeğe yaklaşık 105 erkek bebek doğar." },
            { ikon: "👵", baslik: "İleri yaşlarda", metin: "Kadınlar ortalama daha uzun yaşadığı için yaşlı grupta kadın fazlası görülür." },
            { ikon: "🧳", baslik: "Göç", metin: "Erkek işçi göçü alan ülkelerde (BAE, Katar) erkek oranı çok yüksektir; göç veren bölgede ise düşebilir." },
            { ikon: "⚔️", baslik: "Savaş ve seçici doğum", metin: "Savaşta genç erkek kayıpları oranı düşürür; erkek çocuk tercihi olan bazı bölgelerde (Çin, Hindistan) doğumda erkek sayısı artabilir." }
          ] }
      ]
    },
    {
      baslik: "Yaş yapısı: üç büyük grup",
      kisa: "Çocuk, çalışma çağı ve yaşlı grupların payı bir ülkenin ihtiyaçlarını belirler.",
      bloklar: [
        { tip: "tablo", baslik: "Üç yaş grubu", head: ["Yaş grubu", "Genel durum", "Neye ihtiyaç duyar?"], rows: [
            ["0–14", "Çocuk; henüz üretmez", "Okul, çocuk sağlığı, çocuk ürünleri"],
            ["15–64", "Çalışma çağı; üretir, vergi öder", "İş, konut, ulaşım"],
            ["65+", "Yaşlı; çoğu emekli", "Sağlık, bakım, emeklilik"]
          ], not: "Çocuk ve yaşlı gruplar çalışma çağına \"bağımlı\" sayılır; bağımlılık oranı Konu 2.9'da." },
        { tip: "ikili", sol: { ikon: "🧒", baslik: "Genç yapı (0–14 geniş)", maddeler: ["Medyan yaş düşük", "Okul ve iş ihtiyacı hızla artar"] },
          sag: { ikon: "🧓", baslik: "Yaşlı yapı (65+ geniş)", maddeler: ["Medyan yaş yüksek", "Sağlık ve emeklilik harcaması büyür"] },
          oyun: [
            { metin: "Her yıl yeni ilkokullar ve öğretmenler gerekiyor.", cevap: "sol", neden: "Çok sayıda çocuk: genç yapı." },
            { metin: "Bakım evleri ve emeklilik sistemi üzerindeki baskı artıyor.", cevap: "sag", neden: "Yaşlı sayısı artıyor." },
            { metin: "Medyan yaş 17.", cevap: "sol", neden: "Çok düşük medyan yaş genç yapıdır." },
            { metin: "Çalışma çağındaki her kişiye düşen yaşlı sayısı artıyor.", cevap: "sag", neden: "Yaşlanan nüfusun işareti." }
          ] }
      ]
    },
    {
      baslik: "Nüfus piramidini okumak",
      kisa: "Piramit yaş ve cinsiyet gruplarını yan yana çubuklarla gösterir; şekli doğurganlığı ve ömrü anlatır.",
      bloklar: [
        { tip: "grafik", baslik: "Üç piramit türü (şematik)", xlabel: "← Erkek | Kadın →  Nüfus payı (%)", ylabel: "Yaş grubu", xmax: 10, ymax: 11,
          xticks: [{ v: 1, label: "20" }, { v: 3, label: "10" }, { v: 5, label: "0" }, { v: 7, label: "10" }, { v: 9, label: "20" }],
          yticks: [{ v: 1, label: "0–14" }, { v: 3, label: "15–29" }, { v: 5, label: "30–44" }, { v: 7, label: "45–59" }, { v: 9, label: "60+" }],
          ogeler: [
            { id: "m0", tip: "alan", renk: 2, noktalar: [[5, 0.25], [5, 0.25], [5, 1.75], [5, 1.75]] },
            { id: "f0", tip: "alan", renk: 3, noktalar: [[5, 0.25], [5, 0.25], [5, 1.75], [5, 1.75]] },
            { id: "m1", tip: "alan", renk: 2, noktalar: [[5, 2.25], [5, 2.25], [5, 3.75], [5, 3.75]] },
            { id: "f1", tip: "alan", renk: 3, noktalar: [[5, 2.25], [5, 2.25], [5, 3.75], [5, 3.75]] },
            { id: "m2", tip: "alan", renk: 2, noktalar: [[5, 4.25], [5, 4.25], [5, 5.75], [5, 5.75]] },
            { id: "f2", tip: "alan", renk: 3, noktalar: [[5, 4.25], [5, 4.25], [5, 5.75], [5, 5.75]] },
            { id: "m3", tip: "alan", renk: 2, noktalar: [[5, 6.25], [5, 6.25], [5, 7.75], [5, 7.75]] },
            { id: "f3", tip: "alan", renk: 3, noktalar: [[5, 6.25], [5, 6.25], [5, 7.75], [5, 7.75]] },
            { id: "m4", tip: "alan", renk: 2, noktalar: [[5, 8.25], [5, 8.25], [5, 9.75], [5, 9.75]] },
            { id: "f4", tip: "alan", renk: 3, noktalar: [[5, 8.25], [5, 8.25], [5, 9.75], [5, 9.75]] },
            { id: "te", tip: "yazi", x: 1.5, y: 10.4, metin: "Erkek" },
            { id: "tk", tip: "yazi", x: 8.5, y: 10.4, metin: "Kadın" },
            { id: "ad", tip: "yazi", x: 5, y: 10.4, metin: "Nüfus piramidi" }
          ],
          durumlar: [
            { metin: "Boş piramit: her çubuk bir yaş grubudur; sol erkek, sağ kadın. Çubuk genişliği o grubun nüfus payıdır; alttan üste yaş artar." },
            { metin: "==Genişleyen piramit:== taban çok geniş, tepe dar. Çok doğum ve kısa ömür; nüfus hızla artıyor.", set: { m0: { noktalar: [[1.4, 0.25], [5, 0.25], [5, 1.75], [1.4, 1.75]] }, m1: { noktalar: [[2.2, 2.25], [5, 2.25], [5, 3.75], [2.2, 3.75]] }, m2: { noktalar: [[3.1, 4.25], [5, 4.25], [5, 5.75], [3.1, 5.75]] }, m3: { noktalar: [[3.9, 6.25], [5, 6.25], [5, 7.75], [3.9, 7.75]] }, m4: { noktalar: [[4.4, 8.25], [5, 8.25], [5, 9.75], [4.4, 9.75]] }, f0: { noktalar: [[5, 0.25], [8.6, 0.25], [8.6, 1.75], [5, 1.75]] }, f1: { noktalar: [[5, 2.25], [7.8, 2.25], [7.8, 3.75], [5, 3.75]] }, f2: { noktalar: [[5, 4.25], [6.9, 4.25], [6.9, 5.75], [5, 5.75]] }, f3: { noktalar: [[5, 6.25], [6.1, 6.25], [6.1, 7.75], [5, 7.75]] }, f4: { noktalar: [[5, 8.25], [5.6, 8.25], [5.6, 9.75], [5, 9.75]] }, ad: { metin: "Genişleyen (expanding)" } } },
            { metin: "==Durağan piramit:== neredeyse dik kenarlar. Doğum ve ölüm düşük ve dengeli; büyüme sıfıra yakın.", set: { m0: { noktalar: [[3.1, 0.25], [5, 0.25], [5, 1.75], [3.1, 1.75]] }, m1: { noktalar: [[3, 2.25], [5, 2.25], [5, 3.75], [3, 3.75]] }, m2: { noktalar: [[2.9, 4.25], [5, 4.25], [5, 5.75], [2.9, 5.75]] }, m3: { noktalar: [[2.9, 6.25], [5, 6.25], [5, 7.75], [2.9, 7.75]] }, m4: { noktalar: [[3.1, 8.25], [5, 8.25], [5, 9.75], [3.1, 9.75]] }, f0: { noktalar: [[5, 0.25], [6.9, 0.25], [6.9, 1.75], [5, 1.75]] }, f1: { noktalar: [[5, 2.25], [7, 2.25], [7, 3.75], [5, 3.75]] }, f2: { noktalar: [[5, 4.25], [7.1, 4.25], [7.1, 5.75], [5, 5.75]] }, f3: { noktalar: [[5, 6.25], [7.1, 6.25], [7.1, 7.75], [5, 7.75]] }, f4: { noktalar: [[5, 8.25], [6.9, 8.25], [6.9, 9.75], [5, 9.75]] }, ad: { metin: "Durağan (stationary)" } } },
            { metin: "==Daralan piramit:== dar taban, geniş üst. Doğum düşük; nüfus yaşlanıyor ve ilerde azalabilir.", set: { m0: { noktalar: [[3.8, 0.25], [5, 0.25], [5, 1.75], [3.8, 1.75]] }, m1: { noktalar: [[3.3, 2.25], [5, 2.25], [5, 3.75], [3.3, 3.75]] }, m2: { noktalar: [[2.9, 4.25], [5, 4.25], [5, 5.75], [2.9, 5.75]] }, m3: { noktalar: [[2.6, 6.25], [5, 6.25], [5, 7.75], [2.6, 7.75]] }, m4: { noktalar: [[2.4, 8.25], [5, 8.25], [5, 9.75], [2.4, 9.75]] }, f0: { noktalar: [[5, 0.25], [6.2, 0.25], [6.2, 1.75], [5, 1.75]] }, f1: { noktalar: [[5, 2.25], [6.7, 2.25], [6.7, 3.75], [5, 3.75]] }, f2: { noktalar: [[5, 4.25], [7.1, 4.25], [7.1, 5.75], [5, 5.75]] }, f3: { noktalar: [[5, 6.25], [7.4, 6.25], [7.4, 7.75], [5, 7.75]] }, f4: { noktalar: [[5, 8.25], [7.6, 8.25], [7.6, 9.75], [5, 9.75]] }, ad: { metin: "Daralan (declining)" } } },
            { metin: "Dikkat: yaşlı grupta kadın çubuğu erkekten uzun, çünkü ==kadınlar ortalama daha uzun yaşar== (cinsiyet oranı 100'ün altına iner).", set: { m4: { noktalar: [[2.8, 8.25], [5, 8.25], [5, 9.75], [2.8, 9.75]] }, f4: { noktalar: [[5, 8.25], [8, 8.25], [8, 9.75], [5, 9.75]] } } }
          ] },
        { tip: "adimlar", baslik: "Piramidi üç adımda oku", adimlar: [
            { baslik: "Tabana bak", metin: "Taban geniş mi? Çok sayıda çocuk, yani yüksek doğurganlık demek." },
            { baslik: "Kenar eğimine bak", metin: "Kenarlar hızla daralıyorsa insanlar genç yaşta ölüyor (ömür kısa); dik kalıyorsa çoğu kişi yaşlanıyor." },
            { baslik: "Tepeye bak", metin: "Üst gruplar geniş mi? Yaşlı nüfus çok ise sağlık ve emeklilik baskısı büyür." }
          ] }
      ]
    },
    {
      baslik: "Üç piramit türünü ayırt et",
      kisa: "Genişleyen, durağan ve daralan piramitler doğum ve ölüm düzeyine göre ayrılır.",
      bloklar: [
        { tip: "tablo", baslik: "Piramit türleri", head: ["Tür", "Şekil", "Doğum ve ömür", "Nüfus", "Örnek"], rows: [
            ["*Expanding* (genişleyen)", "Geniş taban, üçgen", "Çok doğum, kısa ömür", "Hızla artar", "Nijer, Mali"],
            ["*Stationary* (durağan)", "Dik kenarlı, dikdörtgene yakın", "Az doğum, uzun ömür", "Neredeyse sabit", "ABD gibi gelişmiş ülkeler"],
            ["*Declining* (daralan)", "Dar taban, şişkin üst", "Çok az doğum, uzun ömür", "Azalır", "Japonya, İtalya, Güney Kore"]
          ], not: "Üç şekil, Konu 2.5'teki demografik dönüşüm evreleriyle örtüşür: genişleyen = erken evreler, durağan = 4. evre, daralan = 5. evre." },
        { tip: "ikili", sol: { ikon: "🔺", baslik: "*Expanding* piramit", maddeler: ["Taban çok geniş", "Genç yapı; okul ve iş ihtiyacı büyür"] },
          sag: { ikon: "🔻", baslik: "*Declining* piramit", maddeler: ["Taban üst kuşaklardan dar", "Yaşlı yapı; çalışan sayısı azalabilir"] },
          oyun: [
            { metin: "Taban çok geniş, tepe çok dar.", cevap: "sol", neden: "Yüksek doğum, kısa ömür." },
            { metin: "Alt kuşaklar üstlerinden küçük: gelecekte işgücü azalacak.", cevap: "sag", neden: "Düşük doğum, yaşlanan nüfus." },
            { metin: "Medyan yaş düşük ve okul ihtiyacı hızla artıyor.", cevap: "sol", neden: "Çok çocuk: genişleyen." },
            { metin: "Emeklilik ve bakım giderleri büyüyor, doğum sayısı yenileme düzeyinin altında.", cevap: "sag", neden: "Yaşlanan nüfus: daralan." }
          ] },
        { tip: "tuzak", metin: "Piramidin şeklini nüfusun büyüklüğü sanmak.", yanlis: "Geniş tabanlı piramit, ülkenin nüfusunun çok büyük olduğunu gösterir.", dogru: "Çubuklar çoğunlukla ==yüzde== olarak çizilir; piramit nüfusun ==yaş yapısını== anlatır, büyüklüğünü değil. Küçük bir ülke de genişleyen piramide sahip olabilir. Büyüklük için eksendeki sayılara bak." }
      ]
    },
    {
      baslik: "Piramit pazarı tahmin ettirir",
      kisa: "Hangi yaş grubu büyüyorsa o grubun mal ve hizmetlerine talep artar.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🍼", baslik: "0–14 yaş geniş", metin: "Bebek ürünleri, okul, öğretmen, çocuk sağlığı, oyuncak." },
            { ikon: "🎓", baslik: "15–29 yaş geniş", metin: "Üniversite, yurt, telefon, konser, ilk iş ve kiralık ev." },
            { ikon: "🏠", baslik: "30–59 yaş geniş", metin: "Konut, otomobil, kredi, iş yeri ve çocuk eğitimi." },
            { ikon: "🩺", baslik: "60+ geniş", metin: "Sağlık, ilaç, bakım evi, emeklilik, erişilebilir ulaşım." }
          ] },
        { tip: "ornek", baslik: "Okul ihtiyacını tahmin et", durum: "Bir ilçede 0–4 yaş grubu 10.000, 5–9 yaş grubu 8.000 kişi. Göç ve ölümü ihmal edersek 5 yıl sonra ilkokul çağındaki (5–9) çocuk sayısı kaç olur ve okullar için ne anlama gelir?",
          adimlar: ["Bugünkü 0–4 grubu 5 yıl sonra 5–9 grubuna kayar: 10.000 çocuk.", "Bugünkü 5–9 grubu 8.000 kişi. Artış: 10.000 ÷ 8.000 = 1,25, yani %25 fazla."],
          sonuc: "5 yıl sonra ilkokul çağı grubu ==%25 büyür==; ilçe okul, derslik ve öğretmen sayısını artırmalıdır. Piramit bugünün tabanından yarının talebini okutur." }
      ]
    },
    {
      baslik: "Piramitteki şişkinlik ve çentikler",
      kisa: "Doğum patlaması, savaş, salgın ve göç piramitte iz bırakır.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "📈", baslik: "Doğum patlaması (*baby boom*)", metin: "Savaş sonrası doğum artışı (ABD 1946–1964) piramitte bir şişkinlik yaratır; bu kuşak yaşlandıkça şişkinlik yukarı kayar." },
            { ikon: "💥", baslik: "Savaş ve salgın", metin: "Genç yetişkin ölümleri bir çentik açar; savaş sonrasında doğumların düşmesi tabanda ikinci bir çentik doğurur." },
            { ikon: "🧳", baslik: "Göç", metin: "Göç alan yerlerde genç yetişkin çubukları şişer; göç veren yerlerde daralır." },
            { ikon: "📉", baslik: "Kriz ve politikalar", metin: "Ekonomik kriz ya da doğum politikaları tabanı daraltabilir ya da genişletebilir." }
          ] },
        { tip: "tuzak", metin: "Piramidi yalnızca bugünün fotoğrafı sanmak.", yanlis: "Piramit sadece şu anki yaş dağılımını gösterir.", dogru: "Kuşaklar yıllar içinde ==yukarı kayar==: bugünkü taban 20–30 yıl sonra çalışma çağına, daha sonra yaşlılığa gelir. Bu yüzden piramit, nüfus artışını ve azalışını ve gelecekteki pazarı ==tahmin ettirir==." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Nüfus bileşimi yaşa ve cinsiyete göre dağılımdır: *age structure*, *sex ratio*, *median age*; haritalanabilir ve ölçeğe göre değişir.",
            "*Sex ratio* = erkek ÷ kadın × 100 (ör. 52.000 ÷ 50.000 × 100 = 104). Doğumda erkek fazla, yaşlılıkta kadın fazladır.",
            "Göç (erkek işçi göçü), savaş ve seçici doğum cinsiyet oranını değiştirebilir.",
            "Nüfus piramidi yaş-cinsiyet gruplarını gösterir: taban doğurganlığı, kenar eğimi ömrü, tepe yaşlıları anlatır.",
            "*Expanding*: geniş taban, hızlı artış (Nijer). *Stationary*: dik kenar, sabit nüfus. *Declining*: dar taban, azalma (Japonya).",
            "Piramit şekli büyüklüğü değil yaş yapısını gösterir; çubuklar çoğunlukla yüzdedir.",
            "Piramit pazarı tahmin ettirir: çocuk grubu geniş ise okul, yaşlı grup geniş ise sağlık ve bakım talebi artar (okul örneği: %25 artış).",
            "*Baby boom*, savaş, salgın ve göç piramitte şişkinlik ve çentik bırakır; kuşaklar zamanla yukarı kayar."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir ilçede 45.000 erkek ve 60.000 kadın yaşıyor. Cinsiyet oranı (*sex ratio*) kaçtır?",
      opts: ["133; her 100 kadına 133 erkek düşer", "75; her 100 kadına 75 erkek düşer", "43; her 100 kişiden 43'ü erkektir", "25; her 100 kadına 25 erkek düşer"],
      a: 1,
      why: "Oran = 45.000 ÷ 60.000 × 100 = 75. A şıkkı en çekici yanlış: kadın ÷ erkek yapılmış (60 ÷ 45 × 100 ≈ 133); *sex ratio* her zaman erkek sayısını kadın sayısına böler." },
    { q: "Tabloya göre hangi yorum doğrudur?",
      fig: { type: "table", caption: "Yaş gruplarının payı (%)", head: ["Ülke", "0–14", "15–64", "65+"], rows: [["X", 42, 55, 3], ["Y", 13, 62, 25]] },
      opts: ["X'in piramidi daralan türdedir, Y'nin piramidi ise genişleyendir", "Y'nin nüfusu X'ten daha hızlı artmaktadır", "İki ülkede de çalışma çağı nüfusunun payı aynıdır", "X'te yakın gelecekte okul ve ilk iş ihtiyacı, Y'de sağlık ve bakım hizmetleri talebi öne çıkar"],
      a: 3,
      why: "X'te çocuk payı çok yüksek (42): okul ve ilk yıllarda iş ihtiyacı. Y'de yaşlı payı yüksek (25): sağlık ve bakım talebi. A şıkkı en çekici yanlış: ikisini ters eşleştirir; geniş çocuk payı genişleyen piramit demektir (X)." },
    { q: "Bir ülkenin piramidinde 25–39 yaş grubunda erkek çubukları kadın çubuklarından belirgin biçimde uzundur; diğer yaş gruplarında fark küçüktür. Bu durumun en olası nedeni hangisidir?",
      opts: ["Bu yaş grubuna yönelik yoğun erkek işçi göçü", "Erkeklerin kadınlardan daha uzun yaşaması", "Savaşta genç erkeklerin ölmesi", "Doğumda kız bebeklerin daha fazla doğması"],
      a: 0,
      why: "Yalnızca çalışma çağındaki yaş grubunda erkek fazlalığı, erkek işçi göçüne işaret eder (ör. Körfez ülkeleri). B şıkkı en çekici yanlış: erkekler genellikle daha kısa yaşar ve ileri yaşlarda kadın fazlası görülür. C'de ise erkek sayısı azalırdı." },
    { q: "Grafikteki ilçenin yaş yapısına göre yerel yönetim hangi alana öncelik vermelidir?",
      fig: { type: "bar", cats: ["0–14", "15–64", "65+"], series: [{ name: "Z ilçesi (%)", values: [8, 57, 35] }], ylabel: "Yüzde" },
      opts: ["Yeni ilkokullar ve çocuk parkları", "Üniversite yurtları ve gençlik merkezleri", "Yaşlı bakımı, sağlık hizmetleri ve erişilebilir ulaşım", "Bebek ve çocuk ürünleri için alışveriş merkezleri"],
      a: 2,
      why: "Nüfusun %35'i 65 yaş üstü; sağlık, bakım ve ulaşım talebi öne çıkar. Çocuk payı yalnızca %8'dir. A şıkkı en çekici yanlış: her ilçe için akla gelen genel öncelik, ama bu ilçenin yaş yapısına uymaz." },
    { q: "Bir ülkenin nüfus piramidinde taban, üstündeki yaş gruplarından daha dar; yaşlı gruplar ise geniştir. Hangisi doğrudur?",
      opts: ["Doğum hızı düşüktür; nüfus yaşlanmaktadır ve gelecekte çalışan sayısı azalabilir", "Nüfus hızla artmaktadır ve 15 yıl içinde okul ihtiyacı ikiye katlanacaktır", "Ülke genişleyen piramide sahiptir ve medyan yaş çok düşüktür", "Bebek ölümleri çok yüksektir, bu yüzden taban dardır"],
      a: 0,
      why: "Dar taban az doğum, geniş üst yaşlı nüfus demektir: daralan (*declining*) piramit. D şıkkı en çekici yanlış: yüksek bebek ölümü de tabanı daraltabilir ama bu durumda kenarlar da hızla daralırdı; burada geniş yaşlı gruplar uzun ömrü gösterir." }
  ]
};
