/* Kitora not defteri · mc504 · 5.4 Bütçe Açıkları ve Kamu Borcu
   Kaynak: CED Topic 5.4 (POL-3.B). Blok türleri: /ap/_kit/defter.js başı.
   Not: yardımcı işlevler yalnızca çubukları (alan) ve grafik durumlarını üretir. */
window.DEFTER = (function () {
  function dur(tum, metin, acik, ek) {
    var o = { metin: metin, goster: acik, gizle: tum.filter(function (x) { return acik.indexOf(x) < 0; }) };
    if (ek) o.set = ek;
    return o;
  }
  /* x ortası, yarı genişlik, alt, üst → dikdörtgen alan noktaları (4 nokta) */
  function bar(cx, hw, y0, y1) { return [[cx - hw, y0], [cx + hw, y0], [cx + hw, y1], [cx - hw, y1]]; }

  /* ---- Grafik 1: vergi geliri ve harcama çizgisi ---- */
  var T1 = ["T", "SP", "B", "D", "S", "okD", "okS", "yD", "yS"];
  var G1 = {
    tip: "grafik", baslik: "Gelir ve harcama çizgileri: açık ve fazla nerede?", xlabel: "Reel GSYH", ylabel: "Milyar TL", xmax: 10, ymax: 6,
    xticks: [{ v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
    yticks: [{ v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
    ogeler: [
      { id: "T", tip: "cizgi", renk: 0, from: [0, 0], to: [10, 5], etiket: "T" },
      { id: "SP", tip: "cizgi", renk: 1, from: [0, 3], to: [10, 3], etiket: "G + transfer" },
      { id: "B", tip: "nokta", renk: 2, x: 6, y: 3, etiket: "denk", kilavuz: true, gizli: true },
      { id: "D", tip: "nokta", renk: 3, x: 4, y: 2, etiket: "", kilavuz: true, gizli: true },
      { id: "S", tip: "nokta", renk: 3, x: 8, y: 4, etiket: "", kilavuz: true, gizli: true },
      { id: "okD", tip: "ok", renk: 3, from: [4, 2.1], to: [4, 2.9], gizli: true },
      { id: "okS", tip: "ok", renk: 3, from: [8, 3.1], to: [8, 3.9], gizli: true },
      { id: "yD", tip: "yazi", x: 2.7, y: 2.45, metin: "açık = 1", gizli: true },
      { id: "yS", tip: "yazi", x: 9.2, y: 3.45, metin: "fazla = 1", gizli: true }
    ],
    durumlar: [
      dur(T1, "**T**: vergi geliri, gelir arttıkça yükselir. Harcama çizgisi (**G + transfer**) bu basit çizimde sabit.", ["T", "SP"]),
      dur(T1, "Çizgiler kesişince gelir = harcama: ==denk bütçe==.", ["T", "SP", "B"]),
      dur(T1, "Ekonomi küçülürse (GSYH 4) vergi geliri 2'ye düşer, harcama 3: ==açık 1==. Durgunlukta açık kendiliğinden büyür.", ["T", "SP", "D", "okD", "yD"]),
      dur(T1, "Ekonomi canlanırsa (GSYH 8) vergi geliri 4'e çıkar, harcama 3: ==fazla 1==.", ["T", "SP", "S", "okS", "yS"])
    ]
  };

  /* ---- Grafik 2: borç stoku, yıllara göre ---- */
  var T2 = ["b0", "b1", "b2", "b3", "b4", "t0", "t1", "t2", "t3", "t4"];
  var G2 = {
    tip: "grafik", baslik: "Açık akımdır, borç stoktur", xlabel: "Yıl", ylabel: "Ulusal borç (milyar TL)", xmax: 6, ymax: 9,
    xticks: [{ v: 1, label: "0" }, { v: 2, label: "1" }, { v: 3, label: "2" }, { v: 4, label: "3" }, { v: 5, label: "4" }],
    yticks: [{ v: 5, label: "100" }, { v: 6, label: "120" }, { v: 7, label: "140" }, { v: 8, label: "160" }],
    ogeler: [
      { id: "b0", tip: "alan", renk: 0, noktalar: bar(1, 0.35, 0, 5) },
      { id: "b1", tip: "alan", renk: 3, noktalar: bar(2, 0.35, 0, 0), gizli: true },
      { id: "b2", tip: "alan", renk: 3, noktalar: bar(3, 0.35, 0, 0), gizli: true },
      { id: "b3", tip: "alan", renk: 2, noktalar: bar(4, 0.35, 0, 0), gizli: true },
      { id: "b4", tip: "alan", renk: 3, noktalar: bar(5, 0.35, 0, 0), gizli: true },
      { id: "t0", tip: "yazi", x: 1, y: 5.45, metin: "100", gizli: true },
      { id: "t1", tip: "yazi", x: 2, y: 6.45, metin: "açık 20", gizli: true },
      { id: "t2", tip: "yazi", x: 3, y: 7.95, metin: "açık 30", gizli: true },
      { id: "t3", tip: "yazi", x: 4, y: 7.45, metin: "fazla 10", gizli: true },
      { id: "t4", tip: "yazi", x: 5, y: 8.45, metin: "açık 20", gizli: true }
    ],
    durumlar: [
      dur(T2, "Başlangıç: ulusal borç **100 milyar TL**. Bu bir ==stoktur==: şimdiye kadar birikmiş borç.", ["b0", "t0"]),
      dur(T2, "1. yıl: bütçe **20 milyar açık**. Hükümet bunu borçlanarak kapatır; borç 120'ye çıkar.", ["b0", "b1", "t0", "t1"], { b1: { noktalar: bar(2, 0.35, 0, 6) } }),
      dur(T2, "2. yıl: açık **30 milyar**; borç 150'ye çıkar.", ["b0", "b1", "b2", "t0", "t1", "t2"], { b2: { noktalar: bar(3, 0.35, 0, 7.5) } }),
      dur(T2, "3. yıl: bütçe **10 milyar fazla** verir; hükümet borcun bir kısmını öder, borç 140'a ==iner==.", ["b0", "b1", "b2", "b3", "t0", "t1", "t2", "t3"], { b3: { noktalar: bar(4, 0.35, 0, 7) } }),
      dur(T2, "4. yıl: yine **20 milyar açık**; borç 160. Açık her yılın akımı; borç bunların toplamı.", ["b0", "b1", "b2", "b3", "b4", "t0", "t1", "t2", "t3", "t4"], { b4: { noktalar: bar(5, 0.35, 0, 8) } })
    ]
  };

  /* ---- Grafik 3: faiz yükü ---- */
  var T3 = ["ai", "aa", "bi", "ba", "ti1", "ta1", "ti2", "ta2"];
  var G3 = {
    tip: "grafik", baslik: "Faiz ödemesi büyürse alternatif harcamaya az kalır", xlabel: "Bütçe (her biri 100 TL)", ylabel: "TL", xmax: 7, ymax: 10,
    xticks: [{ v: 2, label: "Az borç" }, { v: 5, label: "Çok borç" }],
    yticks: [{ v: 1, label: "10" }, { v: 3, label: "30" }, { v: 10, label: "100" }],
    ogeler: [
      { id: "ai", tip: "alan", renk: 3, noktalar: bar(2, 0.8, 0, 1), gizli: true },
      { id: "aa", tip: "alan", renk: 1, noktalar: bar(2, 0.8, 1, 10), gizli: true },
      { id: "bi", tip: "alan", renk: 3, noktalar: bar(5, 0.8, 0, 3), gizli: true },
      { id: "ba", tip: "alan", renk: 1, noktalar: bar(5, 0.8, 3, 10), gizli: true },
      { id: "ti1", tip: "yazi", x: 2, y: 0.4, metin: "faiz 10", gizli: true },
      { id: "ta1", tip: "yazi", x: 2, y: 5.5, metin: "okul, yol, sağlık 90", gizli: true },
      { id: "ti2", tip: "yazi", x: 5, y: 1.4, metin: "faiz 30", gizli: true },
      { id: "ta2", tip: "yazi", x: 5, y: 6.5, metin: "okul, yol, sağlık 70", gizli: true }
    ],
    durumlar: [
      dur(T3, "Borcu az olan bir hükümet 100 TL'lik bütçesinin yalnız **10 TL**'sini faize öder; **90 TL** okul, yol, sağlık gibi alternatif kullanımlara kalır.", ["ai", "aa", "ti1", "ta1"]),
      dur(T3, "Borç büyüyünce faiz ödemesi **30 TL**'ye çıkar. Aynı bütçeyle alternatif kullanımlara yalnız **70 TL** kalır: ==fırsat maliyeti== büyür.", ["ai", "aa", "bi", "ba", "ti1", "ta1", "ti2", "ta2"])
    ]
  };

  return {
    slug: "mc504",
    amac: "Bu konu hükümetin gelir-gider dengesini ve borcunu anlatıyor. Bütçe açığı ile ulusal borcun farkını, açığın borcu nasıl büyüttüğünü ve borcun faiz yoluyla geleceğe neden yük olduğunu öğreneceksin.",
    bolumler: [
      {
        baslik: "Bütçe dengesi: açık, fazla ve denk",
        kisa: "Vergi geliri harcamadan azsa açık, çoksa fazla vardır.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "Vergi gelirleri", alt: "T" }, "−",
              { t: "G + transfer ödemeleri", alt: "hükümetin harcamaları" }, "=",
              { t: "Bütçe dengesi", alt: "negatif → açık, pozitif → fazla" }
            ], aciklama: "Bütçe dengesi bir yıllık gelirle gider arasındaki farktır." },
          { tip: "kavramlar", kartlar: [
              { ikon: "🔻", terim: "Budget deficit", tr: "bütçe açığı", tanim: "Bir yılda vergi gelirlerinin hükümet harcamaları ve transfer ödemelerinden az olması. Fark borçlanmayla kapatılır.", ornek: "Vergi geliri 80, harcamalar 100 milyar TL: açık 20." },
              { ikon: "🔺", terim: "Budget surplus", tr: "bütçe fazlası", tanim: "Bir yılda vergi gelirlerinin harcamalardan fazla olması. Fazlayla borç ödenebilir.", ornek: "Vergi geliri 110, harcamalar 100 milyar TL: fazla 10." }
            ] },
          { tip: "tablo", baslik: "Üç durum", head: ["Bütçe", "Gelir ve harcama", "Ulusal borç"], rows: [
              ["Açık", "T < G + transfer", "artar"],
              ["Fazla", "T > G + transfer", "azalır"],
              ["Denk", "T = G + transfer", "değişmez"]
            ] }
        ]
      },
      {
        baslik: "Durgunlukta açık kendiliğinden büyür",
        kisa: "Gelir düştüğünde vergi geliri azalır; bütçe açık verme eğilimine girer.",
        bloklar: [
          G1,
          { tip: "not", metin: "Ekonomi küçülünce firmalar ve hanehalkları daha az gelir kazanır, devlet de daha az vergi toplar; üstelik işsizlik yardımı gibi harcamalar artar. Bu yüzden resesyon yıllarında açık, hükümet hiçbir şey yapmasa bile ==kendiliğinden büyür==." }
        ]
      },
      {
        baslik: "Açık ile borç farkı: akım ve stok",
        kisa: "Açık bir yılın akımıdır; borç geçmiş açıkların birikmiş stokudur.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🏦", terim: "National debt", tr: "ulusal borç", tanim: "Hükümetin geçmişte verdiği açıkların toplamı (eksi fazlalar); toplam borç stoku. Hükümet açık verdikçe borcu artar.", ornek: "Yıllar boyunca biriken 160 milyar TL'lik tahvil borcu." }
            ] },
          G2,
          { tip: "ikili", sol: { ikon: "🌊", baslik: "Bütçe açığı (*deficit*)", maddeler: ["Tek bir yılın gelir-gider farkı", "Akım (*flow*)", "Bir yılda ne kadar borçlanıldığı"] },
            sag: { ikon: "🏔️", baslik: "Ulusal borç (*national debt*)", maddeler: ["Şimdiye kadarki açıkların birikimi", "Stok (*stock*)", "Toplam borç"] },
            oyun: [
              { metin: "Bu yıl hükümet 30 milyar TL fazla harcadı.", cevap: "sol", neden: "Tek yılın farkı: açık." },
              { metin: "Hükümetin tahvil sahiplerine toplam borcu 500 milyar TL.", cevap: "sag", neden: "Birikmiş toplam: ulusal borç." },
              { metin: "Açık bu yıl geçen yıldan küçüldü.", cevap: "sol", neden: "Yıllık akımın büyüklüğü: açık." },
              { metin: "Hükümet son 10 yılda hiç fazla vermedi, borcu her yıl arttı.", cevap: "sag", neden: "Birikim: ulusal borç." }
            ] },
          { tip: "tuzak", metin: "Açık küçülse de hâlâ açıktır; borca yeni ekleme yapılmaya devam eder.", yanlis: "Bütçe açığı geçen yıldan küçüldü; yani ulusal borç azaldı.", dogru: "Açık varsa borç ==yine artar==, yalnız daha yavaş. Borç ancak ==bütçe fazlası== verilirse azalır." }
        ]
      },
      {
        baslik: "Hesap: açık borcu nasıl büyütür?",
        kisa: "Açık borca eklenir, fazla borçtan düşer; borç büyüdükçe faiz de büyür.",
        bloklar: [
          { tip: "ornek", baslik: "Kantistan'ın bütçesi", durum: "Kantistan'da bir yıl vergi gelirleri 80, hükümet harcamaları 70, transfer ödemeleri 30 milyar TL. Yıl başında ulusal borç 300 milyar TL ve borcun faizi %5.",
            adimlar: ["Toplam harcama = 70 + 30 = 100 milyar TL.", "Bütçe dengesi = 80 − 100 = −20: 20 milyar TL açık.", "Hükümet açığı borçlanarak kapatır: yeni borç = 300 + 20 = 320 milyar TL.", "Faiz yükü: önceki 300 × 0,05 = 15 milyar TL idi; şimdi 320 × 0,05 = 16 milyar TL."],
            sonuc: "==20 milyar açık, borç 320 milyar.== Faiz yükü 15'ten 16 milyara çıktı: borç büyüyünce faiz ödemesi de büyür, bu da gelecek yılın açığını artırır." },
          { tip: "tablo", baslik: "Üç yılın bütçesi (borç 300'den başlar; faiz yok sayılıyor)", head: ["Yıl", "Vergi geliri", "G + transfer", "Denge", "Yıl sonu borç"], rows: [
              ["1", "80", "100", "−20 (açık)", "320"],
              ["2", "90", "100", "−10 (açık)", "330"],
              ["3", "110", "100", "+10 (fazla)", "320"]
            ], not: "Açıklar borca eklenir, fazla borçtan düşülür." }
        ]
      },
      {
        baslik: "Borcun yükü: sorun nerede?",
        kisa: "Borç, faiz ve vergiler yoluyla geleceğin kaynaklarını önceden harcar.",
        bloklar: [
          { tip: "liste", maddeler: [
              { ikon: "💸", baslik: "Faiz ödemeleri", metin: "Hükümet borcunun faizini öder. Faiz arttıkça borç da artar ve başka işlere (okul, yol, sağlık) ayrılabilecek para azalır." },
              { ikon: "🏗️", baslik: "Dışlama etkisi", metin: "Hükümetin borçlanması faizi yükseltip özel yatırımı azaltabilir (bkz. 5.5)." },
              { ikon: "👶", baslik: "Gelecek kuşaklar", metin: "Borç ve faizi gelecekte daha yüksek vergi ya da daha az hizmetle ödenir." },
              { ikon: "🌍", baslik: "Yabancı alacaklılar", metin: "Borcun yabancı yatırımcılarda olan kısmının faizi ülke dışına gider; o gelir ülkede harcanmaz." }
            ] },
          G3,
          { tip: "tuzak", metin: "Ulusal borcu yalnızca yabancılara ödenen bir borç sanmak sık yapılan bir hatadır.", yanlis: "Ulusal borç yalnızca yabancılara olan borçtur.", dogru: "Ulusal borç, hükümetin yurt içi ve yurt dışı bütün alacaklılara olan borcudur. Yabancıya olan kısmın faizi ayrıca ülke dışına akar." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Bütçe dengesi = vergi gelirleri − (G + transfer ödemeleri). Negatifse *budget deficit*, pozitifse *budget surplus*.",
              "Açık bir yılın akımıdır; ulusal borç (*national debt*) geçmiş açıkların birikmiş stokudur.",
              "Hükümet açık verince borcu artar, fazla verince borcu azalır; açık küçülse de borç artmaya devam eder.",
              "Hükümet açığı genellikle borçlanarak finanse eder (tahvil satar).",
              "Durgunlukta vergi geliri düşer ve açık kendiliğinden büyür.",
              "Borç büyüdükçe faiz yükü artar ve alternatif harcamalara ayrılabilecek kaynak azalır (fırsat maliyeti).",
              "Borcun yükü: faiz ödemeleri, dışlama etkisi, gelecek vergiler ve yabancıya ödenen faiz.",
              "Sayısal örnek: vergi 80, harcama 70 + transfer 30 → açık 20; borç 300 → 320."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Bir ülkede bir yıl vergi gelirleri 500 milyar TL, hükümet harcamaları 400 milyar TL ve transfer ödemeleri 150 milyar TL'dir. Bütçe durumu nedir?",
        opts: ["50 milyar TL fazla", "50 milyar TL açık", "150 milyar TL açık", "100 milyar TL fazla"], a: 1,
        why: "Bütçe dengesi = T − (G + transfer) = 500 − (400 + 150) = −50: 50 milyar TL açık. A şıkkı işareti ters çevirir; C ve D yalnız bir kalemi hesaba katar." },
      { q: "Tabloda bir ülkenin üç yıllık bütçesi verilmiştir. Yıl başında ulusal borç 500 milyar TL'dir ve borç yalnızca açık ya da fazlayla değişmektedir. 3. yılın sonunda ulusal borç kaçtır?",
        fig: { type: "table", head: ["Yıl", "Vergi geliri", "G + transfer"], rows: [["1", "160", "200"], ["2", "180", "200"], ["3", "210", "200"]], caption: "Milyar TL" },
        opts: ["500", "520", "570", "550"], a: 3,
        why: "Yıl 1: 160 − 200 = −40 (açık). Yıl 2: 180 − 200 = −20 (açık). Yıl 3: 210 − 200 = +10 (fazla). Borç = 500 + 40 + 20 − 10 = 550. C şıkkı yıl 3'teki fazlayı da borca ekler." },
      { q: "Hükümetin ulusal borcu büyüdükçe ekonomide hangi sorun ortaya çıkar?",
        opts: ["Faiz ödemeleri artar; okul ve yol gibi alternatif kullanımlara ayrılabilecek kaynak azalır.", "Hükümet gelirleri kendiliğinden artar.", "Bütçe açığı kesinlikle sıfıra iner.", "Özel yatırım kalıcı olarak artar."], a: 0,
        why: "Borç arttıkça ödenen faiz de artar ve bu para başka işlerde kullanılamaz (fırsat maliyeti). Büyük borçlanma ayrıca faizi yükseltip özel yatırımı azaltabilir; D şıkkı bunun tersini söyler." },
      { q: "Aşağıdakilerden hangisi bir ülkenin ulusal borcunu azaltır?",
        opts: ["Bütçe açığının geçen yıldan küçük olması", "Transfer ödemelerinin artırılması", "Bütçe fazlası verilmesi", "Vergi gelirlerinin sabit kalması"], a: 2,
        why: "Borç ancak bütçe fazlası verildiğinde (gelir harcamadan büyükse) azalır. A şıkkı tuzaktır: açık küçülse de hâlâ açık vardır ve borca ekleme yapılır." },
      { q: "Grafikte vergi geliri (T) ve hükümet harcamaları (G + transfer) gösterilmiştir. Ekonomi Y₁'den Y₂'ye küçülürse (diğer her şey sabit) bütçe dengesi için ne söylenir?",
        fig: { type: "graph", xlabel: "Reel GSYH", ylabel: "Milyar TL", xmax: 10, ymax: 6,
          lines: [{ from: [0, 0], to: [10, 5], label: "T", color: 0 }, { from: [0, 3], to: [10, 3], label: "G + transfer", color: 1 }],
          points: [{ q: 8, p: 4, label: "Y₁", guides: true }, { q: 4, p: 2, label: "Y₂", guides: true }],
          xticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }], yticks: [{ v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }] },
        opts: ["Fazla artar, çünkü harcama sabit kalır.", "Fazla açığa döner, çünkü vergi geliri düşer.", "Bütçe denk kalır.", "Açık kapanır, çünkü gelir azalır."], a: 1,
        why: "Y₁'de T = 4 > 3: fazla 1. Y₂'de T = 2 < 3: açık 1. Gelir düşünce vergi geliri düştüğü için bütçe fazladan açığa döner. A şıkkı vergi gelirinin gelirle değiştiğini unutur." }
    ]
  };
})();
