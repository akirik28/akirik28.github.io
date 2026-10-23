/* Kitpath not defteri · mi503 · 5.3 Tam Rekabetçi Faktör Piyasası
   Kaynak: CED Topic 5.3 (PRD-4.C). Blok türleri: /ap/_kit/defter.js başı.
   Not: grafikte MRP = 60 − 10L (TL); yatay eksen işçi, düşey eksen 10 TL birimi. Ücret 30 TL → L = 3. */
window.DEFTER = (function () {
  var TUM = ["gain", "mrp", "mrpm", "w", "wl", "pt"];
  function ac(metin, acik, set) {
    var d = { metin: metin, goster: acik, gizle: TUM.filter(function (x) { return acik.indexOf(x) < 0; }) };
    if (set) d.set = set;
    return d;
  }
  function wset(w, L, ek) {
    var s = {
      gain: { noktalar: [[0, 6 - 0], [L, w], [0, w]] },
      w: { from: [0, w], to: [7, w] },
      wl: { y: w + 0.4 },
      pt: { x: L, y: w, etiket: "L = " + L }
    };
    if (ek) for (var k in ek) s[k] = ek[k];
    return s;
  }

  return {
    slug: "mi503",
    amac: "Bu konu, ücreti piyasanın belirlediği (tam rekabetçi) bir emek piyasasında firmanın kaç işçi alacağını anlatıyor. MRP = MRC kuralını, MRP'nin çıktı piyasasına göre değişimini ve birden fazla girdiyi en ucuz şekilde birleştirme kuralını öğreneceksin.",
    bolumler: [
      {
        baslik: "Tam rekabetçi emek piyasası",
        kisa: "Firma ücreti belirleyemez; piyasa ücretini kabul eder.",
        bloklar: [
          { tip: "ikili",
            sol: { ikon: "👷", baslik: "Emek piyasasında rekabet", maddeler: ["Çok sayıda işveren, çok sayıda benzer işçi", "Ücreti piyasa belirler; firma ücreti kabul eder", "Firma için MRC = W: yatay çizgi"] },
            sag: { ikon: "🥯", baslik: "Çıktı piyasasında rekabet", maddeler: ["Çok sayıda satıcı, tek tip mal", "Fiyatı piyasa belirler: MR = P", "Firmanın karşılaştığı talep yatay çizgi"] },
            oyun: [
              { metin: "Firma, piyasa ücretiyle istediği kadar işçi çalıştırabilir; ücreti kendisi değiştiremez.", cevap: "sol", neden: "Ücreti kabul eden firma: emek piyasasında rekabet." },
              { metin: "Firma bir simidi piyasa fiyatından satar, fiyatı artıramaz.", cevap: "sag", neden: "Fiyatı kabul eden firma: çıktı piyasasında rekabet, MR = P." },
              { metin: "Şehrin tek kantini, işçi ararken yüzlerce işverenden biridir.", cevap: "sol", neden: "Çıktıda tekel olsa da emek piyasasında rekabetçi olabilir." },
              { metin: "Bir işçi daha almak için ücreti yükseltmek gerekmez; piyasa ücreti yeter.", cevap: "sol", neden: "Firma için arz yataydır: emek piyasasında rekabet." }
            ] },
          { tip: "tuzak", metin: "Emek piyasasındaki rekabet ile çıktı piyasasındaki rekabet birbirinden bağımsızdır.", yanlis: "Emek piyasası rekabetçiyse çıktı piyasası da rekabetçidir.", dogru: "Tek satıcı bir tekel bile emek piyasasında rekabetçi olabilir. O zaman MRC = W olur ama MRP = MP × MR'dır (MR < P)." }
        ]
      },
      {
        baslik: "Karar kuralı: MRP = MRC",
        kisa: "Firma, MRP ücreti geçtiği sürece işçi almaya devam eder.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "MRP", alt: "işçinin getirdiği ek gelir" }, "=",
              { t: "MRC", alt: "işçinin yüklediği ek maliyet (= W)" }
            ],
            aciklama: "MRP > MRC ise işçi eklemek kârı artırır, MRP < MRC ise azaltır. Kâr azamisi (*profit maximization*) için işçi sayısı ==MRP = MRC== olan yerde durur." },
          { tip: "tablo", baslik: "Simit fırını: simit 5 TL, ücret = MRC = 30 TL/saat",
            head: ["İşçi", "MRP", "MRC = W", "MRP − MRC", "Karar"],
            rows: [
              ["1", "50 TL", "30 TL", "+20 TL", "Al: MRP > MRC"],
              ["2", "40 TL", "30 TL", "+10 TL", "Al: MRP > MRC"],
              ["3", "30 TL", "30 TL", "0 TL", "Son işçi: MRP = MRC"],
              ["4", "20 TL", "30 TL", "−10 TL", "Alma: MRP < MRC"],
              ["5", "10 TL", "30 TL", "−20 TL", "Alma: MRP < MRC"]
            ], vurgu: 2,
            not: "Net katkılar: 20 + 10 + 0 = 30 TL; 4. işçi eklenirse toplam 20 TL'ye düşer. Firma ==MRP = MRC== noktasına kadar işe alır: 3 işçi." },
          { tip: "ornek", baslik: "Ücret 40 TL'ye çıkarsa kaç işçi?",
            durum: "Aynı fırın, aynı MRP'ler (50, 40, 30, 20, 10 TL). Piyasa ücreti 30'dan 40 TL'ye çıktı.",
            adimlar: [
              "MRC = W = 40 TL.",
              "1. işçi: 50 > 40, al. 2. işçi: 40 = 40, al.",
              "3. işçi: MRP 30 < 40, alma."
            ],
            sonuc: "Firma 2 işçi çalıştırır. Ücret artınca talep edilen işçi 3'ten 2'ye düştü: MRP eğrisi üzerinde hareket." }
        ]
      },
      {
        baslik: "Grafikte işe alma kararı",
        kisa: "Firma, MRP eğrisi ile yatay ücret çizgisinin kesiştiği yerde durur.",
        bloklar: [
          { tip: "grafik", baslik: "Tam rekabetçi emek piyasasında bir firma", xlabel: "İşçi (L)", ylabel: "TL", xmax: 7, ymax: 7,
            xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
            yticks: [{ v: 2, label: "20" }, { v: 3, label: "30" }, { v: 4, label: "40" }, { v: 6, label: "60" }],
            ogeler: [
              { id: "gain", tip: "alan", renk: 1, noktalar: [[0, 6], [3, 3], [0, 3]], gizli: true },
              { id: "mrp", tip: "cizgi", renk: 0, from: [0, 6], to: [6, 0], etiket: "MRP" },
              { id: "mrpm", tip: "cizgi", renk: 3, kesik: true, from: [0, 3.6], to: [4.5, 0.9], etiket: "MRP′", gizli: true },
              { id: "w", tip: "cizgi", renk: 2, from: [0, 3], to: [7, 3], etiket: "", gizli: true },
              { id: "wl", tip: "yazi", x: 6.9, y: 3.4, metin: "MRC = W", hiza: "end", gizli: true },
              { id: "pt", tip: "nokta", renk: 3, x: 3, y: 3, etiket: "L = 3", kilavuz: true, gizli: true }
            ],
            durumlar: [
              ac("Firmanın emek talebi ==MRP eğrisidir==. Aşağı eğimlidir, çünkü MP azalır. Örnek: MRP = 60 − 10L (TL).", ["mrp"]),
              ac("Rekabetçi emek piyasasında ücret sabittir: ==MRC = W = 30 TL==, yatay çizgi. Yeşil alan, MRP'nin ücreti geçtiği işçileri gösterir: bunlar kâr getirir.", ["gain", "mrp", "w", "wl"], wset(3, 3)),
              ac("Çizgiler kesişince ==MRP = MRC==: firma ==3 işçi== çalıştırır.", ["gain", "mrp", "w", "wl", "pt"], wset(3, 3)),
              ac("Ücret 40 TL'ye çıkarsa MRC çizgisi yukarı gider; firma MRP eğrisi boyunca yukarı çıkar: ==2 işçi==.", ["gain", "mrp", "w", "wl", "pt"], wset(4, 2)),
              ac("Ücret 20 TL'ye düşerse firma aşağı iner: ==4 işçi==. Bu hareketlerin hepsi MRP (talep) eğrisi üzerindedir.", ["gain", "mrp", "w", "wl", "pt"], wset(2, 4)),
              ac("Çıktı piyasasında tekel varsa MRP = MP × MR olur, MR < P olduğu için eğri (MRP′) aşağıda kalır. Aynı 30 TL ücrette firma yalnızca ==1 işçi== alır.", ["gain", "mrp", "mrpm", "w", "wl", "pt"], wset(3, 1, { gain: { noktalar: [[0, 3.6], [1, 3], [0, 3]] }, mrp: { etiket: "VMP" } }))
            ] },
          { tip: "not", metin: "Ücret değişince firma talep eğrisi (MRP) boyunca hareket eder. Talebi, çıktı fiyatı ya da verimlilik gibi MRP'yi değiştiren etkenler kaydırır (5.2)." }
        ]
      },
      {
        baslik: "MRP, çıktı piyasasına göre değişir",
        kisa: "Rekabetçi çıktıda MRP = MP × P, tekelde MRP = MP × MR'dir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "💵", terim: "MRP", tr: "marjinal gelir ürünü", tanim: "Ek işçinin eklediği gelir: MP × MR. Çıktı piyasası nasıl olursa olsun doğru ölçüdür.", ornek: "MP = 10 simit, MR = 3 TL → MRP = 30 TL." },
              { ikon: "🏷️", terim: "VMP", tr: "marjinal ürünün değeri", tanim: "Ek çıktının fiyatla değeri: MP × P. Yalnızca MR = P iken MRP'ye eşittir.", ornek: "MP = 10 simit, P = 5 TL → VMP = 50 TL." }
            ] },
          { tip: "tablo", baslik: "Aynı işçi (MP = 10 simit), farklı çıktı piyasası",
            head: ["Çıktı piyasası", "MR", "MRP formülü", "Hesap"],
            rows: [
              ["Tam rekabet", "MR = P = 5 TL", "*VMP* = MP × P", "10 × 5 = 50 TL"],
              ["Tekel (kusurlu rekabet)", "MR = 3 TL < P = 5 TL", "MRP = MP × MR", "10 × 3 = 30 TL"]
            ],
            not: "Kusurlu rekabette satış artınca fiyat düşer, bu yüzden MR < P olur. MRP eğrisi VMP'nin altında kalır; firma aynı ücrette daha az işçi alır." },
          { tip: "tuzak", metin: "VMP formülü yalnızca çıktı piyasası tam rekabetçiyse geçerlidir.", yanlis: "MRP her zaman MP × P'dir.", dogru: "MRP = MP × MR. ==MR = P== olduğunda (tam rekabetçi çıktı) MRP = VMP = MP × P olur." }
        ]
      },
      {
        baslik: "En düşük maliyet kuralı: son lira",
        kisa: "Son lira her girdide aynı marjinal ürünü getirmeli: MP/fiyat eşit.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "MP₁ / P₁", alt: "ilk girdide son lira" }, "=",
              { t: "MP₂ / P₂", alt: "ikinci girdide son lira" }, "=",
              { t: "MP₃ / P₃", alt: "üçüncü girdide son lira" }
            ],
            aciklama: "Bu, ==*least-cost rule*==dur: maliyeti en aza indirmek ya da kârı azamiye çıkarmak için girdiler öyle seçilir ki son lira hepsinde aynı çıktıyı getirir. Kâr azamisinde ayrıca her girdi için MRP = girdi fiyatıdır." },
          { tip: "ornek", baslik: "Fırın: işçi mi, makine mi?",
            durum: "Saatlik işçi ücreti 10 TL, fırın kirası 20 TL. Son işçi 20 simit, son fırın saati 20 simit ekliyor.",
            adimlar: [
              "İşçide: MP/W = 20/10 = 2 simit/TL.",
              "Fırında: MP/kira = 20/20 = 1 simit/TL.",
              "İşçiye harcanan son lira iki kat çıktı veriyor: işçi artır, fırın kirasını azalt.",
              "İşçi arttıkça işçinin MP'si düşer, fırın azaldıkça fırının MP'si yükselir; oranlar eşitlenince durulur (ör. 15/10 = 30/20 = 1,5)."
            ],
            sonuc: "Denge: MP(işçi)/W = MP(fırın)/kira. Oranlar eşit değilse firma, son lirasının daha çok çıktı verdiği girdiye kayar." },
          { tip: "tuzak", metin: "Marjinal ürünlerin kendisini değil, fiyata bölünmüş hallerini karşılaştır.", yanlis: "En düşük maliyet için MP(işçi) = MP(fırın) olmalıdır.", dogru: "==MP/fiyat== oranları eşit olmalıdır: son lira her girdide aynı çıktıyı getirmeli." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Rekabetçi emek piyasasında ücreti piyasa belirler; firma için MRC = W (yatay).",
              "Firma, çıktı piyasasında kusurlu rekabetçi olsa da emek piyasasında rekabetçi olabilir.",
              "Kural: MRP = MRC noktasına kadar işçi al. MRP > ücret oldukça işe almaya devam et.",
              "MRP = MP × MR. Çıktı piyasası tam rekabetçiyse MR = P ve MRP = *VMP* = MP × P.",
              "Ücret artınca firma MRP eğrisi boyunca yukarı çıkar, işçi sayısı azalır.",
              "Tekel çıktıda MR < P olduğu için MRP eğrisi aşağıdadır; aynı ücrette daha az işçi alınır.",
              "En düşük maliyet kuralı: MP₁/P₁ = MP₂/P₂ = … Son lira her girdide aynı çıktıyı getirmeli.",
              "Oranlar eşit değilse firma son lirasının daha çok çıktı verdiği girdiye yönelir."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Tam rekabetçi emek piyasasında ücret 40 TL'dir. Bir firmanın işçilerinin MRP'leri tabloda verilmiştir. Kâr azamisi için firma kaç işçi çalıştırır?",
        fig: { type: "table", head: ["İşçi", "MRP"], rows: [["1", "90 TL"], ["2", "70 TL"], ["3", "50 TL"], ["4", "30 TL"], ["5", "10 TL"]] },
        opts: ["2", "3", "4", "5"],
        a: 1, why: "3. işçinin MRP'si (50) ücretten (40) büyük; 4.'nün MRP'si (30) küçük. Firma 3 işçi çalıştırır. C şıkkı MRP'si ücretin altında olan 4. işçiyi de alıyor; bu kârı düşürür." },
      { q: "Rekabetçi bir emek piyasasında ücret yükselirse tipik bir firma için aşağıdakilerden hangisi doğrudur?",
        opts: ["MRP eğrisi sola kayar ve işçi sayısı azalır.", "MRP eğrisi sağa kayar ve işçi sayısı artar.", "MRC eğrisi aşağı iner; işçi sayısı artar.", "Firma MRP eğrisi boyunca yukarı çıkar; işçi sayısı azalır."],
        a: 3, why: "Ücret MRC'yi yükseltir (yatay çizgi yukarı); MRP = MRC noktası MRP eğrisi boyunca yukarı kayar ve işçi sayısı azalır. A şıkkı eğri üzerinde hareketi, eğrinin kaymasıyla karıştırıyor." },
      { q: "Grafikte bir firmanın MRP eğrisi ve piyasa ücretine göre MRC çizgisi görülüyor. Firma kâr azamisi için kaç işçi çalıştırır?",
        fig: { type: "graph", xlabel: "İşçi (L)", ylabel: "TL", xmax: 7, ymax: 7, lines: [{ from: [0, 6], to: [6, 0], label: "MRP" }, { from: [0, 4], to: [7, 4], label: "MRC = W", color: 2 }], xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }], yticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }] },
        opts: ["2", "3", "4", "6"],
        a: 0, why: "MRP = 60 − 10L ve W = 40 olduğundan MRP = MRC için L = 2 olur. B ve C şıkları MRP'nin ücretin altına indiği noktalardır; D şıkkı ise MRP'nin sıfıra indiği yerdir." },
      { q: "Bir firmada işçinin MP'si 24 birim, ücret 12 TL; sermayenin MP'si 30 birim, kira 10 TL'dir. Firma en düşük maliyet için ne yapmalıdır?",
        opts: ["Girdi bileşimi zaten en düşük maliyetlidir.", "İşçiyi artırıp sermayeyi azaltmalıdır.", "Sermayeyi artırıp işçiyi azaltmalıdır.", "İkisini de azaltmalıdır."],
        a: 2, why: "İşçide MP/W = 24/12 = 2, sermayede MP/kira = 30/10 = 3. Sermayeye harcanan son lira daha çok çıktı verir: sermaye artırılır, işçi azaltılır. A şıkkı MP'lerin eşit olması gerektiğini sanıyor; oysa MP/fiyat oranları karşılaştırılır." },
      { q: "Şehrin tek kantini (çıktıda tekel) işçi ararken yüzlerce işverenden biridir. Bir işçinin MP'si 10 tost, tost fiyatı 5 TL, MR 3 TL'dir. Bu işçinin MRP'si kaç TL'dir?",
        opts: ["50 TL", "30 TL", "10 TL", "15 TL"],
        a: 1, why: "Çıktıda tekel olduğu için MRP = MP × MR = 10 × 3 = 30 TL. A şıkkı VMP = MP × P'yi hesaplıyor; bu yalnızca çıktı piyasası tam rekabetçiyse MRP'ye eşittir." }
    ]
  };
})();
