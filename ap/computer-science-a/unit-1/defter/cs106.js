/* Kitora not defteri · cs106 · 1.7–1.10 API, Metot İmzası ve Static Metotlar
   Kaynak: ap-videolar/src/episodes/cs106 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs106",
  amac: "*Java*'da her şeyi sıfırdan yazmazsın; hazır sınıfların metotlarını çağırırsın. Metodun imzasını okumayı, parametre ile argüman farkını, *void* ile değer döndüren metodu ve *static* metot çağırmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Hazır parçalar: *library*, *API*, *class*",
      kisa: "Hazır kodu çağırırsın; baştan yazmazsın.",
      bloklar: [
        { tip: "hikaye", ikon: "🧱", baslik: "Uygulamalar Lego gibidir",
          metin: "Yemek sipariş uygulamasındaki harita, ödeme ve bildirim parçalarını yazanlar sıfırdan çizmedi; hazır parçaları birbirine taktı. Sen de *Java*'da aynısını yapacaksın: hazır parçaları çağıracaksın." },
        { tip: "kavramlar", kartlar: [
            { ikon: "📚", terim: "Library", tr: "kütüphane", tanim: "Hazır kod koleksiyonu.", ornek: "Harita, ödeme ve bildirim kodları bir kütüphanede durur." },
            { ikon: "📖", terim: "API", tr: "uygulama arayüzü", tanim: "Bir kütüphaneyi kullanma kuralları ve belgesi. Belge metodun ==ne yaptığını== söyler, nasıl yaptığını söylemez.", ornek: "*Math.sqrt*'ın belgesi \"karekök döndürür\" der; hesabı nasıl yaptığını anlatmaz." },
            { ikon: "🧰", terim: "Class", tr: "sınıf", tanim: "Bir alet çantası: veriler (*attributes*) ve davranışlar (metotlar) içerir.", ornek: "*String* ve *Math* birer sınıftır." },
            { ikon: "📦", terim: "Package", tr: "paket", tanim: "Sınıf grubu. *String* ve *Math* gibi temel sınıflar otomatik gelir.", ornek: "Bu sınıflar için *import* yazmana gerek yok." },
            { ikon: "📄", terim: "Java Quick Reference", tr: "sınavdaki özet sayfa", tanim: "Sınavda elinde olacak özet belge: sınıfların ve metotların imzaları orada yazar.", ornek: "*Math* ve *String* imzalarını ezberlemezsin; oradan bakarsın." }
          ] }
      ]
    },
    {
      baslik: "Belgede *precondition* ve *postcondition*",
      kisa: "Precondition'a güven; postcondition metodun sözüdür.",
      bloklar: [
        { tip: "kod", baslik: "Bir metodun *Javadoc* belgesi", kod: "/** Returns the average score.\n *  Precondition: count > 0\n *  Postcondition: returns the mean of the scores */\npublic static double average(int sum, int count)", vurgu: [2, 3],
          not: "*Javadoc*, metodun üstüne yazılan belge yorumudur: ne yaptığını, önkoşulunu ve sonucunu anlatır." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🚧", terim: "Precondition", tr: "önkoşul", tanim: "Metodu çağırmadan önce doğru olması gereken şart. Doğru çağırmak ==çağıranın sorumluluğudur==.", ornek: "*average* için count sıfırdan büyük olmalıdır." },
            { ikon: "🔏", terim: "Postcondition", tr: "sonkoşul", tanim: "Metot bitince garanti edilen sonuç.", ornek: "*average* çağrısı bittiğinde skorların ortalaması döndürülmüş olur." }
          ] },
        { tip: "tuzak", metin: "*FRQ*'da belge \"Precondition: count > 0\" diyorsa o şarta güvenirsin. Şartı kontrol eden ekstra kod yazmak puan getirmez.", yanlis: "Önce count > 0 mı diye bakan bir if yazmalıyım.", dogru: "*Precondition* sağlanıyor kabul edilir; kontrol kodu yazma." }
      ]
    },
    {
      baslik: "*Method signature*: metodun kimliği",
      kisa: "İmza ad ile parametre listesidir; dönüş tipi imzaya girmez.",
      bloklar: [
        { tip: "kod", baslik: "Bir metodun başlığı", kod: "public static double average(int a, int b)", vurgu: [1],
          not: "Ad *average*, parametreler iki *int*, dönüş tipi *double*. İmza: average(int, int)." },
        { tip: "tablo", baslik: "Başlığı parçalara ayır", head: ["Parça", "Bu metotta", "İmzada mı?"], rows: [
            ["Ad", "*average*", "Evet"],
            ["Parametre listesi", "(*int* a, *int* b): iki yuva", "Evet (tipleri ve sırası)"],
            ["Dönüş tipi", "*double*: geriye bir *double* verir", "Hayır"]
          ], vurgu: 2, not: "Dönüş tipi imzanın parçası değildir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🪪", terim: "Method signature", tr: "metot imzası", tanim: "Metodun adı ile parametre listesi (tiplerin sırası).", ornek: "average(*int*, *int*)" },
            { ikon: "🎁", terim: "Return type", tr: "dönüş tipi", tanim: "Metodun geriye verdiği değerin tipi. Hiçbir şey vermiyorsa *void* yazılır.", ornek: "*double average(...)* metodu geriye bir *double* verir." }
          ] }
      ]
    },
    {
      baslik: "*void* mu, değer döndüren mi?",
      kisa: "void iş yapar; değer döndüren metodun sonucunu kullanmalısın.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📣", baslik: "*void* metot", maddeler: ["Bir iş yapar, örneğin ekrana yazar", "Geriye değer vermez", "Çağrısı bir değişkene atanamaz"] },
          sag: { ikon: "🎯", baslik: "Dönüş tipli metot", maddeler: ["Bir değer döndürür", "Değeri bir kutuya koy ya da başka ifadede kullan", "Kullanmazsan değer kaybolur"] },
          oyun: [
            { metin: "public static void printBanner()", cevap: "sol", neden: "Dönüş tipi *void*: iş yapar, değer vermez." },
            { metin: "public static int add(int a, int b)", cevap: "sag", neden: "*int* döndürür: add(3, 4) çağrısı 7 verir." },
            { metin: "Çağrısı bir *int* değişkenine atanamayan metot.", cevap: "sol", neden: "*void* atanacak bir değer üretmez; derleyici izin vermez." },
            { metin: "Çağrısını bir değişkene koyup sonucu sonra kullanabilirim.", cevap: "sag", neden: "Değer döndüren metodun sonucu saklanabilir." },
            { metin: "Yalnızca ekrana yazı yazan bir metot.", cevap: "sol", neden: "Bir şey yazmak iştir; geriye değer vermez." }
          ] },
        { tip: "kod", baslik: "Üç çağrı, üç sonuç", kod: "int total = add(3, 4);\nadd(3, 4);\nint x = printBanner();", vurgu: [2, 3],
          not: "1. satır: 7, total kutusuna girer. 2. satır: 7 hesaplanır ama kimse almaz, ekrana da çıkmaz. 3. satır derlenmez, çünkü *printBanner* *void*." },
        { tip: "tuzak", metin: "Değer döndüren metodu tek başına çağırırsan sonuç çöpe gider. *void* metodu bir kutuya atamaya çalışırsan kod derlenmez.", yanlis: "add(3, 4); satırı 7'yi saklar ya da ekrana yazar.", dogru: "Değeri saklamak için bir değişkene ata ya da başka bir ifadede kullan." }
      ]
    },
    {
      baslik: "*Parameter*, *argument* ve *call by value*",
      kisa: "Metot argümanın kopyasını alır; senin değişkenine dokunmaz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🕳️", terim: "Parameter", tr: "parametre", tanim: "Metot tanımındaki değişken: boş bir yuva.", ornek: "*average*(*int* a, *int* b) içindeki a ve b." },
            { ikon: "🔌", terim: "Argument", tr: "argüman", tanim: "Çağrıda yuvaya verdiğin değer. Sayı, sıra ve tip olarak imzaya uymalıdır.", ornek: "*average*(3, 4) çağrısındaki 3 ve 4." },
            { ikon: "📠", terim: "Call by value", tr: "değerle çağırma", tanim: "*Java* argümanın bir kopyasını gönderir. Metot kopyayı değiştirse de asıl değişken aynı kalır.", ornek: "score 50 iken boost(score) çağırırsan score yine 50'dir." }
          ] },
        { tip: "kod", baslik: "Kopya büyür, asıl kalır", kod: "public static void boost(int x) {\n    x = x + 10;\n}\n\nint score = 50;\nboost(score);\nSystem.out.println(score);", vurgu: [2, 6], cikti: "50" },
        { tip: "tablo", baslik: "İzleme tablosu", head: ["Satır", "score (dışarıda)", "x (metodun içinde)"], rows: [
            ["int score = 50;", "50", "—"],
            ["boost(score); çağrılır", "50", "50 (kopya)"],
            ["x = x + 10;", "50", "60"],
            ["metot biter", "50", "yok olur"],
            ["println(score)", "50 yazılır", "—"]
          ], vurgu: 2 },
        { tip: "tuzak", metin: "Metot parametreyi büyüttü diye dışarıdaki değişken de büyümez; ikisi ayrı kutudur.", yanlis: "boost(score) çağrısından sonra score 60 olur.", dogru: "*Call by value*: metot kendi kopyasını değiştirir, score 50 kalır." }
      ]
    },
    {
      baslik: "*Overloading* ve *static* metot çağırmak",
      kisa: "Aynı ad, farklı parametre listesi olabilir; static metot sınıf adıyla çağrılır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👯", terim: "Overloading", tr: "aşırı yükleme", tanim: "Aynı adlı birden çok metot; parametre listeleri farklıdır. *Java* hangisini çağıracağını argümanlara bakarak seçer.", ornek: "*area*(*int*, *int*) dikdörtgen, *area*(*double*) daire alanı hesaplar." },
            { ikon: "🏷️", terim: "Static (class) method", tr: "sınıf metodu", tanim: "Nesneye değil sınıfa aittir. Sınıfın dışından SınıfAdı.metot() ile, aynı sınıfın içinden yalnız adıyla çağrılır.", ornek: "*Math.sqrt*(16) çağrısı 4.0 verir." }
          ] },
        { tip: "tablo", baslik: "Hangi *area* çalışır?", head: ["Çağrı", "Seçilen metot", "Sonuç"], rows: [
            ["area(3, 4)", "area(*int*, *int*)", "Derlenir"],
            ["area(5)", "area(*double*): 5, 5.0'a genişler", "Derlenir"],
            ["area(2.5)", "area(*double*)", "Derlenir"],
            ["area(2.5, 3)", "iki argüman için (*int*, *int*) lazım; 2.5 *int* değil", "Derlenmez"]
          ], vurgu: 3 },
        { tip: "kod", baslik: "Static metot çağrı kalıpları", kod: "double r = Math.sqrt(16);\nint a = area(3, 4);", not: "1. satır başka sınıfın *static* metodu: SınıfAdı.metot(); r = 4.0 olur. 2. satır aynı sınıfın içinden: yalnız adıyla; a = 12 olur. Ekrana bir şey yazılmaz, değerler değişkenlerde durur." }
      ]
    },
    {
      baslik: "*AP* örneği: sonucu çöpe giden çağrı",
      kisa: "Dönüş değerini kullanmayan çağrı hiçbir değişkeni değiştirmez.",
      bloklar: [
        { tip: "kod", baslik: "Ne yazdırılır?", kod: "public static int twice(int n) { return n + n; }\npublic static void show(int n) { System.out.println(n); }\n\nint a = twice(3);\ntwice(a);\nshow(a);\nshow(twice(a) + 1);", vurgu: [5], cikti: "6\n13" },
        { tip: "ornek", baslik: "Adım adım çalıştır", durum: "twice(n) iki katını döndürür, show(n) yazdırır. Yukarıdaki dört satır çalışınca konsolda ne görünür?", adimlar: [
            "4. satır: twice(3) = 3 + 3 = 6; a = 6.",
            "5. satır: twice(a) → 12 hesaplanır, ==ama hiçbir kutuya girmez==. a hâlâ 6. (TUZAK)",
            "6. satır: show(a) → 6 yazar.",
            "7. satır: twice(a) = 12, +1 = 13; show(13) → 13 yazar."
          ], sonuc: "Konsol: 6, alt satırda 13. Tuzak şıklar: 6, 12, 13 (5. satırın bir şey yazdığını sanmak) ya da 12 ile 25." }
      ]
    },
    {
      baslik: "Sınav için bilmen gerekenler",
      kisa: "Çağırmayı yaz, imzayı oku, paket adlarını ezberleme.",
      bloklar: [
        { tip: "tablo", head: ["", "Unit 1'de bu konuda"], rows: [
            ["✍️ Yazarsın", "Verilen metodu doğru argümanlarla çağırıp dönüş değerini kullanmak; *static* metodu sınıf adıyla çağırmak (*Calc.square*(5) gibi); *FRQ*'daki yardımcı metotları kullanmak (puan getirir)."],
            ["👀 Okursun", "İmzalar, *precondition*'lar, *Java Quick Reference* satırları, *call by value*, *overloading*'de seçilen metot."],
            ["🚫 Gerekmez", "*import* satırları, paket adlarını ezberlemek, *precondition*'ı kontrol eden kod."]
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*API* ve *library* hazır sınıflar ve metotlardır; belge ne yaptığını söyler.",
            "*Precondition*'a güven (çağıranın sorumluluğu); *postcondition* metodun sözüdür.",
            "İmza = ad + parametre listesi; dönüş tipi imzaya girmez.",
            "Argümanlar sayı, sıra ve tip olarak imzaya uymalı; *Java* argümanın kopyasını yollar (*call by value*).",
            "*void* iş yapar; dönüş tipli metodun değerini kullanmazsan kaybolur; *void* bir kutuya atanamaz.",
            "*Overloading*: aynı ad, farklı parametre listesi; hangisinin çağrıldığını argümanlar belirler.",
            "*Static* metot SınıfAdı.metot() ile çağrılır; aynı sınıfta yalnız adıyla."
          ] }
      ]
    }
  ]
};
