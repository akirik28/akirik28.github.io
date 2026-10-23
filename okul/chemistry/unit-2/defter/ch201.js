/* Kitpath not defteri · ch201 · 2.1 Tepkimeler Nasıl Olur, Nasıl Denkleştirilir
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry Exam 1-2) + MEB 10. sınıf kimya programı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch201",
  amac: "Bu konu kimyasal tepkimenin ne olduğunu ve nasıl gerçekleştiğini anlatıyor: çarpışma ve aktivasyon enerjisi, kütlenin korunumu, denklem denkleştirme ve denklemi okuma. Her tepkime denklemini atom sayılarını eşitleyerek yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Kimyasal tepkime nedir, nasıl anlaşılır?",
      kisa: "Tepkimede bağlar kırılır, yenileri oluşur ve yeni madde(ler) meydana gelir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔥", baslik: "Kimyasal değişim", maddeler: ["Bağlar kırılır, yenileri oluşur; yeni madde oluşur", "Atomların türü aynı kalır, dizilişi değişir"] },
          sag: { ikon: "🧊", baslik: "Fiziksel değişim", maddeler: ["Madde türü aynı kalır", "Hâl, biçim ya da çözünme değişir"] },
          oyun: [
            { metin: "Demir çivi paslanıyor.", cevap: "sol", neden: "Fe ile O₂ tepkimeye girer, yeni madde (pas) oluşur." },
            { metin: "Buz küpü eriyor.", cevap: "sag", neden: "H₂O hâlâ H₂O: yalnızca hâl değişti." },
            { metin: "Süt ekşiyor.", cevap: "sol", neden: "Laktoz, laktik asite dönüşür: yeni madde." },
            { metin: "Şeker çayda çözünüyor.", cevap: "sag", neden: "Şeker molekülleri aynen duruyor." },
            { metin: "Kâğıt yanıyor.", cevap: "sol", neden: "CO₂, su ve kül oluşur: yeni maddeler." }
          ] },
        { tip: "tablo", baslik: "Kimyasal tepkime belirtileri", head: ["Gözlem", "Günlük örnek"], rows: [
            ["Gaz çıkışı (köpürme)", "Kabartma tozuna limon suyu damlatınca CO₂ çıkar"],
            ["Çökelek oluşumu", "Gümüş nitrat çözeltisine tuz çözeltisi katınca beyaz çökelek oluşur"],
            ["Renk değişimi", "Demir nemli havada kızıl kahverengi pasa dönüşür"],
            ["Isı ya da ışık çıkışı", "Mum yanarken ısı ve ışık verir"]
          ], not: "Tek bir belirti her zaman yeterli değildir: kaynayan su da kabarcık çıkarır ama kimyasal tepkime yoktur." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: kanıt", metin: "*A chemical reaction has occurred because a gas was produced and a new substance formed.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: fiziksel değişim", metin: "*Melting is a physical change because no new substance is formed.*" }
          ] }
      ]
    },
    {
      baslik: "Tepkime nasıl gerçekleşir: çarpışma ve aktivasyon enerjisi",
      kisa: "Taneciklerin yeterli enerjiyle ve uygun doğrultuda çarpışması gerekir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💥", terim: "Collision theory", tr: "çarpışma teorisi", tanim: "Tepkime için tanecikler çarpışmalıdır. Her çarpışma tepkime vermez; yalnızca etkin çarpışmalar verir.", ornek: "Yalnızca temas eden tanecikler tepkime verebilir." },
            { ikon: "⛰️", terim: "Activation energy", tr: "aktivasyon enerjisi (Ea)", tanim: "Tepkimenin başlaması için çarpışan taneciklerin sahip olması gereken en düşük enerji.", ornek: "Kibrit çöpünü sürtmek bu enerjiyi sağlar." },
            { ikon: "🎯", terim: "Effective collision", tr: "etkin çarpışma", tanim: "Enerjisi en az Ea kadar olan ve uygun doğrultuda gerçekleşen çarpışma; bağları kırıp yenilerini kurar.", ornek: "Yanlış doğrultuda çarpan moleküller sadece sekip ayrılır." }
          ] },
        { tip: "grafik", baslik: "Tepkime enerji diyagramı", xlabel: "Tepkime ilerlemesi", ylabel: "Potansiyel enerji", xmax: 10, ymax: 10,
          xticks: [], yticks: [],
          ogeler: [
            { id: "ek", tip: "egri", renk: 0, noktalar: [[0, 4], [1.5, 4.1], [3, 5.5], [4, 7.7], [5, 8.6], [6, 7.7], [7, 5], [8.5, 2.3], [10, 2]] },
            { id: "gt", tip: "yazi", x: 0.2, y: 4.9, metin: "girenler", hiza: "start" },
            { id: "ut", tip: "yazi", x: 9.8, y: 1.2, metin: "ürünler", hiza: "end", gizli: true },
            { id: "tepe", tip: "cizgi", renk: 1, kesik: true, from: [2, 8.6], to: [5, 8.6], gizli: true },
            { id: "ea", tip: "ok", renk: 3, from: [2, 4.2], to: [2, 8.5], gizli: true },
            { id: "eat", tip: "yazi", x: 1.8, y: 6.3, metin: "Ea", hiza: "end", gizli: true },
            { id: "taban", tip: "cizgi", renk: 1, kesik: true, from: [0, 4.1], to: [9, 4.1], gizli: true },
            { id: "dh", tip: "ok", renk: 2, from: [9, 4.0], to: [9, 2.2], gizli: true },
            { id: "dht", tip: "yazi", x: 9.1, y: 3.2, metin: "ΔH<0", hiza: "start", gizli: true },
            { id: "en", tip: "egri", renk: 2, noktalar: [[0, 2], [1.5, 2.1], [3, 3.6], [4, 6.4], [5, 8], [6, 6.8], [7, 5.2], [8.5, 4.4], [10, 4.2]], gizli: true },
            { id: "enb", tip: "cizgi", renk: 1, kesik: true, from: [0, 2.1], to: [9, 2.1], gizli: true },
            { id: "enh", tip: "ok", renk: 3, from: [9, 2.2], to: [9, 4.1], gizli: true },
            { id: "enht", tip: "yazi", x: 9.1, y: 3.0, metin: "ΔH>0", hiza: "start", gizli: true },
            { id: "enea", tip: "ok", renk: 3, from: [2, 2.2], to: [2, 7.9], gizli: true },
            { id: "eneat", tip: "yazi", x: 1.8, y: 5.0, metin: "Ea", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Girenler başlangıçta belli bir enerji düzeyinde. Tepkimenin bir enerji tepesini aşması gerekir." },
            { metin: "Tepenin yüksekliği ==aktivasyon enerjisi (Ea)==: çarpışan taneciklerin bu kadar enerjisi yoksa tepkime olmaz.", goster: ["tepe", "ea", "eat"] },
            { metin: "Ürünler girenlerden daha düşük enerjide: fark ısı olarak ortama verilir. Bu ==ekzotermik== tepkimedir, ΔH < 0.", goster: ["ut", "taban", "dh", "dht"] },
            { metin: "Ürünlerin enerjisi girenlerden yüksekse tepkime ortamdan ısı alır: ==endotermik==, ΔH > 0. Ea yine gereklidir.", gizle: ["ek", "gt", "tepe", "ea", "eat", "taban", "dh", "dht"], goster: ["en", "enb", "enh", "enht", "enea", "eneat"] }
          ] },
        { tip: "tuzak", metin: "Ekzotermik bir tepkime enerji verir ama yine de başlamak için enerji ister. Bu yüzden odun kendiliğinden tutuşmaz, kıvılcım gerekir.", yanlis: "Ekzotermik tepkimeler aktivasyon enerjisi gerektirmeden kendiliğinden başlar.", dogru: "Ekzotermik de endotermik de ==Ea== gerektirir. Ekzotermikte ürünler daha düşük enerjidedir (ΔH < 0), endotermikte daha yüksek (ΔH > 0)." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: koşul", metin: "*For a reaction to occur, the particles must collide with enough energy and the correct orientation.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: tanım", metin: "*Activation energy is the minimum energy needed to start a reaction.*" },
            { ikon: "3️⃣", baslik: "Başarılı tepkime için 3 şart, tepkimede olan 3 olay", metin: "Şartlar: tanecikler çarpışmalı, doğru geometriyle ve yeterli enerjiyle. Olaylar: girenlerdeki bağlar kırılır, atomlar yeniden düzenlenir, yeni bağlar kurulur." }
          ] }
      ]
    },
    {
      baslik: "Kütlenin korunumu ve denkleştirme adımları",
      kisa: "Atomlar yok olmaz; her elementin atom sayısı iki tarafta eşit olmalıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Girenlerin kütlesi", alt: "*reactants*" }, "=",
            { t: "Ürünlerin kütlesi", alt: "*products*" }
          ], aciklama: "Lavoisier'nin *law of conservation of mass* kuralı. Kütle, atom sayısı ve atom türleri korunur (H₂ + ½O₂ → H₂O: 2 g H + 16 g O → 18 g su). Molekül sayısı her zaman korunmaz. Girenler hep tamamen harcanmaz; artan madde (*excess reactant*) kalabilir (2 g H + 20 g O → 18 g su + 4 g O artar)." },
        { tip: "adimlar", baslik: "Denkleştirmenin dört adımı", adimlar: [
            { baslik: "Say", metin: "Okla ayrılan iki tarafta her elementin atom sayısını yaz." },
            { baslik: "Katsayı yaz", metin: "Eşit olmayan elementi seç; formülün önüne katsayı koyarak dengele. Bir seferde bir elementle uğraş." },
            { baslik: "Yalnızca katsayıyı değiştir", metin: "İndisler (formüldeki küçük sayılar) sabittir; değiştirirsen başka madde yazmış olursun." },
            { baslik: "Kontrol et", metin: "Her element iki tarafta eşit mi? Katsayılar en küçük tam sayılar mı?" }
          ] },
        { tip: "ornek", baslik: "Al + O₂ → Al₂O₃", durum: "Alüminyum oksijende yanarak alüminyum oksit oluşturur. Denklemi denkleştir.",
          adimlar: ["Say: Al 1 → 2, O 2 → 3. İkisi de eşit değil.", "O için en küçük ortak kat 6: 3 O₂ (6 O) ve 2 Al₂O₃ (6 O).", "Al şimdi sağda 2 × 2 = 4: sola 4 Al.", "Kontrol: Al 4 = 4; O 6 = 6."],
          sonuc: "==4Al + 3O₂ → 2Al₂O₃==" },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: kural", metin: "*The number of atoms of each element must be the same on both sides of the equation.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: yöntem", metin: "*Balance the equation by changing only the coefficients, not the subscripts.*" },
            { ikon: "½", baslik: "Kesirli katsayı", metin: "Kesirli katsayı çoğunlukla O₂, F₂, S₈, P₄ gibi element molekülleri için yazılır (H₂ + ½O₂ → H₂O). Bu derste bileşiklere kesir yazma: 1/6 C₆H₁₂O₆ yerine bütün denklemi tam sayıya çevir." }
          ] }
      ]
    },
    {
      baslik: "Çok atomlu iyonlarla ve zor denklemlerle denkleştirme",
      kisa: "Değişmeden geçen çok atomlu iyonları tek parça say; en küçük ortak katı kullan.",
      bloklar: [
        { tip: "ornek", baslik: "Al(OH)₃ + H₂SO₄ → Al₂(SO₄)₃ + H₂O", durum: "Nötrleşme tepkimesini denkleştir. SO₄²⁻ iki tarafta da aynen duruyor, bu yüzden onu tek parça say.",
          adimlar: ["Al: sol 1, sağ 2 → 2Al(OH)₃.", "SO₄: sol 1, sağ 3 → 3H₂SO₄.", "H: sol 6 + 6 = 12 → sağda H₂O için 6 gerekir: 6H₂O.", "Kontrol: O sol 6 + 12 = 18; sağ 12 + 6 = 18 ✓."],
          sonuc: "==2Al(OH)₃ + 3H₂SO₄ → Al₂(SO₄)₃ + 6H₂O==" },
        { tip: "ornek", baslik: "Denklemdeki bilinmeyen X maddesi", durum: "4X + 5O₂ → 4NO + 6H₂O ve 9Fe₂O₃ + 2NH₃ → 6X + N₂ + 3H₂O denklemleri denkleşmiş. İki X'in formülünü bul.",
          adimlar: ["1. denklem, sağ taraf: N 4, H 12, O 4 + 6 = 10. Sol tarafta O₂'den 10 O var; N ve H'nin hepsi 4X'ten gelmeli: 4X = N₄H₁₂.", "X = NH₃.", "2. denklem, sol: Fe 18, O 27, N 2, H 6. Sağda N₂ ve 3H₂O (3 O) var; geri kalan Fe 18 ve O 24, 6X içinde: X = Fe₃O₄."],
          sonuc: "==1. denklemde X = NH₃; 2. denklemde X = Fe₃O₄==. Her elementin atom sayısını iki tarafta eşitle; fark X'in içindedir." },
        { tip: "tuzak", metin: "H₂ + O₂ → H₂O denkleminde oksijeni eşitlemek için H₂O₂ yazmak başka bir maddeyi yazmaktır.", yanlis: "O sayısını eşitlemek için formülün indisini değiştirebilirim.", dogru: "==Katsayı değişir, indis asla.== Doğrusu: 2H₂ + O₂ → 2H₂O." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: çok atomlu iyon", metin: "*Treat a polyatomic ion such as SO₄²⁻ as one unit when it appears unchanged on both sides.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: sonuç", metin: "*The balanced equation is 2H₂ + O₂ → 2H₂O.*" }
          ] }
      ]
    },
    {
      baslik: "Denklemi okumak: hâl sembolleri ve katsayılar",
      kisa: "Katsayılar tanecik ve mol sayısı oranıdır, kütle oranı değildir.",
      bloklar: [
        { tip: "tablo", baslik: "Denklemdeki semboller", head: ["Sembol", "Anlamı"], rows: [
            ["(s)", "Katı (*solid*)"],
            ["(l)", "Sıvı (*liquid*)"],
            ["(g)", "Gaz (*gas*)"],
            ["(aq)", "Sulu çözelti (*aqueous*)"],
            ["→", "Girenler ürünlere dönüşür"],
            ["Δ", "Isıtma gerekir"],
            ["↓ ve ↑", "Çökelek oluşur ve gaz çıkar"]
          ] },
        { tip: "ornek", baslik: "2H₂(g) + O₂(g) → 2H₂O(l) denklemini oku", durum: "36 g su oluşturmak için kaç mol H₂ ve O₂ gerekir? (H₂O: 18 g/mol)",
          adimlar: ["36 g ÷ 18 g/mol = 2 mol H₂O.", "Katsayılar mol oranıdır: 2 mol H₂ + 1 mol O₂ → 2 mol H₂O.", "2 mol H₂O için 2 mol H₂ ve 1 mol O₂ gerekir (kütle: 4 g + 32 g = 36 g)."],
          sonuc: "==2 mol H₂ ve 1 mol O₂== gerekir. Kütle de korunur: 4 g + 32 g = 36 g." },
        { tip: "tuzak", metin: "2H₂ + O₂ → 2H₂O'da katsayılar 2, 1, 2'dir ama kütleler 4 g, 32 g, 36 g'dır.", yanlis: "Katsayılar maddelerin kütle oranını verir.", dogru: "Katsayılar ==mol (tanecik) oranını== verir. Kütle için mol sayısını mol kütlesiyle çarp." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: okuma", metin: "*Two moles of hydrogen react with one mole of oxygen to produce two moles of water.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: katsayı", metin: "*The coefficients show the mole ratio of the substances in the reaction.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Kimyasal tepkimede bağlar kırılır, yenileri oluşur, yeni madde oluşur; belirtiler: gaz, çökelek, renk, ısı ve ışık.",
            "Tepkime için tanecikler yeterli enerjiyle (≥ Ea) ve uygun doğrultuda çarpışmalıdır (*effective collision*).",
            "Enerji diyagramında tepe = aktivasyon enerjisi. Ürünler düşükse ekzotermik (ΔH < 0), yüksekse endotermik (ΔH > 0).",
            "Kütle korunur: her elementin atom sayısı iki tarafta eşit olmalıdır.",
            "Denkleştirirken yalnızca katsayıyı değiştir, indisi asla; çok atomlu iyonları tek parça say.",
            "Hâl sembolleri: (s), (l), (g), (aq). Δ ısıtma, ↓ çökelek, ↑ gaz.",
            "Katsayılar mol oranıdır, kütle oranı değildir (2H₂ + O₂ → 2H₂O: 4 g + 32 g → 36 g)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Which of the following observations shows that a chemical reaction has taken place?",
      opts: ["An ice cube melting", "Bubbles rising from the surface of boiling water", "Fizzing and release of CO₂ when lemon juice is added to baking soda", "Salt dissolving in water"],
      a: 2,
      why: "Kabartma tozu ile limon suyu tepkimeye girer ve yeni madde (CO₂) oluşur. B en çekici yanlış şık: kaynayan sudaki kabarcıklar su buharıdır, fiziksel değişimdir." },
    { q: "When the equation ___ Al + ___ O₂ → ___ Al₂O₃ is balanced with the smallest whole-number coefficients, what is the sum of the coefficients?",
      opts: ["6", "7", "8", "9"],
      a: 3,
      why: "4Al + 3O₂ → 2Al₂O₃: 4 + 3 + 2 = 9. En çekici yanlış şık C (8): 4Al + 2O₂ → 2Al₂O₃ gibi hatalı bir denkleştirmeden gelir; orada O sayısı solda 4, sağda 6'dır." },
    { q: "The diagram shows the energy change of a reaction. Which statement about the activation energy and the type of this reaction is correct?",
      fig: { type: "graph", xlabel: "Reaction progress", ylabel: "Energy (kJ)", xmax: 10, ymax: 10, yticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }], lines: [{ from: [0, 4], to: [3, 4] }, { from: [3, 4], to: [5, 8] }, { from: [5, 8], to: [7, 2] }, { from: [7, 2], to: [10, 2] }], points: [{ q: 1, p: 4, label: "reactants" }, { q: 9, p: 2, label: "products" }] },
      opts: ["Ea = 80 kJ, endothermic", "Ea = 40 kJ, exothermic (ΔH = −20 kJ)", "Ea = 40 kJ, endothermic", "Ea = 20 kJ, exothermic"],
      a: 1,
      why: "Ea = tepe − girenler = 80 − 40 = 40 kJ. Ürünler (20 kJ) girenlerden (40 kJ) düşük: ekzotermik, ΔH = 20 − 40 = −20 kJ. A en çekici yanlış şık: tepenin yüksekliğini aktivasyon enerjisi sanır." },
    { q: "When the equation Ca(OH)₂ + H₃PO₄ → Ca₃(PO₄)₂ + H₂O is balanced with the smallest whole-number coefficients, what is the coefficient of H₂O?",
      opts: ["3", "4", "6", "12"],
      a: 2,
      why: "3Ca(OH)₂ + 2H₃PO₄ → Ca₃(PO₄)₂ + 6H₂O. H: 6 + 6 = 12 → 6H₂O gerekir; O: 6 + 8 = 14 = 8 + 6 ✓. D en çekici yanlış şık: H atomlarının sayısını (12) katsayı sanır." },
    { q: "Burning wood is an exothermic reaction, but wood does not ignite on its own; a match is needed. What is the reason?",
      opts: ["An initial input of energy is needed to supply the activation energy", "Wood and oxygen never collide", "The products have more energy than the reactants", "Combustion is an endothermic reaction"],
      a: 0,
      why: "Ekzotermik tepkimeler de aktivasyon enerjisi ister; kibrit bu enerjiyi sağlar. C en çekici yanlış şık: ürünlerin enerjisi yüksek olsaydı tepkime endotermik olurdu ve ısı vermezdi." }
  ]
};
