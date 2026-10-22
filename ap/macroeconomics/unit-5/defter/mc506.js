/* Kitora not defteri · mc506 · 5.6 Ekonomik Büyüme
   Kaynak: CED Topic 5.6 (MEA-2.B, MOD-1.C). Blok türleri: /ap/_kit/defter.js başı.
   Taban: üretim fonksiyonu Y = 3·√L (teknoloji/sermaye artınca 4·√L). Yardımcı işlevler yalnızca noktaları ve durumları üretir. */
window.DEFTER = (function () {
  function dur(tum, metin, acik) {
    return { metin: metin, goster: acik, gizle: tum.filter(function (x) { return acik.indexOf(x) < 0; }) };
  }
  function pf(k, ls) {
    return ls.map(function (l) { return [l, Math.round(k * Math.sqrt(l) * 100) / 100]; });
  }
  var LS = [0, 1, 2, 3, 4, 6, 9];

  /* ---- Grafik 1: üretim fonksiyonu ---- */
  var T1 = ["F0", "F1", "tf0", "tf1", "A", "B", "C", "rA", "rB", "rC"];
  var G1 = {
    tip: "grafik", baslik: "Toplam üretim fonksiyonu: çalışan arttıkça çıktı artar", xlabel: "Çalışan sayısı (L, milyon)", ylabel: "Toplam üretim (Y)", xmax: 10, ymax: 13,
    xticks: [{ v: 4, label: "4" }, { v: 9, label: "9" }],
    yticks: [{ v: 6, label: "6" }, { v: 8, label: "8" }, { v: 9, label: "9" }],
    ogeler: [
      { id: "F0", tip: "egri", renk: 0, noktalar: pf(3, LS), etiket: "" },
      { id: "F1", tip: "egri", renk: 3, noktalar: pf(4, LS), etiket: "", gizli: true },
      { id: "tf0", tip: "yazi", x: 7.2, y: 5.6, metin: "Y = f(L)", gizli: false },
      { id: "tf1", tip: "yazi", x: 2.2, y: 8.6, metin: "yeni Y = f(L)", gizli: true },
      { id: "A", tip: "nokta", renk: 0, x: 4, y: 6, etiket: "A", kilavuz: true, gizli: true },
      { id: "B", tip: "nokta", renk: 2, x: 9, y: 9, etiket: "B", kilavuz: true, gizli: true },
      { id: "C", tip: "nokta", renk: 3, x: 4, y: 8, etiket: "C", kilavuz: true, gizli: true },
      { id: "rA", tip: "cizgi", renk: 0, kesik: true, from: [0, 0], to: [4, 6], etiket: "Y/L = 1,5", gizli: true },
      { id: "rB", tip: "cizgi", renk: 2, kesik: true, from: [0, 0], to: [9, 9], etiket: "Y/L = 1", gizli: true },
      { id: "rC", tip: "cizgi", renk: 3, kesik: true, from: [0, 0], to: [4, 8], etiket: "Y/L = 2", gizli: true }
    ],
    durumlar: [
      dur(T1, "Diğer her şey sabitken (sermaye, teknoloji) çalışan sayısı arttıkça toplam çıktı artar: ==*aggregate production function*==. Eğri yukarı çıkar ama gittikçe yatıklaşır.", ["F0", "tf0"]),
      dur(T1, "**A**: 4 milyon çalışan, çıktı 6. Çalışan başına çıktı (==emek verimliliği==) = 6 ÷ 4 = 1,5. Başlangıçtan A'ya çizilen çizginin eğimi budur.", ["F0", "tf0", "A", "rA"]),
      dur(T1, "Yalnız işçi eklemek (**B**: 9 milyon çalışan): çıktı 9'a çıkar ama verimlilik 9 ÷ 9 = 1'e düşer. Sermaye ve teknoloji sabitken eklenen her işçi biraz daha az üretir.", ["F0", "tf0", "A", "rA", "B", "rB"]),
      dur(T1, "Sermaye (fiziksel ve beşerî) ya da teknoloji artarsa ==eğri yukarı kayar==. Aynı 4 milyon çalışanla artık çıktı **C**'de 8; verimlilik 8 ÷ 4 = 2.", ["F0", "F1", "tf0", "tf1", "A", "rA", "C", "rC"])
    ]
  };

  /* ---- Grafik 2: PPC dışa kayar ---- */
  var T2 = ["P1", "P1k", "P2", "U", "V", "N", "ok1", "ok2"];
  var G2 = {
    tip: "grafik", baslik: "PPC: atıl kaynağı kullanmak ile büyümek farklıdır", xlabel: "Sermaye malları", ylabel: "Tüketim malları", xmax: 10, ymax: 10,
    xticks: [], yticks: [],
    ogeler: [
      { id: "P1", tip: "ppc", renk: 0, qmax: 5, pmax: 5, k: 2, etiket: "PPC₁" },
      { id: "P1k", tip: "ppc", renk: 0, kesik: true, qmax: 5, pmax: 5, k: 2, etiket: "", gizli: true },
      { id: "P2", tip: "ppc", renk: 3, qmax: 7, pmax: 7, k: 2, etiket: "PPC₂", gizli: true },
      { id: "U", tip: "nokta", renk: 2, x: 2.5, y: 2.5, etiket: "U", gizli: true },
      { id: "V", tip: "nokta", renk: 1, x: 3.54, y: 3.54, etiket: "V", gizli: true },
      { id: "N", tip: "nokta", renk: 3, x: 4.95, y: 4.95, etiket: "N", gizli: true },
      { id: "ok1", tip: "ok", renk: 2, from: [2.7, 2.7], to: [3.35, 3.35], gizli: true },
      { id: "ok2", tip: "ok", renk: 3, from: [3.75, 3.75], to: [4.75, 4.75], gizli: true }
    ],
    durumlar: [
      dur(T2, "**PPC₁**: ekonominin eldeki kaynak, sermaye ve teknolojiyle üretebileceği en fazla çıktı bileşimleri.", ["P1"]),
      dur(T2, "**U** noktası PPC'nin içinde: kaynaklar atıl (işsizlik). U'dan **V**'ye geçmek, atıl kaynakları çalıştırmaktır; ==bu büyüme değildir==, eğri aynı kalır.", ["P1", "U", "V", "ok1"]),
      dur(T2, "==Büyüme==: daha çok sermaye, daha iyi eğitim ya da teknoloji ile PPC dışa kayar (**PPC₂**). Artık **N** gibi eskiden ulaşılamayan bileşimler üretilebilir.", ["P1k", "P2", "V", "N", "ok2"])
    ]
  };

  /* ---- Grafik 3: LRAS sağa kayar ---- */
  var T3 = ["LR1", "LR1k", "LR2", "S1", "S1k", "S2", "AD", "ok", "E1", "E2"];
  var G3 = {
    tip: "grafik", baslik: "Büyüme: LRAS sağa kayar", xlabel: "Reel GSYH", ylabel: "Fiyat düzeyi", xmax: 10, ymax: 10,
    xticks: [{ v: 5, label: "Y₁" }, { v: 7, label: "Y₂" }],
    yticks: [{ v: 5, label: "P₂" }, { v: 7, label: "P₁" }],
    ogeler: [
      { id: "LR1", tip: "cizgi", renk: 2, from: [5, 0], to: [5, 9.6], etiket: "LRAS₁" },
      { id: "LR1k", tip: "cizgi", renk: 2, kesik: true, from: [5, 0], to: [5, 9.6], etiket: "", gizli: true },
      { id: "LR2", tip: "cizgi", renk: 3, from: [7, 0], to: [7, 9.6], etiket: "LRAS₂", gizli: true },
      { id: "S1", tip: "cizgi", renk: 1, from: [1, 3], to: [8, 10], etiket: "SRAS₁" },
      { id: "S1k", tip: "cizgi", renk: 1, kesik: true, from: [1, 3], to: [8, 10], etiket: "", gizli: true },
      { id: "S2", tip: "cizgi", renk: 3, from: [3, 1], to: [10, 8], etiket: "SRAS₂", gizli: true },
      { id: "AD", tip: "cizgi", renk: 0, from: [3, 9], to: [10, 2], etiket: "AD" },
      { id: "ok", tip: "ok", renk: 3, from: [5.3, 9], to: [6.7, 9], gizli: true },
      { id: "E1", tip: "nokta", renk: 0, x: 5, y: 7, etiket: "E₁", kilavuz: true },
      { id: "E2", tip: "nokta", renk: 1, x: 7, y: 5, etiket: "E₂", kilavuz: true, gizli: true }
    ],
    durumlar: [
      dur(T3, "Başlangıç: uzun dönem denge **E₁**; potansiyel çıktı Y₁.", ["LR1", "S1", "AD", "E1"]),
      dur(T3, "Fiziksel ve beşerî sermaye ya da teknoloji arttı: ekonominin üretim kapasitesi büyüdü, ==LRAS sağa kayar== (LRAS₂). Bu, PPC'nin dışa kaymasının AD–AS'teki karşılığıdır.", ["LR1k", "LR2", "S1", "AD", "ok", "E1"]),
      dur(T3, "SRAS de sağa kayar (SRAS₂). Yeni denge **E₂**: reel çıktı Y₁'den Y₂'ye ==artar==, fiyat düzeyi P₁'den P₂'ye düşer.", ["LR1k", "LR2", "S1k", "S2", "AD", "E2"])
    ]
  };

  return {
    slug: "mc506",
    amac: "Bu konu ekonomik büyümeyi anlatıyor: nasıl ölçüldüğünü (kişi başına reel GSYH), neyin belirlediğini (sermaye, eğitim, teknoloji) ve PPC ile LRAS'ta nasıl göründüğünü. Kişi başı GSYH ile büyüme oranını hesaplamayı öğreneceksin.",
    bolumler: [
      {
        baslik: "Ekonomik büyüme nasıl ölçülür?",
        kisa: "Büyüme, kişi başına reel GSYH'nin zamanla artmasıdır.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "Kişi başı reel GSYH", alt: "yaşam standardı" }, "=",
              { t: "Reel GSYH", alt: "fiyatlardan arındırılmış" }, "÷",
              { t: "Nüfus", alt: "kişi sayısı" }
            ], aciklama: "Büyüme oranı (%) = (yeni − eski) ÷ eski × 100; kişi başı reel GSYH üzerinden hesaplanır." },
          { tip: "kavramlar", kartlar: [
              { ikon: "📈", terim: "Economic growth", tr: "ekonomik büyüme", tanim: "Kişi başına reel GSYH'nin zaman içinde artması; ölçüsü, bunun yıllık büyüme oranıdır.", ornek: "Herkesin ortalama olarak daha çok mal ve hizmete ulaşması." },
              { ikon: "👥", terim: "Real GDP per capita", tr: "kişi başına reel GSYH", tanim: "Reel GSYH'nin nüfusa bölümü. Toplam üretim büyür ama nüfus da büyürse kişi başı değişmeyebilir.", ornek: "Pasta büyüdü ama dilimi alan sayısı da arttı." }
            ] }
        ]
      },
      {
        baslik: "Hesap: kişi başı GSYH ve büyüme oranı",
        kisa: "Nominal değil reel GSYH'yi, toplam değil kişi başını kullan.",
        bloklar: [
          { tip: "ornek", baslik: "Pasta büyüdü ama dilim büyümedi", durum: "Kantistan'da 1. yıl reel GSYH 1200 milyar TL, nüfus 40 milyon. 2. yıl reel GSYH 1260 milyar TL, nüfus 42 milyon. Kişi başı reel GSYH'nin büyüme oranı nedir?",
            adimlar: ["1. yıl: 1200 ÷ 40 = 30 (bin TL kişi başı).", "2. yıl: 1260 ÷ 42 = 30 (bin TL kişi başı).", "Büyüme = (30 − 30) ÷ 30 × 100 = %0."],
            sonuc: "Reel GSYH %5 büyüdü (1200 → 1260) ama nüfus da %5 büyüdü: ==kişi başı büyüme %0==. Ekonomik büyüme, toplam üretimle değil kişi başı üretimle ölçülür." },
          { tip: "ornek", baslik: "Nominal büyümeyi arındır", durum: "Bir ülkede nominal GSYH %8 arttı, enflasyon %5, nüfus %1 arttı. Kişi başı reel GSYH yaklaşık yüzde kaç büyüdü?",
            adimlar: ["Reel GSYH büyümesi ≈ nominal büyüme − enflasyon = 8 − 5 = %3.", "Kişi başı reel büyüme ≈ reel büyüme − nüfus artışı = 3 − 1 = %2."],
            sonuc: "==Yaklaşık %2.== Nominal GSYH'deki artışın büyük kısmı fiyat artışıydı." },
          { tip: "tuzak", metin: "Nominal GSYH enflasyondan şişer; toplam reel GSYH de nüfustan şişer.", yanlis: "GSYH %8 arttıysa ekonomi %8 büyümüştür.", dogru: "Önce ==fiyat etkisini== (reel GSYH'ye geç), sonra ==nüfusu== (kişi başına geç) hesaba kat." }
        ]
      },
      {
        baslik: "Üretim fonksiyonu ve emek verimliliği",
        kisa: "Çalışan sayısı artınca çıktı artar; çalışan başına çıktı verimliliktir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "⚙️", terim: "Aggregate production function", tr: "toplam üretim fonksiyonu", tanim: "Çalışan sayısı ile toplam çıktı arasındaki ilişki; diğer her şey (sermaye, teknoloji) sabitken daha çok işçi daha çok çıktı demektir.", ornek: "Kantine bir aşçı daha alınca günlük tost sayısı artar." },
              { ikon: "🧮", terim: "Average labor productivity", tr: "ortalama emek verimliliği", tanim: "Çalışan başına çıktı: reel GSYH ÷ çalışan sayısı.", ornek: "500 milyar TL ÷ 25 milyon çalışan = 20 bin TL." }
            ] },
          G1
        ]
      },
      {
        baslik: "Verimliliği belirleyenler: sermaye ve teknoloji",
        kisa: "Verimliliği fiziksel sermaye, beşerî sermaye ve teknoloji belirler.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🏭", terim: "Physical capital per worker", tr: "çalışan başına fiziksel sermaye", tanim: "İşçinin kullandığı makine, alet ve binalar. Çalışan başına ne kadar çoksa verimlilik o kadar yüksektir.", ornek: "Fırıncıya elde yoğurma yerine hamur makinesi vermek." },
              { ikon: "🎓", terim: "Human capital per worker", tr: "çalışan başına beşerî sermaye", tanim: "İşçinin eğitimi, becerisi ve sağlığı.", ornek: "Barista kursu, meslek lisesi, iş sağlığı eğitimi." },
              { ikon: "💡", terim: "Technology", tr: "teknoloji", tanim: "Aynı girdilerle daha çok çıktı üretmeyi sağlayan bilgi ve yöntemler.", ornek: "Sipariş uygulaması, otomatik ödeme sistemi." }
            ] },
          { tip: "ikili", sol: { ikon: "🏭", baslik: "*Physical capital*", maddeler: ["Makine, alet, bina", "İnsanın dışındaki üretim araçları"] },
            sag: { ikon: "🎓", baslik: "*Human capital*", maddeler: ["Eğitim, beceri, sağlık", "İnsanın içindeki üretkenlik"] },
            oyun: [
              { metin: "Kafe sahibi yeni bir espresso makinesi aldı.", cevap: "sol", neden: "Makine: fiziksel sermaye." },
              { metin: "Çalışanlar barista kursuna gönderildi.", cevap: "sag", neden: "Beceri: beşerî sermaye." },
              { metin: "Kargo firması yeni bir depo yaptırdı.", cevap: "sol", neden: "Bina: fiziksel sermaye." },
              { metin: "Hastane personeline sürekli eğitim verildi.", cevap: "sag", neden: "Beceri ve bilgi: beşerî sermaye." }
            ] },
          { tip: "not", metin: "Üretim fonksiyonuna göre kişi başı çıktı hem fiziksel hem beşerî sermayeyle ==pozitif== ilişkilidir. Sermaye arttıkça eklenen her birim biraz daha az çıktı getirir; bu yüzden sürekli büyümenin asıl kaynağı ==teknolojidir==: eğriyi yukarı kaydırır." }
        ]
      },
      {
        baslik: "Büyüme grafikte: PPC ve LRAS",
        kisa: "PPC'nin dışa kayması, LRAS'ın sağa kaymasıdır.",
        bloklar: [
          { tip: "not", metin: "Ekonomik büyüme, üretim kapasitesinin artmasıdır: ==PPC dışa kayar== ya da aynı şey için ==LRAS sağa kayar==. İki grafik aynı olayı farklı dille anlatır." },
          G2,
          G3,
          { tip: "tuzak", metin: "PPC'nin içindeki bir noktadan kenarına gitmek de çıktıyı artırır, ama kapasiteyi artırmaz.", yanlis: "İşsizlik azalıp çıktı arttıysa ekonomi büyümüştür (PPC kaymıştır).", dogru: "Atıl kaynakları çalıştırmak PPC ==üzerinde hareket==tir (boşluğu kapatmak). Büyüme için ==PPC (ve LRAS) kaymalı==." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "*Economic growth* = kişi başına reel GSYH'nin zamanla artması.",
              "Kişi başı reel GSYH = reel GSYH ÷ nüfus; büyüme oranı = (yeni − eski) ÷ eski × 100.",
              "Nominal değil reel, toplam değil kişi başı: nominal büyüme ≈ reel büyüme + enflasyon.",
              "Aggregate production function: çalışan sayısı arttıkça çıktı artar (diğer her şey sabitken).",
              "Ortalama emek verimliliği = reel GSYH ÷ çalışan sayısı.",
              "Verimliliği belirleyenler: çalışan başına fiziksel sermaye, beşerî sermaye ve teknoloji.",
              "Sermaye ya da teknoloji artarsa üretim fonksiyonu yukarı kayar; kişi başı çıktı sermayeyle pozitif ilişkilidir.",
              "PPC'nin dışa kayması LRAS'ın sağa kaymasına karşılık gelir; atıl kaynağı çalıştırmak büyüme değildir."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Tabloda bir ülkenin iki yılı verilmiştir (reel GSYH milyar TL, nüfus milyon). Kişi başına reel GSYH'nin büyüme oranı nedir?",
        fig: { type: "table", head: ["Yıl", "Reel GSYH", "Nüfus"], rows: [["1", "400", "20"], ["2", "441", "21"]] },
        opts: ["%5", "%10,25", "%15,25", "%0"], a: 0,
        why: "Yıl 1: 400 ÷ 20 = 20; yıl 2: 441 ÷ 21 = 21. Büyüme = (21 − 20) ÷ 20 × 100 = %5. B şıkkı toplam reel GSYH büyümesidir (%10,25); nüfusu hesaba katmaz." },
      { q: "Bir ülkede 25 milyon kişi çalışmakta ve reel GSYH 500 milyar TL'dir. Ortalama emek verimliliği nedir?",
        opts: ["525 milyar TL", "475 milyar TL", "2 bin TL", "20 bin TL"], a: 3,
        why: "Ortalama emek verimliliği = reel GSYH ÷ çalışan sayısı = 500 milyar ÷ 25 milyon = 20 bin TL. C şıkkı birimi yanlış çevirmiş olur." },
      { q: "Bir ülke yeni bir yazılım teknolojisi buluyor; aynı sayıda çalışan ve aynı sermayeyle her işçi artık daha çok üretiyor. Toplam üretim fonksiyonuna etkisi nedir?",
        opts: ["Eğri üzerinde sağa doğru hareket", "Eğri yukarı kayar", "Eğri aşağı kayar", "Eğri üzerinde sola doğru hareket"], a: 1,
        why: "Teknoloji, aynı girdilerle daha çok çıktı sağlar: üretim fonksiyonu yukarı kayar. A şıkkı yalnız işçi sayısındaki artışı gösterir (eğri üzerinde hareket)." },
      { q: "Grafikte PPC₁'den PPC₂'ye bir kayma gösterilmiştir. AD–AS modelinde bu kaymanın karşılığı aşağıdakilerden hangisidir?",
        fig: { type: "graph", xlabel: "Sermaye malları", ylabel: "Tüketim malları", xmax: 10, ymax: 10,
          ppc: [{ qmax: 5, pmax: 5, k: 2, label: "PPC₁", color: 0 }, { qmax: 7, pmax: 7, k: 2, label: "PPC₂", color: 3, dash: true }], xticks: [], yticks: [] },
        opts: ["AD'nin sağa kayması", "SRAS'ın sola kayması", "LRAS'ın sağa kayması", "LRAS'ın sola kayması"], a: 2,
        why: "PPC'nin dışa kayması, üretim kapasitesinin artması demektir: LRAS sağa kayar. AD kayması talep tarafıdır ve kapasiteyi değiştirmez." },
      { q: "Bir ülkede nominal GSYH %6 arttı, enflasyon %4, nüfus %1 arttı. Kişi başı reel GSYH yaklaşık yüzde kaç büyümüştür?",
        opts: ["%1", "%2", "%5", "%11"], a: 0,
        why: "Reel büyüme ≈ 6 − 4 = %2; kişi başı büyüme ≈ 2 − 1 = %1. B şıkkı nüfus artışını çıkarmayı unutur; C şıkkı enflasyonu çıkarmayı unutur (6 − 1)." }
    ]
  };
})();
