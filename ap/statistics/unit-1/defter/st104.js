/* Kitora not defteri · st104 · 1C-2 Stemplot ve Histogram
   Kaynak: ap-videolar/src/episodes/st104 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st104",
  amac: "Bu konu sayısal veriyi göstermenin iki yolunu anlatıyor: küçük veri için her değeri gösteren *stemplot*, büyük veri için yakın değerleri gruplayan *histogram*. Key'i, aralık kurallarını, histogramın sınırlarını ve *bar chart* farkını öğreneceksin.",
  bolumler: [
    {
      baslik: "*Stem-and-leaf plot* nasıl kurulur?",
      kisa: "Her değeri gövde ve yaprağa böl; key yazmak zorunludur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌿", terim: "Stem-and-leaf plot", tr: "gövde-yaprak grafiği (stemplot)", tanim: "Her değeri ikiye bölüp satır satır dizen grafik; ==küçük sayısal veri== için.", ornek: "Tek dokunuşla 5 saniyede durdurulan kronometrenin 16 süresi." },
            { ikon: "🪵", terim: "Stem", tr: "gövde", tanim: "Değerin son basamağı dışındaki kısmı. Alt alta, hiç atlamadan yazılır.", ornek: "4,8 değerinde gövde 4." },
            { ikon: "🍃", terim: "Leaf", tr: "yaprak", tanim: "Değerin son basamağı; tek basamaktır ve satırda küçükten büyüğe dizilir.", ornek: "4,8 değerinde yaprak 8." },
            { ikon: "🔑", terim: "Key", tr: "anahtar", tanim: "Gövde ve yaprağın ne anlama geldiğini bağlam ve birimle söyler. ==Yazmak zorunludur.==", ornek: "Key: 4 | 8 = 4.8 seconds" }
          ] },
        { tip: "adimlar", baslik: "Üç adımda stemplot", adimlar: [
            { baslik: "1 · Gövdeleri yaz", metin: "Süreler (saniye): 4,8; 5,1; 4,9; 6,2; 5,0; 4,6; 5,3; 5,0; 4,4; 5,1; 4,9; 5,5; 4,7; 5,0; 4,8; 5,2. Alt alta 4, 5, 6 yaz ve yanlarına dik bir çizgi çek." },
            { baslik: "2 · Yaprakları ekle", metin: "Her değerin yaprağını gövdesinin yanına, veri sırasıyla ekle." },
            { baslik: "3 · Sırala", metin: "Her satırdaki yaprakları küçükten büyüğe diz." }
          ] },
        { tip: "sekil", baslik: "Sıralı stemplot (n = 16)", fig: { type: "stem", stems: [{ s: "4", leaves: "4 6 7 8 8 9 9" }, { s: "5", leaves: "0 0 0 1 1 2 3 5" }, { s: "6", leaves: "2" }], key: "4|8 = 4.8 seconds" } },
        { tip: "ornek", baslik: "Sayı kontrolü ve median", durum: "Sıralı stemplot: 4 | 4 6 7 8 8 9 9 · 5 | 0 0 0 1 1 2 3 5 · 6 | 2.",
          adimlar: ["Yaprakları say: 7 + 8 + 1 = 16, öğrenci sayısıyla aynı.", "n = 16 çift sayı: ortada 8. ve 9. değer var.", "Sayarak ilerle: 4'lü satır 7 değer; 8. ve 9. değer 5 | 0 ve 5 | 0, yani 5,0 ve 5,0.", "Median = (5,0 + 5,0) ÷ 2 = 5,0."],
          sonuc: "Stemplot her değeri gösterdiği için median'ı sayarak bulursun: ==median = 5,0 saniye==." }
      ]
    },
    {
      baslik: "Key ve üç kural",
      kisa: "Yaprak tek basamak, boş gövde atlanmaz, çok basamaklıysa yuvarla ya da truncate et.",
      bloklar: [
        { tip: "adimlar", baslik: "Üç kural", adimlar: [
            { baslik: "Yaprak tek basamak", metin: "Araya virgül konmaz: \"5 | 0 0 0 1\" doğru, \"5 | 0, 0, 0, 1\" yanlış; \"5 | 10\" (iki basamaklı yaprak) da yanlış." },
            { baslik: "Boş gövde atlanmaz", metin: "Boşluk da bilgidir; boşluk (*gap*) ve olası aykırı değer ancak böyle görünür." },
            { baslik: "Çok basamaklıysa önce yuvarla ya da *truncate* et", metin: "*Truncate* = son basamağı at. Round ile truncate farklı sonuç verebilir." }
          ] },
        { tip: "sekil", baslik: "Boş gövde atlanmaz: 12, 15, 18, 21, 24, 47", fig: { type: "stem", stems: [{ s: "1", leaves: "2 5 8" }, { s: "2", leaves: "1 4" }, { s: "3", leaves: "" }, { s: "4", leaves: "7" }], key: "1|2 = 12" } },
        { tip: "ornek", baslik: "23,7 dakika stemplot'a nasıl girer?", durum: "Değer 23,7 dakika; yaprak tek basamak olmalı.",
          adimlar: ["Truncate: son basamağı at, 23,7 → 23. Gövde 2, yaprak 3, yani 2 | 3.", "Round: 23,7 → 24. Gövde 2, yaprak 4, yani 2 | 4.", "Hangisini seçtiysen key'e yaz: Key: 2 | 3 = 23 minutes."],
          sonuc: "Truncate ile ==2 | 3==, round ile 2 | 4. Seçimi key'de belirt." },
        { tip: "tuzak", baslik: "Key'siz stemplot, atlanan satır", metin: "\"4 çizgi 8\" 48 mi, 4,8 mi? Bunu yalnızca *key* söyler; birim ve bağlamı da içermeli. Veride bir gövde hiç yoksa satırı atlamak da şekli bozar.", yanlis: "Key'e gerek yok, 4 | 8 zaten belli. / 3 gövdesinde değer yok, o satırı yazmayayım.", dogru: "Her zaman bağlam ve birimle key yaz; boş gövdeyi de yaz (3 | ): gap ancak böyle görünür." }
      ]
    },
    {
      baslik: "*Split stems*: gövdeyi ikiye böl",
      kisa: "Her gövdeyi iki kez yaz; amaç şekli daha net görmek.",
      bloklar: [
        { tip: "not", metin: "Üç satırlık stemplot'ta şekil seçilmiyor. Çözüm: ==her gövdeyi iki kez yaz==. İlk satıra 0–4 arası yapraklar, ikinci satıra 5–9 arası yapraklar." },
        { tip: "sekil", baslik: "Split stems (1 + 6 + 7 + 1 + 1 = 16 yaprak)", fig: { type: "stem", stems: [{ s: "4", leaves: "4" }, { s: "4", leaves: "6 7 8 8 9 9" }, { s: "5", leaves: "0 0 0 1 1 2 3" }, { s: "5", leaves: "5" }, { s: "6", leaves: "2" }], key: "4|8 = 4.8 seconds" } },
        { tip: "ornek", baslik: "Bölünmüş grafikte şekli oku", durum: "Split stemplot'ta en uzun iki satır 4 | 6 7 8 8 9 9 ve 5 | 0 0 0 1 1 2 3.",
          adimlar: ["Tepe: 5,0 saniye çevresinde, tek tepe.", "İki yan yaklaşık birbirinin aynası: kabaca simetrik.", "6,2 ötekilerden kopuk (5,5 ile 6,2 arasında boşluk): olası aykırı değer."],
          sonuc: "==Roughly symmetric==, 5,0 saniye çevresinde tek tepe, 6,2 olası *outlier*. Bölmenin tek amacı: *to see the shape more clearly*." }
      ]
    },
    {
      baslik: "Büyük veri: *histogram* nasıl kurulur?",
      kisa: "Histogram yakın değerleri eşit aralıklara gruplar; sol uç dahil, sağ uç hariç.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌿", baslik: "*Stemplot* ve *dotplot*", maddeler: ["Her değeri tek tek gösterir", "Küçük veri için", "Median'ı sayarak bulursun"] },
          sag: { ikon: "📊", baslik: "*Histogram*", maddeler: ["Sayısal veriyi eşit genişlikte aralıklara (*intervals*) gruplar", "Çubuklar bitişik; büyük veri için", "Tek tek değer görünmez"] },
          oyun: [
            { metin: "16 öğrencinin kronometre süreleri; median'ı sayarak bulmak istiyorsun.", cevap: "sol", neden: "Küçük veri, her değer görünür: *stemplot* ya da *dotplot*." },
            { metin: "500 öğrencinin okula geliş süresi.", cevap: "sag", neden: "500 değeri yaprak yaprak yazamazsın: *histogram*." },
            { metin: "12 kişinin uyku süresi.", cevap: "sol", neden: "Küçük sayısal veri: *dotplot*/*stemplot*." },
            { metin: "Bir ülkedeki 100 bin hanenin geliri.", cevap: "sag", neden: "Çok büyük veri: yakın değerler aralıklara gruplanır: *histogram*." }
          ] },
        { tip: "adimlar", baslik: "Üç adımda histogram: gezilen eyalet sayıları", adimlar: [
            { baslik: "1 · Eşit genişlikte aralıklar kur", metin: "30 öğrenciye kaç Amerikan eyaleti gezdikleri soruldu; en küçük değer 5. Beşerli alalım: 5'ten 10'a, 10'dan 15'e… Aralıklarda ==sol uç dahil, sağ uç hariç==: 10 değeri 10–15 aralığına girer." },
            { baslik: "2 · Her aralığı say", metin: "Her aralığa düşen kişi sayısını bul." },
            { baslik: "3 · Çubuk çiz", metin: "Her aralığa o yükseklikte, bitişik bir çubuk çiz; boş aralığın yüksekliği 0'dır. İki ekseni de etiketle ve ölçekle: yatayda değişken adı (+ birim), dikeyde frequency ya da relative frequency." }
          ] },
        { tip: "tablo", baslik: "Frekans tablosu (n = 30)", head: ["Interval", "Frequency", "Relative frequency"], rows: [
            ["5 to <10", "8", "8/30 = %26,7"],
            ["10 to <15", "13", "13/30 = %43,3"],
            ["15 to <20", "6", "6/30 = %20,0"],
            ["20 to <25", "2", "2/30 = %6,7"],
            ["25 to <30", "0", "0%"],
            ["30 to <35", "1", "1/30 = %3,3"],
            ["Toplam", "30", "%100"]
          ], vurgu: 1, not: "8 + 13 + 6 + 2 + 0 + 1 = 30. Veri: 31, 24, 20, 19, 18, 18, 17, 17, 15, 14, 14, 13, 13, 12, 12, 12, 12, 11, 11, 11, 11, 10, 9, 9, 9, 8, 8, 8, 5, 5." },
        { tip: "grafik", baslik: "Çubuklar yükseliyor", xlabel: "Gezilen eyalet sayısı", ylabel: "Kişi sayısı", xmax: 6, ymax: 14,
          xticks: [{ v: 0, label: "5" }, { v: 1, label: "10" }, { v: 2, label: "15" }, { v: 3, label: "20" }, { v: 4, label: "25" }, { v: 5, label: "30" }, { v: 6, label: "35" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }, { v: 12, label: "12" }, { v: 13, label: "13" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 0, noktalar: [[0, 0], [0, 0], [1, 0], [1, 0]] },
            { id: "b2", tip: "alan", renk: 0, noktalar: [[1, 0], [1, 0], [2, 0], [2, 0]] },
            { id: "b3", tip: "alan", renk: 0, noktalar: [[2, 0], [2, 0], [3, 0], [3, 0]] },
            { id: "b4", tip: "alan", renk: 0, noktalar: [[3, 0], [3, 0], [4, 0], [4, 0]] },
            { id: "b5", tip: "alan", renk: 0, noktalar: [[4, 0], [4, 0], [5, 0], [5, 0]] },
            { id: "b6", tip: "alan", renk: 0, noktalar: [[5, 0], [5, 0], [6, 0], [6, 0]] },
            { id: "t10", tip: "yazi", x: 1.5, y: 14, metin: "10 buraya ↓ [10, 15)", gizli: true },
            { id: "bos", tip: "yazi", x: 4.5, y: 1, metin: "boş (0)", gizli: true }
          ],
          durumlar: [
            { metin: "5'ten 10'a: 8 kişi. İlk çubuk 8 yüksekliğinde." , set: { b1: { noktalar: [[0, 0], [0, 8], [1, 8], [1, 0]] } } },
            { metin: "10'dan 15'e: 13 kişi (en yüksek çubuk); 15'ten 20'ye: 6 kişi. Çubuklar bitişik, arada boşluk yok.", set: { b2: { noktalar: [[1, 0], [1, 13], [2, 13], [2, 0]] }, b3: { noktalar: [[2, 0], [2, 6], [3, 6], [3, 0]] } } },
            { metin: "20–25: 2 kişi, 25–30: 0 kişi (boş ama eksen çizili), 30–35: 1 kişi (31 eyalet).", set: { b4: { noktalar: [[3, 0], [3, 2], [4, 2], [4, 0]] }, b6: { noktalar: [[5, 0], [5, 1], [6, 1], [6, 0]] } }, goster: ["bos"] },
            { metin: "Tam 10 eyalet gezen nereye girer? ==Sol uç dahil, sağ uç hariç==: 10, 5–10'a değil 10–15 çubuğuna girer.", goster: ["t10"] }
          ] }
      ]
    },
    {
      baslik: "*Frequency* ve *relative frequency* histogramı",
      kisa: "Şekil aynı kalır; yalnızca dikey eksen sayıdan yüzdeye döner.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔢", baslik: "*Frequency histogram*", maddeler: ["Dikeyde sayı (kaç gözlem)", "8, 13, 6, 2, 0, 1"] },
          sag: { ikon: "％", baslik: "*Relative frequency histogram*", maddeler: ["Dikeyde oran ya da yüzde", "%26,7; %43,3; %20; %6,7; %0; %3,3"] } },
        { tip: "sekil", baslik: "Relative frequency histogram", fig: { type: "hist", bins: [{ from: 5, to: 10, n: 26.7 }, { from: 10, to: 15, n: 43.3 }, { from: 15, to: 20, n: 20 }, { from: 20, to: 25, n: 6.7 }, { from: 25, to: 30, n: 0 }, { from: 30, to: 35, n: 3.3 }], label: "Number of states visited", ylabel: "Relative frequency (%)" } },
        { tip: "ornek", baslik: "Yüzdeleri hesapla", durum: "Frekanslar 8, 13, 6, 2, 0, 1 ve toplam 30.",
          adimlar: ["8 ÷ 30 = 0,267 → %26,7.", "13 ÷ 30 = 0,433 → %43,3.", "6 ÷ 30 = 0,2 → %20.", "2 ÷ 30 = 0,067 → %6,7; 0 ÷ 30 = 0; 1 ÷ 30 = 0,033 → %3,3.", "Toplam: 26,7 + 43,3 + 20 + 6,7 + 0 + 3,3 = 100."],
          sonuc: "Çubukların şekli aynı kalır; değişen yalnızca ==dikey eksen==. Grup büyüklükleri farklı iki histogramı karşılaştırırken relative frequency kullan." }
      ]
    },
    {
      baslik: "Histogram neyi gösteremez?",
      kisa: "Histogram tek tek değerleri göstermez; çubuğun içindeki sınır bilinemez.",
      bloklar: [
        { tip: "grafik", baslik: "İddia: \"çoğu bir düzineden az eyalet gezmiş\"", xlabel: "Gezilen eyalet sayısı", ylabel: "Kişi sayısı", xmax: 6, ymax: 14,
          xticks: [{ v: 0, label: "5" }, { v: 1, label: "10" }, { v: 2, label: "15" }, { v: 3, label: "20" }, { v: 4, label: "25" }, { v: 5, label: "30" }, { v: 6, label: "35" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }, { v: 13, label: "13" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 1, noktalar: [[0, 0], [0, 8], [1, 8], [1, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[1, 0], [1, 13], [2, 13], [2, 0]] },
            { id: "b3", tip: "alan", renk: 1, noktalar: [[2, 0], [2, 6], [3, 6], [3, 0]] },
            { id: "b4", tip: "alan", renk: 1, noktalar: [[3, 0], [3, 2], [4, 2], [4, 0]] },
            { id: "b6", tip: "alan", renk: 1, noktalar: [[5, 0], [5, 1], [6, 1], [6, 0]] },
            { id: "c12", tip: "cizgi", renk: 0, kesik: true, from: [1.4, 0], to: [1.4, 14], etiket: "12", gizli: true },
            { id: "t8", tip: "yazi", x: 0.5, y: 9, metin: "8 kişi: <10", gizli: true },
            { id: "t21", tip: "yazi", x: 2.2, y: 14, metin: "8+13 = 21: <15", gizli: true },
            { id: "q", tip: "yazi", x: 3.6, y: 9, metin: "<12: 8 ile 21 arası?", gizli: true }
          ],
          durumlar: [
            { metin: "İddia: \"12'den az\". 12, 10–15 çubuğunun içinde kalıyor; o çubuk bölünemez.", goster: ["c12"] },
            { metin: "Kesin bildiğimiz: 10'dan az 8 kişi var.", set: { b1: { noktalar: [[0, 0], [0, 8], [1, 8], [1, 0]] } }, goster: ["t8"] },
            { metin: "15'ten az: 8 + 13 = 21 kişi. 12'den azı bunların arasında bir yerde.", goster: ["t21"] },
            { metin: "12'den az gezenler 8 ile 21 arasında; yarısı 15 kişi. ==Geçti mi, bilemeyiz.== Bu grafik iddiayı gerekçelendiremez.", goster: ["q"] }
          ] },
        { tip: "ornek", baslik: "İddia: \"çoğu 12'den az eyalet gezmiş\"", durum: "30 öğrenci, aralıklar 5'er. 12, [10, 15) aralığının içinde.",
          adimlar: ["Kesin: 10'dan az 8 kişi, 15'ten az 8 + 13 = 21 kişi.", "12'den az gezenler 8 ile 21 arasında; çoğunluk için 15'ten fazlası gerekir (30'un yarısı 15).", "Bu aralıkta 15 de var 20 de; histogramla karar verilemez."],
          sonuc: "Cevap: ==bu grafikten gerekçelendirilemez== (cannot be determined). Ham veride 12'den az gezen 13 kişi vardı: 13/30 = %43,3, yani iddia aslında doğru değil; ama bunu histogram değil ham veri gösterir." },
        { tip: "tuzak", baslik: "Sınır bir çubuğun içinde mi, kenarında mı?", metin: "Sınır çubuk kenarındaysa (\"30 dakika veya daha fazla\") çubukları toplarsın; çubuğun içindeyse histogram yetmez. Merkez ve yayılım da yalnızca tahmin edilir (median 15. ve 16. değer, 10–15 aralığında).", yanlis: "Aralığın yarısı 12'den küçüktür, oranla 6 kişi sayarım.", dogru: "Çubuğun içinde değer dağılımını bilmiyoruz; \"cannot be determined from the graph\" yaz." }
      ]
    },
    {
      baslik: "Histogram ≠ *bar chart*",
      kisa: "Histogram sayısal, bar chart kategorik veri içindir; şekil yalnızca histogramda konuşulur.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🗂️", baslik: "*Bar chart*", maddeler: ["Kategorik veri", "Çubuklar ayrı, aralarında boşluk", "Sıra değişebilir", "\"Skewed\" denmez"] },
          sag: { ikon: "📊", baslik: "*Histogram*", maddeler: ["Sayısal veri", "Yatay eksen sayı doğrusu, çubuklar bitişik", "Sıra sabit", "Şekilden söz edilir (*skewed right*…)"] },
          oyun: [
            { metin: "En sevilen spor: Football 12, Basketball 9, Volleyball 6, Swimming 3.", cevap: "sol", neden: "Spor bir kategori: *bar chart*. Çubuk yerleri değişse grafik yine doğru." },
            { metin: "Gezilen eyalet sayıları 5–10, 10–15, 15–20…", cevap: "sag", neden: "Sayısal değişken: *histogram*; aralıklar sırayla gider." },
            { metin: "Yatay eksende restoran adları var.", cevap: "sol", neden: "Kategorik eksen: *bar chart*." },
            { metin: "\"Şekil sağa çarpık\" diyebiliyorsun.", cevap: "sag", neden: "Şekil yalnızca sayısal veride: *histogram*." },
            { metin: "Forma numaralarına göre oyuncu sayısı.", cevap: "sol", neden: "Forma numarası sayı gibi görünür ama etikettir (categorical): *bar chart*." }
          ] },
        { tip: "sekil", baslik: "Bar chart: en sevilen spor", fig: { type: "bar", cats: ["Football", "Basketball", "Volleyball", "Swimming"], series: [{ name: "Öğrenci", values: [12, 9, 6, 3] }], ylabel: "Frequency" } },
        { tip: "tuzak", baslik: "Caution: histogram ≠ bar chart", metin: "Yalnızca sayısal veride şekil konuşulur. Bizim eyalet histogramının kuyruğu sağa uzuyor: *skewed right*.", yanlis: "Spor bar chart'ı sola çarpık.", dogru: "*Bar chart* için shape (skewed, symmetric) denmez. Sayı görünen her şey quantitative değildir (forma numarası, posta kodu): onlar için histogram çizilmez." }
      ]
    },
    {
      baslik: "Hesap makinesinde histogram",
      kisa: "TI-84'te veriyi L1'e yaz, STAT PLOT'u aç, ZoomStat ile çiz.",
      bloklar: [
        { tip: "not", metin: "Sınavda ya da ödevde veriden histogram çizmen gerekirse hesap makinesi işi hızlandırır. Çubuk genişliğini (*bin width*) sen ayarlarsın." },
        { tip: "adimlar", baslik: "TI-84 ile adım adım", adimlar: [
            { baslik: "1 · Verileri gir", metin: "STAT → 1: Edit; verileri L1 listesine yaz." },
            { baslik: "2 · Grafiği aç", metin: "2nd → Y= (STAT PLOT) → 1: Plot1 → On; Type olarak üçüncü simgeyi (histogram) seç; Xlist: L1, Freq: 1." },
            { baslik: "3 · Çiz", metin: "ZOOM → 9: ZoomStat." },
            { baslik: "4 · Çubuk genişliğini ayarla", metin: "WINDOW menüsünde Xscl = çubuk (bin) genişliği; örnekte Xmin = 5, Xmax = 35, Xscl = 5; sonra GRAPH." },
            { baslik: "5 · Oku", metin: "TRACE ile gez: her çubuk için min, max< ve n okunur (örnek: min = 10, max < 15, n = 13)." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Stemplot*: gövde | yaprak ve mutlaka *key* (bağlam + birim). Yaprak tek basamak, sıralı, boş gövde atlanmaz.",
            "Şekil seçilemiyorsa *split stems*: yaprak 0–4 ilk satıra, 5–9 ikinci satıra.",
            "Çok basamaklı veride önce yuvarla ya da *truncate* et (23,7 → 23 → 2 | 3).",
            "*Stemplot* ve *dotplot* her değeri gösterir (median sayarak bulunur); büyük veride *histogram*.",
            "Histogramda aralıklar eşit genişlikte, sol uç dahil sağ uç hariç, çubuklar bitişik, eksenler etiketli ve ölçekli.",
            "*Frequency* ve *relative frequency* histogramının şekli aynıdır; yalnızca dikey eksen değişir (13/30 = %43,3).",
            "Histogram tek tek değerleri göstermez: merkez ve yayılım tahmin edilir; çubuğun içindeki sınır için \"cannot be determined\".",
            "Histogram sayısal, *bar chart* kategorik veri içindir; shape yalnızca histogramda konuşulur."
          ] }
      ]
    }
  ]
};
