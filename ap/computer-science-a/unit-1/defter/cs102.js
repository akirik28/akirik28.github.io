/* Kitora not defteri · cs102 · 1.2 Değişkenler ve İlkel Tipler
   Kaynak: ap-videolar/src/episodes/cs102 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs102",
  amac: "Bu konu değişkenleri anlatıyor: veriyi tutan, adı ve tipi olan bellek kutuları. int, double ve boolean tiplerini, tanımlama ile atamayı, tip uyumunu ve atama satırlarını izleme tablosuyla takip etmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "*Variable*: adı olan bellek kutusu",
      kisa: "Değişken, adı ve tipi olan bir bellek kutusudur; içinde tek değer durur.",
      bloklar: [
        { tip: "hikaye", ikon: "🗄️", baslik: "Koridordaki dolaplar",
          metin: "Okul koridorundaki her dolabın üstünde bir isim, içinde bir eşya var. Spor çantası küçük dolaba sığmaz: her dolap belli şekilde eşya alır. Bilgisayarın belleği de dolaplarla doludur; bir dolaba isim verir, içine değer koyar, gerektiğinde değiştirirsin." },
        { tip: "kavramlar", kartlar: [
            { ikon: "📦", terim: "Variable", tr: "değişken", tanim: "Adı olan bir bellek kutusu. İçinde aynı anda tek değer durur.", ornek: "age kutusunda 16, gpa kutusunda 87,5 var." },
            { ikon: "🏷️", terim: "Data type", tr: "veri tipi", tanim: "Kutunun hangi türden veri alacağını belirleyen etiket.", ornek: "int tam sayı alır, double ondalıklı sayı alır." },
            { ikon: "🧱", terim: "Primitive type", tr: "ilkel tip", tanim: "Kutunun içinde değerin kendisi durur. AP'de int, double ve boolean ilkeldir.", ornek: "int age = 16; kutuda doğrudan 16 var." },
            { ikon: "🧭", terim: "Reference type", tr: "referans tipi", tanim: "Kutuda değer değil, nesneye giden bir adres (ok) durur. String bunlardan biridir; ayrıntısı nesneler konusunda.", ornek: "String name; kutusunda bir ok var, yazının kendisi başka yerde." }
          ] }
      ]
    },
    {
      baslik: "Üç ilkel tip: *int*, *double*, *boolean*",
      kisa: "int tam sayı, double ondalıklı sayı, boolean yalnız true ya da false tutar.",
      bloklar: [
        { tip: "tablo", baslik: "Tipler bir bakışta", head: ["Tip", "Ne tutar?", "Örnek"], rows: [
            ["*int*", "Tam sayı", "yaş 16, kat 3, skor 2"],
            ["*double*", "Ondalıklı sayı", "not ortalaması 87.5"],
            ["*boolean*", "Yalnız *true* ya da *false*", "ödev teslim edildi mi?"]
          ], not: "AP yalnız bu üç ilkel tipi kullanır; char, long ve float sınavda yok." },
        { tip: "ikili", sol: { ikon: "🔢", baslik: "*int* kutusu", maddeler: ["Tam sayı tutar", "Yaş, kat numarası, maç skoru"] },
          sag: { ikon: "🔬", baslik: "*double* kutusu", maddeler: ["Ondalıklı sayı tutar", "Not ortalaması, boy, fiyat"] },
          oyun: [
            { metin: "Sınıftaki öğrenci sayısı: 28", cevap: "sol", neden: "Sayılan tam bir şey: *int*." },
            { metin: "Not ortalaması: 87,5", cevap: "sag", neden: "Ondalıklı değer: *double*." },
            { metin: "Bir basketbol maçının skoru: 3", cevap: "sol", neden: "Skor tam sayıdır: *int*." },
            { metin: "Boy uzunluğu: 1,72 metre", cevap: "sag", neden: "Ondalıklı ölçü: *double*." },
            { metin: "Binanın kat numarası: 4", cevap: "sol", neden: "Kat tam sayıdır: *int*." }
          ] }
      ]
    },
    {
      baslik: "Tanımlama ve ilk değer verme",
      kisa: "Önce tip, sonra isim yazılır; ilk değer aynı satırda verilebilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚪", terim: "Declaration", tr: "tanımlama", tanim: "Kutuyu açmak: önce tip, sonra isim yazılır.", ornek: "int score;" },
            { ikon: "🎁", terim: "Initialization", tr: "ilk değer verme", tanim: "Kutuya ilk değeri koymak. Tanımlamayla aynı satırda yapılabilir.", ornek: "int floor = 3;" }
          ] },
        { tip: "kod", baslik: "Dört kutu aç", kod: "int score;\nint floor = 3;\ndouble gpa = 87.5;\nboolean done = false;", vurgu: [2], not: "2. satırı şöyle oku: int tipinde, floor adında bir kutu aç, içine 3 koy. 1. satırdaki score kutusu boş; ona değer atamadan kullanamazsın." }
      ]
    },
    {
      baslik: "Atama (*assignment*): sağı hesapla, sola yaz",
      kisa: "= işareti eşitlik değil atamadır; yeni değer eskisini siler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⬅️", terim: "Assignment", tr: "atama", tanim: "= ile sağdaki ifadeyi hesaplayıp soldaki kutuya yazmak. Kutuda tek değer durduğu için eski değer silinir.", ornek: "score = 90; kutuya 90 girer." }
          ] },
        { tip: "kod", baslik: "Matematikte saçma, Java'da normal", kod: "int score = 90;\nscore = score + 5;\nSystem.out.println(score);", vurgu: [2], cikti: "95", not: "Önce sağ taraf hesaplanır (90 + 5 = 95), sonra 95 kutuya yazılır ve 90 silinir." },
        { tip: "tablo", baslik: "İzleme tablosu", head: ["Satır", "Kod", "score"], rows: [
            ["1", "int score = 90;", "90"],
            ["2", "score = score + 5;", "95"],
            ["3", "System.out.println(score);", "95 yazdırılır"]
          ], vurgu: 1 }
      ]
    },
    {
      baslik: "Tip uyumu: hangi değer hangi kutuya girer?",
      kisa: "Ondalık int kutusuna girmez; tam sayı double kutusuna rahatça girer.",
      bloklar: [
        { tip: "tablo", baslik: "Derlenir mi?", head: ["Satır", "Sonuç", "Neden"], rows: [
            ["int x = 7.5;", "Derlenmez", "Ondalık, tam sayı kutusuna sığmaz (*lossy conversion*)"],
            ["double d = 7;", "Derlenir; d = 7.0", "Tam sayı ondalık kutuya rahatça girer"],
            ["boolean b = 1;", "Derlenmez", "boolean kutusuna yalnız true ya da false girer"]
          ] },
        { tip: "kod", baslik: "Tam sayı double kutusunda", kod: "double d = 7;\nSystem.out.println(d);", cikti: "7.0", not: "Kutu double olduğu için yazdırınca ondalık hali görünür." }
      ]
    },
    {
      baslik: "Yazdırırken dikkat: tırnak ve ilk değer",
      kisa: "Tırnaklı ad yazıyı basar; değer atanmamış değişken kullanılamaz.",
      bloklar: [
        { tip: "kod", baslik: "Tırnaklı ve tırnaksız", kod: "int score = 95;\nSystem.out.println(\"score\");\nSystem.out.println(score);", vurgu: [2, 3], cikti: "score\n95", not: "Tırnaklı hali yazıyı, tırnaksız hali kutunun içindeki değeri basar." },
        { tip: "tuzak", metin: "Tırnak değişkeni yazıya çevirir; ilk değer verilmemiş bir kutu da kullanılamaz.", yanlis: "println(\"score\") 95 yazar. int count; satırından sonra println(count) 0 yazar.", dogru: "Birincisi score kelimesini basar. İkincisi derlenmez: değişkene değer atanmamış (*variable might not have been initialized*)." }
      ]
    },
    {
      baslik: "İsim kuralları, *camelCase* ve *final*",
      kisa: "İsim harfle başlar, boşluk içermez; büyük küçük harf önemlidir.",
      bloklar: [
        { tip: "tablo", baslik: "Hangi isim geçerli?", head: ["İsim", "Geçerli mi?", "Neden"], rows: [
            ["totalScore", "Evet", "Harfle başlar, boşluk yok"],
            ["2puan", "Hayır", "Rakamla başlayamaz"],
            ["total score", "Hayır", "Boşluk içeremez"],
            ["int", "Hayır", "Anahtar sözcük isim olamaz"],
            ["score ve Score", "İki ayrı kutu", "Büyük küçük harf fark eder"]
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🐪", terim: "camelCase", tr: "deve yazımı", tanim: "İlk kelime küçük, sonrakiler büyük harfle başlar. Java'daki gelenek.", ornek: "totalScore" },
            { ikon: "🔒", terim: "final", tr: "sabit", tanim: "Başına final konan değişkenin değeri bir daha değişmez.", ornek: "final int MAX_PLAYERS = 10;" }
          ] },
        { tip: "kod", baslik: "final'e ikinci atama", kod: "final int MAX_PLAYERS = 10;\nMAX_PLAYERS = 11;", vurgu: [2], not: "2. satır derlenmez: final değişkene ikinci kez değer atanamaz." }
      ]
    },
    {
      baslik: "AP örneği: izleme ve takas tuzağı",
      kisa: "Atamada değer kopyalanır; takas için üçüncü bir kutu gerekir.",
      bloklar: [
        { tip: "kod", baslik: "a ile b yer değiştirdi mi?", kod: "int a = 4;\nint b = 9;\na = b;\nb = a;\nSystem.out.println(a + \" \" + b);", vurgu: [3, 4], cikti: "9 9" },
        { tip: "tablo", baslik: "İzleme tablosu", head: ["Satır", "Kod", "a", "b"], rows: [
            ["1", "int a = 4;", "4", "–"],
            ["2", "int b = 9;", "4", "9"],
            ["3", "a = b;", "9", "9"],
            ["4", "b = a;", "9", "9"]
          ], vurgu: 3 },
        { tip: "tuzak", metin: "a = b satırı 4'ü sildi; b = a ise aynı 9'u geri kopyaladı. İki satır değerleri yer değiştirmez.", yanlis: "a = b; b = a; takas yapar (a 9, b 4 olur).", dogru: "Üçüncü bir kutu gerekir: int temp = a; a = b; b = temp; Bu üç satırdan sonra a 9, b 4 olur." },
        { tip: "ornek", baslik: "Kopya mı, bağlantı mı?", durum: "Satırlar sırayla çalışıyor: int x = 3; int y = x; x = 10; ve sonra y yazdırılıyor.",
          adimlar: [
            "int x = 3; x kutusunda 3 var.",
            "int y = x; x'in o anki değeri (3) kopyalanıp y kutusuna yazılır.",
            "x = 10; yalnız x değişir: 10. y kutusuna dokunulmaz.",
            "println(y): y hâlâ 3."
          ], sonuc: "3 yazılır. y, x'in kopyasını aldı; ona bağlı değil." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "tablo", baslik: "Sınav için bilmen gereken", head: ["Düzey", "Konu"], rows: [
            ["✎ Yazman gereken", "Doğru tiple değişken tanımlamak ve değer atamak: sayaç için *int*, ortalama için *double*, evet-hayır için *boolean*"],
            ["👁 Okuman gereken", "Atama satırlarını izleme tablosuyla takip etmek"],
            ["✗ Bilmen gerekmeyen", "Scanner ile klavyeden girdi (değerler metoda hazır gelir), char / long / float / byte / short, tiplerin bit boyutları"]
          ] },
        { tip: "ozet", maddeler: [
            "*Variable*: adı ve tipi olan bellek kutusu; tek değer tutar.",
            "*int* tam sayı, *double* ondalıklı sayı, *boolean* *true* ya da *false*. Bunlar *primitive* tiplerdir.",
            "Tanımlama: önce tip, sonra isim (int score;). İlk değer aynı satırda verilebilir.",
            "= atamadır: önce sağı hesapla, sonra sola yaz. Yeni değer eskisini siler.",
            "Ondalık int kutusuna girmez; tam sayı double kutusuna girer (7 → 7.0).",
            "println(\"score\") yazıyı, println(score) değeri basar; değer atanmamış değişken kullanılamaz.",
            "İsim harfle başlar, boşluk içermez; gelenek *camelCase*; final değeri kilitler.",
            "a = b; b = a; takas yapmaz; kopya alınan değişken sonradan değişmez."
          ] }
      ]
    }
  ]
};
