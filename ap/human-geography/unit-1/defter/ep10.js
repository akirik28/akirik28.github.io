/* Kitpath not defteri · ep10 · Coğrafi Araçlar
   Kaynak: ap-videolar/src/episodes/ep10 (script.ts) + AP HuG Unit 1 standart içeriği. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ep10",
  amac: "Bu konu haritacılığın nasıl başladığını ve bugünün coğrafi araçlarını anlatıyor. *Remote sensing*, *GPS*, *GIS* ve *visualization* ne yapar, birbirine nasıl bağlanır; bunları öğreneceksin.",
  bolumler: [
    {
      baslik: "Haritacılığın iki kurucusu",
      kisa: "Eratosthenes Dünya'nın çevresini hesapladı; Ptolemy enlem-boylamlı haritalar çizdi.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🖋️", terim: "Cartography", tr: "haritacılık", tanim: "Harita yapma sanatı ve bilimi.", ornek: "Bir şehrin yol haritasını çizmek." },
            { ikon: "📐", terim: "Eratosthenes", tr: "Eratosthenes", tanim: "==Coğrafya kelimesini ilk kullanan kişi==. Yaklaşık MÖ 240'ta gölge boylarını ölçerek Dünya'nın çevresini hesapladı.", ornek: "İskenderiye ve Syene'deki gölge farkı." },
            { ikon: "🧮", terim: "Ptolemy", tr: "Batlamyus", tanim: "Yaklaşık MS 150'de enlem ve boylam kullanan haritalar çizdi; eserleri bin yıldan uzun süre kaynak oldu.", ornek: "Parşömen üzerine çizilmiş enlem–boylam ızgaralı dünya haritası." }
          ] },
        { tip: "ornek", baslik: "Eratosthenes: Dünya'nın çevresi", durum: "Aynı anda Syene'de güneş tam tepede ve gölge yok; İskenderiye'de gölge 7,2° açı yapıyor. İki şehir arası yaklaşık 800 km. Dünya'nın çevresi ne kadar?",
          adimlar: ["Dairenin kaçta kaçı? 360 ÷ 7,2 = 50.", "Çevre = 50 × 800 km.", "50 × 800 = 40.000 km."],
          sonuc: "Dünya'nın çevresi ==yaklaşık 40.000 km==; bugünkü ölçümle çok yakın." },
        { tip: "tuzak", metin: "Quiz: \"Coğrafya kelimesini ilk kullanan ve gölge boylarıyla Dünya'nın çevresini hesaplayan kişi kimdir?\"", yanlis: "Ptolemy; çünkü enlem ve boylam kullanan haritalar çizdi.", dogru: "==Eratosthenes==. Ptolemy ise enlem–boylamlı haritalar çizen kişidir." }
      ]
    },
    {
      baslik: "*GIS*: katman katman harita",
      kisa: "*GIS* coğrafi veriyi katman katman saklar ve analiz eder.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧅", terim: "GIS", tr: "Coğrafi Bilgi Sistemi", tanim: "*Geographic Information System*: coğrafi veriyi ==katman katman== saklayan ve analiz eden bilgisayar sistemi.", ornek: "Bir katmanda yollar, birinde binalar, birinde nüfus." },
            { ikon: "🔀", terim: "Mashup", tr: "harmanlama", tanim: "Farklı kaynaklardan gelen verileri tek bir haritada birleştirmek; *cartogram* değildir.", ornek: "Harita uygulamasında restoran puanlarını ya da trafik yoğunluğunu görmek." }
          ] },
        { tip: "adimlar", baslik: "Katmanlar nasıl çalışır?", adimlar: [
            { baslik: "Katman 1: yollar", metin: "Yollar ayrı bir katman olarak saklanır." },
            { baslik: "Katman 2: binalar", metin: "Binalar başka bir katmandır." },
            { baslik: "Katman 3: nüfus", metin: "Nüfus yoğunluğu da ayrı bir katmandır." },
            { baslik: "Üst üste koy", metin: "Katmanları üst üste koyunca tek tek göremediğin ilişkiler ortaya çıkar." },
            { baslik: "Soru: hastane nereye?", metin: "Nüfusun yoğun olduğu, yolların kesiştiği ve binaların uygun olduğu yer taranır; en uygun noktaya yeni hastane işaretlenir." }
          ] },
        { tip: "tuzak", metin: "Bir belediye; sel riski, nüfus ve yol haritalarını üst üste koyup tahliye planı yapıyor.", yanlis: "*GPS*; çünkü konum bulunuyor.", dogru: "==*GIS*==: katmanları birleştirip analiz ediyor." }
      ]
    },
    {
      baslik: "*GPS*: uydularla konum",
      kisa: "*GPS* uydularla konumu bulur; sonuç *absolute location*'dır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛰️", terim: "GPS", tr: "Küresel Konumlandırma Sistemi", tanim: "*Global Positioning System*. Üç parçası var: Dünya'nın etrafında dönen ==uydular==, onları izleyen ==yer istasyonları== ve senin elindeki ==alıcı== (telefon).", ornek: "Telefonun bulunduğun noktayı enlem ve boylamla verir." }
          ] },
        { tip: "adimlar", baslik: "Telefon konumunu nasıl bulur?", adimlar: [
            { baslik: "Uydular", metin: "Yörüngedeki uydular sürekli sinyal yayar." },
            { baslik: "Yer istasyonları", metin: "Yerdeki istasyonlar uyduları izler ve düzeltir." },
            { baslik: "Alıcı", metin: "Telefon en az ==4 uydudan== sinyal alır." },
            { baslik: "Hesap", metin: "Her uyduya olan mesafeler hesaplanır; küreler tek bir noktada kesişir." },
            { baslik: "Sonuç", metin: "Tam konum: ==*absolute location*== (örneğin 41,0082° K, 28,9784° D)." }
          ] },
        { tip: "tuzak", metin: "Bir dağcının telefonu en az dört uydudan sinyal alıp bulunduğu noktanın enlem ve boylamını hesaplıyor.", yanlis: "*GIS* kullanıyor; konum türü *relative location*.", dogru: "Kullanılan sistem ==*GPS*==; bulduğu konum türü ==*absolute location*== (enlem ve boylam)." }
      ]
    },
    {
      baslik: "*Remote sensing*: uzaktan algılama",
      kisa: "*Remote sensing* yeryüzünü uydu ya da uçakla dokunmadan tarar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📡", terim: "Remote sensing", tr: "uzaktan algılama", tanim: "Uydular ya da uçaklar yeryüzünü ==dokunmadan== tarar.", ornek: "Orman kaybını, şehirlerin büyümesini ve buzulların erimesini izlemek." },
            { ikon: "🟩", terim: "Pixel", tr: "piksel", tanim: "Uydu görüntüsünü oluşturan küçük kareler. Her piksel bir alanı temsil eder.", ornek: "1 piksel = 30 m × 30 m." }
          ] },
        { tip: "grafik", baslik: "Piksel boyutu ve resolution", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "yol", tip: "cizgi", renk: 0, from: [0.2, 0.2], to: [9.8, 9.8], etiket: "" },
            { id: "c0", tip: "alan", renk: 1, noktalar: [[0, 0], [2, 0], [2, 2], [0, 2]], gizli: true },
            { id: "c1", tip: "alan", renk: 1, noktalar: [[2, 2], [4, 2], [4, 4], [2, 4]], gizli: true },
            { id: "c2", tip: "alan", renk: 1, noktalar: [[4, 4], [6, 4], [6, 6], [4, 6]], gizli: true },
            { id: "c3", tip: "alan", renk: 1, noktalar: [[6, 6], [8, 6], [8, 8], [6, 8]], gizli: true },
            { id: "c4", tip: "alan", renk: 1, noktalar: [[8, 8], [10, 8], [10, 10], [8, 10]], gizli: true },
            { id: "f0", tip: "alan", renk: 2, noktalar: [[0, 0], [1, 0], [1, 1], [0, 1]], gizli: true },
            { id: "f1", tip: "alan", renk: 2, noktalar: [[1, 1], [2, 1], [2, 2], [1, 2]], gizli: true },
            { id: "f2", tip: "alan", renk: 2, noktalar: [[2, 2], [3, 2], [3, 3], [2, 3]], gizli: true },
            { id: "f3", tip: "alan", renk: 2, noktalar: [[3, 3], [4, 3], [4, 4], [3, 4]], gizli: true },
            { id: "f4", tip: "alan", renk: 2, noktalar: [[4, 4], [5, 4], [5, 5], [4, 5]], gizli: true },
            { id: "f5", tip: "alan", renk: 2, noktalar: [[5, 5], [6, 5], [6, 6], [5, 6]], gizli: true },
            { id: "f6", tip: "alan", renk: 2, noktalar: [[6, 6], [7, 6], [7, 7], [6, 7]], gizli: true },
            { id: "f7", tip: "alan", renk: 2, noktalar: [[7, 7], [8, 7], [8, 8], [7, 8]], gizli: true },
            { id: "f8", tip: "alan", renk: 2, noktalar: [[8, 8], [9, 8], [9, 9], [8, 9]], gizli: true },
            { id: "f9", tip: "alan", renk: 2, noktalar: [[9, 9], [10, 9], [10, 10], [9, 10]], gizli: true },
            { id: "tc", tip: "yazi", x: 7.6, y: 2.2, metin: "iri piksel: yol kaba", gizli: true },
            { id: "tf", tip: "yazi", x: 7.6, y: 2.2, metin: "ince piksel: yol net", gizli: true }
          ],
          durumlar: [
            { metin: "Uydu görüntüsü piksel adı verilen küçük karelerden oluşur. Gerçekte bir yol (çizgi) yeryüzünden geçiyor." },
            { metin: "**Düşük *resolution***: her piksel geniş bir alanı kapsar. Yol, büyük karelerin içinde kaba bir izdir.", goster: ["c0", "c1", "c2", "c3", "c4", "tc"] },
            { metin: "**Yüksek *resolution***: her piksel küçük bir alanı temsil eder. Yolun yeri çok daha ince seçilir.", gizle: ["c0", "c1", "c2", "c3", "c4", "tc"], goster: ["f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "tf"] }
          ] },
        { tip: "tuzak", metin: "Bilim insanları Amazon'daki orman kaybını 2000 ve 2025 uydu görüntülerini karşılaştırarak izliyor (yeşil pikseller azalmış).", yanlis: "Bu görüntüleri *GPS* sağlıyor.", dogru: "Görüntüleri toplayan teknoloji ==*remote sensing*==. *GPS* konumu verir, görüntü toplamaz." }
      ]
    },
    {
      baslik: "Üçü birlikte çalışır",
      kisa: "*Remote sensing* toplar, *GPS* konumlar, *GIS* analiz eder, *visualization* gösterir.",
      bloklar: [
        { tip: "adimlar", baslik: "Veriden haritaya", adimlar: [
            { baslik: "*Remote sensing*", metin: "Veriyi toplar: uydular yeryüzünü tarar." },
            { baslik: "*GPS*", metin: "Konumu verir: ölçümün hangi noktada yapıldığını söyler." },
            { baslik: "*GIS*", metin: "Hepsini analiz eder: katmanları birleştirir." },
            { baslik: "*Visualization*", metin: "Sonucu anlaşılır bir harita ya da grafik haline getirir." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🖼️", terim: "Visualization", tr: "görselleştirme", tanim: "Analiz sonucunu anlaşılır bir görsele (harita, grafik) dönüştürme.", ornek: "Orman kaybını kırmızı alanlarla gösteren harita." }
          ] },
        { tip: "ikili", sol: { ikon: "📍", baslik: "*GPS*", maddeler: ["Konumu verir", "En az 4 uydu, *absolute location*"] },
          sag: { ikon: "🧅", baslik: "*GIS*", maddeler: ["Verileri katman katman analiz eder", "Karar için ilişki bulur"] },
          oyun: [
            { metin: "Telefonun bulunduğun noktanın enlem ve boylamını gösteriyor.", cevap: "sol", neden: "Konum bulma: *GPS*." },
            { metin: "Bir belediye sel, nüfus ve yol katmanlarını üst üste koyup tahliye planı yapıyor.", cevap: "sag", neden: "Katman analizi: *GIS*." },
            { metin: "Yeni hastane için en uygun yeri bulmak üzere nüfus ve yol katmanlarını taramak.", cevap: "sag", neden: "Analiz: *GIS*." },
            { metin: "Yörüngedeki uydulardan gelen sinyalle koordinat hesaplamak.", cevap: "sol", neden: "*GPS*." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Cartography* haritacılıktır. Eratosthenes (≈ MÖ 240) coğrafya kelimesini ilk kullanan kişi ve Dünya'nın çevresini gölgeden hesapladı: 360 ÷ 7,2 = 50; 50 × 800 km ≈ 40.000 km.",
            "Ptolemy (≈ MS 150) enlem ve boylamlı haritalar çizdi; eserleri 1000 yıldan fazla kaynak oldu.",
            "*GIS* coğrafi veriyi katman katman saklar ve analiz eder (yollar + binalar + nüfus → hastane yeri).",
            "*Mashup*: farklı kaynaklardan gelen verilerin tek haritada birleşmesi (restoran puanları, trafik).",
            "*GPS*: uydular + yer istasyonları + alıcı; en az 4 uydu; sonuç *absolute location*.",
            "*Remote sensing*: uydu ya da uçakla dokunmadan tarama; görüntü piksellerden oluşur.",
            "Akış: *remote sensing* toplar → *GPS* konumlar → *GIS* analiz eder → *visualization* gösterir."
          ] }
      ]
    }
  ]
};
