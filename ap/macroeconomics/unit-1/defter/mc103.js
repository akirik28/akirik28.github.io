/* Kitora not defteri · mc103 · 1.2 PPC'nin Şekli ve Kayması
   Kaynak: ap-videolar/src/episodes/mc103 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "mc103",
  ozet: "PPC'nin şekli maliyetin nasıl değiştiğini, kayması ise bir ülkenin sınırlarının nasıl büyüdüğünü (ya da küçüldüğünü) gösterir. Bu defterde dışa bükük eğri ile düz çizgi farkını, *law of increasing opportunity cost*'u, eğriyi kaydıran etkenleri, kaydırmayan tuzakları (işsizlik ve talep) ve *capital goods*'un geleceğe yatırım olduğunu göreceksin.",
  bolumler: [
    {
      baslik: "Kiraz ağacı: neden her sepet daha pahalı?",
      bloklar: [
        { tip: "hikaye", ikon: "🍒", baslik: "Babaannenin bahçesi",
          metin: "Yaz tatili. Bir saatin var: ya telefonda oyun oynayacaksın ya kiraz toplayacaksın. İlk sepet çocuk oyuncağı: alt dallar elinin altında, beş dakikada dolar. Son sepet kâbus: merdiven, en tepedeki dal, kan ter. Neden her sepet bir öncekinden pahalıya patlıyor? Ve bir ülke kendi sınırlarını nasıl genişletir? Bugün ikisini de çözüyoruz." },
        { tip: "sayilar", ogeler: [
            { deger: 60, sonek: " dk", etiket: "elindeki toplam süre" },
            { deger: 5, sonek: " dk", etiket: "ilk sepetin süresi (alt dallar)" },
            { deger: 25, sonek: " dk", etiket: "son sepetin süresi (tepedeki dal)" }
          ] },
        { tip: "not", metin: "Önceki bölümde *PPC*'nin, bütün kaynaklar kullanılınca üretebileceğin kombinasyonları gösterdiğini gördün. Şimdi eğrinin **şekline** ve **yerine** bakacağız." }
      ]
    },
    {
      baslik: "*Law of increasing opportunity cost*",
      bloklar: [
        { tip: "tablo", baslik: "Kiraz sepeti ve oyun bölümü", head: ["Sepet kiraz", "0", "1", "2", "3", "4"], rows: [
            ["Oyun bölümü", "15", "14", "12", "8", "0"],
            ["O sepetin *opportunity cost*'u (bölüm)", "—", "1", "2", "4", "8"]
          ], vurgu: 1, not: "Farklar: 15−14 = 1, 14−12 = 2, 12−8 = 4, 8−0 = 8. Her yeni sepet bir öncekinden daha pahalı." },
        { tip: "grafik", baslik: "Kiraz–oyun PPC'si", xlabel: "Kiraz (sepet)", ylabel: "Oyun (bölüm)", xmax: 9, ymax: 10,
          xticks: [{ v: 2, label: "1" }, { v: 4, label: "2" }, { v: 6, label: "3" }, { v: 8, label: "4" }],
          yticks: [{ v: 4.8, label: "8" }, { v: 7.2, label: "12" }, { v: 8.4, label: "14" }, { v: 9, label: "15" }],
          ogeler: [
            { id: "eg", tip: "egri", renk: 0, noktalar: [[0, 9], [2, 8.4], [4, 7.2], [6, 4.8], [8, 0]], etiket: "PPC", gizli: true },
            { id: "A", tip: "nokta", renk: 1, x: 0, y: 9, etiket: "15 bölüm", gizli: true },
            { id: "B", tip: "nokta", renk: 1, x: 2, y: 8.4, etiket: "14", gizli: true },
            { id: "C", tip: "nokta", renk: 1, x: 4, y: 7.2, etiket: "12", gizli: true },
            { id: "D", tip: "nokta", renk: 1, x: 6, y: 4.8, etiket: "8", gizli: true },
            { id: "E", tip: "nokta", renk: 1, x: 8, y: 0, etiket: "0", gizli: true },
            { id: "d1", tip: "ok", renk: 2, from: [1.2, 9], to: [1.2, 8.4], gizli: true },
            { id: "d2", tip: "ok", renk: 2, from: [3.2, 8.4], to: [3.2, 7.2], gizli: true },
            { id: "d3", tip: "ok", renk: 2, from: [5.2, 7.2], to: [5.2, 4.8], gizli: true },
            { id: "d4", tip: "ok", renk: 2, from: [7.2, 4.8], to: [7.2, 0.2], gizli: true },
            { id: "t1", tip: "yazi", x: 1.2, y: 9.5, metin: "−1", gizli: true },
            { id: "t2", tip: "yazi", x: 3.2, y: 8.8, metin: "−2", gizli: true },
            { id: "t3", tip: "yazi", x: 5.2, y: 7.7, metin: "−4", gizli: true },
            { id: "t4", tip: "yazi", x: 7.2, y: 5.3, metin: "−8", gizli: true }
          ],
          durumlar: [
            { metin: "Hiç kiraz toplamazsan oyunda **15 bölüm** geçersin.", goster: ["A"] },
            { metin: "İlk sepet sana yalnızca **1 bölüme** mal olur.", goster: ["B", "d1", "t1"] },
            { metin: "İkinci sepet **2 bölüm**, üçüncü sepet **4 bölüm** …", goster: ["C", "d2", "t2", "D", "d3", "t3"] },
            { metin: "… dördüncü sepet tam **8 bölüm**. Her yeni sepetin *opportunity cost*'u büyüyor.", goster: ["E", "d4", "t4"] },
            { metin: "Noktaları birleştirince eğri dışa doğru şişer; buna ==*bowed out*== denir. Kural: ==*law of increasing opportunity cost*==.", goster: ["eg"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Law of increasing opportunity cost", tr: "artan fırsat maliyeti yasası", tanim: "Bir malın üretimi arttıkça her ek birimin fırsat maliyeti artar. PPC bu yüzden dışa bükük çizilir.", ornek: "Kirazda 1., 2., 3., 4. sepet sırayla 1, 2, 4, 8 oyun bölümüne mal oluyor." },
            { ikon: "🌙", terim: "Bowed out", tr: "dışa bükük", tanim: "Orijinden dışa doğru şişmiş PPC şekli. Kitaplarda *concave to the origin* diye de geçer.", ornek: "Kiraz–oyun eğrisi." }
          ] },
        { tip: "not", metin: "Artış **iki yönde de** geçerli: 4 sepetten geri dönerken ilk 8 bölüm 1 sepete (bölüm başına 1/8 sepet), sonra 4 bölüm 1 sepete (1/4), 2 bölüm 1 sepete (1/2), son 1 bölüm 1 sepete (1) mal olur. Yani bükük eğride ==iki mal için de== ek birim giderek pahalanır." }
      ]
    },
    {
      baslik: "Neden bükük? Kaynaklar tam uyarlanamaz",
      bloklar: [
        { tip: "not", metin: "Cevap: kaynaklar her mala **aynı ölçüde uymaz**. Türkiye'nin bütün tarlalarında pamuk olduğunu düşün ve çay istediğini varsay." },
        { tip: "grafik", baslik: "Çay–pamuk: önce uygun toprak, sonra uygunsuz", xlabel: "Çay", ylabel: "Pamuk", xmax: 9, ymax: 9,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "ppc", tip: "ppc", renk: 0, qmax: 8, pmax: 8, k: 2, etiket: "PPC" },
            { id: "m", tip: "nokta", renk: 1, x: 0, y: 8, etiket: "hepsi pamuk", gizli: true },
            { id: "tr", tip: "yazi", x: 4.6, y: 8.2, metin: "Rize: +4 çay, yalnızca −1 pamuk", gizli: true },
            { id: "tc", tip: "yazi", x: 6.8, y: 5.4, metin: "Çukurova: +1 çay, −4 pamuk", gizli: true }
          ],
          durumlar: [
            { metin: "Önce her yer pamuk: 8 birim pamuk, hiç çay yok.", goster: ["m"] },
            { metin: "Çay istiyorsun; önce Rize'nin yağmurlu yamaçlarını çaya çevirirsin. Oradan zaten az pamuk çıkıyordu: çok çay kazanırsın, **az pamuk** kaybedersin (yaklaşık +4 çay, −1 pamuk).", set: { m: { x: 4, y: 6.93, etiket: "Rize bitti" } }, goster: ["tr"] },
            { metin: "Çay arttıkça Çukurova'nın sıcak ovalarına sıra gelir: pamuğun cenneti, çayın cehennemi.", set: { m: { x: 7, y: 3.87, etiket: "Çukurova'ya girdik" } } },
            { metin: "Son birim çay için bile **tonlarca pamuk** gider (yaklaşık +1 çay, −4 pamuk).", set: { m: { x: 8, y: 0, etiket: "hepsi çay" } }, goster: ["tc"] }
          ] },
        { tip: "ikili", sol: { ikon: "📈", baslik: "Dışa bükük PPC", maddeler: ["*Increasing opportunity cost*", "Kaynaklar *not perfectly adaptable*: iki mala eşit uygun değil", "Örnek: çay–pamuk"] },
          sag: { ikon: "➖", baslik: "Düz PPC", maddeler: ["*Constant opportunity cost*", "Kaynaklar iki mala eşit uygun", "Örnek: simit–poğaça"] },
          oyun: [
            { metin: "Her ek birim bir öncekinden daha pahalı.", cevap: "sol", neden: "Artan fırsat maliyeti: dışa bükük." },
            { metin: "Her poğaça tepsisi hep 2 tepsi simide mal oluyor.", cevap: "sag", neden: "Sabit maliyet: düz çizgi." },
            { metin: "Kaynakların bir kısmı yalnızca bir mal için uygun.", cevap: "sol", neden: "Tam uyarlanabilir değil: bükük eğri." },
            { metin: "Aynı usta ve aynı fırın iki malı da eşit iyi üretiyor.", cevap: "sag", neden: "Kaynaklar eşit uygun: düz çizgi." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Not perfectly adaptable", tr: "tam uyarlanabilir değil", tanim: "Kaynakların bir maldan ötekine geçerken aynı verimle çalışmaması. Artan fırsat maliyetinin nedeni budur; o mala en uygun kaynaklar önce kullanılır.", ornek: "Rize çaya uygun, Çukurova pamuğa." }
          ] },
        { tip: "tuzak", baslik: "Kitap dili", metin: "Sınavda *concave to the origin* görürsen bunun dışa bükük (*bowed out*) eğri olduğunu bil.", yanlis: "\"Concave\" ya da \"convex\" kelimesine bakarak şekli karıştırmak.", dogru: "Kelimeye değil şekle bak: orijinden dışa şişmiş eğri = artan fırsat maliyeti." }
      ]
    },
    {
      baslik: "Düz çizgi: sabit fırsat maliyeti",
      bloklar: [
        { tip: "not", metin: "Her zaman böyle değil. Bir fırında simit de poğaça da aynı ustanın elinden, aynı fırından çıkar. Bir sabahta ya 10 tepsi simit ya 5 tepsi poğaça yapılabilir." },
        { tip: "tablo", baslik: "Simit–poğaça", head: ["Poğaça tepsisi", "0", "1", "2", "3", "4", "5"], rows: [["Simit tepsisi", "10", "8", "6", "4", "2", "0"]], not: "Her adımda fark aynı: 2 tepsi simit. Her poğaça tepsisi = 10 ÷ 5 = 2 tepsi simit. Ters yönde 1 tepsi simit = ½ tepsi poğaça." },
        { tip: "grafik", baslik: "Düz PPC: her adım eşit", xlabel: "Poğaça (tepsi)", ylabel: "Simit (tepsi)", xmax: 6, ymax: 11,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "p0", tip: "nokta", renk: 1, x: 0, y: 10, gizli: true },
            { id: "p1", tip: "nokta", renk: 1, x: 1, y: 8, gizli: true },
            { id: "p2", tip: "nokta", renk: 1, x: 2, y: 6, gizli: true },
            { id: "p3", tip: "nokta", renk: 1, x: 3, y: 4, gizli: true },
            { id: "p4", tip: "nokta", renk: 1, x: 4, y: 2, gizli: true },
            { id: "p5", tip: "nokta", renk: 1, x: 5, y: 0, gizli: true },
            { id: "a1", tip: "ok", renk: 2, from: [0.55, 10], to: [0.55, 8], gizli: true },
            { id: "a2", tip: "ok", renk: 2, from: [1.55, 8], to: [1.55, 6], gizli: true },
            { id: "a3", tip: "ok", renk: 2, from: [2.55, 6], to: [2.55, 4], gizli: true },
            { id: "a4", tip: "ok", renk: 2, from: [3.55, 4], to: [3.55, 2], gizli: true },
            { id: "a5", tip: "ok", renk: 2, from: [4.55, 2], to: [4.55, 0.1], gizli: true },
            { id: "tx", tip: "yazi", x: 4.6, y: 8.5, metin: "her adım: −2 simit", gizli: true },
            { id: "line", tip: "cizgi", renk: 0, from: [0, 10], to: [5, 0], etiket: "PPC", gizli: true }
          ],
          durumlar: [
            { metin: "Altı kombinasyon: 0'dan 5 tepsi poğaçaya kadar.", goster: ["p0", "p1", "p2", "p3", "p4", "p5"] },
            { metin: "Her ek poğaça tepsisinde simit **aynı miktarda** (2 tepsi) azalıyor.", goster: ["a1", "a2", "a3", "a4", "a5", "tx"] },
            { metin: "Noktalar **düz bir çizgi** oluşturur: ==*constant opportunity cost*== (sabit fırsat maliyeti).", goster: ["line"] }
          ] },
        { tip: "formul", parcalar: [
            { t: "Düz çizgi", alt: "eğim sabit" }, "=",
            { t: "Sabit maliyet", alt: "kaynaklar eşit uygun" },
            { t: "Bükük eğri", alt: "eğim artıyor" }, "=",
            { t: "Artan maliyet", alt: "kaynaklar tam uygun değil" }
          ], aciklama: "Kural basit: düz çizgi sabit maliyet, dışa bükük eğri artan maliyet." },
        { tip: "kavramlar", kartlar: [
            { ikon: "➖", terim: "Constant opportunity cost", tr: "sabit fırsat maliyeti", tanim: "Her ek birimin fırsat maliyetinin aynı kalması. Kaynaklar iki mala eşit uygun olduğunda görülür; PPC düz çizgidir.", ornek: "Her poğaça tepsisi hep 2 tepsi simit." }
          ] }
      ]
    },
    {
      baslik: "Eğriyi dışa kaydıran etkenler",
      bloklar: [
        { tip: "not", metin: "*PPC*, kaynaklar ve teknoloji **sabitken** çizilir. Bunlar değişirse eğri kayar." },
        { tip: "harita", merkez: "Eğriyi dışa kaydırır", dallar: [
            { baslik: "1 · Kaynak miktarı", alt: "Daha çok işçi, fabrika ve makine (*physical capital*)" },
            { baslik: "2 · Kaynak kalitesi", alt: "Eğitimli işçi (*human capital*): daha çok değil, daha iyi işçi" },
            { baslik: "3 · Teknoloji", alt: "Aynı kaynakla daha çok üretim" },
            { baslik: "Ticaret", alt: "Tüketimi büyütür, üretimi değil (sonra göreceğiz)" }
          ] },
        { tip: "grafik", baslik: "Dışa kayma = *economic growth*", xlabel: "Çay", ylabel: "Pamuk", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "p1", tip: "ppc", renk: 0, qmax: 6, pmax: 6, k: 2, etiket: "PPC₁" },
            { id: "p1k", tip: "ppc", renk: 0, qmax: 6, pmax: 6, k: 2, kesik: true, gizli: true },
            { id: "p2", tip: "ppc", renk: 1, qmax: 8, pmax: 8, k: 2, etiket: "PPC₂", gizli: true },
            { id: "A", tip: "nokta", renk: 1, x: 3.6, y: 4.8, etiket: "A", gizli: false },
            { id: "Zr", tip: "nokta", renk: 3, x: 4.8, y: 6.4, etiket: "Z · ulaşılamaz", gizli: true },
            { id: "Zg", tip: "nokta", renk: 1, x: 4.8, y: 6.4, etiket: "Z", gizli: true },
            { id: "o1", tip: "ok", renk: 1, from: [4.3, 4.3], to: [5.6, 5.6], gizli: true },
            { id: "ot", tip: "yazi", x: 8.7, y: 8.6, metin: "tüketim (ticaretle)", gizli: true },
            { id: "pt", tip: "ppc", renk: 2, qmax: 9.3, pmax: 9.3, k: 2, kesik: true, gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: A noktası PPC₁'in üstünde, yani verimli.", goster: [] },
            { metin: "Z noktası eğrinin dışında: bu kaynak ve teknolojiyle ==ulaşılamaz==.", goster: ["Zr"] },
            { metin: "Daha çok işçi ve makine, daha iyi eğitilmiş işçi ya da yeni teknoloji gelirse eski eğri (kesikli) arkada kalır, yeni eğri dışa çıkar.", gizle: ["p1"], goster: ["p1k", "p2", "o1"] },
            { metin: "Dünün imkânsız noktası bugün ulaşılabilir: Z artık yeni eğrinin üstünde. İşte ==*economic growth*==.", gizle: ["Zr"], goster: ["Zg"] },
            { metin: "Ticaret ülkeyi yeni bir üretim eğrisine taşımaz; ama **tüketim** olanaklarını PPC'nin dışına taşıyabilir (ayrıntısı sonraki bölümlerde).", goster: ["pt", "ot"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🚀", terim: "Economic growth", tr: "ekonomik büyüme", tanim: "Ekonominin üretim kapasitesinin artması; PPC'nin dışa kayması.", ornek: "Kaynak, kalite ya da teknoloji arttıkça Z gibi noktalar ulaşılabilir olur." },
            { ikon: "🏭", terim: "Physical capital", tr: "fiziksel sermaye", tanim: "Üretimde kullanılan insan yapımı araçlar: makine, alet, fabrika.", ornek: "Yeni bir çay işleme fabrikası." },
            { ikon: "🎓", terim: "Human capital", tr: "beşerî sermaye", tanim: "İşçinin bilgi, beceri ve eğitimi. ==Daha çok işçi değil, daha iyi işçi.==", ornek: "Eğitimli işçi aynı sürede daha çok üretir." },
            { ikon: "💡", terim: "Technology", tr: "teknoloji", tanim: "Kaynakları birleştirme bilgisi ve yöntemleri; gelişince aynı kaynakla daha çok üretilir.", ornek: "Daha hızlı bir hasat makinesi." }
          ] },
        { tip: "tuzak", baslik: "Daha çok mu, daha iyi mi?", metin: "İkisi de eğriyi dışa kaydırır; sadece nedenleri farklıdır.", yanlis: "Yalnızca işçi sayısı artarsa eğri kayar; eğitim kaydırmaz.", dogru: "Kaynak ==miktarı== (nüfus, makine) da, kaynak ==kalitesi== (eğitim = *human capital*) de eğriyi dışa kaydırır." }
      ]
    },
    {
      baslik: "İçe kayma ve tek eksende kayma",
      bloklar: [
        { tip: "grafik", baslik: "Kaynak kaybı: eğri içe kayar", xlabel: "Çay", ylabel: "Pamuk", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "p1", tip: "ppc", renk: 0, qmax: 6, pmax: 6, k: 2, etiket: "PPC₁" },
            { id: "p1k", tip: "ppc", renk: 0, qmax: 6, pmax: 6, k: 2, kesik: true, gizli: true },
            { id: "p2", tip: "ppc", renk: 2, qmax: 4.5, pmax: 4.5, k: 2, etiket: "PPC₂", gizli: true },
            { id: "A", tip: "nokta", renk: 1, x: 3.6, y: 4.8, etiket: "A", kilavuz: true },
            { id: "Ar", tip: "nokta", renk: 3, x: 3.6, y: 4.8, etiket: "A · artık ulaşılamaz", kilavuz: true, gizli: true },
            { id: "ok", tip: "ok", renk: 2, from: [4.4, 4.4], to: [3.3, 3.3], gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: A noktası PPC₁ üzerinde." },
            { metin: "Bir afet fabrikaları ve santralleri yıkıyor: kaynak kaybettin.", goster: ["ok"] },
            { metin: "Eğri **içe** kayar (eski eğri kesikli kalır).", gizle: ["p1"], goster: ["p1k", "p2"] },
            { metin: "Dünün verimli noktası A artık eğrinin dışında: ==ulaşılamaz==.", gizle: ["A"], goster: ["Ar"] }
          ] },
        { tip: "grafik", baslik: "Tek eksende kayma: çaya özgü makine", xlabel: "Çay", ylabel: "Pamuk", xmax: 10, ymax: 8,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "p1", tip: "ppc", renk: 0, qmax: 6, pmax: 6, k: 2, etiket: "PPC₁" },
            { id: "p1k", tip: "ppc", renk: 0, qmax: 6, pmax: 6, k: 2, kesik: true, gizli: true },
            { id: "p2", tip: "ppc", renk: 1, qmax: 9, pmax: 6, k: 2, etiket: "PPC₂", gizli: true },
            { id: "pin", tip: "yazi", x: 1.9, y: 6.6, metin: "pamuğun en fazlası aynı: 6", gizli: true },
            { id: "ok", tip: "ok", renk: 1, from: [6.1, 0.4], to: [8.9, 0.4], gizli: true },
            { id: "A", tip: "nokta", renk: 1, x: 3.6, y: 4.8, etiket: "A" }
          ],
          durumlar: [
            { metin: "Çay toplayan hızlı bir makine icat edildi. Bu makine pamuk toplamaz." },
            { metin: "Pamuğun en fazla miktarı (y ekseni ucu) aynı kalır.", goster: ["pin"] },
            { metin: "Çayın en fazla miktarı 6'dan 9'a çıkar. Eğri yalnızca ==çay ekseninde== dışa açılır.", gizle: ["p1"], goster: ["p1k", "p2", "ok"] }
          ] },
        { tip: "tuzak", baslik: "Her kayma iki eksende olmaz", metin: "Bir gelişme yalnızca bir malı etkiliyorsa (o mala özgü teknoloji ya da kaynak) yalnızca o malın ekseni kayar.", yanlis: "Her kaymada eğrinin iki ucu birden hareket eder.", dogru: "O mala özgü gelişme ==tek eksende== kaydırır, öteki ucun yeri sabit kalır; bir teknoloji ya da eğitim **her iki malı** etkiliyorsa bütün eğri kayar. Yeni eğride A içeride kalır: 4,8 pamukla artık 5,4 çay yapılabilir." }
      ]
    },
    {
      baslik: "Eğriyi kaydırmayanlar: işsizlik ve talep",
      bloklar: [
        { tip: "not", metin: "Bu bölümün en sık sorulan tuzağı. İki durumda eğri **kıpırdamaz**, ama çoğu kişi kayar sanır." },
        { tip: "grafik", baslik: "İşsizlik, işçi kaybı ve talep", xlabel: "Çay", ylabel: "Pamuk", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "p1", tip: "ppc", renk: 0, qmax: 6, pmax: 6, k: 2, etiket: "PPC" },
            { id: "p1k", tip: "ppc", renk: 0, qmax: 6, pmax: 6, k: 2, kesik: true, gizli: true },
            { id: "p4", tip: "ppc", renk: 2, qmax: 4.5, pmax: 4.5, k: 2, etiket: "içe kaydı", gizli: true },
            { id: "E", tip: "nokta", renk: 1, x: 3.6, y: 4.8, etiket: "ekonomi", kilavuz: true },
            { id: "kilit", tip: "yazi", x: 1.4, y: 9, metin: "🔒 eğri yerinde", gizli: false },
            { id: "yz", tip: "yazi", x: 5.8, y: 2.7, metin: "işçiler hâlâ burada, çalışmıyor", gizli: true },
            { id: "yz2", tip: "yazi", x: 7.5, y: 6.8, metin: "işçiler ülkeyi terk etti: eğri içe", gizli: true },
            { id: "yz3", tip: "yazi", x: 7.8, y: 5.5, metin: "talep kahveye kaydı: eğri üstünde hareket", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: ekonomi PPC'nin üstünde. Kilit: aşağıdaki iki durumda eğri yerinden oynamaz." },
            { metin: "Kriz geldi, işsizlik arttı. Eğri içe kaymaz! **Nokta** eğrinin içine düşer: işçiler hâlâ burada, sadece çalışmıyorlar.", set: { E: { x: 2, y: 2.5, etiket: "işsizlik" } }, goster: ["yz"] },
            { metin: "İşçiler ülkeyi terk etseydi, kaynak gerçekten azalmış olurdu: o zaman eğri ==içe== kayardı.", gizle: ["p1", "E", "yz"], goster: ["p1k", "p4", "yz2"] },
            { metin: "İkinci tuzak: insanlar çaydan sıkılıp kahveye geçti. Eğri kayar mı? **Hayır.** Ülke eğri üzerinde daha az çaylı bir noktaya geçer.", gizle: ["p4", "p1k", "yz2"], goster: ["p1", "E", "yz3"], set: { E: { x: 2, y: 5.66, etiket: "daha az çay" } } },
            { metin: "Talep, ne istediğimizi değiştirir; ne yapabileceğimizi değil. PPC ise yapabileceğimizi gösterir." }
          ] },
        { tip: "tablo", baslik: "Eğri kayar mı?", head: ["Olay", "Eğri", "Ne olur?"], rows: [
            ["Kriz, işsizlik %5 → %12", "Kaymaz", "Nokta eğrinin içine düşer"],
            ["Afet, savaş, göç: kaynak yok oldu", "İçe kayar", "Eğri küçülür"],
            ["Çay talebi kahveye kaydı", "Kaymaz", "Eğri üzerinde başka noktaya geçilir"],
            ["Eğitim, yeni teknoloji, daha çok işçi", "Dışa kayar", "*Economic growth*"]
          ] },
        { tip: "ikili", sol: { ikon: "🔒", baslik: "Eğri KAYMAZ", maddeler: ["Kaynak duruyor ama kullanılmıyor", "İnsanların istekleri değişti", "Nokta eğri içinde ya da eğri üzerinde oynar"] },
          sag: { ikon: "↔️", baslik: "Eğri KAYAR", maddeler: ["Kaynağın miktarı ya da kalitesi değişti", "Teknoloji değişti", "Eğri dışa ya da içe hareket eder"] },
          oyun: [
            { metin: "Ekonomi resesyona girdi, fabrikalar yarı kapasiteyle çalışıyor.", cevap: "sol", neden: "Kaynak duruyor ama yok olmadı: nokta içeri düşer." },
            { metin: "Bir deprem enerji santrallerini yok etti.", cevap: "sag", neden: "Kaynak kaybı: eğri içe kayar." },
            { metin: "Yün kazaklara talep düştü.", cevap: "sol", neden: "Talep eğriyi kaydırmaz; eğri üzerinde hareket olur." },
            { metin: "Hükümet ücretsiz mesleki eğitim programı başlattı.", cevap: "sag", neden: "*Human capital* artar: eğri dışa kayar." },
            { metin: "Çalışma çağındaki nüfus arttı.", cevap: "sag", neden: "Kaynak miktarı artar: eğri dışa kayar." }
          ] },
        { tip: "ornek", baslik: "Sınav sorusu: işsizlik %5'ten %12'ye", durum: "Bir ülkede ekonomi krize giriyor ve işsizlik oranı yüzde 5'ten yüzde 12'ye çıkıyor. Bu ülkenin PPC grafiğinde ne olur?",
          adimlar: ["Soru: işçiler kayboldu mu, yoksa sadece çalışmıyorlar mı?", "İşçiler ülkede, ama atıl: kaynak kaybı yok.", "Kaynak ve teknoloji aynı: eğri yerinde kalır.", "Atıl kaynak = eğrinin içindeki nokta."],
          sonuc: "==Nokta eğrinin içine düşer, eğri yerinde kalır.== İçe kayma yok, çünkü işçiler kaybolmadı (idle workers ≠ lost workers)." },
        { tip: "tuzak", baslik: "En sık tuzak", metin: "Resesyon ve işsizlik soruları sınavın favorisidir.", yanlis: "İşsizlik arttı, o halde PPC içe kaydı.", dogru: "Kaynak ==kullanılmıyorsa== içerideki nokta; kaynak ==yok olduysa== (afet, savaş, salgın, göç) eğri içe kayar." },
        { tip: "tuzak", baslik: "Talep tuzağı", metin: "Bir malın talebi düştü diye PPC'nin şekli değişmez.", yanlis: "Yün talebi düştü, eğri kayar.", dogru: "Eğri üzerinde başka bir noktaya geçilir; PPC ne istediğimizi değil ne yapabileceğimizi gösterir." }
      ]
    },
    {
      baslik: "*Capital goods* ve *consumer goods*: bugünün fedakârlığı",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🍞", terim: "Consumer goods", tr: "tüketim malları", tanim: "Doğrudan kullandığın mallar.", ornek: "Tost, telefon, pizza." },
            { ikon: "🏗️", terim: "Capital goods", tr: "sermaye malları", tanim: "Başka mal üretmek için kullanılan mallar: mal üretmek için mal.", ornek: "Tost makinesi, fırın, fabrika." }
          ] },
        { tip: "not", metin: "İki komşu ülke aynı PPC'yle başlıyor. **Tostistan** bugün bol tost yiyor. **Makinistan** kemerini sıkıp makine üretiyor. Aşağıda ikisinin on yıl sonrasını gör." },
        { tip: "grafik", baslik: "Tostistan ve Makinistan", xlabel: "Sermaye malları", ylabel: "Tüketim malları", xmax: 9, ymax: 9,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "b", tip: "ppc", renk: 0, qmax: 5, pmax: 5, k: 2, etiket: "aynı PPC" },
            { id: "bk", tip: "ppc", renk: 0, qmax: 5, pmax: 5, k: 2, kesik: true, gizli: true },
            { id: "T", tip: "nokta", renk: 2, x: 1.4, y: 4.8, etiket: "Tostistan", kilavuz: true, gizli: true },
            { id: "M", tip: "nokta", renk: 3, x: 4.8, y: 1.4, etiket: "Makinistan", kilavuz: true, gizli: true },
            { id: "tp", tip: "ppc", renk: 2, qmax: 5.5, pmax: 5.5, k: 2, etiket: "Tostistan", gizli: true },
            { id: "mp", tip: "ppc", renk: 3, qmax: 8, pmax: 8, k: 2, etiket: "Makinistan", gizli: true }
          ],
          durumlar: [
            { metin: "İki ülke aynı PPC'yle başlıyor; ikisi de eğrinin üstünde, ikisi de verimli." },
            { metin: "Tostistan **bugün** bol tüketim malı seçiyor.", goster: ["T"] },
            { metin: "Makinistan bugün kemerini sıkıyor: az tüketim, çok sermaye malı.", goster: ["M"] },
            { metin: "On yıl sonra: Tostistan'ın eğrisi biraz, Makinistan'ınki **çok daha fazla** dışa kaymış; hem makine hem tüketim için.", gizle: ["b"], goster: ["bk", "tp", "mp"] }
          ] },
        { tip: "tablo", baslik: "İki stratejinin karşılaştırması", head: ["", "Tostistan", "Makinistan"], rows: [
            ["Bugünkü seçim", "Çok tüketim malı", "Çok sermaye malı"],
            ["Bugün", "Bol tost yiyor", "Kemerini sıkıyor"],
            ["On yıl sonra", "Eğri biraz kaymış", "Eğri çok daha fazla kaymış (iki eksende de)"]
          ], not: "Temsilî değerler: Tostistan'ın eğrisi 5 → 5,5; Makinistan'ınki 5 → 8." },
        { tip: "tuzak", baslik: "Sermaye malı verimsizlik değildir", metin: "Makinistan bugün az tüketiyor diye \"verimsiz\" sayılmaz; nokta yine eğrinin üstündedir.", yanlis: "Capital goods üretmek, ülkeyi verimsiz kılar.", dogru: "Daha çok *capital goods* = bugün daha az tüketim, yarın ==iki eksende de dışa kayan== daha geniş bir PPC." }
      ]
    },
    {
      baslik: "Yine *productive* ve *allocative efficiency*",
      bloklar: [
        { tip: "grafik", baslik: "Üç nokta, iki verimlilik", xlabel: "Çay", ylabel: "Pamuk", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "p1", tip: "ppc", renk: 1, qmax: 6, pmax: 6, k: 2, etiket: "PPC", gizli: true },
            { id: "K", tip: "nokta", renk: 2, x: 6, y: 0, etiket: "K · hepsi çay", gizli: true },
            { id: "kt", tip: "yazi", x: 7.4, y: 1.6, metin: "productive ✓ allocative ✗", gizli: true },
            { id: "M", tip: "nokta", renk: 3, x: 3.6, y: 4.8, etiket: "M · halkın seçimi", kilavuz: true, gizli: true },
            { id: "mt", tip: "yazi", x: 5.2, y: 7.3, metin: "productive ✓ allocative ✓", gizli: true },
            { id: "I", tip: "nokta", renk: 2, x: 2, y: 2, etiket: "I · içeride", gizli: true },
            { id: "it", tip: "yazi", x: 2.2, y: 3.4, metin: "ikisi de ✗", gizli: true }
          ],
          durumlar: [
            { metin: "Eğrinin üzerindeki her nokta *productive efficiency* sağlar: hiçbir kaynak boşa gitmez.", goster: ["p1"] },
            { metin: "Her şeyi çaya verip hiç pamuk üretmeyen K ülkesi verimli, ama herkes tişörtsüz çay içiyor: ==*allocative* ✗==.", goster: ["K", "kt"] },
            { metin: "*Allocative efficiency*, toplumun en çok istediği kombinasyondur. Halk M noktasını istiyorsa M ikisini de sağlar. O noktayı grafik değil, **insanların istekleri** belirler.", goster: ["M", "mt"] },
            { metin: "Eğrinin içindeki nokta ikisini de sağlamaz.", goster: ["I", "it"] }
          ] },
        { tip: "ikili", sol: { ikon: "⚙️", baslik: "*Productive efficiency*", maddeler: ["Eğrinin üzerindeki HER nokta (uçlar dahil)", "Kaynak israfı yok"] },
          sag: { ikon: "🎯", baslik: "*Allocative efficiency*", maddeler: ["Toplumun en çok istediği kombinasyon", "Eğri üzerinde yalnızca bir (ya da birkaç) nokta"] },
          oyun: [
            { metin: "Bütün kaynaklar kullanılıyor, hiçbir şey boşa gitmiyor.", cevap: "sol", neden: "İsraf yok: *productive efficiency*." },
            { metin: "Halkın en çok istediği çay–pamuk karışımı üretiliyor.", cevap: "sag", neden: "Toplumun tercihi: *allocative efficiency*." },
            { metin: "Ortadaki nokta da, uçtaki nokta da eşit derecede üretken.", cevap: "sol", neden: "Eğrinin her noktası *productively efficient*." },
            { metin: "Eğri üzerinde ama halk bu karışımı istemiyor (hepsi çay, hiç pamuk).", cevap: "sag", neden: "Eğri üzerinde olması yetmez; tercih tutmuyor: *allocative* sağlanmadı." }
          ] },
        { tip: "tuzak", baslik: "Hangi nokta en verimli?", metin: "\"En verimli nokta\" diye bir şık görürsen yanlış olduğunu bil.", yanlis: "Eğri üzerindeki en verimli nokta ortadaki ya da en çok mal üretilen noktadır.", dogru: "Eğrinin üzerindeki ==bütün noktalar== eşit derecede *productively efficient*'tır; *allocative efficiency* için toplumun tercihi gerekir." },
        { tip: "tuzak", baslik: "Dışarıdaki nokta", metin: "Eğrinin dışındaki bir nokta için \"ekonomi hatalı\" demek yanlıştır.", yanlis: "Eğrinin dışındaki nokta ekonominin yanlış karar verdiğini gösterir.", dogru: "Dışarıdaki nokta, ==şu anki== kaynak ve teknolojiyle ulaşılamaz demektir; kayma olunca ulaşılabilir hâle gelebilir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Düz *PPC* = *constant opportunity cost* (kaynaklar iki mala eşit uygun); dışa bükük *PPC* = *increasing opportunity cost*.",
            "Bükülmenin nedeni: kaynaklar her mala aynı ölçüde uymaz (*not perfectly adaptable*). Artış iki yönde de geçerlidir.",
            "Kaynak miktarı, kaynak kalitesi (*human capital*) ve teknoloji eğriyi kaydırır; dışa kayma = *economic growth*.",
            "Kaynak kaybı (afet, savaş, göç) eğriyi içe kaydırır. Bir gelişme yalnızca bir malı etkiliyorsa yalnızca o eksen kayar.",
            "İşsizlik eğrinin içindeki noktadır; talep değişimi eğri üzerinde harekettir. İkisi de eğriyi kaydırmaz.",
            "Ticaret üretimi değil, tüketimi PPC'nin ötesine taşır (sonraki bölümlerde).",
            "Bugün daha çok *capital goods*, yarın daha geniş bir *PPC*: iki eksende de dışa kayma.",
            "Eğrinin her noktası *productively efficient*'tır; *allocative* olan, toplumun en çok istediği noktadır."
          ] }
      ]
    }
  ]
};
