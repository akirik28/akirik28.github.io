/* Kitpath not defteri · hg512 · Tarımda Kadınlar (5.12)
   Kaynak: AP HuG CED Topic 5.12 (IMP-5.C.1). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg512",
  amac: "Bu konu kadınların tarımda üretim, dağıtım ve tüketim aşamalarındaki rolünün yerden yere ve üretim türüne göre nasıl değiştiğini anlatıyor. Geçimlik ve ticari tarımda kadınların işlerini, toprak ve krediye erişimdeki engelleri ve bölgesel verilerin nasıl okunacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Kadınlar tarımda üç aşamada",
      kisa: "Kadınlar üretimde, dağıtımda ve tüketimde yer alır; rolleri yerden yere değişir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌱", terim: "Food production", tr: "gıda üretimi", tanim: "Toprağı hazırlama, ekim, çapa, hasat ve hayvan bakımı.", ornek: "Mısır tarlasında ot ayıklayan kadın." },
            { ikon: "🧺", terim: "Food distribution", tr: "gıda dağıtımı", tanim: "Ürünü işleme, depolama, pazara taşıma ve satma.", ornek: "Semt pazarında kendi ürettiği reçeli satan kadın." },
            { ikon: "🍲", terim: "Food consumption", tr: "gıda tüketimi", tanim: "Hanenin ne yiyeceğine karar verme, yemeği hazırlama ve ailenin beslenmesini sağlama.", ornek: "Haftalık yemek planını yapıp pişiren kadın." }
          ] },
        { tip: "tuzak", metin: "Kadınların rolünü tek bir kalıba sığdırmak yanlıştır.", yanlis: "Kadınların tarımdaki rolü bütün dünyada aynıdır.", dogru: "Kadınların rolü ==yere ve üretim türüne göre== değişir: bir bölgede kadınlar ana tarla işçisidir, başka bir bölgede mekanize çiftlik yönetimi erkek ağırlıklıdır." }
      ]
    },
    {
      baslik: "Geçimlik tarımda kadınlar",
      kisa: "Geçimlik tarımda kadınlar tarladaki işin ve hane beslenmesinin büyük kısmını yürütür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏞️", terim: "Feminization of agriculture", tr: "tarımın kadınlaşması", tanim: "Erkekler kente ya da başka işlere göç edince tarlayı yönetme ve çalıştırma yükünün kadınlara geçmesi.", ornek: "Köyde eşi şehirde çalışan kadının hem ekimi hem hayvanları yürütmesi." }
          ] },
        { tip: "adimlar", baslik: "Geçimlik tarımda bir kadının günü (örnek)", adimlar: [
            { baslik: "Sabah", metin: "Kuyudan ya da çeşmeden su taşır, ailenin kahvaltısını hazırlar." },
            { baslik: "Öğleye kadar", metin: "Tarlada ekim, çapa ve hasat işlerini yapar." },
            { baslik: "Öğleden sonra", metin: "Ürünü ayıklar, kurutur, dövüp öğütür; hayvanlara bakar." },
            { baslik: "Akşama doğru", metin: "Yakacak odun toplar, fazlayı pazara götürmek için hazırlar." },
            { baslik: "Akşam", metin: "Yemek pişirir, çocuklara bakar. Gün ücretsizdir ve çoğu görünmezdir." }
          ] }
      ]
    },
    {
      baslik: "Ticari tarımda kadınlar",
      kisa: "Ticari tarımda kadınlar sık sık ücretli mevsimlik işçi ya da ücretsiz aile işçisidir.",
      bloklar: [
        { tip: "tablo", baslik: "Üretim türüne göre kadınların rolü", head: ["Üretim türü", "Kadınların tipik rolü", "Örnek"], rows: [
            ["Geçimlik", "Ana tarla işçisi; ürünü işler, pişirir", "Sahra altı Afrika ve Güney Asya köyleri"],
            ["Ticari plantasyon, sera, çay ve çiçek", "Ücretli, genellikle mevsimlik ve düşük ücretli işçi", "Kenya'da kesme çiçek çiftlikleri; çay toplama"],
            ["Aile çiftliği", "Ücretsiz aile işçisi; gelir ve mülkiyet çoğu kez erkeğin adına", "Türkiye'de kadın tarım çalışanlarının büyük bölümü ücretsiz aile işçisidir"],
            ["Dağıtım ve pazar", "Ürünü satan küçük tüccar", "Batı Afrika pazarlarında kadın tüccarlar"],
            ["Mekanize büyük çiftlik", "İşletmeci ve yönetici; sayısı artıyor ama çoğu ülkede azınlıkta", "Gelir düzeyi yüksek ülkelerde kadın çiftlik sahipleri"]
          ] },
        { tip: "ikili", sol: { ikon: "🌽", baslik: "Geçimlik tarımda kadın", maddeler: ["Önce aile için üretir", "Emek ücretsiz ve çok yönlü"] },
          sag: { ikon: "💵", baslik: "Ticari tarımda kadın", maddeler: ["Çoğunlukla ücret karşılığı çalışır", "Mevsimlik, sözleşmesiz ve düşük ücretli olabilir"] },
          oyun: [
            { metin: "Kadın hem ekimi yapıyor hem de ürünü eve taşıyıp işliyor, pişiriyor.", cevap: "sol", neden: "Üretimden tüketime tek elden emek: geçimlik." },
            { metin: "Kadınlar bir seranın ücretli mevsimlik işçileri; sözleşme yok.", cevap: "sag", neden: "Ücretli mevsimlik iş: ticari tarım." },
            { metin: "Köydeki kadınlar üretimin büyük kısmını ailenin kendi yemeği için yetiştiriyor.", cevap: "sol", neden: "Tüketim amacı: geçimlik." },
            { metin: "Çay hasadında günlük ücretle çalışan kadınlar sezon bitince işsiz kalıyor.", cevap: "sag", neden: "Satış için üretimde ücretli emek: ticari." }
          ] },
        { tip: "tuzak", metin: "Ücret almamak, emeğin sayılmaması anlamına gelmez.", yanlis: "Ücretsiz çalışan kadın tarım emeğine katkı yapmıyor sayılır.", dogru: "==Ücretsiz aile işçisi== üretime emek verir ama çoğu kez resmî istatistikte görünmez, sigorta ve mülkiyet haklarından yoksun kalabilir." }
      ]
    },
    {
      baslik: "Dağıtım ve tüketimde kadınlar",
      kisa: "Kadınlar ürünü işler, satar ve çoğu yerde hanenin beslenmesini planlar.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🏭", baslik: "İşleme", metin: "Süt peynire, meyve reçele dönüşür; katma değer kadın emeğiyle oluşur." },
            { ikon: "🛍️", baslik: "Satış", metin: "Semt pazarı, tezgâh ve kooperatif mağazası kadınlar için gelir yoludur." },
            { ikon: "🍽️", baslik: "Hane beslenmesi", metin: "Birçok yerde ne pişeceği ve kimin ne kadar yiyeceği kararı kadınlara bırakılır." },
            { ikon: "💞", baslik: "Gelirin harcanması", metin: "Birçok çalışma, kadının kontrol ettiği gelirin çocukların beslenmesine daha çok gittiğini gösterir." }
          ] },
        { tip: "ornek", baslik: "Kadın kooperatifi katma değeri (varsayımsal)", durum: "Bir kadın kooperatifi 100 litre sütü ham olarak litresi 20 TL'den satabilir. Aynı süt 12,5 kg peynire dönüşürse kilosu 240 TL'den satılıyor. İşleme sonucunda gelir ne kadar artar?",
          adimlar: ["Ham süt: 100 × 20 = 2.000 TL.", "Peynir: 12,5 × 240 = 3.000 TL.", "Fark: 3.000 − 2.000 = 1.000 TL. Oran: 1.000 ÷ 2.000 = %50."],
          sonuc: "İşleme geliri ==1.000 TL (%50)== artırır. Kadınların işleme ve satışa katılması, aileye ve topluluğa ek gelir sağlar." }
      ]
    },
    {
      baslik: "Engeller: toprak, kredi ve bilgi",
      kisa: "Kadınlar çok çalışsa da toprağa, krediye ve girdiye erişimde geride kalır.",
      bloklar: [
        { tip: "liste", baslik: "Başlıca engeller", maddeler: [
            { ikon: "📜", baslik: "Toprak mülkiyeti", metin: "Miras kuralları ve gelenekler yüzünden tapu çoğu zaman erkeğin adınadır." },
            { ikon: "🏦", baslik: "Kredi ve girdi", metin: "Teminat gösteremediği için kredi, tohum, gübre ve ekipmana erişim zordur." },
            { ikon: "🎓", baslik: "Bilgi ve eğitim", metin: "Tarım danışmanlığı ve eğitim programları çoğunlukla erkeklere ulaşır." },
            { ikon: "⏳", baslik: "Zaman yükü", metin: "Tarla işine ek olarak su taşıma, yemek ve çocuk bakımı sorumluluğu vardır." }
          ] },
        { tip: "grafik", baslik: "Emeğin payı yüksek, mülkiyetin payı düşük (şematik, yaklaşık)", xlabel: "", ylabel: "Kadın payı (%)", xmax: 10, ymax: 12,
          xticks: [{ v: 2.5, label: "Emek payı" }, { v: 7, label: "Toprak payı" }],
          yticks: [{ v: 2, label: "10" }, { v: 4, label: "20" }, { v: 6, label: "30" }, { v: 8, label: "40" }, { v: 10, label: "50" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 0, noktalar: [[1.5, 0], [3.5, 0], [3.5, 8.6], [1.5, 8.6]], gizli: true },
            { id: "y1", tip: "yazi", x: 2.5, y: 9.3, metin: "≈ 43", gizli: true },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[6, 0], [8, 0], [8, 3], [6, 3]], gizli: true },
            { id: "y2", tip: "yazi", x: 7, y: 3.7, metin: "< 20", gizli: true }
          ],
          durumlar: [
            { metin: "Boş grafik: kadınların tarımdaki **emek payı** ile **toprak sahipliği payı** karşılaştırılacak." },
            { metin: "Gelişmekte olan ülkelerde tarım iş gücünün yaklaşık ==%43'ü kadın== (FAO'nun yaygın kullanılan tahmini).", goster: ["b1", "y1"] },
            { metin: "Toprak sahipleri arasındaki payları ise ==%20'nin altında==. Çok çalışıyor, az sahip oluyor: bu fark kredi ve girdi erişimini de etkiler.", goster: ["b2", "y2"] }
          ] }
      ]
    },
    {
      baslik: "Verileri okumak: bölgeye göre fark",
      kisa: "Kadınların tarım iş gücündeki payı bölgeye göre belirgin biçimde değişir.",
      bloklar: [
        { tip: "grafik", baslik: "Kadınların tarım iş gücündeki payı (yaklaşık, FAO 2011)", xlabel: "", ylabel: "Kadın payı (%)", xmax: 10, ymax: 12,
          xticks: [{ v: 1.5, label: "L. Amerika" }, { v: 4, label: "Genel" }, { v: 6.5, label: "Asya" }, { v: 9, label: "Afrika" }],
          yticks: [{ v: 2, label: "10" }, { v: 4, label: "20" }, { v: 6, label: "30" }, { v: 8, label: "40" }, { v: 10, label: "50" }],
          ogeler: [
            { id: "g", tip: "alan", renk: 1, noktalar: [[3.2, 0], [4.8, 0], [4.8, 8.6], [3.2, 8.6]], gizli: true },
            { id: "gy", tip: "yazi", x: 4, y: 9.3, metin: "≈ 43", gizli: true },
            { id: "l", tip: "alan", renk: 0, noktalar: [[0.7, 0], [2.3, 0], [2.3, 4], [0.7, 4]], gizli: true },
            { id: "ly", tip: "yazi", x: 1.5, y: 4.7, metin: "≈ 20", gizli: true },
            { id: "a", tip: "alan", renk: 2, noktalar: [[5.7, 0], [7.3, 0], [7.3, 10], [5.7, 10]], gizli: true },
            { id: "ay", tip: "yazi", x: 6.5, y: 10.7, metin: "≈ 50", gizli: true },
            { id: "f", tip: "alan", renk: 2, noktalar: [[8.2, 0], [9.8, 0], [9.8, 10], [8.2, 10]], gizli: true },
            { id: "fy", tip: "yazi", x: 9, y: 10.7, metin: "≈ 50", gizli: true }
          ],
          durumlar: [
            { metin: "Gelişmekte olan ülkelerin genelinde tarım iş gücünün yaklaşık ==%43'ü kadın.==", goster: ["g", "gy"] },
            { metin: "Latin Amerika'da pay ==çok düşük (≈ %20)==: mekanize büyük işletmeler ve farklı toplumsal kurallar bu farkta rol oynar.", goster: ["l", "ly"] },
            { metin: "Doğu ve Güneydoğu Asya ile Sahra altı Afrika'da pay ==yaklaşık yarı yarıya==: küçük, geçimlik çiftlikler ve erkek göçü kadın emeğini artırır.", goster: ["a", "ay", "f", "fy"] }
          ] },
        { tip: "ornek", baslik: "Pay mı sayı mı?", durum: "X bölgesinde tarım iş gücü 12 milyon ve %25'i kadın. Y bölgesinde tarım iş gücü 5 milyon ve %50'si kadın. Hangi bölgede daha çok kadın tarımda çalışıyor?",
          adimlar: ["X: 12 milyon × 0,25 = 3 milyon kadın.", "Y: 5 milyon × 0,50 = 2,5 milyon kadın.", "Karşılaştır: 3 > 2,5."],
          sonuc: "X'te payları daha düşük olsa da ==3 milyon kadın== çalışıyor; Y'de ==2,5 milyon==. ==Yüksek pay (%) yüksek sayı demek değildir.== Veri yorumlarken önce pay mı sayı mı sorulduğuna bak." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Kadınlar tarımda üretim, dağıtım ve tüketimde yer alır; rolleri yere ve üretim türüne göre değişir.",
            "Geçimlik tarımda kadınlar ekim, çapa, hasat, ürün işleme, su ve yakacak taşıma ve yemek yapmayı birlikte yürütür.",
            "Erkek göçü tarımı kadınlaştırabilir (*feminization of agriculture*).",
            "Ticari tarımda kadınlar çoğunlukla ücretli mevsimlik işçi ya da ücretsiz aile işçisidir; mekanize büyük işletmelerde kadın işletmeciler azınlıktadır.",
            "Dağıtımda kadınlar ürünü işler ve satar; tüketimde birçok yerde hane beslenmesi kararlarını verir.",
            "Engeller: toprak mülkiyeti, kredi ve girdiye erişim, bilgi ve eğitim, zaman yükü.",
            "Gelişmekte olan ülkelerde tarım iş gücünün yaklaşık %43'ü kadındır; pay Latin Amerika'da ≈ %20, Doğu/Güneydoğu Asya ve Sahra altı Afrika'da ≈ %50'dir.",
            "Veri okurken pay (%) ile sayıyı karıştırma: %25 × 12 milyon = 3 milyon, %50 × 5 milyon = 2,5 milyon."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir köyde kadınlar tarlada ekim, çapa ve hasadı yapıyor, ürünü eve taşıyıp işliyor, su getiriyor ve yemeği pişiriyor. Üretimin büyük kısmı ailenin kendi tüketimi için. Bu durum aşağıdakilerden hangisini en iyi gösterir?",
      opts: ["Kadınların tarımdaki rolü yalnızca tüketim aşamasındadır", "Geçimlik tarımda kadınlar üretim, işleme ve tüketim aşamalarının hepsinde yoğun rol alabilir", "Kadınların tarımdaki rolü bütün dünyada bu biçimdedir", "Bu durum yalnızca ticari tarımda görülür"],
      a: 1,
      why: "Geçimlik tarımda kadınlar üretimden tüketime kadar birçok aşamada çalışır. En çekici yanlış şık C: rol yere ve üretim türüne göre değişir; bu örnek tek bir bölgeyi anlatır." },
    { q: "Grafikte üç bölgede kadınların tarım iş gücündeki yaklaşık payı gösterilmiştir. Grafiğe göre aşağıdakilerden hangisi doğrudur?",
      fig: { type: "bar", cats: ["Latin Amerika", "Doğu ve Güneydoğu Asya", "Sahra altı Afrika"], series: [{ name: "Kadın payı (%)", values: [20, 50, 50] }], ylabel: "Kadın payı (%)" },
      opts: ["Latin Amerika'da kadınlar tarım iş gücünün yarısından fazlasını oluşturur", "Asya ve Afrika bölgelerinde kadın payı Latin Amerika'dakinin yaklaşık iki buçuk katıdır", "Üç bölgede de kadınların payı eşittir", "Grafik kadınların tarımdaki rolünün yalnızca üretim aşamasında olduğunu gösterir"],
      a: 1,
      why: "50 ÷ 20 = 2,5: Asya ve Afrika bölgelerindeki pay Latin Amerika'dakinin iki buçuk katıdır. En çekici yanlış şık D: grafik yalnızca iş gücü payını gösterir, hangi aşamada çalışıldığını göstermez." },
    { q: "Kenya'da bir kesme çiçek çiftliğinde çalışan kadınların çoğu mevsimlik, düşük ücretli ve sözleşmesiz çalışmaktadır. Bu durum hangi genellemeyle en uyumludur?",
      opts: ["Kadınlar çiftliğin sahibi ve yöneticisidir", "Bu iş türü geçimlik tarımın tipik biçimidir", "Kadınların rolü bütün üretim türlerinde aynıdır", "Ticari tarımda kadınlar sıklıkla ücretli ve düşük ücretli mevsimlik işçi olarak çalışır"],
      a: 3,
      why: "Çiçek, çay ve sera gibi ticari üretimde kadınlar çoğunlukla ücretli, mevsimlik işçidir. En çekici yanlış şık B: ürün satış için yetiştirildiğinden ticari tarımdır; geçimlik değildir." },
    { q: "Bir kadın çiftçi, kooperatifin kredisini almak istiyor; ancak tapu kocasının adına olduğu için teminat gösteremiyor. Bu durum kadınların tarımda karşılaştığı hangi engeli en iyi gösterir?",
      opts: ["Toprak mülkiyeti ve krediye erişimde eşitsizlik", "Hasat sonrası ürünün depolanamaması", "Aşırı otlatma nedeniyle çölleşme", "Dağıtım ağındaki altyapı eksikliği"],
      a: 0,
      why: "Tapunun erkek adına olması, teminat gösterememeyi ve krediye erişimde engeli doğurur. En çekici yanlış şık D: altyapı eksikliği pazara ulaşımı etkiler ama sorudaki sorun mülkiyet ve kredidir." },
    { q: "X bölgesinde tarım iş gücü 12 milyondur ve %25'i kadındır. Y bölgesinde tarım iş gücü 5 milyondur ve %50'si kadındır. Aşağıdakilerden hangisi doğrudur?",
      opts: ["Y bölgesinde kadın sayısı daha fazladır; çünkü payı yüksektir", "İki bölgede kadın sayısı eşittir", "X bölgesinde kadın sayısı daha fazladır (3 milyon, 2,5 milyon); yüksek pay yüksek sayı demek değildir", "Y bölgesinde kadın sayısı 5 milyondur"],
      a: 2,
      why: "X: 12 × 0,25 = 3 milyon; Y: 5 × 0,50 = 2,5 milyon. En çekici yanlış şık A: yalnızca yüzdeye bakıp toplam iş gücünün büyüklüğünü unutur." }
  ]
};
