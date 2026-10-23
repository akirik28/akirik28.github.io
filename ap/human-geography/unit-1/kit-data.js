/* ==========================================================================
   Human Geography Çalışma Kitim · içerik
   AP Human Geography · Unit 1 — Thinking Geographically

   episodes[] : bölümler (sayfa bölüm sayısını buradan okur). Her bölümde video
                (video/epNN.mp4 + video/epNN.jpg), anahtar terimler ve videodan
                hemen sonra çözülen 4 Türkçe soru. bonus: true → "Bonus bölüm".
   final[]    : 30 soruluk İngilizce deneme sınavı (topic = bölüm numarası).
   Geçmiş quiz sorularından oluşan ödev ayrı dosyadadır: odev-data.js (window.ODEV).

   Soru biçimi: { q, opts: [4 şık], a: doğru şıkkın sırası (0 = A … 3 = D), why }
   Bölüm sorularında *yıldız* arasındaki sözcükler İngilizce terimdir
   (sayfada vurgulu ve lang="en" olarak basılır). seconds = videonun yaklaşık süresi.
   ========================================================================== */
window.KIT = {
  store: "hg-kit:v2:",
  deneme2: "deneme-2/",
  episodes: [
    /* ------------------------------------------------------------ 01 */
    {
      no: 1,
      slug: "ep01",
      title: "Coğrafya Nedir?",
      en: "Thinking Like a Geographer",
      accent: "#F6B94A",
      seconds: 159,
      terms: ["Physical geography", "Human geography", "Environmental geography", "Cultural ecology", "Spatial perspective", "Pattison · four traditions", "Cultural landscape", "Quantitative data", "Qualitative data"],
      questions: [
        {
          q: "Bir coğrafyacı, kahve zincirlerinin şubelerinin nerede açıldığını, neden o caddelerde toplandığını ve çevredeki yerlerle nasıl ilişkili olduğunu soruyor. Coğrafyaya özgü bu bakış açısının adı nedir?",
          opts: ["*Cultural ecology*", "*Earth-science tradition*", "*Spatial perspective*", "*Qualitative data*"],
          a: 2,
          why: "*Spatial perspective* her konuda üç şey sorar: nerede, neden orada ve başka yerlerle nasıl ilişkili."
        },
        {
          q: "Aşağıdakilerden hangisi William Pattison'un dört geleneğinden (*four traditions*) biri değildir?",
          opts: ["*Earth-science tradition*", "*Locational tradition*", "*Area-analysis tradition*", "*Political tradition*"],
          a: 3,
          why: "Dört gelenek *earth-science*, *culture-environment*, *locational* ve *area-analysis*'tir; *political tradition* diye bir gelenek yoktur."
        },
        {
          q: "Bir vadinin eski fotoğrafında yalnızca orman ve nehir var; bugünkü fotoğrafında teraslı tarlalar, yollar, evler ve bir cami görülüyor. Carl Sauer bugünkü görüntüye ne ad verir?",
          opts: ["*Cultural landscape*", "*Natural landscape*", "*Physical geography*", "*Spatial perspective*"],
          a: 0,
          why: "Sauer'e göre kültür etken, doğa ortam, *cultural landscape* ise sonuçtur: insanın doğaya bıraktığı imza."
        },
        {
          q: "Aşağıdakilerden hangisi *quantitative data* örneğidir?",
          opts: ["Köyün yaşlılarıyla yapılan röportajların notları", "Bir gezginin pazar yeri hakkındaki izlenimleri", "Bir ilçede kilometrekareye düşen kişi sayısı", "Mahalle sakinlerinin “burası güvenli hissettiriyor” demesi"],
          a: 2,
          why: "*Quantitative data* sayıdır ve ölçülür; röportajlar, izlenimler ve duygular ise *qualitative data*'dır."
        }
      ]
    },

    /* ------------------------------------------------------------ 02 */
    {
      no: 2,
      slug: "ep02",
      title: "Konum",
      en: "Location",
      accent: "#58C9FF",
      seconds: 176,
      terms: ["Absolute location", "Relative location", "Latitude · parallels", "Longitude · meridians", "Prime meridian", "GMT", "International Date Line", "Site", "Situation", "Toponym"],
      questions: [
        {
          q: "Bir şehrin neden orada kurulduğu anlatılırken şunlar sayılıyor: korunaklı doğal liman, tatlı su kaynakları ve verimli toprak. Bunlar şehrin hangi özelliğidir?",
          opts: ["*Situation*", "*Site*", "*Toponym*", "*Relative location*"],
          a: 1,
          why: "*Site* yerin kendi fiziksel özellikleridir (iklim, su, topoğrafya, toprak); başka yerlere göre konumu ise *situation* olurdu."
        },
        {
          q: "Tokyo'dan Los Angeles'a uçan bir yolcu, *International Date Line*'ı doğuya (Amerika'ya) doğru geçiyor. Takvimini nasıl ayarlamalı?",
          opts: ["Bir gün geri almalı", "Bir gün ileri almalı", "Takvim aynı kalır; yalnızca saat 1 saat ileri alınır", "Takvim aynı kalır; gün yalnızca Greenwich'te değişir"],
          a: 0,
          why: "Doğuya, yani Amerika'ya doğru geçince takvim bir gün geri gider; batıya, Asya'ya doğru geçince bir gün ileri."
        },
        {
          q: "İki şehir arasında 45° boylam farkı var. Doğudaki şehirde saat 15.00 iken batıdaki şehirde saat kaçtır? (Her 15° boylam = 1 saat)",
          opts: ["18.00", "14.15", "10.30", "12.00"],
          a: 3,
          why: "45 ÷ 15 = 3 saat fark eder; batıya gittikçe saat geri gittiği için 15.00 − 3 = 12.00."
        },
        {
          q: "“Ankara, İstanbul'un güneydoğusunda, Anadolu'nun ortasındadır.” Bu cümle Ankara'nın hangi konumunu verir?",
          opts: ["*Absolute location*", "*Toponym*", "*Relative location*", "*Site*"],
          a: 2,
          why: "Bir yeri başka yerlere göre tarif etmek *relative location*'dır; *absolute location* enlem ve boylamla verilir."
        }
      ]
    },

    /* ------------------------------------------------------------ 03 */
    {
      no: 3,
      slug: "ep03",
      title: "Mesafe ve Etkileşim",
      en: "Distance & Spatial Interaction",
      accent: "#2FD6B9",
      seconds: 168,
      terms: ["Tobler's First Law", "Absolute distance", "Relative distance", "Friction of distance", "Distance decay", "Time-space convergence", "Accessibility", "Connectivity", "Complementarity", "Transferability", "Intervening opportunity", "Gravity model", "Breaking point"],
      questions: [
        {
          q: "Bir pizzacının kayıtlarına göre siparişlerin çoğu 1 km içinden geliyor; uzaklaştıkça sipariş sayısı hızla düşüyor. Bu desen hangi kavramı gösterir?",
          opts: ["*Time-space convergence*", "*Complementarity*", "*Distance decay*", "*Connectivity*"],
          a: 2,
          why: "*Distance decay*: mesafe arttıkça etkileşim azalır; çünkü mesafeyi aşmak zaman ve para ister (*friction of distance*)."
        },
        {
          q: "Yüksek hızlı tren açılınca iki şehir arasındaki yolculuk 6 saatten 2 saate iniyor. Kilometre değişmedi, ama şehirler sanki birbirine yaklaştı. Bunun adı nedir?",
          opts: ["*Time-space convergence*", "*Distance decay*", "*Intervening opportunity*", "*Breaking point*"],
          a: 0,
          why: "Teknoloji yolculuk süresini kısalttıkça yerlerin birbirine yaklaşmış gibi olmasına *time-space convergence* denir."
        },
        {
          q: "Kum ve çakıl hem ağır hem ucuzdur; uzak bir şehre taşımak ürünün değerinden pahalıya geldiği için oraya satılmaz. İki yer arasında akış olması için gereken koşullardan hangisi sağlanmıyor?",
          opts: ["*Complementarity*", "*Transferability*", "*Intervening opportunity*", "*Connectivity*"],
          a: 1,
          why: "*Transferability*: ürün taşımaya değmelidir; taşıma maliyeti ürünün değerini geçerse akış olmaz."
        },
        {
          q: "A şehrinin nüfusu 2 milyon, B kasabasının nüfusu 40 bin. *Law of retail gravitation*'a göre ikisi arasındaki *breaking point* nerede olur?",
          opts: ["İki yerleşimin tam ortasında", "A şehrine daha yakın", "A şehrinin merkezinde", "B kasabasına daha yakın"],
          a: 3,
          why: "Büyük şehir müşteriyi daha uzaktan çeker; bu yüzden *breaking point* her zaman küçük yerleşime daha yakındır."
        }
      ]
    },

    /* ------------------------------------------------------------ 04 */
    {
      no: 4,
      slug: "ep04",
      title: "Bölgeler",
      en: "Regions",
      accent: "#A98BFF",
      seconds: 143,
      terms: ["Region", "Formal region = Uniform", "Functional region = Nodal", "Perceptual region = Vernacular", "Sense of place", "Cognitive map", "Preference map"],
      questions: [
        {
          q: "Bir seçim haritasında bir eyalet, seçmenlerin %55'i aynı partiye oy verdiği için baştan sona tek renge boyanmış. Harita bu eyaleti ne tür bir bölge olarak gösteriyor?",
          opts: ["*Functional (nodal) region*", "*Formal (uniform) region*", "*Perceptual (vernacular) region*", "*Cognitive map*"],
          a: 1,
          why: "*Formal region* ortak bir özelliği paylaşır ve sınırı bellidir; özelliğin herkeste olması gerekmez, baskın olması yeter."
        },
        {
          q: "Aşağıdakilerden hangisi *functional (nodal) region* örneğidir?",
          opts: ["Akdeniz ikliminin görüldüğü alan", "İnsanların “Orta Doğu” dediği alan", "Bir televizyon kanalının yayın alanı", "Fransa Cumhuriyeti'nin toprakları"],
          a: 2,
          why: "*Functional region* bir merkezin (*node*) etrafında örgütlenir; etki merkezde güçlüdür, dışa doğru zayıflar."
        },
        {
          q: "Bir ankette insanlardan haritada “Doğu” dedikleri yerin sınırını çizmeleri isteniyor ve herkes farklı bir sınır çiziyor. “Doğu” ne tür bir bölgedir?",
          opts: ["*Formal region*", "*Nodal region*", "*Uniform region*", "*Vernacular region*"],
          a: 3,
          why: "*Perceptual region*, diğer adıyla *vernacular region*, haritada değil insanların zihninde vardır; sınırı kişiden kişiye değişir."
        },
        {
          q: "Bir öğrenci, evden okula giden yolu ezberden çiziyor: iyi bildiği sokaklar ayrıntılı, hiç gitmediği yerler boş. Bu çizim neyi yansıtır?",
          opts: ["*Preference map*", "*Cognitive map*", "*Sense of place*", "*Reference map*"],
          a: 1,
          why: "*Cognitive map* kafandaki haritadır: bildiğin yerler detaylı, bilmediklerin boştur."
        }
      ]
    },

    /* ------------------------------------------------------------ 05 */
    {
      no: 5,
      slug: "ep05",
      title: "Dağılım",
      en: "Distribution: Density, Concentration, Pattern",
      accent: "#B9E552",
      seconds: 125,
      terms: ["Distribution", "Density", "Concentration", "Clustered", "Dispersed", "Pattern", "Linear", "Grid", "Township and range", "Aggregation"],
      questions: [
        {
          q: "Amerikan beyzbol liginde 1952'de 16 takım vardı ve neredeyse hepsi ülkenin kuzeydoğusunda toplanmıştı. Bugün 30 takım var ve ülkenin her yanına yayılmış durumda. Bu değişimi hangisi doğru anlatır?",
          opts: [
            "*Density* azaldı; *concentration* *dispersed* yapıdan *clustered* yapıya döndü",
            "*Density* aynı kaldı; yalnızca *pattern* değişti",
            "*Density* arttı; takımlar daha *clustered* hale geldi",
            "*Density* arttı; *concentration* *clustered* yapıdan *dispersed* yapıya döndü"
          ],
          a: 3,
          why: "Takım sayısı 16'dan 30'a çıktığı için *density* arttı; takımlar ülkeye yayıldığı için *concentration* *clustered* yapıdan *dispersed* yapıya geçti."
        },
        {
          q: "A mahallesi 2 km² ve içinde 400 ev var. B mahallesi 4 km² ve içinde yine 400 ev var. Hangisi doğrudur?",
          opts: [
            "İkisinin *density* değeri eşittir; çünkü ev sayısı aynıdır",
            "A'nın *density* değeri B'ninkinin iki katıdır",
            "B'nin *density* değeri daha yüksektir; çünkü alanı daha büyüktür",
            "Evlerin nasıl yayıldığı bilinmeden *density* hesaplanamaz"
          ],
          a: 1,
          why: "*Density* = sayı ÷ alan: A'da km² başına 200, B'de 100 ev düşer. Evlerin nasıl yayıldığı *density*'yi değil *concentration*'ı ilgilendirir."
        },
        {
          q: "ABD'de uçaktan bakınca tarlaların satranç tahtası gibi karelere bölündüğü görülür (*township and range*). Bu, *distribution*'ın hangi özelliğine örnektir?",
          opts: ["*Pattern*", "*Density*", "*Concentration*", "*Aggregation*"],
          a: 0,
          why: "*Pattern* nesnelerin geometrik düzenidir: kare kare dizilim *grid*, bir nehir ya da yol boyunca dizilim *linear* olur."
        },
        {
          q: "Aynı işsizlik verisi önce mahalle mahalle, sonra il il haritalanıyor. İl haritasında mahalleler arasındaki farklar kayboluyor ve görülen desen değişiyor. Bu durum hangi kavramla ilgilidir?",
          opts: ["*Concentration*", "*Linear pattern*", "*Aggregation*", "*Density*"],
          a: 2,
          why: "*Aggregation* veriyi hangi büyüklükteki birimlerde topladığındır; birim büyüdükçe detay kaybolur, desen bile değişebilir."
        }
      ]
    },

    /* ------------------------------------------------------------ 06 */
    {
      no: 6,
      slug: "ep06",
      title: "Yayılma",
      en: "Diffusion",
      accent: "#FF7DB8",
      seconds: 132,
      terms: ["Diffusion", "Hearth", "Relocation diffusion", "Expansion diffusion", "Hierarchical diffusion", "Contagious diffusion", "Stimulus diffusion"],
      questions: [
        {
          q: "19. yüzyılda ABD'ye göç eden İtalyanlar pizzayı da yanlarında götürdü; bugün New York pizzasıyla ünlü. Pizza Amerika'ya hangi yolla ulaştı?",
          opts: ["*Contagious diffusion*", "*Relocation diffusion*", "*Stimulus diffusion*", "*Hierarchical diffusion*"],
          a: 1,
          why: "İnsanlar göç edip kültürünü yanında taşıyorsa bu *relocation diffusion*'dır."
        },
        {
          q: "Bir köyde çıkan söylenti komşudan komşuya geçerek birkaç günde çevredeki bütün köylere ulaşıyor; büyük-küçük, zengin-fakir ayrımı yok. Bu hangi yayılma türüdür?",
          opts: ["*Contagious diffusion*", "*Hierarchical diffusion*", "*Relocation diffusion*", "*Stimulus diffusion*"],
          a: 0,
          why: "*Contagious diffusion* temasla, en yakındakinden başlayarak dalga dalga herkese yayılır; hiyerarşi yoktur."
        },
        {
          q: "Amerikan tarzı fast-food fikri Japonya'ya ulaşıyor; yerel bir zincir aynı fikri pirinçten yapılmış ekmekli burgerlerle uyguluyor. Bu hangi yayılma türüdür?",
          opts: ["*Relocation diffusion*", "*Contagious diffusion*", "*Hierarchical diffusion*", "*Stimulus diffusion*"],
          a: 3,
          why: "*Stimulus diffusion*'da ürünün kendisi değil arkasındaki fikir yayılır ve yeni yerde şekil değiştirir."
        },
        {
          q: "Bir hükümdar yeni bir dini kabul ediyor; önce saray çevresi ve soylular, sonra şehirliler, en son köylüler bu dine geçiyor. Bu hangi yayılma türüdür?",
          opts: ["*Hierarchical diffusion*", "*Stimulus diffusion*", "*Relocation diffusion*", "*Contagious diffusion*"],
          a: 0,
          why: "*Hierarchical diffusion* yukarıdan aşağıya işler: fikir önce güç ve nüfuz sahiplerine ulaşır, sonra basamak basamak iner."
        }
      ]
    },

    /* ------------------------------------------------------------ 07 */
    {
      no: 7,
      slug: "ep07",
      title: "Ölçek",
      en: "Scale & Scale of Analysis",
      accent: "#FF6F61",
      seconds: 134,
      terms: ["Map scale", "Ratio · Written · Graphic", "Large scale", "Small scale", "Scale of analysis", "Global · National · Regional · Local", "Resolution"],
      questions: [
        {
          q: "Bir itfaiye ekibinin tek tek sokakları ve binaları görmesi gerekiyor. Hangi harita işlerini görür?",
          opts: [
            "*Small scale* bir harita; örneğin 1:5,000,000",
            "*Large scale* bir harita; örneğin 1:5,000,000",
            "*Large scale* bir harita; örneğin 1:5,000",
            "*Small scale* bir harita; örneğin 1:5,000"
          ],
          a: 2,
          why: "*Large scale* harita küçük bir alanı çok detaylı gösterir; 1/5,000 kesri 1/5,000,000'dan büyük olduğu için ölçeği de büyüktür."
        },
        {
          q: "Bir dünya haritasında her ülke, ortalama yaşam süresine göre farklı bir tona boyanmış. Bu haritanın *scale of analysis*'i nedir?",
          opts: ["*Global*", "*National*", "*Regional*", "*Local*"],
          a: 1,
          why: "Harita bütün dünyayı gösterse de veriyi ülke sınırları böldüğü için *scale of analysis* *national* olur."
        },
        {
          q: "Bir haritanın köşesinde “1 inch = 1 mile” yazıyor. Bu, *map scale*'in hangi yazım biçimidir?",
          opts: ["*Written scale*", "*Ratio*", "*Graphic scale*", "*Scale of analysis*"],
          a: 0,
          why: "Ölçek sözle yazılmışsa *written scale*, 1:24,000 gibi bir oransa *ratio*, üzerinde mesafe yazan bir çubuksa *graphic scale*'dir."
        },
        {
          q: "İki uydu görüntüsünden birinde tek tek binalar seçiliyor; diğerinde aynı şehir iri karelere dönüşmüş. İki görüntüyü ayıran özellik nedir?",
          opts: ["*Projection*", "*Scale of analysis*", "*Aggregation*", "*Resolution*"],
          a: 3,
          why: "*Resolution* bir görüntüde ayırt edilebilen en küçük ayrıntıdır: yüksekse binaları seçersin, düşükse her şey iri karelere dönüşür."
        }
      ]
    },

    /* ------------------------------------------------------------ 08 */
    {
      no: 8,
      slug: "ep08",
      title: "Harita Türleri",
      en: "Types of Maps",
      accent: "#5C8DFF",
      seconds: 150,
      terms: ["Reference map", "Thematic map", "Choropleth", "Dot density", "Proportional (graduated) symbol", "Isoline", "Topographic map", "Flow map", "Cartogram", "Location chart"],
      questions: [
        {
          q: "İllere göre işsizlik oranını (%) göstermek istiyorsun. En uygun *thematic map* hangisidir?",
          opts: ["*Dot density map*", "*Flow map*", "*Isoline map*", "*Choropleth map*"],
          a: 3,
          why: "Oranlar ve yüzdeler için *choropleth* idealdir: bölgeler renk tonlarıyla boyanır, koyu renk yüksek değeri gösterir."
        },
        {
          q: "Bir dünya haritasında Hindistan ve Çin devasa, Kanada ve Rusya ise ufacık çizilmiş. Bu harita büyük olasılıkla nedir?",
          opts: [
            "*Mercator* projeksiyonlu bir *reference map*",
            "Nüfusa göre çizilmiş bir *cartogram*",
            "Nüfus yoğunluğunu gösteren bir *choropleth map*",
            "Şehir nüfuslarını gösteren bir *proportional symbol map*"
          ],
          a: 1,
          why: "*Cartogram*'da ülkelerin büyüklüğü yüzölçümüne göre değil seçilen veriye göre değişir; nüfusa göre çizilince Hindistan ve Çin devleşir."
        },
        {
          q: "Bir *topographic map*'te *contour* çizgileri bir yamaçta birbirine çok yakın. Bu ne anlama gelir?",
          opts: ["Yamaç diktir; yükseklik kısa mesafede hızla değişir", "Arazi neredeyse düzdür", "O yamaçta nüfus yoğundur", "Orası deniz seviyesinin altındadır"],
          a: 0,
          why: "*Isoline* haritalarında çizgiler sıklaşıyorsa değişim hızlıdır; *contour* çizgileri sıksa yamaç diktir."
        },
        {
          q: "Bir haritada her şehrin üstünde, o şehrin toplam nüfusuyla orantılı büyüklükte bir daire var. Bu hangi harita türüdür?",
          opts: ["*Dot density map*", "*Choropleth map*", "*Proportional (graduated) symbol map*", "*Location chart*"],
          a: 2,
          why: "*Proportional symbol map*'te sembolün boyutu değerle birlikte büyür; toplam miktarları karşılaştırmak için kullanılır."
        }
      ]
    },

    /* ------------------------------------------------------------ 09 */
    {
      no: 9,
      slug: "ep09",
      title: "Projeksiyonlar",
      en: "Map Projections",
      accent: "#F6B94A",
      seconds: 160,
      terms: ["Projection", "Shape · Area · Distance · Direction", "Cylindrical", "Conic", "Planar (azimuthal)", "Mercator", "Gall-Peters · equal-area", "Robinson", "Winkel Tripel", "Azimuthal equidistant", "Fuller (Dymaxion)"],
      questions: [
        {
          q: "Bir öğretmen kıtaların gerçek büyüklüklerini karşılaştırmak için sınıfa *Gall-Peters* haritası asıyor. Bu seçimin kazancı ve bedeli nedir?",
          opts: [
            "Şekiller ve yönler doğru; alanlar kutuplara doğru şişer",
            "Hiçbir özellik tam doğru değil; hepsi yalnızca biraz bozuk",
            "Merkezden her noktaya mesafe doğru; kenarlara doğru şekiller bozulur",
            "Alanlar doğru; şekiller bozulur, kıtalar uzamış görünür"
          ],
          a: 3,
          why: "*Gall-Peters* bir *equal-area* projeksiyondur: alanları doğru gösterir ama şekilleri bozar."
        },
        {
          q: "Projeksiyonlarla ilgili aşağıdaki ifadelerden hangisi doğrudur?",
          opts: [
            "Her projeksiyon *shape*, *area*, *distance* ve *direction* özelliklerinden en az birini bozar",
            "*Robinson* dört özelliğin hepsini eksiksiz korur",
            "*Mercator* alanları doğru gösterdiği için *equal-area* sayılır",
            "*Gall-Peters* hem şekilleri hem alanları korur"
          ],
          a: 0,
          why: "Küreyi düzleme kusursuz aktarmak imkânsızdır; her harita bir özelliği seçer, diğerlerinden vazgeçer."
        },
        {
          q: "Bir havayolu, Kuzey Kutbu üzerinden geçen uçuş rotalarını göstermek istiyor. Hangi projeksiyon en uygunudur?",
          opts: ["*Mercator*", "*Gall-Peters*", "*Robinson*", "*Azimuthal equidistant*"],
          a: 3,
          why: "Kutup merkezli *azimuthal equidistant* haritada merkezden her noktaya mesafe ve yön doğrudur; BM bayrağındaki harita da budur."
        },
        {
          q: "*Cylindrical* bir projeksiyonda (küre bir silindire sarılır) bozulma nerede en azdır?",
          opts: ["Kutuplarda", "Ekvator çevresinde", "Orta enlemlerde", "Her yerde eşittir"],
          a: 1,
          why: "Silindir küreye ekvatorda değer: ekvator çevresi doğrudur, kutuplara gittikçe bozulma artar."
        }
      ]
    },

    /* ------------------------------------------------------------ 10 */
    {
      no: 10,
      slug: "ep10",
      title: "Coğrafi Araçlar",
      en: "Geospatial Tools: GIS, GPS, Remote Sensing",
      accent: "#2FD6B9",
      seconds: 133,
      terms: ["Cartography", "Eratosthenes", "Ptolemy", "GIS", "Mashup", "GPS", "Remote sensing", "Pixel", "Visualization"],
      questions: [
        {
          q: "Bilim insanları Amazon'daki orman kaybını, 2000 ve 2025 yıllarına ait uydu görüntülerini karşılaştırarak izliyor. Bu görüntüleri sağlayan teknoloji hangisidir?",
          opts: ["*GPS*", "*GIS*", "*Remote sensing*", "*Mashup*"],
          a: 2,
          why: "*Remote sensing*: uydular ya da uçaklar yeryüzünü dokunmadan tarar; orman kaybı, şehirlerin büyümesi ve buzulların erimesi böyle izlenir."
        },
        {
          q: "Bir dağcının telefonu en az dört uydudan sinyal alıp bulunduğu noktanın enlem ve boylamını hesaplıyor. Kullanılan sistem ve bulduğu konum türü hangisidir?",
          opts: ["*GPS* — *absolute location*", "*GIS* — *absolute location*", "*GPS* — *relative location*", "*Remote sensing* — *relative location*"],
          a: 0,
          why: "*GPS* uydular, yer istasyonları ve alıcıdan oluşur; en az 4 uyduyla kesin koordinatı, yani *absolute location*'ı bulur."
        },
        {
          q: "Coğrafya (*geography*) kelimesini ilk kullanan ve gölge açısıyla iki şehir arasındaki mesafeyi kullanarak Dünya'nın çevresini hesaplayan kişi kimdir?",
          opts: ["Ptolemy (Batlamyus)", "Carl Sauer", "William Pattison", "Eratosthenes"],
          a: 3,
          why: "Eratosthenes yaklaşık 2200 yıl önce Dünya'nın çevresini hesapladı; Ptolemy ise enlem ve boylam kullanan haritalar çizdi."
        },
        {
          q: "Bir harita uygulaması, temel haritanın üstünde restoran puanlarını ve canlı trafik yoğunluğunu birlikte gösteriyor. Farklı kaynaklardan gelen verilerin tek haritada birleştirilmesine ne denir?",
          opts: ["*Cartogram*", "*Mashup*", "*Projection*", "*Resolution*"],
          a: 1,
          why: "Farklı kaynaklardan gelen verileri tek bir haritada birleştirmeye *mashup* denir."
        }
      ]
    },

    /* ------------------------------------------------------------ 11 */
    {
      no: 11,
      slug: "ep11",
      title: "Küreselleşme ve Sürdürülebilirlik",
      en: "Globalization & Sustainability",
      accent: "#4ADE80",
      seconds: 153,
      terms: ["Globalization", "Transnational corporation (TNC)", "McCulture", "Core", "Periphery", "Uneven development", "Sustainability", "Environment · Economy · Society", "Abiotic · Biotic", "Atmosphere · Hydrosphere · Lithosphere · Biosphere", "Polder"],
      questions: [
        {
          q: "Aşağıdakilerden hangisi *sustainability*'nin üç ayağından biri değildir?",
          opts: ["*Environment*", "*Technology*", "*Economy*", "*Society*"],
          a: 1,
          why: "Üç ayak *environment*, *economy* ve *society*'dir; üçü de dengede olmalı, biri kırılırsa tabure devrilir."
        },
        {
          q: "Dünya'yı oluşturan dört sistemden hangisi *biotic*'tir, yani canlıdır?",
          opts: ["*Atmosphere*", "*Hydrosphere*", "*Lithosphere*", "*Biosphere*"],
          a: 3,
          why: "*Atmosphere* (hava), *hydrosphere* (su) ve *lithosphere* (yer kabuğu) *abiotic*'tir; bütün canlıları kapsayan *biosphere* ise *biotic*'tir."
        },
        {
          q: "*Core–periphery* ayrımında *periphery* bölgelerinin dünya ekonomisindeki tipik rolü nedir?",
          opts: [
            "Ham madde ve ucuz iş gücü sağlamak",
            "İleri teknolojiyi ve finans kararlarını üretmek",
            "Büyük şirketlerin genel merkezlerine ev sahipliği yapmak",
            "Dünya ticaretinin tamamen dışında kalmak"
          ],
          a: 0,
          why: "Zenginlik, teknoloji ve karar gücü *core*'da toplanır; *periphery* ham madde ve ucuz iş gücü sağlar. Aradaki farkın açılmasına *uneven development* denir."
        },
        {
          q: "Hollanda'daki *polder*'lar ile Florida'da Everglades'in kurutulması karşılaştırıldığında hangisi doğrudur?",
          opts: [
            "İkisi de sürdürülemez örnektir; çünkü ikisinde de doğa değiştirilmiştir",
            "Everglades sürdürülebilir, *polder*'lar sürdürülemez örnektir",
            "*Polder*'lar sürdürülebilir, Everglades sürdürülemez örnektir",
            "İkisi de sürdürülebilir örnektir; çünkü ikisi de yeni arazi kazandırmıştır"
          ],
          a: 2,
          why: "Hollanda doğayla planlı ve dikkatli bir ilişki kurdu; Everglades'te ise bataklıkların kurutulması suyu kirletti ve ekosistemi bozdu."
        }
      ]
    },

    /* ------------------------------------------------------------ 12 · bonus */
    {
      no: 12,
      slug: "ep12",
      bonus: true,
      title: "Sınavda Çıkanlar",
      en: "Determinism vs Possibilism & Missing Terms",
      accent: "#FF7DB8",
      seconds: 146,
      terms: ["Environmental determinism", "Possibilism", "Place", "Space", "Spatial association", "Arithmetic density", "Time-space compression", "Census tract", "Goode homolosine · interrupted"],
      questions: [
        {
          q: "“Sıcak iklimlerde yaşayan toplumlar iklim yüzünden geri kalmaya mahkûmdur; ılıman iklimler ise kendiliğinden gelişmiş toplumlar üretir.” Bugün kabul edilmeyen bu iddia hangi görüşü yansıtır?",
          opts: ["*Possibilism*", "*Environmental determinism*", "*Cultural ecology*", "*Spatial association*"],
          a: 1,
          why: "*Environmental determinism*'e göre fiziki çevre insanın kültürünü ve kaderini belirler; fazla basit bulunduğu ve sömürgeciliği haklı göstermek için kullanıldığı için bugün reddedilir."
        },
        {
          q: "Bir gezi yazarı Mardin'i anlatırken taş evlerini, dar sokaklarını, konuşulan dilleri ve ovaya bakan yamacını sayıyor. Bir konumu benzersiz yapan fiziksel ve beşerî özelliklerin toplamına ne denir?",
          opts: ["*Space*", "*Census tract*", "*Arithmetic density*", "*Place*"],
          a: 3,
          why: "*Place* bir konumu benzersiz yapan fiziksel ve beşerî özelliklerin toplamıdır; *space* ise nesneler arasındaki fiziksel boşluktur."
        },
        {
          q: "İki haritayı üst üste koyuyorsun: fabrikaların yoğun olduğu ilçelerle astım vakalarının yüksek olduğu ilçeler büyük ölçüde örtüşüyor. İki dağılım arasındaki bu benzerliğe ne denir?",
          opts: ["*Spatial association*", "*Time-space compression*", "*Possibilism*", "*Distance decay*"],
          a: 0,
          why: "İki şeyin dağılımı haritada birbirine benziyorsa buna *spatial association* denir; aralarında bir ilişki olabileceğini gösterir."
        },
        {
          q: "Bir araştırmacı aynı şehrin mahallelerini gelir düzeyine göre karşılaştırmak istiyor. Nüfus sayımı verisine hangi düzeyde bakmalı?",
          opts: ["Ülke (*national*) düzeyinde", "Eyalet (*state*) düzeyinde", "*Census tract* düzeyinde", "*Global* düzeyde"],
          a: 2,
          why: "*Census tract* nüfus sayımındaki en küçük veri birimlerinden biridir; mahalleleri birbiriyle karşılaştırmak için bu ölçeğe bakılır."
        }
      ]
    }
  ],

  /* ========================================================================
     DENEME SINAVI · 30 soru · İngilizce, AP tarzı
     Dağılım: 12 bölümün her birinden 2–3 soru; doğru şıklar A–D arasında dengeli.
     ======================================================================== */
  final: [
    {
      topic: 2,
      q: "During the nineteenth century, Boston filled in surrounding tidal marshes and bays, greatly enlarging the land on which the city could be built. This is an example of humans modifying a city's",
      opts: ["situation", "site", "toponym", "absolute location"],
      a: 1,
      why: "Site refers to a place's own physical characteristics, such as landforms, water, and soil. Landfill changed Boston's physical setting, not its position relative to other places."
    },
    {
      topic: 7,
      q: "Compared with a 1:1,000,000 map, a 1:24,000 map printed on the same size sheet of paper is a",
      opts: [
        "larger-scale map that shows a larger area in less detail",
        "smaller-scale map that shows a smaller area in more detail",
        "smaller-scale map that shows a larger area in less detail",
        "larger-scale map that shows a smaller area in more detail"
      ],
      a: 3,
      why: "The fraction 1/24,000 is larger than 1/1,000,000, so the map is larger in scale; large-scale maps show small areas in great detail."
    },
    {
      topic: 6,
      q: "A mobile payment app is adopted first in a country's largest metropolitan areas, then in medium-sized cities, and only later in rural villages, including villages located close to the first metropolitan areas. This pattern is best explained by",
      opts: ["hierarchical diffusion", "contagious diffusion", "relocation diffusion", "stimulus diffusion"],
      a: 0,
      why: "Hierarchical diffusion moves down a ranking of places, from the largest or most influential to smaller ones, and can leap over nearby places in between."
    },
    {
      topic: 1,
      q: "A geographer studying a rapidly growing suburb wants to collect qualitative data. Which of the following sources would be most appropriate?",
      opts: [
        "Census tables showing the suburb's population in each decade",
        "Satellite measurements of the suburb's built-up land area",
        "Open-ended interviews in which residents describe how the area has changed",
        "Median household income figures for each neighborhood"
      ],
      a: 2,
      why: "Qualitative data are descriptive and open to interpretation, such as interviews and observations; the other choices are numerical (quantitative) data."
    },
    {
      topic: 4,
      q: "Which of the following is the best example of a formal (uniform) region?",
      opts: [
        "The circulation area of a daily newspaper",
        "“The South,” as identified by residents of the United States",
        "The commuter zone surrounding a major city",
        "The U.S. state of Colorado"
      ],
      a: 3,
      why: "A formal region is an area whose people share a defining characteristic, such as a common government, and it has clear boundaries. The newspaper and commuter areas are functional regions; “the South” is a perceptual region."
    },
    {
      topic: 8,
      q: "Which of the following sets of data would be most appropriately displayed on a choropleth map?",
      opts: [
        "The percentage of each county's population that is over age 65",
        "The routes and volumes of oil shipments between countries",
        "Elevation above sea level across a mountain range",
        "The precise locations of individual earthquake epicenters"
      ],
      a: 0,
      why: "Choropleth maps shade predefined areas such as counties and work best for rates and percentages. The other data sets suit a flow map, an isoline map, and a dot map."
    },
    {
      topic: 5,
      q: "In 1952, Major League Baseball had 16 teams, nearly all of them in the northeastern quarter of the United States. Today the league has 30 teams spread across North America. Which statement best describes the change in the distribution of teams?",
      opts: [
        "Density decreased, and the teams became more dispersed",
        "Density increased, and the teams became more clustered",
        "Density increased, and the teams became more dispersed",
        "Density stayed the same, and only the pattern changed"
      ],
      a: 2,
      why: "More teams means a higher density, and spreading out from the Northeast means the concentration changed from clustered to dispersed. The two properties vary independently."
    },
    {
      topic: 3,
      q: "Region X grows citrus fruit but has no oil; Region Y produces oil but cannot grow citrus. Trade develops between the two regions. Which condition for spatial interaction does this best illustrate?",
      opts: ["Transferability", "Complementarity", "Intervening opportunity", "Distance decay"],
      a: 1,
      why: "Complementarity exists when one place has a surplus of something that another place lacks and wants."
    },
    {
      topic: 9,
      q: "On a Mercator projection, Greenland appears about as large as Africa, although Africa is actually about fourteen times larger. This occurs because the Mercator projection",
      opts: [
        "preserves area but distorts shape near the equator",
        "is a compromise projection that distorts every property slightly",
        "preserves shape and direction but increasingly exaggerates area toward the poles",
        "is centered on the North Pole, so land near the equator is stretched"
      ],
      a: 2,
      why: "Mercator keeps shapes and compass directions accurate, which made it valuable for navigation, at the cost of greatly enlarging areas at high latitudes."
    },
    {
      topic: 11,
      q: "Which of the following best describes the relationship between the core and the periphery in the global economy?",
      opts: [
        "Wealth, technology, and decision-making power are concentrated in the core, while the periphery supplies raw materials and low-cost labor",
        "The core supplies raw materials and low-cost labor to manufacturers in the periphery",
        "Most transnational corporations have their headquarters in the periphery and their factories in the core",
        "The core and the periphery are equally developed but specialize in different products"
      ],
      a: 0,
      why: "Core regions (North America, Western Europe, Japan) hold most of the wealth and decision-making power; peripheral regions provide raw materials and cheap labor, which produces uneven development."
    },
    {
      topic: 10,
      q: "Which of the following correctly pairs a geospatial technology with its primary function?",
      opts: [
        "GPS: storing and analyzing layers of spatial data",
        "GIS: determining a receiver's precise location from satellite signals",
        "Remote sensing: collecting data about Earth's surface from satellites or aircraft",
        "GPS: capturing images of land cover from orbit"
      ],
      a: 2,
      why: "Remote sensing gathers data from a distance; GPS finds absolute location from satellite signals; GIS stores spatial data in layers and analyzes them."
    },
    {
      topic: 2,
      q: "A traveler flies east from Sydney, Australia, to Honolulu, Hawaii, crossing the International Date Line. To keep the correct date, the traveler should",
      opts: [
        "move the calendar ahead one day",
        "leave the date unchanged and set the clock ahead 12 hours",
        "leave the date unchanged, because the date changes only at the prime meridian",
        "move the calendar back one day"
      ],
      a: 3,
      why: "Crossing the International Date Line heading east, toward the Americas, means moving the calendar back one day; heading west, toward Asia, means moving it ahead one day."
    },
    {
      topic: 6,
      q: "Inspired by the success of American coffeehouse chains, entrepreneurs in another country open tea houses that copy the chains' layout and service style but sell traditional local teas instead of coffee. This is an example of",
      opts: ["relocation diffusion", "stimulus diffusion", "hierarchical diffusion", "contagious diffusion"],
      a: 1,
      why: "In stimulus diffusion the underlying idea spreads, but it is modified to fit the adopting culture instead of being adopted in its original form."
    },
    {
      topic: 12,
      q: "Which of the following statements reflects possibilism rather than environmental determinism?",
      opts: [
        "A hot climate inevitably makes a society less productive",
        "People who live in mountains are naturally isolated and resistant to change",
        "The physical environment sets limits, but people can adapt to it and modify it, for example by irrigating deserts",
        "A region's climate determines the kind of government its people will develop"
      ],
      a: 2,
      why: "Possibilism holds that the environment sets limits but people choose how to respond and can alter their surroundings; the other statements claim that the environment dictates human outcomes, which is environmental determinism."
    },
    {
      topic: 4,
      q: "Students are asked to outline “the Midwest” on a blank map of the United States, and no two students draw the same boundary. The Midwest is best classified as a",
      opts: ["vernacular region", "formal region", "nodal region", "uniform region"],
      a: 0,
      why: "A vernacular (perceptual) region exists in people's minds, so its boundaries vary from person to person. “Nodal” is another name for functional, and “uniform” for formal."
    },
    {
      topic: 8,
      q: "A geographer wants to show where dairy farms are located within a state and where they cluster, using one symbol to represent every 100 farms. Which type of thematic map is most appropriate?",
      opts: ["Dot density map", "Choropleth map", "Isoline map", "Cartogram"],
      a: 0,
      why: "On a dot density map each dot stands for a fixed quantity, so the dots reveal exactly where a phenomenon clusters and where it is sparse."
    },
    {
      topic: 3,
      q: "According to the gravity model, the greatest amount of interaction would be expected between which of the following pairs of places?",
      opts: [
        "Two small towns located close to each other",
        "Two large cities located far from each other",
        "A large city and a small town located far from each other",
        "Two large cities located close to each other"
      ],
      a: 3,
      why: "In the gravity model, interaction increases with the populations of the two places and decreases as the distance between them grows."
    },
    {
      topic: 9,
      q: "A researcher is designing a world map on which the relative sizes of countries must be accurate. Which of the following projections is the best choice?",
      opts: ["Mercator", "Gall-Peters", "Azimuthal equidistant", "Robinson"],
      a: 1,
      why: "Gall-Peters is an equal-area projection: relative sizes are correct, although shapes are distorted. Robinson is a compromise that does not preserve area exactly."
    },
    {
      topic: 1,
      q: "A river valley that was once covered by forest now contains terraced fields, irrigation canals, roads, and a mosque. According to Carl Sauer, the valley's present appearance is best described as",
      opts: [
        "a cultural landscape, the result of a culture group acting on the natural landscape",
        "a natural landscape, because the valley's terrain and climate are unchanged",
        "a perceptual region, because people define its limits differently",
        "a functional region, because it is organized around a central node"
      ],
      a: 0,
      why: "For Sauer, culture is the agent, nature is the medium, and the cultural landscape is the result: the visible imprint people leave on the land."
    },
    {
      topic: 5,
      q: "Two towns each have 6,000 residents and cover 10 square kilometers. In Town A, houses are spread evenly across the town; in Town B, nearly all houses are packed into one corner near the harbor. Compared with Town A, Town B as a whole has",
      opts: [
        "the same density and the same concentration",
        "a higher density and the same concentration",
        "a higher density and a more clustered concentration",
        "the same density and a more clustered concentration"
      ],
      a: 3,
      why: "Density is simply the number of people divided by the area, so it is identical in the two towns; concentration describes how the houses are spread, and Town B's are clustered."
    },
    {
      topic: 11,
      q: "Which of the following is an interaction between a biotic system and an abiotic system?",
      opts: [
        "Rainwater eroding a rock face",
        "A forest absorbing carbon dioxide from the air",
        "Wind generating ocean waves",
        "A volcano releasing gases into the air"
      ],
      a: 1,
      why: "The biosphere (living things) is the only biotic system; the atmosphere, hydrosphere, and lithosphere are abiotic. A forest taking in carbon dioxide links the biosphere with the atmosphere."
    },
    {
      topic: 6,
      q: "Which of the following is the best example of relocation diffusion?",
      opts: [
        "A clothing style is adopted first in global cities and later in small towns",
        "A rumor passes from neighbor to neighbor until an entire town has heard it",
        "Immigrants bring their language and cuisine to the country where they settle",
        "A restaurant chain redesigns its menu to fit the food customs of a new market"
      ],
      a: 2,
      why: "Relocation diffusion occurs when people move and carry a cultural trait with them. The other choices show hierarchical, contagious, and stimulus diffusion, in that order."
    },
    {
      topic: 2,
      q: "Which of the following statements about the geographic grid is accurate?",
      opts: [
        "Longitude is measured east and west of the prime meridian, which passes through Greenwich, England",
        "Meridians run east–west and measure distance north and south of the equator",
        "Latitude ranges from 0° at the poles to 90° at the equator",
        "Parallels converge at the poles and are numbered from 0° to 180°"
      ],
      a: 0,
      why: "Meridians (longitude) run from pole to pole and are numbered 0° to 180° east and west of the prime meridian; parallels (latitude) run parallel to the equator and are numbered 0° to 90°."
    },
    {
      topic: 12,
      q: "The Goode homolosine projection is described as an interrupted projection because it",
      opts: [
        "shows only one hemisphere at a time",
        "is cut apart in the oceans so that the areas and shapes of the continents stay relatively accurate",
        "stretches high latitudes so that compass directions remain constant",
        "is centered on the North Pole, with distances measured outward from that point"
      ],
      a: 1,
      why: "Goode homolosine is an equal-area map split through the oceans: continents keep their true areas with little shape distortion, but the breaks make it unsuitable for measuring direction or distance across oceans."
    },
    {
      topic: 10,
      q: "A retail company combines digital layers showing household income, traffic counts, and competitors' locations in order to choose a site for a new store. Which geospatial technology is the company using?",
      opts: ["A geographic information system (GIS)", "The Global Positioning System (GPS)", "Remote sensing", "A cartogram"],
      a: 0,
      why: "A GIS stores geographic data in layers and analyzes the relationships among them, which is exactly what overlaying income, traffic, and competitor data requires."
    },
    {
      topic: 4,
      q: "Which of the following characteristics best distinguishes a functional (nodal) region from other types of regions?",
      opts: [
        "Its boundaries exist mainly in people's minds and vary from person to person",
        "It is organized around a central node, and its influence weakens with distance from that node",
        "Everyone within it shares the same language or climate",
        "Its boundaries are fixed by law and marked on official maps"
      ],
      a: 1,
      why: "A functional region is tied to a focal point, such as a broadcast tower or an airport, and the connection to that point fades toward the edge of the region."
    },
    {
      topic: 8,
      q: "Which of the following is a reference map rather than a thematic map?",
      opts: [
        "A map shading countries by literacy rate",
        "A road map showing highways, cities, and political boundaries",
        "A map using arrows of different widths to show migration streams",
        "A map on which each country's size is proportional to its population"
      ],
      a: 1,
      why: "Reference maps show where things are: boundaries, roads, place names. Thematic maps show the spatial pattern of one topic; the other choices are a choropleth map, a flow map, and a cartogram."
    },
    {
      topic: 12,
      q: "A country has a population of 50 million and a total land area of 250,000 square kilometers. What is its arithmetic density?",
      opts: [
        "0.005 people per square kilometer",
        "20 people per square kilometer",
        "2,000 people per square kilometer",
        "200 people per square kilometer"
      ],
      a: 3,
      why: "Arithmetic density is total population divided by total land area: 50,000,000 ÷ 250,000 = 200 people per square kilometer."
    },
    {
      topic: 7,
      q: "A map of the United States shades each state according to its median household income. Which of the following correctly identifies the map's scale of analysis?",
      opts: [
        "Global, because the pattern can be compared with other countries",
        "National, because the map shows a single country",
        "Subnational, because the data are aggregated by state",
        "Local, because income is earned by individual households"
      ],
      a: 2,
      why: "Scale of analysis is set by the units into which the data are grouped, not by the area the map covers; here the data are organized by state."
    },
    {
      topic: 11,
      q: "Sustainability is commonly described as resting on three pillars. Which of the following lists all three?",
      opts: [
        "Atmosphere, hydrosphere, and lithosphere",
        "Site, situation, and scale",
        "Core, periphery, and globalization",
        "Environment, economy, and society"
      ],
      a: 3,
      why: "Sustainable use of resources has to balance the environment, the economy, and society. Atmosphere, hydrosphere, and lithosphere are Earth's three abiotic systems."
    }
  ]
};
