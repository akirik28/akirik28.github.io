/* Kitora not defteri · ch202 · 2.2 Tepkime Türleri
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry Exam 1-2) + MEB 10. sınıf kimya programı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch202",
  amac: "Bu konu kimyasal tepkimeleri beş türe ayırıyor: sentez, ayrışma, yanma, tek yer değiştirme ve çift yer değiştirme. Bir tepkimenin türünü tanımayı ve ürünlerini tahmin etmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Sentez ve ayrışma",
      kisa: "Sentezde küçük maddeler birleşir; ayrışmada tek madde parçalanır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧩", baslik: "*Synthesis* (sentez): A + B → AB", maddeler: ["Birden çok giren, tek ürün", "Örnek: 2Mg + O₂ → 2MgO"] },
          sag: { ikon: "✂️", baslik: "*Decomposition* (ayrışma): AB → A + B", maddeler: ["Tek giren, birden çok ürün", "Örnek: ısı ya da elektrikle parçalanma"] },
          oyun: [
            { metin: "2H₂O₂ → 2H₂O + O₂", cevap: "sag", neden: "Tek madde iki maddeye ayrışıyor." },
            { metin: "N₂ + 3H₂ → 2NH₃", cevap: "sol", neden: "İki elementten tek ürün." },
            { metin: "CaCO₃ → CaO + CO₂ (ısıtma)", cevap: "sag", neden: "Kireçtaşı ısıyla ayrışır." },
            { metin: "CaO + H₂O → Ca(OH)₂", cevap: "sol", neden: "İki maddeden tek ürün." },
            { metin: "2H₂O → 2H₂ + O₂ (elektroliz)", cevap: "sag", neden: "Elektrik akımıyla ayrışır." }
          ] },
        { tip: "tablo", baslik: "Ürünü tahmin etme kuralları", head: ["Tepkime", "Kural", "Örnek"], rows: [
            ["Sentez", "Metal + ametal → iyonik bileşik", "2Na + Cl₂ → 2NaCl"],
            ["Sentez", "Metal oksit + su → baz", "CaO + H₂O → Ca(OH)₂"],
            ["Sentez", "Ametal oksit + su → asit", "CO₂ + H₂O → H₂CO₃"],
            ["Ayrışma", "Karbonat → metal oksit + CO₂", "CaCO₃ → CaO + CO₂"],
            ["Ayrışma", "Hidrojen peroksit → su + O₂", "2H₂O₂ → 2H₂O + O₂"]
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: sentez", metin: "*This is a synthesis reaction because two substances combine to form a single product.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: ayrışma", metin: "*This is a decomposition reaction because one compound breaks down into two or more substances.*" }
          ] }
      ]
    },
    {
      baslik: "Yanma tepkimeleri ve hidrokarbon yanması",
      kisa: "Yanma, maddenin oksijenle ısı ve ışık vererek tepkimesidir; hidrokarbon yanınca CO₂ ve H₂O çıkar.",
      bloklar: [
        { tip: "ornek", baslik: "C₃H₈ + O₂ → CO₂ + H₂O", durum: "Propan (LPG'nin bir bileşeni) bol oksijende yanıyor. Denklemi C, H, O sırasıyla denkleştir.",
          adimlar: ["C: solda 3 → 3CO₂.", "H: solda 8 → 4H₂O.", "O: sağda 3 × 2 + 4 = 10 → 5O₂.", "Kontrol: C 3 = 3; H 8 = 8; O 10 = 10."],
          sonuc: "==C₃H₈ + 5O₂ → 3CO₂ + 4H₂O==. Hidrokarbonlarda sıra: önce C, sonra H, oksijeni en sona bırak. Yakıtta oksijen varsa onu da say: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O (O: 1 + 6 = 7 = 4 + 3)." },
        { tip: "tablo", baslik: "Tam yanma ve eksik yanma", head: ["", "Tam yanma", "Eksik yanma"], rows: [
            ["Oksijen", "Bol", "Yetersiz"],
            ["Ürünler", "CO₂ + H₂O", "CO (ve/veya C, is) + H₂O"],
            ["Örnek denklem", "CH₄ + 2O₂ → CO₂ + 2H₂O", "2CH₄ + 3O₂ → 2CO + 4H₂O"],
            ["Alev", "Mavi", "Sarı, isli"],
            ["Tehlike", "—", "CO zehirlidir"]
          ] },
        { tip: "tuzak", metin: "Magnezyum şeridi parlak ışıkla yanar: 2Mg + O₂ → 2MgO. Bu tepkime tek bir üründe birleştiği için sentez, oksijenle ısı ve ışık verdiği için yanmadır.", yanlis: "Bir tepkime yalnızca tek bir türe girer.", dogru: "Bir tepkime ==birden fazla türe== girebilir. Mg + O₂ hem sentez hem yanmadır; soru hangisini sorarsa onu yaz. Demirin paslanması da oksijenle yavaş yürüyen bir tepkimedir (MEB kitaplarında \"yavaş yanma\" denir); ışık vermez." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: tam yanma", metin: "*Complete combustion of a hydrocarbon produces carbon dioxide and water.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: eksik yanma", metin: "*Incomplete combustion produces carbon monoxide or soot because there is not enough oxygen.*" }
          ] }
      ]
    },
    {
      baslik: "Tek yer değiştirme ve aktiflik",
      kisa: "Aktif element, bileşikteki daha az aktif elementin yerini alır.",
      bloklar: [
        { tip: "tablo", baslik: "Aktiflik sıralaması (aktiften az aktife)", head: ["Grup", "Elementler", "Ne yapar?"], rows: [
            ["Çok aktif metaller", "Li, K, Ba, Ca, Na", "Soğuk suyla bile hızla tepkime verir"],
            ["Aktif metaller", "Mg, Al, Zn, Fe, Ni, Sn, Pb", "Asitten H₂ çıkarır; az aktif metali tuzundan söker"],
            ["Az aktif metaller", "Cu, Ag, Au", "Asitten H₂ çıkaramaz"],
            ["Halojenler", "F₂ > Cl₂ > Br₂ > I₂", "Aktif halojen, az aktif halojenin iyonunu söker"]
          ], not: "Genel biçim: A + BC → AC + B. A, B'den daha aktif olmalıdır (3Na + AlCl₃ → 3NaCl + Al). Tek yer değiştirme tepkimelerinin hepsi aynı zamanda redokstur (2.4)." },
        { tip: "grafik", baslik: "Zn + CuSO₄: çözeltideki iyonlar (model)", xlabel: "Zaman", ylabel: "İyon derişimi (birim)", xmax: 10, ymax: 10,
          xticks: [], yticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "c0", tip: "nokta", renk: 3, x: 0, y: 8, etiket: "Cu²⁺" },
            { id: "z0", tip: "nokta", renk: 2, x: 0, y: 0.1, etiket: "Zn²⁺" },
            { id: "cu", tip: "egri", renk: 3, etiket: "Cu²⁺", noktalar: [[0, 8], [1, 5.3], [2, 3.5], [3, 2.3], [4, 1.5], [5, 1], [6, 0.6], [8, 0.2], [9.5, 0.1]], gizli: true },
            { id: "zn", tip: "egri", renk: 2, etiket: "Zn²⁺", noktalar: [[0, 0], [1, 2.7], [2, 4.5], [3, 5.7], [4, 6.5], [5, 7], [6, 7.4], [8, 7.8], [9.5, 7.9]], gizli: true },
            { id: "top", tip: "cizgi", renk: 1, kesik: true, from: [0, 8], to: [10, 8], gizli: true },
            { id: "topt", tip: "yazi", x: 5, y: 9, metin: "Cu²⁺ + Zn²⁺ = sabit", gizli: true }
          ],
          durumlar: [
            { metin: "Çinko çubuk mavi CuSO₄ çözeltisine batırıldı (Zn fazla). Başlangıçta çözeltide yalnızca Cu²⁺ var, Zn²⁺ yok." },
            { metin: "Zn, Cu²⁺'dan daha aktif: ==Zn + Cu²⁺ → Zn²⁺ + Cu==. Cu²⁺ azalır; çubukta kırmızı bakır birikir, mavi renk solar.", goster: ["cu"] },
            { metin: "Harcanan her Cu²⁺ yerine bir Zn²⁺ çözeltiye geçer; Zn²⁺ artar.", goster: ["zn"] },
            { metin: "Yükler 2+'a 2+ ile değiştiği için iyonların toplamı sabit kalır. Net olay: ==çinko elektron verir, bakır iyonu alır.==", goster: ["top", "topt"] }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Tepkime olur", maddeler: ["Giren element, bileşikteki elementten daha aktif", "Ürün: yeni bileşik + sökülen element"] },
          sag: { ikon: "❌", baslik: "Tepkime olmaz", maddeler: ["Giren element daha az aktif", "Hiçbir değişiklik gözlenmez"] },
          oyun: [
            { metin: "Zn + CuSO₄ → ?", cevap: "sol", neden: "Zn, Cu'dan aktif: ZnSO₄ + Cu oluşur." },
            { metin: "Cu + ZnSO₄ → ?", cevap: "sag", neden: "Cu, Zn'dan az aktif; yerini alamaz." },
            { metin: "Mg + 2HCl → ?", cevap: "sol", neden: "Mg, H'den aktif: MgCl₂ + H₂ çıkar." },
            { metin: "Cu + HCl → ?", cevap: "sag", neden: "Cu, H'den az aktif; H₂ çıkarmaz." },
            { metin: "Br₂ + 2NaI → ?", cevap: "sol", neden: "Br₂, I₂'den aktif: 2NaBr + I₂ oluşur." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: metal", metin: "*A more reactive metal displaces a less reactive metal from its compound.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: asit", metin: "*Copper does not react with hydrochloric acid because it is less reactive than hydrogen.*" }
          ] }
      ]
    },
    {
      baslik: "Çift yer değiştirme ve alt türleri",
      kisa: "İki bileşiğin iyonları partner değiştirir; çökelek, su ya da gaz oluşursa tepkime yürür.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "AB", alt: "A⁺ B⁻" }, "+",
            { t: "CD", alt: "C⁺ D⁻" }, "→",
            { t: "AD" }, "+",
            { t: "CB" }
          ], aciklama: "Katyonlar partner değiştirir. Formülleri yazarken yükleri dengele: Pb²⁺ ile I⁻ → PbI₂." },
        { tip: "tablo", baslik: "Üç alt tür", head: ["Alt tür", "Oluşan", "Örnek"], rows: [
            ["*Precipitation* (çökelme)", "Çözünmeyen katı (↓)", "AgNO₃ + NaCl → AgCl↓ + NaNO₃"],
            ["*Neutralization* (nötrleşme)", "Tuz + su", "HCl + NaOH → NaCl + H₂O"],
            ["*Gas formation* (gaz oluşumu)", "Gaz (CO₂, SO₂, H₂S, NH₃)", "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑"]
          ] },
        { tip: "ornek", baslik: "Pb(NO₃)₂ + KI → ?", durum: "Kurşun nitrat çözeltisi potasyum iyodür çözeltisine katılıyor. Ürünleri yaz ve denkleştir.",
          adimlar: ["İyonlar: Pb²⁺, NO₃⁻ ve K⁺, I⁻. Partner değiştir: Pb²⁺ + I⁻ ve K⁺ + NO₃⁻.", "Yükleri dengele: PbI₂ ve KNO₃.", "Denkleştir: Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃.", "PbI₂ suda çözünmez (sarı çökelek): tepkime olur."],
          sonuc: "==Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq)==, sarı çökelek." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: tanım", metin: "*In a double replacement reaction, the cations and anions of two compounds switch partners.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: çökelme", metin: "*A precipitation reaction forms an insoluble solid when two solutions are mixed.*" }
          ] }
      ]
    },
    {
      baslik: "Tepkime türünü tanıma",
      kisa: "Giren ve ürün sayısına, oksijene ve elementlere bakarak türü bul.",
      bloklar: [
        { tip: "harita", merkez: "5 tepkime türü", dallar: [
            { baslik: "*Synthesis*", alt: "A + B → AB (çok giren, tek ürün)" },
            { baslik: "*Decomposition*", alt: "AB → A + B (tek giren, çok ürün)" },
            { baslik: "*Combustion*", alt: "Madde + O₂ → oksit; hidrokarbon: CO₂ + H₂O" },
            { baslik: "*Single replacement*", alt: "A + BC → AC + B (element + bileşik)" },
            { baslik: "*Double replacement*", alt: "AB + CD → AD + CB (iki bileşik)" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧱", terim: "Precipitate", tr: "çökelek", tanim: "Çözelti içinde oluşan, suda çözünmeyen katı madde.", ornek: "AgCl beyaz, PbI₂ sarı çökelektir." },
            { ikon: "⛽", terim: "Hydrocarbon", tr: "hidrokarbon", tanim: "Yalnızca C ve H içeren bileşik; yakıtların ana maddesi.", ornek: "CH₄ (doğalgaz), C₃H₈ (LPG)." },
            { ikon: "📶", terim: "Activity series", tr: "aktiflik serisi", tanim: "Elementlerin tepkime verme isteğine göre sıralanması; tek yer değiştirmenin olup olmayacağını söyler.", ornek: "Zn, Cu'dan üstte: Zn bakırı çözeltisinden söker." }
          ] },
        { tip: "ornek", baslik: "Her tepkimenin türünü bul", durum: "1) N₂ + 3H₂ → 2NH₃  2) 2KClO₃ → 2KCl + 3O₂  3) CH₄ + 2O₂ → CO₂ + 2H₂O  4) Fe + CuSO₄ → FeSO₄ + Cu  5) BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl",
          adimlar: ["1) İki elementten tek ürün → sentez.", "2) Tek giren, iki ürün → ayrışma.", "3) Hidrokarbon + O₂ → CO₂ + H₂O → yanma.", "4) Element + bileşik, element ürün olarak sökülüyor → tek yer değiştirme.", "5) İki bileşik, iyonlar partner değiştiriyor ve BaSO₄ çöküyor → çift yer değiştirme (çökelme)."],
          sonuc: "==1 sentez, 2 ayrışma, 3 yanma, 4 tek yer değiştirme, 5 çift yer değiştirme.== Önce giren sayısına, sonra O₂ var mı ve element-bileşik ayrımına bak." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: sınıflandırma", metin: "*This reaction is a single replacement because an element replaces another element in a compound.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: gerekçe", metin: "*The reaction is a combustion reaction because a hydrocarbon reacts with oxygen to form carbon dioxide and water.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Sentez: A + B → AB. Ayrışma: AB → A + B (ısı, elektrik ya da ışıkla).",
            "Yanma: madde + O₂. Hidrokarbon tam yanınca CO₂ + H₂O; O₂ yetersizse CO (ve/veya is) oluşur.",
            "Bir tepkime birden fazla türe girebilir: 2Mg + O₂ → 2MgO hem sentez hem yanmadır.",
            "Tek yer değiştirme: A + BC → AC + B; yalnızca A, B'den daha aktifse olur. Cu, Ag, Au asitten H₂ çıkaramaz.",
            "Çift yer değiştirme: AB + CD → AD + CB; çökelme, nötrleşme ya da gaz oluşumuyla yürür.",
            "Hidrokarbon yanmasını C, H, O sırasıyla denkleştir; C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.",
            "Türü bulmak için: kaç giren/ürün var, O₂ var mı, element + bileşik mi yoksa iki bileşik mi?"
          ] }
      ]
    }
  ],
  sorular: [
    { q: "When limestone (CaCO₃) is heated in a kiln, CaO and CO₂ are formed. What type of reaction is this?",
      opts: ["Synthesis", "Decomposition", "Single replacement", "Double replacement"],
      a: 1,
      why: "Tek madde (CaCO₃) iki ürüne parçalanıyor: ayrışma. A en çekici yanlış şık: sentezde giren sayısı çok, ürün sayısı birdir; burada tersi var." },
    { q: "The table gives the order of reactivity of five metals (1 is the most reactive). In which mixture does a chemical reaction take place?",
      fig: { type: "table", caption: "Reactivity order", head: ["Rank", "1", "2", "3", "4", "5"], rows: [["Metal", "Mg", "Zn", "Fe", "Cu", "Ag"]] },
      opts: ["Cu + ZnSO₄", "Ag + Cu(NO₃)₂", "Zn + FeSO₄", "Cu + MgCl₂"],
      a: 2,
      why: "Zn, Fe'den daha aktiftir: Zn + FeSO₄ → ZnSO₄ + Fe. B en çekici yanlış şık: Ag, Cu'dan az aktiftir; Cu'nun yerini alamaz." },
    { q: "Butane (C₄H₁₀) burns in excess oxygen. When the equation is balanced with the smallest whole-number coefficients, what is the coefficient of O₂?",
      opts: ["13", "6.5", "8", "10"],
      a: 0,
      why: "2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O: C 8, H 20 ve O 26 iki tarafta eşit. B en çekici yanlış şık: C₄H₁₀ + 6,5O₂ matematiksel olarak doğru ama katsayılar tam sayı olmalıdır; her yanı 2 ile çarpılır." },
    { q: "Which of the following double replacement reactions is a neutralization (acid-base) reaction?",
      opts: ["AgNO₃ + NaCl → AgCl + NaNO₃", "HNO₃ + KOH → KNO₃ + H₂O", "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂", "BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl"],
      a: 1,
      why: "Asit + baz → tuz + su: HNO₃ + KOH → KNO₃ + H₂O. C en çekici yanlış şık: bu da su içerir ama temel ürün CO₂ gazıdır; gaz oluşumu tepkimesidir." },
    { q: "The flame of a natural gas stove burns yellow and sooty instead of blue. Which statement is the most reasonable?",
      opts: ["Combustion is complete; only CO₂ and H₂O are formed", "The reaction has turned into decomposition", "No reaction is taking place in the stove", "There is not enough oxygen, so combustion is incomplete and CO and soot may form"],
      a: 3,
      why: "Sarı, isli alev oksijen yetersizliğinin göstergesidir: eksik yanmada zehirli CO ve is (C) oluşur. A en çekici yanlış şık: mavi alev tam yanmayı gösterir." }
  ]
};
