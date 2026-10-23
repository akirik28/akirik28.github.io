/* Kitpath not defteri · ch203 · 2.3 Çözünürlük Kuralları ve İyonik Denklemler
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry Exam 1-2) + MEB 10. sınıf kimya programı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch203",
  amac: "Bu konu iki çözelti karışınca ne olacağını tahmin etmeyi anlatıyor: çözünürlük kuralları, çökelek, su ya da gaz oluşumu ve molekül denkleminden tam ve net iyonik denkleme geçiş. Bir tepkimede hangi iyonların gerçekten tepkime verdiğini bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Çözünür ve çözünmez tuzlar: çözünürlük kuralları",
      kisa: "Grup 1 iyonları, NH₄⁺ ve NO₃⁻ içeren tuzlar çözünür; diğer kuralların istisnalarını bil.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💧", terim: "Soluble", tr: "çözünür", tanim: "Suda belirgin miktarda çözünüp iyonlarına ayrılan madde.", ornek: "NaNO₃, K₂CO₃." },
            { ikon: "🧱", terim: "Insoluble", tr: "çözünmez", tanim: "Suda çok az çözünen madde; çözeltide katı kalır ve çökelek (*precipitate*) verir.", ornek: "AgCl, BaSO₄." },
            { ikon: "📋", terim: "Solubility rules", tr: "çözünürlük kuralları", tanim: "Hangi iyonik bileşiğin suda çözüneceğini söyleyen deneysel kurallar.", ornek: "Bütün nitratlar çözünür." }
          ] },
        { tip: "tablo", baslik: "Çözünürlük kuralları", head: ["İyon", "Genelde", "İstisnalar"], rows: [
            ["Grup 1 iyonları (Na⁺, K⁺, Cs⁺ ...), NH₄⁺", "Bütün tuzları çözünür", "Yok"],
            ["NO₃⁻, CH₃COO⁻", "Çözünür", "Yok (ders düzeyinde)"],
            ["Cl⁻, Br⁻, I⁻", "Çözünür", "Ag⁺, Pb²⁺, Hg₂²⁺ ile çökelek verir"],
            ["SO₄²⁻", "Çözünür", "Ba²⁺, Pb²⁺, Sr²⁺ ile çökelek verir (Ca²⁺ ile az çözünür)"],
            ["OH⁻", "Çözünmez", "Na⁺, K⁺, NH₄⁺, Ba²⁺ ile çözünür (Ca²⁺ ile az çözünür)"],
            ["CO₃²⁻, PO₄³⁻, S²⁻", "Çözünmez", "Na⁺, K⁺, NH₄⁺ ile çözünür"]
          ], not: "Sınavda tablo verilirse onu kullan; bu liste yaygın ders kitabı kurallarıdır." },
        { tip: "ikili", sol: { ikon: "💧", baslik: "Suda çözünür", maddeler: ["İyonlarına ayrılıp çözeltide kalır", "Çökelek vermez"] },
          sag: { ikon: "🧱", baslik: "Suda çözünmez", maddeler: ["Katı olarak kalır", "Çökelek verir"] },
          oyun: [
            { metin: "CsCl", cevap: "sol", neden: "Cs⁺ grup 1 iyonudur: tuzları çözünür." },
            { metin: "AgCl", cevap: "sag", neden: "Klorürlerin istisnası: Ag⁺ ile çökelir." },
            { metin: "K₂CO₃", cevap: "sol", neden: "K⁺ tuzları çözünür; karbonat kuralının istisnası." },
            { metin: "BaSO₄", cevap: "sag", neden: "Sülfatların istisnası: Ba²⁺ ile çökelir." },
            { metin: "Pb(OH)₂", cevap: "sag", neden: "Hidroksitler çözünmez (grup 1 ve Ba²⁺ gibi istisnalar hariç)." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: çözünür", metin: "*All nitrates and all sodium, potassium and ammonium salts are soluble in water.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: çökelek", metin: "*AgCl, BaSO₄ and PbI₂ are insoluble, so they form precipitates.*" }
          ] }
      ]
    },
    {
      baslik: "Suda çözünme: iyonlarına ayrışma",
      kisa: "İyonik bileşik suda iyonlarına ayrışır; şeker gibi moleküler maddeler molekül olarak dağılır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "⚡", baslik: "İyonlarına ayrışır (*electrolyte*)", maddeler: ["İyonik bileşikler: NaCl, CaCl₂", "Çözelti elektriği iletir"] },
          sag: { ikon: "🍬", baslik: "Molekül olarak dağılır (*nonelectrolyte*)", maddeler: ["Şeker, etanol gibi moleküler maddeler", "Çözelti elektriği iletmez"] },
          oyun: [
            { metin: "Tuzlu su", cevap: "sol", neden: "Na⁺ ve Cl⁻ iyonları yük taşır." },
            { metin: "Şekerli su", cevap: "sag", neden: "Şeker molekülleri yüksüzdür, iyon yok." },
            { metin: "CaCl₂ çözeltisi", cevap: "sol", neden: "Ca²⁺ ve 2Cl⁻ iyonlarına ayrışır." },
            { metin: "Etanol çözeltisi", cevap: "sag", neden: "Etanol moleküler; iyon oluşturmaz." },
            { metin: "K₂SO₄ çözeltisi", cevap: "sol", neden: "2K⁺ ve SO₄²⁻ iyonlarına ayrışır." }
          ] },
        { tip: "ornek", baslik: "Al₂(SO₄)₃ suda çözünürse", durum: "0,1 mol Al₂(SO₄)₃ suda çözünüyor. Çözeltide kaç mol Al³⁺ ve SO₄²⁻ vardır?",
          adimlar: ["Ayrışma denklemi: Al₂(SO₄)₃(s) → 2Al³⁺(aq) + 3SO₄²⁻(aq).", "Katsayılar mol oranıdır: Al³⁺ = 0,1 × 2 = 0,2 mol.", "SO₄²⁻ = 0,1 × 3 = 0,3 mol."],
          sonuc: "==0,2 mol Al³⁺ ve 0,3 mol SO₄²⁻== (toplam 0,5 mol iyon). Yük kontrolü: 2 × (+3) = +6, 3 × (−2) = −6." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: ayrışma", metin: "*When an ionic compound dissolves in water, it dissociates into its ions.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: iletkenlik", metin: "*A sugar solution does not conduct electricity because sugar does not form ions in water.*" }
          ] }
      ]
    },
    {
      baslik: "Çift yer değiştirmede ürün tahmini",
      kisa: "İyonları değiştir, formülleri yaz, çözünürlük kuralıyla çökelek var mı bak.",
      bloklar: [
        { tip: "adimlar", baslik: "Ürün tahmini: 5 adım", adimlar: [
            { baslik: "İyonlara ayır", metin: "Her bileşiği katyon ve anyonuna ayır." },
            { baslik: "Partner değiştir", metin: "Birinci katyon ikinci anyonla, ikinci katyon birinci anyonla eşleşir." },
            { baslik: "Formülleri yaz", metin: "Yükleri dengeleyerek doğru indisleri yaz; sonra denkleştir." },
            { baslik: "Kurala bak", metin: "Yeni bileşiklerden biri çözünmezse çökelek (s) oluşur." },
            { baslik: "Hiçbiri çökelmezse", metin: "Gaz ya da su da yoksa tepkime olmaz (*no reaction*, NR)." }
          ] },
        { tip: "ornek", baslik: "Ba(NO₃)₂ + Na₂SO₄ → ?", durum: "İki renksiz çözelti karıştırılıyor. Ürünleri yaz ve çökelek olup olmadığını söyle.",
          adimlar: ["İyonlar: Ba²⁺, NO₃⁻ ve Na⁺, SO₄²⁻. Partner değiştir: Ba²⁺ + SO₄²⁻ ve Na⁺ + NO₃⁻.", "Formüller: BaSO₄ ve NaNO₃.", "Kural: Ba²⁺ ile sülfat çözünmez (istisna); NaNO₃ çözünür.", "Denkleştir: Ba(NO₃)₂ + Na₂SO₄ → BaSO₄ + 2NaNO₃."],
          sonuc: "==Ba(NO₃)₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaNO₃(aq)==, beyaz çökelek." },
        { tip: "tuzak", metin: "NaCl(aq) + KNO₃(aq) karıştırılınca partner değişimi NaNO₃ ve KCl verir; ikisi de çözünür.", yanlis: "İki çözelti karıştırılınca her zaman yeni bir madde oluşur.", dogru: "Çökelek, gaz ya da su yoksa ==tepkime olmaz (NR)==; çözeltide yalnızca dört cins iyon karışık durur." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: tepkime var", metin: "*A precipitate of BaSO₄ forms because Ba²⁺ and SO₄²⁻ ions combine to form an insoluble compound.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: tepkime yok", metin: "*No reaction occurs because all the possible products are soluble.*" }
          ] }
      ]
    },
    {
      baslik: "Çökelek, su ya da gaz: tepkimeyi yürüten üç itici güç",
      kisa: "Çift yer değiştirme tepkimesi çökelek, su ya da gaz oluşursa yürür.",
      bloklar: [
        { tip: "tablo", baslik: "Üç itici güç", head: ["Oluşan", "Hangi karışım?", "Örnek"], rows: [
            ["Çökelek (↓)", "Çözünmeyen tuz verebilen iki çözelti", "AgNO₃ + NaCl → AgCl↓ + NaNO₃"],
            ["Su (H₂O)", "Asit + baz", "HCl + NaOH → NaCl + H₂O"],
            ["Gaz (↑)", "Karbonat + asit (CO₂)", "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑"],
            ["Gaz (↑)", "Amonyum tuzu + baz (NH₃)", "NH₄Cl + NaOH → NaCl + H₂O + NH₃↑"],
            ["Gaz (↑)", "Sülfür + asit (H₂S)", "Na₂S + 2HCl → 2NaCl + H₂S↑"]
          ], not: "Karbonat asitle H₂CO₃ verir; H₂CO₃ kararsızdır ve hemen H₂O + CO₂'ye ayrışır." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🍋", terim: "Arrhenius acid", tr: "Arrhenius asidi", tanim: "Suda çözününce H⁺ iyonu veren madde.", ornek: "HCl, HBr, HNO₃." },
            { ikon: "🧼", terim: "Arrhenius base", tr: "Arrhenius bazı", tanim: "Suda çözününce OH⁻ iyonu veren madde.", ornek: "NaOH, Ca(OH)₂." },
            { ikon: "⚖️", terim: "Neutralization", tr: "nötrleşme", tanim: "Asit ile bazın tepkimesinden tuz ve su oluşması; çift yer değiştirmenin bir alt türüdür.", ornek: "NaOH + HBr → NaBr + H₂O." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Tepkime yürür", maddeler: ["Çökelek, su ya da gaz oluşur", "İyon sayısı azalır"] },
          sag: { ikon: "❌", baslik: "Tepkime yürümez (NR)", maddeler: ["Ürünlerin hepsi çözünür; su ve gaz yok", "İyonlar çözeltide aynen kalır"] },
          oyun: [
            { metin: "BaCl₂ + Na₂SO₄", cevap: "sol", neden: "BaSO₄ çöker." },
            { metin: "NaCl + KNO₃", cevap: "sag", neden: "NaNO₃ ve KCl çözünür; hiçbir şey olmaz." },
            { metin: "HCl + NaOH", cevap: "sol", neden: "Su oluşur (nötrleşme)." },
            { metin: "Na₂CO₃ + HNO₃", cevap: "sol", neden: "CO₂ gazı çıkar." },
            { metin: "KBr + NaNO₃", cevap: "sag", neden: "KNO₃ ve NaBr çözünür." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: itici güç", metin: "*The reaction occurs because a precipitate, water or a gas is formed.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: gaz", metin: "*Carbon dioxide gas is released when a carbonate reacts with an acid.*" }
          ] }
      ]
    },
    {
      baslik: "Molekül denkleminden tam iyonik denkleme",
      kisa: "Yalnızca çözünür iyonik maddeleri iyonlarına ayır; seyirci iyonlar iki tarafta aynen kalır.",
      bloklar: [
        { tip: "adimlar", baslik: "Molekül → tam iyonik → net iyonik", adimlar: [
            { baslik: "Molekül denklemi", metin: "Denkleştir, hâl sembollerini (aq), (s), (l), (g) ekle." },
            { baslik: "Tam iyonik denklem (*complete* ya da *overall ionic equation*)", metin: "Yalnızca (aq) olan güçlü elektrolitleri iyonlarına ayır. Çökelek (s), su (l), gaz (g) ve zayıf asit/baz olduğu gibi kalır." },
            { baslik: "Seyirci iyonlar", metin: "İki tarafta da aynen duran iyonlar (*spectator ions*) tepkimeye katılmaz." },
            { baslik: "Net iyonik denklem", metin: "Seyircileri çıkar. Kalanlar gerçekten tepkime verenlerdir. Atom ve yük iki tarafta eşit olmalı." }
          ] },
        { tip: "ornek", baslik: "AgNO₃ + NaCl → AgCl + NaNO₃", durum: "Gümüş nitrat ile sofra tuzu çözeltileri karışınca beyaz çökelek oluşuyor. Tam ve net iyonik denklemi yaz.",
          adimlar: ["Molekül: AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)", "Tam iyonik: Ag⁺(aq) + NO₃⁻(aq) + Na⁺(aq) + Cl⁻(aq) → AgCl(s) + Na⁺(aq) + NO₃⁻(aq)", "Seyirci iyonlar: Na⁺ ve NO₃⁻ (iki tarafta aynı).", "Net: Ag⁺(aq) + Cl⁻(aq) → AgCl(s)"],
          sonuc: "==Ag⁺(aq) + Cl⁻(aq) → AgCl(s)==. Yük kontrolü: (+1) + (−1) = 0 ve AgCl nötr." },
        { tip: "tuzak", metin: "AgCl(s), H₂O(l) ve CO₂(g) tam iyonik denklemde iyonlarına ayrılmadan yazılır. HCl, HNO₃, NaOH gibi güçlü asit ve bazlar ayrılır; CH₃COOH gibi zayıf asit molekül olarak kalır.", yanlis: "Tam iyonik denklemde bütün maddeleri iyonlarına ayırırım.", dogru: "Yalnızca ==suda çözünen güçlü elektrolitler (aq)== iyonlarına ayrılır; çökelek, su, gaz ve zayıf asit olduğu gibi yazılır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: seyirci iyon", metin: "*Spectator ions appear unchanged on both sides, so they are left out of the net ionic equation.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: iyonlara ayırma", metin: "*Only soluble ionic compounds are written as separate ions in a complete ionic equation.*" }
          ] }
      ]
    },
    {
      baslik: "Net iyonik denklem iletkenliği açıklar",
      kisa: "İyonlar çökelek ve suya dönüşürse çözeltinin iletkenliği düşer.",
      bloklar: [
        { tip: "grafik", baslik: "Ba(OH)₂ çözeltisine H₂SO₄ damlatılırken iletkenlik (model)", xlabel: "Eklenen H₂SO₄ (mL)", ylabel: "İletkenlik", xmax: 14, ymax: 9,
          xticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }], yticks: [],
          ogeler: [
            { id: "p0", tip: "nokta", renk: 0, x: 0, y: 8, etiket: "Ba²⁺ + 2OH⁻" },
            { id: "sol", tip: "egri", renk: 0, noktalar: [[0, 8], [5, 4.1], [10, 0.2]], gizli: true },
            { id: "pm", tip: "nokta", renk: 3, x: 10, y: 0.2, etiket: "≈ 0", gizli: true },
            { id: "sag", tip: "egri", renk: 2, noktalar: [[10, 0.2], [12, 3.2], [14, 6.2]], gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıçta Ba(OH)₂ çözeltisinde bol iyon var (Ba²⁺ ve OH⁻): iletkenlik yüksek." },
            { metin: "H₂SO₄ eklendikçe Ba²⁺ + SO₄²⁻ → BaSO₄(s) çöker, H⁺ + OH⁻ → H₂O oluşur. İyonlar tükenir, ==iletkenlik düşer.==", goster: ["sol"] },
            { metin: "Tam denkleşme noktasında bütün iyonlar çökelek ve suya dönüşmüştür: iletkenlik ==yaklaşık sıfır.==", goster: ["pm"] },
            { metin: "Asit fazla gelirse çözeltide serbest H⁺ ve SO₄²⁻ birikir: ==iletkenlik yeniden artar.==", goster: ["sag"] }
          ] },
        { tip: "ornek", baslik: "Ba(OH)₂ + H₂SO₄ tam ve net iyonik", durum: "Ba(OH)₂(aq) + H₂SO₄(aq) tepkimesinin tam ve net iyonik denklemini yaz; seyirci iyon var mı?",
          adimlar: ["Molekül: Ba(OH)₂(aq) + H₂SO₄(aq) → BaSO₄(s) + 2H₂O(l)", "Tam iyonik: Ba²⁺(aq) + 2OH⁻(aq) + 2H⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) + 2H₂O(l)", "İki tarafta aynen duran (aq) iyon yok: seyirci iyon yok.", "Yük kontrolü: sol (+2) + (−2) + (+2) + (−2) = 0; sağ 0."],
          sonuc: "Seyirci iyon yok: ==net iyonik denklem tam iyonik denklemle aynıdır.== Bütün iyonlar çökelek ve suya gittiği için iletkenlik sıfıra yaklaşır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: iletkenlik", metin: "*The conductivity decreases because the ions are removed from the solution as a precipitate and water.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: denkleşme noktası", metin: "*At the equivalence point there are almost no free ions, so the conductivity is close to zero.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Na⁺, K⁺, NH₄⁺ ve NO₃⁻ içeren tuzlar çözünür. Klorürler (Ag⁺, Pb²⁺ hariç) ve sülfatlar (Ba²⁺, Pb²⁺, Sr²⁺ hariç) çözünür. Karbonat, fosfat, sülfür ve hidroksitler çözünmez (grup 1 ve NH₄⁺ hariç).",
            "İyonik bileşik suda iyonlarına ayrışır (Al₂(SO₄)₃ → 2Al³⁺ + 3SO₄²⁻); şeker gibi moleküler maddeler iyon vermez.",
            "Ürün tahmini: iyonları ayır, partner değiştir, formülleri yaz, çözünürlük kuralına bak.",
            "Çift yer değiştirme çökelek, su ya da gaz oluşursa yürür; hiçbiri yoksa tepkime olmaz (NR).",
            "Tam iyonik denklemde yalnızca (aq) güçlü elektrolitler iyonlarına ayrılır; (s), (l), (g) ve zayıf asit olduğu gibi kalır.",
            "Seyirci iyonlar iki tarafta aynen durur; çıkarılınca net iyonik denklem kalır (AgNO₃ + NaCl: Ag⁺ + Cl⁻ → AgCl).",
            "İyonlar çökelek ve suya dönüşürse çözeltinin iletkenliği düşer (Ba(OH)₂ + H₂SO₄)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Which of the following salts is insoluble in water?",
      opts: ["NaNO₃", "K₂CO₃", "(NH₄)₂SO₄", "BaSO₄"],
      a: 3,
      why: "BaSO₄ sülfat kuralının istisnasıdır: Ba²⁺ ile çökelir. B en çekici yanlış şık: karbonatlar genelde çözünmez ama K⁺ tuzları her zaman çözünür." },
    { q: "Which of the following pairs of solutions forms a precipitate when mixed?",
      opts: ["NaCl + KNO₃", "KOH + NaNO₃", "Pb(NO₃)₂ + Na₂SO₄", "NH₄Cl + K₂SO₄"],
      a: 2,
      why: "Pb²⁺ ve SO₄²⁻ birleşince PbSO₄ çözünmez ve çöker. Diğer üç karışımda olası ürünlerin hepsi çözünür. B en çekici yanlış şık: hidroksitler çözünmez diye düşünür ama Na⁺ ve K⁺ ile çözünür." },
    { q: "A white precipitate forms when Na₂CO₃(aq) and CaCl₂(aq) are mixed. Which is the net ionic equation?",
      opts: ["Ca²⁺(aq) + CO₃²⁻(aq) → CaCO₃(s)", "Na⁺(aq) + Cl⁻(aq) → NaCl(s)", "Na₂CO₃(aq) + CaCl₂(aq) → CaCO₃(s) + 2NaCl(aq)", "2Na⁺(aq) + CO₃²⁻(aq) → Na₂CO₃(s)"],
      a: 0,
      why: "Çöken CaCO₃'tür; Na⁺ ve Cl⁻ seyircidir ve çıkarılır. C en çekici yanlış şık: molekül denklemidir, net iyonik denklem değildir." },
    { q: "In the complete ionic equation Pb²⁺(aq) + 2NO₃⁻(aq) + 2K⁺(aq) + 2I⁻(aq) → PbI₂(s) + 2K⁺(aq) + 2NO₃⁻(aq), which ions are the spectator ions?",
      opts: ["Pb²⁺ and I⁻", "K⁺ and NO₃⁻", "Pb²⁺ and NO₃⁻", "K⁺ and I⁻"],
      a: 1,
      why: "K⁺ ve NO₃⁻ iki tarafta da (aq) olarak aynen durur: seyirci iyonlardır. A en çekici yanlış şık: bunlar tepkimeye giren ve PbI₂ oluşturan iyonlardır." },
    { q: "The conductivity measured while H₂SO₄ is added to a Ba(OH)₂ solution is shown in the graph. What has happened in the solution at the minimum point?",
      fig: { type: "graph", xlabel: "H₂SO₄ added (mL)", ylabel: "Conductivity", xmax: 14, ymax: 9, lines: [{ from: [0, 8], to: [10, 0.2] }, { from: [10, 0.2], to: [14, 6.2] }] },
      opts: ["Ba²⁺ and SO₄²⁻ are at their highest concentration", "BaSO₄ has precipitated and H⁺ and OH⁻ have formed water; almost no free ions are left", "The solution has become pure H₂SO₄", "The reaction has stopped and no products have formed"],
      a: 1,
      why: "Ba²⁺ + SO₄²⁻ → BaSO₄(s) ve H⁺ + OH⁻ → H₂O ile iyonlar tükenir, iletkenlik sıfıra yaklaşır. A en çekici yanlış şık: bu iyonlar tam tersine çökerek çözeltiden çıkmıştır." }
  ]
};
