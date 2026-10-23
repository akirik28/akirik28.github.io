/* Kitora not defteri · pc504 · 5.4 Üstel ve Logaritmik Denklemler
   Kaynak: okul-10-2025-26.md (Precalculus Unit 5) + MEB 10. sınıf programı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc504",
  amac: "Bu konu *exponential and logarithmic equations* yani üstel ve logaritmik denklemlerin çözümünü anlatıyor. Denklemin türünü tanımayı, logaritma alıp üstel biçime çevirmeyi, yabancı kökleri elemeyi ve değişken değiştirmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Önce denklemin türünü tanı",
      kisa: "Her denklem türünün kendi aracı var; önce türü bul.",
      bloklar: [
        { tip: "tablo", baslik: "Hangi denklem, hangi araç?", head: ["Denklem türü", "Araç", "Sınavda böyle yaz"], rows: [
            ["3·2^(x+1) = 48 (tabanlar eşitlenir)", "Üstel terimi yalnız bırak, tabanı eşitle, üsleri eşitle", "*Since the bases are equal, the exponents are equal.*"],
            ["2^x = 5 (tabanlar eşitlenmez)", "İki tarafın logaritmasını al: x = log 5 ÷ log 2", "*Take the logarithm of both sides.*"],
            ["e^x = 7", "ln al: x = ln 7", "*Take the natural logarithm of both sides.*"],
            ["log₂(x + 3) = 5", "Üstel biçime çevir: x + 3 = 2^5", "*Rewrite in exponential form.*"],
            ["log x + log(x − 3) = 1", "Tek log yap, üstel biçime çevir, kökleri kontrol et", "*Check for extraneous solutions.*"],
            ["4^x − 3·2^x − 4 = 0", "Değişken değiştir: t = 2^x", "*Let t = 2^x and solve the quadratic.*"]
          ] },
        { tip: "ornek", baslik: "Tabanlar eşitlenebiliyorsa", durum: "3·2^(x+1) = 48 denklemini çöz.",
          adimlar: ["Üstel terimi yalnız bırak: 2^(x+1) = 48 ÷ 3 = 16.", "16 = 2^4 olduğundan 2^(x+1) = 2^4.", "Tabanlar eşit: x + 1 = 4.", "x = 3.", "Kontrol: 3·2^4 = 3·16 = 48."],
          sonuc: "x = 3. **Sınavda böyle yaz:** *Isolate the exponential term first.*" }
      ]
    },
    {
      baslik: "Tabanlar eşitlenmiyorsa: logaritma al",
      kisa: "a^x = c ise x = log_a c = log c ÷ log a.",
      bloklar: [
        { tip: "grafik", baslik: "2^x = 5 denklemi grafikte", xlabel: "x", ylabel: "y", xmax: 4, ymax: 9,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 1, etiket: "2^x", noktalar: [[0, 1], [0.5, 1.414], [1, 2], [1.5, 2.828], [2, 4], [2.5, 5.657], [3, 8], [3.1, 8.574]] },
            { id: "l", tip: "cizgi", renk: 2, kesik: true, from: [0, 5], to: [4, 5], gizli: true },
            { id: "lt", tip: "yazi", x: 0.25, y: 5.5, metin: "y = 5", hiza: "start", gizli: true },
            { id: "p2", tip: "nokta", renk: 0, x: 2, y: 4, kilavuz: true, gizli: true },
            { id: "p3", tip: "nokta", renk: 0, x: 3, y: 8, kilavuz: true, gizli: true },
            { id: "ip", tip: "nokta", renk: 3, x: 2.322, y: 5, kilavuz: true, gizli: true },
            { id: "ipt", tip: "yazi", x: 2.45, y: 4.1, metin: "x = log₂ 5", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Çözmek istediğimiz denklem: **2^x = 5**. 2^x eğrisi ile y = 5 doğrusunun nerede kesiştiğini arıyoruz.", goster: ["l", "lt"] },
            { metin: "2² = 4 ve 2³ = 8 olduğundan, 5 bunların arasında: çözüm ==2 ile 3 arasında==.", goster: ["p2", "p3"] },
            { metin: "5, 2'nin tam kuvveti olmadığından tabanları eşitleyemeyiz. Çözüm ==x = log₂ 5== olarak yazılır.", goster: ["ip", "ipt"] },
            { metin: "Sayıya çevir: x = log 5 ÷ log 2 ≈ 0,69897 ÷ 0,30103 ≈ 2,32. Gerçekten 2 ile 3 arasında." }
          ] },
        { tip: "formul", parcalar: [
            { t: "2^x = 5" }, "⇒",
            { t: "x·log 2 = log 5" }, "⇒",
            { t: "x = log 5 ÷ log 2", alt: "= log₂ 5" }
          ], aciklama: "Genel kural: a^x = c ise x = log_a c. Üstteki x'i aşağı indirmek için iki tarafın logaritmasını alıp kuvvet kuralını kullan." },
        { tip: "ornek", baslik: "3^x = 10", durum: "log 3 = 0,4771 verilsin. 3^x = 10 denklemini çöz.",
          adimlar: ["İki tarafın onluk logaritmasını al: log(3^x) = log 10.", "Kuvvet kuralı: x·log 3 = 1.", "x = 1 ÷ log 3 = 1 ÷ 0,4771.", "1 ÷ 0,4771 ≈ 2,096 ≈ 2,1.", "Kontrol: 3² = 9 ve 3³ = 27; 10, 9'a yakın olduğundan x ≈ 2,1 mantıklı."],
          sonuc: "x = log₃ 10 = 1 ÷ log 3 ≈ 2,1. **Sınavda böyle yaz:** *Take the logarithm of both sides and use the power rule.*" },
        { tip: "tuzak", metin: "Bölme, logaritmanın içinde değil, iki logaritmanın arasındadır.", yanlis: "2^x = 5 ise x = log(5 ÷ 2).", dogru: "x·log 2 = log 5 olduğundan x = log 5 ÷ log 2. log(5 ÷ 2) = log 5 − log 2 başka bir sayıdır." }
      ]
    },
    {
      baslik: "Logaritmik denklem: üstel biçime çevir, kökü kontrol et",
      kisa: "log_b A = c ise A = b^c; kökleri tanım kümesinde kontrol et.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "1️⃣", terim: "One-to-one property", tr: "birebirlik özelliği", tanim: "log_b A = log_b B ise A = B olur. İki tarafta aynı tabanlı birer log varsa içleri eşitlenir.", ornek: "log₅(2x − 1) = log₅ 9 ise 2x − 1 = 9." },
            { ikon: "🚫", terim: "Extraneous solution", tr: "yabancı kök", tanim: "Cebirsel adımlardan çıkan ama ilk denklemin tanım kümesine uymayan değer; çözüm sayılmaz.", ornek: "log(x − 3) içeren denklemde x = −2 olamaz." }
          ] },
        { tip: "tablo", baslik: "İki ana yöntem", head: ["Durum", "Yapılacak", "Örnek"], rows: [
            ["Tek log = sayı", "Üstel biçime çevir", "log₂(x + 3) = 5 ⇒ x + 3 = 2^5 = 32 ⇒ x = 29"],
            ["İki tarafta aynı tabanlı log", "İçleri eşitle", "log₅(2x − 1) = log₅ 9 ⇒ 2x − 1 = 9 ⇒ x = 5"],
            ["Toplam ya da fark var", "Önce tek log yap", "log x + log(x − 3) = 1 ⇒ log[x(x − 3)] = 1"],
            ["ln var", "Tabanı e olan üstel biçim", "ln x = 2 ⇒ x = e^2"]
          ] },
        { tip: "ornek", baslik: "log x + log(x − 3) = 1", durum: "Denklemi çöz ve kökleri kontrol et.",
          adimlar: ["Tanım kümesi: x > 0 ve x − 3 > 0, yani x > 3.", "Birleştir: log[x(x − 3)] = 1.", "Üstel biçim (taban 10): x(x − 3) = 10^1 = 10.", "x² − 3x − 10 = 0 ⇒ (x − 5)(x + 2) = 0 ⇒ x = 5 ya da x = −2.", "x = −2, x > 3 koşuluna uymaz: elenir.", "Kontrol: log 5 + log 2 = log 10 = 1."],
          sonuc: "x = 5. **Sınavda böyle yaz:** *x = −2 is an extraneous solution because it is not in the domain.*" },
        { tip: "tuzak", metin: "Her kökü ilk denklemde dene.", yanlis: "log₃(x − 1) + log₃(x + 1) = 1 denkleminin çözümü x = 2 ve x = −2.", dogru: "log₃(x² − 1) = 1 ⇒ x² − 1 = 3 ⇒ x = ±2. x = −2'de x − 1 < 0 olur ve log tanımsızdır; tek çözüm x = 2 (kontrol: log₃ 1 + log₃ 3 = 0 + 1 = 1)." }
      ]
    },
    {
      baslik: "Değişken değiştirme",
      kisa: "Denklem ikinci derece gibi görünüyorsa t = 2^x (ya da t = log x) de.",
      bloklar: [
        { tip: "adimlar", baslik: "Dört adımda değişken değiştirme", adimlar: [
            { baslik: "Fark et", metin: "Üstel (ya da log) ifadenin kendisi ve karesi birlikte görünür: 4^x = (2^x)²." },
            { baslik: "Yeni değişken", metin: "t = 2^x (ya da t = e^x, t = log x) yaz; denklem t cinsinden ikinci derece olur." },
            { baslik: "t'yi çöz ve kontrol et", metin: "Çarpanlara ayır. Üstel ifade pozitif olmak zorundadır: t > 0 olmalı." },
            { baslik: "x'e dön", metin: "Geçerli her t için 2^x = t ya da log x = t denklemini çöz." }
          ] },
        { tip: "ornek", baslik: "4^x − 3·2^x − 4 = 0", durum: "Denklemi çöz.",
          adimlar: ["4^x = (2^x)² olduğundan t = 2^x yaz: t² − 3t − 4 = 0.", "(t − 4)(t + 1) = 0 ⇒ t = 4 ya da t = −1.", "2^x her zaman pozitif olduğundan t = −1 elenir.", "2^x = 4 = 2² ⇒ x = 2.", "Kontrol: 4² − 3·2² − 4 = 16 − 12 − 4 = 0."],
          sonuc: "x = 2. **Sınavda böyle yaz:** *Let t = 2^x. Then the equation becomes t² − 3t − 4 = 0.*" },
        { tip: "ornek", baslik: "(log x)² − 3 log x + 2 = 0", durum: "Denklemi çöz.",
          adimlar: ["t = log x yaz: t² − 3t + 2 = 0.", "(t − 1)(t − 2) = 0 ⇒ t = 1 ya da t = 2.", "log x = 1 ⇒ x = 10; log x = 2 ⇒ x = 100.", "Kontrol: x = 10 için 1 − 3 + 2 = 0; x = 100 için 4 − 6 + 2 = 0."],
          sonuc: "x = 10 ya da x = 100. **Sınavda böyle yaz:** *Substitute t = log x.*" },
        { tip: "tuzak", metin: "Üstel ifade negatif olamaz, ama logaritma negatif olabilir.", yanlis: "t = −1 bulununca 2^x = −1 çözülmeye çalışılır.", dogru: "2^x > 0 olduğundan t = −1 elenir. t = log x ise negatif değer geçerlidir: log x = −1 ⇒ x = 1/10, ve 1/10 > 0'dır." }
      ]
    },
    {
      baslik: "Farklı tabanlı logaritmalar: tek tabana in",
      kisa: "Tabanı değiştir: log_x 2 = 1 ÷ log₂ x ve log₄ x = (log₂ x) ÷ 2.",
      bloklar: [
        { tip: "ornek", baslik: "log₂ x = log_x 2", durum: "Denklemi çöz (x > 0 ve x ≠ 1).",
          adimlar: ["t = log₂ x yaz. Taban değiştirme: log_x 2 = 1 ÷ log₂ x = 1/t.", "Denklem t = 1/t olur: t² = 1, yani t = 1 ya da t = −1.", "log₂ x = 1 ⇒ x = 2; log₂ x = −1 ⇒ x = 1/2.", "Kontrol: x = 1/2 için log₂(1/2) = −1 ve log_(1/2) 2 = −1."],
          sonuc: "x = ==2== ya da x = ==1/2==. **Sınavda böyle yaz:** *Change the base so that every logarithm has the same base.*" },
        { tip: "ornek", baslik: "log₄ x + log₂ x = 3", durum: "Denklemi çöz.",
          adimlar: ["log₄ x = log₂ x ÷ log₂ 4 = (1/2) log₂ x.", "(1/2) log₂ x + log₂ x = (3/2) log₂ x = 3.", "log₂ x = 2 ⇒ x = 4.", "Kontrol: log₄ 4 + log₂ 4 = 1 + 2 = 3."],
          sonuc: "x = ==4==. **Sınavda böyle yaz:** *Write both logarithms in base 2 and add them.*" }
      ]
    },
    {
      baslik: "Uygulama: süre bulma",
      kisa: "Süre bulurken üstel terimi yalnız bırak, sonra logaritma al.",
      bloklar: [
        { tip: "ornek", baslik: "Söylenti hızla yayılıyor", durum: "Bir videoyu başta 2 kişi izliyor ve izleyenler her saat 3 katına çıkıyor: N(t) = 2·3^t. Kaç saatte 108 kişi olur? (log 2 = 0,30103; log 3 = 0,4771)",
          adimlar: ["2·3^t = 108 ⇒ 3^t = 54.", "54 = 2·3³ olduğundan log 54 = log 2 + 3 log 3.", "İki tarafın logu: t·log 3 = log 2 + 3 log 3.", "t = (0,30103 + 3·0,4771) ÷ 0,4771 = (0,30103 + 1,4313) ÷ 0,4771.", "1,73233 ÷ 0,4771 ≈ 3,63."],
          sonuc: "t = 3 + log 2 ÷ log 3 ≈ 3,63 saat. **Sınavda böyle yaz:** *The number of viewers reaches 108 after about 3.63 hours.*" },
        { tip: "ornek", baslik: "Sürekli faizle iki katına çıkma", durum: "2000 TL, yıllık %5 sürekli bileşik faizle yatırılıyor: A(t) = 2000·e^(0,05t). Kaç yılda 4000 TL olur?",
          adimlar: ["2000·e^(0,05t) = 4000 ⇒ e^(0,05t) = 2.", "Doğal logaritma al: 0,05t = ln 2.", "t = ln 2 ÷ 0,05 = 20 ln 2.", "ln 2 ≈ 0,693 alınırsa t ≈ 20·0,693 = 13,9."],
          sonuc: "t = 20 ln 2 ≈ 13,9 yıl. **Sınavda böyle yaz:** *It takes about 13.9 years for the investment to double.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Önce üstel terimi yalnız bırak; sonra tabanlar eşitleniyorsa üsleri eşitle.",
            "Tabanlar eşitlenmiyorsa iki tarafın logaritmasını al: a^x = c ise x = log c ÷ log a = log_a c.",
            "e^x = c ise x = ln c. Bölme iki logaritmanın arasındadır: log(5 ÷ 2) ile log 5 ÷ log 2 farklıdır.",
            "log_b A = c ise A = b^c. log_b A = log_b B ise A = B (*one-to-one property*).",
            "Toplam ya da fark varsa önce tek logaritma yap; sonra üstel biçime çevir.",
            "Her logaritmik denklemde kökü tanım kümesinde kontrol et; uymayan kök *extraneous solution* olur.",
            "Değişken değiştirme: 4^x − 3·2^x − 4 = 0 için t = 2^x. Üstel ifade pozitiftir, t = −1 elenir.",
            "Hesap makinesi yok: log 2 = 0,30103 ve log 3 = 0,4771 ile 54 = 2·3³ gibi çarpanlara ayır. Farklı tabanlarda önce tek tabana in."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "What is the solution of the equation e^(2x) = 7?",
      opts: ["x = 2 ln 7", "x = ln 7 − 2", "x = (ln 7) ÷ 2", "x = ln(7 ÷ 2)"],
      a: 2, why: "Doğal logaritma al: 2x = ln 7, x = (ln 7) ÷ 2. A, bölmek yerine çarpar; D ise ln'in içinde bölme yapar ve ln 7 − ln 2'yi verir." },
    { q: "What is the solution set of 4^x − 6·2^x + 8 = 0?",
      opts: ["x = 2 or x = 4", "x = 1 or x = 2", "x = 1", "x = 2"],
      a: 1, why: "t = 2^x: t² − 6t + 8 = 0 ⇒ (t − 2)(t − 4) = 0 ⇒ t = 2 ya da 4. Sonra 2^x = 2 ise x = 1, 2^x = 4 ise x = 2. A, t değerlerini x sanar; C ve D ise bir kökü atlar." },
    { q: "What is the solution of log₂ x + log₂(x − 2) = 3?",
      opts: ["x = −2 or x = 4", "x = 8", "x = 2", "x = 4"],
      a: 3, why: "Tek log: log₂[x(x − 2)] = 3 ⇒ x² − 2x = 8 ⇒ (x − 4)(x + 2) = 0. Tanım kümesi x > 2 olduğundan x = −2 yabancı köktür; x = 4 (kontrol: 2 + 1 = 3)." },
    { q: "The table shows values of 2^x. Which statement about the solution of 2^x = 5 is correct?",
      fig: { type: "table", head: ["x", "2^x"], rows: [["1", "2"], ["2", "4"], ["3", "8"], ["4", "16"]], caption: "Values of 2^x" },
      opts: ["It lies between 2 and 3; x = log₂ 5", "It lies between 1 and 2; x = log₂ 5", "It lies between 2 and 3; x = 5 ÷ 2", "It lies between 3 and 4; x = log₂ 5"],
      a: 0, why: "4 < 5 < 8 olduğundan 2² < 2^x < 2³, yani 2 < x < 3. Tam değer x = log₂ 5. C, aralığı doğru söyler ama çözümü yanlış (5 ÷ 2) yazar." },
    { q: "A rumor is known by 5 people at the start and the number of people who know it triples every hour: N(t) = 5·3^t. Using the table, at about what time t does N reach 270?",
      fig: { type: "table", head: ["log 2", "log 3"], rows: [["0.30103", "0.4771"]], caption: "Given values" },
      opts: ["1.73 h", "3.63 h", "0.28 h", "18 h"],
      a: 1, why: "5·3^t = 270 ⇒ 3^t = 54 = 2·3³. t = log 54 ÷ log 3 = (0,30103 + 1,4313) ÷ 0,4771 ≈ 3,63. A, log 54'ü log 3'e bölmeyi unutur (payı 1,73); C oranı ters çevirir; D, 54 ÷ 3 yapar." }
  ]
};
