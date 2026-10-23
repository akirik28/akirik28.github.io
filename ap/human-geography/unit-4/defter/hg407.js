/* Kitpath not defteri · hg407 · 4.7 Yönetim Biçimleri
   Kaynak: AP HuG CED Topic 4.7 (IMP-4.C, IMP-4.D). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg407",
  amac: "Bu konu devletlerin yönetim biçimlerini anlatıyor: gücün merkezde toplandığı *unitary state* ve gücün merkez ile bölgeler arasında paylaşıldığı *federal state*. İkisini ayırmayı ve mekâna etkilerini öğreneceksin.",
  bolumler: [
    {
      baslik: "*Unitary state*: tek merkez",
      kisa: "Üniter devlette güç merkezdedir; bölgeler yetkiyi merkezden alır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏛️", terim: "Unitary state", tr: "üniter devlet", tanim: "Gücün merkezi hükümette toplandığı, yönetimin yukarıdan aşağıya (*top-down*) işlediği devlet. Bölgesel birimler yetkilerini merkezden alır ve merkez bunları değiştirebilir.", ornek: "Fransa, Japonya ve Türkiye üniter devlettir." }
          ] },
        { tip: "not", metin: "Türkiye'de il valilerini merkezi hükümet atar; belediye başkanlarını ise halk seçer. Yerel yönetimlerin yetkilerini kanun belirler. Bu, üniter yapının tipik özelliğidir: yetki merkezden gelir." }
      ]
    },
    {
      baslik: "*Federal state*: paylaşılan güç",
      kisa: "Federal devlette yetki, anayasayla merkez ve bölgeler arasında paylaşılır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Federal state", tr: "federal devlet", tanim: "Yetkinin anayasayla merkezi hükümet ile bölgesel birimler (eyalet gibi) arasında paylaştırıldığı devlet. Bölgelerin kendi meclisi ve hükümeti vardır; yetkileri merkez tarafından tek taraflı geri alınamaz.", ornek: "ABD, Almanya, Hindistan ve Nijerya federaldir." }
          ] },
        { tip: "not", metin: "ABD'de eğitim ve polis hizmetleri büyük ölçüde eyalet ve yerel yönetimlerin elindedir; savunma ve dış politika ise merkezdedir. Güç dağınık ve yerel temelli olduğu için federal devlete \"dağıtılmış güç merkezleri\" denir." }
      ]
    },
    {
      baslik: "Güç haritada nerede?",
      kisa: "Üniter devlette güç tek merkezdedir; federal devlette birden çok merkezdedir.",
      bloklar: [
        { tip: "grafik", baslik: "Güç nerede toplanıyor? (şema)", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "c", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "başkent" },
            { id: "r1", tip: "nokta", renk: 1, x: 5, y: 9 },
            { id: "r2", tip: "nokta", renk: 1, x: 8.4, y: 7 },
            { id: "r3", tip: "nokta", renk: 1, x: 8.4, y: 3 },
            { id: "r4", tip: "nokta", renk: 1, x: 5, y: 1 },
            { id: "r5", tip: "nokta", renk: 1, x: 1.6, y: 3 },
            { id: "r6", tip: "nokta", renk: 1, x: 1.6, y: 7 },
            { id: "o1", tip: "ok", renk: 0, from: [5,5.8], to: [5,8.2], gizli: true },
            { id: "o2", tip: "ok", renk: 0, from: [5.68,5.4], to: [7.72,6.6], gizli: true },
            { id: "o3", tip: "ok", renk: 0, from: [5.68,4.6], to: [7.72,3.4], gizli: true },
            { id: "o4", tip: "ok", renk: 0, from: [5,4.2], to: [5,1.8], gizli: true },
            { id: "o5", tip: "ok", renk: 0, from: [4.32,4.6], to: [2.28,3.4], gizli: true },
            { id: "o6", tip: "ok", renk: 0, from: [4.32,5.4], to: [2.28,6.6], gizli: true },
            { id: "s1", tip: "alan", renk: 3, noktalar: [[4.45,8.45],[5.55,8.45],[5.55,9.55],[4.45,9.55]], gizli: true },
            { id: "s2", tip: "alan", renk: 3, noktalar: [[7.8500000000000005,6.45],[8.950000000000001,6.45],[8.950000000000001,7.55],[7.8500000000000005,7.55]], gizli: true },
            { id: "s3", tip: "alan", renk: 3, noktalar: [[7.8500000000000005,2.45],[8.950000000000001,2.45],[8.950000000000001,3.55],[7.8500000000000005,3.55]], gizli: true },
            { id: "s4", tip: "alan", renk: 3, noktalar: [[4.45,0.44999999999999996],[5.55,0.44999999999999996],[5.55,1.55],[4.45,1.55]], gizli: true },
            { id: "s5", tip: "alan", renk: 3, noktalar: [[1.05,2.45],[2.1500000000000004,2.45],[2.1500000000000004,3.55],[1.05,3.55]], gizli: true },
            { id: "s6", tip: "alan", renk: 3, noktalar: [[1.05,6.45],[2.1500000000000004,6.45],[2.1500000000000004,7.55],[1.05,7.55]], gizli: true },
            { id: "p1", tip: "ok", renk: 2, from: [5,8.2], to: [5,5.8], gizli: true },
            { id: "p2", tip: "ok", renk: 2, from: [7.72,6.6], to: [5.68,5.4], gizli: true },
            { id: "p3", tip: "ok", renk: 2, from: [7.72,3.4], to: [5.68,4.6], gizli: true },
            { id: "p4", tip: "ok", renk: 2, from: [5,1.8], to: [5,4.2], gizli: true },
            { id: "p5", tip: "ok", renk: 2, from: [2.28,3.4], to: [4.32,4.6], gizli: true },
            { id: "p6", tip: "ok", renk: 2, from: [2.28,6.6], to: [4.32,5.4], gizli: true },
            { id: "y1", tip: "yazi", x: 5, y: 0.2, metin: "Üniter: güç merkezden bölgelere iner", gizli: true },
            { id: "y2", tip: "yazi", x: 5, y: 0.2, metin: "Federal: yetki merkez ve bölgeler arasında paylaşılır", gizli: true },
            { id: "y3", tip: "yazi", x: 5, y: 0.2, metin: "Federal: bölgeler merkezde de söz sahibi", gizli: true }
          ],
          durumlar: [
            { metin: "Bir ülke: başkent (mavi) ve altı bölge (yeşil). Gücün haritada nasıl dağıldığına bakacağız." },
            { metin: "==Üniter devlet==: kararlar başkentten bölgelere iner. Bölgeler yetkilerini merkezden alır; merkez bunları değiştirebilir.", goster: [...["o1","o2","o3","o4","o5","o6"], "y1"] },
            { metin: "==Federal devlet==: her bölgenin kendi meclisi ve hükümeti var (mor kutular). Yetkileri anayasayla güvence altındadır.", gizle: [...["o1","o2","o3","o4","o5","o6"], "y1"], goster: [...["s1","s2","s3","s4","s5","s6"], "y2"] },
            { metin: "Federal yapıda bölgeler merkezin kararlarına da katılır (örneğin ikinci mecliste temsilciler gönderirler). Güç çok merkezlidir.", gizle: ["y2"], goster: [...["p1","p2","p3","p4","p5","p6"], "y3"] }
          ] },
        { tip: "tuzak", metin: "Yönetim biçimi gücün coğrafi dağılımını anlatır; rejimin türünü değil.", yanlis: "Federal devletler demokratik, üniter devletler baskıcıdır.", dogru: "Hem üniter hem federal devletler demokratik ya da otoriter olabilir. Ayrım, ==yetkinin merkezde mi yoksa paylaşılmış mı olduğudur.==" }
      ]
    },
    {
      baslik: "Üniter ve federal: karşılaştırma",
      kisa: "Üniter yukarıdan aşağı, federal ise yerel temelli ve dağınık güç merkezlidir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏛️", baslik: "*Unitary*", maddeler: ["Güç merkezde toplanır; karar yukarıdan aşağı iner", "Bölgesel yönetimler yetkiyi merkezden alır"] },
          sag: { ikon: "🧩", baslik: "*Federal*", maddeler: ["Güç merkez ve bölgeler arasında dağılmıştır", "Bölgelerin kendi yasama ve yürütmesi vardır"] },
          oyun: [
            { metin: "Valiyi başkentteki hükümet atar ve görevden alabilir.", cevap: "sol", neden: "Yetki merkezden: üniter." },
            { metin: "Eyaletin kendi anayasası, meclisi ve vergi yetkisi var.", cevap: "sag", neden: "Bölgenin kendi gücü: federal." },
            { metin: "Okul müfredatını bütün ülke için başkent belirliyor.", cevap: "sol", neden: "Merkezî karar: üniter." },
            { metin: "Bölgesel hükümetin yetkileri anayasayla güvence altında; merkez tek taraflı geri alamaz.", cevap: "sag", neden: "Anayasal paylaşım: federal." }
          ] },
        { tip: "ornek", baslik: "Hangi biçim? Üç soruyla bul", durum: "Z ülkesinde eyalet hükümetleri kendi okul programını belirliyor; merkez ise savunma ve para politikasını yönetiyor. Eyaletlerin yetkileri anayasada yazılı. Z hangi yönetim biçimindedir?",
          adimlar: ["Güç tek merkezde mi? Hayır, paylaşılmış.", "Bölgelerin yetkisi nereden geliyor? Anayasadan.", "Merkez bunu tek taraflı geri alabilir mi? Hayır."],
          sonuc: "Yetki anayasayla paylaşılmış ve bölgelerin kendi gücü var: ==*federal state*==. Güç tek merkezde olsaydı ve bölgeler yetkiyi merkezden alsaydı *unitary state* derdik." },
        { tip: "tablo", baslik: "Bir bakışta", head: ["Özellik", "Üniter", "Federal"], rows: [
            ["Güç", "Merkezde toplanır", "Merkez ve bölgeler arasında paylaşılır"],
            ["Bölgelerin yetkisi", "Merkezden gelir, değiştirilebilir", "Anayasayla güvence altında"],
            ["Yönetim akışı", "Yukarıdan aşağı", "Yerel temelli, dağınık"],
            ["Örnek", "Fransa, Japonya, Türkiye", "ABD, Almanya, Hindistan, Nijerya"]
          ] }
      ]
    },
    {
      baslik: "Devletler neden birini seçer?",
      kisa: "Geniş ve çeşitli devletler sıkça federal olur; ama istisnalar vardır.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🌏", baslik: "Geniş ülke", metin: "Uzak bölgeleri tek merkezden yönetmek zordur; Hindistan ve Nijerya federaldir." },
            { ikon: "🗣️", baslik: "Çok dil ve kimlik", metin: "Farklı topluluklara yerel söz hakkı vermek birliği korumaya yardım eder; Belçika 1993'te federal oldu." },
            { ikon: "🧱", baslik: "Küçük ve türdeş ülke", metin: "Tek merkez yeterli olur; Japonya üniterdir." },
            { ikon: "❗", baslik: "İstisna", metin: "Çin büyüktür ama üniterdir." }
          ] },
        { tip: "not", metin: "Üniter devlette de yetki devri olabilir. Birleşik Krallık üniter bir devlettir; yine de İskoçya, Galler ve Kuzey İrlanda'ya yetki devretmiştir (*devolution*). Fark, bu yetkilerin merkez tarafından geri alınabilmesidir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Unitary state*: güç merkezde, yönetim yukarıdan aşağı; bölgeler yetkiyi merkezden alır (Fransa, Japonya, Türkiye).",
            "*Federal state*: yetki anayasayla merkez ve bölgeler arasında paylaşılır; yerel temelli, dağınık güç merkezleri vardır (ABD, Almanya, Hindistan, Nijerya).",
            "Türkiye'de valileri merkez atar, belediye başkanlarını halk seçer: üniter yapı.",
            "Federalde bölgelerin yetkisi anayasayla güvencededir; üniterde merkez geri alabilir.",
            "Geniş ve çeşitli devletler sıkça federal olur; Çin büyük ama üniterdir.",
            "Yönetim biçimi rejimin demokratik olup olmadığını değil, gücün coğrafi dağılımını anlatır.",
            "Üniter devlette de yetki devri olabilir (Birleşik Krallık)."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir ülkede il valilerini başkentteki hükümet atıyor ve görevden alabiliyor; yerel yönetimlerin yetkilerini merkezî kanunlar belirliyor. Bu ülke hangi yönetim biçimine sahiptir?",
      opts: ["*Federal state*", "*Unitary state*", "*Multistate nation*", "*Stateless nation*"],
      a: 1,
      why: "Yetki merkezden gelip yukarıdan aşağı işliyor: *unitary state*. *Federal* olsaydı bölgelerin yetkileri anayasayla güvence altında olurdu."
    },
    {
      q: "Bir devletin eyaletlerinin kendi anayasası, meclisi ve vergi yetkisi var; bu yetkileri merkezi hükümet tek taraflı geri alamıyor. Bu yapı hangisidir?",
      opts: ["*Unitary state*", "*Neocolonialism*", "*Federal state*", "*Choke point*"],
      a: 2,
      why: "Anayasayla paylaşılmış, bölgelerin kendi gücü olan yapı: *federal state*. Üniter devlette merkez bölgesel yetkileri geri alabilir."
    },
    {
      q: "Tabloya göre hangi çıkarım doğrudur?",
      fig: { type: "table", head: ["Ülke", "Yüzölçümü", "Dil ve kimlik çeşitliliği", "Yönetim"], rows: [["P", "Küçük", "Düşük", "Üniter"], ["Q", "Çok geniş", "Çok yüksek", "Federal"], ["R", "Çok geniş", "Yüksek", "Üniter"]] },
      opts: ["Q'nun federal olması geniş ve çeşitli devletlerde sık görülen bir eğilime uyar.", "R'nin üniter olması, geniş devletlerin asla federal olmadığını gösterir.", "P'nin üniter olması, küçük devletlerin federal olamayacağını kanıtlar.", "Q ve R aynı yönetim biçimindedir."],
      a: 0,
      why: "Geniş ve çeşitli devletler federalliğe eğilimlidir; bu bir eğilimdir, kural değildir. B ve C seçenekleri \"asla\" ve \"kanıtlar\" diyerek istisnaları yok sayar; R ise istisna olabilir (Çin gibi)."
    },
    {
      q: "Birleşik Krallık üniter bir devlet olmasına rağmen İskoçya'nın kendi parlamentosu vardır. Bunun federal yapıdan farkı nedir?",
      opts: ["İskoçya'nın yetkileri anayasayla güvence altındadır ve geri alınamaz.", "Yetkiler merkez tarafından devredilmiştir ve merkez bunları geri alabilir.", "İskoçya bağımsız bir devlettir.", "Birleşik Krallık'ın merkezi hükümeti yoktur."],
      a: 1,
      why: "Üniter devlette devredilen yetki merkeze bağlıdır ve geri alınabilir. A seçeneği federal sistemi tarif eder."
    },
    {
      q: "Hangisi yönetim biçimi ile rejimin türü arasındaki ilişkiyi doğru anlatır?",
      opts: ["Federal devletler her zaman demokratiktir.", "Üniter devletler her zaman otoriterdir.", "Yönetim biçimi yetkinin coğrafi dağılımını gösterir; rejimin türünü belirlemez.", "Federal devletlerin merkezi hükümeti bulunmaz."],
      a: 2,
      why: "Üniter ya da federal olmak gücün merkezde mi paylaşılmış mı olduğunu anlatır. İkisi de demokratik ya da otoriter olabilir."
    }
  ]
};
