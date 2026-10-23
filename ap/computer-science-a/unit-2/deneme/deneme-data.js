/* Bu dosya üretilir: ap-videolar/tools/build-deneme-data.mjs (elle düzenleme; kaynak: tools/out/deneme-csa-u2.json) */
window.DENEME = {
  "store": "csa-u2:v1:",
  "course": "AP Computer Science A",
  "unit": "Unit 2 — Selection and Iteration",
  "topics": {
    "2.1–2.2": "Seçim, Tekrar ve Boolean İfadeler",
    "2.3–2.4": "if ve İç İçe if",
    "2.5": "Bileşik Boolean İfadeler ve Kısa Devre",
    "2.6": "De Morgan, Eşdeğer İfadeler ve equals",
    "2.7": "while Döngüsü",
    "2.8": "for Döngüsü",
    "2.9-1": "Toplam, Ortalama, Sayma, En Büyük ve En Küçük",
    "2.9-2": "Basamaklar ve Bölünebilme",
    "2.10": "String Algoritmaları",
    "2.11": "İç İçe Döngüler",
    "2.12": "Çalışma Zamanını Kabaca Ölçmek"
  },
  "tests": [
    {
      "no": 1,
      "level": "Isınma",
      "minutes": 20,
      "questions": [
        {
          "t": "2.1–2.2",
          "q": "What is printed as a result of executing the following code segment, which stores two boolean results?",
          "o": [
            "false false",
            "false true",
            "true false",
            "true true"
          ],
          "a": 0,
          "w": "23 % 2 bölümden kalanı verir: 1. 1 == 0 yanlış, yani even *false*. m / 5 iki *int*'in bölümüdür: 4.6 değil 4 olur (*integer division*); 4 > 4 de *false*. 4.6 > 4 diye düşünmek \"false true\" şıkkına götürür.",
          "fig": {
            "type": "code",
            "code": "int m = 23;\nboolean even = m % 2 == 0;\nboolean big = m / 5 > 4;\nSystem.out.println(even + \" \" + big);"
          }
        },
        {
          "t": "2.1–2.2",
          "q": "Assume that the int variable n has been properly declared and initialized. Which of the following expressions evaluates to true exactly when n is divisible by 3?",
          "o": [
            "n / 3 == 0",
            "n % 3 = 0",
            "n % 3 == 0",
            "3 % n == 0"
          ],
          "a": 2,
          "w": "*remainder operator* (%) bölümden kalanı verir; kalan 0 ise sayı tam bölünür. n / 3 == 0 yalnız -2 ile 2 arasında doğrudur (bölüm 0 olur). n % 3 = 0 derlenmez: = atamadır, karşılaştırma ==. 3 % n == 0 ise \"n, 3'ü böler mi\" sorusudur ve n = 0 iken *ArithmeticException* verir."
        },
        {
          "t": "2.3–2.4",
          "q": "What is printed as a result of executing the following if-else-if chain?",
          "o": [
            "Cold day",
            "Mild day",
            "Mild Cold day",
            "Warm day"
          ],
          "a": 1,
          "w": "*else if* zincirinde koşullar yukarıdan aşağı denenir; ilk *true* olan kol çalışır, gerisi atlanır. 12 > 30 ve 12 > 20 yanlış, 12 > 10 doğru: \"Mild\" yazılır. Son *else* yalnız hiçbir koşul tutmazsa çalışır. println(\" day\") zincirin dışında olduğu için her durumda çalışır.",
          "fig": {
            "type": "code",
            "code": "int temp = 12;\nif (temp > 30)\n    System.out.print(\"Hot\");\nelse if (temp > 20)\n    System.out.print(\"Warm\");\nelse if (temp > 10)\n    System.out.print(\"Mild\");\nelse\n    System.out.print(\"Cold\");\nSystem.out.println(\" day\");"
          }
        },
        {
          "t": "2.3–2.4",
          "q": "What is printed as a result of executing the following code segment, which uses three separate if statements?",
          "o": [
            "35",
            "70",
            "81",
            "71"
          ],
          "a": 3,
          "w": "Üç ayrı *if* var, *else* yok; her biri sırayla, x'in o anki değeriyle denetlenir. 40 > 10 → x = 35; 35 > 30 → x = 70; 70 > 50 → x = 71. \"35\" ilk kol çalışınca gerisinin atlandığını sanmaktan (*else if* gibi okumak), \"81\" ilk koşulu atlayıp 40'ı ikiyle çarpmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "int x = 40;\nif (x > 10)\n    x = x - 5;\nif (x > 30)\n    x = x * 2;\nif (x > 50)\n    x = x + 1;\nSystem.out.println(x);"
          }
        },
        {
          "t": "2.5",
          "q": "What is printed as a result of executing the following code segment, in which the two expressions differ only in parentheses?",
          "o": [
            "false false",
            "true true",
            "true false",
            "false true"
          ],
          "a": 2,
          "w": "&& işleminin önceliği || işleminden yüksektir; ilk ifade (age < 18 && vip) || !member diye okunur: false || true = *true*. İkincide parantez || işlemini önce yaptırır; age < 18 *false* olduğu için && sonucu *false* olur. Öncelik sırası: ! → karşılaştırma → && → ||.",
          "fig": {
            "type": "code",
            "code": "int age = 20;\nboolean vip = true;\nboolean member = false;\nSystem.out.println((age < 18 && vip || !member) + \" \"\n        + (age < 18 && (vip || !member)));"
          }
        },
        {
          "t": "2.5",
          "q": "What is printed as a result of executing the following code segment, which divides only when it is safe to do so?",
          "o": [
            "Check",
            "Pass",
            "An ArithmeticException is thrown",
            "Nothing is printed"
          ],
          "a": 0,
          "w": "&& *short-circuit evaluation* yapar: sol taraf *false* ise sağ taraf hiç hesaplanmaz. n != 0 yanlış olduğu için sum / n hiç çalışmaz, sıfıra bölme olmaz ve *else* kolu \"Check\" yazar. Sıra ters olsaydı (sum / n >= 30 && n != 0) *ArithmeticException* fırlatılırdı.",
          "fig": {
            "type": "code",
            "code": "int n = 0;\nint sum = 90;\nif (n != 0 && sum / n >= 30)\n    System.out.println(\"Pass\");\nelse\n    System.out.println(\"Check\");"
          }
        },
        {
          "t": "2.6",
          "q": "What is printed as a result of executing the following code segment that compares String references?",
          "o": [
            "true true true",
            "false true false",
            "false false true",
            "false true true"
          ],
          "a": 3,
          "w": "Nesnelerde == iki değişkenin aynı nesneyi gösterip göstermediğini (*reference*) denetler; *equals* içerikleri karşılaştırır. new String(\"sun\") yeni bir nesne kurar; bu yüzden a == b *false*, ama içerik aynı olduğundan a.equals(b) *true*. c = a; aynı nesnenin adresini kopyalar (*alias*), a == c *true*.",
          "fig": {
            "type": "code",
            "code": "String a = \"sun\";\nString b = new String(\"sun\");\nString c = a;\nSystem.out.println((a == b) + \" \" + a.equals(b) + \" \" + (a == c));"
          }
        },
        {
          "t": "2.6",
          "q": "Assume that x and y are properly declared and initialized int variables. Which of the following is equivalent to the expression shown?",
          "o": [
            "x <= 5 && y > 2",
            "x <= 5 || y > 2",
            "x < 5 || y > 2",
            "x > 5 || y <= 2"
          ],
          "a": 1,
          "w": "*De Morgan's law*: !(A && B) = !A || !B. !(x > 5) → x <= 5, !(y <= 2) → y > 2 ve && işlemi || olur. && işlemini korumak en sık hatadır. > işleminin tersi < değil <= olur; x = 5 bunun karşı örneğidir (*counterexample*).",
          "fig": {
            "type": "code",
            "code": "!(x > 5 && y <= 2)"
          }
        },
        {
          "t": "2.7",
          "q": "What is printed as a result of executing the following while loop that accumulates a sum?",
          "o": [
            "22 13",
            "12 10",
            "12 7",
            "5 10"
          ],
          "a": 1,
          "w": "Turlar: k = 1, 4, 7 değerleri s'ye eklenir (1 + 4 + 7 = 12). Son turda k 10 olur; 10 < 10 *false*, döngü biter ve k 10 kalır. 10'u da toplamak \"22 13\" şıkkını, çıkışta k'nin son güncellenmiş değerini unutmak \"12 7\" şıkkını verir.",
          "fig": {
            "type": "code",
            "code": "int k = 1;\nint s = 0;\nwhile (k < 10) {\n    s += k;\n    k += 3;\n}\nSystem.out.println(s + \" \" + k);"
          }
        },
        {
          "t": "2.7",
          "q": "What is printed as a result of executing the following code segment, in which the loop condition is checked before the first iteration?",
          "o": [
            "1 40",
            "1 20",
            "0 20",
            "0 40"
          ],
          "a": 2,
          "w": "*while* koşulu gövdeden önce denetlenir. 20 < 10 ilk denetimde *false* olduğu için gövde hiç çalışmaz (0 tur); c ve n değişmez. Gövdenin en az bir kez çalıştığını sanmak \"1 40\" şıkkını verir.",
          "fig": {
            "type": "code",
            "code": "int n = 20;\nint c = 0;\nwhile (n < 10) {\n    n = n * 2;\n    c++;\n}\nSystem.out.println(c + \" \" + n);"
          }
        },
        {
          "t": "2.8",
          "q": "What is printed as a result of executing the following for loop that counts by fours?",
          "o": [
            "3 7 11 15",
            "3 7 11",
            "4 8 12",
            "3 7 11 15 19"
          ],
          "a": 0,
          "w": "*for* başlığı: önce i = 3, her turdan önce i <= 15 denetimi, her turdan sonra i += 4. 3, 7, 11, 15 yazılır; i 19 olunca koşul *false* olur. <= işaretini < gibi okumak 15'i kaybettirir (*off-by-one*); 19 ise koşul denetlendiği için yazılmaz.",
          "fig": {
            "type": "code",
            "code": "for (int i = 3; i <= 15; i += 4) {\n    System.out.print(i + \" \");\n}"
          }
        },
        {
          "t": "2.8",
          "q": "How many times is the string Hi printed when the following code segment is executed?",
          "o": [
            "4",
            "6",
            "10",
            "5"
          ],
          "a": 3,
          "w": "i'nin aldığı değerler: 10, 8, 6, 4, 2. i 0 olunca 0 > 0 *false* olur ve döngü biter: 5 tur. Formülle: (10 - 2) / 2 + 1 = 5. 0'ı da saymak 6, adımı 1 sanmak 10 verir.",
          "fig": {
            "type": "code",
            "code": "for (int i = 10; i > 0; i -= 2) {\n    System.out.println(\"Hi\");\n}"
          }
        },
        {
          "t": "2.9-1",
          "q": "The following code segment is intended to compute the average of the integers 1 through 4. What is printed as a result of executing the code segment?",
          "o": [
            "2.5",
            "2",
            "10.0",
            "2.0"
          ],
          "a": 3,
          "w": "sum 10 olur. sum / 4 iki *int*'in bölümüdür, önce 2 hesaplanır (*integer division*); sonra *double* değişkene konur ve 2.0 yazılır. Doğru ortalama 2.5 için (double) sum / 4 gerekir. avg bir *double* olduğundan ekranda \"2\" çıkmaz.",
          "fig": {
            "type": "code",
            "code": "int sum = 0;\nfor (int i = 1; i <= 4; i++) {\n    sum += i;\n}\ndouble avg = sum / 4;\nSystem.out.println(avg);"
          }
        },
        {
          "t": "2.9-1",
          "q": "What is printed as a result of executing the following code segment that counts certain integers from 1 to 20?",
          "o": [
            "10",
            "9",
            "6",
            "1"
          ],
          "a": 1,
          "w": "3'ün katları: 3, 6, 9, 12, 15, 18 (6 tane); 5'in katları: 5, 10, 15, 20 (4 tane). 15 iki listede de var ama || ile tek bir *if* olduğu için bir kez sayılır: 6 + 4 - 1 = 9. 15'i iki kez saymak 10 verir.",
          "fig": {
            "type": "code",
            "code": "int count = 0;\nfor (int i = 1; i <= 20; i++) {\n    if (i % 3 == 0 || i % 5 == 0) {\n        count++;\n    }\n}\nSystem.out.println(count);"
          }
        },
        {
          "t": "2.9-2",
          "q": "What is printed as a result of executing the following code segment that processes the digits of a number?",
          "o": [
            "1704",
            "1",
            "12",
            "11"
          ],
          "a": 2,
          "w": "n % 10 son basamağı verir, n /= 10 son basamağı siler. Basamaklar sağdan: 1, 7, 0, 4; toplamları 12. n 0 olunca döngü biter. \"1704\" sayıyı ters çevirmekle karıştırmaktan, \"1\" yalnız ilk turu yapmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "int n = 4071;\nint sum = 0;\nwhile (n > 0) {\n    sum += n % 10;\n    n /= 10;\n}\nSystem.out.println(sum);"
          }
        },
        {
          "t": "2.9-2",
          "q": "What is printed as a result of executing the following code segment that tests every possible divisor?",
          "o": [
            "1 2 3 4 6 12",
            "2 3 4 6",
            "1 2 3 4 6",
            "12 6 4 3 2 1"
          ],
          "a": 0,
          "w": "12 % d == 0, d'nin 12'yi tam böldüğü anlamına gelir. d 1'den 12'ye artarak denendiği için bölenler küçükten büyüğe yazılır. Döngü 1'den başlar ve koşul <= 12 olduğu için 1 ve 12 de dahildir.",
          "fig": {
            "type": "code",
            "code": "for (int d = 1; d <= 12; d++) {\n    if (12 % d == 0) {\n        System.out.print(d + \" \");\n    }\n}"
          }
        },
        {
          "t": "2.10",
          "q": "What is printed as a result of executing the following code segment that steps through a string two characters at a time?",
          "o": [
            "lnt",
            "pan",
            "pae",
            "plnt"
          ],
          "a": 2,
          "w": "*index* 0'dan başlar: p0 l1 a2 n3 e4 t5. i = 0, 2, 4 için substring(i, i + 1) tek harf verir: p, a, e. i 6 olunca 6 < 6 *false*. \"lnt\" indeksleri 1'den başlatmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "String s = \"planet\";\nfor (int i = 0; i < s.length(); i += 2) {\n    System.out.print(s.substring(i, i + 1));\n}"
          }
        },
        {
          "t": "2.10",
          "q": "What is printed as a result of executing the following code segment that counts matching letters?",
          "o": [
            "2",
            "4",
            "6",
            "3"
          ],
          "a": 3,
          "w": "Döngü 0'dan 5'e her *index*'i bir kez ziyaret eder ve o konumdaki tek harflik *substring*'i *equals* ile \"a\" ile karşılaştırır. banana'da a 1, 3 ve 5. konumlardadır: 3. 6 her turda saymak, 2 son harfi kaçırmak demektir.",
          "fig": {
            "type": "code",
            "code": "String w = \"banana\";\nint c = 0;\nfor (int i = 0; i < w.length(); i++) {\n    if (w.substring(i, i + 1).equals(\"a\")) {\n        c++;\n    }\n}\nSystem.out.println(c);"
          }
        },
        {
          "t": "2.11",
          "q": "What is printed as a result of executing the following nested loops?",
          "o": [
            "11 12 13 21 22 23",
            "11 21 12 22 13 23",
            "12 13 22 23",
            "11 12 21 22"
          ],
          "a": 0,
          "w": "*nested loop*'ta iç döngü, dış döngünün her turunda baştan sona tamamlanır (kilometre sayacı gibi: sağdaki hane hızlı döner). i = 1 iken j 1, 2, 3; sonra i = 2 iken yine 1, 2, 3. i + \"\" + j sayıları toplamaz, yan yana yazar. Sütun sütun okumak \"11 21 12 22 13 23\" şıkkını verir.",
          "fig": {
            "type": "code",
            "code": "for (int i = 1; i <= 2; i++) {\n    for (int j = 1; j <= 3; j++) {\n        System.out.print(i + \"\" + j + \" \");\n    }\n}"
          }
        },
        {
          "t": "2.12",
          "q": "How many times is the statement count++ executed when the following code segment is run?",
          "o": [
            "9",
            "10",
            "11",
            "30"
          ],
          "a": 1,
          "w": "i'nin değerleri 0, 3, 6, …, 27: 0'dan başlar ve 30'a ulaşmadan üçer artar. Tur sayısı 30 / 3 = 10. i = 30 olduğunda koşul *false*, gövde çalışmaz; 11 bu son denetimi de saymaktan gelir. 30, adımı 1 sanmaktır.",
          "fig": {
            "type": "code",
            "code": "int count = 0;\nfor (int i = 0; i < 30; i += 3) {\n    count++;\n}"
          }
        }
      ]
    },
    {
      "no": 2,
      "level": "Temel",
      "minutes": 25,
      "questions": [
        {
          "t": "2.1–2.2",
          "q": "What is printed as a result of executing the following code segment, which stores an int quotient in a double variable?",
          "o": [
            "4.5 true",
            "4.0 false",
            "4.0 true",
            "4.5 false"
          ],
          "a": 1,
          "w": "a / b iki *int*'in bölümüdür, sonuç 4'tür; *double* değişkene konunca 4.0 olur. 4.0 == 4.5 *false*. 4.5 için (double) a / b gerekir. Değişkenin *double* olması sağ taraftaki hesabın *int* yapılmasını değiştirmez.",
          "fig": {
            "type": "code",
            "code": "int a = 9;\nint b = 2;\ndouble q = a / b;\nSystem.out.println(q + \" \" + (q == 4.5));"
          }
        },
        {
          "t": "2.1–2.2",
          "q": "Assume that the int variable x has been properly declared and initialized. Which of the following declarations will cause a compile-time error?",
          "o": [
            "boolean ok = 3 < 5;",
            "boolean ok = x != 4;",
            "boolean ok = !(x > 2);",
            "boolean ok = 1 < x < 10;"
          ],
          "a": 3,
          "w": "Java 1 < x < 10 ifadesini soldan sağa okur: 1 < x bir *boolean* üretir, sonra o *boolean* 10 ile < ile karşılaştırılmaya çalışılır; türler uyumsuzdur ve kod derlenmez. Doğrusu x > 1 && x < 10. Diğer üç şık tek bir *relational operator* ya da ! içerir ve geçerli bir *boolean* verir."
        },
        {
          "t": "2.3–2.4",
          "q": "What is printed as a result of executing the following code segment, whose indentation may be misleading?",
          "o": [
            "Z",
            "YZ",
            "XZ",
            "Y"
          ],
          "a": 0,
          "w": "*dangling else*: süslü parantez yoksa *else* her zaman en yakın, eşleşmemiş *if*'e bağlanır; girinti önemsizdir. Yani *else*, if (b > 5)'e aittir. a > 5 *false* olduğu için iç *if* ve onun *else*'i hiç çalışmaz; yalnız \"Z\" yazılır. *else*'i dıştaki *if*'e bağlamak \"YZ\" verir.",
          "fig": {
            "type": "code",
            "code": "int a = 4;\nint b = 9;\nif (a > 5)\n    if (b > 5)\n        System.out.print(\"X\");\nelse\n    System.out.print(\"Y\");\nSystem.out.print(\"Z\");"
          }
        },
        {
          "t": "2.3–2.4",
          "q": "What is printed as a result of executing the following code segment, in which the if statement has no braces?",
          "o": [
            "30 0",
            "45 10",
            "35 0",
            "35 10"
          ],
          "a": 2,
          "w": "Süslü parantez olmadan *if* yalnız hemen sonraki tek komutu kapsar: bonus = 10;. Alttaki satır girintili olsa da *if*'in dışındadır ve her zaman çalışır. 30 > 50 *false*, bonus 0 kalır; points = 30 + 0 + 5 = 35. İki satırı da *if*'e ait sanmak \"30 0\" şıkkını verir.",
          "fig": {
            "type": "code",
            "code": "int points = 30;\nint bonus = 0;\nif (points > 50)\n    bonus = 10;\n    points = points + bonus + 5;\nSystem.out.println(points + \" \" + bonus);"
          }
        },
        {
          "t": "2.5",
          "q": "Assume that the int variable h has been properly declared and initialized. Which of the following expressions evaluates to true exactly when h is between 9 and 17, inclusive?",
          "o": [
            "h >= 9 && h <= 17",
            "h >= 9 || h <= 17",
            "h > 9 && h < 17",
            "9 <= h <= 17"
          ],
          "a": 0,
          "w": "Aralığın içinde olmak için iki koşulun ikisi birden doğru olmalı: &&. || ile yazılan ifade her sayı için *true* olur (her sayı ya 9'dan büyük eşit ya da 17'den küçük eşittir). > ve < kullanmak 9 ile 17'yi dışarıda bırakır. 9 <= h <= 17 Java'da derlenmez."
        },
        {
          "t": "2.5",
          "q": "Consider the following method and code segment. What is printed as a result of executing the code segment?",
          "o": [
            "5 6 B",
            "5 B",
            "5 6 A",
            "B"
          ],
          "a": 1,
          "w": "check(5) önce \"5 \" yazar, sonra 5 tek olduğu için *false* döndürür. && işleminde sol taraf *false* ise sonuç kesin *false*'tur; *short-circuit evaluation* yüzünden check(6) hiç çağrılmaz ve 6 yazılmaz. *else* kolu \"B\" yazar. İki çağrının da çalıştığını sanmak \"5 6 B\" verir.",
          "fig": {
            "type": "code",
            "code": "public static boolean check(int n) {\n    System.out.print(n + \" \");\n    return n % 2 == 0;\n}\n\n// code segment\nif (check(5) && check(6))\n    System.out.print(\"A\");\nelse\n    System.out.print(\"B\");"
          }
        },
        {
          "t": "2.6",
          "q": "Assume that a and b are properly declared and initialized boolean variables. Which of the following is equivalent to the expression shown?",
          "o": [
            "!a || b",
            "a && !b",
            "!a && b",
            "!a && !b"
          ],
          "a": 2,
          "w": "*De Morgan's law*: !(A || B) = !A && !B. Burada A = a, B = !b; !(!b) = b olduğundan sonuç !a && b. || işlemini korumak ya da çift olumsuzlamayı unutmak diğer şıklara götürür. Dört satırlık *truth table* ile denetle: ifade yalnız a *false* ve b *true* iken *true*'dur.",
          "fig": {
            "type": "code",
            "code": "!(a || !b)"
          }
        },
        {
          "t": "2.6",
          "q": "Assume that the String variable s has been declared and may be null. Which of the following expressions evaluates to true when s refers to a string equal to \"yes\", evaluates to false otherwise, and never throws a NullPointerException?",
          "o": [
            "s.equals(\"yes\") && s != null",
            "s != null || s.equals(\"yes\")",
            "s == \"yes\"",
            "s != null && s.equals(\"yes\")"
          ],
          "a": 3,
          "w": "null olabilecek bir *reference* üzerinde metot çağırmadan önce kalkan gerekir: s != null && …. s null ise sol taraf *false* olur ve *short-circuit* yüzünden s.equals hiç çağrılmaz. Sırayı ters çevirmek önce *equals*'ı çağırır (*NullPointerException*); || ile s null iken sağ tarafa geçilir. == içerik değil *reference* karşılaştırır; eşit içerikli başka bir nesnede *false* verir."
        },
        {
          "t": "2.7",
          "q": "What is printed as a result of executing the following code segment that repeats until a target is reached?",
          "o": [
            "4 48",
            "5 50",
            "4 60",
            "5 60"
          ],
          "a": 3,
          "w": "total 12, 24, 36, 48 olur; 48 < 50 hâlâ *true* olduğundan bir tur daha yapılır: 60. 60 < 50 *false*, döngü biter; days 5. Hedefin aşılmadan durulacağını sanmak \"4 48\" verir; *while* hedefe ulaşana ya da onu geçene kadar döner.",
          "fig": {
            "type": "code",
            "code": "int total = 0;\nint days = 0;\nwhile (total < 50) {\n    total += 12;\n    days++;\n}\nSystem.out.println(days + \" \" + total);"
          }
        },
        {
          "t": "2.7",
          "q": "In each of the following code segments, the int variable i is initialized to 1 immediately before the loop. Which of the loops never terminates?",
          "o": [
            "while (i != 10) { i += 2; }",
            "while (i < 10) { i += 2; }",
            "while (i != 9) { i += 2; }",
            "while (i != 16) { i += i; }"
          ],
          "a": 0,
          "w": "1'den başlayıp i += 2 ile artan i hep tektir (1, 3, 5, …); 10 çift olduğu için i != 10 hiç *false* olmaz: *infinite loop*. i != 9 tutar, çünkü 9 tektir. < kullanan döngü 11'de durur. i += i değeri ikiye katlar: 1, 2, 4, 8, 16 ve durur. Durma koşulunda != kullanırken değerin hedefin üstünden atlayıp atlamadığına bak."
        },
        {
          "t": "2.8",
          "q": "What is printed as a result of executing the following for loop that counts down?",
          "o": [
            "20 14 8 2 -4",
            "20 14 8",
            "20 14 8 2",
            "14 8 2"
          ],
          "a": 2,
          "w": "k 20'den başlar ve her turdan sonra 6 azalır: 20, 14, 8, 2. Sonraki değer -4; -4 >= 0 *false* olduğu için yazılmaz. Güncellemeden sonra koşulun yeniden denetlendiğini unutmak -4'ü yazdırır; güncellemenin gövdeden önce yapıldığını sanmak 20'yi atlar.",
          "fig": {
            "type": "code",
            "code": "for (int k = 20; k >= 0; k -= 6) {\n    System.out.print(k + \" \");\n}"
          }
        },
        {
          "t": "2.8",
          "q": "How many times is the body of the following for loop executed?",
          "o": [
            "32",
            "33",
            "34",
            "40"
          ],
          "a": 1,
          "w": "i < 40 olduğundan son değer 39'dur. Tur sayısı = son - ilk + 1 = 39 - 7 + 1 = 33; üst sınır < ile dahil olmadığından 40 - 7 de aynı sonucu verir. 34, 40'ı da saymaktan; 32, iki uçtan birini kaybetmekten gelir.",
          "fig": {
            "type": "code",
            "code": "for (int i = 7; i < 40; i++) {\n    System.out.print(i);\n}"
          }
        },
        {
          "t": "2.9-1",
          "q": "Assume that getTemp(d) returns the temperature on day d and that, for days 1 through 4, it returns -8, -3, -12, and -5, respectively. What is printed as a result of executing the following code segment?",
          "o": [
            "0",
            "-3",
            "-12",
            "-5"
          ],
          "a": 0,
          "w": "max = 0 ile başlamak bir tuzaktır: bütün sıcaklıklar eksi olduğu için hiçbiri 0'dan büyük değildir ve max hiç değişmez. 0 yazılır, oysa en yüksek sıcaklık -3'tür. Doğrusu max'ı ilk değerle (getTemp(1)) ya da *Integer.MIN_VALUE* ile başlatmaktır.",
          "fig": {
            "type": "code",
            "code": "int max = 0;\nfor (int d = 1; d <= 4; d++) {\n    if (getTemp(d) > max) {\n        max = getTemp(d);\n    }\n}\nSystem.out.println(max);"
          }
        },
        {
          "t": "2.9-1",
          "q": "What is printed as a result of executing the following code segment that computes an average?",
          "o": [
            "5.0",
            "5",
            "5.5",
            "22.0"
          ],
          "a": 2,
          "w": "i değerleri 1, 4, 7, 10: sum = 22, count = 4. (double) dönüşümü bölmeden önce yalnız sum'a uygulanır, bu yüzden bölme *double* yapılır: 22.0 / 4 = 5.5. (double) (sum / count) yazılsaydı önce *int* bölme 5 verir ve sonuç 5.0 olurdu.",
          "fig": {
            "type": "code",
            "code": "int sum = 0;\nint count = 0;\nfor (int i = 1; i <= 10; i += 3) {\n    sum += i;\n    count++;\n}\nSystem.out.println((double) sum / count);"
          }
        },
        {
          "t": "2.9-2",
          "q": "What is printed as a result of executing the following code segment that examines each digit of a number?",
          "o": [
            "2",
            "5",
            "0",
            "3"
          ],
          "a": 3,
          "w": "Sağdan basamaklar: 0, 0, 5, 0, 3. n % 10 == 0 olan üç basamak var. Ortadaki sıfır da sayılır, çünkü n 305'e, sonra 30'a iner ve 30 % 10 == 0'dır. 5 toplam basamak sayısıdır; 2 yalnız sondaki sıfırları saymaktır.",
          "fig": {
            "type": "code",
            "code": "int n = 30500;\nint c = 0;\nwhile (n > 0) {\n    if (n % 10 == 0) {\n        c++;\n    }\n    n /= 10;\n}\nSystem.out.println(c);"
          }
        },
        {
          "t": "2.9-2",
          "q": "What is printed as a result of executing the following code segment that builds a new number from the digits of n?",
          "o": [
            "0321",
            "321",
            "1230",
            "3210"
          ],
          "a": 1,
          "w": "Her turda son basamak r'nin sağına eklenir: r 0, 3, 32, 321 olur. İlk turda eklenen 0, r = 0 iken değeri değiştirmez; *int* değerler baştaki sıfırla yazılmaz, bu yüzden \"0321\" imkânsızdır. Sayı ters çevrilince sondaki sıfırlar kaybolur.",
          "fig": {
            "type": "code",
            "code": "int n = 1230;\nint r = 0;\nwhile (n > 0) {\n    r = r * 10 + n % 10;\n    n /= 10;\n}\nSystem.out.println(r);"
          }
        },
        {
          "t": "2.10",
          "q": "What is printed as a result of executing the following code segment that builds a new string one letter at a time?",
          "o": [
            "drum",
            "murd",
            "mur",
            "rumd"
          ],
          "a": 1,
          "w": "Her harf r'nin önüne eklenir: \"d\", \"rd\", \"urd\", \"murd\". Ters çevirme böyle kurulur. r = r + harf yazılsaydı \"drum\" çıkardı. Döngü 0'dan length() - 1'e kadar her harfi bir kez alır; hiçbiri atlanmaz.",
          "fig": {
            "type": "code",
            "code": "String s = \"drum\";\nString r = \"\";\nfor (int i = 0; i < s.length(); i++) {\n    r = s.substring(i, i + 1) + r;\n}\nSystem.out.println(r);"
          }
        },
        {
          "t": "2.10",
          "q": "What is the result of executing the following code segment, whose loop condition uses the <= operator?",
          "o": [
            "code is printed, and then a StringIndexOutOfBoundsException is thrown",
            "code is printed and the segment ends normally",
            "cod is printed and the segment ends normally",
            "A StringIndexOutOfBoundsException is thrown before anything is printed"
          ],
          "a": 0,
          "w": "\"code\" 4 harflidir, geçerli *index*'ler 0–3. i = 0…3 için harfler yazılır. i = 4'te 4 <= 4 hâlâ *true*'dur ve substring(4, 5) uzunluğu aştığı için *StringIndexOutOfBoundsException* fırlatır. Hata çalışma anında (*run-time*) olduğundan önceki çıktılar ekranda kalır. Doğru koşul i < s.length().",
          "fig": {
            "type": "code",
            "code": "String s = \"code\";\nfor (int i = 0; i <= s.length(); i++) {\n    System.out.print(s.substring(i, i + 1));\n}"
          }
        },
        {
          "t": "2.11",
          "q": "What is printed as a result of executing the following nested loops? In the choices, a slash ( / ) marks the start of a new line of output.",
          "o": [
            "### / ## / #",
            "### / ### / ###",
            "######",
            "# / ## / ###"
          ],
          "a": 3,
          "w": "İç döngünün sınırı dış değişkene bağlı: c <= r. r = 1'de bir, r = 2'de iki, r = 3'te üç # yazılır. println() iç döngünün dışında, dış döngünün içindedir; her satırın sonunda bir kez alt satıra geçer. println hiç olmasaydı hepsi tek satırda (######) çıkardı.",
          "fig": {
            "type": "code",
            "code": "for (int r = 1; r <= 3; r++) {\n    for (int c = 1; c <= r; c++) {\n        System.out.print(\"#\");\n    }\n    System.out.println();\n}"
          }
        },
        {
          "t": "2.12",
          "q": "How many times is the statement count++ executed when the following triangular nested loops are run?",
          "o": [
            "25",
            "10",
            "15",
            "20"
          ],
          "a": 2,
          "w": "İç döngü j = i'den 5'e döner: i = 1'de 5, i = 2'de 4, …, i = 5'te 1 tur. Toplam 5 + 4 + 3 + 2 + 1 = 15 = n(n + 1) / 2. 25 (5 × 5) iç döngünün hep 5 tur döndüğünü sanmaktır; 10, j = i + 1 ile başlasaydı çıkardı.",
          "fig": {
            "type": "code",
            "code": "int count = 0;\nfor (int i = 1; i <= 5; i++) {\n    for (int j = i; j <= 5; j++) {\n        count++;\n    }\n}"
          }
        }
      ]
    },
    {
      "no": 3,
      "level": "Orta",
      "minutes": 25,
      "questions": [
        {
          "t": "2.1–2.2",
          "q": "What is printed as a result of executing the following code segment that mixes int arithmetic, string concatenation, and a comparison?",
          "o": [
            "45 true",
            "9 false",
            "9 true",
            "4.8 true"
          ],
          "a": 2,
          "w": "a / b = 4 (*integer division*), a % b = 5. Soldan sağa: önce 4 + 5 sayı toplamı = 9, sonra \" \" eklenince String olur. Parantez içi 5 > 4 *true*. \"45\" toplamayı String birleştirme sanmaktan gelir; String ancak \" \" eklendiğinde başlar.",
          "fig": {
            "type": "code",
            "code": "int a = 29;\nint b = 6;\nSystem.out.println(a / b + a % b + \" \" + (a % b > a / b));"
          }
        },
        {
          "t": "2.3–2.4",
          "q": "What is printed as a result of executing the following code segment, in which more than one condition is true for the given value?",
          "o": [
            "AD",
            "ABCD",
            "CD",
            "ABD"
          ],
          "a": 0,
          "w": "45 üç koşulu da sağlar, ama *else if* zincirinde yalnız ilk *true* kol çalışır: \"A\". En dar koşul (n % 15 == 0) en altta olduğu için o kol hiçbir zaman çalışamaz (sıra tuzağı). İkinci *if* yeni ve bağımsız bir yapıdır: 45 > 40, \"D\" eklenir.",
          "fig": {
            "type": "code",
            "code": "int n = 45;\nString r = \"\";\nif (n % 3 == 0)\n    r += \"A\";\nelse if (n % 5 == 0)\n    r += \"B\";\nelse if (n % 15 == 0)\n    r += \"C\";\nif (n > 40)\n    r += \"D\";\nelse\n    r += \"E\";\nSystem.out.println(r);"
          }
        },
        {
          "t": "2.5",
          "q": "Consider the expression shown, where x is an int variable. For which of the following values of x does the expression evaluate to true?",
          "o": [
            "4",
            "22",
            "30",
            "7"
          ],
          "a": 3,
          "w": "&& önce yapılır: (x > 10 && x < 20) || x % 7 == 0. x = 7 için sol parça *false* ama 7 % 7 == 0 *true*, sonuç *true*. 4, 22 ve 30 ne aralıktadır ne de 7'nin katıdır. İfadeyi x > 10 && (x < 20 || x % 7 == 0) diye okuyan biri 7'yi de eler; öncelik kuralı (&& → ||) burada belirleyicidir.",
          "fig": {
            "type": "code",
            "code": "x > 10 && x < 20 || x % 7 == 0"
          }
        },
        {
          "t": "2.5",
          "q": "What is the result of executing the following code segment, which contains three if statements with compound conditions?",
          "o": [
            "AC is printed",
            "A is printed, and then an ArithmeticException is thrown",
            "A is printed and the segment ends normally",
            "An ArithmeticException is thrown before anything is printed"
          ],
          "a": 1,
          "w": "İlk *if*: x == 0 *true*, || sağ tarafa bakmaz (*short-circuit*) ve \"A\" yazılır. İkinci: x != 0 *false*, && sağ tarafı atlar, hiçbir şey yazılmaz. Üçüncüde sıra ters: y / x önce hesaplanır ve sıfıra bölme *ArithmeticException* fırlatır. Kalkan (x == 0) bölmeden önce gelmelidir.",
          "fig": {
            "type": "code",
            "code": "int x = 0;\nint y = 8;\nif (x == 0 || y / x > 2)\n    System.out.print(\"A\");\nif (x != 0 && y / x > 2)\n    System.out.print(\"B\");\nif (y / x > 2 || x == 0)\n    System.out.print(\"C\");"
          }
        },
        {
          "t": "2.6",
          "q": "Assume that a, b, c, and d are properly declared and initialized int variables. Which of the following is equivalent to the expression shown?",
          "o": [
            "a < b && c == d",
            "a <= b && c == d",
            "a <= b || c == d",
            "a > b && c != d"
          ],
          "a": 1,
          "w": "*De Morgan's law*: !(A || B) = !A && !B. !(a > b) → a <= b; !(c != d) → c == d; || işlemi && olur. > işleminin tersini < sanmak a == b durumunu kaçırır: a = b = 3 ve c = d karşı örnektir. || işlemini korumak da yanlıştır.",
          "fig": {
            "type": "code",
            "code": "!(a > b || c != d)"
          }
        },
        {
          "t": "2.6",
          "q": "Assume that p and q are properly declared and initialized boolean variables. Which of the following is equivalent to the expression shown for all values of p and q?",
          "o": [
            "p != q",
            "p || q",
            "!(p || q)",
            "p == q"
          ],
          "a": 3,
          "w": "İfade, ya ikisi de *true* ya da ikisi de *false* iken *true*'dur; yani p ile q aynı değerdedir. *boolean* değerler == ile karşılaştırılabilir: p == q. *truth table*: TT → true, TF → false, FT → false, FF → true; aynı sütunu yalnız p == q verir. !(p || q) yalnız FF satırını tutar.",
          "fig": {
            "type": "code",
            "code": "(p && q) || (!p && !q)"
          }
        },
        {
          "t": "2.7",
          "q": "What is printed as a result of executing the following code segment that repeatedly divides a number?",
          "o": [
            "4 1",
            "3 3",
            "5 0",
            "4 0"
          ],
          "a": 0,
          "w": "n: 100 → 33 → 11 → 3 → 1 (her biri *integer division*). n 1 olunca 1 > 1 *false*; 4 tur yapılmış ve n 1'de kalmıştır. 3'ten sonraki bölmeyi unutmak \"3 3\", 1'den sonra da bölündüğünü sanmak \"5 0\" verir.",
          "fig": {
            "type": "code",
            "code": "int n = 100;\nint steps = 0;\nwhile (n > 1) {\n    n = n / 3;\n    steps++;\n}\nSystem.out.println(steps + \" \" + n);"
          }
        },
        {
          "t": "2.7",
          "q": "What is printed as a result of executing the following code segment, in which the loop variable is updated before it is used?",
          "o": [
            "10",
            "6",
            "15",
            "21"
          ],
          "a": 2,
          "w": "Gövdede önce i++ çalışır, sonra yeni i eklenir. Eklenen değerler 1, 2, 3, 4, 5 (i = 4 iken koşul *true*, i 5 olur ve eklenir): 15. Satır sırası ters olsaydı 0 + 1 + 2 + 3 + 4 = 10 olurdu. Gövdedeki satır sırası, döngünün hangi değerleri işlediğini belirler.",
          "fig": {
            "type": "code",
            "code": "int i = 0;\nint sum = 0;\nwhile (i < 5) {\n    i++;\n    sum += i;\n}\nSystem.out.println(sum);"
          }
        },
        {
          "t": "2.8",
          "q": "What is printed as a result of executing the following for loop with a nonlinear update?",
          "o": [
            "1 4 13",
            "1 4 13 40",
            "1 3 9 27",
            "1 4"
          ],
          "a": 0,
          "w": "Güncelleme her turdan sonra yapılır: 1 → 1 × 3 + 1 = 4 → 13 → 40. 40 < 30 *false* olduğu için 40 yazılmaz. Güncellemeyi yalnız \"üçle çarp\" sanmak \"1 3 9 27\" verir. Koşul, güncellenmiş değerle gövdeden önce denetlenir.",
          "fig": {
            "type": "code",
            "code": "for (int i = 1; i < 30; i = i * 3 + 1) {\n    System.out.print(i + \" \");\n}"
          }
        },
        {
          "t": "2.8",
          "q": "What is printed as a result of executing the following code segment, in which a semicolon follows the for loop header?",
          "o": [
            "6",
            "1",
            "0",
            "The code does not compile"
          ],
          "a": 1,
          "w": "Başlıktan sonraki ; döngünün gövdesini boş bir komut yapar: döngü 6 kez hiçbir şey yapmadan döner. Alttaki { count++; } döngüye ait olmayan sıradan bir bloktur ve bir kez çalışır: 1. Kod derlenir; k blokta kullanılmadığı için kapsam (*scope*) sorunu da yoktur.",
          "fig": {
            "type": "code",
            "code": "int count = 0;\nfor (int k = 0; k < 6; k++);\n{\n    count++;\n}\nSystem.out.println(count);"
          }
        },
        {
          "t": "2.9-1",
          "q": "Assume that getSteps(day) returns the number of steps recorded on a given day and that, for days 1 through 5, it returns 4200, 8100, 8100, 3900, and 7600, respectively. What is printed as a result of executing the following code segment?",
          "o": [
            "2",
            "5",
            "8100",
            "3"
          ],
          "a": 3,
          "w": "best adım sayısını değil, en çok adım atılan günün numarasını tutar. Gün 2: 8100 >= 4200, best = 2. Gün 3: 8100 >= 8100 de *true* (>= eşitlikte günceller), best = 3. Gün 4 ve 5 daha az. > kullanılsaydı eşitlikte önceki gün kalır ve 2 yazılırdı.",
          "fig": {
            "type": "code",
            "code": "int best = 1;\nfor (int day = 2; day <= 5; day++) {\n    if (getSteps(day) >= getSteps(best)) {\n        best = day;\n    }\n}\nSystem.out.println(best);"
          }
        },
        {
          "t": "2.9-1",
          "q": "What is printed as a result of executing the following code segment that counts values meeting two conditions?",
          "o": [
            "4",
            "5",
            "3",
            "6"
          ],
          "a": 2,
          "w": "n: 10, 15, 20, 25, 30, 35, 40, 45, 50. n % 10 != 0 olanlar 15, 25, 35, 45; bunlardan 20'den büyük olanlar 25, 35, 45: 3. 15'i saymak (yalnız ilk koşula bakmak) 4 verir; && iki koşulun birlikte sağlanmasını ister.",
          "fig": {
            "type": "code",
            "code": "int count = 0;\nfor (int n = 10; n <= 50; n += 5) {\n    if (n % 10 != 0 && n > 20) {\n        count++;\n    }\n}\nSystem.out.println(count);"
          }
        },
        {
          "t": "2.9-2",
          "q": "What is printed as a result of executing the following code segment that separates even and odd digits?",
          "o": [
            "8 2",
            "13 3",
            "8 3",
            "9 3"
          ],
          "a": 2,
          "w": "Basamaklar sağdan: 8, 1, 9, 0, 5. Çift olanlar 8 ve 0 (0 % 2 == 0, yani 0 çifttir): toplam 8. Tek olanlar 1, 9 ve 5: 3 tane. En soldaki 5'i unutmak \"8 2\" verir. Döngü n 0 olana kadar her basamağı bir kez işler.",
          "fig": {
            "type": "code",
            "code": "int n = 50918;\nint evenSum = 0;\nint oddCount = 0;\nwhile (n > 0) {\n    int d = n % 10;\n    if (d % 2 == 0)\n        evenSum += d;\n    else\n        oddCount++;\n    n /= 10;\n}\nSystem.out.println(evenSum + \" \" + oddCount);"
          }
        },
        {
          "t": "2.9-2",
          "q": "The following code segment is intended to print true if the positive int n is prime and false otherwise. For which value of n does the code segment print an incorrect result?",
          "o": [
            "1",
            "2",
            "7",
            "9"
          ],
          "a": 0,
          "w": "Kod 2 ile n - 1 arasındaki bölenleri sayar; hiç yoksa *true* yazar. n = 1'de döngü hiç dönmez (2 < 1 *false*), count 0 kalır ve *true* yazılır; oysa 1 asal değildir. n = 2'de de döngü dönmez ama 2 asaldır, sonuç doğrudur. 7 asal (*true*), 9 = 3 × 3 (*false*): ikisi de doğru. Uç durumları (*edge case*) mutlaka dene.",
          "fig": {
            "type": "code",
            "code": "int count = 0;\nfor (int d = 2; d < n; d++) {\n    if (n % d == 0) {\n        count++;\n    }\n}\nSystem.out.println(count == 0);"
          }
        },
        {
          "t": "2.10",
          "q": "What is printed as a result of executing the following code segment that counts two-letter substrings?",
          "o": [
            "2",
            "3",
            "4",
            "5"
          ],
          "a": 1,
          "w": "İki harflik parçalar i = 0…4: \"aa\", \"aa\", \"ab\", \"ba\", \"aa\". Üçü \"aa\": 3. Parçalar örtüşebilir; 0 ve 1. konumdakiler ayrı sayılır. i <= s.length() - 2 son parçayı da alır; i < s.length() - 2 yazılsaydı i = 4 kaçar ve 2 çıkardı.",
          "fig": {
            "type": "code",
            "code": "String s = \"aaabaa\";\nint c = 0;\nfor (int i = 0; i <= s.length() - 2; i++) {\n    if (s.substring(i, i + 2).equals(\"aa\")) {\n        c++;\n    }\n}\nSystem.out.println(c);"
          }
        },
        {
          "t": "2.10",
          "q": "What is printed as a result of executing the following code segment that uses indexOf to classify letters?",
          "o": [
            "euaio",
            "dct",
            "ectn",
            "dctn"
          ],
          "a": 3,
          "w": "\"aeiou\".indexOf(ch) harf sesliyse 0–4 arası bir konum, değilse -1 döndürür. Koşul == -1 olduğu için yalnız sessiz harfler eklenir: d, c, t, n. Koşulu ters okumak sesli harfleri (\"euaio\") verir. out her eklemede yeni bir String olur (*immutable*); w değişmez.",
          "fig": {
            "type": "code",
            "code": "String w = \"education\";\nString out = \"\";\nfor (int i = 0; i < w.length(); i++) {\n    String ch = w.substring(i, i + 1);\n    if (\"aeiou\".indexOf(ch) == -1) {\n        out += ch;\n    }\n}\nSystem.out.println(out);"
          }
        },
        {
          "t": "2.11",
          "q": "What is printed as a result of executing the following nested loops, in which the inner loop starts at the outer loop variable?",
          "o": [
            "3 23 123",
            "123 23 3",
            "3 32 321",
            "333 22 1"
          ],
          "a": 0,
          "w": "Dış döngü a = 3, 2, 1. İç döngü b = a'dan 3'e: a = 3 iken yalnız 3; a = 2 iken 2, 3; a = 1 iken 1, 2, 3. Her dış turun sonunda bir boşluk yazılır. İç döngü artarak saydığı için \"32\" gibi azalan gruplar çıkmaz; dış döngü azaldığı için en kısa grup başta gelir.",
          "fig": {
            "type": "code",
            "code": "for (int a = 3; a >= 1; a--) {\n    for (int b = a; b <= 3; b++) {\n        System.out.print(b);\n    }\n    System.out.print(\" \");\n}"
          }
        },
        {
          "t": "2.11",
          "q": "What is printed as a result of executing the following code segment, in which a variable is declared inside the outer loop?",
          "o": [
            "15",
            "10",
            "6",
            "18"
          ],
          "a": 1,
          "w": "row her dış turun başında 0'a sıfırlanır. Satır toplamları: 1, 1 + 2 = 3, 1 + 2 + 3 = 6; total = 10. row dış döngünün dışında tanımlansaydı birikirdi (1, 4, 10) ve total 15 olurdu. 6 yalnız son satırın toplamıdır.",
          "fig": {
            "type": "code",
            "code": "int total = 0;\nfor (int i = 1; i <= 3; i++) {\n    int row = 0;\n    for (int j = 1; j <= i; j++) {\n        row += j;\n    }\n    total += row;\n}\nSystem.out.println(total);"
          }
        },
        {
          "t": "2.12",
          "q": "How many times is the statement count++ executed when the following loop, whose variable doubles, is run?",
          "o": [
            "6",
            "8",
            "7",
            "50"
          ],
          "a": 2,
          "w": "k: 1, 2, 4, 8, 16, 32, 64; sonraki değer 128 > 100. 7 tur. Değişken her turda ikiye katlanınca tur sayısı çok yavaş büyür: n'yi aşana kadar kaç kez ikiye katlandığı kadar. 50, k += 2 ile karıştırmaktır.",
          "fig": {
            "type": "code",
            "code": "int count = 0;\nfor (int k = 1; k <= 100; k *= 2) {\n    count++;\n}"
          }
        },
        {
          "t": "2.12",
          "q": "How many times is the condition x > 0 evaluated when the following code segment is executed?",
          "o": [
            "7",
            "6",
            "9",
            "8"
          ],
          "a": 3,
          "w": "x 20, 17, 14, 11, 8, 5, 2 iken koşul *true* (7 kez) ve gövde çalışır; x -1 olunca koşul bir kez daha denetlenir ve *false* olur. Toplam 7 + 1 = 8 denetim. Bir döngünün koşulu her zaman gövdeden bir fazla denetlenir.",
          "fig": {
            "type": "code",
            "code": "int x = 20;\nwhile (x > 0) {\n    x -= 3;\n}"
          }
        }
      ]
    },
    {
      "no": 4,
      "level": "Zor",
      "minutes": 30,
      "questions": [
        {
          "t": "2.1–2.2",
          "q": "What is printed as a result of executing the following code segment that compares double values?",
          "o": [
            "true 8",
            "false 8",
            "true 7",
            "false 7"
          ],
          "a": 3,
          "w": "0.1 ve 0.7 ikilik sistemde tam gösterilemez; toplamları 0.7999999999999999 olur (*round-off error*). Bu yüzden a == b *false*. a × 10 = 7.999999999999999 ve (int) dönüşümü ondalığı keser, yuvarlamaz: 7. *double* değerleri == ile karşılaştırmak güvenilir değildir.",
          "fig": {
            "type": "code",
            "code": "double a = 0.1 + 0.7;\ndouble b = 0.8;\nint k = (int) (a * 10);\nSystem.out.println((a == b) + \" \" + k);"
          }
        },
        {
          "t": "2.1–2.2",
          "q": "Assume that the int variable x and the boolean variable done have been properly declared and initialized. Which of the following statements will cause a compile-time error?",
          "o": [
            "if (done = true) { x++; }",
            "if (x = 5) { x++; }",
            "if (x % 5 == 0) { x++; }",
            "if (!done) { x++; }"
          ],
          "a": 1,
          "w": "*if* koşulu bir *boolean* olmalıdır. x = 5 bir atamadır ve değeri *int* 5'tir; *int* koşul olamaz, kod derlenmez. done = true de atamadır ama değeri *boolean* olduğu için derlenir (ve koşul her zaman *true* olur: bir *logic error*). Karşılaştırma için == kullanılır."
        },
        {
          "t": "2.3–2.4",
          "q": "What is printed as a result of executing the following code segment, in which a semicolon follows the first if condition?",
          "o": [
            "13 10",
            "3 7",
            "10 7",
            "-4 7"
          ],
          "a": 2,
          "w": "if (x > 5); koşuldan sonra boş bir komut içerir; *if* yalnız o boş komutu kontrol eder. Alttaki blok her zaman çalışır: y = 7. Sonra 7 > 5 *true*, x = 3 + 7 = 10. Bloğun atlandığını sanmak \"13 10\" verir. Kod derlenir; bu bir *logic error*'dır.",
          "fig": {
            "type": "code",
            "code": "int x = 3;\nint y = 10;\nif (x > 5);\n{\n    y = y - x;\n}\nif (y > 5)\n    x = x + y;\nelse\n    x = x - y;\nSystem.out.println(x + \" \" + y);"
          }
        },
        {
          "t": "2.3–2.4",
          "q": "Consider the following nested if statements. Which of the following sets of values for the int variables a, b, and c results in r being assigned the value \"Y\"?",
          "o": [
            "a = 5, b = 3, c = 4",
            "a = 5, b = 3, c = 1",
            "a = 2, b = 3, c = 1",
            "a = 3, b = 3, c = 3"
          ],
          "a": 0,
          "w": "\"Y\" için dış koşul a > b *true*, iç koşul b > c *false* olmalıdır. 5, 3, 4: 5 > 3 ve 3 > 4 değil → \"Y\". 5, 3, 1 \"X\" verir. 2, 3, 1'de a > b *false*, a > c *true* → \"Z\". 3, 3, 3'te hiçbir koşul tutmaz → \"W\".",
          "fig": {
            "type": "code",
            "code": "if (a > b) {\n    if (b > c)\n        r = \"X\";\n    else\n        r = \"Y\";\n} else if (a > c)\n    r = \"Z\";\nelse\n    r = \"W\";"
          }
        },
        {
          "t": "2.5",
          "q": "Consider the following method tick and the code segment that calls it in a compound condition. What is printed as a result of executing the code segment?",
          "o": [
            "2 6 1 no",
            "2 9 6 1 no",
            "2 no",
            "2 6 1 yes"
          ],
          "a": 0,
          "w": "Öncelik: (tick(2) && tick(9)) || (tick(6) && tick(1)). tick(2) \"2 \" yazar ve *false* döner; && sağını atlar, tick(9) çağrılmaz. Sol parça *false* olduğu için || sağ parçaya geçer: tick(6) *true* döner, bu yüzden tick(1) de çağrılır ve *false* döner. Sonuç *false*: \"no\". Hangi çağrının atlanacağını *short-circuit* kuralı belirler.",
          "fig": {
            "type": "code",
            "code": "public static boolean tick(int n) {\n    System.out.print(n + \" \");\n    return n > 4;\n}\n\n// code segment\nif (tick(2) && tick(9) || tick(6) && tick(1))\n    System.out.println(\"yes\");\nelse\n    System.out.println(\"no\");"
          }
        },
        {
          "t": "2.6",
          "q": "A student rewrote the first expression shown as the second expression shown. For which of the following values of the int variables x and y do the two expressions evaluate to different values?",
          "o": [
            "x = 6, y = 1",
            "x = 3, y = 4",
            "x = 7, y = 5",
            "x = 5, y = 2"
          ],
          "a": 2,
          "w": "Doğru *De Morgan* dönüşümü x >= 5 || y <= 2'dir; öğrenci && işlemini || yapmayı unutmuş. Fark, koşullardan yalnız birinin tuttuğu durumda görülür. x = 7, y = 5: orijinal !(false && true) = *true*, yeni ifade true && false = *false*. (6, 1) ve (5, 2) için ikisi de *true*, (3, 4) için ikisi de *false*. Böyle bir değer çiftine karşı örnek (*counterexample*) denir.",
          "fig": {
            "type": "code",
            "code": "// original\n!(x < 5 && y > 2)\n// rewritten\nx >= 5 && y <= 2"
          }
        },
        {
          "t": "2.6",
          "q": "What is printed as a result of executing the following code segment, in which String references are reassigned?",
          "o": [
            "false true true",
            "true false true",
            "true true true",
            "false false true"
          ],
          "a": 1,
          "w": "c = b; c'ye ikinci nesnenin *reference*'ını kopyalar. b = a; sonra b birinci nesneyi gösterir; c hâlâ ikinci nesnededir. a == b: aynı nesne, *true*. b == c: farklı nesneler, *false*. c.equals(a): içerikler aynı, *true*. Atama nesneyi kopyalamaz, yalnız adresi taşır.",
          "fig": {
            "type": "code",
            "code": "String a = new String(\"tea\");\nString b = new String(\"tea\");\nString c = b;\nb = a;\nSystem.out.println((a == b) + \" \" + (b == c) + \" \" + c.equals(a));"
          }
        },
        {
          "t": "2.7",
          "q": "What is printed as a result of executing the following while loop that updates two variables?",
          "o": [
            "3 8 18",
            "5 32 10",
            "4 16 18",
            "4 16 14"
          ],
          "a": 3,
          "w": "Tur tur (a, b): (2, 26), (4, 22), (8, 18), (16, 14). Dördüncü turdan sonra 16 < 14 *false*, döngü biter. Koşul yalnız tur başında denetlenir; tur ortasında a b'yi geçse bile tur tamamlanır. İzleme tablosu (*trace table*) kurmak en güvenli yoldur.",
          "fig": {
            "type": "code",
            "code": "int a = 1;\nint b = 30;\nint turns = 0;\nwhile (a < b) {\n    a = a * 2;\n    b = b - 4;\n    turns++;\n}\nSystem.out.println(turns + \" \" + a + \" \" + b);"
          }
        },
        {
          "t": "2.8",
          "q": "What is printed as a result of executing the following code segment, in which the loop variable is also changed inside the loop body?",
          "o": [
            "10",
            "6",
            "7",
            "4"
          ],
          "a": 2,
          "w": "Gövdedeki i++ başlıktaki i++'ya ek olarak çalışır. i'nin gövdeye girdiği değerler: 0 (→ 1), 2, 3 (→ 4), 5, 6 (→ 7), 8, 9 (→ 10). Her birinde count artar: 7 tur. 9'da i 10 olur, başlık i++ ile 11 olur ve koşul *false*. Gövdede sayacı değiştirmek tur sayısı formülünü bozar; izleyerek say.",
          "fig": {
            "type": "code",
            "code": "int count = 0;\nfor (int i = 0; i < 10; i++) {\n    if (i % 3 == 0) {\n        i++;\n    }\n    count++;\n}\nSystem.out.println(count);"
          }
        },
        {
          "t": "2.8",
          "q": "Which of the following code segments prints exactly the same output as the for loop shown?",
          "o": [
            "int k = 12; while (k > 0) { k -= 3; System.out.print(k + \" \"); }",
            "int k = 12; while (k >= 0) { System.out.print(k + \" \"); k -= 3; }",
            "int k = 12; while (k > 3) { System.out.print(k + \" \"); k -= 3; }",
            "int k = 15; while (k > 3) { k -= 3; System.out.print(k + \" \"); }"
          ],
          "a": 3,
          "w": "*for* döngüsü 12 9 6 3 yazar. Doğru şıkta güncelleme yazdırmadan önce yapıldığı için 15'ten başlanır; 12, 9, 6, 3 yazılır ve k 3 olunca 3 > 3 *false*. 12'den başlayıp önce azaltan döngü 9 6 3 0 yazar; >= 0 olan 0'ı da yazar; > 3 olan 3'ü kaçırır. *for* ⇄ *while* çevirisinde init, condition ve update'in yerini koru.",
          "fig": {
            "type": "code",
            "code": "for (int k = 12; k > 0; k -= 3) {\n    System.out.print(k + \" \");\n}"
          }
        },
        {
          "t": "2.9-1",
          "q": "Assume that getTemp(d) returns the temperature on day d and that, for days 1 through 5, it returns 4, -2, 0, -7, and 3, respectively. What is printed as a result of executing the following code segment?",
          "o": [
            "4 -7",
            "2 -2",
            "3 0",
            "5 3"
          ],
          "a": 1,
          "w": "Koşul yalnız -5'ten büyük sıcaklıkları aday yapar; -7 elenir. *Integer.MAX_VALUE* ile başlamak ilk geçerli değerin kesinlikle seçilmesini sağlar. Adaylar 4, -2, 0, 3; en küçüğü -2 ve 2. günde. \"4 -7\" ikinci koşulu yok saymaktır; at gün numarasını, min sıcaklığı tutar.",
          "fig": {
            "type": "code",
            "code": "int min = Integer.MAX_VALUE;\nint at = 0;\nfor (int d = 1; d <= 5; d++) {\n    int t = getTemp(d);\n    if (t < min && t > -5) {\n        min = t;\n        at = d;\n    }\n}\nSystem.out.println(at + \" \" + min);"
          }
        },
        {
          "t": "2.9-1",
          "q": "What is printed as a result of executing the following code segment, which computes an average in two different ways?",
          "o": [
            "4.0 4.5",
            "4.5 4.5",
            "4.0 4.0",
            "4 4.5"
          ],
          "a": 0,
          "w": "3'e bölünmeyenler 1, 2, 4, 5, 7, 8: total = 27, n = 6. avg1'de parantez önce *int* bölmeyi yapar: 27 / 6 = 4, sonra 4.0'a çevrilir. avg2'de (double) önce total'a uygulanır: 27.0 / 6 = 4.5. Dönüşümün yeri sonucu değiştirir. *double* bir değişken \"4\" diye yazılmaz.",
          "fig": {
            "type": "code",
            "code": "int total = 0;\nint n = 0;\nfor (int x = 1; x <= 8; x++) {\n    if (x % 3 != 0) {\n        total += x;\n        n++;\n    }\n}\ndouble avg1 = (double) (total / n);\ndouble avg2 = (double) total / n;\nSystem.out.println(avg1 + \" \" + avg2);"
          }
        },
        {
          "t": "2.9-2",
          "q": "What is printed as a result of executing the following code segment that alternates signs while reading digits?",
          "o": [
            "6",
            "-6",
            "16",
            "-2"
          ],
          "a": 1,
          "w": "Basamaklar sağdan okunur: 2, 4, 3, 7. İşaret + ile başlar ve her turda değişir: +2 - 4 + 3 - 7 = -6. Basamakları soldan okumak (7 - 3 + 4 - 2) 6 verir; 16 işaretsiz toplamdır. n % 10 her zaman en sağdaki basamağı verir.",
          "fig": {
            "type": "code",
            "code": "int n = 7342;\nint result = 0;\nint sign = 1;\nwhile (n > 0) {\n    result += sign * (n % 10);\n    sign = -sign;\n    n /= 10;\n}\nSystem.out.println(result);"
          }
        },
        {
          "t": "2.9-2",
          "q": "The following code segment is intended to store in count the number of digits in the nonnegative int n. For which value of n does the code segment produce an incorrect result?",
          "o": [
            "7",
            "10",
            "1000",
            "0"
          ],
          "a": 3,
          "w": "n = 0'da 0 > 0 *false* olur, döngü hiç dönmez ve count 0 kalır; oysa 0 tek basamaklı bir sayıdır, doğru cevap 1. 7 → 1, 10 → 2, 1000 → 4 doğru sayılır; sondaki sıfırlar da birer basamaktır. Basamak algoritmalarında n = 0 klasik uç durumdur (*edge case*).",
          "fig": {
            "type": "code",
            "code": "int count = 0;\nwhile (n > 0) {\n    n /= 10;\n    count++;\n}"
          }
        },
        {
          "t": "2.10",
          "q": "What is printed as a result of executing the following code segment that compares neighboring letters?",
          "o": [
            "3",
            "6",
            "2",
            "4"
          ],
          "a": 0,
          "w": "Döngü 1'den başladığı için her harf solundaki komşusuyla karşılaştırılır ve s.substring(i - 1, i) hiç sınır dışına çıkmaz. Yan yana aynı harfler: oo, kk, ee: 3. 6 bu çiftlerdeki harf sayısıdır. i 0'dan başlasaydı substring(-1, 0) *StringIndexOutOfBoundsException* verirdi.",
          "fig": {
            "type": "code",
            "code": "String s = \"bookkeeper\";\nint c = 0;\nfor (int i = 1; i < s.length(); i++) {\n    String prev = s.substring(i - 1, i);\n    if (prev.equals(s.substring(i, i + 1))) {\n        c++;\n    }\n}\nSystem.out.println(c);"
          }
        },
        {
          "t": "2.10",
          "q": "What is printed as a result of executing the following code segment, which walks backward through a string and also calls substring without storing the result?",
          "o": [
            "anet tnl",
            "planet eap",
            "planet tnl",
            "planet tnlp"
          ],
          "a": 2,
          "w": "Geriye doğru ikişer: i = 5 (t), 3 (n), 1 (l); i -1 olunca durur. r = \"tnl\". w.substring(2) yeni bir String döndürür, ama sonuç bir değişkene atanmadığı için kaybolur; String'ler değiştirilemez (*immutable*), w hâlâ \"planet\". \"eap\" i = 4'ten başlamaktır.",
          "fig": {
            "type": "code",
            "code": "String w = \"planet\";\nString r = \"\";\nfor (int i = w.length() - 1; i >= 0; i -= 2) {\n    r += w.substring(i, i + 1);\n}\nw.substring(2);\nSystem.out.println(w + \" \" + r);"
          }
        },
        {
          "t": "2.11",
          "q": "What is printed as a result of executing the following nested loops that print a four-by-four pattern? In the choices, a slash ( / ) marks the start of a new line of output.",
          "o": [
            "x... / .x.. / ..x. / ...x",
            "...x / ..x. / .x.. / x...",
            "x..x / x..x / x..x / x..x",
            "x..x / .xx. / .xx. / x..x"
          ],
          "a": 3,
          "w": "Her satır i, her sütun j'dir. j == i ana köşegeni, j == 5 - i ters köşegeni işaretler. Satır 1: j = 1 ve 4; satır 2: 2 ve 3; satır 3: 3 ve 2; satır 4: 4 ve 1. || iki köşegeni birleştirir; yalnız birini almak ilk iki yanlış şıkkı verir. println() iç döngünün dışında olduğu için her satırda dört karakter vardır.",
          "fig": {
            "type": "code",
            "code": "for (int i = 1; i <= 4; i++) {\n    for (int j = 1; j <= 4; j++) {\n        if (j == i || j == 5 - i)\n            System.out.print(\"x\");\n        else\n            System.out.print(\".\");\n    }\n    System.out.println();\n}"
          }
        },
        {
          "t": "2.11",
          "q": "What is printed as a result of executing the following code segment that compares every pair of positions in a string?",
          "o": [
            "4",
            "7",
            "2",
            "9"
          ],
          "a": 2,
          "w": "j = i + 1'den başlamak her çifti (i < j) yalnız bir kez sayar ve bir harfi kendisiyle eşleştirmez. radar'da aynı harf çiftleri: r (0 ve 4) ile a (1 ve 3): 2. j 0'dan başlasaydı her çift iki kez, her harf de kendisiyle sayılırdı: 4 + 5 = 9. j = i'den başlamak 2 + 5 = 7 verir.",
          "fig": {
            "type": "code",
            "code": "String s = \"radar\";\nint c = 0;\nfor (int i = 0; i < s.length(); i++) {\n    for (int j = i + 1; j < s.length(); j++) {\n        if (s.substring(i, i + 1).equals(s.substring(j, j + 1)))\n            c++;\n    }\n}\nSystem.out.println(c);"
          }
        },
        {
          "t": "2.12",
          "q": "How many times is the statement count++ executed when the following nested loops, whose inner loop steps by two, are run?",
          "o": [
            "12",
            "21",
            "18",
            "9"
          ],
          "a": 0,
          "w": "İç döngü j = i'den 5'e ikişer gider. i = 0: 0, 2, 4 (3 tur); i = 1: 1, 3, 5 (3); i = 2: 2, 4 (2); i = 3: 3, 5 (2); i = 4: 1; i = 5: 1. Toplam 12. 21, adımı 1 olan üçgen döngüdür (6 × 7 / 2); 18, iç döngünün hep 3 tur döndüğünü sanmaktır.",
          "fig": {
            "type": "code",
            "code": "int count = 0;\nfor (int i = 0; i < 6; i++) {\n    for (int j = i; j < 6; j += 2) {\n        count++;\n    }\n}"
          }
        },
        {
          "t": "2.12",
          "q": "Both code segments shown correctly count the divisors of a positive int n. When n is 60, how many more times is the if condition evaluated in Segment I than in Segment II?",
          "o": [
            "29",
            "30",
            "31",
            "60"
          ],
          "a": 1,
          "w": "Segment I'de koşul d = 1…60 için 60 kez, Segment II'de d = 1…30 için 30 kez denetlenir: fark 30. II, n / 2'den büyük tek bölenin n'nin kendisi olduğunu bildiği için onu baştan sayar (c2 = 1). İki segment de 12 bulur, ama II yarı kadar denetim yapar.",
          "fig": {
            "type": "code",
            "code": "// Segment I\nint c1 = 0;\nfor (int d = 1; d <= n; d++) {\n    if (n % d == 0) c1++;\n}\n// Segment II\nint c2 = 1;\nfor (int d = 1; d <= n / 2; d++) {\n    if (n % d == 0) c2++;\n}"
          }
        }
      ]
    },
    {
      "no": 5,
      "level": "Çok zor",
      "minutes": 35,
      "questions": [
        {
          "t": "2.1–2.2",
          "q": "What is printed as a result of executing the following code segment that combines remainders, quotients, and logical operators?",
          "o": [
            "true true",
            "true false",
            "false false",
            "false true"
          ],
          "a": 1,
          "w": "Önce aritmetik: a % b = 1, c % b = 2, a / b = 2, c / b = 1, a - c = 2. Karşılaştırmalar: 1 == 2 *false*, ! ile *true*; 2 > 1 *true*; 2 > 3 *false*. r'de && önce yapılır: true || (true && false) = *true*. s'de parantez || işlemini önce yaptırır: true && false = *false*. Sıra: ! → aritmetik → karşılaştırma → && → ||.",
          "fig": {
            "type": "code",
            "code": "int a = 7;\nint b = 3;\nint c = 5;\nboolean r = !(a % b == c % b) || a / b > c / b && a - c > b;\nboolean s = (!(a % b == c % b) || a / b > c / b) && a - c > b;\nSystem.out.println(r + \" \" + s);"
          }
        },
        {
          "t": "2.3–2.4",
          "q": "What is printed as a result of executing the following code segment, which contains an if statement nested without braces?",
          "o": [
            "6 1",
            "7 1",
            "8 1",
            "7 2"
          ],
          "a": 0,
          "w": "Süslü parantez olmadığından her *else* en yakın eşleşmemiş *if*'e bağlanır: son *else*, girintisine rağmen if (x + y > 9)'a aittir. x > 5 *true*; y > 5 *false*; x + y = 8 > 9 *false*; bu yüzden son *else* çalışır: x = 6. Son *else*'i dıştaki *if*'e bağlamak hiçbir şey değişmiyormuş gibi \"7 1\" verir.",
          "fig": {
            "type": "code",
            "code": "int x = 7;\nint y = 1;\nif (x > 5)\n    if (y > 5)\n        x++;\n    else if (x + y > 9)\n        y++;\nelse\n    x--;\nSystem.out.println(x + \" \" + y);"
          }
        },
        {
          "t": "2.3–2.4",
          "q": "Which of the following code segments assigns the same value to grade as the code segment shown, for every possible int value of score?",
          "o": [
            "if (score >= 80) grade = \"B\"; else if (score >= 90) grade = \"A\"; else grade = \"C\";",
            "grade = \"C\"; if (score >= 90) grade = \"A\"; if (score >= 80) grade = \"B\";",
            "if (score > 90) grade = \"A\"; else if (score > 80) grade = \"B\"; else grade = \"C\";",
            "if (score < 80) grade = \"C\"; else if (score < 90) grade = \"B\"; else grade = \"A\";"
          ],
          "a": 3,
          "w": "Doğru şık aralıkları alttan kurar: 80'in altı C, 80–89 B, kalan (90 ve üstü) A; her puan için aynı sonucu verir. score >= 80'i önce denemek 95'e B verir (sıra tuzağı). Ayrı *if*'lerde 95 önce A, sonra ikinci *if* ile B olur. > kullanmak tam 90 ve tam 80'i bir alt harfe düşürür.",
          "fig": {
            "type": "code",
            "code": "if (score >= 90)\n    grade = \"A\";\nelse if (score >= 80)\n    grade = \"B\";\nelse\n    grade = \"C\";"
          }
        },
        {
          "t": "2.5",
          "q": "Consider the following method ok and the loop that calls it. What is printed as a result of executing the code segment?",
          "o": [
            "12233445 2",
            "1223345 3",
            "1223345 2",
            "1234 2"
          ],
          "a": 2,
          "w": "Her turda ok(i) çağrılır; ok(i + 1) yalnız ilki *true* dönerse çağrılır. i = 1: 1 ve 2 yazılır, ikisi *true*, k = 1. i = 2: 2 ve 3; 3 % 3 == 0 olduğu için *false*. i = 3: yalnız 3 yazılır; *false* olduğu için ok(4) atlanır (*short-circuit*). i = 4: 4 ve 5, ikisi *true*, k = 2. Atlanan çağrıyı da yazmak \"12233445\" verir.",
          "fig": {
            "type": "code",
            "code": "public static boolean ok(int n) {\n    System.out.print(n);\n    return n % 3 != 0;\n}\n\n// code segment\nint k = 0;\nfor (int i = 1; i <= 4; i++) {\n    if (ok(i) && ok(i + 1)) k++;\n}\nSystem.out.println(\" \" + k);"
          }
        },
        {
          "t": "2.5",
          "q": "A school canteen is open when the hour h is from 8 to 11 inclusive or from 13 to 16 inclusive, but it is never open on day 7. Assume that h and day are properly declared and initialized int variables. Which of the following expressions is true exactly when the canteen is open?",
          "o": [
            "h >= 8 && h <= 11 || h >= 13 && h <= 16 && day != 7",
            "(h >= 8 || h <= 11 && h >= 13 || h <= 16) && day != 7",
            "(h >= 8 && h <= 16 || h != 12) && day != 7",
            "(h >= 8 && h <= 11 || h >= 13 && h <= 16) && day != 7"
          ],
          "a": 3,
          "w": "İki zaman aralığı || ile birleşir ve bu grubun tamamı day != 7 ile && yapılmalıdır; bunun için parantez şart. Parantezsiz şıkta && önce yapıldığından day != 7 yalnız öğleden sonraki aralığa bağlanır: 7. gün saat 9'da *true* verir. Aralık içinde olmak && ister; || ile yazılan aralıklar neredeyse her saati kapsar. Son şık saat 12'de bile *true* olur."
        },
        {
          "t": "2.6",
          "q": "A loop should keep running until total reaches at least goal or time is no longer positive, whichever happens first. Assume that total, goal, and time are int variables that are updated in the loop body. Which of the following loop headers is correct?",
          "o": [
            "while (total < goal || time > 0)",
            "while (total < goal && time > 0)",
            "while (!(total >= goal && time <= 0))",
            "while (total <= goal && time >= 0)"
          ],
          "a": 1,
          "w": "Durma koşulu: total >= goal || time <= 0. Döngü bunun tersi doğruyken döner; *De Morgan* ile !(total >= goal || time <= 0) = total < goal && time > 0. || ile yazılan başlık koşullardan biri bozulduğunda da dönmeye devam eder. !(… && …) şıkkı yanlış durma koşulunu (ikisinin birden olmasını) çevirir. <= ve >= sınır değerlerinde fazladan tur attırır."
        },
        {
          "t": "2.6",
          "q": "Assume that a, b, and c are properly declared and initialized boolean variables. Which of the following is equivalent to the expression shown for all values of a, b, and c?",
          "o": [
            "!a || b || c",
            "!a && (b || c)",
            "!a || !b && !c",
            "a || b || c"
          ],
          "a": 0,
          "w": "Dıştaki ! için *De Morgan*: !(A && B) = !A || !B. A = a, B = !(b || c); !B = b || c. Sonuç: !a || (b || c) = !a || b || c. Sekiz satırlık *truth table* ile denetle: ifade yalnız a *true*, b ve c *false* iken *false* olur; bu satırı da diğer yedi satırı da yalnız doğru şık tutturur.",
          "fig": {
            "type": "code",
            "code": "!(a && !(b || c))"
          }
        },
        {
          "t": "2.7",
          "q": "Consider the following code segment, where n is an int variable. For which of the following initial values of n does the loop terminate?",
          "o": [
            "2",
            "4",
            "7",
            "8"
          ],
          "a": 2,
          "w": "İzle: 7 → 9 → 3 → 1, durur. 2 → 4 → 6 → 2 → …; 4 → 6 → 2 → 4 → …; 8 → 10 → 12 → 4 → 6 → 2 → … Bu üçü 2, 4, 6 çemberine düşer ve 1'e hiç ulaşmaz: *infinite loop*. İzlerken bir değer tekrar ederse döngü sonsuzdur.",
          "fig": {
            "type": "code",
            "code": "while (n != 1) {\n    if (n % 3 == 0)\n        n /= 3;\n    else\n        n = n + 2;\n}"
          }
        },
        {
          "t": "2.7",
          "q": "What is printed as a result of executing the following code segment, in which the loop condition depends on a running total?",
          "o": [
            "10 30",
            "8 20",
            "10 20",
            "12 42"
          ],
          "a": 0,
          "w": "(i, s): (2, 2), (4, 6), (6, 12), (8, 20). s = 20 iken 20 <= 20 hâlâ *true*, bir tur daha: (10, 30). 30 <= 20 *false*. <= eşitlikte bir tur daha attırır; \"8 20\" koşulu < gibi okumaktır.",
          "fig": {
            "type": "code",
            "code": "int i = 0;\nint s = 0;\nwhile (s <= 20) {\n    i += 2;\n    s += i;\n}\nSystem.out.println(i + \" \" + s);"
          }
        },
        {
          "t": "2.8",
          "q": "What is printed as a result of executing the following for loop, whose update uses a variable that changes in the body?",
          "o": [
            "1 2 4 7 11 16 22",
            "1 3 6 10 15",
            "1 2 3 4 5 6",
            "1 2 4 7 11 16"
          ],
          "a": 3,
          "w": "Her turda önce a artar, sonra i yazılır; tur sonunda i += a çalışır. (i, a): (1, 1) → i 2; (2, 2) → 4; (4, 3) → 7; (7, 4) → 11; (11, 5) → 16; (16, 6) → 22. 22 <= 20 *false*, yazılmaz. Artışlar 1, 2, 3, 4, 5, 6 olduğu için ardışık sayıların farkı birer büyür.",
          "fig": {
            "type": "code",
            "code": "int a = 0;\nfor (int i = 1; i <= 20; i += a) {\n    a++;\n    System.out.print(i + \" \");\n}"
          }
        },
        {
          "t": "2.8",
          "q": "Assume that n is a positive int. Which of the following loop headers causes the loop body to execute exactly n times for every positive value of n?",
          "o": [
            "for (int k = 0; k <= n + n; k += 2)",
            "for (int k = 1; k <= n; k += 2)",
            "for (int k = 1; k < n + n; k += 2)",
            "for (int k = n; k > 1; k--)"
          ],
          "a": 2,
          "w": "k = 1, 3, 5, … ve k < 2n: son değer 2n - 1. Bunlar 1 ile 2n - 1 arasındaki tek sayılardır, tam n tane. 0'dan 2n'ye çift sayılar (<= ile) n + 1 tanedir. 1'den n'ye ikişer saymak yaklaşık yarısı kadar tur atar. n'den 2'ye geri sayan döngü n - 1 tur atar. Tur sayısı formülünü küçük bir n (1 ya da 2) ile dene."
        },
        {
          "t": "2.9-1",
          "q": "The following code segment is intended to find the largest and second-largest values returned by getScore(i) for i from 1 to 6. The calls return 90, 70, 85, 60, 85, and 75, respectively. What is printed as a result of executing the code segment?",
          "o": [
            "90 85",
            "90 90",
            "90 75",
            "85 85"
          ],
          "a": 1,
          "w": "İki değişken de ilk değerle, 90 ile başlar. Sonraki hiçbir puan 90'dan büyük olmadığı için ilk kol hiç çalışmaz; ikinci kol da s > 90 ister ve o da hiç çalışmaz. Çıktı amaçlanan \"90 85\" değil, \"90 90\" olur. Hata ilk değerdedir: en büyük değer ilk sırada gelince second hiç düşmez. second'ı *Integer.MIN_VALUE* ile başlatmak bunu düzeltir.",
          "fig": {
            "type": "code",
            "code": "int max = getScore(1);\nint second = getScore(1);\nfor (int i = 2; i <= 6; i++) {\n    int s = getScore(i);\n    if (s > max) {\n        second = max;\n        max = s;\n    } else if (s > second) {\n        second = s;\n    }\n}\nSystem.out.println(max + \" \" + second);"
          }
        },
        {
          "t": "2.9-2",
          "q": "What is printed as a result of executing the following code segment that checks which digits of a number divide the number?",
          "o": [
            "4",
            "2",
            "An ArithmeticException is thrown",
            "3"
          ],
          "a": 3,
          "w": "Basamaklar sağdan: 6, 0, 2, 1. 1206 = 6 × 201, yani 6 böler: sayılır. 0 için d != 0 *false*, && sağ tarafı atlar; orig % 0 hiç hesaplanmaz, *exception* olmaz. 2 ve 1 de 1206'yı böler. Toplam 3. Koşulların sırası ters olsaydı orig % 0 *ArithmeticException* fırlatırdı. n küçülürken asıl sayıyı orig'de saklamak gerekir.",
          "fig": {
            "type": "code",
            "code": "int n = 1206;\nint orig = n;\nint c = 0;\nwhile (n > 0) {\n    int d = n % 10;\n    if (d != 0 && orig % d == 0) c++;\n    n /= 10;\n}\nSystem.out.println(c);"
          }
        },
        {
          "t": "2.9-2",
          "q": "What is printed as a result of executing the following code segment that tests each number in a range?",
          "o": [
            "4",
            "3",
            "5",
            "2"
          ],
          "a": 0,
          "w": "Her n için ters çevrilmiş sayı rev hesaplanır; rev == n ise sayı tersten okununca da aynıdır. 90–130 arasında: 99, 101, 111, 121. 100'ün tersi 1, 110'un tersi 11 olduğu için sayılmaz (sondaki sıfırlar kaybolur). t'ye kopyalamak şarttır: iç döngü t'yi 0'a indirir; n bozulsaydı *for* döngüsü de bozulurdu.",
          "fig": {
            "type": "code",
            "code": "int count = 0;\nfor (int n = 90; n <= 130; n++) {\n    int rev = 0;\n    int t = n;\n    while (t > 0) {\n        rev = rev * 10 + t % 10;\n        t /= 10;\n    }\n    if (rev == n) count++;\n}\nSystem.out.println(count);"
          }
        },
        {
          "t": "2.10",
          "q": "What is printed as a result of executing the following code segment that repeatedly searches with indexOf?",
          "o": [
            "2",
            "3",
            "4",
            "The loop never terminates"
          ],
          "a": 1,
          "w": "Her bulunuşta s, bulunan konumun bir sağından kesilir; böylece örtüşen eşleşmeler de sayılır. \"abababa\": 0'da bulunur, s = \"bababa\"; 1'de bulunur, s = \"baba\"; 1'de bulunur, s = \"ba\"; artık yok (-1). count 3. substring(pos + 3) kullanılsaydı örtüşmeler atlanır ve 2 çıkardı; substring(pos) ise aynı yeri tekrar tekrar bulurdu (*infinite loop*).",
          "fig": {
            "type": "code",
            "code": "String s = \"abababa\";\nint count = 0;\nint pos = s.indexOf(\"aba\");\nwhile (pos != -1) {\n    count++;\n    s = s.substring(pos + 1);\n    pos = s.indexOf(\"aba\");\n}\nSystem.out.println(count);"
          }
        },
        {
          "t": "2.10",
          "q": "What is printed as a result of executing the following code segment that compresses runs of repeated letters?",
          "o": [
            "a3b1c2",
            "a3bc2d2",
            "a3b1c2d2",
            "A StringIndexOutOfBoundsException is thrown"
          ],
          "a": 2,
          "w": "Harf solundakiyle aynıysa run artar; değilse önceki harf ve run eklenir. i = length() (8) olduğunda i < s.length() *false* olur ve && sağ tarafı atlar; substring(8, 9) hiç çağrılmaz, son grup (d2) *else* kolunda eklenir. Döngü < ile bitseydi son grup eklenmez ve \"a3b1c2\" çıkardı. Kalkan olmasaydı *StringIndexOutOfBoundsException* fırlatılırdı.",
          "fig": {
            "type": "code",
            "code": "String s = \"aaabccdd\";\nString out = \"\";\nint run = 1;\nfor (int i = 1; i <= s.length(); i++) {\n    if (i < s.length()\n            && s.substring(i, i + 1).equals(s.substring(i - 1, i))) {\n        run++;\n    } else {\n        out += s.substring(i - 1, i) + run;\n        run = 1;\n    }\n}\nSystem.out.println(out);"
          }
        },
        {
          "t": "2.11",
          "q": "What is printed as a result of executing the following nested loops, in which the inner loop's step depends on the outer loop variable?",
          "o": [
            "1 2 3 4 2 3 4 3 4 4",
            "1 2 3 4 2 4 3",
            "1 2 3 4 2 4 3 4",
            "1 2 3 4 2 4 3 6 4 8"
          ],
          "a": 2,
          "w": "İç döngü j = i'den başlar ve i'şer artar. i = 1: 1 2 3 4; i = 2: 2 4; i = 3: 3 (sonraki 6 > 4); i = 4: 4. Her dış turda iç döngü baştan başlar. Adımı hep 1 sanmak ilk yanlış şıkkı verir; i = 4 turunu unutmak sondaki 4'ü kaybettirir; sınırı yok saymak 6 ve 8'i ekler.",
          "fig": {
            "type": "code",
            "code": "for (int i = 1; i <= 4; i++) {\n    for (int j = i; j <= 4; j += i) {\n        System.out.print(j + \" \");\n    }\n}"
          }
        },
        {
          "t": "2.11",
          "q": "What is printed as a result of executing the following code segment that prints substrings of increasing length?",
          "o": [
            "a ab abc b bc c",
            "a b c ab bc",
            "a b c ab ac bc abc",
            "a b c ab bc abc"
          ],
          "a": 3,
          "w": "Dış döngü parça uzunluğunu (1, 2, 3), iç döngü başlangıç konumunu seçer. i + len <= s.length() son geçerli başlangıcı verir. len = 1: a b c; len = 2: ab bc; len = 3: abc. \"ac\" bitişik olmadığı için bir *substring* değildir. Döngülerin rolleri yer değiştirseydi \"a ab abc b bc c\" çıkardı.",
          "fig": {
            "type": "code",
            "code": "String s = \"abc\";\nfor (int len = 1; len <= s.length(); len++) {\n    for (int i = 0; i + len <= s.length(); i++) {\n        System.out.print(s.substring(i, i + len) + \" \");\n    }\n}"
          }
        },
        {
          "t": "2.12",
          "q": "How many times is the statement count++ executed when the following code segment, in which the outer loop variable doubles, is run?",
          "o": [
            "6",
            "63",
            "64",
            "384"
          ],
          "a": 1,
          "w": "Dış döngü i = 1, 2, 4, 8, 16, 32 (6 tur); 64 < 64 *false*. İç döngü her turda i kez döner: 1 + 2 + 4 + 8 + 16 + 32 = 63. 6 dış tur sayısıdır; 384 = 6 × 64 iç döngünün hep 64 tur döndüğünü sanmaktır. İç sınır dış değişkene bağlıysa turları tek tek topla.",
          "fig": {
            "type": "code",
            "code": "int count = 0;\nfor (int i = 1; i < 64; i *= 2) {\n    for (int j = 0; j < i; j++) {\n        count++;\n    }\n}"
          }
        },
        {
          "t": "2.12",
          "q": "In both code segments shown, count is an int initialized to 0, and both segments end with the same value of count. When n is 100, how many times is the if condition evaluated in Segment I, and how many times is count++ executed in Segment II?",
          "o": [
            "10000 and 4950",
            "10000 and 5050",
            "4950 and 4950",
            "9900 and 4950"
          ],
          "a": 0,
          "w": "Segment I'de iç döngü her dış turda n kez döner: koşul 100 × 100 = 10000 kez denetlenir. Segment II'de i. turda iç döngü n - 1 - i kez döner: 99 + 98 + … + 0 = 100 × 99 / 2 = 4950. II gereksiz denetimleri atlayıp aynı sonuca yarıdan az işle ulaşır. 5050, j = i'den başlamakla (n(n + 1) / 2) karıştırmaktır.",
          "fig": {
            "type": "code",
            "code": "// Segment I\nfor (int i = 0; i < n; i++)\n    for (int j = 0; j < n; j++)\n        if (i < j) count++;\n// Segment II\nfor (int i = 0; i < n; i++)\n    for (int j = i + 1; j < n; j++)\n        count++;"
          }
        }
      ]
    }
  ]
};
