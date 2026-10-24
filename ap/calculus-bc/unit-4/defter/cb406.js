/* Kitpath not defteri · cb406 · 4.7 L'Hôpital Kuralı
   Videosuz ünite: CED 4.7 (Using L'Hospital's Rule for Determining Limits of Indeterminate Forms). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb406",
  amac: "Bu konu *L'Hospital's Rule* yani L'Hôpital kuralını anlatıyor: bir limit 0/0 ya da ∞/∞ biçiminde takılıyorsa pay ve paydanın türevlerinin oranına bakılır. Kuralı ne zaman kullanacağını, ne zaman kullanamayacağını ve diğer belirsiz biçimleri bölüme çevirmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Belirsiz biçim nedir?",
      kisa: "Yerine koyunca 0/0 ya da ∞/∞ çıkıyorsa limit henüz belli değildir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔢", terim: "Direct substitution", tr: "doğrudan yerine koyma", tanim: "Limitte x'e yaklaştığı değeri doğrudan yazmak. Fonksiyon o noktada sürekliyse (ör. paydası sıfır olmayan rasyonel ifade) çıkan sayı limittir.", ornek: "lim (x² + 1) / (x + 1), x → 1: 2/2 = 1." },
            { ikon: "❓", terim: "Indeterminate form", tr: "belirsiz biçim", tanim: "Yerine koyunca 0/0 ya da ∞/∞ gibi sonucu belli olmayan biçim. Limit varsa da bir yöntemle bulunmalı.", ornek: "lim (x² − 4) / (x − 2), x → 2: 0/0." },
            { ikon: "🪄", terim: "L'Hospital's Rule", tr: "L'Hôpital kuralı", tanim: "0/0 ya da ∞/∞ biçiminde pay ve paydanın ayrı ayrı türevlerinin oranını almak.", ornek: "lim (x² − 4)/(x − 2) = lim 2x/1 = 4." }
          ] },
        { tip: "tablo", baslik: "Hangisi belirsiz, hangisi değil?", head: ["Limit", "Yerine koyunca", "Sonuç"],
          rows: [
            ["x → 2, (x² − 4) / (x − 2)", "0/0", "belirsiz: kural gerekir"],
            ["x → ∞, (3x² + 1) / (5x² − x)", "∞/∞", "belirsiz: kural gerekir"],
            ["x → 0, x / 3", "0/3", "0 (belirsiz değil)"],
            ["x → 0⁺, 3 / x", "3/0", "+∞ (belirsiz değil)"]
          ], vurgu: 0, not: "Önce her zaman yerine koy. Sonuç 0/0 ya da ∞/∞ değilse L'Hôpital kullanma." }
      ]
    },
    {
      baslik: "L'Hôpital kuralı",
      kisa: "Önce biçimi kontrol et, sonra pay ve paydayı ayrı ayrı türet.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "lim f(x) / g(x)", alt: "0/0 ya da ∞/∞ ise" }, "=",
            { t: "lim f′(x) / g′(x)", alt: "ayrı ayrı türevler" }
          ], aciklama: "Sağdaki limit sayı ya da ±∞ olarak varsa soldaki de aynı değerdir. ==Sağdaki limit yine 0/0 ya da ∞/∞ çıkarsa kuralı yeniden uygulayabilirsin.==" },
        { tip: "adimlar", baslik: "Her L'Hôpital sorusunda", adimlar: [
            { baslik: "Yerine koy", metin: "Pay ve paydanın limitlerini AYRI AYRI yaz (örn. lim (x² − 4) = 0 ve lim (x − 2) = 0); ikisi de 0 ya da ikisi de ±∞ ise kural uygulanır. \"= 0/0\" bir değer değildir, eşitlik olarak yazma." },
            { baslik: "Pay ve paydayı ayrı türet", metin: "f′(x) ve g′(x) bul; bölüm kuralı kullanma." },
            { baslik: "Yeni oranın limitini al", metin: "Tekrar yerine koy. Sayı çıktıysa bitti, yine belirsizse kuralı tekrarla." }
          ] },
        { tip: "tuzak", metin: "L'Hôpital, bölümün türevi değil, payın ve paydanın ayrı ayrı türevidir. Bölüm kuralı burada yanlıştır.", yanlis: "(x² − 4)/(x − 2) için bölüm kuralıyla [2x(x − 2) − (x² − 4)] / (x − 2)².", dogru: "Pay ve paydayı ayrı türet: 2x / 1 ve limiti al: 4." }
      ]
    },
    {
      baslik: "0/0 örnekleri",
      kisa: "Pay ve payda aynı anda sıfıra gidiyorsa türevlere geç.",
      bloklar: [
        { tip: "ornek", baslik: "lim (x² − 4) / (x − 2), x → 2", durum: "Limiti bul.",
          adimlar: [
            "Yerine koy: (4 − 4) / (2 − 2) = 0/0. Belirsiz.",
            "Pay ve paydayı ayrı türet: 2x ve 1.",
            "lim 2x / 1 = 2 · 2 = 4."
          ], sonuc: "Limit 4 (çarpanlara ayırarak da x + 2 → 4 bulunur)" },
        { tip: "ornek", baslik: "lim (1 − cos x) / x², x → 0", durum: "Limiti bul. Kuralı iki kez kullanman gerekir.",
          adimlar: [
            "Yerine koy: 0/0. Türev: sin x / (2x).",
            "Yine 0/0 (sin 0 = 0, 2 · 0 = 0). Bir daha türet: cos x / 2.",
            "x → 0: cos 0 / 2 = 1/2."
          ], sonuc: "Limit 1/2" },
        { tip: "grafik", baslik: "f(x) = (x² − 4) / (x − 2) = x + 2 (x ≠ 2)", xlabel: "x", ylabel: "y", xmax: 4, ymax: 6,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }], yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "c", tip: "cizgi", renk: 0, from: [0, 2], to: [4, 6] },
            { id: "h", tip: "yazi", x: 2, y: 3.88, metin: "○", gizli: true },
            { id: "l", tip: "nokta", renk: 2, x: 1.9, y: 3.9, etiket: "1,9 → 3,9", gizli: true },
            { id: "r", tip: "nokta", renk: 3, x: 2.1, y: 4.1, etiket: "2,1 → 4,1", gizli: true },
            { id: "g", tip: "nokta", renk: 1, x: 2, y: 4, etiket: "limit 4", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Çizgi y = x + 2. Ama orijinal fonksiyon x = 2'de tanımsız (0/0)." },
            { metin: "x = 2'de grafikte boşluk (açık daire).", goster: ["h"] },
            { metin: "Soldan x = 1,9: değer 3,9.", goster: ["l"] },
            { metin: "Sağdan x = 2,1: değer 4,1.", goster: ["r"] },
            { metin: "İki yandan da değer 4'e yaklaşıyor: limit 4. L'Hôpital aynı sonucu 2x / 1 → 4 ile verir.", goster: ["g"] }
          ] }
      ]
    },
    {
      baslik: "∞/∞ örnekleri ve büyüme hızları",
      kisa: "Üstel > polinom > logaritma: payda hızlı büyüyorsa limit 0 olur.",
      bloklar: [
        { tip: "ornek", baslik: "lim (3x² + 1) / (5x² − x), x → ∞", durum: "Limiti bul.",
          adimlar: [
            "Yerine koy: ∞/∞. Belirsiz.",
            "Türev: 6x / (10x − 1). Yine ∞/∞.",
            "Bir daha türet: 6 / 10 = 3/5."
          ], sonuc: "Limit 3/5 (baş katsayıların oranı)" },
        { tip: "ornek", baslik: "lim x² / eˣ, x → ∞", durum: "Limiti bul.",
          adimlar: [
            "Yerine koy: ∞/∞.",
            "Türev: 2x / eˣ. Yine ∞/∞.",
            "Bir daha türet: 2 / eˣ → 0."
          ], sonuc: "Limit 0 (eˣ, x²'den çok daha hızlı büyür)" },
        { tip: "grafik", baslik: "f(x) = ln x / x", xlabel: "x", ylabel: "y", xmax: 20, ymax: 0.5,
          xticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }, { v: 15, label: "15" }, { v: 20, label: "20" }], yticks: [{ v: 0.1, label: "0,1" }, { v: 0.3, label: "0,3" }, { v: 0.5, label: "0,5" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[1, 0], [2, 0.347], [2.718, 0.368], [3, 0.366], [4, 0.347], [5, 0.322], [6, 0.299], [7, 0.278], [8, 0.26], [9, 0.244], [10, 0.23], [11, 0.218], [12, 0.207], [13, 0.197], [14, 0.189], [15, 0.181], [16, 0.173], [17, 0.167], [18, 0.161], [19, 0.155], [20, 0.15]] },
            { id: "p1", tip: "nokta", renk: 2, x: 2.718, y: 0.368, etiket: "en yüksek ≈ 0,37", gizli: true },
            { id: "p2", tip: "nokta", renk: 3, x: 10, y: 0.23, etiket: "0,23", gizli: true },
            { id: "p3", tip: "nokta", renk: 1, x: 20, y: 0.15, etiket: "0,15", gizli: true }
          ],
          durumlar: [
            { metin: "ln x / x biçimi ∞/∞. L'Hôpital: (1/x) / 1 = 1/x → 0." },
            { metin: "x = e ≈ 2,72'de en yüksek (1/e ≈ 0,37); sonra düşmeye başlıyor.", goster: ["p1"] },
            { metin: "x = 10: 0,23. Payda x, pay ln x'ten çok daha hızlı büyüyor.", gizle: ["p1"], goster: ["p2"] },
            { metin: "x = 20: 0,15. Değer 0'a yaklaşıyor ama hiç sıfır olmuyor.", gizle: ["p2"], goster: ["p3"] }
          ] },
        { tip: "tablo", baslik: "Üç büyüme hızı yan yana", head: ["x", "ln x", "x²", "eˣ"],
          rows: [["10", "2,3", "100", "≈ 2,2 · 10⁴"], ["20", "3,0", "400", "≈ 4,9 · 10⁸"], ["30", "3,4", "900", "≈ 1,1 · 10¹³"]],
          vurgu: 2, not: "Bölümde payda hızlı büyüyorsa limit 0'dır: ln x / x → 0, x² / eˣ → 0. Pay hızlı büyüyorsa limit ±∞ olur." }
      ]
    },
    {
      baslik: "Çarpım ve fark: önce bölüme çevir (ek konu: AP yalnızca 0/0 ve ∞/∞ sorar)",
      kisa: "0 · ∞ ve ∞ − ∞ biçimlerini bölüme çevirip kuralı uygula.",
      bloklar: [
        { tip: "tablo", baslik: "Bölüme çevirme tarifi", head: ["Biçim", "Ne yap?", "Sonra"],
          rows: [
            ["0 · ∞", "f · g = f / (1/g)", "0/0 ya da ∞/∞ olur"],
            ["∞ − ∞", "ortak payda al", "0/0 ya da ∞/∞ olur"]
          ], vurgu: 0, not: "L'Hôpital yalnızca bölümlere uygulanır; diğer biçimleri önce bölüme çevir." },
        { tip: "ornek", baslik: "lim x ln x, x → 0⁺", durum: "0 · (−∞) biçimini çöz.",
          adimlar: [
            "Yerine koy: 0 · (−∞). Belirsiz.",
            "Bölüme çevir: ln x / (1/x). Bu −∞/∞.",
            "L'Hôpital: (1/x) / (−1/x²) = −x.",
            "x → 0⁺: −x → 0."
          ], sonuc: "Limit 0" },
        { tip: "ornek", baslik: "lim (1/x − 1/(eˣ − 1)), x → 0", durum: "∞ − ∞ biçimini çöz.",
          adimlar: [
            "Ortak payda: (eˣ − 1 − x) / (x(eˣ − 1)). Bu 0/0.",
            "Türev: (eˣ − 1) / (eˣ − 1 + x eˣ). Yine 0/0.",
            "Bir daha türet: eˣ / (2eˣ + x eˣ).",
            "x → 0: 1 / 2."
          ], sonuc: "Limit 1/2" }
      ]
    },
    {
      baslik: "Üstlü biçimler: logaritma al (ek konu: AP yalnızca 0/0 ve ∞/∞ sorar)",
      kisa: "y = f^g için ln y = g · ln f yaz, limiti bul, sonra e'ye taşı.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "y = f(x)^g(x)", alt: "1^∞, 0⁰, ∞⁰ biçimleri" }, "⇒",
            { t: "ln y = g(x) · ln f(x)", alt: "çarpıma döner" }, "⇒",
            { t: "y = e^(lim ln y)", alt: "limit bulununca" }
          ], aciklama: "Önce ln y'nin limitini bul (genelde 0 · ∞ çıkar, onu bölüme çevir). Sonra y = e^L olur." },
        { tip: "ornek", baslik: "lim xˣ, x → 0⁺", durum: "0⁰ biçimini çöz.",
          adimlar: [
            "y = xˣ ⇒ ln y = x ln x.",
            "Önceki örnekten: x ln x → 0.",
            "y = e^(ln y) → e⁰ = 1."
          ], sonuc: "Limit 1" },
        { tip: "ornek", baslik: "lim (1 + 1/x)ˣ, x → ∞", durum: "1^∞ biçimini çöz.",
          adimlar: [
            "ln y = x ln(1 + 1/x) = ln(1 + 1/x) / (1/x). Bu 0/0.",
            "Türev: [(−1/x²) / (1 + 1/x)] / (−1/x²) = 1 / (1 + 1/x).",
            "x → ∞: 1 / 1 = 1, yani ln y → 1.",
            "y → e¹."
          ], sonuc: "Limit e" }
      ]
    },
    {
      baslik: "Kuralın sınırları",
      kisa: "Biçim belirsiz değilse ya da oranın limiti yoksa kural sonuç vermez.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "*Uygulanır*", maddeler: ["Yerine koyunca 0/0 ya da ∞/∞", "Pay ve payda türevlenebilir, g′(x) ≠ 0 (a'nın yakınında)"] },
          sag: { ikon: "🚫", baslik: "*Uygulanmaz*", maddeler: ["Yerine koyunca sayı ya da k/0 çıkar", "Önce yerine koy; çözüm orada olabilir"] },
          oyun: [
            { metin: "lim sin x / x, x → 0", cevap: "sol", neden: "0/0 biçimi." },
            { metin: "lim (x² + 1) / (x + 1), x → 1", cevap: "sag", neden: "Yerine koyunca 2/2 = 1; belirsiz değil." },
            { metin: "lim ln x / x, x → ∞", cevap: "sol", neden: "∞/∞ biçimi." },
            { metin: "lim 3 / x, x → 0⁺", cevap: "sag", neden: "3/0: limit +∞, belirsiz değil." }
          ] },
        { tip: "tuzak", metin: "Kuralı biçimini kontrol etmeden uygulamak yanlış cevap verir. Her seferinde yerine koy, 0/0 ya da ∞/∞ gör, sonra türet.", yanlis: "lim (x² + 1) / (x + 1), x → 1 için 2x / 1 = 2.", dogru: "Pay 2, payda 2; 2/2 = 1. Biçim belirsiz olmadığı için kural uygulanmaz." },
        { tip: "ornek", baslik: "lim (x + sin x) / x, x → ∞", durum: "Kural uygulanabilir mi?",
          adimlar: [
            "∞/∞ biçimi; türev oranı: (1 + cos x) / 1.",
            "x → ∞ iken 1 + cos x, 0 ile 2 arasında salınır: limit yok.",
            "O zaman kural hiçbir şey söylemez. Cebirle: 1 + (sin x) / x → 1 + 0 = 1."
          ], sonuc: "Gerçek limit 1; türev oranının limiti olmasa da asıl limit olabilir" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Önce doğrudan yerine koy; fonksiyon o noktada sürekliyse çıkan sayı limittir.",
            "0/0 ya da ∞/∞ çıkarsa lim f/g = lim f′/g′ (sağdaki limit varsa).",
            "Pay ve paydayı ayrı türet; bölüm kuralı yok. Gerekirse kuralı tekrarla.",
            "Büyüme hızı: eˣ > polinom > ln x. Payda hızlıysa limit 0.",
            "0 · ∞ ve ∞ − ∞: önce bölüme çevir (ortak payda ya da 1/g).",
            "1^∞, 0⁰, ∞⁰: ln y = g · ln f yaz, limiti bul, sonra e'nin üssü yap.",
            "Biçim belirsiz değilse kural uygulanmaz (örnek: x → 1, (x² + 1) / (x + 1) = 1).",
            "Oranın limiti yoksa kural sonuç vermez; cebirle ya da başka yöntemle çöz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "lim (e^(2x) − 1) / sin 3x, x → 0 limitinin değeri nedir?",
      opts: ["3/2", "0", "2/3", "1"],
      a: 2,
      why: "Yerine koyunca 0/0. L'Hôpital: 2e^(2x) / (3 cos 3x), x = 0'da 2/3. A şıkkı en çekici yanlış: pay ve paydanın yerini ters çevirmek 3/2 verir." },
    { q: "lim (4x³ − x) / eˣ, x → ∞ limitinin değeri nedir?",
      opts: ["0", "4", "∞", "12"],
      a: 0,
      why: "∞/∞ biçimi; payı üç kez türetince 4x³ − x → 12x² − 1 → 24x → 24 olur, paydada eˣ kalır: 24 / eˣ → 0. Üstel fonksiyon polinomdan çok daha hızlı büyür. C şıkkı en çekici yanlış: pay hızlı büyüyor sanmak; asıl hızlı büyüyen payda." },
    { q: "Bir öğrenci lim (x² + 1) / (x + 1), x → 1 limitini L'Hôpital ile 2x / 1 = 2 buluyor. Bu çözüm hakkında hangisi doğrudur?",
      opts: ["Çözüm doğru; kural her limitte uygulanır.", "Limit 2, çünkü pay ve paydanın türevleri alınmıştır.", "Limit yoktur, çünkü payda 2 olunca bölüm tanımsızdır.", "Çözüm yanlış; yerine koyunca 2/2 = 1 çıkar, belirsiz biçim yoktur."],
      a: 3,
      why: "x = 1'de pay 2, payda 2 olduğundan limit 1'dir; 0/0 ya da ∞/∞ olmadığı için kural uygulanamaz. A şıkkı en çekici yanlış: kuralın yalnızca belirsiz biçimlerde geçerli olduğunu unutuyor." },
    { q: "Tabloda x ln x değerleri veriliyor. Bu değerler ve L'Hôpital kuralı birlikte lim x ln x, x → 0⁺ için hangi sonucu destekler?",
      fig: { type: "table", head: ["x", "0,1", "0,01", "0,001"], rows: [["x ln x", "−0,2303", "−0,0461", "−0,0069"]], caption: "Sayısal değerler" },
      opts: ["Limit −∞", "Limit 0", "Limit 1", "Limit yok"],
      a: 1,
      why: "ln x / (1/x) yazılırsa L'Hôpital (1/x) / (−1/x²) = −x → 0 verir; tablo da 0'a yaklaşıyor. A şıkkı en çekici yanlış: ln x → −∞ olsa da x daha hızlı sıfıra gider." },
    { q: "lim (1/x − 1/(eˣ − 1)), x → 0 limitinin değeri nedir?",
      opts: ["0", "∞", "1/2", "1"],
      a: 2,
      why: "Ortak payda: (eˣ − 1 − x) / (x(eˣ − 1)), 0/0. İki kez L'Hôpital: eˣ / (2eˣ + x eˣ) → 1/2. A şıkkı en çekici yanlış: ∞ − ∞ = 0 sanmak; iki sonsuzun farkı belirsizdir ve burada 1/2 çıkar." }
  ]
};
