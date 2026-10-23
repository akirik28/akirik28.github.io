/* Kitpath not defteri · mi306 · 3.6 Üretme, Girme ve Çıkma Kararları
   Kaynak: AP Micro CED, Topic 3.6 (PRD-2.A.1–2). Blok türleri: /ap/_kit/defter.js başı.
   Unit 3'ün ortak kantin verisi (FC 60): VC 0,9,12,15,24,45,84 · MC 9,3,3,9,21,39 · AVC en düşük 5 (Q=3) · ATC en düşük 21 (Q=4–5).
   Karar tablosu: P=30 → Q 5, kâr 45 · P=21 → Q 5, kâr 0 · P=15 → Q 4, kâr −24 · P=5 → Q 3, kâr −60 (= −FC) · P=4 → kapat, kayıp 60.
   Piyasa grafiği: D: P = 51 − 0,6Q; S0: P = 19,5 + 0,3Q (7 firma, Q 35, P 30); S1: P = 6 + 0,3Q (10 firma, Q 50, P 21); S2: P = −3 + 0,3Q (15 firma × 4 = Q 60, P 15). */
window.DEFTER = (function () {
  function pts(f, a, b, s) {
    var r = [], x;
    for (x = a; x <= b + 1e-9; x += s) r.push([Math.round(x * 100) / 100, Math.round(f(x) * 100) / 100]);
    return r;
  }
  var avc = function (x) { return x * x - 6 * x + 14; };
  var MC0 = [[0.5, 9], [1.5, 3], [2.5, 3], [3.5, 9], [4.5, 21], [5.5, 39]];
  var TICKS = [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }];
  function ac(metin, acik, tumu) {
    return { metin: metin, goster: acik, gizle: tumu.filter(function (x) { return acik.indexOf(x) < 0; }) };
  }
  var F = ["p30", "p21", "p15", "p5", "p4", "n30", "n21", "n15", "n5", "z15"];
  var M = ["s0", "s0k", "s1", "s2", "s2k", "e0", "e1", "e2", "okG", "okC"];
  function pl(id, p, renk) { return { id: id, tip: "cizgi", renk: renk, kesik: true, from: [0, p], to: [6.2, p], etiket: "P = " + p, gizli: true }; }

  return {
    slug: "mi306",
    amac: "Bu konu firmanın kısa dönemde üretmeye devam edip etmeyeceğini ve uzun dönemde piyasaya girip çıkmayacağını anlatıyor. Kapanma kuralını (P ve AVC), kapanma noktasını ve kâr ile zararın girişi ve çıkışı nasıl harekete geçirdiğini öğreneceksin.",
    bolumler: [
      {
        baslik: "Kısa dönem: üret mi, kapat mı?",
        kisa: "Gelir, değişken maliyeti karşılıyorsa firma kısa dönemde üretmeye devam eder.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "TR", alt: "toplam gelir" }, "≥", { t: "VC", alt: "toplam değişken maliyet" },
              "⇔",
              { t: "P", alt: "fiyat" }, "≥", { t: "AVC", alt: "ortalama değişken maliyet" }
            ], aciklama: "Koşul sağlanıyorsa firma üretir (*operate*). Sağlanmıyorsa Q = 0 olur (*shut down*). İki yazım aynı kuraldır: TR = P × Q ve VC = AVC × Q olduğundan her iki taraf Q'ya bölünür." },
          { tip: "ikili", sol: { ikon: "🟢", baslik: "Üretmeye devam", maddeler: ["TR ≥ VC (P ≥ AVC)", "Gelir, FC'ye de katkı yapar"] },
            sag: { ikon: "🔴", baslik: "Kapat (Q = 0)", maddeler: ["TR < VC (P < AVC)", "Kayıp yalnızca FC'dir"] },
            oyun: [
              { metin: "P = 15, 4 parti üretirken AVC = 6.", cevap: "sol", neden: "15 > 6: her parti değişken maliyetini ve bir kısmı FC'yi karşılar." },
              { metin: "P = 4; AVC'nin en düşük değeri 5.", cevap: "sag", neden: "4 < 5: her Q'da gelir değişken maliyetin altında." },
              { metin: "TR = 48, VC = 24 (ATC > P olduğu için zarar var).", cevap: "sol", neden: "48 > 24: zarar olsa da kapatmak daha çok kaybettirir." },
              { metin: "TR = 12, VC = 15.", cevap: "sag", neden: "12 < 15: üretmek, kapatmaktan daha büyük kayıp." }
            ] },
          { tip: "tuzak", metin: "Kısa dönemde FC zaten harcanmış sayılır (sözleşme, taksit): kapatsan da ödersin. Bu yüzden karar yalnızca değişken maliyete bakar.", yanlis: "Zarar ediyorsam hemen kapatmalıyım.", dogru: "Zarar olsa bile gelir VC'yi karşılıyorsa (P ≥ AVC) devam et; kapatırsan FC'nin tamamını kaybedersin." }
        ]
      },
      {
        baslik: "Karşılaştır: devam mı, kapanma mı?",
        kisa: "Devam kaybı, kapanma kaybından (FC) küçükse firma üretmeye devam eder.",
        bloklar: [
          { tip: "tablo", baslik: "Kantin (FC = 60), farklı fiyatlarda MR = MC kararı", head: ["Fiyat", "Q", "TR", "VC", "TC", "Kâr", "Karar"], rows: [
              ["30", "5", "150", "45", "105", "45", "Üret (kâr)"],
              ["21", "5", "105", "45", "105", "0", "Üret (başa baş)"],
              ["15", "4", "60", "24", "84", "−24", "Üret (zarar 24 < 60)"],
              ["5", "3", "15", "15", "75", "−60", "Fark yok: kapanma noktası"],
              ["4", "3 (olsaydı)", "12", "15", "75", "−63", "Kapat: kayıp 60 < 63"]
            ], vurgu: 2, not: "Kapatınca kayıp her zaman FC'dir (60 TL). Üretmek kaybı 60'tan küçük tutuyorsa devam edilir." },
          { tip: "ornek", baslik: "P = 15 iken kantin ne yapmalı?", durum: "Fiyat 15 TL. MR = MC olan Q = 4. Tabloya göre VC(4) = 24, FC = 60. Üretmeye devam mı, kapatma mı?",
            adimlar: [
              "Devam: TR = 15 × 4 = 60. TC = 60 + 24 = 84. Kâr = 60 − 84 = −24.",
              "Kapat: gelir 0, VC 0; yalnızca FC kaybedilir: −60.",
              "Karşılaştır: −24 > −60. Ayrıca TR (60) > VC (24): fazla 36 TL, FC'nin bir kısmını öder."
            ],
            sonuc: "Üretmeye devam et: zarar 24 TL, kapatırsan 60 TL kaybedersin." }
        ]
      },
      {
        baslik: "Kapanma noktası grafikte",
        kisa: "Fiyat AVC'nin en düşük noktasının altına inince firma Q = 0'a geçer.",
        bloklar: [
          { tip: "grafik", baslik: "Altı fiyat, altı karar", xlabel: "Üretim (Q, parti)", ylabel: "TL", xmax: 7, ymax: 44,
            xticks: TICKS, yticks: [{ v: 5, label: "5" }, { v: 15, label: "15" }, { v: 21, label: "21" }, { v: 30, label: "30" }],
            ogeler: [
              { id: "mc", tip: "egri", renk: 3, noktalar: MC0, etiket: "MC" },
              { id: "avc", tip: "egri", renk: 2, noktalar: pts(avc, 1, 6.5, 0.5), etiket: "AVC" },
              { id: "atc", tip: "egri", renk: 0, noktalar: pts(function (x) { return avc(x) + 60 / x; }, 2, 6.5, 0.5), etiket: "ATC" },
              pl("p30", 30, 1), pl("p21", 21, 1), pl("p15", 15, 1), pl("p5", 5, 1), pl("p4", 4, 1),
              { id: "n30", tip: "nokta", renk: 1, x: 5, y: 30, etiket: "Q = 5", kilavuz: true, gizli: true },
              { id: "n21", tip: "nokta", renk: 1, x: 4.5, y: 21, etiket: "en düşük ATC", kilavuz: true, gizli: true },
              { id: "n15", tip: "nokta", renk: 1, x: 4, y: 15, etiket: "Q = 4", kilavuz: true, gizli: true },
              { id: "z15", tip: "alan", renk: 3, noktalar: [[0, 21], [4, 21], [4, 15], [0, 15]], gizli: true },
              { id: "n5", tip: "nokta", renk: 1, x: 3, y: 5, etiket: "kapanma noktası", kilavuz: true, gizli: true }
            ],
            durumlar: [
              ac("Kantinin üç eğrisi (Konu 3.2): MC, AVC ve ATC. Fiyatı değiştirip kararı izleyelim.", [], F),
              ac("P = 30 > ATC: ==ekonomik kâr==. Firma MR = MC noktasında Q = 5 üretir, kâr 45 TL.", ["p30", "n30"], F),
              ac("P = 21, ATC'nin en düşük noktası: ==başa baş==. Ekonomik kâr sıfır; firma bütün maliyetlerini (normal kâr dahil) tam karşılar.", ["p21", "n21"], F),
              ac("P = 15: AVC'nin üstünde, ATC'nin altında. Q = 4'te ==ekonomik zarar 24 TL== (mor alan) ama gelir VC'yi karşılıyor: ==üretmeye devam.==", ["p15", "n15", "z15"], F),
              ac("P = 5, AVC'nin en düşük noktası: ==kapanma noktası==. Gelir VC'ye eşit; üretmek de kapatmak da −60 TL (FC).", ["p5", "n5"], F),
              ac("P = 4 < en düşük AVC (5): her Q'da gelir VC'den küçük. ==Q = 0: kapat.== Kayıp yalnızca FC = 60 TL.", ["p4"], F)
            ] },
          { tip: "not", metin: "Firmanın kısa dönem arz eğrisi, MC eğrisinin AVC'nin en düşük noktasından (kapanma noktasından) yukarıdaki kısmıdır. Fiyat bu noktanın altına inerse arz edilen miktar sıfıra düşer." }
        ]
      },
      {
        baslik: "Uzun dönem: giriş ve çıkış",
        kisa: "Engel yoksa ekonomik kâr firmaları çeker, ekonomik zarar firmaları kovar.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🚪", terim: "Entry", tr: "piyasaya giriş", tanim: "Ekonomik kâr gören yeni firmaların piyasaya girmesi. Giriş, arzı artırır.", ornek: "Kantin kârlıysa yanına ikinci bir tostçu açılır." },
              { ikon: "🏃", terim: "Exit", tr: "piyasadan çıkış", tanim: "Ekonomik zarar bekleyen firmaların piyasadan ayrılması. Çıkış, arzı azaltır.", ornek: "Sürekli zarar eden tostçu dükkânını kapatır." },
              { ikon: "🚧", terim: "Barriers to entry", tr: "giriş engelleri", tanim: "Yeni firmanın girişini zorlaştıran şeyler (lisans, patent). Engel yoksa giriş ve çıkış serbesttir.", ornek: "Tost satmak için özel bir izin gerekmez." }
            ] },
          { tip: "ikili", sol: { ikon: "🚪", baslik: "Ekonomik kâr", maddeler: ["P > ATC", "Yeni firmalar girer"] },
            sag: { ikon: "🏃", baslik: "Ekonomik zarar", maddeler: ["P < ATC", "Firmalar çıkar"] },
            oyun: [
              { metin: "Fiyat 30 TL, firmaların ATC'si 21 TL (Q = 5'te).", cevap: "sol", neden: "30 > 21: kâr; yeni firmalar gelir." },
              { metin: "Fiyat 15 TL, ATC 21 TL; firmalar zarar ediyor ve bu devam edecek.", cevap: "sag", neden: "15 < 21: zarar; uzun dönemde firmalar çıkar." },
              { metin: "Bir tostçu ekonomik kâr ediyor, başkaları da bunu fark etti ve giriş serbest.", cevap: "sol", neden: "Engel yok, kâr var: yeni firmalar girer." },
              { metin: "Piyasadaki firmalar kalıcı olarak ekonomik zarar bekliyor.", cevap: "sag", neden: "Zarar beklentisi çıkışı getirir." }
            ] },
          { tip: "tuzak", metin: "Kısa dönemde kapanma kuralı AVC ile, uzun dönemde çıkış kuralı ATC ile işler.", yanlis: "Uzun dönemde de P < AVC iken firma çıkar.", dogru: "Uzun dönemde sabit maliyet kalmadığı için tek ölçüt ekonomik zarardır: P < ATC bekleniyorsa firma çıkar. P < AVC, kısa dönemde üretimi durdurur." }
        ]
      },
      {
        baslik: "Giriş ve çıkış fiyatı nasıl hareket ettirir?",
        kisa: "Giriş arzı artırıp fiyatı düşürür; çıkış arzı azaltıp fiyatı yükseltir.",
        bloklar: [
          { tip: "grafik", baslik: "Piyasa: kâr, giriş, zarar, çıkış", xlabel: "Piyasa miktarı (Q)", ylabel: "Fiyat (TL)", xmax: 80, ymax: 44,
            xticks: [{ v: 35, label: "35" }, { v: 50, label: "50" }, { v: 60, label: "60" }], yticks: [{ v: 15, label: "15" }, { v: 21, label: "21" }, { v: 30, label: "30" }],
            ogeler: [
              { id: "d", tip: "cizgi", renk: 0, from: [11.67, 44], to: [75, 6], etiket: "D" },
              { id: "s0", tip: "cizgi", renk: 1, from: [0, 19.5], to: [80, 43.5], etiket: "S₀" },
              { id: "s0k", tip: "cizgi", renk: 1, kesik: true, from: [0, 19.5], to: [80, 43.5], etiket: "", gizli: true },
              { id: "s1", tip: "cizgi", renk: 2, from: [0, 6], to: [80, 30], etiket: "S₁", gizli: true },
              { id: "s2", tip: "cizgi", renk: 3, from: [10, 0], to: [80, 21], etiket: "S₂", gizli: true },
              { id: "s2k", tip: "cizgi", renk: 3, kesik: true, from: [10, 0], to: [80, 21], etiket: "", gizli: true },
              { id: "e0", tip: "nokta", renk: 1, x: 35, y: 30, etiket: "E₀", kilavuz: true },
              { id: "e1", tip: "nokta", renk: 2, x: 50, y: 21, etiket: "E₁", kilavuz: true, gizli: true },
              { id: "e2", tip: "nokta", renk: 3, x: 60, y: 15, etiket: "E₂", kilavuz: true, gizli: true },
              { id: "okG", tip: "ok", renk: 2, from: [16, 24], to: [59, 24], gizli: true },
              { id: "okC", tip: "ok", renk: 3, from: [69, 18], to: [41, 18], gizli: true }
            ],
            durumlar: [
              ac("Piyasada 7 firma var, her biri 5 parti üretiyor. D ile S₀ kesişir: ==fiyat 30, miktar 35==. Her firma 45 TL kâr yapıyor.", ["d", "s0", "e0"], M),
              ac("Kâr haberi yayılır. Giriş engeli olmadığı için yeni firmalar girer: arz ==sağa== kayar (S₀ kesikli).", ["d", "s0k", "s1", "e0", "okG"], M),
              ac("Firma sayısı 10'a çıkınca arz S₁ olur: ==fiyat 21, miktar 50==. Fiyat ATC'nin dibine indi, kâr sıfır; giriş durur.", ["d", "s1", "e1"], M),
              ac("Ters senaryo: 15 firma varken arz S₂. ==Fiyat 15 < ATC 21==: her firma 24 TL zarar ediyor (15 firma × 4 parti = 60).", ["d", "s2", "e2"], M),
              ac("Zararlı firmalar çıkar: arz ==sola== kayar (S₂ → S₁, eski S₂ kesikli). Fiyat 15'ten 21'e çıkar, zarar biter; çıkış durur.", ["d", "s1", "s2k", "e1", "e2", "okC"], M)
            ] },
          { tip: "adimlar", baslik: "Giriş ve çıkış zinciri", adimlar: [
              { baslik: "1 · Kâr (ya da zarar) var", metin: "P > ATC ise firmalar kâr eder; P < ATC ise zarar eder." },
              { baslik: "2 · Firmalar girer (ya da çıkar)", metin: "Kâr: yeni firmalar girer, arz artar. Zarar: firmalar çıkar, arz azalır." },
              { baslik: "3 · Fiyat ve kâr değişir", metin: "Arz sağa kayınca fiyat düşer, kâr azalır; sola kayınca fiyat yükselir, zarar azalır. Fiyat ATC'nin dibine gelince hareket durur." }
            ] }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Kısa dönemde firma, TR ≥ VC (yani P ≥ AVC) ise üretir; değilse Q = 0 (*shut down*).",
              "Kapatınca kayıp yalnızca FC'dir. Üretmek bundan küçük bir kayıp (ya da kâr) sağlıyorsa devam edilir.",
              "Kapanma noktası: P = AVC'nin en düşük değeri. Bunun altında Q = 0.",
              "P, AVC ile ATC arasındaysa firma zarar eder ama üretmeye devam eder.",
              "MC'nin AVC'nin dibinden yukarıdaki kısmı, firmanın kısa dönem arz eğrisidir.",
              "Uzun dönemde (engel yoksa): ekonomik kâr girişi, ekonomik zarar çıkışı doğurur.",
              "Giriş arzı sağa kaydırıp fiyatı düşürür; çıkış arzı sola kaydırıp fiyatı yükseltir; hareket ekonomik kâr sıfıra gelince durur.",
              "Tuzak: kısa dönem kapanma kuralı P < AVC, uzun dönem çıkış kuralı P < ATC'dir."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Fiyat alıcı bir firma Q = 10 üretiyor: P = 8 TL, AVC = 6 TL, ATC = 11 TL. Kısa dönemde ne yapmalıdır?",
        opts: ["Kapatmalı, çünkü ekonomik zarar ediyor.", "Üretmeye devam etmeli: zararı 30 TL, kapatırsa kaybı 50 TL (FC).", "Üretimi artırmalı, çünkü fiyat pozitif.", "Fiyat AVC'den küçük olduğu için kapatmalı."], a: 1,
        why: "P = 8 > AVC = 6: gelir değişken maliyeti karşılıyor. Devam edince zarar (11 − 8) × 10 = 30 TL; kapatınca kayıp FC = (11 − 6) × 10 = 50 TL. 30 < 50, bu yüzden devam. A en çekici yanlış şıktır: kısa dönemde zarar tek başına kapanma nedeni değildir. D yanlış: P (8) AVC'den (6) büyüktür." },
      { q: "Bir firma 8 birim üretirse TR = 40 TL, VC = 48 TL olacaktır. Sabit maliyet 30 TL'dir. Kısa dönemde en doğru karar hangisidir?",
        fig: { type: "table", head: ["TR", "VC", "FC"], rows: [[40, 48, 30]], caption: "Q = 8 iken (TL)" },
        opts: ["Üretmeye devam: TR, FC'yi karşılıyor.", "Üretmeye devam: kâr var.", "Üretimi artır.", "Kapat: TR < VC; kayıp 30 TL (FC), üretince kayıp 38 TL olur."], a: 3,
        why: "TR (40) < VC (48): P < AVC. Üretince kayıp = 40 − 48 − 30 = −38 TL; kapatınca −30 TL (FC). Kapatmak daha az kaybettirir. A çekicidir (TR 40, FC 30'dan büyük) ama değişken maliyeti karşılamıyorsa gelir FC'ye ulaşamaz." },
      { q: "Engel olmayan bir piyasada firmalar uzun dönemde ne zaman çıkar?",
        opts: ["P < AVC olduğunda", "Ekonomik zarar bekledikleri, yani P < ATC olduğunda", "Muhasebe kârı sıfır olduğunda", "Piyasaya giriş engeli bulunduğunda"], a: 1,
        why: "Uzun dönemde sabit maliyet kalmadığından ölçüt ekonomik zarardır: P < ATC. P < AVC kısa dönem kapanma kuralıdır (A çekici yanlış şıktır). C yanlış: kural muhasebe kârına değil ekonomik zarara dayanır." },
      { q: "Mükemmel rekabetçi bir piyasada fiyat, firmaların ATC'sinin üstündedir (firmalar ekonomik kâr ediyor) ve giriş engeli yoktur. Ne olur?",
        opts: ["Yeni firmalar girer; arz sağa kayar, fiyat düşer.", "Firmalar çıkar; arz sola kayar, fiyat yükselir.", "Talep sağa kayar.", "Hiçbir şey olmaz, kâr kalıcıdır."], a: 0,
        why: "Ekonomik kâr yeni firmaları çeker. Giriş arzı sağa kaydırır, fiyat düşer ve kâr sıfıra yaklaşır. B ters yöndür (zarar varsa olur). D yanlış: engel yokken ekonomik kâr uzun dönemde kalıcı değildir." },
      { q: "Grafik, fiyat alıcı bir piyasanın dengesini ve firmaların en düşük ATC'sini gösteriyor. Uzun dönemde ne beklenir?",
        fig: { type: "graph", xlabel: "Q", ylabel: "Fiyat", xmax: 10, ymax: 10, lines: [{ from: [1, 9], to: [9, 1], label: "D" }, { from: [1, 1], to: [9, 9], label: "S" }], points: [{ q: 5, p: 5, label: "E", guides: true }], hlines: [{ p: 3, label: "en düşük ATC = 3" }], yticks: [{ v: 3, label: "3" }, { v: 5, label: "5" }] },
        opts: ["Firmalar çıkar; arz sola kayar.", "Hiçbir hareket olmaz; piyasa uzun dönem dengesindedir.", "Yeni firmalar girer; arz sağa kayar ve fiyat 3'e doğru düşer.", "Talep eğrisi sola kayar."], a: 2,
        why: "Denge fiyatı 5, firmaların en düşük ATC'si 3: P > ATC, yani ekonomik kâr var. Engel yoksa yeni firmalar girer, arz sağa kayar, fiyat 3 civarına düşer ve kâr sıfırlanır. B en çekici yanlış şıktır: uzun dönem dengesi için P'nin en düşük ATC'ye eşit olması gerekir." }
    ]
  };
})();
