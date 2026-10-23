/* Kitpath not defteri · ch304 · 3.4 Stokiyometri
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry, Exam 3: stokiyometri). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch304",
  amac: "Bu konu *stoichiometry* yani tepkime hesaplarını anlatıyor: denkleştirilmiş denklemdeki katsayılar bir mol oranıdır. Bununla kütle, mol ve gaz hacmi hesaplamayı, *limiting reagent* (sınırlayıcı bileşen) bulmayı ve *percent yield* (yüzde verim) hesaplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Denklem bir tarif gibidir",
      kisa: "Katsayılar mol oranını verir; gram oranını değil.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📖", terim: "Stoichiometry", tr: "stokiyometri", tanim: "Tepkimede girenlerle ürünlerin miktarları arasındaki ilişkiyi denklemin katsayılarından hesaplamak.", ornek: "6 g H₂'den kaç g NH₃ elde edilir?" },
            { ikon: "⚖️", terim: "Mole ratio", tr: "mol oranı", tanim: "Denkleştirilmiş denklemdeki katsayıların oranı. Hesaplarda mol sayıları bu oranla orantılıdır.", ornek: "N₂ + 3H₂ → 2NH₃: N₂ : H₂ : NH₃ = 1 : 3 : 2." }
          ] },
        { tip: "tablo", baslik: "N₂ + 3H₂ → 2NH₃ denkleminin okunuşu", head: ["", "N₂", "3H₂", "2NH₃"], rows: [
            ["Mol", "1 mol", "3 mol", "2 mol"],
            ["Kütle (M: 28, 2, 17)", "28 g", "6 g", "34 g"],
            ["Hacim (aynı sıcaklık ve basınçta gaz)", "1 hacim", "3 hacim", "2 hacim"]
          ], not: "Kütle korunur: 28 + 6 = 34 g. Mol sayısı ve hacim ise korunmak zorunda değildir (4 mol girdi, 2 mol ürün)." },
        { tip: "tuzak", metin: "Katsayılar tanecik ve mol oranıdır. Gram hesabında her maddeyi önce mole çevirmek, oranı mol üzerinden kurmak gerekir.", yanlis: "N₂ + 3H₂ → 2NH₃ denkleminde 1 g N₂ ile 3 g H₂ tepkimeye girer.", dogru: "1 mol N₂ (28 g) ile 3 mol H₂ (6 g) tepkimeye girer." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The coefficients in a balanced equation give the mole ratio of the substances.*" }
          ] }
      ]
    },
    {
      baslik: "Kütleden kütleye hesap",
      kisa: "Gram → mol → mol oranı → mol → gram.",
      bloklar: [
        { tip: "adimlar", baslik: "Her stokiyometri sorusunun yolu", adimlar: [
            { baslik: "Denklemi denkleştir", metin: "Katsayılar mol oranını verecek." },
            { baslik: "Verileni mole çevir", metin: "n = m ÷ M (gazda NŞA hacmi için n = V ÷ 22,4)." },
            { baslik: "Mol oranı kur", metin: "Aradığın maddenin katsayısı ÷ verilen maddenin katsayısı." },
            { baslik: "İstenen birime dön", metin: "m = n × M, V = n × 22,4 ya da N = n × 6,02×10²³." }
          ] },
        { tip: "ornek", baslik: "6 g H₂'den kaç g NH₃ oluşur?", durum: "Amonyak sentezi: N₂ + 3H₂ → 2NH₃. Yeterli N₂ olduğuna göre 6 g H₂ ile oluşan NH₃ kütlesini bul (H = 1, N = 14).", adimlar: [
            "n(H₂) = 6 ÷ 2 = 3 mol.",
            "Mol oranı H₂ : NH₃ = 3 : 2 → n(NH₃) = 3 × 2/3 = 2 mol.",
            "m(NH₃) = 2 × 17 = 34 g.",
            "Kontrol: gerekli N₂ = 1 mol = 28 g; girenler 28 + 6 = 34 g = ürün ✓"
          ], sonuc: "34 g NH₃." },
        { tip: "ornek", baslik: "Doğal gaz (CH₄) yanarsa", durum: "CH₄ + 2O₂ → CO₂ + 2H₂O. Ocakta 8 g CH₄ tamamen yanıyor (C = 12, H = 1, O = 16). Harcanan O₂ ile oluşan CO₂ ve H₂O kütlelerini bul.", adimlar: [
            "n(CH₄) = 8 ÷ 16 = 0,5 mol.",
            "O₂: oran 1 : 2 → 1 mol → 1 × 32 = 32 g.",
            "CO₂: oran 1 : 1 → 0,5 mol → 0,5 × 44 = 22 g.",
            "H₂O: oran 1 : 2 → 1 mol → 1 × 18 = 18 g.",
            "Kontrol: girenler 8 + 32 = 40 g; ürünler 22 + 18 = 40 g ✓"
          ], sonuc: "32 g O₂ harcanır; 22 g CO₂ ve 18 g H₂O oluşur." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Convert the mass to moles, use the mole ratio, then convert back to grams.*" }
          ] }
      ]
    },
    {
      baslik: "Gaz hacmi ve stokiyometri",
      kisa: "Gazlarda aynı koşulda katsayı oranı hacim oranıdır.",
      bloklar: [
        { tip: "ornek", baslik: "Magnezyum asitle tepkimeye girerken çıkan gaz", durum: "Mg + 2HCl → MgCl₂ + H₂. 2,4 g Mg şerit asitte çözülüyor ve balonlar çıkıyor. NŞA'da kaç L H₂ oluşur? (Mg = 24)", adimlar: [
            "n(Mg) = 2,4 ÷ 24 = 0,1 mol.",
            "Oran Mg : H₂ = 1 : 1 → n(H₂) = 0,1 mol.",
            "V = 0,1 × 22,4 = 2,24 L (NŞA).",
            "Kontrol: 2,24 ÷ 22,4 = 0,1 mol ✓"
          ], sonuc: "2,24 L H₂ (NŞA)." },
        { tip: "ornek", baslik: "Aynı koşulda gaz hacimleri", durum: "N₂ + 3H₂ → 2NH₃. Aynı sıcaklık ve basınçta 3 L N₂ tamamen tepkimeye giriyor. Kaç L H₂ gerekir, kaç L NH₃ oluşur?", adimlar: [
            "Aynı koşulda hacim oranı = mol oranı = 1 : 3 : 2.",
            "H₂ = 3 × 3 = 9 L.",
            "NH₃ = 3 × 2 = 6 L.",
            "Kontrol: girenler 3 + 9 = 12 L; ürün 6 L. Hacim korunmaz, atom sayısı korunur ✓"
          ], sonuc: "9 L H₂ gerekir; 6 L NH₃ oluşur." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*At the same temperature and pressure, the volume ratio of gases equals the mole ratio.*" }
          ] }
      ]
    },
    {
      baslik: "Sınırlayıcı bileşen",
      kisa: "Önce biten madde sınırlayıcıdır; ürün miktarını o belirler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛑", terim: "Limiting reagent", tr: "sınırlayıcı bileşen", tanim: "Tepkimede ilk biten madde; oluşacak ürün miktarını belirler.", ornek: "1 tost = 2 ekmek + 1 kaşar; 10 ekmek ve 3 kaşar varsa kaşar biter, 3 tost yapılır." },
            { ikon: "🎁", terim: "Excess reagent", tr: "artan bileşen", tanim: "Tepkime bittiğinde geriye kalan madde.", ornek: "Yukarıdaki tostta 10 − 6 = 4 ekmek dilimi artar." }
          ] },
        { tip: "grafik", baslik: "1 mol O₂'ye H₂ eklenirse oluşan H₂O", xlabel: "Eklenen H₂ (mol)", ylabel: "Oluşan H₂O (mol)", xmax: 5, ymax: 4,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }],
          ogeler: [
            { id: "a", tip: "cizgi", renk: 0, from: [0, 0], to: [2, 2], gizli: true },
            { id: "e", tip: "nokta", renk: 1, x: 2, y: 2, kilavuz: true, gizli: true },
            { id: "te", tip: "yazi", x: 2, y: 2.7, metin: "2 H₂ + 1 O₂", gizli: true },
            { id: "b", tip: "cizgi", renk: 0, from: [2, 2], to: [4.7, 2], etiket: "H₂O", gizli: true },
            { id: "f", tip: "nokta", renk: 2, x: 3, y: 2, kilavuz: true, gizli: true },
            { id: "tf", tip: "yazi", x: 3.15, y: 1.35, metin: "1 mol H₂ artar", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "2H₂ + O₂ → 2H₂O. O₂ 1 mol sabit; H₂ eklendikçe H₂O artar: burada ==H₂ sınırlayıcıdır==.", goster: ["a"] },
            { metin: "2 mol H₂ eklenince ikisi de tam biter: oran tam denklemdeki gibi (2 : 1).", goster: ["e", "te"] },
            { metin: "2 mol'den sonra O₂ bitmiştir: ==O₂ sınırlayıcı== olur ve H₂O artık artmaz.", goster: ["b"] },
            { metin: "3 mol H₂ ile yine yalnızca 2 mol H₂O oluşur; 1 mol H₂ artar.", goster: ["f", "tf"] }
          ] },
        { tip: "ornek", baslik: "6 g H₂ ile 32 g O₂ karışıyor", durum: "2H₂ + O₂ → 2H₂O. Hangi madde sınırlayıcıdır, kaç g H₂O oluşur, ne kadar madde artar? (H = 1, O = 16)", adimlar: [
            "n(H₂) = 6 ÷ 2 = 3 mol; n(O₂) = 32 ÷ 32 = 1 mol.",
            "Mol ÷ katsayı: H₂ → 3 ÷ 2 = 1,5; O₂ → 1 ÷ 1 = 1. En küçük O₂ → ==sınırlayıcı O₂==.",
            "H₂O: oran O₂ : H₂O = 1 : 2 → 2 mol → 2 × 18 = 36 g.",
            "Harcanan H₂ = 2 mol; artan H₂ = 3 − 2 = 1 mol = 2 g.",
            "Kontrol: girenler 6 + 32 = 38 g; ürün 36 g + artan 2 g = 38 g ✓"
          ], sonuc: "O₂ sınırlayıcı; 36 g H₂O oluşur; 2 g H₂ artar." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Oxygen is the limiting reagent because it is used up first, so it determines the amount of product.*" },
            { ikon: "⚠️", baslik: "Dikkat", metin: "Sınırlayıcıyı gramı en az olan değil, mol ÷ katsayısı en küçük olan belirler." }
          ] }
      ]
    },
    {
      baslik: "Verim: tepkime tam çalıştı mı?",
      kisa: "Yüzde verim, gerçek ürünün teorik ürüne oranıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📐", terim: "Theoretical yield", tr: "teorik verim", tanim: "Denklem ve sınırlayıcı bileşenden hesaplanan en çok ürün miktarı.", ornek: "20 g CaCO₃ ısıtılırsa teorik olarak 8,8 g CO₂." },
            { ikon: "🧪", terim: "Actual yield", tr: "gerçek verim", tanim: "Deneyde gerçekten elde edilen ürün miktarı. Yan tepkime ve kayıplar yüzünden genelde teorikten azdır.", ornek: "Deneyde yalnızca 4,4 g CO₂ toplandı." },
            { ikon: "🧂", terim: "Percent purity", tr: "yüzde saflık", tanim: "Numunedeki saf maddenin kütlesinin numune kütlesine oranı (× 100). Tepkime hesabında yalnızca saf kısım kullanılır.", ornek: "50 g kirli numunenin 45 g'ı saf ise saflık %90; hesapta 45 g alınır." }
          ] },
        { tip: "formul", parcalar: [
            { t: "% verim", alt: "yüzde verim" }, "=",
            { t: "gerçek verim", alt: "deneyde elde edilen" }, "÷",
            { t: "teorik verim", alt: "hesaplanan" }, "×",
            { t: "100" }
          ], aciklama: "Sınavda böyle yaz: *Percent yield = actual yield ÷ theoretical yield × 100.*" },
        { tip: "ornek", baslik: "Kireç taşı ısıtılırsa", durum: "CaCO₃ → CaO + CO₂. 20 g CaCO₃ ısıtılıyor (Ca = 40, C = 12, O = 16); deneyde 4,4 g CO₂ toplanıyor. Yüzde verimi bul.", adimlar: [
            "n(CaCO₃) = 20 ÷ 100 = 0,2 mol.",
            "Oran 1 : 1 → teorik n(CO₂) = 0,2 mol → 0,2 × 44 = 8,8 g.",
            "% verim = 4,4 ÷ 8,8 × 100 = %50.",
            "Aynı deneyde verim %80 olsaydı gerçek ürün 8,8 × 0,80 = 7,04 g olurdu."
          ], sonuc: "% verim = %50." },
        { tip: "tuzak", metin: "Teorik verim her zaman sınırlayıcı bileşenden hesaplanır, artan bileşenden değil. Yüzde verim de %100'ü geçemez.", yanlis: "Gerçek ürün 9 g, teorik 8,8 g; verim %102.", dogru: "Gerçek ürün teorik üründen fazla çıkıyorsa ölçüm hatası ya da ürünün saf olmaması vardır; hesapta verim ≤ %100 olmalıdır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Stoichiometry*: denkleştirilmiş denklemin katsayıları mol oranıdır (gram oranı değil).",
            "Yol: gram → mol → mol oranı → mol → gram (gaz için n = V ÷ 22,4, NŞA).",
            "Aynı sıcaklık ve basınçta gaz hacim oranı = mol oranı.",
            "*Limiting reagent*: ilk biten; mol ÷ katsayısı en küçük olandır. Artan madde *excess reagent*.",
            "Ürün miktarı sınırlayıcı bileşene göre hesaplanır; kütle korunumu ile kontrol et.",
            "% verim = gerçek ÷ teorik × 100; teorik verim hep sınırlayıcıdan.",
            "Sınav kalıbı: *First balance the equation, convert to moles, use the mole ratio.*"
          ] }
      ]
    }
  ],
  sorular: [
    { q: "In the reaction N₂ + 3H₂ → 2NH₃, 6 mol of H₂ is consumed while there is enough N₂. How many moles of NH₃ form?",
      opts: ["2 mol", "3 mol", "4 mol", "6 mol"], a: 2,
      why: "Oran H₂ : NH₃ = 3 : 2 olduğundan 6 × 2/3 = 4 mol NH₃ oluşur. 6 mol (D) katsayıları dikkate almadan mol sayısını aynen yazmaktır." },
    { q: "In the reaction CH₄ + 2O₂ → CO₂ + 2H₂O, how many grams of CO₂ form when 8 g of CH₄ burn completely? (C = 12, H = 1, O = 16)",
      opts: ["11 g", "22 g", "44 g", "16 g"], a: 1,
      why: "n(CH₄) = 8 ÷ 16 = 0,5 mol; oran 1 : 1 olduğundan 0,5 mol CO₂ = 0,5 × 44 = 22 g. 44 g (C) 1 mol CO₂ kütlesidir; CH₄'ü mole çevirmemek bu şıkka götürür." },
    { q: "The reaction 2H₂ + O₂ → 2H₂O is carried out in two separate experiments. According to the amounts in the table, what are the limiting reagents?",
      fig: { type: "table", head: ["Experiment", "H₂ (mol)", "O₂ (mol)"], rows: [["1", "4", "1"], ["2", "2", "2"]], caption: "Amounts of reactants" },
      opts: ["O₂ in Experiment 1, H₂ in Experiment 2", "H₂ in Experiment 1, O₂ in Experiment 2", "H₂ in both experiments", "O₂ in both experiments"], a: 0,
      why: "Mol ÷ katsayı: Deney 1'de H₂ 4 ÷ 2 = 2, O₂ 1 ÷ 1 = 1 → O₂ sınırlayıcı. Deney 2'de H₂ 2 ÷ 2 = 1, O₂ 2 ÷ 1 = 2 → H₂ sınırlayıcı. Mol sayısı büyük olan maddenin fazla olduğunu varsaymak (B) yanılgıdır." },
    { q: "The graph shows the amount of H₂O formed as H₂ is added to 1 mol of O₂ (2H₂ + O₂ → 2H₂O). Which interpretation is correct?",
      fig: { type: "graph", xlabel: "H₂ (mol)", ylabel: "H₂O (mol)", xmax: 4, ymax: 4, lines: [{ from: [0, 0], to: [2, 2] }, { from: [2, 2], to: [4, 2] }], points: [{ q: 3, p: 2, label: "3 mol H₂", guides: true }], xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }], caption: "Amount of product vs. H₂" },
      opts: ["After 2 mol of H₂, H₂ is the limiting reagent", "H₂O increases without limit as H₂ is added", "At most 1 mol of H₂O can form", "After 2 mol of H₂, the product does not increase because O₂ has run out"], a: 3,
      why: "H₂ ile O₂ 2 : 1 oranında tepkimeye girer; 1 mol O₂ en çok 2 mol H₂ harcar. Sonrasında O₂ sınırlayıcıdır ve fazla H₂ ürün artırmaz. A seçeneği sınırlayıcıyı tersine yorumlar." },
    { q: "When 20 g of CaCO₃ is heated (CaCO₃ → CaO + CO₂), 6.6 g of CO₂ is collected (Ca = 40, C = 12, O = 16). What is the percent yield?",
      opts: ["50%", "66%", "75%", "88%"], a: 2,
      why: "Teorik CO₂ = 0,2 mol × 44 = 8,8 g; verim = 6,6 ÷ 8,8 × 100 = %75. %66 (B) sayıyı 6,6 diye yüzdeymiş gibi okumaktır; gerçek ÷ teorik hesaplanmalıdır." }
  ]
};
