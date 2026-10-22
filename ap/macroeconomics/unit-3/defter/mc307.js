/* Kitora not defteri · mc307 · 3.7 Uzun Dönemde Kendiliğinden Düzelme
   Kaynak: College Board CED, Topic 3.7 (MOD-2.I). Blok türleri: /ap/_kit/defter.js başı.
   Not: yazıda tam istihdam çıktısı "Y∗" (U+2217) ile yazılır; "*" metin işaretiyle karışmasın diye.
   Grafikler: AD: P = a − Y, SRAS: P = Y + c, LRAS: Y = 6 (veya 8). Denge hesapla bulunur. */
window.DEFTER = (function () {
  /* AD–AS yardımcıları. Denklemler (grafik birimi): AD: P = a − Y · SRAS: P = Y + c · LRAS: Y = sabit.
     Denge: Y = (a − c) / 2, P = (a + c) / 2. Taban durum: a = 11, c = −1, LRAS = 6 → E₀ = (6, 5). */
  function R(x) { return Math.round(x * 100) / 100; }
  function AD(id, a, o) { o = o || {}; var u = o.u || 8.8, y1 = Math.min(a - 2.5, 9.5), y2 = Math.max(a - u, 0.4), f = [R(y1), R(a - y1)], t = [R(y2), R(a - y2)];
    return { id: id, tip: "cizgi", renk: o.renk == null ? 0 : o.renk, kesik: !!o.kesik, from: o.alt ? t : f, to: o.alt ? f : t, etiket: o.e == null ? "AD" : o.e, gizli: true }; }
  function SR(id, c, o) { o = o || {}; var y1 = Math.max(0.4, 0.5 - c), y2 = Math.min(9.5, (o.top || 9.3) - c);
    return { id: id, tip: "cizgi", renk: o.renk == null ? 2 : o.renk, kesik: !!o.kesik, from: [R(y1), R(y1 + c)], to: [R(y2), R(y2 + c)], etiket: o.e == null ? "SRAS" : o.e, gizli: true }; }
  function LR(id, y, o) { o = o || {}; return { id: id, tip: "cizgi", renk: o.renk == null ? 1 : o.renk, kesik: !!o.kesik, from: [y, 0], to: [y, 10], etiket: o.e == null ? "LRAS" : o.e, gizli: true }; }
  function EQ(id, a, c, e, o) { o = o || {}; var x = R((a - c) / 2), y = R((a + c) / 2), d = { t: [0, 0.95], r: [0.9, -0.25], l: [-0.9, -0.25], b: [0, -1] }[o.p || "t"];
    return [{ id: id, tip: "nokta", renk: o.renk == null ? 3 : o.renk, x: x, y: y, etiket: "", kilavuz: true, gizli: true },
      { id: id + "t", tip: "yazi", x: R(x + d[0]), y: R(y + d[1]), metin: e, gizli: true }]; }
  function OK(id, x1, y1, x2, y2, renk) { return { id: id, tip: "ok", renk: renk == null ? 3 : renk, from: [R(x1), R(y1)], to: [R(x2), R(y2)], gizli: true }; }
  function SH(id, p, xa, xb, renk) { var s = xb > xa ? 1 : -1; return OK(id, xa + 0.3 * s, p, xb - 0.3 * s, p, renk); }
  function TX(id, x, y, metin, hiza) { return { id: id, tip: "yazi", x: x, y: y, metin: metin, hiza: hiza, gizli: true }; }
  function GAP(id, ye, ys, metin) { var sol = ye < ys; return [OK(id + "k", ye + (sol ? 0.1 : -0.1), 0.5, ys, 0.5, 2), { id: id + "t", tip: "yazi", x: R(sol ? ys - 0.15 : ys + 0.15), y: 1.1, metin: metin, hiza: sol ? "end" : "start", gizli: true }]; }
  function graf(baslik, ogeler, durumlar, o) { o = o || {};
    var og = [].concat.apply([], ogeler), ids = og.map(function (g) { return g.id; });
    return { tip: "grafik", baslik: baslik, xlabel: o.x || "Reel GSYİH (Y)", ylabel: o.y || "Fiyat düzeyi (P)", xmax: 11, ymax: 10,
      xticks: o.xt || [{ v: 6, label: "Y*" }], yticks: o.yt || [{ v: 5, label: "P₀" }], ogeler: og,
      durumlar: durumlar.map(function (d) { var on = []; d[1].forEach(function (i) { on.push(i); if (/^E/.test(i) && ids.indexOf(i + "t") >= 0) on.push(i + "t"); });
        return { metin: d[0], goster: on, gizle: ids.filter(function (i) { return on.indexOf(i) < 0; }) }; }) }; }
  /* Grafik 1: durgunluk açığı kendiliğinden kapanır (AD₀ → AD₁, SRAS₀ → SRAS₁) */
  var durgun = graf("Durgunluk açığı: ücretler düşer, SRAS sağa kayar", [
    AD("A0k", 11, { kesik: true, e: "" }), AD("A0", 11, { e: "AD₀" }), AD("A1", 9, { renk: 3, e: "AD₁" }),
    SR("S0", -1, { e: "SRAS₀" }), SR("S0k", -1, { kesik: true, e: "" }), SR("S1", -3, { e: "SRAS₁" }),
    LR("L", 6), EQ("E0", 11, -1, "E₀", { renk: 0, p: "r" }), EQ("E1", 9, -1, "E₁"), EQ("E2", 9, -3, "E₂", { p: "r" }),
    SH("s1", 7, 4, 2, 3), SH("s3", 2, 3, 5, 3), GAP("g1", 5, 6, "açık"), TX("tp", 0.6, 3.3, "P₂")
  ], [
    ["Başlangıç: uzun dönem dengesi **E₀**. Çıktı Y∗'da, işsizlik doğal oranda.", ["A0", "S0", "L", "E0"]],
    ["*AD* sola kayar (AD₁): kısa dönem dengesi **E₁**. Çıktı Y∗'ın altında, işsizlik ==doğal oranın üstünde==: bu bir durgunluk açığı.", ["A0k", "A1", "S0", "L", "E1", "s1", "g1k", "g1t"]],
    ["Hükümet bir şey yapmasa da: iş arayan çok, işçi talebi az. ==Ücretler ve girdi fiyatları düşer==. Üretim maliyeti azaldığı için *SRAS* ==sağa== kayar (SRAS₁).", ["A1", "S0k", "S1", "L", "E1", "s3", "g1k", "g1t"]],
    ["SRAS, AD₁ ile LRAS'ın kesiştiği yere gelince durur: **E₂**. Çıktı Y∗'a döndü, işsizlik doğal orana döndü. Fiyat düzeyi ==P₀'dan P₂'ye düştü== ve düşük kaldı.", ["A1", "S1", "L", "E2", "tp"]]
  ], { xt: [{ v: 6, label: "Y*" }], yt: [{ v: 5, label: "P₀" }] });

  /* Grafik 2: enflasyon açığı kendiliğinden kapanır (AD₀ → AD₂, SRAS₀ → SRAS₁ sola) */
  var enfl = graf("Enflasyon açığı: ücretler artar, SRAS sola kayar", [
    AD("A0k", 11, { kesik: true, e: "" }), AD("A0", 11, { e: "AD₀" }), AD("A2", 13, { renk: 3, e: "AD₂" }),
    SR("S0", -1, { e: "SRAS₀" }), SR("S0k", -1, { kesik: true, e: "" }), SR("S1", 1, { e: "SRAS₁", top: 8.2 }),
    LR("L", 6), EQ("E0", 11, -1, "E₀", { renk: 0, p: "r" }), EQ("E1", 13, -1, "E₁"), EQ("E2", 13, 1, "E₂", { p: "r" }),
    SH("s1", 7.5, 3.5, 5.5, 3), SH("s3", 8, 9, 7, 3), GAP("g2", 7, 6, "açık"), TX("tp", 0.6, 7.3, "P₂")
  ], [
    ["Başlangıç: uzun dönem dengesi **E₀**.", ["A0", "S0", "L", "E0"]],
    ["*AD* sağa kayar (AD₂): kısa dönem dengesi **E₁**. Çıktı Y∗'ın üstünde, işsizlik ==doğal oranın altında==: enflasyon açığı.", ["A0k", "A2", "S0", "L", "E1", "s1", "g2k", "g2t"]],
    ["Firmalar çalışan bulmak için ücretleri artırır, girdiler de pahalanır. Maliyet yükseldiği için *SRAS* ==sola== kayar (SRAS₁).", ["A2", "S0k", "S1", "L", "E1", "s3", "g2k", "g2t"]],
    ["SRAS, AD₂ ile LRAS'ın kesiştiği yere gelince durur: **E₂**. Çıktı Y∗'a döndü ve işsizlik doğal orana döndü. Fiyat düzeyi ==P₀'dan P₂'ye çıktı== ve yüksek kaldı.", ["A2", "S1", "L", "E2", "tp"]]
  ], { xt: [{ v: 6, label: "Y*" }], yt: [{ v: 5, label: "P₀" }] });

  /* Grafik 3: LRAS'ın kayması = tam istihdam çıktısı büyür */
  var buyume = graf("LRAS'ın kayması: ekonomik büyüme", [
    AD("A", 11, { e: "AD" }), SR("S0", -1, { e: "SRAS₀" }), SR("S0k", -1, { kesik: true, e: "" }), SR("S1", -5, { e: "SRAS₁" }),
    LR("L0", 6, { e: "LRAS₀" }), LR("L0k", 6, { kesik: true, e: "" }), LR("L1", 8, { renk: 3, e: "LRAS₁" }),
    EQ("E0", 11, -1, "E₀", { renk: 0, p: "r" }), EQ("E1", 11, -5, "E₁", { p: "r" }), SH("a1", 9, 6, 8, 3)
  ], [
    ["Başlangıç: uzun dönem dengesi **E₀**, tam istihdam çıktısı Y₀.", ["A", "S0", "L0", "E0"]],
    ["İşgücü, sermaye ya da teknoloji arttı: tam istihdam çıktısı büyür, *LRAS* ==sağa== kayar (LRAS₁). Bu ekonomik büyümedir.", ["A", "S0", "L0k", "L1", "a1", "E0"]],
    ["Yeni kapasiteyle maliyetler de düşer: *SRAS* sağa kayar ve denge **E₁**'e gelir. AD aynı kalırsa çıktı artar, fiyat düzeyi düşer.", ["A", "S0k", "S1", "L0k", "L1", "E1", "a1"]]
  ], { xt: [{ v: 6, label: "Y₀" }], yt: [{ v: 5, label: "P₀" }] });

  return {
    slug: "mc307",
    amac: "Bu konu şoktan sonra ekonominin hükümet müdahalesi olmadan nasıl tam istihdama döndüğünü anlatıyor: işsizlik ücretleri ve girdi fiyatlarını ayarlar, SRAS kayar, çıktı Y∗'a döner. LRAS'ın kaymasının ne anlama geldiğini de öğreneceksin.",
    bolumler: [
      {
        baslik: "Kendiliğinden düzelme fikri",
        kisa: "Uzun dönemde esnek ücretler ve fiyatlar ekonomiyi tam istihdama geri getirir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🧲", terim: "Long-run self-adjustment", tr: "uzun dönemde kendiliğinden düzelme", tanim: "Hükümet politika yapmasa da esnek ücret ve fiyatların, AD ya da SRAS şokundan sonra tam istihdamı geri getirmesi.", ornek: "Kantinde iş bulamayan öğrenciler daha düşük saat ücretine razı olur; yeni işçi almak ucuzlar." }
            ] },
          { tip: "adimlar", baslik: "Düzelme zinciri", adimlar: [
              { baslik: "1 · Şok olur", metin: "AD ya da SRAS kayar; çıktı Y∗'dan uzaklaşır." },
              { baslik: "2 · İşsizlik doğal orandan sapar", metin: "Y < Y∗ ise işsizlik doğal oranın üstünde; Y > Y∗ ise altında." },
              { baslik: "3 · Ücretler ve girdi fiyatları uyum sağlar", metin: "İşsiz çoksa ücret ve girdi fiyatları düşer; işçi bulmak zorsa artar." },
              { baslik: "4 · SRAS kayar", metin: "Maliyet düşerse SRAS sağa, artarsa sola kayar; ekonomi LRAS üzerinde dengeye gelir." }
            ] }
        ]
      },
      {
        baslik: "Durgunluk açığı: ücretler düşer, SRAS sağa kayar",
        kisa: "Açıkta ücretler düşer, SRAS sağa kayar; çıktı Y∗'a döner, fiyat düzeyi düşük kalır.",
        bloklar: [
          durgun,
          { tip: "not", metin: "Nominal ücretler aşağı yönde çok yapışkandır; işçiler ücret kesintisini kolay kabul etmez. Bu yüzden durgunluk açığı kendiliğinden kapanırken ==yıllar sürebilir==. Hükümetin ya da merkez bankasının politikayla müdahale etmesi bu yüzden tartışılır (3.8'de maliye politikası)." }
        ]
      },
      {
        baslik: "Enflasyon açığı: ücretler artar, SRAS sola kayar",
        kisa: "Açıkta ücretler artar, SRAS sola kayar; çıktı Y∗'a döner, fiyat düzeyi yüksek kalır.",
        bloklar: [
          enfl,
          { tip: "ikili", sol: { ikon: "➡️", baslik: "SRAS sağa kayar", maddeler: ["Durgunluk açığı (Y < Y∗)", "İşsizlik doğal oranın üstünde", "Ücretler ve girdi fiyatları düşer"] },
            sag: { ikon: "⬅️", baslik: "SRAS sola kayar", maddeler: ["Enflasyon açığı (Y > Y∗)", "İşsizlik doğal oranın altında", "Ücretler ve girdi fiyatları artar"] },
            oyun: [
              { metin: "Çok sayıda insan iş arıyor, firmalar işçi almak istemiyor.", cevap: "sol", neden: "İşsizlik yüksek: ücretler düşer, SRAS sağa." },
              { metin: "Firmalar çalışan bulmak için ücret artırıyor.", cevap: "sag", neden: "İşsizlik düşük: ücretler artar, SRAS sola." },
              { metin: "Kısa dönem dengesi LRAS'ın sağında.", cevap: "sag", neden: "Y > Y∗: maliyet artar, SRAS sola." },
              { metin: "Çıktı Y∗'ın altında.", cevap: "sol", neden: "Y < Y∗: maliyet düşer, SRAS sağa." },
              { metin: "Fabrikalar atıl, iş ilanı yok.", cevap: "sol", neden: "Kaynaklar boşta: ücretler düşer." }
            ] }
        ]
      },
      {
        baslik: "Sonuç: çıktı geri gelir, fiyat düzeyi AD şokunda kalıcı değişir",
        kisa: "Uzun dönemde çıktı hep Y∗'a döner; AD şoku fiyat düzeyini kalıcı olarak değiştirir.",
        bloklar: [
          { tip: "tablo", baslik: "Şokun türüne göre uzun dönem sonucu", head: ["Şok", "Kısa dönem", "Düzelme", "Uzun dönem"], rows: [
              ["AD sola", "Y↓ P↓ (durgunluk açığı)", "Ücretler ↓, SRAS sağa", "Y = Y∗; P ilk düzeyin altında"],
              ["AD sağa", "Y↑ P↑ (enflasyon açığı)", "Ücretler ↑, SRAS sola", "Y = Y∗; P ilk düzeyin üstünde"],
              ["SRAS sola", "Y↓ P↑ (durgunluk açığı)", "Ücretler ↓, SRAS sağa", "Y = Y∗; P ilk düzeye döner"],
              ["SRAS sağa", "Y↑ P↓ (enflasyon açığı)", "Ücretler ↑, SRAS sola", "Y = Y∗; P ilk düzeye döner"]
            ], not: "Her durumda işsizlik doğal orana döner. AD şokunda yalnızca fiyat düzeyi kalıcı değişir; SRAS şoku tamamen geri alınır." },
          { tip: "tuzak", baslik: "AD şoku çıktıyı kalıcı değiştirmez", metin: "AD kaymasının uzun dönem etkisini sorarlar.", yanlis: "AD sağa kaydıysa reel çıktı uzun dönemde kalıcı olarak artar.", dogru: "Uzun dönemde AD kayması ==yalnızca fiyat düzeyini== değiştirir. Çıktı Y∗'a, işsizlik doğal orana döner. Düzelmeyi AD değil, SRAS'ın kayması getirir." }
        ]
      },
      {
        baslik: "LRAS'ın kayması: tam istihdam çıktısı değişir",
        kisa: "LRAS'ın sağa kayması tam istihdam çıktısının artması, yani ekonomik büyümedir.",
        bloklar: [
          buyume,
          { tip: "not", metin: "*LRAS* yalnızca üretim kapasitesi değişince kayar (işgücü, sermaye, beşerî sermaye, teknoloji, doğal kaynaklar). Sağa kayma ==ekonomik büyüme==, sola kayma (savaş, deprem, kaynak kaybı) tam istihdam çıktısının küçülmesidir. Düzelme ise LRAS'ı kaydırmaz; SRAS'ı kaydırır." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Hükümet politika yapmasa da esnek ücret ve fiyatlar AD ya da SRAS şokundan sonra tam istihdamı geri getirir; işsizlik doğal orana döner.",
              "Durgunluk açığında işsizlik yüksektir: ücretler ve girdi fiyatları düşer, SRAS sağa kayar, çıktı Y∗'a döner.",
              "Enflasyon açığında işsizlik düşüktür: ücretler ve girdi fiyatları artar, SRAS sola kayar, çıktı Y∗'a döner.",
              "AD şokunda uzun dönemde çıktı Y∗'a döner ama fiyat düzeyi kalıcı olarak değişir (AD sola → daha düşük, AD sağa → daha yüksek).",
              "SRAS şokunda uzun dönemde hem çıktı hem fiyat düzeyi ilk düzeyine döner.",
              "Nominal ücretler aşağı yönde yapışkan olduğu için durgunluk açığının kendiliğinden kapanması yıllar sürebilir.",
              "LRAS'ın kayması tam istihdam çıktısının değiştiğini gösterir: sağa kayma ekonomik büyümedir."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Bir ekonomi negatif bir AD şokuna uğruyor ve durgunluk açığı oluşuyor. Hükümet hiçbir politika uygulamazsa uzun dönemde ne olur?",
        opts: ["AD kendiliğinden sağa kayar ve ilk düzeyine döner", "Ücretler ve girdi fiyatları düşer, SRAS sağa kayar; çıktı Y∗'a döner ve fiyat düzeyi ilk düzeyin altında kalır", "LRAS sola kayar", "SRAS sola kayar ve fiyat düzeyi artar"], a: 1,
        why: "Yüksek işsizlik ücretleri ve girdi fiyatlarını düşürür, maliyet azalır ve SRAS sağa kayar. Denge AD₁ boyunca aşağı-sağa gider ve LRAS'ta durur: çıktı Y∗, fiyat düzeyi ilk düzeyin altında. A şıkkı yanlış: düzelmeyi AD'nin kendiliğinden kayması değil, SRAS'ın kayması sağlar." },
      { q: "Grafikte ekonomi A kısa dönem dengesinden B uzun dönem dengesine geçmiştir. Bu geçişi aşağıdakilerden hangisi açıklar?",
        opts: ["Ücretler artmış ve SRAS sola kaymıştır", "AD sağa kaymıştır", "Ücretler ve girdi maliyetleri düşmüş, SRAS sağa kaymıştır; işsizlik doğal orana dönmüştür", "LRAS sağa kaymıştır"], a: 2,
        fig: { type: "graph", xlabel: "Reel GSYİH", ylabel: "Fiyat düzeyi", xmax: 11, ymax: 10, lines: [{ from: [7, 2], to: [1, 8], label: "AD" }, { from: [2, 1], to: [8, 7], label: "SRAS₁" }, { from: [4, 1], to: [10, 7], label: "SRAS₂", dash: true }, { from: [6, 0], to: [6, 9], label: "LRAS" }], points: [{ q: 5, p: 4, label: "A", guides: true }, { q: 6, p: 3, label: "B", guides: true }], caption: "A: LRAS'ın solunda; B: LRAS üzerinde" },
        why: "A noktası LRAS'ın solundadır (durgunluk açığı). B'ye geçiş SRAS₁'den SRAS₂'ye sağa kayma ile olur; bu, ücret ve girdi maliyetlerinin düşmesinin sonucudur. B'de çıktı Y∗, fiyat düzeyi daha düşüktür. D şıkkı yanlış: düzelme LRAS'ı kaydırmaz." },
      { q: "Bir ekonomide kısa dönem dengesi LRAS'ın sağındadır ve işsizlik doğal oranın altındadır. Hükümet müdahale etmezse uzun dönemde ne olur?",
        opts: ["Ücretler ve girdi fiyatları artar, SRAS sola kayar; çıktı Y∗'a döner ve fiyat düzeyi artar", "Ücretler düşer, SRAS sağa kayar ve fiyat düzeyi düşer", "AD sola kayar ve çıktı Y∗'a döner", "LRAS sağa kayar ve açık kapanır"], a: 0,
        why: "İşsizlik doğal oranın altındayken işçi bulmak zorlaşır, ücretler ve girdi fiyatları artar, SRAS sola kayar. Denge AD boyunca yukarı-sola gider ve LRAS'ta durur: çıktı Y∗, fiyat düzeyi daha yüksek. B şıkkı durgunluk açığının düzelmesini anlatır." },
      { q: "Bir ekonomi negatif bir SRAS şokuna uğruyor (örneğin doğalgaz zammı) ve hükümet politika uygulamıyor. Uzun dönem sonucu aşağıdakilerden hangisidir?",
        opts: ["Çıktı Y∗'ta, fiyat düzeyi ilk düzeyin üstünde kalır", "Çıktı ve fiyat düzeyi ilk düzeylerine döner", "Çıktı Y∗'ın altında kalır", "Çıktı Y∗'ta, fiyat düzeyi ilk düzeyin altında kalır"], a: 1,
        why: "Şok sonrası durgunluk açığında ücretler düşer ve SRAS ilk konumuna sağa kayar: ekonomi eski dengeye döner. AD şokundan farkı budur: SRAS şokunda fiyat düzeyi de ilk düzeyine geri gelir. A şıkkı yalnızca AD sağa şokunu anlatır." },
      { q: "Bir ülkede göçle gelen işçiler ve yeni teknoloji sayesinde tam istihdam çıktısı artıyor. Bu durum AD–AS grafiğinde nasıl gösterilir ve neyi ifade eder?",
        opts: ["AD sağa kayar; geçici bir talep artışı", "SRAS sola kayar; enflasyon açığı", "LRAS sola kayar; durgunluk açığı", "LRAS sağa kayar; tam istihdam çıktısının artması, yani ekonomik büyüme"], a: 3,
        why: "İşgücü ve teknoloji kapasiteyi büyütür: LRAS sağa kayar. Bu, tam istihdam çıktısının artması, yani ekonomik büyümedir. A şıkkı yanlış: AD kayması tam istihdam çıktısını değiştirmez." }
    ]
  };
})();
