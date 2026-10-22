/* Kitora not defteri · bf304 · 3.4 İşletme Giderleri
   Kaynak: AP Business with Personal Finance CED, Topic 3.4. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf304",
  amac: "Bu konu işletme giderlerini anlatıyor: bir işi açmak için gereken başlangıç maliyetleri, işi yürütürken tekrar eden giderlerin doğrudan ve dolaylı, sabit ve değişken olarak sınıflanması ve sigortanın rolü. Hangi giderin hangi kutuya girdiğini ve toplam maliyeti hesaplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Başlangıç maliyetleri",
      kisa: "Başlangıç maliyetleri, bir işi açmak için yapılan tek seferlik harcamalar ve ilk giderlerdir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚀", terim: "Startup costs", tr: "başlangıç maliyetleri", tanim: "Yeni bir işletmeyi ya da ürünü başlatmakla ilgili tek seferlik harcamalar ile işi kurarken yapılan ilk giderlerin toplamı.", ornek: "Dükkânı açmadan önce ödenen ruhsat ve kuruluş ücreti." },
            { ikon: "1️⃣", terim: "One-time expenditures", tr: "tek seferlik harcamalar", tanim: "Hukuki ücretler, şirket kuruluş ve ruhsat ücretleri; bazı durumlarda ekipman alımı.", ornek: "Avukat ve ticaret odası masrafı." },
            { ikon: "🔁", terim: "Initial expenses", tr: "ilk giderler", tanim: "Kira (*occupancy*), araştırma-geliştirme, pazarlama, sigorta ve ilk stok. İşletme çalışmaya başlayınca bunlar sürekli gider olur.", ornek: "Dükkânın ilk ay kirası; ilk stok." }
          ] },
        { tip: "tablo", baslik: "Cem'in telefon tamir dükkânı: başlangıç maliyeti", head: ["Kalem", "Türü", "Tutar (TL)"], rows: [
            ["Şirket kuruluşu ve ruhsat", "Tek seferlik", "6.000"],
            ["Tezgâh ve tamir aletleri", "Tek seferlik (ekipman)", "14.000"],
            ["Kira ve depozito", "İlk gider (sonra süreklileşir)", "8.000"],
            ["Tabela ve ilk reklam", "İlk gider (sonra süreklileşir)", "3.000"],
            ["Sigorta", "İlk gider (sonra süreklileşir)", "2.000"],
            ["İlk yedek parça stoku", "İlk gider (sonra süreklileşir)", "12.000"],
            ["Toplam", "", "45.000"]
          ], vurgu: 6, not: "Tek seferlik: 6.000 + 14.000 = 20.000 TL. İlk giderler: 8.000 + 3.000 + 2.000 + 12.000 = 25.000 TL. Toplam 45.000 TL." },
        { tip: "grafik", baslik: "45.000 TL iki parçadan oluşur", xlabel: "", ylabel: "TL", xmax: 4, ymax: 50000, xticks: [{ v: 2, label: "Başlangıç maliyeti" }], yticks: [{ v: 20000, label: "20.000" }, { v: 45000, label: "45.000" }],
          ogeler: [
            { id: "k1", tip: "alan", renk: 0, noktalar: [[1, 0], [3, 0], [3, 0], [1, 0]] },
            { id: "k2", tip: "alan", renk: 1, noktalar: [[1, 20000], [3, 20000], [3, 20000], [1, 20000]] },
            { id: "t1", tip: "yazi", x: 2, y: 10000, metin: "Tek seferlik 20.000", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 32500, metin: "İlk giderler 25.000", gizli: true },
            { id: "t3", tip: "yazi", x: 2, y: 47500, metin: "Toplam 45.000", gizli: true }
          ],
          durumlar: [
            { metin: "Önce ==tek seferlik== harcamalar: kuruluş, ruhsat ve ekipman, 20.000 TL.", set: { k1: { noktalar: [[1, 0], [3, 0], [3, 20000], [1, 20000]] } }, goster: ["t1"] },
            { metin: "Üstüne ==ilk giderler==: kira, reklam, sigorta ve ilk stok, 25.000 TL.", set: { k2: { noktalar: [[1, 20000], [3, 20000], [3, 45000], [1, 45000]] } }, goster: ["t2"] },
            { metin: "Cem'in dükkânı için ilk gün gereken para ==45.000 TL==.", goster: ["t3"] }
          ] },
        { tip: "tuzak", baslik: "İlk giderler yalnızca başlangıçta değildir", metin: "Kira, pazarlama, sigorta ve stok açılışta başlar ama bitmez.", yanlis: "İlk giderler yalnızca dükkânı açarken ödenen tek seferlik masraflardır.", dogru: "Kira, pazarlama, sigorta ve stok gibi ilk giderler işletme çalışmaya başlayınca sürekli (*recurring*) gider olur; tek seferlik olanlar hukuki ücretler, ruhsat ve bazen ekipmandır." }
      ]
    },
    {
      baslik: "Doğrudan ve dolaylı maliyetler",
      kisa: "Doğrudan maliyet belirli ürüne ya da hizmete bağlıdır; dolaylı maliyet işi yürütmenin bedelidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Direct costs", tr: "doğrudan maliyetler", tanim: "Belirli mal ya da hizmetlerin üretimi veya sunumuyla doğrudan ilgili maliyetler.", ornek: "Tostun ekmeği ve peyniri." },
            { ikon: "🏢", terim: "Indirect costs / operating expenses", tr: "dolaylı maliyetler / faaliyet giderleri", tanim: "İşi yürütmenin maliyetleri: kira (ofis), ofis ve satış personeli maaşı, pazarlama, malzeme, fatura, bakım, sigorta; genellikle sabittir.", ornek: "Ofis kirası, reklam." },
            { ikon: "🏭", terim: "COGS", tr: "satılan malın maliyeti", tanim: "Mal üreten işletmenin doğrudan maliyeti: ham madde, üretim malzemesi, üretim çalışanı ücret ve yan hakları, üretim tesisinin işletme maliyeti.", ornek: "Fabrikadaki kumaş ve dikiş ustasının ücreti." },
            { ikon: "🧰", terim: "Cost of sales", tr: "satışların maliyeti", tanim: "Hizmet sunan işletmenin doğrudan maliyeti: doğrudan işçilik, seyahat ve hizmetin sunumunda kullanılan malzemeler.", ornek: "Teknisyenin müşteriye gidiş yol masrafı." }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🎯", baslik: "Doğrudan maliyet", maddeler: ["Belirli ürün ya da hizmete bağlı", "Mal üreten için: COGS", "Hizmet sunan için: *cost of sales*"] },
          sag: { ikon: "🏢", baslik: "Dolaylı maliyet (*operating expense*)", maddeler: ["İşi yürütmenin genel maliyeti", "Kira (ofis), reklam, ofis maaşları, sigorta", "Genellikle sabit"] },
          oyun: [
            { metin: "Fırında ekmek yapımında kullanılan un.", cevap: "sol", neden: "Üretilen mala doğrudan bağlı: COGS." },
            { metin: "Merkez ofisteki yönetici asistanının maaşı.", cevap: "sag", neden: "İşi yürütme maliyeti: *operating expense*." },
            { metin: "Reklam ve sosyal medya harcaması.", cevap: "sag", neden: "Pazarlama bir *operating expense*." },
            { metin: "Tamir hizmetinde ustanın çalıştığı saatlerin ücreti.", cevap: "sol", neden: "Doğrudan işçilik: *cost of sales*." },
            { metin: "Üretim tesisinin kirası.", cevap: "sol", neden: "Tesis maliyeti COGS içindedir; doğrudan maliyettir (ve sabittir)." }
          ] }
      ]
    },
    {
      baslik: "Sabit ve değişken giderler",
      kisa: "Sabit giderler üretimle değişmez; değişken giderler üretim arttıkça artar.",
      bloklar: [
        { tip: "grafik", baslik: "Kantin tostu: kira sabit, malzeme değişken", xlabel: "Tost (yüz adet)", ylabel: "Maliyet (bin TL)", xmax: 10, ymax: 15, xticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }], yticks: [{ v: 3, label: "3" }, { v: 8, label: "8" }, { v: 13, label: "13" }],
          ogeler: [
            { id: "sb", tip: "cizgi", renk: 0, from: [0, 3], to: [10, 3], etiket: "Sabit", gizli: true },
            { id: "dg", tip: "cizgi", renk: 1, from: [0, 0], to: [10, 10], etiket: "Değişken", gizli: true },
            { id: "tp", tip: "cizgi", renk: 2, from: [0, 3], to: [10, 13], etiket: "Toplam", gizli: true },
            { id: "n5", tip: "nokta", x: 5, y: 8, etiket: "8", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Kantinin kirası ayda 3.000 TL. Kaç tost satarsan sat ==aynı kalır==: *fixed cost*.", goster: ["sb"] },
            { metin: "Her tosta 10 TL malzeme gider. Satış arttıkça toplam malzeme gideri de artar: *variable cost*.", goster: ["dg"] },
            { metin: "Toplam maliyet = sabit + değişken.", goster: ["tp"] },
            { metin: "500 tostta: 3.000 + 500 × 10 = ==8.000 TL== (8 bin TL).", goster: ["n5"] }
          ] },
        { tip: "ornek", baslik: "500 ve 1.000 tostun maliyeti", durum: "Kantinin kirası ayda 3.000 TL (sabit). Her tostun malzemesi 10 TL (değişken). Ayda 500 tost ve 1.000 tost satılırsa toplam maliyet ne olur?",
          adimlar: ["500 tost: değişken 500 × 10 = 5.000 TL; toplam 3.000 + 5.000 = 8.000 TL.", "1.000 tost: değişken 1.000 × 10 = 10.000 TL; toplam 3.000 + 10.000 = 13.000 TL.", "Sabit kısım iki durumda da 3.000 TL; yalnızca değişken kısım büyüdü."],
          sonuc: "500 tostta ==8.000 TL==, 1.000 tostta ==13.000 TL==." },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "📌", baslik: "Sabit gider (*fixed*)", maddeler: ["Üretim miktarıyla değişmez", "Üretim hiç olmasa da ödenir", "Örnek: kira, sigorta"] },
          sag: { ikon: "📈", baslik: "Değişken gider (*variable*)", maddeler: ["Üretim arttıkça artar", "Üretim yoksa ödenmez", "Örnek: ham madde, paketleme"] },
          oyun: [
            { metin: "Dükkânın aylık kirası.", cevap: "sol", neden: "Satış ne olursa olsun aynı: sabit." },
            { metin: "Her sipariş için kullanılan karton paket.", cevap: "sag", neden: "Sipariş arttıkça artar: değişken." },
            { metin: "Fabrikanın yıllık sigortası.", cevap: "sol", neden: "Üretimle değişmez: sabit." },
            { metin: "Tost yapımında harcanan ekmek ve kaşar.", cevap: "sag", neden: "Satılan tost kadar artar: değişken." }
          ] },
        { tip: "tuzak", baslik: "Sabit demek hiç değişmez demek değil", metin: "Kira bir yıl sonra zamlanabilir.", yanlis: "Sabit gider hiçbir zaman değişmez.", dogru: "Sabit gider ==üretim miktarına göre== değişmez; kira başka nedenlerle (zam gibi) yine de artabilir." }
      ]
    },
    {
      baslik: "Giderleri sınıflama: iki ayrı eksen",
      kisa: "Her gider hem doğrudan/dolaylı hem de sabit/değişken olarak sınıflanır; ikisi ayrıdır.",
      bloklar: [
        { tip: "tablo", baslik: "Aynı gider, iki ayrı soru", head: ["Gider", "Doğrudan mı, dolaylı mı?", "Sabit mi, değişken mi?"], rows: [
            ["Fabrika kirası", "Doğrudan (COGS)", "Sabit"],
            ["Ham madde (un, kumaş)", "Doğrudan (COGS)", "Değişken"],
            ["Üretim çalışanı ücreti", "Doğrudan (COGS)", "Duruma göre (sabit ya da değişken)"],
            ["Ofis personeli maaşı", "Dolaylı (*operating expense*)", "Tipik olarak sabit"],
            ["Reklam ve pazarlama", "Dolaylı (*operating expense*)", "Tipik olarak sabit"],
            ["Hizmette müşteriye gidiş yol gideri", "Doğrudan (*cost of sales*)", "Çoğunlukla değişken"]
          ], not: "COGS'un kalemleri sabit de değişken de olabilir: fabrika kirası sabit, hammadde değişkendir." },
        { tip: "ornek", baslik: "Cem'in dükkânı, ayda 100 tamir", durum: "Cem'in tamirci ustasının maaşı ayda 12.000 TL (hizmetin doğrudan işçiliği, sabit). Kira 8.000 TL ve sigorta 500 TL (dolaylı, sabit). Her tamirde 150 TL'lik yedek parça gider (doğrudan, değişken). Ayda 100 tamirde toplam, doğrudan ve dolaylı maliyet nedir? Peki 150 tamirde?",
          adimlar: ["100 tamir: değişken 100 × 150 = 15.000 TL. Doğrudan = 12.000 + 15.000 = 27.000 TL. Dolaylı = 8.000 + 500 = 8.500 TL. Toplam = 35.500 TL.", "150 tamir: değişken 150 × 150 = 22.500 TL. Toplam = 12.000 + 8.000 + 500 + 22.500 = 43.000 TL.", "Doğrudan maliyet hem sabit (usta maaşı) hem değişken (yedek parça) içerir."],
          sonuc: "100 tamirde ==35.500 TL== (doğrudan 27.000 + dolaylı 8.500); 150 tamirde ==43.000 TL==." },
        { tip: "tuzak", baslik: "Doğrudan = değişken değil", metin: "İki sınıflama ayrı sorulara cevap verir.", yanlis: "Doğrudan maliyetler hep değişken, dolaylı maliyetler hep sabittir.", dogru: "Fabrika kirası doğrudan maliyettir (COGS) ama sabittir. Doğrudan/dolaylı ==neye bağlı== sorusunun, sabit/değişken ==üretimle değişir mi== sorusunun cevabıdır." }
      ]
    },
    {
      baslik: "Sigorta ve risk",
      kisa: "Sigorta; kaza, yaralanma ve mal hasarı kayıplarına karşı korur; bir kısmı zorunludur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛡️", terim: "Insurance", tr: "sigorta", tanim: "İşletmelerin ve tüketicilerin kaza, yaralanma ya da mal hasarından doğan mali kayıplardan korunmak için satın aldığı hizmet.", ornek: "Dükkân için yangın ve hırsızlık sigortası." },
            { ikon: "⚠️", terim: "Required insurance", tr: "zorunlu sigorta", tanim: "Bazı sigortalar zorunludur; çoğu isteğe bağlıdır.", ornek: "İşçi tazminatı (*workers' compensation*)." },
            { ikon: "🎚️", terim: "Risk tolerance", tr: "riske katlanma isteği", tanim: "Riski kabullenme isteği. İşletmeler ve kişiler, riski azaltmak için ne kadar sigorta yaptıracağı konusunda farklıdır.", ornek: "Riski sevmeyen biri daha fazla sigorta yaptırır." }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "📋", baslik: "Zorunlu sigorta", maddeler: ["Yasa ya da şart gereği yapılır", "Örnek: *workers' compensation*", "Yaptırmama seçeneği yok"] },
          sag: { ikon: "🎛️", baslik: "İsteğe bağlı sigorta", maddeler: ["Sahibi kararlaştırır", "Örnek: hırsızlık ya da ek sigorta", "Risk toleransına bağlı"] },
          oyun: [
            { metin: "Çalışanlar iş kazası geçirirse tazminatı karşılayan *workers' compensation*.", cevap: "sol", neden: "CED'de zorunlu sigorta örneğidir." },
            { metin: "Dükkânı hırsızlığa karşı ek olarak sigortalatmak.", cevap: "sag", neden: "Çoğu sigorta isteğe bağlıdır." },
            { metin: "Riskten hiç hoşlanmayan işletme sahibi, tüm demirbaşları ek poliçeyle güvenceye alıyor.", cevap: "sag", neden: "Bu karar risk toleransına bağlı, isteğe bağlıdır." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Başlangıç maliyetleri: tek seferlik harcamalar (hukuki, kuruluş, ruhsat, bazen ekipman) ve ilk giderler (kira, araştırma-geliştirme, pazarlama, sigorta, ilk stok).",
            "İlk giderler işletme çalışmaya başlayınca sürekli gider olur.",
            "Tekrar eden maliyetler doğrudan ya da dolaylıdır: doğrudan belirli ürün/hizmete bağlı, dolaylı (*operating expenses*) işi yürütmenin maliyeti.",
            "COGS (mal üretenin doğrudan maliyeti): ham madde, üretim malzemesi, üretim ücretleri, tesis maliyeti. Hizmette karşılığı *cost of sales*.",
            "Sabit gider üretimle değişmez; değişken gider üretim arttıkça artar. Toplam maliyet = sabit + değişken.",
            "Doğrudan/dolaylı ile sabit/değişken ayrı eksenlerdir; fabrika kirası doğrudan ve sabittir.",
            "Operating expenses genellikle sabittir: ofis kirası, ofis ve satış maaşları, pazarlama, malzeme, fatura, bakım, sigorta.",
            "Sigorta kaza, yaralanma ve mal hasarı kayıplarına karşı korur; bazıları zorunlu (*workers' compensation*), çoğu isteğe bağlıdır.",
            "Ne kadar sigorta yaptırılacağı riske katlanma isteğine bağlıdır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir tişört atölyesinin üretim tesisi için ödediği aylık kira hangisi gibi sınıflanır?",
      opts: ["Dolaylı maliyet, çünkü kira bir ofis gideridir", "Doğrudan maliyet (COGS) ve sabit gider", "Doğrudan maliyet ve değişken gider", "Başlangıç maliyeti, çünkü kira tek seferliktir"],
      a: 1,
      why: "Üretim tesisinin işletme maliyeti COGS içindedir (doğrudan) ve üretim miktarıyla değişmediği için sabittir. C en çekici yanlış: doğrudan maliyetin değişken olması gerekmez." },
    { q: "Bir kafe açacak olan Ayşe'nin aşağıdaki harcamalarından hangisi tek seferlik harcama sayılır?",
      opts: ["Kafenin aylık kirası", "Şirketin kuruluşu için ödenen hukuki ve ruhsat ücretleri", "Her ay satın alınan kahve çekirdeği", "Aylık sosyal medya reklamı"],
      a: 1,
      why: "Hukuki, kuruluş ve ruhsat ücretleri tek seferlik harcamalardır. A en çekici yanlış: kira ilk gider olarak başlar ama işletme çalışmaya başlayınca sürekli gider olur." },
    { q: "Tabloya göre atölye ayda 300 ürün üretirse toplam maliyeti kaç TL olur?",
      fig: { type: "table", caption: "Atölye giderleri", head: ["Gider", "Tutar", "Türü"], rows: [["Kira", "6.000 TL / ay", "Sabit"], ["Malzeme", "20 TL / ürün", "Değişken"]] },
      opts: ["6.000 TL", "6.020 TL", "12.000 TL", "18.000 TL"],
      a: 2,
      why: "Değişken: 300 × 20 = 6.000 TL; sabit 6.000 TL; toplam 12.000 TL. A en çekici yanlış: yalnızca sabit gideri, B ise tek ürünün malzemesini ekler; ikisi de değişken gideri hesaba katmaz." },
    { q: "Müşteri evlerine giderek bilgisayar tamiri yapan bir hizmet işletmesinde teknisyenin müşteriye gidiş yol gideri hangisidir?",
      opts: ["Satılan malın maliyeti (COGS)", "Operating expense (dolaylı maliyet) olan ofis gideri", "Cost of sales (hizmetin doğrudan maliyeti)", "Başlangıç maliyeti"],
      a: 2,
      why: "Hizmet işletmelerinin doğrudan maliyetleri *cost of sales*'tir ve seyahat gideri bu kapsamdadır. A en çekici yanlış: COGS terimi mal üreten işletmeler için kullanılır." },
    { q: "Ali bir bisiklet atölyesi açıyor. İşçi tazminatı sigortasının (*workers' compensation*) zorunlu olduğunu ve hırsızlık sigortasının isteğe bağlı olduğunu öğreniyor. Hangisi doğrudur?",
      opts: ["Ne kadar sigorta yaptıracağı, işletme sahibinin riske katlanma isteğine bağlıdır; zorunlu olanlar hariç", "Bütün sigortalar zorunludur", "Sigorta işletmeye yalnızca gider yükler, kayıplardan korumaz", "İsteğe bağlı sigortalar işletmelerin gider listesinde yer almaz"],
      a: 0,
      why: "Bazı sigortalar zorunludur, çoğu isteğe bağlıdır; ne kadarının yaptırılacağı risk toleransına bağlıdır. C en çekici yanlış: sigorta tam da kaza, yaralanma ve mal hasarı kayıplarından korumak içindir." }
  ]
};
