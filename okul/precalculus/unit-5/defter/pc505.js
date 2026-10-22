/* Kitora not defteri · pc505 · 5.5 Logaritmik Eşitsizlikler
   Kaynak: okul-10-2025-26.md (Precalculus Unit 5) + MEB 10. sınıf programı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc505",
  amac: "Bu konu *logarithmic inequalities* yani logaritmik eşitsizlikleri anlatıyor. Taban 1'den büyükken yönün korunmasını, 1'den küçükken yönün değişmesini, tanım kümesiyle kesiştirmeyi ve üstel eşitsizlikleri öğreneceksin.",
  bolumler: [
    {
      baslik: "Neden yön değişir? Artan ve azalan logaritma",
      kisa: "b > 1 ise log artar, 0 < b < 1 ise azalır; yön buna bağlıdır.",
      bloklar: [
        { tip: "grafik", baslik: "log₂ x > 1 ve log_(1/2) x > 1", xlabel: "x", ylabel: "y", xmax: 9, ymax: 7,
          yticks: [{ v: 1, label: "−2" }, { v: 2, label: "−1" }, { v: 3, label: "0" }, { v: 4, label: "1" }, { v: 5, label: "2" }, { v: 6, label: "3" }],
          ogeler: [
            { id: "xax", tip: "cizgi", renk: 0, from: [0, 3], to: [9, 3], etiket: "x" },
            { id: "f", tip: "egri", renk: 1, etiket: "f", gizli: true, noktalar: [[0.125, 0], [0.18, 0.526], [0.25, 1], [0.35, 1.485], [0.5, 2], [0.7, 2.485], [1, 3], [1.4, 3.485], [2, 4], [2.8, 4.485], [4, 5], [5.7, 5.511], [8, 6]] },
            { id: "l", tip: "cizgi", renk: 0, kesik: true, from: [0, 4], to: [9, 4], gizli: true },
            { id: "lt", tip: "yazi", x: 8.9, y: 4.4, metin: "y = 1", hiza: "end", gizli: true },
            { id: "p2", tip: "nokta", renk: 1, x: 2, y: 4, gizli: true },
            { id: "ok1", tip: "ok", renk: 1, from: [2, 3], to: [8.6, 3], gizli: true },
            { id: "t1", tip: "yazi", x: 5.3, y: 2.35, metin: "x > 2", gizli: true },
            { id: "g", tip: "egri", renk: 2, etiket: "g", gizli: true, noktalar: [[0.125, 6], [0.18, 5.474], [0.25, 5], [0.35, 4.515], [0.5, 4], [0.7, 3.515], [1, 3], [1.4, 2.515], [2, 2], [2.8, 1.515], [4, 1], [5.7, 0.489], [8, 0]] },
            { id: "p3", tip: "nokta", renk: 2, x: 0.5, y: 4, gizli: true },
            { id: "ok2", tip: "ok", renk: 2, from: [0.5, 3], to: [0.04, 3], gizli: true },
            { id: "t2", tip: "yazi", x: 0.3, y: 6.4, metin: "0 < x < 1/2", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "**f(x) = log₂ x**: taban 2 > 1, grafik soldan sağa ==yükselir==. x büyüdükçe log da büyür.", goster: ["f"] },
            { metin: "log₂ x > 1: eğrinin y = 1 doğrusunun üstünde kaldığı yer. Kesişim x = 2'de; sağında eğri yukarıda: ==x > 2==. Yön korundu.", goster: ["l", "lt", "p2", "ok1", "t1"] },
            { metin: "Şimdi **g(x) = log_(1/2) x**: taban 1/2 < 1, grafik soldan sağa ==alçalır==. x büyüdükçe log küçülür.", gizle: ["f", "p2", "ok1", "t1"], goster: ["g"] },
            { metin: "log_(1/2) x > 1: eğri y = 1'in üstünde yalnızca kesişim x = 1/2'nin ==solunda==: 0 < x < 1/2. Yön DEĞİŞTİ.", goster: ["p3", "ok2", "t2"] }
          ] },
        { tip: "ikili", sol: { ikon: "📈", baslik: "b > 1 (artan)", maddeler: ["Yön aynı kalır", "log_b A > log_b B ⇒ A > B"] },
          sag: { ikon: "📉", baslik: "0 < b < 1 (azalan)", maddeler: ["Yön değişir", "log_b A > log_b B ⇒ A < B"] },
          oyun: [
            { metin: "log₃ x > log₃ 5", cevap: "sol", neden: "Taban 3 > 1: yön aynı, x > 5." },
            { metin: "log_(0,5) x > log_(0,5) 5", cevap: "sag", neden: "Taban 0,5 < 1: yön değişir, 0 < x < 5." },
            { metin: "log_(1/10)(x − 1) < 2", cevap: "sag", neden: "Taban 1/10 < 1: yön değişir." },
            { metin: "ln x < ln 7", cevap: "sol", neden: "Taban e ≈ 2,718 > 1: yön aynı, 0 < x < 7." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Since the base is greater than 1, the logarithmic function is increasing, so the inequality sign stays the same.*", metin: "b > 1 iken." },
            { ikon: "✍️", baslik: "*Since 0 < b < 1, the logarithmic function is decreasing, so the inequality sign is reversed.*", metin: "0 < b < 1 iken." }
          ] }
      ]
    },
    {
      baslik: "Çözüm adımları: tanım kümesi ve yön",
      kisa: "Önce tanım kümesini yaz, sonra eşitsizliği çöz, ikisini kesiştir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⬆️", terim: "Increasing function", tr: "artan fonksiyon", tanim: "x₁ < x₂ iken f(x₁) < f(x₂) olur. Eşitsizliğin yönü fonksiyon uygulanınca korunur.", ornek: "log₂ x, 2^x." },
            { ikon: "⬇️", terim: "Decreasing function", tr: "azalan fonksiyon", tanim: "x₁ < x₂ iken f(x₁) > f(x₂) olur. Fonksiyon uygulanınca yön değişir.", ornek: "log_(1/2) x, (1/2)^x." }
          ] },
        { tip: "adimlar", baslik: "Beş adımda çöz", adimlar: [
            { baslik: "Tanım kümesi", metin: "Her logaritmanın içi pozitif olsun; bu eşitsizlikleri yaz." },
            { baslik: "Tek logaritma", metin: "İki tarafı aynı tabanlı tek logaritma yap. Sayıyı log olarak yaz: 3 = log₂ 8." },
            { baslik: "Tabana bak", metin: "b > 1 ise yön aynı, 0 < b < 1 ise yön ters." },
            { baslik: "İçleri karşılaştır", metin: "Logaritmaları at; içleri uygun yönle karşılaştır ve çöz." },
            { baslik: "Kesiştir", metin: "Çözümü tanım kümesiyle ortak al." }
          ] },
        { tip: "ornek", baslik: "log₂(x − 1) < 3", durum: "Eşitsizliği çöz.",
          adimlar: ["Tanım kümesi: x − 1 > 0, yani x > 1.", "3 = log₂ 8 yazılır; taban 2 > 1 olduğundan yön aynı kalır.", "x − 1 < 8 ⇒ x < 9.", "Kesiştir: x > 1 ve x < 9.", "Kontrol: x = 5 için log₂ 4 = 2 < 3 ; x = 10 için log₂ 9 > 3."],
          sonuc: "1 < x < 9, yani (1, 9). **Sınavda böyle yaz:** *Since the base is greater than 1, the inequality sign stays the same.*" },
        { tip: "tuzak", metin: "Tanım kümesi çözümün bir parçasıdır.", yanlis: "log₂(x − 1) < 3 ⇒ x < 9.", dogru: "Çözüm 1 < x < 9. x = 0 gibi değerler 9'dan küçüktür ama log₂(−1) tanımsızdır." }
      ]
    },
    {
      baslik: "Taban 1'den küçükse yön değişir",
      kisa: "Taban 1'den küçükse eşitsizlik yön değiştirir; tanım kümesi yine geçerli.",
      bloklar: [
        { tip: "tablo", baslik: "Aynı eşitsizlik, iki ayrı taban", head: ["Adım", "b = 2", "b = 1/2"], rows: [
            ["Eşitsizlik", "log₂(x + 1) < log₂(5 − x)", "log_(1/2)(x + 1) < log_(1/2)(5 − x)"],
            ["Tanım kümesi", "−1 < x < 5", "−1 < x < 5"],
            ["Yön", "aynı", "ters"],
            ["İçler", "x + 1 < 5 − x", "x + 1 > 5 − x"],
            ["Çözüm", "x < 2", "x > 2"],
            ["Tanım kümesiyle kesişim", "−1 < x < 2", "2 < x < 5"]
          ], vurgu: 5 },
        { tip: "ornek", baslik: "log_(1/2)(x + 1) < log_(1/2)(5 − x)", durum: "Eşitsizliği çöz.",
          adimlar: ["Tanım kümesi: x + 1 > 0 ve 5 − x > 0 ⇒ −1 < x < 5.", "Taban 1/2 < 1: logaritma azalandır, yön değişir.", "x + 1 > 5 − x ⇒ 2x > 4 ⇒ x > 2.", "Kesiştir: 2 < x < 5.", "Kontrol: x = 3 için log_(1/2) 4 = −2 ve log_(1/2) 2 = −1; −2 < −1 doğru."],
          sonuc: "2 < x < 5. **Sınavda böyle yaz:** *Since 0 < b < 1, the logarithmic function is decreasing, so the inequality sign is reversed.*" },
        { tip: "ornek", baslik: "log_(1/3)(2x − 1) ≥ −1", durum: "Eşitsizliği çöz.",
          adimlar: ["Tanım kümesi: 2x − 1 > 0 ⇒ x > 1/2.", "(1/3)^(−1) = 3 olduğundan −1 = log_(1/3) 3.", "Taban 1/3 < 1: yön değişir: 2x − 1 ≤ 3.", "2x ≤ 4 ⇒ x ≤ 2.", "Kesiştir: 1/2 < x ≤ 2.", "Kontrol: x = 2 için log_(1/3) 3 = −1 ≥ −1 ; x = 1 için 0 ≥ −1 ; x = 3 için log_(1/3) 5 < −1, uygun değil."],
          sonuc: "1/2 < x ≤ 2, yani (1/2, 2]. **Sınavda böyle yaz:** *The solution set is 1/2 < x ≤ 2.*" },
        { tip: "tuzak", metin: "Yön iki ayrı sebeple değişir: taban 1'den küçükse ve negatif sayıyla çarpıp bölünce.", yanlis: "log_(1/2) x > 3 için x > 1/8.", dogru: "Taban 1/2 < 1 olduğundan yön değişir: 0 < x < (1/2)^3 = 1/8. x > 0 koşulu da kalır. Kontrol: x = 1/16 için log_(1/2) x = 4 > 3." }
      ]
    },
    {
      baslik: "Üstel eşitsizlikler ve üstel biçime çevirme",
      kisa: "Üstel eşitsizlikte de tabana bak: b > 1 yönü korur, 0 < b < 1 çevirir.",
      bloklar: [
        { tip: "tablo", baslik: "log_b x ile sayıyı karşılaştır", head: ["Eşitsizlik", "Çözüm", "Neden"], rows: [
            ["log₂ x < 3", "0 < x < 8", "b = 2 > 1: yön aynı, 3 = log₂ 8; x > 0 koşulu da kalır"],
            ["log_(1/2) x < 3", "x > 1/8", "b = 1/2 < 1: yön ters, 3 = log_(1/2)(1/8)"],
            ["log₂ x > 3", "x > 8", "b = 2 > 1: yön aynı"],
            ["log_(1/2) x > 3", "0 < x < 1/8", "b = 1/2 < 1: yön ters; x > 0 koşulu kalır"]
          ] },
        { tip: "ornek", baslik: "Üstel eşitsizlikler", durum: "(a) 3^(2x−1) ≥ 27, (b) (1/2)^x > 8, (c) 2^x > 5 eşitsizliklerini çöz.",
          adimlar: ["(a) 27 = 3^3: 3^(2x−1) ≥ 3^3. Taban 3 > 1, yön aynı: 2x − 1 ≥ 3 ⇒ x ≥ 2.", "(b) 8 = 2^3 ve (1/2)^x = 2^(−x): 2^(−x) > 2^3. Taban 2 > 1, yön aynı: −x > 3.", "−1 ile çarpınca yön değişir: x < −3. Kontrol: x = −4 için (1/2)^(−4) = 16 > 8.", "(b) için başka yol: (1/2)^x > (1/2)^(−3); taban 1/2 < 1 olduğundan yön değişir, x < −3. İki yol aynı sonucu verir.", "(c) 2 üssü 5 tam kuvvet değil: 2^x > 5 ⇒ x > log₂ 5 (taban 2 > 1, yön aynı). log₂ 5 ≈ 2,32."],
          sonuc: "(a) x ≥ 2; (b) x < −3; (c) x > log₂ 5. **Sınavda böyle yaz:** *Since the base is less than 1, the inequality sign is reversed.*" }
      ]
    },
    {
      baslik: "Karma eşitsizlik: ikinci dereceli iç",
      kisa: "Tanım kümesi ve çözüm aralığı ayrı bulunur, sonra kesiştirilir.",
      bloklar: [
        { tip: "ornek", baslik: "log₂(x² − 3x) ≤ 2", durum: "Eşitsizliği çöz.",
          adimlar: ["Tanım kümesi: x² − 3x > 0 ⇒ x(x − 3) > 0 ⇒ x < 0 ya da x > 3.", "2 = log₂ 4; taban 2 > 1, yön aynı: x² − 3x ≤ 4.", "x² − 3x − 4 ≤ 0 ⇒ (x − 4)(x + 1) ≤ 0 ⇒ −1 ≤ x ≤ 4.", "Kesiştir: (x < 0 ya da x > 3) ve (−1 ≤ x ≤ 4).", "Kontrol: x = −1 için x² − 3x = 4, log₂ 4 = 2 ≤ 2 ; x = 1 için −2, tanımsız."],
          sonuc: "−1 ≤ x < 0 ya da 3 < x ≤ 4. **Sınavda böyle yaz:** *The solution set is the intersection of the domain and the solution of the inequality.*" },
        { tip: "grafik", baslik: "0 < x² − 3x ≤ 4 grafikte", xlabel: "x", ylabel: "y", xmax: 7, ymax: 10,
          ogeler: [
            { id: "xax", tip: "cizgi", renk: 0, from: [0, 3], to: [7, 3], etiket: "x" },
            { id: "yax", tip: "cizgi", renk: 0, from: [2, 0], to: [2, 10], etiket: "y" },
            { id: "par", tip: "egri", renk: 1, etiket: "p", noktalar: [[0.5, 9.75], [1, 7], [1.5, 4.75], [2, 3], [2.5, 1.75], [3, 1], [3.5, 0.75], [4, 1], [4.5, 1.75], [5, 3], [5.5, 4.75], [6, 7], [6.5, 9.75]] },
            { id: "d1", tip: "ok", renk: 3, from: [1.95, 2.6], to: [0.2, 2.6], gizli: true },
            { id: "d2", tip: "ok", renk: 3, from: [5.05, 2.6], to: [6.8, 2.6], gizli: true },
            { id: "l4", tip: "cizgi", renk: 2, kesik: true, from: [0, 7], to: [7, 7], gizli: true },
            { id: "l4t", tip: "yazi", x: 3.5, y: 7.4, metin: "y = 4", gizli: true },
            { id: "a", tip: "nokta", renk: 2, x: 1, y: 7, gizli: true },
            { id: "b", tip: "nokta", renk: 2, x: 6, y: 7, gizli: true },
            { id: "s1", tip: "alan", renk: 2, noktalar: [[1, 2.75], [2, 2.75], [2, 3.25], [1, 3.25]], gizli: true },
            { id: "s2", tip: "alan", renk: 2, noktalar: [[5, 2.75], [6, 2.75], [6, 3.25], [5, 3.25]], gizli: true },
            { id: "e1", tip: "yazi", x: 1, y: 1.7, metin: "−1", gizli: true },
            { id: "e2", tip: "yazi", x: 1.75, y: 1.7, metin: "0", gizli: true },
            { id: "e3", tip: "yazi", x: 5.25, y: 1.7, metin: "3", gizli: true },
            { id: "e4", tip: "yazi", x: 6, y: 1.7, metin: "4", gizli: true }
          ],
          durumlar: [
            { metin: "p(x) = x² − 3x parabolü: x = 0 ve x = 3'te x eksenini keser. Aradığımız: ==0 < p(x) ≤ 4==." },
            { metin: "**Tanım kümesi** p(x) > 0: parabol x ekseninin üstünde, yani x < 0 ya da x > 3.", goster: ["d1", "d2", "e2", "e3"] },
            { metin: "**Üst sınır** p(x) ≤ 4: parabol y = 4 doğrusunun altında ya da üzerinde, yani −1 ≤ x ≤ 4.", goster: ["l4", "l4t", "a", "b", "e1", "e4"] },
            { metin: "İkisi birlikte: ==−1 ≤ x < 0== ve ==3 < x ≤ 4==. Kırmızı aralıklar çözüm kümesidir.", goster: ["s1", "s2"] }
          ] },
        { tip: "tuzak", metin: "Çözümü bulup tanım kümesiyle kesiştirmeyi unutma.", yanlis: "x² − 3x ≤ 4 çözülüp −1 ≤ x ≤ 4 yazılır.", dogru: "x² − 3x > 0 koşulu 0 ≤ x ≤ 3 aralığını eler. Çözüm −1 ≤ x < 0 ya da 3 < x ≤ 4. Logun içi 0 olamaz (uç dahil değil), ama x = −1 ve x = 4'te log₂ 4 = 2 olduğundan bu uçlar dahildir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "b > 1 iken log artandır: log_b A > log_b B ⇒ A > B (yön aynı).",
            "0 < b < 1 iken log azalandır: log_b A > log_b B ⇒ A < B (yön ters).",
            "Önce tanım kümesini yaz: her logun içi pozitif. Sonuçta çözümü tanım kümesiyle kesiştir.",
            "Sayıyı log yap: 3 = log₂ 8, −1 = log_(1/3) 3. Sonra içleri karşılaştır.",
            "log_b x < c için: b > 1 ise 0 < x < b^c; 0 < b < 1 ise x > b^c.",
            "Üstel eşitsizlikte de tabana bak: (1/2)^x > 8 ⇒ x < −3. Negatifle çarpınca da yön değişir.",
            "Tam kuvvet değilse logaritmayla yaz: 2^x > 5 ⇒ x > log₂ 5.",
            "Aralığı yaz: log₂(x² − 3x) ≤ 2 için −1 ≤ x < 0 ya da 3 < x ≤ 4. Log içi 0 olamaz, ≤ ile gelen uç dahildir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "(1/3)^x < 9 eşitsizliğinin çözümü hangisidir?",
      opts: ["x < −2", "x > −2", "x > 2", "x < 2"],
      a: 1, why: "9 = 3² ve (1/3)^x = 3^(−x) olduğundan −x < 2, ve −1 ile bölünce yön değişir: x > −2. Kontrol: x = 0 için 1 < 9 doğru. A, yönü değiştirmeyi unutur." },
    { q: "log_(1/2)(x − 1) ≥ 2 eşitsizliğinin çözümü hangisidir?",
      opts: ["1 < x ≤ 5/4", "x ≥ 5/4", "x > 1", "x ≤ 5/4"],
      a: 0, why: "2 = log_(1/2)(1/4). Taban 1/2 < 1 olduğundan yön değişir: 0 < x − 1 ≤ 1/4, yani 1 < x ≤ 5/4. B yönü değiştirmez; D tanım kümesini (x > 1) unutur." },
    { q: "Tablo f(x) = log_(1/2) x fonksiyonunun değerlerini veriyor. f(x) > 1 eşitsizliğinin çözümü hangisidir?",
      fig: { type: "table", head: ["x", "1/4", "1/2", "1", "2", "4"], rows: [["f(x)", "2", "1", "0", "−1", "−2"]], caption: "f(x) = log_(1/2) x" },
      opts: ["x > 1/2", "x < 1/2", "0 < x < 2", "0 < x < 1/2"],
      a: 3, why: "f azalan olduğundan f(x) > 1 değerleri x = 1/2'nin solundadır (f(1/4) = 2 > 1). Tanım kümesi x > 0 olduğundan çözüm 0 < x < 1/2. B, x > 0 koşulunu yazmaz." },
    { q: "Bir öğrenci log_(0,5) x > log_(0,5) 3 eşitsizliğinde \"log'ları atınca x > 3\" buldu. Hatası ve doğru çözüm hangisidir?",
      opts: ["Hata yok; çözüm x > 3.", "Yön değişmeliydi; çözüm x < 3.", "Yön değişmeliydi; çözüm 0 < x < 3.", "Yön doğru; yalnızca x > 0 koşulu eklenmeli."],
      a: 2, why: "Taban 0,5 < 1 olduğundan log azalandır: yön değişir, x < 3; tanım kümesi x > 0 ile kesişince 0 < x < 3. B, tanım kümesini unutur." },
    { q: "log₃(x² − x) < log₃ 6 eşitsizliğinin çözüm kümesi hangisidir?",
      opts: ["−2 < x < 3", "−2 < x < 0 ya da 1 < x < 3", "x < −2 ya da x > 3", "1 < x < 3"],
      a: 1, why: "Tanım kümesi: x² − x > 0 ⇒ x < 0 ya da x > 1. Taban 3 > 1, yön aynı: x² − x < 6 ⇒ (x − 3)(x + 2) < 0 ⇒ −2 < x < 3. Kesişim −2 < x < 0 ya da 1 < x < 3. A, tanım kümesini unutur." }
  ]
};
