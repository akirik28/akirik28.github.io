/* Kitora not defteri · ph302 · 3.2 Dirençlerin Bağlanması (Resistors in Series and Parallel)
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Physics, Unit 3; FİZ.10.3.4) + MEB FİZ.10 Elektrik. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph302",
  amac: "Bu defter dirençlerin *series* (seri) ve *parallel* (paralel) bağlanmasını anlatıyor: eşdeğer direncin nasıl bulunacağını, akımın ve gerilimin dirençler arasında nasıl paylaşıldığını ve karma devrelerin adım adım nasıl çözüleceğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Seri bağlama: tek yol",
      kisa: "Seride akım aynıdır, gerilimler ve dirençler toplanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔗", terim: "Series connection", tr: "seri bağlama", tanim: "Elemanlar uç uca eklenir; akımın tek yolu vardır. Biri koparsa devre açılır, hepsi durur.", ornek: "Eski tip süs ışığı zincirinde bir ampul patlayınca hepsi söner." },
            { ikon: "🟰", terim: "Equivalent resistance", tr: "eşdeğer direnç", tanim: "Bir dirençler grubunun yerini tutan, devreden aynı akımı geçiren tek direnç. R_eş ile gösterilir.", ornek: "2 Ω ile 4 Ω seri bağlıysa tek bir 6 Ω gibi davranır." }
          ] },
        { tip: "formul", parcalar: [
            { t: "R_eş", alt: "seri" }, "=", { t: "R₁" }, "+", { t: "R₂" }, "+", { t: "R₃" }
          ], aciklama: "Akım: I = I₁ = I₂ = I₃ (her yerde aynı). Gerilim: V = V₁ + V₂ + V₃. Büyük dirençte ==daha çok gerilim düşer==." },
        { tip: "ornek", baslik: "İki direnç seri", durum: "12 V'luk pile 2 Ω ve 4 Ω'luk dirençler seri bağlı. Akım ve her direncin uçlarındaki gerilim nedir?",
          adimlar: ["R_eş = 2 + 4 = 6 Ω.", "I = V / R_eş = 12 / 6 = 2 A (iki dirençten de geçer).", "V₁ = I · R₁ = 2 · 2 = 4 V; V₂ = I · R₂ = 2 · 4 = 8 V.", "Kontrol: 4 + 8 = 12 V ✓."],
          sonuc: "I = 2 A; V₁ = 4 V, V₂ = 8 V. Gerilim dirençlerle orantılı paylaşılır (1 : 2)." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The same current flows through each resistor in series.*", metin: "Seri devrenin akım kuralı." },
            { ikon: "✍️", baslik: "*The equivalent resistance is the sum of the resistances.*", metin: "R_eş = R₁ + R₂ cümlesi." }
          ] }
      ]
    },
    {
      baslik: "Paralel bağlama: kollara ayrılan yol",
      kisa: "Paralelde gerilim aynıdır, akımlar toplanır, eşdeğer direnç küçülür.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "1 / R_eş", alt: "paralel" }, "=", { t: "1 / R₁" }, "+", { t: "1 / R₂" }, "+", { t: "1 / R₃" }
          ], aciklama: "İki direnç için R_eş = R₁·R₂ / (R₁ + R₂). Özdeş n direnç için R_eş = R / n. Akım: I = I₁ + I₂. Gerilim: V = V₁ = V₂." },
        { tip: "ornek", baslik: "İki direnç paralel", durum: "12 V'luk pile 6 Ω ve 3 Ω'luk dirençler paralel bağlı. R_eş, toplam akım ve kol akımları nedir?",
          adimlar: ["R_eş = (6 · 3) / (6 + 3) = 18 / 9 = 2 Ω.", "Toplam akım: I = 12 / 2 = 6 A.", "Kol akımları: I₁ = 12 / 6 = 2 A, I₂ = 12 / 3 = 4 A.", "Kontrol: 2 + 4 = 6 A ✓."],
          sonuc: "R_eş = 2 Ω, I = 6 A. Küçük dirençten daha çok akım geçer (4 A, 2 A'e karşı)." },
        { tip: "tuzak", metin: "Paralel bağlı kollardan her biri akıma yeni bir yol açar.", yanlis: "Paralele bir direnç daha eklersem eşdeğer direnç artar.", dogru: "R_eş her zaman en küçük dirençten daha küçüktür ve yeni kol eklendikçe küçülür; toplam akım artar." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The voltage across each resistor in parallel is the same.*", metin: "Paralel devrenin gerilim kuralı." },
            { ikon: "✍️", baslik: "*The total current is equal to the sum of the branch currents.*", metin: "Akım paylaşımını bu cümleyle yaz." }
          ] }
      ]
    },
    {
      baslik: "Seri mi, paralel mi? Karşılaştırma",
      kisa: "Seride akım ortak, paralelde gerilim ortaktır.",
      bloklar: [
        { tip: "tablo", head: ["Özellik", "Seri", "Paralel"], rows: [
            ["Akım", "Her yerde aynı: I = I₁ = I₂", "Kollarda paylaşılır: I = I₁ + I₂"],
            ["Gerilim", "Paylaşılır: V = V₁ + V₂", "Her kolda aynı: V = V₁ = V₂"],
            ["Eşdeğer direnç", "R₁ + R₂ (büyür)", "R₁·R₂ / (R₁ + R₂) (küçülür)"],
            ["Büyük dirençte", "Daha çok gerilim düşer", "Daha az akım geçer"],
            ["Bir eleman çıkarılırsa", "Devre açılır, hepsi durur", "Diğerleri çalışmaya devam eder"]
          ], vurgu: 2 },
        { tip: "ikili", sol: { ikon: "🔗", baslik: "Seri", maddeler: ["Tek yol, akım aynı", "R_eş büyür"] },
          sag: { ikon: "🔀", baslik: "Paralel", maddeler: ["Kollara ayrılır, gerilim aynı", "R_eş küçülür"] },
          oyun: [
            { metin: "Elemanlardan geçen akım aynıdır.", cevap: "sol", neden: "Tek yol olduğu için akım hiçbir yerde dallanmaz: seri." },
            { metin: "Evdeki prizler: bir cihazı çekince diğerleri çalışmaya devam eder.", cevap: "sag", neden: "Her cihaz 220 V'u kendi kolunda alır: paralel." },
            { metin: "Eşdeğer direnç, en küçük dirençten bile küçüktür.", cevap: "sag", neden: "Yeni yol akımı kolaylaştırır: paralel." },
            { metin: "Gerilimler toplanıp pil gerilimine eşit olur.", cevap: "sol", neden: "V = V₁ + V₂: seri." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*In a series circuit the voltage is shared between the resistors.*", metin: "Seri devrede gerilim paylaşılır." },
            { ikon: "✍️", baslik: "*In a parallel circuit the current is shared between the branches.*", metin: "Paralel devrede akım paylaşılır." }
          ] }
      ]
    },
    {
      baslik: "Direnç eklenince eşdeğer direnç nasıl değişir?",
      kisa: "Seride R_eş = n·R büyür, paralelde R_eş = R/n küçülür.",
      bloklar: [
        { tip: "grafik", baslik: "Her biri 2 Ω olan n özdeş direnç", xlabel: "Direnç sayısı n", ylabel: "R_eş (Ω)", xmax: 6, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }], yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "p1", tip: "nokta", x: 1, y: 2, etiket: "2 Ω" },
            { id: "ser", tip: "cizgi", renk: 0, from: [1, 2], to: [5, 10], etiket: "seri", gizli: true },
            { id: "par", tip: "egri", renk: 2, noktalar: [[1, 2], [2, 1], [3, 0.67], [4, 0.5], [5, 0.4]], etiket: "paralel", gizli: true },
            { id: "ps", tip: "nokta", x: 3, y: 6, etiket: "6 Ω", gizli: true },
            { id: "pp", tip: "nokta", x: 3, y: 0.67, etiket: "0,67 Ω", gizli: true }
          ],
          durumlar: [
            { metin: "Tek direnç: R_eş = 2 Ω." },
            { metin: "Seri: her direnç eklenince R_eş = n · R artar: 2, 4, 6, 8, 10 Ω.", goster: ["ser"] },
            { metin: "Paralel: her kol eklenince R_eş = R / n azalır: 2, 1, 0,67, 0,5, 0,4 Ω.", goster: ["par"] },
            { metin: "n = 3 için seri 6 Ω, paralel yaklaşık 0,67 Ω. Paralel eşdeğer, tek dirençten (2 Ω) her zaman küçüktür.", goster: ["ps", "pp"] }
          ] },
        { tip: "ornek", baslik: "Üç özdeş direnç", durum: "6 Ω'luk üç özdeş direnç 18 V'luk pile önce seri, sonra paralel bağlanıyor. Pilden çekilen akım iki durumda kaç A?",
          adimlar: ["Seri: R_eş = 6 + 6 + 6 = 18 Ω → I = 18 / 18 = 1 A.", "Paralel: R_eş = 6 / 3 = 2 Ω → I = 18 / 2 = 9 A (her koldan 18 / 6 = 3 A).", "Paralel bağlantı 9 kat daha fazla akım çeker."],
          sonuc: "Seri 1 A, paralel 9 A." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The equivalent resistance decreases as more resistors are added in parallel.*", metin: "Grafikteki paralel eğriyi yorumla." },
            { ikon: "✍️", baslik: "*The parallel combination has a smaller resistance than any single resistor.*", metin: "Paralel eşdeğerin en küçük dirençten küçük olduğunu söyle." }
          ] }
      ]
    },
    {
      baslik: "Karma devre: adım adım çözüm",
      kisa: "Önce paraleli sadeleştir, sonra seriyi topla, sonra geriye doğru git.",
      bloklar: [
        { tip: "ornek", baslik: "Seri + paralel karışık", durum: "12 V'luk pile R₁ = 2 Ω seri bağlı; bunun ardından R₂ = 6 Ω ile R₃ = 3 Ω paralel bağlı. Her direncin akımını ve gerilimini bul.",
          adimlar: ["Paralel kısım: R₂₃ = (6 · 3) / (6 + 3) = 2 Ω.", "Seri toplam: R_eş = R₁ + R₂₃ = 2 + 2 = 4 Ω.", "Pilden çekilen akım: I = 12 / 4 = 3 A; bu akım R₁'den geçer.", "R₁'in gerilimi: V₁ = 3 · 2 = 6 V. Paralel kısımda kalan: 12 − 6 = 6 V.", "Kol akımları: I₂ = 6 / 6 = 1 A, I₃ = 6 / 3 = 2 A. Kontrol: 1 + 2 = 3 A ✓."],
          sonuc: "I₁ = 3 A (6 V); I₂ = 1 A ve I₃ = 2 A (ikisi de 6 V)." },
        { tip: "tablo", baslik: "Paylaşım tablosu", head: ["Direnç", "R (Ω)", "V (V)", "I (A)"], rows: [
            ["R₁ (seri)", "2", "6", "3"],
            ["R₂ (paralel kol)", "6", "6", "1"],
            ["R₃ (paralel kol)", "3", "6", "2"],
            ["Toplam (R_eş)", "4", "12", "3"]
          ], vurgu: 3, not: "Her satırda V = I · R'yi, seri kısımda 6 + 6 = 12 V'u ve paralel kısımda 1 + 2 = 3 A'i kontrol et." },
        { tip: "tuzak", metin: "Toplam akım yalnızca pilden ve seri bağlı elemandan geçer; paralel kolda paylaşılır.", yanlis: "R₂'nin gerilimi V = I_toplam · R₂ = 3 · 6 = 18 V.", dogru: "R₂'den yalnızca 1 A geçer: V₂ = 1 · 6 = 6 V. 18 V pil geriliminden bile büyük olamaz." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*First I find the equivalent resistance of the parallel part.*", metin: "Çözüm sırasını cümleyle göster." },
            { ikon: "✍️", baslik: "*The total current is 3 A, so the voltage across R₁ is 6 V.*", metin: "Her adımın sonucunu birimle yaz." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Series*: I aynı, V paylaşılır, R_eş = R₁ + R₂ + … (büyür).",
            "*Parallel*: V aynı, I paylaşılır, 1/R_eş = 1/R₁ + 1/R₂ + … (küçülür).",
            "İki dirençte paralel: R_eş = R₁·R₂ / (R₁ + R₂). Özdeş n dirençte: R / n.",
            "Paralel eşdeğer direnç, en küçük dirençten her zaman küçüktür.",
            "Seride büyük dirençte daha çok gerilim, paralelde küçük dirençten daha çok akım geçer.",
            "Evdeki prizler paralel bağlıdır; biri çıkarılınca diğerleri çalışır.",
            "Karma devrede önce paraleli sadeleştir, R_eş ve toplam akımı bul, sonra gerilim ve akımları dağıt.",
            "Toplam akımı paralel koldaki dirence tek başına uygulama."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "6 Ω ve 3 Ω'luk iki direnç paralel bağlanıyor. Eşdeğer direnç kaç Ω'dur?",
      opts: ["9 Ω", "4,5 Ω", "2 Ω", "18 Ω"], a: 2,
      why: "R_eş = (6 · 3) / (6 + 3) = 18 / 9 = 2 Ω. 9 Ω seri bağlantının sonucudur; 18 Ω yalnızca çarpımı almaktır. Paralel eşdeğer 3 Ω'dan küçük olmalıdır." },
    { q: "12 V'luk bir pile 2 Ω ve 4 Ω'luk iki direnç seri bağlanmıştır. 4 Ω'luk direncin uçları arasındaki gerilim kaç V'tur?",
      opts: ["8 V", "4 V", "6 V", "12 V"], a: 0,
      why: "R_eş = 6 Ω, I = 12 / 6 = 2 A, V = 2 · 4 = 8 V. 6 V, gerilimin eşit paylaşıldığını sanmaktır; 12 V paralel mantığıdır." },
    { q: "Tabloda 12 V'luk bir kaynağa paralel bağlı iki kol veriliyor. Kaynaktan çekilen toplam akım kaç A'dir?",
      fig: { type: "table", head: ["Kol", "Direnç", "Uçlardaki gerilim"], rows: [["K₁", "6 Ω", "12 V"], ["K₂", "3 Ω", "12 V"]], caption: "Paralel kollar" },
      opts: ["2 A", "4 A", "1,5 A", "6 A"], a: 3,
      why: "I₁ = 12 / 6 = 2 A, I₂ = 12 / 3 = 4 A; I = I₁ + I₂ = 6 A. Tek koldaki akımı toplam sanan 2 A ya da 4 A'e gider." },
    { q: "12 V'luk pile R₁ = 2 Ω seri bağlı; ardından R₂ = 6 Ω ve R₃ = 3 Ω paralel bağlıdır. R₂'den geçen akım kaç A'dir?",
      opts: ["3 A", "1 A", "2 A", "6 A"], a: 1,
      why: "Paralel kısım 2 Ω, R_eş = 4 Ω, I_toplam = 3 A. R₁'de 6 V düşer, paralel kolda 6 V kalır; I₂ = 6 / 6 = 1 A. 3 A, toplam akımdır." },
    { q: "Aynı üç özdeş ampul bir pile paralel bağlıdır. Ampullerden biri sökülürse diğer iki ampulün parlaklığı ve pilden çekilen toplam akım nasıl değişir?",
      opts: ["Parlaklıkları artar, toplam akım artar", "Parlaklıkları azalır, toplam akım azalır", "Parlaklıkları değişmez, toplam akım azalır", "Parlaklıkları değişmez, toplam akım değişmez"], a: 2,
      why: "Paralelde her ampul pil gerilimini tek başına alır, bu yüzden parlaklık değişmez. Bir kol azaldığı için toplam akım azalır (I = I₁ + I₂)." }
  ]
};
