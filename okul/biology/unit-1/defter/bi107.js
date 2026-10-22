/* Kitora not defteri · bi107 · 1.7 Oksijensiz Solunum ve Fermantasyon
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Biology, Tema 1) + MEB Maarif BİY.10 standart içeriği. Blok türleri: /ap/_kit/defter.js başı.
   ATP: oksijenli solunum için bi106'daki yaklaşık 32 kullanıldı. */
window.DEFTER = {
  slug: "bi107",
  amac: "Bu konu oksijen olmadan ATP elde etmeyi anlatıyor: *anaerobic respiration* ve *fermentation* (laktik asit ve etil alkol). İkisinin farkını, fermantasyonun NAD⁺'yı neden yenilediğini ve neden oksijenli solunumdan çok daha az ATP verdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Oksijensiz solunum ve fermantasyon farkı",
      kisa: "Oksijensiz solunumda elektron taşıma zinciri vardır; fermantasyonda yoktur.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🦠", baslik: "*Anaerobic respiration* (oksijensiz solunum)", maddeler: ["Elektron taşıma zinciri ==var==", "Son elektron alıcısı: ==inorganik== (NO₃⁻, SO₄²⁻, CO₂)", "Bazı bakteri ve arkeler", "Fermantasyondan çok, oksijenliden az ATP"] },
          sag: { ikon: "🍞", baslik: "*Fermentation* (fermantasyon)", maddeler: ["Elektron taşıma zinciri ==yok==", "Son alıcı: ==organik== molekül (piruvat ya da türevi)", "ATP yalnız glikolizden: net 2", "Örnek: kas, maya, *Lactobacillus*"] },
          oyun: [
            { metin: "Sülfat (SO₄²⁻) son elektron alıcısı olan, zinciri olan bakteri.", cevap: "sol", neden: "İnorganik alıcı ve zincir: oksijensiz solunum." },
            { metin: "Piruvat doğrudan laktata çevriliyor, elektron taşıma zinciri yok.", cevap: "sag", neden: "Organik alıcı ve zincir yok: fermantasyon." },
            { metin: "Maya hamurunda CO₂ çıkarken etil alkol oluşuyor.", cevap: "sag", neden: "Organik moleküller ürün: alkol fermantasyonu." },
            { metin: "Nitratı (NO₃⁻) azot gazına çeviren toprak bakterisi.", cevap: "sol", neden: "NO₃⁻ inorganik son alıcıdır: oksijensiz solunum." }
          ] },
        { tip: "tablo", baslik: "Oksijensiz solunum örnekleri", head: ["Son elektron alıcısı", "Ürün", "Örnek canlı"], rows: [
            ["NO₃⁻ (nitrat)", "N₂ ve diğer azotlu bileşikler", "Denitrifikasyon bakterileri"],
            ["SO₄²⁻ (sülfat)", "H₂S", "Sülfat indirgeyen bakteriler"],
            ["CO₂", "CH₄ (metan)", "Metan üreten arkeler (*methanogens*)"]
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
            { baslik: "Hızlı koşu", metin: "Kas O₂'yi yetiştiremez; oksijenli solunum ATP ihtiyacını karşılayamaz." },
            { baslik: "Fermantasyon", metin: "Piruvat laktata çevrilir ve glikoliz 2 ATP vermeye devam eder." },
            { baslik: "Dinlenme", metin: "O₂ gelince laktat piruvata dönüşüp solunumda kullanılır ya da karaciğerde glikoza çevrilir." }
          ] },
        { tip: "not", metin: "Aynı yol *Lactobacillus* bakterilerinde de çalışır: yoğurt, kefir, turşu ve şalgam suyu laktik asit fermantasyonuyla yapılır. Laktik asit ortamı ekşitir ve besinin bozulmasını geciktirir. Sınavda böyle yaz: *In lactic acid fermentation, pyruvate is reduced to lactate and no carbon dioxide is released.*" }
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
          ], aciklama: "Yer: sitoplazma. Mayalarda ve bazı bakterilerde görülür." },
        { tip: "adimlar", baslik: "İki basamak", adimlar: [
            { baslik: "Piruvat → asetaldehit", metin: "Piruvattan 1 CO₂ ayrılır; 2 karbonlu asetaldehit kalır." },
            { baslik: "Asetaldehit → etil alkol", metin: "Asetaldehit, NADH'den elektron alıp etil alkole indirgenir; NAD⁺ yenilenir." }
          ] },
        { tip: "not", metin: "Mayalar (*Saccharomyces*) ekmek hamurunu CO₂ ile kabartır; fırında alkol buharlaşır. Aynı süreç yakıt etanolü yapımında kullanılır. Sınavda böyle yaz: *In alcoholic fermentation, pyruvate is converted to ethanol and carbon dioxide.*" }
      ]
    },
    {
      baslik: "Üç yolun karşılaştırması",
      kisa: "Oksijenli solunum, fermantasyondan yaklaşık 16 kat daha çok ATP verir.",
      bloklar: [
        { tip: "grafik", baslik: "1 glikozdan elde edilen ATP", xlabel: "Yol", ylabel: "ATP sayısı", xmax: 10, ymax: 36,
          xticks: [{ v: 2, label: "Oksijenli" }, { v: 5, label: "Laktik" }, { v: 8, label: "Alkol" }],
          yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 0, noktalar: [[1.2, 0], [2.8, 0], [2.8, 0], [1.2, 0]] },
            { id: "t1", tip: "yazi", x: 2, y: 33.6, metin: "≈ 32", gizli: true },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[4.2, 0], [5.8, 0], [5.8, 0], [4.2, 0]] },
            { id: "t2", tip: "yazi", x: 5, y: 3.4, metin: "2", gizli: true },
            { id: "b3", tip: "alan", renk: 1, noktalar: [[7.2, 0], [8.8, 0], [8.8, 0], [7.2, 0]] },
            { id: "t3", tip: "yazi", x: 8, y: 3.4, metin: "2", gizli: true },
            { id: "oran", tip: "yazi", x: 6, y: 19, metin: "32 ÷ 2 = 16 kat", gizli: true }
          ],
          durumlar: [
            { metin: "Aynı 1 glikozdan ne kadar ATP çıkar? Önce oksijenli solunum." },
            { metin: "==Oksijenli solunum==: yaklaşık 32 ATP (glikoliz + Krebs + elektron taşıma zinciri).", set: { b1: { noktalar: [[1.2, 0], [2.8, 0], [2.8, 32], [1.2, 32]] } }, goster: ["t1"] },
            { metin: "==Laktik asit fermantasyonu==: yalnız glikolizin net 2 ATP'si.", set: { b2: { noktalar: [[4.2, 0], [5.8, 0], [5.8, 2], [4.2, 2]] } }, goster: ["t2"] },
            { metin: "==Alkol fermantasyonu== da net 2 ATP verir.", set: { b3: { noktalar: [[7.2, 0], [8.8, 0], [8.8, 2], [7.2, 2]] } }, goster: ["t3"] },
            { metin: "Fermantasyon yapan hücre aynı ATP için yaklaşık 16 kat daha çok glikoz yakar. Sınavda böyle yaz: *The graph shows that aerobic respiration produces much more ATP than fermentation.*", goster: ["oran"] }
          ] },
        { tip: "tablo", head: ["", "Oksijenli solunum", "Laktik asit ferm.", "Alkol ferm."], rows: [
            ["O₂", "Gerekir", "Gerekmez", "Gerekmez"],
            ["Elektron taşıma zinciri", "Var", "Yok", "Yok"],
            ["CO₂ çıkışı", "Var (6)", "Yok", "Var (2)"],
            ["Ürün", "H₂O + CO₂", "Laktat", "Etil alkol + CO₂"],
            ["Net ATP", "≈ 32", "2", "2"],
            ["Yer", "Sitoplazma + mitokondri", "Sitoplazma", "Sitoplazma"]
          ], vurgu: 4, not: "Sınavda böyle yaz: *Fermentation yields only two ATP per glucose because glucose is only partly broken down.*" },
        { tip: "tuzak", metin: "Fermantasyonda glikoz tam yıkılmaz: laktat ya da alkol hâlâ enerji taşır. Bu yüzden ATP verimi düşüktür.", yanlis: "Laktik asit fermantasyonu da CO₂ açığa çıkarır.", dogru: "CO₂ yalnız oksijenli solunumda ve alkol fermantasyonunda çıkar; laktik asit fermantasyonunda çıkmaz." }
      ]
    },
    {
      baslik: "Oksijenle ilişkilerine göre canlılar",
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
            "Oksijensiz solunum: zincir var, son alıcı inorganik (NO₃⁻, SO₄²⁻, CO₂). Fermantasyon: zincir yok, son alıcı organik.",
            "Fermantasyonun görevi NADH'yi NAD⁺'ya çevirmektir; böylece glikoliz sürer.",
            "Fermantasyonda ATP yalnız glikolizden gelir: net 2 ATP.",
            "Laktik asit: piruvat + NADH → laktat + NAD⁺; CO₂ yok. Kas, *Lactobacillus* (yoğurt, turşu).",
            "Etil alkol: piruvat → asetaldehit + CO₂ → etil alkol; maya (ekmek kabarması).",
            "Oksijenli solunum yaklaşık 32 ATP verir, fermantasyondan yaklaşık 16 kat fazla.",
            "Zorunlu anaerop O₂'siz yaşar; fakültatif ikisini de yapar; zorunlu aerop O₂ ister."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Hangi özellik alkol fermantasyonunu laktik asit fermantasyonundan ayırır?",
      opts: ["CO₂ açığa çıkması", "Elektron taşıma zincirinin bulunması", "Net ATP sayısının 32 olması", "Mitokondride gerçekleşmesi"], a: 0,
      why: "Alkol fermantasyonunda piruvattan CO₂ ayrılır; laktik asit fermantasyonunda CO₂ çıkmaz. İkisinde de zincir yoktur ve net ATP 2'dir; B şıkkı yanlış." },
    { q: "Kapalı iki kavanozdan birinde şekerli suda maya, diğerinde şekerli sütte *Lactobacillus* vardır. Sonuçlar aşağıdaki gibidir. Bu gözlemi en iyi hangisi açıklar?",
      fig: { type: "table", head: ["Kavanoz", "Kabarcık", "pH"], rows: [["Maya", "Çok", "Hafif düşer"], ["Lactobacillus", "Yok", "Belirgin düşer"]] },
      opts: ["İkisi de oksijenli solunum yapar.", "İkisi de laktik asit fermantasyonu yapar.", "Maya laktik asit, bakteri alkol fermantasyonu yapar.", "Maya alkol fermantasyonuyla CO₂ çıkarır; bakteri laktik asit fermantasyonuyla CO₂ çıkarmadan ortamı asitleştirir."], a: 3,
      why: "Kabarcık CO₂'dir ve alkol fermantasyonunda çıkar; pH'ın belirgin düşmesi laktik asit birikimini gösterir. C şıkkı iki sürecin adını tersine çevirir." },
    { q: "Fermantasyonun hücre için asıl yararı nedir?",
      opts: ["Çok sayıda ATP üretmek", "NADH'yi NAD⁺'ya çevirerek glikolizin sürmesini sağlamak", "O₂'yi hücreden uzaklaştırmak", "Piruvatı CO₂ ve suya yıkmak"], a: 1,
      why: "NAD⁺ yenilenmezse glikoliz durur; fermantasyon bu yüzden gereklidir. A şıkkı çekici ama fermantasyonun ATP'si yalnız glikolizden gelir, ek ATP üretmez." },
    { q: "Oksijenli solunumun yaklaşık 32 ATP verdiği, fermantasyonun ise net 2 ATP verdiği kabul edilirse, bir hücre fermantasyonla oksijenli solunumla elde ettiği ATP kadar ATP elde etmek için yaklaşık kaç kat glikoz yakmalıdır?",
      opts: ["2 kat", "4 kat", "16 kat", "32 kat"], a: 2,
      why: "32 ÷ 2 = 16 kat. 32 kat diyenler 2'ye bölmeyi unutur." },
    { q: "Bir göl dibindeki çamurda yaşayan bir bakteri, sülfatı (SO₄²⁻) son elektron alıcısı olarak kullanıp H₂S çıkarıyor ve bir elektron taşıma zinciri taşıyor. Bu bakteri hangi süreci yürütür?",
      opts: ["Laktik asit fermantasyonu", "Alkol fermantasyonu", "Oksijenli solunum", "Oksijensiz solunum"], a: 3,
      why: "İnorganik bir son alıcı (SO₄²⁻) ve elektron taşıma zinciri oksijensiz solunumun işaretidir. Fermantasyonlarda zincir yoktur; C şıkkı yanlış çünkü son alıcı O₂ değil." }
  ]
};
