/* Kitora not defteri · bi107 · 1.7 Oksijensiz Solunum ve Fermantasyon
   Kaynak: öğretmen lecture'ı (1.9 Fermentation, Anaerobic Respiration) + defter-araclari/kaynak/okul-10-2025-26.md + MEB Maarif BİY.10.
   ATP: oksijenli solunum için lecture'daki en çok yaklaşık 38 kullanıldı (38 ÷ 2 = 19 kat); güncel ~30–32 yalnız kısa not. */
window.DEFTER = {
  slug: "bi107",
  amac: "Bu konu oksijen olmadan ATP elde etmeyi anlatıyor: *anaerobic respiration* ve *fermentation* (laktik asit ve etil alkol). İkisinin farkını, fermantasyonun NAD⁺'yı neden yenilediğini ve neden oksijenli solunumdan çok daha az ATP verdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Oksijensiz solunum ve fermantasyon farkı",
      kisa: "Oksijensiz solunumda elektron taşıma zinciri vardır; fermantasyonda yoktur.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🦠", baslik: "*Anaerobic respiration* (oksijensiz solunum)", maddeler: ["Elektron taşıma zinciri ==var==", "Son elektron alıcısı: ==inorganik== (SO₄²⁻, S⁰, NO₃⁻, CO₂, Fe³⁺)", "Derin toprak ve durgun gölet bakterileri, arkeler", "Fermantasyondan çok, oksijenliden az ATP"] },
          sag: { ikon: "🍞", baslik: "*Fermentation* (fermantasyon)", maddeler: ["Elektron taşıma zinciri ==yok==", "Son alıcı: ==organik== molekül (piruvat ya da türevi)", "ATP yalnız glikolizden: net 2", "Örnek: kas, maya, *Lactobacillus*"] },
          oyun: [
            { metin: "Sülfat (SO₄²⁻) son elektron alıcısı olan, zinciri olan bakteri.", cevap: "sol", neden: "İnorganik alıcı ve zincir: oksijensiz solunum." },
            { metin: "Piruvat doğrudan laktata çevriliyor, elektron taşıma zinciri yok.", cevap: "sag", neden: "Organik alıcı ve zincir yok: fermantasyon." },
            { metin: "Maya hamurunda CO₂ çıkarken etil alkol oluşuyor.", cevap: "sag", neden: "Organik moleküller ürün: alkol fermantasyonu." },
            { metin: "Nitratı (NO₃⁻) azot gazına çeviren toprak bakterisi.", cevap: "sol", neden: "NO₃⁻ inorganik son alıcıdır: oksijensiz solunum." }
          ] },
        { tip: "tablo", baslik: "Oksijensiz solunum: son elektron alıcıları", head: ["Son elektron alıcısı", "Ürün", "Örnek canlı"], rows: [
            ["NO₃⁻ (nitrat)", "N₂ ve diğer azotlu bileşikler", "Denitrifikasyon bakterileri"],
            ["SO₄²⁻ (sülfat)", "H₂S", "Sülfat indirgeyen bakteriler"],
            ["CO₂", "CH₄ (metan)", "Metan üreten arkeler (*methanogens*)"],
            ["S⁰ (kükürt)", "H₂S (ek bilgi)", "Kükürt indirgeyen bakteriler"],
            ["Fe³⁺", "Fe²⁺ (ek bilgi)", "Demir indirgeyen bakteriler"]
          ], not: "Sınavda böyle yaz: *In anaerobic respiration the final electron acceptor is an inorganic substance, but in fermentation it is an organic molecule.*" }
      ]
    },
    {
      baslik: "Fermantasyon neden gerekir? NAD⁺ sorunu",
      kisa: "Fermantasyon ATP yapmaz; glikolizin sürmesi için NAD⁺'yı yeniler.",
      bloklar: [
        { tip: "adimlar", baslik: "Zincirleme sorun ve çözüm", adimlar: [
            { baslik: "Glikoliz sürer", metin: "Glikoliz glikozu yıkarken NAD⁺'yı NADH'ye çevirir ve 2 ATP kazandırır." },
            { baslik: "Sorun", metin: "O₂ yok; elektron taşıma zinciri NADH'yi NAD⁺'ya çeviremez. NAD⁺ tükenirse glikoliz durur." },
            { baslik: "Çözüm", metin: "Piruvat ya da türevi, NADH'nin elektronlarını alır; NADH ==NAD⁺==ya dönüşür." },
            { baslik: "Sonuç", metin: "NAD⁺ yenilenir, glikoliz devam eder ve hücre ATP üretmeyi sürdürür." }
          ] },
        { tip: "tuzak", metin: "Fermantasyonda ATP, laktat ya da alkol oluşurken değil, glikolizde yapılır. Laktat/alkol basamağı ATP vermez.", yanlis: "Fermantasyonun ATP'si laktat ya da alkol oluşurken kazanılır.", dogru: "ATP yalnız glikolizden gelir (net 2). Laktat/alkol oluşumunun görevi NAD⁺'yı yenilemektir." },
        { tip: "not", metin: "Sınavda böyle yaz: *Fermentation regenerates NAD⁺ so that glycolysis can continue and produce ATP in the absence of oxygen.*" }
      ]
    },
    {
      baslik: "Laktik asit fermantasyonu",
      kisa: "Piruvat laktata çevrilir; CO₂ çıkmaz, net 2 ATP kazanılır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "C₆H₁₂O₆", alt: "glikoz" }, "→",
            { t: "2 laktat", alt: "laktik asit" }, "+",
            { t: "2 ATP", alt: "net" }
          ], aciklama: "Piruvat + NADH → laktat + NAD⁺. CO₂ ==çıkmaz==. Yer: sitoplazma." },
        { tip: "adimlar", baslik: "Koşan kas hücresi", adimlar: [
            { baslik: "Hızlı koşu", metin: "Glikoz yıkımı, kasın kandan O₂ alımını aşar. Hücre oksijenli solunum ve fermantasyonu birlikte yürütür." },
            { baslik: "Fermantasyon", metin: "Piruvat laktata çevrilir ve glikoliz 2 ATP vermeye devam eder." },
            { baslik: "Dinlenme", metin: "Laktat kanla karaciğere taşınır, piruvata dönüşür ve karaciğer hücrelerinin mitokondrisinde yükseltgenir." }
          ] },
        { tip: "not", metin: "Bazı mantar ve bakteriler laktik asit fermantasyonuyla peynir ve yoğurt yapar. Olgun memeli alyuvarları da ATP'yi bu yolla üretir. Az miktarda laktik asit, yeterli O₂ geldiğinde kasın daha iyi çalışmasını sağlar; ısınma hareketleri bu yüzden yararlıdır. Sınavda böyle yaz: *In lactic acid fermentation, pyruvate is reduced to lactate and no carbon dioxide is released.*" }
      ]
    },
    {
      baslik: "Etil alkol fermantasyonu",
      kisa: "Piruvat önce CO₂ verir, sonra etil alkole indirgenir; net 2 ATP kazanılır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "C₆H₁₂O₆", alt: "glikoz" }, "→",
            { t: "2 C₂H₅OH", alt: "etil alkol" }, "+",
            { t: "2 CO₂", alt: "gaz" }, "+",
            { t: "2 ATP", alt: "net" }
          ], aciklama: "Yer: sitoplazma. Mayalarda (tek hücreli mantar), bazı bakterilerde ve bazı bitki tohumlarında görülür." },
        { tip: "adimlar", baslik: "İki basamak", adimlar: [
            { baslik: "Piruvat → asetaldehit", metin: "Piruvattan 1 CO₂ ayrılır; 2 karbonlu asetaldehit kalır." },
            { baslik: "Asetaldehit → etil alkol", metin: "Asetaldehit, NADH'den elektron alıp etil alkole indirgenir; NAD⁺ yenilenir." }
          ] },
        { tip: "not", metin: "Maya fermantasyonu bira ve şarap yapımında ve ekmek hamurunu CO₂ ile kabartmada kullanılır; fırında alkol buharlaşır (ek bilgi). Sınavda böyle yaz: *In alcoholic fermentation, pyruvate is converted to ethanol and carbon dioxide.*" }
      ]
    },
    {
      baslik: "Üç yolun karşılaştırması",
      kisa: "Oksijenli solunum, fermantasyondan en çok yaklaşık 19 kat daha çok ATP verir.",
      bloklar: [
        { tip: "grafik", baslik: "1 glikozdan elde edilen ATP", xlabel: "Yol", ylabel: "ATP sayısı", xmax: 10, ymax: 44,
          xticks: [{ v: 2, label: "Oksijenli" }, { v: 5, label: "Laktik" }, { v: 8, label: "Alkol" }],
          yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }, { v: 40, label: "40" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 0, noktalar: [[1.2, 0], [2.8, 0], [2.8, 0], [1.2, 0]] },
            { id: "t1", tip: "yazi", x: 2, y: 40.6, metin: "≈ 38", gizli: true },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[4.2, 0], [5.8, 0], [5.8, 0], [4.2, 0]] },
            { id: "t2", tip: "yazi", x: 5, y: 3.4, metin: "2", gizli: true },
            { id: "b3", tip: "alan", renk: 1, noktalar: [[7.2, 0], [8.8, 0], [8.8, 0], [7.2, 0]] },
            { id: "t3", tip: "yazi", x: 8, y: 3.4, metin: "2", gizli: true },
            { id: "oran", tip: "yazi", x: 6, y: 19, metin: "38 ÷ 2 = 19 kat", gizli: true }
          ],
          durumlar: [
            { metin: "Aynı 1 glikozdan ne kadar ATP çıkar? Önce oksijenli solunum." },
            { metin: "==Oksijenli solunum==: en çok yaklaşık 38 ATP (glikoliz 2 + Krebs 2 + elektron taşıma zinciri ≈ 34).", set: { b1: { noktalar: [[1.2, 0], [2.8, 0], [2.8, 38], [1.2, 38]] } }, goster: ["t1"] },
            { metin: "==Laktik asit fermantasyonu==: yalnız glikolizin net 2 ATP'si.", set: { b2: { noktalar: [[4.2, 0], [5.8, 0], [5.8, 2], [4.2, 2]] } }, goster: ["t2"] },
            { metin: "==Alkol fermantasyonu== da net 2 ATP verir.", set: { b3: { noktalar: [[7.2, 0], [8.8, 0], [8.8, 2], [7.2, 2]] } }, goster: ["t3"] },
            { metin: "Fermantasyon yapan hücre aynı ATP için yaklaşık 19 kat daha çok glikoz yakar (güncel ≈ 30–32 ATP ile 15–16 kat). Sınavda böyle yaz: *The graph shows that aerobic respiration produces much more ATP than fermentation.*", goster: ["oran"] }
          ] },
        { tip: "tablo", head: ["", "Oksijenli solunum", "Laktik asit ferm.", "Alkol ferm."], rows: [
            ["O₂", "Gerekir", "Gerekmez", "Gerekmez"],
            ["Elektron taşıma zinciri", "Var", "Yok", "Yok"],
            ["CO₂ çıkışı", "Var (6)", "Yok", "Var (2)"],
            ["Ürün", "H₂O + CO₂", "Laktat", "Etil alkol + CO₂"],
            ["Net ATP", "≈ 38 (en çok)", "2", "2"],
            ["Yer", "Sitoplazma + mitokondri", "Sitoplazma", "Sitoplazma"]
          ], vurgu: 4, not: "Sınavda böyle yaz: *Fermentation yields only two ATP per glucose because glucose is only partly broken down.*" },
        { tip: "tuzak", metin: "Fermantasyonda glikoz tam yıkılmaz: laktat ya da alkol hâlâ enerji taşır. Bu yüzden ATP verimi düşüktür.", yanlis: "Laktik asit fermantasyonu da CO₂ açığa çıkarır.", dogru: "CO₂ yalnız oksijenli solunumda ve alkol fermantasyonunda çıkar; laktik asit fermantasyonunda çıkmaz." }
      ]
    },
    {
      baslik: "Oksijenle ilişkilerine göre canlılar (ek bilgi)",
      kisa: "Zorunlu anaeroplar O₂'den zarar görür; fakültatifler iki yolu da kullanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚫", terim: "Obligate anaerobe", tr: "zorunlu anaerop", tanim: "Yalnız oksijensiz ortamda yaşar; O₂ onlara zarar verir ya da öldürür.", ornek: "Tetanoz bakterisi, metan üreten arkeler." },
            { ikon: "🔀", terim: "Facultative anaerobe", tr: "fakültatif anaerop", tanim: "O₂ varsa oksijenli solunum, yoksa fermantasyon yapar.", ornek: "Maya, bağırsak bakterisi *E. coli*, iskelet kası." },
            { ikon: "🫁", terim: "Obligate aerobe", tr: "zorunlu aerop", tanim: "Yaşamak için O₂'ye ihtiyaç duyar; oksijensiz ortamda ATP üretemez.", ornek: "İnsan beyin hücreleri, çoğu hayvan ve bitki." }
          ] },
        { tip: "not", metin: "Sınavda böyle yaz: *Facultative anaerobes use oxygen when it is available, but they switch to fermentation when oxygen is absent.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Oksijensiz solunum: zincir var, son alıcı inorganik (SO₄²⁻, S⁰, NO₃⁻, CO₂, Fe³⁺). Fermantasyon: zincir yok, son alıcı organik.",
            "Fermantasyonun görevi NADH'yi NAD⁺'ya çevirmektir; böylece glikoliz sürer.",
            "Fermantasyonda ATP yalnız glikolizden gelir: net 2 ATP.",
            "Laktik asit: piruvat + NADH → laktat + NAD⁺; CO₂ yok. Kas, olgun alyuvar, *Lactobacillus* (yoğurt, peynir).",
            "Etil alkol: piruvat → asetaldehit + CO₂ → etil alkol; maya (bira, şarap, ekmek).",
            "Oksijenli solunum en çok yaklaşık 38 ATP verir, fermantasyondan yaklaşık 19 kat fazla (38 ÷ 2).",
            "Zorunlu anaerop O₂'siz yaşar; fakültatif ikisini de yapar; zorunlu aerop O₂ ister."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Which feature distinguishes alcoholic fermentation from lactic acid fermentation?",
      opts: ["Release of CO₂", "Presence of an electron transport chain", "A net yield of 38 ATP", "Occurrence in the mitochondria"], a: 0,
      why: "Alkol fermantasyonunda piruvattan CO₂ ayrılır; laktik asit fermantasyonunda CO₂ çıkmaz. İkisinde de zincir yoktur ve net ATP 2'dir; B şıkkı yanlış." },
    { q: "One closed jar contains yeast in sugar water and another contains *Lactobacillus* in sweetened milk. The results are shown below. Which explanation fits the observation best?",
      fig: { type: "table", head: ["Jar", "Bubbles", "pH"], rows: [["Yeast", "Many", "Falls slightly"], ["Lactobacillus", "None", "Falls clearly"]] },
      opts: ["Both carry out aerobic respiration.", "Both carry out lactic acid fermentation.", "Yeast carries out lactic acid fermentation and the bacterium carries out alcoholic fermentation.", "Yeast releases CO₂ by alcoholic fermentation; the bacterium acidifies the medium by lactic acid fermentation without releasing CO₂."], a: 3,
      why: "Kabarcık CO₂'dir ve alkol fermantasyonunda çıkar; pH'ın belirgin düşmesi laktik asit birikimini gösterir. C şıkkı iki sürecin adını tersine çevirir." },
    { q: "What is the main benefit of fermentation for the cell?",
      opts: ["Producing a large amount of ATP", "Converting NADH to NAD⁺ so that glycolysis can continue", "Removing O₂ from the cell", "Breaking pyruvate down to CO₂ and water"], a: 1,
      why: "NAD⁺ yenilenmezse glikoliz durur; fermantasyon bu yüzden gereklidir. A şıkkı çekici ama fermantasyonun ATP'si yalnız glikolizden gelir, ek ATP üretmez." },
    { q: "Aerobic respiration yields at most about 38 ATP per glucose, whereas fermentation yields a net 2 ATP. About how many times more glucose must a cell ferment to obtain the same amount of ATP?",
      opts: ["2 times", "4 times", "19 times", "38 times"], a: 2,
      why: "38 ÷ 2 = 19 kat. 38 kat diyenler 2'ye bölmeyi unutur." },
    { q: "A bacterium living in lake-bottom mud uses sulfate (SO₄²⁻) as the final electron acceptor, releases H₂S and has an electron transport chain. Which process does it carry out?",
      opts: ["Lactic acid fermentation", "Alcoholic fermentation", "Aerobic respiration", "Anaerobic respiration"], a: 3,
      why: "İnorganik bir son alıcı (SO₄²⁻) ve elektron taşıma zinciri oksijensiz solunumun işaretidir. Fermantasyonlarda zincir yoktur; C şıkkı yanlış çünkü son alıcı O₂ değil." }
  ]
};
