/* Kitpath not defteri · st408 · 4.9 Rastgele Değişkenleri Birleştirmek
   Kaynak: AP Statistics CED Topic 4.9 (video kiti yok). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st408",
  amac: "Bu konu iki rastgele değişkeni toplayıp çıkarınca ya da bir değişkeni sabitle çarpıp toplayınca ortalamanın ve standart sapmanın ne olduğunu anlatıyor. Ortalamalar toplanır, ==varyanslar== toplanır (bağımsızsa) ve standart sapmalar toplanmaz.",
  bolumler: [
    {
      baslik: "Toplamın ve farkın ortalaması",
      kisa: "Ortalamalar toplanır ya da çıkarılır; bunun için bağımsızlık gerekmez.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🤝", terim: "Independent random variables", tr: "bağımsız rastgele değişkenler", tanim: "Birinin aldığı değer, ötekinin olasılıklarını ==değiştirmez==.", ornek: "İki ayrı zarın üst yüzleri." },
            { ikon: "📐", terim: "Variance", tr: "varyans", tanim: "Standart sapmanın karesi (σ²). Birleştirirken toplanan şey ==varyanstır==, standart sapma değil.", ornek: "σ = 3 ise σ² = 9." }
          ] },
        { tip: "tablo", baslik: "Okula gidiş: yürüyüş ve servis süresi (dakika)", head: ["Değişken", "Anlamı", "Ortalama", "Standart sapma"], rows: [
            ["X", "Evden servis durağına yürüme", "10", "3"],
            ["Y", "Servisle okula varış", "25", "4"]
          ], not: "Varsayım: X ve Y bağımsız (yürüyüş süresi servisin gelmesini etkilemiyor)." },
        { tip: "formul", parcalar: [
            { t: "μ_(X+Y)", alt: "toplamın ortalaması" }, "=",
            { t: "μ_X + μ_Y", alt: "ortalamalar toplanır" }
          ], aciklama: "Fark için aynı mantık: μ_(X−Y) = μ_X − μ_Y. Ortalamalar için X ile Y'nin bağımsız olması gerekmez." },
        { tip: "ornek", baslik: "Toplam süre ve süre farkı", durum: "T = X + Y toplam yolculuk süresi, D = Y − X servis süresinin yürüyüşten kaç dakika fazla olduğu. μ_T ve μ_D kaçtır?",
          adimlar: ["μ_T = μ_X + μ_Y = 10 + 25 = 35 dakika.", "μ_D = μ_Y − μ_X = 25 − 10 = 15 dakika."],
          sonuc: "Ortalama yolculuk 35 dk; servis ortalama yürüyüşten 15 dk uzun." }
      ]
    },
    {
      baslik: "Standart sapma: varyanslar toplanır",
      kisa: "Bağımsızsa varyanslar toplanır, çıkarmada bile; standart sapmalar toplanmaz.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "σ²_(X±Y)", alt: "toplamın da farkın da varyansı" }, "=",
            { t: "σ²_X + σ²_Y", alt: "toplamda da farkta da varyanslar toplanır (bağımsızsa)" }
          ], aciklama: "Yalnız X ve Y ==bağımsızsa== geçerli. Standart sapma için son adımda karekök al: σ_(X±Y) = √(σ²_X + σ²_Y)." },
        { tip: "ornek", baslik: "Yolculuk süresinin standart sapması", durum: "Aynı X (σ = 3) ve Y (σ = 4), bağımsız. T = X + Y ve D = Y − X için σ kaçtır?",
          adimlar: ["Varyanslar: σ²_X = 3² = 9; σ²_Y = 4² = 16.", "T için: σ²_T = 9 + 16 = 25; σ_T = √25 = 5 dakika.", "D için de varyanslar toplanır: σ²_D = 9 + 16 = 25; σ_D = 5 dakika."],
          sonuc: "σ_T = 5 ve σ_D = 5. Toplamın ve farkın standart sapması aynıdır; ikisi de 3 + 4 = 7 değildir." },
        { tip: "tuzak", baslik: "Standart sapmalar toplanmaz, fark çıkmaz", metin: "Toplanan, çıkarılan ya da \"kareden önce\" birleşen şey standart sapma değil ==varyanstır==.", yanlis: "σ_T = 3 + 4 = 7 ve σ_D = 4 − 3 = 1.", dogru: "Önce varyansları topla (9 + 16 = 25), sonra karekök al (5). Çıkarma yaparken varyanslar yine toplanır, çünkü fark da belirsizliği artırır." }
      ]
    },
    {
      baslik: "Bağımsızlık şartı",
      kisa: "Varyans toplama kuralı yalnızca bağımsız değişkenler için geçerlidir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "Bağımsız: varyans toplanır", maddeler: ["Birinin değeri diğerini etkilemez", "Ayrı rastgele denemeler", "σ² toplamı kullanılır"] },
          sag: { ikon: "⚠️", baslik: "Bağımlı: kural kullanılamaz", maddeler: ["Biri değişince öteki de eğilimle değişir", "Aynı birimin ilişkili ölçümleri", "Bu kuralla σ bulunamaz"] },
          oyun: [
            { metin: "Rastgele seçilen iki farklı öğrencinin tost sayıları.", cevap: "sol", neden: "Farklı öğrenciler, rastgele seçim: bağımsız kabul edilir." },
            { metin: "Aynı öğrencinin boyu ve ayakkabı numarası.", cevap: "sag", neden: "Boy uzadıkça numara da artar: bağımlı." },
            { metin: "İki ayrı zarın üst yüzleri.", cevap: "sol", neden: "Bir zar diğerini etkilemez: bağımsız." },
            { metin: "Aynı öğrencinin matematik ve fizik sınav puanları.", cevap: "sag", neden: "İlişkili olma eğilimi var: bağımlı." }
          ] },
        { tip: "not", metin: "Bağımsızlığı söylemeden σ'yı birleştirme. Problem \"bağımsız\" diyorsa ya da rastgele ve ayrı denemelerden söz ediyorsa kuralı kullan. Ortalamayı birleştirmek için bağımsızlık gerekmediğini unutma." }
      ]
    },
    {
      baslik: "Toplamın dağılımı nasıl görünür?",
      kisa: "Toplam daha geniştir ama genişlik toplamsal değil, karekökle büyür.",
      bloklar: [
        { tip: "grafik", baslik: "X, Y, X + Y ve Y − X (çan eğrisi olarak çizildi)", xlabel: "Dakika", ylabel: "Yoğunluk", xmax: 10, ymax: 8,
          xticks: [{ v: 2, label: "10" }, { v: 4, label: "20" }, { v: 6, label: "30" }, { v: 8, label: "40" }, { v: 10, label: "50" }],
          ogeler: [
            { id: "X", tip: "egri", renk: 0, noktalar: [[0.2, 0.07], [0.35, 0.15], [0.5, 0.29], [0.65, 0.53], [0.8, 0.9], [0.95, 1.44], [1.1, 2.16], [1.25, 3.04], [1.4, 4.03], [1.55, 5.02], [1.7, 5.87], [1.85, 6.44], [2, 6.65], [2.15, 6.44], [2.3, 5.87], [2.45, 5.02], [2.6, 4.03], [2.75, 3.04], [2.9, 2.16], [3.05, 1.44], [3.2, 0.9], [3.35, 0.53], [3.5, 0.29], [3.65, 0.15], [3.8, 0.07]] },
            { id: "tX", tip: "yazi", x: 2, y: 7.2, metin: "X: μ 10, σ 3" },
            { id: "Y", tip: "egri", renk: 1, gizli: true, noktalar: [[2.6, 0.06], [2.8, 0.11], [3, 0.22], [3.2, 0.4], [3.4, 0.67], [3.6, 1.08], [3.8, 1.62], [4, 2.28], [4.2, 3.02], [4.4, 3.76], [4.6, 4.4], [4.8, 4.83], [5, 4.99], [5.2, 4.83], [5.4, 4.4], [5.6, 3.76], [5.8, 3.02], [6, 2.28], [6.2, 1.62], [6.4, 1.08], [6.6, 0.67], [6.8, 0.4], [7, 0.22], [7.2, 0.11], [7.4, 0.06]] },
            { id: "tY", tip: "yazi", x: 5, y: 5.7, metin: "Y: μ 25, σ 4", gizli: true },
            { id: "T", tip: "egri", renk: 2, gizli: true, noktalar: [[4, 0.04], [4.25, 0.09], [4.5, 0.18], [4.75, 0.32], [5, 0.54], [5.25, 0.86], [5.5, 1.3], [5.75, 1.83], [6, 2.42], [6.25, 3.01], [6.5, 3.52], [6.75, 3.87], [7, 3.99], [7.25, 3.87], [7.5, 3.52], [7.75, 3.01], [8, 2.42], [8.25, 1.83], [8.5, 1.3], [8.75, 0.86], [9, 0.54], [9.25, 0.32], [9.5, 0.18], [9.75, 0.09], [10, 0.04]] },
            { id: "mT", tip: "cizgi", renk: 2, kesik: true, from: [7, 0], to: [7, 4.4], gizli: true },
            { id: "tT", tip: "yazi", x: 8.4, y: 4.9, metin: "X + Y: μ 35, σ 5", gizli: true },
            { id: "w", tip: "yazi", x: 7.4, y: 7.3, metin: "σ_T = 5, yani 3 + 4 = 7 değil", gizli: true },
            { id: "D", tip: "egri", renk: 3, gizli: true, noktalar: [[0, 0.04], [0.25, 0.09], [0.5, 0.18], [0.75, 0.32], [1, 0.54], [1.25, 0.86], [1.5, 1.3], [1.75, 1.83], [2, 2.42], [2.25, 3.01], [2.5, 3.52], [2.75, 3.87], [3, 3.99], [3.25, 3.87], [3.5, 3.52], [3.75, 3.01], [4, 2.42], [4.25, 1.83], [4.5, 1.3], [4.75, 0.86], [5, 0.54], [5.25, 0.32], [5.5, 0.18], [5.75, 0.09], [6, 0.04]] },
            { id: "tD", tip: "yazi", x: 3, y: 4.9, metin: "Y − X: μ 15, σ 5", gizli: true }
          ],
          durumlar: [
            { metin: "Yürüyüş süresi X: ortalama 10, standart sapma 3." },
            { metin: "Servis süresi Y: ortalama 25, standart sapma 4; daha uzun ve biraz daha dağınık.", goster: ["Y", "tY"] },
            { metin: "Toplam T = X + Y: ortalama ==10 + 25 = 35==, sağa kaydı. Çan eğrisi daha alçak ve geniş.", goster: ["T", "mT", "tT"] },
            { metin: "Genişlik σ_T = √(9 + 16) = 5. Bu 4'ten büyük ama 3 + 4 = 7 değil.", goster: ["w"] },
            { metin: "Fark D = Y − X: ortalama 25 − 10 = 15, ama σ yine 5. Çıkarma da dağılımı genişletir.", gizle: ["T", "mT", "tT", "w", "X", "tX", "Y", "tY"], goster: ["D", "tD"] }
          ] },
        { tip: "not", metin: "Çizimde değişkenlerin yaklaşık normal olduğunu varsaydık. Bağımsız normal değişkenlerin toplamı ve farkı da normaldir; ortalama ve σ yukarıdaki kurallarla bulunur." }
      ]
    },
    {
      baslik: "Doğrusal dönüşüm: a + bX",
      kisa: "Sabit eklemek merkezi kaydırır; bX hem merkezi hem yayılımı |b| kat değiştirir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "μ_(a+bX)", alt: "ortalama" }, "=",
            { t: "a + b · μ_X", alt: "a eklenir, b çarpar" }
          ] },
        { tip: "formul", parcalar: [
            { t: "σ_(a+bX)", alt: "standart sapma" }, "=",
            { t: "|b| · σ_X", alt: "a etkilemez" }
          ], aciklama: "Varyans için: σ²_(a+bX) = b² · σ²_X. a sabiti yayılımı değiştirmez; b çarpanı yayılımı mutlak değeri kadar büyütür." },
        { tip: "ornek", baslik: "Kantin hesabı: C = 10 + 30X", durum: "Her tost 30 TL, ayrıca sabit 10 TL'lik içecek. X tost sayısı: μ_X = 1,6 ve σ²_X = 0,84 (σ_X ≈ 0,92). Toplam hesap C = 10 + 30X için μ_C ve σ_C kaçtır?",
          adimlar: ["Ortalama: μ_C = 10 + 30(1,6) = 10 + 48 = 58 TL.", "Varyans: σ²_C = 30² · 0,84 = 900 · 0,84 = 756. (10 TL varyansı değiştirmez.)", "Standart sapma: σ_C = √756 ≈ 27,5 TL. Kısa yol: 30 · 0,9165 ≈ 27,5."],
          sonuc: "μ_C = 58 TL, σ_C ≈ 27,5 TL. Sabit 10 TL ortalamayı kaydırdı ama yayılımı değiştirmedi." },
        { tip: "tuzak", baslik: "a ve b ayrı etki eder", metin: "+10 yalnızca merkezi taşır; ×30 hem merkezi hem yayılımı büyütür. Negatif b'de yayılım eksi olmaz.", yanlis: "σ_(10+30X) = 10 + 30 · σ_X; ya da b = −2 ise σ_(a+bX) = −2σ_X.", dogru: "σ_(a+bX) = |b| · σ_X: a hiç girmez, b'nin mutlak değeri çarpar. Varyansta b² olur." }
      ]
    },
    {
      baslik: "İki kopya (X₁ + X₂) ile iki katı (2X)",
      kisa: "Bağımsız iki kopyanın toplamı, aynı değişkeni ikiye katlamaktan daha az yayılır.",
      bloklar: [
        { tip: "tablo", baslik: "Tost dağılımı (μ = 1,6; σ² = 0,84) ile iki seçenek", head: ["", "S = X₁ + X₂", "D = 2X"], rows: [
            ["Anlam", "İki farklı öğrencinin tost sayısı toplamı", "Tek öğrencinin tost sayısını ikiye katla"],
            ["Ortalama", "1,6 + 1,6 = 3,2", "2 · 1,6 = 3,2"],
            ["Varyans", "0,84 + 0,84 = 1,68", "2² · 0,84 = 3,36"],
            ["Standart sapma", "√1,68 ≈ 1,30", "√3,36 ≈ 1,83"]
          ], vurgu: 3, not: "Ortalamalar aynı, yayılımlar farklı." },
        { tip: "ornek", baslik: "Neden fark çıkıyor?", durum: "S = X₁ + X₂ iki ayrı öğrenciyi, D = 2X ise aynı öğrenciyi iki kez sayar. Hangisi daha çok yayılır ve neden?",
          adimlar: ["S'de iki öğrenci birbirinden bağımsız; biri çok alırsa öteki az alabilir, uçlar birbirini söndürür.", "D'de iki sayı birbirinin aynısı: aynı öğrenci çok tost aldıysa ikisi de çok, az aldıysa ikisi de az.", "Yani 2X'te bağımsızlık yok; varyans 2² = 4 katına çıkar. S'de varyans yalnız 2 katına çıkar."],
          sonuc: "Aynı ortalama (3,2), ama σ_S ≈ 1,30 < σ_D ≈ 1,83. X + X ile 2X aynı şey değildir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Konunun özeti.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Ortalamalar her zaman toplanır ya da çıkarılır: μ_(X±Y) = μ_X ± μ_Y; bağımsızlık gerekmez.",
            "Bağımsız X ve Y için varyanslar toplanır: σ²_(X±Y) = σ²_X + σ²_Y. Fark alırken de toplanır.",
            "Standart sapma bulmak için varyansları topla, sonra karekök al; σ'ları doğrudan toplama.",
            "Varyans kuralı için bağımsızlığı söylemeyi unutma; bağımlıysa kullanılamaz.",
            "Doğrusal dönüşüm: μ_(a+bX) = a + bμ_X ve σ_(a+bX) = |b|σ_X (varyansta b²).",
            "Sabit a yalnız merkezi kaydırır; b hem merkezi hem yayılımı değiştirir.",
            "X₁ + X₂ (bağımsız kopyalar) ile 2X aynı değildir: varyans 2σ² ve 4σ².",
            "Bağımsız normal değişkenlerin toplamı ve farkı da normaldir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir öğrencinin kantinde sıra bekleme süresi X: ortalama 6 dk, standart sapma 2 dk. Tost yapılma süresi Y: ortalama 4 dk, standart sapma 1,5 dk. X ve Y bağımsız. Toplam süre T = X + Y'nin standart sapması kaçtır?",
      opts: ["3,5 dk", "0,5 dk", "2,5 dk", "6,25 dk"],
      a: 2, why: "Varyanslar toplanır: 2² + 1,5² = 4 + 2,25 = 6,25. Karekök: √6,25 = 2,5 dk. En çekici yanlış şık A: standart sapmaları doğrudan toplamak (2 + 1,5). D şıkkı varyanstır; karekök almayı unutmak." },
    { q: "Aynı X (μ = 6, σ = 2) ve Y (μ = 4, σ = 1,5), bağımsız. Fark F = X − Y için ortalama ve standart sapma kaçtır?",
      opts: ["μ = 2; σ = 2,5", "μ = 2; σ = 0,5", "μ = 10; σ = 2,5", "μ = 2; σ = 6,25"],
      a: 0, why: "Ortalama çıkarılır: 6 − 4 = 2. Varyans yine toplanır: 4 + 2,25 = 6,25; σ = 2,5. B şıkkı σ'ları çıkarmıştır (2 − 1,5), en çekici yanlış şık. C ortalamaları toplamış; D karekök almamış." },
    { q: "Bir kantinde simit sayısı X için μ_X = 2 ve σ_X = 0,5. Her simit 8 TL, ayrıca sabit 4 TL servis ücreti alınıyor: C = 4 + 8X. Hesabın ortalaması ve standart sapması kaçtır?",
      opts: ["μ_C = 20; σ_C = 8", "μ_C = 16; σ_C = 4", "μ_C = 20; σ_C = 0,5", "μ_C = 20; σ_C = 4"],
      a: 3, why: "μ_C = 4 + 8(2) = 20. σ_C = |8| · 0,5 = 4; sabit 4 TL yayılımı değiştirmez. A şıkkı σ'ya da 4 ekliyor (en çekici yanlış şık); B sabiti ortalamaya eklemeyi unutuyor; C ise çarpanı σ'ya uygulamıyor." },
    { q: "Tablo, bir öğrencinin tost sayısı X'in ortalamasını ve standart sapmasını veriyor. S, iki farklı öğrencinin (bağımsız) tost sayıları toplamı; D ise tek bir öğrencinin tost sayısının ikiye katıdır (2X). Hangisi doğrudur?",
      opts: ["μ_S = μ_D ve σ_S = σ_D", "μ_S = μ_D ve σ_S < σ_D", "μ_S < μ_D ve σ_S = σ_D", "μ_S > μ_D ve σ_S > σ_D"],
      a: 1,
      fig: { type: "table", head: ["Değişken", "Ortalama", "Standart sapma"], rows: [["X (bir öğrenci)", "1,5", "1,0"]], caption: "Tek öğrencinin tost sayısı." },
      why: "İki durumda da ortalama 1,5 + 1,5 = 3 = 2 · 1,5. Ama σ_S = √(1² + 1²) = √2 ≈ 1,41, σ_D = 2 · 1 = 2. İkiye katlamada iki sayı aynı olduğu için yayılım daha büyüktür. A şıkkı, X + X ile 2X'in aynı olduğunu sanır; en çekici yanlış şık." },
    { q: "σ²_(X+Y) = σ²_X + σ²_Y kuralını kullanmanın uygun olmadığı durum hangisidir?",
      opts: ["Üç ayrı çark çevirişinde kazanılan ödüllerin toplamı", "İki ayrı zarın atılan sayılarının toplamı", "Rastgele seçilen iki farklı öğrencinin tost sayıları toplamı", "Aynı öğrencinin matematik ve fizik sınav puanlarının toplamı"],
      a: 3, why: "Aynı öğrencinin iki sınav puanı genellikle ilişkilidir (bağımlı), bu yüzden varyanslar doğrudan toplanamaz. Diğer üç durumda ayrı ve rastgele denemeler olduğu için bağımsızlık makuldür. Ortalamayı toplamak ise her durumda geçerlidir." }
  ]
};
