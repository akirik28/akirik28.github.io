/* Kitpath not defteri · hg610 · Kentsel Değişimin Sorunları
   Kaynak: AP HuG CED Topic 6.10 (SPS-6.A.1 – 6.A.5). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg610",
  amac: "Bu konu kentte nüfus yer değiştirdikçe ortaya çıkan sorunları anlatıyor: konut ayrımcılığı (*redlining*, *blockbusting*), hizmetlere erişim, çevresel adaletsizlik, gecekondular, soylulaştırma ve kentsel yenileme, ve parçalı yönetimin bu sorunları çözmeyi zorlaştırması.",
  bolumler: [
    {
      baslik: "Konut ayrımcılığı ve uygun fiyat",
      kisa: "Konutta ayrımcılık mahalleleri ayırır; uygun fiyatlı konut bulmak da başlı başına sorundur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔴", terim: "Redlining", tr: "kırmızı çizgi uygulaması", tanim: "Banka ve sigorta şirketlerinin, belirli mahalleleri (çoğunlukla azınlık ya da düşük gelirli sakinli) haritada işaretleyip kredi ve sigorta vermeyi reddetmesi.", ornek: "Haritada kırmızıyla çizilen mahallede ev kredisi çıkmaması." },
            { ikon: "📣", terim: "Blockbusting", tr: "korku satışı", tanim: "Emlakçıların, mahalleye başka bir gruptan ailelerin taşınacağı korkusunu yayarak sakinleri ucuza ev satmaya yöneltmesi; sonra evleri daha pahalıya satmaları.", ornek: "'Fiyatlar düşecek, şimdi sat' diye kapı kapı dolaşmak." },
            { ikon: "🏠", terim: "Affordability", tr: "uygun fiyat", tanim: "Hanenin konut giderini gelirine göre kaldırabilmesi. Genelde gelirin %30'unu aşan konut gideri yük sayılır.", ornek: "Gelirinin yarısını kiraya veren hane." }
          ] },
        { tip: "ikili", sol: { ikon: "🏦", baslik: "*Redlining*", maddeler: ["Kredi ve sigortayı reddeden kurumlar", "Mahalleye para girişini keser"] },
          sag: { ikon: "🧑‍💼", baslik: "*Blockbusting*", maddeler: ["Korku yayıp ev sattıran emlakçılar", "Panik satışlarıyla mahalleyi hızla değiştirir"] },
          oyun: [
            { metin: "Banka, haritada işaretlenen mahalledeki evlere kredi vermiyor.", cevap: "sol", neden: "Kredi reddi: *redlining*." },
            { metin: "Emlakçı sakinlere 'fiyatlar düşecek' diyerek evleri ucuza alıyor.", cevap: "sag", neden: "Korku yayıp ev almak: *blockbusting*." },
            { metin: "Sigorta şirketi belirli mahalledeki evlere poliçe satmıyor.", cevap: "sol", neden: "Hizmet reddi: *redlining*." },
            { metin: "Ucuza alınan evler, mahalleye yeni taşınanlara daha pahalıya satılıyor.", cevap: "sag", neden: "Panik satışından kâr: *blockbusting*." }
          ] },
        { tip: "ornek", baslik: "Konut yükü hesabı", durum: "Bir hanenin aylık geliri 20.000 TL, kirası 8.000 TL. Konut gideri gelirin %30'unu aşıyorsa yük sayılıyor. Bu hane yük altında mı? Yük sınırı kaç TL?",
          adimlar: ["Oran: 8.000 ÷ 20.000 = 0,40 = %40.", "%40 > %30: yük altında.", "Sınır: 20.000 × 0,30 = 6.000 TL."],
          sonuc: "Hane gelirinin ==%40==ını kiraya veriyor; sınırın (6.000 TL) ==2.000 TL== üstünde." },
        { tip: "tuzak", metin: "Yasaklanmış uygulamanın izi mahallede kalır.", yanlis: "*Redlining* yasaklandığına göre eşitsizlik etkisi de bitmiştir.", dogru: "Yıllarca kredi ve yatırım alamayan mahalleler bina bakımını, servet birikimini ve hizmetleri yitirdi. Etki ==mekânda kalıcı iz== bırakır." }
      ]
    },
    {
      baslik: "Hizmetler, çevre ve terk edilen mahalleler",
      kisa: "Yatırım çekilen mahalleler hizmet, güvenlik ve sağlık kaybı yaşar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏚️", terim: "Disamenity zone", tr: "yaşam koşulları kötü bölge", tanim: "Altyapı ve hizmetlerin yetersiz, gelirin düşük, yaşam koşullarının kötü olduğu kent bölgesi.", ornek: "Kanalizasyonu ve temiz suyu eksik mahalle." },
            { ikon: "🧱", terim: "Zone of abandonment", tr: "terk edilme bölgesi", tanim: "Nüfus ve iş çıkınca binaları boşalan ve harap olan mahalle.", ornek: "Fabrikası kapanıp insanlarını kaybeden eski sanayi mahallesi." },
            { ikon: "☣️", terim: "Environmental injustice", tr: "çevresel adaletsizlik", tanim: "Düşük gelirli ve azınlık mahallelerinin atık tesisi, sanayi ve otoyol gibi kirletici yüklere orantısız şekilde maruz kalması.", ornek: "Çöp depolama alanının hep yoksul mahallenin yanına yapılması." }
          ] },
        { tip: "adimlar", baslik: "Yatırım çekilince: aşağı sarmal", adimlar: [
            { baslik: "Yatırım ve kredi azalır", metin: "Bankalar ve işletmeler mahalleden çekilir." },
            { baslik: "İş ve hizmet kaybı", metin: "Dükkânlar, okul, sağlık merkezi ve toplu taşıma azalır; hizmetlere erişim zorlaşır." },
            { baslik: "Nüfus ayrılır", metin: "Gücü yeten aileler taşınır; vergi gelirleri düşer." },
            { baslik: "Bina terk, suç artar", metin: "Boş binalar bakımsız kalır, suç ve güvensizlik artar; mahalle daha da değer kaybeder." }
          ] }
      ]
    },
    {
      baslik: "Gecekondu ve arazi mülkiyeti",
      kisa: "Büyük kentlerde yetkisiz yerleşimler artar; asıl çatışma arazi mülkiyetindedir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛖", terim: "Squatter settlement", tr: "gecekondu / yasa dışı yerleşim", tanim: "Sahibi olunmayan ya da izinsiz kullanılan arazide kurulan, çoğu zaman altyapısı eksik konut alanı. Favela, barrio ve gecekondu bu türdendir.", ornek: "Türkiye'de köyden gelenlerin 1950'lerden sonra kent kenarında yaptığı gecekondular." },
            { ikon: "📃", terim: "Land tenure", tr: "arazi mülkiyeti", tanim: "Bir arazinin kullanım ve sahiplik hakkının yasal durumu: tapu, kira, izinsiz kullanım.", ornek: "Tapusu olmayan hanenin her an tahliye edilebilmesi." }
          ] },
        { tip: "ikili", sol: { ikon: "🚜", baslik: "Tahliye ve yıkım", maddeler: ["Yasa dışı alanı boşaltmak, yıkmak", "Sakinler yerinden olur, sorun başka yere taşınır"] },
          sag: { ikon: "🔧", baslik: "Yerinde iyileştirme ve tapu", maddeler: ["Su, yol ve kanalizasyon götürmek; tapu vermek", "Sakinler kalır, yatırımla mahalle iyileşir"] },
          oyun: [
            { metin: "Belediye mahalleyi buldozerlerle yıkıp sakinleri uzağa gönderiyor.", cevap: "sol", neden: "Yıkım ve tahliye." },
            { metin: "Mahalleye su şebekesi ve kanalizasyon bağlanıyor, sakinlere tapu veriliyor.", cevap: "sag", neden: "Yerinde iyileştirme." },
            { metin: "Sakinler mülkiyeti yasal olmadığı için her an tahliye korkusuyla yaşıyor.", cevap: "sol", neden: "Yıkım tehdidi: arazi mülkiyeti çatışması." },
            { metin: "Tapu alan haneler evlerini onarıp büyütmeye cesaret ediyor.", cevap: "sag", neden: "Mülkiyet güvencesi yatırımı artırır." }
          ] },
        { tip: "tuzak", metin: "Gecekondu sakinleri işsiz değildir.", yanlis: "Gecekondu mahallelerinde yaşayanlar çalışmayan, kentin yükü olan insanlardır.", dogru: "Çoğu kentte inşaat, hizmet ve ticarette ==çalışır==; ama resmî konut piyasasına giremez. Sorun mülkiyet, altyapı ve güvencedir." }
      ]
    },
    {
      baslik: "Kentsel yenileme ve soylulaştırma",
      kisa: "Yenileme ve soylulaştırma mahalleyi iyileştirir ama eski sakinleri zorlayabilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏗️", terim: "Urban renewal", tr: "kentsel yenileme", tanim: "Yönetimin eski ve çürümüş mahalleyi yıkıp yeniden inşa etmesi: yeni konut, yol ve yapı. Türkiye'deki 'kentsel dönüşüm' projeleri bir örnektir.", ornek: "Eski bir mahallenin yıkılıp yeni apartmanların yapılması." },
            { ikon: "☕", terim: "Gentrification", tr: "soylulaştırma", tanim: "Daha yüksek gelirli yeni sakinlerin eski, ucuz mahalleye taşınıp evleri yenilemesi; fiyat ve kiranın artması, düşük gelirli eski sakinlerin ayrılmak zorunda kalması.", ornek: "Eski sanayi mahallesinde kafelerin ve butik dairelerin çoğalması." }
          ] },
        { tip: "grafik", baslik: "Soylulaştırma: kira artar, eski sakinler azalır (şematik)", xlabel: "Zaman", ylabel: "Gösterge (şematik)", xmax: 8, ymax: 10,
          xticks: [{ v: 0, label: "Önce" }, { v: 8, label: "Sonra" }],
          ogeler: [
            { id: "kira", tip: "egri", renk: 0, etiket: "Kira", noktalar: [[0, 2], [2, 2.4], [4, 3.6], [6, 6.5], [8, 9.5]] },
            { id: "sak", tip: "egri", renk: 2, etiket: "Eski sakinler", noktalar: [[0, 9], [2, 8.5], [4, 7], [6, 4], [8, 1.8]], gizli: true },
            { id: "p1", tip: "nokta", x: 2, y: 2.4, etiket: "Yeni gelenler", kilavuz: true, gizli: true },
            { id: "p2", tip: "nokta", x: 4, y: 3.6, etiket: "Kafe ve yatırım", kilavuz: true, gizli: true },
            { id: "p3", tip: "nokta", x: 6, y: 6.5, etiket: "Kira sıçrar", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Önce mahalle ucuzdur: kira düşük, eski sakinlerin payı yüksektir." },
            { metin: "Daha yüksek gelirli ==yeni gelenler== ucuz evlere taşınıp yenilemeye başlar.", goster: ["p1"] },
            { metin: "==Kafeler ve yatırım== gelir; mahalle moda olur, kira yükselmeye başlar.", goster: ["p2"] },
            { metin: "Kira ==sıçrar==; gücü yetmeyen ==eski sakinler taşınır== (yerinden edilme).", goster: ["sak", "p3"] }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Olumlu sonuçlar", maddeler: ["Binalar onarılır, yatırım ve vergi gelirleri artar", "Suç ve boş bina azalabilir"] },
          sag: { ikon: "⚠️", baslik: "Olumsuz sonuçlar", maddeler: ["Kira artar, eski sakinler yerinden edilir", "Mahallenin kültürü ve komşuluk ağı dağılır"] },
          oyun: [
            { metin: "Boş ve harap binalar onarılıp yeniden kullanılıyor.", cevap: "sol", neden: "Yatırım ve iyileştirme: olumlu." },
            { metin: "Yıllardır oturan kiracılar yeni kirayı ödeyemeyip mahalleden ayrılıyor.", cevap: "sag", neden: "Yerinden edilme: olumsuz." },
            { metin: "Belediyenin emlak vergisi gelirleri artıyor.", cevap: "sol", neden: "Vergi geliri artışı: olumlu." },
            { metin: "Eski esnafın yerini zincir kafeler alıyor, mahalle karakteri değişiyor.", cevap: "sag", neden: "Kültürel değişim: olumsuz." }
          ] }
      ]
    },
    {
      baslik: "Çözümler: kapsayıcı imar ve yerel gıda",
      kisa: "Kapsayıcı imar uygun fiyatlı konut, yerel gıda hareketleri taze gıda sağlar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏘️", terim: "Inclusionary zoning", tr: "kapsayıcı imar", tanim: "Belediyenin yeni konut projelerinde belirli bir payın uygun fiyatlı konut olmasını şart koşması.", ornek: "Yeni projede dairelerin %15'inin düşük gelirli ailelere ayrılması." },
            { ikon: "🥕", terim: "Local food movement", tr: "yerel gıda hareketi", tanim: "Kentte ya da yakın çevrede üretilen gıdayı destekleyen girişimler: topluluk bahçeleri, semt pazarları, kent çiftlikleri. Taze gıdaya erişimi zor mahallelere yardımcı olur.", ornek: "Boş arsada mahalle sakinlerinin kurduğu sebze bahçesi." }
          ] },
        { tip: "ornek", baslik: "Kapsayıcı imar hesabı", durum: "Bir belediye, 200 konutluk yeni projelerde %15 uygun fiyatlı konut şartı getirdi. Projede kaç uygun fiyatlı konut olmalı?",
          adimlar: ["200 × 0,15 = 30."], sonuc: "Projede en az ==30 uygun fiyatlı konut== bulunmalıdır; böylece yeni gelişme dar gelirliyi dışlamaz." }
      ]
    },
    {
      baslik: "Parçalı yönetim",
      kisa: "Kurumların ve belediyelerin dağınıklığı kent sorunlarını çözmeyi zorlaştırır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Functional fragmentation", tr: "işlevsel parçalanma", tanim: "Ulaşım, su, okul, polis gibi hizmetlerin ayrı kurumlar ve yönetim düzeyleri (devlet, il, belediye, mahalle) arasında bölünmesi.", ornek: "Metro, otobüs ve yol bakımı ayrı kurumlarda." },
            { ikon: "🗺️", terim: "Geographic fragmentation", tr: "coğrafi parçalanma", tanim: "Tek bir kentsel bölgenin birçok ayrı belediye ya da ilçeye bölünmesi; her biri kendi bütçesi, vergisi ve imar kurallarıyla.", ornek: "İstanbul'da büyükşehir belediyesi ve 39 ilçe belediyesi." }
          ] },
        { tip: "tablo", baslik: "Parçalanmanın yarattığı sorunlar", head: ["Sorun", "Neden olur?"], rows: [
            ["Koordinasyon zorluğu", "Bir metro hattı farklı ilçeleri geçer; her yönetim ayrı karar verir"],
            ["Vergi ve gelir eşitsizliği", "Zengin ilçe zengin kalır, yoksul merkez yeterli gelire sahip olamaz"],
            ["Çakışan ya da boşta kalan hizmetler", "Kimin sorumlu olduğu belirsizleşir"],
            ["Ortak sorunlarda çözüm gecikmesi", "Trafik, hava kirliliği ve sel sınırları tanımaz"]
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Redlining* kredi ve sigortayı reddetmektir; *blockbusting* korku yayıp ev sattırmaktır; ikisi de mahalleleri ayırır.",
            "Uygun fiyat: gelirin %30'undan fazlası konuta gidiyorsa hane yük altındadır (20.000 TL gelirde 8.000 TL kira = %40).",
            "Yatırım çekilen mahalleler hizmet, güvenlik ve iş kaybeder: *disamenity zone* ve *zone of abandonment*; *environmental injustice* kirletici yükün yoksul mahallelere yığılmasıdır.",
            "*Squatter settlement* ve arazi mülkiyeti çatışmaları büyük kentlerde artıyor; yerinde iyileştirme ve tapu bir cevaptır.",
            "Kentsel yenileme (yıkıp yeniden yapma) ve soylulaştırma (yüksek gelirlilerin gelmesi) iyileşme ve yerinden edilme getirir.",
            "Çözümler: *inclusionary zoning* (200 konutta %15 = 30 uygun fiyatlı konut) ve yerel gıda hareketleri.",
            "İşlevsel ve coğrafi parçalanma kent sorunlarını çözmeyi zorlaştırır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir emlakçı, mahallede kapı kapı dolaşıp 'başka kültürden aileler taşınıyor, ev fiyatları düşecek, hemen sat' diyor; evleri ucuza alıp daha pahalıya satıyor. Bu uygulama hangisidir?",
      opts: ["*Redlining*", "Soylulaştırma", "*Blockbusting*", "Kapsayıcı imar"],
      a: 2, why: "Korku yayıp panik satışı yaptırmak ve kâr etmek *blockbusting*'dir. A en çekici yanlıştır: *redlining* bankaların kredi ve sigorta reddidir, emlakçı davranışı değil." },
    { q: "Tablo üç hanenin aylık gelirini ve kirasını gösteriyor. Konut gideri gelirin %30'unu aşan haneler yük altında sayılırsa hangisi doğrudur?",
      fig: { type: "table", head: ["Hane", "Gelir (TL)", "Kira (TL)"], rows: [["A", "24.000", "6.000"], ["B", "18.000", "9.000"], ["C", "30.000", "10.000"]], caption: "Aylık gelir ve kira (kurgusal)" },
      opts: ["Yalnızca B yük altındadır", "B ve C yük altındadır", "A ve C yük altındadır", "Üçü de yük altındadır"],
      a: 1, why: "A: 6.000 ÷ 24.000 = %25; B: 9.000 ÷ 18.000 = %50; C: 10.000 ÷ 30.000 = %33,3. B ve C %30'u aşıyor. A çekici yanlıştır: yalnızca en yüksek oranı görmek C'yi unutturur." },
    { q: "Eskiden işçi sınıfının yaşadığı bir mahalleye genç profesyoneller taşınıyor, eski evleri yeniliyor, kafeler açılıyor ve kiralar yükseliyor. Bu süreç ve en olası olumsuz sonucu hangisidir?",
      opts: ["Soylulaştırma; eski kiracıların yerinden edilmesi", "Kentsel yenileme; evlerin devlet eliyle yıkılması", "*Redlining*; bankaların kredi vermemesi", "Parçalı yönetim; hizmetlerin çakışması"],
      a: 0, why: "Yüksek gelirlilerin gelip yenileme ve kira artışına yol açması soylulaştırmadır; yerinden edilme en tipik olumsuz sonuçtur. B çekici yanlıştır: kentsel yenilemeyi devlet ya da kurum yönetir ve yıkıp yeniden yapar." },
    { q: "Bir kentin kenarında tapusuz arazide kurulmuş, altyapısı eksik bir mahalle yıllardır var ve sakinleri tahliye korkusu yaşıyor. Aşağıdakilerden hangisi sakinleri yerinde tutarak sorunu çözmeye yönelik bir yaklaşımdır?",
      opts: ["Mahalleyi yıkıp sakinleri kent dışına göndermek", "Mahalleyi yok sayıp hizmet götürmemek", "Yalnızca polis güvenliğini artırmak", "Su, kanalizasyon ve yol yatırımı yapıp sakinlere tapu vermek"],
      a: 3, why: "Altyapı ve tapu, arazi mülkiyeti çatışmasını yerinde iyileştirmeyle çözer. A çekici yanlıştır: yıkım sorunu başka yere taşır ve sakinleri yerinden eder." },
    { q: "Bir kentsel bölge 40 ayrı belediyeye bölünmüştür; her birinin kendi bütçesi ve imar kuralı var. Ortak bir otobüs hattı planı, belediyeler anlaşamadığı için yıllarca gecikiyor. Bu durum hangi sorunu gösterir?",
      opts: ["Kentsel yenilemenin sonuçlarını", "Coğrafi parçalanmanın koordinasyonu zorlaştırmasını", "*Environmental injustice*'ı", "Gecekondu sorununu"],
      a: 1, why: "Tek bir kentsel bölgenin birçok belediyeye bölünmesi coğrafi parçalanmadır ve ortak sorunlarda koordinasyonu zorlaştırır. D yanlıştır: senaryoda mülkiyet sorunu ya da yetkisiz yerleşim yoktur." }
  ]
};
