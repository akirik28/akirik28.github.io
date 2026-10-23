/* Kitora not defteri · cb604 · 6.6 Belirli İntegralin Özellikleri
   Kaynak: AP Calculus BC CED, Topic 6.6. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb604",
  amac: "Bu konu *definite integral* yani belirli integralin özelliklerini anlatıyor: sınırları ters çevirmek, toplamları ve sabit çarpanları ayırmak, aralıkları bölüp birleştirmek ve grafikteki işaretli alanlardan integral değeri bulmak.",
  bolumler: [
    {
      baslik: "Aynı sınır ve ters sınır",
      kisa: "Başlangıç ile bitiş aynıysa integral sıfırdır; sınırlar yer değiştirirse işaret eksi olur.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "∫ₐᵃ f(x) dx", alt: "başlangıç = bitiş" }, "=", { t: "0", alt: "genişlik yok, alan yok" }],
          aciklama: "Genişliği sıfır olan bir aralığın altında alan birikmez." },
        { tip: "formul", parcalar: [{ t: "∫₇² f(x) dx", alt: "7'den 2'ye" }, "=", { t: "−∫₂⁷ f(x) dx", alt: "2'den 7'ye, işaret eksi" }],
          aciklama: "Genel kural: sınırlar yer değiştirince integralin ==işareti== değişir. Geriye doğru gitmek, biriken şeyi geri almaktır." },
        { tip: "ornek", baslik: "Ters sınır", durum: "∫₂⁷ f(x) dx = 5 verilmiş. ∫₇² f(x) dx ve ∫₂² f(x) dx kaç? Geometriyle de kontrol et: f(x) = x için ∫₀⁴ x dx ve ∫₄⁰ x dx.",
          adimlar: [
            "∫₂² f(x) dx = 0 (başlangıç = bitiş).",
            "∫₇² f(x) dx = −∫₂⁷ f(x) dx = −5.",
            "f(x) = x: ∫₀⁴ x dx, tabanı 4 yüksekliği 4 olan üçgendir: ½ · 4 · 4 = 8.",
            "Sınırlar ters: ∫₄⁰ x dx = −8."
          ], sonuc: "0, −5; ve +8 ile −8." }
      ]
    },
    {
      baslik: "Toplam ve sabit çarpan (doğrusallık)",
      kisa: "İntegral toplamı terim terim alır ve sabit çarpanı dışarı çıkarır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "∫ₐᵇ (k·f ± m·g) dx", alt: "aynı sınırlar" }, "=", { t: "k ∫ₐᵇ f dx ± m ∫ₐᵇ g dx", alt: "sabitler dışarı" }],
          aciklama: "Sabit bir sayıyı da integre edebilirsin: ∫ₐᵇ c dx = c · (b − a), yani yüksekliği c olan dikdörtgenin alanı." },
        { tip: "ornek", baslik: "Verilenlerle hesapla", durum: "∫₁⁴ f(x) dx = 3 ve ∫₁⁴ g(x) dx = −2 ise ∫₁⁴ (2f(x) − 3g(x) + 1) dx kaçtır?",
          adimlar: [
            "Sabitleri çıkar: 2 ∫₁⁴ f − 3 ∫₁⁴ g + ∫₁⁴ 1 dx.",
            "2 · 3 = 6.",
            "−3 · (−2) = +6.",
            "∫₁⁴ 1 dx = 1 · (4 − 1) = 3.",
            "Topla: 6 + 6 + 3 = 15."
          ], sonuc: "15" },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Her zaman doğru", maddeler: ["Toplam ve fark ayrılır", "Sabit dışarı çıkar"] },
          sag: { ikon: "🚫", baslik: "Genelde yanlış", maddeler: ["Çarpım ayrılmaz", "Bölüm ayrılmaz"] },
          oyun: [
            { metin: "∫ 5f(x) dx = 5 ∫ f(x) dx", cevap: "sol", neden: "Sabit çarpan dışarı çıkar." },
            { metin: "∫ (f(x) + g(x)) dx = ∫ f(x) dx + ∫ g(x) dx", cevap: "sol", neden: "Toplamın integrali integrallerin toplamıdır." },
            { metin: "∫ f(x) · g(x) dx = (∫ f(x) dx) · (∫ g(x) dx)", cevap: "sag", neden: "Çarpım ayrılmaz. x · x için ∫₀² x² dx = 8/3, ama (∫₀² x dx)² = 4." },
            { metin: "∫ f(x) / g(x) dx = (∫ f(x) dx) / (∫ g(x) dx)", cevap: "sag", neden: "Bölüm de ayrılmaz." }
          ] }
      ]
    },
    {
      baslik: "Aralıkları birleştirmek ve bölmek",
      kisa: "Ortak sınırı olan komşu aralıkların integralleri toplanır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "∫₁³ f dx", alt: "1'den 3'e" }, "+", { t: "∫₃⁶ f dx", alt: "3'ten 6'ya" }, "=", { t: "∫₁⁶ f dx", alt: "1'den 6'ya" }],
          aciklama: "Genel: ∫ₐᵇ f + ∫ᵇᶜ f = ∫ₐᶜ f. Ortak sınır tam eşleşmeli; ortak nokta, ters sınır kuralıyla birlikte aralığın dışında da olabilir." },
        { tip: "ornek", baslik: "Eksik parçayı bul", durum: "∫₀⁵ f(x) dx = 7 ve ∫₀² f(x) dx = 10 ise ∫₂⁵ f(x) dx ve ∫₅² f(x) dx kaçtır?",
          adimlar: [
            "Birleştir: ∫₀² f + ∫₂⁵ f = ∫₀⁵ f.",
            "10 + ∫₂⁵ f = 7, yani ∫₂⁵ f = −3.",
            "Ters sınır: ∫₅² f = −(−3) = 3."
          ], sonuc: "∫₂⁵ f = −3 ve ∫₅² f = 3" },
        { tip: "tuzak", metin: "Sınırlar tam birleşmiyorsa aralıkları toplayamazsın. Aradaki boşluk integralin bir parçasıdır.", yanlis: "∫₁³ f dx + ∫₄⁶ f dx = ∫₁⁶ f dx.", dogru: "3 ile 4 arası eksik. Ancak ∫₁³ + ∫₃⁶ = ∫₁⁶ doğrudur." }
      ]
    },
    {
      baslik: "Grafikten hesap: işaretli alanlar",
      kisa: "Geometrik alanları işaretleriyle topla; eksenin altındaki alan eksi yazılır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "➕➖", terim: "Signed area", tr: "işaretli alan", tanim: "Eksenin üstündeki bölgeler artı, altındakiler eksi sayılarak toplanan alan. Belirli integral işaretli alandır.", ornek: "+6 + 3 − 2 − 4 = 3." },
            { ikon: "🔢", terim: "Total area", tr: "toplam alan", tanim: "Bütün bölgelerin alanının hepsi artı alınarak toplanmasıdır; integralde |f| ile elde edilir.", ornek: "6 + 3 + 2 + 4 = 15." }
          ] },
        { tip: "grafik", baslik: "f'nin grafiği ve bölgeler", xlabel: "x", ylabel: "y", xmax: 9, ymax: 6.5,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }], yticks: [{ v: 0, label: "−2" }, { v: 2, label: "0" }, { v: 5, label: "3" }],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 2], to: [9, 2] },
            { id: "f1", tip: "cizgi", renk: 0, from: [0, 5], to: [2, 5] },
            { id: "f2", tip: "cizgi", renk: 0, from: [2, 5], to: [4, 2] },
            { id: "f3", tip: "cizgi", renk: 0, from: [4, 2], to: [6, 0] },
            { id: "f4", tip: "cizgi", renk: 0, from: [6, 0], to: [8, 0], etiket: "f" },
            { id: "a1", tip: "alan", renk: 2, gizli: true, noktalar: [[0, 2], [0, 5], [2, 5], [2, 2]] },
            { id: "a2", tip: "alan", renk: 2, gizli: true, noktalar: [[2, 2], [2, 5], [4, 2]] },
            { id: "a3", tip: "alan", renk: 3, gizli: true, noktalar: [[4, 2], [6, 2], [6, 0]] },
            { id: "a4", tip: "alan", renk: 3, gizli: true, noktalar: [[6, 2], [6, 0], [8, 0], [8, 2]] },
            { id: "z1", tip: "yazi", x: 1, y: 3.4, metin: "+6", gizli: true },
            { id: "z2", tip: "yazi", x: 2.6, y: 2.8, metin: "+3", gizli: true },
            { id: "z3", tip: "yazi", x: 5.3, y: 1.3, metin: "−2", gizli: true },
            { id: "z4", tip: "yazi", x: 7, y: 1, metin: "−4", gizli: true },
            { id: "zt", tip: "yazi", x: 5, y: 5.6, metin: "∫₀⁸ f = 3", gizli: true }
          ],
          durumlar: [
            { metin: "f parçalı doğrusal: 3 yüksekliğinde düz gider, 0'a iner, −2'ye düşer ve düz kalır. Kesikli çizgi gerçek yatay eksen." },
            { metin: "[0, 2]: eksenin üstünde dikdörtgen. Alan = 2 · 3 = +6.", goster: ["a1", "z1"] },
            { metin: "[2, 4]: eksenin üstünde üçgen. Alan = ½ · 2 · 3 = +3.", goster: ["a2", "z2"] },
            { metin: "[4, 6]: eksenin altında üçgen. Alan = ½ · 2 · 2 = 2; altta olduğu için −2.", goster: ["a3", "z3"] },
            { metin: "[6, 8]: eksenin altında dikdörtgen. Alan = 2 · 2 = 4; işareti eksi: −4.", goster: ["a4", "z4"] },
            { metin: "Toplam: ∫₀⁸ f = 6 + 3 − 2 − 4 = 3.", goster: ["zt"] }
          ] },
        { tip: "ornek", baslik: "Bu grafikle beş hesap", durum: "Yukarıdaki f için ∫₀⁸ f, ∫₂⁸ f, ∫₈² f, ∫₀⁸ (2f(x) + 1) dx ve ∫₀⁸ |f(x)| dx değerlerini bul.",
          adimlar: [
            "Bölge alanları: +6, +3, −2, −4.",
            "∫₀⁸ f = 6 + 3 − 2 − 4 = 3.",
            "∫₂⁸ f = 3 − 2 − 4 = −3.",
            "∫₈² f = −∫₂⁸ f = 3.",
            "∫₀⁸ (2f + 1) dx = 2 · 3 + 1 · 8 = 14.",
            "∫₀⁸ |f| dx = 6 + 3 + 2 + 4 = 15."
          ], sonuc: "3, −3, 3, 14 ve 15." },
        { tip: "tuzak", metin: "Belirli integral işaretlidir. Bütün bölgeleri artı toplamak ancak |f| integrali demektir.", yanlis: "∫₀⁸ f dx = 15, çünkü bütün bölgelerin alanı 15.", dogru: "∫₀⁸ f dx = 3 (işaretli). 15, ∫₀⁸ |f| dx yani toplam alandır." }
      ]
    },
    {
      baslik: "Karşılaştırma ve simetri (ek bilgi)",
      kisa: "Büyük fonksiyonun integrali büyüktür; simetrik aralıkta çift ve tek fonksiyonlar kısalır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "f(x) ≤ g(x)", alt: "[a, b] üzerinde" }, "⇒", { t: "∫ₐᵇ f dx ≤ ∫ₐᵇ g dx", alt: "integraller de aynı sıralı" }],
          aciklama: "Özel olarak m ≤ f(x) ≤ M ise m · (b − a) ≤ ∫ₐᵇ f dx ≤ M · (b − a): integral, en küçük ve en büyük dikdörtgenin arasına sıkışır." },
        { tip: "ornek", baslik: "Sıkıştırma", durum: "[0, 2] aralığında ∫₀² (1 + x²) dx için alt ve üst sınır bul.",
          adimlar: [
            "[0, 2]'de 1 + x² en az 1 (x = 0'da), en çok 5 (x = 2'de).",
            "Aralık uzunluğu 2.",
            "Alt sınır 1 · 2 = 2, üst sınır 5 · 2 = 10."
          ], sonuc: "2 ≤ ∫₀² (1 + x²) dx ≤ 10" },
        { tip: "tablo", baslik: "Simetrik aralık [−a, a] için kısayol", head: ["Tür", "Örnek", "∫₋ₐᵃ f(x) dx"],
          rows: [
            ["Çift (*even*): f(−x) = f(x)", "x², cos x", "2 · ∫₀ᵃ f(x) dx"],
            ["Tek (*odd*): f(−x) = −f(x)", "x, x³, sin x", "0"]
          ], not: "Tek fonksiyonda sol yarının alanı sağ yarıyı tam siler: ∫₋₃³ x dx = −4,5 + 4,5 = 0." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "∫ₐᵃ f(x) dx = 0.",
            "Sınırlar yer değiştirince işaret değişir: ∫₇² f = −∫₂⁷ f.",
            "Toplam, fark ve sabit çarpan ayrılır; çarpım ve bölüm ayrılmaz.",
            "Sabit c için ∫ₐᵇ c dx = c · (b − a).",
            "Komşu aralıklar toplanır: ∫₁³ f + ∫₃⁶ f = ∫₁⁶ f. Ortak sınır eşleşmeli.",
            "Grafikten: bölgeleri üçgen, dikdörtgen ve yamukla hesapla; eksenin altını eksi yaz.",
            "Belirli integral işaretli alandır; toplam alan için |f| integraline bak.",
            "Karşılaştırma: f ≤ g ise ∫f ≤ ∫g. Simetrik aralıkta tek fonksiyonun integrali 0'dır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "∫₁⁵ f(x) dx = 7 ve ∫₁⁵ g(x) dx = −3 ise ∫₁⁵ (3f(x) − g(x) + 2) dx kaçtır?",
      opts: ["24", "26", "29", "32"], a: 3,
      why: "3 · 7 = 21; −(−3) = +3; ∫₁⁵ 2 dx = 2 · 4 = 8. Toplam 32. 24 sabit terimi unutmaktır; 26 g'nin işaretini yanlış almaktır (21 − 3 + 8); 29 ise g terimini hiç saymamaktır (21 + 8)." },
    { q: "∫₂⁶ f(x) dx = 5 ve ∫₂⁴ f(x) dx = 8 ise ∫₄⁶ f(x) dx kaçtır?",
      opts: ["13", "−3", "3", "−13"], a: 1,
      why: "∫₂⁴ + ∫₄⁶ = ∫₂⁶ olduğundan ∫₄⁶ = 5 − 8 = −3. 3 işaret hatasıdır; 13 ise iki değeri toplamaktır." },
    { q: "f sürekli bir fonksiyondur. Grafik ile x ekseni arasında kalan bölgelerin alanları ve f'nin işareti tabloda verilmiştir. ∫₈³ f(x) dx kaçtır?",
      fig: { type: "table", head: ["Aralık", "[0, 3]", "[3, 5]", "[5, 8]"], rows: [["f'nin işareti", "+", "−", "+"], ["Bölgenin alanı", "5", "2", "4"]], caption: "Bölge alanları" },
      opts: ["2", "6", "−2", "−6"], a: 2,
      why: "∫₃⁸ f = −2 + 4 = 2. Sınırlar ters (8'den 3'e) olduğundan işaret değişir: −2. 2, sınırları çevirmeyi unutmaktır; 6 alanları işaretsiz toplamaktır; −6 ise ikisini birden yapar." },
    { q: "∫₁⁴ f(x) dx = 2 ve ∫₁⁴ g(x) dx = 5 olduğunu biliyoruz. Aşağıdakilerden hangisi kesinlikle doğrudur?",
      opts: ["∫₁⁴ f(x) · g(x) dx = 10", "∫₁⁴ f(x) / g(x) dx = 2/5", "∫₁⁴ (f(x) + g(x)) dx = 7", "∫₁⁴ (f(x))² dx = 4"], a: 2,
      why: "Toplam ayrılır: 2 + 5 = 7. Çarpım, bölüm ve karenin integrali, integrallerin çarpımı, bölümü ya da karesi değildir; bunlar bilinen değerlerden bulunamaz." },
    { q: "Bir depoya su akış hızı r(t) L/dk'dır. ∫₀¹⁰ r(t) dt = 40 ve ∫₁₀⁶ r(t) dt = −25 ise ilk 6 dakikada depoya giren su ∫₀⁶ r(t) dt kaç litredir?",
      opts: ["15", "65", "−15", "−65"], a: 0,
      why: "∫₁₀⁶ r = −25 demek ∫₆¹⁰ r = +25 demektir. ∫₀⁶ + ∫₆¹⁰ = ∫₀¹⁰ olduğundan ∫₀⁶ = 40 − 25 = 15. 65, 40 ile 25'i toplamaktır." }
  ]
};
