/* Kitora not defteri · ch301 · 3.1 Mol ve Avogadro Sayısı
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry, Exam 2: mol kavramı, Avogadro sayısı). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch301",
  amac: "Bu konu *mole* yani molü anlatıyor: atomlar ve moleküller çok küçük olduğu için onları \"düzine\" gibi büyük bir paketle sayarız. *Avogadro's number* ile mol ve tanecik sayısı arasında dönüşüm yapmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Neden mol? Taneciği paketle saymak",
      kisa: "Bir mol, 6,02×10²³ tanecikli dev bir paket; kimyanın düzinesi.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "1 düzine", alt: "12 tane yumurta" }, "→",
            { t: "1 *mole*", alt: "6,02×10²³ tane tanecik" }
          ], aciklama: "Yumurtayı düzineyle saydığın gibi kimyacı da atom ve molekülleri molle sayar. Bir mol suyun kütlesi yalnızca 18 gramdır (yaklaşık 18 mL); sayısı ise inanılmaz büyüktür." },
        { tip: "kavramlar", kartlar: [
            { ikon: "📦", terim: "Mole", tr: "mol", tanim: "Tam ==6,02×10²³== tane taneciği içeren madde miktarı birimi (sembolü mol).", ornek: "1 mol demir atomu, 1 mol su molekülü, 1 mol Na⁺ iyonu." },
            { ikon: "🔢", terim: "Avogadro's number", tr: "Avogadro sayısı", tanim: "1 moldeki tanecik sayısı: ==N_A = 6,02×10²³== tanecik/mol.", ornek: "0,5 mol Fe → 3,01×10²³ tane Fe atomu." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*One mole of any substance contains 6.02 × 10²³ particles.*" },
            { ikon: "💬", baslik: "Avogadro sayısını tanımla", metin: "*Avogadro's number is the number of particles in one mole.*" }
          ] }
      ]
    },
    {
      baslik: "Taneciğin türü: atom, molekül, iyon, formül birimi",
      kisa: "Mol her tür taneciği sayar; önce neyi saydığını söyle.",
      bloklar: [
        { tip: "tablo", baslik: "1 mol maddede ne kadar tanecik var?", head: ["Madde", "Tanecik türü", "1 moldeki tanecik", "1 moldeki toplam atom"], rows: [
            ["Fe", "atom", "6,02×10²³ atom", "1 mol atom"],
            ["H₂O", "molekül", "6,02×10²³ molekül", "3 mol atom (2 mol H + 1 mol O)"],
            ["CO₂", "molekül", "6,02×10²³ molekül", "3 mol atom (1 mol C + 2 mol O)"],
            ["NaCl", "formül birimi (iyonik)", "6,02×10²³ NaCl birimi", "2 mol iyon (Na⁺ ve Cl⁻)"]
          ], not: "İyonik bileşiklerde ayrı bir molekül yoktur; *formula unit* sayılır." },
        { tip: "ikili", sol: { ikon: "🔵", baslik: "Molekül ya da formül birimi sayısı", maddeler: ["Maddenin kendi taneciği", "n × 6,02×10²³"] },
          sag: { ikon: "⚛️", baslik: "Atom sayısı", maddeler: ["Moleküldeki atomların toplamı", "Molekül sayısı × atom sayısı"] },
          oyun: [
            { metin: "1 mol H₂O'da 6,02×10²³ tane H₂O vardır.", cevap: "sol", neden: "Maddenin kendi taneciği, yani molekül sayısı." },
            { metin: "1 mol H₂O'da 1,204×10²⁴ tane H atomu vardır.", cevap: "sag", neden: "Her molekülde 2 H var: 2 × 6,02×10²³ atom." },
            { metin: "0,5 mol CO₂'de 3,01×10²³ tane CO₂ vardır.", cevap: "sol", neden: "0,5 × 6,02×10²³ = 3,01×10²³ molekül." },
            { metin: "1 mol CO₂'de toplam 3 mol atom vardır.", cevap: "sag", neden: "1 C + 2 O = 3 atom; bu atom sayısıdır." }
          ] },
        { tip: "tuzak", metin: "\"1 mol H₂O\" ile \"1 mol atom\" aynı şey değildir. Soru hangi tanecik türünü sorduğunu söyler; atom sorulursa molekül sayısını atom sayısıyla çarp.", yanlis: "1 mol H₂O'da 6,02×10²³ tane atom vardır.", dogru: "1 mol H₂O'da 6,02×10²³ molekül, 3 × 6,02×10²³ atom vardır." }
      ]
    },
    {
      baslik: "Mol ile tanecik sayısı arasında dönüşüm",
      kisa: "Tanecik sayısı = mol × N_A; mol sayısı = tanecik sayısı ÷ N_A.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "N", alt: "tanecik sayısı" }, "=",
            { t: "n", alt: "mol sayısı" }, "×",
            { t: "N_A", alt: "6,02×10²³" }
          ], aciklama: "Mol sayısını bulmak için: n = N ÷ N_A." },
        { tip: "ornek", baslik: "0,5 mol CO₂ kaç molekül, kaç atom içerir?", durum: "Okul laboratuvarında 0,5 mol CO₂ gazı toplandı. Molekül sayısını ve toplam atom sayısını bul.", adimlar: [
            "Molekül sayısı = n × N_A = 0,5 × 6,02×10²³ = 3,01×10²³ molekül.",
            "Her CO₂ molekülünde 1 C + 2 O = 3 atom vardır.",
            "Toplam atom = 3,01×10²³ × 3 = 9,03×10²³ atom.",
            "Kontrol: 0,5 mol molekül × 3 = 1,5 mol atom; 1,5 × 6,02×10²³ = 9,03×10²³ ✓"
          ], sonuc: "3,01×10²³ molekül ve 9,03×10²³ atom." },
        { tip: "ornek", baslik: "1,806×10²⁴ tane H₂O kaç mol eder?", durum: "Bir bardakta 1,806×10²⁴ su molekülü var. Kaç mol su vardır, kaç mol atom içerir?", adimlar: [
            "n = N ÷ N_A = 1,806×10²⁴ ÷ 6,02×10²³ = 3 mol H₂O.",
            "Her H₂O 3 atom içerir: 3 mol × 3 = 9 mol atom.",
            "Atom sayısı = 9 × 6,02×10²³ = 5,418×10²⁴ atom.",
            "Kontrol: 1,806×10²⁴ × 3 = 5,418×10²⁴ ✓"
          ], sonuc: "3 mol H₂O; 9 mol atom (5,418×10²⁴ atom)." }
      ]
    },
    {
      baslik: "Grafikte mol ve tanecik: doğru orantı",
      kisa: "Mol sayısı iki katına çıkarsa tanecik sayısı da iki katına çıkar.",
      bloklar: [
        { tip: "grafik", baslik: "Tanecik sayısı mol sayısıyla doğru orantılıdır", xlabel: "Mol sayısı n (mol)", ylabel: "Tanecik sayısı N (×10²³)", xmax: 5, ymax: 30,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [{ v: 6.02, label: "6,02" }, { v: 12.04, label: "12,04" }, { v: 24.08, label: "24,08" }],
          ogeler: [
            { id: "d", tip: "cizgi", renk: 0, from: [0, 0], to: [4.9, 29.5], etiket: "N", gizli: true },
            { id: "p1", tip: "nokta", renk: 1, x: 1, y: 6.02, kilavuz: true, gizli: true },
            { id: "p2", tip: "nokta", renk: 1, x: 2, y: 12.04, kilavuz: true, gizli: true },
            { id: "p4", tip: "nokta", renk: 1, x: 4, y: 24.08, kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Orijinden geçen doğru: hiç mol yoksa hiç tanecik de yoktur. ==Eğim N_A'dır.==", goster: ["d"] },
            { metin: "1 mol → 6,02×10²³ tanecik.", goster: ["p1"] },
            { metin: "2 mol → iki kat: 12,04×10²³ = 1,204×10²⁴ tanecik.", goster: ["p2"] },
            { metin: "4 mol → dört kat: 24,08×10²³ = 2,408×10²⁴ tanecik.", goster: ["p4"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The graph shows that the number of particles is directly proportional to the number of moles.*" },
            { ikon: "💬", baslik: "Eğimi yorumla", metin: "*The slope of the line is equal to Avogadro's number.*" }
          ] }
      ]
    },
    {
      baslik: "Mol sayısı ve atom sayısı birlikte",
      kisa: "Önce mol sayısını bul; sonra tanecik ya da atom sayısına geç.",
      bloklar: [
        { tip: "adimlar", baslik: "Üç adımda çöz", adimlar: [
            { baslik: "Mol sayısını yaz", metin: "Verilen sayıyı mole çevir (N ÷ N_A)." },
            { baslik: "Formüle bak", metin: "Bir molekülde kaç atom, hangi tür atom var?" },
            { baslik: "Çarp", metin: "Mol × atom sayısı = mol atom; ardından × N_A." }
          ] },
        { tip: "ornek", baslik: "0,2 mol C₂H₆ kaç atom içerir?", durum: "Bir etan (C₂H₆) tüpünde 0,2 mol gaz var. Toplam atom sayısını bul.", adimlar: [
            "Her C₂H₆ molekülünde 2 C + 6 H = 8 atom vardır.",
            "Toplam atom = 0,2 mol × 8 = 1,6 mol atom.",
            "Atom sayısı = 1,6 × 6,02×10²³ = 9,632×10²³ atom.",
            "Kontrol: molekül sayısı 0,2 × 6,02×10²³ = 1,204×10²³; × 8 = 9,632×10²³ ✓"
          ], sonuc: "9,632×10²³ atom (1,6 mol atom)." },
        { tip: "ornek", baslik: "Formüldeki indis: mol atom sayısı", durum: "a) 0,300 mol P₂O₃ kaç mol O atomu içerir? b) Kaç mol (NH₄)₂SO₄ içinde 0,800 mol O atomu bulunur?", adimlar: [
            "Formüldeki alt indis, 1 mol bileşikteki o atomun mol sayısıdır.",
            "a) P₂O₃'te 3 O var: 0,300 × 3 = 0,900 mol O.",
            "b) (NH₄)₂SO₄'te 4 O var (SO₄): 0,800 ÷ 4 = 0,200 mol bileşik.",
            "Kontrol: 0,200 mol × 4 = 0,800 mol O ✓"
          ], sonuc: "a) 0,900 mol O  b) 0,200 mol (NH₄)₂SO₄." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*First, find the number of moles. Then multiply by the number of atoms in one molecule.*" },
            { ikon: "🔢", baslik: "Sonucu nasıl yaz?", metin: "Derste cevaplar bilimsel gösterimle ve üç anlamlı basamakla istenir: 9,63×10²³ gibi." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "1 *mole* = 6,02×10²³ tanecik; bu sayıya *Avogadro's number* (N_A) denir.",
            "Mol; atom, molekül, iyon ya da *formula unit* için kullanılabilir; önce neyi saydığını belirt.",
            "Tanecik sayısı: N = n × N_A. Mol sayısı: n = N ÷ N_A.",
            "Atom sayısı = molekül sayısı × moleküldeki atom sayısı.",
            "1 mol H₂O → 6,02×10²³ molekül, 3 mol atom; 1 mol NaCl → 1 mol formül birimi, 2 mol iyon.",
            "Grafikte N–n doğrusal ve orijinden geçer; eğim N_A'dır.",
            "Çözerken mol sayısını önce bul; sayıları üssüyle birlikte çarp ve böl."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "A student wants to calculate the number of molecules in 2 mol of H₂O. Which value is correct?",
      opts: ["6.02×10²³", "1.204×10²⁴", "3.612×10²⁴", "1.806×10²⁴"], a: 1,
      why: "N = n × N_A = 2 × 6,02×10²³ = 1,204×10²⁴ molekül. 3,612×10²⁴ (C) toplam atom sayısıdır (6 mol atom); soru molekül sayısını sorduğu için yanlıştır." },
    { q: "What is the total number of atoms in 0.25 mol of NH₃ gas?",
      opts: ["1.505×10²³", "3.01×10²³", "6.02×10²³", "2.408×10²⁴"], a: 2,
      why: "Her NH₃ molekülünde 4 atom (1 N + 3 H) vardır: 0,25 × 4 = 1 mol atom = 6,02×10²³. 1,505×10²³ (A) yalnızca molekül sayısıdır (0,25 × 6,02×10²³); atomla çarpmayı unutmaktır." },
    { q: "The table gives the amounts of three samples. Which sample contains the most moles?",
      fig: { type: "table", head: ["Sample", "Amount given"], rows: [["A", "0.1 mol"], ["B", "3.01×10²³ particles"], ["C", "1.204×10²⁴ particles"]], caption: "Three samples" },
      opts: ["A, because it is the only one given in moles", "B, because its exponent is larger", "A and B contain equal moles", "C, because 1.204×10²⁴ ÷ 6.02×10²³ = 2 mol"], a: 3,
      why: "B = 0,5 mol, C = 2 mol, A = 0,1 mol; en çoğu C'dedir. Üssü büyük olan sayının mol olduğunu sanmak (B) yaygın hatadır; hepsini önce mole çevir." },
    { q: "In the graph, the number of particles (N) of a substance is plotted against the number of moles (n). What does the slope of the line give?",
      fig: { type: "graph", xlabel: "n (mol)", ylabel: "N (×10²³)", xmax: 5, ymax: 30, lines: [{ from: [0, 0], to: [4.9, 29.5], label: "N" }], points: [{ q: 2, p: 12.04, label: "2 mol", guides: true }], xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 12.04, label: "12.04" }], caption: "N–n graph" },
      opts: ["The molar mass", "The molar volume", "Avogadro's number (N_A)", "The number of atoms in a molecule"], a: 2,
      why: "N = n × N_A olduğundan N–n doğrusunun eğimi N_A = 6,02×10²³ tanecik/mol'dür. Mol kütlesi (A) kütle–mol grafiğinin eğimidir; karıştırma." },
    { q: "1 mol of Na atoms is compared with 1 mol of Fe atoms. Which statement is correct?",
      opts: ["Fe has more atoms", "Both have the same number of atoms but different masses", "Both have the same mass", "Na has fewer atoms"], a: 1,
      why: "1 mol her maddede 6,02×10²³ tanecik demektir; kütle ise mol kütlesine bağlıdır (Na 23 g, Fe 56 g). \"Ağır olan daha çok atom içerir\" (A) yanılgısına düşme." }
  ]
};
