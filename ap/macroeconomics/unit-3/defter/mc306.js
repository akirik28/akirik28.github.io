/* Kitpath not defteri · mc306 · 3.6 Kısa Dönemde AD–AS Değişimleri
   Kaynak: College Board CED, Topic 3.6 (MOD-2.H). Blok türleri: /ap/_kit/defter.js başı.
   Not: yazıda tam istihdam çıktısı "Y∗" (U+2217) ile yazılır; "*" metin işaretiyle karışmasın diye.
   Grafikler: AD: P = a − Y, SRAS: P = Y + c, LRAS: Y = 6; taban E₀ = (6, 5). */
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
  /* Grafik 1: AD şokları */
  var adsok = graf("AD şoku: çıktı, istihdam ve fiyat düzeyi aynı yönde", [
    AD("A0", 11, { e: "AD₀" }), AD("A0k", 11, { kesik: true, e: "" }), AD("A1", 15, { renk: 3, e: "AD₁" }), AD("A2", 9, { renk: 3, e: "AD₂" }),
    SR("S", -1), LR("L", 6),
    EQ("E0", 11, -1, "E₀", { renk: 0, p: "r" }), EQ("E1", 15, -1, "E₁"), EQ("E2", 9, -1, "E₂"),
    SH("s1", 7.5, 3.5, 7.5, 3), SH("s2", 7, 4, 2, 3)
  ], [
    ["Başlangıç: uzun dönem dengesi **E₀**. Bu defterde şoklar önce *kısa dönemde* incelenir.", ["A0", "S", "L", "E0"]],
    ["**Pozitif AD şoku:** tüketici güveni ve yatırımlar arttı; *AD* ==sağa== kayar. Yeni denge E₁: ==Y↑, istihdam↑ (işsizlik↓), P↑==. Çıktı Y∗'ın üstüne çıktı.", ["A0k", "A1", "S", "L", "E1", "s1"]],
    ["**Negatif AD şoku:** talep çöküyor; *AD* ==sola== kayar. Yeni denge E₂: ==Y↓, istihdam↓ (işsizlik↑), P↓==. Çıktı Y∗'ın altında.", ["A0k", "A2", "S", "L", "E2", "s2"]]
  ], { xt: [{ v: 6, label: "Y*" }], yt: [{ v: 5, label: "P₀" }] });

  /* Grafik 2: SRAS şokları */
  var srsok = graf("SRAS şoku: çıktı ve fiyat düzeyi zıt yönde", [
    AD("A", 11, { e: "AD" }), SR("S0", -1, { e: "SRAS₀" }), SR("S0k", -1, { kesik: true, e: "" }), SR("S1", -3, { e: "SRAS₁" }), SR("S2", 1, { e: "SRAS₂", top: 8.2 }),
    LR("L", 6), EQ("E0", 11, -1, "E₀", { renk: 0, p: "r" }), EQ("E1", 11, -3, "E₁"), EQ("E2", 11, 1, "E₂"),
    SH("s1", 2, 3, 5, 3), SH("s2", 7.5, 8.5, 6.5, 3)
  ], [
    ["Başlangıç: uzun dönem dengesi **E₀**.", ["A", "S0", "L", "E0"]],
    ["**Pozitif SRAS şoku:** maliyet düştü (ucuz enerji, yeni teknoloji); *SRAS* ==sağa== kayar. Yeni denge E₁: ==Y↑, istihdam↑ (işsizlik↓), P↓==.", ["A", "S0k", "S1", "L", "E1", "s1"]],
    ["**Negatif SRAS şoku:** maliyet arttı (doğalgaz zammı); *SRAS* ==sola== kayar. Yeni denge E₂: ==Y↓, istihdam↓ (işsizlik↑), P↑==. Hem durgunluk hem enflasyon: ==*stagflation*==.", ["A", "S0k", "S2", "L", "E2", "s2"]]
  ], { xt: [{ v: 6, label: "Y*" }], yt: [{ v: 5, label: "P₀" }] });

  return {
    slug: "mc306",
    amac: "Bu konu AD ya da SRAS aniden kaydığında kısa dönemde çıktının, istihdamın ve fiyat düzeyinin ne olduğunu anlatıyor. Talep çekmeli ve maliyet itmeli enflasyonu ayırt etmeyi ve haberi önce şoka, sonra dört sonuca çevirmeyi öğreneceksin.",
    bolumler: [
      {
        baslik: "Pozitif ve negatif şok: çıktıya göre adlandırılır",
        kisa: "Şok, çıktıyı artırıyorsa pozitif, azaltıyorsa negatiftir; fiyat bunu belirlemez.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "⚡", terim: "Shock", tr: "şok", tanim: "AD ya da SRAS'ı beklenmedik biçimde kaydıran olay.", ornek: "Bir ay içinde doğalgaz fiyatının ikiye katlanması." },
              { ikon: "➕", terim: "Positive shock", tr: "pozitif şok", tanim: "Reel çıktıyı artıran kayma: AD sağa ya da SRAS sağa.", ornek: "Turist rekoru (AD sağa), ucuz enerji (SRAS sağa)." },
              { ikon: "➖", terim: "Negative shock", tr: "negatif şok", tanim: "Reel çıktıyı azaltan kayma: AD sola ya da SRAS sola.", ornek: "Yatırımların çökmesi (AD sola), enerji zammı (SRAS sola)." }
            ] },
          { tip: "tuzak", baslik: "Pozitif, “fiyat artar” demek değildir", metin: "Şokun adı çıktıya bakar, fiyata değil.", yanlis: "Pozitif şokta fiyat düzeyi hep artar.", dogru: "Pozitif ==AD== şokunda P↑, pozitif ==SRAS== şokunda P↓. Adı belirleyen çıktıdır: pozitifte Y↑, negatifte Y↓." }
        ]
      },
      {
        baslik: "AD şoku: çıktı, istihdam ve fiyat aynı yönde",
        kisa: "AD sağa kayınca çıktı, istihdam ve fiyat düzeyi artar; sola kayınca azalır.",
        bloklar: [
          adsok,
          { tip: "not", metin: "Çıktı artınca firmalar daha çok işçi çalıştırır: ==istihdam artar==. İşgücü sabitken çalışan sayısı artarsa ==işsizlik düşer==. Çıktı azalınca tersi olur. Bu yüzden her çıktı hareketi, aynı yönde istihdamı, ters yönde işsizliği de söyler." }
        ]
      },
      {
        baslik: "SRAS şoku: çıktı ve fiyat zıt yönde",
        kisa: "SRAS sağa kayınca çıktı artar, fiyat düşer; sola kayınca çıktı düşer, fiyat artar.",
        bloklar: [
          srsok,
          { tip: "tuzak", baslik: "Fiyat arttı, demek ki AD arttı?", metin: "Fiyat düzeyinin artması iki ayrı sebepten olabilir.", yanlis: "Fiyat düzeyi arttıysa AD sağa kaymıştır.", dogru: "P↑ ya AD sağa (Y↑) ya da SRAS sola (Y↓) kaymasından gelir. ==Çıktıya bak==: Y↑ ise talep, Y↓ ise maliyet şoku." }
        ]
      },
      {
        baslik: "İki tür enflasyon: talep çekmeli ve maliyet itmeli",
        kisa: "AD sağa kayınca talep çekmeli, SRAS sola kayınca maliyet itmeli enflasyon olur.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🧲", terim: "Demand-pull inflation", tr: "talep çekmeli enflasyon", tanim: "AD'nin sağa kaymasıyla fiyat düzeyinin artması; çıktı da artar.", ornek: "Turizm patlaması, kantine yoğun talep, her şey zamlanıyor." },
              { ikon: "🧱", terim: "Cost-push inflation", tr: "maliyet itmeli enflasyon", tanim: "SRAS'ın sola kaymasıyla fiyat düzeyinin artması; çıktı azalır.", ornek: "Doğalgaz zammı üretim maliyetini artırdı." },
              { ikon: "🥶", terim: "Stagflation", tr: "stagflasyon", tanim: "Çıktının düşerken (işsizlik artarken) fiyat düzeyinin de artması.", ornek: "Maliyet şokuyla hem işsizlik hem fiyatlar artıyor." }
            ] },
          { tip: "ikili", sol: { ikon: "🧲", baslik: "Talep çekmeli (AD sağa)", maddeler: ["Çıktı ↑, işsizlik ↓, fiyat ↑", "Ekonomi aşırı ısınır"] },
            sag: { ikon: "🧱", baslik: "Maliyet itmeli (SRAS sola)", maddeler: ["Çıktı ↓, işsizlik ↑, fiyat ↑", "Stagflasyon"] },
            oyun: [
              { metin: "Turizm patladı, harcamalar arttı, fiyatlar yükseldi.", cevap: "sol", neden: "Harcama artışı: AD sağa, çıktı da artıyor." },
              { metin: "Doğalgaz zamlandı, üretim maliyetleri arttı.", cevap: "sag", neden: "Maliyet artışı: SRAS sola." },
              { metin: "Fiyatlar artarken işsizlik de arttı.", cevap: "sag", neden: "Fiyat ↑ ve çıktı ↓: maliyet itmeli." },
              { metin: "Ekonomi aşırı ısındı, işsizlik düştü, fiyatlar artıyor.", cevap: "sol", neden: "Çıktı ↑ ve fiyat ↑: talep çekmeli." },
              { metin: "Sendika anlaşmasıyla ücretler çok arttı.", cevap: "sag", neden: "Ücret bir maliyettir: SRAS sola." }
            ] },
          { tip: "tablo", baslik: "Dört şok, dört sonuç (kısa dönem)", head: ["Şok", "Reel çıktı (Y)", "İstihdam", "İşsizlik", "Fiyat düzeyi (P)"], rows: [
              ["AD sağa (pozitif)", "↑", "↑", "↓", "↑"],
              ["AD sola (negatif)", "↓", "↓", "↑", "↓"],
              ["SRAS sağa (pozitif)", "↑", "↑", "↓", "↓"],
              ["SRAS sola (negatif)", "↓", "↓", "↑", "↑"]
            ], not: "Ezber yerine çiz; ama kontrol için: AD'de P ile Y aynı yönde, SRAS'ta zıt yönde." }
        ]
      },
      {
        baslik: "Haberi şoka çevirmek: üç adım ve çift şok",
        kisa: "Önce şokun hangi eğriyi kaydırdığını bul, sonra dört sonucu oku.",
        bloklar: [
          { tip: "adimlar", baslik: "Her haber için aynı yöntem", adimlar: [
              { baslik: "1 · Kimi etkiliyor?", metin: "Harcama kalemini (C, I, G, Xn) etkiliyorsa AD; üretim maliyetini etkiliyorsa SRAS." },
              { baslik: "2 · Hangi yön?", metin: "Harcama artarsa AD sağa, azalırsa sola. Maliyet artarsa SRAS sola, azalırsa sağa." },
              { baslik: "3 · Sonucu oku", metin: "Yeni dengede Y, istihdam (işsizlik) ve P'ye bak. Gerekirse LRAS'la karşılaştırıp açığı söyle." }
            ] },
          { tip: "ornek", baslik: "İki şok birden: turizm ve doğalgaz",
            durum: "Aynı yıl hem turist sayısı rekor kırıyor hem de doğalgaz fiyatı sert artıyor. Kısa dönemde fiyat düzeyi ve reel çıktıya ne olur?",
            adimlar: ["Turizm (Xn↑): AD sağa. Tek başına P↑ ve Y↑.", "Doğalgaz zammı: SRAS sola. Tek başına P↑ ve Y↓.", "Fiyat düzeyi: iki şok da P'yi yukarı iter, P kesin artar.", "Reel çıktı: biri artırır, öbürü azaltır; kaymaların büyüklüğüne bağlıdır, belirsizdir."],
            sonuc: "==P kesin artar, Y belirsiz.== İki kayma aynı yöne itiyorsa o değişken kesindir; ters yöne itiyorsa belirsizdir (Ünite 1'deki çift kayma kuralı)." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Çıktıyı artıran şok pozitif, azaltan şok negatiftir; fiyat adı belirlemez.",
              "AD şokunda çıktı, istihdam ve fiyat düzeyi aynı yönde gider: AD sağa → hepsi ↑ (işsizlik ↓).",
              "SRAS şokunda çıktı ile fiyat düzeyi zıt yönde gider: SRAS sağa → Y↑ P↓; SRAS sola → Y↓ P↑.",
              "Çıktı artarsa istihdam artar, işgücü sabitken işsizlik düşer.",
              "Enflasyon talep çekmeli (AD sağa) ya da maliyet itmeli (SRAS sola) olabilir.",
              "SRAS sola kaymasında fiyat artarken çıktı düşer: stagflasyon.",
              "Önce şoku (AD mı SRAS mı, hangi yön) belirle, sonra Y, işsizlik ve P'yi oku. İki şok aynı yöne itiyorsa kesin, ters yöne itiyorsa belirsiz."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Kısa dönemde negatif bir toplam talep (AD) şoku yaşanıyor. Aşağıdakilerden hangisi doğrudur?",
        opts: ["Reel çıktı ve istihdam azalır, fiyat düzeyi düşer", "Reel çıktı ve istihdam azalır, fiyat düzeyi artar", "Reel çıktı artar, fiyat düzeyi düşer", "Reel çıktı azalır, işsizlik düşer"], a: 0,
        why: "AD sola kayınca SRAS boyunca aşağı-sola gidilir: Y↓, istihdam↓ (işsizlik↑) ve P↓. B şıkkı negatif SRAS şokunun sonucudur; D şıkkı yanlış çünkü çıktı azalınca işsizlik artar." },
      { q: "Bir ülkede doğalgaz fiyatları sert biçimde artıyor. Başka bir şey değişmiyorsa kısa dönemde aşağıdakilerden hangisi gerçekleşir?",
        opts: ["Reel çıktı artar, fiyat düzeyi düşer", "Reel çıktı azalır, fiyat düzeyi artar ve işsizlik artar", "Reel çıktı ve fiyat düzeyi artar", "Reel çıktı ve fiyat düzeyi düşer"], a: 1,
        why: "Doğalgaz bir girdidir: maliyet artışı SRAS'ı sola kaydırır. Çıktı düşer, işsizlik artar, fiyat düzeyi yükselir (maliyet itmeli enflasyon, stagflasyon). C şıkkı AD sağa kaymasının sonucudur." },
      { q: "Grafikte ekonomi E₁ noktasından E₂ noktasına geçmiştir. Bu geçişi en iyi açıklayan olay aşağıdakilerden hangisidir?",
        opts: ["Maliyetleri artıran negatif bir SRAS şoku", "Negatif bir AD şoku", "Pozitif bir SRAS şoku", "Reel çıktıyı, istihdamı ve fiyat düzeyini artıran pozitif bir AD şoku"], a: 3,
        fig: { type: "graph", xlabel: "Reel GSYİH", ylabel: "Fiyat düzeyi", xmax: 11, ymax: 10, lines: [{ from: [10, 1], to: [3, 8], label: "AD₁", dash: true }, { from: [10, 5], to: [6.5, 8.5], label: "AD₂" }, { from: [2, 1], to: [10, 9], label: "SRAS" }, { from: [6, 0], to: [6, 9], label: "LRAS" }], points: [{ q: 6, p: 5, label: "E₁", guides: true }, { q: 8, p: 7, label: "E₂", guides: true }], caption: "AD₁ kesikli, AD₂ sağda" },
        why: "AD₂, AD₁'in sağındadır ve denge E₁'den E₂'ye giderken hem reel çıktı hem fiyat düzeyi artmıştır: pozitif AD şoku (talep çekmeli enflasyon). SRAS şokunda çıktı ile fiyat zıt yönde gider; A ve C şıkları bu yüzden yanlıştır." },
      { q: "Aynı dönemde hem tüketici güveni güçleniyor (AD sağa) hem de petrol fiyatı artıyor (SRAS sola). Kısa dönem sonucu nedir?",
        opts: ["Reel çıktı ve fiyat düzeyi kesin artar", "Reel çıktı ve fiyat düzeyi kesin düşer", "Fiyat düzeyi kesin artar; reel çıktı belirsizdir", "Reel çıktı kesin artar; fiyat düzeyi belirsizdir"], a: 2,
        why: "AD sağa: P↑ ve Y↑. SRAS sola: P↑ ve Y↓. İkisi de fiyatı yukarı iter: P kesin artar. Reel çıktıyı biri artırır biri azaltır: belirsiz. D şıkkı değişkenleri ters söylüyor." },
      { q: "Bir ekonomide fiyat düzeyi artarken işsizlik oranı da artıyor. Kısa dönemde bu durumun en olası nedeni aşağıdakilerden hangisidir?",
        opts: ["AD sağa kaymıştır", "AD sola kaymıştır", "SRAS sağa kaymıştır", "SRAS sola kaymıştır"], a: 3,
        why: "Fiyat düzeyi ↑ ve işsizlik ↑ (çıktı ↓) birlikte yalnızca SRAS'ın sola kaymasıyla olur: maliyet itmeli enflasyon, yani stagflasyon. AD sağa kaysaydı fiyat artarken işsizlik düşerdi." }
    ]
  };
})();
