/* Kitora not defteri · cs203 · 2.5–2.6 Bileşik Boolean İfadeler ve De Morgan
   Kaynak: AP CSA CED 2025–26 (Unit 2) kapsamı. Blok türleri: /ap/_kit/defter.js başı.
   Not: metin alanlarında çift eşittir "=​=" ile yazıldı (araya görünmez boşluk), vurgu işaretiyle karışmasın diye. */
window.DEFTER = {
  slug: "cs203",
  amac: "Bu konu *boolean* ifadeleri !, && ve || ile birleştirmeyi anlatıyor. Operatör önceliğini, kısa devre değerlendirmeyi ve De Morgan kurallarıyla iki ifadenin eşdeğer olup olmadığını nasıl göstereceğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Üç mantıksal operatör: !, && ve ||",
      kisa: "! tersler, && ikisi de true ister, || biri yeter.",
      bloklar: [
        { tip: "tablo", baslik: "Doğruluk tablosu (*truth table*)", head: ["a", "b", "a && b", "a || b", "!a"], rows: [
            ["true", "true", "true", "true", "false"],
            ["true", "false", "false", "true", "false"],
            ["false", "true", "false", "true", "true"],
            ["false", "false", "false", "false", "true"]
          ], not: "&& yalnızca iki taraf da true iken true; || yalnızca iki taraf da false iken false." },
        { tip: "kod", baslik: "Okul kartı kontrolü", kod: `int age = 16;
boolean hasCard = true;
boolean ok = age >= 12 && age <= 18 && hasCard;
System.out.println(ok);
System.out.println(!hasCard || age > 17);`, vurgu: [3], cikti: "true\nfalse" }
      ]
    },
    {
      baslik: "Öncelik sırası: !, sonra &&, sonra ||",
      kisa: "Parantez yoksa önce !, sonra &&, en son || çalışır.",
      bloklar: [
        { tip: "ornek", baslik: "a || b && c", durum: "a = true, b = false, c = false. İfade ne verir?",
          adimlar: [
            "Öncelik: && , || 'dan önce yapılır; ifade a || (b && c) gibi okunur.",
            "Önce b && c: false && false = false.",
            "Sonra a || false: true || false = true."
          ], sonuc: "==true==. Soldan sağa okusaydın (a || b) && c = false çıkardı; sıra önemli." },
        { tip: "tuzak", baslik: "Matematik gibi yazılmaz", metin: "0 < x < 10 Java'da yazılamaz: önce 0 < x bir *boolean* olur, sonra bu *boolean* 10 ile karşılaştırılmaya çalışılır ve derleme hatası verilir.", yanlis: "0 < x < 10 aralık kontrolüdür; x =​= 3 || 4 de \"3 ya da 4\" demektir.", dogru: "Her karşılaştırmayı tam yaz: x > 0 && x < 10 ve x =​= 3 || x =​= 4." }
      ]
    },
    {
      baslik: "Kısa devre değerlendirme",
      kisa: "Sonuç soldan belli olursa sağ taraf hiç çalışmaz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⏭️", terim: "Short-circuit evaluation", tr: "kısa devre", tanim: "&& 'da sol false ise, || 'da sol true ise sonuç belli olur ve sağ tarafa bakılmaz.", ornek: "false && herhangi bir şey her zaman false'tur." },
            { ikon: "🛡️", terim: "Guard condition", tr: "koruyucu koşul", tanim: "Tehlikeli işlemden önce, soldaki güvenlik kontrolüdür; sağ taraf yalnızca güvenliyse çalışır.", ornek: "people != 0 && cost / people > 30" }
          ] },
        { tip: "ikili", sol: { ikon: "▶️", baslik: "Sağ taraf çalışır", maddeler: ["&& için sol taraf true", "|| için sol taraf false"] },
          sag: { ikon: "⏭️", baslik: "Sağ taraf atlanır", maddeler: ["&& için sol taraf false", "|| için sol taraf true"] },
          oyun: [
            { metin: "n != 0 && 10 / n > 1   (n = 0)", cevap: "sag", neden: "Sol false ve &&: sonuç belli, 10 / n hiç çalışmaz." },
            { metin: "n =​= 0 || 10 / n > 1   (n = 0)", cevap: "sag", neden: "Sol true ve ||: sonuç belli, sağ taraf atlanır." },
            { metin: "n =​= 0 && 10 / n > 1   (n = 0)", cevap: "sol", neden: "Sol true: && için sağa bakmak gerekir; 10 / 0 ArithmeticException fırlatır." },
            { metin: "n != 0 || 10 / n > 1   (n = 0)", cevap: "sol", neden: "Sol false: || için sağa bakmak gerekir; ArithmeticException." }
          ] },
        { tip: "kod", baslik: "Koruyucu koşul", kod: `int people = 0;
int cost = 120;
if (people != 0 && cost / people > 30)
{
    System.out.println("Pahalı");
}
else
{
    System.out.println("Kontrol");
}`, vurgu: [3], cikti: "Kontrol", not: "people != 0 false olduğundan cost / people hiç hesaplanmaz; sıfıra bölme hatası oluşmaz." }
      ]
    },
    {
      baslik: "De Morgan kuralları",
      kisa: "Parantezin önündeki ! içeri girerken && ile || yer değiştirir.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "!(A && B)", alt: "ikisi birden true değil" }, "=", { t: "!A || !B", alt: "en az biri false" }], aciklama: "Birinci De Morgan kuralı: && , || olur; her terim ayrı ayrı terslenir." },
        { tip: "formul", parcalar: [{ t: "!(A || B)", alt: "biri bile true değil" }, "=", { t: "!A && !B", alt: "ikisi de false" }], aciklama: "İkinci De Morgan kuralı: || , && olur; her terim ayrı ayrı terslenir." },
        { tip: "tablo", baslik: "Birinci kuralın kanıtı: son iki sütun aynı", head: ["a", "b", "a && b", "!(a && b)", "!a || !b"], rows: [
            ["true", "true", "true", "false", "false"],
            ["true", "false", "false", "true", "true"],
            ["false", "true", "false", "true", "true"],
            ["false", "false", "false", "true", "true"]
          ], not: "Dört satırda da iki ifade aynı sonucu verdi: eşdeğerler." }
      ]
    },
    {
      baslik: "Eşdeğer mi? Terslemeyi doğru yap",
      kisa: "İlişkilerin tersi: < ile >=, > ile <=, =​= ile !=.",
      bloklar: [
        { tip: "tablo", baslik: "İlişkisel operatörlerin tersi", head: ["İfade", "Tersi"], rows: [
            ["x < 5", "x >= 5"],
            ["x > 5", "x <= 5"],
            ["x <= 5", "x > 5"],
            ["x >= 5", "x < 5"],
            ["x == 5", "x != 5"],
            ["x != 5", "x == 5"]
          ], not: "Sınır değeri (5) hangi tarafta kalıyor, ona dikkat et: < in tersi > değil, >= olur." },
        { tip: "ornek", baslik: "!(age < 12 || age > 65) sadeleştirme", durum: "Müze: 12–65 yaş arası tam fiyat. ! içermeyen eşdeğerini yaz.",
          adimlar: [
            "İkinci De Morgan: !(A || B) = !A && !B, burada A = age < 12 ve B = age > 65.",
            "!A = age >= 12 ve !B = age <= 65.",
            "Birleştir: age >= 12 && age <= 65."
          ], sonuc: "age >= 12 && age <= 65. Deneme: age = 30 için ikisi de true, age = 70 için ikisi de false." },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Eşdeğer", maddeler: ["Her terim terslenmiş", "&& ile || yer değiştirmiş"] },
          sag: { ikon: "❌", baslik: "Eşdeğer değil", maddeler: ["Bir terim terslenmemiş", "Operatör olduğu gibi kalmış"] },
          oyun: [
            { metin: "!(x > 5 && y < 3)  ile  x <= 5 || y >= 3", cevap: "sol", neden: "&& , || oldu ve iki ilişki de terslendi." },
            { metin: "!(x > 5 || y < 3)  ile  x <= 5 && y >= 3", cevap: "sol", neden: "|| , && oldu ve iki ilişki de terslendi." },
            { metin: "!(x > 5 && y < 3)  ile  x <= 5 && y >= 3", cevap: "sag", neden: "&& , || olmalıydı." },
            { metin: "!(a || b)  ile  !a || !b", cevap: "sag", neden: "|| , && olmalıydı: !a && !b." }
          ] }
      ]
    },
    {
      baslik: "İç içe *if* ile && aynı işi yapar",
      kisa: "Else yokken ardışık iç içe if'ler tek && ile yazılabilir.",
      bloklar: [
        { tip: "kod", baslik: "İki yazılış, aynı sonuç", kod: `int a = 6;
if (a > 0)
{
    if (a % 2 == 0)
    {
        System.out.println("pozitif çift");
    }
}
if (a > 0 && a % 2 == 0)
{
    System.out.println("pozitif çift");
}`, vurgu: [2, 4, 9], cikti: "pozitif çift\npozitif çift" },
        { tip: "tuzak", baslik: "*else* eklenince eşdeğerlik bozulur", metin: "a = -3 olsun. İç içe biçimde dış koşul false olduğu için iç *if* ve onun *else*'i hiç denenmez. Birleşik biçimde ise tek *else*, koşulun herhangi bir parçası false iken çalışır.", yanlis: "Her iç içe if, aynı koşulları && ile bağlayan tek if'e eşdeğerdir.", dogru: "Eşdeğerlik else yokken geçerlidir; else eklenince dalların kapsamı değişir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "! tersler; && ikisi de true ister; || en az biri true yeter.",
            "Öncelik: önce !, sonra &&, en son ||. Emin değilsen parantez kullan.",
            "Aralığı x > 0 && x < 10 diye yaz; 0 < x < 10 derleme hatasıdır.",
            "Kısa devre: && 'da sol false, || 'da sol true ise sağ taraf hiç çalışmaz.",
            "Koruyucu koşulu her zaman solda tut: people != 0 && cost / people > 30.",
            "De Morgan: !(A && B) = !A || !B ve !(A || B) = !A && !B.",
            "Tersleme: < ile >=, > ile <=, =​= ile !=. Sınır değerine dikkat.",
            "İki ifade eşdeğer mi? Doğruluk tablosunun bütün satırlarında aynı sonucu vermeli."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int x = 4;
int y = 0;
if (y != 0 && x / y > 1)
{
    System.out.println("A");
}
else if (y == 0 || x / y > 1)
{
    System.out.println("B");
}
else
{
    System.out.println("C");
}` },
      opts: ["A", "B", "C", "ArithmeticException fırlatılır"], a: 1,
      why: "y != 0 false, && için sonuç belli olur ve x / y hiç hesaplanmaz. else if'te y =​= 0 true, || için de sağ taraf atlanır: B yazılır. Kısa devre olmasaydı 4 / 0 yüzünden ArithmeticException oluşurdu; son şık bu yüzden çekicidir." },
    { q: "Kod çalışınca ekrana yazılan üç satır sırayla hangisidir?",
      fig: { type: "code", code: `boolean a = true;
boolean b = false;
boolean c = false;
System.out.println(a || b && c);
System.out.println((a || b) && c);
System.out.println(!a || !b && c);` },
      opts: ["true, false, false", "true, true, false", "false, false, false", "true, false, true"], a: 0,
      why: "&& , || 'dan önce çalışır. 1. satır a || (b && c) = true || false = true. 2. satırda parantez önce gelir: (true || false) && false = false. 3. satırda ! önce: !a = false, !b = true; true && false = false; false || false = false. \"true, false, true\" diyen, son satırda önceliği bozmuştur." },
    { q: "Aşağıdaki r ifadesiyle her x ve y değeri için aynı sonucu veren hangisidir?",
      fig: { type: "code", code: `boolean r = !(x < 3 || y >= 5);` },
      opts: ["x >= 3 || y < 5", "x > 3 && y <= 5", "x >= 3 && y < 5", "x < 3 && y >= 5"], a: 2,
      why: "De Morgan: !(A || B) = !A && !B. !(x < 3) = x >= 3 ve !(y >= 5) = y < 5; || , && olur. \"x >= 3 || y < 5\" operatörü değiştirmeyi unutur; \"x > 3 && y <= 5\" ise sınırları yanlış çevirir (x = 3 iken r true, bu şık false)." },
    { q: "Aşağıdaki ifade hangi durumda true olur?",
      fig: { type: "code", code: `boolean r = (x || y) && !(x && y);` },
      opts: ["x ve y'den en az biri true ise", "x ve y ikisi de true ise", "x ve y ikisi de false ise", "x ve y'den tam biri true ise"], a: 3,
      why: "Doğruluk tablosu: (true, true) için true && false = false; (true, false) için true && true = true; (false, true) için true; (false, false) için false. Yani yalnızca tam biri true iken true. \"En az biri\" şıkkı (true, true) satırını yanlış sayar." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `String s = "";
boolean r1 = s.length() > 0 && s.substring(0, 1).equals("k");
boolean r2 = s.length() == 0 || s.substring(0, 1).equals("k");
System.out.println(r1 + " " + r2);` },
      opts: ["true true", "false true", "false false", "StringIndexOutOfBoundsException fırlatılır"], a: 1,
      why: "s boş: length() > 0 false olduğundan && kısa devre yapar, substring hiç çalışmaz ve r1 false. r2'de length() =​= 0 true olduğundan || kısa devre yapar ve r2 true. Kısa devre olmasaydı boş String'de substring(0, 1) hata fırlatırdı; son şık bu yüzden çekicidir." }
  ]
};
