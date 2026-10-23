/* Kitpath not defteri · hg308 · Yayılmanın Etkileri
   Kaynak: AP HuG CED Topic 3.8 (SPS-3.B.1). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg308",
  amac: "Bu konu kültürler karşılaşıp yayıldığında ortaya çıkan sonuçları anlatıyor. *Acculturation*, *assimilation*, *syncretism* ve *multiculturalism* kavramlarını, aralarındaki farkı ve kültürel peyzajda bıraktıkları izleri öğreneceksin.",
  bolumler: [
    {
      baslik: "Yayılma kültürel peyzajı değiştirir",
      kisa: "Kültürler karşılaşınca dört temel sonuç ortaya çıkar.",
      bloklar: [
        { tip: "not", metin: "Bir kültürel özellik başka yerlere yayılınca orada var olan kültürle karşılaşır. Sonuçta peyzaj değişir: yeni yapılar, tabelalar, yemekler ve ibadet yerleri eklenir. Sınavda dört etki sorulur." },
        { tip: "harita", merkez: "Yayılmanın etkileri", dallar: [
            { baslik: "*Acculturation*", alt: "bir kültürden bazı özellikleri almak" },
            { baslik: "*Assimilation*", alt: "kendi kültürünü büyük ölçüde bırakmak" },
            { baslik: "*Syncretism*", alt: "iki kültürü karıştırıp yenisini yapmak" },
            { baslik: "*Multiculturalism*", alt: "farklı kültürlerin birlikte yaşaması" }
          ] }
      ]
    },
    {
      baslik: "*Acculturation* ve *assimilation*",
      kisa: "*Acculturation*'da kendi kültürünü korursun; *assimilation*'da büyük ölçüde bırakırsın.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔄", baslik: "*Acculturation* (kültürlenme)", maddeler: ["Başka kültürden bazı özellikleri benimsemek", "Kendi kültürünü de korumak"] },
          sag: { ikon: "🫥", baslik: "*Assimilation* (özümseme)", maddeler: ["Baskın kültürü benimsemek", "Kendi ayırt edici özelliklerini büyük ölçüde kaybetmek"] },
          oyun: [
            { metin: "Göçmen bir aile evde kendi dilini konuşuyor, ama çocukları okulda yeni ülkenin dilini öğreniyor.", cevap: "sol", neden: "İki kültürden de bir şeyler var: *acculturation*." },
            { metin: "Üçüncü kuşak torunlar atalarının dilini bilmiyor ve geleneklerini sürdürmüyor.", cevap: "sag", neden: "Kendi ayırt edici özellikler kayboldu: *assimilation*." },
            { metin: "Bir öğrenci yeni şehrin yemeklerini benimsiyor ama bayramlarını kendi geleneğiyle kutluyor.", cevap: "sol", neden: "Yeni olanı alıp kendininkini koruyor: *acculturation*." },
            { metin: "Bir göçmen, adını ve dilini değiştirip tamamen çoğunluk kültürüne uyum sağlıyor.", cevap: "sag", neden: "Kendi kültürü büyük ölçüde bırakıldı: *assimilation*." }
          ] },
        { tip: "grafik", baslik: "Aynı başlangıç, iki yol", xlabel: "Yeni kültürü benimseme", ylabel: "Kendi kültürünü koruma", xmax: 10, ymax: 10,
          ogeler: [
            { id: "bas", tip: "nokta", x: 1, y: 9, etiket: "Gelişte", kilavuz: true },
            { id: "a", tip: "nokta", x: 5.5, y: 6.5, etiket: "*Acculturation*", kilavuz: true, gizli: true },
            { id: "ao", tip: "ok", renk: 1, from: [1.3, 8.6], to: [5.2, 6.8], gizli: true },
            { id: "ay", tip: "yazi", x: 7.5, y: 7.8, metin: "ikisinden de alır", gizli: true },
            { id: "s", tip: "nokta", x: 9, y: 1.5, etiket: "*Assimilation*", kilavuz: true, gizli: true },
            { id: "so", tip: "ok", renk: 2, from: [1.3, 8.6], to: [8.7, 1.8], gizli: true },
            { id: "sy", tip: "yazi", x: 7, y: 3.6, metin: "kendi kültürü azalır", gizli: true }
          ],
          durumlar: [
            { metin: "Yeni bir ülkeye gelen kişi: kendi kültürü güçlü, yeni kültürü henüz az biliyor." },
            { metin: "==*Acculturation*==: yeni kültürden bazı özellikleri alır; kendi kültürünü büyük ölçüde korur.", goster: ["a", "ao", "ay"] },
            { metin: "==*Assimilation*==: yeni kültürü tamamen benimser; kendi ayırt edici özelliklerini büyük ölçüde kaybeder.", gizle: ["a", "ao", "ay"], goster: ["s", "so", "sy"] }
          ] },
        { tip: "tuzak", metin: "İkisi de uyum sürecidir; fark neyin korunduğundadır.", yanlis: "*Assimilation* ile *acculturation* aynı şeydir ya da biri her zaman zorla olur.", dogru: "*Acculturation*'da kendi kültürünün ==temel özellikleri== korunur; *assimilation*'da ==ayırt edici özellikler== büyük ölçüde kaybolur." }
      ]
    },
    {
      baslik: "*Syncretism*: karışıp yeni bir şey olmak",
      kisa: "*Syncretism*'de iki kültür karışır ve ikisinden de farklı yeni bir biçim doğar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🍲", terim: "Syncretism", tr: "kültürel kaynaşma", tanim: "İki ya da daha fazla kültürün inanç ve uygulamalarının birbirine karışıp yeni bir bütün oluşturması. Din, mutfak, müzik ve mimaride görülür.", ornek: "Tex-Mex mutfağı: Meksika ve Teksas lezzetlerinin karışımı." }
          ] },
        { tip: "tablo", baslik: "Üç alanda kaynaşma", head: ["Alan", "Örnek", "Hangi kültürler karıştı?"], rows: [
            ["Din", "Santería (Küba)", "Batı Afrika Yoruba inançları ve Katolik azizler"],
            ["Mimari", "Hint-Sarasenik tarz", "Hint, İslam ve Avrupa (Gotik) öğeleri"],
            ["Mutfak", "Tex-Mex", "Meksika ve ABD lezzetleri"]
          ] }
      ]
    },
    {
      baslik: "*Multiculturalism*: yan yana yaşamak",
      kisa: "*Multiculturalism*'de farklı kültürler kimliklerini koruyarak aynı toplumda yaşar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Multiculturalism", tr: "çok kültürlülük", tanim: "Bir toplumda birden fazla kültürün, her biri kendi ayırt edici özelliklerini koruyarak birlikte yaşaması ve bunun desteklenmesi.", ornek: "Toronto: farklı toplulukların kendi kültür merkezleri, festivalleri ve mahalleleri vardır." }
          ] },
        { tip: "ikili", sol: { ikon: "🥣", baslik: "\"Eritme potası\" (*melting pot*)", maddeler: ["Kültürler tek bir ortak kültürde erir", "*Assimilation* düşüncesine yakındır"] },
          sag: { ikon: "🥗", baslik: "\"Salata kasesi\" (*salad bowl*)", maddeler: ["Her kültür kendi özelliğini korur, birlikte bir bütün oluşturur", "*Multiculturalism* düşüncesine yakındır"] },
          oyun: [
            { metin: "\"Herkes ortak bir ulusal kültürde birleşmeli.\"", cevap: "sol", neden: "Tek bir ortak kültürde erimek: eritme potası." },
            { metin: "\"Her topluluk kendi dilini ve festivalini sürdürsün, ortak şehirde yaşasınlar.\"", cevap: "sag", neden: "Ayrı kimlikler yan yana: salata kasesi." },
            { metin: "Çocuklar okulda yalnızca çoğunluğun dilini öğreniyor ve diğer diller dışarıda bırakılıyor.", cevap: "sol", neden: "Tek bir kültüre yaklaştırıyor: eritme potası." },
            { metin: "Bir belediye, her topluluğun bayramını resmen destekliyor.", cevap: "sag", neden: "Çeşitliliği destekliyor: salata kasesi." }
          ] },
        { tip: "tuzak", metin: "*Syncretism* ile *multiculturalism*'i karıştırma.", yanlis: "Farklı kültürlerin aynı şehirde yaşaması *syncretism*'dir.", dogru: "*Syncretism*'de kültürler ==karışıp yeni bir biçim== oluşturur; *multiculturalism*'de kültürler ==ayrı kalarak== yan yana yaşar." }
      ]
    },
    {
      baslik: "Peyzajdaki izler ve senaryo çözümü",
      kisa: "Her etki, kültürel peyzajda farklı bir iz bırakır.",
      bloklar: [
        { tip: "tablo", baslik: "Etki, peyzajdaki iz", head: ["Etki", "Peyzajda ne görülür?"], rows: [
            ["*Acculturation*", "Hem eski hem yeni kültüre ait tabelalar, mağazalar, yemekler"],
            ["*Assimilation*", "Eski kültüre ait izlerin azalması, çoğunluk kültürünün baskın görünmesi"],
            ["*Syncretism*", "Karma yapılar, yeni yemek türleri, karma ibadet biçimleri"],
            ["*Multiculturalism*", "Çok dilli tabelalar, farklı ibadethaneler, çeşitli mahalleler"]
          ] },
        { tip: "ornek", baslik: "Dört senaryo, dört etki", durum: "(1) Bir mahallede göçmen aile kendi dilini ve bayramlarını sürdürürken yerel yemekleri de benimsiyor. (2) Bir ada ülkesinde Katolik azizlerle yerel ruhlar aynı ibadette birleşiyor. (3) Torunlar atalarının dilini bilmiyor ve geleneklerini bırakmış. (4) Bir şehir, onlarca topluluğun kendi kültür merkezlerini resmen destekliyor.",
          adimlar: ["(1) Kendi kültürünü koruyup yenisinden de alıyor: *acculturation*.", "(2) İki inanç karışıp yeni bir bütün oluşturuyor: *syncretism*.", "(3) Ayırt edici özellikler büyük ölçüde kaybolmuş: *assimilation*.", "(4) Farklı kültürler kendi kimliğini koruyarak yan yana yaşıyor: *multiculturalism*."],
          sonuc: "==(1) *acculturation*, (2) *syncretism*, (3) *assimilation*, (4) *multiculturalism*.==" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Kültürel yayılma karşılaşan kültürlerin sonuçlarını ve kültürel peyzajı değiştirir.",
            "*Acculturation*: başka kültürden bazı özellikleri alırken kendi kültürünü korumak.",
            "*Assimilation*: baskın kültürü benimseyip kendi ayırt edici özelliklerini büyük ölçüde kaybetmek.",
            "*Syncretism*: iki kültürün karışıp yeni bir biçim oluşturması (Santería, Tex-Mex, Hint-Sarasenik mimari).",
            "*Multiculturalism*: farklı kültürlerin kimliklerini koruyarak aynı toplumda birlikte yaşaması.",
            "Eritme potası *assimilation*'a, salata kasesi *multiculturalism*'e yakındır.",
            "*Syncretism* karışmak, *multiculturalism* yan yana durmak demektir.",
            "Her etki peyzajda farklı iz bırakır: tabela, ibadethane, yemek, mimari."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Yurt dışında yaşayan bir aile evde kendi dilini konuşuyor ve bayramlarını kutluyor; aynı zamanda çocukları yeni ülkenin okul sistemine ve yemek kültürüne uyum sağlıyor. Bu duruma en uygun terim hangisidir?",
      opts: ["*Assimilation*", "*Acculturation*", "*Syncretism*", "*Ethnocentrism*"],
      a: 1,
      why: "Yeni kültürden bazı özellikleri alırken kendi kültürünü korumak *acculturation*'dır. A şıkkı çekici yanlış: *assimilation*'da ayırt edici özellikler büyük ölçüde kaybolurdu." },
    { q: "Bir göçmen topluluğun üçüncü kuşağı atalarının dilini konuşmuyor, geleneklerini sürdürmüyor ve çoğunluk kültürüne tam olarak uyum sağlamış. Bu durum hangisidir?",
      opts: ["*Multiculturalism*", "*Acculturation*", "*Assimilation*", "*Syncretism*"],
      a: 2,
      why: "Ayırt edici özelliklerin büyük ölçüde kaybolması *assimilation*'dır. B şıkkı en çekici yanlış: *acculturation*'da kendi kültürün temel özellikleri korunur." },
    { q: "Tabloya göre bu din hangi sürece örnektir?",
      fig: { type: "table", caption: "Küba'daki bir inanç", head: ["Katolik aziz", "Batı Afrika kökenli ruh"], rows: [["Aziz Barbara", "Changó"], ["Aziz Lazarus", "Babalú-Ayé"]] },
      opts: ["*Assimilation*", "*Multiculturalism*", "*Lingua franca*", "*Syncretism*"],
      a: 3,
      why: "İki farklı inancın birbirine karışıp yeni bir bütün oluşturması *syncretism*'dir. B şıkkı çekici: çok kültürlülükte kültürler ayrı kalır, burada ise karışıyor." },
    { q: "Bir şehir yönetimi, her etnik topluluğun kendi kültür merkezini, bayramını ve dilini resmen destekliyor. Bu politika hangi yaklaşıma en yakındır?",
      opts: ["*Multiculturalism*", "*Assimilation*", "Eritme potası", "*Ethnocentrism*"],
      a: 0,
      why: "Farklı kültürlerin kimliklerini koruyarak yan yana yaşamasını desteklemek *multiculturalism*'dir (salata kasesi). C şıkkı çekici yanlış: eritme potası kültürlerin ortak bir kültürde erimesini hedefler." },
    { q: "Aşağıdaki ifadelerden hangisi doğrudur?",
      opts: ["*Syncretism*'de kültürler ayrı kalarak yan yana yaşar", "*Syncretism*'de iki kültürün karışmasıyla yeni bir biçim ortaya çıkar", "*Acculturation*, kendi kültürünü tamamen kaybetmek demektir", "*Multiculturalism*, tek bir kültüre yaklaşmayı hedefler"],
      a: 1,
      why: "*Syncretism* karışıp yeni bir biçim oluşturmaktır. A şıkkı çekici ama yanlış: yan yana ayrı kalmak *multiculturalism*'dir." }
  ]
};
