/* Kitora not defteri · mc302 · 3.2 Çarpanlar
   Kaynak: College Board CED, Topic 3.2 (MOD-2.B). Blok türleri: /ap/_kit/defter.js başı.
   Sayılar: MPC = 0,8 ise çarpan 5, vergi çarpanı −4; MPC = 0,75 ise çarpan 4, vergi çarpanı −3. */
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
  /* Çubuk (alan) yardımcıları: x merkezi r, yükseklik h; sıfır yükseklikle başlar, durumlarda set ile büyür. */
  function bar(id, x0, x1, renk) { return { id: id, tip: "alan", renk: renk, noktalar: [[x0, 0], [x1, 0], [x1, 0], [x0, 0]] }; }
  function up(x0, x1, h) { return [[x0, 0], [x1, 0], [x1, h], [x0, h]]; }

  /* Grafik 1: bir harcama zinciri (MPC = 0,8, ΔG = 100 TL) */
  var H1 = [10, 8, 6.4, 5.12, 4.1];
  var zincir = {
    tip: "grafik", baslik: "Zincir: 100 TL, MPC = 0,8", xlabel: "Harcama turu", ylabel: "Harcama (TL)", xmax: 7, ymax: 12,
    xticks: [1, 2, 3, 4, 5].map(function (r) { return { v: r, label: String(r) }; }), yticks: [{ v: 5, label: "50" }, { v: 10, label: "100" }],
    ogeler: [
      bar("b1", 0.65, 1.35, 0), bar("b2", 1.65, 2.35, 0), bar("b3", 2.65, 3.35, 0), bar("b4", 3.65, 4.35, 0), bar("b5", 4.65, 5.35, 0),
      TX("t1", 1, 10.8, "100"), TX("t2", 2, 8.8, "80"), TX("t3", 3, 7.2, "64"), TX("t4", 4, 5.9, "51"), TX("t5", 5, 4.9, "41"),
      TX("tot", 5.2, 9.8, "toplam = 500 TL")
    ],
    durumlar: [
      { metin: "Devlet okul binası için **100 TL** ek harcıyor (bu ilk itiş, ΔG). Halkın **MPC**'si 0,8. Harcama kaç turda, ne kadar büyür?" },
      { metin: "**1. tur:** inşaat firmalarının ve işçilerin geliri 100 TL arttı.", set: { b1: { noktalar: up(0.65, 1.35, 10) } }, goster: ["t1"] },
      { metin: "**2. tur:** gelirin %80'i harcanır (MPC = 0,8): 80 TL. %20'si (MPS) biriktirilir. Harcanan 80 TL başkasının geliri olur.", set: { b2: { noktalar: up(1.65, 2.35, 8) } }, goster: ["t2"] },
      { metin: "**3. tur:** 80 × 0,8 = 64 TL harcanır.", set: { b3: { noktalar: up(2.65, 3.35, 6.4) } }, goster: ["t3"] },
      { metin: "**4. ve 5. tur:** 51 TL, 41 TL… Her tur öncekinin %80'i kadar; zincir küçülerek sürer.", set: { b4: { noktalar: up(3.65, 4.35, 5.12) }, b5: { noktalar: up(4.65, 5.35, 4.1) } }, goster: ["t4", "t5"] },
      { metin: "Hepsini topla: 100 + 80 + 64 + … = ==500 TL== = 100 × 5. İlk itiş 5 katına çıktı: ==çarpan 5==.", goster: ["t1", "t2", "t3", "t4", "t5", "tot"] }
    ]
  };

  /* Grafik 2: 100 TL devlet harcaması ile 100 TL vergi indirimi (MPC = 0,8) */
  var GH = [10, 8, 6.4, 5.12, 4.1], TH = [8, 6.4, 5.12, 4.1, 3.28];
  var kars = {
    tip: "grafik", baslik: "Aynı 100 TL: devlet harcaması ve vergi indirimi", xlabel: "Harcama turu", ylabel: "Harcama (TL)", xmax: 8, ymax: 12,
    xticks: [1, 2, 3, 4, 5].map(function (r) { return { v: r, label: String(r) }; }), yticks: [{ v: 5, label: "50" }, { v: 10, label: "100" }],
    ogeler: [
      bar("g1", 0.58, 0.98, 0), bar("g2", 1.58, 1.98, 0), bar("g3", 2.58, 2.98, 0), bar("g4", 3.58, 3.98, 0), bar("g5", 4.58, 4.98, 0),
      bar("v1", 1.02, 1.42, 2), bar("v2", 2.02, 2.42, 2), bar("v3", 3.02, 3.42, 2), bar("v4", 4.02, 4.42, 2), bar("v5", 5.02, 5.42, 2),
      TX("gt", 0.78, 10.8, "100"), TX("vt", 1.22, 8.8, "80"),
      TX("sg", 5.2, 11.4, "G↑100 → +500"), TX("sv", 5.2, 10.1, "T↓100 → +400")
    ],
    durumlar: [
      { metin: "Aynı büyüklükte iki politika: devlet **100 TL harcıyor** (mavi) ya da vergileri **100 TL indiriyor** (kırmızı). MPC = 0,8." },
      { metin: "**Devlet harcaması:** ilk turda 100 TL'nin hepsi harcanır. Sonra 80, 64, 51… Toplam 100 × 5 = **500 TL**.",
        set: { g1: { noktalar: up(0.58, 0.98, 10) }, g2: { noktalar: up(1.58, 1.98, 8) }, g3: { noktalar: up(2.58, 2.98, 6.4) }, g4: { noktalar: up(3.58, 3.98, 5.12) }, g5: { noktalar: up(4.58, 4.98, 4.1) } }, goster: ["gt"] },
      { metin: "**Vergi indirimi:** hane halkı 100 TL'nin yalnızca %80'ini harcar, 20 TL'sini biriktirir (MPS). İlk tur 80 TL, sonra 64, 51… Toplam ==400 TL==.",
        set: { v1: { noktalar: up(1.02, 1.42, 8) }, v2: { noktalar: up(2.02, 2.42, 6.4) }, v3: { noktalar: up(3.02, 3.42, 5.12) }, v4: { noktalar: up(4.02, 4.42, 4.1) }, v5: { noktalar: up(5.02, 5.42, 3.28) } }, goster: ["gt", "vt"] },
      { metin: "Fark: tüm turlarda vergi çubukları bir tur geriden gelir. Toplam 400 < 500: ==vergi çarpanı (4) harcama çarpanından (5) 1 küçük==.", goster: ["gt", "vt", "sg", "sv"] }
    ]
  };

  /* Grafik 3: çarpan AD'yi kaydırır; denge çıktısı daha az artar (MPC = 0,75, ΔG = 1 birim) */
  var adkay = graf("AD kayması ve gerçek çıktı artışı", [
    AD("A0", 11, { e: "AD₀" }), AD("A0k", 11, { kesik: true, e: "" }), AD("A1", 15, { renk: 3, e: "AD₁" }), AD("A2", 14, { renk: 1, e: "AD₂", alt: true }),
    SR("S", -1), EQ("E0", 11, -1, "E₀", { renk: 0 }), EQ("E1", 15, -1, "E₁"), EQ("E2", 14, -1, "E₂", { p: "b" }),
    SH("sh", 7.5, 3.5, 7.5, 3), TX("sht", 5.5, 7.9, "4 birim")
  ], [
    ["Başlangıç denge E₀. MPC = 0,75 ise çarpan 4. Devlet **1 birim** ek harcıyor (ΔG = 1).", ["A0", "S", "E0"]],
    ["*AD*, her fiyat düzeyinde **çarpan × ΔG = 4 × 1 = 4 birim** ==sağa== kayar (AD₁). Fiyat düzeyi sabit olsaydı çıktı da 4 artardı.", ["A0k", "A1", "S", "E0", "sh", "sht"]],
    ["Ama *SRAS* yukarı eğimli: fiyat düzeyi de yükselir (P₀ → P₁) ve bu, AD üzerinde yukarı-sola harekettir. Denge E₁: çıktı yalnızca **2 birim** artar, 4 değil.", ["A0k", "A1", "S", "E0", "E1", "sh", "sht"]],
    ["Aynı 1 birimlik **vergi indirimi** çarpanı 3 olduğu için AD'yi yalnızca 3 birim kaydırır (AD₂); denge E₂ daha düşük bir çıktıda.", ["A0k", "A1", "A2", "S", "E0", "E2"]]
  ], { xt: [{ v: 6, label: "Y₀" }], yt: [{ v: 5, label: "P₀" }] });

  return {
    slug: "mc302",
    amac: "Bu konu çarpanları anlatıyor: bir liralık harcama değişiminin neden birden fazla liralık çıktı değişimi yarattığını. MPC ve MPS'yi, harcama çarpanını, vergi çarpanını ve dengeli bütçe çarpanını hesaplamayı öğreneceksin.",
    bolumler: [
      {
        baslik: "Çarpan fikri: harcama zincirleme büyür",
        kisa: "Bir kişinin harcaması başkasının gelirini artırır; ilk itiş birkaç kat büyür.",
        bloklar: [
          zincir,
          { tip: "not", metin: "Her turda harcanan para bir sonraki kişinin ==geliri== olur. Her tur öncekinin MPC'si kadar küçüldüğü için zincir sonsuza dek sürse de toplam sınırlıdır. Bu yüzden *autonomous expenditure* (gelirden bağımsız harcama) değişimi toplam harcamayı ve reel GSYİH'yi **katlayarak** değiştirir." }
        ]
      },
      {
        baslik: "MPC ve MPS: gelirin harcanan ve biriktirilen kısmı",
        kisa: "Ek gelirin her lirası ya harcanır (MPC) ya biriktirilir (MPS); toplamları 1'dir.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "MPC", alt: "ΔC ÷ ΔYd" }, "+", { t: "MPS", alt: "ΔS ÷ ΔYd" }, "=", { t: "1", alt: "ek gelirin tamamı" }
            ], aciklama: "Yd, harcanabilir gelirdir (vergiden sonra elde kalan gelir). Ek gelirin her lirası ya tüketilir ya biriktirilir." },
          { tip: "kavramlar", kartlar: [
              { ikon: "🛒", terim: "Marginal propensity to consume (MPC)", tr: "marjinal tüketim eğilimi", tanim: "Harcanabilir gelirdeki 1 liralık artışın tüketime giden payı: ΔC ÷ ΔYd.", ornek: "Harçlığın 100 TL artınca 80 TL harcarsan MPC = 0,8." },
              { ikon: "🐷", terim: "Marginal propensity to save (MPS)", tr: "marjinal tasarruf eğilimi", tanim: "Harcanabilir gelirdeki 1 liralık artışın tasarrufa giden payı: ΔS ÷ ΔYd. MPS = 1 − MPC.", ornek: "Aynı örnekte 20 TL biriktirdin: MPS = 0,2." },
              { ikon: "🚀", terim: "Autonomous expenditure", tr: "otonom harcama", tanim: "Gelirdeki değişmeye bağlı olmayan harcama; çarpanın ilk itişi.", ornek: "Devletin okul inşaatı, firmaların yeni makine alımı." }
            ] }
        ]
      },
      {
        baslik: "Harcama çarpanı = 1 ÷ MPS",
        kisa: "MPC ne kadar yüksekse çarpan o kadar büyük; çarpan 1 ÷ MPS'dir.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "Harcama çarpanı", alt: "*expenditure multiplier*" }, "=", { t: "1 ÷ (1 − MPC)" }, "=", { t: "1 ÷ MPS" }
            ], aciklama: "Otonom harcamadaki 1 liralık değişimin toplam harcamada ve reel GSYİH'de yarattığı değişim. ΔY = çarpan × ΔG (ya da ΔI, ΔXn)." },
          { tip: "tablo", baslik: "MPC büyüdükçe çarpanlar büyür", head: ["MPC", "MPS", "Harcama çarpanı (1 ÷ MPS)", "Vergi çarpanı (−MPC ÷ MPS)"], rows: [
              ["0,5", "0,5", "2", "−1"],
              ["0,75", "0,25", "4", "−3"],
              ["0,8", "0,2", "5", "−4"],
              ["0,9", "0,1", "10", "−9"]
            ], vurgu: 2, not: "Satırlar aynı mantıkla kurulur: önce MPS = 1 − MPC, sonra çarpanlar." },
          { tip: "ornek", baslik: "Okul binaları için ek harcama",
            durum: "Devlet okul binaları için ek 20 milyar TL harcıyor. MPC = 0,8. Fiyat düzeyi sabitken reel GSYİH ne kadar artar?",
            adimlar: ["MPS = 1 − 0,8 = 0,2.", "Harcama çarpanı = 1 ÷ 0,2 = 5.", "ΔY = 5 × 20 = 100 milyar TL."],
            sonuc: "Reel GSYİH ==100 milyar TL== artar; AD her fiyat düzeyinde 100 milyar TL sağa kayar." },
          { tip: "tuzak", baslik: "1 ÷ MPC değil, 1 ÷ MPS", metin: "Çarpanı hesaplarken iki sık hata var.", yanlis: "Çarpan = 1 ÷ MPC; MPC = 0,8 için 1,25.", dogru: "Çarpan = ==1 ÷ MPS==. MPC = 0,8 ise MPS = 0,2 ve çarpan **5**. Harcamanın büyük kısmı harcanıyorsa (MPC yüksek) çarpan büyük çıkar." }
        ]
      },
      {
        baslik: "Vergi çarpanı = −MPC ÷ MPS",
        kisa: "Vergi çarpanı ters yönlü ve harcama çarpanından tam 1 küçüktür.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "Vergi çarpanı", alt: "*tax multiplier*" }, "=", { t: "−MPC ÷ MPS" }
            ], aciklama: "Vergideki 1 liralık değişimin AD'de ve çıktıda yarattığı değişim: ΔY = vergi çarpanı × ΔT. Eksi işaret: vergi artarsa çıktı azalır, vergi azalırsa çıktı artar. Mutlak değeri her zaman harcama çarpanından 1 küçüktür." },
          kars,
          { tip: "ikili", sol: { ikon: "🏛️", baslik: "Harcama çarpanı", maddeler: ["G, I, Xn gibi harcama değişimi için", "1 ÷ MPS", "İlk turda 1 liranın tamamı harcanır"] },
            sag: { ikon: "🧾", baslik: "Vergi çarpanı", maddeler: ["Vergi (T) değişimi için", "−MPC ÷ MPS", "İlk turda yalnızca MPC kadarı harcanır"] },
            oyun: [
              { metin: "Devlet 10 milyar TL ek harcıyor.", cevap: "sol", neden: "Harcama değişimi: 1 ÷ MPS." },
              { metin: "Vergiler 10 milyar TL azaltılıyor.", cevap: "sag", neden: "Vergi değişimi: −MPC ÷ MPS." },
              { metin: "MPC = 0,8 iken çarpan 5.", cevap: "sol", neden: "1 ÷ 0,2 = 5: harcama çarpanı." },
              { metin: "MPC = 0,8 iken çarpan −4.", cevap: "sag", neden: "−0,8 ÷ 0,2 = −4: vergi çarpanı." },
              { metin: "Değeri her zaman eksidir.", cevap: "sag", neden: "Vergi artınca çıktı azalır: eksi işaret." }
            ] }
        ]
      },
      {
        baslik: "Dengeli bütçe çarpanı = 1",
        kisa: "Harcamayı ve vergiyi aynı miktar artırırsan çıktı tam o miktar artar.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "1 ÷ MPS", alt: "harcama" }, "−", { t: "MPC ÷ MPS", alt: "vergi" }, "=", { t: "1", alt: "*balanced budget multiplier*" }
            ], aciklama: "ΔG = ΔT ise: (1 − MPC) ÷ MPS = 1. Çıktı, harcama artışı kadar artar." },
          { tip: "ornek", baslik: "Hem harcama hem vergi 50 artıyor",
            durum: "MPC = 0,75. Devlet harcamayı 50 milyar TL artırıyor ve vergiyi de 50 milyar TL artırıyor (bütçe dengede). Reel GSYİH ne olur?",
            adimlar: ["MPS = 0,25; harcama çarpanı = 4; vergi çarpanı = −0,75 ÷ 0,25 = −3.", "Harcama etkisi: 4 × 50 = +200.", "Vergi etkisi: −3 × 50 = −150.", "Net etki: 200 − 150 = +50."],
            sonuc: "Reel GSYİH ==50 milyar TL artar==, yani ΔG kadar. Dengeli bütçe çarpanı her zaman 1'dir." },
          { tip: "tuzak", baslik: "Bütçe dengeli, etki sıfır değil", metin: "Harcama ve vergi birbirini götürüyor gibi görünür ama ikisinin çarpanı eşit değil.", yanlis: "Harcama ve vergi eşit artınca çıktı değişmez.", dogru: "Vergi ilk turda tasarrufa da bölündüğü için harcama baskın çıkar: net etki ==+ΔG== (çarpan 1)." }
        ]
      },
      {
        baslik: "Çarpan AD'yi ne kadar kaydırır?",
        kisa: "Çarpan × ilk itiş, AD'nin yatay kayma miktarıdır; denge çıktısı daha az artar.",
        bloklar: [
          adkay,
          { tip: "not", metin: "Sınavda \"fiyat düzeyi sabit\" denirse ΔY = çarpan × ΔG hesabı doğrudan reel çıktı artışıdır. Grafikte fiyat düzeyi de yükseliyorsa *AD* çarpan kadar kayar ama ==denge çıktısı daha az artar==. Çarpan her zaman AD'nin yatay kaymasını verir." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Otonom harcamadaki değişim zincirleme büyür: bir kişinin harcaması başkasının geliri olur.",
              "MPC = ΔC ÷ ΔYd; MPS = ΔS ÷ ΔYd; MPC + MPS = 1.",
              "Harcama çarpanı = 1 ÷ MPS = 1 ÷ (1 − MPC). MPC büyükse çarpan büyük.",
              "Vergi çarpanı = −MPC ÷ MPS: ters yönlü ve harcama çarpanından 1 küçük.",
              "Vergi indiriminde ilk turda yalnızca MPC kadarı harcanır; bu yüzden harcama çarpanı vergi çarpanından büyüktür.",
              "Dengeli bütçe çarpanı 1: ΔG = ΔT ise ΔY = ΔG.",
              "Çarpan × ΔG, AD'nin her fiyat düzeyinde yatay kayma miktarıdır; fiyat düzeyi değişirse denge çıktısı bundan az artar."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "MPC = 0,75 olan bir ekonomide devlet harcamalarını 8 milyar TL artırıyor. Fiyat düzeyi sabit kabul edilirse reel GSYİH'deki toplam artış kaç milyar TL'dir?",
        opts: ["6", "10,67", "32", "24"], a: 2,
        why: "MPS = 1 − 0,75 = 0,25; harcama çarpanı = 1 ÷ 0,25 = 4; ΔY = 4 × 8 = 32. A şıkkı MPC × ΔG'dir, B şıkkı 1 ÷ MPC kullanır, D şıkkı vergi çarpanını (3) kullanır; üçü de yanlıştır." },
      { q: "MPC = 0,8 olan bir ekonomide vergiler 10 milyar TL azaltılıyor. Fiyat düzeyi sabit kabul edilirse reel GSYİH ne olur?",
        opts: ["40 milyar TL artar", "50 milyar TL artar", "10 milyar TL artar", "40 milyar TL azalır"], a: 0,
        why: "Vergi çarpanı = −0,8 ÷ 0,2 = −4. Vergi azaldığı için ΔT = −10 ve ΔY = (−4) × (−10) = +40. B şıkkı harcama çarpanını (5) kullanır; D şıkkı işareti karıştırır." },
      { q: "MPC = 0,5 iken devlet hem harcamayı hem de vergiyi 20 milyar TL artırıyor. Reel GSYİH'deki net değişim nedir?",
        opts: ["0", "+20 milyar TL", "+40 milyar TL", "−20 milyar TL"], a: 1,
        why: "Harcama çarpanı 2 olduğu için +40; vergi çarpanı −1 olduğu için −20; net +20. Dengeli bütçe çarpanı 1'dir. A şıkkı \"bütçe dengede, etki sıfır\" diye düşünür ama harcama baskın çıkar." },
      { q: "Vergi çarpanının mutlak değerinin harcama çarpanından küçük olmasının nedeni aşağıdakilerden hangisidir?",
        opts: ["Vergiler tasarrufu hiç etkilemez", "Devlet vergi gelirini hemen harcar", "Vergi indiriminde ek gelirin yalnızca MPC kadarı ilk turda harcanır, kalanı tasarrufa gider", "Vergi indirimi AD'yi değil SRAS'ı kaydırır"], a: 2,
        why: "Devlet harcamasının tamamı ilk turda talebe girer; vergi indirimiyle hane halkına geçen paranın MPS kadarı biriktirilir. A şıkkı yanlış: tasarruf eğilimi tam da bunun nedenidir. D şıkkı yanlış: vergi değişimi AD'yi kaydırır." },
      { q: "Tabloda üç ülkenin MPC'si verilmiştir. Üç ülke de devlet harcamasını aynı miktar artırıyor. Reel GSYİH'si en çok artacak ülke ve harcama çarpanı hangisidir?",
        opts: ["Aralya, çarpan 2", "Beritya, çarpan 5", "Ceritya, çarpan 9", "Ceritya, çarpan 10"], a: 3,
        fig: { type: "table", head: ["Ülke", "MPC"], rows: [["Aralya", "0,5"], ["Beritya", "0,8"], ["Ceritya", "0,9"]], caption: "Üç ülkenin MPC değerleri" },
        why: "MPC en yüksek Ceritya'da (0,9): MPS = 0,1 ve çarpan = 1 ÷ 0,1 = 10. C şıkkındaki 9 vergi çarpanının mutlak değeridir, harcama çarpanı değil." }
    ]
  };
})();
