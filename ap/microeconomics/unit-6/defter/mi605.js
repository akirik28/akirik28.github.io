/* Kitora not defteri · mi605 · 6.5 Eşitsizlik
   Kaynak: CED Topic 6.5 (POL-5). Blok türleri: /ap/_kit/defter.js başı.
   Not: CED, Lorenz eğrisi çizmeyi ve Gini hesaplamayı sınav kapsamı dışında tutar; yorumlama kapsamdadır.
   Sayılar (gelir paylarının beşte birlik dilimleri): önce 5-10-15-25-45 → kümülatif 5,15,30,55,100 → Gini 0,38.
   Sonra 8-13-18-26-35 → kümülatif 8,21,39,65,100 → Gini ≈ 0,27. Grafik birimi: 1 birim = %10 (xmax 11 etiket payı için). */
window.DEFTER = (function () {
  var LZ = [
    { id: "ar", tip: "alan", renk: 2, noktalar: [[0, 0], [2, 0.5], [4, 1.5], [6, 3], [8, 5.5], [10, 10], [8, 8], [6, 6], [4, 4], [2, 2]], gizli: true },
    { id: "eq", tip: "cizgi", renk: 0, from: [0, 0], to: [10, 10], etiket: "" },
    { id: "teq", tip: "yazi", x: 7.2, y: 7.7, metin: "eşitlik doğrusu", hiza: "end" },
    { id: "lzA", tip: "egri", renk: 2, noktalar: [[0, 0], [2, 0.5], [4, 1.5], [6, 3], [8, 5.5], [10, 10]], etiket: "", gizli: true },
    { id: "lzB", tip: "egri", renk: 1, noktalar: [[0, 0], [2, 0.8], [4, 2.1], [6, 3.9], [8, 6.5], [10, 10]], etiket: "", gizli: true },
    { id: "l1", tip: "yazi", x: 0.2, y: 9.5, metin: "kırmızı: vergi öncesi", hiza: "start", gizli: true },
    { id: "l2", tip: "yazi", x: 0.2, y: 8.7, metin: "yeşil: vergi sonrası", hiza: "start", gizli: true },
    { id: "tA", tip: "yazi", x: 7.0, y: 5.7, metin: "A", gizli: true },
    { id: "tB", tip: "yazi", x: 7.6, y: 2.2, metin: "B", gizli: true },
    { id: "x1", tip: "cizgi", renk: 3, from: [0, 0], to: [10, 0], etiket: "", gizli: true },
    { id: "x2", tip: "cizgi", renk: 3, from: [10, 0], to: [10, 10], etiket: "", gizli: true },
    { id: "tx", tip: "yazi", x: 5, y: 1.0, metin: "tam eşitsizlik", gizli: true }
  ];
  var LID = LZ.map(function (o) { return o.id; });
  function ac(tum, metin, acik) {
    return { metin: metin, goster: acik, gizle: tum.filter(function (x) { return acik.indexOf(x) < 0; }) };
  }
  var TX = [
    { id: "m1", tip: "cizgi", renk: 3, kesik: true, from: [2, 0], to: [2, 7], etiket: "" },
    { id: "m2", tip: "cizgi", renk: 3, kesik: true, from: [4, 0], to: [4, 7], etiket: "" },
    { id: "m3", tip: "cizgi", renk: 3, kesik: true, from: [8, 0], to: [8, 7], etiket: "" },
    { id: "pr", tip: "cizgi", renk: 0, from: [2, 4], to: [8, 4], etiket: "sabit", gizli: true },
    { id: "pg", tip: "egri", renk: 1, noktalar: [[2, 2], [4, 4], [8, 6]], etiket: "artan", gizli: true },
    { id: "rg", tip: "egri", renk: 2, noktalar: [[2, 4], [4, 3], [8, 2]], etiket: "azalan", gizli: true }
  ];
  var TID = TX.map(function (o) { return o.id; });

  return {
    slug: "mi605",
    amac: "Bu konu gelir ve servet eşitsizliğini nasıl ölçüp açıkladığımızı anlatıyor. Gelir ile servet farkını, Lorenz eğrisi ve Gini katsayısını, artan, orantılı ve azalan oranlı vergi türlerini ve eşitsizliğin kaynaklarını öğreneceksin.",
    bolumler: [
      {
        baslik: "Gelir, servet ve yoksulluk",
        kisa: "Gelir bir akımdır, servet bir stoktur; yoksulluk oranı çizginin altındakilerin payıdır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "💵", terim: "Income", tr: "gelir", tanim: "Belli bir sürede kazanılan para (akım): maaş, burs, kira, faiz.", ornek: "Aylık 3.000 TL harçlık ve burs." },
              { ikon: "🏠", terim: "Wealth", tr: "servet", tanim: "Belli bir anda sahip olunan varlıklar eksi borçlar (stok).", ornek: "Ev, birikim, hisse senedi." },
              { ikon: "📉", terim: "Poverty rate", tr: "yoksulluk oranı", tanim: "Geliri yoksulluk çizgisinin altında kalan nüfusun yüzdesi.", ornek: "Her 100 kişiden 14'ü çizginin altında." }
            ] },
          { tip: "ikili",
            sol: { ikon: "💵", baslik: "Gelir: akım", maddeler: ["Belli bir sürede kazanılır", "Maaş, burs, kira geliri"] },
            sag: { ikon: "🏠", baslik: "Servet: stok", maddeler: ["Belli bir andaki varlık eksi borç", "Ev, birikim, miras"] },
            oyun: [
              { metin: "Aylık burs ve harçlığın 3.000 TL.", cevap: "sol", neden: "Bir dönemde kazanılan para: gelir." },
              { metin: "Ailenin üzerine kayıtlı ev ve bankadaki birikim.", cevap: "sag", neden: "Sahip olunan varlıklar: servet." },
              { metin: "Dükkândan her ay 5.000 TL kira geliri.", cevap: "sol", neden: "Her ay akan para: gelir." },
              { metin: "Dededen kalan arsa.", cevap: "sag", neden: "Bir varlık: servet." }
            ] },
          { tip: "not", metin: "Gelir düzeyi ve yoksulluk oranları hem ülkeler arasında hem ülke içinde (yaş, cinsiyet, ırk gibi gruplar arasında) büyük farklar gösterir. Bu yüzden eşitsizliği tek bir ortalamayla değil, ==dağılımla== ölçeriz." }
        ]
      },
      {
        baslik: "Lorenz eğrisi",
        kisa: "Lorenz eğrisi eşitlik doğrusundan ne kadar uzaksa gelir o kadar eşitsizdir.",
        bloklar: [
          { tip: "tablo", baslik: "Bir ülkede gelirin beşte birlik dilimlere dağılımı (vergi öncesi)",
            head: ["Hane grubu", "Gelir payı", "Kümülatif hane payı", "Kümülatif gelir payı"],
            rows: [["En yoksul %20", "%5", "%20", "%5"], ["İkinci %20", "%10", "%40", "%15"], ["Üçüncü %20", "%15", "%60", "%30"], ["Dördüncü %20", "%25", "%80", "%55"], ["En zengin %20", "%45", "%100", "%100"]],
            not: "Lorenz eğrisi, kümülatif hane payı (yatay) ile kümülatif gelir payı (düşey) noktalarını birleştirir." },
          { tip: "grafik", baslik: "Lorenz eğrisi ve eşitlik doğrusu", xlabel: "Haneler (yoksuldan zengine)", ylabel: "Gelir payı", xmax: 11, ymax: 10,
            xticks: [{ v: 2, label: "%20" }, { v: 4, label: "%40" }, { v: 6, label: "%60" }, { v: 8, label: "%80" }, { v: 10, label: "%100" }],
            yticks: [{ v: 2, label: "%20" }, { v: 4, label: "%40" }, { v: 6, label: "%60" }, { v: 8, label: "%80" }, { v: 10, label: "%100" }],
            ogeler: LZ,
            durumlar: [
              ac(LID, "Mükemmel eşitlikte her %20'lik hane grubu gelirin %20'sini alır: ==eşitlik doğrusu== (45° çizgi).", ["eq", "teq"]),
              ac(LID, "Gerçekte alt %20 gelirin yalnızca %5'ini, alt %80 ise %55'ini alır. Noktaları birleştirince ==Lorenz eğrisi== çıkar; çizginin altında kalır ve sağ alt köşeye doğru bükülür.", ["eq", "teq", "lzA"]),
              ac(LID, "Eğri eşitlik doğrusundan ne kadar uzaksa gelir o kadar eşitsizdir. Eşitlik doğrusu ile Lorenz arasındaki ==A== bölgesi büyüdükçe eşitsizlik artar; Lorenz'in altındaki bölge ==B== (Gini'nin hesabı için, sonraki başlık).", ["eq", "teq", "lzA", "ar", "tA", "tB"]),
              ac(LID, "Vergi ve transferlerden sonra (yeşil) alt %20 gelirin %8'ini alır: ==Lorenz eğrisi eşitlik doğrusuna yaklaşır==, eşitsizlik azalır.", ["eq", "teq", "lzA", "lzB", "l1", "l2"]),
              ac(LID, "Uç durum: bir kişi her şeye sahipse Lorenz eğrisi alt ve sağ kenarı izler: ==tam eşitsizlik==.", ["eq", "teq", "x1", "x2", "tx"])
            ] },
          { tip: "not", metin: "Sınav notu: CED, Lorenz eğrisini çizmeyi ve Gini'yi hesaplamayı kapsam dışı bırakır; ama Lorenz ve Gini'yi ==yorumlayıp== ülkeleri, politikaları ve dönemleri karşılaştırmanı bekler." }
        ]
      },
      {
        baslik: "Gini katsayısı",
        kisa: "Gini 0 ise tam eşitlik, 1 ise tam eşitsizlik; A bölü (A + B).",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "Gini", alt: "0 = tam eşitlik, 1 = tam eşitsizlik" }, "=",
              { t: "A", alt: "eşitlik doğrusu ile Lorenz arası" }, "÷",
              { t: "A + B", alt: "eşitlik doğrusunun altındaki üçgen" }
            ],
            aciklama: "A + B üçgeninin alanı 0,5'tir; bu yüzden Gini = A / 0,5 = ==1 − 2 × B== (B: Lorenz eğrisinin altındaki alan)." },
          { tip: "ornek", baslik: "Gini'yi hesapla (vergi öncesi, tablodaki sayılarla)",
            durum: "Kümülatif gelir payları: 0,05 · 0,15 · 0,30 · 0,55 · 1,00. Her dilimin genişliği 0,2.",
            adimlar: [
              "Lorenz eğrisinin altındaki alan (B) yamuklarla bulunur: 0,2 × [(0+0,05)/2 + (0,05+0,15)/2 + (0,15+0,30)/2 + (0,30+0,55)/2 + (0,55+1)/2].",
              "Köşeli parantezin içi: 0,025 + 0,10 + 0,225 + 0,425 + 0,775 = 1,55. B = 0,2 × 1,55 = 0,31.",
              "Gini = 1 − 2 × 0,31 = 0,38."
            ],
            sonuc: "Gini ≈ 0,38. Vergi ve transferlerden sonra aynı hesap yaklaşık 0,27 verir: eşitsizlik azaldı." },
          { tip: "tuzak", metin: "Gini bir dağılım ölçüsüdür, zenginlik ölçüsü değildir.", yanlis: "Gini yüksek olan ülke daha zengindir (ya da 1'e yakın Gini tam eşitliktir).", dogru: "Gini yalnızca ==eşitsizliği== ölçer: 0 tam eşitlik, 1 tam eşitsizliktir. Lorenz eğrisi eşitlik doğrusundan uzaklaştıkça Gini yükselir; ülkenin zengin ya da yoksul olduğunu söylemez." }
        ]
      },
      {
        baslik: "Vergi türleri: artan, orantılı, azalan oranlı",
        kisa: "Vergi oranı gelirle artıyorsa artan oranlı, azalıyorsa azalan oranlıdır.",
        bloklar: [
          { tip: "tablo", baslik: "Aylık geliri 10.000, 20.000 ve 40.000 TL olan üç kişi",
            head: ["Vergi türü", "10.000 TL", "20.000 TL", "40.000 TL", "Oran gelirle"],
            rows: [
              ["Artan oranlı (*progressive*)", "1.000 TL (%10)", "4.000 TL (%20)", "12.000 TL (%30)", "artar"],
              ["Orantılı (*proportional*)", "2.000 TL (%20)", "4.000 TL (%20)", "8.000 TL (%20)", "aynı kalır"],
              ["Azalan oranlı (*regressive*)", "2.000 TL (%20)", "3.000 TL (%15)", "4.000 TL (%10)", "azalır"]
            ],
            not: "Artan oranlı vergi eşitsizliği azaltır; azalan oranlı vergi eşitsizliği artırabilir." },
          { tip: "grafik", baslik: "Ortalama vergi oranı gelirle nasıl değişir?", xlabel: "Gelir (bin TL)", ylabel: "Vergi oranı", xmax: 10, ymax: 8,
            xticks: [{ v: 2, label: "10" }, { v: 4, label: "20" }, { v: 8, label: "40" }],
            yticks: [{ v: 2, label: "%10" }, { v: 4, label: "%20" }, { v: 6, label: "%30" }],
            ogeler: TX,
            durumlar: [
              ac(TID, "Üç kişi: aylık 10, 20 ve 40 bin TL. Dikey eksen, verginin gelire oranı.", ["m1", "m2", "m3"]),
              ac(TID, "==Orantılı== vergi: oran herkes için %20, yatay çizgi.", ["m1", "m2", "m3", "pr"]),
              ac(TID, "==Artan oranlı== vergi: oran gelirle %10, %20, %30 diye yükselir. Zengin hem daha çok TL hem daha yüksek oran öder.", ["m1", "m2", "m3", "pg"]),
              ac(TID, "==Azalan oranlı== vergi: oran %20, %15, %10 diye düşer. Zengin daha çok TL öder ama gelirinin daha küçük payını.", ["m1", "m2", "m3", "rg"])
            ] },
          { tip: "ikili",
            sol: { ikon: "📈", baslik: "Artan oranlı", maddeler: ["Gelir arttıkça oran artar"] },
            sag: { ikon: "📉", baslik: "Azalan oranlı", maddeler: ["Gelir arttıkça oran azalır"] },
            oyun: [
              { metin: "Gelir vergisinde dilimler: kazandıkça yüzde oran yükseliyor.", cevap: "sol", neden: "Oran gelirle artıyor." },
              { metin: "Herkesten aynı tutarda alınan sabit bir harç.", cevap: "sag", neden: "Yoksul için gelirin daha büyük payı: oran düşük gelirde yüksek." },
              { metin: "Büyük miras ve servetten yüksek oranda alınan vergi.", cevap: "sol", neden: "Servet büyüdükçe oran artıyor." },
              { metin: "Yoksulun gelirinin büyük kısmını harcadığı temel mallardan alınan tüketim vergileri.", cevap: "sag", neden: "Düşük gelirli gelirinin daha büyük bölümünü verginin altına sokar." }
            ] },
          { tip: "tuzak", metin: "Vergi türünü tutara değil orana bakarak belirle.", yanlis: "Azalan oranlı vergide yoksul daha çok TL öder.", dogru: "Ayrım ==orandadır==: azalan oranlı vergide zengin daha çok TL öder ama gelirinin daha küçük payını verir." }
        ]
      },
      {
        baslik: "Eşitsizliğin kaynakları",
        kisa: "Piyasa her faktöre MRP'sini öder; beceri, miras ve güç farkları eşitsizlik doğurur.",
        bloklar: [
          { tip: "not", metin: "Faktör piyasasında her faktör ==marjinal ürününün değerini== (MRP) alır. Becerisi yüksek işçinin MRP'si yüksektir, ücreti de yüksek olur; sermaye ve toprak sahipleri faiz ve kira alır. Bu fark gelir eşitsizliğini doğurur. Servet ise miras ve birikimle büyüyüp farkı daha da açar." },
          { tip: "harita", merkez: "Eşitsizliğin kaynakları", dallar: [
              { baslik: "Faktör farkı (MRP)", alt: "Her faktör marjinal ürününün değerini alır" },
              { baslik: "*Human capital*, *social capital*", alt: "Eğitim, beceri; çevre ve ağlar" },
              { baslik: "*Inheritance*", alt: "Miras kalan servet" },
              { baslik: "*Discrimination*", alt: "Cinsiyet, ırk vb. nedeniyle eşit olmayan fırsat" },
              { baslik: "Finansal piyasalara erişim", alt: "Kredi ve yatırım imkânı" },
              { baslik: "*Mobility*", alt: "Mesleği ya da yeri değiştirebilme" },
              { baslik: "Pazarlık gücü", alt: "Firma, sendika ya da aile içinde" },
              { baslik: "Vergi yapısı", alt: "Artan ya da azalan oranlı vergiler" }
            ] },
          { tip: "tuzak", metin: "Ücretlerin MRP'ye eşit olması, gelir dağılımının adil olduğunu göstermez.", yanlis: "Faktörler MRP'sini aldığına göre gelir dağılımı adildir.", dogru: "MRP'ye göre ödeme dağılımı ==açıklayan pozitif== bir gerçektir; adil olup olmadığı ==normatif== bir yargıdır. Üstelik beceri, miras, ayrımcılık gibi farklar MRP'nin kendisini de etkiler." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Gelir bir akımdır, servet bir stoktur; yoksulluk oranı çizginin altındakilerin yüzdesidir.",
              "Gelir ve yoksulluk ülkeler arasında ve ülke içindeki gruplar (yaş, cinsiyet, ırk) arasında büyük farklar gösterir.",
              "Lorenz eğrisi eşitlik doğrusuna ne kadar yakınsa dağılım o kadar eşittir.",
              "Gini = A/(A + B) = 1 − 2B. 0 tam eşitlik, 1 tam eşitsizlik. Zenginliği değil eşitsizliği ölçer.",
              "Artan oranlı (*progressive*) vergide oran gelirle artar; azalan oranlı (*regressive*) vergide azalır; orantılıda sabittir.",
              "Artan oranlı vergi eşitsizliği azaltır, azalan oranlı vergi artırabilir.",
              "Her faktör MRP'sini alır; bu fark gelir eşitsizliğine katkı yapar.",
              "Kaynaklar: beşerî ve sosyal sermaye, miras, ayrımcılık, finansa erişim, hareketlilik, pazarlık gücü, vergi yapısı.",
              "MRP'ye göre ödeme pozitif bir açıklamadır; adil olup olmadığı normatif bir sorudur."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Grafikte iki ülkenin Lorenz eğrileri ve eşitlik doğrusu görülüyor. Hangisi doğrudur?",
        fig: { type: "graph", xlabel: "Haneler (%)", ylabel: "Gelir payı (%)", xmax: 10, ymax: 10,
          lines: [{ from: [0, 0], to: [10, 10], label: "", dash: true }, { from: [0, 0], to: [5, 1.5], label: "A", color: 2 }, { from: [5, 1.5], to: [8, 4], color: 2 }, { from: [8, 4], to: [10, 10], color: 2 }, { from: [0, 0], to: [5, 3], label: "B", color: 1 }, { from: [5, 3], to: [8, 6], color: 1 }, { from: [8, 6], to: [10, 10], color: 1 }],
          xticks: [{ v: 5, label: "%50" }, { v: 10, label: "%100" }], yticks: [{ v: 5, label: "%50" }, { v: 10, label: "%100" }] },
        opts: ["Ülke B'nin Gini katsayısı daha yüksektir; çünkü eğrisi eşitlik doğrusuna daha yakındır.", "Ülke A'nın Gini katsayısı daha yüksektir; çünkü eğrisi eşitlik doğrusundan daha uzaktır.", "İki ülkenin Gini katsayısı eşittir.", "Ülke B daha zengindir."],
        a: 1, why: "Lorenz eğrisi eşitlik doğrusundan uzaklaştıkça A bölgesi büyür ve Gini yükselir; A ülkesinin eğrisi eşitlik doğrusundan daha fazla bükülmüştür. A şıkkı ilişkiyi tersine çeviriyor; D şıkkı Gini'yi zenginlik ölçüsü sanıyor." },
      { q: "Bir ülkenin Gini katsayısı 0,25'ten 0,40'a çıkıyor. Bu ne anlama gelir?",
        opts: ["Gelir eşitsizliği artmıştır; Lorenz eğrisi eşitlik doğrusundan uzaklaşmıştır.", "Gelir eşitsizliği azalmıştır.", "Ortalama gelir artmıştır.", "Yoksulluk oranı mutlaka artmıştır."],
        a: 0, why: "Gini yükselince dağılım daha eşitsizdir ve Lorenz eğrisi eşitlik doğrusundan uzaklaşır. C ve D şıkları, Gini'nin gelir düzeyi ya da yoksulluk oranı hakkında bilgi verdiğini varsayıyor; oysa yalnızca dağılımı gösterir." },
      { q: "Üç kişinin gelirleri ve ödediği vergi tabloda verilmiştir. Bu vergi hangi türdür?",
        fig: { type: "table", head: ["Gelir", "Ödenen vergi"], rows: [["10.000 TL", "1.500 TL"], ["20.000 TL", "2.400 TL"], ["40.000 TL", "3.200 TL"]] },
        opts: ["Artan oranlı (*progressive*), çünkü zengin daha çok TL öder.", "Orantılı (*proportional*), çünkü herkes vergi öder.", "Belirsiz; yalnızca tutara bakılır.", "Azalan oranlı (*regressive*), çünkü oran %15, %12, %8 diye düşer."],
        a: 3, why: "Oranlar 1.500/10.000 = %15, 2.400/20.000 = %12, 3.200/40.000 = %8: gelir arttıkça oran düşüyor, vergi azalan oranlı. A şıkkı tutara bakıyor; vergi türü orana göre belirlenir." },
      { q: "Faktör piyasasında her faktör marjinal ürününün değerini alır. Bu durum gelir eşitsizliğine nasıl katkı yapar?",
        opts: ["Bütün işçilerin MRP'si eşit olduğu için herkes aynı geliri kazanır.", "Beceri ve eğitim gibi farklar MRP'yi ve dolayısıyla ücretleri farklılaştırır.", "Sermaye sahipleri hiç gelir elde edemez.", "Ücretleri devlet belirler."],
        a: 1, why: "İşçilerin MRP'si beşerî sermaye gibi farklar yüzünden eşit değildir; MRP'ye göre ödeme gelir farklarını doğurur. A şıkkı MRP'lerin eşit olduğunu varsayıyor." },
      { q: "Bir ülke artan oranlı vergilerini ve düşük gelirlilere transferleri artırıyor (diğer her şey sabit). Lorenz eğrisi ve Gini nasıl değişir?",
        opts: ["Lorenz eşitlik doğrusundan uzaklaşır; Gini artar.", "Lorenz değişmez; Gini aynı kalır.", "Lorenz eşitlik doğrusuna yaklaşır; Gini azalır.", "Lorenz eşitlik doğrusuna yaklaşır; Gini artar."],
        a: 2, why: "Artan oranlı vergi ve transferler gelir dağılımını eşitler: alt gruplar daha çok pay alır, Lorenz eğrisi eşitlik doğrusuna yaklaşır ve A küçüldüğü için Gini azalır. D şıkkı yaklaşan eğriyle artan Gini'yi bağdaştırıyor; bu mümkün değil." }
    ]
  };
})();
