/* Kitpath not defteri · cb1001 · AP Calculus BC Unit 10 (videosuz). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb1001",
  amac: "Bu konu sonsuz serinin ne demek olduğunu anlatıyor: sonsuz sayıda sayıyı toplayınca neden bazen sonlu bir sayı çıkar, bazen çıkmaz? Kısmi toplamları (*partial sum*) kurup limitlerine bakarak seriyi yakınsak ya da ıraksak diye ayırmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Dizi ve seri: virgül mü, artı mı?",
      kisa: "Dizi sayıları sıralar; seri onları toplar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "🔢", terim: "Sequence", tr: "dizi", tanim: "Sıralı bir sayı listesi: a₁, a₂, a₃, … Dizide asıl soru, terimlerin nereye gittiğidir (limit).", ornek: "1, ½, ¼, ⅛, … dizisi 0'a gider." }, { ikon: "➕", terim: "Infinite series", tr: "sonsuz seri", tanim: "Bir dizinin bütün terimlerinin toplamı: a₁ + a₂ + a₃ + … Yazılışı Σ aₙ (n = 1'den ∞'a).", ornek: "1 + ½ + ¼ + ⅛ + … bir seridir." }, { ikon: "🧱", terim: "Term", tr: "terim", tanim: "Serideki tek bir sayı, yani aₙ. Terimler arasındaki işaret artıdır.", ornek: "Σ 3n serisinin dördüncü terimi 12'dir." }] },
        { tip: "ikili", sol: { ikon: "🔢", baslik: "*Sequence* (dizi)", maddeler: ["Virgülle ayrılmış liste: a₁, a₂, a₃, …", "Soru: terimler nereye gidiyor?"] }, sag: { ikon: "➕", baslik: "*Series* (seri)", maddeler: ["Artıyla bağlı toplam: a₁ + a₂ + a₃ + …", "Soru: toplam sonlu bir sayı mı?"] }, oyun: [{ metin: "1, ½, ¼, ⅛, …", cevap: "sol", neden: "Virgülle ayrılmış liste: dizi." }, { metin: "1 + ½ + ¼ + ⅛ + …", cevap: "sag", neden: "Terimler artıyla toplanıyor: seri." }, { metin: "3, 6, 9, 12, …", cevap: "sol", neden: "Toplama yok, yalnızca liste: dizi." }, { metin: "Σ 3n (n = 1'den ∞'a)", cevap: "sag", neden: "Σ toplam demektir: seri." }] }
      ]
    },
    {
      baslik: "Kısmi toplamlar: sonsuz toplamı yakalamak",
      kisa: "Sonsuz toplamı, ilk n terimin toplamlarından oluşan diziyle anlarız.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "Sₙ = a₁ + a₂ + … + aₙ", alt: "ilk n terimin toplamı" }, "→", { t: "lim Sₙ", alt: "n sonsuza giderken" }, "=", { t: "Σ aₙ", alt: "serinin toplamı" }], aciklama: "Sonsuz sayıda sayıyı tek tek toplayamayız. Bunun yerine **kısmi toplamlar dizisine** (S₁, S₂, S₃, …) bakarız. Serinin kaderi bu dizinin limitidir." },
        { tip: "tablo", baslik: "Σ 1/2ⁿ serisinin kısmi toplamları", head: ["n", "Terim aₙ", "Kısmi toplam Sₙ", "Ondalık"], rows: [["1", "1/2", "1/2", "0,5"], ["2", "1/4", "3/4", "0,75"], ["3", "1/8", "7/8", "0,875"], ["4", "1/16", "15/16", "0,9375"], ["n", "1/2ⁿ", "1 − 1/2ⁿ", "→ 1"]], vurgu: 4, not: "Her adımda kalan boşluğun yarısı dolduruluyor: Sₙ = 1 − 1/2ⁿ. Bu dizinin limiti 1." }
      ]
    },
    {
      baslik: "Yakınsak seri: kısmi toplamlar bir sayıya oturur",
      kisa: "Kısmi toplamların limiti sonlu bir sayıysa seri yakınsaktır; toplamı o sayıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "🎯", terim: "Convergent series", tr: "yakınsak seri", tanim: "Kısmi toplamların limiti sonlu bir S sayısıysa seri yakınsaktır ve toplamı S'dir. Yazılışı Σ aₙ = S.", ornek: "Σ 1/2ⁿ = 1." }] },
        { tip: "grafik", baslik: "Σ 1/2ⁿ: kısmi toplamlar Sₙ", xlabel: "n", ylabel: "Sₙ", xmax: 9, ymax: 1.2, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }, { v: 7, label: "7" }, { v: 8, label: "8" }], yticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }],
          ogeler: [
            { id: "s1", tip: "nokta", renk: 0, x: 1, y: 0.5, gizli: true },
            { id: "s2", tip: "nokta", renk: 0, x: 2, y: 0.75, gizli: true },
            { id: "s3", tip: "nokta", renk: 0, x: 3, y: 0.875, gizli: true },
            { id: "s4", tip: "nokta", renk: 0, x: 4, y: 0.9375, gizli: true },
            { id: "s5", tip: "nokta", renk: 0, x: 5, y: 0.9688, gizli: true },
            { id: "s6", tip: "nokta", renk: 0, x: 6, y: 0.9844, gizli: true },
            { id: "s7", tip: "nokta", renk: 0, x: 7, y: 0.9922, gizli: true },
            { id: "s8", tip: "nokta", renk: 0, x: 8, y: 0.9961, gizli: true },
            { id: "L", tip: "cizgi", renk: 2, kesik: true, from: [0, 1], to: [9, 1], etiket: "S = 1", gizli: true }
          ],
          durumlar: [
            { metin: "Kumbaraya sırayla ½, ¼, ⅛, … TL atıyoruz. Kısmi toplamlar Sₙ nereye gidecek?" },
            { metin: "S₁ = 0,5 ve S₂ = 0,75: ilk iki nokta.", goster: ["s1", "s2"] },
            { metin: "S₃ = 0,875 ve S₄ = 0,9375: her adım öncekinden küçük bir artış.", goster: ["s3", "s4"] },
            { metin: "S₅ … S₈: noktalar yükseliyor ama sıkışıyor.", goster: ["s5", "s6", "s7", "s8"] },
            { metin: "Noktalar y = 1 çizgisine yaklaşır ve onu geçmez: ==limit 1==. Seri yakınsaktır, toplamı 1.", goster: ["L"] }
          ] }
      ]
    },
    {
      baslik: "Iraksak seri: büyümek ya da dolanmak",
      kisa: "Kısmi toplamlar sonsuza giderse ya da limitleri yoksa seri ıraksaktır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "🌀", terim: "Divergent series", tr: "ıraksak seri", tanim: "Kısmi toplamların sonlu bir limiti yoksa seri ıraksaktır. Bu iki şekilde olur: Sₙ sonsuza gider ya da hiçbir değere oturmaz.", ornek: "1 + 2 + 3 + … ve 1 − 1 + 1 − 1 + … ıraksaktır." }] },
        { tip: "grafik", baslik: "Σ n: kısmi toplamlar durmadan büyür", xlabel: "n", ylabel: "Sₙ", xmax: 9, ymax: 40, xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }], yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }],
          ogeler: [
            { id: "t1", tip: "nokta", renk: 2, x: 1, y: 1, gizli: true },
            { id: "t2", tip: "nokta", renk: 2, x: 2, y: 3, gizli: true },
            { id: "t3", tip: "nokta", renk: 2, x: 3, y: 6, gizli: true },
            { id: "t4", tip: "nokta", renk: 2, x: 4, y: 10, gizli: true },
            { id: "t5", tip: "nokta", renk: 2, x: 5, y: 15, gizli: true },
            { id: "t6", tip: "nokta", renk: 2, x: 6, y: 21, gizli: true },
            { id: "t7", tip: "nokta", renk: 2, x: 7, y: 28, gizli: true },
            { id: "t8", tip: "nokta", renk: 2, x: 8, y: 36, gizli: true }
          ],
          durumlar: [
            { metin: "Her gün kumbaraya o günün numarası kadar TL atıyorsun: 1 + 2 + 3 + …" },
            { metin: "S₁ = 1, S₂ = 3, S₃ = 6, S₄ = 10.", goster: ["t1", "t2", "t3", "t4"] },
            { metin: "S₅ = 15, S₆ = 21, S₇ = 28, S₈ = 36: adımlar giderek büyüyor.", goster: ["t5", "t6", "t7", "t8"] },
            { metin: "Noktalar hiçbir çizgiye sıkışmıyor, sonsuza kaçıyor: ==sonlu limit yok== (Sₙ → ∞), seri ıraksaktır." }
          ] },
        { tip: "tablo", baslik: "Üç seri, üç davranış", head: ["Seri", "S₁, S₂, S₃, S₄", "Kısmi toplamlar", "Sonuç"], rows: [["1 + 2 + 3 + 4 + …", "1, 3, 6, 10", "sonsuza büyür", "ıraksar"], ["1 − 1 + 1 − 1 + …", "1, 0, 1, 0", "iki değer arasında gidip gelir", "ıraksar"], ["½ + ¼ + ⅛ + …", "0,5; 0,75; 0,875; 0,9375", "1'e yaklaşır", "yakınsar (toplam 1)"]], vurgu: 2 }
      ]
    },
    {
      baslik: "Kısmi toplamdan seriyi okumak",
      kisa: "Sₙ'in limitini al; terimleri aₙ = Sₙ − Sₙ₋₁ ile bul.",
      bloklar: [
        { tip: "ornek", baslik: "Σ 1/(n(n+1)) (n = 1'den ∞'a): teleskopik seri", durum: "Sₙ'i bul, seri yakınsak mı ve toplamı kaç?", adimlar: ["Kesirlere ayır: 1/(n(n+1)) = 1/n − 1/(n+1).", "Aç: Sₙ = (1 − ½) + (½ − ⅓) + … + (1/n − 1/(n+1)).", "Ortadaki terimler birbirini götürür: Sₙ = 1 − 1/(n+1).", "Limit: n → ∞ iken 1/(n+1) → 0, yani Sₙ → 1."], sonuc: "Seri yakınsar; Σ 1/(n(n+1)) = 1" },
        { tip: "ornek", baslik: "Sₙ = 3n/(n+1) verilmiş", durum: "Σ aₙ yakınsak mı? a₁ ve a₂ kaç?", adimlar: ["Limit: lim 3n/(n+1) = 3. Sonlu bir sayı, seri yakınsar ve toplamı 3.", "a₁ = S₁ = 3/2.", "a₂ = S₂ − S₁ = 6/3 − 3/2 = 2 − 3/2 = 1/2.", "Genel terim: aₙ = Sₙ − Sₙ₋₁ = 3/(n(n+1))."], sonuc: "Σ aₙ = 3; a₁ = 3/2, a₂ = 1/2" },
        { tip: "tuzak", metin: "Terimlerin limiti ile kısmi toplamların limiti iki ayrı şeydir. Dizi 0'a giderken seri 1'e gidebilir; terimler 1'e giderken seri sonsuza gider.", yanlis: "1/2, 1/4, 1/8, … dizisi 0'a gidiyor, yani toplam da 0'dır.", dogru: "Dizinin (aₙ) limiti 0, serinin toplamı (lim Sₙ) 1. Seri için hep ==Sₙ'in limitine== bak." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: ["Dizi bir sayı listesidir (virgül); seri o sayıların toplamıdır (artı).", "Kısmi toplam: Sₙ = a₁ + a₂ + … + aₙ.", "Seri yakınsaktır ⇔ lim Sₙ sonlu bir sayı S; bu durumda Σ aₙ = S.", "Sₙ sonsuza giderse ya da limit yoksa (gidip gelirse) seri ıraksaktır.", "Teleskopik seride terimler birbirini götürür; Sₙ kısalır, limit kolay bulunur.", "Sₙ verilirse a₁ = S₁ ve aₙ = Sₙ − Sₙ₋₁ (n ≥ 2).", "Terimlerin limiti (aₙ) ile serinin toplamı (lim Sₙ) farklı şeylerdir."] }
      ]
    }
  ],
  sorular: [
    { q: "Σ aₙ (n = 1'den ∞'a) serisinin kısmi toplamları Sₙ = 4n/(2n + 1) ise aşağıdakilerden hangisi doğrudur?", opts: ["Seri ıraksar çünkü Sₙ artan bir dizidir.", "Seri yakınsar ve toplamı 2'dir.", "Seri yakınsar ve toplamı 4'tür.", "Seri ıraksar çünkü aₙ → 0 değildir."], a: 1, why: "Seri, kısmi toplamların limitiyle belirlenir: lim 4n/(2n+1) = 4/2 = 2, sonlu. Sₙ'in artan olması ıraksaklık göstermez (A); sınırlı artan dizi de yakınsar. 4 yalnızca payın katsayısıdır (C)." },
    { q: "Tabloda bir Σ aₙ serisinin ilk beş kısmi toplamı verilmiştir. Desenin aynı biçimde sürdüğünü varsayarsak aşağıdakilerden hangisi doğrudur?", fig: { type: "table", head: ["n", "1", "2", "3", "4", "5"], rows: [["Sₙ", "2", "3", "3,5", "3,75", "3,875"]], caption: "Kısmi toplamlar" }, opts: ["a₆ = 1/8 ve seri ıraksar.", "a₆ = 3,9375 ve seri 4'e yakınsar.", "a₆ = 1/16 ve seri ıraksar.", "a₆ = 1/16 ve seri 4'e yakınsar."], a: 3, why: "aₙ = Sₙ − Sₙ₋₁: terimler 2, 1, ½, ¼, ⅛ ise a₆ = 1/16. Sₙ'ler 4'ten kalan boşluğu her adımda yarılıyor, yani 4'e yaklaşıyor: yakınsak. 3,9375 değeri a₆ değil S₆'dır (B)." },
    { q: "Σ (1/n − 1/(n+2)) serisi (n = 1'den ∞'a) için toplam aşağıdakilerden hangisidir?", opts: ["3/2", "1", "2", "Seri ıraksar."], a: 0, why: "Terimler çifter çifter götürülür: Sₙ = 1 + ½ − 1/(n+1) − 1/(n+2). Limit 3/2. Yalnızca 1'i bırakıp ½'yi unutmak 1 verir (B); teleskopik yapı yakınsaklığı getirir, ıraksaklığı değil." },
    { q: "Bir serinin kısmi toplamları Sₙ = 1 + (−1)ⁿ ise aşağıdakilerden hangisi doğrudur?", opts: ["Seri yakınsar ve toplamı 0'dır.", "Seri yakınsar ve toplamı 2'dir.", "Seri ıraksar çünkü Sₙ'in limiti yoktur.", "Seri ıraksar çünkü Sₙ sonsuza gider."], a: 2, why: "S₁ = 0, S₂ = 2, S₃ = 0, … Sₙ iki değer arasında gidip geliyor, tek bir sayıya oturmuyor: limit yok, seri ıraksar. Sₙ sonsuza gitmiyor (D); ıraksaklığın bu ikinci türü." },
    { q: "aₙ = (1/2)ⁿ olsun (n = 1'den ∞'a). Hangisi doğrudur?", opts: ["Dizi 0'a yakınsar ve Σ aₙ da 0'a yakınsar.", "Dizi 0'a yakınsar ve Σ aₙ 1'e yakınsar.", "Dizi yakınsar ama Σ aₙ ıraksar.", "Dizi ıraksar ama Σ aₙ yakınsar."], a: 1, why: "Terimler 0'a gider (dizi). Kısmi toplamlar Sₙ = 1 − (1/2)ⁿ olduğundan serinin toplamı 1'dir. Terimlerin limiti serinin toplamı değildir; A tam bu karışıklığı sorar." }
  ]
};
