/* Kitora not defteri · ep07 · Ölçek
   Kaynak: ap-videolar/src/episodes/ep07 (script.ts) + AP HuG Unit 1 standart içeriği. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ep07",
  amac: "Bu konu ölçeğin iki ayrı anlamını anlatıyor: haritanın ölçeği ve verinin incelendiği düzey. Unit 1'in en ünlü tuzağını öğreneceksin: ==*large scale* harita küçük bir alanı çok detaylı gösterir.==",
  bolumler: [
    {
      baslik: "*Scale* kelimesinin iki anlamı",
      kisa: "*Map scale* haritanın oranıdır; *scale of analysis* verinin düzeyidir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📏", baslik: "*Map scale*", maddeler: ["Haritadaki mesafenin gerçek mesafeye oranı", "1:24,000, \"1 inç = 1 mil\", ölçek çubuğu"] },
          sag: { ikon: "🔍", baslik: "*Scale of analysis*", maddeler: ["Veriye hangi düzeyde baktığın", "*Global*, *national*, *regional*, *local*"] },
          oyun: [
            { metin: "Köşede 1:24,000 yazıyor.", cevap: "sol", neden: "Harita ölçeği: *map scale* (ratio)." },
            { metin: "İşsizlik verisi ülke ortalaması yerine il il inceleniyor.", cevap: "sag", neden: "Verinin düzeyi: *scale of analysis*." },
            { metin: "Haritanın altında 0–1–2 km yazan küçük bir çubuk var.", cevap: "sol", neden: "*Graphic scale*, yani harita ölçeği." },
            { metin: "Araştırma \"yerel\" düzeyde, tek bir şehir içinde yapılıyor.", cevap: "sag", neden: "Analiz düzeyi: *local*." }
          ] },
        { tip: "not", metin: "Dünya haritası mı *large scale*, mahalle haritası mı? Çoğu kişi \"dünya, çünkü büyük\" diye yanlış bilir. Cevabı üçüncü başlıkta göreceksin." }
      ]
    },
    {
      baslik: "*Map scale*: üç yazılış",
      kisa: "Harita ölçeği oran, yazı ya da çubuk olarak yazılır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📐", terim: "Map scale", tr: "harita ölçeği", tanim: "Haritadaki mesafenin, gerçek dünyadaki mesafeye oranı. Üç şekilde yazılır.", ornek: "Haritada 1 cm, gerçekte kilometrelerce olabilir." },
            { ikon: "➗", terim: "Ratio scale", tr: "oran ölçek", tanim: "Rakamla oran: 1:24,000. Haritadaki 1 birim gerçekte 24 bin birim (1 inç = 2,000 fit).", ornek: "1:24,000 → 1 inç haritada = 24,000 inç gerçekte." },
            { ikon: "💬", terim: "Written scale", tr: "yazılı ölçek", tanim: "Sözle yazılmış ölçek. 1 mil = 63,360 inç olduğu için \"1 inç = 1 mil\" aslında 1:63,360'tır.", ornek: "\"1 inch = 1 mile\"." },
            { ikon: "📏", terim: "Graphic scale", tr: "çizgisel ölçek", tanim: "Üzerinde mesafe yazan küçük bir çubuk. Harita büyütülüp küçültülse bile doğru kalır.", ornek: "0 — 1 — 2 km yazan ölçek çubuğu." }
          ] },
        { tip: "ornek", baslik: "Haritadan gerçek mesafe", durum: "Ölçek 1:100,000. Haritada iki şehir arası 5 cm. Gerçek mesafe nedir?",
          adimlar: ["1 cm haritada = 100,000 cm gerçekte.", "5 cm × 100,000 = 500,000 cm.", "500,000 cm = 5,000 m = 5 km."],
          sonuc: "Gerçek mesafe ==5 km==." }
      ]
    },
    {
      baslik: "*Large scale* ve *small scale*",
      kisa: "*Large scale* küçük alanı çok detaylı gösterir; *small scale* büyük alanı az detayla.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔬", baslik: "*Large scale*", maddeler: ["Küçük alan, çok detay: mahalle, sokak, bina", "Kesir büyük: 1/10,000; nesneler büyük görünür"] },
          sag: { ikon: "🌍", baslik: "*Small scale*", maddeler: ["Büyük alan, az detay: dünya, kıta", "Kesir küçük: 1/10,000,000; nesneler küçük görünür"] },
          oyun: [
            { metin: "Bir okul kampüsünün planı.", cevap: "sol", neden: "Çok küçük alan, çok detay: *large scale*." },
            { metin: "Bütün dünya haritası.", cevap: "sag", neden: "Çok büyük alan, az detay: *small scale*." },
            { metin: "Bir itfaiye ekibinin tek tek sokakları ve binaları görmesi gereken harita.", cevap: "sol", neden: "Sokak ve bina düzeyi detay: *large scale*." },
            { metin: "Avrupa haritası.", cevap: "sag", neden: "Geniş alan, az detay: *small scale*." }
          ] },
        { tip: "grafik", baslik: "Alan büyüdükçe detay azalır", xlabel: "Haritanın gösterdiği alan", ylabel: "Detay", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "large scale" }, { v: 9, label: "small scale" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, etiket: "ölçek ilişkisi", noktalar: [[0.3, 9.6], [1, 9], [3, 7], [5, 4.8], [7, 3.2], [9.2, 1.2], [9.8, 0.8]] },
            { id: "k", tip: "nokta", x: 1, y: 9, etiket: "kampüs planı", gizli: true },
            { id: "t", tip: "nokta", x: 5, y: 4.8, etiket: "Türkiye", gizli: true },
            { id: "a", tip: "nokta", x: 7, y: 3.2, etiket: "Avrupa", gizli: true },
            { id: "d", tip: "nokta", x: 9.2, y: 1.2, etiket: "dünya", gizli: true }
          ],
          durumlar: [
            { metin: "Haritanın gösterdiği alan büyüdükçe gösterebildiği detay azalır." },
            { metin: "Okul kampüsü planı: en küçük alan, en çok detay → ==en *large scale*==.", goster: ["k"] },
            { metin: "Türkiye ve Avrupa haritaları: orta düzey.", goster: ["t", "a"] },
            { metin: "Dünya haritası: en büyük alan, en az detay → ==en *small scale*==.", goster: ["d"] }
          ] },
        { tip: "ornek", baslik: "Hangi harita large scale?", durum: "İki harita var: 1/5,000 ve 1/5,000,000. Hangisi *large scale*?",
          adimlar: ["Kesirleri karşılaştır: 1/5,000 = 0,0002; 1/5,000,000 = 0,0000002.", "0,0002 > 0,0000002; yani 1/5,000 daha büyük bir kesir.", "Büyük kesir = büyük ölçek."],
          sonuc: "==1/5,000== haritası *large scale*; sokakları ve binaları gösterir." },
        { tip: "tuzak", metin: "\"Large\" kelimesi alanı değil, ölçeği (kesri) anlatır.", yanlis: "Dünya haritası büyük bir alanı gösterdiği için *large scale*'dir.", dogru: "==Dünya haritası *small scale*'dir.== *Large scale* küçük alanı çok detaylı gösterir. Aklında şöyle tut: *large scale* haritada nesneler büyük, *small scale* haritada küçük görünür." }
      ]
    },
    {
      baslik: "*Scale of analysis*: hangi düzeyde bakıyorsun?",
      kisa: "Veriye dünya, ülke, bölge ya da şehir düzeyinde bakılır; ölçek değişince hikâye değişir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔭", terim: "Scale of analysis", tr: "analiz ölçeği", tanim: "Veriye hangi düzeyde baktığın. ==Ölçek değişince hikâye de değişir.==", ornek: "Ülke ortalamasında gelir yüksek görünebilir; il il bakınca büyük farklar ortaya çıkar." },
            { ikon: "🌐", terim: "Global · National · Regional · Local", tr: "dört analiz düzeyi", tanim: "Dünya → ülke → ülke içi bölge → şehir ya da mahalle. Aşağı indikçe detay artar.", ornek: "Dünya haritası (global); eyalet eyalet harita (sub-national); şehir planı (local)." }
          ] },
        { tip: "tuzak", metin: "Ülke ortalaması, bölgesel farkları gizleyebilir.", yanlis: "Ülke ortalaması gelirin her yerde yüksek olduğunu gösterir.", dogru: "Ortalama tek bir sayıdır; il il, yani daha ayrıntılı düzeyde baktığında ==büyük farklar== ortaya çıkabilir." }
      ]
    },
    {
      baslik: "Haritanın alanı ≠ verinin düzeyi",
      kisa: "Analiz düzeyini veriyi bölen sınırlar belirler, haritanın kapsadığı alan değil.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🗺️", baslik: "Haritanın gösterdiği alan", maddeler: ["Haritanın kapsadığı yer", "Dünya haritası → global"] },
          sag: { ikon: "🧱", baslik: "Verinin bölündüğü birim", maddeler: ["Veriyi hangi sınırlar bölüyor?", "Ülke ülke boyalı → national"] },
          oyun: [
            { metin: "Bütün dünyayı gösteren bir harita.", cevap: "sol", neden: "Haritanın kapsadığı alan." },
            { metin: "Her ülkenin ortalama yaşam süresine göre farklı tonda boyanması.", cevap: "sag", neden: "Veri ülke sınırlarıyla bölünüyor: *scale of analysis* *national*." },
            { metin: "Amerika haritası eyalet eyalet boyanmış.", cevap: "sag", neden: "Veriyi eyalet sınırları bölüyor: analiz eyalet düzeyinde." },
            { metin: "Haritanın tamamının Amerika'yı göstermesi.", cevap: "sol", neden: "Harita alanı: ulusal." }
          ] },
        { tip: "ornek", baslik: "Ortalama yaşam süresi haritası", durum: "Bir dünya haritasında her ülke, ortalama yaşam süresine göre farklı bir tona boyanmış. Bu haritanın *scale of analysis*'i nedir?",
          adimlar: ["Harita bütün dünyayı gösteriyor, yani harita alanı *global*.", "Ama veri ülke ülke boyanıyor; veriyi ülke sınırları bölüyor.", "Soru: veriyi hangi sınırlar bölüyor?"],
          sonuc: "Harita *global* olsa da *scale of analysis* ==*national*==." },
        { tip: "tuzak", metin: "Soruda \"dünya haritası\" geçince otomatik \"global\" seçmek.", yanlis: "Dünya haritası = *scale of analysis* *global*.", dogru: "==Veriyi hangi sınırlar bölüyor?== Ona bak. Ülke ülke boyalıysa *national*, eyalet eyalet boyalıysa eyalet düzeyi." }
      ]
    },
    {
      baslik: "*Resolution*: çözünürlük",
      kisa: "*Resolution* ayırt edebildiğin en küçük ayrıntıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛰️", terim: "Resolution", tr: "çözünürlük", tanim: "Bir haritada ya da uydu görüntüsünde ayırt edebildiğin en küçük ayrıntı.", ornek: "Yüksek çözünürlükte tek tek binaları seçersin." }
          ] },
        { tip: "ikili", sol: { ikon: "🏘️", baslik: "Yüksek *resolution*", maddeler: ["Tek tek binalar seçilir", "Küçük pikseller, ince ayrıntı"] },
          sag: { ikon: "🟦", baslik: "Düşük *resolution*", maddeler: ["Her şey iri karelere dönüşür", "Büyük pikseller, kaba görüntü"] },
          oyun: [
            { metin: "Uydu görüntüsünde tek tek evler ve arabalar seçiliyor.", cevap: "sol", neden: "İnce ayrıntı: yüksek *resolution*." },
            { metin: "Aynı şehir iri karelere dönüşmüş, binalar ayırt edilemiyor.", cevap: "sag", neden: "Kaba görüntü: düşük *resolution*." },
            { metin: "Bir ormanın içindeki tek tek ağaç sıraları görülebiliyor.", cevap: "sol", neden: "Ayrıntı fazla: yüksek *resolution*." }
          ] },
        { tip: "tuzak", metin: "İki uydu görüntüsünden birinde binalar seçiliyor, diğerinde aynı şehir iri karelere dönüşmüş.", yanlis: "İki görüntüyü ayıran şey *projection* ya da *aggregation*'dır.", dogru: "İki görüntüyü ayıran şey ==*resolution*==: ayırt edilebilen en küçük ayrıntı." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Map scale*: haritadaki mesafe ÷ gerçek mesafe. Üç yazılış: *ratio* (1:24,000), *written* (1 inç = 1 mil), *graphic* (çubuk).",
            "*Large scale* = küçük alan, çok detay; *small scale* = büyük alan, az detay.",
            "Sebep kesirdir: 1/10,000 > 1/10,000,000, yani 1/10,000 harita *large scale*.",
            "En *large scale* harita: okul kampüsü planı; en *small scale*: dünya haritası.",
            "*Scale of analysis* = veriye hangi düzeyde baktığın: *global*, *national*, *regional*, *local*.",
            "Ülke ortalaması bölgesel farkları gizleyebilir; il il bakınca hikâye değişir.",
            "Haritanın alanı ile verinin düzeyi ayrıdır: veriyi hangi sınırlar bölüyor?",
            "*Resolution*: ayırt edilebilen en küçük ayrıntı; yüksekse binaları seçersin, düşükse iri karelere dönüşür."
          ] }
      ]
    }
  ]
};
