/* Kitora not defteri · bf22 · 2.2 Tüketici Davranışı
   Kaynak: ap-videolar/src/episodes/bf22 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf22",
  ozet: "İnsanlar neden ve nasıl satın alır? Bu defterde market düzenindeki gizli planı, mantıklı karar ile alışkanlık farkını, kararı belirleyen dört etkeni (*personal*, *psychological*, *social and cultural*, *situational*), teknoloji ile yasaların rolünü ve Cialdini'nin yedi ikna ilkesini göreceksin.",
  bolumler: [
    {
      baslik: "Ekmeğe girdin, dondurmayla çıktın",
      bloklar: [
        { tip: "hikaye", ikon: "🛒", baslik: "300 liralık ekmek",
          metin: "Markete sadece ekmek almaya girdin. Çıktığında elinde ekmek, cips, iki çikolata ve aklında olmayan bir dondurma var. Kasada 300 lira ödedin. Tesadüf değil: o market, sen kapıdan girmeden nereye bakacağını çoktan planlamıştı. İşletmeler, neden satın aldığını anlamak için milyarlarca dolar harcıyor: dikkatini ne çeker, kararını ne etkiler, sonunda seni ne ikna eder?" },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧠", terim: "Consumer behavior", tr: "tüketici davranışı", tanim: "İnsanların neden ve nasıl satın alma kararı verdiğini inceleyen alan. (Videoda kapanışta \"customer behavior\" de deniyor.)", ornek: "Markete ekmeğe girip dondurmayla çıkmanın nedenini araştırmak." }
          ] }
      ]
    },
    {
      baslik: "Market düzeni rastgele değil",
      bloklar: [
        { tip: "harita", merkez: "Marketin gizli planı", dallar: [
            { baslik: "Kasada şeker", alt: "sıra beklerken *impulse buying*" },
            { baslik: "Süt en arkada", alt: "bütün mağazayı yürümek zorunda kalırsın" },
            { baslik: "*End cap*", alt: "koridor başı raf, kampanyalı ürün" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🍫", terim: "Impulse buying", tr: "anlık satın alma", tanim: "Planlamadan, o an canın çektiği için yapılan satın alma.", ornek: "Kasadaki sakız ve çikolata." },
            { ikon: "🪧", terim: "End cap", tr: "koridor başı raf", tanim: "Market koridorunun ucundaki raf. En görünür yer olduğu için kampanyalı ya da sezonluk ürün oraya konur.", ornek: "Koridor başında indirimli çikolata ya da bayram şekeri." },
            { ikon: "🥛", terim: "Store layout", tr: "mağaza düzeni", tanim: "Rafların ve ürünlerin yerleşimi. Kartta *situational factors* içinde sayılır.", ornek: "Süt gibi günlük temel ürünler en arkada: ulaşana kadar bütün rafları geçersin." }
          ] },
        { tip: "ornek", baslik: "Kasadaki çikolata ne kazandırır?", durum: "Bir markette günde bin müşteri kasaya geliyor. Bunların yüzü, kasadaki 30 liralık çikolatayı plansız alıyor. Günlük ek gelir ne kadar?",
          adimlar: ["Çikolata alan müşteri sayısı = 100.", "Her biri 30 TL harcıyor.", "Ek gelir = 100 × 30 = 3.000 TL / gün."],
          sonuc: "Günde ==3.000 TL== ek gelir: küçük bir raf yerleşimi büyük para eder." },
        { tip: "tuzak", baslik: "Mağaza düzeni hangi etken?", metin: "Süt arkada, kasada sakız, koridor başında end cap: bunların hepsi mağaza düzeni.", yanlis: "Mağaza düzeni *personal factors*'tır.", dogru: "Mağaza düzeni kartta *situational factors* içinde sayılır: satın alma anını çevreleyen koşul." }
      ]
    },
    {
      baslik: "Mantık mı, alışkanlık mı?",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧮", baslik: "Mantıklı karar", maddeler: ["Pahalı ve seyrek alımlar", "Araştır, karşılaştır, fayda ile maliyeti tart", "Örnek: ev, araba, üniversite, 40 bin liralık telefon"] },
          sag: { ikon: "🔁", baslik: "Alışkanlık", maddeler: ["Ucuz ve sık alımlar", "Tanıdık, kolay, az düşünme", "Örnek: diş macunu, gazlı içecek"] },
          oyun: [
            { metin: "40 bin liralık telefon alırken yorumları okuyup üç modeli karşılaştırdın.", cevap: "sol", neden: "Araştırma ve fayda-maliyet tartısı: mantıklı karar." },
            { metin: "Diş macununu hep aynı markadan, düşünmeden alıyorsun.", cevap: "sag", neden: "Tanıdık ve kolay seçim: alışkanlık." },
            { metin: "Üniversite seçerken bölümleri, maliyetleri ve iş imkânlarını inceledin.", cevap: "sol", neden: "Büyük, seyrek bir karar: mantıklı karar." },
            { metin: "Kantinde her gün aynı gazlı içeceğe uzanıyorsun.", cevap: "sag", neden: "Ucuz ve sık alım: alışkanlık." },
            { metin: "Araba alırken ödeyeceğin toplam maliyeti ve getirisini hesapladın.", cevap: "sol", neden: "Pahalı ve seyrek: mantıklı karar." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🥇", terim: "Default choice", tr: "varsayılan seçim", tanim: "Müşterinin düşünmeden, alışkanlıkla uzandığı ilk seçenek. Markaların ulaşmak istediği konum.", ornek: "Diş macunu rafında elin kendiliğinden hep aynı kutuya gider." }
          ] },
        { tip: "tuzak", baslik: "Alışkanlık rakibi yorar", metin: "Alışkanlık oluşunca müşteri karşılaştırmayı tamamen bırakır; yani rakip için işi çok zorlaşır.", yanlis: "Müşteri her alışverişte tüm markaları baştan karşılaştırır.", dogru: "Pahalı ve seyrek alımlar araştırmayla, ucuz ve sık alımlar alışkanlıkla yapılır. Her marka *default choice* olmak ister." }
      ]
    },
    {
      baslik: "Dört etken",
      bloklar: [
        { tip: "harita", merkez: "Satın alma kararını belirleyen etkenler", dallar: [
            { baslik: "1 · *Personal*", alt: "kim olduğun: yaş, gelir, meslek, eğitim, yaşam tarzı" },
            { baslik: "2 · *Psychological*", alt: "kafanın içi: inanç, değer, motivasyon, algı, deneyim" },
            { baslik: "3 · *Social and cultural*", alt: "başkaları: aile, arkadaş, ünlü, kültür" },
            { baslik: "4 · *Situational*", alt: "o anki geçici koşullar" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🪪", terim: "Personal factors", tr: "kişisel etkenler", tanim: "Kişinin kendisiyle ilgili özellikler: yaş, gelir, meslek, eğitim ve yaşam tarzı.", ornek: "Bugün harçlığınla kantinden tost alıyorsun; ilk maaşınla sepetin değişecek." },
            { ikon: "💡", terim: "Psychological factors", tr: "psikolojik etkenler", tanim: "Kişinin nasıl düşünüp hissettiği: inançlar, değerler, motivasyon, algılar ve geçmiş deneyimler.", ornek: "Çevreyi önemsediği için elektrikli araba almak; telefonundan memnun kalıp aynı markayı yeniden almak." },
            { ikon: "👪", terim: "Social and cultural factors", tr: "sosyal ve kültürel etkenler", tanim: "Başkalarının etkisi: aile, arkadaşlar, ünlüler, sosyal medya fenomenleri (influencer), kültür, sosyal statü ve toplumsal normlar.", ornek: "Stanley termosunun TikTok'ta paylaşılıp bir anda herkesin istemesi." },
            { ikon: "⏱️", terim: "Situational factors", tr: "durumsal etkenler", tanim: "Satın alma anındaki geçici koşullar: zaman, yer, mağaza düzeni, ruh hâli, ürünün rafta olup olmaması.", ornek: "Aç karnına markete girersen sepet dolar." }
          ] },
        { tip: "tablo", baslik: "Dört etken yan yana", head: ["Etken", "Soru", "Örnek"], rows: [
            ["*Personal*", "Ben kimim?", "Tam zamanlı işe girince gelir ve alışveriş alışkanlığı değişir"],
            ["*Psychological*", "Ne düşünüyor, ne hissediyorum?", "Elektrikli araba (değer kararı); iyi deneyim yaşadığım telefon markası"],
            ["*Social and cultural*", "Çevrem ne yapıyor?", "Stanley modası, Black Friday izdihamı"],
            ["*Situational*", "Şu an hangi koşuldayım?", "Acele, sıkıntı, açlık, mağaza düzeni"]
          ], not: "Aynı kişi, aynı ürün, yalnızca an farklıysa cevap *situational*." },
        { tip: "ikili", sol: { ikon: "🪪", baslik: "*Personal*", maddeler: ["Yaş, gelir, meslek, eğitim, yaşam tarzı", "Kişiyi tanımlar, uzun süre değişmez"] },
          sag: { ikon: "💡", baslik: "*Psychological*", maddeler: ["İnanç, değer, motivasyon, algı, deneyim", "Kişinin nasıl düşündüğünü anlatır"] },
          oyun: [
            { metin: "İlk maaşını almak sepetini değiştirdi.", cevap: "sol", neden: "Gelir değişti: *personal*." },
            { metin: "Çevreyi önemsediği için elektrikli araba aldı.", cevap: "sag", neden: "Bir değer kararı: *psychological*." },
            { metin: "Telefonundan memnun kaldığı için yine aynı markayı aldı.", cevap: "sag", neden: "Geçmiş deneyim: *psychological*." },
            { metin: "Mühendis olduğu için pahalı bir dizüstü bilgisayar aldı.", cevap: "sol", neden: "Meslek: *personal*." }
          ] },
        { tip: "tuzak", baslik: "Dört etkeni karıştırma", metin: "Sınavın en sık tuzağı: bu kutular birbirine çok benzer.", yanlis: "Aç olduğu için fazla alışveriş yapan kişi *psychological factors* ile hareket ediyor.", dogru: "*Personal* = kim olduğun; *psychological* = kafanın içi; *social and cultural* = başkaları ve kültür; *situational* = o anki geçici koşul. Açlık ve acele ==geçici durumdur==: *situational*." },
        { tip: "tuzak", baslik: "2.1 ile aynı mı?", metin: "*Personal factors* listesi 2.1'deki *demographics* ile örtüşür.", yanlis: "*Personal factors* ile *demographics* birebir aynı listedir.", dogru: "Videonun kartı \"yaşam tarzı\"nı da *personal factors* içinde sayar; *demographics* listesi bunu içermez (o *psychographics*'e girer). İki listeyi birebir aynı sanma." }
      ]
    },
    {
      baslik: "Çevre ürünü değiştirmeden talebi değiştirir",
      bloklar: [
        { tip: "hikaye", ikon: "🥤", baslik: "Stanley termosu",
          metin: "Birkaç yıl önce Stanley termosu sıradan, yalıtımlı bir bardaktı. Sonra Instagram ve TikTok'ta paylaşıldı, bir anda herkes istedi. Bardak değişti mi? Pek değil. Değişen sosyal etkenlerdi." },
        { tip: "grafik", baslik: "Ürün aynı, talep sağa kaydı", xlabel: "Satılan miktar", ylabel: "Fiyat", xmax: 10, ymax: 10, xticks: [{ v: 5, label: "5" }, { v: 8, label: "8" }], yticks: [{ v: 4, label: "4" }],
          ogeler: [
            { id: "d1", tip: "cizgi", renk: 0, from: [1, 8], to: [8, 1], etiket: "D₁" },
            { id: "d2", tip: "cizgi", renk: 1, from: [4, 8], to: [10, 2], etiket: "D₂", gizli: true },
            { id: "fp", tip: "cizgi", renk: 3, kesik: true, from: [0, 4], to: [10, 4], etiket: "", gizli: true },
            { id: "e1", tip: "nokta", x: 5, y: 4, etiket: "5", kilavuz: true, gizli: true },
            { id: "e2", tip: "nokta", x: 8, y: 4, etiket: "8", kilavuz: true, gizli: true },
            { id: "oy", tip: "ok", from: [5.3, 4.6], to: [7.7, 4.6], gizli: true },
            { id: "yz", tip: "yazi", x: 5, y: 9.4, metin: "Ürün ve fiyat aynı", gizli: true }
          ],
          durumlar: [
            { metin: "Önce sıradan bir bardak: fiyat 4'te, ==5 adet== talep var.", goster: ["fp", "e1"] },
            { metin: "Sosyal medyada patladı. Ürün de fiyat da aynı ama herkes istiyor.", goster: ["yz"] },
            { metin: "Talep sağa kayar: aynı fiyatta artık ==8 adet== satılıyor.", goster: ["d2", "e2", "oy"] },
            { metin: "Sebep ürün değil, ==*social factors*==. Ürün değişmeden talep patlıyorsa değişen şey çevredir.", goster: ["yz"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "⭐", terim: "Influencer", tr: "sosyal medya fenomeni", tanim: "Takipçilerinin satın alma kararını etkileyen kişi; *social factors* içinde sayılır.", ornek: "Bir fenomenin paylaşımıyla termosun herkesin listesine girmesi." }
          ] },
        { tip: "tuzak", baslik: "Stanley dersi", metin: "Ürün değişmeden talep artıyorsa neden ürün olamaz.", yanlis: "Talep patladıysa Stanley'nin kalitesi birden iyileşmiştir.", dogru: "Ürün değişmedi; değişen ==*social and cultural factors*==." }
      ]
    },
    {
      baslik: "Durum her şeyi değiştirir",
      bloklar: [
        { tip: "adimlar", baslik: "Aynı sen, farklı anlar", adimlar: [
            { baslik: "Aç karnına", metin: "Markete aç girersen sepet dolar." },
            { baslik: "Aceleyle", metin: "Otobüse yetişeceksen fiyata bakmadan ilk gördüğün suyu alırsın." },
            { baslik: "Sıkılınca", metin: "Sıkıldığın için gezinirken planda olmayan şeyler alırsın." },
            { baslik: "Sonuç", metin: "Kişi aynı, ürün aynı; ==an farklı==. Baştaki market de bunu yapıyordu: durumu o kuruyordu." }
          ] },
        { tip: "ikili", sol: { ikon: "🧍", baslik: "Kişiyle ilgili", maddeler: ["Uzun süre aynı kalır", "*Personal*, *psychological*"] },
          sag: { ikon: "⏳", baslik: "Ana özgü", maddeler: ["Geçici koşul", "*Situational*: acele, açlık, sıkıntı, mağaza düzeni, ürünün rafta olması"] },
          oyun: [
            { metin: "Otobüse yetişmeye çalışırken ilk gördüğü suyu aldı.", cevap: "sag", neden: "Acele geçici bir koşul: *situational*." },
            { metin: "Öğretmen olduğu için kitap alıyor.", cevap: "sol", neden: "Meslek kişiyle ilgili: *personal*." },
            { metin: "Aç karnına markete girdi ve sepeti doldurdu.", cevap: "sag", neden: "Açlık o anki durum: *situational*." },
            { metin: "Dört yıldır hep aynı marka telefonu kullanıyor, memnun.", cevap: "sol", neden: "Geçmiş deneyim kişinin kafasındadır: *psychological*." }
          ] }
      ]
    },
    {
      baslik: "Teknoloji ve yasalar",
      bloklar: [
        { tip: "ikili", ayirici: "+", sol: { ikon: "📱", baslik: "Teknoloji", maddeler: ["Eskiden lahmacun için dükkâna giderdin; şimdi Yemeksepeti kapına getiriyor", "Fiyat karşılaştırmak, yorum okumak, yeni ürün keşfetmek kolay", "Tek tuşla anında satın alma"] },
          sag: { ikon: "⚖️", baslik: "Yasalar", maddeler: ["Devlet bazı ürünlerin ne zaman, nerede ve nasıl satılacağını belirler", "Yasa değişince davranış da değişir", "Türkiye'de 2019'da plastik poşet paralı oldu; birçok kişi bez çantaya geçti"] } },
        { tip: "not", metin: "Teknoloji bazen ==fazla anlıktır==: altı yaşındaki bir çocuk annesinin hesabından yüzlerce dolarlık oyuncak sipariş etmiş. Yasalar için kalıp: **ne zaman, nerede, nasıl** satılır ya da kullanılır. (Videoda belirli bir yasa örneği verilmiyor; poşet örneği Türkiye uyarlaması.)" }
      ]
    },
    {
      baslik: "Cialdini'nin yedi ilkesi",
      bloklar: [
        { tip: "not", metin: "Peki müşteriye nasıl evet dedirtirsin? Psikolog **Robert Cialdini** yedi ilke buldu: *principles of influence*. İşletmeler ve pazarlamacılar müşteri kararını etkilemek için bunları kullanır." },
        { tip: "harita", merkez: "*Principles of influence*", dallar: [
            { baslik: "1 · *Scarcity*", alt: "azalan şeyi daha çok isteriz" },
            { baslik: "2 · *Authority*", alt: "uzmana güveniriz" },
            { baslik: "3 · *Consensus*", alt: "herkes alıyorsa iyidir" },
            { baslik: "4 · *Liking*", alt: "sevdiğimizden alırız" },
            { baslik: "5 · *Reciprocity*", alt: "bedava alınca karşılık veririz" },
            { baslik: "6 · *Consistency*", alt: "kendimizi nasıl görüyorsak öyle davranırız" },
            { baslik: "7 · *Unity*", alt: "ait olduğumuz grup bizi etkiler" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "⏳", terim: "Scarcity", tr: "kıtlık", tanim: "Az bulunan ya da tükenmek üzere olan şey daha değerli ve çekici görünür.", ornek: "\"Son 3 ürün\", sınırlı üretim ayakkabı, bu gece biten kampanya, Black Friday kuyrukları." },
            { ikon: "🥼", terim: "Authority", tr: "otorite", tanim: "Uzmanların ve yetkili kişilerin önerisine güvenme eğilimi.", ornek: "Diş macunu reklamındaki beyaz önlüklü diş hekimi; cilt bakımı reklamlarındaki dermatolog." },
            { ikon: "👥", terim: "Consensus / Social proof", tr: "uzlaşı / sosyal kanıt", tanim: "Başkalarının yaptığına, seçtiğine ve düşündüğüne uyma eğilimi: herkes alıyorsa iyidir.", ornek: "\"Çok satanlar\" etiketi, 10 bin değerlendirme, kuyruğu olan dönerci, \"bir milyondan fazla satıldı\"." },
            { ikon: "😍", terim: "Liking", tr: "beğeni", tanim: "Sevdiğimiz, hayran olduğumuz ya da kendimize yakın bulduğumuz kişilerden etkilenme eğilimi.", ornek: "Reklamlardaki futbolcular, ünlüler, YouTuber'lar." },
            { ikon: "🎁", terim: "Reciprocity", tr: "karşılık verme", tanim: "Değerli bir şey aldıktan sonra iyiliğe karşılık verme eğilimi. Bedava bir şey alınca borçlu hissederiz.", ornek: "Markette tattırılan peynir (*free sample*); ücretsiz deneme ayı (*free trial*); bedava Slurpee günü." },
            { ikon: "🪞", terim: "Consistency", tr: "tutarlılık", tanim: "Önceki sözlerimize, davranışlarımıza, inançlarımıza ve kimliğimize uygun davranma eğilimi.", ornek: "Kendine koşucu diyen, ihtiyacı olmasa da yeni koşu ayakkabısını alır." },
            { ikon: "🫂", terim: "Unity", tr: "aidiyet", tanim: "Kimlik ya da aidiyet duygusu paylaştığımız kişilerden etkilenme eğilimi.", ornek: "Apple kullanıcıları, LEGO hayranları, forma alan taraftar, Harley sürücüleri." }
          ] },
        { tip: "tablo", baslik: "İşaretlerinden tanı", head: ["İlke", "İşareti"], rows: [
            ["*Scarcity*", "Süre ya da stok sınırı: \"son 3 ürün\", \"bu gece bitiyor\""],
            ["*Authority*", "Uzman: doktor, diş hekimi, dermatolog"],
            ["*Consensus*", "Kalabalık: \"çok satan\", \"1 milyon kişi aldı\""],
            ["*Liking*", "Tek bir sevilen kişi: ünlü, sporcu, influencer"],
            ["*Reciprocity*", "Önce bedava verilen şey: numune, tadım, ücretsiz deneme"],
            ["*Consistency*", "\"Ben koşucuyum\" gibi kendi kimliğiyle uyum"],
            ["*Unity*", "\"Biz\": bir topluluğa ait olma"]
          ] },
        { tip: "not", metin: "Bu ilkeler **zorlamaz, yalnızca etkiler**. Bir markanın sattığı bazen ürün değil, bir topluluğa girişdir: Apple, LEGO, Jeep sürücülerinin birbirine bıraktığı lastik ördekler. Videonun *Tommy Boy* filminden aldığı sahne de buna bağlanıyor: \"hayır cevabını kabul etmiyoruz\" satış baskısı, Cialdini'nin ilkeleri ise ikna etmedir." }
      ]
    },
    {
      baslik: "Karışan ilkeleri ayır",
      bloklar: [
        { tip: "ikili", sol: { ikon: "👥", baslik: "*Consensus*", maddeler: ["Kalabalığa bakar", "\"Bir milyon kişi aldı\"", "Çok satanlar etiketi"] },
          sag: { ikon: "😍", baslik: "*Liking*", maddeler: ["Tek bir sevilen kişiye bakar", "Ünlü, sporcu, influencer", "Sevdiğim biri öneriyor"] },
          oyun: [
            { metin: "Etikette \"Amerika'nın favorisi, bir milyondan fazla satıldı\" yazıyor.", cevap: "sol", neden: "Kalabalığın seçimi: *consensus*." },
            { metin: "Sevdiğin futbolcu bir diş macununu tanıtıyor.", cevap: "sag", neden: "Tek bir sevilen kişi: *liking*." },
            { metin: "Güneş gözlüğünün üstünde \"Best Seller\" etiketi var.", cevap: "sol", neden: "Çok satan = herkes alıyor: *consensus*." },
            { metin: "Takip ettiğin bir YouTuber bir ürünü öneriyor.", cevap: "sag", neden: "Sevilen, hayran olunan biri: *liking*." }
          ] },
        { tip: "ikili", sol: { ikon: "🥼", baslik: "*Authority*", maddeler: ["İkna eden kişi uzman olduğu için", "Diş hekimi, doktor"] },
          sag: { ikon: "😍", baslik: "*Liking*", maddeler: ["İkna eden kişi sevildiği için", "Futbolcu, ünlü"] },
          oyun: [
            { metin: "Diş macunu reklamında beyaz önlüklü bir diş hekimi \"öneriyorum\" diyor.", cevap: "sol", neden: "Uzmanlığı güven veriyor: *authority*." },
            { metin: "Aynı diş macununu reklamda ünlü bir futbolcu öneriyor.", cevap: "sag", neden: "Sevildiği için ikna ediyor: *liking*." },
            { metin: "Cilt kremini bir dermatolog tavsiye ediyor.", cevap: "sol", neden: "Uzman: *authority*." }
          ] },
        { tip: "ikili", sol: { ikon: "🪞", baslik: "*Consistency*", maddeler: ["Kişinin kendi kimliği ve önceki sözleri", "\"Ben koşucuyum\""] },
          sag: { ikon: "🫂", baslik: "*Unity*", maddeler: ["Bir gruba ait olma duygusu", "\"Biz bu markanın kullanıcılarıyız\""] },
          oyun: [
            { metin: "Kendine koşucu diyen biri ihtiyacı olmasa da yeni koşu ayakkabısı aldı.", cevap: "sol", neden: "Kendi kimliğine uyum: *consistency*." },
            { metin: "Taraftar, kulübünün yeni formasını aldı.", cevap: "sag", neden: "Ait olduğu topluluk: *unity*." },
            { metin: "Teknolojiyi yakından takip ettiğini söyleyen biri yeni cihazı hemen aldı.", cevap: "sol", neden: "Önceki kimliğiyle tutarlı kalıyor: *consistency*." },
            { metin: "LEGO hayranları, markanın etkinliğinde buluşuyor.", cevap: "sag", neden: "Topluluk duygusu: *unity*." }
          ] },
        { tip: "ikili", sol: { ikon: "🎁", baslik: "*Reciprocity*", maddeler: ["Önce bedava verilir", "Numune, tadım, ücretsiz deneme"] },
          sag: { ikon: "⏳", baslik: "*Scarcity*", maddeler: ["Süre ya da stok sınırı", "\"Son 3 ürün\", \"bu gece bitiyor\""] },
          oyun: [
            { metin: "Markette peynir tattırıldı, tadanların çoğu peyniri aldı.", cevap: "sol", neden: "Bedava tadım borçlu hissettirir: *reciprocity*." },
            { metin: "Sınırlı üretim ayakkabı, stoklar tükeniyor.", cevap: "sag", neden: "Az bulunur: *scarcity*." },
            { metin: "İlk ay ücretsiz deneme sundular.", cevap: "sol", neden: "Önce bedava verildi: *reciprocity*." },
            { metin: "\"İndirim bu gece sona eriyor.\"", cevap: "sag", neden: "Süre sınırı: *scarcity*." }
          ] },
        { tip: "tuzak", baslik: "Üç sık karışıklık", metin: "Sınavda bu çiftler birbirinin yerine konur.", yanlis: "Reklamdaki kişi her zaman *liking*'dir; ünlü olmasa da fark etmez.", dogru: "Kişi ==uzman olduğu için== ikna ediyorsa *authority*, ==sevildiği için== ediyorsa *liking*. *Consensus* kalabalığa bakar, *liking* tek bir kişiye. *Consistency* kişinin kendi kimliğiyle tutarlı kalmasıdır, *unity* bir gruba ait olma duygusu." }
      ]
    },
    {
      baslik: "Mini sınav: bedava ders",
      bloklar: [
        { tip: "ornek", baslik: "Hangi ilke çalışıyor?", durum: "Bir kurs sitesi ilk dersi bedava veriyor. Dersi izleyen 100 kişiden 40'ı paketi satın alıyor; izlemeyen 100 kişiden sadece 10'u. Bu, Cialdini'nin hangi ilkesi?",
          adimlar: ["Bedava dersi alanlarda satın alma oranı %40, almayanlarda %10.", "Fark = 40 − 10 = 30 puan: bedava ders satışı belirgin artırıyor.", "Önce bedava bir şey vermek ve karşılığını beklemek bir ilkeyi işaret eder: borçlu hissetme.", "\"Son 5 kontenjan\" yazsaydı süre ve stok sınırı olurdu: *scarcity*."],
          sonuc: "==*Reciprocity*==: bedava bir şey alan müşteri karşılık vermek ister." },
        { tip: "grafik", baslik: "Bedava dersin farkı", xlabel: "Grup", ylabel: "Satın alma (%)", xmax: 3, ymax: 50, xticks: [{ v: 1, label: "İzlemeyen" }, { v: 2, label: "İzleyen" }], yticks: [{ v: 10, label: "%10" }, { v: 40, label: "%40" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 0, noktalar: [[0.6, 0], [1.4, 0], [1.4, 0], [0.6, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[1.6, 0], [2.4, 0], [2.4, 0], [1.6, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 13, metin: "100 kişide 10", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 43, metin: "100 kişide 40", gizli: true },
            { id: "fk", tip: "ok", from: [2.7, 10], to: [2.7, 40], gizli: true },
            { id: "ft", tip: "yazi", x: 2.65, y: 46, metin: "+30 puan", gizli: true }
          ],
          durumlar: [
            { metin: "Dersi izlemeyen 100 kişiden yalnızca ==10=='u paketi aldı.", set: { b1: { noktalar: [[0.6, 0], [1.4, 0], [1.4, 10], [0.6, 10]] } }, goster: ["t1"] },
            { metin: "Bedava dersi izleyen 100 kişiden ==40=='ı paketi aldı.", set: { b2: { noktalar: [[1.6, 0], [2.4, 0], [2.4, 40], [1.6, 40]] } }, goster: ["t2"] },
            { metin: "Fark 30 puan: bedava ders, karşılık verme isteğini doğurdu. Bu ==*reciprocity*==.", goster: ["fk", "ft"] }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Consumer behavior*: insanlar neden ve nasıl satın alır. Market düzeni (kasada şeker, arkada süt, *end cap*) *impulse buying*'i tetikler.",
            "Pahalı ve seyrek alımlar mantıkla, ucuz ve sık alımlar alışkanlıkla yapılır; markalar *default choice* olmak ister.",
            "Dört etken: *personal* (kim), *psychological* (kafanın içi), *social and cultural* (başkaları), *situational* (o anki koşul).",
            "Stanley dersi: ürün değişmeden talep patlıyorsa değişen *social factors*'tır. Mağaza düzeni *situational*'dır.",
            "Teknoloji (Yemeksepeti, yorumlar, anında alım) ve yasalar (ne zaman, nerede, nasıl) davranışı değiştirir.",
            "Cialdini'nin yedi ilkesi: *scarcity*, *authority*, *consensus*, *liking*, *reciprocity*, *consistency*, *unity*.",
            "Karışan çiftler: *consensus* kalabalık / *liking* tek kişi; *authority* uzman / *liking* sevilen; *consistency* kendi kimliğin / *unity* grup.",
            "*Reciprocity*'nin işareti bedava verilen şey; *scarcity*'nin işareti süre ya da stok sınırı.",
            "İlkeler zorlamaz, yalnızca etkiler.",
            "Müşteriyi anlayan işletme daha iyi ürün ve kampanya yapar, sonuçta *profit*'i (kârı) artar."
          ] }
      ]
    }
  ]
};
