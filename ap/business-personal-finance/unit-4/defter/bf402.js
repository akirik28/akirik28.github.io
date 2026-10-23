/* Kitpath not defteri · bf402 · 4.2 KPI'larla Performans Değerlendirme
   Kaynak: College Board CED, Topic 4.2 (4.2.A–4.2.C). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf402",
  amac: "Bu konu işletmenin performansını sayılarla ölçmeyi anlatıyor: KPI nedir, finansal, müşteri ve operasyon KPI'ları nasıl hesaplanır ve sonuç benchmark ile nasıl yorumlanır öğreneceksin.",
  bolumler: [
    {
      baslik: "KPI nedir ve hangisini seçeriz?",
      kisa: "KPI, işletmenin hedeflerine ne kadar yaklaştığını ölçen veridir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Key performance indicator (KPI)", tr: "temel performans göstergesi", tanim: "İşletmenin performansını, yani kısa ve uzun vadeli hedeflere ilerlemesini ve stratejisinin ne kadar işe yaradığını ölçen veri noktası.", ornek: "Kantinin aylık brüt kâr marjı ya da müşteri sayısı." },
            { ikon: "🔀", terim: "Financial and nonfinancial KPIs", tr: "finansal ve finansal olmayan KPI'lar", tanim: "Para cinsinden ya da paraya dayalı oranlar (gelir, kâr marjı) finansaldır; memnuniyet, teslimat zamanlaması gibi göstergeler finansal olmayandır. İşletme ikisini birlikte izler.", ornek: "Brüt kâr marjı finansal; zamanında teslimat yüzdesi finansal olmayan KPI." }
          ] },
        { tip: "harita", merkez: "KPI grupları", dallar: [
            { baslik: "Finansal sağlık", alt: "gelir, brüt kâr, brüt kâr marjı, faaliyet kârı ve marjı, *COGS*, faaliyet giderleri, nakit akışı" },
            { baslik: "Pazarlama ve satış", alt: "müşteri kazanma maliyeti, müşteri yaşam boyu değeri, memnuniyet, elde tutma, toplam satış, pazar payı" },
            { baslik: "Operasyon", alt: "birim maliyet, teslimat maliyeti, sipariş doğruluğu, zamanında teslimat yüzdesi" }
          ] },
        { tip: "tablo", baslik: "Aynı KPI her işletmeye uymaz", head: ["İşletme", "Öne çıkan hedef", "Uygun KPI örneği"], rows: [
            ["Okul kantini", "Kârlı ve verimli olmak", "Brüt kâr marjı, birim maliyet"],
            ["Online giyim mağazası", "Sadık müşteri kazanmak", "Müşteri elde tutma, müşteri kazanma maliyeti"],
            ["Yemek paket servisi", "Güvenilir hizmet", "Zamanında teslimat yüzdesi, sipariş doğruluğu"]
          ], not: "Yönetici, KPI'ları misyonuna, hedeflerine, kârlılığına ve uzun vadede ayakta ve rekabetçi kalmasına bağlı olarak seçer. İşletmenin özelliği ve sektörü KPI'ları değiştirir." },
        { tip: "tuzak", baslik: "Her sayı KPI değildir", metin: "KPI, işletmenin hedefine bağlı olduğu için anlamlıdır.", yanlis: "İşletmenin topladığı her veri bir KPI'dır.", dogru: "KPI ==hedef ve stratejiyle ilişkili== bir göstergedir. Kantin için sosyal medya beğeni sayısı, hedef marka bilinirliği değilse ana KPI olmaz." }
      ]
    },
    {
      baslik: "Finansal KPI'lar: gelirden kâra",
      kisa: "Gelirden önce satılan malın maliyeti, sonra faaliyet giderleri düşülür; kalan kârdır.",
      bloklar: [
        { tip: "tablo", baslik: "Finansal KPI'lar ve formülleri", head: ["KPI", "Anlamı / formülü", "Not"], rows: [
            ["*Revenue* (gelir)", "Satıştan elde edilen toplam para", "Fiyat × satılan adet"],
            ["*COGS* (satılan malın maliyeti)", "Sattığın ürünün doğrudan maliyeti", "Malzeme, doğrudan üretim"],
            ["*Gross profit* (brüt kâr)", "Gelir − *COGS*", "Ürünün kendi kazancı"],
            ["*Gross profit margin*", "Brüt kâr ÷ gelir × 100", "Gelirin % kaçı brüt kâr?"],
            ["*Operating expenses* (faaliyet giderleri)", "*COGS* dışında işi yürütme giderleri", "Kira, maaş, elektrik, reklam"],
            ["*Operating profit* (faaliyet kârı)", "Brüt kâr − faaliyet giderleri", "İşin kendisinden kalan"],
            ["*Operating profit margin*", "Faaliyet kârı ÷ gelir × 100", "Gelirin % kaçı faaliyet kârı?"],
            ["*Cash flow* (nakit akışı)", "Giren nakit − çıkan nakit", "Kârlı olsan da kasa boşalabilir"]
          ] },
        { tip: "grafik", baslik: "Kantin bir ayda: gelirden faaliyet kârına (bin TL)", xlabel: "Aşama", ylabel: "Bin TL", xmax: 6, ymax: 110, xticks: [{ v: 1, label: "Gelir" }, { v: 2, label: "COGS" }, { v: 3, label: "Brüt kâr" }, { v: 4, label: "Giderler" }, { v: 5, label: "Faal. kârı" }], yticks: [{ v: 15, label: "15" }, { v: 40, label: "40" }, { v: 100, label: "100" }],
          ogeler: [
            { id: "rev", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "cg", tip: "alan", renk: 1, noktalar: [[1.65, 100], [2.35, 100], [2.35, 100], [1.65, 100]] },
            { id: "gp", tip: "alan", renk: 2, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "ox", tip: "alan", renk: 1, noktalar: [[3.65, 40], [4.35, 40], [4.35, 40], [3.65, 40]] },
            { id: "op", tip: "alan", renk: 3, noktalar: [[4.65, 0], [5.35, 0], [5.35, 0], [4.65, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 104, metin: "100", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 104, metin: "−60", gizli: true },
            { id: "t3", tip: "yazi", x: 3, y: 44, metin: "40", gizli: true },
            { id: "t4", tip: "yazi", x: 4, y: 44, metin: "−25", gizli: true },
            { id: "t5", tip: "yazi", x: 5, y: 19, metin: "15", gizli: true },
            { id: "m1", tip: "yazi", x: 5.9, y: 95, metin: "Brüt marj = %40", hiza: "end", gizli: true },
            { id: "m2", tip: "yazi", x: 5.9, y: 82, metin: "Faaliyet marjı = %15", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Ay boyunca kantinin ==geliri 100 bin TL==.", set: { rev: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 100], [0.65, 100]] } }, goster: ["t1"] },
            { metin: "Satılan ürünlerin doğrudan maliyeti (*COGS*) ==60 bin TL==: gelirden düşer.", set: { cg: { noktalar: [[1.65, 100], [2.35, 100], [2.35, 40], [1.65, 40]] } }, goster: ["t2"] },
            { metin: "Geriye ==brüt kâr 40 bin TL== kalır. Brüt kâr marjı %40.", set: { gp: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 40], [2.65, 40]] } }, goster: ["t3", "m1"] },
            { metin: "Kira, maaş, elektrik gibi ==faaliyet giderleri 25 bin TL==: brüt kârdan düşer.", set: { ox: { noktalar: [[3.65, 40], [4.35, 40], [4.35, 15], [3.65, 15]] } }, goster: ["t4"] },
            { metin: "Kalan ==faaliyet kârı 15 bin TL==; faaliyet kâr marjı %15.", set: { op: { noktalar: [[4.65, 0], [5.35, 0], [5.35, 15], [4.65, 15]] } }, goster: ["t5", "m2"] }
          ] },
        { tip: "ornek", baslik: "Gelir arttı, marj düştü", durum: "Mart'ta kantinin geliri 100.000 TL, *COGS* 60.000 TL, faaliyet gideri 25.000 TL idi. Nisan'da gelir 120.000 TL, *COGS* 78.000 TL, faaliyet gideri 27.000 TL. Faaliyet kâr marjı nasıl değişti?",
          adimlar: ["Mart: brüt kâr = 100.000 − 60.000 = 40.000; faaliyet kârı = 40.000 − 25.000 = 15.000; marj = 15.000 ÷ 100.000 = %15.", "Nisan: brüt kâr = 120.000 − 78.000 = 42.000 (marj %35); faaliyet kârı = 42.000 − 27.000 = 15.000.", "Nisan faaliyet kâr marjı = 15.000 ÷ 120.000 = %12,5.", "Faaliyet kârı aynı kaldı ama gelir arttığı için marj düştü."],
          sonuc: "Kâr 15.000 TL ile ==aynı==, marj ==%15'ten %12,5'e düştü==. Gelir büyürken maliyetler daha hızlı büyüdü." },
        { tip: "tuzak", baslik: "Kâr, marj ve nakit aynı şey değildir", metin: "Üç kavram farklı sorulara cevap verir.", yanlis: "Kâr yüksekse marj da yüksektir; kâr varsa kasada para vardır.", dogru: "Kâr TL'dir, ==marj yüzdedir==; yukarıdaki örnekte kâr sabit, marj düştü. Kâr (hesapta) ile *cash flow* (kasada) da farklıdır: veresiye satış kârı yazar ama para henüz gelmemiştir." }
      ]
    },
    {
      baslik: "Müşteri ve pazar KPI'ları",
      kisa: "Müşteriyi kazanma maliyeti, elde tutma ve pazar payı büyümeyi gösterir.",
      bloklar: [
        { tip: "tablo", baslik: "Pazarlama ve satış KPI'ları", head: ["KPI", "Nasıl ölçülür?", "Örnek"], rows: [
            ["*Customer acquisition cost* (*CAC*)", "Pazarlama ve satış gideri ÷ yeni müşteri", "10.000 TL ÷ 50 = 200 TL"],
            ["*Customer lifetime value* (*CLV*)", "Bir müşterinin ilişki boyunca bırakacağı tahmini toplam", "Ayda 100 TL × 24 ay = 2.400 TL"],
            ["*Customer satisfaction ratings*", "Müşteri puanlarının ortalaması", "5 üzerinden 4,5"],
            ["*Customer retention*", "Dönem başındaki müşterilerin kalan yüzdesi", "200 müşteriden 190'ı kaldı: %95"],
            ["*Total sales*", "Dönemin toplam satışı (TL ya da adet)", "Ayda 30.000 TL"],
            ["*Market share*", "Firma satışı ÷ sektör toplam satışı × 100", "30.000 ÷ 200.000 = %15"]
          ] },
        { tip: "formul", parcalar: [
            { t: "Müşteri kaybı oranı (*churn*)", alt: "kayıp yüzdesi" }, "=",
            { t: "Kaybedilen müşteri", alt: "dönemde ayrılan" }, "÷",
            { t: "Dönem başı müşteri", alt: "başlangıçtaki" }, "× 100"
          ], aciklama: "Elde tutma oranı = 100 − müşteri kaybı oranı. İşletme müşteri kaybını düşük, elde tutmayı yüksek ister." },
        { tip: "ornek", baslik: "Abonelik uygulaması: bir ayın bilançosu", durum: "Bir çalışma uygulamasının ay başında 200 abonesi var. Ay içinde 10 abone ayrılıyor, 30 yeni abone geliyor. Aynı ay reklam ve satışa 6.000 TL harcanıyor. Müşteri kaybı oranı, elde tutma oranı ve *CAC* kaçtır?",
          adimlar: ["Kayıp oranı = 10 ÷ 200 × 100 = %5.", "Elde tutma = 100 − 5 = %95 (200 abonenin 190'ı kaldı).", "*CAC* = 6.000 ÷ 30 yeni abone = 200 TL.", "Ay sonu abone sayısı = 200 − 10 + 30 = 220."],
          sonuc: "Kayıp ==%5==, elde tutma ==%95==, *CAC* ==200 TL==. Abone sayısı büyüdü; kayıp düşük, o yüzden sağlıklı." }
      ]
    },
    {
      baslik: "Operasyon KPI'ları",
      kisa: "Operasyon KPI'ları işin ne kadar ucuz, doğru ve zamanında yapıldığını ölçer.",
      bloklar: [
        { tip: "tablo", baslik: "Operasyon hedefleri için dört KPI", head: ["KPI", "Formül", "Ne söyler?"], rows: [
            ["*Per-unit cost* (birim maliyet)", "Toplam maliyet ÷ üretilen birim", "Bir ürünün ortalama maliyeti"],
            ["*Delivery cost* (teslimat maliyeti)", "Toplam teslimat gideri ÷ teslimat sayısı", "Bir teslimatın ortalama maliyeti"],
            ["*Order accuracy* (sipariş doğruluğu)", "Doğru sipariş ÷ toplam sipariş × 100", "Hatasız siparişlerin yüzdesi"],
            ["Zamanında teslimat yüzdesi", "Zamanında gelen ÷ toplam teslimat × 100", "Söz verilen sürede gelenlerin yüzdesi"]
          ] },
        { tip: "ornek", baslik: "Kampüs paket servisi", durum: "Bir paket servis ayda 200 sipariş teslim ediyor. 190'ı doğru, 170'i zamanında geliyor. Toplam teslimat gideri 3.000 TL. 200 porsiyonun üretim maliyeti 9.000 TL.",
          adimlar: ["Sipariş doğruluğu = 190 ÷ 200 = %95.", "Zamanında teslimat = 170 ÷ 200 = %85.", "Teslimat maliyeti = 3.000 ÷ 200 = 15 TL.", "Birim maliyet = 9.000 ÷ 200 = 45 TL."],
          sonuc: "Doğruluk ==%95==, zamanındalık ==%85==, teslimat ==15 TL==, birim maliyet ==45 TL==. Gecikme, en çok geliştirilecek alan." },
        { tip: "ikili", sol: { ikon: "⬆️", baslik: "Yüksek olması iyi", maddeler: ["Brüt kâr marjı", "Müşteri yaşam boyu değeri (*CLV*)", "Elde tutma oranı", "Sipariş doğruluğu, zamanında teslimat"] },
          sag: { ikon: "⬇️", baslik: "Düşük olması iyi", maddeler: ["Müşteri kazanma maliyeti (*CAC*)", "Müşteri kaybı oranı", "Birim maliyet", "Teslimat maliyeti"] },
          oyun: [
            { metin: "Müşteri kazanma maliyeti (*CAC*)", cevap: "sag", neden: "Her müşteriye ne kadar az harcanırsa o kadar iyi." },
            { metin: "Müşteri yaşam boyu değeri (*CLV*)", cevap: "sol", neden: "Müşteri ne kadar çok bırakırsa o kadar iyi." },
            { metin: "Zamanında teslimat yüzdesi", cevap: "sol", neden: "Yüzde arttıkça iş güvenilir." },
            { metin: "Birim maliyet", cevap: "sag", neden: "Aynı ürün ne kadar ucuza üretilirse marj o kadar iyi." },
            { metin: "Müşteri kaybı oranı (*churn*)", cevap: "sag", neden: "Az müşteri kaybı istenir; elde tutma ise yüksek istenir." }
          ] }
      ]
    },
    {
      baslik: "Benchmark: sonucu bir ölçütle kıyasla",
      kisa: "KPI tek başına anlam taşımaz; geçmişle ya da sektörle kıyaslanınca anlam kazanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Benchmark", tr: "kıyas ölçütü", tanim: "Verileri bir standartla karşılaştırmak için kullanılan referans noktası. İşletme KPI'ını benchmark ile kıyaslayıp performansını bilinen bir standarda göre değerlendirir.", ornek: "Kantinin %15'lik marjını sektördeki %18 ile karşılaştırmak." },
            { ikon: "🕰️", terim: "Internal / external benchmark", tr: "iç ve dış benchmark", tanim: "İç benchmark işletmenin kendi geçmiş verisidir (geçen yıl). Dış benchmark sektör standardıdır (sektör ortalaması).", ornek: "İç: geçen yıl %12. Dış: sektör ortalaması %18." }
          ] },
        { tip: "grafik", baslik: "Faaliyet kâr marjı: geçmiş ve sektörle kıyas", xlabel: "Ölçüt", ylabel: "Faaliyet kâr marjı (%)", xmax: 5, ymax: 20, xticks: [{ v: 1, label: "Geçen yıl" }, { v: 2, label: "Bu yıl" }, { v: 3, label: "Sektör ort." }], yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }, { v: 15, label: "15" }, { v: 20, label: "20" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b3", tip: "alan", renk: 2, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "l1", tip: "yazi", x: 1, y: 13.5, metin: "%12", gizli: true },
            { id: "l2", tip: "yazi", x: 2, y: 16.5, metin: "%15", gizli: true },
            { id: "l3", tip: "yazi", x: 3, y: 19.5, metin: "%18", gizli: true },
            { id: "bm", tip: "cizgi", from: [0, 18], to: [5, 18], renk: 2, kesik: true, gizli: true },
            { id: "c1", tip: "yazi", x: 4.25, y: 10, metin: "Kendine göre +3", gizli: true },
            { id: "c2", tip: "yazi", x: 4.25, y: 6, metin: "Sektöre göre −3", gizli: true }
          ],
          durumlar: [
            { metin: "İşletmenin ==geçen yıl== faaliyet kâr marjı %12. Bu, ==iç benchmark==.", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 12], [0.65, 12]] } }, goster: ["l1"] },
            { metin: "==Bu yıl== %15. Geçmişe göre ==3 puan== iyileşme.", set: { b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 15], [1.65, 15]] } }, goster: ["l2", "c1"] },
            { metin: "==Sektör ortalaması== %18 (==dış benchmark==).", set: { b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 18], [2.65, 18]] } }, goster: ["l3", "bm"] },
            { metin: "Sonuç: kendine göre iyi, sektöre göre ==3 puan geride==. Aynı KPI, hangi benchmark seçildiğine göre farklı hikâye anlatır.", goster: ["c2"] }
          ] },
        { tip: "tuzak", baslik: "%15 iyi mi? Duruma bağlı", metin: "Bir KPI'ın iyi ya da kötü olduğunu kıyas ölçütü söyler.", yanlis: "Faaliyet kâr marjı %15 ise performans iyidir.", dogru: "Sayı tek başına bir şey söylemez. ==Geçmişten daha iyi ama sektörden kötü== olabilir. Bu yüzden iç ve dış benchmark birlikte okunur." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "KPI, işletmenin kısa ve uzun vadeli hedeflerine ilerlemesini ve stratejisinin etkisini ölçen veridir; misyon, kârlılık ve uzun vadeli rekabet gücüne göre seçilir.",
            "KPI'lar sektöre ve işletmeye göre değişir; finansal ve finansal olmayan göstergeler birlikte izlenir.",
            "Finansal: gelir − *COGS* = brüt kâr; brüt kâr − faaliyet gideri = faaliyet kârı. Marjlar, kârın gelire bölünmesiyle bulunur. *Cash flow* kârdan farklıdır.",
            "Örnek: gelir 100, *COGS* 60, gider 25 → brüt marj %40, faaliyet marjı %15. Kâr aynı kalıp gelir artarsa marj düşer.",
            "Müşteri ve pazar: *CAC* = pazarlama ve satış gideri ÷ yeni müşteri; *CLV*; memnuniyet; elde tutma (%95) ve kaybı (%5); toplam satış; *market share* = firma satışı ÷ sektör satışı.",
            "Operasyon: birim maliyet, teslimat maliyeti, sipariş doğruluğu ve zamanında teslimat yüzdesi.",
            "Yüksek iyi: marj, *CLV*, elde tutma, doğruluk. Düşük iyi: *CAC*, müşteri kaybı, birim maliyet.",
            "*Benchmark* kıyas ölçütüdür: iç benchmark kendi geçmiş verin, dış benchmark sektör standardı.",
            "KPI'ı benchmark ile kıyaslayınca yorum çıkar: kendine göre iyi, sektöre göre geride olabilirsin."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Okul kantininin bu ayki geliri 100.000 TL, satılan malın maliyeti (*COGS*) 60.000 TL ve faaliyet giderleri 25.000 TL'dir. Faaliyet kâr marjı kaçtır?",
      opts: ["%40", "%15", "%25", "%60"],
      a: 1,
      why: "Brüt kâr = 100.000 − 60.000 = 40.000; faaliyet kârı = 40.000 − 25.000 = 15.000; faaliyet kâr marjı = 15.000 ÷ 100.000 = %15. %40 brüt kâr marjıdır; bu en çekici yanlış şık, çünkü faaliyet giderlerini düşmeden bırakır." },
    { q: "Bir uygulamanın ay başında 400 abonesi vardı. Ay içinde 20 abone ayrıldı, 60 yeni abone geldi. Müşteri kaybı oranı (*churn*) kaçtır?",
      opts: ["%5", "%10", "%15", "%20"],
      a: 0,
      why: "Kayıp oranı = kaybedilen müşteri ÷ dönem başı müşteri = 20 ÷ 400 = %5. Elde tutma %95 olur. %10 net büyümedir (40 ÷ 400), %15 ise yeni müşteri oranıdır (60 ÷ 400); ikisi de kayıp değildir. Yeni gelenler kayıp oranına karışmaz." },
    { q: "Bir paket servisin zamanında teslimat oranı bu yıl %88, geçen yıl %92'ydi. Sektör ortalaması %90. Bu bilgiye göre hangi yorum doğrudur?",
      opts: ["İşletme sektörden iyi, geçmişinden kötüdür.", "İşletme geçmişinden iyi, sektörden kötüdür.", "İşletme hem kendi geçmişine hem sektöre göre geridedir.", "Bu KPI tek başına yorumlanamaz."],
      a: 2,
      why: "İç benchmark (geçen yıl %92) ve dış benchmark (sektör %90) ile kıyaslayınca %88 ikisinden de düşüktür. Yani işletme hem geçmişine hem sektöre göre geridedir. \"Yorumlanamaz\" yanlıştır; benchmark tam bunun için vardır." },
    { q: "Bir kafenin satışı ayda 30.000 TL; kafenin bulunduğu semtteki bütün kafelerin toplam satışı 200.000 TL'dir. Kafenin *market share* değeri kaçtır?",
      opts: ["%85", "%30", "%6,7", "%15"],
      a: 3,
      why: "*Market share* = firma satışı ÷ sektör toplam satışı = 30.000 ÷ 200.000 = %15. 6,7, bölmeyi ters yapmaktır (200.000 ÷ 30.000); %85 ise rakiplerin payıdır (100 − 15)." },
    { q: "Nisan'da bir işletmenin geliri 120.000 TL, *COGS* 78.000 TL, faaliyet gideri 27.000 TL oldu. Mart'ta gelir 100.000 TL, *COGS* 60.000 TL, faaliyet gideri 25.000 TL'ydi. Hangi yorum doğrudur?",
      opts: ["Faaliyet kârı arttı, marj arttı.", "Faaliyet kârı değişmedi (15.000 TL), ancak faaliyet kâr marjı %15'ten %12,5'e düştü.", "Faaliyet kârı düştü, marj değişmedi.", "Brüt kâr marjı arttı, çünkü gelir arttı."],
      a: 1,
      why: "Mart: 100.000 − 60.000 − 25.000 = 15.000 (marj %15). Nisan: 120.000 − 78.000 − 27.000 = 15.000 (marj 15.000 ÷ 120.000 = %12,5). Brüt kâr marjı da %40'tan %35'e düştü. Gelirin artması marjın artacağı anlamına gelmez; maliyetler daha hızlı büyüdü." }
  ]
};
