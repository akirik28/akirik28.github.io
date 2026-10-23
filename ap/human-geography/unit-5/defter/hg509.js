/* Kitpath not defteri · hg509 · Küresel Tarım Sistemi (5.9)
   Kaynak: AP HuG CED Topic 5.9 (PSO-5.E.1–3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg509",
  amac: "Bu konu yiyeceğin ve tarım ürünlerinin dünya çapında bir tedarik zinciriyle bağlandığını anlatıyor. Hangi bölgelerin üretip hangilerinin tükettiğini, bazı ülkelerin neden tek bir ihraç ürününe bağımlı kaldığını ve gıda ticaret ağlarını siyaset, altyapı ve dünya ticaretinin nasıl yönlendirdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Küresel gıda tedarik zinciri",
      kisa: "Gıda, farklı kıtalardaki halkaların bağlandığı küresel bir zincirden geçer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌐", terim: "Global supply chain", tr: "küresel tedarik zinciri", tanim: "Girdi, üretim, işleme, taşıma ve satışın birden çok ülkeye yayıldığı ağ. Bir ürünün halkaları farklı kıtalarda olabilir.", ornek: "Brezilya'da yetişen soya, Çin'de hayvan yemine dönüşür." },
            { ikon: "🤝", terim: "Interdependence", tr: "karşılıklı bağımlılık", tanim: "Bölgelerin birbirinin üretimine ve pazarına ihtiyaç duyması. Üreticinin alıcıya, alıcının üreticiye ihtiyacı vardır.", ornek: "Kahve yetişmeyen bir ülke, kahveyi başka kıtalardan alır." }
          ] },
        { tip: "adimlar", baslik: "Bir fincan kahvenin yolculuğu", adimlar: [
            { baslik: "Üretim", metin: "Kahve tropikal ülkelerde (ör. Brezilya, Vietnam) yetişir ve hasat edilir." },
            { baslik: "İlk işleme", metin: "Meyve ayıklanır, çekirdek kurutulur ve çuvallanır." },
            { baslik: "Taşıma", metin: "Çuvallar limana taşınır, konteyner gemisiyle denizi aşar." },
            { baslik: "Kavurma ve paketleme", metin: "Çoğu zaman tüketici ülkede yapılır; katma değerin büyük kısmı burada kalır." },
            { baslik: "Satış", metin: "Kafelerde ve marketlerde tüketiciye ulaşır." }
          ] }
      ]
    },
    {
      baslik: "Üretici ve tüketici bölgeler birbirine bağlı",
      kisa: "Bir bölgenin fazlası başka bir bölgenin açığını kapatır; bağlılık iki yönlüdür.",
      bloklar: [
        { tip: "tablo", baslik: "Kim üretir, kim alır?", head: ["Ürün", "Başlıca üreticiler", "Başlıca alıcı bölgeler"], rows: [
            ["Kahve", "Brezilya, Vietnam, Kolombiya", "Avrupa, Kuzey Amerika"],
            ["Kakao", "Fildişi Sahili, Gana", "Avrupa, Kuzey Amerika (çikolata sanayisi)"],
            ["Soya", "Brezilya, ABD", "Çin (hayvan yemi)"],
            ["Buğday", "Rusya, Ukrayna, Kanada, ABD", "Mısır, Kuzey Afrika, Orta Doğu"],
            ["Fındık", "Türkiye", "Avrupa (çikolata ve tatlı sanayisi)"],
            ["Muz", "Ekvador, Filipinler", "Avrupa, ABD"]
          ], not: "Tabloda sıralama büyüklük sırası değil; amaç ürün–alıcı bağlantısını görmektir." },
        { tip: "ikili", sol: { ikon: "📦", baslik: "Fazlayı satan (ihracatçı)", maddeler: ["Üretimi iç tüketimden fazla", "Geliri için dış pazara muhtaç"] },
          sag: { ikon: "🛒", baslik: "Açığı kapatan (ithalatçı)", maddeler: ["Üretimi iç talebi karşılamıyor", "Gıdası için dış tedarikçiye muhtaç"] },
          oyun: [
            { metin: "Ukrayna buğdayının büyük bölümü yurt dışına satılıyor.", cevap: "sol", neden: "Üretim iç tüketimi aşıyor: ihracatçı." },
            { metin: "Mısır, ihtiyaç duyduğu buğdayın büyük kısmını dışarıdan alıyor.", cevap: "sag", neden: "İç üretim yetmiyor: ithalatçı." },
            { metin: "Fildişi Sahili kakaonun çoğunu çikolata yapılan ülkelere gönderiyor.", cevap: "sol", neden: "Hammaddeyi satıyor: ihracatçı." },
            { metin: "Avrupa'daki çikolata fabrikaları kakao çekirdeğini başka kıtalardan satın alıyor.", cevap: "sag", neden: "Hammaddeye dışarıdan ulaşıyor: ithalatçı." }
          ] },
        { tip: "tuzak", metin: "Bağımlılık yalnızca yoksul ülkeler için bir sorun sanılır.", yanlis: "Yalnızca gelişmekte olan ülkeler zengin ülkelere bağımlıdır.", dogru: "Bağımlılık ==iki yönlüdür==: ihracatçı gelir için pazara, ithalatçı gıda ya da hammadde için tedarikçiye muhtaçtır. Zengin ülkeler de kahve, kakao, muz gibi ürünlerde ithalata bağımlıdır." }
      ]
    },
    {
      baslik: "Tek ürüne bağımlı ülkeler",
      kisa: "Bazı ülkelerin ihracat geliri bir ya da iki tarım ürününe dayanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Export commodity dependence", tr: "ihracat ürününe bağımlılık", tanim: "Bir ülkenin döviz gelirinin büyük bölümünün bir ya da birkaç ham ürüne dayanması.", ornek: "Bazı Batı Afrika ülkelerinde kakao, ihracat gelirinin çok büyük payıdır." },
            { ikon: "💵", terim: "Cash crop", tr: "nakit ürün", tanim: "Yemek için değil, satış ve ihracat için yetiştirilen ürün. Yiyecek ekilecek toprağın yerini alabilir.", ornek: "Kahve, kakao, pamuk, şeker kamışı." },
            { ikon: "🌴", terim: "Plantation agriculture", tr: "plantasyon tarımı", tanim: "Tropik ve yarı tropik bölgelerde, genelde tek bir ürünün geniş alanda ve çok işçiyle yetiştirildiği ticari tarım. Birçoğu sömürge dönemine dayanır.", ornek: "Muz, çay, kauçuk ve şeker kamışı plantasyonları." }
          ] },
        { tip: "liste", baslik: "Neden tek ürüne bağımlı kalınır?", maddeler: [
            { ikon: "🏛️", baslik: "Sömürge mirası", metin: "Ulaşım ağı ve arazi düzeni ihracat ürününe göre kurulmuş." },
            { ikon: "☀️", baslik: "İklim ve toprak", metin: "Tropik ürünler yalnızca belirli bölgelerde yetişir; seçenek az." },
            { ikon: "🏗️", baslik: "Zayıf işleme kapasitesi", metin: "Ham ürün satılır; katma değer (kavurma, çikolata) başka ülkelerde kalır." },
            { ikon: "💳", baslik: "Döviz ve borç ihtiyacı", metin: "Dış borcu ödemek için hızlı ihracat geliri gerekir." }
          ] }
      ]
    },
    {
      baslik: "Fiyat dalgalanması: bağımlılığın riski",
      kisa: "Tek ürüne bağımlı ülke, o ürünün fiyatı düşünce gelirinin büyük kısmını kaybeder.",
      bloklar: [
        { tip: "ornek", baslik: "Aynı fiyat şoku, iki ülke", durum: "X ülkesinin ihracat gelirinin %80'i kahveden, Y ülkesinin ise yalnızca %20'si kahveden geliyor. Satılan miktar sabitken dünya kahve fiyatı %25 düşüyor. Toplam ihracat gelirleri yüzde kaç azalır?",
          adimlar: ["X: kahve payı 0,80 × fiyat düşüşü 0,25 = 0,20 → gelirin %20'si gider.", "Y: 0,20 × 0,25 = 0,05 → gelirin %5'i gider.", "Oran: 20 ÷ 5 = 4 kat."],
          sonuc: "Aynı fiyat düşüşü X'te ==%20==, Y'de ==%5== gelir kaybı yaratır. ==Bağımlı ülke daha kırılgandır.==" },
        { tip: "grafik", baslik: "İhracat geliri: tek ürün ve çeşitlenmiş ekonomi (şematik)", xlabel: "Yıllar", ylabel: "İhracat geliri", xmax: 10, ymax: 10,
          ogeler: [
            { id: "tek", tip: "egri", renk: 1, noktalar: [[0, 6], [2, 8], [4, 3], [6, 4], [8, 7.5]], etiket: "Tek ürün" },
            { id: "sok", tip: "ok", from: [4, 9.4], to: [4, 3.6], gizli: true },
            { id: "sy", tip: "yazi", x: 5.6, y: 9.2, metin: "Fiyat çöker", gizli: true },
            { id: "cok", tip: "egri", renk: 0, noktalar: [[0, 5], [2, 5.6], [4, 4.6], [6, 5], [8, 5.6]], etiket: "Çeşitli", gizli: true }
          ],
          durumlar: [
            { metin: "Tek ürüne bağlı ülkenin geliri, o ürünün **dünya fiyatıyla** inip çıkar; fiyatı ülke belirleyemez." },
            { metin: "Fiyat çöktüğünde gelir ==aniden düşer==; bütçe, ithalat ve borç ödemesi sarsılır.", goster: ["sok", "sy"] },
            { metin: "Birçok ürün ve sanayi satan ülkenin geliri ==daha istikrarlıdır==: bir ürünün kaybı diğerleriyle dengelenir.", goster: ["cok"] }
          ] },
        { tip: "tuzak", metin: "Daha çok ihracat her zaman daha çok gelir demek değildir.", yanlis: "Ürün ihracatını artırmak ülkeyi her zaman zenginleştirir.", dogru: "Birçok ülke aynı ürünü artırınca dünya arzı büyür ve ==fiyat düşer==. Bağımlı ülke fiyatı belirleyemez, fiyatı **kabul eder** (*price taker*); gelir artmayabilir." }
      ]
    },
    {
      baslik: "Siyasi ilişkiler ve dünya ticaret düzeni",
      kisa: "Tarifeler, destekler, anlaşmalar ve ambargolar gıdanın nereye gideceğini belirler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧱", terim: "Tariff", tr: "gümrük vergisi (tarife)", tanim: "İthal ürüne konan vergi. İthal ürünü pahalılaştırır ve yerli üreticiyi korur.", ornek: "Yüksek vergi yüzünden ithal peynir yerli peynirden pahalıdır." },
            { ikon: "💸", terim: "Subsidy", tr: "sübvansiyon (destek)", tanim: "Hükümetin üreticiye verdiği para ya da vergi avantajı. Ürün daha ucuza satılabilir; ihraç edilince başka ülkenin üreticisiyle rekabet eder.", ornek: "Devletin ton başına buğday desteği vermesi." },
            { ikon: "⛔", terim: "Embargo", tr: "ambargo", tanim: "Bir ülkeyle ticareti siyasi nedenle yasaklamak ya da kısıtlamak.", ornek: "Bir ülkenin bazı ülkelerin gıda ürünlerinin girişini yasaklaması." }
          ] },
        { tip: "tablo", baslik: "Siyaset gıda akışını nasıl yönlendirir?", head: ["Etken", "Etkisi", "Örnek"], rows: [
            ["Ticaret anlaşması ve bloklar", "Üyeler arasında vergi düşer, ticaret artar", "AB içinde tarım ürünleri gümrüksüz dolaşır"],
            ["Tarife", "İthal pahalılaşır, yerli korunur", "İthal et ürününe yüksek gümrük vergisi"],
            ["Sübvansiyon", "Destekli ürün ucuz satılır; yoksul ülke üreticisi rekabet edemeyebilir", "Zengin ülkelerin pamuk ve tahıl destekleri"],
            ["Ambargo", "Ticaret kesilir, tedarikçi değişir", "Rusya'nın 2014'te bazı ülkelerin gıdasına ithalat yasağı getirmesi"],
            ["Savaş ve çatışma", "Liman ve yollar kapanır", "2022'de Ukrayna limanlarının kapanması; BM ve Türkiye'nin arabuluculuğuyla kurulan Karadeniz tahıl koridoru sevkiyatı kısmen yeniden başlattı"]
          ] },
        { tip: "tuzak", metin: "Sübvansiyon ile tarife sık karıştırılır.", yanlis: "Sübvansiyon, ithal ürüne konan vergidir.", dogru: "**Tarife** ithal ürüne konan vergidir (ithalatı pahalılaştırır). **Sübvansiyon** yerli üreticiye verilen destektir (yerli ürünü ucuzlatır). İkisi de yerli üreticiyi korur ama farklı yoldan." }
      ]
    },
    {
      baslik: "Altyapı ve soğuk zincir",
      kisa: "Yol, liman ve soğuk zincir yoksa ürün pazara ulaşamadan bozulur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛣️", terim: "Infrastructure", tr: "altyapı", tanim: "Yol, demiryolu, liman, depo ve elektrik gibi ürünü hareket ettiren fiziksel sistemler. Altyapısı zayıf bölgeler pazara zor ulaşır.", ornek: "Köyden limana yolu olmayan çiftçi ürününü ucuza yerel pazara satmak zorunda kalır." },
            { ikon: "❄️", terim: "Cold chain", tr: "soğuk zincir", tanim: "Hasattan satışa kadar ürünün sürekli soğuk tutulduğu depo ve taşıma sistemi. Taze ürünü uzak pazara götürmenin şartıdır.", ornek: "Soğutmalı kamyonla taşınan çilek." }
          ] },
        { tip: "grafik", baslik: "Soğuk zincir tazeliği korur (şematik)", xlabel: "Taşıma süresi (gün)", ylabel: "Tazelik (satılabilirlik)", xmax: 10, ymax: 10,
          ogeler: [
            { id: "sg", tip: "egri", renk: 1, noktalar: [[0, 9.5], [2, 6.5], [4, 3.5], [6, 1.5], [8, 0.5]], etiket: "Soğutmasız" },
            { id: "sn", tip: "cizgi", renk: 3, from: [0, 4], to: [8, 4], kesik: true, etiket: "Satış sınırı", gizli: true },
            { id: "sz", tip: "egri", renk: 0, noktalar: [[0, 9.5], [2, 8.8], [4, 8], [6, 7.3], [8, 6.6]], etiket: "Soğuk zincir", gizli: true }
          ],
          durumlar: [
            { metin: "Soğutma yokken taze ürün **günler içinde** hızla bozulur." },
            { metin: "Tazelik ==satış sınırının== altına inince ürün satılamaz; çiftçi ve alıcı zarar eder. Pazara yaklaşık 3–4 gün içinde ulaşılmazsa ürün kaybedilir.", goster: ["sn"] },
            { metin: "==Soğuk zincirle== bozulma yavaşlar, ürün uzak pazara sağlam ulaşır. Altyapı, hangi pazara satış yapılabileceğini belirler.", goster: ["sz"] }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Gıda ve tarım ürünleri küresel bir tedarik zincirinin parçasıdır; zincirin halkaları farklı kıtalarda olabilir.",
            "Bölgeler karşılıklı bağımlıdır: ihracatçı gelir için pazara, ithalatçı gıda ya da hammadde için tedarikçiye muhtaçtır; bağımlılık iki yönlüdür.",
            "Bazı ülkeler gelirleri için bir ya da birkaç ihraç ürününe (kahve, kakao, muz) bağımlıdır; nedenleri sömürge mirası, iklim, zayıf işleme kapasitesi ve borçtur.",
            "Tek ürüne bağımlılık fiyat dalgalanmasına kırılganlık yaratır: kahve %80 pay ve %25 fiyat düşüşü = %20 gelir kaybı.",
            "Gıda dağıtım ağlarını üç şey etkiler: siyasi ilişkiler, altyapı ve dünya ticaret düzeni.",
            "*Tariff* ithal ürüne konan vergi, *subsidy* yerli üreticiye verilen destek, *embargo* ticaretin yasaklanmasıdır.",
            "Yol, liman ve soğuk zincir gibi altyapı eksikliği taze ürünün pazara ulaşmasını engeller.",
            "Ticaret anlaşmaları, savaşlar ve ambargolar gıdanın nereye gideceğini bir gecede değiştirebilir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir ülkenin ihracat gelirinin %70'i kahve satışından gelmektedir. Satılan miktar sabitken dünya kahve fiyatı %20 düşerse, toplam ihracat geliri yaklaşık yüzde kaç azalır?",
      opts: ["%7", "%14", "%20", "%90"],
      a: 1,
      why: "Kayıp = kahve payı × fiyat düşüşü = 0,70 × 0,20 = 0,14, yani %14. En çekici yanlış şık %20: fiyat düşüşünü doğrudan toplam gelire uygulamak, kahvenin yalnızca gelirin bir kısmı olduğunu unutmaktır." },
    { q: "Bir ülke ithal buğdaya yüksek gümrük vergisi koyuyor ve yerli buğday üreticisine ton başına nakit destek veriyor. Bu iki uygulama sırasıyla nedir ve ortak amacı nedir?",
      opts: ["Sübvansiyon ve tarife; ihracatı yasaklamak", "Tarife ve ambargo; yerli ürünü pahalılaştırmak", "Ambargo ve sübvansiyon; ithalatı tamamen durdurmak", "Tarife ve sübvansiyon; yerli üreticiyi dış rekabetten korumak"],
      a: 3,
      why: "Vergi ithal ürüne konduğu için tarife, üreticiye verilen destek sübvansiyondur; ikisi de yerli üreticiyi korur. En çekici yanlış şık A: ikisinin adını yer değiştirmiş ve amacı yanlış vermiştir." },
    { q: "Aşağıdakilerden hangisi küresel gıda dağıtım ağlarını etkileyen **siyasi** bir etkene en iyi örnektir?",
      opts: ["Bir ülkenin belirli ülkelerden gıda ithalatını yasaklaması", "Yağışın azalması nedeniyle hasadın düşmesi", "Çiftçilerin daha dayanıklı bir tohum çeşidine geçmesi", "Limanlarda soğutmalı depo sayısının artması"],
      a: 0,
      why: "İthalat yasağı (ambargo) siyasi bir karardır. Yağış iklim, tohum teknoloji, soğutmalı depo ise altyapı etkenidir. En çekici yanlış şık D: ağı etkiler ama CED'in ayırdığı üç etkenden altyapıya girer." },
    { q: "Tabloda iki ülkenin ihracat gelirlerinin dağılımı verilmiştir. Dünya kahve fiyatı sert biçimde düşerse hangi ülke daha kırılgan olur ve neden?",
      fig: { type: "table", caption: "İhracat gelirinin ürünlere dağılımı (%)", head: ["Ülke", "Kahve", "Kakao", "Muz", "Sanayi ürünleri"], rows: [["A", 80, 10, 5, 5], ["B", 15, 10, 15, 60]] },
      opts: ["B; çünkü üç tarım ürünü sattığı için", "B; çünkü sanayi ürünleri kahveden daha ucuzdur", "A; çünkü gelirinin büyük kısmı tek bir ürüne bağlıdır", "İkisi de aynı; çünkü fiyat düşüşü herkesi eşit etkiler"],
      a: 2,
      why: "A'nın gelirinin %80'i kahvedir; fiyat düşünce gelirin büyük bölümü kaybolur. B'de kahve payı yalnızca %15'tir ve geliri sanayi ürünleriyle çeşitlenmiştir. En çekici yanlış şık D: fiyat düşüşü aynı olsa da kayıp, ürünün ihracattaki payıyla orantılıdır." },
    { q: "Bir ülkede hasat edilen mango, yollar bozuk olduğu ve soğutmalı depo bulunmadığı için pazara ulaşamadan çürümektedir. Bu sorun gıda dağıtım ağını etkileyen hangi etkenle en iyi açıklanır?",
      opts: ["Siyasi ilişkiler: ambargo", "Yetersiz altyapı: yol ve soğuk zincir eksikliği", "Dünya ticaret düzeni: tarife engeli", "Sübvansiyon: yerli ürünün ucuzlaması"],
      a: 1,
      why: "Yolların bozukluğu ve soğuk zincirin olmaması altyapı eksikliğidir. En çekici yanlış şık C: tarifeler ihracatı engelleyebilir ama bu senaryoda ürün sınıra bile ulaşamadan bozuluyor." }
  ]
};
