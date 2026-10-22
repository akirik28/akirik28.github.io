/* Kitora not defteri · mi601 · 6.1 Etkin ve Etkin Olmayan Sonuçlar
   Kaynak: CED Topic 6.1 (POL-2.A, B, C). Blok türleri: /ap/_kit/defter.js başı.
   Not: grafikte MSB = D: (0,10)→(9,1), MSC = S: (0,0)→(9,9); denge (5,5). 1 birim = 10 tost, 10 TL.
   Az üretim Q=3: MSB 7, MSC 3; fazla üretim Q=7: MSB 3, MSC 7. DWL = ½ × 2 × 4 = 4 birim = 400 TL. */
window.DEFTER = (function () {
  function ogeler() {
    return [
      { id: "cs", tip: "alan", renk: 0, noktalar: [[0, 10], [5, 5], [0, 5]], gizli: true },
      { id: "ps", tip: "alan", renk: 1, noktalar: [[0, 0], [5, 5], [0, 5]], gizli: true },
      { id: "dw1", tip: "alan", renk: 2, noktalar: [[3, 7], [5, 5], [3, 3]], gizli: true },
      { id: "dw2", tip: "alan", renk: 2, noktalar: [[5, 5], [7, 3], [7, 7]], gizli: true },
      { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [9, 1], etiket: "MSB" },
      { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [9, 9], etiket: "MSC" },
      { id: "E", tip: "nokta", renk: 3, x: 5, y: 5, etiket: "E", kilavuz: true, gizli: true },
      { id: "a1", tip: "nokta", renk: 0, x: 3, y: 7, etiket: "MSB", gizli: true },
      { id: "a2", tip: "nokta", renk: 1, x: 3, y: 3, etiket: "MSC", gizli: true },
      { id: "b1", tip: "nokta", renk: 0, x: 7, y: 3, etiket: "MSB", gizli: true },
      { id: "b2", tip: "nokta", renk: 1, x: 7, y: 7, etiket: "MSC", gizli: true },
      { id: "tcs", tip: "yazi", x: 1.6, y: 6.7, metin: "CS", gizli: true },
      { id: "tps", tip: "yazi", x: 1.6, y: 3.3, metin: "PS", gizli: true },
      { id: "td1", tip: "yazi", x: 4.0, y: 5.0, metin: "DWL", gizli: true },
      { id: "td2", tip: "yazi", x: 6.4, y: 5.0, metin: "DWL", gizli: true }
    ];
  }
  var TUM = ogeler().map(function (o) { return o.id; });
  function ac(metin, acik) {
    return { metin: metin, goster: acik, gizle: TUM.filter(function (x) { return acik.indexOf(x) < 0; }) };
  }
  function graf(baslik, durumlar) {
    return {
      tip: "grafik", baslik: baslik, xlabel: "Miktar (Q)", ylabel: "TL", xmax: 10, ymax: 10,
      xticks: [{ v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }],
      yticks: [{ v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }],
      ogeler: ogeler(), durumlar: durumlar
    };
  }

  return {
    slug: "mi601",
    amac: "Bu konu bir malın toplum için ideal miktarının ne olduğunu anlatıyor. Sosyal etkinliği (MSB = MSC), rekabetçi piyasanın neden etkin olduğunu, etkin olmayan miktarın doğurduğu ölü ağırlık kaybını ve bunun nedenlerini öğreneceksin.",
    bolumler: [
      {
        baslik: "Sosyal etkinlik: MSB = MSC",
        kisa: "Son birimin toplumsal faydası maliyetine eşitse miktar sosyal olarak en iyidir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "⚖️", terim: "Social efficiency", tr: "sosyal etkinlik", tanim: "Toplam ekonomik artığın (CS + PS) en yüksek olduğu durum; bunun için son birimin MSB'si MSC'sine eşit olmalıdır.", ornek: "Kantinde tost faydası ve maliyeti tam dengelenen tost sayısı." },
              { ikon: "😋", terim: "Marginal social benefit (MSB)", tr: "marjinal toplumsal fayda", tanim: "Son birimin toplumun tamamına (alıcı ve başkalarına) sağladığı fayda.", ornek: "Tost, alıcıyı doyurur." },
              { ikon: "💸", terim: "Marginal social cost (MSC)", tr: "marjinal toplumsal maliyet", tanim: "Son birimin toplumun tamamına (üretici ve başkalarına) yüklediği maliyet.", ornek: "Tostun malzemesi ve emeği." }
            ] },
          { tip: "formul", parcalar: [
              { t: "MSB", alt: "son birimin toplumsal faydası" }, "=",
              { t: "MSC", alt: "son birimin toplumsal maliyeti" }
            ],
            aciklama: "MSB > MSC iken bir birim daha üretmek toplumu kazançlı yapar; MSB < MSC iken kayıplı yapar. Optimal miktar ==MSB = MSC== olan miktardır." }
        ]
      },
      {
        baslik: "Rekabetçi piyasa neden etkin?",
        kisa: "Bütün fayda ve maliyetler içselse piyasa dengesi sosyal olarak en iyisidir.",
        bloklar: [
          { tip: "not", metin: "Alıcı özel faydaya (MPB), satıcı özel maliyete (MPC) bakar. Başkasına yansıyan fayda ya da maliyet yoksa, yani hepsi ==*internalized*== (içselleşmiş) ise MPB = MSB ve MPC = MSC olur. O zaman piyasa dengesinde MSB = MSC sağlanır ve toplam ekonomik artık en yüksektir." },
          graf("Rekabetçi denge: sosyal optimum", [
            ac("Talep eğrisi her ek birimin alıcıya değerini (MSB), arz eğrisi her ek birimin maliyetini (MSC) gösterir. Dışsallık yok.", ["D", "S"]),
            ac("Piyasa dengesi E noktasında: ==MSB = MSC== ve fiyat bu ikisine eşit (P = MB = MC). Denge miktarı sosyal optimumdur.", ["D", "S", "E"]),
            ac("Denge miktarında ==*consumer surplus* (CS)== ve ==*producer surplus* (PS)== toplamı en yüksektir. Başka hiçbir miktarda bu toplam bundan büyük olmaz.", ["D", "S", "E", "cs", "ps", "tcs", "tps"])
          ]),
          { tip: "tuzak", metin: "Etkinlik ile adalet farklı kavramlardır.", yanlis: "Etkin sonuç, herkesin eşit pay aldığı sonuçtur.", dogru: "Etkinlik toplam artığı en büyük yapar; artığın kimlere gittiği (eşitlik) ayrı bir sorudur (6.5)." }
        ]
      },
      {
        baslik: "Etkin olmayan miktar: ölü ağırlık kaybı",
        kisa: "Etkin miktardan her sapma, DWL denen kayıp doğurur.",
        bloklar: [
          graf("Az üretim ve fazla üretim", [
            ac("Etkin miktar 50 tost (E). Burada MSB = MSC, kayıp yok.", ["D", "S", "E"]),
            ac("Az üretim: yalnızca 30 tost üretilirse 30. tostta MSB (70 TL) MSC'den (30 TL) büyük. Üretilmeyen tostların net faydası boşa gitti: ==*deadweight loss* (DWL)==.", ["D", "S", "E", "a1", "a2", "dw1", "td1"]),
            ac("Fazla üretim: 70 tost üretilirse 70. tostta MSC (70 TL) MSB'den (30 TL) büyük. Değerinden pahalıya üretilen tostlar da DWL doğurur.", ["D", "S", "E", "b1", "b2", "dw2", "td2"])
          ]),
          { tip: "ornek", baslik: "DWL nasıl hesaplanır?",
            durum: "Etkin miktar 50 tost. Kantin yalnızca 30 tost üretiyor. 30. tostta MSB = 70 TL, MSC = 30 TL.",
            adimlar: [
              "Üçgenin tabanı: etkin miktar ile üretilen miktar farkı, 50 − 30 = 20 tost.",
              "Üçgenin yüksekliği: o miktardaki MSB − MSC = 70 − 30 = 40 TL.",
              "DWL = ½ × taban × yükseklik = ½ × 20 × 40 = 400 TL."
            ],
            sonuc: "400 TL'lik net fayda hiç doğmadı. Fazla üretimde de aynı üçgen hesabı yapılır; MSC − MSB farkı alınır." }
        ]
      },
      {
        baslik: "Piyasalar neden etkin olmayabilir?",
        kisa: "Piyasa gücü, dışsallık, eksik bilgi ve kamu malı eksikliği etkinliği bozar.",
        bloklar: [
          { tip: "ikili",
            sol: { ikon: "📈", baslik: "Aşırı üretim", maddeler: ["MSC > MSB", "Son birim değerinden pahalıya üretilir"] },
            sag: { ikon: "📉", baslik: "Yetersiz üretim", maddeler: ["MSB > MSC", "Üretilmeyen birimler kazanç getirirdi"] },
            oyun: [
              { metin: "Tek satıcı olan firma fiyatı yükseltip miktarı kısıyor.", cevap: "sag", neden: "Piyasa gücü: P > MC, miktar etkin düzeyden az." },
              { metin: "Fabrika, çevreye verdiği zararın bedelini ödemeden üretiyor.", cevap: "sol", neden: "Negatif dışsallık: MSC > MPC, fazla üretim." },
              { metin: "Aşı olan başkalarını da korur ama bu fayda kararına girmez.", cevap: "sag", neden: "Pozitif dışsallık: MSB > MPB, az üretim." },
              { metin: "Her sürücü, başkalarına yarattığı trafik sıkışıklığını hesaba katmıyor.", cevap: "sol", neden: "Negatif dışsallık: dış maliyet karara girmez, fazla kullanım." }
            ] },
          { tip: "tablo", baslik: "Etkin olmayan sonuçların kaynakları",
            head: ["Kaynak", "Ne olur?", "Miktar", "Konu"],
            rows: [
              ["*Monopoly*, *oligopoly*, *monopolistic competition*", "Firma fiyatı MC'nin üstüne koyar (P > MC)", "Etkinden az", "Unit 4"],
              ["Negatif dışsallık", "Dış maliyet karara girmez", "Etkinden fazla", "6.2"],
              ["Pozitif dışsallık", "Dış fayda karara girmez", "Etkinden az", "6.2"],
              ["*Asymmetric information* (eksik bilgi)", "Bir taraf diğerinden fazlasını bilir; ikinci el telefonda kusuru yalnız satıcı bilir", "Etkin düzeyden sapar", "—"],
              ["Kamu malı", "Bedavacı sorunu yüzünden özel firma üretmez", "Etkinden az", "6.3"]
            ] }
        ]
      },
      {
        baslik: "Politika: maliyet-fayda analizi",
        kisa: "Politika yapıcı, MSB MSC'yi geçtiği sürece eylemi artırır.",
        bloklar: [
          { tip: "ornek", baslik: "Okul bahçesine kaç güvenlik kamerası?",
            durum: "Belediye, kamera sayısına maliyet-fayda analiziyle karar veriyor (bin TL). 1. kamera: MSB 80, MSC 30. 2.: MSB 50, MSC 40. 3.: MSB 30, MSC 50.",
            adimlar: [
              "1. kamera: 80 > 30, kur (net +50).",
              "2. kamera: 50 > 40, kur (net +10).",
              "3. kamera: 30 < 50, kurma (net −20)."
            ],
            sonuc: "2 kamera: toplumsal net kazanç 60 bin TL. Üçüncüyü kurmak 20 bin TL kayıp olurdu." },
          { tip: "not", metin: "Piyasa etkin olmadığında hedef MSB = MSC'yi yeniden kurmaktır. Araçlar: vergi ve sübvansiyon, düzenleme, kamu üretimi, mülkiyet hakları ve rekabet politikası (6.2–6.4)." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Optimal miktar, son birimde MSB = MSC olan miktardır; toplam ekonomik artık (CS + PS) en yüksektir.",
              "Bütün fayda ve maliyetler içselse (*internalized*) piyasa dengesi sosyal optimumdur: P = MB = MC.",
              "Etkin miktardan her sapma ölü ağırlık kaybı (*DWL*) doğurur.",
              "DWL = ½ × taban (miktar farkı) × yükseklik (MSB ile MSC arasındaki fark).",
              "Az üretimde MSB > MSC, fazla üretimde MSC > MSB'dir.",
              "Etkinsizlik kaynakları: tekel, oligopol, tekelci rekabet, dışsallıklar, eksik bilgi, kamu malı yetersizliği.",
              "Etkinlik ile eşitlik farklı şeylerdir.",
              "Politika yapıcılar maliyet-fayda analiziyle MSB'yi MSC'ye eşitlemeyi hedefler."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Grafikte bir malın MSB ve MSC eğrileri görülüyor. Hangi miktar sosyal olarak etkindir?",
        fig: { type: "graph", xlabel: "Miktar (Q)", ylabel: "TL", xmax: 10, ymax: 10, lines: [{ from: [0, 10], to: [9, 1], label: "MSB" }, { from: [0, 0], to: [9, 9], label: "MSC", color: 1 }], points: [{ q: 5, p: 5, label: "E" }], xticks: [{ v: 3, label: "Q₁" }, { v: 5, label: "Q₂" }, { v: 7, label: "Q₃" }] },
        opts: ["Q₁", "Q₃", "Q₂", "Hiçbiri; ne kadar fazla üretilirse o kadar iyidir."],
        a: 2, why: "Etkin miktar MSB = MSC olan Q₂'dir. Q₁'de MSB > MSC (az üretim), Q₃'te MSC > MSB (fazla üretim); ikisinde de DWL vardır." },
      { q: "Grafikteki malda piyasa 70 birim üretiyor. Etkin miktar 50 birimdir; 70. birimde MSC = 70 TL, MSB = 30 TL'dir. Ölü ağırlık kaybı kaç TL'dir?",
        fig: { type: "graph", xlabel: "Miktar (Q)", ylabel: "TL", xmax: 10, ymax: 10, lines: [{ from: [0, 10], to: [9, 1], label: "MSB" }, { from: [0, 0], to: [9, 9], label: "MSC", color: 1 }], xticks: [{ v: 5, label: "50" }, { v: 7, label: "70" }], yticks: [{ v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }] },
        opts: ["200 TL", "400 TL", "800 TL", "1.600 TL"],
        a: 1, why: "Taban = 70 − 50 = 20 birim, yükseklik = 70 − 30 = 40 TL. DWL = ½ × 20 × 40 = 400 TL. C şıkkı yarısını almayı unutarak taban × yüksekliği (800 TL) verir." },
      { q: "Aşağıdakilerden hangisi sosyal etkinliği doğru tanımlar?",
        opts: ["Son birimin MSB'sinin MSC'sine eşit olduğu, toplam ekonomik artığı en yüksek yapan miktar", "Firmanın kârını en yüksek yapan miktar", "Herkesin eşit gelir elde ettiği durum", "Fiyatın en düşük olduğu miktar"],
        a: 0, why: "Sosyal etkinlik MSB = MSC'de toplam artığın (CS + PS) en yüksek olmasıdır. C şıkkı eşitlik fikridir; etkinlikle aynı şey değildir." },
      { q: "Aşağıdakilerden hangisi etkin miktara göre AŞIRI üretime yol açar?",
        opts: ["Tekel gücü", "Pozitif dışsallık", "Kamu malında bedavacı sorunu", "Negatif dışsallık; örneğin kirliliğin bedelini ödemeyen fabrika"],
        a: 3, why: "Negatif dışsallıkta dış maliyet karara girmez, MSC > MPC olur ve piyasa etkinden fazla üretir. Tekel, pozitif dışsallık ve kamu malı eksik üretime yol açar." },
      { q: "Belediye, ek otobüs seferlerini maliyet-fayda analiziyle seçiyor (MSB ve MSC bin TL). Kaç sefer koyması toplum için en iyidir?",
        fig: { type: "table", head: ["Ek sefer", "MSB", "MSC"], rows: [["1", "90", "40"], ["2", "60", "50"], ["3", "45", "55"], ["4", "20", "60"]] },
        opts: ["1", "2", "3", "4"],
        a: 1, why: "1. ve 2. seferde MSB > MSC (net +50 ve +10), 3. seferde MSB < MSC. Bu yüzden 2 sefer. C şıkkı, toplam fayda toplam maliyetten büyük diye üçüncüyü de ekliyor; karar sıradaki birime göre verilir." }
    ]
  };
})();
