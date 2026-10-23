/* Kitpath not defteri · cb405 · 4.6 Doğrusal Yaklaşım (Linearization)
   Videosuz ünite: CED 4.6 (Approximating Values of a Function Using Local Linearity and Linearization). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb405",
  amac: "Bu konu *linearization* yani doğrusallaştırmayı anlatıyor: bir eğriye yeterince yakından bakınca teğet doğrusuna benzer, bu yüzden teğet doğrusuyla yakın değerleri tahmin edebiliriz. Formülü, tahminin gerçekten büyük mü küçük mü olduğunu ve gerekçesini öğreneceksin.",
  bolumler: [
    {
      baslik: "Yakından bakınca eğri doğru olur",
      kisa: "Türevlenebilir bir eğri, bir noktada yeterince yakından düz görünür.",
      bloklar: [
        { tip: "hikaye", ikon: "🗺️", baslik: "Haritayı yakınlaştır",
          metin: "Dünya yuvarlak, ama harita uygulamasında bir sokağı yakınlaştırınca yol düz bir çizgi gibi görünür. Eğriler de böyledir: bir noktaya yakından bakınca o noktadaki ==teğet doğrusuna== çok benzerler." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔍", terim: "Local linearity", tr: "yerel doğrusallık", tanim: "Türevlenebilir bir fonksiyonun grafiğinin, bir noktanın çok yakınında teğet doğrusuna çok benzemesi.", ornek: "√x, x = 4 civarında y = 2 + (x − 4)/4 doğrusuna çok yakındır." },
            { ikon: "📏", terim: "Linearization", tr: "doğrusallaştırma", tanim: "f'nin x = a noktasındaki teğet doğrusunun denklemi, L(x). Yakın değerleri tahmin etmek için kullanılır.", ornek: "L(x) = f(a) + f′(a)(x − a)." }
          ] }
      ]
    },
    {
      baslik: "Doğrusallaştırma formülü",
      kisa: "L(x) = f(a) + f′(a)(x − a): teğetin denklemi.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "L(x)", alt: "doğrusallaştırma" }, "=",
            { t: "f(a)", alt: "noktanın yüksekliği" }, "+",
            { t: "f′(a)", alt: "eğim" }, "·",
            { t: "(x − a)", alt: "yatay uzaklık" }
          ], aciklama: "Bu, y − y₀ = m(x − x₀) teğet denkleminin başka yazılışıdır. ==Eğim × yatay uzaklık = yükseklik farkı.== x, a'ya yakınsa f(x) ≈ L(x)." },
        { tip: "adimlar", baslik: "Üç adımda tahmin", adimlar: [
            { baslik: "a'yı seç", metin: "Tahmin edilecek x'e yakın ve f(a) ile f′(a)'nın kolay hesaplandığı bir a bul." },
            { baslik: "f(a) ve f′(a)'yı hesapla", metin: "Teğetin noktasını ve eğimini yaz." },
            { baslik: "L(x)'e yerleştir", metin: "L(x) = f(a) + f′(a)(x − a) yaz ve istenen x'i koy." }
          ] }
      ]
    },
    {
      baslik: "Örnek: √5'i tahmin etmek",
      kisa: "a = 4 seç; teğet doğrusuyla √5 ≈ 2,25 bulunur.",
      bloklar: [
        { tip: "ornek", baslik: "f(x) = √x, a = 4", durum: "√5'i doğrusallaştırmayla tahmin et.",
          adimlar: [
            "f(4) = 2 ve f′(x) = 1 / (2√x) ⇒ f′(4) = 1/4.",
            "L(x) = 2 + (1/4)(x − 4).",
            "L(5) = 2 + 1/4 = 2,25.",
            "Gerçek değer √5 ≈ 2,236. Tahmin çok yakın ama biraz büyük."
          ], sonuc: "√5 ≈ 2,25 (gerçek 2,236)" },
        { tip: "grafik", baslik: "y = √x ve x = 4'teki teğet", xlabel: "x", ylabel: "y", xmax: 9, ymax: 3.5,
          xticks: [{ v: 4, label: "4" }, { v: 5, label: "5" }, { v: 8, label: "8" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0], [0.5, 0.707], [1, 1], [1.5, 1.225], [2, 1.414], [2.5, 1.581], [3, 1.732], [3.5, 1.871], [4, 2], [4.5, 2.121], [5, 2.236], [5.5, 2.345], [6, 2.449], [6.5, 2.55], [7, 2.646], [7.5, 2.739], [8, 2.828], [8.5, 2.915], [9, 3]] },
            { id: "p", tip: "nokta", renk: 2, x: 4, y: 2, etiket: "(4, 2)", kilavuz: true, gizli: true },
            { id: "t", tip: "cizgi", renk: 2, from: [0, 1], to: [8, 3], etiket: "L(x)", gizli: true },
            { id: "n1", tip: "nokta", renk: 3, x: 5, y: 2.25, etiket: "L(5) = 2,25", gizli: true },
            { id: "n2", tip: "nokta", renk: 0, x: 5, y: 2.236, gizli: true },
            { id: "f1", tip: "nokta", renk: 3, x: 8, y: 3, etiket: "L(8) = 3", gizli: true },
            { id: "f2", tip: "nokta", renk: 0, x: 8, y: 2.828, gizli: true }
          ],
          durumlar: [
            { metin: "Eğri y = √x: yükseliyor ve aşağı doğru bükülüyor (içbükey, f″ < 0)." },
            { metin: "a = 4: f(4) = 2. Teğet bu noktadan geçer.", goster: ["p"] },
            { metin: "Teğet doğrusu L(x) = 2 + (x − 4)/4, eğimi 1/4.", goster: ["t"] },
            { metin: "x = 5: teğet 2,25, eğri 2,236. Fark yalnızca 0,014; yakında hata çok küçük.", goster: ["n1", "n2"] },
            { metin: "x = 8: teğet 3, eğri 2,828. Fark 0,17; uzaklaştıkça hata büyür. Teğet eğrinin üstünde kalıyor.", gizle: ["n1", "n2"], goster: ["f1", "f2"] }
          ] }
      ]
    },
    {
      baslik: "a nasıl seçilir?",
      kisa: "x'e en yakın, f(a) ve f′(a)'sı kolay bir a seç.",
      bloklar: [
        { tip: "ornek", baslik: "f(x) = ∛x, a = 8", durum: "∛8,3'ü tahmin et.",
          adimlar: [
            "8 tam küp: f(8) = 2.",
            "f′(x) = (1/3)x^(−2/3) ⇒ f′(8) = 1 / (3 · 4) = 1/12.",
            "L(x) = 2 + (x − 8)/12.",
            "L(8,3) = 2 + 0,3/12 = 2 + 0,025 = 2,025."
          ], sonuc: "∛8,3 ≈ 2,025 (gerçek 2,0247)" },
        { tip: "tuzak", metin: "a, tahmin edilen x'e yakın olmalı ve f(a) ile f′(a) elle hesaplanabilmeli. Uzak bir a seçersen teğet eğriden hızla ayrılır.", yanlis: "√5 için a = 25 almak (L(5) = 5 + (5 − 25)/10 = 3).", dogru: "a = 4 al: √4 = 2 kolay, 5'e yakın. Tahmin 2,25, gerçek 2,236." }
      ]
    },
    {
      baslik: "Tahmin gerçekten büyük mü, küçük mü?",
      kisa: "Aşağı bükülüyorsa teğet üstte kalır: tahmin büyük çıkar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "😮", baslik: "*f″ < 0* (aşağı bükülür)", maddeler: ["Teğet eğrinin üstünde", "L(x) ≥ f(x): ==overestimate=="] },
          sag: { ikon: "🙂", baslik: "*f″ > 0* (yukarı bükülür)", maddeler: ["Teğet eğrinin altında", "L(x) ≤ f(x): ==underestimate=="] },
          oyun: [
            { metin: "f(x) = √x, a = 4", cevap: "sol", neden: "f″ = −1 / (4x^(3/2)) < 0: teğet üstte, tahmin büyük." },
            { metin: "f(x) = eˣ, a = 0", cevap: "sag", neden: "f″ = eˣ > 0: teğet altta, tahmin küçük." },
            { metin: "f(x) = ln x, a = 1", cevap: "sol", neden: "f″ = −1/x² < 0: teğet üstte." },
            { metin: "f(x) = 1/x, a = 1", cevap: "sag", neden: "f″ = 2/x³ > 0 (x > 0): teğet altta." }
          ] },
        { tip: "tablo", baslik: "Dört tahmin, dört gerekçe", head: ["Tahmin", "L(x)", "Tahmin", "Gerçek", "f″ → tür"],
          rows: [
            ["√26 (a = 25)", "5 + (x − 25)/10", "5,1", "5,0990", "< 0 → büyük"],
            ["ln 1,1 (a = 1)", "x − 1", "0,1", "0,0953", "< 0 → büyük"],
            ["e^0,1 (a = 0)", "1 + x", "1,1", "1,1052", "> 0 → küçük"],
            ["1/1,2 (a = 1)", "2 − x", "0,8", "0,8333", "> 0 → küçük"]
          ], vurgu: 2, not: "Eğri yukarı bükülüyorsa teğet altta kalır; aşağı bükülüyorsa teğet üstte kalır." }
      ]
    },
    {
      baslik: "Bağlamda ve tabloda doğrusallaştırma",
      kisa: "Türev değeri hız, f(a) başlangıçtır; tahmin f(a) + hız × süredir.",
      bloklar: [
        { tip: "ornek", baslik: "Fidan boyu", durum: "H(10) = 40 cm ve H′(10) = 0,8 cm/gün. Büyüme yavaşlıyor (H″ < 0). 12. günde boy tahmini ve gerçek değerle karşılaştırması?",
          adimlar: [
            "L(12) = H(10) + H′(10) · (12 − 10) = 40 + 0,8 · 2 = 41,6.",
            "H″ < 0: büyüme yavaşlıyor, H aşağı bükülür; teğet eğrinin üstünde.",
            "Tahmin gerçek değerden büyüktür."
          ], sonuc: "H(12) ≈ 41,6 cm; gerçek boy 41,6'dan küçük (overestimate)" },
        { tip: "ornek", baslik: "Tablodan doğrusallaştırma", durum: "g(3) = 7 ve g′ tablosu: g′(2) = −1, g′(3) = −2, g′(4) = −3. g(3,1)'i tahmin et ve türünü söyle.",
          adimlar: [
            "L(3,1) = g(3) + g′(3) · 0,1 = 7 + (−2) · 0,1 = 6,8.",
            "g′ değerleri azalıyor (−1, −2, −3): g″ < 0, aşağı bükülür.",
            "Teğet üstte kalır: tahmin büyük."
          ], sonuc: "g(3,1) ≈ 6,8; gerçek değer 6,8'den küçük" }
      ]
    },
    {
      baslik: "Gerekçe nasıl yazılır?",
      kisa: "Önce f″'nin işaretini söyle, sonra teğetin yerini, sonra sonucu.",
      bloklar: [
        { tip: "adimlar", baslik: "Üç cümlelik gerekçe", adimlar: [
            { baslik: "f″'nin işareti", metin: "\"Aralıkta f″(x) < 0 olduğu için f grafiği aşağı bükülür.\"" },
            { baslik: "Teğetin konumu", metin: "\"Bu yüzden teğet doğrusu grafiğin üstünde kalır.\"" },
            { baslik: "Sonuç", metin: "\"Dolayısıyla L(x) gerçek değerden büyüktür (overestimate).\"" }
          ] },
        { tip: "tuzak", metin: "Yalnızca f′'nin işaretine bakarak karar verilmez. Tahminin büyük ya da küçük olması f″ ile belirlenir.", yanlis: "f′(a) > 0, yani teğet eğrinin altındadır.", dogru: "f′ > 0 eğrinin yükseldiğini söyler. Teğetin altta mı üstte mi olduğunu f″'nin işareti söyler." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Yerel doğrusallık: türevlenebilir eğri, bir noktada yakından düz görünür.",
            "L(x) = f(a) + f′(a)(x − a) teğet doğrusunun denklemidir.",
            "x, a'ya yakınsa f(x) ≈ L(x); uzaklaştıkça hata büyür.",
            "a'yı x'e yakın, f(a) ve f′(a)'sı kolay seç.",
            "f″ < 0: teğet üstte, tahmin büyük (overestimate).",
            "f″ > 0: teğet altta, tahmin küçük (underestimate).",
            "Bağlamda: tahmin = başlangıç + hız × süre.",
            "Gerekçe: f″'nin işareti, teğetin konumu, sonuç. Euler yöntemi Unit 7'de bu fikri adım adım kullanır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "f(2) = 5 ve f′(2) = −3 olsun. f'nin x = 2'deki doğrusallaştırmasıyla f(2,1) için tahmin hangisidir?",
      opts: ["5,3", "4,7", "4,9", "−0,3"],
      a: 1,
      why: "L(2,1) = f(2) + f′(2) · 0,1 = 5 + (−3)(0,1) = 4,7. A şıkkı en çekici yanlış: değişimi pozitif almak işareti kaybettirir; eğim negatif olduğundan değer düşer." },
    { q: "f(x) = 1/x fonksiyonunun x = 1'deki doğrusallaştırması L(x) = 2 − x'tir. 1/1,2 için L(1,2) tahmini ve gerçek değerle ilişkisi hangisidir?",
      opts: ["0,8 ve gerçek değerden küçüktür (underestimate).", "0,8 ve gerçek değerden büyüktür (overestimate).", "1,2 ve gerçek değere eşittir.", "0,2 ve gerçek değerden küçüktür."],
      a: 0,
      why: "L(1,2) = 2 − 1,2 = 0,8. f″ = 2/x³ > 0 olduğu için teğet eğrinin altındadır ve gerçek değer 0,8333'tür. B şıkkı en çekici yanlış: teğetin hep üstte kaldığını sanıp f″'nin işaretine bakmıyor." },
    { q: "f(x) = ∛x için x = 27'deki doğrusallaştırmayı kullanarak ∛28'in tahmini nedir?",
      opts: ["3,012", "3,333", "3,037", "4,000"],
      a: 2,
      why: "f(27) = 3, f′(27) = (1/3) · 27^(−2/3) = 1/27. L(28) = 3 + 1/27 ≈ 3,037. A şıkkı en çekici yanlış: 27^(−2/3) = 1/9 yerine 1/27 alınırsa f′(27) = 1/81 ve tahmin 3,012 çıkar." },
    { q: "Tabloda f(2) = 6 ve bazı f′ değerleri verilmiştir. f(2,4) için doğrusallaştırma tahmini ve türü nedir? (f′ tablodaki aralıkta sürekli)",
      fig: { type: "table", head: ["x", "1", "2", "3"], rows: [["f′(x)", "2,5", "1,5", "0,5"]], caption: "f(2) = 6" },
      opts: ["6,6; gerçek değerden küçük", "6,6; tablo ile karar verilemez", "7,0; gerçek değerden büyük", "6,6; gerçek değerden büyük"],
      a: 3,
      why: "L(2,4) = 6 + 1,5 · 0,4 = 6,6. f′ azalıyor (2,5 → 1,5 → 0,5), yani f″ < 0, teğet üstte: tahmin büyük. B şıkkı en çekici yanlış: tablo yeterli bilgi veriyor; f′ azalıyorsa f″ < 0 olduğundan karar verilebilir." },
    { q: "Bir çayın sıcaklığı T(t) °C, t dakika. T(10) = 30, T′(10) = −2 ve soğuma gittikçe yavaşlıyor (T″ > 0). 12. dakikadaki sıcaklık için doğrusallaştırma tahmini ve gerçek değerle ilişkisi hangisidir?",
      opts: ["26 °C; gerçek sıcaklık 26 °C'den düşüktür.", "26 °C; gerçek sıcaklık 26 °C'den yüksektir.", "34 °C; gerçek sıcaklık 34 °C'den düşüktür.", "26 °C; gerçek sıcaklık kesinlikle 26 °C'dir."],
      a: 1,
      why: "L(12) = 30 + (−2)(2) = 26. T″ > 0: eğri yukarı bükülür, teğet altta kalır, tahmin küçüktür; gerçek sıcaklık 26'dan yüksek. A şıkkı en çekici yanlış: soğuyan bir şeyin tahminini hep büyük sanmak." }
  ]
};
