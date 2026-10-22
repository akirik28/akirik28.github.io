/* Kitora not defteri · bf305 · 3.5 Finansal Sermaye
   Kaynak: AP Business with Personal Finance CED, Topic 3.5. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf305",
  amac: "Bu konu işletmenin parayı nereden bulduğunu anlatıyor: girişimci neden dışarıdan sermaye arar, başabaş noktası nasıl hesaplanır, borç ile özkaynak finansmanı nasıl ayrılır. Borç verenin ve yatırımcının kazancını, riskini ve iyi bir yatırımcı sunumunun neler içerdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Girişimci neden dışarıdan para arar?",
      kisa: "Kendi parası ilk giderleri ve zararlı dönemi karşılamıyorsa girişimci dış sermaye arar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🥾", terim: "Bootstrapping", tr: "kendi imkânıyla başlamak", tanim: "İşi kişisel birikim, kişisel banka kredisi ya da kişisel kredi kartıyla finanse etmek. Çoğu girişimci böyle başlar.", ornek: "Cem'in kendi biriktirdiği 20.000 TL." },
            { ikon: "💵", terim: "External financial capital", tr: "dış finansal sermaye", tanim: "İşletmenin dışından sağlanan nakit. Girişimcinin parası başlangıç ve işletme giderlerini başabaşa kadar karşılamıyorsa aranır.", ornek: "Bankadan ya da yatırımcıdan alınan para." }
          ] },
        { tip: "ornek", baslik: "Cem'in 25.000 TL'lik açığı", durum: "Cem'in telefon tamir dükkânı için başlangıç maliyeti 45.000 TL. Elinde 20.000 TL birikim var. Dükkânı açınca ayda 82 tamirden azında zarar edecek (başabaş hesabı aşağıda). Dış sermaye gerekir mi?",
          adimlar: ["Kişisel para ile ihtiyaç karşılaştırılır: 45.000 − 20.000 = 25.000 TL açık.", "Ayrıca ilk aylarda satış başabaş noktasının altında kalırsa işletme zarar eder; örneğin ayda 40 tamirde: gelir 40 × 400 = 16.000, gider 20.500 + 40 × 150 = 26.500, yani 10.500 TL zarar.", "Bu zararı karşılayacak nakit yoksa işletme başabaşa ulaşmadan kapanabilir."],
          sonuc: "==25.000 TL== açık var ve ilk aylar zararlı olacağı için Cem dış sermaye aramalı." },
        { tip: "liste", baslik: "Kurulu işletmeler de neden dış sermaye arar?", maddeler: [
            { ikon: "🧪", baslik: "Yeni ürün geliştirmek", metin: "Araştırma ve üretim için yeni para gerekir." },
            { ikon: "🏗️", baslik: "Sabit varlıkları yenilemek", metin: "Eskiyen makine ve binaların yerine yenisini almak." },
            { ikon: "📦", baslik: "Satışları ve geliri artırmak", metin: "Daha fazla satış için üretimi büyütmek." },
            { ikon: "🌊", baslik: "Nakit akışını yönetmek", metin: "Gelir tahsilatı düzensizdir, ama giderler her zaman ödenmelidir." }
          ] }
      ]
    },
    {
      baslik: "Başabaş noktası",
      kisa: "Başabaş, gelirin tüm maliyetleri tam karşıladığı satış miktarıdır; kâr ancak ondan sonra başlar.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Başabaş miktarı", alt: "*break-even*" }, "=",
            { t: "Sabit giderler", alt: "dönem toplamı" }, "÷",
            { t: "Birim fiyat − birim değişken gider", alt: "*contribution margin* (birim katkı)" }
          ], aciklama: "Her satılan ürün, kendi değişken giderini çıkarınca sabit giderlerin bir kısmını karşılar. Bu parçalar toplamda sabit gideri bulduğunda başabaşa gelinir." },
        { tip: "grafik", baslik: "Kantinde tostun başabaşı", xlabel: "Tost (yüz adet)", ylabel: "Bin TL", xmax: 6, ymax: 16, xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }], yticks: [{ v: 3, label: "3" }, { v: 5, label: "5" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "mal", tip: "cizgi", renk: 1, from: [0, 3], to: [6, 9], etiket: "Toplam maliyet", gizli: true },
            { id: "gel", tip: "cizgi", renk: 0, from: [0, 0], to: [6, 15], etiket: "Gelir", gizli: true },
            { id: "bep", tip: "nokta", x: 2, y: 5, etiket: "Başabaş", kilavuz: true, gizli: true },
            { id: "zar", tip: "alan", renk: 3, noktalar: [[0, 0], [2, 5], [0, 3]], gizli: true },
            { id: "kar", tip: "alan", renk: 2, noktalar: [[2, 5], [6, 15], [6, 9]], gizli: true }
          ],
          durumlar: [
            { metin: "Kantinin toplam maliyeti: kira 3.000 TL sabit + tost başına 10 TL malzeme. Yüz tostta maliyet 1.000 TL artar.", goster: ["mal"] },
            { metin: "Tost 25 TL'den satılıyor: yüz tostta gelir 2.500 TL. Gelir çizgisi daha dik çıkar.", goster: ["gel"] },
            { metin: "Çizgiler 200 tostta kesişir: gelir 5.000 TL = maliyet 5.000 TL. ==Başabaş noktası==.", goster: ["bep"] },
            { metin: "200 tostun altında ==zarar==, üstünde ==kâr==. 400 tostta kâr: 6.000 − 3.000 = 3.000 TL.", goster: ["zar", "kar"] }
          ] },
        { tip: "ornek", baslik: "Başabaş hesapları", durum: "(a) Kantin: sabit gider 3.000 TL/ay, tost 25 TL, değişken gider 10 TL. (b) Cem'in dükkânı: sabit gider 20.500 TL/ay, ortalama tamir ücreti 400 TL, parça gideri 150 TL. Başabaş miktarları nedir?",
          adimlar: ["(a) Birim katkı: 25 − 10 = 15 TL. Başabaş = 3.000 ÷ 15 = 200 tost.", "(b) Birim katkı: 400 − 150 = 250 TL. Başabaş = 20.500 ÷ 250 = 82 tamir.", "Kontrol (b): 82 × 250 = 20.500 TL; gelir 82 × 400 = 32.800 = gider 20.500 + 82 × 150 (12.300)."],
          sonuc: "Kantinde ==200 tost==, Cem'in dükkânında ==82 tamir== başabaş noktasıdır." },
        { tip: "tuzak", baslik: "Başabaşta kâr yoktur", metin: "Başabaş kâr eşiğidir, kâr değil.", yanlis: "Başabaş noktasında işletme kâr eder.", dogru: "Başabaşta gelir bütün maliyetleri tam karşılar; kâr da zarar da sıfırdır. Kâr ancak bu miktarın ==üstünde== başlar." }
      ]
    },
    {
      baslik: "Borç mu, özkaynak mı?",
      kisa: "Borç faizle geri ödenir; özkaynak finansmanı mülkiyet payı ve gelecekteki kâr payı verir.",
      bloklar: [
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🏦", baslik: "Business loan (borç)", maddeler: ["Faizle geri ödenir", "Faiz işletme için bir giderdir", "Sahip işletmenin kontrolünü ve kârını paylaşmaz", "Yüksek faiz ya da büyük kredi maliyeti artırır"] },
          sag: { ikon: "🤲", baslik: "Equity financing (özkaynak)", maddeler: ["Hisse (*ownership share*) verilir", "Geri ödeme ve faiz yok", "Yatırımcı ortak olur: kontrol ve gelecek kârın bir kısmı paylaşılır", "Yatırımcı da kayıpta payını yaşar"] },
          oyun: [
            { metin: "Aylık taksitle ve faizle ödenen banka kredisi.", cevap: "sol", neden: "Faizle geri ödenen borç: *loan*." },
            { metin: "Yatırımcıya %25 hisse verip karşılığında para almak.", cevap: "sag", neden: "Mülkiyet payı verilir: *equity financing*." },
            { metin: "Kârı yatırımcıyla paylaşmak zorunda kalmamak için bankadan borçlanmak.", cevap: "sol", neden: "Borçta faiz ödenir ama kâr ve kontrol paylaşılmaz." },
            { metin: "Yatırımcı karar sürecinde söz sahibi olmak istiyor.", cevap: "sag", neden: "Yatırımcı ortak olur: kontrol bir kısım devredilir." }
          ] },
        { tip: "tablo", baslik: "100.000 TL ihtiyaç: %10 faizli borç ya da %25 hisse", head: ["Durum", "Borç (%10 faiz)", "Özkaynak (%25 hisse)"], rows: [
            ["İşletmeden ne istenir?", "Faiz (yılda 10.000 TL) ve anapara", "Gelecek kârın %25'i, ortaklık"],
            ["İyi yıl: ödemelerden önceki kâr 60.000 TL", "Faiz 10.000 → sahibe 50.000", "Yatırımcıya 15.000 → sahibe 45.000"],
            ["Kötü yıl: kâr 0 TL", "Faiz yine ödenir: sahip −10.000", "Yatırımcıya ödeme yok: sahip 0"],
            ["Kontrol", "Sahipte kalır", "Bir kısmı yatırımcıyla paylaşılır"]
          ], not: "İyi yılda özkaynak daha pahalıdır; kötü yılda borç daha risklidir. İki yolun da bir bedeli var." },
        { tip: "tuzak", baslik: "Özkaynak bedava para değildir", metin: "Faiz ödememek, bedelsiz olmak demek değildir.", yanlis: "Yatırımcıdan hisse karşılığı para almak faiz ödemediğim için daha ucuzdur.", dogru: "Özkaynakta geri ödeme yoktur ama sahip kontrolün bir kısmını ve gelecekteki kârın bir bölümünü ==sonsuza kadar== yatırımcıyla paylaşır. İşletme büyüdükçe bu bedel borcun faizinden büyük olabilir." }
      ]
    },
    {
      baslik: "Hangi aşamada hangi kaynak?",
      kisa: "Yeni işletmeler yakınlarına ve hisseye, yerleşik işletmeler bankaya, anonim şirketler tahvil ve hisseye yönelir.",
      bloklar: [
        { tip: "tablo", baslik: "İşletmenin evresi ve tipik kaynak", head: ["Evre", "Tipik kaynak", "Neden?"], rows: [
            ["Yeni (genelde 2 yıldan az)", "Aile ve arkadaştan borç; hisse satmak (aile, arkadaş, dış yatırımcı)", "Kanıtlanmış geliri ve ödeme gücü henüz yok"],
            ["Yerleşik (genelde en az 2 yıl)", "Banka kredisi", "Kanıtlanmış geliri ve geri ödeme kapasitesi var"],
            ["Anonim şirket (*corporation*)", "Tahvil çıkarmak ya da hisse satmak", "Fon toplamanın ek yolları"]
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "📜", terim: "Bond", tr: "tahvil", tanim: "Bir yatırımcının işletmeye verdiği borç. Tahvil sahibi borç verendir ve faiz alır.", ornek: "Şirketin çıkardığı 1.000 TL'lik tahvil." },
            { ikon: "📈", terim: "Stock", tr: "hisse senedi", tanim: "İşletmedeki mülkiyet payı; özel olarak ya da halka açık biçimde satılabilir.", ornek: "Şirketin %5 hissesi." },
            { ikon: "🔄", terim: "Secondary market", tr: "ikinci el piyasa", tanim: "Daha önce çıkarılmış tahvil ve hisselerin yatırımcılar arasında alınıp satıldığı piyasa.", ornek: "Borsada hisse almak." },
            { ikon: "🚀", terim: "Venture capital", tr: "risk sermayesi", tanim: "Yüksek büyüme potansiyeli olan riskli yeni işletmelere hisse karşılığı para yatıran yatırımcı ya da fon.", ornek: "Bir teknoloji girişimine hisse karşılığı yatırım." }
          ] }
      ]
    },
    {
      baslik: "Borç verenin ve yatırımcının kazancı ve riski",
      kisa: "Risk ne kadar yüksekse, borç veren ve yatırımcı o kadar yüksek getiri bekler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏷️", terim: "Interest", tr: "faiz", tanim: "Borç verenin geliri. Tahvil sahibine faiz öder; tüketici ikinci el piyasadan şirket tahvili alınca işletmeye borç veren olur.", ornek: "Tahvilin yıllık 80 TL faizi." },
            { ikon: "💰", terim: "Dividend", tr: "temettü", tanim: "Yatırımcıların işletme kârından aldığı pay. Bazı şirketler kârı işletmeye yeniden yatırıp temettü dağıtmaz.", ornek: "Hisse başı 4 TL temettü." },
            { ikon: "📊", terim: "Capital gain", tr: "sermaye kazancı", tanim: "Bir varlığı aldığından yüksek fiyata satmak. Tahvil ve hisse fiyatları işletmenin performansına, yatırımcı talebine ve PESTEL güçlerine göre değişir.", ornek: "100 TL'ye alınan hisseyi 110 TL'ye satmak." }
          ] },
        { tip: "ornek", baslik: "Yıllık getiri oranı", durum: "Getiri oranı = (gelir + sermaye kazancı) ÷ varlığın alış fiyatı. (a) Ela 100 TL'ye hisse alıyor, 4 TL temettü alıyor ve 110 TL'ye satıyor. (b) Mert 1.000 TL'lik tahvil alıyor, yıllık 80 TL faiz alıyor ve fiyat değişmiyor. (c) Tuna 200 TL'ye hisse alıyor, temettü yok, 180 TL'ye satıyor.",
          adimlar: ["(a) Gelir 4 + sermaye kazancı 10 = 14 TL; 14 ÷ 100 = %14.", "(b) Gelir 80 + sermaye kazancı 0 = 80 TL; 80 ÷ 1.000 = %8.", "(c) Gelir 0 + sermaye kazancı −20 = −20 TL; −20 ÷ 200 = −%10 (zarar)."],
          sonuc: "Ela ==%14==, Mert ==%8== kazandı; Tuna ==−%10== kaybetti." },
        { tip: "grafik", baslik: "Risk arttıkça beklenen getiri artar", xlabel: "Risk", ylabel: "Beklenen getiri", xmax: 10, ymax: 10, xticks: [], yticks: [],
          ogeler: [
            { id: "e", tip: "egri", renk: 3, noktalar: [[0.5, 1.5], [1, 2], [3, 4], [6, 7], [9, 9.5]], gizli: true },
            { id: "mev", tip: "nokta", x: 1, y: 2, etiket: "Mevduat", kilavuz: true },
            { id: "tah", tip: "nokta", x: 3, y: 4, etiket: "Tahvil", kilavuz: true, gizli: true },
            { id: "his", tip: "nokta", x: 6, y: 7, etiket: "Hisse", kilavuz: true, gizli: true },
            { id: "gir", tip: "nokta", x: 9, y: 9.5, etiket: "Yeni girişim", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Sigortalı mevduat: ==düşük risk==, düşük getiri." },
            { metin: "Sağlam bir şirketin tahvili: biraz daha riskli, biraz daha yüksek getiri.", goster: ["tah"] },
            { metin: "Hisse: temettü ve değer artışı umudu ama fiyat düşebilir.", goster: ["his"] },
            { metin: "Yeni, kanıtlanmamış girişim: risk çok yüksek ama yatırımcı daha yüksek getiri bekler.", goster: ["gir", "e"] }
          ] },
        { tip: "tuzak", baslik: "Tahvil ortaklık değildir", metin: "Borç veren ile ortak aynı kişi değildir.", yanlis: "Şirketin tahvilini alan, şirketin sahiplerinden biri olur.", dogru: "Tahvil bir borçtur: tahvil sahibi ==borç veren==dir ve faiz alır. Mülkiyet payı verenler hisse (*stock*) sahipleridir; temettü garanti değildir ve şirket kapanırsa yatırımcı bütün parasını kaybedebilir." }
      ]
    },
    {
      baslik: "Yatırımcıya sunum (*pitch*)",
      kisa: "İyi sunum; değer önerisi, pazar araştırması, pazarlama ve finansal tahminlerle talebi gerekçelendirir.",
      bloklar: [
        { tip: "adimlar", baslik: "Business plan'ın dört parçası", adimlar: [
            { baslik: "*Value proposition*", metin: "Ürün müşterinin hangi sorununu nasıl çözüyor?" },
            { baslik: "*Market research*", metin: "Pazar ne kadar büyük, müşteri kim, rakip kim?" },
            { baslik: "*Marketing strategy*", metin: "Müşteriye nasıl ulaşılacak?" },
            { baslik: "*Financial projections*", metin: "Ne kadar para isteniyor, nasıl kullanılacak, getiri ve risk ne?" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🏷️", terim: "Valuation", tr: "değerleme", tanim: "İşletmenin ekonomik değerinin tahmini. Yatırımcıya bir hissenin değerini, borç verene ise geri ödeme gücünü gösterir.", ornek: "Değerleme 400.000 TL ise %25'lik pay yaklaşık 100.000 TL eder." },
            { ikon: "🎯", terim: "Product-market fit", tr: "ürün-pazar uyumu", tanim: "Ürüne gerçekten yeterli talep olduğunu gösteren kanıt. Talebin başarı olasılığını artırır.", ornek: "Önceden sipariş veren 200 müşteri." }
          ] },
        { tip: "liste", baslik: "Borç veren ve yatırımcı nelere bakar?", maddeler: [
            { ikon: "📑", baslik: "Finansal raporlar ve tahminler", metin: "Kurulu işletmede geçmiş tablolar ve sektör verileri değerlemeyi belirler." },
            { ikon: "✅", baslik: "Kanıt ve gerekçe", metin: "Ürün-pazar uyumu ve tahminlerin dayanağı." },
            { ikon: "⚖️", baslik: "Düşük risk, yüksek getiri", metin: "Genelde daha az riskli ve daha yüksek getirili projeler tercih edilir." },
            { ikon: "👥", baslik: "Ekip ve uyum", metin: "Yönetim ekibinin nitelikleri; değer önerisi ve misyonun yatırımcının hedefleriyle uyumu." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Girişimciler önce kendi birikimi, kişisel kredi ve kartla başlar (*bootstrapping*); parası ihtiyaç ve başabaşa kadar yetmiyorsa dış sermaye arar.",
            "Kurulu işletmeler yeni ürün, sabit varlık yenileme, satış artırma ve nakit akışı için sermaye arar.",
            "Başabaş = sabit giderler ÷ (fiyat − birim değişken gider); kantinde 3.000 ÷ 15 = 200 tost.",
            "Başabaşta kâr da zarar da sıfırdır; üstü kâr, altı zarardır.",
            "Kaynaklar borç ya da özkaynaktır: borç faizle geri ödenir, özkaynak mülkiyet ve gelecek kâr payı verir.",
            "Yeni işletmeler aile/arkadaş borcu ya da hisse satışına, yerleşik (≥ 2 yıl) işletmeler banka kredisine yönelir; anonim şirketler tahvil ve hisse çıkarır.",
            "Tahvil borçtur (faiz), hisse mülkiyettir (temettü, sermaye kazancı). Getiri = (gelir + sermaye kazancı) ÷ fiyat.",
            "Risk arttıkça beklenen getiri artar; borç verenler ve yatırımcılar iş kötü giderse kayıp riski taşır.",
            "Pitch: değer önerisi, pazar araştırması, pazarlama stratejisi ve finansal tahminler; ürün-pazar uyumu ve gerekçeli tahminler başarı şansını artırır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir pastanenin sabit gideri ayda 4.000 TL, bir pastanın fiyatı 30 TL ve birim değişken gideri 10 TL'dir. Başabaş noktası kaç pastadır?",
      fig: { type: "table", caption: "Pastane", head: ["Sabit gider (aylık)", "Fiyat", "Birim değişken gider"], rows: [["4.000 TL", "30 TL", "10 TL"]] },
      opts: ["100 pasta", "133 pasta", "200 pasta", "400 pasta"],
      a: 2,
      why: "Birim katkı 30 − 10 = 20 TL; 4.000 ÷ 20 = 200 pasta. B en çekici yanlış: 4.000 ÷ 30 yapar, yani değişken gideri çıkarmaz." },
    { q: "Elif işini büyütmek için yatırımcıdan 50.000 TL alıyor ve karşılığında işletmenin %20'sini veriyor. Bu finansman hakkında hangisi doğrudur?",
      opts: ["Elif sabit faiz ve anapara ödemek zorundadır; kâr yatırımcıyla paylaşılmaz", "Bu bir tahvildir; yatırımcı borç verendir", "Elif geri ödeme yapmak zorunda değildir ama mülkiyetin bir kısmını ve gelecek kârın bir bölümünü yatırımcıyla paylaşır", "Bu finansman için işletmenin yerleşik olması şarttır"],
      a: 2,
      why: "Hisse karşılığı para almak özkaynak finansmanıdır: yatırımcı ortak olur. A en çekici yanlış: bu borç özelliklerini, yani faiz ve anapara ödemesini anlatır." },
    { q: "Ayşe bir hisseyi 50 TL'ye alıyor, yıl içinde 2 TL temettü alıyor ve hisseyi 56 TL'ye satıyor. Yıllık getiri oranı kaçtır?",
      fig: { type: "table", caption: "Ayşe'nin yatırımı", head: ["Alış", "Temettü", "Satış"], rows: [["50 TL", "2 TL", "56 TL"]] },
      opts: ["%12", "%4", "%8", "%16"],
      a: 3,
      why: "Gelir 2 + sermaye kazancı 6 = 8 TL; 8 ÷ 50 = %16. A en çekici yanlış: yalnızca sermaye kazancını (6 ÷ 50) hesaplar ve temettüyü unutur." },
    { q: "Bir yıldır faaliyette olan, henüz kanıtlanmış bir geliri ve geri ödeme gücü bulunmayan bir girişim için hangi finansman yolu en tipiktir?",
      opts: ["Büyük bir banka işletme kredisi", "Aile ve arkadaşlardan borç alma ya da hisse satma", "Halka açık tahvil çıkarmak", "Finansman aramamak, çünkü yeni işletmeler dış sermaye alamaz"],
      a: 1,
      why: "Yeni işletmeler (genelde 2 yıldan az) çoğu zaman aile/arkadaş borcuna ya da hisse satışına yönelir. A en çekici yanlış: banka kredisi geri ödeme gücü kanıtlanmış yerleşik işletmeler içindir." },
    { q: "Aşağıdakilerden hangisi bir yatırımcıyı bir girişime para yatırmaya ikna etme şansını en çok artırır?",
      opts: ["Ürünün ne kadar yenilikçi olduğunu söylemek, rakamları paylaşmamak", "Yüksek bir hisse fiyatı istemek", "Yatırımcının hedefleriyle çelişen bir misyon", "Ürün-pazar uyumuna dair kanıt ve dayanağı olan finansal tahminler"],
      a: 3,
      why: "Talebin varlığını gösteren kanıt ve tahminlerin gerekçesi başarı olasılığını artırır; yatırımcılar ayrıca düşük risk ve yüksek getiri ister. A en çekici yanlış: yenilik tek başına talep ya da tahmin kanıtı değildir." }
  ]
};
