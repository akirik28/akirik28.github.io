/* Kitora not defteri · bi209 · 2.9 Ayak İzleri, Sürdürülebilirlik ve Atık Yönetimi
   Kaynak: okul-10-2025-26.md (Biology Tema 2) + MEB Maarif BİY.10.2. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bi209",
  amac: "Doğaya ne kadar yük bindirdiğimizi ölçen üç ayak izini (karbon, ekolojik, su), sürdürülebilirliğin ne demek olduğunu, başlıca uluslararası anlaşmaları ve atık yönetimini öğreneceksin. Küçük hesaplarla kendi ayak izini yorumlayabileceksin.",
  bolumler: [
    {
      baslik: "Ayak izi nedir?",
      kisa: "Ayak izi, bir kişinin ya da toplumun doğadan ne kadar kaynak kullandığını ölçer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "☁️", terim: "Carbon footprint", tr: "karbon ayak izi", tanim: "Bir kişinin, ürünün ya da etkinliğin doğrudan ve dolaylı yoldan saldığı toplam sera gazı (CO₂ eşdeğeri, kg ya da ton).", ornek: "Uçak yolculuğu, evde ısınma, yenilen et." },
            { ikon: "🌍", terim: "Ecological footprint", tr: "ekolojik ayak izi", tanim: "Tükettiğin kaynakları üretmek ve atığını (özellikle CO₂'yi) yutmak için gereken biyolojik olarak verimli kara ve su alanı. Birimi küresel hektar (*gha*).", ornek: "Yiyecek, giysi, enerji, yapılaşma için gereken toplam alan." },
            { ikon: "💧", terim: "Water footprint", tr: "su ayak izi", tanim: "Bir ürünün ya da kişinin tükettiği toplam tatlı su; üretim zincirindeki su da dahildir (litre).", ornek: "Bir pamuklu tişörtün üretimi için kullanılan su." }
          ] },
        { tip: "harita", merkez: "Günlük hayatta ayak izi", dallar: [
            { baslik: "Ulaşım", alt: "Araba ve uçak çok CO₂ verir; yürüyüş, bisiklet, toplu taşıma az" },
            { baslik: "Beslenme", alt: "Kırmızı et ve israf izi büyütür; mevsiminde, yerel, bitkisel gıda küçültür" },
            { baslik: "Enerji", alt: "Isıtma, soğutma, elektrik; verimli cihaz ve yenilenebilir enerji" },
            { baslik: "Tüketim", alt: "Her yeni giysi ve telefonun üretim izi vardır" },
            { baslik: "Atık", alt: "Çöp ve plastik; azaltma, yeniden kullanma, geri dönüşüm" }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*A footprint measures the impact of human activities on the environment.*", metin: "Genel tanım." },
            { ikon: "✍️", baslik: "*The carbon footprint is the total amount of greenhouse gases produced by an activity.*", metin: "Karbon ayak izi." }
          ] }
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
        { tip: "ornek", baslik: "Okul yolu: araba mı otobüs mü?", durum: "Okula gidiş-dönüş 10 km, yılda 200 okul günü. Basitleştirilmiş örnek faktörler: araba (tek yolcu) 0,2 kg CO₂/km, otobüs 0,1 kg CO₂/yolcu-km, bisiklet 0. Yıllık ayak izi farkı nedir?",
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
        { tip: "not", metin: "Dünya ölçeğinde insanlık, doğanın yıllık yenileme kapasitesinin üzerinde kaynak kullanıyor: yaklaşık 1,7 Dünya'ya denk. ==*Earth Overshoot Day*== (ekolojik taşma günü), yıl içinde yıllık kaynak bütçesinin tükendiği gündür; son yıllarda temmuz ve ağustosa denk geliyor." },
        { tip: "tuzak", metin: "Ekolojik ayak izi ile karbon ayak izi sık karıştırılır.", yanlis: "Ekolojik ayak izi yalnızca CO₂ salınımıdır.", dogru: "Ekolojik ayak izi tarım, otlak, orman ürünü, balıkçılık, yapılaşma alanı ve CO₂'yi yutmak için gereken orman alanını içerir. ==Karbon ayak izi onun bir bileşenidir== (çoğu zaman en büyük payı)." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*An ecological deficit occurs when the ecological footprint is larger than the biocapacity.*", metin: "Ekolojik açık." },
            { ikon: "✍️", baslik: "*Humanity is using more resources than the Earth can regenerate in a year.*", metin: "Küresel durum." }
          ] }
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
        { tip: "tablo", baslik: "Ürünlerin yaklaşık su ayak izi (küresel ortalama)", head: ["Ürün", "Yaklaşık su (litre)", "Neden bu kadar?"],
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
            { baslik: "Çevre", alt: "Ekosistemleri ve yenilenebilir kaynakları koru" },
            { baslik: "Toplum", alt: "Sağlık, eğitim, eşitlik" },
            { baslik: "Ekonomi", alt: "Kalıcı üretim ve adil gelir" },
            { baslik: "Tanım (1987)", alt: "Brundtland raporu *Ortak Geleceğimiz*: bugünün ihtiyaçları, gelecek kuşakların ihtiyaçlarını tehlikeye atmadan karşılanır" },
            { baslik: "SKH (*SDGs*)", alt: "BM, 2015: 17 hedef, 2030'a kadar" },
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
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Sustainability means meeting present needs without compromising the ability of future generations to meet their own needs.*", metin: "Brundtland tanımı." },
            { ikon: "✍️", baslik: "*International agreements help countries cooperate to solve global environmental problems.*", metin: "Anlaşmaların amacı." }
          ] }
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
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Karbon ayak izi = faaliyet × emisyon faktörü (kg CO₂). Ulaşım, enerji, beslenme ve tüketim belirler.",
            "Ekolojik ayak izi: gereken üretken alan (gha). Talep biyokapasiteyi aşarsa ekolojik açık; insanlık yaklaşık 1,7 Dünya kullanıyor.",
            "Su ayak izi: mavi (sulama suyu), yeşil (yağmur suyu), gri (kirliliği seyreltme suyu); sanal su ürünün içindeki sudur.",
            "Sığır eti ve pamuk gibi ürünlerin su ayak izi çok büyüktür.",
            "Sürdürülebilirlik: bugünün ihtiyacını gelecek kuşakların hakkını tehlikeye atmadan karşılamak; çevre, toplum, ekonomi.",
            "Anlaşmalar: Montreal 1987 (ozon), Basel 1989 (atık), Rio 1992, Kyoto 1997, Stockholm 2001 (kalıcı kirleticiler), Paris 2015, SKH 2015.",
            "Atık hiyerarşisi: önle/azalt → yeniden kullan → geri dönüştür/kompost → enerji geri kazanımı → düzenli depolama.",
            "Döngüsel ekonomi atığı kaynağa çevirir; en iyi atık oluşmayan atıktır."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir öğrenci okula gidiş-dönüş 8 km yol gitmektedir ve yılda 200 gün okula gider. Arabayla (0,2 kg CO₂/km) ve otobüsle (0,1 kg CO₂/yolcu-km) gidiş arasındaki yıllık karbon ayak izi farkı kaç kg CO₂'dir?",
      opts: ["80", "160", "320", "480"],
      a: 1,
      why: "Yıllık mesafe 8 × 200 = 1600 km. Araba 1600 × 0,2 = 320 kg, otobüs 1600 × 0,1 = 160 kg; fark 320 − 160 = 160 kg. 320 yalnızca arabanın ayak izidir; fark değil."
    },
    {
      q: "Tabloda üç ülkenin kişi başına ekolojik ayak izi ve biyokapasitesi verilmiştir (gha). Hangi ülke ekolojik açık vermektedir?",
      fig: { type: "table", head: ["Ülke", "X", "Y", "Z"], rows: [["Ayak izi", 2, 3, 5], ["Biyokapasite", 4, 3, 2]], caption: "Kişi başına gha" },
      opts: ["Yalnızca X", "Yalnızca Y", "Yalnızca Z", "Hepsi"],
      a: 2,
      why: "Ekolojik açık, ayak izinin biyokapasiteden büyük olduğu durumdur. Yalnızca Z'de 5 > 2. X'te rezerv, Y'de denge vardır."
    },
    {
      q: "Bir pamuk tarlasının barajdan gelen suyla sulanması, tarlada bitkinin kullandığı yağmur suyu ve boyama atık suyunu seyreltmek için gereken su sırasıyla hangi su ayak izi bileşenleridir?",
      opts: ["Yeşil, mavi, gri", "Gri, yeşil, mavi", "Mavi, gri, yeşil", "Mavi, yeşil, gri"],
      a: 3,
      why: "Yüzey ve yeraltı suyu kullanımı mavi su, toprakta tutulan yağmur suyu yeşil su, kirliliği seyreltmek için gereken su gri sudur."
    },
    {
      q: "Atık hiyerarşisine göre aşağıdakilerden hangisi en çok tercih edilen seçenektir?",
      opts: ["Atığı düzenli depolama alanına göndermek", "Atığı yakıp enerji elde etmek", "Atık oluşmasını önlemek ya da azaltmak", "Plastik atığı geri dönüştürmek"],
      a: 2,
      why: "Hiyerarşide en iyi seçenek atığı hiç oluşturmamak ya da azaltmaktır. Geri dönüşüm de enerji ve su harcar ve ancak sonra gelir; yakma ve depolama en alt sıradadır."
    },
    {
      q: "Bir balıkçılık kooperatifi, yıllık av miktarını balık stokunun yılda kendini yenileme miktarının altında tutmaktadır. Bu uygulama için hangisi söylenebilir?",
      opts: ["Sürdürülebilirdir; kaynak, yenilenme hızından fazla tüketilmemektedir.", "Sürdürülemezdir; av hiçbir zaman yapılmamalıdır.", "Sürdürülebilirdir ama yalnızca ekolojik açık varsa.", "Sürdürülemezdir; çünkü stok yenilenmektedir."],
      a: 0,
      why: "Sürdürülebilirlik, kaynağı yenilenme hızının altında kullanmaktır. Son şık çelişkilidir: stok yenileniyorsa kullanım sürdürülebilirdir."
    }
  ]
};
