/* Kitpath not defteri · cs205 · 2.8 for Döngüsü
   Kaynak: AP CSA CED 2025–26 (Unit 2) kapsamı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs205",
  amac: "Bu konu *for* döngüsünü anlatıyor: başlatma, koşul ve güncellemeyi tek satırda toplayan döngü. Üç parçanın ne zaman çalıştığını, geri sayımı, farklı adımları, döngü değişkeninin kapsamını ve *for* ile *while* arasındaki dönüşümü öğreneceksin.",
  bolumler: [
    {
      baslik: "*for*'un üç parçası",
      kisa: "Başlatma bir kez, koşul her turdan önce, güncelleme her turdan sonra.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "başlatma", alt: "bir kez" }, ";", { t: "koşul", alt: "her turdan önce" }, ";", { t: "güncelleme", alt: "her turdan sonra" }], aciklama: "for (başlatma; koşul; güncelleme) { gövde }" },
        { tip: "kod", baslik: "Dört tur", kod: `for (int i = 1; i <= 4; i++)
{
    System.out.println("tur " + i);
}`, vurgu: [1], cikti: "tur 1\ntur 2\ntur 3\ntur 4", not: "Sıra: int i = 1 (bir kez), i <= 4 sına, gövde, i++, tekrar sına… i = 5 olunca 5 <= 4 false." }
      ]
    },
    {
      baslik: "Döngü değişkeninin kapsamı",
      kisa: "Başlıkta tanımlanan değişken yalnızca döngünün içinde yaşar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔢", terim: "Loop variable", tr: "döngü değişkeni", tanim: "Başlıkta başlatılan ve her turda güncellenen sayaç. Genellikle i, j, k adı verilir.", ornek: "for (int i = 0; ...) içindeki i." },
            { ikon: "🔭", terim: "Scope", tr: "kapsam", tanim: "Bir değişkenin kullanılabildiği bölge. Başlıkta tanımlanan değişken döngü bitince ==yok olur==.", ornek: "Döngüden sonra println(i) yazarsan derleme hatası olur." }
          ] },
        { tip: "kod", baslik: "Değişkeni döngüden önce tanımlarsan", kod: `int total = 0;
int i;
for (i = 1; i <= 5; i++)
{
    total = total + i;
}
System.out.println(total + " " + i);`, vurgu: [2], cikti: "15 6", not: "i döngüden önce tanımlandığı için döngü bitince de erişilebilir: son değeri 6'dır. Başlıkta int i yazılsaydı son satır derlenmezdi." }
      ]
    },
    {
      baslik: "Geri sayım, adım ve sınırlar",
      kisa: "Koşul ve güncelleme birlikte hangi değerlerin işleneceğini belirler.",
      bloklar: [
        { tip: "kod", baslik: "Geri sayım", kod: `for (int t = 3; t >= 1; t--)
{
    System.out.println(t);
}
System.out.println("Başla!");`, vurgu: [1], cikti: "3\n2\n1\nBaşla!" },
        { tip: "tablo", baslik: "Beş farklı başlık, kaç tur?", head: ["for başlığı", "i değerleri", "Tur"], rows: [
            ["for (int i = 0; i < 5; i++)", "0, 1, 2, 3, 4", "5"],
            ["for (int i = 1; i <= 5; i++)", "1, 2, 3, 4, 5", "5"],
            ["for (int i = 10; i > 0; i = i - 3)", "10, 7, 4, 1", "4"],
            ["for (int i = 3; i >= 0; i--)", "3, 2, 1, 0", "4"],
            ["for (int i = 0; i < 20; i += 5)", "0, 5, 10, 15", "4"]
          ], not: "Adım 1 iken i < son için son − ilk, i <= son için bir fazla tur atılır. Adım büyükse değerleri tek tek yaz." }
      ]
    },
    {
      baslik: "Toplam döngüsü",
      kisa: "Döngü her sayıyı gezer, if hangisinin toplanacağına karar verir.",
      bloklar: [
        { tip: "kod", baslik: "3'ün katlarının toplamı", kod: `int sum = 0;
for (int i = 1; i <= 10; i++)
{
    if (i % 3 == 0)
    {
        sum = sum + i;
    }
}
System.out.println(sum);`, vurgu: [4, 6], cikti: "18" },
        { tip: "ornek", baslik: "sum nasıl 18 olur?", durum: "1'den 10'a kadar 3'e bölünen sayıları toplayan kodu izle.",
          adimlar: [
            "i = 1 ve 2: 3'e bölünmez, sum = 0.",
            "i = 3: 3 % 3 = 0, sum = 3.",
            "i = 4 ve 5: bölünmez, sum = 3.",
            "i = 6: sum = 3 + 6 = 9.",
            "i = 7 ve 8: bölünmez, sum = 9.",
            "i = 9: sum = 9 + 9 = 18.",
            "i = 10: 10 % 3 = 1, sum = 18. i = 11 olunca 11 <= 10 false, döngü biter."
          ], sonuc: "sum = ==18== (3 + 6 + 9)." }
      ]
    },
    {
      baslik: "*for* ile *while* birbirine dönüşür",
      kisa: "Her for bir while'a çevrilebilir; seçim okunabilirlik meselesidir.",
      bloklar: [
        { tip: "kod", baslik: "Aynı döngü, iki yazılış", kod: `// while
int i = 0;
while (i < 6)
{
    System.out.print(i + " ");
    i = i + 2;
}
// for
for (int j = 0; j < 6; j = j + 2)
{
    System.out.print(j + " ");
}`, vurgu: [2, 3, 6, 9], cikti: "0 2 4 0 2 4", not: "*while*'da başlatma döngüden önce, güncelleme gövdenin sonunda yazılır; *for* hepsini başlığa toplar." },
        { tip: "ikili", sol: { ikon: "🔢", baslik: "*for*", maddeler: ["Tur sayısı baştan belli", "Sayaç ve adım başlıkta"] },
          sag: { ikon: "❓", baslik: "*while*", maddeler: ["Ne zaman biteceği belli değil", "Koşul gövdede değişen duruma bağlı"] },
          oyun: [
            { metin: "10 kez zil çal.", cevap: "sol", neden: "Tur sayısı belli: *for*." },
            { metin: "Kullanıcı doğru şifreyi girene kadar sor.", cevap: "sag", neden: "Kaç tur süreceği belli değil: *while*." },
            { metin: "Bir sayının rakamlarını, kaç rakamı olduğunu bilmeden ayır.", cevap: "sag", neden: "Sayı sıfırlanana kadar sürer: *while*." },
            { metin: "1'den 50'ye kadar sayıları topla.", cevap: "sol", neden: "Başlangıç, son ve adım belli: *for*." }
          ] }
      ]
    },
    {
      baslik: "Döngü değişkenine gövdede dokunmak",
      kisa: "Gövdede i değişirse tur sayısı da değişir; tabloyla izle.",
      bloklar: [
        { tip: "kod", baslik: "Gövdede de i++", kod: `for (int i = 0; i < 6; i++)
{
    System.out.print(i + " ");
    i++;
}`, vurgu: [4], cikti: "0 2 4" },
        { tip: "tablo", baslik: "İzleme tablosu", head: ["Tur", "i (başta)", "Yazılan", "Gövdede i++", "Güncelleme i++"], rows: [
            ["1", "0", "0", "1", "2"],
            ["2", "2", "2", "3", "4"],
            ["3", "4", "4", "5", "6"],
            ["Sınama", "6", "–", "–", "6 < 6 false, biter"]
          ], vurgu: 3 },
        { tip: "tuzak", metin: "Gövdede i++ yazarsan i her turda iki artar; tur sayısı yarıya iner.", yanlis: "for döngüsünde i yalnızca başlıktaki güncellemeyle değişir.", dogru: "Gövdede de değiştirilebilir. Böyle bir kod görünce tur sayısını izleme tablosuyla yeniden say." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "for (başlatma; koşul; güncelleme): başlatma bir kez, koşul her turdan önce, güncelleme her turdan sonra çalışır.",
            "Koşul false olunca gövde çalışmaz ve döngüden çıkılır.",
            "Başlıkta tanımlanan değişken döngü bitince yok olur (*scope*).",
            "Geri sayım için t--, adım için i = i + 3 ya da i += 3 kullanılır.",
            "i < son ile i <= son arasında bir tur fark vardır.",
            "Her *for* bir *while*'a çevrilebilir; tur sayısı belliyse *for* okunaklıdır.",
            "Gövdede döngü değişkenini değiştirmek tur sayısını bozar; tabloyla izle."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `for (int i = 2; i < 12; i = i + 4)
{
    System.out.print(i + " ");
}` },
      opts: ["2 6 10 14", "2 6 10", "6 10", "2 6"], a: 1,
      why: "i = 2, 6, 10 değerlerinde gövde çalışır. i = 14 olunca koşul 14 < 12 false'tur ve gövde çalışmaz; 14 yazılmaz. 14'lü şık koşulu güncellemeden önce sınamayı unutur." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int count = 0;
for (int i = 7; i > 1; i--)
{
    count = count + 2;
}
System.out.println(count);` },
      opts: ["6", "10", "12", "14"], a: 2,
      why: "i = 7, 6, 5, 4, 3, 2 için altı tur döner (i = 1'de 1 > 1 false). Her turda 2 eklenir: 12. 5 tur sayan 10'a, i = 1'i de sayıp 7 tur hesaplayan 14'e gider." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int total = 0;
int i;
for (i = 2; i < 8; i += 2)
{
    total = total + i;
}
System.out.println(total + " " + i);` },
      opts: ["12 6", "12 8", "20 8", "Derleme hatası"], a: 1,
      why: "i döngüden önce tanımlandığı için son satırda da erişilebilir. i = 2, 4, 6 için total = 12 olur; i = 8 olunca 8 < 8 false ve çıkılır, i = 8 kalır. \"Derleme hatası\" i'nin başlıkta tanımlandığını varsayar; \"12 6\" çıkıştaki son değeri unutur." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int p = 1;
for (int q = 1; q <= 4; q++)
{
    p = p + q;
    q++;
}
System.out.println(p);` },
      opts: ["11", "7", "10", "5"], a: 3,
      why: "q = 1: p = 2, gövdede q = 2, güncelleme q = 3. q = 3: p = 5, gövdede q = 4, güncelleme q = 5. 5 <= 4 false, p = 5. Gövdedeki q++ olmasaydı q = 1, 2, 3, 4 ile p = 11 olurdu; \"11\" şıkkı bu satırı görmezden gelir." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `for (int t = 20; t > 0; t = t / 2)
{
    System.out.print(t + " ");
}` },
      opts: ["20 10 5 2 1", "20 10 5 2.5 1.25", "20 10 5 2 1 0", "20 10 5"], a: 0,
      why: "t bir int olduğundan t / 2 tam sayı bölmesidir: 20, 10, 5, 2, 1. t = 0 olunca 0 > 0 false, 0 yazılmaz. \"2.5 1.25\" şıkkı bölmeyi ondalıklı sanır." }
  ]
};
