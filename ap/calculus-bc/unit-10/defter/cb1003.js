/* Kitpath not defteri · cb1003 · AP Calculus BC Unit 10 (videosuz). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb1003",
  amac: "Bu konu *nth term test for divergence* yani n. terim testini anlatıyor: terimler 0'a gitmiyorsa seri kesin ıraksar. Testin yalnızca ıraksaklığı kanıtladığını, terimler 0'a giderken ise hiçbir şey söylemediğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Fikir: her adım hâlâ bir şey ekliyorsa toplam durmaz",
      kisa: "Terimler 0'a gitmiyorsa kısmi toplamlar sonsuza kaçar.",
      bloklar: [
        { tip: "hikaye", ikon: "🐷", baslik: "Kumbara", metin: "Her gün kumbaraya hâlâ yaklaşık 1 TL atıyorsan, sonunda sonsuz para birikir. Ama attığın miktar günden güne küçülüp 0'a gidiyorsa toplamın ne olacağı belli değildir." },
        { tip: "grafik", baslik: "Σ n/(n+1): terimler ve kısmi toplamlar", xlabel: "n", ylabel: "değer", xmax: 9, ymax: 7, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }, { v: 7, label: "7" }, { v: 8, label: "8" }], yticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 5, label: "5" }],
          ogeler: [
            { id: "a1", tip: "nokta", renk: 0, x: 1, y: 0.5, gizli: true },
            { id: "a2", tip: "nokta", renk: 0, x: 2, y: 0.6667, gizli: true },
            { id: "a3", tip: "nokta", renk: 0, x: 3, y: 0.75, gizli: true },
            { id: "a4", tip: "nokta", renk: 0, x: 4, y: 0.8, gizli: true },
            { id: "a5", tip: "nokta", renk: 0, x: 5, y: 0.8333, gizli: true },
            { id: "a6", tip: "nokta", renk: 0, x: 6, y: 0.8571, gizli: true },
            { id: "a7", tip: "nokta", renk: 0, x: 7, y: 0.875, gizli: true },
            { id: "a8", tip: "nokta", renk: 0, x: 8, y: 0.8889, gizli: true },
            { id: "s1", tip: "nokta", renk: 2, x: 1, y: 0.5, gizli: true },
            { id: "s2", tip: "nokta", renk: 2, x: 2, y: 1.1667, gizli: true },
            { id: "s3", tip: "nokta", renk: 2, x: 3, y: 1.9167, gizli: true },
            { id: "s4", tip: "nokta", renk: 2, x: 4, y: 2.7167, gizli: true },
            { id: "s5", tip: "nokta", renk: 2, x: 5, y: 3.55, gizli: true },
            { id: "s6", tip: "nokta", renk: 2, x: 6, y: 4.4071, gizli: true },
            { id: "s7", tip: "nokta", renk: 2, x: 7, y: 5.2821, gizli: true },
            { id: "s8", tip: "nokta", renk: 2, x: 8, y: 6.171, gizli: true },
            { id: "L", tip: "cizgi", renk: 0, kesik: true, from: [0, 1], to: [9, 1], etiket: "1", gizli: true }
          ],
          durumlar: [
            { metin: "Terimler aₙ = n/(n+1): ½, ⅔, ¾, … Her gün attığın para." },
            { metin: "Terimler 1'e yaklaşıyor ve hiç 0'a yaklaşmıyor.", goster: ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "L"] },
            { metin: "Kısmi toplamlar: S₁ = 0,5; S₂ ≈ 1,17; S₃ ≈ 1,92; S₄ ≈ 2,72.", goster: ["s1", "s2", "s3", "s4"] },
            { metin: "S₅ … S₈: her adımda yaklaşık 1 ekleniyor, toplam neredeyse düz bir çizgi gibi yükseliyor.", goster: ["s5", "s6", "s7", "s8"] },
            { metin: "Her adım ~1 ekliyorsa toplam ==sınırsız büyür==: seri ıraksaktır." }
          ] }
      ]
    },
    {
      baslik: "n. terim testi",
      kisa: "lim aₙ sıfırdan farklıysa ya da yoksa seri ıraksar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "🚫", terim: "nth term test for divergence", tr: "ıraksaklık için n. terim testi", tanim: "Terimlerin limiti 0 değilse ya da yoksa seri ıraksar. Seri yakınsıyorsa terimlerin 0'a gitmesi zorunludur.", ornek: "Σ n/(n+1) ıraksar çünkü n/(n+1) → 1 ≠ 0." }] },
        { tip: "formul", parcalar: [{ t: "lim aₙ ≠ 0 (ya da yok)", alt: "terimler 0'a gitmiyor" }, "⇒", { t: "Σ aₙ ıraksar", alt: "kesin sonuç" }], aciklama: "Aynı şeyin tersten söylenişi: ==Σ aₙ yakınsıyorsa lim aₙ = 0 olmak zorundadır.== Bu bir **zorunlu koşuldur**; yeterli değildir." },
        { tip: "adimlar", baslik: "Testi uygulama", adimlar: [{ baslik: "Limit al", metin: "lim aₙ (n → ∞) hesapla." }, { baslik: "0 değilse ya da yoksa", metin: "Seri ıraksar. İş bitti, başka test gerekmez." }, { baslik: "0 ise", metin: "Test sonuç vermez. Başka bir test (integral, karşılaştırma, oran …) kullan." }] }
      ]
    },
    {
      baslik: "Örnekler: önce limiti hesapla",
      kisa: "Limit 0'dan farklıysa iş biter; alterne seride bile.",
      bloklar: [
        { tip: "tablo", baslik: "Altı seri, altı limit", head: ["Seri", "lim aₙ", "Sonuç"], rows: [["Σ n/(2n + 1)", "1/2", "ıraksar"], ["Σ 3n²/(n² + 1)", "3", "ıraksar"], ["Σ (−1)ⁿ", "yok", "ıraksar"], ["Σ (1 + 1/n)ⁿ", "e", "ıraksar"], ["Σ 1/n²", "0", "test sonuç vermez"], ["Σ 1/n", "0", "test sonuç vermez"]], vurgu: 4 },
        { tip: "ornek", baslik: "Σ (2n² + 1)/(n² + 5n)", durum: "n. terim testiyle seri hakkında ne söylenir?", adimlar: ["Pay ve paydanın en büyük kuvveti n²: lim (2n² + 1)/(n² + 5n) = 2.", "Limit 0 değil, yani terimler 0'a gitmiyor.", "n. terim testi: seri ıraksar."], sonuc: "Iraksar (lim aₙ = 2 ≠ 0)" },
        { tip: "ornek", baslik: "Σ (−1)ⁿ · n/(n + 1)", durum: "Alterne olduğu için yakınsak mı?", adimlar: ["Terimlerin büyüklüğü n/(n+1) → 1. İşaret her adım değişiyor.", "Terimler −1 ile +1 civarında gidip geliyor: lim aₙ yok.", "Limit 0 olmadığından seri ıraksar. Alterne olması kurtarmaz."], sonuc: "Iraksar (lim aₙ yok)" }
      ]
    },
    {
      baslik: "Tuzak: terimler 0'a giderse ne olur?",
      kisa: "aₙ → 0 olması yakınsaklık garantisi değildir; test tek yönlüdür.",
      bloklar: [
        { tip: "grafik", baslik: "Σ 1/n: terimler küçülür ama toplam büyür", xlabel: "n", ylabel: "değer", xmax: 9, ymax: 3, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }, { v: 7, label: "7" }, { v: 8, label: "8" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }],
          ogeler: [
            { id: "h1", tip: "nokta", renk: 0, x: 1, y: 1, gizli: true },
            { id: "h2", tip: "nokta", renk: 0, x: 2, y: 0.5, gizli: true },
            { id: "h3", tip: "nokta", renk: 0, x: 3, y: 0.3333, gizli: true },
            { id: "h4", tip: "nokta", renk: 0, x: 4, y: 0.25, gizli: true },
            { id: "h5", tip: "nokta", renk: 0, x: 5, y: 0.2, gizli: true },
            { id: "h6", tip: "nokta", renk: 0, x: 6, y: 0.1667, gizli: true },
            { id: "h7", tip: "nokta", renk: 0, x: 7, y: 0.1429, gizli: true },
            { id: "h8", tip: "nokta", renk: 0, x: 8, y: 0.125, gizli: true },
            { id: "k1", tip: "nokta", renk: 2, x: 1, y: 1, gizli: true },
            { id: "k2", tip: "nokta", renk: 2, x: 2, y: 1.5, gizli: true },
            { id: "k3", tip: "nokta", renk: 2, x: 3, y: 1.8333, gizli: true },
            { id: "k4", tip: "nokta", renk: 2, x: 4, y: 2.0833, gizli: true },
            { id: "k5", tip: "nokta", renk: 2, x: 5, y: 2.2833, gizli: true },
            { id: "k6", tip: "nokta", renk: 2, x: 6, y: 2.45, gizli: true },
            { id: "k7", tip: "nokta", renk: 2, x: 7, y: 2.5929, gizli: true },
            { id: "k8", tip: "nokta", renk: 2, x: 8, y: 2.7179, gizli: true }
          ],
          durumlar: [
            { metin: "Harmonik serinin terimleri 1/n: 1, ½, ⅓, ¼, …" },
            { metin: "Terimler gerçekten 0'a gidiyor.", goster: ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"] },
            { metin: "Kısmi toplamlar: S₁ = 1, S₂ = 1,5, S₃ ≈ 1,83, S₄ ≈ 2,08.", goster: ["k1", "k2", "k3", "k4"] },
            { metin: "S₅ … S₈ ≈ 2,72: yavaşlıyor ama durmuyor. n. terim testi burada hiçbir şey söylemez; bu seri aslında ==ıraksar== (sonraki defter).", goster: ["k5", "k6", "k7", "k8"] }
          ] },
        { tip: "tuzak", metin: "n. terim testi yalnızca ıraksaklığı kanıtlar. Terimler 0'a giderse seri yakınsayabilir de ıraksayabilir de.", yanlis: "lim 1/n = 0 olduğundan Σ 1/n yakınsar.", dogru: "lim aₙ = 0 ise test sonuç vermez. Σ 1/n ıraksar, Σ 1/n² yakınsar; ikisinde de terimler 0'a gider." }
      ]
    },
    {
      baslik: "Test sonuç veriyor mu?",
      kisa: "Önce terimlerin limitine bak: ya ıraksar dersin ya başka test seçersin.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🚫", baslik: "Test: ıraksar", maddeler: ["lim aₙ ≠ 0 ya da yok", "Kesin sonuç"] }, sag: { ikon: "❓", baslik: "Test sonuç vermez", maddeler: ["lim aₙ = 0", "Başka test gerekir"] }, oyun: [{ metin: "Σ (n + 1)/n", cevap: "sol", neden: "Terimler 1'e gider, 0'a değil: ıraksar." }, { metin: "Σ 1/(n² + 1)", cevap: "sag", neden: "Terimler 0'a gider: test sonuç vermez." }, { metin: "Σ 2ⁿ", cevap: "sol", neden: "Terimler sonsuza gider: ıraksar." }, { metin: "Σ (1/2)ⁿ", cevap: "sag", neden: "Terimler 0'a gider; bu geometrik seri yakınsıyor ama test bunu söylemez." }, { metin: "Σ cos(nπ)", cevap: "sol", neden: "Terimler −1, 1, −1, … : limit yok, ıraksar." }] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: ["n. terim testi: lim aₙ ≠ 0 ya da yoksa Σ aₙ kesin ıraksar.", "Eşdeğer söyleyiş: Σ aₙ yakınsıyorsa lim aₙ = 0 olmak zorundadır.", "lim aₙ = 0 ise test sonuç vermez; seri yakınsayabilir de ıraksayabilir de.", "Test yakınsaklığı asla kanıtlayamaz.", "Terimlerin limiti yoksa (gidip gelirse) seri yine ıraksar; alterne olması kurtarmaz.", "İlk işin limit almak olsun: ucuz bir testtir, çoğu zaman anında sonuç verir.", "|r| ≥ 1 olan geometrik seri bu testle de ıraksar: rⁿ 0'a gitmez."] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdaki serilerden hangisinin ıraksadığı n. terim testiyle gösterilebilir?", opts: ["Σ 1/n", "Σ 1/(n² + 1)", "Σ (1/3)ⁿ", "Σ n/(n + 3)"], a: 3, why: "n/(n+3) → 1 ≠ 0, yani seri ıraksar. Diğer üçünde terimler 0'a gider; test sonuç vermez. Σ 1/n ıraksar ama bunu n. terim testi gösteremez (A)." },
    { q: "Σ aₙ (n = 1'den ∞'a) serisi yakınsıyorsa aşağıdakilerden hangisi mutlaka doğrudur?", opts: ["Σ aₙ = 0", "lim aₙ = 0", "(aₙ) dizisi azalandır.", "Σ |aₙ| de yakınsar."], a: 1, why: "Yakınsak seride terimler 0'a gitmek zorundadır (n. terim testinin tersi). Toplamın 0 olması, azalan olması ya da mutlak değerlerin yakınsaması gerekmez." },
    { q: "Tablo aₙ = (3n − 1)/(n + 2) değerlerini gösteriyor. Σ aₙ hakkında aşağıdakilerden hangisi söylenebilir?", fig: { type: "table", head: ["n", "10", "100", "1000", "10000"], rows: [["aₙ ≈", "2,42", "2,93", "2,99", "3,00"]], caption: "aₙ'in değerleri" }, opts: ["Iraksar çünkü lim aₙ = 3 ≠ 0.", "Yakınsar çünkü aₙ sınırlı.", "Yakınsar ve toplamı 3'tür.", "n. terim testi sonuç vermez."], a: 0, why: "Tablo aₙ'in 3'e yaklaştığını gösteriyor (lim = 3 ≠ 0), dolayısıyla seri ıraksar. Terimlerin sınırlı olması yakınsaklık getirmez (B); limit 3 serinin toplamı değil, terimlerin limitidir (C)." },
    { q: "Σ (−1)ⁿ · n/(n + 1) (n = 1'den ∞'a) serisi için hangisi doğrudur?", opts: ["Alterne olduğundan kesinlikle yakınsar.", "Terimler 1'e gittiği için seri 1'e yakınsar.", "Terimlerin limiti yoktur, bu yüzden seri ıraksar.", "n. terim testi sonuç vermez."], a: 2, why: "aₙ −1 ve +1 civarında gidip gelir; lim aₙ yok, dolayısıyla 0 değil: seri ıraksar. Alterne seri testi için terimlerin büyüklüğü 0'a gitmeli; burada n/(n+1) → 1 (A)." },
    { q: "Aşağıdaki ifadelerden hangisi doğrudur?", opts: ["lim aₙ = 0 ise Σ aₙ yakınsar.", "lim aₙ ≠ 0 ise Σ aₙ ıraksar.", "Σ aₙ ıraksıyorsa lim aₙ ≠ 0'dır.", "lim aₙ = 0 ise Σ aₙ ıraksar."], a: 1, why: "n. terim testi: terimler 0'a gitmezse seri ıraksar. Tersi (A ve D) yanlıştır: Σ 1/n ıraksar, Σ 1/n² yakınsar, ikisinde de aₙ → 0. C de aynı ters yönlü hatadır." }
  ]
};
