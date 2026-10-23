/* Kitora not defteri · cb1011 · 10.12 Lagrange Hata Sınırı
   Kaynak: College Board AP Calculus BC CED, Topic 10.12. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb1011",
  amac: "Bu konu *Lagrange error bound* yani Lagrange hata sınırını anlatıyor: bir Taylor polinomuyla yaptığın yaklaşımın en fazla ne kadar yanılabileceğini hesaplayacaksın. M değerini seçmeyi, sınırı yazmayı ve istenen hassasiyet için gereken dereceyi bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Taylor polinomu ne kadar yanılır?",
      kisa: "Lagrange sınırı, yaklaşımın yanılabileceği en büyük miktarı verir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧮", terim: "Remainder", tr: "kalan (hata terimi)", tanim: "Fonksiyonla Taylor polinomu arasındaki fark: Rₙ(x) = f(x) − Pₙ(x). İşareti pozitif ya da negatif olabilir.", ornek: "Rₙ(x) küçükse Pₙ(x) iyi bir yaklaşımdır." },
            { ikon: "🛡️", terim: "Lagrange error bound", tr: "Lagrange hata sınırı", tanim: "Kalanın mutlak değerini sınırlayan formül. Gerçek hatayı vermez, hatanın aşamayacağı bir üst sınırı verir.", ornek: "Sınır 0,005 ise gerçek hata 0,003 de olabilir, 0,0001 de." }
          ] },
        { tip: "formul", parcalar: [
            { t: "|Rₙ(x)|", alt: "kalanın büyüklüğü" }, "≤",
            { t: "M / (n + 1)!", alt: "katsayı" }, "·",
            { t: "|x − a|ⁿ⁺¹", alt: "merkezden uzaklık" }
          ], aciklama: "Pₙ, x = a merkezli. ==M, a ile x arasındaki bütün t için |f⁽ⁿ⁺¹⁾(t)|'nin bir üst sınırıdır.== Bu aralıkta f⁽ⁿ⁺¹⁾ var olmalıdır." }
      ]
    },
    {
      baslik: "M'yi nasıl seçerim?",
      kisa: "M, (n + 1). türevin mutlak değerini aralıkta aşmayan bir sayıdır.",
      bloklar: [
        { tip: "adimlar", baslik: "Dört hamle", adimlar: [
            { baslik: "Türevi seç", metin: "Pₙ n. dereceden ise (n + 1). türeve bak: P₃ için f⁗ = f⁽⁴⁾." },
            { baslik: "Aralığı belirle", metin: "a ile x arasındaki bütün t değerleri; x = a'dan büyük ya da küçük olabilir." },
            { baslik: "M'yi bul", metin: "|f⁽ⁿ⁺¹⁾(t)|'nin bu aralıktaki en büyük değeri ya da kolay bir üst sınır (örneğin |sin t| ≤ 1)." },
            { baslik: "Yerine koy", metin: "M/(n + 1)! · |x − a|ⁿ⁺¹ hesapla." }
          ] },
        { tip: "tuzak", metin: "Üç sık hata: yanlış türev (n. yerine n + 1.), yanlış faktöriyel ve M'yi yalnız x noktasında hesaplamak.", yanlis: "P₃ için f‴'ün sınırını M al ve 3!'e böl.", dogru: "P₃ için f⁽⁴⁾'ün aralıktaki sınırı M; 4!'e böl ve |x − a|⁴ kullan." }
      ]
    },
    {
      baslik: "Çözümlü örnekler",
      kisa: "Her örnekte önce (n + 1). türev, sonra M, sonra sınır.",
      bloklar: [
        { tip: "ornek", baslik: "eˣ'in P₃'ü ile e^0,5 (a = 0)", durum: "Hata sınırını bul.",
          adimlar: [
            "n = 3, bu yüzden f⁽⁴⁾(t) = eᵗ. Aralık: 0 ≤ t ≤ 0,5.",
            "eᵗ artan, aralıkta en fazla e^0,5 = √e. e < 4 olduğundan √e < 2: M = 2 alabiliriz.",
            "Sınır: 2/4! · (0,5)⁴ = (2/24)(0,0625) ≈ 0,0052.",
            "Kontrol: P₃(0,5) ≈ 1,6458 ve e^0,5 ≈ 1,6487; gerçek hata ≈ 0,0029 < 0,0052."
          ], sonuc: "|R₃(0,5)| ≤ 0,0052" },
        { tip: "ornek", baslik: "sin x ile sin 0,6 (a = 0)", durum: "x − x³/6 yaklaşımının hata sınırını bul.",
          adimlar: [
            "x⁴ terimi sıfır olduğundan x − x³/6 aynı zamanda P₄'tür. Daha sıkı sınır için n = 4 al.",
            "f⁽⁵⁾(t) = cos t ve |cos t| ≤ 1: M = 1.",
            "Sınır: 1/5! · (0,6)⁵ = 0,07776/120 = 0,000648.",
            "P₃(0,6) = 0,6 − 0,216/6 = 0,564. Gerçek değer 0,564 ± 0,000648 aralığındadır."
          ], sonuc: "|sin 0,6 − 0,564| ≤ 0,000648" },
        { tip: "ornek", baslik: "ln x'in P₃'ü ile ln 1,2 (a = 1)", durum: "Hata sınırını bul. M'yi nerede almalı?",
          adimlar: [
            "n = 3, f⁽⁴⁾(t) = −6/t⁴, yani |f⁽⁴⁾(t)| = 6/t⁴.",
            "Aralık 1 ≤ t ≤ 1,2. 6/t⁴ azalan olduğundan en büyüğü t = 1'de: M = 6.",
            "Sınır: 6/4! · (0,2)⁴ = 0,25 · 0,0016 = 0,0004.",
            "Kontrol: P₃(1,2) ≈ 0,18267, ln 1,2 ≈ 0,18232; hata ≈ 0,00035 < 0,0004."
          ], sonuc: "|R₃(1,2)| ≤ 0,0004" }
      ]
    },
    {
      baslik: "Sınır ve gerçek hata grafikte",
      kisa: "Sınır eğrisi, gerçek hata eğrisinin her zaman üstünde kalır.",
      bloklar: [
        { tip: "grafik", baslik: "eˣ'in P₃'ü: gerçek hata ve Lagrange sınırı (M = 8, 0 ≤ x ≤ 2)", xlabel: "x", ylabel: "hata", xmax: 2, ymax: 6,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, etiket: "gerçek hata", noktalar: [[0, 0], [0.25, 0], [0.5, 0.003], [0.75, 0.015], [1, 0.052], [1.25, 0.134], [1.5, 0.294], [1.75, 0.58], [2, 1.056]], gizli: true },
            { id: "b", tip: "egri", renk: 1, etiket: "sınır", noktalar: [[0, 0], [0.25, 0.001], [0.5, 0.021], [0.75, 0.105], [1, 0.333], [1.25, 0.814], [1.5, 1.688], [1.75, 3.126], [2, 5.333]], gizli: true },
            { id: "pe", tip: "nokta", renk: 0, x: 1, y: 0.052, etiket: "0,05", gizli: true },
            { id: "pb", tip: "nokta", renk: 1, x: 1, y: 0.333, etiket: "0,33", gizli: true }
          ],
          durumlar: [
            { metin: "Gerçek hata |R₃(x)| = eˣ − P₃(x): merkezde sıfır, uzaklaştıkça hızla büyür.", goster: ["e"] },
            { metin: "Lagrange sınırı (M = 8 ile) x⁴/3: gerçek hatanın hep üstünde. Merkezin yakınında ikisi de çok küçük.", goster: ["b"] },
            { metin: "x = 1'de gerçek hata ≈ 0,05, sınır ≈ 0,33: sınır güvenli ama biraz fazla geniş.", goster: ["pe", "pb"] }
          ] },
        { tip: "tablo", baslik: "Birkaç x için karşılaştırma", head: ["x", "Gerçek hata", "Sınır (M = 8)"],
          rows: [
            ["0,5", "0,003", "0,021"],
            ["1", "0,052", "0,333"],
            ["1,5", "0,294", "1,688"],
            ["2", "1,056", "5,333"]
          ], vurgu: 1, not: "M = 8 bütün [0, 2] için seçildi (e² ≈ 7,39 ≤ 8). Aralığı daraltıp M'yi küçültürsen sınır sıkılaşır." }
      ]
    },
    {
      baslik: "Hangi derece yeter, hangi sınır?",
      kisa: "İstenen hata için sınırı ε'dan küçük yapan en küçük n bulunur.",
      bloklar: [
        { tip: "ornek", baslik: "e^0,5 hatası 0,001'den küçük olsun", durum: "eˣ'in P_n'inde (a = 0) en küçük n kaçtır?",
          adimlar: [
            "Her n için (n + 1). türev eᵗ ve aralıkta eᵗ < 2: M = 2.",
            "Sınır: 2/(n + 1)! · (0,5)ⁿ⁺¹ < 0,001.",
            "n = 3: 0,0052 > 0,001, yetmez.",
            "n = 4: 2/5! · (0,5)⁵ = (1/60)(1/32) ≈ 0,00052 < 0,001, yeter."
          ], sonuc: "n = 4 (P₄ yeterli)" },
        { tip: "ikili", sol: { ikon: "🔀", baslik: "*Alternating series error bound*", maddeler: ["Alterne, azalan, 0'a giden seri", "Hata ≤ ilk atılan terim"] },
          sag: { ikon: "📐", baslik: "*Lagrange error bound*", maddeler: ["Taylor polinomu hatası", "Hata ≤ M/(n + 1)! · |x − a|ⁿ⁺¹"] },
          oyun: [
            { metin: "Σ (−1)ⁿ / n! serisinin S₄ ile yaklaşık değerinin hatası", cevap: "sol", neden: "Alterne ve azalan seri: ilk atılan terim 1/4!." },
            { metin: "|f⁽⁴⁾(t)| ≤ 10 verilmiş; P₃ ile f(2,5) hatası", cevap: "sag", neden: "Türev sınırı M verilmiş: Lagrange formülü." },
            { metin: "ln x'in x = 1 merkezli P₃'ü ile ln 1,2'nin hatası", cevap: "sag", neden: "Polinom hatası; (n + 1). türevin sınırı gerekir." },
            { metin: "Terimleri sırayla işaret değiştiren ve 0'a azalan bir toplamın hatası", cevap: "sol", neden: "Alterne seri hata sınırının şartları." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Rₙ(x) = f(x) − Pₙ(x) Taylor polinomunun hatasıdır.",
            "Lagrange hata sınırı: |Rₙ(x)| ≤ M/(n + 1)! · |x − a|ⁿ⁺¹.",
            "M, a ile x arasındaki t için |f⁽ⁿ⁺¹⁾(t)|'nin bir üst sınırıdır; n. değil (n + 1). türev.",
            "Faktöriyel (n + 1)!, üs de n + 1. İkisini de unutma.",
            "M'yi aralıktaki en kötü noktada bul: ln x için 6/t⁴ en büyük a'da, eᵗ ise x uç noktasında.",
            "Hata ≤ ε isteniyorsa sınırı ε ile karşılaştırıp en küçük n'yi bul (deneme-yanılma ya da eşitsizlik).",
            "sin x ve cos x'te bir terim sıfırsa bir üst derecenin sınırını kullanmak daha sıkı bir sınır verir.",
            "Alterne seride hata sınırı ilk atılan terimdir; Taylor polinomlarında Lagrange kullanılır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "f(x) = eˣ için x = 0 merkezli 2. dereceden Taylor polinomu P₂ ile f(0,3) yaklaşık bulunuyor ve 0 ≤ t ≤ 0,3 için |f⁽³⁾(t)| ≤ 3'tür. Lagrange hata sınırı hangisidir?",
      opts: ["(3/2!)(0,3)² = 0,135", "(3/3!)(0,3)³ = 0,0135", "(3/3!)(0,3)² = 0,045", "(3/4!)(0,3)⁴ ≈ 0,001"], a: 1,
      why: "n = 2 için sınır M/(n + 1)! · |x − a|ⁿ⁺¹ = 3/3! · (0,3)³ = 0,5 · 0,027 = 0,0135. A ve C şıkları yanlış faktöriyel/üs seçer; D, n + 2 kullanmak demektir." },
    { q: "Tablo, f'nin türevlerinin [2, 3] aralığındaki en büyük mutlak değerlerini veriyor. x = 2 merkezli P₃ ile f(3) yaklaşık bulunursa Lagrange hata sınırı nedir?",
      fig: { type: "table", head: ["k", "1", "2", "3", "4", "5"], rows: [["[2, 3]'te en büyük |f⁽ᵏ⁾(x)|", "5", "8", "12", "20", "30"]], caption: "Türev sınırları" },
      opts: ["12/3! · 1³ = 2", "20/3! · 1³ = 10/3", "20/4! · 1⁴ = 5/6", "20/5! · 1⁵ = 1/6"], a: 2,
      why: "P₃ için 4. türev gerekir: M = 20, (n + 1)! = 4!, |x − a| = 1. Sınır 20/24 = 5/6. A şıkkı 3. türevi, B şıkkı doğru M ile 3!'i, D şıkkı 5!'i seçer; hepsi n + 1 kuralını bozar." },
    { q: "f(x) = ln x, a = 1 merkezli P₃ ile ln 1,5 yaklaşık bulunuyor. [1, 1,5] aralığında |f⁽⁴⁾(t)| = 6/t⁴ olduğuna göre Lagrange hata sınırı en uygun olarak hangisidir? (M aralıktaki en büyük değer alınır.)",
      opts: ["1/64", "yaklaşık 0,0031", "1/16", "1/4"], a: 0,
      why: "6/t⁴ azalan olduğundan aralıktaki en büyük değeri t = 1'de: M = 6. Sınır 6/4! · (0,5)⁴ = 0,25 · 0,0625 = 1/64. B şıkkı M'yi t = 1,5'te hesaplar (6/1,5⁴ ≈ 1,19); en kötü nokta kullanılmalı. C 4! yerine 3!, D ise üssü unutur." },
    { q: "eˣ'in x = 0 merkezli P_n polinomuyla e'yi (x = 1) yaklaşık hesaplıyoruz; 0 ≤ t ≤ 1 için eᵗ ≤ 3. Lagrange hata sınırının 0,01'den küçük olması için gereken en küçük n kaçtır?",
      opts: ["3", "4", "6", "5"], a: 3,
      why: "Sınır 3/(n + 1)! · 1ⁿ⁺¹ < 0,01, yani (n + 1)! > 300. 5! = 120 yetmez, 6! = 720 yeter: n + 1 = 6, n = 5. n = 4 için sınır 3/120 = 0,025 > 0,01. C şıkkı n + 1 değerini n sanmaktır." },
    { q: "sin x'in x − x³/6 yaklaşımı aynı zamanda 4. derece Maclaurin polinomudur. n = 4 alınarak |x| ≤ 1/2 için Lagrange hata sınırı (|sin t| ve |cos t| ≤ 1 kullanılarak) nedir?",
      opts: ["1/384", "1/240", "1/3840", "1/120"], a: 2,
      why: "f⁽⁵⁾ = cos, M = 1: sınır 1/5! · (1/2)⁵ = (1/120)(1/32) = 1/3840. A şıkkı n = 3 formülü (1/4! · (1/2)⁴ = 1/384). B şıkkı üssü almayı unutup yalnız 1/2 ile çarpar; D şıkkı |x − a| çarpanını hiç koymaz." }
  ]
};
