/* Kitora not defteri · mc308 · 3.8 Maliye Politikası
   Kaynak: College Board CED, Topic 3.8 (POL-1.A, POL-1.B). Blok türleri: /ap/_kit/defter.js başı.
   Not: yazıda tam istihdam çıktısı "Y∗" (U+2217) ile yazılır; "*" metin işaretiyle karışmasın diye.
   Sayılar: MPC = 0,75 → harcama çarpanı 4, vergi çarpanı −3; MPC = 0,8 → 5 ve −4. */
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
  /* Grafik 1: durgunluk açığı → genişletici maliye politikası (AD₁ → AD₂) */
  var genis = graf("Durgunluk açığı: genişletici maliye politikası", [
    AD("A0k", 11, { kesik: true, e: "" }), AD("A0", 11, { e: "AD₀" }), AD("A1", 9, { renk: 3, e: "AD₁" }), AD("A1k", 9, { renk: 3, kesik: true, e: "" }), AD("A2", 11, { renk: 3, e: "AD₂" }),
    SR("S", -1), LR("L", 6),
    EQ("E0", 11, -1, "E₀", { renk: 0, p: "r" }), EQ("E1", 9, -1, "E₁"), EQ("E2", 11, -1, "E₂", { p: "r" }),
    SH("s1", 7, 4, 2, 3), SH("s2", 6, 3, 5, 0), GAP("g1", 5, 6, "açık")
  ], [
    ["Başlangıç: uzun dönem dengesi **E₀**.", ["A0", "S", "L", "E0"]],
    ["Talep çöker: *AD* sola kayar (AD₁). Denge **E₁**: ==durgunluk açığı==, işsizlik doğal oranın üstünde.", ["A0k", "A1", "S", "L", "E1", "s1", "g1k", "g1t"]],
    ["Hükümet ==harcamayı artırır== (G↑) ya da ==vergiyi indirir== (T↓): *genişletici maliye politikası*. AD ==sağa== kayar (AD₂, eski AD₀ ile aynı yerde).", ["A1k", "A2", "S", "L", "E1", "s2", "g1k", "g1t"]],
    ["Yeni denge **E₂**: çıktı Y∗'a döndü, işsizlik doğal orana indi. Fiyat düzeyi de ==P₀'a geri yükseldi==. Politika AD'yi, dolayısıyla Y ve P'yi etkiledi.", ["A2", "S", "L", "E2"]]
  ], { xt: [{ v: 6, label: "Y*" }], yt: [{ v: 5, label: "P₀" }] });

  /* Grafik 2: enflasyon açığı → daraltıcı maliye politikası (AD₁ → AD₂) */
  var daral = graf("Enflasyon açığı: daraltıcı maliye politikası", [
    AD("A0k", 11, { kesik: true, e: "" }), AD("A0", 11, { e: "AD₀" }), AD("A1", 13, { renk: 3, e: "AD₁" }), AD("A1k", 13, { renk: 3, kesik: true, e: "" }), AD("A2", 11, { renk: 3, e: "AD₂" }),
    SR("S", -1), LR("L", 6),
    EQ("E0", 11, -1, "E₀", { renk: 0, p: "r" }), EQ("E1", 13, -1, "E₁"), EQ("E2", 11, -1, "E₂", { p: "r" }),
    SH("s1", 7.5, 3.5, 5.5, 3), SH("s2", 7.5, 5.5, 3.5, 0), GAP("g2", 7, 6, "açık")
  ], [
    ["Başlangıç: uzun dönem dengesi **E₀**.", ["A0", "S", "L", "E0"]],
    ["Harcamalar patlar: *AD* sağa kayar (AD₁). Denge **E₁**: ==enflasyon açığı==, işsizlik doğal oranın altında, fiyat düzeyi yükseliyor.", ["A0k", "A1", "S", "L", "E1", "s1", "g2k", "g2t"]],
    ["Hükümet ==harcamayı azaltır== (G↓) ya da ==vergiyi artırır== (T↑): *daraltıcı maliye politikası*. AD ==sola== kayar (AD₂).", ["A1k", "A2", "S", "L", "E1", "s2", "g2k", "g2t"]],
    ["Yeni denge **E₂**: çıktı Y∗'a indi, aşırı ısınma bitti; fiyat düzeyi P₀'a ==geri düştü==.", ["A2", "S", "L", "E2"]]
  ], { xt: [{ v: 6, label: "Y*" }], yt: [{ v: 5, label: "P₀" }] });

  return {
    slug: "mc308",
    amac: "Bu konu maliye politikasını anlatıyor: hükümetin harcama ve vergi kararlarıyla toplam talebi (AD) nasıl kaydırıp ekonomiyi tam istihdama yaklaştırdığını. Genişletici ve daraltıcı politikayı, çarpan hesabını ve politikadaki gecikmeleri öğreneceksin.",
    bolumler: [
      {
        baslik: "Maliye politikası: araçlar ve amaç",
        kisa: "Maliye politikası, hükümetin harcama ve vergi kararlarıyla AD'yi yönlendirmesidir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🏛️", terim: "Fiscal policy", tr: "maliye politikası", tanim: "Hükümetin tam istihdam gibi makro hedeflere ulaşmak için devlet harcamalarını ve vergi ile transferleri değiştirmesi.", ornek: "Okul binası yaptırmak ya da KDV'yi indirmek." },
              { ikon: "📝", terim: "Discretionary fiscal policy", tr: "isteğe bağlı maliye politikası", tanim: "Hükümetin bilinçli bir kararla (yeni yasa ya da bütçe değişikliğiyle) harcama ya da vergileri değiştirmesi.", ornek: "Parlamentonun ek bütçe paketini oylaması." },
              { ikon: "🤝", terim: "Transfer payments", tr: "transfer ödemeleri", tanim: "Karşılığında mal ya da hizmet alınmayan ödemeler. Devlet harcaması G'ye girmez; AD'yi dolaylı etkiler.", ornek: "İşsizlik ödeneği, emekli maaşı, sosyal yardımlar." }
            ] },
          { tip: "not", metin: "Maliye politikasının **iki aracı** vardır: devlet harcamaları (G) ve vergiler/transferler. Amaç, AD'yi kaydırarak ekonomiyi tam istihdam çıktısına (Y∗) getirmektir. Maliye politikasının döviz kuruna etkisi 6. ünitede (açık ekonomi) ele alınır." }
        ]
      },
      {
        baslik: "Genişletici ve daraltıcı politika",
        kisa: "Durgunluk açığında genişletici, enflasyon açığında daraltıcı politika kullanılır.",
        bloklar: [
          { tip: "ikili", sol: { ikon: "🚀", baslik: "Genişletici (*expansionary*)", maddeler: ["G ↑, T ↓ ya da transferler ↑", "AD sağa kayar", "Durgunluk açığında kullanılır"] },
            sag: { ikon: "🧯", baslik: "Daraltıcı (*contractionary*)", maddeler: ["G ↓, T ↑ ya da transferler ↓", "AD sola kayar", "Enflasyon açığında kullanılır"] },
            oyun: [
              { metin: "Parlamento okul ve yol yatırımları için ek bütçe ayırdı.", cevap: "sol", neden: "G arttı: genişletici." },
              { metin: "Gelir vergisi oranları artırıldı.", cevap: "sag", neden: "T arttı: harcanabilir gelir azalır, daraltıcı." },
              { metin: "İşsizlik ödeneği artırıldı.", cevap: "sol", neden: "Transfer arttı: genişletici." },
              { metin: "Devlet harcamalarında kesintiye gidildi.", cevap: "sag", neden: "G azaldı: daraltıcı." },
              { metin: "KDV oranı indirildi.", cevap: "sol", neden: "Vergi azaldı: genişletici." }
            ] },
          { tip: "tuzak", baslik: "Transfer G değildir; faiz de maliye değil", metin: "İki sık karışıklık var.", yanlis: "Emekli maaşları artınca G artar ve AD doğrudan kayar; Merkez Bankasının faiz indirimi de genişletici maliye politikasıdır.", dogru: "Transferler ==G'nin parçası değildir==: hane halkının gelirini artırır, AD'yi dolaylı etkiler. Faiz kararı Merkez Bankasındandır: ==para politikasıdır==, maliye politikası değil." }
        ]
      },
      {
        baslik: "Doğrudan ve dolaylı etki: harcama çarpanı vergi çarpanından büyüktür",
        kisa: "G, AD'yi doğrudan; vergi ve transferler dolaylı etkiler; bu yüzden G çarpanı daha büyüktür.",
        bloklar: [
          { tip: "tablo", baslik: "Aynı 100 TL, iki araç (MPC = 0,8)", head: ["", "Devlet harcaması (G ↑ 100)", "Vergi indirimi (T ↓ 100)"], rows: [
              ["AD'yi nasıl etkiler?", "Doğrudan: G, AD'nin bileşeni", "Dolaylı: önce harcanabilir gelir, sonra C"],
              ["İlk turda talebe giren", "100 TL (hepsi)", "80 TL (MPC × 100); 20 TL tasarruf"],
              ["Çarpan", "1 ÷ MPS = 5", "MPC ÷ MPS = 4"],
              ["Toplam etki (ΔY)", "+500 TL", "+400 TL"]
            ], vurgu: 3 },
          { tip: "not", metin: "Devlet harcaması bir AD bileşeni olduğu için ==doğrudan== artar. Vergi indirimi ise önce hane halkının cebine girer; ==bir kısmı biriktirilir==, kalanı harcanır (dolaylı etki). Bu yüzden *G multiplier* > *tax multiplier*: aynı büyüklükte harcama artışı, vergi indiriminden daha çok AD yaratır." }
        ]
      },
      {
        baslik: "Durgunluk açığında genişletici politika",
        kisa: "Açığı kapatmak için gereken harcama artışı, açık ÷ harcama çarpanıdır.",
        bloklar: [
          genis,
          { tip: "ornek", baslik: "Açığı kapatmak için ne kadar?",
            durum: "Bir ekonomide durgunluk açığı 60 milyar TL. MPC = 0,75. Fiyat düzeyinin sabit kaldığı varsayımıyla hükümet açığı kapatmak için harcamayı mı artırmalı, vergiyi mi azaltmalı; ne kadar?",
            adimlar: ["MPS = 0,25; harcama çarpanı = 4; vergi çarpanı = −3.", "Harcamayla: ΔG = 60 ÷ 4 = 15 milyar TL artış.", "Vergiyle: ΔT = 60 ÷ (−3) = −20, yani 20 milyar TL vergi indirimi.", "Kontrol: 4 × 15 = 60; (−3) × (−20) = 60."],
            sonuc: "==15 milyar TL ek harcama== ya da ==20 milyar TL vergi indirimi== açığı kapatır. Vergi için daha büyük rakam gerekir çünkü vergi çarpanı küçüktür. Not: grafikte fiyat düzeyi de yükseldiği için gerçek AD kayması açıktan büyük olmalıdır (burada AD 2 birim kayıyor, açık 1 birim)." }
        ]
      },
      {
        baslik: "Enflasyon açığında daraltıcı politika",
        kisa: "Açık yönüne göre politika seç: durgunlukta genişlet, enflasyonda daralt.",
        bloklar: [
          daral,
          { tip: "tablo", baslik: "Hangi açık, hangi politika?", head: ["Açık", "Politika", "Araçlar", "AD", "Sonuç"], rows: [
              ["Durgunluk (Y < Y∗, işsizlik yüksek)", "Genişletici", "G ↑, T ↓, transfer ↑", "Sağa", "Y↑, işsizlik↓, P↑"],
              ["Enflasyon (Y > Y∗, fiyat baskısı)", "Daraltıcı", "G ↓, T ↑, transfer ↓", "Sola", "Y↓, işsizlik↑, P↓"]
            ], not: "Politikanın amacı AD'yi kaydırıp çıktıyı Y∗'a getirmektir; araç fiyat düzeyini de etkiler." }
        ]
      },
      {
        baslik: "Gecikmeler: neden zamanlaması zordur?",
        kisa: "Karar ve uygulama zaman aldığı için politika çoğu zaman geç etkiler.",
        bloklar: [
          { tip: "adimlar", baslik: "Bir maliye politikasının yolculuğu", adimlar: [
              { baslik: "1 · Tanıma gecikmesi", metin: "Veriler geç açıklanır; sorunun fark edilmesi aylar sürer." },
              { baslik: "2 · Karar gecikmesi", metin: "Hükümet ve parlamento paketi tartışır, yasa çıkarır." },
              { baslik: "3 · Uygulama gecikmesi", metin: "İhaleler, bütçe aktarımı, vergi tablolarının değişmesi zaman alır." },
              { baslik: "4 · Etki gecikmesi", metin: "Harcama ekonomiye çarpan zinciriyle yayılana kadar daha fazla zaman geçer." }
            ] },
          { tip: "tuzak", baslik: "Politika her zaman tam vaktinde gelmez", metin: "Sınav, gecikmeleri maliye politikasının zayıf yönü olarak sorar.", yanlis: "Maliye politikası ihtiyaç doğduğu anda ve tam istenen miktarda AD'yi kaydırır.", dogru: "*Discretionary* politikada ==gecikmeler== vardır: karar ve uygulama sürerken ekonomi kendiliğinden toparlanabilir; paket gecikince genişletici politika enflasyon açığını büyütebilir." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Maliye politikası, tam istihdam gibi hedefler için devlet harcamaları (G) ile vergi ve transferleri değiştirmektir.",
              "G, AD'yi doğrudan; vergi ve transferler dolaylı etkiler. Transferler G'ye girmez.",
              "Harcama çarpanı (1 ÷ MPS) vergi çarpanından (MPC ÷ MPS) büyüktür.",
              "Durgunluk açığında genişletici politika (G↑, T↓, transfer↑): AD sağa, Y↑, işsizlik↓, P↑.",
              "Enflasyon açığında daraltıcı politika (G↓, T↑, transfer↓): AD sola, Y↓, P↓.",
              "Hesap: gereken ΔG = açık ÷ harcama çarpanı; gereken ΔT = açık ÷ vergi çarpanı (fiyat düzeyi sabit varsayımıyla).",
              "İsteğe bağlı maliye politikasının tanıma, karar ve uygulama gecikmeleri vardır; zamanlaması zor olur."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Aşağıdakilerden hangisi genişletici (*expansionary*) maliye politikasına örnektir?",
        opts: ["Gelir vergisi oranlarının artırılması", "Devlet harcamalarının azaltılması", "Merkez Bankasının politika faizini düşürmesi", "İşsizlik ödeneklerinin artırılması"], a: 3,
        why: "Transfer ödemelerinin artması hane halkının harcanabilir gelirini artırır ve AD'yi sağa kaydırır: genişletici maliye politikası. A ve B daraltıcıdır. C şıkkı cazip ama yanlış: faiz kararı Merkez Bankasındandır, para politikasıdır." },
      { q: "Bir ekonomide durgunluk açığı 100 milyar TL ve MPC = 0,8'dir. Fiyat düzeyinin sabit kaldığı varsayımıyla açığı yalnızca devlet harcamasıyla kapatmak için harcama ne kadar artırılmalıdır?",
        opts: ["20 milyar TL", "25 milyar TL", "100 milyar TL", "500 milyar TL"], a: 0,
        why: "Harcama çarpanı = 1 ÷ (1 − 0,8) = 5. ΔG = açık ÷ çarpan = 100 ÷ 5 = 20. B şıkkı yanlış çarpanı (4: vergi çarpanı) kullanır; D şıkkı çarpanla bölmek yerine çarpar." },
      { q: "MPC = 0,75 ve durgunluk açığı 60 milyar TL ise, fiyat düzeyi sabit varsayımıyla açığı yalnızca vergi indirimiyle kapatmak için vergiler ne kadar azaltılmalıdır?",
        opts: ["15 milyar TL", "20 milyar TL", "45 milyar TL", "60 milyar TL"], a: 1,
        why: "Vergi çarpanı = −MPC ÷ MPS = −0,75 ÷ 0,25 = −3. ΔT = 60 ÷ (−3) = −20: 20 milyar TL vergi indirimi. A şıkkı harcama çarpanını (4) kullanır; yani 60 ÷ 4. Vergi çarpanı küçük olduğu için vergi indirimi, harcama artışından daha büyük olmalıdır." },
      { q: "Grafikte ekonomi E noktasındadır. Tam istihdama dönmek için aşağıdakilerden hangisi uygun maliye politikasıdır?",
        opts: ["Devlet harcamalarını artırmak", "Vergileri azaltmak", "Devlet harcamalarını azaltmak ya da vergileri artırmak", "Transfer ödemelerini artırmak"], a: 2,
        fig: { type: "graph", xlabel: "Reel GSYİH", ylabel: "Fiyat düzeyi", xmax: 11, ymax: 10, lines: [{ from: [10, 3], to: [4, 9], label: "AD" }, { from: [2, 1], to: [10, 9], label: "SRAS" }, { from: [6, 0], to: [6, 9], label: "LRAS" }], points: [{ q: 7, p: 6, label: "E", guides: true }], caption: "E noktası LRAS'ın sağında" },
        why: "E, LRAS'ın sağındadır: enflasyon (pozitif çıktı) açığı. Çıktıyı Y∗'a indirmek için AD sola kaydırılmalı: daraltıcı politika (G↓ ya da T↑). A, B ve D AD'yi sağa kaydırır ve açığı büyütür." },
      { q: "Ekonomi durgunluktadır ve hükümet bir harcama paketi hazırlıyor. Paket meclisten çıkıp uygulanana kadar ekonomi kendiliğinden toparlanıyor. Bu durum maliye politikasının hangi sorununu gösterir ve olası sonucu nedir?",
        opts: ["Politika AD'yi hiç kaydırmaz", "Maliye politikası yalnızca SRAS'ı etkiler", "Çarpan etkisi vergi indiriminde daha büyüktür", "Karar ve uygulama gecikmeleri vardır; geç gelen genişletici politika enflasyon açığına yol açabilir"], a: 3,
        why: "İsteğe bağlı maliye politikasında karar ve uygulama gecikmeleri vardır. Etki geldiğinde ekonomi çoktan toparlanmışsa genişletici politika AD'yi gereksiz yere sağa kaydırır ve enflasyon açığı doğurabilir. A şıkkı yanlış: politika AD'yi kaydırır, sorun zamanlamadır." }
    ]
  };
})();
