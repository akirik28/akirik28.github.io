/* Kitora not defteri · bi209 · 2.9 Ayak İzleri, Sürdürülebilirlik ve Atık Yönetimi
   Kaynak: öğretmen lecture'ı (2.5–2.9 Lecture Notes: ecological sustainability, ecological footprint, waste management) + okul-10-2025-26.md + MEB Maarif BİY.10.2. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bi209",
  amac: "Doğaya ne kadar yük bindirdiğimizi ölçen üç ayak izini (karbon, ekolojik, su), ekolojik sürdürülebilirliğin ne demek olduğunu, başlıca uluslararası anlaşmaları ve atık yönetimini (kompost, biyometanizasyon, yakma, düzenli depolama) öğreneceksin. Küçük hesaplarla kendi ayak izini yorumlayabileceksin.",
  bolumler: [
    {
      baslik: "Ayak izi nedir?",
      kisa: "Ayak izi, bir kişinin ya da toplumun doğadan ne kadar kaynak kullandığını ölçer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "☁️", terim: "Carbon footprint", tr: "karbon ayak izi", tanim: "Bir kişinin, ürünün ya da etkinliğin doğrudan ve dolaylı yoldan saldığı toplam sera gazı (CO₂ eşdeğeri, kg ya da ton).", ornek: "Uçak yolculuğu, evde ısınma, yenilen et." },
            { ikon: "🌍", terim: "Ecological footprint", tr: "ekolojik ayak izi", tanim: "Kişi ya da toplumun doğal kaynakları doğrudan ve dolaylı tüketmesinin ölçüsü: kullanılan kaynakları yenilemek ve atığı zararsız kılmak için gereken kara ve su alanı. Birimi küresel hektar (*gha*).", ornek: "Yiyecek, giysi, enerji, yapılaşma için gereken toplam alan." },
            { ikon: "💧", terim: "Water footprint", tr: "su ayak izi", tanim: "Bir ürünün ya da kişinin tükettiği toplam tatlı su; üretim zincirindeki su da dahildir (litre).", ornek: "Bir pamuklu tişörtün üretimi için kullanılan su." }
          ] },
        { tip: "harita", merkez: "Ayak izini küçültmek", dallar: [
            { baslik: "Ulaşım", alt: "Özel araç yerine toplu taşıma, bisiklet, yürüyüş" },
            { baslik: "Beslenme", alt: "Organik, doğal, yerel gıda; gıda israfını önle" },
            { baslik: "Enerji", alt: "Yenilenebilir kaynak (güneş, rüzgâr, dalga), tasarruflu cihaz" },
            { baslik: "Atık", alt: "Azalt, yeniden kullan (ikinci el, takas), geri dönüştür, kompostla" },
            { baslik: "Su", alt: "Verimli kullan, kullanılmış suyu arıt ve yeniden kullan" }
          ] },
        { tip: "not", metin: "Gıda israfı üretimden tüketime her aşamada önlenmelidir: taşımada güneş enerjili araç, baca gazı filtresi, atık su arıtma, ambalaj atığı ayrıştırma, gıda atığından biyoetanol ve biyogaz, hayvansal atığın gübre, bitkisel atığın kompost olarak kullanımı. Sınavda böyle yaz: *A footprint measures the impact of human activities on the environment.* *The carbon footprint is the total amount of greenhouse gases produced by an activity.*" }
      ]
    },
    {
      baslik: "Karbon ayak izi",
      kisa: "Karbon ayak izi = faaliyet miktarı × emisyon faktörü.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Karbon ayak izi", alt: "kg CO₂" }, "=",
            { t: "Faaliyet miktarı", alt: "km, kWh, kg" }, "×",
            { t: "Emisyon faktörü", alt: "kg CO₂ / birim" }
          ], aciklama: "Emisyon faktörü, bir birim faaliyetin saldığı CO₂ miktarıdır." },
        { tip: "ornek", baslik: "Okul yolu: araba mı otobüs mü? (ek bilgi: örnek değerler)", durum: "Okula gidiş-dönüş 10 km, yılda 200 okul günü. Basitleştirilmiş örnek faktörler: araba (tek yolcu) 0,2 kg CO₂/km, otobüs 0,1 kg CO₂/yolcu-km, bisiklet 0. Yıllık ayak izi farkı nedir?",
          adimlar: [
            "Yıllık mesafe = 10 km × 200 gün = 2000 km.",
            "Araba: 2000 × 0,2 = 400 kg CO₂. Otobüs: 2000 × 0,1 = 200 kg CO₂. Bisiklet: 0.",
            "Arabadan otobüse geçersen 400 − 200 = 200 kg CO₂ tasarruf edersin."
          ], sonuc: "Fark 200 kg CO₂/yıl. Bisiklet ya da yürüyüşle bu yolculuğun karbon ayak izi sıfıra yakındır." },
        { tip: "not", metin: "==*Carbon neutral*== (karbon nötr), saldığın kadar CO₂'yi tutmak ya da dengelemek demektir. ==*Net zero*== ise salınımı olabildiğince azaltıp geriye kalanı yutaklarla (ormanlar, okyanus) dengelemektir. Dengelemek, önce azaltmanın yerine geçmez." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Using public transport instead of a car reduces my carbon footprint.*", metin: "Önlem cümlesi." },
            { ikon: "✍️", baslik: "*Carbon footprint = activity data × emission factor.*", metin: "Formül cümlesi." }
          ] }
      ]
    },
    {
      baslik: "Ekolojik ayak izi",
      kisa: "Talep (ayak izi) biyokapasiteyi aşarsa ekolojik açık oluşur.",
      bloklar: [
        { tip: "grafik", baslik: "Ayak izi ve biyokapasite (kurgusal ülkeler, örnek değerler)", xlabel: "Ülke", ylabel: "gha / kişi", xmax: 8, ymax: 10,
          xticks: [{ v: 1.65, label: "Ülke A" }, { v: 4.15, label: "Ülke B" }, { v: 6.65, label: "Ülke C" }],
          ogeler: [
            { id: "ba", tip: "alan", renk: 2, noktalar: [[0.8, 0], [1.6, 0], [1.6, 0], [0.8, 0]] },
            { id: "bb", tip: "alan", renk: 2, noktalar: [[3.3, 0], [4.1, 0], [4.1, 0], [3.3, 0]] },
            { id: "bc", tip: "alan", renk: 2, noktalar: [[5.8, 0], [6.6, 0], [6.6, 0], [5.8, 0]] },
            { id: "fa", tip: "alan", renk: 3, noktalar: [[1.7, 0], [2.5, 0], [2.5, 0], [1.7, 0]] },
            { id: "fb", tip: "alan", renk: 3, noktalar: [[4.2, 0], [5.0, 0], [5.0, 0], [4.2, 0]] },
            { id: "fc", tip: "alan", renk: 3, noktalar: [[6.7, 0], [7.5, 0], [7.5, 0], [6.7, 0]] },
            { id: "la", tip: "yazi", x: 1.2, y: 4.5, metin: "arz 4", gizli: true },
            { id: "lb", tip: "yazi", x: 3.7, y: 3.5, metin: "arz 3", gizli: true },
            { id: "lc", tip: "yazi", x: 6.2, y: 2.5, metin: "arz 2", gizli: true },
            { id: "lfa", tip: "yazi", x: 2.1, y: 2.5, metin: "talep 2", gizli: true },
            { id: "lfb", tip: "yazi", x: 4.6, y: 3.5, metin: "talep 3", gizli: true },
            { id: "lfc", tip: "yazi", x: 7.1, y: 5.5, metin: "talep 5", gizli: true },
            { id: "ra", tip: "yazi", x: 1.65, y: 8.8, metin: "ekolojik rezerv", gizli: true },
            { id: "rb", tip: "yazi", x: 4.15, y: 8.8, metin: "denge", gizli: true },
            { id: "rc", tip: "yazi", x: 6.65, y: 8.8, metin: "ekolojik açık", gizli: true }
          ],
          durumlar: [
            { metin: "Doğanın bir yılda yenileyebildiği üretken alan: ==*biocapacity*== (biyokapasite, arz). Ülkeye göre değişir.", set: { ba: { noktalar: [[0.8, 0], [1.6, 0], [1.6, 4], [0.8, 4]] }, bb: { noktalar: [[3.3, 0], [4.1, 0], [4.1, 3], [3.3, 3]] }, bc: { noktalar: [[5.8, 0], [6.6, 0], [6.6, 2], [5.8, 2]] } }, goster: ["la", "lb", "lc"] },
            { metin: "Ülke A: talep (ayak izi) 2, biyokapasite 4. Talep arzdan küçük: ==*ecological reserve*==.", set: { fa: { noktalar: [[1.7, 0], [2.5, 0], [2.5, 2], [1.7, 2]] } }, goster: ["lfa", "ra"] },
            { metin: "Ülke B: talep 3, biyokapasite 3. Tam denge.", set: { fb: { noktalar: [[4.2, 0], [5.0, 0], [5.0, 3], [4.2, 3]] } }, goster: ["lfb", "rb"] },
            { metin: "Ülke C: talep 5, biyokapasite 2. Talep arzı aşıyor: ==*ecological deficit*== (ekolojik açık). Açık; ithalatla, kaynakları tüketerek ve atmosferde CO₂ biriktirerek kapatılır.", set: { fc: { noktalar: [[6.7, 0], [7.5, 0], [7.5, 5], [6.7, 5]] } }, goster: ["lfc", "rc"] }
          ] },
        { tip: "not", metin: "Biyokapasite, Dünya'nın tükettiğimiz kaynakları yenileme ve atığı tolere etme gücüdür; ayak izi ile biyokapasite arasındaki fark ekolojik açıktır. Türkiye'de ekolojik ayak izinin %82'si kişisel tüketimden gelir, asıl kaynak gıdadır. Kurumların karbon salınımını azaltması bireysel çabadan daha etkilidir. Sınavda böyle yaz: *An ecological deficit occurs when the ecological footprint is larger than the biocapacity.*" },
        { tip: "not", metin: "(Ek bilgi) Dünya ölçeğinde insanlık, doğanın yıllık yenileme kapasitesinin üzerinde kaynak kullanıyor: yaklaşık 1,7 Dünya'ya denk. ==*Earth Overshoot Day*== (ekolojik taşma günü), yıl içinde yıllık kaynak bütçesinin tükendiği gündür; son yıllarda temmuz ve ağustosa denk geliyor." },
        { tip: "tuzak", metin: "Ekolojik ayak izi ile karbon ayak izi sık karıştırılır.", yanlis: "Ekolojik ayak izi yalnızca CO₂ salınımıdır.", dogru: "Ekolojik ayak izi tarım, otlak, orman ürünü, balıkçılık, yapılaşma alanı ve CO₂'yi yutmak için gereken orman alanını içerir. ==Karbon ayak izi onun bir bileşenidir== (çoğu zaman en büyük payı)." }
      ]
    },
    {
      baslik: "Su ayak izi",
      kisa: "Su ayak izi mavi, yeşil ve gri sudan oluşur; ürünün içindeki sanal su dahildir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔵", terim: "Blue water", tr: "mavi su", tanim: "Sulama, sanayi ve evde kullanılan yüzey ve yeraltı suyu.", ornek: "Pamuk tarlasının baraj suyuyla sulanması." },
            { ikon: "🟢", terim: "Green water", tr: "yeşil su", tanim: "Toprakta tutulup bitkinin kullandığı yağmur suyu.", ornek: "Yağmurla yetişen kuru tarım buğdayı." },
            { ikon: "⚪", terim: "Grey water", tr: "gri su", tanim: "Kirleticiyi kabul edilebilir düzeye seyreltmek için gereken temiz su miktarı.", ornek: "Boyama atık suyunu seyreltmek için gereken su." },
            { ikon: "🚢", terim: "Virtual water", tr: "sanal su", tanim: "Ürünün üretiminde harcanan ama ürünün içinde görünmeyen su. Ürün ticaretiyle ülkeler arasında taşınır.", ornek: "Ülkeye pamuk ya da et ithal etmek, o ürünün suyunu ithal etmektir." }
          ] },
        { tip: "tablo", baslik: "Ürünlerin yaklaşık su ayak izi (küresel ortalama; ek bilgi)", head: ["Ürün", "Yaklaşık su (litre)", "Neden bu kadar?"],
          rows: [
            ["1 kg sığır eti", "≈ 15 000", "Yem bitkisi sulaması ve uzun yetiştirme süresi"],
            ["1 pamuklu tişört", "≈ 2 700", "Pamuk sulaması, boyama ve işleme"],
            ["1 kg buğday", "≈ 1 800", "Tarla sulaması ve yağmur suyu"],
            ["1 kg domates", "≈ 200", "Kısa üretim süresi, yüksek verim"],
            ["1 fincan kahve", "≈ 140", "Kahve bitkisinin yetiştirilmesi"]
          ], not: "Değerler kaynağa ve ülkeye göre değişir; büyüklük sıralaması önemlidir." },
        { tip: "ornek", baslik: "Yılda 5 tişört", durum: "Bir öğrenci yılda 5 yeni pamuklu tişört alıyor (tişört başına ≈ 2 700 L). İkinci elden alırsa ne kadar su dolaylı olarak tasarruf edilir?",
          adimlar: [
            "Yeni tişört: 5 × 2 700 = 13 500 L.",
            "İkinci el tişört için yeni üretim gerekmez; bu su kullanılmaz.",
            "Tasarruf = 13 500 L ≈ 13,5 m³."
          ], sonuc: "Yaklaşık 13 500 L su. Ürünü daha uzun kullanmak su ayak izini küçültür." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The water footprint includes blue, green and grey water.*", metin: "Üç bileşen." },
            { ikon: "✍️", baslik: "*Producing one kilogram of beef requires much more water than producing one kilogram of wheat.*", metin: "Karşılaştırma." }
          ] }
      ]
    },
    {
      baslik: "Sürdürülebilirlik ve uluslararası anlaşmalar",
      kisa: "Sürdürülebilirlik, bugünün ihtiyacını gelecek nesillerin hakkını gözeterek karşılamaktır.",
      bloklar: [
        { tip: "harita", merkez: "Sürdürülebilir kalkınma (*sustainable development*)", dallar: [
            { baslik: "Çevre (ekolojik sürdürülebilirlik)", alt: "Kaynakları yenilenme hızının altında kullan; ekosistem dengesini ve biyoçeşitliliği koru" },
            { baslik: "Toplum", alt: "Sağlık, eğitim, eşitlik" },
            { baslik: "Ekonomi", alt: "Kalıcı üretim ve adil gelir" },
            { baslik: "Tanım (1987)", alt: "Brundtland raporu *Ortak Geleceğimiz*: bugünün ihtiyaçları, gelecek kuşakların ihtiyaçlarını tehlikeye atmadan karşılanır" },
            { baslik: "SKH (*SDGs*)", alt: "BM 2030 Gündemi, 2015: 17 hedef, 169 alt hedef, 2030'a kadar" },
            { baslik: "Döngüsel ekonomi", alt: "Al–yap–at yerine ürünü uzun kullan, atığı kaynağa çevir (*circular economy*)" }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "*Sustainable*", maddeler: ["Kaynak yenilendiği hızda kullanılır"] },
          sag: { ikon: "⛔", baslik: "*Unsustainable*", maddeler: ["Kaynak yenilenmeden önce tükenir"] },
          oyun: [
            { metin: "Güneş ve rüzgâr enerjisiyle elektrik üretmek.", cevap: "sol", neden: "Kaynak tükenmez: *sustainable*." },
            { metin: "Balık stokunu yenilenme hızından fazla avlamak.", cevap: "sag", neden: "Stok tükenir: *unsustainable*." },
            { metin: "Ormanı kesmek ama yıllık kesimi yıllık büyümenin altında tutmak.", cevap: "sol", neden: "Orman kendini yeniler: *sustainable*." },
            { metin: "Yeraltı suyunu yenilenme hızından fazla çekmek.", cevap: "sag", neden: "Su seviyesi düşer: *unsustainable*." },
            { metin: "Atıkları ayırıp geri dönüştürmek.", cevap: "sol", neden: "Hammaddeyi tekrar kullanır: *sustainable*." }
          ] },
        { tip: "tablo", baslik: "Önemli uluslararası anlaşmalar", head: ["Anlaşma", "Yıl", "Konu"],
          rows: [
            ["Montreal Protokolü", "1987", "Ozon tabakasını inceltenlerin (CFC) kullanımını sonlandırma"],
            ["Basel Sözleşmesi", "1989", "Tehlikeli atıkların sınırlar ötesi taşınmasını denetleme"],
            ["Rio Zirvesi (BM İklim Sözleşmesi ve Biyoçeşitlilik Sözleşmesi)", "1992", "İklim değişikliği ve biyoçeşitlilik için ortak çerçeve"],
            ["Kyoto Protokolü", "1997", "Gelişmiş ülkelerin sera gazı azaltma hedefleri"],
            ["Stockholm Sözleşmesi", "2001", "Kalıcı organik kirleticilerin (DDT gibi) kısıtlanması"],
            ["Paris Anlaşması", "2015", "Isınmayı 2 °C'nin çok altında, 1,5 °C'ye yakın tutma çabası"],
            ["BM Sürdürülebilir Kalkınma Hedefleri", "2015", "2030'a kadar 17 hedef"]
          ] },
        { tip: "not", metin: "Türkiye'den örnek: Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın Sıfıra Yakın Enerjili Binalar Projesi (Türkiye Yüzyılı projeleri). Sıfır enerjili bina, yıl içinde tükettiği kadar enerjiyi yenilenebilir kaynaklardan (güneş paneli, rüzgâr, ısı pompası) üretir; fosil yakıt bağımlılığını ve sera gazını azaltır. Anayasa'nın 56. maddesi herkese sağlıklı ve dengeli çevrede yaşama hakkı verir; çevreyi korumak devletin ve vatandaşların ödevidir. Sınavda böyle yaz: *Sustainability means meeting present needs without compromising the ability of future generations to meet their own needs.*" }
      ]
    },
    {
      baslik: "Atık yönetimi",
      kisa: "Önce atığı önle, sonra yeniden kullan, sonra geri dönüştür.",
      bloklar: [
        { tip: "adimlar", baslik: "Atık hiyerarşisi (en iyiden en kötüye)", adimlar: [
            { baslik: "1. Önleme ve azaltma (*refuse*, *reduce*)", metin: "Gereksiz şeyi hiç alma, ambalajı azalt. En az atık burada oluşur." },
            { baslik: "2. Yeniden kullanma (*reuse*)", metin: "Cam kavanoz, ikinci el eşya, bez torba." },
            { baslik: "3. Geri dönüşüm ve kompost (*recycle*, *compost*)", metin: "Kâğıt, cam, metal, plastik ayrı toplanır; organik atık kompost olup toprağa döner. Geri dönüşüm de enerji ve su harcar." },
            { baslik: "4. Enerji geri kazanımı", metin: "Geri dönüşmeyen atık yakılarak ısı ve elektrik elde edilir; filtre gerekir." },
            { baslik: "5. Düzenli depolama (*landfill*)", metin: "En son seçenek. Sızıntı suyu (*leachate*) yeraltı suyunu kirletebilir, çürüyen organik atık metan (CH₄) verir." }
          ] },
        { tip: "tablo", baslik: "Atık türleri ve doğru yöntem", head: ["Atık", "Doğada kalma süresi", "Doğru yöntem"],
          rows: [
            ["Organik (yemek, bahçe)", "Haftalar–aylar", "Kompost"],
            ["Kâğıt ve karton", "Aylar–yıllar", "Geri dönüşüm"],
            ["Plastik", "Yüzyıllar", "Azaltma, ayrı toplama ve geri dönüşüm"],
            ["Cam", "Binlerce yıl", "Defalarca geri dönüşüm"],
            ["Metal (alüminyum)", "Çok uzun", "Geri dönüşüm: yeni üretimden çok daha az enerji"],
            ["Pil, elektronik, ilaç, boya (tehlikeli atık)", "Zehirlidir", "Ayrı toplama noktaları; çöpe atılmaz"]
          ], not: "Türkiye'de Sıfır Atık Projesi 2017'de başladı; BM 2022'de 30 Mart'ı Uluslararası Sıfır Atık Günü ilan etti. Market poşetleri 2019'dan beri ücretlidir." },
        { tip: "tuzak", metin: "Geri dönüşüm herkesin bildiği ama hiyerarşinin ortasında duran bir adımdır.", yanlis: "Geri dönüşüm atık sorununun en iyi çözümüdür.", dogru: "Hiyerarşide ==önleme, azaltma ve yeniden kullanma geri dönüşümden önce== gelir. En iyi atık hiç oluşmayan atıktır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The waste hierarchy ranks prevention and reuse above recycling and disposal.*", metin: "Hiyerarşi cümlesi." },
            { ikon: "✍️", baslik: "*Organic waste can be composted to return nutrients to the soil.*", metin: "Kompost." }
          ] }
      ]
    },
    {
      baslik: "Atık bertaraf yöntemleri",
      kisa: "Ayrılan atıktan geri kalan; kompost, biyometanizasyon, yakma ya da düzenli depolamayla işlenir.",
      bloklar: [
        { tip: "tablo", baslik: "Atık bertarafı: ayırmadan sonra", head: ["Yöntem", "Nasıl yapılır?", "Ürün / yarar"], rows: [
            ["Kompost (*composting*)", "Organik atık denetimli koşullarda biyolojik olarak ayrıştırılır", "Humus benzeri kompost: toprağı iyileştirir, mikroorganizmaları artırır, atık hacmini azaltır, patojen ve kokuyu giderir"],
            ["Biyometanizasyon (*biomethanation*)", "Organik atık oksijensiz ortamda parçalanır", "Biyogaz (metan + CO₂): elektrik, ısı ve yakıt; organik gübre; fosil yakıt ve sera gazı azalır"],
            ["Yakma (*incineration*)", "Katı atık yakılarak hacmi azaltılır", "Isı enerjisi buhar türbininde elektriğe çevrilir; baca gazı zarar vermeyecek biçimde arıtılmalı"],
            ["Düzenli depolama (*sanitary landfill*)", "Atık serilir, sıkıştırılır, üstü örtülür", "Sızıntı suyu yeraltı suyuna karışmaz, gaz toplanır; dolunca kapatılır"]
          ], not: "Sınavda böyle yaz: *Composting converts organic waste into a stable, humus-like product that improves the soil.*" },
        { tip: "not", metin: "Atık kaynağında ayrılmalıdır: geri dönüşebilir atık, mutfak atığı ve diğer atık karıştırılmaz. Düzensiz çöp alanları hastalık, toprak ve su kirliliği, koku, zararlı canlı, heyelan ve metan patlaması riski taşır; eski düzensiz alanlar kapatılıp rehabilite edilmelidir. Bu yüzden atık yönetimi önleme, azaltma, ayırma, toplama, taşıma, geri dönüşüm ve bertarafı birlikte kapsar." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Karbon ayak izi = faaliyet × emisyon faktörü (kg CO₂). Ulaşım, enerji, beslenme ve tüketim belirler.",
            "Ekolojik ayak izi: gereken üretken alan (gha). Talep biyokapasiteyi aşarsa ekolojik açık; insanlık yaklaşık 1,7 Dünya kullanıyor.",
            "Su ayak izi: mavi (sulama suyu), yeşil (yağmur suyu), gri (kirliliği seyreltme suyu); sanal su ürünün içindeki sudur.",
            "Sığır eti ve pamuk gibi ürünlerin su ayak izi çok büyüktür.",
            "Sürdürülebilirlik: bugünün ihtiyacını gelecek kuşakların hakkını tehlikeye atmadan karşılamak; çevre (ekolojik), toplum, ekonomi. Örnek: Sıfıra Yakın Enerjili Binalar.",
            "Anlaşmalar: Montreal 1987 (ozon), Basel 1989 (atık), Rio 1992, Kyoto 1997, Stockholm 2001 (kalıcı kirleticiler), Paris 2015, SKH 2015.",
            "Atık hiyerarşisi: önle/azalt → yeniden kullan → geri dönüştür/kompost → enerji geri kazanımı → düzenli depolama. Bertaraf: kompost, biyometanizasyon, yakma, düzenli depolama.",
            "Döngüsel ekonomi atığı kaynağa çevirir; en iyi atık oluşmayan atıktır."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "A student travels 8 km to and from school and goes to school 200 days a year. What is the difference in annual carbon footprint, in kg CO₂, between travelling by car (0.2 kg CO₂/km) and by bus (0.1 kg CO₂ per passenger-km)?",
      opts: ["80", "160", "320", "480"],
      a: 1,
      why: "Yıllık mesafe 8 × 200 = 1600 km. Araba 1600 × 0,2 = 320 kg, otobüs 1600 × 0,1 = 160 kg; fark 320 − 160 = 160 kg. 320 yalnızca arabanın ayak izidir; fark değil."
    },
    {
      q: "The table shows the ecological footprint and biocapacity per person of three countries (gha). Which country has an ecological deficit?",
      fig: { type: "table", head: ["Country", "X", "Y", "Z"], rows: [["Ecological footprint", 2, 3, 5], ["Biocapacity", 4, 3, 2]], caption: "gha per person" },
      opts: ["X only", "Y only", "Z only", "All of them"],
      a: 2,
      why: "Ekolojik açık, ayak izinin biyokapasiteden büyük olduğu durumdur. Yalnızca Z'de 5 > 2. X'te rezerv, Y'de denge vardır."
    },
    {
      q: "Irrigating a cotton field with water from a dam, the rainwater used by the plants in the field, and the water needed to dilute dyeing wastewater are, respectively, which components of the water footprint?",
      opts: ["Green, blue, grey", "Grey, green, blue", "Blue, grey, green", "Blue, green, grey"],
      a: 3,
      why: "Yüzey ve yeraltı suyu kullanımı mavi su, toprakta tutulan yağmur suyu yeşil su, kirliliği seyreltmek için gereken su gri sudur."
    },
    {
      q: "According to the waste hierarchy, which of the following is the most preferred option?",
      opts: ["Sending the waste to a landfill", "Burning the waste to obtain energy", "Preventing or reducing the creation of waste", "Recycling plastic waste"],
      a: 2,
      why: "Hiyerarşide en iyi seçenek atığı hiç oluşturmamak ya da azaltmaktır. Geri dönüşüm de enerji ve su harcar ve ancak sonra gelir; yakma ve depolama en alt sıradadır."
    },
    {
      q: "Which waste disposal method breaks organic waste down without oxygen and produces biogas that can be used for electricity and heat?",
      opts: ["Biomethanation", "Composting", "Incineration", "Sanitary landfilling without gas collection"],
      a: 0,
      why: "Biyometanizasyon organik atığı oksijensiz ortamda parçalayıp metan ve CO₂ içeren biyogaz üretir. Kompost oksijenli, denetimli bir ayrışmadır ve biyogaz vermez; yakma atığı yakarak hacmini azaltır."
    }
  ]
};
