/* Kitpath not defteri · st407 · 4.8 Rastgele Değişkenin Ortalaması ve Standart Sapması
   Kaynak: AP Statistics CED Topic 4.8 (video kiti yok). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st407",
  amac: "Bu konu bir *discrete random variable*'ın merkezini ve yayılımını anlatıyor. *Expected value* (μ_X) ile *standard deviation* (σ_X) formüllerini, tablodan nasıl hesaplandıklarını ve bağlamla nasıl yorumlandıklarını öğreneceksin.",
  bolumler: [
    {
      baslik: "*Expected value*: uzun vadeli ortalama",
      kisa: "Beklenen değer, rastgele süreci çok kez tekrarlarsan ortalamanın yaklaştığı sayıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Mean of a random variable", tr: "rastgele değişkenin ortalaması", tanim: "Her değeri kendi olasılığıyla ağırlıklandırıp toplamak. Adı ==beklenen değer== (*expected value*), simgesi μ_X.", ornek: "Öğrenci başına tost sayısı için μ_X = 1,6." },
            { ikon: "🔁", terim: "Long-run average", tr: "uzun vadeli ortalama", tanim: "Süreç ==çok sayıda== tekrarlanınca gerçek ortalamaların yaklaştığı değer. Tek bir denemeyi tahmin etmez.", ornek: "Binlerce öğrenciye sorarsan ortalama 1,6 tosta yaklaşır." }
          ] },
        { tip: "formul", parcalar: [
            { t: "μ_X", alt: "beklenen değer" }, "=",
            { t: "Σ x · P(x)", alt: "her değer × kendi olasılığı, hepsi toplanır" }
          ], aciklama: "Bu bir ağırlıklı ortalamadır: olasılığı büyük değer ortalamaya daha çok çeker." }
      ]
    },
    {
      baslik: "Ortalamayı tablodan hesapla",
      kisa: "Tabloya x · P(x) sütunu ekle, sütunu topla.",
      bloklar: [
        { tip: "tablo", baslik: "Tost sayısı X: x · P(x) sütunu", head: ["x", "P(x)", "x · P(x)"], rows: [
            ["0", "0,10", "0,00"],
            ["1", "0,40", "0,40"],
            ["2", "0,30", "0,60"],
            ["3", "0,20", "0,60"],
            ["Toplam", "1,00", "1,60"]
          ], vurgu: 4, not: "μ_X = 0,00 + 0,40 + 0,60 + 0,60 = 1,6 tost." },
        { tip: "ornek", baslik: "Sütunları ver, ortalamayı bul", durum: "Ece haftada kaç film izlediğini kaydetti. Rastgele bir hafta için X: P(0) = 0,2; P(1) = 0,5; P(2) = 0,2; P(3) = 0,1. μ_X kaçtır?",
          adimlar: ["0 × 0,2 = 0,0", "1 × 0,5 = 0,5", "2 × 0,2 = 0,4", "3 × 0,1 = 0,3", "Topla: 0,0 + 0,5 + 0,4 + 0,3 = 1,2."],
          sonuc: "μ_X = 1,2 film. Çok sayıda hafta izlersen haftalık ortalama 1,2'ye yaklaşır." },
        { tip: "tuzak", baslik: "Ortalama mümkün bir değer olmak zorunda değil", metin: "1,6 tost diye bir şey yok; ama beklenen değer bir ==uzun vadeli ortalamadır==, tek bir öğrencinin alacağı sayı değil.", yanlis: "Değerlerin düz ortalaması alınır: (0 + 1 + 2 + 3) ÷ 4 = 1,5.", dogru: "Olasılıkları ağırlık olarak kullan: Σ x · P(x) = 1,6. Düz ortalama ancak bütün olasılıklar eşitse doğru çıkar." }
      ]
    },
    {
      baslik: "Dağılımda μ ve σ nerede?",
      kisa: "μ dağılımın denge noktasıdır; σ değerlerin μ'den tipik uzaklığıdır.",
      bloklar: [
        { tip: "grafik", baslik: "Tost dağılımı: ortalama ve yayılma", xlabel: "x (tost sayısı)", ylabel: "P(x)", xmax: 5, ymax: 6,
          xticks: [{ v: 1, label: "0" }, { v: 2, label: "1" }, { v: 3, label: "2" }, { v: 4, label: "3" }],
          yticks: [{ v: 1, label: "0,1" }, { v: 2, label: "0,2" }, { v: 3, label: "0,3" }, { v: 4, label: "0,4" }],
          ogeler: [
            { id: "b0", tip: "alan", renk: 1, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b1", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "b3", tip: "alan", renk: 1, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "mu", tip: "cizgi", renk: 2, from: [2.6, 0], to: [2.6, 5.4], etiket: "μ = 1,6", gizli: true },
            { id: "sg", tip: "cizgi", renk: 3, from: [1.68, 4.9], to: [3.52, 4.9], etiket: "μ ± σ", gizli: true },
            { id: "s1", tip: "cizgi", renk: 3, kesik: true, from: [1.68, 0], to: [1.68, 4.9], gizli: true },
            { id: "s2", tip: "cizgi", renk: 3, kesik: true, from: [3.52, 0], to: [3.52, 4.9], gizli: true },
            { id: "tx", tip: "yazi", x: 3.6, y: 5.6, metin: "σ ≈ 0,92: tipik uzaklık", gizli: true },
            { id: "nt", tip: "yazi", x: 3.1, y: 5.6, metin: "1,6 tost yok ama ortalama olabilir", gizli: true }
          ],
          durumlar: [
            { metin: "Önce dağılım: her çubuğun yüksekliği o değerin olasılığı.", set: { b0: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 1], [0.65, 1]] }, b1: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 4], [1.65, 4]] }, b2: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 3], [2.65, 3]] }, b3: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 2], [3.65, 2]] } } },
            { metin: "Çubukları ağırlık gibi düşün: dağılım ==μ = 1,6=='da dengede durur.", goster: ["mu"] },
            { metin: "Standart sapma ==σ ≈ 0,92==: değerlerin μ'den tipik uzaklığı. μ ± σ aralığını gör.", goster: ["sg", "s1", "s2", "tx"] },
            { metin: "μ çubuklardan birinin üstüne denk gelmek zorunda değil: 1,6 tost yok, ama uzun vadeli ortalama olabilir.", gizle: ["tx"], goster: ["nt"] }
          ] },
        { tip: "not", metin: "Dağılım sağa ya da sola yayıldıkça σ büyür; değerler μ çevresinde toplandıkça küçülür. Hesabını bir sonraki başlıkta yapacağız." }
      ]
    },
    {
      baslik: "*Standard deviation*: sapmaların kareleri",
      kisa: "Her değerin μ'den sapmasının karesini olasılığıyla çarp, topla, kök al.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "σ_X", alt: "standart sapma" }, "=",
            { t: "√ Σ (x − μ_X)² · P(x)", alt: "sapmanın karesi × olasılık, topla, kök al" }
          ], aciklama: "Kökün içindeki toplam σ² (varyans). Önce varyansı bul, sonra karekök al." },
        { tip: "tablo", baslik: "Tost sayısı: σ'yı adım adım bul (μ = 1,6)", head: ["x", "x − μ", "(x − μ)²", "P(x)", "(x − μ)² · P(x)"], rows: [
            ["0", "−1,6", "2,56", "0,10", "0,256"],
            ["1", "−0,6", "0,36", "0,40", "0,144"],
            ["2", "0,4", "0,16", "0,30", "0,048"],
            ["3", "1,4", "1,96", "0,20", "0,392"],
            ["Toplam", "", "", "1,00", "0,840"]
          ], vurgu: 4, not: "σ² = 0,84; σ = √0,84 ≈ 0,92 tost." },
        { tip: "ornek", baslik: "Hayır çarşısı çarkı: ödül X (TL)", durum: "Bir sınıfın çarkında ödül X: 0 TL (P = 0,4), 10 TL (0,3), 20 TL (0,2), 40 TL (0,1). μ_X ve σ_X kaçtır?",
          adimlar: ["μ_X = 0(0,4) + 10(0,3) + 20(0,2) + 40(0,1) = 0 + 3 + 4 + 4 = 11 TL.", "Sapmalar: −11, −1, 9, 29. Kareleri: 121, 1, 81, 841.", "Olasılıkla çarp: 121(0,4) = 48,4; 1(0,3) = 0,3; 81(0,2) = 16,2; 841(0,1) = 84,1.", "σ² = 48,4 + 0,3 + 16,2 + 84,1 = 149; σ = √149 ≈ 12,21 TL."],
          sonuc: "μ_X = 11 TL, σ_X ≈ 12,21 TL. Ödüller büyük oranda dağılıyor: σ ortalamadan bile büyük." }
      ]
    },
    {
      baslik: "Yorumu bağlamla yaz",
      kisa: "μ_X dağılımın parametresidir; yorumda \"uzun vadede\" ve bağlam olmalı.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🎯", baslik: "μ_X ve σ_X", maddeler: ["Dağılımdan hesaplanır (olasılıklarla)", "Sabit bir sayıdır", "Parametre: gerçek dağılımı tarif eder"] },
          sag: { ikon: "📝", baslik: "x̄ ve s", maddeler: ["Gerçek bir örneklemden hesaplanır", "Örneklemden örnekleme değişir", "İstatistik: örneğe aittir"] },
          oyun: [
            { metin: "Tablodaki olasılıklardan bulunan beklenen tost sayısı: 1,6.", cevap: "sol", neden: "Dağılımdan hesaplandı: μ_X." },
            { metin: "20 öğrenciye sorulup bulunan ortalama: 1,45 tost.", cevap: "sag", neden: "Gerçek örneklemden geldi: x̄." },
            { metin: "Dağılımın olasılıklarından bulunan standart sapma: 0,92.", cevap: "sol", neden: "Dağılımın yayılımı: σ_X." },
            { metin: "Bir sınıftan toplanan verinin standart sapması: 1,1.", cevap: "sag", neden: "Örneklemden hesaplandı: s." }
          ] },
        { tip: "ornek", baslik: "Sınav cevabı gibi yorum yaz", durum: "Tost dağılımında μ_X = 1,6 ve σ_X ≈ 0,92. Her ikisini bağlamla yorumla.",
          adimlar: ["μ_X yorumu: \"Kantinde rastgele seçilen çok sayıda öğrenci için ortalama tost sayısı yaklaşık 1,6'ya yaklaşır.\"", "σ_X yorumu: \"Bir öğrencinin aldığı tost sayısı, ortalama 1,6'dan tipik olarak yaklaşık 0,92 tost uzaktadır.\"", "Anahtar sözcükler: \"uzun vadede / çok sayıda\" ve \"tipik olarak\"."],
          sonuc: "Yorumda bağlamı (tost, öğrenci) ve \"uzun vadede\" ifadesini yaz; yalnızca \"ortalama 1,6\" demek eksik kalır." },
        { tip: "tuzak", baslik: "σ'yı yanlış yorumlamak", metin: "σ_X ==tipik uzaklıktır==; en küçük ile en büyük değer arasındaki fark ya da kesin sınır değildir.", yanlis: "σ_X = 0,92 demek, tost sayısı 1,6 ± 0,92 aralığının dışına asla çıkmaz.", dogru: "Değerler ortalamadan tipik olarak yaklaşık 0,92 uzaktadır; bazıları daha uzak (0 ve 3 gibi) olabilir." }
      ]
    },
    {
      baslik: "Oyunun beklenen kazancı",
      kisa: "Ortalama net kazanç = beklenen ödül − bilet ücreti; eksi çıkarsa oyun aleyhine.",
      bloklar: [
        { tip: "tablo", baslik: "Çark oyunu: oyuncunun net kazancı (bilet 12 TL)", head: ["Ödül (TL)", "Net kazanç (TL)", "P"], rows: [
            ["0", "−12", "0,4"],
            ["10", "−2", "0,3"],
            ["20", "8", "0,2"],
            ["40", "28", "0,1"]
          ], not: "Net kazanç = ödül − 12." },
        { tip: "ornek", baslik: "Çark kimin lehine?", durum: "Bilet 12 TL; ödül dağılımı yukarıdaki gibi (μ ödül = 11 TL). Oyuncunun uzun vadeli ortalama net kazancı kaçtır?",
          adimlar: ["Ortalama ödül: 11 TL.", "Net kazanç ödülden 12 TL eksiktir; ortalaması da 12 TL eksik olur: 11 − 12 = −1 TL.", "Doğrudan kontrol: (−12)(0,4) + (−2)(0,3) + 8(0,2) + 28(0,1) = −4,8 − 0,6 + 1,6 + 2,8 = −1,0 TL."],
          sonuc: "Oyuncu çevirme başına ortalama 1 TL kaybeder; sınıf kulübü ortalama 1 TL kazanır. Bilet 11 TL olsaydı oyun \"adil\" (ortalama net kazanç 0) olurdu." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Beklenen değer μ_X = Σ x · P(x): değerlerin olasılıkla ağırlıklı ortalaması.",
            "μ_X uzun vadeli ortalamadır; mümkün bir değer olmak zorunda değildir (1,6 tost).",
            "Düz ortalama ((0 + 1 + 2 + 3) ÷ 4) yanlıştır; olasılıklar ağırlık olmalı.",
            "σ_X = √Σ (x − μ_X)² · P(x); önce varyans σ², sonra karekök.",
            "Tablo yöntemi: x · P(x) sütununu, sonra (x − μ)² · P(x) sütununu topla.",
            "Yorum: \"uzun vadede / çok sayıda\" ortalama; σ_X ortalamadan tipik uzaklık, bağlamla yaz.",
            "μ_X ve σ_X dağılımın parametreleridir; x̄ ve s örneklemin istatistikleridir.",
            "Oyunda ortalama net kazanç = beklenen ödül − ücret; sıfır ise oyun adildir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Ece'nin haftada izlediği film sayısı X'in dağılımı tabloda verilmiştir. μ_X kaçtır?",
      opts: ["1,5", "1,2", "1,0", "0,25"],
      a: 1,
      fig: { type: "table", head: ["x", "0", "1", "2", "3"], rows: [["P(x)", "0,2", "0,5", "0,2", "0,1"]], caption: "Haftalık film sayısı dağılımı." },
      why: "μ_X = 0(0,2) + 1(0,5) + 2(0,2) + 3(0,1) = 0 + 0,5 + 0,4 + 0,3 = 1,2. En çekici yanlış şık A: değerlerin düz ortalaması (0 + 1 + 2 + 3) ÷ 4 = 1,5; olasılıkları ağırlık olarak kullanmak gerekir." },
    { q: "Bir hayır çarşısı çarkında ödül X için μ_X = 11 TL ve σ_X ≈ 12 TL bulunmuştur. Aşağıdaki yorumlardan hangisi en doğrudur?",
      opts: ["Çarkı her çevirişte tam 11 TL ödül alınır.", "Ödüllerin yarısı 11 TL'nin altında, yarısı üstündedir.", "Ödül hiçbir zaman 11 TL'den 12 TL'den fazla uzak olmaz.", "Çarkı çok sayıda çevirişte ortalama ödül yaklaşık 11 TL'ye yaklaşır."],
      a: 3, why: "μ_X uzun vadeli ortalamadır: çevirme sayısı arttıkça ortalama ödül 11 TL'ye yaklaşır. A tek bir denemeyi bildiğini söylüyor; B ortalamayı ortanca ile karıştırıyor; C ise σ'yı kesin sınır sanıyor (σ tipik uzaklıktır). En çekici yanlış şık C." },
    { q: "Bir kermesin günlük kazancı X, eşit olasılıkla (0,5 ve 0,5) 100 TL ya da 200 TL'dir. σ_X kaçtır?",
      opts: ["50 TL", "100 TL", "150 TL", "2500 TL"],
      a: 0, why: "μ_X = 100(0,5) + 200(0,5) = 150. Sapmalar −50 ve +50; kareleri 2500 ve 2500. σ² = 2500(0,5) + 2500(0,5) = 2500; σ = √2500 = 50 TL. D şıkkı σ² değeridir (karekök alınmamış), en çekici yanlış şıktır; C ise μ_X'tir." },
    { q: "A ve B dağılımları aynı üç değeri (1, 2, 3) alıyor. Çubuk grafik olasılıkları gösteriyor. Hangisi doğrudur?",
      opts: ["A'nın standart sapması B'ninkinden büyüktür.", "A ve B'nin ortalamaları farklıdır.", "İkisinin ortalaması aynıdır; B'nin standart sapması daha büyüktür.", "İkisinin de standart sapması aynıdır."],
      a: 2,
      fig: { type: "bar", cats: ["1", "2", "3"], series: [{ name: "Dağılım A", values: [0.2, 0.6, 0.2] }, { name: "Dağılım B", values: [0.4, 0.2, 0.4] }], ylabel: "P(x)" },
      why: "İkisi de 2 etrafında simetrik, yani μ = 2. A: σ² = 0,2(1) + 0,2(1) = 0,4. B: σ² = 0,4(1) + 0,4(1) = 0,8. B'nin olasılığı uçlarda, ortalamadan uzakta toplandığı için yayılımı daha büyük. A şıkkı ters yöne gidiyor: ortada yığılan A daha az yayılmış." },
    { q: "Bir kulüp standında bilet 6 TL. Zar atılıyor: 6 gelirse 24 TL ödül, değilse ödül yok. Oyuncunun uzun vadede çevirme başına ortalama net kazancı kaçtır?",
      opts: ["+4 TL", "+2 TL", "−2 TL", "−4 TL"],
      a: 2, why: "Ortalama ödül = 24(1/6) + 0(5/6) = 4 TL. Net kazanç = ödül − bilet; ortalaması 4 − 6 = −2 TL. B şıkkı işareti ters çevirir; A ise bileti hiç çıkarmaz (ortalama ödül, net kazanç değil). En çekici yanlış şık A." }
  ]
};
