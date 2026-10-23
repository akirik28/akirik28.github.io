/* Kitora not defteri · pc502 · 5.2 Logaritma ve Özellikleri
   Kaynak: okul-10-2025-26.md (Precalculus Unit 5) + MEB 10. sınıf programı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc502",
  amac: "Bu konu *logarithm* yani logaritmayı anlatıyor: logaritma, üssün adıdır. Üstel ve logaritmik biçim arasında geçmeyi, çarpım, bölüm, kuvvet kurallarını, taban değiştirmeyi ve log 2 ile log 3 değerleriyle hesap makinesiz hesabı öğreneceksin.",
  bolumler: [
    {
      baslik: "Logaritma: üssü soran işlem",
      kisa: "log_a x = y demek a^y = x demektir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "log_a x = y", alt: "a kaç üssü x eder?" }, "⇔",
            { t: "a^y = x", alt: "a > 0, a ≠ 1, x > 0" }
          ], aciklama: "Logaritma, üssün adıdır: sonuç bir üs. Sınavda böyle yaz: *Rewrite in exponential form.* ya da *Write in logarithmic form.*" },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔑", terim: "Logarithm", tr: "logaritma", tanim: "log_a x, a tabanını x yapmak için gereken üstür.", ornek: "log₂ 8 = 3, çünkü 2^3 = 8." },
            { ikon: "🔟", terim: "Common logarithm", tr: "onluk logaritma", tanim: "Taban yazılmayan log, taban 10 demektir: log x = log₁₀ x.", ornek: "log 1000 = 3, çünkü 10^3 = 1000." },
            { ikon: "🌱", terim: "Natural logarithm", tr: "doğal logaritma", tanim: "Tabanı e ≈ 2,718 olan logaritma: ln x = log_e x.", ornek: "ln e^2 = 2." }
          ] },
        { tip: "ikili", sol: { ikon: "⬆️", baslik: "Üstel biçim", maddeler: ["Üs yazılıdır: a^y = x", "Örnek: 2^5 = 32"] },
          sag: { ikon: "🔑", baslik: "Logaritmik biçim", maddeler: ["Üs sonuçtur: log_a x = y", "Örnek: log₂ 32 = 5"] },
          oyun: [
            { metin: "5^2 = 25", cevap: "sol", neden: "Üs yazılı: üstel biçim." },
            { metin: "log₂ 8 = 3", cevap: "sag", neden: "Üs sonuç olarak yazılmış: logaritmik biçim." },
            { metin: "3^(−2) = 1/9", cevap: "sol", neden: "Üstel biçim; logaritmik hâli log₃(1/9) = −2." },
            { metin: "log 1000 = 3", cevap: "sag", neden: "Taban yazılmamış, 10'dur: logaritmik biçim (10^3 = 1000)." }
          ] }
      ]
    },
    {
      baslik: "Hesap makinesiz hesap ve özel değerler",
      kisa: "Tabanı kaç üslü yaparsan sayı olur diye sor; log_a 1 = 0, log_a a = 1.",
      bloklar: [
        { tip: "tablo", baslik: "Her sınavda işine yarayacak değerler", head: ["Özellik", "Neden?", "Örnek"], rows: [
            ["log_a 1 = 0", "a^0 = 1", "log₇ 1 = 0 ve ln 1 = 0"],
            ["log_a a = 1", "a^1 = a", "log₅ 5 = 1, log 10 = 1, ln e = 1"],
            ["log_a (a^x) = x", "log ile üs birbirini geri alır", "log₂ 2^7 = 7 ve ln e^3 = 3"],
            ["a^(log_a x) = x", "aynı sebep", "3^(log₃ 5) = 5 ve e^(ln 4) = 4"]
          ] },
        { tip: "ornek", baslik: "Hesap makinesi olmadan hesapla", durum: "log₂ 32, log₃(1/9), log₁₆ 4 ve log 0,001 değerlerini bul.",
          adimlar: ["log₂ 32: 2^? = 32. 2^5 = 32 olduğundan 5.", "log₃(1/9): 3^? = 1/9 = 3^(−2). Sonuç −2.", "log₁₆ 4: 16^? = 4. 16^(1/2) = 4 olduğundan 1/2.", "log 0,001: taban 10; 10^? = 1/1000 = 10^(−3). Sonuç −3."],
          sonuc: "5, −2, 1/2 ve −3. **Sınavda böyle yaz:** *Evaluate without a calculator: log₂ 32 = 5 because 2^5 = 32.*" },
        { tip: "tuzak", metin: "Logaritmanın içi pozitif olmak zorundadır; çünkü b^y hiçbir zaman 0 ya da negatif olmaz.", yanlis: "log₂ 0 = 0 ve log₂(−4) = −2.", dogru: "log₂ 0 ve log₂(−4) tanımsızdır. Sıfır eden değer log_a 1'dir: log_a 1 = 0." }
      ]
    },
    {
      baslik: "Üç temel özellik: çarpım, bölüm, kuvvet",
      kisa: "Çarpım toplam, bölüm fark, kuvvet çarpan olur.",
      bloklar: [
        { tip: "tablo", baslik: "Logaritma kuralları", head: ["Kural", "Formül ve örnek", "Sınavda böyle yaz"], rows: [
            ["Çarpım (*product rule*)", "log_a(MN) = log_a M + log_a N · log₂(8·4) = 3 + 2 = 5", "*Use the product rule to write the log of a product as a sum.*"],
            ["Bölüm (*quotient rule*)", "log_a(M/N) = log_a M − log_a N · log₃(81/9) = 4 − 2 = 2", "*Use the quotient rule to write the log of a quotient as a difference.*"],
            ["Kuvvet (*power rule*)", "log_a(M^r) = r·log_a M · log₅ 25^3 = 3·2 = 6", "*Use the power rule to bring the exponent to the front.*"]
          ] },
        { tip: "adimlar", baslik: "Çarpım kuralı neden doğru?", adimlar: [
            { baslik: "Üs olarak yaz", metin: "M = a^m ve N = a^n olsun; yani log_a M = m ve log_a N = n." },
            { baslik: "Çarp", metin: "Üsler toplanır: MN = a^m · a^n = a^(m+n)." },
            { baslik: "Logaritmaya çevir", metin: "log_a(MN) = m + n = log_a M + log_a N." }
          ] },
        { tip: "grafik", baslik: "Kurallar y = log₂ x grafiğinde", xlabel: "x", ylabel: "y", xmax: 9, ymax: 4,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 8, label: "8" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 1, etiket: "log₂ x", gizli: true, noktalar: [[1, 0], [1.25, 0.322], [1.5, 0.585], [2, 1], [2.5, 1.322], [3, 1.585], [4, 2], [5, 2.322], [6, 2.585], [8, 3]] },
            { id: "pa", tip: "nokta", renk: 0, x: 2, y: 1, kilavuz: true, gizli: true },
            { id: "pb", tip: "nokta", renk: 0, x: 4, y: 2, kilavuz: true, gizli: true },
            { id: "pc", tip: "nokta", renk: 2, x: 8, y: 3, kilavuz: true, gizli: true },
            { id: "bol", tip: "ok", renk: 3, from: [7.6, 2.85], to: [4.4, 2.1], gizli: true },
            { id: "kuv", tip: "ok", renk: 3, from: [2.3, 1.1], to: [7.6, 2.85], gizli: true }
          ],
          durumlar: [
            { metin: "y = log₂ x eğrisi (x ≥ 1 parçası). 2'nin kuvvetlerinde yüksekliği kolay okunur.", goster: ["c"] },
            { metin: "x = 2 ve x = 4 noktaları: yükseklikler log₂ 2 = 1 ve log₂ 4 = 2.", goster: ["pa", "pb"] },
            { metin: "**Çarpım:** 2·4 = 8 ve yükseklik 1 + 2 = 3. x ekseninde çarpma, y ekseninde toplama olur: log₂(2·4) = log₂ 2 + log₂ 4.", goster: ["pc"] },
            { metin: "**Bölüm:** 8 ÷ 2 = 4 ve yükseklik 3 − 1 = 2. Bölme, yükseklikte çıkarmadır: log₂(8/2) = log₂ 8 − log₂ 2.", goster: ["bol"] },
            { metin: "**Kuvvet:** 2^3 = 8 ve yükseklik 3·1 = 3. Üs çarpan olur: log₂ 2^3 = 3·log₂ 2.", gizle: ["bol"], goster: ["kuv"] }
          ] },
        { tip: "tuzak", metin: "Kurallar yalnızca çarpım, bölüm ve kuvvet içindir; toplamın ve farkın logaritması için sadeleştirme yoktur.", yanlis: "log(x + y) = log x + log y ve log x ÷ log y = log(x ÷ y).", dogru: "log(xy) = log x + log y. log x ÷ log y bölüm kuralı değil, taban değiştirmedir: log x ÷ log y = log_y x." }
      ]
    },
    {
      baslik: "Açma ve tek logaritma yapma",
      kisa: "Açarken parçala; birleştirirken önce katsayıyı üs yap.",
      bloklar: [
        { tip: "ornek", baslik: "Logaritmayı aç", durum: "log₂(8x³ ÷ y) ifadesini aç (x, y > 0).",
          adimlar: ["Bölüm kuralı: log₂(8x³) − log₂ y.", "Çarpım kuralı: log₂ 8 + log₂ x³ − log₂ y.", "Kuvvet kuralı: log₂ 8 + 3 log₂ x − log₂ y.", "log₂ 8 = 3 olduğundan sayıyı hesapla."],
          sonuc: "3 + 3 log₂ x − log₂ y. **Sınavda böyle yaz:** *Expand the expression using the properties of logarithms.*" },
        { tip: "ornek", baslik: "Tek logaritma yap", durum: "3 log₂ x + log₂ 5 − 2 log₂ y ifadesini tek logaritma olarak yaz (x, y > 0).",
          adimlar: ["Önce katsayıları üs yap: log₂ x³ + log₂ 5 − log₂ y².", "Toplamı çarpıma çevir: log₂(5x³) − log₂ y².", "Farkı bölüme çevir: log₂(5x³ ÷ y²)."],
          sonuc: "log₂(5x³ ÷ y²). **Sınavda böyle yaz:** *Write the expression as a single logarithm.*" },
        { tip: "tuzak", metin: "Kuralları uygulamak tanım kümesini değiştirebilir.", yanlis: "log(x²) = 2 log x her x için doğrudur.", dogru: "Yalnızca x > 0 iken doğrudur. x = −10 için log(x²) = log 100 = 2, ama 2 log(−10) tanımsızdır. Genel olarak log(x²) = 2 log |x|." }
      ]
    },
    {
      baslik: "Taban değiştirme",
      kisa: "log_b x = log x ÷ log b; istediğin tabana geçebilirsin.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "log_b x" }, "=",
            { t: "log_a x ÷ log_a b", alt: "a: seçtiğin yeni taban (a, b ≠ 1)" }
          ], aciklama: "En çok kullanılan hâlleri: log_b x = log x ÷ log b = ln x ÷ ln b ve log_b a = 1 ÷ log_a b. Tabanda ve içte üs varsa log_(a^n)(b^m) = (m/n)·log_a b; örnek: log₈ 16 = log_(2³)(2⁴) = 4/3. Sınavda böyle yaz: *Use the change of base formula.*" },
        { tip: "ornek", baslik: "Ortak tabana geç", durum: "Hesap makinesi olmadan log₄ 8 ve log₈ 4 değerlerini bul.",
          adimlar: ["Ortak taban 2: log₄ 8 = log₂ 8 ÷ log₂ 4.", "log₂ 8 = 3 ve log₂ 4 = 2 olduğundan log₄ 8 = 3/2.", "log₈ 4 = log₂ 4 ÷ log₂ 8 = 2/3.", "İkisi birbirinin çarpmaya göre tersidir: log_b a · log_a b = 1."],
          sonuc: "log₄ 8 = 3/2 ve log₈ 4 = 2/3. **Sınavda böyle yaz:** *By the change of base formula, log₄ 8 = log₂ 8 / log₂ 4 = 3/2.*" },
        { tip: "tuzak", metin: "Bölen tabanın kendisi değil, tabanın logaritmasıdır.", yanlis: "log₂ 3 = log 3 ÷ 2.", dogru: "log₂ 3 = log 3 ÷ log 2." }
      ]
    },
    {
      baslik: "log 2 ve log 3 ile hesap",
      kisa: "Sayıyı 2, 3 ve 10'un çarpanlarına ayır; kuralları uygula.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { onek: "≈ ", deger: "0,30103", etiket: "log 2" },
            { onek: "≈ ", deger: "0,4771", etiket: "log 3" },
            { deger: "1", etiket: "log 10" }
          ] },
        { tip: "tablo", baslik: "Sayıyı parçala, kuralı uygula", head: ["Sayı", "Parçalama", "log değeri"], rows: [
            ["6", "2·3", "0,30103 + 0,4771 = 0,77813"],
            ["8", "2^3", "3·0,30103 = 0,90309"],
            ["12", "2²·3", "2·0,30103 + 0,4771 = 1,07916"],
            ["5", "10 ÷ 2", "1 − 0,30103 = 0,69897"],
            ["1/5", "2 ÷ 10", "0,30103 − 1 = −0,69897"],
            ["30", "3·10", "0,4771 + 1 = 1,4771"],
            ["18", "2·3²", "0,30103 + 2·0,4771 = 1,25523"]
          ] },
        { tip: "ornek", baslik: "Üç ayrı hesap", durum: "log 2 = 0,30103 ve log 3 = 0,4771 verilsin. (a) log 45, (b) log₃ 2, (c) ek bilgi: 2^20 kaç basamaklıdır?",
          adimlar: ["(a) 45 = 9·10 ÷ 2: log 45 = 2·0,4771 + 1 − 0,30103 = 0,9542 + 1 − 0,30103 = 1,65317.", "(b) Taban değiştir: log₃ 2 = log 2 ÷ log 3 = 0,30103 ÷ 0,4771 ≈ 0,631.", "(c) log(2^20) = 20·0,30103 = 6,0206.", "Logaritmanın tam kısmı + 1 basamak sayısıdır: 6 + 1 = 7."],
          sonuc: "log 45 ≈ 1,65317; log₃ 2 ≈ 0,631; 2^20 yedi basamaklıdır (1 048 576). **Sınavda böyle yaz:** *Given that log 2 = 0.30103 and log 3 = 0.4771, find log 45.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "log_a x = y ⇔ a^y = x. Koşullar: a > 0, a ≠ 1, x > 0. Logaritma bir üstür.",
            "log x = log₁₀ x (*common logarithm*), ln x = log_e x (*natural logarithm*).",
            "log_a 1 = 0, log_a a = 1, log_a(a^x) = x, a^(log_a x) = x (ve e^(ln x) = x). log 0 ve negatif sayının logu tanımsızdır.",
            "*Product rule*: log_a(MN) = log_a M + log_a N. *Quotient rule*: log_a(M/N) = log_a M − log_a N.",
            "*Power rule*: log_a(M^r) = r·log_a M. Toplamın logaritması için sadeleştirme yoktur.",
            "Tek logaritma yaparken önce katsayıyı üs yap, sonra topla-çıkar kurallarını uygula.",
            "*Change of base*: log_b x = log_a x ÷ log_a b; log_b a = log a ÷ log b = ln a ÷ ln b = 1 ÷ log_a b.",
            "Sınavda hesap makinesi yok: log 2 = 0,30103 ve log 3 = 0,4771 ile sayıyı 2, 3 ve 10 çarpanlarına ayır; log 5 = 1 − log 2."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "What is the value of log₉ 27?",
      opts: ["2/3", "3/2", "3", "1/3"],
      a: 1, why: "9^y = 27 ise 3^(2y) = 3^3 olur, 2y = 3 ve y = 3/2. Taban değiştirmeyle de log₃ 27 ÷ log₃ 9 = 3/2. A seçeneği log₂₇ 9 değeridir; sıra tersine çevrilmiştir." },
    { q: "For x > 0, which single logarithm is equal to 2 log₃ x + log₃ 4 − log₃ 2?",
      opts: ["log₃(2x²)", "log₃(x² ÷ 2)", "log₃(x² + 2)", "log₃(8x²)"],
      a: 0, why: "2 log₃ x = log₃ x²; toplam çarpıma, fark bölüme dönüşür: log₃(x²·4 ÷ 2) = log₃(2x²). D seçeneği 4 ile 2'yi bölmek yerine çarpar." },
    { q: "Given the values in the table, what is log 18?",
      fig: { type: "table", head: ["log 2", "log 3"], rows: [["0.30103", "0.4771"]], caption: "Given values" },
      opts: ["0.77813", "1.07916", "1.43130", "1.25523"],
      a: 3, why: "18 = 2·3², log 18 = 0,30103 + 2·0,4771 = 1,25523. A, log 6'nın; B, log 12'nin; C ise log 27'nin değeridir." },
    { q: "Given the values in the table, what is log₂ 3 (to three decimal places)?",
      fig: { type: "table", head: ["log 2", "log 3"], rows: [["0.30103", "0.4771"]], caption: "Given values" },
      opts: ["0.778", "0.631", "1.585", "0.176"],
      a: 2, why: "Taban değiştirme: log₂ 3 = log 3 ÷ log 2 = 0,4771 ÷ 0,30103 ≈ 1,585. B seçeneği log₃ 2'dir (oran ters çevrilmiş); A toplamı, D farkı alır ve kural dışıdır." },
    { q: "Which equation is true?",
      opts: ["log 7 + log 3 = log 10", "log 50 − log 5 = 1", "log 8 ÷ log 2 = log 4", "log₂(−4) = −2"],
      a: 1, why: "log 50 − log 5 = log(50 ÷ 5) = log 10 = 1. A'da toplam çarpıma dönüşür: log 7 + log 3 = log 21. C'de bölüm kuralı değil taban değiştirme vardır: log 8 ÷ log 2 = 3. D tanımsızdır." }
  ]
};
