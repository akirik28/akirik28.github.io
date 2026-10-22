/* Kitora not defteri · mi203 · 2.3 Talebin Fiyat Esnekliği
   Kaynak: AP Micro CED, Topic 2.3 (MKT-3.E.1–5). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = (function () {
  /* Yardımcı: yalnız `acik` listesindeki ögeler görünür; geri kalan ögeler gizlenir (set, kümülatif) */
  function graf(o) {
    var ids = o.ogeler.map(function (e) { return e.id; });
    o.durumlar = o.durumlar.map(function (d) {
      var r = { metin: d[0], goster: d[1], gizle: ids.filter(function (i) { return d[1].indexOf(i) < 0; }) };
      if (d[2]) r.set = d[2];
      return r;
    });
    o.tip = "grafik";
    return o;
  }
  /* Toplam gelir dikdörtgeni: miktar q, fiyat p (grafik birimleriyle; 1 birim = 10 TL ve 10 bilet) */
  function dik(q, p) { return [[0, 0], [q, 0], [q, p], [0, p]]; }
  function tr(q, p) { return { tr: { noktalar: dik(q, p) }, A: { x: q, y: p }, t: { x: q / 2, y: p / 2, metin: "TR " + (q * p * 10 * 10) } }; }

  return {
    slug: "mi203",
    amac: "Bu konu *price elasticity of demand* yani talebin fiyat esnekliğini anlatıyor: fiyat değişince talep edilen miktar yüzde kaç değişir? Formülü, orta nokta yöntemini, elastik ve inelastik ayrımını, toplam gelir testini ve esnekliği belirleyen etkenleri öğreneceksin.",
    bolumler: [
      {
        baslik: "Esneklik: miktar fiyata ne kadar duyarlı?",
        kisa: "Esneklik, fiyat yüzde 1 değişince miktarın yüzde kaç değiştiğini ölçer.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "E_d", alt: "talebin fiyat esnekliği" }, "=",
              { t: "%ΔQd", alt: "talep edilen miktardaki yüzde değişim" }, "÷",
              { t: "%ΔP", alt: "fiyattaki yüzde değişim" }
            ], aciklama: "Yüzdeyle ölçüldüğü için esneklik birimsizdir; fiyatı TL ya da kuruş cinsinden yazmak sonucu değiştirmez." },
          { tip: "kavramlar", kartlar: [
              { ikon: "📏", terim: "Elasticity", tr: "esneklik", tanim: "Bir miktarın, onu etkileyen bir değişkene (fiyat, gelir, başka bir malın fiyatı) verdiği tepkinin yüzde olarak büyüklüğü.", ornek: "Bilet %10 zamlanınca satış %20 düşüyorsa tepki büyüktür." },
              { ikon: "💵", terim: "Total revenue", tr: "toplam gelir", tanim: "Fiyat × satılan miktar. Alıcı tarafında aynı tutar *total expenditure* (toplam harcama) olur.", ornek: "50 TL × 40 bilet = 2000 TL." }
            ] },
          { tip: "not", metin: "Talep yasası yüzünden %ΔQd ile %ΔP ==zıt işaretlidir==, yani E_d negatiftir. AP'de genellikle ==mutlak değer== (*magnitude*) kullanılır: |E_d| = 2, fiyat %1 artınca miktarın yaklaşık %2 azalması demektir." }
        ]
      },
      {
        baslik: "Orta nokta (*midpoint*) yöntemi",
        kisa: "Yüzde değişimi, başlangıç değere değil iki değerin ortalamasına bölerek bulunur.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "%ΔQ", alt: "yüzde değişim" }, "=",
              { t: "Q₂ − Q₁", alt: "fark" }, "÷",
              { t: "(Q₁ + Q₂) / 2", alt: "ortalama" }
            ], aciklama: "%ΔP için aynı kalıp: (P₂ − P₁) ÷ ((P₁ + P₂) / 2). Soru hangi yöntemi istiyorsa onu kullan." },
          { tip: "ornek", baslik: "Sinema bileti zamlandı", durum: "Bilet 40 TL'den 60 TL'ye çıkıyor; günlük satış 70 biletten 30'a düşüyor.",
            adimlar: ["%ΔP = (60 − 40) ÷ ((40 + 60) / 2) = 20 ÷ 50 = %40.", "%ΔQ = (30 − 70) ÷ ((70 + 30) / 2) = −40 ÷ 50 = −%80.", "E_d = −80 ÷ 40 = −2; mutlak değeri 2."],
            sonuc: "|E_d| = 2 > 1: talep ==elastik==. Fiyat %1 artınca miktar yaklaşık %2 düşer." },
          { tip: "tuzak", metin: "Başlangıç değerine bölen yöntemde aynı aralık yöne göre farklı sonuç verir.", yanlis: "40'tan 60'a çıkış ile 60'tan 40'a iniş için esneklik farklıdır.", dogru: "*Midpoint* yönteminde iki yönde de ==aynı== sonuç çıkar: fark aynı, ortalama aynıdır. Başlangıç değere bölersen 40→60 %50, 60→40 %33 çıkar." }
        ]
      },
      {
        baslik: "Elastik, inelastik, birim elastik",
        kisa: "|E_d| 1'den büyükse elastik, küçükse inelastik, eşitse birim elastiktir.",
        bloklar: [
          { tip: "tablo", baslik: "Esnekliğin sınıfları", head: ["|E_d|", "Ad", "Anlamı"], rows: [
              ["> 1", "Elastik (*elastic*)", "Miktar yüzdece fiyattan daha çok değişir"],
              ["< 1", "İnelastik (*inelastic*)", "Miktar yüzdece fiyattan daha az değişir"],
              ["= 1", "Birim elastik (*unit elastic*)", "İki yüzde değişim eşittir"],
              ["0", "Tam inelastik (*perfectly inelastic*)", "Fiyat ne olursa miktar sabit; dikey eğri"],
              ["∞", "Tam elastik (*perfectly elastic*)", "Fiyat az artsa talep sıfıra iner; yatay eğri"]
            ] },
          graf({ baslik: "Uç durumlar ve eğim", xlabel: "Miktar", ylabel: "Fiyat", xmax: 11, ymax: 10, xticks: [], yticks: [],
            ogeler: [
              { id: "v", tip: "cizgi", renk: 0, from: [5, 0], to: [5, 9], etiket: "|E| = 0" },
              { id: "h", tip: "cizgi", renk: 0, from: [0, 5], to: [9, 5], etiket: "|E| = ∞" },
              { id: "dik", tip: "cizgi", renk: 0, from: [4, 9], to: [6, 1], etiket: "dik: daha inelastik" },
              { id: "yat", tip: "cizgi", renk: 3, from: [1, 7], to: [9, 3], etiket: "yatık: daha elastik" },
              { id: "N", tip: "nokta", renk: 1, x: 5, y: 5, etiket: "N" }
            ],
            durumlar: [
              ["**Dikey** talep: fiyat ne olursa olsun miktar sabit. |E_d| = 0, *perfectly inelastic*. Yaklaşık örnek: hayat kurtaran ilaç.", ["v"]],
              ["**Yatay** talep: fiyat bir tık artsa miktar sıfıra iner. |E_d| = ∞, *perfectly elastic*. Örnek: piyasa fiyatından pahalı satmaya kalkan tek bir buğday çiftçisi.", ["h"]],
              ["Aynı N noktasından geçen iki doğrusal eğri: ==dik olan daha inelastik==, yatık olan daha elastiktir.", ["dik", "yat", "N"]]
            ] })
        ]
      },
      {
        baslik: "Eğim esneklik değildir",
        kisa: "Doğrusal talepte eğim sabittir ama esneklik eğri boyunca değişir.",
        bloklar: [
          graf({ baslik: "Tek bir doğru: üst yarı elastik, alt yarı inelastik", xlabel: "Miktar", ylabel: "Fiyat", xmax: 11, ymax: 11, xticks: [], yticks: [],
            ogeler: [
              { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [10, 0], etiket: "D" },
              { id: "A", tip: "nokta", renk: 1, x: 2, y: 8, etiket: "|E| = 4", kilavuz: true },
              { id: "B", tip: "nokta", renk: 3, x: 5, y: 5, etiket: "|E| = 1", kilavuz: true },
              { id: "C", tip: "nokta", renk: 2, x: 8, y: 2, etiket: "|E| = ¼", kilavuz: true },
              { id: "up", tip: "yazi", x: 2.4, y: 9.6, metin: "elastik bölge", hiza: "start" },
              { id: "lo", tip: "yazi", x: 7.2, y: 3.8, metin: "inelastik bölge", hiza: "start" }
            ],
            durumlar: [
              ["D doğrusal: eğim her yerde aynı (−1). Esneklik de aynı mı?", ["D"]],
              ["Üstte fiyat yüksek, miktar küçük: P/Q = 8/2 = 4. Esneklik büyük, talep ==elastik==.", ["D", "A"]],
              ["Tam ortada P/Q = 1: ==birim elastik==. Fiyat artınca gelir ne artar ne azalır.", ["D", "A", "B"]],
              ["Altta fiyat düşük, miktar büyük: P/Q = 2/8 = ¼. Talep ==inelastik==.", ["D", "A", "B", "C"]],
              ["Eğim aynı kaldı ama eğri boyunca elastik → birim elastik → inelastik değişti.", ["D", "A", "B", "C", "up", "lo"]]
            ] }),
          { tip: "tuzak", metin: "“Dik eğri inelastik” kuralı yalnızca aynı noktadan geçen iki eğriyi karşılaştırırken işe yarar.", yanlis: "Eğim esnekliğe eşittir; dik eğri her noktada inelastiktir.", dogru: "Eğim birime bağlıdır, esneklik yüzdeye. Doğrusal talepte ==aynı eğri== hem elastik hem inelastik bölge taşır (|E| = P/Q × 1/|eğim|)." }
        ]
      },
      {
        baslik: "Toplam gelir testi",
        kisa: "Elastikte fiyat ve gelir ters yöne, inelastikte aynı yöne hareket eder.",
        bloklar: [
          graf({ baslik: "Fiyat düşerken toplam gelir (dikdörtgenin alanı)", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 11, ymax: 11,
            xticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 5, label: "50" }, { v: 7, label: "70" }, { v: 8, label: "80" }],
            yticks: [{ v: 2, label: "20" }, { v: 3, label: "30" }, { v: 5, label: "50" }, { v: 6, label: "60" }, { v: 8, label: "80" }],
            ogeler: [
              { id: "tr", tip: "alan", renk: 2, noktalar: dik(2, 8) },
              { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [10, 0], etiket: "D" },
              { id: "A", tip: "nokta", renk: 1, x: 2, y: 8, etiket: "", kilavuz: true },
              { id: "t", tip: "yazi", x: 1, y: 4, metin: "TR 1600" }
            ],
            durumlar: [
              ["Talep: Qd = 100 − P. Toplam gelir (*total revenue*) = P × Q.", ["D"]],
              ["Fiyat 80 TL, miktar 20: TR = 80 × 20 = 1600 TL. Dikdörtgenin alanı toplam gelirdir.", ["D", "tr", "A", "t"], tr(2, 8)],
              ["Fiyat 60 TL'ye düştü, miktar 40: TR = 2400. Fiyat ↓, gelir ↑: bu bölgede talep ==elastik==.", ["D", "tr", "A", "t"], tr(4, 6)],
              ["Fiyat 50 TL: TR = 2500, en yüksek nokta. Burada |E| = 1 (birim elastik).", ["D", "tr", "A", "t"], tr(5, 5)],
              ["Fiyat 30 TL'ye düştü: TR = 2100. Fiyat ↓, gelir ↓: talep ==inelastik==.", ["D", "tr", "A", "t"], tr(7, 3)],
              ["Fiyat 20 TL: TR = 1600. Aşağı indikçe gelir daha da azaldı.", ["D", "tr", "A", "t"], tr(8, 2)]
            ] }),
          { tip: "tablo", baslik: "Toplam gelir testi", head: ["Talep", "Fiyat artarsa", "Fiyat düşerse"], rows: [
              ["Elastik (|E| > 1)", "TR azalır", "TR artar"],
              ["İnelastik (|E| < 1)", "TR artar", "TR azalır"],
              ["Birim elastik (|E| = 1)", "TR değişmez", "TR değişmez"]
            ], not: "Satıcının geliri alıcının harcamasıdır: aynı tutara alıcı tarafında *total expenditure* denir." },
          { tip: "tuzak", metin: "Gelir testi yönlere bağlıdır.", yanlis: "Fiyat artınca satıcının geliri artar.", dogru: "Talep ==elastikse== fiyat artışı geliri ==azaltır==. Önce |E|'yi bul, sonra yönü söyle." }
        ]
      },
      {
        baslik: "Esnekliği belirleyen etkenler",
        kisa: "İkame çoksa, mal zorunlu değilse, bütçede büyükse ve zaman uzunsa talep elastiktir.",
        bloklar: [
          { tip: "liste", maddeler: [
              { ikon: "🔁", baslik: "*Availability of substitutes*: ikame bulunabilirliği", metin: "En önemli etken: çok ikame varsa fiyat artınca alıcı kaçar, talep elastiktir." },
              { ikon: "💊", baslik: "Zorunluluk ya da lüks", metin: "Zorunlu mallar inelastik, lüks mallar elastiktir." },
              { ikon: "👛", baslik: "Bütçedeki pay", metin: "Gelirin büyük kısmını alan mal fiyat değişimine daha duyarlı, yani daha elastiktir." },
              { ikon: "⏳", baslik: "Zaman ufku", metin: "Zaman uzadıkça alıcı alternatif bulur: talep uzun dönemde daha elastiktir." },
              { ikon: "🔍", baslik: "Piyasanın tanımı", metin: "Geniş tanım (“yemek”) inelastik, dar tanım (“X marka pizza”) elastiktir." }
            ] },
          { tip: "ikili", sol: { ikon: "🔀", baslik: "Elastik talep", maddeler: ["Çok ikame, lüks, bütçede büyük pay", "Fiyat artınca alıcı kolayca vazgeçer"] },
            sag: { ikon: "🧱", baslik: "İnelastik talep", maddeler: ["Az ikame, zorunlu, bütçede küçük pay", "Fiyat artsa da alınmak zorunda"] },
            oyun: [
              { metin: "Belirli bir marka çikolata (benzer onlarca marka var).", cevap: "sol", neden: "İkame çok: elastik." },
              { metin: "Astımlı birinin solunum spreyi.", cevap: "sag", neden: "Zorunlu ve ikamesi yok: inelastik." },
              { metin: "Yurt dışı tatil paketi.", cevap: "sol", neden: "Lüks ve ertelenebilir: elastik." },
              { metin: "Sofra tuzu (bütçede çok küçük, ikamesi yok).", cevap: "sag", neden: "Fiyatı ödemeye değmeyecek kadar küçük pay: inelastik." }
            ] }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "E_d = %ΔQd ÷ %ΔP; negatif çıkar, mutlak değer alınır.",
              "*Midpoint*: yüzde değişim = fark ÷ ortalama; iki yönde aynı sonuç verir.",
              "|E| > 1 elastik, |E| < 1 inelastik, |E| = 1 birim elastik; dikey eğri 0, yatay eğri ∞.",
              "Eğim esneklik değildir; doğrusal talepte üst yarı elastik, orta nokta birim elastik, alt yarı inelastiktir.",
              "Toplam gelir testi: elastikte fiyat↑ → TR↓, inelastikte fiyat↑ → TR↑, birim elastikte TR değişmez.",
              "TR = P × Q; alıcı için aynı tutar *total expenditure*dır.",
              "Esnekliği artıranlar: çok ikame, lüks mal, büyük bütçe payı, uzun zaman, dar piyasa tanımı.",
              "Aynı noktadan geçen iki eğriden dik olan daha inelastiktir."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Bir kafe kahvenin fiyatını 8 TL'den 12 TL'ye çıkarıyor; günlük satış 60 fincandan 40 fincana düşüyor. Orta nokta yöntemiyle |E_d| kaçtır?",
        opts: ["0,67", "1,5", "2", "1"], a: 3,
        why: "%ΔP = 4 ÷ 10 = %40; %ΔQ = 20 ÷ 50 = %40; oran 1 yani birim elastik. 0,67 yanlış yöntemin sonucudur: başlangıç değere bölünce %33 ÷ %50 çıkar." },
      { q: "Bir müzik platformu abonelik ücretini %10 artırıyor ve abone sayısı %4 düşüyor. Doğru yorum hangisidir?",
        opts: ["Talep elastiktir; toplam gelir azalır.", "|E_d| = 0,4; talep inelastiktir ve toplam gelir artar.", "|E_d| = 2,5; talep elastiktir ve toplam gelir artar.", "Talep birim elastiktir; toplam gelir değişmez."], a: 1,
        why: "|E_d| = %4 ÷ %10 = 0,4 < 1: inelastik. İnelastik talepte fiyat artışı geliri artırır. 2,5 oranı ters bölünmüş halidir; payı ile paydası karıştırılmıştır." },
      { q: "Aşağıdaki mallardan hangisinin talebinin fiyat esnekliğinin en düşük (en inelastik) olması beklenir?",
        opts: ["Belirli bir marka çikolata", "Yurt dışı tatil paketi", "Kronik hastanın düzenli kullandığı, ikamesi olmayan ilaç", "Haftada bir gidilen restoranda yemek"], a: 2,
        why: "İkamesi olmayan zorunlu bir mal, fiyat artsa da alınır: inelastiktir. Marka çikolatanın çok ikamesi, tatil ve restoranın ise ertelenebilir lüks niteliği vardır; üçü de daha elastiktir." },
      { q: "Doğrusal, aşağı eğimli bir talep eğrisinde yukarıdan aşağıya doğru inildikçe fiyat esnekliği nasıl değişir?",
        opts: ["Sabit kalır, çünkü eğim sabittir.", "Önce inelastik, sonra elastik olur.", "Hep birim elastik kalır.", "Elastik bölgeden inelastik bölgeye geçer."], a: 3,
        why: "Üstte P/Q büyük olduğundan talep elastiktir; orta noktada birim elastiktir; altta inelastiktir. “Eğim sabit, esneklik de sabit” en çekici yanlış şıktır; eğim esneklik değildir." },
      { q: "Grafikte fiyat 80 TL'den 60 TL'ye düşüyor (A → B). Bu aralıkta talep ve toplam gelir için hangisi doğrudur?",
        fig: { type: "graph", xlabel: "Miktar (adet)", ylabel: "Fiyat (TL)", xmax: 11, ymax: 11, lines: [{ from: [0, 10], to: [10, 0], label: "D" }], points: [{ q: 2, p: 8, label: "A", guides: true }, { q: 4, p: 6, label: "B", guides: true }], xticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }], yticks: [{ v: 6, label: "60" }, { v: 8, label: "80" }] },
        opts: ["Elastik; toplam gelir artar.", "Elastik; toplam gelir azalır.", "İnelastik; toplam gelir artar.", "İnelastik; toplam gelir azalır."], a: 0,
        why: "TR, A'da 80 × 20 = 1600, B'de 60 × 40 = 2400: arttı. Fiyat düşerken gelir artıyorsa talep elastiktir (orta nokta: %ΔQ ≈ %67, %ΔP ≈ %29, |E| ≈ 2,3). İnelastik şıkları fiyat düşünce gelirin azalmasını gerektirirdi." }
    ]
  };
})();
