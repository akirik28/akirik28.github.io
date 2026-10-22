/* Kitora not defteri · bi101 · 1.1 Canlılar ve Enerji, ATP
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Biology, Tema 1) + MEB Maarif BİY.10 standart içeriği. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bi101",
  amac: "Bu konu canlıların enerjiyi nereden bulduğunu anlatıyor: ototrof ve heterotrof beslenme, ardından hücrenin enerji parası *ATP*. ATP'nin yapısını, nasıl yapılıp yıkıldığını (*phosphorylation*, *dephosphorylation*) öğreneceksin.",
  bolumler: [
    {
      baslik: "Canlılar neden enerjiye ihtiyaç duyar?",
      kisa: "Büyüme, hareket ve onarım enerji ister; enerji dönüşür, yoktan var olmaz.",
      bloklar: [
        { tip: "not", metin: "Hücre hiç durmadan iş yapar: büyür, bölünür, madde taşır, kas kasılır, protein yapar. Bu işlerin hepsi ==enerji== ister. Enerji yoktan var edilemez; bir biçimden başka bir biçime ==dönüşür==." },
        { tip: "adimlar", baslik: "Enerjinin canlıya yolculuğu", adimlar: [
            { baslik: "Kaynak", metin: "Çoğu besin zincirinde güneş ışığı. Bazı bakterilerde inorganik maddelerin tepkimesi." },
            { baslik: "Besin molekülü", metin: "Enerji glikoz gibi organik moleküllerin bağlarında depolanır." },
            { baslik: "ATP", metin: "Hücre besindeki enerjiyi hemen kullanamaz; önce *ATP*'ye aktarır." },
            { baslik: "İş", metin: "ATP'nin enerjisi kas kasılmasında, taşımada ve sentezde harcanır." }
          ] },
        { tip: "not", metin: "Sınavda böyle yaz: *Living things need energy for growth, movement and repair.* ve *Energy is not created or destroyed; it is converted from one form to another.*" }
      ]
    },
    {
      baslik: "*Autotroph* ve *heterotroph*",
      kisa: "Ototrof besinini kendi yapar; heterotrof hazır organik madde tüketir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌱", baslik: "*Autotroph* (ototrof)", maddeler: ["İnorganik maddelerden (CO₂, H₂O) organik madde yapar", "Besinini kendi üretir", "Örnek: bitki, alg, siyanobakteri"] },
          sag: { ikon: "🦊", baslik: "*Heterotroph* (heterotrof)", maddeler: ["Hazır organik madde alır", "Besinini üretemez", "Örnek: hayvan, mantar, çoğu bakteri"] },
          oyun: [
            { metin: "Kantin bahçesindeki domates bitkisi.", cevap: "sol", neden: "CO₂ ve sudan organik madde yapar: ototrof." },
            { metin: "Okul bahçesinde ekmek kırıntısı yiyen serçe.", cevap: "sag", neden: "Hazır organik madde tüketir: heterotrof." },
            { metin: "Ekmeğin üstünde küflenen mantar.", cevap: "sag", neden: "Mantar klorofil taşımaz, organik maddeyi ayrıştırır: heterotrof." },
            { metin: "Göldeki yeşil alg.", cevap: "sol", neden: "Işıkla kendi besinini yapar: ototrof." }
          ] },
        { tip: "not", metin: "Sınavda böyle yaz: *Autotrophs make their own organic molecules from inorganic substances, whereas heterotrophs obtain organic molecules from other organisms.*" }
      ]
    },
    {
      baslik: "Fotoototrof ve kemoototrof",
      kisa: "İkisi de besin yapar; fark enerji kaynağı: ışık mı, kimyasal tepkime mi.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "☀️", baslik: "*Photoautotroph* (fotoototrof)", maddeler: ["Enerji kaynağı: ==ışık==", "Örnek: bitki, alg, siyanobakteri, mor sülfür bakterisi", "Süreç: *photosynthesis*"] },
          sag: { ikon: "⚗️", baslik: "*Chemoautotroph* (kemoototrof)", maddeler: ["Enerji kaynağı: ==inorganik maddelerin oksidasyonu==", "Örnek: nitrifikasyon, demir ve kükürt bakterileri", "Süreç: *chemosynthesis*"] },
          oyun: [
            { metin: "Okyanus dibinde, güneş ışığı olmayan bacada H₂S yükseltgeyerek besin yapan bakteri.", cevap: "sag", neden: "Enerji ışıktan değil, inorganik maddenin yükseltgenmesinden gelir: kemoototrof." },
            { metin: "Kloroplastlarıyla CO₂'yi şekere çeviren yaprak hücresi.", cevap: "sol", neden: "Işık enerjisi kullanır: fotoototrof." },
            { metin: "Topraktaki amonyağı (NH₃) nitrite çevirerek enerji sağlayan bakteri.", cevap: "sag", neden: "İnorganik madde yükseltgeniyor: kemoototrof." },
            { metin: "Pigmenti sayesinde ışıktan yararlanan siyanobakteri.", cevap: "sol", neden: "Bakteri olsa da enerjisi ışıktır: fotoototrof." }
          ] },
        { tip: "tuzak", metin: "“Ototrof” demek “bitki” demek değildir. Siyanobakteriler ve algler de ototroftur. Kemoototroflar ise hiç ışık kullanmaz.", yanlis: "Bütün ototroflar fotosentez yapar.", dogru: "Ototrof, besinini kendi yapan canlıdır. Enerjisi ışıksa fotoototrof, kimyasalsa kemoototroftur." },
        { tip: "not", metin: "Sınavda böyle yaz: *Photoautotrophs use light energy, but chemoautotrophs use the energy released by oxidizing inorganic substances.*" }
      ]
    },
    {
      baslik: "Heterotrof türleri",
      kisa: "Heterotroflar tüketici, ayrıştırıcı ya da parazit olarak beslenir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🐄", terim: "Consumer", tr: "tüketici (holozoik beslenen)", tanim: "Besini bütün olarak alır, vücudunda sindirir. Otçul, etçil ve her şeyi yiyen olabilir.", ornek: "Otlayan inek, balık yiyen martı." },
            { ikon: "🍄", terim: "Decomposer (saprophyte)", tr: "ayrıştırıcı", tanim: "Ölü organik maddeyi dışarıya salgıladığı enzimlerle parçalar ve oluşan küçük molekülleri emer.", ornek: "Ekmek küfü, bazı bakteriler." },
            { ikon: "🪱", terim: "Parasite", tr: "asalak", tanim: "Canlı bir konağın içinde ya da üstünde yaşar, besinini ondan alır ve konağa zarar verir.", ornek: "Bağırsak solucanı, bit." },
            { ikon: "🌿", terim: "Mixotroph", tr: "karma beslenen", tanim: "Hem fotosentez yapabilir hem hazır organik madde alabilir. Işık yoksa heterotrof gibi beslenir.", ornek: "*Euglena* (öglena)." }
          ] },
        { tip: "tuzak", metin: "Mantarlar ve çoğu bakteri bitki gibi görünmez ya da toprakta yaşar diye ototrof sanılır. Oysa klorofilleri yoktur.", yanlis: "Heterotrof demek hayvan demektir.", dogru: "Hayvanlar, mantarlar ve çoğu bakteri heterotroftur. Ayrıştırıcılar da parazitler de heterotrofa dahildir." },
        { tip: "not", metin: "Sınavda böyle yaz: *Decomposers feed on dead organic matter, whereas parasites feed on a living host and harm it.*" }
      ]
    },
    {
      baslik: "ATP'nin yapısı",
      kisa: "ATP: adenin, riboz ve üç fosfattan oluşan enerji taşıyıcıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Adenin", alt: "azotlu organik baz" }, "+",
            { t: "Riboz", alt: "5 karbonlu şeker" }, "+",
            { t: "3 fosfat", alt: "P–P–P" }, "=",
            { t: "*ATP*", alt: "adenozin trifosfat" }
          ], aciklama: "Adenin + riboz = adenozin. Üç fosfat zincir gibi sıralanır; son iki bağ yüksek enerjilidir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔋", terim: "ATP", tr: "adenozin trifosfat", tanim: "Üç fosfatlı enerji taşıyıcı. ==Enerji fosfatlar arasındaki bağlarda== bulunur, adeninde değil.", ornek: "Kasın bir kez kasılması için ATP harcanır." },
            { ikon: "🪫", terim: "ADP", tr: "adenozin difosfat", tanim: "İki fosfatlı, enerjisi azalmış hâl. ATP'nin bir fosfat vermesiyle oluşur.", ornek: "Boşalmış pil gibi, tekrar şarj edilebilir." }
          ] },
        { tip: "tuzak", metin: "ATP uzun süreli depo değildir; hücrede çok az bulunur ve saniyeler içinde kullanılıp yenilenir. Uzun süreli depo yağ ve nişasta ya da glikojendir.", yanlis: "ATP, hücrenin enerji deposudur.", dogru: "ATP, enerjinin ==kısa süreli taşıyıcısı== yani hücrenin enerji parasıdır. Asıl enerji kaynağı besindir." },
        { tip: "not", metin: "Sınavda böyle yaz: *ATP consists of adenine, ribose and three phosphate groups; the energy is stored in the bonds between the phosphate groups.*" }
      ]
    },
    {
      baslik: "Fosforilasyon ve defosforilasyon",
      kisa: "ATP yapımı enerji ister; ATP yıkımı enerji verir.",
      bloklar: [
        { tip: "grafik", baslik: "ATP döngüsü: enerji basamağı", xlabel: "Tepkime", ylabel: "Enerji", xmax: 10, ymax: 10,
          ogeler: [
            { id: "adp", tip: "cizgi", renk: 1, from: [0.5, 3], to: [5, 3], etiket: "ADP + Pᵢ" },
            { id: "atp", tip: "cizgi", renk: 0, from: [0.5, 6.5], to: [5, 6.5], etiket: "ATP + H₂O" },
            { id: "fos", tip: "ok", renk: 3, from: [2, 3.3], to: [2, 6.2], gizli: true },
            { id: "fosy", tip: "yazi", x: 2.2, y: 4.7, metin: "Enerji girer", hiza: "start", gizli: true },
            { id: "def", tip: "ok", renk: 2, from: [4, 6.2], to: [4, 3.3], gizli: true },
            { id: "defy", tip: "yazi", x: 4.2, y: 4.7, metin: "Enerji çıkar", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "ADP + Pᵢ düşük enerjili, ATP + H₂O yüksek enerjili durumdur." },
            { metin: "==*Phosphorylation* (fosforilasyon)==: ADP'ye bir fosfat eklenir ve ATP oluşur. Enerji gerekir (*endergonic*); yaklaşık 7,3 kcal/mol depolanır. Su çıkar (*dehydration synthesis*).", goster: ["fos", "fosy"] },
            { metin: "==*Dephosphorylation* (defosforilasyon)==: ATP suyla parçalanır, son fosfat ayrılır (*hydrolysis*). Enerji açığa çıkar (*exergonic*) ve hücrenin işine harcanır.", goster: ["def", "defy"], gizle: ["fos", "fosy"] },
            { metin: "Sınavda böyle yaz: *The graph shows that ATP has more energy than ADP + Pi, so energy is released when ATP is hydrolyzed.*", goster: ["def", "defy"] }
          ] },
        { tip: "tablo", head: ["", "*Phosphorylation*", "*Dephosphorylation*"], rows: [
            ["Tepkime", "ADP + Pᵢ + enerji → ATP + H₂O", "ATP + H₂O → ADP + Pᵢ + enerji"],
            ["Enerji", "Alınır (*endergonic*)", "Verilir (*exergonic*)"],
            ["Tür", "*Dehydration synthesis* (su çıkar)", "*Hydrolysis* (su girer)"],
            ["Sonuç", "ATP yapılır", "ATP yıkılır"]
          ], vurgu: 1, not: "Sınavda böyle yaz: *Phosphorylation is an endergonic reaction because energy is needed to attach a phosphate group to ADP.*" },
        { tip: "tuzak", metin: "Fosforilasyon–defosforilasyon karışıklığı çok yapılır. ATP'nin enerji vermesi ATP'nin ==yıkılması== demektir.", yanlis: "Defosforilasyonda ATP oluşur.", dogru: "Defosforilasyonda ATP yıkılır (ADP + Pᵢ) ve enerji açığa çıkar. ATP'nin oluşması fosforilasyondur." }
      ]
    },
    {
      baslik: "ATP, anabolizma ve katabolizma",
      kisa: "Katabolizma enerji verir, ATP yapımına bağlanır; anabolizma ATP harcar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧱", baslik: "*Anabolism* (anabolizma)", maddeler: ["Küçük moleküllerden büyük molekül yapar", "*Endergonic*: enerji ister, ATP harcar", "*Dehydration synthesis*: su çıkar", "Örnek: fotosentez, protein sentezi"] },
          sag: { ikon: "🔨", baslik: "*Catabolism* (katabolizma)", maddeler: ["Büyük molekülleri küçüğe parçalar", "*Exergonic*: enerji verir, ATP yapımında kullanılır", "*Hydrolysis*: su girer", "Örnek: hücresel solunum"] },
          oyun: [
            { metin: "Amino asitlerin bağlanıp protein oluşması.", cevap: "sol", neden: "Küçük birimlerden büyük molekül: anabolizma, ATP harcar." },
            { metin: "Glikozun solunumla CO₂ ve suya yıkılması.", cevap: "sag", neden: "Büyük molekül parçalanıyor, enerji açığa çıkıyor: katabolizma." },
            { metin: "İki glikozun su çıkararak maltoz yapması.", cevap: "sol", neden: "Su çıkıyor, bağ kuruluyor: dehidrasyon sentezi, anabolik." },
            { metin: "Nişastanın su girerek glikoza parçalanması.", cevap: "sag", neden: "Su girerek bağ kırılıyor: hidroliz, katabolik." }
          ] },
        { tip: "tablo", baslik: "ATP üç yolla yapılır (ayrıntıları sonraki defterlerde)", head: ["Yol", "Nerede?", "Enerji kaynağı"], rows: [
            ["*Substrate-level phosphorylation*", "Sitoplazma, mitokondri matriksi", "Bir molekülden doğrudan fosfat aktarımı"],
            ["*Oxidative phosphorylation*", "Mitokondri iç zarı", "Elektron taşıma zinciri (besin yıkımı)"],
            ["*Photophosphorylation*", "Kloroplast tilakoid zarı", "Işık enerjisi"]
          ], not: "Sınavda böyle yaz: *Anabolic reactions use ATP, whereas catabolic reactions release the energy that is used to make ATP.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Canlılar büyüme, hareket ve onarım için enerji ister; enerji dönüşür, yok olmaz.",
            "*Autotroph* organik maddeyi kendi yapar; *heterotroph* hazır alır.",
            "*Photoautotroph* ışık, *chemoautotroph* inorganik maddelerin oksidasyonundan enerji alır.",
            "Heterotroflar: tüketici, ayrıştırıcı (*saprophyte*), parazit; *Euglena* karma beslenir.",
            "*ATP* = adenin + riboz + 3 fosfat; enerji fosfat bağlarındadır, ATP depo değil taşıyıcıdır.",
            "*Phosphorylation*: ADP + Pᵢ + enerji → ATP (*endergonic*, su çıkar).",
            "*Dephosphorylation*: ATP + H₂O → ADP + Pᵢ + enerji (*exergonic*, *hydrolysis*).",
            "*Anabolism* ATP harcar; *catabolism* ATP yapımına enerji sağlar.",
            "ATP üç yolla yapılır: *substrate-level*, *oxidative*, *photophosphorylation*."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Derin deniz bacasında, güneş ışığının hiç ulaşmadığı yerde yaşayan bir bakteri H₂S'yi yükseltgeyerek enerji elde eder ve CO₂'den organik madde yapar. Bu bakteri hangi gruptadır?",
      opts: ["*Photoautotroph*", "*Chemoautotroph*", "*Decomposer*", "*Parasite*"], a: 1,
      why: "Besinini kendi yapıyor (ototrof) ve enerjisi ışıktan değil inorganik maddenin yükseltgenmesinden geliyor: kemoototrof. Fotoototrof şıkkı çekici ama burada ışık yok." },
    { q: "ATP'nin yapısı hakkında hangisi doğrudur?",
      opts: ["Adenin, glikoz ve iki fosfattan oluşur.", "Enerji adeninin içinde depolanır.", "Uzun süreli enerji deposudur.", "Adenin, riboz ve üç fosfattan oluşur; enerji fosfatlar arasındaki bağlardadır."], a: 3,
      why: "ATP adenin + riboz + 3 fosfattır, enerji fosfat bağlarındadır. Uzun süreli depo yağ ve glikojendir; C şıkkı bu yüzden yanlış." },
    { q: "Aşağıdaki tabloda iki tepkime verilmiştir. Hangisi doğru eşleştirilmiştir?",
      fig: { type: "table", head: ["Tepkime", "Su"], rows: [["I. ADP + Pᵢ + enerji → ATP + H₂O", "Çıkar"], ["II. ATP + H₂O → ADP + Pᵢ + enerji", "Girer"]] },
      opts: ["I *hydrolysis*, *exergonic*", "II *dehydration synthesis*, *endergonic*", "I *phosphorylation*, *endergonic*", "II *phosphorylation*, *exergonic*"], a: 2,
      why: "I numaralı tepkime ADP'ye fosfat ekler: fosforilasyon, enerji ister (endergonik). II hidrolizdir ve ekzergoniktir; D şıkkındaki ‘phosphorylation’ adlandırması yanlıştır." },
    { q: "Bir öğrenci kantinde sandviçi yerken ‘Sandviçteki ATP bana enerji verdi’ diyor. Bu ifadeyle ilgili en doğru yorum hangisidir?",
      opts: ["Yanlış; besindeki enerji önce hücresel solunumla ATP'ye aktarılır.", "Doğru; besinlerde hazır ATP bulunur.", "Yanlış; ATP yalnızca bitkilerde bulunur.", "Doğru; ATP'yi sindirim sistemi doğrudan emer."], a: 0,
      why: "Besinler organik moleküllerin bağ enerjisini taşır; hücre bunu solunumla ATP'ye çevirir. B şıkkı çekici ama ATP hazır besin değildir, hücre içinde yapılır." },
    { q: "Hangisi anabolik bir tepkimedir ve ATP harcar?",
      opts: ["Nişastanın glikoza hidrolizi", "Glikozun solunumla yıkımı", "Amino asitlerden protein sentezi", "ATP'nin ADP'ye parçalanması"], a: 2,
      why: "Küçük birimlerden büyük molekül yapmak anabolizmadır, endergoniktir ve ATP harcar. Glikozun yıkımı katabolik (ATP yapımına enerji sağlar); nişasta hidrolizi de katabolizmadır." }
  ]
};
