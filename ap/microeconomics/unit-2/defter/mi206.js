/* Kitora not defteri · mi206 · 2.6 Piyasa Dengesi, Tüketici ve Üretici Rantı
   Kaynak: AP Micro CED, Topic 2.6 (MKT-4.A.1–5). Blok türleri: /ap/_kit/defter.js başı.
   Sayısal taban: D: P = 100 − Q, S: P = Q; denge (50 TL, 50 adet). Grafikte 1 birim = 10 TL ve 10 adet. */
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
  var TIK = [{ v: 5, label: "50" }, { v: 10, label: "100" }];

  return {
    slug: "mi206",
    amac: "Bu konu piyasa dengesini ve rantları anlatıyor: arz ile talep nerede buluşur, fiyat kaynakları nasıl yönlendirir? *Consumer surplus* ve *producer surplus* alanlarını çizip hesaplamayı ve dengenin neden verimli olduğunu öğreneceksin.",
    bolumler: [
      {
        baslik: "Piyasa dengesi: arz ve talebin buluştuğu nokta",
        kisa: "Denge fiyatında alıcıların istediği miktar, satıcıların sunduğu miktara eşittir.",
        bloklar: [
          graf({ baslik: "Denge: Qd = Qs", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 11, ymax: 11, xticks: TIK, yticks: TIK,
            ogeler: [
              { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [10, 0], etiket: "D" },
              { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [10, 10], etiket: "S" },
              { id: "E", tip: "nokta", renk: 3, x: 5, y: 5, etiket: "Denge", kilavuz: true }
            ],
            durumlar: [
              ["Kampüs konserinin bilet talebi: P = 100 − Q. Fiyat düştükçe talep edilen miktar artar.", ["D"]],
              ["Arz: P = Q. Fiyat arttıkça sunulan miktar artar.", ["D", "S"]],
              ["Eğriler kesişir: ==50 TL, 50 bilet==. Bu fiyatta alıcıların istediği miktar satıcıların sunduğuna eşittir; piyasa ==temizlenir== (*market clears*): kıtlık da fazlalık da yoktur.", ["D", "S", "E"]]
            ] }),
          { tip: "kavramlar", kartlar: [
              { ikon: "⚖️", terim: "Market equilibrium", tr: "piyasa dengesi", tanim: "Alıcıların istediği miktarın satıcıların sunduğu miktara eşit olduğu fiyat ve miktar. Rekabetçi piyasada fiyat bu noktaya yönelir.", ornek: "50 TL ve 50 bilet." },
              { ikon: "📡", terim: "Price signal", tr: "fiyat sinyali", tanim: "Denge fiyatı karar vericilere bilgi verir: alıcıya malın maliyetini, satıcıya malın değerini gösterir; kaynaklar buna göre yönlenir.", ornek: "Bilet fiyatı yükselince organizatörler daha çok konser düzenler." }
            ] },
          { tip: "not", metin: "Arz-talep modeli, fiyat ve miktarı neyin belirlediğini ve farklı piyasalarda ya da farklı zamanlarda neden farklı çıktığını anlamanın aracıdır: İstanbul ile Sivas'ta aynı konser biletinin farklı fiyatı, iki piyasada talep ve arzın farklı olmasından gelir." }
        ]
      },
      {
        baslik: "Tüketici rantı (*consumer surplus*)",
        kisa: "Alıcının ödemeye razı olduğu fiyat ile gerçekten ödediği fiyat arasındaki fark.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "💭", terim: "Willingness to pay", tr: "ödemeye razılık", tanim: "Bir alıcının bir mal için vermeye hazır olduğu en yüksek fiyat. Talep eğrisinin yüksekliği bunu gösterir.", ornek: "Ali bileti 90 TL'ye kadar ister." },
              { ikon: "🎁", terim: "Consumer surplus", tr: "tüketici rantı", tanim: "Ödemeye razı olunan fiyat eksi gerçekte ödenen fiyat. Alıcıların piyasadan net kazancıdır.", ornek: "Ali 90 TL'ye razı, 50 TL ödedi: 40 TL rant." }
            ] },
          { tip: "tablo", baslik: "Konser bileti: piyasa fiyatı 50 TL", head: ["Alıcı", "Ödemeye razı (TL)", "Alır mı?", "Rant (TL)"], rows: [
              ["Ali", "90", "Alır", "40"], ["Ece", "70", "Alır", "20"], ["Can", "50", "Alır (kayıtsız)", "0"], ["Deniz", "30", "Almaz", "—"], ["Elif", "10", "Almaz", "—"]
            ], not: "Toplam *consumer surplus* = 40 + 20 + 0 = 60 TL. Fiyat ne kadar düşerse rant o kadar büyür." }
        ]
      },
      {
        baslik: "Üretici rantı (*producer surplus*)",
        kisa: "Satıcının aldığı fiyat ile kabul edebileceği en düşük fiyat arasındaki fark.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🏷️", terim: "Minimum acceptable price", tr: "kabul edilebilir en düşük fiyat", tanim: "Satıcının bir birimi satmak için isteyeceği en düşük fiyat: o birimin marjinal maliyeti. Arz eğrisinin yüksekliği bunu gösterir.", ornek: "A satıcısı bileti 10 TL'ye kadar satar." },
              { ikon: "💼", terim: "Producer surplus", tr: "üretici rantı", tanim: "Gerçekte alınan fiyat eksi kabul edilebilir en düşük fiyat. Satıcıların piyasadan net kazancıdır.", ornek: "A, 50 TL aldı: 40 TL rant." }
            ] },
          { tip: "tablo", baslik: "Konser bileti: piyasa fiyatı 50 TL", head: ["Satıcı", "En az kabul (TL)", "Satar mı?", "Rant (TL)"], rows: [
              ["A", "10", "Satar", "40"], ["B", "30", "Satar", "20"], ["C", "50", "Satar (kayıtsız)", "0"], ["D", "70", "Satmaz", "—"], ["E", "90", "Satmaz", "—"]
            ], not: "Toplam *producer surplus* = 40 + 20 + 0 = 60 TL. Fiyat ne kadar yükselirse rant o kadar büyür." }
        ]
      },
      {
        baslik: "Rantları grafikte görmek ve hesaplamak",
        kisa: "CS fiyatın üstünde talebin altındaki, PS fiyatın altında arzın üstündeki alandır.",
        bloklar: [
          graf({ baslik: "Denge fiyatında iki üçgen", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 11, ymax: 11, xticks: TIK, yticks: TIK,
            ogeler: [
              { id: "cs", tip: "alan", renk: 0, noktalar: [[0, 10], [0, 5], [5, 5]] },
              { id: "ps", tip: "alan", renk: 1, noktalar: [[0, 0], [0, 5], [5, 5]] },
              { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [10, 0], etiket: "D" },
              { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [10, 10], etiket: "S" },
              { id: "E", tip: "nokta", renk: 3, x: 5, y: 5, etiket: "", kilavuz: true },
              { id: "tcs", tip: "yazi", x: 1.4, y: 6.6, metin: "CS" },
              { id: "tps", tip: "yazi", x: 1.4, y: 3.4, metin: "PS" },
              { id: "tt", tip: "yazi", x: 8.4, y: 5, metin: "TS = 2500 TL" }
            ],
            durumlar: [
              ["Denge: 50 TL ve 50 bilet.", ["D", "S", "E"]],
              ["==CS==: fiyatın üstünde, talep eğrisinin altında kalan üçgen. Alan = ½ × 50 × (100 − 50) = ==1250 TL==.", ["D", "S", "E", "cs", "tcs"]],
              ["==PS==: fiyatın altında, arz eğrisinin üstünde kalan üçgen. Alan = ½ × 50 × (50 − 0) = ==1250 TL==.", ["D", "S", "E", "cs", "tcs", "ps", "tps"]],
              ["Toplam ekonomik rant (*total economic surplus*) = CS + PS = 2500 TL. Piyasanın alıcılara ve satıcılara yarattığı toplam değer budur.", ["D", "S", "E", "cs", "tcs", "ps", "tps", "tt"]]
            ] }),
          { tip: "ornek", baslik: "Alanları hesapla", durum: "Talep P = 100 − Q, arz P = Q. Denge: 100 − Q = Q, yani Q = 50 ve P = 50.",
            adimlar: ["CS = ½ × taban × yükseklik = ½ × 50 × (100 − 50) = 1250 TL.", "PS = ½ × 50 × (50 − 0) = 1250 TL.", "Toplam rant = 1250 + 1250 = 2500 TL."],
            sonuc: "Alan = ½ × (denge miktarı) × (fiyat eksenindeki kesim noktası ile denge fiyatı arasındaki fark). Grafikte her birim 10 TL ve 10 bilet olduğundan 1 birim² = 100 TL." },
          { tip: "tuzak", metin: "CS ile harcamayı karıştırma.", yanlis: "Tüketici rantı, alıcıların bilete verdiği toplam paradır.", dogru: "Harcama = fiyat × miktar dikdörtgenidir (50 × 50 = 2500 TL). CS ise bu dikdörtgenin ==üstündeki== üçgendir: ödemeye razı olunanla ödenen arasındaki ==fark==." }
        ]
      },
      {
        baslik: "Denge neden verimli? Toplam rantı en büyük yapar",
        kisa: "Rekabetçi piyasada denge miktarı toplam ekonomik rantı en büyük yapar.",
        bloklar: [
          graf({ baslik: "Denge dışında rant kaybı", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 11, ymax: 11, xticks: TIK, yticks: TIK,
            ogeler: [
              { id: "ts", tip: "alan", renk: 0, noktalar: [[0, 10], [5, 5], [5, 5], [0, 0]] },
              { id: "dwl", tip: "alan", renk: 3, noktalar: [[3, 7], [5, 5], [3, 3]] },
              { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [10, 0], etiket: "D = MB" },
              { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [10, 10], etiket: "S = MC" },
              { id: "E", tip: "nokta", renk: 3, x: 5, y: 5, etiket: "", kilavuz: true },
              { id: "vq", tip: "cizgi", renk: 2, kesik: true, from: [3, 0], to: [3, 7], etiket: "Q = 30" },
              { id: "tw", tip: "yazi", x: 2, y: 5, metin: "TS" }
            ],
            durumlar: [
              ["Q = 50'de her birimin faydası maliyetini karşılıyor (D = MB ≥ S = MC). Toplam rant en yüksek: 2500 TL.", ["ts", "D", "S", "E", "tw"], { ts: { noktalar: [[0, 10], [5, 5], [5, 5], [0, 0]] } }],
              ["Miktar 30'da sınırlansa: toplam rant 2100 TL'ye düşer. Q = 30 ile 50 arasındaki birimlerin faydası maliyetinden büyük ama üretilmiyor: kayıp ==400 TL== (kırmızı üçgen).", ["ts", "D", "S", "E", "dwl", "vq", "tw"], { ts: { noktalar: [[0, 10], [3, 7], [3, 3], [0, 0]] }, dwl: { noktalar: [[3, 7], [5, 5], [3, 3]] }, vq: { from: [3, 0], to: [3, 7], etiket: "Q = 30" } }],
              ["Miktar 70'e çıksa: 50 ile 70 arasındaki her birimin maliyeti (S) faydasından (D) büyük; kayıp yine ==400 TL==. Fazla üretim de verimsiz.", ["ts", "D", "S", "E", "dwl", "vq", "tw"], { ts: { noktalar: [[0, 10], [5, 5], [5, 5], [0, 0]] }, dwl: { noktalar: [[5, 5], [7, 3], [7, 7]] }, vq: { from: [7, 0], to: [7, 7], etiket: "Q = 70" } }]
            ] }),
          { tip: "tuzak", metin: "Verimli ile adil kelimelerini karıştırma.", yanlis: "Denge herkese eşit pay verdiği için verimlidir.", dogru: "Verimlilik, ==toplam rantın en büyük olmasıdır==; rantın kime gittiğini (adalet) söylemez. Dışsallık gibi piyasa başarısızlıkları varsa denge de verimli olmaz." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Denge: Qd = Qs; fiyat bu noktada piyasayı temizler, ne kıtlık ne fazlalık kalır.",
              "Denge fiyatı karar vericilere bilgi verir ve kaynakların dağılımını yönlendirir.",
              "*Consumer surplus* = ödemeye razı olunan − ödenen; fiyatın üstünde, talebin altında kalan alan.",
              "*Producer surplus* = alınan fiyat − kabul edilebilir en düşük fiyat; fiyatın altında, arzın üstünde kalan alan.",
              "Doğrusal eğrilerde CS ve PS üçgendir: alan = ½ × taban × yükseklik.",
              "Toplam ekonomik rant = CS + PS.",
              "Rekabetçi piyasada, piyasa başarısızlığı yoksa denge toplam rantı en büyük yapar (D = MB, S = MC).",
              "Dengeden az ya da çok üretim rant kaybı (*deadweight loss*) yaratır."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Grafikte talep P = 100 − Q, arz P = Q ve her birim 10 TL ile 10 bileti gösteriyor. Dengede toplam ekonomik rantın hangi kısmı üretici rantıdır, kaç TL'dir?",
        fig: { type: "graph", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 11, ymax: 11, lines: [{ from: [0, 10], to: [10, 0], label: "D" }, { from: [0, 0], to: [10, 10], label: "S" }], points: [{ q: 5, p: 5, label: "E", guides: true }], xticks: [{ v: 5, label: "50" }, { v: 10, label: "100" }], yticks: [{ v: 5, label: "50" }, { v: 10, label: "100" }] },
        opts: ["1250 TL", "625 TL", "2500 TL", "5000 TL"], a: 0,
        why: "PS = ½ × 50 × (50 − 0) = 1250 TL. 2500 TL toplam rantın (CS + PS) tamamıdır; 625 yarıya bölünmüş yanlış bir alan, 5000 ise dikdörtgen gibi hesaplanmış alandır." },
      { q: "Tüketici rantı (*consumer surplus*) aşağıdakilerden hangisidir?",
        opts: ["Alıcıların bir mal için yaptığı toplam harcama", "Fiyat ile arz eğrisi arasındaki alan", "Alıcıların ödemeye razı oldukları tutar ile gerçekte ödedikleri tutar arasındaki fark", "Satıcıların elde ettiği kâr"], a: 2,
        why: "CS, ödemeye razılık eksi gerçek fiyattır; grafikte fiyatın üstü, talebin altıdır. Harcama fiyat × miktar dikdörtgenidir (A); fiyat ile arz arasındaki alan üretici rantıdır (B)." },
      { q: "Tabloda dört alıcının bir bilet için ödemeye razı olduğu fiyat var. Piyasa fiyatı 40 TL ise toplam tüketici rantı kaç TL'dir? (Fiyata eşit razılık gösteren alıcı alır, rantı 0'dır.)",
        fig: { type: "table", head: ["Alıcı", "Ödemeye razı (TL)"], rows: [["Ali", 80], ["Ece", 60], ["Can", 40], ["Deniz", 20]], caption: "Bilet için ödemeye razılık" },
        opts: ["20", "40", "140", "60"], a: 3,
        why: "Ali 80 − 40 = 40, Ece 60 − 40 = 20, Can 40 − 40 = 0; Deniz almaz. Toplam 60 TL. 140, ödemeye razı olunan tutarların (80 + 60) toplamıdır; fiyat çıkarılmadığı için rant değildir. 40 ve 20 ise tek bir alıcının rantıdır." },
      { q: "Mükemmel rekabetçi bir piyasada, piyasa başarısızlığı yokken denge için hangisi doğrudur?",
        opts: ["Denge fiyatında CS her zaman PS'ye eşittir.", "Denge miktarı toplam ekonomik rantı en büyük yapar.", "Denge, rantın alıcılara ve satıcılara adil dağıldığını gösterir.", "Denge miktarının altında üretim toplam rantı artırır."], a: 1,
        why: "Denge, D = MB ile S = MC'nin eşitlendiği noktadır ve toplam rantı en yükseğe çıkarır. CS ile PS eşit olmak zorunda değildir (eğimlere bağlıdır); verimlilik de adalet demek değildir." },
      { q: "Grafikte (1 birim = 10 TL ve 10 bilet) üretim denge miktarı 50 yerine 30 ile sınırlanıyor. Toplam ekonomik rant kaç TL azalır?",
        fig: { type: "graph", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 11, ymax: 11, lines: [{ from: [0, 10], to: [10, 0], label: "D" }, { from: [0, 0], to: [10, 10], label: "S" }], points: [{ q: 3, p: 7, label: "a", guides: true }, { q: 3, p: 3, label: "b", guides: true }, { q: 5, p: 5, label: "E" }], xticks: [{ v: 3, label: "30" }, { v: 5, label: "50" }], yticks: [{ v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }] },
        opts: ["200", "800", "400", "1250"], a: 2,
        why: "Kayıp, a–b–E üçgenidir: taban 50 − 30 = 20, yükseklik 70 − 30 = 40; ½ × 20 × 40 = 400 TL. 800, ½ çarpanı unutularak bulunan dikdörtgen alandır." }
    ]
  };
})();
