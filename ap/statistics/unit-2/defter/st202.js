/* Kitpath not defteri · st202 · 2.3 İki Kategorik Değişken İçin İstatistikler
   Kaynak: AP Statistics CED Unit 2, Topic 2.3 (Statistics for Two Categorical Variables). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st202",
  amac: "Bu konu iki *categorical variable*'ın tablosundan *joint*, *marginal* ve *conditional relative frequency* hesaplamayı anlatır. Bu oranlarla ilişkiyi (*association*) yorumlamayı ve gruplar birleşince sonucun nasıl tersine dönebildiğini (*Simpson's paradox*) öğreneceksin.",
  bolumler: [
    {
      baslik: "Üç tür oran: joint, marginal, conditional",
      kisa: "Payda neyse oran odur: tüm tablo, bir kenar toplamı ya da bir grup.",
      bloklar: [
        { tip: "tablo", baslik: "Okul spor kulüpleri anketi (200 öğrenci)", head: ["", "Üye", "Üye değil", "Toplam"], rows: [
            ["Kız", "48", "72", "120"],
            ["Erkek", "20", "60", "80"],
            ["Toplam", "68", "132", "200"]
          ], vurgu: 2, not: "Bu tablo bu konudaki bütün hesapların ortak verisi. Cinsiyet *explanatory*, kulübe üyelik *response variable*." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧮", terim: "Joint relative frequency", tr: "bileşik göreli sıklık", tanim: "Bir hücredeki sayının ==tüm tablo toplamına== oranı; iki özelliğin birden olma oranı.", ornek: "Hem kız hem üye: 48 ÷ 200 = 0,24." },
            { ikon: "📏", terim: "Marginal relative frequency", tr: "kenar göreli sıklık", tanim: "Tek bir değişkenin bir kategorisinin ==kenar toplamının== tablo toplamına oranı.", ornek: "Üye olanlar: 68 ÷ 200 = 0,34." },
            { ikon: "🎛️", terim: "Conditional relative frequency", tr: "koşullu göreli sıklık", tanim: "Bir ==grubun içindeki== oran; paydası o grubun toplamıdır.", ornek: "Kızlar arasında üye: 48 ÷ 120 = 0,40." }
          ] }
      ]
    },
    {
      baslik: "Hangi oranı hesaplıyorum?",
      kisa: "\"Arasında\" ya da \"olanların\" sözcüğü paydayı, yani grubu söyler.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧮", baslik: "Payda = tüm tablo (200)", maddeler: ["*Joint*: iki özellik birden", "*Marginal*: tek özellik, bütün öğrenciler içinde"] },
          sag: { ikon: "🎛️", baslik: "Payda = bir grubun toplamı", maddeler: ["*Conditional*", "Sorudaki \"arasında\", \"olanların\" grubu seçer"] },
          oyun: [
            { metin: "Öğrencilerin kaçta kaçı hem kız hem üye?", cevap: "sol", neden: "İki özellik birden, payda 200: *joint* (48 ÷ 200)." },
            { metin: "Kızların kaçta kaçı üye?", cevap: "sag", neden: "Grup kızlar, payda 120: *conditional* (48 ÷ 120)." },
            { metin: "Üyelerin kaçta kaçı kız?", cevap: "sag", neden: "Grup üyeler, payda 68: *conditional* (48 ÷ 68)." },
            { metin: "Bütün öğrencilerin kaçta kaçı üye?", cevap: "sol", neden: "Tek özellik, payda 200: *marginal* (68 ÷ 200)." }
          ] },
        { tip: "ornek", baslik: "Dört hesap", durum: "Spor kulübü tablosundan dört oran bulalım.",
          adimlar: ["*Joint*, kız ve üye: 48 ÷ 200 = 0,24.", "*Marginal*, üye olanlar: 68 ÷ 200 = 0,34.", "*Conditional*, kızlar arasında üye: 48 ÷ 120 = 0,40.", "*Conditional*, erkekler arasında üye: 20 ÷ 80 = 0,25."],
          sonuc: "Kızların %40'ı, erkeklerin %25'i üye. Oranlar farklı, ilişkiyi bu iki *conditional* oran karşılaştırarak yorumlarız." },
        { tip: "tuzak", baslik: "Yön önemli", metin: "\"Kızlar arasında üye\" ile \"üyeler arasında kız\" farklı gruplardan bahseder; ikisini aynı sanmak çok yapılan bir hatadır.", yanlis: "Kızlar arasında üye oranı ile üyeler arasında kız oranı aynıdır.", dogru: "Kızlar arasında üye: 48 ÷ 120 = 0,40. Üyeler arasında kız: 48 ÷ 68 ≈ 0,71. Payda grubun toplamıdır." }
      ]
    },
    {
      baslik: "İlişki (*association*) var mı?",
      kisa: "Koşullu oranlar gruplar arasında farklıysa değişkenler ilişkilidir.",
      bloklar: [
        { tip: "grafik", baslik: "Kızlar ve erkekler: kulübe üyelik oranı", xlabel: "Cinsiyet", ylabel: "Yüzde", xmax: 6, ymax: 10,
          xticks: [{ v: 1.5, label: "Kız" }, { v: 4.5, label: "Erkek" }],
          yticks: [{ v: 0, label: "0" }, { v: 5, label: "%50" }, { v: 10, label: "%100" }],
          ogeler: [
            { id: "ku", tip: "alan", renk: 0, noktalar: [[0.5, 0], [0.5, 4], [2.5, 4], [2.5, 0]], gizli: true },
            { id: "kd", tip: "alan", renk: 1, noktalar: [[0.5, 4], [0.5, 10], [2.5, 10], [2.5, 4]], gizli: true },
            { id: "kuy", tip: "yazi", x: 1.5, y: 1.6, metin: "Üye %40", gizli: true },
            { id: "kdy", tip: "yazi", x: 1.5, y: 6.7, metin: "Değil %60", gizli: true },
            { id: "eu", tip: "alan", renk: 0, noktalar: [[3.5, 0], [3.5, 2.5], [5.5, 2.5], [5.5, 0]], gizli: true },
            { id: "ed", tip: "alan", renk: 1, noktalar: [[3.5, 2.5], [3.5, 10], [5.5, 10], [5.5, 2.5]], gizli: true },
            { id: "euy", tip: "yazi", x: 4.5, y: 0.9, metin: "Üye %25", gizli: true },
            { id: "edy", tip: "yazi", x: 4.5, y: 6, metin: "Değil %75", gizli: true },
            { id: "gen", tip: "cizgi", renk: 3, kesik: true, from: [0.5, 3.4], to: [5.5, 3.4], etiket: "", gizli: true }
          ],
          durumlar: [
            { metin: "Kızlar (120 kişi): üye 48 ÷ 120 = %40, üye değil 72 ÷ 120 = %60.", goster: ["ku", "kd", "kuy", "kdy"] },
            { metin: "Erkekler (80 kişi): üye 20 ÷ 80 = %25, üye değil 60 ÷ 80 = %75.", goster: ["eu", "ed", "euy", "edy"] },
            { metin: "Kesikli çizgi genel üyelik oranı: 68 ÷ 200 = %34. İlişki olmasaydı iki çubukta da üye dilimi %34 olurdu; oysa %40 ve %25 ==farklı==.", goster: ["gen"] }
          ] },
        { tip: "ornek", baslik: "İlişkiyi yorumla", durum: "Kız ve erkeklerin üyelik oranlarını bağlamıyla yorumlayalım.",
          adimlar: ["*Conditional* oranlar: kızlar %40, erkekler %25.", "Fark: 40 − 25 = 15 yüzde puan. Oranlar eşit değil, dolayısıyla örneklemde ilişki var.", "Bağlamla yaz: değişken adları ve gruplar cümlede geçsin."],
          sonuc: "Bu örneklemde cinsiyet ile spor kulübüne üyelik arasında bir ilişki var: kızların %40'ı, erkeklerin %25'i üye. Örneklemdeki küçük farkların tesadüf olup olmadığını ileride öğreneceğin *significance test*'ler cevaplar." }
      ]
    },
    {
      baslik: "*Simpson's paradox*: gruplar birleşince sonuç tersine dönebilir",
      kisa: "Her grupta bir yön görülürken birleşik veride ters yön çıkabilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔄", terim: "Simpson's paradox", tr: "Simpson paradoksu", tanim: "Gruplar ayrı ayrı bakıldığında görülen ilişki, gruplar ==birleştirilince tersine dönebilir==. Nedeni genellikle grup bileşimini değiştiren üçüncü bir değişkendir.", ornek: "Ada her mesafede Deniz'den iyi atıyor; ama toplam yüzdede Deniz önde görünüyor." }
          ] },
        { tip: "grafik", baslik: "Serbest atış isabet oranı: Ada (mavi), Deniz (kırmızı)", xlabel: "Atış türü", ylabel: "İsabet", xmax: 9, ymax: 10,
          xticks: [{ v: 1.5, label: "Yakın" }, { v: 4.5, label: "Uzak" }, { v: 7.5, label: "Toplam" }],
          yticks: [{ v: 0, label: "0" }, { v: 5, label: "%50" }, { v: 10, label: "%100" }],
          ogeler: [
            { id: "ay", tip: "alan", renk: 0, noktalar: [[0.5, 0], [0.5, 9], [1.5, 9], [1.5, 0]], gizli: true },
            { id: "dy", tip: "alan", renk: 2, noktalar: [[1.5, 0], [1.5, 8], [2.5, 8], [2.5, 0]], gizli: true },
            { id: "ayl", tip: "yazi", x: 1, y: 9.6, metin: "%90", gizli: true },
            { id: "dyl", tip: "yazi", x: 2, y: 8.6, metin: "%80", gizli: true },
            { id: "au", tip: "alan", renk: 0, noktalar: [[3.5, 0], [3.5, 2], [4.5, 2], [4.5, 0]], gizli: true },
            { id: "du", tip: "alan", renk: 2, noktalar: [[4.5, 0], [4.5, 1], [5.5, 1], [5.5, 0]], gizli: true },
            { id: "aul", tip: "yazi", x: 4, y: 2.8, metin: "%20", gizli: true },
            { id: "dul", tip: "yazi", x: 5, y: 1.8, metin: "%10", gizli: true },
            { id: "at", tip: "alan", renk: 0, noktalar: [[6.5, 0], [6.5, 2.6], [7.5, 2.6], [7.5, 0]], gizli: true },
            { id: "dt", tip: "alan", renk: 2, noktalar: [[7.5, 0], [7.5, 7.4], [8.5, 7.4], [8.5, 0]], gizli: true },
            { id: "atl", tip: "yazi", x: 7, y: 3.4, metin: "%26", gizli: true },
            { id: "dtl", tip: "yazi", x: 8, y: 8.2, metin: "%74", gizli: true }
          ],
          durumlar: [
            { metin: "Yakın atışlar: Ada 9 ÷ 10 = %90, Deniz 80 ÷ 100 = %80. Ada önde.", goster: ["ay", "dy", "ayl", "dyl"] },
            { metin: "Uzak atışlar: Ada 20 ÷ 100 = %20, Deniz 1 ÷ 10 = %10. Yine Ada önde.", goster: ["au", "du", "aul", "dul"] },
            { metin: "Toplam: Ada 29 ÷ 110 ≈ %26, Deniz 81 ÷ 110 ≈ %74. ==Sıralama tersine döndü!==", goster: ["at", "dt", "atl", "dtl"] }
          ] },
        { tip: "ornek", baslik: "Paradoks nereden çıkıyor?", durum: "İkisi de 110 atış yaptı ama atışların türü çok farklı dağıldı.",
          adimlar: ["Ada: 10 yakın, 100 uzak atış; toplam isabet 9 + 20 = 29.", "Deniz: 100 yakın, 10 uzak atış; toplam isabet 80 + 1 = 81.", "Üçüncü değişken atış mesafesi: Deniz atışlarının çoğunu kolay yerden, Ada zor yerden denedi."],
          sonuc: "Toplam yüzde, grupların bileşimini (kaç yakın, kaç uzak atış) gizler. Birleşik veriyle ayrı grupların sonucu çeliştiğinde üçüncü değişkene bak." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Joint relative frequency*: hücre ÷ tablo toplamı. İki özellik birden olma oranı.",
            "*Marginal relative frequency*: kenar toplamı ÷ tablo toplamı. Tek değişkenin bir kategorisi.",
            "*Conditional relative frequency*: hücre ÷ o grubun toplamı. \"Arasında\" ve \"olanların\" sözcükleri grubu söyler.",
            "\"Kızlar arasında üye\" ile \"üyeler arasında kız\" farklı paydalar kullanır.",
            "Koşullu oranlar gruplar arasında farklıysa değişkenler ilişkilidir; eşitse ilişki yoktur.",
            "Gruplar farklı büyüklükteyse sayıları değil koşullu oranları karşılaştır.",
            "*Simpson's paradox*: gruplar ayrı ayrı bir yönde, birleşince ters yönde sonuç verebilir; nedeni genellikle üçüncü bir değişkendir.",
            "İlişki sebep-sonuç demek değildir; yorumda değişken adlarını ve grupları kullan."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Tabloya göre sınıf düzeyi ile okuma sıklığı arasında ilişki var mıdır?",
      fig: { type: "table", head: ["", "Sık okur", "Seyrek okur", "Toplam"], rows: [["9. sınıf", "36", "24", "60"], ["10. sınıf", "54", "36", "90"], ["Toplam", "90", "60", "150"]], caption: "Sınıf düzeyi ve okuma sıklığı (150 öğrenci)" },
      opts: ["Evet, çünkü 10. sınıfta sık okuyan sayısı daha fazla.", "Hayır, çünkü sık okuyanların oranı iki sınıfta da %60.", "Evet, çünkü 9. sınıfta seyrek okuma oranı daha yüksek.", "Karar vermek için sınıfların eşit büyüklükte olması gerekir."],
      a: 1, why: "Koşullu oranlar: 9. sınıfta 36 ÷ 60 = %60, 10. sınıfta 54 ÷ 90 = %60; eşit olduğundan örneklemde ilişki görünmez. A yanlış: sayılar büyüklüğe bağlıdır, oranlar karşılaştırılır; C de yanlış, seyrek oranları da %40 ve %40'tır." },
    { q: "Aynı tabloya göre \"10. sınıf ve seyrek okur\" öğrencilerin tüm öğrenciler içindeki oranı (*joint relative frequency*) kaçtır?",
      fig: { type: "table", head: ["", "Sık okur", "Seyrek okur", "Toplam"], rows: [["9. sınıf", "36", "24", "60"], ["10. sınıf", "54", "36", "90"], ["Toplam", "90", "60", "150"]], caption: "Sınıf düzeyi ve okuma sıklığı (150 öğrenci)" },
      opts: ["0,24", "0,40", "0,60", "0,36"],
      a: 0, why: "*Joint*: hücre ÷ tablo toplamı = 36 ÷ 150 = 0,24. 0,40 = 36 ÷ 90; bu, 10. sınıflar arasında seyrek okuma oranıdır (*conditional*). 0,36 ise sık okuyan 10. sınıfların oranıdır (54 ÷ 150)." },
    { q: "İki kargo şirketi A ve B'nin zamanında teslim oranlarına bakılıyor. Hem hafif hem ağır paketlerde A, B'den daha yüksek oranda zamanında teslim etmiş; ama bütün paketler birleştirilince B daha iyi görünüyor. En olası açıklama nedir?",
      opts: ["Veri yanlıştır; böyle bir durum olamaz.", "Şirketler arasında hiçbir ilişki yoktur.", "Paket ağırlığı gibi üçüncü bir değişken, şirketlerin paket bileşimini farklılaştırıyor (*Simpson's paradox*).", "A şirketi her zaman daha kötü olmalıdır."],
      a: 2, why: "Gruplar birleşince oranlar her şirketin ağırlıklı olarak hangi tür paket taşıdığına göre değişir; bu *Simpson's paradox*'tur. A yanlış: matematiksel olarak mümkündür, atış örneğindeki gibi." },
    { q: "Aşağıdaki tabloya göre \"spor kulübü üyeleri arasında kız öğrencilerin oranı\" hangi kesirle bulunur?",
      fig: { type: "table", head: ["", "Üye", "Üye değil", "Toplam"], rows: [["Kız", "48", "72", "120"], ["Erkek", "20", "60", "80"], ["Toplam", "68", "132", "200"]], caption: "Spor kulübü üyeliği (200 öğrenci)" },
      opts: ["48 ÷ 200", "48 ÷ 120", "68 ÷ 200", "48 ÷ 68"],
      a: 3, why: "\"Üyeler arasında\" grubu üyelerdir; payda üyelerin toplamı olan 68. 48 ÷ 120 kızlar arasında üye oranıdır (yön ters). 48 ÷ 200 *joint*, 68 ÷ 200 *marginal* orandır." },
    { q: "Bir okulda 60 servis ve 60 toplu taşıma kullanan öğrenciden servisten gelenlerin 6'sı, toplu taşımadan gelenlerin 24'ü geç kalmıştır. Bu verilerle hangi sonuç desteklenir?",
      opts: ["Toplu taşıma kullanmak öğrencilerin geç kalmasına neden olur.", "Geliş şekli ile geç kalma ilişkilidir: toplu taşıma kullananların geç kalma oranı daha yüksektir.", "Geç kalan öğrencilerin çoğu servisle gelmektedir.", "Servis kullananların geç kalma oranı %60'tır."],
      a: 1, why: "Koşullu oranlar %10 ve %40 olduğu için geliş şekli ile geç kalma arasında ilişki vardır. A yanlış: gözlemsel veride ilişki sebep-sonuç göstermez. C yanlış: geç kalan 30 kişinin 24'ü toplu taşımayla gelmiş." }
  ]
};
