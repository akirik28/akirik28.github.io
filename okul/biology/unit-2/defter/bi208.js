/* Kitora not defteri · bi208 · 2.8 Biyoçeşitlilik
   Kaynak: okul-10-2025-26.md (Biology Tema 2) + MEB Maarif BİY.10.2. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bi208",
  amac: "Biyoçeşitliliğin ne olduğunu ve neden değerli olduğunu, Türkiye'nin neden bu kadar zengin olduğunu, endemik türleri, biyoçeşitliliği tehdit eden etkenleri (habitat kaybı ve orman yangınları dahil) ve korunma yollarını öğreneceksin.",
  bolumler: [
    {
      baslik: "Biyoçeşitliliğin üç düzeyi",
      kisa: "Biyoçeşitlilik genlerden ekosistemlere kadar üç düzeyde ölçülür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧬", terim: "Genetic diversity", tr: "genetik çeşitlilik", tanim: "Bir türün bireyleri arasındaki gen farkları. Çevre değişince bazı bireylerin ayakta kalma şansını artırır.", ornek: "Anadolu'daki çok sayıda yerel buğday ve fasulye çeşidi (ata tohumu)." },
            { ikon: "🦋", terim: "Species diversity", tr: "tür çeşitliliği", tanim: "Bir bölgedeki tür sayısı (*species richness*) ve türlerin birbirine göre bolluğu (*evenness*).", ornek: "Bir orman, bir tarlaya göre çok daha fazla tür barındırır." },
            { ikon: "🌍", terim: "Ecosystem diversity", tr: "ekosistem çeşitliliği", tanim: "Bir bölgedeki orman, step, sulak alan, göl ve deniz gibi farklı ekosistemlerin çeşitliliği.", ornek: "Türkiye'de Karadeniz ormanları ile İç Anadolu bozkırı bir arada bulunur." }
          ] },
        { tip: "ornek", baslik: "Tür zenginliği aynı, çeşitlilik farklı", durum: "İki çayırın her birinde 100 bitki var. Çayır A'da 4 tür, her biri 25 birey. Çayır B'de de 4 tür var: 97, 1, 1 ve 1 birey. Hangisi daha çeşitlidir?",
          adimlar: [
            "Tür zenginliği: A için 4, B için 4. İkisi eşit.",
            "Bolluk dağılımı: A'da dört tür de eşit (25-25-25-25). B'de bir tür baskın (97), üç tür çok nadir.",
            "Çeşitlilik hem tür sayısına hem eşit dağılıma bakar. B'de bir tür hakimiyet kurmuş."
          ], sonuc: "Çayır A daha çeşitlidir; tür sayısı aynı olsa da türler dengeli dağılmıştır." },
        { tip: "liste", maddeler: [
            { ikon: "🍎", baslik: "Gıda, ilaç ve hammadde", metin: "Tarım bitkileri, ilaç etken maddeleri, odun ve lif doğadan gelir." },
            { ikon: "🐝", baslik: "Ekosistem hizmetleri", metin: "Tozlaşma, temiz su ve hava, toprak oluşumu, iklimin düzenlenmesi." },
            { ikon: "🛡️", baslik: "Dayanıklılık", metin: "Çeşitli ekosistem; hastalığa, kuraklığa ve değişime daha dayanıklıdır. Genetik çeşitlilik, bir tehdit gelince en az bir bireyin ayakta kalma şansını artırır." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Biodiversity includes genetic diversity, species diversity and ecosystem diversity.*", metin: "Üç düzey." },
            { ikon: "✍️", baslik: "*A more diverse ecosystem is generally more resilient to environmental change.*", metin: "Önemi." }
          ] }
      ]
    },
    {
      baslik: "Türkiye neden biyoçeşitlilikte zengin?",
      kisa: "Anadolu; iklim, yükselti ve coğrafi konumuyla çok çeşitli yaşam alanları sunar.",
      bloklar: [
        { tip: "harita", merkez: "Türkiye'nin biyoçeşitliliği", dallar: [
            { baslik: "Üç fitocoğrafi bölge", alt: "Avrupa–Sibirya, Akdeniz, İran–Turan" },
            { baslik: "Üç sıcak nokta", alt: "Akdeniz Havzası, Kafkasya, İran–Anadolu (*biodiversity hotspot*)" },
            { baslik: "İklim çeşitliliği", alt: "Nemli Karadeniz, kurak İç Anadolu, Akdeniz iklimi" },
            { baslik: "Dağlar ve yükselti", alt: "Kuzey Anadolu, Toroslar, Kazdağları: yükseltiyle değişen yaşam kuşakları" },
            { baslik: "Üç deniz", alt: "Karadeniz, Ege ve Akdeniz: birbirinden farklı deniz ekosistemleri" },
            { baslik: "Kıtalar arası köprü", alt: "Asya, Avrupa ve Afrika'dan türler karışır; buzul çağında sığınak" },
            { baslik: "Zengin bitki varlığı", alt: "Yaklaşık 12 bin bitki türü ve alt türü; yaklaşık üçte biri endemik" }
          ] },
        { tip: "tablo", baslik: "Türkiye'deki sıcak noktalar", head: ["Sıcak nokta", "Türkiye'de nerede?"],
          rows: [
            ["Akdeniz Havzası", "Ege ve Akdeniz kıyıları, Toroslar"],
            ["Kafkasya", "Doğu Karadeniz ve Kuzeydoğu Anadolu"],
            ["İran–Anadolu", "İç, Güneydoğu ve Doğu Anadolu"]
          ], not: "Sıcak nokta ölçütü: en az 1 500 endemik damarlı bitki türü barındırmak ve özgün bitki örtüsünün en az %70'ini kaybetmiş olmak. Yani hem çok zengin hem çok tehdit altında." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Turkey is rich in biodiversity because of its varied climates, mountains, and its position between three continents.*", metin: "Türkiye'nin zenginliği." },
            { ikon: "✍️", baslik: "*A biodiversity hotspot has many endemic species and has lost most of its original habitat.*", metin: "Sıcak nokta tanımı." }
          ] }
      ]
    },
    {
      baslik: "Endemik türler ve Türkiye'den örnekler",
      kisa: "Endemik tür yalnızca belirli bir bölgede yaşar, başka hiçbir yerde doğal olarak bulunmaz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📍", terim: "Endemic species", tr: "endemik tür", tanim: "Doğal yayılışı yalnızca belirli bir alanla (ülke, göl, dağ, ada) sınırlı olan tür. Alan küçüldükçe yok olma riski artar.", ornek: "Türkiye endemiği, Van Gölü endemiği gibi ölçeği belirtilir." },
            { ikon: "🐟", terim: "Pearl mullet (*Alburnus tarichi*)", tr: "inci kefali", tanim: "Yalnızca Van Gölü havzasında yaşayan balık. Çok alkali (sodalı) göl suyuna uyum sağlamıştır; üremek için ilkbaharda tatlı su derelerine göç eder.", ornek: "Van Gölü endemiği." },
            { ikon: "🌲", terim: "Kazdağı fir", tr: "Kazdağı göknarı", tanim: "Kuzeybatı Anadolu'da Kazdağları çevresinde doğal olarak yetişen göknar. Dünyada başka bir yerde doğal ormanı yoktur.", ornek: "Türkiye endemiği ağaç." },
            { ikon: "🐈", terim: "Van cat", tr: "Van kedisi", tanim: "Bir tür değil, Van Gölü yöresine özgü yerel bir kedi ırkıdır: uzun, beyaz tüylü; çoğunun gözleri farklı renktedir (biri mavi, biri kehribar). Genetik çeşitliliğin bir örneğidir.", ornek: "Ankara kedisi, Ankara keçisi ve Kangal köpeği de Anadolu'nun yerel ırklarıdır." }
          ] },
        { tip: "ikili", sol: { ikon: "📍", baslik: "*Endemic*", maddeler: ["Doğal olarak yalnızca tek bir bölgede", "Küçük alan, yüksek risk"] },
          sag: { ikon: "🌐", baslik: "*Not endemic*", maddeler: ["Birden çok bölgede doğal olarak bulunur", "Geniş yayılışlı"] },
          oyun: [
            { metin: "Yalnızca Van Gölü havzasında bulunan inci kefali.", cevap: "sol", neden: "Tek bir bölgeye özgü: *endemic*." },
            { metin: "Hem Türkiye'de hem İran ve Afganistan'da doğal yayılış gösteren ters lale.", cevap: "sag", neden: "Birçok ülkede doğal yayılışı var: *not endemic*." },
            { metin: "Kazdağları çevresine özgü Kazdağı göknarı.", cevap: "sol", neden: "Dar yayılışlı: *endemic*." },
            { metin: "Avrupa, Asya ve Kuzey Afrika'da yaşayan kızıl tilki.", cevap: "sag", neden: "Çok geniş yayılışlı: *not endemic*." },
            { metin: "Yalnızca Madagaskar adasında yaşayan lemurlar.", cevap: "sol", neden: "Tek bir adaya özgü: *endemic*." }
          ] },
        { tip: "tuzak", baslik: "Ters lale tuzağı", metin: "Ters lale (*Fritillaria imperialis*) Anadolu'nun sevilen simge çiçeklerinden biridir; doğal yayılışı Anadolu'dan İran ve Himalayalara kadar uzanır.", yanlis: "Bir ülkenin simgesi olan her bitki o ülkenin endemik türüdür.", dogru: "Endemiklik ==yayılışa== bağlıdır, simge olmaya değil. Doğal olarak başka bölgelerde de bulunan tür endemik sayılmaz." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*An endemic species is found naturally in only one geographic area.*", metin: "Tanım." },
            { ikon: "✍️", baslik: "*The pearl mullet is endemic to Lake Van and lives in highly alkaline water.*", metin: "Örnek cümle." }
          ] }
      ]
    },
    {
      baslik: "Biyoçeşitliliği tehdit edenler",
      kisa: "Habitat kaybı, istilacı türler, kirlilik, aşırı avlanma ve iklim değişikliği türleri yok eder.",
      bloklar: [
        { tip: "harita", merkez: "Tehditler", dallar: [
            { baslik: "Habitat kaybı ve parçalanması", alt: "Ormansızlaşma, tarım, kentleşme, yol, baraj, yangın" },
            { baslik: "İstilacı türler", alt: "Akdeniz'e Süveyş Kanalı'ndan geçen aslan balığı ve gümüş balonbalığı" },
            { baslik: "Kirlilik", alt: "Pestisit, plastik, ötrofikasyon" },
            { baslik: "Aşırı avlanma", alt: "Aşırı balıkçılık, kaçak avcılık, bitki toplama" },
            { baslik: "İklim değişikliği", alt: "Habitat kayması, mercan beyazlaşması" }
          ] },
        { tip: "grafik", baslik: "Habitat küçülürse kaç tür kalır? (tür–alan ilişkisi)", xlabel: "Kalan habitat alanı (%)", ylabel: "Kalan tür oranı (%)", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "10" }, { v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }, { v: 10, label: "100" }],
          yticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }, { v: 10, label: "100" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, noktalar: [[0, 0], [0.1, 3.16], [0.5, 4.73], [1, 5.62], [2, 6.69], [3, 7.4], [5, 8.41], [7, 9.14], [10, 10]], gizli: true },
            { id: "a", tip: "nokta", renk: 1, x: 10, y: 10, etiket: "tüm habitat", kilavuz: true, gizli: true },
            { id: "b", tip: "nokta", renk: 2, x: 5, y: 8.4, etiket: "yarısı: ≈ %84 tür kalır", kilavuz: true, gizli: true },
            { id: "c", tip: "nokta", renk: 3, x: 1, y: 5.6, etiket: "%90 kayıp: ≈ %56 kalır", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Habitat alanı büyüdükçe tür sayısı artar, ama giderek yavaş. Eğri bu ilişkiyi gösterir.", goster: ["e", "a"] },
            { metin: "Alan yarıya inince türlerin yalnızca ≈ %16'sı kaybolur.", goster: ["b"] },
            { metin: "Alanın ==%90'ı== yok olunca türlerin yaklaşık ==%44'ü== kaybolur. Alan küçüldükçe eğri dikleşir: kayıp hızlanır.", goster: ["c"] },
            { metin: "Habitat parçalandığında küçük parçalarda kalan popülasyonlar birbirinden kopar, kenar etkisi artar ve genetik çeşitlilik düşer." }
          ] },
        { tip: "not", metin: "==Habitat kaybı== en büyük tehdittir. Orman yangınları da bu başlığa girer: Akdeniz ormanlarında yangın doğal bir etkendir ve bazı çam türlerinin kozalakları yangınla açılır. Ama sıcak hava dalgası, kuraklık ve insan ihmali yangın sayısını ve şiddetini artırdığında orman kendini yenileyemez; yanan toprak erozyona uğrar. Yangın sonrası yeniden yeşerme ikincil süksesyondur." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Habitat loss is the main threat to biodiversity, followed by invasive species, pollution, overexploitation and climate change.*", metin: "Tehditleri sayar." },
            { ikon: "✍️", baslik: "*Invasive species outcompete native species and disrupt food webs.*", metin: "İstilacı tür etkisi." }
          ] }
      ]
    },
    {
      baslik: "Biyoçeşitliliği korumak",
      kisa: "Koruma yerinde (in situ) ya da yer dışında (ex situ) yapılabilir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏞️", baslik: "*In situ*", maddeler: ["Türü doğal yaşam alanında korumak", "Milli park, koruma alanı"] },
          sag: { ikon: "🏛️", baslik: "*Ex situ*", maddeler: ["Türü doğal alanın dışında korumak", "Tohum bankası, botanik bahçesi"] },
          oyun: [
            { metin: "Milli park ya da doğa koruma alanı ilan etmek.", cevap: "sol", neden: "Tür kendi ortamında kalıyor: *in situ*." },
            { metin: "Nadir bitkilerin tohumlarını gen bankasında saklamak.", cevap: "sag", neden: "Ortamdan alındı: *ex situ*." },
            { metin: "Sulak alanı Ramsar alanı ilan etmek.", cevap: "sol", neden: "Habitat yerinde korunuyor: *in situ*." },
            { metin: "Nesli tükenmekte olan bir hayvanı hayvanat bahçesinde üretmek.", cevap: "sag", neden: "Doğal ortamın dışında: *ex situ*." },
            { metin: "Deniz koruma alanında avlanma yasağı.", cevap: "sol", neden: "Tür denizde, yerinde korunuyor: *in situ*." }
          ] },
        { tip: "tablo", baslik: "Biyoçeşitlilik için uluslararası anlaşmalar", head: ["Anlaşma", "Yıl", "Odak"],
          rows: [
            ["Ramsar Sözleşmesi", "1971", "Sulak alanların ve göçmen kuşların korunması"],
            ["CITES", "1973", "Nesli tehlike altındaki türlerin uluslararası ticaretinin denetimi"],
            ["Biyolojik Çeşitlilik Sözleşmesi (*CBD*)", "1992 (Rio)", "Koruma, sürdürülebilir kullanım, faydanın adil paylaşımı"],
            ["Kunming–Montreal Küresel Biyoçeşitlilik Çerçevesi", "2022", "2030'a kadar kara ve denizlerin en az %30'unu koruma (\"30×30\")"]
          ] },
        { tip: "not", metin: "==IUCN Kırmızı Listesi== türleri yok olma riskine göre sınıflar: en az endişe (*LC*), yakın tehdit altında (*NT*), hassas (*VU*), tehlikede (*EN*), kritik tehlikede (*CR*), doğada tükenmiş (*EW*), nesli tükenmiş (*EX*). Koruma önceliği riski yüksek türlere verilir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*In situ conservation protects species in their natural habitat, whereas ex situ conservation protects them outside it.*", metin: "İki koruma yöntemi." },
            { ikon: "✍️", baslik: "*National parks and protected areas help conserve biodiversity.*", metin: "Koruma alanları." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Biyoçeşitlilik üç düzeydedir: genetik, tür ve ekosistem çeşitliliği.",
            "Çeşitlilik hem tür sayısına hem türlerin dengeli dağılımına bakar.",
            "Türkiye'de 3 fitocoğrafi bölge, 3 sıcak nokta, farklı iklimler, dağlar ve 3 deniz bulunur; bitki türlerinin yaklaşık üçte biri endemiktir.",
            "Endemik tür yalnızca bir bölgede doğal olarak bulunur: inci kefali (Van Gölü), Kazdağı göknarı. Van kedisi bir tür değil, yerel ırktır.",
            "Simge olmak endemik olmak değildir (ters lale doğal olarak başka ülkelerde de yetişir).",
            "Tehditler: habitat kaybı (en büyüğü), istilacı türler, kirlilik, aşırı avlanma, iklim değişikliği.",
            "Alan küçülünce tür sayısı azalır: alanın %90'ı giderse türlerin yaklaşık %44'ü kaybolur.",
            "Koruma: *in situ* (milli park, Ramsar alanı) ve *ex situ* (gen bankası, botanik bahçesi); IUCN Kırmızı Listesi riski sınıflar."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Tabloda iki çayırdaki tür sayıları verilmiştir. Hangisi doğrudur?",
      fig: { type: "table", head: ["Tür", "Tür 1", "Tür 2", "Tür 3", "Tür 4"], rows: [["Çayır A (birey)", 25, 25, 25, 25], ["Çayır B (birey)", 97, 1, 1, 1]], caption: "Her çayırda toplam 100 bireyi" },
      opts: ["Çayır B daha çeşitlidir çünkü bir türü çok bollaşmıştır.", "Çayır A'da tür zenginliği daha fazladır.", "İkisinde tür zenginliği aynıdır, ama A'da türler daha dengeli dağıldığı için A daha çeşitlidir.", "İkisi de aynı derecede çeşitlidir."],
      a: 2,
      why: "Her iki çayırda da 4 tür var (zenginlik eşit). Çeşitlilik tür dengesini de hesaba katar; A'da bütün türler eşit bollukta, B'de tek tür baskın. Bu yüzden son şık eksiktir."
    },
    {
      q: "Aşağıdakilerden hangisi endemik tür tanımına en iyi uyar?",
      opts: ["Dünyanın her yerinde yaşayan bir tür", "Doğal olarak yalnızca Van Gölü havzasında bulunan inci kefali", "Nesli tükenmekte olan her tür", "Bir ülkenin ulusal simgesi olan her çiçek"],
      a: 1,
      why: "Endemik tür, doğal yayılışı tek bir bölgeyle sınırlı olan türdür. Nesli tehlikede olmak ya da simge olmak endemik olmayı göstermez."
    },
    {
      q: "Tabloda bir ormanın kalan alanı ile içinde yaşayan türlerin kalan oranı verilmiştir (tür–alan ilişkisi). Habitat alanının %90'ı yok edildiğinde (kalan alan %10) yaklaşık kaç türün kaybolması beklenir?",
      fig: { type: "table", head: ["Kalan alan (%)", "100", "50", "10", "1"], rows: [["Kalan tür (%)", 100, 84, 56, 32]], caption: "Tür–alan ilişkisi" },
      opts: ["Yaklaşık %10", "Yaklaşık %16", "Yaklaşık %90", "Yaklaşık %44"],
      a: 3,
      why: "Kalan alan %10 iken kalan tür oranı %56; yani kayıp 100 − 56 = %44. %16 alanın yarısı kaybolduğunda görülen kayıptır; %90 alan kaybıyla türlerin %90'ı kaybolmaz."
    },
    {
      q: "Nesli tükenmekte olan bir bitkinin tohumları gen bankasında saklanmakta, bitki ayrıca botanik bahçesinde yetiştirilmektedir. Bu koruma yöntemi hangisidir?",
      opts: ["Yer dışı (*ex situ*) koruma", "Yerinde (*in situ*) koruma", "Doğal süksesyon", "Biyolojik büyütme"],
      a: 0,
      why: "Tür doğal ortamının dışında korunuyorsa *ex situ*'dur. *In situ* koruma, türü milli park gibi doğal yaşam alanında korur."
    },
    {
      q: "Süveyş Kanalı'ndan Akdeniz'e geçen aslan balığı, yerli balık popülasyonlarını azaltmaktadır. Bu durum hangi tehdit türüne girer?",
      opts: ["Habitat parçalanması", "İstilacı tür", "Aşırı avlanma", "Asit yağmuru"],
      a: 1,
      why: "Yeni bir bölgeye giren ve yerli türlerle rekabet edip onları avlayan tür istilacı türdür. Aslan balığı yerli türlerin besinini ve habitatını da etkiler."
    }
  ]
};
