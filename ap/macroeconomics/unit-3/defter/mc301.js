/* Kitpath not defteri · mc301 · 3.1 Toplam Talep (AD)
   Kaynak: College Board CED, Topic 3.1 (MOD-2.A). Blok türleri: /ap/_kit/defter.js başı.
   Grafikler AD–AS yardımcılarıyla üretilir (AD: P = a − Y), yön ve kayma miktarı hesapla kurulur. */
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

  /* Grafik 1: AD üzerinde hareket (fiyat düzeyi değişir, eğri kalır) */
  var hareket = graf("AD üzerinde hareket: yalnızca fiyat düzeyi değişir", [
    AD("AD", 11, { e: "AD" }),
    { id: "PA", tip: "nokta", renk: 0, x: 6, y: 5, etiket: "A", kilavuz: true, gizli: true },
    { id: "PB", tip: "nokta", renk: 3, x: 4, y: 7, etiket: "B (P↑ Y↓)", kilavuz: true, gizli: true },
    { id: "PC", tip: "nokta", renk: 3, x: 8, y: 3, etiket: "C (P↓ Y↑)", kilavuz: true, gizli: true },
    OK("oB", 5.7, 5.3, 4.3, 6.7, 3), OK("oC", 6.3, 4.7, 7.7, 3.3, 3)
  ], [
    ["*AD* eğrisi: dikey eksende ==fiyat düzeyi==, yatay eksende ==reel GSYİH== var. Eğri soldan sağa aşağı iner.", ["AD"]],
    ["**A noktası:** fiyat düzeyi 100 iken ekonomide talep edilen toplam reel çıktı 500 milyar TL.", ["AD", "PA"]],
    ["Fiyat düzeyi 110'a **çıkarsa** ekonomi eğri üzerinde ==yukarı-sola== gider (B): talep edilen reel çıktı 400'e düşer.", ["AD", "PA", "PB", "oB"]],
    ["Fiyat düzeyi 90'a **inerse** eğri üzerinde ==aşağı-sağa== gidilir (C): talep edilen reel çıktı 600'e çıkar.", ["AD", "PA", "PC", "oC"]],
    ["A, B ve C ==aynı eğri== üzerinde: *AD* kaymadı. Fiyat düzeyi dışındaki bir etken değişseydi eğrinin kendisi kayardı.", ["AD", "PA", "PB", "PC"]]
  ], { x: "Reel GSYİH (milyar TL)", y: "Fiyat düzeyi (endeks)", xt: YT, yt: PT });

  /* Grafik 2: AD kayması (C, I, G, Xn) */
  var kayma = graf("AD kayması: fiyat dışı bir etken değişir", [
    AD("A0", 11, { e: "AD₀" }), AD("A0k", 11, { kesik: true, e: "" }),
    AD("A1", 14, { renk: 3, e: "AD₁" }), AD("A2", 8, { renk: 3, e: "AD₂" }),
    SH("s1", 7.5, 3.5, 6.5, 3), SH("s2", 6, 5, 2, 3),
    { id: "L5", tip: "cizgi", renk: 1, kesik: true, from: [0, 5], to: [10, 5], etiket: "", gizli: true },
    { id: "pa", tip: "nokta", renk: 0, x: 6, y: 5, etiket: "Y₀", kilavuz: true, gizli: true },
    { id: "pb", tip: "nokta", renk: 3, x: 9, y: 5, etiket: "Y₁", kilavuz: true, gizli: true }
  ], [
    ["Başlangıç: *AD₀*. Aşağıdaki her durumda fiyat düzeyi dışında bir şey değişiyor.", ["A0"]],
    ["Tüketici güveni arttı, yani ==C↑==. Her fiyat düzeyinde daha çok harcanır: *AD* ==sağa== kayar (AD₁). Eski eğri kesikli kalır.", ["A0k", "A1", "s1"]],
    ["Devlet harcamayı kıstı, yani ==G↓==. Her fiyat düzeyinde talep azalır: *AD* ==sola== kayar (AD₂).", ["A0k", "A2", "s2"]],
    ["**Yatay oku:** aynı fiyat düzeyinde (kesikli çizgi) AD₁ daha büyük bir reel çıktı gösterir: Y₁ > Y₀. Sağa kayma = artış.", ["A0", "A1", "L5", "pa", "pb"]]
  ], { x: "Reel GSYİH (Y)", y: "Fiyat düzeyi (P)", xt: [], yt: [{ v: 5, label: "P" }] });

  return {
    slug: "mc301",
    amac: "Bu konu *aggregate demand* (AD) eğrisini anlatıyor: ekonominin her fiyat düzeyinde almak istediği toplam reel çıktıyı. Eğrinin hangi dört harcamadan oluştuğunu, neden aşağı eğimli olduğunu ve neyin onu kaydırdığını öğreneceksin.",
    bolumler: [
      {
        baslik: "AD nedir? Dört harcama kalemi",
        kisa: "AD, her fiyat düzeyinde dört kesimin harcamak istediği toplam reel çıktıdır.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "*AD*", alt: "talep edilen toplam reel çıktı" }, "=",
              { t: "C", alt: "hane halkı tüketimi" }, "+",
              { t: "I", alt: "firma yatırımı" }, "+",
              { t: "G", alt: "devlet harcaması" }, "+",
              { t: "Xn", alt: "net ihracat = X − M" }
            ], aciklama: "*AD* eğrisi, bu dört kalemin toplamını fiyat düzeyine göre çizer. Yatay eksen reel GSYİH (Y), dikey eksen fiyat düzeyi (P)." },
          { tip: "kavramlar", kartlar: [
              { ikon: "🛍️", terim: "Consumption (C)", tr: "tüketim", tanim: "Hane halklarının mal ve hizmet harcaması.", ornek: "Telefon taksidi, konser bileti, kantin tostu." },
              { ikon: "🏭", terim: "Investment (I)", tr: "yatırım", tanim: "Firmaların yeni makine, bina ve stok harcaması. Hisse senedi almak yatırım sayılmaz.", ornek: "Fırının yeni hamur makinesi." },
              { ikon: "🏛️", terim: "Government spending (G)", tr: "devlet harcaması", tanim: "Devletin mal ve hizmet alımı. Emekli maaşı gibi transfer ödemeleri G'ye girmez.", ornek: "Yeni okul binası, öğretmen maaşları." },
              { ikon: "🌍", terim: "Net exports (Xn)", tr: "net ihracat", tanim: "İhracat eksi ithalat (X − M): yabancıların bizim mallarımıza harcaması eksi bizim yabancı mallara harcamamız.", ornek: "Antalya'daki turistin harcaması ihracattır." }
            ] }
        ]
      },
      {
        baslik: "Fiyat düzeyi değişince AD üzerinde hareket",
        kisa: "Fiyat düzeyi artarsa talep edilen reel çıktı azalır; nokta eğri boyunca kayar.",
        bloklar: [
          hareket,
          { tip: "not", metin: "Dikey eksen tek bir malın fiyatı değil, ==genel fiyat düzeyidir== (GSYİH deflatörü ya da TÜFE gibi bir endeks). Yatay eksen **reel** GSYİH'dir: fiyat artışından arındırılmış çıktı." }
        ]
      },
      {
        baslik: "Neden aşağı eğimli? Üç etki",
        kisa: "Fiyat düzeyi artınca servet, yatırım ve net ihracat azalır; bu yüzden eğim negatiftir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "💰", terim: "Real wealth effect", tr: "reel servet etkisi", tanim: "Fiyatlar artınca eldeki paranın ve birikimin satın alma gücü düşer; insanlar daha az harcar (C↓).", ornek: "Kumbaradaki 1.000 TL artık daha az simit alıyor." },
              { ikon: "🏦", terim: "Interest rate effect", tr: "faiz oranı etkisi", tanim: "Fiyatlar artınca işlemler için daha çok paraya ihtiyaç olur; para talebi artar, faiz yükselir, yatırım ve taksitli harcama azalır (I↓).", ornek: "Faiz yükselince fırıncı kredi çekip yeni makine almaktan vazgeçer." },
              { ikon: "💱", terim: "Exchange rate effect", tr: "döviz kuru etkisi", tanim: "Yurt içi fiyatlar yabancı fiyatlara göre artınca yerli mallar yabancıya pahalı gelir; ihracat azalır, ithalat artar (Xn↓).", ornek: "Türk malları pahalanınca turist ve alıcı başka ülkeye yönelir." }
            ] },
          { tip: "tuzak", baslik: "Tek bir malın talebi gibi açıklama", metin: "AD eğrisi tek bir piyasanın talep eğrisi gibi aşağı eğimli çizilir ama nedeni aynı değildir.", yanlis: "Fiyat artınca insanlar ucuz ikame mala geçer, o yüzden AD aşağı eğimlidir.", dogru: "AD'de bir malın değil ==genel fiyat düzeyinin== değişimi var. Eğimi üç etki açıklar: *real wealth*, *interest rate* ve *exchange rate* etkileri." }
        ]
      },
      {
        baslik: "AD'yi kaydıran etkenler: hareket mi, kayma mı?",
        kisa: "Fiyat düzeyi dışında C, I, G ya da Xn'i değiştiren her şey AD'yi kaydırır.",
        bloklar: [
          { tip: "ikili", sol: { ikon: "↕️", baslik: "AD üzerinde hareket", maddeler: ["Neden: ==yalnızca fiyat düzeyi==", "AD aynı kalır, nokta eğri boyunca gider", "Servet, faiz ve döviz kuru etkileri burada işler"] },
            sag: { ikon: "↔️", baslik: "AD kayar", maddeler: ["Neden: fiyat düzeyi dışında bir etken", "C, I, G ya da Xn değişmiştir", "Sağa kayma artış, sola kayma azalış"] },
            oyun: [
              { metin: "Ortalama fiyat düzeyi %10 arttı.", cevap: "sol", neden: "Neden fiyat düzeyi: eğri üzerinde hareket." },
              { metin: "Hükümet yeni hastane yapmaya başladı.", cevap: "sag", neden: "G arttı: AD sağa kayar." },
              { metin: "Tüketici güveni düştü, herkes harcamayı kısıyor.", cevap: "sag", neden: "C azaldı: AD sola kayar." },
              { metin: "Fiyat düzeyi düştü, talep edilen reel çıktı arttı.", cevap: "sol", neden: "Hareket: fiyat düzeyi değişti, eğri aynı." },
              { metin: "Yabancı ülkelerde gelirler arttı, Türk mallarına talep arttı.", cevap: "sag", neden: "X arttı, Xn arttı: AD sağa kayar." }
            ] },
          { tip: "tablo", baslik: "Fiyat dışı etkenler (*AD shifters*)", head: ["Kalem", "AD sağa kayar (artış)", "AD sola kayar (azalış)"], rows: [
              ["Tüketim (C)", "Tüketici güveni ↑, servet ↑, vergiler ↓, borç yükü ↓", "Güven ↓, servet ↓, vergiler ↑, borç yükü ↑"],
              ["Yatırım (I)", "Faiz ↓, beklenen kâr ↑, işletme vergisi ↓, teknoloji ↑", "Faiz ↑, beklenen kâr ↓, işletme vergisi ↑"],
              ["Devlet harcaması (G)", "Devlet mal ve hizmet alımı ↑", "Devlet mal ve hizmet alımı ↓"],
              ["Net ihracat (Xn)", "Yabancı gelirler ↑, TL değer kaybeder (ihracat ucuzlar, ithalat pahalanır)", "Yabancı gelirler ↓, TL değer kazanır"]
            ], not: "Her etken yalnızca dört kalemden birini değiştirir; kalemi bulunca yön de belli olur." },
          { tip: "tuzak", baslik: "Faiz: hareket mi, kayma mı?", metin: "Faiz oranı iki ayrı yoldan karşına çıkar.", yanlis: "Faiz değişirse AD her zaman kayar.", dogru: "Fiyat düzeyi arttı → faiz arttı: bu ==*interest rate effect*==, AD üzerinde hareket. Merkez Bankası faizi kendi kararıyla indirirse neden fiyat düzeyi olmaz: yatırım artar, AD ==kayar==." }
        ]
      },
      {
        baslik: "Grafikte AD kayması: yön ve etiket",
        kisa: "AD sağa kayınca her fiyat düzeyinde reel çıktı artar; eski eğri kesikli kalır.",
        bloklar: [
          kayma,
          { tip: "tuzak", baslik: "AD yukarı mı, sağa mı kaydı?", metin: "Sınavda AD'nin kaymasını yatay okursun.", yanlis: "AD yukarı kaydı, o halde fiyat düzeyi arttı.", dogru: "AD ==sağa== kayınca her fiyat düzeyinde reel çıktı artar. Fiyat düzeyi eksendedir; eğriyi kaydıran bir etken değil, hareketin nedenidir." }
        ]
      },
      {
        baslik: "Örnek: haber hangi kalemi etkiliyor?",
        kisa: "Önce haberin hangi harcama kalemini değiştirdiğini bul, sonra yönü söyle.",
        bloklar: [
          { tip: "ornek", baslik: "Turist rekoru ve faiz indirimi",
            durum: "Haber: Antalya'da turist sayısı rekor kırdı. Aynı hafta Merkez Bankası politika faizini indirdi. *AD* eğrisine ne olur?",
            adimlar: [
              "Turistler otel, yemek ve hediyelik eşya alıyor: bu ihracat (X) artışı, yani Xn↑.",
              "Faiz indirimi kredileri ucuzlatır: firmalar yatırım yapar (I↑), hane halkı taksitle alım yapar (C↑).",
              "Hiçbiri fiyat düzeyinden kaynaklanmıyor: bunlar fiyat dışı etkenler, eğri üzerinde hareket değil.",
              "Üç kalem de aynı yöne itiyor: AD sağa."
            ],
            sonuc: "*AD* ==sağa kayar==: her fiyat düzeyinde talep edilen reel çıktı artar. Eski AD kesikli, yeni AD₁ olarak çizilir." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "*AD* eğrisi fiyat düzeyi ile talep edilen toplam reel çıktıyı ilişkilendirir; AD = C + I + G + Xn.",
              "Eğim negatiftir: *real wealth effect* (C↓), *interest rate effect* (I↓), *exchange rate effect* (Xn↓).",
              "Bu üç etki tek bir malın ikame mantığı değildir; genel fiyat düzeyi içindir.",
              "Fiyat düzeyi değişirse AD üzerinde hareket edilir; eğri kaymaz.",
              "Fiyat düzeyi dışında C, I, G ya da Xn'i değiştiren her şey AD'yi kaydırır: sağa artış, sola azalış.",
              "Merkez Bankasının kendi kararıyla yaptığı faiz değişimi fiyat dışı bir etkendir; AD'yi kaydırır.",
              "AD'nin kaymasını yatay oku: aynı fiyat düzeyinde reel çıktı artmışsa sağa kayma vardır."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Aşağıdakilerden hangisi toplam talep (*AD*) eğrisi ÜZERİNDE bir harekete yol açar, yani eğrinin kendisini kaydırmaz?",
        opts: ["Tüketici güveninin artması", "Genel fiyat düzeyinin yükselmesi", "Devlet harcamalarının artması", "Yabancı ülkelerde gelirlerin artması"], a: 1,
        why: "AD eğrisinin eksenindeki değişken fiyat düzeyidir; fiyat düzeyi değişirse yalnızca eğri boyunca gidilir. A, C ve D sırasıyla C, G ve Xn'i değiştirir: bunlar fiyat dışı etkenlerdir ve AD'yi kaydırır. En çekici yanlış şık C'dir; devlet harcaması bir AD bileşenidir, eğriyi sağa kaydırır." },
      { q: "Merkez Bankası politika faizini indiriyor ve firmalar yeni makine yatırımlarını artırıyor. Başka bir şey değişmediğine göre *AD* eğrisine ne olur?",
        opts: ["AD sola kayar", "AD üzerinde yukarı-sola hareket edilir", "AD sağa kayar", "AD değişmez, yalnızca SRAS kayar"], a: 2,
        why: "Faiz indirimi Merkez Bankasının kararıdır, fiyat düzeyinden kaynaklanmaz: fiyat dışı bir etkendir. Yatırım (I) artar, bu yüzden AD sağa kayar. B şıkkı cazip ama yanlış: yukarı-sola hareket fiyat düzeyi arttığında olur." },
      { q: "Fiyat düzeyi arttığında firmaların ve hane halklarının kredili harcamalarının azalmasını, para talebinin artmasıyla faizin yükselmesine bağlayan açıklama aşağıdakilerden hangisidir?",
        opts: ["Faiz oranı etkisi (*interest rate effect*)", "Reel servet etkisi (*real wealth effect*)", "Döviz kuru etkisi (*exchange rate effect*)", "İkame etkisi (*substitution effect*)"], a: 0,
        why: "Fiyat düzeyi artınca işlemler için daha çok para gerekir, para talebi artar, faiz yükselir ve yatırım azalır: faiz oranı etkisi. B şıkkı birikimlerin satın alma gücünün düşmesini, C şıkkı ihracat ve ithalatın değişmesini anlatır. İkame etkisi AD eğiminin açıklaması değildir." },
      { q: "Grafikte *AD₁* eğrisi *AD₂*'ye kaymıştır. Aşağıdakilerden hangisi bu kaymayı açıklayabilir?",
        opts: ["Genel fiyat düzeyinin artması", "Devletin mal ve hizmet alımlarını azaltması", "Yabancı ülkelerde gelirlerin artması", "Tüketici güveninin artması"], a: 1,
        fig: { type: "graph", xlabel: "Reel GSYİH", ylabel: "Fiyat düzeyi", xmax: 10, ymax: 10, lines: [{ from: [8, 2], to: [2, 8], label: "AD₁" }, { from: [6, 2], to: [1, 7], label: "AD₂" }], caption: "AD₂, her fiyat düzeyinde AD₁'in solunda" },
        why: "AD₂, her fiyat düzeyinde AD₁'in solundadır: AD sola kaymıştır, yani toplam harcama azalmıştır. Devlet harcamasının azalması G'yi düşürür ve AD'yi sola kaydırır. A şıkkı eğri üzerinde harekete yol açar; C ve D AD'yi sağa kaydırırdı." },
      { q: "TL, dolar karşısında değer kaybediyor; başka bir şey değişmiyor. Bu durumda *AD* eğrisine ne olur ve neden?",
        opts: ["AD sola kayar; ithalat ucuzlar ve yerli üretim azalır", "AD sola kayar; ihracat ucuzlar ve ithalat artar", "AD sağa kayar; ithal mallar ucuzlar ve ithalat artar", "AD sağa kayar; Türk malları yabancılara ucuzlar, ihracat artar ve ithalat azalır"], a: 3,
        why: "TL değer kaybedince Türk malları yabancılara ucuzlar, ithal mallar Türkler için pahalanır: ihracat artar, ithalat azalır, Xn yükselir ve AD sağa kayar. C şıkkı AD'nin yönünü doğru söylüyor ama nedeni yanlış: değer kaybında ithal mallar ucuzlamaz, pahalanır." }
    ]
  };
})();
