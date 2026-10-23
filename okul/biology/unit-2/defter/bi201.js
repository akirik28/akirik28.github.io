/* Kitora not defteri · bi201 · 2.1 Ekosistemin Bileşenleri
   Kaynak: öğretmen lecture'ı (Topic 2.1 Ecosystem Components) + okul-10-2025-26.md + MEB Maarif BİY.10.2. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bi201",
  amac: "Ekolojinin temel kelimelerini öğreneceksin: birey, popülasyon, komünite, ekosistem ve biyosfer düzeyleri; biyotik ve abiyotik faktörler (iklim, ışık, sıcaklık, toprak, su, pH); habitat ile niş farkı. Sonunda bir ekosistemi parçalarına ayırıp sınavda İngilizce anlatabileceksin.",
  bolumler: [
    {
      baslik: "Bireyden biyosfere: organizasyon düzeyleri",
      kisa: "Ekolojide her düzey, bir alttaki düzeylerin toplamıdır.",
      bloklar: [
        { tip: "adimlar", baslik: "Küçükten büyüğe beş düzey", adimlar: [
            { baslik: "Birey (*organism*)", metin: "Yaşam işlevlerini yürüten tek bir canlı: bir serçe, bir kayın ağacı." },
            { baslik: "Popülasyon (*population*)", metin: "Aynı türün, aynı yerde ve aynı zamanda yaşayan bireyleri: okul bahçesindeki bütün serçeler." },
            { baslik: "Komünite (*community*)", metin: "Aynı yerde etkileşen bütün popülasyonlar, yani bütün canlılar. İki komünite arasındaki geçiş alanına *ecotone* denir." },
            { baslik: "Ekosistem (*ecosystem*)", metin: "Komünite + cansız çevre (ışık, su, toprak, sıcaklık). Canlılar ile çevrenin birlikte oluşturduğu bütün." },
            { baslik: "Biyosfer (*biosphere*)", metin: "Yaşamın bulunduğu bütün bölge (küresel ekosistem): yaklaşık 16 km kalınlığında; litosfer (kara), hidrosfer (su) ve atmosferi kapsar. Canlılar eşit dağılmaz: soğukta az, sıcakta çok tür vardır." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧬", terim: "Species", tr: "tür", tanim: "Aynı kökenden gelen, birbiriyle çiftleşip ==verimli (üreyebilen) döl== veren, kromozom sayısı ve gen havuzu ortak bireyler grubu.", ornek: "Bengal kaplanı (*Panthera tigris*) bir türdür; bir ormandaki kaplanlar popülasyondur." },
            { ikon: "🌍", terim: "Biome", tr: "biyom (ek bilgi)", tanim: "Benzer iklim ve bitki örtüsüne sahip geniş ekosistem grubu.", ornek: "Tundra, tayga, step, çöl." }
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
            ["Tüketici (*consumer*, heterotrof)", "Hazır organik madde yer: otçul (*herbivore*), etçil (*carnivore*), hepçil (*omnivore*)", "Balık, kurbağa, su kuşu"],
            ["Detritivor (*detritivore*)", "Ölü organik maddeyi (yaprak, dışkı, leş) yer", "Solucan, odun biti, tezek böceği"],
            ["Saprotrof (*saprotroph*)", "Ölü maddenin üstüne enzim salgılar, ürünleri emer; besinleri geri dönüştürür", "Mantar, bakteri"],
            ["Abiyotik faktörler", "Canlı olmayan fiziksel ve kimyasal koşullar", "Işık, sıcaklık, pH, çözünmüş O₂, tuzluluk"]
          ], vurgu: 3, not: "İlk dört satır biyotik, son satır abiyotik faktördür. Ayrıştırıcılar olmasaydı ölü madde çürümez, üreticiler inorganik madde bulamaz ve ekosistemde yaşam biterdi." },
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
      baslik: "Abiyotik faktörler ayrıntıda",
      kisa: "İklim, ışık, sıcaklık, toprak, su ve pH canlıların dağılımını belirler.",
      bloklar: [
        { tip: "tablo", baslik: "Abiyotik faktörler ve etkileri", head: ["Faktör", "Canlılara etkisi", "Örnek"], rows: [
            ["İklim (*climate*)", "Bölgenin uzun yıllık ortalama hava koşulları; enlem, yükselti ve denize uzaklık belirler", "Akdeniz iklimine uyumlu bitkiler"],
            ["Işık (*light*)", "Fotosentez için görünür ışık gerekir; UV DNA'ya zarar verir. Gün uzunluğu çiçeklenme, göç, kış uykusu ve üremeyi etkiler", "Uzun gün, kısa gün, gün-nötr bitkiler; gececil ve gündüzcül hayvanlar"],
            ["Sıcaklık (*temperature*)", "Enzimleri etkiler (45 °C üstünde çalışmaz); bitkiler çoğunlukla 7–38 °C'de yaşar. Ekvator sıcak ve türce zengin, kutuplar soğuk", "Çöl ve kutup tilkisinin kulakları; devenin hörgücündeki yağ; kaktüs 50 °C üstüne dayanır"],
            ["Toprak ve mineral", "Kayaların su, rüzgâr ve ısı değişimiyle ufalanmasıyla oluşur; humus içerir. Mineral ve pH bitki türünü belirler", "Aynı iklimde farklı topraklarda farklı bitkiler"],
            ["Su (*water*)", "Bitki dağılımını belirler; enzim ve metabolizma için gerekli; terlemeyle ısı atılır; mineralleri çözer; fotosentezde hidrojen kaynağıdır", "Kanguru faresi susuz yaşar, kuru tohumla beslenir"],
            ["pH", "Denizde genelde sabit; göl, gölet ve toprakta asit yağmuru, gübre, atık ve çöple değişir. Enzimler sabit pH ister", "SO₂ ve NO₂ asit yağmuruna yol açar"]
          ], not: "Sınavda böyle yaz: *Abiotic factors such as light, temperature, water, soil and pH affect the distribution of organisms.*" },
        { tip: "ikili", sol: { ikon: "💡", baslik: "Işığın etkisi", maddeler: ["Fotosentez ve besin zinciri", "Gün uzunluğu: çiçeklenme, göç, üreme"] },
          sag: { ikon: "🌡️", baslik: "Sıcaklığın etkisi", maddeler: ["Enzim etkinliği", "Dağılım ve uyum: kulak boyutu, yağ depolama"] },
          oyun: [
            { metin: "Bir bitkinin çiçeklenme zamanını gün uzunluğunun belirlemesi.", cevap: "sol", neden: "Gün uzunluğu ışık süresidir: ışık faktörü." },
            { metin: "Enzimlerin 45 °C'nin üstünde çalışamaması.", cevap: "sag", neden: "Enzim etkinliği sıcaklığa bağlıdır." },
            { metin: "Kuşların günlerin kısalmasıyla göç etmesi.", cevap: "sol", neden: "Tetikleyen, ışık süresindeki değişimdir." },
            { metin: "Çöl tilkisinin büyük kulakları, kutup tilkisinin küçük kulakları.", cevap: "sag", neden: "Isı kaybı ve kazancıyla ilgili sıcaklık uyumu." }
          ] }
      ]
    },
    {
      baslik: "Abiyotik faktörün sınırı: tolerans aralığı (ek bilgi)",
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
      baslik: "Ekosistem türleri (ek bilgi)",
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
            "*Species*: verimli döl verebilen bireyler grubu; biyosfer yaklaşık 16 km kalınlıktadır.",
            "*Biotic* canlıdır (üretici, tüketici, detritivor, saprotrof); *abiotic* cansız koşuldur (iklim, ışık, sıcaklık, toprak, su, pH).",
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
      q: "All the reeds, fish, frogs, water birds and bacteria living together in a marsh form which of the following?",
      opts: ["*Population*", "*Community*", "*Ecosystem*", "*Biome*"],
      a: 1,
      why: "Birden çok türün bütün popülasyonları *community* oluşturur. *Ecosystem* demek için sudaki ışığı, oksijeni, sıcaklığı gibi cansız çevrenin de dahil olması gerekir; bu soruda yalnızca canlılar sayılmış."
    },
    {
      q: "The hatching rate of cold-water fish eggs at different water temperatures is given in the table. Which statement is correct?",
      fig: { type: "table", head: ["Temperature (°C)", "2", "6", "10", "14", "18", "22"], rows: [["Hatching (%)", 0, 40, 85, 60, 10, 0]], caption: "Water temperature and hatching rate" },
      opts: ["The optimum is about 10 °C; 2 °C and 22 °C are outside the tolerance range.", "The optimum is 22 °C because it is the highest temperature.", "The optimum is 14 °C because it is in the middle of the table.", "The species reproduces equally well everywhere between 2 °C and 22 °C."],
      a: 0,
      why: "Çıkış oranı 10 °C'de en yüksek (%85), yani optimum orasıdır. 2 °C ve 22 °C'de %0 olduğu için bu değerler tolerans aralığının dışındadır. 14 °C seçeneği yalnızca tablonun ortası olduğu için çekicidir, oysa orada oran %60'a düşmüştür."
    },
    {
      q: "A species of bat rests in a cave, hunts flying insects at night and limits the number of insects. Which of these statements describes its niche?",
      opts: ["Only the cave", "The cave and the night", "Hunting insects at night and limiting the number of insects", "None; the niche is only the food it eats"],
      a: 2,
      why: "Niş, türün ekosistemdeki rolüdür: ne yer, ne zaman aktiftir, ne etki yapar. Mağara yaşadığı yeri, yani habitatı anlatır. Niş yalnızca yiyecek değildir; zaman ve ilişkiler de nişe dahildir."
    },
    {
      q: "In a small lake food is plentiful and the temperature is suitable, yet dissolved oxygen is very low and the fish population does not grow. Which is the limiting factor in this lake?",
      opts: ["The amount of food", "The temperature", "The number of fish", "Dissolved oxygen"],
      a: 3,
      why: "Sınırlayıcı faktör, toleransın sınırına dayanan faktördür. Burada besin ve sıcaklık uygun olduğuna göre oksijen belirleyicidir. Besin bol olduğu için sınırlayıcı sayılmaz; çekici yanlış şık budur."
    },
    {
      q: "Two bird species live in the same beech tree; one eats larvae in the trunk and the other eats insects on the twig tips. What does this provide for the two species?",
      opts: ["Their habitats are also different, so they never meet", "Their niches differ, so competition is reduced and they can live together", "They share the same niche, so one must disappear", "The two species form the same population"],
      a: 1,
      why: "Aynı habitatta farklı nişler kaynak bölüşümüdür (*resource partitioning*) ve rekabeti azaltır. Habitat aynı olduğu için birinci şık yanlıştır. İki farklı tür aynı popülasyonu oluşturmaz."
    }
  ]
};
