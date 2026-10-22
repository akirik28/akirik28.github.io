/* Kitora not defteri · st102 · 1B Kategorik Veri
   Kaynak: ap-videolar/src/episodes/st102 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st102",
  ozet: "Kategorik veriyi sayarak (*frequency table*), oranlayarak (*relative frequency table*) ve çizerek (*bar chart*, *pie chart*) göstermeyi öğreneceksin. *Majority* iddialarını nasıl sınayacağını, farklı büyüklükteki grupları neden yüzdeyle karşılaştırman gerektiğini ve grafiklerin aynı veriyle nasıl yalan söyleyebileceğini göreceksin.",
  bolumler: [
    {
      baslik: "27 cevap, bir iddia",
      bloklar: [
        { tip: "hikaye", ikon: "🍗", baslik: "En iyi tavuk sandviçi kimde?",
          metin: "Bir öğretmen sınıfına soruyor: en iyi tavuk sandviçini kim yapıyor? Elinde 27 cevaplık karışık bir liste var. Biri \"sınıfın çoğunluğu Popeye's dedi\" diyor. Doğru mu? Listeye bakarak söylemek zor. Bugün listeyi önce sayacağız, sonra çizeceğiz; bir de kötü bir grafiğin aynı veriyle nasıl yalan söylediğini göreceğiz." },
        { tip: "sayilar", ogeler: [
            { deger: 27, etiket: "öğrenci cevabı (n = 27)" },
            { deger: 4, etiket: "restoran seçeneği" }
          ] },
        { tip: "adimlar", baslik: "Yol haritası", adimlar: [
            { baslik: "Say", metin: "*Frequency table* ile her kategoriyi say." },
            { baslik: "Çiz", metin: "*Bar chart* ve *pie chart* ile göster." },
            { baslik: "Kanma", metin: "Yanıltıcı grafiklerin üç hilesini tanı." }
          ] }
      ]
    },
    {
      baslik: "*Frequency table*: sayarak özetle",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏷️", terim: "Categorical variable", tr: "kategorik değişken", tanim: "Değerleri kategori olan değişken; burada \"en iyi sandviç\", değerleri restoran adları.", ornek: "Popeye's, Shake Shack, Chick-fil-A, KFC." },
            { ikon: "📈", terim: "Distribution", tr: "dağılım", tanim: "Değişkenin hangi değerleri ne sıklıkla aldığı.", ornek: "Hangi restoran kaç oy aldı?" },
            { ikon: "🔢", terim: "Frequency", tr: "frekans", tanim: "Bir kategorideki birim sayısı (count).", ornek: "Popeye's için 14." },
            { ikon: "🗒️", terim: "Frequency table", tr: "frekans tablosu", tanim: "Her kategorinin frekansını gösteren tablo.", ornek: "Popeye's 14, Shake Shack 6, Chick-fil-A 5, KFC 2." }
          ] },
        { tip: "sekil", baslik: "Frekans tablosu (n = 27)", fig: { type: "table", head: ["Restaurant", "Frequency"], rows: [["Popeye's", 14], ["Shake Shack", 6], ["Chick-fil-A", 5], ["KFC", 2], ["Total", 27]] } },
        { tip: "ornek", baslik: "Toplam kontrolü", durum: "Tabloya yazılan frekanslar 14, 6, 5 ve 2.",
          adimlar: ["14 + 6 = 20.", "20 + 5 = 25.", "25 + 2 = 27."],
          sonuc: "Toplam 27; sorulan kişi sayısıyla aynı. ==Frekansların toplamı örneklem büyüklüğünü vermeli.==" }
      ]
    },
    {
      baslik: "*Relative frequency table*: paya çevir",
      bloklar: [
        { tip: "not", metin: "14 kişi çok mu, az mı? Bunu söylemek için sayıyı toplama bölüp bir paya çeviririz." },
        { tip: "formul", parcalar: [{ t: "Relative frequency", alt: "göreli frekans (pay)" }, "=", { t: "Frequency", alt: "kategorideki sayı" }, "÷", { t: "Total", alt: "toplam birim" }], aciklama: "Sonuç oran (0,519) ya da yüzde (51,9%) olarak yazılabilir; ikisi de doğrudur." },
        { tip: "tablo", baslik: "Relative frequency table", head: ["Restaurant", "Frequency", "Hesap", "Relative frequency"], rows: [
            ["Popeye's", "14", "14 ÷ 27", "0,519 = 51,9%"],
            ["Shake Shack", "6", "6 ÷ 27", "0,222 = 22,2%"],
            ["Chick-fil-A", "5", "5 ÷ 27", "0,185 = 18,5%"],
            ["KFC", "2", "2 ÷ 27", "0,074 = 7,4%"],
            ["Total", "27", "", "100%"]
          ], vurgu: 0, not: "51,9 + 22,2 + 18,5 + 7,4 = 100. Sözlü anlatımda yuvarlanmış hali: yüzde 52, 22, 19 ve 7." },
        { tip: "ornek", baslik: "Popeye's'in payı", durum: "14 kişi Popeye's dedi, toplam 27 kişi var.",
          adimlar: ["Frekans ÷ toplam = 14 ÷ 27.", "14 ÷ 27 ≈ 0,5185, yani 0,519 (üç basamak).", "Yüzdeye çevir: 0,519 × 100 = 51,9%."],
          sonuc: "Popeye's'i seçenlerin payı yaklaşık ==%51,9==." },
        { tip: "tuzak", baslik: "Frekanslar veri değildir", metin: "Tablodaki 14, 6, 5 ve 2 verinin kendisi değil, özetidir.", yanlis: "Veri 14, 6, 5, 2'dir.", dogru: "Veri, 27 öğrencinin tek tek cevaplarıdır; frekanslar ve relative frequency'ler bu veriyi özetler." }
      ]
    },
    {
      baslik: "*Majority*: çoğunluk iddiası",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗳️", terim: "Majority", tr: "çoğunluk", tanim: "Yarıdan fazlası, yani ==%50'den fazlası==. En çok oy almak yetmez.", ornek: "27 kişide en az 14 oy gerekir (14/27 = %51,9)." }
          ] },
        { tip: "grafik", baslik: "50% çizgisi: iddia sınanıyor", xlabel: "Yüzde", ylabel: "", xmax: 10, ymax: 4,
          xticks: [{ v: 0, label: "0%" }, { v: 5, label: "50%" }, { v: 10, label: "100%" }],
          ogeler: [
            { id: "yari", tip: "cizgi", renk: 1, kesik: true, from: [5, 0.3], to: [5, 3.6], etiket: "50%", gizli: true },
            { id: "b14", tip: "alan", renk: 0, noktalar: [[0, 0.8], [0, 1.6], [0, 1.6], [0, 0.8]], gizli: true },
            { id: "t14", tip: "yazi", x: 7.3, y: 1.1, metin: "14/27 = 51,9% ✓", gizli: true },
            { id: "b13", tip: "alan", renk: 2, noktalar: [[0, 2.1], [0, 2.9], [0, 2.9], [0, 2.1]], gizli: true },
            { id: "t13", tip: "yazi", x: 7.3, y: 2.4, metin: "13/27 = 48,1% ✗", gizli: true }
          ],
          durumlar: [
            { metin: "Çoğunluk için eşik ==%50==. Kesikli çizgi bu eşiği gösteriyor.", goster: ["yari"] },
            { metin: "Popeye's: 14/27 = %51,9. Çubuk 50 çizgisini kıl payı geçiyor: iddia doğru.", set: { b14: { noktalar: [[0, 0.8], [0, 1.6], [5.19, 1.6], [5.19, 0.8]] } }, goster: ["b14", "t14"] },
            { metin: "Bir oy eksik olsaydı: 13/27 = %48,1. Yine birinci, ama çizginin solunda: *majority* değil.", set: { b13: { noktalar: [[0, 2.1], [0, 2.9], [4.81, 2.9], [4.81, 2.1]] } }, goster: ["b13", "t13"] }
          ] },
        { tip: "ornek", baslik: "Sınav cevabı: \"Veri bu iddiayı destekliyor mu?\"", durum: "İddia: \"Sınıfın çoğunluğu Popeye's'i seçti.\" Veri: 27 öğrenciden 14'ü Popeye's dedi.",
          adimlar: ["Eşik: majority = %50'den fazlası.", "Pay: 14/27 = %51,9.", "Karşılaştır: 51,9% > 50%."],
          sonuc: "Evet, destekliyor: \"14/27 = 51,9% of the students chose Popeye's, which is more than 50%.\" Gerekçede sayıyı ve eşiği göster." },
        { tip: "ikili", sol: { ikon: "🥇", baslik: "En çok seçilen (*most common*)", maddeler: ["Diğerlerinden yüksek", "%50'nin altında olabilir", "Örnek: 13/27 = %48,1 ile birinci"] },
          sag: { ikon: "🗳️", baslik: "*Majority*", maddeler: ["%50'den fazla", "Yarıyı geçmek şart", "Örnek: 14/27 = %51,9"] },
          oyun: [
            { metin: "27 kişide 14 oy alan seçenek.", cevap: "sag", neden: "14/27 = %51,9 > 50: *majority*." },
            { metin: "27 kişide 13 oy alıp birinci olan seçenek.", cevap: "sol", neden: "13/27 = %48,1 < 50: birinci ama *majority* değil." },
            { metin: "40 kişide 18 oy alıp birinci olan seçenek.", cevap: "sol", neden: "18/40 = %45 < 50: en çok seçilen, *majority* değil." },
            { metin: "40 kişide 21 oy alan seçenek.", cevap: "sag", neden: "21/40 = %52,5 > 50: *majority*." }
          ] },
        { tip: "tuzak", baslik: "Birinci olmak çoğunluk değildir", metin: "\"En çok oy aldı\" cümlesi çoğunluk demek değildir.", yanlis: "13 oyla birinci olduysa çoğunluğu sağlamıştır.", dogru: "*Majority* = %50'den fazlası. 13/27 = %48,1 yetmez." }
      ]
    },
    {
      baslik: "*Bar chart*: çubuk grafik",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📊", terim: "Bar chart", tr: "çubuk grafik", tanim: "Her kategoriye bir çubuk; yükseklik frekansı ya da yüzdeyi gösterir.", ornek: "Popeye's çubuğu 51,9, KFC çubuğu 7,4." }
          ] },
        { tip: "sekil", baslik: "Sandviç anketi: yüzde olarak", fig: { type: "bar", cats: ["Popeye's", "Shake Shack", "Chick-fil-A", "KFC"], series: [{ name: "Percent of students", values: [51.9, 22.2, 18.5, 7.4] }], ylabel: "Percent of students" } },
        { tip: "adimlar", baslik: "Çubuk grafik kuralları", adimlar: [
            { baslik: "Eşit genişlik", metin: "Bütün çubuklar aynı genişlikte olsun." },
            { baslik: "Boşluk", metin: "Çubukların arasında boşluk kalsın." },
            { baslik: "Etiketli eksenler", metin: "Yatay eksene \"Restaurant\", dikey eksene \"Percent of students\" yaz." }
          ] },
        { tip: "ornek", baslik: "Grafiğe bak: ne görüyorum?", durum: "Yukarıdaki grafikte çubukları yorumlayalım.",
          adimlar: ["Popeye's açık ara önde (%51,9).", "Shake Shack (%22,2) ile Chick-fil-A (%18,5) birbirine yakın.", "KFC en geride (%7,4)."],
          sonuc: "Grafik çizmek amaç değil, ==yorumlamak== amaç. Kategorilerin sırası serbesttir." },
        { tip: "tuzak", baslik: "Bar chart ≠ histogram", metin: "Çubuk grafik kategorik, histogram sayısal veri içindir; ayrıntısı sonraki bölümlerde.", yanlis: "Çubuk görünce histogram deriz.", dogru: "Kategorik değişken → *bar chart* (aralıklı çubuklar). Sayısal değişken → histogram." }
      ]
    },
    {
      baslik: "*Pie chart*: pasta grafik",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📊", baslik: "*Bar chart*", maddeler: ["Her zaman çizilebilir", "Yakın değerleri kıyaslamak kolay", "Birden fazla seçilen anketlerde de olur"] },
          sag: { ikon: "🥧", baslik: "*Pie chart*", maddeler: ["Bütünün parçalarını gösterir", "Dilimler toplamı %100 olmalı", "Yakın dilimleri kıyaslamak zor"] },
          oyun: [
            { metin: "Her öğrenci tek bir restoran seçti; yüzdeler 100'e topluyor.", cevap: "sag", neden: "Kategoriler bir bütünün parçaları: *pie chart* çizilebilir." },
            { metin: "Herkes birden fazla restoran seçebildi; yüzdeler toplam 180.", cevap: "sol", neden: "Toplam %100'ü aşıyor, dilim olmaz: *bar chart*." },
            { metin: "Shake Shack %22,2 ile Chick-fil-A %18,5 hangisi büyük, hemen görmek istiyorsun.", cevap: "sol", neden: "Çubuklarda fark hemen görünür; dilimlerde zor." },
            { metin: "Popeye's'in pastanın yarısından biraz fazlasını kapladığını göstermek istiyorsun.", cevap: "sag", neden: "Bütün içindeki pay vurgusu için *pie chart* uygun." }
          ] },
        { tip: "ornek", baslik: "Pasta çizilebilir mi?", durum: "Her öğrenci birden fazla restoran seçebilseydi: Popeye's %70, Shake Shack %50, Chick-fil-A %40, KFC %20.",
          adimlar: ["Topla: 70 + 50 + 40 + 20 = 180.", "180 ≠ 100: kategoriler tek bir bütünü oluşturmuyor.", "Dilimler pastaya sığmaz."],
          sonuc: "==Pie chart çizilemez==; bunun yerine bar chart kullanılır. Gerçek anketteki 51,9 + 22,2 + 18,5 + 7,4 = 100 olduğu için orada pasta çizilebilir." }
      ]
    },
    {
      baslik: "İki grubu karşılaştırmak",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "↔️", terim: "Side-by-side bar chart", tr: "yan yana çubuk grafik", tanim: "Bir categorical variable'ın dağılımını iki ya da daha fazla grupta, kategori kategori yan yana çubuklarla karşılaştırır.", ornek: "9. ve 12. sınıfların öğle yemeği tercihi." }
          ] },
        { tip: "tablo", baslik: "Öğle yemeği anketi", head: ["Lunch choice", "Grade 9 (n = 200)", "Grade 12 (n = 50)"], rows: [
            ["Cafeteria", "100", "10"],
            ["Canteen", "60", "30"],
            ["From home", "40", "10"]
          ], not: "9. sınıfta 100 + 60 + 40 = 200; 12. sınıfta 10 + 30 + 10 = 50." },
        { tip: "sekil", baslik: "Frekansla çizilen yan yana grafik", fig: { type: "bar", cats: ["Cafeteria", "Canteen", "From home"], series: [{ name: "Grade 9", values: [100, 60, 40] }, { name: "Grade 12", values: [10, 30, 10] }], ylabel: "Frequency" } },
        { tip: "not", metin: "Bu grafikte kantin için 9. sınıfın çubuğu (60) 12. sınıfınkinin (30) iki katı. Demek ki kantini 9'lar daha çok seviyor? ==Hayır.== Gruplar farklı büyüklükte: 200 kişiye karşı 50 kişi." },
        { tip: "ornek", baslik: "Yüzdeye çevir", durum: "Kantini seçenler: 9. sınıftan 60 kişi (n = 200), 12. sınıftan 30 kişi (n = 50).",
          adimlar: ["9. sınıf: 60 ÷ 200 = 0,30 = %30.", "12. sınıf: 30 ÷ 50 = 0,60 = %60.", "Karşılaştır: %60, %30'un iki katı."],
          sonuc: "Sonuç tersine döndü: kantin ==12. sınıfta iki kat popüler==. Grup büyüklükleri farklıysa *relative frequency* ile karşılaştır." },
        { tip: "sekil", baslik: "Aynı veri, yüzdeyle", fig: { type: "bar", cats: ["Cafeteria", "Canteen", "From home"], series: [{ name: "Grade 9", values: [50, 30, 20] }, { name: "Grade 12", values: [20, 60, 20] }], ylabel: "Percent" } },
        { tip: "tuzak", baslik: "Frekansla karşılaştırma", metin: "Gruplar eşit büyüklükte değilse çubuk yükseklikleri yanıltır.", yanlis: "9. sınıfın çubuğu uzun, o hâlde kantini 9'lar daha çok seviyor.", dogru: "Yüzdeye çevir: %30 (9. sınıf) ve %60 (12. sınıf)." },
        { tip: "tuzak", baslik: "Karşılaştırma tek cümlede yazılır", metin: "\"Compare the distributions\" sorularında iki grubu aynı cümlede, karşılaştırma sözcükleriyle ve bağlamıyla yaz. Örnek (başkan yaşı anketi): \"A greater percentage of 18- to 29-year-olds than of 60- to 69-year-olds chose …\".", yanlis: "Önce bir grubu, sonra ötekini ayrı ayrı anlat.", dogru: "İki grubu tek cümlede \"daha büyük yüzde, daha küçük yüzde\" diyerek kıyasla; iki ayrı liste karşılaştırma sayılmaz." }
      ]
    },
    {
      baslik: "Yalan söyleyen grafikler",
      bloklar: [
        { tip: "harita", merkez: "Yanıltıcı grafiğin 3 hilesi", dallar: [
            { baslik: "Resimli çubuk", alt: "Göz yüksekliğe değil alana bakar" },
            { baslik: "Sıfırdan başlamayan eksen", alt: "Küçük fark dev görünür" },
            { baslik: "Eşit olmayan genişlik", alt: "Geniş çubuk daha büyük görünür" }
          ] },
        { tip: "grafik", baslik: "Hile 1: topla çizilen çubuk (Dwyane Wade)", xlabel: "Asist · Top çalma", ylabel: "Maç başına", xmax: 12, ymax: 8,
          yticks: [{ v: 2.2, label: "2,2" }, { v: 7.5, label: "7,5" }],
          ogeler: [
            { id: "st", tip: "alan", renk: 1, noktalar: [[1, 0], [1, 2.2], [2, 2.2], [2, 0]] },
            { id: "as", tip: "alan", renk: 0, noktalar: [[4, 0], [4, 7.5], [5, 7.5], [5, 0]] },
            { id: "y1", tip: "yazi", x: 1.5, y: 3.0, metin: "Steals 2,2", gizli: true },
            { id: "y2", tip: "yazi", x: 4.5, y: 8.0, metin: "Assists 7,5", gizli: true },
            { id: "yuk", tip: "yazi", x: 9.5, y: 1.3, metin: "Yükseklik ≈ 3,4×", gizli: true },
            { id: "alan", tip: "yazi", x: 9.5, y: 0.3, metin: "Alan ≈ 11,6×", gizli: true }
          ],
          durumlar: [
            { metin: "Dürüst grafik: eşit genişlikte iki çubuk. Asist (7,5) ile top çalma (2,2) boyu 3,4 kat fark gösteriyor.", goster: ["y1", "y2"] },
            { metin: "Çubuk yerine basketbol topu resmi koyunca resim orantılı büyür: eni de boyu da 3,4 kat artar.", set: { st: { noktalar: [[1, 0], [1, 2.2], [3.2, 2.2], [3.2, 0]] }, as: { noktalar: [[4, 0], [4, 7.5], [11.5, 7.5], [11.5, 0]] } } },
            { metin: "Yükseklik farkı doğru (≈ 3,4 kat) ama göz alana bakar: alan 3,4² ≈ 11,6 kat. Fark olduğundan çok büyük görünür.", goster: ["yuk", "alan"] }
          ] },
        { tip: "ornek", baslik: "Alan neden 11,6 kat?", durum: "Dwyane Wade (2008–2009): maç başına 7,5 asist ve 2,2 top çalma.",
          adimlar: ["Yükseklik oranı: 7,5 ÷ 2,2 ≈ 3,41 (yaklaşık 3 kat).", "Resim orantılı büyüdüğü için en de 3,41 kat artar.", "Alan oranı: 3,41² ≈ 11,6."],
          sonuc: "Yükseklik farkı ≈ 3,4 kat, ==alan farkı ≈ 11,6 kat (9 kattan fazla)==. Çözüm: resim yerine eşit genişlikte çubuklar." },
        { tip: "grafik", baslik: "Hile 2: sıfırdan başlamayan eksen", xlabel: "İçecek", ylabel: "Memnuniyet (%)", xmax: 6, ymax: 8,
          xticks: [{ v: 1.5, label: "A" }, { v: 4.5, label: "B" }],
          yticks: [{ v: 0, label: "76" }, { v: 2, label: "78" }, { v: 4, label: "80" }, { v: 6, label: "82" }],
          ogeler: [
            { id: "ba", tip: "alan", renk: 1, noktalar: [[1, 0], [1, 0], [2, 0], [2, 0]] },
            { id: "bb", tip: "alan", renk: 0, noktalar: [[4, 0], [4, 0], [5, 0], [5, 0]] },
            { id: "x3", tip: "yazi", x: 3, y: 7.3, metin: "B, A'nın 3 katı mı?", gizli: true }
          ],
          durumlar: [
            { metin: "İki içeceğin memnuniyeti %78 ve %82; fark yalnızca 4 puan. Ama dikey eksen 76'dan başlıyor." },
            { metin: "A'nın çubuğu 76'dan 78'e: 2 birim. B'ninki 76'dan 82'ye: 6 birim.", set: { ba: { noktalar: [[1, 0], [1, 2], [2, 2], [2, 0]] }, bb: { noktalar: [[4, 0], [4, 6], [5, 6], [5, 0]] } } },
            { metin: "6 ÷ 2 = 3: B üç kat uzun görünüyor. Gerçek oran ise 82 ÷ 78 ≈ 1,05.", goster: ["x3"] }
          ] },
        { tip: "sekil", baslik: "Aynı veri, sıfırdan başlayan eksenle", fig: { type: "bar", cats: ["Drink A", "Drink B"], series: [{ name: "Memnuniyet", values: [78, 82] }], ylabel: "Percent satisfied" } },
        { tip: "tuzak", baslik: "Eşit olmayan genişlik", metin: "Üçüncü hile: aynı yükseklikte iki çubuktan biri üç kat geniş çizilirse, geniş olan daha büyük görünür.", yanlis: "Çubuk genişliği önemli değil, yüksekliğe bakılır.", dogru: "Çubuklar ==eşit genişlikte==, eksen ==sıfırdan başlayan==, resim değil çubuk olmalı." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Frequency table* sayar; *relative frequency table* toplama böler (14/27 ≈ %51,9). Frekanslar toplamı n'yi vermeli.",
            "Frekanslar ve oranlar veri değil, özettir; veri bireylerin tek tek cevaplarıdır.",
            "*Majority* = %50'den fazlası; en çok seçilen olmak yetmez (51,9% evet, 48,1% hayır).",
            "*Bar chart* her zaman çizilir: eşit genişlik, aralık, etiketli eksenler. Grafiğe bakınca \"ne görüyorum?\" diye sor.",
            "*Pie chart* yalnızca kategoriler bir bütünün parçalarıysa (toplam %100) çizilir.",
            "İki grubu *side-by-side bar chart* ile karşılaştır; grup büyüklükleri farklıysa *relative frequency* kullan (%30 ve %60).",
            "Karşılaştırmayı tek cümlede yaz: \"A greater percentage of … than of …\".",
            "Yanıltıcı grafik üçlüsü: resimli çubuk (alan), sıfırdan başlamayan eksen, eşit olmayan genişlik.",
            "Bar chart ≠ histogram: kategorik ↔ sayısal."
          ] }
      ]
    }
  ]
};
