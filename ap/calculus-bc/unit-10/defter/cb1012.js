/* Kitora not defteri · cb1012 · 10.13 Yakınsaklık Yarıçapı ve Aralığı
   Kaynak: College Board AP Calculus BC CED, Topic 10.13. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb1012",
  amac: "Bu konu *power series* yani kuvvet serilerinin hangi x değerlerinde yakınsadığını anlatıyor. Oran testiyle *radius of convergence* yani yarıçapı bulmayı, uç noktaları ayrı sınamayı ve *interval of convergence* yani yakınsaklık aralığını yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Kuvvet serisi nedir?",
      kisa: "Kuvvet serisi, polinomun sonsuz uzayan hâlidir; her x ayrı bir sayı serisidir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Σ cₙ (x − a)ⁿ", alt: "a merkezli kuvvet serisi" }, "=",
            { t: "c₀ + c₁(x − a) + c₂(x − a)² + …", alt: "sonsuz polinom" }
          ], aciklama: "Her x değeri sayı serisi verir. Bazı x'lerde yakınsar, bazılarında ıraksar. ==Merkez x = a'da bütün terimler 0 olur, yalnız c₀ kalır: seri orada hep yakınsar.==" },
        { tip: "kavramlar", kartlar: [
            { ikon: "📍", terim: "Radius of convergence", tr: "yakınsaklık yarıçapı", tanim: "Seri |x − a| < R iken yakınsar, |x − a| > R iken ıraksar. R, merkezden aralığın ucuna olan uzaklıktır.", ornek: "Merkez 2, R = 3 ise açık aralık (−1, 5)." },
            { ikon: "↔️", terim: "Interval of convergence", tr: "yakınsaklık aralığı", tanim: "Serinin yakınsadığı bütün x değerlerinin kümesi. Uç noktalar a − R ve a + R ayrıca sınanıp aralığa katılır ya da katılmaz.", ornek: "[−1, 5) aralığında −1 dahil, 5 dahil değil." }
          ] }
      ]
    },
    {
      baslik: "Yarıçapı oran testiyle bulmak",
      kisa: "lim|aₙ₊₁/aₙ| < 1 eşitsizliğini çözünce |x − a| < R çıkar.",
      bloklar: [
        { tip: "adimlar", baslik: "Dört hamle", adimlar: [
            { baslik: "Oran testini kur", metin: "aₙ = cₙ(x − a)ⁿ için ρ(x) = lim |aₙ₊₁ / aₙ| hesapla; x'li bir ifade çıkar." },
            { baslik: "ρ(x) < 1 çöz", metin: "Sonuç |x − a| < R biçimine gelir. R yarıçaptır." },
            { baslik: "Açık aralığı yaz", metin: "(a − R, a + R) içinde seri mutlak yakınsar, dışında ıraksar." },
            { baslik: "Uç noktaları ayrı sına", metin: "Uçlarda ρ = 1 çıkar, oran testi sonuçsuzdur. x = a ± R değerlerini seriye koy; p-serisi, alterne seri vb. ile karar ver." }
          ] },
        { tip: "ornek", baslik: "Σ 2ⁿ (x − 3)ⁿ   (n = 0'dan başlar)", durum: "R ve yakınsaklık aralığı nedir?",
          adimlar: [
            "|aₙ₊₁/aₙ| = 2|x − 3| (n'den bağımsız).",
            "2|x − 3| < 1 ⇒ |x − 3| < ½, yani R = ½. Açık aralık (2,5; 3,5).",
            "x = 3,5: terimler 1ⁿ = 1, 0'a gitmez, ıraksar. x = 2,5: terimler (−1)ⁿ, 0'a gitmez, ıraksar."
          ], sonuc: "R = ½; aralık (2,5; 3,5)" },
        { tip: "tablo", baslik: "R üç biçimde olabilir", head: ["R", "Yakınsadığı yer", "Örnek"],
          rows: [
            ["0", "yalnız x = a", "Σ n!·xⁿ"],
            ["0 < R < ∞", "(a − R, a + R) içi; uçlar ayrı sınanır", "Σ (x − 2)ⁿ/(n·3ⁿ)"],
            ["∞", "bütün x", "Σ xⁿ/n!"]
          ], vurgu: 1, not: "Σ n!·xⁿ'de oran (n + 1)|x| → ∞ (x ≠ 0); Σ xⁿ/n!'de oran |x|/(n + 1) → 0 < 1 (her x)." }
      ]
    },
    {
      baslik: "Grafikte yakınsama bölgesi",
      kisa: "ρ(x) eğrisi 1'in altında kaldığı yerde seri yakınsar.",
      bloklar: [
        { tip: "ornek", baslik: "Σ (x − 2)ⁿ / (n · 3ⁿ)   (n = 1'den başlar)", durum: "R ve yakınsaklık aralığı nedir?",
          adimlar: [
            "|aₙ₊₁/aₙ| = |x − 2| · n / (3(n + 1)) → |x − 2|/3.",
            "|x − 2|/3 < 1 ⇒ |x − 2| < 3. R = 3 ve açık aralık (−1, 5).",
            "x = 5: terimler 3ⁿ/(n·3ⁿ) = 1/n, harmonik seri, ıraksar.",
            "x = −1: terimler (−1)ⁿ/n, alterne harmonik seri, yakınsar (koşullu)."
          ], sonuc: "R = 3; aralık [−1, 5)" },
        { tip: "grafik", baslik: "ρ(x) = |x − 2| / 3 ve ρ < 1 bölgesi", xlabel: "x", ylabel: "ρ(x)", xmax: 8, ymax: 2,
          xticks: [{ v: 1, label: "−1" }, { v: 4, label: "2" }, { v: 7, label: "5" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }],
          ogeler: [
            { id: "vl", tip: "cizgi", renk: 0, from: [0, 1.333], to: [4, 0], gizli: true },
            { id: "vr", tip: "cizgi", renk: 0, etiket: "ρ(x)", from: [4, 0], to: [8, 1.333], gizli: true },
            { id: "th", tip: "cizgi", renk: 1, kesik: true, etiket: "ρ = 1", from: [0, 1], to: [8, 1], gizli: true },
            { id: "pl", tip: "nokta", renk: 2, x: 1, y: 1, kilavuz: true, gizli: true },
            { id: "pr", tip: "nokta", renk: 2, x: 7, y: 1, kilavuz: true, gizli: true },
            { id: "gr", tip: "cizgi", renk: 2, etiket: "yakınsar", from: [1, 0.07], to: [7, 0.07], gizli: true },
            { id: "kapali", tip: "nokta", renk: 2, x: 1, y: 0, etiket: "−1 dahil", gizli: true },
            { id: "acik", tip: "yazi", x: 7, y: 0.25, metin: "○ 5 hariç", gizli: true }
          ],
          durumlar: [
            { metin: "Oran testi: ρ(x) = |x − 2|/3. Merkez x = 2'de ρ = 0, uzaklaştıkça artıyor.", goster: ["vl", "vr"] },
            { metin: "Seri ρ < 1 iken yakınsar. Eşik çizgisi ρ = 1.", goster: ["th"] },
            { metin: "V eşiği x = −1 ve x = 5'te keser: R = 3, açık aralık (−1, 5).", goster: ["pl", "pr", "gr"] },
            { metin: "Uçlar ayrı sınanır: x = −1 yakınsar (alterne harmonik), x = 5 ıraksar (harmonik). Aralık [−1, 5).", goster: ["kapali", "acik"] }
          ] }
      ]
    },
    {
      baslik: "Uç noktalar dört biçimde sonuçlanır",
      kisa: "Uç noktada ne olacağını önceden bilemezsin; her ucu ayrı sına.",
      bloklar: [
        { tip: "tablo", baslik: "Hepsinde R = 1", head: ["Seri", "x = 1", "x = −1", "Aralık"],
          rows: [
            ["Σ xⁿ", "ıraksar (terimler 1)", "ıraksar (terimler ±1)", "(−1, 1)"],
            ["Σ xⁿ/n", "ıraksar (harmonik)", "yakınsar (alterne)", "[−1, 1)"],
            ["Σ (−1)ⁿ xⁿ/n", "yakınsar (alterne)", "ıraksar (harmonik)", "(−1, 1]"],
            ["Σ xⁿ/n²", "yakınsar (p = 2)", "yakınsar (mutlak)", "[−1, 1]"]
          ], vurgu: 1, not: "Oran testi dört seride de ρ = |x| verir; ayrımı uç noktaların sınanması yapar. Hepsi n = 0 ya da 1'den başlar, bu uç sınamayı değiştirmez." },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Uç nokta aralığa *dahil*", maddeler: ["Uçtaki sayı serisi yakınsar", "Köşeli parantez ]"] },
          sag: { ikon: "⛔", baslik: "Uç nokta aralığa *dahil değil*", maddeler: ["Uçtaki sayı serisi ıraksar", "Yuvarlak parantez )"] },
          oyun: [
            { metin: "x = 1 için Σ xⁿ/n²", cevap: "sol", neden: "Σ 1/n² p-serisi (p = 2): yakınsar." },
            { metin: "x = 1 için Σ xⁿ/n", cevap: "sag", neden: "Σ 1/n harmonik seri: ıraksar." },
            { metin: "x = −1 için Σ xⁿ/n", cevap: "sol", neden: "Σ (−1)ⁿ/n alterne harmonik: yakınsar." },
            { metin: "x = −1 için Σ xⁿ", cevap: "sag", neden: "Terimler (−1)ⁿ, 0'a gitmez: n. terim testi, ıraksar." }
          ] }
      ]
    },
    {
      baslik: "Türev ve integral: R aynı, uçlar değişebilir",
      kisa: "Terim terim türev ya da integralde yarıçap korunur; uçlar değişebilir.",
      bloklar: [
        { tip: "tablo", baslik: "f(x) = Σ xⁿ/n (n = 1'den) ve türevi, integrali", head: ["Seri", "R", "Aralık"],
          rows: [
            ["f(x) = Σ xⁿ/n", "1", "[−1, 1)"],
            ["f′(x) = Σ xⁿ⁻¹ = 1 + x + x² + …", "1", "(−1, 1)"],
            ["∫ f(x) dx = Σ xⁿ⁺¹ / (n(n + 1))", "1", "[−1, 1]"]
          ], vurgu: 1, not: "Türevde −1 ucu kaybolur, integralde 1 ucu kazanılır. Her yeni seri için uçlar yeniden sınanmalı." },
        { tip: "tuzak", metin: "Türev ve integral, yarıçapı korur. Uç noktaların davranışını korumak zorunda değildir.", yanlis: "f(x)'in aralığı [−1, 1) ise f′(x)'in aralığı da [−1, 1).", dogru: "R = 1 korunur ama f′ için uçlar yeniden sınanır: aralık (−1, 1)." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Kuvvet serisi Σ cₙ(x − a)ⁿ; merkez x = a'da her zaman yakınsar.",
            "Yarıçap: oran testiyle lim |aₙ₊₁/aₙ| < 1 çöz, |x − a| < R elde et.",
            "R = 0 yalnız merkez, R = ∞ her x, 0 < R < ∞ ise (a − R, a + R) içinde yakınsar.",
            "Açık aralığın içinde yakınsama mutlaktır; dışında seri ıraksar.",
            "Uç noktalarda oran testi sonuçsuz kalır; x = a ± R'yi ayrı ayrı sayı serisi olarak sına.",
            "Uçların sonucu dört biçimden biri: (−1, 1), [−1, 1), (−1, 1] ya da [−1, 1] tarzı.",
            "Katsayıdaki 2ⁿ gibi çarpanlar yarıçapı değiştirir: Σ 2ⁿ(x − 3)ⁿ için R = ½.",
            "Türev ve integral R'yi korur; uçları yeniden sına."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Σ (x − 4)ⁿ / (n · 5ⁿ)  (n = 1'den başlar) serisinin yakınsaklık aralığı hangisidir?",
      opts: ["(−1, 9)", "[−1, 9)", "(−1, 9]", "[−1, 9]"], a: 1,
      why: "Oran testi |x − 4|/5 < 1: R = 5 ve açık aralık (−1, 9). x = 9'da terimler 1/n (harmonik): ıraksar. x = −1'de terimler (−1)ⁿ/n (alterne harmonik): yakınsar. Aralık [−1, 9). A şıkkı uçları sınamadan bırakır." },
    { q: "Bir kuvvet serisine oran testi uygulandıktan sonra tabloda özetlenen sonuçlar elde edilmiştir. Serinin yakınsaklık aralığı nedir?",
      fig: { type: "table", head: ["Test", "Sonuç"], rows: [["lim |aₙ₊₁/aₙ|", "|x + 1| / 2"], ["x = 1 ile elde edilen sayı serisi", "ıraksar"], ["x = −3 ile elde edilen sayı serisi", "yakınsar"]], caption: "Oran testi ve uç noktalar" },
      opts: ["(−3, 1)", "[−3, 1]", "(−3, 1]", "[−3, 1)"], a: 3,
      why: "|x + 1|/2 < 1 ⇒ |x + 1| < 2: R = 2, açık aralık (−3, 1). Uç noktalardan x = −3 yakınsıyor (aralığa dahil), x = 1 ıraksıyor (dahil değil): [−3, 1). C şıkkı iki ucu ters yorumlar." },
    { q: "Σ n! (x − 1)ⁿ  (n = 0'dan başlar) serisi için hangisi doğrudur?",
      opts: ["R = ∞; seri her x için yakınsar", "R = 1; yakınsaklık aralığı (0, 2)", "R = 0; seri yalnız x = 1'de yakınsar", "R = ½; yakınsaklık aralığı (½, 3/2)"], a: 2,
      why: "|aₙ₊₁/aₙ| = (n + 1)|x − 1| → ∞ (x ≠ 1 için). Oran 1'den büyük olduğu için seri x = 1 dışında ıraksar: R = 0. Merkez x = 1'de ise yalnız ilk terim kalır, seri yakınsar. A şıkkı n! ile 1/n!'i karıştırmaktır." },
    { q: "f(x) = Σ xⁿ / n²  (n = 1'den başlar) serisinin yakınsaklık aralığı [−1, 1]'dir. f′(x) serisinin (terim terim türevin) yakınsaklık aralığı nedir?",
      opts: ["[−1, 1)", "[−1, 1]", "(−1, 1)", "(−1, 1]"], a: 0,
      why: "f′(x) = Σ xⁿ⁻¹/n; R hâlâ 1. x = 1'de Σ 1/n harmonik: ıraksar. x = −1'de Σ (−1)ⁿ⁻¹/n alterne harmonik: yakınsar. Aralık [−1, 1). B şıkkı türevde de uçların korunacağını sanmaktır." },
    { q: "Σ x²ⁿ / 4ⁿ  (n = 0'dan başlar) serisinin yakınsaklık yarıçapı kaçtır?",
      opts: ["4", "2", "1/2", "1/4"], a: 1,
      why: "|aₙ₊₁/aₙ| = x²/4 < 1 ⇒ |x| < 2: R = 2. A şıkkı 4ⁿ'e bakıp R = 4 sanar, ama x²ⁿ olduğu için karekök gerekir (x² < 4)." }
  ]
};
