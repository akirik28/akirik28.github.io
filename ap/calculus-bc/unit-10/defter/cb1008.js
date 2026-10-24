/* Kitpath not defteri · cb1008 · 10.9 Mutlak ve Koşullu Yakınsaklık
   Kaynak: College Board AP Calculus BC CED, Topic 10.9. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb1008",
  amac: "Bu konu *absolute convergence* ve *conditional convergence* kavramlarını anlatıyor: terimlerin mutlak değerini alınca seri ne yapıyor? Her seriyi mutlak yakınsak, koşullu yakınsak ya da ıraksak diye sınıflamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Mutlak değer alınca seri değişir mi?",
      kisa: "Σ|aₙ| yakınsıyorsa Σaₙ de yakınsar; tersi doğru değil.",
      bloklar: [
        { tip: "hikaye", ikon: "🧾", baslik: "Net bakiye ve toplam hareket",
          metin: "Kantin hesabında sırayla +1 TL, −½ TL, +⅓ TL, −¼ TL ... hareket olsun. Net bakiye bir sayıya yaklaşır (yaklaşık 0,69 TL). Ama hareketlerin büyüklükleri 1 + ½ + ⅓ + ¼ + ... diye toplanırsa sonsuza gider. İşte fark: ==net bakiye yakınsar, toplam hareket ıraksar.==" },
        { tip: "kavramlar", kartlar: [
            { ikon: "💪", terim: "Absolute convergence", tr: "mutlak yakınsaklık", tanim: "Σ|aₙ| serisi yakınsıyorsa Σaₙ mutlak yakınsaktır. Bu durumda Σaₙ'nin kendisi de yakınsar.", ornek: "Σ(−1)ⁿ/n²: Σ1/n² yakınsar (p = 2 > 1)." },
            { ikon: "🤝", terim: "Conditional convergence", tr: "koşullu yakınsaklık", tanim: "Σaₙ yakınsar ama Σ|aₙ| ıraksarsa seri koşullu yakınsaktır. Yakınsaması, işaretlerin birbirini götürmesine bağlıdır.", ornek: "Σ(−1)ⁿ⁺¹/n: kendisi yakınsar, Σ1/n ıraksar." }
          ] },
        { tip: "formul", parcalar: [
            { t: "Σ|aₙ| yakınsar", alt: "mutlak yakınsak" }, "⇒",
            { t: "Σaₙ yakınsar", alt: "seri de yakınsak" }
          ], aciklama: "Tersi yanlış: Σaₙ yakınsayıp Σ|aₙ| ıraksayabilir. ==Bu durumun adı koşullu yakınsaklıktır.==" }
      ]
    },
    {
      baslik: "Karar sırası: önce mutlak değere bak",
      kisa: "Önce Σ|aₙ| sınanır; olmazsa serinin kendisine bakılır.",
      bloklar: [
        { tip: "adimlar", baslik: "Üç sonuçlu karar", adimlar: [
            { baslik: "Mutlak değeri al", metin: "Σ|aₙ| serisini p-serisi, geometrik seri, karşılaştırma ya da oran testiyle sına. Yakınsarsa seri mutlak yakınsaktır; iş biter." },
            { baslik: "Yoksa serinin kendisine bak", metin: "Σ|aₙ| ıraksıyorsa Σaₙ'yi alterne seri testiyle (ya da n. terim testiyle) sına." },
            { baslik: "Sonucu yaz", metin: "Σaₙ yakınsıyorsa koşullu yakınsak, ıraksıyorsa ıraksak." }
          ] },
        { tip: "tablo", baslik: "Sonuç tablosu", head: ["Σ|aₙ|", "Σaₙ", "Sonuç"],
          rows: [
            ["yakınsar", "yakınsar (kendiliğinden)", "mutlak yakınsak"],
            ["ıraksar", "yakınsar", "koşullu yakınsak"],
            ["ıraksar", "ıraksar", "ıraksak"]
          ], vurgu: 1, not: "Σ|aₙ| yakınsarken Σaₙ'nin ıraksaması mümkün değil; o satır tabloda yok. Pozitif terimli bir seride Σ|aₙ| = Σaₙ olduğundan yakınsıyorsa her zaman mutlak yakınsaktır; koşullu yakınsak olamaz." }
      ]
    },
    {
      baslik: "Üç seriyi sınıflayalım",
      kisa: "Alterne seride asıl soru: mutlak değer serisi yakınsıyor mu?",
      bloklar: [
        { tip: "ornek", baslik: "Σ (−1)ⁿ / n²   (n = 1'den başlar)", durum: "Mutlak mı, koşullu mu, ıraksak mı?",
          adimlar: [
            "Mutlak değer serisi: Σ 1/n².",
            "Bu bir p-serisi ve p = 2 > 1, yani yakınsar.",
            "Σ|aₙ| yakınsadığı için seri mutlak yakınsaktır. Alterne test gerekmez."
          ], sonuc: "mutlak yakınsak" },
        { tip: "ornek", baslik: "Σ (−1)ⁿ⁺¹ / √n   (n = 1'den başlar)", durum: "Mutlak mı, koşullu mu, ıraksak mı?",
          adimlar: [
            "Mutlak değer serisi: Σ 1/√n = Σ 1/n^(1/2). p = ½ ≤ 1 olduğundan ıraksar.",
            "Serinin kendisi: bₙ = 1/√n pozitif, azalan ve 0'a gidiyor. Alterne seri testi: yakınsar.",
            "Kendisi yakınsıyor, mutlak değeri ıraksıyor."
          ], sonuc: "koşullu yakınsak" },
        { tip: "ikili", sol: { ikon: "💪", baslik: "*Absolutely convergent*", maddeler: ["Σ|aₙ| yakınsar", "Örnek: Σ(−1)ⁿ/n³"] },
          sag: { ikon: "🤝", baslik: "*Conditionally convergent*", maddeler: ["Σaₙ yakınsar, Σ|aₙ| ıraksar", "Örnek: Σ(−1)ⁿ⁺¹/n"] },
          oyun: [
            { metin: "Σ (−1)ⁿ / n³", cevap: "sol", neden: "Σ 1/n³ bir p-serisi (p = 3 > 1): yakınsar." },
            { metin: "Σ (−1)ⁿ⁺¹ / n", cevap: "sag", neden: "Alterne harmonik seri yakınsar; Σ 1/n harmonik seri ıraksar." },
            { metin: "Σ (−1)ⁿ / (n + 1)", cevap: "sag", neden: "Σ 1/(n + 1) harmonik seriyle aynı davranır (ıraksar); alterne seri testi yakınsar." },
            { metin: "Σ (−½)ⁿ  (n = 0'dan başlar)", cevap: "sol", neden: "Mutlak değer serisi Σ (½)ⁿ geometrik, oran ½: yakınsar." }
          ] },
        { tip: "tuzak", metin: "İşaretler değişiyor diye seri yakınsamaz. Önce terimlerin 0'a gidip gitmediğine bak.", yanlis: "Σ (−1)ⁿ · n/(n + 1) alterne, o halde yakınsar.", dogru: "|aₙ| = n/(n + 1) → 1 ≠ 0. n. terim testiyle seri ıraksar; mutlak yakınsak da değildir." }
      ]
    },
    {
      baslik: "Koşullu yakınsaklığı grafikte gör",
      kisa: "Kısmi toplamlar zikzak çizerek tek bir sayıya oturur.",
      bloklar: [
        { tip: "grafik", baslik: "Σ1/n ile Σ(−1)ⁿ⁺¹/n: ilk 10 kısmi toplam", xlabel: "n (terim sayısı)", ylabel: "Sₙ", xmax: 11, ymax: 3,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }],
          ogeler: [
            { id: "h", tip: "egri", renk: 1, etiket: "Σ1/n", noktalar: [[1, 1], [2, 1.5], [3, 1.833], [4, 2.083], [5, 2.283], [6, 2.45], [7, 2.593], [8, 2.718], [9, 2.829], [10, 2.929]], gizli: true },
            { id: "a", tip: "egri", renk: 0, etiket: "alterne", noktalar: [[1, 1], [2, 0.5], [3, 0.833], [4, 0.583], [5, 0.783], [6, 0.617], [7, 0.76], [8, 0.635], [9, 0.746], [10, 0.646]], gizli: true },
            { id: "l", tip: "cizgi", renk: 2, kesik: true, etiket: "ln 2 ≈ 0,69", from: [0, 0.693], to: [6, 0.693], gizli: true }
          ],
          durumlar: [
            { metin: "Önce mutlak değer serisi Σ1/n: kısmi toplamlar durmadan yükselir, ıraksar.", goster: ["h"] },
            { metin: "Şimdi aynı terimler, işaretler sırayla değişirken: toplam sıçrar ama sıçramalar küçülür.", goster: ["a"] },
            { metin: "Zikzak tek bir sayıya oturuyor: ln 2 ≈ 0,69. Seri yakınsıyor ama mutlak değil; koşullu.", goster: ["l"] }
          ] },
        { tip: "not", metin: "Koşullu yakınsaklık nazik bir dengedir: pozitif ve negatif terimler birbirini götürdüğü için seri yakınsar. Mutlak değer alıp bu götürmeyi bozarsan toplam büyür." }
      ]
    },
    {
      baslik: "Oran testi mutlak yakınsaklığı yakalar",
      kisa: "L = lim|aₙ₊₁/aₙ|: L < 1 mutlak yakınsak, L > 1 ıraksak.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "L < 1", alt: "mutlak yakınsak" }, "·",
            { t: "L > 1", alt: "ıraksak" }, "·",
            { t: "L = 1", alt: "sonuçsuz" }
          ], aciklama: "L = lim |aₙ₊₁ / aₙ| (n → ∞). Mutlak değer içerdiği için L < 1 sonucu doğrudan ==mutlak yakınsaklık== verir. L = 1 çıkarsa başka teste geç." },
        { tip: "ornek", baslik: "Σ (−2)ⁿ / n!   (n = 1'den başlar)", durum: "Mutlak mı, koşullu mu, ıraksak mı?",
          adimlar: [
            "|aₙ₊₁ / aₙ| = (2ⁿ⁺¹ / (n + 1)!) · (n! / 2ⁿ) = 2 / (n + 1).",
            "n → ∞ iken 2 / (n + 1) → 0, yani L = 0 < 1.",
            "Oran testi mutlak yakınsaklık verir; ayrıca alterne test gerekmez."
          ], sonuc: "mutlak yakınsak" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Σ|aₙ| yakınsıyorsa seri mutlak yakınsaktır ve Σaₙ de yakınsar.",
            "Σaₙ yakınsayıp Σ|aₙ| ıraksıyorsa seri koşullu yakınsaktır.",
            "Karar sırası: önce Σ|aₙ| (p-serisi, geometrik, karşılaştırma, oran). Yakınsamazsa Σaₙ'ye alterne seri testi ya da n. terim testi.",
            "Yalnız üç sonuç var: mutlak yakınsak, koşullu yakınsak, ıraksak.",
            "Alterne harmonik Σ(−1)ⁿ⁺¹/n koşullu yakınsaktır (toplamı ln 2); Σ(−1)ⁿ/n² mutlak yakınsaktır.",
            "Terimler 0'a gitmiyorsa seri ıraksar; alterne olması kurtarmaz.",
            "Oran testi: L < 1 mutlak yakınsak, L > 1 ıraksak, L = 1 sonuçsuz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Σ (−1)ⁿ / n²  (n = 1'den başlar) serisi için hangisi doğrudur?",
      opts: ["Mutlak yakınsaktır, çünkü Σ 1/n² yakınsar", "Koşullu yakınsaktır, çünkü alterne seri testi uygulanır", "Iraksaktır, çünkü terimlerin işareti değişir", "Hiçbir test sonuç vermez"], a: 0,
      why: "Mutlak değer serisi Σ 1/n² bir p-serisidir (p = 2 > 1) ve yakınsar; dolayısıyla seri mutlak yakınsaktır. B şıkkı çekicidir ama koşullu yakınsaklık için Σ|aₙ|'nin ıraksaması gerekir; burada yakınsıyor." },
    { q: "Σ (−1)ⁿ⁺¹ / √n  (n = 1'den başlar) serisi hakkında hangisi doğrudur?",
      opts: ["Mutlak yakınsaktır", "Iraksaktır, çünkü Σ 1/√n ıraksar", "Koşullu yakınsaktır", "Alterne seri testi uygulanamaz"], a: 2,
      why: "1/√n pozitif, azalan ve 0'a gider: alterne seri testiyle seri yakınsar. Σ|aₙ| = Σ 1/n^(1/2) ise p = ½ ≤ 1 olduğundan ıraksar. Kendisi yakınsayıp mutlak değeri ıraksadığı için koşullu yakınsaktır. B şıkkı, mutlak değer serisinin ıraksamasından serinin ıraksadığını sanma hatasıdır." },
    { q: "Aşağıdaki tabloda bir serinin iki testi özetlenmiştir. Serinin sınıfı nedir?",
      fig: { type: "table", head: ["Test", "Sonuç"], rows: [["Σ|aₙ| (karşılaştırma testi)", "ıraksar"], ["Σaₙ (alterne seri testi)", "yakınsar"]], caption: "Bir serinin iki testi" },
      opts: ["Mutlak yakınsak", "Iraksak", "Sonsuz toplamı yoktur", "Koşullu yakınsak"], a: 3,
      why: "Σaₙ yakınsıyor ama Σ|aₙ| ıraksıyor: tanım gereği koşullu yakınsaktır. A şıkkı çekicidir ama mutlak yakınsaklık için Σ|aₙ|'nin yakınsaması şarttır." },
    { q: "Σ (−2)ⁿ / n!  serisine oran testi uygulandığında L = lim |aₙ₊₁ / aₙ| kaç çıkar ve sonuç nedir?",
      opts: ["L = 2, seri ıraksar", "L = 1, test sonuç vermez", "L = 0, seri mutlak yakınsar", "L = ∞, seri ıraksar"], a: 2,
      why: "|aₙ₊₁ / aₙ| = 2 / (n + 1) → 0 < 1 olduğundan seri mutlak yakınsaktır. A şıkkı, 2ⁿ'in büyümesine bakıp n!'in daha hızlı büyüdüğünü unutmaktan gelir." },
    { q: "Hangi seri koşullu yakınsaktır?",
      opts: ["Σ (−1)ⁿ / n³", "Σ (−1)ⁿ / (n + 1)", "Σ (−1)ⁿ · n / (n + 1)", "Σ (−⅓)ⁿ"], a: 1,
      why: "Σ (−1)ⁿ/(n + 1): alterne test yakınsar, mutlak değer serisi Σ 1/(n + 1) harmonik gibi ıraksar: koşullu. A ve D mutlak yakınsaktır (p = 3; geometrik, oran ⅓). C'de terimler 0'a gitmez, seri ıraksar; alterne olması C'yi kurtarmaz." }
  ]
};
