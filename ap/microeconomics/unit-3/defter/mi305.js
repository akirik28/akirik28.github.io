/* Kitpath not defteri · mi305 · 3.5 Kâr Maksimizasyonu
   Kaynak: AP Micro CED, Topic 3.5 (CBA-2.D.1). Blok türleri: /ap/_kit/defter.js başı.
   Unit 3'ün ortak kantin verisi (FC 60): TC 60,69,72,75,84,105,144 · MC 9,3,3,9,21,39 · ATC(Q=2…6) 36,25,21,21,24.
   P = 30: TR 0,30,…,180; kâr −60,−39,−12,15,36,45,36 → Q∗ = 5, kâr 45.  P = 24: Q∗ = 5, kâr 15. */
window.DEFTER = (function () {
  function pts(f, a, b, s) {
    var r = [], x;
    for (x = a; x <= b + 1e-9; x += s) r.push([Math.round(x * 100) / 100, Math.round(f(x) * 100) / 100]);
    return r;
  }
  var avc = function (x) { return x * x - 6 * x + 14; };
  var MC0 = [[0.5, 9], [1.5, 3], [2.5, 3], [3.5, 9], [4.5, 21], [5.5, 39]];
  var TICKS = [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }];

  return {
    slug: "mi305",
    amac: "Bu konu firmanın ne kadar üretirse kârının en yüksek olacağını anlatıyor. Toplam ve marjinal geliri, MR = MC kuralını, tablodan ve grafikten Q∗'ı bulmayı ve o noktadaki kârı hesaplamayı öğreneceksin.",
    bolumler: [
      {
        baslik: "Gelir kavramları: TR, MR, AR",
        kisa: "MR bir birim daha satmanın ek gelirdir; fiyat alıcı firmada MR = P'dir.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "TR", alt: "P × Q" }, "·",
              { t: "MR", alt: "ΔTR ÷ ΔQ" }, "·",
              { t: "AR", alt: "TR ÷ Q = P" }
            ], aciklama: "TR toplam gelir, MR bir birim daha satınca gelirin artışı, AR ise birim başına gelirdir; AR her zaman fiyata eşittir." },
          { tip: "kavramlar", kartlar: [
              { ikon: "💰", terim: "Total revenue (TR)", tr: "toplam gelir", tanim: "Fiyat ile satılan miktarın çarpımı.", ornek: "Parti başı 30 TL, 5 parti: TR = 150 TL." },
              { ikon: "➕", terim: "Marginal revenue (MR)", tr: "marjinal gelir", tanim: "Bir birim daha satınca toplam gelirin artışı. Karar her zaman sıradaki birime bakar.", ornek: "TR 120'den 150'ye çıkarsa MR = 30." }
            ] },
          { tip: "not", metin: "Fiyatı değiştiremeyen firmada (*price taker*) her ek birim aynı fiyata satılır; bu yüzden MR = P sabittir. Talep eğrisi aşağı eğimli bir firmada ise fiyat indirmeden daha fazla satılamaz ve MR < P olur (Unit 4'te göreceksin)." }
        ]
      },
      {
        baslik: "Kâr tablosu: hangi Q'da kâr en yüksek?",
        kisa: "Kâr = TR − TC; tabloda kârı en yüksek yapan Q, en iyi üretimdir.",
        bloklar: [
          { tip: "tablo", baslik: "Kantin, fiyat 30 TL (günlük parti)", head: ["Q", "TR", "MR", "TC", "MC", "Kâr (TR − TC)"], rows: [
              ["0", "0", "—", "60", "—", "−60"],
              ["1", "30", "30", "69", "9", "−39"],
              ["2", "60", "30", "72", "3", "−12"],
              ["3", "90", "30", "75", "3", "15"],
              ["4", "120", "30", "84", "9", "36"],
              ["5", "150", "30", "105", "21", "45"],
              ["6", "180", "30", "144", "39", "36"]
            ], vurgu: 5, not: "TC ve MC, Konu 3.2'deki aynı kantin tablosundan. Kâr en çok Q = 5'te (45 TL); 6. partide MC (39), MR'yi (30) aşıyor ve kâr 36'ya düşüyor." },
          { tip: "ornek", baslik: "4. parti kâra ne yapar?", durum: "Kantin 3 parti üretiyor: TR = 90, TC = 75. Fiyat 30 TL. 4. parti için MR ve MC'yi bul ve karar ver.",
            adimlar: [
              "MR = 120 − 90 = 30. MC = 84 − 75 = 9.",
              "MR − MC = 21 > 0: 4. parti kârı 21 TL artırır.",
              "Kâr 15'ten 36'ya çıkıyor (15 + 21 = 36)."
            ],
            sonuc: "MR > MC olduğu için 4. partiyi üret." }
        ]
      },
      {
        baslik: "Kural: MR = MC",
        kisa: "MR, MC'den büyükse üret; küçükse azalt; eşitleniyorsa kârın zirvesindesin.",
        bloklar: [
          { tip: "adimlar", baslik: "Kâr maksimizasyonu kuralı", adimlar: [
              { baslik: "1 · Sıradaki birime bak", metin: "Her ek birim için MR (ek gelir) ile MC (ek maliyet) karşılaştırılır." },
              { baslik: "2 · Karar ver", metin: "MR > MC ise o birim kâr ekler: üret. MR < MC ise kâr azaltır: üretme." },
              { baslik: "3 · Dur", metin: "MR = MC olan Q, kârı en yüksek yapan Q∗'dır. Bu kesişim MC'nin yükselen kolunda olmalıdır." }
            ] },
          { tip: "ikili", sol: { ikon: "⬆️", baslik: "MR > MC", maddeler: ["Ek birim kâr ekler", "Üretimi artır"] },
            sag: { ikon: "⬇️", baslik: "MR < MC", maddeler: ["Ek birim kâr azaltır", "Üretimi azalt"] },
            oyun: [
              { metin: "3. parti: MR = 30, MC = 3.", cevap: "sol", neden: "30 > 3: kâr 27 artar; üret." },
              { metin: "5. parti: MR = 30, MC = 21.", cevap: "sol", neden: "30 > 21: kâr 9 artar; üret." },
              { metin: "6. parti: MR = 30, MC = 39.", cevap: "sag", neden: "30 < 39: kâr 9 azalır; üretme." },
              { metin: "Fiyat 12'ye düşerse (MR = 12) 5. parti: MC = 21.", cevap: "sag", neden: "12 < 21: bu parti zarar ettirir; üretme." }
            ] },
          { tip: "tuzak", metin: "MR = MC kuralı \"kâr sıfırdır\" ya da \"ATC en düşüktür\" demek değildir; yalnızca en iyi Q'yu verir.", yanlis: "MR = MC olan yerde kâr sıfır olur.", dogru: "MR = MC, kârı en çok (ya da zararı en az) yapan Q'dur. Kâr pozitif, sıfır ya da negatif olabilir; (P − ATC) × Q ile ayrıca hesaplanır." }
        ]
      },
      {
        baslik: "MR = MC grafikte",
        kisa: "Fiyat çizgisi MC'yi kestiği yerde Q∗ bulunur; kâr, ATC ile fiyat arasındaki alandır.",
        bloklar: [
          { tip: "grafik", baslik: "Fiyat 30 TL: kantinin en iyi üretimi", xlabel: "Üretim (Q, parti)", ylabel: "TL", xmax: 7, ymax: 44,
            xticks: TICKS, yticks: [{ v: 9, label: "9" }, { v: 21, label: "21" }, { v: 30, label: "30" }, { v: 39, label: "39" }],
            ogeler: [
              { id: "mc", tip: "egri", renk: 3, noktalar: MC0, etiket: "MC" },
              { id: "atc", tip: "egri", renk: 0, noktalar: pts(function (x) { return avc(x) + 60 / x; }, 2, 6.5, 0.5), etiket: "ATC", gizli: true },
              { id: "mr", tip: "cizgi", renk: 2, from: [0, 30], to: [6.2, 30], etiket: "MR = P", gizli: true },
              { id: "b4", tip: "nokta", renk: 1, x: 3.5, y: 9, etiket: "MC = 9", gizli: true },
              { id: "ok4", tip: "ok", renk: 2, from: [3.5, 10], to: [3.5, 29], gizli: true },
              { id: "b6", tip: "nokta", renk: 1, x: 5.5, y: 39, etiket: "MC = 39", gizli: true },
              { id: "ok6", tip: "ok", renk: 3, from: [5.5, 38], to: [5.5, 31], gizli: true },
              { id: "e", tip: "nokta", renk: 2, x: 5, y: 30, etiket: "Q∗ = 5", kilavuz: true, gizli: true },
              { id: "kar", tip: "alan", renk: 2, noktalar: [[0, 30], [5, 30], [5, 21], [0, 21]], gizli: true },
              { id: "pa", tip: "nokta", renk: 0, x: 5, y: 21, etiket: "ATC = 21", gizli: true }
            ],
            durumlar: [
              { metin: "Kantin fiyatı 30 TL olan bir piyasada satıyor. Fiyat alıcı olduğu için her ek parti 30 TL getirir: MR = P = 30.", goster: ["mc", "mr"] },
              { metin: "==4. parti== (x ≈ 3,5): MC = 9, MR = 30. MC < MR; bu parti 21 TL kâr ekler: ==üret.==", goster: ["b4", "ok4"] },
              { metin: "==6. parti== (x ≈ 5,5): MC = 39, MR = 30. MC > MR; bu parti 9 TL zarar ettirir: ==üretme.==", goster: ["b6", "ok6"] },
              { metin: "Fiyat çizgisi MC'yi Q∗ = 5 civarında keser: 5 partiye kadar MR ≥ MC, sonrasında MR < MC. Kâr maksimizasyonu noktası bu kesişimdir.",
                goster: ["e"], gizle: ["b4", "ok4", "b6", "ok6"] },
              { metin: "Kâr = (P − ATC) × Q. Q∗ = 5'te ATC = 21: ==(30 − 21) × 5 = 45 TL== kâr (yeşil dikdörtgen).", goster: ["atc", "pa", "kar"] }
            ] },
          { tip: "not", metin: "Grafikte üç adım izle: (1) MR çizgisinin MC'yi yükselen kolda kestiği yeri bul, bu Q∗'dır. (2) Q∗'dan yukarı çıkıp fiyatı (P) oku. (3) Aynı Q∗'dan ATC eğrisine bak; P ile ATC'nin farkı birim kârdır, Q∗ ile çarpınca toplam kâr çıkar." }
        ]
      },
      {
        baslik: "Alıştırma: başka bir fiyatta Q∗ ve kâr",
        kisa: "Fiyat değişirse MR çizgisi kayar; Q∗ ve kâr yeniden hesaplanır.",
        bloklar: [
          { tip: "ornek", baslik: "Fiyat 24 TL olursa", durum: "Aynı kantin; fiyat 24 TL (MR = 24). MC değerleri 9, 3, 3, 9, 21, 39. TC(5) = 105. Kâr maksimize eden Q∗ ve kâr kaç?",
            adimlar: [
              "MR = 24'ü MC ile karşılaştır: 5. parti MC = 21 < 24 (üret), 6. parti MC = 39 > 24 (üretme). Q∗ = 5.",
              "TR = 24 × 5 = 120. TC(5) = 105.",
              "Kâr = 120 − 105 = 15 TL. Kontrol: (P − ATC) × Q = (24 − 21) × 5 = 15."
            ],
            sonuc: "Q∗ = 5 parti, kâr 15 TL. Fiyat 30'dan 24'e inince Q∗ aynı kaldı ama kâr 45'ten 15'e düştü." },
          { tip: "tablo", baslik: "İki fiyat, iki sonuç", head: ["Fiyat (MR)", "Q∗", "TR", "TC", "Kâr"], rows: [
              ["30", "5", "150", "105", "45"],
              ["24", "5", "120", "105", "15"]
            ], not: "MC'nin yükselen kolunda fiyat değiştikçe Q∗ hareket eder; burada iki fiyat da 5. partinin MC'sinden (21) büyük ve 6.'nın MC'sinden (39) küçük olduğu için Q∗ değişmedi." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "TR = P × Q; MR = ΔTR ÷ ΔQ; AR = TR ÷ Q = P. Fiyat alıcı firmada MR = P sabittir.",
              "Kâr = TR − TC. Tabloda kârı en yüksek yapan Q, en iyi üretimdir.",
              "Kural: MR > MC ise üretimi artır, MR < MC ise azalt; MR = MC olan Q kârı maksimize eder.",
              "Kesişim MC'nin yükselen kolunda olmalıdır.",
              "Grafikte: MR çizgisi ile MC'nin kesişimi Q∗'ı, o Q'daki P ile ATC farkı birim kârı verir.",
              "Toplam kâr = (P − ATC) × Q∗. Sonuç pozitif, sıfır ya da negatif olabilir.",
              "MR = MC, \"kâr sıfır\" ya da \"ATC en düşük\" demek değildir.",
              "Karar sıradaki birime göre verilir; toplam gelir toplam maliyetten büyük diye üretim sürdürülmez."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Fiyat alıcı bir firma ürününü 10 TL'ye satıyor. Toplam maliyeti aşağıdadır. Kârı maksimize eden Q kaçtır?",
        fig: { type: "table", head: ["Q", "TC (TL)"], rows: [[0, 6], [1, 12], [2, 16], [3, 22], [4, 30], [5, 42]], caption: "P = MR = 10 TL" },
        opts: ["2", "3", "5", "4"], a: 3,
        why: "MC değerleri: 6, 4, 6, 8, 12. 4. birimin MC'si 8 < MR = 10 (üret); 5. birimin MC'si 12 > 10 (üretme). Q∗ = 4: kâr = 40 − 30 = 10 TL (Q = 3'te 8, Q = 5'te 8). Q = 5 çekicidir ama 5. birim MC = 12 ile 10 TL'lik MR'yi aşar." },
      { q: "Fiyat alıcı bir firmanın MR'si 12 TL'dir. 6. birimin MC'si 11 TL, 7. birimin MC'si 15 TL'dir. Kâr maksimize eden firma kaç birim üretir?",
        opts: ["6", "7", "5", "Verilen bilgiyle belirlenemez"], a: 0,
        why: "6. birimde MR (12) > MC (11): üretilir. 7. birimde MR (12) < MC (15): üretilmez. Q∗ = 6. \"Daha çok üretirsem daha çok gelir\" düşüncesi 7'yi çekici gösterir; ama 7. birim kârı 3 TL azaltır." },
      { q: "Grafikte bir firmanın yükselen MC eğrisi ve fiyat çizgisi (MR) gösteriliyor. Kâr maksimize eden Q kaçtır?",
        fig: { type: "graph", xlabel: "Q", ylabel: "TL", xmax: 10, ymax: 14, lines: [{ from: [0, 2], to: [10, 12], label: "MC" }], hlines: [{ p: 7, label: "MR = P = 7" }], xticks: [{ v: 3, label: "3" }, { v: 5, label: "5" }, { v: 7, label: "7" }], yticks: [{ v: 7, label: "7" }] },
        opts: ["3", "5", "7", "10"], a: 1,
        why: "MC doğrusu Q = 0'da 2'den başlayıp birim başına 1 TL artıyor: MC = 2 + Q. MR = 7 olduğunda 2 + Q = 7, Q = 5. 3'te MC = 5 < 7 (üretimi artır), 7'de MC = 9 > 7 (üretimi azalt)." },
      { q: "MR = MC kuralıyla ilgili hangisi doğrudur?",
        opts: ["MR = MC olduğu Q'da kâr her zaman sıfırdır.", "MR < MC ise firma üretimi artırarak kârını yükseltir.", "MR = MC olan Q'da kâr pozitif, sıfır ya da negatif olabilir; bu Q kârı en çok (ya da zararı en az) yapar.", "Firma, ATC'nin en düşük olduğu Q'yu üretir."], a: 2,
        why: "MR = MC yalnızca en iyi Q'yu verir; kârın işareti (P − ATC) × Q ile ayrıca bulunur. A çekici bir hatadır. B ters: MR < MC ise üretimi azaltmak gerekir. D yanlış: kâr maksimizasyonu ATC'nin dibiyle değil MR = MC ile belirlenir." },
      { q: "Kantin fiyatı 24 TL'dir (MR = 24). MC değerleri Q = 1…6 için 9, 3, 3, 9, 21, 39'dur. Toplam maliyet tablosu aşağıdadır. Kâr maksimize eden Q ve kâr hangisidir?",
        fig: { type: "table", head: ["Q", "TC (TL)"], rows: [[0, 60], [1, 69], [2, 72], [3, 75], [4, 84], [5, 105], [6, 144]], caption: "FC = 60" },
        opts: ["Q = 4, kâr 12 TL", "Q = 5, kâr 15 TL", "Q = 6, kâr 0 TL", "Q = 5, kâr 45 TL"], a: 1,
        why: "5. parti: MC 21 < 24 (üret); 6. parti: MC 39 > 24 (üretme). Q∗ = 5. Kâr = 24 × 5 − 105 = 15 TL. Q = 4'te kâr 96 − 84 = 12 (daha az); Q = 6'da 144 − 144 = 0. 45 TL, fiyat 30 iken bulunan kârdır." }
    ]
  };
})();
