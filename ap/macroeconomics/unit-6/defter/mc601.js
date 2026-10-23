/* Kitpath not defteri · mc601 · 6.1 Ödemeler Dengesi
   Kaynak: CED Topic 6.1 (MEA-4.A). Blok türleri: /ap/_kit/defter.js başı.
   Grafik: bir yıllık dış hesaplar, sıfır çizgisi y = 5 (1 birim = 10 milyar $). */
window.DEFTER = {
  slug: "mc601",
  amac: "Bu konu bir ülkenin dünyayla yaptığı bütün parasal işlemlerin nasıl kaydedildiğini anlatıyor. *Current account*, *capital and financial account* ve *balance of payments* kavramlarını, kredi–borç mantığını ve CA + CFA = 0 kuralını öğreneceksin.",
  bolumler: [
    {
      baslik: "Ödemeler dengesi: ülkenin dış hesap defteri",
      kisa: "BOP, ülkenin belli bir dönemde dünyayla yaptığı bütün işlemlerin kaydıdır.",
      bloklar: [
        { tip: "not", metin: "Kantinci günün sonunda paranın nereden girip nereye çıktığını deftere yazar. Ülkeler de aynısını yapar: *balance of payments* (BOP), yani ödemeler dengesi, bir ülkenin belli bir dönemde (genellikle bir yıl) yabancılarla yaptığı **bütün** işlemlerin kaydıdır." },
        { tip: "harita", merkez: "*Balance of payments* (BOP)", dallar: [
            { baslik: "*Current account* (CA)", alt: "Cari işlemler: net ihracat, yurtdışından net gelir, net tek yönlü transferler" },
            { baslik: "*Capital and financial account* (CFA)", alt: "Finans hesabı: varlık alım-satımı ve finansal sermaye giriş-çıkışı" }
          ] },
        { tip: "formul", parcalar: [
            { t: "*CA*", alt: "cari işlemler" }, "+",
            { t: "*CFA*", alt: "finans hesabı" }, "=",
            { t: "0", alt: "BOP: her işlemin bir karşılığı var" }
          ], aciklama: "Bir hesap eksiye giderse öteki aynı miktarda artıya gider." }
      ]
    },
    {
      baslik: "Kredi ve borç: para içeri mi, dışarı mı?",
      kisa: "Ülkeye para girerse kredi, ülkeden para çıkarsa borç yazılır.",
      bloklar: [
        { tip: "tablo", baslik: "Her işlemde tek soru: para ülkeye girdi mi?", head: ["İşlem", "Para yönü", "Kayıt"], rows: [
            ["Alman turist Antalya'da otel parası öder", "İçeri", "Kredi (+)"],
            ["Türk öğrenci yurtdışından telefon alır", "Dışarı", "Borç (−)"],
            ["Yabancı yatırımcı Türk şirketinin hissesini alır", "İçeri", "Kredi (+)"],
            ["Türk bir banka ABD tahvili alır", "Dışarı", "Borç (−)"]
          ], not: "Ülkeye para giren her işlem *credit*, ülkeden para çıkaran her işlem *debit* olarak yazılır." },
        { tip: "not", metin: "Kredi ve borç, ahlaki bir \"iyi–kötü\" değil, yalnızca yön bilgisidir. Bütün kredilerin toplamı bütün borçların toplamına eşit çıkar; bu yüzden ==CA + CFA = 0==." }
      ]
    },
    {
      baslik: "Cari işlemler hesabı (*current account*)",
      kisa: "CA, net ihracat, yurtdışından net gelir ve net tek yönlü transferleri toplar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📦", terim: "Balance of trade", tr: "ticaret dengesi (net ihracat)", tanim: "Mal ve hizmet ihracatı eksi ithalatı. İhracat büyükse fazla, ithalat büyükse açık verir.", ornek: "Fındık satışı ihracat; Netflix aboneliği hizmet ithalatıdır." },
            { ikon: "💶", terim: "Net income from abroad", tr: "yurtdışından net gelir", tanim: "Yurtdışındaki varlıklardan gelen faiz, temettü ve kâr eksi yabancılara ödenenler.", ornek: "Türk bir firmanın Almanya'daki fabrikasından gelen kâr (+); Türkiye'deki yabancı bankanın yurtdışına gönderdiği kâr (−)." },
            { ikon: "🎁", terim: "Net unilateral transfers", tr: "net tek yönlü transferler", tanim: "Karşılığında mal ya da hizmet alınmayan para gönderileri: hediye, işçi havalesi, yabancı yardım.", ornek: "Almanya'daki amcanın ailesine gönderdiği 200 euro." }
          ] },
        { tip: "tuzak", metin: "Net ihracat, CA'nın yalnızca bir parçasıdır. CA'da net gelir ve transferler de vardır; bu yüzden ticaret açığı veren bir ülkenin CA'sı farklı çıkabilir.", yanlis: "Ticaret açığı ile cari işlemler açığı aynı şeydir.", dogru: "*Balance of trade*, *current account*'un bir kalemidir; CA = net ihracat + net gelir + net transfer." }
      ]
    },
    {
      baslik: "Finans hesabı (*capital and financial account*)",
      kisa: "CFA, varlık alım-satımını ve finansal sermaye girişini ve çıkışını kaydeder.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⬇️", terim: "Financial capital inflow", tr: "finansal sermaye girişi (CFA fazlası)", tanim: "Yabancıların bu ülkenin varlıklarını (hisse, tahvil, fabrika) satın alması ya da ülkeye borç vermesi: para içeri girer.", ornek: "Bir Alman şirketi Bursa'da fabrika kurar." },
            { ikon: "⬆️", terim: "Financial capital outflow", tr: "finansal sermaye çıkışı (CFA açığı)", tanim: "Ülke sakinlerinin yurtdışında varlık alması ya da yurtdışına borç vermesi: para dışarı çıkar.", ornek: "Bir Türk bankası ABD devlet tahvili alır." }
          ] },
        { tip: "ikili", sol: { ikon: "🛒", baslik: "*Current account* (CA)", maddeler: ["Mal ve hizmet ticareti", "Yurtdışından net gelir ve net transferler"] },
          sag: { ikon: "🏦", baslik: "*Capital and financial account* (CFA)", maddeler: ["Varlıkların kendisini alıp satmak", "Finansal sermaye giriş ve çıkışları"] },
          oyun: [
            { metin: "Alman turistler Antalya'da otel parası öder.", cevap: "sol", neden: "Hizmet ihracatı: net ihracat, yani CA." },
            { metin: "Yabancı bir yatırımcı Türk şirketinin hisselerini satın alır.", cevap: "sag", neden: "Bir varlık alımı: finansal sermaye girişi, yani CFA." },
            { metin: "Almanya'daki amca ailesine para gönderir.", cevap: "sol", neden: "Karşılığında mal ya da hizmet yok: net tek yönlü transfer, CA." },
            { metin: "Türk bir banka ABD devlet tahvili alır.", cevap: "sag", neden: "Yurtdışı varlık alımı: finansal sermaye çıkışı, CFA." },
            { metin: "Türk firması ABD'deki hisselerinden temettü alır.", cevap: "sol", neden: "Varlığın getirisi net gelirdir: CA. Hisseyi almak ise CFA olurdu." }
          ] },
        { tip: "tuzak", metin: "Varlığı almak ile varlığın getirisini almak iki ayrı hesaptır.", yanlis: "Yurtdışından temettü ya da faiz almak CFA'ya yazılır.", dogru: "Varlığın kendisini alıp satmak CFA'dadır; faiz ve temettü gibi getiriler CA'daki net gelirdir." }
      ]
    },
    {
      baslik: "Terazi: CA ve CFA birbirinin aynası",
      kisa: "CA açığı, aynı büyüklükte CFA fazlasıyla dengelenir; toplam hep sıfırdır.",
      bloklar: [
        { tip: "grafik", baslik: "Bir yılın dış hesapları (milyar $)", xlabel: "Hesap kalemleri", ylabel: "Milyar $ (sıfır çizgisi ortada)", xmax: 9, ymax: 10,
          yticks: [{ v: 2.5, label: "−25" }, { v: 5, label: "0" }, { v: 7.5, label: "+25" }],
          ogeler: [
            { id: "z", tip: "cizgi", renk: 1, kesik: true, from: [0, 5], to: [9, 5], etiket: "" },
            { id: "yu", tip: "yazi", x: 4.5, y: 9.4, metin: "Yukarı: para girişi (kredi)", gizli: false },
            { id: "b1", tip: "alan", renk: 3, noktalar: [[0.6, 5], [1.6, 5], [1.6, 5], [0.6, 5]], gizli: true },
            { id: "b2", tip: "alan", renk: 2, noktalar: [[2, 5], [3, 5], [3, 5], [2, 5]], gizli: true },
            { id: "b3", tip: "alan", renk: 3, noktalar: [[3.4, 5], [4.4, 5], [4.4, 5], [3.4, 5]], gizli: true },
            { id: "b4", tip: "alan", renk: 3, noktalar: [[5.2, 5], [6.2, 5], [6.2, 5], [5.2, 5]], gizli: true },
            { id: "b5", tip: "alan", renk: 2, noktalar: [[6.8, 5], [7.8, 5], [7.8, 5], [6.8, 5]], gizli: true },
            { id: "k1", tip: "yazi", x: 1.1, y: 0.5, metin: "Ticaret", gizli: true },
            { id: "k2", tip: "yazi", x: 2.5, y: 0.5, metin: "Net gelir", gizli: true },
            { id: "k3", tip: "yazi", x: 3.9, y: 0.5, metin: "Transfer", gizli: true },
            { id: "k4", tip: "yazi", x: 5.7, y: 0.5, metin: "CA", gizli: true },
            { id: "k5", tip: "yazi", x: 7.3, y: 0.5, metin: "CFA", gizli: true },
            { id: "v1", tip: "yazi", x: 1.1, y: 1.4, metin: "−30", gizli: true },
            { id: "v2", tip: "yazi", x: 2.5, y: 6.4, metin: "+10", gizli: true },
            { id: "v3", tip: "yazi", x: 3.9, y: 3.9, metin: "−5", gizli: true },
            { id: "v4", tip: "yazi", x: 5.7, y: 1.9, metin: "−25", gizli: true },
            { id: "v5", tip: "yazi", x: 7.3, y: 7.9, metin: "+25", gizli: true },
            { id: "top", tip: "yazi", x: 6.5, y: 9.4, metin: "CA + CFA = 0", gizli: true }
          ],
          durumlar: [
            { metin: "Önce sıfır çizgisi: çizginin üstü ülkeye para girişi (*credit*), altı para çıkışı (*debit*). Birim: milyar $." },
            { metin: "*Balance of trade*: ihracat 120 − ithalat 150 = **−30**. Para dışarı çıkıyor: çubuk aşağı gider.", goster: ["b1", "k1", "v1"], set: { b1: { noktalar: [[0.6, 5], [1.6, 5], [1.6, 2], [0.6, 2]] } } },
            { metin: "Yurtdışından net gelir **+10**: para giriyor, çubuk yukarı.", goster: ["b2", "k2", "v2"], set: { b2: { noktalar: [[2, 5], [3, 5], [3, 6], [2, 6]] } } },
            { metin: "Net tek yönlü transfer **−5**: küçük bir çıkış.", goster: ["b3", "k3", "v3"], set: { b3: { noktalar: [[3.4, 5], [4.4, 5], [4.4, 4.5], [3.4, 4.5]] } } },
            { metin: "Üçünün toplamı: CA = −30 + 10 − 5 = ==−25==. Bu bir *current account deficit* (cari açık).", goster: ["b4", "k4", "v4"], set: { b4: { noktalar: [[5.2, 5], [6.2, 5], [6.2, 2.5], [5.2, 2.5]] } } },
            { metin: "Karşılığında CFA = ==+25==: ülkeye 25 milyar $ finansal sermaye girmiş (*financial capital inflow*).", goster: ["b5", "k5", "v5"], set: { b5: { noktalar: [[6.8, 5], [7.8, 5], [7.8, 7.5], [6.8, 7.5]] } } },
            { metin: "İki büyük çubuk eşit ve zıt: ==CA + CFA = 0==. BOP her zaman dengededir.", goster: ["top"], gizle: ["yu"] }
          ] },
        { tip: "ornek", baslik: "CA, CFA ve BOP'u hesapla", durum: "Bir ülkenin bir yıllık verisi (milyar $): mal ve hizmet ihracatı 120, ithalatı 150, yurtdışından net gelir +10, net tek yönlü transfer −5. CA, CFA ve BOP kaçtır?",
          adimlar: [
            "Net ihracat = 120 − 150 = **−30**.",
            "CA = net ihracat + net gelir + net transfer = −30 + 10 − 5 = **−25** (cari açık).",
            "CFA, CA'nın ters işaretlisidir: CFA = **+25** (finansal sermaye girişi).",
            "BOP: CA + CFA = −25 + 25 = **0**."
          ],
          sonuc: "Cari açık 25 milyar $; bunu ülkeye giren 25 milyar $'lık finansal sermaye kapatır. Toplam 0." }
      ]
    },
    {
      baslik: "Bir kalem değişirse karşılığı ne olur?",
      kisa: "CA'daki her değişimin karşılığı CFA'da ters yönde bulunur; BOP yine sıfırdır.",
      bloklar: [
        { tip: "adimlar", baslik: "Türk bir öğrenci ABD'den 1.000 $'lık telefon alırsa", adimlar: [
            { baslik: "Mal gelir", metin: "İthalat artar: CA'ya 1.000 $ **borç** (−) yazılır." },
            { baslik: "Ödeme yapılır", metin: "Parayı ödemek için ya yurtdışındaki dolar varlığımız azalır ya da yabancıya bir Türk varlığı (TL mevduatı, tahvil) verilir." },
            { baslik: "Karşılık", metin: "Bu, CFA'ya 1.000 $ **kredi** (+) yazılır. −1.000 + 1.000 = 0: BOP bozulmaz." }
          ] },
        { tip: "tablo", baslik: "Bir kalem 10 milyar $ değişirse (diğer kalemler sabit)", head: ["Değişim", "CA", "CFA", "CA + CFA"], rows: [
            ["İhracat 10 artar", "+10", "−10", "0"],
            ["İthalat 10 artar", "−10", "+10", "0"],
            ["Yabancılar 10'luk Türk tahvili alır", "−10", "+10", "0"],
            ["Yurtdışına 10'luk transfer gönderilir", "−10", "+10", "0"]
          ], not: "Soldaki iki sütundan biri değişince öteki ters yönde ve aynı büyüklükte değişir." },
        { tip: "tuzak", metin: "Cari açık, ülkenin hesabının \"tutmaması\" demek değildir. Fark mutlaka bir yerden finanse edilir: ülkeye giren sermayeden.", yanlis: "Cari işlemler hesabı açık veriyorsa BOP açık verir.", dogru: "Muhasebe olarak BOP her zaman 0'dır. CA açığı, aynı büyüklükte CFA fazlası (net sermaye girişi) demektir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Balance of payments* (BOP) ülkenin belli bir dönemde yabancılarla yaptığı bütün işlemlerin kaydıdır; iki hesaptan oluşur.",
            "Ülkeye para giren işlem *credit* (+), para çıkaran işlem *debit* (−) olur.",
            "*Current account* (CA) = net ihracat + yurtdışından net gelir + net tek yönlü transferler.",
            "*Balance of trade* (net ihracat) CA'nın yalnızca bir parçasıdır; ticaret açığı = CA açığı değildir.",
            "*Capital and financial account* (CFA) varlık alım-satımını kaydeder: fazla = finansal sermaye girişi, açık = çıkışı.",
            "Varlığın kendisi CFA'ya, varlığın getirisi (faiz, temettü) CA'ya yazılır.",
            "CA + CFA = 0: cari açık varsa CFA aynı büyüklükte fazla verir; BOP hep sıfırdır.",
            "Hesaplama sırası: net ihracat → CA → CFA = −CA."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Aşağıdakilerden hangisi bir ülkenin *capital and financial account* (CFA) hesabına yazılır?",
      opts: [
        "Alman turistlerin Antalya'daki otel harcaması",
        "Bir Japon şirketinin Türkiye'de fabrika satın alması",
        "Türkiye'den ihraç edilen fındık",
        "Almanya'daki bir işçinin ailesine para göndermesi"
      ],
      a: 1,
      why: "Fabrika satın almak bir varlık alımıdır ve ülkeye finansal sermaye girişi demektir: CFA. Otel harcaması çekici bir yanlış şıktır çünkü para ülkeye girer; ama bu bir hizmet ihracatıdır ve CA'ya yazılır."
    },
    {
      q: "Bir ülkenin yıllık dış işlemleri tabloda verilmiştir. Bu verilere göre CFA kaç milyar $ olur?",
      fig: { type: "table", head: ["Kalem", "Milyar $"], rows: [["Mal ve hizmet ihracatı", "80"], ["Mal ve hizmet ithalatı", "100"], ["Yurtdışından net gelir", "15"], ["Net tek yönlü transferler", "−10"]] },
      opts: ["−15", "−5", "+5", "+15"],
      a: 3,
      why: "CA = (80 − 100) + 15 − 10 = −15. CFA, CA'nın ters işaretlisidir: +15 (CA + CFA = 0). −15 şıkkı CA'nın kendisidir; soru CFA'yı soruyor."
    },
    {
      q: "Bir ülke cari işlemler hesabında açık veriyorsa aşağıdakilerden hangisi doğrudur?",
      opts: [
        "Finans hesabı aynı büyüklükte fazla verir; ülkeye net finansal sermaye girmiştir.",
        "Ödemeler dengesi (BOP) açık verir.",
        "Ticaret dengesi mutlaka açık verir.",
        "Net tek yönlü transferler mutlaka negatiftir."
      ],
      a: 0,
      why: "CA + CFA = 0 olduğundan CA açığı, aynı büyüklükte CFA fazlasıyla dengelenir. \"BOP açık verir\" şıkkı en çekici yanlıştır: BOP kayıt olarak her zaman 0'dır. Ticaret dengesi CA'nın yalnızca bir parçasıdır, işareti CA'yı kesin belirlemez."
    },
    {
      q: "Türk bir şirket Almanya'daki fabrikasından 5 milyon euro kâr elde edip bunu Türkiye'ye gönderiyor. Bu işlem Türkiye'nin ödemeler dengesinde nasıl kaydedilir?",
      opts: [
        "CFA'da kredi, çünkü fabrika yurtdışı bir varlıktır",
        "CA'da borç",
        "CA'da kredi (yurtdışından net gelir)",
        "CFA'da borç"
      ],
      a: 2,
      why: "Varlıktan gelen kâr, yurtdışından net gelirdir ve para ülkeye girdiği için CA'da kredi yazılır. Fabrikanın kendisini satın almak CFA'ya yazılırdı; getirisi ise CA'dadır."
    },
    {
      q: "Diğer her şey sabitken Türkiye'deki yabancı yatırımcılar Türk hisse senedi alımlarını artırırsa ne olur?",
      opts: [
        "CA ve CFA ikisi de artar",
        "CFA artar; CA aynı büyüklükte azalır, BOP yine 0 olur",
        "CFA artar ve BOP fazla verir",
        "CFA azalır, CA artar"
      ],
      a: 1,
      why: "Hisse alımı bir finansal sermaye girişidir: CFA fazlası artar. CA + CFA = 0 koşulu gereği CA aynı büyüklükte azalır (daha çok cari açık). BOP fazla vermez; her zaman 0'dır."
    }
  ]
};
