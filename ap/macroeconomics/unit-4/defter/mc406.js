/* Kitora not defteri · mc406 · 4.6 Para Politikası
   Kaynak: AP Macroeconomics CED, Topic 4.6 (POL-1.D, POL-1.E). Blok türleri: /ap/_kit/defter.js başı.
   Not: yardımcı işlevler yalnızca durumları üretir; üç grafik var.
   (1) Para piyasası (kıt rezerv): MD (1,9)→(9,1), MS dikey x = 5, denge (5,5); 1 birim = %1 ve 100 milyar TL.
   (2) Rezerv piyasası: talep (2,8)→(7,3) sonra IORB'de yatay; discount rate %8; rezerv arzı dikey.
   (3) AD–AS: SRAS y = x, LRAS x = 6, AD₁ y = 10 − x (denge 5,5), AD₂ y = 12 − x (6,6), AD₃ y = 14 − x (7,7). */
window.DEFTER = (function () {
  /* Durum: yalnız `acik` listesindeki ögeler görünür (eksiksiz ve güvenli) */
  function ac(tum) { return function (metin, acik, set) { var d = { metin: metin, goster: acik, gizle: tum.filter(function (x) { return acik.indexOf(x) < 0; }) }; if (set) d.set = set; return d; }; }
  var acPara = ac(["MD", "MS", "MSk", "MS1", "MS2", "okSR", "okSL", "E0", "Esr", "Esl"]);
  var acRez = ac(["Dsl", "Dfl", "Dsk", "Dfk", "disc", "dt", "it", "S", "Sk", "okS", "E"]);
  var acAd = ac(["LRAS", "SRAS", "AD1", "AD1k", "AD2", "AD3", "AD3k", "okR", "okL", "E1", "E2", "E3"]);

  return {
    slug: "mc406",
    amac: "Bu konu Merkez Bankası'nın ekonomiyi para politikasıyla nasıl yönlendirdiğini anlatıyor. Araçları (açık piyasa işlemleri, discount rate, IORB, zorunlu karşılık), kıt ve bol rezerv rejimlerini ve politikanın faize, talebe, üretime ve fiyatlara etkisini öğreneceksin.",
    bolumler: [
      {
        baslik: "Para politikası ve amacı",
        kisa: "Merkez bankası, fiyat istikrarı gibi hedefler için faizi ve parayı yönetir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🏛️", terim: "Monetary policy", tr: "para politikası", tanim: "Merkez bankasının para arzını ve faizleri etkileyerek fiyat istikrarı gibi makroekonomik hedeflere ulaşma çabası.", ornek: "Enflasyon yükselince faizi artırmak." },
              { ikon: "🧑‍⚖️", terim: "Central bank", tr: "merkez bankası", tanim: "Para politikasını yürüten kurum. Bankaların bankasıdır; rezervleri onda tutulur.", ornek: "ABD'de Fed, Türkiye'de TCMB." },
              { ikon: "🎯", terim: "Policy rate", tr: "politika faizi", tanim: "Birçok merkez bankası, bankalar arası gecelik borç faizi için bir hedef belirler. ABD'de bu *federal funds rate*'dir.", ornek: "TCMB'nin politika faizi bir haftalık repo faizidir." }
            ] },
          { tip: "ikili", sol: { ikon: "🚀", baslik: "Genişletici (*expansionary*)", maddeler: ["Negatif çıktı açığında: resesyon, işsizlik yüksek", "Faizi düşürür, harcamayı ve AD'yi artırır", "Amaç: tam istihdama dönmek"] },
            sag: { ikon: "🧊", baslik: "Daraltıcı (*contractionary*)", maddeler: ["Pozitif çıktı açığında: enflasyonist, üretim potansiyelin üstünde", "Faizi yükseltir, harcamayı ve AD'yi azaltır", "Amaç: fiyat istikrarı"] },
            oyun: [
              { metin: "İşsizlik yüksek, üretim potansiyelin altında.", cevap: "sol", neden: "Negatif çıktı açığı: genişletici politika." },
              { metin: "Fiyatlar hızla yükseliyor, ekonomi aşırı ısınmış.", cevap: "sag", neden: "Pozitif çıktı açığı: daraltıcı politika." },
              { metin: "Merkez bankası politika faizini düşürdü.", cevap: "sol", neden: "Faiz indirimi harcamayı artırır." },
              { metin: "Merkez bankası politika faizini yükseltti.", cevap: "sag", neden: "Faiz artışı harcamayı kısar." },
              { metin: "Merkez bankası bankalara açık piyasada tahvil sattı.", cevap: "sag", neden: "Satım rezervi azaltır: daraltıcı." }
            ] }
        ]
      },
      {
        baslik: "Para politikası araçları",
        kisa: "Dört araç: açık piyasa işlemleri, discount rate, IORB ve zorunlu karşılık oranı.",
        bloklar: [
          { tip: "tablo", baslik: "Dört araç ve yönleri", head: ["Araç", "Ne yapar?", "Genişletici", "Daraltıcı"], rows: [
              ["Açık piyasa işlemi (*open market operations*)", "Merkez bankası bankalarla tahvil alır ya da satar; rezervleri değiştirir", "Tahvil **alır**", "Tahvil **satar**"],
              ["*Discount rate*", "Bankaların merkez bankasından borç alırken ödediği faiz", "Düşürür", "Artırır"],
              ["Rezerv faizi (*interest on reserves*, IORB)", "Merkez bankasının bankaların rezervlerine ödediği faiz; bir idari (*administered*) faiz", "Düşürür", "Artırır"],
              ["Zorunlu karşılık oranı (*required reserve ratio*)", "Bankaların mevduatın ne kadarını rezervde tutacağı", "Düşürür", "Artırır"]
            ], not: "CED \"diğer idari faizler\"den söz eder; ABD'de bunların en önemlisi rezerv faizidir (IORB)." },
          { tip: "not", metin: "Araçlar her ekonomide aynı biçimde kullanılmaz. Bankacılık sisteminde rezerv kıtsa ayrı, bolsa ayrı bir yol izlenir; bunu dördüncü başlıkta ayıracağız." }
        ]
      },
      {
        baslik: "Açık piyasa işlemleri: rezerv ve para tabanı",
        kisa: "Alım rezervi ve para tabanını artırır, satım azaltır.",
        bloklar: [
          { tip: "ornek", baslik: "Merkez Bankası 100 TL'lik tahvil alıyor", durum: "Merkez Bankası, A Bankası'ndan 100 TL'lik devlet tahvili satın alıyor. Zorunlu karşılık oranı %20; sistemde rezerv kıt ve başka fazla rezerv yok. Para tabanı ve para arzı en fazla ne kadar artar?",
            adimlar: ["Merkez Bankası'nın bilançosu: varlıklar +100 (tahvil), yükümlülükler +100 (A Bankası'nın rezervi).", "A Bankası'nın bilançosu: tahvil −100, rezerv +100. Toplam varlık aynı; yalnızca bileşimi değişti.", "Para tabanı = nakit + rezerv: +100.", "Yeni rezervin hepsi fazla rezerv; çarpan = 1 ÷ 0,20 = 5. En fazla para arzı artışı = 100 × 5 = 500."],
            sonuc: "==Para tabanı +100, para arzı en fazla +500.== Kıt rezervde etki, çarpan yüzünden para tabanından büyüktür. Satım olsaydı her şey tersine döner: rezerv −100, para arzı en fazla −500." },
          { tip: "tablo", baslik: "Alım ve satımın etkileri", head: ["", "Alım (*purchase*)", "Satım (*sale*)"], rows: [
              ["Rezervler", "↑", "↓"],
              ["Para tabanı", "↑", "↓"],
              ["Para arzı (kıt rezerv)", "↑↑ (çarpanla)", "↓↓"],
              ["Faiz (kıt rezerv)", "↓", "↑"],
              ["Politika türü", "Genişletici", "Daraltıcı"]
            ] },
          { tip: "tuzak", baslik: "Satmak para toplamaktır", metin: "Merkez bankası tahvil sattığında karşılığında bankalardan para (rezerv) alır; sistemdeki para azalır.", yanlis: "Merkez bankası tahvil satarsa ekonomiye para girer.", dogru: "==Alım== = merkez bankası para öder, rezerv ↑ (genişletici). ==Satım== = rezerv ↓ (daraltıcı). Tahvilin kimin elinde olduğuna değil, parayı kimin ödediğine bak." }
        ]
      },
      {
        baslik: "Kıt ve bol rezerv: iki ayrı rejim",
        kisa: "Kıt rezervde faiz para arzıyla, bol rezervde idari faizlerle yönetilir.",
        bloklar: [
          { tip: "ikili", sol: { ikon: "🥫", baslik: "Kıt rezerv (*limited reserves*)", maddeler: ["Bankaların rezervi sınırlı; zorunlu karşılık bağlayıcı", "Merkez bankası para arzını değiştirerek faizi yönetir", "Açık piyasa işleminin para arzı etkisi çarpanla büyür"] },
            sag: { ikon: "🏞️", baslik: "Bol rezerv (*ample reserves*)", maddeler: ["Bankalarda rezerv fazlasıyla bol", "Para arzını değiştirmek faizi etkili biçimde değiştirmez", "Faiz idari faizlerle yönetilir; ABD'nin ana aracı IORB"] },
            oyun: [
              { metin: "Merkez bankası tahvil alım-satımıyla politika faizini hedefe getiriyor.", cevap: "sol", neden: "Rezerv kıtsa para arzı faizi hareket ettirir." },
              { metin: "Merkez bankası rezervlere ödenen faizi artırarak politika faizini yükseltiyor.", cevap: "sag", neden: "İdari faiz: bol rezervin aracı." },
              { metin: "Para arzı artınca para piyasasında faiz düşüyor.", cevap: "sol", neden: "Para piyasası modelinin kıt rezerv sonucu." },
              { metin: "Rezerv miktarı artsa bile faiz neredeyse kıpırdamıyor.", cevap: "sag", neden: "Arz, talebin yatay kısmında; faizi IORB belirler." },
              { metin: "ABD'de Fed'in ana politika aracı rezerv faizidir.", cevap: "sag", neden: "ABD bankacılık sisteminde rezerv bol." }
            ] },
          { tip: "tuzak", metin: "Soruda hangi rejimde olunduğu yazar; ABD için \"rezerv bol\" kabul edilir.", yanlis: "Açık piyasa işlemi her zaman faizi hedefe getirir.", dogru: "==Kıt rezervde== evet. ==Bol rezervde== para arzını değiştirmek faizi etkili biçimde değiştirmez; faizi IORB gibi idari faizler belirler." }
        ]
      },
      {
        baslik: "Kıt rezerv: para piyasasında faiz",
        kisa: "Para arzı sağa kayarsa faiz düşer, sola kayarsa yükselir.",
        bloklar: [
          { tip: "grafik", baslik: "Kıt rezervde para politikası: MS kayar", xlabel: "Para miktarı (milyar TL)", ylabel: "Nominal faiz", xmax: 11, ymax: 10,
            xticks: [{ v: 3, label: "Q₂" }, { v: 5, label: "Q₀" }, { v: 7, label: "Q₁" }], yticks: [{ v: 3, label: "%3" }, { v: 5, label: "%5" }, { v: 7, label: "%7" }],
            ogeler: [
              { id: "MD", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "MD" },
              { id: "MS", tip: "cizgi", renk: 1, from: [5, 0], to: [5, 9.5], etiket: "MS" },
              { id: "MSk", tip: "cizgi", renk: 1, kesik: true, from: [5, 0], to: [5, 9.5], etiket: "", gizli: true },
              { id: "MS1", tip: "cizgi", renk: 2, from: [7, 0], to: [7, 9.5], etiket: "MS₁", gizli: true },
              { id: "MS2", tip: "cizgi", renk: 2, from: [3, 0], to: [3, 9.5], etiket: "MS₂", gizli: true },
              { id: "okSR", tip: "ok", renk: 2, from: [5.3, 8.5], to: [6.7, 8.5], gizli: true },
              { id: "okSL", tip: "ok", renk: 2, from: [4.7, 8.5], to: [3.3, 8.5], gizli: true },
              { id: "E0", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "%5", kilavuz: true },
              { id: "Esr", tip: "nokta", renk: 3, x: 7, y: 3, etiket: "%3 ↓", kilavuz: true, gizli: true },
              { id: "Esl", tip: "nokta", renk: 3, x: 3, y: 7, etiket: "%7 ↑", kilavuz: true, gizli: true }
            ],
            durumlar: [
              acPara("Başlangıç: para tabanını Merkez Bankası belirler, MS dikey. Denge nominal faizi %5.", ["MD", "MS", "E0"]),
              acPara("**Genişletici politika:** Merkez Bankası tahvil alır, rezerv ve para tabanı artar; çarpanla *MS* ==sağa== kayar. Faiz **%3**'e düşer; ucuzlayan kredi yatırımı ve tüketimi artırır.", ["MD", "MSk", "MS1", "okSR", "Esr"]),
              acPara("**Daraltıcı politika:** Merkez Bankası tahvil satar, rezerv ve para tabanı azalır; *MS* ==sola== kayar. Faiz **%7**'ye çıkar; pahalanan kredi harcamayı kısar.", ["MD", "MSk", "MS2", "okSL", "Esl"])
            ] },
          { tip: "tuzak", baslik: "Para politikası MS'yi kaydırır, MD'yi değil", metin: "Merkez bankası para arzını değiştirir; faizin düşmesi talep eğrisi üzerinde bir harekettir.", yanlis: "Faiz düştüğü için MD sağa kayar.", dogru: "Politika kararı ==MS==i kaydırır. Faizin kendi değişimi MD'yi kaydırmaz; MD'yi fiyat düzeyi, gelir ya da ödeme teknolojisi kaydırır (4.5)." }
        ]
      },
      {
        baslik: "Bol rezerv: rezerv piyasasında faiz",
        kisa: "Bol rezervde arz kayması faizi değiştirmez; IORB'yi değiştirmek değiştirir.",
        bloklar: [
          { tip: "grafik", baslik: "Rezerv piyasası: kıttan bola", xlabel: "Rezerv miktarı (milyar TL)", ylabel: "Gecelik faiz", xmax: 11, ymax: 10,
            xticks: [{ v: 4, label: "400" }, { v: 6, label: "600" }, { v: 9, label: "900" }], yticks: [{ v: 3, label: "%3" }, { v: 5, label: "%5" }, { v: 6, label: "%6" }, { v: 8, label: "%8" }],
            ogeler: [
              { id: "Dsl", tip: "cizgi", renk: 0, from: [7, 3], to: [2, 8], etiket: "D" },
              { id: "Dfl", tip: "cizgi", renk: 0, from: [7, 3], to: [10.5, 3], etiket: "" },
              { id: "Dsk", tip: "cizgi", renk: 0, kesik: true, from: [7, 3], to: [2, 8], etiket: "", gizli: true },
              { id: "Dfk", tip: "cizgi", renk: 0, kesik: true, from: [7, 3], to: [10.5, 3], etiket: "", gizli: true },
              { id: "disc", tip: "cizgi", renk: 2, kesik: true, from: [0, 8], to: [10.5, 8], etiket: "" },
              { id: "dt", tip: "yazi", x: 10.8, y: 8.5, metin: "Discount rate %8", hiza: "end" },
              { id: "it", tip: "yazi", x: 8.0, y: 2.1, metin: "IORB %3", hiza: "middle" },
              { id: "S", tip: "cizgi", renk: 1, from: [4, 0], to: [4, 7.4], etiket: "S", gizli: true },
              { id: "Sk", tip: "cizgi", renk: 1, kesik: true, from: [4, 0], to: [4, 7.4], etiket: "", gizli: true },
              { id: "okS", tip: "ok", renk: 1, from: [4.2, 1.2], to: [5.8, 1.2], gizli: true },
              { id: "E", tip: "nokta", renk: 3, x: 4, y: 6, etiket: "%6", kilavuz: true, gizli: true }
            ],
            durumlar: [
              acRez("Rezerv piyasası: yatay eksen rezerv miktarı, dikey eksen bankalar arası gecelik faiz. Faiz yüksekken bankalar az rezerv ister; faiz IORB'ye inince talep ==yataylaşır==: banka rezervini bundan ucuza ödünç vermez, çünkü IORB'yi merkez bankasından alır. Discount rate üstte bir tavandır.", ["Dsl", "Dfl", "disc", "dt", "it"]),
              acRez("**Kıt rezerv:** rezerv arzı (S) talebin eğimli kısmında kesişir. Denge faizi **%6**.", ["Dsl", "Dfl", "disc", "dt", "it", "S", "E"]),
              acRez("Merkez Bankası tahvil alır, rezerv 400'den 600'e çıkar: S sağa kayar. Faiz **%4**'e düşer. Kıt rezervde açık piyasa işlemi faizi ==etkiler==.", ["Dsl", "Dfl", "disc", "dt", "it", "S", "Sk", "okS", "E"], { S: { from: [6, 0], to: [6, 7.4] }, E: { x: 6, y: 4, etiket: "%4" } }),
              acRez("**Bol rezerv:** rezerv 900'e çıkınca S, talebin yatay kısmında kesişir. Faiz **IORB = %3**'e iner ve orada kalır.", ["Dsl", "Dfl", "disc", "dt", "it", "S", "Sk", "okS", "E"], { S: { from: [9, 0], to: [9, 7.4] }, Sk: { from: [6, 0], to: [6, 7.4] }, okS: { from: [6.2, 1.2], to: [8.8, 1.2] }, E: { x: 9, y: 3, etiket: "%3" } }),
              acRez("Bir alım daha: rezerv 1.000'e çıkar. Faiz ==hâlâ %3==: bol rezervde para arzını değiştirmek faizi etkili biçimde oynatmaz.", ["Dsl", "Dfl", "disc", "dt", "it", "S", "Sk", "okS", "E"], { S: { from: [10, 0], to: [10, 7.4] }, Sk: { from: [9, 0], to: [9, 7.4] }, okS: { from: [9.2, 1.2], to: [9.8, 1.2] }, E: { x: 10, y: 3, etiket: "%3" } }),
              acRez("Faizi yükseltmek için **IORB %3'ten %5'e** artırılır: talep eğrisi yukarı kayar (eski talep kesikli). Rezerv aynı kalsa da faiz **%5** olur.", ["Dsl", "Dfl", "Dsk", "Dfk", "disc", "dt", "it", "S", "E"], { Dsl: { from: [7, 5], to: [4, 8] }, Dfl: { from: [7, 5], to: [10.5, 5] }, it: { y: 4.1, metin: "IORB %5" }, E: { x: 10, y: 5, etiket: "%5" } })
            ] },
          { tip: "not", metin: "Bu grafikte talep, faiz IORB'ye inince yataylaşır. Discount rate üstte tavan görevi görür: banka merkez bankasından bu faizle borç alabilirken bundan pahalıya rezerv almaz. Bol rezervde faizi belirleyen, kayan arz değil, bu idari faizlerdir." }
        ]
      },
      {
        baslik: "Faizden talebe, üretime ve fiyatlara",
        kisa: "Faiz değişince yatırım ve tüketim, sonra talep, üretim ve fiyatlar değişir.",
        bloklar: [
          { tip: "adimlar", baslik: "Genişletici politika zinciri (kısa dönem)", adimlar: [
              { baslik: "Faiz düşer", metin: "Merkez bankası politika faizini indirir: kıt rezervde MS artar, bol rezervde IORB düşer." },
              { baslik: "Harcama artar", metin: "Borçlanmak ucuzlar: yatırım ve tüketim (ev, araba gibi dayanıklı mallar) artar. Düşük faiz, yabancı yatırımcı için getiriyi de azaltır; bu da kuru ve net ihracatı etkiler (Unit 6)." },
              { baslik: "AD sağa kayar", metin: "Toplam harcama artınca *AD* ==sağa== kayar." },
              { baslik: "Üretim ve fiyat", metin: "Kısa dönemde reel GSYH ve fiyat düzeyi artar, işsizlik düşer. Daraltıcı politikada hepsi tersine döner." }
            ] },
          { tip: "grafik", baslik: "AD–AS: iki boşluk, iki politika", xlabel: "Reel GSYH", ylabel: "Fiyat düzeyi", xmax: 11, ymax: 10,
            xticks: [{ v: 5, label: "Y₁" }, { v: 6, label: "Yf" }, { v: 7, label: "Y₃" }], yticks: [{ v: 5, label: "P₁" }, { v: 6, label: "Pf" }, { v: 7, label: "P₃" }],
            ogeler: [
              { id: "LRAS", tip: "cizgi", renk: 2, from: [6, 0], to: [6, 9.5], etiket: "LRAS" },
              { id: "SRAS", tip: "cizgi", renk: 1, from: [1, 1], to: [9.5, 9.5], etiket: "SRAS" },
              { id: "AD1", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "AD₁" },
              { id: "AD1k", tip: "cizgi", renk: 0, kesik: true, from: [1, 9], to: [9, 1], etiket: "", gizli: true },
              { id: "AD2", tip: "cizgi", renk: 3, from: [3, 9], to: [10, 2], etiket: "AD₂", gizli: true },
              { id: "AD3", tip: "cizgi", renk: 3, from: [4, 10], to: [10, 4], etiket: "AD₃", gizli: true },
              { id: "AD3k", tip: "cizgi", renk: 3, kesik: true, from: [4, 10], to: [10, 4], etiket: "", gizli: true },
              { id: "okR", tip: "ok", renk: 3, from: [3.2, 7], to: [4.8, 7], gizli: true },
              { id: "okL", tip: "ok", renk: 3, from: [5.8, 8], to: [4.2, 8], gizli: true },
              { id: "E1", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "E₁", kilavuz: true },
              { id: "E2", tip: "nokta", renk: 3, x: 6, y: 6, etiket: "E₂", kilavuz: true, gizli: true },
              { id: "E3", tip: "nokta", renk: 3, x: 7, y: 7, etiket: "E₃", kilavuz: true, gizli: true }
            ],
            durumlar: [
              acAd("**Resesyon:** AD₁, SRAS ile LRAS'ın solunda kesişir. Y₁ < Yf: negatif çıktı açığı, işsizlik yüksek.", ["LRAS", "SRAS", "AD1", "E1"]),
              acAd("**Genişletici politika:** faiz ↓, yatırım ve tüketim ↑, *AD* ==sağa== kayar (AD₂). Reel GSYH tam istihdam düzeyine (Yf) yükselir, fiyat düzeyi artar, işsizlik düşer.", ["LRAS", "SRAS", "AD1k", "AD2", "okR", "E2"]),
              acAd("**Enflasyonist durum:** AD₃ LRAS'ın sağında kesişir. Y₃ > Yf: pozitif çıktı açığı, fiyatlar baskı altında.", ["LRAS", "SRAS", "AD3", "E3"]),
              acAd("**Daraltıcı politika:** faiz ↑, harcama ↓, *AD* ==sola== kayar (AD₂). Reel GSYH tam istihdam düzeyine (Yf) iner, fiyat baskısı azalır.", ["LRAS", "SRAS", "AD3k", "AD2", "okL", "E2"])
            ] }
        ]
      },
      {
        baslik: "Gecikmeler: politika hemen etki etmez",
        kisa: "Sorunu fark etmek ve ekonominin tepki vermesi zaman alır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🔎", terim: "Recognition lag", tr: "fark etme gecikmesi", tanim: "Ekonomide bir sorun olduğunun verilerle anlaşılması zaman alır.", ornek: "Resesyon, GSYH verisi açıklandığında aylar sonra fark edilir." },
              { ikon: "🐢", terim: "Adjustment lag", tr: "uyum gecikmesi", tanim: "Politika uygulandıktan sonra ekonominin buna tepki vermesi zaman alır.", ornek: "Faiz indirimi yapılır, ama yatırım ve işe alım kararları aylar sonra değişir." }
            ] },
          { tip: "not", metin: "Gecikmeler yüzünden politika yanlış zamanda etki edebilir: ekonomi kendiliğinden toparlanırken faiz indiriminin etkisi gelirse talep gereğinden fazla artabilir. İki gecikmeyi (fark etme ve uyum) ayırt et." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Para politikasını merkez bankası yürütür; amaç fiyat istikrarı gibi makro hedeflerdir. Negatif çıktı açığında genişletici, pozitif çıktı açığında daraltıcı politika izlenir.",
              "Araçlar: açık piyasa işlemleri, *discount rate*, rezerv faizi (IORB gibi idari faizler) ve zorunlu karşılık oranı.",
              "Açık piyasa alımı rezervi ve para tabanını artırır, satımı azaltır. Kıt rezervde para arzı etkisi çarpan yüzünden para tabanından büyüktür (100 TL alım, rr %20 → en fazla 500).",
              "Kıt rezervde merkez bankası para arzını değiştirerek faizi yönetir: MS sağa → faiz ↓; MS sola → faiz ↑.",
              "Bol rezervde (ABD) para arzı değişince faiz etkili biçimde değişmez; faiz IORB gibi idari faizlerle yönetilir.",
              "Birçok merkez bankası bankalar arası gecelik faiz için hedef belirler (ABD'de *federal funds rate*).",
              "Faiz düşünce yatırım ve tüketim artar, AD sağa kayar, reel GSYH ve fiyat düzeyi kısa dönemde artar; daraltıcı politikada tersi.",
              "Gecikmeler: sorunu fark etmek ve ekonominin uyum sağlaması zaman alır."
            ] }
        ]
      }
    ],
    sorular: [
      {
        q: "Bankacılık sisteminde rezerv kıt ve zorunlu karşılık oranı %10; başka fazla rezerv yok. Merkez Bankası bankalardan 300 TL'lik tahvil satın alıyor. Para arzı en fazla ne kadar artabilir?",
        opts: ["300 TL", "3.000 TL", "3.300 TL", "30 TL"],
        a: 1,
        why: "Alım, 300 TL rezervi ekler; hepsi fazla rezervdir. Çarpan = 1 ÷ 0,10 = 10, en fazla artış 300 × 10 = 3.000 TL. 300 TL yalnızca para tabanındaki artıştır; 3.300 ise ilk tutarı tekrar toplamaktır."
      },
      {
        q: "Bol rezerv rejimindeki bir ekonomide merkez bankası politika faizini yükseltmek istiyor. En etkili araç hangisidir?",
        opts: ["Açık piyasada tahvil satın almak", "Zorunlu karşılık oranını düşürmek", "Discount rate'i düşürmek", "Rezervlere ödenen faizi (IORB) artırmak"],
        a: 3,
        why: "Bol rezervde faiz IORB gibi idari faizlerle yönetilir; IORB artınca rezerv talebi yukarı kayar ve faiz yükselir. Tahvil alımı rezervi artırır ama bol rezervde faizi etkili biçimde değiştirmez (üstelik faizi düşürme yönündedir)."
      },
      {
        q: "Grafik, bol rezervli bir bankacılık sistemini gösteriyor (S rezerv arzı, D rezerv talebi). Merkez bankası açık piyasada tahvil alarak S'yi sağa kaydırırsa gecelik faize ne olur?",
        fig: { type: "graph", xlabel: "Rezerv miktarı", ylabel: "Gecelik faiz", xmax: 11, ymax: 10,
          lines: [{ from: [2, 8], to: [7, 3] }, { from: [7, 3], to: [10.5, 3], label: "D" }, { from: [9, 0], to: [9, 7.4], label: "S", color: 1 }],
          hlines: [{ p: 8, label: "Discount rate" }], points: [{ q: 9, p: 3, label: "E", guides: true }],
          xticks: [{ v: 9, label: "900" }], yticks: [{ v: 3, label: "IORB" }, { v: 8, label: "%8" }] },
        opts: ["Belirgin biçimde düşer", "Yükselir", "Yaklaşık değişmez; çünkü S, talebin yatay kısmında kesişir ve faizi IORB belirler", "Belirsizdir"],
        a: 2,
        why: "S talebin yatay kısmında kesiştiği için daha fazla rezerv faizi aşağı çekmez; faiz IORB'de kalır. A kıt rezerv rejiminin sonucudur: orada S sağa kayınca faiz düşerdi."
      },
      {
        q: "Bir ekonomide işsizlik doğal oranın üstünde ve reel GSYH potansiyelin altındadır. Rezervlerin kıt olduğu bu ekonomide merkez bankası hangi eylemi yaparsa ve beklenen sonucu nedir?",
        opts: ["Açık piyasada tahvil alır: rezerv ve para arzı artar, faiz düşer, AD sağa kayar, reel GSYH artar", "Açık piyasada tahvil satar: para arzı azalır, faiz yükselir, AD sağa kayar", "Zorunlu karşılık oranını yükseltir: para arzı artar, faiz düşer", "Discount rate'i artırır: bankalar daha çok borçlanır, AD artar"],
        a: 0,
        why: "Negatif çıktı açığında genişletici politika gerekir: tahvil alımı rezervi ve (çarpanla) para arzını artırır, faiz düşer, yatırım ve tüketim artar, AD sağa kayar. B'de satım yapılıp AD'nin sağa kayması söyleniyor: tutarsız. C ve D'de araç daraltıcıdır ve söylenen sonuçlar da yanlıştır."
      },
      {
        q: "Aşağıdakilerden hangisi para politikasında gecikmelerin (*lags*) nedenidir?",
        opts: ["Merkez bankasının faizi anında değiştirememesi", "Sorunu fark etmenin ve ekonominin politikaya uyum sağlamasının zaman alması", "Para çarpanının zamanla değişmesi", "Vergi yasalarının meclisten geçmesi"],
        a: 1,
        why: "CED iki gecikme sayar: sorunun fark edilmesi ve ekonominin politikaya uyum sağlaması. Merkez bankası faizi genellikle hızla değiştirebilir; asıl gecikme, etkinin ekonomiye yayılmasındadır. D maliye politikasının ayrı bir gecikmesidir."
      }
    ]
  };
})();
