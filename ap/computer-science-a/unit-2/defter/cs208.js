/* Kitora not defteri · cs208 · 2.11 İç İçe Döngüler
   Kaynak: AP CSA CED 2025–26 (Unit 2) kapsamı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs208",
  amac: "Bu konu bir döngünün içine başka bir döngü koymayı anlatıyor. Dıştaki döngünün her turunda içtekinin baştan çalıştığını, toplam tur sayısının çarpım olduğunu ve üçgen, tablo ve çift bulma gibi kalıpları yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Dış tur, iç tur: çarpım tablosu",
      kisa: "Dıştaki döngünün her turunda içteki döngü baştan sona çalışır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪆", terim: "Nested iteration", tr: "iç içe döngü", tanim: "Bir döngünün gövdesinde başka bir döngü bulunması. İçteki döngü, dıştaki her tur için baştan sona çalışır.", ornek: "Her satır için bütün sütunları gez." },
            { ikon: "🕰️", terim: "Outer and inner loop", tr: "dış ve iç döngü", tanim: "Dıştaki yavaş, içteki hızlı döner; saatin akrebi ile yelkovanı gibi.", ornek: "Çarpım tablosunda r dış, c iç döngüdür." }
          ] },
        { tip: "kod", baslik: "3 satır, 4 sütunluk çarpım tablosu", kod: `for (int r = 1; r <= 3; r++)
{
    for (int c = 1; c <= 4; c++)
    {
        System.out.print(r * c + " ");
    }
    System.out.println();
}`, vurgu: [1, 3], cikti: "1 2 3 4\n2 4 6 8\n3 6 9 12", not: "print satırı bitirmez, println() satırı bitirir. println() iç döngü bittikten sonra, dış döngünün gövdesinde çalışır." },
        { tip: "grafik", baslik: "Ziyaret sırası: her satırda iç döngü baştan başlar", xlabel: "c (sütun)", ylabel: "r (satır)", xmax: 5, ymax: 4,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }],
          ogeler: [
            { id: "n11", tip: "nokta", renk: 0, x: 1, y: 1, etiket: "1", gizli: true },
            { id: "n12", tip: "nokta", renk: 0, x: 2, y: 1, etiket: "2", gizli: true },
            { id: "n13", tip: "nokta", renk: 0, x: 3, y: 1, etiket: "3", gizli: true },
            { id: "n14", tip: "nokta", renk: 0, x: 4, y: 1, etiket: "4", gizli: true },
            { id: "n21", tip: "nokta", renk: 1, x: 1, y: 2, etiket: "2", gizli: true },
            { id: "n22", tip: "nokta", renk: 1, x: 2, y: 2, etiket: "4", gizli: true },
            { id: "n23", tip: "nokta", renk: 1, x: 3, y: 2, etiket: "6", gizli: true },
            { id: "n24", tip: "nokta", renk: 1, x: 4, y: 2, etiket: "8", gizli: true },
            { id: "n31", tip: "nokta", renk: 2, x: 1, y: 3, etiket: "3", gizli: true },
            { id: "n32", tip: "nokta", renk: 2, x: 2, y: 3, etiket: "6", gizli: true },
            { id: "n33", tip: "nokta", renk: 2, x: 3, y: 3, etiket: "9", gizli: true },
            { id: "n34", tip: "nokta", renk: 2, x: 4, y: 3, etiket: "12", gizli: true }
          ],
          durumlar: [
            { metin: "r = 1: iç döngü c = 1, 2, 3, 4 koşar ve 1 2 3 4 yazılır.", goster: ["n11", "n12", "n13", "n14"] },
            { metin: "r = 2: iç döngü ==baştan== başlar (c yine 1'den): 2 4 6 8.", goster: ["n21", "n22", "n23", "n24"] },
            { metin: "r = 3: iç döngü yine baştan: 3 6 9 12.", goster: ["n31", "n32", "n33", "n34"] },
            { metin: "Dış döngü 3 tur, iç döngü her turda 4 tur attı: gövde toplam 3 × 4 = 12 kez çalıştı." }
          ] }
      ]
    },
    {
      baslik: "Tur sayısı çarpımdır, art arda ise toplam",
      kisa: "İç içe döngüde turlar çarpılır; yan yana döngülerde toplanır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "Dış tur" }, "×", { t: "İç tur" }, "=", { t: "Toplam tur", alt: "iç gövde kaç kez çalışır" }], aciklama: "İç tur sayısı dış döngüden bağımsızsa geçerlidir." },
        { tip: "kod", baslik: "4 × 5 tur", kod: `int count = 0;
for (int a = 0; a < 4; a++)
{
    for (int b = 0; b < 5; b++)
    {
        count++;
    }
}
System.out.println(count);`, vurgu: [6], cikti: "20" },
        { tip: "ikili", sol: { ikon: "✖️", baslik: "İç içe: çarpım", maddeler: ["Biri diğerinin gövdesinde", "Turlar çarpılır"] },
          sag: { ikon: "➕", baslik: "Art arda: toplam", maddeler: ["İki döngü yan yana", "Turlar toplanır"] },
          oyun: [
            { metin: "for (a < 3) { for (b < 4) { … } }", cevap: "sol", neden: "İç içe: 3 × 4 = 12 tur." },
            { metin: "for (a < 3) { … }  sonra  for (b < 4) { … }", cevap: "sag", neden: "Art arda: 3 + 4 = 7 tur." },
            { metin: "Bir while döngüsünün gövdesinde bir for döngüsü.", cevap: "sol", neden: "İç içe: turlar çarpılır." },
            { metin: "Programda arka arkaya yazılmış iki ayrı döngü.", cevap: "sag", neden: "Art arda: turlar toplanır." }
          ] }
      ]
    },
    {
      baslik: "İç döngü dışa bağlıysa: üçgen",
      kisa: "İç döngünün sınırı dış değişkense iç tur sayıları 1, 2, 3 diye artar.",
      bloklar: [
        { tip: "kod", baslik: "Merdiven deseni", kod: `for (int row = 1; row <= 4; row++)
{
    String line = "";
    for (int k = 1; k <= row; k++)
    {
        line = line + "#";
    }
    System.out.println(line);
}`, vurgu: [3, 4], cikti: "#\n##\n###\n####" },
        { tip: "tablo", baslik: "İzleme tablosu", head: ["row", "İç döngü kaç tur?", "line"], rows: [
            ["1", "1", "#"],
            ["2", "2", "##"],
            ["3", "3", "###"],
            ["4", "4", "####"]
          ], not: "İç gövde toplam 1 + 2 + 3 + 4 = 10 kez çalışır (4 × 4 = 16 değil)." }
      ]
    },
    {
      baslik: "Çiftleri bulmak: iç döngü dıştan başlar",
      kisa: "İç döngü dış değişkenin bir ilerisinden başlarsa her çift bir kez gezilir.",
      bloklar: [
        { tip: "kod", baslik: "1…4 arasında kaç çift var?", kod: `int pairs = 0;
for (int a = 1; a <= 4; a++)
{
    for (int b = a + 1; b <= 4; b++)
    {
        pairs++;
    }
}
System.out.println(pairs);`, vurgu: [4], cikti: "6" },
        { tip: "ornek", baslik: "6 çift nasıl çıkar?", durum: "a = 1…4 için iç döngünün b değerlerini yaz.",
          adimlar: [
            "a = 1: b = 2, 3, 4 → 3 çift.",
            "a = 2: b = 3, 4 → 2 çift.",
            "a = 3: b = 4 → 1 çift.",
            "a = 4: b = 5 ve 5 <= 4 false → 0 çift."
          ], sonuc: "3 + 2 + 1 + 0 = ==6== çift." },
        { tip: "kod", baslik: "String'de aynı harf çiftleri", kod: `String s = "banana";
int same = 0;
for (int i = 0; i < s.length(); i++)
{
    for (int j = i + 1; j < s.length(); j++)
    {
        if (s.substring(i, i + 1).equals(s.substring(j, j + 1)))
        {
            same++;
        }
    }
}
System.out.println(same);`, vurgu: [5, 7], cikti: "4", not: "a harfleri 1., 3. ve 5. sırada: 3 çift. n harfleri 2. ve 4. sırada: 1 çift. Toplam 4." }
      ]
    },
    {
      baslik: "Sıfırlamayı unutma",
      kisa: "İçteki sayaç ya da String her dış turda yeniden başlatılmalıdır.",
      bloklar: [
        { tip: "kod", baslik: "İç içe while: j her turda 1'den başlar", kod: `int i = 1;
while (i <= 3)
{
    int j = 1;
    while (j <= i)
    {
        System.out.print(j);
        j++;
    }
    System.out.print(" ");
    i++;
}`, vurgu: [4], cikti: "1 12 123" },
        { tip: "tablo", baslik: "İzleme tablosu", head: ["i", "j değerleri", "Yazılan"], rows: [
            ["1", "1", "1"],
            ["2", "1, 2", "12"],
            ["3", "1, 2, 3", "123"]
          ] },
        { tip: "tuzak", baslik: "Sıfırlanmayan değişken", metin: "Merdiven kodunda String line = \"\"; satırını dış döngünün üstüne alırsan satırlar birikir: #, ###, ######, ##########.", yanlis: "İçteki değişken her dış turda kendiliğinden temiz başlar.", dogru: "Her dış turda sıfırlanması gereken değişkeni dış döngünün gövdesinde ata (ya da tanımla)." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Dış döngünün her turunda iç döngü baştan sona çalışır.",
            "İç içe döngüde iç gövdenin çalışma sayısı: dış tur × iç tur. Art arda döngüde turlar toplanır.",
            "İç sınır dış değişkense (j <= i) iç tur sayıları 1, 2, 3… diye artar: toplam 1 + 2 + … olur.",
            "Çiftler için iç döngüyü j = i + 1'den başlat; her çift bir kez gezilir.",
            "print satırı bitirmez, println() bitirir; println() dış döngünün gövdesine yazılır.",
            "Her dış turda yeniden başlaması gereken sayaç ya da String'i dış gövdede sıfırla.",
            "İzleme tablosunda her dış tur için iç döngünün değerlerini ayrı ayrı yaz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int count = 0;
for (int i = 1; i <= 5; i++)
{
    for (int j = 1; j <= i; j++)
    {
        count++;
    }
}
System.out.println(count);` },
      opts: ["5", "10", "15", "25"], a: 2,
      why: "i = 1…5 için iç döngü sırasıyla 1, 2, 3, 4, 5 tur atar: 1 + 2 + 3 + 4 + 5 = 15. 25 şıkkı iç döngüyü her seferinde 5 tur sanır; 10 şıkkı i = 5 turunu eksik sayar." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `for (int a = 1; a <= 3; a++)
{
    for (int b = 3; b >= a; b--)
    {
        System.out.print(b);
    }
    System.out.print("|");
}` },
      opts: ["321|32|3|", "123|12|1|", "321|321|321|", "3|32|321|"], a: 0,
      why: "a = 1: b = 3, 2, 1 → 321|. a = 2: b = 3, 2 → 32|. a = 3: b = 3 → 3|. İç döngü azalarak gider ve alt sınır a ile yükselir. \"321|321|321|\" alt sınırı sabit 1 sanar." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int n = 0;
for (int i = 0; i < 4; i++)
{
    n = n + 1;
}
for (int j = 0; j < 6; j++)
{
    n = n + 2;
}
System.out.println(n);` },
      opts: ["10", "16", "24", "28"], a: 1,
      why: "Döngüler iç içe değil, art arda: ilki 4 kez 1 ekler (4), ikincisi 6 kez 2 ekler (12). Toplam 16. \"24\" turları çarpar (4 × 6), \"10\" turları toplayıp 1 ve 2 değerlerini unutur." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int i = 1;
int j = 1;
while (i <= 3)
{
    while (j <= 2)
    {
        System.out.print("#");
        j++;
    }
    i++;
}` },
      opts: ["######", "###", "Hiçbir şey yazdırmaz", "##"], a: 3,
      why: "j döngülerin dışında bir kez 1 yapılır ve dış turlarda sıfırlanmaz. i = 1'de iç döngü j = 1, 2 için iki # yazar, j = 3 kalır. i = 2 ve 3'te j <= 2 baştan false olduğundan iç döngü çalışmaz. Toplam ##. \"######\" j'nin her turda 1'e döndüğünü sanar." },
    { q: "Kod çalışınca c kaç olur?",
      fig: { type: "code", code: `int c = 0;
for (int x = 1; x <= 4; x++)
{
    for (int y = x; y <= 4; y++)
    {
        if ((x + y) % 2 == 0)
        {
            c++;
        }
    }
}
System.out.println(c);` },
      opts: ["4", "5", "6", "7"], a: 2,
      why: "x = 1: y = 1…4, toplamlar 2, 3, 4, 5 → çift olanlar 2. x = 2: y = 2…4, toplamlar 4, 5, 6 → 2. x = 3: y = 3, 4, toplamlar 6, 7 → 1. x = 4: y = 4, toplam 8 → 1. Toplam 2 + 2 + 1 + 1 = 6." }
  ]
};
