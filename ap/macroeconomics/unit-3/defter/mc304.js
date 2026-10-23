/* Kitpath not defteri · mc304 · 3.4 Uzun Dönem Toplam Arz (LRAS)
   Kaynak: College Board CED, Topic 3.4 (MOD-2.E, MOD-2.F). Blok türleri: /ap/_kit/defter.js başı.
   Not: yazıda tam istihdam çıktısı "Y∗" (U+2217) ile yazılır; "*" metin işaretiyle karışmasın diye. */
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
  /* Grafik 1: LRAS dikey, fiyat düzeyi değişir, çıktı Y*'da kalır */
  var dikey = graf("LRAS dikeydir: fiyat düzeyi değişir, çıktı değişmez", [
    LR("L", 6),
    { id: "PA", tip: "nokta", renk: 0, x: 6, y: 5, etiket: "", kilavuz: true, gizli: true },
    { id: "PB", tip: "nokta", renk: 3, x: 6, y: 7, etiket: "", kilavuz: true, gizli: true },
    { id: "PC", tip: "nokta", renk: 3, x: 6, y: 3, etiket: "", kilavuz: true, gizli: true },
    TX("tA", 6.6, 4.75, "A"), TX("tB", 6.6, 6.75, "B"), TX("tC", 6.6, 2.75, "C"),
    OK("oB", 6.3, 5.3, 6.3, 6.7, 3), OK("oC", 6.3, 4.7, 6.3, 3.3, 3)
  ], [
    ["*LRAS* eğrisi ==dikeydir== ve tam istihdam çıktısında (Y∗) durur. Ücretler ve fiyatlar uzun dönemde tamamen esnektir.", ["L"]],
    ["**A:** fiyat düzeyi P₁'de ekonomi tam istihdam çıktısı Y∗'ı üretiyor.", ["L", "PA", "tA"]],
    ["Fiyat düzeyi P₂'ye **çıkarsa** (B) ücretler ve girdi fiyatları da aynı oranda artar. Reel ücret ve kâr marjı değişmez: firmalar daha çok üretmek için neden bulamaz, çıktı ==Y∗'da kalır==.", ["L", "PA", "tA", "PB", "tB", "oB"]],
    ["Fiyat düzeyi P₃'e **inerse** (C) ücretler de aynı oranda düşer. Çıktı yine ==Y∗'da==.", ["L", "PA", "tA", "PC", "tC", "oC"]]
  ], { xt: [{ v: 6, label: "Y*" }], yt: [{ v: 3, label: "P₃" }, { v: 5, label: "P₁" }, { v: 7, label: "P₂" }] });

  /* Grafik 2: PPC (azami sürdürülebilir kapasite) */
  var ppc = {
    tip: "grafik", baslik: "PPC: azami sürdürülebilir kapasite", xlabel: "Sermaye malı", ylabel: "Tüketim malı", xmax: 8, ymax: 8, xticks: [], yticks: [],
    ogeler: [
      { id: "P0", tip: "ppc", renk: 0, qmax: 6, pmax: 6, k: 2, etiket: "PPC₀" },
      { id: "P0k", tip: "ppc", renk: 0, kesik: true, qmax: 6, pmax: 6, k: 2, etiket: "", gizli: true },
      { id: "P1", tip: "ppc", renk: 3, qmax: 7.5, pmax: 7.5, k: 2, etiket: "PPC₁", gizli: true },
      { id: "PA", tip: "nokta", renk: 1, x: 5.2, y: 3, etiket: "", kilavuz: true, gizli: true },
      { id: "PB", tip: "nokta", renk: 2, x: 2.6, y: 2.6, etiket: "", kilavuz: true, gizli: true },
      TX("tA", 5.9, 2.6, "A"), TX("tB", 2.0, 3.3, "B")
    ],
    durumlar: [
      { metin: "*PPC*, ekonominin tüm kaynaklarını tam ve verimli kullanarak üretebileceği en yüksek mal birleşimlerini gösterir. Bu, ==azami sürdürülebilir kapasitedir== (*maximum sustainable capacity*)." },
      { metin: "**A:** eğrinin üstünde: kaynaklar tam kullanılıyor. *LRAS*'ta tam istihdam çıktısı Y∗'da olmakla aynı durum.", goster: ["tA", "PA"] },
      { metin: "**B:** eğrinin içinde: kaynaklar boşta (işsizlik, atıl kapasite). Eşdeğeri: çıktı Y∗'ın altında.", goster: ["tA", "PA", "tB", "PB"] },
      { metin: "İşgücü, sermaye ya da teknoloji artarsa PPC ==dışa== kayar (PPC₁). *LRAS* tarafında bu, eğrinin ==sağa== kaymasıdır.", gizle: ["P0", "tB", "PB"], goster: ["P0k", "P1", "tA", "PA"] }
    ]
  };

  /* Grafik 3: LRAS'ın kayması = tam istihdam çıktısı ve büyüme */
  var buyume = graf("LRAS kayması: tam istihdam çıktısı değişir", [
    LR("L0", 6, { e: "LRAS₀" }), LR("L0k", 6, { kesik: true, e: "" }), LR("L1", 8, { renk: 3, e: "LRAS₁" }), LR("L2", 4, { renk: 3, e: "LRAS₂" }),
    SH("a1", 5, 6, 8, 3), SH("a2", 5, 6, 4, 3), TX("t1", 7, 5.9, "büyüme"), TX("t2", 5, 5.9, "küçülme")
  ], [
    ["Başlangıç: *LRAS₀*. Tam istihdam çıktısı Y₀.", ["L0"]],
    ["İşgücü, sermaye stoku, beşerî sermaye ya da teknoloji ==arttı==. Tam istihdam çıktısı büyür: *LRAS* ==sağa== kayar (LRAS₁). Bu, ==ekonomik büyümedir==.", ["L0k", "L1", "a1", "t1"]],
    ["Savaş ya da deprem kaynakları yok etti; nüfus ve sermaye azaldı: *LRAS* ==sola== kayar (LRAS₂). Tam istihdam çıktısı küçülür.", ["L0k", "L2", "a2", "t2"]]
  ], { xt: [{ v: 6, label: "Y₀" }], yt: [] });

  return {
    slug: "mc304",
    amac: "Bu konu uzun dönem toplam arzı (*LRAS*) anlatıyor: kısa dönem ile uzun dönem arasındaki farkı, neden LRAS'ın dikey olduğunu ve neyin tam istihdam çıktısını büyüttüğünü. LRAS'ın PPC ile aynı fikri anlattığını da göreceksin.",
    bolumler: [
      {
        baslik: "Kısa dönem ve uzun dönem",
        kisa: "Kısa dönemde bazı girdi fiyatları sabittir; uzun dönemde hepsi esner.",
        bloklar: [
          { tip: "ikili", sol: { ikon: "⏱️", baslik: "Kısa dönem (*short run*)", maddeler: ["Bazı girdi fiyatları, özellikle nominal ücretler, sabit", "*SRAS* yukarı eğimli", "Enflasyon ile işsizlik arasında ödünleşim var"] },
            sag: { ikon: "🗓️", baslik: "Uzun dönem (*long run*)", maddeler: ["Bütün ücretler ve fiyatlar tamamen esnek", "*LRAS* dikey", "Enflasyon ile işsizlik arasında ödünleşim yok"] },
            oyun: [
              { metin: "Fırın işçisi yıllık sözleşmeyle çalışıyor; maaşı fiyat artışına rağmen aynı.", cevap: "sol", neden: "Ücret sabit: kısa dönem." },
              { metin: "Bütün sözleşmeler yenilendi; ücretler yeni fiyat düzeyine uyum sağladı.", cevap: "sag", neden: "Ücretler esneyince uzun dönem." },
              { metin: "Fiyat düzeyi artarken reel çıktı da artıyor.", cevap: "sol", neden: "SRAS boyunca hareket: kısa dönem." },
              { metin: "Fiyat düzeyi değişse de reel çıktı sabit kalıyor.", cevap: "sag", neden: "Dikey LRAS: uzun dönem." },
              { metin: "Enflasyonu artırarak işsizliği düşürmek mümkün.", cevap: "sol", neden: "Ödünleşim yalnızca kısa dönemde var." }
            ] },
          { tip: "not", metin: "Kısa ve uzun dönem bir **takvim süresi** (3 ay, 5 yıl) değildir. Ölçüt ==ücret ve fiyatların esneyip esnemediğidir==: sözleşmeler yenilenip herkes yeni fiyat düzeyine uyum sağladıysa uzun dönemdesin." }
        ]
      },
      {
        baslik: "LRAS dikeydir: Y∗ düzeyinde",
        kisa: "Uzun dönemde fiyatlar ve ücretler uyum sağladığı için çıktı fiyat düzeyine bağlı değildir.",
        bloklar: [
          dikey,
          { tip: "kavramlar", kartlar: [
              { ikon: "📏", terim: "Long-run aggregate supply (LRAS)", tr: "uzun dönem toplam arz", tanim: "Ücret ve fiyatlar tamamen esnekken ekonominin arz ettiği reel çıktı: tam istihdam çıktısında dikey bir çizgi.", ornek: "Fiyatlar iki katına çıksa da ücretler de iki katına çıkar; üretilebilecek simit sayısı değişmez." },
              { ikon: "🎯", terim: "Full-employment output", tr: "tam istihdam çıktısı (Y∗)", tanim: "Doğal işsizlik oranında, kaynaklar tam kullanılırken üretilen reel çıktı; potansiyel çıktı da denir.", ornek: "Okuldaki herkes çalışmak isteyip iş bulabiliyor; yalnız iş değiştirenler ve beceri uyuşmazlığı kalmış." },
              { ikon: "🧭", terim: "Natural rate of unemployment", tr: "doğal işsizlik oranı", tanim: "Döngüsel işsizliğin sıfır olduğu oran: yalnızca sürtünmeli ve yapısal işsizlik vardır.", ornek: "İş değiştirirken geçen aylar sürtünmeli işsizliktir." }
            ] }
        ]
      },
      {
        baslik: "LRAS ve PPC: aynı kapasite, iki grafik",
        kisa: "LRAS ile PPC, ekonominin azami sürdürülebilir kapasitesini gösterir.",
        bloklar: [
          ppc,
          { tip: "tablo", baslik: "PPC ile LRAS yan yana", head: ["", "PPC", "LRAS"], rows: [
              ["Eksenler", "İki mal (sermaye ve tüketim malı)", "Fiyat düzeyi ve reel GSYİH"],
              ["Ne gösterir?", "Tüm kaynaklar tam kullanılınca üretilebilecek en çok mal", "Tam istihdamda üretilen reel çıktı (Y∗)"],
              ["Eğrinin içi / solu", "Kaynaklar boşta", "Çıktı Y∗'ın altında"],
              ["Büyüme", "PPC dışa kayar", "LRAS sağa kayar"],
              ["Gerileme", "PPC içe kayar", "LRAS sola kayar"]
            ], not: "İkisinin ortak noktası: *maximum sustainable capacity*, yani tüm kaynaklar tam kullanılınca üretilebilecek toplam çıktı." }
        ]
      },
      {
        baslik: "Uzun dönemde ödünleşim yok",
        kisa: "Uzun dönemde esnek ücretler enflasyonu çıktıdan ve işsizlikten ayırır.",
        bloklar: [
          { tip: "tablo", baslik: "Kısa dönem ile uzun dönem", head: ["", "Kısa dönem", "Uzun dönem"], rows: [
              ["Ücret ve fiyatlar", "Bazıları sabit", "Hepsi esnek"],
              ["Fiyat düzeyi ↑ olunca reel çıktı", "Artar (SRAS boyunca)", "Y∗'da kalır (dikey LRAS)"],
              ["İşsizlik", "Düşer", "Doğal oranda kalır"],
              ["Enflasyon–işsizlik ödünleşimi", "Var", "Yok"]
            ], vurgu: 3 },
          { tip: "tuzak", baslik: "Enflasyon kalıcı iş yaratmaz", metin: "Kısa dönemde fiyat artışı işsizliği düşürebilir ama bu kalıcı olmaz.", yanlis: "Enflasyonu biraz yükseltirsek işsizlik kalıcı olarak düşer.", dogru: "Ücretler uyum sağlayınca işsizlik ==doğal orana döner==; fiyat artışı reel çıktıyı kalıcı artırmaz (uzun dönemde ödünleşim yok)." }
        ]
      },
      {
        baslik: "LRAS'ı kaydıran etkenler: kaynak ve teknoloji",
        kisa: "LRAS yalnızca ekonominin üretim kapasitesi değişince kayar; AD kaymaz.",
        bloklar: [
          buyume,
          { tip: "tablo", baslik: "Tam istihdam çıktısını değiştiren etkenler", head: ["Etken", "LRAS sağa (büyüme)", "LRAS sola (küçülme)"], rows: [
              ["İşgücü", "Nüfus artışı, göçle gelen işçi", "Göçle işgücü kaybı, salgın"],
              ["Sermaye stoku", "Fabrika, makine, altyapı artışı", "Savaş ve depremle yıkım"],
              ["Beşerî sermaye", "Eğitim ve beceri artışı", "Beyin göçü"],
              ["Teknoloji ve doğal kaynak", "Yeni teknoloji, yeni kaynak keşfi", "Kaynakların tükenmesi"]
            ], not: "Bu etkenler genellikle SRAS'ı da aynı yöne kaydırır; çünkü verimlilik artınca üretim maliyeti de düşer." },
          { tip: "tuzak", baslik: "AD LRAS'ı kaydırmaz", metin: "Talep tarafı politikaları ve para basmak kapasiteyi büyütmez.", yanlis: "Toplam talep artarsa LRAS sağa kayar.", dogru: "AD kayması tam istihdam çıktısını ==değiştirmez==. LRAS yalnızca işgücü, sermaye, beşerî sermaye, teknoloji ya da kaynaklar değişince kayar." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Kısa dönemde bazı girdi fiyatları (özellikle nominal ücretler) sabittir; uzun dönemde bütün ücretler ve fiyatlar tamamen esnektir.",
              "Kısa/uzun dönem takvim süresi değil, esneklik ölçütüyle tanımlanır.",
              "*LRAS* tam istihdam çıktısında (Y∗) dikeydir; fiyat düzeyi değişse de çıktı sabittir.",
              "Y∗ doğal işsizlik oranındaki çıktıdır; LRAS ile PPC aynı şeyi gösterir: azami sürdürülebilir kapasite.",
              "Esnek ücretler yüzünden uzun dönemde enflasyon–işsizlik ödünleşimi yoktur.",
              "LRAS'ın sağa kayması tam istihdam çıktısının artması, yani ekonomik büyümedir; sola kayma küçülmedir.",
              "Yalnızca işgücü, sermaye, beşerî sermaye, teknoloji ya da kaynak değişimi LRAS'ı kaydırır; AD kaydırmaz."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Uzun dönem toplam arz eğrisi (*LRAS*) neden dikeydir?",
        opts: ["Firmalar uzun dönemde fiyat artınca daha çok üretir", "Devlet uzun dönemde fiyat düzeyini sabitler", "Ücretler ve fiyatlar tamamen esnek olduğu için fiyat düzeyi tam istihdam çıktısını değiştirmez", "Uzun dönemde toplam talep hiç değişmez"], a: 2,
        why: "Uzun dönemde ücretler ve girdi fiyatları fiyat düzeyine tam uyum sağlar; fiyat artışı reel kârı ve üretimi artırmaz. A şıkkı kısa dönemi (yukarı eğimli SRAS) anlatır. D şıkkı yanlış: talep uzun dönemde de değişebilir; fakat çıktıyı etkilemez." },
      { q: "Aşağıdakilerden hangisi *LRAS* eğrisini sağa kaydırır?",
        opts: ["Toplam talepteki artış", "Merkez Bankasının faizi indirmesi", "Doğalgaz fiyatlarındaki düşüş", "Sermaye stokunun ve işgücünün eğitiminin artması"], a: 3,
        why: "LRAS tam istihdam çıktısını gösterir; sermaye ve beşerî sermaye artışı kapasiteyi büyütür. A ve B yalnızca AD'yi kaydırır; C maliyeti düşürerek SRAS'ı kaydırır, ama kapasiteyi değiştirmez." },
      { q: "Grafikte *LRAS₁*, *LRAS₂*'ye kaymıştır. Bu kayma neyi ifade eder?",
        opts: ["Tam istihdam çıktısının artması, yani ekonomik büyüme", "Toplam talebin artması", "Enflasyon beklentilerinin artması", "Kısa dönemde enflasyon ile işsizlik arasında ödünleşimin ortaya çıkması"], a: 0,
        fig: { type: "graph", xlabel: "Reel GSYİH", ylabel: "Fiyat düzeyi", xmax: 10, ymax: 10, lines: [{ from: [5, 0], to: [5, 9], label: "LRAS₁" }, { from: [7, 0], to: [7, 9], label: "LRAS₂" }], caption: "Dikey iki çizgi: LRAS₂, LRAS₁'in sağında" },
        why: "LRAS₂, LRAS₁'in sağındadır: tam istihdam çıktısı artmıştır; buna ekonomik büyüme denir. B ve C başka eğrileri etkiler (AD ve SRAS); D şıkkı SRAS boyunca harekete aittir." },
      { q: "Bir ekonomi uzun dönem dengesindedir ve genel fiyat düzeyi %10 artıyor; ücretler ve girdi fiyatları da tamamen uyum sağlıyor. Aşağıdakilerden hangisi doğrudur?",
        opts: ["Reel çıktı tam istihdam çıktısının üstüne çıkar ve işsizlik düşer", "Reel çıktı ve işsizlik oranı değişmez; işsizlik doğal orandadır", "Reel çıktı azalır ve işsizlik artar", "LRAS sağa kayar"], a: 1,
        why: "Ücretler de aynı oranda arttığı için reel ücret ve kâr marjı değişmez; çıktı Y∗'da, işsizlik doğal oranda kalır. A şıkkı kısa dönem ödünleşimini anlatır; D şıkkı yanlış çünkü fiyat düzeyi LRAS'ı kaydırmaz." },
      { q: "Büyük bir depremde fabrikaların ve işgücünün önemli bir kısmı yok oluyor. Ülkenin *LRAS* ve *PPC* eğrilerine ne olur?",
        opts: ["LRAS sağa kayar, PPC dışa kayar", "LRAS değişmez, PPC içe kayar", "LRAS sağa kayar, PPC içe kayar", "LRAS sola kayar, PPC içe kayar"], a: 3,
        why: "Kaynaklar yok olduğu için azami sürdürülebilir kapasite düşer: LRAS sola, PPC içe kayar. İkisi aynı kapasiteyi gösterir ve aynı yönde hareket eder; B şıkkı bu yüzden yanlıştır." }
    ]
  };
})();
