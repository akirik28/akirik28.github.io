/* Kitora not defteri · mi404 · 4.4 Tekelci Rekabet
   Kaynak: CED Topic 4.4 (PRD-3.B.10). Blok türleri: /ap/_kit/defter.js başı.
   Sayılar (okul çevresindeki kafe): grafikte 1 birim = 10 TL ve 50 menü.
   Maliyet: ATC = 4/Q + 1 + Q/4, MC = 1 + Q/2 (en düşük ATC: Q = 4, ATC = 3, MC ile kesişir). Sabit maliyet 2.000 TL.
   Kısa dönem talep D1: P = 9 − 0,75Q; MR1 = 9 − 1,5Q → MR = MC: Q = 4 (200 menü), P = 6 (60 TL), ATC = 3 (30 TL), kâr 6.000 TL.
   Zarar: D3: P = 3 − 0,25Q; MR3 = 3 − 0,5Q → Q = 2 (100 menü), P = 2,5 (25 TL), ATC = 3,5 (35 TL), zarar 1.000 TL.
   Uzun dönem: D2: P = 5 − 0,75Q (ATC'ye Q = 2'de teğet): MR2 = 5 − 1,5Q = MC → Q = 2 (100 menü), P = ATC = 3,5 (35 TL), kâr 0.
   Fazla kapasite: 200 − 100 = 100 menü. D2 ile MC'nin kesiştiği yer Q = 3,2 (160 menü), P = 2,6. */
window.DEFTER = {
  slug: "mi404",
  amac: "Bu konu tekelci rekabeti (*monopolistic competition*) anlatıyor: çok firma, farklılaştırılmış ürün ve serbest giriş-çıkış. Kısa dönemde kâr ya da zararı, uzun dönemde giriş ve çıkışın ekonomik kârı nasıl sıfırladığını, fazla kapasiteyi ve P > MC verimsizliğini öğreneceksin.",
  bolumler: [
    {
      baslik: "İki dünyanın karışımı",
      kisa: "Tekelci rekabette rekabetin kolay girişi ile tekelin aşağı eğimli talebi bir arada.",
      bloklar: [
        { tip: "not", metin: "*Monopolistic competition*'da çok sayıda firma ==farklılaştırılmış ürünler== (*differentiated products*) satar ve piyasaya giriş-çıkış serbesttir. Her firma kendi markasının tek satıcısı gibidir; bu yüzden talebi aşağı eğimlidir." },
        { tip: "ikili", sol: { ikon: "🌾", baslik: "Tam rekabete benzer yanı", maddeler: ["Çok sayıda firma", "Serbest giriş ve çıkış", "Uzun dönemde ekonomik kâr sıfır"] },
          sag: { ikon: "👑", baslik: "Tekele benzer yanı", maddeler: ["Talep aşağı eğimli", "MR < P, MR = MC'de üretir", "P > MC"] },
          oyun: [
            { metin: "Okul çevresinde onlarca kafe var ve yeni bir kafe açmak kolay.", cevap: "sol", neden: "Çok firma, serbest giriş: rekabetin özelliği." },
            { metin: "Her kafenin menüsü biraz farklı; fiyatını bir ölçüde kendisi koyar.", cevap: "sag", neden: "Farklılaştırılmış ürün, aşağı eğimli talep: tekele benzer." },
            { metin: "Uzun dönemde kafeler ekonomik kâr edemez.", cevap: "sol", neden: "Serbest giriş kârı sıfıra indirir, tam rekabetteki gibi." },
            { metin: "Menü fiyatı, bir menüyü üretmenin ek maliyetinin üstünde.", cevap: "sag", neden: "P > MC: tekeldeki gibi." },
            { metin: "Firmanın MR eğrisi talep eğrisinin altından geçiyor.", cevap: "sag", neden: "Aşağı eğimli talep MR < P demektir." }
          ] }
      ]
    },
    {
      baslik: "Ürün farklılaştırma ve reklam",
      kisa: "Firmalar rekabeti fiyatla değil, ürünü ayrıştırarak yapar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎨", terim: "Product differentiation", tr: "ürün farklılaştırma", tanim: "Ürünü rakiplerinden ayıran özellik: tat, mekân, marka, hizmet. Talebi daha az esnek yapar.", ornek: "Kafenin kendi kurabiyesi ve bahçesi." },
            { ikon: "🏷️", terim: "Non-price competition", tr: "fiyat dışı rekabet", tanim: "Müşteriyi fiyat yerine kalite, marka, konum ve reklamla çekmek.", ornek: "Kafe, sosyal medya reklamıyla öğrencileri çeker." },
            { ikon: "📣", terim: "Advertising", tr: "reklam", tanim: "Ürünü farklılaştırmanın bir yolu: talebi sağa kaydırıp daha az esnek yapmayı amaçlar. Reklam harcaması ATC'yi yükseltir.", ornek: "Reklam bütçesi kafenin maliyetine eklenir." }
          ] },
        { tip: "tuzak", metin: "Başarılı bir reklam talebi artırır ama piyasa serbest girişe açık kaldıkça kâr yeni firmaları çeker.", yanlis: "Reklam başarılıysa firma uzun dönemde de ekonomik kâr eder.", dogru: "Giriş serbest olduğu için uzun dönemde ekonomik kâr yine sıfıra iner; üstelik reklam maliyeti ATC'yi yükseltir." }
      ]
    },
    {
      baslik: "Kısa dönem: kâr, zarar ya da sıfır",
      kisa: "Kısa dönemde tekelci rekabetçi firma kâr da edebilir, zarar da.",
      bloklar: [
        { tip: "grafik", baslik: "Kafenin kısa dönem dengesi: kâr ve zarar", xlabel: "Miktar (menü)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "100" }, { v: 4, label: "200" }], yticks: [{ v: 3, label: "30" }, { v: 6, label: "60" }],
          ogeler: [
            { id: "kar", tip: "alan", renk: 1, noktalar: [[0, 3], [4, 3], [4, 6], [0, 6]], gizli: true },
            { id: "loss", tip: "alan", renk: 2, noktalar: [[0, 2.5], [2, 2.5], [2, 3.5], [0, 3.5]], gizli: true },
            { id: "D", tip: "cizgi", renk: 0, from: [0, 9], to: [8.8, 2.4], etiket: "D" },
            { id: "MR", tip: "cizgi", renk: 3, from: [0, 9], to: [5.6, 0.6], etiket: "MR" },
            { id: "MC", tip: "cizgi", renk: 2, from: [0, 1], to: [9, 5.5], etiket: "MC" },
            { id: "ATC", tip: "egri", renk: 1, noktalar: [[0.5, 9.13], [0.75, 6.52], [1, 5.25], [1.5, 4.04], [2, 3.5], [3, 3.08], [4, 3], [5, 3.05], [6, 3.17], [7, 3.32], [8, 3.5], [9, 3.69]], etiket: "ATC" },
            { id: "D3", tip: "cizgi", renk: 0, from: [0, 3], to: [9, 0.75], etiket: "D₃", gizli: true },
            { id: "MR3", tip: "cizgi", renk: 3, from: [0, 3], to: [5.6, 0.2], etiket: "MR₃", gizli: true },
            { id: "E1", tip: "nokta", renk: 3, x: 4, y: 3, kilavuz: true, gizli: true },
            { id: "B1", tip: "nokta", renk: 0, x: 4, y: 6, etiket: "P = 60", kilavuz: true, gizli: true },
            { id: "E3", tip: "nokta", renk: 3, x: 2, y: 2, kilavuz: true, gizli: true },
            { id: "P3", tip: "nokta", renk: 0, x: 2, y: 2.5, kilavuz: true, gizli: true },
            { id: "C3", tip: "nokta", renk: 1, x: 2, y: 3.5, kilavuz: true, gizli: true },
            { id: "karT", tip: "yazi", x: 0.9, y: 3.3, metin: "Kâr", gizli: true }
          ],
          durumlar: [
            { metin: "Kısa dönemde bölgede az kafe var. Talep (D) aşağı eğimli; MR onun altında. MC yükselir, ATC U biçimindedir." },
            { metin: "Her firma gibi kafe de ==MR = MC== noktasında üretir: **200 menü**.", goster: ["E1"] },
            { metin: "Fiyat talepten okunur: **60 TL**. Bu miktarda ATC **30 TL**. Kâr = (60 − 30) × 200 = ==6.000 TL==.", goster: ["B1", "kar", "karT"] },
            { metin: "Talep zayıfsa (D₃): MR₃ = MC → **100 menü**, fiyat **25 TL**. ATC **35 TL**: P < ATC, yani ==zarar== = (35 − 25) × 100 = 1.000 TL. P, değişken maliyetin (15 TL) üstünde olduğundan kısa dönemde üretmeyi sürdürür.", gizle: ["D", "MR", "E1", "B1", "kar", "karT"], goster: ["D3", "MR3", "E3", "P3", "C3", "loss"] }
          ] },
        { tip: "ornek", baslik: "Kafenin kısa dönem kârı", durum: "Kafenin MR = MC olduğu miktar 200 menü, talepten okunan fiyat 60 TL ve bu miktardaki ATC 30 TL. Ekonomik kâr nedir ve uzun dönemde ne olur?",
          adimlar: [
            "Toplam gelir TR = P × Q = 60 × 200 = 12.000 TL.",
            "Toplam maliyet TC = ATC × Q = 30 × 200 = 6.000 TL.",
            "Ekonomik kâr = 12.000 − 6.000 = 6.000 TL (aynı sonuç: (P − ATC) × Q = 30 × 200).",
            "Bu kâr yeni kafeleri çeker; talep sola kayar. Fiyat ATC'ye eşitlenince, örneğin P = ATC = 35 TL ve Q = 100 menüde, kâr = (35 − 35) × 100 = 0 olur."
          ],
          sonuc: "Kısa dönemde ekonomik kâr 6.000 TL; yeni firmalar girdikçe kâr uzun dönemde 0'a iner." },
        { tip: "tuzak", baslik: "Q'yu ATC'nin tabanından alma", metin: "Bu çizimde MR = MC noktası tesadüfen ATC'nin en düşük noktasına denk geliyor. Genel kural bu değildir.", yanlis: "Kâr maksimize eden firma ATC'nin en düşük noktasında üretir.", dogru: "Q'yu ==MR = MC== belirler. Kâr (ya da zarar), o Q'daki P ile ATC'nin farkıdır." }
      ]
    },
    {
      baslik: "Uzun dönem: giriş kârı sıfıra indirir",
      kisa: "Serbest giriş talebi ATC'ye teğet olana dek sola kaydırır; kâr sıfırlanır.",
      bloklar: [
        { tip: "grafik", baslik: "Giriş ile uzun dönem dengesi", xlabel: "Miktar (menü)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "100" }, { v: 4, label: "200" }], yticks: [{ v: 2, label: "20" }, { v: 3, label: "30" }, { v: 6, label: "60" }],
          ogeler: [
            { id: "kar", tip: "alan", renk: 1, noktalar: [[0, 3], [4, 3], [4, 6], [0, 6]] },
            { id: "dwl", tip: "alan", renk: 2, noktalar: [[2, 3.5], [2, 2], [3.2, 2.6]], gizli: true },
            { id: "Dk", tip: "cizgi", renk: 0, kesik: true, from: [0, 9], to: [8.8, 2.4], etiket: "", gizli: true },
            { id: "D", tip: "cizgi", renk: 0, from: [0, 9], to: [8.8, 2.4], etiket: "D₁" },
            { id: "MR2", tip: "cizgi", renk: 3, from: [0, 5], to: [3.3, 0.05], etiket: "MR₂", gizli: true },
            { id: "MC", tip: "cizgi", renk: 2, from: [0, 1], to: [9, 5.5], etiket: "MC" },
            { id: "ATC", tip: "egri", renk: 1, noktalar: [[0.5, 9.13], [0.75, 6.52], [1, 5.25], [1.5, 4.04], [2, 3.5], [3, 3.08], [4, 3], [5, 3.05], [6, 3.17], [7, 3.32], [8, 3.5], [9, 3.69]], etiket: "ATC" },
            { id: "ok", tip: "ok", renk: 3, from: [4.9, 5.2], to: [1.8, 5.2], gizli: true },
            { id: "E2", tip: "nokta", renk: 3, x: 2, y: 2, kilavuz: true, gizli: true },
            { id: "T", tip: "nokta", renk: 1, x: 2, y: 3.5, etiket: "P = ATC", kilavuz: true, gizli: true },
            { id: "Mn", tip: "nokta", renk: 2, x: 4, y: 3, kilavuz: true, gizli: true },
            { id: "ok2", tip: "ok", renk: 2, from: [2, 1.2], to: [4, 1.2], gizli: true },
            { id: "ok2T", tip: "yazi", x: 3, y: 0.25, metin: "fazla kapasite", gizli: true },
            { id: "karT", tip: "yazi", x: 0.9, y: 3.3, metin: "Kâr" }
          ],
          durumlar: [
            { metin: "Başlangıç: kısa dönemde kafe **6.000 TL** ekonomik kâr ediyor (P = 60, ATC = 30, Q = 200)." },
            { metin: "Kâr yeni kafeleri çeker (==serbest giriş==). Müşteriler daha çok kafeye bölünür: talep ==sola kayar== (D₁ → D₂) ve ikame arttığı için aynı fiyatta daha esnek olur. Kâr azalır.", gizle: ["kar", "karT"], goster: ["Dk", "MR2", "ok"], set: { D: { from: [0, 5], to: [6.6, 0.05], etiket: "D₂" } } },
            { metin: "Giriş, talep ATC'ye ==teğet== olana dek sürer. MR₂ = MC → **100 menü**; fiyat talepten **35 TL** ve tam ATC'ye eşit: ==P = ATC==, ekonomik kâr 0. Artık giren ya da çıkan olmaz.", gizle: ["ok"], goster: ["E2", "T"] },
            { metin: "Teğet nokta ATC'nin ==en düşük noktasının solunda==. ATC en düşük değerine (30 TL) 200 menüde iner; kafe 100 menüde üretiyor. Aradaki 100 menü ==fazla kapasite== (*excess capacity*).", gizle: ["MR2", "E2"], goster: ["Mn", "ok2", "ok2T"], set: { T: { kilavuz: false }, Mn: { kilavuz: false } } },
            { metin: "Fiyat (35 TL) MC'nin (20 TL) üstünde: ==P > MC==. Talep ile MC'nin kesiştiği yere (160 menü) kadar alıcıya da kafeye de yarayacak menüler satılmıyor: *DWL*.", gizle: ["ok2", "ok2T", "Mn"], goster: ["dwl"] }
          ] },
        { tip: "adimlar", baslik: "Uzun dönem dengesine nasıl varılır?", adimlar: [
            { baslik: "Kâr varsa: giriş", metin: "Yeni firmalar girer; mevcut firmaların talebi sola kayar ve esnekleşir. Kâr azalır." },
            { baslik: "Zarar varsa: çıkış", metin: "Bazı firmalar kapanır; kalanların talebi sağa kayar. Zarar azalır." },
            { baslik: "Kâr sıfırsa: denge", metin: "P = ATC olunca giren ya da çıkan kalmaz; talep ATC'ye ==teğettir==." }
          ] }
      ]
    },
    {
      baslik: "Fazla kapasite ve P > MC",
      kisa: "Uzun dönemde miktar ATC'nin taban miktarından azdır; P > MC kalır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏭", terim: "Excess capacity", tr: "fazla kapasite", tanim: "Firmanın uzun dönemde ATC'yi en aza indirecek miktardan daha az üretmesi; kapasitenin bir kısmı boş kalır.", ornek: "Kafe 200 menüye göre kurulu ama günde 100 menü satıyor." },
            { ikon: "⚖️", terim: "Allocative inefficiency", tr: "kaynak dağılımı verimsizliği", tanim: "P > MC olduğunda alıcının değer verdiği ama üretilmeyen birimler vardır; bu bir *DWL* doğurur.", ornek: "Menü 35 TL, ek menünün maliyeti 20 TL: yarar sağlayacak ek menüler satılmıyor." }
          ] },
        { tip: "tablo", baslik: "Uzun dönemde üç yapı", head: ["", "Tam rekabet", "Tekelci rekabet", "Tekel"], rows: [
            ["Ekonomik kâr", "0", "0", "Sürebilir"],
            ["Fiyat – MC", "P = MC", "P > MC", "P > MC"],
            ["Üretim ATC tabanında mı?", "Evet", "Hayır, solunda (fazla kapasite)", "Bir kural yok"]
          ] },
        { tip: "tuzak", metin: "Tekelci rekabetin uzun dönem çizimi tam rekabete benzediği için en çok karıştırılan yerdir.", yanlis: "Uzun dönemde talep, ATC'nin en düşük noktasına teğet olur.", dogru: "Talep aşağı eğimli olduğundan ATC'ye ancak ATC'nin ==azalan== kısmında teğet olabilir; bu yüzden miktar, taban miktarından küçük kalır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Tekelci rekabet: çok firma, farklılaştırılmış ürün, serbest giriş-çıkış; talep aşağı eğimli.",
            "Firmalar reklam ve ürün farklılaştırmayla (*non-price competition*) rekabet eder; reklam ATC'yi yükseltir.",
            "Kısa dönemde kâr, zarar ya da sıfır ekonomik kâr olabilir; Q'yu her zaman MR = MC belirler, fiyatı talep.",
            "Kâr = (P − ATC) × Q. Kâr girişi, zarar çıkışı getirir.",
            "Uzun dönemde giriş-çıkış ekonomik kârı sıfıra indirir: talep ATC'ye teğet, P = ATC.",
            "Teğet nokta ATC'nin azalan kısmında olduğundan miktar taban miktarından azdır: fazla kapasite (*excess capacity*).",
            "P > MC olduğundan kaynak dağılımı verimsizdir (*DWL*)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Uzun dönemde dengede olan bir tekelci rekabet firması için hangisi doğrudur?",
      opts: ["P = MC = minimum ATC", "P = ATC ve P > MC; ekonomik kâr sıfırdır", "P > ATC; firma pozitif ekonomik kâr eder", "P = MC; firma verimli miktarı üretir"], a: 1,
      why: "Serbest giriş kârı sıfırlar: talep ATC'ye teğet, P = ATC. Talep aşağı eğimli olduğundan MR < P ve P > MC'dir. \"P = MC = minimum ATC\" tam rekabetin uzun dönem koşuludur ve en çekici tuzaktır." },
    { q: "Tabloda kısa dönemde tekelci rekabet gösteren bir kafenin verileri var. Kâr maksimize eden kafenin ekonomik kârı kaç TL'dir?",
      fig: { type: "table", head: ["Miktar (menü)", "MR (TL)", "MC (TL)", "Fiyat (TL)", "ATC (TL)"], rows: [["100", "60", "30", "70", "55"], ["200", "40", "40", "60", "50"], ["300", "20", "60", "50", "52"]] },
      opts: ["4.000", "12.000", "2.000", "0"], a: 2,
      why: "MR = MC = 40 olduğu miktar 200 menüdür. Fiyat 60, ATC 50: kâr = (60 − 50) × 200 = 2.000 TL. 4.000 (P − MC) × Q'dur; MC'yi ATC yerine kullanmak çok yapılan hatadır. 12.000 toplam gelirdir." },
    { q: "Bir semtte tekelci rekabetçi kafelerin hepsi zarar ediyor (P < ATC). Uzun dönemde ne olur?",
      opts: ["Yeni kafeler açılır; talep sola kayar.", "Fiyat MC'ye düşene kadar zarar sürer.", "Kafelerin talebi sola kayar ve zarar sıfıra iner.", "Bazı kafeler kapanır; kalanların talebi sağa kayar ve zarar sıfıra iner."], a: 3,
      why: "Zarar çıkışı getirir. Çıkan firmaların müşterileri kalanlara geçer: kalan firmaların talebi sağa kayar, P = ATC olunca denge kurulur. Talebin sola kayması kâr durumunun (girişin) sonucudur." },
    { q: "Uzun dönemde tekelci rekabetçi bir firma neden fazla kapasiteyle çalışır?",
      opts: ["Firma kâr maksimizasyonunu bırakıp MC = ATC'de üretir.", "Talep, ATC'ye azalan kısmında teğet olur; miktar ATC'yi en aza indiren miktardan azdır.", "Firma tam rekabetli olduğu için P = MC koşulunu sağlar.", "Giriş engeli nedeniyle pozitif kâr eder."], a: 1,
      why: "Aşağı eğimli talep ATC'ye ancak ATC'nin azalan kısmında teğet olabilir; üretim taban miktarının solunda kalır. Firma yine MR = MC'de üretir; tam rekabetli değildir ve giriş serbest olduğundan kâr sıfırdır." },
    { q: "Bir kafe büyük bir reklam kampanyası yapıyor. Reklamın beklenen doğrudan etkisi nedir?",
      opts: ["Kafenin talebi sağa kayar ve daha az esnek hale gelir; reklam maliyeti ATC'yi yükseltir.", "Talep sola kayar ve esnekleşir.", "Kafe *price taker* hale gelir.", "Uzun dönemde pozitif ekonomik kâr garanti olur."], a: 0,
      why: "Reklamın amacı ürünü farklılaştırıp talebi sağa kaydırmak ve daha az esnek yapmaktır; harcama ATC'yi yukarı iter. Giriş serbest olduğundan uzun dönemde kâr yine sıfıra iner: son şık yanlış." }
  ]
};
