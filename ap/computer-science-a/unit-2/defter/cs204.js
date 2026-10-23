/* Kitora not defteri · cs204 · 2.7 while Döngüsü
   Kaynak: AP CSA CED 2025–26 (Unit 2) kapsamı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs204",
  amac: "Bu konu *while* döngüsünü anlatıyor: koşul true olduğu sürece bir bloğu tekrarlayan yapı. Döngüyü izleme tablosuyla takip etmeyi, hiç çalışmayan ve hiç bitmeyen döngüleri ve \"bir eksik, bir fazla\" hatasını öğreneceksin.",
  bolumler: [
    {
      baslik: "*while* nasıl çalışır?",
      kisa: "Koşul her turdan önce sorulur; true ise gövde çalışır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔁", terim: "Iteration", tr: "tur", tanim: "Döngü gövdesinin bir kez çalışması. Üç tur dönen döngü gövdeyi üç kez çalıştırır.", ornek: "n = 1, 2, 3 için yazan satır üç tur eder." },
            { ikon: "🎛️", terim: "Loop control variable", tr: "döngü denetim değişkeni", tanim: "Koşulda sorulan ve gövdede değiştirilen değişken. ==Değişmezse döngü bitmez.==", ornek: "Aşağıdaki kodda n++ satırı n'yi değiştirir." }
          ] },
        { tip: "kod", baslik: "Üç tur ve bir son", kod: `int n = 1;
while (n <= 3)
{
    System.out.println("tur " + n);
    n++;
}
System.out.println("bitti");`, vurgu: [2], cikti: "tur 1\ntur 2\ntur 3\nbitti" },
        { tip: "adimlar", baslik: "Bir turun dört adımı", adimlar: [
            { baslik: "1 · Koşulu sına", metin: "n <= 3 sorulur." },
            { baslik: "2 · true ise gövde", metin: "Süslü parantez içindeki ifadeler sırayla çalışır." },
            { baslik: "3 · Başa dön", metin: "Gövde bitince koşul yeniden sorulur." },
            { baslik: "4 · false ise çık", metin: "Döngüden çıkılır ve sonraki satır çalışır." }
          ] }
      ]
    },
    {
      baslik: "İzleme tablosu (*trace table*)",
      kisa: "Her tur için değişkenlerin değerini bir satıra yaz.",
      bloklar: [
        { tip: "kod", baslik: "İki değişkenli döngü", kod: `int sum = 0;
int i = 1;
while (i < 5)
{
    sum = sum + i;
    i = i + 2;
}
System.out.println(sum + " " + i);`, vurgu: [3], cikti: "4 5" },
        { tip: "tablo", baslik: "Aynı kodun izleme tablosu", head: ["Tur", "Koşul i < 5", "sum (tur sonu)", "i (tur sonu)"], rows: [
            ["Başlangıç", "–", "0", "1"],
            ["1", "1 < 5 true", "1", "3"],
            ["2", "3 < 5 true", "4", "5"],
            ["Sınama", "5 < 5 false", "4", "5"]
          ], vurgu: 3, not: "Son satırda koşul false olduğu için gövde çalışmaz; değerler aynen kalır ve çıktı \"4 5\" olur." }
      ]
    },
    {
      baslik: "Koşul false olunca durur",
      kisa: "Döngü hedefe ulaşınca durur; hedef aşılmış olabilir.",
      bloklar: [
        { tip: "kod", baslik: "Harçlık biriktirme", kod: `int money = 0;
int week = 0;
while (money < 100)
{
    money = money + 30;
    week++;
}
System.out.println(week + " " + money);`, vurgu: [3], cikti: "4 120" },
        { tip: "grafik", baslik: "Birikim, hedef çizgisini aşınca döngü biter", xlabel: "Hafta", ylabel: "Birikim (TL)", xmax: 5, ymax: 14,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [{ v: 3, label: "30" }, { v: 6, label: "60" }, { v: 9, label: "90" }, { v: 10, label: "100" }, { v: 12, label: "120" }],
          ogeler: [
            { id: "lim", tip: "cizgi", renk: 1, kesik: true, from: [0, 10], to: [5, 10], etiket: "hedef 100" },
            { id: "p1", tip: "nokta", renk: 0, x: 1, y: 3, etiket: "30", gizli: true },
            { id: "p2", tip: "nokta", renk: 0, x: 2, y: 6, etiket: "60", gizli: true },
            { id: "p3", tip: "nokta", renk: 0, x: 3, y: 9, etiket: "90", gizli: true },
            { id: "p4", tip: "nokta", renk: 2, x: 4, y: 12, etiket: "120", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: money = 0. Koşul money < 100 true, döngü başlar." },
            { metin: "1. hafta: money = 30. 30 < 100, devam.", goster: ["p1"] },
            { metin: "2. hafta 60, 3. hafta 90. İkisi de hedefin altında, devam.", goster: ["p2", "p3"] },
            { metin: "4. hafta: money = 120. 120 < 100 ==false==, döngü biter. Hedef aşıldı: sonuç 100 değil 120.", goster: ["p4"] }
          ] }
      ]
    },
    {
      baslik: "Hiç çalışmayan ve hiç bitmeyen döngüler",
      kisa: "Koşul baştan false ise gövde hiç çalışmaz; hiç false olmazsa döngü bitmez.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "⛔", baslik: "Hiç çalışmaz", maddeler: ["Koşul ilk soruda false", "Gövde sıfır kez çalışır"] },
          sag: { ikon: "♾️", baslik: "Hiç bitmez", maddeler: ["Koşul hiçbir zaman false olmaz", "Çoğunlukla güncelleme unutulmuştur"] },
          oyun: [
            { metin: "int x = 10; while (x < 5) { x++; }", cevap: "sol", neden: "10 < 5 baştan false: gövde hiç çalışmaz." },
            { metin: "int x = 3; while (x < 10) { System.out.println(x); }", cevap: "sag", neden: "x hiç değişmiyor, koşul hep true: sonsuz döngü." },
            { metin: "int x = 0; while (x != 7) { x = x + 2; }", cevap: "sag", neden: "x hep çift kalır, 7'ye hiç ulaşmaz: sonsuz döngü." },
            { metin: "int x = 9; while (x > 9) { x--; }", cevap: "sol", neden: "9 > 9 baştan false: gövde hiç çalışmaz." }
          ] },
        { tip: "tuzak", baslik: "Noktalı virgül döngüyü boşaltır", metin: "while (i < 3); yazarsan döngünün gövdesi boş olur. i hiç değişmediği için döngü sonsuza kadar döner.", yanlis: "while (i < 3); satırından sonraki { } bloğu döngünün gövdesidir.", dogru: "Noktalı virgül gövdeyi boş yapar; { } bloğu döngüye ait olmaz ve hiç çalışmaz." }
      ]
    },
    {
      baslik: "Bir eksik, bir fazla (*off-by-one*)",
      kisa: "< ile <= arasındaki fark tam bir turdur.",
      bloklar: [
        { tip: "tablo", baslik: "Başlangıç ve koşula göre tur sayısı", head: ["Başlangıç", "Koşul", "i değerleri", "Tur"], rows: [
            ["i = 0", "i < 3", "0, 1, 2", "3"],
            ["i = 0", "i <= 3", "0, 1, 2, 3", "4"],
            ["i = 1", "i <= 3", "1, 2, 3", "3"],
            ["i = 1", "i < 3", "1, 2", "2"]
          ] },
        { tip: "formul", parcalar: [{ t: "i < son", alt: "son − ilk tur" }, "ve", { t: "i <= son", alt: "son − ilk + 1 tur" }], aciklama: "Adım 1 iken geçerli. Sınav sorusunda önce ilk ve son değere, sonra < mi yoksa <= mi kullanıldığına bak." },
        { tip: "tuzak", metin: "<= sınır değerini de içine alır; aynı başlangıçla bir tur fazla döner.", yanlis: "while (i <= 3) ile while (i < 3) aynı sayıda tur atar.", dogru: "i = 0 ile başlarsan biri 3, diğeri 4 tur atar." }
      ]
    },
    {
      baslik: "Rakamları ayırmak: % 10 ve / 10",
      kisa: "Son rakam % 10 ile alınır, / 10 ile atılır.",
      bloklar: [
        { tip: "kod", baslik: "Rakamlar toplamı", kod: `int n = 4721;
int sum = 0;
while (n > 0)
{
    sum = sum + n % 10;
    n = n / 10;
}
System.out.println(sum);`, vurgu: [5, 6], cikti: "14" },
        { tip: "ornek", baslik: "4721'in rakamları toplamı", durum: "n = 4721 ve sum = 0 iken döngü bitince sum kaç olur?",
          adimlar: [
            "Tur 1: n % 10 = 1, sum = 1; n = 4721 / 10 = 472.",
            "Tur 2: n % 10 = 2, sum = 3; n = 47.",
            "Tur 3: n % 10 = 7, sum = 10; n = 4.",
            "Tur 4: n % 10 = 4, sum = 14; n = 0.",
            "n > 0 false: döngü biter."
          ], sonuc: "sum = ==14==. Tam sayı bölmesi her turda son rakamı atar; n sıfırlanınca döngü durur." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*while*: koşul her turdan önce sorulur; true ise gövde çalışır, sonra başa dönülür.",
            "Koşuldaki değişken gövdede değişmezse döngü bitmez (sonsuz döngü).",
            "Koşul baştan false ise gövde hiç çalışmaz.",
            "İzleme tablosu: her tur için değişkenleri bir satıra yaz, son satıra koşulun false olduğunu not et.",
            "< ile <= arası bir tur eder: sınır değerine dikkat et (*off-by-one*).",
            "while (koşul); gövdeyi boşaltır.",
            "Rakam ayırma kalıbı: n % 10 son rakamı verir, n / 10 son rakamı atar; n > 0 iken tekrarla."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int a = 20;
int steps = 0;
while (a > 3)
{
    a = a - 6;
    steps++;
}
System.out.println(a + " " + steps);` },
      opts: ["2 3", "8 2", "-4 4", "2 4"], a: 0,
      why: "a: 20, 14, 8, 2. Üç çıkarmadan sonra a = 2 olur ve 2 > 3 false'tur; steps 3'te kalır, çıktı \"2 3\". \"2 4\" tur sayacını bir fazla sayar; \"8 2\" döngüyü bir erken bitirir." },
    { q: "Döngü bittiğinde count kaç olur?",
      fig: { type: "code", code: `int i = 2;
int count = 0;
while (i <= 14)
{
    count++;
    i = i + 3;
}
System.out.println(count);` },
      opts: ["4", "5", "6", "Döngü sonsuza kadar sürer"], a: 1,
      why: "i değerleri 2, 5, 8, 11, 14. 14 <= 14 true olduğu için beşinci tur da çalışır, sonra i = 17 olup döngü biter: count = 5. (14 - 2) / 3 = 4 hesabı, ilk değeri saymayı ve <= ile son değerin de dahil olduğunu unutur." },
    { q: "x'in ilk değeri aşağıdakilerden hangisi olursa döngü sonlanır?",
      fig: { type: "code", caption: "START yerine şıklardaki değer yazılacak", code: `int x = START;
while (x != 12)
{
    x = x + 4;
}` },
      opts: ["2", "3", "4", "5"], a: 2,
      why: "x yalnızca 4, 8, 12 gibi 12 - 4k değerlerine basarsa 12'ye ulaşır; ilk değer 4 olunca 4, 8, 12 ile döngü biter. 2, 3 ve 5'ten başlayınca x hiçbir zaman tam 12 olmaz, 12'yi atlar ve x != 12 hep true kalır (sonsuz döngü)." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int n = 50305;
int count = 0;
while (n > 0)
{
    if (n % 10 == 0)
    {
        count++;
    }
    n = n / 10;
}
System.out.println(count);` },
      opts: ["5", "0", "1", "2"], a: 3,
      why: "n % 10 son rakamı, n / 10 son rakamı atılmış sayıyı verir. Rakamlar sondan başa 5, 0, 3, 0, 5: iki tane 0 var, count = 2. \"5\" şıkkı sıfırları değil rakam sayısını verir." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int a = 1;
int b = 1;
int t = 0;
while (t < 4)
{
    int c = a + b;
    a = b;
    b = c;
    t++;
}
System.out.println(a + " " + b);` },
      opts: ["3 5", "5 8", "8 13", "5 13"], a: 1,
      why: "t = 0, 1, 2, 3 için dört tur döner. Tur sonlarında (a, b): (1, 2), (2, 3), (3, 5), (5, 8). \"8 13\" bir tur fazla, \"3 5\" bir tur eksik izler." }
  ]
};
