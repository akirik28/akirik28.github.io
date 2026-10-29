/* Kitpath not defteri · cg103 · COĞ.11.3.1 Su kaynaklarını sınıflandırma
   Kaynak: cografya-11-sinav1/veri.js (KONU su, MUHTEMEL 3.1, PROVA). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cg103",
  amac: "Bu konu yeryüzündeki suları anlatıyor: nerede ne kadar su var, kaynaklar nelerdir, nasıl sınıflanır. Sınavda bir su kaynağını ölçüte göre gruba koymayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Dünyada suyun dağılışı",
      kisa: "Suyun çoğu tuzlu; tatlı suyun çoğu buzulda.",
      bloklar: [
        { tip: "grafik", baslik: "Yaklaşık oranlar", xlabel: "Tuzlu–tatlı | tatlı suyun içinde", ylabel: "%", xmax: 7, ymax: 100,
          xticks: [{ v: 1, label: "Tuzlu" }, { v: 2, label: "Tatlı" }, { v: 4, label: "Buzul" }, { v: 5, label: "Yer altı" }, { v: 6, label: "Yüzey" }],
          yticks: [{ v: 25, label: "25" }, { v: 50, label: "50" }, { v: 75, label: "75" }, { v: 100, label: "100" }],
          ogeler: [
            { id: "tz", tip: "alan", renk: 0, noktalar: [[0.6, 0], [1.4, 0], [1.4, 0], [0.6, 0]] },
            { id: "tt", tip: "alan", renk: 1, noktalar: [[1.6, 0], [2.4, 0], [2.4, 0], [1.6, 0]] },
            { id: "b1", tip: "alan", renk: 2, noktalar: [[3.6, 0], [4.4, 0], [4.4, 0], [3.6, 0]] },
            { id: "b2", tip: "alan", renk: 3, noktalar: [[4.6, 0], [5.4, 0], [5.4, 0], [4.6, 0]] },
            { id: "b3", tip: "alan", renk: 1, noktalar: [[5.6, 0], [6.4, 0], [6.4, 0], [5.6, 0]] },
            { id: "ltz", tip: "yazi", x: 1, y: 90, metin: "97,5", gizli: true },
            { id: "ltt", tip: "yazi", x: 2, y: 8, metin: "2,5", gizli: true },
            { id: "lb1", tip: "yazi", x: 4, y: 73, metin: "69", gizli: true },
            { id: "lb2", tip: "yazi", x: 5, y: 34, metin: "30", gizli: true },
            { id: "lb3", tip: "yazi", x: 6, y: 6, metin: "1", gizli: true }
          ],
          durumlar: [
            { metin: "Suyun yaklaşık ==%97,5'i tuzlu== (okyanus ve deniz).", set: { tz: { noktalar: [[0.6, 0], [1.4, 0], [1.4, 97.5], [0.6, 97.5]] } }, goster: ["ltz"] },
            { metin: "Yalnızca ==%2,5'i tatlı su.==", set: { tt: { noktalar: [[1.6, 0], [2.4, 0], [2.4, 2.5], [1.6, 2.5]] } }, goster: ["ltt"] },
            { metin: "Tatlı suyun yaklaşık %69'u buzul ve kalıcı karda: en büyük rezerv, ama katı hâlde, kullanımı zor.", set: { b1: { noktalar: [[3.6, 0], [4.4, 0], [4.4, 69], [3.6, 69]] } }, goster: ["lb1"] },
            { metin: "Yaklaşık %30'u yer altında.", set: { b2: { noktalar: [[4.6, 0], [5.4, 0], [5.4, 30], [4.6, 30]] } }, goster: ["lb2"] },
            { metin: "Göl ve akarsu gibi yüzey suları yaklaşık %1.", set: { b3: { noktalar: [[5.6, 0], [6.4, 0], [6.4, 1], [5.6, 1]] } }, goster: ["lb3"] }
          ] },
        { tip: "tuzak", metin: "Kaynaklara göre küçük farklar var (buzul %68,9 ya da %68,7; yüzey suları %0,3 ya da %1,2).", yanlis: "Oranlar her kaynakta tam aynıdır.", dogru: "Sorunun verdiği veriyi kullan. Ezber için 'yaklaşık' değerler yeter." }
      ]
    },
    {
      baslik: "Su döngüsü",
      kisa: "Güneş enerjisiyle işleyen sürekli dolaşım.",
      bloklar: [
        { tip: "adimlar", baslik: "Hidrolojik döngü", adimlar: [
            { baslik: "Buharlaşma ve terleme", metin: "Su yüzeyden havaya çıkar." },
            { baslik: "Yoğuşma", metin: "Buhar bulut olur." },
            { baslik: "Yağış", metin: "Yağmur ve kar yeryüzüne iner." },
            { baslik: "Yüzeysel akış", metin: "Su akarsu ve göllere karışır." },
            { baslik: "Sızma ve yer altı akışı", metin: "Bir kısmı sızar, yer altı suyu olur." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🌊", terim: "Hidrosfer", tr: "su küre", tanim: "Yeryüzündeki suların tamamıdır. Yüzeyin yaklaşık %71'i sularla kaplıdır." },
            { ikon: "💧", terim: "Hidrografya", tr: "sular coğrafyası", tanim: "Fiziki coğrafyanın suları inceleyen alanıdır." }
          ] }
      ]
    },
    {
      baslik: "Okyanus ve deniz",
      kisa: "Okyanus büyük çukurları doldurur; deniz ona bağlıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌍", terim: "Okyanus", tr: "büyük su kütlesi", tanim: "Kıtalar arasındaki büyük çukurları dolduran su kütlesidir.", ornek: "Büyük (Pasifik), Atlas (Atlantik), Hint, Kuzey (Arktik), Güney." },
            { ikon: "🌊", terim: "Deniz", tr: "okyanusa bağlı su kütlesi", tanim: "Kıta kenarında ya da kıta içine sokulmuş, okyanusa bağlı, ondan küçük su kütlesidir." }
          ] },
        { tip: "ikili", sol: { ikon: "🏝️", baslik: "Kenar deniz", maddeler: ["Adalar ve yarımadalarla ayrılmış", "Geniş boğazlarla bağlı", "Örnek: Çin, Japon, Kuzey Denizi"] },
          sag: { ikon: "🏞️", baslik: "İç deniz", maddeler: ["Kıta içine sokulmuş", "Boğazlarla okyanuslara bağlı", "Örnek: Akdeniz, Karadeniz, Kızıldeniz, Baltık"] },
          oyun: [
            { metin: "Kuzey Denizi.", cevap: "sol", neden: "Kenar deniz örneği." },
            { metin: "Karadeniz.", cevap: "sag", neden: "İç deniz örneği." },
            { metin: "Okyanustan adalar ve yarımadalarla ayrılmış, geniş boğazlarla ona bağlı deniz.", cevap: "sol", neden: "Kenar denizin tanımı." },
            { metin: "Boğazlarla okyanuslara bağlanan, kıta içine sokulan deniz.", cevap: "sag", neden: "İç denizin tanımı." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "☀️", baslik: "Buharlaşma artarsa tuzluluk artar", metin: "Kızıldeniz yaklaşık ‰41." },
            { ikon: "🏞️", baslik: "Akarsuyla gelen tatlı su artarsa tuzluluk azalır", metin: "Baltık'ın bazı kesimleri ‰2'ye kadar." }
          ] }
      ]
    },
    {
      baslik: "Göller",
      kisa: "Yerlikaya göllerde çukur önce, set göllerinde engel önce oluşur.",
      bloklar: [
        { tip: "tablo", head: ["Grup", "Tür", "Nasıl oluşur? Örnek"], rows: [
            ["Yerlikaya", "Tektonik", "Yer kabuğu hareketiyle oluşan çukur (Tuz Gölü, Burdur Gölü)"],
            ["Yerlikaya", "Volkanik", "Krater ve kaldera çanağı (Nemrut Krater Gölü)"],
            ["Yerlikaya", "Buzul, karstik, meteorit", "Buzulun oyduğu, kireçtaşının çözünmesiyle oluşan, göktaşı çarpmasıyla oluşan çukur"],
            ["Set", "Heyelan, lav, moren, alüvyal, kıyı, traverten, buzul, resif, yapay", "Vadi ya da kıyı bir setle kapanır (Abant: heyelan seti; baraj gölü: yapay set)"],
            ["Relikt", "Kalıntı göl", "Eski geniş su kütlesinin kuruyarak küçülmüş kalıntısı"]
          ], not: "Su özelliğine göre: tatlı, tuzlu, acı, sodalı. Gideğen: göl çanağının fazla suyunu taşıyan akarsu." },
        { tip: "ornek", baslik: "Model cevap: baraj gölü hangi grupta?", durum: "Nemrut Krater Gölü, Abant Gölü ve Tuz Gölü oluşumuna göre nasıl sınıflanır? Baraj gölü hangi gruba girer?",
          adimlar: [
            "Nemrut Krater Gölü: yerlikaya, volkanik (krater çanağı).",
            "Tuz Gölü: yerlikaya, tektonik (yer kabuğu hareketi).",
            "Abant Gölü: set gölü, heyelan seti.",
            "Baraj gölü: vadi insan yapımı bir setle kapanır: yapay set gölü."
          ],
          sonuc: "==Model cevap:== Yerlikaya göllerde çukurluk önce oluşur, sonra su dolar (krater, fay çöküntüsü). Set göllerinde vadi ya da kıyı bir setle kapanır ve su birikir. Baraj gölü insan yapımı set olduğu için set göllerinden yapay set gölüdür." }
      ]
    },
    {
      baslik: "Akarsular",
      kisa: "Havza, debi ve rejim; havza suyu denize ulaştırıyorsa açıktır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗺️", terim: "Havza", tr: "su toplama alanı", tanim: "Akarsuyun kollarıyla birlikte suyunu topladığı alandır. Su bölümü çizgisi komşu havzaları ayırır." },
            { ikon: "⏱️", terim: "Akım (debi)", tr: "saniyedeki su miktarı", tanim: "Yatağın bir kesitinden bir saniyede geçen su miktarıdır." },
            { ikon: "📆", terim: "Rejim", tr: "yıl içi değişim", tanim: "Akımın yıl içindeki değişimidir.", ornek: "Düzenli: Amazon, Kongo. Düzensiz: Ganj, İndus." }
          ] },
        { tip: "ikili", sol: { ikon: "🌊", baslik: "Açık havza", maddeler: ["Suyu denize ya da okyanusa ulaştırır", "Örnek: Çoruh (Karadeniz'e)"] },
          sag: { ikon: "🏜️", baslik: "Kapalı havza", maddeler: ["Suyu denize ulaştıramaz", "Örnek: Aras (Hazar Gölü'ne)"] },
          oyun: [
            { metin: "Çoruh suyunu Karadeniz'e ulaştırır.", cevap: "sol", neden: "Denize ulaşıyor: açık havza." },
            { metin: "Aras suyunu Hazar Gölü'ne taşır.", cevap: "sag", neden: "Denize ulaşamıyor: kapalı havza." },
            { metin: "Suyunu okyanusa ulaştıran akarsular.", cevap: "sol", neden: "Açık havzanın tanımı." }
          ] }
      ]
    },
    {
      baslik: "Yer altı suyu, kaynak ve sulak alan",
      kisa: "Yağış sızar, akiferde birikir, kaynak olarak çıkar.",
      bloklar: [
        { tip: "tablo", head: ["Kaynak türü", "Özellik"], rows: [
            ["Karstik (voklüz)", "Eriyebilen kayaçlarda yer altı nehirlerinin yeryüzüne çıkması"],
            ["Artezyen", "İki geçirimsiz tabaka arasındaki suyun sondajla fışkırması"],
            ["Yamaç (vadi)", "Yer altı su tablasının yamaç ya da vadiyle kesişmesi"],
            ["Fay", "Fay hatlarından yükselen mineralce zengin sıcak su"],
            ["Gayzer", "Volkanik bölgede sıcak su ve buharın fışkırması"]
          ], not: "Yer altı suyu geçirimsiz tabaka üstünde birikir. Suyu süzen, ileten, depolayan ortam: akifer." },
        { tip: "sayilar", ogeler: [
            { deger: 14, etiket: "Türkiye'deki Ramsar alanı" },
            { deger: 2400, sonek: "+", etiket: "dünyadaki Ramsar alanı" }
          ] },
        { tip: "not", metin: "Sulak alan: bataklık, sazlık, ıslak çayır, turbalık ve gelgitte 6 m'yi geçmeyen sular. Ramsar Sözleşmesi 1971'de imzalandı; Türkiye 1994'te onayladı." }
      ]
    },
    {
      baslik: "Su kaynaklarını sınıflandırma",
      kisa: "Üç ölçüt: nerede, hangi bileşimde, kaç derece.",
      bloklar: [
        { tip: "tablo", head: ["Ölçüt", "Gruplar", "Türkiye'den örnek"], rows: [
            ["Bulunduğu yere göre", "Yer üstü suları (okyanus, deniz, göl, akarsu, buzul), yer altı suları", "Kızılırmak"],
            ["Kimyasal özelliğine göre", "Tatlı, tuzlu, acı, minerelli", "Tuz Gölü"],
            ["Fiziksel özelliğine göre", "Sıcak, soğuk", "Kızılcahamam kaplıcaları"]
          ], not: "Soru 'iki ölçüt belirleyin' derse: ölçütü yaz, her gruba verilen metinden örnek koy, gerekçeni tek cümleyle belirt." },
        { tip: "ikili", sol: { ikon: "🧂", baslik: "Kimyasal özellik", maddeler: ["Tatlı, tuzlu, acı, minerelli"] },
          sag: { ikon: "🌡️", baslik: "Fiziksel özellik", maddeler: ["Sıcak, soğuk"] },
          oyun: [
            { metin: "Tuz Gölü'nün tuzlu su sayılması.", cevap: "sol", neden: "Tuzluluk kimyasal özelliktir." },
            { metin: "Kızılcahamam kaplıcalarının sıcak su sayılması.", cevap: "sag", neden: "Sıcaklık fizikseldir." },
            { metin: "Tatlı, tuzlu, acı ve minerelli sular.", cevap: "sol", neden: "Kimyasal sınıflandırma." },
            { metin: "Termal kaynakların sıcak su grubuna konması.", cevap: "sag", neden: "Fiziksel sınıflandırma." }
          ] },
        { tip: "tuzak", metin: "Ölçüt değişince grup değişir.", yanlis: "Bir su kaynağı yalnızca tek bir gruba girer.", dogru: "Tuz Gölü, yere göre yer üstü suyudur; kimyasal özelliğe göre tuzludur. Artezyen kuyusu suyu yer altı suyu sayılır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Su: ~%97,5 tuzlu; tatlı suyun ~%69'u buzulda",
            "Döngü: buharlaşma, yoğuşma, yağış, akış, sızma",
            "Göller: yerlikaya, set, relikt; baraj = yapay set",
            "Açık havza denize ulaşır, kapalı havza ulaşmaz",
            "Sınıflandırma: yere, kimyasal, fiziksel özelliğe göre"
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Yeryüzündeki tatlı suyun en büyük bölümü hangisinde bulunur?",
      opts: ["Göl ve akarsularda", "Yer altı sularında", "Buzullar ve kalıcı karda", "Okyanuslarda"],
      a: 2,
      why: "Tatlı suyun yaklaşık %69'u buzul ve kalıcı kardadır; ama katı hâlde olduğu için kullanımı zordur. Yer altı suyu en çekici yanlış şık: yaklaşık %30 ile ikinci sıradadır." },
    { q: "Bir gezi yazısında Kızılırmak, Tuz Gölü ve Kızılcahamam kaplıcaları geçiyor. Kızılcahamam kaplıcaları aşağıdaki gruplardan hangisine girer?",
      opts: ["Kimyasal özelliğine göre tuzlu su", "Fiziksel özelliğine göre sıcak su", "Fiziksel özelliğine göre soğuk su", "Bulunduğu yere göre yer üstü suyu"],
      a: 1,
      why: "Kaplıca suyu sıcaktır; sıcaklık fiziksel özelliktir. Tuzlu su grubuna Tuz Gölü girer, kaplıca değil." },
    { q: "Akdeniz, Karadeniz, Kızıldeniz ve Baltık Denizi hangi gruba girer?",
      opts: ["Kenar deniz", "Relikt göl", "Okyanus", "İç deniz"],
      a: 3,
      why: "Boğazlarla okyanuslara bağlanan, kıta içine sokulan denizler iç denizdir. Kenar deniz en çekici yanlış şık: onlar adalar ve yarımadalarla ayrılmış, geniş boğazlarla bağlı denizlerdir (Çin, Japon, Kuzey)." },
    { q: "Bir vadi heyelanla kapanıyor ve kapanan setin gerisinde su birikerek göl oluşuyor. Bu göl hangisidir?",
      opts: ["Tektonik göl", "Volkanik göl", "Heyelan seti gölü", "Karstik göl"],
      a: 2,
      why: "Vadinin heyelan kütlesiyle kapanması set oluşturur: heyelan seti gölü (Abant gibi). Tektonik gölde çukur yer kabuğu hareketiyle önceden oluşur." },
    { q: "Bir akarsu suyunu denize ulaştıramıyor, Hazar Gölü'ne dökülüyor (Aras gibi). Bu akarsu hangi havzaya örnektir?",
      opts: ["Kapalı havza", "Açık havza", "Düzenli rejimli havza", "Gideğen havza"],
      a: 0,
      why: "Suyunu denize ya da okyanusa ulaştıramayan havza kapalı havzadır. Açık havza en çekici yanlış şık: Çoruh gibi Karadeniz'e ulaşan akarsulara aittir." }
  ]
};
