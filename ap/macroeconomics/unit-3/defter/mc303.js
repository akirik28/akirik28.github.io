/* Kitora not defteri · mc303 · 3.3 Kısa Dönem Toplam Arz (SRAS)
   Kaynak: College Board CED, Topic 3.3 (MOD-2.C, MOD-2.D). Blok türleri: /ap/_kit/defter.js başı.
   Grafikler AD–AS yardımcılarıyla üretilir (SRAS: P = Y + c). */
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
  var YT = [{ v: 4, label: "400" }, { v: 6, label: "500" }, { v: 8, label: "600" }];
  var PT = [{ v: 3, label: "90" }, { v: 5, label: "100" }, { v: 7, label: "110" }];

  /* Grafik 1: SRAS üzerinde hareket */
  var hareket = graf("SRAS üzerinde hareket: fiyat düzeyi değişir", [
    SR("S", -1),
    { id: "PA", tip: "nokta", renk: 0, x: 6, y: 5, etiket: "", kilavuz: true, gizli: true },
    { id: "PB", tip: "nokta", renk: 3, x: 8, y: 7, etiket: "", kilavuz: true, gizli: true },
    { id: "PC", tip: "nokta", renk: 3, x: 4, y: 3, etiket: "", kilavuz: true, gizli: true },
    TX("tA", 5.4, 5.7, "A"), TX("tB", 7.4, 7.7, "B"), TX("tC", 3.4, 3.7, "C"),
    OK("oB", 6.25, 5.25, 7.75, 6.75, 3), OK("oC", 5.75, 4.75, 4.25, 3.25, 3)
  ], [
    ["*SRAS* eğrisi: dikey eksende fiyat düzeyi, yatay eksende firmaların üretmek istediği reel çıktı var. Eğri ==yukarı== eğimlidir.", ["S"]],
    ["**A noktası:** fiyat düzeyi 100 iken firmalar toplam 500 milyar TL'lik reel çıktı üretmek ister.", ["S", "PA", "tA"]],
    ["Fiyat düzeyi 110'a **çıkarsa** eğri üzerinde ==yukarı-sağa== gidilir (B): firmalar 600 üretir. Fiyat da çıktı da artar.", ["S", "PA", "tA", "PB", "tB", "oB"]],
    ["Fiyat düzeyi 90'a **inerse** eğri üzerinde ==aşağı-sola== gidilir (C): firmalar 400 üretir. Fiyat da çıktı da azalır.", ["S", "PA", "tA", "PC", "tC", "oC"]]
  ], { x: "Reel GSYİH (milyar TL)", y: "Fiyat düzeyi (endeks)", xt: YT, yt: PT });

  /* Grafik 2: SRAS kayması (maliyet değişimi) */
  var kayma = graf("SRAS kayması: üretim maliyeti değişir", [
    SR("S0", -1, { e: "SRAS₀" }), SR("S0k", -1, { kesik: true, e: "" }), SR("S1", 1, { e: "SRAS₁", top: 8.2 }), SR("S2", -3, { e: "SRAS₂" }),
    SH("a1", 7.5, 8.5, 6.5, 3), SH("a2", 4, 5, 7, 3),
    { id: "L6", tip: "cizgi", renk: 1, kesik: true, from: [6, 0], to: [6, 10], etiket: "", gizli: true },
    { id: "p0", tip: "nokta", renk: 0, x: 6, y: 5, etiket: "", kilavuz: true, gizli: true },
    { id: "p1", tip: "nokta", renk: 3, x: 6, y: 7, etiket: "", kilavuz: true, gizli: true }
  ], [
    ["Başlangıç: *SRAS₀*. Aşağıdaki her durumda **fiyat düzeyi dışında** bir üretim maliyeti değişiyor.", ["S0"]],
    ["Doğalgaz ve ücretler pahalandı: maliyet ==arttı==. Her fiyat düzeyinde daha az üretilir; *SRAS* ==sola== kayar (SRAS₁).", ["S0k", "S1", "a1"]],
    ["Yeni teknoloji verimliliği artırdı: maliyet ==azaldı==. Her fiyat düzeyinde daha çok üretilir; *SRAS* ==sağa== kayar (SRAS₂).", ["S0k", "S2", "a2"]],
    ["**Dikey oku:** aynı çıktıyı (Y₀) üretmek için firmalar artık daha yüksek bir fiyat ister: sola kayma, ==yukarı kayma== gibi görünür.", ["S0", "S1", "L6", "p0", "p1"]]
  ], { xt: [{ v: 6, label: "Y₀" }], yt: [] });

  /* Grafik 3: SRAS boyunca enflasyon–işsizlik ödünleşimi */
  var odun = graf("SRAS boyunca: fiyat düzeyi ve işsizlik", [
    SR("S", -1),
    { id: "PA", tip: "nokta", renk: 3, x: 4, y: 3, etiket: "", kilavuz: true, gizli: true },
    { id: "PB", tip: "nokta", renk: 3, x: 8, y: 7, etiket: "", kilavuz: true, gizli: true },
    TX("tA", 3.4, 3.7, "A"), TX("tB", 7.4, 7.7, "B"),
    OK("ok", 4.3, 3.3, 7.7, 6.7, 0),
    TX("ta", 6, 2.2, "işsizlik yüksek"), TX("tb", 6, 8.9, "işsizlik düşük")
  ], [
    ["Talep kayarak ekonomiyi *SRAS* boyunca gezdirir. **A:** fiyat düzeyi düşük, çıktı düşük.", ["S", "PA", "tA"]],
    ["A'da çıktı düşük olduğu için az işçi çalışıyor: ==işsizlik yüksek==.", ["S", "PA", "tA", "ta"]],
    ["**B:** fiyat düzeyi yüksek, çıktı yüksek. Çok işçi çalışıyor, ==işsizlik düşük==. A'dan B'ye: fiyat ↑, çıktı ↑, işsizlik ↓.", ["S", "PA", "tA", "PB", "tB", "ok", "ta", "tb"]]
  ], { x: "Reel GSYİH (Y)", y: "Fiyat düzeyi (P)", xt: [], yt: [] });

  return {
    slug: "mc303",
    amac: "Bu konu kısa dönem toplam arzı (*SRAS*) anlatıyor: firmaların her fiyat düzeyinde ne kadar üretmek istediğini. Eğrinin neden yukarı eğimli olduğunu, neyin onu kaydırdığını ve eğri boyunca enflasyonla işsizliğin nasıl ters yönde gittiğini öğreneceksin.",
    bolumler: [
      {
        baslik: "SRAS nedir? Fiyat düzeyi ile üretim aynı yönde",
        kisa: "SRAS, kısa dönemde fiyat düzeyi arttıkça firmaların daha çok üretmek istediğini gösterir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🏭", terim: "Short-run aggregate supply (SRAS)", tr: "kısa dönem toplam arz", tanim: "Kısa dönemde her fiyat düzeyinde ekonominin arz etmek istediği toplam reel çıktı.", ornek: "Fiyatlar %10 artınca fırınlar, atölyeler ve mağazalar daha çok üretir." },
              { ikon: "⏱️", terim: "Short run", tr: "kısa dönem", tanim: "Bazı girdi fiyatlarının, özellikle nominal ücretlerin, sabit kaldığı dönem.", ornek: "Fırın işçisinin yıllık maaş sözleşmesi hâlâ geçerli." }
            ] },
          hareket
        ]
      },
      {
        baslik: "Neden yukarı eğimli? Yapışkan ücret ve fiyatlar",
        kisa: "Kısa dönemde ücretler ve bazı fiyatlar yapışkandır; fiyat artınca kâr, üretim artar.",
        bloklar: [
          { tip: "adimlar", baslik: "Simitçi Kemal örneği", adimlar: [
              { baslik: "1 · Fiyatlar artar", metin: "Ekonomide genel fiyat düzeyi yükselir: simit 10 liradan 11 liraya çıkar." },
              { baslik: "2 · Maliyetler yerinde sayar", metin: "İşçilerin nominal ücreti yıllık sözleşmeyle sabittir: günlük 500 TL aynı kalır. Kemal'in maliyeti artmadı ama satış fiyatı arttı." },
              { baslik: "3 · Kâr artar, üretim artar", metin: "Kemal daha çok işçi alıp daha çok simit yapar. Her firma aynısını yapınca toplam reel çıktı artar." }
            ] },
          { tip: "kavramlar", kartlar: [
              { ikon: "📄", terim: "Sticky wages", tr: "yapışkan ücretler", tanim: "Nominal ücretlerin sözleşmeler ve alışkanlıklar yüzünden kısa dönemde fiyatlara hemen uyum sağlamaması.", ornek: "Yıllık sözleşmeli işçi maaşı yıl ortasında değişmez." },
              { ikon: "🏷️", terim: "Sticky prices", tr: "yapışkan fiyatlar", tanim: "Bazı fiyatların (menü basma maliyeti, sözleşme) kısa dönemde hemen değiştirilememesi.", ornek: "Kantinin basılı menüsü ay sonuna kadar aynı." }
            ] }
        ]
      },
      {
        baslik: "SRAS'ı kaydıran etkenler: üretim maliyeti",
        kisa: "Üretim maliyetini değiştiren her şey SRAS'ı kaydırır: maliyet artarsa sola.",
        bloklar: [
          kayma,
          { tip: "tablo", baslik: "Maliyet etkenleri (*SRAS shifters*)", head: ["Etken", "SRAS sola (maliyet ↑)", "SRAS sağa (maliyet ↓)"], rows: [
              ["Girdi fiyatları (enerji, ham madde)", "Girdi fiyatı artar", "Girdi fiyatı düşer"],
              ["Nominal ücretler", "Ücretler artar", "Ücretler düşer"],
              ["Verimlilik ve teknoloji", "Verimlilik düşer", "Teknoloji ve verimlilik artar"],
              ["Üretim vergileri ve sübvansiyonlar", "Vergi artar, sübvansiyon azalır", "Vergi azalır, sübvansiyon artar"],
              ["Düzenlemeler", "Maliyeti artıran yeni düzenleme", "Düzenlemenin kaldırılması"],
              ["Enflasyon beklentisi", "Beklenen enflasyon artar", "Beklenen enflasyon düşer"]
            ], not: "Hepsi tek soruya iner: üretmek şimdi daha pahalı mı, daha ucuz mu?" },
          { tip: "kavramlar", kartlar: [
              { ikon: "🔮", terim: "Inflationary expectations", tr: "enflasyon beklentisi", tanim: "Yüksek enflasyon beklenirse işçiler daha çok ücret, tedarikçiler daha yüksek fiyat ister: maliyet artar ve SRAS sola kayar.", ornek: "\"Gelecek yıl her şey zamlanacak\" diyen işçiler ücret pazarlığında daha çok ister." }
            ] }
        ]
      },
      {
        baslik: "Hareket mi, kayma mı?",
        kisa: "Fiyat düzeyi değişirse SRAS üzerinde hareket edilir; maliyet değişirse SRAS kayar.",
        bloklar: [
          { tip: "ikili", sol: { ikon: "↕️", baslik: "SRAS üzerinde hareket", maddeler: ["Neden: fiyat düzeyi değişti (genelde AD kaydı)", "SRAS aynı kalır", "Fiyat ve çıktı aynı yöne gider"] },
            sag: { ikon: "↔️", baslik: "SRAS kayar", maddeler: ["Neden: üretim maliyeti değişti", "Ücret, girdi fiyatı, teknoloji, vergi, beklenti", "Fiyat ve çıktı zıt yöne gider"] },
            oyun: [
              { metin: "Toplam talep arttı; fiyat düzeyi ve reel çıktı yükseldi.", cevap: "sol", neden: "Fiyat düzeyi değişti: SRAS boyunca hareket." },
              { metin: "Petrol fiyatı sert arttı.", cevap: "sag", neden: "Girdi maliyeti arttı: SRAS sola kayar." },
              { metin: "Sendika ücretleri zamlattı.", cevap: "sag", neden: "Ücretler maliyettir: SRAS sola kayar." },
              { metin: "Fiyat düzeyi %3 düştü, reel çıktı da düştü.", cevap: "sol", neden: "Hareket: fiyat ve çıktı aynı yönde azaldı." },
              { metin: "Enflasyon beklentileri düştü.", cevap: "sag", neden: "Maliyet baskısı azalır: SRAS sağa kayar." }
            ] },
          { tip: "tuzak", baslik: "Fiyat artışı SRAS'ı kaydırmaz", metin: "Fiyat düzeyi bu grafiğin eksenidir.", yanlis: "Fiyat düzeyi arttı, o halde SRAS sağa kaydı.", dogru: "Fiyat düzeyi arttığında yalnızca ==SRAS boyunca hareket== olur. Eğriyi kaydıran şey fiyat dışı bir maliyet etkenidir; AD'nin kayması da SRAS'ı kaydırmaz." }
        ]
      },
      {
        baslik: "SRAS boyunca: enflasyon ve işsizlik ödünleşimi",
        kisa: "SRAS boyunca fiyat artarken işsizlik düşer: kısa dönemde ödünleşim vardır.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "P ↑", alt: "fiyat düzeyi" }, "→", { t: "Y ↑", alt: "reel çıktı" }, "→", { t: "İstihdam ↑", alt: "daha çok işçi" }, "→", { t: "İşsizlik ↓", alt: "işgücü sabit" }
            ], aciklama: "Daha çok çıktı için daha çok işçi gerekir. İşgücü sabitken çalışan arttıkça işsizlik düşer: bu, enflasyon ile işsizlik arasındaki ==kısa dönem ödünleşimidir== (*short-run trade-off*)." },
          odun,
          { tip: "tuzak", baslik: "Ödünleşim her enflasyonda geçerli değil", metin: "Bu ilişki yalnızca fiyat artışı çıktıyı artırıyorsa, yani SRAS boyunca hareket varsa geçerlidir.", yanlis: "Fiyatlar artıyorsa işsizlik mutlaka düşüyordur.", dogru: "Maliyet artışı SRAS'ı sola kaydırırsa fiyat ==artar, çıktı düşer, işsizlik de artar==. Ödünleşim SRAS boyunca hareket için geçerlidir." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "*SRAS* fiyat düzeyi ile arz edilen toplam reel çıktıyı ilişkilendirir; kısa dönemde yukarı eğimlidir.",
              "Kısa dönemde bazı girdi fiyatları, özellikle nominal ücretler, sabittir.",
              "Eğim *sticky wages* ve *sticky prices* yüzünden pozitiftir: fiyat artarken maliyet sabit kalınca kâr ve üretim artar.",
              "Fiyat düzeyi değişirse SRAS boyunca hareket edilir; eğri kaymaz.",
              "Üretim maliyetini değiştiren her şey (girdi fiyatı, ücret, teknoloji, vergi, düzenleme, enflasyon beklentisi) SRAS'ı kaydırır. Maliyet artarsa sola, azalırsa sağa.",
              "AD'nin kayması SRAS'ı kaydırmaz; SRAS boyunca harekete yol açar.",
              "SRAS boyunca fiyat düzeyi ↑ ise çıktı ↑, istihdam ↑ ve işsizlik ↓: kısa dönem ödünleşimi."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Kısa dönemde toplam arz eğrisinin (*SRAS*) yukarı eğimli olmasının temel nedeni aşağıdakilerden hangisidir?",
        opts: ["Bütün ücretler ve fiyatlar fiyat düzeyine anında ve tam uyum sağlar", "Üretim maliyetleri fiyat düzeyiyle aynı oranda artar", "Fiyat düzeyi artarken nominal ücretler ve bazı fiyatlar sabit kalır, firmaların kârı ve üretimi artar", "Tüketiciler pahalı malı bırakıp ucuz mala geçer"], a: 2,
        why: "Kısa dönemde nominal ücretler ve bazı fiyatlar yapışkandır: fiyat düzeyi artınca maliyet aynı hızla artmaz, kâr marjı genişler ve firmalar daha çok üretir. A şıkkı uzun dönemi (dikey LRAS) anlatır; B şıkkı doğru olsaydı kâr artmaz ve üretim değişmezdi." },
      { q: "Aşağıdakilerden hangisi *SRAS* eğrisini sağa kaydırır?",
        opts: ["Genel fiyat düzeyinin artması", "Petrol ve doğalgaz fiyatlarındaki düşüş", "Enflasyon beklentilerinin artması", "Toplam talepteki artış"], a: 1,
        why: "Enerji fiyatının düşmesi üretim maliyetini azaltır; her fiyat düzeyinde daha çok üretilir ve SRAS sağa kayar. A ve D SRAS boyunca harekete yol açar; C maliyeti artırır, SRAS'ı sola kaydırır." },
      { q: "Toplam talep artıyor ve ekonomi *SRAS* üzerinde yukarı doğru hareket ediyor. İşgücü sabitse aşağıdakilerden hangisi doğrudur?",
        opts: ["Fiyat düzeyi artar, reel çıktı artar, işsizlik düşer", "Fiyat düzeyi artar, reel çıktı düşer, işsizlik artar", "Fiyat düzeyi düşer, reel çıktı artar, işsizlik düşer", "Fiyat düzeyi artar, reel çıktı artar, işsizlik artar"], a: 0,
        why: "SRAS boyunca yukarı hareket: fiyat düzeyi ↑ ve reel çıktı ↑. Çıktı artınca istihdam artar ve işgücü sabit olduğu için işsizlik düşer: kısa dönem ödünleşimi. B şıkkı SRAS'ın sola kaymasının sonucunu anlatır." },
      { q: "Grafikte *SRAS₁* eğrisi *SRAS₂*'ye kaymıştır. Aşağıdakilerden hangisi bu kaymaya yol açabilir?",
        opts: ["Elektrik fiyatlarının artması", "Nominal ücretlerin artması", "Teknolojik gelişmeyle verimliliğin artması", "Genel fiyat düzeyinin düşmesi"], a: 2,
        fig: { type: "graph", xlabel: "Reel GSYİH", ylabel: "Fiyat düzeyi", xmax: 10, ymax: 10, lines: [{ from: [2, 1], to: [8, 7], label: "SRAS₁" }, { from: [4, 1], to: [10, 7], label: "SRAS₂" }], caption: "SRAS₂, her fiyat düzeyinde SRAS₁'in sağında" },
        why: "SRAS₂, her fiyat düzeyinde SRAS₁'in sağındadır: üretim maliyeti azalmıştır. Verimliliği artıran teknoloji maliyeti düşürür. A ve B maliyeti artırır (sola kayma); D yalnızca eğri üzerinde harekete yol açar." },
      { q: "Bir ülkede doğalgaz fiyatı sert biçimde yükseliyor; başka bir şey değişmiyor. *SRAS* eğrisine ne olur?",
        opts: ["SRAS sağa kayar", "SRAS üzerinde aşağı doğru hareket edilir", "SRAS değişmez, yalnızca AD sola kayar", "SRAS sola kayar: her fiyat düzeyinde üretim azalır"], a: 3,
        why: "Doğalgaz bir girdidir; fiyatı artınca üretim maliyeti artar ve firmalar her fiyat düzeyinde daha az üretir: SRAS sola kayar. B şıkkı cazip ama yanlış: aşağı hareket fiyat düzeyi düştüğünde olur, maliyet şoku eğriyi kaydırır." }
    ]
  };
})();
