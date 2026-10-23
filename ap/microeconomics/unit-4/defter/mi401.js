/* Kitpath not defteri · mi401 · 4.1 Eksik Rekabete Giriş
   Kaynak: CED Topic 4.1 (PRD-3.B.1–4). Blok türleri: /ap/_kit/defter.js başı.
   Sayılar: sinema salonu; talep P = 100 − 0,1Q, MC = 20 TL. Grafikte 1 birim = 10 TL ve 100 bilet. */
window.DEFTER = {
  slug: "mi401",
  amac: "Bu konu tam rekabetin dışında kalan piyasaları (*imperfect competition*) tanıtıyor. Dört piyasa yapısını, talebin neden aşağı eğimli olduğunu, fiyatın neden marjinal maliyetin üstünde kaldığını ve giriş engellerinin bu yapıyı nasıl sürdürdüğünü öğreneceksin.",
  bolumler: [
    {
      baslik: "Eksik rekabetli piyasalar hangileri?",
      kisa: "Piyasa tam rekabetçi değilse firmalar fiyatı kendileri belirler.",
      bloklar: [
        { tip: "harita", merkez: "*Imperfect competition*", dallar: [
            { baslik: "*Monopoly*", alt: "Tek satıcı, yakın ikamesi yok (ürün piyasası)" },
            { baslik: "*Oligopoly*", alt: "Birkaç büyük satıcı, birbirine bağımlı (ürün piyasası)" },
            { baslik: "*Monopolistic competition*", alt: "Çok satıcı, farklılaştırılmış ürün (ürün piyasası)" },
            { baslik: "*Monopsony*", alt: "Faktör piyasasında tek alıcı, örneğin ilçedeki tek işveren" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "💪", terim: "Market power", tr: "piyasa gücü", tanim: "Firmanın fiyatı etkileyebilme gücü. Fiyatı yükseltirse satışı düşer, ama fiyatı kendisi seçer.", ornek: "Şehirdeki tek sinema bilet fiyatını kendisi koyar." },
            { ikon: "🏷️", terim: "Price maker", tr: "fiyat belirleyen", tanim: "Fiyatı piyasadan hazır almayan, kendisi seçen firma. Tam rekabetteki *price taker*'ın tersidir.", ornek: "Okul yanındaki ünlü kafe menü fiyatını kendi belirler." }
          ] }
      ]
    },
    {
      baslik: "Dört piyasa yapısı yan yana",
      kisa: "Firma sayısı, ürün türü ve giriş engeli piyasa yapısını belirler.",
      bloklar: [
        { tip: "tablo", baslik: "Piyasa yapıları", head: ["Yapı", "Firma sayısı", "Ürün", "Giriş engeli", "Fiyat gücü", "Örnek"], rows: [
            ["*Perfect competition*", "Çok", "Aynı", "Yok", "Yok (*price taker*)", "Buğday üreticileri"],
            ["*Monopolistic competition*", "Çok", "Farklılaştırılmış", "Düşük", "Biraz", "Okul çevresindeki kafeler"],
            ["*Oligopoly*", "Birkaç", "Aynı ya da farklı", "Yüksek", "Önemli, birbirine bağlı", "Cep telefonu operatörleri"],
            ["*Monopoly*", "Bir", "Yakın ikamesi yok", "Çok yüksek", "Büyük", "İlçedeki tek su dağıtım şirketi"]
          ], not: "Üstteki satırlardan ilk biri kıyas noktasıdır; diğer üçü eksik rekabetin ürün piyasası biçimleridir." },
        { tip: "ikili", sol: { ikon: "🧺", baslik: "*Price taker*", maddeler: ["Fiyat piyasadan verilir", "Talebi yataydır", "Fiyatı yükseltirse hiç satamaz"] },
          sag: { ikon: "🏷️", baslik: "*Price maker*", maddeler: ["Fiyatı kendisi seçer", "Talebi aşağı eğimlidir", "Fiyat yükselirse satışı düşer"] },
          oyun: [
            { metin: "Pazarda yüzlerce satıcı aynı domatesi aynı fiyata satıyor.", cevap: "sol", neden: "Aynı ürün, çok satıcı: tek satıcı fiyatı belirleyemez." },
            { metin: "Şehirdeki tek elektrik dağıtım şirketi tarifeyi kendisi belirliyor.", cevap: "sag", neden: "Tek satıcı: fiyatı o koyar." },
            { metin: "Bir kuaför kendi stilinin fiyatını koyuyor; çok artırırsa bazı müşteriler gidiyor.", cevap: "sag", neden: "Ürün farklılaşmış: bir ölçüde fiyat belirler." },
            { metin: "Buğday çiftçisi borsa fiyatını verilen kabul ediyor.", cevap: "sol", neden: "Fiyat piyasadan geliyor: *price taker*." }
          ] }
      ]
    },
    {
      baslik: "Firmanın talebi aşağı eğimli",
      kisa: "Eksik rekabette firma, daha çok satmak için fiyatı düşürmek zorundadır.",
      bloklar: [
        { tip: "grafik", baslik: "Firmanın talebi: tam rekabette yatay, eksik rekabette aşağı eğimli", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "200" }, { v: 3, label: "300" }], yticks: [{ v: 5, label: "50" }, { v: 7, label: "70" }, { v: 8, label: "80" }],
          ogeler: [
            { id: "pc", tip: "cizgi", renk: 1, from: [0, 5], to: [9, 5], etiket: "d" },
            { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [9.4, 0.6], etiket: "D", gizli: true },
            { id: "A", tip: "nokta", renk: 2, x: 2, y: 8, etiket: "80 TL", kilavuz: true, gizli: true },
            { id: "B", tip: "nokta", renk: 2, x: 3, y: 7, etiket: "70 TL", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Tam rekabette firma *price taker*'dır: fiyat piyasadan verilir, firmanın talebi (*d*) yataydır. 50 TL'den istediği kadar satar.", goster: ["pc"] },
            { metin: "Eksik rekabette firma fiyatı kendisi seçer; ama talebi ==aşağı eğimlidir==. Fiyatı ne kadar yükseltirse o kadar az satar.", gizle: ["pc"], goster: ["D"] },
            { metin: "Fiyat 80 TL iken 200 bilet satılıyor.", goster: ["A"] },
            { metin: "300. bileti de satmak için fiyatı ==70 TL'ye== indirmek zorunda. Daha çok satmanın bedeli fiyatı düşürmektir.", goster: ["B"] }
          ] },
        { tip: "not", metin: "Tam rekabetli firma fiyatı değiştiremez; eksik rekabetli firma değiştirebilir ama satışını kaybederek öder. ==Ek bir birim satmak için fiyatı düşürmek== zorunda olduğundan ek gelir (*MR*) fiyattan küçük kalır; bunu tekel konusunda ayrıntılı göreceksin." }
      ]
    },
    {
      baslik: "Fiyat marjinal maliyetin üstünde: verimsizlik",
      kisa: "Eksik rekabette fiyat MC'nin üstündedir; üretim toplumsal olarak az kalır.",
      bloklar: [
        { tip: "grafik", baslik: "Verimli miktar ile eksik rekabetli miktar", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
          xticks: [{ v: 4, label: "400" }, { v: 8, label: "800" }], yticks: [{ v: 2, label: "20" }, { v: 6, label: "60" }],
          ogeler: [
            { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [9.4, 0.6], etiket: "D" },
            { id: "MC", tip: "cizgi", renk: 2, from: [0, 2], to: [9.2, 2], etiket: "MC" },
            { id: "E", tip: "nokta", renk: 1, x: 8, y: 2, kilavuz: true, gizli: true },
            { id: "F", tip: "nokta", renk: 2, x: 4, y: 6, etiket: "P = 60", kilavuz: true, gizli: true },
            { id: "dwl", tip: "alan", renk: 2, noktalar: [[4, 6], [4, 2], [8, 2]], gizli: true },
            { id: "dwlT", tip: "yazi", x: 5.2, y: 3, metin: "DWL", gizli: true }
          ],
          durumlar: [
            { metin: "Bilet piyasası: ek bir bileti üretmenin maliyeti ==MC = 20 TL== (sabit). Talep eğrisi, alıcının her bilete verdiği değeri (*marginal benefit*) gösterir." },
            { metin: "Verimli miktar, değerle maliyetin eşitlendiği yerdir: ==P = MC==. Burada **800 bilet** üretilir.", goster: ["E"] },
            { metin: "Eksik rekabetli salon daha az üretir; örneğin **400 bilet** ve **60 TL** (nedenini sonraki konuda bulacaksın). Burada ==P (60) > MC (20)==.", goster: ["F"] },
            { metin: "400. ile 800. bilet arasında alıcı 20 TL'den fazla değer biçiyor, üretim 20 TL'ye mal oluyor; ama bu alışverişler gerçekleşmiyor. Kaybolan değer ==*DWL*==.", goster: ["dwl", "dwlT"] }
          ] },
        { tip: "ornek", baslik: "500. bilet kime yarar?", durum: "Aynı salonda talep P = 100 − 0,1Q, MC = 20 TL ve salon 400 bilette duruyor. Alıcının 500. bilete verdiği değerle üretim maliyetini karşılaştır.",
          adimlar: [
            "Talep eğrisi 500. bilette 100 − 0,1 × 500 = 50 TL gösterir: alıcı bu bilete 50 TL'ye kadar değer biçiyor (*marginal benefit*).",
            "Bu bileti üretmenin ek maliyeti 20 TL (*MC*).",
            "50 > 20: bilet üretilse alıcı ile salon birlikte 30 TL kazanırdı.",
            "Salon yine de üretmez: 400. ile 500. bilet arasında toplam gelir 24.000 TL'den 25.000 TL'ye çıkar, yani bilet başına yalnız 10 TL ek gelir; bu 20 TL'lik MC'nin altında."
          ],
          sonuc: "30 TL'lik ortak kazanç boşa gidiyor. Fiyat (60 TL) maliyetin (20 TL) üstünde kaldığı için fiyat sinyali alıcıyı ve üreticiyi verimli miktarda buluşturamıyor; bu fırsatların toplamı ==*DWL*==." },
        { tip: "tuzak", baslik: "Kâr, verimlilik demek değildir", metin: "Firma kâr ediyor ve alıcılar bilet alabiliyor diye piyasa verimli olmaz. Verimlilik ölçütü kâr değil, ==P = MC== koşuludur.", yanlis: "Firma kâr ediyorsa piyasa verimlidir.", dogru: "Eksik rekabette P > MC'dir; alıcının değer verdiği ama üretilmeyen birimler vardır ve *DWL* doğar." }
      ]
    },
    {
      baslik: "Giriş engelleri: yapıyı ayakta tutan şey",
      kisa: "Giriş engeli, kârı gören yeni firmaların piyasaya girmesini zorlaştırır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💰", terim: "High fixed / start-up costs", tr: "yüksek sabit ve başlangıç maliyeti", tanim: "Piyasaya girmek için çok büyük bir yatırım gerekir; küçük girişimci bunu karşılayamaz.", ornek: "Hava yolu şirketi kurmak için uçak filosu ve altyapı gerekir." },
            { ikon: "📜", terim: "Legal barriers", tr: "yasal engeller", tanim: "Patent, telif, lisans ya da devletin tek firmaya verdiği izin gibi yasal korumalar.", ornek: "Yeni bir ilacın patenti, rakiplerin aynı ilacı satmasını engeller." },
            { ikon: "🗝️", terim: "Exclusive ownership of key resources", tr: "anahtar kaynağın tekelde olması", tanim: "Üretim için vazgeçilmez bir girdinin tek firmanın elinde olması.", ornek: "Adadaki tek tatlı su kaynağı tek bir şirkete ait." }
          ] },
        { tip: "ikili", sol: { ikon: "🚧", baslik: "Giriş engeli var", maddeler: ["Kâr görünse de yeni firma giremez", "Kâr uzun süre sürebilir"] },
          sag: { ikon: "🚪", baslik: "Giriş engeli yok", maddeler: ["Kâr görünce yeni firmalar girer", "Fiyat ve kâr düşer"] },
          oyun: [
            { metin: "Yeni bir ilaç için alınan patent, aynı ilacın başkaları tarafından satılmasını yasaklıyor.", cevap: "sol", neden: "Yasal engel." },
            { metin: "Mahallede yeni bir tost büfesi açmak için birkaç makine yetiyor.", cevap: "sag", neden: "Yatırım küçük, giriş kolay." },
            { metin: "Adadaki tek tatlı su kaynağı bir firmaya ait.", cevap: "sol", neden: "Anahtar kaynağın sahipliği." },
            { metin: "Hava yolu şirketi kurmak için milyarlarca liralık filo ve altyapı gerekiyor.", cevap: "sol", neden: "Yüksek sabit ve başlangıç maliyeti." },
            { metin: "Pazarda domates satmak için herkes ucuz bir tezgâh kurabiliyor.", cevap: "sag", neden: "Engel yok." }
          ] }
      ]
    },
    {
      baslik: "Giriş engeli kârın kaderini belirler",
      kisa: "Engel yoksa yeni firmalar kârı eritir; engel varsa kâr sürebilir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🚪", baslik: "Engel yok", maddeler: ["Kâr var, yeni firmalar girer", "Mevcut firmanın talebi azalır, fiyat düşer", "Uzun dönemde ekonomik kâr sıfıra iner"] },
          sag: { ikon: "🚧", baslik: "Engel var", maddeler: ["Kâr var ama yeni firma giremez", "Fiyat MC'nin üstünde kalır", "Kâr uzun dönemde de sürebilir"] } },
        { tip: "tuzak", metin: "Eksik rekabetli piyasa demek, firmaların sonsuza kadar kâr etmesi demek değildir. Kâr kalıcılığı giriş engeline bağlıdır.", yanlis: "Eksik rekabetli her piyasada firmalar uzun dönemde ekonomik kâr eder.", dogru: "Tekel ve oligopolde engeller kârı koruyabilir; engeli düşük olan tekelci rekabette uzun dönemde ekonomik kâr sıfıra iner (4.4)." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Eksik rekabet: *monopoly*, *oligopoly*, *monopolistic competition* (ürün piyasaları) ve *monopsony* (faktör piyasası).",
            "Bu firmalar *price maker*'dır: talepleri aşağı eğimlidir, ek birim satmak için fiyatı düşürmek zorundadırlar.",
            "Tam rekabet: çok firma, aynı ürün, engel yok. Tekel: tek firma. Oligopol: birkaç büyük firma. Tekelci rekabet: çok firma, farklılaştırılmış ürün.",
            "Eksik rekabette P > MC: fiyat, alıcı ile üreticiyi verimli miktarda buluşturmaz; üretim az kalır ve *DWL* oluşur.",
            "Verimli çıktı P = MC'dedir; eksik rekabette çıktı bundan küçüktür.",
            "Giriş engelleri: yüksek sabit/başlangıç maliyeti, yasal engeller, anahtar kaynağın tek firmada olması.",
            "Engel yoksa yeni firmalar kârı eritir; engel varsa kâr sürebilir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir firma, diğer her şey sabitken ek bir birim daha satmak için fiyatını düşürmek zorunda kalıyor. Bu firma için hangisi kesinlikle doğrudur?",
      opts: ["Firma *price taker*'dır ve talebi yataydır.", "Firma bir ölçüde piyasa gücüne sahiptir; piyasası eksik rekabetlidir.", "Firma tam rekabetli bir piyasada kâr maksimize edemez.", "Firma kesinlikle tekeldir."], a: 1,
      why: "Aşağı eğimli talep, fiyatı belirleyebilme yani piyasa gücü demektir; bu eksik rekabetin ortak özelliğidir. \"Kesinlikle tekel\" cazip bir tuzak: tekelci rekabet ve oligopol de aynı özelliği taşır." },
    { q: "Bir ülkede araba lastiği satan üç büyük firma var. Yeni firmanın girmesi çok zor ve her firma fiyat kararında diğerlerinin tepkisini hesaba katıyor. Bu piyasa için en doğru tanım hangisidir?",
      opts: ["*Perfect competition*", "*Monopolistic competition*", "*Monopsony*", "*Oligopoly*"], a: 3,
      why: "Birkaç büyük firma, yüksek giriş engeli ve karşılıklı bağımlılık oligopolü tanımlar. Tekelci rekabette çok firma ve kolay giriş vardır; *monopsony* ise faktör piyasasında tek alıcıdır." },
    { q: "Grafik bir sinema salonunun bilet piyasasını gösteriyor. Salon A noktasında (400 bilet, 60 TL) satış yapıyor. Hangisi doğrudur?",
      fig: { type: "graph", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
        lines: [{ from: [0, 10], to: [9.2, 0.8], label: "D" }, { from: [0, 2], to: [9, 2], label: "MC", color: 2 }],
        points: [{ q: 4, p: 6, label: "A", guides: true }, { q: 8, p: 2, label: "B", guides: true }],
        xticks: [{ v: 4, label: "400" }, { v: 8, label: "800" }], yticks: [{ v: 2, label: "20" }, { v: 6, label: "60" }] },
      opts: ["A'da P > MC'dir; B'deki miktar toplumsal olarak verimli olurdu.", "A'da P = MC'dir; üretim verimlidir.", "A'da MC > P'dir; salon zarar ediyordur.", "B'de P > MC'dir; salon B'de üretmek ister."], a: 0,
      why: "A'da fiyat 60, MC 20 olduğundan P > MC; verimli miktar P = MC'nin kesiştiği B'dir (800 bilet). \"Zarar ediyordur\" yanlış: grafikte ATC yok, kâr ya da zarar çıkarılamaz; ayrıca P > MC olduğundan MC > P iddiası da yanlıştır." },
    { q: "Aşağıdakilerden hangisi bir *barrier to entry* örneği DEĞİLDİR?",
      opts: ["Bir ilacın patent koruması", "Bir şirketin adadaki tek tatlı su kaynağına sahip olması", "Piyasaya girmek için çok yüksek bir başlangıç yatırımı gerekmesi", "Piyasadaki ürünün bütün firmalarda birebir aynı olması"], a: 3,
      why: "Patent yasal engel, tek kaynağın sahipliği anahtar kaynak engeli, yüksek başlangıç yatırımı yüksek sabit maliyet engelidir. Ürünlerin aynı olması giriş engeli değil, tam rekabetin bir özelliğidir (tam rekabette giriş serbesttir)." },
    { q: "Bir ilçedeki tek fabrika, bölgedeki işçilerin tek işverenidir. Bu durum için hangisi doğrudur?",
      opts: ["Ürün piyasasında *oligopoly*", "Emek piyasasında *monopoly*", "Emek (faktör) piyasasında *monopsony*", "Emek piyasasında *monopolistic competition*"], a: 2,
      why: "Bir faktörü (emeği) satın alan tek alıcı vardır: bu *monopsony*'dir. *Monopoly* tek satıcıdır; ikisini karıştırmak en yaygın hatadır." }
  ]
};
