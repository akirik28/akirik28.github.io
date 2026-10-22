/* Kitora not defteri · ep08 · Harita Türleri
   Kaynak: ap-videolar/src/episodes/ep08 (script.ts) + AP HuG Unit 1 standart içeriği. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ep08",
  amac: "Bu konu haritaların iki ana türünü anlatıyor: yer gösteren *reference map* ve bir veriyi anlatan *thematic map*. Hangi veri için hangi haritayı seçeceğini öğreneceksin: oran, tam konum, toplam, hareket ya da eşit değer.",
  bolumler: [
    {
      baslik: "Her harita bir soruya cevap verir",
      kisa: "*Reference map* \"nerede?\", *thematic map* \"ne kadar, hangi desen?\" sorusunu yanıtlar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📍", baslik: "*Reference map*", maddeler: ["\"Nerede?\" sorusuna cevap verir", "Sınırlar, yollar, şehir adları; örnek: telefondaki navigasyon"] },
          sag: { ikon: "📊", baslik: "*Thematic map*", maddeler: ["\"Ne kadar? Nasıl bir desen var?\"", "Tek bir konunun hikâyesi: nüfus, gelir, sıcaklık"] },
          oyun: [
            { metin: "Telefondaki navigasyon haritası.", cevap: "sol", neden: "Nerede olduğunu gösterir: *reference*." },
            { metin: "İllere göre işsizlik oranını gösteren renkli harita.", cevap: "sag", neden: "Tek bir konunun deseni: *thematic*." },
            { metin: "Sınırları, yolları ve şehir adlarını gösteren harita.", cevap: "sol", neden: "Genel yer bilgisi: *reference*." },
            { metin: "Ülkelerin nüfusunu daire boyutlarıyla gösteren harita.", cevap: "sag", neden: "Tek bir veri konusu: *thematic*." }
          ] },
        { tip: "harita", merkez: "*Thematic map* türleri", dallar: [
            { baslik: "*Choropleth*", alt: "Renk tonu · oran" },
            { baslik: "*Dot density*", alt: "Nokta · tam konum" },
            { baslik: "*Proportional symbol*", alt: "Sembol boyutu · toplam" },
            { baslik: "*Isoline*", alt: "Eşit değer çizgisi" },
            { baslik: "*Flow map*", alt: "Ok · hareket" },
            { baslik: "*Cartogram*", alt: "Şişen/küçülen alan" },
            { baslik: "*Location chart*", alt: "Haritaya yerleşen grafikler" }
          ] }
      ]
    },
    {
      baslik: "*Choropleth*: renk tonuyla boyama",
      kisa: "*Choropleth* bölgeleri oran ile boyar; ham sayı büyük alanları şişirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎨", terim: "Choropleth map", tr: "kloropet harita", tanim: "Bölgeleri renk tonlarıyla boyar; koyu renk yüksek değer. ==Oranlar ve yoğunluklar için idealdir.==", ornek: "Kişi başı gelir, işsizlik yüzdesi." }
          ] },
        { tip: "ornek", baslik: "Neden ham sayı değil, oran?", durum: "K eyaleti büyük ve kalabalık: 10 milyon nüfus, 300 bin işsiz. L eyaleti küçük ve seyrek: 500 bin nüfus, 100 bin işsiz. Haritada hangi eyalet daha koyu boyanmalı?",
          adimlar: ["Ham sayıya bak: K'de 300 bin, L'de 100 bin. Ham sayıyla K daha koyu çıkar.", "Oranı hesapla: K = 300 bin ÷ 10 milyon = %3.", "L = 100 bin ÷ 500 bin = %20.", "Oran daha doğru karşılaştırma verir: L'de her beş kişiden biri işsiz."],
          sonuc: "==L eyaleti daha koyu== olmalı. Ham sayı büyük alanları ve kalabalık bölgeleri öne çıkarır; bu yüzden *choropleth*'te ==oran== kullanılır." },
        { tip: "tuzak", metin: "Büyük ama seyrek nüfuslu bir eyalet ham sayıyla koyu çıkabilir.", yanlis: "*Choropleth* haritada ham sayı (toplam işsiz sayısı) kullanılır.", dogru: "==Ham sayı değil, ORAN.== Aksi hâlde büyük alanlar gözü yanıltır." }
      ]
    },
    {
      baslik: "*Dot density*: nokta nokta",
      kisa: "*Dot density*'de her nokta sabit bir miktardır; kümelenmeyi gösterir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚫", terim: "Dot density map", tr: "nokta yoğunluğu haritası", tanim: "Her nokta sabit bir miktarı temsil eder. ==Verinin tam olarak nerede toplandığını, yani kümelenmeyi gösterir.==", ornek: "Bir nokta = 10.000 kişi. Kuzeydoğuda, Kaliforniya kıyısında noktalar sıktır; Great Plains'te seyrek." }
          ] },
        { tip: "ornek", baslik: "Noktayı kişiye çevirmek", durum: "Lejant: 1 nokta = 10.000 kişi. Bir ilçede 25 nokta var. İlçenin nüfusu ne kadar?",
          adimlar: ["Nokta sayısı: 25.", "Her nokta 10.000 kişi: 25 × 10.000 = 250.000."],
          sonuc: "İlçenin nüfusu yaklaşık ==250.000 kişi==." },
        { tip: "ikili", sol: { ikon: "🎨", baslik: "*Choropleth*", maddeler: ["Bölge tek renk; oran ve yoğunluk", "Alan içinde dağılımı göstermez"] },
          sag: { ikon: "⚫", baslik: "*Dot density*", maddeler: ["Noktalar gerçek dağılımı gösterir", "Kümelenmeyi (*clustered*) gösterir"] },
          oyun: [
            { metin: "Nüfusun hangi kesimlerde toplandığını tek tek noktalarla gösteren harita.", cevap: "sag", neden: "Konum ve kümelenme: *dot density*." },
            { metin: "İllere göre işsizlik yüzdesini renkle gösteren harita.", cevap: "sol", neden: "Yüzde ve bölge boyaması: *choropleth*." },
            { metin: "\"Bir nokta = 10.000 kişi\" lejandı.", cevap: "sag", neden: "Nokta başına sabit değer: *dot density*." }
          ] }
      ]
    },
    {
      baslik: "*Proportional symbol* ve *cartogram*",
      kisa: "Sembol boyutu toplamı gösterir; kartogramda alan veriye göre şişer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⭕", terim: "Proportional (graduated) symbol map", tr: "orantılı sembol haritası", tanim: "Sembolün boyutu değerle birlikte büyür. Büyük daire, büyük sayı. ==Toplam miktarları karşılaştırmak için== kullanılır.", ornek: "Şehir nüfuslarına göre büyüyen daireler: Tokyo, Delhi, İstanbul, Londra, New York." },
            { ikon: "🫧", terim: "Cartogram", tr: "kartogram", tanim: "Ülkelerin büyüklüğü gerçek yüzölçümüne göre değil, seçilen veriye göre şişer ya da küçülür.", ornek: "Nüfus kartogramında Hindistan ve Çin devleşir; Kanada ve Rusya ufacık kalır." }
          ] },
        { tip: "ikili", sol: { ikon: "🎨", baslik: "*Choropleth*", maddeler: ["Oran / yüzde", "Renk tonu, bölgeyi boyar"] },
          sag: { ikon: "⭕", baslik: "*Proportional symbol*", maddeler: ["Toplam büyüklük", "Sembol boyutu; şehir nüfusu gibi toplamlar"] },
          oyun: [
            { metin: "Her şehrin üstünde, toplam nüfusuyla orantılı büyüklükte bir daire var.", cevap: "sag", neden: "Toplam miktar ve sembol boyutu: *proportional symbol*." },
            { metin: "Eyaletler kişi başı gelire göre açıktan koyuya boyanmış.", cevap: "sol", neden: "Oran ve renk tonu: *choropleth*." },
            { metin: "İstanbul için büyük, Ankara için orta, İzmir için küçük bir daire çizilmiş.", cevap: "sag", neden: "Daire boyutu toplam nüfusu gösterir: *proportional symbol*." }
          ] },
        { tip: "tuzak", metin: "Dünya haritasında Hindistan ve Çin devasa, Kanada ve Rusya ufacık görünüyor.", yanlis: "Bu bir *Gall-Peters* ya da *Mercator* projeksiyonudur.", dogru: "Ülkelerin büyüklüğü yüzölçümüne göre değil nüfusa göre çizildiği için bu bir ==*cartogram*==." }
      ]
    },
    {
      baslik: "*Isoline* ve *topographic map*",
      kisa: "*Isoline* eşit değerleri birleştirir; çizgiler sıksa değişim hızlıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "〰️", terim: "Isoline map", tr: "eş değer çizgisi haritası", tanim: "Eşit değere sahip noktaları çizgilerle birleştirir. ==Çizgiler sıklaşıyorsa değişim hızlıdır.==", ornek: "Hava durumu haritasındaki sıcaklık ve basınç çizgileri." },
            { ikon: "🌡️", terim: "Isotherm", tr: "eş sıcaklık çizgisi", tanim: "Aynı sıcaklığa sahip noktaları birleştiren çizgi.", ornek: "20°C'yi geçen eğri." },
            { ikon: "🌀", terim: "Isobar", tr: "eş basınç çizgisi", tanim: "Aynı basınca sahip noktaları birleştirir.", ornek: "1012 hPa halkaları." },
            { ikon: "⛰️", terim: "Contour · Topographic map", tr: "yükselti eğrisi · topoğrafik harita", tanim: "Aynı yüksekliğe sahip noktaları birleştiren çizgiler *contour*; *contour* çizgilerinden oluşan haritaya *topographic map* denir.", ornek: "İç içe yükselti halkaları: 100 m, 200 m, 300 m..." }
          ] },
        { tip: "grafik", baslik: "Contour çizgileri neden sıklaşır?", xlabel: "Yatay mesafe", ylabel: "Yükseklik", xmax: 10, ymax: 7,
          yticks: [{ v: 1, label: "100 m" }, { v: 2, label: "200 m" }, { v: 3, label: "300 m" }, { v: 4, label: "400 m" }, { v: 5, label: "500 m" }],
          ogeler: [
            { id: "prof", tip: "egri", renk: 0, etiket: "", noktalar: [[0, 0], [2, 0], [2.33, 1], [2.67, 2], [3, 3], [3.33, 4], [3.67, 5], [4, 6], [4.92, 5], [5.83, 4], [6.75, 3], [7.67, 2], [8.58, 1], [9.5, 0], [10, 0]] },
            { id: "h1", tip: "cizgi", renk: 3, kesik: true, from: [0, 1], to: [10, 1], gizli: true },
            { id: "h2", tip: "cizgi", renk: 3, kesik: true, from: [0, 2], to: [10, 2], gizli: true },
            { id: "h3", tip: "cizgi", renk: 3, kesik: true, from: [0, 3], to: [10, 3], gizli: true },
            { id: "h4", tip: "cizgi", renk: 3, kesik: true, from: [0, 4], to: [10, 4], gizli: true },
            { id: "h5", tip: "cizgi", renk: 3, kesik: true, from: [0, 5], to: [10, 5], gizli: true },
            { id: "l1", tip: "cizgi", renk: 1, from: [2.33, 0], to: [2.33, 1], gizli: true },
            { id: "l2", tip: "cizgi", renk: 1, from: [2.67, 0], to: [2.67, 2], gizli: true },
            { id: "l3", tip: "cizgi", renk: 1, from: [3, 0], to: [3, 3], gizli: true },
            { id: "l4", tip: "cizgi", renk: 1, from: [3.33, 0], to: [3.33, 4], gizli: true },
            { id: "l5", tip: "cizgi", renk: 1, from: [3.67, 0], to: [3.67, 5], gizli: true },
            { id: "r1", tip: "cizgi", renk: 2, from: [4.92, 0], to: [4.92, 5], gizli: true },
            { id: "r2", tip: "cizgi", renk: 2, from: [5.83, 0], to: [5.83, 4], gizli: true },
            { id: "r3", tip: "cizgi", renk: 2, from: [6.75, 0], to: [6.75, 3], gizli: true },
            { id: "r4", tip: "cizgi", renk: 2, from: [7.67, 0], to: [7.67, 2], gizli: true },
            { id: "r5", tip: "cizgi", renk: 2, from: [8.58, 0], to: [8.58, 1], gizli: true },
            { id: "tl", tip: "yazi", x: 1.0, y: 3.2, metin: "sık = dik", gizli: true },
            { id: "tr", tip: "yazi", x: 8.6, y: 3.8, metin: "seyrek = yatık", gizli: true }
          ],
          durumlar: [
            { metin: "Yandan bakınca bir tepenin profili: solu dik, sağı yatık." },
            { metin: "Her 100 metrede bir yatay *contour* düzeyi çiziyoruz: 100, 200 ... 500 m.", goster: ["h1", "h2", "h3", "h4", "h5"] },
            { metin: "Tepenin ==dik tarafında== bu düzeyler birbirine çok yakın düşer; haritada çizgiler ==sıklaşır==.", goster: ["l1", "l2", "l3", "l4", "l5", "tl"] },
            { metin: "==Yatık tarafta== aynı yükseklik farkı uzun bir mesafeye yayılır; çizgiler ==seyrek== olur.", goster: ["r1", "r2", "r3", "r4", "r5", "tr"] }
          ] },
        { tip: "tuzak", metin: "Bir *topographic map*'te *contour* çizgileri bir yamaçta birbirine çok yakın.", yanlis: "Orada arazi neredeyse düzdür ya da nüfus yoğundur.", dogru: "Çizgiler sıksa ==yamaç diktir==; yükseklik kısa mesafede hızla değişir. Seyrekse yamaç yatıktır." }
      ]
    },
    {
      baslik: "*Flow map* ve *location chart*",
      kisa: "*Flow map* hareketi gösterir; ok yönü nereye, kalınlık ne kadar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "➡️", terim: "Flow map", tr: "akış haritası", tanim: "Hareketi gösterir. Okun yönü nereye gittiğini, ==kalınlığı ne kadar gittiğini== anlatır.", ornek: "Göç, ticaret, uçuş rotaları." },
            { ikon: "📈", terim: "Location chart", tr: "konum grafiği", tanim: "Haritanın üzerine, her yerin kendi konumuna küçük grafikler (pasta, sütun) yerleştirilir.", ornek: "Şehirlerin üstüne küçük pasta grafikleri konması." }
          ] },
        { tip: "tuzak", metin: "Göç akımlarının yönü ve hacmi soruluyor; şıklarda *choropleth* ve *cartogram* var.", yanlis: "*Choropleth*: renk hangi ülkelerin göç aldığını gösterir.", dogru: "Yön ve hacim = hareket = ==*flow map*==. Duran veriler (nokta, daire, renk) hareketi göstermez." }
      ]
    },
    {
      baslik: "Hangi veri, hangi harita?",
      kisa: "Veri tipine bak: oran, konum, toplam, hareket ya da eşit değer.",
      bloklar: [
        { tip: "tablo", baslik: "Sınavın en sevdiği eşleştirme", head: ["Veri tipi", "Harita"], rows: [
            ["Oran ya da yüzde", "*Choropleth*"],
            ["Tam olarak nerede", "*Dot density*"],
            ["Toplam büyüklük", "*Proportional symbol*"],
            ["Hareket", "*Flow map*"],
            ["Eşit değerler", "*Isoline*"],
            ["Alanı veriye göre şişirmek", "*Cartogram*"]
          ] },
        { tip: "adimlar", baslik: "Doğru haritayı seçme adımları", adimlar: [
            { baslik: "Önce sor", metin: "\"Nerede?\" mi (*reference*), yoksa \"ne kadar?\" mı (*thematic*)?" },
            { baslik: "Veri hareketse", metin: "Yön ve hacim → *flow map*." },
            { baslik: "Oran / yüzde ise", metin: "Bölgeleri boya → *choropleth*." },
            { baslik: "Toplam ise", metin: "Sembol boyutu → *proportional symbol*; tam konum ise *dot density*." },
            { baslik: "Eşit değer ise", metin: "Çizgiler → *isoline*." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Reference map* \"nerede?\" der; *thematic map* \"ne kadar, hangi desen?\" der.",
            "*Choropleth*: renk tonu, ORAN. Ham sayı büyük alanları şişirir.",
            "*Dot density*: her nokta sabit miktar; tam konum ve kümelenme.",
            "*Proportional (graduated) symbol*: sembol boyutu toplamla büyür.",
            "*Isoline*: eşit değerleri birleştirir; *isotherm* sıcaklık, *isobar* basınç, *contour* yükselti.",
            "*Topographic map* *contour* çizgilerinden oluşur; çizgiler sıksa yamaç diktir.",
            "*Flow map*: hareket; ok yönü nereye, kalınlık ne kadar.",
            "*Cartogram*: ülke büyüklüğü veriye göre değişir (nüfusta Hindistan ve Çin devleşir).",
            "*Location chart*: haritanın üzerine yerleştirilmiş küçük grafikler."
          ] }
      ]
    }
  ]
};
