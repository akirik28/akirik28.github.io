/* Kitpath not defteri · hg502 · Yerleşme Desenleri ve Arazi Ölçümü (5.2)
   Kaynak: AP HuG CED Topic 5.2 (PSO-5.B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg502",
  amac: "Bu konu kırsalda evlerin ve tarlaların haritada nasıl dizildiğini anlatıyor. Üç yerleşme desenini (*clustered*, *dispersed*, *linear*) ve üç arazi ölçüm yöntemini (*metes and bounds*, *township and range*, *long lot*) tanıyacak, haritadan hangisi olduğunu bulacaksın.",
  bolumler: [
    {
      baslik: "Üç kırsal yerleşme deseni",
      kisa: "Evler ya bir arada, ya birbirinden uzak, ya da bir çizgi boyunca dizilir.",
      bloklar: [
        { tip: "grafik", baslik: "Aynı dokuz ev, üç farklı düzen (şematik harita)", xlabel: "Doğu–batı", ylabel: "Kuzey–güney", xmax: 10, ymax: 10,
          ogeler: [
            { id: "yol", tip: "cizgi", renk: 1, from: [0, 5], to: [10, 5], gizli: true },
            { id: "yy", tip: "yazi", x: 8.4, y: 6.9, metin: "yol ya da nehir", gizli: true },
            { id: "ad", tip: "yazi", x: 5, y: 9.4, metin: "KÜMELENMİŞ (clustered)" },
            { id: "h1", tip: "nokta", x: 4.3, y: 4.5 }, { id: "h2", tip: "nokta", x: 5.1, y: 5.3 }, { id: "h3", tip: "nokta", x: 5.8, y: 4.4 },
            { id: "h4", tip: "nokta", x: 4.4, y: 5.6 }, { id: "h5", tip: "nokta", x: 5.5, y: 3.9 }, { id: "h6", tip: "nokta", x: 6.2, y: 5.5 },
            { id: "h7", tip: "nokta", x: 3.7, y: 5.1 }, { id: "h8", tip: "nokta", x: 5.0, y: 6.3 }, { id: "h9", tip: "nokta", x: 6.3, y: 4.6 }
          ],
          durumlar: [
            { metin: "==*Clustered* (kümelenmiş)==: evler bir köyde birbirine yakın toplanır, tarlalar çevrededir." },
            { metin: "==*Dispersed* (dağınık)==: aynı evler artık birbirinden uzak; her biri kendi arazisinde durur.",
              set: {
                ad: { metin: "DAĞINIK (dispersed)" },
                h1: { x: 1.5, y: 1.8 }, h2: { x: 4.8, y: 1.5 }, h3: { x: 8.2, y: 2.0 }, h4: { x: 2.2, y: 5.0 }, h5: { x: 5.4, y: 5.2 },
                h6: { x: 8.5, y: 5.6 }, h7: { x: 1.8, y: 8.2 }, h8: { x: 5.2, y: 8.0 }, h9: { x: 8.6, y: 8.2 }
              } },
            { metin: "==*Linear* (çizgisel)==: evler bir yol, nehir ya da kanal boyunca tek sıra dizilir.", goster: ["yol", "yy"],
              set: {
                ad: { metin: "ÇİZGİSEL (linear)" },
                h1: { x: 1.0, y: 5.6 }, h2: { x: 2.1, y: 4.4 }, h3: { x: 3.2, y: 5.6 }, h4: { x: 4.3, y: 4.4 }, h5: { x: 5.4, y: 5.6 },
                h6: { x: 6.5, y: 4.4 }, h7: { x: 7.6, y: 5.6 }, h8: { x: 8.7, y: 4.4 }, h9: { x: 9.6, y: 5.6 }
              } }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🏘️", terim: "Clustered settlement", tr: "kümelenmiş yerleşme", tanim: "Çiftçi evleri bir köyde toplanır, tarlalar köyün çevresindedir. Ortak su kaynağı, güvenlik ve işbirliği bunu yaygın kılar.", ornek: "Anadolu köyleri; Güney Asya ve Avrupa'daki birçok köy." },
            { ikon: "🏡", terim: "Dispersed settlement", tr: "dağınık yerleşme", tanim: "Her çiftlik evi kendi arazisinin içinde, komşudan uzakta durur. Geniş ve özel mülk olan ticari tarım alanlarında yaygındır.", ornek: "ABD Orta Batısı ve Kanada ovalarındaki çiftlik evleri." },
            { ikon: "🛣️", terim: "Linear settlement", tr: "çizgisel yerleşme", tanim: "Evler bir yol, nehir, kanal ya da set boyunca sıralanır. Ortak bir kaynağa ya da ulaşıma erişim ana nedendir.", ornek: "Nil boyundaki köyler; Hollanda'da set boyundaki yerleşimler." }
          ] }
      ]
    },
    {
      baslik: "Tarım biçimi yerleşme desenini belirler",
      kisa: "Tarım türü ve mülkiyet düzeni, evlerin dizilişini şekillendirir.",
      bloklar: [
        { tip: "tablo", baslik: "Tarım uygulaması ve arazi deseni", head: ["Tarım uygulaması", "Tipik kırsal desen", "Neden?"], rows: [
            ["Pirinç tarımı (Güney ve Güneydoğu Asya)", "Kümelenmiş köyler", "Sulama ve ekim-hasat ortak emekle yapılır; tarlalar küçük"],
            ["Ticari tahıl çiftliği (ABD Orta Batı)", "Dağınık çiftlik evleri", "Her aile kendi büyük, kare parselinde yaşar"],
            ["*Ranching*", "Çok seyrek, dağınık", "Hayvan başına çok arazi gerekir, az insan yaşar"],
            ["*Plantation agriculture*", "İşçi konutları tarla ve işleme tesisi yakınında toplanır", "İşçi ve fabrika bir arada"],
            ["Nehir ya da yol boyu tarım", "Çizgisel dizilim", "Suya ve ulaşıma erişim"]
          ] },
        { tip: "ikili", sol: { ikon: "🏘️", baslik: "*Clustered*", maddeler: ["Evler bir arada, tarlalar köyün çevresinde", "Ortak kaynak, güvenlik, işbirliği"] },
          sag: { ikon: "🏡", baslik: "*Dispersed*", maddeler: ["Her ev kendi arazisinin ortasında", "Geniş, özel mülk parseller"] },
          oyun: [
            { metin: "Evler çeşmenin ve köy meydanının çevresinde toplanır.", cevap: "sol", neden: "Ortak bir merkez çevresinde toplanma: *clustered*." },
            { metin: "Her çiftlik evi, kendi kare arazisinin ortasında ve komşuya yaklaşık bir kilometre uzaktadır.", cevap: "sag", neden: "Evler arası mesafe büyük: *dispersed*." },
            { metin: "Güvenlik ve ortak su kuyusu için bir arada yaşanır.", cevap: "sol", neden: "Birlikte yaşamanın faydası: *clustered*." },
            { metin: "Devletin ailelere verdiği büyük, özel parseller üzerinde yaşanır.", cevap: "sag", neden: "Büyük özel parsel evleri birbirinden uzak tutar: *dispersed*." }
          ] },
        { tip: "tuzak", metin: "\"Kümelenmiş\" kırsal bir desendir; şehir demek değildir.", yanlis: "*Clustered settlement* kentsel yerleşme demektir.", dogru: "Bu konudaki üç desen de **kırsal** desendir: kümelenmiş köyde yaşayanlar da çiftçidir ve sabah tarlaya gider. Desen, kentin değil **ev dağılımının** adıdır." }
      ]
    },
    {
      baslik: "Arazi ölçümünde üç yöntem",
      kisa: "Sınır ağaç ve nehirle, kare ızgarayla ya da nehre dik şeritlerle çizilir.",
      bloklar: [
        { tip: "grafik", baslik: "Aynı araziyi üç yöntemle bölmek (şematik)", xlabel: "Doğu–batı", ylabel: "Kuzey–güney", xmax: 10, ymax: 10,
          ogeler: [
            { id: "m1", tip: "alan", renk: 0, noktalar: [[0.5, 0.5], [4.2, 0.8], [3.6, 4.5], [0.9, 3.9]] },
            { id: "m2", tip: "alan", renk: 0, noktalar: [[4.2, 0.8], [9.5, 1.2], [8.7, 4.8], [3.6, 4.5]] },
            { id: "m3", tip: "alan", renk: 0, noktalar: [[0.9, 3.9], [3.6, 4.5], [8.7, 4.8], [9.2, 9.3], [5.1, 8.7], [1.2, 9.5]] },
            { id: "ma", tip: "yazi", x: 1.6, y: 3.3, metin: "🌳 meşe" },
            { id: "mb", tip: "yazi", x: 4.2, y: 0.3, metin: "🪨 kaya" },
            { id: "mc", tip: "yazi", x: 8.4, y: 4.0, metin: "💧 dere" },
            { id: "mt", tip: "yazi", x: 5, y: 9.9, metin: "METES AND BOUNDS: düzensiz parseller" },
            { id: "v1", tip: "cizgi", renk: 2, from: [2, 2], to: [2, 8], gizli: true }, { id: "v2", tip: "cizgi", renk: 2, from: [4, 2], to: [4, 8], gizli: true },
            { id: "v3", tip: "cizgi", renk: 2, from: [6, 2], to: [6, 8], gizli: true }, { id: "v4", tip: "cizgi", renk: 2, from: [8, 2], to: [8, 8], gizli: true },
            { id: "g1", tip: "cizgi", renk: 2, from: [2, 2], to: [8, 2], gizli: true }, { id: "g2", tip: "cizgi", renk: 2, from: [2, 4], to: [8, 4], gizli: true },
            { id: "g3", tip: "cizgi", renk: 2, from: [2, 6], to: [8, 6], gizli: true }, { id: "g4", tip: "cizgi", renk: 2, from: [2, 8], to: [8, 8], gizli: true },
            { id: "gs", tip: "yazi", x: 5, y: 5, metin: "1 section", gizli: true },
            { id: "gt", tip: "yazi", x: 5, y: 9.9, metin: "TOWNSHIP AND RANGE: kare ızgara", gizli: true },
            { id: "nh", tip: "cizgi", renk: 3, from: [0, 1.2], to: [10, 1.2], gizli: true },
            { id: "l1", tip: "alan", renk: 2, noktalar: [[0.5, 1.6], [2.1, 1.6], [2.1, 9], [0.5, 9]], gizli: true },
            { id: "l2", tip: "alan", renk: 2, noktalar: [[2.1, 1.6], [3.7, 1.6], [3.7, 9], [2.1, 9]], gizli: true },
            { id: "l3", tip: "alan", renk: 2, noktalar: [[3.7, 1.6], [5.3, 1.6], [5.3, 9], [3.7, 9]], gizli: true },
            { id: "l4", tip: "alan", renk: 2, noktalar: [[5.3, 1.6], [6.9, 1.6], [6.9, 9], [5.3, 9]], gizli: true },
            { id: "l5", tip: "alan", renk: 2, noktalar: [[6.9, 1.6], [8.5, 1.6], [8.5, 9], [6.9, 9]], gizli: true },
            { id: "ln", tip: "yazi", x: 9.2, y: 0.5, metin: "nehir", gizli: true },
            { id: "lt", tip: "yazi", x: 5, y: 9.9, metin: "LONG LOT: nehre dar cephe, geriye uzun şerit", gizli: true }
          ],
          durumlar: [
            { metin: "==*Metes and bounds*==: sınırlar doğal işaretlerle (ağaç, kaya, dere) ve mesafe-yön tarifiyle çizilir. Parseller **düzensiz** çıkar." },
            { metin: "==*Township and range*==: önce arazi düzgün bir ızgaraya bölünür, sonra parseller satılır. Parseller **kare**, sınırlar **dik açılı** olur.",
              gizle: ["m1", "m2", "m3", "ma", "mb", "mc", "mt"], goster: ["v1", "v2", "v3", "v4", "g1", "g2", "g3", "g4", "gs", "gt"] },
            { metin: "==*Long lot*==: her parsel nehre dar bir cephe verir ve geriye doğru **uzun bir şerit** gibi uzanır; herkesin suya erişimi vardır.",
              gizle: ["v1", "v2", "v3", "v4", "g1", "g2", "g3", "g4", "gs", "gt"], goster: ["nh", "l1", "l2", "l3", "l4", "l5", "ln", "lt"] }
          ] },
        { tip: "tablo", baslik: "Üç yöntem yan yana", head: ["Yöntem", "Parsel şekli", "Nerede görülür?", "Sınır nasıl tarif edilir?"], rows: [
            ["*Metes and bounds*", "Düzensiz", "ABD'nin doğusu (ilk on üç koloni), Teksas", "Doğal işaretler ve mesafe-yön"],
            ["*Township and range*", "Kare ızgara", "ABD'nin Orta Batısı ve Batısı", "Taban çizgisi ve ana meridyenden sayılan ızgara"],
            ["*Long lot*", "Dar ve uzun şerit", "Quebec (Saint Lawrence), Louisiana (Mississippi), Rio Grande kıyısı", "Nehir ya da yol cephesinden geriye şerit"]
          ] }
      ]
    },
    {
      baslik: "*Township and range*: kare ızgara",
      kisa: "6 mil kare *township*, 36 *section*'a bölünür; her *section* 1 mil karedir.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 6, sonek: " × 6 mil", etiket: "bir *township*" },
            { deger: 36, etiket: "*section* / *township*" },
            { deger: 640, sonek: " acre", etiket: "1 *section* = 1 mil kare" },
            { deger: 160, sonek: " acre", etiket: "çeyrek *section*" }
          ] },
        { tip: "not", metin: "ABD Kongresi, batıdaki toprakları satmadan önce kare ızgarayla ölçmeye 1785'te (*Land Ordinance of 1785*) karar verdi. Doğu-batı yönündeki taban çizgisinden (*base line*) kuzeye ve güneye giden sıralar *township*, kuzey-güney yönündeki ana meridyenden (*principal meridian*) doğuya ve batıya giden sütunlar *range* diye numaralanır. Sonuç: kare tarlalar, birbirini 90° kesen yollar ve uçaktan damalı tahta görünümü." }
      ]
    },
    {
      baslik: "*Metes and bounds* ve *long lot*",
      kisa: "*Metes and bounds* işaretlerle, *long lot* nehre cepheyle sınır çizer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌳", terim: "Metes and bounds", tr: "ölçü ve sınır tarifi", tanim: "Parsel; ağaç, kaya, dere gibi doğal işaretlerle ve mesafe-yön tarifiyle sınırlandırılır; şekiller düzensizdir. İşaretler zamanla değiştiği için sınır anlaşmazlığı çıkabilir.", ornek: "\"Meşe ağacından kuzeye 100 adım, dereye kadar.\"" },
            { ikon: "📏", terim: "Long lot", tr: "uzun şerit parsel", tanim: "Parsel nehre ya da yola dar bir cephe verir, geriye doğru uzun bir şerit olarak uzanır. Miras bölüşüldükçe şeritler daha da incelir.", ornek: "Quebec'te Saint Lawrence Nehri boyunca Fransız kökenli şeritler." }
          ] },
        { tip: "tuzak", metin: "Arazi ölçüm yöntemi ile yerleşme deseni farklı kavramlardır.", yanlis: "*Long lot* ile *linear settlement* aynı şeydir.", dogru: "*Long lot* parselin **şeklini ve ölçülme biçimini**, *linear settlement* ise evlerin **dizilişini** anlatır. Long lot bölgelerinde evler sık sık nehir kıyısında sıralanır, bu yüzden ikisi birlikte görülür; ama sınavda ayrı kavramlardır." }
      ]
    },
    {
      baslik: "Haritadan yöntemi tanı",
      kisa: "Parsel şekline bak: düzensiz, kare ya da nehre dik şerit.",
      bloklar: [
        { tip: "ornek", baslik: "Üç haritayı eşleştir", durum: "(a) Kansas'ta uçaktan bakınca tarlalar kare, yollar dik açıyla kesişiyor. (b) Quebec'te nehir kıyısından geriye doğru dar ve uzun parseller var. (c) Virginia'da parseller düzensiz; sınırlar eski bir meşe, bir kaya ve bir dereyle tarif ediliyor. Hangi yöntem hangisi?",
          adimlar: ["(a) Kare ızgara, dik açılı yollar: *township and range*.", "(b) Nehre dar cephe, geriye uzun şerit: *long lot*.", "(c) Düzensiz şekil, doğal işaretler: *metes and bounds*."],
          sonuc: "==(a) *township and range*, (b) *long lot*, (c) *metes and bounds*.== İpucu: önce parsel şekline, sonra sınırın neyle tarif edildiğine bak." },
        { tip: "ikili", sol: { ikon: "🟩", baslik: "*Township and range*", maddeler: ["Kare ızgara, dik açılı yollar", "Önce ölçüm, sonra satış"] },
          sag: { ikon: "🌳", baslik: "*Metes and bounds*", maddeler: ["Düzensiz parseller", "Doğal işaret ve mesafe-yön tarifi"] },
          oyun: [
            { metin: "Parseller kare, yollar birbirini 90° kesiyor.", cevap: "sol", neden: "Izgara düzeni: *township and range*." },
            { metin: "Sınır tarifinde bir meşe ağacı ve bir dere geçiyor.", cevap: "sag", neden: "Doğal işaretler: *metes and bounds*." },
            { metin: "Uçaktan bakınca arazi damalı tahtaya benziyor.", cevap: "sol", neden: "Izgara görünümü: *township and range*." },
            { metin: "Her parselin şekli birbirinden farklı.", cevap: "sag", neden: "Düzensiz şekiller: *metes and bounds*." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Kırsal yerleşme desenleri üçtür: *clustered* (köyde toplanma), *dispersed* (her ev kendi arazisinde), *linear* (yol, nehir ya da kanal boyunca sıra).",
            "Tarım biçimi deseni etkiler: pirinç köyleri kümelenir, ABD Orta Batı çiftlikleri ve *ranching* dağınıktır, nehir ve yol boyu tarım çizgisel dizilir.",
            "Kırsal arazi ölçüm yöntemleri üçtür: *metes and bounds*, *township and range*, *long lot*.",
            "*Metes and bounds*: doğal işaretler ve mesafe-yön; düzensiz parseller (ABD'nin doğusu).",
            "*Township and range*: 1785 tarihli kare ızgara; 6 × 6 mil *township*, 36 *section*, 1 *section* = 1 mil kare = 640 acre (ABD Orta Batı ve Batı).",
            "*Long lot*: nehre dar cephe, geriye uzun şerit; herkesin suya erişimi var (Quebec, Louisiana).",
            "Tuzak: *long lot* bir ölçüm yöntemidir, *linear* bir yerleşme desenidir; \"kümelenmiş\" kentsel demek değildir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir haritada çiftlik evleri birbirinden yaklaşık bir kilometre uzakta ve her biri kendi kare arazisinin ortasındadır. Bu görünüm hangi kırsal yerleşme desenidir?",
      opts: ["*Clustered settlement*", "*Dispersed settlement*", "*Linear settlement*", "*Metes and bounds*"],
      a: 1, why: "Evler birbirinden uzak ve her biri kendi arazisindeyse desen *dispersed*'dır. D çekici bir yanlıştır: *metes and bounds* bir arazi ölçüm yöntemidir, yerleşme deseni değildir." },
    { q: "*Township and range* sistemine göre bir *township* kaç *section* içerir ve her *section* kaç mil karedir?",
      opts: ["6 *section*; her biri 6 mil kare", "36 *section*; her biri 6 mil kare", "36 *section*; her biri 1 mil kare", "640 *section*; her biri 1 mil kare"],
      a: 2, why: "Bir *township* 6 × 6 = 36 mil karedir ve 36 *section*'a bölünür; her *section* 1 mil karedir (640 acre). D çekicidir ama 640 bir *section*'ın acre cinsinden büyüklüğüdür, sayısı değil." },
    { q: "Tabloda üç bölgenin parsel özellikleri verilmiştir. Hangi eşleştirme doğrudur?",
      fig: { type: "table", caption: "Üç bölgede parseller", head: ["Bölge", "Parsel şekli", "Sınır nasıl tarif ediliyor?"], rows: [
        ["1", "Kare, düz kenarlı", "Taban çizgisinin 2 mil kuzeyi, ana meridyenin 3 mil batısı"],
        ["2", "Nehirden geriye dar ve uzun", "Nehir cephesi 100 metre, derinlik 3 kilometre"],
        ["3", "Düzensiz", "Eski bir meşe ağacı, büyük bir kaya ve dere"] ] },
      opts: ["1: *long lot*; 2: *township and range*; 3: *metes and bounds*", "1: *metes and bounds*; 2: *long lot*; 3: *township and range*", "1: *township and range*; 2: *metes and bounds*; 3: *long lot*", "1: *township and range*; 2: *long lot*; 3: *metes and bounds*"],
      a: 3, why: "Kare şekil ve taban çizgisi ile ana meridyen *township and range*'i; nehre dar cephe ve uzun derinlik *long lot*'u; düzensiz şekil ve doğal işaretler *metes and bounds*'u gösterir. A ve C şekil ile yöntemi karıştırır." },
    { q: "*Long lot* sisteminin Quebec'te Saint Lawrence Nehri boyunca kullanılmasının en önemli nedeni hangisidir?",
      opts: ["Her çiftliğe nehirden su ve ulaşım erişimi sağlamak", "Parselleri kare yapıp satışı kolaylaştırmak", "Çiftlik evlerini birbirinden olabildiğince uzak tutmak", "Doğal işaretlerle sınır tarif etmek"],
      a: 0, why: "Dar nehir cephesi, her parselin suya ve ulaşıma erişmesini sağlar. B *township and range*'in, D ise *metes and bounds*'un özelliğidir." },
    { q: "Güney Asya'da küçük pirinç tarlaları olan, sulamayı ortak emekle yapan bir topluluk için hangi yerleşme deseni en olasıdır?",
      opts: ["*Dispersed*: her aile kendi tarlasının ortasında yaşar.", "*Clustered*: evler ortak sulama ve emek için bir köyde toplanır.", "*Linear*: evler yalnızca bir otoyol boyunca dizilir.", "*Township and range*: evler kare ızgaraya yerleşir."],
      a: 1, why: "Ortak sulama ve emek gerektiren pirinç tarımı kümelenmiş köyleri doğurur. D, yerleşme deseni ile ölçüm yöntemini karıştırır; üstelik *township and range* Güney Asya'ya özgü değildir." }
  ]
};
