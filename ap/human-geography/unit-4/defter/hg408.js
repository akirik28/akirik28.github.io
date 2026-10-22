/* Kitora not defteri · hg408 · 4.8 Yetki Devrini Doğuran Etkenler
   Kaynak: AP HuG CED Topic 4.8 (SPS-4.A). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg408",
  amac: "Bu konu devletlerin neden parçalanabildiğini ya da yetkisini bölgelere devredebildiğini anlatıyor. *Devolution* kavramını ve onu tetikleyen altı etkeni öğreneceksin: fiziki coğrafya, etnik ayrılıkçılık, etnik temizlik, terörizm, ekonomik ve sosyal sorunlar, *irredentism*.",
  bolumler: [
    {
      baslik: "*Devolution* ve altı etken",
      kisa: "Devolution devletin yetkisinin bölgelere kaymasıdır; altı etken onu tetikler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Devolution", tr: "yetki devri / parçalanma", tanim: "Merkezi hükümetin yetkisinin bölgesel birimlere kayması; uç durumda devletin bölünmesi. Merkezkaç güçler baskın geldiğinde ortaya çıkar.", ornek: "Yugoslavya'nın 1990'larda parçalanması." }
          ] },
        { tip: "tablo", baslik: "Altı etken bir arada", head: ["Etken", "Nasıl yol açar?", "Örnek"], rows: [
            ["Fiziki coğrafya", "Dağ, deniz ya da başka bir devlet gruplar arasına girer", "Pakistan'ın iki parçası (1947–71)"],
            ["Etnik ayrılıkçılık", "Bir grup kendi devletini ya da özerkliğini ister", "Québec, Katalonya"],
            ["Etnik temizlik", "Bir grup şiddetle bölgeden çıkarılır; ayrışma derinleşir", "Bosna-Hersek (1990'lar)"],
            ["Terörizm", "Siviller hedef alınır; devlete güven sarsılır", "İspanya'da ETA, Birleşik Krallık'ta IRA"],
            ["Ekonomik ve sosyal sorunlar", "Bölgeler arası gelir ve hizmet farkı merkeze güveni azaltır", "Flandre–Valonya, İtalya kuzey–güney"],
            ["*Irredentism*", "Komşu bir devlet, kendi halkının yaşadığı toprağı talep eder", "Sudetenland (1938)"]
          ] }
      ]
    },
    {
      baslik: "Fiziki coğrafya: ayrı kalan bölgeler",
      kisa: "Gruplar arasına dağ, deniz ya da başka devlet girerse ayrılık kolaylaşır.",
      bloklar: [
        { tip: "grafik", baslik: "Pakistan örneği (şema)", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "bat", tip: "alan", renk: 0, noktalar: [[0.3, 3.5], [2.2, 3.5], [2.2, 7], [0.3, 7]] },
            { id: "hin", tip: "alan", renk: 1, noktalar: [[2.6, 1.5], [7, 1.5], [7, 8.5], [2.6, 8.5]] },
            { id: "dog", tip: "alan", renk: 2, noktalar: [[7.4, 3.5], [9.6, 3.5], [9.6, 6], [7.4, 6]] },
            { id: "tb", tip: "yazi", x: 1.25, y: 5.2, metin: "Batı" },
            { id: "th", tip: "yazi", x: 4.8, y: 5, metin: "Hindistan" },
            { id: "td", tip: "yazi", x: 8.5, y: 4.7, metin: "Doğu" },
            { id: "ln", tip: "cizgi", renk: 3, kesik: true, from: [1.25, 9.1], to: [8.5, 9.1], gizli: true },
            { id: "km", tip: "yazi", x: 4.9, y: 9.55, metin: "yaklaşık 1.600 km", gizli: true },
            { id: "nd", tip: "yazi", x: 4.8, y: 0.6, metin: "farklı dil · uzaklık · kaynak paylaşımı tartışması", gizli: true },
            { id: "bd", tip: "yazi", x: 8.5, y: 4.2, metin: "Bangladeş (1971)", gizli: true }
          ],
          durumlar: [
            { metin: "1947: Pakistan iki parça olarak kuruldu. Batı ve Doğu Pakistan'ın arasında Hindistan var." },
            { metin: "İki parça arasındaki uzaklık yaklaşık 1.600 km. ==Fiziki ayrılık== merkezden yönetimi zorlaştırıyor.", goster: ["ln", "km"] },
            { metin: "Ortak din vardı ama dil farklıydı: Doğu'da Bengalce konuşuluyordu. Merkez Batı'daydı ve kaynakların paylaşımı Doğu'da şikâyet konusu oldu.", goster: ["nd"] },
            { metin: "1971: Doğu Pakistan ayrılıp bağımsız ==Bangladeş== oldu. Fiziki uzaklık, dil ve eşitsizlik birlikte parçalanmayı hızlandırdı.", gizle: ["ln", "km", "nd", "td"], goster: ["bd"] }
          ] },
        { tip: "not", metin: "Adalar da benzer etki yaratır. Binlerce adadan oluşan Endonezya ve Filipinler gibi devletlerde uzak adalar, merkezden ayrı bir kimlik geliştirebilir. Fiziki coğrafya tek başına parçalanma nedeni değildir ama diğer etkenleri güçlendirir." }
      ]
    },
    {
      baslik: "Etnik ayrılıkçılık ve etnik temizlik",
      kisa: "Ayrılıkçılık bir grubun kendi yönetimini istemesidir; etnik temizlik zorla çıkarmadır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚩", terim: "Ethnic separatism", tr: "etnik ayrılıkçılık", tanim: "Bir etnik grubun merkezi devletten ayrılıp kendi devletini ya da geniş özerklik kurmayı istemesi.", ornek: "Kanada'da Québec, İspanya'da Katalonya ve Bask Bölgesi." },
            { ikon: "⚠️", terim: "Ethnic cleansing", tr: "etnik temizlik", tanim: "Bir etnik grubun bir bölgeden şiddet, tehdit ve zorla göç ettirmeyle sistematik biçimde çıkarılması. Bir insan hakları ihlalidir.", ornek: "1990'larda Bosna-Hersek'te yaşanan savaş." }
          ] },
        { tip: "not", metin: "Yugoslavya 1991–92'den sonra dağıldı. Etnik gerilimler ve savaşlar parçalanmayı hızlandırdı; yerine Slovenya, Hırvatistan, Bosna-Hersek ve Makedonya gibi bağımsız devletler geldi." }
      ]
    },
    {
      baslik: "Terörizm, ekonomik ve sosyal sorunlar",
      kisa: "Şiddet ve eşitsizlik, bölgelerin merkeze güvenini aşındırır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💣", terim: "Terrorism", tr: "terörizm", tanim: "Sivillere yönelik şiddetin siyasi amaçla kullanılması; devletin güvenliğini ve meşruiyetini zayıflatmayı hedefler.", ornek: "İspanya'da ETA ve Birleşik Krallık'ta IRA, kendi bölgelerini ayırmak için şiddete başvurdu." },
            { ikon: "💰", terim: "Economic and social problems", tr: "ekonomik ve sosyal sorunlar", tanim: "Bölgeler arası gelir, iş ve hizmet farkları; bir bölge merkezden fayda görmüyorsa ya da kaynak aktardığını düşünüyorsa uzaklaşma isteği artar.", ornek: "Belçika'da zengin Flandre ile Valonya arasındaki fark." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🗣️", baslik: "Dil hakları", metin: "Bir grubun kendi dilinde eğitim ve hizmet alamaması." },
            { ikon: "🏗️", baslik: "Eşitsiz hizmet", metin: "Yol, okul ve hastanelerin bir bölgede eksik kalması." },
            { ikon: "💼", baslik: "İşsizlik", metin: "Bir bölgenin diğerinden çok daha az fırsat sunması." }
          ] }
      ]
    },
    {
      baslik: "*Irredentism* ve *separatism*",
      kisa: "Ayrılıkçılık içe, irredentizm dışa bakar: ayrılmak ile komşudan toprak istemek farklıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧲", terim: "Irredentism", tr: "toprak kurtarma iddiası", tanim: "Bir devletin, komşu devlette yaşayan kendi halkının toprağını kendi sınırlarına katmak istemesi.", ornek: "Somali'nin Etiyopya'daki Somalilerin yaşadığı Ogaden bölgesine iddiası." }
          ] },
        { tip: "ikili", sol: { ikon: "🏃", baslik: "*Ethnic separatism*", maddeler: ["İçeriden: bir grup kendi devletinden ayrılmak ister", "Hedef: bağımsızlık ya da özerklik"] },
          sag: { ikon: "➡️", baslik: "*Irredentism*", maddeler: ["Dışarıdan: bir devlet komşunun toprağını katmak ister", "Gerekçe: aynı halkın orada yaşaması"] },
          oyun: [
            { metin: "Bir devletin azınlık grubu bağımsız bir devlet kurmak istiyor.", cevap: "sol", neden: "Kendi devletinden ayrılmak: ayrılıkçılık." },
            { metin: "Bir devlet, komşusundaki kendi halkının yaşadığı topraklara hak iddia ediyor.", cevap: "sag", neden: "Komşu toprağı katma isteği: *irredentism*." },
            { metin: "Katalonya'da bağımsızlık yanlısı siyasi hareket.", cevap: "sol", neden: "İç ayrılık isteği." },
            { metin: "Almanya'nın 1938'de Çekoslovakya'daki Almanca konuşulan Sudetenland'ı talep etmesi.", cevap: "sag", neden: "Komşunun toprağı: *irredentism*." }
          ] },
        { tip: "tuzak", metin: "İki kavramın yönü farklı.", yanlis: "*Irredentism*, bir bölgenin bağlı olduğu devletten ayrılmasıdır.", dogru: "Ayrılan taraf *separatism*'dir. *Irredentism*'de bir devlet ==dışarıya doğru== toprak ister: komşunun toprağını kendine katmak." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Devolution* = merkezden bölgelere yetki devri ya da devletin bölünmesi.",
            "Fiziki coğrafya: gruplar arasına dağ, deniz ya da başka devlet girer (Pakistan'ın iki parçası, adalar).",
            "*Ethnic separatism*: grup kendi devletini ya da özerkliğini ister (Québec, Katalonya).",
            "*Ethnic cleansing*: bir grubun şiddetle sistematik biçimde çıkarılması; ayrışmayı derinleştirir (Bosna-Hersek).",
            "Terörizm: siviller hedef alınır, devlete güven sarsılır (ETA, IRA).",
            "Ekonomik ve sosyal sorunlar: bölgeler arası gelir ve hizmet farkı (Flandre–Valonya).",
            "*Irredentism*: bir devletin komşudaki aynı halkın toprağını talep etmesi (Sudetenland). Ayrılıkçılık içe, irredentizm dışa bakar."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "1947'de kurulan bir devletin iki parçası arasında başka bir devlet bulunuyordu ve aralarında yaklaşık 1.600 km vardı. 1971'de parçalardan biri bağımsız oldu. Bu süreçte hangi etken öne çıkıyor?",
      opts: ["Gruplar arasına giren fiziki coğrafya", "*Irredentism*", "Etnik temizlik", "*Supranationalism*"],
      a: 0,
      why: "İki parçanın başka bir devletle ayrılması fiziki coğrafya etkenidir; dil ve eşitsizlik de ona eklendi. *Irredentism* komşudan toprak istemektir, burada böyle bir iddia yok."
    },
    {
      q: "X devleti, komşu Y devletinde çoğunluğu kendi etnik grubundan olan bir bölgeyi \"tarihsel topraklarımız\" diyerek kendine katmak istiyor. Bu davranış hangisidir?",
      opts: ["*Ethnic separatism*", "*Irredentism*", "*Neocolonialism*", "*Reapportionment*"],
      a: 1,
      why: "Komşu devletin toprağını aynı halkın yaşadığı gerekçesiyle talep etmek *irredentism*'dir. *Ethnic separatism* ise bir grubun kendi devletinden ayrılmak istemesidir."
    },
    {
      q: "Tabloya göre kuzey bölgedeki ayrılıkçı desteği en iyi hangi etken açıklar?",
      fig: { type: "table", head: ["Bölge", "Kişi başına gelir (ülke ortalaması = 100)", "Bağımsızlık yanlısı oy"], rows: [["Kuzey", "160", "%38"], ["Güney", "60", "%5"]] },
      opts: ["Etnik temizlik", "Terörizm", "Fiziki coğrafya", "Bölgeler arası ekonomik farklar"],
      a: 3,
      why: "Gelir farkı büyük ve ayrılıkçı destek kuzeyde yüksek: ekonomik ve sosyal sorunlar etkeni. Tabloda şiddet ya da fiziki ayrılığa dair bir veri yok."
    },
    {
      q: "Aşağıdakilerden hangisi etnik temizliğin tanımına en uygundur?",
      opts: ["Bir etnik grubun bir bölgeden şiddet ve zorla göçle sistematik biçimde çıkarılması", "Bir grubun merkezden özerklik istemesi", "Bir devletin komşu devletin topraklarını talep etmesi", "Bölgeler arasındaki gelir farkı"],
      a: 0,
      why: "Etnik temizlik şiddetle ve zorla çıkarmaktır. B ayrılıkçılığı, C *irredentism*'i, D ise ekonomik sorunu anlatır."
    },
    {
      q: "Bir ayrılıkçı örgüt, sivil hedeflere saldırarak devletin güvenliğini ve meşruiyetini zayıflatmayı amaçlıyor. Bu durum hangi devolution etkenine girer?",
      opts: ["Fiziki coğrafya", "*Irredentism*", "Terörizm", "Ekonomik ve sosyal sorunlar"],
      a: 2,
      why: "Sivillere yönelik şiddetin siyasi amaçla kullanılması terörizmdir ve devlete güveni sarsarak parçalanmayı hızlandırabilir. *Irredentism* dış devletin toprak iddiasıdır."
    }
  ]
};
