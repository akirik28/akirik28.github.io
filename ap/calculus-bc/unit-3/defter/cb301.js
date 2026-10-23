/* Kitpath not defteri · cb301 · 3.1-1 Zincir Kuralı
   Kaynak: ap-videolar/src/episodes/cb301 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb301",
  amac: "Bu konu *chain rule* yani zincir kuralını anlatıyor: bir fonksiyonun içinde başka bir fonksiyon varsa türevi nasıl alınır? Dış ve iç fonksiyonu ayırmayı, iç türevi unutmadan çarpmayı ve teğet doğrusunu yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Hızlar çarpılır: üç dişli çark",
      kisa: "İç içe değişimlerde hızlar toplanmaz, çarpılır.",
      bloklar: [
        { tip: "hikaye", ikon: "⚙️", baslik: "Üç dişli çark",
          metin: "Büyük çark bir tur dönünce ortanca çark 3 tur dönüyor. Ortanca bir tur dönünce küçük çark 2 tur dönüyor. Büyük çark bir tur dönerse küçük çark kaç tur atar? 3 × 2 = 6. Hızlar toplanmaz, **çarpılır**." },
        { tip: "formul", parcalar: [
            { t: "dB/dA = 3", alt: "büyük 1 tur → ortanca 3 tur" }, "×",
            { t: "dC/dB = 2", alt: "ortanca 1 tur → küçük 2 tur" }, "=",
            { t: "dC/dA = 6", alt: "büyük 1 tur → küçük 6 tur" }
          ], aciklama: "Zincir kuralının bütün fikri bu: ==iç içe geçmiş fonksiyonların türevi, değişim hızlarının çarpımıdır.==" },
        { tip: "kavramlar", kartlar: [
            { ikon: "⏱️", terim: "Rate of change", tr: "değişim hızı", tanim: "Bir niceliğin, başka bir nicelik değişirken ne kadar hızlı değiştiği. Türev bu hızı verir.", ornek: "Büyük çark 1 tur dönerken ortanca çark 3 tur döner: hız 3." }
          ] }
      ]
    },
    {
      baslik: "Bileşke fonksiyon: dışta ne, içte ne?",
      kisa: "Türev almadan önce sor: en dışta ne var, içinde ne var?",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪆", terim: "Composite function", tr: "bileşke fonksiyon", tanim: "Bir fonksiyonun içine başka bir fonksiyon konmuş hali: x önce g'ye, çıkan sonuç f'ye girer. Yazılışı f(g(x)).", ornek: "sin(3x) ve √(x² + 9) birer bileşke fonksiyondur." },
            { ikon: "📦", terim: "Outer function", tr: "dış fonksiyon", tanim: "En son uygulanan, en dışta duran fonksiyon (f).", ornek: "sin(3x) içinde dış fonksiyon sinüstür." },
            { ikon: "🎁", terim: "Inner function", tr: "iç fonksiyon", tanim: "Önce uygulanan, parantezin içindeki fonksiyon (g).", ornek: "√(x² + 9) içinde iç fonksiyon x² + 9'dur." }
          ] },
        { tip: "ikili", sol: { ikon: "📦", baslik: "*Outer function*", maddeler: ["En son uygulanan, en dışta duran", "sin(3x) için: sin"] },
          sag: { ikon: "🎁", baslik: "*Inner function*", maddeler: ["Önce uygulanan, parantezin içindeki", "sin(3x) için: 3x"] },
          oyun: [
            { metin: "sin(3x) ifadesindeki sin", cevap: "sol", neden: "Sonuca en son uygulanan sinüstür: dış." },
            { metin: "√(x² + 9) ifadesindeki x² + 9", cevap: "sag", neden: "Kökün içinde duruyor, önce hesaplanır: iç." },
            { metin: "(x² + 3)⁵ ifadesindeki ⁵ kuvveti", cevap: "sol", neden: "Parantezin sonucuna en son uygulanır: dış." },
            { metin: "(x² + 3)⁵ ifadesindeki x² + 3", cevap: "sag", neden: "Kuvvet alınmadan önce hesaplanır: iç." }
          ] }
      ]
    },
    {
      baslik: "Zincir kuralı: üç hamle",
      kisa: "Dışın türevi, iç aynen, sonra iç türevle çarp.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "(f(g(x)))′", alt: "bileşkenin türevi" }, "=",
            { t: "f′(g(x))", alt: "dışın türevi, iç aynen" }, "×",
            { t: "g′(x)", alt: "için türevi" }
          ], aciklama: "Leibniz yazılışı: u = g(x) ise dy/dx = dy/du · du/dx. Dişlilerdeki gibi iki hız çarpılır; araya giren du sanki sadeleşir." },
        { tip: "adimlar", baslik: "Üç hamle", adimlar: [
            { baslik: "Dışın türevi", metin: "Dış fonksiyonun türevini al." },
            { baslik: "İç aynen", metin: "Parantezin içini olduğu gibi bırak." },
            { baslik: "İç türevle çarp", metin: "Sonuna içtekinin türevini çarpan olarak ekle." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "⛓️", terim: "Chain rule", tr: "zincir kuralı", tanim: "Bileşke fonksiyonun türevi: dışın türevi (iç aynen) çarpı için türevi.", ornek: "d/dx sin(3x) = cos(3x) · 3." },
            { ikon: "✍️", terim: "Leibniz notation", tr: "Leibniz yazılışı", tanim: "Türevi oran olarak yazan gösterim. Zincir kuralı: dy/dx = dy/du · du/dx.", ornek: "y = u⁵ ve u = x² + 3 ise dy/dx = 5u⁴ · 2x." },
            { ikon: "🔢", terim: "Power rule", tr: "kuvvet kuralı", tanim: "d/dx xⁿ = n·xⁿ⁻¹. Dış fonksiyon kuvvetse zincirle birlikte: (uⁿ)′ = n·uⁿ⁻¹·u′.", ornek: "(x² + 3)⁵ için dış türev 5(x² + 3)⁴." }
          ] }
      ]
    },
    {
      baslik: "Kuvvet ve kök zinciri",
      kisa: "Kökü kuvvete çevir, zinciri uygula, iç türevi unutma.",
      bloklar: [
        { tip: "ornek", baslik: "y = (x² + 3)⁵", durum: "dy/dx = ?",
          adimlar: [
            "Dış fonksiyon beşinci kuvvet, iç fonksiyon x² + 3.",
            "Dışın türevi, içi aynen bırakarak: 5(x² + 3)⁴.",
            "İçin türevi: (x² + 3)′ = 2x.",
            "Çarp: 5(x² + 3)⁴ · 2x."
          ], sonuc: "dy/dx = 10x(x² + 3)⁴" },
        { tip: "ornek", baslik: "y = √(4x + 1)", durum: "dy/dx = ? ve x = 2'de eğim kaç?",
          adimlar: [
            "Kökü kuvvet olarak yaz: y = (4x + 1)^(1/2).",
            "Dışın türevi: ½(4x + 1)^(−1/2). İçin türevi: 4.",
            "Çarp ve sadeleştir: ½ · 4 / √(4x + 1) = 2/√(4x + 1).",
            "x = 2 için: 2/√9 = 2/3."
          ], sonuc: "dy/dx = 2/√(4x + 1); x = 2'de eğim 2/3" },
        { tip: "grafik", baslik: "y = √(4x + 1) ve x = 2'deki teğet", xlabel: "x", ylabel: "y", xmax: 6, ymax: 5,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }], yticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 5, label: "5" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 1], [0.5, 1.732], [1, 2.236], [1.5, 2.646], [2, 3], [2.5, 3.317], [3, 3.606], [3.5, 3.873], [4, 4.123], [4.5, 4.359], [5, 4.583], [5.5, 4.796], [6, 5]] },
            { id: "p", tip: "nokta", renk: 2, x: 2, y: 3, etiket: "(2, 3)", kilavuz: true, gizli: true },
            { id: "t", tip: "cizgi", renk: 2, from: [0.5, 2], to: [3.5, 4], etiket: "eğim 2/3", gizli: true }
          ],
          durumlar: [
            { metin: "Eğri y = √(4x + 1): x büyüdükçe yükselir, ama gittikçe yavaşlar." },
            { metin: "x = 2'de y = √9 = 3: nokta (2, 3).", goster: ["p"] },
            { metin: "Teğetin eğimi 2/3: sağa 3 birim giderken 2 birim yükselir.", goster: ["t"] }
          ] },
        { tip: "tuzak", metin: "En sık hata iç türevi unutmaktır. Parantezi açıp beşinci kuvvetini hesaplamaya da kalkma; zincir kuralı daha kısa ve hatasız.", yanlis: "(x² + 3)⁵'in türevi 5(x² + 3)⁴.", dogru: "5(x² + 3)⁴ · 2x. Her zincirde \"içinde ne var?\" diye sor." }
      ]
    },
    {
      baslik: "Paydada kuvvet: negatif üs",
      kisa: "Paydadaki kuvveti yukarı al, negatif üsle zinciri uygula.",
      bloklar: [
        { tip: "ornek", baslik: "y = 1/(x² + 1)³", durum: "dy/dx = ? Grafiği nerede yatay teğet verir?",
          adimlar: [
            "Paydayı yukarı taşı: y = (x² + 1)^(−3).",
            "Dışın türevi: −3(x² + 1)^(−4). İçin türevi: 2x.",
            "Çarp: −6x/(x² + 1)⁴.",
            "x = 0 için türev 0: tepe noktasında teğet yatay. x = −0,5'te +1,23; x = 0,5'te −1,23."
          ], sonuc: "dy/dx = −6x/(x² + 1)⁴" },
        { tip: "grafik", baslik: "y = 1/(x² + 1)³ ve kayan teğet", xlabel: "x", ylabel: "y", xmax: 4, ymax: 1.2,
          xticks: [{ v: 0, label: "−2" }, { v: 1, label: "−1" }, { v: 2, label: "0" }, { v: 3, label: "1" }, { v: 4, label: "2" }], yticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }],
          ogeler: [
            { id: "ay", tip: "cizgi", renk: 1, kesik: true, from: [2, 0], to: [2, 1.2] },
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0.008], [0.25, 0.015], [0.5, 0.029], [0.75, 0.059], [1, 0.125], [1.25, 0.262], [1.5, 0.512], [1.75, 0.834], [2, 1], [2.25, 0.834], [2.5, 0.512], [2.75, 0.262], [3, 0.125], [3.25, 0.059], [3.5, 0.029], [3.75, 0.015], [4, 0.008]] },
            { id: "p", tip: "nokta", renk: 2, x: 1.5, y: 0.512, gizli: true },
            { id: "t", tip: "cizgi", renk: 2, from: [1.2, 0.143], to: [1.8, 0.881], etiket: "+1,23", gizli: true }
          ],
          durumlar: [
            { metin: "Çan biçimli eğri; kesikli çizgi x = 0 ekseni (gerçek y ekseni)." },
            { metin: "x = −0,5'te eğim +1,23: eğri yükseliyor, türev pozitif.", goster: ["p", "t"] },
            { metin: "x = 0'da eğim 0: tepe noktası, teğet yatay.", set: { p: { x: 2, y: 1 }, t: { from: [1.5, 1], to: [2.5, 1], etiket: "0" } } },
            { metin: "x = 0,5'te eğim −1,23: eğri iniyor, türev negatif.", set: { p: { x: 2.5, y: 0.512 }, t: { from: [2.2, 0.881], to: [2.8, 0.143], etiket: "−1,23" } } }
          ] },
        { tip: "tuzak", metin: "Paydada bir kuvvet varsa bölüm kuralına koşma; negatif üsle yazmak daha kısa ve hatasızdır.", yanlis: "1/(x² + 1)³ için bölüm kuralı şart.", dogru: "(x² + 1)^(−3) yaz, zincir kuralını uygula: −6x/(x² + 1)⁴." }
      ]
    },
    {
      baslik: "Trigonometri: karenin yeri",
      kisa: "sin²x ile sin(x²) farklı: dışta hangisi var, ona bak.",
      bloklar: [
        { tip: "tablo", baslik: "Aynı kural, farklı dış fonksiyon", head: ["İfade", "Dış", "İç", "Türev"],
          rows: [
            ["sin(3x)", "sin", "3x", "3cos(3x)"],
            ["sin²x = (sin x)²", "kare", "sin x", "2 sin x · cos x"],
            ["sin(x²)", "sin", "x²", "2x · cos(x²)"],
            ["cos(5x²)", "cos", "5x²", "−10x · sin(5x²)"]
          ], vurgu: 1, not: "Dış türev: sin → cos, cos → −sin. İç türevi (3, cos x, 2x, 10x) sona çarp." },
        { tip: "ikili", sol: { ikon: "🧮", baslik: "*sin²x* = (sin x)²", maddeler: ["Kare dışta", "Türev: 2 sin x · cos x"] },
          sag: { ikon: "🔲", baslik: "*sin(x²)*", maddeler: ["Kare açının içinde", "Türev: 2x · cos(x²)"] },
          oyun: [
            { metin: "Dış fonksiyon kare, iç fonksiyon sin x.", cevap: "sol", neden: "(sin x)² yazılışı: kare dışta." },
            { metin: "Türevi cos(x²) çarpı 2x.", cevap: "sag", neden: "Dış sinüs, iç x²; iç türev 2x." },
            { metin: "Türevi 2 sin x · cos x.", cevap: "sol", neden: "Karenin türevi 2 sin x, iç türev cos x." },
            { metin: "Kare, açının içinde duruyor.", cevap: "sag", neden: "sin(x²): sinüs dışta." }
          ] },
        { tip: "tuzak", metin: "Trigonometride en sık hata karenin yerini karıştırmaktır. Yazılışa dikkat: sin²x ile sin(x²) iki ayrı fonksiyondur.", yanlis: "sin²x ile sin(x²) aynı şeydir.", dogru: "sin²x = (sin x)² → 2 sin x cos x. sin(x²) → 2x cos(x²)." }
      ]
    },
    {
      baslik: "Zincirle teğet doğrusu",
      kisa: "Nokta ve eğimi bul, sonra y − y₀ = m(x − x₀) yaz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Tangent line", tr: "teğet doğrusu", tanim: "Eğriye bir noktada değen ve orada eğriyle aynı eğime sahip doğru: y − y₀ = m(x − x₀).", ornek: "(2, 1) noktasında eğim 16 ise y − 1 = 16(x − 2)." },
            { ikon: "📐", terim: "Slope", tr: "eğim", tanim: "Doğrunun dikliği; eğrinin bir noktadaki eğimi o noktadaki türevdir.", ornek: "y′(2) = 16 demek, orada eğri çok dik yükseliyor." }
          ] },
        { tip: "ornek", baslik: "y = (x² − 3)⁴ eğrisine x = 2'de teğet", durum: "Teğet doğrusunun denklemini yaz.",
          adimlar: [
            "Nokta: y(2) = (4 − 3)⁴ = 1. Nokta (2, 1).",
            "Türev: y′ = 4(x² − 3)³ · 2x = 8x(x² − 3)³.",
            "Eğim: y′(2) = 8 · 2 · 1³ = 16.",
            "Doğru: y − 1 = 16(x − 2)."
          ], sonuc: "y − 1 = 16(x − 2)" },
        { tip: "grafik", baslik: "y = (x² − 3)⁴ ve x = 2'deki teğet", xlabel: "x", ylabel: "y", xmax: 7, ymax: 12,
          xticks: [{ v: 0, label: "1,5" }, { v: 2, label: "1,7" }, { v: 5, label: "2" }, { v: 7, label: "2,2" }], yticks: [{ v: 1, label: "1" }, { v: 6, label: "6" }, { v: 12, label: "12" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0.316], [0.5, 0.127], [1, 0.037], [1.5, 0.006], [2, 0], [2.5, 0], [3, 0.003], [3.5, 0.032], [4, 0.138], [4.5, 0.415], [5, 1], [5.5, 2.091], [6, 3.953], [6.5, 6.93], [7, 11.462]] },
            { id: "p", tip: "nokta", renk: 2, x: 5, y: 1, etiket: "(2, 1)", kilavuz: true, gizli: true },
            { id: "t", tip: "cizgi", renk: 2, from: [4.5, 0.2], to: [6.5, 3.4], etiket: "eğim 16", gizli: true }
          ],
          durumlar: [
            { metin: "Eğri x = √3 ≈ 1,73'te sıfıra değer, sonra çok hızlı yükselir. (Yatay eksen 1,5'ten başlıyor.)" },
            { metin: "x = 2'de nokta (2, 1).", goster: ["p"] },
            { metin: "Teğet çok diktir: eğim 16.", goster: ["t"] }
          ] }
      ]
    },
    {
      baslik: "Zincir mi, çarpım mı?",
      kisa: "Yan yana ise çarpım kuralı, iç içe ise zincir kuralı.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✖️", terim: "Product rule", tr: "çarpım kuralı", tanim: "İki fonksiyon yan yana çarpılıyorsa: (uv)′ = u′v + uv′.", ornek: "d/dx (x² · sin x) = 2x sin x + x² cos x. Çoğu soruda çarpım ve zincir birlikte gelir." }
          ] },
        { tip: "ikili", sol: { ikon: "↔️", baslik: "Yan yana: çarpım kuralı", maddeler: ["İki fonksiyon × ile bağlı", "x² · sin x → 2x sin x + x² cos x"] },
          sag: { ikon: "🪆", baslik: "İç içe: zincir kuralı", maddeler: ["Biri ötekinin içinde", "sin(x²) → 2x cos(x²)"] },
          oyun: [
            { metin: "x² · sin x", cevap: "sol", neden: "İki fonksiyon yan yana çarpılıyor." },
            { metin: "sin(x²)", cevap: "sag", neden: "x², sinüsün içinde: iç içe." },
            { metin: "x · cos x", cevap: "sol", neden: "x ve cos x yan yana." },
            { metin: "(3x + 2)⁴", cevap: "sag", neden: "Kuvvetin içinde 3x + 2 var." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Önce dış ve iç fonksiyonu ayır: en dışta ne, içinde ne?",
            "Zincir kuralı: (f(g(x)))′ = f′(g(x)) · g′(x). Dışın türevi, iç aynen, iç türevle çarp.",
            "Leibniz yazılışı: dy/dx = dy/du · du/dx. Hızlar çarpılır.",
            "Kökü kuvvete çevir; paydadaki kuvveti negatif üsle yaz. Parantezi açma, bölüm kuralına koşma.",
            "En sık hata: iç türevi unutmak.",
            "sin²x = (sin x)² ile sin(x²) farklı: karenin yerine bak.",
            "Teğet doğrusu: nokta (x₀, y₀) ve eğim y′(x₀) bul, y − y₀ = m(x − x₀) yaz.",
            "Yan yana çarpım için çarpım kuralı, iç içe için zincir kuralı."
          ] }
      ]
    }
  ]
};
