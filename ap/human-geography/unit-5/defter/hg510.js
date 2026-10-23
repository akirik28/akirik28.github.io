/* Kitpath not defteri · hg510 · Tarımsal Uygulamaların Sonuçları (5.10)
   Kaynak: AP HuG CED Topic 5.10 (IMP-5.A.1–3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg510",
  amac: "Bu konu tarım uygulamalarının çevreye ve topluma bıraktığı izleri anlatıyor: yakma, taraça, sulama gibi uygulamaların manzarayı nasıl değiştirdiğini, kirlilik, çölleşme, toprak tuzlanması ve yeraltı suyunun tükenmesini, koruma yöntemlerini ve beslenme ile kadınların rolündeki değişimi öğreneceksin.",
  bolumler: [
    {
      baslik: "Tarım uygulamaları manzarayı değiştirir",
      kisa: "Her tarım uygulaması araziyi farklı biçimde dönüştürür.",
      bloklar: [
        { tip: "tablo", baslik: "Uygulama ve manzaraya etkisi", head: ["Uygulama", "Ne yapar?", "Manzaraya etkisi"], rows: [
            ["*Slash and burn*", "Ormanı kesip yakarak tarla açar; kül toprağı bir süre besler", "Orman açılır; birkaç yılda verim düşer"],
            ["*Shifting cultivation*", "Birkaç yıl ekim yapılır, sonra toprak dinlenmeye bırakılıp başka parçaya geçilir", "Tarla ve ormanlaşan nadas mozaiği oluşur"],
            ["*Pastoral nomadism*", "Sürüyle mevsimlere göre otlaklar arasında dolaşmak", "Otlak ve göç yolları; aşırı otlatma riski"],
            ["*Terraces*", "Yamaca basamaklı tarlalar açmak", "Yamaç basamaklanır; erozyon azalır"],
            ["*Irrigation*", "Kanal, kuyu ve borularla tarlaya su taşımak", "Kurak arazi yeşillenir; su kaynakları değişir"],
            ["*Deforestation*", "Ormanı kesip tarla ya da otlak açmak", "Arazi örtüsü ormandan tarlaya döner"],
            ["Sulak alan kurutma", "Bataklığı kurutup tarla yapmak", "Sulak alan ve yaşam alanları yok olur"]
          ] },
        { tip: "adimlar", baslik: "Kayan ekim döngüsü", adimlar: [
            { baslik: "Aç ve yak", metin: "Ormandan küçük bir parça kesilir ve yakılır (*slash and burn*)." },
            { baslik: "Ek", metin: "Kül toprağı besler; 2–3 yıl ekim yapılır." },
            { baslik: "Taşın", metin: "Verim düşünce çiftçi yeni bir parçaya geçer." },
            { baslik: "Dinlendir", metin: "Eski parça yıllarca boş kalır, orman geri gelir." },
            { baslik: "Sınır", metin: "Nüfus artıp dinlenme süresi kısalırsa toprak yorulur ve orman azalır." }
          ] }
      ]
    },
    {
      baslik: "Kirlilik ve arazi örtüsü değişimi",
      kisa: "Gübre ve ilaç suları kirletir; ormanlar ve sulak alanlar tarlaya dönüşür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "☣️", terim: "Agricultural pollution", tr: "tarımsal kirlilik", tanim: "Gübre, pestisit ve hayvan atığının suya, toprağa ve havaya karışması. Hayvancılık ayrıca önemli bir sera gazı kaynağıdır.", ornek: "Sığır çiftliklerinden metan salımı." },
            { ikon: "🌳➡️🌾", terim: "Land cover change", tr: "arazi örtüsü değişimi", tanim: "Ormanın, otlağın ya da sulak alanın tarla ve otlağa dönmesi. Biyoçeşitliliği azaltır, toprağı erozyona açar, karbon salar.", ornek: "Amazon'da ormanın sığır otlağı ve soya tarlasına çevrilmesi." }
          ] },
        { tip: "adimlar", baslik: "Gübreden ölü bölgeye", adimlar: [
            { baslik: "Fazla gübre", metin: "Tarlada kullanılmayan gübre yağmurla akarsuya karışır." },
            { baslik: "Alg patlaması", metin: "Besin zengini su, alglerin çok hızlı çoğalmasına yol açar." },
            { baslik: "Oksijen tükenir", metin: "Algler ölüp çürürken sudaki oksijeni harcar." },
            { baslik: "Ölü bölge", metin: "Balık ve diğer canlılar yaşayamaz. Örnek: Mississippi'nin döküldüğü Meksika Körfezi." }
          ] },
        { tip: "tuzak", metin: "Tarımın kirliliği çoğu zaman gözden kaçar.", yanlis: "Tarım çevreyi kirletmez; kirlilik yalnızca sanayi ve şehirlerden gelir.", dogru: "Tarım ==dağınık kaynaklı== (*nonpoint source*) kirlilik üretir: gübre ve ilaç yağmurla yüzlerce kilometre öteye taşınır. Tek bir borudan çıkmadığı için izlenmesi zordur." }
      ]
    },
    {
      baslik: "Çölleşme",
      kisa: "*Desertification*, kurak bölgelerde toprağın bozulup verimini yitirmesidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏜️", terim: "Desertification", tr: "çölleşme", tanim: "Kurak ve yarı kurak bölgelerde kuraklık ve insan etkisiyle toprağın bozulup verimini kaybetmesi. Çölün kendi sınırını genişletmesi değil, arazinin bozulmasıdır.", ornek: "Sahra'nın güneyindeki Sahel kuşağında otlakların çıplaklaşması." },
            { ikon: "🐐", terim: "Overgrazing", tr: "aşırı otlatma", tanim: "Otlağın toparlanmasına izin vermeyecek kadar çok hayvan otlatmak. Bitki örtüsünü yok eder, toprağı rüzgâra açar.", ornek: "Küçük bir mera için fazla büyük bir koyun sürüsü." }
          ] },
        { tip: "grafik", baslik: "Aşırı otlatma, çölleşmeye giden yol (şematik)", xlabel: "Zaman", ylabel: "Düzey", xmax: 10, ymax: 10,
          ogeler: [
            { id: "bit", tip: "egri", renk: 2, noktalar: [[0, 8], [2, 8], [4, 8], [6, 8], [8, 8]], etiket: "Bitki örtüsü" },
            { id: "ero", tip: "egri", renk: 1, noktalar: [[0, 1], [2, 1], [4, 1], [6, 1], [8, 1]], etiket: "Erozyon" },
            { id: "yz", tip: "yazi", x: 4, y: 9.5, metin: "Sürü büyüyor →", gizli: true }
          ],
          durumlar: [
            { metin: "Sürü otlağın taşıma gücü içinde: bitki örtüsü yerinde, toprak korunuyor." },
            { metin: "Sürü büyüyor: bitkiler yeniden büyüyemeden yeniliyor, ==bitki örtüsü azalıyor.==", goster: ["yz"], set: { bit: { noktalar: [[0, 8], [2, 8], [4, 6], [6, 3], [8, 1.2]] } } },
            { metin: "Çıplak toprağı rüzgâr ve yağmur sürükler: ==erozyon artar==, verim düşer. Kuraklık da eklenirse toprak çöl gibi olur.", set: { ero: { noktalar: [[0, 1], [2, 1.2], [4, 2.5], [6, 5.5], [8, 8.5]] } } }
          ] },
        { tip: "tuzak", metin: "Çölleşme çölün yürümesi değildir.", yanlis: "Çölleşme, Sahra gibi bir çölün komşu araziyi yutarak ilerlemesidir.", dogru: "Çölleşme ==arazi bozulmasıdır==: kurak bölgede aşırı otlatma, ormansızlaşma, yanlış sulama ve kuraklık toprağı verimsizleştirir. Nedenin büyük kısmı insan etkisidir." }
      ]
    },
    {
      baslik: "Sulama ve toprak tuzlanması",
      kisa: "Kötü yönetilen sulama tuzu toprakta biriktirir; toprak verimini yitirir.",
      bloklar: [
        { tip: "adimlar", baslik: "Tuzlanma nasıl olur?", adimlar: [
            { baslik: "Sulama", metin: "Kanal ya da kuyu suyu tarlaya verilir; bu suyun içinde az miktarda tuz vardır." },
            { baslik: "Buharlaşma", metin: "Sıcakta su buharlaşır ve bitki suyu çeker; tuz toprakta kalır." },
            { baslik: "Birikme", metin: "Drenaj yetersizse tuz her yıl artar ve yüzeye yakın birikir." },
            { baslik: "Verim düşer", metin: "Tuz bitkinin su almasını engeller; tarlada beyaz tuz kabuğu oluşur." },
            { baslik: "Terk", metin: "Çok tuzlanan tarla ekilemez; çiftçi araziyi bırakır." }
          ] },
        { tip: "grafik", baslik: "Sulamanın önce kazancı, sonra bedeli (şematik)", xlabel: "Sulama yılları", ylabel: "Düzey", xmax: 10, ymax: 10,
          ogeler: [
            { id: "ver", tip: "egri", renk: 2, noktalar: [[0, 3], [2, 6], [4, 7.5], [6, 7.5], [8, 7.5]], etiket: "Verim" },
            { id: "tuz", tip: "egri", renk: 1, noktalar: [[0, 1], [2, 1], [4, 1], [6, 1], [8, 1]], etiket: "Toprak tuzu", gizli: true }
          ],
          durumlar: [
            { metin: "İlk yıllarda sulama kurak toprağı üretken yapar: ==verim artar.==" },
            { metin: "Aynı zamanda her yıl biraz daha tuz birikir; fark başta görünmez.", goster: ["tuz"], set: { tuz: { noktalar: [[0, 1], [2, 1.8], [4, 3.2], [6, 5.5], [8, 8]] } } },
            { metin: "Tuz belli bir düzeyi aşınca ==verim çöker.== Sulamanın kısa vadeli kazancı, uzun vadeli kayba dönüşür.", set: { ver: { noktalar: [[0, 3], [2, 6], [4, 7.5], [6, 5.5], [8, 2.5]] } } }
          ] },
        { tip: "tuzak", metin: "Sulamanın yalnızca iyi bir şey olduğunu sanmak.", yanlis: "Daha fazla sulama toprağı her zaman daha verimli yapar.", dogru: "Sulama kısa vadede verimi artırır; ==drenaj ve su yönetimi yoksa== tuz birikir ve verim uzun vadede düşer. Bu yüzden damla sulama ve yıkama gibi önlemler gerekir." }
      ]
    },
    {
      baslik: "Yeraltı suyunun tükenmesi",
      kisa: "Çekilen su yenilenen suyu aşarsa yeraltı suyu seviyesi düşer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🕳️", terim: "Aquifer", tr: "akifer (yeraltı su deposu)", tanim: "Suyu tutan kum, çakıl ya da kaya katmanı. Kuyularla çıkarılan yeraltı suyu buradandır; yağmurla çok yavaş dolar.", ornek: "ABD Büyük Ovalar'ın altındaki Ogallala Akiferi." },
            { ikon: "📉", terim: "Groundwater depletion", tr: "yeraltı suyunun tükenmesi", tanim: "Akiferden çekilen su, doğal yenilenmeden fazla olduğunda seviyenin sürekli düşmesi.", ornek: "Çok sayıda derin kuyu açılan bir ovada kuyuların kuruması." }
          ] },
        { tip: "grafik", baslik: "Çekim yenilenmeyi aşınca akifer boşalır (şematik)", xlabel: "Yıllar", ylabel: "Su miktarı", xmax: 10, ymax: 10,
          ogeler: [
            { id: "yen", tip: "cizgi", renk: 2, from: [0, 3], to: [8, 3], etiket: "Yenilenme" },
            { id: "cek", tip: "egri", renk: 1, noktalar: [[0, 1.5], [2, 2.5], [4, 3.5], [6, 5], [8, 7]], etiket: "Çekim", gizli: true },
            { id: "kes", tip: "nokta", x: 3, y: 3, etiket: "Çekim = yenilenme", kilavuz: true, gizli: true },
            { id: "fark", tip: "alan", renk: 1, noktalar: [[3, 3], [4, 3.5], [6, 5], [8, 7], [8, 3]], gizli: true }
          ],
          durumlar: [
            { metin: "Akifer, yağmur ve karla yılda belli bir miktar ==yenilenir.== Bu miktar yaklaşık sabittir." },
            { metin: "Sulama arttıkça kuyu sayısı ve ==çekilen su artar.==", goster: ["cek"] },
            { metin: "==Çekim yenilenmeyi aştığı an== akiferin dengesi bozulur.", goster: ["kes"] },
            { metin: "Aradaki fark akiferin kendi stokundan karşılanır: seviye düşer, kuyular derinleşir, çökme çukurları (obruk) oluşabilir.", goster: ["fark"] }
          ] },
        { tip: "tablo", baslik: "Su sorununun örnekleri", head: ["Yer", "Ne oldu?"], rows: [
            ["ABD Büyük Ovaları", "Ogallala Akiferi sulama için yenilenmesinden hızlı çekildi."],
            ["Konya Kapalı Havzası, Türkiye", "Aşırı kuyu sulaması yeraltı suyunu düşürdü; çökme çukurları (obruk) arttı."],
            ["Aral Denizi, Orta Asya", "Nehirlerin suyu pamuk sulaması için kanallara yönlendirildi; deniz büyük ölçüde küçüldü."]
          ] }
      ]
    },
    {
      baslik: "Koruma çabaları",
      kisa: "Taraça, ekim nöbeti, sürümsüz tarım ve damla sulama toprağı ve suyu korur.",
      bloklar: [
        { tip: "tablo", baslik: "Koruma yöntemleri", head: ["Yöntem", "Ne yapar?", "Neye karşı korur?"], rows: [
            ["*Terraces* (taraça)", "Yamaçta basamaklı tarla", "Yamaç erozyonu"],
            ["*Contour plowing*", "Eğimi enine, eşyükselti çizgilerine paralel sürmek", "Yağmur suyunun toprağı sürüklemesi"],
            ["*Crop rotation* (ekim nöbeti)", "Aynı tarlada ürünleri sırayla değiştirmek", "Besin tükenmesi ve hastalık"],
            ["*No-till* (sürümsüz tarım)", "Toprağı sürmeden ekmek", "Erozyon, nem kaybı"],
            ["*Drip irrigation* (damla sulama)", "Suyu doğrudan bitki köküne vermek", "Su israfı ve tuzlanma"],
            ["Rüzgâr perdesi", "Tarla kenarına ağaç sırası dikmek", "Rüzgâr erozyonu"]
          ] },
        { tip: "ikili", sol: { ikon: "⚠️", baslik: "Araziyi zorlayan", maddeler: ["Toprağı çıplak bırakır", "Su ve toprak kaynağını harcar"] },
          sag: { ikon: "🌱", baslik: "Araziyi koruyan", maddeler: ["Toprağı ve suyu tutar", "Verimi uzun vadede sürdürür"] },
          oyun: [
            { metin: "Yamaca taraçalar açmak.", cevap: "sag", neden: "Akan suyu yavaşlatır, erozyonu azaltır." },
            { metin: "Her yıl aynı tarlaya aynı ürünü ekmek.", cevap: "sol", neden: "Besinler tükenir, hastalık birikir." },
            { metin: "Bataklığı kurutup tarlaya çevirmek.", cevap: "sol", neden: "Sulak alan ve yaşam alanı yok olur." },
            { metin: "Damla sulamayla suyu köke vermek.", cevap: "sag", neden: "Su israfı ve tuzlanma azalır." },
            { metin: "Tarlanın kenarına ağaç sırası dikmek.", cevap: "sag", neden: "Rüzgâr hızını keser, toprak savrulmaz." }
          ] }
      ]
    },
    {
      baslik: "Toplumsal sonuçlar: diyet, kadınlar, ekonomik amaç",
      kisa: "Tarım beslenmeyi, kadınların işini ve üretimin amacını da değiştirir.",
      bloklar: [
        { tip: "grafik", baslik: "Gelir arttıkça beslenme kayar (şematik)", xlabel: "Kişi başı gelir", ylabel: "Kalori payı", xmax: 10, ymax: 10,
          ogeler: [
            { id: "tem", tip: "egri", renk: 2, noktalar: [[0, 8.5], [2, 7.5], [4, 6], [6, 4.5], [8, 3.5]], etiket: "Tahıl, kök" },
            { id: "et", tip: "egri", renk: 1, noktalar: [[0, 1.5], [2, 2.5], [4, 4.2], [6, 6], [8, 7]], etiket: "Et, süt, yağ, şeker", gizli: true }
          ],
          durumlar: [
            { metin: "Düşük gelirli bölgelerde kalorinin büyük kısmı ==tahıl ve kök bitkilerden== gelir; gelir ve kentleşme arttıkça payı düşer." },
            { metin: "Aynı anda ==et, süt ürünleri, yağ, şeker ve işlenmiş gıda== payı yükselir. Buna *nutrition transition* (beslenme geçişi) denir.", goster: ["et"] },
            { metin: "Sonuç: hayvan yemi ve et için daha çok tarım arazisi ve su gerekir; ayrıca obezite ve diyabet artabilir." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🍔", terim: "Nutrition transition", tr: "beslenme geçişi", tanim: "Gelir, kentleşme ve küreselleşmeyle diyetin tahıl ağırlıklıdan et, yağ, şeker ve işlenmiş gıdaya kayması.", ornek: "Köyden kente taşınan ailenin evde pişen bulgur yerine hazır ve işlenmiş gıdayı daha sık yemesi." },
            { ikon: "💱", terim: "Economic purpose", tr: "tarımın ekonomik amacı", tanim: "Tarım geçimlikten ticariye geçince toprak, ailenin yemeği yerine satışa yönelik ürüne ayrılır; çiftçi gelir kazanır ama piyasa ve borç riskine girer.", ornek: "Köylünün mısır tarlasını pamuk ya da fındığa çevirmesi." },
            { ikon: "👩‍🌾", terim: "Women's role", tr: "kadınların rolü", tanim: "Kadınlar birçok yerde tarım emeğinin önemli bölümünü yapar; ticarileşme ve makineleşme bu rolü değiştirir (ayrıntı 5.12'de).", ornek: "Erkeklerin kente göçüyle tarlayı kadınların yönetmesi." }
          ] },
        { tip: "tuzak", metin: "Gelir arttıkça beslenme kendiliğinden iyileşmez.", yanlis: "Gelir arttıkça insanlar daha sağlıklı beslenir.", dogru: "Gelirle çeşitlilik artar ama diyet çoğu zaman ==et, yağ, şeker ve işlenmiş gıdaya== kayar. Aynı ülkede hem yetersiz beslenme hem obezite görülebilir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Tarım uygulamaları manzarayı değiştirir: *slash and burn*, *shifting cultivation*, *pastoral nomadism*, *terraces*, sulama, ormansızlaşma ve sulak alan kurutma.",
            "Kirlilik ve arazi örtüsü değişimi: gübre ve ilaç dağınık kaynaklı kirlilik yaratır (alg patlaması, ölü bölge); orman ve sulak alanlar tarlaya dönüşür.",
            "*Desertification* kurak bölgelerde arazi bozulmasıdır (aşırı otlatma, ormansızlaşma, yanlış sulama, kuraklık); çölün yürümesi değildir.",
            "Soil *salinization*: sulama suyu buharlaşır, tuz toprakta kalır; drenaj yoksa verim düşer.",
            "Yeraltı suyu: çekim yenilenmeyi aşınca akifer boşalır; örnekler Ogallala, Konya obrukları ve Aral Denizi.",
            "Koruma: taraça, *contour plowing*, ekim nöbeti, sürümsüz tarım, damla sulama ve rüzgâr perdesi.",
            "Toplumsal sonuçlar: gelirle beslenme geçişi (et, yağ, şeker, işlenmiş gıda artar), tarımın ekonomik amacının geçimlikten ticariye kayması, kadınların rolünün değişmesi."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Sıcak ve kurak bir ovada pamuk tarlaları yıllardır kanalla sulanıyor, ancak drenaj sistemi yok. Yıllar sonra verim düşüyor ve toprak yüzeyinde beyaz bir kabuk oluşuyor. Bu durumu en iyi hangisi açıklar?",
      opts: ["Aşırı otlatma nedeniyle çölleşme", "Gübre akıntısı nedeniyle alg patlaması", "Buharlaşan sulama suyunun geride bıraktığı tuzun toprakta birikmesi (*salinization*)", "Taraçaların bozulması nedeniyle yamaç erozyonu"],
      a: 2,
      why: "Su buharlaşınca içindeki tuz toprakta kalır ve drenaj yoksa yıllar içinde birikir; beyaz kabuk tuzdur. En çekici yanlış şık A: çölleşme de verim düşürür ama sorudaki neden otlatma değil sulamadır." },
    { q: "Tabloda bir akiferden yıllık çekilen ve yıllık yenilenen su miktarı verilmiştir. Tabloya göre aşağıdakilerden hangisi doğrudur?",
      fig: { type: "table", caption: "Akifer (milyon m³/yıl)", head: ["Yıl", "Çekilen su", "Yenilenen su"], rows: [[2000, 40, 40], [2010, 55, 40], [2020, 70, 40]] },
      opts: ["2010'dan itibaren çekim yenilenmeyi aştığı için akiferdeki su her yıl azalıyor", "2000'de çekim yüksek olduğu için akifer o yıl boşalıyor", "2020'de yenilenen su çekilenden fazla olduğu için seviye yükseliyor", "Çekilen su arttığı için yenilenen su da kendiliğinden artıyor"],
      a: 0,
      why: "2000'de çekim = yenilenme (denge); 2010'da 55 > 40, 2020'de 70 > 40: fark akiferin stokundan karşılanır, 2020'de yılda 30 milyon m³. En çekici yanlış şık B: eşit olan çekim akiferi boşaltmaz." },
    { q: "Aşağıdakilerden hangisi *desertification*'ı en iyi tanımlar?",
      opts: ["Sahra Çölü'nün kendi sınırlarını her yıl genişletmesi", "Çöl bölgesinde tarım yapılması", "Sulak alanların kurutulup tarla yapılması", "Kurak ve yarı kurak bölgelerde aşırı otlatma, ormansızlaşma ya da kuraklık yüzünden toprağın bozulup verimini yitirmesi"],
      a: 3,
      why: "Çölleşme arazi bozulmasıdır; nedeni insan etkisi ve kuraklıktır. En çekici yanlış şık A: çölün ilerlemesi olarak sanılır, oysa arazinin bozulması çölden uzakta da olabilir." },
    { q: "Mississippi Nehri havzasındaki tarlalardan gelen fazla gübre, nehrin döküldüğü Meksika Körfezi'nde oksijeni çok az bir ölü bölge oluşturmaktadır. Süreç hangi sırayla işler?",
      opts: ["Oksijen artar → balıklar çoğalır → gübre azalır", "Gübre akıntısı → alg çoğalması → çürüyen algların oksijeni tüketmesi → canlı ölümleri", "Tuz birikir → verim düşer → alg çoğalır → su buharlaşır", "Aşırı otlatma → bitki örtüsü azalır → erozyon → ölü bölge"],
      a: 1,
      why: "Besin zengini su alg çoğalmasına yol açar; algların çürümesi oksijeni tüketir ve canlılar ölür. En çekici yanlış şık C: tuz birikimi sulama kaynaklı toprak sorunudur, suda oksijen kaybının nedeni değildir." },
    { q: "Bir ülkede kişi başı gelir ve kentleşme artarken, tahıl ve kök bitki ağırlıklı beslenmenin payı azalmakta; et, süt ürünleri, yağ ve işlenmiş gıdanın payı artmaktadır. Bu değişimin tarım üzerindeki en olası sonucu hangisidir?",
      opts: ["Hayvan yemi ve et üretimi için ayrılan tarım arazisi ve su ihtiyacı artar", "Geçimlik tarımın toplam üretimdeki payı artar", "Tarım arazisi ihtiyacı azalır ve ormanlar kendiliğinden geri gelir", "Sulama ihtiyacı kalmaz, yeraltı suyu yenilenir"],
      a: 0,
      why: "Et ve süt ürünleri bitkisel gıdaya göre çok daha fazla arazi, yem ve su ister; bu yüzden diyet değişimi tarımsal baskıyı artırır. En çekici yanlış şık B: gelir ve kentleşme genellikle ticari tarımın payını artırır, geçimliğinkini değil." }
  ]
};
