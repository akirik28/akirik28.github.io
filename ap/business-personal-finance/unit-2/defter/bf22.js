/* Kitora not defteri · bf22 · 2.2 Tüketici Davranışı
   Kaynak: ap-videolar/src/episodes/bf22 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf22",
  amac: "Bu konu tüketici davranışını anlatıyor: insanlar neden ve nasıl satın alır? Kararı belirleyen dört etkeni, teknoloji ile yasaların rolünü ve Cialdini'nin yedi ikna ilkesini ayırt etmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Market düzeni ve tüketici davranışı",
      kisa: "Market düzeni, plansız satın almayı tetikleyecek şekilde kurulur.",
      bloklar: [
        { tip: "hikaye", ikon: "🛒", baslik: "300 liralık ekmek",
          metin: "Markete ekmeğe girdin; cips, iki çikolata ve plansız bir dondurmayla çıkıp 300 lira ödedin. Tesadüf değil: market, sen girmeden nereye bakacağını planlamıştı. İşletmeler neden satın aldığını anlamak için milyarlarca dolar harcıyor." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧠", terim: "Consumer behavior", tr: "tüketici davranışı", tanim: "İnsanların neden ve nasıl satın alma kararı verdiğini inceleyen alan. (Videoda kapanışta \"customer behavior\" de deniyor.)", ornek: "Markete ekmeğe girip dondurmayla çıkmanın nedenini araştırmak." },
            { ikon: "🍫", terim: "Impulse buying", tr: "anlık satın alma", tanim: "Planlamadan, o an canın çektiği için yapılan satın alma.", ornek: "Kasadaki sakız ve çikolata." },
            { ikon: "🪧", terim: "End cap", tr: "koridor başı raf", tanim: "Market koridorunun ucundaki, en görünür raf; kampanyalı ya da sezonluk ürün oraya konur.", ornek: "Koridor başında indirimli çikolata ya da bayram şekeri." },
            { ikon: "🥛", terim: "Store layout", tr: "mağaza düzeni", tanim: "Rafların ve ürünlerin yerleşimi; kartta *situational factors* içinde sayılır.", ornek: "Süt en arkada: ulaşana kadar bütün rafları geçersin." }
          ] },
        { tip: "ornek", baslik: "Kasadaki çikolata ne kazandırır?", durum: "Bir markette günde bin müşteri kasaya geliyor. Bunların yüzü, kasadaki 30 liralık çikolatayı plansız alıyor. Günlük ek gelir ne kadar?",
          adimlar: ["Çikolata alan müşteri sayısı = 100.", "Her biri 30 TL harcıyor.", "Ek gelir = 100 × 30 = 3.000 TL / gün."],
          sonuc: "Günde ==3.000 TL== ek gelir: küçük bir raf yerleşimi büyük para eder." }
      ]
    },
    {
      baslik: "Mantık mı, alışkanlık mı?",
      kisa: "Pahalı ve seyrek alımlar mantıkla, ucuz ve sık alımlar alışkanlıkla yapılır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧮", baslik: "Mantıklı karar", maddeler: ["Pahalı ve seyrek alımlar", "Araştır, karşılaştır, fayda ile maliyeti tart", "Örnek: ev, araba, üniversite, 40 bin liralık telefon"] },
          sag: { ikon: "🔁", baslik: "Alışkanlık", maddeler: ["Ucuz ve sık alımlar", "Tanıdık, kolay, az düşünme", "Örnek: diş macunu, gazlı içecek"] },
          oyun: [
            { metin: "40 bin liralık telefon alırken yorumları okuyup üç modeli karşılaştırdın.", cevap: "sol", neden: "Araştırma ve fayda-maliyet tartısı: mantıklı karar." },
            { metin: "Diş macununu hep aynı markadan, düşünmeden alıyorsun.", cevap: "sag", neden: "Tanıdık ve kolay seçim: alışkanlık." },
            { metin: "Üniversite seçerken bölümleri, maliyetleri ve iş imkânlarını inceledin.", cevap: "sol", neden: "Büyük, seyrek bir karar: mantıklı karar." },
            { metin: "Kantinde her gün aynı gazlı içeceğe uzanıyorsun.", cevap: "sag", neden: "Ucuz ve sık alım: alışkanlık." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🥇", terim: "Default choice", tr: "varsayılan seçim", tanim: "Müşterinin düşünmeden, alışkanlıkla uzandığı ilk seçenek. Markaların ulaşmak istediği konum.", ornek: "Diş macunu rafında elin kendiliğinden hep aynı kutuya gider." }
          ] },
        { tip: "tuzak", baslik: "Alışkanlık rakibi yorar", metin: "Alışkanlık oluşunca müşteri karşılaştırmayı tamamen bırakır; rakip için işi çok zorlaşır.", yanlis: "Müşteri her alışverişte tüm markaları baştan karşılaştırır.", dogru: "Pahalı ve seyrek alımlar araştırmayla, ucuz ve sık alımlar alışkanlıkla yapılır. Her marka *default choice* olmak ister." }
      ]
    },
    {
      baslik: "Satın alma kararını belirleyen dört etken",
      kisa: "Kişisel, psikolojik, sosyal-kültürel ve durumsal etkenler kararı şekillendirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪪", terim: "Personal factors", tr: "kişisel etkenler", tanim: "Kişinin kendisiyle ilgili özellikler: yaş, gelir, meslek, eğitim ve yaşam tarzı.", ornek: "Bugün harçlığınla kantinden tost alıyorsun; ilk maaşınla sepetin değişecek." },
            { ikon: "💡", terim: "Psychological factors", tr: "psikolojik etkenler", tanim: "Kişinin nasıl düşünüp hissettiği: inançlar, değerler, motivasyon, algılar ve geçmiş deneyimler.", ornek: "Çevreyi önemsediği için elektrikli araba almak; telefonundan memnun kalıp aynı markayı yeniden almak." },
            { ikon: "👪", terim: "Social and cultural factors", tr: "sosyal ve kültürel etkenler", tanim: "Başkalarının etkisi: aile, arkadaşlar, ünlüler, sosyal medya fenomenleri (influencer), kültür, sosyal statü ve toplumsal normlar.", ornek: "Stanley termosunun TikTok'ta paylaşılıp bir anda herkesin istemesi." },
            { ikon: "⏱️", terim: "Situational factors", tr: "durumsal etkenler", tanim: "Satın alma anındaki geçici koşullar: zaman, yer, mağaza düzeni, ruh hâli, ürünün rafta olup olmaması.", ornek: "Aç karnına markete girersen sepet dolar." }
          ] },
        { tip: "ikili", sol: { ikon: "🪪", baslik: "*Personal*", maddeler: ["Yaş, gelir, meslek, eğitim, yaşam tarzı", "Kişiyi tanımlar, uzun süre değişmez"] },
          sag: { ikon: "💡", baslik: "*Psychological*", maddeler: ["İnanç, değer, motivasyon, algı, deneyim", "Kişinin nasıl düşündüğünü anlatır"] },
          oyun: [
            { metin: "İlk maaşını almak sepetini değiştirdi.", cevap: "sol", neden: "Gelir değişti: *personal*." },
            { metin: "Çevreyi önemsediği için elektrikli araba aldı.", cevap: "sag", neden: "Bir değer kararı: *psychological*." },
            { metin: "Telefonundan memnun kaldığı için yine aynı markayı aldı.", cevap: "sag", neden: "Geçmiş deneyim: *psychological*." },
            { metin: "Mühendis olduğu için pahalı bir dizüstü bilgisayar aldı.", cevap: "sol", neden: "Meslek: *personal*." }
          ] },
        { tip: "tuzak", baslik: "Dört etkeni karıştırma", metin: "Sınavın en sık tuzağı: bu kutular birbirine çok benzer.", yanlis: "Aç olduğu için fazla alışveriş yapan kişi *psychological factors* ile hareket ediyor.", dogru: "*Personal* = kim olduğun; *psychological* = kafanın içi; *social and cultural* = başkaları ve kültür; *situational* = o anki geçici koşul. Açlık ve acele ==geçici durumdur==: *situational*. Videonun *personal* kartı \"yaşam tarzı\"nı da içerir; 2.1'deki *demographics* listesiyle birebir aynı değildir." }
      ]
    },
    {
      baslik: "Çevre talebi değiştirir: Stanley örneği",
      kisa: "Ürün değişmeden talep patlıyorsa değişen şey sosyal etkenlerdir.",
      bloklar: [
        { tip: "hikaye", ikon: "🥤", baslik: "Stanley termosu",
          metin: "Birkaç yıl önce Stanley termosu sıradan, yalıtımlı bir bardaktı. Instagram ve TikTok'ta paylaşılınca bir anda herkes istedi. Bardak değişmedi; değişen sosyal etkenlerdi." },
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
          ] }
      ]
    },
    {
      baslik: "Durumsal etkenler: aynı kişi, farklı an",
      kisa: "Kişi ve ürün aynıyken yalnızca an farklıysa cevap durumsal etkendir.",
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
      baslik: "Teknoloji ve yasalar davranışı değiştirir",
      kisa: "Teknoloji alışverişi kolaylaştırır; yasalar ne zaman, nerede, nasıl satılacağını belirler.",
      bloklar: [
        { tip: "ikili", ayirici: "+", sol: { ikon: "📱", baslik: "Teknoloji", maddeler: ["Eskiden lahmacun için dükkâna giderdin; şimdi Yemeksepeti kapına getiriyor", "Fiyat karşılaştırmak, yorum okumak, yeni ürün keşfetmek kolay", "Tek tuşla anında satın alma"] },
          sag: { ikon: "⚖️", baslik: "Yasalar", maddeler: ["Devlet bazı ürünlerin ne zaman, nerede ve nasıl satılacağını belirler", "Yasa değişince davranış da değişir", "Türkiye'de 2019'da plastik poşet paralı oldu; birçok kişi bez çantaya geçti"] } },
        { tip: "not", metin: "Teknoloji bazen ==fazla anlıktır==: altı yaşındaki bir çocuk annesinin hesabından yüzlerce dolarlık oyuncak sipariş etmiş. Yasalar için kalıp: **ne zaman, nerede, nasıl** satılır ya da kullanılır. (Videoda belirli bir yasa örneği yok; poşet örneği Türkiye uyarlaması.)" }
      ]
    },
    {
      baslik: "Cialdini'nin yedi ikna ilkesi",
      kisa: "Yedi ilke müşteri kararını etkiler ama kimseyi zorlamaz.",
      bloklar: [
        { tip: "not", metin: "Psikolog **Robert Cialdini** yedi ilke (*principles of influence*) buldu; işletmeler müşteri kararını etkilemek için bunları kullanır. İlkeler ==zorlamaz, yalnızca etkiler==: *Tommy Boy*'daki \"hayır cevabını kabul etmiyoruz\" satış baskısıdır, ikna değil. Bir markanın sattığı bazen ürün değil, bir topluluğa girişdir: Apple, LEGO." },
        { tip: "kavramlar", kartlar: [
            { ikon: "⏳", terim: "Scarcity", tr: "kıtlık", tanim: "Az bulunan ya da tükenmek üzere olan şey daha değerli ve çekici görünür.", ornek: "\"Son 3 ürün\", sınırlı üretim ayakkabı, bu gece biten kampanya." },
            { ikon: "🥼", terim: "Authority", tr: "otorite", tanim: "Uzmanların ve yetkili kişilerin önerisine güvenme eğilimi.", ornek: "Diş macunu reklamındaki beyaz önlüklü diş hekimi." },
            { ikon: "👥", terim: "Consensus / Social proof", tr: "uzlaşı / sosyal kanıt", tanim: "Başkalarının yaptığına, seçtiğine ve düşündüğüne uyma eğilimi: herkes alıyorsa iyidir.", ornek: "\"Çok satanlar\" etiketi, 10 bin değerlendirme, \"bir milyondan fazla satıldı\"." },
            { ikon: "😍", terim: "Liking", tr: "beğeni", tanim: "Sevdiğimiz, hayran olduğumuz ya da kendimize yakın bulduğumuz kişilerden etkilenme eğilimi.", ornek: "Reklamlardaki futbolcular, ünlüler, YouTuber'lar." },
            { ikon: "🎁", terim: "Reciprocity", tr: "karşılık verme", tanim: "Değerli bir şey aldıktan sonra iyiliğe karşılık verme eğilimi; bedava alınca borçlu hissederiz.", ornek: "Markette tattırılan peynir (*free sample*) ya da ücretsiz deneme ayı (*free trial*)." },
            { ikon: "🪞", terim: "Consistency", tr: "tutarlılık", tanim: "Önceki sözlerimize, davranışlarımıza, inançlarımıza ve kimliğimize uygun davranma eğilimi.", ornek: "Kendine koşucu diyen, ihtiyacı olmasa da yeni koşu ayakkabısını alır." },
            { ikon: "🫂", terim: "Unity", tr: "aidiyet", tanim: "Kimlik ya da aidiyet duygusu paylaştığımız kişilerden etkilenme eğilimi.", ornek: "Apple kullanıcıları, LEGO hayranları, forma alan taraftar." }
          ] },
        { tip: "tablo", baslik: "İşaretinden tanı", head: ["İlke", "İşareti"], rows: [
            ["*Scarcity*", "Süre ya da stok sınırı: \"son 3 ürün\", \"bu gece bitiyor\""],
            ["*Authority*", "Uzman: doktor, diş hekimi, dermatolog"],
            ["*Consensus*", "Kalabalık: \"çok satan\", \"1 milyon kişi aldı\""],
            ["*Liking*", "Tek bir sevilen kişi: ünlü, sporcu, influencer"],
            ["*Reciprocity*", "Önce bedava verilen şey: numune, tadım, ücretsiz deneme"],
            ["*Consistency*", "\"Ben koşucuyum\" gibi kendi kimliğiyle uyum"],
            ["*Unity*", "\"Biz\": bir topluluğa ait olma"]
          ] }
      ]
    },
    {
      baslik: "Karışan ilkeleri ayır",
      kisa: "Kalabalık, uzman ve sevilen kişi birbirine karışır; işarete bak.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "👥", baslik: "*Consensus* / *authority*", maddeler: ["Kalabalık ya da uzman ikna eder", "\"Bir milyon kişi aldı\", \"diş hekimi öneriyor\"", "Güvenilen, sevilen değil"] },
          sag: { ikon: "😍", baslik: "*Liking*", maddeler: ["Tek bir sevilen kişi ikna eder", "Ünlü, sporcu, influencer", "Sevdiğim biri öneriyor"] },
          oyun: [
            { metin: "Etikette \"Amerika'nın favorisi, bir milyondan fazla satıldı\" yazıyor.", cevap: "sol", neden: "Kalabalığın seçimi: *consensus*." },
            { metin: "Sevdiğin futbolcu bir diş macununu tanıtıyor.", cevap: "sag", neden: "Tek bir sevilen kişi: *liking*." },
            { metin: "Diş macunu reklamında beyaz önlüklü bir diş hekimi \"öneriyorum\" diyor.", cevap: "sol", neden: "Uzmanlığı güven veriyor: *authority*." },
            { metin: "Güneş gözlüğünün üstünde \"Best Seller\" etiketi var.", cevap: "sol", neden: "Çok satan = herkes alıyor: *consensus*." },
            { metin: "Takip ettiğin bir YouTuber bir ürünü öneriyor.", cevap: "sag", neden: "Sevilen, hayran olunan biri: *liking*." }
          ] },
        { tip: "tuzak", baslik: "Üç sık karışıklık", metin: "Sınavda bu çiftler birbirinin yerine konur.", yanlis: "Reklamdaki kişi her zaman *liking*'dir; uzman olsa da fark etmez.", dogru: "Kişi ==uzman olduğu için== ikna ediyorsa *authority*, ==sevildiği için== ediyorsa *liking*. *Consensus* kalabalığa, *liking* tek bir kişiye bakar. *Consistency* kişinin kendi kimliğiyle tutarlı kalması, *unity* bir gruba ait olma duygusudur. *Reciprocity* önce bedava vermek, *scarcity* süre ya da stok sınırıdır." },
        { tip: "ornek", baslik: "Mini sınav: bedava ders", durum: "Bir kurs sitesi ilk dersi bedava veriyor. Dersi izleyen 100 kişiden 40'ı paketi satın alıyor; izlemeyen 100 kişiden sadece 10'u. Bu, Cialdini'nin hangi ilkesi?",
          adimlar: ["Satın alma oranı: izleyenlerde %40, izlemeyenlerde %10.", "Fark = 40 − 10 = 30 puan: bedava ders satışı belirgin artırıyor.", "Önce bedava bir şey vermek, karşılığını beklemek: borçlu hissetme.", "\"Son 5 kontenjan\" yazsaydı süre ve stok sınırı olurdu: *scarcity*."],
          sonuc: "==*Reciprocity*==: bedava bir şey alan müşteri karşılık vermek ister." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Consumer behavior*: insanlar neden ve nasıl satın alır. Market düzeni (kasada şeker, arkada süt, *end cap*) *impulse buying*'i tetikler.",
            "Pahalı ve seyrek alımlar mantıkla, ucuz ve sık alımlar alışkanlıkla yapılır; markalar *default choice* olmak ister.",
            "Dört etken: *personal* (kim), *psychological* (kafanın içi), *social and cultural* (başkaları), *situational* (o anki koşul).",
            "Stanley dersi: ürün değişmeden talep patlıyorsa değişen *social factors*'tır. Mağaza düzeni *situational*'dır.",
            "Teknoloji (Yemeksepeti, yorumlar, anında alım) ve yasalar (ne zaman, nerede, nasıl) davranışı değiştirir.",
            "Cialdini'nin yedi ilkesi: *scarcity*, *authority*, *consensus*, *liking*, *reciprocity*, *consistency*, *unity*; zorlamaz, yalnızca etkiler.",
            "Karışan çiftler: *consensus* kalabalık / *liking* tek kişi; *authority* uzman / *liking* sevilen; *consistency* kendi kimliğin / *unity* grup.",
            "*Reciprocity*'nin işareti bedava verilen şey; *scarcity*'nin işareti süre ya da stok sınırı.",
            "Müşteriyi anlayan işletme daha iyi ürün ve kampanya yapar, sonuçta *profit*'i (kârı) artar."
          ] }
      ]
    }
  ]
};
