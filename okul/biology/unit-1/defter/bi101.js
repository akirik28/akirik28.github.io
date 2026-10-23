/* Kitora not defteri · bi101 · 1.1 Canlılar ve Enerji, ATP
   Kaynak: öğretmen lecture'ı (1.1 Importance of Energy for Living Things) + defter-araclari/kaynak/okul-10-2025-26.md + MEB Maarif BİY.10. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bi101",
  amac: "Bu konu canlıların enerjiyi nereden bulduğunu anlatıyor: *metabolism* ile enerji biçimleri, ototrof ve heterotrof beslenme, sonra hücrenin enerji parası *ATP*. ATP'nin yapısını ve nasıl yapılıp yıkıldığını (*phosphorylation*, *dephosphorylation*) öğreneceksin.",
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
      baslik: "*Metabolism* ve enerji biçimleri",
      kisa: "Metabolizma = anabolizma + katabolizma; enerji ekosisteme ışıkla girer, ısıyla çıkar.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "*Anabolism*", alt: "enerji harcar" }, "+",
            { t: "*Catabolism*", alt: "enerji verir" }, "=",
            { t: "*Metabolism*", alt: "tüm kimyasal tepkimeler" }
          ], aciklama: "*Bioenergetics* (biyoenerjetik), canlıların enerji kaynaklarını nasıl yönettiğini inceler: enerji akışı, üretimi ve tüketimi." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🏃", terim: "Kinetic energy", tr: "kinetik enerji", tanim: "Hareketle ilgili enerji. *Heat* (ısı), atom ve moleküllerin rastgele hareketiyle ilgili kinetik enerjidir.", ornek: "Kasılan kas, titreşen moleküller." },
            { ikon: "⛰️", terim: "Potential energy", tr: "potansiyel enerji", tanim: "Maddenin konumundan ya da yapısından gelen enerji. *Chemical energy* tepkimede açığa çıkabilen potansiyel enerjidir.", ornek: "Glikozun bağlarındaki enerji." },
            { ikon: "🔒", terim: "Open system", tr: "açık sistem", tanim: "Çevresiyle enerji ve madde alışverişi yapar. Canlılar açık sistemdir; *closed system* (termos gibi) çevreden yalıtılmıştır.", ornek: "Hücre, ekosistem." }
          ] },
        { tip: "not", metin: "Enerji ekosisteme ==ışık== olarak girer, ==ısı== olarak çıkar. *Photosynthesis* ışığı kimyasal enerjiye çevirir; hücresel solunum besindeki kimyasal enerjiyi ATP'nin fosfat bağlarına aktarır. Sınavda böyle yaz: *Energy can be converted from one form to another, and organisms are open systems.*" }
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
            { ikon: "🌿", terim: "Mixotroph", tr: "karma beslenen (ek bilgi)", tanim: "Hem fotosentez yapabilir hem hazır organik madde alabilir. Işık yoksa heterotrof gibi beslenir.", ornek: "*Euglena* (öglena); lecture onu ışıkla besin yapan ökaryotlar arasında sayar." }
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
          ], aciklama: "Adenin + riboz = adenozin. Riboz ile fosfat arasında ==ester bond==, riboz ile adenin arasında ==glycosidic bond== vardır. Fosfat sayısı 1, 2, 3 olunca sırasıyla AMP, ADP, ATP; enerji uçtaki fosfat bağı kopunca açığa çıkar." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔋", terim: "ATP", tr: "adenozin trifosfat", tanim: "Üç fosfatlı enerji taşıyıcı. ==Enerji fosfatlar arasındaki bağlarda== bulunur, adeninde değil.", ornek: "Kasın bir kez kasılması için ATP harcanır." },
            { ikon: "🪫", terim: "ADP", tr: "adenozin difosfat", tanim: "İki fosfatlı, enerjisi azalmış hâl. ATP'nin bir fosfat vermesiyle oluşur.", ornek: "Boşalmış pil gibi, tekrar şarj edilebilir." }
          ] },
        { tip: "tuzak", metin: "ATP uzun süreli depo değildir; hücrede çok az bulunur ve saniyeler içinde kullanılıp yenilenir. Uzun süreli depo yağ ve nişasta ya da glikojendir.", yanlis: "ATP, hücrenin enerji deposudur.", dogru: "ATP, enerjinin ==kısa süreli taşıyıcısı== yani hücrenin enerji parasıdır. Asıl enerji kaynağı besindir." },
        { tip: "not", metin: "Her hücre ATP'sini kendisi yapar; ATP büyük bir molekül olduğu için hücreler arasında taşınmaz. Sınavda böyle yaz: *ATP consists of adenine, ribose and three phosphate groups; the energy is stored in the bonds between the phosphate groups.*" }
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
            ["Serbest enerji", "ΔG > 0, kendiliğinden yürümez", "ΔG < 0, kendiliğinden yürür"],
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
        { tip: "tablo", baslik: "ATP yapım yolları (ayrıntıları sonraki defterlerde)", head: ["Yol", "Nerede?", "Enerji kaynağı"], rows: [
            ["*Photophosphorylation*", "Kloroplast (ökaryot), sitoplazma (prokaryot)", "Işık enerjisi, ETS"],
            ["*Oxidative phosphorylation*", "Mitokondri (ökaryot), mesozom (aerobik bakteri)", "O₂ varlığında organik molekül yıkımı, ETS"],
            ["*Chemophosphorylation*", "Kemosentetik bakteriler", "İnorganik bileşiklerin oksidasyonu"],
            ["*Substrate-level phosphorylation*", "Glikoliz ve Krebs döngüsü", "Enzimin fosfatı substrattan ADP'ye aktarması"]
          ], not: "Sınavda böyle yaz: *Anabolic reactions use ATP, whereas catabolic reactions release the energy that is used to make ATP.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Canlılar büyüme, hareket ve onarım için enerji ister; *metabolism* = *anabolism* + *catabolism*; enerji ışıkla girer, ısıyla çıkar.",
            "*Autotroph* organik maddeyi kendi yapar; *heterotroph* hazır alır.",
            "*Photoautotroph* ışık, *chemoautotroph* inorganik maddelerin oksidasyonundan enerji alır.",
            "Heterotroflar: tüketici, ayrıştırıcı (*saprophyte*), parazit; *Euglena* karma beslenir.",
            "*ATP* = adenin + riboz + 3 fosfat; enerji fosfat bağlarındadır, ATP depo değil taşıyıcıdır.",
            "*Phosphorylation*: ADP + Pᵢ + enerji → ATP (*endergonic*, su çıkar).",
            "*Dephosphorylation*: ATP + H₂O → ADP + Pᵢ + enerji (*exergonic*, *hydrolysis*).",
            "*Anabolism* ATP harcar; *catabolism* ATP yapımına enerji sağlar.",
            "ATP yapım yolları: *photo-*, *oxidative-*, *chemophosphorylation* ve solunumdaki *substrate-level*."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "A bacterium living near a deep-sea hydrothermal vent, where sunlight never reaches, oxidizes H₂S to obtain energy and builds organic molecules from CO₂. Which group does it belong to?",
      opts: ["*Photoautotroph*", "*Chemoautotroph*", "*Decomposer*", "*Parasite*"], a: 1,
      why: "Besinini kendi yapıyor (ototrof) ve enerjisi ışıktan değil inorganik maddenin yükseltgenmesinden geliyor: kemoototrof. Fotoototrof şıkkı çekici ama burada ışık yok." },
    { q: "Which statement about the structure of ATP is correct?",
      opts: ["It consists of adenine, glucose and two phosphate groups.", "The energy is stored inside the adenine base.", "It is the long-term energy store of the cell.", "It consists of adenine, ribose and three phosphate groups; the energy is in the bonds between the phosphates."], a: 3,
      why: "ATP adenin + riboz + 3 fosfattır, enerji fosfat bağlarındadır. Uzun süreli depo yağ ve glikojendir; C şıkkı bu yüzden yanlış." },
    { q: "Two reactions are shown in the table. Which statement about them is correct?",
      fig: { type: "table", head: ["Reaction", "Water"], rows: [["I. ADP + Pi + energy → ATP + H₂O", "Released"], ["II. ATP + H₂O → ADP + Pi + energy", "Used"]] },
      opts: ["I is *hydrolysis* and *exergonic*.", "II is *dehydration synthesis* and *endergonic*.", "I is *phosphorylation* and *endergonic*.", "II is *phosphorylation* and *exergonic*."], a: 2,
      why: "I numaralı tepkime ADP'ye fosfat ekler: fosforilasyon, enerji ister (endergonik). II hidrolizdir ve ekzergoniktir; D şıkkındaki ‘phosphorylation’ adlandırması yanlıştır." },
    { q: "Which of the following correctly identifies the bonds in an ATP molecule?",
      opts: ["Ribose and adenine are joined by an ester bond.", "Ribose and phosphate are joined by an ester bond; ribose and adenine by a glycosidic bond.", "Ribose and phosphate are joined by a glycosidic bond.", "All parts of ATP are joined by glycosidic bonds."], a: 1,
      why: "Lecture'a göre riboz–fosfat arası ester, riboz–adenin arası glycosidic bağdır. A ve C şıkları bağ adlarını yer değiştirmiş." },
    { q: "Which reaction is anabolic and uses ATP?",
      opts: ["Hydrolysis of starch to glucose", "Breakdown of glucose by respiration", "Synthesis of a protein from amino acids", "Hydrolysis of ATP to ADP"], a: 2,
      why: "Küçük birimlerden büyük molekül yapmak anabolizmadır, endergoniktir ve ATP harcar. Glikozun yıkımı katabolik (ATP yapımına enerji sağlar); nişasta hidrolizi de katabolizmadır." }
  ]
};
