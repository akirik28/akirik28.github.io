/* Kitpath not defteri · hg307 · Din ve Dilin Yayılması
   Kaynak: AP HuG CED Topic 3.7 (IMP-3.B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg307",
  amac: "Bu konu dillerin ve dinlerin ilk ortaya çıktıkları yerlerden dünyaya nasıl yayıldığını anlatıyor. Kültür ocaklarını, evrenselleştirici ve etnik dinleri, dil ailelerini (özellikle Hint-Avrupa), *dialect*, *lingua franca* ve yer adlarını (*toponym*) öğreneceksin.",
  bolumler: [
    {
      baslik: "Kültür ocakları",
      kisa: "Diller, dinler, etnik kültürler ve cinsiyet rolleri ocaklarından yayılır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔥", terim: "Cultural hearth", tr: "kültür ocağı", tanim: "Bir dilin, dinin ya da kültürel özelliğin ilk ortaya çıktığı yer. Yayılma buradan başlar.", ornek: "İslam'ın ocağı Arap Yarımadası'dır." }
          ] },
        { tip: "not", metin: "*Language family*, *language*, *dialect*, dünya dinleri, etnik kültürler ve toplumsal cinsiyet rolleri kültür ocaklarından yayılır. Yayılırken yerel koşullara uyar ve değişir; bu yüzden aynı dinin ya da dilin farklı yerlerde farklı biçimleri olur. Hint-Avrupa ailesinin ocağı için iki kuram vardır: biri Anadolu'yu, biri Karadeniz'in kuzeyindeki stepleri gösterir." }
      ]
    },
    {
      baslik: "Evrenselleştirici ve etnik dinler",
      kisa: "Evrenselleştirici dinler herkese seslenir ve yayılır; etnik dinler belirli bir halka bağlıdır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌍", baslik: "*Universalizing religion* (evrenselleştirici din)", maddeler: ["Herkese seslenir, yeni inananlar kazanmak ister", "Hem *expansion* hem *relocation* ile yayılır", "Hıristiyanlık, İslam, Budizm, Sikhizm"] },
          sag: { ikon: "🏡", baslik: "*Ethnic religion* (etnik din)", maddeler: ["Belirli bir etnik grubun inancıdır", "Çoğunlukla ocağın yakınında yoğunlaşır ya da göçle (*relocation*) yayılır", "Hinduizm, Yahudilik"] },
          oyun: [
            { metin: "Din görevlileri başka ülkelere gidip herkesi inanca davet ediyor.", cevap: "sol", neden: "Yeni inananlar kazanmak ister: evrenselleştirici." },
            { metin: "Bir inanç, esas olarak belli bir halkın geleneği olarak ocağında sürüyor.", cevap: "sag", neden: "Halka bağlı ve ocak çevresinde: etnik." },
            { metin: "İslam, tüccarların Güneydoğu Asya'ya ulaşmasıyla bu bölgede yayıldı.", cevap: "sol", neden: "Tüccarların taşıdığı (*relocation*), sonra yerel halkın temasla benimsediği (*contagious expansion*) evrenselleştirici din." },
            { metin: "Hint kökenli işçiler, uzak bir ada ülkesine göç edip kendi inançlarını sürdürüyor.", cevap: "sag", neden: "Göçle, yani *relocation* ile yayılma: etnik." }
          ] },
        { tip: "tuzak", metin: "Etnik din, küçük din demek değildir.", yanlis: "Etnik dinler küçüktür; bir din belli bir bölgede yoğunsa etniktir.", dogru: "Ayrım ==yayılma biçimine== ve kime seslendiğine bakar. Hinduizm milyonlarca inananı olan etnik bir dindir; Sikhizm ise Pencap'ta yoğun olsa da ==evrenselleştirici== sayılır." }
      ]
    },
    {
      baslik: "Din ocakları ve yayılış yolları",
      kisa: "Her dinin belirli bir doğduğu yer ve kendine özgü bir yayılış yolu vardır.",
      bloklar: [
        { tip: "tablo", baslik: "Din, ocak, tür", head: ["Din", "Ocak (yaklaşık)", "Tür"], rows: [
            ["Hıristiyanlık", "Kudüs çevresi (Güneybatı Asya)", "Evrenselleştirici"],
            ["İslam", "Mekke (Arap Yarımadası)", "Evrenselleştirici"],
            ["Budizm", "Kuzey Hindistan", "Evrenselleştirici"],
            ["Sikhizm", "Pencap (Güney Asya)", "Evrenselleştirici"],
            ["Hinduizm", "İndus Vadisi çevresi (Güney Asya)", "Etnik"],
            ["Yahudilik", "Güneybatı Asya", "Etnik"]
          ] },
        { tip: "grafik", baslik: "Ocaklardan yayılış (şematik, ölçeksiz)", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "kud", tip: "nokta", x: 3.5, y: 6, etiket: "Kudüs", kilavuz: true },
            { id: "mek", tip: "nokta", x: 4.2, y: 4.2, etiket: "Mekke", kilavuz: true },
            { id: "hin", tip: "nokta", x: 7, y: 5.5, etiket: "Kuzey Hindistan", kilavuz: true },
            { id: "c1", tip: "ok", renk: 1, from: [3.2, 6.4], to: [1.7, 7.6], gizli: true },
            { id: "i1", tip: "ok", renk: 1, from: [3.9, 4], to: [1.6, 3.4], gizli: true },
            { id: "i2", tip: "ok", renk: 1, from: [4.6, 4], to: [8.6, 2.7], gizli: true },
            { id: "b1", tip: "ok", renk: 1, from: [7.3, 5.9], to: [8.9, 7.5], gizli: true },
            { id: "uy", tip: "yazi", x: 5, y: 9, metin: "Evrenselleştirici dinler uzağa yayılır", gizli: true },
            { id: "hi", tip: "alan", renk: 2, noktalar: [[6.3, 4.6], [7.8, 4.6], [7.8, 6.4], [6.3, 6.4]], gizli: true },
            { id: "ey", tip: "yazi", x: 7, y: 3.5, metin: "Etnik: ocakta yoğun; göçle yayılır", gizli: true }
          ],
          durumlar: [
            { metin: "Üç ocak: Kudüs, Mekke ve Kuzey Hindistan (şematik; ölçekli değil)." },
            { metin: "==Evrenselleştirici== dinler (Hıristiyanlık, İslam, Budizm) ocaklarından uzaklara yayıldı; Mekke'den batıya ve doğuya, Kudüs'ten Avrupa'ya, Kuzey Hindistan'dan Doğu Asya'ya.", goster: ["c1", "i1", "i2", "b1", "uy"] },
            { metin: "==Etnik== dinler ise genellikle ocağın çevresinde yoğunlaşır; ocak dışına çoğunlukla göçle (*relocation*) çıkar.", gizle: ["c1", "i1", "i2", "b1", "uy"], goster: ["hi", "ey"] }
          ] }
      ]
    },
    {
      baslik: "Diller ve dil aileleri",
      kisa: "Ortak bir ataya inen diller bir dil ailesini oluşturur; Hint-Avrupa en yaygın ailelerden biridir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👨‍👩‍👧", terim: "Language family", tr: "dil ailesi", tanim: "Ortak bir ata dilden türemiş diller topluluğu. Aile; dallara, dallar da tek tek dillere ayrılır.", ornek: "Hint-Avrupa ailesi: İngilizce, İspanyolca, Hintçe, Rusça." },
            { ikon: "🗨️", terim: "Dialect", tr: "lehçe, ağız", tanim: "Bir dilin bölgeye ya da topluluğa göre sözcük, telaffuz ve dilbilgisinde farklılaşan biçimi.", ornek: "İstanbul Türkçesi ile Karadeniz ağzı." }
          ] },
        { tip: "harita", merkez: "Hint-Avrupa ailesi", dallar: [
            { baslik: "Germen dilleri", alt: "İngilizce, Almanca, Hollandaca" },
            { baslik: "Roman dilleri", alt: "İspanyolca, Fransızca, İtalyanca, Portekizce" },
            { baslik: "Slav dilleri", alt: "Rusça, Lehçe, Sırpça" },
            { baslik: "Hint-İran dilleri", alt: "Hintçe, Bengalce, Farsça" }
          ] },
        { tip: "tuzak", metin: "Coğrafi yakınlık dil akrabalığı demek değildir.", yanlis: "Türkçe, Avrupa'da konuşulduğu için Hint-Avrupa ailesindendir.", dogru: "Türkçe ==Türk dilleri== ailesindendir. Macarca ve Fince de Hint-Avrupa değildir; ==Fin-Ugor== ailesindendir. Dil aileleri coğrafyayla değil ortak atayla belirlenir." }
      ]
    },
    {
      baslik: "Dil ailesi izleri: yer adları ve ortak dil",
      kisa: "Dillerin yayılışı yer adlarında, tabloda ve ortak dillerde izlenir.",
      bloklar: [
        { tip: "tablo", baslik: "Aynı kökten gelen sözcükler", head: ["Anlam", "İngilizce (Germen)", "İspanyolca (Roman)", "Hintçe (Hint-İran)", "Türkçe (Türk dilleri)"], rows: [
            ["Üç", "three", "tres", "tīn", "üç"],
            ["Anne", "mother", "madre", "mātā", "anne"]
          ], not: "İlk üç sütun ortak bir atadan gelir (benzerlik görülür); Türkçe ayrı bir ailedendir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🏷️", terim: "Toponym", tr: "yer adı", tanim: "Bir yerin adı. Yer adları, orada daha önce hangi dilin konuşulduğunun izini taşır.", ornek: "Kazakistan ve Pakistan'daki \"-stan\" eki, Farsçadan gelir." },
            { ikon: "🤝", terim: "Lingua franca", tr: "ortak iletişim dili", tanim: "Ana dilleri farklı insanların anlaşmak için kullandığı ortak dil. Ticaret ve yönetimde yayılır.", ornek: "Doğu Afrika'da Svahili." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Cultural hearth*: bir dilin, dinin ya da kültürel özelliğin ilk ortaya çıktığı yer; yayılma buradan başlar.",
            "Evrenselleştirici dinler (Hıristiyanlık, İslam, Budizm, Sikhizm) herkese seslenir; *expansion* ve *relocation* ile yayılır.",
            "Etnik dinler (Hinduizm, Yahudilik) belli bir halka bağlıdır; ocağın yakınında yoğundur ya da *relocation* ile yayılır.",
            "Ocaklar: Hıristiyanlık Kudüs çevresi, İslam Mekke, Budizm Kuzey Hindistan, Sikhizm Pencap, Hinduizm İndus Vadisi çevresi.",
            "*Language family* ortak ata dilden türeyen dillerden oluşur; Hint-Avrupa en yaygın ailelerdendir.",
            "Türkçe Hint-Avrupa değil, Türk dilleri ailesindendir.",
            "*Dialect* bir dilin bölgesel biçimidir; *lingua franca* farklı dilli insanların ortak dilidir.",
            "Yayılma haritalarda, tablolarda ve yer adlarında (*toponym*) izlenir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir din, yalnızca belirli bir halkın geleneğidir; ocağının çevresinde yoğunlaşmıştır ve dışarıya esas olarak göçlerle yayılmıştır. Bu din hangisidir?",
      opts: ["*Universalizing religion*", "Yalnızca bir dil ailesi", "*Lingua franca*", "*Ethnic religion*"],
      a: 3,
      why: "Halka bağlı, ocağın yakınında yoğun ve göçle yayılan dinler etnik dinlerdir. A şıkkı çekici ama yanlış: evrenselleştirici dinler herkese seslenir ve aktif biçimde yayılmak ister." },
    { q: "İslam'ın Arap Yarımadası'ndan Güneydoğu Asya'ya büyük ölçüde tüccarlar aracılığıyla yayılması, hangi yayılma ve din türüne örnektir?",
      opts: ["*Universalizing religion*; *expansion diffusion* örneği", "*Ethnic religion*; *relocation* örneği", "*Ethnic religion*; *stimulus diffusion* örneği", "*Cultural convergence*; *hierarchical diffusion* örneği"],
      a: 0,
      why: "İslam evrenselleştirici bir dindir; tüccarlar aracılığıyla temasla yayılmıştır. B şıkkı çekici yanlış: İslam etnik bir din değildir ve burada yayılma temas yoluyladır." },
    { q: "Tabloya göre aşağıdakilerden hangisi söylenebilir?",
      fig: { type: "table", caption: "Üç sözcük", head: ["Anlam", "İngilizce", "İspanyolca", "Hintçe", "Türkçe"], rows: [["Üç", "three", "tres", "tīn", "üç"], ["Anne", "mother", "madre", "mātā", "anne"]] },
      opts: ["İngilizce, İspanyolca ve Hintçe sözcükleri ortak bir atadan geldiği için benzerlik gösterir", "Türkçe sözcükler, diğer üçüyle aynı dil ailesine girer", "Benzerlik yalnızca coğrafi yakınlıktan kaynaklanır", "İngilizce, Hintçeden türemiştir"],
      a: 0,
      why: "İngilizce, İspanyolca ve Hintçe Hint-Avrupa ailesindendir ve sözcükleri ortak kökeni yansıtır. Türkçe ayrı bir ailedendir; B bu yüzden yanlış." },
    { q: "Orta Asya'da \"-stan\" ekiyle biten pek çok yer adı (Kazakistan, Özbekistan) vardır. Bu yer adları ne gösterir?",
      opts: ["Bölgede yalnızca etnik dinlerin bulunduğunu", "*Toponym*'lerin, bölgede etkili olmuş bir dilin (Farsça) izini taşıdığını", "Bölgenin hiçbir dilsel etkiye uğramadığını", "*Time-space convergence*'ın etkisini"],
      a: 1,
      why: "Yer adları (*toponym*) orada konuşulmuş ya da etkili olmuş dillerin izini taşır. C şıkkı yanlış: tam tersine dilsel etki görülür." },
    { q: "Ana dilleri farklı yedi ülkeden gelen tüccarlar, pazarlarda hepsinin bir miktar bildiği bir dil üzerinden anlaşıyor. Bu ortak dil için hangi terim kullanılır?",
      opts: ["*Dialect*", "*Language family*", "*Lingua franca*", "*Cultural hearth*"],
      a: 2,
      why: "Farklı dilli insanların ortak kullandığı iletişim dili *lingua franca*'dır. A şıkkı çekici ama yanlış: *dialect* bir dilin bölgesel biçimidir, ortak dil değildir." }
  ]
};
