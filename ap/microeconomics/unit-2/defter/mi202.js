/* Kitpath not defteri · mi202 · 2.2 Arz
   Kaynak: AP Micro CED, Topic 2.2 (MKT-3.C, MKT-3.D). Blok türleri: /ap/_kit/defter.js başı. */
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
    slug: "mi202",
    amac: "Bu konu *supply* yani arzı anlatıyor: satıcılar fiyat değişince ne yapar? Arz yasasını, eğrinin neden yukarı eğimli olduğunu, piyasa arzının nasıl toplandığını ve arz eğrisini kaydıran etkenleri öğreneceksin.",
    bolumler: [
      {
        baslik: "Arz yasası: fiyat arttıkça satıcı daha çok sunar",
        kisa: "Fiyat artınca arz edilen miktar artar; fiyat düşünce azalır.",
        bloklar: [
          { tip: "tablo", baslik: "Okul kulübü · baskılı bez çanta arzı", head: ["Fiyat (TL)", "Arz edilen miktar (çanta)"], rows: [["20", "10"], ["30", "20"], ["40", "30"], ["50", "40"], ["60", "50"]], not: "Fiyat her 10 TL arttığında kulüp 10 çanta daha satmak ister." },
          graf({ baslik: "Fiyat artınca arz eğrisi üzerinde yukarı yürümek", xlabel: "Miktar (çanta)", ylabel: "Fiyat (TL)", xmax: 9, ymax: 9,
            xticks: [{ v: 1, label: "10" }, { v: 2, label: "20" }, { v: 3, label: "30" }, { v: 4, label: "40" }, { v: 5, label: "50" }],
            yticks: [{ v: 2, label: "20" }, { v: 3, label: "30" }, { v: 4, label: "40" }, { v: 5, label: "50" }, { v: 6, label: "60" }],
            ogeler: [
              { id: "S", tip: "cizgi", renk: 1, from: [0, 1], to: [7, 8], etiket: "S" },
              { id: "A", tip: "nokta", renk: 0, x: 2, y: 3, etiket: "", kilavuz: true },
              { id: "tA", tip: "yazi", x: 2.3, y: 2.4, metin: "30 TL · 20", hiza: "start" },
              { id: "B", tip: "nokta", renk: 0, x: 4, y: 5, etiket: "", kilavuz: true },
              { id: "tB", tip: "yazi", x: 4.3, y: 4.4, metin: "50 TL · 40", hiza: "start" },
              { id: "ok", tip: "ok", renk: 3, from: [2.4, 3.4], to: [3.6, 4.6] },
              { id: "mc", tip: "yazi", x: 6.6, y: 5.9, metin: "S = MC", hiza: "start" }
            ],
            durumlar: [
              ["Arz eğrisi: fiyat **dikey**, miktar **yatay** eksende. Eğri soldan sağa ==yukarı== çıkar.", ["S"]],
              ["30 TL'de kulüp 20 çanta sunar (A noktası).", ["S", "A", "tA"]],
              ["Fiyat 50 TL'ye çıkınca nokta eğri boyunca B'ye kayar: arz edilen miktar 20'den 40'a çıkar. Eğri yerinde durur; bu bir ==hareket==.", ["S", "A", "tA", "B", "tB", "ok"]],
              ["Satıcı için eğrinin yüksekliği, o birimi üretmenin ek maliyetidir: arz eğrisi aynı zamanda *marginal cost* (MC) eğrisidir.", ["S", "A", "tA", "B", "tB", "mc"]]
            ] }),
          { tip: "tuzak", metin: "Talepteki ayrımın aynısı arzda da var.", yanlis: "Çanta fiyatı artınca arz artar, eğri sağa kayar.", dogru: "Malın ==kendi== fiyatı değişince *quantity supplied* değişir: eğri üzerinde hareket. *Supply* yani tüm eğri yalnız fiyat dışındaki etkenlerle kayar." }
        ]
      },
      {
        baslik: "Arz eğrisi neden yukarı eğimli?",
        kisa: "Her ek birim daha pahalıya üretildiği için satıcı daha yüksek fiyat ister.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🏭", terim: "Law of supply", tr: "arz yasası", tanim: "Malın kendi fiyatı ile arz edilen miktar aynı yönde hareket eder: fiyat artarsa miktar artar.", ornek: "Çanta 50 TL olunca kulüp daha çok üretir." },
              { ikon: "➕", terim: "Marginal cost", tr: "marjinal maliyet", tanim: "Bir birim daha üretmenin ek maliyeti. Üretim arttıkça genellikle yükselir.", ornek: "Fazla mesai ve ek makine kirası son çantaları pahalı yapar." },
              { ikon: "⚖️", terim: "Quantity supplied", tr: "arz edilen miktar", tanim: "Belirli bir fiyatta satıcıların sunmak istediği tek miktar; eğri üzerinde bir nokta.", ornek: "50 TL'de 40 çanta." }
            ] },
          { tip: "ornek", baslik: "Marjinal maliyet arz eğrisini nasıl çizer?", durum: "Kulübün marjinal maliyeti: 10. çanta 20 TL, 20. çanta 30 TL, 30. çanta 40 TL, 40. çanta 50 TL. Satıcı, marjinal maliyeti fiyatı aşmayan birimleri üretir.",
            adimlar: ["Fiyat 20 TL: yalnızca 10. çantanın maliyeti (20) fiyatı aşmaz: 10 adet.", "Fiyat 30 TL: 20 adede kadar maliyet 30'u aşmaz: 20 adet.", "Fiyat 40 TL: 30 adet.", "Fiyat 50 TL: 40 adet."],
            sonuc: "Fiyat yükseldikçe daha pahalıya mal olan birimler de kârlı olur: arz eğrisi yukarı çıkar. Bu yüzden arz eğrisi *marginal cost* eğrisidir." },
          { tip: "ikili", sol: { ikon: "↔️", baslik: "*Supply*", maddeler: ["Tüm eğri (tablo)", "Fiyat dışı etkenle kayar"] },
            sag: { ikon: "📍", baslik: "*Quantity supplied*", maddeler: ["Eğri üzerinde tek nokta", "Malın kendi fiyatı değişince hareket eder"] },
            oyun: [
              { metin: "Çanta fiyatı arttı; kulüp 20 yerine 40 çanta sunuyor.", cevap: "sag", neden: "Kendi fiyatı değişti: eğri üzerinde hareket, *quantity supplied*." },
              { metin: "Kumaş ucuzladı; kulüp her fiyatta daha çok çanta sunuyor.", cevap: "sol", neden: "Girdi fiyatı değişti: tüm eğri kaydı, *supply*." },
              { metin: "Bu fiyatta kulüp 30 çanta satmak istiyor.", cevap: "sag", neden: "Tek bir fiyattaki tek miktar: *quantity supplied*." },
              { metin: "Yeni baskı makinesi geldi, bütün fiyatlarda arz arttı.", cevap: "sol", neden: "Teknoloji tüm eğriyi kaydırır: *supply*." }
            ] }
        ]
      },
      {
        baslik: "Piyasa arzı: satıcıları yatay toplamak",
        kisa: "Piyasa arzı, her fiyatta satıcıların miktarlarının toplamıdır; yukarı eğimlidir.",
        bloklar: [
          graf({ baslik: "Aynı fiyatta miktarlar toplanır", xlabel: "Miktar (çanta)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 11,
            xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }], yticks: [{ v: 8, label: "40" }],
            ogeler: [
              { id: "Sa", tip: "cizgi", renk: 1, from: [0, 0], to: [2.5, 10], etiket: "Kulüp A" },
              { id: "Sb", tip: "cizgi", renk: 2, from: [0, 0], to: [5, 10], etiket: "Kulüp B" },
              { id: "Sm", tip: "cizgi", renk: 3, from: [0, 0], to: [7.5, 10], etiket: "Piyasa" },
              { id: "h", tip: "cizgi", renk: 0, kesik: true, from: [0, 8], to: [7, 8] },
              { id: "pa", tip: "nokta", renk: 1, x: 2, y: 8, etiket: "" },
              { id: "la", tip: "yazi", x: 2.25, y: 7.2, metin: "2", hiza: "start" },
              { id: "pb", tip: "nokta", renk: 2, x: 4, y: 8, etiket: "" },
              { id: "lb", tip: "yazi", x: 4.25, y: 7.2, metin: "4", hiza: "start" },
              { id: "pm", tip: "nokta", renk: 3, x: 6, y: 8, etiket: "", kilavuz: true },
              { id: "lm", tip: "yazi", x: 6.25, y: 7.2, metin: "6", hiza: "start" }
            ],
            durumlar: [
              ["A kulübünün arzı: fiyat arttıkça daha çok çanta sunar.", ["Sa"]],
              ["B kulübünün arzı daha sağda: her fiyatta A'dan daha çok sunar.", ["Sa", "Sb"]],
              ["40 TL'de A 2, B 4 çanta sunar.", ["Sa", "Sb", "h", "pa", "la", "pb", "lb"]],
              ["Piyasa arzı, aynı fiyattaki miktarları toplar: 2 + 4 = 6. Eğri **yatay** toplanır ve yukarı eğimli kalır.", ["Sa", "Sb", "h", "pa", "la", "pb", "lb", "pm", "lm", "Sm"]]
            ] }),
          { tip: "not", metin: "Fiyat yükselince mevcut satıcılar daha çok üretir ve yeni satıcılar da piyasaya girmek ister; bu yüzden ==piyasa arz eğrisi yukarı eğimlidir==. Piyasa talebinde olduğu gibi toplama ==fiyatta== değil ==miktarda== yapılır." }
        ]
      },
      {
        baslik: "Arzı kaydıran etkenler",
        kisa: "Fiyat dışında maliyeti ve satıcıları değiştiren her şey arz eğrisini kaydırır.",
        bloklar: [
          { tip: "liste", maddeler: [
              { ikon: "🧵", baslik: "*Input prices*: girdi fiyatları", metin: "Girdi pahalanırsa maliyet artar, arz sola kayar; ucuzlarsa sağa." },
              { ikon: "⚙️", baslik: "*Technology*: teknoloji", metin: "Daha verimli teknoloji maliyeti düşürür: arz sağa." },
              { ikon: "🏭", baslik: "*Number of sellers*: satıcı sayısı", metin: "Satıcı artarsa piyasa arzı sağa kayar." },
              { ikon: "🧾", baslik: "Vergi ve sübvansiyon", metin: "Birim başına vergi maliyeti artırır: sola. Sübvansiyon maliyeti düşürür: sağa." },
              { ikon: "🔮", baslik: "*Expectations*: beklentiler", metin: "Fiyatın artacağını bekleyen satıcı bugün stok tutar: bugünkü arz sola kayar." },
              { ikon: "🌦️", baslik: "Doğal koşullar ve düzenlemeler", metin: "Kuraklık ya da yeni bir yasak arzı azaltır; kolaylaştıran düzenleme arttırır." }
            ] },
          graf({ baslik: "Arz artışı ve azalışı", xlabel: "Miktar", ylabel: "Fiyat", xmax: 11, ymax: 10, xticks: [{ v: 5, label: "Q" }], yticks: [],
            ogeler: [
              { id: "S", tip: "cizgi", renk: 1, from: [2, 2], to: [8, 8], etiket: "S" },
              { id: "Sk", tip: "cizgi", renk: 1, kesik: true, from: [2, 2], to: [8, 8], etiket: "S" },
              { id: "S1", tip: "cizgi", renk: 2, from: [4, 2], to: [10, 8], etiket: "S₁" },
              { id: "S2", tip: "cizgi", renk: 3, from: [0, 2], to: [6, 8], etiket: "S₂" },
              { id: "okR", tip: "ok", renk: 2, from: [3.3, 3], to: [4.7, 3] },
              { id: "okL", tip: "ok", renk: 3, from: [6.7, 7], to: [5.3, 7] },
              { id: "ka", tip: "nokta", renk: 1, x: 5, y: 5, etiket: "" },
              { id: "kb", tip: "nokta", renk: 2, x: 5, y: 3, etiket: "", kilavuz: true },
              { id: "okD", tip: "ok", renk: 0, from: [5, 4.6], to: [5, 3.4] }
            ],
            durumlar: [
              ["Başlangıç arzı S.", ["S"]],
              ["Girdi ucuzladı, teknoloji gelişti ya da satıcı sayısı arttı: arz ==sağa== kayar. Her fiyatta daha çok miktar sunulur.", ["Sk", "S1", "okR"]],
              ["Girdi pahalandı ya da vergi geldi: arz ==sola== kayar. Her fiyatta daha az miktar sunulur.", ["Sk", "S2", "okL"]],
              ["Sağa kayma aynı zamanda ==aşağı== kaymadır: Q miktarı için gereken fiyat 5'ten 3'e düştü.", ["Sk", "S1", "ka", "kb", "okD"]]
            ] }),
          { tip: "ikili", sol: { ikon: "➡️", baslik: "Arz sağa kayar", maddeler: ["Maliyet düşer", "Satıcı sayısı artar"] },
            sag: { ikon: "⬅️", baslik: "Arz sola kayar", maddeler: ["Maliyet artar", "Satıcı azalır, vergi gelir"] },
            oyun: [
              { metin: "Un fiyatı düştü (fırın piyasası).", cevap: "sol", neden: "Girdi ucuzladı: maliyet azaldı, arz sağa." },
              { metin: "Fırın, yeni ve hızlı bir hamur makinesi aldı.", cevap: "sol", neden: "Teknoloji maliyeti düşürür: arz sağa." },
              { metin: "Devlet fırınlara ekmek başına vergi koydu.", cevap: "sag", neden: "Vergi maliyeti artırır: arz sola." },
              { metin: "Mahallede iki fırın kapandı.", cevap: "sag", neden: "Satıcı sayısı azaldı: piyasa arzı sola." }
            ] }
        ]
      },
      {
        baslik: "Üretimde ilgili mallar ve beklentiler",
        kisa: "Satıcı, kaynaklarını en kazançlı mala yönlendirir; beklenti bugünkü arzı etkiler.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🌾", terim: "Substitutes in production", tr: "üretimde ikame", tanim: "Aynı kaynağı paylaşan mallar. Birinin fiyatı artınca satıcı kaynağı ona kaydırır, diğerinin arzı sola kayar.", ornek: "Çiftçi tarlaya buğday yerine arpa ekerse buğday arzı azalır." },
              { ikon: "🐑", terim: "Complements in production", tr: "üretimde tamamlayıcı", tanim: "Birlikte (yan ürün olarak) üretilen mallar. Birinin fiyatı artıp üretim artınca diğerinin arzı sağa kayar.", ornek: "Yün fiyatı artınca koyun yetiştirmek çoğalır, et arzı da artar." }
            ] },
          { tip: "tuzak", metin: "Beklenti sorularında yön kolayca karışır.", yanlis: "Satıcı gelecekte fiyatın artacağını bekliyor; o halde bugün daha çok satar, arz sağa kayar.", dogru: "Fiyat artışını bekleyen satıcı malı ==şimdi== tutup ==sonra== satmak ister: bugünkü arz ==sola== kayar." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "*Law of supply*: malın kendi fiyatı artınca *quantity supplied* artar; eğri üzerinde yukarı hareket olur.",
              "Arz eğrisi yukarı eğimlidir çünkü *marginal cost* artar; arz eğrisi *marginal cost* eğrisidir.",
              "Piyasa arzı, aynı fiyattaki bireysel miktarların yatay toplamıdır ve yukarı eğimlidir.",
              "Arzı kaydıranlar: girdi fiyatı, teknoloji, satıcı sayısı, vergi/sübvansiyon, beklentiler, doğal koşullar ve düzenlemeler.",
              "Arz artışı eğriyi sağa ve aşağı, arz azalışı sola ve yukarı kaydırır.",
              "Üretimde ikame malın fiyatı artarsa bu malın arzı azalır; üretimde tamamlayıcı malın fiyatı artarsa bu malın arzı artar.",
              "Fiyatın artacağı beklentisi bugünkü arzı azaltır.",
              "*Supply* tüm eğridir, *quantity supplied* eğri üzerinde tek noktadır."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Kulübün baskılı bez çanta fiyatı 30 TL'den 50 TL'ye çıkıyor. Diğer her şey sabit. Çanta arzı için hangisi doğrudur?",
        opts: ["Arz eğrisi sağa kayar.", "Arz eğrisi sola kayar.", "*Quantity supplied* artar; arz eğrisi üzerinde yukarı hareket olur.", "*Quantity supplied* azalır."], a: 2,
        why: "Malın kendi fiyatı değişince eğri kaymaz; eğri üzerinde hareket olur ve fiyat artınca arz edilen miktar artar. “Arz sağa kayar” en çekici yanlış şıktır: kayma ancak fiyat dışı bir etkenle olur." },
      { q: "Un fiyatı düşüyor. Fırınların ekmek piyasasında ne olur?",
        opts: ["Arz sağa kayar; her fiyatta daha çok ekmek sunulur.", "Arz sola kayar; her fiyatta daha az ekmek sunulur.", "Talep sağa kayar.", "*Quantity supplied* azalır."], a: 0,
        why: "Un bir girdidir; ucuzlayınca maliyet düşer ve arz sağa kayar. Arzın sola kayması girdi pahalanınca olur. Talep sağa kayması, alıcıları etkileyen bir olay gerektirir." },
      { q: "Piyasada yalnızca A ve B fırınları var. Simit fiyatı 8 TL iken piyasa arzı kaç simittir?",
        fig: { type: "table", head: ["Fiyat (TL)", "Fırın A", "Fırın B"], rows: [["4", 1, 2], ["6", 2, 3], ["8", 3, 4]], caption: "Bireysel arz (simit)" },
        opts: ["1", "3", "4", "7"], a: 3,
        why: "Piyasa arzı, aynı fiyattaki miktarların toplamıdır: 3 + 4 = 7. 3 ve 4 yalnız birer fırının miktarıdır; 1 ise fark alınırsa çıkar, toplama yapılmaz." },
      { q: "Bir çiftçi önümüzdeki ay domates fiyatının belirgin artacağını bekliyor ve bugünkü satışlarını erteliyor. Domates piyasasında bugün ne olur?",
        opts: ["Talep sağa kayar.", "Arz sola kayar.", "Arz sağa kayar.", "*Quantity supplied* artar."], a: 1,
        why: "Gelecekte daha yüksek fiyat bekleyen satıcı malı şimdi tutar: bugünkü arz sola kayar. “Arz sağa kayar” ters sezgidir; daha çok kazanmak için daha çok satmak, ama gelecekte satmak anlamına gelir." },
      { q: "Grafikte arz S'den S₁'e kayıyor. Aşağıdakilerden hangisi buna yol açabilir?",
        fig: { type: "graph", xlabel: "Miktar", ylabel: "Fiyat", xmax: 11, ymax: 10, lines: [{ from: [2, 2], to: [8, 8], label: "S" }, { from: [4, 2], to: [10, 8], label: "S₁" }] },
        opts: ["Hammadde fiyatı arttı.", "Satıcılara birim başına vergi kondu.", "Üretimde daha verimli bir teknoloji kullanılmaya başlandı.", "Malın fiyatı yükseldi."], a: 2,
        why: "Arz sağa kaymıştır; bunu maliyeti düşüren teknoloji sağlar. Hammadde zammı ve vergi arzı sola kaydırır. Malın kendi fiyatındaki artış arzı kaydırmaz, yalnızca eğri üzerinde yukarı hareket ettirir." }
    ]
  };
})();
