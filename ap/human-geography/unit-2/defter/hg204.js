/* Kitora not defteri · hg204 · Nüfus Dinamikleri (Population Dynamics)
   Kaynak: AP HuG CED Topic 2.4 (IMP-2.A.1, 2.A.2, 2.A.3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg204",
  amac: "Bu konu nüfusun neden artıp azaldığını anlatıyor. Doğurganlık, ölüm ve göçü; *CBR*, *CDR*, *RNI*, *TFR*, *IMR* oranlarını hesaplamayı ve nüfusun ikiye katlanma süresini öğreneceksin.",
  bolumler: [
    {
      baslik: "Nüfus değişiminin üç etkeni",
      kisa: "Nüfus doğurganlık, ölüm ve göçle artar ya da azalır.",
      bloklar: [
        { tip: "harita", merkez: "Nüfus değişimi", dallar: [
            { baslik: "*Fertility* (doğurganlık)", alt: "Doğum sayısı: nüfusu artırır" },
            { baslik: "*Mortality* (ölüm)", alt: "Ölüm sayısı: nüfusu azaltır" },
            { baslik: "*Migration* (göç)", alt: "Gelenler artırır, gidenler azaltır" }
          ] },
        { tip: "formul", parcalar: [
            { t: "Doğal artış", alt: "doğum − ölüm" }, "+",
            { t: "Net göç", alt: "gelen − giden" }, "=",
            { t: "Nüfus değişimi" }
          ], aciklama: "Doğal artış nüfusun kendi içinden gelen değişimdir; göç ise dışarıdan gelen ya da dışarı giden kısmı ekler." }
      ]
    },
    {
      baslik: "Doğum ve ölüm hızı: *CBR* ve *CDR*",
      kisa: "*CBR* ve *CDR*, her 1.000 kişi için yıllık doğum ve ölüm sayısıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👶", terim: "CBR (Crude Birth Rate)", tr: "ham doğum hızı", tanim: "Bir yılda her 1.000 kişiye düşen canlı doğum sayısı. \"Ham\", yaş ve cinsiyete göre ayrım yapılmadığı anlamına gelir.", ornek: "CBR 20: 1.000 kişide yılda 20 doğum." },
            { ikon: "🕯️", terim: "CDR (Crude Death Rate)", tr: "ham ölüm hızı", tanim: "Bir yılda her 1.000 kişiye düşen ölüm sayısı.", ornek: "CDR 8: 1.000 kişide yılda 8 ölüm." }
          ] },
        { tip: "formul", parcalar: [
            { t: "Doğum sayısı" }, "÷",
            { t: "Toplam nüfus" }, "×",
            { t: "1.000" }, "=",
            { t: "CBR", alt: "binde" }
          ], aciklama: "*CDR* aynı mantıkla bulunur: ölüm sayısı ÷ toplam nüfus × 1.000." },
        { tip: "ornek", baslik: "Bir ilçenin doğum ve ölüm hızı", durum: "Bir ilçenin nüfusu 50.000. Bir yılda 1.000 doğum ve 400 ölüm oluyor. *CBR* ve *CDR* kaçtır?",
          adimlar: ["*CBR* = 1.000 ÷ 50.000 × 1.000 = 20.", "*CDR* = 400 ÷ 50.000 × 1.000 = 8."],
          sonuc: "*CBR* ==20‰==, *CDR* ==8‰==. İlçe her 1.000 kişide yılda 20 doğum ve 8 ölüm görüyor." },
        { tip: "tuzak", metin: "Yüksek *CBR*'ın hızlı büyüme demek olduğunu sanmak.", yanlis: "*CBR*'ı en yüksek olan ülke en hızlı büyür.", dogru: "Büyüme *CBR* ile *CDR* farkına bağlıdır. *CBR* 40, *CDR* 36 ise fark yalnızca 4‰'dür: yıllık artış %0,4." }
      ]
    },
    {
      baslik: "Doğal artış oranı: *RNI*",
      kisa: "*RNI*, doğum ile ölüm hızı farkının yüzdeye çevrilmiş halidir ve göçü içermez.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "CBR − CDR", alt: "binde" }, "÷",
            { t: "10" }, "=",
            { t: "RNI (%)", alt: "yıllık doğal artış" }
          ], aciklama: "*CBR* ve *CDR* binde (‰), *RNI* ise yüzde (%) verilir; bu yüzden 10'a bölünür. *RNI* (*rate of natural increase*) göçü hesaba katmaz. Negatifse nüfus doğal olarak azalıyor demektir." },
        { tip: "ornek", baslik: "İki ülke, iki *RNI*", durum: "A ülkesinde *CBR* 20 ve *CDR* 8. B ülkesinde *CBR* 9 ve *CDR* 11. İkisinin *RNI* değerini bul.",
          adimlar: ["A: 20 − 8 = 12‰; 12 ÷ 10 = %1,2.", "B: 9 − 11 = −2‰; −2 ÷ 10 = −%0,2."],
          sonuc: "A'nın doğal artışı ==%1,2==; B'nin ==−%0,2==. Göç yoksa A büyür, B küçülür." },
        { tip: "tuzak", metin: "Sonucu \"yüzde\" yazıp bırakmak.", yanlis: "*CBR* 20 ve *CDR* 8 ise *RNI* %12'dir.", dogru: "20 − 8 = 12 ==binde==. Yüzdeye çevirmek için 10'a bölünür: ==%1,2==." }
      ]
    },
    {
      baslik: "İkiye katlanma süresi",
      kisa: "Nüfusun iki katına çıkma süresi yaklaşık 70 ÷ *RNI* yıldır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "70" }, "÷",
            { t: "RNI (%)" }, "=",
            { t: "İkiye katlanma süresi", alt: "yıl" }
          ], aciklama: "Buna 70 kuralı denir (*doubling time*). *RNI*'nın sabit kaldığını varsayar; yaklaşık bir sonuç verir." },
        { tip: "grafik", baslik: "*RNI* arttıkça süre kısalır", xlabel: "RNI (%)", ylabel: "İkiye katlanma süresi (yıl)", xmax: 6, ymax: 15,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          yticks: [{ v: 3.5, label: "35" }, { v: 7, label: "70" }, { v: 14, label: "140" }],
          ogeler: [
            { id: "sure", tip: "egri", renk: 0, etiket: "70 ÷ RNI", noktalar: [[0.5, 14], [0.6, 11.67], [0.75, 9.33], [1, 7], [1.25, 5.6], [1.5, 4.67], [2, 3.5], [2.5, 2.8], [3, 2.33], [4, 1.75], [5, 1.4]] },
            { id: "p1", tip: "nokta", x: 1, y: 7, etiket: "%1 → 70 yıl", kilavuz: true, gizli: true },
            { id: "p2", tip: "nokta", x: 2, y: 3.5, etiket: "%2 → 35 yıl", kilavuz: true, gizli: true },
            { id: "p05", tip: "nokta", x: 0.5, y: 14, etiket: "%0,5 → 140 yıl", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Süre = 70 ÷ *RNI*. *RNI* büyüdükçe süre hızla kısalır (eksendeki her çizgi 10 yıldır)." },
            { metin: "*RNI* %1 ise 70 ÷ 1 = ==70 yıl==.", goster: ["p1"] },
            { metin: "*RNI* iki katına çıkıp %2 olursa süre yarıya iner: 70 ÷ 2 = ==35 yıl==.", goster: ["p2"] },
            { metin: "*RNI* %0,5 ise 70 ÷ 0,5 = ==140 yıl==. Yavaş büyüyen nüfus çok uzun sürede iki katına çıkar.", goster: ["p05"] }
          ] },
        { tip: "ornek", baslik: "*CBR*'dan ikiye katlanmaya", durum: "X ülkesinde *CBR* 38 ve *CDR* 10. Nüfus 8 milyon, göç yok. Nüfus kaç yılda 16 milyona çıkar?",
          adimlar: ["*RNI* = (38 − 10) ÷ 10 = %2,8.", "Süre = 70 ÷ 2,8 = 25 yıl."],
          sonuc: "Nüfus yaklaşık ==25 yılda== 8 milyondan 16 milyona çıkar." }
      ]
    },
    {
      baslik: "Doğurganlık ve ölüm göstergeleri: *TFR*, *IMR*",
      kisa: "*TFR* kadın başına çocuk sayısı, *IMR* bin doğumda bebek ölümüdür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👩‍👧", terim: "TFR (Total Fertility Rate)", tr: "toplam doğurganlık hızı", tanim: "Bir kadının doğurganlık çağı boyunca doğuracağı ortalama çocuk sayısı. Yenileme düzeyi (*replacement level*) yaklaşık 2,1'dir; altında göç olmazsa nüfus zamanla azalır.", ornek: "TFR 1,6: yenileme düzeyinin altında." },
            { ikon: "🍼", terim: "IMR (Infant Mortality Rate)", tr: "bebek ölüm hızı", tanim: "Bir yaşını doldurmadan ölen bebek sayısının, 1.000 canlı doğuma oranı. Sağlık hizmetlerinin kalitesini gösterir.", ornek: "IMR 15: 1.000 doğumda 15 bebek ölümü." },
            { ikon: "⏳", terim: "Life expectancy", tr: "yaşam beklentisi", tanim: "Bir bebeğin doğumda ortalama yaşayacağı yıl sayısı; sağlık, beslenme ve gelirle artar.", ornek: "Japonya'da yüksek, savaş yaşayan ülkelerde düşüktür." }
          ] },
        { tip: "ornek", baslik: "*IMR* hesabı ve *TFR* yorumu", durum: "Bir ülkede yılda 4.000 canlı doğum olurken 60 bebek ilk yaşını doldurmadan ölüyor. Aynı ülkenin *TFR* değeri 1,6.",
          adimlar: ["*IMR* = 60 ÷ 4.000 × 1.000 = 15.", "*TFR* 1,6 < 2,1: kadınlar kendilerini yenileyecek kadar çocuk doğurmuyor."],
          sonuc: "*IMR* ==15== (düşük: gelişmiş sağlık hizmeti). *TFR* yenileme düzeyinin altında olduğu için göç yoksa nüfus zamanla azalır." }
      ]
    },
    {
      baslik: "Göç ve toplam büyüme",
      kisa: "Toplam büyüme, *RNI* ile net göç oranının toplamıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Büyüme oranı (%)" }, "=",
            { t: "RNI (%)" }, "+",
            { t: "Net göç (‰) ÷ 10" }
          ], aciklama: "Net göç = göç alan − göç veren; her 1.000 kişi için verilir. Göç alan ülkede artı, göç veren ülkede eksi işaretlidir." },
        { tip: "ornek", baslik: "Göç alan ve göç veren ülke", durum: "A ülkesi: *CBR* 12, *CDR* 8, net göç +6‰ (göç alıyor). B ülkesi: *CBR* 30, *CDR* 10, net göç −8‰ (göç veriyor). İkisinin toplam büyüme oranını bul.",
          adimlar: ["A: *RNI* = (12 − 8) ÷ 10 = %0,4; göç = 6 ÷ 10 = %0,6; toplam %1,0.", "B: *RNI* = (30 − 10) ÷ 10 = %2,0; göç = −8 ÷ 10 = −%0,8; toplam %1,2."],
          sonuc: "A'nın büyümesinin %0,6'sı göçten gelir (yarısından fazlası); B göç vererek büyümesinin bir kısmını kaybeder: ==%2,0 → %1,2==." }
      ]
    },
    {
      baslik: "Oranları ne değiştirir?",
      kisa: "Sosyal, kültürel, siyasi ve ekonomik faktörler doğurganlığı, ölümü ve göçü etkiler.",
      bloklar: [
        { tip: "tablo", baslik: "Faktörlerin etkisi", head: ["Faktör", "Doğurganlık", "Ölüm", "Göç"], rows: [
            ["Sosyal", "Kız çocuklarının eğitimi ve kadınların çalışması doğurganlığı düşürür", "Sağlık eğitimi ve bilinç ölümü azaltır", "Aile ve toplum bağları göçü yönlendirir"],
            ["Kültürel", "Evlilik yaşı, aile büyüklüğü beklentisi ve gelenekler çocuk sayısını belirler", "Beslenme ve bakım alışkanlıkları ömrü etkiler", "Aynı kültürden gruplara göç eğilimi"],
            ["Siyasi", "Doğum teşvik ya da sınırlama politikaları", "Savaş ölümü artırır; sağlık yatırımı azaltır", "Savaş ve baskı zorunlu göç doğurur"],
            ["Ekonomik", "Gelir ve kentleşme arttıkça çocuk sayısı genellikle düşer", "Gelir, beslenme ve sağlık harcaması ölümü azaltır", "İş fırsatları göçü çeker"],
            ["Çevresel", "Kıtlık doğurganlığı düşürebilir", "Kuraklık, afet ve salgın ölümü artırır", "Afet ve iklim koşulları göçe iter"]
          ] },
        { tip: "ikili", sol: { ikon: "📉", baslik: "Doğurganlığı düşüren", maddeler: ["Çocuğun maliyetinin artması", "Kadınların eğitim ve iş imkânı"] },
          sag: { ikon: "❤️", baslik: "Ölüm oranını düşüren", maddeler: ["Sağlık hizmetleri ve aşı", "Temiz su ve beslenme"] },
          oyun: [
            { metin: "Kız çocuklarının okula gitme oranı artıyor.", cevap: "sol", neden: "Eğitim, evlilik yaşını ve çocuk sayısını etkiler." },
            { metin: "Aşı kampanyaları ve temiz içme suyu yaygınlaşıyor.", cevap: "sag", neden: "Hastalıktan ölümler azalır." },
            { metin: "Kentleşme ve çocuk bakımının pahalılaşması.", cevap: "sol", neden: "Çocuğun maliyeti artar, çocuk sayısı azalır." },
            { metin: "Köylere yeni sağlık merkezleri açılıyor.", cevap: "sag", neden: "Sağlık erişimi ölümü düşürür." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Nüfus değişimi = doğal artış (doğum − ölüm) + net göç; üç etken: *fertility*, *mortality*, *migration*.",
            "*CBR* = doğum ÷ nüfus × 1.000; *CDR* = ölüm ÷ nüfus × 1.000 (ör. 1.000 ÷ 50.000 × 1.000 = 20).",
            "*RNI* (%) = (*CBR* − *CDR*) ÷ 10; göçü içermez; negatifse nüfus doğal olarak azalır.",
            "İkiye katlanma süresi = 70 ÷ *RNI* (ör. 70 ÷ 2,8 = 25 yıl); *RNI* iki katına çıkarsa süre yarıya iner.",
            "*TFR* kadın başına ortalama çocuk sayısıdır; yenileme düzeyi ≈ 2,1.",
            "*IMR* = 1 yaş altı ölüm ÷ canlı doğum × 1.000; sağlık hizmetinin kalitesini gösterir.",
            "Toplam büyüme = *RNI* + net göç oranı (göç alan ülkede artı, veren ülkede eksi).",
            "Sosyal, kültürel, siyasi, ekonomik (ve çevresel) faktörler doğurganlığı, ölümü ve göçü değiştirir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir ülkede *CBR* 26, *CDR* 8'dir ve göç yoktur. Doğal artış oranı (*RNI*) ve nüfusun ikiye katlanma süresi yaklaşık olarak nedir?",
      opts: ["*RNI* %18; yaklaşık 4 yıl", "*RNI* %1,8; yaklaşık 39 yıl", "*RNI* %2,6; yaklaşık 27 yıl", "*RNI* %0,8; yaklaşık 88 yıl"],
      a: 1,
      why: "*RNI* = (26 − 8) ÷ 10 = %1,8; süre = 70 ÷ 1,8 ≈ 39 yıl. A şıkkı en çekici yanlış: 18 binde bir değerdir, yüzdeye çevirmek için 10'a bölünmesi gerekir." },
    { q: "Tabloya göre hangi yorum doğrudur?",
      fig: { type: "table", caption: "İki ülkenin demografik göstergeleri", head: ["Ülke", "CBR (‰)", "CDR (‰)", "Net göç (‰)"], rows: [["P", 24, 10, -4], ["Q", 10, 9, 9]] },
      opts: ["P'nin *RNI* değeri Q'dan düşüktür, çünkü P göç veriyor", "Q'nun toplam büyüme oranı P'ninkinden yüksektir, çünkü Q'nun net göçü pozitiftir", "P'nin toplam büyüme oranı %1,4'tür", "İki ülkenin toplam büyüme oranı eşittir (%1,0); P'de büyüme doğal artıştan, Q'da büyük ölçüde göçten gelir"],
      a: 3,
      why: "P: *RNI* = 1,4; göç −0,4; toplam %1,0. Q: *RNI* = 0,1; göç +0,9; toplam %1,0. A şıkkı en çekici yanlış: *RNI* göçü hiç içermez (P'nin *RNI*'ı 1,4, Q'nunki 0,1). C şıkkı ise göçü unutur." },
    { q: "Bir ülkenin nüfusu 12 milyon ve *RNI* %3,5'tir (sabit ve göçsüz). Nüfus yaklaşık kaç yıl sonra 24 milyona ulaşır?",
      opts: ["20 yıl", "35 yıl", "245 yıl", "3,5 yıl"],
      a: 0,
      why: "70 ÷ 3,5 = 20 yıl. C şıkkı en çekici yanlış: 70 ile *RNI* çarpılmaz, 70 *RNI*'ye bölünür; çarpma süreyi anlamsızca büyütür. *RNI* büyüdükçe süre kısalmalıdır." },
    { q: "Bir ülkede kız çocuklarının okullaşması ve kadınların istihdamı hızla artıyor, kentleşme sürüyor ve sağlık hizmetleri genişliyor. Hangisi en olası sonuçtur?",
      opts: ["*TFR* artar, çünkü gelir arttıkça aileler daha çok çocuk ister", "*IMR* artar, çünkü kentlerde bebek bakımı zorlaşır", "*TFR* düşer ve *IMR* azalır", "*CDR* hızla artar, çünkü nüfus yaşlanır"],
      a: 2,
      why: "Kadınların eğitimi ve işgücüne katılımı ile kentleşme doğurganlığı düşürür; sağlık hizmetleri bebek ölümlerini azaltır. A şıkkı en çekici yanlış: gelir ve eğitim arttıkça çocuk sayısı genellikle düşer, artmaz." },
    { q: "Bir ilde bir yıl içinde 2.500 canlı doğum olmuş ve 40 bebek ilk yaşını doldurmadan ölmüştür. İlin *IMR* değeri kaçtır?",
      opts: ["1,6", "16", "62,5", "40"],
      a: 1,
      why: "*IMR* = 40 ÷ 2.500 × 1.000 = 16. A şıkkı en çekici yanlış: 1,6 değeri 100 ile çarpılarak (yüzde olarak) bulunur; *IMR* ise binde verilir." }
  ]
};
