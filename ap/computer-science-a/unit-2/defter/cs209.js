/* Kitora not defteri · cs209 · 2.12 Çalışma Zamanını Kabaca Ölçmek
   Kaynak: AP CSA CED 2025–26 (Unit 2) kapsamı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs209",
  amac: "Bu konu bir kodun ne kadar iş yaptığını saymayı anlatıyor: bir ifadenin kaç kez çalıştığını (*statement execution count*) bulup iki algoritmayı karşılaştıracaksın. Girdi büyüdükçe işin nasıl arttığını sayılarla göreceksin.",
  bolumler: [
    {
      baslik: "İfade kaç kez çalışır?",
      kisa: "Çalışma zamanını, ifadelerin kaç kez çalıştığını sayarak tahmin ederiz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔢", terim: "Statement execution count", tr: "ifade çalışma sayısı", tanim: "Bir ifadenin program boyunca kaç kez çalıştığı. Çalışma zamanı kabaca bu sayılarla orantılıdır.", ornek: "Döngü gövdesi tur sayısı kadar çalışır." },
            { ikon: "⏱️", terim: "Informal run-time analysis", tr: "kabaca çalışma zamanı analizi", tanim: "Kronometre kullanmadan, çalışan ifadeleri sayarak iki kodu karşılaştırmak.", ornek: "Hangi kod daha az ifade çalıştırıyor?" }
          ] },
        { tip: "kod", baslik: "Hangi satır kaç kez çalışır?", kod: `int total = 0;                  // 1 kez
for (int i = 0; i < 100; i++)   // koşul 101 kez
{
    total = total + i;          // 100 kez
}
System.out.println(total);      // 1 kez`, vurgu: [4], cikti: "4950", not: "Gövde 100 tur çalışır; koşul ise bir fazla, 101 kez sınanır (son sınama false verir)." }
      ]
    },
    {
      baslik: "Girdi büyüdükçe iş nasıl büyür?",
      kisa: "Sabit iş girdiden etkilenmez; tek döngü doğrusal, iç içe döngü kare büyür.",
      bloklar: [
        { tip: "grafik", baslik: "Çalışan ifade sayısı ve girdi boyutu n", xlabel: "n (girdi boyutu)", ylabel: "Çalışan ifade", xmax: 7, ymax: 40,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }],
          yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }, { v: 20, label: "20" }, { v: 36, label: "36" }],
          ogeler: [
            { id: "sbt", tip: "cizgi", renk: 0, from: [0, 5], to: [6, 5], etiket: "sabit", gizli: true },
            { id: "dgr", tip: "cizgi", renk: 1, from: [0, 0], to: [6, 6], etiket: "n", gizli: true },
            { id: "yrm", tip: "cizgi", renk: 3, from: [0, 0], to: [6, 3], etiket: "n / 2", gizli: true },
            { id: "kre", tip: "egri", renk: 2, noktalar: [[0, 0], [1, 1], [2, 4], [3, 9], [4, 16], [5, 25], [6, 36]], etiket: "n × n", gizli: true }
          ],
          durumlar: [
            { metin: "==Sabit iş==: döngüsüz kod ya da sabit turlu döngü. n büyüse de çalışan ifade sayısı aynı kalır.", goster: ["sbt"] },
            { metin: "==Tek döngü== (i < n): iş n ile birlikte doğrusal artar. n = 6 için 6 tur.", goster: ["dgr"] },
            { metin: "Adımı 2 olan döngü (i += 2): yine doğrusal, ama işin yarısı: n / 2.", goster: ["yrm"] },
            { metin: "==İç içe döngü== (n × n): iş karesel artar. n = 6'da 36; n iki katına çıkarsa iş yaklaşık 4 katına çıkar.", goster: ["kre"] }
          ] },
        { tip: "tablo", baslik: "Aynı üç yapı, daha büyük n", head: ["n", "Sabit (5 ifade)", "Tek döngü (n)", "İç içe (n × n)"], rows: [
            ["10", "5", "10", "100"],
            ["100", "5", "100", "10 000"],
            ["1000", "5", "1000", "1 000 000"]
          ], not: "n 10 kat büyüyünce sabit iş aynı kalır, tek döngü 10 katına, iç içe döngü 100 katına çıkar." }
      ]
    },
    {
      baslik: "İki algoritmayı karşılaştırmak",
      kisa: "Aynı sonucu veren iki koddan hangisi daha az ifade çalıştırıyor?",
      bloklar: [
        { tip: "kod", baslik: "1'den n'ye toplam: döngü ve formül", kod: `int n = 1000;
int sum1 = 0;
for (int i = 1; i <= n; i++)
{
    sum1 = sum1 + i;
}
int sum2 = n * (n + 1) / 2;
System.out.println(sum1 + " " + sum2);`, vurgu: [5, 7], cikti: "500500 500500" },
        { tip: "ornek", baslik: "Döngü mü, formül mü?", durum: "İkisi de 1'den 1000'e kadar toplamı bulur. Hangisi daha az iş yapar?",
          adimlar: [
            "Döngü: sum1 = sum1 + i satırı 1000 kez çalışır.",
            "Formül: sum2 satırı yalnızca 1 kez çalışır.",
            "İkisi de 500500 verir: 1000 × 1001 / 2.",
            "n büyüdükçe döngünün işi artar, formülün işi aynı kalır."
          ], sonuc: "Formül sabit iş yapar; döngü n ile ==doğrusal== büyür." },
        { tip: "tuzak", baslik: "Satır sayısı iş sayısı değildir", metin: "Kısa görünen bir satır bir döngünün içinde olabilir. Kodun kaç satır olduğuna değil, ifadelerin kaç kez çalıştığına bak.", yanlis: "Daha az satırlı kod daha az iş yapar.", dogru: "Çalışma zamanı, ifadelerin çalışma sayısıyla orantılıdır; döngülerin turlarını say." }
      ]
    },
    {
      baslik: "İç içe döngülerin çalışma sayısı",
      kisa: "İç içe turlar çarpılır; iç sınır dışa bağlıysa turlar toplanır.",
      bloklar: [
        { tip: "kod", baslik: "Üçgen biçimli iç içe döngü", kod: `int n = 5;
int work = 0;
for (int i = 0; i < n; i++)
{
    for (int j = 0; j < i; j++)
    {
        work++;
    }
}
System.out.println(work);`, vurgu: [7], cikti: "10", not: "i = 0…4 için iç tur sayıları 0, 1, 2, 3, 4: toplam 10." },
        { tip: "tablo", baslik: "Dört yapı, iki farklı n", head: ["Yapı", "n = 10", "n = 20"], rows: [
            ["Tek döngü (i < n)", "10", "20"],
            ["İç içe, iki sınır da n", "100", "400"],
            ["Üçgen (j < i)", "45", "190"],
            ["İç döngü sabit 3 tur", "30", "60"]
          ], not: "Üçgen için çalışma sayısı n(n − 1) / 2'dir: n = 10 için 45, n = 20 için 190." }
      ]
    },
    {
      baslik: "Adımı büyütmek ve katlamak",
      kisa: "Her turda sayı katlanıyorsa tur sayısı çok yavaş artar.",
      bloklar: [
        { tip: "kod", baslik: "x her turda ikiye katlanır", kod: `int n = 64;
int steps = 0;
int x = 1;
while (x < n)
{
    x = x * 2;
    steps++;
}
System.out.println(steps);`, vurgu: [6], cikti: "6", not: "x: 1, 2, 4, 8, 16, 32, 64: altı tur. n = 64 iken yalnızca 6 tur; 64 tur değil." },
        { tip: "ikili", sol: { ikon: "2️⃣", baslik: "Yaklaşık 2 katı", maddeler: ["Tek döngü", "Adımı sabit olan döngü"] },
          sag: { ikon: "4️⃣", baslik: "Yaklaşık 4 katı", maddeler: ["İç içe n × n döngü", "Üçgen biçimli iç içe döngü"] },
          oyun: [
            { metin: "for (i < n) { work++; }", cevap: "sol", neden: "n tur: n iki katına çıkınca iş 2 katı." },
            { metin: "for (i < n) { for (j < n) { work++; } }", cevap: "sag", neden: "n × n: iş 4 katı." },
            { metin: "for (i = 0; i < n; i += 2) { work++; }", cevap: "sol", neden: "n / 2 tur: yine 2 katı." },
            { metin: "for (i < n) { for (j < i) { work++; } }", cevap: "sag", neden: "Yaklaşık n × n / 2: iş yaklaşık 4 katı." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Çalışma zamanı kabaca, ifadelerin çalışma sayısıyla ölçülür.",
            "Döngü gövdesi tur sayısı kadar çalışır; koşul bir fazla kez sınanır.",
            "Tek döngü n ile doğrusal büyür; iç içe döngü (n × n) karesel büyür.",
            "İç içe döngüde dış tur × iç tur; iç sınır dışa bağlıysa 1 + 2 + 3 + … toplanır.",
            "Üçgen biçimli iç içe döngü n(n − 1) / 2 kez çalışır.",
            "Her turda ikiye katlanan değişken, tur sayısını çok azaltır.",
            "Daha az satır, daha az iş demek değildir; turları say."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "c++ ifadesi toplam kaç kez çalışır?",
      fig: { type: "code", code: `int c = 0;
for (int i = 0; i < 8; i++)
{
    for (int j = 0; j < 5; j++)
    {
        c++;
    }
}` },
      opts: ["13", "40", "45", "80"], a: 1,
      why: "Dış döngü 8 tur, iç döngü her turda 5 tur atar: 8 × 5 = 40. 13 şıkkı iki sayıyı toplar (art arda döngülerde olurdu); 45 şıkkı dış döngüyü bir tur fazla (9 × 5) sayar." },
    { q: "Toplam kaç kez \"x\" yazdırılır?",
      fig: { type: "code", code: `for (int i = 1; i <= 6; i++)
{
    for (int j = 1; j < i; j++)
    {
        System.out.print("x");
    }
}` },
      opts: ["15", "21", "30", "36"], a: 0,
      why: "İç döngü i - 1 tur atar: i = 1…6 için 0, 1, 2, 3, 4, 5. Toplam 15. j <= i olsaydı 1 + 2 + … + 6 = 21 olurdu; 36 iç döngüyü her seferinde 6 tur sanır." },
    { q: "Döngü bittiğinde count kaç olur?",
      fig: { type: "code", code: `int n = 100;
int count = 0;
for (int i = 1; i <= n; i = i * 2)
{
    count++;
}
System.out.println(count);` },
      opts: ["8", "50", "7", "100"], a: 2,
      why: "i değerleri 1, 2, 4, 8, 16, 32, 64: yedi tur. Sonraki değer 128, 128 <= 100 false. 100 turluk şık i++ sanır, 50 şıkkı adımı 2 sanır, 8 ise 128'i de sayar." },
    { q: "n = 10'dan n = 20'ye çıkarsa içteki if koşulunun sınanma sayısı kaç katına çıkar?",
      fig: { type: "code", code: `for (int i = 0; i < n; i++)
{
    for (int j = 0; j < n; j++)
    {
        if (i == j)
        {
            count++;
        }
    }
}` },
      opts: ["Aynı kalır", "2 katına", "3 katına", "4 katına"], a: 3,
      why: "Koşul iç gövdededir ve n × n kez sınanır: 100 sınama 400 sınamaya çıkar, tam 4 kat. count++ ise yalnızca n kez çalışır (2 kat); ama soru koşulun sınanma sayısını soruyor. \"2 katına\" şıkkı bu ayrımı karıştırır." },
    { q: "Döngü bittiğinde c kaç olur?",
      fig: { type: "code", code: `int n = 50;
int c = 0;
while (n > 1)
{
    n = n / 2;
    c++;
}
System.out.println(c);` },
      opts: ["5", "6", "25", "50"], a: 0,
      why: "n sırasıyla 50, 25, 12, 6, 3, 1 olur (tam sayı bölmesi). Beş bölmeden sonra n = 1 ve 1 > 1 false: c = 5. 6 şıkkı ilk değeri de sayar; 25 tek bir bölmenin sonucudur." }
  ]
};
