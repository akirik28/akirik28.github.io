/* Kitpath not defteri · mc407 · 4.7 Ödünç Fon Piyasası
   Kaynak: AP Macroeconomics CED, Topic 4.7 (MKT-4). Blok türleri: /ap/_kit/defter.js başı.
   Not: yardımcı işlevler yalnızca durumları üretir. Taban: D (1,9)→(9,1), S (1,1)→(9,9), denge (5,5);
   1 birim = %1 (dikey) ve 100 milyar TL (yatay). Kaymalar 2 birim. */
window.DEFTER = (function () {
  /* Durum: yalnız `acik` listesindeki ögeler görünür (eksiksiz ve güvenli) */
  function ac(tum) { return function (metin, acik) { return { metin: metin, goster: acik, gizle: tum.filter(function (x) { return acik.indexOf(x) < 0; }) }; }; }
  var acDenge = ac(["D", "S", "E", "h7", "pd7", "ps7", "g7", "t7", "okd", "td", "h3", "pd3", "ps3", "g3", "t3", "oku", "tu"]);
  var acKay = ac(["D", "S", "Dk", "Sk", "D1", "D2", "S1", "S2", "okDR", "okDL", "okSR", "okSL", "E0", "Edr", "Edl", "Esr", "Esl"]);
  var acDev = ac(["D", "S", "Dk", "D1", "Sk", "S1", "okR", "okC", "g6", "tg", "E0", "E1", "Ep", "E2"]);

  return {
    slug: "mc407",
    amac: "Bu konu borç verenlerle borç alanların buluştuğu ödünç fon piyasasını anlatıyor. Reel faizin nasıl belirlendiğini, ulusal tasarrufu, talep ve arz kaymalarını ve devlet borçlanmasının reel faizi neden yükselttiğini öğreneceksin.",
    bolumler: [
      {
        baslik: "Ödünç fon piyasası: tasarruf edenler ve borçlananlar",
        kisa: "Tasarruf edenler fon arz eder, borçlananlar fon talep eder; fiyat reel faizdir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🤝", terim: "Loanable funds market", tr: "ödünç fon piyasası", tanim: "Tasarruf edenlerin (arz) ve borçlananların (talep) buluştuğu piyasa. Fonun fiyatı reel faizdir.", ornek: "Harçlığını biriktiren öğrenci ile işini büyütmek isteyen kafe sahibi." },
              { ikon: "🏗️", terim: "Demand for loanable funds", tr: "ödünç fon talebi", tanim: "Borçlananların istediği fon. Reel faiz yükselirse istenen miktar azalır: talep aşağı eğimlidir.", ornek: "Kafe, faiz %3 iken yeni makine için borç alır; %9 iken vazgeçer." },
              { ikon: "🐷", terim: "Supply of loanable funds", tr: "ödünç fon arzı", tanim: "Tasarruf edenlerin sunduğu fon. Reel faiz yükselirse sunulan miktar artar: arz yukarı eğimlidir.", ornek: "Faiz yükselince harçlığın daha büyük kısmını tasarruf etmeye değer." }
            ] },
          { tip: "ikili", sol: { ikon: "💵", baslik: "Para piyasası (4.5)", maddeler: ["Dikey eksen: nominal faiz", "Arz dikey: Merkez Bankası belirler", "Kısa dönem para politikasını gösterir"] },
            sag: { ikon: "🏦", baslik: "Ödünç fon piyasası (4.7)", maddeler: ["Dikey eksen: reel faiz", "Arz yukarı eğimli: tasarruf edenler", "Devlet borçlanmasını ve tasarruf davranışını gösterir"] },
            oyun: [
              { metin: "Dikey eksende reel faiz var.", cevap: "sag", neden: "Ödünç fon piyasasında fiyat reel faizdir." },
              { metin: "Arz eğrisi dikey çizilir.", cevap: "sol", neden: "Para arzı faizden bağımsızdır." },
              { metin: "Arz yukarı eğimli: faiz arttıkça daha çok tasarruf edilir.", cevap: "sag", neden: "Tasarruf edenlerin arzı: ödünç fon." },
              { metin: "Merkez bankasının para politikası kısa dönemde burada görülür.", cevap: "sol", neden: "Para politikası nominal faizi etkiler." },
              { metin: "Devletin borçlanması burada görülür.", cevap: "sag", neden: "Devlet fon talep edenler arasına katılır." }
            ] }
        ]
      },
      {
        baslik: "Talep, arz ve denge reel faizi",
        kisa: "Denge reel faizinde istenen fon ile sunulan fon eşittir.",
        bloklar: [
          { tip: "ikili", sol: { ikon: "📉", baslik: "Talep: borçlananlar", maddeler: ["Reel faiz ↑ → borç pahalanır, projelerden vazgeçilir", "İstenen fon ↓: eğri aşağı eğimli"] },
            sag: { ikon: "📈", baslik: "Arz: tasarruf edenler", maddeler: ["Reel faiz ↑ → tasarruf daha kazançlı", "Sunulan fon ↑: eğri yukarı eğimli"] } },
          { tip: "grafik", baslik: "Ödünç fon piyasasında denge ve faizin ayarlanması", xlabel: "Ödünç fon miktarı (milyar TL)", ylabel: "Reel faiz", xmax: 11, ymax: 10,
            xticks: [{ v: 3, label: "300" }, { v: 5, label: "500" }, { v: 7, label: "700" }],
            yticks: [{ v: 3, label: "%3" }, { v: 5, label: "%5" }, { v: 7, label: "%7" }],
            ogeler: [
              { id: "D", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "D" },
              { id: "S", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "S" },
              { id: "E", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "E", kilavuz: true },
              { id: "h7", tip: "cizgi", renk: 3, kesik: true, from: [0, 7], to: [9, 7], etiket: "", gizli: true },
              { id: "pd7", tip: "nokta", renk: 3, x: 3, y: 7, etiket: "", gizli: true },
              { id: "ps7", tip: "nokta", renk: 3, x: 7, y: 7, etiket: "", gizli: true },
              { id: "g7", tip: "ok", renk: 3, from: [3.2, 7], to: [6.8, 7], gizli: true },
              { id: "t7", tip: "yazi", x: 5, y: 8.3, metin: "fon fazlası = 400", gizli: true },
              { id: "okd", tip: "ok", renk: 2, from: [9.4, 6.8], to: [9.4, 5.4], gizli: true },
              { id: "td", tip: "yazi", x: 9.7, y: 6.1, metin: "r ↓", hiza: "start", gizli: true },
              { id: "h3", tip: "cizgi", renk: 3, kesik: true, from: [0, 3], to: [9, 3], etiket: "", gizli: true },
              { id: "pd3", tip: "nokta", renk: 3, x: 7, y: 3, etiket: "", gizli: true },
              { id: "ps3", tip: "nokta", renk: 3, x: 3, y: 3, etiket: "", gizli: true },
              { id: "g3", tip: "ok", renk: 3, from: [6.8, 3], to: [3.2, 3], gizli: true },
              { id: "t3", tip: "yazi", x: 5, y: 1.9, metin: "fon açığı = 400", gizli: true },
              { id: "oku", tip: "ok", renk: 2, from: [9.4, 3.2], to: [9.4, 4.6], gizli: true },
              { id: "tu", tip: "yazi", x: 9.7, y: 3.9, metin: "r ↑", hiza: "start", gizli: true }
            ],
            durumlar: [
              acDenge("**Denge:** D ve S %5'te kesişir; borç almak isteyenler tam sunulan 500 milyar TL'yi ister. Denge reel faizi **%5**.", ["D", "S", "E"]),
              acDenge("Reel faiz denge üstünde, **%7**: istenen fon 300, sunulan fon 700. 400 milyar TL **fon fazlası** (*surplus*) var.", ["D", "S", "E", "h7", "pd7", "ps7", "g7", "t7"]),
              acDenge("Fon fazlası olan tasarruf edenler kredi bulmak için faizi kırar: reel faiz ==düşer== ve %5'e iner.", ["D", "S", "E", "h7", "pd7", "ps7", "g7", "t7", "okd", "td"]),
              acDenge("Reel faiz denge altında, **%3**: istenen fon 700, sunulan fon 300. 400 milyar TL **fon açığı** (*shortage*) var.", ["D", "S", "E", "h3", "pd3", "ps3", "g3", "t3"]),
              acDenge("Fon bulamayan borçlananlar daha yüksek faiz teklif eder: reel faiz ==yükselir== ve %5'e çıkar.", ["D", "S", "E", "h3", "pd3", "ps3", "g3", "t3", "oku", "tu"]),
              acDenge("Reel faiz yalnızca **denge faizinde** durur: yukarıdan da aşağıdan da piyasa onu %5'e çeker.", ["D", "S", "E"])
            ] }
        ]
      },
      {
        baslik: "Ulusal tasarruf ve yatırım",
        kisa: "Ulusal tasarruf özel ve kamu tasarrufunun toplamıdır; yatırım buna dış fon ekler.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "Ulusal tasarruf", alt: "S" }, "=",
              { t: "Özel tasarruf", alt: "hanehalkı + firmalar" }, "+",
              { t: "Kamu tasarrufu", alt: "vergiler − devlet harcaması" }
            ], aciklama: "Bütçe açığı varsa (devlet harcaması vergi gelirinden büyükse) kamu tasarrufu negatiftir ve ulusal tasarrufu azaltır." },
          { tip: "formul", parcalar: [
              { t: "Yatırım", alt: "I" }, "=",
              { t: "Ulusal tasarruf", alt: "S" }, "+",
              { t: "Net sermaye girişi", alt: "yabancıların getirdiği fon" }
            ], aciklama: "Yabancılarla borç alıp verme yoksa (kapalı ekonomi) net sermaye girişi 0'dır ve yatırım = ulusal tasarruf olur. Açık ekonomide yabancı tasarruf, yurtiçi yatırımı finanse eden fon arzına eklenir." },
          { tip: "ornek", baslik: "Bir ülkenin fon hesabı", durum: "Milyar TL olarak: özel tasarruf 80, devletin vergi gelirleri 50, devlet harcamaları 60, net sermaye girişi 20. Ulusal tasarruf ve yatırım nedir?",
            adimlar: ["Kamu tasarrufu = vergiler − devlet harcaması = 50 − 60 = −10 (bütçe açığı).", "Ulusal tasarruf = özel + kamu = 80 + (−10) = 70.", "Açık ekonomide yatırım = ulusal tasarruf + net sermaye girişi = 70 + 20 = 90."],
            sonuc: "==Ulusal tasarruf 70, yatırım 90.== Kapalı bir ekonomide yatırım yalnızca 70 olurdu; 20'lik fark yabancı tasarruftan gelir." }
        ]
      },
      {
        baslik: "Kaymalar: talebi ve arzı ne oynatır?",
        kisa: "Yatırım teşviki talebi, tasarruf davranışı ve dış fon arzı kaydırır.",
        bloklar: [
          { tip: "tablo", baslik: "Dört kaydırıcı grubu", head: ["Olay", "Kayan eğri", "Yön", "Reel faiz", "Fon miktarı"], rows: [
              ["Yatırım vergi indirimi (*investment tax credit*) ya da iş dünyasında iyimserlik", "Talep", "Sağa", "↑", "↑"],
              ["Firmalar yatırım planlarını küçültür", "Talep", "Sola", "↓", "↓"],
              ["Hanehalkı daha çok tasarruf eder", "Arz", "Sağa", "↓", "↑"],
              ["Hanehalkı tasarrufu azalır (daha çok harcar)", "Arz", "Sola", "↑", "↓"],
              ["Yabancı fon girişi artar (net sermaye girişi ↑)", "Arz", "Sağa", "↓", "↑"],
              ["Devlet bütçe fazlası verir (kamu tasarrufu ↑)", "Arz", "Sağa", "↓", "↑"]
            ] },
          { tip: "grafik", baslik: "Dört tek kayma: talep sağa / sola, arz sağa / sola", xlabel: "Ödünç fon miktarı (milyar TL)", ylabel: "Reel faiz", xmax: 11, ymax: 10,
            xticks: [{ v: 4, label: "400" }, { v: 5, label: "500" }, { v: 6, label: "600" }],
            yticks: [{ v: 4, label: "%4" }, { v: 5, label: "%5" }, { v: 6, label: "%6" }],
            ogeler: [
              { id: "D", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "D" },
              { id: "S", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "S" },
              { id: "Dk", tip: "cizgi", renk: 0, kesik: true, from: [1, 9], to: [9, 1], etiket: "", gizli: true },
              { id: "Sk", tip: "cizgi", renk: 1, kesik: true, from: [1, 1], to: [9, 9], etiket: "", gizli: true },
              { id: "D1", tip: "cizgi", renk: 3, from: [3, 9], to: [10, 2], etiket: "D₁", gizli: true },
              { id: "D2", tip: "cizgi", renk: 3, from: [0, 8], to: [7.6, 0.4], etiket: "D₂", gizli: true },
              { id: "S1", tip: "cizgi", renk: 2, from: [3, 1], to: [10, 8], etiket: "S₁", gizli: true },
              { id: "S2", tip: "cizgi", renk: 2, from: [0, 2], to: [8, 10], etiket: "S₂", gizli: true },
              { id: "okDR", tip: "ok", renk: 3, from: [3.2, 7], to: [4.8, 7], gizli: true },
              { id: "okDL", tip: "ok", renk: 3, from: [2.8, 7], to: [1.2, 7], gizli: true },
              { id: "okSR", tip: "ok", renk: 2, from: [3.2, 3], to: [4.8, 3], gizli: true },
              { id: "okSL", tip: "ok", renk: 2, from: [2.8, 3], to: [1.2, 3], gizli: true },
              { id: "E0", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "%5 · 500", kilavuz: true },
              { id: "Edr", tip: "nokta", renk: 1, x: 6, y: 6, etiket: "%6 · 600", kilavuz: true, gizli: true },
              { id: "Edl", tip: "nokta", renk: 1, x: 4, y: 4, etiket: "%4 · 400", kilavuz: true, gizli: true },
              { id: "Esr", tip: "nokta", renk: 1, x: 6, y: 4, etiket: "%4 · 600", kilavuz: true, gizli: true },
              { id: "Esl", tip: "nokta", renk: 1, x: 4, y: 6, etiket: "%6 · 400", kilavuz: true, gizli: true }
            ],
            durumlar: [
              acKay("Başlangıç: denge reel faizi %5, fon miktarı 500 milyar TL. Grafikte 1 birim = %1 ve 100 milyar TL.", ["D", "S", "E0"]),
              acKay("**Yatırım vergi indirimi** firmaları yatırıma özendirir: fon *talebi* ==sağa== kayar (eski eğri kesikli). Yeni denge **%6, 600**: reel faiz de fon miktarı da arttı.", ["Dk", "D1", "S", "okDR", "Edr"]),
              acKay("**Firmalar geleceğe umutsuz**, yatırım planlarını küçültür: *talep* ==sola== kayar. Yeni denge **%4, 400**: ikisi de düştü.", ["Dk", "D2", "S", "okDL", "Edl"]),
              acKay("**Hanehalkı daha çok tasarruf eder** (ya da yabancı fon girişi artar): *arz* ==sağa== kayar. Yeni denge **%4, 600**: faiz düştü, fon miktarı arttı.", ["D", "Sk", "S1", "okSR", "Esr"]),
              acKay("**Hanehalkı daha az tasarruf eder:** *arz* ==sola== kayar. Yeni denge **%6, 400**: faiz arttı, fon miktarı azaldı.", ["D", "Sk", "S2", "okSL", "Esl"])
            ] },
          { tip: "ikili", sol: { ikon: "🛠️", baslik: "Talep kayar", maddeler: ["Borçlananların planı değişti", "Yatırım teşviki, iş dünyası beklentisi", "Devlet borçlanması"] },
            sag: { ikon: "🏺", baslik: "Arz kayar", maddeler: ["Tasarruf edenlerin planı değişti", "Hanehalkı tasarrufu, yabancı fon girişi", "Devletin bütçe fazlası"] },
            oyun: [
              { metin: "Hükümet, firmalara yatırım vergi indirimi veriyor.", cevap: "sol", neden: "Borçlananların (firmaların) isteği artar: talep." },
              { metin: "Hanehalkı gelecek için tasarrufu artırmaya karar verdi.", cevap: "sag", neden: "Tasarruf edenlerin sunduğu fon artar: arz." },
              { metin: "Yabancı yatırımcılar ülkeye fon getiriyor.", cevap: "sag", neden: "Net sermaye girişi fon arzını artırır." },
              { metin: "Firmalar ekonomik görünümden umutsuz, yatırımı kısıyor.", cevap: "sol", neden: "Yatırım istekleri azalır: talep sola." },
              { metin: "Devlet bütçe açığını borçlanarak finanse ediyor.", cevap: "sol", neden: "Devlet fon isteyenlere katılır: talep sağa." }
            ] }
        ]
      },
      {
        baslik: "Devlet borçlanması ve dışlama etkisi",
        kisa: "Bütçe açığı fon talebini artırır, reel faizi yükseltir, özel yatırımı sıkıştırır.",
        bloklar: [
          { tip: "adimlar", baslik: "Açıktan özel yatırıma", adimlar: [
              { baslik: "Bütçe açığı", metin: "Devlet harcaması vergi gelirinden büyük. Fark için devlet borçlanır (tahvil çıkarır)." },
              { baslik: "Fon talebi artar", metin: "Devlet de fon isteyenler arasına katılır: ödünç fon talebi ==sağa== kayar." },
              { baslik: "Reel faiz yükselir", metin: "Aynı tasarruf havuzuna daha çok talep var: reel faiz ↑." },
              { baslik: "Özel yatırım azalır", metin: "Yüksek faizde firmalar bazı projelerinden vazgeçer: *crowding out* (dışlama etkisi)." }
            ] },
          { tip: "grafik", baslik: "Devlet borçlanınca reel faiz yükselir", xlabel: "Ödünç fon miktarı (milyar TL)", ylabel: "Reel faiz", xmax: 11, ymax: 10,
            xticks: [{ v: 4, label: "400" }, { v: 5, label: "500" }, { v: 6, label: "600" }],
            yticks: [{ v: 4, label: "%4" }, { v: 5, label: "%5" }, { v: 6, label: "%6" }],
            ogeler: [
              { id: "D", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "D" },
              { id: "S", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "S" },
              { id: "Dk", tip: "cizgi", renk: 0, kesik: true, from: [1, 9], to: [9, 1], etiket: "", gizli: true },
              { id: "D1", tip: "cizgi", renk: 3, from: [3, 9], to: [10, 2], etiket: "D₁", gizli: true },
              { id: "Sk", tip: "cizgi", renk: 1, kesik: true, from: [1, 1], to: [9, 9], etiket: "", gizli: true },
              { id: "S1", tip: "cizgi", renk: 2, from: [3, 1], to: [10, 8], etiket: "S₁", gizli: true },
              { id: "okR", tip: "ok", renk: 3, from: [3.2, 7], to: [4.8, 7], gizli: true },
              { id: "okC", tip: "ok", renk: 2, from: [4.85, 5.15], to: [4.15, 5.85], gizli: true },
              { id: "g6", tip: "cizgi", renk: 3, kesik: true, from: [4, 6], to: [6, 6], etiket: "", gizli: true },
              { id: "tg", tip: "yazi", x: 7.5, y: 7.3, metin: "devlet: 200", hiza: "start", gizli: true },
              { id: "E0", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "%5 · 500", kilavuz: true },
              { id: "E1", tip: "nokta", renk: 3, x: 6, y: 6, etiket: "%6 · 600", kilavuz: true, gizli: true },
              { id: "Ep", tip: "nokta", renk: 2, x: 4, y: 6, etiket: "", gizli: true },
              { id: "E2", tip: "nokta", renk: 3, x: 6, y: 4, etiket: "%4 · 600", kilavuz: true, gizli: true }
            ],
            durumlar: [
              acDev("Önce: denge reel faizi %5, fon miktarı 500 milyar TL.", ["D", "S", "E0"]),
              acDev("Devlet bütçe açığını borçlanarak kapatıyor: toplam fon *talebi* ==sağa== kayar (D₁). Yeni denge **%6, 600**: reel faiz yükseldi.", ["Dk", "D1", "S", "okR", "E1"]),
              acDev("%6'da toplam talep 600. Eski talep eğrisine göre özel sektör yalnızca 400 ister; aradaki **200'ü devlet** borçlanır.", ["Dk", "D1", "S", "E1", "Ep", "g6", "tg"]),
              acDev("**Dışlama etkisi** (*crowding out*): özel sektörün kullandığı fon 500'den 400'e düştü. Devlet, özel yatırımı sıkıştırdı.", ["Dk", "D1", "S", "E0", "E1", "Ep", "g6", "tg", "okC"]),
              acDev("Tersi: **bütçe fazlası** kamu tasarrufunu artırır, *arz* ==sağa== kayar (S₁). Reel faiz **%4**'e düşer, fon miktarı 600 olur.", ["D", "Sk", "S1", "E2"])
            ] },
          { tip: "tuzak", baslik: "Devlet borçlanması arzı mı, talebi mi kaydırır?", metin: "Bazı kaynaklar aynı olayı kamu tasarrufunun düşmesi sayıp arzı sola kaydırarak çizer; iki çizimde de reel faiz yükselir.", yanlis: "Devlet borçlanınca reel faiz düşer, çünkü piyasaya fon girer.", dogru: "Devlet fon ==talep eder==: AP'de standart gösterimde talep sağa kayar ve reel faiz yükselir. Soru farklı bir çizim yönergesi vermedikçe talebi kaydır." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Ödünç fon piyasasında tasarruf edenler fon arz eder, borçlananlar fon talep eder; fonun fiyatı ==reel== faizdir.",
              "Talep aşağı eğimli (reel faiz ↑ → istenen fon ↓); arz yukarı eğimli (reel faiz ↑ → sunulan fon ↑).",
              "Denge reel faizinde istenen fon = sunulan fon. Denge üstünde fon fazlası var, faiz düşer; altında fon açığı var, faiz yükselir.",
              "Kapalı ekonomide ulusal tasarruf = özel tasarruf + kamu tasarrufu (vergiler − devlet harcaması). Açık ekonomide yatırım = ulusal tasarruf + net sermaye girişi.",
              "Talebi kaydıranlar: yatırım vergi indirimi, iş dünyası beklentisi, devlet borçlanması. Arzı kaydıranlar: hanehalkı tasarrufu, net sermaye girişi, bütçe fazlası.",
              "Talep sağa → reel faiz ↑, fon miktarı ↑; arz sağa → reel faiz ↓, fon miktarı ↑.",
              "Bütçe açığı fon talebini artırır, reel faizi yükseltir ve özel yatırımı sıkıştırır (*crowding out*).",
              "Para piyasası nominal faizi, ödünç fon piyasası reel faizi gösterir; ikisini karıştırma."
            ] }
        ]
      }
    ],
    sorular: [
      {
        q: "Grafikte ödünç fon piyasası gösteriliyor. Reel faiz %7 iken ne olur?",
        fig: { type: "graph", xlabel: "Ödünç fon miktarı", ylabel: "Reel faiz", xmax: 10, ymax: 10,
          lines: [{ from: [1, 9], to: [9, 1], label: "D" }, { from: [1, 1], to: [9, 9], label: "S", color: 1 }],
          hlines: [{ p: 7, label: "%7" }], points: [{ q: 5, p: 5, label: "E", guides: true }],
          xticks: [{ v: 5, label: "500" }], yticks: [{ v: 5, label: "%5" }, { v: 7, label: "%7" }] },
        opts: ["Fon talebi sunulan fonu aşar; reel faiz yükselir", "Sunulan fon (700) istenen fonu (300) aşar; reel faiz düşer", "Piyasa dengededir", "Talep eğrisi sola kayar"],
        a: 1,
        why: "%7'de S eğrisi üzerinde sunulan fon 700, D üzerinde istenen fon 300'dür: 400 milyar TL fon fazlası var. Tasarruf edenler kredi bulmak için faizi kırar ve reel faiz %5'e iner. A tersine fon açığı için doğru olurdu."
      },
      {
        q: "Hükümet firmalara yatırım vergi indirimi (*investment tax credit*) veriyor. Diğer şeyler sabitken ödünç fon piyasasında ne olur?",
        opts: ["Arz sağa kayar; reel faiz düşer", "Arz sola kayar; reel faiz yükselir", "Talep sağa kayar; reel faiz ve fon miktarı artar", "Talep sola kayar; reel faiz düşer"],
        a: 2,
        why: "Vergi indirimi firmaların yatırım isteğini artırır; borçlananlar talep tarafındadır, bu yüzden talep sağa kayar. Yeni dengede hem reel faiz hem fon miktarı artar. Tasarruf davranışı değişmediği için arz kaymaz."
      },
      {
        q: "Bir ülkede özel tasarruf 120, vergi gelirleri 70, devlet harcamaları 90 ve net sermaye girişi 30 (milyar TL). Yatırım kaç milyar TL'dir?",
        opts: ["100", "150", "220", "130"],
        a: 3,
        why: "Kamu tasarrufu = 70 − 90 = −20. Ulusal tasarruf = 120 + (−20) = 100. Yatırım = ulusal tasarruf + net sermaye girişi = 100 + 30 = 130. 100 net sermaye girişini unutmaktır; 150 kamu açığını yok sayar."
      },
      {
        q: "Hükümet bütçe açığını finanse etmek için borçlanmasını artırıyor. Ödünç fon piyasasında (standart AP gösterimiyle) diğer şeyler sabitken ne olur?",
        opts: ["Talep sağa kayar; reel faiz yükselir ve özel yatırım azalır", "Arz sağa kayar; reel faiz düşer ve özel yatırım artar", "Talep sola kayar; reel faiz düşer", "Hiçbir eğri kaymaz; yalnızca nominal faiz değişir"],
        a: 0,
        why: "Devlet fon talep edenlere katılır: talep sağa kayar, reel faiz yükselir. Yüksek faiz özel yatırımı sıkıştırır (*crowding out*). B'deki gibi borçlanmayı fon arzı sanmak en çekici yanlıştır: devlet borç alandır, veren değil."
      },
      {
        q: "Hanehalkları gelecek için tasarruf etme eğilimlerini artırıyor. Diğer şeyler sabitken ödünç fon piyasasında ne olur?",
        opts: ["Talep sağa kayar; reel faiz yükselir", "Arz sağa kayar; reel faiz düşer ve fon miktarı artar", "Arz sola kayar; reel faiz yükselir", "Talep sola kayar; reel faiz düşer"],
        a: 1,
        why: "Tasarruf edenler arz tarafındadır: daha çok tasarruf, arzı sağa kaydırır. Sağa kayan arz reel faizi düşürür ve fon miktarını artırır. Talep eğrisi borçlananların isteğine bağlıdır, tasarruf davranışına değil."
      }
    ]
  };
})();
