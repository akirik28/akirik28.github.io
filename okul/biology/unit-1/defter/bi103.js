/* Kitora not defteri · bi103 · 1.3 Fotosentezin Evreleri
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Biology, Tema 1) + MEB Maarif BİY.10 standart içeriği. Blok türleri: /ap/_kit/defter.js başı.
   Z şeması: y ekseni elektronun enerji düzeyidir (şematik, sayısal değer yok). */
window.DEFTER = {
  slug: "bi103",
  amac: "Bu konu fotosentezin iki evresini anlatıyor: ışığa bağlı tepkimeler ve Calvin döngüsü. Hangi evrede neyin girip neyin çıktığını, O₂'nin sudan geldiğinin nasıl kanıtlandığını ve suyun fotofosforilasyondaki önemini öğreneceksin.",
  bolumler: [
    {
      baslik: "Fotosentezin genel tepkimesi ve kloroplast",
      kisa: "Işık enerjisiyle CO₂ ve sudan glikoz yapılır; tepkimeler kloroplastta geçer.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "6CO₂", alt: "karbondioksit" }, "+",
            { t: "6H₂O", alt: "su" }, "→",
            { t: "C₆H₁₂O₆", alt: "glikoz" }, "+",
            { t: "6O₂", alt: "oksijen" }
          ], aciklama: "Okların üstünde ışık enerjisi ve klorofil yazılır. Ayrıntılı eşitlikte 12H₂O girer, 6H₂O yeniden çıkar; toplam sonuç aynıdır." },
        { tip: "harita", merkez: "*Chloroplast* (kloroplast)", dallar: [
            { baslik: "*Thylakoid* (tilakoid)", alt: "Zarlarında klorofil: ışığa bağlı tepkimeler burada" },
            { baslik: "*Granum*", alt: "Üst üste dizilmiş tilakoid yığını" },
            { baslik: "*Stroma*", alt: "Sıvı kısım: Calvin döngüsü burada" },
            { baslik: "Çift zar", alt: "Dış ve iç zar organeli sarar" }
          ] },
        { tip: "not", metin: "Sınavda böyle yaz: *Photosynthesis takes place in chloroplasts; the light reactions occur in the thylakoid membranes and the Calvin cycle occurs in the stroma.*" }
      ]
    },
    {
      baslik: "İki evre: ışığa bağlı tepkimeler ve Calvin döngüsü",
      kisa: "Işığa bağlı evre ATP ve NADPH üretir; Calvin döngüsü bunlarla glikoz yapar.",
      bloklar: [
        { tip: "adimlar", baslik: "Özet şema", adimlar: [
            { baslik: "Girdi", metin: "Işık, H₂O, ADP + Pᵢ ve NADP⁺ tilakoide girer." },
            { baslik: "Işığa bağlı tepkimeler", metin: "Su parçalanır; O₂ salınır, ATP ve NADPH yapılır." },
            { baslik: "Taşıyıcılar", metin: "ATP ve NADPH stromaya geçer." },
            { baslik: "Calvin döngüsü", metin: "CO₂ bağlanır; ATP ve NADPH harcanır, glikoz yapılır. ADP + Pᵢ ve NADP⁺ geri döner." }
          ] },
        { tip: "tablo", head: ["", "Işığa bağlı tepkimeler", "Calvin döngüsü"], rows: [
            ["Yer", "Tilakoid zarı", "Stroma"],
            ["Girdi", "Işık, H₂O, ADP + Pᵢ, NADP⁺", "CO₂, ATP, NADPH"],
            ["Çıktı", "O₂, ATP, NADPH", "Glikoz (G3P), ADP + Pᵢ, NADP⁺"],
            ["Işık", "Doğrudan gerekir", "Doğrudan gerekmez ama ATP ve NADPH ışıktan gelir"]
          ], vurgu: 2, not: "Sınavda böyle yaz: *The products of the light reactions, ATP and NADPH, are the reactants of the Calvin cycle.*" },
        { tip: "tuzak", metin: "Calvin döngüsüne eskiden “karanlık evre” denirdi; bu ad yanıltır. Işık olmazsa ATP ve NADPH yapılamayacağı için döngü kısa sürede durur.", yanlis: "Calvin döngüsü ışığın olmadığı gecede çalışır.", dogru: "Calvin döngüsü ışığı doğrudan kullanmaz ama ışığa bağlı tepkimelerin ürünlerine bağlıdır; ışık yoksa durur." }
      ]
    },
    {
      baslik: "Işığa bağlı tepkimeler: elektronun yolu",
      kisa: "Işık elektronu yükseltir; elektron düşerken ATP, sonunda NADPH oluşur.",
      bloklar: [
        { tip: "grafik", baslik: "Elektronun enerji yolculuğu (Z şeması, şematik)", xlabel: "Elektronun yolu", ylabel: "Enerji", xmax: 10, ymax: 10,
          ogeler: [
            { id: "su", tip: "nokta", renk: 2, x: 0.8, y: 1.9, etiket: "H₂O" },
            { id: "suy", tip: "yazi", x: 0.4, y: 3.7, metin: "O₂ + H⁺", hiza: "start", gizli: true },
            { id: "ps2", tip: "nokta", renk: 0, x: 2.2, y: 0.8, etiket: "PSII", gizli: true },
            { id: "e1", tip: "cizgi", renk: 0, from: [0.8, 1.9], to: [2.2, 0.8], gizli: true },
            { id: "h1", tip: "ok", renk: 3, from: [2.2, 1.0], to: [2.9, 5.9], gizli: true },
            { id: "h1y", tip: "yazi", x: 3.1, y: 3.2, metin: "ışık", hiza: "start", gizli: true },
            { id: "ps2x", tip: "nokta", renk: 3, x: 2.9, y: 6.1, etiket: "PSII*", gizli: true },
            { id: "e2", tip: "cizgi", renk: 0, from: [2.9, 6.1], to: [5.4, 3.0], gizli: true },
            { id: "e2y", tip: "yazi", x: 4.6, y: 5.4, metin: "taşıma zinciri → ATP", hiza: "start", gizli: true },
            { id: "ps1", tip: "nokta", renk: 0, x: 5.4, y: 3.0, etiket: "PSI", gizli: true },
            { id: "h2", tip: "ok", renk: 3, from: [5.4, 3.2], to: [6.0, 7.6], gizli: true },
            { id: "h2y", tip: "yazi", x: 6.2, y: 5.2, metin: "ışık", hiza: "start", gizli: true },
            { id: "ps1x", tip: "nokta", renk: 3, x: 6.0, y: 7.8, etiket: "PSI*", gizli: true },
            { id: "e3", tip: "cizgi", renk: 0, from: [6.0, 7.8], to: [8.6, 5.0], gizli: true },
            { id: "nadph", tip: "nokta", renk: 1, x: 8.6, y: 5.0, etiket: "NADPH", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıçta elektronlar ==suda== bulunur. Su parçalanınca (*photolysis*) elektron, H⁺ ve O₂ açığa çıkar." },
            { metin: "Su, elektronunu *photosystem II*'ye (PSII) verir; PSII'nin kaybettiği elektronların yerini bu elektronlar doldurur.", goster: ["suy", "ps2", "e1"] },
            { metin: "==Işık== PSII'deki elektronu yüksek enerji düzeyine çıkarır.", goster: ["h1", "h1y", "ps2x"] },
            { metin: "Elektron *electron transport chain* boyunca düşer. Bu sırada açığa çıkan enerjiyle H⁺ tilakoid içine pompalanır; H⁺ ATP sentazdan dönerken ==ATP== yapılır.", goster: ["e2", "e2y", "ps1"] },
            { metin: "*Photosystem I* (PSI) ışıkla elektronu ikinci kez yükseltir.", goster: ["h2", "h2y", "ps1x"] },
            { metin: "Elektron son olarak NADP⁺'ya aktarılır ==NADPH== oluşur. Sınavda böyle yaz: *Light excites the electrons in photosystem II and photosystem I, and the electrons finally reduce NADP⁺ to NADPH.*", goster: ["e3", "nadph"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "💡", terim: "Photosystem", tr: "fotosistem", tanim: "Tilakoid zarında klorofil ve proteinlerden oluşan ışık toplama birimi. PSII (P680) ve PSI (P700) vardır.", ornek: "PSII suyun parçalanmasını başlatır." },
            { ikon: "💦", terim: "Photolysis", tr: "suyun fotolizi", tanim: "Işık enerjisiyle suyun parçalanması: 2H₂O → 4H⁺ + 4e⁻ + O₂.", ornek: "Atmosferdeki oksijenin kaynağı budur." }
          ] }
      ]
    },
    {
      baslik: "Fotofosforilasyonda suyun önemi",
      kisa: "Su; elektron, proton ve O₂ sağlar. Onsuz ışığa bağlı tepkimeler çalışmaz.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "⚡", baslik: "Elektron kaynağı", metin: "Suyun elektronları PSII'nin kaybettiği elektronların yerini doldurur; su yoksa elektron akışı durur." },
            { ikon: "🔋", baslik: "Proton (H⁺) kaynağı", metin: "Tilakoid içinde H⁺ birikir. H⁺ ATP sentazdan geçerken ATP, geri kalanı NADP⁺'ya bağlanıp NADPH yapılır." },
            { ikon: "🌬️", baslik: "O₂ kaynağı", metin: "Suyun fotolizinden çıkan O₂ atmosfere verilir (yan ürün)." }
          ] },
        { tip: "ikili", sol: { ikon: "↻", baslik: "*Non-cyclic photophosphorylation* (devirsiz)", maddeler: ["PSII ve PSI birlikte çalışır", "Su gerekir", "Ürün: ATP + NADPH + O₂"] },
          sag: { ikon: "⟲", baslik: "*Cyclic photophosphorylation* (devirli)", maddeler: ["Yalnız PSI çalışır, elektron PSI'ye geri döner", "Su gerekmez", "Ürün: yalnız ATP; NADPH ve O₂ yok"] },
          oyun: [
            { metin: "Tepkimede O₂ açığa çıkıyor.", cevap: "sol", neden: "O₂ suyun fotolizinden gelir; su yalnızca devirsizde kullanılır." },
            { metin: "Yalnızca ATP yapılıyor, NADPH yapılmıyor.", cevap: "sag", neden: "Elektron NADP⁺'ya gitmez, PSI'ye döner: devirli." },
            { metin: "PSII devreye giriyor.", cevap: "sol", neden: "Devirli yolda yalnız PSI vardır; PSII devirsizde çalışır." }
          ] },
        { tip: "not", metin: "Sınavda böyle yaz: *Water is the source of the electrons, protons and oxygen in the light reactions.*" }
      ]
    },
    {
      baslik: "Calvin döngüsü: girdi ve çıktılar",
      kisa: "Stromada CO₂, ATP ve NADPH harcanır; glikoz yapılır.",
      bloklar: [
        { tip: "adimlar", baslik: "Üç aşama", adimlar: [
            { baslik: "1 · CO₂ bağlanır", metin: "CO₂, 5 karbonlu *RuBP*'ye eklenir; enzim *RuBisCO*. Ürün 3 karbonlu *3-PGA*." },
            { baslik: "2 · İndirgenme", metin: "ATP ve NADPH harcanır; *3-PGA*, *G3P*'ye (şeker) dönüşür." },
            { baslik: "3 · RuBP yenilenir", metin: "*G3P*'nin bir kısmı ve ATP ile *RuBP* geri yapılır; döngü sürer. Kalan *G3P* glikoz ve diğer organik moleküllerin yapısına girer." }
          ] },
        { tip: "ornek", baslik: "Bir glikoz için ne gerekir?", durum: "Glikoz C₆H₁₂O₆, yani 6 karbon içerir. Her CO₂ yalnız 1 karbon getirir. 1 CO₂ için döngü yaklaşık 3 ATP ve 2 NADPH harcar.", adimlar: [
            "Gereken CO₂ sayısı: 6 karbon ÷ 1 karbon = 6 CO₂ (6 tur).",
            "ATP: 6 × 3 = 18 ATP.",
            "NADPH: 6 × 2 = 12 NADPH."
          ], sonuc: "1 glikoz için yaklaşık 6 CO₂, 18 ATP ve 12 NADPH gerekir. Bu sayılar ek bilgidir; özet şemada yalnız girdi-çıktı adlarını bilmek yeterlidir." },
        { tip: "not", metin: "Sınavda böyle yaz: *The Calvin cycle takes place in the stroma, uses CO₂, ATP and NADPH, and produces glucose, ADP + Pi and NADP⁺.*" }
      ]
    },
    {
      baslik: "O₂ nereden gelir? Van Niel, Hill ve izotop kanıtı",
      kisa: "Fotosentezde çıkan O₂ sudan gelir, CO₂'den değil.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "CO₂", alt: "" }, "+",
            { t: "2H₂A", alt: "H₂S (bakteri) ya da H₂O (bitki)" }, "→",
            { t: "(CH₂O)", alt: "şeker" }, "+",
            { t: "H₂O", alt: "" }, "+",
            { t: "2A", alt: "S ya da O" }
          ], aciklama: "Van Niel: mor sülfür bakterileri H₂S kullanır ve O₂ değil kükürt çıkarır. Bitkide H₂A = H₂O ise A = O, yani O₂ sudan gelir." },
        { tip: "zaman", olaylar: [
            { tarih: "1930'lar", baslik: "Van Niel", metin: "Bakterilerden yola çıkarak O₂'nin CO₂'den değil, hidrojen verici maddeden (bitkide sudan) geldiğini ileri sürdü." },
            { tarih: "1937", baslik: "Hill", metin: "Ayrılmış kloroplastlar ışıkta ve CO₂ yokken, yapay bir elektron alıcıyla (demir III tuzu) O₂ çıkardı: O₂ CO₂'den gelemez." },
            { tarih: "1941", baslik: "Ruben ve Kamen", metin: "Ağır oksijen (¹⁸O) izotopuyla işaretlenen suyla yapılan deneyde O₂ işaretli çıktı." }
          ] },
        { tip: "tablo", baslik: "İzotop deneyinin sonucu (Ruben ve Kamen)", head: ["Verilen", "Çıkan O₂", "Sonuç"], rows: [
            ["H₂¹⁸O + CO₂", "¹⁸O₂ (işaretli)", "O₂ sudan gelir"],
            ["H₂O + C¹⁸O₂", "O₂ (işaretsiz)", "O₂ CO₂'den gelmez"]
          ], vurgu: 0, not: "Sınavda böyle yaz: *The oxygen released in photosynthesis comes from water, not from carbon dioxide.*" },
        { tip: "tuzak", metin: "Eşitlikte CO₂'de de O atomu olduğu için O₂'nin oradan geldiği düşünülebilir.", yanlis: "Fotosentezdeki O₂, CO₂'nin parçalanmasıyla oluşur.", dogru: "O₂ suyun fotolizinden gelir. CO₂'deki oksijen şekerin ve suyun yapısına katılır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (ışık, klorofil). Tepkimeler kloroplastta geçer.",
            "Işığa bağlı tepkimeler tilakoid zarında olur; girdi: ışık, H₂O, ADP + Pᵢ, NADP⁺; çıktı: O₂, ATP, NADPH.",
            "Calvin döngüsü stromadadır; girdi: CO₂, ATP, NADPH; çıktı: glikoz, ADP + Pᵢ, NADP⁺.",
            "Calvin döngüsü “karanlık tepkime” değil; ışık yoksa ATP ve NADPH bitince durur.",
            "Su fotolizi: elektron, H⁺ ve O₂ verir. PSII → taşıma zinciri (ATP) → PSI → NADPH.",
            "Devirsiz yolda ATP + NADPH + O₂, devirli yolda yalnız ATP yapılır.",
            "Van Niel: H₂A hidrojen vericidir; bitkide verici H₂O'dur, O₂ sudan gelir.",
            "Hill: ayrılmış kloroplast, CO₂ yokken yapay elektron alıcıyla O₂ çıkarır.",
            "Ruben ve Kamen: H₂¹⁸O verilince ¹⁸O₂ çıkar; C¹⁸O₂ verilince O₂ işaretsizdir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Işığa bağlı tepkimelerin Calvin döngüsüne doğrudan sağladığı moleküller hangileridir?",
      opts: ["O₂ ve H₂O", "CO₂ ve glikoz", "ATP ve NADPH", "ADP ve NADP⁺"], a: 2,
      why: "Işığa bağlı evrede yapılan ATP ve NADPH stromada Calvin döngüsünde harcanır. ADP ve NADP⁺ ise Calvin'in çıktılarıdır ve geri döner; D şıkkı ilişkiyi tersine çevirir." },
    { q: "Bir öğrenci aşağıdaki iki deneyin sonuçlarını inceliyor. Sonuçlardan hangi çıkarım yapılabilir?",
      fig: { type: "table", head: ["Deney", "Verilen", "Çıkan O₂"], rows: [["1", "H₂¹⁸O + CO₂", "¹⁸O₂"], ["2", "H₂O + C¹⁸O₂", "Normal O₂"]] },
      opts: ["Fotosentezde çıkan O₂ sudan gelir.", "Fotosentezde çıkan O₂ CO₂'den gelir.", "Glikozdaki O atomları sudan gelir.", "Her iki deneyde O₂ aynı kaynaktan gelir."], a: 0,
      why: "İşaretli su verilince işaretli O₂ çıkıyor, işaretli CO₂ verilince çıkmıyor: O₂ sudan gelir. B şıkkı en çekici yanlıştır; ikinci deney tam tersini gösterir." },
    { q: "Hill deneyinde ayrılmış kloroplastlar ışıkta, CO₂ olmadan ve yapay bir elektron alıcı varken O₂ çıkarmıştır. Bu deney neyi gösterir?",
      opts: ["O₂ çıkışı CO₂ tutulmasına bağlıdır.", "Kloroplast olmadan fotosentez olur.", "O₂ ve glikoz aynı anda yapılır.", "O₂ üretimi CO₂'den bağımsız olarak ışıkta gerçekleşir; kaynağı CO₂ değildir."], a: 3,
      why: "CO₂ yokken de O₂ çıkıyorsa O₂ CO₂'den gelmez. A şıkkı tam tersini söyler." },
    { q: "Bir bitki uzun süre karanlıkta tutulursa Calvin döngüsü neden yavaşlar ve durur?",
      opts: ["Stromada CO₂ biter.", "ATP ve NADPH yapılamadığı için döngünün girdileri tükenir.", "RuBisCO ışıkta çalışır.", "Kloroplast çift zarı kapanır."], a: 1,
      why: "Calvin döngüsü ışığı doğrudan kullanmaz ama ATP ve NADPH'ye ihtiyaç duyar; bunlar ışığa bağlı tepkimelerden gelir. A şıkkı çekici ama karanlıkta CO₂ girişi yine olabilir." },
    { q: "Aşağıdakilerden hangisi suyun fotofosforilasyondaki görevlerinden biri DEĞİLDİR?",
      opts: ["PSII'ye elektron sağlamak", "Tilakoid içinde H⁺ kaynağı olmak", "Calvin döngüsünde CO₂'yi bağlamak", "Atmosfere verilen O₂'nin kaynağı olmak"], a: 2,
      why: "CO₂'yi bağlayan şey RuBisCO ile RuBP'dir, su değildir. Diğer üç şık suyun gerçek görevleridir." }
  ]
};
