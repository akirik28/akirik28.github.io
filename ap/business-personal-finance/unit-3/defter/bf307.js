/* Kitpath not defteri · bf307 · 3.7 Bilanço ve Net Değer
   Kaynak: AP Business with Personal Finance CED, Topic 3.7. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf307",
  amac: "Bu konu bilançoyu anlatıyor: bir işletmenin belli bir anda nelere sahip olduğunu, kime ne kadar borçlu olduğunu ve sahipleri için ne kadar değer taşıdığını. Varlık, borç ve özkaynağı, işletme sermayesini ve kişisel net değeri öğreneceksin.",
  bolumler: [
    {
      baslik: "Bilanço: belli bir anın fotoğrafı",
      kisa: "Bilanço, varlıkları ile borçlarını ve özkaynağı belli bir anda karşılaştırır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Varlıklar", alt: "*assets*: sahip olunanlar" }, "=",
            { t: "Borçlar", alt: "*liabilities*: borçlu olunanlar" }, "+",
            { t: "Özkaynak", alt: "*owners' equity*: sahipler için net değer" }
          ], aciklama: "*Balance sheet equation* (temel muhasebe denklemi). Bilanço bu denklemi bir tarih için gösterir: örneğin yıl sonu ya da çeyrek sonu. Genelde önceki yıl ya da yılların aynı tarihli verileriyle yan yana verilir." },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🎞️", baslik: "Gelir tablosu", maddeler: ["Bir *dönemi* anlatır", "Gelir − maliyet = kâr/zarar", "Film gibi: bir yılın akışı"] },
          sag: { ikon: "📸", baslik: "Bilanço", maddeler: ["Belli bir *anı* anlatır", "Varlık = borç + özkaynak", "Fotoğraf gibi: 31 Aralık durumu"] },
          oyun: [
            { metin: "\"Bu yıl 80 bin TL net kâr ettik.\"", cevap: "sol", neden: "Bir dönemin sonucu: gelir tablosu." },
            { metin: "\"31 Aralık itibarıyla 300 bin TL varlığımız var.\"", cevap: "sag", neden: "Belli bir tarihteki durum: bilanço." },
            { metin: "\"İşletmenin sahipleri için net değeri 120 bin TL.\"", cevap: "sag", neden: "Özkaynak bilançoda yer alır." },
            { metin: "\"Üç ayda satışlarımız %25 arttı.\"", cevap: "sol", neden: "Bir dönemdeki değişim: gelir tablosu." }
          ] }
      ]
    },
    {
      baslik: "Varlıklar: likidite sırasıyla",
      kisa: "Varlıklar, paraya çevrilme kolaylığına (likidite) göre sıralanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💧", terim: "Liquidity", tr: "likidite", tanim: "Bir varlığın ne kadar kolay nakde çevrilebildiği.", ornek: "Nakit en likit varlıktır; fabrika binası daha az likittir." },
            { ikon: "🥤", terim: "Current assets", tr: "cari (dönen) varlıklar", tanim: "Nakit, kısa vadeli yatırımlar, alacaklar (*accounts receivable*: müşterilerin işletmeye borcu) ve stok. Çok likittir; günlük işleri finanse eder.", ornek: "Kasadaki 40 bin TL; stoktaki 50 bin TL." },
            { ikon: "🏗️", terim: "Long-term assets", tr: "uzun vadeli varlıklar", tanim: "Sabit varlıklar (üretim tesisleri gibi) ve uzun vadeli yatırımlar. Daha az likittir; sabit varlıklar işletmeyi çalıştırmakta kullanılır.", ornek: "Atölye makineleri, bina." },
            { ikon: "🏷️", terim: "Intangible assets", tr: "maddi olmayan varlıklar", tanim: "Patent, marka adı, ticari marka gibi elle tutulmayan ama gelecekte gelir getirme potansiyeli taşıdığı için değeri olan varlıklar.", ornek: "Pedal markası." }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "💧", baslik: "Cari varlıklar", maddeler: ["Çok likit", "Nakit, alacak, stok", "Günlük işleri finanse eder"] },
          sag: { ikon: "🏗️", baslik: "Uzun vadeli ve maddi olmayan", maddeler: ["Daha az likit", "Fabrika, bina, patent, marka", "İşletmeyi çalıştırır, değer taşır"] },
          oyun: [
            { metin: "Kasadaki nakit.", cevap: "sol", neden: "En likit cari varlık." },
            { metin: "Üretim tesisi.", cevap: "sag", neden: "Sabit varlık: uzun vadeli, az likit." },
            { metin: "Müşterilerin 30 gün içinde ödeyeceği alacaklar.", cevap: "sol", neden: "*Accounts receivable* cari varlıktır." },
            { metin: "Şirketin ticari markası.", cevap: "sag", neden: "Maddi olmayan varlık." },
            { metin: "Satılmayı bekleyen stok.", cevap: "sol", neden: "Stok cari varlıktır." }
          ] },
        { tip: "tuzak", baslik: "Varlık yalnızca elle tutulan şey değildir", metin: "Marka ve patent bilançoda değerlidir.", yanlis: "Fiziksel olarak var olmayan şeyler varlık sayılmaz.", dogru: "Patent, marka adı ve ticari marka fiziksel değildir ama gelecekte gelir getirme potansiyeli taşıdığı için ==maddi olmayan varlık== olarak bilançoya girer." }
      ]
    },
    {
      baslik: "Borçlar: ne zaman ödenir?",
      kisa: "Borçlar vadesine göre ayrılır: bir yıl içinde ödenecekler cari, sonrakiler uzun vadelidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⏰", terim: "Current liabilities", tr: "cari (kısa vadeli) borçlar", tanim: "Bir yıl içinde ödenmesi gereken borçlar: ticari borçlar (*accounts payable*: tedarikçilere borç), kısa vadeli borç, uzun vadeli borcun bu yıl ödenecek kısmı ve tahakkuk eden (ödenmemiş) giderler.", ornek: "Tedarikçiye 40 bin TL borç." },
            { ikon: "📆", terim: "Long-term liabilities", tr: "uzun vadeli borçlar", tanim: "Ödemesi bir yılı aşan yükümlülükler: ipotek, banka kredisi, uzun vadeli tahvil.", ornek: "5 yıllık 100 bin TL kredi." }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "⏰", baslik: "Cari borç", maddeler: ["Bir yıl içinde ödenir", "Tedarikçi borcu, kısa vadeli borç", "Tahakkuk eden giderler"] },
          sag: { ikon: "📆", baslik: "Uzun vadeli borç", maddeler: ["Bir yıldan sonra ödenir", "İpotek, banka kredisi", "Uzun vadeli tahvil"] },
          oyun: [
            { metin: "Un tedarikçisine ödenecek 40.000 TL'lik fatura.", cevap: "sol", neden: "*Accounts payable* cari borçtur." },
            { metin: "10 yıl vadeli bina kredisi.", cevap: "sag", neden: "Ödemesi bir yılı aşıyor: uzun vadeli borç." },
            { metin: "Bu ay ödenmemiş maaş ve elektrik faturası.", cevap: "sol", neden: "Tahakkuk eden giderler cari borçtur." },
            { metin: "7 yıllık bankaya olan kredi.", cevap: "sag", neden: "Uzun vadeli kredi." }
          ] },
        { tip: "tuzak", baslik: "Alacak mı, borç mu?", metin: "Para yönüne dikkat et.", yanlis: "*Accounts receivable* işletmenin tedarikçilere olan borcudur.", dogru: "*Accounts receivable* müşterilerin işletmeye olan borcudur (bir ==varlık==, alacak). Tedarikçilere borç *accounts payable*'dır (bir ==yükümlülük==)." }
      ]
    },
    {
      baslik: "Özkaynak ve eksiksiz bir bilanço",
      kisa: "Özkaynak = varlıklar − borçlar; sermaye ve birikmiş kârdan oluşur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👤", terim: "Owners' equity", tr: "özkaynak", tanim: "İşletmenin net değeri: varlıklarla borçlar arasındaki fark. Çoğunlukla hisse (*stock*) ve birikmiş kârdan oluşur.", ornek: "300 − 180 = 120 bin TL." },
            { ikon: "🌱", terim: "Retained earnings", tr: "birikmiş kâr", tanim: "İşletmenin bugüne kadarki kârlarından temettü olarak dağıtılmayıp işletmede tutulan kısım.", ornek: "50 bin TL." }
          ] },
        { tip: "grafik", baslik: "Pedal Bisiklet Atölyesi: bilançonun iki tarafı (bin TL)", xlabel: "", ylabel: "Bin TL", xmax: 6, ymax: 330, xticks: [{ v: 1.5, label: "Varlıklar" }, { v: 4.5, label: "Borçlar + Özkaynak" }], yticks: [{ v: 100, label: "100" }, { v: 200, label: "200" }, { v: 300, label: "300" }],
          ogeler: [
            { id: "a1", tip: "alan", renk: 0, noktalar: [[0.8, 0], [2.2, 0], [2.2, 0], [0.8, 0]] },
            { id: "a2", tip: "alan", renk: 1, noktalar: [[0.8, 120], [2.2, 120], [2.2, 120], [0.8, 120]] },
            { id: "a3", tip: "alan", renk: 2, noktalar: [[0.8, 270], [2.2, 270], [2.2, 270], [0.8, 270]] },
            { id: "l1", tip: "alan", renk: 3, noktalar: [[3.8, 0], [5.2, 0], [5.2, 0], [3.8, 0]] },
            { id: "l2", tip: "alan", renk: 0, noktalar: [[3.8, 80], [5.2, 80], [5.2, 80], [3.8, 80]] },
            { id: "eq", tip: "alan", renk: 1, noktalar: [[3.8, 180], [5.2, 180], [5.2, 180], [3.8, 180]] },
            { id: "ta1", tip: "yazi", x: 1.5, y: 60, metin: "Cari 120", gizli: true },
            { id: "ta2", tip: "yazi", x: 1.5, y: 195, metin: "Uzun vadeli 150", gizli: true },
            { id: "ta3", tip: "yazi", x: 1.5, y: 307, metin: "Maddi olmayan 30 → 300", gizli: true },
            { id: "tl1", tip: "yazi", x: 4.5, y: 40, metin: "Cari borç 80", gizli: true },
            { id: "tl2", tip: "yazi", x: 4.5, y: 130, metin: "Uzun vadeli borç 100", gizli: true },
            { id: "te", tip: "yazi", x: 4.5, y: 240, metin: "Özkaynak 120", gizli: true }
          ],
          durumlar: [
            { metin: "Cari varlıklar: nakit 40 + alacak 30 + stok 50 = ==120==.", set: { a1: { noktalar: [[0.8, 0], [2.2, 0], [2.2, 120], [0.8, 120]] } }, goster: ["ta1"] },
            { metin: "Uzun vadeli varlıklar: sabit varlık 130 + uzun vadeli yatırım 20 = ==150==.", set: { a2: { noktalar: [[0.8, 120], [2.2, 120], [2.2, 270], [0.8, 270]] } }, goster: ["ta2"] },
            { metin: "Maddi olmayan varlık (marka) 30. ==Toplam varlık 300==.", set: { a3: { noktalar: [[0.8, 270], [2.2, 270], [2.2, 300], [0.8, 300]] } }, goster: ["ta3"] },
            { metin: "Borçlar: cari 80 (ticari borç 40 + kısa vadeli 30 + tahakkuk 10) + uzun vadeli banka kredisi 100 = ==180==.", set: { l1: { noktalar: [[3.8, 0], [5.2, 0], [5.2, 80], [3.8, 80]] }, l2: { noktalar: [[3.8, 80], [5.2, 80], [5.2, 180], [3.8, 180]] } }, goster: ["tl1", "tl2"] },
            { metin: "Özkaynak = 300 − 180 = ==120== (hisse sermayesi 70 + birikmiş kâr 50). Denge: 300 = 180 + 120.", set: { eq: { noktalar: [[3.8, 180], [5.2, 180], [5.2, 300], [3.8, 300]] } }, goster: ["te"] }
          ] },
        { tip: "tablo", baslik: "Aynı bilanço yan yana (bin TL)", head: ["Varlıklar", "Tutar", "Borçlar ve özkaynak", "Tutar"], rows: [
            ["Nakit", "40", "Ticari borçlar (*accounts payable*)", "40"],
            ["Alacaklar (*accounts receivable*)", "30", "Kısa vadeli borç", "30"],
            ["Stok", "50", "Tahakkuk eden giderler", "10"],
            ["Toplam cari varlıklar", "120", "Toplam cari borçlar", "80"],
            ["Sabit varlıklar", "130", "Banka kredisi (uzun vadeli)", "100"],
            ["Uzun vadeli yatırımlar", "20", "Toplam borçlar", "180"],
            ["Maddi olmayan varlık (marka)", "30", "Hisse sermayesi", "70"],
            ["", "", "Birikmiş kâr (*retained earnings*)", "50"],
            ["", "", "Toplam özkaynak", "120"],
            ["Toplam varlıklar", "300", "Toplam borçlar + özkaynak", "300"]
          ], vurgu: 9 },
        { tip: "tuzak", baslik: "Özkaynak yalnızca yatırılan para değildir", metin: "Kâr da özkaynağa eklenir.", yanlis: "Özkaynak, sahiplerin işletmeye koyduğu paradan ibarettir.", dogru: "Özkaynak hisse sermayesini ve ==birikmiş kârı== (dağıtılmayıp tutulan kârları) içerir; ayrıca varlıklardan borçlar çıkarılarak da bulunur." }
      ]
    },
    {
      baslik: "Bilançoyu yorumlamak",
      kisa: "Pozitif net değer, yeterli işletme sermayesi ve makul borç düzeyi, sağlıklı bilançonun işaretleridir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✅", terim: "Positive net worth", tr: "pozitif net değer", tanim: "Varlıkların borçlardan büyük olması, yani özkaynağın pozitif olması.", ornek: "300 > 180: özkaynak +120." },
            { ikon: "🔋", terim: "Working capital", tr: "işletme sermayesi", tanim: "Günlük işleri finanse edecek yeterli nakit gücü. Cari varlıkların cari borçlara eşit ya da fazla olması (cari varlık − cari borç ≥ 0).", ornek: "120 − 80 = +40." },
            { ikon: "⚖️", terim: "Debt level", tr: "borç düzeyi", tanim: "İşletmenin borç düzeyi benzer işletmelerinkiyle kıyaslanır.", ornek: "Borç/varlık: 180 ÷ 300 = %60." },
            { ikon: "🛑", terim: "Bankruptcy", tr: "iflas", tanim: "İşletmenin varlıklarını satıp borçları ortadan kaldırabildiği ya da geri ödeyebildiği ve işletmeyi ya kapattığı ya da yasal denetim altında yeniden düzenlediği yasal süreç.", ornek: "Cari varlığı bitip günlük işi yürütemeyen işletme." }
          ] },
        { tip: "tablo", baslik: "İki işletme, iki bilanço (bin TL)", head: ["Kalem", "Pedal", "Zorlu Atölye"], rows: [
            ["Cari varlıklar", "120", "50"],
            ["Cari borçlar", "80", "90"],
            ["İşletme sermayesi", "+40", "−40"],
            ["Toplam varlıklar", "300", "400"],
            ["Toplam borçlar", "180", "380"],
            ["Net değer (özkaynak)", "120", "20"]
          ], vurgu: 2, not: "Zorlu'nun net değeri pozitif (20) ama cari borçlarını (90) cari varlıklarıyla (50) karşılayamıyor." },
        { tip: "tuzak", baslik: "Pozitif net değer nakit demek değildir", metin: "Varlıklar nakit olmayabilir.", yanlis: "Net değeri pozitif olan işletme borçlarını sorunsuz öder.", dogru: "Net değer pozitif olsa bile varlıklar fabrika gibi likit olmayanlardaysa ve cari varlıklar cari borçlara yetmiyorsa işletme sermayesi negatiftir; işletme kapanabilir ya da iflasa gidebilir." }
      ]
    },
    {
      baslik: "Kişisel net değer",
      kisa: "Kişisel net değer, hane halkının varlıklarından borçlarını çıkarınca bulunur.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Net değer", alt: "*net worth*" }, "=",
            { t: "Toplam varlıklar", alt: "birikim, yatırım, mülk, eşya" }, "−",
            { t: "Toplam borçlar", alt: "kredi, kart borcu" }
          ], aciklama: "Genellikle bir hane halkı için hesaplanır; hane birden fazla kişiyi içerebilir." },
        { tip: "ornek", baslik: "Yılmaz ailesinin net değeri", durum: "Varlıklar: birikim 40.000, yatırım fonu 20.000, araba 300.000, ev eşyaları 40.000 TL. Borçlar: araba kredisi 150.000, kredi kartı 10.000 TL. Net değer nedir? Kart borcunu birikimden kapatırlarsa ne olur?",
          adimlar: ["Varlıklar: 40.000 + 20.000 + 300.000 + 40.000 = 400.000 TL. Borçlar: 150.000 + 10.000 = 160.000 TL.", "Net değer: 400.000 − 160.000 = 240.000 TL.", "Kartı 10.000 TL birikimle kapatırlarsa varlık 390.000, borç 150.000 olur; net değer yine 390.000 − 150.000 = 240.000 TL."],
          sonuc: "Net değer ==240.000 TL==; borcu varlıkla kapatmak net değeri değiştirmez." },
        { tip: "liste", baslik: "Net değer neden hesaplanır?", maddeler: [
            { ikon: "🏦", baslik: "Kredi başvurusu", metin: "Borç verenler, hane halkının net değerini başvuru sürecinde isteyebilir." },
            { ikon: "🏖️", baslik: "Emeklilik planı", metin: "Tüketiciler ve finansal planlamacılar, emeklilik için yeterli birikimin olup olmadığına net değere bakarak karar verir." },
            { ikon: "➖", baslik: "Negatif olabilir", metin: "Varlıklardan fazla borcu olan (örneğin öğrenim kredisi yüksek biri) kişinin net değeri negatiftir." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Bilanço belli bir andaki durumu gösterir: Varlıklar = Borçlar + Özkaynak.",
            "Varlıklar likiditeye göre cari (nakit, kısa vadeli yatırım, alacak, stok), uzun vadeli (sabit varlık, uzun vadeli yatırım) ve maddi olmayan (patent, marka) olarak ayrılır.",
            "Borçlar cari (bir yıl içinde: ticari borç, kısa vadeli borç, tahakkuk) ve uzun vadeli (ipotek, banka kredisi, tahvil) olarak ayrılır.",
            "Özkaynak = varlıklar − borçlar; hisse ve birikmiş kârdan oluşur.",
            "*Accounts receivable* varlık (alacak), *accounts payable* borçtur.",
            "Bilanço pozitif net değeri, yeterli işletme sermayesini (cari varlık ≥ cari borç) ve benzerlerle kıyaslanabilir borç düzeyini gösterir.",
            "Cari varlığı yetmeyen işletme kapanabilir ya da iflasa gidebilir.",
            "Kişisel net değer = hane halkının toplam varlıkları − toplam borçları.",
            "Borç verenler başvuruda net değeri isteyebilir; emeklilik planında kullanılır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Tablodaki işletmenin özkaynağı kaç TL'dir?",
      fig: { type: "table", caption: "Bilanço özeti", head: ["Toplam varlıklar", "Toplam borçlar", "Özkaynak"], rows: [["500.000 TL", "320.000 TL", "?"]] },
      opts: ["820.000 TL", "180.000 TL", "320.000 TL", "500.000 TL"],
      a: 1,
      why: "Özkaynak = Varlıklar − Borçlar = 500.000 − 320.000 = 180.000 TL. A en çekici yanlış: iki değeri toplar; oysa borç + özkaynak = varlık olmalıdır." },
    { q: "Bir pastane bilançosunda aşağıdakilerden hangisi cari varlık olarak yer alır?",
      opts: ["Pastanenin ticari markası", "Pastanenin 10 yıllık banka kredisi", "Tandır fırın makinesi", "Müşterilerin vadeli alışverişlerinden kalan alacaklar"],
      a: 3,
      why: "Müşterilerin işletmeye borcu (*accounts receivable*) cari varlıktır; kısa sürede nakde dönmesi beklenir. C en çekici yanlış: makine sabit varlıktır, uzun vadeli varlıklara girer." },
    { q: "Aşağıdaki bilançoya göre işletme hakkında hangisi söylenebilir?",
      fig: { type: "table", caption: "Bir atölyenin bilançosu (bin TL)", head: ["Cari varlıklar", "Cari borçlar", "Toplam varlıklar", "Toplam borçlar"], rows: [[90, 120, 500, 300]] },
      opts: ["Net değeri pozitif ama işletme sermayesi negatif; günlük işleri finanse etmekte zorlanabilir", "Net değeri negatif olduğu için kapanmıştır", "Hem net değeri hem işletme sermayesi pozitif", "İşletme sermayesi pozitif çünkü toplam varlıklar borçlardan büyük"],
      a: 0,
      why: "Net değer 500 − 300 = 200 (pozitif) ama işletme sermayesi 90 − 120 = −30. D en çekici yanlış: işletme sermayesi toplam varlıklara değil cari varlıklara ve cari borçlara bakar." },
    { q: "Bir işletme bu yıl 50.000 TL net kâr elde edip 20.000 TL temettü dağıtıyor. Bu işlem birikmiş kârı (*retained earnings*) nasıl etkiler?",
      opts: ["50.000 TL azalır", "20.000 TL artar", "30.000 TL artar", "50.000 TL artar"],
      a: 2,
      why: "Birikmiş kâr, temettü olarak dağıtılmayan kârdır: 50.000 − 20.000 = 30.000 TL artar. D en çekici yanlış: dağıtılan temettüyü düşmez." },
    { q: "Aşağıdaki hane halkının net değeri nedir?",
      fig: { type: "table", caption: "Selin'in durumu", head: ["Varlıklar", "Tutar", "Borçlar", "Tutar"], rows: [["Birikim", "30.000 TL", "Öğrenim kredisi", "90.000 TL"], ["Telefon", "20.000 TL", "Kredi kartı", "5.000 TL"], ["Bisiklet", "10.000 TL", "", ""]] },
      opts: ["+60.000 TL", "+35.000 TL", "−35.000 TL", "−95.000 TL"],
      a: 2,
      why: "Varlıklar 30.000 + 20.000 + 10.000 = 60.000; borçlar 90.000 + 5.000 = 95.000; net değer 60.000 − 95.000 = −35.000 TL. A en çekici yanlış: yalnızca varlıkları sayar." }
  ]
};
