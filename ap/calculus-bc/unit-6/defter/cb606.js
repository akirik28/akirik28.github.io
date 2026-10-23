/* Kitora not defteri · cb606 · 6.8 Belirsiz İntegral: Temel Kurallar
   Kaynak: AP Calculus BC CED, Topic 6.8. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb606",
  amac: "Bu konu *antiderivative* ve *indefinite integral* kavramlarını anlatıyor: türevi verilen fonksiyonu geri bulmak. +C'nin neden gerektiğini, temel antitürev kurallarını ve başlangıç değeriyle tek bir çözümü seçmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Antitürev ve +C",
      kisa: "Türevi f olan F'nin yanına her sabit eklenebilir; antitürev tek değil, bir ailedir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "↩️", terim: "Antiderivative", tr: "antitürev", tanim: "Türevi f olan bir F fonksiyonu: F′(x) = f(x). Türev almanın tersidir.", ornek: "x²'nin türevi 2x olduğundan F(x) = x², f(x) = 2x'in antitürevidir." },
            { ikon: "➕", terim: "Constant of integration", tr: "integral sabiti", tanim: "Sabitin türevi sıfır olduğundan F + C de aynı f'nin antitürevidir. Bu yüzden sonuca +C yazılır.", ornek: "x², x² + 1 ve x² − 7'nin türevi hep 2x." }
          ] },
        { tip: "grafik", baslik: "f(x) = 2x'in antitürev ailesi: y = x² + C", xlabel: "x", ylabel: "y", xmax: 3.5, ymax: 12,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }], yticks: [{ v: 3, label: "3" }, { v: 6, label: "6" }, { v: 9, label: "9" }],
          ogeler: [
            { id: "c0", tip: "egri", renk: 0, etiket: "C = 0", noktalar: [[0, 0], [0.25, 0.0625], [0.5, 0.25], [0.75, 0.5625], [1, 1], [1.25, 1.5625], [1.5, 2.25], [1.75, 3.0625], [2, 4], [2.25, 5.0625], [2.5, 6.25], [2.75, 7.5625], [3, 9]] },
            { id: "c1", tip: "egri", renk: 1, etiket: "C = 1", gizli: true, noktalar: [[0, 1], [0.25, 1.0625], [0.5, 1.25], [0.75, 1.5625], [1, 2], [1.25, 2.5625], [1.5, 3.25], [1.75, 4.0625], [2, 5], [2.25, 6.0625], [2.5, 7.25], [2.75, 8.5625], [3, 10]] },
            { id: "c2", tip: "egri", renk: 2, etiket: "C = 2", gizli: true, noktalar: [[0, 2], [0.25, 2.0625], [0.5, 2.25], [0.75, 2.5625], [1, 3], [1.25, 3.5625], [1.5, 4.25], [1.75, 5.0625], [2, 6], [2.25, 7.0625], [2.5, 8.25], [2.75, 9.5625], [3, 11]] },
            { id: "t0", tip: "cizgi", renk: 0, from: [0.5, 0], to: [1.5, 2], gizli: true },
            { id: "t1", tip: "cizgi", renk: 1, from: [0.5, 1], to: [1.5, 3], gizli: true },
            { id: "t2", tip: "cizgi", renk: 2, from: [0.5, 2], to: [1.5, 4], gizli: true },
            { id: "p", tip: "nokta", renk: 3, x: 1, y: 3, etiket: "(1, 3)", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "F(x) = x²'nin türevi 2x. Bu eğri f(x) = 2x'in antitürevlerinden biri (C = 0)." },
            { metin: "x² + 1 ve x² + 2 de f(x) = 2x'in antitürevidir: aynı eğri yukarı kaymış hali.", goster: ["c1", "c2"] },
            { metin: "x = 1'de üç eğrinin teğeti paraleldir (eğim 2): hepsinin türevi aynı.", goster: ["t0", "t1", "t2"] },
            { metin: "Eğriden birini seçmek için bir nokta gerekir. (1, 3) noktasından yalnızca C = 2 geçer: 1² + 2 = 3.", goster: ["p"] }
          ] }
      ]
    },
    {
      baslik: "Belirsiz integral gösterimi",
      kisa: "∫ f(x)dx bir fonksiyon ailesidir; belirli integral ise bir sayıdır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "∫ f(x) dx", alt: "belirsiz integral" }, "=", { t: "F(x) + C", alt: "F′ = f olan aile" }],
          aciklama: "Belirsiz integralin altında ve üstünde sınır yoktur; sonucu bir fonksiyon ailesidir. Sınırlı ∫ₐᵇ f(x)dx ise tek bir sayıdır." },
        { tip: "ikili", sol: { ikon: "📚", baslik: "*Indefinite integral*", maddeler: ["∫ f(x) dx, sınır yok", "Sonuç fonksiyon ailesi, +C var"] },
          sag: { ikon: "🔢", baslik: "*Definite integral*", maddeler: ["∫ₐᵇ f(x) dx, sınırlar var", "Sonuç tek bir sayı"] },
          oyun: [
            { metin: "∫ 3x² dx = x³ + C", cevap: "sol", neden: "Sınır yok, +C var: belirsiz integral." },
            { metin: "∫₀² 3x² dx = 8", cevap: "sag", neden: "Sınırlar var, sonuç sayı: belirli integral." },
            { metin: "Sonucunda C bulunan integral", cevap: "sol", neden: "C yalnızca belirsiz integralde yazılır." },
            { metin: "Alan ya da net değişimi veren integral", cevap: "sag", neden: "Bir aralık gerektirir: belirli integral." }
          ] },
        { tip: "tuzak", metin: "Belirsiz integralin sonunda +C unutmak, notta puan kaybettirir. Belirli integralde ise C yazma, sadeleşir.", yanlis: "∫ 2x dx = x².", dogru: "∫ 2x dx = x² + C. Türevi alınca sabit kaybolur, sen geri koyarsın." }
      ]
    },
    {
      baslik: "Temel antitürev kuralları",
      kisa: "Her türev kuralının tersi bir antitürev kuralıdır; tabloyu bil.",
      bloklar: [
        { tip: "tablo", baslik: "Temel kurallar", head: ["f(x)", "∫ f(x) dx"],
          rows: [
            ["k (sabit)", "kx + C"],
            ["xⁿ (n ≠ −1)", "xⁿ⁺¹ / (n + 1) + C"],
            ["1/x", "ln|x| + C"],
            ["eˣ", "eˣ + C"],
            ["sin x", "−cos x + C"],
            ["cos x", "sin x + C"],
            ["sec² x", "tan x + C"],
            ["csc² x", "−cot x + C"],
            ["sec x tan x", "sec x + C"],
            ["csc x cot x", "−csc x + C"],
            ["1/√(1 − x²)", "arcsin x + C"],
            ["1/(1 + x²)", "arctan x + C"]
          ], vurgu: 1, not: "Doğrulama: sonucun türevini al. F′(x) = f(x) çıkmalı." },
        { tip: "ikili", sol: { ikon: "🔢", baslik: "Kuvvet kuralı", maddeler: ["xⁿ → xⁿ⁺¹/(n+1)", "n = −1 dışında hep çalışır"] },
          sag: { ikon: "🪵", baslik: "*ln* kuralı", maddeler: ["1/x → ln|x|", "n = −1 durumunun özel sonucu"] },
          oyun: [
            { metin: "∫ x⁵ dx", cevap: "sol", neden: "x⁶/6 + C." },
            { metin: "∫ 1/x dx", cevap: "sag", neden: "ln|x| + C." },
            { metin: "∫ 1/x² dx", cevap: "sol", neden: "x⁻² yazılır: x⁻¹/(−1) = −1/x + C." },
            { metin: "∫ 4/x dx", cevap: "sag", neden: "4 ln|x| + C." },
            { metin: "∫ 1/x³ dx", cevap: "sol", neden: "x⁻³ → x⁻²/(−2) = −1/(2x²) + C." }
          ] },
        { tip: "tuzak", metin: "Trigonometride işaretler kolay kaçar: sinüsün antitürevi eksi kosinüstür.", yanlis: "∫ sin x dx = cos x + C.", dogru: "∫ sin x dx = −cos x + C. Kontrol: (−cos x)′ = sin x." }
      ]
    },
    {
      baslik: "Doğrusallık ve önce sadeleştir",
      kisa: "Toplamı terim terim integre et; çarpım ve bölümde önce açıp sadeleştir.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "∫ (a·f ± b·g) dx", alt: "a, b sabit" }, "=", { t: "a ∫ f dx ± b ∫ g dx", alt: "terim terim" }],
          aciklama: "Çarpım ve bölüm için böyle bir kural yok. Önce çarpımı aç ya da bölümü terimlere ayır, sonra terim terim integre et." },
        { tip: "ornek", baslik: "Polinom", durum: "∫ (3x² − 4x + 5) dx",
          adimlar: [
            "3x² → 3 · x³/3 = x³.",
            "−4x → −4 · x²/2 = −2x².",
            "5 → 5x.",
            "Sonuna +C."
          ], sonuc: "x³ − 2x² + 5x + C" },
        { tip: "ornek", baslik: "Önce sadeleştir", durum: "∫ (x² + 3)/x dx",
          adimlar: [
            "Payı paydaya böl: (x² + 3)/x = x + 3/x.",
            "∫ x dx = x²/2.",
            "∫ 3/x dx = 3 ln|x|.",
            "Birleştir ve +C ekle."
          ], sonuc: "x²/2 + 3 ln|x| + C" },
        { tip: "tuzak", metin: "İntegral çarpımı ayırmaz. İki fonksiyonu ayrı ayrı integre edip çarpmak yanlış sonuç verir.", yanlis: "∫ x · x dx = (x²/2) · (x²/2).", dogru: "∫ x · x dx = ∫ x² dx = x³/3 + C. (x²/2)² = x⁴/4 farklı bir fonksiyondur." }
      ]
    },
    {
      baslik: "Başlangıç değer problemi",
      kisa: "Bir nokta bilgisi C'yi sabitler ve tek bir özel çözüm bırakır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌐", terim: "General solution", tr: "genel çözüm", tanim: "Bütün antitürevleri içeren ve +C taşıyan sonuç.", ornek: "y = x³ − 2x + C." },
            { ikon: "📍", terim: "Initial condition", tr: "başlangıç koşulu", tanim: "Fonksiyonun bir noktadaki değerini veren bilgi; C'yi bulmaya yarar.", ornek: "y(2) = 5." },
            { ikon: "🎯", terim: "Particular solution", tr: "özel çözüm", tanim: "Başlangıç koşuluna uyan tek antitürev.", ornek: "y(2) = 5 ile y = x³ − 2x + 1." }
          ] },
        { tip: "ornek", baslik: "Bir basamaklı", durum: "dy/dx = 3x² − 2 ve y(2) = 5 ise y = ?",
          adimlar: [
            "İntegre et: y = x³ − 2x + C.",
            "x = 2, y = 5 koy: 8 − 4 + C = 5.",
            "C = 1."
          ], sonuc: "y = x³ − 2x + 1" },
        { tip: "ornek", baslik: "İki basamaklı", durum: "f″(x) = 6x, f′(0) = −2 ve f(0) = 1 ise f(x) = ? ve f(2) = ?",
          adimlar: [
            "İlk integral: f′(x) = 3x² + C₁. f′(0) = −2 ⇒ C₁ = −2. f′(x) = 3x² − 2.",
            "İkinci integral: f(x) = x³ − 2x + C₂. f(0) = 1 ⇒ C₂ = 1.",
            "f(x) = x³ − 2x + 1.",
            "f(2) = 8 − 4 + 1 = 5."
          ], sonuc: "f(x) = x³ − 2x + 1 ve f(2) = 5." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Antitürev: F′ = f. Bir f'nin sonsuz antitürevi vardır, aralarında sabit fark bulunur.",
            "Belirsiz integral ∫ f(x)dx = F(x) + C bir fonksiyon ailesidir; belirli integral tek bir sayıdır.",
            "xⁿ → xⁿ⁺¹/(n+1) (n ≠ −1); 1/x → ln|x|; eˣ → eˣ.",
            "sin x → −cos x; cos x → sin x; sec²x → tan x; 1/(1+x²) → arctan x; 1/√(1−x²) → arcsin x.",
            "Toplamları ve sabit çarpanları terim terim integre et; çarpım ve bölümü önce sadeleştir.",
            "Çarpımın integrali integrallerin çarpımı değildir.",
            "Başlangıç koşulu C'yi bulur: genel çözüm yerine özel çözüm elde edilir.",
            "Her sonucu türev alarak kontrol et."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "∫ (6x² − 4x + 1) dx ifadesi hangisine eşittir?",
      opts: ["2x³ − 2x² + x", "2x³ − 2x² + x + C", "12x − 4 + C", "3x³ − 4x² + x + C"], a: 1,
      why: "Terim terim: 6x² → 2x³, −4x → −2x², 1 → x ve sabit C. A şıkkı +C'yi unutur; C şıkkı integral yerine türev almıştır." },
    { q: "∫ (2/x + 3eˣ) dx ifadesi hangisine eşittir?",
      opts: ["2 ln|x| + 3eˣ + C", "−2x⁻² + 3eˣ + C", "2 ln|x| + 3eˣ⁺¹/(x + 1) + C", "2/x + 3eˣ + C"], a: 0,
      why: "1/x'in antitürevi ln|x|, eˣ'in antitürevi eˣ'tir. B şıkkı 2/x'i türevlemektir; C şıkkı eˣ'e kuvvet kuralını uygular; D şıkkı hiçbir şey yapmamıştır." },
    { q: "Bir fidanın boyu h(t) santimetredir ve büyüme hızı h′(t) = 2t + 1 cm/hafta, t haftadır. Fidan başlangıçta h(0) = 30 cm ise 4. haftanın sonunda boyu kaç cm'dir?",
      opts: ["20", "34", "46", "50"], a: 3,
      why: "h(t) = t² + t + C ve h(0) = 30 ⇒ C = 30. h(4) = 16 + 4 + 30 = 50. 20 yalnızca büyüme miktarıdır (başlangıcı eklememek); 46 ise t terimini unutmaktır (16 + 30)." },
    { q: "Grafikte A, B ve C doğruları gösterilmiştir. Hangi ikisi f(x) = 2 fonksiyonunun antitürevi olabilir?",
      fig: { type: "graph", xlabel: "x", ylabel: "y", xmax: 5, ymax: 12, lines: [{ from: [0, 1], to: [4, 9], label: "A" }, { from: [0, 3], to: [4, 11], label: "B" }, { from: [0, 1], to: [4, 5], label: "C" }], xticks: [{ v: 4, label: "4" }], yticks: [{ v: 3, label: "3" }, { v: 9, label: "9" }] },
      opts: ["A ve B", "A ve C", "B ve C", "Üçü de"], a: 0,
      why: "F′ = 2 olması, doğrunun eğiminin 2 olması demektir. A (y = 2x + 1) ve B (y = 2x + 3) eğimi 2 olan paralel doğrulardır; C'nin eğimi 1'dir." },
    { q: "f″(x) = 6x, f′(0) = −2 ve f(0) = 1 ise f(2) kaçtır?",
      opts: ["9", "1", "5", "13"], a: 2,
      why: "f′(x) = 3x² − 2; f(x) = x³ − 2x + 1; f(2) = 8 − 4 + 1 = 5. 13, f(x) = x³ + 2x + 1 gibi işaret hatasından gelir; 1 ise f(0) değeridir." }
  ]
};
