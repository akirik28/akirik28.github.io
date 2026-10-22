/* Kitora not defteri · ph303 · 3.3 Üreteçlerin Bağlanması (Cells in Series and Parallel)
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Physics, Unit 3; FİZ.10.3.5) + MEB FİZ.10 Elektrik. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph303",
  amac: "Bu defter *cell* yani üreteç (pil) bağlantılarını anlatıyor: üreteçleri seri ve paralel bağlayınca devreye verilen gerilimin nasıl değiştiğini, ters bağlamanın ne yaptığını ve karma bağlamayı öğreneceksin. Üreteçler ideal alınır, iç direnç ihmal edilir.",
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
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Cell*: tek üreteç; ε volt cinsinden, geçen her coulomb'a verilen enerjidir. Bu düzeyde iç direnç ihmal edilir.",
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
    { q: "1,5 V'luk 4 özdeş pil seri bağlanıyor. Toplam emf kaç V'tur?",
      opts: ["1,5 V", "3 V", "7,5 V", "6 V"], a: 3,
      why: "Seride ε toplanır: 4 · 1,5 = 6 V. 1,5 V paralel bağlantının sonucudur; 7,5 V ise 5 pil için doğru olurdu." },
    { q: "1,5 V'luk üç özdeş pil seri bağlanmış, ancak pillerden biri ters çevrilmiştir. Toplam emf kaç V'tur?",
      opts: ["4,5 V", "1,5 V", "3 V", "0 V"], a: 1,
      why: "Ters bağlı pil toplamdan çıkarılır: 1,5 + 1,5 − 1,5 = 1,5 V. 4,5 V tuzak cevaptır, ters bağlanmayı yok sayar; 3 V yalnızca iki doğru pili sayar." },
    { q: "1,5 V'luk iki özdeş pil paralel bağlanarak 3 Ω'luk bir ampule bağlanıyor. Ampulden geçen akım ve her pilden geçen akım nedir?",
      opts: ["0,5 A ve 0,25 A", "1 A ve 0,5 A", "0,5 A ve 0,5 A", "1 A ve 1 A"], a: 0,
      why: "Paralelde ε = 1,5 V: I = 1,5 / 3 = 0,5 A. Akım iki pile eşit paylaşılır: her pil 0,25 A verir. 1 A cevabı pilleri seri sanmaktır." },
    { q: "Grafik, 1,5 V'luk özdeş pillerin iki farklı bağlanışında toplam gerilimi pil sayısına göre gösteriyor. I ve II doğrularının bağlantı türleri ile n = 4 için gerilimleri hangi şıkta doğru verilmiştir?",
      fig: { type: "graph", xlabel: "n", ylabel: "V (V)", xmax: 5, ymax: 8, lines: [{ from: [1, 1.5], to: [4, 6], label: "I" }, { from: [1, 1.5], to: [4, 1.5], label: "II" }], xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 1.5, label: "1,5" }, { v: 6, label: "6" }], caption: "Toplam gerilim – pil sayısı" },
      opts: ["I paralel: 1,5 V; II seri: 6 V", "I seri: 1,5 V; II paralel: 6 V", "I seri: 6 V; II paralel: 1,5 V", "I seri: 4,5 V; II paralel: 1,5 V"], a: 2,
      why: "Pil sayısı arttıkça yükselen doğru seri bağlantıdır: n = 4'te 4 · 1,5 = 6 V. Sabit kalan doğru paralel bağlantıdır: 1,5 V." },
    { q: "1,5 V'luk 6 özdeş pil, her sırada 3 pil seri olacak şekilde iki sıra hâlinde paralel bağlanıyor. Toplam emf kaç V'tur?",
      opts: ["9 V", "4,5 V", "3 V", "1,5 V"], a: 1,
      why: "Bir sıradaki seri gerilim 3 · 1,5 = 4,5 V'tur. Paralel bağlı sıralar gerilimi artırmaz; yalnızca akımı paylaşır. 9 V, 6 pilin hepsini seri saymaktır." }
  ]
};
