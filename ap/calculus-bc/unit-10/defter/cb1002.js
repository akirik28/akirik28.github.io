/* Kitora not defteri · cb1002 · AP Calculus BC Unit 10 (videosuz). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb1002",
  amac: "Bu konu geometrik serileri anlatıyor: terimler her adımda aynı sayıyla çarpılıyorsa sonsuz toplam ne zaman sonlu olur ve kaça eşittir? Yakınsama koşulunu (|r| < 1), toplam formülünü a/(1 − r) ve tekrar eden ondalık gibi uygulamalarını öğreneceksin.",
  bolumler: [
    {
      baslik: "Geometrik seri: her terim bir öncekinin r katı",
      kisa: "Ardışık terimlerin oranı sabitse seri geometriktir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "✖️", terim: "Geometric series", tr: "geometrik seri", tanim: "a + ar + ar² + ar³ + … biçimindeki seri. Her terim bir öncekinin aynı sayıyla çarpılmış halidir.", ornek: "3 + 6 + 12 + 24 + … bir geometrik seridir." }, { ikon: "🔁", terim: "Common ratio", tr: "ortak çarpan (oran)", tanim: "Ardışık iki terimin oranı r = aₙ₊₁ / aₙ. Hangi iki ardışık terimi alsan aynı çıkar.", ornek: "8 + 4 + 2 + 1 + … serisinde r = 4/8 = ½." }, { ikon: "🥇", terim: "First term", tr: "ilk terim", tanim: "Serinin başında yazılan terim, a. Formülde bu a kullanılır.", ornek: "8 + 4 + 2 + … serisinde a = 8." }] },
        { tip: "tablo", baslik: "İlk terimi ve oranı bul", head: ["Seri", "a", "r", "|r| < 1 mi?"], rows: [["8 + 4 + 2 + 1 + …", "8", "1/2", "evet"], ["5 − 5/3 + 5/9 − …", "5", "−1/3", "evet"], ["3 + 6 + 12 + 24 + …", "3", "2", "hayır"], ["4 + 4 + 4 + 4 + …", "4", "1", "hayır"], ["2 − 2 + 2 − 2 + …", "2", "−1", "hayır"]], not: "r bulmak için herhangi bir terimi bir öncekine böl: işareti de al." }
      ]
    },
    {
      baslik: "Toplam formülü: ilk terim bölü (1 − r)",
      kisa: "|r| < 1 ise toplam, ilk terim bölü (1 − r)'dir.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "Σ a·rⁿ", alt: "|r| < 1 iken" }, "=", { t: "a / (1 − r)", alt: "ilk terim bölü (1 − r)" }], aciklama: "Formül yalnızca **|r| < 1** için geçerlidir. |r| ≥ 1 ise seri ıraksar. Alt sınır 0 olmak zorunda değil: a her zaman serinin **ilk yazılan terimidir**." },
        { tip: "adimlar", baslik: "Formül nereden geliyor?", adimlar: [{ baslik: "Kısmi toplam", metin: "Sₙ = a + ar + … + arⁿ⁻¹." }, { baslik: "r ile çarp, çıkar", metin: "Sₙ − r·Sₙ = a − a·rⁿ, yani Sₙ = a(1 − rⁿ)/(1 − r)." }, { baslik: "Limit al", metin: "|r| < 1 ise rⁿ → 0, yani Sₙ → a/(1 − r)." }] },
        { tip: "ornek", baslik: "3 + 1 + 1/3 + 1/9 + …", durum: "Serinin toplamı kaç?", adimlar: ["İlk terim a = 3.", "Oran r = 1/3 (1 ÷ 3). |r| < 1, seri yakınsar.", "Toplam = 3 / (1 − 1/3) = 3 / (2/3) = 9/2."], sonuc: "Toplam 9/2 = 4,5" }
      ]
    },
    {
      baslik: "|r| < 1 iken kısmi toplamlar nereye gider?",
      kisa: "r pozitifse tırmanarak, negatifse zikzak yaparak a/(1 − r)'ye oturur.",
      bloklar: [
        { tip: "grafik", baslik: "k terim toplayınca: r = ½ ve r = −½ (a = 1)", xlabel: "toplanan terim sayısı k", ylabel: "Sₖ", xmax: 7, ymax: 2.4, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }],
          ogeler: [
            { id: "a1", tip: "nokta", renk: 0, x: 1, y: 1, gizli: true },
            { id: "a2", tip: "nokta", renk: 0, x: 2, y: 1.5, gizli: true },
            { id: "a3", tip: "nokta", renk: 0, x: 3, y: 1.75, gizli: true },
            { id: "a4", tip: "nokta", renk: 0, x: 4, y: 1.875, gizli: true },
            { id: "a5", tip: "nokta", renk: 0, x: 5, y: 1.9375, gizli: true },
            { id: "a6", tip: "nokta", renk: 0, x: 6, y: 1.96875, gizli: true },
            { id: "b1", tip: "nokta", renk: 2, x: 1, y: 1, gizli: true },
            { id: "b2", tip: "nokta", renk: 2, x: 2, y: 0.5, gizli: true },
            { id: "b3", tip: "nokta", renk: 2, x: 3, y: 0.75, gizli: true },
            { id: "b4", tip: "nokta", renk: 2, x: 4, y: 0.625, gizli: true },
            { id: "b5", tip: "nokta", renk: 2, x: 5, y: 0.6875, gizli: true },
            { id: "b6", tip: "nokta", renk: 2, x: 6, y: 0.65625, gizli: true },
            { id: "L1", tip: "cizgi", renk: 0, kesik: true, from: [0, 2], to: [7, 2], etiket: "2", gizli: true },
            { id: "L2", tip: "cizgi", renk: 2, kesik: true, from: [0, 0.6666666666666666], to: [7, 0.6666666666666666], etiket: "2/3", gizli: true }
          ],
          durumlar: [
            { metin: "İki seri: 1 + ½ + ¼ + … (r = ½) ve 1 − ½ + ¼ − … (r = −½). k terim toplayınca ne olur?" },
            { metin: "r = ½: S₁ = 1, S₂ = 1,5, S₃ = 1,75. Hep yukarı.", goster: ["a1", "a2", "a3"] },
            { metin: "S₄ … S₆ yükselmeye devam eder ve ==a/(1 − r) = 1/(1/2) = 2== çizgisine sıkışır.", goster: ["a4", "a5", "a6", "L1"] },
            { metin: "r = −½: S₁ = 1, S₂ = 0,5, S₃ = 0,75. Terimler işaret değiştirdiği için noktalar aşağı yukarı gidiyor.", goster: ["b1", "b2", "b3"] },
            { metin: "S₄ … S₆ zikzakla daralır ve ==1/(1 + 1/2) = 2/3== çizgisine oturur. Negatif oranda da seri yakınsar.", goster: ["b4", "b5", "b6", "L2"] }
          ] },
        { tip: "sayilar", ogeler: [{ deger: "2", etiket: "1 + ½ + ¼ + … toplamı" }, { deger: "2/3", etiket: "1 − ½ + ¼ − … toplamı" }] }
      ]
    },
    {
      baslik: "Yakınsama koşulu: |r| < 1",
      kisa: "|r| ≥ 1 ise terimler küçülmez; seri ıraksar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "Yakınsar", maddeler: ["|r| < 1", "Terimler 0'a gider, toplam sonlu"] }, sag: { ikon: "❌", baslik: "Iraksar", maddeler: ["|r| ≥ 1", "Terimler küçülmez; Sₙ büyür ya da dolanır"] }, oyun: [{ metin: "Σ 5·(2/3)ⁿ", cevap: "sol", neden: "r = 2/3, |r| < 1." }, { metin: "Σ 3·(−1/2)ⁿ", cevap: "sol", neden: "r = −1/2; işaret önemli değil, |r| = 1/2 < 1." }, { metin: "Σ 2ⁿ", cevap: "sag", neden: "r = 2, terimler büyüyor." }, { metin: "Σ (−1)ⁿ", cevap: "sag", neden: "r = −1, |r| = 1: Sₙ 1, 0, 1, 0 … dolanıyor." }, { metin: "Σ 7·(1,1)ⁿ", cevap: "sag", neden: "r = 1,1 > 1." }] },
        { tip: "tuzak", metin: "|r| = 1 sınır durumunda formülü kullanıp bir sayı bulmaya çalışma.", yanlis: "1 − 1 + 1 − 1 + … = 1/(1 − (−1)) = 1/2.", dogru: "|r| = 1 olduğundan formül geçersiz. Kısmi toplamlar 1, 0, 1, 0 … olur, limit yok: ==ıraksar==. Önce |r| < 1 mi diye bak." }
      ]
    },
    {
      baslik: "İlk terim nerede başlıyor?",
      kisa: "Alt sınır ne olursa olsun a, serinin gerçekten ilk terimidir.",
      bloklar: [
        { tip: "tablo", baslik: "Aynı oran, farklı başlangıç", head: ["Seri", "İlk terim a", "r", "Toplam"], rows: [["Σ 3·(1/2)ⁿ, n = 0'dan", "3", "1/2", "3 / (1/2) = 6"], ["Σ 3·(1/2)ⁿ, n = 1'den", "3/2", "1/2", "(3/2) / (1/2) = 3"], ["Σ (1/3)ⁿ, n = 2'den", "1/9", "1/3", "(1/9) / (2/3) = 1/6"], ["Σ 2·(−1/3)ⁿ⁻¹, n = 1'den", "2", "−1/3", "2 / (4/3) = 3/2"]], vurgu: 1, not: "n = 1'den başlayan Σ 3·(1/2)ⁿ, n = 0'dan başlayana göre ilk terimi (3) kaybeder: 6 − 3 = 3." },
        { tip: "tuzak", metin: "Üstel ifadenin önündeki sayıyı otomatik olarak a sanma. Alt sınırı yerine koy, ilk terimi gerçekten hesapla.", yanlis: "Σ 3·(1/2)ⁿ (n = 1'den) için a = 3, toplam 3/(1 − 1/2) = 6.", dogru: "n = 1 için ilk terim 3·(1/2) = 3/2. Toplam (3/2)/(1/2) = 3." }
      ]
    },
    {
      baslik: "Uygulamalar: tekrar eden ondalık ve sıçrayan top",
      kisa: "Tekrar eden ondalığı ve toplam yolu geometrik seriyle bul.",
      bloklar: [
        { tip: "ornek", baslik: "0,272727… kesri", durum: "Bu sayıyı iki tam sayının oranı olarak yaz.", adimlar: ["Parçala: 0,27 + 0,0027 + 0,000027 + …", "İlk terim a = 0,27; oran r = 0,01 (her adımda iki basamak kayıyor).", "Toplam = 0,27 / (1 − 0,01) = 0,27 / 0,99 = 27/99.", "Sadeleştir: 27/99 = 3/11."], sonuc: "0,272727… = 3/11" },
        { tip: "ornek", baslik: "Basketbol topu 4 m'den bırakılıyor", durum: "Her yere çarpınca önceki yüksekliğin yarısına çıkıyor. Sonsuza kadar kat ettiği toplam yol kaç metre?", adimlar: ["İnişler: 4 + 2 + 1 + ½ + … Burada a = 4, r = ½: 4 / (1 − ½) = 8 m.", "Çıkışlar: 2 + 1 + ½ + … Burada a = 2, r = ½: 2 / (1 − ½) = 4 m.", "Toplam yol = inişler + çıkışlar = 8 + 4 = 12 m."], sonuc: "Toplam yol 12 m (sonsuz sıçrayış, sonlu yol)" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: ["Geometrik seri: a + ar + ar² + … Oran r, ardışık iki terimin bölümüdür.", "|r| < 1 ise seri yakınsar ve toplamı a / (1 − r) (a = ilk terim).", "|r| ≥ 1 ise seri ıraksar; |r| = 1'de formül kullanılmaz.", "r negatif olabilir: kısmi toplamlar zikzakla toplama oturur.", "Alt sınır 0 olmak zorunda değil; ilk terimi gerçekten hesapla.", "Tekrar eden ondalık bir geometrik seridir: 0,2727… için a = 0,27 ve r = 0,01.", "Sıçrayan top: iniş ve çıkışlar iki ayrı geometrik seridir."] }
      ]
    }
  ],
  sorular: [
    { q: "Σ 6·(−1/3)ⁿ (n = 0'dan ∞'a) serisinin toplamı kaçtır?", opts: ["9", "3", "9/2", "Seri ıraksar."], a: 2, why: "a = 6, r = −1/3, |r| < 1: toplam 6/(1 − (−1/3)) = 6/(4/3) = 9/2. İşareti yok sayıp r = 1/3 almak 9 verir (A)." },
    { q: "Σ 3·(1/4)ⁿ serisinde n = 1'den ∞'a gidildiğinde toplam kaçtır?", opts: ["1", "4", "3/4", "Seri ıraksar."], a: 0, why: "İlk terim n = 1'de 3/4, r = 1/4: (3/4)/(1 − 1/4) = (3/4)/(3/4) = 1. 3/(1 − 1/4) = 4, n = 0'dan başlayan serinin toplamıdır (B)." },
    { q: "Tabloda geometrik bir serinin ilk dört terimi verilmiştir. Serinin toplamı kaçtır?", fig: { type: "table", head: ["n", "1", "2", "3", "4"], rows: [["aₙ", "12", "−6", "3", "−3/2"]], caption: "Geometrik serinin terimleri" }, opts: ["24", "12", "Seri ıraksar çünkü terimlerin işareti değişiyor.", "8"], a: 3, why: "r = −6/12 = −1/2, a = 12: toplam 12/(1 + 1/2) = 8. r = +1/2 almak 24 verir (A). İşaret değiştirmek ıraksaklık anlamına gelmez; yalnızca |r| < 1 şartı önemlidir." },
    { q: "Bir top 2 m yükseklikten bırakılıyor. Her yere çarpışında önceki yüksekliğin 3/4'ü kadar yükseliyor. Sonsuza kadar kat edeceği toplam yol kaç metredir?", opts: ["8", "14", "6", "Sonsuz"], a: 1, why: "İnişler: 2 + 3/2 + 9/8 + … = 2/(1 − 3/4) = 8. Çıkışlar: 3/2 + 9/8 + … = (3/2)/(1/4) = 6. Toplam 14 m. Yalnız inişleri saymak 8 verir (A); yol sonsuz değil, çünkü r = 3/4 < 1." },
    { q: "Σ 5·rⁿ (n = 0'dan ∞'a) serisi yakınsıyor ve toplamı 10 ise r kaçtır?", opts: ["2", "−1/2", "1/2", "1/10"], a: 2, why: "5/(1 − r) = 10 → 1 − r = 1/2 → r = 1/2 (|r| < 1, tutarlı). r = 2, 10 ÷ 5'ten gelen cazip ama |r| > 1 olduğundan seri ıraksardı (A)." }
  ]
};
