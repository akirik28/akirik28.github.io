/* Kitpath not defteri · mc206 · 2.6 Reel ve Nominal GSYH
   Kaynak: College Board CED, Topic 2.6 (MEA-1.I, J). Blok türleri: /ap/_kit/defter.js başı.
   Hesap: Y1 (baz) tost 10×10 + kola 5×20 = 200 · Y2 nominal 12×11 + 6×20 = 252, reel (Y1 fiyatı) 10×11 + 5×20 = 210, deflatör 120. */
window.DEFTER = {
  slug: "mc206",
  amac: "Bu konu GSYH'nin iki yüzünü anlatıyor: ne kadar harcandığını gösteren nominal GSYH ve ne kadar üretildiğini gösteren reel GSYH. Baz yıl fiyatlarıyla reel GSYH'yi, GSYH deflatörünü ve nominalden reele geçişi hesaplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Nominal GSYH ve reel GSYH",
      kisa: "Nominal GSYH ne kadar harcandığını, reel GSYH ne kadar üretildiğini gösterir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💵", terim: "Nominal GDP", tr: "nominal GSYH", tanim: "Üretimi her yılın **kendi (cari) fiyatlarıyla** ölçer. Ne kadar ==harcandığını== gösterir; fiyat artışı da içindedir.", ornek: "Bu yıl üretilen malların bu yılki fiyatlarla toplam değeri." },
            { ikon: "📦", terim: "Real GDP", tr: "reel GSYH", tanim: "Üretimi **sabit (baz yıl) fiyatlarla** ölçer. Ne kadar ==üretildiğini== gösterir; genel fiyat düzeyindeki değişimin etkisi çıkarılmıştır.", ornek: "Bu yılın üretim miktarlarının, baz yılın fiyatlarıyla değeri." },
            { ikon: "📌", terim: "Base year", tr: "baz yıl", tanim: "Fiyatların sabit tutulduğu referans yıl. Baz yılda nominal GSYH = reel GSYH'dir ve fiyat endeksi 100'dür.", ornek: "Baz yıl Yıl 1 ise reel GSYH Yıl 1 fiyatlarıyla hesaplanır." }
          ] },
        { tip: "grafik", baslik: "Nominal ve reel GSYH zamanla ayrışır", xlabel: "Yıl", ylabel: "GSYH (milyar TL)", xmax: 7, ymax: 10,
          xticks: [{ v: 2, label: "Baz yıl" }],
          ogeler: [
            { id: "nom", tip: "egri", renk: 2, etiket: "Nominal GSYH", noktalar: [[0, 3.2], [1, 3.8], [2, 4.5], [3, 5.4], [4, 6.4], [5, 7.5]] },
            { id: "reel", tip: "egri", renk: 0, etiket: "Reel GSYH", noktalar: [[0, 3.9], [1, 4.2], [2, 4.5], [3, 4.8], [4, 5.1], [5, 5.4]], gizli: true },
            { id: "baz", tip: "nokta", renk: 1, x: 2, y: 4.5, etiket: "nominal = reel", kilavuz: true, gizli: true },
            { id: "fark", tip: "yazi", x: 4.3, y: 5.75, metin: "fiyat etkisi", gizli: true }
          ],
          durumlar: [
            { metin: "**Nominal GSYH:** her yılın kendi fiyatlarıyla. Hem üretim hem fiyat artışını içerdiği için hızlı yükselir." },
            { metin: "**Reel GSYH:** baz yılın sabit fiyatlarıyla. Yalnızca üretim miktarının artışını gösterir; daha yavaş yükselir.", goster: ["reel"] },
            { metin: "**Baz yılda** fiyat düzeyi 100'dür: nominal GSYH ile reel GSYH ==aynıdır==, eğriler kesişir.", goster: ["baz"] },
            { metin: "Baz yıldan sonra fiyatlar arttığı için nominal reelin ==üstüne== çıkar; fark fiyat artışının etkisidir. Baz yıldan önce nominal, reelin altındadır.", goster: ["fark"] }
          ] }
      ]
    },
    {
      baslik: "Fiyat mı arttı, üretim mi?",
      kisa: "Nominal GSYH artışı, üretimin arttığı anlamına gelmeyebilir.",
      bloklar: [
        { tip: "ornek", baslik: "Yalnızca tost üreten ülke", durum: "Yıl 1: 10 tost, tanesi 5 TL. Yıl 2: yine 10 tost, ama tanesi 6 TL. Baz yıl Yıl 1. Nominal ve reel GSYH nasıl değişti?",
          adimlar: ["Nominal GSYH(Yıl 1) = 10 × 5 = 50 TL.", "Nominal GSYH(Yıl 2) = 10 × 6 = 60 TL: %20 arttı.", "Reel GSYH(Yıl 2), Yıl 1 fiyatlarıyla = 10 × 5 = 50 TL.", "Reel GSYH 50 → 50: hiç değişmedi, çünkü üretilen tost sayısı aynı."],
          sonuc: "Nominal GSYH ==%20 arttı==, reel GSYH ==değişmedi==. Artışın tamamı fiyatlardan geldi." },
        { tip: "tuzak", metin: "Haberlerde \"GSYH büyüdü\" cümlesini duyunca hangi GSYH'nin kastedildiğine bak.", yanlis: "Nominal GSYH arttıysa ekonomi daha çok mal ve hizmet üretmiştir.", dogru: "Nominal GSYH fiyatlar yükselince de artar. Gerçek üretimdeki değişimi ==reel GSYH== gösterir." }
      ]
    },
    {
      baslik: "Reel GSYH'yi baz yıl fiyatlarıyla hesaplamak",
      kisa: "Reel GSYH = bu yılın miktarları × baz yılın fiyatları.",
      bloklar: [
        { tip: "tablo", baslik: "Tost ve kola üreten ekonomi (Yıl 1 baz yıl)", head: ["", "Yıl 1 (baz)", "Yıl 2"], rows: [
            ["Tost: fiyat × miktar", "10 × 10", "12 × 11"],
            ["Kola: fiyat × miktar", "5 × 20", "6 × 20"],
            ["Nominal GSYH (kendi yılının fiyatıyla)", "100 + 100 = 200", "132 + 120 = 252"],
            ["Reel GSYH (Yıl 1 fiyatlarıyla)", "200", "10×11 + 5×20 = 210"],
            ["GSYH deflatörü", "100", "252 ÷ 210 × 100 = 120"]
          ], vurgu: 3, not: "Reel GSYH'de Yıl 2'nin yalnızca miktarları kalır; fiyatlar Yıl 1'den alınır." },
        { tip: "ornek", baslik: "Yıl 2'nin reel GSYH'si ve büyümesi", durum: "Tablodaki ekonomide Yıl 2'nin reel GSYH'sini ve nominal ile reel büyümeyi bul.",
          adimlar: ["Reel GSYH(Yıl 2) = 10×11 + 5×20 = 110 + 100 = 210.", "Reel büyüme = (210 − 200) ÷ 200 × 100 = %5.", "Nominal büyüme = (252 − 200) ÷ 200 × 100 = %26.", "Fark fiyatlardan: deflatör 100 → 120, yani %20 enflasyon (1,05 × 1,20 = 1,26)."],
          sonuc: "Üretim ==%5== arttı; nominal GSYH ==%26== arttı. Aradaki fark fiyat artışıdır." },
        { tip: "not", metin: "Baz yıl fiyatlarını uzun süre sabit tutmak, fiyatı hızla düşen malların (ör. bilgisayar) üretim artışını fazla gösterebilir; reel GSYH büyümesi olduğundan yüksek çıkar. Bu yüzden istatistik kurumları pratikte baz yılı sık güncelleyen farklı yöntemler kullanır; AP'de baz yıl yöntemini bilmen yeter." }
      ]
    },
    {
      baslik: "GSYH deflatörü: nominalden reele köprü",
      kisa: "Deflatör = nominal ÷ reel × 100; nominali deflatöre bölünce reeli bulursun.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "GSYH deflatörü", alt: "*GDP deflator*" }, "=",
            { t: "Nominal GSYH" }, "÷",
            { t: "Reel GSYH" }, "×",
            { t: "100" }
          ], aciklama: "Aynı eşitlikten reel GSYH = nominal GSYH ÷ deflatör × 100 bulunur. Deflatör bir fiyat endeksidir; baz yılda 100'dür." },
        { tip: "ornek", baslik: "Nominalden reele geçiş", durum: "Nominal GSYH 840 milyar TL, GSYH deflatörü 120. Reel GSYH kaçtır?",
          adimlar: ["Reel GSYH = nominal GSYH ÷ deflatör × 100.", "840 ÷ 120 = 7.", "7 × 100 = 700.", "Kontrol: 840 ÷ 700 × 100 = 120 ✓."],
          sonuc: "Reel GSYH = ==700 milyar TL== (baz yıl fiyatlarıyla). Fiyatlar baz yıla göre %20 yüksek." },
        { tip: "tuzak", metin: "Deflatörün değeri, baz yıla göre fiyat düzeyini gösterir; baz yıl 100'dür.", yanlis: "Deflatör 120 ise fiyatlar %120 artmıştır.", dogru: "Deflatör 120 ise fiyat düzeyi baz yıldan ==%20 yüksektir== (120 − 100)." }
      ]
    },
    {
      baslik: "Büyümeyi nominalden okumak yanıltır",
      kisa: "Büyümeyi ölçmek için reel GSYH'nin yüzde değişimine bak.",
      bloklar: [
        { tip: "ornek", baslik: "Nominal %10 arttı, üretim?", durum: "Yıl 1 (baz): nominal GSYH 1000, deflatör 100. Yıl 2: nominal GSYH 1100, deflatör 110. Ekonomi büyüdü mü?",
          adimlar: ["Reel GSYH(Yıl 1) = 1000 ÷ 100 × 100 = 1000.", "Reel GSYH(Yıl 2) = 1100 ÷ 110 × 100 = 1000.", "Reel büyüme = (1000 − 1000) ÷ 1000 = %0.", "Nominal %10 arttı, fiyatlar da %10 arttı: üretim sabit."],
          sonuc: "Ekonomi ==büyümedi==. Nominal artışın tamamı enflasyondan geldi." },
        { tip: "ikili", sol: { ikon: "💵", baslik: "*Nominal GDP*", maddeler: ["Harcamayı gösterir", "Fiyat artışı içindedir"] },
          sag: { ikon: "📦", baslik: "*Real GDP*", maddeler: ["Üretimi gösterir", "Büyümeyi bununla ölçeriz"] },
          oyun: [
            { metin: "Bu yıl ülkede toplam harcama 1100 milyar TL oldu.", cevap: "sol", neden: "Güncel fiyatlarla harcama: nominal." },
            { metin: "Baz yıl fiyatlarıyla ölçülen üretim %3 arttı.", cevap: "sag", neden: "Sabit fiyatla üretim: reel." },
            { metin: "Enflasyonlu bir yılda üretim düşerken bile artabilir.", cevap: "sol", neden: "Fiyat artışını içerdiği için: nominal." },
            { metin: "Bir ülkenin gerçekten daha çok mal ve hizmet ürettiğini gösterir.", cevap: "sag", neden: "Fiyat etkisinden arındırılmış: reel." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Nominal GDP* güncel fiyatlarla ölçülür ve ne kadar harcandığını gösterir.",
            "*Real GDP* sabit (baz yıl) fiyatlarla ölçülür ve ne kadar üretildiğini gösterir.",
            "Reel GSYH = bu yılın miktarları × baz yılın fiyatları. Baz yılda nominal = reel, deflatör 100.",
            "GSYH deflatörü = nominal ÷ reel × 100; reel = nominal ÷ deflatör × 100.",
            "Deflatör 120 demek, fiyat düzeyinin baz yıldan %20 yüksek olduğunu söyler.",
            "Nominal GSYH artışı hem üretimden hem fiyattan gelir; üretimi anlamak için reel GSYH'ye bak.",
            "Baz yıl yöntemi büyümeyi fazla gösterebilir; kurumlar farklı yöntemler kullanır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Tabloda nominal GSYH ve GSYH deflatörü verilmiştir (Yıl 1 baz yıldır). Yıl 2'nin reel GSYH'si kaçtır?",
      fig: { type: "table", caption: "Bir ekonomi (milyar TL)", head: ["Yıl", "Nominal GSYH", "GSYH deflatörü"], rows: [["Yıl 1 (baz)", 500, 100], ["Yıl 2", 660, 110]] },
      opts: ["660", "600", "726", "550"],
      a: 1,
      why: "Reel GSYH = nominal ÷ deflatör × 100 = 660 ÷ 110 × 100 = 600. 726, nominal değeri deflatörle çarpmaktır; 550 ise Yıl 1 değerine fiyat artışını uygulamaktır." },
    { q: "Bir ekonomide nominal GSYH %8, fiyat düzeyi yaklaşık %5 arttıysa reel GSYH yaklaşık yüzde kaç artmıştır?",
      opts: ["%13", "%8", "%5", "%3"],
      a: 3,
      why: "Reel büyüme ≈ nominal büyüme − enflasyon = 8 − 5 = %3. %8 şıkkı en çekici yanlış: nominal büyümeyi reel büyüme sanır." },
    { q: "Yalnızca tost üretilen bir ekonomide Yıl 1'de 100 tost 5 TL'den, Yıl 2'de 100 tost 8 TL'den satılıyor. Baz yıl Yıl 1'dir. Hangisi doğrudur?",
      opts: ["Nominal GSYH %60 artar, reel GSYH değişmez", "Nominal GSYH %60 artar, reel GSYH %60 artar", "Nominal GSYH değişmez, reel GSYH %60 artar", "Nominal GSYH %60 artar, reel GSYH %60 azalır"],
      a: 0,
      why: "Nominal: 500 → 800 (%60). Reel (Yıl 1 fiyatıyla): 100 × 5 = 500 → 500; üretim miktarı değişmediği için reel GSYH değişmez. B şıkkı en çekici yanlış: nominal artışı üretim artışı sanır." },
    { q: "Baz yıl için aşağıdakilerden hangisi doğrudur?",
      opts: ["Nominal GSYH reel GSYH'den büyüktür", "GSYH deflatörü 0'dır", "Nominal GSYH reel GSYH'ye eşittir ve deflatör 100'dür", "Reel GSYH hesaplanamaz"],
      a: 2,
      why: "Reel GSYH baz yıl fiyatlarıyla hesaplandığı için baz yılda nominal = reel olur; deflatör 100'dür. A şıkkı baz yıldan sonraki bir yılda geçerli olabilir, baz yılda değil." },
    { q: "Tabloya göre reel GSYH hakkında ne söylenebilir? (Yıl 1 baz yıldır.)",
      fig: { type: "table", caption: "Bir ekonomi", head: ["Yıl", "Nominal GSYH", "GSYH deflatörü"], rows: [["Yıl 1 (baz)", 400, 100], ["Yıl 2", 500, 125], ["Yıl 3", 600, 150]] },
      opts: ["Her yıl %25 büyümüştür", "Her yıl azalmıştır", "Üç yılda da 400'dür; nominal artışın tamamı fiyat artışından gelir", "Yıl 1'den sonra iki katına çıkmıştır"],
      a: 2,
      why: "Reel GSYH: 400 ÷ 100 × 100 = 400; 500 ÷ 125 × 100 = 400; 600 ÷ 150 × 100 = 400. Üretim değişmedi. A şıkkı en çekici yanlış: nominal %25'lik artışı reel büyüme sanır." }
  ]
};
