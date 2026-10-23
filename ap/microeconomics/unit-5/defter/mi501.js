/* Kitpath not defteri · mi501 · 5.1 Faktör Piyasalarına Giriş
   Kaynak: CED Topic 5.1 (PRD-4.A). Blok türleri: /ap/_kit/defter.js başı.
   Not: yardımcı işlev yalnızca grafik durumlarında "yalnız bu ögeler görünsün" kuralını uygular. */
window.DEFTER = (function () {
  var TUM = ["D", "S", "E", "wh", "ld", "ls", "t1", "wl", "ld2", "ls2", "t2"];
  function ac(metin, acik) {
    return { metin: metin, goster: acik, gizle: TUM.filter(function (x) { return acik.indexOf(x) < 0; }) };
  }

  return {
    slug: "mi501",
    amac: "Bu konu faktör piyasalarını anlatıyor: firmaların işçi, sermaye ve toprak satın aldığı piyasalar. Türetilmiş talebi, MRP ile MRC'yi nasıl hesaplayacağını ve emek talebi ile arzının ücreti nasıl belirlediğini öğreneceksin.",
    bolumler: [
      {
        baslik: "*Factor market*: alıcı firma, satıcı hane",
        kisa: "Faktör piyasasında firmalar alıcı, hane halkları satıcıdır.",
        bloklar: [
          { tip: "ikili",
            sol: { ikon: "🛒", baslik: "*Product market*", maddeler: ["Hane halkı alıcı, firma satıcı", "Satılan: mal ve hizmet (tost, telefon)", "Fiyat: P"] },
            sag: { ikon: "👷", baslik: "*Factor market*", maddeler: ["Firma alıcı, hane halkı satıcı", "Satılan: emek, sermaye, toprak", "Fiyat: ücret, faiz, kira"] },
            oyun: [
              { metin: "Bir öğrenci kantinden tost satın alıyor.", cevap: "sol", neden: "Hane halkı mal alıyor: ürün piyasası." },
              { metin: "Kantin, tost yapması için bir öğrenciyi işe alıyor.", cevap: "sag", neden: "Firma emek satın alıyor: faktör piyasası." },
              { metin: "Bir arsa sahibi, arsasını simit fırınına kiralıyor.", cevap: "sag", neden: "Toprak faktörü kira karşılığı satılıyor." },
              { metin: "Fırın, ürettiği simitleri öğrencilere satıyor.", cevap: "sol", neden: "Firma mal satıyor: ürün piyasası." }
            ] },
          { tip: "kavramlar", kartlar: [
              { ikon: "👷", terim: "Labor", tr: "emek", tanim: "İnsanların çalışma zamanı ve gücü. Fiyatı ==*wage*== (ücret).", ornek: "Kantinde tost yapan öğrenci." },
              { ikon: "🏭", terim: "Capital", tr: "sermaye", tanim: "Mal üretmekte kullanılan makine, alet ve binalar. Fiyatı ==*interest*== (faiz).", ornek: "Tost makinesi, fırın." },
              { ikon: "🌾", terim: "Land", tr: "toprak", tanim: "Arazi ve doğal kaynaklar. Fiyatı ==*rent*== (kira).", ornek: "Kantinin kurulduğu arsa." }
            ] }
        ]
      },
      {
        baslik: "Türetilmiş talep: işçiye talep, ürüne taleptir",
        kisa: "Faktöre talep, o faktörün ürettiği malın talebinden doğar.",
        bloklar: [
          { tip: "not", metin: "Kimse işçiyi işçi olduğu için istemez; ürettiği mal satılacağı için ister. Bu yüzden emeğe talebe ==*derived demand*== (türetilmiş talep) denir: faktör talebi, ürün talebinden türer." },
          { tip: "adimlar", baslik: "Konser biletine talep artarsa", adimlar: [
              { baslik: "Ürüne talep", metin: "Konser biletlerine talep artar; bilet fiyatı yükselir." },
              { baslik: "Firmanın geliri", metin: "Organizatörün her ek çalışandan kazandığı gelir artar." },
              { baslik: "Faktöre talep", metin: "Organizatör daha çok teknisyen ve güvenlik görevlisi ister: emek talebi artar." }
            ] }
        ]
      },
      {
        baslik: "MP'den MRP'ye: işçinin getirdiği gelir",
        kisa: "MRP, ek bir işçinin firmaya kattığı ek gelirdir.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "MRP", alt: "ek işçinin getirdiği gelir" }, "=",
              { t: "ΔTR / ΔL", alt: "gelir değişimi ÷ işçi değişimi" }, "=",
              { t: "MP", alt: "ek çıktı" }, "×",
              { t: "MR", alt: "ek çıktının geliri" }
            ],
            aciklama: "*MP* (*marginal product*), bir işçi daha alınca artan çıktıdır (ΔQ/ΔL). Çıktı piyasası tam rekabetçiyse MR = P olur ve MRP, ==*VMP*== denen MP × P değerine eşitlenir." },
          { tip: "tablo", baslik: "Kampüs simit fırını: simit tanesi 5 TL (tam rekabetçi çıktı piyasası)",
            head: ["İşçi (L)", "Toplam ürün (TP)", "MP", "TR = 5 × TP", "MRP = ΔTR/ΔL"],
            rows: [["0", "0", "—", "0 TL", "—"], ["1", "10", "10", "50 TL", "50 TL"], ["2", "18", "8", "90 TL", "40 TL"], ["3", "24", "6", "120 TL", "30 TL"], ["4", "28", "4", "140 TL", "20 TL"], ["5", "30", "2", "150 TL", "10 TL"]],
            vurgu: 3,
            not: "MRP aşağı iner: ==*diminishing marginal product*==. Sermaye (fırın) sabitken her yeni işçi öncekinden daha az ek çıktı katar." },
          { tip: "ornek", baslik: "3. işçinin MRP'si: iki yoldan hesap",
            durum: "Fırında 2 işçi çalışıyor, 3. işçi geliyor. Simit 5 TL.",
            adimlar: [
              "Yol 1: çıktı 18'den 24'e çıkıyor, MP = 6 simit. MRP = MP × P = 6 × 5 = 30 TL.",
              "Yol 2: TR 90 TL'den 120 TL'ye çıkıyor, ΔTR = 30 TL, ΔL = 1. MRP = 30/1 = 30 TL.",
              "İki yol aynı sonucu verir."
            ],
            sonuc: "3. işçinin MRP'si 30 TL: fırına işe girince 30 TL ek gelir katıyor." },
          { tip: "tuzak", metin: "MP ile MRP'yi karıştırmak en sık hatadır. MP simit adedidir, MRP paradır.", yanlis: "MP = 6 olduğuna göre 3. işçi fırına 6 TL kazandırır.", dogru: "MP = 6 simittir; MRP = MP × P = 6 × 5 = ==30 TL==." }
        ]
      },
      {
        baslik: "MRC: bir işçi daha almanın maliyeti",
        kisa: "MRC, ek bir işçinin firmaya yüklediği ek maliyettir.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "MRC", alt: "ek işçinin maliyeti" }, "=",
              { t: "ΔTC / ΔL", alt: "maliyet değişimi ÷ işçi değişimi" }
            ],
            aciklama: "*MRC* (*marginal resource cost*, bazen *marginal factor cost*). Rekabetçi emek piyasasında firma ücreti belirleyemez, ücret neyse odur: MRC = *wage*. Monopsonda MRC > ücret olur (5.4)." },
          { tip: "ornek", baslik: "Ücret saatte 30 TL ise MRC kaç?",
            durum: "Piyasa ücreti 30 TL/saat. Fırın 1 işçiden 2 işçiye geçiyor.",
            adimlar: [
              "1 işçinin işçilik maliyeti 30 TL, 2 işçinin 60 TL.",
              "ΔTC = 60 − 30 = 30 TL, ΔL = 1.",
              "MRC = 30/1 = 30 TL, yani ücrete eşit."
            ],
            sonuc: "Ücret sabit kaldığı sürece her yeni işçinin MRC'si 30 TL: MRC yatay bir çizgidir." }
        ]
      },
      {
        baslik: "İşe alma kararı neye bağlı?",
        kisa: "Firma, işçinin verimine, çıktı fiyatına ve ücrete bakarak işe alır.",
        bloklar: [
          { tip: "liste", maddeler: [
              { ikon: "⚙️", baslik: "İşçinin verimi (MP)", metin: "Daha verimli işçi daha çok çıktı üretir: MRP artar." },
              { ikon: "🏷️", baslik: "Çıktının fiyatı (P ya da MR)", metin: "Simit pahalıysa aynı çıktı daha çok gelir getirir: MRP artar." },
              { ikon: "💰", baslik: "Faktörün maliyeti (MRC)", metin: "Ücret yüksekse işçi almak pahalıdır; MRC artar." }
            ] },
          { tip: "not", metin: "Karar kuralı (ayrıntısı 5.3'te): ==MRP > MRC== ise işçi ekle, MRP < MRC ise ekleme. Ek işçinin getirdiği gelir, yüklediği maliyetten büyük olduğu sürece firma işçi almaya devam eder." }
        ]
      },
      {
        baslik: "Emek piyasası: talep, arz ve denge",
        kisa: "Ücret artınca talep edilen emek azalır, arz edilen emek artar.",
        bloklar: [
          { tip: "grafik", baslik: "Bir emek piyasasında ücretin belirlenmesi", xlabel: "İşçi sayısı (L)", ylabel: "Ücret (W)", xmax: 10, ymax: 10,
            xticks: [{ v: 5, label: "L*" }], yticks: [{ v: 5, label: "W*" }],
            ogeler: [
              { id: "D", tip: "cizgi", renk: 0, from: [2, 8], to: [8, 2], etiket: "D = MRP" },
              { id: "S", tip: "cizgi", renk: 1, from: [2, 2], to: [8, 8], etiket: "S", gizli: true },
              { id: "E", tip: "nokta", renk: 3, x: 5, y: 5, etiket: "Denge", kilavuz: true, gizli: true },
              { id: "wh", tip: "cizgi", renk: 2, kesik: true, from: [0, 7], to: [10, 7], etiket: "W₁", gizli: true },
              { id: "ld", tip: "nokta", renk: 0, x: 3, y: 7, etiket: "Ld", gizli: true },
              { id: "ls", tip: "nokta", renk: 1, x: 7, y: 7, etiket: "Ls", gizli: true },
              { id: "t1", tip: "yazi", x: 5, y: 8.4, metin: "Fazla arz: işsizlik", gizli: true },
              { id: "wl", tip: "cizgi", renk: 2, kesik: true, from: [0, 3], to: [10, 3], etiket: "W₂", gizli: true },
              { id: "ls2", tip: "nokta", renk: 1, x: 3, y: 3, etiket: "Ls", gizli: true },
              { id: "ld2", tip: "nokta", renk: 0, x: 7, y: 3, etiket: "Ld", gizli: true },
              { id: "t2", tip: "yazi", x: 5, y: 1.6, metin: "Fazla talep: işçi kıtlığı", gizli: true }
            ],
            durumlar: [
              ac("Firmalar işçi talep eder. ==Talep eğrisi (D)== firmanın işçiden beklediği gelire (MRP) dayanır ve aşağı eğimlidir: ücret düşerse daha çok işçi istenir.", ["D"]),
              ac("Hane halkları emeğini arz eder. ==Arz eğrisi (S)== yukarı eğimlidir: ücret yükselince daha çok kişi bu işte çalışmak ister.", ["D", "S"]),
              ac("Eğriler kesişince denge: ==denge ücreti== ve ==denge işçi sayısı== belli olur. Bu ücrette isteyen çalışır, isteyen işçi bulur.", ["D", "S", "E"]),
              ac("Ücret dengenin üstünde (W₁) olursa firmaların istediği işçi (Ld) çalışmak isteyenden (Ls) az: ==*surplus*==, yani işsizlik.", ["D", "S", "E", "wh", "ld", "ls", "t1"]),
              ac("Ücret dengenin altında (W₂) olursa firmalar çalışmak isteyenden (Ls) çok işçi (Ld) ister: ==*shortage*==, yani işçi kıtlığı.", ["D", "S", "E", "wl", "ld2", "ls2", "t2"])
            ] },
          { tip: "not", metin: "Talep neden aşağı eğimli? MRP aşağı iner, çünkü MP azalır. Arz neden yukarı eğimli? Yüksek ücret, daha çok insanı bu işe çeker." },
          { tip: "tuzak", baslik: "Talep mi, talep edilen miktar mı?", metin: "Ücret değişince eğri üzerinde hareket ederiz; eğrinin kendisi kaymaz.", yanlis: "Ücret arttı, o halde emek talebi azaldı.", dogru: "Ücret değişince ==talep edilen emek miktarı== değişir. Talebin kendisi ancak başka etkenlerle kayar (5.2)." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "*Factor market*: firma alıcı, hane halkı satıcıdır. Emek → *wage*, sermaye → *interest*, toprak → *rent*.",
              "*Derived demand*: faktöre talep, ürününe talepten türer.",
              "MRP = ΔTR/ΔL = MP × MR. Tam rekabetçi çıktıda MR = P, yani MRP = *VMP* = MP × P.",
              "MP azaldıkça MRP azalır; bu yüzden emek talebi aşağı eğimlidir.",
              "MRC = ΔTC/ΔL. Rekabetçi emek piyasasında MRC = ücret.",
              "İşe alma kararı üç şeye bağlıdır: işçinin verimi, çıktı fiyatı, faktör maliyeti. MRP > MRC ise işçi ekle.",
              "Emek talebi ücretle ters, emek arzı ücretle aynı yönde ilişkilidir (*ceteris paribus*).",
              "Ücret değişince eğri üzerinde hareket edilir; eğri başka etkenlerle kayar."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Kış gelince kayak merkezlerine talep arttı. Kayak eğitmenlerine olan emek talebi için aşağıdakilerden hangisi doğrudur?",
        opts: ["Değişmez; çünkü eğitmenin ücreti sabittir.", "Artar; çünkü emek talebi *derived demand*'dir, ürünün talebinden türer.", "Azalır; çünkü kayak daha pahalı hale gelir.", "Yalnızca eğitmenlerin ücreti artarsa emek talebi artar."],
        a: 1, why: "Faktör talebi ürün talebinden türer: kayak talebi artınca eğitmenin getirdiği gelir (MRP) artar, firmalar daha çok eğitmen ister. D şıkkı, ücret değişimini (eğri üzerinde hareket) talep kayması ile karıştırıyor." },
      { q: "Tost fiyatı 6 TL olan tam rekabetçi bir kantinde işçi sayısına göre toplam tost sayısı tabloda verilmiştir. 3. işçinin MRP'si kaç TL'dir?",
        fig: { type: "table", head: ["İşçi", "Toplam tost (TP)"], rows: [["0", "0"], ["1", "12"], ["2", "22"], ["3", "30"], ["4", "36"]] },
        opts: ["8 TL", "30 TL", "48 TL", "180 TL"],
        a: 2, why: "MP = 30 − 22 = 8 tost. MRP = MP × P = 8 × 6 = 48 TL. A şıkkı MP'yi (adet) TL sanıyor; D şıkkı ise toplam gelirdir (30 × 6), ek gelir değil." },
      { q: "Aşağıdaki eşleştirmelerden hangisi faktör ve faktör fiyatı bakımından doğrudur?",
        opts: ["Emek – *wage*, sermaye – *interest*, toprak – *rent*", "Emek – *rent*, sermaye – *wage*, toprak – *interest*", "Emek – *interest*, sermaye – *rent*, toprak – *wage*", "Emek – *wage*, sermaye – *rent*, toprak – *interest*"],
        a: 0, why: "Emeğin fiyatı ücret, sermayenin faizi, toprağın kiradır. D şıkkı sermaye ile toprağın fiyatlarını yer değiştiriyor." },
      { q: "Grafikte bir emek piyasası gösteriliyor. Ücret W₁ düzeyinde sabitlenirse piyasada ne görülür?",
        fig: { type: "graph", xlabel: "İşçi (L)", ylabel: "Ücret (W)", xmax: 10, ymax: 10, lines: [{ from: [2, 8], to: [8, 2], label: "D" }, { from: [2, 2], to: [8, 8], label: "S", color: 1 }], hlines: [{ p: 7, label: "W₁" }], points: [{ q: 5, p: 5, label: "E", guides: true }] },
        opts: ["İşçi kıtlığı: talep edilen emek arz edilenden fazladır.", "Piyasa dengededir; ücret W₁ olmalıdır.", "Talep eğrisi sağa kayar.", "Arz edilen emek talep edilenden fazladır; işsizlik oluşur."],
        a: 3, why: "W₁ denge ücretinin üstündedir: Ls > Ld, yani fazla arz (işsizlik). A şıkkı ücretin dengenin altında olduğu durumu anlatır; C şıkkı ise ücret değişimini kaymayla karıştırır." },
      { q: "Ücreti belirleyemeyen bir firma, 3 işçiyle çalışırken toplam işçilik maliyeti 90 TL'dir. 4. işçiyi alınca toplam işçilik maliyeti 120 TL oluyor. 4. işçinin MRC'si kaç TL'dir?",
        opts: ["90 TL", "30 TL", "120 TL", "40 TL"],
        a: 1, why: "MRC = ΔTC/ΔL = (120 − 90)/1 = 30 TL; ücret sabit olduğu için MRC ücrete eşittir. D şıkkı 120 TL'yi önceki işçi sayısına (3) bölüyor (120 ÷ 3 = 40); bu ne ortalama ne de marjinal maliyettir. Ücret sabit olduğundan 4 işçide ortalama maliyet de 120 ÷ 4 = 30 TL'dir." }
    ]
  };
})();
