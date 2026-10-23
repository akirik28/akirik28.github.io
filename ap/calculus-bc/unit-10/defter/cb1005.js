/* Kitpath not defteri · cb1005 · AP Calculus BC Unit 10 (videosuz). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb1005",
  amac: "Bu konu iki karşılaştırma testini anlatıyor: bilmediğin pozitif terimli bir seriyi, kaderini bildiğin bir seriyle (p-serisi ya da geometrik) kıyaslayarak yakınsak mı ıraksak mı olduğunu bulursun. Doğrudan karşılaştırmanın hangi yönde işlediğini ve limit karşılaştırmanın ne zaman gerektiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Fikir: büyüğün toplamı sonluysa küçüğünki de sonludur",
      kisa: "Terimleri daha küçük olan seri, daha büyüğünün gölgesidir.",
      bloklar: [
        { tip: "hikaye", ikon: "🍔", baslik: "Kantin harcamaları", metin: "Ece her hafta kantinde harcıyor, kardeşi ise her hafta Ece'den daha az. Ece'nin toplam harcaması sonsuza kadar sonlu kalıyorsa kardeşininki de kalır. Kardeşinin toplamı sonsuzsa Ece'ninki de sonsuzdur." },
        { tip: "grafik", baslik: "bₙ = 1/n² (büyük) ve aₙ = 1/(n²+1) (küçük)", xlabel: "n", ylabel: "terim", xmax: 6, ymax: 1.1, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }], yticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 1, noktalar: [[0.6799999999999999, 0], [1.32, 0], [1.32, 1], [0.6799999999999999, 1]], gizli: true },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[1.68, 0], [2.32, 0], [2.32, 0.25], [1.68, 0.25]], gizli: true },
            { id: "b3", tip: "alan", renk: 1, noktalar: [[2.68, 0], [3.32, 0], [3.32, 0.1111], [2.68, 0.1111]], gizli: true },
            { id: "b4", tip: "alan", renk: 1, noktalar: [[3.68, 0], [4.32, 0], [4.32, 0.0625], [3.68, 0.0625]], gizli: true },
            { id: "b5", tip: "alan", renk: 1, noktalar: [[4.68, 0], [5.32, 0], [5.32, 0.04], [4.68, 0.04]], gizli: true },
            { id: "a1", tip: "alan", renk: 0, noktalar: [[0.8200000000000001, 0], [1.18, 0], [1.18, 0.5], [0.8200000000000001, 0.5]], gizli: true },
            { id: "a2", tip: "alan", renk: 0, noktalar: [[1.82, 0], [2.18, 0], [2.18, 0.2], [1.82, 0.2]], gizli: true },
            { id: "a3", tip: "alan", renk: 0, noktalar: [[2.82, 0], [3.18, 0], [3.18, 0.1], [2.82, 0.1]], gizli: true },
            { id: "a4", tip: "alan", renk: 0, noktalar: [[3.82, 0], [4.18, 0], [4.18, 0.0588], [3.82, 0.0588]], gizli: true },
            { id: "a5", tip: "alan", renk: 0, noktalar: [[4.82, 0], [5.18, 0], [5.18, 0.0385], [4.82, 0.0385]], gizli: true }
          ],
          durumlar: [
            { metin: "Önce kaderini bildiğimiz seri: bₙ = 1/n² bir p-serisi (p = 2), yakınsar." },
            { metin: "bₙ'nin terimleri.", goster: ["b1", "b2", "b3", "b4", "b5"] },
            { metin: "aₙ = 1/(n²+1) her n için bₙ'nin ==içinde== kalıyor: 0 < aₙ ≤ bₙ.", goster: ["a1", "a2", "a3", "a4", "a5"] },
            { metin: "bₙ'lerin toplamı sonluysa daha küçük aₙ'lerin toplamı da sonludur: ==Σ aₙ yakınsar.==" }
          ] }
      ]
    },
    {
      baslik: "Doğrudan karşılaştırma testi",
      kisa: "Büyüğün yakınsaması küçüğü, küçüğün ıraksaması büyüğü çeker.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "⚖️", terim: "Direct comparison test", tr: "doğrudan karşılaştırma testi", tanim: "Tüm n (ya da bir noktadan sonra) için 0 ≤ aₙ ≤ bₙ ise Σ bₙ yakınsayınca Σ aₙ yakınsar; Σ aₙ ıraksayınca Σ bₙ ıraksar.", ornek: "1/(n²+1) ≤ 1/n² ve Σ 1/n² yakınsar, dolayısıyla Σ 1/(n²+1) yakınsar." }] },
        { tip: "tablo", baslik: "0 ≤ aₙ ≤ bₙ iken", head: ["Bilgi", "Sonuç"], rows: [["Σ bₙ (büyük) yakınsar", "Σ aₙ yakınsar"], ["Σ aₙ (küçük) ıraksar", "Σ bₙ ıraksar"], ["Σ bₙ (büyük) ıraksar", "sonuç yok"], ["Σ aₙ (küçük) yakınsar", "sonuç yok"]], vurgu: 0, not: "Sonuç yalnızca büyük yakınsıyorsa ya da küçük ıraksıyorsa çıkar." },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Sonuç çıkar", maddeler: ["Büyük yakınsıyor", "Küçük ıraksıyor"] }, sag: { ikon: "🚫", baslik: "Sonuç çıkmaz", maddeler: ["Büyük ıraksıyor", "Küçük yakınsıyor"] }, oyun: [{ metin: "1/(n²+1) ≤ 1/n² ve Σ 1/n² yakınsar.", cevap: "sol", neden: "Büyük yakınsıyor: küçük de yakınsar." }, { metin: "1/(n+1) ≤ 1/n ve Σ 1/n ıraksar.", cevap: "sag", neden: "Büyük ıraksıyor: küçük hakkında bir şey söylemez." }, { metin: "1/n ≤ 1/√n ve Σ 1/n ıraksar.", cevap: "sol", neden: "Küçük ıraksıyor: büyük de ıraksar." }, { metin: "1/2ⁿ ≤ 1/n ve Σ 1/2ⁿ yakınsar.", cevap: "sag", neden: "Küçük yakınsıyor: büyük hakkında bir şey söylemez." }] }
      ]
    },
    {
      baslik: "Doğrudan karşılaştırma: örnekler",
      kisa: "Bilinen bir seri seç, eşitsizliği doğru yönde göster.",
      bloklar: [
        { tip: "adimlar", baslik: "Nasıl uygulanır?", adimlar: [{ baslik: "Tahmin et", metin: "Seri yakınsar gibi mi, ıraksar gibi mi? Baskın terime bak." }, { baslik: "bₙ seç", metin: "Kaderini bildiğin bir seri: p-serisi ya da geometrik." }, { baslik: "Eşitsizliği doğru yönde kur", metin: "Yakınsıyorsa aₙ ≤ bₙ, ıraksıyorsa aₙ ≥ bₙ (terimler pozitif)." }] },
        { tip: "ornek", baslik: "Σ cos²n / n² (n = 1'den ∞'a)", durum: "Yakınsak mı?", adimlar: ["0 ≤ cos²n ≤ 1 olduğundan 0 ≤ cos²n / n² ≤ 1/n².", "Σ 1/n² p-serisidir (p = 2 > 1), yakınsar.", "Küçük olan yakınsayan büyüğün altında."], sonuc: "Doğrudan karşılaştırmayla yakınsar" },
        { tip: "ornek", baslik: "Σ 1/(√n − 1) (n = 2'den ∞'a)", durum: "Yakınsak mı?", adimlar: ["n ≥ 2 için 0 < √n − 1 < √n, dolayısıyla 1/(√n − 1) > 1/√n.", "Σ 1/√n p-serisidir (p = ½ ≤ 1), ıraksar.", "Küçük olan ıraksıyor, büyük de ıraksar."], sonuc: "Doğrudan karşılaştırmayla ıraksar" }
      ]
    },
    {
      baslik: "Limit karşılaştırma testi",
      kisa: "aₙ/bₙ'in limiti pozitif ve sonluysa iki seri aynı kaderi paylaşır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "lim aₙ / bₙ = L", alt: "aₙ, bₙ > 0" }, "→", { t: "0 < L < ∞", alt: "pozitif ve sonlu" }, "⇒", { t: "Σ aₙ ve Σ bₙ aynı kaderde", alt: "ikisi yakınsar ya da ikisi ıraksar" }], aciklama: "*Limit comparison test*: terimler yaklaşık olarak L·bₙ gibi davranır. Eşitsizlik göstermek zor olduğunda bu test işe yarar." },
        { tip: "adimlar", baslik: "bₙ'yi baskın terimlerden seç", adimlar: [{ baslik: "Pay ve paydanın baskın terimi", metin: "En büyük kuvvetleri (ya da en hızlı büyüyen terimleri) bul." }, { baslik: "bₙ = baskın pay ÷ baskın payda", metin: "Sadeleştir: p-serisi ya da geometrik seri çıkmalı." }, { baslik: "L'yi hesapla", metin: "lim aₙ/bₙ. Pozitif ve sonlu ise bₙ'nin kaderi aₙ'nin kaderidir." }] },
        { tip: "tuzak", metin: "Limit karşılaştırmada L pozitif ve sonlu olmalı. L = 0 ya da L = ∞ çıkarsa bu test sonuç vermez; terimlerin pozitif olması da şart.", yanlis: "L = 0 çıktı, iki seri aynı kaderi paylaşır.", dogru: "L = 0 ya da ∞ ise başka bir bₙ seç ya da başka bir test kullan." }
      ]
    },
    {
      baslik: "Limit karşılaştırma: örnekler",
      kisa: "Doğrudan karşılaştırmanın yön hatasını limit karşılaştırma çözer.",
      bloklar: [
        { tip: "grafik", baslik: "aₙ/bₙ oranı: aₙ = (3n+1)/(n³−2n+5), bₙ = 1/n²", xlabel: "n", ylabel: "aₙ / bₙ", xmax: 11, ymax: 4, xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }],
          ogeler: [
            { id: "r1", tip: "nokta", renk: 0, x: 1, y: 1, gizli: true },
            { id: "r2", tip: "nokta", renk: 0, x: 2, y: 3.1111, gizli: true },
            { id: "r3", tip: "nokta", renk: 0, x: 3, y: 3.4615, gizli: true },
            { id: "r4", tip: "nokta", renk: 0, x: 4, y: 3.4098, gizli: true },
            { id: "r5", tip: "nokta", renk: 0, x: 5, y: 3.3333, gizli: true },
            { id: "r6", tip: "nokta", renk: 0, x: 6, y: 3.2727, gizli: true },
            { id: "r7", tip: "nokta", renk: 0, x: 7, y: 3.2275, gizli: true },
            { id: "r8", tip: "nokta", renk: 0, x: 8, y: 3.1936, gizli: true },
            { id: "r9", tip: "nokta", renk: 0, x: 9, y: 3.1676, gizli: true },
            { id: "r10", tip: "nokta", renk: 0, x: 10, y: 3.1472, gizli: true },
            { id: "L", tip: "cizgi", renk: 2, kesik: true, from: [0, 3], to: [11, 3], etiket: "L = 3", gizli: true }
          ],
          durumlar: [
            { metin: "bₙ = 1/n² seçtik (baskın terim: 3n / n³ = 3/n², sabit çarpan önemsiz). Oran aₙ/bₙ = n²(3n+1)/(n³−2n+5)." },
            { metin: "n = 1, 2, 3: oran 1; 3,11; 3,46.", goster: ["r1", "r2", "r3"] },
            { metin: "n = 4 … 7: oran düşüyor: 3,41; 3,33; 3,27; 3,23.", goster: ["r4", "r5", "r6", "r7"] },
            { metin: "n = 8 … 10: oran 3'e yaklaşıyor. ==L = 3== pozitif ve sonlu.", goster: ["r8", "r9", "r10", "L"] },
            { metin: "Σ 1/n² yakınsadığı için Σ (3n+1)/(n³−2n+5) de yakınsar." }
          ] },
        { tip: "ornek", baslik: "Σ 1/(2ⁿ − 1) (n = 1'den ∞'a)", durum: "Doğrudan karşılaştırma niye olmaz? Limit karşılaştırma ne verir?", adimlar: ["bₙ = 1/2ⁿ (geometrik, r = ½, yakınsar) seçmek doğal.", "Ama 1/(2ⁿ − 1) > 1/2ⁿ: aₙ büyük, bₙ küçük. Doğrudan karşılaştırma yanlış yönde, sonuç çıkmaz.", "Limit: lim [1/(2ⁿ − 1)] / [1/2ⁿ] = lim 2ⁿ/(2ⁿ − 1) = 1.", "L = 1 pozitif ve sonlu, Σ 1/2ⁿ yakınsar."], sonuc: "Σ 1/(2ⁿ − 1) yakınsar" },
        { tip: "ornek", baslik: "Σ (5n + 2)/(n² + 3n) (n = 1'den ∞'a)", durum: "Yakınsak mı?", adimlar: ["Baskın terimler: 5n / n² = 5/n. bₙ = 1/n seç (harmonik, ıraksar).", "lim [(5n + 2)/(n² + 3n)] / (1/n) = lim (5n² + 2n)/(n² + 3n) = 5.", "L = 5 pozitif ve sonlu, Σ 1/n ıraksar."], sonuc: "Σ (5n + 2)/(n² + 3n) ıraksar" }
      ]
    },
    {
      baslik: "Hangi karşılaştırmayı seçmeli?",
      kisa: "Eşitsizlik bariz ve yönü doğruysa doğrudan; değilse limit karşılaştırma.",
      bloklar: [
        { tip: "tablo", baslik: "aₙ'ye bakıp bₙ seçmek", head: ["aₙ", "bₙ", "bₙ'nin kaderi"], rows: [["(3n + 1)/(n³ − 2n + 5)", "1/n²", "yakınsar"], ["(5n + 2)/(n² + 3n)", "1/n", "ıraksar"], ["1/(2ⁿ − 1)", "1/2ⁿ", "yakınsar"], ["(n + 1)/(n^(5/2) + 3)", "1/n^(3/2)", "yakınsar"]], not: "Baskın pay ÷ baskın payda: kuvvetlerin farkı p'yi verir." },
        { tip: "ikili", sol: { ikon: "⚖️", baslik: "Doğrudan karşılaştırma", maddeler: ["Eşitsizlik bariz ve doğru yönde"] }, sag: { ikon: "📏", baslik: "Limit karşılaştırma", maddeler: ["Eşitsizlik yok ya da ters yönde"] }, oyun: [{ metin: "Σ 1/(3ⁿ + n)", cevap: "sol", neden: "1/(3ⁿ + n) ≤ 1/3ⁿ, yön doğru." }, { metin: "Σ (2n² + 1)/(n⁴ − 3n + 9)", cevap: "sag", neden: "Karmaşık kesir; bₙ = 1/n² ile limit alınır." }, { metin: "Σ 1/(2ⁿ − 1)", cevap: "sag", neden: "1/2ⁿ ile eşitsizlik ters yönde: limit." }, { metin: "Σ cos²n / n²", cevap: "sol", neden: "0 ≤ cos²n ≤ 1 ile 1/n²'ye bağlanır." }] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: ["Her iki testte de terimler pozitif olmalı.", "Doğrudan karşılaştırma: 0 ≤ aₙ ≤ bₙ; büyük yakınsarsa küçük yakınsar, küçük ıraksarsa büyük ıraksar.", "Ters yön (büyük ıraksıyor ya da küçük yakınsıyor) sonuç vermez.", "Limit karşılaştırma: lim aₙ/bₙ = L, 0 < L < ∞ ise iki seri aynı kaderde.", "L = 0 ya da ∞ ise bu test sonuç vermez.", "bₙ'yi baskın terimlerden seç ve p-serisi ya da geometrik seri çıkar.", "Doğrudan karşılaştırmanın yönü bozuksa (ör. 1/(2ⁿ − 1)) limit karşılaştırmaya geç."] }
      ]
    }
  ],
  sorular: [
    { q: "0 ≤ aₙ ≤ bₙ olsun (tüm n için). Aşağıdakilerden hangisi kesinlikle doğrudur?", opts: ["Σ aₙ yakınsarsa Σ bₙ yakınsar.", "Σ bₙ yakınsarsa Σ aₙ yakınsar.", "Σ bₙ ıraksarsa Σ aₙ ıraksar.", "Σ aₙ ıraksarsa Σ bₙ yakınsar."], a: 1, why: "Büyük olan yakınsıyorsa küçük de yakınsar. A ve C ters yönlüdür: küçüğün yakınsaması ya da büyüğün ıraksaması hiçbir şey söylemez. D ise kesinlikle yanlış: küçük ıraksarsa büyük de ıraksar." },
    { q: "aₙ, bₙ > 0 ve Σ bₙ yakınsaktır. Tabloda aₙ/bₙ değerleri limite yaklaşıyor ve limit 1/2'dir. Aşağıdakilerden hangisi doğrudur?", fig: { type: "table", head: ["n", "10", "100", "1000", "10000"], rows: [["aₙ / bₙ ≈", "0,62", "0,52", "0,502", "0,5002"]], caption: "Oran" }, opts: ["Sonuç çıkmaz çünkü L ≠ 1.", "Σ aₙ ıraksar.", "Σ aₙ = ½ · Σ bₙ.", "Σ aₙ yakınsar."], a: 3, why: "L = 1/2 pozitif ve sonlu: limit karşılaştırma gereği Σ aₙ da yakınsar. L = 1 olması gerekmez (A). Kader aynıdır ama toplam ½ ile çarpım olmak zorunda değildir; limit karşılaştırma toplamları vermez (C)." },
    { q: "Σ (4n − 1)/(n² + n) (n = 1'den ∞'a) serisi için hangisi doğrudur?", opts: ["Iraksar; bₙ = 1/n ile limit karşılaştırma, L = 4.", "Yakınsar; bₙ = 1/n² ile limit karşılaştırma.", "Yakınsar çünkü terimler 0'a gider.", "Iraksar; bₙ = 1/n² ile limit karşılaştırma, L = 4."], a: 0, why: "Baskın terim 4n/n² = 4/n: bₙ = 1/n seç. lim n(4n−1)/(n²+n) = 4, Σ 1/n ıraksar, o halde seri ıraksar. bₙ = 1/n² ile oran sonsuza gider, L = 4 olmaz (D). Terimlerin 0'a gitmesi yakınsaklık kanıtlamaz (C)." },
    { q: "Σ (2 + sin n)/n² (n = 1'den ∞'a) serisi için hangisi doğrudur?", opts: ["Iraksar çünkü 2 + sin n, 0'a gitmez.", "Hiçbir test uygulanamaz.", "Yakınsar; 0 < (2 + sin n)/n² ≤ 3/n² ve Σ 3/n² yakınsar.", "Yakınsar çünkü Σ sin n yakınsar."], a: 2, why: "1 ≤ 2 + sin n ≤ 3 olduğundan terimler pozitiftir ve 3/n²'yi geçmez; doğrudan karşılaştırma ile yakınsar. Payın 0'a gitmemesi önemsiz: asıl terim payda n² ile küçülüyor (A)." },
    { q: "Hasan şöyle yazıyor: \"1/(2ⁿ − 1) ≥ 1/2ⁿ ve Σ 1/2ⁿ yakınsar, o halde Σ 1/(2ⁿ − 1) yakınsar.\" Bu çıkarım hakkında ne söylenir?", opts: ["Doğru, çünkü Σ 1/2ⁿ yakınsar.", "Doğru, çünkü iki seri de pozitif terimli.", "Yanlış, çünkü Σ 1/2ⁿ ıraksar.", "Geçersiz: eşitsizlik yanlış yönde. Limit karşılaştırma (L = 1) ile yine de yakınsar."], a: 3, why: "Doğrudan karşılaştırmada yakınsayan büyüğün altında kalmak gerekir; burada 1/(2ⁿ − 1), 1/2ⁿ'den büyük, yani ters yön. Ancak lim [2ⁿ/(2ⁿ−1)] = 1 pozitif ve sonlu olduğundan limit karşılaştırma yakınsaklığı kanıtlar." }
  ]
};
