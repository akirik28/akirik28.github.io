/* Kitpath not defteri · cb605 · 6.7 Temel Teoremle Belirli İntegral Hesabı
   Kaynak: AP Calculus BC CED, Topic 6.7. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb605",
  amac: "Bu konu *Fundamental Theorem of Calculus* ikinci kısmını anlatıyor: ∫ₐᵇ f(x) dx = F(b) − F(a). Antitürevle belirli integrali alan çizmeden hesaplamayı, net değişimi, yer değiştirme ile toplam yol farkını ve teoremin ne zaman uygulanamadığını öğreneceksin.",
  bolumler: [
    {
      baslik: "Temel Teorem, ikinci kısım",
      kisa: "Belirli integral, antitürevin üst sınırdaki değeri eksi alt sınırdaki değeridir.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "∫ₐᵇ f(x) dx", alt: "belirli integral" }, "=", { t: "F(b) − F(a)", alt: "antitürev farkı" }],
          aciklama: "Burada F′ = f ve f, [a, b] üzerinde sürekli. Sonsuz toplamı bir çıkarmaya çevirir: ==alan hesabı, türevin tersiyle yapılır.==" },
        { tip: "kavramlar", kartlar: [
            { ikon: "↩️", terim: "Antiderivative", tr: "antitürev", tanim: "Türevi f olan F fonksiyonu. Bir f'nin sonsuz antitürevi vardır; hepsi birbirinden sabit kadar farklıdır.", ornek: "x² için x³/3, x³/3 + 5, x³/3 − 7 hepsi birer antitürevdir." }
          ] },
        { tip: "grafik", baslik: "f(x) = x² altındaki alan, F(x) = x³/3", xlabel: "x", ylabel: "y", xmax: 3.5, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }], yticks: [{ v: 4, label: "4" }, { v: 9, label: "9" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, etiket: "x²", noktalar: [[0, 0], [0.25, 0.0625], [0.5, 0.25], [0.75, 0.5625], [1, 1], [1.25, 1.5625], [1.5, 2.25], [1.75, 3.0625], [2, 4], [2.25, 5.0625], [2.5, 6.25], [2.75, 7.5625], [3, 9]] },
            { id: "a02", tip: "alan", renk: 1, gizli: true, noktalar: [[0, 0], [0, 0], [0.25, 0.0625], [0.5, 0.25], [0.75, 0.5625], [1, 1], [1.25, 1.5625], [1.5, 2.25], [1.75, 3.0625], [2, 4], [2, 0]] },
            { id: "a12", tip: "alan", renk: 2, gizli: true, noktalar: [[1, 0], [1, 1], [1.25, 1.5625], [1.5, 2.25], [1.75, 3.0625], [2, 4], [2, 0]] },
            { id: "a01", tip: "alan", renk: 3, gizli: true, noktalar: [[0, 0], [0, 0], [0.25, 0.0625], [0.5, 0.25], [0.75, 0.5625], [1, 1], [1, 0]] }
          ],
          durumlar: [
            { metin: "f(x) = x² ve bir antitürevi F(x) = x³/3 (türevi x²)." },
            { metin: "∫₀² x² dx = F(2) − F(0) = 8/3 − 0 = 8/3 ≈ 2,67.", goster: ["a02"] },
            { metin: "∫₁² x² dx = F(2) − F(1) = 8/3 − 1/3 = 7/3 ≈ 2,33.", gizle: ["a02"], goster: ["a12"] },
            { metin: "Kalan parça ∫₀¹ x² dx = F(1) − F(0) = 1/3. 1/3 + 7/3 = 8/3: parçalar bütünü verir.", goster: ["a01"] }
          ] }
      ]
    },
    {
      baslik: "Dört adımda hesap",
      kisa: "Antitürevi bul, üst sınırı koy, alt sınırı çıkar; +C yazma.",
      bloklar: [
        { tip: "adimlar", baslik: "Belirli integral nasıl hesaplanır?", adimlar: [
            { baslik: "Antitürevi bul", metin: "f(x) için bir F(x) bul. +C yazmana gerek yok: F(b) + C − F(a) − C = F(b) − F(a)." },
            { baslik: "Sınırları köşeli parantezle yaz", metin: "[F(x)]ₐᵇ gösterimi \"F'yi a'dan b'ye değerlendir\" demektir." },
            { baslik: "Üst eksi alt", metin: "F(b)'yi koy, F(a)'yı çıkar." },
            { baslik: "Sadeleştir ve yorumla", metin: "Sonuç işaretli alan ya da net değişimdir; birimini yaz." }
          ] },
        { tip: "ornek", baslik: "∫₁³ x² dx", durum: "Antitürevle hesapla.",
          adimlar: [
            "Antitürev: F(x) = x³/3.",
            "[x³/3]₁³ = 27/3 − 1/3.",
            "9 − 1/3 = 26/3."
          ], sonuc: "26/3" },
        { tip: "ornek", baslik: "∫₀^π sin x dx", durum: "Bir sinüs tepesinin altındaki alan.",
          adimlar: [
            "Antitürev: F(x) = −cos x.",
            "[−cos x]₀^π = (−cos π) − (−cos 0).",
            "(−(−1)) − (−1) = 1 + 1 = 2."
          ], sonuc: "2" }
      ]
    },
    {
      baslik: "Hazır antitürevler",
      kisa: "Sık gelen antitürevleri bil; sonucu türevleyerek kontrol et.",
      bloklar: [
        { tip: "tablo", baslik: "Bu konuda lazım olan temel antitürevler", head: ["f(x)", "Bir antitürevi F(x)"],
          rows: [
            ["k (sabit)", "kx"],
            ["xⁿ (n ≠ −1)", "xⁿ⁺¹ / (n + 1)"],
            ["1/x", "ln|x|"],
            ["eˣ", "eˣ"],
            ["sin x", "−cos x"],
            ["cos x", "sin x"],
            ["sec² x", "tan x"]
          ], not: "Daha fazlası ve +C'nin anlamı sonraki konuda (6.8). Kontrol: F′(x) = f(x) mi?" },
        { tip: "ornek", baslik: "∫₁⁴ √x dx", durum: "Kökü kuvvet olarak yaz.",
          adimlar: [
            "√x = x^(1/2). Kuvvet kuralı: x^(3/2) / (3/2) = (2/3) x^(3/2).",
            "(2/3) · 4^(3/2) = (2/3) · 8 = 16/3.",
            "(2/3) · 1^(3/2) = 2/3.",
            "Üst eksi alt: 16/3 − 2/3 = 14/3."
          ], sonuc: "14/3" }
      ]
    },
    {
      baslik: "Net değişim: türevin integrali",
      kisa: "Bir değişim hızının integrali, niceliğin net değişimini verir.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "∫ₐᵇ F′(x) dx", alt: "değişim hızının integrali" }, "=", { t: "F(b) − F(a)", alt: "net değişim" }],
          aciklama: "Hız v ise konum s için ∫ₐᵇ v(t) dt = s(b) − s(a) (==yer değiştirme==). Buradan s(b) = s(a) + ∫ₐᵇ v(t) dt." },
        { tip: "grafik", baslik: "v(t) = t − 3 (m/s), 0 ≤ t ≤ 5", xlabel: "t (s)", ylabel: "m/s", xmax: 6, ymax: 6,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }], yticks: [{ v: 0, label: "−3" }, { v: 3, label: "0" }, { v: 5, label: "2" }],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 3], to: [6, 3] },
            { id: "v", tip: "cizgi", renk: 0, from: [0, 0], to: [5, 5], etiket: "v(t)" },
            { id: "an", tip: "alan", renk: 3, gizli: true, noktalar: [[0, 3], [3, 3], [0, 0]] },
            { id: "ap", tip: "alan", renk: 2, gizli: true, noktalar: [[3, 3], [5, 3], [5, 5]] },
            { id: "zn", tip: "yazi", x: 0.9, y: 2, metin: "−4,5 m", gizli: true },
            { id: "zp", tip: "yazi", x: 4.5, y: 3.5, metin: "+2 m", gizli: true },
            { id: "zt", tip: "yazi", x: 3, y: 5.5, metin: "net = −2,5 m", gizli: true }
          ],
          durumlar: [
            { metin: "Hız −3 m/s ile başlar, t = 3'te sıfırlanır, sonra pozitif olur. Kesikli çizgi gerçek yatay eksen." },
            { metin: "0–3 s: hız negatif, cisim geri gidiyor. Alan = ½ · 3 · 3 = 4,5; yön eksi: −4,5 m.", goster: ["an", "zn"] },
            { metin: "3–5 s: hız pozitif, cisim ileri gidiyor. Alan = ½ · 2 · 2 = 2: +2 m.", goster: ["ap", "zp"] },
            { metin: "Yer değiştirme −4,5 + 2 = −2,5 m. Toplam yol 4,5 + 2 = 6,5 m.", goster: ["zt"] }
          ] },
        { tip: "ornek", baslik: "Yer değiştirme, konum ve yol", durum: "Doğrusal bir yolda hareket eden cismin hızı v(t) = t − 3 m/s ve t = 0'da konumu s(0) = 4 m. t = 5'teki konumunu ve 0–5 s arasında aldığı toplam yolu bul.",
          adimlar: [
            "Antitürev: ∫ (t − 3) dt → t²/2 − 3t.",
            "Yer değiştirme: [t²/2 − 3t]₀⁵ = (12,5 − 15) − 0 = −2,5 m.",
            "Konum: s(5) = 4 + (−2,5) = 1,5 m.",
            "v(t) = 0 olan an t = 3. ∫₀³ (t − 3) dt = −4,5 ve ∫₃⁵ (t − 3) dt = 2.",
            "Toplam yol: |−4,5| + 2 = 6,5 m."
          ], sonuc: "s(5) = 1,5 m ve toplam yol 6,5 m." },
        { tip: "tuzak", metin: "Integral net değişimi verir; cismin gittiği yolu değil. Yol için hız işaret değiştirdiği yerden aralığı bölüp mutlak değerleri topla.", yanlis: "∫₀⁵ v dt = −2,5 olduğundan cisim 2,5 m yol aldı.", dogru: "−2,5 yer değiştirmedir. Toplam yol ∫₀⁵ |v| dt = 6,5 m." }
      ]
    },
    {
      baslik: "Temel Teorem ne zaman uygulanmaz?",
      kisa: "f aralıkta sürekli olmalı; süreksizlik varsa teorem sana yanlış sonuç verir.",
      bloklar: [
        { tip: "ornek", baslik: "Hatalı hesabın anatomisi", durum: "∫₋₁¹ 1/x² dx değerini antitürevle bulmaya çalış.",
          adimlar: [
            "Antitürev: F(x) = −1/x.",
            "F(1) − F(−1) = (−1) − (1) = −2.",
            "Ama 1/x² her yerde pozitif; integrali negatif olamaz. Sonuç saçma.",
            "Neden: 1/x², x = 0'da süreksiz (dikey asimptot) ve 0 aralığın içinde. Temel Teorem uygulanamaz.",
            "Bu integral aslında sonsuza gider (has olmayan integral, 6.13'te)."
          ], sonuc: "Teorem uygulanamaz; sonuç −2 değil." },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Temel Teoremle hesaplanır", maddeler: ["f aralıkta sürekli", "F(b) − F(a) güvenle kullanılır"] },
          sag: { ikon: "⛔", baslik: "Hesaplanamaz", maddeler: ["Aralıkta süreksizlik var", "Önce has olmayan integral gerekir"] },
          oyun: [
            { metin: "∫₁³ 1/x dx", cevap: "sol", neden: "1/x [1, 3] üzerinde sürekli." },
            { metin: "∫₋₁¹ 1/x dx", cevap: "sag", neden: "1/x, x = 0'da süreksiz ve 0 aralığın içinde." },
            { metin: "∫₀⁴ √x dx", cevap: "sol", neden: "√x [0, 4] üzerinde sürekli." },
            { metin: "∫₀^π tan x dx", cevap: "sag", neden: "tan x, x = π/2'de süreksiz (dikey asimptot)." },
            { metin: "∫₋₂² 1/x² dx", cevap: "sag", neden: "1/x², x = 0'da süreksiz." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Temel Teorem, ikinci kısım: ∫ₐᵇ f(x)dx = F(b) − F(a), F′ = f ve f sürekli.",
            "Hesap: antitürevi bul, [F(x)]ₐᵇ yaz, üst eksi alt. +C yazma; sadeleşir.",
            "Kökleri ve paydadaki kuvvetleri x^n biçiminde yaz, sonra kuvvet kuralını uygula.",
            "Net değişim: ∫ₐᵇ F′(x)dx = F(b) − F(a); son değer = ilk değer + integral.",
            "Hızın integrali yer değiştirmedir; toplam yol için ∫|v| dt, hız işaret değiştirdiği yerden bölünür.",
            "Sonucu işaretli alan olarak da yorumla; birimini yaz.",
            "f aralıkta süreksizse (ör. 1/x², 0 aralıkta) Temel Teorem uygulanmaz; saçma sonuç çıkabilir.",
            "Sonucu doğrulamak için F′ = f olup olmadığına bak."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "∫₀² (3x² + 1) dx değeri kaçtır?",
      opts: ["8", "10", "13", "20"], a: 1,
      why: "Antitürev x³ + x. [x³ + x]₀² = (8 + 2) − 0 = 10. 8, x terimini unutmaktır; 13, integral almadan fonksiyonun x = 2'deki değerini (3 · 4 + 1) yazmaktır." },
    { q: "∫₁^e 2/x dx değeri kaçtır?",
      opts: ["2", "1", "2e", "e − 1"], a: 0,
      why: "Antitürev 2 ln x. 2 ln e − 2 ln 1 = 2 · 1 − 0 = 2. 1, çarpan 2'yi unutmaktır; e − 1, 2/x'in antitürevi yerine x yazıp [x]₁^e = e − 1 hesaplamaktır." },
    { q: "Düz bir koridorda hareket eden bir robotun hızı v(t) = 2t − 6 m/s (0 ≤ t ≤ 6). Robotun 0–6 saniyede aldığı toplam yol kaç metredir?",
      opts: ["0", "9", "18", "36"], a: 2,
      why: "v(t) = 0 olan an t = 3. ∫₀³ |2t − 6| dt = 9 ve ∫₃⁶ (2t − 6) dt = 9: toplam yol 18 m. ∫₀⁶ v dt = 0 yer değiştirmedir; robot başladığı yere dönmüştür. 9 yalnızca bir yarıdır." },
    { q: "Bir kantin kuyruğundaki kişi sayısı N(t); değişim hızı N′(t) = 3 − t kişi/dakika ve N(0) = 10. (0 ≤ t ≤ 4.) 4. dakikada kuyrukta kaç kişi vardır?",
      opts: ["4", "14", "10", "24"], a: 1,
      why: "N(4) = N(0) + ∫₀⁴ (3 − t) dt = 10 + [3t − t²/2]₀⁴ = 10 + (12 − 8) = 14. 4 yalnızca net değişimdir (başlangıcı unutmak); 10 değişimi saymamaktır." },
    { q: "Aşağıdaki integrallerden hangisi Temel Teorem ile doğrudan hesaplanabilir?",
      opts: ["∫₋₁¹ 1/x² dx", "∫₋₁² 1/x dx", "∫₀^π tan x dx", "∫₁⁴ 1/x² dx"], a: 3,
      why: "1/x², [1, 4] üzerinde süreklidir: [−1/x]₁⁴ = −1/4 + 1 = 3/4. A ve B şıklarında x = 0 aralığın içindedir, C şıkkında tan x, x = π/2'de süreksizdir." }
  ]
};
