/* Kitora not defteri · mc405 · 4.5 Para Piyasası
   Kaynak: AP Macroeconomics CED, Topic 4.5 (MKT-3). Blok türleri: /ap/_kit/defter.js başı.
   Not: yardımcı işlevler yalnızca durumları üretir. Taban: MD (1,9)→(9,1), MS dikey x = 5, denge (5,5);
   1 birim = %1 (dikey) ve 100 milyar TL (yatay). Kaymalar 2 birim. */
window.DEFTER = (function () {
  /* Durum: yalnız `acik` listesindeki ögeler görünür (eksiksiz ve güvenli) */
  var DENGE = ["MD", "MS", "E", "h7", "p7a", "p7b", "g7", "t7", "okd", "td", "h3", "p3a", "p3b", "g3", "t3", "oku", "tu"];
  function acD(metin, acik) { return { metin: metin, goster: acik, gizle: DENGE.filter(function (x) { return acik.indexOf(x) < 0; }) }; }
  var KAY = ["MD", "MS", "MDk", "MSk", "MD1", "MD2", "MS1", "MS2", "okDR", "okDL", "okSR", "okSL", "E0", "Edr", "Edl", "Esr", "Esl"];
  function acK(metin, acik) { return { metin: metin, goster: acik, gizle: KAY.filter(function (x) { return acik.indexOf(x) < 0; }) }; }

  return {
    slug: "mc405",
    amac: "Bu konu para piyasasını anlatıyor: nominal faiz, paranın fiyatı gibi çalışır. Aşağı eğimli para talebi ile dikey para arzının dengesini, denge bozulunca faizin nasıl ayarlandığını ve hangi olayların eğrileri kaydırdığını öğreneceksin.",
    bolumler: [
      {
        baslik: "Para piyasası: nominal faiz paranın fiyatı",
        kisa: "Para piyasasında yatay eksen para miktarı, dikey eksen nominal faizdir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🏦", terim: "Money market", tr: "para piyasası", tanim: "Para talebi ile para arzının buluştuğu ve nominal faizin belirlendiği model.", ornek: "Merkez Bankası'nın faiz kararını bu modelle okuruz." },
              { ikon: "🙋", terim: "Money demand (MD)", tr: "para talebi", tanim: "İnsanların ve firmaların elinde tutmak istediği para miktarı. Nominal faizle ters yönlüdür.", ornek: "Faiz düşünce kumbarada daha çok para tutmak ucuzlar." },
              { ikon: "🖨️", terim: "Money supply (MS)", tr: "para arzı", tanim: "Dolaşımdaki toplam para. Merkez Bankası'nın belirlediği para tabanına bağlıdır, faizden bağımsızdır.", ornek: "Merkez Bankası para tabanını artırınca MS sağa kayar." }
            ] },
          { tip: "ikili", sol: { ikon: "💵", baslik: "Para piyasası (4.5)", maddeler: ["Dikey eksen: nominal faiz", "Arz dikey: Merkez Bankası belirler", "Talep aşağı eğimli: faiz, para tutmanın maliyeti"] },
            sag: { ikon: "🏗️", baslik: "Ödünç fon piyasası (4.7)", maddeler: ["Dikey eksen: reel faiz", "Arz yukarı eğimli: tasarruf edenler", "Talep aşağı eğimli: borçlananlar"] } }
        ]
      },
      {
        baslik: "Para talebi: faiz arttıkça az para tutarsın",
        kisa: "Nominal faiz yükselince para tutmanın maliyeti artar, istenen para azalır.",
        bloklar: [
          { tip: "adimlar", baslik: "Faiz ↑ → istenen para ↓", adimlar: [
              { baslik: "Faiz yükselir", metin: "Tahvil ve mevduat daha çok kazandırır; elinde para tutmanın fırsat maliyeti (4.1) artar." },
              { baslik: "Varlık dağılımı değişir", metin: "İnsanlar nakitten ve vadesiz hesaptan tahvile kayar." },
              { baslik: "İstenen para azalır", metin: "Yani MD aşağı eğimlidir. Faiz düşünce tersi olur: daha çok para tutulur." }
            ] },
          { tip: "grafik", baslik: "Para talebi eğrisi (MD) üzerinde hareket", xlabel: "Para miktarı (milyar TL)", ylabel: "Nominal faiz", xmax: 11, ymax: 10,
            xticks: [{ v: 2, label: "200" }, { v: 5, label: "500" }, { v: 8, label: "800" }],
            yticks: [{ v: 2, label: "%2" }, { v: 5, label: "%5" }, { v: 8, label: "%8" }],
            ogeler: [
              { id: "MD", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "MD" },
              { id: "P", tip: "nokta", renk: 1, x: 2, y: 8, etiket: "%8 → 200", kilavuz: true, gizli: true }
            ],
            durumlar: [
              { metin: "Para talebi eğrisi **MD**: nominal faiz ne kadar yüksekse insanlar o kadar az para tutmak ister. Grafikte 1 birim = %1 ve 100 milyar TL." },
              { metin: "Faiz **%8**: insanlar yalnızca 200 milyar TL tutmak ister.", goster: ["P"] },
              { metin: "Faiz **%5**'e düşer: istenen para 500 milyar TL. Eğri ==üzerinde== aşağı ve sağa hareket.", set: { P: { x: 5, y: 5, etiket: "%5 → 500" } } },
              { metin: "Faiz **%2**: istenen para 800 milyar TL. Faizin kendisi eğriyi ==kaydırmaz==, yalnızca üzerinde hareket ettirir.", set: { P: { x: 8, y: 2, etiket: "%2 → 800" } } }
            ] }
        ]
      },
      {
        baslik: "Denge faizi ve dengesizlik",
        kisa: "Denge faizinde istenen para ile arz edilen para eşittir.",
        bloklar: [
          { tip: "grafik", baslik: "Para piyasasında denge ve faizin ayarlanması", xlabel: "Para miktarı (milyar TL)", ylabel: "Nominal faiz", xmax: 11, ymax: 10,
            xticks: [{ v: 3, label: "300" }, { v: 5, label: "500" }, { v: 7, label: "700" }],
            yticks: [{ v: 3, label: "%3" }, { v: 5, label: "%5" }, { v: 7, label: "%7" }],
            ogeler: [
              { id: "MD", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "MD" },
              { id: "MS", tip: "cizgi", renk: 1, from: [5, 0], to: [5, 9.5], etiket: "MS" },
              { id: "E", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "E", kilavuz: true },
              { id: "h7", tip: "cizgi", renk: 3, kesik: true, from: [0, 7], to: [9, 7], etiket: "", gizli: true },
              { id: "p7a", tip: "nokta", renk: 3, x: 3, y: 7, etiket: "", gizli: true },
              { id: "p7b", tip: "nokta", renk: 3, x: 5, y: 7, etiket: "", gizli: true },
              { id: "g7", tip: "ok", renk: 3, from: [3.2, 7], to: [4.8, 7], gizli: true },
              { id: "t7", tip: "yazi", x: 5.3, y: 7.6, metin: "fazla para = 200", hiza: "start", gizli: true },
              { id: "okd", tip: "ok", renk: 2, from: [7.5, 6.8], to: [7.5, 5.6], gizli: true },
              { id: "td", tip: "yazi", x: 7.9, y: 6.1, metin: "faiz ↓", hiza: "start", gizli: true },
              { id: "h3", tip: "cizgi", renk: 3, kesik: true, from: [0, 3], to: [9, 3], etiket: "", gizli: true },
              { id: "p3a", tip: "nokta", renk: 3, x: 7, y: 3, etiket: "", gizli: true },
              { id: "p3b", tip: "nokta", renk: 3, x: 5, y: 3, etiket: "", gizli: true },
              { id: "g3", tip: "ok", renk: 3, from: [5.2, 3], to: [6.8, 3], gizli: true },
              { id: "t3", tip: "yazi", x: 0.4, y: 2.1, metin: "para açığı = 200", hiza: "start", gizli: true },
              { id: "oku", tip: "ok", renk: 2, from: [1.5, 3.3], to: [1.5, 4.5], gizli: true },
              { id: "tu", tip: "yazi", x: 1.9, y: 3.8, metin: "faiz ↑", hiza: "start", gizli: true }
            ],
            durumlar: [
              acD("**Denge:** MD ve MS %5'te kesişir; insanlar tam arz edilen 500 milyar TL'yi tutmak ister. Denge nominal faizi **%5**.", ["MD", "MS", "E"]),
              acD("Faiz denge üstünde, **%7**: istenen para 300, arz edilen 500. 200 milyar TL **fazla para** (*surplus*) var.", ["MD", "MS", "E", "h7", "p7a", "p7b", "g7", "t7"]),
              acD("Fazla paradan kurtulmak isteyenler **tahvil alır**: tahvil fiyatları artar, faiz ==düşer== ve %5'e iner.", ["MD", "MS", "E", "h7", "p7a", "p7b", "g7", "t7", "okd", "td"]),
              acD("Faiz denge altında, **%3**: istenen para 700, arz edilen 500. 200 milyar TL **para açığı** (*shortage*) var.", ["MD", "MS", "E", "h3", "p3a", "p3b", "g3", "t3"]),
              acD("Para isteyenler **tahvil satar**: tahvil fiyatları düşer, faiz ==yükselir== ve %5'e çıkar.", ["MD", "MS", "E", "h3", "p3a", "p3b", "g3", "t3", "oku", "tu"]),
              acD("Faiz yalnızca **denge faizinde** durur: yukarıdan da aşağıdan da piyasa onu %5'e çeker.", ["MD", "MS", "E"])
            ] },
          { tip: "tablo", baslik: "Dengesizlik ve tahvil piyasası", head: ["Faiz", "Para piyasasında", "Tahvil piyasasında", "Sonuç"], rows: [
              ["Denge üstünde (%7)", "Para fazlası (*surplus*)", "Tahvil alınır: fiyat ↑", "Faiz ↓"],
              ["Denge altında (%3)", "Para açığı (*shortage*)", "Tahvil satılır: fiyat ↓", "Faiz ↑"]
            ], not: "4.1'deki tahvil fiyatı–faiz ters ilişkisi burada devreye giriyor: tahvil fiyatı artarken faiz düşer." },
          { tip: "tuzak", baslik: "MS neden dikey?", metin: "Para piyasası modelinde para arzı faize göre değişmez; Merkez Bankası para tabanını belirler.", yanlis: "Faiz yükselince bankalar daha çok para yaratır, o yüzden MS yukarı eğimlidir.", dogru: "Modelde MS ==dikey== çizilir: nominal faizden bağımsızdır. MS ancak Merkez Bankası'nın para politikasıyla kayar." }
        ]
      },
      {
        baslik: "Eğriler kayınca faiz değişir",
        kisa: "MD kayarsa faiz aynı yöne, MS kayarsa zıt yöne gider.",
        bloklar: [
          { tip: "grafik", baslik: "Dört kayma: fiyat düzeyi, mobil ödeme, para tabanı artar / azalır", xlabel: "Para miktarı", ylabel: "Nominal faiz", xmax: 11, ymax: 10,
            xticks: [{ v: 5, label: "M*" }], yticks: [{ v: 5, label: "i*" }],
            ogeler: [
              { id: "MD", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "MD" },
              { id: "MS", tip: "cizgi", renk: 1, from: [5, 0], to: [5, 9.5], etiket: "MS" },
              { id: "MDk", tip: "cizgi", renk: 0, kesik: true, from: [1, 9], to: [9, 1], etiket: "", gizli: true },
              { id: "MSk", tip: "cizgi", renk: 1, kesik: true, from: [5, 0], to: [5, 9.5], etiket: "", gizli: true },
              { id: "MD1", tip: "cizgi", renk: 3, from: [3, 9], to: [10, 2], etiket: "MD₁", gizli: true },
              { id: "MD2", tip: "cizgi", renk: 3, from: [0, 8], to: [8, 0], etiket: "MD₂", gizli: true },
              { id: "MS1", tip: "cizgi", renk: 2, from: [7, 0], to: [7, 9.5], etiket: "MS₁", gizli: true },
              { id: "MS2", tip: "cizgi", renk: 2, from: [3, 0], to: [3, 9.5], etiket: "MS₂", gizli: true },
              { id: "okDR", tip: "ok", renk: 3, from: [3.2, 7], to: [4.8, 7], gizli: true },
              { id: "okDL", tip: "ok", renk: 3, from: [2.8, 7], to: [1.2, 7], gizli: true },
              { id: "okSR", tip: "ok", renk: 2, from: [5.3, 8.5], to: [6.7, 8.5], gizli: true },
              { id: "okSL", tip: "ok", renk: 2, from: [4.7, 8.5], to: [3.3, 8.5], gizli: true },
              { id: "E0", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "%5", kilavuz: true },
              { id: "Edr", tip: "nokta", renk: 1, x: 5, y: 7, etiket: "%7 ↑", kilavuz: true, gizli: true },
              { id: "Edl", tip: "nokta", renk: 1, x: 5, y: 3, etiket: "%3 ↓", kilavuz: true, gizli: true },
              { id: "Esr", tip: "nokta", renk: 1, x: 7, y: 3, etiket: "%3 ↓", kilavuz: true, gizli: true },
              { id: "Esl", tip: "nokta", renk: 1, x: 3, y: 7, etiket: "%7 ↑", kilavuz: true, gizli: true }
            ],
            durumlar: [
              acK("Başlangıç: denge nominal faizi %5.", ["MD", "MS", "E0"]),
              acK("**Fiyat düzeyi artar** (ya da gelir artar): aynı alışverişi yapmak için daha çok para gerekir, *MD* ==sağa== kayar. Para miktarı sabit olduğundan faiz **%7**'ye yükselir.", ["MDk", "MD1", "MS", "okDR", "Edr"]),
              acK("**Mobil ödeme yaygınlaşır** (nakit ihtiyacı azalır): *MD* ==sola== kayar. Faiz **%3**'e düşer.", ["MDk", "MD2", "MS", "okDL", "Edl"]),
              acK("**Merkez Bankası para tabanını artırır:** *MS* ==sağa== kayar. Faiz **%3**'e düşer.", ["MD", "MSk", "MS1", "okSR", "Esr"]),
              acK("**Merkez Bankası para tabanını azaltır:** *MS* ==sola== kayar. Faiz **%7**'ye yükselir.", ["MD", "MSk", "MS2", "okSL", "Esl"])
            ] },
          { tip: "tablo", baslik: "Kaydıranlar", head: ["Olay", "Kayan eğri", "Yön", "Denge faizi"], rows: [
              ["Fiyat düzeyi ↑", "MD", "Sağa", "↑"],
              ["Fiyat düzeyi ↓", "MD", "Sola", "↓"],
              ["Reel GSYH (gelir) ↑", "MD", "Sağa", "↑"],
              ["Ödeme teknolojisi (kart, mobil ödeme) yaygınlaşır", "MD", "Sola", "↓"],
              ["Merkez Bankası para arzını artırır", "MS", "Sağa", "↓"],
              ["Merkez Bankası para arzını azaltır", "MS", "Sola", "↑"]
            ] },
          { tip: "tuzak", baslik: "Faiz değişince MD kaymaz", metin: "Faiz, para piyasasının içinde belirlenen fiyattır; değişince eğrinin üzerinde hareket olur.", yanlis: "Faiz arttı, o halde MD sola kaydı.", dogru: "Kayma için faiz dışında bir etken gerekir: MD için fiyat düzeyi, gelir ya da ödeme teknolojisi; MS için para politikası. Tost 40 TL'den 80 TL'ye çıkarsa aynı alışveriş için daha çok nakit gerekir: MD sağa kayar." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Para piyasasında yatay eksen para miktarı, dikey eksen ==nominal== faizdir (ödünç fon piyasasında reel faiz).",
              "MD aşağı eğimlidir: faiz yükselince para tutmanın fırsat maliyeti artar, istenen para azalır.",
              "MS dikeydir: para tabanını Merkez Bankası belirler, faiz bunu değiştirmez.",
              "Denge faizinde istenen para = arz edilen para.",
              "Faiz denge üstündeyse para fazlası var: tahvil alınır, tahvil fiyatı ↑, faiz ↓.",
              "Faiz denge altındaysa para açığı var: tahvil satılır, tahvil fiyatı ↓, faiz ↑.",
              "MD'yi fiyat düzeyi, reel gelir ve ödeme teknolojisi kaydırır: fiyat düzeyi ↑ ya da gelir ↑ ise MD sağa, faiz ↑.",
              "MS'yi para politikası kaydırır: MS sağa → faiz ↓; MS sola → faiz ↑. Faizin kendi değişimi eğriyi kaydırmaz."
            ] }
        ]
      }
    ],
    sorular: [
      {
        q: "Grafikte para piyasası gösteriliyor. Nominal faiz %7 iken ne olur?",
        fig: { type: "graph", xlabel: "Para miktarı", ylabel: "Nominal faiz", xmax: 10, ymax: 10,
          lines: [{ from: [1, 9], to: [9, 1], label: "MD" }, { from: [5, 0], to: [5, 9.5], label: "MS", color: 1 }],
          hlines: [{ p: 7, label: "%7" }], points: [{ q: 5, p: 5, label: "E", guides: true }],
          xticks: [{ v: 5, label: "500" }], yticks: [{ v: 5, label: "%5" }, { v: 7, label: "%7" }] },
        opts: ["Arz edilen para (500), istenen parayı (300) aşar; insanlar tahvil alır, tahvil fiyatları artar ve faiz %5'e iner", "İstenen para arzı aşar; insanlar tahvil satar ve faiz yükselir", "Piyasa dengededir; faiz değişmez", "MS eğrisi sola kayar"],
        a: 0,
        why: "%7'de MD eğrisi üzerinde istenen para 300, MS'de arz edilen para 500'dür: 200 milyar TL fazla para var. Fazlalığı olanlar tahvil alır; tahvil fiyatı artınca faiz düşer. B tersine para açığı için doğru olurdu."
      },
      {
        q: "Ekonomide fiyat düzeyi genel olarak yükseliyor; diğer şeyler sabit. Para piyasasında ne olur?",
        opts: ["MS sağa kayar; faiz düşer", "MD sağa kayar; faiz yükselir", "MD sola kayar; faiz düşer", "MS sola kayar; faiz yükselir"],
        a: 1,
        why: "Fiyatlar yükselince aynı alışveriş için daha çok para gerekir: MD sağa kayar. MS değişmediğinden denge faizi yükselir. MS'yi kaydıran, fiyat düzeyi değil, Merkez Bankası'nın politikasıdır."
      },
      {
        q: "Mobil ödeme uygulamaları yaygınlaşıyor ve insanlar eskisine göre daha az nakit tutuyor. Para piyasasında diğer şeyler sabitken ne olur?",
        opts: ["MD sağa kayar; faiz yükselir", "MD sağa kayar; faiz düşer", "MD sola kayar; faiz yükselir", "MD sola kayar; faiz düşer"],
        a: 3,
        why: "Ödeme teknolojisi, aynı alışveriş için gereken para miktarını azaltır: MD sola kayar. MS sabit kaldığı için denge faizi düşer. C'de MD'nin yönü doğru ama faiz hatalıdır."
      },
      {
        q: "Para piyasası modelinde para arzı eğrisi (MS) neden dikey çizilir?",
        opts: ["Bankalar faiz yükselince daha çok kredi verir", "Para arzı Merkez Bankası'nın belirlediği para tabanına bağlıdır ve nominal faizden bağımsızdır", "İnsanlar faiz ne olursa olsun hep aynı miktarda para ister", "Dikey çizmek yalnızca grafiği kolaylaştırır, ekonomik bir nedeni yoktur"],
        a: 1,
        why: "Para tabanı Merkez Bankası'nca belirlenir; model para arzını faizden bağımsız kabul eder ve MS dikeydir. A'daki fikir MS'yi yukarı eğimli yapardı. C ise talebin değil arzın özelliğini karıştırıyor."
      },
      {
        q: "Nominal faiz denge faizinin altında. Para piyasasında hangi zincir işler?",
        opts: ["Para açığı olur; insanlar tahvil satar, tahvil fiyatları düşer ve faiz yükselir", "Para fazlası olur; insanlar tahvil satar ve faiz yükselir", "Para açığı olur; insanlar tahvil alır, tahvil fiyatları artar ve faiz yükselir", "Para fazlası olur; insanlar tahvil alır ve faiz yükselir"],
        a: 0,
        why: "Denge faizinin altında istenen para arz edilenden fazladır: para açığı. İnsanlar para bulmak için tahvil satar; tahvil fiyatı düşünce faiz yükselir (4.1'deki ters ilişki). Diğer şıklar ya durumu yanlış adlandırıyor ya da tahvil fiyatını ve faizi birlikte yükseltiyor."
      }
    ]
  };
})();
