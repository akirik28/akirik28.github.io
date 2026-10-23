/* Kitora not defteri · cb603 · 6.4–6.5 Analizin Temel Teoremi ve Birikim Fonksiyonları
   Kaynak: AP Calculus BC CED, Topic 6.4 ve 6.5. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb603",
  amac: "Bu konu *Fundamental Theorem of Calculus* ile *accumulation function* kavramını anlatıyor: üst sınırı değişken olan bir integralin türevi, içindeki fonksiyonun kendisidir. Birikim fonksiyonunun grafiğini f'nin işaretinden ve eğiminden okumayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Birikim fonksiyonu g(x) = ∫ₐˣ f(t) dt",
      kisa: "Üst sınırı x olan integral, x'e bağlı yeni bir fonksiyondur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪣", terim: "Accumulation function", tr: "birikim fonksiyonu", tanim: "Sabit bir a noktasından değişken bir x noktasına kadar biriken işaretli alanı veren g(x) = ∫ₐˣ f(t) dt fonksiyonu. g(a) her zaman 0'dır.", ornek: "g(x) = ∫₀ˣ 2t dt = x²." },
            { ikon: "🎭", terim: "Dummy variable", tr: "kukla değişken", tanim: "İntegralin içindeki t yalnızca toplama değişkenidir ve sonuçta görünmez. Sonucu x'e bağlı yapan şey üst sınırdır.", ornek: "g(3) = ∫₀³ 2t dt = 9; t yok, x = 3 var." }
          ] },
        { tip: "ornek", baslik: "f(t) = 2t için g(x)", durum: "g(x) = ∫₀ˣ 2t dt. Grafik altındaki alan, tabanı x, yüksekliği 2x olan bir üçgendir.",
          adimlar: [
            "Üçgenin alanı: ½ · x · 2x = x².",
            "Yani g(x) = x²: g(1) = 1, g(2) = 4, g(3) = 9.",
            "Türev: g′(x) = 2x. Bu tam olarak f(x) = 2x'in kendisi."
          ], sonuc: "g(x) = x² ve g′(x) = f(x)." }
      ]
    },
    {
      baslik: "Temel Teorem, birinci kısım",
      kisa: "Türev integrali geri alır: d/dx ∫ₐˣ f(t)dt = f(x).",
      bloklar: [
        { tip: "not", metin: "x biraz büyüyünce alan, yüksekliği f(x) olan ince bir şerit kadar artar: Δg ≈ f(x) · Δx. İkiyi Δx'e bölüp küçültünce g′(x) = f(x) kalır." },
        { tip: "formul", parcalar: [{ t: "d/dx", alt: "x'e göre türev" }, { t: "∫ₐˣ f(t) dt", alt: "birikim fonksiyonu" }, "=", { t: "f(x)", alt: "integrantın kendisi" }],
          aciklama: "f, a ile x arasında sürekliyse g sürekli, türevlenebilir ve g′ = f olur. Antitürev bulmana gerek yok." },
        { tip: "ornek", baslik: "Integral almadan türev", durum: "g(x) = ∫₁ˣ √(t³ + 1) dt ise g′(2) kaçtır?",
          adimlar: [
            "Birinci kısım: g′(x) = √(x³ + 1).",
            "x = 2: g′(2) = √(8 + 1) = √9 = 3."
          ], sonuc: "g′(2) = 3" }
      ]
    },
    {
      baslik: "Üst sınır bir fonksiyonsa: zincir kuralı",
      kisa: "Üst sınır u(x) ise f(u)·u′ olur; sınırlar yer değiştirirse işaret eksi olur.",
      bloklar: [
        { tip: "tablo", baslik: "Üç kalıp", head: ["İntegral", "Türevi", "Neden"],
          rows: [
            ["∫ sin t dt, sınırlar 1 ve x", "sin x", "Üst sınır tam x"],
            ["∫ sin t dt, sınırlar 1 ve x²", "2x · sin(x²)", "Zincir: f(u) · u′"],
            ["∫ sin t dt, sınırlar x ve 4", "−sin x", "Sınırları çevir: işaret eksi"]
          ], vurgu: 1, not: "Genel kalıp: d/dx ∫ₐ^(u(x)) f(t) dt = f(u(x)) · u′(x)." },
        { tip: "ornek", baslik: "Zincirli türev", durum: "h(x) = ∫₂^(3x) (t² + 1) dt ise h′(1) kaçtır?",
          adimlar: [
            "Üst sınır u = 3x, u′ = 3.",
            "Integrantı u'da hesapla: u² + 1 = 9x² + 1.",
            "h′(x) = (9x² + 1) · 3.",
            "x = 1: h′(1) = 10 · 3 = 30."
          ], sonuc: "h′(1) = 30" },
        { tip: "tuzak", metin: "Üst sınır x değilse en sık hata iç türevi (u′) unutmaktır. Alt sınırda x varsa da eksi işaretini kaçırma.", yanlis: "d/dx ∫₁^(x²) cos t dt = cos(x²).", dogru: "cos(x²) · 2x. Üst sınırın türevi olan 2x ile çarpılır." }
      ]
    },
    {
      baslik: "g'nin davranışını f'den okumak",
      kisa: "g′ = f ve g″ = f′: g'nin artışı ve eğriliği f'nin işaretinden ve eğiminden okunur.",
      bloklar: [
        { tip: "tablo", baslik: "f hakkında bilgi, g hakkında sonuç", head: ["f ne yapıyor?", "g ne yapar?"],
          rows: [
            ["f > 0", "g artar"],
            ["f < 0", "g azalır"],
            ["f artıdan eksiye geçer", "g'nin yerel maksimumu"],
            ["f eksiden artıya geçer", "g'nin yerel minimumu"],
            ["f artan (f′ > 0)", "g içbükey yukarı"],
            ["f azalan (f′ < 0)", "g içbükey aşağı"],
            ["f yerel maks. ya da min. (f′ işaret değiştirir)", "g'nin dönüm noktası"]
          ], not: "Mutlak maksimum için aday noktalara uç noktaları da ekle." },
        { tip: "grafik", baslik: "f (parçalı doğrusal) ve g(x) = ∫₀ˣ f(t)dt", xlabel: "x", ylabel: "y", xmax: 9, ymax: 13,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }], yticks: [{ v: 0, label: "−4" }, { v: 4, label: "0" }, { v: 8, label: "4" }, { v: 12, label: "8" }],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 4], to: [9, 4] },
            { id: "f1", tip: "cizgi", renk: 0, from: [0, 4], to: [2, 8] },
            { id: "f2", tip: "cizgi", renk: 0, from: [2, 8], to: [4, 4] },
            { id: "f3", tip: "cizgi", renk: 0, from: [4, 4], to: [6, 0], etiket: "f" },
            { id: "f4", tip: "cizgi", renk: 0, from: [6, 0], to: [8, 4] },
            { id: "g", tip: "egri", renk: 2, etiket: "g", gizli: true, noktalar: [[0, 4], [0.5, 4.25], [1, 5], [1.5, 6.25], [2, 8], [2.5, 9.75], [3, 11], [3.5, 11.75], [4, 12], [4.5, 11.75], [5, 11], [5.5, 9.75], [6, 8], [6.5, 6.25], [7, 5], [7.5, 4.25], [8, 4]] },
            { id: "pm", tip: "nokta", renk: 3, x: 4, y: 12, etiket: "g(4) = 8", kilavuz: true, gizli: true },
            { id: "pi1", tip: "nokta", renk: 3, x: 2, y: 8, etiket: "dönüm", gizli: true },
            { id: "pi2", tip: "nokta", renk: 3, x: 6, y: 8, etiket: "dönüm", gizli: true }
          ],
          durumlar: [
            { metin: "f: 0'dan 4'e çıkar, 0'a iner, −4'e düşer, 0'a döner. Kesikli çizgi gerçek yatay eksendir." },
            { metin: "g(x) = ∫₀ˣ f(t)dt: f pozitifken g artar. İlk üçgen g(2) = 4, ikinci üçgen g(4) = 8 yapar.", goster: ["g"] },
            { metin: "x = 4'te f artıdan eksiye geçer: g artıştan azalışa döner. g(4) = 8 maksimumdur.", goster: ["pm"] },
            { metin: "x = 2 ve x = 6'da f yön değiştirir (f′ işaret değiştirir): g içbükeyliğini değiştirir, dönüm noktaları.", goster: ["pi1", "pi2"] },
            { metin: "x = 4'ten sonra f negatif, g azalır: g(6) = 4, g(8) = 0." }
          ] },
        { tip: "ikili", sol: { ikon: "📈", baslik: "f'nin *sign*'ine bak", maddeler: ["g artıyor mu azalıyor mu?", "g′ = f"] },
          sag: { ikon: "📐", baslik: "f'nin *slope*'una bak", maddeler: ["g içbükey mi?", "g″ = f′"] },
          oyun: [
            { metin: "g'nin x = 4'te yerel maksimumu var mı?", cevap: "sol", neden: "f'nin işaret değişimi (+ → −) maksimumu verir." },
            { metin: "g, x = 1'de içbükey yukarı mı?", cevap: "sag", neden: "f artıyor (f′ > 0): g içbükey yukarı." },
            { metin: "g, (4, 6) aralığında azalıyor mu?", cevap: "sol", neden: "f negatif: g azalır." },
            { metin: "g'nin x = 6'da dönüm noktası var mı?", cevap: "sag", neden: "f, x = 6'da azalandan artana geçer: f′ işaret değiştirir." }
          ] },
        { tip: "tuzak", metin: "f'nin tepe noktası ile g'nin tepe noktası aynı yerde değildir. f'nin maksimumu g'nin hız bakımından en hızlı arttığı yerdir.", yanlis: "f, x = 2'de maksimum; g de x = 2'de maksimum.", dogru: "g'nin maksimumu f'nin işaret değiştirdiği x = 4'te. x = 2, g'nin dönüm noktasıdır." }
      ]
    },
    {
      baslik: "Değer hesabı ve mutlak maksimum",
      kisa: "g'nin değerini alanlardan topla; mutlak maksimum için uç noktaları da karşılaştır.",
      bloklar: [
        { tip: "ornek", baslik: "Aynı f ile g'yi hesapla", durum: "Önceki grafikteki f ile g(x) = ∫₀ˣ f(t)dt. g(2), g(4), g(6), g(8), g′(6) ve [0, 8] aralığındaki mutlak maksimumu bul.",
          adimlar: [
            "0–2 arası üçgen: ½ · 2 · 4 = 4. g(2) = 4.",
            "2–4 arası üçgen: ½ · 2 · 4 = 4. g(4) = 8.",
            "4–6 arası eksenin altında üçgen: −4. g(6) = 8 − 4 = 4.",
            "6–8 arası eksenin altında üçgen: −4. g(8) = 4 − 4 = 0.",
            "g′(6) = f(6) = −4: x = 6'da g azalıyor.",
            "Adaylar: g(0) = 0, g(4) = 8, g(8) = 0. Mutlak maksimum g(4) = 8.",
            "g(x) = 3 + ∫₀ˣ f(t)dt olsaydı tüm değerler 3 artar: maksimum 11."
          ], sonuc: "g(2) = 4, g(4) = 8, g(6) = 4, g(8) = 0, g′(6) = −4; mutlak maksimum g(4) = 8." },
        { tip: "tablo", baslik: "g'nin değerleri", head: ["x", "0", "2", "4", "6", "8"], rows: [["g(x)", "0", "4", "8", "4", "0"], ["g′(x) = f(x)", "0", "4", "0", "−4", "0"]], vurgu: 0 }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "g(x) = ∫ₐˣ f(t)dt bir birikim fonksiyonudur; g(a) = 0.",
            "Temel Teorem, birinci kısım: g′(x) = f(x). Türev integrali geri alır.",
            "Üst sınır u(x) ise türev f(u(x)) · u′(x); alt sınırda x varsa işaret eksi.",
            "İç türevi unutmak en sık hatadır.",
            "f > 0 iken g artar, f < 0 iken g azalır; f'nin işaret değişimi g'nin ekstremumudur.",
            "g″ = f′: f artansa g içbükey yukarı, f azalansa içbükey aşağı.",
            "f'nin yerel ekstremumları g'nin dönüm noktalarıdır.",
            "g'nin değerlerini işaretli alanlardan topla; mutlak maksimum için uç noktaları da karşılaştır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "g(x) = ∫₀ˣ √(t² + 16) dt ise g′(3) kaçtır?",
      opts: ["5", "3", "4", "25"], a: 0,
      why: "Birinci kısımdan g′(x) = √(x² + 16). x = 3 için √25 = 5. 3, üst sınırın kendisini yazmaktır; 4, g′(0) değeridir; 25 ise karekökü almayı unutmaktır." },
    { q: "h(x) = ∫₀^(2x) √(1 + t²) dt ise h′(x) hangisidir?",
      opts: ["√(1 + 4x²)", "2√(1 + 4x²)", "2x√(1 + 4x²)", "4x/√(1 + 4x²)"], a: 1,
      why: "Üst sınır u = 2x, u′ = 2. h′(x) = √(1 + u²) · u′ = √(1 + 4x²) · 2. A şıkkı iç türevi unutur; D şıkkı integrantı türevlemektir, ama Temel Teorem integrantı türevlemez." },
    { q: "f, aşağıdaki tabloda verilen noktalar arasında doğru parçalarıyla birleşen bir fonksiyondur. g(x) = ∫₀ˣ f(t) dt ise g(6) kaçtır?",
      fig: { type: "table", head: ["x", "0", "2", "4", "6", "8"], rows: [["f(x)", "0", "4", "0", "−4", "0"]], caption: "f parçalı doğrusaldır" },
      opts: ["−4", "8", "4", "0"], a: 2,
      why: "0–4 arası iki üçgen: 4 + 4 = 8. 4–6 arası eksenin altında bir üçgen: ½ · 2 · 4 = 4, işareti eksi. g(6) = 8 − 4 = 4. 8, g(4) değeridir; −4 yalnızca son üçgendir; 0 ise g(8)'dir." },
    { q: "Aynı f ve g için, g'nin [0, 8] aralığındaki yerel maksimumu hangi x değerinde oluşur?",
      fig: { type: "table", head: ["x", "0", "2", "4", "6", "8"], rows: [["f(x)", "0", "4", "0", "−4", "0"]], caption: "f parçalı doğrusaldır" },
      opts: ["x = 2", "x = 4", "x = 6", "x = 8"], a: 1,
      why: "g′ = f ve f, x = 4'te artıdan eksiye geçer: g'nin yerel maksimumu x = 4'te, g(4) = 8. x = 2, f'nin maksimumudur ama g orada hâlâ artmaktadır (dönüm noktası)." },
    { q: "k(x) = ∫ₓ³ e^(t²) dt ise k′(1) kaçtır?",
      opts: ["e", "−e⁹", "e⁹ − e", "−e"], a: 3,
      why: "Sınırları çevirince k(x) = −∫₃ˣ e^(t²) dt olur; k′(x) = −e^(x²). x = 1 için −e. e işareti kaçırmaktır; −e⁹ ise integrantı üst sınır 3'te hesaplamaktır." }
  ]
};
