/* Kitpath not defteri · mi205 · 2.5 Diğer Esneklikler
   Kaynak: AP Micro CED, Topic 2.5 (MKT-3.E.9–11). Blok türleri: /ap/_kit/defter.js başı. */
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
    slug: "mi205",
    amac: "Bu konu fiyat dışındaki esneklikleri anlatıyor: *income elasticity* (gelir esnekliği) ve *cross-price elasticity* (çapraz fiyat esnekliği). Formülleri, işaretlerin anlamını ve bir malın normal, *inferior*, ikame ya da tamamlayıcı olduğunu esneklikten nasıl anlayacağını öğreneceksin.",
    bolumler: [
      {
        baslik: "Esneklik her etkene uygulanır",
        kisa: "Esneklik, talebi ya da arzı etkileyen her değişkenin etkisini ölçer.",
        bloklar: [
          { tip: "tablo", baslik: "Üç esneklik bir arada", head: ["Esneklik", "Formül", "İşaret ne söyler?"], rows: [
              ["Fiyat (E_d)", "%ΔQd ÷ %ΔP (malın kendi fiyatı)", "Negatiftir; mutlak değer alınır, sınır 1"],
              ["Gelir (E_I)", "%ΔQd ÷ %Δgelir", "+ normal mal, − *inferior* mal"],
              ["Çapraz fiyat (E_x)", "%ΔQd (A malı) ÷ %ΔP (B malı)", "+ ikame, − tamamlayıcı, 0 ilgisiz"]
            ] },
          { tip: "not", metin: "Hepsinde pay, talep edilen miktardaki yüzde değişimdir; payda, miktarı etkileyen değişkenin yüzde değişimidir. Fark: fiyat esnekliğinde işaret atılır, gelir ve çapraz esneklikte ==işaret bilgidir==." }
        ]
      },
      {
        baslik: "Gelir esnekliği: normal mi, *inferior* mı?",
        kisa: "Gelir esnekliğinin işareti, malın normal mi inferior mı olduğunu söyler.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "E_I", alt: "gelir esnekliği" }, "=",
              { t: "%ΔQd", alt: "talep edilen miktardaki yüzde değişim" }, "÷",
              { t: "%Δ gelir", alt: "gelirdeki yüzde değişim" }
            ], aciklama: "Fiyat esnekliğinden farklı olarak işareti atma: pozitif mi negatif mi, asıl bilgi o." },
          { tip: "kavramlar", kartlar: [
              { ikon: "🍽️", terim: "Normal good (luxury)", tr: "normal mal (lüks)", tanim: "E_I > 1. Gelir %1 artınca talep %1'den fazla artar.", ornek: "Restoranda yemek, yurt dışı tatili." },
              { ikon: "🍞", terim: "Normal good (necessity)", tr: "normal mal (zorunlu)", tanim: "0 < E_I < 1. Gelir arttıkça talep artar ama gelirden daha yavaş.", ornek: "Ekmek, günlük ulaşım." },
              { ikon: "🍜", terim: "Inferior good", tr: "düşük mal", tanim: "E_I < 0. Gelir artınca talep azalır.", ornek: "Hazır noodle, ikinci el kıyafet." }
            ] },
          { tip: "ornek", baslik: "Burs gelince noodle azaldı", durum: "Bir öğrencinin aylık geliri 800 TL'den 1200 TL'ye çıkıyor; haftalık hazır noodle alımı 12 paketten 8'e düşüyor.",
            adimlar: ["%Δ gelir = (1200 − 800) ÷ ((800 + 1200) / 2) = 400 ÷ 1000 = %40.", "%ΔQ = (8 − 12) ÷ ((12 + 8) / 2) = −4 ÷ 10 = −%40.", "E_I = −40 ÷ 40 = −1."],
            sonuc: "E_I < 0: hazır noodle bu öğrenci için ==*inferior* mal==. Gelir arttı, talep azaldı." }
        ]
      },
      {
        baslik: "Gelir artınca talep eğrisi nereye kayar?",
        kisa: "Gelir artınca normal malın talebi sağa, inferior malın talebi sola kayar.",
        bloklar: [
          graf({ baslik: "Aynı gelir artışı, üç mal", xlabel: "Miktar", ylabel: "Fiyat", xmax: 12, ymax: 10, xticks: [], yticks: [],
            ogeler: [
              { id: "D", tip: "cizgi", renk: 0, from: [2, 8], to: [8, 2], etiket: "D" },
              { id: "Dk", tip: "cizgi", renk: 0, kesik: true, from: [2, 8], to: [8, 2], etiket: "D" },
              { id: "D1", tip: "cizgi", renk: 3, from: [3, 8], to: [9, 2], etiket: "D₁" },
              { id: "D3", tip: "cizgi", renk: 2, from: [5, 8], to: [11, 2], etiket: "D₃" },
              { id: "D2", tip: "cizgi", renk: 1, from: [0, 8], to: [6, 2], etiket: "D₂" },
              { id: "ok1", tip: "ok", renk: 3, from: [3.15, 7], to: [3.85, 7] },
              { id: "ok3", tip: "ok", renk: 2, from: [7.2, 3], to: [9.8, 3] },
              { id: "ok2", tip: "ok", renk: 1, from: [2.85, 7], to: [1.15, 7] }
            ],
            durumlar: [
              ["Başlangıç talebi D. Şimdi tüketicilerin geliri artıyor.", ["D"]],
              ["Zorunlu normal mal (0 < E_I < 1): talep D₁'e, ==sağa== kayar ama az.", ["Dk", "D1", "ok1"]],
              ["Lüks mal (E_I > 1): aynı gelir artışında talep D₃'e kayar; kayma yüzde olarak ==daha büyüktür==.", ["Dk", "D1", "D3", "ok1", "ok3"]],
              ["*Inferior* mal (E_I < 0): talep D₂'ye, ==sola== kayar.", ["Dk", "D2", "ok2"]]
            ] }),
          { tip: "ikili", sol: { ikon: "📈", baslik: "*Normal good*", maddeler: ["E_I > 0", "Gelir artınca talep sağa"] },
            sag: { ikon: "📉", baslik: "*Inferior good*", maddeler: ["E_I < 0", "Gelir artınca talep sola"] },
            oyun: [
              { metin: "E_I = +0,5 olan ekmek.", cevap: "sol", neden: "Pozitif: normal mal (zorunlu)." },
              { metin: "Gelir %10 artınca talebi %5 azalan otogar yemeği.", cevap: "sag", neden: "E_I = −0,5: *inferior*." },
              { metin: "E_I = +2 olan yurt dışı tatili.", cevap: "sol", neden: "Pozitif ve 1'den büyük: normal mal (lüks)." },
              { metin: "E_I = −0,8 olan ikinci el kıyafet.", cevap: "sag", neden: "Negatif: *inferior*." }
            ] }
        ]
      },
      {
        baslik: "Çapraz fiyat esnekliği",
        kisa: "Çapraz esneklik pozitifse ikame, negatifse tamamlayıcı, sıfıra yakınsa ilgisizdir.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "E_x", alt: "çapraz fiyat esnekliği" }, "=",
              { t: "%ΔQd (A malı)", alt: "A malının talep edilen miktarı" }, "÷",
              { t: "%ΔP (B malı)", alt: "ÖTEKİ malın fiyatı" }
            ], aciklama: "Payda, A'nın değil B'nin fiyatıdır. Bu yüzden ‘çapraz’." },
          { tip: "ornek", baslik: "İkame mi, tamamlayıcı mı?", durum: "(a) Dolmuş ücreti 20 TL'den 30 TL'ye çıkınca otobüs bileti talebi 40'tan 60'a çıkıyor. (b) Telefon fiyatı 10 000 TL'den 15 000 TL'ye çıkınca kılıf talebi 50'den 30'a düşüyor.",
            adimlar: ["(a) %ΔP (dolmuş) = 10 ÷ 25 = %40; %ΔQ (otobüs) = 20 ÷ 50 = %40; E_x = +1.", "(b) %ΔP (telefon) = 5000 ÷ 12 500 = %40; %ΔQ (kılıf) = −20 ÷ 40 = −%50; E_x = −1,25.", "İşaretlere bak: (a) pozitif, (b) negatif."],
            sonuc: "(a) ==İkame==: biri pahalanınca ötekine geçilir. (b) ==Tamamlayıcı==: biri pahalanınca ikisi birlikte alınan mal da az alınır." },
          { tip: "tuzak", metin: "Çapraz esneklikte işaret atılmaz.", yanlis: "Esnekliklerde mutlak değer alınır; −2 ile +2 aynıdır.", dogru: "Mutlak değeri yalnız kendi fiyat esnekliğinde alırız. Çapraz esneklikte ==+2 güçlü ikame==, ==−2 güçlü tamamlayıcı==; sıfıra yakın değer ilgisiz mallardır." }
        ]
      },
      {
        baslik: "Çapraz esneklik grafikte",
        kisa: "İkamenin fiyatı artınca talep sağa, tamamlayıcının fiyatı artınca sola kayar.",
        bloklar: [
          graf({ baslik: "Başka bir malın fiyatı değişince talep kayar", xlabel: "Miktar", ylabel: "Fiyat", xmax: 11, ymax: 10, xticks: [], yticks: [],
            ogeler: [
              { id: "D", tip: "cizgi", renk: 0, from: [2, 8], to: [8, 2], etiket: "D" },
              { id: "Dk", tip: "cizgi", renk: 0, kesik: true, from: [2, 8], to: [8, 2] },
              { id: "D1", tip: "cizgi", renk: 3, from: [4, 8], to: [10, 2], etiket: "D₁" },
              { id: "D2", tip: "cizgi", renk: 2, from: [0, 8], to: [6, 2], etiket: "D₂" },
              { id: "okR", tip: "ok", renk: 3, from: [3.3, 7], to: [4.7, 7] },
              { id: "okL", tip: "ok", renk: 2, from: [6.7, 3], to: [5.3, 3] }
            ],
            durumlar: [
              ["Otobüs bileti talebi D. Başka bir malın fiyatı değişirse ne olur?", ["D"]],
              ["Dolmuş (ikame) zamlandı: otobüs talebi ==sağa== kayar. E_x > 0.", ["Dk", "D1", "okR"]],
              ["Telefon (tamamlayıcı) zamlandı: kılıf talebi ==sola== kayar. E_x < 0.", ["Dk", "D2", "okL"]],
              ["Ekmek fiyatı değişti, otobüs bileti etkilenmedi: ilgisiz mallar, E_x ≈ 0; eğri yerinde kalır.", ["D"]]
            ] }),
          { tip: "ikili", sol: { ikon: "🔄", baslik: "*Substitutes*", maddeler: ["E_x > 0", "Biri pahalanınca ötekinin talebi artar"] },
            sag: { ikon: "🤝", baslik: "*Complements*", maddeler: ["E_x < 0", "Biri pahalanınca ötekinin talebi düşer"] },
            oyun: [
              { metin: "Kahve zamlandı, çaya talep arttı.", cevap: "sol", neden: "Pozitif işaret: ikame." },
              { metin: "Yazıcı pahalandı, kartuş talebi azaldı.", cevap: "sag", neden: "Negatif işaret: tamamlayıcı." },
              { metin: "Gazoz zamlandı, ayran talebi arttı.", cevap: "sol", neden: "Birbirinin yerine geçiyorlar: ikame." },
              { metin: "Oyun konsolu zamlandı, oyun diski talebi düştü.", cevap: "sag", neden: "Birlikte kullanılıyorlar: tamamlayıcı." }
            ] }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Esneklik, talebi ya da arzı etkileyen her değişken için hesaplanabilir; pay hep miktardaki yüzde değişimdir.",
              "Gelir esnekliği E_I = %ΔQd ÷ %Δgelir. E_I > 0 normal mal, E_I < 0 *inferior* mal.",
              "Normal malda E_I > 1 lüks, 0 < E_I < 1 zorunlu mal demektir.",
              "Gelir artınca normal malın talebi sağa, inferior malın talebi sola kayar.",
              "Çapraz esneklik E_x = %ΔQd (A) ÷ %ΔP (B). E_x > 0 ikame, E_x < 0 tamamlayıcı, E_x ≈ 0 ilgisiz.",
              "İkamenin fiyatı artınca bu malın talebi sağa, tamamlayıcının fiyatı artınca sola kayar.",
              "Fiyat esnekliğinde mutlak değer alınır; gelir ve çapraz esneklikte işaret anlamlıdır.",
              "Hesapta yüzde değişim için *midpoint* kullanılır."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Bir öğrencinin geliri 800 TL'den 1200 TL'ye çıkıyor; aylık aldığı kitap sayısı 6'dan 10'a çıkıyor. Orta nokta yöntemiyle kitap bu öğrenci için nasıl bir maldır?",
        opts: ["*Inferior good*", "Normal mal, zorunlu (0 < E_I < 1)", "Normal mal, lüks (E_I > 1)", "İkame mal"], a: 2,
        why: "%Δgelir = 400 ÷ 1000 = %40; %ΔQ = 4 ÷ 8 = %50; E_I = 1,25 > 1: lüks, yani normal. *Inferior* şıkkı negatif bir E_I gerektirir; ikame ise çapraz esneklikle ilgilidir, gelirle değil." },
      { q: "Çay fiyatı %20 artınca kahve talebi %10 artıyor. Çay ile kahve için hangisi doğrudur?",
        opts: ["Tamamlayıcıdırlar.", "İkamedirler; E_x = +0,5.", "İkamedirler; E_x = −2.", "İlgisiz mallardır."], a: 1,
        why: "E_x = %10 ÷ %20 = +0,5. Pozitif işaret ikame demektir. −2 değeri payı ve paydayı ters bölerek ve işareti de yanlış koyarak çıkar; tamamlayıcı mallarda işaret negatif olurdu." },
      { q: "Tabloya göre pizza fiyatı artarken kola talebi düşüyor. Orta nokta yöntemiyle pizza ile kola arasındaki çapraz fiyat esnekliği ve ilişki hangisidir?",
        fig: { type: "table", head: ["", "Önce", "Sonra"], rows: [["Pizza fiyatı (TL)", 40, 60], ["Kola talebi (adet)", 100, 60]], caption: "Pizza ve kola" },
        opts: ["−1,25; ikame", "+1,25; tamamlayıcı", "−1,25; tamamlayıcı", "+0,8; ikame"], a: 2,
        why: "%ΔP (pizza) = 20 ÷ 50 = %40; %ΔQ (kola) = −40 ÷ 80 = −%50; E_x = −1,25. Negatif işaret tamamlayıcı demektir. İşareti doğru bulup ilişkiyi ikame diye yorumlamak en sık yapılan hatadır." },
      { q: "Bir malın gelir esnekliği −0,6'dır. Tüketicilerin geliri artarsa bu malın piyasasında ne olur?",
        opts: ["Talep sağa kayar; mal normaldir.", "Talep kaymaz; mal zorunludur.", "Talep sağa kayar; mal lükstür.", "Talep sola kayar; mal *inferior*'dır."], a: 3,
        why: "Negatif gelir esnekliği *inferior* mal demektir: gelir artınca talep azalır, eğri sola kayar. Zorunlu mal 0 ile 1 arasında bir değer, lüks mal ise 1'den büyük bir değer gerektirir." },
      { q: "Grafikte telefon kılıfı talebi D'den D₁'e kayıyor. Hangisi buna yol açmış olabilir?",
        fig: { type: "graph", xlabel: "Miktar", ylabel: "Fiyat", xmax: 11, ymax: 10, lines: [{ from: [4, 8], to: [10, 2], label: "D", dash: true }, { from: [2, 8], to: [8, 2], label: "D₁" }] },
        opts: ["Telefon fiyatı arttı; çapraz esneklik negatiftir.", "Telefon fiyatı düştü; çapraz esneklik negatiftir.", "Telefon fiyatı arttı; çapraz esneklik pozitiftir.", "Kılıfın kendi fiyatı arttı."], a: 0,
        why: "Talep sola kaymıştır. Telefon ve kılıf tamamlayıcıdır (E_x < 0): telefon pahalanınca kılıf talebi düşer. Telefonun ucuzlaması talebi sağa kaydırırdı; kılıfın kendi fiyatı ise eğriyi kaydırmaz, eğri üzerinde hareket ettirir." }
    ]
  };
})();
