/* Kitpath not defteri · hg303 · Kültürel Örüntüler
   Kaynak: AP HuG CED Topic 3.3 (PSO-3.D). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg303",
  amac: "Bu konu dil, din, etnik köken ve cinsiyetin haritada nasıl örüntüler oluşturduğunu anlatıyor. *Sense of place*, *placemaking* ile bu farkların bir ülkeyi birleştiren (*centripetal*) ya da bölen (*centrifugal*) güçler olarak nasıl çalıştığını öğreneceksin.",
  bolumler: [
    {
      baslik: "Dört örüntü: dil, din, etnik köken, cinsiyet",
      kisa: "Bu dört özellik yerden yere değişir ve küresel kültürel peyzajı şekillendirir.",
      bloklar: [
        { tip: "harita", merkez: "Kültürel örüntüler", dallar: [
            { baslik: "Dil", alt: "hangi dil nerede konuşuluyor" },
            { baslik: "Din", alt: "inançların dağılımı" },
            { baslik: "Etnik köken", alt: "ortak ata ve gelenek" },
            { baslik: "Cinsiyet", alt: "toplumsal roller ve beklentiler" }
          ] },
        { tip: "tablo", baslik: "Her örüntü peyzajda nasıl görünür?", head: ["Örüntü", "Peyzajdaki iz", "Örnek"], rows: [
            ["Dil", "Tabela, yer adı, kitabevi", "Kanada'da iki dilli (İngilizce-Fransızca) tabelalar"],
            ["Din", "İbadethane, mezarlık, bayram", "Minare, çan kulesi, tapınak silueti"],
            ["Etnik köken", "Mahalle, yemek, festival", "Chinatown, Kreuzberg çarşıları"],
            ["Cinsiyet", "Mekân ve iş bölümü", "İş yeri, okul ve kamusal alan düzenleri"]
          ] }
      ]
    },
    {
      baslik: "*Sense of place* ve *placemaking*",
      kisa: "İnsanlar bir yere anlam yükler ve ona bilinçli olarak kimlik kazandırır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💗", terim: "Sense of place", tr: "yer duygusu", tanim: "İnsanların bir yere duyduğu bağlılık ve ona yüklediği anlam. Ortak dil, din ve etnik kökenle güçlenir.", ornek: "Mahallesi için \"burası benim yerim\" diyen bir lise öğrencisi." },
            { ikon: "🎨", terim: "Placemaking", tr: "yer yapma", tanim: "İnsanların bir mekânı kullanıp bezeyerek ona kimlik kazandırması. Sokak sanatı, festival, tabela ve meydan düzeni bunun araçlarıdır.", ornek: "Mahalle pazarında duvar resmi yapıp her yıl festival düzenlemek." }
          ] },
        { tip: "ornek", baslik: "Meydan nasıl kimlik kazanır?", durum: "Bir kasabanın meydanı boştu. Halk çeşme yaptı, çınar ağaçları dikti, yöresel yemek festivali başlattı ve tabelaları ana dilde yazdı. Ne oldu?",
          adimlar: ["Meydan, ortak anlamlar yüklenmiş bir mekâna dönüştü.", "Bu bilinçli çabaya *placemaking* denir.", "Festival ve tabelalar ortak dili ve gelenekleri görünür kıldı."],
          sonuc: "Halk ==*placemaking*== ile meydana kimlik kazandırdı; böylece insanların o yere duyduğu ==*sense of place*== güçlendi." }
      ]
    },
    {
      baslik: "Örüntüler küresel kültürel peyzajı şekillendirir",
      kisa: "Bölgesel dil, din ve etnik örüntüler dünyanın kültürel haritasını oluşturur.",
      bloklar: [
        { tip: "not", metin: "Bölgesel *language*, *religion* ve *ethnicity* örüntüleri hem yerel yer duygusunu hem de dünya ölçeğinde kültürel peyzajı oluşturur. Örneğin Latin Amerika'da İspanyolca ve Katoliklik, Güney Asya'da farklı diller ve dinler, Orta Doğu'da Arapça ve İslam belirgindir. Cinsiyet rollerine bakış da (örneğin kadınların işgücündeki yeri) bölgeden bölgeye değişir." },
        { tip: "liste", maddeler: [
            { ikon: "🗺️", baslik: "Bölgesel kümelenme", metin: "Benzer dil ve din aynı bölgede yoğunlaşır." },
            { ikon: "🪧", baslik: "Peyzaja yansıma", metin: "Tabelalar, ibadethaneler ve yer adları örüntüyü görünür kılar." },
            { ikon: "🔁", baslik: "Zamanla değişim", metin: "Göç ve küreselleşme örüntüleri karıştırır." }
          ] }
      ]
    },
    {
      baslik: "Birleştiren ve bölen güçler",
      kisa: "*Centripetal* güçler birleştirir, *centrifugal* güçler parçalar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧲", baslik: "*Centripetal force* (merkeze çeken)", maddeler: ["Devleti birleştirir, bağları güçlendirir", "Ortak ulusal dil, bayrak, spor takımı, ortak tarih"] },
          sag: { ikon: "💥", baslik: "*Centrifugal force* (merkezden kaçıran)", maddeler: ["Devleti bölmeye, uzaklaştırmaya çalışır", "Azınlık dili, bölgesel kimlik, dinî çatışma"] },
          oyun: [
            { metin: "Endonezya'nın binlerce adasını ortak ulusal dil Bahasa Indonesia'nın birleştirmesi.", cevap: "sol", neden: "Ortak dil ülkeyi bir arada tutuyor: *centripetal*." },
            { metin: "Belçika'da Flamanca ve Fransızca konuşan bölgelerin ayrışması.", cevap: "sag", neden: "Dil farkı bölünme yaratıyor: *centrifugal*." },
            { metin: "Milli takımın maçını bütün ülkenin birlikte izlemesi.", cevap: "sol", neden: "Ortak bir sevinç ve kimlik: *centripetal*." },
            { metin: "Bir bölgenin kendi dilinde eğitim ve ayrı bir devlet istemesi.", cevap: "sag", neden: "Devletten uzaklaşma isteği: *centrifugal*." }
          ] },
        { tip: "grafik", baslik: "Bir devleti iki güç çeker", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "devlet", tip: "nokta", x: 5, y: 5, etiket: "Devlet", kilavuz: true },
            { id: "i1", tip: "ok", renk: 2, from: [1.2, 5], to: [4.3, 5], gizli: true },
            { id: "i2", tip: "ok", renk: 2, from: [8.8, 5], to: [5.7, 5], gizli: true },
            { id: "iy", tip: "yazi", x: 2.7, y: 6.1, metin: "ortak dil, bayrak", gizli: true },
            { id: "o1", tip: "ok", renk: 1, from: [5.5, 6], to: [8.8, 9], gizli: true },
            { id: "o2", tip: "ok", renk: 1, from: [4.5, 4], to: [1.2, 1], gizli: true },
            { id: "oy", tip: "yazi", x: 8.2, y: 9.6, metin: "azınlık dili, ayrılıkçılık", hiza: "end", gizli: true },
            { id: "sonuc", tip: "yazi", x: 5, y: 0.6, metin: "Hangisi baskın? Devletin kaderi bunu belirler.", gizli: true }
          ],
          durumlar: [
            { metin: "Bir devlet. Dil, din ve etnik köken onu iki yönde çekebilir." },
            { metin: "==*Centripetal*== güçler ülkeyi ortak bir kimlik etrafında toplar.", goster: ["i1", "i2", "iy"] },
            { metin: "==*Centrifugal*== güçler ise parçaları dışa doğru, ayrılığa çeker.", goster: ["o1", "o2", "oy"] },
            { metin: "Aynı özellik iki yönde de çalışabilir: ortak dil birleştirir, birden çok dil bölebilir.", goster: ["sonuc"] }
          ] }
      ]
    },
    {
      baslik: "Dil, din ve etnik köken iki yönlü çalışır",
      kisa: "Dil, din ve etnik köken ne kendiliğinden birleştirir ne kendiliğinden böler.",
      bloklar: [
        { tip: "tablo", baslik: "Aynı özellik, iki sonuç", head: ["Özellik", "Birleştirdiği durum", "Böldüğü durum"], rows: [
            ["Dil", "Ortak ulusal dil (Endonezya'da Bahasa Indonesia)", "Bir ülkede birbirine karşı iki büyük dil (Belçika)"],
            ["Din", "Ortak bayram ve değerler", "Mezhep ya da din çatışması"],
            ["Etnik köken", "Çok etnikli ama ortak vatandaşlık duygusu (İsviçre)", "Etnik ayrımcılık ve bölgesel ayrılıkçılık"]
          ] },
        { tip: "tuzak", metin: "Dil, din ya da etnik kökenin tek bir yönü yoktur.", yanlis: "Dil farkı her zaman *centrifugal*'dir; ortak din her zaman *centripetal*'dir.", dogru: "Sonuç ==bağlama göre== değişir. İsviçre çok dilli ama dağılmaz; aynı dinden iki grup ise çatışabilir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Dil, din, etnik köken ve cinsiyet yerden yere değişen kültürel örüntüler oluşturur.",
            "Bu örüntüler küresel kültürel peyzajı şekillendirir ve peyzajda tabela, ibadethane, mahalle gibi izlerle görünür.",
            "*Sense of place*: insanların bir yere duyduğu bağlılık ve yüklediği anlam.",
            "*Placemaking*: insanların bir mekâna bilinçli olarak kimlik kazandırması.",
            "*Centripetal force* devleti birleştirir: ortak dil, ulusal spor takımı, ortak bayrak.",
            "*Centrifugal force* devleti böler: azınlık dili, bölgesel kimlik, çatışma.",
            "Dil, din ve etnik köken bağlama göre iki yönde de çalışabilir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir mahalle, ortak sokak sanatı, yöresel yemek festivali ve ana dilde tabelalarla kendine özgü bir kimlik kazanıyor. Bu süreç hangi kavramla en iyi tanımlanır?",
      opts: ["*Sequent occupance*", "*Centrifugal force*", "*Placemaking*", "*Ethnocentrism*"],
      a: 2,
      why: "İnsanların bilinçli olarak bir mekâna kimlik kazandırması *placemaking*'dir. A şıkkı çekici ama yanlış: *sequent occupance* sırayla farklı halkların kullanımını anlatır." },
    { q: "Bir ülkede ana dilin dışında birkaç büyük dil daha konuşuluyor ve bölgeler kendi dillerinde eğitim ve özerklik istiyor. Bu durum nasıl yorumlanır?",
      opts: ["*Centripetal force* örneği; çünkü dil kimliği güçlendirir", "*Centrifugal force* örneği; çünkü dil farkı bölünmeyi besler", "Yalnızca *sense of place* örneği", "*Placemaking*'in sonucu"],
      a: 1,
      why: "Devleti bölebilecek bölgesel dil talepleri *centrifugal*'dir. A şıkkı yanıltıcı: dil kimliği güçlendirir ama burada ülkenin bütünlüğüne karşı çalışıyor." },
    { q: "Endonezya'da ülkenin birçok adasında farklı yerel diller konuşulmasına karşın hükümet ortak bir ulusal dilin kullanılmasını teşvik ediyor. Bu politikanın amacı hangisidir?",
      opts: ["*Centripetal* gücü artırmak", "Etnik çeşitliliği tamamen ortadan kaldırmak", "*Centrifugal* gücü artırmak", "Yerli dilleri yaymak"],
      a: 0,
      why: "Ortak ulusal dil, farklı adaları ortak bir kimlik altında toplayan *centripetal* bir güçtür. D şıkkı en çekici yanlış: ortak dil çoğu zaman yerel dillerin yerini almaya yönelir." },
    { q: "Aşağıdaki tabloya göre hangi sonuca ulaşılabilir?",
      fig: { type: "table", caption: "İki ülke", head: ["Ülke", "Konuşulan diller", "Ayrılıkçı hareket"], rows: [["P", "Dört", "Yok"], ["Q", "İki", "Güçlü"]] },
      opts: ["Dil sayısı arttıkça ayrılıkçılık kesinlikle artar", "P ülkesi mutlaka dağılacaktır", "Q ülkesinde *centripetal* güçler yoktur", "Dil sayısı tek başına ayrılıkçılığı açıklamaz; başka etkenler de önemlidir"],
      a: 3,
      why: "Çok dilli bir ülke (P) birliğini koruyabilir, iki dilli bir ülke (Q) bölünebilir: bağlam belirleyicidir. A şıkkı çekici ama genelleme: tablo böyle bir kesinlik sunmaz." },
    { q: "Hangisi *sense of place* ile en iyi ilişkilidir?",
      opts: ["Bir ülkenin dil politikasının bölünmeyi önlemesi", "Bir devletin sınırlarının uluslararası anlaşmayla belirlenmesi", "Bir mahalle sakininin, mahallesine duyduğu bağlılık ve ona yüklediği anlam", "Bir dinin yeni bölgelere yayılması"],
      a: 2,
      why: "*Sense of place* insanların bir yere duyduğu bağlılıktır. A şıkkı devlet birliğiyle ilgili; bu bir *centripetal* güçtür, yer duygusu değil." }
  ]
};
