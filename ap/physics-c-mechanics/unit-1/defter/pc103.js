/* Kitpath not defteri · pc103 · M.3 İntegral: Ters Türev ve Alan
   Kaynak: ap-videolar/src/episodes/pc103 (script.ts + notes.md) ve Ada'nın ders sunumu (Integration). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc103",
  amac: "Bu konu integrali anlatıyor: türevin tersini. Ters türev ailesini (+C), başlangıç koşuluyla C'yi bulmayı, belirli integrali işaretli alan olarak ve *Fundamental Theorem*'i öğrenecek; hızdan yer değiştirme ile yolu hesaplayacaksın.",
  bolumler: [
    {
      baslik: "Neden integral? Hızdan konuma",
      kisa: "Hız sürekli değişirken yer değiştirme, v–t grafiğinin altındaki alandır.",
      bloklar: [
        { tip: "hikaye", ikon: "🚗", baslik: "Hız göstergesi var, konum göstergesi yok", metin: "Arabanın göstergesinde hız yazar ama \"şu an kaçıncı metredesin\" yazan bir gösterge yoktur. Hız sabitse kolaydır: 10 m/s × 4 s = ==40 m==. Hız sürekli değişiyorsa türevin tersine gitmek gerekir: integral." },
        { tip: "grafik", baslik: "v–t grafiği: sabit hız ve değişen hız", xlabel: "t (s)", ylabel: "v (m/s)", xmax: 5, ymax: 12, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }],
            ogeler: [
              { id: "a", tip: "alan", renk: 1, noktalar: [[0, 0], [0, 10], [1, 10], [2, 10], [3, 10], [4, 10], [4, 0]], gizli: true },
              { id: "v", tip: "egri", renk: 0, noktalar: [[0, 10], [1, 10], [2, 10], [3, 10], [4, 10]] },
              { id: "m", tip: "yazi", x: 2, y: 4.5, metin: "10 × 4 = 40 m", gizli: true },
              { id: "q", tip: "yazi", x: 2, y: 4.5, metin: "alan = ?", gizli: true }
            ],
            durumlar: [
              { metin: "Hız sabit: v = 10 m/s, 4 saniye boyunca." },
              { metin: "Dikdörtgenin alanı 10 × 4 = ==40 m==: yer değiştirme.", goster: ["a", "m"] },
              { metin: "Hız sürekli değişirse üst kenar eğrilir. Altındaki alanı bulmak için türevin tersi gerekir: ==integral==.", set: { v: { noktalar: [[0, 5], [1, 8], [2, 10], [3, 11], [4, 11.5]] }, a: { noktalar: [[0, 0], [0, 5], [1, 8], [2, 10], [3, 11], [4, 11.5], [4, 0]] } }, gizle: ["m"], goster: ["q"] }
            ] },
        { tip: "formul", parcalar: [{ t: "x(t)", alt: "konum" }, "→ türev →", { t: "v(t)", alt: "hız" }, "→ türev →", { t: "a(t)", alt: "ivme" }], aciklama: "Oklar türev yönü. Geriye doğru (a → v → x) integral alırsın." }
      ]
    },
    {
      baslik: "Ters türev ve +C",
      kisa: "Ters türev tek fonksiyon değil, +C ile gelen bir ailedir.",
      bloklar: [
        { tip: "kavramlar",
            kartlar: [
              { ikon: "↩️", terim: "Antiderivative", tr: "ters türev", tanim: "F′ = f ise F, f'nin ters türevidir. Sabit türevde kaybolduğu için F + C de bir ters türevdir.", ornek: "t³, 3t²'nin bir ters türevidir; t³ + 5 de, t³ − 2 de." },
              { ikon: "📚", terim: "Indefinite integral", tr: "belirsiz integral", tanim: "Ters türev ailesinin gösterimi: ∫ f(t) dt = F(t) + C. Burada f integrand, t integral değişkenidir.", ornek: "∫ 3t² dt = t³ + C (dx/dt = 3t² ile dx = 3t² dt aynı şey)." },
              { ikon: "🔧", terim: "Constant of integration", tr: "integral sabiti", tanim: "Ailedeki hangi eğri olduğunu belirleyen +C. Fizikte başlangıç konumu ya da başlangıç hızı olarak çıkar.", ornek: "x = t³ + C için C = x(0)." }
            ] },
        { tip: "grafik", baslik: "y = t³ + C ailesi (eksen 2 yukarı kaydırıldı; kesikli çizgi y = 0)", xlabel: "t", ylabel: "y", xmax: 2.5, ymax: 16, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }], yticks: [{ v: 0, label: "−2" }, { v: 4, label: "2" }, { v: 8, label: "6" }, { v: 12, label: "10" }, { v: 16, label: "14" }],
            ogeler: [
              { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 2], to: [2.5, 2] },
              { id: "a", tip: "egri", renk: 0, noktalar: [[0, 2], [0.25, 2.016], [0.5, 2.125], [0.75, 2.422], [1, 3], [1.25, 3.953], [1.5, 5.375], [1.75, 7.359], [2, 10]], etiket: "C = 0" },
              { id: "b", tip: "egri", renk: 1, noktalar: [[0, 7], [0.25, 7.016], [0.5, 7.125], [0.75, 7.422], [1, 8], [1.25, 8.953], [1.5, 10.375], [1.75, 12.359], [2, 15]], etiket: "C = 5", gizli: true },
              { id: "c", tip: "egri", renk: 2, noktalar: [[0, 0], [0.25, 0.016], [0.5, 0.125], [0.75, 0.422], [1, 1], [1.25, 1.953], [1.5, 3.375], [1.75, 5.359], [2, 8]], etiket: "C = −2", gizli: true },
              { id: "g", tip: "cizgi", renk: 3, kesik: true, from: [1, 0], to: [1, 16], gizli: true },
              { id: "ta", tip: "cizgi", renk: 0, from: [0.7, 2.1], to: [1.3, 3.9], gizli: true },
              { id: "tb", tip: "cizgi", renk: 1, from: [0.7, 7.1], to: [1.3, 8.9], gizli: true },
              { id: "tc", tip: "cizgi", renk: 2, from: [0.7, 0.1], to: [1.3, 1.9], gizli: true }
            ],
            durumlar: [
              { metin: "3t²'nin bir ters türevi t³. Türevini al: 3t² ✓." },
              { metin: "t³ + 5 ve t³ − 2'nin türevi de 3t². Hepsi aynı eğri, sadece yukarı aşağı kaymış.", goster: ["b", "c"] },
              { metin: "t = 1'de üç teğet de ==paralel== (eğim 3). Sabit türevde kaybolduğu için ters türev bir ailedir.", goster: ["g", "ta", "tb", "tc"] }
            ] },
        { tip: "tuzak", metin: "Belirsiz integralde +C yazmayı unutmak puan kaybettirir.", yanlis: "∫ 3t² dt = t³", dogru: "∫ 3t² dt = t³ + C. Sınırlı (belirli) integralde C kendiliğinden sadeleşir, yazılmaz." }
      ]
    },
    {
      baslik: "İntegral kuralları ve doğrusal iç fonksiyon",
      kisa: "Türev kurallarının tersi; içi doğrusal ise içinin türevine böl.",
      bloklar: [
        { tip: "tablo", baslik: "Türevin tersten okunuşu", head: ["f(t)", "∫ f(t) dt"], not: "n = −1 tek istisnadır: kuvvet kuralı 0'a bölerdi, o yüzden ∫ dt/t = ln|t| + C. Sabit çarpan dışarı çıkar, toplamda terimler ayrı integrallenir.",
            rows: [
              ["tⁿ (n ≠ −1)", "tⁿ⁺¹/(n + 1) + C"],
              ["1/t", "ln|t| + C"],
              ["e^t", "e^t + C"],
              ["cos t", "sin t + C"],
              ["sin t", "−cos t + C"],
              ["sec² t", "tan t + C"]
            ] },
        { tip: "ornek", baslik: "∫ (6t² − 4t + 3) dt", durum: "Terim terim integral al, sonra türevle kontrol et.", sonuc: "==2t³ − 2t² + 3t + C==.",
            adimlar: [
              "6t² → 6 · t³/3 = 2t³",
              "−4t → −4 · t²/2 = −2t²",
              "3 → 3t",
              "Kontrol: türev 6t² − 4t + 3 ✓"
            ] },
        { tip: "kavramlar", kartlar: [{ ikon: "🔁", terim: "u-substitution", tr: "u-yerine koyma", tanim: "İç fonksiyona u deyip integrali basitleştirme yöntemi. Fizik C'de çoğunlukla iç fonksiyon doğrusaldır (3t, −2t).", ornek: "∫ e^(−2t) dt = −½ e^(−2t) + C; ∫ 4 cos 2t dt = 2 sin 2t + C." }] },
        { tip: "adimlar", baslik: "∫ cos(3t) dt nasıl alınır?",
            adimlar: [
              { baslik: "İçi bul", metin: "İç fonksiyon u = 3t, türevi 3." },
              { baslik: "İçinin türevine böl", metin: "∫ cos(3t) dt = ==⅓ sin(3t) + C==." },
              { baslik: "Türevle kontrol", metin: "d/dt [⅓ sin 3t] = ⅓ · 3 cos 3t = cos 3t ✓ (zincir kuralı 3'ü geri getirir)." }
            ] }
      ]
    },
    {
      baslik: "Başlangıç koşulu: C'yi bulmak",
      kisa: "Bilinen bir andaki değer, aileden tek bir eğriyi seçer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "📌", terim: "Initial condition", tr: "başlangıç koşulu", tanim: "Belirli bir andaki bilinen değer, örneğin x(1) = 5 m. C'yi bulmak için kullanılır ve aileden tek bir özel çözüm (*particular solution*) seçer.", ornek: "dx/dt = 6t − 2 ve x(1) = 5 m." }] },
        { tip: "ornek", baslik: "dx/dt = 6t − 2, x(1) = 5", durum: "Konumu x(t) olarak bul.", sonuc: "x(t) = ==3t² − 2t + 4==.",
            adimlar: [
              "İntegral al: x(t) = 3t² − 2t + C",
              "t = 1 koy: 3 − 2 + C = 5",
              "C = 4"
            ] },
        { tip: "grafik", baslik: "x = 3t² − 2t + C ailesi ve x(1) = 5", xlabel: "t (s)", ylabel: "x (m)", xmax: 3.5, ymax: 30, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }], yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }, { v: 15, label: "15" }, { v: 20, label: "20" }, { v: 25, label: "25" }],
            ogeler: [
              { id: "c1", tip: "egri", renk: 3, noktalar: [[0, 1], [0.5, 0.75], [1, 2], [1.5, 4.75], [2, 9], [2.5, 14.75], [3, 22]], etiket: "C = 1" },
              { id: "c4", tip: "egri", renk: 0, noktalar: [[0, 4], [0.5, 3.75], [1, 5], [1.5, 7.75], [2, 12], [2.5, 17.75], [3, 25]], etiket: "C = 4" },
              { id: "c7", tip: "egri", renk: 3, noktalar: [[0, 7], [0.5, 6.75], [1, 8], [1.5, 10.75], [2, 15], [2.5, 20.75], [3, 28]], etiket: "C = 7" },
              { id: "P", tip: "nokta", x: 1, y: 5, kilavuz: true, etiket: "x(1) = 5", renk: 1, gizli: true }
            ],
            durumlar: [
              { metin: "Her C için bir parabol: dx/dt = 6t − 2'nin ters türev ailesi." },
              { metin: "Başlangıç koşulu: t = 1 s'de x = 5 m. Bu nokta ailenin tek bir üyesinden geçer.", goster: ["P"] },
              { metin: "Yalnızca C = 4 eğrisi (1; 5)'ten geçer: ==x = 3t² − 2t + 4==. Diğerleri elenir.", gizle: ["c1", "c7"] }
            ] }
      ]
    },
    {
      baslik: "Belirli integral = işaretli alan",
      kisa: "Eksenin üstü artı, altı eksi sayılır; dikdörtgen toplamlarının limitidir.",
      bloklar: [
        { tip: "kavramlar",
            kartlar: [
              { ikon: "📏", terim: "Definite integral", tr: "belirli integral", tanim: "∫(a→b) f(t) dt: a'dan b'ye eğrinin altındaki işaretli alan; Riemann toplamlarının limiti.", ornek: "v–t grafiğinde ∫ v dt yer değiştirmedir." },
              { ikon: "🧱", terim: "Riemann sum", tr: "Riemann toplamı", tanim: "Alanı ince dikdörtgenlerle toplama: Σ f(tᵢ)Δt. Dikdörtgen sayısı arttıkça gerçek alana yaklaşır.", ornek: "y = t², 0–2: 4 dikdörtgen ≈ 1,75; 16 dikdörtgen ≈ 2,42; gerçek 8/3 ≈ 2,67." },
              { ikon: "⚖️", terim: "Signed area", tr: "işaretli alan", tanim: "Eksenin üstündeki alan artı, altındaki eksi sayılır.", ornek: "∫₀⁴ (t − 2) dt = −2 + 2 = 0." }
            ] },
        { tip: "grafik", baslik: "y = t² altındaki alan: dikdörtgen sayısı arttıkça", xlabel: "t", ylabel: "y", xmax: 3, ymax: 4, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
            ogeler: [
              { id: "r4", tip: "alan", renk: 1, noktalar: [[0, 0], [0, 0], [0.5, 0], [0.5, 0.25], [1, 0.25], [1, 1], [1.5, 1], [1.5, 2.25], [2, 2.25], [2, 0]], gizli: true },
              { id: "r8", tip: "alan", renk: 1, noktalar: [[0, 0], [0, 0], [0.25, 0], [0.25, 0.0625], [0.5, 0.0625], [0.5, 0.25], [0.75, 0.25], [0.75, 0.5625], [1, 0.5625], [1, 1], [1.25, 1], [1.25, 1.5625], [1.5, 1.5625], [1.5, 2.25], [1.75, 2.25], [1.75, 3.0625], [2, 3.0625], [2, 0]], gizli: true },
              { id: "r16", tip: "alan", renk: 1, noktalar: [[0, 0], [0, 0], [0.125, 0], [0.125, 0.01563], [0.25, 0.01563], [0.25, 0.0625], [0.375, 0.0625], [0.375, 0.14063], [0.5, 0.14063], [0.5, 0.25], [0.625, 0.25], [0.625, 0.39063], [0.75, 0.39063], [0.75, 0.5625], [0.875, 0.5625], [0.875, 0.76563], [1, 0.76563], [1, 1], [1.125, 1], [1.125, 1.26563], [1.25, 1.26563], [1.25, 1.5625], [1.375, 1.5625], [1.375, 1.89063], [1.5, 1.89063], [1.5, 2.25], [1.625, 2.25], [1.625, 2.64063], [1.75, 2.64063], [1.75, 3.0625], [1.875, 3.0625], [1.875, 3.51563], [2, 3.51563], [2, 0]], gizli: true },
              { id: "ex", tip: "alan", renk: 1, noktalar: [[0, 0], [0, 0], [0.25, 0.0625], [0.5, 0.25], [0.75, 0.5625], [1, 1], [1.25, 1.5625], [1.5, 2.25], [1.75, 3.0625], [2, 4], [2, 0]], gizli: true },
              { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0], [0.25, 0.0625], [0.5, 0.25], [0.75, 0.5625], [1, 1], [1.25, 1.5625], [1.5, 2.25], [1.75, 3.0625], [2, 4]] },
              { id: "lab", tip: "yazi", x: 2.95, y: 3.4, hiza: "end", metin: "≈ 1,75", gizli: true }
            ],
            durumlar: [
              { metin: "Eğrinin altındaki alanı bulmak istiyoruz (t = 0'dan 2'ye)." },
              { metin: "4 dikdörtgen: toplam alan ≈ 1,75. Gerçek alandan küçük.", goster: ["r4", "lab"] },
              { metin: "8 dikdörtgen: ≈ 2,19. Daha yakın.", gizle: ["r4"], goster: ["r8"], set: { lab: { metin: "≈ 2,19" } } },
              { metin: "16 dikdörtgen: ≈ 2,42.", gizle: ["r8"], goster: ["r16"], set: { lab: { metin: "≈ 2,42" } } },
              { metin: "Dikdörtgenler inceldikçe toplam gerçek alana yaklaşır: ==8/3 ≈ 2,67==. Bu limit belirli integraldir.", gizle: ["r16"], goster: ["ex"], set: { lab: { metin: "→ 8/3 ≈ 2,67" } } }
            ] },
        { tip: "grafik", baslik: "y = t − 2 (eksen 2 yukarı kaydırıldı; kesikli çizgi y = 0)", xlabel: "t", ylabel: "y", xmax: 5, ymax: 5, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 0, label: "−2" }, { v: 2, label: "0" }, { v: 4, label: "2" }],
            ogeler: [
              { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 2], to: [5, 2] },
              { id: "n", tip: "alan", renk: 2, noktalar: [[0, 2], [2, 2], [0, 0]], gizli: true },
              { id: "p", tip: "alan", renk: 1, noktalar: [[2, 2], [4, 2], [4, 4]], gizli: true },
              { id: "l", tip: "cizgi", renk: 0, from: [0, 0], to: [4, 4], etiket: "y = t − 2" },
              { id: "nt", tip: "yazi", x: 0.6, y: 1.4, metin: "−2", gizli: true },
              { id: "pt", tip: "yazi", x: 3.4, y: 2.6, metin: "+2", gizli: true }
            ],
            durumlar: [
              { metin: "y = t − 2: t = 2'de eksenin altından üstüne geçer." },
              { metin: "0–2 arası eksenin altında: alan ==−2== sayılır.", goster: ["n", "nt"] },
              { metin: "2–4 arası eksenin üstünde: alan ==+2==.", goster: ["p", "pt"] },
              { metin: "İşaretli alanların toplamı: ∫₀⁴ (t − 2) dt = −2 + 2 = ==0==." }
            ] },
        { tip: "formul", parcalar: [{ t: "∫ f dt (b'den a'ya)", alt: "sınırlar ters" }, "=", { t: "− ∫ f dt (a'dan b'ye)", alt: "işaret değişir" }], aciklama: "İkinci özellik: aralığı bir c noktasında bölüp parçaları toplayabilirsin. ∫(a→b) f dt = ∫(a→c) f dt + ∫(c→b) f dt." }
      ]
    },
    {
      baslik: "Kalkülüsün Temel Teoremi",
      kisa: "Belirli integral = ters türevin üst sınırdaki değeri − alt sınırdaki değeri.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "🏛️", terim: "Fundamental Theorem of Calculus", tr: "kalkülüsün temel teoremi", tanim: "∫(a→b) f(t) dt = F(b) − F(a); F, f'nin herhangi bir ters türevidir. Fark alınırken C sadeleşir.", ornek: "∫₁³ 3t² dt = [t³]₁³ = 27 − 1 = 26." }] },
        { tip: "ornek", baslik: "∫₁³ 3t² dt", durum: "Dikdörtgen saymadan alanı bul.", sonuc: "∫₁³ 3t² dt = ==26==.",
            adimlar: [
              "Ters türev: F(t) = t³ (+ C)",
              "F(3) − F(1) = (27 + C) − (1 + C)",
              "C sadeleşir: 27 − 1 = 26"
            ] },
        { tip: "grafik", baslik: "y = 3t² ve 1–3 arası alan", xlabel: "t", ylabel: "y", xmax: 4, ymax: 32, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 3, label: "3" }, { v: 12, label: "12" }, { v: 27, label: "27" }],
            ogeler: [
              { id: "a", tip: "alan", renk: 1, noktalar: [[1, 0], [1, 3], [1.25, 4.6875], [1.5, 6.75], [1.75, 9.1875], [2, 12], [2.25, 15.1875], [2.5, 18.75], [2.75, 22.6875], [3, 27], [3, 0]], gizli: true },
              { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0], [0.2, 0.12], [0.4, 0.48], [0.6, 1.08], [0.8, 1.92], [1, 3], [1.2, 4.32], [1.4, 5.88], [1.6, 7.68], [1.8, 9.72], [2, 12], [2.2, 14.52], [2.4, 17.28], [2.6, 20.28], [2.8, 23.52], [3, 27], [3.2, 30.72]], etiket: "3t²" },
              { id: "t", tip: "yazi", x: 2, y: 5, metin: "26", gizli: true }
            ],
            durumlar: [
              { metin: "∫₁³ 3t² dt: eğrinin t = 1'den t = 3'e altındaki alan." },
              { metin: "Taralı alanı dikdörtgen saymadan bulacağız.", goster: ["a"] },
              { metin: "Ters türev t³: F(3) − F(1) = 27 − 1 = ==26==.", goster: ["t"] }
            ] }
      ]
    },
    {
      baslik: "AP örneği: yer değiştirme ve yol",
      kisa: "Yol için v = 0'da böl, mutlak değerleri topla.",
      bloklar: [
        { tip: "ornek", baslik: "v = 3t² − 12, 0 ≤ t ≤ 3", durum: "Parçacığın hızı v(t) = 3t² − 12 (m/s). 0–3 s arasında yer değiştirmeyi ve alınan yolu bul.", sonuc: "Yer değiştirme ==−9 m==, yol ==23 m==.",
            adimlar: [
              "Yer değiştirme: ∫₀³ (3t² − 12) dt = [t³ − 12t]₀³ = 27 − 36 = −9 m",
              "Yön değişimi: v = 0 ⇒ 3t² = 12 ⇒ t = 2 s",
              "0–2 s: [t³ − 12t]₀² = 8 − 24 = −16 m",
              "2–3 s: (27 − 36) − (8 − 24) = −9 + 16 = +7 m",
              "Yol: |−16| + |7| = 23 m"
            ] },
        { tip: "grafik", baslik: "v = 3t² − 12 (eksen 12 yukarı kaydırıldı; kesikli çizgi v = 0)", xlabel: "t (s)", ylabel: "v (m/s)", xmax: 4, ymax: 28, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }], yticks: [{ v: 0, label: "−12" }, { v: 12, label: "0" }, { v: 27, label: "15" }],
            ogeler: [
              { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 12], to: [4, 12] },
              { id: "n", tip: "alan", renk: 2, noktalar: [[0, 12], [0, 0], [0.25, 0.1875], [0.5, 0.75], [0.75, 1.6875], [1, 3], [1.25, 4.6875], [1.5, 6.75], [1.75, 9.1875], [2, 12]], gizli: true },
              { id: "p", tip: "alan", renk: 1, noktalar: [[2, 12], [2.25, 15.1875], [2.5, 18.75], [2.75, 22.6875], [3, 27], [3, 12]], gizli: true },
              { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0], [0.25, 0.1875], [0.5, 0.75], [0.75, 1.6875], [1, 3], [1.25, 4.6875], [1.5, 6.75], [1.75, 9.1875], [2, 12], [2.25, 15.1875], [2.5, 18.75], [2.75, 22.6875], [3, 27]] },
              { id: "z", tip: "nokta", x: 2, y: 12, etiket: "t = 2 s", renk: 1, gizli: true },
              { id: "nt", tip: "yazi", x: 0.9, y: 8.5, metin: "−16 m", gizli: true },
              { id: "pt", tip: "yazi", x: 2.85, y: 15.5, metin: "+7 m", gizli: true }
            ],
            durumlar: [
              { metin: "v–t eğrisi: parçacık önce −x yönünde gider (v < 0), sonra +x yönünde." },
              { metin: "v = 0 ⇒ 3t² = 12 ⇒ ==t = 2 s==: yön burada değişir.", goster: ["z"] },
              { metin: "0–2 s: eksenin altı, ∫ = [t³ − 12t]₀² = 8 − 24 = ==−16 m==.", goster: ["n", "nt"] },
              { metin: "2–3 s: eksenin üstü, ∫ = (27 − 36) − (8 − 24) = ==+7 m==.", goster: ["p", "pt"] },
              { metin: "Yer değiştirme −16 + 7 = ==−9 m==; yol |−16| + |7| = ==23 m==." }
            ] }
      ]
    },
    {
      baslik: "Sınav ne ister?",
      kisa: "+C ve başlangıç koşulu puan getirir; belirli integrali alan olarak oku.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "Sınavda gerekir", maddeler: ["Belirsiz integralde +C yazıp başlangıç koşuluyla bulmak (*derive* puanı genelde burada)", "Belirli integrali alan olarak okumak: v–t altı Δx, a–t altı Δv", "Türevle kontrol etmek", "Hesap makinesinde sayısal integral serbest"] }, sag: { ikon: "🚫", baslik: "Beklenmez", maddeler: ["Elle Riemann toplamı", "Kısmi integrasyon", "Zor yerine koyma"] } },
        { tip: "tuzak", metin: "Yer değiştirme ile alınan yol aynı şey değildir.", yanlis: "Yol = ∫ v dt (v işaret değiştirse bile).", dogru: "Yer değiştirme = ∫ v dt (işaretli). Yol = ∫ |v| dt: v = 0 noktasında böl, mutlak değerleri topla." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet",
            maddeler: [
              "Ters türev bir ailedir: F + C; belirsiz integralde +C unutma.",
              "Kuvvet kuralı: ∫ tⁿ dt = tⁿ⁺¹/(n + 1) + C (n ≠ −1); ∫ dt/t = ln|t| + C.",
              "İç fonksiyon doğrusalsa içinin türevine böl: ∫ cos 3t dt = ⅓ sin 3t + C.",
              "Başlangıç koşulu C'yi bulur ve tek bir özel çözüm seçer.",
              "Belirli integral = işaretli alan; eksenin altı eksi.",
              "*Fundamental Theorem*: ∫(a→b) f dt = F(b) − F(a); C sadeleşir.",
              "Yer değiştirme = ∫ v dt (işaretli); yol = ∫ |v| dt, v = 0'da böl.",
              "Türevle kontrol: sonucun türevi integrand'a eşit olmalı."
            ] }
      ]
    }
  ]
};
