/* Kitpath not defteri · cb1010 · 10.11 Taylor Polinomları
   Kaynak: College Board AP Calculus BC CED, Topic 10.11. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb1010",
  amac: "Bu konu *Taylor polynomial* yani Taylor polinomlarını anlatıyor: bir noktanın çevresinde karmaşık bir fonksiyonu türevleriyle kurulmuş bir polinomla taklit etmek. Polinomu kurmayı, derece arttıkça yaklaşımın nasıl iyileştiğini görmeyi ve değer hesaplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Fikir: teğetin büyük kardeşi",
      kisa: "Taylor polinomu, bir noktada fonksiyonla aynı değer ve türevlere sahiptir.",
      bloklar: [
        { tip: "hikaye", ikon: "🔍", baslik: "Haritada yakınlaştırma",
          metin: "Haritada evinin çevresini yakınlaştırırsan kıvrılan sokak düz bir çizgiye benzer: bu teğet doğrusudur. Biraz daha doğru olsun istersen yolun nasıl kıvrıldığını da eklersin, sonra kıvrımın değişimini. Her yeni terim, yaklaşımı merkezden biraz daha uzağa kadar iyi tutar." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Taylor polynomial", tr: "Taylor polinomu", tanim: "f'nin x = a merkezli n. dereceden Taylor polinomu Pₙ, x = a'da f ile aynı değere ve ilk n türeve sahip polinomdur. Merkez a'ya yakın x değerlerinde f(x)'i yaklaşık verir.", ornek: "P₁(x) = f(a) + f′(a)(x − a) teğet doğrusudur." },
            { ikon: "0️⃣", terim: "Maclaurin polynomial", tr: "Maclaurin polinomu", tanim: "Merkezi a = 0 olan Taylor polinomudur. Terimler f⁽ᵏ⁾(0)/k! · xᵏ biçimindedir.", ornek: "eˣ için P₃(x) = 1 + x + x²/2 + x³/6." }
          ] }
      ]
    },
    {
      baslik: "Taylor polinomu formülü",
      kisa: "Her terim: türev değeri, k!'e bölünür, (x − a)ᵏ ile çarpılır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Pₙ(x)", alt: "n. derece polinom" }, "=",
            { t: "f(a)", alt: "değer" }, "+",
            { t: "f′(a)(x − a)", alt: "eğim" }, "+",
            { t: "f″(a)/2! · (x − a)²", alt: "bükeylik" }, "+ … +",
            { t: "f⁽ⁿ⁾(a)/n! · (x − a)ⁿ", alt: "n. terim" }
          ], aciklama: "Genel terim: ==f⁽ᵏ⁾(a) / k! · (x − a)ᵏ==. Pₙ'nin x = a'daki değeri ve ilk n türevi f ile aynıdır." },
        { tip: "tablo", baslik: "Derece neyi tutturur?", head: ["Derece", "Tutturduğu", "Anlamı"],
          rows: [
            ["P₀", "f(a)", "yalnız değer (düz çizgi)"],
            ["P₁", "f(a), f′(a)", "değer + eğim: teğet doğrusu"],
            ["P₂", "+ f″(a)", "bükeylik de eklenir"],
            ["Pₙ", "f(a), …, f⁽ⁿ⁾(a)", "ilk n türev dahil"]
          ], vurgu: 1 },
        { tip: "tuzak", metin: "Katsayı türevin kendisi değil, türevin k! ile bölünmüş halidir.", yanlis: "(x − a)³ teriminin katsayısı f‴(a).", dogru: "Katsayı f‴(a)/3! = f‴(a)/6. Genel kural: f⁽ᵏ⁾(a)/k!." }
      ]
    },
    {
      baslik: "Verilenlerden polinom kurmak",
      kisa: "Önce türev değerlerini sırala, sonra her birini k!'e böl.",
      bloklar: [
        { tip: "ornek", baslik: "f(2) = 3, f′(2) = −1, f″(2) = 4, f‴(2) = 6", durum: "x = 2 merkezli P₃(x)'i yaz ve f(2,5)'i yaklaşık bul.",
          adimlar: [
            "Katsayılar: 3; −1; 4/2! = 2; 6/3! = 1.",
            "P₃(x) = 3 − (x − 2) + 2(x − 2)² + (x − 2)³.",
            "x = 2,5 için x − 2 = 0,5: 3 − 0,5 + 2(0,25) + 0,125.",
            "Topla: 3 − 0,5 + 0,5 + 0,125 = 3,125."
          ], sonuc: "P₃(x) = 3 − (x − 2) + 2(x − 2)² + (x − 2)³;  f(2,5) ≈ 3,125" },
        { tip: "ornek", baslik: "f(x) = sin x, merkez a = 0", durum: "P₅(x)'i bul.",
          adimlar: [
            "Türevler: sin x, cos x, −sin x, −cos x, sin x, cos x. x = 0'da değerleri: 0, 1, 0, −1, 0, 1.",
            "k!'e böl: 0; 1; 0; −1/6; 0; 1/120.",
            "Sıfır olan terimler düşer, yalnız tek kuvvetler kalır."
          ], sonuc: "P₅(x) = x − x³/6 + x⁵/120" },
        { tip: "tablo", baslik: "f(x) = ln x, merkez a = 1", head: ["k", "f⁽ᵏ⁾(x)", "f⁽ᵏ⁾(1)", "f⁽ᵏ⁾(1)/k!"],
          rows: [
            ["0", "ln x", "0", "0"],
            ["1", "1/x", "1", "1"],
            ["2", "−1/x²", "−1", "−1/2"],
            ["3", "2/x³", "2", "1/3"],
            ["4", "−6/x⁴", "−6", "−1/4"]
          ], vurgu: 4, not: "Sonuç: P₄(x) = (x − 1) − (x − 1)²/2 + (x − 1)³/3 − (x − 1)⁴/4. Merkez 1 olduğu için kuvvetler x değil (x − 1)." }
      ]
    },
    {
      baslik: "Derece arttıkça yaklaşım iyileşir",
      kisa: "Merkezin yakınında hata çok küçük; uzaklaştıkça hata büyür.",
      bloklar: [
        { tip: "grafik", baslik: "f(x) = eˣ ve Maclaurin polinomları", xlabel: "x", ylabel: "y", xmax: 3, ymax: 8,
          xticks: [{ v: 0, label: "−1" }, { v: 1, label: "0" }, { v: 2, label: "1" }, { v: 3, label: "2" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "f", tip: "egri", renk: 1, etiket: "eˣ", noktalar: [[0, 0.368], [0.25, 0.472], [0.5, 0.607], [0.75, 0.779], [1, 1], [1.25, 1.284], [1.5, 1.649], [1.75, 2.117], [2, 2.718], [2.25, 3.49], [2.5, 4.482], [2.75, 5.755], [3, 7.389]] },
            { id: "c", tip: "nokta", renk: 2, x: 1, y: 1, etiket: "merkez", kilavuz: true },
            { id: "P", tip: "egri", renk: 0, etiket: "P₀", gizli: true, noktalar: [[0, 1], [0.25, 1], [0.5, 1], [0.75, 1], [1, 1], [1.25, 1], [1.5, 1], [1.75, 1], [2, 1], [2.25, 1], [2.5, 1], [2.75, 1], [3, 1]] }
          ],
          durumlar: [
            { metin: "Eğri f(x) = eˣ. Merkez x = 0 (yatay eksende 0 işaretli yer): orada f = 1 ve bütün türevler 1." },
            { metin: "P₀(x) = 1: yalnız değeri tutturur, düz bir çizgi.", goster: ["P"] },
            { metin: "P₁(x) = 1 + x: teğet doğrusu. Eğimi de tutturdu.", set: { P: { etiket: "P₁", noktalar: [[0, 0], [0.25, 0.25], [0.5, 0.5], [0.75, 0.75], [1, 1], [1.25, 1.25], [1.5, 1.5], [1.75, 1.75], [2, 2], [2.25, 2.25], [2.5, 2.5], [2.75, 2.75], [3, 3]] } } },
            { metin: "P₂(x) = 1 + x + x²/2: bükeylik de eklendi, eğri yukarı kıvrılıyor.", set: { P: { etiket: "P₂", noktalar: [[0, 0.5], [0.25, 0.531], [0.5, 0.625], [0.75, 0.781], [1, 1], [1.25, 1.281], [1.5, 1.625], [1.75, 2.031], [2, 2.5], [2.25, 3.031], [2.5, 3.625], [2.75, 4.281], [3, 5]] } } },
            { metin: "P₃(x) = … + x³/6: x = 1'e kadar eğriyle neredeyse aynı.", set: { P: { etiket: "P₃", noktalar: [[0, 0.333], [0.25, 0.461], [0.5, 0.604], [0.75, 0.779], [1, 1], [1.25, 1.284], [1.5, 1.646], [1.75, 2.102], [2, 2.667], [2.25, 3.357], [2.5, 4.188], [2.75, 5.174], [3, 6.333]] } } },
            { metin: "P₅: merkezin yakınında eğriden ayırt edilmiyor. x = 2'de bile P₅(2) ≈ 7,27, e² ≈ 7,39.", set: { P: { etiket: "P₅", noktalar: [[0, 0.367], [0.25, 0.472], [0.5, 0.607], [0.75, 0.779], [1, 1], [1.25, 1.284], [1.5, 1.649], [1.75, 2.117], [2, 2.717], [2.25, 3.484], [2.5, 4.462], [2.75, 5.702], [3, 7.267]] } } }
          ] },
        { tip: "tablo", baslik: "Aynı x'te, derece arttıkça", head: ["Derece n", "Pₙ(1)", "Pₙ(2)"],
          rows: [
            ["0", "1", "1"],
            ["1", "2", "3"],
            ["2", "2,5", "5"],
            ["3", "2,667", "6,333"],
            ["5", "2,717", "7,267"],
            ["eˣ", "2,718", "7,389"]
          ], vurgu: 5, not: "x = 1'de P₅ neredeyse tam; x = 2'de (merkezden daha uzak) aynı derece daha çok sapıyor." }
      ]
    },
    {
      baslik: "Yaklaşık değer hesaplamak",
      kisa: "Merkeze yakın bir x seç, değeri polinoma koy.",
      bloklar: [
        { tip: "ornek", baslik: "ln 1,2 değerini P₃ ile bul", durum: "f(x) = ln x, merkez a = 1, P₃(x) = (x − 1) − (x − 1)²/2 + (x − 1)³/3.",
          adimlar: [
            "x = 1,2 için x − 1 = 0,2.",
            "(x − 1) = 0,2;  (x − 1)²/2 = 0,04/2 = 0,02;  (x − 1)³/3 = 0,008/3 ≈ 0,00267.",
            "P₃(1,2) = 0,2 − 0,02 + 0,00267 ≈ 0,1827."
          ], sonuc: "ln 1,2 ≈ 0,1827  (hesap makinesi: 0,1823)" },
        { tip: "ikili", sol: { ikon: "0️⃣", baslik: "*Maclaurin polynomial*", maddeler: ["Merkez a = 0", "Kuvvetler xᵏ"] },
          sag: { ikon: "📍", baslik: "Merkezi 0 olmayan *Taylor polynomial*", maddeler: ["Merkez a ≠ 0", "Kuvvetler (x − a)ᵏ"] },
          oyun: [
            { metin: "eˣ ≈ 1 + x + x²/2 + x³/6", cevap: "sol", neden: "Kuvvetler xᵏ, merkez 0." },
            { metin: "ln x ≈ (x − 1) − (x − 1)²/2", cevap: "sag", neden: "Kuvvetler (x − 1)ᵏ: merkez 1." },
            { metin: "sin x ≈ x − x³/6", cevap: "sol", neden: "Merkez 0 olan Taylor polinomu = Maclaurin polinomu." },
            { metin: "√x ≈ 2 + (x − 4)/4", cevap: "sag", neden: "Merkez 4: √4 = 2 ve türev 1/(2√4) = 1/4." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Pₙ(x) = Σ f⁽ᵏ⁾(a)/k! · (x − a)ᵏ, k = 0'dan n'ye.",
            "Pₙ, x = a'da f ile aynı değere ve ilk n türeve sahiptir. P₁ teğet doğrusudur.",
            "Merkez a = 0 ise Maclaurin polinomudur.",
            "Katsayıyı bulurken türev değerini k!'e böl; faktöriyeli unutma.",
            "Merkez a ise kuvvetler (x − a)ᵏ olur; merkezi 0 sanıp x yazma.",
            "Hesap: eˣ → 1 + x + x²/2 + x³/6; sin x → x − x³/6 + x⁵/120 (yalnız tek kuvvetler).",
            "Derece arttıkça merkeze yakın yaklaşım iyileşir; merkezden uzaklaştıkça hata büyür."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "f(1) = 4, f′(1) = 3, f″(1) = −2 ve f‴(1) = 12 olsun. f'nin x = 1 merkezli 3. dereceden Taylor polinomu hangisidir?",
      opts: ["4 + 3(x − 1) − 2(x − 1)² + 12(x − 1)³", "4 + 3(x − 1) − (x − 1)² + 2(x − 1)³", "4 + 3x − x² + 2x³", "4 + 3(x − 1) − (x − 1)² + 6(x − 1)³"], a: 1,
      why: "Katsayılar f⁽ᵏ⁾(1)/k!: 4; 3; −2/2 = −1; 12/6 = 2. A şıkkı faktöriyellere bölmeyi unutur. C şıkkı merkez 1 olduğu halde (x − 1) yerine x yazar." },
    { q: "Tablo, bir f fonksiyonunun x = 0'daki türev değerlerini veriyor. f'nin 4. dereceden Maclaurin polinomu hangisidir?",
      fig: { type: "table", head: ["k", "0", "1", "2", "3", "4"], rows: [["f⁽ᵏ⁾(0)", "2", "0", "−6", "0", "24"]], caption: "x = 0'da türevler" },
      opts: ["2 − 6x² + 24x⁴", "2 − 3x² + 4x⁴", "2 − 3x² + 24x⁴", "2 − 3x² + x⁴"], a: 3,
      why: "Katsayılar: 2; 0; −6/2! = −3; 0; 24/4! = 1. Polinom 2 − 3x² + x⁴. A şıkkı hiç bölmez; C şıkkı yalnız x² terimini 2!'e böler, x⁴ katsayısını 4!'e bölmeyi unutur." },
    { q: "f'nin x = 3 merkezli ikinci dereceden Taylor polinomu P₂(x) = 5 − 2(x − 3)² olsun. Hangisi doğrudur?",
      opts: ["f″(3) = −2 ve f'nin x = 3'te yerel minimumu vardır", "f″(3) = −4 ve f'nin x = 3'te yerel minimumu vardır", "f″(3) = −4 ve f'nin x = 3'te yerel maksimumu vardır", "f″(3) = −2 ve f'nin x = 3'te yerel maksimumu vardır"], a: 2,
      why: "(x − 3) terimi yok, yani f′(3) = 0: kritik nokta. (x − 3)² katsayısı f″(3)/2! = −2 olduğundan f″(3) = −4 < 0 ve yerel maksimum. D şıkkı katsayıyı doğrudan f″(3) sanmak; −2'yi 2! ile çarpmayı unutmak." },
    { q: "sin x'in Maclaurin polinomu P₃(x) = x − x³/6 ile sin(0,3) yaklaşık kaç bulunur?",
      opts: ["0,2955", "0,273", "0,3045", "0,291"], a: 0,
      why: "0,3 − (0,3)³/6 = 0,3 − 0,027/6 = 0,3 − 0,0045 = 0,2955. B şıkkı 6'ya bölmeyi unutur (0,3 − 0,027). C şıkkı işareti yanlış alır (+)." },
    { q: "f(x) = √x için x = 4 merkezli 2. dereceden Taylor polinomu P₂(x) = 2 + (x − 4)/4 − (x − 4)²/64'tür. Bununla √5 yaklaşık kaçtır?",
      opts: ["9/4", "143/64", "145/64", "71/32"], a: 1,
      why: "x − 4 = 1: 2 + 1/4 − 1/64 = 143/64 ≈ 2,234 (gerçek değer 2,236). A şıkkı yalnız P₁'i kullanır (9/4). D şıkkı ikinci türev değerini f″(4) = −1/32 olarak 2!'e bölmeden yazar." }
  ]
};
