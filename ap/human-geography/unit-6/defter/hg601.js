/* Kitora not defteri · hg601 · Kentleşmenin Kökeni ve Etkenleri
   Kaynak: AP HuG CED Topic 6.1 (PSO-6.A.1, PSO-6.A.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg601",
  amac: "Bu konu kentlerin neden ve nerede ortaya çıktığını anlatıyor. *Site* ile *situation* farkını, kentleşmeyi hızlandıran güçleri (ulaşım, nüfus, göç, ekonomi, devlet politikası) ve banliyöleşmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Kentleşme nedir?",
      kisa: "Kentleşme, nüfusun kentte yaşayan payının artmasıdır; sayı değil oran önemlidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏙️", terim: "Urbanization", tr: "kentleşme", tanim: "Bir ülkede kentte yaşayan nüfusun payının (yüzdesinin) artması. Köyden kente göç bu payı büyütür.", ornek: "Nüfusun %30'u kentteyken %40'ının kentte yaşar hale gelmesi." },
            { ikon: "📏", terim: "Urban area", tr: "kent alanı", tanim: "Nüfusu ve yoğunluğu yüksek, çoğu insanın tarım dışında çalıştığı yerleşim. Alt sınır ülkeden ülkeye değişir.", ornek: "Bir ülke 2.000 kişilik yeri kent sayarken başka bir ülke çok daha yüksek bir eşik arayabilir." }
          ] },
        { tip: "ornek", baslik: "Pay mı, sayı mı?", durum: "A ülkesinin nüfusu 10 milyondan 20 milyona çıktı. Kentte yaşayanlar 3 milyondan 8 milyona çıktı. Kentleşme oranı nasıl değişti?",
          adimlar: ["Önce: 3 ÷ 10 = %30.", "Sonra: 8 ÷ 20 = %40.", "Kent nüfusu 5 milyon arttı; kent payı 10 puan arttı."],
          sonuc: "Kent payı %30'dan ==%40==a çıktı: ülke kentleşti. Toplam nüfus da kent nüfusu kadar hızlı artsaydı pay değişmezdi." },
        { tip: "tuzak", metin: "Kent nüfusunun büyümesi ile kentleşme oranının artması aynı şey değildir.", yanlis: "Kentte yaşayanların sayısı arttıysa kentleşme oranı da artmıştır.", dogru: "Toplam nüfus da hızla artıyorsa ==pay== değişmeyebilir. Kentleşme oranı = kent nüfusu ÷ toplam nüfus." }
      ]
    },
    {
      baslik: "Kentleşme eğrisi",
      kisa: "Kentleşme genelde S biçimlidir: yavaş başlar, hızlanır, sonra yavaşlar.",
      bloklar: [
        { tip: "grafik", baslik: "Şematik bir ülkede kentte yaşayanların payı", xlabel: "Zaman", ylabel: "Kent payı (%)", xmax: 10, ymax: 100,
          xticks: [{ v: 1, label: "Tarım çağı" }, { v: 5, label: "Hızlı kentleşme" }, { v: 9, label: "Olgunluk" }],
          yticks: [{ v: 20, label: "%20" }, { v: 50, label: "%50" }, { v: 80, label: "%80" }],
          ogeler: [
            { id: "k", tip: "egri", renk: 0, etiket: "Kent payı", noktalar: [[0, 10], [2, 12], [3.5, 20], [5, 38], [6.5, 60], [8, 76], [9, 82], [10, 84]] },
            { id: "p1", tip: "nokta", x: 2, y: 12, etiket: "Çoğu insan köyde", kilavuz: true, gizli: true },
            { id: "p2", tip: "nokta", x: 5, y: 38, etiket: "Göç hızlanır", kilavuz: true, gizli: true },
            { id: "y50", tip: "cizgi", renk: 1, kesik: true, from: [0, 50], to: [10, 50], etiket: "%50", gizli: true },
            { id: "p3", tip: "nokta", x: 8, y: 76, etiket: "Artış yavaşlar", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Şematik bir ülkede kentte yaşayanların payı zamanla böyle değişir. Başlangıçta pay küçüktür." },
            { metin: "Tarım çağında insanların çoğu ==köyde== yaşar; kent payı neredeyse sabittir.", goster: ["p1"] },
            { metin: "Sanayi ve hizmet işleri kentte toplanınca ==köyden kente göç hızlanır==; eğri dikleşir.", goster: ["p2"] },
            { metin: "Pay yarıyı geçtiğinde ülke artık ==çoğunlukla kentlidir==.", goster: ["y50"] },
            { metin: "Çoğu insan zaten kentte olduğu için eğri ==yatıklaşır==: kentleşme yavaşlar.", goster: ["p3"] }
          ] },
        { tip: "not", metin: "Sanayi devrimini erken yaşayan ülkelerde (Avrupa, Kuzey Amerika) eğri çoktan yatıklaştı. Bugün kentleşme en hızlı çevre ve yarı çevre ülkelerinde sürüyor. Türkiye'de de köyden kente göç 1950'lerden sonra hızlandı." }
      ]
    },
    {
      baslik: "*Site* ve *situation*: kent nereye kurulur?",
      kisa: "*Site* yerin kendi özellikleridir; *situation* diğer yerlere göre konumudur.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏔️", baslik: "*Site* (yerleşim yeri)", maddeler: ["Yerin kendi fiziksel özellikleri: su, toprak, iklim, yer şekli", "Savunmaya elverişli tepe, doğal liman, tatlı su"] },
          sag: { ikon: "🛣️", baslik: "*Situation* (konumsal bağlam)", maddeler: ["Yerin başka yerlere göre konumu", "Yol kavşağı, ticaret yolu, hammadde ve pazara yakınlık"] },
          oyun: [
            { metin: "Kent, iki denizi ve iki kıtayı bağlayan Boğaz'ın üstündedir.", cevap: "sag", neden: "Başka yerlere göre konum: *situation*." },
            { metin: "Kentin kurulduğu koy, rüzgârdan korunaklı doğal bir limandır.", cevap: "sol", neden: "Yerin kendi fiziksel özelliği: *site*." },
            { metin: "Şehir, tarım bölgesiyle limanı bağlayan demiryolunun üzerindedir.", cevap: "sag", neden: "Yol bağlantısı ve yakınlık: *situation*." },
            { metin: "Kale, düşmanın görebileceği ama çıkması zor bir tepeye yapılmıştır.", cevap: "sol", neden: "Yer şekli: *site*." }
          ] },
        { tip: "tablo", baslik: "Üç Türkiye kenti", head: ["Kent", "*Site*", "*Situation*"], rows: [
            ["İstanbul", "Haliç, doğal liman; tepeler savunma sağlar", "Boğaz üzerinde, iki kıta ile iki deniz arasındaki ticaret yolu"],
            ["İzmir", "Körfez kıyısında, korunaklı geniş liman", "Ege'nin Anadolu'nun iç bölgelerine açılan kapısı"],
            ["Ankara", "Kale tepesi ve çevresindeki vadi", "Ülkenin ortasında, demiryolu ve karayolu ağının merkezinde"]
          ] },
        { tip: "tuzak", metin: "İkisi de zamanla değişebilir; soruda neyin anlatıldığına bak.", yanlis: "*Site* hiç değişmez, yalnızca *situation* değişir.", dogru: "Koy doldurmak *site*'ı değiştirir; yeni bir demiryolu ya da kanal *situation*'ın değerini değiştirir. Fiziksel özellik mi, başka yerlere göre konum mu diye ayır." }
      ]
    },
    {
      baslik: "İşlev ve büyüme",
      kisa: "İyi konum ticareti çeker, ticaret nüfusu çeker, nüfus kenti büyütür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚙️", terim: "Function", tr: "işlev", tanim: "Kentin asıl işi: liman, başkent, sanayi, ticaret, turizm ya da üniversite kenti olmak. İşlev değişirse kentin büyümesi de değişir.", ornek: "Maden kapanınca maden kasabası küçülür." }
          ] },
        { tip: "adimlar", baslik: "Küçük yerleşimden büyük kente", adimlar: [
            { baslik: "Elverişli *site* ve *situation*", metin: "Su, savunma, yol kavşağı ya da liman yerleşimi bir araya getirir." },
            { baslik: "Ticaret ve iş", metin: "Pazar, atölye ve limanda işler çoğalır." },
            { baslik: "Nüfus akışı", metin: "İş arayanlar köylerden ve küçük yerleşimlerden gelir." },
            { baslik: "Hizmetler ve yatırım", metin: "Okul, hastane, yol ve yeni işyerleri açılır; daha çok insan çekilir." }
          ] }
      ]
    },
    {
      baslik: "Kentleşmeyi sürükleyen güçler",
      kisa: "Ulaşım, nüfus artışı, göç, ekonomi ve devlet politikası kentleşmeyi yönlendirir.",
      bloklar: [
        { tip: "tablo", baslik: "Beş etken", head: ["Etken", "Kentleşmeyi nasıl artırır?", "Örnek"], rows: [
            ["Ulaşım ve iletişim", "Demiryolu, otoyol, liman, telefon ve internet kenti pazarlara bağlar", "Demiryolu kavşağındaki kasaba büyür"],
            ["Nüfus artışı", "Köyde artan nüfus tarlaya sığmaz, fazla nüfus kente yönelir", "Köyde bölünen tarlada geçinemeyen genç"],
            ["Göç", "İş ve okul arayanlar köyden kente taşınır", "İş için Anadolu'dan büyük şehre gelenler"],
            ["Ekonomik gelişme", "Sanayi ve hizmet işleri kentte toplanır; tarım makineleşince köyde iş azalır", "Kıyıda kurulan fabrikalar çevresinde büyüyen kentler"],
            ["Devlet politikaları", "Yatırım, teşvik, yeni başkent ya da yeni kent kurma kararları", "Ankara'nın 1923'te başkent olması"]
          ] },
        { tip: "ikili", sol: { ikon: "📤", baslik: "*Push factors* (itici)", maddeler: ["İnsanı köyden uzaklaştırır", "İşsizlik, toprak yetersizliği, kıtlık, çatışma"] },
          sag: { ikon: "📥", baslik: "*Pull factors* (çekici)", maddeler: ["İnsanı kente çeker", "İş, daha yüksek ücret, okul ve sağlık hizmeti"] },
          oyun: [
            { metin: "Kuraklık yüzünden ürün alamayan ailenin köyü terk etmesi.", cevap: "sol", neden: "Köyün dayattığı sorun: *push*." },
            { metin: "Kentte üniversite ve yeni iş fırsatları olması.", cevap: "sag", neden: "Kentin sunduğu imkân: *pull*." },
            { metin: "Köyde tarım makineleşince gençlere iş kalmaması.", cevap: "sol", neden: "Köyde iş azalması: *push*." },
            { metin: "Kentte akrabaların iş bulacağını söylemesi.", cevap: "sag", neden: "Kentteki fırsat: *pull*." }
          ] }
      ]
    },
    {
      baslik: "Banliyöleşme",
      kisa: "İnsanlar ve işler kent merkezinden çevreye yayılınca banliyöleşme olur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏘️", terim: "Suburb", tr: "banliyö", tanim: "Kent merkezinin çevresinde, ağırlıkla konutlardan oluşan, genelde merkezden daha düşük yoğunluklu yerleşim.", ornek: "Merkeze araçla ya da banliyö hattıyla gidilen konut siteleri." },
            { ikon: "↗️", terim: "Suburbanization", tr: "banliyöleşme", tanim: "Nüfusun ve işyerlerinin kent merkezinden çevredeki yerleşimlere kayması.", ornek: "Merkezdeki apartmandan şehir dışındaki bahçeli eve taşınmak." }
          ] },
        { tip: "adimlar", baslik: "Banliyöleşme zinciri", adimlar: [
            { baslik: "Otomobil ve otoyol", metin: "Uzak yerler araçla ulaşılabilir hale gelir." },
            { baslik: "Ucuz arazi ve konut kredisi", metin: "Çevrede arsa ucuzdur; devlet desteği ve krediler ev almayı kolaylaştırır (ABD'de savaş sonrası dönem)." },
            { baslik: "Merkezden çıkış", metin: "Kalabalık, gürültü ve ev fiyatlarından kaçan aileler çevreye taşınır." },
            { baslik: "İşler ve alışveriş de gelir", metin: "Market, okul ve iş yerleri insanların peşinden banliyöye açılır." }
          ] },
        { tip: "tuzak", metin: "Banliyöleşme kentleşmenin tersi değildir; insanlar yine kentsel bölgede yaşar.", yanlis: "İnsanlar banliyöye taşınınca kent küçülür.", dogru: "Kent merkezi nüfus kaybedebilir ama ==kentsel bölge büyür==: yerleşim alanı yayılır, yoğunluk azalır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Urbanization* = kentte yaşayanların payının artması. Oran = kent nüfusu ÷ toplam nüfus; sayı artışı tek başına yetmez.",
            "Kentleşme eğrisi S biçimlidir: yavaş başlar, göçle hızlanır, çoğunluk kentli olunca yavaşlar.",
            "*Site* = yerin fiziksel özellikleri (su, toprak, liman, tepe). *Situation* = başka yerlere göre konum (yol, kavşak, pazar).",
            "İkisi de kentin kökenini, *function*'ını (işlevini) ve büyümesini etkiler; ikisi de zamanla değişebilir.",
            "Beş etken: ulaşım ve iletişim, nüfus artışı, göç, ekonomik gelişme, devlet politikaları.",
            "Göç *push* (köyden iten) ve *pull* (kentin çektiği) etkenlerle açıklanır.",
            "*Suburbanization* = nüfusun ve işlerin merkezden çevreye kayması; otomobil, otoyol, ucuz arazi ve kredi hızlandırır.",
            "Banliyöleşme kentsel bölgeyi büyütür; kent merkezi nüfus kaybedebilir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir liman kentinin kuruluşu anlatılıyor. Aşağıdakilerden hangisi kentin *situation*'ını anlatır?",
      opts: ["Koyun rüzgârdan korunaklı bir doğal liman oluşturması", "Çevredeki tepelerin savunmayı kolaylaştırması", "Kentin, iç bölgelerdeki tarım alanlarını denize bağlayan demiryolunun ucunda olması", "Kıyıdaki ovanın verimli toprağa sahip olması"],
      a: 2, why: "*Situation* yerin başka yerlere göre konumudur: demiryolu bağlantısı ve iç bölgelerle ilişki. A, B ve D ise yerin kendi fiziksel özellikleridir (*site*). En çekici yanlış şık A'dır; liman kelimesi akla konum getirir ama koyun korunaklı olması yerin kendi özelliğidir." },
    { q: "X ülkesinin nüfusu 2000'de 50 milyon, 2020'de 100 milyondur. Kentte yaşayanlar aynı yıllarda 20 milyondan 50 milyona çıkmıştır. Hangisi doğrudur?",
      opts: ["Kent nüfusu 2,5 kat arttığı için kentleşme oranı da 2,5 kat artmıştır", "Kentleşme oranı %40'tan %50'ye çıkmıştır", "Toplam nüfus iki katına çıktığı için kentleşme oranı değişmemiştir", "Kırsal nüfus azalmıştır"],
      a: 1, why: "2000'de 20 ÷ 50 = %40, 2020'de 50 ÷ 100 = %50. Oran 10 puan artmıştır. C şıkkı çekici ama yanlıştır: kent nüfusu 2,5 kat arttı, toplam nüfus 2 kat; pay değişmiştir. Kırsal nüfus 30 milyondan 50 milyona çıkmıştır, yani D yanlıştır. A da yanlıştır: oran kent nüfusuna değil, kent nüfusunun toplam nüfusa bölümüne bağlıdır." },
    { q: "Tablodaki üç ülkeden hangisi, sanayinin yeni geliştiği ve köyden kente göçün çok hızlı olduğu bir ülkeyle en tutarlıdır?",
      fig: { type: "table", head: ["Ülke", "1980 kent payı", "2020 kent payı"], rows: [["P", "%78", "%83"], ["R", "%45", "%47"], ["Q", "%22", "%58"]], caption: "Kentte yaşayan nüfus payı" },
      opts: ["P: payı zaten yüksek, göç yoğundur", "R: oran neredeyse hiç değişmemiştir", "P ve R: ikisi de hızlı kentleşmiştir", "Q: pay kırk yılda 36 puan artmıştır"],
      a: 3, why: "Hızlı kentleşme, kent payının kısa sürede çok artması demektir: Q'da 22'den 58'e, 36 puan. P ve R'de değişim yalnızca 5 ve 2 puandır. En çekici yanlış şık A'dır: yüksek pay hızlı kentleşme değil, kentleşmenin olgunlaştığını gösterir." },
    { q: "Aşağıdakilerden hangisi banliyöleşmeyi en çok hızlandırır?",
      opts: ["Otoyol yapımı, ucuz otomobil kullanımı ve ucuz konut kredisi", "Köylerde tarımın makineleşmesi", "Kent merkezindeki işyerlerine vergi indirimi", "Mahalle içinde yürüyerek ulaşılan karma kullanımlı yapılar"],
      a: 0, why: "Otoyol, araç ve kredi insanların çevreye taşınmasını kolaylaştırır. B şıkkı köyden kente göçü artırır, yani kentleşmeyi; banliyöleşmeyi değil. C merkezi cazip kılar, D de merkezde yoğunlaşmayı destekler." },
    { q: "Bir hükümet, nüfusu az bir iç bölgede yeni bir kent kurup bakanlıkları ve kamu konutlarını oraya taşıyor. Bu kentin büyümesinde hangi etken öne çıkar?",
      opts: ["Yerin *site* özellikleri", "Hükümet politikaları", "Banliyöleşme", "Tarımın makineleşmesinden doğan *push* etkeni"],
      a: 1, why: "Kentin büyümesini yönlendiren şey bir devlet kararıdır: bakanlıklar ve konutlar yatırım ve iş getirir, bu da göçü çeker (Ankara'nın 1923'te başkent olması gibi). A yanlıştır çünkü sorunun ana unsuru yerin fiziksel özelliği değil, karardır; D de kırsalın itmesini anlatır, oysa senaryoda itme yok." }
  ]
};
