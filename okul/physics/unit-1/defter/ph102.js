/* Kitora not defteri · ph102 · 1.2 İvme ve Hız-Zaman Grafikleri
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Physics · Unit 1) + MEB 10. sınıf Fizik. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph102",
  amac: "Bu konu hızın zamanla değişmesini, yani *acceleration* (ivme) kavramını anlatıyor. İvmeyi hesaplamayı, hızlanma ile yavaşlamayı ayırmayı ve hız-zaman ile konum-zaman grafiklerini ivmeyle birlikte okumayı öğreneceksin.",
  bolumler: [
    {
      baslik: "İvme: hız ne kadar hızlı değişiyor?",
      kisa: "İvme, hızdaki değişimin süreye oranıdır; birimi m/s².",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Acceleration", tr: "ivme (a)", tanim: "Hızın birim zamandaki değişimi. Vektördür. a = 2 m/s² demek, hızın her saniye 2 m/s değişmesi demektir.", ornek: "Bisikletin hızı her saniye 1 m/s artıyorsa a = 1 m/s²." },
            { ikon: "🔁", terim: "Uniform acceleration", tr: "sabit ivme", tanim: "İvmenin zamanla değişmediği hareket. Hız eşit sürelerde eşit miktarda değişir; v–t grafiği düz bir doğrudur.", ornek: "Serbest düşen taşın hızı her saniye 10 m/s artar." },
            { ikon: "🏁", terim: "Initial / final velocity", tr: "ilk hız / son hız", tanim: "v₀ hareketin başındaki, v sonundaki hızdır. Hız değişimi Δv = v − v₀.", ornek: "v₀ = 0 ve v = 20 m/s ise Δv = 20 m/s." }
          ] },
        { tip: "formul", parcalar: [
            { t: "a", alt: "ivme (m/s²)" }, "=",
            { t: "v − v₀", alt: "hız değişimi (m/s)" }, "÷",
            { t: "t", alt: "süre (s)" }
          ], aciklama: "Önce artı yönü seç. Hız artı yönde artıyorsa a > 0, azalıyorsa a < 0 çıkar." },
        { tip: "ornek", baslik: "Kalkış ve fren",
          durum: "Okul servisi durgun halden kalkıp 5 s sonra 20 m/s hıza ulaşıyor. Sonra fren yapıp 4 s'de duruyor. Her aşamanın ivmesini bul.",
          adimlar: [
            "Hızlanma: a = (20 − 0) ÷ 5 = +4 m/s².",
            "Fren: a = (0 − 20) ÷ 4 = −5 m/s².",
            "Eksi işaret, ivmenin hareket yönüne ters olduğunu ve hızın azaldığını gösterir."
          ],
          sonuc: "İvmeler +4 m/s² ve −5 m/s². Sınavda böyle yaz: *The acceleration is the change in velocity divided by the time interval.*" }
      ]
    },
    {
      baslik: "Hızlanma mı, yavaşlama mı?",
      kisa: "Hız ve ivme aynı yöndeyse hızlanır, zıt yöndeyse yavaşlar.",
      bloklar: [
        { tip: "tablo", baslik: "Hız ve ivmenin işaretine bak", head: ["Hız (v)", "İvme (a)", "Hareket", "Sınavda böyle yaz"],
          rows: [
            ["+", "+", "Hızlanıyor (*speeding up*)", "*v and a have the same direction, so the speed increases.*"],
            ["+", "−", "Yavaşlıyor (*slowing down*)", "*v and a have opposite directions, so the speed decreases.*"],
            ["−", "−", "Hızlanıyor (eksi yönde)", "*Both point in the negative direction, so the object speeds up.*"],
            ["−", "+", "Yavaşlıyor (eksi yönde)", "*a is opposite to v, so the object slows down.*"]
          ],
          not: "Önemli olan işaretin kendisi değil, ==hız ile ivmenin yön ilişkisidir==." },
        { tip: "ikili", sol: { ikon: "⏩", baslik: "Hızlanıyor", maddeler: ["v ve a aynı yönde", "Sürat artar"] },
          sag: { ikon: "⏪", baslik: "Yavaşlıyor", maddeler: ["v ve a zıt yönde", "Sürat azalır"] },
          oyun: [
            { metin: "Doğuya giden araba, ivmesi de doğuya.", cevap: "sol", neden: "Aynı yön: hızlanır." },
            { metin: "Doğuya giden araba, ivmesi batıya.", cevap: "sag", neden: "Zıt yön: yavaşlar, durabilir." },
            { metin: "Yukarı fırlatılan top yükselirken (ivme aşağı).", cevap: "sag", neden: "Hız yukarı, ivme aşağı: zıt yön, top yavaşlar." },
            { metin: "Aşağı düşen taş (hız aşağı, ivme aşağı).", cevap: "sol", neden: "Hız ve ivme aynı yönde: hızlanır." }
          ] },
        { tip: "tuzak", metin: "İvmenin eksi çıkması tek başına cismin yavaşladığını söylemez.",
          yanlis: "a negatifse cisim yavaşlıyordur.",
          dogru: "Yavaşlamak için v ile a zıt işaretli olmalı. v de negatifse ve a negatifse cisim eksi yönde ==hızlanır==." }
      ]
    },
    {
      baslik: "Hız-zaman grafiğinde eğim ivmedir",
      kisa: "v–t grafiğinde çizginin eğimi ivmeyi verir.",
      bloklar: [
        { tip: "grafik", baslik: "Hız-zaman (v–t) grafiğinde eğim", xlabel: "t (s)", ylabel: "v (m/s)", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "L1", tip: "cizgi", renk: 0, from: [0, 0], to: [5, 10], etiket: "2 m/s²" },
            { id: "P", tip: "nokta", renk: 0, x: 3, y: 6, etiket: "3 s, 6 m/s", kilavuz: true, gizli: true },
            { id: "L2", tip: "cizgi", renk: 1, from: [0, 0], to: [2.5, 10], etiket: "4 m/s²", gizli: true },
            { id: "L3", tip: "cizgi", renk: 2, from: [0, 4], to: [9, 4], etiket: "a = 0", gizli: true },
            { id: "L4", tip: "cizgi", renk: 3, from: [0, 8], to: [8, 0], etiket: "−1 m/s²", gizli: true }
          ],
          durumlar: [
            { metin: "Durgun halden kalkan araç: hız her saniye 2 m/s artıyor. Çizgi düz ve yukarı doğru.", goster: ["L1"] },
            { metin: "t = 3 s'de v = 6 m/s. Eğim = Δv ÷ Δt = 6 ÷ 3 = 2 m/s². ==Eğim ivmeyi verir.==", goster: ["P"] },
            { metin: "Çizgi daha dikse ivme daha büyüktür: 10 m/s'ye 2,5 s'de çıkan araç 4 m/s² ivmeye sahip.", gizle: ["P"], goster: ["L2"] },
            { metin: "Yatay çizgi: hız değişmiyor, eğim 0, ivme 0. Araç sabit hızla gidiyor.", gizle: ["L1", "L2"], goster: ["L3"] },
            { metin: "Aşağı inen çizgi: eğim negatif. 8 m/s'den başlayıp 8 s'de duran araç: a = (0 − 8) ÷ 8 = −1 m/s².", gizle: ["L3"], goster: ["L4"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: eğim", metin: "*The slope of the velocity–time graph gives the acceleration.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: yatay çizgi", metin: "*A horizontal line means zero acceleration, so the velocity is constant.*" }
          ] }
      ]
    },
    {
      baslik: "Hız-zaman grafiğinde alan yer değiştirmedir",
      kisa: "Çizginin altındaki alan yer değiştirmedir; dikdörtgen ve üçgene ayır.",
      bloklar: [
        { tip: "grafik", baslik: "Eğik çizginin altındaki alan", xlabel: "t (s)", ylabel: "v (m/s)", xmax: 8, ymax: 8,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "R", tip: "alan", renk: 1, noktalar: [[0, 0], [0, 0], [0, 2], [0, 2]], gizli: true },
            { id: "T", tip: "alan", renk: 2, noktalar: [[0, 2], [0, 2], [0, 2]], gizli: true },
            { id: "L", tip: "cizgi", renk: 0, from: [0, 2], to: [4, 6], etiket: "a = 1 m/s²" },
            { id: "tR", tip: "yazi", x: 2, y: 1, metin: "2 × 4 = 8 m", gizli: true },
            { id: "tT", tip: "yazi", x: 3, y: 3, metin: "½ × 4 × 4 = 8 m", gizli: true },
            { id: "tS", tip: "yazi", x: 6, y: 3.5, metin: "Δx = 16 m", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç hızı 2 m/s, ivme 1 m/s²: 4 s sonra hız 6 m/s olur.", goster: ["L"] },
            { metin: "Önce dikdörtgen: 2 m/s × 4 s = 8 m. Hızlanma olmasaydı alınacak yol budur.", goster: ["R", "tR"], set: { R: { noktalar: [[0, 0], [4, 0], [4, 2], [0, 2]] } } },
            { metin: "Üstteki üçgen hızlanmadan gelen fazladır: ½ × 4 × 4 = 8 m.", goster: ["T", "tT"], set: { T: { noktalar: [[0, 2], [4, 2], [4, 6]] } } },
            { metin: "Toplam alan 8 + 8 = 16 m, yer değiştirmedir. Yamuk olarak da: (2 + 6) ÷ 2 × 4 = 16 m.", goster: ["tS"] }
          ] },
        { tip: "tuzak", metin: "Çizgi eksenin altına inerse (hız eksi yönde) o bölümün alanı negatif yer değiştirmedir.",
          yanlis: "Alanların hepsi toplanır; sonuç her zaman alınan yoldur.",
          dogru: "Alan işaretiyle toplanırsa ==yer değiştirme==; yol istenirse alanların mutlak değerleri toplanır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: alan", metin: "*The displacement is the area between the graph and the time axis.*" }
          ] }
      ]
    },
    {
      baslik: "Parçalı hareket: üç aşamalı grafik",
      kisa: "Her aşamanın alanını ayrı bul, sonra topla; hız = yer değiştirme ÷ süre.",
      bloklar: [
        { tip: "grafik", baslik: "Hızlan, sabit hızla git, yavaşla", xlabel: "t (s)", ylabel: "v (m/s)", xmax: 9, ymax: 6,
          xticks: [{ v: 2, label: "2" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          yticks: [{ v: 4, label: "4" }],
          ogeler: [
            { id: "A1", tip: "alan", renk: 0, noktalar: [[0, 0], [0, 0], [0, 0]], gizli: true },
            { id: "A2", tip: "alan", renk: 1, noktalar: [[2, 0], [2, 0], [2, 4], [2, 4]], gizli: true },
            { id: "A3", tip: "alan", renk: 2, noktalar: [[6, 0], [6, 0], [6, 0]], gizli: true },
            { id: "s1", tip: "cizgi", renk: 0, from: [0, 0], to: [2, 4], etiket: "+2" },
            { id: "s2", tip: "cizgi", renk: 1, from: [2, 4], to: [6, 4], etiket: "0", gizli: true },
            { id: "s3", tip: "cizgi", renk: 2, from: [6, 4], to: [8, 0], etiket: "−2", gizli: true },
            { id: "w1", tip: "yazi", x: 1.5, y: 1, metin: "4 m", gizli: true },
            { id: "w2", tip: "yazi", x: 4, y: 2, metin: "16 m", gizli: true },
            { id: "w3", tip: "yazi", x: 6.5, y: 1, metin: "4 m", gizli: true },
            { id: "w4", tip: "yazi", x: 4, y: 5.2, metin: "toplam 24 m", gizli: true }
          ],
          durumlar: [
            { metin: "Servis aracı: 0–2 s hızlanıyor (a = +2), 2–6 s sabit hızda (a = 0), 6–8 s duruncaya kadar yavaşlıyor (a = −2 m/s²).", goster: ["s2", "s3"] },
            { metin: "0–2 s üçgen: ½ × 2 × 4 = 4 m.", goster: ["A1", "w1"], set: { A1: { noktalar: [[0, 0], [2, 0], [2, 4]] } } },
            { metin: "2–6 s dikdörtgen: 4 × 4 = 16 m.", goster: ["A2", "w2"], set: { A2: { noktalar: [[2, 0], [6, 0], [6, 4], [2, 4]] } } },
            { metin: "6–8 s üçgen: ½ × 2 × 4 = 4 m.", goster: ["A3", "w3"], set: { A3: { noktalar: [[6, 0], [8, 0], [6, 4]] } } },
            { metin: "Toplam yer değiştirme 4 + 16 + 4 = 24 m. Ortalama hız = 24 ÷ 8 = 3 m/s.", goster: ["w4"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: parçalı hareket", metin: "*We divide the graph into a triangle, a rectangle and a triangle, then add the areas.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: ortalama hız", metin: "*The average velocity is the total displacement divided by the total time.*" }
          ] }
      ]
    },
    {
      baslik: "Konum-zaman grafiği eğri olur",
      kisa: "İvmeli harekette x–t grafiği paraboldür; eğim büyüdükçe hız artar.",
      bloklar: [
        { tip: "grafik", baslik: "Hızlanan cismin x–t grafiği", xlabel: "t (s)", ylabel: "x (m)", xmax: 4, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "C", tip: "egri", renk: 0, noktalar: [[0, 0], [0.5, 0.25], [1, 1], [1.5, 2.25], [2, 4], [2.5, 6.25], [3, 9]], etiket: "x" },
            { id: "P1", tip: "nokta", renk: 1, x: 1, y: 1, etiket: "t = 1 s", kilavuz: true, gizli: true },
            { id: "T1", tip: "cizgi", renk: 1, from: [0.5, 0], to: [2, 3], etiket: "eğim 2", gizli: true },
            { id: "P3", tip: "nokta", renk: 2, x: 3, y: 9, etiket: "t = 3 s", kilavuz: true, gizli: true },
            { id: "T3", tip: "cizgi", renk: 2, from: [2, 3], to: [3.1, 9.6], etiket: "eğim 6", gizli: true }
          ],
          durumlar: [
            { metin: "Durgun halden 2 m/s² ile hızlanan cisim: x = ½·a·t² = t². Eğri yukarı doğru bükülüyor.", goster: ["C"] },
            { metin: "t = 1 s'de eğriye çizilen teğetin eğimi 2: anlık hız 2 m/s.", goster: ["P1", "T1"] },
            { metin: "t = 3 s'de teğet çok daha dik: hız 6 m/s. Eğim büyüyor, yani hız artıyor.", goster: ["P3", "T3"] }
          ] },
        { tip: "tablo", baslik: "Sabit ivmeli harekette üç grafik", head: ["Grafik", "Şekli", "Sınavda böyle yaz"],
          rows: [
            ["a–t", "Yatay doğru; alan = hız değişimi (Δv)", "*The a–t graph is a horizontal line; its area gives Δv.*"],
            ["v–t", "Eğimli doğru; eğim = a, alan = Δx", "*The v–t graph is a straight line; its slope is the acceleration.*"],
            ["x–t", "Parabol; teğetin eğimi = anlık hız", "*The x–t graph is a parabola; the slope increases as the object speeds up.*"]
          ] },
        { tip: "tuzak", metin: "x–t grafiğindeki parabol, cismin eğri bir yolda gittiğini göstermez.",
          yanlis: "Parabol çizen x–t grafiği, cismin yörüngesinin parabol olduğunu gösterir.",
          dogru: "Cisim düz bir yolda gidiyor olabilir; grafik yalnızca konumun ==zamanla== nasıl değiştiğini çizer." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "İvme a = (v − v₀) ÷ t; birimi m/s²; vektördür.",
            "Hız ve ivme aynı yöndeyse hızlanma, zıt yöndeyse yavaşlama; işaret tek başına yetmez.",
            "v–t grafiğinde eğim ivmedir; yatay çizgi a = 0 demektir.",
            "v–t grafiğinde alan yer değiştirmedir; parçalı harekette üçgen ve dikdörtgen alanlarını topla.",
            "Ortalama hız = toplam yer değiştirme ÷ toplam süre.",
            "Sabit ivmede a–t yatay doğru, v–t eğimli doğru, x–t paraboldür.",
            "x–t parabolünde teğetin eğimi anlık hızdır; parabol eğri yol demek değildir.",
            "Sınavda grafiği sözle yorumla: *The slope gives the acceleration; the area gives the displacement.*"
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir motosiklet 4 s içinde hızını 6 m/s'den 18 m/s'ye çıkarıyor. İvmesi kaç m/s²'dir?",
      opts: ["3", "4,5", "6", "12"], a: 0,
      why: "a = (v − v₀) ÷ t = (18 − 6) ÷ 4 = 3 m/s². En çekici yanlış B: ilk hızı unutup 18 ÷ 4 = 4,5 yazmak." },
    { q: "Grafik K ve L araçlarının hız-zaman grafiğidir. Hangisi doğrudur?",
      fig: { type: "graph", xlabel: "t (s)", ylabel: "v (m/s)", xmax: 8, ymax: 9,
        lines: [{ from: [0, 0], to: [4, 8], label: "K" }, { from: [0, 6], to: [6, 0], label: "L" }],
        xticks: [{ v: 4, label: "4" }, { v: 6, label: "6" }], yticks: [{ v: 6, label: "6" }, { v: 8, label: "8" }] },
      opts: ["İki araç da hızlanıyor.", "K'nin ivmesi 2 m/s², L'nin ivmesi −1 m/s²'dir.", "L'nin ivmesi K'ninkinden büyüktür.", "K ve L'nin ivmeleri eşittir."], a: 1,
      why: "K'nin eğimi (8 − 0) ÷ 4 = +2 m/s², L'nin eğimi (0 − 6) ÷ 6 = −1 m/s². L hızı azaldığı için yavaşlıyor (A yanlış). C yanlış: L'nin ivmesinin büyüklüğü 1, K'ninki 2." },
    { q: "Bir aracın hız-zaman grafiği şekildeki gibidir. Aracın 0–4 s arasındaki yer değiştirmesi kaç metredir?",
      fig: { type: "graph", xlabel: "t (s)", ylabel: "v (m/s)", xmax: 6, ymax: 9,
        lines: [{ from: [0, 3], to: [4, 7] }],
        xticks: [{ v: 4, label: "4" }], yticks: [{ v: 3, label: "3" }, { v: 7, label: "7" }] },
      opts: ["12 m", "28 m", "20 m", "40 m"], a: 2,
      why: "Alan yamuktur: (3 + 7) ÷ 2 × 4 = 20 m. A ilk hızla (3 × 4), B son hızla (7 × 4) hesap yapar; D iki hızı toplayıp süreyle çarpar ve ikiye bölmeyi unutur." },
    { q: "Doğuyu artı yön alalım. Bir cismin hızı −8 m/s, ivmesi −2 m/s²'dir. Cisim için hangisi doğrudur?",
      opts: ["Doğuya doğru yavaşlıyor.", "Batıya doğru yavaşlıyor.", "Duruyor.", "Batıya doğru hızlanıyor."], a: 3,
      why: "Hız ve ivme aynı işaretli (ikisi de batı yönünde): cisim batıya doğru hızlanır; her saniye hız 2 m/s artar (−8, −10, −12…). B en çekici yanlış: ivme negatif diye yavaşlıyor sanmak." },
    { q: "Durgun halden başlayan bir cismin konumu tabloda verilmiştir. Hareket için ne söylenebilir?",
      fig: { type: "table", head: ["t (s)", "0", "1", "2", "3"], rows: [["x (m)", "0", "2", "8", "18"]] },
      opts: ["Sabit hızla gidiyor, çünkü konum artıyor.", "Hızlanıyor, çünkü her saniyede aldığı yol artıyor (2, 6, 10 m).", "Yavaşlıyor, çünkü konum farkı küçülüyor.", "Duruyor, çünkü ivmesi sıfırdır."], a: 1,
      why: "Ardışık saniyelerdeki yer değiştirmeler 2, 6 ve 10 m: hız sürekli artıyor, yani cisim hızlanıyor (x–t grafiği yukarı bükülen parabol). A yanlış: sabit hızda her saniyedeki yer değiştirme eşit olurdu." }
  ]
};
