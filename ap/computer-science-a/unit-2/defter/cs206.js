/* Kitpath not defteri · cs206 · 2.9 Seçim ve Döngü Algoritmaları
   Kaynak: AP CSA CED 2025–26 (Unit 2) kapsamı. Blok türleri: /ap/_kit/defter.js başı.
   Not: metin alanlarında çift eşittir "=​=" ile yazıldı (araya görünmez boşluk), vurgu işaretiyle karışmasın diye. */
window.DEFTER = {
  slug: "cs206",
  amac: "Bu konu seçim ve döngüyü birleştirip standart algoritmalar yazmayı anlatıyor: sayma, toplama, ortalama, en büyüğü bulma ve bayrak (*flag*) kullanımı. Bu kalıplar sınavdaki ilk serbest yanıt sorusunun omurgasıdır.",
  bolumler: [
    {
      baslik: "Sayaç ve toplayıcı kalıbı",
      kisa: "Sayaç kaç tane olduğunu, toplayıcı toplamı tutar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔢", terim: "Counter", tr: "sayaç", tanim: "0'dan başlar; koşul sağlanan her seferde 1 artar.", ornek: "Kaç öğrenci 60'ın üzerinde aldı?" },
            { ikon: "➕", terim: "Accumulator", tr: "toplayıcı", tanim: "0'dan başlar; her uygun değer üzerine eklenir.", ornek: "Bir haftalık toplam harcama." }
          ] },
        { tip: "kod", baslik: "1–20 arası 4'ün katları", kod: `int count = 0;
int sum = 0;
for (int n = 1; n <= 20; n++)
{
    if (n % 4 == 0)
    {
        count++;
        sum = sum + n;
    }
}
System.out.println(count + " " + sum);`, vurgu: [1, 2, 7, 8], cikti: "5 60", not: "4'ün katları 4, 8, 12, 16, 20: beş tane, toplamları 60." }
      ]
    },
    {
      baslik: "Ortalama",
      kisa: "Ortalama toplam bölü sayıdır; bölmeden önce double'a çevir.",
      bloklar: [
        { tip: "kod", baslik: "Kalanı 1 olanların ortalaması", kod: `int sum = 0;
int count = 0;
for (int n = 1; n <= 6; n++)
{
    if (n % 3 == 1)
    {
        sum = sum + n;
        count++;
    }
}
System.out.println(sum / count);
System.out.println((double) sum / count);`, vurgu: [11, 12], cikti: "2\n2.5" },
        { tip: "ornek", baslik: "Ortalama 2.5 nasıl çıkar?", durum: "n = 1…6 arasında n % 3 kalanı 1 olan sayıların ortalamasını izle.",
          adimlar: [
            "n = 1: 1 % 3 = 1, sum = 1, count = 1.",
            "n = 2 ve 3: kalanlar 2 ve 0, atlanır.",
            "n = 4: 4 % 3 = 1, sum = 5, count = 2.",
            "n = 5 ve 6: kalanlar 2 ve 0, atlanır.",
            "sum / count = 5 / 2 tam sayı bölmesidir: 2.",
            "(double) sum / count = 5.0 / 2 = 2.5."
          ], sonuc: "Doğru ortalama ==2.5==; yalnızca sum / count yazarsan 2 çıkar." },
        { tip: "tuzak", baslik: "Tam sayı bölmesi ve sıfıra bölme", metin: "Ortalamayı sum / count diye yazarsan ondalık kısım kesilir. count sıfır olabiliyorsa int bölmede ArithmeticException oluşur.", yanlis: "sum / count her zaman doğru ortalamayı verir.", dogru: "En az bir tarafı double yap: (double) sum / count. Bölmeden önce count > 0 olduğuna bak." }
      ]
    },
    {
      baslik: "En büyüğü bulma",
      kisa: "En iyiyi bir değişkende tut; daha iyisini görünce değiştir.",
      bloklar: [
        { tip: "kod", baslik: "value en büyük olan n hangisi?", kod: `int best = 0;
int bestN = 0;
for (int n = 1; n <= 7; n++)
{
    int value = n * (8 - n);
    if (value > best)
    {
        best = value;
        bestN = n;
    }
}
System.out.println(bestN + " " + best);`, vurgu: [6, 8, 9], cikti: "4 16" },
        { tip: "grafik", baslik: "value ve en büyük değerin yükselişi", xlabel: "n", ylabel: "value", xmax: 8, ymax: 18,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }, { v: 7, label: "7" }],
          yticks: [{ v: 7, label: "7" }, { v: 12, label: "12" }, { v: 15, label: "15" }, { v: 16, label: "16" }],
          ogeler: [
            { id: "p1", tip: "nokta", renk: 0, x: 1, y: 7, gizli: true },
            { id: "p2", tip: "nokta", renk: 0, x: 2, y: 12, gizli: true },
            { id: "p3", tip: "nokta", renk: 0, x: 3, y: 15, gizli: true },
            { id: "p4", tip: "nokta", renk: 2, x: 4, y: 16, etiket: "best = 16", gizli: true },
            { id: "mx", tip: "cizgi", renk: 1, kesik: true, from: [0, 16], to: [8, 16], gizli: true },
            { id: "p5", tip: "nokta", renk: 0, x: 5, y: 15, gizli: true },
            { id: "p6", tip: "nokta", renk: 0, x: 6, y: 12, gizli: true },
            { id: "p7", tip: "nokta", renk: 0, x: 7, y: 7, gizli: true }
          ],
          durumlar: [
            { metin: "n = 1: value = 7. 7 > 0, yani best = 7.", goster: ["p1"] },
            { metin: "n = 2 ve 3: value 12, sonra 15. İkisi de önceki best'ten büyük.", goster: ["p2", "p3"] },
            { metin: "n = 4: value = 16 > 15. Yeni en büyük: best = 16, bestN = 4.", goster: ["p4", "mx"] },
            { metin: "n = 5, 6, 7: value 15, 12, 7. Hiçbiri 16'dan büyük değil, best değişmez.", goster: ["p5", "p6", "p7"] }
          ] },
        { tip: "tuzak", baslik: "best'i 0 ile başlatmak", metin: "best = 0 ile başlarsan değerler negatif olabildiğinde yanlış sonuç alırsın.", yanlis: "best her zaman 0 ile başlatılabilir.", dogru: "Başlangıç, ilk değer ya da en büyük için Integer.MIN_VALUE olmalı (en küçük için Integer.MAX_VALUE)." }
      ]
    },
    {
      baslik: "Bayrak ve ilk eşleşme",
      kisa: "Bayrak bir olayın yaşanıp yaşanmadığını tutar; while ilk eşleşmede durur.",
      bloklar: [
        { tip: "kod", baslik: "Bayrak: 21 asal mı?", kod: `int n = 21;
boolean prime = true;
for (int d = 2; d < n; d++)
{
    if (n % d == 0)
    {
        prime = false;
    }
}
System.out.println(prime);`, vurgu: [2, 7], cikti: "false", not: "Bayrak true ile başlar; bölen bulununca false yapılır ve bir daha true yapılmaz. 21 için 3 ve 7 bölendir. n = 1 gibi sınır durumlarını ayrıca düşün." },
        { tip: "kod", baslik: "İlk eşleşme: hem 5'e hem 7'ye bölünen ilk sayı", kod: `int n = 1;
while (n % 5 != 0 || n % 7 != 0)
{
    n++;
}
System.out.println(n);`, vurgu: [2], cikti: "35", not: "Koşul \"ikisine birden bölünmüyor\" demektir. De Morgan ile !(n % 5 =​= 0 && n % 7 =​= 0) biçiminden gelir." }
      ]
    },
    {
      baslik: "Hangi kalıp?",
      kisa: "Hepsini gezip hesaplıyorsan sayaç ya da toplayıcı; var mı diye bakıyorsan bayrak.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧮", baslik: "Sayaç / toplayıcı", maddeler: ["Bütün değerleri gezer", "Sonuç bir sayıdır"] },
          sag: { ikon: "🚩", baslik: "Bayrak / ilk eşleşme", maddeler: ["Bir durum var mı yok mu diye bakar", "Sonuç true ya da false"] },
          oyun: [
            { metin: "Sınıfta kaç öğrenci 60'ın üzerinde aldı?", cevap: "sol", neden: "Bir sayı üretir: sayaç." },
            { metin: "Hiç sıfır alan öğrenci var mı?", cevap: "sag", neden: "Evet ya da hayır: bayrak." },
            { metin: "Bir haftalık toplam harcama ne kadar?", cevap: "sol", neden: "Hepsini toplar: toplayıcı." },
            { metin: "Şifrede en az bir rakam var mı?", cevap: "sag", neden: "Var mı yok mu: bayrak." }
          ] },
        { tip: "tablo", baslik: "Kalıp özeti", head: ["Kalıp", "Başlangıç", "Uygun değerde", "Sonuç"], rows: [
            ["Sayaç", "count = 0", "count++", "kaç tane"],
            ["Toplayıcı", "sum = 0", "sum = sum + x", "toplam"],
            ["Ortalama", "sum = 0, count = 0", "ikisini güncelle", "(double) sum / count"],
            ["En büyük", "ilk değer ya da çok küçük bir sayı", "x > best ise best = x", "best"],
            ["Bayrak", "found = false", "found = true", "found"]
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Sayaç ve toplayıcı 0'dan başlar; koşul sağlandıkça count++ ya da sum = sum + x yapılır.",
            "Ortalama = (double) sum / count. Sıfıra bölmeye karşı count > 0 kontrol et.",
            "En büyük: best'i uygun başlat; value > best ise best = value yap.",
            "Eşit değerlerde > ilk bulunanı, >= sonuncuyu tutar.",
            "Bayrak: true başlat, durum bozulunca false yap, else ile geri true yapma.",
            "Hepsini gezmek gerekiyorsa for; ilk eşleşmede durmak gerekiyorsa while uygundur.",
            "Koşulları kurarken De Morgan'ı kullan: !(A && B) = !A || !B."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int a = 0;
int b = 0;
for (int n = 3; n <= 15; n = n + 3)
{
    if (n % 2 == 1)
    {
        a++;
    }
    else
    {
        b = b + n;
    }
}
System.out.println(a + " " + b);` },
      opts: ["3 18", "2 18", "3 12", "2 30"], a: 0,
      why: "n = 3, 6, 9, 12, 15. Tek olanlar 3, 9, 15 (a = 3); çift olanlar 6 ve 12 (b = 18). \"2 18\" 15'i atlar; \"3 12\" yalnızca 12'yi eklemiş sayar." },
    { q: "Kod çalışınca ekrana yazılan iki satır sırayla hangisidir?",
      fig: { type: "code", code: `int sum = 0;
int count = 0;
for (int i = 1; i <= 10; i++)
{
    if (i % 4 != 0)
    {
        sum = sum + i;
        count++;
    }
}
System.out.println(sum / count);
System.out.println((double) sum / count);` },
      opts: ["5.375 ve 5.375", "5 ve 5.375", "5 ve 5.0", "5.4 ve 5.4"], a: 1,
      why: "4'ün katı olmayan sayılar 1, 2, 3, 5, 6, 7, 9, 10: count = 8, sum = 43. sum / count tam sayı bölmesidir: 5. (double) sum / count = 43.0 / 8 = 5.375. \"5.375 ve 5.375\" ilk satırdaki tam sayı bölmesini görmez." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int best = -1;
int pos = 0;
for (int n = 1; n <= 7; n++)
{
    if (n % 3 > best)
    {
        best = n % 3;
        pos = n;
    }
}
System.out.println(pos + " " + best);` },
      opts: ["5 2", "7 1", "2 2", "1 1"], a: 2,
      why: "n % 3 değerleri n = 1…7 için 1, 2, 0, 1, 2, 0, 1. İlk 2, n = 2'de görülür: best = 2, pos = 2. n = 5'te 2 > 2 false olduğundan pos değişmez. \"5 2\" koşul >= olsaydı doğru olurdu." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int n = 13;
while (n % 3 != 0 && n % 4 != 0)
{
    n++;
}
System.out.println(n);` },
      opts: ["14", "16", "24", "15"], a: 3,
      why: "n = 13: kalanlar 1 ve 1, ikisi de sıfırdan farklı, devam. n = 14: 2 ve 2, devam. n = 15: 15 % 3 = 0, && 'nin ilk tarafı false olur ve döngü biter: 15. \"24\", koşulu || sanıp hem 3'e hem 4'e bölünen ilk sayıyı (24) arar." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int n = 36;
boolean found = false;
for (int d = 2; d <= 5; d++)
{
    if (n % d == 0)
    {
        found = true;
    }
    else
    {
        found = false;
    }
}
System.out.println(found);` },
      opts: ["true", "false", "36", "Derleme hatası"], a: 1,
      why: "d = 2, 3, 4'te found true olur; ama d = 5'te 36 % 5 = 1 olduğundan else çalışır ve found yeniden false olur. Son tur kazanır. Doğru bayrak kalıbında else yazılmaz: found yalnızca true yapılır. \"true\" şıkkı bu else'i atlar." }
  ]
};
