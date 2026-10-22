/* Kitora not defteri · mi208 · 2.8 Devletin Piyasaya Müdahalesi
   Kaynak: AP Micro CED, Topic 2.8 (POL-1.A.1–6). Blok türleri: /ap/_kit/defter.js başı.
   Sayısal taban: D: P = 100 − Q, S: P = Q; denge (50 adet, 50 TL). Grafikte 1 birim = 10 TL ve 10 adet. */
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
  var TX = [{ v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }];
  var TY = [{ v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }];

  return {
    slug: "mi208",
    amac: "Bu konu devletin piyasaya müdahalesini anlatıyor: fiyat tavanı, fiyat tabanı, birim vergi, sübvansiyon ve miktar kotası piyasa sonucunu nasıl değiştirir? Kıtlığı, fazlalığı, *deadweight loss* alanını, vergi geliri ve maliyeti grafikte görecek; verginin yükünü kimin taşıdığını bulacaksın.",
    bolumler: [
      {
        baslik: "Müdahale çeşitleri ve verimlilik",
        kisa: "Verimli bir piyasaya müdahale toplam rantı yalnızca azaltır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🛑", terim: "Price ceiling / price floor", tr: "fiyat tavanı / tabanı", tanim: "Tavan: yasal en yüksek fiyat. Taban: yasal en düşük fiyat. Yalnızca denge fiyatını aşan sınırlar etkilidir.", ornek: "Kira artış sınırı (tavan), asgari ücret (taban)." },
              { ikon: "🧾", terim: "Tax and subsidy", tr: "vergi ve sübvansiyon", tanim: "Vergi maliyeti artırır, sübvansiyon maliyeti düşürür; arz (ya da talep) kayar. Devlet vergiden gelir alır, sübvansiyona para öder.", ornek: "Adet başına 20 TL vergi." },
              { ikon: "🔢", terim: "Quantity control", tr: "miktar kontrolü (kota)", tanim: "Piyasada satılabilecek miktarı yasayla sınırlamak. Miktarı sınırlar, fiyat piyasada oluşur.", ornek: "Taksi plakası sayısını sabitlemek." },
              { ikon: "🕳️", terim: "Deadweight loss", tr: "ölü ağırlık kaybı", tanim: "Müdahale yüzünden gerçekleşmeyen faydalı alışverişlerin yarattığı toplam rant kaybı. Alıcı ve satıcının kaybı eksi devletin kazancıdır.", ornek: "Alıcı ve satıcı 900 TL kaybeder, devlet 800 TL alırsa DWL = 100 TL." }
            ] },
          { tip: "not", metin: "Rekabetçi ve dışsallığı olmayan bir piyasada denge zaten toplam rantı en büyük yapar. Vergi, sübvansiyon, fiyat ya da miktar kontrolü bu miktarı değiştirdiğinde ==*allocative efficiency* yalnızca azalabilir==; yani her müdahale bir *deadweight loss* getirir. Müdahale bir tarafı kazandırsa bile toplam rant düşer." }
        ]
      },
      {
        baslik: "Fiyat tavanı (*price ceiling*)",
        kisa: "Denge fiyatının altındaki tavan kıtlık ve DWL yaratır.",
        bloklar: [
          graf({ baslik: "Konser bileti: 30 TL tavan", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 12, ymax: 12, xticks: TX, yticks: TY,
            ogeler: [
              { id: "dwl", tip: "alan", renk: 3, noktalar: [[3, 7], [5, 5], [3, 3]] },
              { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [10, 0], etiket: "D" },
              { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [10, 10], etiket: "S" },
              { id: "E0", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "", kilavuz: true },
              { id: "pc", tip: "cizgi", renk: 2, from: [0, 7], to: [10, 7], etiket: "tavan" },
              { id: "qd", tip: "nokta", renk: 0, x: 7, y: 3, etiket: "Qd" },
              { id: "qs", tip: "nokta", renk: 1, x: 3, y: 3, etiket: "Qs" },
              { id: "bk", tip: "yazi", x: 5, y: 2.2, metin: "kıtlık: 40 bilet" },
              { id: "pd", tip: "nokta", renk: 3, x: 3, y: 7, etiket: "70", kilavuz: true },
              { id: "td", tip: "yazi", x: 3.7, y: 4.85, metin: "DWL" }
            ],
            durumlar: [
              ["Denge: 50 TL, 50 bilet.", ["D", "S", "E0"]],
              ["70 TL tavan, dengenin ==üstünde==: bağlayıcı değil. Piyasa fiyatı zaten 50 TL; tavanın etkisi yok.", ["D", "S", "E0", "pc"], { pc: { from: [0, 7], to: [10, 7] } }],
              ["30 TL tavan, dengenin ==altında==: bağlayıcı. Qd = 70, Qs = 30; ==kıtlık== 40 bilet.", ["D", "S", "E0", "pc", "qd", "qs", "bk"], { pc: { from: [0, 3], to: [10, 3] } }],
              ["Satılan miktar kısa taraf olan arz: 30 bilet. Alıcılar 30. bilete 70 TL'ye kadar verirdi; bu fark karaborsa, kuyruk ya da kalite düşüşü doğurur.", ["D", "S", "E0", "pc", "qd", "qs", "bk", "pd"]],
              ["30 ile 50 arasındaki biletlerin faydası maliyetinden büyük ama üretilmiyor: DWL = ½ × 20 × 40 = ==400 TL==.", ["D", "S", "E0", "pc", "pd", "dwl", "td"]]
            ] }),
          { tip: "ornek", baslik: "Tavanın hesabı", durum: "Biletlere 30 TL tavan konuyor. Talep P = 100 − Q, arz P = Q.",
            adimlar: ["Qd = 100 − 30 = 70; Qs = 30. Kıtlık = 70 − 30 = 40.", "Satılan miktar 30 bilet; alıcının ödediği 30 TL.", "Mal en çok değer verenlere ulaşırsa CS = ½ × 30 × 30 + 30 × 40 = 1650 TL (1250'den artar), PS = ½ × 30 × 30 = 450 TL (1250'den düşer).", "Toplam = 2100 TL; kayıp 2500 − 2100 = 400 TL = DWL."],
            sonuc: "Tavan alıcıların bir kısmını kazandırır, satıcıyı kaybettirir; ==toplam rant düşer==." },
          { tip: "tuzak", metin: "Tavanın yönüne dikkat: yalnızca dengenin altında etkilidir.", yanlis: "Fiyat tavanı her zaman fiyatı düşürür ve alıcıyı kazandırır.", dogru: "Tavan ==bağlayıcıysa== (denge fiyatının altındaysa) kıtlık ve DWL doğar; dengenin üstündeyse hiçbir etkisi olmaz. Tavandan sonra ==satılan miktar azalır==." }
        ]
      },
      {
        baslik: "Fiyat tabanı (*price floor*)",
        kisa: "Denge fiyatının üstündeki taban fazlalık ve DWL yaratır.",
        bloklar: [
          graf({ baslik: "Konser bileti: 70 TL taban", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 12, ymax: 12, xticks: TX, yticks: TY,
            ogeler: [
              { id: "dwl", tip: "alan", renk: 3, noktalar: [[3, 7], [5, 5], [3, 3]] },
              { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [10, 0], etiket: "D" },
              { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [10, 10], etiket: "S" },
              { id: "E0", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "", kilavuz: true },
              { id: "pf", tip: "cizgi", renk: 2, from: [0, 3], to: [10, 3], etiket: "taban" },
              { id: "qd", tip: "nokta", renk: 0, x: 3, y: 7, etiket: "Qd" },
              { id: "qs", tip: "nokta", renk: 1, x: 7, y: 7, etiket: "Qs" },
              { id: "bk", tip: "yazi", x: 5, y: 7.8, metin: "fazlalık: 40 bilet" },
              { id: "td", tip: "yazi", x: 3.7, y: 4.85, metin: "DWL" }
            ],
            durumlar: [
              ["Denge: 50 TL, 50 bilet.", ["D", "S", "E0"]],
              ["30 TL taban, dengenin ==altında==: bağlayıcı değil, etkisiz.", ["D", "S", "E0", "pf"], { pf: { from: [0, 3], to: [10, 3] } }],
              ["70 TL taban, dengenin ==üstünde==: bağlayıcı. Qd = 30, Qs = 70; ==fazlalık== 40 bilet.", ["D", "S", "E0", "pf", "qd", "qs", "bk"], { pf: { from: [0, 7], to: [10, 7] } }],
              ["Satılan miktar kısa taraf olan talep: 30 bilet. 30 ile 50 arasındaki birimlerin faydası maliyetinden büyük ama alışveriş olmuyor: DWL = ==400 TL==. Satıcıların bir kısmı üretip satamaz.", ["D", "S", "E0", "pf", "qd", "qs", "dwl", "td"]]
            ] }),
          { tip: "ikili", sol: { ikon: "⬇️", baslik: "Fiyat tavanı", maddeler: ["Denge fiyatının ALTINDA", "Sonuç: kıtlık"] },
            sag: { ikon: "⬆️", baslik: "Fiyat tabanı", maddeler: ["Denge fiyatının ÜSTÜNDE", "Sonuç: fazlalık"] },
            oyun: [
              { metin: "Belediye, kiraların bir yılda en fazla %25 artabileceğini yasalaştırıyor (kira çok yükselmiş).", cevap: "sol", neden: "Fiyatı aşağıda tutan üst sınır: tavan, kıtlık." },
              { metin: "Asgari ücret, işgücü piyasasında denge ücretinin üstüne konuyor.", cevap: "sag", neden: "Emek piyasasında taban: işgücü fazlalığı = işsizlik." },
              { metin: "Devlet ekmeğe en fazla 10 TL fiyat koyuyor.", cevap: "sol", neden: "Üst sınır: tavan." },
              { metin: "Devlet fındığı piyasanın üstünde garanti fiyatla satın alıyor.", cevap: "sag", neden: "Alt sınır: taban; üretici fazlası biriker." }
            ] }
        ]
      },
      {
        baslik: "Birim vergi (*per-unit tax*)",
        kisa: "Vergi alıcının ödediği ile satıcının aldığı fiyat arasına bir kama sokar.",
        bloklar: [
          graf({ baslik: "Adet başına 20 TL vergi (satıcıdan alınıyor)", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 13, ymax: 13, xticks: [{ v: 4, label: "40" }, { v: 5, label: "50" }], yticks: [{ v: 4, label: "40" }, { v: 5, label: "50" }, { v: 6, label: "60" }],
            ogeler: [
              { id: "rev", tip: "alan", renk: 2, noktalar: [[0, 4], [4, 4], [4, 6], [0, 6]] },
              { id: "dwl", tip: "alan", renk: 3, noktalar: [[4, 6], [5, 5], [4, 4]] },
              { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [10, 0], etiket: "D" },
              { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [10, 10], etiket: "S" },
              { id: "St", tip: "cizgi", renk: 2, from: [0, 2], to: [10, 12], etiket: "S + vergi" },
              { id: "oks", tip: "ok", renk: 2, from: [3, 3.3], to: [3, 4.7] },
              { id: "E0", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "", kilavuz: true },
              { id: "pb", tip: "nokta", renk: 0, x: 4, y: 6, etiket: "alıcı öder", kilavuz: true },
              { id: "ps", tip: "nokta", renk: 1, x: 4, y: 4, etiket: "satıcı alır", kilavuz: true },
              { id: "tr", tip: "yazi", x: 2, y: 5, metin: "vergi geliri" },
              { id: "td", tip: "yazi", x: 6.3, y: 5, metin: "DWL" }
            ],
            durumlar: [
              ["Vergisiz denge: 50 TL, 50 bilet.", ["D", "S", "E0"]],
              ["Satıcıdan adet başına 20 TL vergi alınır: her bilet 20 TL daha pahalıya mal olur; arz ==yukarı (sola)== kayar.", ["D", "S", "St", "E0", "oks"]],
              ["Yeni denge: miktar 40. Alıcı ==60 TL== öder, satıcı vergiden sonra ==40 TL== alır. Aradaki 20 TL vergidir.", ["D", "S", "St", "pb", "ps"]],
              ["Devletin geliri = vergi × miktar = 20 × 40 = ==800 TL== (dikdörtgen).", ["D", "S", "St", "pb", "ps", "rev", "tr"]],
              ["40 ile 50 arasındaki biletler vergi yüzünden alınıp satılmaz: DWL = ½ × 20 × 10 = ==100 TL==.", ["D", "S", "St", "pb", "ps", "rev", "tr", "dwl", "td"]]
            ] }),
          { tip: "ornek", baslik: "Verginin hesabı", durum: "Adet başına 20 TL vergi. Talep P = 100 − Q, arz P = Q (vergiyle: P = Q + 20).",
            adimlar: ["Vergisiz: P = 50, Q = 50; CS = PS = 1250 TL.", "Vergili: 100 − Q = Q + 20, Q = 40. Alıcı 60 öder; satıcı 60 − 20 = 40 alır.", "CS = ½ × 40 × 40 = 800 (−450). PS = ½ × 40 × 40 = 800 (−450). Vergi geliri = 20 × 40 = 800.", "Toplam = 800 + 800 + 800 = 2400; 2500 − 2400 = 100 TL = DWL."],
            sonuc: "Alıcı ve satıcı toplam 900 TL kaybeder, devlet 800 TL kazanır: net kayıp 100 TL." },
          { tip: "tuzak", metin: "DWL ile vergi gelirini karıştırma.", yanlis: "Verginin toplumdaki maliyeti, devletin topladığı 800 TL'dir.", dogru: "Vergi geliri toplumdan kaybolmaz; devlete geçer. Kayıp yalnızca ==olmayan alışverişlerdir (DWL)==. Vergi küçüldükçe DWL daha hızlı küçülür." }
        ]
      },
      {
        baslik: "Sübvansiyon (*subsidy*)",
        kisa: "Sübvansiyon miktarı artırır ama verimsiz biçimde ve devlete maliyet getirir.",
        bloklar: [
          graf({ baslik: "Adet başına 20 TL sübvansiyon (satıcıya veriliyor)", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 13, ymax: 12, xticks: [{ v: 5, label: "50" }, { v: 6, label: "60" }], yticks: [{ v: 4, label: "40" }, { v: 5, label: "50" }, { v: 6, label: "60" }],
            ogeler: [
              { id: "mal", tip: "alan", renk: 2, noktalar: [[0, 4], [6, 4], [6, 6], [0, 6]] },
              { id: "dwl", tip: "alan", renk: 3, noktalar: [[5, 5], [6, 4], [6, 6]] },
              { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [10, 0], etiket: "D" },
              { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [10, 10], etiket: "S" },
              { id: "Ss", tip: "cizgi", renk: 2, from: [2, 0], to: [12, 10], etiket: "S_s" },
              { id: "oks", tip: "ok", renk: 2, from: [8, 7.7], to: [8, 6.3] },
              { id: "E0", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "", kilavuz: true },
              { id: "pb", tip: "nokta", renk: 0, x: 6, y: 4, etiket: "alıcı öder", kilavuz: true },
              { id: "ps", tip: "nokta", renk: 1, x: 6, y: 6, etiket: "satıcı alır", kilavuz: true },
              { id: "tm", tip: "yazi", x: 2.8, y: 5, metin: "devletin maliyeti" },
              { id: "td", tip: "yazi", x: 7.1, y: 5, metin: "DWL" }
            ],
            durumlar: [
              ["Sübvansiyonsuz denge: 50 TL, 50 bilet.", ["D", "S", "E0"]],
              ["Satıcıya adet başına 20 TL sübvansiyon verilir: maliyet düşer, arz ==aşağı (sağa)== kayar.", ["D", "S", "Ss", "E0", "oks"]],
              ["Yeni denge: miktar 60. Alıcı ==40 TL== öder, satıcı sübvansiyonla birlikte ==60 TL== alır. Aradaki 20 TL devletten gelir.", ["D", "S", "Ss", "pb", "ps"]],
              ["Devletin maliyeti = 20 × 60 = ==1200 TL==.", ["D", "S", "Ss", "pb", "ps", "mal", "tm"]],
              ["CS 1800, PS 1800 olur (her biri +550); fakat 1200 TL maliyet var: 1800 + 1800 − 1200 = 2400. DWL = ½ × 20 × 10 = ==100 TL==: 50 ile 60 arası birimlerin maliyeti faydasından büyük.", ["D", "S", "Ss", "pb", "ps", "mal", "tm", "dwl", "td"]]
            ] }),
          { tip: "tablo", baslik: "Vergi mi, sübvansiyon mu?", head: ["", "Birim vergi", "Birim sübvansiyon"], rows: [
              ["Arz eğrisi", "Sola / yukarı", "Sağa / aşağı"], ["Miktar", "Azalır (50 → 40)", "Artar (50 → 60)"], ["Alıcının ödediği", "Artar (60)", "Düşer (40)"], ["Satıcının eline geçen", "Azalır (40)", "Artar (60)"], ["Devlet", "Gelir: 800 TL", "Maliyet: 1200 TL"], ["DWL", "100 TL", "100 TL"]
            ] }
        ]
      },
      {
        baslik: "Verginin yükünü kim taşır? (*tax incidence*)",
        kisa: "Piyasadan daha zor vazgeçen, yani daha inelastik taraf verginin çoğunu taşır.",
        bloklar: [
          graf({ baslik: "Aynı 30 TL'lik vergi, iki farklı talep", xlabel: "Miktar", ylabel: "Fiyat", xmax: 12, ymax: 12, xticks: [], yticks: [{ v: 5, label: "P₀" }],
            ogeler: [
              { id: "bB", tip: "alan", renk: 3, noktalar: [[0, 5], [4, 5], [4, 7], [0, 7]] },
              { id: "bS", tip: "alan", renk: 2, noktalar: [[0, 4], [4, 4], [4, 5], [0, 5]] },
              { id: "Dd", tip: "cizgi", renk: 0, from: [2, 11], to: [7, 1], etiket: "D (inelastik)" },
              { id: "Df", tip: "cizgi", renk: 0, from: [0, 7.5], to: [10, 2.5], etiket: "D (elastik)" },
              { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [10, 10], etiket: "S" },
              { id: "St", tip: "cizgi", renk: 2, from: [0, 3], to: [7, 10], etiket: "S + vergi" },
              { id: "E0", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "", kilavuz: true },
              { id: "pb", tip: "nokta", renk: 0, x: 4, y: 7, etiket: "alıcı 70", kilavuz: true },
              { id: "ps", tip: "nokta", renk: 1, x: 4, y: 4, etiket: "satıcı 40", kilavuz: true },
              { id: "tb", tip: "yazi", x: 2, y: 6, metin: "alıcı +20" },
              { id: "tsat", tip: "yazi", x: 2, y: 4.5, metin: "satıcı −10" }
            ],
            durumlar: [
              ["**İnelastik talep:** denge 50 TL, 50 bilet. Sonra satıcıdan adet başına 30 TL vergi alınıyor.", ["Dd", "S", "E0"]],
              ["Yeni denge: alıcı 70 öder (+20), satıcı 40 alır (−10). Verginin ==2/3'ünü alıcı== taşır; talep inelastik olduğundan alıcı vazgeçemez.", ["Dd", "S", "St", "pb", "ps", "bB", "bS", "tb", "tsat"], { pb: { x: 4, y: 7, etiket: "alıcı 70" }, ps: { x: 4, y: 4, etiket: "satıcı 40" }, bB: { noktalar: [[0, 5], [4, 5], [4, 7], [0, 7]] }, bS: { noktalar: [[0, 4], [4, 4], [4, 5], [0, 5]] }, tb: { x: 2, y: 6, metin: "alıcı +20" }, tsat: { x: 2, y: 4.5, metin: "satıcı −10" } }],
              ["**Elastik talep:** aynı başlangıç dengesi.", ["Df", "S", "E0"]],
              ["Aynı vergi: miktar 30'a düşer, alıcı 60 öder (+10), satıcı 30 alır (−20). Bu sefer ==2/3'ünü satıcı== taşır; alıcı kolayca vazgeçebildiği için fiyat artışını satıcıya geri yansıtamaz.", ["Df", "S", "St", "pb", "ps", "bB", "bS", "tb", "tsat"], { pb: { x: 3, y: 6, etiket: "alıcı 60" }, ps: { x: 3, y: 3, etiket: "satıcı 30" }, bB: { noktalar: [[0, 5], [3, 5], [3, 6], [0, 6]] }, bS: { noktalar: [[0, 3], [3, 3], [3, 5], [0, 5]] }, tb: { x: 1.5, y: 5.5, metin: "alıcı +10" }, tsat: { x: 1.5, y: 4, metin: "satıcı −20" } }]
            ] }),
          { tip: "ikili", sol: { ikon: "🛍️", baslik: "Alıcı daha çok yük taşır", maddeler: ["Talep inelastik", "Arz elastik"] },
            sag: { ikon: "🏭", baslik: "Satıcı daha çok yük taşır", maddeler: ["Talep elastik", "Arz inelastik"] },
            oyun: [
              { metin: "Sigaraya vergi: bağımlılar vazgeçemiyor, satıcı üretimi kolayca ayarlıyor.", cevap: "sol", neden: "Talep inelastik, arz daha elastik: alıcı çoğunu öder." },
              { metin: "Alıcının çok ikamesi var; satıcının makineleri başka işe geçirilemiyor.", cevap: "sag", neden: "Talep elastik, arz inelastik: yükün çoğu satıcıda." },
              { metin: "Zorunlu bir ilaç; satıcılar üretimi kolayca bırakabilir.", cevap: "sol", neden: "Talep inelastik: alıcı fiyatı kabullenir." },
              { metin: "Lüks bir mal; alıcılar kolayca başka malı seçer, üretici tesisi başka işe dönmez.", cevap: "sag", neden: "Alıcı çıkabiliyor, satıcı çıkamıyor: yük satıcıda." }
            ] },
          { tip: "tuzak", metin: "Vergiyi kimin ödediği ile yükü kimin taşıdığı farklı şeylerdir.", yanlis: "Vergi satıcıdan alınıyorsa yükü de satıcı taşır.", dogru: "Verginin yasal olarak kimden alındığı fark etmez; ==yük esnekliklere göre== bölüşülür. Daha inelastik taraf daha çok taşır. Sübvansiyonun faydası da aynı kuralla bölüşülür." }
        ]
      },
      {
        baslik: "Miktar kotası (*quantity control*)",
        kisa: "Kota miktarı sınırlar; fiyat yükselir ve kota hakkı bir rant doğurur.",
        bloklar: [
          graf({ baslik: "Taksi plakası: yalnız 30 sefer izni", xlabel: "Miktar (sefer)", ylabel: "Fiyat (TL)", xmax: 12, ymax: 12, xticks: TX, yticks: TY,
            ogeler: [
              { id: "rent", tip: "alan", renk: 2, noktalar: [[0, 3], [3, 3], [3, 7], [0, 7]] },
              { id: "dwl", tip: "alan", renk: 3, noktalar: [[3, 7], [5, 5], [3, 3]] },
              { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [10, 0], etiket: "D" },
              { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [10, 10], etiket: "S" },
              { id: "vq", tip: "cizgi", renk: 2, from: [3, 0], to: [3, 9], etiket: "kota 30" },
              { id: "E0", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "", kilavuz: true },
              { id: "pb", tip: "nokta", renk: 0, x: 3, y: 7, etiket: "alıcı 70", kilavuz: true },
              { id: "ps", tip: "nokta", renk: 1, x: 3, y: 3, etiket: "maliyet 30" },
              { id: "tr", tip: "yazi", x: 1.5, y: 5, metin: "kota rantı" },
              { id: "td", tip: "yazi", x: 3.7, y: 4.85, metin: "DWL" }
            ],
            durumlar: [
              ["Serbest piyasada denge: 50 sefer, 50 TL.", ["D", "S", "E0"]],
              ["Devlet yalnız 30 sefere izin veriyor: arz 30'da ==dikey== olur.", ["D", "S", "E0", "vq"]],
              ["Alıcılar 30. sefer için 70 TL'ye kadar öder; bir sefer 30 TL'ye mal oluyor. Fiyat ==70 TL==, miktar 30.", ["D", "S", "vq", "pb", "ps"]],
              ["Fark (70 − 30 = 40 TL) × 30 sefer = ==1200 TL kota rantı==. İzin sahibine gider.", ["D", "S", "vq", "pb", "ps", "rent", "tr"]],
              ["30 ile 50 arasındaki seferler yapılmaz: DWL = ==400 TL==.", ["D", "S", "vq", "pb", "ps", "rent", "tr", "dwl", "td"]]
            ] }),
          { tip: "not", metin: "Fiyat tavanı fiyatı sınırlar, miktar da azalır; kota miktarı sınırlar, fiyat da yükselir. İkisi de ==denge miktarının altında bir miktar== bırakır ve aynı büyüklükte DWL yaratır; ama kota rantı alıcıdan izin sahibine geçer." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Verimli bir piyasaya her müdahale (vergi, sübvansiyon, fiyat ya da miktar kontrolü) toplam rantı azaltır; kaybın adı *deadweight loss*'tur.",
              "Fiyat tavanı denge altındaysa bağlayıcıdır: kıtlık, satılan miktar azalır. Fiyat tabanı denge üstündeyse bağlayıcıdır: fazlalık.",
              "Bağlayıcı olmayan tavan (denge üstü) ya da taban (denge altı) etkisizdir.",
              "Birim vergi arzı sola kaydırır: alıcı daha çok öder, satıcı daha az alır, miktar azalır. Devlet geliri = vergi × yeni miktar.",
              "Birim sübvansiyon arzı sağa kaydırır: alıcı daha az öder, satıcı daha çok alır, miktar artar. Devletin maliyeti = sübvansiyon × yeni miktar.",
              "Vergi yükü yasal ödeyene göre değil esnekliğe göre bölüşülür: daha inelastik taraf daha çok taşır.",
              "Miktar kotası miktarı sınırlar, fiyatı yükseltir ve izin sahibine rant bırakır.",
              "DWL'yi bul: denge miktarı ile yeni miktar arasındaki üçgen; alan = ½ × taban × yükseklik."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Grafikte talep P = 100 − Q, arz P = Q ve her birim 10 TL ile 10 bileti gösteriyor. Devlet fiyatı 30 TL'de sınırlıyor. Piyasada kaç bilet kıtlık oluşur?",
        fig: { type: "graph", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 12, ymax: 12, lines: [{ from: [0, 10], to: [10, 0], label: "D" }, { from: [0, 0], to: [10, 10], label: "S" }], hlines: [{ p: 3, label: "tavan 30 TL" }], xticks: [{ v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }], yticks: [{ v: 3, label: "30" }, { v: 5, label: "50" }] },
        opts: ["20", "30", "70", "40"], a: 3,
        why: "30 TL'de Qd = 100 − 30 = 70, Qs = 30; kıtlık 70 − 30 = 40 bilet. 30 satılan miktardır; 70 ise yalnızca istenen miktardır, kıtlık değil." },
      { q: "Adet başına 20 TL vergi satıcıdan alınıyor. Talep P = 100 − Q, arz P = Q. Vergiden sonra alıcının ödediği fiyat ve devletin vergi geliri nedir?",
        opts: ["60 TL; 800 TL", "70 TL; 800 TL", "60 TL; 1200 TL", "50 TL; 1000 TL"], a: 0,
        why: "Vergili denge: 100 − Q = Q + 20, Q = 40, alıcı 60 TL öder. Gelir = 20 × 40 = 800 TL. 1200 TL'lik şık, vergiyle sübvansiyonu karıştırıp miktarı 60 alır; 1000 TL'lik şık eski miktarı (50) kullanır." },
      { q: "Bir malın talebi çok inelastik, arzı ise elastiktir. Satıcıdan adet başına vergi alınırsa verginin ekonomik yükünü kim daha çok taşır?",
        opts: ["Satıcı, çünkü vergiyi yasal olarak o öder.", "Alıcı, çünkü talep inelastiktir ve fiyat artışına rağmen almaya devam eder.", "İkisi eşit taşır.", "Kimse taşımaz; vergi yalnızca devlete gider."], a: 1,
        why: "Yük esnekliklere göre bölüşülür: daha inelastik taraf (burada alıcı) daha çok taşır. Verginin yasal olarak kimden alındığı sonucu değiştirmez." },
      { q: "Devlet buğday fiyatına denge fiyatının üstünde bir taban koyuyor. Sonuç ne olur?",
        opts: ["Kıtlık oluşur; satılan miktar artar.", "Fazlalık oluşur; satılan miktar artar.", "Fazlalık oluşur; satılan miktar azalır.", "Hiçbir etkisi olmaz."], a: 2,
        why: "Denge üstündeki taban bağlayıcıdır: arz edilen miktar istenenden fazladır, yani fazlalık oluşur. Alıcılar daha az aldığı için satılan miktar azalır ve DWL doğar. Hiçbir etki olmaması, tabanın denge altında olması durumunda geçerlidir." },
      { q: "Grafikte adet başına 20 TL sübvansiyon arzı S'den S_s'ye kaydırıyor (1 birim = 10 TL ve 10 adet). Deadweight loss kaç TL'dir?",
        fig: { type: "graph", xlabel: "Miktar (adet)", ylabel: "Fiyat (TL)", xmax: 13, ymax: 12, lines: [{ from: [0, 10], to: [10, 0], label: "D" }, { from: [0, 0], to: [10, 10], label: "S" }, { from: [2, 0], to: [12, 10], label: "S_s", dash: true }], points: [{ q: 5, p: 5, label: "E" }, { q: 6, p: 4, label: "a", guides: true }, { q: 6, p: 6, label: "b" }], xticks: [{ v: 5, label: "50" }, { v: 6, label: "60" }], yticks: [{ v: 4, label: "40" }, { v: 5, label: "50" }, { v: 6, label: "60" }] },
        opts: ["100", "200", "400", "1200"], a: 0,
        why: "DWL, E–a–b üçgenidir: taban 60 − 50 = 10, yükseklik 60 − 40 = 20; ½ × 10 × 20 = 100 TL. 1200 TL devletin toplam maliyetidir (20 × 60), DWL değil." }
    ]
  };
})();
