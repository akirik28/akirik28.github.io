/* Kitora not defteri · bi201 · 2.1 Ekosistemin Bileşenleri
   Kaynak: okul-10-2025-26.md (Biology Tema 2) + MEB Maarif BİY.10.2. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bi201",
  amac: "Ekolojinin temel kelimelerini öğreneceksin: birey, popülasyon, komünite, ekosistem ve biyosfer düzeyleri; habitat ile niş farkı; biyotik ve abiyotik faktörler. Sonunda bir ekosistemi parçalarına ayırıp sınavda İngilizce anlatabileceksin.",
  bolumler: [
    {
      baslik: "Bireyden biyosfere: organizasyon düzeyleri",
      kisa: "Ekolojide her düzey, bir alttaki düzeylerin toplamıdır.",
      bloklar: [
        { tip: "adimlar", baslik: "Küçükten büyüğe beş düzey", adimlar: [
            { baslik: "Birey (*individual*)", metin: "Tek bir canlı: bir serçe, bir kayın ağacı." },
            { baslik: "Popülasyon (*population*)", metin: "Aynı türün, aynı yerde ve aynı zamanda yaşayan bireyleri: okul bahçesindeki bütün serçeler." },
            { baslik: "Komünite (*community*)", metin: "Aynı yerde yaşayan bütün popülasyonlar, yani bütün canlılar: bahçedeki serçeler, ağaçlar, böcekler, mantarlar." },
            { baslik: "Ekosistem (*ecosystem*)", metin: "Komünite + cansız çevre (ışık, su, toprak, sıcaklık). Canlılar ile çevrenin birlikte oluşturduğu bütün." },
            { baslik: "Biyosfer (*biosphere*)", metin: "Dünya'da yaşamın bulunduğu bütün bölge: karaların üst kısmı, sular ve atmosferin alt kısmı. Bütün ekosistemlerin toplamıdır." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧬", terim: "Species", tr: "tür", tanim: "Doğal ortamda birbiriyle çiftleşip ==verimli (üreyebilen) döl== veren bireyler grubu.", ornek: "At ile eşeğin melezi katır kısırdır; bu yüzden at ve eşek ayrı türlerdir." },
            { ikon: "🌍", terim: "Biome", tr: "biyom", tanim: "Benzer iklim ve bitki örtüsüne sahip geniş ekosistem grubu.", ornek: "Tundra, tayga, step, çöl." }
          ] },
        { tip: "ikili", sol: { ikon: "🐦", baslik: "*Population*", maddeler: ["Tek tür", "Aynı yer, aynı zaman"] },
          sag: { ikon: "🌳", baslik: "*Community*", maddeler: ["Birden çok tür", "Aynı yerdeki bütün canlılar"] },
          oyun: [
            { metin: "Van Gölü'ndeki bütün inci kefalleri.", cevap: "sol", neden: "Tek tür, tek yer: *population*." },
            { metin: "Bir çayırdaki otlar, çekirgeler, kurbağalar ve yılanlar.", cevap: "sag", neden: "Birçok türün popülasyonu bir arada: *community*." },
            { metin: "Bir çam ormanındaki bütün kızılçam ağaçları.", cevap: "sol", neden: "Hepsi aynı tür: *population*." },
            { metin: "Bir gölde yaşayan balıklar, algler, kurbağalar ve bakteriler.", cevap: "sag", neden: "Farklı türler, hepsi canlı: *community*." },
            { metin: "Okul bahçesindeki bütün serçeler.", cevap: "sol", neden: "Aynı tür, aynı yer: *population*." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*A population is a group of individuals of the same species living in the same area.*", metin: "Popülasyon tanımı için kalıp." },
            { ikon: "✍️", baslik: "*A community consists of all the populations living in the same area.*", metin: "Komünite tanımı için kalıp." }
          ] }
      ]
    },
    {
      baslik: "Biyotik ve abiyotik faktörler",
      kisa: "Biyotik canlı bileşenlerdir; abiyotik cansız çevre koşullarıdır.",
      bloklar: [
        { tip: "tablo", baslik: "Bir gölün bileşenleri", head: ["Bileşen", "Ne yapar?", "Örnek"],
          rows: [
            ["Üretici (*producer*)", "Işık ya da kimyasal enerjiyle kendi besinini yapar", "Su bitkileri, fitoplankton"],
            ["Tüketici (*consumer*)", "Hazır organik madde yer", "Balık, kurbağa, su kuşu"],
            ["Ayrıştırıcı (*decomposer*)", "Ölü kalıntıları parçalar, mineralleri çevreye geri verir", "Bakteri, mantar"],
            ["Abiyotik faktörler", "Canlı olmayan fiziksel ve kimyasal koşullar", "Işık, sıcaklık, pH, çözünmüş O₂, tuzluluk"]
          ], vurgu: 3, not: "İlk üç satır biyotik faktör, son satır abiyotik faktördür." },
        { tip: "ikili", sol: { ikon: "🌿", baslik: "*Biotic*", maddeler: ["Canlı bileşenler", "Üretici, tüketici, ayrıştırıcı"] },
          sag: { ikon: "🌡️", baslik: "*Abiotic*", maddeler: ["Cansız fiziksel ve kimyasal koşullar", "Işık, su, sıcaklık, pH, rüzgâr, toprak"] },
          oyun: [
            { metin: "Toprağın pH değeri.", cevap: "sag", neden: "Kimyasal bir koşul: *abiotic*." },
            { metin: "Topraktaki mantarlar.", cevap: "sol", neden: "Canlı ayrıştırıcılar: *biotic*." },
            { metin: "Gölün çözünmüş oksijen miktarı.", cevap: "sag", neden: "Cansız bir koşul: *abiotic*." },
            { metin: "Kıyıdaki yosunlar.", cevap: "sol", neden: "Canlı üreticiler: *biotic*." },
            { metin: "Rüzgâr ve yağış.", cevap: "sag", neden: "İklim etkenleri: *abiotic*." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Biotic factors are the living components of an ecosystem, while abiotic factors are the non-living components.*", metin: "Tanım cümlesi." },
            { ikon: "✍️", baslik: "*Temperature is an abiotic factor that affects the distribution of organisms.*", metin: "Örnek cümlesi; sıcaklık yerine ışık, pH, tuzluluk yazabilirsin." }
          ] }
      ]
    },
    {
      baslik: "Abiyotik faktörün sınırı: tolerans aralığı",
      kisa: "Optimumda bolluk, uçlarda stres, sınırın ötesinde ölüm vardır.",
      bloklar: [
        { tip: "grafik", baslik: "Bir tür sıcaklığa nasıl tepki verir?", xlabel: "Faktör şiddeti (ör. sıcaklık)", ylabel: "Popülasyon büyüklüğü", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "alt sınır" }, { v: 5, label: "optimum" }, { v: 8, label: "üst sınır" }],
          ogeler: [
            { id: "gen", tip: "egri", renk: 0, etiket: "geniş tolerans", noktalar: [[1, 0], [2, 0.6], [3, 4.5], [5, 9], [7, 4.5], [8, 0.6], [9, 0]], gizli: true },
            { id: "opt", tip: "nokta", renk: 1, x: 5, y: 9, etiket: "optimum", kilavuz: true, gizli: true },
            { id: "s1", tip: "yazi", x: 3.1, y: 8, metin: "stres", gizli: true },
            { id: "s2", tip: "yazi", x: 6.9, y: 8, metin: "stres", gizli: true },
            { id: "l1", tip: "cizgi", renk: 3, kesik: true, from: [2, 0], to: [2, 10], gizli: true },
            { id: "l2", tip: "cizgi", renk: 3, kesik: true, from: [8, 0], to: [8, 10], gizli: true },
            { id: "o1", tip: "yazi", x: 0.9, y: 3, metin: "yaşam yok", gizli: true },
            { id: "o2", tip: "yazi", x: 9.1, y: 3, metin: "yaşam yok", gizli: true },
            { id: "dar", tip: "egri", renk: 2, etiket: "dar tolerans", noktalar: [[3.5, 0], [4, 1], [4.5, 5], [5, 8.4], [5.5, 5], [6, 1], [6.5, 0]], gizli: true }
          ],
          durumlar: [
            { metin: "Her tür, bir abiyotik faktörün (sıcaklık, pH, tuzluluk…) belirli bir aralığında yaşayabilir. Buna ==*tolerance range*== (tolerans aralığı) denir.", goster: ["gen"] },
            { metin: "Aralığın ortası ==*optimum*==: birey sayısı ve üreme en yüksek burada.", goster: ["opt"] },
            { metin: "Optimumun iki yanı ==*stress zone*== (stres bölgesi): canlı yaşar ama büyüme ve üreme azalır.", goster: ["s1", "s2"] },
            { metin: "Alt ve üst sınırın dışında canlı yaşayamaz.", goster: ["l1", "l2", "o1", "o2"] },
            { metin: "Aralığı dar olan tür, küçük değişimden çabuk etkilenir; geniş toleranslı tür ise çok farklı ortamlarda bulunur.", goster: ["dar"] }
          ] },
        { tip: "tuzak", baslik: "Sınırlayıcı faktör", metin: "*Limiting factor*, bir canlının ya da popülasyonun büyümesini sınırlayan faktördür; yetersiz de olabilir (besin, oksijen), aşırı da (sıcaklık, tuzluluk).", yanlis: "Ortamda en çok bulunan faktör popülasyonu belirler.", dogru: "Optimumdan en uzak kalan, yani toleransın sınırına dayanan faktör sınırlayıcıdır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The graph shows that the population is largest at the optimum temperature.*", metin: "Grafiği yorumlama kalıbı." },
            { ikon: "✍️", baslik: "*Outside the tolerance range, the organism cannot survive.*", metin: "Sınır tanımı." }
          ] }
      ]
    },
    {
      baslik: "Habitat ve niş: adres ve meslek",
      kisa: "Habitat canlının yaşadığı yerdir; niş o yerdeki rolüdür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏠", terim: "Habitat", tr: "yaşam alanı", tanim: "Bir türün yaşadığı ve ihtiyaçlarını bulduğu fiziksel yer. Canlının ==adresi==.", ornek: "Yeşilbaş ördeğin habitatı, sazlıklı bir sulak alandır." },
            { ikon: "🧩", terim: "Ecological niche", tr: "ekolojik niş", tanim: "Türün ekosistemdeki bütün rolü: ne yer, ne zaman aktiftir, nerede ürer, hangi koşullara dayanır, kimle ilişkidedir. Canlının ==mesleği==.", ornek: "Yarasa: geceleri böcek avlar, böcek sayısını sınırlar." }
          ] },
        { tip: "ikili", sol: { ikon: "🏠", baslik: "*Habitat*", maddeler: ["Yer: nerede yaşıyor?", "Orman, göl, kayalık, resif"] },
          sag: { ikon: "🧩", baslik: "*Niche*", maddeler: ["Rol: ne iş yapıyor?", "Beslenme, aktif zaman, üreme, ilişkiler"] },
          oyun: [
            { metin: "Bir kayın ormanının nemli zemini.", cevap: "sol", neden: "Bir yer tarifi: *habitat*." },
            { metin: "Geceleri aktif olup böcek avlaması.", cevap: "sag", neden: "Beslenme ve aktif zaman: *niche*." },
            { metin: "Bir mercan resifi.", cevap: "sol", neden: "Fiziksel yer: *habitat*." },
            { metin: "Meyve yiyip tohumları dışkısıyla yayması.", cevap: "sag", neden: "Ekosistemdeki görevi: *niche*." },
            { metin: "Kıyıdaki kayalık.", cevap: "sol", neden: "Yaşadığı yer: *habitat*." }
          ] },
        { tip: "not", metin: "Aynı ağaçta yaşayan ağaçkakan gövdedeki larvaları, baştankara ince dallardaki böcekleri arar. Habitatları aynı, nişleri farklıdır. Böylece rekabet azalır ve iki tür birlikte yaşar (*resource partitioning*, kaynak bölüşümü)." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The habitat is where an organism lives, whereas the niche is its role in the ecosystem.*", metin: "Habitat ve nişi tek cümlede ayırır." }
          ] }
      ]
    },
    {
      baslik: "Ekosistem türleri",
      kisa: "Ekosistemler karasal, sucul ya da insan yapımıdır; sınırları kesin değildir.",
      bloklar: [
        { tip: "tablo", baslik: "Türkiye'den ekosistem örnekleri", head: ["Tür", "Örnek", "Belirgin abiyotik özellik"],
          rows: [
            ["Karasal: orman", "Karadeniz'in kayın ve ladin ormanları", "Bol yağış, yüksek nem"],
            ["Karasal: step", "İç Anadolu bozkırı", "Az yağış, sert kış, sıcak yaz"],
            ["Tatlı su", "Eğirdir Gölü", "Düşük tuzluluk"],
            ["Deniz", "Akdeniz'in *Posidonia* çayırları", "Yüksek tuzluluk"],
            ["Sulak alan", "Kızılırmak Deltası, Sultan Sazlığı", "Su ile karanın geçiş bölgesi"],
            ["Yapay", "Baraj gölü, tarım arazisi, şehir parkı", "İnsan müdahalesiyle sürer"]
          ] },
        { tip: "not", metin: "Ekosistemin sınırını biz çizeriz: çürük bir kütük de, koskoca bir göl de ekosistemdir. Ekosistemler birbirine açıktır; kuşlar, rüzgâr ve akarsular madde ve enerji taşır. Enerji güneşten gelir ve tek yönlü akar, madde ise döner (sonraki iki defter)." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*An ecosystem includes the living organisms and their non-living environment.*", metin: "Ekosistem tanımı." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Düzeyler: birey → popülasyon → komünite → ekosistem → biyosfer.",
            "*Population* tek tür, *community* bütün türler; ekosistem = komünite + cansız çevre.",
            "*Species*: verimli döl verebilen bireyler grubu (at + eşek = kısır katır).",
            "*Biotic* canlıdır (üretici, tüketici, ayrıştırıcı); *abiotic* cansız koşuldur (ışık, sıcaklık, pH, tuzluluk).",
            "*Tolerance range*: alt sınır – optimum – üst sınır; dışarısı yaşam yok.",
            "*Limiting factor* optimumdan en uzak kalan faktördür, en bol olan değil.",
            "*Habitat* = adres (yer), *niche* = meslek (rol).",
            "Aynı habitatta farklı nişler rekabeti azaltır."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir sazlıkta yaşayan bütün kamışlar, balıklar, kurbağalar, su kuşları ve bakteriler birlikte neyi oluşturur?",
      opts: ["*Population*", "*Community*", "*Ecosystem*", "*Biome*"],
      a: 1,
      why: "Birden çok türün bütün popülasyonları *community* oluşturur. *Ecosystem* demek için sudaki ışığı, oksijeni, sıcaklığı gibi cansız çevrenin de dahil olması gerekir; bu soruda yalnızca canlılar sayılmış."
    },
    {
      q: "Soğuk su balığı yumurtalarının farklı su sıcaklıklarında yumurtadan çıkış oranı tabloda verilmiştir. Tabloya göre hangisi doğrudur?",
      fig: { type: "table", head: ["Sıcaklık (°C)", "2", "6", "10", "14", "18", "22"], rows: [["Yumurtadan çıkış (%)", 0, 40, 85, 60, 10, 0]], caption: "Su sıcaklığı ve çıkış oranı" },
      opts: ["Optimum yaklaşık 10 °C'dir; 2 °C ve 22 °C tolerans aralığının dışındadır.", "Optimum 22 °C'dir çünkü en yüksek sıcaklıktır.", "Optimum 14 °C'dir çünkü tabloda ortadadır.", "Tür 2 °C ile 22 °C arasında her yerde eşit başarıyla ürer."],
      a: 0,
      why: "Çıkış oranı 10 °C'de en yüksek (%85), yani optimum orasıdır. 2 °C ve 22 °C'de %0 olduğu için bu değerler tolerans aralığının dışındadır. 14 °C seçeneği yalnızca tablonun ortası olduğu için çekicidir, oysa orada oran %60'a düşmüştür."
    },
    {
      q: "Bir yarasa türü mağarada dinlenir, geceleri uçan böcekleri avlar ve böceklerin sayısını sınırlar. Bu ifadelerde hangisi niştir?",
      opts: ["Yalnızca mağara", "Mağara ve gece", "Geceleri böcek avlaması ve böcek sayısını sınırlaması", "Hiçbiri; niş yalnızca yiyeceklerdir"],
      a: 2,
      why: "Niş, türün ekosistemdeki rolüdür: ne yer, ne zaman aktiftir, ne etki yapar. Mağara yaşadığı yeri, yani habitatı anlatır. Niş yalnızca yiyecek değildir; zaman ve ilişkiler de nişe dahildir."
    },
    {
      q: "Küçük bir gölde besin bol ve sıcaklık uygun olduğu halde çözünmüş oksijen çok düşüktür ve balık sayısı artmamaktadır. Bu gölde sınırlayıcı faktör hangisidir?",
      opts: ["Besin miktarı", "Sıcaklık", "Balıkların sayısı", "Çözünmüş oksijen"],
      a: 3,
      why: "Sınırlayıcı faktör, toleransın sınırına dayanan faktördür. Burada besin ve sıcaklık uygun olduğuna göre oksijen belirleyicidir. Besin bol olduğu için sınırlayıcı sayılmaz; çekici yanlış şık budur."
    },
    {
      q: "Aynı kayın ağacında yaşayan iki kuş türünden biri gövdedeki larvaları, diğeri dal uçlarındaki böcekleri yemektedir. Bu durum iki tür için ne sağlar?",
      opts: ["Habitatları da farklı olduğu için birbirine hiç rastlamazlar", "Nişleri farklılaştığı için rekabet azalır ve birlikte yaşayabilirler", "İkisi aynı nişi paylaştığı için biri mutlaka yok olur", "İki tür aynı popülasyonu oluşturur"],
      a: 1,
      why: "Aynı habitatta farklı nişler kaynak bölüşümüdür (*resource partitioning*) ve rekabeti azaltır. Habitat aynı olduğu için birinci şık yanlıştır. İki farklı tür aynı popülasyonu oluşturmaz."
    }
  ]
};
