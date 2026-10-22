/* Kitora not defteri · ep01 · Coğrafya Nedir?
   Kaynak: ap-videolar/src/episodes/ep01 (script.ts) + AP HuG Unit 1 standart içeriği. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ep01",
  ozet: "Coğrafya başkent ezberi değil, iki sorudur: ==nerede?== ve ==neden orada?== Bu defterde *physical* ile *human geography* farkını, *spatial perspective*'i, Pattison'un dört geleneğini, Sauer'in *cultural landscape* fikrini ve *quantitative* ile *qualitative* veriyi göreceksin.",
  bolumler: [
    {
      baslik: "Coğrafyanın iki sorusu",
      bloklar: [
        { tip: "hikaye", ikon: "🗺️", baslik: "Başkent ezberlemek mi?",
          metin: "Coğrafya denince aklına başkent ezberlemek geliyorsa, onu unut. Coğrafyanın sadece iki sorusu var: **insanlar ve yaptıkları şeyler nerede?** Ve **neden orada?** Dünya haritasında şehirler, yollar, diller, dinler, fabrikalar... hepsi bu iki sorunun cevabıdır." },
        { tip: "formul", parcalar: [
            { t: "Nerede?", alt: "bir şeyin yeri ve dağılımı" }, "+",
            { t: "Neden orada?", alt: "yerin nedenleri" }, "=",
            { t: "Coğrafi düşünce", alt: "AP Human Geography'nin özü" }
          ], aciklama: "Haritada bir nokta gördüğünde önce yerini, sonra o yerde olmasının sebebini sor." },
        { tip: "not", metin: "Bu sorular ezberle cevaplanmaz; düşünerek cevaplanır. Bu yüzden sınavda ==\"nedenini açıkla\"== tarzı sorular çıkar." }
      ]
    },
    {
      baslik: "İki büyük kol: doğa ve insan",
      bloklar: [
        { tip: "ikili", sol: { ikon: "⛰️", baslik: "*Physical geography*", maddeler: ["Doğayı inceler", "İklim, dağlar, nehirler, topraklar", "Örnek: bir nehrin yatağını nasıl oyduğu"] },
          sag: { ikon: "🏙️", baslik: "*Human geography*", maddeler: ["İnsanı inceler", "Nüfus, kültür, şehirler, ekonomi", "Örnek: şehrin neden o nehir kıyısında kurulduğu"] },
          oyun: [
            { metin: "Akdeniz ikliminin hangi enlemlerde görüldüğünü incelemek.", cevap: "sol", neden: "İklim doğanın konusudur: *physical*." },
            { metin: "Bir ülkede nüfusun şehirlerde toplanması.", cevap: "sag", neden: "Nüfus insanın konusudur: *human*." },
            { metin: "Dağ sıralarının nasıl oluştuğunu anlatmak.", cevap: "sol", neden: "Yer şekilleri doğal süreçtir: *physical*." },
            { metin: "İstanbul'da mağazaların hangi semtlerde toplandığı.", cevap: "sag", neden: "Ekonomik faaliyetin dağılımı: *human*." },
            { metin: "Dillerin ve dinlerin dünyaya yayılışı.", cevap: "sag", neden: "Kültür insanın ürünüdür: *human*." }
          ] },
        { tip: "not", metin: "Bu derste ağırlık **insan tarafında**. Ama iki kol sürekli birbirine dokunur: nehir şehre akar, şehir nehri değiştirir." }
      ]
    },
    {
      baslik: "Doğa ile toplumun kesişimi",
      bloklar: [
        { tip: "harita", merkez: "Doğa ⇄ toplum ilişkisi", dallar: [
            { baslik: "*Environmental geography*", alt: "İki kolun kesiştiği yer: insan çevreyi nasıl değiştirir, çevre insanı nasıl etkiler?" },
            { baslik: "*Cultural ecology*", alt: "İnsanların yaşadığı ortama nasıl uyum sağladığı" },
            { baslik: "İnsan → çevre", alt: "Baraj nehrin akışını değiştirir" },
            { baslik: "Çevre → insan", alt: "Kuraklık çiftçiyi göçe zorlar" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🌍", terim: "Physical geography", tr: "fiziki coğrafya", tanim: "Doğal ortamı inceleyen kol: iklim, yer şekilleri, su, toprak.", ornek: "Bir nehrin taşkın düzlüğünü nasıl oluşturduğu." },
            { ikon: "👥", terim: "Human geography", tr: "beşerî coğrafya", tanim: "İnsanın ve insan faaliyetlerinin mekândaki dağılımını inceleyen kol.", ornek: "Göçmenlerin hangi mahallelerde toplandığı." },
            { ikon: "🔁", terim: "Environmental geography", tr: "çevre coğrafyası", tanim: "Doğa ile toplum arasındaki karşılıklı ilişkiyi inceler. ==İki yönlüdür:== insan çevreyi, çevre de insanı etkiler.", ornek: "Baraj nehrin akışını değiştirir; kuraklık çiftçiyi göç etmeye zorlar." },
            { ikon: "🏜️", terim: "Cultural ecology", tr: "kültürel ekoloji", tanim: "İnsanların yaşadıkları ortama nasıl uyum sağladığını inceleyen yaklaşım.", ornek: "Çölde kalın duvarlı, küçük pencereli evler; çok yağmur alan yerlerde dik çatılar." }
          ] },
        { tip: "tuzak", metin: "*Environmental geography* yalnız \"insan doğaya zarar verir\" demek değildir.", yanlis: "Çevre coğrafyası sadece insanın çevreye etkisini inceler.", dogru: "İlişki ==iki yönlüdür==: insan çevreyi değiştirir, çevre de insanı (kuraklık, taşkın, iklim) etkiler." }
      ]
    },
    {
      baslik: "Coğrafyacının gözlüğü: *spatial perspective*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👓", terim: "Spatial perspective", tr: "mekânsal bakış açısı", tanim: "Coğrafyacıyı diğer bilim insanlarından ayıran bakış. Her konuya mekân gözüyle bakar.", ornek: "Kahve zincirlerinin şubeleri neden hep kalabalık caddelerde ve birbirine bu kadar yakın?" }
          ] },
        { tip: "adimlar", baslik: "Her konuda üç soru", adimlar: [
            { baslik: "Bu şey nerede?", metin: "Yerini ve dağılımını bul: hangi caddeler, hangi mahalleler?" },
            { baslik: "Neden orada?", metin: "Yerin nedenini ara: kalabalık, ulaşım, fiyat, doğal koşullar." },
            { baslik: "Başka yerlerle nasıl ilişkili?", metin: "Komşu yerlerle, yollarla, müşterilerle bağlantısını incele." }
          ] },
        { tip: "grafik", baslik: "Kahve zincirleri neden ana caddede?", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "h1", tip: "cizgi", renk: 0, from: [0.3, 2], to: [9.7, 2] },
            { id: "h3", tip: "cizgi", renk: 0, from: [0.3, 8], to: [9.7, 8] },
            { id: "v1", tip: "cizgi", renk: 0, from: [2, 0.3], to: [2, 9.7] },
            { id: "v2", tip: "cizgi", renk: 0, from: [8, 0.3], to: [8, 9.7] },
            { id: "main", tip: "cizgi", renk: 1, from: [0.3, 5], to: [9.7, 5] },
            { id: "mainl", tip: "yazi", x: 9.6, y: 5.6, metin: "ana cadde", hiza: "end" },
            { id: "k1", tip: "nokta", x: 1.2, y: 5, gizli: true },
            { id: "k2", tip: "nokta", x: 2.9, y: 5, gizli: true },
            { id: "k3", tip: "nokta", x: 4.0, y: 5, gizli: true },
            { id: "k4", tip: "nokta", x: 5.4, y: 5, gizli: true },
            { id: "k5", tip: "nokta", x: 6.6, y: 5, gizli: true },
            { id: "k6", tip: "nokta", x: 8.8, y: 5, gizli: true },
            { id: "c1", tip: "cizgi", renk: 2, kesik: true, from: [1.2, 5], to: [2.9, 5], gizli: true },
            { id: "c2", tip: "cizgi", renk: 2, kesik: true, from: [2.9, 5], to: [4.0, 5], gizli: true },
            { id: "c3", tip: "cizgi", renk: 2, kesik: true, from: [4.0, 5], to: [5.4, 5], gizli: true },
            { id: "c4", tip: "cizgi", renk: 2, kesik: true, from: [5.4, 5], to: [6.6, 5], gizli: true },
            { id: "c5", tip: "cizgi", renk: 2, kesik: true, from: [6.6, 5], to: [8.8, 5], gizli: true },
            { id: "w1", tip: "yazi", x: 5, y: 3.3, metin: "Neden? Kalabalık = müşteri", gizli: true },
            { id: "w2", tip: "yazi", x: 5, y: 7, metin: "Birbirleriyle ilişkili", gizli: true }
          ],
          durumlar: [
            { metin: "Bir şehrin kuşbakışı planı: sokaklar ve ortadan geçen ==ana cadde==." },
            { metin: "**Nerede?** Kafe şubeleri sokaklara rastgele değil, hep ana caddeye dizilmiş.", goster: ["k1", "k2", "k3", "k4", "k5", "k6"] },
            { metin: "**Neden orada?** Ana cadde kalabalıktır; kalabalık müşteri demektir.", goster: ["w1"] },
            { metin: "**Başka yerlerle nasıl ilişkili?** Şubeler birbirine yakındır ve aynı müşteri akışını paylaşır.", goster: ["c1", "c2", "c3", "c4", "c5", "w2"] }
          ] },
        { tip: "not", metin: "Kahve zincirleri sorusu bir ==*spatial*== sorudur: yer (nerede), neden (kalabalık) ve ilişki (yakın şubeler) birlikte düşünülür." }
      ]
    },
    {
      baslik: "Pattison'un dört geleneği",
      bloklar: [
        { tip: "not", metin: "William Pattison coğrafyayı **dört gelenek** olarak sınıflandırdı. Sınavda ==\"hangisi dört gelenekten biri değildir?\"== diye sorulabilir." },
        { tip: "harita", merkez: "Pattison · *four traditions*", dallar: [
            { baslik: "1 · *Earth-science*", alt: "Fiziki dünyanın kendisi: iklim kuşakları, depremler" },
            { baslik: "2 · *Culture-environment*", alt: "İnsan–çevre ilişkisi: dik yamaçlara teras yaparak tarım" },
            { baslik: "3 · *Locational*", alt: "Konum, mesafe, dağılım: marketler neden ana caddelerde toplanır?" },
            { baslik: "4 · *Area-analysis*", alt: "Bölgeleri inceleyip karşılaştırmak: Akdeniz kıyısını diğer bölgelerden ayıran ne?" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🌋", terim: "Earth-science tradition", tr: "yer bilimi geleneği", tanim: "Fiziki dünyanın kendisini inceler.", ornek: "İklim kuşakları ya da depremler." },
            { ikon: "🌱", terim: "Culture-environment tradition", tr: "kültür–çevre geleneği", tanim: "İnsan ile çevre arasındaki ilişkiye bakar.", ornek: "Dik yamaçlara teras yaparak tarım yapmak." },
            { ikon: "📍", terim: "Locational tradition", tr: "konumsal gelenek", tanim: "Konum, mesafe ve dağılımı inceler.", ornek: "Marketler neden hep ana caddelerde toplanır?" },
            { ikon: "🧩", terim: "Area-analysis tradition", tr: "alan analizi geleneği", tanim: "Bölgeleri inceleyip birbiriyle karşılaştırır.", ornek: "Akdeniz kıyısını diğer bölgelerden ayıran nedir?" }
          ] },
        { tip: "tuzak", metin: "Sınav çeldiricisi: \"*Political tradition*\" gibi kulağa uygun gelen uydurma bir gelenek.", yanlis: "Dört gelenekten biri *political tradition*'dır.", dogru: "Dördü *earth-science*, *culture-environment*, *locational* ve *area-analysis*'tir. Siyasi bir gelenek yoktur." }
      ]
    },
    {
      baslik: "Sauer'in kültürel peyzajı",
      bloklar: [
        { tip: "not", metin: "Carl Sauer'e göre bir manzaranın değişmesini sağlayan üç şey vardır. Bunu bir cümleyle akılda tut: **kültür etkendir, doğa ortamdır, *cultural landscape* ise sonuçtur.**" },
        { tip: "formul", parcalar: [
            { t: "Kültür", alt: "etken (agent)" }, "+",
            { t: "Doğa", alt: "ortam (medium)" }, "→",
            { t: "*Cultural landscape*", alt: "sonuç (result)" }
          ], aciklama: "Doğa malzemeyi verir, insan kültürüyle onu biçimlendirir." },
        { tip: "adimlar", baslik: "Bir vadi nasıl kültürel peyzaja dönüşür?", adimlar: [
            { baslik: "*Natural landscape*", metin: "El değmemiş bir vadi: dağlar, nehir, ağaçlar. İnsan izi yok." },
            { baslik: "Tarlalar ve yollar", metin: "İnsanlar tarla şeritleri açar, yol çeker." },
            { baslik: "Evler, cami, köprü", metin: "Yerleşim kurulur; dini ve kamusal yapılar yükselir." },
            { baslik: "*Cultural landscape*", metin: "Vadi artık bir halkın izini taşır: ==insanın doğaya bıraktığı imza.==" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🏞️", terim: "Natural landscape", tr: "doğal peyzaj", tanim: "İnsan etkisinden uzak, doğal haliyle manzara.", ornek: "Orman ve nehirden ibaret el değmemiş vadi." },
            { ikon: "🕌", terim: "Cultural landscape", tr: "kültürel peyzaj", tanim: "Bir kültürün doğal manzara üzerine bıraktığı görünür izlerin toplamı.", ornek: "Teraslı tarlalar, yollar, evler ve bir cami eklenmiş vadi." }
          ] },
        { tip: "tuzak", metin: "Kültür ile doğanın rolünü ters çevirmek sık yapılan hatadır.", yanlis: "Doğa etkendir, kültür ortamdır; peyzajı doğa oluşturur.", dogru: "Sauer'de ==kültür etken==, doğa ortamdır; *cultural landscape* ise bu etkileşimin sonucudur." }
      ]
    },
    {
      baslik: "Veri: sayı mı söz mü?",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔢", baslik: "*Quantitative data*", maddeler: ["Sayıdır; ölçülür", "Tartışmaya açık değildir", "Örnek: nüfus, gelir, sıcaklık"] },
          sag: { ikon: "💬", baslik: "*Qualitative data*", maddeler: ["Söze ve gözleme dayanır", "Yoruma açıktır", "Örnek: röportajlar, gözlemler, insanların bir yer hakkındaki düşünceleri"] },
          oyun: [
            { metin: "Şehrin nüfusu 16 milyon.", cevap: "sol", neden: "Sayı ve ölçüm: *quantitative*." },
            { metin: "Şehir çok kalabalık hissettiriyor.", cevap: "sag", neden: "His ve yorum: *qualitative*." },
            { metin: "Bugün sıcaklık 24 °C.", cevap: "sol", neden: "Ölçülmüş sayı: *quantitative*." },
            { metin: "Bir araştırmacı köylülerle röportaj yapıp anlattıklarını not alıyor.", cevap: "sag", neden: "Söze dayanır, sayı değil: *qualitative*." },
            { metin: "Nüfusun %12'si 65 yaş üstü.", cevap: "sol", neden: "Yüzde bir sayıdır: *quantitative*." }
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 16000000, etiket: "şehrin nüfusu → *quantitative*" },
            { deger: 24, sonek: " °C", etiket: "sıcaklık → *quantitative*" },
            { deger: 12, sonek: "%", etiket: "bir oran → *quantitative*" }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "📊", baslik: "Veri nereden gelir?", metin: "Ek bilgi: coğrafyacılar nüfus sayımından, anketlerden, saha gözleminden, röportajlardan ve uydu görüntülerinden yararlanır. Sayım ve ölçümler genelde *quantitative*; röportaj ve gözlem notları *qualitative* olur." }
          ] },
        { tip: "tuzak", metin: "\"Sayı yoksa veri değildir\" gibi düşünmek yanlıştır.", yanlis: "*Qualitative data* değersiz ya da bilimsel değildir.", dogru: "İkisi de veridir. *Quantitative* ölçülür; *qualitative* insanların deneyimini, hissini ve yorumunu yakalar." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Coğrafyanın iki sorusu: ==nerede?== ve ==neden orada?==",
            "*Physical geography* doğayı, *human geography* insanı inceler; kesiştikleri yer *environmental geography*'dir.",
            "*Cultural ecology*: insanların yaşadıkları ortama uyum sağlaması (çöl evleri, dik çatılar).",
            "*Spatial perspective*: nerede, neden orada ve başka yerlerle nasıl ilişkili?",
            "Pattison'un dört geleneği: *earth-science*, *culture-environment*, *locational*, *area-analysis*. Siyasi bir gelenek yok.",
            "Sauer: kültür etkendir, doğa ortamdır, *cultural landscape* sonuçtur.",
            "*Quantitative data* sayıdır (nüfus 16 milyon); *qualitative data* söze ve gözleme dayanır (\"çok kalabalık hissettiriyor\").",
            "Köylülerle yapılan röportaj *qualitative data*'dır."
          ] }
      ]
    }
  ]
};
