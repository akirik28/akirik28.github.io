/* Kitpath not defteri · hg511 · Günümüz Tarımının Sorunları (5.11)
   Kaynak: AP HuG CED Topic 5.11 (IMP-5.B.1–4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg511",
  amac: "Bu konu günümüz tarımının tartışmalarını ve sorunlarını anlatıyor: biyoteknoloji, GDO ve su ürünleri yetiştiriciliği, organik ve yerel gıda gibi bireysel seçim hareketleri, gıda erişimi ve gıda çölleri, dağıtım, hava ve kentleşme sorunları ile işleme tesislerinin ve devlet politikalarının ekonomik etkileri.",
  bolumler: [
    {
      baslik: "Biyoteknoloji, GDO ve su ürünleri yetiştiriciliği",
      kisa: "Yeni tarım teknolojileri verimi artırır ama sürdürülebilirlik tartışması yaratır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧬", terim: "Biotechnology", tr: "biyoteknoloji", tanim: "Canlıların genetiğini ya da biyolojik süreçlerini tarımda ürün geliştirmek için kullanma teknolojisi.", ornek: "Bir bitkinin hastalığa dayanıklı çeşidinin laboratuvarda geliştirilmesi." },
            { ikon: "🌽", terim: "GMO (genetically modified organism)", tr: "GDO (genetiği değiştirilmiş organizma)", tanim: "Genetik bilgisi laboratuvarda değiştirilmiş bitki ya da hayvan; örneğin böceğe veya bir bitki ilacına dayanıklı mısır ve soya.", ornek: "Türkiye'de GDO'lu bitki ekimi yasaktır; ancak bazı GDO'lu yem hammaddeleri ithal edilir." },
            { ikon: "🐟", terim: "Aquaculture", tr: "su ürünleri yetiştiriciliği", tanim: "Balık, midye ve karides gibi su canlılarının kafes, havuz gibi kontrollü ortamlarda yetiştirilmesi.", ornek: "Ege ve Akdeniz kıyılarındaki kafeslerde levrek ve çipura yetiştirilmesi." }
          ] },
        { tip: "ikili", sol: { ikon: "👍", baslik: "Destekleyenler", maddeler: ["Verimi ve gıda arzını artırır", "Zararlıya ve kuraklığa dayanıklı çeşit sunar"] },
          sag: { ikon: "👎", baslik: "Eleştirenler", maddeler: ["Biyoçeşitliliği ve toprağı olumsuz etkiler", "Çiftçiyi şirketlere bağımlı kılar"] },
          oyun: [
            { metin: "Zararlıya dayanıklı tohum, hektar başına verimi artırıp ilaç kullanımını azaltabilir.", cevap: "sol", neden: "Verim ve girdi tasarrufu: destekleyenlerin argümanı." },
            { metin: "Birkaç şirketin tohumuna bağlı kalan çiftçi her yıl tohumu yeniden satın almak zorunda kalabilir.", cevap: "sag", neden: "Bağımlılık endişesi: eleştirenlerin argümanı." },
            { metin: "Tek tip ürünün geniş alanlara ekilmesi doğal çeşitliliği azaltabilir.", cevap: "sag", neden: "Biyoçeşitlilik kaybı: eleştiri." },
            { metin: "Kuraklığa dayanıklı çeşitler kıt suyla üretimi mümkün kılabilir.", cevap: "sol", neden: "Su kullanımına çözüm olarak savunulur." },
            { metin: "Kafes çiftliklerinin yem ve atıkları kıyı suyunu kirletebilir.", cevap: "sag", neden: "Su ürünleri yetiştiriciliğine yönelik çevresel eleştiri." }
          ] },
        { tip: "tuzak", metin: "GDO ile klasik ıslah (melezleme) birbirine karıştırılır.", yanlis: "GDO, iki bitkinin doğal yollarla melezlenmesiyle elde edilir.", dogru: "GDO'da genetik bilgi laboratuvarda ==doğrudan değiştirilir== (çoğunlukla başka bir türden gen eklenir). Melezleme ve seçilim ise yüzyıllardır yapılan geleneksel ıslahtır." }
      ]
    },
    {
      baslik: "Organik, yerel ve kentsel tarım",
      kisa: "Tüketiciler seçimleriyle üretimi yönlendirir: organik, yerel gıda, CSA, kentsel tarım.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🥬", terim: "Organic farming", tr: "organik tarım", tanim: "Sentetik gübre, kimyasal pestisit ve GDO kullanmadan; ekim nöbeti ve doğal gübreyle yapılan sertifikalı üretim.", ornek: "Etiketinde organik sertifikası olan, genelde daha pahalı bir salatalık." },
            { ikon: "📍", terim: "Local food movement", tr: "yerel gıda hareketi", tanim: "Yiyeceğin yakın çevreden alınmasını savunur; taşıma mesafesi (*food miles*) kısalır ve yerel çiftçi desteklenir.", ornek: "Hafta sonu semt pazarından üreticiden doğrudan almak." },
            { ikon: "📦", terim: "CSA (community-supported agriculture)", tr: "topluluk destekli tarım", tanim: "Tüketiciler sezon başında çiftçiye önceden öder ve sezon boyunca haftalık ürün kutusu alır; hasat riskini paylaşırlar.", ornek: "Mahalledeki on aile bir çiftçiyi önceden finanse eder." },
            { ikon: "🏙️", terim: "Urban farming", tr: "kentsel tarım", tanim: "Şehir içinde çatılarda, bahçelerde ve dikey çiftliklerde ürün yetiştirmek.", ornek: "Okulun çatısındaki sebze bahçesi." }
          ] },
        { tip: "tablo", baslik: "Dört hareketin artısı ve eksisi", head: ["Hareket", "Artısı", "Eksisi"], rows: [
            ["Organik", "Sentetik kimyasal kullanımı azalır", "Fiyatı yüksek; dekar başına verim genelde düşük"],
            ["Yerel gıda", "Taşıma kısalır, yerel ekonomi güçlenir", "Çeşit ve mevsim sınırlı"],
            ["CSA", "Çiftçiye önceden güvenli gelir, taze ürün", "Ürünü seçemezsin; kötü hasat riski paylaşılır"],
            ["Kentsel tarım", "Pazara çok yakın üretim; taşıma yok", "Arazi pahalı, alan küçük"]
          ], not: "Kentsel tarım, *Von Thünen* mantığının uç noktasıdır: pazarın tam içinde üretim." },
        { tip: "tuzak", metin: "Organik sözcüğü her şeyin temiz olduğu anlamına gelmez.", yanlis: "Organik ürün hiç pestisit kullanılmadan yetişir.", dogru: "Organik tarım ==sentetik== kimyasalları yasaklar; doğal kaynaklı bazı ilaçlara izin verir. Genelde dekar başına daha az ürün aldığı için aynı üretim için daha çok arazi gerekebilir." }
      ]
    },
    {
      baslik: "Adil ticaret, özel ürünler ve diyet değişimleri",
      kisa: "*Fair trade*, katma değerli özel ürün ve beslenme tercihleri talebi değiştirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Fair trade", tr: "adil ticaret", tanim: "Gelişmekte olan ülkelerdeki küçük üreticiye asgari fiyat ve ek prim güvence altına alan sertifika sistemi. Kahve, kakao, muz ve pamukta yaygındır.", ornek: "Etiketinde adil ticaret işareti olan kahve." },
            { ikon: "🏷️", terim: "Value-added specialty crops", tr: "katma değerli özel ürünler", tanim: "Ham ürünü işleyip markalaştırarak ya da niş ürüne çevirerek daha yüksek fiyatla satmak.", ornek: "Zeytin yerine soğuk sıkım zeytinyağı satmak." },
            { ikon: "🥗", terim: "Dietary shifts", tr: "beslenme tercihleri", tanim: "Daha az et yemek, bitki bazlı ya da vejetaryen beslenmek gibi bireysel kararlar; talebi ve arazi kullanımını değiştirir.", ornek: "Bir öğrencinin haftada bir gün et yememeyi seçmesi." }
          ] },
        { tip: "ornek", baslik: "Adil ticaret kooperatife ne kazandırır? (varsayımsal)", durum: "Bir kooperatif 1.000 kg kahve üretiyor. Piyasa fiyatı kilo başına 80 TL'ye düşmüş. *Fair trade* asgari fiyatı 130 TL/kg ve ek olarak 15 TL/kg topluluk primi öngörüyor. Gelir farkı nedir?",
          adimlar: ["Piyasada: 1.000 × 80 = 80.000 TL.", "*Fair trade*: 1.000 × 130 = 130.000 TL.", "Ek prim (okul, kuyu gibi ortak işler için): 1.000 × 15 = 15.000 TL.", "Fark: 130.000 − 80.000 = 50.000 TL; 50.000 ÷ 80.000 ≈ %62,5."],
          sonuc: "Üretici geliri piyasa fiyatına göre ==50.000 TL (≈ %62,5)== yüksek; üstüne 15.000 TL topluluk primi gelir. Asgari fiyat, fiyat düşüşüne karşı bir güvencedir." }
      ]
    },
    {
      baslik: "Gıda erişimi ve gıda çölleri",
      kisa: "Gıdanın var olması, herkesin ona ulaşabildiği anlamına gelmez.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🍽️", terim: "Food insecurity", tr: "gıda güvencesizliği", tanim: "Bir hanenin yeterli, güvenli ve besleyici gıdaya düzenli ulaşamaması. Sorun hane düzeyindedir.", ornek: "Ay sonuna doğru ailenin yeterince yiyecek alamaması." },
            { ikon: "🏜️", terim: "Food desert", tr: "gıda çölü", tanim: "Düşük gelirli ve çoğu zaman araçsız hanelerin yaşadığı, taze ve uygun fiyatlı gıdaya (süpermarket gibi) yakın erişimi olmayan mahalle.", ornek: "Mahallede yalnızca büfe var; en yakın süpermarket 4 km uzakta." }
          ] },
        { tip: "grafik", baslik: "Bir kentte gıda çölü (şematik harita)", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "m1", tip: "nokta", x: 7, y: 8, etiket: "Süpermarket" },
            { id: "m2", tip: "nokta", x: 8.4, y: 5.4 },
            { id: "m3", tip: "nokta", x: 6.6, y: 3 },
            { id: "m4", tip: "nokta", x: 8, y: 1.6 },
            { id: "mah", tip: "alan", renk: 1, noktalar: [[0.6, 1], [4.4, 1], [4.4, 5], [0.6, 5]], gizli: true },
            { id: "may", tip: "yazi", x: 2.5, y: 3.8, metin: "Düşük gelirli mahalle", gizli: true },
            { id: "msf", tip: "ok", from: [2.5, 2.4], to: [6.3, 2.9], gizli: true },
            { id: "mst", tip: "yazi", x: 4.3, y: 1.6, metin: "≈ 4 km", gizli: true }
          ],
          durumlar: [
            { metin: "Kentte süpermarketler genellikle geliri yüksek, otoyola yakın bölgelerde toplanır." },
            { metin: "Düşük gelirli mahallede ==hiç süpermarket yok==; küçük büfeler ve hazır yemek satan yerler var.", goster: ["mah", "may"] },
            { metin: "En yakın süpermarket ==yaklaşık 4 km== uzakta. Araçsız ve toplu taşımadan uzak aileler için taze gıdaya ulaşmak zor.", goster: ["msf", "mst"] },
            { metin: "Sonuç: ==gıda çölü==. Gıda kentte var; sorun erişimdir, üretim değil." }
          ] },
        { tip: "tuzak", metin: "Gıda çölü ile gıda güvencesizliği aynı şey değildir.", yanlis: "Gıda çölü, ülkede yeterince yiyecek üretilmeyen yerdir.", dogru: "Gıda çölü ==mahalle== düzeyinde erişim sorunudur (market uzak ya da yok). Gıda güvencesizliği ==hane== düzeyinde yeterli gıdaya düzenli ulaşamamaktır. Üretim yeterli olsa bile ikisi görülebilir." }
      ]
    },
    {
      baslik: "Dağıtım, hava ve kentleşme sorunları",
      kisa: "Bozuk dağıtım, aşırı hava olayları ve büyüyen kentler gıdaya ulaşımı zorlaştırır.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🚛", baslik: "Dağıtım sorunları", metin: "Yol, depo ve soğuk zincir eksikliği ürünü çürütür ya da pahalı ulaştırır." },
            { ikon: "🌩️", baslik: "Olumsuz hava", metin: "Kuraklık, sel, don ve dolu hasadı düşürür, fiyatları oynatır." },
            { ikon: "🏘️", baslik: "Banliyöleşme", metin: "Kentin çevresindeki verimli tarım arazisi konut, yol ve alışveriş merkezine dönüşür (*suburbanization*)." }
          ] },
        { tip: "grafik", baslik: "Kent büyür, yakın tarım arazisi azalır (şematik)", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "tar", tip: "alan", renk: 2, noktalar: [[0.2, 0.2], [9.8, 0.2], [9.8, 9.8], [0.2, 9.8]] },
            { id: "tyz", tip: "yazi", x: 5, y: 9, metin: "Tarım arazisi" },
            { id: "kent", tip: "alan", renk: 3, noktalar: [[4, 4], [6, 4], [6, 6], [4, 6]] },
            { id: "kyz", tip: "yazi", x: 5, y: 5, metin: "Kent" }
          ],
          durumlar: [
            { metin: "Kentin çevresi taze sebze ve süt üreten verimli tarım arazisiyle çevrili." },
            { metin: "Nüfus artar, ==kent dışa doğru büyür==; en yakın ve en verimli arazi önce konuta dönüşür.", set: { kent: { noktalar: [[3, 3], [7, 3], [7, 7], [3, 7]] } } },
            { metin: "Tarım daha uzağa itilir, ==pazara olan mesafe artar==. Kalan arazi azaldığı için ürün miktarı da düşer.", set: { kent: { noktalar: [[1.8, 1.8], [8.2, 1.8], [8.2, 8.2], [1.8, 8.2]] } } }
          ] }
      ]
    },
    {
      baslik: "Ekonomik etkiler: tesisin yeri, ölçek, devlet politikası",
      kisa: "İşleme tesisinin yeri, ölçek ve devlet politikaları çiftçinin ne üreteceğini yönlendirir.",
      bloklar: [
        { tip: "tablo", baslik: "Dört ekonomik etken", head: ["Etken", "Çiftçiye etkisi", "Örnek"], rows: [
            ["İşleme tesisi ve pazarın yeri", "Çabuk bozulan ürün tesisin yakınında yetişir", "Salça fabrikasının çevresinde domates, süt toplama merkezinin çevresinde süt hayvancılığı"],
            ["*Economies of scale*", "Büyük işletme ucuza üretir, küçükler zorlanır", "Büyük işletmenin makine ve girdi alımında indirim alması"],
            ["Dağıtım sistemleri", "Satış kanalını ve standartları belirler", "Büyük market zincirlerinin yalnızca belirli standartlardaki ürünleri alması"],
            ["Devlet politikaları", "Destek, kota, tarife ve fiyat politikası ürün seçimini yönlendirir", "Desteklenen ürünün ekim alanının artması"]
          ] },
        { tip: "ornek", baslik: "Devlet desteği kârı nasıl değiştirir?", durum: "Bir çiftçi 50 ton buğdayı ton başına 6.000 TL'den satıyor; toplam üretim maliyeti 270.000 TL. Devlet ton başına 400 TL destek veriyor. Destek kârı ne kadar değiştirir?",
          adimlar: ["Gelir: 50 × 6.000 = 300.000 TL. Kâr: 300.000 − 270.000 = 30.000 TL.", "Destek: 50 × 400 = 20.000 TL.", "Yeni kâr: 30.000 + 20.000 = 50.000 TL. Artış: 20.000 ÷ 30.000 ≈ %67."],
          sonuc: "Destek kârı ==30.000 TL'den 50.000 TL'ye (≈ %67)== çıkarır. Böyle bir destek çiftçileri o ürünü daha çok ekmeye yöneltir; politika, arazi kullanımını değiştirir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Biyoteknoloji, GDO ve su ürünleri yetiştiriciliği verimi artırır ama sürdürülebilirlik, toprak ve su kullanımı, biyoçeşitlilik ve gübre-ilaç tartışması yaratır.",
            "GDO'da genetik bilgi laboratuvarda değiştirilir; klasik melezleme ve seçilim bundan farklıdır.",
            "Bireysel seçim hareketleri: organik, yerel gıda, CSA, kentsel tarım, *fair trade*, katma değerli özel ürünler ve beslenme tercihleri.",
            "Organik tarım sentetik kimyasalları yasaklar ama doğal ilaçlara izin verir; genelde daha çok arazi ister.",
            "Gıda güvencesizliği hane düzeyinde, gıda çölü mahalle düzeyinde bir sorundur; ikisi de erişim sorunudur.",
            "Dağıtım sorunları, olumsuz hava ve banliyöleşme gıdaya ulaşımı zorlaştırır.",
            "İşleme tesisi ve pazarın yeri, *economies of scale*, dağıtım sistemleri ve devlet politikaları çiftçinin ne üreteceğini belirler.",
            "Örnek hesap: ton başına 400 TL destek, 50 tonda 20.000 TL; kâr 30.000 TL'den 50.000 TL'ye (≈ %67) çıkar."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi biyoteknoloji ve GDO'lu tarıma yönelik **sürdürülebilirlik eleştirisine** en iyi örnektir?",
      opts: ["Kuraklığa dayanıklı çeşitler kıt suyla üretimi mümkün kılar", "Hektar başına verim artar", "Az sayıda çeşit ve şirkete dayanmak biyoçeşitliliği azaltabilir ve çiftçiyi tohum için şirkete bağımlı kılabilir", "Zararlıya dayanıklı çeşitler böcek ilacı kullanımını azaltabilir"],
      a: 2,
      why: "Biyoçeşitlilik kaybı ve şirket bağımlılığı eleştirenlerin argümanlarıdır. Diğer şıklar destekleyenlerin savunduğu yararlardır. En çekici yanlış şık D: ilaç kullanımının azalması yarar olarak savunulur, eleştiri olarak değil." },
    { q: "Mahalledeki on aile, sezon başında bir çiftçiye önceden ödeme yapıyor ve her hafta çiftlikten gelen ürün kutusunu alıyor. Hasat kötü geçerse kutular küçülüyor. Bu modelin adı ve temel özelliği nedir?",
      opts: ["*Fair trade*; küçük üreticiye asgari fiyat garantisi", "Kentsel tarım; ürünün şehir içinde yetiştirilmesi", "*Organic farming*; sentetik kimyasalların yasaklanması", "*CSA*; tüketici ile çiftçinin hasat riskini paylaşması"],
      a: 3,
      why: "Önceden ödeme ve haftalık kutu *community-supported agriculture* (CSA) modelidir; kötü hasatta kutuların küçülmesi riskin paylaşıldığını gösterir. En çekici yanlış şık C: ürün organik de olabilir ama sorudaki model satış ve risk paylaşımı yapısıdır." },
    { q: "Tabloda üç mahalle için bilgiler verilmiştir. Hangi mahalle bir *food desert* olma olasılığı en yüksek mahalledir?",
      fig: { type: "table", caption: "Üç mahalle", head: ["Mahalle", "En yakın süpermarket (km)", "Araç sahibi hane (%)", "Gelir düzeyi"], rows: [["A", 0.8, 85, "Orta"], ["B", 5, 20, "Düşük"], ["C", 1.5, 70, "Yüksek"]] },
      opts: ["A; çünkü süpermarkete en yakın mahalle odur", "B; çünkü uzak, araçsız ve düşük gelirli bir mahalledir", "C; çünkü geliri en yüksek mahalle odur", "Üçü de; çünkü hepsinde süpermarket vardır"],
      a: 1,
      why: "Gıda çölü: uygun fiyatlı gıdaya yakın erişim yoktur; B mahallesi 5 km uzakta, araç sahibi az ve geliri düşük. En çekici yanlış şık D: süpermarketin ilçede var olması yetmez, mahallenin ona ulaşabilmesi gerekir." },
    { q: "Bir kahve kooperatifi 2.000 kg kahveyi piyasada kilo başına 80 TL yerine *fair trade* asgari fiyatı olan 120 TL'den satıyor. Prim hariç gelir artışı kaç TL'dir?",
      opts: ["80.000 TL", "40.000 TL", "160.000 TL", "240.000 TL"],
      a: 0,
      why: "Fark: (120 − 80) × 2.000 = 40 × 2.000 = 80.000 TL. En çekici yanlış şık 40.000 TL: kilo başına farkı bulup miktarla çarpmayı unutmaktır." },
    { q: "Bir bölgede yeni bir süt işleme tesisi açılıyor ve devlet çiğ süte litre başına destek veriyor. Çevredeki çiftçilerin davranışı hakkında en olası öngörü hangisidir?",
      opts: ["Çabuk bozulan sütü tesise yakın üretmek ve desteği almak için süt üretimini artırırlar", "Tesise uzak, daha ucuz arazilerde süt üretimini yoğunlaştırırlar", "Destek yüzünden süt üretimini tamamen bırakıp tahıla geçerler", "Tesisin açılması ve desteğin çiftçi kararlarına etkisi olmaz"],
      a: 0,
      why: "İşleme tesisinin yeri ve devlet desteği ekonomik olarak üretimi tesise yakın alanlara çeker; süt çabuk bozulduğu için tesise yakın üretilir. En çekici yanlış şık B: tesisten uzak üretim taşıma maliyetini artırır." }
  ]
};
