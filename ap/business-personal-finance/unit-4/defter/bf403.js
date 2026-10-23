/* Kitpath not defteri · bf403 · 4.3 Strateji ve Karar Verme
   Kaynak: College Board CED, Topic 4.3 (4.3.A–4.3.B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf403",
  amac: "Bu konu işletmenin nasıl strateji kurduğunu ve zor kararları nasıl verdiğini anlatıyor: strateji ile taktik farkını, PACED karar sürecini, karar ölçütlerini ve ROI hesabını öğreneceksin.",
  bolumler: [
    {
      baslik: "Strateji ve taktik",
      kisa: "Strateji hedefe nasıl ulaşılacağının planıdır; taktikler onu hayata geçiren eylemlerdir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗺️", terim: "Strategy", tr: "strateji", tanim: "Bir hedefe ulaşmak için plan ya da yaklaşım. İşletme stratejisi, bir ya da birden çok hedefe nasıl ulaşılacağını anlatır.", ornek: "“Okul çevresinde en hızlı servis veren kantin olacağız.”" },
            { ikon: "🔧", terim: "Tactics", tr: "taktikler", tanim: "Stratejiyi ilerletmek için yapılan somut eylemler ve yaklaşımlar. Strateji, kararları ve taktiklerin geliştirilmesini yönlendirir.", ornek: "Öğle arası kasaya ikinci personel koymak, hazır paketli menüler hazırlamak." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🏆", baslik: "Rekabet avantajı kazanmak", metin: "*competitive advantage*: rakipten daha iyi bir yanın olması" },
            { ikon: "🧭", baslik: "Misyonu gerçekleştirmek", metin: "İşletmenin var oluş amacını yerine getirmek" },
            { ikon: "📈", baslik: "Geliri artırmak", metin: "Daha çok satış, daha çok gelir" },
            { ikon: "✂️", baslik: "Maliyeti azaltmak", metin: "Aynı işi daha ucuza yapmak" },
            { ikon: "💰", baslik: "Kârı artırmak", metin: "Gelir ile maliyet arasındaki farkı büyütmek" }
          ] },
        { tip: "ikili", sol: { ikon: "🗺️", baslik: "Strateji", maddeler: ["Genel yaklaşım, “nasıl”", "Uzun vadeli ve yön verici", "Taktiklerin seçimini yönlendirir"] },
          sag: { ikon: "🔧", baslik: "Taktik", maddeler: ["Somut eylem", "Kısa vadeli, uygulamaya dönük", "Stratejiyi ilerletir"] },
          oyun: [
            { metin: "“Fiyatı düşük tutarak öğrenci pazarında rakiplerden ayrışacağız.”", cevap: "sol", neden: "Hedefe ulaşmak için genel yaklaşım: strateji." },
            { metin: "Bardak ve peçeteyi toptancıdan alıp birim maliyeti düşürmek.", cevap: "sag", neden: "Somut bir eylem: taktik." },
            { metin: "Öğrenci kimliğini gösterene tostu 10 TL indirimli vermek.", cevap: "sag", neden: "Stratejiyi uygulayan belirli bir eylem: taktik." },
            { metin: "“Kaliteyle ve hızla rakiplerden farklılaşacağız.”", cevap: "sol", neden: "Genel yaklaşım: strateji." }
          ] },
        { tip: "tuzak", baslik: "Hedef, strateji ve taktik ayrı şeylerdir", metin: "Üçünü karıştırmak sınavda en sık hatadır.", yanlis: "Strateji, işletmenin ulaşmak istediği hedefin kendisidir; taktik de stratejiyle aynıdır.", dogru: "Hedef ==varılacak yerdir==, strateji ==oraya nasıl gidileceğidir==, taktikler ise yolda atılan somut adımlardır." }
      ]
    },
    {
      baslik: "Strateji veriyle kurulur ve güncellenir",
      kisa: "İşletme veriyi izler, stratejiyi kurar, sonucu ölçer ve gerekirse değiştirir.",
      bloklar: [
        { tip: "harita", merkez: "Strateji için hangi veri?", dallar: [
            { baslik: "Finansal performans", alt: "gelir, maliyet, kâr; KPI'lar" },
            { baslik: "Müşteriler", alt: "ne istiyorlar, nereden alışveriş yapıyorlar" },
            { baslik: "Rakipler", alt: "fiyatları, güçlü ve zayıf yanları" },
            { baslik: "Pazardaki geniş eğilimler", alt: "*broader trends*: moda, teknoloji, ekonomi" }
          ] },
        { tip: "adimlar", baslik: "Stratejinin yaşam döngüsü", adimlar: [
            { baslik: "Veriyi belirle, topla, izle", metin: "Kantin kasa fişlerini, müşteri yorumlarını ve rakibin fiyatlarını izler." },
            { baslik: "Stratejiyi tanımla", metin: "“Öğle arasında en hızlı servis” kararı çıkar." },
            { baslik: "Kaynakları hizala ve uygula", metin: "Para, personel ve ekipman bu yöne kaydırılır; taktikler başlar." },
            { baslik: "Etkisini değerlendir", metin: "Bekleme süresi ve satış, hedefle karşılaştırılır." },
            { baslik: "Gerekirse değiştir", metin: "Tutmayan taktikler bırakılır; strateji yeni veriyle güncellenir." }
          ] },
        { tip: "not", metin: "Net bir strateji, kaynakların ==tek hedefe seferber edilmesini ve hizalanmasını== kolaylaştırır; böylece hedefe ulaşma ya da bir zorluğu aşma şansı artar." }
      ]
    },
    {
      baslik: "Aynı hedef, farklı stratejiler",
      kisa: "Strateji işletmenin gücüne, rakiplerine ve sektörüne göre değişir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💪", terim: "Capabilities", tr: "yetenekler", tanim: "İşletmenin sahip olduğu özgün güç: marka, ekip, teknoloji, bağlantılar, para.", ornek: "Mahalle bakkalının müşterilerini adıyla tanıması." },
            { ikon: "🏟️", terim: "Competitive landscape", tr: "rekabet ortamı", tanim: "İşletmenin içinde yarıştığı rakiplerin ve pazarın genel görünümü; sektör (*industry*) de buna dahildir.", ornek: "Kantinin rakibi okulun karşısındaki tostçu ve fast food." }
          ] },
        { tip: "tablo", baslik: "Üç işletme, üç farklı strateji", head: ["İşletme", "Yeteneği ve ortamı", "Strateji (taktik örneği)"], rows: [
            ["Mahalle bakkalı", "Yakınlık, tanışıklık; karşıda zincir market", "Kişisel hizmetle ayrışmak (kapıya servis, veresiye defteri)"],
            ["Zincir market", "Büyük alım gücü, çok şube", "Düşük fiyatla büyümek (toptan alım, haftalık indirimler)"],
            ["Butik kahveci", "Nitelikli çekirdek, deneyim", "Premium fiyat ve atmosfer (barista eğitimi, özel kahve)"]
          ], not: "Hepsi kâr ister ama farklı yollardan: strateji işletmenin özgün yeteneklerine, rekabet ortamına ve sektörüne bağlıdır." }
      ]
    },
    {
      baslik: "PACED: sistemli karar verme",
      kisa: "PACED: sorun, alternatifler, ölçütler, değerlendirme, karar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧠", terim: "Deliberative process", tr: "düşünerek karar verme süreci", tanim: "Yöneticilerin ve bireylerin büyük kararlarda izlediği adım adım süreç: sorunu tanımla, seçenek geliştir, ölçüt belirle, seçenekleri değerlendir. Bu sürece *PACED model* denir.", ornek: "Okul kantini kuyruk sorununa çözüm ararken beş adımı sırayla izlemek." },
            { ikon: "🧱", terim: "Strategic framework", tr: "stratejik çerçeve", tanim: "Bir seçeneğin iç ve dış değişkenlerini uzun vadeli hedeflere göre sistemli biçimde değerlendirmeyi sağlayan araç. Sıradaki konuda *Porter's Five Forces* ve *SWOT* var.", ornek: "Yeni şube açmadan önce rakipleri ve kendi gücünü *SWOT* ile tartmak." }
          ] },
        { tip: "adimlar", baslik: "PACED: kantin kuyruğu örneği", adimlar: [
            { baslik: "P: *Problem* (sorun)", metin: "Öğle arasında kuyruk uzun; öğrenciler sıradan vazgeçiyor. Karar: bunu nasıl çözeceğiz?" },
            { baslik: "A: *Alternatives* (alternatifler)", metin: "A: ikinci kasa ve kasiyer; B: telefondan ön sipariş uygulaması; C: ekibe hız eğitimi." },
            { baslik: "C: *Criteria* (ölçütler)", metin: "Finansal getiri (ROI), müşteri deneyimi, çalışanlara etkisi, uygulama riski." },
            { baslik: "E: *Evaluation* (değerlendirme)", metin: "Her alternatif her ölçüte göre tartılır; kanıt ve veri not edilir." },
            { baslik: "D: *Decision* (karar)", metin: "Ölçütlere en iyi cevap veren seçenek seçilir; gerekçesi yazılır." }
          ] },
        { tip: "tuzak", baslik: "Önce ölçüt, sonra karar", metin: "Karar, ölçütlere göre yapılan değerlendirmenin sonucudur.", yanlis: "En iyi seçenek sezgiyle ya da en ucuz olandan seçilir.", dogru: "Önce ==ölçüt belirlenir==, sonra her alternatif bu ölçütlere göre değerlendirilir. Karar, en son adımdır ve kanıtla desteklenir." }
      ]
    },
    {
      baslik: "Karar ölçütleri: nicel, nitel ve ROI",
      kisa: "Ölçütler hem sayılan faydaları (ROI) hem sayıya dökülemeyenleri (itibar) içerir.",
      bloklar: [
        { tip: "tablo", baslik: "Dört ölçüt grubu", head: ["Grup", "Sorusu", "Örnek"], rows: [
            ["Finansal", "Hangi seçenek en çok getiri sağlar? (ROI)", "Seçenek A'nın ROI'ı %30"],
            ["Pazar", "Rekabet gücüne etkisi ne?", "Rakiplere göre hız ve fiyat"],
            ["Operasyonel", "Operasyona ve tedarik zinciri riskine etkisi ne?", "Tek tedarikçiye bağımlı olmak"],
            ["Organizasyonel", "Çalışanlara etkisi ne?", "Fazla mesai, moral, eğitim ihtiyacı"]
          ] },
        { tip: "ikili", sol: { ikon: "🔢", baslik: "Ölçülebilir (*quantifiable*)", maddeler: ["Üretim maliyeti", "Toplam satış", "Kâr"] },
          sag: { ikon: "💭", baslik: "Ölçülemeyen (*intangible*)", maddeler: ["İtibar", "Misyon", "Çekirdek değerler"] },
          oyun: [
            { metin: "Yeni makine, üretim maliyetini bir porsiyonda 5 TL düşürüyor.", cevap: "sol", neden: "Sayıyla ölçülür: maliyet etkisi." },
            { metin: "Kararın işletmenin “sağlıklı beslenme” misyonuna uyması.", cevap: "sag", neden: "Misyona uyum sayıya dökülmez: nitel." },
            { metin: "Aylık satışta %10 artış bekleniyor.", cevap: "sol", neden: "Toplam satış: nicel." },
            { metin: "Karar öğrencilerin kantin hakkındaki imajını zedeleyebilir.", cevap: "sag", neden: "İtibar: sayıya dökülemeyen maliyet." },
            { metin: "Aylık kâr 8.000 TL artacak.", cevap: "sol", neden: "Kâr: nicel fayda." }
          ] },
        { tip: "formul", parcalar: [
            { t: "*ROI*", alt: "yatırımın getirisi (%)" }, "=",
            { t: "Yatırımın ek kârı", alt: "yatırımın yarattığı ek kâr" }, "÷",
            { t: "Yatırımın maliyeti", alt: "harcanan para" }, "× 100"
          ], aciklama: "ROI, bir yatırımın yarattığı ek kârın o yatırımın maliyetine oranıdır. Yüksek ROI, aynı parayla daha çok kâr demektir." }
      ]
    },
    {
      baslik: "Seçenekleri ROI ile kıyasla; kusurlu veriyle karar ver",
      kisa: "En yüksek ROI her zaman kazanmaz; ölçütler çatışabilir, veri eksik olabilir.",
      bloklar: [
        { tip: "ornek", baslik: "Kuyruk sorunu: üç seçenek, üç ROI", durum: "Kantin üç seçeneği değerlendiriyor. A: ikinci kasa ve kasiyer, yatırım 50.000 TL, yıllık ek kâr 15.000 TL. B: ön sipariş uygulaması, yatırım 20.000 TL, ek kâr 8.000 TL. C: hız eğitimi, yatırım 30.000 TL, ek kâr 6.000 TL.",
          adimlar: ["A: 15.000 ÷ 50.000 × 100 = %30.", "B: 8.000 ÷ 20.000 × 100 = %40.", "C: 6.000 ÷ 30.000 × 100 = %20.", "Sıralama: B > A > C. Ama ölçütler yalnız ROI değil: C çalışanlara yatırım yapıyor (organizasyonel), B müşteri deneyimini iyileştiriyor (pazar)."],
          sonuc: "ROI açısından ==B (%40)== önde; karar, ek ölçütlere ve verinin güvenilirliğine de bakılarak verilir." },
        { tip: "grafik", baslik: "ROI sıralaması: tahmin tutmazsa?", xlabel: "Seçenek", ylabel: "ROI (%)", xmax: 4, ymax: 50, xticks: [{ v: 1, label: "A: Kasa" }, { v: 2, label: "B: Uygulama" }, { v: 3, label: "C: Eğitim" }], yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }, { v: 40, label: "40" }, { v: 50, label: "50" }],
          ogeler: [
            { id: "a", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "c", tip: "alan", renk: 2, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "ta", tip: "yazi", x: 1, y: 34, metin: "%30", gizli: true },
            { id: "tb", tip: "yazi", x: 2, y: 44, metin: "%40", gizli: true },
            { id: "tb2", tip: "yazi", x: 2, y: 24, metin: "%20", gizli: true },
            { id: "tc", tip: "yazi", x: 3, y: 24, metin: "%20", gizli: true },
            { id: "uy", tip: "yazi", x: 3.95, y: 46, metin: "Uygulamayı az", hiza: "end", gizli: true },
            { id: "uy2", tip: "yazi", x: 3.95, y: 42, metin: "kişi kullanırsa…", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "A: 15.000 ÷ 50.000 = ==%30==.", set: { a: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 30], [0.65, 30]] } }, goster: ["ta"] },
            { metin: "B: 8.000 ÷ 20.000 = ==%40==.", set: { b: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 40], [1.65, 40]] } }, goster: ["tb"] },
            { metin: "C: 6.000 ÷ 30.000 = ==%20==. Sıralama B > A > C.", set: { c: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 20], [2.65, 20]] } }, goster: ["tc"] },
            { metin: "Ama veri kusursuz değil: uygulamayı beklenenden az kişi kullanırsa B'nin ek kârı 4.000 TL olur.", goster: ["uy", "uy2"] },
            { metin: "B: 4.000 ÷ 20.000 = ==%20==. Artık sıralama A > B = C: karar ==tahminin doğruluğuna== bağlı.", set: { b: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 20], [1.65, 20]] } }, gizle: ["tb", "uy", "uy2"], goster: ["tb2"] }
          ] },
        { tip: "tuzak", baslik: "Mükemmel karar yoktur", metin: "Gerçek kararlar çatışan ölçütler ve eksik veriyle verilir.", yanlis: "En yüksek ROI'lı seçenek her zaman doğru karardır; kanıt yeterliyse tek bir doğru cevap çıkar.", dogru: "Yöneticiler çoğu zaman ==çatışan ölçütleri== (ROI yüksek ama çalışanı yoruyor) ==sınırlı ya da kusurlu veriyle== önceliklendirir; sonuç bu yüzden kusurlu olabilir. Önemli olan ölçütleri açıkça yazmak ve kanıtla savunmaktır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Strateji, hedefe ulaşmanın planıdır (rekabet avantajı, misyon, gelir, maliyet, kâr); taktikler onu uygulayan somut eylemlerdir.",
            "Strateji veriyle kurulur ve izlenir: finansal performans, müşteriler, rakipler, pazar eğilimleri. Sonuçlara göre değiştirilir.",
            "Net strateji kaynakları tek hedefte toplar (hizalar) ve başarı şansını artırır.",
            "Strateji, işletmenin yeteneklerine, rekabet ortamına ve sektörüne göre farklılaşır.",
            "PACED: *Problem*, *Alternatives*, *Criteria*, *Evaluation*, *Decision*. Önce ölçüt, sonra değerlendirme, en son karar.",
            "Ölçütler nicel (maliyet, satış, kâr) ve nitel (itibar, misyon, değerler) olabilir; finansal, pazar, operasyonel, organizasyonel gruplara ayrılır.",
            "ROI = yatırımın ek kârı ÷ yatırımın maliyeti × 100. Örnek: 8.000 ÷ 20.000 = %40.",
            "Stratejik çerçeveler (*Five Forces*, *SWOT*) seçeneğin iç ve dış değişkenlerini uzun vadeli hedeflere göre sistemli tartar.",
            "Yöneticiler çatışan ölçütleri sınırlı veriyle önceliklendirir; bu yüzden kararlar kusurlu olabilir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir kantin, “öğrencilere okul çevresindeki en hızlı servisi sunarak rakiplerden ayrışacağız” stratejisini benimsemiştir. Aşağıdakilerden hangisi bu stratejiyi uygulayan bir *tactic*’tir?",
      opts: ["Rakiplerden ayrışarak rekabet avantajı kazanmak", "Öğle arasında kasaya ikinci bir personel koymak ve hazır paketli menüler hazırlamak", "Misyonu gerçekleştirmek", "Pazar payını artırmak"],
      a: 1,
      why: "*Tactic*, stratejiyi ilerleten somut eylemdir: ikinci personel ve hazır menüler. Diğer şıklar hedef ya da genel amaçtır. En çekici yanlış şık A: “ayrışmak” stratejinin kendisi (ve hedefi) olduğu için taktik değildir." },
    { q: "Bir müdür sorunu tanımlamış ve üç alternatif çözüm listelemiştir. *PACED* modelinde sıradaki adım hangisidir?",
      opts: ["Kararı vermek", "Alternatifleri değerlendirmek", "Karar ölçütlerini belirlemek", "Sorunu yeniden tanımlamak"],
      a: 2,
      why: "Sıra: *Problem*, *Alternatives*, *Criteria*, *Evaluation*, *Decision*. Problem ve alternatifler tamamlandığına göre sırada ölçütler (maliyet, itibar, çalışanlara etkisi gibi) var. En çekici yanlış şık B: ölçüt olmadan değerlendirme yapılamaz." },
    { q: "Bir kafe, iki seçeneği kıyaslıyor. Seçenek 1: 40.000 TL'lik yeni espresso makinesi, yıllık ek kâr 10.000 TL. Seçenek 2: 10.000 TL'lik online sipariş sistemi, yıllık ek kâr 3.000 TL. ROI'ya göre hangisi öndedir?",
      opts: ["Seçenek 1; çünkü ek kârı 10.000 TL ile daha büyüktür", "Seçenek 2; çünkü ROI'ı %30, Seçenek 1'inki %25'tir", "Seçenek 1; çünkü yatırımı daha büyüktür", "İkisinin ROI'ı eşittir"],
      a: 1,
      why: "ROI = ek kâr ÷ yatırım maliyeti × 100. Seçenek 1: 10.000 ÷ 40.000 = %25. Seçenek 2: 3.000 ÷ 10.000 = %30. Seçenek 2 önde. En çekici yanlış şık A: ek kârın mutlak büyüklüğüne bakmak ROI'yı vermez; ROI getiriyi yatırıma böler." },
    { q: "Bir okul kantininin yöneticisi, ucuz ama sağlıksız bir ürünü menüye almayı düşünüyor. Aşağıdakilerden hangisi bu kararın *intangible* (ölçülemeyen) bir maliyeti olabilir?",
      opts: ["Kantinin “sağlıklı beslenme” misyonuyla çelişmesi ve itibarın zedelenmesi", "Ürünün birim maliyetinin 12 TL olması", "Aylık satışta beklenen %8 artış", "Ürünün aylık 3.000 TL ek kâr getirmesi"],
      a: 0,
      why: "Misyona ters düşmek ve itibar kaybı sayıya dökülemeyen (*intangible*) maliyetlerdir. Birim maliyet, satış artışı ve ek kâr nicel (*quantifiable*) ölçütlerdir. B, “maliyet” kelimesi geçtiği için çekici ama nicel bir ölçüttür." },
    { q: "Bir yönetici üç seçeneği değerlendirmiştir. En yüksek ROI'lı seçenek, çalışanları aşırı yoruyor ve elindeki satış tahminleri belirsiz. CED'e göre hangi ifade doğrudur?",
      opts: ["En yüksek ROI'lı seçenek her zaman seçilmelidir.", "Karar, yalnızca yöneticinin sezgisine dayanmalıdır.", "Yöneticiler çatışan ölçütleri sınırlı ya da kusurlu veriyle önceliklendirmek zorunda kalabilir; sonuç kusurlu olabilir.", "Veri belirsizse karar verilmemelidir."],
      a: 2,
      why: "CED, yöneticilerin bazen çatışan ölçütleri sınırlı ve kusurlu veriyle önceliklendirmek zorunda kaldığını ve bunun kusurlu kararlara yol açabildiğini belirtir. A yanlış: ROI tek ölçüt değildir; organizasyonel ölçüt (çalışanlara etkisi) de vardır. D yanlış: kararı ertelemek çözüm değildir." }
  ]
};
