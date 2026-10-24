/* Kitpath not defteri · cb904 · 9.6 Parametrik ve Vektörel Hareket Problemleri
   Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb904",
  amac: "Bu konu parametrik ve vektör değerli fonksiyonlarla hareket problemlerini anlatıyor: konum, hız, ivme ve sürat arasındaki ilişkiyi, yatay–dikey hareketi, sürat artışını, toplam yolu ve yer değiştirmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Konum, hız, ivme, sürat",
      kisa: "Türev aşağı iner: konum → hız → ivme. İntegral yukarı çıkarır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "r(t)", alt: "konum" }, "→", { t: "v(t) = r′(t)", alt: "hız" }, "→", { t: "a(t) = r″(t)", alt: "ivme" }], aciklama: "Her ok bir türevdir. Geri dönmek için integral ve başlangıç koşulu gerekir. Sürat ise hızın büyüklüğüdür: |v(t)| = √(x′² + y′²)." },
        { tip: "kavramlar", kartlar: [{ ikon: "🧭", terim: "Velocity vector", tr: "hız vektörü", tanim: "v(t) = ⟨x′(t), y′(t)⟩. Yönü hareket yönüdür, eğriye teğettir.", ornek: "v = ⟨2, 0⟩ parçacık sağa gidiyor demektir." }, { ikon: "🏎️", terim: "Speed", tr: "sürat", tanim: "Hız vektörünün büyüklüğü: |v(t)|. Bir sayıdır, asla negatif olmaz.", ornek: "v = ⟨4, 3⟩ ise sürat 5." }, { ikon: "🚀", terim: "Acceleration vector", tr: "ivme vektörü", tanim: "a(t) = ⟨x″(t), y″(t)⟩. Hızın hem büyüklüğü hem yönü nasıl değişiyor, onu gösterir.", ornek: "a = ⟨2, 4⟩." }] }
      ]
    },
    {
      baslik: "Bir parçacığın yolunu izleyelim",
      kisa: "r(t) = ⟨t², t³/3 − t⟩ için hız, ivme ve sürat zamanla değişir.",
      bloklar: [
        { tip: "ornek", baslik: "r(t) = ⟨t², t³/3 − t⟩", durum: "v, a ve sürat nedir?", adimlar: ["Türet: v(t) = ⟨2t, t² − 1⟩.", "Bir daha türet: a(t) = ⟨2, 2t⟩.", "Sürat: √(4t² + (t² − 1)²) = √(t⁴ + 2t² + 1) = √((t² + 1)²) = t² + 1.", "t = 2: v = ⟨4, 3⟩, a = ⟨2, 4⟩, sürat 5."], sonuc: "v = ⟨2t, t² − 1⟩, a = ⟨2, 2t⟩, sürat = t² + 1" },
        { tip: "grafik", baslik: "r(t) = ⟨t², t³/3 − t⟩ yolunda hareket", xlabel: "x", ylabel: "y", xmax: 10.9, ymax: 7.5, xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }], yticks: [{ v: 1, label: "0" }, { v: 3, label: "2" }, { v: 5, label: "4" }, { v: 7, label: "6" }], ogeler: [{ id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 1], to: [10.9, 1] }, { id: "c", tip: "egri", renk: 1, noktalar: [[0, 1], [0.016, 0.876], [0.063, 0.755], [0.141, 0.643], [0.25, 0.542], [0.391, 0.456], [0.563, 0.391], [0.766, 0.348], [1, 0.333], [1.266, 0.35], [1.563, 0.401], [1.891, 0.492], [2.25, 0.625], [2.641, 0.805], [3.063, 1.036], [3.516, 1.322], [4, 1.667], [4.516, 2.074], [5.063, 2.547], [5.641, 3.09], [6.25, 3.708], [6.891, 4.404], [7.563, 5.182], [8.266, 6.046], [9, 7]] }, { id: "v", tip: "ok", renk: 2, from: [0, 1], to: [0, 0.5] }, { id: "p", tip: "nokta", renk: 0, x: 0, y: 1, etiket: "t = 0" }], durumlar: [{ metin: "t = 0: v = ⟨0, −1⟩. Parçacık yalnız aşağı doğru hareket ediyor (dikey). Ok, v'nin yarı uzunluğunda çizildi; kesikli çizgi gerçek x ekseni." }, { metin: "t = 1: v = ⟨2, 0⟩. y′ = 0: yatay hareket, y en düşük değerde (−2/3).", set: { p: { x: 1, y: 0.333, etiket: "t = 1" }, v: { from: [1, 0.333], to: [2, 0.333] } } }, { metin: "t = 2: v = ⟨4, 3⟩, sürat 5. Sağa ve yukarı hızla gidiyor.", set: { p: { x: 4, y: 1.667, etiket: "t = 2" }, v: { from: [4, 1.667], to: [6, 3.167] } } }, { metin: "t = 3: v = ⟨6, 8⟩, sürat 10. Nokta (9, 6)'da ve sürat sürekli artıyor.", set: { p: { x: 9, y: 7, etiket: "t = 3" } }, gizle: ["v"] }] },
        { tip: "tablo", baslik: "Aynı hareket, dört anda", head: ["t", "r(t)", "v(t)", "a(t)", "sürat"], rows: [["0", "⟨0, 0⟩", "⟨0, −1⟩", "⟨2, 0⟩", "1"], ["1", "⟨1, −2/3⟩", "⟨2, 0⟩", "⟨2, 2⟩", "2"], ["2", "⟨4, 2/3⟩", "⟨4, 3⟩", "⟨2, 4⟩", "5"], ["3", "⟨9, 6⟩", "⟨6, 8⟩", "⟨2, 6⟩", "10"]], vurgu: 2, not: "Bileşenler tek tek değişirken sürat t² + 1 gibi tek bir düzgün fonksiyon." }
      ]
    },
    {
      baslik: "Yatay mı, dikey mi, duruyor mu?",
      kisa: "Yatay: y′ = 0, x′ ≠ 0. Dikey: x′ = 0, y′ ≠ 0. Duruyor: ikisi de 0.",
      bloklar: [
        { tip: "tablo", baslik: "Hareketin yönünü hız bileşenleri belirler", head: ["Durum", "Koşul", "Anlamı"], rows: [["Yatay hareket", "y′ = 0 ve x′ ≠ 0", "Parçacık yalnız sağa ya da sola gidiyor"], ["Dikey hareket", "x′ = 0 ve y′ ≠ 0", "Parçacık yalnız yukarı ya da aşağı gidiyor"], ["Duruyor (*at rest*)", "x′ = 0 ve y′ = 0", "v = ⟨0, 0⟩, sürat 0"]], vurgu: 2, not: "Önceki örnekte t = 1'de yatay, t = 0'da dikey hareket var; parçacık hiç durmaz çünkü sürat t² + 1 ≥ 1." },
        { tip: "ikili", sol: { ikon: "↔️", baslik: "Yatay hareket anı", maddeler: ["y′ = 0, x′ ≠ 0", "v = ⟨a, 0⟩"] }, sag: { ikon: "↕️", baslik: "Dikey hareket anı", maddeler: ["x′ = 0, y′ ≠ 0", "v = ⟨0, b⟩"] }, oyun: [{ metin: "v = ⟨5, 0⟩", cevap: "sol", neden: "Dikey bileşen sıfır." }, { metin: "v = ⟨0, −3⟩", cevap: "sag", neden: "Yatay bileşen sıfır." }, { metin: "v(t) = ⟨2t, t² − 1⟩ ve t = 1 anı", cevap: "sol", neden: "v(1) = ⟨2, 0⟩." }, { metin: "v(t) = ⟨2t, t² − 1⟩ ve t = 0 anı", cevap: "sag", neden: "v(0) = ⟨0, −1⟩." }] },
        { tip: "tuzak", metin: "Durmak için iki bileşenin birden sıfır olması gerekir. Tek bileşenin sıfır olması yalnızca yön bilgisi verir.", yanlis: "v(t) = ⟨t² − 4, t − 2⟩ için x′(−2) = 0 olduğundan parçacık t = −2'de durur.", dogru: "v(−2) = ⟨0, −4⟩ ≠ 0: parçacık dikey hareket ediyor. Yalnız t = 2'de v(2) = ⟨0, 0⟩, orada durur." }
      ]
    },
    {
      baslik: "Sürat artıyor mu azalıyor mu?",
      kisa: "Hız ve ivme aynı yöne bakıyorsa (v · a > 0) sürat artar.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "d(sürat)/dt", alt: "|v| ≠ 0 iken" }, "=", { t: "(v · a) / |v|", alt: "v · a = x′x″ + y′y″" }], aciklama: "Payın işareti belirler: v · a > 0 ise sürat artar, v · a < 0 ise azalır. Hız ile ivme arasındaki açı dar mı geniş mi, diye düşün." },
        { tip: "ornek", baslik: "v = ⟨2t, t² − 1⟩ ve a = ⟨2, 2t⟩", durum: "t = 2 ve t = −1'de sürat artıyor mu?", adimlar: ["v · a = 2t·2 + (t² − 1)·2t = 2t³ + 2t = 2t(t² + 1).", "t = 2: v · a = 20 > 0 → sürat artıyor.", "t = −1: v = ⟨−2, 0⟩, a = ⟨2, −2⟩ ve v · a = −4 < 0 → sürat azalıyor.", "Kontrol: sürat t² + 1; türevi 2t. t = 2'de +4, t = −1'de −2."], sonuc: "t = 2'de artıyor, t = −1'de azalıyor" },
        { tip: "tuzak", metin: "İvmenin bir bileşeninin işareti tek başına bir şey söylemez; iç çarpıma bak.", yanlis: "x″ = 2 > 0 olduğundan parçacığın sürati her zaman artar.", dogru: "t = −1'de v · a = −4 < 0: sürat azalıyor. Karar v · a'nın işaretiyle verilir." }
      ]
    },
    {
      baslik: "Yer değiştirme, toplam yol, ortalama hız",
      kisa: "Yer değiştirme ∫v dt bir vektör; toplam yol ∫|v| dt bir sayıdır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "Δr = ∫ₐᵇ v dt", alt: "yer değiştirme (vektör)" }, ";", { t: "yol = ∫ₐᵇ |v| dt", alt: "toplam yol (sayı)" }, ";", { t: "ort. hız = Δr/(b − a)", alt: "vektör" }], aciklama: "Yol, yer değiştirmenin büyüklüğünden küçük olamaz: yol ≥ |Δr|. Eşitlik yalnızca doğru boyunca tek yönde gidince olur." },
        { tip: "ornek", baslik: "v = ⟨2t, t² − 1⟩ , 0 ≤ t ≤ 3", durum: "Yer değiştirme, toplam yol ve ortalama hızı bul.", adimlar: ["Yer değiştirme: ∫₀³ ⟨2t, t² − 1⟩ dt = ⟨9, 9 − 3⟩ = ⟨9, 6⟩. (Kontrol: r(3) − r(0) = ⟨9, 6⟩.)", "Büyüklüğü: √(81 + 36) = √117 ≈ 10,8.", "Toplam yol: ∫₀³ (t² + 1) dt = 9 + 3 = 12.", "Ortalama hız: ⟨9, 6⟩ / 3 = ⟨3, 2⟩."], sonuc: "Δr = ⟨9, 6⟩, yol = 12 (≥ 10,8), ortalama hız ⟨3, 2⟩" },
        { tip: "ikili", sol: { ikon: "➡️", baslik: "Vektör", maddeler: ["Büyüklük ve yön", "⟨, ⟩ ile yazılır"] }, sag: { ikon: "🔢", baslik: "Sayı (skaler)", maddeler: ["Yalnız büyüklük", "Yön yok"] }, oyun: [{ metin: "Hız v(t)", cevap: "sol", neden: "⟨x′, y′⟩ vektörü." }, { metin: "Sürat |v(t)|", cevap: "sag", neden: "Büyüklük, bir sayı." }, { metin: "Yer değiştirme ∫v dt", cevap: "sol", neden: "Vektör integrali, vektör verir." }, { metin: "Toplam yol ∫|v| dt", cevap: "sag", neden: "Sayı integrali, sayı verir." }, { metin: "Ortalama hız", cevap: "sol", neden: "Vektörü zamana böler, hâlâ vektör." }] }
      ]
    },
    {
      baslik: "İvmeden konuma dönmek",
      kisa: "İki kez integral al; her adımda başlangıç koşuluyla sabiti bul.",
      bloklar: [
        { tip: "adimlar", baslik: "Geri yürüme", adimlar: [{ baslik: "İvmeyi integral al", metin: "v(t) = ∫a dt; v(0) ile iki sabiti bul." }, { baslik: "Hızı integral al", metin: "r(t) = ∫v dt; r(0) ile iki sabiti bul." }, { baslik: "Zamanı yerine koy", metin: "İstenen t için r(t), v(t) ya da |v(t)| hesapla." }] },
        { tip: "ornek", baslik: "a(t) = ⟨6t, 2⟩ , v(0) = ⟨0, 1⟩ , r(0) = ⟨1, 0⟩", durum: "t = 2'de konum nedir?", adimlar: ["v(t) = ⟨3t² + C₁, 2t + C₂⟩; v(0) = ⟨0, 1⟩ → C₁ = 0, C₂ = 1. v(t) = ⟨3t², 2t + 1⟩.", "r(t) = ⟨t³ + K₁, t² + t + K₂⟩; r(0) = ⟨1, 0⟩ → K₁ = 1, K₂ = 0.", "r(t) = ⟨t³ + 1, t² + t⟩.", "t = 2: ⟨8 + 1, 4 + 2⟩ = ⟨9, 6⟩."], sonuc: "r(2) = ⟨9, 6⟩" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: ["Konum r, hız v = r′, ivme a = v′ = r″. Sürat |v| = √(x′² + y′²) bir sayıdır.", "Yatay hareket: y′ = 0 ve x′ ≠ 0. Dikey hareket: x′ = 0 ve y′ ≠ 0. Durma: v = ⟨0, 0⟩, ikisi birden.", "Sürat artar ⇔ v · a > 0 (x′x″ + y′y″). Bileşenlerin işaretine değil iç çarpıma bak.", "Yer değiştirme Δr = ∫ₐᵇ v dt = r(b) − r(a) bir vektördür.", "Toplam yol = ∫ₐᵇ |v| dt bir sayıdır ve |Δr|'den küçük olamaz.", "Ortalama hız = Δr/(b − a), vektördür. Ortalama sürat = toplam yol/(b − a), sayıdır.", "İvmeden konuma: iki integral, iki vektör sabiti; sabitleri v(0) ve r(0) bulur."] }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir drone'un yatay ve dikey hız bileşenleri tabloda veriliyor. Drone hangi anda durur (v = ⟨0, 0⟩)?",
      fig: {
        type: "table",
        head: ["t", "x′(t)", "y′(t)"],
        rows: [["1", "0", "−4"], ["2", "0", "0"], ["3", "5", "0"], ["4", "7", "8"]],
        caption: "Hız bileşenleri"
      },
      opts: [
        "t = 1",
        "t = 2",
        "t = 3",
        "t = 4"
      ],
      a: 1,
      why: "Durmak için x′ = 0 ve y′ = 0 birlikte olmalı: yalnız t = 2. t = 1'de x′ = 0 ama y′ ≠ 0 (dikey hareket); t = 3'te y′ = 0 ama x′ ≠ 0 (yatay hareket)."
    },
    {
      q: "Bir parçacığın t = 2'de hızı v = ⟨4, −3⟩ ve ivmesi a = ⟨−1, 2⟩'dir. Bu anda sürat için ne söylenir?",
      opts: [
        "Sürat artıyor, çünkü ivmenin y bileşeni pozitif.",
        "Sürat artıyor, çünkü ivme sıfır değil.",
        "Sürat azalıyor, çünkü v · a = −10 < 0.",
        "Sürat sabit, çünkü a ve v birbirine dik."
      ],
      a: 2,
      why: "v · a = 4·(−1) + (−3)·2 = −10 < 0, yani sürat azalıyor. Bir bileşenin işareti ya da ivmenin sıfırdan farklı olması tek başına sürat artışı göstermez; dik olsaydı v · a = 0 çıkardı."
    },
    {
      q: "Bir parçacığın hızı v(t) = ⟨cos t, sin t⟩'dir. 0 ≤ t ≤ 2π aralığında aldığı toplam yol kaçtır?",
      opts: [
        "0",
        "π",
        "4π",
        "2π"
      ],
      a: 3,
      why: "Sürat √(cos²t + sin²t) = 1 sabit; toplam yol 1 · 2π = 2π. 0 yer değiştirmedir: ∫₀^2π v dt = ⟨0, 0⟩, çünkü parçacık başladığı noktaya döner. Yol ile yer değiştirme farklı şeylerdir."
    },
    {
      q: "Bir parçacığın ivmesi a(t) = ⟨6t, 2⟩, başlangıç hızı v(0) = ⟨0, 1⟩ ve başlangıç konumu r(0) = ⟨1, 0⟩'dır. t = 2'de konumu nedir?",
      opts: [
        "⟨9, 6⟩",
        "⟨12, 5⟩",
        "⟨8, 6⟩",
        "⟨9, 4⟩"
      ],
      a: 0,
      why: "v = ⟨3t², 2t + 1⟩ ve r = ⟨t³ + 1, t² + t⟩; r(2) = ⟨9, 6⟩. ⟨12, 5⟩ hızdır v(2); ⟨8, 6⟩ r(0)'ın x bileşenini eklemeyi, ⟨9, 4⟩ ise v(0)'ın y bileşenini unutmaktır."
    },
    {
      q: "Bir robotun konumu tabloda veriliyor. 0 ≤ t ≤ 4 aralığındaki ortalama hız vektörü nedir?",
      fig: {
        type: "table",
        head: ["t", "x(t)", "y(t)"],
        rows: [["0", "2", "1"], ["2", "3", "6"], ["4", "10", "5"]],
        caption: "Robotun konumu"
      },
      opts: [
        "⟨8, 4⟩",
        "⟨2, 1⟩",
        "⟨5/2, 5/4⟩",
        "√5"
      ],
      a: 1,
      why: "Ortalama hız = (r(4) − r(0))/4 = ⟨8, 4⟩/4 = ⟨2, 1⟩. ⟨8, 4⟩ yer değiştirmedir (zamana bölmeyi unutmak); ⟨5/2, 5/4⟩ r(0)'ı çıkarmaz; √5 vektör değil, onun büyüklüğüdür."
    }
  ]
};
