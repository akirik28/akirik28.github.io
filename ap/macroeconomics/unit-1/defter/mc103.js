/* Kitpath not defteri · mc103 · 1.2 PPC'nin Şekli ve Kayması
   Kaynak: ap-videolar/src/episodes/mc103 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "mc103",
  amac: "Bu konu *PPC*'nin şeklini ve yerini anlatıyor. Eğrinin neden dışa bükük ya da düz olduğunu, neyin eğriyi kaydırdığını (ve neyin kaydırmadığını) ve *capital goods*'un geleceğe yatırım olduğunu öğreneceksin.",
  bolumler: [
    {
      baslik: "*Law of increasing opportunity cost*",
      kisa: "Bir malın üretimi arttıkça her ek birimin fırsat maliyeti artar.",
      bloklar: [
        { tip: "hikaye", ikon: "🍒", baslik: "Babaannenin kiraz bahçesi",
          metin: "Bir saatin var: ya oyun oynarsın ya kiraz toplarsın. İlk sepet 5 dakikada dolar, alt dallar elinin altında. Son sepet 25 dakika sürer, tepedeki dala çıkman gerekir. Her sepet bir öncekinden pahalı." },
        { tip: "tablo", baslik: "Kiraz sepeti ve oyun bölümü", head: ["Sepet kiraz", "0", "1", "2", "3", "4"], rows: [
            ["Oyun bölümü", "15", "14", "12", "8", "0"],
            ["O sepetin *opportunity cost*'u (bölüm)", "—", "1", "2", "4", "8"]
          ], vurgu: 1, not: "Farklar: 15−14 = 1, 14−12 = 2, 12−8 = 4, 8−0 = 8. Ters yönde de artar: bölüm başına sepet maliyeti 1/8, 1/4, 1/2, 1 olur." },
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
            { ikon: "📈", terim: "Law of increasing opportunity cost", tr: "artan fırsat maliyeti yasası", tanim: "Bir malın üretimi arttıkça her ek birimin fırsat maliyeti artar; ==iki yönde de== geçerlidir. PPC bu yüzden dışa bükük çizilir.", ornek: "Kirazda 1., 2., 3., 4. sepet sırayla 1, 2, 4, 8 oyun bölümüne mal oluyor." },
            { ikon: "🌙", terim: "Bowed out", tr: "dışa bükük", tanim: "Orijinden dışa doğru şişmiş PPC şekli. Kitaplarda *concave to the origin* diye de geçer.", ornek: "Kiraz–oyun eğrisi." }
          ] }
      ]
    },
    {
      baslik: "Neden bükük? Kaynaklar tam uyarlanamaz",
      kisa: "Kaynaklar her mala aynı ölçüde uymaz; en uygun olan önce kullanılır.",
      bloklar: [
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
            { metin: "Türkiye'nin bütün tarlalarında pamuk var; 8 birim pamuk, hiç çay yok.", goster: ["m"] },
            { metin: "Çay istiyorsun; önce Rize'nin yağmurlu yamaçlarını çaya çevirirsin. Oradan zaten az pamuk çıkıyordu: çok çay kazanırsın, **az pamuk** kaybedersin (yaklaşık +4 çay, −1 pamuk).", set: { m: { x: 4, y: 6.93, etiket: "Rize bitti" } }, goster: ["tr"] },
            { metin: "Çay arttıkça Çukurova'nın sıcak ovalarına sıra gelir: pamuğun cenneti, çayın cehennemi.", set: { m: { x: 7, y: 3.87, etiket: "Çukurova'ya girdik" } } },
            { metin: "Son birim çay için bile **tonlarca pamuk** gider (yaklaşık +1 çay, −4 pamuk).", set: { m: { x: 8, y: 0, etiket: "hepsi çay" } }, goster: ["tc"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Not perfectly adaptable", tr: "tam uyarlanabilir değil", tanim: "Kaynakların bir maldan ötekine geçerken aynı verimle çalışmaması. Artan fırsat maliyetinin nedeni budur; o mala en uygun kaynaklar önce kullanılır.", ornek: "Rize çaya uygun, Çukurova pamuğa." }
          ] },
        { tip: "tuzak", baslik: "Kitap dili", metin: "Sınavda *concave to the origin* görürsen bunun dışa bükük (*bowed out*) eğri olduğunu bil.", yanlis: "\"Concave\" ya da \"convex\" kelimesine bakarak şekli karıştırmak.", dogru: "Kelimeye değil şekle bak: orijinden dışa şişmiş eğri = artan fırsat maliyeti." }
      ]
    },
    {
      baslik: "Düz çizgi: sabit fırsat maliyeti",
      kisa: "Kaynaklar iki mala eşit uygunsa PPC düz çizgidir.",
      bloklar: [
        { tip: "grafik", baslik: "Simit–poğaça: her adım eşit", xlabel: "Poğaça (tepsi)", ylabel: "Simit (tepsi)", xmax: 6, ymax: 11,
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
            { metin: "Aynı usta, aynı fırın: bir sabahta ya 10 tepsi simit ya 5 tepsi poğaça. Altı kombinasyon var.", goster: ["p0", "p1", "p2", "p3", "p4", "p5"] },
            { metin: "Her ek poğaça tepsisinde simit **aynı miktarda** azalıyor: 10 ÷ 5 = 2 tepsi. Ters yönde 1 tepsi simit = ½ tepsi poğaça.", goster: ["a1", "a2", "a3", "a4", "a5", "tx"] },
            { metin: "Noktalar **düz bir çizgi** oluşturur: ==*constant opportunity cost*== (sabit fırsat maliyeti).", goster: ["line"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "➖", terim: "Constant opportunity cost", tr: "sabit fırsat maliyeti", tanim: "Her ek birimin fırsat maliyetinin aynı kalması. Kaynaklar iki mala eşit uygun olduğunda görülür; PPC düz çizgidir.", ornek: "Her poğaça tepsisi hep 2 tepsi simit." }
          ] },
        { tip: "ikili", sol: { ikon: "📈", baslik: "Dışa bükük PPC", maddeler: ["*Increasing opportunity cost*", "Kaynaklar iki mala eşit uygun değil", "Örnek: çay–pamuk"] },
          sag: { ikon: "➖", baslik: "Düz PPC", maddeler: ["*Constant opportunity cost*", "Kaynaklar iki mala eşit uygun", "Örnek: simit–poğaça"] },
          oyun: [
            { metin: "Her ek birim bir öncekinden daha pahalı.", cevap: "sol", neden: "Artan fırsat maliyeti: dışa bükük." },
            { metin: "Her poğaça tepsisi hep 2 tepsi simide mal oluyor.", cevap: "sag", neden: "Sabit maliyet: düz çizgi." },
            { metin: "Kaynakların bir kısmı yalnızca bir mal için uygun.", cevap: "sol", neden: "Tam uyarlanabilir değil: bükük eğri." },
            { metin: "Aynı usta ve aynı fırın iki malı da eşit iyi üretiyor.", cevap: "sag", neden: "Kaynaklar eşit uygun: düz çizgi." }
          ] }
      ]
    },
    {
      baslik: "Eğriyi dışa kaydıran etkenler",
      kisa: "Daha çok kaynak, daha iyi kaynak ya da teknoloji eğriyi dışa kaydırır.",
      bloklar: [
        { tip: "harita", merkez: "*PPC* dışa kayar", dallar: [
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
      kisa: "Kaynak kaybı eğriyi içe, o mala özgü gelişme tek ekseni kaydırır.",
      bloklar: [
        { tip: "grafik", baslik: "Tek eksende kayma ve kaynak kaybı", xlabel: "Çay", ylabel: "Pamuk", xmax: 10, ymax: 8,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "p1", tip: "ppc", renk: 0, qmax: 6, pmax: 6, k: 2, etiket: "PPC₁" },
            { id: "p1k", tip: "ppc", renk: 0, qmax: 6, pmax: 6, k: 2, kesik: true, gizli: true },
            { id: "p2", tip: "ppc", renk: 1, qmax: 9, pmax: 6, k: 2, etiket: "PPC₂", gizli: true },
            { id: "pin", tip: "yazi", x: 1.9, y: 6.9, metin: "pamuğun en fazlası aynı: 6", gizli: true },
            { id: "ok", tip: "ok", renk: 1, from: [6.1, 0.4], to: [8.9, 0.4], gizli: true },
            { id: "A", tip: "nokta", renk: 1, x: 3.6, y: 4.8, etiket: "A", kilavuz: true },
            { id: "p3", tip: "ppc", renk: 2, qmax: 4.5, pmax: 4.5, k: 2, etiket: "PPC₃", gizli: true },
            { id: "ok2", tip: "ok", renk: 2, from: [4.4, 4.4], to: [3.3, 3.3], gizli: true },
            { id: "Ar", tip: "nokta", renk: 3, x: 3.6, y: 4.8, etiket: "A · artık ulaşılamaz", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: A noktası PPC₁ üzerinde. Çay toplayan hızlı bir makine icat edildi; pamuk toplamaz.", goster: ["pin"] },
            { metin: "Çayın en fazla miktarı 6'dan 9'a çıkar, pamuğunki aynı kalır. Eğri yalnızca ==çay ekseninde== dışa açılır.", gizle: ["p1", "pin"], goster: ["p1k", "p2", "ok"] },
            { metin: "Şimdi tersi: bir afet fabrikaları ve santralleri yıkıyor, kaynak kaybettin. Eski eğri geri gelir.", gizle: ["p2", "p1k", "ok"], goster: ["p1", "ok2"] },
            { metin: "Eğri **içe** kayar (PPC₃).", gizle: ["p1", "ok2"], goster: ["p1k", "p3"] },
            { metin: "Dünün verimli noktası A artık eğrinin dışında: ==ulaşılamaz==.", gizle: ["A"], goster: ["Ar"] }
          ] },
        { tip: "tuzak", baslik: "Her kayma iki eksende olmaz", metin: "Bir gelişme yalnızca bir malı etkiliyorsa (o mala özgü teknoloji ya da kaynak) yalnızca o malın ekseni kayar.", yanlis: "Her kaymada eğrinin iki ucu birden hareket eder.", dogru: "O mala özgü gelişme ==tek eksende== kaydırır, öteki ucun yeri sabit kalır; bir teknoloji ya da eğitim **her iki malı** etkiliyorsa bütün eğri kayar. Yeni eğride A içeride kalır: 4,8 pamukla artık 5,4 çay yapılabilir." }
      ]
    },
    {
      baslik: "Eğriyi kaydırmayanlar: işsizlik ve talep",
      kisa: "İşsizlik noktayı eğrinin içine düşürür, talep eğri üzerinde hareket ettirir.",
      bloklar: [
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
        { tip: "ikili", sol: { ikon: "🔒", baslik: "Eğri KAYMAZ", maddeler: ["Kaynak duruyor ama kullanılmıyor (işsizlik)", "İnsanların istekleri değişti (talep)"] },
          sag: { ikon: "↔️", baslik: "Eğri KAYAR", maddeler: ["Kaynağın miktarı ya da kalitesi değişti", "Teknoloji değişti"] },
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
        { tip: "tuzak", baslik: "En sık tuzak: işsizlik ve talep", metin: "Resesyon ve işsizlik soruları sınavın favorisidir; talep düşüşü de eğriyi kaydırmaz.", yanlis: "İşsizlik arttı ya da talep düştü, o halde PPC kaydı.", dogru: "Kaynak ==kullanılmıyorsa== içerideki nokta; kaynak ==yok olduysa== (afet, savaş, salgın, göç) eğri içe kayar. Talep değişince eğri üzerinde başka bir noktaya geçilir." }
      ]
    },
    {
      baslik: "*Capital goods* ve *consumer goods*: bugünün fedakârlığı",
      kisa: "Bugün daha çok sermaye malı üretmek, yarın daha geniş bir PPC demektir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🍞", terim: "Consumer goods", tr: "tüketim malları", tanim: "Doğrudan kullandığın mallar.", ornek: "Tost, telefon, pizza." },
            { ikon: "🏗️", terim: "Capital goods", tr: "sermaye malları", tanim: "Başka mal üretmek için kullanılan mallar: mal üretmek için mal.", ornek: "Tost makinesi, fırın, fabrika." }
          ] },
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
            { metin: "İki komşu ülke aynı PPC'yle başlıyor; ikisi de eğrinin üstünde, ikisi de verimli." },
            { metin: "**Tostistan** bugün bol tost yiyor: çok tüketim malı seçiyor.", goster: ["T"] },
            { metin: "**Makinistan** kemerini sıkıyor: az tüketim, çok sermaye malı.", goster: ["M"] },
            { metin: "On yıl sonra: Tostistan'ın eğrisi biraz (5 → 5,5), Makinistan'ınki **çok daha fazla** (5 → 8) dışa kaymış; hem makine hem tüketim için.", gizle: ["b"], goster: ["bk", "tp", "mp"] }
          ] },
        { tip: "tuzak", baslik: "Sermaye malı verimsizlik değildir", metin: "Makinistan bugün az tüketiyor diye \"verimsiz\" sayılmaz; nokta yine eğrinin üstündedir.", yanlis: "Capital goods üretmek, ülkeyi verimsiz kılar.", dogru: "Daha çok *capital goods* = bugün daha az tüketim, yarın ==iki eksende de dışa kayan== daha geniş bir PPC." }
      ]
    },
    {
      baslik: "Yine *productive* ve *allocative efficiency*",
      kisa: "Eğrinin her noktası üretken verimlidir; tahsis verimliliği toplumun tercihine bağlıdır.",
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
        { tip: "tuzak", baslik: "\"En verimli nokta\" ve dışarıdaki nokta", metin: "\"En verimli nokta\" diye bir şık görürsen yanlıştır; eğrinin dışındaki nokta da \"ekonomi hatalı\" demek değildir.", yanlis: "Ortadaki ya da en çok mal üretilen nokta en verimlidir; dışarıdaki nokta yanlış karardır.", dogru: "Eğrinin üzerindeki ==bütün noktalar== eşit derecede *productively efficient*'tır. Dışarıdaki nokta, ==şu anki== kaynak ve teknolojiyle ulaşılamaz demektir; kayma olunca ulaşılabilir olabilir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
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
