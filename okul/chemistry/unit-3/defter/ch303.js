/* Kitora not defteri · ch303 · 3.3 Basit ve Molekül Formül
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry, Exam 2: basit ve molekül formül). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch303",
  amac: "Bu konu *empirical formula* (basit formül) ile *molecular formula* (molekül formülü) arasındaki farkı anlatıyor. Kütle ya da yüzde bileşim verildiğinde atom oranını bulmayı, sonra mol kütlesiyle gerçek molekül formülüne ulaşmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "İki formül: basit ve molekül",
      kisa: "Basit formül oranı, molekül formülü gerçek atom sayısını söyler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "➗", terim: "Empirical formula", tr: "basit formül", tanim: "Bileşikteki atomların ==en küçük tam sayılı oranını== gösteren formül. Daha fazla sadeleşmez.", ornek: "Glikozun basit formülü CH₂O." },
            { ikon: "🧬", terim: "Molecular formula", tr: "molekül formülü", tanim: "Bir molekülde bulunan atomların ==gerçek sayısını== gösteren formül; basit formülün tam sayı katıdır: (basit formül)ₙ.", ornek: "Glikozun molekül formülü C₆H₁₂O₆ (n = 6)." }
          ] },
        { tip: "tablo", baslik: "Aynı basit formül, farklı moleküller", head: ["Madde", "Molekül formülü", "Basit formül", "n"], rows: [
            ["Su", "H₂O", "H₂O", "1"],
            ["Hidrojen peroksit", "H₂O₂", "HO", "2"],
            ["Etilen", "C₂H₄", "CH₂", "2"],
            ["Etan", "C₂H₆", "CH₃", "2"],
            ["Benzen", "C₆H₆", "CH", "6"],
            ["Glikoz", "C₆H₁₂O₆", "CH₂O", "6"],
            ["Sofra tuzu", "NaCl", "NaCl", "—"]
          ], not: "İyonik bileşiklerde (NaCl gibi) molekül yoktur; yazılan formül zaten basit formüldür." },
        { tip: "ikili", sol: { ikon: "➗", baslik: "Basit formül", maddeler: ["Atomların en küçük tam sayılı oranı", "Gerçek sayıyı söylemez"] },
          sag: { ikon: "🧬", baslik: "Molekül formülü", maddeler: ["Moleküldeki gerçek atom sayıları", "Basit formülün n katı"] },
          oyun: [
            { metin: "CH₂: etilende C ve H atomlarının 1 : 2 oranı.", cevap: "sol", neden: "Yalnızca oran verir, atom sayısını vermez." },
            { metin: "C₂H₄: etilen molekülünde 2 C ve 4 H vardır.", cevap: "sag", neden: "Gerçek atom sayıları yazılmış." },
            { metin: "H₂O₂: bir molekülde 2 H ve 2 O vardır.", cevap: "sag", neden: "Hidrojen peroksitin molekül formülü." },
            { metin: "HO: hidrojen peroksitte H ve O atomları 1 : 1 oranındadır.", cevap: "sol", neden: "Oranın en sade hali." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The empirical formula shows the simplest whole-number ratio of atoms.*" },
            { ikon: "💬", baslik: "Fark", metin: "*The molecular formula shows the actual number of atoms in one molecule.*" }
          ] }
      ]
    },
    {
      baslik: "Yüzde bileşim ve hidratlar",
      kisa: "Yüzde = element kütlesi ÷ M × 100; hidratta x, su/tuz mol oranıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "% element", alt: "kütlece yüzde" }, "=",
            { t: "atom sayısı × atom kütlesi", alt: "1 moldeki element kütlesi" }, "÷",
            { t: "M", alt: "bileşiğin mol kütlesi" }, "×",
            { t: "100" }
          ] },
        { tip: "ornek", baslik: "CaCO₃'ün yüzde bileşimi", durum: "Tebeşir ve kireç taşının ana maddesi CaCO₃'tür (Ca = 40, C = 12, O = 16).", adimlar: [
            "M(CaCO₃) = 40 + 12 + 3 × 16 = 100 g/mol.",
            "%Ca = 40 ÷ 100 × 100 = %40.",
            "%C = 12 ÷ 100 × 100 = %12.",
            "%O = 48 ÷ 100 × 100 = %48.",
            "Kontrol: 40 + 12 + 48 = 100 ✓"
          ], sonuc: "%40 Ca, %12 C, %48 O." },
        { tip: "ornek", baslik: "Hidrat: MgSO₄·xH₂O", durum: "4,92 g MgSO₄·xH₂O ısıtılıp bütün suyu uzaklaştırılınca kalan MgSO₄ 2,40 g geliyor (Mg = 24, S = 32, O = 16, H = 1). x kaçtır?", adimlar: [
            "M(MgSO₄) = 24 + 32 + 64 = 120 g/mol → n = 2,40 ÷ 120 = 0,02 mol.",
            "Giden su = 4,92 − 2,40 = 2,52 g → n(H₂O) = 2,52 ÷ 18 = 0,14 mol.",
            "Oran: su ÷ tuz = 0,14 ÷ 0,02 = 7.",
            "Kontrol: 0,02 × (120 + 7 × 18) = 0,02 × 246 = 4,92 g ✓"
          ], sonuc: "x = 7: MgSO₄·7H₂O." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Percent by mass = (mass of the element in one mole ÷ molar mass) × 100.*" }
          ] }
      ]
    },
    {
      baslik: "Kütleden ya da yüzdeden basit formül",
      kisa: "Kütleyi mole çevir, en küçük mole böl, tam sayıya getir.",
      bloklar: [
        { tip: "adimlar", baslik: "Basit formül bulma adımları", adimlar: [
            { baslik: "Gram yaz", metin: "Kütle verildiyse olduğu gibi al; yüzde verildiyse 100 g numune varsay (%40 → 40 g)." },
            { baslik: "Mole çevir", metin: "Her elementin kütlesini atom kütlesine böl." },
            { baslik: "En küçüğe böl", metin: "Bütün mol sayılarını içlerindeki en küçüğe böl." },
            { baslik: "Tam sayı yap", metin: "Oranlar tam sayı değilse hepsini aynı sayıyla çarp (sonraki başlık)." }
          ] },
        { tip: "ornek", baslik: "Birimler karışık verilince", durum: "Bir bileşiğin analizinde 7,2 g C, 1,2 mol H ve 3,612×10²³ tane O atomu bulundu (C = 12). Basit formülünü bul.", adimlar: [
            "Her şeyi mole çevir: n(C) = 7,2 ÷ 12 = 0,6 mol; n(H) = 1,2 mol (zaten mol).",
            "O atomları: n(O) = 3,612×10²³ ÷ 6,02×10²³ = 0,6 mol.",
            "En küçüğe (0,6) böl: C = 1; H = 1,2 ÷ 0,6 = 2; O = 1.",
            "Oran C : H : O = 1 : 2 : 1 → CH₂O.",
            "Kontrol: mol sayıları 0,6 : 1,2 : 0,6 = 1 : 2 : 1 ✓"
          ], sonuc: "Basit formül CH₂O. Kütle, mol ve tanecik sayısı karışık verilse de önce hepsini mole çevir." },
        { tip: "ornek", baslik: "Üç elementli bileşik", durum: "Bir bileşiğin 7,2 g C, 1,2 g H ve 9,6 g O içerdiği bulundu (C = 12, H = 1, O = 16).", adimlar: [
            "n(C) = 7,2 ÷ 12 = 0,6 mol; n(H) = 1,2 ÷ 1 = 1,2 mol; n(O) = 9,6 ÷ 16 = 0,6 mol.",
            "En küçük 0,6'dır: C = 1; H = 1,2 ÷ 0,6 = 2; O = 1.",
            "Oran C : H : O = 1 : 2 : 1 → CH₂O.",
            "Kontrol: 12 + 2 + 16 = 30 g/mol; 18 g ÷ 30 = 0,6 mol ✓"
          ], sonuc: "Basit formül CH₂O." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Divide each mass by the atomic mass to find the moles, then divide by the smallest number of moles.*" }
          ] }
      ]
    },
    {
      baslik: "Oran tam sayı çıkmazsa",
      kisa: "Ondalık oranı yuvarlama; tam sayı olana kadar çarp.",
      bloklar: [
        { tip: "tablo", baslik: "Ondalık oranı tam sayıya çevirme", head: ["En küçüğe bölünce oran", "Çarpan", "Tam sayılı oran"], rows: [
            ["1 : 1,5", "× 2", "2 : 3"],
            ["1 : 1,33", "× 3", "3 : 4"],
            ["1 : 1,25", "× 4", "4 : 5"],
            ["1 : 1,67", "× 3", "3 : 5"]
          ], not: "Küçük sapmaları (1,98 ≈ 2 gibi) yuvarla; ,5 / ,33 / ,25 / ,67 gibi kesirli oranları ise çarpanla çöz." },
        { tip: "ornek", baslik: "Pas (demir oksit) formülü", durum: "Paslanmış bir çividen alınan örnekte 11,2 g Fe ve 4,8 g O var (Fe = 56, O = 16).", adimlar: [
            "n(Fe) = 11,2 ÷ 56 = 0,2 mol; n(O) = 4,8 ÷ 16 = 0,3 mol.",
            "En küçüğe (0,2) böl: Fe = 1; O = 0,3 ÷ 0,2 = 1,5.",
            "1 : 1,5 tam sayı değil; hepsini 2 ile çarp: Fe = 2, O = 3.",
            "Kontrol: 2 × 56 + 3 × 16 = 160 g/mol; 0,1 mol Fe₂O₃ = 16 g = 11,2 + 4,8 ✓"
          ], sonuc: "Basit formül Fe₂O₃." },
        { tip: "tuzak", metin: "1,5'i 2'ye yuvarlamak (Fe₂O₂ ya da FeO₂ gibi) bambaşka bir bileşik verir. Oranı bozmadan her sayıyı aynı çarpanla çarp.", yanlis: "1 : 1,5 ≈ 1 : 2 → FeO₂.", dogru: "1 : 1,5 → ×2 → 2 : 3 → Fe₂O₃." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The ratio is not a whole number, so multiply all the numbers by 2.*" }
          ] }
      ]
    },
    {
      baslik: "Basit formülden molekül formülüne",
      kisa: "n = molekülün mol kütlesi ÷ basit formülün kütlesi.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "n", alt: "tam sayı katı" }, "=",
            { t: "M(molekül)", alt: "verilir" }, "÷",
            { t: "M(basit formül)", alt: "atomlardan hesaplanır" }
          ], aciklama: "Molekül formülü = (basit formül)ₙ: bütün alt indisleri n ile çarp." },
        { tip: "ornek", baslik: "Yüzde bileşim ve mol kütlesinden molekül formülü", durum: "Bir hidrokarbonun kütlece %85,7'si C, %14,3'ü H'dir. Mol kütlesi 56 g/mol'dür (C = 12, H = 1).", adimlar: [
            "100 g numune: 85,7 g C ve 14,3 g H. n(C) = 85,7 ÷ 12 ≈ 7,14 mol; n(H) = 14,3 mol.",
            "7,14'e böl: C = 1; H ≈ 2 → basit formül CH₂ (M = 14 g/mol).",
            "n = 56 ÷ 14 = 4.",
            "Molekül formülü = (CH₂)₄ = C₄H₈.",
            "Kontrol: 4 × 12 + 8 × 1 = 56 ✓"
          ], sonuc: "Molekül formülü C₄H₈." },
        { tip: "grafik", baslik: "(CH₂O)ₙ ailesi: n arttıkça mol kütlesi artar", xlabel: "n (basit formül katı)", ylabel: "Mol kütlesi (×10 g/mol)", xmax: 7, ymax: 20,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 6, label: "6" }],
          yticks: [{ v: 3, label: "30" }, { v: 6, label: "60" }, { v: 9, label: "90" }, { v: 18, label: "180" }],
          ogeler: [
            { id: "d", tip: "cizgi", renk: 0, from: [0, 0], to: [6.5, 19.5], etiket: "M", gizli: true },
            { id: "n1", tip: "nokta", renk: 1, x: 1, y: 3, kilavuz: true, gizli: true },
            { id: "y1", tip: "yazi", x: 0.9, y: 4.3, metin: "CH₂O", hiza: "end", gizli: true },
            { id: "n2", tip: "nokta", renk: 1, x: 2, y: 6, kilavuz: true, gizli: true },
            { id: "y2", tip: "yazi", x: 1.9, y: 7.3, metin: "C₂H₄O₂", hiza: "end", gizli: true },
            { id: "n3", tip: "nokta", renk: 1, x: 3, y: 9, kilavuz: true, gizli: true },
            { id: "y3", tip: "yazi", x: 2.9, y: 10.3, metin: "C₃H₆O₃", hiza: "end", gizli: true },
            { id: "n6", tip: "nokta", renk: 2, x: 6, y: 18, kilavuz: true, gizli: true },
            { id: "y6", tip: "yazi", x: 5.9, y: 19.1, metin: "C₆H₁₂O₆", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Basit formül CH₂O'nun kütlesi 30 g/mol. n katı için M = 30 × n: orijinden geçen bir doğru.", goster: ["d"] },
            { metin: "n = 1: CH₂O (30 g/mol).", goster: ["n1", "y1"] },
            { metin: "n = 2: C₂H₄O₂, 60 g/mol. n = 3: C₃H₆O₃, 90 g/mol. Aynı oran, farklı moleküller.", goster: ["n2", "y2", "n3", "y3"] },
            { metin: "n = 6: C₆H₁₂O₆, 180 g/mol. M = 180 verilirse n = 180 ÷ 30 = 6.", goster: ["n6", "y6"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The molecular formula is a whole-number multiple of the empirical formula: n = molar mass ÷ empirical formula mass.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Empirical formula*: atomların en küçük tam sayılı oranı. *Molecular formula*: gerçek atom sayıları, (basit formül)ₙ.",
            "İyonik bileşiklerin formülü zaten basit formüldür (NaCl, Fe₂O₃).",
            "Kütlece yüzde = (elementin 1 moldeki kütlesi ÷ M) × 100.",
            "Basit formül: gram (ya da %) → mol → en küçüğe böl → gerekirse çarp.",
            "Kesirli oranlar: ,5 → ×2; ,33 ve ,67 → ×3; ,25 ve ,75 → ×4. Yuvarlama yapma.",
            "n = M(molekül) ÷ M(basit formül); alt indisleri n ile çarp.",
            "Grafikte M–n doğrusu orijinden geçer; eğim basit formülün kütlesidir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "What is the empirical formula of the compound C₂H₆?",
      opts: ["CH", "CH₂", "CH₃", "C₂H₆"], a: 2,
      why: "C₂H₆ alt indislerinin ortak böleni 2'dir; 2'ye bölünce CH₃ bulunur. CH₂ (B) hidrojeni yanlış sadeleştirmektir; C₂H₆ (D) ise molekül formülüdür." },
    { q: "A student is looking for the empirical formula of a compound containing 3.2 g of S and 3.2 g of O (S = 32, O = 16). What is the result?",
      opts: ["SO", "SO₂", "SO₃", "S₂O"], a: 1,
      why: "n(S) = 3,2 ÷ 32 = 0,1 mol; n(O) = 3,2 ÷ 16 = 0,2 mol; oran 1 : 2 → SO₂. Kütleler eşit diye atom sayılarının eşit olduğunu sanmak (SO, A) yaygın hatadır." },
    { q: "The table gives the analysis of a compound (Mg = 24, N = 14 g/mol). What is its empirical formula?",
      fig: { type: "table", head: ["Element", "Mass"], rows: [["Mg", "7.2 g"], ["N", "2.8 g"]], caption: "Analysis result" },
      opts: ["MgN", "Mg₂N₃", "Mg₃N", "Mg₃N₂"], a: 3,
      why: "n(Mg) = 7,2 ÷ 24 = 0,3 mol; n(N) = 2,8 ÷ 14 = 0,2 mol; oran 3 : 2 → Mg₃N₂. Oranı ters yazmak (Mg₂N₃, B) en sık yapılan hatadır." },
    { q: "A compound with the empirical formula CH₂ has a molar mass of 42 g/mol. What is its molecular formula?",
      opts: ["C₃H₆", "CH₂", "C₂H₄", "C₄H₈"], a: 0,
      why: "M(CH₂) = 14 g/mol; n = 42 ÷ 14 = 3 → (CH₂)₃ = C₃H₆. C₂H₄ (C) n = 2 demektir ve 28 g/mol verir." },
    { q: "The graph shows the molar mass of compounds with the empirical formula CH₂O against n. What is the molecular formula of the compound with a molar mass of 120 g/mol?",
      fig: { type: "graph", xlabel: "n", ylabel: "M (×10 g/mol)", xmax: 7, ymax: 20, lines: [{ from: [0, 0], to: [6.5, 19.5], label: "M" }], points: [{ q: 1, p: 3, label: "CH₂O", guides: true }, { q: 6, p: 18, label: "C₆H₁₂O₆", guides: true }], xticks: [{ v: 1, label: "1" }, { v: 6, label: "6" }], yticks: [{ v: 3, label: "30" }, { v: 18, label: "180" }], caption: "The (CH₂O)ₙ family" },
      opts: ["C₃H₆O₃", "C₄H₈O₄", "C₆H₁₂O₆", "C₂H₄O₂"], a: 1,
      why: "n = 120 ÷ 30 = 4 → (CH₂O)₄ = C₄H₈O₄. C₃H₆O₃ (A) 90 g/mol'dür; n'yi yanlış okumak bu şıkka götürür." }
  ]
};
