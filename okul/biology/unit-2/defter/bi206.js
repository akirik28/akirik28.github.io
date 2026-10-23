/* Kitora not defteri · bi206 · 2.6 Su, Toprak, Radyoaktif ve Gürültü Kirliliği
   Kaynak: öğretmen lecture'ı (2.5–2.9 Lecture Notes: water, soil, radioactive pollution, erosion) + okul-10-2025-26.md + MEB Maarif BİY.10.2. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bi206",
  amac: "Dört kirlilik türünü öğreneceksin: su kirliliği ve ötrofikasyon, toprak kirliliği ve erozyon, radyoaktif kirlilik, gürültü kirliliği. Her birinin kaynağını, canlılara etkisini ve önlemini sınavda İngilizce anlatabileceksin.",
  bolumler: [
    {
      baslik: "Su kirliliği: kaynak ve türler",
      kisa: "Kirleticiler tek bir noktadan ya da geniş bir alandan suya karışır.",
      bloklar: [
        { tip: "tablo", baslik: "Başlıca su kirleticileri", head: ["Kirletici", "Kaynak", "Etki"],
          rows: [
            ["Evsel atık su", "Kanalizasyon, deterjan, organik atık", "Organik madde ayrışırken O₂ tükenir; hastalık yapan mikroplar yayılır"],
            ["Tarımsal akıntı", "Kimyasal gübre (N, P), pestisit, hayvan atığı", "Ötrofikasyon; pestisit biyobirikim yapar"],
            ["Endüstriyel atık", "Fabrika atık suyu, madencilik", "Ağır metaller (cıva, kurşun, kadmiyum) zehirler ve besin zincirinde büyür"],
            ["Petrol sızıntısı", "Tanker kazası, rafineri", "Suyun yüzeyinde film oluşur; O₂ girişi azalır, kuş tüyleri yapışır"],
            ["Isıl kirlilik", "Santral soğutma suyu", "Sıcak suda çözünmüş O₂ azalır; canlılar stres yaşar"],
            ["Plastik ve mikroplastik", "Çöp, sentetik kumaş lifi", "Canlılar yutar; besin zincirine girer"]
          ] },
        { tip: "ikili", sol: { ikon: "🏭", baslik: "*Point source*", maddeler: ["Tek bir noktadan: boru, baca, kaza", "Bulması ve denetlemesi kolay"] },
          sag: { ikon: "🌾", baslik: "*Nonpoint source*", maddeler: ["Geniş bir alandan yayılır", "Denetlemesi zor"] },
          oyun: [
            { metin: "Fabrikanın nehre açılan atık su borusu.", cevap: "sol", neden: "Tek çıkış noktası: *point source*." },
            { metin: "Yağmurla tarlalardan nehre akan gübre ve pestisit.", cevap: "sag", neden: "Geniş alandan yayılıyor: *nonpoint source*." },
            { metin: "Arıtılmadan denize verilen kanalizasyon çıkışı.", cevap: "sol", neden: "Tek boru: *point source*." },
            { metin: "Cadde ve otoparklardan yağmur suyuyla akan yağ ve çöp.", cevap: "sag", neden: "Yayılı kaynak: *nonpoint source*." },
            { metin: "Tanker kazasında dökülen petrol.", cevap: "sol", neden: "Tek bir yerden: *point source*." }
          ] },
        { tip: "not", metin: "(Ek bilgi) Kirli su atık su arıtma tesisinde arıtılır: önce ızgara ve çökeltmeyle katı maddeler ayrılır, sonra mikroorganizmalar organik maddeyi parçalar (biyolojik arıtma), gerekirse kimyasal arıtma yapılır. En ucuz çözüm kirletmemektir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Point source pollution comes from a single identifiable location, whereas nonpoint source pollution comes from many diffuse sources.*", metin: "İki kaynak türünü ayırır." },
            { ikon: "✍️", baslik: "*Thermal pollution reduces the amount of dissolved oxygen in water.*", metin: "Isıl kirlilik." }
          ] }
      ]
    },
    {
      baslik: "Ötrofikasyon: gölün boğulması",
      kisa: "Aşırı besin, alg patlaması ve oksijen tükenmesi gölü öldürür.",
      bloklar: [
        { tip: "adimlar", baslik: "Ötrofikasyon zinciri", adimlar: [
            { baslik: "Aşırı besin girişi", metin: "Gübre, deterjandaki fosfat ve evsel atık suya fazla azot ve fosfor taşır." },
            { baslik: "Alg patlaması (*algal bloom*)", metin: "Fitoplankton ve algler hızla çoğalır; su yeşilleşir." },
            { baslik: "Işık engellenir", metin: "Yüzeyi kaplayan algler yüzünden derindeki su bitkileri ışık alamaz ve ölür." },
            { baslik: "Oksijen tükenir", metin: "Ölen bitki ve algların organik maddesi artar; ayrıştırıcı bakteriler çözünmüş O₂'yi tüketir. Suyun BOİ'si (*BOD*) yükselir." },
            { baslik: "Ölü bölge (*dead zone*)", metin: "Balıklar kıyıya ve yüzeye çıkar, sonra ölür; zehirli, kötü kokulu gazlar çıkar. Türler yok olur, besin zincirleri bozulur, çeşitlilik azalır." }
          ] },
        { tip: "grafik", baslik: "Alg miktarı ve çözünmüş oksijen (şematik)", xlabel: "Zaman", ylabel: "Alg ve çözünmüş O₂", xmax: 8, ymax: 10,
          ogeler: [
            { id: "a1", tip: "egri", renk: 2, noktalar: [[0, 1], [1, 2], [2, 5], [3, 9]], gizli: true },
            { id: "o1", tip: "egri", renk: 0, noktalar: [[0, 8], [1, 8.3], [2, 8.6], [3, 8.3]], gizli: true },
            { id: "a2", tip: "egri", renk: 2, etiket: "alg", noktalar: [[3, 9], [4, 8], [5, 3], [6, 1.5], [7, 1], [8, 0.8]], gizli: true },
            { id: "o2", tip: "egri", renk: 0, etiket: "O₂", noktalar: [[3, 8.3], [4, 7], [5, 4.5], [6, 2.2], [7, 1.2], [8, 1]], gizli: true },
            { id: "sinir", tip: "cizgi", renk: 3, kesik: true, from: [0, 3], to: [8, 3], gizli: true },
            { id: "sl", tip: "yazi", x: 7.9, y: 3.5, hiza: "end", metin: "balıklar için tehlikeli sınır", gizli: true }
          ],
          durumlar: [
            { metin: "Besin gelince algler ==patlarcasına== çoğalır. Gündüz fotosentez yüzünden O₂ yüksek kalır.", goster: ["a1", "o1"] },
            { metin: "Besin ve ışık tükenince algler kitleler hâlinde ölür.", goster: ["a2"] },
            { metin: "Ölü algları ayrıştırıcılar parçalarken O₂'yi tüketir: oksijen ==düşer==.", goster: ["o2"] },
            { metin: "O₂ tehlikeli sınırın altına inince balıklar ölür. Marmara Denizi'ndeki 2021 müsilaj olayında da kirlilik ve besin yükü, sıcak ve durgun suyla birleşti.", goster: ["sinir", "sl"] }
          ] },
        { tip: "tuzak", metin: "Algler fotosentez yapar, o hâlde O₂ üretirler gibi düşünülür.", yanlis: "Alg patlaması gölde O₂'yi artırır, bu yüzden göl için yararlıdır.", dogru: "Algler ölünce ayrıştırıcıların ==O₂ tüketimi== çok artar. Net sonuç O₂ azalması ve canlı ölümüdür." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Excess nutrients cause algal blooms; when the algae die, decomposers use up the dissolved oxygen.*", metin: "Ötrofikasyon cümlesi." },
            { ikon: "✍️", baslik: "*A high BOD value indicates that the water is polluted with organic matter.*", metin: "BOİ için." }
          ] }
      ]
    },
    {
      baslik: "Toprak kirliliği ve erozyon",
      kisa: "Kirleticiler toprağı zehirler; erozyon verimli üst toprağı taşır.",
      bloklar: [
        { tip: "tablo", baslik: "Toprağı bozan etkenler", head: ["Etken", "Kaynak", "Sonuç"],
          rows: [
            ["Pestisit ve kimyasal gübre fazlası", "Tarım", "Faydalı toprak canlıları ölür; yeraltı suyuna karışır"],
            ["Ağır metaller (kurşun, kadmiyum, krom, nikel, cıva, çinko)", "Madencilik, sanayi atığı, egzoz, radyoaktif atık", "Bitkiye geçer, insana ulaşır; yeraltı suyu ve göllere sızar"],
            ["Çöp ve plastik", "Evsel ve sanayi atığı", "Çok yavaş ayrışır; sızıntı suyu toprağı ve yeraltı suyunu kirletir. Toprak mikroorganizmaları etkilenir"],
            ["Tuzlanma (*salinization*)", "Kurak bölgede aşırı sulama", "Tuz birikir, bitki su alamaz, verim düşer"],
            ["Asit yağmuru", "SO₂ ve NOₓ", "Besin mineralleri yıkanır"]
          ] },
        { tip: "ikili", sol: { ikon: "⬇️", baslik: "Erozyonu hızlandıran", maddeler: ["Bitki örtüsünün azalması", "Yamaç aşağı sürüm"] },
          sag: { ikon: "🛡️", baslik: "Erozyonu önleyen", maddeler: ["Toprağı tutan kök ve örtü", "Eğime dik, basamaklı kullanım"] },
          oyun: [
            { metin: "Ormanın kesilmesi ya da yanması.", cevap: "sol", neden: "Kökler toprağı tutmaz: erozyon hızlanır." },
            { metin: "Yamaçlarda teraslama.", cevap: "sag", neden: "Suyun akış hızını keser: erozyon azalır." },
            { metin: "Aşırı otlatma ile bitki örtüsünün yok olması.", cevap: "sol", neden: "Çıplak toprak yağmura ve rüzgâra açık kalır." },
            { metin: "Ağaçlandırma ve rüzgâr perdesi (ağaç sıraları).", cevap: "sag", neden: "Kök toprağı tutar, ağaç rüzgârı keser." },
            { metin: "Tarlada ürün kalıntısı bırakma ve nöbetleşe ekim.", cevap: "sag", neden: "Toprak yüzeyi örtülü kalır." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🌊", terim: "Water erosion", tr: "su erozyonu", tanim: "Bitki örtüsü azalmış eğimli arazide yağmur suyu üst toprağı yıkar ve aşağı taşır.", ornek: "Yangından sonra çıplak kalan yamaç." },
            { ikon: "💨", terim: "Wind erosion", tr: "rüzgâr erozyonu", tanim: "Bitki örtüsü az, düz ve açık arazide güçlü kuru rüzgâr gevşek, kuru, ince taneli toprağı taşır.", ornek: "Kurak ovada toz fırtınası." },
            { ikon: "🧫", terim: "Bioremediation", tr: "biyolojik arıtma", tanim: "Bakteri, maya, bitki ya da solucan gibi canlılarla topraktan veya sudan zararlı maddeleri gidermek. Atık, başka canlıların kullanabileceği biçime çevrilir.", ornek: "Petrole bulaşmış toprağı ayrıştıran bakteriler." }
          ] },
        { tip: "not", metin: "==*Erosion*== (erozyon), bitki örtüsünden yoksun toprağın su, rüzgâr ve diğer etkenlerle aşınıp taşınmasıdır. İklim, eğim, toprak yapısı ve bitki örtüsü doğal etkenlerdir; kaçak kesim, yangın, aşırı otlatma, yanlış arazi kullanımı ve dik yamaçta tarım insan kaynaklıdır. Sonuçlar: verimli toprak ve ürün kaybı, kırdan kente göç, baraj ve göllerin dolması (enerji ve içme suyu azalır), kuraklık, çölleşme, sel. Sınavda böyle yaz: *Deforestation increases soil erosion because roots no longer hold the soil in place.*" }
      ]
    },
    {
      baslik: "Radyoaktif kirlilik",
      kisa: "Radyoaktif atık uzun yıllar zararlı ışın yayar; yarı ömür bozunma hızını verir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "☢️", terim: "Radioactive pollution", tr: "radyoaktif kirlilik", tanim: "Çevrede, vücutta ya da bir maddenin içinde istenmeyen radyoaktif madde birikmesi. Etkisi ışının şiddetine, maruz kalma süresine ve türüne bağlıdır.", ornek: "Çernobil (1986, Ukrayna) ve Fukushima (2011, Japonya) kazaları." },
            { ikon: "🛰️", terim: "Sources of radiation", tr: "ışın kaynakları", tanim: "Doğal: uzaydan ve Güneş'ten gelen kozmik ışınlar, yer kabuğundaki uranyum ve toryum. Yapay: tıbbi X-ışını cihazları, nükleer santraller, televizyon gibi ürünler.", ornek: "Hepsi insan, hayvan ve bitki sağlığını bozabilir." },
            { ikon: "⚡", terim: "Ionizing radiation", tr: "iyonlaştırıcı ışın", tanim: "Çekirdeğinde nötron sayısı protondan çok fazla olan kararsız maddeler alfa, beta ve gama ışını yayarak bozunur. Bu ışın DNA'ya zarar verir: mutasyon, kanser.", ornek: "Alfa, beta ve gama ışınları." },
            { ikon: "⏳", terim: "Half-life", tr: "yarı ömür", tanim: "Radyoaktif maddenin yarısının bozunması için geçen süre. Madde bozundukça tehlike azalır.", ornek: "Sezyum-137 ≈ 30 yıl; iyot-131 ≈ 8 gün; plütonyum-239 ≈ 24 bin yıl." }
          ] },
        { tip: "grafik", baslik: "Sezyum-137 bozunması (yarı ömür ≈ 30 yıl)", xlabel: "Zaman (yıl)", ylabel: "Kalan miktar (%)", xmax: 12, ymax: 10,
          xticks: [{ v: 3, label: "30" }, { v: 6, label: "60" }, { v: 9, label: "90" }, { v: 12, label: "120" }],
          yticks: [{ v: 10, label: "100" }, { v: 5, label: "50" }, { v: 2.5, label: "25" }, { v: 1.25, label: "12,5" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 10], [1, 7.94], [2, 6.3], [3, 5], [4, 3.97], [5, 3.15], [6, 2.5], [7, 1.98], [8, 1.57], [9, 1.25], [10, 0.99], [11, 0.79], [12, 0.63]], gizli: true },
            { id: "h1", tip: "nokta", renk: 1, x: 3, y: 5, etiket: "30 yıl: %50", kilavuz: true, gizli: true },
            { id: "h2", tip: "nokta", renk: 1, x: 6, y: 2.5, etiket: "60 yıl: %25", kilavuz: true, gizli: true },
            { id: "h3", tip: "nokta", renk: 1, x: 9, y: 1.25, etiket: "90 yıl: %12,5", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Radyoaktif madde ==üstel== olarak bozunur: miktar zamanla azalır ama hiçbir zaman bir anda sıfırlanmaz.", goster: ["c"] },
            { metin: "Bir yarı ömür (30 yıl) sonra madde %50'ye düşer.", goster: ["h1"] },
            { metin: "İkinci yarı ömürde kalanın yine yarısı gider: %25.", goster: ["h2"] },
            { metin: "Üçüncü yarı ömürde %12,5. Bu yüzden uzun ömürlü atıklar yüzlerce yıl güvenli biçimde izole edilmelidir.", goster: ["h3"] }
          ] },
        { tip: "ornek", baslik: "Atığın yarısı ne zaman gider?", durum: "Bir atıkta 800 g Sezyum-137 vardır (yarı ömür 30 yıl). 90 yıl sonra kaç gramı kalır?",
          adimlar: [
            "Yarı ömür sayısı = 90 ÷ 30 = 3.",
            "1. yarı ömür: 800 ÷ 2 = 400 g. 2. yarı ömür: 400 ÷ 2 = 200 g. 3. yarı ömür: 200 ÷ 2 = 100 g.",
            "Kısa yol: 800 × (1/2)³ = 800 ÷ 8 = 100 g."
          ], sonuc: "100 g kalır. İki yarı ömür sonra madde tamamen bozunmaz, %25'i kalır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Radioactive waste remains dangerous for a long time and must be stored safely, for example in deep geological repositories.*", metin: "Atık yönetimi." },
            { ikon: "✍️", baslik: "*After one half-life, half of the radioactive nuclei have decayed.*", metin: "Yarı ömür." }
          ] }
      ]
    },
    {
      baslik: "Gürültü kirliliği (ek bilgi)",
      kisa: "Gürültü, sağlığı bozan istenmeyen sestir; desibel ölçeği logaritmiktir.",
      bloklar: [
        { tip: "sekil", baslik: "Günlük seslerin şiddeti (yaklaşık dB)", fig: { type: "bar", cats: ["Fısıltı", "Normal konuşma", "Yoğun trafik", "Rock konseri", "Jet kalkışı (yakın)"], series: [{ name: "dB", values: [30, 60, 80, 110, 130] }], ylabel: "Ses düzeyi (dB)", caption: "85 dB üzerinde uzun süre kalmak işitmeye zarar verebilir" } },
        { tip: "ornek", baslik: "20 dB fark kaç kat şiddet demek?", durum: "Normal konuşma 60 dB, yoğun trafik 80 dB'dir. Trafiğin ses şiddeti konuşmanınkinden kaç kat fazladır?",
          adimlar: [
            "Fark = 80 − 60 = 20 dB.",
            "Her 10 dB, şiddetin 10 katı demektir (desibel ölçeği logaritmiktir).",
            "20 dB = iki kez 10 dB → 10 × 10 = 100 kat."
          ], sonuc: "Trafik 100 kat daha şiddetlidir; ama 20 dB 'yirmi kat' değil." },
        { tip: "tablo", baslik: "Etkiler ve önlemler", head: ["Etki", "Önlem"],
          rows: [
            ["İşitme kaybı (uzun süre 85 dB üzeri)", "Kulaklık sesini kısmak, gürültülü işyerinde kulak koruyucu"],
            ["Stres, uyku bozukluğu, dikkat dağınıklığı", "Konutlarda ses yalıtımı, gece gürültü sınırı"],
            ["Hayvanlarda iletişim ve yön bulma bozulur (kuşlar, balina, yunus)", "Gemi ve sonar gürültüsünü sınırlama"],
            ["Kent gürültüsü", "Ağaç ve duvar bariyerleri, sessiz asfalt, imar planı (havalimanı ile konut arasında mesafe)"]
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Noise pollution is measured in decibels, and long exposure above 85 dB can damage hearing.*", metin: "Tanım ve eşik." },
            { ikon: "✍️", baslik: "*A 20 dB increase means the sound intensity is 100 times greater.*", metin: "dB hesabı." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Su kirliliği: evsel, tarımsal, endüstriyel, petrol, ısıl, plastik. Nokta kaynak tek boru, yaygın kaynak geniş alandır.",
            "Ötrofikasyon: fazla N ve P → alg patlaması → algler ölür → ayrıştırıcılar O₂'yi tüketir → balık ölümü. BOİ yüksek.",
            "Toprak kirliliği: pestisit, gübre, ağır metal, çöp, radyoaktif atık, tuzlanma, asit yağmuru; biyolojik arıtma zararlı maddeleri canlılarla giderir.",
            "Erozyon (su, rüzgâr): bitki örtüsü azalınca hızlanır; toprak ve ürün kaybı, göç, çölleşme, sel getirir. Teraslama, ağaçlandırma, nöbetleşe ekim önler.",
            "Radyoaktif kirlilik: doğal (kozmik ışın, uranyum) ve yapay (santral, X-ışını) kaynaklar; DNA'ya zarar verir; yarı ömürde madde yarıya iner (2 yarı ömür = %25).",
            "Radyoaktif atık: izole ve güvenli depolanır (derin jeolojik depo).",
            "Gürültü: dB logaritmiktir, +10 dB = 10 kat şiddet; 85 dB üzeri uzun süre işitmeyi bozar.",
            "Kirleticilerin çoğu biyobirikim ve biyolojik büyütmeyle besin zincirinde yükselir."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Algae density and dissolved oxygen in a lake over 8 weeks are given in the table. What is the most likely reason for the fall in oxygen between weeks 6 and 8?",
      fig: { type: "table", head: ["Week", "0", "2", "4", "6", "8"], rows: [["Algae (units)", 1, 6, 9, 3, 1], ["Dissolved O₂ (mg/L)", 8, 9, 7, 3, 1]], caption: "Algae and dissolved oxygen" },
      opts: ["Algae consumed the oxygen by photosynthesis.", "The temperature fell, so the solubility of O₂ decreased.", "Decomposers breaking down the dead algae used up large amounts of O₂ in respiration.", "The water dissolved more O₂ because the algae multiplied."],
      a: 2,
      why: "4. haftada alg zirve yapıp sonra ölüyor; ölü algları bakteriler parçalarken O₂'yi tüketiyor, oksijen düşüyor. Fotosentez O₂ üretir, tüketmez; bu yüzden ilk şık çekici ama yanlış. Sıcaklık düşse O₂ çözünürlüğü artardı."
    },
    {
      q: "Which of the following pollution sources is a nonpoint source?",
      opts: ["Fertilizer and pesticide washed from fields into a river by rain", "A factory waste-water pipe opening into a river", "Oil spilled in a tanker accident", "A sewage outlet discharged untreated into the sea"],
      a: 0,
      why: "Tarladan gelen kirlilik geniş bir alandan yayılır ve tek bir noktadan kaynaklanmaz. Diğer üç seçenek belirli bir nokta ya da boru olduğundan nokta kaynaklıdır."
    },
    {
      q: "A waste sample contains 400 g of caesium-137 (half-life 30 years). About how many grams remain after 120 years?",
      opts: ["0 g", "25 g", "50 g", "100 g"],
      a: 1,
      why: "120 ÷ 30 = 4 yarı ömür: 400 → 200 → 100 → 50 → 25 g. Madde asla tam sıfıra inmez (0 g şıkkı yanlış); 100 g ise yalnızca iki yarı ömürde kalan miktardır."
    },
    {
      q: "Fertile topsoil is being washed away from a sloping hillside after rain. Which of the following reduces erosion most effectively?",
      opts: ["Ploughing straight down the slope", "Overgrazing", "Terracing and afforestation", "Using more chemical fertilizer"],
      a: 2,
      why: "Teraslar suyun akışını yavaşlatır, ağaç kökleri toprağı tutar. Yamaç aşağı sürüm ve aşırı otlatma toprağı çıplak bırakır ve erozyonu artırır. Gübre erozyonu azaltmaz."
    },
    {
      q: "The sound level near a factory rises from 40 dB to 60 dB. By what factor has the sound intensity increased?",
      opts: ["2 times", "20 times", "10 times", "100 times"],
      a: 3,
      why: "Desibel logaritmiktir: her 10 dB, şiddetin 10 katı demektir. 20 dB'lik artış 10 × 10 = 100 kat eder. 20 kat cevabı, dB farkını doğrudan şiddet oranı sanan hatadır."
    }
  ]
};
