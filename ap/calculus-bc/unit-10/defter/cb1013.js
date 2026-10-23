/* Kitpath not defteri · cb1013 · 10.14–10.15 Taylor/Maclaurin Serileri ve Kuvvet Serileri
   Kaynak: College Board AP Calculus BC CED, Topics 10.14 ve 10.15. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb1013",
  amac: "Bu konu *Taylor series* ve *Maclaurin series* yani fonksiyonları sonsuz kuvvet serisi olarak yazmayı anlatıyor. Dört temel seriyi tanıyacak, yerine koyma, çarpma, türev ve integral ile yeni seriler üretecek ve serilerle değer hesaplayacaksın.",
  bolumler: [
    {
      baslik: "Taylor ve Maclaurin serisi",
      kisa: "Taylor serisi, polinomun bütün türevlerle sonsuza uzayan hâlidir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Σ f⁽ⁿ⁾(a)/n! · (x − a)ⁿ", alt: "Taylor serisi (n = 0'dan)" }
          ], aciklama: "Pₙ bu serinin ilk n + 1 terimidir. a = 0 ise seriye ==Maclaurin serisi== denir. Seri yakınsaklık aralığında anlamlıdır; bu defterdeki temel seriler aralıklarında fonksiyona eşittir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "♾️", terim: "Taylor series", tr: "Taylor serisi", tanim: "Bir fonksiyonun x = a'daki bütün türevlerinden kurulan kuvvet serisi. Katsayısı f⁽ⁿ⁾(a)/n!'dir.", ornek: "eˣ'in a = 0 serisi: 1 + x + x²/2! + x³/3! + …" },
            { ikon: "0️⃣", terim: "Maclaurin series", tr: "Maclaurin serisi", tanim: "Merkezi a = 0 olan Taylor serisi: Σ f⁽ⁿ⁾(0)/n! · xⁿ.", ornek: "sin x'in Maclaurin serisi yalnız tek kuvvetli terimlerden oluşur." }
          ] },
        { tip: "ornek", baslik: "f(x) = 1/x, merkez a = 1", durum: "Taylor serisini ve R'yi bul.",
          adimlar: [
            "Türevler: f = x⁻¹, f′ = −x⁻², f″ = 2x⁻³, f‴ = −6x⁻⁴. Genel: f⁽ⁿ⁾(x) = (−1)ⁿ n! x^−(n+1).",
            "x = 1'de f⁽ⁿ⁾(1) = (−1)ⁿ n!. Katsayı: f⁽ⁿ⁾(1)/n! = (−1)ⁿ.",
            "Seri: 1 − (x − 1) + (x − 1)² − … = Σ (−1)ⁿ (x − 1)ⁿ. Geometrik, oran −(x − 1), |x − 1| < 1.",
            "Uçlarda (x = 0, 2) terimler ±1, 0'a gitmez: ıraksar."
          ], sonuc: "Σ (−1)ⁿ (x − 1)ⁿ;  R = 1, aralık (0, 2)" }
      ]
    },
    {
      baslik: "Ezberlenecek dört Maclaurin serisi",
      kisa: "eˣ, sin x, cos x ve 1/(1 − x) serilerini hemen yazabilmelisin.",
      bloklar: [
        { tip: "tablo", baslik: "Dört temel seri", head: ["Fonksiyon", "Maclaurin serisi", "Aralık"],
          rows: [
            ["eˣ", "1 + x + x²/2! + x³/3! + … = Σ xⁿ/n!", "(−∞, ∞)"],
            ["sin x", "x − x³/3! + x⁵/5! − … = Σ (−1)ⁿ x²ⁿ⁺¹/(2n + 1)!", "(−∞, ∞)"],
            ["cos x", "1 − x²/2! + x⁴/4! − … = Σ (−1)ⁿ x²ⁿ/(2n)!", "(−∞, ∞)"],
            ["1/(1 − x)", "1 + x + x² + x³ + … = Σ xⁿ", "(−1, 1)"]
          ], vurgu: 0, not: "1/(1 − x) geometrik seridir: ilk terim 1, oran x. eˣ, sin x, cos x için aralık her x'tir." },
        { tip: "ikili", sol: { ikon: "🌊", baslik: "*sin x* serisi", maddeler: ["Yalnız tek kuvvetler", "x ile başlar"] },
          sag: { ikon: "🌙", baslik: "*cos x* serisi", maddeler: ["Yalnız çift kuvvetler", "1 ile başlar"] },
          oyun: [
            { metin: "x − x³/3! + x⁵/5! − …", cevap: "sol", neden: "Tek kuvvetler, ilk terim x: sin x." },
            { metin: "1 − x²/2! + x⁴/4! − …", cevap: "sag", neden: "Çift kuvvetler, ilk terim 1: cos x." },
            { metin: "Σ (−1)ⁿ x²ⁿ / (2n)!", cevap: "sag", neden: "Kuvvet ve faktöriyel çift: cos x." },
            { metin: "Σ (−1)ⁿ x²ⁿ⁺¹ / (2n + 1)!", cevap: "sol", neden: "Kuvvet ve faktöriyel tek: sin x." }
          ] }
      ]
    },
    {
      baslik: "Yeni seri üretmek",
      kisa: "Bilinen seride x yerine ifade koy, çarp, türev ya da integral al.",
      bloklar: [
        { tip: "tablo", baslik: "Dört yöntem", head: ["Yöntem", "Örnek", "Elde edilen seri", "Aralık"],
          rows: [
            ["Yerine koy (x → x²)", "e^(x²)", "1 + x² + x⁴/2! + … = Σ x²ⁿ/n!", "(−∞, ∞)"],
            ["Yerine koy (x → −x²)", "1/(1 + x²)", "1 − x² + x⁴ − … = Σ (−1)ⁿ x²ⁿ", "(−1, 1)"],
            ["x ile çarp", "x · cos x", "x − x³/2! + x⁵/4! − …", "(−∞, ∞)"],
            ["Türev al", "d/dx [1/(1 − x)] = 1/(1 − x)²", "1 + 2x + 3x² + … = Σ n xⁿ⁻¹", "(−1, 1)"],
            ["İntegral al", "arctan x = ∫ 1/(1 + x²) dx", "x − x³/3 + x⁵/5 − … = Σ (−1)ⁿ x²ⁿ⁺¹/(2n + 1)", "[−1, 1]"]
          ], vurgu: 4, not: "İntegral ve türev yarıçapı korur; uç noktalar değişebilir. arctan x serisinde x = ±1 alterne seri testiyle yakınsar." },
        { tip: "ornek", baslik: "ln(1 + x) serisini 1/(1 + x)'ten üretelim", durum: "Seriyi ve yakınsaklık aralığını bul.",
          adimlar: [
            "1/(1 + x) = 1/(1 − (−x)) = 1 − x + x² − x³ + … (geometrik, |x| < 1).",
            "İntegral al: ln(1 + x) = x − x²/2 + x³/3 − … + C. x = 0'da ln 1 = 0 olduğundan C = 0.",
            "R = 1. x = 1: 1 − ½ + ⅓ − … alterne harmonik, yakınsar (toplamı ln 2). x = −1: −(1 + ½ + ⅓ + …) harmonik, ıraksar."
          ], sonuc: "ln(1 + x) = Σ (−1)ⁿ⁺¹ xⁿ/n,  aralık (−1, 1]" },
        { tip: "tuzak", metin: "Yerine koyunca yeni serinin aralığı da yeniden hesaplanır. Fonksiyonun her yerde tanımlı olması serinin her yerde yakınsayacağı anlamına gelmez.", yanlis: "1/(1 + x²) her x'te tanımlı, o yüzden serisi her x'te yakınsar.", dogru: "Seri Σ (−1)ⁿ x²ⁿ geometriktir ve yalnız |x²| < 1 yani |x| < 1 için yakınsar." }
      ]
    },
    {
      baslik: "Kısmi toplamlar fonksiyona yaklaşır",
      kisa: "Yakınsaklık aralığının içinde polinomlar fonksiyona yaklaşır, dışında yaklaşmaz.",
      bloklar: [
        { tip: "grafik", baslik: "1/(1 − x) ve geometrik serinin kısmi toplamları", xlabel: "x", ylabel: "y", xmax: 4, ymax: 6,
          xticks: [{ v: 1, label: "−1" }, { v: 2, label: "0" }, { v: 3, label: "1" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          ogeler: [
            { id: "f", tip: "egri", renk: 1, etiket: "1/(1−x)", noktalar: [[1.2, 0.556], [1.3, 0.588], [1.4, 0.625], [1.5, 0.667], [1.6, 0.714], [1.7, 0.769], [1.8, 0.833], [1.9, 0.909], [2, 1], [2.1, 1.111], [2.2, 1.25], [2.3, 1.429], [2.4, 1.667], [2.5, 2], [2.6, 2.5], [2.7, 3.333], [2.8, 5]] },
            { id: "lm", tip: "cizgi", renk: 2, kesik: true, etiket: "x = −1", from: [1, 0], to: [1, 6] },
            { id: "lp", tip: "cizgi", renk: 2, kesik: true, etiket: "x = 1", from: [3, 0], to: [3, 6] },
            { id: "S", tip: "egri", renk: 0, etiket: "P₁", gizli: true, noktalar: [[1.2, 0.2], [1.3, 0.3], [1.4, 0.4], [1.5, 0.5], [1.6, 0.6], [1.7, 0.7], [1.8, 0.8], [1.9, 0.9], [2, 1], [2.1, 1.1], [2.2, 1.2], [2.3, 1.3], [2.4, 1.4], [2.5, 1.5], [2.6, 1.6], [2.7, 1.7], [2.8, 1.8]] }
          ],
          durumlar: [
            { metin: "Eğri f(x) = 1/(1 − x). Kesikli çizgiler yakınsaklık aralığının uçları: x = −1 ve x = 1. x = 1'de eğri sonsuza kaçar." },
            { metin: "P₁(x) = 1 + x: merkezde teğet gibi, uzaklaşınca ayrılıyor.", goster: ["S"] },
            { metin: "P₂(x) = 1 + x + x²: eğriye biraz daha sokuldu.", set: { S: { etiket: "P₂", noktalar: [[1.2, 0.84], [1.3, 0.79], [1.4, 0.76], [1.5, 0.75], [1.6, 0.76], [1.7, 0.79], [1.8, 0.84], [1.9, 0.91], [2, 1], [2.1, 1.11], [2.2, 1.24], [2.3, 1.39], [2.4, 1.56], [2.5, 1.75], [2.6, 1.96], [2.7, 2.19], [2.8, 2.44]] } } },
            { metin: "P₄: merkezin yakınında eğriyle çakışıyor, sağa gittikçe hâlâ geride kalıyor.", set: { S: { etiket: "P₄", noktalar: [[1.2, 0.738], [1.3, 0.687], [1.4, 0.674], [1.5, 0.688], [1.6, 0.722], [1.7, 0.771], [1.8, 0.834], [1.9, 0.909], [2, 1], [2.1, 1.111], [2.2, 1.25], [2.3, 1.425], [2.4, 1.65], [2.5, 1.938], [2.6, 2.306], [2.7, 2.773], [2.8, 3.362]] } } },
            { metin: "P₈: x = 0,5 civarında neredeyse tam. x = 0,8'de P₈ ≈ 4,33, f = 5: uca yaklaştıkça yakınsama yavaşlar.", set: { S: { etiket: "P₈", noktalar: [[1.2, 0.63], [1.3, 0.612], [1.4, 0.631], [1.5, 0.668], [1.6, 0.714], [1.7, 0.769], [1.8, 0.833], [1.9, 0.909], [2, 1], [2.1, 1.111], [2.2, 1.25], [2.3, 1.429], [2.4, 1.666], [2.5, 1.996], [2.6, 2.475], [2.7, 3.199], [2.8, 4.329]] } } }
          ] },
        { tip: "not", metin: "Derece büyüdükçe polinom, ==yalnız aralığın içinde== fonksiyona sokulur. |x| ≥ 1 için kısmi toplamlar fonksiyona yaklaşmaz; orada seri ıraksar." }
      ]
    },
    {
      baslik: "Serilerle hesap",
      kisa: "Bilinen seriler integralleri, toplamları ve türev değerlerini verir.",
      bloklar: [
        { tip: "ornek", baslik: "∫₀^½ e^(−x²) dx", durum: "İlk 4 terimle yaklaşık bul ve hata sınırını yaz.",
          adimlar: [
            "eᵘ = Σ uⁿ/n! ve u = −x²: e^(−x²) = 1 − x² + x⁴/2 − x⁶/6 + …",
            "Terim terim integral: x − x³/3 + x⁵/10 − x⁷/42 + …",
            "x = ½: 0,5 − 0,04167 + 0,00313 − 0,00019 ≈ 0,46127.",
            "Seri alterne, azalan: hata ≤ ilk atılan terim = (½)⁹/216 ≈ 0,000009."
          ], sonuc: "≈ 0,46127  (hata < 0,00001)" },
        { tip: "ornek", baslik: "f(x) = x² eˣ", durum: "f⁽⁵⁾(0) kaç?",
          adimlar: [
            "x² eˣ = x²(1 + x + x²/2! + x³/3! + …) = x² + x³ + x⁴/2! + x⁵/3! + …",
            "x⁵'in katsayısı 1/3! = 1/6.",
            "Katsayı = f⁽⁵⁾(0)/5! olduğundan f⁽⁵⁾(0) = 5! · (1/6) = 120/6 = 20."
          ], sonuc: "f⁽⁵⁾(0) = 20" },
        { tip: "ornek", baslik: "Σ (−1)ⁿ π²ⁿ / (2n)!   (n = 0'dan başlar)", durum: "Toplamı bul.",
          adimlar: [
            "Seri cos x = Σ (−1)ⁿ x²ⁿ/(2n)! serisine x = π koyunca elde edilir.",
            "Toplam cos π'ye eşit."
          ], sonuc: "−1" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Taylor serisi: Σ f⁽ⁿ⁾(a)/n! · (x − a)ⁿ. a = 0 ise Maclaurin serisi.",
            "eˣ = Σ xⁿ/n! ve sin x = Σ (−1)ⁿ x²ⁿ⁺¹/(2n + 1)! ve cos x = Σ (−1)ⁿ x²ⁿ/(2n)!, hepsi (−∞, ∞).",
            "1/(1 − x) = Σ xⁿ geometriktir ve yalnız |x| < 1 için geçerlidir.",
            "Yeni seri: x yerine ifade koy, x'in kuvvetiyle çarp, terim terim türev ya da integral al.",
            "Yeni serinin yakınsaklık aralığını yeniden bul; uç noktaları ayrı sına.",
            "1/(1 + x²) = Σ (−1)ⁿ x²ⁿ ve integrali arctan x = Σ (−1)ⁿ x²ⁿ⁺¹/(2n + 1) aralık [−1, 1]; ln(1 + x) aralığı (−1, 1].",
            "xᵏ'nın katsayısı c ise f⁽ᵏ⁾(0) = k! · c.",
            "Alterne seri hata sınırı ilk atılan terimdir; seri değerleri cos π = −1 gibi sonuçlar verir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "f(x) = e^(−2x) fonksiyonunun x = 0 merkezli Maclaurin serisinin ilk dört terimi hangisidir?",
      opts: ["1 − 2x + 4x² − 8x³", "1 − 2x + 2x² − (4/3)x³", "1 + 2x + 2x² + (4/3)x³", "1 − 2x + 2x² − (2/3)x³"], a: 1,
      why: "eᵘ = 1 + u + u²/2! + u³/3! + … ve u = −2x: 1 − 2x + 4x²/2 − 8x³/6 = 1 − 2x + 2x² − (4/3)x³. A şıkkı faktöriyellere bölmeyi unutur. C şıkkı işaretleri yok sayar." },
    { q: "Tabloda sin u için Maclaurin serisi verilmiştir. Bununla sin(x²) fonksiyonunun x = 0 merkezli Maclaurin serisi hangisidir?",
      fig: { type: "table", head: ["Fonksiyon", "Maclaurin serisi"], rows: [["sin u", "u − u³/3! + u⁵/5! − …"]], caption: "Temel seri" },
      opts: ["x² − x⁶/3! + x¹⁰/5! − …", "x² − x⁴/3! + x⁶/5! − …", "x − x³/3! + x⁵/5! − …", "x² − x⁶/3 + x¹⁰/5 − …"], a: 0,
      why: "u = x² koyunca u³ = x⁶ ve u⁵ = x¹⁰: x² − x⁶/3! + x¹⁰/5! − …. B şıkkı (x²)³ = x⁶ yerine x⁴ yazar. C şıkkı sin x'in serisidir. D şıkkı faktöriyelleri atar." },
    { q: "f(x) = Σ (−1)ⁿ x²ⁿ / (n + 1)!  (n = 0'dan başlar) ise f⁽⁶⁾(0) kaçtır?",
      opts: ["−1/24", "30", "−30", "−720"], a: 2,
      why: "x⁶ terimi n = 3: katsayı (−1)³/4! = −1/24. f⁽⁶⁾(0) = 6! · (−1/24) = −720/24 = −30. A şıkkı yalnız katsayıdır; 6! ile çarpmak gerekir. D, faktöriyeli (n + 1)!'e bölmeden yazar." },
    { q: "1/(1 + x²) fonksiyonunun x = 0 merkezli Maclaurin serisinin yakınsaklık aralığı nedir?",
      opts: ["(−∞, ∞), çünkü fonksiyon her x için tanımlıdır", "(−1, 1)", "[−1, 1]", "(−1, 1]"], a: 1,
      why: "Seri Σ (−1)ⁿ x²ⁿ geometriktir, oran −x²; |x²| < 1 ⇒ |x| < 1. Uçlarda terimler ±1, 0'a gitmez: ıraksar. A şıkkı fonksiyonun tanım kümesini serinin aralığı sanmaktır; C ve D uçlarda yakınsama varsayar." },
    { q: "arctan x = Σ (−1)ⁿ x²ⁿ⁺¹ / (2n + 1)  serisi [−1, 1] aralığında geçerlidir. x = 1 koyarak 1 − 1/3 + 1/5 − 1/7 + … toplamı hangisidir?",
      opts: ["ln 2", "π/2", "1", "π/4"], a: 3,
      why: "x = 1: Σ (−1)ⁿ/(2n + 1) = arctan 1 = π/4 (uç nokta aralığa dahil: alterne seri testiyle yakınsar). A şıkkı alterne harmonik Σ (−1)ⁿ⁺¹/n'nin toplamıdır, farklı bir seri." }
  ]
};
