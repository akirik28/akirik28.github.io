/* Kitpath not defteri · mc507 · 5.7 Kamu Politikası ve Büyüme
   Kaynak: CED Topic 5.7 (POL-4.A). Blok türleri: /ap/_kit/defter.js başı.
   Taban (ödünç fon): D y = 10 − x, S₁ y = x, S₂ y = x − 2. Taban (AD–AS): LRAS₁ x = 6, SRAS₁ y = x, AD₁ y = 12 − x; LRAS₂ x = 8, SRAS₂ y = x − 2, AD₂ y = 14 − x. */
window.DEFTER = (function () {
  function dur(tum, metin, acik) {
    return { metin: metin, goster: acik, gizle: tum.filter(function (x) { return acik.indexOf(x) < 0; }) };
  }

  /* ---- Grafik 1: tasarruf teşviki, ödünç fon piyasası ---- */
  var T1 = ["D", "S1", "S1k", "S2", "okS", "E1", "E2"];
  var G1 = {
    tip: "grafik", baslik: "Tasarrufu teşvik: fon arzı sağa, reel faiz aşağı, yatırım yukarı", xlabel: "Ödünç fon miktarı", ylabel: "Reel faiz oranı", xmax: 10, ymax: 10,
    xticks: [{ v: 5, label: "5" }, { v: 6, label: "6" }],
    yticks: [{ v: 4, label: "r₂" }, { v: 5, label: "r₁" }],
    ogeler: [
      { id: "D", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "D (yatırım)" },
      { id: "S1", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "S₁" },
      { id: "S1k", tip: "cizgi", renk: 1, kesik: true, from: [1, 1], to: [9, 9], etiket: "", gizli: true },
      { id: "S2", tip: "cizgi", renk: 3, from: [3, 1], to: [10, 8], etiket: "S₂", gizli: true },
      { id: "okS", tip: "ok", renk: 3, from: [6.6, 6.4], to: [8.2, 6.4], gizli: true },
      { id: "E1", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "E₁", kilavuz: true },
      { id: "E2", tip: "nokta", renk: 1, x: 6, y: 4, etiket: "E₂", kilavuz: true, gizli: true }
    ],
    durumlar: [
      dur(T1, "Başlangıç: ödünç fon piyasasında denge **E₁**, reel faiz r₁, yatırım 5 birim.", ["D", "S1", "E1"]),
      dur(T1, "Hükümet tasarruf hesaplarının faiz gelirini vergiden muaf tutar: hanehalkları daha çok tasarruf eder, ==fon arzı sağa kayar== (S₂).", ["D", "S1k", "S2", "okS", "E1"]),
      dur(T1, "Yeni denge **E₂**: reel faiz r₂'ye ==düşer==, yatırım 6'ya ==artar==. Daha çok yatırım daha çok fiziksel sermaye, uzun dönemde daha çok büyüme demektir.", ["D", "S1k", "S2", "E2"])
    ]
  };

  /* ---- Grafik 2: arz yönlü politika, AD–AS ---- */
  var T2 = ["LR1", "LR1k", "LR2", "S1", "S1k", "S2", "A1", "A1k", "A2", "E1", "Es", "E2", "ok"];
  var G2 = {
    tip: "grafik", baslik: "Arz yönlü politika: potansiyel çıktı artar", xlabel: "Reel GSYH", ylabel: "Fiyat düzeyi", xmax: 10, ymax: 10,
    xticks: [{ v: 6, label: "Yf₁" }, { v: 8, label: "Yf₂" }],
    yticks: [{ v: 5, label: "5" }, { v: 6, label: "P" }],
    ogeler: [
      { id: "LR1", tip: "cizgi", renk: 2, from: [6, 0], to: [6, 9.6], etiket: "LRAS₁" },
      { id: "LR1k", tip: "cizgi", renk: 2, kesik: true, from: [6, 0], to: [6, 9.6], etiket: "", gizli: true },
      { id: "LR2", tip: "cizgi", renk: 3, from: [8, 0], to: [8, 9.6], etiket: "LRAS₂", gizli: true },
      { id: "S1", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "SRAS₁" },
      { id: "S1k", tip: "cizgi", renk: 1, kesik: true, from: [1, 1], to: [9, 9], etiket: "", gizli: true },
      { id: "S2", tip: "cizgi", renk: 3, from: [3, 1], to: [10, 8], etiket: "SRAS₂", gizli: true },
      { id: "A1", tip: "cizgi", renk: 0, from: [3, 9], to: [9, 3], etiket: "AD₁" },
      { id: "A1k", tip: "cizgi", renk: 0, kesik: true, from: [3, 9], to: [9, 3], etiket: "", gizli: true },
      { id: "A2", tip: "cizgi", renk: 3, from: [4, 10], to: [10, 4], etiket: "AD₂", gizli: true },
      { id: "ok", tip: "ok", renk: 3, from: [7.6, 4.5], to: [9.3, 4.5], gizli: true },
      { id: "E1", tip: "nokta", renk: 0, x: 6, y: 6, etiket: "E₁", kilavuz: true },
      { id: "Es", tip: "nokta", renk: 1, x: 7, y: 5, etiket: "kısa dönem", kilavuz: true, gizli: true },
      { id: "E2", tip: "nokta", renk: 1, x: 8, y: 6, etiket: "E₂", kilavuz: true, gizli: true }
    ],
    durumlar: [
      dur(T2, "Başlangıç: tam istihdamda denge **E₁**, çıktı Yf₁, fiyat düzeyi P.", ["LR1", "S1", "A1", "E1"]),
      dur(T2, "Yatırım vergi indirimi, altyapı ve eğitim harcamaları kapasiteyi artırır: ==LRAS sağa (LRAS₂)== ve maliyetleri düşürüp SRAS sağa (SRAS₂) kaydırır. AD sabitse çıktı artar, fiyat düşer.", ["LR1k", "LR2", "S1k", "S2", "A1", "Es"]),
      dur(T2, "Aynı politika gelirleri ve yatırım talebini de artırır: AD de sağa kayar (AD₂). Yeni denge **E₂**: çıktı Yf₁'den Yf₂'ye çıkar, fiyat düzeyi aynı kalır.", ["LR1k", "LR2", "S1k", "S2", "A1k", "A2", "ok", "E2"])
    ]
  };

  return {
    slug: "mc507",
    amac: "Bu konu hükümetlerin uzun dönem büyümeyi nasıl hızlandırmaya çalıştığını anlatıyor. Üretkenliği, işgücü katılımını, altyapıyı ve teknolojiyi artıran politikaları; vergi teşvikleri gibi arz yönlü maliye politikalarının AD ve AS'e etkisini öğreneceksin.",
    bolumler: [
      {
        baslik: "Büyümeyi hızlandıran politikalar",
        kisa: "Politikalar üretkenliği ve işgücü katılımını artırarak kişi başı GSYH'yi büyütür.",
        bloklar: [
          { tip: "harita", merkez: "Uzun dönem büyüme politikaları", dallar: [
              { baslik: "Beşerî sermaye", alt: "Eğitim, burs, sağlık harcamaları" },
              { baslik: "Fiziksel sermaye ve altyapı", alt: "Yol, liman, enerji, internet; yatırım teşvikleri" },
              { baslik: "Teknoloji", alt: "Ar-Ge desteği, araştırma fonları" },
              { baslik: "İşgücü katılımı", alt: "Çocuk bakımı, esnek çalışma, işe girişi kolaylaştırma" }
            ] },
          { tip: "kavramlar", kartlar: [
              { ikon: "👷", terim: "Labor force participation", tr: "işgücüne katılım", tanim: "Çalışma çağındaki nüfusun çalışan ya da iş arayan kısmı. Katılım artarsa aynı nüfusla daha çok üretim yapılır.", ornek: "Kreş desteği sayesinde işe dönen anneler." },
              { ikon: "🏗️", terim: "Public investment", tr: "kamu yatırımı", tanim: "Hükümetin yol, liman, internet ağı, okul ve araştırma gibi uzun ömürlü harcamaları.", ornek: "Hızlı tren hattı, fiber internet ağı." }
            ] }
        ]
      },
      {
        baslik: "Üretkenlik ve işgücü katılımı politikaları",
        kisa: "Altyapı, eğitim ve teknoloji verimliliği; kreş ve esneklik katılımı artırır.",
        bloklar: [
          { tip: "tablo", baslik: "Politika → neyi artırır?", head: ["Politika", "Neyi artırır?", "Örnek"], rows: [
              ["Altyapı yatırımı", "Kamu ve özel verimliliği (fiziksel sermaye)", "Fiber internet, liman, hızlı tren"],
              ["Eğitim ve sağlık harcaması", "Beşerî sermaye", "Burs, meslek lisesi laboratuvarı"],
              ["Ar-Ge desteği", "Teknoloji", "Teknopark, üniversite-sanayi projesi"],
              ["Çocuk bakımı, esnek çalışma", "İşgücü katılımı", "Kreş desteği, yarı zamanlı çalışma imkânı"]
            ], not: "İlk üçü çalışan başına çıktıyı, sonuncusu çalışan sayısını artırır. İkisi de kişi başı reel GSYH'yi yükseltir." },
          { tip: "ikili", sol: { ikon: "📈", baslik: "Verimliliği artırır", maddeler: ["Çalışan başına çıktıyı yükseltir", "Altyapı, eğitim, Ar-Ge"] },
            sag: { ikon: "👥", baslik: "İşgücü katılımını artırır", maddeler: ["Çalışan sayısını yükseltir", "Kreş, esnek çalışma, işe girişi kolaylaştırma"] },
            oyun: [
              { metin: "Meslek liselerine yeni laboratuvarlar kuruldu.", cevap: "sol", neden: "Beşerî sermaye: verimlilik." },
              { metin: "Kreş ve çocuk bakım desteği genişletildi.", cevap: "sag", neden: "Çalışmak isteyen ebeveynler işgücüne katılır." },
              { metin: "Her ile hızlı internet altyapısı götürüldü.", cevap: "sol", neden: "Altyapı: verimlilik." },
              { metin: "Yarı zamanlı ve uzaktan çalışma kolaylaştırıldı.", cevap: "sag", neden: "Daha çok kişi çalışabilir: katılım." }
            ] }
        ]
      },
      {
        baslik: "Tasarruf ve yatırımı teşvik etmek",
        kisa: "Tasarrufu ve yatırımı destekleyen politikalar sermaye birikimini hızlandırır.",
        bloklar: [
          G1,
          { tip: "not", metin: "Yatırımı doğrudan teşvik etmek (yeni makineye vergi indirimi) ya da tasarrufu teşvik etmek (faiz gelirine vergi muafiyeti) farklı yollardır; ikisinin de amacı fiziksel sermaye birikimini artırıp üretim fonksiyonunu yukarı kaydırmaktır." }
        ]
      },
      {
        baslik: "Arz yönlü maliye politikaları",
        kisa: "Teşvikler yoluyla AD'yi, AS'yi ve potansiyel çıktıyı etkiler.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🧰", terim: "Supply-side fiscal policies", tr: "arz yönlü maliye politikaları", tanim: "Vergi ve harcama araçlarıyla hanehalkı ve firmaların çalışma, tasarruf ve yatırım teşviklerini değiştirerek AS'i ve potansiyel çıktıyı artırmayı amaçlayan politikalar.", ornek: "Yatırım vergi kredisi, gelir vergisi dilimlerini düşürmek, Ar-Ge desteği." }
            ] },
          G2,
          { tip: "tuzak", metin: "Arz yönlü politikaların AD'ye etkisi de vardır.", yanlis: "Arz yönlü vergi indirimi yalnızca AS'i kaydırır, AD'yi etkilemez.", dogru: "Vergi indirimi harcanabilir geliri ve yatırım talebini de artırır: ==AD sağa==. Farkı, teşviklerle ==SRAS ve LRAS'ı da== sağa kaydırmasıdır." }
        ]
      },
      {
        baslik: "Talep yönlü ve arz yönlü: farklar ve bedeller",
        kisa: "Arz yönlü politika kapasiteyi büyütür ama yavaş çalışır ve bütçeyi zorlar.",
        bloklar: [
          { tip: "tablo", baslik: "Talep yönlü ve arz yönlü politika", head: ["", "Talep yönlü (AD politikası)", "Arz yönlü (büyüme politikası)"], rows: [
              ["Kayan eğri", "AD", "AD, SRAS ve LRAS"],
              ["Uzun dönem sonuç", "Yalnız fiyat düzeyi; LRAS sabit", "Potansiyel çıktı ve kişi başı GSYH artar"],
              ["Etki hızı", "Hızlı", "Yavaş; yıllar sürer"],
              ["Bedel", "Açık, enflasyon, dışlama", "Açık ve dışlama (finansman), vergi gelir kaybı"]
            ] },
          { tip: "not", metin: "Altyapı ve eğitim harcamaları bütçe açığını büyütürse hükümet borçlanır ve faiz yükselir; bu da özel yatırımı dışlayabilir (bkz. 5.5). Vergi indirimlerinin büyümeyi ne kadar artırdığı da tartışmalıdır: gelir kaybı açığı büyütebilir. Bu yüzden her politika, kazancı ve bedeliyle birlikte değerlendirilir." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Üretkenliği ve işgücü katılımını artıran politikalar kişi başı reel GSYH'yi ve büyümeyi yükseltir.",
              "Altyapı ve teknoloji yatırımları üretkenliği artırır: fiziksel sermaye, beşerî sermaye ve teknoloji.",
              "İşgücü katılımını artırmak (çocuk bakımı, esnek çalışma) çalışan sayısını artırır.",
              "Tasarrufu teşvik etmek ödünç fon arzını sağa kaydırır: reel faiz düşer, yatırım artar.",
              "*Supply-side fiscal policies* teşvikleri değiştirerek AD, AS ve potansiyel çıktıyı etkiler.",
              "Başarılı bir arz yönlü politika LRAS'ı (ve SRAS'ı) sağa kaydırır; PPC dışa kayar.",
              "Arz yönlü vergi indirimi AD'yi de sağa kaydırır; yalnız AS'e etki etmez.",
              "Bedeller: bütçe açığı, dışlama etkisi ve etkinin yavaş gelmesi."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Aşağıdakilerden hangisi bir arz yönlü maliye politikasıdır?",
        opts: ["Merkez Bankasının zorunlu karşılık oranını düşürmesi", "Yeni makine alan firmalara yatırım vergi indirimi sağlanması", "Merkez Bankasının açık piyasada tahvil alması", "Hükümetin transfer ödemelerini geçici artırması"], a: 1,
        why: "Yatırım vergi indirimi firmaların yatırım teşvikini artırır; sermaye birikimi ve potansiyel çıktıyı etkiler: arz yönlü maliye politikası. A ve C para politikasıdır; D ise kısa dönemli bir talep politikasıdır." },
      { q: "Grafikte LRAS₁'den LRAS₂'ye bir kayma gösterilmiştir. Bu kaymaya en iyi hangi politika yol açabilir?",
        fig: { type: "graph", xlabel: "Reel GSYH", ylabel: "Fiyat düzeyi", xmax: 10, ymax: 10,
          lines: [{ from: [6, 0], to: [6, 9.6], label: "LRAS₁", color: 2 }, { from: [8, 0], to: [8, 9.6], label: "LRAS₂", color: 3 }, { from: [3, 9], to: [9, 3], label: "AD", color: 0 }],
          xticks: [{ v: 6, label: "Yf₁" }, { v: 8, label: "Yf₂" }], yticks: [] },
        opts: ["Hükümet harcamasının geçici artırılması", "Merkez Bankasının faizi indirmesi", "Eğitim, altyapı ve Ar-Ge yatırımlarının artırılması", "Vergi oranlarının artırılması"], a: 2,
        why: "LRAS'ın sağa kayması potansiyel çıktının artması demektir; bunu beşerî sermaye, altyapı ve teknoloji yatırımları sağlar. A ve B yalnız AD'yi kaydırır (LRAS sabit)." },
      { q: "Hükümet tasarruf hesaplarının faiz gelirini vergiden muaf tutuyor. Ödünç fon piyasasında bu politikanın kısa dönem sonucu nedir?",
        opts: ["Fon arzı sola kayar, reel faiz yükselir.", "Fon talebi sağa kayar, reel faiz yükselir.", "Fon arzı sağa kayar, reel faiz yükselir.", "Fon arzı sağa kayar, reel faiz düşer ve yatırım artar."], a: 3,
        why: "Tasarruf teşviki hanehalkı tasarrufunu artırır: ödünç fon arzı sağa kayar, reel faiz düşer ve yatırım artar. C şıkkı arzın kayması ile faizin yönünü çelişkili verir." },
      { q: "Hükümet ücretsiz kreş desteğini genişletiyor ve çalışmak isteyen birçok ebeveyn işgücüne katılıyor. Bu politikanın etkisi nedir?",
        opts: ["Çalışan sayısı artar; potansiyel çıktı ve kişi başı reel GSYH artabilir.", "AD sola kayar ve doğal işsizlik oranı sıfırlanır.", "Fiziksel sermaye stoku kesinlikle artar.", "LRAS sola kayar."], a: 0,
        why: "İşgücü katılımı artınca aynı nüfusla daha çok çalışan ve daha çok üretim olur: potansiyel çıktı artar. C şıkkı yanlış: kreş politikası çalışan sayısını etkiler, makine stokunu değil." },
      { q: "Hükümet altyapı ve eğitim harcamalarını büyük ölçüde artırıp açığı borçlanarak finanse ediyor. Bu büyüme politikasının olası bir bedeli aşağıdakilerden hangisidir?",
        opts: ["Reel faiz kesinlikle düşer.", "Borçlanma reel faizi yükseltip özel yatırımı dışlayabilir.", "LRAS kesinlikle sola kayar.", "Üretim fonksiyonu aşağı kayar."], a: 1,
        why: "Açığın borçlanmayla finansmanı ödünç fon talebini artırır; reel faiz yükselir ve özel yatırım azalabilir (*crowding out*). A şıkkı yanlış yönde: borçlanma faizi düşürmez." }
    ]
  };
})();
