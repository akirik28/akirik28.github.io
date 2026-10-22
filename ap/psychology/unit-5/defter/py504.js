/* Kitora not defteri · py504 · 5.4 Psikolojik Bozukluk Kategorileri
   Kaynak: College Board CED, Topic 5.4 (5.4.A–J). Blok türleri: /ap/_kit/defter.js başı.
   Dil: tanılar olgusal anlatılır; "bozukluğu olan kişi" biçimi kullanılır, kimseye tanı konmaz. */
window.DEFTER = {
  slug: "py504",
  amac: "Bu konu AP sınavında geçen psikolojik bozukluk kategorilerini tanıtıyor: nörogelişimsel, şizofreni spektrumu, depresif, bipolar, kaygı, obsesif-kompulsif, ayrışma, travma, yeme ve kişilik bozuklukları. Her kategorinin belirtilerini ve olası nedenlerini olgusal biçimde öğreneceksin.",
  bolumler: [
    {
      baslik: "Nörogelişimsel bozukluklar: ADHD ve ASD",
      kisa: "Gelişim döneminde başlar; belirtiler yaşa uygun davranışla karşılaştırılır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌱", terim: "Neurodevelopmental disorders", tr: "nörogelişimsel bozukluklar", tanim: "Başlangıcı gelişim dönemine denk gelen bozukluklar. Belirtiler kişinin yaşına ya da olgunluk düzeyine uygun davranıp davranmadığına bakılarak değerlendirilir. Olası nedenler çevresel, fizyolojik ya da genetiktir." },
            { ikon: "🎯", terim: "ADHD", tr: "dikkat eksikliği / hiperaktivite bozukluğu", tanim: "Süregelen dikkat dağınıklığı ve/veya aşırı hareketlilik ile düşünmeden davranma örüntüsü.", ornek: "Ders boyunca dikkatini sürdürmekte güçlük çekmek, yerinde duramamak." },
            { ikon: "🧩", terim: "Autism spectrum disorder (ASD)", tr: "otizm spektrum bozukluğu", tanim: "Sosyal iletişimde ve etkileşimde farklılıklar ile sınırlı, tekrarlayıcı davranış ve ilgi alanları.", ornek: "Göz teması ve sohbet sürdürmede güçlük; belirli konulara yoğun ilgi, rutinlere bağlılık." }
          ] },
        { tip: "ikili", sol: { ikon: "🎯", baslik: "ADHD", maddeler: ["Dikkati sürdürme güçlüğü", "Aşırı hareketlilik, düşünmeden davranma"] },
          sag: { ikon: "🧩", baslik: "ASD", maddeler: ["Sosyal iletişimde farklılıklar", "Tekrarlayıcı davranışlar, sınırlı ilgiler"] },
          oyun: [
            { metin: "Sınıfta yerinde duramıyor ve sırasını beklemeden konuşuyor.", cevap: "sol", neden: "Hareketlilik ve düşünmeden davranma: ADHD." },
            { metin: "Aynı rutini her gün aynı sırayla yapmaya ihtiyaç duyuyor ve değişince çok rahatsız oluyor.", cevap: "sag", neden: "Tekrarlayıcı davranış, rutine bağlılık: ASD." },
            { metin: "Ödev yaparken sık sık dikkati dağılıyor ve işi bitiremiyor.", cevap: "sol", neden: "Dikkati sürdürme güçlüğü: ADHD." },
            { metin: "Konuşma sırasını ve ifadeleri anlamakta zorlanıyor, belirli konulara çok yoğun ilgi duyuyor.", cevap: "sag", neden: "Sosyal iletişim farkı ve sınırlı ilgi: ASD." }
          ] }
      ]
    },
    {
      baslik: "Şizofreni spektrumu: beş belirti alanı",
      kisa: "Sanrı, varsanı, dağınık düşünce, dağınık hareket ve negatif belirtiler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💭", terim: "Delusions", tr: "sanrılar", tanim: "Yanlış inançlar (olumlu belirti). Zulüm sanrısı ya da büyüklük sanrısı olabilir.", ornek: "Herkesin kendisini izlediğine kesin inanmak." },
            { ikon: "👂", terim: "Hallucinations", tr: "varsanılar", tanim: "Yanlış algılar (olumlu belirti); bir ya da birkaç duyuyla ilgili olabilir.", ornek: "Çevrede kimse yokken ses duymak." },
            { ikon: "🌀", terim: "Disorganized thinking or speech", tr: "dağınık düşünce ya da konuşma", tanim: "Olumlu belirti; kelimeleri anlamsız biçimde dizme (*word salad*) olarak görülebilir. Dağınık hareket ise *catatonia* olarak görülebilir: heyecan (olumlu) ya da donukluk, *stupor* (negatif).", ornek: "Cümleler arasında hiçbir bağlantı kalmaması." },
            { ikon: "🕳️", terim: "Negative symptoms", tr: "negatif belirtiler", tanim: "Tipik bir davranışın eksikliği: duygusal ifade eksikliği (*flat affect*) ya da hareketsizlik.", ornek: "Duygusal içerikli bir haberde yüzde hiçbir ifade olmaması." }
          ] },
        { tip: "ikili", sol: { ikon: "➕", baslik: "Olumlu (pozitif) belirtiler", maddeler: ["Olmaması gereken bir şeyin eklenmesi", "Sanrı, varsanı, dağınık konuşma"] },
          sag: { ikon: "➖", baslik: "Negatif belirtiler", maddeler: ["Olması gereken bir şeyin eksikliği", "Düz duygulanım, hareketsizlik"] },
          oyun: [
            { metin: "Çevresinde kimse yokken sesler duyduğunu söylüyor.", cevap: "sol", neden: "Eklenen bir algı: varsanı (olumlu)." },
            { metin: "Yüz ifadesi hemen hiç değişmiyor, duygusal tepki vermiyor.", cevap: "sag", neden: "Duygusal ifadenin eksikliği: negatif." },
            { metin: "Kelimeler arasında bağ olmayan cümleler kuruyor (*word salad*).", cevap: "sol", neden: "Dağınık konuşma: olumlu belirti." },
            { metin: "Uzun süre hiç hareket etmeden donuk duruyor (*catatonic stupor*).", cevap: "sag", neden: "Hareket eksikliği: negatif belirti." }
          ] },
        { tip: "tuzak", metin: "\"Olumlu\" ve \"negatif\" sözcükleri iyi ya da kötü anlamına gelmez.", yanlis: "Olumlu belirtiler hastaya iyi gelen belirtilerdir.", dogru: "==Olumlu belirti== bir şeyin **eklenmesi**, ==negatif belirti== bir şeyin **eksikliğidir**." },
        { tip: "not", metin: "Şizofreni **akut** ya da **kronik** yaşanabilir. Olası nedenler genetik ve biyolojik bağlantılara işaret eder: doğum öncesi virüs maruziyeti ve bazı nörotransmitterlerin dengesizliği (*dopamine hypothesis*)." }
      ]
    },
    {
      baslik: "Duygudurum: depresif ve bipolar bozukluklar",
      kisa: "Depresif bozukluklarda düşük duygudurum, bipolarda mani ile depresyon dönüşümlüdür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌧️", terim: "Major depressive disorder", tr: "majör depresif bozukluk", tanim: "Üzgün, boş ya da sinirli duygudurum ile uyku, iştah, enerji ve düşünmede değişimlerin işlevi etkilemesi.", ornek: "Haftalarca günlük işleri yapmakta çok zorlanmak." },
            { ikon: "☁️", terim: "Persistent depressive disorder", tr: "kalıcı depresif bozukluk", tanim: "Daha hafif ama uzun süren (yetişkinlerde en az iki yıl) depresif duygudurum.", ornek: "Yıllardır sürekli düşük enerji ve düşük duygudurum." },
            { ikon: "🎢", terim: "Bipolar I / II disorder", tr: "bipolar I / II bozukluk", tanim: "Mani dönemleri ile depresyon dönemlerinin dönüşümlü yaşandığı bozukluk. Bipolar I'de belirgin mani; Bipolar II'de daha hafif mani (*hypomania*) ve depresyon vardır.", ornek: "Bir hafta çok az uykuya ihtiyaç duyup aşırı enerjik olmak, sonra haftalarca çökkün olmak." }
          ] },
        { tip: "grafik", baslik: "Duygudurum zaman içinde nasıl seyreder?", xlabel: "Zaman", ylabel: "Duygudurum", xmax: 10, ymax: 11,
          ogeler: [
            { id: "n", tip: "cizgi", renk: 3, kesik: true, from: [0, 5], to: [10, 5] },
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 5], [1.4, 5.1], [2.9, 4.9], [4.3, 5], [5.7, 5.1], [7.1, 4.9], [8.6, 5], [10, 5.1]] },
            { id: "ym", tip: "yazi", x: 2.9, y: 10.2, metin: "mani", gizli: true },
            { id: "yd", tip: "yazi", x: 5.7, y: 0.9, metin: "depresyon", gizli: true }
          ],
          durumlar: [
            { metin: "Tipik duygudurum, normal düzey etrafında dalgalanır." },
            { metin: "**Depresif bozukluk**: duygudurum uzun süre düşük kalır; işlevi etkiler.", set: { c: { noktalar: [[0, 5], [1.4, 5], [2.9, 4.6], [4.3, 3.2], [5.7, 2.4], [7.1, 2.1], [8.6, 2.2], [10, 2.3]] } } },
            { metin: "**Bipolar bozukluk**: mani (yükselme) ile depresyon (düşme) dönüşümlü gelir (*bipolar cycling*).", set: { c: { noktalar: [[0, 5], [1.4, 8.5], [2.9, 9.2], [4.3, 5], [5.7, 1.8], [7.1, 2.2], [8.6, 5.2], [10, 8.6]] } }, goster: ["ym", "yd"] }
          ] },
        { tip: "tuzak", metin: "Depresyon ve bipolar bozukluk aynı değildir.", yanlis: "Üzüntü dönemleri yaşayan herkes bipolar bozukluğa sahiptir.", dogru: "Bipolar bozuklukta ==hem mani hem depresyon dönemleri== vardır; yalnızca düşük duygudurum depresif bozukluğa işaret eder." },
        { tip: "not", metin: "Depresif ve bipolar bozuklukların olası nedenleri biyolojik, genetik, sosyal, kültürel, davranışsal ya da bilişsel kaynaklara dayanabilir. Kendin ya da bir arkadaşın için endişeleniyorsan güvendiğin bir yetişkine ya da okul psikolojik danışmanına başvur." }
      ]
    },
    {
      baslik: "Kaygı bozuklukları: beş tür",
      kisa: "Aşırı korku ve kaygı; beş tür kendi belirtileriyle ayrılır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🕷️", terim: "Specific phobia", tr: "özgül fobi", tanim: "Belirli bir nesne ya da durumdan duyulan aşırı korku.", ornek: "Yükseklik korkusu (*acrophobia*), örümcek korkusu (*arachnophobia*)." },
            { ikon: "🚌", terim: "Agoraphobia", tr: "agorafobi", tanim: "Toplu taşıma, açık ya da kapalı alanlar, kuyruk ya da kalabalık, evden tek başına çıkma gibi durumlardan yoğun korku.", ornek: "Kalabalık bir otobüse binmekten kaçınmak." },
            { ikon: "💥", terim: "Panic disorder", tr: "panik bozukluğu", tanim: "Beklenmedik, bunaltıcı panik atakları: ani, yoğun bedensel, bilişsel ve duygusal korku. *Ataque de nervios* panik bozukluğunun kültüre özgü bir biçimi olabilir.", ornek: "Ansızın kalp çarpıntısı, nefes darlığı ve yoğun korku yaşamak." },
            { ikon: "👀", terim: "Social anxiety disorder", tr: "sosyal kaygı bozukluğu", tanim: "Başkaları tarafından yargılanma ya da izlenme korkusu. Agorafobiden farklıdır ama onu içerebilir. *Taijin kyofusho*, bedenin başkalarına rahatsız edici geleceği korkusu olan, Japon kültürüne özgü bir biçimdir.", ornek: "Sunumda herkesin kendisine bakacağı korkusuyla konuşamamak." },
            { ikon: "🌫️", terim: "Generalized anxiety disorder (GAD)", tr: "yaygın anksiyete bozukluğu", tanim: "Belirli bir nesneye bağlı olmayan, uzun süren, yaygın kaygı ve korku.", ornek: "Hemen her konuda aylarca süren endişe." }
          ] },
        { tip: "ikili", sol: { ikon: "💥", baslik: "Panik bozukluğu", maddeler: ["Ani, kısa süreli yoğun ataklar", "Bedensel belirtiler öne çıkar"] },
          sag: { ikon: "🌫️", baslik: "Yaygın anksiyete (GAD)", maddeler: ["Uzun süren, yaygın endişe", "Belirli bir nesneye bağlı değil"] },
          oyun: [
            { metin: "Aniden başlayan çarpıntı ve nefes darlığıyla birkaç dakika içinde zirveye çıkan yoğun korku.", cevap: "sol", neden: "Ani, yoğun atak: panik bozukluğu." },
            { metin: "Aylardır okul, sağlık, para gibi birçok konuda sürekli endişelenmek.", cevap: "sag", neden: "Belirsiz ve yaygın endişe: GAD." },
            { metin: "Beklemediği anda ortaya çıkan ve kısa sürede yatışan bunaltıcı korku atakları.", cevap: "sol", neden: "Ani atak: panik." },
            { metin: "Belirli bir tehdit olmadan günlerce gergin ve huzursuz olmak.", cevap: "sag", neden: "Uzun süren, nesnesiz kaygı: GAD." }
          ] },
        { tip: "tuzak", metin: "Üç kaygı türü korkunun hedefine göre ayrılır.", yanlis: "Sosyal kaygı bozukluğu, özgül fobiyle aynıdır.", dogru: "==Özgül fobi== belirli bir nesne/durumdan; ==sosyal kaygı== başkalarınca yargılanmaktan; ==agorafobi== kaçışın zor olduğu durumlardan korkmaktır. Olası nedenler öğrenilmiş çağrışımlar, uyumsuz düşünce ve genetik/biyolojik kaynaklardır." }
      ]
    },
    {
      baslik: "Obsesif-kompulsif ve ilişkili bozukluklar",
      kisa: "Obsesyonlar istenmeyen düşüncelerdir; kompulsiyonlar onları yatıştırmaya çalışan tekrarlar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔁", terim: "Obsessive-compulsive disorder (OCD)", tr: "obsesif-kompulsif bozukluk", tanim: "Obsesyonlar (istemsiz, sıkıntı veren, istilacı düşünceler) ve bunları gidermek için yapılan kompulsiyonlar (tekrarlayıcı davranışlar).", ornek: "\"Ellerim kirli\" düşüncesi ve bunun için ellerini tekrar tekrar yıkamak." },
            { ikon: "📦", terim: "Hoarding disorder", tr: "biriktirme bozukluğu", tanim: "Eşyaları atmakta yoğun güçlük ve onları biriktirme; yaşam alanını kullanılamaz kılabilir.", ornek: "Eski gazeteleri atamamak nedeniyle evde yürüyecek yer kalmaması." }
          ] },
        { tip: "adimlar", baslik: "Obsesyon–kompulsiyon döngüsü", adimlar: [
            { baslik: "Obsesyon", metin: "İstemsiz bir düşünce gelir: \"Kapıyı kilitlemedim.\"" },
            { baslik: "Kaygı", metin: "Düşünce yoğun sıkıntı yaratır." },
            { baslik: "Kompulsiyon", metin: "Rahatlamak için kapıyı tekrar tekrar kontrol eder." },
            { baslik: "Geçici rahatlama", metin: "Sıkıntı kısa süre düşer; ==ama döngü tekrarlanır==." }
          ] }
      ]
    },
    {
      baslik: "Travma ve ayrışma: PTSD ve dissosiyatif bozukluklar",
      kisa: "Travma ya da ağır stres, belirtilerin ortak nedenidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📸", terim: "Posttraumatic stress disorder (PTSD)", tr: "travma sonrası stres bozukluğu", tanim: "Travmatik ya da çok stresli bir olay sonrası kalan sıkıntı: aşırı tetikte olma, yoğun kaygı, olayı yeniden yaşama (*flashback*), uykusuzluk, duygusal uzaklaşma, öfke.", ornek: "Büyük bir kazadan aylar sonra sert bir sesle sıçrayıp olayı yeniden yaşamak." },
            { ikon: "🕳️", terim: "Dissociative amnesia", tr: "dissosiyatif amnezi", tanim: "Kişisel önemli bilgileri (genelde travmatik ya da stresli olayları) hatırlamama. *Fugue* ile birlikte olabilir: kişi bilinmeyen yerlere gidebilir.", ornek: "Önemli bir olayın günlerce hatırlanamaması." },
            { ikon: "🧩", terim: "Dissociative identity disorder (DID)", tr: "dissosiyatif kimlik bozukluğu", tanim: "Kimliğin birden fazla farklı kimlik durumuna bölünmüş olması; bilinç, bellek ve kimlikte kopukluk.", ornek: "Farklı zamanlarda farklı kimlik durumlarının ortaya çıkması." }
          ] },
        { tip: "tuzak", metin: "Kitle kültüründe bu iki kategori sık karıştırılır.", yanlis: "Dissosiyatif kimlik bozukluğu, şizofreniyle aynıdır; \"bölünmüş kişilik\" demektir.", dogru: "==Şizofreni== sanrı ve varsanı gibi belirtilerle seyreden bir spektrum bozukluğudur; ==DID== ise kimlik ve bellekte kopukluk (ayrışma) bozukluğudur. İkisi ayrı kategorilerdir." }
      ]
    },
    {
      baslik: "Yeme bozuklukları: anoreksiya ve bulimiya",
      kisa: "Yeme davranışındaki değişim sağlığı ve işlevi bozar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🩺", terim: "Feeding and eating disorders", tr: "beslenme ve yeme bozuklukları", tanim: "Besin alımında ya da emiliminde sağlığı ve psikolojik işlevi bozan değişim.", ornek: "Yeme davranışının yaşamın merkezine yerleşmesi." },
            { ikon: "⚠️", terim: "Anorexia nervosa", tr: "anoreksiya nervoza", tanim: "Yeme kısıtlaması, kilo almaktan yoğun korku ve beden algısında bozulma ile belirgin düşük vücut ağırlığı.", ornek: "Çok düşük kiloda olduğu hâlde kendini kilolu görmek." },
            { ikon: "⚠️", terim: "Bulimia nervosa", tr: "bulimiya nervoza", tanim: "Tekrarlayan aşırı yeme atakları ve ardından kilo almayı önlemek için telafi edici davranışlar; vücut ağırlığı çoğu zaman tipik aralıktadır.", ornek: "Kontrolsüz yeme ardından suçluluk ve telafi çabası." }
          ] },
        { tip: "ikili", sol: { ikon: "🍽️", baslik: "Anoreksiya nervoza", maddeler: ["Yeme kısıtlaması, kilo korkusu", "Belirgin düşük vücut ağırlığı"] },
          sag: { ikon: "🔄", baslik: "Bulimiya nervoza", maddeler: ["Aşırı yeme atakları + telafi", "Vücut ağırlığı çoğu zaman tipik"] },
          oyun: [
            { metin: "Kilo almaktan yoğun korku duyuyor, yemeyi sürekli kısıtlıyor ve çok düşük kiloda.", cevap: "sol", neden: "Kısıtlama ve düşük ağırlık: anoreksiya." },
            { metin: "Kontrolünü kaybettiği aşırı yeme atakları yaşıyor ve ardından telafi çabasına giriyor.", cevap: "sag", neden: "Atak + telafi döngüsü: bulimiya." },
            { metin: "Vücut ağırlığı tipik aralıkta ama aşırı yeme–telafi döngüsü sürüyor.", cevap: "sag", neden: "Bulimiyada ağırlık çoğu zaman tipik aralıktadır." }
          ] },
        { tip: "not", metin: "Yeme bozukluklarının olası nedenleri biyolojik, genetik, sosyal, kültürel (ör. güzellik ideallerinin yaygınlığı), davranışsal ya da bilişsel kaynaklara dayanabilir. Bu bozukluklar ciddi sağlık sorunlarıdır; erken yardım iyileşmeyi kolaylaştırır." }
      ]
    },
    {
      baslik: "Kişilik bozuklukları: üç küme",
      kisa: "Kalıcı, esnek olmayan, kişiyi zorlayan içsel yaşantı ve davranış örüntüleri.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧬", terim: "Personality disorders", tr: "kişilik bozuklukları", tanim: "Kültürün beklentisinden sapan; yaygın ve esnek olmayan; ergenlikte ya da erken yetişkinlikte başlayan; zamanla kararlı; kişiye sıkıntı ya da işlev kaybı getiren kalıcı iç yaşantı ve davranış örüntüleri." }
          ] },
        { tip: "tablo", baslik: "Üç küme, on bozukluk", head: ["Küme", "Tema", "Bozukluklar"], rows: [
            ["A", "Tuhaf, eksantrik", "Paranoid, şizoid, şizotipal"],
            ["B", "Dramatik, duygusal, öngörülemez", "Antisosyal, histriyonik, narsisistik, borderline"],
            ["C", "Kaygılı, korkulu", "Çekingen (avoidant), bağımlı (dependent), obsesif-kompulsif kişilik"]
          ] },
        { tip: "tuzak", metin: "İsimler günlük dilde yanlış kullanılır; AP sınavı tanımı ister.", yanlis: "Obsesif-kompulsif kişilik bozukluğu ile OKB aynıdır.", dogru: "==OKB (obsesyon ve kompulsiyon)== ayrı bir kategoridir; ==obsesif-kompulsif kişilik bozukluğu== Küme C'de kalıcı bir kişilik örüntüsüdür. Günlük konuşmada başkasına bu tanıları atmak da doğru değildir; tanıyı yalnızca eğitimli uzman koyar." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Nörogelişimsel: *ADHD* ve *ASD*; nedenleri çevresel, fizyolojik ya da genetik olabilir.",
            "Şizofreni spektrumu: sanrı, varsanı, dağınık düşünce/konuşma, dağınık hareket (*catatonia*), negatif belirtiler.",
            "Olumlu belirti eklenen, negatif belirti eksik olan şeydir; nedenler genetik/biyolojik (*dopamine hypothesis*).",
            "Depresif: *major* ve *persistent*. Bipolar I ve II: mani ile depresyon dönüşümlüdür (*bipolar cycling*).",
            "Kaygı: özgül fobi, agorafobi, panik bozukluğu, sosyal kaygı, GAD; kültüre özgü biçimler: *ataque de nervios*, *taijin kyofusho*.",
            "OKB: obsesyon + kompulsiyon; biriktirme bozukluğu.",
            "PTSD ve dissosiyatif bozukluklar (amnezi, DID): nedenleri travma ya da stres.",
            "Anoreksiya nervoza ve bulimiya nervoza yeme bozukluklarıdır.",
            "Kişilik bozuklukları üç kümede: A tuhaf, B dramatik, C kaygılı."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir ruh sağlığı uzmanı, danışanın çevresinde kimse yokken sesler duyduğunu ve herkesin onu izlediğine kesin biçimde inandığını not ediyor. Bu belirti örüntüsü DSM'de hangi kategoriyle en uyumludur?",
      opts: ["Depresif bozukluklar", "Şizofreni spektrumu bozuklukları", "Kaygı bozuklukları", "Nörogelişimsel bozukluklar"],
      a: 1,
      why: "Varsanı (ses duymak) ve sanrı (izlendiğine kesin inanç) şizofreni spektrumunun olumlu belirtileridir. En çekici yanlış şık C: kaygı bozuklukları aşırı korku ve kaygıyla tanımlanır, algı ve inanç bozukluğuyla değil." },
    { q: "Bir kişinin sekiz haftalık duygudurum günlüğü tabloda özetlenmiştir. Bu örüntü hangi bozuklukla en uyumludur?",
      fig: { type: "table", caption: "Duygudurum günlüğü", head: ["Hafta", "Gözlem"], rows: [["1–2", "Çok az uyku, aşırı enerji, hızlı konuşma"], ["3–4", "Normal uyku ve enerji"], ["5–8", "Üzgün, enerjisiz, ilgi kaybı"]] },
      opts: ["Bipolar bozukluk", "Kalıcı depresif bozukluk", "Yaygın anksiyete bozukluğu", "Panik bozukluğu"],
      a: 0,
      why: "Hem mani benzeri dönem (az uyku, aşırı enerji) hem depresyon dönemi var: bipolar bozukluk. En çekici yanlış şık B: kalıcı depresif bozuklukta mani dönemi yoktur." },
    { q: "Bir kişi beklemediği bir anda çarpıntı, nefes darlığı ve yoğun korkuyla yüzleşiyor; atakların ne zaman geleceğini öngöremiyor. Bu belirtiler hangi bozuklukla en uyumludur?",
      opts: ["Yaygın anksiyete bozukluğu", "Özgül fobi", "Panik bozukluğu", "Sosyal kaygı bozukluğu"],
      a: 2,
      why: "Beklenmedik, bunaltıcı ani korku atakları panik bozukluğunu tanımlar. En çekici yanlış şık A: yaygın anksiyetede kaygı uzun süren ve nesnesizdir; ani, yoğun atak değildir." },
    { q: "Bir kişi \"ellerim kirli\" düşüncesinden kurtulamıyor ve bu düşünceyi yatıştırmak için elini günde onlarca kez yıkıyor. Elini tekrar tekrar yıkama davranışı aşağıdakilerden hangisidir?",
      opts: ["*Flashback*", "Sanrı", "Obsesyon", "Kompulsiyon"],
      a: 3,
      why: "Obsesyonu (istemsiz düşünceyi) gidermek için yapılan tekrarlayıcı davranış kompulsiyondur. En çekici yanlış şık C: obsesyon, istemsiz düşüncenin kendisidir (kirli olma düşüncesi)." },
    { q: "Ciddi bir trafik kazasından aylar sonra bir kişi sert sesler karşısında sıçrıyor, kazayı sık sık yeniden yaşıyor ve uyumakta güçlük çekiyor. Bu belirtiler hangi bozuklukla en uyumludur?",
      opts: ["Dissosiyatif amnezi", "Travma sonrası stres bozukluğu", "Yaygın anksiyete bozukluğu", "Sosyal kaygı bozukluğu"],
      a: 1,
      why: "Travmatik olaya bağlı flashback, aşırı tetikte olma ve uykusuzluk PTSD belirtileridir. En çekici yanlış şık A: dissosiyatif amnezide olayı hatırlamama vardır; bu kişi olayı yeniden yaşıyor." }
  ]
};
