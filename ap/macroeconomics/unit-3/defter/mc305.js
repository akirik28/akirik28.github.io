/* Kitpath not defteri · mc305 · 3.5 AD–AS Modelinde Denge
   Kaynak: College Board CED, Topic 3.5 (MOD-2.G). Blok türleri: /ap/_kit/defter.js başı.
   Not: yazıda tam istihdam çıktısı "Y∗" (U+2217) ile yazılır; "*" metin işaretiyle karışmasın diye.
   Grafik: AD: P = 11 − Y, SRAS: P = Y − 1, LRAS: Y = 6 → E₀ = (6, 5). */
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
  /* Grafik 1: kısa dönem dengesi ve denge dışı fiyat düzeyleri */
  var gKisa = graf("Kısa dönem dengesi: AD ile SRAS kesişir", [
    AD("AD", 11), SR("S", -1), EQ("E", 11, -1, "E", { renk: 0 }),
    { id: "H7", tip: "cizgi", renk: 1, kesik: true, from: [0, 7], to: [10, 7], etiket: "", gizli: true },
    { id: "d7", tip: "nokta", renk: 3, x: 4, y: 7, etiket: "", gizli: true }, { id: "s7", tip: "nokta", renk: 3, x: 8, y: 7, etiket: "", gizli: true },
    OK("g7", 4.3, 7, 7.7, 7, 2), TX("t7", 6, 8, "arz fazlası"),
    { id: "H3", tip: "cizgi", renk: 1, kesik: true, from: [0, 3], to: [10, 3], etiket: "", gizli: true },
    { id: "d3", tip: "nokta", renk: 3, x: 8, y: 3, etiket: "", gizli: true }, { id: "s3", tip: "nokta", renk: 3, x: 4, y: 3, etiket: "", gizli: true },
    OK("g3", 4.3, 3, 7.7, 3, 2), TX("t3", 6, 1.9, "talep fazlası")
  ], [
    ["*AD* aşağı eğimli, *SRAS* yukarı eğimli. Dengeyi bulmak için iki eğrinin nerede kesiştiğine bak.", ["AD", "S"]],
    ["Kesişim **E**: bu fiyat düzeyinde talep edilen toplam çıktı ile arz edilen toplam çıktı ==eşittir==. Bu, kısa dönem dengesidir (P₀, Y₀).", ["AD", "S", "E"]],
    ["Fiyat düzeyi dengenin ==üstünde== olsaydı: arz edilen çıktı talep edileni aşar (arz fazlası), mallar satılamaz. Firmalar fiyatları indirir, fiyat düzeyi E'ye iner.", ["AD", "S", "H7", "d7", "s7", "g7", "t7"]],
    ["Fiyat düzeyi dengenin ==altında== olsaydı: talep edilen çıktı arz edileni aşar (talep fazlası), mallar yetmez. Fiyatlar yükselir, fiyat düzeyi E'ye çıkar.", ["AD", "S", "H3", "d3", "s3", "g3", "t3"]],
    ["Denge dışı bir fiyat düzeyi kalıcı olmaz; ekonomi ==AD ile SRAS'ın kesiştiği== E noktasına gelir.", ["AD", "S", "E"]]
  ], { xt: [{ v: 6, label: "Y₀" }], yt: [{ v: 5, label: "P₀" }] });

  /* Grafik 2: uzun dönem dengesi */
  var uzun = graf("Uzun dönem dengesi: üç eğri tek noktada", [
    AD("AD", 11), SR("S", -1), LR("L", 6), EQ("E", 11, -1, "E₀", { renk: 0, p: "r" })
  ], [
    ["Üç eğri: *AD* (aşağı), *SRAS* (yukarı) ve *LRAS* (dikey, Y∗'da). Sınavda üçünü de çizip etiketlersin.", ["AD", "S", "L"]],
    ["AD ve SRAS'ın kesişimi **tam LRAS üzerinde**: reel çıktı Y∗'a eşit, işsizlik doğal oranda. Bu, ==uzun dönem dengesidir==.", ["AD", "S", "L", "E"]],
    ["Bu tek noktada üç şey birden doğru: **talep = arz**, **çıktı = Y∗** ve **işsizlik = doğal oran**. Başka bir şok gelmedikçe ekonomi burada kalır.", ["AD", "S", "L", "E"]]
  ], { xt: [{ v: 6, label: "Y*" }], yt: [{ v: 5, label: "P₀" }] });

  /* Grafik 3: durgunluk açığı ve enflasyon açığı */
  var acik = graf("Kısa dönem dengesi tam istihdamda olmayabilir", [
    AD("A0", 11, { e: "AD₀" }), AD("A0k", 11, { kesik: true, e: "" }), AD("A1", 9, { renk: 3, e: "AD₁" }), AD("A2", 13, { renk: 3, e: "AD₂" }),
    SR("S", -1), LR("L", 6),
    EQ("E0", 11, -1, "E₀", { renk: 0, p: "r" }), EQ("E1", 9, -1, "E₁"), EQ("E2", 13, -1, "E₂"),
    SH("s1", 7, 4, 2, 3), SH("s2", 7.5, 3.5, 5.5, 3),
    GAP("g1", 5, 6, "açık"), GAP("g2", 7, 6, "açık")
  ], [
    ["Başlangıç: AD, SRAS ve LRAS **E₀**'da kesişiyor: tam istihdam, çıktı Y∗.", ["A0", "S", "L", "E0"]],
    ["*AD* ==sola== kayar (AD₁). Yeni kısa dönem dengesi **E₁**: çıktı Y∗'ın ==solunda==. Bu bir ==durgunluk açığıdır== (*recessionary gap*): negatif çıktı açığı.", ["A0k", "A1", "S", "L", "E1", "s1", "g1k", "g1t"]],
    ["*AD* ==sağa== kayar (AD₂). Yeni denge **E₂**: çıktı Y∗'ın ==sağında==. Bu bir ==enflasyon açığıdır== (*inflationary gap*): pozitif çıktı açığı.", ["A0k", "A2", "S", "L", "E2", "s2", "g2k", "g2t"]]
  ], { xt: [{ v: 6, label: "Y*" }], yt: [{ v: 5, label: "P₀" }] });

  return {
    slug: "mc305",
    amac: "Bu konu AD–AS modelinde dengeyi anlatıyor: kısa dönem ve uzun dönem dengesinin nerede oluştuğunu, çıktının tam istihdam düzeyinin altında ya da üstünde kalabildiğini (durgunluk ve enflasyon açığı) ve grafikte bunu nasıl göstereceğini öğreneceksin.",
    bolumler: [
      {
        baslik: "Kısa dönem dengesi: AD ile SRAS'ın kesişimi",
        kisa: "Kısa dönem dengesi, talep edilen ve arz edilen toplam çıktının eşit olduğu noktadır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "⚖️", terim: "Short-run equilibrium", tr: "kısa dönem dengesi", tanim: "Talep edilen toplam çıktı ile arz edilen toplam çıktının eşit olduğu fiyat düzeyi ve çıktı: AD ile SRAS'ın kesişimi.", ornek: "Kantinde talep edilen tost sayısı hazırlanan tost sayısına eşitse." }
            ] },
          gKisa
        ]
      },
      {
        baslik: "Uzun dönem dengesi: LRAS üzerinde",
        kisa: "Uzun dönem dengesinde AD ve SRAS, tam istihdam çıktısında (LRAS üzerinde) kesişir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🎯", terim: "Long-run equilibrium", tr: "uzun dönem dengesi", tanim: "AD ve SRAS'ın LRAS üzerinde kesiştiği durum: reel çıktı tam istihdam düzeyindedir.", ornek: "Fabrikalar tam kapasiteyle çalışır, kimse zorunlu işsiz değildir; yalnız doğal işsizlik vardır." }
            ] },
          uzun
        ]
      },
      {
        baslik: "Üç durum: tam istihdam, durgunluk açığı, enflasyon açığı",
        kisa: "Kısa dönem dengesi tam istihdamın solunda, üstünde ya da tam üzerinde olabilir.",
        bloklar: [
          acik,
          { tip: "tablo", baslik: "İki çıktı açığı", head: ["", "Durgunluk açığı (negatif)", "Enflasyon açığı (pozitif)"], rows: [
              ["Denge nerede?", "AD ile SRAS, LRAS'ın solunda kesişir", "AD ile SRAS, LRAS'ın sağında kesişir"],
              ["Reel çıktı", "Y∗'ın altında (Y < Y∗)", "Y∗'ın üstünde (Y > Y∗)"],
              ["İşsizlik", "Doğal oranın üstünde (döngüsel işsizlik var)", "Doğal oranın altında"],
              ["Çıktı açığı", "Negatif", "Pozitif"],
              ["Örnek neden", "Tüketici güveni çöktü (AD sola)", "Yatırım patladı (AD sağa)"]
            ], not: "Açık, yatay eksende Y ile Y∗ arasındaki farktır; dikey eksende (fiyat düzeyinde) ölçülmez." }
        ]
      },
      {
        baslik: "Çıktı açığını hesapla ve ayırt et",
        kisa: "Çıktı açığı, gerçek çıktının tam istihdam çıktısından yüzde sapmasıdır.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "Çıktı açığı (%)", alt: "*output gap*" }, "=", { t: "(Y − Y∗) ÷ Y∗ × 100" }
            ], aciklama: "Negatif sonuç durgunluk açığı, pozitif sonuç enflasyon açığıdır." },
          { tip: "ornek", baslik: "Üç ülkenin açığı",
            durum: "Bir ülkede tam istihdam çıktısı Y∗ = 500 milyar TL, gerçek reel GSYİH Y = 475 milyar TL. Çıktı açığı nedir?",
            adimlar: ["Fark: 475 − 500 = −25.", "Yüzde: −25 ÷ 500 × 100 = −5%.", "Negatif: ekonomi tam istihdamın altında, kaynaklar boşta."],
            sonuc: "==%5 durgunluk açığı==. İşsizlik doğal oranın üstündedir. Y = 520 olsaydı (+20 ÷ 500 = +%4) pozitif, yani enflasyon açığı olurdu." },
          { tip: "ikili", sol: { ikon: "📉", baslik: "Durgunluk açığı", maddeler: ["Y < Y∗, negatif çıktı açığı", "İşsizlik doğal oranın üstünde"] },
            sag: { ikon: "🔥", baslik: "Enflasyon açığı", maddeler: ["Y > Y∗, pozitif çıktı açığı", "İşsizlik doğal oranın altında"] },
            oyun: [
              { metin: "Gerçek işsizlik doğal oranın üstünde.", cevap: "sol", neden: "Kaynaklar boşta: durgunluk açığı." },
              { metin: "Fabrikalar sürdürülebilir kapasitenin üstünde çalışıyor.", cevap: "sag", neden: "Y > Y∗: ekonomi aşırı ısınmış." },
              { metin: "Çıktı açığı yüzde −3.", cevap: "sol", neden: "Negatif açık: durgunluk." },
              { metin: "Döngüsel işsizlik pozitif.", cevap: "sol", neden: "Çıktı Y∗'ın altında: döngüsel işsizlik var." },
              { metin: "Kısa dönem dengesi LRAS'ın sağında.", cevap: "sag", neden: "Çıktı Y∗'ı aşıyor: enflasyon açığı." }
            ] },
          { tip: "tuzak", baslik: "Denge, tam istihdam demek değildir", metin: "AD ve SRAS'ın kesişmesi yalnızca piyasanın temizlendiğini gösterir.", yanlis: "AD ile SRAS kesiştiğine göre ekonomi tam istihdamdadır.", dogru: "Kesişim ==LRAS üzerinde== değilse çıktı açığı vardır. Kısa dönem dengesi Y∗'ın solunda ya da sağında olabilir." }
        ]
      },
      {
        baslik: "Sınavda AD–AS grafiği: dört adım",
        kisa: "Önce eksenleri ve üç eğriyi etiketle, sonra dengeyi Y∗ ile karşılaştır.",
        bloklar: [
          { tip: "adimlar", baslik: "Etiketli AD–AS grafiği çiz", adimlar: [
              { baslik: "1 · Eksenler", metin: "Dikey eksen: fiyat düzeyi (PL ya da P). Yatay eksen: reel GSYİH (Y)." },
              { baslik: "2 · Üç eğri", metin: "Aşağı eğimli AD, yukarı eğimli SRAS ve dikey LRAS (Y∗'ın üstünde). Her birini etiketle." },
              { baslik: "3 · Denge", metin: "AD ile SRAS'ın kesişimini işaretle; eksenlere kesikli çizgiler indir ve P₁, Y₁ yaz." },
              { baslik: "4 · Karşılaştır", metin: "Y₁ = Y∗ ise uzun dönem dengesi. Y₁ < Y∗ ise durgunluk açığı. Y₁ > Y∗ ise enflasyon açığı." }
            ] },
          { tip: "tuzak", baslik: "Eksenleri karıştırma", metin: "Çıktı açığı hep yatay eksendedir.", yanlis: "Fiyat düzeyi yüksekse enflasyon açığı vardır.", dogru: "Açığı ==Y ile Y∗'ı karşılaştırarak== bulursun. Fiyat düzeyi yüksek olabilir ama çıktı Y∗'ın altındaysa durgunluk açığı sürüyordur." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Kısa dönem dengesi AD ile SRAS'ın kesiştiği noktadır: talep edilen ve arz edilen toplam çıktı eşittir.",
              "Fiyat düzeyi dengenin üstündeyse arz fazlası, altındaysa talep fazlası oluşur; fiyat düzeyi dengeye gelir.",
              "Uzun dönem dengesi AD ile SRAS'ın LRAS üzerinde, yani tam istihdam çıktısında kesişmesidir.",
              "Kısa dönem dengesi tam istihdamın altında, üstünde ya da tam üzerinde olabilir.",
              "Y < Y∗: durgunluk (negatif) çıktı açığı, işsizlik doğal oranın üstünde.",
              "Y > Y∗: enflasyon (pozitif) çıktı açığı, işsizlik doğal oranın altında.",
              "Çıktı açığı (%) = (Y − Y∗) ÷ Y∗ × 100; yatay eksende okunur."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "AD–AS modelinde kısa dönem dengesi hangi noktada oluşur?",
        opts: ["AD ile LRAS'ın kesiştiği noktada", "AD ile SRAS'ın kesiştiği noktada", "SRAS ile LRAS'ın kesiştiği noktada", "Yalnızca tam istihdam çıktısında"], a: 1,
        why: "Kısa dönem dengesi, talep edilen ve arz edilen toplam çıktının eşit olduğu, yani AD ile SRAS'ın kesiştiği noktadır. D şıkkı yanlış: kısa dönem dengesi Y∗'da olmak zorunda değildir; ancak AD, SRAS ve LRAS aynı noktada kesişiyorsa uzun dönem dengesi de sağlanmıştır." },
      { q: "Bir ekonomide AD ile SRAS, LRAS'ın solunda kesişiyor. Aşağıdakilerden hangisi doğrudur?",
        opts: ["Enflasyon açığı vardır ve işsizlik doğal oranın altındadır", "Ekonomi uzun dönem dengesindedir", "Durgunluk açığı vardır; reel çıktı Y∗'ın altındadır ve işsizlik doğal oranın üstündedir", "Pozitif çıktı açığı vardır"], a: 2,
        why: "Denge LRAS'ın solundaysa Y < Y∗: negatif çıktı açığı, yani durgunluk açığı; kaynaklar boşta olduğu için işsizlik doğal oranın üstündedir. A ve D şıkları LRAS'ın sağındaki dengeyi anlatır." },
      { q: "Grafikte AD ve SRAS'ın kesiştiği E noktası LRAS'ın sağındadır. Aşağıdakilerden hangisi doğrudur?",
        opts: ["Durgunluk açığı vardır; işsizlik doğal oranın üstündedir", "Ekonomi uzun dönem dengesindedir; işsizlik doğal orandadır", "Reel çıktı Y∗'ın altındadır", "Enflasyon (pozitif çıktı) açığı vardır; işsizlik doğal oranın altındadır"], a: 3,
        fig: { type: "graph", xlabel: "Reel GSYİH", ylabel: "Fiyat düzeyi", xmax: 11, ymax: 10, lines: [{ from: [10, 3], to: [4, 9], label: "AD" }, { from: [2, 1], to: [10, 9], label: "SRAS" }, { from: [6, 0], to: [6, 9], label: "LRAS" }], points: [{ q: 7, p: 6, label: "E", guides: true }], caption: "E noktası LRAS'ın sağında" },
        why: "E, LRAS'ın sağındadır: Y > Y∗, yani pozitif (enflasyon) çıktı açığı. Kaynaklar doğal oranın ötesinde kullanıldığı için işsizlik doğal oranın altındadır. A ve C şıkları LRAS'ın solundaki dengeyi anlatır." },
      { q: "Bir ülkede tam istihdam çıktısı 800 milyar TL, gerçek reel GSYİH 760 milyar TL'dir. Çıktı açığı ve türü nedir?",
        opts: ["−%5, durgunluk açığı", "+%5, enflasyon açığı", "−%5, enflasyon açığı", "Çıktı açığı yoktur; fark yalnızca 40 milyar TL"], a: 0,
        why: "(760 − 800) ÷ 800 × 100 = −%5. Negatif açık durgunluk açığıdır. C şıkkı doğru sayıyı verip işareti yanlış yorumlar; B şıkkı işareti ters alır." },
      { q: "Genel fiyat düzeyi, AD ile SRAS'ın kesiştiği denge fiyat düzeyinin üstündedir. Aşağıdakilerden hangisi doğrudur?",
        opts: ["Talep edilen toplam çıktı, arz edilenden fazladır; fiyat düzeyi yükselir", "Arz edilen toplam çıktı, talep edilenden fazladır; mallar satılamaz ve fiyat düzeyi düşer", "Talep edilen ve arz edilen çıktı eşittir", "AD ile SRAS aynı anda sağa kayar"], a: 1,
        why: "Denge fiyat düzeyinin üstünde AD eğrisi, SRAS'ın solunda kalır: arz edilen çıktı talebi aşar, mallar satılmaz ve fiyat düzeyi dengeye doğru düşer. A şıkkı denge fiyat düzeyinin altındaki durumu anlatır." }
    ]
  };
})();
