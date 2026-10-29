/* Kitpath not defteri · cg104 · COĞ.11.3.2 Türkiye'de su kaynaklarının etkileri
   Kaynak: cografya-11-sinav1/veri.js (KONU tr, MUHTEMEL 3.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cg104",
  amac: "Bu konu Türkiye'deki suları anlatıyor: akarsuların özellikleri, sınırı geçen sular, deniz yetki alanları ve suyun dört yönden etkisi. Bir vakayı çevresel, ekonomik, politik, sosyokültürel yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Türkiye akarsularının özellikleri",
      kisa: "Dağlık ülke: sarp, kısa, hızlı, düzensiz akarsular.",
      bloklar: [
        { tip: "harita", merkez: "Türkiye akarsuları", dallar: [
            { baslik: "Sarp yatak", alt: "Denge profiline ulaşmamış" },
            { baslik: "Hızlı ve kısa", alt: "Akış hızı yüksek, boy kısa" },
            { baslik: "Debi düşük", alt: "Su miktarı az" },
            { baslik: "Düzensiz rejim", alt: "Mevsimsel fark çok" },
            { baslik: "HES'e uygun", alt: "Hidroelektrik potansiyeli yüksek" },
            { baslik: "Ulaşıma elverişsiz", alt: "Gemi taşımaya uygun değil" }
          ] },
        { tip: "not", metin: "Akılda tut: dağlık ülke → ==sarp, kısa, hızlı== → elektrik üretir, gemi taşımaz." }
      ]
    },
    {
      baslik: "Sınıraşan ve sınır oluşturan sular",
      kisa: "Sınıraşan sınırı geçer; sınır oluşturan sınırı çizer.",
      bloklar: [
        { tip: "tablo", head: ["Akarsu", "Nereden doğar / geçer", "Döküldüğü yer"], rows: [
            ["Fırat", "Türkiye'de doğar; Suriye, Irak", "Basra Körfezi"],
            ["Dicle", "Türkiye'de doğar; Irak (Suriye sınırını bir süre çizer)", "Basra Körfezi"],
            ["Aras ve Kura", "Türkiye'den doğar; Ermenistan, Gürcistan, Azerbaycan", "Hazar Gölü"],
            ["Çoruh", "Türkiye'de doğar; Gürcistan", "Karadeniz"],
            ["Meriç", "Bulgaristan ve Yunanistan sınırı", "Ege Denizi"],
            ["Asi", "Lübnan'da doğar; Suriye; Hatay", "Akdeniz"]
          ], not: "Türkiye'nin sınıraşan suları: Fırat, Dicle, Kura, Aras, Çoruh, Meriç, Asi." },
        { tip: "ikili", sol: { ikon: "➡️", baslik: "Sınıraşan", maddeler: ["Bir ülkede doğar, başka ülkelere ulaşır", "Fırat, Dicle, Çoruh, Asi"] },
          sag: { ikon: "🚧", baslik: "Sınır oluşturan", maddeler: ["İki ülke arasında doğal sınır çizer", "Meriç, Aras, Arpaçay"] },
          oyun: [
            { metin: "Fırat Türkiye'de doğup Suriye ve Irak'a geçer.", cevap: "sol", neden: "Sınırı geçiyor: sınıraşan." },
            { metin: "Meriç, Türkiye ile Yunanistan arasında doğal sınır çizer.", cevap: "sag", neden: "Sınırı çiziyor: sınır oluşturan." },
            { metin: "Asi Lübnan'da doğar, Hatay'dan Türkiye'ye girer.", cevap: "sol", neden: "Ülkeler arasında geçiyor: sınıraşan." },
            { metin: "Arpaçay Ermenistan ile sınırdır.", cevap: "sag", neden: "Sınır çizen akarsu: sınır oluşturan." }
          ] },
        { tip: "tuzak", metin: "Bir akarsu iki gruba da girebilir.", yanlis: "Bir akarsu ya sınıraşandır ya sınır oluşturandır.", dogru: "Meriç ve Aras hem sınır oluşturur hem sınıraşan sular arasında sayılır." }
      ]
    },
    {
      baslik: "Deniz yetki alanları ve Mavi Vatan",
      kisa: "Kıyıdan açığa altı alan: iç sulardan açık denize.",
      bloklar: [
        { tip: "grafik", baslik: "Kıyıdan açığa (şematik, ölçeksiz)", xlabel: "Kıyıdan açık denize", ylabel: " ", xmax: 10, ymax: 4, xticks: [], yticks: [],
          ogeler: [
            { id: "z1", tip: "alan", renk: 0, noktalar: [[0, 0.5], [1.5, 0.5], [1.5, 2.5], [0, 2.5]], gizli: true },
            { id: "z2", tip: "alan", renk: 1, noktalar: [[1.5, 0.5], [3, 0.5], [3, 2.5], [1.5, 2.5]], gizli: true },
            { id: "z3", tip: "alan", renk: 2, noktalar: [[3, 0.5], [4.5, 0.5], [4.5, 2.5], [3, 2.5]], gizli: true },
            { id: "z4", tip: "alan", renk: 3, noktalar: [[4.5, 0.5], [6, 0.5], [6, 2.5], [4.5, 2.5]], gizli: true },
            { id: "z5", tip: "alan", renk: 0, noktalar: [[6, 0.5], [8, 0.5], [8, 2.5], [6, 2.5]], gizli: true },
            { id: "z6", tip: "alan", renk: 1, noktalar: [[8, 0.5], [10, 0.5], [10, 2.5], [8, 2.5]], gizli: true },
            { id: "n1", tip: "yazi", x: 0.75, y: 1.3, metin: "1", gizli: true },
            { id: "n2", tip: "yazi", x: 2.25, y: 1.3, metin: "2", gizli: true },
            { id: "n3", tip: "yazi", x: 3.75, y: 1.3, metin: "3", gizli: true },
            { id: "n4", tip: "yazi", x: 5.25, y: 1.3, metin: "4", gizli: true },
            { id: "n5", tip: "yazi", x: 7, y: 1.3, metin: "5", gizli: true },
            { id: "n6", tip: "yazi", x: 9, y: 1.3, metin: "6", gizli: true }
          ],
          durumlar: [
            { metin: "==1. İç sular:== kıyı çizgisinin kara tarafındaki sular (körfez, liman).", goster: ["z1", "n1"] },
            { metin: "==2. Kara suları:== Karadeniz ve Akdeniz'de 12, Ege'de 6 deniz mili.", goster: ["z2", "n2"] },
            { metin: "==3. Bitişik bölge:== deniz haritasında 24 deniz miline kadar gösterilir.", goster: ["z3", "n3"] },
            { metin: "==4. Kıta sahanlığı:== yaklaşık 200 m derinliğe kadar inen deniz altı; doğal kaynakları keşfetme ve kullanma hakkı.", goster: ["z4", "n4"] },
            { metin: "==5. Münhasır ekonomik bölge:== 200 deniz miline kadar canlı ve cansız kaynakları keşfetme, kullanma, yönetme hakkı.", goster: ["z5", "n5"] },
            { metin: "==6. Açık deniz:== ülkelerin yetki alanı dışı.", goster: ["z6", "n6"] }
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 12, etiket: "deniz mili: kara suları (Karadeniz, Akdeniz)" },
            { deger: 6, etiket: "deniz mili: kara suları (Ege)" },
            { deger: 24, etiket: "deniz mili: bitişik bölge (haritada)" },
            { deger: 200, etiket: "deniz mili: münhasır ekonomik bölge" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "⚓", terim: "Mavi Vatan", tr: "deniz yetki doktrini", tanim: "Türkiye'nin deniz yetki alanlarındaki hak ve çıkarlarını koruma doktrinidir. Karadeniz, Ege, Akdeniz ve Marmara'yı kapsar." }
          ] }
      ]
    },
    {
      baslik: "Dört boyutlu etki",
      kisa: "Her etkiyi bir kutuya koy: çevresel, ekonomik, politik, sosyokültürel.",
      bloklar: [
        { tip: "tablo", head: ["Boyut", "Örnek etkiler"], rows: [
            ["Çevresel", "Biyoçeşitlilik, sulak alan ve göl ekosistemi, göl seviyesi düşmesi, kirlilik, arazi örtüsü değişimi, iklim"],
            ["Ekonomik", "Sulu tarım, hidroelektrik enerji, sanayi, turizm, balıkçılık, ulaşım, tuz ve maden"],
            ["Politik", "Sınıraşan ve sınır oluşturan sular, Mavi Vatan, kıta sahanlığı ve münhasır ekonomik bölge, enerji ve su güvenliği"],
            ["Sosyokültürel", "Medeniyetlerin su kenarında gelişmesi, sağlık (kaplıca), göç, kültürel miras, festivaller, spor, su kültürü"]
          ], not: "Akılda tut: çevre, para, devlet, insan." },
        { tip: "tuzak", metin: "Göç ve kültürel miras para değil, insan konusudur.", yanlis: "Göç ve kültürel miras ekonomik etkidir.", dogru: "Göç, kültürel miras, sağlık, gelenek: sosyokültürel. Sulu tarım, enerji, turizm, balıkçılık: ekonomik." }
      ]
    },
    {
      baslik: "Su yönetimi ve su kültürü",
      kisa: "Tarım suyu en çok kullanır; önlem: verimli sulama, arıtma, havza yönetimi.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "♻️", terim: "Sürdürülebilirlik", tr: "gelecek nesiller için", tanim: "Bugünün ihtiyacını, gelecek nesillerin suya erişimini tehlikeye atmadan karşılamaktır." },
            { ikon: "💙", terim: "Su kültürü", tr: "suya verilen değer", tanim: "Toplumun suya verdiği değer ve suyla kurduğu bağdır; su tasarrufu bilinci bunun parçasıdır." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💧", baslik: "Modern sulama", metin: "Damlama, kapalı boru, basınçlı sistem." },
            { ikon: "🌾", baslik: "Ürün deseni planlaması" },
            { ikon: "🚰", baslik: "Atık su arıtma; kaçak ve kayıpları azaltma" },
            { ikon: "🏞️", baslik: "Havza yönetimi; yer altı suyu kullanımını disipline etme" },
            { ikon: "☀️", baslik: "Yenilenebilir enerji ve eğitim", metin: "Örneğin yüzer güneş paneli." }
          ] }
      ]
    },
    {
      baslik: "Model cevap: GAP",
      kisa: "Aynı projeyi dört boyutta oku.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 22, etiket: "baraj" },
            { deger: 19, etiket: "hidroelektrik santral" },
            { deger: "1.8", sonek: " milyon ha", etiket: "sulamaya açılması planlanan alan" },
            { deger: 27, sonek: " milyar kWh", etiket: "yıllık elektrik hedefi" }
          ] },
        { tip: "ornek", baslik: "GAP'ın etkileri", durum: "GAP, Fırat-Dicle havzasında barajlar, santraller ve sulamayla bölgesel kalkınmayı amaçlar. Etkilerini dört boyutta yaz.",
          adimlar: [
            "Ekonomik: sulu tarım yayılır, verim ve ihracat artar (ihracat 2007'de 3,3, 2024'te 12,31 milyar dolar); enerji üretilir.",
            "Çevresel: baraj gölleriyle arazi örtüsü değişir; bazı yerleşme ve tarım alanları su altında kalabilir.",
            "Politik: Fırat ve Dicle Suriye ve Irak'a geçer; paylaşım komşularla iş birliği ister.",
            "Sosyokültürel: istihdam ve yaşam kalitesi iyileşir; altyapı yatırımları artar."
          ],
          sonuc: "==Model cevap:== GAP, sulu tarım ve enerjiyle gelir ve ihracatı artırır, istihdamı ve yaşam kalitesini yükseltir. Baraj gölleri arazi örtüsünü değiştirir; bazı yerleşme ve tarım alanları su altında kalabilir. Fırat ve Dicle komşu ülkelere aktığı için paylaşım politik iş birliği gerektirir." }
      ]
    },
    {
      baslik: "Vakalar: Tuz Gölü, Eğirdir, Hasankeyf",
      kisa: "Su azalınca ya da çoğalınca çevre, ekonomi ve insan birlikte etkilenir.",
      bloklar: [
        { tip: "adimlar", baslik: "Tuz Gölü: 1988'den 2024'e", adimlar: [
            { baslik: "Su alanı daraldı", metin: "Yaz dönemlerinde suyla kaplı alan çok azaldı." },
            { baslik: "Çevresel etki", metin: "Göçmen kuşların üreme ve beslenme alanı azaldı; açıktaki tuz rüzgârla taşınıyor; nem ve mikroklima değişiyor." },
            { baslik: "Ekonomik etki", metin: "Tuz üretimi ve ekoturizm geliri düştü; tarım ve hayvancılık zarar gördü." },
            { baslik: "Sosyal etki", metin: "Yöre halkının geliri düştü, göç arttı." }
          ] },
        { tip: "tablo", head: ["Vaka", "Sorun", "Önlem / gelişme"], rows: [
            ["Eğirdir Gölü", "Su seviyesi düşüyor; aşırı sulama ve tarımsal kirlilik ekosistem dengesini bozuyor", "Sulama tesislerini yenileme, ürün deseni, yer altı suyunu disipline etme, pestisit ve gübre kirliliğini önleme, havza izleme"],
            ["Hasankeyf (Ilısu Barajı)", "Dicle boyunca baraj gölü genişledi; yerleşim ve tarım alanlarının bir bölümü su altında kaldı", "Yerleşim yeni alana taşındı; balıkçılık, su sporları, turizm ve enerji gelişir; tarımın payı azalır"]
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Akarsular: kısa, hızlı, rejimi düzensiz, HES'e uygun",
            "Sınıraşan: Fırat, Dicle, Kura, Aras, Çoruh, Meriç, Asi",
            "Sınır oluşturan: Meriç, Aras, Arpaçay",
            "Her boyuta bir etki: çevresel, ekonomik, politik, sosyokültürel",
            "Önlemler: modern sulama, arıtma, havza yönetimi, tasarruf"
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir göl çekiliyor; flamingolar üreme alanını kaybediyor, tuz üretimi ve ekoturizm geliri düşüyor. Bu durum hangi iki boyutu etkiler?",
      opts: ["Yalnızca politik", "Çevresel ve ekonomik", "Yalnızca sosyokültürel", "Politik ve sosyokültürel"],
      a: 1,
      why: "Kuşların üreme alanı kaybı çevresel, tuz ve turizm gelirinin düşmesi ekonomiktir. Sosyokültürel en çekici yanlış şık: halkın geliri düşünce göç de artar, ama sorudaki iki etki bunlar değildir." },
    { q: "Aşağıdaki akarsulardan hangisi Türkiye için hem sınır oluşturan hem sınıraşan sular arasında sayılır?",
      opts: ["Fırat", "Asi", "Meriç", "Dicle"],
      a: 2,
      why: "Meriç Yunanistan ile doğal sınır çizer ve sınıraşan sular arasında da sayılır. Fırat, Asi ve Dicle sınırı geçen sulardır." },
    { q: "Ege Denizi'nde kıyıdan 8 deniz mili açıktaki bir nokta Türkiye'nin kara sularının içinde midir?",
      opts: ["Evet, kara suları 12 deniz milidir.", "Hayır, Ege'de kara suları 6 deniz milidir.", "Evet, kara suları 24 deniz milidir.", "Hayır, kara suları yalnızca 200 m derinliğe kadardır."],
      a: 1,
      why: "Ege'de kara suları 6 deniz mili olduğu için 8 mil kara suları dışındadır. 12 deniz mili Karadeniz ve Akdeniz içindir; 24 deniz mili ise haritada bitişik bölge için gösterilir." },
    { q: "Bir ülkenin, kıyıdan 200 deniz miline kadar canlı ve cansız kaynakları keşfetme, kullanma ve yönetme hakkına sahip olduğu deniz alanı hangisidir?",
      opts: ["Kara suları", "Bitişik bölge", "İç sular", "Münhasır ekonomik bölge"],
      a: 3,
      why: "200 deniz miline kadar kaynak hakkı münhasır ekonomik bölgeyi tanımlar. Kara suları 12 ya da 6 deniz mili ile sınırlıdır." },
    { q: "Türkiye akarsularının genel özelliklerinden biri aşağıdakilerden hangisidir?",
      opts: ["Ulaşıma çok elverişlidir.", "Rejimleri düzenlidir.", "Boyları uzun, debileri yüksektir.", "Hidroelektrik potansiyelleri yüksektir."],
      a: 3,
      why: "Sarp ve hızlı akarsular HES için uygundur. Boyları kısa, debileri düşük, rejimleri düzensizdir ve ulaşıma elverişli değildir." }
  ]
};
