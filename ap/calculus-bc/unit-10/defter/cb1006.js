/* Kitpath not defteri · cb1006 · AP Calculus BC Unit 10 (videosuz). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb1006",
  amac: "Bu konu alterne seri testini anlatıyor: terimlerinin işareti sırayla değişen bir seri, terimlerin büyüklüğü azalıp 0'a giderse yakınsar. Zikzak yapan kısmi toplamların nasıl sıkıştığını, iki koşulu nasıl kontrol edeceğini ve testin ne zaman sonuç vermediğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Alterne seri: işaretler sırayla değişir",
      kisa: "Terimler artı, eksi, artı, eksi diye gidiyorsa seri alternedir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "↕️", terim: "Alternating series", tr: "alterne (işaret değiştiren) seri", tanim: "Σ (−1)ⁿ aₙ ya da Σ (−1)ⁿ⁺¹ aₙ biçiminde, aₙ > 0 olan seri. Terimlerin işareti her adımda değişir.", ornek: "1 − ½ + ⅓ − ¼ + … serisinde aₙ = 1/n." }, { ikon: "🎼", terim: "Alternating harmonic series", tr: "alterne harmonik seri", tanim: "Σ (−1)ⁿ⁺¹ / n = 1 − ½ + ⅓ − ¼ + … Harmonik seri ıraksar, ama işaretler değişince yakınsar.", ornek: "Toplamı ln 2 ≈ 0,69 (bunu ileride Taylor serileriyle göreceksin)." }] },
        { tip: "ikili", sol: { ikon: "↕️", baslik: "Alterne", maddeler: ["İşaretler sırayla artı-eksi", "(−1)ⁿ ya da (−1)ⁿ⁺¹ çarpanı var"] }, sag: { ikon: "➕", baslik: "Alterne değil", maddeler: ["İşaretler hep aynı ya da düzensiz"] }, oyun: [{ metin: "1 − ½ + ⅓ − ¼ + …", cevap: "sol", neden: "İşaretler sırayla değişiyor." }, { metin: "Σ 1/n²", cevap: "sag", neden: "Bütün terimler pozitif." }, { metin: "Σ (−2/3)ⁿ", cevap: "sol", neden: "(−2/3)ⁿ terimi her adımda işaret değiştirir." }, { metin: "Σ cos(n) / n²", cevap: "sag", neden: "cos(n)'in işareti düzenli bir artı-eksi sırası izlemez." }] }
      ]
    },
    {
      baslik: "Zikzak: kısmi toplamlar sıkışır",
      kisa: "Adımlar küçülüp ters yönde gidiyorsa toplam iki taraftan sıkışır.",
      bloklar: [
        { tip: "grafik", baslik: "1 − ½ + ⅓ − ¼ + …: kısmi toplamlar Sₙ", xlabel: "n", ylabel: "Sₙ", xmax: 9, ymax: 1.1, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }, { v: 7, label: "7" }, { v: 8, label: "8" }], yticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }],
          ogeler: [
            { id: "s1", tip: "nokta", renk: 0, x: 1, y: 1, gizli: true },
            { id: "s2", tip: "nokta", renk: 2, x: 2, y: 0.5, gizli: true },
            { id: "s3", tip: "nokta", renk: 0, x: 3, y: 0.8333, gizli: true },
            { id: "s4", tip: "nokta", renk: 2, x: 4, y: 0.5833, gizli: true },
            { id: "s5", tip: "nokta", renk: 0, x: 5, y: 0.7833, gizli: true },
            { id: "s6", tip: "nokta", renk: 2, x: 6, y: 0.6167, gizli: true },
            { id: "s7", tip: "nokta", renk: 0, x: 7, y: 0.7595, gizli: true },
            { id: "s8", tip: "nokta", renk: 2, x: 8, y: 0.6345, gizli: true },
            { id: "L", tip: "cizgi", renk: 1, kesik: true, from: [0, 0.6931471805599453], to: [9, 0.6931471805599453], etiket: "≈ 0,69", gizli: true }
          ],
          durumlar: [
            { metin: "Kumbaraya 1 TL koyuyorsun, sonra ½ geri alıyorsun, ⅓ koyuyorsun, ¼ geri alıyorsun, … Bakiye nereye gidiyor?" },
            { metin: "S₁ = 1 (yukarı), S₂ = 0,5 (aşağı).", goster: ["s1", "s2"] },
            { metin: "S₃ ≈ 0,83 ve S₄ ≈ 0,58: her adım bir öncekinden küçük.", goster: ["s3", "s4"] },
            { metin: "S₅ … S₈: tek indisliler (üst) azalıyor, çift indisliler (alt) artıyor.", goster: ["s5", "s6", "s7", "s8"] },
            { metin: "Zikzak daralıyor ve bir değere oturuyor (≈ 0,69): ==seri yakınsar==.", goster: ["L"] }
          ] },
        { tip: "formul", parcalar: [{ t: "S₂ < S₄ < S₆ < …", alt: "çift indisliler artar" }, "<", { t: "S", alt: "serinin toplamı" }, "<", { t: "… < S₅ < S₃ < S₁", alt: "tek indisliler azalır" }], aciklama: "Testin koşulları sağlanınca toplam her zaman ardışık iki kısmi toplamın arasındadır. Bu gözlem ileride göreceğin alterne seri hata sınırının (10.10) temelidir." }
      ]
    },
    {
      baslik: "Alterne seri testi: iki koşul",
      kisa: "Terimlerin büyüklüğü azalıp 0'a giderse alterne seri yakınsar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "✅", terim: "Alternating series test", tr: "alterne seri testi", tanim: "Σ (−1)ⁿ aₙ serisinde aₙ > 0, aₙ₊₁ ≤ aₙ (en azından bir n'den sonra) ve lim aₙ = 0 ise seri yakınsar.", ornek: "Σ (−1)ⁿ⁺¹ / n yakınsar: aₙ = 1/n azalıyor ve 0'a gidiyor." }] },
        { tip: "adimlar", baslik: "Testi uygulama", adimlar: [{ baslik: "aₙ'yi yaz", metin: "(−1)ⁿ çarpanını at; geriye kalan pozitif terim aₙ." }, { baslik: "Limit 0 mı?", metin: "lim aₙ = 0 değilse seri n. terim testiyle ıraksar." }, { baslik: "Azalan mı?", metin: "aₙ₊₁ ≤ aₙ göster (türev ya da kıyas); bir noktadan sonra yeter." }, { baslik: "Sonuç", metin: "İki koşul da sağlanıyorsa seri yakınsar." }] },
        { tip: "tuzak", metin: "Alterne olmak tek başına yakınsaklık getirmez. Koşullardan biri bozulursa farklı bir sonuç ya da başka bir test gerekir.", yanlis: "Terimler işaret değiştiriyor, o halde seri yakınsar.", dogru: "lim aₙ ≠ 0 ise seri ıraksar (n. terim testi). lim aₙ = 0 ama aₙ azalmıyorsa bu test sonuç vermez." }
      ]
    },
    {
      baslik: "Örnekler",
      kisa: "Her iki koşulu da açıkça göster; azalma bazen n ≥ 2'de başlar.",
      bloklar: [
        { tip: "ornek", baslik: "Σ (−1)ⁿ⁺¹ / √n", durum: "Yakınsak mı?", adimlar: ["aₙ = 1/√n > 0.", "√n büyüdükçe 1/√n küçülür: aₙ₊₁ < aₙ.", "lim 1/√n = 0."], sonuc: "İki koşul sağlanıyor: seri yakınsar" },
        { tip: "ornek", baslik: "Σ (−1)ⁿ · n/(n² + 4)", durum: "Yakınsak mı?", adimlar: ["aₙ = n/(n² + 4) > 0 ve lim aₙ = 0.", "f(x) = x/(x² + 4) için f′(x) = (4 − x²)/(x² + 4)² < 0 (x > 2).", "a₁ = 0,2 < a₂ = 0,25 ama a₂ = 0,25 > a₃ ≈ 0,23 > a₄ = 0,2 > …: n ≥ 2'den sonra azalan."], sonuc: "Azalma n ≥ 2'de başlıyor, yeter: seri yakınsar" },
        { tip: "ornek", baslik: "Σ (−1)ⁿ · 2n/(n + 1)", durum: "Yakınsak mı?", adimlar: ["aₙ = 2n/(n + 1) > 0.", "lim aₙ = 2 ≠ 0.", "Terimler 0'a gitmiyor, n. terim testi uygulanır."], sonuc: "Seri ıraksar (limit 0 değil)" }
      ]
    },
    {
      baslik: "Test uygulanır mı, ne sonuç verir?",
      kisa: "Önce limite bak; sonra azalmayı kontrol et.",
      bloklar: [
        { tip: "tablo", baslik: "Üç alterne seri", head: ["Seri", "lim aₙ", "aₙ azalan mı?", "Sonuç"], rows: [["Σ (−1)ⁿ / n", "0", "evet", "yakınsar"], ["Σ (−1)ⁿ · n/(n + 1)", "1", "—", "ıraksar (n. terim)"], ["Σ (−1)ⁿ · ln n / n", "0", "n ≥ 3'ten sonra", "yakınsar"]], not: "ln n / n için türev (1 − ln x)/x² < 0, x > e olduğunda; azalma n ≥ 3'te başlar." },
        { tip: "ikili", sol: { ikon: "🧪", baslik: "Alterne seri testi uygulanır", maddeler: ["Gerçekten alterne, aₙ > 0", "Limit 0 ve azalma incelenir"] }, sag: { ikon: "⛔", baslik: "Önce başka şeye bak", maddeler: ["Alterne değil ya da limit 0 değil"] }, oyun: [{ metin: "Σ (−1)ⁿ / n²", cevap: "sol", neden: "Alterne, 1/n² azalıp 0'a gidiyor." }, { metin: "Σ (−1)ⁿ⁺¹ (n + 3)/n", cevap: "sag", neden: "aₙ → 1 ≠ 0: n. terim testi ıraksar der." }, { metin: "Σ 1/n²", cevap: "sag", neden: "Alterne değil; p-serisi." }, { metin: "Σ (−1)ⁿ / ln(n + 1)", cevap: "sol", neden: "Alterne, 1/ln(n+1) azalıp 0'a gidiyor." }] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: ["Alterne seri: Σ (−1)ⁿ aₙ ya da Σ (−1)ⁿ⁺¹ aₙ, aₙ > 0.", "Alterne seri testi: aₙ azalan (en azından bir noktadan sonra) ve lim aₙ = 0 ise seri yakınsar.", "Kısmi toplamlar zikzak yapar; toplam her zaman ardışık iki kısmi toplamın arasındadır.", "lim aₙ ≠ 0 ise seri n. terim testiyle ıraksar; alterne olması kurtarmaz.", "Limit 0 ama aₙ azalmıyorsa test sonuç vermez.", "Test yakınsaklığı söyler; serinin toplamını vermez.", "Alterne harmonik seri Σ (−1)ⁿ⁺¹/n yakınsar; harmonik seri ise ıraksar."] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdaki serilerden hangisi alterne seri testiyle yakınsak bulunur?", opts: ["Σ (−1)ⁿ · n/(n + 2)", "Σ (−1)ⁿ · 2ⁿ/n", "Σ (−1)ⁿ / √(n + 2)", "Σ 1/(n + 2)"], a: 2, why: "1/√(n+2) pozitif, azalan ve 0'a gider. İlk iki seride aₙ → 1 ve aₙ → ∞ olduğundan limit 0 değil. Son seri alterne değil (ve ıraksar)." },
    { q: "Tablo, alterne seri testinin koşullarını sağlayan bir Σ aₙ serisinin ilk beş kısmi toplamını gösteriyor. Verilen bilgiyle toplam S için kesin olarak söylenebilecek en dar aralık hangisidir?", fig: { type: "table", head: ["n", "1", "2", "3", "4", "5"], rows: [["Sₙ", "1", "0,5", "0,83", "0,58", "0,78"]], caption: "Kısmi toplamlar" }, opts: ["0,58 < S < 0,78", "0,5 < S < 0,83", "0,78 < S < 0,83", "S = 0,78"], a: 0, why: "Çift indisli toplamlar artarak, tek indisliler azalarak S'ye yaklaşır; S₄ < S < S₅. 0,5 < S < 0,83 de doğrudur ama daha geniştir (B). S, S₅'ten küçüktür, bu yüzden C yanlıştır." },
    { q: "Σ (−1)ⁿ · n/(3n − 1) (n = 1'den ∞'a) serisi için hangisi doğrudur?", opts: ["Alterne ve aₙ azalan olduğu için yakınsar.", "Alterne seri testi sonuç vermez.", "aₙ pozitif olduğu için yakınsar.", "lim aₙ = 1/3 ≠ 0 olduğundan ıraksar."], a: 3, why: "aₙ = n/(3n−1) azalan olsa da (0,5; 0,4; 0,375; …) limiti 1/3, 0 değil. Bu durumda n. terim testi ıraksar der. Azalan olmak tek başına yetmez (A)." },
    { q: "Σ (−1)ⁿ · ln n / n serisi için aₙ = ln n / n dizisi hangi n değerinden itibaren azalandır?", opts: ["n ≥ 1", "n ≥ 3", "n ≥ 5", "Hiçbir n için"], a: 1, why: "f(x) = ln x / x için f′(x) = (1 − ln x)/x² < 0 olması x > e ≈ 2,72 ister. a₂ ≈ 0,347 < a₃ ≈ 0,366 > a₄ ≈ 0,347: azalma n = 3'ten itibaren. Alterne seri testi için bir noktadan sonra azalma yeter." },
    { q: "Alterne seri testi hakkında aşağıdakilerden hangisi doğrudur?", opts: ["Her alterne seri yakınsar.", "aₙ → 0 olması tek başına yakınsaklık için yeterlidir.", "Koşullar sağlanırsa seri yakınsar, ama toplam testten öğrenilmez.", "Test bir alterne serinin ıraksadığını da kanıtlar."], a: 2, why: "Test yalnızca yakınsaklığı garanti eder; toplamın değerini vermez. aₙ ayrıca azalmalıdır (B). Test koşullar bozulduğunda ıraksaklık kanıtlamaz; ıraksaklık için n. terim testi gerekir (D)." }
  ]
};
