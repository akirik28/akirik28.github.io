/* Kitora not defteri · cb403 · 4.3 Hareket Dışında Değişim Hızları
   Videosuz ünite: CED 4.3 (Rates of Change in Applied Contexts Other Than Motion). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb403",
  amac: "Bu konu türevin yalnızca hareket için değil, maliyet, hacim, nüfus ve sıcaklık gibi her nicelik için değişim hızı olduğunu anlatıyor. Bağlamdan birim ve yön okumayı, giriş ve çıkış hızlarını karşılaştırmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Her nicelik için bir değişim hızı vardır",
      kisa: "Hız yalnızca hareket için değil, her değişen nicelik için türevdir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Rate of change", tr: "değişim hızı", tanim: "Bir niceliğin, başka bir nicelik değiştikçe ne kadar hızlı değiştiği. Türev bu hızı verir.", ornek: "Su deposunda V′(t): hacmin zamana göre değişim hızı." },
            { ikon: "🏭", terim: "Marginal cost", tr: "marjinal maliyet", tanim: "Bir adet daha üretmenin yaklaşık ek maliyeti: C′(n). Birimi TL/adet.", ornek: "C′(100) = 6: 101. adet yaklaşık 6 TL ek maliyet getirir." },
            { ikon: "🌱", terim: "Growth rate", tr: "büyüme hızı", tanim: "Nüfus, üye ya da boy gibi bir niceliğin zamana göre değişimi: P′(t).", ornek: "N′(3) = 6: kulüp 3. yılda yılda yaklaşık 6 üye artıyor." }
          ] },
        { tip: "tablo", baslik: "Fonksiyon ve türevi bağlamda", head: ["Fonksiyon", "Türev", "Birim", "Anlamı"],
          rows: [
            ["V(t): su hacmi (L)", "V′(t)", "L/dk", "su ne hızla doluyor ya da boşalıyor"],
            ["C(n): maliyet (TL)", "C′(n)", "TL/adet", "bir adet daha üretmenin ek maliyeti"],
            ["N(t): üye sayısı", "N′(t)", "üye/yıl", "kulüp ne hızla büyüyor"],
            ["T(t): sıcaklık (°C)", "T′(t)", "°C/dk", "ne hızla ısınıyor ya da soğuyor"]
          ], vurgu: 1, not: "Her satırda türevin birimi = fonksiyonun birimi / değişkenin birimi." }
      ]
    },
    {
      baslik: "Marjinal maliyet: bir adet daha",
      kisa: "C′(n), n. adetten sonra bir adet daha üretmenin yaklaşık maliyetidir.",
      bloklar: [
        { tip: "ornek", baslik: "C(n) = 200 + 4n + 0,01n²", durum: "Kantinin günlük tost maliyeti (TL), n adet. C′(100)'ü bul ve yorumla.",
          adimlar: [
            "Türev: C′(n) = 4 + 0,02n.",
            "n = 100: C′(100) = 4 + 2 = 6.",
            "Yorum: 100 tosttan sonra bir tost daha yapmak yaklaşık 6 TL ek maliyet getirir.",
            "Kontrol: C(101) − C(100) = 6,01. Marjinal maliyet bunun iyi bir tahminidir.",
            "C″(n) = 0,02 > 0: n büyüdükçe marjinal maliyet artıyor."
          ], sonuc: "C′(100) = 6 TL/adet" },
        { tip: "grafik", baslik: "Maliyet eğrisi C(n) ve eğim", xlabel: "n (adet)", ylabel: "C (TL)", xmax: 200, ymax: 1500,
          xticks: [{ v: 100, label: "100" }, { v: 200, label: "200" }], yticks: [{ v: 500, label: "500" }, { v: 1000, label: "1000" }, { v: 1500, label: "1500" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 200], [20, 284], [40, 376], [60, 476], [80, 584], [100, 700], [120, 824], [140, 956], [160, 1096], [180, 1244], [200, 1400]] },
            { id: "p1", tip: "nokta", renk: 2, x: 100, y: 700, etiket: "(100, 700)", kilavuz: true, gizli: true },
            { id: "t1", tip: "cizgi", renk: 2, from: [50, 400], to: [150, 1000], etiket: "eğim 6", gizli: true },
            { id: "p2", tip: "nokta", renk: 3, x: 200, y: 1400, etiket: "(200, 1400)", gizli: true },
            { id: "t2", tip: "cizgi", renk: 3, from: [150, 1000], to: [200, 1400], etiket: "eğim 8", gizli: true }
          ],
          durumlar: [
            { metin: "Maliyet eğrisi: üretim arttıkça maliyet yükseliyor ve eğri yukarı doğru bükülüyor." },
            { metin: "n = 100'de maliyet 700 TL. Teğetin eğimi C′(100) = 6 TL/adet.", goster: ["p1", "t1"] },
            { metin: "n = 200'de teğet daha dik: C′(200) = 8 TL/adet. Marjinal maliyet artıyor.", gizle: ["p1", "t1"], goster: ["p2", "t2"] }
          ] },
        { tip: "tuzak", metin: "Marjinal maliyet toplam ya da ortalama maliyet değildir. C′(100) = 6, \"100 tostun maliyeti 6 TL\" demek değildir.", yanlis: "C′(100) = 6, yani 100 tost toplam 6 TL.", dogru: "100 tostun maliyeti C(100) = 700 TL (ortalama 7 TL). C′(100) = 6 ise sıradaki tostun yaklaşık ek maliyetidir." }
      ]
    },
    {
      baslik: "Giriş ve çıkış hızları: net değişim",
      kisa: "Hacmin değişim hızı, giriş hızından çıkış hızının çıkarılmasıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "V′(t)", alt: "hacmin değişim hızı" }, "=",
            { t: "giriş hızı", alt: "dolduran" }, "−",
            { t: "çıkış hızı", alt: "boşaltan" }
          ], aciklama: "Giriş çıkıştan büyükse V′ > 0 (artıyor), küçükse V′ < 0 (azalıyor), eşitse V′ = 0. Aynı mantık nüfus için doğum hızı − ölüm hızıdır." },
        { tip: "grafik", baslik: "Havuz: V′(t) = 40 − 2t (L/dk)", xlabel: "t (dk)", ylabel: "V′ (L/dk)", xmax: 30, ymax: 60,
          xticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }], yticks: [{ v: 20, label: "0" }, { v: 40, label: "20" }, { v: 60, label: "40" }],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 20], to: [30, 20], etiket: "V′ = 0" },
            { id: "c", tip: "cizgi", renk: 0, from: [0, 60], to: [30, 0] },
            { id: "pos", tip: "alan", renk: 2, noktalar: [[0, 20], [0, 60], [20, 20]], gizli: true },
            { id: "p0", tip: "nokta", renk: 3, x: 20, y: 20, etiket: "t = 20", kilavuz: true, gizli: true },
            { id: "neg", tip: "alan", renk: 1, noktalar: [[20, 20], [30, 0], [30, 20]], gizli: true }
          ],
          durumlar: [
            { metin: "Çizgi V′(t)'nin kendisi. Kesikli çizgi V′ = 0 düzeyi (gerçek eksen). Yukarısı hacmin arttığı, aşağısı azaldığı anlar." },
            { metin: "0 < t < 20: V′ > 0 (giriş çıkıştan büyük). Hacim artıyor; t = 0'da 40 L/dk ile en hızlı.", goster: ["pos"] },
            { metin: "t = 20: V′ = 0. Giriş ile çıkış eşit; hacim artıştan azalışa geçiyor.", goster: ["p0"] },
            { metin: "20 < t < 30: V′ < 0 (çıkış girişten büyük). Hacim azalıyor; t = 30'da −20 L/dk.", goster: ["neg"] }
          ] },
        { tip: "ikili", sol: { ikon: "⬆️", baslik: "*V′(t) > 0*", maddeler: ["Giriş hızı > çıkış hızı", "Hacim artıyor"] },
          sag: { ikon: "⬇️", baslik: "*V′(t) < 0*", maddeler: ["Çıkış hızı > giriş hızı", "Hacim azalıyor"] },
          oyun: [
            { metin: "Havuza 12 L/dk giriyor, 9 L/dk çıkıyor.", cevap: "sol", neden: "12 − 9 = +3 L/dk: hacim artıyor." },
            { metin: "Havuza 12 L/dk giriyor, 15 L/dk çıkıyor.", cevap: "sag", neden: "12 − 15 = −3 L/dk: hacim azalıyor." },
            { metin: "V′(25) = −10", cevap: "sag", neden: "Negatif türev: hacim azalıyor." },
            { metin: "V′(5) = 30", cevap: "sol", neden: "Pozitif türev: hacim artıyor." }
          ] }
      ]
    },
    {
      baslik: "Tablodan değişim hızı tahmin etmek",
      kisa: "Hızı tahmin etmek için komşu iki değerin farkını aralığa böl.",
      bloklar: [
        { tip: "tablo", baslik: "Kulüp üye sayısı N(t)", head: ["t (yıl)", "0", "2", "5", "9"],
          rows: [["N(t) (üye)", "40", "52", "70", "103"]], vurgu: 0, not: "t, 2020'den bu yana geçen yıl sayısı." },
        { tip: "ornek", baslik: "Ortalama hız ve N′(3)", durum: "[0, 9] aralığında ortalama değişim hızını ve N′(3)'ü tahmin et.",
          adimlar: [
            "Ortalama hız: (N(9) − N(0)) / (9 − 0) = 63 / 9 = 7 üye/yıl.",
            "3'ü içine alan en dar aralık [2, 5]: (70 − 52) / (5 − 2) = 18 / 3 = 6.",
            "Yorum: 3. yılda kulüp yılda yaklaşık 6 üye artıyor.",
            "Ortalama (7) ile anlık hız (6) birbirinden farklı olabilir."
          ], sonuc: "Ortalama 7 üye/yıl; N′(3) ≈ 6 üye/yıl" }
      ]
    },
    {
      baslik: "Hızın hızı: artış yavaşlıyor mu?",
      kisa: "f′ yönü, f″ hızın nasıl değiştiğini söyler.",
      bloklar: [
        { tip: "tablo", baslik: "f′ ve f″ birlikte okunur", head: ["f′", "f″", "Bağlamda anlamı"],
          rows: [
            ["+", "+", "artıyor, artış hızlanıyor"],
            ["+", "−", "artıyor, artış yavaşlıyor"],
            ["−", "+", "azalıyor, azalış yavaşlıyor"],
            ["−", "−", "azalıyor, azalış hızlanıyor"]
          ], vurgu: 1, not: "f″ işareti hızın artıp azalmasını söyler, niceliğin artıp azaldığını söylemez." },
        { tip: "ornek", baslik: "Yeni açılan bir kafede günlük müşteri", durum: "M′(t) > 0 ve M″(t) < 0 ise müşteri sayısı için ne söylenir?",
          adimlar: [
            "M′ > 0: müşteri sayısı artıyor.",
            "M″ < 0: M′ küçülüyor, yani artış hızı azalıyor.",
            "Müşteri sayısı artmaya devam ediyor ama gittikçe daha yavaş."
          ], sonuc: "Artıyor, ama artış yavaşlıyor" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Türev her bağlamda bir değişim hızıdır; birimi çıktı / girdi.",
            "Marjinal maliyet C′(n): bir adet daha üretmenin yaklaşık ek maliyeti (TL/adet).",
            "C′ toplam ya da ortalama maliyet değildir.",
            "Net hız = giriş hızı − çıkış hızı; işareti artış ya da azalışı söyler.",
            "V′ = 0 olduğu an giriş ile çıkış eşit; yön değişimi için V′ işaret değiştirmeli.",
            "Tabloda hız tahmini: noktayı içine alan en dar aralığın ortalama hızı.",
            "f′ pozitif ve f″ negatifse artış sürer ama yavaşlar.",
            "Yorum cümlesinde an, nicelik, yön, hız ve birim bulunsun."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir atölyede n kupa üretmenin toplam maliyeti C(n) TL. C′(50) = 12 olduğuna göre en iyi yorum hangisidir?",
      opts: ["50 kupanın toplam maliyeti 12 TL'dir.", "Kupa başına ortalama maliyet 12 TL'dir.", "51. kupayı üretmek maliyeti yaklaşık 12 TL artırır.", "Üretim 50'den 12'ye düştüğünde maliyet sıfırlanır."],
      a: 2,
      why: "C′ marjinal maliyettir: n = 50'den sonra bir adet daha üretmenin yaklaşık ek maliyeti. B şıkkı en çekici yanlış: ortalama maliyet C(50) / 50'dir, türevle bir ilgisi yoktur." },
    { q: "Bir su deposundaki hacim V(t) litre, t dakika. V′(t) (L/dk) tabloda veriliyor ve V′ sürekli. Hacmin artıştan azalışa geçtiği an hangi aralıktadır?",
      fig: { type: "table", head: ["t (dk)", "0", "10", "20", "30", "40"], rows: [["V′(t) (L/dk)", "6", "2", "−1", "−3", "−2"]], caption: "Hacmin değişim hızı" },
      opts: ["0 ile 10 arasında", "10 ile 20 arasında", "20 ile 30 arasında", "30 ile 40 arasında"],
      a: 1,
      why: "V′ önce pozitif (artış), sonra negatif (azalış). İşaret 10 ile 20 arasında değişiyor; süreklilik gereği orada V′ = 0 olur. C şıkkı en çekici yanlış: 20-30 aralığında V′ zaten negatif, geçiş çoktan olmuş." },
    { q: "Bir kulübün üye sayısı N(t), t yıl cinsinden tabloda veriliyor. [4, 10] aralığında ortalama değişim hızı kaçtır?",
      fig: { type: "table", head: ["t (yıl)", "0", "4", "10"], rows: [["N(t) (üye)", "30", "50", "95"]], caption: "Kulüp üye sayısı" },
      opts: ["7,5 üye/yıl", "45 üye/yıl", "6,5 üye/yıl", "9,5 üye/yıl"],
      a: 0,
      why: "(N(10) − N(4)) / (10 − 4) = 45 / 6 = 7,5 üye/yıl. C şıkkı en çekici yanlış: (95 − 30) / 10 değeri [0, 10] aralığının ortalamasıdır, istenen aralık değil." },
    { q: "Bir fırındaki ekmeğin sıcaklığı T(t) °C, t dakika cinsinden. T′(10) = −1,5 ise aşağıdakilerden hangisi doğrudur?",
      opts: ["10. dakikada ekmeğin sıcaklığı −1,5 °C'dir.", "10. dakikada ekmek dakikada 1,5 °C ısınıyor.", "İlk 10 dakikada ekmek toplam 1,5 °C soğudu.", "10. dakikada ekmek dakikada yaklaşık 1,5 °C soğuyor."],
      a: 3,
      why: "T′ sıcaklığın değişim hızıdır, birimi °C/dk; negatif işaret soğumayı gösterir. A şıkkı en çekici yanlış: türev değerini sıcaklığın kendisi sanıyor." },
    { q: "Bir yüzme havuzuna dakikada 12 L su giriyor, havuzdan dakikada 15 L su çıkıyor. Havuzdaki su hacmi V için hangisi doğrudur?",
      opts: ["V′ = 3 L/dk ve hacim artıyor.", "V′ = −3 L/dk ve hacim azalıyor.", "V′ = 27 L/dk ve hacim artıyor.", "V′ = 0 olduğu için hacim sabit."],
      a: 1,
      why: "V′ = giriş − çıkış = 12 − 15 = −3 L/dk; hacim azalıyor. A şıkkı en çekici yanlış: çıkarmayı ters sırayla yapıp işareti kaybediyor." }
  ]
};
