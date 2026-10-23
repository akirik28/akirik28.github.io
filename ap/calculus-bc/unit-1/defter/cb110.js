/* Kitpath not defteri · cb110 · 1.16 Ara Değer Teoremi
   Kaynak: ap-videolar/src/episodes/cb110 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb110",
  amac: "Bu konu *Intermediate Value Theorem*'i (ara değer teoremi, IVT) anlatıyor: sürekli bir fonksiyon iki değeri arasındaki her değeri alır. Kök varlığını göstermeyi, tablodan “en az kaç kez” sorusunu ve teoremin sınırlarını öğreneceksin.",
  bolumler: [
    {
      baslik: "Sezgi: kesintisiz değişim",
      kisa: "Kesintisiz değişen bir değer, iki ucu arasındaki her değeri yakalar.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🌡️",
          baslik: "Sabah 8, öğlen 20 derece",
          metin: "Sabah 6'da hava 8 derece, öğlen 12'de 20 derece. Arada bir an sıcaklık tam 15 derece oldu mu? Kesinlikle: sıcaklık 8'den 20'ye zıplayarak değil, kesintisiz değişerek çıktı; 15'i atlamasının yolu yok. Bu sezginin adı ara değer teoremidir."
        },
        {
          tip: "grafik",
          baslik: "Sabahtan öğlene sıcaklık",
          xlabel: "saat",
          ylabel: "°C",
          xmax: 6,
          ymax: 10,
          xticks: [
            { v: 0, label: "6" },
            { v: 2, label: "8" },
            { v: 4, label: "10" },
            { v: 6, label: "12" }
          ],
          yticks: [
            { v: 3.2, label: "8" },
            { v: 6, label: "15" },
            { v: 8, label: "20" }
          ],
          ogeler: [
            { id: "a", tip: "nokta", x: 0, y: 3.2, renk: 0, etiket: "8 °C" },
            { id: "b", tip: "nokta", x: 6, y: 8, renk: 0, etiket: "20 °C" },
            { id: "k", tip: "cizgi", renk: 2, kesik: true, from: [0, 6], to: [6, 6], gizli: true },
            { id: "q", tip: "yazi", x: 1.2, y: 6.5, metin: "15 °C oldu mu?", gizli: true },
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 3.2], [0.8, 3.1], [1.6, 3.9], [2.4, 4.4], [3.2, 5.2], [4, 5.8], [4.8, 7], [5.4, 7.6], [6, 8]], gizli: true },
            { id: "cp", tip: "nokta", x: 4.155, y: 6, renk: 1, etiket: "c", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Sabah 6'da 8 °C, öğlen 12'de 20 °C." },
            { metin: "Arada sıcaklık tam 15 °C oldu mu?", goster: ["k", "q"] },
            { metin: "Sıcaklık atlayarak değil, kesintisiz değişti: eğri 15 çizgisini bir yerde keser. Bu yer ≈ 10:10 civarı.", goster: ["c", "cp"], gizle: ["q"] }
          ]
        }
      ]
    },
    {
      baslik: "Ara Değer Teoremi: ne diyor?",
      kisa: "f [a, b]'de sürekliyse f(a) ile f(b) arasındaki her k bir c'de alınır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [{ t: "f, [a, b]'de sürekli", alt: "şart 1" }, "+", { t: "k, f(a) ile f(b) arasında", alt: "şart 2" }, "⇒", { t: "f(c) = k olan bir c var", alt: "c ∈ [a, b]" }],
          aciklama: "Grafikte y = k çizgisini çiz: bir uç altta, bir uç üstteyse, kesintisiz yol çizgiyi en az bir kez kesmek zorundadır."
        },
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "🧭", terim: "Intermediate Value Theorem (IVT)", tr: "ara değer teoremi", tanim: "Sürekli bir fonksiyon, uç değerleri arasındaki her değeri en az bir kez alır.", ornek: "Sıcaklık 8'den 20'ye sürekli çıktıysa 15'i bir an görmüştür." },
            { ikon: "🛤️", terim: "Continuous on [a, b]", tr: "[a, b]'de sürekli", tanim: "İçeride sürekli, uçlarda tek taraflı limit f değerine eşit.", ornek: "x³ + x − 3, [1, 2]'de süreklidir." },
            { ikon: "🔒", terim: "Closed interval", tr: "kapalı aralık", tanim: "Uç noktaları da içeren [a, b] aralığı.", ornek: "[1, 2] aralığı 1 ve 2'yi de kapsar." },
            { ikon: "🎚️", terim: "Intermediate value", tr: "ara değer", tanim: "f(a) ile f(b) arasındaki herhangi bir k sayısı.", ornek: "f(a) = 2, f(b) = 7 ise k = 4,5 bir ara değerdir." }
          ]
        },
        {
          tip: "grafik",
          baslik: "k = 4,5 çizgisi ve kesintisiz yollar",
          xlabel: "x",
          ylabel: "y",
          xmax: 6,
          ymax: 8,
          xticks: [
            { v: 1, label: "a" },
            { v: 5, label: "b" }
          ],
          yticks: [
            { v: 2, label: "f(a)" },
            { v: 4.5, label: "k" },
            { v: 7, label: "f(b)" }
          ],
          ogeler: [
            { id: "pa", tip: "nokta", x: 1, y: 2, renk: 2 },
            { id: "pb", tip: "nokta", x: 5, y: 7, renk: 1 },
            { id: "k", tip: "cizgi", renk: 3, kesik: true, from: [0, 4.5], to: [6, 4.5], gizli: true },
            { id: "P1", tip: "egri", renk: 0, noktalar: [[1, 2], [2, 2.6], [3, 4], [3.6, 5], [4.4, 6.2], [5, 7]], gizli: true },
            { id: "c", tip: "nokta", x: 3.305, y: 4.5, renk: 1, etiket: "c", gizli: true },
            { id: "P2", tip: "egri", renk: 3, noktalar: [[1, 2], [2, 5.5], [3, 3.2], [4, 6], [5, 7]], gizli: true },
            { id: "d1", tip: "nokta", x: 1.592, y: 4.5, renk: 1, etiket: "c1", gizli: true },
            { id: "d2", tip: "nokta", x: 2.471, y: 4.5, renk: 1, etiket: "c2", gizli: true },
            { id: "d3", tip: "nokta", x: 3.529, y: 4.5, renk: 1, etiket: "c3", gizli: true }
          ],
          durumlar: [
            { metin: "Sol uç f(a) = 2, sağ uç f(b) = 7.", goster: [] },
            { metin: "k = 4,5 bu ikisinin arasında: sol uç çizginin altında, sağ uç üstünde.", goster: ["k"] },
            { metin: "Kalemi kaldırmadan çizilen yol çizgiyi kesmek zorunda: f(c) = k.", goster: ["P1", "c"] },
            { metin: "Dalgalı bir yol çizgiyi üç kez keser. Teorem “en az bir c” der, bu da uyumlu.", goster: ["P2", "d1", "d2", "d3"], gizle: ["P1", "c"] }
          ]
        }
      ]
    },
    {
      baslik: "Şartlar: süreklilik ve kapalı aralık",
      kisa: "Süreklilik şart: sıçrama ara değeri atlayabilir ve teorem bir şey garanti etmez.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Sıçramalı fonksiyon: y = 2 atlanıyor",
          xlabel: "x",
          ylabel: "y",
          xmax: 2,
          ymax: 5,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" }
          ],
          ogeler: [
            { id: "a0", tip: "nokta", x: 0, y: 0, renk: 0 },
            { id: "a", tip: "cizgi", renk: 0, from: [0, 0], to: [0.92, 0.92] },
            { id: "ao", tip: "yazi", x: 1, y: 0.88, metin: "○" },
            { id: "b0", tip: "nokta", x: 1, y: 3, renk: 0, gizli: true },
            { id: "b", tip: "cizgi", renk: 0, from: [1, 3], to: [2, 4], gizli: true },
            { id: "b1", tip: "nokta", x: 2, y: 4, renk: 0, gizli: true },
            { id: "k", tip: "cizgi", renk: 2, kesik: true, from: [0, 2], to: [2, 2], gizli: true },
            { id: "tk", tip: "yazi", x: 1.45, y: 2.35, metin: "f(x) ≠ 2", gizli: true }
          ],
          durumlar: [
            { metin: "0 ≤ x < 1 için f(x) = x. f(0) = 0." },
            { metin: "1 ≤ x ≤ 2 için f(x) = x + 2. f(2) = 4.", goster: ["b0", "b", "b1"] },
            { metin: "f(0) = 0 < 2 < 4 = f(2), ama grafik y = 2'yi hiç kesmiyor: değerler [0, 1) ∪ [3, 4]. Sıçrama yüzünden ==garanti yok==.", goster: ["k", "tk"] }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "✅", baslik: "IVT garanti eder", maddeler: ["f kapalı aralıkta sürekli", "k uç değerler arasında"] },
          sag: { ikon: "⛔", baslik: "IVT garanti etmez", maddeler: ["Aralıkta süreksizlik var", "Ya da k uç değerlerin dışında"] },
          oyun: [
            { metin: "f(x) = x² − 4, [0, 3]'te f(x) = 0 (f(0) = −4, f(3) = 5)", cevap: "sol", neden: "Polinom sürekli; 0, −4 ile 5 arasında." },
            { metin: "f(x) = 1/x, [−1, 1]'de f(x) = 0 (f(−1) = −1, f(1) = 1)", cevap: "sag", neden: "x = 0'da süreksiz." },
            { metin: "f(x) = tan x, [π/4, 3π/4]'te f(x) = 0 (f(π/4) = 1, f(3π/4) = −1)", cevap: "sag", neden: "x = π/2'de süreksiz." },
            { metin: "f(x) = x³ + x − 3, [1, 2]'de f(x) = 0 (f(1) = −1, f(2) = 7)", cevap: "sol", neden: "Sürekli ve işaret değişiyor." },
            { metin: "f sürekli, [0, 4]'te f(0) = −3, f(4) = 5: f(x) = 6 çözümü", cevap: "sag", neden: "6, −3 ile 5 arasında değil." }
          ]
        },
        {
          tip: "tuzak",
          metin: "Önce süreklilik, bir de kapalı aralık: f uç noktalarda da sürekli olmalı. Süreksiz bir fonksiyonda uçlarda işaret değişse de garanti yoktur (1/x, tan x).",
          yanlis: "f(a) ve f(b) zıt işaretliyse mutlaka kök vardır.",
          dogru: "Süreklilik şart; yoksa 0 atlanabilir."
        }
      ]
    },
    {
      baslik: "Kök varlığını göstermek (AP örneği)",
      kisa: "Uçlarda zıt işaret bulursan, aralıkta bir kök vardır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "🌱", terim: "Root (zero)", tr: "kök (sıfır)", tanim: "f(c) = 0 olan c değeri; grafiğin x eksenini kestiği yer.", ornek: "x³ + x − 3 için c ≈ 1,213." },
            { ikon: "🔀", terim: "Sign change", tr: "işaret değişimi", tanim: "f(a) ve f(b)'nin zıt işaretli olması; bu durumda 0, ikisinin arasındadır.", ornek: "f(1) = −1 < 0 < 7 = f(2)." },
            { ikon: "📝", terim: "Justification", tr: "gerekçe", tanim: "AP'de üç parça yazılır: süreklilik, uç değerler ve teoremin adı.", ornek: "f sürekli; f(1) < 0 < f(2); IVT'ye göre f(c) = 0." }
          ]
        },
        {
          tip: "ornek",
          baslik: "x³ + x − 3'ün 1 ile 2 arasında kökü olduğunu göster",
          durum: "f(x) = x³ + x − 3, aralık [1, 2].",
          adimlar: ["Polinom her yerde süreklidir; [1, 2] kapalı aralığında da.", "f(1) = 1 + 1 − 3 = −1. f(2) = 8 + 2 − 3 = 7.", "0, −1 ile 7 arasındadır: −1 < 0 < 7.", "IVT'ye göre (1, 2)'de f(c) = 0 olan bir c vardır."],
          sonuc: "“f, [1, 2]'de süreklidir; f(1) = −1 < 0 < 7 = f(2); IVT'ye göre f(c) = 0 olan bir c ∈ (1, 2) vardır.”"
        },
        {
          tip: "grafik",
          baslik: "y = x³ + x − 3",
          xlabel: "x",
          ylabel: "y",
          xmax: 3,
          ymax: 14,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" }
          ],
          yticks: [
            { v: 1, label: "-3" },
            { v: 4, label: "0" },
            { v: 11, label: "7" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 3, kesik: true, from: [0, 4], to: [3, 4], gizli: true },
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 1], [0.1, 1.101], [0.2, 1.2080000000000002], [0.30000000000000004, 1.327], [0.4, 1.464], [0.5, 1.625], [0.6000000000000001, 1.8160000000000003], [0.7000000000000001, 2.043], [0.8, 2.3120000000000003], [0.9, 2.629], [1, 3], [1.1, 3.4310000000000005], [1.2000000000000002, 3.928000000000001], [1.3, 4.497000000000001], [1.4000000000000001, 5.144000000000001], [1.5, 5.875], [1.6, 6.6960000000000015], [1.7000000000000002, 7.613000000000001], [1.8, 8.632000000000001], [1.9000000000000001, 9.759], [2, 11], [2.1, 12.361], [2.2, 13.848000000000003]] },
            { id: "p1", tip: "nokta", x: 1, y: 3, renk: 2, etiket: "−1", gizli: true },
            { id: "p2", tip: "nokta", x: 2, y: 11, renk: 1, etiket: "7", gizli: true },
            { id: "cc", tip: "nokta", x: 1.213, y: 4, renk: 1, etiket: "c ≈ 1,213", gizli: true }
          ],
          durumlar: [
            { metin: "Polinom her yerde sürekli: [1, 2] kapalı aralığında da." },
            { metin: "f(1) = −1 x ekseninin altında, f(2) = 7 üstünde.", goster: ["p1", "p2"] },
            { metin: "0, −1 ile 7 arasında: eğri x eksenini kesmek zorunda. c ≈ 1,213, ama ==denklemi çözmeden== bulundu.", goster: ["ex", "cc"] }
          ]
        },
        {
          tip: "tuzak",
          metin: "AP'de en sık puan kaybı: süreklilik cümlesini unutmak. İkincisi: teoremin adını yazmamak.",
          yanlis: "“f(1) < 0 < f(2)” yazdım, kök vardır.",
          dogru: "Üçünü de yaz: “f sürekli”, uç değerlerle eşitsizlik, “IVT'ye göre …”."
        }
      ]
    },
    {
      baslik: "Tablodan: en az kaç kez?",
      kisa: "Her ardışık aralığı ayrı kontrol et; çizgiyi kesenleri say.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "f sürekli; f(x) = 4 en az kaç kez olur?",
          head: ["Aralık", "f değerleri", "4 geçilir mi?"],
          rows: [["[0, 1]", "1 → 5", "evet: en az 1"], ["[1, 2]", "5 → 6", "hayır: garanti yok"], ["[2, 3]", "6 → 2", "evet: en az 1"], ["[3, 4]", "2 → 7", "evet: en az 1"]],
          not: "Tablo: x = 0, 1, 2, 3, 4 için f = 1, 5, 6, 2, 7. Sonuç: en az 3 kez."
        },
        {
          tip: "grafik",
          baslik: "f sürekli: f(x) = 4 kaç kez?",
          xlabel: "x",
          ylabel: "f(x)",
          xmax: 4,
          ymax: 8,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" }
          ],
          yticks: [{ v: 4, label: "4" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 1], [1, 5], [2, 6], [3, 2], [4, 7]] },
            { id: "t0", tip: "nokta", x: 0, y: 1, renk: 0 },
            { id: "t1", tip: "nokta", x: 1, y: 5, renk: 0 },
            { id: "t2", tip: "nokta", x: 2, y: 6, renk: 0 },
            { id: "t3", tip: "nokta", x: 3, y: 2, renk: 0 },
            { id: "t4", tip: "nokta", x: 4, y: 7, renk: 0 },
            { id: "k", tip: "cizgi", renk: 3, kesik: true, from: [0, 4], to: [4, 4], gizli: true },
            { id: "s1", tip: "nokta", x: 0.696, y: 4, renk: 1, gizli: true },
            { id: "s2", tip: "nokta", x: 2.457, y: 4, renk: 1, gizli: true },
            { id: "s3", tip: "nokta", x: 3.52, y: 4, renk: 1, gizli: true },
            { id: "tn", tip: "yazi", x: 3.9, y: 7.4, metin: "en az 3 kez", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Tablodaki beş nokta: f(0) = 1, f(1) = 5, f(2) = 6, f(3) = 2, f(4) = 7. f(x) = 4 çizgisini ekleyelim.", goster: ["k"] },
            { metin: "0 ile 1 arası: 1'den 5'e çıkıyor, 4'ü geçmek zorunda. En az 1.", goster: ["s1"] },
            { metin: "1 ile 2 arası: 5'ten 6'ya; 4 yok, garanti de yok." },
            { metin: "2 ile 3 arası: 6'dan 2'ye iniyor, 4'ü geçer. Toplam en az 2.", goster: ["s2"] },
            { metin: "3 ile 4 arası: 2'den 7'ye çıkıyor, 4'ü geçer. Toplam ==en az 3==.", goster: ["s3", "tn"] }
          ]
        },
        {
          tip: "tuzak",
          metin: "Teorem “en az bir” der. Kaç tane olduğunu ya da nerede olduğunu söylemez; f(orta nokta)'yı da söylemez.",
          yanlis: "f(c) = k olan bir c buldum, o hâlde f süreklidir.",
          dogru: "Teorem tek yönlü: süreklilik ve uç değerler ⇒ c vardır. Tersi garanti değil."
        }
      ]
    },
    {
      baslik: "Fark fonksiyonu: f(x) = x denklemi",
      kisa: "f(c) = c istiyorsan g(x) = f(x) − x fonksiyonunun kökünü ara.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [{ ikon: "📌", terim: "Fixed point", tr: "sabit nokta", tanim: "f(c) = c olan nokta; f'nin grafiğinin y = x doğrusunu kestiği yer.", ornek: "f(c) = c ise (c, c) noktası hem f'nin hem y = x'in üzerindedir." }]
        },
        {
          tip: "ornek",
          baslik: "f(x) = x denkleminin 1 ile 3 arasında çözümü var mı?",
          durum: "f, [1, 3]'te sürekli; f(1) = 4 ve f(3) = 1.",
          adimlar: ["Hile: g(x) = f(x) − x kur. İki sürekli fonksiyonun farkı da süreklidir.", "g(1) = 4 − 1 = 3 > 0.", "g(3) = 1 − 3 = −2 < 0.", "0, −2 ile 3 arasında: IVT'ye göre g(c) = 0 olan bir c vardır.", "g(c) = 0 demek f(c) − c = 0, yani f(c) = c."],
          sonuc: "Evet: 1 ile 3 arasında f(c) = c olan en az bir c vardır."
        },
        {
          tip: "grafik",
          baslik: "f'nin yolu y = x doğrusunu kesmek zorunda",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 5,
          xticks: [
            { v: 1, label: "1" },
            { v: 3, label: "3" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 4, label: "4" }
          ],
          ogeler: [
            { id: "p1", tip: "nokta", x: 1, y: 4, renk: 0, etiket: "(1, 4)" },
            { id: "p3", tip: "nokta", x: 3, y: 1, renk: 0, etiket: "(3, 1)" },
            { id: "l", tip: "cizgi", renk: 3, kesik: true, from: [0, 0], to: [4, 4], gizli: true },
            { id: "f", tip: "egri", renk: 0, noktalar: [[1, 4], [2, 3.4], [3, 1]], gizli: true },
            { id: "x", tip: "nokta", x: 2.45, y: 2.45, renk: 1, etiket: "(c, c)", gizli: true }
          ],
          durumlar: [
            { metin: "f(1) = 4 doğrunun üstünde, f(3) = 1 altında." },
            { metin: "y = x doğrusunu çizelim: f(1) = 4 > 1 ve f(3) = 1 < 3.", goster: ["l"] },
            { metin: "f'nin kesintisiz yolu doğruyu kesmek zorunda: kesişimde f(c) = c.", goster: ["f", "x"] }
          ]
        }
      ]
    },
    {
      baslik: "Kökü sıkıştırmak: bisection (bonus)",
      kisa: "Aralığı her adımda yarıya indirerek kökü sıkıştırabilirsin.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [{ ikon: "✂️", terim: "Bisection", tr: "yarıya bölme", tanim: "IVT'yi tekrar tekrar kullanıp aralığı yarıya indirerek kökü sıkıştırmak. Bilgisayarların kök bulma yöntemlerinden biri.", ornek: "f(1,5) pozitifse kök [1; 1,5] içindedir." }]
        },
        {
          tip: "tablo",
          baslik: "x³ + x − 3 için yarıya bölme",
          head: ["Aralık", "Orta nokta", "f(orta)", "Yeni aralık"],
          rows: [["[1, 2]", "1,5", "1,875 > 0", "[1; 1,5]"], ["[1; 1,5]", "1,25", "0,203 > 0", "[1; 1,25]"], ["[1; 1,25]", "1,125", "−0,451 < 0", "[1,125; 1,25]"], ["[1,125; 1,25]", "—", "—", "genişlik 0,125"]],
          not: "Genişlik 1 → 0,5 → 0,25 → 0,125: her adımda yarıya iner."
        },
        {
          tip: "grafik",
          baslik: "[1, 2] aralığı her adımda yarıya iner",
          xlabel: "x",
          ylabel: "adım",
          xmax: 8,
          ymax: 5,
          xticks: [
            { v: 0, label: "1" },
            { v: 4, label: "1,5" },
            { v: 8, label: "2" }
          ],
          ogeler: [
            { id: "s0", tip: "cizgi", renk: 0, from: [0, 4], to: [8, 4] },
            { id: "t0", tip: "yazi", x: 6.5, y: 4.3, metin: "[1, 2]" },
            { id: "s1", tip: "cizgi", renk: 0, from: [0, 3], to: [4, 3], gizli: true },
            { id: "t1", tip: "yazi", x: 4.2, y: 2.88, metin: "[1; 1,5]", hiza: "start", gizli: true },
            { id: "s2", tip: "cizgi", renk: 0, from: [0, 2], to: [2, 2], gizli: true },
            { id: "t2", tip: "yazi", x: 2.2, y: 1.88, metin: "[1; 1,25]", hiza: "start", gizli: true },
            { id: "s3", tip: "cizgi", renk: 1, from: [1, 1], to: [2, 1], gizli: true },
            { id: "t3", tip: "yazi", x: 2.2, y: 0.88, metin: "[1,125; 1,25]", hiza: "start", gizli: true },
            { id: "rt", tip: "cizgi", renk: 2, kesik: true, from: [1.7072933020978365, 0.5], to: [1.7072933020978365, 4.6], gizli: true }
          ],
          durumlar: [
            { metin: "Kök [1, 2] içinde: f(1) = −1 < 0 < 7 = f(2)." },
            { metin: "f(1,5) = 1,875 > 0: kök [1; 1,5] içinde. Genişlik 0,5.", goster: ["s1", "t1"] },
            { metin: "f(1,25) ≈ 0,203 > 0: kök [1; 1,25] içinde. Genişlik 0,25.", goster: ["s2", "t2"] },
            { metin: "f(1,125) ≈ −0,451 < 0: kök [1,125; 1,25] içinde. Genişlik 0,125. Kırmızı çizgi gerçek kök c ≈ 1,213.", goster: ["s3", "t3", "rt"] }
          ]
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: ["f, [a, b]'de sürekli ve k, f(a) ile f(b) arasındaysa f(c) = k olan en az bir c vardır.", "Süreklilik ve kapalı aralık şart; sıçramalı bir fonksiyon ara değeri atlayabilir.", "Kök göstermek için uçlarda zıt işaret ara: f(a) < 0 < f(b).", "Tabloda her ardışık aralığı ayrı kontrol et; sonuç “en az” sayıdır.", "Teorem kaç tane ya da nerede olduğunu söylemez; tersi de doğru değildir.", "f(x) = x tipi sorularda g(x) = f(x) − x fonksiyonunu kur.", "Gerekçede sürekliliği, uç değerleri ve “IVT” adını yaz."]
        }
      ]
    }
  ]
};
