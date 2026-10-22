/* Kitora not defteri · mc309 · 3.9 Otomatik Stabilizatörler
   Kaynak: College Board CED, Topic 3.9 (POL-1.C). Blok türleri: /ap/_kit/defter.js başı.
   Not: yazıda tam istihdam çıktısı "Y∗" (U+2217) ile yazılır; "*" metin işaretiyle karışmasın diye.
   Konjonktür dalgası: y = 5 + A·sin(2πx/8); stabilizatörsüz A = 3, stabilizatörlü A = 1,5. */
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
  function dalga(A) { var p = [], x; for (x = 0; x <= 10; x++) p.push([x, Math.round((5 + A * Math.sin(2 * Math.PI * x / 8)) * 100) / 100]); return p; }

  /* Grafik 1: konjonktür dalgası (zaman – reel GSYİH) */
  var konj = {
    tip: "grafik", baslik: "Konjonktür dalgası: stabilizatörler dalgayı küçültür", xlabel: "Zaman", ylabel: "Reel GSYİH", xmax: 11, ymax: 10, xticks: [], yticks: [{ v: 5, label: "Y*" }],
    ogeler: [
      { id: "T", tip: "cizgi", renk: 1, kesik: true, from: [0, 5], to: [10.3, 5], etiket: "", gizli: false },
      { id: "Wk", tip: "egri", renk: 2, kesik: true, noktalar: dalga(3), etiket: "", gizli: true },
      { id: "W", tip: "egri", renk: 0, noktalar: dalga(3), etiket: "GSYİH", gizli: true },
      TX("tb", 2, 9, "genişleme"), TX("tr", 6, 0.9, "durgunluk")
    ],
    durumlar: [
      { metin: "Ekonomi tam istihdam çıktısının (Y∗, kesikli çizgi) çevresinde zamanla inip çıkar. Bu iniş çıkışlara ==konjonktür dalgası== denir.", goster: ["T"] },
      { metin: "Önlem alınmazsa dalga büyüktür: ==genişlemede== ekonomi aşırı ısınır, ==durgunlukta== çıktı ve istihdam çok düşer.", goster: ["T", "W", "tb", "tr"] },
      { metin: "*Automatic stabilizers* devredeyken dalga ==küçülür==: eski dalga kesikli, yenisi daha sığ. Ekonomi Y∗'a daha yakın kalır.", set: { W: { noktalar: dalga(1.5) } }, goster: ["T", "W", "Wk", "tb", "tr"] }
    ]
  };

  /* Grafik 2: AD–AS (resesyon ve genişleme; stabilizatörsüz varsayım kesikli yeşil) */
  var adas = graf("AD–AS: stabilizatörler AD'nin kaymasını yumuşatır", [
    AD("A0k", 11, { kesik: true, e: "" }), AD("A0", 11, { e: "AD₀" }),
    AD("Hr", 8, { kesik: true, renk: 1, e: "AD′" }), AD("A1", 9, { renk: 3, e: "AD₁", u: 7 }),
    AD("Hb", 14, { kesik: true, renk: 1, e: "AD′", u: 7.6 }), AD("A2", 13, { renk: 3, e: "AD₂" }),
    SR("S", -1), LR("L", 6),
    EQ("E0", 11, -1, "E₀", { renk: 0, p: "r" }), EQ("Er", 8, -1, "E′", { renk: 1, p: "b" }), EQ("E1", 9, -1, "E₁"),
    EQ("Eb", 14, -1, "E′", { renk: 1 }), EQ("E2", 13, -1, "E₂", { p: "b" })
  ], [
    ["Başlangıç: uzun dönem dengesi **E₀**.", ["A0", "S", "L", "E0"]],
    ["**Resesyon:** olumsuz bir şok *AD*'yi sola iter. Stabilizatör ==olmasaydı== AD′'ye kayar ve denge E′'ye düşerdi: Y∗'tan uzak, işsizlik yüksek.", ["A0k", "Hr", "S", "L", "Er"]],
    ["Ama gelir azalınca ==vergi gelirleri otomatik düşer==, işsizlik ödenekleri otomatik artar. Harcanabilir gelir az düşer, tüketim korunur: AD yalnızca **AD₁**'e kayar. E₁, E′'den Y∗'a daha yakın.", ["A0k", "Hr", "A1", "S", "L", "Er", "E1"]],
    ["**Genişleme:** güçlü bir şok *AD*'yi sağa iter. Stabilizatör ==olmasaydı== AD′'ye kayar ve denge E′'ye çıkardı.", ["A0k", "Hb", "S", "L", "Eb"]],
    ["Gelir artınca ==vergi gelirleri otomatik artar==, transferler azalır. Harcanabilir gelir az artar, tüketim yavaşlar: AD yalnızca **AD₂**'ye kayar. E₂, E′'den Y∗'a daha yakın: aşırı ısınma sınırlı.", ["A0k", "Hb", "A2", "S", "L", "Eb", "E2"]]
  ], { xt: [{ v: 6, label: "Y*" }], yt: [{ v: 5, label: "P₀" }] });

  return {
    slug: "mc309",
    amac: "Bu konu otomatik stabilizatörleri anlatıyor: hükümet yeni bir karar almadan, vergi gelirleri ve transferler sayesinde kendiliğinden devreye giren ve konjonktür dalgasını yumuşatan düzenlemeleri. Resesyonda ve genişlemede nasıl çalıştıklarını ve sınırlarını öğreneceksin.",
    bolumler: [
      {
        baslik: "Otomatik stabilizatör nedir?",
        kisa: "Otomatik stabilizatörler, yasa çıkarmadan kendiliğinden devreye giren vergi ve transferlerdir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "⚙️", terim: "Automatic stabilizers", tr: "otomatik stabilizatörler", tanim: "Ekonominin durumuna göre kendiliğinden devreye giren, yeni karar gerektirmeyen vergi ve transfer düzenlemeleri.", ornek: "Geliri düşen ailenin ödediği verginin kendiliğinden azalması." },
              { ikon: "📊", terim: "Progressive income tax", tr: "kademeli gelir vergisi", tanim: "Gelir arttıkça oranın da yükseldiği vergi. Gelir düşünce vergi yükü daha da hızlı azalır.", ornek: "Geliri düşen kişi daha düşük vergi dilimine girer." },
              { ikon: "🛟", terim: "Social service transfers", tr: "sosyal hizmet transferleri", tanim: "İşsizlik ödeneği gibi, ekonomi kötüleşince kendiliğinden artan ödemeler.", ornek: "İşini kaybeden kişi için işsizlik ödeneğinin başlaması." }
            ] },
          { tip: "not", metin: "Otomatik stabilizatörler ==resesyonda ekonomiyi destekler== ve ==genişleme döneminde ekonominin aşırı ısınmasını önler==. Kimse yeni bir karar vermez; ekonomi değişince vergi gelirleri ve transferler kendiliğinden değişir." }
        ]
      },
      {
        baslik: "Mekanizma: GSYİH düşünce ve artınca",
        kisa: "Vergi geliri ve transferler GSYİH'yle zıt oynar; harcanabilir gelir daha az değişir.",
        bloklar: [
          { tip: "adimlar", baslik: "Resesyonda zincir", adimlar: [
              { baslik: "1 · GSYİH düşer", metin: "İşten çıkarmalar başlar, gelirler azalır." },
              { baslik: "2 · Vergi gelirleri otomatik düşer", metin: "Daha az gelir, daha az vergi (kademeli vergide daha da fazla). Aynı anda işsizlik ödeneği ödemeleri otomatik artar." },
              { baslik: "3 · Harcanabilir gelir az düşer", metin: "Düşen gelirin bir kısmını hükümet vergi azalışı ve ödenekle karşılar." },
              { baslik: "4 · Tüketim ve AD daha az düşer", metin: "Tüketimin tamamen çökmesi engellenir; çıktı daha az düşer." }
            ] },
          { tip: "tablo", baslik: "İki yönlü çalışırlar", head: ["", "GSYİH düşerken (resesyon)", "GSYİH artarken (genişleme)"], rows: [
              ["Gelir vergisi tahsilatı", "Otomatik azalır", "Otomatik artar"],
              ["İşsizlik ödeneği ve yardımlar", "Otomatik artar", "Otomatik azalır"],
              ["Harcanabilir gelir", "Gelirden az düşer", "Gelirden az artar"],
              ["Tüketim ve AD", "Daha az düşer", "Daha az artar"],
              ["Kamu bütçesi", "Açık büyür", "Açık küçülür"]
            ], not: "Tüketim değişimi küçük kaldığı için konjonktür dalgası yumuşar." }
        ]
      },
      {
        baslik: "Konjonktür dalgasını yumuşatırlar",
        kisa: "Otomatik stabilizatörler iniş çıkışı ortadan kaldırmaz, küçültür.",
        bloklar: [
          konj,
          { tip: "not", metin: "Stabilizatörler dalgayı **düzleştirir, yok etmez**: resesyon yine yaşanır ama daha sığ olur, genişleme yine olur ama aşırı ısınma daha az görülür. Bu yüzden hükümetler gerektiğinde ek (isteğe bağlı) politikaya da başvurur." }
        ]
      },
      {
        baslik: "AD–AS grafiğinde: AD daha az kayar",
        kisa: "Stabilizatörler AD'nin kaymasını küçültür; çıktı Y∗'a daha yakın kalır.",
        bloklar: [
          adas,
          { tip: "not", metin: "Grafikteki yeşil kesikli eğriler stabilizatör olmasaydı oluşacak varsayımsal durumdur (AD′, E′). Gerçek AD kayması daha küçüktür (AD₁, AD₂): ==şok aynı ama etkisi hafifler==." }
        ]
      },
      {
        baslik: "Otomatik mi, isteğe bağlı mı?",
        kisa: "Yeni karar gerekiyorsa isteğe bağlı; kendiliğinden işliyorsa otomatiktir.",
        bloklar: [
          { tip: "ikili", sol: { ikon: "⚙️", baslik: "Otomatik stabilizatör", maddeler: ["Yeni yasa ya da karar gerekmez", "GSYİH değişince kendiliğinden işler", "Gecikme yok"] },
            sag: { ikon: "📝", baslik: "İsteğe bağlı politika", maddeler: ["Parlamento ya da hükümet karar verir", "Yeni harcama ya da vergi yasası çıkar", "Gecikmeler var"] },
            oyun: [
              { metin: "İşini kaybeden kişiye işsizlik ödeneği başlıyor.", cevap: "sol", neden: "Mevcut düzenleme kendiliğinden işler: otomatik." },
              { metin: "Parlamento resesyon için yeni bir teşvik paketi oyluyor.", cevap: "sag", neden: "Yeni karar: isteğe bağlı." },
              { metin: "Geliri düşen kişinin ödediği gelir vergisi kendiliğinden azalıyor.", cevap: "sol", neden: "Oranlar aynı, tahsilat düşüyor: otomatik." },
              { metin: "Hükümet KDV oranını geçici olarak indirdi.", cevap: "sag", neden: "Oran değişikliği yeni karardır: isteğe bağlı." },
              { metin: "Ekonomi büyürken vergi gelirleri kendiliğinden artıyor.", cevap: "sol", neden: "Otomatik: gelir artınca tahsilat artar." }
            ] },
          { tip: "tuzak", baslik: "Vergi geliri düştü, vergi indirilmedi", metin: "Resesyonda vergi gelirleri düşer ama bu bir politika kararı değildir.", yanlis: "Vergi geliri azaldığına göre hükümet vergileri indirmiş, yani genişletici politika uygulamıştır.", dogru: "Oranlar aynıdır; gelir düştüğü için ==tahsilat kendiliğinden azalır==: bu otomatik stabilizatördür. Oran değişirse isteğe bağlı politikadır." }
        ]
      },
      {
        baslik: "Sınırları ve yan etkisi",
        kisa: "Hızlı ve kendiliğinden işlerler ama dalgayı tamamen silemezler.",
        bloklar: [
          { tip: "liste", maddeler: [
              { ikon: "⚡", baslik: "Gecikme yok", metin: "Yasa gerekmediği için GSYİH değişir değişmez devreye girerler." },
              { ikon: "〰️", baslik: "Yalnızca yumuşatırlar", metin: "Resesyonu ve aşırı ısınmayı tamamen önleyemez; çıktıyı Y∗'a geri getirmezler." },
              { ikon: "🧾", baslik: "Bütçeye yansır", metin: "Resesyonda vergi gelirleri düştüğü ve transferler arttığı için bütçe açığı büyür; genişlemede açık küçülür." }
            ] },
          { tip: "tuzak", baslik: "Stabilizatör resesyonu bitirmez", metin: "Sınav, otomatik stabilizatörlerin gücünü abartan şıklar koyar.", yanlis: "Otomatik stabilizatörler resesyonu tamamen ortadan kaldırır ve çıktıyı Y∗'a geri getirir.", dogru: "Yalnızca ==dalgalanmayı azaltırlar==: açık daha küçük kalır ama kapanmaz. Kapanması için kendiliğinden düzelme ya da isteğe bağlı politika gerekir." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Otomatik stabilizatörler yeni karar gerektirmeden kendiliğinden devreye girer; resesyonda ekonomiyi destekler, genişlemede aşırı ısınmayı önler.",
              "GSYİH düşünce vergi gelirleri otomatik azalır; böylece harcanabilir gelir ve tüketim daha az düşer.",
              "GSYİH artınca vergi gelirleri otomatik artar; böylece tüketim yavaşlar ve aşırı ısınma sınırlanır.",
              "Sosyal hizmet transferleri (işsizlik ödeneği, yardımlar) de otomatik stabilizatördür: resesyonda artar, genişlemede azalır.",
              "Sonuç: AD'nin kayması küçülür; konjonktür dalgası yumuşar ama tamamen yok olmaz.",
              "Otomatik: yasa gerekmez, gecikmesiz. İsteğe bağlı: yeni karar gerekir, gecikmeler vardır.",
              "Resesyonda vergi tahsilatının düşmesi politika kararı değil, otomatik stabilizatör etkisidir."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Aşağıdakilerden hangisi otomatik stabilizatöre örnektir?",
        opts: ["Parlamentonun resesyon sırasında yeni bir harcama paketi oylaması", "Merkez Bankasının politika faizini düşürmesi", "Ekonomi küçülürken işsizlik ödeneği ödemelerinin kendiliğinden artması", "Hükümetin gelir vergisi oranlarını geçici olarak indirmesi"], a: 2,
        why: "İşsizlik ödeneği mevcut düzenleme gereği, ek bir karar gerekmeden işsiz sayısı arttıkça artar: otomatik stabilizatör. A ve D yeni karar gerektirir (isteğe bağlı politika); B şıkkı para politikasıdır." },
      { q: "Ekonomi resesyona girerken hiçbir yeni yasa çıkmıyor. Hangisi kendiliğinden gerçekleşir?",
        opts: ["Vergi gelirleri ve transfer ödemeleri birlikte artar", "Vergi gelirleri azalır, transfer ödemeleri artar", "Vergi gelirleri artar, transfer ödemeleri azalır", "Vergi gelirleri ve transfer ödemeleri birlikte azalır"], a: 1,
        why: "GSYİH düşünce kazançlar azalır ve vergi tahsilatı düşer; işsizlik artınca ödenekler ve transferler artar. Bu, harcanabilir gelirin ve tüketimin daha az düşmesini sağlar. C şıkkı genişleme dönemini anlatır." },
      { q: "Tablo bir ekonominin iki dönemdeki verilerini göstermektedir. Başka hiçbir yasal değişiklik olmadığına göre bu tablo hangi mekanizmayı yansıtır ve ne sonuç doğurur?",
        opts: ["İsteğe bağlı genişletici politika; AD sağa kayar", "Daraltıcı para politikası; faiz artar", "Vergi çarpanı; çıktı artar", "Otomatik stabilizatörler; harcanabilir gelir ve tüketimdeki dalgalanma azalır, konjonktür dalgası yumuşar"], a: 3,
        fig: { type: "table", head: ["Dönem", "Reel GSYİH", "Vergi geliri", "İşsizlik ödeneği ödemeleri"], rows: [["Genişleme", "↑", "↑", "↓"], ["Resesyon", "↓", "↓", "↑"]], caption: "Yasal değişiklik olmadan gelir ve transfer hareketleri" },
        why: "Vergi gelirleri GSYİH ile aynı yönde, transferler zıt yönde hareket ediyor ve bunun için yeni bir karar alınmamış: otomatik stabilizatör. Harcanabilir gelir ve tüketim daha az değişir, konjonktür dalgası yumuşar. A şıkkı yanlış: isteğe bağlı politika yeni karar gerektirir." },
      { q: "Bir resesyon sırasında devlet bütçe açığı büyüyor, ancak parlamento hiçbir vergi ya da harcama yasası çıkarmamıştır. Bunun en olası nedeni nedir?",
        opts: ["Hükümet genişletici maliye politikası uygulamıştır", "Vergi gelirleri azalmış ve transferler artmıştır; otomatik stabilizatörler çalışmaktadır", "Merkez Bankası faizi artırmıştır", "Devlet harcamaları kasıtlı olarak azaltılmıştır"], a: 1,
        why: "Yasa değişikliği olmadan açığın büyümesi, vergi gelirlerinin kendiliğinden düşmesi ve transferlerin artmasıyla açıklanır. A şıkkı yanlış: genişletici politika yeni karar demektir ve soruda karar yok." },
      { q: "Güçlü bir negatif AD şoku ekonomiyi vuruyor. Otomatik stabilizatörler olduğunda AD–AS grafiğinde aşağıdakilerden hangisi gözlenir?",
        opts: ["AD, stabilizatör olmadığı duruma göre daha az sola kayar; durgunluk açığı daha küçük kalır", "AD sağa kayar ve ekonomi Y∗'a döner", "AD hiç kaymaz", "SRAS sağa kayar ve fiyat düzeyi düşer"], a: 0,
        why: "Vergi gelirleri düşüp transferler artınca harcanabilir gelir ve tüketim daha az azalır; AD daha az sola kayar ve çıktı Y∗'a daha yakın kalır. B şıkkı yanlış: stabilizatörler açığı tamamen kapatmaz, yalnızca küçültür; C şıkkı yanlış: AD yine kayar." }
    ]
  };
})();
