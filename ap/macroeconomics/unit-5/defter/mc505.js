/* Kitpath not defteri · mc505 · 5.5 Dışlama Etkisi
   Kaynak: CED Topic 5.5 (POL-3.C). Blok türleri: /ap/_kit/defter.js başı.
   Taban (ödünç fon): S y = x, D₁ y = 10 − x, D₂ y = 12 − x; denge (5,5) → (6,6). Grafik biriminde 1 = 100 milyar TL. */
window.DEFTER = (function () {
  function dur(tum, metin, acik) {
    return { metin: metin, goster: acik, gizle: tum.filter(function (x) { return acik.indexOf(x) < 0; }) };
  }

  /* ---- Grafik 1: ödünç fon piyasası ---- */
  var T1 = ["S", "D1", "D1k", "D2", "okD", "E1", "E2", "P", "gap", "gt"];
  var G1 = {
    tip: "grafik", baslik: "Ödünç fon piyasası: hükümet borçlanınca reel faiz yükselir", xlabel: "Ödünç fon miktarı", ylabel: "Reel faiz oranı", xmax: 10, ymax: 10,
    xticks: [{ v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }],
    yticks: [{ v: 5, label: "r₁" }, { v: 6, label: "r₂" }],
    ogeler: [
      { id: "S", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "S" },
      { id: "D1", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "D₁" },
      { id: "D1k", tip: "cizgi", renk: 0, kesik: true, from: [1, 9], to: [9, 1], etiket: "", gizli: true },
      { id: "D2", tip: "cizgi", renk: 3, from: [3, 9], to: [10, 2], etiket: "D₂", gizli: true },
      { id: "okD", tip: "ok", renk: 3, from: [3.4, 7.6], to: [4.6, 7.6], gizli: true },
      { id: "E1", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "E₁", kilavuz: true },
      { id: "E2", tip: "nokta", renk: 1, x: 6, y: 6, etiket: "E₂", kilavuz: true, gizli: true },
      { id: "P", tip: "nokta", renk: 2, x: 4, y: 6, etiket: "özel yatırım", kilavuz: true, gizli: true },
      { id: "gap", tip: "ok", renk: 3, from: [4.1, 6], to: [5.9, 6], gizli: true },
      { id: "gt", tip: "yazi", x: 5, y: 6.6, metin: "kamu = 2", gizli: true }
    ],
    durumlar: [
      dur(T1, "Başlangıç: firmaların ödünç fon talebi **D₁**, hanehalkı tasarrufu **S**. Denge **E₁**: reel faiz r₁, fon miktarı 5 (500 milyar TL), hepsi özel yatırım.", ["S", "D1", "E1"]),
      dur(T1, "Hükümet bütçe açığını borçlanarak kapatmak ister ve piyasaya girer: ödünç fon talebi ==sağa kayar (D₂)==. Aynı tasarruf için artık hükümet de sıraya girdi.", ["S", "D1k", "D2", "okD", "E1"]),
      dur(T1, "Yeni denge **E₂**: reel faiz r₁'den ==r₂'ye yükselir==, toplam fon 5'ten 6'ya çıkar.", ["S", "D1k", "D2", "E2"]),
      dur(T1, "r₂'de firmaların özel yatırım talebi (D₁ üzerinde) yalnız **4**'tür. Hükümet 2'sini alıyor (4 → 6). Özel yatırım 5'ten 4'e düştü: ==*crowding out*==.", ["S", "D1", "D2", "E1", "E2", "P", "gap", "gt"])
    ]
  };

  /* ---- Grafik 2: AD–AS, kısa dönemde dışlama ---- */
  var T2 = ["LR", "SR", "AD1", "AD1k", "AD2", "AD2k", "AD3", "okL", "E1", "E2", "E3"];
  var G2 = {
    tip: "grafik", baslik: "Dışlama, maliye politikasının AD etkisini kısmen geri alır", xlabel: "Reel GSYH", ylabel: "Fiyat düzeyi", xmax: 10, ymax: 10,
    xticks: [{ v: 5, label: "Y₁" }, { v: 5.5, label: "Y₃" }, { v: 6, label: "Yf" }],
    yticks: [{ v: 5, label: "P₁" }, { v: 6, label: "P₂" }],
    ogeler: [
      { id: "LR", tip: "cizgi", renk: 2, from: [6, 0], to: [6, 9.6], etiket: "LRAS" },
      { id: "SR", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "SRAS" },
      { id: "AD1", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "AD₁" },
      { id: "AD1k", tip: "cizgi", renk: 0, kesik: true, from: [1, 9], to: [9, 1], etiket: "", gizli: true },
      { id: "AD2", tip: "cizgi", renk: 3, from: [3, 9], to: [10, 2], etiket: "AD₂", gizli: true },
      { id: "AD2k", tip: "cizgi", renk: 3, kesik: true, from: [3, 9], to: [10, 2], etiket: "", gizli: true },
      { id: "AD3", tip: "cizgi", renk: 2, from: [2, 9], to: [10, 1], etiket: "AD₃", gizli: true },
      { id: "okL", tip: "ok", renk: 2, from: [3.9, 8], to: [3.1, 8], gizli: true },
      { id: "E1", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "E₁", kilavuz: true },
      { id: "E2", tip: "nokta", renk: 3, x: 6, y: 6, etiket: "E₂", kilavuz: true, gizli: true },
      { id: "E3", tip: "nokta", renk: 2, x: 5.5, y: 5.5, etiket: "E₃", kilavuz: true, gizli: true }
    ],
    durumlar: [
      dur(T2, "Başlangıç: resesyon açığı, denge **E₁**, çıktı Yf'in altında.", ["LR", "SR", "AD1", "E1"]),
      dur(T2, "Hükümet açık vererek harcar; çarpanla AD, ==AD₂=='ye kayacak ve çıktı Yf'e ulaşacak gibi görünür (**E₂**).", ["LR", "SR", "AD1k", "AD2", "E2"]),
      dur(T2, "Ama hükümet borçlanınca reel faiz yükselir, firmalar yatırımı kısar: AD biraz geri çekilir (==AD₃==). Gerçek denge **E₃**: çıktı Yf'e ulaşamaz.", ["LR", "SR", "AD1k", "AD2k", "AD3", "okL", "E3"])
    ]
  };

  /* ---- Grafik 3: uzun dönemde dışlama ve büyüme ---- */
  var T3 = ["AD", "L1", "L2", "L2k", "L3", "E1", "E2", "E3"];
  var G3 = {
    tip: "grafik", baslik: "Uzun dönem: dışlama LRAS'ın sağa kaymasını yavaşlatır", xlabel: "Reel GSYH", ylabel: "Fiyat düzeyi", xmax: 10, ymax: 10,
    xticks: [{ v: 5, label: "Y₁" }, { v: 6, label: "Y₃" }, { v: 7, label: "Y₂" }],
    yticks: [{ v: 5, label: "P₂" }, { v: 6, label: "P₃" }, { v: 7, label: "P₁" }],
    ogeler: [
      { id: "AD", tip: "cizgi", renk: 0, from: [3, 9], to: [10, 2], etiket: "AD" },
      { id: "L1", tip: "cizgi", renk: 2, from: [5, 0], to: [5, 9.6], etiket: "LRAS₁" },
      { id: "L2", tip: "cizgi", renk: 1, from: [7, 0], to: [7, 9.6], etiket: "LRAS₂", gizli: true },
      { id: "L2k", tip: "cizgi", renk: 1, kesik: true, from: [7, 0], to: [7, 9.6], etiket: "", gizli: true },
      { id: "L3", tip: "cizgi", renk: 3, from: [6, 0], to: [6, 9.6], etiket: "LRAS₃", gizli: true },
      { id: "E1", tip: "nokta", renk: 0, x: 5, y: 7, etiket: "E₁", kilavuz: true },
      { id: "E2", tip: "nokta", renk: 1, x: 7, y: 5, etiket: "E₂", kilavuz: true, gizli: true },
      { id: "E3", tip: "nokta", renk: 3, x: 6, y: 6, etiket: "E₃", kilavuz: true, gizli: true }
    ],
    durumlar: [
      dur(T3, "Başlangıç: uzun dönem denge **E₁**, çıktı Y₁.", ["AD", "L1", "E1"]),
      dur(T3, "Dışlama olmasaydı: yatırım yüksek, fiziksel sermaye stoku hızla büyür, LRAS ==LRAS₂=='ye kayardı (**E₂**).", ["AD", "L1", "L2", "E2"]),
      dur(T3, "Dışlama varsa: özel yatırım düşük, sermaye daha yavaş birikir. LRAS yalnız ==LRAS₃=='e kayar (**E₃**): ==daha az büyüme==.", ["AD", "L1", "L2k", "L3", "E3"])
    ]
  };

  return {
    slug: "mc505",
    amac: "Bu konu hükümet borçlanınca özel kesimin neden geri çekildiğini anlatıyor. Ödünç fon piyasasında hükümet borçlanmasının reel faizi nasıl yükselttiğini, özel yatırımın neden azaldığını ve bunun uzun dönemde büyümeyi neden yavaşlattığını öğreneceksin.",
    bolumler: [
      {
        baslik: "Dışlama etkisi: zincir",
        kisa: "Hükümet borçlanınca faiz artar ve özel harcama geri çekilir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🚪", terim: "Crowding out", tr: "dışlama etkisi", tanim: "Hükümetin borçlanmasının reel faizi yükseltip faize duyarlı özel kesim harcamasını (özellikle yatırımı) azaltması.", ornek: "Devlet tahvil satınca banka, firmaya vereceği krediyi daha pahalıya verir; fabrika yatırımı ertelenir." },
              { ikon: "🏠", terim: "Interest-sensitive spending", tr: "faize duyarlı harcama", tanim: "Faiz arttığında hızla azalan harcamalar: firmaların yatırımı, konut, dayanıklı tüketim malları.", ornek: "Krediyle alınan otomobil ya da tost makinesi." }
            ] },
          { tip: "adimlar", baslik: "Zincirin halkaları", adimlar: [
              { baslik: "1 · Açık", metin: "Hükümet vergi gelirinden fazla harcar: bütçe açığı." },
              { baslik: "2 · Borçlanma", metin: "Açığı kapatmak için tahvil satar, yani ödünç fon piyasasından borç alır." },
              { baslik: "3 · Reel faiz yükselir", metin: "Ödünç fon talebi sağa kayar; fon pahalanır." },
              { baslik: "4 · Özel yatırım azalır", metin: "Faiz yüksekken firmalar ve hanehalkları daha az borçlanıp harcar: dışlanırlar." }
            ] }
        ]
      },
      {
        baslik: "Ödünç fon piyasasında dışlama",
        kisa: "Hükümet fon talebini artırınca reel faiz yükselir; özel yatırım azalır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🏦", terim: "Loanable funds market", tr: "ödünç fon piyasası", tanim: "Tasarruf edenlerin (arz, S) ve borç isteyenlerin (talep, D) buluştuğu piyasa; fiyatı reel faiz oranıdır.", ornek: "Yatırım yapmak isteyen firmalar talep eder, tasarruf eden hanehalkları arz eder." }
            ] },
          G1,
          { tip: "tuzak", metin: "Grafikte neyin kaydığına dikkat: kayan hükümetin fon talebidir.", yanlis: "Özel yatırım talebi (D₁) sola kayar ve yatırım azalır.", dogru: "Hükümet borçlanması fon talebini ==sağa== kaydırır (D₂). Özel yatırım, faiz yükseldiği için D₁ ==üzerinde== daha küçük bir miktara hareket eder." },
          { tip: "ornek", baslik: "Dışlanan yatırım ne kadar?", durum: "Kantistan'da hükümet borçlanmasından önce ödünç fon piyasası reel faiz %5'te dengededir ve 500 milyar TL'nin tamamı özel yatırımdır. Hükümet borçlanınca reel faiz %6 olur ve toplam fon 600 milyar TL'ye çıkar. Hükümet 200 milyar TL'sini almaktadır.",
            adimlar: ["Toplam fon 600 milyar TL; hükümet 200 milyar TL alıyor.", "Özel yatırım = 600 − 200 = 400 milyar TL.", "Önceki özel yatırım 500 milyar TL idi: 500 − 400 = 100 milyar TL azalma."],
            sonuc: "==100 milyar TL özel yatırım dışlandı.== Fon miktarı 500'den 600'e çıktı ama bunun 200'ü hükümete gitti." }
        ]
      },
      {
        baslik: "Kısa dönemde AD'ye etkisi",
        kisa: "Dışlama, maliye politikasının AD'yi sağa kaydırma etkisini kısmen geri alır.",
        bloklar: [
          { tip: "not", metin: "Hükümetin açık harcaması AD'yi sağa kaydırır; ama yükselen reel faiz yatırımı azaltır ve AD'nin bir kısmını geri çeker. Net sonuç yine sağa kayma olabilir; ==etki küçülür==, genellikle yok olmaz." },
          G2
        ]
      },
      {
        baslik: "Uzun dönemde büyüme maliyeti",
        kisa: "Daha az yatırım, daha az sermaye birikimi ve daha yavaş büyüme demektir.",
        bloklar: [
          { tip: "not", metin: "Yatırım fabrika, makine ve bina demektir: fiziksel sermaye. Sürekli açık ve sürekli dışlama sermaye birikimini yavaşlatır. Daha az sermaye, ekonominin üretim kapasitesinin (LRAS ve PPC) daha yavaş büyümesi demektir." },
          G3,
          { tip: "tablo", baslik: "Dışlamanın kısa ve uzun dönem sonuçları", head: ["Dönem", "Ne olur?", "Neden?"], rows: [
              ["Kısa", "AD'ye katkı kısmen azalır", "Faiz yükselir, yatırım düşer"],
              ["Uzun", "LRAS daha az kayar, büyüme yavaşlar", "Fiziksel sermaye daha yavaş birikir"]
            ] }
        ]
      },
      {
        baslik: "Tersi: *crowding in* ve etkiyi azaltanlar",
        kisa: "Fazla veren hükümet faizi düşürür; para otoritesi faizi sabit tutarsa dışlama azalır.",
        bloklar: [
          { tip: "ikili", sol: { ikon: "🚪", baslik: "*Crowding out*", maddeler: ["Bütçe açığı, hükümet borçlanır", "Fon talebi sağa, reel faiz ↑", "Özel yatırım ↓"] },
            sag: { ikon: "🧲", baslik: "*Crowding in*", maddeler: ["Bütçe fazlası, hükümet borçlanmayı azaltır", "Kamu tasarrufu ↑: fon arzı sağa, reel faiz ↓", "Özel yatırım ↑"] },
            oyun: [
              { metin: "Hükümet vergileri indirip açığı büyüttü, tahvil satışı arttı.", cevap: "sol", neden: "Borçlanma artıyor: dışlama." },
              { metin: "Bütçe fazlası veren hükümet borcunu geri ödüyor, faiz düşüyor.", cevap: "sag", neden: "Borçlanma azalıyor: özel yatırım artar." },
              { metin: "Hükümet harcamasını artırdı, reel faiz yükseldi, firmalar yatırım ertelendi.", cevap: "sol", neden: "Özel yatırım azaldı: dışlama." },
              { metin: "Hükümetin ödünç fon talebi azaldı, kredi ucuzladı, fabrika yatırımları arttı.", cevap: "sag", neden: "Faiz düştü, yatırım arttı: *crowding in*." }
            ] },
          { tip: "not", metin: "Dışlama her zaman aynı güçte değildir. Yatırım faize ne kadar duyarlıysa o kadar güçlüdür. Merkez Bankası para arzını artırarak faizin yükselmesini engellerse de dışlama zayıflar." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Açık veren hükümet genellikle borçlanır (tahvil satar).",
              "Ödünç fon piyasasında hükümet borçlanması fon talebini sağa kaydırır; reel faiz yükselir.",
              "*Crowding out*: yükselen faiz yüzünden faize duyarlı özel harcama (özellikle yatırım) azalır.",
              "Grafikte kayan şey hükümetin talebidir; özel yatırım D₁ üzerinde daha küçük bir miktara hareket eder.",
              "Kısa dönemde dışlama, maliye politikasının AD etkisini kısmen geri alır.",
              "Uzun dönemde daha az yatırım daha az fiziksel sermaye ve daha yavaş büyüme demektir (LRAS daha az kayar).",
              "Bütçe fazlası faizi düşürüp özel yatırımı artırabilir (*crowding in*).",
              "Merkez Bankası para arzını artırarak faizi sabit tutarsa dışlama azalır."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Grafik, hükümetin bütçe açığını finanse etmek için ödünç fon piyasasına girmesiyle D₁'in D₂'ye kaymasını gösteriyor. Aşağıdakilerden hangisi doğrudur?",
        fig: { type: "graph", xlabel: "Ödünç fon miktarı", ylabel: "Reel faiz oranı", xmax: 10, ymax: 10,
          lines: [{ from: [1, 1], to: [9, 9], label: "S", color: 1 }, { from: [1, 9], to: [9, 1], label: "D₁", color: 0 }, { from: [3, 9], to: [10, 2], label: "D₂", color: 3 }],
          points: [{ q: 5, p: 5, label: "E₁", guides: true }, { q: 6, p: 6, label: "E₂", guides: true }],
          xticks: [{ v: 5, label: "5" }, { v: 6, label: "6" }], yticks: [{ v: 5, label: "r₁" }, { v: 6, label: "r₂" }] },
        opts: ["Reel faiz düşer ve özel yatırım artar.", "Reel faiz yükselir ve özel yatırım azalır.", "Reel faiz yükselir ve özel yatırım artar.", "Reel faiz değişmez ve özel yatırım azalır."], a: 1,
        why: "Hükümet borçlanması ödünç fon talebini sağa kaydırır: reel faiz yükselir. Faiz yükselince özel yatırım, D₁ üzerinde daha küçük bir miktara iner: *crowding out*. A şıkkı faizin, C şıkkı yatırımın yönünü yanlış söylüyor." },
      { q: "Bir hükümet vergileri indirip açığı borçlanarak kapatıyor. Aşağıdakilerden hangisi *crowding out*'un işaretidir?",
        opts: ["Merkez Bankası zorunlu karşılık oranını düşürür.", "Dış ticaret açığı azalır.", "Hanehalkı tasarrufu artar.", "Reel faiz yükselir ve firmaların yatırımı azalır."], a: 3,
        why: "*Crowding out*, hükümet borçlanmasının reel faizi yükseltip özel yatırımı azaltmasıdır. Zorunlu karşılığı düşürmek para politikasıdır; tasarruf artışı fon arzını artırıp faizi düşürürdü." },
      { q: "Tabloda ödünç fon piyasasında hükümetin borçlanmasından önceki ve sonraki durum verilmiştir. Özel yatırım ne kadar dışlanmıştır?",
        fig: { type: "table", head: ["Durum", "Reel faiz (%)", "Toplam fon", "Hükümet borçlanması"], rows: [["Önce", "4", "300", "0"], ["Sonra", "6", "380", "150"]], caption: "Milyar TL" },
        opts: ["150 milyar TL", "80 milyar TL", "70 milyar TL", "230 milyar TL"], a: 2,
        why: "Sonra özel yatırım = 380 − 150 = 230; önce 300'dü. Dışlanan = 300 − 230 = 70 milyar TL. B şıkkı toplam fondaki artıştır (80), özel yatırımdaki azalış değil." },
      { q: "Bir ülkede yıllarca süren yüksek bütçe açıkları ve sürekli *crowding out* uzun dönemde hangi sonuca yol açabilir?",
        opts: ["Fiziksel sermaye birikimi azalır ve büyüme yavaşlar.", "LRAS hızla sağa kayar.", "Reel faiz kalıcı olarak düşer.", "Doğal işsizlik oranı sıfıra iner."], a: 0,
        why: "Özel yatırım azalınca makine ve fabrika stoku daha yavaş büyür; ekonominin üretim kapasitesi (LRAS) daha az artar. B ve C şıkları dışlamanın tersini söyler." },
      { q: "Grafikte hükümet harcamasını artırıyor ve AD₁'den AD₂'ye kaymasını bekliyor; ancak gerçekte AD₃ oluşuyor. AD₂'den AD₃'e geri çekilme neyi gösterir?",
        fig: { type: "graph", xlabel: "Reel GSYH", ylabel: "Fiyat düzeyi", xmax: 10, ymax: 10,
          lines: [{ from: [6, 0], to: [6, 9.6], label: "LRAS", color: 2 }, { from: [1, 1], to: [9, 9], label: "SRAS", color: 1 }, { from: [1, 9], to: [9, 1], label: "AD₁", color: 0 }, { from: [3, 9], to: [10, 2], label: "AD₂", color: 3 }, { from: [2, 9], to: [10, 1], label: "AD₃", dash: true, color: 2 }],
          points: [{ q: 5, p: 5, label: "E₁", guides: true }, { q: 5.5, p: 5.5, label: "E₃", guides: true }],
          xticks: [{ v: 6, label: "Yf" }], yticks: [] },
        opts: ["Daraltıcı para politikası vergileri artırmıştır.", "Dışlama etkisi: yükselen faiz özel yatırımı azaltarak etkiyi kısmen geri alır.", "Harcama çarpanı büyümüştür.", "Hükümet vergi indirimine geçmiştir."], a: 1,
        why: "Hükümet borçlanması reel faizi yükseltir, yatırım azalır ve AD planlanan AD₂ yerine AD₃'te kalır; maliye politikasının etkisi kısmen geri alınmıştır. C şıkkı yanlış: çarpan büyüseydi AD daha çok sağa kayardı." }
    ]
  };
})();
