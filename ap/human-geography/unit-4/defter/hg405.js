/* Kitora not defteri · hg405 · 4.5 Siyasi Sınırların İşlevi
   Kaynak: AP HuG CED Topic 4.5 (IMP-4.B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg405",
  amac: "Bu konu sınırların ne işe yaradığını anlatıyor: nasıl tanımlanır, çizilir, işaretlenir ve yönetilir; neden tartışılır. Ayrıca deniz sınırlarını düzenleyen BM Deniz Hukuku Sözleşmesi'ni (karasuları, 200 millik MEB) öğreneceksin.",
  bolumler: [
    {
      baslik: "Sınırın dört adımı",
      kisa: "Sınır önce tanımlanır, sonra haritaya çizilir, arazide işaretlenir ve yönetilir.",
      bloklar: [
        { tip: "adimlar", baslik: "Bir sınırın hayatı", adimlar: [
            { baslik: "*Define* (tanımlamak)", metin: "Anlaşma metni sınırı sözle tarif eder: \"nehrin ortasından geçer\"." },
            { baslik: "*Delimit* (haritaya çizmek)", metin: "Haritacılar tarifi haritada çizgiye döker." },
            { baslik: "*Demarcate* (arazide işaretlemek)", metin: "Sınır taşı, çit, direk ya da duvarla arazide belirlenir." },
            { baslik: "*Administer* (yönetmek)", metin: "Gümrük, pasaport ve güvenlik denetimiyle sınır işletilir." }
          ] },
        { tip: "not", metin: "Bütün bu adımlar devletin ==egemenlik sınırını== belirlemek içindir. Yine de sınırlar çoğu zaman *contested* (tartışmalı) olur: iki taraf çizginin nereden geçtiği ya da kime ait olduğu konusunda anlaşamayabilir." },
        { tip: "tuzak", metin: "Üç adım birbirine benzer görünür ama farklı işler yapar.", yanlis: "*Delimit* ile *demarcate* aynı şeydir.", dogru: "*Delimit* sınırı haritada çizmektir; ==*demarcate* ise arazide fiziksel olarak işaretlemektir.== Bir sınır çizilmiş ama işaretlenmemiş olabilir." }
      ]
    },
    {
      baslik: "Sınırlar neye uyar?",
      kisa: "Sınırlar çoğu kez kültürel, ulusal ya da ekonomik bölünmeleri izler; bazen politikayla çizilir.",
      bloklar: [
        { tip: "tablo", baslik: "Bölünmeyi izleyen sınırlar", head: ["Bölünme", "Sınır örneği"], rows: [
            ["Kültürel (din, dil)", "Hindistan–Pakistan"],
            ["Ulusal (ulus kimliği)", "Çekya–Slovakya (1993)"],
            ["Ekonomik (gelir farkı)", "ABD–Meksika"],
            ["Politika ya da anlaşma", "Berlin Konferansı'nın Afrika sınırları; Kore'deki DMZ"]
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🛡️", terim: "Demilitarized zone (DMZ)", tr: "askersizleştirilmiş bölge", tanim: "İki taraf arasında silahlı kuvvet bulundurmanın yasaklandığı tampon şerit. Politikayla oluşur, doğal ya da kültürel bir bölünmeyi izlemez.", ornek: "Güney Kore ile Kuzey Kore arasındaki yaklaşık 4 km genişliğindeki şerit." },
            { ikon: "🗺️", terim: "Berlin Conference", tr: "Berlin Konferansı (1884–85)", tanim: "Avrupa devletlerinin Afrika'yı bölüşme kurallarını koyduğu toplantı. Sınırlar yerel halkın değil, toplantıdaki devletlerin çıkarına göre çizildi.", ornek: "Afrika'daki birçok düz çizgi sınırın kökeni." }
          ] }
      ]
    },
    {
      baslik: "Sınırlar: köprü mü, bariyer mi?",
      kisa: "Sınırlar etkileşimi teşvik edebilir ya da engelleyebilir; kaynaklar yüzünden anlaşmazlık çıkarır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌉", baslik: "Etkileşimi *teşvik eden* sınır", maddeler: ["Açık, işbirliğine dayalı sınır", "Ticaret, turizm ve insan dolaşımı artar"] },
          sag: { ikon: "🚧", baslik: "Etkileşimi *engelleyen* sınır", maddeler: ["Kapalı ya da gergin sınır", "Geçişler azalır, ayrışma artar"] },
          oyun: [
            { metin: "Schengen alanı üyeleri arasında genelde sınır kontrolü yapılmaz.", cevap: "sol", neden: "Geçiş serbest: etkileşim artar." },
            { metin: "Kuzey ve Güney Kore arasındaki askersizleştirilmiş bölge.", cevap: "sag", neden: "Geçişi neredeyse tamamen kapatır." },
            { metin: "Türkiye ile AB arasındaki gümrük birliği, sanayi ürünlerinde ticareti kolaylaştırır.", cevap: "sol", neden: "Ticaret engelleri azalıyor." },
            { metin: "Sınırın iki yanına duvar ve dikenli tel çekilip geçişler durduruluyor.", cevap: "sag", neden: "Etkileşimi engelliyor." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🏳️", baslik: "Kimlik", metin: "Sınırlar \"biz\" ve \"onlar\" duygusunu, ulusal ve bölgesel kimliği güçlendirir." },
            { ikon: "💧", baslik: "Su", metin: "Fırat ve Dicle Türkiye, Suriye ve Irak'tan geçer; suyun paylaşımı üç ülke arasında görüşme konusudur." },
            { ikon: "⛽", baslik: "Enerji", metin: "Deniz yatağındaki petrol ve doğal gaz, sınırı belirsiz yerlerde anlaşmazlık konusu olabilir." },
            { ikon: "🐟", baslik: "Balıkçılık", metin: "Balık stokları sınır tanımaz; avlanma hakkı kıyı sularının kime ait olduğuna bağlıdır." }
          ] }
      ]
    },
    {
      baslik: "Deniz sınırları: BM Deniz Hukuku Sözleşmesi",
      kisa: "Sözleşme (UNCLOS) denizi kıyıdan uzaklığa göre bölgelere ayırır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏖️", terim: "Territorial sea", tr: "karasuları", tanim: "Kıyıdan 12 deniz miline kadar. Kıyı devleti burada egemendir; yabancı gemilerin yalnızca zararsız geçiş hakkı vardır.", ornek: "Bir kıyı kasabasının önündeki deniz." },
            { ikon: "🛢️", terim: "Exclusive economic zone (EEZ)", tr: "münhasır ekonomik bölge (MEB)", tanim: "Kıyıdan 200 deniz miline kadar. Devletin balık, petrol ve doğal gaz üzerinde egemen hakkı vardır; yabancı gemi ve uçaklar serbestçe geçer.", ornek: "Açık denizde petrol platformu kuran kıyı devleti." },
            { ikon: "🌊", terim: "International waters", tr: "uluslararası sular (açık deniz)", tanim: "200 millin ötesi. Hiçbir devletin egemenliği altında değildir; herkese açıktır.", ornek: "Okyanus ortasındaki geçiş yolları." }
          ] },
        { tip: "grafik", baslik: "Kıyıdan açık denize (ölçeksiz şema)", xlabel: "Kıyıdan uzaklık", ylabel: "", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "kıyı" }, { v: 2.6, label: "12 mil" }, { v: 8, label: "200 mil" }],
          ogeler: [
            { id: "kara", tip: "alan", renk: 1, noktalar: [[0, 1], [1, 1], [1, 8], [0, 8]] },
            { id: "ts", tip: "alan", renk: 0, noktalar: [[1, 1], [1, 1], [1, 8], [1, 8]] },
            { id: "eez", tip: "alan", renk: 2, noktalar: [[2.6, 1], [2.6, 1], [2.6, 8], [2.6, 8]] },
            { id: "ac", tip: "alan", renk: 3, noktalar: [[8, 1], [8, 1], [8, 8], [8, 8]] },
            { id: "yk", tip: "yazi", x: 0.5, y: 4.5, metin: "kara" },
            { id: "yt", tip: "yazi", x: 1.8, y: 4.5, metin: "12 mil", gizli: true },
            { id: "ye", tip: "yazi", x: 5.3, y: 4.5, metin: "MEB · 200 mil", gizli: true },
            { id: "ya", tip: "yazi", x: 9.0, y: 4.5, metin: "açık deniz", gizli: true }
          ],
          durumlar: [
            { metin: "Kıyı çizgisinden açık denize doğru gidiyoruz. Bölgeler bu çizgiden ölçülen uzaklığa göre belirlenir." },
            { metin: "==Karasuları==: kıyıdan 12 deniz miline kadar. Kıyı devleti burada egemendir (hava sahası ve deniz yatağı dahil); yabancı gemiler zararsız geçebilir.", set: { ts: { noktalar: [[1, 1], [2.6, 1], [2.6, 8], [1, 8]] } }, goster: ["yt"] },
            { metin: "==MEB==: 12 mil ile 200 mil arası. Kıyı devleti balık, petrol ve gaz kaynaklarında egemen hakka sahiptir; seyrüsefer ve uçuş serbesttir.", set: { eez: { noktalar: [[2.6, 1], [8, 1], [8, 8], [2.6, 8]] } }, goster: ["ye"] },
            { metin: "==Açık deniz==: 200 milin ötesi. Hiçbir devletin değil; herkesin serbestçe kullandığı uluslararası sulardır.", set: { ac: { noktalar: [[8, 1], [10, 1], [10, 8], [8, 8]] } }, goster: ["ya"] }
          ] },
        { tip: "not", metin: "Karasuları ile MEB arasında 24 mile kadar uzanan bitişik bölge de vardır (gümrük, göç, sağlık denetimi); sınavda asıl ayrım 12 ve 200 mildir. Karasuları en fazla 12 mil olabilir, devletler daha dar da seçebilir: Türkiye Karadeniz'de ve Akdeniz'de 12, Ege'de 6 mil uygular. ABD ve Türkiye gibi birkaç ülke sözleşmeye taraf değildir." }
      ]
    },
    {
      baslik: "Deniz mili ve çakışan MEB hesapları",
      kisa: "Komşuların MEB'leri çakışırsa pay görüşmeyle belirlenir.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 12, sonek: " mil", etiket: "karasuları ≈ 22 km" },
            { deger: 200, sonek: " mil", etiket: "MEB ≈ 370 km" },
            { deger: 1.852, sonek: " km", etiket: "1 deniz mili" }
          ] },
        { tip: "ornek", baslik: "İki ada ülkesinin MEB'leri çakışıyor", durum: "A ve B ülkelerinin kıyıları arasındaki en kısa deniz mesafesi 300 deniz mili. Her biri 200 millik MEB talep ediyor. Çakışma ne kadar?",
          adimlar: ["Toplam talep: 200 + 200 = 400 mil.", "Aradaki mesafe: 300 mil.", "Çakışma: 400 − 300 = 100 mil."],
          sonuc: "MEB'ler ==100 mil çakışır==. Bu bölge iki ülke arasında görüşmeyle, çoğu kez orta hat esas alınarak paylaşılır; anlaşılamazsa uluslararası yargıya gidilebilir." },
        { tip: "tuzak", metin: "MEB ile karasuları aynı şey değildir.", yanlis: "MEB, karasuları gibi tam egemenliktir; yabancı gemiyi geçirmeyebilir.", dogru: "MEB'de yalnızca ==kaynaklar üzerinde egemen hak== vardır. Yabancı gemi ve uçaklar serbestçe geçer; tam egemenlik yalnızca karasularında geçerlidir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Sınır dört adımda oluşur: *define* (tanımla), *delimit* (haritaya çiz), *demarcate* (arazide işaretle), *administer* (yönet).",
            "Sınırlar egemenliğin sınırını belirler ama sık sık tartışılır (*contested*).",
            "Sınırlar kültürel, ulusal ya da ekonomik bölünmeleri izler; DMZ ve Berlin Konferansı gibi politikayla da çizilir.",
            "Sınırlar etkileşimi teşvik edebilir (Schengen) ya da engelleyebilir (DMZ, duvar); kimliği, suyu, enerjiyi ve balığı etkiler.",
            "UNCLOS: karasuları 12 mil (egemenlik, zararsız geçiş), MEB 200 mil (kaynaklarda egemen hak), ötesi açık deniz.",
            "1 deniz mili = 1,852 km; 200 mil ≈ 370 km.",
            "Komşu MEB'ler çakışırsa: toplam talep − mesafe = çakışma; pay görüşmeyle çözülür."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Haritacılar iki ülke arasındaki sınır çizgisini haritaya işledi; ardından arazide sınır taşları dikildi. Bu iki adım sırasıyla hangi terimlerle anılır?",
      opts: ["*Define*, *administer*", "*Delimit*, *demarcate*", "*Demarcate*, *delimit*", "*Administer*, *define*"],
      a: 1,
      why: "Haritaya çizmek *delimit*, arazide işaretlemek *demarcate*'tir. C seçeneği sırayı ve anlamı ters çevirir; bu çok yapılan bir hatadır."
    },
    {
      q: "İki komşu devlet pasaport kontrolünü kaldırıp ortak bir gümrük bölgesi kuruyor. Bu değişiklik sınırın hangi işlevini güçlendirir?",
      opts: ["Etkileşimi azaltan bir bariyer işlevini", "Etkileşimi artıran bir köprü işlevini", "Bir *relict boundary* oluşmasını", "Bir *geometric boundary* oluşmasını"],
      a: 1,
      why: "Kontrol kalkınca ticaret ve insan dolaşımı artar: sınır etkileşimi teşvik eder. *Relict* ve *geometric* sınırın zamanı ve şekliyle ilgilidir, işleviyle değil."
    },
    {
      q: "Tablo bir kıyı devletinin deniz bölgelerini gösteriyor. Yabancı bir balıkçı gemisi bu devletin kıyısından 150 deniz mili açıkta avlanmak istiyor. Hangisi doğrudur?",
      fig: { type: "table", head: ["Bölge", "Kıyıdan uzaklık"], rows: [["Karasuları", "12 deniz mili"], ["MEB", "200 deniz mili"], ["Açık deniz", "200 milin ötesi"]] },
      opts: ["Bölge açık denizdir; herkes serbestçe avlanabilir.", "Bölge karasularıdır; kıyı devleti geçişi tamamen yasaklayabilir.", "Bölge MEB'dir; kıyı devleti balık kaynakları üzerinde egemen hakka sahiptir, seyrüsefer ise serbesttir.", "Bölge hiçbir kurala tabi değildir."],
      a: 2,
      why: "150 mil, 12 ile 200 mil arasında kalır: MEB. Kıyı devleti kaynaklarda egemen hakka sahiptir, o yüzden yabancı gemi izinsiz avlanamaz. A seçeneği çekicidir ama 200 milin ötesini anlatır."
    },
    {
      q: "İki ada ülkesinin kıyıları arasındaki en kısa mesafe 260 deniz mili. Her biri 200 millik MEB talep ediyor. MEB'lerin çakıştığı alanın genişliği nedir?",
      opts: ["60 deniz mili", "200 deniz mili", "400 deniz mili", "140 deniz mili"],
      a: 3,
      why: "Toplam talep 200 + 200 = 400 mil; mesafe 260 mil; çakışma 400 − 260 = 140 mil. 60, 260 − 200 işleminden gelen hatalı bir sonuçtur."
    },
    {
      q: "Güney Kore ile Kuzey Kore arasındaki askersizleştirilmiş bölge (DMZ) hangi tanıma en iyi uyar?",
      opts: ["Politikayla oluşmuş, silahlı güçleri sınırlayan ve etkileşimi azaltan tampon bölge", "Dil çizgisini izleyen *consequent* sınır", "Sömürge döneminden kalma *relict* sınır", "Ticareti artıran serbest dolaşım alanı"],
      a: 0,
      why: "DMZ bir anlaşma ve politikanın ürünüdür; silahlı kuvvetleri sınırlayıp geçişi azaltır. Kültürel çizgiyi izlemediği için *consequent* değildir."
    }
  ]
};
