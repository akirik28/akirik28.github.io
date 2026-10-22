/* Kitora not defteri · st109 · 1D-5 Veriyi Dönüştürmek
   Kaynak: ap-videolar/src/episodes/st109 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st109",
  ozet: "Bir verideki her değere aynı işlemi uygulayınca (*transforming data*) neyin oynadığını, neyin sabit kaldığını öğreneceksin. Sabit ekleyince merkez ve konum kayar, yayılım ve *shape* sabit kalır; sabitle çarpınca merkez de yayılım da çarpılır, *shape* yine aynı kalır. Bu kuralları birim değiştirirken (°C → °F), geri çözerken (taksi ücreti) ve *z-score*'a çevirirken (mean 0, SD 1) kullanacaksın.",
  bolumler: [
    {
      baslik: "Herkese 5 puan",
      bloklar: [
        { tip: "hikaye", ikon: "➕", baslik: "Öğretmen acıdı",
          metin: "Sınav kötü geçti; öğretmen acıdı ve herkese 5 puan ekledi. Sınıf ortalaması yükselir, belli. Peki sınıfın en yükseğiyle en düşüğü arasındaki fark ne olur? Açılır mı, kapanır mı? Ya öğretmen puan eklemek yerine herkesin puanını ikiyle çarpsaydı? Bugün, veriyi topluca değiştirince neyin oynadığını, neyin sabit kaldığını göreceğiz." },
        { tip: "grafik", baslik: "Beş arkadaşın quiz puanı: önce +5, sonra ×2", xlabel: "Puan", ylabel: "", xmax: 8, ymax: 4,
          xticks: [{ v: 0, label: "20" }, { v: 2, label: "40" }, { v: 4, label: "60" }, { v: 6, label: "80" }, { v: 8, label: "100" }],
          ogeler: [
            { id: "p1", tip: "nokta", x: 0.8, y: 1 }, { id: "p2", tip: "nokta", x: 1.4, y: 1 }, { id: "p3", tip: "nokta", x: 1.5, y: 1.3 },
            { id: "p4", tip: "nokta", x: 1.6, y: 1 }, { id: "p5", tip: "nokta", x: 2.2, y: 1 },
            { id: "mean", tip: "cizgi", renk: 3, kesik: true, from: [1.5, 0], to: [1.5, 3.4], etiket: "mean" },
            { id: "rng", tip: "ok", from: [0.8, 2.2], to: [2.2, 2.2] },
            { id: "rt", tip: "yazi", x: 1.5, y: 2.6, metin: "range 14" }
          ],
          durumlar: [
            { metin: "Orijinal puanlar: 28, 34, 35, 36, 42. Mean 35, range 42 − 28 = 14, standard deviation 5." },
            { metin: "Herkese +5: bütün noktalar birlikte 5 birim sağa kayar (33, 39, 40, 41, 47). Mean 40 oldu; ==range hâlâ 14==.", set: { p1: { x: 1.3 }, p2: { x: 1.9 }, p3: { x: 2 }, p4: { x: 2.1 }, p5: { x: 2.7 }, mean: { from: [2, 0], to: [2, 3.4] }, rng: { from: [1.3, 2.2], to: [2.7, 2.2] } } },
            { metin: "Herkes ×2 (50 üzerinden 100 üzerine çevirme): noktalar akordeon gibi açılır (66, 78, 80, 82, 94). Mean 80; ==range 28, yani iki katı==.", set: { p1: { x: 4.6 }, p2: { x: 5.8 }, p3: { x: 6 }, p4: { x: 6.2 }, p5: { x: 7.4 }, mean: { from: [6, 0], to: [6, 3.4] }, rng: { from: [4.6, 2.2], to: [7.4, 2.2] }, rt: { x: 6, metin: "range 28" } } }
          ] }
      ]
    },
    {
      baslik: "*Transforming data* ve orijinal veri",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔄", terim: "Transforming data", tr: "veriyi dönüştürmek", tanim: "Verideki her değere ==aynı işlemi== uygulayıp veriyi başka bir ölçeğe ya da birime taşımak.", ornek: "Herkese 5 puan eklemek; santigratı Fahrenhayta çevirmek." },
            { ikon: "➕", terim: "Adding (subtracting) a constant", tr: "sabit ekleme/çıkarma", tanim: "Her değere aynı sayıyı (a) eklemek ya da çıkarmak: x + a.", ornek: "Herkese +5 puan." },
            { ikon: "✖️", terim: "Multiplying (dividing) by a constant", tr: "sabitle çarpma/bölme", tanim: "Her değeri aynı sayıyla (b) çarpmak ya da bölmek: b · x.", ornek: "Her puanı ×2." },
            { ikon: "📍", terim: "Measures of center & location", tr: "merkez ve konum ölçüleri", tanim: "*Mean*, *median*, *quartiles* (Q1, Q3), minimum, maksimum.", ornek: "Mean 35, median 35, Q1 31, Q3 39." },
            { ikon: "↔️", terim: "Measures of variability (spread)", tr: "yayılım ölçüleri", tanim: "*Range*, *IQR*, *standard deviation*.", ornek: "Range 14, IQR 8, SD 5." }
          ] },
        { tip: "sekil", baslik: "Orijinal: 5 arkadaşın quiz puanı (50 üzerinden)", fig: { type: "dot", values: [28, 34, 35, 36, 42], label: "Quiz score (out of 50)" } },
        { tip: "ornek", baslik: "Orijinal verinin özeti", durum: "Puanlar: 28, 34, 35, 36, 42.",
          adimlar: ["Mean: (28 + 34 + 35 + 36 + 42) ÷ 5 = 175 ÷ 5 = 35. Median: ortadaki 3. değer = 35.", "Range: 42 − 28 = 14.", "SD: sapmalar −7, −1, 0, +1, +7; kareler 49, 1, 0, 1, 49; toplam 100; 100 ÷ (5 − 1) = 25; √25 = 5.", "Çeyrekler: Q1 = (28 + 34) ÷ 2 = 31; Q3 = (36 + 42) ÷ 2 = 39; IQR = 39 − 31 = 8."],
          sonuc: "==Mean 35, median 35, range 14, IQR 8, SD 5.== Bu satırları sonraki bölümlerde karşılaştıracağız." }
      ]
    },
    {
      baslik: "Sabit eklemek: x + a",
      bloklar: [
        { tip: "tablo", baslik: "Herkese +5 sonrası", head: ["", "Orijinal", "+5", "Değişim"], rows: [
            ["Değerler", "28, 34, 35, 36, 42", "33, 39, 40, 41, 47", ""],
            ["Mean", "35", "40", "+5"],
            ["Median", "35", "40", "+5"],
            ["Min / Max", "28 / 42", "33 / 47", "+5 / +5"],
            ["Q1 / Q3", "31 / 39", "36 / 44", "+5 / +5"],
            ["Range", "14", "14", "değişmedi"],
            ["IQR", "8", "8", "değişmedi"],
            ["SD", "5", "5", "değişmedi"]
          ], vurgu: 5, not: "Komşu noktalar arasındaki boşluklar: önce 6, 1, 1, 6; sonra yine 6, 1, 1, 6." },
        { tip: "ornek", baslik: "Range ve SD neden aynı?", durum: "+5 sonrası puanlar: 33, 39, 40, 41, 47.",
          adimlar: ["Range: 47 − 33 = 14 (önce de 14).", "Sapmalar: 33 − 40 = −7, −1, 0, +1, +7. Aynı sapmalar, aynı kareler toplamı 100 → SD 5.", "Neden? Bütün noktalar birlikte, aynı miktarda kaydı: aralarındaki mesafeler hiç değişmedi."],
          sonuc: "Sabit eklemek noktaları kaydırır ama ==aralarındaki mesafeleri bozmaz==: yayılım aynı." },
        { tip: "ikili", sol: { ikon: "↗️", baslik: "+5 ile değişir (a kadar kayar)", maddeler: ["*Mean*, *median*", "Q1, Q3", "Minimum, maksimum"] },
          sag: { ikon: "🔒", baslik: "+5 ile aynı kalır", maddeler: ["*Range*, *IQR*, *standard deviation*", "*Shape*"] },
          oyun: [
            { metin: "Median.", cevap: "sol", neden: "Merkez ve konum ölçüleri a kadar kayar." },
            { metin: "Standard deviation.", cevap: "sag", neden: "Yayılım ölçüleri sabit eklenince değişmez." },
            { metin: "Maksimum değer.", cevap: "sol", neden: "Konum ölçüsü: 42 → 47." },
            { metin: "IQR.", cevap: "sag", neden: "Q3 − Q1 farkı: Q3 de Q1 de 5 arttı, fark aynı." },
            { metin: "Range.", cevap: "sag", neden: "En büyük − en küçük: ikisi de 5 arttı, fark 14." },
            { metin: "Dağılımın şekli (skewed left vb.).", cevap: "sag", neden: "Noktalar birlikte kaydığı için biçim bozulmaz." }
          ] },
        { tip: "ornek", baslik: "Ders notundaki 25 kişilik sınıf", durum: "50 puanlık test, 25 öğrenci, skewed left. Mean 35,44; SD 8,77. Herkese 5 puan eklenir.",
          adimlar: ["Mean: 35,44 + 5 = 40,44.", "SD: 8,77 (değişmez)."],
          sonuc: "==Yeni mean 40,44; SD hâlâ 8,77.== Çıkarma da aynı kural: x − a." }
      ]
    },
    {
      baslik: "Sabitle çarpmak: b · x",
      bloklar: [
        { tip: "tablo", baslik: "Önce +5, sonra ×2", head: ["", "Orijinal", "+5", "×2 (sonra)"], rows: [
            ["Değerler", "28, 34, 35, 36, 42", "33, 39, 40, 41, 47", "66, 78, 80, 82, 94"],
            ["Mean", "35", "40", "80"],
            ["Median", "35", "40", "80"],
            ["Min / Max", "28 / 42", "33 / 47", "66 / 94"],
            ["Q1 / Q3", "31 / 39", "36 / 44", "72 / 88"],
            ["Range", "14", "14", "28"],
            ["IQR", "8", "8", "16"],
            ["SD", "5", "5", "10"]
          ], vurgu: 5, not: "×2'de komşu boşluklar: 12, 2, 2, 12 (yani ikiye katlanmış)." },
        { tip: "ornek", baslik: "×2 sonrası yayılım", durum: "Yüzlüğe çevirme: +5'li puanlar (33, 39, 40, 41, 47) × 2 = 66, 78, 80, 82, 94.",
          adimlar: ["Mean: 40 × 2 = 80. Median: 40 × 2 = 80.", "Range: 94 − 66 = 28 = 2 × 14.", "SD: 5 × 2 = 10. IQR: 8 × 2 = 16 (Q3 − Q1 = 88 − 72).", "Mesafeler de çarpıldı: komşu boşluklar 6, 1, 1, 6 → 12, 2, 2, 12."],
          sonuc: "Çarpınca ==merkez de yayılım da çarpılır==; shape yine aynı kalır (grafik yatayda esner)." },
        { tip: "ornek", baslik: "Ders notundaki 25 kişilik sınıf, ×2", durum: "Mean 40,44; SD 8,77 olan puanlar yüzlüğe çevrilmek için ×2 yapılır.",
          adimlar: ["Mean: 40,44 × 2 = 80,88.", "SD: 8,77 × 2 = 17,54."],
          sonuc: "==Mean 80,88; SD 17,54.== Skewed left dağılım skewed left kalır." },
        { tip: "ornek", baslik: "Negatif çarpan", durum: "28, 34, 35, 36, 42 puanları −2 ile çarpılıyor: −56, −68, −70, −72, −84.",
          adimlar: ["Mean: 35 × (−2) = −70.", "Range: −56 − (−84) = 28 = 2 × 14.", "SD: 5 × 2 = 10 (−10 değil)."],
          sonuc: "Yayılım asla negatif olamaz: ==yeni SD = |b| × SD==. b negatifse grafik aynalanır." },
        { tip: "ikili", sol: { ikon: "✖️", baslik: "×b ile çarpılır", maddeler: ["*Mean*, *median*", "Q1, Q3, min, max"] },
          sag: { ikon: "↔️", baslik: "|b| ile çarpılır", maddeler: ["*Range*, *IQR*, *standard deviation*", "(Shape değişmez)"] },
          oyun: [
            { metin: "Median 35'ten 80'e (×2 ve +5 sonrası).", cevap: "sol", neden: "Merkez ve konum ölçüleri b ile çarpılır." },
            { metin: "SD 5'ten 10'a.", cevap: "sag", neden: "Yayılım ölçüleri |b| ile çarpılır." },
            { metin: "b = −2 iken SD'nin ×2 olması (−10 değil, +10).", cevap: "sag", neden: "Yayılım mutlak değerle çarpılır; SD negatif olamaz." },
            { metin: "b = −2 iken mean'in −70 olması.", cevap: "sol", neden: "Merkez, işaretiyle birlikte b ile çarpılır." }
          ] }
      ]
    },
    {
      baslik: "Kural özeti",
      bloklar: [
        { tip: "tablo", baslik: "Dönüşümler ve ölçüler", head: ["İşlem", "Center & location", "Variability", "Shape"], rows: [
            ["x + a (ya da x − a)", "a kadar kayar", "değişmez", "değişmez"],
            ["b · x (ya da x ÷ b)", "b ile çarpılır", "|b| ile çarpılır", "değişmez (b < 0 ise ayna görüntüsü)"],
            ["a + b · x", "a + b · eski", "|b| · eski", "değişmez"]
          ], not: "Center & location: mean, median, Q1, Q3, min, max. Variability: range, IQR, SD." },
        { tip: "formul", parcalar: [{ t: "yeni SD", alt: "" }, "=", { t: "|b|", alt: "çarpanın mutlak değeri" }, "×", { t: "eski SD", alt: "toplama sabiti karışmaz" }] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Doğru ifade", maddeler: ["Kurala uyar", "Hesapla doğrulanır"] },
          sag: { ikon: "❌", baslik: "Yanlış ifade", maddeler: ["Kuralı çiğner", "Yaygın bir hata"] },
          oyun: [
            { metin: "Herkese 4 bin lira eklenirse SD aynı kalır.", cevap: "sol", neden: "Sabit eklemek yayılıma dokunmaz." },
            { metin: "Herkese 4 bin lira eklenirse SD 4 bin artar.", cevap: "sag", neden: "Toplama SD'yi değiştirmez; yalnızca mean 4 bin artar." },
            { metin: "Her değeri −3 ile çarparsan SD 3 katına çıkar (negatif olmaz).", cevap: "sol", neden: "Yeni SD = |b| × SD = 3 × SD." },
            { metin: "SD hiçbir dönüşümle negatif olabilir.", cevap: "sag", neden: "Yayılım asla negatif olamaz; çarpanın mutlak değeri kullanılır." },
            { metin: "z-score'a çevirince dağılım simetrik olur.", cevap: "sag", neden: "Shape değişmez; sola çarpık veri sola çarpık kalır." },
            { metin: "z-score'ların mean'i 0, standard deviation'ı 1'dir.", cevap: "sol", neden: "Çıkarma mean'i 0'a çeker, bölme SD'yi 1 yapar." }
          ] },
        { tip: "tuzak", baslik: "Toplama yayılıma dokunmaz", metin: "En yaygın hata: sabiti SD'ye ya da IQR'a da eklemek.", yanlis: "Herkese 5 puan eklenince SD 5'ten 10'a çıkar.", dogru: "Sabit eklemek SD'yi, IQR'ı ve range'i değiştirmez; yalnızca merkez ve konum kayar." },
        { tip: "tuzak", baslik: "Yüzde zam bir çarpmadır", metin: "Yüzde 10 zam her maaşı 1,1 ile çarpmak demektir; sabit zam bir toplamadır.", yanlis: "%10 zamda mean 44 bin olur, SD 5 bin kalır.", dogru: "×1,1: mean 40 bin × 1,1 = 44 bin; SD 5 bin × 1,1 = 5,5 bin. Herkese 4 bin lira eklenseydi mean 44 bin, SD 5 bin olurdu." }
      ]
    },
    {
      baslik: "Birim değiştirmek",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "°F", alt: "Fahrenhayt" }, "=", { t: "1,8", alt: "× çarpma: her şeyi çarpar" }, "×", { t: "°C", alt: "santigrat" }, "+", { t: "32", alt: "toplama: yalnızca merkezi kaydırır" }], aciklama: "Santigratı Fahrenhayta çevirmek hem çarpmayı hem toplamayı içerir; kuralları ayrı ayrı uygula." },
        { tip: "ornek", baslik: "İstanbul'da bir haftanın sıcaklığı", durum: "Mean 20 °C, standard deviation 5 °C. Fahrenhayta çevirelim: °F = 1,8 × °C + 32.",
          adimlar: ["Yeni mean: 1,8 × 20 = 36; 36 + 32 = 68 °F.", "Yeni SD: yalnızca çarpma etkiler: 1,8 × 5 = 9 °F.", "32 SD'ye eklenmez; toplama yayılıma dokunmaz."],
          sonuc: "==Mean = 68 °F, SD = 9 °F.== Yanlış hesap: 1,8 × 5 + 32 = 41 (✗)." },
        { tip: "ornek", baslik: "Santimetreden inçe", durum: "İnç = cm ÷ 2,54. Mean ve SD hangi işlemle değişir?",
          adimlar: ["Bölme de çarpma gibi: her şeyi böler.", "Yeni mean = eski mean ÷ 2,54.", "Yeni SD = eski SD ÷ 2,54."],
          sonuc: "İkisi de 2,54'e bölünür; toplama olmadığı için ek bir kayma yok." },
        { tip: "tuzak", baslik: "32'yi SD'ye ekleme", metin: "Fahrenhayt dönüşümünde toplanan 32 yalnızca mean'e girer.", yanlis: "SD = 1,8 × 5 + 32 = 41 °F.", dogru: "SD = 1,8 × 5 = 9 °F. Toplama → yalnızca center." }
      ]
    },
    {
      baslik: "Tersinden: taksi ücreti",
      bloklar: [
        { tip: "not", metin: "New York'ta taksi ücreti: 2,50 dolar açılış ücreti + mil başına 2 dolar. Bir iş adamının fişlerinde ücretlerin mean'i 15,45 dolar, SD'si 10,20 dolar. Kaç mil gitmiş?" },
        { tip: "formul", parcalar: [{ t: "ücret", alt: "fare" }, "=", { t: "2,50", alt: "açılış" }, "+", { t: "2", alt: "mil başına" }, "×", { t: "mil", alt: "miles" }], aciklama: "Ters çevir: mil = (ücret − 2,50) ÷ 2. İşlemi geri sar: önce çıkar, sonra böl." },
        { tip: "ornek", baslik: "Mil sayısının mean ve SD'si", durum: "Ücret: mean 15,45 dolar, SD 10,20 dolar; mil = (ücret − 2,50) ÷ 2.",
          adimlar: ["Mean: 15,45 − 2,50 = 12,95.", "12,95 ÷ 2 = 6,475 mil.", "SD: çıkarma etkilemez; yalnızca 2'ye böl: 10,20 ÷ 2 = 5,10 mil."],
          sonuc: "==Mean = 6,475 mil, SD = 5,10 mil.==" },
        { tip: "tuzak", baslik: "SD'den de çıkarmak", metin: "2,50 açılış ücreti bir toplamadır; yayılımı etkilemez.", yanlis: "SD = (10,20 − 2,50) ÷ 2 = 3,85 mil.", dogru: "SD = 10,20 ÷ 2 = 5,10 mil. Çıkarma gri kalır, yalnızca bölme SD'ye girer." },
        { tip: "ornek", baslik: "Maaşlara %10 zam", durum: "Mağazada maaşlar: mean 40 bin TL, SD 5 bin TL. Herkese %10 zam yapılıyor.",
          adimlar: ["%10 zam = her maaşı 1,10 ile çarpmak.", "Mean: 1,10 × 40 bin = 44 bin.", "SD: 1,10 × 5 bin = 5,5 bin."],
          sonuc: "==Mean 44.000 TL, SD 5.500 TL.==" }
      ]
    },
    {
      baslik: "*z-score* da bir dönüşümdür",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "z", alt: "z-score" }, "=", { t: "(puan − mean)", alt: "1. adım: çıkar" }, "÷", { t: "SD", alt: "2. adım: böl" }], aciklama: "Herkesin puanını z-score'a çevirmek iki adımlı bir dönüşümdür." },
        { tip: "grafik", baslik: "Standartlaştırma: kaydır, sonra sık", xlabel: "Puan (kayar ve sıkışır)", ylabel: "", xmax: 12, ymax: 10,
          ogeler: [
            { id: "e", tip: "egri", renk: 0, etiket: "", noktalar: [[3, 0.2], [4, 0.5], [5, 1.2], [6, 2.4], [7, 4.2], [8, 6.8], [9, 9], [10, 5], [11, 0.6]] },
            { id: "bant", tip: "alan", renk: 1, noktalar: [[6.62, 0], [6.62, 10], [9.7, 10], [9.7, 0]] },
            { id: "m", tip: "cizgi", renk: 3, kesik: true, from: [8.16, 0], to: [8.16, 9.6], etiket: "mean 35,44" },
            { id: "yz", tip: "yazi", x: 8.16, y: 0.6, metin: "SD = 8,77", gizli: false }
          ],
          durumlar: [
            { metin: "Notun sınıfı: mean 35,44, SD 8,77, sola çarpık. Bant, mean'in iki yanında 1 SD." },
            { metin: "1. adım: herkesten 35,44 çıkar. Grafik topluca sola kayar: ==mean 0 olur==, yayılım (SD 8,77) aynı kalır.", set: { e: { noktalar: [[0, 0.2], [1, 0.5], [2, 1.2], [3, 2.4], [4, 4.2], [5, 6.8], [6, 9], [7, 5], [8, 0.6]] }, bant: { noktalar: [[3.62, 0], [3.62, 10], [6.7, 10], [6.7, 0]] }, m: { from: [5.16, 0], to: [5.16, 9.6], etiket: "mean 0" } } },
            { metin: "2. adım: hepsini 8,77'ye böl. Grafik yatayda sıkışır: ==SD 1 olur==, mean 0 kalır. Shape değişmez: hâlâ sola çarpık.", set: { e: { noktalar: [[1.81, 0.2], [2.46, 0.5], [3.11, 1.2], [3.76, 2.4], [4.41, 4.2], [5.06, 6.8], [5.71, 9], [6.35, 5], [7, 0.6]] }, bant: { noktalar: [[4.16, 0], [4.16, 10], [6.16, 10], [6.16, 0]] }, yz: { metin: "SD = 1" } } }
          ] },
        { tip: "sekil", baslik: "Bizim beşlinin z-score'ları", fig: { type: "dot", values: [-1.4, -0.2, 0, 0.2, 1.4], label: "z-score" } },
        { tip: "ornek", baslik: "Bizim beşliyi standartlaştır", durum: "Puanlar 28, 34, 35, 36, 42; mean 35, SD 5.",
          adimlar: ["z = (puan − 35) ÷ 5: (28 − 35) ÷ 5 = −1,4; (34 − 35) ÷ 5 = −0,2; (35 − 35) ÷ 5 = 0; (36 − 35) ÷ 5 = 0,2; (42 − 35) ÷ 5 = +1,4.", "Mean: (−1,4 − 0,2 + 0 + 0,2 + 1,4) ÷ 5 = 0.", "SD: kareler 1,96 + 0,04 + 0 + 0,04 + 1,96 = 4; 4 ÷ 4 = 1; √1 = 1."],
          sonuc: "==z-score'ların mean'i 0, standard deviation'ı 1.== (Çıkarma mean'i 0'a çekti, bölme SD'yi 1 yaptı.)" },
        { tip: "tuzak", baslik: "z-score dağılımı simetrik yapmaz", metin: "Standartlaştırma yalnızca kaydırır ve yeniden ölçekler.", yanlis: "z-score'a çevirince dağılım simetrik (normal) olur.", dogru: "Shape değişmez: sola çarpık veri z-score'a çevrilince de sola çarpıktır; mean 0, SD 1 olur." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Transforming data*: her değere aynı işlemi uygulamak (x + a ya da b · x).",
            "Sabit eklemek/çıkarmak: mean, median, Q1, Q3, min, max a kadar kayar; range, IQR, SD ve *shape* değişmez.",
            "Sabitle çarpmak/bölmek: merkez ve konum b ile, yayılım |b| ile çarpılır; *shape* değişmez (b < 0 ise ayna görüntüsü).",
            "SD asla negatif olmaz: yeni SD = |b| × SD.",
            "Yüzde zam bir çarpmadır (×1,1); sabit zam bir toplamadır.",
            "Birim değiştirirken: °F = 1,8 × °C + 32 ⇒ mean 20 → 68, SD 5 → 9 (32 SD'ye eklenmez).",
            "Geri çözerken önce formülü ters çevir, sonra kuralı her istatistiğe ayrı ayrı uygula (taksi: mean 6,475 mil, SD 5,10 mil).",
            "*z-score*'a çevrilen her veride mean 0, SD 1 olur; shape aynı kalır.",
            "Cevabı birimle yaz (puan, °F, mil)."
          ] }
      ]
    }
  ]
};
