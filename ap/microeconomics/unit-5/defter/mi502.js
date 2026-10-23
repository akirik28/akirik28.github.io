/* Kitpath not defteri · mi502 · 5.2 Faktör Talebi ve Arzındaki Değişimler
   Kaynak: CED Topic 5.2 (PRD-4.B). Blok türleri: /ap/_kit/defter.js başı.
   Not: grafik, ürün piyasasındaki kayma kalıbının emek piyasası uyarlamasıdır.
   Taban: D (2,8)→(8,2), S (2,2)→(8,8), denge (5,5); kaymalar 2 birim. */
window.DEFTER = (function () {
  var TUM = ["D", "S", "Dk", "Sk", "D1", "D2", "S1", "S2", "okDR", "okDL", "okSR", "okSL", "E0", "Edr", "Edl", "Esr", "Esl"];
  function ac(metin, acik) {
    return { metin: metin, goster: acik, gizle: TUM.filter(function (x) { return acik.indexOf(x) < 0; }) };
  }

  return {
    slug: "mi502",
    amac: "Bu konu emek talebi ve emek arzı eğrilerini neyin kaydırdığını anlatıyor. Çıktı fiyatı ve verimlilik talebi, göç, eğitim ve alternatif işler arzı nasıl kaydırır; ücret ile işçi sayısı nasıl değişir, bunu öğreneceksin.",
    bolumler: [
      {
        baslik: "Hareket mi, kayma mı?",
        kisa: "Ücret değişince eğri üzerinde hareket edilir; başka etkenler eğriyi kaydırır.",
        bloklar: [
          { tip: "ikili",
            sol: { ikon: "↕️", baslik: "Eğri üzerinde hareket", maddeler: ["Sebep: ücretin kendisi değişti", "Talep edilen ya da arz edilen miktar değişir", "Eğri yerinde kalır"] },
            sag: { ikon: "↔️", baslik: "Eğri kayar", maddeler: ["Sebep: ücret dışı bir etken değişti", "Talebin ya da arzın kendisi değişir", "Yeni eğri çizilir: sağa artış, sola azalış"] },
            oyun: [
              { metin: "Kafelerde garson ücreti 60 TL'den 80 TL'ye çıktı; kafeler daha az garson istiyor.", cevap: "sol", neden: "Ücretin kendisi değişti: talep eğrisi üzerinde hareket." },
              { metin: "Kahve fiyatı arttı, garsonun getirdiği gelir (MRP) yükseldi.", cevap: "sag", neden: "Çıktı fiyatı ücret dışı bir etken: emek talebi kayar." },
              { metin: "Garsonluk ücreti arttı, daha çok öğrenci garsonluk yapmak istiyor.", cevap: "sol", neden: "Ücret değişti: arz eğrisi üzerinde hareket." },
              { metin: "Yeni bir yurt açıldı, çalışabilecek öğrenci sayısı arttı.", cevap: "sag", neden: "Ücret dışı etken: emek arzı sağa kayar." }
            ] },
          { tip: "not", metin: "Emek piyasası grafiğinin eksenlerinde yalnızca ücret ve işçi sayısı vardır. Ücretin kendisi eğriyi kaydırmaz; eğriyi ==ücret dışındaki etkenler== kaydırır." }
        ]
      },
      {
        baslik: "Emek talebini kaydıranlar",
        kisa: "Talep, işçinin getirdiği geliri (MRP) değiştiren her şeyle kayar.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "MRP", alt: "emek talebi" }, "=",
              { t: "MP", alt: "verimlilik" }, "×",
              { t: "MR", alt: "çıktı fiyatı (tam rekabette P)" }
            ],
            aciklama: "Bu iki çarpandan biri değişirse MRP, yani emek talebi kayar. ==Ücret bu formülde yoktur==: talebi kaydırmaz." },
          { tip: "kavramlar", kartlar: [
              { ikon: "🏷️", terim: "Output price", tr: "çıktı fiyatı", tanim: "Çıktının fiyatı artarsa MRP artar ve emek talebi sağa kayar; fiyat düşerse sola kayar.", ornek: "Kebap pahalanır, kebapçı ustasına talep artar." },
              { ikon: "⚙️", terim: "Productivity", tr: "verimlilik", tanim: "Eğitim, teknoloji ya da tamamlayıcı sermaye MP'yi artırırsa MRP artar ve talep sağa kayar.", ornek: "Usta yeni bir ızgarayla saatte daha çok kebap yapar." },
              { ikon: "🔁", terim: "Price of other inputs", tr: "diğer girdilerin fiyatı", tanim: "İkame girdi (robot) ucuzlarsa emek talebi azalır; tamamlayıcı girdi ucuzlarsa artar.", ornek: "Otomatik hamur makinesi ucuzlayınca fırın daha az işçi ister." },
              { ikon: "🏪", terim: "Number of firms", tr: "firma sayısı", tanim: "İşçi arayan firma sayısı artarsa piyasa emek talebi sağa kayar.", ornek: "Çevreye üç yeni kebapçı açılır." }
            ] }
        ]
      },
      {
        baslik: "Emek arzını kaydıranlar",
        kisa: "Arz, çalışmaya hazır insan sayısını ve isteğini değiştiren etkenlerle kayar.",
        bloklar: [
          { tip: "tablo", baslik: "Emek arzını kaydıran etkenler", head: ["Etken", "Örnek", "Arz"], rows: [
              ["*Immigration* (göç)", "Yeni gelen işçiler bu piyasaya katılır", "Sağa"],
              ["*Education* (eğitim)", "Daha çok kişi mesleğin gerektirdiği beceriyi kazanır", "Sağa"],
              ["*Working conditions* (çalışma koşulları)", "Saatler ve iş güvenliği iyileşir, daha çok kişi bu işi ister", "Sağa"],
              ["*Age distribution* (yaş dağılımı)", "Çalışma çağındaki nüfus artar; emekli sayısı artarsa tersi olur", "Sağa (emekli artarsa sola)"],
              ["*Alternative options* (alternatif işler)", "Başka bir işte ücret yükselir, işçiler oraya geçer", "Sola"],
              ["*Preferences for leisure* (boş zaman tercihi)", "İnsanlar boş zamana daha çok değer verir", "Sola"],
              ["*Cultural expectations* (kültürel beklentiler)", "Kadınların çalışması toplumda daha çok kabul görür", "Sağa"]
            ] },
          { tip: "ikili",
            sol: { ikon: "➡️", baslik: "Arz sağa kayar", maddeler: ["Çalışabilecek kişi sayısı artar", "Bu iş daha çekici hale gelir"] },
            sag: { ikon: "⬅️", baslik: "Arz sola kayar", maddeler: ["Çalışabilecek kişi sayısı azalır", "Başka seçenekler ya da boş zaman daha çekici olur"] },
            oyun: [
              { metin: "Bir ilçede yeni açılan meslek lisesi mezun vermeye başladı.", cevap: "sol", neden: "*Education*: beceriye sahip kişi artar, arz sağa kayar." },
              { metin: "Pastanelerde ücretler yükseldi, kebapçı ustaları pastaneye geçiyor.", cevap: "sag", neden: "*Alternative options*: kebapçı piyasasında arz sola kayar." },
              { metin: "Göçle çalışma çağındaki nüfus arttı.", cevap: "sol", neden: "*Immigration*: arz sağa kayar." },
              { metin: "Emekli sayısı hızla arttı.", cevap: "sag", neden: "*Age distribution*: çalışabilecek kişi azalır, arz sola kayar." }
            ] }
        ]
      },
      {
        baslik: "Grafikte kaymalar: ücret ve işçi sayısı",
        kisa: "Talep kayınca ücret ve işçi sayısı aynı yöne, arz kayınca zıt yöne gider.",
        bloklar: [
          { tip: "grafik", baslik: "Kebap ustası piyasasında dört kayma", xlabel: "İşçi sayısı (L)", ylabel: "Ücret (W)", xmax: 11, ymax: 10,
            xticks: [{ v: 5, label: "L*" }], yticks: [{ v: 5, label: "W*" }],
            ogeler: [
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
              { id: "E0", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "Denge", kilavuz: true },
              { id: "Edr", tip: "nokta", renk: 1, x: 6, y: 6, etiket: "W↑ L↑", kilavuz: true, gizli: true },
              { id: "Edl", tip: "nokta", renk: 1, x: 4, y: 4, etiket: "W↓ L↓", kilavuz: true, gizli: true },
              { id: "Esr", tip: "nokta", renk: 1, x: 6, y: 4, etiket: "W↓ L↑", kilavuz: true, gizli: true },
              { id: "Esl", tip: "nokta", renk: 1, x: 4, y: 6, etiket: "W↑ L↓", kilavuz: true, gizli: true }
            ],
            durumlar: [
              ac("Kebap ustası piyasasında başlangıç dengesi. Talep eğrisi MRP'ye, arz eğrisi çalışmak isteyen ustalara dayanır.", ["D", "S", "E0"]),
              ac("Kebaba talep artınca kebap fiyatı yükselir: ustanın MRP'si artar. ==Emek talebi sağa== kayar (eski eğri kesikli): ücret ve işçi sayısı artar.", ["Dk", "D1", "S", "okDR", "Edr"]),
              ac("Kebap fiyatı düşerse ya da ustalar verimsizleşirse MRP azalır. ==Emek talebi sola== kayar: ücret ve işçi sayısı düşer.", ["Dk", "D2", "S", "okDL", "Edl"]),
              ac("Şehre usta olabilecek yeni insanlar göç eder: ==emek arzı sağa== kayar. Ücret düşer, işçi sayısı artar.", ["D", "Sk", "S1", "okSR", "Esr"]),
              ac("Pastanelerde ücret arttı, kebapçıdan işçiler ayrılıyor: ==emek arzı sola== kayar. Ücret artar, işçi sayısı düşer.", ["D", "Sk", "S2", "okSL", "Esl"]),
              ac("Özet: talep kayınca ücret ve işçi sayısı ==aynı yöne==, arz kayınca ==zıt yöne== gider.", ["D", "S", "E0", "Edr", "Edl", "Esr", "Esl"])
            ] },
          { tip: "tablo", baslik: "Dört kayma: ücret ve işçi sayısı", head: ["Kayma", "Ücret (W)", "İşçi sayısı (L)", "Örnek"], rows: [
              ["Talep sağa", "↑", "↑", "Çıktı fiyatı artar, verim artar"],
              ["Talep sola", "↓", "↓", "Çıktı fiyatı düşer"],
              ["Arz sağa", "↓", "↑", "Göç, eğitim, iyi çalışma koşulları"],
              ["Arz sola", "↑", "↓", "Alternatif işte yüksek ücret, boş zaman"]
            ], not: "Ezberlemek yerine her seferinde çiz." },
          { tip: "tuzak", metin: "Ücretin artması tek başına talebin arttığını göstermez.", yanlis: "Ücret arttıysa emek talebi artmıştır.", dogru: "Ücret ↑ ve işçi sayısı ↑ ise talep sağa kaymıştır. Ücret ↑ ama işçi sayısı ↓ ise ==arz sola== kaymıştır." }
        ]
      },
      {
        baslik: "Zincirleme etki: komşu piyasalar",
        kisa: "Bir emek piyasasındaki kayma, işçilerin geçişiyle komşu emek piyasasını da kaydırır.",
        bloklar: [
          { tip: "ornek", baslik: "Kebap fiyatı artınca pastane ne olur?",
            durum: "Üniversite çevresinde kebaba talep arttı. Kebapçı ustası olabilecek insanlar pastanede de çalışabiliyor.",
            adimlar: [
              "Kebap piyasası: talep artar, kebap fiyatı (P) yükselir.",
              "Ustanın MRP = MP × P artar: kebapçıda emek talebi sağa kayar; ücret ve usta sayısı artar.",
              "Kebapçıda ücret yükselince pastane işçileri kebapçıya geçer: pastanede emek arzı sola kayar.",
              "Pastanede ücret artar, çalışan sayısı azalır."
            ],
            sonuc: "Ürün piyasasındaki değişim kebapçıda emek talebini, kebapçıdaki ücret artışı da pastanede emek arzını kaydırdı." },
          { tip: "not", metin: "Soruda \"başka piyasa\" görünce sor: Çıktı fiyatı ya da verim mi değişti (emek talebi)? Başka bir işin ücreti ya da işçi sayısı mı değişti (emek arzı)?" }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Ücret değişirse eğri üzerinde hareket edilir; talebi ve arzı ücret dışındaki etkenler kaydırır.",
              "Emek talebi MRP = MP × MR'a dayanır. Çıktı fiyatı ve verimlilik değişince talep kayar.",
              "Diğer girdilerin fiyatı ve firma sayısı da emek talebini kaydırabilir.",
              "Emek arzını göç, eğitim, çalışma koşulları, yaş dağılımı, alternatif işler, boş zaman tercihi ve kültürel beklentiler kaydırır.",
              "Talep kayınca ücret ve işçi sayısı aynı yöne gider; arz kayınca zıt yöne gider.",
              "Ücret ↑ ama işçi sayısı ↓ ise arz sola kaymıştır.",
              "Bir piyasadaki değişim, işçilerin başka işe geçmesiyle komşu piyasanın arzını ya da talebini kaydırır."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Kahveye talep arttı ve kahve fiyatı yükseldi. Kahvecilerdeki barista emek piyasasında beklenen sonuç nedir (diğer her şey sabit)?",
        opts: ["Emek arzı sağa kayar; ücret düşer.", "Emek talebi sola kayar; barista sayısı azalır.", "Emek talebi sağa kayar; ücret ve barista sayısı artar.", "Eğri üzerinde hareket; ücret düşer."],
        a: 2, why: "Çıktı fiyatı artınca MRP = MP × P artar ve emek talebi sağa kayar: ücret ve işçi sayısı artar. A şıkkı kayma yönünü arz tarafına yanlış atıyor; kahve fiyatı satıcının işçi arzını değil, işverenin talebini etkiler." },
      { q: "Dışarıdan gelen 2.000 göçmen işçi kebap ustası olarak çalışmaya başladı (diğer her şey sabit). Kebap ustası emek piyasasında ne olur?",
        opts: ["Emek arzı sağa kayar; ücret düşer, işçi sayısı artar.", "Emek arzı sola kayar; ücret artar, işçi sayısı azalır.", "Emek talebi sağa kayar; ücret ve işçi sayısı artar.", "Talep eğrisi üzerinde aşağı doğru hareket edilir; arz değişmez."],
        a: 0, why: "Göç (*immigration*) emek arzını sağa kaydırır; eşit talep karşısında ücret düşer, işçi sayısı artar. D şıkkı, ücret düşünce talep edilen miktarın artmasını (hareket) olayın nedeni sanıyor; oysa neden arz eğrisinin kaymasıdır." },
      { q: "Grafikte bir emek piyasasının başlangıç dengesi E₀'dır. Bir olaydan sonra denge E₁'e geçiyor (ücret yükselir, işçi sayısı azalır). Aşağıdakilerden hangisi bunu açıklar?",
        fig: { type: "graph", xlabel: "İşçi (L)", ylabel: "Ücret (W)", xmax: 10, ymax: 10,
          lines: [{ from: [2, 8], to: [8, 2], label: "D" }, { from: [2, 2], to: [8, 8], label: "S", color: 1 }, { from: [0, 2], to: [6, 8], label: "S₁", color: 2, dash: true }],
          points: [{ q: 5, p: 5, label: "E₀" }, { q: 4, p: 6, label: "E₁" }] },
        opts: ["Çıktının fiyatı arttı.", "İşçilerin verimliliği arttı.", "Göç nedeniyle çalışabilecek insan sayısı arttı.", "Başka sektörlerde ücretler yükseldi ve işçiler oraya geçti."],
        a: 3, why: "Ücret ↑ ve işçi sayısı ↓ ise arz sola kaymıştır; alternatif işlerin ücreti artınca (*alternative options*) bu olur. A ve B talebi sağa kaydırır (ücret ve işçi sayısı artar); C ise arzı sağa kaydırır." },
      { q: "Aşağıdakilerden hangisi emek TALEBİNİ kaydırmaz?",
        opts: ["Çıktının fiyatının değişmesi", "Ücretin kendisinin değişmesi", "İşçilerin verimliliğinin artması", "İşçi arayan firma sayısının artması"],
        a: 1, why: "Ücret eksendeki değişkendir; değişince talep eğrisi üzerinde hareket edilir. A, C ve D (çıktı fiyatı, MP, firma sayısı) MRP'yi ya da piyasa talebini değiştirdiği için talebi kaydırır." },
      { q: "Aşağıdakilerden hangisi bir emek piyasasında arzı SAĞA kaydırır?",
        opts: ["Alternatif işlerde ücretlerin artması", "Boş zamana verilen değerin artması", "Çalışma koşullarının iyileşmesi", "Emekli nüfusunun artması"],
        a: 2, why: "İyileşen çalışma koşulları bu işi çekici yapar ve daha çok kişi çalışmak ister. A, B ve D çalışmaya hazır kişi sayısını ya da isteğini azaltır; arzı sola kaydırır." }
    ]
  };
})();
