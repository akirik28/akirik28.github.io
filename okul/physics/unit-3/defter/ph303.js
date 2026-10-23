/* Kitora not defteri · ph303 · 3.3 Üreteçlerin Bağlanması (Cells in Series and Parallel)
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Physics, Unit 3; FİZ.10.3.5) + MEB FİZ.10 Elektrik. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph303",
  amac: "Bu defter *cell* yani üreteç (pil) bağlantılarını anlatıyor: üreteçleri seri ve paralel bağlayınca devreye verilen gerilimin nasıl değiştiğini, ters bağlamanın ne yaptığını ve karma bağlamayı öğreneceksin. Önce üreteçler ideal alınır; sonra gerçek pilin iç direncini ve pil ömrünü göreceksin.",
  bolumler: [
    {
      baslik: "Üreteç ve *emf*",
      kisa: "Üreteç, yüke enerji veren ve devreye gerilim sağlayan kaynaktır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔋", terim: "Cell", tr: "üreteç (pil)", tanim: "Kimyasal enerjiyi elektrik enerjisine çeviren tek bir kaynak. Bir + ve bir − ucu vardır.", ornek: "Kalem pil, telefon bataryasındaki tek hücre." },
            { ikon: "🔋", terim: "Battery", tr: "batarya (pil grubu)", tanim: "Birden fazla üretecin bağlanmasıyla oluşan grup.", ornek: "Araç aküsü, 9 V'luk pil." },
            { ikon: "⚡", terim: "Electromotive force (emf)", tr: "elektromotor kuvvet, ε", tanim: "Üretecin, geçen her coulomb yüke verdiği enerji; volt cinsinden. İç direnç yoksa devreye verilen gerilime eşittir.", ornek: "Kalem pil için ε = 1,5 V." }
          ] },
        { tip: "tablo", baslik: "Günlük üreteç gerilimleri (yaklaşık)", head: ["Üreteç", "Gerilimi ε"], rows: [
            ["Kalem pil (AA)", "1,5 V"],
            ["9 V'luk pil", "9 V"],
            ["Telefon pili (lityum-iyon)", "≈ 3,7 V"],
            ["Araç aküsü", "≈ 12 V"]
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*A cell converts chemical energy into electrical energy.*", metin: "Üretecin ne yaptığını söyle." },
            { ikon: "✍️", baslik: "*The emf of the cell is 1.5 V.*", metin: "ε için \"emf\" kısaltmasını kullan." }
          ] }
      ]
    },
    {
      baslik: "Seri bağlama: gerilimler toplanır",
      kisa: "Seri bağlı özdeş pillerde toplam gerilim n·ε olur.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "ε toplam", alt: "seri" }, "=", { t: "ε₁" }, "+", { t: "ε₂" }, "+", { t: "ε₃" }
          ], aciklama: "Özdeş n pil için ε_toplam = n·ε. Bir pilin + ucu diğerinin − ucuna bağlanır. Akım her pilden aynı geçer." },
        { tip: "ornek", baslik: "Üç pil seri", durum: "1,5 V'luk üç özdeş pil seri bağlanıp 9 Ω'luk ampule bağlanıyor. Ampulün gerilimi ve akımı nedir?",
          adimlar: ["ε_toplam = 3 · 1,5 = 4,5 V.", "I = V / R = 4,5 / 9 = 0,5 A.", "Pillerin hepsinden aynı 0,5 A geçer."],
          sonuc: "Ampulün uçlarında 4,5 V var, akım 0,5 A." },
        { tip: "tuzak", metin: "Üç pil seri bağlı ama biri ters çevrilmiş: ε = 1,5 + 1,5 − 1,5 = 1,5 V.", yanlis: "Üç pil seri olduğu için, biri ters bile olsa 4,5 V verir.", dogru: "Ters bağlı pilin ε'u toplamdan ==çıkarılır==." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The total emf is the sum of the emfs of the cells in series.*", metin: "Seri bağlamanın kuralı." },
            { ikon: "✍️", baslik: "*The same current flows through each cell.*", metin: "Akımın pillerden eşit geçtiğini ekle." }
          ] }
      ]
    },
    {
      baslik: "Paralel bağlama: gerilim aynı, akım paylaşılır",
      kisa: "Özdeş piller paralel bağlanınca gerilim artmaz, akım pillere paylaşılır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "ε toplam", alt: "paralel, özdeş" }, "=", { t: "ε", alt: "tek pil kadar" }
          ], aciklama: "Aynı uçlar (+ ile +, − ile −) birbirine bağlanır. Dışarıya verilen akım n pile paylaşılır: her pilden I/n geçer. Paralel pillerin ε'u ==eşit== olmalıdır." },
        { tip: "tablo", baslik: "Aynı 3 Ω'luk ampul, iki pil (her biri 1,5 V)", head: ["Bağlantı", "Ampulün gerilimi", "Ampulün akımı", "Her pilden geçen"], rows: [
            ["Seri", "3 V", "1 A", "1 A"],
            ["Paralel", "1,5 V", "0,5 A", "0,25 A"]
          ], not: "Seri: gerilim 2 katı ve akım 2 katı. Paralel: gerilim tek pil kadar, ama her pil yalnızca toplam akımın yarısını verir; bu yüzden piller daha yavaş tükenir." },
        { tip: "tuzak", metin: "Paralel bağlamanın kazancı gerilimde değil, pillerin ömründedir.", yanlis: "Pilleri paralel bağlarsam gerilim toplanır.", dogru: "Özdeş pillerde paralel gerilim tek pilinki kadardır; akım pillere paylaşılır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The total emf of identical cells in parallel is the same as the emf of one cell.*", metin: "Paralel bağlamanın kuralı." },
            { ikon: "✍️", baslik: "*Each cell supplies only part of the current.*", metin: "Akımın paylaşıldığını belirt." }
          ] }
      ]
    },
    {
      baslik: "Gerilim–pil sayısı grafiği ve karma bağlama",
      kisa: "Seride gerilim pil sayısıyla artar, paralelde sabit kalır.",
      bloklar: [
        { tip: "grafik", baslik: "1,5 V'luk özdeş pillerin toplam gerilimi", xlabel: "Pil sayısı n", ylabel: "Toplam gerilim (V)", xmax: 6, ymax: 8,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }], yticks: [{ v: 1.5, label: "1,5" }, { v: 3, label: "3" }, { v: 4.5, label: "4,5" }, { v: 6, label: "6" }, { v: 7.5, label: "7,5" }],
          ogeler: [
            { id: "p1", tip: "nokta", x: 1, y: 1.5, etiket: "1,5 V" },
            { id: "ser", tip: "cizgi", renk: 0, from: [1, 1.5], to: [5, 7.5], etiket: "seri", gizli: true },
            { id: "par", tip: "cizgi", renk: 2, from: [1, 1.5], to: [5, 1.5], etiket: "paralel", gizli: true },
            { id: "ps", tip: "nokta", x: 3, y: 4.5, etiket: "4,5 V", gizli: true },
            { id: "pp", tip: "nokta", x: 3, y: 1.5, etiket: "1,5 V", gizli: true },
            { id: "pk", tip: "nokta", renk: 3, x: 4, y: 3, etiket: "karma", gizli: true }
          ],
          durumlar: [
            { metin: "Tek pil: 1,5 V." },
            { metin: "Seri: her pil 1,5 V ekler; ε = n · 1,5 V. Grafik yükselen bir doğru.", goster: ["ser"] },
            { metin: "Paralel: gerilim hep 1,5 V; pil sayısı akımı paylaştırır.", goster: ["par"] },
            { metin: "n = 3: seri 4,5 V, paralel 1,5 V.", goster: ["ps", "pp"] },
            { metin: "Karma: 4 pil, her sırada 2 pil seri, 2 sıra paralel → 2 · 1,5 = ==3 V==. Seri ile paralel arasında kalır.", gizle: ["ps", "pp"], goster: ["pk"] }
          ] },
        { tip: "ornek", baslik: "Karma bağlama", durum: "1,5 V'luk 6 özdeş pil, her sırada 3 pil seri olacak şekilde 2 sıra paralel bağlanıyor ve 9 Ω'luk ampule veriliyor. ε ve akımlar nedir?",
          adimlar: ["Bir sıradaki seri gerilim: 3 · 1,5 = 4,5 V. Paralel sıralar gerilimi artırmaz: ε = 4,5 V.", "Ampul akımı: I = 4,5 / 9 = 0,5 A.", "İki sıra eşit paylaşır: her sıradan 0,25 A geçer."],
          sonuc: "ε = 4,5 V; toplam akım 0,5 A, her sıradan 0,25 A." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Connecting cells in series increases the voltage; connecting them in parallel does not.*", metin: "Grafiğin ana mesajı." },
            { ikon: "✍️", baslik: "*Two rows of three cells in parallel give 4.5 V in total.*", metin: "Karma bağlamayı sayılarla anlat." }
          ] }
      ]
    },
    {
      baslik: "Hangi bağlama, hangi amaç için?",
      kisa: "Daha yüksek gerilim için seri, daha uzun ömür için paralel bağla.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📈", baslik: "Seri bağla", maddeler: ["Gerilim artar (ε = n·ε₁)", "Her pilden aynı akım geçer"] },
          sag: { ikon: "⏳", baslik: "Paralel bağla", maddeler: ["Gerilim tek pil kadar kalır", "Akım pillere paylaşılır, pil daha yavaş tükenir"] },
          oyun: [
            { metin: "Oyuncak araba 6 V ister, elinde 1,5 V'luk piller var.", cevap: "sol", neden: "6 / 1,5 = 4 pil seri bağlanır." },
            { metin: "El fenerinin 1,5 V'luk ampulü çok uzun süre yansın.", cevap: "sag", neden: "Gerilim yeterli, akım pillere paylaşılırsa piller daha yavaş tükenir." },
            { metin: "3 V isteyen bir devreye iki kalem pil bağlamak.", cevap: "sol", neden: "İki pil seri: 3 V." },
            { metin: "Aynı ε'lu iki pili aynı uçlarla (+ ile +) birleştirmek.", cevap: "sag", neden: "Aynı uçlar birleşiyorsa paralel bağlantıdır; gerilim artmaz." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*I connect the cells in series to obtain a higher voltage.*", metin: "Seçimi gerekçesiyle yaz." },
            { ikon: "✍️", baslik: "*The cells must be identical when connected in parallel.*", metin: "Paralel için ε'ların eşit olması gerektiğini ekle." }
          ] }
      ]
    },
    {
      baslik: "İç direnç ve uç gerilimi",
      kisa: "Gerçek pilin iç direnci vardır; devreye verilen gerilim ε'dan küçük olur.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "V uç", alt: "devreye verilen gerilim" }, "=", { t: "ε", alt: "ideal gerilim (emf)" }, "−", { t: "I·r", alt: "iç dirençte düşen" }
          ], aciklama: "r pilin iç direncidir. Devreden akım çekilmiyorsa (açık devre) V uç = ε. Tüm devre için ε = I·(R + r). Akım arttıkça uç gerilimi düşer." },
        { tip: "ornek", baslik: "İç dirençli pil", durum: "ε = 6 V ve iç direnci r = 1 Ω olan pil, 5 Ω'luk bir dirence bağlanıyor. Akım ve uç gerilimi nedir?",
          adimlar: ["Toplam direnç: R + r = 5 + 1 = 6 Ω. I = ε / (R + r) = 6 / 6 = 1 A.", "İç dirençte düşen: I·r = 1 · 1 = 1 V.", "V uç = ε − I·r = 6 − 1 = 5 V. Kontrol: I·R = 1 · 5 = 5 V ✓."],
          sonuc: "I = 1 A, V uç = 5 V (ε = 6 V'tan küçük). Sınavda böyle yaz: *The battery has an internal resistance, so the voltage across the resistor is less than the emf.*" },
        { tip: "not", metin: "Pilin ömrü: Zamanla iç direnç artar ve pil devreye enerji veremez hale gelir. Ömür, pilin malzeme kalitesine, kapasitesine ve çekilen akıma bağlıdır. ==Özdeş pillerde tükenme süresi çekilen akımla ters orantılıdır==: akım yarıya inerse süre 2 katına çıkar. Paralel bağlamanın pili daha yavaş tüketmesinin nedeni budur." },
        { tip: "tuzak", metin: "Pilin üstündeki 1,5 V yazısı, yalnızca akım çekilmediğinde ölçülen değerdir.", yanlis: "Pil devreye her zaman tam ε kadar gerilim verir.", dogru: "Akım çekildikçe iç dirençte I·r kadar gerilim düşer; devreye verilen gerilim ε'dan küçüktür." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Cell*: tek üreteç; ε volt cinsinden, geçen her coulomb'a verilen enerjidir. Gerçek pilde V uç = ε − I·r; ömür çekilen akımla ters orantılıdır.",
            "*Series*: ε_toplam = ε₁ + ε₂ + …; özdeş n pilde n·ε. + ucu diğerinin − ucuna bağlanır.",
            "Seride her pilden aynı akım geçer.",
            "*Parallel* (özdeş piller): ε_toplam = ε; akım pillere paylaşılır, piller daha yavaş tükenir.",
            "Paralel bağlı pillerin ε'u eşit olmalıdır; aynı uçlar birleşir.",
            "Ters bağlı pil toplamdan çıkarılır: 1,5 + 1,5 − 1,5 = 1,5 V.",
            "Karma: bir sıradaki seri gerilimi ver; sıra sayısı gerilimi artırmaz.",
            "Seri: yüksek gerilim. Paralel: uzun ömür."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "A battery has an emf of 6 V and an internal resistance of 1 Ω. It is connected to a 5 Ω resistor. What is the voltage across the resistor (the terminal voltage)?",
      opts: ["6 V", "5 V", "1 V", "4 V"], a: 1,
      why: "I = 6 / (5 + 1) = 1 A; V uç = ε − I·r = 6 − 1 = 5 V (aynı zamanda I·R = 5 V). 6 V iç direnci yok saymaktır; 1 V yalnızca iç dirençteki düşüştür." },
    { q: "Three identical 1.5 V cells are connected in series, but one of the cells is connected the wrong way round. What is the total emf?",
      opts: ["4.5 V", "3 V", "0 V", "1.5 V"], a: 3,
      why: "Ters bağlı pil toplamdan çıkarılır: 1,5 + 1,5 − 1,5 = 1,5 V. 4,5 V tuzak cevaptır, ters bağlanmayı yok sayar; 3 V yalnızca iki doğru pili sayar." },
    { q: "Two identical 1.5 V cells are connected in parallel to a 3 Ω bulb. What are the current through the bulb and the current through each cell?",
      opts: ["0.5 A and 0.25 A", "1 A and 0.5 A", "0.5 A and 0.5 A", "1 A and 1 A"], a: 0,
      why: "Paralelde ε = 1,5 V: I = 1,5 / 3 = 0,5 A. Akım iki pile eşit paylaşılır: her pil 0,25 A verir. 1 A cevabı pilleri seri sanmaktır." },
    { q: "The graph shows the total voltage of identical 1.5 V cells against the number of cells for two different connections. Which option correctly identifies the connections of lines I and II and their voltages for n = 4?",
      fig: { type: "graph", xlabel: "n", ylabel: "V (V)", xmax: 5, ymax: 8, lines: [{ from: [1, 1.5], to: [4, 6], label: "I" }, { from: [1, 1.5], to: [4, 1.5], label: "II" }], xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 1.5, label: "1.5" }, { v: 6, label: "6" }], caption: "Total voltage against number of cells" },
      opts: ["I parallel: 1.5 V; II series: 6 V", "I series: 1.5 V; II parallel: 6 V", "I series: 6 V; II parallel: 1.5 V", "I series: 4.5 V; II parallel: 1.5 V"], a: 2,
      why: "Pil sayısı arttıkça yükselen doğru seri bağlantıdır: n = 4'te 4 · 1,5 = 6 V. Sabit kalan doğru paralel bağlantıdır: 1,5 V." },
    { q: "Six identical 1.5 V cells are connected as two parallel rows, each row containing 3 cells in series. What is the total emf?",
      opts: ["9 V", "3 V", "4.5 V", "1.5 V"], a: 2,
      why: "Bir sıradaki seri gerilim 3 · 1,5 = 4,5 V'tur. Paralel bağlı sıralar gerilimi artırmaz; yalnızca akımı paylaşır. 9 V, 6 pilin hepsini seri saymaktır." }
  ]
};
