/* Kitpath not defteri · cs103 · 1.3 İfadeler: Tam Sayı Bölmesi ve Mod
   Kaynak: ap-videolar/src/episodes/cs103 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs103",
  amac: "Bu konu Java'da hesaplamayı anlatıyor: işlem önceliği, tam sayı bölmesi ve mod operatörü. Bölmede ondalık kısmın neden kesildiğini, kalanı nasıl bulacağını ve basamak ayırma gibi sınav kalıplarını öğreneceksin.",
  bolumler: [
    {
      baslik: "Operatörler ve işlem önceliği",
      kisa: "Önce çarpma, bölme, mod; sonra toplama, çıkarma; aynı seviyede soldan sağa.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧮", terim: "Expression", tr: "ifade", tanim: "Operatör ve değerlerden oluşan, tek bir değere hesaplanan parça.", ornek: "2 + 3 ifadesi 5 değerini verir." },
            { ikon: "🥇", terim: "Operator precedence", tr: "işlem önceliği", tanim: "Hangi işlemin önce yapılacağını belirleyen sıra. Parantez bu sırayı değiştirir.", ornek: "Çarpma toplamadan önce yapılır." }
          ] },
        { tip: "tablo", baslik: "Beş operatör", head: ["Operatör", "Anlamı", "Seviye", "Örnek"], rows: [
            ["+", "toplama", "ikinci", "5 + 2 → 7"],
            ["-", "çıkarma", "ikinci", "5 - 2 → 3"],
            ["*", "çarpma", "birinci", "5 * 2 → 10"],
            ["/", "bölme", "birinci", "5 / 2 → 2"],
            ["%", "mod (kalan)", "birinci", "5 % 2 → 1"]
          ], not: "Birinci seviye önce çalışır; aynı seviyedeki işlemler soldan sağa gider." },
        { tip: "kod", baslik: "Parantez sırayı değiştirir", kod: "System.out.println(2 + 3 * 4);\nSystem.out.println((2 + 3) * 4);", cikti: "14\n20", not: "İlkinde önce 3 * 4 = 12, sonra 2 + 12 = 14. İkincisinde önce parantez: 5 * 4 = 20." }
      ]
    },
    {
      baslik: "*Integer division*: ondalık kısım kesilir",
      kisa: "İki int bölünürse sonuç int'tir; ondalık yuvarlanmaz, atılır.",
      bloklar: [
        { tip: "hikaye", ikon: "🏀", baslik: "Beden dersinde 17 kişi",
          metin: "Sınıfta 17 kişi var, hoca dörderli takım kuruyor: 4 takım çıkar ve 1 kişi açıkta kalır (hakem olur). Java tam sayılarla böyle düşünür: 17 / 4 işlemi 4 eder, 4,25 demez. Açıkta kalan 1 kişiyi de mod operatörü bulur: 17 % 4 = 1." },
        { tip: "kavramlar", kartlar: [
            { ikon: "✂️", terim: "Integer division", tr: "tam sayı bölmesi", tanim: "İki int'in bölümü. Sonuç int'tir; ondalık kısım yuvarlanmaz, sıfıra doğru kesilip atılır.", ornek: "7 / 2 sonucu 3'tür, 3,5 değil." }
          ] },
        { tip: "kod", baslik: "Dört bölme", kod: "System.out.println(7 / 2);\nSystem.out.println(2 / 3);\nSystem.out.println(-7 / 2);\nSystem.out.println(17 / 4);", cikti: "3\n0\n-3\n4", not: "-7 / 2 sonucu -4 değil -3: kesme sıfıra doğru yapılır." }
      ]
    },
    {
      baslik: "*int* ile *double* karışınca",
      kisa: "Bir taraf double ise sonuç double; atanacağı kutunun tipi bölmeyi kurtarmaz.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔢", baslik: "*int* sonuç", maddeler: ["İki taraf da int", "Ondalık kısım kesilir"] },
          sag: { ikon: "🔬", baslik: "*double* sonuç", maddeler: ["En az bir taraf double", "Ondalık kısım korunur"] },
          oyun: [
            { metin: "9 / 2", cevap: "sol", neden: "İkisi de int: sonuç 4." },
            { metin: "9 / 2.0", cevap: "sag", neden: "2.0 double olduğu için sonuç 4.5." },
            { metin: "(3 + 4) / 2", cevap: "sol", neden: "Parantez içi 7 (int); 7 / 2 = 3." },
            { metin: "1.5 + 1", cevap: "sag", neden: "Bir taraf double: sonuç 2.5." },
            { metin: "5 / 2 + 0.5", cevap: "sag", neden: "Önce 5 / 2 = 2 (int); sonra 2 + 0.5 = 2.5 (double)." }
          ] },
        { tip: "kod", baslik: "double kutusu geç kalır", kod: "int a = 85;\nint b = 90;\ndouble avg = (a + b) / 2;\nSystem.out.println(avg);", vurgu: [3], cikti: "87.0" },
        { tip: "tuzak", metin: "Ortalama ve pay hesabında kutunun double olması yetmez.", yanlis: "double avg = (85 + 90) / 2; satırı 87.5 verir, çünkü avg double.", dogru: "Sağ taraf önce kendi başına hesaplanır: 175 / 2 = 87 (int). Sonra 87.0 olarak double kutuya girer. Bölmede iki taraftan biri double olmalı." }
      ]
    },
    {
      baslik: "*Modulo*: bölmeden kalan",
      kisa: "x % y kalanı verir; kalan sıfırsa x, y'ye tam bölünür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "➗", terim: "Modulo", tr: "mod, kalan", tanim: "% operatörü: bölmeden kalanı verir. Kalan sıfırsa sayı tam bölünür.", ornek: "17 % 4 sonucu 1'dir." }
          ] },
        { tip: "kod", baslik: "Dört kalan", kod: "System.out.println(17 % 4);\nSystem.out.println(8 % 2);\nSystem.out.println(27 % 3);\nSystem.out.println(5 % 7);", cikti: "1\n0\n0\n5", not: "Küçük sayı büyüğe bölünemez, kendisi kalır: 5 % 7 = 5. 27 % 3 = 0 olduğu için 27, 3'e tam bölünür." },
        { tip: "ikili", sol: { ikon: "2️⃣", baslik: "Çift sayı", maddeler: ["n % 2 sonucu 0", "İkiye tam bölünür"] },
          sag: { ikon: "1️⃣", baslik: "Tek sayı", maddeler: ["n % 2 sonucu 1", "Pozitif sayıda mod 2 yalnız 0 ya da 1 verir"] },
          oyun: [
            { metin: "28 % 2 işleminin sonucu 0.", cevap: "sol", neden: "Kalan sıfır: 28 çift." },
            { metin: "35 % 2 işleminin sonucu 1.", cevap: "sag", neden: "Kalan 1: 35 tek." },
            { metin: "Son basamağı 7 olan her pozitif sayı.", cevap: "sag", neden: "7 tek olduğu için 10'un katı artı 7 de tektir." },
            { metin: "n % 2 sıfır çıkıyorsa n böyledir.", cevap: "sol", neden: "Kalan sıfırsa sayı ikiye tam bölünür." }
          ] }
      ]
    },
    {
      baslik: "Bölü ve mod birlikte: basamak ve birim çevirme",
      kisa: "Mod son parçayı, bölü geri kalanı verir.",
      bloklar: [
        { tip: "tablo", baslik: "Sık kalıplar", head: ["Amaç", "Kod", "Girdi", "Sonuç"], rows: [
            ["Son basamak", "n % 10", "472", "2"],
            ["Son basamağı atmak", "n / 10", "472", "47"],
            ["Onlar basamağı", "n / 10 % 10", "472", "7"],
            ["Yüzler basamağı", "n / 100", "472", "4"],
            ["Saat", "dakika / 60", "135", "2"],
            ["Kalan dakika", "dakika % 60", "135", "15"]
          ], not: "2026 için de aynı: 2026 % 10 = 6 (son basamak), 2026 / 10 = 202. FRQ'larda saniyeyi dakikaya, kuruşu liraya çevirmek tam olarak bu iki satırdır." },
        { tip: "ornek", baslik: "Rakamların toplamı", durum: "n = 472 olan sayının rakamları toplanacak.",
          adimlar: [
            "Birler: n % 10 = 2.",
            "Onlar: n / 10 = 47, sonra 47 % 10 = 7.",
            "Yüzler: n / 100 = 4.",
            "Toplam: 2 + 7 + 4 = 13."
          ], sonuc: "13" },
        { tip: "ornek", baslik: "135 dakika kaç saat kaç dakika?", durum: "Bir film 135 dakika sürüyor.",
          adimlar: [
            "Saat: 135 / 60 = 2 (int bölmesi, kalan atılır).",
            "Kalan dakika: 135 % 60 = 15.",
            "Kontrol: 2 × 60 + 15 = 135."
          ], sonuc: "2 saat 15 dakika" }
      ]
    },
    {
      baslik: "Sıfıra bölme ve işlem sırası tuzağı",
      kisa: "Sıfıra bölmek programı çökertir; çarpma ve bölme sırası sonucu değiştirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💥", terim: "ArithmeticException", tr: "aritmetik hata", tanim: "Bir int'i sıfıra bölünce (ya da % 0 alınca) program çalışırken çöker. Bu bir *run-time error*'dır.", ornek: "10 / 0 satırı çalışınca program durur." }
          ] },
        { tip: "kod", baslik: "İki sıra, bir çöküş", kod: "System.out.println(7 / 2 * 2);\nSystem.out.println(7 * 2 / 2);\nSystem.out.println(10 / 0);", vurgu: [3], cikti: "6\n7\nException in thread \"main\" java.lang.ArithmeticException: / by zero", not: "Üçüncü satırda program çöker." },
        { tip: "tuzak", metin: "Matematikte iki yazım da 7 eder; Java'da etmez.", yanlis: "Çarpma ile bölmenin sırası sonucu değiştirmez.", dogru: "7 / 2 çarpı 2: önce 7 / 2 = 3, sonra 3 × 2 = 6. 7 çarpı 2 / 2: önce 14, sonra 14 / 2 = 7. Aynı seviyede soldan sağa gidilir ve her bölme int'tir." }
      ]
    },
    {
      baslik: "AP örnekleri: pizza payı ve işlem sırası",
      kisa: "Bölme gördüğün her yerde önce iki tarafın tipine, sonra işlem sırasına bak.",
      bloklar: [
        { tip: "kod", baslik: "İki ayrı soru", kod: "int total = 47;\nint people = 5;\ndouble share = total / people;\nSystem.out.println(share);\nSystem.out.println(10 + 7 % 3 * 2);", vurgu: [3, 5], cikti: "9.0\n12" },
        { tip: "ornek", baslik: "47 liralık pizza, 5 kişi", durum: "total 47, people 5 ve share bir double. share ne yazdırır?",
          adimlar: [
            "Sağ taraf iki int: 47 / 5 = 9 (9,4 değil).",
            "9, double kutuya girer: 9.0.",
            "println(share) 9.0 yazar."
          ], sonuc: "9.0 yazar, 9.4 değil. Düzeltmesi bir sonraki konuda: total'ı önce double'a çevirmek." },
        { tip: "ornek", baslik: "İşlem sırası: toplama en sona kalır", durum: "Yukarıdaki kodun son satırı ne yazdırır?",
          adimlar: [
            "Mod ve çarpma aynı seviyede, soldan sağa: önce 7 % 3 = 1.",
            "Sonra 1 * 2 = 2.",
            "En son toplama: 10 + 2 = 12."
          ], sonuc: "12. Toplamayı öne alıp (10 + 7) % 3 diye okursan 17 % 3 = 2, sonra 2 × 2 = 4 bulursun; bu yanlış okumadır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "tablo", baslik: "Sınav için bilmen gereken", head: ["Düzey", "Konu"], rows: [
            ["✎ Yazman gereken", "n % 2 ile tek/çift, n % k ile tam bölünme, n % 10 ve n / 10 ile basamak, dakika / 60 ve % 60 ile birim çevirme"],
            ["👁 Okuman gereken", "İşlem sırasını ve her bölmenin int mi double mı olduğunu adım adım izlemek"],
            ["✗ Bilmen gerekmeyen", "Negatif sayılarla mod"]
          ] },
        { tip: "ozet", maddeler: [
            "Önce çarpma, bölme, mod; sonra toplama, çıkarma; aynı seviyede soldan sağa. Parantez sırayı değiştirir.",
            "*Integer division*: int / int sonucu int'tir; ondalık yuvarlanmaz, sıfıra doğru kesilir (7 / 2 = 3, -7 / 2 = -3).",
            "Bir taraf double ise sonuç double. Ama kutunun double olması geç kalır: double avg = (85 + 90) / 2; satırı 87.0 verir.",
            "*Modulo* kalanı verir: n % 2 sıfırsa çift, bire eşitse tek; n % k sıfırsa tam bölünür.",
            "n % 10 son basamağı, n / 10 son basamağı atılmış sayıyı verir; dakika / 60 saat, dakika % 60 kalan dakikadır.",
            "Sıfıra bölmek ya da % 0 almak *ArithmeticException* fırlatır (*run-time error*).",
            "Sıra her şeyi değiştirir: 7 / 2 çarpı 2 işlemi 6, 7 çarpı 2 / 2 işlemi 7 eder."
          ] }
      ]
    }
  ]
};
