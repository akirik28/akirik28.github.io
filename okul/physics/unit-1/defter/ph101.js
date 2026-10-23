/* Kitpath not defteri · ph101 · 1.1 Sabit Hızlı Hareket
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Physics · Unit 1) + MEB 10. sınıf Fizik. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph101",
  amac: "Bu konu düz yolda sabit hızla giden cismin hareketini anlatıyor. Yol ile yer değiştirmenin, sürat ile hızın farkını; konum-zaman ve hız-zaman grafiklerinde eğim ile alanın ne anlama geldiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Konum, yol ve yer değiştirme",
      kisa: "Yol gidilen toplam uzunluktur; yer değiştirme ilk ve son konum farkıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📍", terim: "Position", tr: "konum (x)", tanim: "Cismin, seçtiğimiz başlangıç noktasına (*origin*) göre yeri. Orijin ve işaretli eksen birlikte *coordinate system* (koordinat sistemi) oluşturur; yön artı ya da eksi işaretle verilir.", ornek: "Kantin x = 0 ise sınıf doğuda x = +60 m." },
            { ikon: "🔵", terim: "Particle model", tr: "parçacık modeli", tanim: "Hareket eden cismi, bütün kütlesi tek bir noktada toplanmış gibi düşünen basitleştirme.", ornek: "Koridorda yürüyen Ada'yı tek bir nokta olarak çizeriz." },
            { ikon: "🛤️", terim: "Trajectory", tr: "yörünge", tanim: "Cismin hareketi boyunca izlediği yolun çizgisi.", ornek: "Düz koridorda yörünge düz bir çizgidir." },
            { ikon: "👣", terim: "Distance", tr: "alınan yol", tanim: "Hareket boyunca gidilen toplam uzunluk. ==Skaler==dir: yönü yoktur ve hiçbir zaman azalmaz.", ornek: "Koridorda 60 m ileri, 20 m geri gidersen yol 80 m." },
            { ikon: "➡️", terim: "Displacement", tr: "yer değiştirme (Δx)", tanim: "Son konum eksi ilk konum: Δx = x₂ − x₁. ==Vektör==dür: büyüklüğü ve yönü vardır.", ornek: "Aynı yürüyüşte yer değiştirme 40 m doğu." }
          ] },
        { tip: "ornek", baslik: "Kantinden sınıfa yürüyüş",
          durum: "Ada kantinden (x = 0) doğuya 60 m yürüyüp sınıfa gidiyor. Çantasını unuttuğunu fark edip batıya 20 m geri dönüyor. Doğuyu artı yön al.",
          adimlar: [
            "Yol: 60 + 20 = 80 m. Yollar yöne bakmadan toplanır.",
            "Konumlar: x₁ = 0 ve x₂ = 60 − 20 = +40 m.",
            "Yer değiştirme: Δx = x₂ − x₁ = 40 − 0 = +40 m (doğu)."
          ],
          sonuc: "Yol 80 m, yer değiştirme 40 m doğu. Sınavda böyle yaz: *The distance is 80 m, but the displacement is 40 m east.*" },
        { tip: "ikili", sol: { ikon: "🔢", baslik: "*Scalar* (skaler)", maddeler: ["Yalnız büyüklüğü var", "Örnek: yol, sürat"] },
          sag: { ikon: "🧭", baslik: "*Vector* (vektör)", maddeler: ["Büyüklük ve yön birlikte", "Örnek: yer değiştirme, hız"] },
          oyun: [
            { metin: "Bisikletle 12 km yol gittik.", cevap: "sol", neden: "Yön yok, yalnız toplam uzunluk: yol skalerdir." },
            { metin: "Otobüs doğuya 20 m/s hızla gidiyor.", cevap: "sag", neden: "Büyüklüğün yanında yön de var: hız vektördür." },
            { metin: "Ada'nın yer değiştirmesi 300 m kuzeybatı.", cevap: "sag", neden: "Yer değiştirme yönlüdür: vektör." },
            { metin: "Yolculuk boyunca ortalama sürat 50 km/h.", cevap: "sol", neden: "Sürat yalnız büyüklüktür: skaler." }
          ] }
      ]
    },
    {
      baslik: "Sürat ve hız",
      kisa: "Sürat yolu, hız yer değiştirmeyi süreye böler.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "v", alt: "ortalama hız (m/s)" }, "=",
            { t: "Δx", alt: "yer değiştirme (m)" }, "÷",
            { t: "Δt", alt: "süre (s)" }
          ], aciklama: "Ortalama sürat için paya yer değiştirme yerine toplam yol yazılır. Süre aralığı Δt = t₂ − t₁ her zaman pozitiftir. Birim dönüşümü: km/h → m/s için 3,6'ya böl (72 km/h = 20 m/s; 15 m/s = 54 km/h); cm/s → m/s için 100'e böl (27 cm/s = 0,27 m/s)." },
        { tip: "ornek", baslik: "Aynı yürüyüşün sürati ve hızı",
          durum: "Ada'nın kantinden sınıfa gidip çanta için geri dönmesi (60 m ileri, 20 m geri) toplam 20 s sürdü.",
          adimlar: [
            "Ortalama sürat = yol ÷ süre = 80 ÷ 20 = 4 m/s.",
            "Ortalama hız = yer değiştirme ÷ süre = 40 ÷ 20 = 2 m/s (doğu).",
            "Hız yönlü olduğu için \"doğu\" demeyi unutma."
          ],
          sonuc: "Sürat 4 m/s, hız 2 m/s doğu. Sınavda böyle yaz: *The average speed is 4 m/s, and the average velocity is 2 m/s east.*" },
        { tip: "ornek", baslik: "Yolun yarısı yavaş, yarısı hızlı",
          durum: "Bir cisim aynı yönde gidiyor. Yer değiştirmesinin yarısını 6 m/s, kalan yarısını 12 m/s ile alıyor. Ortalama hızı kaçtır?",
          adimlar: [
            "Toplam yer değiştirmeye 2d diyelim; her yarı d kadar.",
            "Süreler: t₁ = d ÷ 6 ve t₂ = d ÷ 12. Toplam süre = d/6 + d/12 = 3d/12 = d/4.",
            "Ortalama hız = 2d ÷ (d/4) = 8 m/s. İki hızın aritmetik ortalaması olan 9 m/s değil."
          ],
          sonuc: "8 m/s. Yavaş kısımda daha çok zaman geçtiği için ortalama, hızlı kısma değil yavaş kısma daha yakındır. Sınavda böyle yaz: *The average velocity is the total displacement divided by the total time.*" },
        { tip: "tuzak", metin: "Pistte tam tur koşan birinin yer değiştirmesi sıfırdır; bu yüzden ortalama hızı da sıfırdır. Ama yol sıfır değildir, yani ortalama sürat sıfır olmaz.",
          yanlis: "Ortalama sürat ile ortalama hız aynı şeydir.",
          dogru: "Hızın büyüklüğü her zaman süratten küçük ya da ona eşittir; eşitlik yalnız yön değiştirmeyen düz harekette olur." }
      ]
    },
    {
      baslik: "Sabit hızlı hareket ve x = x₀ + v·t",
      kisa: "Hız değişmiyorsa cisim eşit sürelerde eşit yer değiştirir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "x", alt: "son konum (m)" }, "=",
            { t: "x₀", alt: "ilk konum (m)" }, "+",
            { t: "v", alt: "hız (m/s)" }, "×",
            { t: "t", alt: "süre (s)" }
          ], aciklama: "Artı yönü seç: hız o yöndeyse +, ters yöndeyse − yazılır. Sabit hızda anlık hız ile ortalama hız aynıdır." },
        { tip: "tablo", baslik: "Bisiklet: x₀ = 10 m, v = 5 m/s", head: ["t (s)", "0", "1", "2", "3", "4"],
          rows: [["x (m)", "10", "15", "20", "25", "30"], ["Δx (m)", "—", "+5", "+5", "+5", "+5"]],
          not: "Her saniyede aynı +5 m: ==sabit hızın== tanımı budur." },
        { tip: "ornek", baslik: "Servis aracı kaç metre gider?",
          durum: "72 km/h sabit hızla giden servis aracı 15 s'de ne kadar yer değiştirir? (x₀ = 0)",
          adimlar: [
            "Birimi çevir: 72 ÷ 3,6 = 20 m/s.",
            "x = x₀ + v·t = 0 + 20 × 15 = 300 m."
          ],
          sonuc: "300 m. Sınavda böyle yaz: *Since the velocity is constant, we can use x = x₀ + vt.*" }
      ]
    },
    {
      baslik: "Konum-zaman grafiği: eğim hızdır",
      kisa: "x–t grafiğinde eğim hızı verir; çizgi ne kadar dikse hız o kadar büyüktür.",
      bloklar: [
        { tip: "grafik", baslik: "Konum-zaman (x–t) grafiği", xlabel: "t (s)", ylabel: "x (m)", xmax: 11, ymax: 10,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "A", tip: "cizgi", renk: 0, from: [0, 0], to: [9, 9], etiket: "1 m/s" },
            { id: "P", tip: "nokta", renk: 0, x: 6, y: 6, etiket: "6 s, 6 m", kilavuz: true, gizli: true },
            { id: "B", tip: "cizgi", renk: 1, from: [0, 0], to: [5, 10], etiket: "2 m/s", gizli: true },
            { id: "C", tip: "cizgi", renk: 2, from: [0, 4], to: [9, 4], etiket: "0 m/s", gizli: true },
            { id: "D", tip: "cizgi", renk: 3, from: [0, 9], to: [9, 0], etiket: "−1 m/s", gizli: true }
          ],
          durumlar: [
            { metin: "Ada her saniye 1 m yürüyor. Çizgi düz: ==hız sabit==.", goster: ["A"] },
            { metin: "t = 6 s'de x = 6 m. Eğim = Δx ÷ Δt = 6 ÷ 6 = 1 m/s: eğim hızın kendisi.", goster: ["P"] },
            { metin: "Mert 2 m/s ile koşuyor: çizgisi daha dik. Daha dik çizgi = daha büyük hız.", gizle: ["P"], goster: ["B"] },
            { metin: "Yatay çizgi: konum değişmiyor, eğim 0. Cisim duruyor.", gizle: ["A", "B"], goster: ["C"] },
            { metin: "Aşağı inen çizgi: eğim negatif. Cisim eksi yönde, yani geri geri gidiyor.", gizle: ["C"], goster: ["D"] }
          ] },
        { tip: "tuzak", metin: "Grafikte çizginin yukarıda olması, cismin daha uzakta olduğunu söyler; daha hızlı olduğunu değil.",
          yanlis: "x–t grafiğinde çizgisi yukarıda olan cisim daha hızlıdır.",
          dogru: "Hızı çizginin yüksekliği değil ==eğimi== (dikliği) belirler. Paralel çizgilerin hızı aynıdır." },
        { tip: "tablo", baslik: "Grafik yorumlarken", head: ["Ne görüyorsun?", "Sınavda böyle yaz"],
          rows: [
            ["Düz ve eğimli çizgi", "*The graph is a straight line, so the velocity is constant.*"],
            ["Daha dik çizgi", "*The steeper the slope, the greater the velocity.*"],
            ["Yatay çizgi", "*The slope is zero, so the object is at rest.*"],
            ["Eğim negatif", "*The object moves in the negative direction.*"]
          ] }
      ]
    },
    {
      baslik: "Hız-zaman grafiği: alan yer değiştirmedir",
      kisa: "v–t grafiğinde çizginin altındaki alan yer değiştirmeyi verir.",
      bloklar: [
        { tip: "grafik", baslik: "Hız-zaman (v–t) grafiği", xlabel: "t (s)", ylabel: "v (m/s)", xmax: 9, ymax: 6,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "a1", tip: "alan", renk: 0, noktalar: [[0, 0], [0, 0], [0, 2], [0, 2]], gizli: true },
            { id: "a2", tip: "alan", renk: 1, noktalar: [[0, 0], [0, 0], [0, 4], [0, 4]], gizli: true },
            { id: "v2", tip: "cizgi", renk: 0, from: [0, 2], to: [8, 2], etiket: "2 m/s" },
            { id: "v4", tip: "cizgi", renk: 1, from: [0, 4], to: [8, 4], etiket: "4 m/s", gizli: true },
            { id: "t1", tip: "yazi", x: 2, y: 1, metin: "2 × 4 = 8 m", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 2.8, metin: "4 × 4 = 16 m", gizli: true }
          ],
          durumlar: [
            { metin: "Hız sabit: 2 m/s. v–t grafiğinde sabit hız ==yatay çizgidir==.", goster: ["v2"] },
            { metin: "0–4 s arasında çizginin altı bir dikdörtgen: alan = 2 × 4 = 8 m. Bu, yer değiştirmedir.", goster: ["a1", "t1"], set: { a1: { noktalar: [[0, 0], [4, 0], [4, 2], [0, 2]] } } },
            { metin: "8 s'e uzat: alan = 2 × 8 = 16 m. Alan = hız × süre = v·t.", set: { a1: { noktalar: [[0, 0], [8, 0], [8, 2], [0, 2]] }, t1: { x: 4, metin: "2 × 8 = 16 m" } } },
            { metin: "Hız 4 m/s olursa aynı 4 s'de alan da iki katı olur: 4 × 4 = 16 m.", gizle: ["a1", "t1", "v2"], goster: ["v4", "a2", "t2"], set: { a2: { noktalar: [[0, 0], [4, 0], [4, 4], [0, 4]] } } }
          ] },
        { tip: "ikili", sol: { ikon: "📍", baslik: "*Position–time* (x–t)", maddeler: ["Eğim = hız", "Yatay çizgi = cisim duruyor"] },
          sag: { ikon: "🚗", baslik: "*Velocity–time* (v–t)", maddeler: ["Alan = yer değiştirme", "Yatay çizgi = sabit hız (eğim = ivme)"] },
          oyun: [
            { metin: "Yatay çizgi: cisim duruyor.", cevap: "sol", neden: "x–t'de konum değişmiyor. v–t'de yatay çizgi sabit hızdır." },
            { metin: "Çizginin altındaki alan yer değiştirmeyi verir.", cevap: "sag", neden: "Alan = yer değiştirme v–t grafiğine özgüdür." },
            { metin: "Eğimi bize hızı verir.", cevap: "sol", neden: "x–t'de eğim hızdır. v–t'de eğim ivmedir." },
            { metin: "Yatay çizgi: cisim sabit hızla hareket ediyor.", cevap: "sag", neden: "v–t'de yükseklik hızı gösterir; yatay çizgi hız sabit demektir." }
          ] },
        { tip: "ornek", baslik: "v–t grafiğinden yol ve yer değiştirme",
          durum: "Bir cisim önce +10 m/s hızla 4 s, sonra −20 m/s hızla 1 s gidiyor. Yol, yer değiştirme, ortalama hız ve ortalama sürat nedir?",
          adimlar: [
            "Alanlar: ilk parça 10 × 4 = +40 m, ikinci parça −20 × 1 = −20 m (eksi yönde).",
            "Yer değiştirme: 40 + (−20) = +20 m. Yol: 40 + 20 = 60 m (alanların mutlak değerleri toplanır).",
            "Süre 5 s: ortalama hız = 20 ÷ 5 = 4 m/s, ortalama sürat = 60 ÷ 5 = 12 m/s."
          ],
          sonuc: "Yön değiştirdiği için ortalama sürat (12 m/s), ortalama hızın büyüklüğünden (4 m/s) büyük. Sınavda böyle yaz: *The area below the time axis is negative displacement.*" },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: alan", metin: "*The area under the velocity–time graph gives the displacement.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: sabit hız", metin: "*The object moves at a constant velocity of 2 m/s.*" }
          ] }
      ]
    },
    {
      baslik: "Karşılaşma problemleri",
      kisa: "Buluştukları anda konumlar eşittir: x₁ = x₂ yazıp zamanı bul.",
      bloklar: [
        { tip: "ornek", baslik: "Ece ile Mert karşılaşıyor",
          durum: "Ece x = 0'dan doğuya 3 m/s ile, Mert x = 40 m'den batıya 5 m/s ile aynı anda yürümeye başlıyor. Ne zaman ve nerede karşılaşırlar? (Doğu artı.)",
          adimlar: [
            "Konum denklemleri: Ece x = 0 + 3t. Mert batıya gittiği için v = −5: x = 40 − 5t.",
            "Buluşma: x_Ece = x_Mert → 3t = 40 − 5t → 8t = 40 → t = 5 s.",
            "Yer: x = 3 × 5 = 15 m. Kontrol: Mert 40 − 25 = 15 m ✓."
          ],
          sonuc: "5 s sonra x = 15 m'de karşılaşırlar. Sınavda böyle yaz: *They meet when their positions are equal, x₁ = x₂.*" },
        { tip: "grafik", baslik: "Karşılaşma x–t grafiğinde kesişme noktasıdır", xlabel: "t (s)", ylabel: "x (m)", xmax: 9, ymax: 9,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          yticks: [{ v: 2, label: "10" }, { v: 4, label: "20" }, { v: 6, label: "30" }, { v: 8, label: "40" }],
          ogeler: [
            { id: "E", tip: "cizgi", renk: 0, from: [0, 0], to: [8, 4.8], etiket: "Ece" },
            { id: "M", tip: "cizgi", renk: 1, from: [0, 8], to: [8, 0], etiket: "Mert", gizli: true },
            { id: "K", tip: "nokta", renk: 3, x: 5, y: 3, etiket: "5 s, 15 m", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Ece x = 0'dan yola çıkıyor, eğimi 3 m/s. (Grafikte bir kare 5 m.)", goster: ["E"] },
            { metin: "Mert x = 40 m'den geri geliyor: eğimi −5 m/s, çizgi aşağı iniyor.", goster: ["M"] },
            { metin: "Çizgilerin kesiştiği nokta karşılaşmadır: t = 5 s, x = 15 m.", goster: ["K"] }
          ] },
        { tip: "tuzak", metin: "Karşılaşınca iki kişinin konumu ile geçen süresi aynıdır; ama yürüdükleri yollar hızlarına göre farklıdır (Ece 15 m, Mert 25 m).",
          yanlis: "Karşılaştıklarında ikisi de aynı yolu yürümüştür.",
          dogru: "Eşit olan şey ==konum== ve süredir. Yollar hıza göre paylaşılır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Yol skaler ve toplam uzunluktur; yer değiştirme vektördür: Δx = x₂ − x₁.",
            "Ortalama sürat = yol ÷ süre; ortalama hız = yer değiştirme ÷ süre.",
            "Sabit hızda x = x₀ + v·t; km/h → m/s için 3,6'ya böl.",
            "x–t grafiğinde eğim hızdır: dik çizgi hızlı, yatay çizgi duruyor demektir.",
            "v–t grafiğinde yatay çizgi sabit hızdır; çizginin altındaki alan yer değiştirmedir.",
            "Karşılaşmada konumları eşitle (x₁ = x₂) ve zamanı bul.",
            "Önce bir yönü artı seç; ters yöndeki hız ve yer değiştirme eksi olur.",
            "Grafiği sözle yorumla: *The slope gives the velocity; the area gives the displacement.*"
          ] }
      ]
    }
  ],
  sorular: [
    { q: "A runner completes exactly one lap of a 400 m track and returns to the starting point. The lap takes 80 s. What are the average speed and the average velocity?",
      opts: ["Speed 5 m/s, velocity 5 m/s", "Speed 5 m/s, velocity 0", "Speed 0, velocity 5 m/s", "Speed 0, velocity 0"], a: 1,
      why: "Yol 400 m olduğundan sürat 400 ÷ 80 = 5 m/s. Başladığı noktaya döndüğü için yer değiştirme 0, dolayısıyla ortalama hız 0. En çekici yanlış A: sürat ile hızı aynı sanmak." },
    { q: "The graph shows the position-time graphs of objects K and L. Which statement is correct?",
      fig: { type: "graph", xlabel: "t (s)", ylabel: "x (m)", xmax: 11, ymax: 11,
        lines: [{ from: [0, 0], to: [9, 9], label: "K" }, { from: [0, 10], to: [10, 0], label: "L" }],
        xticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }], yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }] },
      opts: ["The speed of K is different from the speed of L.", "L moves in the +x direction.", "K and L meet after 10 s.", "K and L meet at x = 5 m when t = 5 s."], a: 3,
      why: "Çizgiler (5, 5) noktasında kesişir: karşılaşma t = 5 s, x = 5 m. Eğimler +1 ve −1 m/s'dir; büyüklükleri aynı, yönleri zıttır. A yanlış çünkü iki eğimin büyüklüğü eşit; B yanlış çünkü L'nin eğimi negatif." },
    { q: "A car moves at a constant velocity of 36 km/h. How far does it travel in 20 s?",
      opts: ["200 m", "720 m", "180 m", "20 m"], a: 0,
      why: "36 km/h = 36 ÷ 3,6 = 10 m/s olur; Δx = v·t = 10 × 20 = 200 m. En çekici yanlış B: birimi çevirmeden 36 × 20 = 720 yazmak." },
    { q: "The velocity-time graph of an object is shown (4 m/s for 0-3 s, then 2 m/s for 3-6 s). What is the displacement of the object between 0 and 6 s?",
      fig: { type: "graph", xlabel: "t (s)", ylabel: "v (m/s)", xmax: 8, ymax: 6,
        lines: [{ from: [0, 4], to: [3, 4] }, { from: [3, 2], to: [6, 2] }],
        xticks: [{ v: 3, label: "3" }, { v: 6, label: "6" }], yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }] },
      opts: ["12 m", "9 m", "18 m", "24 m"], a: 2,
      why: "Alanlar toplanır: 4 × 3 = 12 m ve 2 × 3 = 6 m, toplam 18 m. A yalnız ilk parçayı, D bütün süreyi 4 m/s sanır, B ise iki hızın ortalamasını (3 m/s) yanlışlıkla 3 s ile çarpar." },
    { q: "An object travels half of its displacement at 6 m/s and the other half at 12 m/s in the same direction. What is its average velocity?",
      opts: ["6 m/s", "8 m/s", "9 m/s", "12 m/s"], a: 1,
      why: "Yarı yer değiştirmeye d dersek süre d/6 + d/12 = d/4 olur; ortalama hız 2d ÷ (d/4) = 8 m/s. En çekici yanlış C: iki hızın aritmetik ortalamasını almak; yavaş kısımda daha çok zaman geçtiği için ortalama 9'dan küçüktür." }
  ]
};
