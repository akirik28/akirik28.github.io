/* Kitora not defteri · mi604 · 6.4 Farklı Piyasalarda Devlet Müdahalesi
   Kaynak: CED Topic 6.4 (POL-4.A). Blok türleri: /ap/_kit/defter.js başı.
   Sayılar:
   Vergi/sübvansiyon: D y=10−x, S y=x, vergi 2 → alıcı 6, satıcı 4, Q 5→4; sübvansiyon 2 → alıcı 4, satıcı 6, Q 5→6. 1 birim = 10 bardak, 1 TL.
   Esneklik: vergi 3; dik talep y=15−2x → (4,7)/(4); yatık talep y=7.5−0.5x → (3,6)/(3).
   Tekel: D y=10−x, MR y=10−2x, MC=ATC=2; Qm=4 Pm=6; etkin 8; tavan 4 → Q=6; tavan 2 → Q=8. 1 birim = 10 bilet, 10 TL (alan = 100 TL).
   Doğal tekel: ATC = 2 + 8/x; P=MC=2 → Q=8, ATC=3, zarar 8 birim = 800 TL = götürü sübvansiyon.
   Monopson: MRP=6−x, S=x, MRC=2x; taban 3 → L=3; taban 5 → L=1, arz 5. */
window.DEFTER = (function () {
  function graf(baslik, xl, yl, xmax, xt, yt, og, ds) {
    var ids = og.map(function (o) { return o.id; });
    return {
      tip: "grafik", baslik: baslik, xlabel: xl, ylabel: yl, xmax: xmax, ymax: 10, xticks: xt, yticks: yt, ogeler: og,
      durumlar: ds.map(function (d) {
        var o = { metin: d[0], goster: d[1], gizle: ids.filter(function (x) { return d[1].indexOf(x) < 0; }) };
        if (d[2]) o.set = d[2];
        return o;
      })
    };
  }

  var VER = [
    { id: "rev", tip: "alan", renk: 3, noktalar: [[0, 4], [4, 4], [4, 6], [0, 6]], gizli: true },
    { id: "trev", tip: "yazi", x: 2, y: 4.8, metin: "Vergi geliri", gizli: true },
    { id: "dwT", tip: "alan", renk: 2, noktalar: [[4, 6], [5, 5], [4, 4]], gizli: true },
    { id: "cost", tip: "alan", renk: 3, noktalar: [[0, 4], [6, 4], [6, 6], [0, 6]], gizli: true },
    { id: "tcost", tip: "yazi", x: 3, y: 4.8, metin: "Hükümetin maliyeti", gizli: true },
    { id: "dwS", tip: "alan", renk: 2, noktalar: [[5, 5], [6, 6], [6, 4]], gizli: true },
    { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [9, 1], etiket: "D" },
    { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [9, 9], etiket: "S" },
    { id: "St", tip: "cizgi", renk: 2, from: [0, 2], to: [7.5, 9.5], etiket: "S+t", gizli: true },
    { id: "Ss", tip: "cizgi", renk: 3, from: [2, 0], to: [9, 7], etiket: "S−s", gizli: true },
    { id: "E0", tip: "nokta", renk: 3, x: 5, y: 5, etiket: "E₀", kilavuz: true },
    { id: "E1", tip: "nokta", renk: 2, x: 4, y: 6, etiket: "E₁", kilavuz: true, gizli: true },
    { id: "P1", tip: "nokta", renk: 1, x: 4, y: 4, etiket: "", kilavuz: true, gizli: true },
    { id: "E2", tip: "nokta", renk: 2, x: 6, y: 4, etiket: "E₂", kilavuz: true, gizli: true },
    { id: "P2", tip: "nokta", renk: 1, x: 6, y: 6, etiket: "", kilavuz: true, gizli: true }
  ];

  var ESN = [
    { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [9, 9], etiket: "S" },
    { id: "St", tip: "cizgi", renk: 2, from: [0, 3], to: [6.5, 9.5], etiket: "S+t", gizli: true },
    { id: "Di", tip: "cizgi", renk: 0, from: [2.5, 10], to: [7.5, 0], etiket: "D₁" },
    { id: "De", tip: "cizgi", renk: 3, from: [0, 7.5], to: [8.5, 3.25], etiket: "D₂", gizli: true },
    { id: "E0", tip: "nokta", renk: 3, x: 5, y: 5, etiket: "E₀", kilavuz: true },
    { id: "Ei", tip: "nokta", renk: 2, x: 4, y: 7, etiket: "E₁", kilavuz: true, gizli: true },
    { id: "Pi", tip: "nokta", renk: 1, x: 4, y: 4, etiket: "", kilavuz: true, gizli: true },
    { id: "Ee", tip: "nokta", renk: 2, x: 3, y: 6, etiket: "E₁", kilavuz: true, gizli: true },
    { id: "Pe", tip: "nokta", renk: 1, x: 3, y: 3, etiket: "", kilavuz: true, gizli: true }
  ];

  var MON = [
    { id: "dwl", tip: "alan", renk: 2, noktalar: [[4, 6], [4, 2], [8, 2]], gizli: true },
    { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [9, 1], etiket: "D" },
    { id: "MR", tip: "cizgi", renk: 3, from: [0, 10], to: [5, 0], etiket: "MR", gizli: true },
    { id: "MC", tip: "cizgi", renk: 1, from: [0, 2], to: [9, 2], etiket: "MC" },
    { id: "tv", tip: "cizgi", renk: 2, from: [0, 4], to: [6, 4], etiket: "", gizli: true },
    { id: "tvl", tip: "yazi", x: 1.2, y: 4.5, metin: "tavan", gizli: true },
    { id: "pt", tip: "nokta", renk: 3, x: 4, y: 6, etiket: "M", kilavuz: true, gizli: true }
  ];

  var DOG = [
    { id: "kar", tip: "alan", renk: 1, noktalar: [[0, 4], [4, 4], [4, 6], [0, 6]], gizli: true },
    { id: "tkar", tip: "yazi", x: 2, y: 4.9, metin: "kâr", gizli: true },
    { id: "zarar", tip: "alan", renk: 2, noktalar: [[0, 2], [8, 2], [8, 3], [0, 3]], gizli: true },
    { id: "tzar", tip: "yazi", x: 4, y: 2.3, metin: "zarar: 800 TL", gizli: true },
    { id: "sub", tip: "alan", renk: 1, noktalar: [[0, 2], [8, 2], [8, 3], [0, 3]], gizli: true },
    { id: "tsub", tip: "yazi", x: 4, y: 2.3, metin: "sübvansiyon: 800 TL", gizli: true },
    { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [9, 1], etiket: "D" },
    { id: "MR", tip: "cizgi", renk: 3, from: [0, 10], to: [5, 0], etiket: "MR", gizli: true },
    { id: "MC", tip: "cizgi", renk: 1, from: [0, 2], to: [9, 2], etiket: "MC" },
    { id: "ATC", tip: "egri", renk: 2, noktalar: [[1.2, 8.67], [2, 6], [3, 4.67], [4, 4], [6, 3.33], [8, 3], [9.5, 2.84]], etiket: "ATC" },
    { id: "M", tip: "nokta", renk: 3, x: 4, y: 6, etiket: "M", kilavuz: true, gizli: true },
    { id: "E", tip: "nokta", renk: 3, x: 8, y: 2, etiket: "E", kilavuz: true, gizli: true }
  ];

  var WAG = [
    { id: "dwl", tip: "alan", renk: 2, noktalar: [[2, 4], [3, 3], [2, 2]], gizli: true },
    { id: "mrp", tip: "cizgi", renk: 0, from: [0, 6], to: [6, 0], etiket: "MRP" },
    { id: "s", tip: "cizgi", renk: 1, from: [0, 0], to: [6, 6], etiket: "S" },
    { id: "mrc", tip: "cizgi", renk: 2, from: [0, 0], to: [3.4, 6.8], etiket: "MRC" },
    { id: "fl", tip: "cizgi", renk: 3, from: [0, 3], to: [6.6, 3], etiket: "", gizli: true },
    { id: "tfl", tip: "yazi", x: 6.6, y: 2.4, metin: "taban", hiza: "end", gizli: true },
    { id: "A", tip: "nokta", renk: 3, x: 2, y: 4, etiket: "A", kilavuz: true },
    { id: "B", tip: "nokta", renk: 1, x: 2, y: 2, etiket: "B", kilavuz: true },
    { id: "C", tip: "nokta", renk: 3, x: 3, y: 3, etiket: "C", kilavuz: true, gizli: true },
    { id: "Ls", tip: "nokta", renk: 1, x: 5, y: 5, etiket: "Ls", gizli: true },
    { id: "ok", tip: "ok", renk: 2, from: [1.3, 5.45], to: [4.7, 5.45], gizli: true },
    { id: "tis", tip: "yazi", x: 4.4, y: 5.9, metin: "işsizlik", gizli: true }
  ];

  return {
    slug: "mi604",
    amac: "Bu konu devletin piyasalara müdahalesini farklı piyasa yapılarında inceliyor. Birim başı ve götürü vergi ile sübvansiyonu, verginin yükünü esnekliğin nasıl paylaştırdığını, tavan ve tabanın tekelde ve monopsonda etkisini, doğal tekeli ve rekabet politikasını öğreneceksin.",
    bolumler: [
      {
        baslik: "Birim başı mı, götürü mü?",
        kisa: "Birim başı vergi marjinal maliyeti değiştirir; götürü vergi değiştirmez.",
        bloklar: [
          { tip: "ikili",
            sol: { ikon: "🧾", baslik: "Birim başı (*per-unit*)", maddeler: ["Her satılan birim için ödenir", "MC (ve arz) değişir", "Miktar değişir"] },
            sag: { ikon: "📄", baslik: "Götürü (*lump-sum*)", maddeler: ["Üretimden bağımsız tek seferlik tutar", "MC ve MB değişmez", "Yalnızca sabit maliyet etkilenir"] },
            oyun: [
              { metin: "Satılan her simit için 2 TL vergi.", cevap: "sol", neden: "Birim başına: MC artar." },
              { metin: "Fırına yılda bir kez 5.000 TL ruhsat harcı.", cevap: "sag", neden: "Üretimden bağımsız: götürü." },
              { metin: "Satılan her kitap için 3 TL sübvansiyon.", cevap: "sol", neden: "Birim başına: MC azalır." },
              { metin: "Öğrenci kafesine tek seferlik 1.000 TL destek.", cevap: "sag", neden: "Üretimden bağımsız: götürü." }
            ] },
          { tip: "ornek", baslik: "Götürü vergi çıktıyı değiştirmez",
            durum: "Simit fırınının günlük kârı 1.000 TL. Belediye bir kerelik 600 TL götürü ruhsat vergisi koyuyor.",
            adimlar: [
              "Firma MR = MC'ye göre üretir. MC ve MR değişmedi.",
              "Üretim miktarı ve fiyat aynı kalır.",
              "Yalnızca sabit maliyet 600 TL artar: kâr 1.000 − 600 = 400 TL.",
              "Kâr negatife dönerse firma uzun dönemde piyasadan çıkar."
            ],
            sonuc: "Götürü vergi ya da sübvansiyon MC'yi ve MB'yi değiştirmez; miktar sabit kalır, yalnızca sabit maliyet (kâr) etkilenir." }
        ]
      },
      {
        baslik: "Birim başı vergi ve sübvansiyon",
        kisa: "Vergi alıcının fiyatını artırır, satıcının eline geçeni düşürür; miktar azalır.",
        bloklar: [
          graf("Çay ocağında birim vergi ve sübvansiyon", "Miktar (Q)", "TL", 10,
            [{ v: 4, label: "40" }, { v: 5, label: "50" }, { v: 6, label: "60" }], [{ v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }], VER, [
              ["Kampüs çay ocağı: denge E₀, ==50 bardak, bardak 5 TL==. (1 birim = 10 bardak, 1 TL.)", ["D", "S", "E0"]],
              ["Hükümet bardak başına ==2 TL birim vergi== (*per-unit tax*) alır. Satıcının her bardaktaki maliyeti 2 TL artar: ==arz yukarı kayar== (S + t).", ["D", "S", "E0", "St"]],
              ["Yeni denge E₁: ==40 bardak==. Alıcının ödediği fiyat ==6 TL==; satıcının eline geçen 6 − 2 = ==4 TL==. İkisi arasındaki 2 TL vergidir.", ["D", "S", "St", "E1", "P1"]],
              ["Vergi geliri = 2 × 40 = ==80 TL== (dikdörtgen). Kırmızı üçgen ==DWL== = ½ × 2 × 10 = 10 TL: vazgeçilen 10 bardağın net değeri.", ["D", "S", "St", "E1", "P1", "rev", "trev", "dwT"]],
              ["Şimdi ==2 TL sübvansiyon==: satıcının maliyeti her bardakta 2 TL azalır, ==arz aşağı kayar== (S − s).", ["D", "S", "E0", "Ss"]],
              ["Yeni denge E₂: ==60 bardak==. Alıcı ==4 TL== öder, satıcı 4 + 2 = ==6 TL== alır. Hükümetin maliyeti = 2 × 60 = 120 TL; DWL = ½ × 2 × 10 = 10 TL (dışsallık yoksa fazla üretim).", ["D", "S", "Ss", "E2", "P2", "cost", "tcost", "dwS"]]
            ]),
          { tip: "tablo", baslik: "Birim başı vergi ve sübvansiyonun etkileri", head: ["Etki", "Birim başı vergi", "Birim başı sübvansiyon"], rows: [
              ["Alıcının ödediği fiyat", "↑", "↓"],
              ["Satıcının eline geçen fiyat", "↓", "↑"],
              ["Denge miktarı", "↓", "↑"],
              ["Tüketici artığı (CS)", "↓", "↑"],
              ["Üretici artığı (PS)", "↓", "↑"],
              ["Hükümet", "Gelir kazanır", "Maliyete katlanır"],
              ["Ölü ağırlık kaybı (DWL)", "Oluşur", "Oluşur (dışsallık yoksa)"]
            ] }
        ]
      },
      {
        baslik: "Verginin yükünü esneklik belirler",
        kisa: "Esnekliği düşük taraf verginin daha büyük payını taşır.",
        bloklar: [
          graf("Aynı vergi, farklı esneklik", "Miktar (Q)", "TL", 10,
            [{ v: 3, label: "30" }, { v: 4, label: "40" }, { v: 5, label: "50" }], [{ v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }, { v: 7, label: "7" }], ESN, [
              ["Talep ==dik (inelastik)==: alıcılar fiyat artsa da vazgeçemez. Denge E₀: 50 bardak, 5 TL.", ["Di", "S", "E0"]],
              ["Satıcıya 3 TL vergi: arz yukarı kayar. Yeni denge 40 bardak: alıcı ==7 TL== öder (+2), satıcı 7 − 3 = ==4 TL== alır (−1). ==Verginin 2/3'ünü alıcı taşır.==", ["Di", "S", "St", "Ei", "Pi"]],
              ["Şimdi talep ==yatık (elastik)==: alıcı fiyat artınca kolayca vazgeçer. Aynı başlangıç E₀.", ["De", "S", "E0"]],
              ["Aynı 3 TL vergi: yeni denge 30 bardak: alıcı ==6 TL== öder (+1), satıcı 6 − 3 = ==3 TL== alır (−2). ==Verginin 2/3'ünü satıcı taşır.==", ["De", "S", "St", "Ee", "Pe"]]
            ]),
          { tip: "tuzak", metin: "Verginin yasal olarak kimden alındığı, ekonomik yükünü kimin taşıdığını belirlemez.", yanlis: "Vergiyi satıcıdan alırsak yükünü satıcı taşır.", dogru: "Yük esnekliğe göre paylaşılır: ==esnekliği düşük taraf== (vazgeçemeyen) daha çok taşır. Tavan ve tabanın etkisi de arz ve talep esnekliği arttıkça büyür." }
        ]
      },
      {
        baslik: "Fiyat tavanı ve tabanı: piyasa yapısı önemli",
        kisa: "Aynı tavan ya da taban, piyasa yapısına göre farklı sonuç verir.",
        bloklar: [
          { tip: "tablo", baslik: "Bağlayıcı tavan ve taban", head: ["Piyasa yapısı", "Bağlayıcı fiyat tavanı", "Bağlayıcı fiyat tabanı"], rows: [
              ["Tam rekabet", "Denge fiyatının altında: kıtlık ve DWL", "Denge fiyatının üstünde: fazla arz ve DWL"],
              ["Tekel", "Tekelin fiyatının altında, D = MC fiyatının üstündeyse: fiyat düşer, miktar artar, DWL azalır; D = MC fiyatında etkin miktar", "Tekelin zaten uyguladığı fiyatın altındaki taban bağlayıcı değildir; üstündekinde miktar azalır"],
              ["Tekelci rekabet", "Firma tekel gibi aşağı eğimli talep görür; tavan ATC'nin altına inerse zarar, uzun dönemde çıkış", "Fiyat yükselir, satılan miktar azalır; DWL artar"],
              ["Monopson (emek)", "Monopson ücretinin altındaki tavan: arz edilen emek azalır, istihdam düşer", "Taban, monopson ile rekabetçi ücret arasındaysa ücret ve istihdam artar; rekabetçi ücretin üstündeyse istihdam düşer"]
            ] },
          { tip: "tuzak", metin: "Tavanın etkisini önce piyasa yapısına bakarak çöz.", yanlis: "Fiyat tavanı her piyasada kıtlık yaratır.", dogru: "Tekelde tavan, D = MC fiyatına çekilirse ==miktarı artırır== ve DWL'yi azaltır; kıtlık yalnızca tavan bunun da altındaysa doğar. Monopsonda asgari ücret istihdamı artırabilir." }
        ]
      },
      {
        baslik: "Tekele fiyat düzenlemesi",
        kisa: "Tavanı P = MC düzeyine çekmek tekeli etkin miktara zorlar.",
        bloklar: [
          graf("Ring servisi tekeli ve fiyat tavanı", "Bilet (Q)", "TL", 10,
            [{ v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }], [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }], MON, [
              ["Kampüste tek bir ring servisi (==tekel==). Talep (D) aşağı eğimli, MC = ATC = 20 TL sabit. (1 birim = 10 bilet, 10 TL.)", ["D", "MC"]],
              ["Tekel ==MR = MC== noktasında üretir: ==40 bilet==, fiyat talepten okunur: ==60 TL==. Fiyat MC'nin çok üstünde.", ["D", "MR", "MC", "pt"]],
              ["Etkin miktar D = MC'de 80 bilettir. Tekel 40'ta durduğu için kırmızı üçgen ==DWL== = ½ × 40 × 40 = ==800 TL==.", ["D", "MR", "MC", "pt", "dwl"]],
              ["Devlet ==40 TL tavan== koyarsa: 60 bilete kadar firmanın MR'si 40 TL olur ve MC'nin (20) üstündedir; firma 60 bilet satar. DWL küçülür (½ × 20 × 20 = 200 TL).", ["D", "MC", "tv", "tvl", "pt", "dwl"], {
                tv: { from: [0, 4], to: [6, 4] }, tvl: { y: 4.5 }, pt: { x: 6, y: 4, etiket: "C" }, dwl: { noktalar: [[6, 4], [6, 2], [8, 2]] }
              }],
              ["Tavan ==P = MC (20 TL)== olursa firma 80 bilet satar: ==etkin miktar==, DWL = 0. Ekonomik kâr sıfır (P = ATC).", ["D", "MC", "tv", "tvl", "pt"], {
                tv: { from: [0, 2.35], to: [8, 2.35] }, tvl: { y: 2.85 }, pt: { x: 8, y: 2, etiket: "E" }
              }]
            ]),
          { tip: "not", metin: "Devlet ayrıca ==rekabet politikasıyla (*antitrust*)== piyasayı rekabetçi tutmaya çalışır: birleşmeleri denetler, tekelleri bölebilir, anlaşmaları cezalandırır (Türkiye'de Rekabet Kurumu). Genel ilke: müdahale, piyasa başarısızlığına yol açan teşviki doğru hedeflerse verimliliği artırır. Kartel (*collusion*) grafikleri kapsam dışıdır." }
        ]
      },
      {
        baslik: "Doğal tekel ve götürü sübvansiyon",
        kisa: "Doğal tekelde P = MC zarar yazdırır; götürü sübvansiyon bunu kapatır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🚰", terim: "Natural monopoly", tr: "doğal tekel", tanim: "Sabit maliyetin çok büyük olduğu ve ATC'nin geniş bir miktar aralığında düştüğü piyasa: tek firma en ucuza üretir.", ornek: "Şehrin su şebekesi." },
              { ikon: "⚖️", terim: "Fair-return price", tr: "adil getiri fiyatı", tanim: "Fiyatı P = ATC'ye koymak: sübvansiyon gerekmez, firma normal kâr eder; ama miktar etkin düzeyin altında kalır ve küçük bir DWL sürer.", ornek: "Su idaresi fiyatı ortalama maliyete eşitler." }
            ] },
          graf("Doğal tekel: etkin fiyat ve zarar", "Miktar (Q)", "TL", 11,
            [{ v: 4, label: "40" }, { v: 8, label: "80" }], [{ v: 2, label: "20" }, { v: 3, label: "30" }, { v: 4, label: "40" }, { v: 6, label: "60" }], DOG, [
              ["==Doğal tekel== (*natural monopoly*): sabit maliyet büyük (şebeke, köprü), MC düşük. ATC üretim arttıkça sürekli düşer; tek firma en ucuza üretir.", ["D", "MC", "ATC"]],
              ["Düzenlenmemiş tekel MR = MC'de ==40 birim==, ==60 TL==. ATC = 40 TL: kâr = (60 − 40) × 40 = 800 TL (yeşil).", ["D", "MR", "MC", "ATC", "M", "kar", "tkar"]],
              ["Etkin fiyat ==P = MC = 20 TL==: miktar 80. Ama ATC (30 TL) fiyattan büyük: ==birim başı 10 TL, toplam 800 TL zarar==. Firma bu fiyatta üretmez.", ["D", "MC", "ATC", "E", "zarar", "tzar"]],
              ["Devlet ==800 TL götürü (*lump-sum*) sübvansiyon== verir. MC değişmez; firma P = MC'de 80 üretir ve zararı kapanır.", ["D", "MC", "ATC", "E", "sub", "tsub"]]
            ]),
        ]
      },
      {
        baslik: "Monopsonda asgari ücret",
        kisa: "Monopsonda makul bir asgari ücret, ücreti ve istihdamı birlikte artırabilir.",
        bloklar: [
          graf("Monopsonda taban ücret", "İşçi (L)", "TL", 7,
            [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 5, label: "5" }], [{ v: 2, label: "20" }, { v: 3, label: "30" }, { v: 4, label: "40" }, { v: 5, label: "50" }], WAG, [
              ["Taban yokken ==monopson==: MRP = MRC → A, ==2 işçi==; ücret arz eğrisinden B: ==20 TL==. (Bkz. 5.4.)", ["dwl", "mrp", "s", "mrc", "A", "B"]],
              ["==30 TL asgari ücret== (taban): firma 30 TL'den istediği kadar işçi alabilir; MRC, 3. işçiye kadar 30 TL'de yatay olur. MRP = MRC → C, ==3 işçi==. ==Ücret ve istihdam birlikte arttı.==", ["mrp", "s", "mrc", "fl", "tfl", "C"], { fl: { from: [0, 3], to: [6.6, 3] }, tfl: { y: 2.4 } }],
              ["Taban ==50 TL== (rekabetçi ücretin çok üstü) olursa firma MRP = 50 olan ==1 işçi== alır; oysa 50 TL'de 5 kişi çalışmak ister: ==4 kişi işsiz==.", ["mrp", "s", "mrc", "fl", "tfl", "C", "Ls", "ok", "tis"], { fl: { from: [0, 5], to: [6.6, 5] }, tfl: { y: 4.4 }, C: { x: 1, y: 5, etiket: "L" } }]
            ]),
          { tip: "tuzak", metin: "Asgari ücretin istihdam etkisi piyasa yapısına bağlıdır.", yanlis: "Asgari ücret her zaman istihdamı azaltır.", dogru: "Rekabetçi piyasada taban ücret istihdamı düşürür. Monopsonda taban, monopson ücreti ile rekabetçi ücret arasındaysa ==istihdam artar==; rekabetçi ücretin üstündeyse düşer." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Birim başı vergi/sübvansiyon MC'yi kaydırır: alıcının fiyatı, satıcının net fiyatı, miktar, CS, PS, DWL ve hükümet gelir ya da maliyeti değişir.",
              "Vergi: alıcı fiyatı ↑, satıcı net fiyatı ↓, miktar ↓. Sübvansiyon: alıcı fiyatı ↓, satıcı net fiyatı ↑, miktar ↑.",
              "Vergi yükü esnekliğe göre paylaşılır: esnekliği düşük taraf daha çok taşır.",
              "Götürü vergi ve sübvansiyon MC ve MB'yi değiştirmez; yalnızca sabit maliyet (kâr) etkilenir.",
              "Bağlayıcı tavan ve taban sonucu piyasa yapısına ve esnekliğe göre değişir.",
              "Tekelde tavanı D = MC fiyatına çekmek etkin miktarı verir (kıtlık yok).",
              "Doğal tekelde P = MC zarar yazdırır; etkin miktar için götürü sübvansiyon gerekir. Alternatif P = ATC.",
              "Monopsonda makul asgari ücret ücreti ve istihdamı artırabilir.",
              "Antitrust politikası piyasayı rekabetçi tutmaya çalışır; müdahale doğru teşviki hedeflerse verimliliği artırır."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Çay ocağında bardak başına 2 TL birim vergi konuyor. Grafikte vergisiz denge E₀, vergili denge E₁'dir. Vergiden sonra alıcının ödediği fiyat ve satıcının eline geçen fiyat nedir?",
        fig: { type: "graph", xlabel: "Miktar (Q)", ylabel: "TL", xmax: 10, ymax: 10, lines: [{ from: [0, 10], to: [9, 1], label: "D" }, { from: [0, 0], to: [9, 9], label: "S", color: 1 }, { from: [0, 2], to: [7.5, 9.5], label: "S+t", color: 2, dash: true }], points: [{ q: 5, p: 5, label: "E₀" }, { q: 4, p: 6, label: "E₁", guides: true }], yticks: [{ v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }], xticks: [{ v: 4, label: "40" }, { v: 5, label: "50" }] },
        opts: ["Alıcı 6 TL, satıcı 6 TL", "Alıcı 6 TL, satıcı 4 TL", "Alıcı 5 TL, satıcı 4 TL", "Alıcı 4 TL, satıcı 6 TL"],
        a: 1, why: "Yeni denge E₁'de alıcı 6 TL öder; satıcı 6 − 2 = 4 TL alır. İkisi arasındaki 2 TL verginin kendisidir. A şıkkı verginin satıcıya hiç yansımadığını varsayar; D şıkkı sübvansiyonun sonucudur." },
      { q: "Bir kafeye tek seferlik 500 TL götürü vergi konuyor. Kafenin kısa dönemde kâr azamisi sağlayan üretim miktarı ve fiyatı için hangisi doğrudur?",
        opts: ["Miktar azalır, fiyat artar.", "Miktar artar, fiyat düşer.", "Marjinal maliyet artar, miktar azalır.", "Değişmez; yalnızca sabit maliyet ve kâr etkilenir."],
        a: 3, why: "Götürü vergi MC'yi ve MR'yi değiştirmez; firma MR = MC'de aynı miktarı üretir. Yalnızca sabit maliyet arttığı için kâr azalır. C şıkkı götürü vergiyi birim başı vergiyle karıştırıyor." },
      { q: "Tek satıcılı bir piyasada hükümet fiyat tavanını talep eğrisi ile MC'nin kesiştiği fiyata (D = MC) koyuyor. Bunun sonucu için hangisi doğrudur?",
        opts: ["Miktar artar ve etkin düzeye ulaşır, DWL ortadan kalkar.", "Kıtlık oluşur.", "Miktar azalır.", "Firmanın kârı artar."],
        a: 0, why: "Tavan D = MC fiyatındaysa firma, tavan fiyattan talep edilen kadar (etkin miktar) satar; P = MC olduğundan DWL kalmaz. B şıkkı, tavan bunun da altındaysa doğar." },
      { q: "Bir monopsonist emek piyasasında hükümet, monopsonun ödediği ücretten yüksek ama rekabetçi ücretten düşük bir asgari ücret koyuyor. Sonuç nedir?",
        opts: ["İstihdam azalır, ücret artar.", "İstihdam ve ücret düşer.", "Ücret ve istihdam artabilir.", "Ücret ve istihdam değişmez."],
        a: 2, why: "Taban, firmanın MRC'sini belli bir işçi sayısına kadar yatay yapar; MRP = MRC noktası sağa kayar. Böylece hem ücret hem istihdam artar. A şıkkı rekabetçi piyasanın bilinen sonucudur, monopsonun değil." },
      { q: "Doğal tekelde hükümet fiyatı P = MC düzeyine zorluyor. Fiyatın ATC'den küçük olduğu bu durumda etkin miktarı üretmesi için firmaya ne gerekir?",
        opts: ["Firma kâr eder; ek bir şeye gerek yoktur.", "Zarar edeceği için götürü bir sübvansiyon gerekir.", "MC'sini artırması gerekir.", "Fiyat tavanının kaldırılması gerekir."],
        a: 1, why: "Doğal tekelde MC < ATC olduğundan P = MC'de firma zarar eder. Zararı karşılayan götürü sübvansiyon MC'yi değiştirmediği için etkin miktar korunur. D şıkkı tavanı kaldırır ama etkin miktarı (DWL) geri getirmez." }
    ]
  };
})();
