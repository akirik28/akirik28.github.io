/* Kitora not defteri · st201 · 2.1–2.2 İki Kategorik Değişkeni Göstermek
   Kaynak: AP Statistics CED Unit 2 (2.1 Are Variables Related?, 2.2 Representing Two Categorical Variables). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st201",
  amac: "Bu konu iki değişkenin birbiriyle ilişkili olup olmadığını sorar ve iki *categorical variable*'ı birlikte göstermeyi anlatır. *Explanatory* ve *response variable* ayrımını, *two-way table*'ı, *segmented bar chart*'ı ve *mosaic plot*'u öğreneceksin.",
  bolumler: [
    {
      baslik: "Açıklayıcı değişken ve sonuç değişkeni",
      kisa: "İki değişkeni birlikte incelerken biri açıklar, öbürü açıklanan sonuçtur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔎", terim: "Explanatory variable", tr: "açıklayıcı değişken", tanim: "Sonucu ==açıklamak ya da tahmin etmek== için kullandığın değişken.", ornek: "Okul kantininde sınıf düzeyi (9. ya da 10. sınıf)." },
            { ikon: "🎯", terim: "Response variable", tr: "sonuç değişkeni", tanim: "Açıklanmaya ya da tahmin edilmeye çalışılan ==sonuç==.", ornek: "Kantinde seçilen yiyecek (tost, simit, salata)." },
            { ikon: "🔗", terim: "Association", tr: "ilişki", tanim: "Bir değişkeni bilmek diğerinin değerleri hakkında ==bilgi veriyorsa== değişkenler ilişkilidir.", ornek: "9. sınıflar tostu 10. sınıflardan daha sık seçiyorsa sınıf ile seçim ilişkilidir." }
          ] },
        { tip: "ikili", sol: { ikon: "🔎", baslik: "*Explanatory variable*", maddeler: ["Açıklamak, tahmin etmek için kullanılır", "Sorunun \"şuna göre\" kısmı"] },
          sag: { ikon: "🎯", baslik: "*Response variable*", maddeler: ["Açıklanmaya çalışılan sonuç", "Sorunun \"ne olduğunu merak ettiğimiz\" kısmı"] },
          oyun: [
            { metin: "Ders çalışma süresinin sınav notunu nasıl etkilediğine bakıyorsun: ders çalışma süresi.", cevap: "sol", neden: "Notu açıklamak için kullanılan değişken: *explanatory*." },
            { metin: "Aynı çalışmada: sınav notu.", cevap: "sag", neden: "Açıklanmaya çalışılan sonuç: *response*." },
            { metin: "Okula geliş şekline göre geç kalıp kalmamayı inceliyorsun: geliş şekli.", cevap: "sol", neden: "Geç kalmayı açıklamak için kullanılıyor: *explanatory*." },
            { metin: "Aynı çalışmada: geç kalıp kalmama.", cevap: "sag", neden: "Sonuç: *response*." }
          ] },
        { tip: "tuzak", baslik: "Açıklayıcı değişken sebep demek değildir", metin: "Hangi değişkenin açıklayıcı olduğunu sorunun yönü belirler. Ders çalışma süresini açıklayıcı seçmek, notun ders çalışmaktan kaynaklandığını kanıtlamaz.", yanlis: "Açıklayıcı değişken sonucun sebebidir.", dogru: "Açıklayıcı değişken yalnızca açıklamak ya da tahmin etmek için seçilir; sebep-sonuç için uygun bir deney gerekir." }
      ]
    },
    {
      baslik: "*Two-way table*: iki değişken tek tabloda",
      kisa: "Satırlar bir değişkenin, sütunlar öbürünün kategorisidir; hücreler sayıdır.",
      bloklar: [
        { tip: "tablo", baslik: "Kantin anketi: sınıf ve tercih (100 öğrenci)", head: ["", "Tost", "Simit", "Salata", "Toplam"], rows: [
            ["9. sınıf", "20", "12", "8", "40"],
            ["10. sınıf", "15", "30", "15", "60"],
            ["Toplam", "35", "42", "23", "100"]
          ], vurgu: 2, not: "Her öğrenci tam bir hücreye girer. Kenardaki toplamlar tek bir değişkenin dağılımını verir." },
        { tip: "ornek", baslik: "Tablodan okumak", durum: "Yukarıdaki *two-way table* ile dört soruyu cevaplayalım.",
          adimlar: ["10. sınıf ve simit hücresi: 30 öğrenci.", "Tostu seçenlerin toplamı: 20 + 15 = 35 öğrenci.", "9. sınıfların tost seçme oranı: 20 ÷ 40 = 0,50, yani %50.", "10. sınıfların tost seçme oranı: 15 ÷ 60 = 0,25, yani %25."],
          sonuc: "Sınıflar eşit büyüklükte olmadığı için sayıları değil, her grubun kendi içindeki yüzdelerini karşılaştır: tost 9. sınıfta %50, 10. sınıfta %25." }
      ]
    },
    {
      baslik: "Yan yana ve yığılmış çubuk grafiği",
      kisa: "Yan yana çubuk sayıyı, yığılmış çubuk her grubun kendi yüzde dağılımını gösterir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📊", terim: "Side-by-side bar chart", tr: "yan yana çubuk grafiği", tanim: "Her kategori için gruplara ait çubuklar yan yana durur; çubuk yüksekliği ==sayıdır==.", ornek: "Tost için 9. ve 10. sınıf çubukları yan yana." },
            { ikon: "🧱", terim: "Segmented bar chart", tr: "yığılmış (bölmeli) çubuk grafiği", tanim: "Her grup bir çubuktur ve ==%100'e kadar== dilimlenir; dilimler o grubun yüzde dağılımıdır.", ornek: "9. sınıf çubuğunda tost %50, simit %30, salata %20." }
          ] },
        { tip: "sekil", baslik: "Yan yana çubuk: sayılar", fig: { type: "bar", cats: ["Tost", "Simit", "Salata"], series: [{ name: "9. sınıf", values: [20, 12, 8] }, { name: "10. sınıf", values: [15, 30, 15] }], ylabel: "Öğrenci sayısı" } },
        { tip: "grafik", baslik: "Yığılmış çubuk grafiği: satır yüzdeleri", xlabel: "Sınıf", ylabel: "Yüzde", xmax: 6, ymax: 10,
          xticks: [{ v: 1.5, label: "9. sınıf" }, { v: 4.5, label: "10. sınıf" }],
          yticks: [{ v: 0, label: "0" }, { v: 5, label: "%50" }, { v: 10, label: "%100" }],
          ogeler: [
            { id: "t9", tip: "alan", renk: 0, noktalar: [[0.5, 0], [0.5, 5], [2.5, 5], [2.5, 0]], gizli: true },
            { id: "s9", tip: "alan", renk: 1, noktalar: [[0.5, 5], [0.5, 8], [2.5, 8], [2.5, 5]], gizli: true },
            { id: "l9", tip: "alan", renk: 2, noktalar: [[0.5, 8], [0.5, 10], [2.5, 10], [2.5, 8]], gizli: true },
            { id: "y9a", tip: "yazi", x: 1.5, y: 2.2, metin: "Tost %50", gizli: true },
            { id: "y9b", tip: "yazi", x: 1.5, y: 6.2, metin: "Simit %30", gizli: true },
            { id: "y9c", tip: "yazi", x: 1.5, y: 8.8, metin: "Salata %20", gizli: true },
            { id: "t10", tip: "alan", renk: 0, noktalar: [[3.5, 0], [3.5, 2.5], [5.5, 2.5], [5.5, 0]], gizli: true },
            { id: "s10", tip: "alan", renk: 1, noktalar: [[3.5, 2.5], [3.5, 7.5], [5.5, 7.5], [5.5, 2.5]], gizli: true },
            { id: "l10", tip: "alan", renk: 2, noktalar: [[3.5, 7.5], [3.5, 10], [5.5, 10], [5.5, 7.5]], gizli: true },
            { id: "y10a", tip: "yazi", x: 4.5, y: 0.9, metin: "Tost %25", gizli: true },
            { id: "y10b", tip: "yazi", x: 4.5, y: 6.2, metin: "Simit %50", gizli: true },
            { id: "y10c", tip: "yazi", x: 4.5, y: 8.5, metin: "Salata %25", gizli: true },
            { id: "ref", tip: "cizgi", renk: 3, kesik: true, from: [0.5, 5], to: [5.5, 5], etiket: "", gizli: true }
          ],
          durumlar: [
            { metin: "9. sınıf (40 kişi): çubuğun tamamı %100. Tost 20 ÷ 40 = %50, simit 12 ÷ 40 = %30, salata 8 ÷ 40 = %20.", goster: ["t9", "s9", "l9", "y9a", "y9b", "y9c"] },
            { metin: "10. sınıf (60 kişi): tost 15 ÷ 60 = %25, simit 30 ÷ 60 = %50, salata 15 ÷ 60 = %25.", goster: ["t10", "s10", "l10", "y10a", "y10b", "y10c"] },
            { metin: "İki çubuğun dilimleri aynı yükseklikte değil: kesikli çizgi %50'yi gösteriyor. Sınıf ile tercih arasında ==ilişki== var.", goster: ["ref"] }
          ] }
      ]
    },
    {
      baslik: "*Mosaic plot*: grup büyüklüğü de görünsün",
      kisa: "Çubuk genişliği grup büyüklüğüne, dilim yüksekliği yüzdeye göre çizilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Mosaic plot", tr: "mozaik grafiği", tanim: "Yığılmış çubuk grafiğinin ==genişliği de anlamlı== olan hâli: sütun genişliği grubun toplamdaki payıdır.", ornek: "Anketin %40'ı 9. sınıf olduğu için 9. sınıf sütunu toplam genişliğin %40'ıdır." }
          ] },
        { tip: "grafik", baslik: "Mozaik grafiği: genişlik ve yükseklik", xlabel: "Sınıf (genişlik = grup payı)", ylabel: "Yüzde", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "9. sınıf" }, { v: 7, label: "10. sınıf" }],
          yticks: [{ v: 0, label: "0" }, { v: 5, label: "%50" }, { v: 10, label: "%100" }],
          ogeler: [
            { id: "mt9", tip: "alan", renk: 0, noktalar: [[0, 0], [0, 5], [4, 5], [4, 0]], gizli: true },
            { id: "ms9", tip: "alan", renk: 1, noktalar: [[0, 5], [0, 8], [4, 8], [4, 5]], gizli: true },
            { id: "ml9", tip: "alan", renk: 2, noktalar: [[0, 8], [0, 10], [4, 10], [4, 8]], gizli: true },
            { id: "mt10", tip: "alan", renk: 0, noktalar: [[4, 0], [4, 2.5], [10, 2.5], [10, 0]], gizli: true },
            { id: "ms10", tip: "alan", renk: 1, noktalar: [[4, 2.5], [4, 7.5], [10, 7.5], [10, 2.5]], gizli: true },
            { id: "ml10", tip: "alan", renk: 2, noktalar: [[4, 7.5], [4, 10], [10, 10], [10, 7.5]], gizli: true },
            { id: "my1", tip: "yazi", x: 2, y: 2.2, metin: "Tost", gizli: true },
            { id: "my2", tip: "yazi", x: 2, y: 6.2, metin: "Simit", gizli: true },
            { id: "my3", tip: "yazi", x: 2, y: 8.8, metin: "Salata", gizli: true },
            { id: "my4", tip: "yazi", x: 7, y: 0.9, metin: "Tost", gizli: true },
            { id: "my5", tip: "yazi", x: 7, y: 4.4, metin: "Simit", gizli: true },
            { id: "my6", tip: "yazi", x: 7, y: 8.5, metin: "Salata", gizli: true }
          ],
          durumlar: [
            { metin: "9. sınıf sütunu: 40 kişi, yani toplamın %40'ı. Bu yüzden sütun 10 birimlik genişliğin 4 birimi.", goster: ["mt9", "ms9", "ml9", "my1", "my2", "my3"] },
            { metin: "10. sınıf sütunu: 60 kişi, toplamın %60'ı. Sütun daha geniş; dilimleri %25, %50, %25.", goster: ["mt10", "ms10", "ml10", "my4", "my5", "my6"] },
            { metin: "Her dikdörtgenin ==alanı== hücrenin toplamdaki payıdır: 9. sınıf-tost = %40 × %50 = %20, yani 20 öğrenci." }
          ] },
        { tip: "tuzak", baslik: "Yığılmış çubuk ile mozaik aynı şey değil", metin: "Yığılmış çubuk grafiğinde bütün çubuklar eşit yüksekliktedir; çubuklar arasında genişlik farkı yoktur.", yanlis: "Çubuk grafiği gruplardaki kişi sayısını da gösterir.", dogru: "Yığılmış çubuk yalnızca her grubun ==kendi içindeki== dağılımını gösterir. Grup büyüklüğü için *mosaic plot* ya da tablodaki toplamlar gerekir." }
      ]
    },
    {
      baslik: "Grafikten ilişkiyi okumak",
      kisa: "Dilim yüzdeleri gruplar arasında farklıysa ilişki vardır; aynıysa yoktur.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔗", baslik: "İlişki var", maddeler: ["Dilimler gruplarda farklı yükseklikte", "Bir değişkeni bilmek, öbürünü tahmin etmeye yardım eder"] },
          sag: { ikon: "⚖️", baslik: "İlişki yok", maddeler: ["Dilimler her grupta aynı yükseklikte", "Bir değişkeni bilmek hiçbir şey kazandırmaz"] },
          oyun: [
            { metin: "9. sınıfta tost %50, 10. sınıfta %25.", cevap: "sol", neden: "Yüzdeler gruplar arasında farklı: ilişki var." },
            { metin: "İki sınıfta da öğrencilerin %40'ı tost seçiyor.", cevap: "sag", neden: "Oran her grupta aynı: ilişki yok." },
            { metin: "Kızların %60'ı, erkeklerin %60'ı spor kulübüne üye.", cevap: "sag", neden: "Yüzdeler eşit: ilişki yok." },
            { metin: "Yığılmış çubuklarda \"evet\" dilimi bir grupta kısa, öbüründe uzun.", cevap: "sol", neden: "Dilimler farklı: ilişki var." }
          ] },
        { tip: "ornek", baslik: "Bağlamlı yorum cümlesi", durum: "Kantin anketindeki sınıf ve tercih ilişkisini sınavda yazılacak biçimde yorumlayalım.",
          adimlar: ["Satır yüzdelerini yaz: 9. sınıf %50, %30, %20; 10. sınıf %25, %50, %25.", "Fark var mı? Evet: tostta 25 puan, simitte 20 puan fark.", "Değişken adlarını ve grupları kullanarak cümleyi kur."],
          sonuc: "Sınıf düzeyi ile kantin tercihi arasında bir ilişki var: 9. sınıfların %50'si tost seçerken 10. sınıflarda bu oran %25. Bu bir ilişkidir; sınıfın tercihe sebep olduğunu göstermez." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Explanatory variable* açıklamak için, *response variable* açıklanan sonuç için kullanılır; hangisinin hangisi olduğunu sorunun yönü belirler.",
            "*Association*: bir değişkeni bilmek öbürü hakkında bilgi veriyorsa değişkenler ilişkilidir.",
            "*Two-way table* iki *categorical variable*'ı satır ve sütunla birleştirir; kenar toplamları tek değişkenin dağılımıdır.",
            "Grup büyüklükleri farklıysa sayıları değil, her grubun kendi içindeki yüzdeleri karşılaştır.",
            "*Side-by-side bar chart* sayıyı gösterir; *segmented bar chart* her grubun %100'e tamamlanan yüzde dağılımını gösterir.",
            "*Mosaic plot*'ta sütun genişliği grup büyüklüğünü, dilim yüksekliği yüzdeyi gösterir; dikdörtgen alanı hücrenin payıdır.",
            "Dilim yüzdeleri gruplar arasında farklıysa ilişki vardır; hep aynıysa ilişki yoktur.",
            "İlişki sebep-sonuç demek değildir; yorumu değişken adları ve gruplarla yaz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir okul, öğrencilerin günlük telefon kullanımının 2 saati geçip geçmediğini ve ertesi gün ilk derse geç kalıp kalmadıklarını kaydediyor. Amaç, telefon kullanımına bakarak geç kalmayı tahmin etmektir. Hangisi doğrudur?",
      opts: ["Geç kalma *explanatory*, telefon kullanımı *response variable*'dır.", "Telefon kullanımı *explanatory*, geç kalma *response variable*'dır.", "İkisi de *categorical* olduğu için ikisi de *response variable*'dır.", "Telefon kullanımı sebep olduğu için *explanatory*'dir; *response variable* yoktur."],
      a: 1, why: "Tahmin edilmek istenen geç kalmadır, bu yüzden *response variable* odur; telefon kullanımı onu açıklamak için seçilir. D yanlış: açıklayıcı değişken sebep olduğunu göstermez, yalnızca açıklamak için kullanılır." },
    { q: "Tabloya göre okula geliş şekline göre bir *segmented bar chart* çizilirse \"Servis\" çubuğundaki \"Geç kaldı\" diliminin yüksekliği kaç olur?",
      fig: { type: "table", head: ["", "Geç kaldı", "Zamanında", "Toplam"], rows: [["Servis", "6", "54", "60"], ["Toplu taşıma", "24", "36", "60"], ["Toplam", "30", "90", "120"]], caption: "Okula geliş şekli ve geç kalma (120 öğrenci)" },
      opts: ["%5", "%20", "%10", "%40"],
      a: 2, why: "Yığılmış çubukta her çubuk kendi grubunun %100'üdür: 6 ÷ 60 = %10. %5, 6'nın tüm öğrencilere (120) bölünmesidir. %20 ise geç kalanların (30) içindeki payı hesaplar; bu soruyu sormaz." },
    { q: "Bir *mosaic plot*'ta sol sütun, sağ sütunun iki katı genişliğinde. Bu neyi gösterir?",
      opts: ["Sol sütunu oluşturan grupta yaklaşık iki kat daha fazla gözlem vardır.", "Sol gruptaki dilimlerin yüzdeleri iki kat daha büyüktür.", "İki değişken arasında güçlü bir ilişki vardır.", "Sol grup sonuç değişkeninin ilk kategorisini iki kat sık seçmiştir."],
      a: 0, why: "Mozaikte sütun genişliği grubun toplamdaki payıdır. Dilim yüksekliği yüzdeyi, dilimlerin farklı olup olmaması ise ilişkiyi gösterir; genişlik bunları değil grup büyüklüğünü söyler." },
    { q: "Bir ankette spor yapıp yapmadıkları sorulan kızların %35'i, erkeklerin %35'i \"evet\" demiştir. İki grup için *segmented bar chart* çizilirse ne olur?",
      opts: ["\"Evet\" dilimleri farklı yükseklikte olur; cinsiyet ile spor yapma ilişkilidir.", "\"Evet\" dilimleri farklı genişlikte olur; bu ilişki olduğunu gösterir.", "Çubuklar gruplar farklı büyüklükte olduğu için farklı yükseklikte olur.", "İki çubukta \"evet\" dilimi aynı yükseklikte olur; bu örneklemde ilişki görünmüyor."],
      a: 3, why: "Yığılmış çubukların hepsi %100'dür ve \"evet\" dilimi her ikisinde de %35'tir; dilimler aynı olduğundan ilişki görünmez. C yanlış: çubuk yüksekliği grup büyüklüğüne değil yüzdeye bağlıdır." },
    { q: "Okul müzik kulübüne 9. sınıfta 20 öğrenciden 10'u, 10. sınıfta 80 öğrenciden 20'si katılıyor. Selin \"20 sayısı 10'dan büyük, o halde 10. sınıflar kulübü daha çok seviyor\" diyor. Bu çıkarım hakkında ne söylenebilir?",
      opts: ["Doğru, çünkü 10. sınıftan katılan öğrenci sayısı daha fazla.", "Yanlış, çünkü gruplar eşit büyüklükte değil; yüzdeler karşılaştırılmalı: 9. sınıfta %50, 10. sınıfta %25.", "Doğru, çünkü toplamlar farklı olduğunda sayılara bakmak her zaman daha güvenlidir.", "Yanlış, çünkü iki sınıfta da oran aynıdır."],
      a: 1, why: "Gruplar farklı büyüklükte olduğunda sayılar yanıltır; her grubun kendi içindeki oran karşılaştırılır: 10 ÷ 20 = %50, 20 ÷ 80 = %25. D yanlış: oranlar aynı değil, 9. sınıf daha yüksek." }
  ]
};
