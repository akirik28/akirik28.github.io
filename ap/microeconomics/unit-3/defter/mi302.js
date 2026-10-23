/* Kitpath not defteri · mi302 · 3.2 Kısa Dönem Maliyetler
   Kaynak: AP Micro CED, Topic 3.2 (PRD-1.A.4–8). Blok türleri: /ap/_kit/defter.js başı.
   Kantin maliyet verisi (unit 3'ün ortak tablosu): FC = 60; VC(Q) = Q³ − 6Q² + 14Q.
   Q=1…6: VC 9,12,15,24,45,84 · TC 69,72,75,84,105,144 · MC 9,3,3,9,21,39
          AFC 60,30,20,15,12,10 · AVC 9,6,5,6,9,14 · ATC 69,36,25,21,21,24.
   Grafik: AVC ve ATC tam formülle (AVC = x² − 6x + 14, AFC = 60/x); MC, tablodaki artışlar aralık ortasına (0,5; 1,5 …) çizilir. */
window.DEFTER = (function () {
  function pts(f, a, b, s) {
    var r = [], x;
    for (x = a; x <= b + 1e-9; x += s) r.push([Math.round(x * 100) / 100, Math.round(f(x) * 100) / 100]);
    return r;
  }
  var avc = function (x) { return x * x - 6 * x + 14; };
  var MC0 = [[0.5, 9], [1.5, 3], [2.5, 3], [3.5, 9], [4.5, 21], [5.5, 39]];
  function mcK(k) { return MC0.map(function (p) { return [p[0], Math.round(p[1] * k * 100) / 100]; }); }
  /* Durum: yalnız `acik` listesindeki ögeler görünür */
  function ac(metin, acik, tumu) {
    return { metin: metin, goster: acik, gizle: tumu.filter(function (x) { return acik.indexOf(x) < 0; }) };
  }
  var KAY = ["mc", "atc", "mck", "atck", "mc1", "atc1", "ok1", "mc2", "atc2", "ok2", "atc3", "ok3"];
  var TICKS = [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }];

  return {
    slug: "mi302",
    amac: "Bu konu bir firmanın kısa dönemde üretim arttıkça maliyetlerinin nasıl değiştiğini anlatıyor. Sabit ve değişken maliyeti, MC, AFC, AVC ve ATC'yi tablodan hesaplamayı, eğrilerin şeklini ve nasıl kaydığını öğreneceksin.",
    bolumler: [
      {
        baslik: "Sabit ve değişken maliyet: *FC*, *VC*, *TC*",
        kisa: "Sabit maliyet üretim sıfırken de ödenir; toplam maliyet ikisinin toplamıdır.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "*Fixed cost* (FC)", alt: "kira, fırın taksiti" }, "+",
              { t: "*Variable cost* (VC)", alt: "un, peynir, işçi" }, "=",
              { t: "*Total cost* (TC)", alt: "toplam maliyet" }
            ] },
          { tip: "kavramlar", kartlar: [
              { ikon: "🏠", terim: "Fixed cost", tr: "sabit maliyet", tanim: "Üretim miktarıyla değişmeyen maliyet. ==Üretim sıfır olsa bile aynen ödenir.==", ornek: "Kantinin günlük 60 TL kira ve makine payı." },
              { ikon: "🧀", terim: "Variable cost", tr: "değişken maliyet", tanim: "Üretim arttıkça artan maliyet. Üretim sıfırken sıfırdır.", ornek: "Ekmek, peynir ve ek işçi ücreti." }
            ] },
          { tip: "ikili", sol: { ikon: "🏠", baslik: "*Fixed cost*", maddeler: ["Q değişse de aynı", "Q = 0'da bile ödenir"] },
            sag: { ikon: "🧀", baslik: "*Variable cost*", maddeler: ["Q arttıkça artar", "Q = 0'da sıfırdır"] },
            oyun: [
              { metin: "Kantinin aylık kirası.", cevap: "sol", neden: "Tost yapılsa da yapılmasa da aynı: FC." },
              { metin: "Tost ekmeği ve peyniri.", cevap: "sag", neden: "Ne kadar tost, o kadar malzeme: VC." },
              { metin: "Fırın için ödenen kredi taksiti.", cevap: "sol", neden: "Üretimden bağımsız sözleşme: FC." },
              { metin: "Yoğun saatler için çağrılan ek işçinin ücreti.", cevap: "sag", neden: "Üretimle birlikte artar: VC." }
            ] },
          { tip: "tuzak", metin: "Kantin bir gün hiç tost yapmasa bile kirayı ödemek zorundadır.", yanlis: "Üretimi durdurursam sabit maliyet sıfırlanır.", dogru: "*Short run*'da FC, üretim sıfır dahil bütün çıktı düzeylerinde aynı kalır. Q = 0'da TC = FC'dir." }
        ]
      },
      {
        baslik: "Maliyet tablosu: altı ölçüyü hesapla",
        kisa: "MC, AFC, AVC ve ATC aynı tablodan birkaç bölmeyle çıkar.",
        bloklar: [
          { tip: "tablo", baslik: "Hangi ölçü nasıl hesaplanır?", head: ["Ölçü", "Hesap", "Ne söyler?"], rows: [
              ["*Total cost* (TC)", "FC + VC", "Bütün maliyet"],
              ["*Marginal cost* (MC)", "ΔTC ÷ ΔQ", "Bir birim daha üretmenin ek maliyeti"],
              ["*Average fixed cost* (AFC)", "FC ÷ Q", "Birim başına sabit maliyet"],
              ["*Average variable cost* (AVC)", "VC ÷ Q", "Birim başına değişken maliyet"],
              ["*Average total cost* (ATC)", "TC ÷ Q = AFC + AVC", "Birim başına toplam maliyet"]
            ], not: "FC sabit olduğundan ΔTC = ΔVC'dir; MC'yi ikisinden biriyle de bulabilirsin." },
          { tip: "tablo", baslik: "Kantin: günlük tost partisi başına maliyetler (TL)", head: ["Q", "FC", "VC", "TC", "MC", "AFC", "AVC", "ATC"], rows: [
              ["0", "60", "0", "60", "—", "—", "—", "—"],
              ["1", "60", "9", "69", "9", "60", "9", "69"],
              ["2", "60", "12", "72", "3", "30", "6", "36"],
              ["3", "60", "15", "75", "3", "20", "5", "25"],
              ["4", "60", "24", "84", "9", "15", "6", "21"],
              ["5", "60", "45", "105", "21", "12", "9", "21"],
              ["6", "60", "84", "144", "39", "10", "14", "24"]
            ], vurgu: 5, not: "AVC en düşük değerine Q = 3'te (5 TL), ATC ise Q = 4–5'te (21 TL) ulaşıyor. MC önce 9'dan 3'e düşüp sonra 39'a çıkıyor." },
          { tip: "ornek", baslik: "Q = 4 için bütün ölçüleri bul", durum: "Tabloda Q = 4'te FC = 60, VC = 24, TC = 84. Q = 3'te TC = 75. MC, AFC, AVC ve ATC kaç?",
            adimlar: [
              "MC = (84 − 75) ÷ (4 − 3) = 9.",
              "AFC = 60 ÷ 4 = 15. AVC = 24 ÷ 4 = 6.",
              "ATC = 84 ÷ 4 = 21. Kontrol: AFC + AVC = 15 + 6 = 21."
            ],
            sonuc: "MC = 9, AFC = 15, AVC = 6, ATC = 21." },
          { tip: "tuzak", metin: "ATC ve MC'nin formülleri birbirine çok benzer; biri TC'nin kendisine, öbürü TC'nin değişimine bakar.", yanlis: "MC = TC ÷ Q.", dogru: "TC ÷ Q, ATC'dir. MC = ΔTC ÷ ΔQ: son birimin eklediği maliyet." }
        ]
      },
      {
        baslik: "MC neden önce düşer, sonra yükselir?",
        kisa: "Uzmanlaşma MC'yi başta düşürür; azalan marjinal getiri sonra yükseltir.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "MC", alt: "ek birimin maliyeti" }, "=",
              { t: "w ÷ MP", alt: "ücret ÷ marjinal ürün" }
            ], aciklama: "Değişken girdi yalnızca işçiyse, ek işçi w TL'ye mal olur ve MP kadar ek çıktı verir; ek çıktının birim maliyeti w ÷ MP'dir. MP artınca MC düşer, MP azalınca MC yükselir." },
          { tip: "kavramlar", kartlar: [
              { ikon: "🎯", terim: "Specialization", tr: "uzmanlaşma", tanim: "Her işçinin tek bir işte ustalaşması. Çıktı artar, ek birimin maliyeti düşer.", ornek: "Biri hamuru açar, biri peyniri koyar, biri fırına verir." },
              { ikon: "🧩", terim: "Division of labor", tr: "iş bölümü", tanim: "Üretim sürecinin parçalara bölünüp işçiler arasında paylaştırılması. MC'yi ilk birimlerde azaltır.", ornek: "Tek kişi baştan sona tost yapmaz; sıra çalışır." }
            ] },
          { tip: "ornek", baslik: "MP düşerken MC nasıl yükselir?", durum: "Kantinde tek değişken girdi işçi; günlüğü 60 TL. Farklı MP düzeylerinde ek bir tostun maliyetini bulalım.",
            adimlar: [
              "MP = 12 tost: MC = 60 ÷ 12 = 5 TL.",
              "MP = 6 tost: MC = 60 ÷ 6 = 10 TL.",
              "MP = 4 tost: MC = 60 ÷ 4 = 15 TL."
            ],
            sonuc: "MP yarıya inince MC iki katına çıkıyor. Azalan marjinal getiri (Konu 3.1), MC eğrisinin yükselen kolunun nedenidir." }
        ]
      },
      {
        baslik: "Maliyet eğrileri: şekil ve kesişmeler",
        kisa: "MC, AVC ve ATC'yi en düşük noktalarından keser; AFC sürekli düşer.",
        bloklar: [
          { tip: "grafik", baslik: "Kantinin maliyet eğrileri", xlabel: "Üretim (Q, parti)", ylabel: "Maliyet (TL)", xmax: 7, ymax: 44,
            xticks: TICKS, yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }, { v: 21, label: "21" }, { v: 30, label: "30" }, { v: 40, label: "40" }],
            ogeler: [
              { id: "mc", tip: "egri", renk: 3, noktalar: MC0, etiket: "MC" },
              { id: "avc", tip: "egri", renk: 2, noktalar: pts(avc, 1, 6.5, 0.5), etiket: "AVC", gizli: true },
              { id: "atc", tip: "egri", renk: 0, noktalar: pts(function (x) { return avc(x) + 60 / x; }, 2, 6.5, 0.5), etiket: "ATC", gizli: true },
              { id: "afc", tip: "egri", renk: 1, noktalar: pts(function (x) { return 60 / x; }, 1.5, 6.5, 0.5), etiket: "AFC", gizli: true },
              { id: "pavc", tip: "nokta", renk: 2, x: 3, y: 5, etiket: "AVC min = 5", kilavuz: true, gizli: true },
              { id: "patc", tip: "nokta", renk: 0, x: 4.5, y: 20.8, etiket: "ATC min ≈ 21", kilavuz: true, gizli: true },
              { id: "g2", tip: "cizgi", renk: 1, kesik: true, from: [2, 6], to: [2, 36], etiket: "AFC = 30", gizli: true },
              { id: "g5", tip: "cizgi", renk: 1, kesik: true, from: [5, 21], to: [5, 9], etiket: "AFC = 12", gizli: true }
            ],
            durumlar: [
              { metin: "==MC:== ilk partilerde düşer (uzmanlaşma), sonra yükselir (azalan marjinal getiri). Eğri partilerin ortasına çizilir: 9, 3, 3, 9, 21, 39." },
              { metin: "==AVC== de U şeklindedir. MC, AVC'nin altındayken AVC düşer, üstüne çıkınca AVC yükselir. MC, AVC'yi ==en düşük noktasında== (Q = 3, AVC = 5) keser.", goster: ["avc", "pavc"] },
              { metin: "==ATC== de U şeklindedir, ama en düşük noktası daha sağda (Q = 4–5 arası, ATC = 21). MC, ATC'yi de ==en düşük noktasında== keser.", goster: ["atc", "patc"] },
              { metin: "==AFC== sürekli düşer (60 ÷ Q): sabit maliyet daha çok birime bölünür.", goster: ["afc"] },
              { metin: "ATC = AFC + AVC: iki eğri arasındaki dikey fark AFC'dir. Q = 2'de 36 − 6 = 30; Q = 5'te 21 − 9 = 12. Fark daraldığı için ATC'nin dibi AVC'ninkinden sağdadır.", goster: ["g2", "g5"] },
              { metin: "Özet: MC her iki ortalamayı da kendi minimumlarında keser; AVC'nin dibi (Q = 3), ATC'nin dibinden (Q = 4–5) önce gelir." }
            ] },
          { tip: "ikili", sol: { ikon: "⬇️", baslik: "MC < ortalama", maddeler: ["Yeni birim ortalamadan ucuz", "AVC / ATC düşer"] },
            sag: { ikon: "⬆️", baslik: "MC > ortalama", maddeler: ["Yeni birim ortalamadan pahalı", "AVC / ATC yükselir"] },
            oyun: [
              { metin: "3. parti: MC = 3, önceki AVC = 6.", cevap: "sol", neden: "3 < 6: AVC 6'dan 5'e düştü." },
              { metin: "4. parti: MC = 9, önceki AVC = 5.", cevap: "sag", neden: "9 > 5: AVC 5'ten 6'ya çıktı." },
              { metin: "6. parti: MC = 39, önceki ATC = 21.", cevap: "sag", neden: "39 > 21: ATC 21'den 24'e çıktı." },
              { metin: "2. parti: MC = 3, önceki ATC = 69.", cevap: "sol", neden: "3 < 69: ATC 69'dan 36'ya düştü." }
            ] },
          { tip: "tuzak", metin: "MC'nin dibi, AVC'nin dibi ve ATC'nin dibi üç ayrı yerdedir: soldan sağa MC (Q = 2–3), AVC (Q = 3), ATC (Q = 4–5).", yanlis: "MC, ATC'yi MC'nin en düşük noktasında keser.", dogru: "MC, ortalama eğrileri ==ortalamaların== en düşük noktasında keser; MC'nin kendi dibi bundan daha soldadır." }
        ]
      },
      {
        baslik: "Maliyet eğrileri nasıl kayar?",
        kisa: "Girdi fiyatı ve verimlilik eğrileri kaydırır; yalnızca FC değişirse MC kaymaz.",
        bloklar: [
          { tip: "grafik", baslik: "Ücret artışı, verimlilik artışı ve kira artışı", xlabel: "Üretim (Q, parti)", ylabel: "Maliyet (TL)", xmax: 7, ymax: 48,
            xticks: TICKS, yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }, { v: 40, label: "40" }],
            ogeler: [
              { id: "mc", tip: "egri", renk: 3, noktalar: MC0, etiket: "MC" },
              { id: "atc", tip: "egri", renk: 0, noktalar: pts(function (x) { return avc(x) + 60 / x; }, 2.5, 6.5, 0.5), etiket: "ATC" },
              { id: "mck", tip: "egri", renk: 3, kesik: true, noktalar: MC0, etiket: "", gizli: true },
              { id: "atck", tip: "egri", renk: 0, kesik: true, noktalar: pts(function (x) { return avc(x) + 60 / x; }, 2.5, 6.5, 0.5), etiket: "", gizli: true },
              { id: "mc1", tip: "egri", renk: 2, noktalar: mcK(1.2), etiket: "MC₁", gizli: true },
              { id: "atc1", tip: "egri", renk: 2, noktalar: pts(function (x) { return 1.2 * avc(x) + 60 / x; }, 2.5, 6.5, 0.5), etiket: "ATC₁", gizli: true },
              { id: "ok1", tip: "ok", renk: 2, from: [4.5, 21], to: [4.5, 25.2], gizli: true },
              { id: "mc2", tip: "egri", renk: 2, noktalar: mcK(0.8), etiket: "MC₂", gizli: true },
              { id: "atc2", tip: "egri", renk: 2, noktalar: pts(function (x) { return 0.8 * avc(x) + 60 / x; }, 2.5, 6.5, 0.5), etiket: "ATC₂", gizli: true },
              { id: "ok2", tip: "ok", renk: 2, from: [4.5, 21], to: [4.5, 16.8], gizli: true },
              { id: "atc3", tip: "egri", renk: 2, noktalar: pts(function (x) { return avc(x) + 90 / x; }, 2.5, 6.5, 0.5), etiket: "ATC₃", gizli: true },
              { id: "ok3", tip: "ok", renk: 2, from: [6, 24], to: [6, 28.6], gizli: true }
            ],
            durumlar: [
              ac("Başlangıç: kantinin MC ve ATC eğrileri.", ["mc", "atc"], KAY),
              ac("İşçi ücreti ==%20 artıyor==: bütün değişken maliyet (işçi) pahalanır. MC ve ATC ==yukarı== kayar (eski eğriler kesikli).", ["mck", "atck", "mc1", "atc1", "ok1"], KAY),
              ac("Eğitimle ve yeni makineyle işçilerin verimi artıyor (MP ↑): MC = w ÷ MP düşer. MC ve ATC ==aşağı== kayar.", ["mck", "atck", "mc2", "atc2", "ok2"], KAY),
              ac("Kira 60'tan 90 TL'ye çıkıyor (FC ↑): yalnızca ==ATC== (ve AFC) yukarı kayar. ==MC aynı kalır==, çünkü ek birimin maliyeti kiradan etkilenmez.", ["mc", "atck", "atc3", "ok3"], KAY)
            ] },
          { tip: "tablo", baslik: "Ne değişirse hangi eğri kayar?", head: ["Olay", "Kayan eğriler", "Yön"], rows: [
              ["İşçi ücreti ya da girdi fiyatı artar", "MC, AVC, ATC", "Yukarı"],
              ["Verimlilik (MP) artar: eğitim, teknoloji", "MC, AVC, ATC", "Aşağı"],
              ["Kira, makine taksiti gibi FC artar", "AFC ve ATC (MC ve AVC kaymaz)", "Yukarı"],
              ["Üretim miktarı artar", "Hiçbiri; aynı eğri üzerinde hareket", "—"]
            ], not: "Girdi fiyatı ve verimlilik değişimleri değişken maliyeti etkilediği için MC'yi kaydırır. FC değişimi MC'yi kaydırmaz." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "TC = FC + VC. FC üretim sıfır dahil her Q'da aynıdır; VC Q ile artar.",
              "MC = ΔTC ÷ ΔQ; AFC = FC ÷ Q; AVC = VC ÷ Q; ATC = TC ÷ Q = AFC + AVC.",
              "MC = w ÷ MP: MP yükselince MC düşer, azalan marjinal getiri başlayınca MC yükselir.",
              "Uzmanlaşma ve iş bölümü MC'yi başlangıçta düşürür; azalan marjinal getiri MC'yi sonra yükseltir. MC U şeklindedir.",
              "MC, AVC'yi ve ATC'yi kendi en düşük noktalarında keser. AFC sürekli düşer.",
              "AVC'nin dibi, ATC'nin dibinden daha solda (daha küçük Q'da) olur, çünkü ATC = AVC + AFC.",
              "Girdi fiyatı ve verimlilik değişimi MC, AVC, ATC'yi kaydırır; FC değişimi yalnızca AFC ve ATC'yi kaydırır.",
              "Üretim miktarı değişince eğri kaymaz; eğri üzerinde hareket edilir."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Bir simit fırınının toplam maliyet tablosu aşağıdadır. 3. birimin marjinal maliyeti (MC) kaç TL'dir?",
        fig: { type: "table", head: ["Q", "TC (TL)"], rows: [[0, 30], [1, 50], [2, 66], [3, 80], [4, 98]], caption: "Q = 0'da TC = 30" },
        opts: ["26,7", "14", "50", "30"], a: 1,
        why: "MC = ΔTC ÷ ΔQ = (80 − 66) ÷ (3 − 2) = 14 TL. 26,7 en çekici yanlış şıktır: 80 ÷ 3 = 26,7 ATC'dir, MC değil. 30 ise sabit maliyettir (Q = 0'daki TC)." },
      { q: "Bir atölyenin sabit maliyeti 30 TL'dir. 5 birim üretirken toplam maliyeti 80 TL'dir. Q = 5'te AVC kaç TL'dir?",
        opts: ["16", "6", "10", "50"], a: 2,
        why: "VC = TC − FC = 80 − 30 = 50. AVC = VC ÷ Q = 50 ÷ 5 = 10 TL. 16 ATC'dir (80 ÷ 5), 6 ise AFC'dir (30 ÷ 5); ikisi de farklı ölçüler. 50 toplam değişken maliyettir, ortalaması değildir." },
      { q: "Bir firmada Q = 10'da MC eğrisi ATC eğrisinin altındadır. Bu noktada ATC için ne söylenebilir?",
        opts: ["ATC düşmektedir.", "ATC yükselmektedir.", "ATC tam en düşük noktasındadır.", "ATC sabittir."], a: 0,
        why: "MC < ATC ise yeni birim ortalamadan ucuzdur ve ATC'yi aşağı çeker. MC ancak ATC'nin minimumunda ATC'ye eşit olur; MC ATC'nin üstüne çıkınca ATC yükselir. \"MC düşüyorsa ATC de düşer\" yanlış bir genellemedir: kıyas MC'nin ATC'ye göre konumuna bağlıdır." },
      { q: "Bir pastanenin aylık kirası artıyor; başka hiçbir şey değişmiyor. Kısa dönemde hangisi doğrudur?",
        opts: ["MC ve ATC yukarı kayar.", "ATC (ve AFC) yukarı kayar; MC ve AVC kaymaz.", "Yalnızca MC yukarı kayar.", "AVC yukarı kayar; ATC kaymaz."], a: 1,
        why: "Kira bir sabit maliyettir. FC artınca AFC ve onunla birlikte ATC = AFC + AVC yükselir. MC ve AVC ise yalnızca değişken maliyete bağlıdır, kaymaz. En çekici yanlış şık A'dır: MC'nin de kiradan etkilendiğini sanmak." },
      { q: "Bir sandviç dükkânında ilk birkaç işçi eklendiğinde MC düşüyor, sonra yükseliyor. MC'nin başlangıçta düşmesinin temel nedeni hangisidir?",
        opts: ["Azalan marjinal getiri", "Sabit maliyetin artması", "Girdi fiyatlarının düşmesi", "Uzmanlaşma ve iş bölümü"], a: 3,
        why: "İlk işçilerde uzmanlaşma ve iş bölümü MP'yi artırır; MC = w ÷ MP düşer. MC'nin yükselen kolunun nedeni ise azalan marjinal getiridir; birinci şık o yüzden çekicidir ama MC'nin düşen kolunu değil yükselen kolunu açıklar. Girdi fiyatı düşerse eğri kayar, eğri üzerinde düşüş olmaz." }
    ]
  };
})();
