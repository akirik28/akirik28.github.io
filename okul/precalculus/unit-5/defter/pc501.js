/* Kitpath not defteri · pc501 · 5.1 Üstel Fonksiyonlar, Büyüme ve Azalma
   Kaynak: okul-10-2025-26.md (Precalculus Unit 5) + MEB 10. sınıf programı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc501",
  amac: "Bu konu *exponential function* yani üstel fonksiyonu anlatıyor: f(x) = b^x ve A(t) = A₀·b^t modelleri. Büyüme ile azalmayı, grafiğin asimptotunu, yüzde ve yarı ömür modellerini, e sayısını ve tabanları eşitleyerek denklem çözmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "*Exponential function*: değişken üstte",
      kisa: "Üstel fonksiyonda değişken üsttedir; taban sabit ve pozitiftir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "f(x)" }, "=",
            { t: "b^x", alt: "b > 0 ve b ≠ 1" }
          ], aciklama: "x² bir güç fonksiyonudur (taban değişken); 2^x ise üstel fonksiyondur (üs değişken). Model biçimi A(t) = A₀·b^t (A₀ ≠ 0): A(t) t anındaki miktar, A₀ başlangıç miktarı, b büyüme ya da azalma çarpanıdır. Sınavda böyle yaz: *Write the function in the form A(t) = A₀·b^t.*" },
        { tip: "kavramlar", kartlar: [
            { ikon: "✖️", terim: "Growth factor", tr: "büyüme çarpanı (b)", tanim: "x bir artınca değer b ile çarpılır. b > 1 ise artar, 0 < b < 1 ise azalır.", ornek: "f(x) = 3^x: her adımda değer 3 katına çıkar." },
            { ikon: "🏁", terim: "Initial value", tr: "başlangıç değeri (A₀)", tanim: "t = 0 iken A(0) = A₀ olur; grafik y eksenini (0, A₀) noktasında keser.", ornek: "A(t) = 5·2^t için y-kesişimi (0, 5)." },
            { ikon: "〰️", terim: "Horizontal asymptote", tr: "yatay asimptot", tanim: "Eğrinin sonsuza giderken yaklaştığı ama asla kesmediği yatay doğru. A₀·b^t için y = 0'dır.", ornek: "2^x, x çok küçülünce 0'a yaklaşır ama 0 olmaz." }
          ] },
        { tip: "tablo", baslik: "f(x) = 2^x fonksiyonunun özellikleri", head: ["Özellik", "Değer", "Sınavda böyle yaz"], rows: [
            ["Tanım kümesi (*domain*)", "bütün reel sayılar", "*The domain is all real numbers.*"],
            ["Değer kümesi (*range*)", "y > 0", "*The range is y > 0.*"],
            ["y-kesişimi", "(0, 1)", "*The y-intercept is (0, 1).*"],
            ["x-kesişimi", "yok", "*There is no x-intercept.*"],
            ["Asimptot", "y = 0", "*The horizontal asymptote is y = 0.*"]
          ] }
      ]
    },
    {
      baslik: "Büyüme mi azalma mı? Grafik",
      kisa: "b > 1 ise büyüme, 0 < b < 1 ise azalma.",
      bloklar: [
        { tip: "grafik", baslik: "f(x) = 2^x ve g(x) = (1/2)^x", xlabel: "x", ylabel: "y", xmax: 8, ymax: 9,
          xticks: [{ v: 1, label: "−3" }, { v: 2, label: "−2" }, { v: 3, label: "−1" }, { v: 4, label: "0" }, { v: 5, label: "1" }, { v: 6, label: "2" }, { v: 7, label: "3" }],
          ogeler: [
            { id: "yax", tip: "cizgi", renk: 0, from: [4, 0], to: [4, 9], etiket: "y" },
            { id: "f", tip: "egri", renk: 1, etiket: "f", gizli: true, noktalar: [[1, 0.125], [1.5, 0.177], [2, 0.25], [2.5, 0.354], [3, 0.5], [3.5, 0.707], [4, 1], [4.5, 1.414], [5, 2], [5.5, 2.828], [6, 4], [6.5, 5.657], [7, 8]] },
            { id: "p0", tip: "nokta", renk: 1, x: 4, y: 1, gizli: true },
            { id: "p1", tip: "nokta", renk: 1, x: 5, y: 2, gizli: true },
            { id: "p2", tip: "nokta", renk: 1, x: 6, y: 4, gizli: true },
            { id: "okl", tip: "ok", renk: 3, from: [3.2, 1.2], to: [1.2, 1.2], gizli: true },
            { id: "asy", tip: "yazi", x: 2.1, y: 1.75, metin: "y → 0", gizli: true },
            { id: "g", tip: "egri", renk: 2, etiket: "g", gizli: true, noktalar: [[7, 0.125], [6.5, 0.177], [6, 0.25], [5.5, 0.354], [5, 0.5], [4.5, 0.707], [4, 1], [3.5, 1.414], [3, 2], [2.5, 2.828], [2, 4], [1.5, 5.657], [1, 8]] },
            { id: "yan", tip: "ok", renk: 3, from: [5.5, 6.6], to: [2.5, 6.6], gizli: true },
            { id: "yant", tip: "yazi", x: 4.2, y: 7.4, metin: "yansıma", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Önce **f(x) = 2^x**: taban 2 > 1. Soldan sağa yükselir; bu bir ==*exponential growth*== (büyüme).", goster: ["f"] },
            { metin: "Noktalar: (0, 1), (1, 2), (2, 4). Yani x = 0 iken y = 1, x = 1 iken 2, x = 2 iken 4. x bir artınca y **iki katına** çıkar.", goster: ["p0", "p1", "p2"] },
            { metin: "Sola gidince eğri x eksenine yaklaşır ama onu asla kesmez: ==*horizontal asymptote*== y = 0.", goster: ["okl", "asy"] },
            { metin: "Şimdi **g(x) = (1/2)^x**: taban 0 < 1/2 < 1. Soldan sağa iner; bu bir ==*exponential decay*== (azalma).", goster: ["g"] },
            { metin: "g(x) = f(−x): iki grafik y eksenine göre birbirinin yansımasıdır. İkisi de (0, 1)'den geçer ve y = 0'a yaklaşır.", goster: ["yan", "yant"] }
          ] },
        { tip: "ikili", sol: { ikon: "📈", baslik: "Büyüme (*growth*)", maddeler: ["b > 1", "Soldan sağa yükselir"] },
          sag: { ikon: "📉", baslik: "Azalma (*decay*)", maddeler: ["0 < b < 1", "Soldan sağa alçalır"] },
          oyun: [
            { metin: "f(x) = 3^x", cevap: "sol", neden: "Taban 3 > 1: büyüme." },
            { metin: "f(x) = 5·(0,9)^x", cevap: "sag", neden: "Taban 0,9 < 1: azalma. Başlangıç değeri 5 sonucu değiştirmez." },
            { metin: "f(x) = 2·(1/3)^x", cevap: "sag", neden: "Taban 1/3 < 1: azalma." },
            { metin: "f(x) = 3·(1/2)^(−x)", cevap: "sol", neden: "(1/2)^(−x) = 2^x olduğundan efektif taban 2: büyüme." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The function is increasing because the base is greater than 1.*", metin: "Büyüme grafiğini yorumlarken." },
            { ikon: "✍️", baslik: "*The graph of g is the reflection of f in the y-axis.*", metin: "2^x ile (1/2)^x ilişkisi." },
            { ikon: "✍️", baslik: "*As x approaches negative infinity, f(x) approaches 0.*", metin: "Asimptotu anlatırken." }
          ] }
      ]
    },
    {
      baslik: "Dönüşümler ve asimptot",
      kisa: "Yukarı-aşağı kayma asimptotu da taşır; sağa-sola kayma taşımaz.",
      bloklar: [
        { tip: "grafik", baslik: "f(x) = 2^x grafiğinden h(x) = 2^(x−1) + 3", xlabel: "x", ylabel: "y", xmax: 8, ymax: 9,
          xticks: [{ v: 1, label: "−3" }, { v: 2, label: "−2" }, { v: 3, label: "−1" }, { v: 4, label: "0" }, { v: 5, label: "1" }, { v: 6, label: "2" }, { v: 7, label: "3" }],
          ogeler: [
            { id: "yax", tip: "cizgi", renk: 0, from: [4, 0], to: [4, 9], etiket: "y" },
            { id: "f", tip: "egri", renk: 1, etiket: "f", noktalar: [[1, 0.125], [1.5, 0.177], [2, 0.25], [2.5, 0.354], [3, 0.5], [3.5, 0.707], [4, 1], [4.5, 1.414], [5, 2], [5.5, 2.828], [6, 4], [6.5, 5.657], [7, 8]] },
            { id: "p0", tip: "nokta", renk: 1, x: 4, y: 1 },
            { id: "g", tip: "egri", renk: 2, etiket: "g", gizli: true, noktalar: [[1, 0.063], [1.5, 0.088], [2, 0.125], [2.5, 0.177], [3, 0.25], [3.5, 0.354], [4, 0.5], [4.5, 0.707], [5, 1], [5.5, 1.414], [6, 2], [6.5, 2.828], [7, 4]] },
            { id: "p1", tip: "nokta", renk: 2, x: 5, y: 1, gizli: true },
            { id: "ok1", tip: "ok", renk: 2, from: [4.1, 0.55], to: [4.9, 0.55], gizli: true },
            { id: "h", tip: "egri", renk: 3, etiket: "h", gizli: true, noktalar: [[1, 3.063], [1.5, 3.088], [2, 3.125], [2.5, 3.177], [3, 3.25], [3.5, 3.354], [4, 3.5], [4.5, 3.707], [5, 4], [5.5, 4.414], [6, 5], [6.5, 5.828], [7, 7]] },
            { id: "as", tip: "cizgi", renk: 0, kesik: true, from: [0, 3], to: [8, 3], gizli: true },
            { id: "ast", tip: "yazi", x: 0.2, y: 2.4, metin: "y = 3", hiza: "start", gizli: true },
            { id: "ok2", tip: "ok", renk: 3, from: [6, 2.1], to: [6, 4.9], gizli: true },
            { id: "p2", tip: "nokta", renk: 3, x: 4, y: 3.5, gizli: true },
            { id: "p2t", tip: "yazi", x: 3.8, y: 4.0, metin: "(0 ; 3,5)", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: **f(x) = 2^x**. Asimptot y = 0, y-kesişimi (0, 1)." },
            { metin: "**x − 1**: grafik 1 birim ==sağa== kayar, g(x) = 2^(x−1). Asimptot hâlâ y = 0; (0, 1) noktası (1, 1) olur.", goster: ["g", "p1", "ok1"] },
            { metin: "**+ 3**: grafik 3 birim ==yukarı== kayar, h(x) = 2^(x−1) + 3. Asimptot da taşınır: ==y = 3==.", goster: ["h", "as", "ast", "ok2"], gizle: ["ok1"] },
            { metin: "Sonuç: tanım kümesi bütün reel sayılar, değer kümesi y > 3. y-kesişimi h(0) = 2^(−1) + 3 = 3,5.", goster: ["p2", "p2t"], gizle: ["ok2"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The graph is shifted 1 unit to the right and 3 units up.*", metin: "Dönüşümü anlatırken." },
            { ikon: "✍️", baslik: "*The horizontal asymptote is y = 3 and the range is y > 3.*", metin: "Asimptot ve değer kümesi." }
          ] }
      ]
    },
    {
      baslik: "Yüzdeyle büyüme ve azalma",
      kisa: "Her dönem %r artarsa b = 1 + r, %r azalırsa b = 1 − r.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "V(t)" }, "=",
            { t: "V₀", alt: "başlangıç değeri" }, "·",
            { t: "(1 ± r)^t", alt: "artışta +, azalışta −" }
          ], aciklama: "r yüzdenin ondalık hâlidir: %15 → 0,15. t dönem sayısıdır (yıl, hafta, saat)." },
        { tip: "tablo", baslik: "Yüzdeyi çarpana çevir", head: ["Değişim", "Çarpan b", "Model"], rows: [
            ["Her yıl %15 azalma", "1 − 0,15 = 0,85", "V(t) = 4000·0,85^t"],
            ["Her hafta %20 artış", "1 + 0,20 = 1,2", "C(w) = 200·1,2^w"],
            ["Her saat iki katına çıkma (%100 artış)", "1 + 1 = 2", "N(t) = N₀·2^t"],
            ["Her yıl yarıya inme (%50 azalma)", "1 − 0,5 = 0,5", "A(t) = A₀·0,5^t"]
          ] },
        { tip: "ornek", baslik: "Telefonun değer kaybı", durum: "4000 TL'ye alınan telefon her yıl değerinin %15'ini kaybediyor: V(t) = 4000·0,85^t. 2 yıl sonra değeri kaç TL?",
          adimlar: ["%15 azalma olduğundan b = 1 − 0,15 = 0,85.", "V(2) = 4000·0,85².", "0,85² = 0,7225.", "4000·0,7225 = 2890."],
          sonuc: "V(2) = 2890 TL. **Sınavda böyle yaz:** *After 2 years the phone is worth 2890 TL; it loses 15% of its value each year.*" },
        { tip: "tuzak", metin: "Azalma yüzdesini doğrudan taban yapma.", yanlis: "%15 azalma için b = 0,15 alınır.", dogru: "b = 1 − 0,15 = 0,85. %15 artışta b = 1,15; %100 artışta b = 2 olur." }
      ]
    },
    {
      baslik: "Yarı ömür: *half-life* modeli",
      kisa: "Her yarı ömürde miktar yarıya iner: A(t) = A₀·(1/2)^(t/h).",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "A(t)" }, "=",
            { t: "A₀", alt: "başlangıç miktarı" }, "·",
            { t: "(1/2)^(t/h)", alt: "t/h = geçen yarı ömür sayısı" }
          ], aciklama: "h yarı ömürdür (*half-life*): miktarın yarıya indiği süre. A(t) = 1000·(1/2)^(t/4) için h = 4 yıldır. Genel olarak her h sürede b katına çıkan miktar A(t) = A₀·b^(t/h) ile yazılır: 25 yılda 3 katına çıkan, başta 100 000 kişilik nüfus için P(t) = 100 000·3^(t/25)." },
        { tip: "grafik", baslik: "A(t) = 1000·(1/2)^(t/4)", xlabel: "t (yıl)", ylabel: "A (gram)", xmax: 16, ymax: 10,
          xticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }, { v: 16, label: "16" }],
          yticks: [{ v: 10, label: "1000" }, { v: 5, label: "500" }, { v: 2.5, label: "250" }, { v: 1.25, label: "125" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 1, noktalar: [[0, 10], [2, 7.071], [4, 5], [6, 3.536], [8, 2.5], [10, 1.768], [12, 1.25], [14, 0.884], [16, 0.625]] },
            { id: "cl", tip: "yazi", x: 12.5, y: 3, metin: "A(t)", gizli: true },
            { id: "a0", tip: "nokta", renk: 0, x: 0, y: 10, etiket: "t=0: 1000", kilavuz: true },
            { id: "a1", tip: "nokta", renk: 2, x: 4, y: 5, etiket: "t=4: 500", kilavuz: true, gizli: true },
            { id: "a2", tip: "nokta", renk: 2, x: 8, y: 2.5, etiket: "t=8: 250", kilavuz: true, gizli: true },
            { id: "a3", tip: "nokta", renk: 2, x: 12, y: 1.25, etiket: "t=12: 125", kilavuz: true, gizli: true },
            { id: "as", tip: "yazi", x: 12, y: 0.35, metin: "asla 0 olmaz", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıçta 1000 gram var. Yarı ömür h = 4 yıl.", goster: ["cl"] },
            { metin: "1 yarı ömür (4 yıl) sonra: 1000 ÷ 2 = **500** gram.", goster: ["a1"] },
            { metin: "2 yarı ömür (8 yıl) sonra: 500 ÷ 2 = **250** gram.", goster: ["a2"] },
            { metin: "3 yarı ömür (12 yıl) sonra: 250 ÷ 2 = **125** gram. Her yarı ömür aynı sürede, yani 4 yılda geçer.", goster: ["a3"] },
            { metin: "Miktar her seferinde yarıya iner; bu yüzden eğri 0'a yaklaşır ama ==asla 0 olmaz==. Asimptot A = 0.", goster: ["as"] }
          ] },
        { tip: "ornek", baslik: "İlaç dozu", durum: "800 mg'lık bir dozun yarı ömrü 3 saat: A(t) = 800·(1/2)^(t/3). 9 saat sonra ne kadar kalır? Kaç saatte 25 mg'a iner?",
          adimlar: ["t = 9 için t/3 = 3 yarı ömür geçmiştir.", "A(9) = 800·(1/2)³ = 800 ÷ 8 = 100.", "25 mg için: 800·(1/2)^(t/3) = 25.", "(1/2)^(t/3) = 25/800 = 1/32 = (1/2)^5.", "Tabanlar eşit: t/3 = 5, yani t = 15."],
          sonuc: "9 saat sonra 100 mg kalır; 25 mg'a 15 saatte iner. **Sınavda böyle yaz:** *After 9 hours, 100 mg of the drug remains.*" },
        { tip: "tuzak", metin: "Yarı ömür sabit bir süredir; miktar doğrusal azalmaz.", yanlis: "İki yarı ömür sonra hiçbir şey kalmaz.", dogru: "İki yarı ömür sonra 1/4 kalır; n yarı ömür sonra (1/2)^n kalır." }
      ]
    },
    {
      baslik: "Sayı *e* ve sürekli büyüme",
      kisa: "e ≈ 2,718; sürekli büyüme A(t) = P·e^(rt) ile yazılır.",
      bloklar: [
        { tip: "tablo", baslik: "(1 + 1/n)^n, n büyüdükçe nereye gider?", head: ["n", "(1 + 1/n)^n"], rows: [["1", "2"], ["2", "2,25"], ["10", "≈ 2,594"], ["100", "≈ 2,705"], ["1000", "≈ 2,717"]], vurgu: 4, not: "Değer sonsuza kadar büyümez; ≈ 2,71828'e yaklaşır. Bu sayı ==*e*== (*Euler's number*) sayısıdır, irrasyoneldir. Yılda n kez faiz eklemenin sınırı, faizin sürekli eklenmesidir." },
        { tip: "formul", parcalar: [
            { t: "A(t)" }, "=",
            { t: "P", alt: "başlangıç" }, "·",
            { t: "e^(rt)", alt: "r > 0 büyüme · r < 0 azalma" }
          ], aciklama: "e sabit bir sayıdır, değişken değildir. e^0 = 1 ve e^x grafiği 2^x'e benzer: (0, 1)'den geçer, y = 0 asimptotu vardır, her zaman artandır. Sürekli modeli A(t) = P·b^t biçimine çevirmek için b = e^r alınır; örnek: C(t) = 150·e^(−0,053t) için b = e^(−0,053) ≈ 0,9484." },
        { tip: "ornek", baslik: "Sürekli faiz", durum: "2000 TL, yıllık %5 sürekli bileşik faizle yatırılıyor: A(t) = 2000·e^(0,05t). Başlangıç değeri nedir? 20 yıl sonra ne olur?",
          adimlar: ["t = 0: A(0) = 2000·e^0 = 2000·1 = 2000 TL.", "t = 20: üs = 0,05·20 = 1.", "A(20) = 2000·e^1 = 2000e.", "e ≈ 2,718 alınırsa A(20) ≈ 2000·2,718 = 5436 TL.", "Üs eksi olsaydı (e^(−0,05t)) model azalma anlatırdı."],
          sonuc: "A(20) ≈ 5436 TL. **Sınavda böyle yaz:** *The initial amount is 2000 TL and the continuous growth rate is 5% per year.*" }
      ]
    },
    {
      baslik: "Üslü denklemler: tabanları eşitle",
      kisa: "Tabanlar aynıysa üsler eşittir: a^m = a^n ise m = n.",
      bloklar: [
        { tip: "tablo", baslik: "Üs kuralları", head: ["Kural", "Örnek"], rows: [
            ["a^m · a^n = a^(m+n)", "2^3 · 2^4 = 2^7"],
            ["a^m ÷ a^n = a^(m−n)", "3^5 ÷ 3^2 = 3^3 = 27"],
            ["(a^m)^n = a^(m·n)", "(2^3)^2 = 2^6 = 64"],
            ["a^(−n) = 1 ÷ a^n", "2^(−3) = 1/8"],
            ["a^(1/n) = a'nın n. dereceden kökü", "8^(1/3) = 2"],
            ["a^0 = 1 (a ≠ 0)", "7^0 = 1"]
          ] },
        { tip: "ornek", baslik: "Önce ortak tabana getir", durum: "4^(x+1) = 8^(x−1) denklemini çöz.",
          adimlar: ["4 = 2² ve 8 = 2³ olduğundan: (2²)^(x+1) = (2³)^(x−1).", "Üsleri çarp: 2^(2x+2) = 2^(3x−3).", "Tabanlar eşit olduğundan üsler eşittir: 2x + 2 = 3x − 3.", "x = 5.", "Kontrol: 4^6 = 4096 ve 8^4 = 4096."],
          sonuc: "x = 5. **Sınavda böyle yaz:** *Since the bases are equal, the exponents must be equal.*" },
        { tip: "tuzak", metin: "Tabanı 1/2 gibi bir kesirse ortak tabana geçerken üssün işareti değişir.", yanlis: "(1/2)^x = 8 için x = 3.", dogru: "(1/2)^x = 2^(−x) = 2^3 olduğundan −x = 3, yani x = −3. Kontrol: (1/2)^(−3) = 8." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Exponential function*: f(x) = b^x, b > 0 ve b ≠ 1 (model: A(t) = A₀·b^t). Tanım kümesi tüm reel sayılar, değer kümesi y > 0.",
            "b > 1 büyüme, 0 < b < 1 azalma. Grafik (0, A₀)'dan geçer ve y = 0 asimptotuna yaklaşır.",
            "a·b^(x−h) + k: h kadar sağa, k kadar yukarı kayar; asimptot y = k olur.",
            "%r artış için b = 1 + r, %r azalış için b = 1 − r. Örnek: V(t) = 4000·0,85^t, her yıl %15 azalma.",
            "Yarı ömür: A(t) = A₀·(1/2)^(t/h). n yarı ömür sonra A₀·(1/2)^n kalır.",
            "e ≈ 2,718. Sürekli model A(t) = P·e^(rt); r > 0 büyüme, r < 0 azalma; b = e^r ile A(t) = P·b^t'ye çevrilir.",
            "Üslü denklemde tabanları eşitle, sonra üsleri eşitle: a^m = a^n ise m = n.",
            "(1/2)^x = 2^(−x) ve (1/2)^(−x) = 2^x: kesirli tabanda işaret hatası yapma."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Which of the following is an exponential decay model?",
      opts: ["f(x) = 2·(3/2)^x", "f(x) = 3·(0.9)^(−x)", "f(x) = 5·(1/4)^x", "f(x) = 6·(1.1)^x"],
      a: 2, why: "Azalma için taban 0 ile 1 arasında olmalı: (1/4)^x. En çekici yanlış B'dir: (0,9)^(−x) = (10/9)^x olduğundan efektif taban 1'den büyüktür ve model büyümedir." },
    { q: "A scooter is bought for 6000 TL and loses 20% of its value every year. What is its value after 2 years?",
      opts: ["3840 TL", "3600 TL", "4800 TL", "240 TL"],
      a: 0, why: "Azalma çarpanı b = 1 − 0,20 = 0,8. V(2) = 6000·0,8² = 6000·0,64 = 3840. B'deki 3600, %20'yi iki kez düz çıkarmaktan (%40) gelir; üstel azalma bileşik çalışır." },
    { q: "The table shows the amount of a drug remaining in the body and follows a half-life model. How many mg remain on day 20?",
      fig: { type: "table", head: ["Day", "Amount remaining (mg)"], rows: [["0", "640"], ["5", "320"], ["10", "160"]], caption: "Amount of drug" },
      opts: ["80", "20", "0", "40"],
      a: 3, why: "640 → 320 → 160: miktar 5 günde yarıya iniyor, yarı ömür h = 5. 20 gün = 4 yarı ömür, 640·(1/2)^4 = 640 ÷ 16 = 40 mg. A'daki 80, yalnızca 3 yarı ömür sonrasıdır." },
    { q: "What is the solution of the equation (1/4)^x = 8?",
      opts: ["3/2", "−3/2", "2/3", "−2/3"],
      a: 1, why: "(1/4)^x = 2^(−2x) ve 8 = 2^3 olduğundan −2x = 3, x = −3/2. A, tabanın kesir olmasından doğan eksi işaretini unutan öğrencinin cevabıdır." },
    { q: "What are the horizontal asymptote and the range of f(x) = 2^(x+1) − 3?",
      opts: ["y = 3 ; y > 3", "y = −3 ; y > −3", "y = −1 ; y > −1", "x = −1 ; all real numbers"],
      a: 1, why: "x + 1 grafiği yalnızca sola kaydırır, asimptotu değiştirmez. −3 ise grafiği 3 birim aşağı taşır: asimptot y = −3, değer kümesi y > −3. C, sola kaymayı asimptota karıştırır." }
  ]
};
