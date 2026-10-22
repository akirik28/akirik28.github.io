/* Kitora not defteri · st106 · 1D-2 Yayılım: Range, SD, IQR
   Kaynak: ap-videolar/src/episodes/st106 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st106",
  amac: "Bu konu değerlerin ne kadar dağıldığını (*variability*) ölçmeyi anlatıyor. Üç ölçüyü öğreneceksin: *range*, *standard deviation* ve *IQR*; ayrıca hangisinin uç değerlerden etkilenmediğini (*resistant*) ve hangi merkez ölçüsüyle birlikte kullanılacağını.",
  bolumler: [
    {
      baslik: "Aynı merkez, farklı yayılım",
      kisa: "Merkez aynı olsa da veriler ne kadar dağıldığıyla ayrışır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "↔️", terim: "Variability", tr: "yayılım", tanim: "Değerlerin birbirinden (ve merkezden) ne kadar farklı olduğu.", ornek: "A hattı az, B hattı çok yayılmış." }
          ] },
        { tip: "ornek", baslik: "İki otobüs hattı: ikisinin de mean'i 30", durum: "Okula giden iki hattın süreleri (dakika). A: 28, 29, 30, 31, 32 · B: 15, 22, 30, 38, 45. Geç kalmak istemiyorsan hangisine binersin?",
          adimlar: ["A toplamı: 28 + 29 + 30 + 31 + 32 = 150; 150 ÷ 5 = 30.", "B toplamı: 15 + 22 + 30 + 38 + 45 = 150; 150 ÷ 5 = 30.", "Merkez aynı, ama A'nın değerleri 30'un hemen çevresinde, B'ninkiler çok uzakta."],
          sonuc: "==Merkez aynı, yayılım farklı.== Okula zamanında varmak istiyorsan A hattı daha güvenilir." },
        { tip: "sekil", baslik: "B hattı: saçılmış", fig: { type: "dot", values: [15, 22, 30, 38, 45], label: "Commute time, line B (min)" } },
        { tip: "grafik", baslik: "İki tedarikçinin PVC boruları (merkez ≈ 600 mm)", xlabel: "Boru uzunluğu (mm)", ylabel: "Sıklık", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "592" }, { v: 3, label: "596" }, { v: 5, label: "600" }, { v: 7, label: "604" }, { v: 9, label: "608" }],
          ogeler: [
            { id: "a", tip: "egri", renk: 0, etiket: "A", noktalar: [[0, 0], [1, 0.05], [2, 0.3], [3, 1.5], [4, 6], [5, 9], [6, 6], [7, 1.5], [8, 0.3], [9, 0.05], [10, 0]] },
            { id: "b", tip: "egri", renk: 2, etiket: "B", noktalar: [[0, 0.4], [1, 1], [2, 2], [3, 3.2], [4, 4.2], [5, 4.6], [6, 4.2], [7, 3.2], [8, 2], [9, 1], [10, 0.4]], gizli: true },
            { id: "c", tip: "cizgi", renk: 1, kesik: true, from: [5, 0], to: [5, 9.8], etiket: "≈ 600", gizli: true }
          ],
          durumlar: [
            { metin: "Supplier A: borular 600 mm'nin hemen çevresinde, dar ve yüksek yığın." },
            { metin: "Supplier B: merkez yine ≈ 600 mm ama borular sağa sola saçılmış, basık yığın.", goster: ["b", "c"] },
            { metin: "İkisi de simetrik, merkezleri aynı. A daha tutarlı (daha az *variability*); boruyu ondan alırsın.", gizle: ["b"] }
          ] }
      ]
    },
    {
      baslik: "*Range*: en basit ölçü",
      kisa: "Range, en büyük eksi en küçüktür; tek bir sayıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Range", tr: "açıklık", tanim: "==En büyük − en küçük== değer. Hesaplaması kolay ama yalnızca iki uca bakar, *resistant* değildir; yalnızca son çare olarak kullan.", ornek: "Süper Lig: 26 − 1 = 25." }
          ] },
        { tip: "sekil", baslik: "Süper Lig şampiyonluk sayıları (2025–26 sezonu sonu itibarıyla)", fig: { type: "bar", cats: ["Galatasaray", "Fenerbahçe", "Beşiktaş", "Trabzonspor", "Bursaspor", "Başakşehir"], series: [{ name: "Kupa", values: [26, 19, 16, 7, 1, 1] }], ylabel: "Titles" } },
        { tip: "ornek", baslik: "Şampiyonluk sayılarının range'i", durum: "Altı takımın kupa sayıları: 26, 19, 16, 7, 1, 1.",
          adimlar: ["En büyük: 26. En küçük: 1.", "Range = 26 − 1 = 25."],
          sonuc: "==Range = 25.== (Güncel sayıları sınavda sana verirlerse aynı yöntemi uygula.)" },
        { tip: "tuzak", baslik: "Range tek bir sayıdır", metin: "Ders notundaki uyarı: range tek bir sayıdır.", yanlis: "The range is 1 to 26.", dogru: "The range is 25. (Aralık verme; farkı hesapla.)" }
      ]
    },
    {
      baslik: "*Standard deviation*: adım adım",
      kisa: "Standart sapma, değerlerin mean'den tipik uzaklığıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Standard deviation", tr: "standart sapma (s)", tanim: "Bütün değerleri kullanan ölçü: değerlerin *mean*'den ==tipik uzaklığı==. Formül: sₓ = √[ Σ(xᵢ − x̄)² ÷ (n − 1) ].", ornek: "Geliş süreleri mean'den ortalama 4 dakika sapıyor." },
            { ikon: "↕️", terim: "Deviation", tr: "sapma", tanim: "Bir değerin mean'den farkı: xᵢ − x̄. Sapmaların toplamı hep sıfırdır.", ornek: "30 − 35 = −5." },
            { ikon: "🟦", terim: "Variance", tr: "varyans (s²)", tanim: "Sapma karelerinin toplamı bölü (n − 1). Birimi kare: dakika².", ornek: "80 ÷ 5 = 16 dakika²." }
          ] },
        { tip: "grafik", baslik: "Altı arkadaşın okula geliş süresi (dakika)", xlabel: "Dakika", ylabel: "", xmax: 14, ymax: 5,
          xticks: [{ v: 2, label: "30" }, { v: 4, label: "32" }, { v: 6, label: "34" }, { v: 8, label: "36" }, { v: 10, label: "38" }, { v: 12, label: "40" }],
          ogeler: [
            { id: "p1", tip: "nokta", x: 2, y: 1 }, { id: "p2", tip: "nokta", x: 3, y: 1 }, { id: "p3", tip: "nokta", x: 6, y: 1 },
            { id: "p4", tip: "nokta", x: 9, y: 1 }, { id: "p5", tip: "nokta", x: 10, y: 1 }, { id: "p6", tip: "nokta", x: 12, y: 1 },
            { id: "mean", tip: "cizgi", renk: 3, kesik: true, from: [7, 0], to: [7, 4.7], etiket: "x̄ = 35", gizli: true },
            { id: "o1", tip: "ok", from: [7, 1.7], to: [2, 1.7], gizli: true },
            { id: "o2", tip: "ok", from: [7, 2.1], to: [3, 2.1], gizli: true },
            { id: "o3", tip: "ok", from: [7, 2.5], to: [6, 2.5], gizli: true },
            { id: "o4", tip: "ok", from: [7, 2.9], to: [9, 2.9], gizli: true },
            { id: "o5", tip: "ok", from: [7, 3.3], to: [10, 3.3], gizli: true },
            { id: "o6", tip: "ok", from: [7, 3.7], to: [12, 3.7], gizli: true },
            { id: "bant", tip: "alan", renk: 1, noktalar: [[3, 0], [3, 4.5], [11, 4.5], [11, 0]], gizli: true },
            { id: "sdy", tip: "yazi", x: 7, y: 0.4, metin: "s = 4 dk: 31–39 bandı", gizli: true }
          ],
          durumlar: [
            { metin: "Altı değer: 30, 31, 34, 37, 38, 40 dakika. Toplam 210; mean = 210 ÷ 6 = 35.", goster: ["p1", "p2", "p3", "p4", "p5", "p6", "mean"] },
            { metin: "Her değerin mean'den sapması: −5, −4, −1, +2, +3, +5. Toplamları 0: solun −10'u sağın +10'unu dengeliyor.", goster: ["o1", "o2", "o3", "o4", "o5", "o6"] },
            { metin: "Sapmaların karelerini al, topla, n − 1'e böl, karekök al: s = 4 dakika. Mean'in iki yanında 4'er dakikalık bant tipik uzaklığı gösterir.", gizle: ["o1", "o2", "o3", "o4", "o5", "o6"], goster: ["bant", "sdy"] }
          ] },
        { tip: "ornek", baslik: "Standard deviation'ı hesapla", durum: "Altı arkadaşın okula geliş süresi: 30, 31, 34, 37, 38, 40 dakika (örneklem).",
          adimlar: ["1 · Mean: 210 ÷ 6 = 35.", "2 · Sapmalar: −5, −4, −1, +2, +3, +5. Toplam 0 (bu yüzden bir adım daha gerek).", "3 · Kareler: 25, 16, 1, 4, 9, 25. Hepsi pozitif.", "4 · Topla: 25 + 16 + 1 + 4 + 9 + 25 = 80.", "5 · n − 1'e böl: 80 ÷ (6 − 1) = 80 ÷ 5 = 16. Bu *variance* (s² = 16 dakika²).", "6 · Karekök: s = √16 = 4 dakika."],
          sonuc: "==s = 4 dakika== (birim yeniden dakika). 6'ya değil, 5'e bölmeyi unutma." }
      ]
    },
    {
      baslik: "SD'yi yorumla, *s* ve σ",
      kisa: "SD yorumunda bağlam, SD ve mean şart; örneklemde s, popülasyonda σ.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "The [context]", alt: "bağlam" }, { t: "typically varies by [SD]", alt: "tipik sapma" }, { t: "from the mean of [mean]", alt: "mean" }], aciklama: "Üç şey şart: bağlam, standard deviation, mean (hepsi birimleriyle). Örnek: \"The commute time of these students typically varies by 4 minutes from the mean of 35 minutes.\"" },
        { tip: "ornek", baslik: "Şev açısı (angle of repose)", durum: "Yere dökülen kumun oluşturduğu yığının yamaç açısı. 100'den fazla malzemeden rastgele seçilen 6 malzeme: 33, 45, 28, 50, 45, 30 derece.",
          adimlar: ["Mean: (33 + 45 + 28 + 50 + 45 + 30) ÷ 6 = 231 ÷ 6 = 38,5.", "Sapmalar: −5,5; +6,5; −10,5; +11,5; +6,5; −8,5.", "Kareler: 30,25; 42,25; 110,25; 132,25; 42,25; 72,25. Toplam 429,5.", "Variance: 429,5 ÷ (6 − 1) = 85,9.", "Standard deviation: √85,9 ≈ 9,27 ≈ 9,3 derece."],
          sonuc: "\"The angle of repose of these materials typically varies by about 9.3 degrees from the mean of 38.5 degrees.\"" },
        { tip: "ikili", sol: { ikon: "🥄", baslik: "*s*", maddeler: ["*Sample standard deviation*", "Bir *statistic*", "n − 1'e bölünür", "TI-84'te Sx"] },
          sag: { ikon: "🍲", baslik: "σ (sigma)", maddeler: ["*Population standard deviation*", "Bir *parameter*", "n'ye bölünür", "TI-84'te σx"] },
          oyun: [
            { metin: "100'den fazla malzemeden seçilen 6 malzemenin standart sapması.", cevap: "sol", neden: "Örneklemden hesaplanır: *s*, popülasyondaki σ'yı tahmin eder." },
            { metin: "Okuldaki 800 öğrencinin tamamının geliş süresinin standart sapması.", cevap: "sag", neden: "Popülasyon sayısı: σ." },
            { metin: "Hesap makinesinde n − 1'e bölünen satır.", cevap: "sol", neden: "Sx satırı örneklem içindir." },
            { metin: "Hesap makinesinde n'ye bölünen satır.", cevap: "sag", neden: "σx satırı popülasyon içindir." }
          ] },
        { tip: "tuzak", baslik: "Variance'ta durma, n'ye bölme", metin: "Variance'ın birimi karedir (dakika², derece²); örneklemde paydada n − 1 olur.", yanlis: "s² = 16 dakikadır, SD'yi bulduk. / 80 ÷ 6 = 13,3; √13,3 ≈ 3,65.", dogru: "Karekök al: 16 variance'tır, s = 4 dakika. 80 ÷ 5 = 16; √16 = 4. (3,65 popülasyon σ'sıdır; TI-84'teki σx.)" }
      ]
    },
    {
      baslik: "SD'nin beş özelliği",
      kisa: "SD negatif olmaz, uç değere duyarlıdır ve yalnızca mean ile kullanılır.",
      bloklar: [
        { tip: "adimlar", baslik: "Standard deviation'ın özellikleri", adimlar: [
            { baslik: "1 · Asla negatif olmaz", metin: "s ≥ 0." },
            { baslik: "2 · s = 0 ise bütün değerler aynıdır", metin: "Beş quizin hepsi 8 ise x̄ = 8, bütün sapmalar 0, s = 0." },
            { baslik: "3 · Mean'den uzaklaştıkça büyür", metin: "Değerler dışa doğru açıldıkça s artar." },
            { baslik: "4 · *Resistant* değildir", metin: "Kareler yüzünden *mean*'den bile hassastır: sapma 2 ise karesi 4, sapma 10 ise karesi 100; sapma 5 kat büyür, kare 25 kat." },
            { baslik: "5 · Yalnızca mean ile birlikte kullanılır", metin: "s, mean çevresindeki yayılımı ölçer." }
          ] },
        { tip: "tuzak", baslik: "\"Verinin tamamı mean ± s içindedir\"", metin: "s tipik uzaklıktır; en uzak değer değildir.", yanlis: "Bütün değerler mean ± s aralığında kalır.", dogru: "s, mean'den tipik (ortalama bir) uzaklığı verir; bazı değerler bandın dışında olabilir." }
      ]
    },
    {
      baslik: "Çeyrekler ve *IQR*",
      kisa: "IQR = Q3 − Q1: verinin ortadaki yarısının aralığı; tek bir sayıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✂️", terim: "Quartiles", tr: "çeyrekler", tanim: "Sıralı veriyi dört eşit parçaya (her biri %25) bölen değerler. Q1: median'ın altındaki yarının median'ı; Q3: median'ın üstündeki yarının median'ı.", ornek: "12 fiyatta Q1 = 23,5 ve Q3 = 32,5." },
            { ikon: "📦", terim: "Interquartile range (IQR)", tr: "çeyrekler arası açıklık", tanim: "Q3 − Q1: verinin ==ortadaki yarısının== aralığı. Tek bir sayıdır.", ornek: "32,5 − 23,5 = 9 dolar." }
          ] },
        { tip: "ornek", baslik: "12 fiyatın çeyrekleri", durum: "Sıralı fiyatlar ($): 19, 22, 22, 25, 26, 28, 29, 31, 31, 34, 37, 39.",
          adimlar: ["n = 12: median 6. ve 7. değerin ortası = (28 + 29) ÷ 2 = 28,5. Alt yarıda 6, üst yarıda 6 fiyat kalır.", "Alt yarı: 19, 22, 22, 25, 26, 28. Ortadaki 3. ve 4. değer: Q1 = (22 + 25) ÷ 2 = 23,5.", "Üst yarı: 29, 31, 31, 34, 37, 39. Ortadaki 3. ve 4. değer: Q3 = (31 + 34) ÷ 2 = 32,5.", "IQR = Q3 − Q1 = 32,5 − 23,5 = 9."],
          sonuc: "==Q1 = 23,5, Q3 = 32,5, IQR = 9 dolar.== (Range = 39 − 19 = 20.)" },
        { tip: "ornek", baslik: "Değer sayısı tekse: 7 quiz puanı", durum: "Sıralı puanlar: 4, 6, 7, 7, 8, 9, 10.",
          adimlar: ["Median: 4. değer = 7. Onu kenara koy; iki yarıya da katma.", "Alt yarı: 4, 6, 7 → Q1 = 6.", "Üst yarı: 8, 9, 10 → Q3 = 9.", "IQR = 9 − 6 = 3."],
          sonuc: "==Q1 = 6, Q3 = 9, IQR = 3.==" },
        { tip: "tuzak", baslik: "Median'ı yarılara katma, IQR'yi aralık yazma", metin: "Ders notundaki Caution: çeyrekleri bulurken median'ı dışarıda bırak. IQR de tek bir sayıdır.", yanlis: "7 puanda alt yarı 4, 6, 7, 7 (median dahil), Q1 = 6,5. / IQR = 23,5–32,5.", dogru: "n tekken median iki yarıya da girmez: alt yarı 4, 6, 7 → Q1 = 6. IQR = 32,5 − 23,5 = 9." }
      ]
    },
    {
      baslik: "*IQR* *resistant*: 39'u 390 yazarsan",
      kisa: "Range ve SD uç değerle fırlar; IQR yerinde kalır.",
      bloklar: [
        { tip: "sekil", baslik: "Önce ve sonra: kutu grafikleri", fig: { type: "box", items: [{ name: "Orijinal", min: 19, q1: 23.5, med: 28.5, q3: 32.5, max: 39 }, { name: "39 → 390", min: 19, q1: 23.5, med: 28.5, q3: 32.5, max: 37, outliers: [390] }], label: "Price ($)" } },
        { tip: "ornek", baslik: "Yanlışlıkla 390 yazıldı", durum: "12 fiyatta son değer 39 yerine 390 yazılıyor.",
          adimlar: ["Range: 39 − 19 = 20 iken 390 − 19 = 371 olur.", "Q1 ve Q3 ortadaki değerlerden hesaplanır; uçtaki değer onları etkilemez: Q1 = 23,5, Q3 = 32,5.", "IQR = 9 olarak kalır.", "Standard deviation da fırlar: yaklaşık 6,2 → yaklaşık 104,7."],
          sonuc: "Range 20 → 371, s 6,2 → 104,7, ama ==IQR 9 → 9==. Üçü içinde ==resistant olan tek ölçü IQR==." },
        { tip: "tablo", baslik: "Uç değer testi", head: ["Ölçü", "39 iken", "390 iken", "Resistant?"], rows: [
            ["*Range*", "20", "371", "Hayır"],
            ["*Standard deviation*", "≈ 6,2", "≈ 104,7", "Hayır"],
            ["*IQR*", "9", "9", "Evet"]
          ], vurgu: 2, not: "Merkez tarafında da aynı: *median* resistant, *mean* değil." }
      ]
    },
    {
      baslik: "Hangi ikili? Hesap makinesi",
      kisa: "Mean ile SD, median ile IQR eşleşir; hesap makinesi hepsini verir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "⚖️", baslik: "*Mean* + *standard deviation*", maddeler: ["Kabaca simetrik", "Outlier yok"] },
          sag: { ikon: "🎯", baslik: "*Median* + *IQR*", maddeler: ["*Skewed* dağılım", "Ya da outlier var", "İkisi de *resistant*"] },
          oyun: [
            { metin: "Kabaca simetrik boy dağılımı, outlier yok.", cevap: "sol", neden: "Temiz ve simetrik: *mean* + *standard deviation*." },
            { metin: "Sağa çarpık maaş dağılımı.", cevap: "sag", neden: "Çarpık: *median* + *IQR*." },
            { metin: "Bir tane çok uç değer içeren veri.", cevap: "sag", neden: "Outlier mean ve SD'yi bozar: *median* + *IQR*." },
            { metin: "Merkez olarak *median* seçtin; yayılım olarak SD yazmak istiyorsun.", cevap: "sag", neden: "Median ile SD eşleşmez; median'ın eşi *IQR*." }
          ] },
        { tip: "tuzak", baslik: "Çapraz eşleştirme", metin: "Ölçüleri karıştırma: mean ile IQR ya da median ile SD birlikte kullanılmaz. Range son çaredir.", yanlis: "Center: mean, variability: IQR.", dogru: "Ya mean + SD (simetrik, outlier yok) ya da median + IQR (çarpık ya da outlier var)." },
        { tip: "adimlar", baslik: "TI-84 ile 1-Var Stats", adimlar: [
            { baslik: "Verileri gir", metin: "STAT → EDIT → L1 sütununa 30, 31, 34, 37, 38, 40 yaz." },
            { baslik: "Komutu çalıştır", metin: "STAT → CALC → 1: 1-Var Stats → ENTER." },
            { baslik: "Çıktıyı oku", metin: "x̄ = 35 · Σx = 210 · Sx = 4 · σx = 3,6514… · n = 6; aşağı kaydırınca minX = 30 · Q1 = 31 · Med = 35,5 · Q3 = 38 · maxX = 40." },
            { baslik: "Hangi sapma?", metin: "Örneklemse ==Sx== (n − 1'e böler). σx popülasyon içindir." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Merkez aynı olsa da veri farklı olabilir: *variability* ölçülür.",
            "*Range* = en büyük − en küçük; tek bir sayı (26 − 1 = 25), *resistant* değil, son çare.",
            "*Standard deviation*: mean → sapmalar → kareler → topla → ÷ (n − 1) → karekök (okula geliş: s = 4 dakika).",
            "Yorum kalıbı: \"typically varies by … from the mean of …\"; bağlam, SD ve mean şart.",
            "s ≥ 0; s = 0 ise bütün değerler aynıdır; mean'den uzaklaştıkça artar; *resistant* değil.",
            "s *sample* için (statistic), σ *population* için (parameter); TI-84'te Sx örneklem içindir.",
            "*IQR* = Q3 − Q1 (12 fiyatta 32,5 − 23,5 = 9); n tekse median yarılara girmez. IQR *resistant* tek yayılım ölçüsüdür.",
            "Simetrik ve outlier yoksa mean + SD; çarpık ya da outlier varsa median + IQR."
          ] }
      ]
    }
  ]
};
