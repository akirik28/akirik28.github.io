/* Kitpath not defteri · bi208 · 2.8 Biyoçeşitlilik
   Kaynak: öğretmen lecture'ı (2.5–2.9 Lecture Notes: habitat degradation, forest fires, biodiversity loss, conservation in Turkey) + okul-10-2025-26.md + MEB Maarif BİY.10.2. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bi208",
  amac: "Biyoçeşitliliğin ne olduğunu ve neden değerli olduğunu, Türkiye'nin neden bu kadar zengin olduğunu, endemik türleri, biyoçeşitliliği tehdit eden etkenleri (habitat kaybı ve orman yangınları dahil) ve korunma yollarını öğreneceksin.",
  bolumler: [
    {
      baslik: "Biyoçeşitliliğin üç düzeyi",
      kisa: "Biyoçeşitlilik genlerden ekosistemlere kadar üç düzeyde ölçülür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧬", terim: "Genetic diversity", tr: "genetik çeşitlilik", tanim: "Bir popülasyonda bireyler arasındaki genetik değişkenlik. Çevre değişince bazı bireylerin ayakta kalma şansını artırır.", ornek: "Anadolu'daki çok sayıda yerel buğday ve fasulye çeşidi (ata tohumu)." },
            { ikon: "🦋", terim: "Species diversity", tr: "tür çeşitliliği", tanim: "Bir bölgede yaşayan türlerin sayısı ve bolluğu (*species richness*, *evenness*).", ornek: "Bir orman, bir tarlaya göre çok daha fazla tür barındırır." },
            { ikon: "🌍", terim: "Ecosystem diversity", tr: "ekosistem çeşitliliği", tanim: "Biyosferdeki orman, bozkır, okyanus, kıyı, çöl ve dağ gibi farklı ekosistemlerin çeşitliliği.", ornek: "Türkiye'de Karadeniz ormanları ile İç Anadolu bozkırı bir arada bulunur." }
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
        { tip: "not", metin: "Biyoçeşitlilik türlerin, genlerin, ekosistemlerin ve ekolojik süreçlerin çeşitliliğidir; ülkenin doğal zenginliğidir ve insan yaşamı ona bağlıdır. Anadolu'da fil, aslan, kunduz ve uzun boyunlu kuş (Amik Gölü kurutulunca) gibi türler yok oldu. Sınavda böyle yaz: *Biodiversity includes genetic diversity, species diversity and ecosystem diversity.*" }
      ]
    },
    {
      baslik: "Türkiye neden biyoçeşitlilikte zengin?",
      kisa: "Türkiye, Avrupa ve Orta Doğu'nun en zengin biyoçeşitlilik ülkesidir; coğrafyası bunun nedenidir.",
      bloklar: [
        { tip: "harita", merkez: "Türkiye'nin biyoçeşitliliği", dallar: [
            { baslik: "Üç fitocoğrafi bölge (ek bilgi)", alt: "Avrupa–Sibirya, Akdeniz, İran–Turan" },
            { baslik: "Üç sıcak nokta (ek bilgi)", alt: "Akdeniz Havzası, Kafkasya, İran–Anadolu (*biodiversity hotspot*)" },
            { baslik: "İklim çeşitliliği", alt: "Nemli Karadeniz, kurak İç Anadolu, Akdeniz iklimi" },
            { baslik: "Dağlar ve yükselti", alt: "Kuzey Anadolu, Toroslar, Kazdağları: yükseltiyle değişen yaşam kuşakları" },
            { baslik: "Üç deniz", alt: "Karadeniz, Ege ve Akdeniz: birbirinden farklı deniz ekosistemleri" },
            { baslik: "Kıtalar arası köprü", alt: "Asya, Avrupa ve Afrika'dan türler karışır; buzul çağında sığınak" },
            { baslik: "Zengin canlı varlığı", alt: "173 memeli, 493 kuş, 180 sürüngen, 369 tatlı su balığı; 12 150 damarlı bitki (3 496'sı endemik, ≈ %29)" }
          ] },
        { tip: "tablo", baslik: "Türkiye'deki sıcak noktalar (ek bilgi)", head: ["Sıcak nokta", "Türkiye'de nerede?"],
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
            { baslik: "Habitat kaybı ve parçalanması", alt: "Tarım, kentleşme, ormancılık, madencilik, baraj, yangın, sulak alan kurutma" },
            { baslik: "İstilacı türler", alt: "Akdeniz'e Süveyş Kanalı'ndan geçen aslan balığı ve gümüş balonbalığı" },
            { baslik: "Kirlilik", alt: "Hava, su ve toprak kirliliği; pestisit, ötrofikasyon" },
            { baslik: "Aşırı kaynak kullanımı", alt: "Aşırı balıkçılık, kaçak avcılık, nüfus artışıyla kaynak tüketimi" },
            { baslik: "İklim değişikliği", alt: "Deniz seviyesi yükselmesi, habitat kayması, tür dağılımının değişmesi" }
          ] },
        { tip: "grafik", baslik: "Habitat küçülürse kaç tür kalır? (tür–alan ilişkisi; ek bilgi)", xlabel: "Kalan habitat alanı (%)", ylabel: "Kalan tür oranı (%)", xmax: 10, ymax: 10,
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
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Habitat loss is the main threat to biodiversity, followed by invasive species, pollution, overexploitation and climate change.*", metin: "Tehditleri sayar." },
            { ikon: "✍️", baslik: "*Invasive species outcompete native species and disrupt food webs.*", metin: "İstilacı tür etkisi." }
          ] }
      ]
    },
    {
      baslik: "Habitat kaybı, parçalanma ve orman yangınları",
      kisa: "Habitat kaybı yaşam alanını yok eder; parçalanma onu bölerek türleri yalnızlaştırır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏚️", terim: "Habitat loss", tr: "habitat kaybı", tanim: "Bir canlının yaşaması için gerekli yaşam alanının insan etkinlikleriyle tamamen yok edilmesi. Başka alanı yoksa tür yok olabilir.", ornek: "Tarım, kentleşme, ormancılık, madencilik, kirlilik." },
            { ikon: "🧩", terim: "Habitat fragmentation", tr: "habitat parçalanması", tanim: "Büyük, bitişik yaşam alanlarının insan etkisiyle küçük parçalara bölünmesi. Parçalar arası uzaklık arttıkça türlerin yayılması zorlaşır.", ornek: "Bitkide çimlenme gücü ve rekabet gücü düşer; hayvanda yuva yapma, üreme ve göç bozulur." }
          ] },
        { tip: "tablo", baslik: "Orman yangınlarının nedenleri", head: ["Tür", "Neden"], rows: [
            ["Doğal", "Yıldırım düşmesi, yanardağ patlaması, çöp depolama alanında sıkışan metan gazının patlaması"],
            ["İnsan kaynaklı", "Elektrik hattı kazası, makine ve araç kıvılcımı, tarla ya da mera açmak için yakma, ormanda bitki yakma, söndürülmemiş ateş, cam kırığı, söndürülmemiş sigara ve kibrit"]
          ], not: "Yangın için yanıcı madde, ısı kaynağı ve uygun hava koşulu birlikte gerekir. Çoğu yangının nedeni bilinmez; bilinenlerin çoğu insan ihmalinden kaynaklanır." },
        { tip: "not", metin: "Ormanlar biyoçeşitliliği korur, havayı ve suyu arıtır, su döngüsüne katılır, toprağı tutarak erozyonu önler ve canlılara yaşam alanı olur. Yangın bu alanları bozar: tür sayısı azalır, iklim etkenleri (sıcaklık, rüzgâr, nem, yağış) bozulur, erozyon, sel ve hava kirliliği artar. Türkiye'de orman yangınlarının yaklaşık %97'si yaz aylarında çıkar. Sınavda böyle yaz: *Forest fires destroy habitats, reduce biodiversity and increase erosion and flooding.*" }
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
            ["Ramsar Sözleşmesi (sulak alanlar)", "1971", "Sulak alanların ve su kuşu yaşam alanlarının korunması"],
            ["Bern Sözleşmesi", "1979", "Avrupa yaban hayatı ve doğal yaşam alanlarının korunması"],
            ["CITES", "1973", "Nesli tehlike altındaki türlerin uluslararası ticaretinin denetimi"],
            ["Biyolojik Çeşitlilik Sözleşmesi (*CBD*)", "1992 (Rio)", "Koruma, sürdürülebilir kullanım, faydanın adil paylaşımı"],
            ["Akdeniz ve Karadeniz protokolleri", "—", "Özel korunan alanlar ve biyolojik çeşitliliğin (Karadeniz'de peyzajın da) korunması"],
            ["Kunming–Montreal Küresel Biyoçeşitlilik Çerçevesi", "2022", "2030'a kadar kara ve denizlerin en az %30'unu koruma (\"30×30\")"]
          ] },
        { tip: "tablo", baslik: "Türkiye'de koruma örnekleri", head: ["Yöntem", "Örnek"], rows: [
            ["Tür koruma", "Deniz kaplumbağası (21 önemli yuvalama alanı), Akdeniz foku (Ulusal Komite ve pilot alanlar), Şanlıurfa-Birecik'te üreme istasyonu"],
            ["Alan koruma (*in situ*)", "Milli park, tabiat koruma alanı, tabiat parkı, yaban hayatı geliştirme sahası, sulak alan: Kazdağı Milli Parkı, Hatay Dağ Ceylanı Yaban Hayatı Geliştirme Sahası"],
            ["Yer dışı koruma (*ex situ*)", "Tohum gen bankaları (Ege Tarımsal Araştırma Enstitüsü: 55 000'den fazla örnek, 3 339 tür; Ankara Tohum Gen Bankası ≈ 51 000), arboretumlar ve botanik bahçeleri (Ankara, Nezahat Gökyiğit, Ali Nihat Gökyiğit, Atatürk Arboretumu)"]
          ], not: "(Ek bilgi) IUCN Kırmızı Listesi türleri yok olma riskine göre sınıflar: LC, NT, VU, EN, CR, EW, EX. Sınavda böyle yaz: *In situ conservation protects species in their natural habitat, whereas ex situ conservation protects them outside it.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Biyoçeşitlilik üç düzeydedir: genetik, tür ve ekosistem çeşitliliği.",
            "Çeşitlilik hem tür sayısına hem türlerin dengeli dağılımına bakar.",
            "Türkiye, Avrupa ve Orta Doğu'nun en zengin biyoçeşitlilik ülkesidir: farklı iklimler, dağlar, 3 deniz; 12 150 bitki taksonunun 3 496'sı endemiktir.",
            "Endemik tür yalnızca bir bölgede doğal olarak bulunur: inci kefali (Van Gölü), Kazdağı göknarı. Van kedisi bir tür değil, yerel ırktır.",
            "Simge olmak endemik olmak değildir (ters lale doğal olarak başka ülkelerde de yetişir).",
            "Tehditler: habitat kaybı ve parçalanması (en büyüğü), istilacı türler, kirlilik, aşırı kaynak kullanımı, iklim değişikliği, orman yangınları.",
            "Alan küçülünce tür sayısı azalır: alanın %90'ı giderse türlerin yaklaşık %44'ü kaybolur.",
            "Koruma: *in situ* (milli park, Ramsar alanı) ve *ex situ* (gen bankası, botanik bahçesi); uluslararası anlaşmalar: CBD, CITES, Ramsar, Bern."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "The table shows the number of individuals of each species in two meadows. Which statement is correct?",
      fig: { type: "table", head: ["Species", "Species 1", "Species 2", "Species 3", "Species 4"], rows: [["Meadow A (individuals)", 25, 25, 25, 25], ["Meadow B (individuals)", 97, 1, 1, 1]], caption: "Each meadow has 100 individuals in total" },
      opts: ["Meadow B is more diverse because one species has become very abundant.", "Meadow A has greater species richness.", "Both have the same species richness, but meadow A is more diverse because its species are more evenly distributed.", "Both are equally diverse."],
      a: 2,
      why: "Her iki çayırda da 4 tür var (zenginlik eşit). Çeşitlilik tür dengesini de hesaba katar; A'da bütün türler eşit bollukta, B'de tek tür baskın. Bu yüzden son şık eksiktir."
    },
    {
      q: "Which of the following best fits the definition of an endemic species?",
      opts: ["A species living all over the world", "The pearl mullet, which is found naturally only in the Lake Van basin", "Every species that is close to extinction", "Every flower that is a national symbol of a country"],
      a: 1,
      why: "Endemik tür, doğal yayılışı tek bir bölgeyle sınırlı olan türdür. Nesli tehlikede olmak ya da simge olmak endemik olmayı göstermez."
    },
    {
      q: "The table shows the remaining area of a forest and the remaining proportion of the species living in it (species–area relationship). If 90% of the habitat is destroyed (10% of the area remains), about what percentage of the species is expected to be lost?",
      fig: { type: "table", head: ["Remaining area (%)", "100", "50", "10", "1"], rows: [["Remaining species (%)", 100, 84, 56, 32]], caption: "Species–area relationship" },
      opts: ["About 10%", "About 16%", "About 90%", "About 44%"],
      a: 3,
      why: "Kalan alan %10 iken kalan tür oranı %56; yani kayıp 100 − 56 = %44. %16 alanın yarısı kaybolduğunda görülen kayıptır; %90 alan kaybıyla türlerin %90'ı kaybolmaz."
    },
    {
      q: "The seeds of an endangered plant are stored in a gene bank and the plant is also grown in a botanical garden. Which conservation method is this?",
      opts: ["*Ex situ* conservation", "*In situ* conservation", "Natural succession", "Biomagnification"],
      a: 0,
      why: "Tür doğal ortamının dışında korunuyorsa *ex situ*'dur. *In situ* koruma, türü milli park gibi doğal yaşam alanında korur."
    },
    {
      q: "Which of the following is a human-caused reason for forest fires?",
      opts: ["Lightning strikes", "Volcanic eruptions", "Unextinguished cigarette butts and burning vegetation to clear fields", "Explosion of methane trapped in landfills"],
      a: 2,
      why: "Söndürülmemiş sigara ve tarla açmak için bitki yakmak insan kaynaklıdır. Yıldırım, yanardağ ve çöplükteki metan patlaması doğal nedenlerdir."
    }
  ]
};
