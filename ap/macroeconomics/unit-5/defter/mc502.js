/* Kitora not defteri · mc502 · 5.2 Phillips Eğrisi
   Kaynak: CED Topic 5.2 (MOD-3.A, MOD-3.B). Blok türleri: /ap/_kit/defter.js başı.
   Taban: SRPC enflasyon = 15 ÷ işsizlik (+ kayma); doğal işsizlik (NRU) %5, denge (5, 3).
   Yardımcı işlevler yalnızca eğri noktalarını ve grafik durumlarını üretir. */
window.DEFTER = (function () {
  /* SRPC: π = 15/U + d  (d: yukarı kayma), noktalar yuvarlanır */
  function srpc(d) {
    return [2, 2.5, 3, 4, 5, 6, 7.5, 10].map(function (u) { return [u, Math.round((15 / u + d) * 100) / 100]; });
  }
  /* SRPC'nin yatay kayması: π = 15/(U + s) */
  function srpcX(s, us) {
    return us.map(function (u) { return [u, Math.round(15 / (u + s) * 100) / 100]; });
  }
  function dur(tum, metin, acik) {
    return { metin: metin, goster: acik, gizle: tum.filter(function (x) { return acik.indexOf(x) < 0; }) };
  }
  var XT = [{ v: 3, label: "3" }, { v: 5, label: "NRU" }, { v: 7.5, label: "7,5" }];
  var YT = [{ v: 2, label: "2" }, { v: 3, label: "3" }, { v: 5, label: "5" }];

  /* ---- Grafik 1: SRPC, takas ---- */
  var T1 = ["SR", "C", "A", "B", "okA", "okB"];
  var G1 = {
    tip: "grafik", baslik: "Kısa dönem Phillips eğrisi: işsizlik düşerken enflasyon yükselir", xlabel: "İşsizlik oranı (%)", ylabel: "Enflasyon oranı (%)", xmax: 10, ymax: 10,
    xticks: [{ v: 3, label: "3" }, { v: 5, label: "5" }, { v: 7.5, label: "7,5" }],
    yticks: [{ v: 2, label: "2" }, { v: 3, label: "3" }, { v: 5, label: "5" }],
    ogeler: [
      { id: "SR", tip: "egri", renk: 1, noktalar: srpc(0), etiket: "SRPC" },
      { id: "C", tip: "nokta", renk: 0, x: 5, y: 3, etiket: "C", kilavuz: true, gizli: true },
      { id: "A", tip: "nokta", renk: 3, x: 3, y: 5, etiket: "A", kilavuz: true, gizli: true },
      { id: "B", tip: "nokta", renk: 3, x: 7.5, y: 2, etiket: "B", kilavuz: true, gizli: true },
      { id: "okA", tip: "ok", renk: 3, from: [4.7, 3.4], to: [3.3, 4.6], gizli: true },
      { id: "okB", tip: "ok", renk: 3, from: [5.4, 2.8], to: [7.1, 2.1], gizli: true }
    ],
    durumlar: [
      dur(T1, "Yatay eksende işsizlik, dikey eksende enflasyon. *SRPC* ==aşağı eğimli==: kısa dönemde işsizliği düşürmenin bedeli daha yüksek enflasyondur.", ["SR"]),
      dur(T1, "Ekonomi her zaman SRPC'nin ==bir yerindedir==. Şimdi **C**'de: işsizlik %5, enflasyon %3.", ["SR", "C"]),
      dur(T1, "Talep artarsa ekonomi eğri üzerinde yukarı-sola gider: **A**'da işsizlik %3'e düşer, enflasyon %5'e çıkar.", ["SR", "C", "A", "okA"]),
      dur(T1, "Talep düşerse eğri üzerinde aşağı-sağa gider: **B**'de işsizlik %7,5'e çıkar, enflasyon %2'ye düşer.", ["SR", "C", "B", "okB"])
    ]
  };

  /* ---- Grafik 2: LRPC ve uzun dönem denge ---- */
  var T2 = ["LR", "SR", "E", "A", "B", "yL", "yR"];
  var G2 = {
    tip: "grafik", baslik: "Uzun dönem Phillips eğrisi: doğal işsizlikte dikey", xlabel: "İşsizlik oranı (%)", ylabel: "Enflasyon oranı (%)", xmax: 10, ymax: 10,
    xticks: XT, yticks: YT,
    ogeler: [
      { id: "LR", tip: "cizgi", renk: 2, from: [5, 0], to: [5, 9.6], etiket: "LRPC", gizli: true },
      { id: "SR", tip: "egri", renk: 1, noktalar: srpc(0), etiket: "SRPC", gizli: true },
      { id: "E", tip: "nokta", renk: 0, x: 5, y: 3, etiket: "E", kilavuz: true, gizli: true },
      { id: "A", tip: "nokta", renk: 3, x: 3, y: 5, etiket: "A", kilavuz: true, gizli: true },
      { id: "B", tip: "nokta", renk: 3, x: 7.5, y: 2, etiket: "B", kilavuz: true, gizli: true },
      { id: "yL", tip: "yazi", x: 2.2, y: 8.6, metin: "enflasyon açığı", gizli: true },
      { id: "yR", tip: "yazi", x: 7.8, y: 8.6, metin: "resesyon açığı", gizli: true }
    ],
    durumlar: [
      dur(T2, "**LRPC** dikeydir ve doğal işsizlik oranında (*NRU*, burada %5) durur: uzun dönemde enflasyon ne olursa olsun işsizlik doğal orana döner.", ["LR"]),
      dur(T2, "==Uzun dönem denge==, SRPC ile LRPC'nin kesiştiği yerdir: **E**. İşsizlik doğal oranda, enflasyon beklenen düzeyde (%3).", ["LR", "SR", "E"]),
      dur(T2, "E'nin ==solu==: işsizlik doğal oranın altında, **A** gibi. Bu bir *inflationary gap* (çıktı Yf'in üstünde).", ["LR", "SR", "E", "A", "yL"]),
      dur(T2, "E'nin ==sağı==: işsizlik doğal oranın üstünde, **B** gibi. Bu bir *recessionary gap* (çıktı Yf'in altında).", ["LR", "SR", "E", "B", "yR"])
    ]
  };

  /* ---- Grafik 3: arz şoku, SRPC kayar ---- */
  var T3 = ["LR", "SR", "SRk", "SR2", "SR3", "E", "S1", "S2"];
  var G3 = {
    tip: "grafik", baslik: "Arz şokları SRPC'yi kaydırır", xlabel: "İşsizlik oranı (%)", ylabel: "Enflasyon oranı (%)", xmax: 10, ymax: 10,
    xticks: [{ v: 4, label: "4" }, { v: 5, label: "NRU" }, { v: 6, label: "6" }],
    yticks: [{ v: 2.75, label: "2,75" }, { v: 3, label: "3" }, { v: 4.5, label: "4,5" }],
    ogeler: [
      { id: "LR", tip: "cizgi", renk: 2, from: [5, 0], to: [5, 9.6], etiket: "LRPC" },
      { id: "SR", tip: "egri", renk: 1, noktalar: srpc(0), etiket: "SRPC₁" },
      { id: "SRk", tip: "egri", renk: 1, kesik: true, noktalar: srpc(0), etiket: "", gizli: true },
      { id: "SR2", tip: "egri", renk: 3, noktalar: srpc(2), etiket: "SRPC₂", gizli: true },
      { id: "SR3", tip: "egri", renk: 3, noktalar: srpc(-1), etiket: "SRPC₃", gizli: true },
      { id: "E", tip: "nokta", renk: 0, x: 5, y: 3, etiket: "E", kilavuz: true },
      { id: "S1", tip: "nokta", renk: 3, x: 6, y: 4.5, etiket: "F", kilavuz: true, gizli: true },
      { id: "S2", tip: "nokta", renk: 3, x: 4, y: 2.75, etiket: "G", kilavuz: true, gizli: true }
    ],
    durumlar: [
      dur(T3, "Başlangıç: uzun dönem denge **E** (işsizlik %5, enflasyon %3).", ["LR", "SR", "E"]),
      dur(T3, "**Olumsuz arz şoku** (petrol fiyatı fırladı, SRAS sola): SRPC ==yukarı-sağa== kayar (SRPC₂). Ekonomi **F**'ye gider: hem işsizlik hem enflasyon artar, yani *stagflation*.", ["LR", "SRk", "SR2", "E", "S1"]),
      dur(T3, "**Olumlu arz şoku** (ucuz enerji ya da teknoloji, SRAS sağa): SRPC ==aşağı-sola== kayar (SRPC₃). Ekonomi **G**'ye gider: hem işsizlik hem enflasyon düşer.", ["LR", "SRk", "SR3", "E", "S2"])
    ]
  };

  /* ---- Grafik 4: uzun dönemde beklentiler, SRPC yukarı kayar ---- */
  var T4 = ["LR", "SR", "SRk", "SR2", "E", "A", "F", "okA", "okF"];
  var G4 = {
    tip: "grafik", baslik: "Uzun dönemde işsizlik doğal orana döner, enflasyon yüksek kalır", xlabel: "İşsizlik oranı (%)", ylabel: "Enflasyon oranı (%)", xmax: 10, ymax: 10,
    xticks: [{ v: 3, label: "3" }, { v: 5, label: "NRU" }],
    yticks: [{ v: 3, label: "3" }, { v: 5, label: "5" }],
    ogeler: [
      { id: "LR", tip: "cizgi", renk: 2, from: [5, 0], to: [5, 9.6], etiket: "LRPC" },
      { id: "SR", tip: "egri", renk: 1, noktalar: srpc(0), etiket: "SRPC₁" },
      { id: "SRk", tip: "egri", renk: 1, kesik: true, noktalar: srpc(0), etiket: "", gizli: true },
      { id: "SR2", tip: "egri", renk: 3, noktalar: srpc(2), etiket: "SRPC₂", gizli: true },
      { id: "E", tip: "nokta", renk: 0, x: 5, y: 3, etiket: "E", kilavuz: true },
      { id: "A", tip: "nokta", renk: 3, x: 3, y: 5, etiket: "A", kilavuz: true, gizli: true },
      { id: "F", tip: "nokta", renk: 1, x: 5, y: 5, etiket: "F", kilavuz: true, gizli: true },
      { id: "okA", tip: "ok", renk: 3, from: [4.7, 3.4], to: [3.3, 4.6], gizli: true },
      { id: "okF", tip: "ok", renk: 3, from: [2.9, 5.4], to: [4.5, 5.4], gizli: true }
    ],
    durumlar: [
      dur(T4, "Başlangıç: uzun dönem denge **E**; işsizlik %5, enflasyon %3, beklenen enflasyon da %3.", ["LR", "SR", "E"]),
      dur(T4, "Hükümet harcamasını artırır, AD sağa: ekonomi SRPC₁ üzerinde **A**'ya gider. İşsizlik %3 (doğal oranın altında), enflasyon %5.", ["LR", "SR", "E", "A", "okA"]),
      dur(T4, "Enflasyon %5'te kalınca işçiler ve firmalar bunu beklemeye başlar: ücretler ve maliyetler artar, SRAS sola kayar. SRPC ==yukarı== kayar (SRPC₂).", ["LR", "SRk", "SR2", "A"]),
      dur(T4, "Yeni uzun dönem denge **F**: işsizlik yine doğal oranda (%5) ama enflasyon ==%5'te kalıcı==. Talebi ısıtmak işsizliği kalıcı düşürmedi, enflasyonu kalıcı yükseltti.", ["LR", "SRk", "SR2", "F", "okF"])
    ]
  };

  /* ---- Grafik 5: doğal işsizlik oranı değişirse LRPC kayar ---- */
  var T5 = ["LR1", "SR1", "LR2", "SR2", "LR3", "SR3", "LR1k", "SR1k", "E1", "E2", "E3"];
  var G5 = {
    tip: "grafik", baslik: "Doğal işsizlik oranı değişirse LRPC (ve onunla SRPC) kayar", xlabel: "İşsizlik oranı (%)", ylabel: "Enflasyon oranı (%)", xmax: 10, ymax: 10,
    xticks: [{ v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }],
    yticks: [{ v: 3, label: "3" }],
    ogeler: [
      { id: "LR1", tip: "cizgi", renk: 2, from: [5, 0], to: [5, 9.6], etiket: "LRPC₁" },
      { id: "SR1", tip: "egri", renk: 1, noktalar: srpc(0), etiket: "SRPC₁" },
      { id: "LR1k", tip: "cizgi", renk: 2, kesik: true, from: [5, 0], to: [5, 9.6], etiket: "", gizli: true },
      { id: "SR1k", tip: "egri", renk: 1, kesik: true, noktalar: srpc(0), etiket: "", gizli: true },
      { id: "LR2", tip: "cizgi", renk: 3, from: [4, 0], to: [4, 9.6], etiket: "LRPC₂", gizli: true },
      { id: "SR2", tip: "egri", renk: 3, noktalar: srpcX(1, [1, 1.5, 2, 3, 4, 5, 7, 9]), etiket: "SRPC₂", gizli: true },
      { id: "LR3", tip: "cizgi", renk: 3, from: [6, 0], to: [6, 9.6], etiket: "LRPC₃", gizli: true },
      { id: "SR3", tip: "egri", renk: 3, noktalar: srpcX(-1, [3, 4, 5, 6, 8, 10]), etiket: "SRPC₃", gizli: true },
      { id: "E1", tip: "nokta", renk: 0, x: 5, y: 3, etiket: "E₁", kilavuz: true },
      { id: "E2", tip: "nokta", renk: 1, x: 4, y: 3, etiket: "E₂", kilavuz: true, gizli: true },
      { id: "E3", tip: "nokta", renk: 1, x: 6, y: 3, etiket: "E₃", kilavuz: true, gizli: true }
    ],
    durumlar: [
      dur(T5, "Başlangıç: doğal işsizlik %5, uzun dönem denge **E₁**.", ["LR1", "SR1", "E1"]),
      dur(T5, "İş arama platformları iş bulmayı hızlandırır: doğal oran %4'e iner. LRPC ==sola== kayar (LRPC₂); SRPC de onunla birlikte sola kayar. Yeni denge **E₂**.", ["LR1k", "SR1k", "LR2", "SR2", "E2"]),
      dur(T5, "Tersi: işsizlik sigortası uzar, yapısal uyumsuzluk büyür; doğal oran %6'ya çıkar. LRPC ==sağa== kayar (LRPC₃), SRPC de sağa. Yeni denge **E₃**.", ["LR1k", "SR1k", "LR3", "SR3", "E3"])
    ]
  };

  return {
    slug: "mc502",
    amac: "Bu konu Phillips eğrisini anlatıyor: enflasyonla işsizlik arasındaki ilişkiyi. Kısa dönemde işsizliğin enflasyonla takas edildiğini, uzun dönemde ise doğal oranda dikey kaldığını; talep ve arz şoklarının eğriyi nasıl hareket ettirdiğini öğreneceksin.",
    bolumler: [
      {
        baslik: "*SRPC*: kısa dönemde işsizlik ile enflasyon takası",
        kisa: "*SRPC* aşağı eğimlidir: işsizlik düşerse enflasyon artar.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "📉", terim: "Short-run Phillips curve (SRPC)", tr: "kısa dönem Phillips eğrisi", tanim: "Enflasyon ile işsizlik arasındaki kısa dönemli takası gösteren, aşağı eğimli eğri. Ekonomi her zaman SRPC'nin bir yerindedir.", ornek: "İşsizlik %3'e inerse kantinde, kirada, her yerde fiyatlar daha hızlı artar." },
              { ikon: "🔁", terim: "Inflation–unemployment trade-off", tr: "enflasyon–işsizlik takası", tanim: "Kısa dönemde birini azaltmak, ötekinin artması pahasınadır.", ornek: "Talebi canlandırırsan işsizlik düşer ama enflasyon yükselir." }
            ] },
          G1
        ]
      },
      {
        baslik: "*LRPC* ve uzun dönem denge",
        kisa: "*LRPC* doğal işsizlik oranında dikeydir; denge SRPC ile kesiştiği yerdir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "📏", terim: "Natural rate of unemployment (NRU)", tr: "doğal işsizlik oranı", tanim: "Sürtünmeli ve yapısal işsizliğin toplamı; döngüsel işsizlik sıfırdır. Tam istihdam (Yf) çıktısına karşılık gelir.", ornek: "Yeni mezunun iş araması ya da becerisi uymayan işçi." },
              { ikon: "⬆️", terim: "Long-run Phillips curve (LRPC)", tr: "uzun dönem Phillips eğrisi", tanim: "Doğal işsizlik oranında çizilen dikey çizgi: uzun dönemde enflasyon ile işsizlik arasında takas yoktur.", ornek: "Enflasyon %2 de olsa %8 de olsa uzun dönemde işsizlik doğal orana döner." }
            ] },
          G2
        ]
      },
      {
        baslik: "Talep şokları: SRPC üzerinde hareket",
        kisa: "AD kayınca ekonomi aynı SRPC üzerinde kayar; eğri yerinde kalır.",
        bloklar: [
          { tip: "not", metin: "AD–AS'te AD'nin sağa kayması çıktıyı ve fiyatları artırır. Çıktı artınca firmalar daha çok işçi çalıştırır: işsizlik düşer, enflasyon artar. Bu, ==SRPC üzerinde yukarı-sola== bir harekettir. AD sola kayarsa tam tersi: aşağı-sağa hareket." },
          { tip: "tablo", baslik: "AD–AS'ten Phillips eğrisine çeviri", head: ["AD–AS'te olan", "Çıktı", "İşsizlik", "Enflasyon", "Phillips eğrisinde"], rows: [
              ["AD sağa", "↑", "↓", "↑", "SRPC üzerinde yukarı-sola"],
              ["AD sola", "↓", "↑", "↓", "SRPC üzerinde aşağı-sağa"]
            ], not: "Demand shock = SRPC üzerinde hareket. Bu konunun en çok sorulan ayrımı bu." },
          { tip: "ornek", baslik: "Harçlık artışı ekonomide neye benzer?", durum: "Ekonomi uzun dönem dengede: işsizlik %5 (doğal oran), enflasyon %3. Hükümet harcamasını artırıyor, AD sağa kayıyor. Phillips eğrisinde ne olur?",
            adimlar: ["AD sağa: çıktı Yf'in üstüne çıkar, fiyatlar artar; enflasyon %3'ten yükselir.", "Çıktı artınca firmalar işçi alır: işsizlik doğal oranın altına düşer.", "İkisi birlikte: ekonomi SRPC üzerinde yukarı-sola, E'den A (işsizlik %3, enflasyon %5) gibi bir noktaya gider."],
            sonuc: "==SRPC yerinde durur==; ekonomi onun üzerinde yukarı-sola hareket eder ve *inflationary gap* oluşur." }
        ]
      },
      {
        baslik: "Arz şokları: SRPC kayar",
        kisa: "SRAS kayınca SRPC kayar; stagflation SRPC'nin yukarı-sağa kaymasıdır.",
        bloklar: [
          G3,
          { tip: "ikili", sol: { ikon: "↔️", baslik: "SRPC üzerinde *hareket*", maddeler: ["Talep (AD) şoku", "Maliye ya da para politikası", "Eğri yerinde"] },
            sag: { ikon: "🚀", baslik: "Eğri *kayar*", maddeler: ["Arz (SRAS) şoku → SRPC kayar", "Beklenen enflasyon → SRPC kayar", "Doğal işsizlik değişimi → LRPC kayar"] },
            oyun: [
              { metin: "Merkez Bankası faizi indirdi.", cevap: "sol", neden: "AD'yi etkiler: SRPC üzerinde hareket." },
              { metin: "Ham petrol fiyatı birden yükseldi.", cevap: "sag", neden: "Arz şoku: SRPC kayar." },
              { metin: "Hükümet harcamasını azalttı.", cevap: "sol", neden: "AD sola: SRPC üzerinde aşağı-sağa hareket." },
              { metin: "Yeni teknoloji maliyetleri düşürdü (SRAS sağa).", cevap: "sag", neden: "Olumlu arz şoku: SRPC aşağı-sola kayar." }
            ] },
          { tip: "tuzak", metin: "Stagflation'da hem işsizlik hem enflasyon artar; bu bir hareket gibi görünse de hareket olamaz, çünkü SRPC üzerinde işsizlik ile enflasyon zıt yönde gider.", yanlis: "Enflasyon ve işsizlik birlikte artıyorsa ekonomi SRPC üzerinde yukarı-sağa gitmiştir.", dogru: "İkisi birlikte artıyorsa ==SRPC kaymıştır== (yukarı-sağa): olumsuz arz şoku. Birlikte düşüyorsa aşağı-sola: olumlu arz şoku." }
        ]
      },
      {
        baslik: "Uzun dönem: beklentiler ayarlanınca SRPC kayar",
        kisa: "Ekonomi uzun dönemde LRPC üzerinde kalır; yüksek enflasyon kalıcı olur.",
        bloklar: [
          { tip: "not", metin: "Enflasyon uzun süre yüksek kalırsa insanlar bunu beklemeye başlar; ücretler ve maliyetler buna göre ayarlanır. ==Beklenen enflasyon== artınca SRPC yukarı kayar. İşsizlik tekrar doğal orana döner, ama enflasyon eski düzeyine inmez. Tam tersi, resesyon açığında ücretler ve beklentiler düşer: SRPC aşağı kayar." },
          G4,
          { tip: "adimlar", baslik: "Uzun dönem uyum, iki yönde", adimlar: [
              { baslik: "Enflasyon açığı (U < NRU)", metin: "Ücretler ve maliyetler artar, SRAS sola, SRPC yukarı. Denge, aynı NRU'da daha yüksek enflasyona gider." },
              { baslik: "Resesyon açığı (U > NRU)", metin: "Ücretler ve beklentiler düşer, SRAS sağa, SRPC aşağı. Denge, aynı NRU'da daha düşük enflasyona gider." },
              { baslik: "Sonuç", metin: "Uzun dönem dengede ekonomi LRPC üzerindedir; işsizlik doğal orana eşittir." }
            ] }
        ]
      },
      {
        baslik: "Doğal işsizlik değişirse *LRPC* kayar",
        kisa: "Doğal oranı değiştiren etkenler LRPC'yi (ve SRPC'yi) yatay kaydırır.",
        bloklar: [
          G5,
          { tip: "tablo", baslik: "Doğal işsizlik oranını ne değiştirir?", head: ["Doğal oran ↓ (LRPC sola)", "Doğal oran ↑ (LRPC sağa)"], rows: [
              ["İş eşleştirme teknolojisi, iş ilanı platformları", "Uzun ve cömert işsizlik sigortası"],
              ["Eğitim ve yeniden beceri programları", "Beceri uyumsuzluğu, yapısal değişim"],
              ["Kısa süreli işsizlik yardımı", "Yüksek asgari ücret, güçlü sendika baskısı"]
            ], not: "Hepsi sürtünmeli ve yapısal işsizliği değiştirir; döngüsel işsizlik doğal orana girmez." },
          { tip: "tuzak", metin: "Talep politikası LRPC'yi kaydırmaz.", yanlis: "Genişletici para politikası işsizliği kalıcı olarak doğal oranın altına indirir (LRPC sola).", dogru: "AD politikası SRPC üzerinde hareket ettirir; LRPC yalnızca ==doğal işsizlik oranını değiştiren etkenlerle== kayar." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "*SRPC* aşağı eğimli: kısa dönemde işsizlik düşerse enflasyon artar. Ekonomi her zaman SRPC üzerindedir.",
              "*LRPC* doğal işsizlik oranında (*NRU*) dikeydir; uzun dönem denge SRPC ile LRPC'nin kesiştiği noktadır.",
              "Denge noktasının solu *inflationary gap* (U < NRU), sağı *recessionary gap* (U > NRU).",
              "Talep şokları SRPC üzerinde hareket ettirir: AD sağa = yukarı-sola, AD sola = aşağı-sağa.",
              "Arz şokları SRPC'yi kaydırır: olumsuz şok (*stagflation*) yukarı-sağa, olumlu şok aşağı-sola.",
              "Beklenen enflasyon artınca SRPC yukarı kayar; işsizlik NRU'ya döner, enflasyon kalıcı yükselir.",
              "Doğal işsizlik oranını değiştiren etkenler (iş eşleştirme, işsizlik sigortası, asgari ücret) LRPC'yi yatay kaydırır.",
              "AD politikaları LRPC'yi kaydırmaz."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Grafikte ekonomi A noktasındadır. Aşağıdakilerden hangisi doğrudur?",
        fig: { type: "graph", xlabel: "İşsizlik oranı (%)", ylabel: "Enflasyon oranı (%)", xmax: 10, ymax: 10,
          lines: [{ from: [2, 6], to: [8, 0], label: "SRPC", color: 1 }, { from: [5, 0], to: [5, 9.6], label: "LRPC", color: 2 }],
          points: [{ q: 3, p: 5, label: "A", guides: true }],
          xticks: [{ v: 3, label: "3" }, { v: 5, label: "NRU" }], yticks: [{ v: 5, label: "5" }] },
        opts: ["Çıktı Yf'in altındadır; *recessionary gap* vardır.", "İşsizlik doğal oranın altındadır; *inflationary gap* vardır.", "Ekonomi uzun dönem dengededir.", "Doğal işsizlik oranı %3'tür."], a: 1,
        why: "A, LRPC'nin solunda: işsizlik (%3) doğal oranın (%5) altında ve çıktı Yf'in üstünde. Bu *inflationary gap*'tir. A şıkkı gap türlerini ters söylüyor; uzun dönem denge SRPC ile LRPC'nin kesiştiği noktadır." },
      { q: "Dünya petrol fiyatları keskin biçimde yükselince bir ülkede SRAS sola kayıyor. Phillips eğrisi modelinde bu olayın sonucu aşağıdakilerden hangisidir?",
        opts: ["SRPC üzerinde yukarı-sola hareket", "SRPC aşağı-sola kayar", "SRPC yukarı-sağa kayar", "LRPC sağa kayar"], a: 2,
        why: "Arz şokları SRPC'yi kaydırır. SRAS sola kayınca enflasyon ve işsizlik her düzeyde artar: SRPC yukarı-sağa (*stagflation*). A şıkkı talep şokunun sonucudur; D'de doğal işsizlik oranı değişmiyor." },
      { q: "Ekonomi uzun dönem dengededir. Hükümet vergileri indirip harcamaları artırıyor. Phillips eğrisi modelinde kısa dönemde ne olur?",
        opts: ["İşsizlik azalır, enflasyon artar; SRPC üzerinde hareket olur.", "İşsizlik artar, enflasyon azalır; SRPC üzerinde hareket olur.", "İşsizlik ve enflasyon birlikte artar; SRPC yukarı-sağa kayar.", "İşsizlik doğal orana iner; LRPC sola kayar."], a: 0,
        why: "Vergi indirimi ve harcama artışı AD'yi sağa kaydırır: çıktı artar, işsizlik düşer, enflasyon yükselir; bu SRPC üzerinde yukarı-sola harekettir. C şıkkı arz şokunun sonucudur; AD politikası LRPC'yi kaydırmaz." },
      { q: "Bir ülkede işsizlik sigortasının süresi kısaltılıyor ve iş arama platformları yaygınlaşıyor. Doğal işsizlik oranı düşüyor. Phillips eğrisi modelinde bu gelişmenin sonucu nedir?",
        opts: ["LRPC sağa kayar.", "SRPC üzerinde aşağı-sağa hareket olur.", "SRPC yukarı kayar, LRPC değişmez.", "LRPC sola kayar."], a: 3,
        why: "Doğal işsizlik oranını değiştiren etkenler LRPC'yi kaydırır; oran düştüğü için LRPC sola kayar (SRPC de onunla birlikte). B şıkkı bir talep şokunu anlatır; burada talep değişmiyor." },
      { q: "Tabloda bir ekonominin üç yılı verilmiştir. Doğal işsizlik oranı %5'tir. Yıl 2'den Yıl 3'e geçişi hangisi en iyi açıklar?",
        fig: { type: "table", head: ["Yıl", "İşsizlik (%)", "Enflasyon (%)"], rows: [["1", "5", "2"], ["2", "3", "4"], ["3", "5", "4"]] },
        opts: ["SRPC üzerinde aşağı-sağa hareket", "Beklenen enflasyon arttı; SRPC yukarı kaydı", "Doğal işsizlik oranı arttı; LRPC sağa kaydı", "AD sola kaydı"], a: 1,
        why: "Yıl 2'de talep artışı ekonomiyi SRPC üzerinde yukarı-sola götürmüş (işsizlik %3, enflasyon %4). Yıl 3'te işsizlik yine doğal orana (%5) dönmüş ama enflasyon %4'te kalmış: beklentiler ayarlanmış, SRPC yukarı kaymış. C şıkkı yanlış: doğal oran hâlâ %5'tir." }
    ]
  };
})();
