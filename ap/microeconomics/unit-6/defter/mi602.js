/* Kitora not defteri · mi602 · 6.2 Dışsallıklar
   Kaynak: CED Topic 6.2 (POL-3.A, POL-3.B). Blok türleri: /ap/_kit/defter.js başı.
   Sayılar: 1 birim = 10 kutu (ya da aşı) ve 10 TL. Dış maliyet / dış fayda 20 TL (2 birim).
   Negatif: D=MPB=MSB y=10−x, S=MPC y=x, MSC y=x+2 → piyasa (5,5), optimum (4,6). DWL = ½×1×2 = 1 birim = 100 TL.
   Pozitif: MSB y=12−x, S=MSC → piyasa (5,5), optimum (6,6). Vergi geliri 20×40 = 800 TL; sübvansiyon maliyeti 20×60 = 1200 TL. */
window.DEFTER = (function () {
  function graf(baslik, xt, yt, og, ds) {
    var ids = og.map(function (o) { return o.id; });
    return {
      tip: "grafik", baslik: baslik, xlabel: "Miktar (Q)", ylabel: "TL", xmax: 10, ymax: 10, xticks: xt, yticks: yt, ogeler: og,
      durumlar: ds.map(function (d) { return { metin: d[0], goster: d[1], gizle: ids.filter(function (x) { return d[1].indexOf(x) < 0; }) }; })
    };
  }
  var NEG = [
    { id: "dwl", tip: "alan", renk: 2, noktalar: [[4, 6], [5, 7], [5, 5]], gizli: true },
    { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [9, 1], etiket: "D" },
    { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [9, 9], etiket: "MPC" },
    { id: "MSC", tip: "cizgi", renk: 2, from: [0, 2], to: [7.5, 9.5], etiket: "MSC", gizli: true },
    { id: "ok", tip: "ok", renk: 2, from: [6, 6.15], to: [6, 7.85], gizli: true },
    { id: "tm", tip: "yazi", x: 6.95, y: 7.2, metin: "MEC", gizli: true },
    { id: "Em", tip: "nokta", renk: 3, x: 5, y: 5, etiket: "M", kilavuz: true },
    { id: "Es", tip: "nokta", renk: 3, x: 4, y: 6, etiket: "A", kilavuz: true, gizli: true },
    { id: "pq", tip: "nokta", renk: 2, x: 5, y: 7, etiket: "", gizli: true }
  ];
  var POZ = [
    { id: "dwl", tip: "alan", renk: 2, noktalar: [[5, 5], [6, 6], [5, 7]], gizli: true },
    { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [9, 1], etiket: "MPB" },
    { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [9, 9], etiket: "S" },
    { id: "MSB", tip: "cizgi", renk: 3, from: [2.5, 9.5], to: [9, 3], etiket: "MSB", gizli: true },
    { id: "ok", tip: "ok", renk: 3, from: [3, 7.2], to: [3, 8.8], gizli: true },
    { id: "tb", tip: "yazi", x: 3.8, y: 7.6, metin: "MEB", gizli: true },
    { id: "Em", tip: "nokta", renk: 2, x: 5, y: 5, etiket: "M", kilavuz: true },
    { id: "Es", tip: "nokta", renk: 2, x: 6, y: 6, etiket: "A", kilavuz: true, gizli: true },
    { id: "pq", tip: "nokta", renk: 3, x: 5, y: 7, etiket: "", gizli: true }
  ];
  var VER = [
    { id: "rev", tip: "alan", renk: 3, noktalar: [[0, 4], [4, 4], [4, 6], [0, 6]], gizli: true },
    { id: "trev", tip: "yazi", x: 2, y: 4.8, metin: "Vergi geliri", gizli: true },
    { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [9, 1], etiket: "D" },
    { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [9, 9], etiket: "S" },
    { id: "MSC", tip: "cizgi", renk: 2, from: [0, 2], to: [7.5, 9.5], etiket: "MSC", gizli: true },
    { id: "ok", tip: "ok", renk: 2, from: [6.5, 6.6], to: [6.5, 8.4], gizli: true },
    { id: "tt", tip: "yazi", x: 7.4, y: 7.5, metin: "vergi", gizli: true },
    { id: "E0", tip: "nokta", renk: 3, x: 5, y: 5, etiket: "E₀", kilavuz: true },
    { id: "E1", tip: "nokta", renk: 3, x: 4, y: 6, etiket: "E₁", kilavuz: true, gizli: true },
    { id: "ps", tip: "nokta", renk: 1, x: 4, y: 4, etiket: "", kilavuz: true, gizli: true }
  ];
  var SUB = [
    { id: "rev", tip: "alan", renk: 3, noktalar: [[0, 4], [6, 4], [6, 6], [0, 6]], gizli: true },
    { id: "trev", tip: "yazi", x: 3, y: 4.8, metin: "Hükümetin maliyeti", gizli: true },
    { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [9, 1], etiket: "MPB" },
    { id: "MSB", tip: "cizgi", renk: 3, from: [2.5, 9.5], to: [9, 3], etiket: "MSB" },
    { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [9, 9], etiket: "S" },
    { id: "Sk", tip: "cizgi", renk: 1, kesik: true, from: [0, 0], to: [9, 9], etiket: "", gizli: true },
    { id: "S1", tip: "cizgi", renk: 2, from: [2, 0], to: [9, 7], etiket: "S₁", gizli: true },
    { id: "ok", tip: "ok", renk: 2, from: [3.5, 3.3], to: [3.5, 1.7], gizli: true },
    { id: "E0", tip: "nokta", renk: 3, x: 5, y: 5, etiket: "E₀", kilavuz: true },
    { id: "E1", tip: "nokta", renk: 2, x: 6, y: 4, etiket: "E₁", kilavuz: true, gizli: true },
    { id: "ps", tip: "nokta", renk: 1, x: 6, y: 6, etiket: "", kilavuz: true, gizli: true }
  ];

  return {
    slug: "mi602",
    amac: "Bu konu dışsallıkları anlatıyor: bir işlemin, işlemde yer almayan üçüncü kişilere yüklediği maliyet ya da sağladığı fayda. Negatif ve pozitif dışsallığın grafiklerini, ölü ağırlık kaybını, Pigou vergisi ile sübvansiyonunu ve diğer çözüm yollarını öğreneceksin.",
    bolumler: [
      {
        baslik: "Dışsallık nedir?",
        kisa: "Dışsallık, işlemde yer almayan üçüncü kişilere yansıyan fayda ya da maliyettir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🌫️", terim: "Externality", tr: "dışsallık", tanim: "Bir işlemin, işleme katılmayan üçüncü kişilere yansıttığı ve fiyata girmeyen fayda ya da maliyet.", ornek: "Yurt yanındaki barın gece müziği." },
              { ikon: "🏭", terim: "Marginal external cost (MEC)", tr: "marjinal dış maliyet", tanim: "Son birimin üçüncü kişilere yüklediği maliyet. MSC = MPC + MEC.", ornek: "Boya atığının dereye verdiği zarar." },
              { ikon: "💉", terim: "Marginal external benefit (MEB)", tr: "marjinal dış fayda", tanim: "Son birimin üçüncü kişilere sağladığı fayda. MSB = MPB + MEB.", ornek: "Aşı olanın başkalarını da koruması." }
            ] },
          { tip: "ikili",
            sol: { ikon: "😷", baslik: "Negatif dışsallık", maddeler: ["Üçüncü kişiye maliyet yükler", "MSC > MPC", "Piyasa etkinden fazla üretir"] },
            sag: { ikon: "🌸", baslik: "Pozitif dışsallık", maddeler: ["Üçüncü kişiye fayda sağlar", "MSB > MPB", "Piyasa etkinden az üretir"] },
            oyun: [
              { metin: "Yurt yanındaki bar geceleri yüksek sesle müzik çalıyor.", cevap: "sol", neden: "Komşulara maliyet yüklüyor: negatif." },
              { metin: "Bir öğrenci grip aşısı olunca sınıf arkadaşlarının hastalanma riski de düşüyor.", cevap: "sag", neden: "Üçüncü kişilere fayda: pozitif." },
              { metin: "Boya fabrikası atığını dereye bırakıyor.", cevap: "sol", neden: "Dere kullananlara maliyet: negatif." },
              { metin: "Komşunun arı kovanı, senin sebze bahçeni de tozlaştırıyor.", cevap: "sag", neden: "Karşılıksız fayda: pozitif." }
            ] },
          { tip: "tablo", baslik: "Dışsallıklar: üretim ve tüketim", head: ["", "Negatif", "Pozitif"], rows: [
              ["Üretimde", "Fabrika dumanı, nehre atık", "Arıcılık (komşu bahçe tozlaşır)"],
              ["Tüketimde", "Sigara dumanı, gürültü", "Aşı, eğitim"]
            ] }
        ]
      },
      {
        baslik: "Dışsallık neden doğar?",
        kisa: "Mülkiyet hakkı belirsizse ya da pazarlık çok pahalıysa dışsallık çözülmez.",
        bloklar: [
          { tip: "not", metin: "Dışsallık iki kaynaktan doğar: ==mülkiyet hakları belirsizdir== (kirlenen dere kimsenin değildir) ve/veya ==işlem (pazarlık) maliyeti yüksektir== (binlerce kişinin birlikte pazarlık etmesi zordur). Fayda dışlanamıyorsa kimse bedelini ödemek istemez: ==bedavacı== (*free rider*); ayrıntısı 6.3'te." },
          { tip: "adimlar", baslik: "Rasyonel karar neden yanlış sonuç verir?", adimlar: [
              { baslik: "Karar", metin: "Boya fabrikası MPB = MPC'ye göre üretir: yalnızca kendi maliyetine bakar." },
              { baslik: "Dış maliyet", metin: "Derenin kirlenmesi balıkçıların cebine yazılır; fabrikanın hesabında yoktur." },
              { baslik: "Sonuç", metin: "Üretim, toplumun isteyeceğinden (MSB = MSC) fazla olur." }
            ] }
        ]
      },
      {
        baslik: "Negatif dışsallık: fazla üretim",
        kisa: "Dış maliyet karara girmez; piyasa etkinden fazla üretir ve DWL doğar.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "MSC", alt: "toplumun gerçek maliyeti" }, "=",
              { t: "MPC", alt: "üreticinin maliyeti" }, "+",
              { t: "MEC", alt: "dış maliyet" }
            ],
            aciklama: "Piyasa MPB = MPC'de dengelenir; sosyal optimum MSB = MSC'dedir. MSC, MPC'nin üstünde olduğu için optimum miktar piyasa miktarından ==azdır==." },
          graf("Boya fabrikası: negatif dışsallık", [{ v: 4, label: "40" }, { v: 5, label: "50" }], [{ v: 5, label: "50" }, { v: 6, label: "60" }, { v: 7, label: "70" }], NEG, [
            ["Piyasa: alıcı özel faydaya (MPB = D), satıcı özel maliyete (MPC) bakar. Denge M: ==50 kutu, 50 TL==.", ["D", "S", "Em"]],
            ["Fabrika dereyi kirletiyor: her kutu için ==20 TL dış maliyet (MEC)==. Toplumun gerçek maliyeti MSC = MPC + MEC, arzın 20 TL üstündedir.", ["D", "S", "Em", "MSC", "ok", "tm"]],
            ["Sosyal optimum MSB = MSC olduğu A noktasında: ==40 kutu, 60 TL==. Piyasa M'de 10 kutu fazla üretiyor.", ["D", "S", "Em", "MSC", "ok", "tm", "Es"]],
            ["Kırmızı üçgen ==*deadweight loss*==: 41. ile 50. kutular arasında MSC (dış maliyet dahil) MSB'den büyük olduğu halde üretildi.", ["D", "S", "Em", "MSC", "Es", "dwl", "pq"]]
          ]),
          { tip: "ornek", baslik: "Boya fabrikasında DWL",
            durum: "Piyasa 50 kutu üretiyor; dış maliyet 20 TL/kutu; sosyal optimum 40 kutu.",
            adimlar: [
              "Taban: 50 − 40 = 10 kutu.",
              "Yükseklik: 50. kutuda MSC − MPB = 70 − 50 = 20 TL (dış maliyet).",
              "DWL = ½ × 10 × 20 = 100 TL."
            ],
            sonuc: "Fazla üretilen 10 kutu toplumdan 100 TL'lik net değer götürüyor." },
          { tip: "tuzak", metin: "Amaç dışsallığı tamamen yok etmek değil, MSB = MSC'yi sağlamaktır.", yanlis: "Kirliliği sıfıra indirmek sosyal optimumdur.", dogru: "Optimumda üretim ==azalır ama sıfır olmaz==: kirliliğin son biriminin zararı, kutunun faydasına eşit olunca durulur." }
        ]
      },
      {
        baslik: "Pozitif dışsallık: yetersiz üretim",
        kisa: "Dış fayda karara girmez; piyasa etkinden az üretir ve DWL doğar.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "MSB", alt: "toplumun gerçek faydası" }, "=",
              { t: "MPB", alt: "alıcının faydası" }, "+",
              { t: "MEB", alt: "dış fayda" }
            ],
            aciklama: "Alıcı yalnızca MPB'ye bakar. MSB, MPB'nin üstünde olduğu için optimum miktar piyasa miktarından ==fazladır==." },
          graf("Grip aşısı: pozitif dışsallık", [{ v: 5, label: "50" }, { v: 6, label: "60" }], [{ v: 5, label: "50" }, { v: 6, label: "60" }, { v: 7, label: "70" }], POZ, [
            ["Piyasa: alıcılar MPB'ye, satıcılar MSC = MPC'ye bakar. Denge M: ==50 aşı, 50 TL==.", ["D", "S", "Em"]],
            ["Aşı olan başkalarını da korur: her aşıda ==20 TL dış fayda (MEB)==. Toplumun gerçek faydası MSB = MPB + MEB, talebin 20 TL üstündedir.", ["D", "S", "Em", "MSB", "ok", "tb"]],
            ["Sosyal optimum MSB = MSC olduğu A noktasında: ==60 aşı==. Piyasa M'de 10 aşı eksik üretiyor.", ["D", "S", "Em", "MSB", "ok", "tb", "Es"]],
            ["Kırmızı üçgen ==DWL==: 51. ile 60. aşılar arasında MSB, MSC'den büyük olduğu halde üretilmedi (½ × 10 × 20 = 100 TL).", ["D", "S", "Em", "MSB", "Es", "dwl", "pq"]]
          ])
        ]
      },
      {
        baslik: "Pigou vergisi ve sübvansiyonu",
        kisa: "Vergi dış maliyete, sübvansiyon dış faydaya eşitse optimum miktara ulaşılır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🧾", terim: "Pigouvian tax", tr: "Pigou vergisi", tanim: "Negatif dışsallığı olan malda birim başına dış maliyete (MEC) eşit vergi: üretici dış maliyeti içselleştirir.", ornek: "Boya kutusu başına 20 TL." },
              { ikon: "🎁", terim: "Pigouvian subsidy", tr: "Pigou sübvansiyonu", tanim: "Pozitif dışsallığı olan malda birim başına dış faydaya (MEB) eşit sübvansiyon: alıcının ödediği fiyat düşer, miktar artar.", ornek: "Aşı başına 20 TL." }
            ] },
          graf("Vergi: fazla üretimi düzeltir", [{ v: 4, label: "40" }, { v: 5, label: "50" }], [{ v: 4, label: "40" }, { v: 5, label: "50" }, { v: 6, label: "60" }], VER, [
            ["Vergisiz piyasa: E₀'da ==50 kutu== üretilir, fazla.", ["D", "S", "E0"]],
            ["Hükümet kutu başına ==20 TL vergi== (= dış maliyet) koyar. Satıcının her kutuda katlandığı ek maliyet arzı yukarı kaydırır; yeni arz eğrisi MSC ile çakışır.", ["D", "S", "E0", "MSC", "ok", "tt"]],
            ["Yeni denge E₁: ==40 kutu== (sosyal optimum). Alıcı 60 TL öder; satıcı vergiyi ödeyince eline 60 − 20 = 40 TL geçer.", ["D", "S", "MSC", "E1", "ps"]],
            ["Vergi geliri = 20 TL × 40 kutu = ==800 TL==. Dış maliyet içselleşti ve DWL yok oldu.", ["D", "S", "MSC", "E1", "ps", "rev", "trev"]]
          ]),
          graf("Sübvansiyon: yetersiz üretimi düzeltir", [{ v: 5, label: "50" }, { v: 6, label: "60" }], [{ v: 4, label: "40" }, { v: 5, label: "50" }, { v: 6, label: "60" }], SUB, [
            ["Sübvansiyonsuz piyasa: E₀'da ==50 aşı==, optimumdan az.", ["D", "MSB", "S", "E0"]],
            ["Hükümet aşı başına ==20 TL sübvansiyon== (= dış fayda) verir. Satıcının maliyeti 20 TL azalır: arz aşağı kayar (S₁).", ["D", "MSB", "Sk", "S1", "ok", "E0"]],
            ["Yeni denge E₁: ==60 aşı== (sosyal optimum). Alıcı 40 TL öder; satıcı 40 + 20 = 60 TL alır.", ["D", "MSB", "Sk", "S1", "E1", "ps"]],
            ["Hükümetin maliyeti = 20 TL × 60 aşı = ==1.200 TL==. Karşılığında MSB = MSC sağlandı ve DWL yok oldu.", ["D", "MSB", "Sk", "S1", "E1", "ps", "rev", "trev"]]
          ]),
          { tip: "tuzak", metin: "Vergi dış maliyetle sınırlı olmalı.", yanlis: "Vergi ne kadar yüksekse o kadar iyidir.", dogru: "En iyi vergi, optimum miktardaki ==dış maliyete eşit== olandır. Daha yüksek vergi miktarı etkinden de aşağı çeker ve yeni bir DWL doğurur." }
        ]
      },
      {
        baslik: "Diğer çözümler: kurallar, mülkiyet hakkı, pazarlık",
        kisa: "Vergiden başka çözümler: düzenleme, kamu üretimi, mülkiyet hakkı ve özel pazarlık.",
        bloklar: [
          { tip: "tablo", baslik: "Dışsallık politikaları", head: ["Araç", "Nasıl çalışır?", "Örnek"], rows: [
              ["Vergi ve sübvansiyon", "Dış maliyeti ya da faydayı fiyata katar", "Boyaya vergi, aşıya sübvansiyon"],
              ["Çevre düzenlemesi (*regulation*)", "Kirliliği yasal sınırla kısar", "Fabrikaya atık standardı"],
              ["Kamu üretimi (*public provision*)", "Devlet malı kendisi sağlar", "Devlet hastanesinde aşı"],
              ["Mülkiyet hakkının verilmesi", "Kaynağın sahibi belli olunca hasar tazmin edilir", "Dereyi balıkçı kooperatifine vermek"],
              ["Özel işlemle yeniden dağıtım", "Taraflar hak üzerinde pazarlık yapar", "Komşuyla gürültü anlaşması"]
            ] },
          { tip: "adimlar", baslik: "Komşuyla pazarlık (Coase fikri)", adimlar: [
              { baslik: "Hak belli", metin: "Gece sessizlik hakkı komşuya ait." },
              { baslik: "Pazarlık", metin: "Gürültü komşuya 60 TL zarar veriyor, müzik öğrenciye 100 TL değerinde. Öğrenci 60–100 TL arası bir ödemeyle anlaşır." },
              { baslik: "Sonuç", metin: "Dışsallık içselleşir. İşlem maliyeti yüksekse (çok kişi) bu yol çalışmaz." }
            ] }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "*Externality*: işlemde yer almayan üçüncü kişilere yansıyan fayda ya da maliyet; fiyata girmez.",
              "Nedenleri: belirsiz mülkiyet hakları ve/veya yüksek işlem maliyeti.",
              "Negatif dışsallık: MSC = MPC + MEC; piyasa fazla üretir, optimum miktar piyasadan azdır.",
              "Pozitif dışsallık: MSB = MPB + MEB; piyasa az üretir, optimum miktar piyasadan fazladır.",
              "DWL = ½ × miktar farkı × dış maliyet (ya da dış fayda).",
              "Pigou vergisi = MEC, Pigou sübvansiyonu = MEB: miktarı optimuma getirir.",
              "Diğer araçlar: düzenleme, kamu üretimi, mülkiyet hakkı atama, özel pazarlık.",
              "Hedef dışsallığı sıfırlamak değil, MSB = MSC'yi sağlamaktır."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Yurdun yanındaki bir bar, geceleri yüksek sesle müzik çalarak çevre sakinlerinin uykusunu bozuyor. Bu durum için hangisi doğrudur?",
        opts: ["Pozitif dışsallık; piyasa etkinden az üretir.", "Negatif dışsallık; MSC > MPC olduğundan piyasa etkinden fazla üretir.", "Negatif dışsallık; MSB > MPB olduğundan piyasa etkinden az üretir.", "Dışsallık yoktur; piyasa etkindir."],
        a: 1, why: "Bar, maliyetin bir kısmını komşulara yükler: negatif dışsallık. Dış maliyet barın kararına girmez, MSC > MPC olur ve piyasa fazla üretir. C şıkkı faydaya ait (MSB > MPB) ifadeyi negatif dışsallığa yapıştırıyor." },
      { q: "Grafikte bir malın üretiminde dışsallık vardır. Piyasa miktarı ile sosyal optimum miktar ve uygun politika için hangisi doğrudur?",
        fig: { type: "graph", xlabel: "Miktar (Q)", ylabel: "TL", xmax: 10, ymax: 10, lines: [{ from: [0, 10], to: [9, 1], label: "D" }, { from: [0, 0], to: [9, 9], label: "MPC", color: 1 }, { from: [0, 2], to: [7.5, 9.5], label: "MSC", color: 2 }], points: [{ q: 5, p: 5, label: "M" }, { q: 4, p: 6, label: "A" }], xticks: [{ v: 4, label: "Q₁" }, { v: 5, label: "Q₂" }] },
        opts: ["Piyasa Q₁, optimum Q₂; sübvansiyon gerekir.", "Piyasa ve optimum Q₂; müdahale gerekmez.", "Piyasa Q₂, optimum Q₁; sübvansiyon gerekir.", "Piyasa Q₂, optimum Q₁; Pigou vergisi gerekir."],
        a: 3, why: "MSC, MPC'nin üstünde: negatif dışsallık. Piyasa MPB = MPC'de (Q₂), optimum MSB = MSC'de (Q₁) olur. Fazla üretim vergiyle düzeltilir. C şıkkında miktarlar doğru ama sübvansiyon yanlış araçtır." },
      { q: "Boya üretiminde her kutu için 20 TL dış maliyet vardır; sosyal optimum 40 kutudur. Hükümet kutu başına ne kadar Pigou vergisi koymalı ve vergi geliri ne olur?",
        opts: ["Kutu başına 20 TL; gelir 800 TL", "Kutu başına 40 TL; gelir 1.600 TL", "Kutu başına 20 TL; gelir 1.000 TL", "Kutu başına 70 TL; gelir 2.800 TL"],
        a: 0, why: "Pigou vergisi marjinal dış maliyete eşittir: 20 TL. Vergi, optimum miktar olan 40 kutuya uygulanır: 20 × 40 = 800 TL. C şıkkı piyasa miktarı olan 50 kutuyu kullanıyor; oysa vergiden sonra üretim 40 kutuya iner." },
      { q: "İki komşu arasındaki gürültü sorununda mülkiyet hakları net ve pazarlık maliyeti düşükse ne beklenir?",
        opts: ["Devlet mutlaka vergi koymalıdır.", "Dışsallık hiçbir şekilde çözülemez.", "Taraflar kendi aralarında pazarlık ederek etkin sonuca ulaşabilir.", "Gürültü her zaman artar."],
        a: 2, why: "Dışsallıklar mülkiyet haklarının belirsizliği ve yüksek işlem maliyetinden doğar. Bunlar yoksa taraflar anlaşarak dışsallığı içselleştirebilir. A şıkkı, devletin tek çözüm olduğunu varsayıyor." },
      { q: "Grip aşısının pozitif dışsallığı vardır. Aşağıdakilerden hangisi doğrudur?",
        opts: ["MPB > MSB'dir; piyasa aşıyı fazla üretir.", "MSB > MPB'dir; piyasa aşıyı az üretir. Dış fayda kadar birim başı sübvansiyon etkinliği sağlar.", "MSC > MPC'dir; piyasa aşıyı fazla üretir.", "Birim başı vergi koymak etkin miktarı sağlar."],
        a: 1, why: "Pozitif dışsallıkta toplumsal fayda (MSB), özel faydanın (MPB) üstündedir; alıcılar dış faydayı hesaba katmadığı için az talep eder. Dış faydaya eşit sübvansiyon miktarı optimuma çıkarır. D şıkkı miktarı daha da azaltırdı." }
    ]
  };
})();
