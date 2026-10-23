/* Kitora not defteri · cb1009 · 10.10 Alterne Seri Hata Sınırı
   Kaynak: College Board AP Calculus BC CED, Topic 10.10. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb1009",
  amac: "Bu konu *alternating series error bound* yani alterne seri hata sınırını anlatıyor: sonsuz toplamı birkaç terimle yaklaşık bulursan ne kadar yanılırsın? İlk atılan terimle hatayı sınırlamayı, hata yönünü bulmayı ve kaç terim gerektiğini hesaplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Kısmi toplam ve hata",
      kisa: "Sonsuz toplamı kısmi toplamla yaklaşık buluruz; fark hatadır.",
      bloklar: [
        { tip: "hikaye", ikon: "🚶", baslik: "İleri-geri adımlar",
          metin: "Durağa doğru önce 1 adım ileri, sonra yarım adım geri, sonra çeyrek adım ileri gidiyorsun; her adım öncekinden kısa. Durak her zaman son iki konumun arasında kalır. Dolayısıyla durağa uzaklığın, bir sonraki adımın uzunluğunu geçemez." },
        { tip: "kavramlar", kartlar: [
            { ikon: "➕", terim: "Partial sum", tr: "kısmi toplam", tanim: "Serinin ilk n teriminin toplamı: Sₙ = a₁ + a₂ + … + aₙ. Serinin toplamı S, kısmi toplamların limitidir.", ornek: "Σ(−½)ⁿ serisinde ilk 4 terim: S₄ = 1 − ½ + ¼ − ⅛ = 0,625." },
            { ikon: "📏", terim: "Error", tr: "hata", tanim: "Kısmi toplamla gerçek toplam arasındaki fark: S − Sₙ. Hata sınırı bu farkın mutlak değerinin en fazla ne olabileceğini söyler.", ornek: "S = 2/3 ve S₄ = 0,625 ise hata yaklaşık 0,042." }
          ] }
      ]
    },
    {
      baslik: "Hata sınırı kuralı",
      kisa: "Hata, ilk atılan terimin mutlak değerinden büyük olamaz.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "|S − Sₙ|", alt: "gerçek hata" }, "≤",
            { t: "|aₙ₊₁|", alt: "ilk atılan terim" }
          ], aciklama: "Sₙ ilk n terimin toplamı. ==S her zaman Sₙ ile Sₙ₊₁ arasındadır.== Atılan ilk terim pozitifse Sₙ gerçek toplamın altında kalır (az tahmin), negatifse üstünde kalır (fazla tahmin)." },
        { tip: "liste", maddeler: [
            { ikon: "🔀", baslik: "Alterne", metin: "Terimlerin işareti sırayla değişiyor." },
            { ikon: "📉", baslik: "Azalan", metin: "Mutlak değerler azalıyor: |aₙ₊₁| ≤ |aₙ|." },
            { ikon: "🎯", baslik: "Sıfıra gidiyor", metin: "lim |aₙ| = 0 (n → ∞)." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Kural kullanılır", maddeler: ["Üç şart da sağlanır", "Örnek: Σ(−1)ⁿ/√n"] },
          sag: { ikon: "🚫", baslik: "Kural kullanılamaz", maddeler: ["Şartlardan biri bozuk", "Örnek: Σ1/n²"] },
          oyun: [
            { metin: "Σ (−1)ⁿ / √n   (n ≥ 1)", cevap: "sol", neden: "Alterne, 1/√n azalıyor ve 0'a gidiyor." },
            { metin: "Σ (−1)ⁿ · n/(n + 1)", cevap: "sag", neden: "Terimlerin mutlak değeri 1'e gidiyor, 0'a gitmiyor." },
            { metin: "Σ 1/n²", cevap: "sag", neden: "Alterne değil: bütün terimler pozitif." },
            { metin: "Σ (−⅔)ⁿ   (n ≥ 0)", cevap: "sol", neden: "|aₙ| = (⅔)ⁿ azalıyor ve 0'a gidiyor." }
          ] },
        { tip: "tuzak", metin: "Sınır, son kullandığın terim değil, ilk atılan terimdir. Önce kaç terim topladığını say.", yanlis: "S₄ için hata sınırı a₄.", dogru: "S₄ ilk 4 terimin toplamıdır; hata ≤ |a₅|." }
      ]
    },
    {
      baslik: "Zikzak ve hata bandı grafikte",
      kisa: "Kısmi toplamlar gerçek toplamın iki yanında zikzak yapar.",
      bloklar: [
        { tip: "grafik", baslik: "Σ(−½)ⁿ: kısmi toplamlar ve S = 2/3", xlabel: "n (terim sayısı)", ylabel: "Sₙ", xmax: 8, ymax: 1,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }, { v: 7, label: "7" }],
          yticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }],
          ogeler: [
            { id: "z", tip: "egri", renk: 0, etiket: "Sₙ", noktalar: [[1, 1], [2, 0.5], [3, 0.75], [4, 0.625], [5, 0.6875], [6, 0.65625], [7, 0.671875]], gizli: true },
            { id: "s", tip: "cizgi", renk: 2, kesik: true, etiket: "S = 2/3", from: [0, 0.667], to: [8, 0.667], gizli: true },
            { id: "b", tip: "alan", renk: 1, noktalar: [[0, 0.625], [8, 0.625], [8, 0.6875], [0, 0.6875]], gizli: true },
            { id: "p4", tip: "nokta", renk: 0, x: 4, y: 0.625, etiket: "S₄", gizli: true },
            { id: "p5", tip: "nokta", renk: 0, x: 5, y: 0.6875, etiket: "S₅", gizli: true }
          ],
          durumlar: [
            { metin: "Σ(−½)ⁿ (n = 0'dan): ilk 1, 2, 3, … terimin toplamı 1; 0,5; 0,75; 0,625; … diye gider.", goster: ["z"] },
            { metin: "Gerçek toplam S = 1 / (1 + ½) = 2/3. Kısmi toplamlar bu sayının bir altından, bir üstünden geçer.", goster: ["s"] },
            { metin: "S₄ = 0,625 gerçek toplamın altında, S₅ = 0,6875 üstünde: S bu ikisinin arasında.", goster: ["p4", "p5"] },
            { metin: "Bandın genişliği ilk atılan terim kadar: a₅ = 1/16 = 0,0625. Hata bu bandın içinde kalır.", goster: ["b"] }
          ] },
        { tip: "tablo", baslik: "Hata hep sınırın içinde", head: ["n", "Sₙ", "İlk atılan |aₙ₊₁|", "Gerçek hata |S − Sₙ|"],
          rows: [
            ["1", "1", "0,5", "0,333"],
            ["2", "0,5", "0,25", "0,167"],
            ["3", "0,75", "0,125", "0,083"],
            ["4", "0,625", "0,0625", "0,042"],
            ["5", "0,6875", "0,03125", "0,021"]
          ], vurgu: 3, not: "Gerçek hata her satırda |aₙ₊₁|'den küçük. Sınır güvenli bir üst sınırdır; hatayı tam vermez." }
      ]
    },
    {
      baslik: "Hata sınırıyla hesap",
      kisa: "Hatayı sınırlayıp aralık yazabilir, gereken terim sayısını bulabilirsin.",
      bloklar: [
        { tip: "ornek", baslik: "Σ (−1)ⁿ / n!   (n = 0'dan başlar), S₄", durum: "Hata sınırını bul. S hangi aralıkta?",
          adimlar: [
            "Serinin ilk 4 terimi n = 0, 1, 2, 3 için: 1 − 1 + ½ − ⅙ = ⅓. Yani S₄ = ⅓ ≈ 0,333.",
            "İlk atılan terim n = 4 için: (−1)⁴/4! = 1/24. Alterne, azalan ve 0'a giden bir seri; kural kullanılır.",
            "Hata sınırı: |S − S₄| ≤ 1/24 ≈ 0,042.",
            "Atılan terim pozitif, o hâlde S₄ az tahmin eder. S₅ = ⅓ + 1/24 = 3/8 = 0,375. S, ⅓ ile 3/8 arasındadır."
          ], sonuc: "|S − S₄| ≤ 1/24; 0,333 < S < 0,375  (S gerçekte 1/e ≈ 0,368)" },
        { tip: "ornek", baslik: "Σ (−1)ⁿ⁺¹ / n²   (n = 1'den başlar)", durum: "Hata 0,005'ten küçük olsun. En az kaç terim toplamalı?",
          adimlar: [
            "Hata sınırı |aₙ₊₁| = 1/(n + 1)².",
            "Şart: 1/(n + 1)² < 0,005, yani (n + 1)² > 200.",
            "14² = 196 < 200 olduğundan n + 1 = 14 yetmez. 15² = 225 > 200, yani n + 1 ≥ 15.",
            "Buradan n ≥ 14. Doğrulama: n = 14 için sınır 1/225 ≈ 0,0044 < 0,005."
          ], sonuc: "En az 14 terim" }
      ]
    },
    {
      baslik: "Sınavda hangi soru, hangi hamle?",
      kisa: "Soru kalıbını tanı; cevap hep ilk atılan terime bağlanır.",
      bloklar: [
        { tip: "tablo", baslik: "Soru kalıpları", head: ["Soru ne soruyor?", "Ne yaparsın?"],
          rows: [
            ["Sₙ ile S arasındaki fark en çok ne kadar?", "|aₙ₊₁| yaz"],
            ["Hata ε'dan küçük olsun; kaç terim gerekir?", "|aₙ₊₁| < ε eşitsizliğini çöz, n'yi bul"],
            ["Sₙ gerçek toplamı az mı fazla mı tahmin eder?", "aₙ₊₁'in işaretine bak: pozitifse az, negatifse fazla"],
            ["S hangi aralıkta?", "Sₙ ile Sₙ₊₁ arasında"]
          ], vurgu: 1, not: "Önce şartları (alterne, azalan, 0'a giden) tek cümleyle yaz; sınavda puan buradan da gelir." },
        { tip: "not", metin: "Bu kural yalnız alterne serilerde geçerlidir. Alterne olmayan serilerde ve Taylor polinomlarında hata için bir sonraki konudaki *Lagrange error bound* kullanılır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Sₙ ilk n terimin toplamıdır; hata S − Sₙ'dir.",
            "Alterne seri hata sınırı: |S − Sₙ| ≤ |aₙ₊₁|, yani ilk atılan terimin mutlak değeri.",
            "Şartlar: terimler alterne, |aₙ| azalan ve |aₙ| → 0. Şart yoksa kural kullanılmaz.",
            "S her zaman Sₙ ile Sₙ₊₁ arasındadır; kısmi toplamlar gerçek toplamın iki yanında zikzak yapar.",
            "aₙ₊₁ pozitifse Sₙ az tahmin eder, negatifse fazla tahmin eder.",
            "Kaç terim gerekir sorusunda |aₙ₊₁| < ε eşitsizliğini çözüp n'yi bul; sınır sağlanana kadar küçült-büyüt kontrolü yap.",
            "En sık hata: son kullanılan terimi (aₙ) sınır sanmak. Sınır aₙ₊₁'dir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Σ (−1)ⁿ⁺¹ / n³  (n = 1'den başlar) serisinin ilk 3 teriminin toplamı S₃ ile yaklaşık değer bulunuyor. Alterne seri hata sınırına göre |S − S₃| en fazla kaçtır?",
      opts: ["1/27", "1/64", "1/125", "1/9"], a: 1,
      why: "S₃ ilk 3 terimin toplamı; ilk atılan terim 4. terimdir ve mutlak değeri 1/4³ = 1/64. A şıkkı son kullanılan terimdir (a₃ = 1/27); sınır için bir sonraki terim alınır." },
    { q: "Tabloda Σ (−1)ⁿ⁺¹/n serisinin ilk altı terimi ve kısmi toplamları verilmiştir. S₅ için hata sınırı ve tahminin yönü nedir?",
      fig: { type: "table", head: ["n", "aₙ", "Sₙ"], rows: [["1", "1", "1"], ["2", "−1/2", "0,5"], ["3", "1/3", "0,833"], ["4", "−1/4", "0,583"], ["5", "1/5", "0,783"], ["6", "−1/6", "0,617"]], caption: "Alterne harmonik seri" },
      opts: ["1/5, S₅ gerçek toplamı az tahmin eder", "1/6, S₅ gerçek toplamı az tahmin eder", "1/6, S₅ gerçek toplamı fazla tahmin eder", "1/5, S₅ gerçek toplamı fazla tahmin eder"], a: 2,
      why: "İlk atılan terim a₆ = −1/6: sınır 1/6. a₆ negatif olduğundan S, S₅'ten küçüktür; S₅ fazla tahmin eder (S₆ = 0,617 < S < S₅ = 0,783). A ve D şıkları sınırı a₅ ile verir; ikisi de son kullanılan terimi sınır sanma hatası." },
    { q: "Σ (−1)ⁿ⁺¹ / n³  (n = 1'den başlar) için Sₙ ile toplam arasındaki hata 0,002'den küçük olsun. Gereken en küçük n kaçtır?",
      opts: ["6", "8", "500", "7"], a: 3,
      why: "Sınır 1/(n + 1)³ < 0,002 yani (n + 1)³ > 500. 7³ = 343 yetmez; 8³ = 512 yeter: n + 1 = 8, n = 7. A (n = 6) için sınır 1/343 ≈ 0,0029 > 0,002. B şıkkı n + 1 değerini n sanmaktır." },
    { q: "Aşağıdaki serilerden hangisi için alterne seri hata sınırı kullanılamaz?",
      opts: ["Σ (−1)ⁿ · n/(n + 1)", "Σ (−1)ⁿ / n", "Σ (−1)ⁿ / √n", "Σ (−1)ⁿ / (n² + 1)"], a: 0,
      why: "A'da |aₙ| = n/(n + 1) → 1 ≠ 0 ve seri zaten ıraksar; hata sınırı için terimlerin 0'a gitmesi şarttır. B, C, D alterne, azalan ve 0'a giden serilerdir." },
    { q: "Σ (−1)ⁿ / n!  (n = 0'dan başlar) serisinde S₄ (ilk 4 terimin toplamı, yani n = 0, 1, 2, 3) kullanılıyor. Alterne seri hata sınırı nedir?",
      opts: ["1/6", "1/120", "1/24", "1/4"], a: 2,
      why: "Terimler n = 0'dan başladığı için ilk 4 terimin sonuncusu n = 3'tür; ilk atılan terim n = 4 için 1/4! = 1/24. A şıkkı son kullanılan terim (n = 3, 1/3! = 1/6). B şıkkı bir terim fazla ileri gider (n = 5)." }
  ]
};
