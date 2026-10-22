/* Kitora not defteri · mi307 · 3.7 Tam Rekabet
   Kaynak: AP Micro CED, Topic 3.7 (PRD-3.A.1–9). Blok türleri: /ap/_kit/defter.js başı.
   Unit 3'ün ortak kantin verisi (FC 60): MC 9,3,3,9,21,39 · ATC 69,36,25,21,21,24 · en düşük ATC 21 (Q = 4–5).
   Piyasa: D: P = 51 − 0,6Q · S0 (7 firma): P = 19,5 + 0,3Q → E0 (35; 30) · S1 (10 firma): P = 6 + 0,3Q → E1 (50; 21).
   Yan yana grafik: firma paneli x = 0…7,5; piyasa paneli x = 8,5 + Q/10 (Q = 35 → 12; Q = 50 → 13,5); fiyat (y) ekseni ortaktır.
   Endüstri grafiği: D1: P = 51 − 0,6Q; D2: P = 63 − 0,6Q; LRS sabit: 21; artan: 11 + 0,2Q; azalan: 31 − 0,2Q. Yeni dengeler: (70; 21), (65; 24), (80; 15). */
window.DEFTER = (function () {
  function pts(f, a, b, s) {
    var r = [], x;
    for (x = a; x <= b + 1e-9; x += s) r.push([Math.round(x * 100) / 100, Math.round(f(x) * 100) / 100]);
    return r;
  }
  var avc = function (x) { return x * x - 6 * x + 14; };
  var MC0 = [[0.5, 9], [1.5, 3], [2.5, 3], [3.5, 9], [4.5, 21], [5.5, 39]];
  function ac(metin, acik, tumu, ek) {
    var o = { metin: metin, goster: acik, gizle: tumu.filter(function (x) { return acik.indexOf(x) < 0; }) };
    if (ek) o.set = ek;
    return o;
  }
  var Y = ["ttlF", "ttlM", "div", "d", "s0", "s0k", "s1", "e0m", "e1m", "vq0", "vq1", "pline", "pl", "mc", "atc", "f0", "f1", "kar", "okM"];
  var L = ["d1", "d1k", "d2", "lc", "li", "ld", "e1", "ec", "ei", "ed"];

  return {
    slug: "mi307",
    amac: "Bu konu tam rekabet piyasasını anlatıyor: çok sayıda küçük firmanın aynı ürünü sattığı, fiyatı kimsenin belirleyemediği piyasa. Fiyat alıcı firmanın kararını, firma ve piyasa grafiklerini yan yana okumayı, uzun dönem dengesini ve tam rekabetin neden verimli olduğunu öğreneceksin.",
    bolumler: [
      {
        baslik: "Tam rekabetin özellikleri",
        kisa: "Çok firma, özdeş ürün, serbest giriş ve çıkış: hiçbir firmanın piyasa gücü yoktur.",
        bloklar: [
          { tip: "harita", merkez: "*Perfect competition*", dallar: [
              { baslik: "Çok sayıda küçük firma", alt: "Her biri piyasanın küçük bir parçası → *price taker*" },
              { baslik: "Özdeş ürün", alt: "Alıcı için hangi firmadan alsa aynı" },
              { baslik: "Giriş ve çıkış engeli yok", alt: "Kâr varsa yeni firma girer, zarar varsa çıkar" },
              { baslik: "Piyasa gücü yok", alt: "Firma fiyatı belirlemez, piyasa fiyatını alır" }
            ] },
          { tip: "ikili", sol: { ikon: "🌾", baslik: "Tam rekabete uyar", maddeler: ["Çok sayıda küçük satıcı", "Özdeş ürün, serbest giriş"] },
            sag: { ikon: "🚫", baslik: "Tam rekabete uymaz", maddeler: ["Az sayıda ya da tek satıcı", "Farklılaştırılmış ürün ya da giriş engeli"] },
            oyun: [
              { metin: "Aynı cins buğdayı satan binlerce çiftçi.", cevap: "sol", neden: "Çok satıcı, özdeş ürün: fiyat alıcılar." },
              { metin: "Bir şehirde elektriği dağıtan tek şirket.", cevap: "sag", neden: "Tek satıcı: piyasa gücü var." },
              { metin: "Pazarda aynı cins domatesi satan onlarca tezgâh.", cevap: "sol", neden: "Özdeş ürün, kolay giriş: tam rekabete yakın." },
              { metin: "Patentli bir ilacın tek üreticisi.", cevap: "sag", neden: "Patent giriş engelidir, tek satıcı vardır." }
            ] }
        ]
      },
      {
        baslik: "Fiyat alıcı firma: yatay talep, sabit MR",
        kisa: "Firma bütün çıktısını piyasa fiyatından satar; bu yüzden P = MR = AR'dir.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "P", alt: "piyasa fiyatı" }, "=",
              { t: "MR", alt: "ek birimin geliri" }, "=",
              { t: "AR", alt: "birim başına gelir" }, "=",
              { t: "firmanın talebi", alt: "yatay çizgi" }
            ], aciklama: "Fiyat verili olduğundan her ek birim aynı fiyata satılır. Firma, fiyatı değil yalnızca üretim miktarını seçer." },
          { tip: "tablo", baslik: "Fiyat 30 TL olan piyasada tek bir firma", head: ["Q", "P", "TR (P × Q)", "MR", "AR"], rows: [
              ["1", "30", "30", "30", "30"],
              ["2", "30", "60", "30", "30"],
              ["3", "30", "90", "30", "30"],
              ["4", "30", "120", "30", "30"],
              ["5", "30", "150", "30", "30"]
            ], not: "Q arttıkça TR eşit adımlarla artar; MR (ΔTR ÷ ΔQ) hep 30, AR de hep 30'dur." },
          { tip: "tuzak", metin: "Piyasa talebi aşağı eğimlidir: fiyat düşünce piyasa daha çok alır. Ama tek bir firma piyasanın çok küçük bir parçasıdır.", yanlis: "Piyasa talebi aşağı eğimli olduğu için firmanın talebi de aşağı eğimlidir.", dogru: "Firmanın karşılaştığı talep, piyasa fiyatı düzeyinde yataydır (tam esnek). Fiyatı artırırsa hiç satamaz; indirmesi gereksizdir, çünkü zaten hepsini o fiyattan satabilir." }
        ]
      },
      {
        baslik: "Firma ve piyasa yan yana",
        kisa: "Fiyatı piyasa belirler, firma bu fiyata göre üretir, kâr giriş ve çıkışı tetikler.",
        bloklar: [
          { tip: "grafik", baslik: "Solda firma, sağda piyasa: ortak fiyat ekseni", xlabel: "Q  (firma | piyasa)", ylabel: "Fiyat (TL)", xmax: 16, ymax: 44,
            xticks: [{ v: 5, label: "5" }, { v: 12, label: "35" }, { v: 13.5, label: "50" }], yticks: [{ v: 21, label: "21" }, { v: 30, label: "30" }],
            ogeler: [
              { id: "ttlF", tip: "yazi", x: 3.5, y: 42, metin: "FİRMA" },
              { id: "ttlM", tip: "yazi", x: 12.2, y: 42, metin: "PİYASA" },
              { id: "div", tip: "ok", renk: 1, from: [8, 0], to: [8, 43] },
              { id: "d", tip: "cizgi", renk: 0, from: [9.67, 44], to: [15.5, 9], etiket: "D" },
              { id: "s0", tip: "cizgi", renk: 1, from: [8.5, 19.5], to: [15.5, 40.5], etiket: "S₀" },
              { id: "s0k", tip: "cizgi", renk: 1, kesik: true, from: [8.5, 19.5], to: [15.5, 40.5], etiket: "", gizli: true },
              { id: "s1", tip: "cizgi", renk: 2, from: [8.5, 6], to: [15.5, 27], etiket: "S₁", gizli: true },
              { id: "e0m", tip: "nokta", renk: 1, x: 12, y: 30, etiket: "E₀", gizli: true },
              { id: "e1m", tip: "nokta", renk: 2, x: 13.5, y: 21, etiket: "E₁", gizli: true },
              { id: "vq0", tip: "cizgi", renk: 1, kesik: true, from: [12, 0], to: [12, 30], etiket: "", gizli: true },
              { id: "vq1", tip: "cizgi", renk: 2, kesik: true, from: [13.5, 0], to: [13.5, 21], etiket: "", gizli: true },
              { id: "pline", tip: "cizgi", renk: 1, kesik: true, from: [0, 30], to: [15.5, 30], etiket: "", gizli: true },
              { id: "pl", tip: "yazi", x: 1.1, y: 31.6, metin: "P = 30", gizli: true },
              { id: "mc", tip: "egri", renk: 3, noktalar: MC0, etiket: "MC", gizli: true },
              { id: "atc", tip: "egri", renk: 0, noktalar: pts(function (x) { return avc(x) + 60 / x; }, 2, 6.5, 0.5), etiket: "ATC", gizli: true },
              { id: "f0", tip: "nokta", renk: 2, x: 5, y: 30, etiket: "Q = 5", gizli: true },
              { id: "f1", tip: "nokta", renk: 2, x: 4.5, y: 21, etiket: "P = MC = ATC", gizli: true },
              { id: "kar", tip: "alan", renk: 2, noktalar: [[0, 30], [5, 30], [5, 21], [0, 21]], gizli: true },
              { id: "okM", tip: "ok", renk: 2, from: [10.1, 24], to: [14.4, 24], gizli: true }
            ],
            durumlar: [
              ac("==Piyasa:== D ile S₀ kesişir; fiyat 30, miktar 35 (7 firma × 5 parti). Bu fiyat, tek tek firmaların göreceği ==verili== fiyattır.", ["ttlF", "ttlM", "div", "d", "s0", "e0m", "vq0", "pline", "pl"], Y),
              ac("==Firma:== aynı fiyat çizgisi, firmanın yatay talebi ve MR'sidir. MR = MC noktasında Q = 5 üretir; P = 30 > ATC = 21: ==ekonomik kâr 45 TL== (yeşil alan).", ["ttlF", "ttlM", "div", "d", "s0", "e0m", "vq0", "pline", "pl", "mc", "atc", "f0", "kar"], Y),
              ac("Kâr çekici, giriş serbest: yeni firmalar gelir ve piyasa arzı ==sağa== kayar (S₀ kesikli, S₁ yeni).", ["ttlF", "ttlM", "div", "d", "s0k", "s1", "e0m", "pline", "pl", "mc", "atc", "f0", "kar", "okM"], Y),
              ac("10 firma olunca denge E₁: ==fiyat 21, miktar 50==. Firmanın fiyat çizgisi ATC'nin en düşük noktasına iner; kâr alanı yok olur.", ["ttlF", "ttlM", "div", "d", "s0k", "s1", "e1m", "vq1", "pline", "pl", "mc", "atc", "f1"], Y,
                { pline: { from: [0, 21], to: [15.5, 21] }, pl: { y: 22.6, metin: "P = 21" } }),
              ac("Uzun dönem dengesi: ==P = MC== (tahsis etkinliği), ==P = en düşük ATC== (üretim etkinliği), ekonomik kâr sıfır. Zararlı başlangıç bunun tersidir: firmalar çıkar, fiyat 21'e yükselir.", ["ttlF", "ttlM", "div", "d", "s1", "e1m", "vq1", "pline", "pl", "mc", "atc", "f1"], Y)
            ] },
          { tip: "not", metin: "Yan yana grafiklerde fiyat (dikey eksen) ortaktır; miktar ise farklıdır: solda tek firmanın, sağda bütün piyasanın üretimi. Okuma sırası: (1) piyasada D ve S fiyatı belirler, (2) bu fiyat firmanın yatay MR çizgisi olur, (3) firma MR = MC'yi bulur ve ATC ile kıyaslar, (4) kâr ya da zarar firma sayısını, dolayısıyla piyasa arzını değiştirir." }
        ]
      },
      {
        baslik: "Uzun dönem dengesi: P = MC = en düşük ATC",
        kisa: "Uzun dönemde fiyat, firmaların en düşük ATC'sine iner ve ekonomik kâr sıfırlanır.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "P", alt: "piyasa fiyatı" }, "=",
              { t: "MC", alt: "MR = MC kuralı" }, "=",
              { t: "ATC", alt: "en düşük nokta" }
            ], aciklama: "Bu üç eşitlik birlikte yalnızca uzun dönem dengesinde sağlanır. Bütün firmalar etkin ölçekte (ATC'nin dibinde) üretir ve ekonomik kârı sıfırdır." },
          { tip: "tablo", baslik: "Kısa dönemden uzun döneme", head: ["Durum", "Fiyat", "Ekonomik sonuç", "Hareket", "Sonuç"], rows: [
              ["Kısa dönem: kâr", "P = 30 > ATC", "Ekonomik kâr", "Giriş: arz sağa", "Fiyat düşer"],
              ["Kısa dönem: zarar", "P = 15 < ATC", "Ekonomik zarar", "Çıkış: arz sola", "Fiyat yükselir"],
              ["Uzun dönem dengesi", "P = 21 = en düşük ATC", "Ekonomik kâr sıfır", "Giriş ve çıkış yok", "Denge"]
            ], vurgu: 2, not: "Sıfır ekonomik kâr = normal kâr: örtük maliyetler dahil bütün maliyetler karşılanır." },
          { tip: "tuzak", metin: "\"Kâr sıfır\" duyunca firma batıyor gibi düşünülür; oysa sıfır ekonomik kâr, örtük maliyetler dahil her şeyin karşılandığı anlamına gelir.", yanlis: "Uzun dönemde firmalar kâr edemediği için piyasadan çıkar.", dogru: "Sıfır ekonomik kârda kimse çıkmak ya da girmek istemez: firmalar normal kâr kazanır ve piyasa dengededir. P = en düşük ATC yalnızca uzun dönemde olur; kısa dönemde fiyat bunun altında ya da üstünde olabilir." }
        ]
      },
      {
        baslik: "Tam rekabet neden verimli?",
        kisa: "Uzun dönem dengesinde hem tahsis hem de üretim etkinliği sağlanır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🎯", terim: "Allocative efficiency", tr: "tahsis etkinliği", tanim: "P = MC: son birimin tüketiciye faydası (P = MB), onu üretmenin maliyetine eşit. Toplum tam doğru miktarı üretir.", ornek: "Son parti tostun alıcıya değeri 21 TL, üretmenin maliyeti de 21 TL." },
              { ikon: "🏭", terim: "Productive efficiency", tr: "üretim etkinliği", tanim: "Çıktıyı mümkün olan en düşük ortalama maliyetle üretmek: firma ATC'nin en düşük noktasında (etkin ölçekte) çalışır.", ornek: "Her firma 21 TL'lik en düşük ATC'de üretir." }
            ] },
          { tip: "ikili", sol: { ikon: "🎯", baslik: "*Allocative*: P = MC", maddeler: ["Doğru miktar üretilir", "Fiyat, MB ve MC'yi yansıtır"] },
            sag: { ikon: "🏭", baslik: "*Productive*: en düşük ATC", maddeler: ["Maliyet en düşük", "Etkin ölçekte üretim"] },
            oyun: [
              { metin: "Son birimin alıcıya değeri, üretim maliyetine eşit.", cevap: "sol", neden: "P = MB = MC: tahsis etkinliği." },
              { metin: "Firma ATC'nin en düşük noktasında üretiyor.", cevap: "sag", neden: "Birim maliyet en düşük: üretim etkinliği." },
              { metin: "Fiyat, son birimin marjinal maliyetini aynen yansıtıyor.", cevap: "sol", neden: "P = MC: tahsis etkinliği." },
              { metin: "Birim başına maliyet, ulaşılabilecek en düşük düzeyde.", cevap: "sag", neden: "En düşük ATC: üretim etkinliği." }
            ] },
          { tip: "not", metin: "Tam rekabette fiyat bir sinyaldir: tüketiciye ürünün üreticiye maliyetini, üreticiye de tüketicinin son birime verdiği değeri bildirir. Uzun dönem dengesinde fiyat bu iki değere de eşittir (P = MB = MC), bu yüzden kaynaklar boşa gitmez." }
        ]
      },
      {
        baslik: "Endüstri maliyet türleri: talep artınca uzun dönem fiyatı",
        kisa: "Uzun dönem fiyatı, endüstri büyürken firmaların maliyetinin değişip değişmediğine bağlıdır.",
        bloklar: [
          { tip: "grafik", baslik: "Talep artışı: üç tür endüstri", xlabel: "Piyasa miktarı (Q)", ylabel: "Fiyat (TL)", xmax: 100, ymax: 40,
            xticks: [{ v: 50, label: "50" }, { v: 65, label: "65" }, { v: 70, label: "70" }, { v: 80, label: "80" }], yticks: [{ v: 15, label: "15" }, { v: 21, label: "21" }, { v: 24, label: "24" }],
            ogeler: [
              { id: "d1", tip: "cizgi", renk: 0, from: [18.33, 40], to: [80, 3], etiket: "D₁" },
              { id: "d1k", tip: "cizgi", renk: 0, kesik: true, from: [18.33, 40], to: [80, 3], etiket: "", gizli: true },
              { id: "d2", tip: "cizgi", renk: 3, from: [38.33, 40], to: [100, 3], etiket: "D₂", gizli: true },
              { id: "lc", tip: "cizgi", renk: 2, from: [0, 21], to: [90, 21], etiket: "LRS", gizli: true },
              { id: "li", tip: "cizgi", renk: 2, from: [0, 11], to: [95, 30], etiket: "LRS", gizli: true },
              { id: "ld", tip: "cizgi", renk: 2, from: [0, 31], to: [95, 12], etiket: "LRS", gizli: true },
              { id: "e1", tip: "nokta", renk: 0, x: 50, y: 21, etiket: "E₁", kilavuz: true },
              { id: "ec", tip: "nokta", renk: 2, x: 70, y: 21, etiket: "70", kilavuz: true, gizli: true },
              { id: "ei", tip: "nokta", renk: 2, x: 65, y: 24, etiket: "65", kilavuz: true, gizli: true },
              { id: "ed", tip: "nokta", renk: 2, x: 80, y: 15, etiket: "80", kilavuz: true, gizli: true }
            ],
            durumlar: [
              ac("Başlangıç: D₁ ile uzun dönem dengesi E₁: ==fiyat 21, miktar 50==. Talep artarsa uzun dönemde fiyat ne olur? Cevap, endüstrinin maliyet yapısına bağlı.", ["d1", "e1"], L),
              ac("Talep artıyor: D₂ (eski D₁ kesikli). Kısa dönemde fiyat yükselir, kâr oluşur, yeni firmalar girer. Uzun dönemde son fiyat endüstri tipine göre değişir.", ["d1k", "d2", "e1"], L),
              ac("==Sabit maliyetli endüstri:== girdi fiyatları değişmez, firmaların maliyet eğrileri aynı kalır. Uzun dönem arz (LRS) yatay: fiyat ==21'de kalır==, miktar 70'e çıkar.", ["d1k", "d2", "e1", "lc", "ec"], L),
              ac("==Artan maliyetli endüstri:== endüstri büyüdükçe girdi fiyatları yükselir, firmaların maliyet eğrileri yukarı kayar. LRS yukarı eğimli: fiyat ==24'e yükselir==, miktar 65.", ["d1k", "d2", "e1", "li", "ei"], L),
              ac("==Azalan maliyetli endüstri:== endüstri büyüdükçe maliyetler düşer (ortak altyapı, uzman tedarikçiler). LRS aşağı eğimli: fiyat ==15'e düşer==, miktar 80.", ["d1k", "d2", "e1", "ld", "ed"], L)
            ] },
          { tip: "tablo", baslik: "Üç endüstri tipi", head: ["Tip", "Endüstri büyüyünce", "Firma maliyet eğrileri", "Uzun dönem arz (LRS)", "Talep artınca LR fiyat"], rows: [
              ["*Constant cost*", "Girdi fiyatları değişmez", "Kaymaz", "Yatay", "Aynı kalır"],
              ["*Increasing cost*", "Girdi fiyatları yükselir", "Yukarı kayar", "Yukarı eğimli", "Yükselir"],
              ["*Decreasing cost*", "Maliyetler düşer", "Aşağı kayar", "Aşağı eğimli", "Düşer"]
            ], not: "Her durumda uzun dönemde firmalar yine P = en düşük ATC (sıfır kâr) dengesine ulaşır. Uzun dönem fiyatı, firmaların uzun dönem maliyet eğrisinin hangi kısmında çalıştığına bağlıdır: endüstri büyürken bu eğri yukarı kayarsa fiyat yükselir, aşağı kayarsa düşer, kaymazsa aynı kalır." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Tam rekabet: çok sayıda küçük firma, özdeş ürün, giriş ve çıkış engeli yok, piyasa gücü yok.",
              "Firma *price taker*'dır: talebi yataydır; P = MR = AR. Bütün çıktısını piyasa fiyatından satar.",
              "Firma MR = MC (yani P = MC) noktasında Q üretir; kâr = (P − ATC) × Q.",
              "Yan yana grafik: fiyatı piyasa (D ve S) belirler; firma buna göre üretir; kâr/zarar giriş/çıkışla arzı kaydırır.",
              "Kısa dönemde fiyat uzun dönem düzeyinin üstünde ya da altında olabilir: kâr girişi, zarar çıkışı getirir.",
              "Uzun dönem dengesi: P = MC = en düşük ATC; ekonomik kâr sıfır; firmalar etkin ölçekte üretir.",
              "Bu denge hem tahsis etkin (P = MC = MB) hem üretim etkindir (en düşük ATC).",
              "Sabit, artan ve azalan maliyetli endüstriler: talep artınca uzun dönem fiyat aynı kalır, yükselir ya da düşer."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Mükemmel rekabetçi bir piyasadaki bir firmanın karşılaştığı talep eğrisi için hangisi doğrudur?",
        opts: ["Piyasa fiyatı düzeyinde yataydır; P = MR.", "Aşağı eğimlidir; MR < P.", "Yukarı eğimlidir.", "Fiyatı firma belirler."], a: 0,
        why: "Firma piyasanın çok küçük bir parçasıdır ve fiyatı etkileyemez (*price taker*). Karşılaştığı talep piyasa fiyatında yataydır; her ek birim aynı fiyata satılır, bu yüzden P = MR = AR. B en çekici yanlış şıktır: aşağı eğimli olan piyasa talebidir, tek firmanın talebi değil." },
      { q: "Fiyat alıcı bir firma ürününü 20 TL'ye satıyor ve MR = MC koşuluna göre 4 birim üretiyor. Bu üretim düzeyinde ATC 17 TL'dir. Firmanın ekonomik sonucu nedir?",
        opts: ["68 TL ekonomik kâr", "12 TL ekonomik zarar", "12 TL ekonomik kâr", "3 TL ekonomik kâr"], a: 2,
        why: "Kâr = (P − ATC) × Q = (20 − 17) × 4 = 12 TL ekonomik kâr. D çekicidir (3 TL birim kârdır, toplam kâr için Q ile çarpılmalı). A, yalnızca (P − ATC) yerine ATC × Q = 68 gibi bir maliyet büyüklüğünü kâr sanmaktır." },
      { q: "Grafik, fiyat alıcı bir firmanın yükselen MC eğrisini, piyasa fiyatını ve MR = MC olan miktardaki ATC'yi gösteriyor. Kısa dönemde ne olur?",
        fig: { type: "graph", xlabel: "Q", ylabel: "TL", xmax: 10, ymax: 12, lines: [{ from: [0, 1], to: [10, 11], label: "MC" }], hlines: [{ p: 6, label: "P = MR = 6" }], points: [{ q: 5, p: 6, label: "Q = 5", guides: true }, { q: 5, p: 4, label: "ATC = 4", guides: true }], yticks: [{ v: 4, label: "4" }, { v: 6, label: "6" }], xticks: [{ v: 5, label: "5" }] },
        opts: ["Ekonomik zarar vardır; firmalar çıkar.", "Ekonomik kâr vardır (10 TL); yeni firmalar girer.", "Ekonomik kâr sıfırdır; piyasa dengededir.", "Firma kapanma noktasındadır."], a: 1,
        why: "MC = 1 + Q, MR = 6 olduğunda Q = 5. P = 6 > ATC = 4: kâr = (6 − 4) × 5 = 10 TL. Engel yoksa kâr yeni firmaları çeker; arz sağa kayar, fiyat düşer. C yanlış: sıfır kâr için P = ATC olmalıydı." },
      { q: "Mükemmel rekabetçi bir piyasanın uzun dönem dengesi için hangisi doğrudur?",
        opts: ["Fiyat MC'den büyüktür.", "Firmalar ekonomik kâr eder.", "Firmalar ATC'nin yükselen kolunda üretir.", "P = MC = en düşük ATC; ekonomik kâr sıfırdır, hem tahsis hem üretim etkinliği vardır."], a: 3,
        why: "Uzun dönemde giriş ve çıkış kârı sıfıra indirir: P = en düşük ATC. Firma MR = MC kuralına uyduğu için P = MC de sağlanır. P = MC tahsis etkinliğini, en düşük ATC üretim etkinliğini verir. B çekici yanlış şıktır: ekonomik kâr varsa yeni firmalar girerdi, denge bozulurdu." },
      { q: "Artan maliyetli bir endüstride talep artıyor. Uzun dönemde piyasa fiyatına ne olur?",
        opts: ["Aynı kalır.", "Yükselir.", "Düşer.", "Önce yükselir, sonra tekrar eski düzeyine döner."], a: 1,
        why: "Artan maliyetli endüstride endüstri büyüdükçe girdi fiyatları yükselir ve firmaların maliyet eğrileri yukarı kayar; uzun dönem arz eğrisi yukarı eğimlidir. Talep artınca yeni uzun dönem dengesi daha yüksek fiyatta kurulur. A, sabit maliyetli endüstrinin sonucudur; en çekici yanlış şık budur." }
    ]
  };
})();
