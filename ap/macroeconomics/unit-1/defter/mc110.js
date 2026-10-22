/* Kitora not defteri · mc110 · 1.6 Dengenin Değişmesi ve Çift Kayma
   Kaynak: ap-videolar/src/episodes/mc110 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı.
   Not: yardımcı işlevler yalnızca tekrar eden arz-talep kayma durumlarını üretir.
   Taban: D (2,8)→(8,2), S (2,2)→(8,8), denge (5,5); kaymalar 2 birim. */
window.DEFTER = (function () {
  var TUM = ["D", "S", "Dk", "Sk", "D1", "D2", "S1", "S2", "okDR", "okDL", "okSR", "okSL", "E0", "Edr", "Edl", "Esr", "Esl", "Euu", "Eds", "Edd", "Esu"];
  function kur(sayisal) {
    var e = function (a, b) { return sayisal ? a : b; };
    return [
      { id: "D", tip: "cizgi", renk: 0, from: [2, 8], to: [8, 2], etiket: "D" },
      { id: "S", tip: "cizgi", renk: 1, from: [2, 2], to: [8, 8], etiket: "S" },
      { id: "Dk", tip: "cizgi", renk: 0, kesik: true, from: [2, 8], to: [8, 2], etiket: "", gizli: true },
      { id: "Sk", tip: "cizgi", renk: 1, kesik: true, from: [2, 2], to: [8, 8], etiket: "", gizli: true },
      { id: "D1", tip: "cizgi", renk: 3, from: [4, 8], to: [10, 2], etiket: "D₁", gizli: true },
      { id: "D2", tip: "cizgi", renk: 3, from: [0, 8], to: [6, 2], etiket: "D₂", gizli: true },
      { id: "S1", tip: "cizgi", renk: 2, from: [4, 2], to: [10, 8], etiket: "S₁", gizli: true },
      { id: "S2", tip: "cizgi", renk: 2, from: [0, 2], to: [6, 8], etiket: "S₂", gizli: true },
      { id: "okDR", tip: "ok", renk: 3, from: [3.2, 7], to: [4.8, 7], gizli: true },
      { id: "okDL", tip: "ok", renk: 3, from: [2.8, 7], to: [1.2, 7], gizli: true },
      { id: "okSR", tip: "ok", renk: 2, from: [3.2, 3], to: [4.8, 3], gizli: true },
      { id: "okSL", tip: "ok", renk: 2, from: [2.8, 3], to: [1.2, 3], gizli: true },
      { id: "E0", tip: "nokta", renk: 0, x: 5, y: 5, etiket: e("50 TL · 500", "Denge"), kilavuz: true },
      { id: "Edr", tip: "nokta", renk: 1, x: 6, y: 6, etiket: e("60 TL · 600", "P↑ Q↑"), kilavuz: true, gizli: true },
      { id: "Edl", tip: "nokta", renk: 1, x: 4, y: 4, etiket: e("40 TL · 400", "P↓ Q↓"), kilavuz: true, gizli: true },
      { id: "Esr", tip: "nokta", renk: 1, x: 6, y: 4, etiket: e("40 TL · 600", "P↓ Q↑"), kilavuz: true, gizli: true },
      { id: "Esl", tip: "nokta", renk: 1, x: 4, y: 6, etiket: e("60 TL · 400", "P↑ Q↓"), kilavuz: true, gizli: true },
      { id: "Euu", tip: "nokta", renk: 1, x: 7, y: 5, etiket: "Q↑ kesin · P ?", kilavuz: true, gizli: true },
      { id: "Eds", tip: "nokta", renk: 1, x: 5, y: 7, etiket: "P↑ kesin · Q ?", kilavuz: true, gizli: true },
      { id: "Edd", tip: "nokta", renk: 1, x: 3, y: 5, etiket: "Q↓ kesin · P ?", kilavuz: true, gizli: true },
      { id: "Esu", tip: "nokta", renk: 1, x: 5, y: 3, etiket: "P↓ kesin · Q ?", kilavuz: true, gizli: true }
    ];
  }
  /* Durum: yalnız `acik` listesindeki ögeler görünür (eksiksiz ve güvenli) */
  function ac(metin, acik, ek) {
    var tumu = TUM.concat(ek || []);
    return { metin: metin, goster: acik, gizle: tumu.filter(function (x) { return acik.indexOf(x) < 0; }) };
  }
  var BAZ = ["D", "S", "E0"];
  function graf(baslik, durumlar, sayisal, ekstraOgeler) {
    return {
      tip: "grafik", baslik: baslik, xlabel: sayisal ? "Miktar (külah)" : "Miktar", ylabel: sayisal ? "Fiyat (TL)" : "Fiyat", xmax: 11, ymax: 10,
      xticks: sayisal ? [{ v: 4, label: "400" }, { v: 5, label: "500" }, { v: 6, label: "600" }] : [{ v: 5, label: "Qe" }],
      yticks: sayisal ? [{ v: 4, label: "40" }, { v: 5, label: "50" }, { v: 6, label: "60" }] : [{ v: 5, label: "Pe" }],
      ogeler: kur(sayisal).concat(ekstraOgeler || []), durumlar: durumlar
    };
  }

  return {
    slug: "mc110",
    ozet: "Haberler arz ve talebi kaydırır; ekonomist de kâğıda iki eğri çizip fiyatın nereye gittiğini tahmin eder. Bu defterde üç adımlı yöntemi (önce çiz, değişimi analiz et, yeni dengeyi söyle), dört tek kaymanın sonuçlarını, iki tuzağı, komşu piyasalara sıçrayan zinciri, iki eğri birden kayınca ortaya çıkan *double shift rule*'u (biri hep *indeterminate*) ve neden belirsiz olduğunu sayılarla göreceksin.",
    bolumler: [
      {
        baslik: "Haber bülteni ve dört olasılık",
        bloklar: [
          { tip: "hikaye", ikon: "📺", baslik: "Son dakika!",
            metin: "Haber bülteni açık. Domates fiyatları uçtu. Yaz sıcakları rekor kırıyor. Yeni bir makine dondurma üretimini ikiye katladı. Bir ekonomist bu haberleri duyunca kâğıda iki eğri çizer ve fiyatın nereye gideceğini tahmin eder. Sırrı şu: tek bir haber yalnızca **dört** şeyden birini yapabilir. Bugün o dördünü ve işin asıl zorlaştığı yeri göreceğiz." },
          { tip: "liste", maddeler: [
              { ikon: "➡️", baslik: "Talep sağa kayar", metin: "*Increase in demand*" },
              { ikon: "⬅️", baslik: "Talep sola kayar", metin: "*Decrease in demand*" },
              { ikon: "↗️", baslik: "Arz sağa kayar", metin: "*Increase in supply*" },
              { ikon: "↙️", baslik: "Arz sola kayar", metin: "*Decrease in supply*" }
            ] },
          { tip: "not", metin: "Tek bir haber, bu dört kaymadan yalnızca birini yapar. İşin zorlaştığı yer: iki haber aynı anda gelirse (çift kayma). Önce tek kaymaları öğreneceğiz." }
        ]
      },
      {
        baslik: "Easy as 1-2-3: üç adım",
        bloklar: [
          { tip: "adimlar", baslik: "Her soruda aynı üç adım", adimlar: [
              { baslik: "1 · Önce (Before)", metin: "Arz ve talebi çiz, denge fiyatını ve miktarını işaretle (Pe, Qe)." },
              { baslik: "2 · Değişim (Change)", metin: "Olay kimi etkiliyor, alıcıları mı satıcıları mı? Alıcıysa *demand*, satıcıysa *supply* kayar. Hangi *shifter*, hangi yön? Sağ artış, sol azalış; oku çizmeyi unutma." },
              { baslik: "3 · Sonra (After)", metin: "Yeni dengeyi bul; fiyat ve miktar ne oldu, söyle." }
            ] },
          graf("1. adım: önce çiz", [
            ac("Arz ve talebi çiz.", ["D", "S"]),
            ac("Denge fiyatını ve miktarını işaretle: **Pe** ve **Qe**.", BAZ)
          ], false),
          { tip: "ikili", sol: { ikon: "🛍️", baslik: "Alıcıyı etkiler → talep kayar", maddeler: ["Zevk, haber, hava, reklam", "Alıcı sayısı, gelir", "İkame/tamamlayıcı fiyatı, alıcı beklentisi"] },
            sag: { ikon: "🏭", baslik: "Satıcıyı etkiler → arz kayar", maddeler: ["Girdi fiyatı", "Teknoloji, satıcı sayısı", "Vergi, sübvansiyon, düzenleme, satıcı beklentisi"] },
            oyun: [
              { metin: "Yeni makine aynı sürede iki kat dondurma yapıyor.", cevap: "sag", neden: "Teknoloji: satıcı tarafı, arz." },
              { metin: "Sıcak hava dalgası geldi.", cevap: "sol", neden: "Alıcıların isteği değişti: talep." },
              { metin: "Süt (girdi) pahalandı.", cevap: "sag", neden: "Girdi fiyatı: arz." },
              { metin: "Okula 200 yeni öğrenci geldi.", cevap: "sol", neden: "Alıcı sayısı: talep." }
            ] }
        ]
      },
      {
        baslik: "Talep kayınca: fiyat ve miktar aynı yöne",
        bloklar: [
          { tip: "not", metin: "Dondurma piyasasıyla başlayalım: denge **50 lira, günde 500 külah**. Grafikte 1 birim = 100 külah ve 10 TL." },
          graf("Sıcak ve soğuk hava", [
            ac("Başlangıç: denge 50 TL, 500 külah.", BAZ),
            ac("Sıcak hava dalgası geldi. Bu alıcıları etkiler: *demand* ==sağa== kayar (eski eğri kesikli). Yeni denge **60 lira, 600 külah**: fiyat da miktar da arttı.", ["Dk", "D1", "S", "okDR", "Edr"]),
            ac("Yaz birden kışa dönerse? *Demand* ==sola== kayar. Yeni denge **40 lira, 400 külah**: ikisi de düştü.", ["Dk", "D2", "S", "okDL", "Edl"]),
            ac("Talep kayınca fiyat ve miktar ==hep aynı yöne== gider.", ["Dk", "D1", "D2", "S", "okDR", "okDL", "Edr", "Edl"])
          ], true),
          { tip: "tablo", baslik: "Talep kayması sonuçları", head: ["Olay", "Talep", "Fiyat", "Miktar", "Denge"], rows: [
              ["Sıcak hava", "Sağa (artış)", "↑", "↑", "60 TL, 600"],
              ["Kış", "Sola (azalış)", "↓", "↓", "40 TL, 400"]
            ], not: "Hafıza kuralı: talep kayınca fiyat ve miktar aynı yöne gider." }
        ]
      },
      {
        baslik: "Arz kayınca: fiyat ve miktar zıt yöne",
        bloklar: [
          graf("Makine ve süt", [
            ac("Başlangıç: denge 50 TL, 500 külah.", BAZ),
            ac("Yeni makine aynı sürede iki kat dondurma yapıyor: bu *technology*, *supply* ==sağa== kayar. Yeni denge **40 lira, 600 külah**: fiyat düştü, miktar arttı.", ["D", "Sk", "S1", "okSR", "Esr"]),
            ac("Süt pahalandı; bu bir *input price*, yani girdi fiyatı: *supply* ==sola== kayar. **60 lira, 400 külah**: fiyat arttı, miktar düştü.", ["D", "Sk", "S2", "okSL", "Esl"]),
            ac("Arz kayınca fiyat ve miktar ==hep zıt yöne== gider.", ["D", "Sk", "S1", "S2", "okSR", "okSL", "Esr", "Esl"])
          ], true),
          { tip: "tablo", baslik: "Dört tek kayma: 2×2 pano", head: ["Kayma", "Fiyat (P)", "Miktar (Q)", "Örnek"], rows: [
              ["Talep sağa", "↑", "↑", "Sıcak hava"],
              ["Talep sola", "↓", "↓", "Kış"],
              ["Arz sağa", "↓", "↑", "Yeni makine"],
              ["Arz sola", "↑", "↓", "Süt pahalandı"]
            ], not: "Talep kayınca P ve Q aynı yönde; arz kayınca zıt yönde." },
          { tip: "formul", parcalar: [
              { t: "Talep kayar", alt: "D→ ya da D←" }, "→",
              { t: "P ve Q aynı yönde", alt: "↑↑ ya da ↓↓" },
              { t: "Arz kayar", alt: "S→ ya da S←" }, "→",
              { t: "P ve Q zıt yönde", alt: "↓↑ ya da ↑↓" }
            ], aciklama: "Ezberlemek yerine her seferinde çiz." },
          { tip: "tuzak", baslik: "Sola kayan arz yukarı görünür", metin: "Arzın sola kayması grafikte \"yukarı\" gibi görünür ama azalıştır.", yanlis: "Arz eğrisi yukarı kaydı, o halde arz arttı.", dogru: "Arzda ==sağ artış, sol azalış==. \"Fiyat arttı\" görmek talebin arttığını göstermez: P↑ Q↓ ise arz azalmıştır." }
        ]
      },
      {
        baslik: "İki tuzak",
        bloklar: [
          graf("Tuzak 1: dondurmanın kendi fiyatı", [
            ac("Dondurmanın kendi fiyatı 30 liraya düşerse hangi eğri kayar?", BAZ),
            ac("**Hiçbiri!** Fiyat yalnızca eğriler üzerinde hareket ettirir. 30 lirada S üzerinde 300, D üzerinde 700 külah var.", ["D", "S", "E0", "pl", "ps", "pd"]),
            ac("Talep edilen 700, arz edilen 300: **400 külahlık shortage**. Eğriler kilitli (NO SHIFT).", ["D", "S", "E0", "pl", "ps", "pd", "gap", "gt"])
          ], true, [
            { id: "pl", tip: "cizgi", renk: 2, from: [0, 3], to: [10, 3], etiket: "30 TL", gizli: true },
            { id: "ps", tip: "nokta", renk: 3, x: 3, y: 3, etiket: "Qs = 300", gizli: true },
            { id: "pd", tip: "nokta", renk: 3, x: 7, y: 3, etiket: "Qd = 700", gizli: true },
            { id: "gap", tip: "ok", renk: 2, from: [3.2, 2.5], to: [6.8, 2.5], gizli: true },
            { id: "gt", tip: "yazi", x: 5, y: 1.8, metin: "SHORTAGE = 400 külah (kayma yok)", gizli: true }
          ]),
          graf("Tuzak 2: dondurmada saç çıktı", [
            ac("Haber: \"Dondurmada saç çıktı!\" Bu satıcının derdi gibi görünür.", BAZ, ["sx", "sv"]),
            ac("Yanlış: arzın sola kaydığını söylemek. Üretim bozulmadı ki.", ["D", "Sk", "S2", "okSL", "Esl", "sx"], ["sx", "sv"]),
            ac("Doğru: artık kimse almak istemiyor, yani ==*demand* sola== kayar: alıcıların zevki ve tercihi değişti.", ["Dk", "D2", "S", "okDL", "Edl", "sv"], ["sx", "sv"])
          ], false, [
            { id: "sx", tip: "yazi", x: 8.5, y: 9, metin: "✗ yanlış taraf", gizli: true },
            { id: "sv", tip: "yazi", x: 8.5, y: 9, metin: "✓ alıcı vazgeçti", gizli: true }
          ]),
          { tip: "ikili", sol: { ikon: "🔒", baslik: "Eğri KAYMAZ", maddeler: ["Malın kendi fiyatı değişti", "Eğri üzerinde hareket", "Shortage/surplus oluşur"] },
            sag: { ikon: "↔️", baslik: "Eğri KAYAR", maddeler: ["Fiyat dışı bir etken değişti", "Alıcı ya da satıcı etkilendi", "Yeni denge oluşur"] },
            oyun: [
              { metin: "Dondurmanın fiyatı 50'den 30 liraya düştü.", cevap: "sol", neden: "Kendi fiyatı: hareket + shortage." },
              { metin: "Dondurmada saç çıktığı haberi yayıldı.", cevap: "sag", neden: "Zevkler değişti: talep kayar." },
              { metin: "Süt pahalandı.", cevap: "sag", neden: "Girdi fiyatı: arz kayar." },
              { metin: "Kantinci tosta indirim yaptı.", cevap: "sol", neden: "Kendi fiyatı değişti: eğri üzerinde hareket." }
            ] },
          { tip: "tuzak", baslik: "Her değişikliğe ayrı grafik", metin: "Bir olayı çizdikten sonra bir sonrakini aynı grafik üzerinde üst üste biriktirme.", yanlis: "Üç haber gelirse hepsini tek grafikte çiz.", dogru: "Her değişikliğe ==ayrı grafik==. Çift kaymayı yalnızca soru açıkça iki değişimi birden verirse uygula." }
        ]
      },
      {
        baslik: "Komşu piyasalara sıçrayan zincir",
        bloklar: [
          { tip: "not", metin: "Bir piyasadaki değişim komşu piyasalara da sıçrar. Zincir **fiyat** üzerinden ilerler: bir sonraki piyasa, öncekinin fiyat değişimine tepki verir." },
          graf("Domates → pizza", [
            ac("**Domates piyasası:** başlangıç.", BAZ),
            ac("Kötü hasat: domates *supply* ==sola== kayar, domates pahalanır (P↑, Q↓).", ["D", "Sk", "S2", "okSL", "Esl"]),
            ac("**Pizza piyasası:** başlangıç. Domates pizzanın girdisi.", BAZ),
            ac("Girdi pahalandı: pizza *supply* ==sola== kayar, pizza pahalanır (P↑, Q↓).", ["D", "Sk", "S2", "okSL", "Esl"])
          ], false),
          graf("Pizza → tost ve kola", [
            ac("**Tost piyasası:** başlangıç. Tost, pizzanın *substitute*'u.", BAZ),
            ac("Pizza pahalanınca öğrenciler tosta geçer: tost *demand* ==sağa== kayar (P↑, Q↑).", ["Dk", "D1", "S", "okDR", "Edr"]),
            ac("**Kola piyasası:** başlangıç. Kola, pizzanın *complement*'i.", BAZ),
            ac("Pizza pahalanınca kola *demand* ==sola== kayar (P↓, Q↓).", ["Dk", "D2", "S", "okDL", "Edl"])
          ], false),
          { tip: "tablo", baslik: "Domino zinciri", head: ["Piyasa", "Bağ", "Kayma", "P / Q"], rows: [
              ["Domates", "Kötü hasat", "Arz sola", "P↑ Q↓"],
              ["Pizza", "Domates = girdi", "Arz sola", "P↑ Q↓"],
              ["Tost", "Pizzanın ikamesi", "Talep sağa", "P↑ Q↑"],
              ["Kola", "Pizzanın tamamlayıcısı", "Talep sola", "P↓ Q↓"]
            ], not: "Bir sonraki piyasa, önceki piyasanın fiyat değişimine tepki verir." },
          { tip: "kavramlar", kartlar: [
              { ikon: "🍅", terim: "Input price", tr: "girdi fiyatı", tanim: "Üretimde kullanılan girdinin fiyatı; artarsa o girdiyi kullanan malın arzı sola kayar.", ornek: "Domates pizzanın girdisi." },
              { ikon: "🔁", terim: "Substitute", tr: "ikame", tanim: "Birinin yerine diğeri alınan mal; birinin fiyatı artınca diğerinin talebi sağa kayar.", ornek: "Pizza ↔ tost." },
              { ikon: "🧩", terim: "Complement", tr: "tamamlayıcı", tanim: "Birlikte tüketilen mal; birinin fiyatı artınca diğerinin talebi sola kayar.", ornek: "Pizza + kola." },
              { ikon: "🕸️", terim: "Related markets", tr: "ilişkili piyasalar", tanim: "Girdi, ikame ya da tamamlayıcı ilişkisiyle bağlı piyasalar; birindeki değişim ötekileri de kaydırır.", ornek: "Domates, pizza, tost, kola." }
            ] }
        ]
      },
      {
        baslik: "Çift kayma: iki eğri aynı anda",
        bloklar: [
          { tip: "not", metin: "Şimdi işin zorlaştığı yer: iki eğri aynı anda kayarsa. **Yaz geldi**, sıcakta herkes karpuz ister: *demand* sağa. Aynı anda **hasat başlar**: *supply* de sağa. Hile şu: ==her kaymayı ayrı çiz, sonra birleştir.==" },
          graf("Talep sağa + arz sağa", [
            ac("Başlangıç: karpuz piyasası.", BAZ),
            ac("**Yalnız talep sağa:** fiyat yukarı, miktar yukarı (P↑ Q↑).", ["Dk", "D1", "S", "okDR", "Edr"]),
            ac("**Yalnız arz sağa:** fiyat aşağı, miktar yukarı (P↓ Q↑).", ["D", "Sk", "S1", "okSR", "Esr"]),
            ac("**Birleştir:** miktar kesin arttı. Fiyat ise ==*indeterminate*==, yani belirsiz: talep yukarı, arz aşağı itiyor.", ["Dk", "D1", "Sk", "S1", "okDR", "okSR", "Euu"])
          ], false),
          { tip: "formul", parcalar: [
              { t: "Talep → P↑ Q↑", alt: "tek başına" }, "+",
              { t: "Arz → P↓ Q↑", alt: "tek başına" }, "=",
              { t: "Q kesin ↑, P belirsiz", alt: "double shift rule" }
            ], aciklama: "Miktar iki kaymada da yukarı gittiği için kesin; fiyat bir yukarı bir aşağı itildiği için belirsiz." },
          { tip: "kavramlar", kartlar: [
              { ikon: "✌️", terim: "Double shift", tr: "çift kayma", tanim: "Arz ve talep eğrilerinin aynı anda kayması.", ornek: "Karpuzda talep ve arz birlikte sağa." },
              { ikon: "❓", terim: "Double shift rule", tr: "çift kayma kuralı", tanim: "İki eğri birlikte kayınca fiyat ya da miktardan biri belirsiz kalır.", ornek: "D→ ve S→: Q kesin artar, P belirsiz." },
              { ikon: "🌫️", terim: "Indeterminate", tr: "belirsiz", tanim: "Kaymaların büyüklüğü bilinmeden yönü söylenemeyen değişken.", ornek: "Karpuzun fiyatı." }
            ] }
        ]
      },
      {
        baslik: "Neden belirsiz? Büyüklüğe bağlı",
        bloklar: [
          { tip: "not", metin: "Cevap kaymaların büyüklüğüne bağlı. Başlangıçta karpuzun kilosu **10 lira**, pazarda **40 ton** satılıyor. Grafikte 1 birim = 10 ton ve 2 TL/kg." },
          { tip: "grafik", baslik: "Üç senaryo, aynı sonuç: Q = 60 ton", xlabel: "Miktar (ton)", ylabel: "Fiyat (TL/kg)", xmax: 11, ymax: 10,
            xticks: [{ v: 4, label: "40" }, { v: 6, label: "60" }],
            yticks: [{ v: 4, label: "8" }, { v: 5, label: "10" }, { v: 6, label: "12" }],
            ogeler: [
              { id: "D0", tip: "cizgi", renk: 0, from: [1, 8], to: [7, 2], etiket: "D" },
              { id: "S0", tip: "cizgi", renk: 1, from: [1, 2], to: [7, 8], etiket: "S" },
              { id: "E0", tip: "nokta", renk: 0, x: 4, y: 5, etiket: "10 TL · 40 ton", kilavuz: true },
              { id: "Da", tip: "cizgi", renk: 3, from: [3, 8], to: [9, 2], etiket: "D'", gizli: true },
              { id: "Sa", tip: "cizgi", renk: 2, from: [3, 2], to: [9, 8], etiket: "S'", gizli: true },
              { id: "Ea", tip: "nokta", renk: 1, x: 6, y: 5, etiket: "10 TL · 60 ton", kilavuz: true, gizli: true },
              { id: "Db", tip: "cizgi", renk: 3, from: [4, 8], to: [10, 2], etiket: "D'", gizli: true },
              { id: "Sb", tip: "cizgi", renk: 2, from: [2, 2], to: [8, 8], etiket: "S'", gizli: true },
              { id: "Eb", tip: "nokta", renk: 1, x: 6, y: 6, etiket: "12 TL · 60 ton", kilavuz: true, gizli: true },
              { id: "Dc", tip: "cizgi", renk: 3, from: [2, 8], to: [8, 2], etiket: "D'", gizli: true },
              { id: "Sc", tip: "cizgi", renk: 2, from: [4, 2], to: [10, 8], etiket: "S'", gizli: true },
              { id: "Ec", tip: "nokta", renk: 1, x: 6, y: 4, etiket: "8 TL · 60 ton", kilavuz: true, gizli: true }
            ],
            durumlar: [
              { metin: "Başlangıç: karpuzun kilosu 10 lira, 40 ton satılıyor." },
              { metin: "**Eşit kayma:** iki eğri de aynı miktarda (2 birim) sağa. Fiyat 10 lirada ==kalır==; miktar 60 ton.", goster: ["Da", "Sa", "Ea"] },
              { metin: "**Talep daha çok kayarsa** (+3 talep, +1 arz): fiyat 12 liraya ==çıkar==; miktar yine 60 ton.", gizle: ["Da", "Sa", "Ea"], goster: ["Db", "Sb", "Eb"] },
              { metin: "**Arz daha çok kayarsa** (+1 talep, +3 arz): fiyat 8 liraya ==iner==; miktar yine 60 ton.", gizle: ["Db", "Sb", "Eb"], goster: ["Dc", "Sc", "Ec"] }
            ] },
          { tip: "tablo", baslik: "Karpuz: üç durumda sonuç", head: ["Senaryo", "Fiyat (TL/kg)", "Miktar (ton)"], rows: [
              ["Başlangıç", "10", "40"],
              ["Eşit kayma (talep +2, arz +2)", "10", "60"],
              ["Talep daha çok (+3, +1)", "12", "60"],
              ["Arz daha çok (+1, +3)", "8", "60"]
            ], not: "Üç durumda da miktar 60 ton (kesin artış); fiyat 12, 10 ya da 8: belirsiz." },
          { tip: "not", metin: "Gerçekte karpuz yazın ucuzlar: demek ki arz **daha çok** kayıyor. Aynı mantık, bayram öncesi hindi gibi gerçek hayat çift kaymalarını açıklar: talep ve arz birlikte artar, fiyat düşer çünkü arz daha çok kaymıştır." }
        ]
      },
      {
        baslik: "Diğer üç çift kayma",
        bloklar: [
          graf("Aynı hile, üç yeni durum", [
            ac("Taban: denge Pe, Qe.", BAZ),
            ac("**Talep sağa + arz sola** (Dubai çikolatası moda; fıstık hasadı kötü): ikisi de fiyatı yukarı iter ==P↑ kesin==; miktarı ters yönlere çeker ==Q ?==.", ["Dk", "D1", "Sk", "S2", "okDR", "okSL", "Eds"]),
            ac("**İkisi de sola:** ==Q↓ kesin==, fiyat belirsiz (P ?).", ["Dk", "D2", "Sk", "S2", "okDL", "okSL", "Edd"]),
            ac("**Talep sola + arz sağa:** ==P↓ kesin==, miktar belirsiz (Q ?).", ["Dk", "D2", "Sk", "S1", "okDL", "okSR", "Esu"])
          ], false),
          { tip: "tablo", baslik: "Dört çift kayma kuralı (2×2)", head: ["", "Arz ↑ (sağ)", "Arz ↓ (sol)"], rows: [
              ["Talep ↑ (sağ)", "Q ↑ kesin · P belirsiz", "P ↑ kesin · Q belirsiz"],
              ["Talep ↓ (sol)", "P ↓ kesin · Q belirsiz", "Q ↓ kesin · P belirsiz"]
            ], not: "Kural: iki kayma aynı yöne itiyorsa kesin, ters yöne itiyorsa belirsiz. Emin değilsen çiz (*when in doubt, graph it out*)." },
          { tip: "ikili", sol: { ikon: "🎯", baslik: "Kesin", maddeler: ["İki kayma aynı yöne itiyor", "Örnek: talep sağa + arz sola → fiyat (ikisi de yukarı iter)", "İki oku birlikte okursun"] },
            sag: { ikon: "❓", baslik: "Belirsiz", maddeler: ["İki kayma ters yöne itiyor", "Örnek: talep sağa + arz sola → miktar (ters yönlere çeker)", "Büyüklükler bilinmeden söylenemez"] },
            oyun: [
              { metin: "Talep sağa + arz sola, fiyat.", cevap: "sol", neden: "İkisi de fiyatı yukarı iter: kesin artış." },
              { metin: "Talep sağa + arz sola, miktar.", cevap: "sag", neden: "Talep miktarı artırır, arz azaltır: belirsiz." },
              { metin: "Talep sola + arz sola, miktar.", cevap: "sol", neden: "İkisi de miktarı azaltır: kesin azalış." },
              { metin: "Talep sola + arz sağa, miktar.", cevap: "sag", neden: "Talep azaltır, arz artırır: belirsiz." },
              { metin: "Talep sola + arz sağa, fiyat.", cevap: "sol", neden: "İkisi de fiyatı aşağı iter: kesin düşüş." }
            ] },
          { tip: "tuzak", baslik: "Çift kaymada ikisini birden söylemek", metin: "Çift kaymada fiyat ve miktarı birlikte kesin söyleyen şık yanlıştır.", yanlis: "Talep ve arz birlikte kayınca hem P hem Q kesin belirlenebilir.", dogru: "Çift kaymada ==biri hep belirsiz== kalır. \"Both price and quantity determinable?\" → hayır." }
        ]
      },
      {
        baslik: "Sınav sorusu: kahve",
        bloklar: [
          graf("Don ve araştırma", [
            ac("Kahve piyasası, başlangıç.", BAZ),
            ac("Brezilya'daki don, kahve hasadını vurdu: *supply* ==sola==.", ["D", "Sk", "S2", "okSL", "Esl"]),
            ac("Aynı hafta kahvenin dikkati artırdığını söyleyen araştırma: *demand* ==sağa==.", ["Dk", "D1", "Sk", "S2", "okDR", "okSL", "Eds"])
          ], false),
          { tip: "ornek", baslik: "Fiyat ve miktar", durum: "Brezilya'daki don, kahve hasadını vurdu. Aynı hafta kahvenin dikkati artırdığını söyleyen bir araştırma yayımlandı. Kahve piyasasında ne olur? Şıklar: (A) Fiyat artar, miktar artar. (B) Fiyat artar, miktar belirsiz. (C) Fiyat belirsiz, miktar düşer. (D) Fiyat düşer, miktar belirsiz.",
            adimlar: ["Don satıcıyı etkiler: arz sola. Fiyat ↑, miktar ↓.", "Araştırma alıcıyı etkiler: talep sağa. Fiyat ↑, miktar ↑.", "İkisi de fiyatı yukarı iter: fiyat kesin artar.", "Miktar: biri azaltır, öteki artırır: belirsiz."],
            sonuc: "==B: fiyat artar, miktar belirsiz.== Don arzı sola, araştırma talebi sağa kaydırır; ikisi de fiyatı yukarı iter ama miktarı ters yönlere çeker." }
        ]
      },
      {
        baslik: "Toparlayalım",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Üç adım: önce çiz (Pe, Qe), değişimi analiz et (kimi etkiliyor, hangi shifter, hangi yön), sonra yeni dengeyi söyle.",
              "Talep kayınca fiyat ve miktar aynı yöne gider (D→ P↑Q↑, D← P↓Q↓).",
              "Arz kayınca fiyat ve miktar zıt yöne gider (S→ P↓Q↑, S← P↑Q↓).",
              "Malın kendi fiyatı hiçbir eğriyi kaydırmaz; yalnızca hareket ve shortage/surplus yaratır.",
              "Önce kimi etkilediğine bak: alıcıyı etkiliyorsa talep, satıcıyı etkiliyorsa arz. Her değişikliğe ayrı grafik.",
              "Bir piyasadaki değişim girdi, ikame ve tamamlayıcı piyasalara sıçrar; zincir fiyat üzerinden ilerler.",
              "İki eğri birlikte kayarsa fiyat ya da miktardan biri hep *indeterminate* kalır (*double shift rule*); her kaymayı ayrı çiz, sonra birleştir.",
              "İki kayma aynı yöne itiyorsa kesin, ters yöne itiyorsa belirsiz; emin değilsen çiz."
            ] }
        ]
      }
    ]
  };
})();
