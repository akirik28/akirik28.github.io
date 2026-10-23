/* Kitpath not defteri · hg605 · Kentlerin İç Yapısı
   Kaynak: AP HuG CED Topic 6.5 (PSO-6.D.1). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg605",
  amac: "Bu konu kentin içinde yer kullanımının nasıl düzenlendiğini modellerle anlatıyor: Burgess, Hoyt, çoklu çekirdek, galaktik kent, *bid-rent* kuramı ve Latin Amerika, Güneydoğu Asya ve Afrika kent modelleri.",
  bolumler: [
    {
      baslik: "Burgess: eş merkezli halkalar",
      kisa: "Burgess kenti merkezden dışa beş eş merkezli halka olarak gösterir.",
      bloklar: [
        { tip: "grafik", baslik: "*Concentric zone model*: merkezden dışa beş halka", xlabel: "Merkezden uzaklık (yatay)", ylabel: "Merkezden uzaklık (dikey)", xmax: 10, ymax: 10,
          ogeler: [
            { id: "z5", tip: "alan", renk: 3, noktalar: [[0.5, 0.5], [9.5, 0.5], [9.5, 9.5], [0.5, 9.5]], gizli: true },
            { id: "z4", tip: "alan", renk: 2, noktalar: [[1.4, 1.4], [8.6, 1.4], [8.6, 8.6], [1.4, 8.6]], gizli: true },
            { id: "z3", tip: "alan", renk: 1, noktalar: [[2.3, 2.3], [7.7, 2.3], [7.7, 7.7], [2.3, 7.7]], gizli: true },
            { id: "z2", tip: "alan", renk: 0, noktalar: [[3.2, 3.2], [6.8, 3.2], [6.8, 6.8], [3.2, 6.8]], gizli: true },
            { id: "z1", tip: "alan", renk: 3, noktalar: [[4.1, 4.1], [5.9, 4.1], [5.9, 5.9], [4.1, 5.9]], gizli: true },
            { id: "t1", tip: "yazi", x: 5, y: 4.9, metin: "1 CBD", gizli: true },
            { id: "t2", tip: "yazi", x: 5, y: 6.2, metin: "2 Geçiş", gizli: true },
            { id: "t3", tip: "yazi", x: 5, y: 7.1, metin: "3 İşçi", gizli: true },
            { id: "t4", tip: "yazi", x: 5, y: 8.0, metin: "4 Orta sınıf", gizli: true },
            { id: "t5", tip: "yazi", x: 5, y: 8.95, metin: "5 Banliyö", gizli: true }
          ],
          durumlar: [
            { metin: "Kent merkezden dışa doğru büyür; her halka bir sonrakine genişler." },
            { metin: "Merkezde ==*CBD*== (merkezî iş bölgesi): ofis, mağaza, ulaşımın düğüm noktası.", goster: ["z1", "t1"] },
            { metin: "Çevresinde ==geçiş bölgesi==: sanayi, eski kalitesiz konutlar, yeni göçmenler.", goster: ["z2", "t2"] },
            { metin: "Sonra ==işçi sınıfı== konutları: fabrikalara yakın.", goster: ["z3", "t3"] },
            { metin: "Daha dışta ==orta sınıf== konutları: daha büyük ve daha iyi evler.", goster: ["z4", "t4"] },
            { metin: "En dışta ==gidip gelenlerin== banliyösü: yüksek gelirliler merkeze gidip gelir.", goster: ["z5", "t5"] }
          ] },
        { tip: "tablo", baslik: "Burgess halkaları", head: ["Halka", "Ad", "Özellik"], rows: [
            ["1", "*CBD*", "Ofis, mağaza; en yüksek arazi değeri"],
            ["2", "*Zone in transition*", "Sanayi ve eski konut; yeni göçmenler, ucuz kira"],
            ["3", "İşçi sınıfı bölgesi", "Fabrikalara yakın, işçi aileleri"],
            ["4", "Orta sınıf bölgesi", "Daha geniş ve daha iyi evler"],
            ["5", "*Commuter zone*", "Yüksek gelirli, merkeze gidip gelenlerin banliyösü"]
          ], not: "Kent büyüdükçe iç halkadaki grup dışa taşınır ve yerine yenileri gelir (*invasion and succession*)." }
      ]
    },
    {
      baslik: "Hoyt: sektörler",
      kisa: "Hoyt kenti ulaşım hatları boyunca merkezden dışa uzanan sektörler olarak görür.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🎯", baslik: "Burgess: *concentric zone*", maddeler: ["Eş merkezli halkalar", "Merkezden uzaklaştıkça gelir artar; sınırlar halka"] },
          sag: { ikon: "🥧", baslik: "Hoyt: *sector model*", maddeler: ["Dilim biçimli sektörler", "Demiryolu ve ana yollar boyunca uzanır; zengin konutlar sanayiden uzak tek bir sektördedir"] },
          oyun: [
            { metin: "Sanayi demiryolu hattı boyunca merkezden dışa uzanır.", cevap: "sag", neden: "Ulaşım hatları boyunca sektörler: Hoyt." },
            { metin: "Merkezden dışa doğru ardışık beş kuşak vardır.", cevap: "sol", neden: "Halka kuşaklar: Burgess." },
            { metin: "Yüksek gelirli konutlar kentin bir kanadında yoğunlaşır ve fabrikalardan uzak durur.", cevap: "sag", neden: "Tek bir yüksek gelir sektörü: Hoyt." },
            { metin: "İşçi sınıfı bölgesi merkezi tam saran bir halkadır.", cevap: "sol", neden: "Merkezi saran halka: Burgess." }
          ] },
        { tip: "tuzak", metin: "Hoyt'ta dışarı çıkmak sektörün içinde olur, halkaya geçmek değildir.", yanlis: "Hoyt modelinde zengin mahalleler en dış halkadır.", dogru: "Hoyt'ta zengin mahalleler ==tek bir sektörde== toplanır ve merkezden dışa uzanır. Dış halkayı tam saran konut kuşağı Burgess'tedir." }
      ]
    },
    {
      baslik: "Çoklu çekirdek ve galaktik kent",
      kisa: "Otomobil çağında kent tek merkezden çok merkezli yapıya geçer.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧩", baslik: "*Multiple nuclei* (çoklu çekirdek)", maddeler: ["Harris ve Ullman: kentin birden çok çekirdeği vardır", "CBD, liman, üniversite, sanayi bölgesi gibi çekirdekler"] },
          sag: { ikon: "🪐", baslik: "*Galactic city* (galaktik kent)", maddeler: ["Merkez zayıflar; çevre yolu çevresinde *edge city*'ler", "Otomobil ve otoyolla birbirine bağlanan iş ve konut kümeleri"] },
          oyun: [
            { metin: "Kentin hem eski merkezi, hem havalimanı çevresindeki iş bölgesi, hem üniversite semti birer ayrı çekirdektir.", cevap: "sol", neden: "Birden çok çekirdek: çoklu çekirdek." },
            { metin: "Çevre yolunun çevresinde ofis parkları ve alışveriş merkezleri sıralanır, kent merkezi önemini kaybeder.", cevap: "sag", neden: "Çevre yolunun çevresindeki yeni merkezler: galaktik kent." },
            { metin: "Ağır sanayi ile yüksek gelirli konutlar birbirinden uzak çekirdeklerde yer alır.", cevap: "sol", neden: "Birbirine uymayan kullanımlar ayrı çekirdeklerde: çoklu çekirdek." },
            { metin: "İnsanlar işe, alışverişe ve eğlenceye çevre yolu üstündeki merkezlere araçla gider.", cevap: "sag", neden: "Araç bağımlı, çok merkezli çevre: galaktik kent." }
          ] },
        { tip: "tablo", baslik: "Dört modeli yan yana", head: ["Model", "Dönem", "Ana fikir"], rows: [
            ["Burgess", "1920'ler", "Merkezden dışa eş merkezli halkalar"],
            ["Hoyt", "1930'lar", "Ulaşım hatları boyunca sektörler"],
            ["Çoklu çekirdek (Harris–Ullman)", "1940'lar", "Birden çok çekirdek; uyumsuz kullanımlar ayrılır"],
            ["Galaktik kent", "1980–90'lar", "Çevre yolu çevresinde *edge city*'ler; zayıf merkez"]
          ] }
      ]
    },
    {
      baslik: "*Bid-rent theory*: arazi kime gider?",
      kisa: "Arazi, merkezde en yüksek teklifi verene gider; ticaret merkezde, konut dışarıda kalır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏷️", terim: "Bid-rent theory", tr: "teklif kira kuramı", tanim: "Her arazi kullanımı bir yerde yer için en yüksek kirayı vermeyi göze alır. Merkeze yakın yer kıt ve erişilebilir olduğundan kira merkezde en yüksektir; arazi, en yüksek teklifi verene gider.", ornek: "Mağaza merkezdeki arsayı, konut kenardaki arsayı alır." }
          ] },
        { tip: "grafik", baslik: "Merkezden uzaklaştıkça teklif edilen kira", xlabel: "CBD'den uzaklık (km)", ylabel: "Teklif edilen kira", xmax: 6, ymax: 10,
          xticks: [{ v: 0, label: "0" }, { v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "tic", tip: "egri", renk: 0, etiket: "Ticaret", noktalar: [[0, 9], [1, 5.19], [2, 3], [3, 1.73], [4, 1], [5, 0.58], [6, 0.33]] },
            { id: "san", tip: "egri", renk: 2, etiket: "Sanayi", noktalar: [[0, 6], [1, 4.44], [2, 3.29], [3, 2.44], [4, 1.81], [5, 1.34], [6, 0.99]], gizli: true },
            { id: "kon", tip: "egri", renk: 3, etiket: "Konut", noktalar: [[0, 3.4], [1, 3.02], [2, 2.67], [3, 2.37], [4, 2.1], [5, 1.87], [6, 1.65]], gizli: true },
            { id: "k1", tip: "nokta", x: 1.6, y: 3.7, etiket: "Ticaret biter", kilavuz: true, gizli: true },
            { id: "k2", tip: "nokta", x: 3.2, y: 2.33, etiket: "Sanayi biter", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "==Ticaret== merkezde çok yüksek kira öder (erişilebilirlik, müşteri akışı), ama uzaklaştıkça teklifi hızla düşer: ==en dik eğri==." },
            { metin: "==Sanayi== merkezde daha düşük ama daha yatay teklif verir: geniş arsa ve ulaşım ister.", goster: ["san"] },
            { metin: "==Konut== en düşük ve en yatay eğridir: merkezde ticaretle yarışamaz, ama uzakta en yüksek teklifi o verir.", goster: ["kon"] },
            { metin: "Her mesafede ==en yüksek teklifi veren== araziyi alır: önce ticaret, sonra sanayi, en dışta konut.", goster: ["k1", "k2"] }
          ] },
        { tip: "tuzak", metin: "Konut, merkezde de teklif verebilir; ama ticaret kadar yükseğini veremez.", yanlis: "Merkezde konut hiç bulunmaz.", dogru: "Merkezdeki arsa pahalı olduğundan konut orada ==yüksek katlı ve yoğun== yapılır (apartman, kule); kenarda geniş bahçeli evler kurulur." }
      ]
    },
    {
      baslik: "Latin Amerika kent modeli",
      kisa: "Latin Amerika'da zenginler merkez çevresindeki şeritte, yoksullar çeperde yaşar.",
      bloklar: [
        { tip: "tablo", baslik: "Latin Amerika modeli (Griffin–Ford)", head: ["Bölge", "Özellik"], rows: [
            ["*CBD*", "Ticaret ve yönetim; eski sömürge dönemi merkezi"],
            ["*Commercial spine*", "CBD'den çıkan ana cadde boyunca ticaret"],
            ["*Elite residential sector*", "Zenginlerin spine boyunca merkezle bağlantılı mahalleleri"],
            ["*Zone of maturity*", "Merkeze yakın, daha eski ve iyi durumdaki orta sınıf konutları"],
            ["*Zone of in situ accretion*", "Kendi eliyle yapılan konutların zamanla iyileştiği alan"],
            ["*Periférico* (*squatter* çeperi)", "Kent çevresinde en yoksul gecekondu bölgesi"],
            ["*Disamenity sector*", "Altyapının eksik olduğu, yoksul ve tehlikeli iç bölge"]
          ] },
        { tip: "ikili", sol: { ikon: "🇺🇸", baslik: "Burgess (ABD)", maddeler: ["Zenginler dışta, banliyöde", "Merkeze yakın yer yoksul ve eski"] },
          sag: { ikon: "🌎", baslik: "Latin Amerika modeli", maddeler: ["Zenginler merkez ve spine boyunca", "En yoksul ve gecekondular çeperde"] },
          oyun: [
            { metin: "Kentin en yoksul gecekondu mahalleleri en dış çeperdedir.", cevap: "sag", neden: "*Periférico*: Latin Amerika modeli." },
            { metin: "Yüksek gelirliler kentin en dışında, merkeze araçla gidip gelir.", cevap: "sol", neden: "Burgess'te zenginler dışta." },
            { metin: "Merkezden çıkan ana caddenin kenarında zenginlerin mahalleleri yer alır.", cevap: "sag", neden: "*Commercial spine* ve elit sektör." },
            { metin: "Geçiş bölgesinde sanayi ve kalitesiz konut iç içedir.", cevap: "sol", neden: "*Zone in transition*: Burgess." }
          ] }
      ]
    },
    {
      baslik: "Güneydoğu Asya ve Afrika modelleri",
      kisa: "İki modelde de sömürge geçmişi ve limanlar kentin biçimini belirler.",
      bloklar: [
        { tip: "tablo", baslik: "Sömürge mirasıyla biçimlenen kentler", head: ["Model", "Temel özellikler"], rows: [
            ["Güneydoğu Asya (liman kenti)", "Merkezde liman ve eski sömürge ticaret ve yönetim bölgesi; yanında göçmen tüccar mahalleleri (ör. Çinli, Hintli); sonra karma kullanım; çeperde gecekondular ve tarım"],
            ["Afrika (Sahra altı)", "Birden çok iş merkezi: sömürge dönemi merkezi, geleneksel pazar merkezi ve gayriresmî ticaret; çeperde gecekondular"]
          ] },
        { tip: "tuzak", metin: "Bu modellerin ortak izi sömürge mirası ve hızlı kentleşmedir.", yanlis: "Bu kentler Burgess modeline uyar, çünkü iç içe halkalardan oluşur.", dogru: "Bu modeller ==liman, sömürge mirası, gecekondu çeperi ve birden çok iş merkezi== içerir; halka düzeni Burgess'e özgüdür." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Burgess: eş merkezli halkalar (*CBD*, geçiş, işçi, orta sınıf, *commuter zone*).",
            "Hoyt: ulaşım hatları boyunca sektörler; zenginler sanayiden uzak tek bir sektörde.",
            "Harris ve Ullman: çoklu çekirdek; uyumsuz kullanımlar ayrı çekirdeklerde.",
            "Galaktik kent: çevre yolu çevresinde *edge city*'ler, zayıf merkez, araç bağımlılığı.",
            "*Bid-rent*: merkezde ticaret (en dik eğri), ardından sanayi, en dışta konut en yüksek teklifi verir.",
            "Latin Amerika: *commercial spine* ve elit sektör; en yoksul gecekondular çeperde (Burgess'in tersi).",
            "Güneydoğu Asya ve Afrika: sömürge mirası, limanlar, birden çok merkez, çeperde gecekondu.",
            "Modeller genellemedir; sınavda özellikleri kente eşleştirmeyi bilmek yeterli."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir kentte eski şehir merkezi, havalimanı çevresindeki iş bölgesi, üniversite semti ve liman çevresindeki sanayi bölgesi birbirinden bağımsız çekirdekler oluşturmuştur. Hangi model bu kenti en iyi açıklar?",
      opts: ["Burgess eş merkezli bölge modeli", "Hoyt sektör modeli", "Latin Amerika modeli", "Harris ve Ullman çoklu çekirdek modeli"],
      a: 3, why: "Birden çok çekirdeğin ayrı ayrı gelişmesi çoklu çekirdek modelidir. En çekici yanlış şık A'dır: Burgess tek bir merkezden dışa halkalar öngörür." },
    { q: "Tabloda bir kentte üç arazi kullanımının teklif ettiği kira verilmiştir. 3 km uzaklıktaki arsa hangi kullanıma gider?",
      fig: { type: "table", head: ["Uzaklık", "Mağaza", "Fabrika", "Konut"], rows: [["0 km", "90", "60", "34"], ["1 km", "52", "44", "30"], ["3 km", "17", "24", "26"]], caption: "Teklif edilen kira (bin TL/ay, kurgusal)" },
      opts: ["Mağaza, çünkü merkezden yalnızca 3 km uzak", "Konut, çünkü o mesafede en yüksek teklifi konut verir", "Fabrika, çünkü merkezde 60 teklif etmiştir", "Hiçbiri; arsa boş kalır"],
      a: 1, why: "3 km'de konut 26, fabrika 24, mağaza 17 teklif ediyor; konut kazanır (*bid-rent*). A en çekici yanlıştır: mağaza merkezde yüksek teklifli ama 3 km'de teklifi en düşüktür." },
    { q: "Brezilyalı bir kentte, merkezden çıkan geniş bir ana cadde boyunca ticaret ve zenginlerin mahalleleri yer alıyor; en yoksul gecekondular ise kentin çeperinde. Bu kent hangi modele en uygundur?",
      opts: ["Latin Amerika kent modeli", "Burgess eş merkezli bölge modeli", "Galaktik kent modeli", "Güneydoğu Asya liman kenti modeli"],
      a: 0, why: "Ticaret şeridi (*commercial spine*), onun boyunca zengin sektör ve çeperdeki gecekondular Latin Amerika modelinin ayırt edici özellikleridir. B çekici yanlıştır: Burgess'te zenginler en dış halkada, geçiş bölgesi ise merkezin yanındadır." },
    { q: "Bir sanayi kentinde fabrikalar demiryolu hattı boyunca merkezden dışa uzanıyor, işçi mahalleleri bu şeridin yanında; yüksek gelirli konutlar ise kentin karşı kanadında, fabrikalardan uzakta bir dilim olarak yer alıyor. En uygun model hangisidir?",
      opts: ["Burgess", "Galaktik kent", "Hoyt sektör modeli", "Çoklu çekirdek"],
      a: 2, why: "Ulaşım hattı boyunca uzanan sanayi ve zenginlerin sanayiden uzak tek bir sektörde olması Hoyt modelidir. Burgess halkalarda çalıştığı için A uygun değildir; çoklu çekirdek ise ayrı merkezleri vurgular." },
    { q: "Bir liman kentinde limanın hemen yanında eski sömürge dönemi ticaret ve yönetim bölgesi, onun yanında Çinli ve Hintli tüccarların ticaret mahalleleri, çeperde ise gecekondular ve tarım alanları bulunuyor. Hangi model bu kenti en iyi açıklar?",
      opts: ["Burgess", "Hoyt", "Galaktik kent", "Güneydoğu Asya liman kenti modeli"],
      a: 3, why: "Liman, sömürge ticaret ve yönetim bölgesi, göçmen tüccar mahalleleri ve gecekondu çeperi Güneydoğu Asya modelinin özellikleridir. Burgess'in geçiş bölgesi ve halkaları sömürge limanı anlatmaz; en çekici yanlış şık A'dır." }
  ]
};
