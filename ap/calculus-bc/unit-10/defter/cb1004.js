/* Kitpath not defteri · cb1004 · AP Calculus BC Unit 10 (videosuz). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb1004",
  amac: "Bu konu integral testini, harmonik seriyi ve p-serilerini anlatıyor: terimleri f(n) biçiminde yazılan bir serinin kaderini, f'nin altındaki alana (yani bir integrale) bakarak nasıl anlarız? Sonuçta Σ 1/nᵖ serisinin ne zaman yakınsadığını (p > 1) öğreneceksin.",
  bolumler: [
    {
      baslik: "Fikir: seriyi alana çevirmek",
      kisa: "Azalan f için seri, f'nin altındaki alanla aynı kaderi paylaşır.",
      bloklar: [
        { tip: "grafik", baslik: "f(x) = 1/x² ve aₙ = 1/n² dikdörtgenleri", xlabel: "x", ylabel: "y", xmax: 7, ymax: 1.2, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }, { v: 7, label: "7" }], yticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[1, 1], [1.25, 0.64], [1.5, 0.4444], [1.75, 0.3265], [2, 0.25], [2.25, 0.1975], [2.5, 0.16], [2.75, 0.1322], [3, 0.1111], [3.25, 0.0947], [3.5, 0.0816], [3.75, 0.0711], [4, 0.0625], [4.25, 0.0554], [4.5, 0.0494], [4.75, 0.0443], [5, 0.04], [5.25, 0.0363], [5.5, 0.0331], [5.75, 0.0302], [6, 0.0278], [6.25, 0.0256], [6.5, 0.0237], [6.75, 0.0219], [7, 0.0204]] },
            { id: "lo2", tip: "alan", renk: 1, noktalar: [[1, 0], [2, 0], [2, 0.25], [1, 0.25]], gizli: true },
            { id: "lo3", tip: "alan", renk: 1, noktalar: [[2, 0], [3, 0], [3, 0.1111], [2, 0.1111]], gizli: true },
            { id: "lo4", tip: "alan", renk: 1, noktalar: [[3, 0], [4, 0], [4, 0.0625], [3, 0.0625]], gizli: true },
            { id: "lo5", tip: "alan", renk: 1, noktalar: [[4, 0], [5, 0], [5, 0.04], [4, 0.04]], gizli: true },
            { id: "lo6", tip: "alan", renk: 1, noktalar: [[5, 0], [6, 0], [6, 0.0278], [5, 0.0278]], gizli: true },
            { id: "up1", tip: "alan", renk: 2, noktalar: [[1, 0], [2, 0], [2, 1], [1, 1]], gizli: true },
            { id: "up2", tip: "alan", renk: 2, noktalar: [[2, 0], [3, 0], [3, 0.25], [2, 0.25]], gizli: true },
            { id: "up3", tip: "alan", renk: 2, noktalar: [[3, 0], [4, 0], [4, 0.1111], [3, 0.1111]], gizli: true },
            { id: "up4", tip: "alan", renk: 2, noktalar: [[4, 0], [5, 0], [5, 0.0625], [4, 0.0625]], gizli: true },
            { id: "up5", tip: "alan", renk: 2, noktalar: [[5, 0], [6, 0], [6, 0.04], [5, 0.04]], gizli: true },
            { id: "up6", tip: "alan", renk: 2, noktalar: [[6, 0], [7, 0], [7, 0.0278], [6, 0.0278]], gizli: true }
          ],
          durumlar: [
            { metin: "f(x) = 1/x² pozitif, sürekli ve azalan. Terimler aₙ = f(n): 1, ¼, ⅑, …" },
            { metin: "Genişliği 1, yüksekliği f(n) olan dikdörtgenlerin alanı aₙ'dir. [n−1, n] üzerine kurulanlar eğrinin ==altında== kalır.", goster: ["lo2", "lo3", "lo4", "lo5", "lo6"] },
            { metin: "Şimdi [n, n+1] üzerine kuralım (yükseklik yine f(n)). Bu dikdörtgenler eğrinin ==üstünde== kalır.", gizle: ["lo2", "lo3", "lo4", "lo5", "lo6"], goster: ["up1", "up2", "up3", "up4", "up5", "up6"] },
            { metin: "İkisi birlikte: toplam, integralle sıkışır. İntegral sonluysa toplam sonlu, integral sonsuzsa toplam sonsuz.", goster: ["lo2", "lo3", "lo4", "lo5", "lo6"] }
          ] },
        { tip: "formul", parcalar: [{ t: "∫₁ᴺ⁺¹ f dx", alt: "üst dikdörtgenlerden küçük" }, "≤", { t: "a₁ + a₂ + … + aₙ", alt: "kısmi toplam" }, "≤", { t: "a₁ + ∫₁ᴺ f dx", alt: "alt dikdörtgenlerden büyük" }], aciklama: "Bu sıkıştırma testin kanıtıdır: kısmi toplam, integralden hem büyük (soldan) hem de integralden en fazla a₁ kadar büyük (sağdan) olduğu için ==ikisi birlikte sınırlı ya da sınırsız== olur." }
      ]
    },
    {
      baslik: "İntegral testi: koşullar ve adımlar",
      kisa: "f pozitif, sürekli ve azalansa Σ f(n) ile ∫ f aynı kaderi paylaşır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "📐", terim: "Integral test", tr: "integral testi", tanim: "[k, ∞) üzerinde f pozitif, sürekli ve azalan, aₙ = f(n) ise Σ aₙ ile ∫ₖ^∞ f dx ya ikisi de yakınsar ya ikisi de ıraksar.", ornek: "∫₁^∞ dx/x² sonlu olduğundan Σ 1/n² yakınsar." }] },
        { tip: "adimlar", baslik: "Üç kontrol, bir integral", adimlar: [{ baslik: "f'yi yaz", metin: "aₙ = f(n) olacak biçimde f(x) belirle." }, { baslik: "Koşulları kontrol et", metin: "Pozitif mi, sürekli mi, azalan mı? (Türevin işaretine bak; azalma bir noktadan sonra yetiyor.)" }, { baslik: "Genelleştirilmiş integrali hesapla", metin: "lim ∫ₖᵇ f dx (b → ∞). Sonluysa seri yakınsar, sonsuzsa ıraksar." }] },
        { tip: "ornek", baslik: "Σ n·e^(−n²) (n = 1'den ∞'a)", durum: "Integral testiyle yakınsak mı?", adimlar: ["f(x) = x·e^(−x²): x ≥ 1 için pozitif ve süreklidir.", "f′(x) = e^(−x²)(1 − 2x²) < 0 (x ≥ 1): azalan. Koşullar tamam.", "∫₁ᵇ x·e^(−x²) dx = [−½·e^(−x²)]₁ᵇ = ½e⁻¹ − ½e^(−b²).", "b → ∞: ½e⁻¹ = 1/(2e), sonlu."], sonuc: "İntegral yakınsar ⇒ seri yakınsar" },
        { tip: "ornek", baslik: "Σ 1/(2n + 1) (n = 1'den ∞'a)", durum: "Integral testiyle yakınsak mı?", adimlar: ["f(x) = 1/(2x + 1): pozitif, sürekli, azalan (payda büyüyor).", "∫₁ᵇ dx/(2x + 1) = [½·ln(2x + 1)]₁ᵇ = ½·ln(2b + 1) − ½·ln 3.", "b → ∞: ln(2b + 1) → ∞, integral sonsuz."], sonuc: "İntegral ıraksar ⇒ seri ıraksar" }
      ]
    },
    {
      baslik: "İntegral toplam değildir",
      kisa: "İntegral yakınsaklığı söyler; serinin toplamını değil.",
      bloklar: [
        { tip: "sayilar", ogeler: [{ deger: "1", etiket: "∫₁^∞ dx/x²" }, { deger: "≈ 1,645", etiket: "Σ 1/n² (= π²/6)" }] },
        { tip: "tuzak", metin: "İntegral testi yalnızca yakınsak mı ıraksak mı sorusuna cevap verir. Toplamı bulmak için kullanılmaz. Uygulamadan önce de f'nin pozitif, sürekli, azalan olduğunu mutlaka kontrol et.", yanlis: "∫₁^∞ dx/x² = 1 olduğundan Σ 1/n² = 1.", dogru: "Seri ==yakınsar==, ama toplamı integralden farklıdır: Σ 1/n² ≈ 1,645." }
      ]
    },
    {
      baslik: "Harmonik seri: terimler küçülür, toplam sonsuz",
      kisa: "Σ 1/n ıraksar, ama inanılmaz yavaş büyür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "🎵", terim: "Harmonic series", tr: "harmonik seri", tanim: "Σ 1/n = 1 + ½ + ⅓ + ¼ + … Terimleri 0'a gider ama seri ıraksar.", ornek: "Integral testi: ∫₁^∞ dx/x = lim ln b = ∞." }] },
        { tip: "tablo", baslik: "Σ 1/n'in kısmi toplamları", head: ["n", "Sₙ ≈"], rows: [["4", "2,08"], ["10", "2,93"], ["100", "5,19"], ["1 000", "7,49"], ["10 000", "9,79"], ["1 000 000", "14,39"]], vurgu: 5, not: "n her 10 kat büyüdüğünde Sₙ yalnızca ≈ 2,3 artıyor (ln 10 ≈ 2,303), ama bu artış hiç bitmiyor: Sₙ ==sınırsız== büyür." },
        { tip: "ornek", baslik: "Σ 1/n (n = 1'den ∞'a)", durum: "Integral testiyle sonucu bul.", adimlar: ["f(x) = 1/x pozitif, sürekli, azalan.", "∫₁ᵇ dx/x = ln b − ln 1 = ln b.", "b → ∞: ln b → ∞."], sonuc: "Harmonik seri ıraksar" }
      ]
    },
    {
      baslik: "p-serisi: kuvvet büyükse yakınsar",
      kisa: "Σ 1/nᵖ yalnızca p > 1 iken yakınsar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "🔑", terim: "p-series", tr: "p-serisi", tanim: "Σ 1/nᵖ (n = 1'den ∞'a). p > 1 ise yakınsar, p ≤ 1 ise ıraksar. Nedeni ∫₁^∞ x⁻ᵖ dx'in yalnızca p > 1 için sonlu olmasıdır.", ornek: "p = 1 harmonik seridir ve ıraksar." }] },
        { tip: "grafik", baslik: "1/xᵖ eğrileri: p büyüdükçe altındaki alan küçülür", xlabel: "x", ylabel: "y", xmax: 6.5, ymax: 1.2, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }], yticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }],
          ogeler: [
            { id: "c2", tip: "egri", renk: 0, noktalar: [[1, 1], [1.25, 0.64], [1.5, 0.4444], [1.75, 0.3265], [2, 0.25], [2.25, 0.1975], [2.5, 0.16], [2.75, 0.1322], [3, 0.1111], [3.25, 0.0947], [3.5, 0.0816], [3.75, 0.0711], [4, 0.0625], [4.25, 0.0554], [4.5, 0.0494], [4.75, 0.0443], [5, 0.04], [5.25, 0.0363], [5.5, 0.0331], [5.75, 0.0302], [6, 0.0278]], gizli: true },
            { id: "t2", tip: "yazi", x: 5.6, y: 0.12, metin: "p = 2", gizli: true },
            { id: "c1", tip: "egri", renk: 1, noktalar: [[1, 1], [1.25, 0.8], [1.5, 0.6667], [1.75, 0.5714], [2, 0.5], [2.25, 0.4444], [2.5, 0.4], [2.75, 0.3636], [3, 0.3333], [3.25, 0.3077], [3.5, 0.2857], [3.75, 0.2667], [4, 0.25], [4.25, 0.2353], [4.5, 0.2222], [4.75, 0.2105], [5, 0.2], [5.25, 0.1905], [5.5, 0.1818], [5.75, 0.1739], [6, 0.1667]], gizli: true },
            { id: "t1", tip: "yazi", x: 5.6, y: 0.28, metin: "p = 1", gizli: true },
            { id: "ch", tip: "egri", renk: 2, noktalar: [[1, 1], [1.25, 0.8944], [1.5, 0.8165], [1.75, 0.7559], [2, 0.7071], [2.25, 0.6667], [2.5, 0.6325], [2.75, 0.603], [3, 0.5774], [3.25, 0.5547], [3.5, 0.5345], [3.75, 0.5164], [4, 0.5], [4.25, 0.4851], [4.5, 0.4714], [4.75, 0.4588], [5, 0.4472], [5.25, 0.4364], [5.5, 0.4264], [5.75, 0.417], [6, 0.4082]], gizli: true },
            { id: "th", tip: "yazi", x: 5.6, y: 0.5, metin: "p = ½", gizli: true }
          ],
          durumlar: [
            { metin: "Üç farklı p için 1/xᵖ eğrilerini çizeceğiz." },
            { metin: "p = 2: eğri hızla düşer, altındaki alan sonlu (∫₁^∞ = 1). ==Yakınsar.==", goster: ["c2", "t2"] },
            { metin: "p = 1: yavaş düşer; alan ln b gibi sınırsız büyür. ==Iraksar== (harmonik seri).", goster: ["c1", "t1"] },
            { metin: "p = ½: daha da yavaş düşer, alan daha da hızlı büyür. ==Iraksar.==", goster: ["ch", "th"] }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Yakınsar", maddeler: ["p > 1", "Eğri hızlı düşer"] }, sag: { ikon: "❌", baslik: "Iraksar", maddeler: ["p ≤ 1", "Eğri yeterince hızlı düşmez"] }, oyun: [{ metin: "Σ 1/n^(3/2)", cevap: "sol", neden: "p = 3/2 > 1." }, { metin: "Σ 1/√n", cevap: "sag", neden: "p = ½ ≤ 1." }, { metin: "Σ 1/n^1,01", cevap: "sol", neden: "p = 1,01 > 1: sınırın hemen üstü bile yakınsar." }, { metin: "Σ 1/n^0,9", cevap: "sag", neden: "p = 0,9 < 1." }, { metin: "Σ 5/n³", cevap: "sol", neden: "p = 3 > 1; sabit çarpan 5 kaderi değiştirmez." }] },
        { tip: "tablo", baslik: "p-serisi gibi görünenler", head: ["Seri", "Hangi p?", "Sonuç"], rows: [["Σ 4/n³", "p = 3 (sabit çarpan 4)", "yakınsar"], ["Σ 1/∛n", "p = 1/3", "ıraksar"], ["Σ 1/(n+3)²", "p = 2 (indis ötelenmiş)", "yakınsar"], ["Σ 1/(2n+1)", "p-serisi değil; integral testi", "ıraksar"]], not: "Sabit çarpan ve başlangıç indisi kaderi değiştirmez; sadece toplamı değiştirir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: ["İntegral testi: f pozitif, sürekli, azalan ve aₙ = f(n) ise Σ aₙ ile ∫ f dx aynı kaderi paylaşır.", "Önce üç koşulu kontrol et. Azalma bir noktadan sonra yeterlidir.", "İntegralin değeri serinin toplamı değildir; test yalnızca yakınsak/ıraksak der.", "Harmonik seri Σ 1/n ıraksar; terimleri 0'a gitse de.", "p-serisi: Σ 1/nᵖ yakınsar ⇔ p > 1.", "Sabit çarpan ve ötelenen indis p-serisinin kaderini değiştirmez.", "p = 1 sınırdır: Σ 1/n ıraksar, ama Σ 1/n^1,01 yakınsar."] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdaki serilerden hangisi yakınsaktır?", opts: ["Σ 1/n^(4/3)", "Σ 1/∛n", "Σ 1/n", "Σ 1/n^0,9"], a: 0, why: "p = 4/3 > 1 olduğundan yakınsar. Diğerlerinde p ≤ 1: ∛n = n^(1/3) için p = 1/3, harmonik seride p = 1, son şıkta p = 0,9. Üssün 1'e yakın olması yakınsaklık getirmez (D)." },
    { q: "Σ n/(n² + 1) (n = 1'den ∞'a) serisi için integral testi aşağıdakilerden hangisini verir?", opts: ["Yakınsar çünkü terimler 0'a gider.", "Yakınsar çünkü integral sonludur.", "Iraksar çünkü ∫₁^∞ x/(x² + 1) dx sonsuzdur.", "Test uygulanamaz çünkü f azalan değildir."], a: 2, why: "f(x) = x/(x²+1), x ≥ 1 için pozitif, sürekli ve azalandır (f′ = (1−x²)/(x²+1)² ≤ 0). ∫₁ᵇ = ½ ln(b²+1) − ½ ln 2 → ∞, seri ıraksar. Terimlerin 0'a gitmesi yakınsaklığı garanti etmez (A)." },
    { q: "f pozitif, sürekli ve azalan bir fonksiyon olsun, aₙ = f(n) ve ∫₁^∞ f(x) dx = 3. Aşağıdakilerden hangisi kesinlikle doğrudur?", opts: ["Σ aₙ = 3", "Σ aₙ ıraksar.", "Σ aₙ yakınsar ve Σ aₙ ≤ 3.", "Σ aₙ yakınsar, ama toplamının 3 olması gerekmez."], a: 3, why: "İntegral sonlu, dolayısıyla seri yakınsar. Ancak toplam integralden farklı olabilir: f = 1/x² için integral 1, toplam ≈ 1,645 > 1. Bu yüzden A ve C kesin değildir." },
    { q: "Tablo Σ 1/n serisinin kısmi toplamlarını gösteriyor. Aşağıdakilerden hangisi doğrudur?", fig: { type: "table", head: ["n", "10", "100", "1000", "10000"], rows: [["Sₙ ≈", "2,93", "5,19", "7,49", "9,79"]], caption: "Kısmi toplamlar" }, opts: ["Seri yakınsar çünkü Sₙ'in artışı küçülüyor.", "Seri ıraksar; n her 10 kat artınca Sₙ ≈ 2,3 artıyor ve bu sınırsız sürer.", "Seri yakınsar ve toplamı yaklaşık 10'dur.", "Terimler 0'a gittiği için seri yakınsar."], a: 1, why: "Artışlar (2,26; 2,30; 2,30 ≈ ln 10) sabit kalıyor, yani Sₙ ≈ ln n gibi sınırsız büyür; integral testi de ∫ dx/x = ∞ der. Artışın küçük olması yakınsaklık anlamına gelmez; n yeterince büyüdükçe Sₙ her sayıyı aşar." },
    { q: "Σ 5/n^(2k−1) (n = 1'den ∞'a) serisinin yakınsaması için k ne olmalıdır?", opts: ["k > 0", "k > 1/2", "k > 1", "k > 2"], a: 2, why: "Seri 5 · Σ 1/nᵖ ve p = 2k − 1. p > 1 koşulu 2k − 1 > 1 yani k > 1 verir. k > 1/2 yalnızca p > 0 demektir (B), yakınsaklık için yetmez." }
  ]
};
