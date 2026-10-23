/* Kitpath not defteri · pc102 · M.2 Türev Kuralları ve Zincir Kuralı
   Kaynak: ap-videolar/src/episodes/pc102 (script.ts + notes.md) ve Ada'nın ders sunumu (Differentiation). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc102",
  amac: "Bu konu türev alet çantanı genişletiyor: çarpım ve bölüm kuralı, sin, cos, eˣ ve ln x türevleri ve en önemlisi zincir kuralı. Sonunda yaydaki bir bloğun konumundan hız ve ivmeyi türetip a = −25x ilişkisini göstereceksin.",
  bolumler: [
    {
      baslik: "Yaydaki blok: power rule yetmiyor",
      kisa: "Kosinüslü konum için yeni türev araçlarına ihtiyaç var.",
      bloklar: [
        { tip: "hikaye", ikon: "🌀", baslik: "Salınan blok", metin: "Duvara yayla bağlı bir blok ileri geri salınıyor; konumu bir kosinüs dalgası: x(t) = 0,10 cos 5t metre. Hızını bulmak istiyorsun ama *power rule* burada işe yaramıyor, çünkü cos 5t bir kuvvet değil. Bugün alet çantasına dört şey ekliyoruz." },
        { tip: "harita", merkez: "Yeni türev araçları",
            dallar: [
              { baslik: "*Product rule*", alt: "u·w çarpımı" },
              { baslik: "*Quotient rule*", alt: "u/w bölümü: tanımak yeter" },
              { baslik: "sin · cos · eˣ · ln x", alt: "temel fonksiyonların türevleri" },
              { baslik: "*Chain rule*", alt: "iç içe fonksiyon: sınavın yıldızı" }
            ] },
        { tip: "grafik", baslik: "Yaydaki bloğun konumu: x(t) = 0,10 cos 5t (m)", xlabel: "t (s)", ylabel: "x (m)", xmax: 2.5, ymax: 0.2, xticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }, { v: 1.5, label: "1,5" }, { v: 2, label: "2" }, { v: 2.5, label: "2,5" }], yticks: [{ v: 0, label: "−0,1" }, { v: 0.1, label: "0" }, { v: 0.2, label: "0,1" }],
            ogeler: [
              { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 0.1], to: [2.5, 0.1] },
              { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0.2], [0.1, 0.188], [0.2, 0.154], [0.3, 0.107], [0.4, 0.058], [0.5, 0.02], [0.6, 0.001], [0.7, 0.006], [0.8, 0.035], [0.9, 0.079], [1, 0.128], [1.1, 0.171], [1.2, 0.196], [1.3, 0.198], [1.4, 0.175], [1.5, 0.135], [1.6, 0.085], [1.7, 0.04], [1.8, 0.009], [1.9, 0], [2, 0.016], [2.1, 0.052], [2.2, 0.1], [2.3, 0.148], [2.4, 0.184], [2.5, 0.2]] },
              { id: "amp", tip: "nokta", x: 0, y: 0.2, kilavuz: true, etiket: "genlik 0,10 m", renk: 1, gizli: true },
              { id: "per", tip: "nokta", x: 1.2566, y: 0.2, kilavuz: true, etiket: "T ≈ 1,26 s", renk: 2, gizli: true }
            ],
            durumlar: [
              { metin: "Blok denge noktasının (x = 0) iki yanında kosinüs dalgası çiziyor." },
              { metin: "En uç konum 0,10 m; t = 0'da blok sağ uçta.", goster: ["amp"] },
              { metin: "Bir tam salınım T = 2π/5 ≈ 1,26 s sürer; sonra blok yine aynı yerde.", goster: ["per"] }
            ] }
      ]
    },
    {
      baslik: "Çarpım ve bölüm kuralları",
      kisa: "Çarpımda u′w + uw′; bölümde çoğu zaman negatif üs daha hızlı.",
      bloklar: [
        { tip: "kavramlar",
            kartlar: [
              { ikon: "✖️", terim: "Product rule", tr: "çarpım kuralı", tanim: "İki fonksiyonun çarpımının türevi: (u·w)′ = u′w + uw′. İki türevin çarpımı değildir.", ornek: "d/dt [t³(2t + 1)] = 3t²(2t + 1) + t³·2 = 8t³ + 3t²." },
              { ikon: "➗", terim: "Quotient rule", tr: "bölüm kuralı", tanim: "(u/w)′ = (u′w − uw′) / w². Fizik C'de nadiren gerekir; tanımak yeter.", ornek: "t²/(t + 1) → (2t(t + 1) − t²)/(t + 1)² = (t² + 2t)/(t + 1)²." }
            ] },
        { tip: "ornek", baslik: "d/dt [t³(2t + 1)]", durum: "u = t³, w = 2t + 1 olsun.", sonuc: "d/dt [t³(2t + 1)] = ==8t³ + 3t²==.",
            adimlar: [
              "u′ = 3t², w′ = 2",
              "u′w + uw′ = 3t²(2t + 1) + t³·2",
              "Aç: 6t³ + 3t² + 2t³ = 8t³ + 3t²",
              "Kontrol: önce açıp türet: t³(2t + 1) = 2t⁴ + t³ → 8t³ + 3t². Aynı. t = 2'de 8·8 + 3·4 = 76."
            ] },
        { tip: "ikili", sol: { ikon: "⚡", baslik: "Negatif üsle yaz", maddeler: ["Paydada yalnız t'nin kuvveti varsa", "3/t² = 3t⁻² → türevi −6t⁻³ = −6/t³"] }, sag: { ikon: "➗", baslik: "Bölüm kuralı", maddeler: ["Paydada toplam gibi karmaşık bir ifade varsa", "Fizik C'de nadir; tanımak yeter"] },
            oyun: [
              { metin: "5/t³ ifadesinin türevi isteniyor.", cevap: "sol", neden: "Paydada yalnız kuvvet var: 5t⁻³ → −15t⁻⁴." },
              { metin: "(t² + 1)/(t + 3) ifadesinin türevi isteniyor.", cevap: "sag", neden: "Paydada toplam var; negatif üsle yazılamaz, bölüm kuralı gerekir." },
              { metin: "4/t ifadesinin türevi isteniyor.", cevap: "sol", neden: "4t⁻¹ → −4t⁻² = −4/t²." },
              { metin: "(2t + 1)/(t² + 4) ifadesinin türevi isteniyor.", cevap: "sag", neden: "Pay ve payda karmaşık: bölüm kuralı." }
            ] },
        { tip: "tuzak", metin: "Çarpım kuralında en sık hata, iki türevi çarpmaktır.", yanlis: "(t³ · (2t + 1))′ = 3t² · 2 = 6t²", dogru: "(uw)′ = u′w + uw′: iki terimli, 8t³ + 3t²." }
      ]
    },
    {
      baslik: "Sinüs, kosinüs ve radyan",
      kisa: "sin t'nin türevi cos t, cos t'nin türevi −sin t; hep radyanda.",
      bloklar: [
        { tip: "grafik", baslik: "sin t'nin eğimlerini ölçüp çiz (eksen 1,2 yukarı kaydırıldı; kesikli çizgi y = 0)", xlabel: "t (rad)", ylabel: "y", xmax: 7, ymax: 2.4, xticks: [{ v: 1.5708, label: "π/2" }, { v: 3.1416, label: "π" }, { v: 4.7124, label: "3π/2" }, { v: 6.2832, label: "2π" }], yticks: [{ v: 0.2, label: "−1" }, { v: 1.2, label: "0" }, { v: 2.2, label: "1" }],
            ogeler: [
              { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 1.2], to: [7, 1.2] },
              { id: "s", tip: "egri", renk: 0, noktalar: [[0, 1.2], [0.2618, 1.4588], [0.5236, 1.7], [0.7854, 1.9071], [1.0472, 2.066], [1.309, 2.1659], [1.5708, 2.2], [1.8326, 2.1659], [2.0944, 2.066], [2.3562, 1.9071], [2.618, 1.7], [2.8798, 1.4588], [3.1416, 1.2], [3.4034, 0.9412], [3.6652, 0.7], [3.927, 0.4929], [4.1888, 0.334], [4.4506, 0.2341], [4.7124, 0.2], [4.9742, 0.2341], [5.236, 0.334], [5.4978, 0.4929], [5.7596, 0.7], [6.0214, 0.9412], [6.2832, 1.2]], etiket: "sin t" },
              { id: "g0", tip: "cizgi", renk: 2, from: [0, 1.2], to: [0.8, 2], gizli: true },
              { id: "g1", tip: "cizgi", renk: 2, from: [0.771, 2.2], to: [2.371, 2.2], gizli: true },
              { id: "g2", tip: "cizgi", renk: 2, from: [2.342, 2], to: [3.942, 0.4], gizli: true },
              { id: "g3", tip: "cizgi", renk: 2, from: [3.912, 0.2], to: [5.512, 0.2], gizli: true },
              { id: "g4", tip: "cizgi", renk: 2, from: [5.483, 0.4], to: [7, 1.917], gizli: true },
              { id: "d0", tip: "nokta", x: 0, y: 2.2, etiket: "1", renk: 1, gizli: true },
              { id: "d1", tip: "nokta", x: 1.5708, y: 1.2, etiket: "0", renk: 1, gizli: true },
              { id: "d2", tip: "nokta", x: 3.1416, y: 0.2, etiket: "−1", renk: 1, gizli: true },
              { id: "d3", tip: "nokta", x: 4.7124, y: 1.2, etiket: "0", renk: 1, gizli: true },
              { id: "d4", tip: "nokta", x: 6.2832, y: 2.2, etiket: "1", renk: 1, gizli: true },
              { id: "c", tip: "egri", renk: 1, noktalar: [[0, 2.2], [0.2618, 2.1659], [0.5236, 2.066], [0.7854, 1.9071], [1.0472, 1.7], [1.309, 1.4588], [1.5708, 1.2], [1.8326, 0.9412], [2.0944, 0.7], [2.3562, 0.4929], [2.618, 0.334], [2.8798, 0.2341], [3.1416, 0.2], [3.4034, 0.2341], [3.6652, 0.334], [3.927, 0.4929], [4.1888, 0.7], [4.4506, 0.9412], [4.7124, 1.2], [4.9742, 1.4588], [5.236, 1.7], [5.4978, 1.9071], [5.7596, 2.066], [6.0214, 2.1659], [6.2832, 2.2]], etiket: "cos t", gizli: true }
            ],
            durumlar: [
              { metin: "y = sin t. Bazı noktalarda eğimi (teğetin eğimini) ölçelim." },
              { metin: "t = 0'da eğim ==1==. Bu değeri aşağıya, yükseklik olarak işaretle.", goster: ["g0", "d0"] },
              { metin: "Tepede, t = π/2'de eğim ==0==.", goster: ["g1", "d1"] },
              { metin: "t = π'de eğim ==−1==.", goster: ["g2", "d2"] },
              { metin: "3π/2'de eğim 0, 2π'de yine 1.", goster: ["g3", "d3", "g4", "d4"] },
              { metin: "İşaretli eğimleri birleştirince **kosinüs eğrisi** çıkar: ==(sin t)′ = cos t==.", goster: ["c"] }
            ] },
        { tip: "tablo", baslik: "Hesap makinesiyle eğim tablosu (radyan modu)", head: ["t", "0", "π/4", "π/2", "3π/4", "π"], not: "Tanjant sin t / cos t olduğundan bölüm kuralı (tan t)′ = sec² t verir.",
            rows: [
              ["sin t eğimi (= cos t)", "1", "0,71", "0", "−0,71", "−1"],
              ["cos t eğimi (= −sin t)", "0", "−0,71", "−1", "−0,71", "0"]
            ] },
        { tip: "kavramlar", kartlar: [{ ikon: "📐", terim: "Radian", tr: "radyan", tanim: "Açıyı yay uzunluğunun yarıçapa oranıyla ölçen birim (π rad = 180°). Türev formülleri yalnızca radyanda geçerlidir.", ornek: "(sin t)′ = cos t ancak t radyan ise doğrudur." }] },
        { tip: "tuzak", metin: "Hesap makinen DEGREE modundaysa sinüs ve kosinüs eğimleri bozulur.", yanlis: "Derece modunda da (sin t)′ = cos t sonuçları aynı çıkar.", dogru: "Kurallar radyan için yazıldı: MODE → RADIAN. Sınava girmeden ayarı kontrol et." }
      ]
    },
    {
      baslik: "eˣ ve ln x",
      kisa: "eˣ kendi türevidir; ln x'in türevi 1/x (eğim aynada tersine döner).",
      bloklar: [
        { tip: "kavramlar",
            kartlar: [
              { ikon: "📈", terim: "Exponential function", tr: "üstel fonksiyon", tanim: "eˣ: her noktada eğimi yüksekliğine eşit olan fonksiyon (e ≈ 2,718). (eˣ)′ = eˣ.", ornek: "(1; e) noktasında yükseklik e, eğim de e." },
              { ikon: "🪞", terim: "Natural logarithm", tr: "doğal logaritma", tanim: "ln x, eˣ'in ters fonksiyonudur; grafiği y = x doğrusuna göre eˣ'in aynasıdır. (ln x)′ = 1/x.", ornek: "(e; 1) noktasında eğim 1/e ≈ 0,368." }
            ] },
        { tip: "grafik", baslik: "eˣ ve ln x: y = x doğrusuna göre ayna", xlabel: "x", ylabel: "y", xmax: 5.8, ymax: 4, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
            ogeler: [
              { id: "e", tip: "egri", renk: 0, noktalar: [[0, 1], [0.2, 1.2214], [0.4, 1.4918], [0.6, 1.8221], [0.8, 2.2255], [1, 2.7183], [1.2, 3.3201], [1.38, 3.9749]], etiket: "eˣ" },
              { id: "p1", tip: "nokta", x: 1, y: 2.7183, etiket: "(1; e)", renk: 0 },
              { id: "t1", tip: "cizgi", renk: 0, from: [0.3, 0.8155], to: [1.4, 3.8056], etiket: "eğim e" },
              { id: "m", tip: "cizgi", renk: 3, kesik: true, from: [0, 0], to: [4, 4], etiket: "y = x", gizli: true },
              { id: "l", tip: "egri", renk: 1, noktalar: [[1, 0], [1.1, 0.0953], [1.2, 0.1823], [1.35, 0.3001], [1.5, 0.4055], [1.75, 0.5596], [2, 0.6931], [2.5, 0.9163], [3, 1.0986], [3.5, 1.2528], [4, 1.3863], [4.5, 1.5041], [5, 1.6094], [5.8, 1.7579]], etiket: "ln x", gizli: true },
              { id: "p2", tip: "nokta", x: 2.7183, y: 1, etiket: "(e; 1)", renk: 1, gizli: true },
              { id: "t2", tip: "cizgi", renk: 1, from: [1.5, 0.5518], to: [5.5, 2.0233], etiket: "eğim 1/e", gizli: true }
            ],
            durumlar: [
              { metin: "y = eˣ: (1; e) noktasında yükseklik e ≈ 2,72 ve teğetin eğimi de ==e==. Her noktada eğim = yükseklik." },
              { metin: "ln x, eˣ'in ters fonksiyonu: grafiği y = x doğrusuna göre eˣ'in aynasıdır. (a; b) noktası (b; a) olur.", goster: ["m"] },
              { metin: "Aynadaki eğri ln x.", goster: ["l"] },
              { metin: "Aynada eğimler tersine döner: (e; 1) noktasında eğim ==1/e ≈ 0,368==. Yani ==(ln x)′ = 1/x==.", goster: ["p2", "t2"] }
            ] }
      ]
    },
    {
      baslik: "Zincir kuralı",
      kisa: "Dışın türevi (içi aynen), çarpı içinin türevi.",
      bloklar: [
        { tip: "adimlar", baslik: "Bisiklet dişlisi: oranlar çarpılır",
            adimlar: [
              { baslik: "Pedal → arka dişli", metin: "Pedalı bir tur çevirince arka dişli 3 tur döner (oran 3)." },
              { baslik: "Arka dişli → teker", metin: "Arka dişli bir tur dönünce teker de 1 tur döner (oran 1)." },
              { baslik: "Pedal → teker", metin: "Pedal başına teker 3 × 1 = ==3 tur==. İç içe oranlar çarpılır." }
            ] },
        { tip: "formul", parcalar: [{ t: "dy/dt", alt: "y'nin t'ye göre türevi" }, "=", { t: "dy/du", alt: "dışın türevi (içi aynen)" }, "×", { t: "du/dt", alt: "için türevi" }], aciklama: "Leibniz yazımında du'lar sadeleşiyor gibi görünür; akılda tutması kolay." },
        { tip: "kavramlar",
            kartlar: [
              { ikon: "⛓️", terim: "Chain rule", tr: "zincir kuralı", tanim: "İç içe fonksiyonun türevi: dışın türevi (içi aynen bırakarak) çarpı iç fonksiyonun türevi.", ornek: "d/dt cos(5t) = −sin(5t) · 5." },
              { ikon: "🧅", terim: "Outer function", tr: "dış fonksiyon", tanim: "En son uygulanan fonksiyon: cos, üs alma, e^… gibi.", ornek: "cos(5t)'de dış fonksiyon cos." },
              { ikon: "🥚", terim: "Inner function", tr: "iç fonksiyon", tanim: "Dış fonksiyonun içindeki ifade; u diye adlandırılır.", ornek: "cos(5t)'de iç fonksiyon 5t, türevi 5." }
            ] },
        { tip: "tuzak", metin: "En sık hata, iç fonksiyonun türevini yazmayı unutmaktır.", yanlis: "d/dt cos(5t) = −sin(5t)", dogru: "−sin(5t) · 5 = −5 sin(5t). Zincirdeki iç türevi (burada 5) her zaman çarp." }
      ]
    },
    {
      baslik: "Zincir kuralı örnekleri",
      kisa: "Dış, iç, çarp: her örnekte aynı üç adım.",
      bloklar: [
        { tip: "ornek", baslik: "d/dt (3t² + 1)⁵", durum: "Dış fonksiyon u⁵, iç fonksiyon u = 3t² + 1.", sonuc: "d/dt (3t² + 1)⁵ = ==30t (3t² + 1)⁴==; t = 1'de 30 · 4⁴ = 7680.",
            adimlar: [
              "Dış: u⁵ → 5u⁴; içi aynen bırak: 5(3t² + 1)⁴",
              "İç: u = 3t² + 1 → du/dt = 6t",
              "Çarp: 5(3t² + 1)⁴ · 6t"
            ] },
        { tip: "tablo", baslik: "Fizikte sık göreceğin zincirler", head: ["Fonksiyon", "Dış → türevi", "İç → türevi", "Sonuç"],
            rows: [
              ["cos(5t)", "cos u → −sin u", "5t → 5", "−5 sin(5t)"],
              ["e^(−2t)", "e^u → e^u", "−2t → −2", "−2 e^(−2t)"],
              ["ln(4t)", "ln u → 1/u", "4t → 4", "(1/(4t)) · 4 = 1/t"],
              ["√(t²), t > 0", "√u → 1/(2√u)", "t² → 2t", "2t/(2t) = 1 (t'nin türeviyle aynı)"]
            ] },
        { tip: "grafik", baslik: "e^(−2t): sönen üstel; teğet eğimi hep negatif", xlabel: "t (s)", ylabel: "y", xmax: 2, ymax: 1, xticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }, { v: 1.5, label: "1,5" }, { v: 2, label: "2" }], yticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }],
            ogeler: [
              { id: "c", tip: "egri", renk: 0, noktalar: [[0, 1], [0.1, 0.819], [0.2, 0.67], [0.3, 0.549], [0.4, 0.449], [0.5, 0.368], [0.6, 0.301], [0.7, 0.247], [0.8, 0.202], [0.9, 0.165], [1, 0.135], [1.1, 0.111], [1.2, 0.091], [1.3, 0.074], [1.4, 0.061], [1.5, 0.05], [1.6, 0.041], [1.7, 0.033], [1.8, 0.027], [1.9, 0.022], [2, 0.018]], etiket: "e^(−2t)" },
              { id: "t0", tip: "cizgi", renk: 2, from: [0, 1], to: [0.5, 0], etiket: "eğim −2", gizli: true },
              { id: "t5", tip: "cizgi", renk: 1, from: [0.2, 0.5886], to: [1, 0], etiket: "eğim −0,74", gizli: true }
            ],
            durumlar: [
              { metin: "y = e^(−2t) sürekli azalır ve sıfıra yaklaşır; sönen hareketlerin modelidir." },
              { metin: "t = 0'da y = 1 ve eğim −2·1 = ==−2==.", goster: ["t0"] },
              { metin: "t = 0,5 s'de y = e⁻¹ ≈ 0,37; eğim −2·0,37 ≈ ==−0,74==. Eğim her yerde −2·(yükseklik).", goster: ["t5"] }
            ] }
      ]
    },
    {
      baslik: "AP örneği: yayın hızı ve ivmesi",
      kisa: "İki kez zincir kuralı: a = −25x, yani ivme konuma zıt.",
      bloklar: [
        { tip: "ornek", baslik: "x = 0,10 cos 5t", durum: "Yaydaki bloğun konumu x(t) = 0,10 cos(5t) m. v(t) ve a(t)'yi türet; a = −25x olduğunu göster.", sonuc: "v = ==−0,50 sin 5t==, a = ==−2,5 cos 5t== = ==−25x==; |v|max = 0,50 m/s.",
            adimlar: [
              "v = dx/dt = 0,10 · (−sin 5t) · 5 = −0,50 sin 5t",
              "a = dv/dt = −0,50 · (cos 5t) · 5 = −2,5 cos 5t",
              "−2,5 cos 5t = −25 · (0,10 cos 5t) = −25x",
              "Sürat en çok 0,50 m/s (|sin 5t| ≤ 1)."
            ] },
        { tip: "grafik", baslik: "v(t) = −0,50 sin 5t (m/s); eksen 0,6 yukarı kaydırıldı, kesikli çizgi v = 0", xlabel: "t (s)", ylabel: "v (m/s)", xmax: 1.5, ymax: 1.2, xticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }, { v: 1.5, label: "1,5" }], yticks: [{ v: 0.1, label: "−0,5" }, { v: 0.6, label: "0" }, { v: 1.1, label: "0,5" }],
            ogeler: [
              { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 0.6], to: [1.5, 0.6] },
              { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0.6], [0.0785, 0.4088], [0.1571, 0.2464], [0.2356, 0.1381], [0.3142, 0.1], [0.3927, 0.1381], [0.4712, 0.2464], [0.5498, 0.4087], [0.6283, 0.6], [0.7069, 0.7914], [0.7854, 0.9536], [0.8639, 1.0619], [0.9425, 1.1], [1.021, 1.062], [1.0996, 0.9535], [1.1781, 0.7913], [1.2566, 0.6001]] },
              { id: "p0", tip: "nokta", x: 0, y: 0.6, etiket: "t = 0", renk: 1, gizli: true },
              { id: "p1", tip: "nokta", x: 0.3142, y: 0.1, etiket: "t = π/10", renk: 2, gizli: true },
              { id: "p2", tip: "nokta", x: 0.6283, y: 0.6, etiket: "t = π/5", renk: 1, gizli: true }
            ],
            durumlar: [
              { metin: "Hız da bir sinüs dalgası: genliği 0,50 m/s. Konum kosinüs, hız −sinüs." },
              { metin: "t = 0: v = 0, blok sağ uçta (x = 0,10 m); a = −2,5 m/s², yani sola.", goster: ["p0"] },
              { metin: "t = π/10 ≈ 0,31 s: blok denge noktasında (x = 0); sürat en büyük, ==|v| = 0,50 m/s==; a = 0.", goster: ["p1"] },
              { metin: "t = π/5 ≈ 0,63 s: v = 0, blok sol uçta (x = −0,10 m); a = +2,5 m/s², yani sağa.", goster: ["p2"] }
            ] }
      ]
    },
    {
      baslik: "Sınav ne ister?",
      kisa: "Power ve zincir kuralı sin, cos, e^(kt) ile; derive'da sembolik yaz.",
      bloklar: [
        { tip: "liste",
            maddeler: [
              { ikon: "🟢", baslik: "Her ünitede: power + zincir kuralı", metin: "sin(ωt), cos(ωt) ve e^(kt) türevleri hızlı olmalı." },
              { ikon: "🟡", baslik: "Ara sıra: çarpım kuralı", metin: "t·e^(−t) gibi çarpımlarda." },
              { ikon: "⚪", baslik: "Neredeyse hiç: bölüm kuralı, ters trigonometrik türevler", metin: "Kapalı türev ve uzun cebir de beklenmez; bölümü negatif üsle yaz." },
              { ikon: "🧮", baslik: "Hesap makinesi", metin: "Sayısal türev (nDeriv) alabilir, ama puanı elle yazdığın ifade getirir." }
            ] },
        { tip: "tuzak", metin: "*Derive* diyen soruda cevabı sembollerle yazman gerekir.", yanlis: "Hesap makinesinin sayısal türevi yeter: v(0) = 8.", dogru: "v = −Aω sin(ωt) gibi ifadeyi kendin türet ve yaz; sayıyı sonra yerine koy." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet",
            maddeler: [
              "Çarpım kuralı: (uw)′ = u′w + uw′; iki türevin çarpımı değil.",
              "Bölüm kuralını tanı; çoğu zaman negatif üs daha hızlı (3/t² = 3t⁻²).",
              "(sin t)′ = cos t, (cos t)′ = −sin t; hesap makinesi radyan modunda.",
              "(eˣ)′ = eˣ ve (ln x)′ = 1/x.",
              "Zincir kuralı: dışın türevi (içi aynen) × içinin türevi; iç türevi unutma.",
              "e^(−2t) → −2e^(−2t); cos(5t) → −5 sin(5t); ln(4t) → 1/t.",
              "x = 0,10 cos 5t → v = −0,50 sin 5t → a = −2,5 cos 5t = −25x.",
              "Derive isteyen soruda sembolik yaz; sayısal türev yetmez."
            ] }
      ]
    }
  ]
};
