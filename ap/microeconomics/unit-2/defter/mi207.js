/* Kitora not defteri · mi207 · 2.7 Dengesizlik ve Dengenin Değişmesi
   Kaynak: AP Micro CED, Topic 2.7 (MKT-4.B.1–2). Blok türleri: /ap/_kit/defter.js başı.
   Sayısal taban: D: P = 100 − Q, S: P = Q + 20; denge (40 adet, 60 TL). Grafikte 1 birim = 10 TL ve 10 adet. */
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
    slug: "mi207",
    amac: "Bu konu dengesizliği ve dengenin değişmesini anlatıyor: fiyat denge düzeyinden sapınca *surplus* (fazlalık) ve *shortage* (kıtlık) nasıl doğar, piyasa dengeye nasıl döner? Arz ya da talep kayınca fiyat, miktar ve rantlar nasıl değişir, esneklik bunu nasıl etkiler?",
    bolumler: [
      {
        baslik: "Fazlalık (*surplus*) ve kıtlık (*shortage*)",
        kisa: "Fiyat dengenin üstündeyse fazlalık, altındaysa kıtlık oluşur.",
        bloklar: [
          graf({ baslik: "Konser bileti: denge 60 TL, 40 bilet", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 12, ymax: 13,
            xticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }], yticks: [{ v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }],
            ogeler: [
              { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [10, 0], etiket: "D" },
              { id: "S", tip: "cizgi", renk: 1, from: [0, 2], to: [10, 12], etiket: "S" },
              { id: "E0", tip: "nokta", renk: 3, x: 4, y: 6, etiket: "Denge", kilavuz: true },
              { id: "h", tip: "cizgi", renk: 2, kesik: true, from: [0, 8], to: [6, 8] },
              { id: "qd", tip: "nokta", renk: 0, x: 2, y: 8, etiket: "Qd" },
              { id: "qs", tip: "nokta", renk: 1, x: 6, y: 8, etiket: "Qs" },
              { id: "bk", tip: "yazi", x: 4, y: 8.7, metin: "fazlalık: 40 bilet" },
              { id: "okd", tip: "ok", renk: 3, from: [9, 7.8], to: [9, 6.2] },
              { id: "oku", tip: "ok", renk: 3, from: [9, 4.2], to: [9, 5.8] }
            ],
            durumlar: [
              ["Denge: 60 TL ve 40 bilet. Talep P = 100 − Q, arz P = Q + 20.", ["D", "S", "E0"]],
              ["Fiyat 80 TL'ye çıkarılırsa alıcılar 20 bilet ister (Qd), satıcılar 60 bilet sunar (Qs). ==Fazlalık== = Qs − Qd = 40 bilet.", ["D", "S", "E0", "h", "qd", "qs", "bk"], { h: { from: [0, 8], to: [6, 8] }, qd: { x: 2, y: 8 }, qs: { x: 6, y: 8 }, bk: { x: 4, y: 8.7, metin: "fazlalık: 40 bilet" } }],
              ["Satıcılar elde kalan biletlerle karşılaşır ve indirim yapar: fiyat düşer. Fiyat düştükçe Qd artar, Qs azalır; fazlalık kapanana kadar sürer. Denge 60 TL'de bulunur.", ["D", "S", "E0", "okd"]],
              ["Fiyat 40 TL'ye çekilirse alıcılar 60 bilet ister, satıcılar 20 bilet sunar. ==Kıtlık== = Qd − Qs = 40 bilet.", ["D", "S", "E0", "h", "qd", "qs", "bk"], { h: { from: [0, 4], to: [6, 4] }, qd: { x: 6, y: 4 }, qs: { x: 2, y: 4 }, bk: { x: 4, y: 3.2, metin: "kıtlık: 40 bilet" } }],
              ["Alıcılar bilete ulaşmak için daha fazla ödemeye razı olur, satıcılar zam yapar: fiyat yükselir ve denge 60 TL'ye döner.", ["D", "S", "E0", "oku"]]
            ] }),
          { tip: "ikili", sol: { ikon: "📦", baslik: "Fazlalık (*surplus*)", maddeler: ["Fiyat dengenin ÜSTÜNDE", "Qs > Qd; fiyat düşme baskısında"] },
            sag: { ikon: "🎟️", baslik: "Kıtlık (*shortage*)", maddeler: ["Fiyat dengenin ALTINDA", "Qd > Qs; fiyat yükselme baskısında"] },
            oyun: [
              { metin: "Kafe, tostu denge fiyatından pahalıya satıyor; tezgâhta tostlar kalıyor.", cevap: "sol", neden: "Fiyat dengenin üstünde, satılamayan mal var: fazlalık." },
              { metin: "Belediye kiraları dengenin altında tuttu; ev arayanlar sıra bekliyor.", cevap: "sag", neden: "Qd > Qs: kıtlık." },
              { metin: "Satıcılar elindeki stoku eritmek için indirim yapıyor.", cevap: "sol", neden: "Satılamayan stok: fazlalık." },
              { metin: "Konser biletleri satışa çıkar çıkmaz tükendi; karaborsada fiyat yüksek.", cevap: "sag", neden: "İstenen miktar sunulandan fazla: kıtlık." }
            ] },
          { tip: "tuzak", metin: "İngilizce *surplus* iki ayrı anlama gelir.", yanlis: "Piyasada *surplus* varsa tüketici rantı artmıştır.", dogru: "Dengesizlikte *surplus* = Qs − Qd (aşırı arz). *Consumer surplus* ve *producer surplus* ise rantlardır (bir önceki konu). Cümlenin bağlamına bak." }
        ]
      },
      {
        baslik: "Piyasa dengeye nasıl döner?",
        kisa: "Fazlalık fiyatı düşürür, kıtlık fiyatı yükseltir; piyasa dengeye döner.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "⚖️", terim: "Disequilibrium", tr: "dengesizlik", tanim: "Fiyatın denge fiyatından farklı olması; Qd ile Qs eşit değildir.", ornek: "Bilet 80 TL'ye satılıyor, denge 60 TL." },
              { ikon: "📦", terim: "Surplus (excess supply)", tr: "fazlalık (aşırı arz)", tanim: "Fiyat dengenin üstündeyken Qs − Qd farkı. Satılamayan mal birikir.", ornek: "80 TL'de 60 − 20 = 40 bilet." },
              { ikon: "🎟️", terim: "Shortage (excess demand)", tr: "kıtlık (aşırı talep)", tanim: "Fiyat dengenin altındayken Qd − Qs farkı. İsteyen alıcılar mal bulamaz.", ornek: "40 TL'de 60 − 20 = 40 bilet." }
            ] },
          { tip: "tablo", baslik: "Fiyat, Qd ve Qs", head: ["Fiyat (TL)", "Talep edilen", "Arz edilen", "Durum", "Fiyat baskısı"], rows: [
              ["100", "0", "80", "Fazlalık 80", "↓"], ["80", "20", "60", "Fazlalık 40", "↓"], ["60", "40", "40", "Denge", "—"], ["40", "60", "20", "Kıtlık 40", "↑"], ["20", "80", "0", "Kıtlık 80", "↑"]
            ], vurgu: 2, not: "Qd = 100 − P ve Qs = P − 20. Fiyat dengeden uzaklaştıkça fazlalık ya da kıtlık büyür." },
          { tip: "adimlar", baslik: "Fazlalık varsa", adimlar: [
              { baslik: "1 · Fiyat denge üstünde", metin: "Qs > Qd. Satıcılar satamadığı stokla kalır." },
              { baslik: "2 · Satıcılar indirim yapar", metin: "Fiyat düşer; bu eğri üzerinde aşağı harekettir." },
              { baslik: "3 · Qd artar, Qs azalır", metin: "Eğriler kaymaz; iki taraf da fiyata tepki verir." },
              { baslik: "4 · Denge", metin: "Fazlalık sıfırlanınca fiyat durur. Kıtlıkta süreç tersine işler." }
            ] }
        ]
      },
      {
        baslik: "Dengenin kayması: dört tek kayma ve rantlar",
        kisa: "Talep ve arz kayınca denge, tüketici ve üretici rantı yeni değerlerine geçer.",
        bloklar: [
          { tip: "adimlar", baslik: "Her soruda aynı yöntem", adimlar: [
              { baslik: "1 · Önce", metin: "Arz ve talebi çiz; Pe ve Qe'yi işaretle." },
              { baslik: "2 · Değişim", metin: "Olay alıcıyı mı satıcıyı mı etkiliyor? Alıcıysa talep, satıcıysa arz kayar. Yönü belirle." },
              { baslik: "3 · Sonra", metin: "Yeni dengeyi bul; P, Q, CS ve PS'nin yönünü söyle." }
            ] },
          graf({ baslik: "Dört tek kayma", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 12, ymax: 13,
            xticks: [{ v: 3, label: "30" }, { v: 4, label: "40" }, { v: 5, label: "50" }], yticks: [{ v: 5, label: "50" }, { v: 6, label: "60" }, { v: 7, label: "70" }],
            ogeler: [
              { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [10, 0], etiket: "D" },
              { id: "S", tip: "cizgi", renk: 1, from: [0, 2], to: [10, 12], etiket: "S" },
              { id: "Dk", tip: "cizgi", renk: 0, kesik: true, from: [0, 10], to: [10, 0] },
              { id: "Sk", tip: "cizgi", renk: 1, kesik: true, from: [0, 2], to: [10, 12] },
              { id: "D1", tip: "cizgi", renk: 3, from: [0, 12], to: [10, 2], etiket: "D₁" },
              { id: "D2", tip: "cizgi", renk: 3, from: [0, 8], to: [8, 0], etiket: "D₂" },
              { id: "S1", tip: "cizgi", renk: 2, from: [0, 0], to: [10, 10], etiket: "S₁" },
              { id: "S2", tip: "cizgi", renk: 2, from: [0, 4], to: [8, 12], etiket: "S₂" },
              { id: "okDR", tip: "ok", renk: 3, from: [1.3, 9], to: [2.7, 9] },
              { id: "okDL", tip: "ok", renk: 3, from: [2.7, 7], to: [1.3, 7] },
              { id: "okSR", tip: "ok", renk: 2, from: [7.3, 9], to: [8.7, 9] },
              { id: "okSL", tip: "ok", renk: 2, from: [6.7, 9], to: [5.3, 9] },
              { id: "E0", tip: "nokta", renk: 0, x: 4, y: 6, etiket: "E₀", kilavuz: true },
              { id: "E1", tip: "nokta", renk: 3, x: 5, y: 7, etiket: "E₁", kilavuz: true },
              { id: "E2", tip: "nokta", renk: 3, x: 3, y: 5, etiket: "E₂", kilavuz: true },
              { id: "E3", tip: "nokta", renk: 2, x: 5, y: 5, etiket: "E₃", kilavuz: true },
              { id: "E4", tip: "nokta", renk: 2, x: 3, y: 7, etiket: "E₄", kilavuz: true }
            ],
            durumlar: [
              ["Başlangıç: E₀ = 60 TL, 40 bilet. CS = ½ × 40 × 40 = 800 TL; PS = ½ × 40 × (60 − 20) = 800 TL.", ["D", "S", "E0"]],
              ["**Talep artışı** (okula yeni öğrenciler geldi): D → D₁. E₁ = 70 TL, 50 bilet: P ↑, Q ↑. CS ve PS 1250 TL'ye çıkar.", ["Dk", "D1", "S", "E1", "okDR"]],
              ["**Talep azalışı:** D → D₂. E₂ = 50 TL, 30 bilet: P ↓, Q ↓. CS ve PS 450 TL'ye düşer.", ["Dk", "D2", "S", "E2", "okDL"]],
              ["**Arz artışı** (organizasyon maliyeti düştü): S → S₁. E₃ = 50 TL, 50 bilet: P ↓, Q ↑. CS ve PS 1250 TL'ye çıkar.", ["D", "Sk", "S1", "E3", "okSR"]],
              ["**Arz azalışı** (salon kirası arttı): S → S₂. E₄ = 70 TL, 30 bilet: P ↑, Q ↓. CS ve PS 450 TL'ye düşer.", ["D", "Sk", "S2", "E4", "okSL"]]
            ] }),
          { tip: "tablo", baslik: "Dört tek kaymanın sonucu (bu örnekte)", head: ["Olay", "P (TL)", "Q", "CS", "PS", "Toplam"], rows: [
              ["Başlangıç", "60", "40", "800", "800", "1600"], ["Talep ↑", "70", "50", "1250", "1250", "2500"], ["Talep ↓", "50", "30", "450", "450", "900"], ["Arz ↑", "50", "50", "1250", "1250", "2500"], ["Arz ↓", "70", "30", "450", "450", "900"]
            ], vurgu: 0, not: "Talep kayınca P ve Q aynı yönde, arz kayınca zıt yönde değişir. Rant sayıları bu örneğe aittir; esneklikler değişirse rant değişimlerinin büyüklüğü de değişir." }
        ]
      },
      {
        baslik: "Esneklik şokun etkisini belirler",
        kisa: "Kaymayan eğri ne kadar inelastikse fiyat o kadar çok, miktar o kadar az değişir.",
        bloklar: [
          graf({ baslik: "Aynı arz azalışı (kuraklık), iki farklı talep", xlabel: "Miktar", ylabel: "Fiyat", xmax: 12, ymax: 11, xticks: [], yticks: [{ v: 5, label: "P₀" }],
            ogeler: [
              { id: "Dd", tip: "cizgi", renk: 0, from: [2.5, 10], to: [7.5, 0], etiket: "D (inelastik)" },
              { id: "Df", tip: "cizgi", renk: 3, from: [0, 7.5], to: [10, 2.5], etiket: "D (elastik)" },
              { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [10, 10], etiket: "S" },
              { id: "S2", tip: "cizgi", renk: 2, from: [0, 3], to: [7, 10], etiket: "S₂" },
              { id: "okSL", tip: "ok", renk: 2, from: [7.6, 8], to: [5.4, 8] },
              { id: "E0", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "E₀", kilavuz: true },
              { id: "E1", tip: "nokta", renk: 1, x: 4, y: 7, etiket: "E₁", kilavuz: true },
              { id: "E2", tip: "nokta", renk: 1, x: 3, y: 6, etiket: "E₁", kilavuz: true }
            ],
            durumlar: [
              ["**Dik (inelastik) talep:** başlangıç dengesi E₀ (5, 5).", ["Dd", "S", "E0"]],
              ["Arz azalınca (S → S₂) denge E₁'e gider: fiyat 5 → 7 (+2), miktar 5 → 4 (−1). Alıcı vazgeçemediği için fiyat çok artar.", ["Dd", "S", "S2", "E0", "E1", "okSL"]],
              ["**Yatık (elastik) talep:** aynı başlangıç dengesi.", ["Df", "S", "E0"]],
              ["Aynı arz azalışı: fiyat 5 → 6 (+1), miktar 5 → 3 (−2). Alıcı kolayca vazgeçer; fiyat az artar, miktar çok düşer.", ["Df", "S", "S2", "E0", "E2", "okSL"]]
            ] }),
          { tip: "not", metin: "Aynı kural talep kaymasında da işler: ==kaymayan eğri== (arz) inelastikse talep artışı fiyatı çok yükseltir. CS ve PS değişimlerinin büyüklüğü de iki eğrinin esnekliğine bağlıdır." }
        ]
      },
      {
        baslik: "İki eğri birden kayarsa",
        kisa: "Çift kaymada biri kesindir, öbürü belirsiz kalır.",
        bloklar: [
          { tip: "tablo", baslik: "Çift kayma", head: ["Kayma", "Fiyat", "Miktar"], rows: [
              ["Talep ↑ ve arz ↑", "Belirsiz", "Artar"], ["Talep ↑ ve arz ↓", "Artar", "Belirsiz"], ["Talep ↓ ve arz ↑", "Azalır", "Belirsiz"], ["Talep ↓ ve arz ↓", "Belirsiz", "Azalır"]
            ] },
          { tip: "ornek", baslik: "Sıcak hava ve yeni makine", durum: "Yaz geliyor: sıcak hava dondurma talebini artırıyor. Aynı sırada yeni bir makine dondurma arzını artırıyor.",
            adimlar: ["Talep sağa: P ↑, Q ↑.", "Arz sağa: P ↓, Q ↑.", "Miktar iki etkide de arttı: kesin artar. Fiyat: biri artırıyor, öbürü azaltıyor."],
            sonuc: "==Q artar, P belirsiz.== Talep kayması daha büyükse P artar, arz kayması daha büyükse P düşer; eşitse değişmez." },
          { tip: "tuzak", metin: "“Belirsiz”, “değişmez” demek değildir.", yanlis: "Talep ve arz birlikte artınca fiyat değişmez.", dogru: "Fiyat ==belirsizdir==: iki kaymanın büyüklüğüne bağlıdır. Değişmez, ancak iki etki tam dengeleşirse." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Fiyat dengenin üstündeyse *surplus* (Qs > Qd), altındaysa *shortage* (Qd > Qs) oluşur.",
              "Fazlalık fiyatı düşürür, kıtlık fiyatı yükseltir; piyasa dengeye eğri üzerinde hareketle döner.",
              "Talep kayınca P ve Q aynı yönde, arz kayınca zıt yönde değişir.",
              "Kayma CS, PS ve toplam rantı da değiştirir; büyüklük eğrilerin esnekliğine bağlıdır.",
              "Önce–Değişim–Sonra: önce dengeyi çiz, olayın alıcıyı ya da satıcıyı etkilediğine bak, yeni dengeyi bul.",
              "Kaymayan eğri inelastikse fiyat çok, miktar az; elastikse fiyat az, miktar çok değişir.",
              "Çift kaymada ya P ya Q kesindir, öbürü belirsizdir.",
              "*Surplus* iki anlama gelebilir: aşırı arz ya da rant. Bağlama bak."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Tablo bir bilet piyasasını gösteriyor. Fiyat 40 TL iken ne olur?",
        fig: { type: "table", head: ["Fiyat (TL)", "Talep edilen", "Arz edilen"], rows: [[80, 20, 60], [60, 40, 40], [40, 60, 20]], caption: "Bilet piyasası" },
        opts: ["Denge fiyatı 60 TL; 40 TL'de 40 bilet fazlalık oluşur.", "Denge fiyatı 60 TL; 40 TL'de 40 bilet kıtlık oluşur ve fiyat yükselir.", "Denge fiyatı 40 TL'dir; piyasa temizlenir.", "Denge fiyatı 60 TL; 40 TL'de kıtlık oluşur ve fiyat düşer."], a: 1,
        why: "Qd = Qs olduğu fiyat 60 TL'dir. 40 TL'de Qd 60, Qs 20: 40 bilet kıtlık. Kıtlık fiyatı yukarı iter. Son şık kıtlığı doğru bulup fiyat yönünü ters söylediği için yanlıştır." },
      { q: "Kuraklık yüzünden domates arzı azalıyor. Talep sabit. Domates piyasasında P, Q ve tüketici rantı (CS) nasıl değişir?",
        opts: ["P artar, Q artar, CS artar", "P azalır, Q azalır, CS azalır", "P azalır, Q artar, CS artar", "P artar, Q azalır, CS azalır"], a: 3,
        why: "Arz sola kayınca denge fiyatı artar, denge miktarı azalır. Fiyat yükselip miktar düştüğü için CS azalır. Arz azalışında P ve Q zıt yönde, talep değişikliğinde aynı yönde hareket eder." },
      { q: "Aynı anda hem dondurma talebi hem dondurma arzı artıyor. Kesin olarak ne söylenebilir?",
        opts: ["Denge miktarı artar; fiyat belirsizdir.", "Denge fiyatı artar; miktar belirsizdir.", "Fiyat ve miktar ikisi de belirsizdir.", "Fiyat azalır, miktar artar."], a: 0,
        why: "Talep artışı da arz artışı da miktarı artırır; miktar kesin artar. Fiyatı talep artışı yükseltir, arz artışı düşürür: sonuç kaymaların büyüklüğüne bağlıdır. Fiyatın azalacağını söylemek arz kaymasını talepten büyük varsayar." },
      { q: "İki ayrı piyasada arz aynı miktarda azalıyor. X piyasasında talep inelastik, Y piyasasında talep elastiktir. Hangisi doğrudur?",
        opts: ["Y'de fiyat X'ten daha çok artar.", "İki piyasada da fiyat aynı kadar artar.", "X'te fiyat daha çok artar, miktar daha az azalır.", "X'te miktar Y'den daha çok azalır."], a: 2,
        why: "Talep inelastikse alıcı fiyat artışına rağmen vazgeçmez; fiyat çok artar, miktar az düşer. Elastik talepte (Y) tersi olur. A ve D şıkları bu ilişkiyi ters kurar." },
      { q: "Grafikte bilet fiyatı 80 TL'de sabitleniyor (1 birim = 10 TL ve 10 bilet). Ne olur?",
        fig: { type: "graph", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 12, ymax: 13, lines: [{ from: [0, 10], to: [10, 0], label: "D" }, { from: [0, 2], to: [10, 12], label: "S" }], hlines: [{ p: 8, label: "80 TL" }], xticks: [{ v: 2, label: "20" }, { v: 6, label: "60" }], yticks: [{ v: 6, label: "60" }, { v: 8, label: "80" }] },
        opts: ["40 bilet kıtlık; fiyat artar.", "60 bilet fazlalık; fiyat düşer.", "40 bilet fazlalık; fiyat artar.", "40 bilet fazlalık; fiyat düşer."], a: 3,
        why: "80 TL'de Qd 20, Qs 60: 40 bilet fazlalık. Satıcılar stokla karşılaşıp indirim yapar, fiyat düşer. “60 bilet” arz miktarının tamamını, fazlalıkla karıştırır; fazlalık Qs − Qd'dir." }
    ]
  };
})();
