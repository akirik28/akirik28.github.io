/* Kitora not defteri · mi204 · 2.4 Arzın Fiyat Esnekliği
   Kaynak: AP Micro CED, Topic 2.4 (MKT-3.E.6–8). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = (function () {
  /* Yardımcı: yalnız `acik` listesindeki ögeler görünür; geri kalan ögeler gizlenir (set, kümülatif) */
  function graf(o) {
    var ids = o.ogeler.map(function (e) { return e.id; });
    var eslik = o.ogeler.filter(function (e) { return e.pair; }); /* pair: bağlı olduğu ögeyle birlikte görünen etiket */
    o.durumlar = o.durumlar.map(function (d) {
      var g = d[1].slice();
      eslik.forEach(function (e) { if (g.indexOf(e.pair) >= 0 && g.indexOf(e.id) < 0) g.push(e.id); });
      var r = { metin: d[0], goster: g, gizle: ids.filter(function (i) { return g.indexOf(i) < 0; }) };
      if (d[2]) r.set = d[2];
      return r;
    });
    o.tip = "grafik";
    return o;
  }

  return {
    slug: "mi204",
    amac: "Bu konu *price elasticity of supply* yani arzın fiyat esnekliğini anlatıyor: fiyat değişince satıcılar miktarı yüzde kaç değiştirir? Formülü, elastik ve inelastik arzı, arz eğrisinin kesişim noktasının rolünü ve esnekliği belirleyen etkenleri öğreneceksin.",
    bolumler: [
      {
        baslik: "Arz esnekliği: formül ve yorum",
        kisa: "Arz esnekliği, fiyat değişince arz edilen miktarın yüzde kaç değiştiğini ölçer.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "E_s", alt: "arzın fiyat esnekliği" }, "=",
              { t: "%ΔQs", alt: "arz edilen miktardaki yüzde değişim" }, "÷",
              { t: "%ΔP", alt: "fiyattaki yüzde değişim" }
            ], aciklama: "Arz yukarı eğimli olduğu için pay ve payda aynı işaretlidir: E_s pozitiftir, mutlak değer gerekmez. Yüzde değişimi *midpoint* ile hesapla." },
          { tip: "kavramlar", kartlar: [
              { ikon: "🚀", terim: "Elastic supply", tr: "elastik arz", tanim: "E_s > 1. Fiyat yüzde 1 artınca arz edilen miktar yüzde 1'den fazla artar.", ornek: "Boş kapasitesi olan bir fabrika." },
              { ikon: "🐢", terim: "Inelastic supply", tr: "inelastik arz", tanim: "E_s < 1. Fiyat artsa da arz edilen miktar yüzdece daha az artar.", ornek: "Hasat dönemindeki taze çilek." },
              { ikon: "🟰", terim: "Unit elastic supply", tr: "birim elastik arz", tanim: "E_s = 1. Fiyat ve arz edilen miktar aynı yüzdede değişir.", ornek: "Fiyat %10 artınca miktar da %10 artar." }
            ] },
          { tip: "ornek", baslik: "Poğaça zamlandı", durum: "Fırın poğaçanın fiyatını 20 TL'den 30 TL'ye çıkarıyor; günlük arz 45 poğaçadan 55'e çıkıyor.",
            adimlar: ["%ΔP = (30 − 20) ÷ ((20 + 30) / 2) = 10 ÷ 25 = %40.", "%ΔQs = (55 − 45) ÷ ((45 + 55) / 2) = 10 ÷ 50 = %20.", "E_s = 20 ÷ 40 = 0,5."],
            sonuc: "E_s = 0,5 < 1: arz ==inelastik==. Fiyat %1 artınca arz edilen miktar yaklaşık %0,5 artar." }
        ]
      },
      {
        baslik: "Uç durumlar: dikey ve yatay arz",
        kisa: "Dikey arz E_s = 0, yatay arz E_s = ∞; dik olan daha inelastiktir.",
        bloklar: [
          graf({ baslik: "Uç durumlar ve eğim", xlabel: "Miktar", ylabel: "Fiyat", xmax: 12, ymax: 10, xticks: [], yticks: [],
            ogeler: [
              { id: "v", tip: "cizgi", renk: 1, from: [5, 0], to: [5, 9], etiket: "E_s = 0" },
              { id: "h", tip: "cizgi", renk: 1, from: [0, 5], to: [9, 5], etiket: "E_s = ∞" },
              { id: "dik", tip: "cizgi", renk: 1, from: [3.5, 2], to: [7, 9], etiket: "dik: inelastik" },
              { id: "yat", tip: "cizgi", renk: 2, from: [1, 3], to: [9, 7], etiket: "yatık: elastik" },
              { id: "N", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "" },
              { id: "tN", tip: "yazi", pair: "N", x: 5.35, y: 4.55, metin: "N", hiza: "start" }
            ],
            durumlar: [
              ["**Dikey** arz: fiyat ne olursa miktar sabit. E_s = 0, *perfectly inelastic*. Örnek: kısa dönemde stadyumdaki koltuk sayısı.", ["v"]],
              ["**Yatay** arz: o fiyatta istenen her miktar sunulur, biraz düşük fiyatta hiç sunulmaz. E_s = ∞, *perfectly elastic*. Örnek: boş kapasitesi ve sabit maliyeti olan fabrika (yaklaşık).", ["h"]],
              ["Aynı N noktasından geçen iki eğri: ==dik olan daha inelastik==, yatık olan daha elastiktir.", ["dik", "yat", "N"]]
            ] }),
          { tip: "not", metin: "Gerçek hayatta arz çoğunlukla bu iki uç arasındadır. Ayrım noktası ==1==dir: fiyat yüzdesi ile miktar yüzdesi eşitse birim elastik, miktar yüzdece daha çok değişiyorsa elastik, daha az değişiyorsa inelastiktir." }
        ]
      },
      {
        baslik: "Doğrusal arzda esnekliği kesişim noktası belirler",
        kisa: "Orijinden geçen doğrusal arz, eğimi ne olursa olsun her noktada birim elastiktir.",
        bloklar: [
          graf({ baslik: "Üç doğrusal arz eğrisi, ortak nokta N (5, 5)", xlabel: "Miktar", ylabel: "Fiyat", xmax: 13, ymax: 12, xticks: [], yticks: [],
            ogeler: [
              { id: "Sb", tip: "cizgi", renk: 1, from: [0, 0], to: [11, 11], etiket: "E_s = 1" },
              { id: "Sa", tip: "cizgi", renk: 2, from: [0, 2], to: [11, 8.6], etiket: "E_s > 1" },
              { id: "Sc", tip: "cizgi", renk: 3, from: [2, 0], to: [8, 10], etiket: "E_s < 1" },
              { id: "N", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "", kilavuz: true },
              { id: "tN", tip: "yazi", pair: "N", x: 5.35, y: 4.4, metin: "N", hiza: "start" }
            ],
            durumlar: [
              ["Orijinden geçen doğru: fiyat ile miktar orantılı artar; her noktada E_s = 1.", ["Sb"]],
              ["N noktasında P/Q = 1 ve eğim 1: E_s = (1/eğim) × (P/Q) = 1.", ["Sb", "N"]],
              ["Fiyat eksenini pozitif bir noktada kesen eğri (0, 2): eğim 0,6; N'de E_s = 1/0,6 ≈ 1,7. Her noktada ==elastik==.", ["Sb", "N", "Sa"]],
              ["Miktar eksenini pozitif bir noktada kesen eğri (2, 0): eğim 5/3; N'de E_s = 0,6. Her noktada ==inelastik==.", ["Sb", "N", "Sa", "Sc"]]
            ] }),
          { tip: "tablo", baslik: "Doğrusal arz eğrisi nereden başlıyor?", head: ["Eğri nereden başlıyor?", "E_s", "Örnek (grafik)"], rows: [
              ["Fiyat (dikey) ekseninde pozitif bir noktadan", "> 1, elastik", "(0, 2)'den çıkan çizgi"],
              ["Orijinden", "= 1, her noktada", "(0, 0)'dan çıkan çizgi"],
              ["Miktar (yatay) ekseninde pozitif bir noktadan", "< 1, inelastik", "(2, 0)'dan çıkan çizgi"]
            ] },
          { tip: "tuzak", metin: "Orijinden geçen eğriye bakıp eğimle karar verme.", yanlis: "Orijinden geçen eğri dikse inelastik, yatıksa elastiktir.", dogru: "Orijinden geçen her doğrusal arz eğrisinde, eğimi ne olursa olsun E_s = ==1=='dir. Önce eğrinin eksenleri nerede kestiğine bak." }
        ]
      },
      {
        baslik: "Arz esnekliğini belirleyen etkenler",
        kisa: "Üretimi hızlı artırabilen, girdisi bol ve zamanı olan satıcının arzı elastiktir.",
        bloklar: [
          { tip: "liste", maddeler: [
              { ikon: "⏳", baslik: "Zaman ufku", metin: "Kısa dönemde kapasite sabittir: inelastik. Uzun dönemde fabrika kurulur, yeni firma girer: elastik." },
              { ikon: "🧰", baslik: "Girdi ve alternatif girdi fiyatı", metin: "Girdi ya da onun alternatifi bol ve ucuzsa üretim kolay artar: elastik." },
              { ikon: "🏭", baslik: "Atıl kapasite", metin: "Boşta makine ve işçi varsa üretim hızla artar: elastik." },
              { ikon: "📦", baslik: "Stoklanabilirlik", metin: "Stoklanan mal (konserve) elastik; çabuk bozulan mal (taze çilek) inelastik." },
              { ikon: "🔄", baslik: "Kaynakların taşınabilirliği", metin: "Kaynaklarını başka mala kolayca kaydırabilen satıcının arzı elastiktir." }
            ] },
          graf({ baslik: "Aynı fiyat artışı, kısa ve uzun dönem", xlabel: "Miktar", ylabel: "Fiyat", xmax: 12, ymax: 10, xticks: [], yticks: [{ v: 5, label: "P₀" }, { v: 7, label: "P₁" }],
            ogeler: [
              { id: "Sk", tip: "cizgi", renk: 1, from: [3, 1], to: [7, 9], etiket: "kısa dönem" },
              { id: "Su", tip: "cizgi", renk: 2, from: [1, 3], to: [9, 7], etiket: "uzun dönem" },
              { id: "N", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "", kilavuz: true },
              { id: "tN", tip: "yazi", pair: "N", x: 5.35, y: 4.4, metin: "N", hiza: "start" },
              { id: "h", tip: "cizgi", renk: 0, kesik: true, from: [0, 7], to: [10, 7] },
              { id: "pk", tip: "nokta", renk: 1, x: 6, y: 7, etiket: "", kilavuz: true },
              { id: "lpk", tip: "yazi", pair: "pk", x: 6.15, y: 6.4, metin: "6", hiza: "start" },
              { id: "pu", tip: "nokta", renk: 2, x: 9, y: 7, etiket: "", kilavuz: true },
              { id: "lpu", tip: "yazi", pair: "pu", x: 9.15, y: 6.4, metin: "9", hiza: "start" }
            ],
            durumlar: [
              ["Kısa dönemde arz dik: fabrika büyütülemez, işçi bulmak zor.", ["Sk", "N"]],
              ["Uzun dönemde arz daha yatık: yeni makine, yeni işçi, yeni firma.", ["Sk", "Su", "N"]],
              ["Fiyat 5'ten 7'ye çıkınca miktar: kısa dönemde 5 → 6, uzun dönemde 5 → 9. Zaman, arzı ==daha elastik== yapar.", ["Sk", "Su", "N", "h", "pk", "pu"]]
            ] }),
          { tip: "ikili", sol: { ikon: "🚀", baslik: "Elastik arz", maddeler: ["Atıl kapasite, bol girdi, stoklanabilir", "Uzun dönem"] },
            sag: { ikon: "🐢", baslik: "İnelastik arz", maddeler: ["Kapasite dolu, girdi kıt, bozulur", "Kısa dönem"] },
            oyun: [
              { metin: "Makinelerinin yarısı boşta bekleyen bir fabrika.", cevap: "sol", neden: "Atıl kapasite üretimi hızla artırır: elastik." },
              { metin: "Taze çilek, bu hafta (hasat zamanı sabit, çabuk bozulur).", cevap: "sag", neden: "Kısa sürede arttırılamaz, stoklanamaz: inelastik." },
              { metin: "Yarınki uçuş için kalan koltuk sayısı.", cevap: "sag", neden: "Uçak sabit: kısa dönem, inelastik." },
              { metin: "Konserve fasulye (stoklanabilir, hammadde bol).", cevap: "sol", neden: "Stok ve girdi kolay: elastik." }
            ] }
        ]
      },
      {
        baslik: "Arz esnekliği fiyat tepkisini belirler",
        kisa: "Arz ne kadar inelastikse talep artışı fiyatı o kadar çok yükseltir.",
        bloklar: [
          graf({ baslik: "Aynı talep artışı, iki farklı arz", xlabel: "Miktar", ylabel: "Fiyat", xmax: 12, ymax: 11, xticks: [{ v: 5, label: "Q₀" }], yticks: [{ v: 5, label: "P₀" }],
            ogeler: [
              { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [10, 0], etiket: "D" },
              { id: "Dk", tip: "cizgi", renk: 0, kesik: true, from: [0, 10], to: [10, 0] },
              { id: "D1", tip: "cizgi", renk: 3, from: [3, 10], to: [10, 3], etiket: "D₁" },
              { id: "Ss", tip: "cizgi", renk: 1, from: [2.5, 0], to: [7.5, 10], etiket: "S (inelastik)" },
              { id: "Sf", tip: "cizgi", renk: 2, from: [0, 2.5], to: [10, 7.5], etiket: "S (elastik)" },
              { id: "E0", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "", kilavuz: true },
              { id: "tE0", tip: "yazi", pair: "E0", x: 5.05, y: 5.75, metin: "E₀" },
              { id: "Es", tip: "nokta", renk: 1, x: 6, y: 7, etiket: "E₁", kilavuz: true },
              { id: "Ef", tip: "nokta", renk: 2, x: 7, y: 6, etiket: "", kilavuz: true },
              { id: "tEf", tip: "yazi", pair: "Ef", x: 7, y: 6.8, metin: "E₁" }
            ],
            durumlar: [
              ["**Dik (inelastik) arz:** başlangıç dengesi E₀ (5, 5).", ["D", "Ss", "E0"]],
              ["Talep 3 birim sağa kayınca denge E₁'e gider: fiyat 5 → 7 (+2), miktar 5 → 6 (+1). Fiyat çok, miktar az değişti.", ["Dk", "D1", "Ss", "E0", "Es"]],
              ["**Yatık (elastik) arz:** aynı başlangıç dengesi.", ["D", "Sf", "E0"]],
              ["Aynı talep artışı: fiyat 5 → 6 (+1), miktar 5 → 7 (+2). Fiyat az, miktar çok değişti.", ["Dk", "D1", "Sf", "E0", "Ef"]]
            ] }),
          { tip: "not", metin: "Kural: ==inelastik arzda fiyat==, ==elastik arzda miktar== daha çok oynar. Aynı mantık arz kaymasında talebin esnekliği için de geçerlidir; bunu 2.7 ve 2.8'de vergi ve şokların etkisinde göreceksin." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "E_s = %ΔQs ÷ %ΔP; arz yukarı eğimli olduğu için pozitiftir.",
              "E_s > 1 elastik, E_s < 1 inelastik, E_s = 1 birim elastik; dikey arz 0, yatay arz ∞.",
              "Aynı noktadan geçen iki eğriden dik olan daha inelastiktir.",
              "Doğrusal arz: fiyat eksenini pozitifte kesen elastik, miktar eksenini pozitifte kesen inelastik, orijinden geçen her noktada 1.",
              "Zaman uzadıkça, atıl kapasite ve girdi bol oldukça, stoklanabildikçe arz daha elastiktir.",
              "Girdi ve alternatif girdi fiyatları arz esnekliğini etkiler.",
              "İnelastik arzda talep artışı fiyatı çok, miktarı az artırır; elastik arzda tersi.",
              "Midpoint: yüzde değişim = fark ÷ ortalama."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Bir fırın poğaçanın fiyatını 20 TL'den 30 TL'ye çıkarınca günlük arzı 45'ten 55'e çıkıyor. Orta nokta yöntemiyle arzın fiyat esnekliği kaçtır?",
        opts: ["0,5", "1", "2", "2,5"], a: 0,
        why: "%ΔP = 10 ÷ 25 = %40; %ΔQs = 10 ÷ 50 = %20; E_s = 20 ÷ 40 = 0,5: inelastik. 2 değeri, oranın tersi (%40 ÷ %20) alınınca çıkan hatalı sonuçtur." },
      { q: "Doğrusal, yukarı eğimli bir arz eğrisi fiyat (dikey) eksenini pozitif bir noktada kesiyor. Eğri üzerindeki noktalarda arzın fiyat esnekliği için ne söylenebilir?",
        opts: ["Eğrinin her noktasında elastiktir.", "Her noktada birim elastiktir.", "Her noktada inelastiktir.", "Noktadan noktaya değişir."], a: 0,
        why: "Fiyat eksenini pozitifte kesen doğrusal arz eğrisinde E_s = P ÷ (P − a) > 1: her noktada elastiktir. Birim elastik, yalnız orijinden geçen eğriye aittir; inelastik ise miktar eksenini kesenlere." },
      { q: "Aşağıdakilerden hangisi bir malın arzını daha elastik yapar?",
        opts: ["Malın çabuk bozulması ve stoklanamaması", "Kısa bir zaman ufku", "Firmaların atıl kapasiteye sahip olması", "Girdilerin çok kıt olması"], a: 2,
        why: "Boşta kapasite, üretimi fiyat artınca hızla artırmayı sağlar. Bozulabilirlik, kısa zaman ve kıt girdi üretimi hızlı artırmayı zorlaştırır; üçü de arzı daha inelastik yapar." },
      { q: "İki ayrı piyasada talep aynı miktarda artıyor. X piyasasında arz çok inelastik, Y piyasasında arz çok elastik. Sonuç ne olur?",
        opts: ["X'te fiyat az, miktar çok artar.", "Her iki piyasada da fiyat ve miktar aynı kadar artar.", "Y'de fiyat X'ten daha çok artar.", "X'te fiyat daha çok, miktar daha az artar."], a: 3,
        why: "İnelastik arzda üreticiler miktarı kolay artıramaz; denge fiyatı büyük artar, miktar az artar. Elastik arzda (Y) tersi olur. “Y'de fiyat daha çok artar” ters yönlü bir sezgidir." },
      { q: "Grafikte S₁ ve S₂ aynı N noktasından geçiyor. N noktasında hangisi doğrudur?",
        fig: { type: "graph", xlabel: "Miktar", ylabel: "Fiyat", xmax: 11, ymax: 10, lines: [{ from: [3.5, 2], to: [7, 9], label: "S₁" }, { from: [1, 3], to: [9, 7], label: "S₂" }], points: [{ q: 5, p: 5, label: "N" }] },
        opts: ["S₁ daha elastiktir, çünkü daha diktir.", "S₂ daha elastiktir, çünkü aynı fiyat artışında miktarı daha çok artırır.", "İkisinin esnekliği aynıdır, çünkü aynı noktadan geçerler.", "S₂ daha inelastiktir, çünkü daha yatıktır."], a: 1,
        why: "Aynı noktadan geçen iki doğrusal eğriden daha yatık olanın eğimi küçük, esnekliği büyüktür: aynı fiyat artışında miktar daha çok artar. Dik eğri (S₁) daha inelastiktir; aynı noktadan geçmek esnekliği eşitlemez." }
    ]
  };
})();
