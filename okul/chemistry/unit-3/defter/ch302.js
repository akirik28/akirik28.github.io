/* Kitora not defteri · ch302 · 3.2 Mol Kütlesi ve Mol Hacmi
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry, Exam 2: mol kütlesi, mol hacmi, bilinmeyen mol kütlesi). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch302",
  amac: "Bu konu *molar mass* ve *molar volume* kavramlarını anlatıyor: 1 mol maddenin kaç gram, 1 mol gazın kaç litre olduğunu. Kütle, mol, tanecik ve hacim arasında \"mol köprüsüyle\" dönüşüm yapmayı ve bilinmeyen mol kütlesini bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Mol kütlesi: 1 mol kaç gram?",
      kisa: "Mol kütlesi, atom kütlelerinin toplamıdır; birimi g/mol.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Molar mass", tr: "mol kütlesi (M)", tanim: "1 mol maddenin gram cinsinden kütlesi; birimi ==g/mol==. Formüldeki atom kütleleri toplanarak bulunur.", ornek: "H₂O için M = 2 × 1 + 16 = 18 g/mol." },
            { ikon: "🧮", terim: "Atomic mass", tr: "atom kütlesi", tanim: "Bir elementin periyodik cetvelde verilen atom kütlesi. Sayısal değeri g/mol olarak mol kütlesine eşittir.", ornek: "C = 12, O = 16, Na = 23, Cl = 35,5." }
          ] },
        { tip: "tablo", baslik: "Mol kütlesi nasıl hesaplanır?", head: ["Madde", "Hesap", "M (g/mol)"], rows: [
            ["H₂O", "2 × 1 + 16", "18"],
            ["CO₂", "12 + 2 × 16", "44"],
            ["NH₃", "14 + 3 × 1", "17"],
            ["NaCl", "23 + 35,5", "58,5"],
            ["CaCO₃", "40 + 12 + 3 × 16", "100"],
            ["C₆H₁₂O₆ (glikoz)", "6 × 12 + 12 × 1 + 6 × 16", "180"]
          ], not: "Sınavda atom kütleleri verilir: H = 1, C = 12, N = 14, O = 16, Na = 23, Cl = 35,5, Ca = 40." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The molar mass of water is 18 g/mol, so one mole of water has a mass of 18 g.*" },
            { ikon: "💬", baslik: "Hesabı göster", metin: "*Molar mass of CO₂ = 12 + 2 × 16 = 44 g/mol.*" }
          ] }
      ]
    },
    {
      baslik: "Kütle ile mol arasında dönüşüm",
      kisa: "Mol sayısı = kütle ÷ mol kütlesi; kütle = mol × mol kütlesi.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "n", alt: "mol sayısı" }, "=",
            { t: "m", alt: "kütle (g)" }, "÷",
            { t: "M", alt: "mol kütlesi (g/mol)" }
          ], aciklama: "Kütleyi bulmak için: m = n × M." },
        { tip: "ornek", baslik: "5,85 g tuz kaç mol, kaç tane NaCl birimidir?", durum: "Yemeğe 5,85 g sofra tuzu (NaCl) attın. M(NaCl) = 58,5 g/mol.", adimlar: [
            "n = m ÷ M = 5,85 ÷ 58,5 = 0,1 mol NaCl.",
            "Formül birimi sayısı = 0,1 × 6,02×10²³ = 6,02×10²² tane NaCl.",
            "Kontrol: 0,1 mol × 58,5 g/mol = 5,85 g ✓"
          ], sonuc: "0,1 mol; 6,02×10²² formül birimi." },
        { tip: "ornek", baslik: "0,25 mol CO₂ kaç gramdır?", durum: "Gazoz şişesindeki gazdan 0,25 mol CO₂ ayrıldı. Kütlesini bul (M = 44 g/mol).", adimlar: [
            "m = n × M = 0,25 × 44 = 11 g.",
            "Kontrol: 11 ÷ 44 = 0,25 mol ✓"
          ], sonuc: "11 g CO₂." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Number of moles = mass ÷ molar mass.*" }
          ] }
      ]
    },
    {
      baslik: "Grafikte kütle ve mol: eğim mol kütlesidir",
      kisa: "Kütle–mol doğrusunun eğimi mol kütlesini verir.",
      bloklar: [
        { tip: "grafik", baslik: "Aynı mol sayısında kütleler farklıdır", xlabel: "Mol sayısı n (mol)", ylabel: "Kütle m (×10 g)", xmax: 3, ymax: 9,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }],
          yticks: [{ v: 1.8, label: "18" }, { v: 4.4, label: "44" }, { v: 8.8, label: "88" }],
          ogeler: [
            { id: "su", tip: "cizgi", renk: 0, from: [0, 0], to: [2.5, 4.5], etiket: "H₂O", gizli: true },
            { id: "co", tip: "cizgi", renk: 2, from: [0, 0], to: [2, 8.8], etiket: "CO₂", gizli: true },
            { id: "s1", tip: "nokta", renk: 1, x: 1, y: 1.8, kilavuz: true, gizli: true },
            { id: "c1", tip: "nokta", renk: 1, x: 1, y: 4.4, kilavuz: true, gizli: true },
            { id: "c2", tip: "nokta", renk: 1, x: 2, y: 8.8, kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Su için doğru: eğim = 18 g/mol. Hiç mol yoksa kütle de yoktur.", goster: ["su"] },
            { metin: "CO₂ doğrusu daha diktir: eğimi 44 g/mol. Dik doğru = büyük mol kütlesi.", goster: ["co"] },
            { metin: "1 mol su 18 g, 1 mol CO₂ 44 g çeker.", goster: ["s1", "c1"] },
            { metin: "2 mol CO₂ = 88 g: mol iki katına çıkınca kütle de iki katına çıkar.", goster: ["c2"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The graph shows that the mass is directly proportional to the number of moles. The slope equals the molar mass.*" }
          ] }
      ]
    },
    {
      baslik: "Mol hacmi: NŞA'da 22,4 L",
      kisa: "Normal şartlarda (0 °C, 1 atm) 1 mol herhangi bir gaz 22,4 L kaplar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧊", terim: "STP (standard temperature and pressure)", tr: "NŞA: normal şartlar altında", tanim: "0 °C (273 K) sıcaklık ve 1 atm basınç.", ornek: "Laboratuvarda buzlu suda tutulan gaz tüpü." },
            { ikon: "🎈", terim: "Molar volume", tr: "mol hacmi", tanim: "1 mol gazın NŞA'da kapladığı hacim: ==22,4 L/mol==. Gazın cinsine bağlı değildir.", ornek: "1 mol H₂, 1 mol O₂ ve 1 mol CO₂ aynı hacmi kaplar." }
          ] },
        { tip: "tablo", baslik: "Gaz miktarından NŞA hacmine (V = n × 22,4)", head: ["Gaz", "Kütle", "Mol sayısı", "NŞA'da hacim"], rows: [
            ["O₂", "16 g", "0,5 mol", "11,2 L"],
            ["CO₂", "44 g", "1 mol", "22,4 L"],
            ["H₂", "4 g", "2 mol", "44,8 L"],
            ["NH₃", "1,7 g", "0,1 mol", "2,24 L"]
          ], not: "Hacim ile mol sayısı doğru orantılıdır: V = n × 22,4 L. Mol sayısı için n = V ÷ 22,4." },
        { tip: "tuzak", metin: "22,4 L yalnızca gazlar ve yalnızca NŞA için geçerlidir. Sıvı ve katılar çok daha küçük hacim kaplar; oda koşullarında (25 °C, 1 atm) 1 mol gaz yaklaşık 24,5 L'dir.", yanlis: "NŞA'da 1 mol su 22,4 L kaplar.", dogru: "1 mol sıvı su yaklaşık 18 mL'dir. 22,4 L yalnızca NŞA'daki gazlar içindir." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*At STP, one mole of any gas occupies 22.4 L.*" }
          ] }
      ]
    },
    {
      baslik: "Mol köprüsü: kütle, mol, tanecik, hacim",
      kisa: "Her dönüşüm mol üzerinden yapılır; mol, köprünün ortasıdır.",
      bloklar: [
        { tip: "adimlar", baslik: "Mol köprüsü", adimlar: [
            { baslik: "Kütle (g) ⇄ mol", metin: "Mole çevirirken ÷ M, grama çevirirken × M." },
            { baslik: "Mol ⇄ tanecik", metin: "Taneciğe çevirirken × 6,02×10²³, mole çevirirken ÷ 6,02×10²³." },
            { baslik: "Mol ⇄ hacim (gaz, NŞA)", metin: "Litreye çevirirken × 22,4, mole çevirirken ÷ 22,4." },
            { baslik: "Önce mol", metin: "Kütleden hacme ya da taneciğe doğrudan geçilmez; her yol mol'den geçer." }
          ] },
        { tip: "ikili", sol: { ikon: "⚖️", baslik: "Mol kütlesi (M) kullan", maddeler: ["Kütle (gram) verilmiş ya da isteniyor", "n = m ÷ M"] },
          sag: { ikon: "🎈", baslik: "22,4 L/mol kullan", maddeler: ["NŞA'da gaz hacmi verilmiş ya da isteniyor", "n = V ÷ 22,4"] },
          oyun: [
            { metin: "36 g suyun mol sayısını bul.", cevap: "sol", neden: "Kütleden mole: M = 18 g/mol." },
            { metin: "NŞA'da 11,2 L O₂ kaç moldür?", cevap: "sag", neden: "Gaz hacminden mole: 11,2 ÷ 22,4 = 0,5 mol." },
            { metin: "0,1 mol NaCl kaç gramdır?", cevap: "sol", neden: "m = n × M = 0,1 × 58,5 = 5,85 g." },
            { metin: "0,5 mol CH₄ gazı NŞA'da kaç litredir?", cevap: "sag", neden: "V = 0,5 × 22,4 = 11,2 L." }
          ] },
        { tip: "ornek", baslik: "11 g CO₂ gazını mol köprüsünden geçir", durum: "11 g CO₂ (M = 44 g/mol) için mol sayısını, molekül sayısını, NŞA hacmini ve toplam atom sayısını bul.", adimlar: [
            "Mol: n = 11 ÷ 44 = 0,25 mol.",
            "Molekül sayısı: 0,25 × 6,02×10²³ = 1,505×10²³.",
            "NŞA hacmi: V = 0,25 × 22,4 = 5,6 L.",
            "Atom sayısı: her molekülde 3 atom → 1,505×10²³ × 3 = 4,515×10²³.",
            "Kontrol: 0,25 mol × 3 = 0,75 mol atom; 0,75 × 6,02×10²³ = 4,515×10²³ ✓"
          ], sonuc: "0,25 mol; 1,505×10²³ molekül; 5,6 L; 4,515×10²³ atom." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*First convert the mass to moles, then use the mole to find the number of particles or the volume.*" }
          ] }
      ]
    },
    {
      baslik: "Bilinmeyen mol kütlesini bulmak",
      kisa: "Kütle ve mol sayısını bul, kütleyi mole böl.",
      bloklar: [
        { tip: "ornek", baslik: "Gazın mol kütlesi kaçtır?", durum: "NŞA'da 5,6 L hacim kaplayan bilinmeyen bir gazın kütlesi 4 g ölçüldü. Gazın mol kütlesini bul.", adimlar: [
            "Mol: n = V ÷ 22,4 = 5,6 ÷ 22,4 = 0,25 mol.",
            "Mol kütlesi: M = m ÷ n = 4 ÷ 0,25 = 16 g/mol.",
            "Kontrol: 0,25 mol × 16 g/mol = 4 g ✓ (bu değer CH₄ ile uyumludur)."
          ], sonuc: "M = 16 g/mol." },
        { tip: "ornek", baslik: "XO₂ bileşiğindeki X hangi elementtir?", durum: "0,2 mol XO₂ bileşiğinin kütlesi 8,8 g. O = 16 g/mol ise X'in atom kütlesi kaçtır?", adimlar: [
            "M(XO₂) = m ÷ n = 8,8 ÷ 0,2 = 44 g/mol.",
            "2 O atomu: 2 × 16 = 32 g/mol.",
            "X = 44 − 32 = 12 g/mol.",
            "Kontrol: 12 + 32 = 44; 0,2 × 44 = 8,8 g ✓ (X = C, bileşik CO₂)."
          ], sonuc: "X'in atom kütlesi 12 g/mol (karbon)." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Molar mass = mass ÷ number of moles = 4 g ÷ 0.25 mol = 16 g/mol.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Molar mass* (M): 1 mol maddenin gram kütlesi; atom kütleleri toplanarak bulunur (g/mol).",
            "n = m ÷ M ve m = n × M.",
            "Kütle–mol grafiği orijinden geçen bir doğrudur; eğim mol kütlesidir.",
            "*Molar volume*: NŞA'da (0 °C, 1 atm) 1 mol gaz 22,4 L kaplar; n = V ÷ 22,4.",
            "22,4 L yalnızca gazlar ve NŞA için geçerlidir; oda koşullarında yaklaşık 24,5 L'dir.",
            "Mol köprüsü: kütle ⇄ mol ⇄ tanecik, mol ⇄ hacim; her yol mol'den geçer.",
            "Bilinmeyen mol kütlesi: M = m ÷ n. Bileşikte bilinmeyen atom için toplam M'den bilinen atomları çıkar."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "9 g su (H = 1, O = 16 g/mol) kaç tane H₂O molekülü içerir?",
      opts: ["6,02×10²²", "3,01×10²³", "6,02×10²³", "9,03×10²³"], a: 1,
      why: "n = 9 ÷ 18 = 0,5 mol; molekül sayısı 0,5 × 6,02×10²³ = 3,01×10²³. 9,03×10²³ (D) toplam atom sayısıdır (0,5 × 3 = 1,5 mol atom); soru molekülü sorduğu için yanlıştır." },
    { q: "NŞA'da 8,96 L CO₂ gazının kütlesi kaç gramdır? (C = 12, O = 16)",
      opts: ["17,6 g", "8,8 g", "22,4 g", "44 g"], a: 0,
      why: "n = 8,96 ÷ 22,4 = 0,4 mol; m = 0,4 × 44 = 17,6 g. 44 g (D) tam 1 mol'ün kütlesidir; hacmi 22,4 L'ye bölmeden mol kütlesini yazmak yaygın hatadır." },
    { q: "Tablodaki ölçümler NŞA'da yapılmıştır. Y gazının mol kütlesi kaçtır?",
      fig: { type: "table", head: ["Gaz", "NŞA'da hacim", "Kütle"], rows: [["X", "11,2 L", "8 g"], ["Y", "5,6 L", "11 g"]], caption: "İki gazın ölçümleri" },
      opts: ["11 g/mol", "22 g/mol", "44 g/mol", "88 g/mol"], a: 2,
      why: "Y için n = 5,6 ÷ 22,4 = 0,25 mol; M = 11 ÷ 0,25 = 44 g/mol. 22 g/mol (B) ise 0,5 mol sanıp hesap yapılırsa çıkar." },
    { q: "Grafikte X ve Y maddelerinin kütlesi (×10 g) mol sayısına karşı çizilmiştir. Hangi yorum doğrudur?",
      fig: { type: "graph", xlabel: "n (mol)", ylabel: "m (×10 g)", xmax: 3, ymax: 9, lines: [{ from: [0, 0], to: [2.5, 4.5], label: "X" }, { from: [0, 0], to: [2, 8.8], label: "Y" }], xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }], yticks: [{ v: 1.8, label: "18" }, { v: 4.4, label: "44" }], caption: "Kütle–mol grafiği" },
      opts: ["Doğrusu daha uzun olan X'in mol kütlesi daha büyüktür", "Her iki doğru da orijinden geçtiği için mol kütleleri eşittir", "Eğim mol hacmini verir", "Y'nin eğimi daha büyük olduğundan Y'nin mol kütlesi daha büyüktür"], a: 3,
      why: "Kütle–mol doğrusunun eğimi mol kütlesidir; Y daha diktir, M(Y) > M(X). Doğrunun uzunluğunun anlamı yoktur (A), orijinden geçmek yalnızca orantı olduğunu gösterir (B)." },
    { q: "Aşağıdakilerden hangisi NŞA'da yaklaşık 22,4 L hacim kaplar?",
      opts: ["18 g H₂O (sıvı)", "6,02×10²³ tane Fe atomu", "44 g CO₂ gazı", "1 mol NaCl katısı"], a: 2,
      why: "44 g CO₂ = 1 mol gazdır ve NŞA'da 22,4 L kaplar. Sıvı ve katılar için 22,4 L kuralı geçerli değildir; 1 mol su yalnızca yaklaşık 18 mL'dir (A)." }
  ]
};
