/* Kitora not defteri · hg208 · Kadınlar ve Demografik Değişim
   Kaynak: AP HuG CED Unit 2, Topic 2.8 (SPS-2.B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg208",
  amac: "Bu konu kadınların eğitim, iş, sağlık ve doğum kontrolüne erişiminin doğurganlığı, ölüm oranlarını ve göçü nasıl değiştirdiğini anlatıyor. *TFR*'nin neden düştüğünü ve Ravenstein'ın göç yasalarının kadın göçünü nasıl açıkladığını öğreneceksin.",
  bolumler: [
    {
      baslik: "*TFR* ve yenileme düzeyi",
      kisa: "*TFR* kadın başına ortalama çocuk sayısıdır; yenileme düzeyi yaklaşık 2,1'dir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👩", terim: "TFR", tr: "toplam doğurganlık hızı (*total fertility rate*)", tanim: "Bir kadının doğurganlık çağı boyunca ortalama kaç çocuk doğuracağı. Doğurganlığın en çok kullanılan ölçüsüdür.", ornek: "Türkiye'de TFR son on yılda 2,1'in altına indi." },
            { ikon: "♻️", terim: "Replacement-level fertility", tr: "yenileme düzeyi doğurganlık", tanim: "Göç olmadan nüfusun kendini yenilemesi için gereken TFR: yaklaşık 2,1. Fazladan 0,1, doğumda erkek fazlasını (100 kıza ≈105 erkek) ve doğurganlık çağına gelmeden ölenleri telafi eder.", ornek: "TFR 2,1 ise bir kuşak yerini bir sonraki kuşağa bırakır." }
          ] },
        { tip: "ornek", baslik: "TFR 1,4 olan ülkede kuşaklar", durum: "Bir ülkede göç yok ve TFR 1,4. Yenileme düzeyi 2,1 ise bir sonraki kuşak, mevcut kuşağın yaklaşık yüzde kaçı kadar olur?",
          adimlar: ["Yenileme düzeyinde bir kuşak kendini tam yeniler: 2,1 ÷ 2,1 = 1 (yani %100).", "Bu ülkede doğan çocuk sayısı yenileme düzeyinin 1,4 ÷ 2,1 = 0,67 katıdır."],
          sonuc: "Bir sonraki kuşak yaklaşık ==%67==, yani üçte iki boyutunda olur; her kuşakla nüfus ==küçülür==." },
        { tip: "tuzak", metin: "*TFR* 2,1'in altına inince nüfus hemen küçülmez.", yanlis: "TFR 2,1'in altına düştüğü yıl nüfus azalmaya başlar.", dogru: "Önceki yüksek doğurganlıktan kalan genç nüfus çocuk doğurmayı sürdürdüğü için nüfus bir süre ==büyümeye devam edebilir==. Küçülme kuşaklar içinde yavaş yavaş görülür." }
      ]
    },
    {
      baslik: "Kadınların eğitimi arttıkça *TFR* düşer",
      kisa: "Kadınların eğitimi ile *TFR* arasında ters yönlü bir ilişki vardır.",
      bloklar: [
        { tip: "grafik", baslik: "Kadın eğitimi ve TFR (şematik)", xlabel: "Kadınların ortalama okul yılı", ylabel: "TFR", xmax: 14, ymax: 7,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }, { v: 12, label: "12" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "yen", tip: "cizgi", renk: 3, kesik: true, from: [0, 2.1], to: [14, 2.1], gizli: true },
            { id: "yenyz", tip: "yazi", x: 4.4, y: 1.45, metin: "yenileme düzeyi 2,1", gizli: true },
            { id: "eski", tip: "egri", renk: 3, kesik: true, noktalar: [[1, 6.0], [3, 5.2], [5, 4.2], [7, 3.2], [9, 2.5], [11, 2.0], [13, 1.7]], gizli: true },
            { id: "tfr", tip: "egri", renk: 0, etiket: "TFR", noktalar: [[1, 6.0], [3, 5.2], [5, 4.2], [7, 3.2], [9, 2.5], [11, 2.0], [13, 1.7]] },
            { id: "a", tip: "nokta", x: 3, y: 5.2, etiket: "A", kilavuz: true },
            { id: "b", tip: "nokta", x: 7, y: 3.2, etiket: "B", kilavuz: true, gizli: true },
            { id: "c", tip: "nokta", x: 11, y: 2.0, etiket: "C", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Ülke A: kadınlar ortalama 3 yıl okumuş. *TFR* yaklaşık 5; aileler çok çocuklu." },
            { metin: "Ülke B: ortalama 7 yıl okul. *TFR* yaklaşık 3. Okul yılı arttıkça *TFR* düşüyor: ==ters yönlü ilişki==.", goster: ["b"] },
            { metin: "Ülke C: ortalama 11 yıl okul. *TFR* yaklaşık 2, yani ==yenileme düzeyinin== (2,1) hemen altında.", goster: ["c", "yen", "yenyz"] },
            { metin: "Doğum kontrole ve sağlık hizmetine erişim yaygınlaşırsa, ==aynı eğitim düzeyinde bile== *TFR* daha düşük olur: eğri aşağı kayar (eski eğri kesikli).", set: { tfr: { noktalar: [[1, 5.2], [3, 4.2], [5, 3.2], [7, 2.5], [9, 2.0], [11, 1.7], [13, 1.5]] }, a: { y: 4.2 }, b: { y: 2.5 }, c: { y: 1.7 } }, goster: ["eski"] }
          ] },
        { tip: "ikili", sol: { ikon: "📚", baslik: "Az eğitim, yüksek *TFR*", maddeler: ["Erken evlilik; doğurganlık çağı uzun", "Çocuklar işgücü ve yaşlılık güvencesi sayılır", "Doğum kontrol bilgisi ve sağlık hizmeti az"] },
          sag: { ikon: "🎓", baslik: "Çok eğitim, düşük *TFR*", maddeler: ["Evlilik ve ilk doğum yaşı gecikir", "Çalışmanın *opportunity cost*'u (fırsat maliyeti) yüksektir", "Az çocuğa daha çok yatırım yapılır"] },
          oyun: [
            { metin: "Kız çocukları ortaokuldan sonra okuldan alınıp erken evlendiriliyor.", cevap: "sol", neden: "Eğitim kısa, evlilik erken: yüksek *TFR* eğilimi." },
            { metin: "Bir mühendis kadın, kariyerine yerleşince 33 yaşında ilk çocuğunu düşünüyor.", cevap: "sag", neden: "Eğitim ve iş, doğumu geciktirir: düşük *TFR* eğilimi." },
            { metin: "Köyde çocuklar tarlada çalışıp aileye gelir sağlıyor; bebek ölümleri sık.", cevap: "sol", neden: "Çocuk işgücü ve sigorta olarak görülüyor: yüksek *TFR*." },
            { metin: "Bir çift, iki çocuğunun eğitimine daha çok yatırım yapmak için doğum kontrolü kullanıyor.", cevap: "sag", neden: "Çocuk sayısı azalıp çocuk başına yatırım artıyor: düşük *TFR*." }
          ] }
      ]
    },
    {
      baslik: "*TFR*'yi düşüren faktörler",
      kisa: "Toplumsal değerler, eğitim, iş, sağlık ve doğum kontrol erişimi birlikte *TFR*'yi düşürür.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🎓", baslik: "Eğitim", metin: "Okullaşma evlilik ve ilk doğum yaşını geciktirir; kadınlar bilgiye ve karar gücüne ulaşır." },
            { ikon: "💼", baslik: "İstihdam", metin: "Kadınlar ücretli işe girince çocuk bakımının fırsat maliyeti artar." },
            { ikon: "🏥", baslik: "Sağlık hizmeti", metin: "Bebek ve anne ölümleri azalınca \"yedek\" çocuğa duyulan ihtiyaç ortadan kalkar." },
            { ikon: "💊", baslik: "*Contraception* (doğum kontrol)", metin: "Aileler doğum zamanını ve sayısını planlayabilir." },
            { ikon: "🤝", baslik: "Toplumsal değerler", metin: "Küçük aile, kadının çalışması ve geç evlilik giderek normal kabul edilir." }
          ] },
        { tip: "tuzak", metin: "*TFR* düşüşünün tek bir kaynağı yoktur.", yanlis: "Kadınların eğitimi arttığında *TFR* yalnızca doğum kontrol yöntemleri yaygınlaştığı için düşer.", dogru: "Değerler, eğitim, iş, sağlık ve doğum kontrol ==birlikte== çalışır. Bu değişimler dünyanın çoğu bölgesinde *TFR*'yi düşürmüştür; bir kadın bu imkânlardan ne kadar çok yararlanırsa düşüş o kadar belirgindir." }
      ]
    },
    {
      baslik: "Kadınların rolü ve ölüm oranları",
      kisa: "Kadınların eğitimi ve sağlık erişimi, bebek ve anne ölümlerini azaltır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🍼", terim: "Infant mortality rate", tr: "bebek ölüm hızı", tanim: "Bir yılda her 1.000 canlı doğumda yaşamın ilk yılında ölen bebek sayısı.", ornek: "Hızı 20 ise 1.000 bebekten 20'si bir yaşını göremiyor." },
            { ikon: "🩺", terim: "Maternal mortality", tr: "anne ölümü", tanim: "Gebelik ya da doğumla ilgili nedenlerle ölen anne sayısı (100.000 canlı doğumda hesaplanır). Sağlık hizmeti arttıkça azalır.", ornek: "Doğumda hekim ve hemşire bulunması bu ölümleri azaltır." }
          ] },
        { tip: "adimlar", baslik: "Eğitim → daha az doğum: zincir", adimlar: [
            { baslik: "Kadın eğitimi artar", metin: "Daha çok kız çocuğu okula gider." },
            { baslik: "Sağlık bilgisi artar", metin: "Aşı, beslenme ve doğum öncesi bakım kullanımı yükselir." },
            { baslik: "Ölümler azalır", metin: "Bebek ve anne ölümleri düşer." },
            { baslik: "Çocuğun yaşayacağı bellidir", metin: "Aileler daha az doğum yapmakla yetinir." },
            { baslik: "*TFR* düşer", metin: "Ölüm hızı düştükten sonra doğum hızı da düşer: demografik dönüşümde 3. evreye geçiş." }
          ] }
      ]
    },
    {
      baslik: "Kadınlar ve göç",
      kisa: "Kadınlar bugün uluslararası göçmenlerin yaklaşık yarısıdır; rolleri değişince göç örüntüleri değişir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "💍", baslik: "Eskiden: eşe bağlı göç", maddeler: ["Erkek önce iş için gider, kadın ve çocuklar sonradan katılırdı", "Kadının göç kararı çoğu zaman ailenin kararına bağlıydı"] },
          sag: { ikon: "🧳", baslik: "Bugün: bağımsız göç", maddeler: ["Kadınlar hemşire, bakım ve ev işçisi, fabrika çalışanı olarak kendi işleri için gider", "Gelen para (*remittance*) ailenin geçimini ve çocukların eğitimini destekler"] } },
        { tip: "not", metin: "Kadınların eğitim, iş ve bağımsız karar gücü arttıkça kendi başlarına göç edenlerin sayısı da artar. Göç, doğurganlık ve ölüm gibi, kadınların değişen toplumsal, ekonomik ve siyasi rolünden etkilenir." }
      ]
    },
    {
      baslik: "Ravenstein'ın göç yasaları",
      kisa: "Ravenstein göçün yasalarını 1880'lerde yazdı: kısa mesafe, karşı akım, kadın ve erkek farkı.",
      bloklar: [
        { tip: "tablo", baslik: "Ravenstein'ın yasalarından başlıcaları", head: ["Yasa", "Anlamı"], rows: [
            ["Çoğu göçmen kısa mesafe gider", "Mesafe arttıkça göçmen sayısı azalır (*distance decay*)."],
            ["Uzun mesafe göçmenleri büyük şehirleri seçer", "Büyük şehirler ticaret ve sanayi merkezidir."],
            ["Her göç akımı bir karşı akım üretir", "Bir yöne gidenlerin bir kısmı geri döner ya da ters yöne gider."],
            ["Kırsal nüfus kentlilerden daha göçmendir", "Kentlilerin göç etme eğilimi daha düşüktür."],
            ["Kadınlar ülke içinde, erkekler uluslararası daha çok göç eder", "Ülke içinde kadın göçü, sınır aşan göçte erkek ağırlığı."],
            ["Çoğu göçmen yetişkindir; aileler uluslararası nadir göç eder", "Genç yetişkinler çocuklu ailelerden daha hareketlidir."],
            ["Büyük şehirler doğal artıştan çok göçle büyür", "Şehirde nüfus artışının ana kaynağı göçtür."],
            ["Ekonomik nedenler baskındır", "İş ve gelir, göçün ana motoru; ulaşım ve sanayi gelişince göç artar."]
          ], vurgu: 4 },
        { tip: "ikili", sol: { ikon: "👩", baslik: "Ülke içinde daha hareketli: kadınlar", maddeler: ["Köyden yakın şehre iş ya da evlilik için giden kadınlar"] },
          sag: { ikon: "👨", baslik: "Sınırı aşanlarda daha çok: erkekler", maddeler: ["Başka ülkelere iş için giden erkekler (Ravenstein'ın dönemi)"] },
          oyun: [
            { metin: "Köyünden komşu ilçedeki tekstil atölyesine giden genç kadınlar.", cevap: "sol", neden: "Ülke içi ve kısa mesafe: kadınlar." },
            { metin: "Başka bir kıtadaki inşaata giden ilk göçmen, çoğunlukla erkek.", cevap: "sag", neden: "Ravenstein'a göre uluslararası göçte erkekler öndeydi." },
            { metin: "Aynı ülkede büyükşehre eş olarak değil, kendi işi için taşınan kadınlar.", cevap: "sol", neden: "Ülke içinde kadın hareketliliği: Ravenstein'ın kadın yasası." }
          ] },
        { tip: "tuzak", metin: "Ravenstein'ın gözlemleri 1880'lerin verisine dayanır; bugünün rakamlarını birebir vermez.", yanlis: "Ravenstein'a göre kadınlar hem ülke içinde hem uluslararası göçte erkeklerden daha çoktur.", dogru: "Ravenstein, kadınların ==ülke içinde==, erkeklerin ==sınırlar ötesinde== daha hareketli olduğunu söyledi. Bugün ise kadınlar uluslararası göçmenlerin yaklaşık yarısıdır; yani kadınların rolü değişince örüntü de değişmiştir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*TFR* kadın başına ortalama çocuk sayısıdır; göçsüz nüfusun kendini yenilemesi için yaklaşık 2,1 gerekir.",
            "TFR 2,1'in altına inince nüfus hemen küçülmez; genç nüfus yüzünden küçülme bir süre gecikir.",
            "Kadınların eğitimi arttıkça *TFR* düşer (ters yönlü ilişki); doğum kontrol ve sağlık erişimi eğriyi daha da aşağı kaydırır.",
            "Düşüşün nedenleri birlikte çalışır: değerler, eğitim, istihdam, sağlık hizmeti ve *contraception*.",
            "Kadın eğitimi ve sağlık erişimi bebek ve anne ölümlerini azaltır; çocuğun yaşayacağından emin olan aileler daha az doğum yapar.",
            "Kadınların rolü değişince göç de değişti: bugün kadınlar uluslararası göçmenlerin yaklaşık yarısıdır ve kendi işleri için göç ederler.",
            "Ravenstein: çoğu göçmen kısa mesafe gider, her akımın karşı akımı olur, kırsal nüfus daha göçmendir, ekonomik nedenler baskındır.",
            "Ravenstein: kadınlar ülke içinde, erkekler uluslararası daha çok göç eder (1880'lerin gözlemi; bugün örüntü değişti)."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir ülkede kız çocuklarının liseye devam oranı %20'den %80'e çıkarken *TFR* 5,6'dan 2,3'e düşmüştür. Bu değişimi en iyi hangisi açıklar?",
      opts: ["Kadınların evlenme ve ilk doğum yaşının gecikmesi, iş imkânlarının artması ve doğum kontrole erişim", "Hükümetin üçüncü çocuğa nakit yardım vermeye başlaması", "Erkeklerin kitlesel olarak ülkeden göç etmesi", "Bebek ölümlerinin artması"],
      a: 0,
      why: "Eğitim evlilik yaşını geciktirir, çalışma fırsat maliyetini yükseltir ve doğum kontrolle sağlık bilgisini artırır; hepsi *TFR*'yi düşürür. B şıkkı çekici bir çeldiricidir ama *pronatalist* bir yardım *TFR*'yi artırır, düşürmez."
    },
    {
      q: "Grafikte kadınların ortalama okul yılı ile *TFR* arasındaki ilişki gösterilmiştir. X ülkesi Y noktasına geçerse en olası sonuç hangisidir?",
      fig: { type: "graph", xlabel: "Kadınların ortalama okul yılı", ylabel: "TFR", xmax: 12, ymax: 7, lines: [{ from: [1, 6.2], to: [11, 1.6], label: "Eğilim" }], points: [{ q: 3, p: 5, label: "X" }, { q: 10, p: 2, label: "Y" }], caption: "Varsayımsal veri" },
      opts: ["*TFR* artar çünkü daha fazla kadın çocuk sahibi olmak ister.", "*TFR* aynı kalır çünkü eğitim doğurganlığı etkilemez.", "Bebek ölümleri artar ve aileler daha çok çocuk doğurur.", "*TFR* düşer; bunun yanında evlenme yaşı yükselir ve doğum kontrol kullanımı artar."],
      a: 3,
      why: "Grafikte eğitim yılı arttıkça *TFR* azalıyor (ters yönlü ilişki). Eğitim; evlilik yaşını geciktirir, istihdam ve bilgi erişimini artırır. C şıkkı, eğitimle birlikte bebek ölümlerinin azaldığı gerçeğine ters düşer."
    },
    {
      q: "Aşağıdakilerden hangisi Ravenstein'ın göç yasalarıyla uyumludur?",
      opts: ["Göçmenlerin çoğu çok uzun mesafe gider ve küçük köyleri seçer.", "Ülke içinde göç edenler arasında kadınların payı erkeklerden fazladır.", "Kentte doğanlar köyde doğanlardan daha hareketlidir.", "Bir yöne giden göç akımı karşı yönde hiçbir akım üretmez."],
      a: 1,
      why: "Ravenstein, kadınların ülke içinde erkeklerden daha çok göç ettiğini söyledi. A, C ve D onun yasalarının tersidir: çoğu göçmen kısa mesafe gider, kırsal nüfus daha göçmendir ve her akım karşı akım doğurur."
    },
    {
      q: "Kadınların eğitim düzeyi arttıkça bir ülkede bebek ölümleri azalıyor. Bu durum *TFR*'yi neden düşürür?",
      opts: ["Aileler çocuk yetiştirmenin maliyetini yüksek bulduğu için hiç çocuk istemez.", "Hükümet *antinatalist* bir politika uygulamak zorunda kalır.", "Çocuklarının hayatta kalacağından emin olan aileler daha az doğum yapmak ister.", "Kadınlar göç ettiği için o ülkede doğum sayısı azalır."],
      a: 2,
      why: "Bebek ölümleri azalınca ailelerin \"yedek çocuk\" ihtiyacı kalmaz; bu da *TFR*'yi düşürür. A şıkkı çeldiricidir: neden maliyet değil, çocuğun hayatta kalma güvenidir. B ve D şıkları konuyla ilgisiz mekanizmalar sunar."
    },
    {
      q: "Göçün olmadığı bir ülkede *TFR* 1,4'tür. Yenileme düzeyi 2,1 kabul edilirse, bir sonraki kuşağın büyüklüğü mevcut kuşağın yaklaşık yüzde kaçı olur?",
      opts: ["%33", "%50", "%67", "%100"],
      a: 2,
      why: "Oran 1,4 ÷ 2,1 ≈ 0,67 çıkar; yani yaklaşık %67. D şıkkı (%100) yalnızca TFR tam yenileme düzeyinde (2,1) olduğunda doğru olurdu; B şıkkı ise 1,05'e karşılık gelirdi."
    }
  ]
};
