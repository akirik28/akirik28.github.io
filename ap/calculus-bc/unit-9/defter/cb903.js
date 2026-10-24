/* Kitpath not defteri · cb903 · 9.4–9.5 Vektör Değerli Fonksiyonlar
   Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb903",
  amac: "Bu konu *vector-valued functions* yani vektör değerli fonksiyonları anlatıyor: konum, hız ve ivmeyi tek bir vektör olarak yazarsın; türevi de integrali de bileşen bileşen alırsın. r(t) = ⟨x(t), y(t)⟩ yazılışını, hız–ivme vektörlerini ve vektör integralini öğreneceksin.",
  bolumler: [
    {
      baslik: "Konumu vektörle yazmak: r(t)",
      kisa: "r(t) = ⟨x(t), y(t)⟩ her t için bir konum vektörü verir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "📍", terim: "Vector-valued function", tr: "vektör değerli fonksiyon", tanim: "Girdisi bir sayı t, çıktısı bir vektör olan fonksiyon: r(t) = ⟨x(t), y(t)⟩.", ornek: "r(t) = ⟨2cos t, 2sin t⟩." }, { ikon: "🧩", terim: "Component functions", tr: "bileşen fonksiyonları", tanim: "Vektörün iki parçası: x(t) yatay, y(t) dikey bileşendir. Türev ve integral hep bunlar üzerinden alınır.", ornek: "r(t) = ⟨t², t³⟩ için x(t) = t², y(t) = t³." }, { ikon: "🎯", terim: "Position vector", tr: "konum vektörü", tanim: "Orijin (0, 0) noktasından parçacığın o andaki konumuna giden ok. Ucu, parametrik eğrinin noktasıdır.", ornek: "t = 0'da r = ⟨2, 0⟩." }] },
        { tip: "grafik", baslik: "r(t) = ⟨2cos t, 2sin t⟩: konum vektörü", xlabel: "x", ylabel: "y", xmax: 8.7, ymax: 6, xticks: [{ v: 2, label: "−2" }, { v: 4, label: "0" }, { v: 6, label: "2" }], yticks: [{ v: 1, label: "−2" }, { v: 3, label: "0" }, { v: 5, label: "2" }], ogeler: [{ id: "ay", tip: "cizgi", renk: 1, kesik: true, from: [4, 0], to: [4, 6] }, { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 3], to: [8.7, 3] }, { id: "c", tip: "egri", renk: 1, noktalar: [[6, 3], [5.932, 3.518], [5.732, 4], [5.414, 4.414], [5, 4.732], [4.518, 4.932], [4, 5], [3.482, 4.932], [3, 4.732], [2.586, 4.414], [2.268, 4], [2.068, 3.518], [2, 3], [2.068, 2.482], [2.268, 2], [2.586, 1.586], [3, 1.268], [3.482, 1.068], [4, 1], [4.518, 1.068], [5, 1.268], [5.414, 1.586], [5.732, 2], [5.932, 2.482], [6, 3]] }, { id: "rv", tip: "ok", renk: 0, from: [4, 3], to: [6, 3] }, { id: "p", tip: "nokta", renk: 2, x: 6, y: 3, etiket: "t = 0" }], durumlar: [{ metin: "t = 0: r = ⟨2, 0⟩. Konum vektörü başlangıçtan noktaya giden oktur. Kesikli çizgiler gerçek eksenler." }, { metin: "t = π/2: r = ⟨0, 2⟩. Nokta saat yönünün tersine dönüyor.", set: { rv: { to: [4, 5] }, p: { x: 4, y: 5, etiket: "t = π/2" } } }, { metin: "t = π: r = ⟨−2, 0⟩.", set: { rv: { to: [2, 3] }, p: { x: 2, y: 3, etiket: "t = π" } } }, { metin: "t = 3π/2: r = ⟨0, −2⟩. Her an |r| = 2: nokta yarıçapı 2 olan çember üzerinde.", set: { rv: { to: [4, 1] }, p: { x: 4, y: 1, etiket: "t = 3π/2" } } }] }
      ]
    },
    {
      baslik: "Türev bileşen bileşen alınır",
      kisa: "r′(t) = ⟨x′(t), y′(t)⟩ hız vektörüdür; r″(t) ivme vektörüdür.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "v(t) = r′(t)", alt: "hız vektörü" }, "=", { t: "⟨x′(t), y′(t)⟩", alt: "bileşenlerin türevi" }], aciklama: "Aynı yolla ivme: a(t) = v′(t) = r″(t) = ⟨x″(t), y″(t)⟩. Sürat ise hız vektörünün büyüklüğüdür: |v(t)| = √(x′(t)² + y′(t)²). v'nin eğimi y′/x′ = dy/dx, yani önceki konudaki parametrik eğim." },
        { tip: "kavramlar", kartlar: [{ ikon: "🧭", terim: "Velocity vector", tr: "hız vektörü", tanim: "Konum vektörünün türevi. Hem hızı hem yönü verir; hareket yönündeki teğet doğrultusundadır.", ornek: "r(t) = ⟨3t, 4t²⟩ için v = ⟨3, 8t⟩." }, { ikon: "🚀", terim: "Acceleration vector", tr: "ivme vektörü", tanim: "Hız vektörünün türevi: hızın büyüklüğü ve yönü nasıl değişiyor.", ornek: "v = ⟨3, 8t⟩ ise a = ⟨0, 8⟩." }] },
        { tip: "ornek", baslik: "r(t) = ⟨3t, 4t²⟩", durum: "v, a ve t = 1/2'de sürat nedir?", adimlar: ["Bileşenleri türet: x′ = 3, y′ = 8t. v(t) = ⟨3, 8t⟩.", "Bir daha türet: a(t) = ⟨0, 8⟩, sabit.", "t = 1/2: v = ⟨3, 4⟩.", "Sürat: √(3² + 4²) = 5."], sonuc: "v(t) = ⟨3, 8t⟩, a(t) = ⟨0, 8⟩, t = 1/2'de sürat 5" },
        { tip: "tuzak", metin: "Hız bir vektördür, sürat ise bir sayıdır. Bu iki sözcüğü karıştırmak en sık yapılan terim hatasıdır.", yanlis: "Sürat = x′ + y′, hız ile sürat aynıdır.", dogru: "Hız v = ⟨x′, y′⟩ vektördür. Sürat onun büyüklüğüdür: √(x′² + y′²), sıfır ya da pozitif bir sayı." }
      ]
    },
    {
      baslik: "Hız teğet, ivme içe doğru",
      kisa: "Hız vektörü yörüngeye teğettir; sabit süratli çember hareketinde ivme merkeze bakar.",
      bloklar: [
        { tip: "grafik", baslik: "Çember hareketinde hız ve ivme", xlabel: "x", ylabel: "y", xmax: 8.7, ymax: 6, xticks: [{ v: 2, label: "−2" }, { v: 4, label: "0" }, { v: 6, label: "2" }], yticks: [{ v: 1, label: "−2" }, { v: 3, label: "0" }, { v: 5, label: "2" }], ogeler: [{ id: "ay", tip: "cizgi", renk: 1, kesik: true, from: [4, 0], to: [4, 6] }, { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 3], to: [8.7, 3] }, { id: "c", tip: "egri", renk: 1, noktalar: [[6, 3], [5.932, 3.518], [5.732, 4], [5.414, 4.414], [5, 4.732], [4.518, 4.932], [4, 5], [3.482, 4.932], [3, 4.732], [2.586, 4.414], [2.268, 4], [2.068, 3.518], [2, 3], [2.068, 2.482], [2.268, 2], [2.586, 1.586], [3, 1.268], [3.482, 1.068], [4, 1], [4.518, 1.068], [5, 1.268], [5.414, 1.586], [5.732, 2], [5.932, 2.482], [6, 3]] }, { id: "p", tip: "nokta", renk: 0, x: 6, y: 3, etiket: "t = 0" }, { id: "v", tip: "ok", renk: 2, from: [6, 3], to: [6, 5], gizli: true }, { id: "a", tip: "ok", renk: 3, from: [6, 3], to: [4, 3], gizli: true }, { id: "vl", tip: "yazi", x: 6.45, y: 4.6, metin: "v", gizli: true }, { id: "al", tip: "yazi", x: 5, y: 3.35, metin: "a", gizli: true }], durumlar: [{ metin: "r(t) = ⟨2cos t, 2sin t⟩. Hız ve ivmeyi türevle bulacağız: v = r′, a = r″." }, { metin: "t = 0: v = ⟨−2sin t, 2cos t⟩ = ⟨0, 2⟩ yukarı, çembere teğet. a = ⟨−2, 0⟩ merkeze doğru.", goster: ["v", "a", "vl", "al"] }, { metin: "t = π/2: v = ⟨−2, 0⟩ sola, a = ⟨0, −2⟩ aşağı. Hız hep teğet, ivme hep merkeze.", set: { p: { x: 4, y: 5, etiket: "t = π/2" }, v: { from: [4, 5], to: [2, 5] }, a: { from: [4, 5], to: [4, 3] }, vl: { x: 2.8, y: 5.35 }, al: { x: 4.4, y: 4 } } }, { metin: "t = π: v = ⟨0, −2⟩, a = ⟨2, 0⟩. Sürat |v| = 2 her an aynı, ama yön sürekli döndüğü için a ≠ 0.", set: { p: { x: 2, y: 3, etiket: "t = π" }, v: { from: [2, 3], to: [2, 1] }, a: { from: [2, 3], to: [4, 3] }, vl: { x: 2.45, y: 1.6 }, al: { x: 3, y: 3.35 } } }] },
        { tip: "ikili", sol: { ikon: "🧭", baslik: "*Velocity* v(t)", maddeler: ["Konumun türevi: r′(t)", "Yörüngeye teğet"] }, sag: { ikon: "🚀", baslik: "*Acceleration* a(t)", maddeler: ["Hızın türevi: r″(t)", "Sabit süratli çemberde merkeze bakar"] }, oyun: [{ metin: "r′(t) ile bulunur.", cevap: "sol", neden: "Hız, konumun birinci türevidir." }, { metin: "r″(t) ile bulunur.", cevap: "sag", neden: "İvme, konumun ikinci türevidir." }, { metin: "Sabit süratli çember hareketinde hep merkeze bakar.", cevap: "sag", neden: "Sürat sabitken yalnız yön değişir; bu, merkeze doğru bir ivme ister." }, { metin: "Eğriye her noktada teğettir.", cevap: "sol", neden: "Hız, hareket yönünü gösterir." }] }
      ]
    },
    {
      baslik: "Vektör integrali de bileşen bileşen",
      kisa: "∫ v dt = ⟨∫x′ dt, ∫y′ dt⟩ + C; sabit de bir vektördür.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "∫ v(t) dt", alt: "belirsiz integral" }, "=", { t: "⟨∫x′ dt, ∫y′ dt⟩ + ⟨C₁, C₂⟩", alt: "iki sabit" }], aciklama: "Belirli integral: ∫ₐᵇ v(t) dt = ⟨∫ₐᵇ x′ dt, ∫ₐᵇ y′ dt⟩ = r(b) − r(a), yani ==yer değiştirme== vektörü." },
        { tip: "ornek", baslik: "v(t) = ⟨2t, 3t²⟩ ve r(0) = ⟨1, 2⟩", durum: "r(t)'yi bul ve [0, 2] aralığındaki yer değiştirmeyi hesapla.", adimlar: ["Her bileşeni integral al: ∫2t dt = t² + C₁ ve ∫3t² dt = t³ + C₂.", "r(0) = ⟨C₁, C₂⟩ = ⟨1, 2⟩, yani C₁ = 1 ve C₂ = 2.", "r(t) = ⟨t² + 1, t³ + 2⟩.", "∫₀² v dt = ⟨4, 8⟩. Kontrol: r(2) − r(0) = ⟨5, 10⟩ − ⟨1, 2⟩ = ⟨4, 8⟩."], sonuc: "r(t) = ⟨t² + 1, t³ + 2⟩; yer değiştirme ⟨4, 8⟩" },
        { tip: "tuzak", metin: "Belirli integral yer değiştirme verir, konumu değil. Konum için başlangıç konumunu eklemelisin.", yanlis: "∫₀² v dt = ⟨4, 8⟩ olduğuna göre t = 2'de parçacık ⟨4, 8⟩ noktasındadır.", dogru: "r(2) = r(0) + ∫₀² v dt = ⟨1, 2⟩ + ⟨4, 8⟩ = ⟨5, 10⟩. Her bileşenin ayrı bir sabiti vardır." }
      ]
    },
    {
      baslik: "Parametrik dil ile vektör dili aynı şey",
      kisa: "Parametrik türev, sürat ve yay uzunluğu vektör dilinde r, v ve |v|'dir.",
      bloklar: [
        { tip: "tablo", baslik: "İki yazılış, aynı kavramlar", head: ["Parametrik dil", "Vektör dili"], rows: [["(x(t), y(t)) noktası", "konum r(t) = ⟨x(t), y(t)⟩"], ["dx/dt ve dy/dt", "hız v(t) = ⟨x′, y′⟩"], ["eğim dy/dx = (dy/dt)/(dx/dt)", "v'nin eğimi y′/x′"], ["√((dx/dt)² + (dy/dt)²)", "sürat |v(t)|"], ["yay uzunluğu ∫√(…) dt", "∫|v(t)| dt"]], vurgu: 3, not: "Biri öğrenildi mi öbürü hazır: konu 9.1–9.3'teki her formül v ile yazılabilir." },
        { tip: "ornek", baslik: "r(t) = ⟨t², (2/3)t³⟩", durum: "Önceki konudaki eğriyi vektör diliyle yaz.", adimlar: ["v(t) = ⟨2t, 2t²⟩.", "Eğim: y′/x′ = 2t²/2t = t.", "Sürat: |v| = √(4t² + 4t⁴) = 2t√(1 + t²).", "Yay uzunluğu: ∫₀^√3 |v| dt = 14/3."], sonuc: "Eğim t, sürat 2t√(1 + t²), yay uzunluğu 14/3" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: ["r(t) = ⟨x(t), y(t)⟩ konum vektörüdür; ucu parametrik eğrinin noktasıdır.", "Türev bileşen bileşen: v = r′ = ⟨x′, y′⟩ hız, a = v′ = r″ = ⟨x″, y″⟩ ivme.", "Hız vektördür; sürat |v| = √(x′² + y′²) bir sayıdır, her zaman ≥ 0.", "Hız yörüngeye teğettir; v'nin eğimi y′/x′ = dy/dx.", "İntegral de bileşen bileşen: ∫v dt = ⟨∫x′ dt, ∫y′ dt⟩ + C, C bir vektör.", "Belirli integral yer değiştirme verir: ∫ₐᵇ v dt = r(b) − r(a). Konum için r(a)'yı ekle.", "Başlangıç koşulundan her bileşenin kendi sabitini bul."] }
      ]
    }
  ],
  sorular: [
    {
      q: "r(t) = ⟨t³, ln t⟩ ise t = 1'de hız vektörü hangisidir?",
      opts: [
        "⟨1, 0⟩",
        "⟨3, 0⟩",
        "⟨3, 1⟩",
        "⟨1, 1⟩"
      ],
      a: 2,
      why: "v(t) = ⟨3t², 1/t⟩; t = 1 için ⟨3, 1⟩. ⟨1, 0⟩ konum vektörü r(1)'dir; ⟨3, 0⟩, y bileşeninin türevinde 1/t yerine ln t'nin değerini yazmaktır."
    },
    {
      q: "r(t) = ⟨t², t³⟩ ise t = 2'de ivme vektörü hangisidir?",
      opts: [
        "⟨2, 12⟩",
        "⟨4, 12⟩",
        "⟨2, 6⟩",
        "⟨4, 8⟩"
      ],
      a: 0,
      why: "v = ⟨2t, 3t²⟩ ve a = ⟨2, 6t⟩; t = 2'de ⟨2, 12⟩. ⟨4, 12⟩ hız vektörüdür; ⟨2, 6⟩, 6t'deki t'yi yerine koymayı unutur; ⟨4, 8⟩ ise konumdur."
    },
    {
      q: "Bir parçacığın hızı v(t) = ⟨2t, cos t⟩ ve başlangıç konumu r(0) = ⟨1, 0⟩'dır. t = π/2'deki konum nedir?",
      opts: [
        "⟨π²/4, 1⟩",
        "⟨π²/4 + 1, −1⟩",
        "⟨π²/2 + 1, 1⟩",
        "⟨π²/4 + 1, 1⟩"
      ],
      a: 3,
      why: "r(t) = ⟨t² + C₁, sin t + C₂⟩ ve r(0) = ⟨1, 0⟩ ⇒ C₁ = 1, C₂ = 0. r(π/2) = ⟨π²/4 + 1, 1⟩. İlk şık başlangıç konumunu eklemeyi unutur; ikinci şık sin(π/2) = 1 yerine −1 yazar."
    },
    {
      q: "Bir robot kolunun ucunun hız bileşenleri tabloda veriliyor. Robot ucu hangi anda en hızlıdır?",
      fig: {
        type: "table",
        head: ["t", "x′(t)", "y′(t)"],
        rows: [["0", "−6", "8"], ["1", "0", "−9"], ["2", "5", "−5"]],
        caption: "Hız bileşenleri"
      },
      opts: [
        "t = 1",
        "t = 0",
        "t = 2",
        "Üç anda da aynı"
      ],
      a: 1,
      why: "Sürat √(x′² + y′²): t = 0'da √(36 + 64) = 10, t = 1'de 9, t = 2'de √50 ≈ 7,07. En çekici yanlış şık t = 1: tablodaki en büyük tek sayı (−9) orada, ama sürat bileşenlerin birlikte büyüklüğüdür."
    },
    {
      q: "Bir oyuncak araba r(t) = ⟨5cos 2t, 5sin 2t⟩ yolunu izliyor. Arabanın süratı her an kaçtır?",
      opts: [
        "5",
        "10",
        "20",
        "50"
      ],
      a: 1,
      why: "v = ⟨−10sin 2t, 10cos 2t⟩ ve |v| = 10 sabit. 5 yarıçaptır; 20 ise ivmenin büyüklüğüdür (a = ⟨−20cos 2t, −20sin 2t⟩), sürat değil."
    }
  ]
};
