/* Kitora not defteri · mi201 · 2.1 Talep
   Kaynak: AP Micro CED, Topic 2.1 (MKT-3.A, MKT-3.B). Blok türleri: /ap/_kit/defter.js başı. */
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

  return {
    slug: "mi201",
    amac: "Bu konu *demand* yani talebi anlatıyor: alıcılar fiyat değişince ne yapar ve neden? Talep yasasını, eğrinin neden aşağı eğimli olduğunu, piyasa talebinin nasıl toplandığını ve eğriyi kaydıran etkenleri öğreneceksin.",
    bolumler: [
      {
        baslik: "Teşvikler, kısıtlar ve mülkiyet hakları",
        kisa: "İnsanlar teşviklere tepki verir; gelir, zaman ve yasalar onları sınırlar.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🎁", terim: "Incentive", tr: "teşvik", tanim: "Bir davranışı daha çekici ya da daha pahalı yapan şey. En yaygın teşvik fiyattır.", ornek: "Konser biletinde öğrenci indirimi gelince daha çok kişi bilet alır." },
              { ikon: "🚧", terim: "Constraint", tr: "kısıt", tanim: "Seçimini sınırlayan şey: gelir, zaman ve yasal düzenlemeler.", ornek: "Harçlığın 300 TL ise 500 TL'lik bilete istesen de gidemezsin." },
              { ikon: "🔑", terim: "Property rights", tr: "mülkiyet hakları", tanim: "Bir malın sahibinin onu kullanma, satma ve karşılığını alma hakkının yasayla güvence altında olması. Piyasa bunsuz iyi çalışmaz.", ornek: "Sattığın sandviçin senin olduğu belli değilse kimse karşılığında para vermez." }
            ] },
          { tip: "not", metin: "Ekonomistler alıcıların ==teşviklere tepki verdiğini== varsayar: fiyat gibi bir teşvik değişince davranış değişir. Ama herkesin bir **kısıtı** vardır. Talep, bu kısıtlar içinde yapılan seçimlerin toplamıdır." }
        ]
      },
      {
        baslik: "Talep yasası: fiyat ve miktar ters yöne gider",
        kisa: "Fiyat artınca talep edilen miktar azalır; fiyat düşünce artar.",
        bloklar: [
          { tip: "tablo", baslik: "Sinema bileti · talep tablosu", head: ["Fiyat (TL)", "Talep edilen miktar (bilet/gün)"], rows: [["90", "10"], ["70", "30"], ["50", "50"], ["30", "70"], ["10", "90"]], not: "Fiyat her 20 TL düştüğünde günlük talep 20 bilet artıyor. Kural: Qd = 100 − P." },
          graf({ baslik: "Fiyat değişince eğri üzerinde yürümek", xlabel: "Miktar (bilet/gün)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
            xticks: [{ v: 1, label: "10" }, { v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }, { v: 9, label: "90" }],
            yticks: [{ v: 1, label: "10" }, { v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }, { v: 9, label: "90" }],
            ogeler: [
              { id: "D", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "D" },
              { id: "A", tip: "nokta", renk: 1, x: 3, y: 7, etiket: "70 TL · 30", kilavuz: true },
              { id: "B", tip: "nokta", renk: 1, x: 5, y: 5, etiket: "50 TL · 50", kilavuz: true },
              { id: "ok", tip: "ok", renk: 3, from: [3.4, 6.6], to: [4.6, 5.4] },
              { id: "mb", tip: "yazi", x: 7.6, y: 6.6, metin: "D = MB" }
            ],
            durumlar: [
              ["Talep eğrisi: her nokta bir fiyat–miktar çiftidir. Fiyat **dikey**, miktar **yatay** eksendedir; eğri aşağı iner.", ["D"]],
              ["70 TL'de talep edilen miktar 30 bilettir (A noktası).", ["D", "A"]],
              ["Bilet 50 TL'ye inince nokta eğri boyunca B'ye kayar: talep edilen miktar 30'dan 50'ye çıkar. Eğri yerinde durur; bu bir ==hareket==, kayma değil.", ["D", "A", "B", "ok"]],
              ["Eğrinin yüksekliği, o birim için ödemeye razı olunan en yüksek fiyattır. Bu yüzden talep eğrisi aynı zamanda *marginal benefit* (MB) eğrisidir.", ["D", "A", "B", "mb"]]
            ] }),
          { tip: "tuzak", metin: "Sınav, “talep azaldı” ile “talep edilen miktar azaldı” cümlelerini ayırt etmeni ister.", yanlis: "Bilet zamlanınca talep azalır, eğri sola kayar.", dogru: "Malın ==kendi== fiyatı değişince *quantity demanded* değişir: eğri üzerinde hareket. *Demand* yani tüm eğri yalnız fiyat dışındaki etkenlerle kayar." }
        ]
      },
      {
        baslik: "Eğri neden aşağı eğimli?",
        kisa: "Gelir etkisi, ikame etkisi ve azalan marjinal fayda eğriyi aşağı indirir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "👛", terim: "Income effect", tr: "gelir etkisi", tanim: "Fiyat düşünce aynı parayla daha çok şey alabilirsin; gerçek satın alma gücün artar ve malı daha çok alırsın.", ornek: "Simit 5 TL'den 3 TL'ye inince aynı harçlıkla fazladan bir çay da alırsın." },
              { ikon: "🔄", terim: "Substitution effect", tr: "ikame etkisi", tanim: "Mal öbürlerine göre ucuzlayınca pahalı kalan benzerlerinden vazgeçip bu mala geçersin.", ornek: "Dolmuş ucuzlayınca yürümek yerine dolmuşa binersin." },
              { ikon: "🍕", terim: "Diminishing marginal utility", tr: "azalan marjinal fayda", tanim: "Aynı maldan her ek birim sana bir öncekinden daha az fayda verir; ek birim için daha az ödemek istersin.", ornek: "İlk pizza dilimi harika, beşincisi neredeyse yük." }
            ] },
          { tip: "ikili", sol: { ikon: "👛", baslik: "*Income effect*", maddeler: ["Fiyat düşünce satın alma gücün artar", "Aynı parayla daha çok mal alırsın"] },
            sag: { ikon: "🔄", baslik: "*Substitution effect*", maddeler: ["Mal diğerlerine göre ucuzlar", "Benzer malları bırakıp buna geçersin"] },
            oyun: [
              { metin: "Simit ucuzlayınca harçlığımla artık fazladan bir çay da alabiliyorum.", cevap: "sol", neden: "Fiyat düşüşü satın alma gücünü artırdı: gelir etkisi." },
              { metin: "Dolmuş ucuzlayınca yürümeyi bırakıp dolmuşa binmeye başladım.", cevap: "sag", neden: "Benzer bir seçenekten bu mala geçiş: ikame etkisi." },
              { metin: "Fiyatlar düştü; aynı bütçeyle şimdi daha çok bilet alabilirim.", cevap: "sol", neden: "Reel gelir arttı: gelir etkisi." },
              { metin: "Kola zamlanınca ayrana geçtim.", cevap: "sag", neden: "Pahalılaşan maldan ucuz kalan benzerine geçiş: ikame etkisi." }
            ] },
          { tip: "ornek", baslik: "Azalan fayda talep eğrisini nasıl çizer?", durum: "Pizza dilimlerinin sana değeri: 1. dilim 80 TL, 2. dilim 60 TL, 3. dilim 40 TL, 4. dilim 20 TL.",
            adimlar: ["Fiyat 70 TL: yalnızca 1. dilimin değeri (80) fiyatı aşar: 1 dilim alırsın.", "Fiyat 50 TL: 80 ve 60 fiyatı aşar: 2 dilim.", "Fiyat 30 TL: 80, 60 ve 40 aşar: 3 dilim.", "Fiyat 10 TL: dördü de aşar: 4 dilim."],
            sonuc: "Fiyat düştükçe daha çok dilim alırsın: talep eğrisi aşağı iner. Her dilimin değeri o dilimin ==*marginal benefit*==idir." }
        ]
      },
      {
        baslik: "Piyasa talebi: bireysel talepleri yatay toplamak",
        kisa: "Piyasa talebi, her fiyatta bireylerin miktarlarını toplayarak bulunur.",
        bloklar: [
          { tip: "tablo", baslik: "İki alıcı, tek piyasa", head: ["Fiyat (TL)", "Ali (bilet)", "Ece (bilet)", "Piyasa (bilet)"], rows: [["80", "1", "2", "3"], ["60", "2", "3", "5"], ["40", "3", "4", "7"], ["20", "4", "5", "9"]], vurgu: 2, not: "Aynı fiyattaki miktarlar toplanır: 40 TL'de 3 + 4 = 7." },
          graf({ baslik: "Yatay toplama: miktarlar toplanır, fiyatlar değil", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 12, ymax: 10,
            xticks: [{ v: 3, label: "3" }, { v: 4, label: "4" }, { v: 7, label: "7" }], yticks: [{ v: 4, label: "40" }],
            ogeler: [
              { id: "Da", tip: "cizgi", renk: 0, from: [1, 8], to: [5, 0], etiket: "Ali" },
              { id: "De", tip: "cizgi", renk: 1, from: [2, 8], to: [6, 0], etiket: "Ece" },
              { id: "Dm", tip: "cizgi", renk: 3, from: [3, 8], to: [11, 0], etiket: "Piyasa" },
              { id: "h", tip: "cizgi", renk: 2, kesik: true, from: [0, 4], to: [11, 4] },
              { id: "pa", tip: "nokta", renk: 0, x: 3, y: 4, etiket: "3" },
              { id: "pe", tip: "nokta", renk: 1, x: 4, y: 4, etiket: "4" },
              { id: "pm", tip: "nokta", renk: 3, x: 7, y: 4, etiket: "7", kilavuz: true }
            ],
            durumlar: [
              ["Ali'nin talebi: fiyat düştükçe daha çok bilet ister.", ["Da"]],
              ["Ece'nin talebi de aşağı eğimli; her fiyatta Ali'den bir bilet fazla ister.", ["Da", "De"]],
              ["40 TL'de Ali 3, Ece 4 bilet ister.", ["Da", "De", "h", "pa", "pe"]],
              ["Piyasa talebi, aynı fiyatta miktarları toplar: 3 + 4 = 7. Her fiyat için yapılınca piyasa eğrisi çıkar. Eğri **yatay** toplanır.", ["Da", "De", "h", "pa", "pe", "pm", "Dm"]]
            ] }),
          { tip: "tuzak", metin: "Toplama yönünü karıştırma.", yanlis: "Piyasa talebi için fiyatlar toplanır (dikey toplama).", dogru: "Aynı ==fiyatta== bireysel ==miktarlar== toplanır (yatay toplama). Piyasa eğrisi, bireysel eğrilerin sağındadır." }
        ]
      },
      {
        baslik: "Talebi kaydıran etkenler",
        kisa: "Fiyat dışındaki her şey değişince talep eğrisinin kendisi kayar.",
        bloklar: [
          { tip: "liste", maddeler: [
              { ikon: "🎨", baslik: "*Tastes*: zevkler", metin: "Moda, reklam ve alışkanlık değişince talep kayar." },
              { ikon: "💰", baslik: "*Income*: gelir", metin: "Normal mallarda gelir artınca talep artar; *inferior* mallarda azalır." },
              { ikon: "👥", baslik: "*Number of buyers*: alıcı sayısı", metin: "Alıcı artarsa piyasa talebi sağa kayar." },
              { ikon: "🔗", baslik: "Diğer malların fiyatı", metin: "İkame (*substitute*) pahalanınca talep artar; tamamlayıcı (*complement*) pahalanınca azalır." },
              { ikon: "🔮", baslik: "*Expectations*: beklentiler", metin: "Gelecekte fiyat artacaksa bugün daha çok alınır." }
            ] },
          graf({ baslik: "Talep artışı ve azalışı", xlabel: "Miktar", ylabel: "Fiyat", xmax: 11, ymax: 10,
            xticks: [], yticks: [],
            ogeler: [
              { id: "D", tip: "cizgi", renk: 0, from: [2, 8], to: [8, 2], etiket: "D" },
              { id: "Dk", tip: "cizgi", renk: 0, kesik: true, from: [2, 8], to: [8, 2] },
              { id: "D1", tip: "cizgi", renk: 3, from: [4, 8], to: [10, 2], etiket: "D₁" },
              { id: "D2", tip: "cizgi", renk: 2, from: [0, 8], to: [6, 2], etiket: "D₂" },
              { id: "okR", tip: "ok", renk: 3, from: [3.3, 7], to: [4.7, 7] },
              { id: "okL", tip: "ok", renk: 2, from: [6.7, 3], to: [5.3, 3] }
            ],
            durumlar: [
              ["Başlangıç talebi D.", ["D"]],
              ["Alıcı sayısı arttı, zevk değişti ya da gelir (normal mal) yükseldi: talep ==sağa== kayar. Her fiyatta daha çok miktar istenir.", ["Dk", "D1", "okR"]],
              ["İkamenin fiyatı düştü ya da zevkler değişti: talep ==sola== kayar. Her fiyatta daha az miktar istenir.", ["Dk", "D2", "okL"]]
            ] }),
          { tip: "ikili", sol: { ikon: "↘️", baslik: "Eğri üzerinde hareket", maddeler: ["Sebep: malın ==kendi fiyatı==", "*Quantity demanded* değişir"] },
            sag: { ikon: "↔️", baslik: "Eğrinin kayması", maddeler: ["Sebep: fiyat dışındaki etkenler", "*Demand* değişir"] },
            oyun: [
              { metin: "Sinema bileti zamlandı, bilet satışı düştü.", cevap: "sol", neden: "Malın kendi fiyatı değişti: hareket." },
              { metin: "Okula 300 yeni öğrenci geldi.", cevap: "sag", neden: "Alıcı sayısı değişti: kayma." },
              { metin: "Bir fenomen filmi övünce herkes bilet almak istedi.", cevap: "sag", neden: "Zevk değişti: kayma." },
              { metin: "Bilet indirimdeyken daha çok kişi geldi.", cevap: "sol", neden: "Kendi fiyatı düştü: hareket." }
            ] }
        ]
      },
      {
        baslik: "Gelir ve ilgili mallar: yön rehberi",
        kisa: "İkamede talep fiyatla aynı, tamamlayıcıda zıt yönde; normal malda gelirle aynı yönde.",
        bloklar: [
          { tip: "tablo", baslik: "Ne değişirse talep nereye kayar?", head: ["Değişen şey", "Talep eğrisi", "Örnek"], rows: [
              ["Gelir artar, *normal* mal", "Sağa", "Daha çok restoranda yemek"],
              ["Gelir artar, *inferior* mal", "Sola", "Daha az hazır noodle"],
              ["İkamenin fiyatı artar", "Sağa", "Dolmuş zamlanır → otobüs talebi artar"],
              ["Tamamlayıcının fiyatı artar", "Sola", "Telefon zamlanır → kılıf talebi düşer"],
              ["Gelecekte fiyat artacak beklentisi", "Bugün sağa", "Zam gelmeden bilet alınır"]
            ] },
          { tip: "ikili", sol: { ikon: "📈", baslik: "*Normal good*", maddeler: ["Gelir artınca talep artar", "Çoğu mal böyledir"] },
            sag: { ikon: "📉", baslik: "*Inferior good*", maddeler: ["Gelir artınca talep azalır", "Daha iyi bir seçeneğe geçilir"] },
            oyun: [
              { metin: "Harçlığı artınca otobüs yerine taksiye binmeye başladı: taksi.", cevap: "sol", neden: "Gelirle birlikte talebi artıyor: normal mal." },
              { metin: "Burs alınca ucuz hazır çorba yemeyi bıraktı: hazır çorba.", cevap: "sag", neden: "Gelir artınca talebi düşüyor: *inferior*." },
              { metin: "Geliri artınca daha çok kitap alıyor: kitap.", cevap: "sol", neden: "Gelirle aynı yönde: normal." },
              { metin: "Geliri artınca ikinci el telefon yerine sıfır telefon alıyor: ikinci el telefon.", cevap: "sag", neden: "Gelir artınca talep azalıyor: *inferior*." }
            ] },
          { tip: "tuzak", metin: "“Gelir artarsa talep artar” cümlesi her mal için doğru değildir.", yanlis: "Gelir artınca her malın talebi artar.", dogru: "Normal mal sağa, *inferior* mal sola kayar. İkamenin fiyatı artarsa bu malın talebi ==artar==; tamamlayıcının fiyatı artarsa ==azalır==." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Alıcılar *incentive*'lere tepki verir ama *constraint*'lerle (gelir, zaman, yasa) sınırlıdır; *property rights* piyasanın şartıdır.",
              "*Law of demand*: malın kendi fiyatı artınca *quantity demanded* azalır; eğri üzerinde hareket olur.",
              "Talep eğrisi aşağı eğimlidir: *income effect*, *substitution effect* ve *diminishing marginal utility*. Talep eğrisi *marginal benefit* eğrisidir.",
              "Piyasa talebi, aynı fiyattaki bireysel miktarların yatay toplamıdır.",
              "Fiyat dışındaki etkenler eğriyi kaydırır: zevk, gelir, alıcı sayısı, ilgili mallar, beklenti.",
              "Normal mal: gelir↑ talep↑. *Inferior* mal: gelir↑ talep↓.",
              "İkamenin fiyatı↑ → talep sağa; tamamlayıcının fiyatı↑ → talep sola.",
              "Talep ile talep edilen miktarı karıştırma: biri tüm eğri, öbürü eğri üzerinde tek nokta."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Bir kafe filtre kahvenin fiyatını 40 TL'den 50 TL'ye çıkarıyor. Diğer her şey sabit. Kahve piyasasında ne olur?",
        opts: ["Talep sola kayar.", "*Quantity demanded* azalır; talep eğrisi üzerinde yukarı hareket olur.", "Talep sağa kayar.", "Talep edilen miktar artar ama eğri sabit kalır."], a: 1,
        why: "Malın kendi fiyatı değişince eğri kaymaz, eğri üzerinde hareket olur ve talep edilen miktar düşer. “Talep sola kayar” en çekici yanlış şıktır: kayma yalnız fiyat dışındaki etkenlerden gelir." },
      { q: "Kampüse otobüs ya da dolmuşla gidiliyor ve ikisi birbirinin yakın ikamesi. Dolmuş ücreti artarsa otobüs bileti piyasasında ne olur?",
        opts: ["Otobüs bileti talebi sağa kayar.", "Otobüs bileti talebi sola kayar.", "Otobüs bileti için *quantity demanded* azalır.", "Otobüs bileti talebi değişmez."], a: 0,
        why: "İkamenin fiyatı artınca bu malın talebi artar: eğri sağa kayar. Sola kayma tamamlayıcı mallar için geçerlidir. C şıkkı, otobüsün kendi fiyatı değişseydi doğru olurdu." },
      { q: "Tabloya göre piyasada yalnızca Ali ve Ece var. Bilet fiyatı 40 TL iken piyasa talebi kaç bilettir?",
        fig: { type: "table", head: ["Fiyat (TL)", "Ali", "Ece"], rows: [["60", 2, 3], ["40", 3, 4], ["20", 4, 5]], caption: "Bireysel talep (bilet)" },
        opts: ["1", "4", "5", "7"], a: 3,
        why: "Piyasa talebi, aynı fiyattaki bireysel miktarların toplamıdır: 3 + 4 = 7. 4 ve 5 yalnız tek bir alıcının miktarıdır; fiyatları toplamak (yatay yerine dikey toplama) da yanlıştır." },
      { q: "Burs alan Deniz, hazır noodle tüketimini azaltıyor. Deniz için hazır noodle hangi tür maldır?",
        opts: ["*Normal good*", "*Substitute*", "*Inferior good*", "*Complement*"], a: 2,
        why: "Gelir artınca talebi düşen mal *inferior*'dır. *Normal good* şıkkı, talebin gelirle aynı yönde değiştiği durum içindir; ikame ve tamamlayıcı ise iki mal arasındaki ilişkiyi anlatır, gelirle ilgisi yoktur." },
      { q: "Grafikte sinema bileti talebi D'den D₁'e kayıyor. Aşağıdakilerden hangisi bu kaymanın nedeni OLAMAZ?",
        fig: { type: "graph", xlabel: "Miktar", ylabel: "Fiyat", xmax: 11, ymax: 10, lines: [{ from: [2, 8], to: [8, 2], label: "D" }, { from: [4, 8], to: [10, 2], label: "D₁" }] },
        opts: ["Okula yeni öğrenciler geldi.", "Bilet fiyatı düştü.", "Bir film çok popüler oldu.", "Sinema biletinin ikamesi olan konser biletleri zamlandı."], a: 1,
        why: "Malın kendi fiyatındaki düşüş eğriyi kaydırmaz, eğri üzerinde aşağıya hareket ettirir. Diğer üç etken (alıcı sayısı, zevk, ikamenin fiyatı) talebi sağa kaydırır." }
    ]
  };
})();
