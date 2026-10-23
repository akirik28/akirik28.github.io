/* Kitpath not defteri · cs105 · 1.6 Bileşik Operatörler ve İzleme Tablosu
   Kaynak: ap-videolar/src/episodes/cs105 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs105",
  amac: "Bu konu atamanın kısa yazımlarını anlatıyor: +=, -= gibi bileşik operatörler ile ++ ve --. Bir kodu satır satır izleme tablosuyla takip etmeyi ve sağ tarafın bütün olarak hesaplandığını öğreneceksin.",
  bolumler: [
    {
      baslik: "Bileşik atama: kısa yazım",
      kisa: "x += 2 yazımı, x = x + 2 demektir; diğer operatörler de aynı.",
      bloklar: [
        { tip: "hikaye", ikon: "🏀", baslik: "Skor tabelası",
          metin: "Okul basketbol maçında skor tabelası sende. Her sayıda score = score + 2, üçlükte score = score + 3 yazıyorsun. Kırk dakika boyunca aynı kelimeyi iki kez yazmak yorucu; programcılar da tembeldir ve kısa bir yol icat etmişler." },
        { tip: "kavramlar", kartlar: [
            { ikon: "✂️", terim: "Compound assignment operator", tr: "bileşik atama operatörü", tanim: "Bir değişkeni kendi değeriyle işleme sokup sonucu aynı değişkene yazan kısa yazım. x op= e, x = x op (e) demektir.", ornek: "score += 2; satırı score = score + 2; ile aynıdır." }
          ] },
        { tip: "tablo", baslik: "Beş bileşik operatör", head: ["Kısa yazım", "Uzun hali", "Anlamı"], rows: [
            ["x += 5", "x = x + 5", "x'e 5 ekle"],
            ["x -= 3", "x = x - 3", "x'ten 3 çıkar"],
            ["x *= 2", "x = x * 2", "x'i 2 ile çarp"],
            ["x /= 5", "x = x / 5", "x'i 5'e böl (int ise kesme olur)"],
            ["x %= 3", "x = x % 3", "x'in 3'e bölümünden kalanı yaz"]
          ] },
        { tip: "kod", baslik: "coins beş kez değişiyor", kod: "int coins = 10;\ncoins += 5;   // 15\ncoins -= 3;   // 12\ncoins *= 2;   // 24\ncoins /= 5;   // 4\ncoins %= 3;   // 1\nSystem.out.println(coins);", vurgu: [5], cikti: "1", not: "5. satır int bölmesi: 24 / 5 = 4 (4,8 değil). Sonra 4 % 3 = 1." }
      ]
    },
    {
      baslik: "Artırma ve azaltma: ++ ve --",
      kisa: "count++ değişkeni bir artırır, lives-- bir azaltır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⬆️", terim: "Increment", tr: "artırma (x++)", tanim: "Değişkeni 1 artırır; x += 1 ile aynıdır.", ornek: "count++; ile count bir artar." },
            { ikon: "⬇️", terim: "Decrement", tr: "azaltma (x--)", tanim: "Değişkeni 1 azaltır; x -= 1 ile aynıdır.", ornek: "lives--; ile can bir azalır." }
          ] },
        { tip: "kod", baslik: "Sayaç ve can", kod: "int count = 0;\nint lives = 3;\ncount++;\ncount++;\nlives--;\nSystem.out.println(count + \" \" + lives);", cikti: "2 2", not: "count iki kez arttı (0 → 2), lives bir kez azaldı (3 → 2). Döngülerde bu satırı yüzlerce kez yazacaksın." },
        { tip: "not", metin: "AP kuralı: ++ ve -- yalnız tek başına, kendi satırında kullanılır. Başa yazılan hali (++x) ve başka bir ifadenin içinde kullanılması sınavda yok." }
      ]
    },
    {
      baslik: "İzleme tablosu (*trace table*)",
      kisa: "Her değişkene bir sütun, her kod satırına bir satır; hep güncel değeri kullan.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧾", terim: "Trace table", tr: "izleme tablosu", tanim: "Her değişkene bir sütun, her kod satırına bir satır ayırıp değerleri adım adım yazdığın tablo.", ornek: "Sınavın yarısı izleme sorusudur." }
          ] },
        { tip: "kod", baslik: "Altı satır", kod: "int x = 3;\nint y = 8;\nx += y;\ny -= x;\nx *= 2;\ny++;\nSystem.out.println(x + \" \" + y);", vurgu: [4], cikti: "22 -2" },
        { tip: "tablo", baslik: "x ve y satır satır", head: ["Satır", "Kod", "x", "y"], rows: [
            ["1", "int x = 3;", "3", "–"],
            ["2", "int y = 8;", "3", "8"],
            ["3", "x += y;", "11", "8"],
            ["4", "y -= x;", "11", "-3"],
            ["5", "x *= 2;", "22", "-3"],
            ["6", "y++;", "22", "-2"]
          ], vurgu: 3, not: "4. satırda y'nin yeni değeri, x'in yeni değeri olan 11 ile hesaplanır: 8 - 11 = -3. Her satır, değişkenlerin en güncel halini kullanır." }
      ]
    },
    {
      baslik: "Sağ taraf bütün olarak hesaplanır",
      kisa: "x *= 2 + 3 satırında önce 2 + 3, sonra çarpma yapılır.",
      bloklar: [
        { tip: "kod", baslik: "Çarpma, toplamayı beklemez mi?", kod: "int x = 4;\nx *= 2 + 3;\nSystem.out.println(x);", vurgu: [2], cikti: "20" },
        { tip: "ornek", baslik: "x 4 iken 2. satır", durum: "Yukarıdaki kodda 2. satır çalışıyor. Önce hangi işlem yapılır?",
          adimlar: [
            "Sağ taraf bütün olarak hesaplanır: 2 + 3 = 5.",
            "Sonra x, 5 ile çarpılır: x = 4 × 5.",
            "x = 20.",
            "Pratik yol: sağ tarafı kafanda paranteze al, x *= (2 + 3)."
          ], sonuc: "20" },
        { tip: "tuzak", metin: "Bileşik operatörde sağ tarafın tamamı tek parçadır.", yanlis: "Bu satır x çarpı 2, artı 3 demektir; sonuç 11.", dogru: "x çarpı, 2 artı 3'ün tamamı demektir; 4 × 5 = 20." }
      ]
    },
    {
      baslik: "*String* ve *double* ile bileşik atama",
      kisa: "String'de += toplamaz, ekler; kesme yalnız int bölmesinde olur.",
      bloklar: [
        { tip: "kod", baslik: "Yazıya ekleme", kod: "String msg = \"Skor: \";\nmsg += 2;\nmsg += 3;\nSystem.out.println(msg);", vurgu: [2, 3], cikti: "Skor: 23", not: "Sol taraf yazıysa += ekleme demektir: 5 değil 23, çünkü her adımda sayı yazının sonuna eklenir. String'i ayrıntılı göreceğiz." },
        { tip: "kod", baslik: "Kulaklık indirimi", kod: "double price = 120.0;\nprice *= 0.8;\nprice += 4.5;\nSystem.out.println(price);", vurgu: [2, 3], cikti: "100.5", not: "Yüzde 20 indirimle 96.0, kargo 4.5 eklenince 100.5." },
        { tip: "tuzak", metin: "int ile /= kesme yapar; double ile yapmaz.", yanlis: "int n = 17; n /= 5; satırından sonra n = 3.4 olur.", dogru: "n int olduğu için 17 / 5 = 3 yazılır, ondalık atılır. Kesilme tuzağı yalnız int'lerde vardır." }
      ]
    },
    {
      baslik: "Yazım tuzakları: =- ve println(a + b)",
      kisa: "=- eksiltmez, atar; println içinde iki int toplanır.",
      bloklar: [
        { tip: "kod", baslik: "İki küçük tuzak", kod: "int count = 5;\ncount =- 1;\nSystem.out.println(count);\nint a = 4;\nint b = 7;\nSystem.out.println(a + b);\nSystem.out.println(a + \" \" + b);", vurgu: [2, 6], cikti: "-1\n11\n4 7" },
        { tip: "tuzak", metin: "İki yazım hatası derleyiciyi susturur ama sonucu bozar.", yanlis: "count =- 1; sayacı 1 azaltır. println(a + b) 4 ve 7'yi yan yana yazar (47).", dogru: "=- ifadesi count = -1 demektir; azaltmak için count -= 1 yaz. println(a + b) iki int'i toplar: 11. Yan yana istiyorsan araya tırnaklı bir boşluk koy: a + \" \" + b." }
      ]
    },
    {
      baslik: "AP örneği: altı satır izleme",
      kisa: "Bileşik satırları tabloyla izle; int bölmesini kaçırma.",
      bloklar: [
        { tip: "kod", baslik: "Sonda a + b ne yazar?", kod: "int a = 10;\nint b = 4;\na %= b;\nb *= a;\na += b / 3;\nb--;\nSystem.out.println(a + b);", vurgu: [5], cikti: "11" },
        { tip: "tablo", baslik: "İzleme tablosu", head: ["Satır", "Kod", "a", "b"], rows: [
            ["1", "int a = 10;", "10", "–"],
            ["2", "int b = 4;", "10", "4"],
            ["3", "a %= b;", "2", "4"],
            ["4", "b *= a;", "2", "8"],
            ["5", "a += b / 3;", "4", "8"],
            ["6", "b--;", "4", "7"]
          ], vurgu: 4, not: "7. satır: a + b = 4 + 7 = 11 (47 değil, çünkü iki int toplanıyor)." },
        { tip: "ornek", baslik: "Beş satırda k", durum: "k 9 ile başlıyor; sırayla çıkarma, kendiyle çarpma, mod 7 ve artırma uygulanıyor. Sonda k kaç?",
          adimlar: [
            "k -= 4 → 9 - 4 = 5.",
            "k *= k → 5 × 5 = 25.",
            "k %= 7 → 25 % 7 = 4 (25 = 3 × 7 + 4).",
            "k++ → 5."
          ], sonuc: "k = 5. Mod satırını atlayan 25 ya da 26, son artırmayı unutan 4 bulur." },
        { tip: "tuzak", metin: "a += b / 3 satırında b 8 iken 8 / 3 int bölmesidir.", yanlis: "8 / 3 = 2.67 olduğundan a = 2 + 2.67 yazılır.", dogru: "int bölmesi 8 / 3 = 2 verir ve a = 2 + 2 = 4 olur." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "tablo", baslik: "Sınav için bilmen gereken", head: ["Düzey", "Konu"], rows: [
            ["✎ Yazman gereken", "sum += value; ile toplam biriktirmek, count++; ile sayaç artırmak (Unit 2 döngülerinin temeli)"],
            ["👁 Okuman gereken", "Beş altı bileşik satırı izleme tablosuyla takip etmek; int bölmesini kaçırmamak"],
            ["✗ Bilmen gerekmeyen", "++x / --x gibi başa yazılan hal ve ++ ile -- operatörünün başka bir ifadenin içinde kullanılması"]
          ] },
        { tip: "ozet", maddeler: [
            "x += 2, x = x + 2 demektir; çıkarma, çarpma, bölme ve mod için de aynı mantıkta kısa yazımlar var.",
            "count++ bir ekler, lives-- bir çıkarır; AP'de tek başına bir satırda kullanılır.",
            "int ile /= de kesme yapar; double ile yapmaz.",
            "Sağ taraf bütün olarak hesaplanır: x değişkenini 2 + 3 ile çarpan satır, x'i 5 ile çarpar.",
            "İzleme tablosunda her satırda değişkenlerin en güncel değerini kullan.",
            "String sol taraftaysa += ekleme yapar: \"Skor: \" ile 2 ve 3 → Skor: 23.",
            "=- eksiltme değil atamadır (count =- 1 → count = -1); println(a + b) iki int'i toplar."
          ] }
      ]
    }
  ]
};
