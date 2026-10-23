/* Kitora not defteri · cs201 · 2.1–2.2 Seçim ve Tekrar İçeren Algoritmalar, Boolean İfadeler
   Kaynak: AP CSA CED 2025–26 (Unit 2) kapsamı; ap-videolar/kaynak/csa-u1/PLAN.md. Blok türleri: /ap/_kit/defter.js başı.
   Not: metin alanlarında çift eşittir işareti "=​=" (araya görünmez boşluk) ile yazıldı; yoksa vurgu işaretiyle karışır. */
window.DEFTER = {
  slug: "cs201",
  amac: "Bu konu programların üç yapı taşını anlatıyor: sıra, seçim ve tekrar. Sonra seçimin ve tekrarın kalbindeki *boolean* ifadeleri, yani true ya da false veren karşılaştırmaları yazmayı ve değerlendirmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Algoritmanın üç yapı taşı",
      kisa: "Her algoritma sıra, seçim ve tekrarın karışımıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "➡️", terim: "Sequencing", tr: "sıra", tanim: "Adımlar yazıldığı sırayla tek tek çalışır. ==Sıra değişirse sonuç da değişir.==", ornek: "Önce tostu al, sonra öde; tersini yapsan kasiyer şaşırır." },
            { ikon: "🔀", terim: "Selection", tr: "seçim", tanim: "Bir *boolean* koşulun sonucuna göre bazı adımlar çalışır, bazıları atlanır.", ornek: "Bakiye 20 TL'den azsa kartı yükle." },
            { ikon: "🔁", terim: "Iteration", tr: "tekrar", tanim: "Bir adım kümesi, koşul sağlandıkça ya da belli sayıda yinelenir.", ornek: "Kuyruktaki herkese sırayla bilet ver." }
          ] },
        { tip: "ikili", sol: { ikon: "🔀", baslik: "*Selection*", maddeler: ["Bir kez karar verir", "Kod ya çalışır ya atlanır"] },
          sag: { ikon: "🔁", baslik: "*Iteration*", maddeler: ["Aynı adımları yineler", "Bir bitiş koşulu ya da sayısı vardır"] },
          oyun: [
            { metin: "Kantinde bakiye 20 TL'den azsa kartı yükle, değilse devam et.", cevap: "sol", neden: "Tek bir karar: *selection*." },
            { metin: "Her öğrencinin sınav kâğıdını teker teker puanla.", cevap: "sag", neden: "Aynı iş her öğrenci için yineleniyor: *iteration*." },
            { metin: "Yağmur yağıyorsa şemsiye al.", cevap: "sol", neden: "Koşula bağlı tek karar: *selection*." },
            { metin: "Kuyruk bitene kadar sıradaki kişiye bilet ver.", cevap: "sag", neden: "Koşul sağlandıkça tekrar: *iteration*." }
          ] }
      ]
    },
    {
      baslik: "Algoritmayı *pseudocode* ile anlatmak",
      kisa: "Önce adımları sade dille yaz, kodlamayı sonra yap.",
      bloklar: [
        { tip: "adimlar", baslik: "En yüksek notu bulma (*pseudocode*)", adimlar: [
            { baslik: "1 · Başla", metin: "enYuksek = ilk not. (sıra)" },
            { baslik: "2 · Tekrarla", metin: "Kalan her not için aşağıdaki kontrolü yap. (tekrar)" },
            { baslik: "3 · Karar ver", metin: "Not enYuksek'ten büyükse enYuksek = bu not. (seçim)" },
            { baslik: "4 · Bitir", metin: "enYuksek'i yazdır. (sıra)" }
          ] },
        { tip: "kod", baslik: "Üç yapı bir arada: 1'den 5'e çiftleri yaz", kod: `for (int i = 1; i <= 5; i++)
{
    if (i % 2 == 0)
    {
        System.out.println(i);
    }
}`, vurgu: [1, 3], cikti: "2\n4", not: "*for* tekrarı, *if* seçimi kurar. İkisinin ayrıntısı sıradaki konularda." }
      ]
    },
    {
      baslik: "*boolean* ve ilişkisel operatörler",
      kisa: "Karşılaştırma true ya da false verir; if ve while buna bakar.",
      bloklar: [
        { tip: "tablo", baslik: "x = 7 iken altı operatör", head: ["Operatör", "Anlamı", "İfade", "Sonuç"], rows: [
            ["<", "küçüktür", "x < 5", "false"],
            [">", "büyüktür", "x > 5", "true"],
            ["<=", "küçük ya da eşit", "x <= 6", "false"],
            [">=", "büyük ya da eşit", "x >= 7", "true"],
            ["==", "eşit mi?", "x == 7", "true"],
            ["!=", "eşit değil mi?", "x != 7", "false"]
          ], not: "Sonuç hep *boolean* türündedir; bir *boolean* değişkene atanabilir." },
        { tip: "kod", baslik: "Karşılaştırmayı değişkende saklamak", kod: `int score = 72;
boolean passed = score >= 50;
System.out.println(passed);
System.out.println(score % 2 == 0);
System.out.println(score != 72);`, vurgu: [2], cikti: "true\ntrue\nfalse" }
      ]
    },
    {
      baslik: "Eşitlikte iki tuzak: atama ve double",
      kisa: "Tek eşittir atar; double'ları tam eşitlikle karşılaştırma.",
      bloklar: [
        { tip: "kod", baslik: "Yuvarlama hatası ve tam sayı bölmesi", kod: `double a = 0.1 + 0.2;
System.out.println(a == 0.3);
System.out.println(Math.abs(a - 0.3) < 0.0001);
System.out.println(7 / 2 == 3.5);`, vurgu: [2, 3], cikti: "false\ntrue\nfalse", not: "0.1 + 0.2 bilgisayarda tam 0,3 olmaz (0.30000000000000004). Sonuçları fark küçük mü diye karşılaştır. 7 / 2 ise tam sayı bölmesidir: 3." },
        { tip: "tuzak", baslik: "= ile =​= karışır", metin: "Tek eşittir değer **atar**, çift eşittir **karşılaştırır**. if (lives = 0) yazarsan derleyici hata verir: atamanın sonucu int'tir, *boolean* değil.", yanlis: "if (x = 5) \"x, 5 mi?\" diye sorar.", dogru: "Sormak için x =​= 5 yaz. Tek eşittir yalnızca değer atar." }
      ]
    },
    {
      baslik: "Nesneleri karşılaştırmak: =​= ve *equals*",
      kisa: "Eşittir operatörü adrese bakar, equals içeriğe bakar.",
      bloklar: [
        { tip: "kod", baslik: "Üç String, iki nesne", kod: `String a = new String("kod");
String b = new String("kod");
String c = a;
System.out.println(a == b);
System.out.println(a == c);
System.out.println(a.equals(b));`, vurgu: [4, 5, 6], cikti: "false\ntrue\ntrue", not: "a ve b ayrı nesneler. c ise a ile aynı nesneyi gösterir (*aliasing*)." },
        { tip: "ikili", sol: { ikon: "📍", baslik: "Operatörler (=​=, !=)", maddeler: ["Primitive türlerde değerlere bakar", "Nesnelerde aynı nesne mi (referans) diye bakar"] },
          sag: { ikon: "📝", baslik: "*equals*", maddeler: ["İçerik aynı mı diye bakar", "String için doğru karşılaştırma"] },
          oyun: [
            { metin: "İki int değişkenin değeri aynı mı?", cevap: "sol", neden: "Primitive değerler =​= ile karşılaştırılır." },
            { metin: "İki String'in harfleri aynı mı?", cevap: "sag", neden: "İçerik için *equals*." },
            { metin: "İki değişken aynı nesneyi mi gösteriyor?", cevap: "sol", neden: "Referans eşitliği =​= ile sorulur." },
            { metin: "Yazılan şifre kayıtlı şifreyle aynı mı?", cevap: "sag", neden: "String içeriği: *equals*." }
          ] }
      ]
    },
    {
      baslik: "Boolean ifadeyi adım adım değerlendirmek",
      kisa: "Önce aritmetik, sonra karşılaştırma; sonuç hep true ya da false.",
      bloklar: [
        { tip: "kod", kod: `int x = 17;
int y = 9;
boolean r = x % 5 + 3 > y / 2;
System.out.println(r);`, vurgu: [3], cikti: "true" },
        { tip: "ornek", baslik: "x % 5 + 3 > y / 2", durum: "x = 17 ve y = 9. İfade true mu, false mu?",
          adimlar: [
            "Öncelik: aritmetik işlemler önce, karşılaştırma en son yapılır.",
            "Sol taraf: 17 % 5 = 2, sonra 2 + 3 = 5.",
            "Sağ taraf: 9 / 2 tam sayı bölmesidir, sonuç 4 (4,5 değil).",
            "Karşılaştırma: 5 > 4."
          ], sonuc: "5 > 4 olduğu için ifade ==true==." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Algoritma = sıra + *selection* + *iteration*. Sıra değişirse sonuç değişir.",
            "*Selection* tek bir karar verir (*if*); *iteration* aynı adımları yineler (*for*, *while*).",
            "İlişkisel operatörler: <, >, <=, >=, =​=, !=. Sonuç her zaman *boolean*.",
            "Tek eşittir atar; çift eşittir karşılaştırır. if (x = 5) derleme hatasıdır.",
            "double'larda tam eşitliğe güvenme: 0.1 + 0.2 =​= 0.3 false verir.",
            "Nesnelerde =​= aynı nesne mi diye bakar; içerik için *equals* kullan.",
            "İfadede önce aritmetik (tam sayı bölmesi dahil), en son karşılaştırma yapılır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int a = 12;
int b = 5;
boolean r = a % b >= b / 2;
System.out.println(r);` },
      opts: ["true", "false", "2", "Derleme hatası"], a: 0,
      why: "12 % 5 = 2 ve 5 / 2 tam sayı bölmesiyle 2'dir; 2 >= 2 true. 5 / 2'yi 2,5 sanırsan 2 >= 2,5 false çıkar ve en çekici yanlış şık olan false'a gidersin." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `double x = 0.1 + 0.2;
boolean p = (x == 0.3);
boolean q = (7 / 2 == 3);
System.out.println(p + " " + q);` },
      opts: ["true true", "false true", "true false", "false false"], a: 1,
      why: "0.1 + 0.2 yuvarlama hatası yüzünden 0.30000000000000004 olur, bu yüzden x =​= 0.3 false. 7 / 2 tam sayı bölmesiyle 3'tür, yani 3 =​= 3 true. \"true true\" diyen, ilkini matematikteki gibi hesaplamıştır." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `String s = new String("ab");
String t = new String("ab");
String u = t;
System.out.println((s == t) + " " + (t == u) + " " + s.equals(u));` },
      opts: ["false false true", "true true true", "false true false", "false true true"], a: 3,
      why: "s ve t ayrı iki nesnedir: s =​= t false. u, t ile aynı nesneyi gösterir: t =​= u true. *equals* içeriğe bakar, \"ab\" ile \"ab\" aynıdır: true. \"false false true\" diyen, u = t atamasının aynı nesneyi paylaştırdığını (*aliasing*) unutmuştur." },
    { q: "Aşağıdaki *pseudocode* için hangisi doğrudur?",
      fig: { type: "code", caption: "Sepet toplamı", code: `total = 0
for each item in basket:
    if price of item > 100:
        reduce price of item by 10 percent
    add price of item to total
print total` },
      opts: ["Sıra ve seçim içerir, tekrar içermez", "Yalnızca sıra içerir", "Sıra, seçim ve tekrar içerir", "Sıra ve tekrar içerir, seçim içermez"], a: 2,
      why: "\"for each\" bir tekrardır, \"if\" bir seçimdir, kalan satırlar sıradır. Seçimin döngünün içinde olması onu tekrar yapmaz; iki yapı birlikte bulunur." },
    { q: "Aşağıdaki kod derlenip çalıştırılmak istenirse ne olur?",
      fig: { type: "code", code: `int lives = 3;
if (lives = 0)
{
    System.out.println("Game over");
}` },
      opts: ["Derleme hatası: if içindeki ifade boolean değil", "\"Game over\" yazdırır", "Hiçbir şey yazdırmaz", "Çalışma zamanı hatası fırlatır"], a: 0,
      why: "lives = 0 bir atamadır ve sonucu int'tir; if ise boolean ister, bu yüzden derleyici kodu reddeder. \"Hiçbir şey yazdırmaz\" diyen, bunu lives =​= 0 yazılmış ve false çıkmış sanmıştır." }
  ]
};
