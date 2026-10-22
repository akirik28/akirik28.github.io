/* Kitora not defteri · ch403 · 4.3 İdeal Gaz Denklemi
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry, Exam 3: gazlar) + MEB 10. sınıf standart içeriği (PV = nRT, mol kütlesi, yoğunluk, kısmi basınç). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch403",
  amac: "Bu konu *ideal gas equation* yani PV = nRT denklemini anlatıyor: gaz yasalarının hepsini tek formülde birleştirir. Birimleri doğru seçmeyi, P, V, T ya da n'yi bulmayı, mol kütlesini ve yoğunluğu hesaplamayı, gaz karışımında kısmi basıncı bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "PV = nRT: tek denklem, dört değişken",
      kisa: "Bir gazın P, V, n ve T'si birbirine PV = nRT ile bağlıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "P", alt: "basınç (atm)" }, "×",
            { t: "V", alt: "hacim (L)" }, "=",
            { t: "n", alt: "mol sayısı" }, "×",
            { t: "R", alt: "0,082" }, "×",
            { t: "T", alt: "sıcaklık (K)" }
          ], aciklama: "Bu denklem ideal gaz için geçerlidir; gerçek gazlar yüksek sıcaklık ve düşük basınçta buna çok yakın davranır." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧮", terim: "Ideal gas equation", tr: "ideal gaz denklemi", tanim: "PV = nRT: bir ideal gazın basıncı, hacmi, mol sayısı ve Kelvin sıcaklığı arasındaki bağıntı.", ornek: "Basketbol topundaki hava için P, V, n, T'den biri bulunabilir." },
            { ikon: "📏", terim: "Gas constant (R)", tr: "gaz sabiti", tanim: "Gazın cinsine bağlı olmayan sabit: ==R = 0,082 L·atm/(mol·K)==. SI'da 8,314 J/(mol·K).", ornek: "P atm, V L, n mol, T K alınınca R = 0,082." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The ideal gas equation is PV = nRT, where T is the temperature in kelvin.*" },
            { ikon: "💬", baslik: "Sabit", metin: "*R is the gas constant: 0.082 L·atm/(mol·K).*" }
          ] }
      ]
    },
    {
      baslik: "R ve birimler: önce her şeyi çevir",
      kisa: "R = 0,082 kullanırken P atm, V L, T K olmalıdır.",
      bloklar: [
        { tip: "tablo", baslik: "R = 0,082 için birim kuralı", head: ["Nicelik", "Kullanılacak birim", "Gerekirse çevir"], rows: [
            ["P", "atm", "mmHg ÷ 760;  kPa ÷ 101,3"],
            ["V", "L", "mL ÷ 1000"],
            ["n", "mol", "n = m ÷ M"],
            ["T", "K", "K = °C + 273"]
          ], not: "Bütün değerleri çevirdikten sonra denklemi kur." },
        { tip: "ornek", baslik: "Molar hacmi denklemden bul", durum: "NŞA'da (T = 273 K, P = 1 atm) 1 mol ideal gazın hacmini hesapla (R = 0,082).", adimlar: [
            "V = nRT ÷ P = (1 × 0,082 × 273) ÷ 1.",
            "V = 22,386 L ≈ 22,4 L.",
            "Bu, ezberlediğimiz mol hacmidir (22,4 L/mol)."
          ], sonuc: "V ≈ 22,4 L: 22,4 L/mol bu denklemden gelir." },
        { tip: "tuzak", metin: "En sık hata birimi çevirmemektir. °C ya da mmHg ile R = 0,082 birlikte kullanılamaz.", yanlis: "T = 27 ve P = 760 yazıp R = 0,082 ile hesaplamak.", dogru: "T = 27 + 273 = 300 K, P = 760 ÷ 760 = 1 atm yaz; sonra R = 0,082 ile hesapla." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*First convert °C to K and mmHg to atm, then substitute into PV = nRT.*" }
          ] }
      ]
    },
    {
      baslik: "P, V, T ya da n'yi bulmak",
      kisa: "Bilinmeyeni yalnız bırak, birimleri çevirip yerine koy.",
      bloklar: [
        { tip: "adimlar", baslik: "Dört adımda çöz", adimlar: [
            { baslik: "Verilenleri yaz", metin: "P, V, n, T'den hangileri verilmiş, hangisi aranıyor?" },
            { baslik: "Birimleri çevir", metin: "atm, L, mol, K." },
            { baslik: "Denklemi düzenle", metin: "P = nRT ÷ V,  V = nRT ÷ P,  T = PV ÷ nR,  n = PV ÷ RT." },
            { baslik: "Yerine koy, kontrol et", metin: "Sonucu PV = nRT'ye geri yaz." }
          ] },
        { tip: "ornek", baslik: "Balondaki gazın basıncı", durum: "12,3 L'lik bir kapta 27 °C'de 0,5 mol gaz var. Basıncı kaç atm'dir? (R = 0,082)", adimlar: [
            "T = 27 + 273 = 300 K.",
            "P = nRT ÷ V = (0,5 × 0,082 × 300) ÷ 12,3.",
            "Pay: 0,5 × 0,082 × 300 = 12,3; P = 12,3 ÷ 12,3 = 1 atm.",
            "Kontrol: 1 × 12,3 = 0,5 × 0,082 × 300 = 12,3 ✓"
          ], sonuc: "P = 1 atm." },
        { tip: "ornek", baslik: "Gazın sıcaklığı kaç K?", durum: "4,1 L hacimli kapta 0,2 mol gazın basıncı 2 atm ölçülüyor. Sıcaklık kaç K, kaç °C'dir? (R = 0,082)", adimlar: [
            "T = PV ÷ (nR) = (2 × 4,1) ÷ (0,2 × 0,082).",
            "Pay: 8,2; payda: 0,0164. T = 8,2 ÷ 0,0164 = 500 K.",
            "°C = 500 − 273 = 227 °C.",
            "Kontrol: 0,2 × 0,082 × 500 = 8,2 = 2 × 4,1 ✓"
          ], sonuc: "T = 500 K = 227 °C." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Rearrange the equation to solve for the unknown, then substitute the values with their units.*" }
          ] }
      ]
    },
    {
      baslik: "Grafikte PV = nRT: V–T doğruları",
      kisa: "Sabit P'de V–T doğrusunun eğimi nR ÷ P'dir; mol artınca dikleşir.",
      bloklar: [
        { tip: "tablo", baslik: "Eski yasalar bu denklemden çıkar", head: ["Sabit tutulan", "PV = nRT'den", "Yasa"], rows: [
            ["n, T", "PV = nRT = sabit", "*Boyle*: P₁V₁ = P₂V₂"],
            ["n, P", "V ÷ T = nR ÷ P = sabit", "*Charles*: V₁/T₁ = V₂/T₂"],
            ["n, V", "P ÷ T = nR ÷ V = sabit", "*Gay-Lussac*: P₁/T₁ = P₂/T₂"],
            ["P, T", "V ÷ n = RT ÷ P = sabit", "*Avogadro*: V₁/n₁ = V₂/n₂"]
          ] },
        { tip: "grafik", baslik: "1 atm'de V–T doğruları (V = nRT ÷ P)", xlabel: "Sıcaklık T (K)", ylabel: "Hacim V (×10 L)", xmax: 5, ymax: 9,
          xticks: [{ v: 1, label: "100" }, { v: 2, label: "200" }, { v: 3, label: "300" }, { v: 4, label: "400" }, { v: 5, label: "500" }],
          yticks: [{ v: 2.24, label: "22,4" }, { v: 3.94, label: "39,4" }, { v: 7.87, label: "78,7" }],
          ogeler: [
            { id: "n1", tip: "cizgi", renk: 0, from: [0, 0], to: [4.8, 3.94], etiket: "n = 1", gizli: true },
            { id: "n2", tip: "cizgi", renk: 2, from: [0, 0], to: [4.8, 7.87], etiket: "n = 2", gizli: true },
            { id: "stp", tip: "nokta", renk: 1, x: 2.73, y: 2.24, kilavuz: true, gizli: true },
            { id: "tstp", tip: "yazi", x: 2.9, y: 1.5, metin: "273 K · 22,4 L", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "P ve n sabit: V = (nR ÷ P) × T. 1 mol için doğru orijinden geçer; eğim 0,082 L/K.", goster: ["n1"] },
            { metin: "Aynı T ve P'de mol iki katına çıkarsa eğim de iki katına çıkar: ==2 mol, 1 mol'ün iki katı hacim kaplar.== (Avogadro)", goster: ["n2"] },
            { metin: "273 K'de 1 mol: V = 0,082 × 273 = 22,4 L. NŞA'daki molar hacim tam bu noktadır.", goster: ["stp", "tstp"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The slope of the V–T line is nR ÷ P, so the line for more moles is steeper.*" }
          ] }
      ]
    },
    {
      baslik: "Mol kütlesi ve gaz yoğunluğu",
      kisa: "n = m ÷ M yazınca PV = nRT'den mol kütlesi ve yoğunluk çıkar.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "M", alt: "mol kütlesi" }, "=",
            { t: "m × R × T", alt: "kütle × 0,082 × K" }, "÷",
            { t: "P × V", alt: "atm × L" }
          ], aciklama: "n yerine m ÷ M yazıldı. Yoğunluk için d = m ÷ V = P × M ÷ (R × T) olur." },
        { tip: "ornek", baslik: "Bilinmeyen gaz hangisi?", durum: "Bir gazın 3,2 g'ı 227 °C ve 1 atm'de 4,1 L hacim kaplıyor. Mol kütlesini bul (R = 0,082).", adimlar: [
            "T = 227 + 273 = 500 K.",
            "n = PV ÷ RT = (1 × 4,1) ÷ (0,082 × 500) = 4,1 ÷ 41 = 0,1 mol.",
            "M = m ÷ n = 3,2 ÷ 0,1 = 32 g/mol (O₂ ile uyumlu).",
            "Kontrol: 0,1 × 32 = 3,2 g ✓"
          ], sonuc: "M = 32 g/mol." },
        { tip: "tablo", baslik: "Gaz yoğunluğu: d = P × M ÷ (R × T) (27 °C, 1 atm)", head: ["Gaz", "M (g/mol)", "Yoğunluk (g/L)"], rows: [
            ["He", "4", "0,16"],
            ["Hava (ortalama)", "29", "1,18"],
            ["CO₂", "44", "1,79"]
          ], not: "Aynı koşulda yoğunluk mol kütlesiyle orantılıdır. He havadan hafiftir (balon yükselir), CO₂ havadan ağırdır (alçak yerlerde birikir)." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*At the same temperature and pressure, the gas with the greater molar mass has the greater density.*" }
          ] }
      ]
    },
    {
      baslik: "Gaz karışımı ve kısmi basınç",
      kisa: "Karışımın toplam basıncı, gazların kısmi basınçlarının toplamıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Partial pressure", tr: "kısmi basınç", tanim: "Karışımdaki bir gazın, kabı tek başına doldursaydı yapacağı basınç: Pᵢ = nᵢRT ÷ V.", ornek: "Havadaki O₂'nin payı." },
            { ikon: "➕", terim: "Dalton's law", tr: "Dalton yasası", tanim: "Karışımın toplam basıncı, kısmi basınçların toplamıdır: P(toplam) = P₁ + P₂ + …", ornek: "Mol kesri büyük olan gaz basıncın büyük kısmını verir." }
          ] },
        { tip: "ornek", baslik: "N₂ ve O₂ karışımı", durum: "24,6 L'lik tüpte 27 °C'de 2 mol N₂ ve 1 mol O₂ var (R = 0,082). Toplam basınç ve kısmi basınçlar kaç atm'dir?", adimlar: [
            "T = 300 K; toplam mol = 2 + 1 = 3 mol.",
            "P(toplam) = nRT ÷ V = (3 × 0,082 × 300) ÷ 24,6 = 73,8 ÷ 24,6 = 3 atm.",
            "P(N₂) = (2 × 0,082 × 300) ÷ 24,6 = 2 atm; P(O₂) = 1 atm.",
            "Kontrol: 2 + 1 = 3 atm; kısmi basınç = mol kesri × toplam: 2/3 × 3 = 2 ✓"
          ], sonuc: "P(toplam) = 3 atm; P(N₂) = 2 atm; P(O₂) = 1 atm." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The total pressure of a gas mixture is the sum of the partial pressures of the gases in it.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Ideal gas equation*: PV = nRT; R = 0,082 L·atm/(mol·K).",
            "Birimler: P atm, V L, T K, n mol; mmHg ÷ 760, mL ÷ 1000, K = °C + 273.",
            "NŞA'da 1 mol gaz: V = 0,082 × 273 ÷ 1 ≈ 22,4 L; molar hacim bu denklemden gelir.",
            "Boyle, Charles, Gay-Lussac ve Avogadro, PV = nRT'de bir niceliği sabit tutunca çıkar.",
            "V–T grafiği (sabit P) orijinden geçer; eğim nR ÷ P'dir.",
            "Mol kütlesi: M = mRT ÷ PV; yoğunluk: d = PM ÷ RT.",
            "*Dalton's law*: P(toplam) = kısmi basınçların toplamı; Pᵢ = nᵢRT ÷ V."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "12,3 L'lik bir kapta 27 °C'de 2 mol gaz vardır. Gazın basıncı kaç atm'dir? (R = 0,082 L·atm/(mol·K))",
      opts: ["1 atm", "2 atm", "4 atm", "8 atm"], a: 2,
      why: "T = 300 K; P = nRT ÷ V = (2 × 0,082 × 300) ÷ 12,3 = 49,2 ÷ 12,3 = 4 atm. 1 atm (A) 0,5 mol için bulunan değerdir; mol sayısı iki katına çıkınca basınç da iki katına çıkar." },
    { q: "Bir tüpte 0,1 mol gaz 27 °C ve 760 mmHg'dedir. Gazın hacmi kaç L'dir? (R = 0,082 L·atm/(mol·K))",
      opts: ["2,46 L", "0,22 L", "24,6 L", "0,0032 L"], a: 0,
      why: "P = 760 mmHg = 1 atm, T = 300 K: V = 0,1 × 0,082 × 300 ÷ 1 = 2,46 L. 0,22 L (B) sıcaklığı °C olarak (27) yazmaktan, 0,0032 L (D) ise 760'ı atm'e çevirmeden kullanmaktan çıkar." },
    { q: "Bir öğrenci bilinmeyen bir gazı ölçüyor (R = 0,082 L·atm/(mol·K)). Tablodaki verilere göre gazın mol kütlesi kaçtır?",
      fig: { type: "table", head: ["Ölçüm", "Değer"], rows: [["Kütle", "2,2 g"], ["Hacim", "1,23 L"], ["Sıcaklık", "27 °C"], ["Basınç", "1 atm"]], caption: "Gaz numunesi" },
      opts: ["22 g/mol", "88 g/mol", "2,2 g/mol", "44 g/mol"], a: 3,
      why: "n = PV ÷ RT = (1 × 1,23) ÷ (0,082 × 300) = 0,05 mol; M = 2,2 ÷ 0,05 = 44 g/mol (CO₂ ile uyumlu). 22 g/mol (A) mol sayısını 0,1 sanmaktan çıkar." },
    { q: "Grafikte, aynı basınçta X ve Y gazlarının V–T doğruları çizilmiştir. Y'nin eğimi X'inkinin iki katıdır. Bunun nedeni nedir?",
      fig: { type: "graph", xlabel: "T (K)", ylabel: "V (×10 L)", xmax: 5, ymax: 9, lines: [{ from: [0, 0], to: [4.8, 3.94], label: "X" }, { from: [0, 0], to: [4.8, 7.87], label: "Y" }], xticks: [{ v: 1, label: "100" }, { v: 3, label: "300" }, { v: 5, label: "500" }], yticks: [{ v: 3.94, label: "39,4" }, { v: 7.87, label: "78,7" }], caption: "V–T doğruları (P sabit)" },
      opts: ["Y'nin mol sayısı X'in iki katıdır", "Y'nin basıncı X'in iki katıdır", "Y'nin sıcaklığı X'in iki katıdır", "Y'nin hacmi sabittir"], a: 0,
      why: "V = (nR ÷ P) × T; basınç aynıysa eğim nR ÷ P ile mol sayısı n'e bağlıdır. İkisi için de P aynı verildiğinden iki kat eğim, iki kat mol demektir (Avogadro)." },
    { q: "24,6 L'lik kapalı bir tüpte 27 °C'de 2 mol N₂ ve 1 mol O₂ vardır (R = 0,082 L·atm/(mol·K)). O₂'nin kısmi basıncı kaç atm'dir?",
      opts: ["0,5 atm", "1 atm", "2 atm", "3 atm"], a: 1,
      why: "P(O₂) = nRT ÷ V = (1 × 0,082 × 300) ÷ 24,6 = 1 atm. 3 atm (D) toplam basınçtır; 2 atm (C) N₂'nin kısmi basıncıdır." }
  ]
};
