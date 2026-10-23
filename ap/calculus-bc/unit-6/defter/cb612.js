/* Kitpath not defteri · cb612 · 6.14 İntegral Yöntemi Seçmek
   Kaynak: AP Calculus BC CED 6.14. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb612",
  amac: "Bu konu bir integralin karşısında doğru yöntemi seçmeyi anlatıyor: temel kural, u-substitution, uzun bölme, tam kare, kısmi integrasyon ya da basit kesirler. İntegralin biçimine bakıp yöntemi tanımayı ve gerektiğinde iki yöntemi birleştirmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Yöntem seçimi: sırayla sor",
      kisa: "Önce temel kural, sonra u, kesir ve çarpım sorularını sor.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Integrand", tr: "integrand", tanim: "İntegral işaretinin içindeki fonksiyon. Yöntemi onun biçimi belirler: kesir mi, çarpım mı, iç içe mi?", ornek: "x·cos(x²) bir çarpımdır ama iç fonksiyon x²'nin türevi yanında duruyor: u-substitution." },
            { ikon: "🔙", terim: "Antiderivative", tr: "ters türev", tanim: "Türevi integrand olan fonksiyon. Hangi yöntemi kullanırsan kullan, sonucu türev alarak kontrol edebilirsin.", ornek: "∫ x cos x dx = x sin x + cos x + C; türevi x cos x." }
          ] },
        { tip: "adimlar", baslik: "Karar sırası", adimlar: [
            { baslik: "Temel kural mı?", metin: "Önce sadeleştir. xⁿ, eˣ, sin x, 1/x, 1/(1 + x²) gibi bilinen kalıba uyuyor mu?" },
            { baslik: "u-substitution", metin: "İçte bir fonksiyon var ve onun türevi (sabitle farkıyla) çarpan olarak duruyor mu?" },
            { baslik: "Rasyonel ifade mi?", metin: "Pay ≥ payda: uzun bölme. Payda çarpanlanır: basit kesirler. Payda köksüz: tam kare." },
            { baslik: "Çarpım mı?", metin: "İki farklı tür çarpılıyorsa (x·eˣ, x·sin x, ln x): kısmi integrasyon." },
            { baslik: "Birleştir ve kontrol et", metin: "Gerekirse iki yöntemi art arda kullan. Sonucu türev alarak doğrula." }
          ] },
        { tip: "harita", merkez: "Hangi yöntem?", dallar: [
            { baslik: "Temel kural", alt: "kalıba uyuyor" },
            { baslik: "u-substitution", alt: "iç fonksiyon + türevi" },
            { baslik: "Uzun bölme", alt: "pay ≥ payda" },
            { baslik: "Basit kesirler", alt: "çarpanlanan payda" },
            { baslik: "Tam kare", alt: "köksüz payda" },
            { baslik: "Kısmi integrasyon", alt: "çarpım, ln x, arctan x" }
          ] }
      ]
    },
    {
      baslik: "İpucu tablosu",
      kisa: "İntegralin biçimi yöntemi söyler: sinyali oku, sonucu kontrol et.",
      bloklar: [
        { tip: "tablo", baslik: "Dokuz integral, dokuz sinyal", head: ["İntegral", "Sinyal", "Yöntem", "Sonuç"],
          rows: [
            ["∫ x·cos(x²) dx", "iç x², yanında türevi", "u-substitution", "½ sin(x²) + C"],
            ["∫ x·cos x dx", "iki farklı tür çarpım", "kısmi integrasyon", "x sin x + cos x + C"],
            ["∫ (x² + 1)/(x + 1) dx", "pay derecesi ≥ payda", "uzun bölme", "x²/2 − x + 2 ln|x + 1| + C"],
            ["∫ 5/((x − 2)(x + 3)) dx", "çarpanlanan payda", "basit kesirler", "ln|(x − 2)/(x + 3)| + C"],
            ["∫ dx/(x² + 2x + 5)", "köksüz payda", "tam kare", "½ arctan((x + 1)/2) + C"],
            ["∫ (ln x)/x dx", "ln x'in türevi 1/x", "u-substitution", "(ln x)²/2 + C"],
            ["∫ x·ln x dx", "ln x, x ile çarpım", "kısmi integrasyon", "(x²/2) ln x − x²/4 + C"],
            ["∫ eˣ/(eˣ + 1) dx", "pay = paydanın türevi", "u-substitution", "ln(eˣ + 1) + C"],
            ["∫ dx/(x² − 4)", "çarpanlanan payda", "basit kesirler", "¼ ln|(x − 2)/(x + 2)| + C"]
          ], vurgu: 0, not: "Her satırın sonucunu türev alarak kontrol et. Aynı sinyal gelince aynı yöntemi dene." },
        { tip: "tuzak", metin: "Benzer görünen integrallerin yöntemi farklı olabilir. Payın paydanın türeviyle ilgisine bak.", yanlis: "∫ x/(x² + 1) dx = arctan x + C.", dogru: "Pay paydanın türeviyle orantılı: u = x² + 1, sonuç ½ ln(x² + 1) + C. arctan yalnızca pay sabitken (∫ dx/(x² + 1)) çıkar." }
      ]
    },
    {
      baslik: "u mu, kısmi mi?",
      kisa: "Biri diğerinin türeviyse u-sub; ikisi bağımsızsa kısmi integrasyon.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔁", baslik: "*u-substitution*", maddeler: ["Bir çarpan, diğerinin iç fonksiyonunun türevi", "Sonuçta tek bir basit integral kalır"] },
          sag: { ikon: "🧩", baslik: "*Integration by parts*", maddeler: ["İki çarpan birbirinin türevi değil", "u türev alınca sadeleşir, dv kolay integre edilir"] },
          oyun: [
            { metin: "∫ x·e^(x²) dx", cevap: "sol", neden: "x, x²'nin türevinin yarısı: u = x²." },
            { metin: "∫ x·eˣ dx", cevap: "sag", neden: "x, eˣ'in türevi değil; u = x, dv = eˣ dx." },
            { metin: "∫ (ln x)/x dx", cevap: "sol", neden: "1/x, ln x'in türevi: u = ln x." },
            { metin: "∫ x·ln x dx", cevap: "sag", neden: "x, ln x'in türevi değil; u = ln x, dv = x dx." },
            { metin: "∫ cos x·sin⁴x dx", cevap: "sol", neden: "cos x, sin x'in türevi: u = sin x." }
          ] },
        { tip: "tuzak", metin: "Her çarpım kısmi integrasyon değildir. Önce çarpanlardan biri diğerinin iç türeviyse diye bak; öyleyse u-substitution çok daha kısa.", yanlis: "∫ x·e^(x²) dx çarpım olduğundan kısmi integrasyon uygula.", dogru: "u = x² seç: ½ e^(x²) + C. Kısmi integrasyonla ∫ x² e^(x²)… gibi daha zor bir integrale gidersin." }
      ]
    },
    {
      baslik: "İki yöntem birden",
      kisa: "Bazen önce u-sub, sonra kısmi integrasyon; ya da kısmi ve limit.",
      bloklar: [
        { tip: "ornek", baslik: "∫ x³·e^(x²) dx", durum: "Önce u-substitution, sonra kısmi integrasyon.",
          adimlar: [
            "u = x² seç. du = 2x dx, yani x dx = du/2. x³ dx = x²·x dx = u·du/2.",
            "İntegral: ½ ∫ u·eᵘ du.",
            "Kısmi (U = u, dV = eᵘ du): ∫ u eᵘ du = u eᵘ − eᵘ.",
            "½(u eᵘ − eᵘ) = ½ eᵘ(u − 1). Geri dön: ½ e^(x²)(x² − 1) + C.",
            "Kontrol: türev ½[2x e^(x²)(x² − 1) + e^(x²)·2x] = x³ e^(x²). ✓"
          ], sonuc: "½ e^(x²)(x² − 1) + C" },
        { tip: "ornek", baslik: "∫₀^∞ x·e^(−x) dx", durum: "Kısmi integrasyon + has olmayan integral.",
          adimlar: [
            "u = x, dv = e^(−x) dx → du = dx, v = −e^(−x).",
            "∫ x e^(−x) dx = −x e^(−x) + ∫ e^(−x) dx = −x e^(−x) − e^(−x) = −(x + 1) e^(−x).",
            "Sınırlar: [−(x + 1) e^(−x)]₀ᵇ = 1 − (b + 1) e^(−b).",
            "b → ∞ iken (b + 1) e^(−b) → 0 (üstel azalma baskın). Limit 1."
          ], sonuc: "1  (yakınsar)" },
        { tip: "grafik", baslik: "y = x·e^(−x): alan 1'e yaklaşır", xlabel: "x", ylabel: "y", xmax: 8, ymax: 0.5,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }], yticks: [{ v: 0.2, label: "0,2" }, { v: 0.4, label: "0,4" }],
          ogeler: [
            { id: "ar", tip: "alan", renk: 0, noktalar: [[0, 0], [0, 0], [0.125, 0.1103], [0.25, 0.1947], [0.375, 0.2577], [0.5, 0.3033], [0.625, 0.3345], [0.75, 0.3543], [0.875, 0.3648], [1, 0.3679], [1.125, 0.3652], [1.25, 0.3581], [1.375, 0.3477], [1.5, 0.3347], [1.625, 0.32], [1.75, 0.3041], [1.875, 0.2875], [2, 0.2707], [2, 0]], gizli: true },
            { id: "c", tip: "egri", renk: 0, etiket: "x·e⁻ˣ", noktalar: [[0, 0], [0.5, 0.3033], [1, 0.3679], [1.5, 0.3347], [2, 0.2707], [2.5, 0.2052], [3, 0.1494], [3.5, 0.1057], [4, 0.0733], [4.5, 0.05], [5, 0.0337], [5.5, 0.0225], [6, 0.0149], [6.5, 0.0098], [7, 0.0064], [7.5, 0.0041], [8, 0.0027]] },
            { id: "t", tip: "yazi", renk: 1, x: 5.5, y: 0.28, metin: "toplam alan → 1", gizli: true }
          ],
          durumlar: [
            { metin: "Eğri x = 1'de en yüksek (1/e ≈ 0,37), sonra üstel olarak sıfıra iner." },
            { metin: "b = 2: alan = 1 − 3e⁻² ≈ 0,59.", goster: ["ar"] },
            { metin: "b = 5: alan = 1 − 6e⁻⁵ ≈ 0,96.", set: { ar: { noktalar: [[0, 0], [0, 0], [0.3125, 0.2286], [0.625, 0.3345], [0.9375, 0.3671], [1.25, 0.3581], [1.5625, 0.3275], [1.875, 0.2875], [2.1875, 0.2454], [2.5, 0.2052], [2.8125, 0.1689], [3.125, 0.1373], [3.4375, 0.1105], [3.75, 0.0882], [4.0625, 0.0699], [4.375, 0.0551], [4.6875, 0.0432], [5, 0.0337], [5, 0]] } } },
            { metin: "b = 8: alan = 1 − 9e⁻⁸ ≈ 0,997. Limit 1: sonsuz kuyruğa rağmen alan sonlu.", set: { ar: { noktalar: [[0, 0], [0, 0], [0.5, 0.3033], [1, 0.3679], [1.5, 0.3347], [2, 0.2707], [2.5, 0.2052], [3, 0.1494], [3.5, 0.1057], [4, 0.0733], [4.5, 0.05], [5, 0.0337], [5.5, 0.0225], [6, 0.0149], [6.5, 0.0098], [7, 0.0064], [7.5, 0.0041], [8, 0.0027], [8, 0]] } }, goster: ["t"] }
          ] }
      ]
    },
    {
      baslik: "Önce sadeleştir",
      kisa: "Kesri ya da ifadeyi sadeleştirmek, çoğu integrali temel kurala indirir.",
      bloklar: [
        { tip: "ornek", baslik: "∫ (x³ + 2x)/x² dx", durum: "Yöntem aramadan önce böl.",
          adimlar: [
            "Payı payda ile terim terim böl: (x³ + 2x)/x² = x + 2/x.",
            "Her terim temel kuraldır: ∫ x dx = x²/2 ve ∫ 2/x dx = 2 ln|x|.",
            "Sonuç: x²/2 + 2 ln|x| + C. Kontrol: türev x + 2/x. ✓"
          ], sonuc: "x²/2 + 2 ln|x| + C" },
        { tip: "ornek", baslik: "∫ tan²x dx", durum: "Özdeşlikle sadeleştir.",
          adimlar: [
            "Özdeşlik: tan²x = sec²x − 1.",
            "∫ sec²x dx = tan x ve ∫ 1 dx = x.",
            "Sonuç: tan x − x + C. Kontrol: türev sec²x − 1 = tan²x. ✓"
          ], sonuc: "tan x − x + C" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Sıra: temel kural (ve sadeleştirme), u-substitution, rasyonel yöntemler, kısmi integrasyon.",
            "u-sub: çarpanlardan biri diğerinin iç fonksiyonunun türeviyse (sabit farkıyla).",
            "Pay ≥ payda: uzun bölme; çarpanlanan payda: basit kesirler; köksüz payda: tam kare ve arctan.",
            "Kısmi integrasyon: iki farklı türün çarpımı (x·eˣ, x·sin x), tek başına ln x ve arctan x.",
            "x/(x² + 1) → ½ ln(x² + 1); 1/(x² + 1) → arctan x: payı kontrol et.",
            "Bazı integraller iki yöntem ister: önce u-sub, sonra kısmi (x³ e^(x²)).",
            "Has olmayan integral: antitürevi bul, sınırı limite çevir (x e^(−x) → 1).",
            "Her sonucu türev alarak kontrol et."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "∫ x²·e^(x³) dx integrali için en uygun yöntem ve sonuç hangisidir?",
      opts: ["Kısmi integrasyon (u = x², dv = e^(x³) dx); sonuç x²·e^(x³)/3 + C", "u-substitution (u = x³); sonuç e^(x³)/3 + C", "u-substitution (u = x³); sonuç 3e^(x³) + C", "Uzun bölme; sonuç x³/3 + e^(x³) + C"],
      a: 1,
      why: "x², x³'ün türevinin üçte biridir: u = x³, du = 3x² dx, x² dx = du/3. ∫ eᵘ du/3 = e^(x³)/3 + C. A şıkkı çekicidir ama dv = e^(x³) dx'in elementer bir integrali yoktur; C şıkkı 1/3'ü ters alır."
    },
    {
      q: "∫ x·e^(3x) dx integralinin değeri aşağıdakilerden hangisidir?",
      opts: ["x·e^(3x)/3 − e^(3x)/9 + C", "x·e^(3x)/3 − e^(3x)/3 + C", "3x·e^(3x) − 9e^(3x) + C", "x²·e^(3x)/6 + C"],
      a: 0,
      why: "u = x, dv = e^(3x) dx → v = e^(3x)/3. x e^(3x)/3 − ∫ e^(3x)/3 dx = x e^(3x)/3 − e^(3x)/9. B şıkkı ikinci terimde 1/3 yerine 1/9 gerektiğini atlar: türevi x e^(3x) − (2/3)e^(3x) olur."
    },
    {
      q: "Tabloda dört integral gösterilmiştir. Hangi ikisi basit kesirlere ayırma yöntemiyle çözülür?",
      fig: { type: "table", head: ["No", "İntegral"], rows: [["I", "∫ 3/((x − 1)(x + 2)) dx"], ["II", "∫ x/(x² + 1) dx"], ["III", "∫ 1/(x² − 9) dx"], ["IV", "∫ 1/(x² + 9) dx"]], caption: "Dört integral" },
      opts: ["I ve II", "I ve III", "II ve IV", "III ve IV"],
      a: 1,
      why: "I paydası zaten çarpanlı; III'te x² − 9 = (x − 3)(x + 3). II u-substitution ile ½ ln(x² + 1), IV ise köksüz payda olduğundan (1/3) arctan(x/3) verir. D şıkkı IV'ü yanlışlıkla çarpanlara ayrılır sanar."
    },
    {
      q: "Bir uygulamanın indirme hızı R(t) = ln t (bin indirme/gün) olarak modellenmiştir. t = 1'den t = e gününe kadar toplam indirme (bin) kaçtır?",
      opts: ["e − 1", "e", "1", "0"],
      a: 2,
      why: "∫ ln t dt kısmi integrasyonla t ln t − t olur. [t ln t − t]₁ᵉ = (e − e) − (0 − 1) = 1. A şıkkı ∫₁ᵉ 1 dt değeridir; ln t ≤ 1 olduğu için toplam e − 1'den küçük olmalıdır."
    },
    {
      q: "∫₀^∞ x·e^(−x) dx integralinin değeri kaçtır?",
      opts: ["0", "2", "ıraksar", "1"],
      a: 3,
      why: "Kısmi integrasyonla antitürev −(x + 1)e^(−x). [−(x + 1)e^(−x)]₀ᵇ = 1 − (b + 1)e^(−b) → 1. C şıkkı, x'in sonsuza gitmesini baskın sanır; oysa üstel azalma x'i bastırır."
    }
  ]
};
