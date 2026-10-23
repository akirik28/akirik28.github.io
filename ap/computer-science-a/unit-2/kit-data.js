/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/cs2N/questions.json) */
window.KIT = {
  "store": "csa-u2:v1:",
  "course": "AP Computer Science A",
  "unitLabel": "Unit 2 — Selection and Iteration",
  "denemeler": {
    "url": "deneme/",
    "count": 5
  },
  "episodes": [
    {
      "no": 1,
      "code": "2.1–2.2",
      "slug": "cs201",
      "title": "Seçim, Tekrar ve Boolean İfadeler",
      "en": "Selection, Repetition, and Boolean Expressions",
      "accent": "#3FB5A0",
      "defter": "cs201",
      "seconds": 297,
      "terms": [
        "Sequencing",
        "Selection",
        "Iteration",
        "boolean",
        "Boolean expression",
        "Relational operator",
        "== vs =",
        "Round-off error"
      ],
      "questions": [
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "false",
            "2",
            "true",
            "Kod derlenmez."
          ],
          "a": 2,
          "why": "14 % 4 = 2 (14 = 3 · 4 + 2). 2 == 2 doğru, ifade *true* olur ve *println* kelime olarak true yazar.",
          "fig": {
            "type": "code",
            "code": "int n = 14;\nSystem.out.println(n % 4 == 2);"
          }
        },
        {
          "q": "Pozitif bir int n tam olarak 3'e bölünebildiğinde true olan ifade hangisi?",
          "opts": [
            "n / 3 == 0",
            "n % 3 == 1",
            "n / 3 == 1",
            "n % 3 == 0"
          ],
          "a": 3,
          "why": "Tam bölünme, kalanın 0 olması demektir: n % 3 == 0. n / 3 bölümü verir; n / 3 == 0 yalnız n < 3 iken doğrudur."
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "true",
            "false",
            "8",
            "Kod derlenmez."
          ],
          "a": 0,
          "why": "Önce aritmetik: 5 + 3 = 8. Sonra karşılaştırma: 8 >= 8 doğru, yani *true*.",
          "fig": {
            "type": "code",
            "code": "int a = 5;\nint b = 8;\nSystem.out.println(a + 3 >= b);"
          }
        },
        {
          "q": "x bir int değişkendir. Aşağıdaki satırlardan hangisi derlenmez?",
          "opts": [
            "boolean ok = 3 < 5;",
            "boolean ok = 1 < x < 9;",
            "boolean ok = x != 4;",
            "boolean ok = x % 2 == 0;"
          ],
          "a": 1,
          "why": "1 < x önce bir *boolean* verir; ardından true < 9 gibi bir *boolean* ile sayı karşılaştırılamaz. Doğrusu x > 1 && x < 9 (2.5)."
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "true",
            "0.3",
            "false",
            "0.30000000000000004"
          ],
          "a": 2,
          "why": "0.1 + 0.2 aslında 0.30000000000000004 olarak saklanır (*round-off*). 0.3 ile tam eşit olmadığı için == *false* verir."
        }
      ]
    },
    {
      "no": 2,
      "code": "2.3–2.4",
      "slug": "cs202",
      "title": "if ve İç İçe if",
      "en": "if Statements and Nested if Statements",
      "accent": "#FF8A65",
      "defter": "cs202",
      "seconds": 277,
      "terms": [
        "if statement",
        "if-else",
        "else if",
        "Nested if",
        "Dangling else",
        "One-way selection",
        "Multiway selection"
      ],
      "questions": [
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "5",
            "16",
            "10",
            "8"
          ],
          "a": 2,
          "why": "İki ayrı *if* var. 8 > 5 → x = 5. Sonra ikinci *if* yeni değere bakar: 5 > 4 → x = 10.",
          "fig": {
            "type": "code",
            "code": "int x = 8;\nif (x > 5) {\n  x -= 3;\n}\nif (x > 4) {\n  x *= 2;\n}\nSystem.out.println(x);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "A",
            "B",
            "C",
            "F"
          ],
          "a": 2,
          "why": "Zincirde ilk *true* kazanır. 90 >= 50 hemen doğru olduğu için C atanır; daha dar koşullara hiç bakılmaz. Doğru sıra en dar koşulla (>= 85) başlamalıydı.",
          "fig": {
            "type": "code",
            "code": "int p = 90;\nString s;\nif (p >= 50) s = \"C\";\nelse if (p >= 70) s = \"B\";\nelse if (p >= 85) s = \"A\";\nelse s = \"F\";\nSystem.out.println(s);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "X",
            "XY",
            "Hiçbir şey yazdırmaz.",
            "Y"
          ],
          "a": 3,
          "why": "*Dangling else*: *else* en yakın *if*'e, yani a > 5'e bağlanır. a > 1 doğru, a > 5 yanlış, bu yüzden *else* kolu çalışır: Y.",
          "fig": {
            "type": "code",
            "code": "int a = 3;\nif (a > 1)\n  if (a > 5)\n    System.out.print(\"X\");\nelse\n  System.out.print(\"Y\");"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "0 0",
            "1 1",
            "1 0",
            "0 1"
          ],
          "a": 3,
          "why": "Süslü parantez olmadığı için *if* yalnız a++ satırını kapsar. k > 0 yanlış, a artmaz; b++ ise *if*'in dışında, her durumda çalışır.",
          "fig": {
            "type": "code",
            "code": "int a = 0;\nint b = 0;\nint k = -2;\nif (k > 0)\n  a++;\n  b++;\nSystem.out.println(a + \" \" + b);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "15",
            "5",
            "0",
            "5 ve ardından 0"
          ],
          "a": 1,
          "why": "Dış koşul 120 > 100 doğru, içteki soruya geçilir. member *false* olduğu için içteki *else* çalışır: 5. Dıştaki *else* atlanır.",
          "fig": {
            "type": "code",
            "code": "boolean member = false;\nint total = 120;\nif (total > 100) {\n  if (member) { System.out.println(15); }\n  else { System.out.println(5); }\n} else {\n  System.out.println(0);\n}"
          }
        }
      ]
    },
    {
      "no": 3,
      "code": "2.5",
      "slug": "cs203",
      "title": "Bileşik Boolean İfadeler ve Kısa Devre",
      "en": "Compound Boolean Expressions and Short-Circuit Evaluation",
      "accent": "#B77AD9",
      "defter": "cs203",
      "defterBaslik": "Bileşik Boolean İfadeler ve De Morgan",
      "seconds": 280,
      "terms": [
        "Logical operator",
        "&& (and)",
        "|| (or)",
        "! (not)",
        "Compound Boolean expression",
        "Truth table",
        "Short-circuit evaluation"
      ],
      "questions": [
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "false",
            "true",
            "7",
            "Kod derlenmez."
          ],
          "a": 1,
          "why": "&& önce bağlanır: (x > 5 && x % 2 == 0) → true && false → false. Sonra false || x == 7 → false || true → *true*.",
          "fig": {
            "type": "code",
            "code": "int x = 7;\nSystem.out.println(x > 5 && x % 2 == 0 || x == 7);"
          }
        },
        {
          "q": "n bir int değişkendir. n tam olarak 10 ile 20 arasında olduğunda (10 ve 20 dahil) true olan ifade hangisi?",
          "opts": [
            "n >= 10 || n <= 20",
            "10 <= n <= 20",
            "n >= 10 && n <= 20",
            "n > 10 && n < 20"
          ],
          "a": 2,
          "why": "Aralığın içi için iki koşul da sağlanmalı: *and*. || ile yazılan ifade her sayı için doğrudur; 10 <= n <= 20 derlenmez; > ve < sınırları dışarıda bırakır."
        },
        {
          "q": "d bir int değişkendir ve değeri 0'dır. Aşağıdaki ifadelerden hangisinin hesaplanması ArithmeticException fırlatır?",
          "opts": [
            "d != 0 && 5 / d > 1",
            "d == 0 || 5 / d > 1",
            "5 / d > 1 && d != 0",
            "d > 0 && 5 / d > 1"
          ],
          "a": 2,
          "why": "Kısa devre yalnız sol taraf sonucu belirlediğinde sağı atlar. Üçüncü ifadede bölme solda olduğu için önce o yapılır ve 5 / 0 hata verir. Diğerlerinde sol taraf sonucu belirler, bölme hiç yapılmaz."
        },
        {
          "q": "Aşağıdaki kod iki satır yazdırır. Satırlar sırasıyla nedir?",
          "opts": [
            "true true",
            "false false",
            "false true",
            "true false"
          ],
          "a": 3,
          "why": "İlk satırda && önce: q && r = false; p || false = *true*. İkinci satırda parantez önce: p || q = true; true && r = *false*.",
          "fig": {
            "type": "code",
            "code": "boolean p = true;\nboolean q = false;\nboolean r = false;\nSystem.out.println(p || q && r);\nSystem.out.println((p || q) && r);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "Açık",
            "Kapalı",
            "AçıkKapalı",
            "Kod derlenmez."
          ],
          "a": 1,
          "why": "!weekend true, h >= 9 true, ama h < 17 → 17 < 17 *false*. && zincirinde bir *false* yeter: Kapalı. Sınır değeri dahil değil.",
          "fig": {
            "type": "code",
            "code": "boolean weekend = false;\nint h = 17;\nif (!weekend && h >= 9 && h < 17)\n  System.out.println(\"Açık\");\nelse\n  System.out.println(\"Kapalı\");"
          }
        }
      ]
    },
    {
      "no": 4,
      "code": "2.6",
      "slug": "cs204",
      "title": "De Morgan, Eşdeğer İfadeler ve equals",
      "en": "Equivalent Boolean Expressions and Comparing Objects",
      "accent": "#5C8DFF",
      "defter": "cs203",
      "defterBaslik": "Bileşik Boolean İfadeler ve De Morgan",
      "seconds": 279,
      "terms": [
        "Equivalent Boolean expressions",
        "De Morgan's laws",
        "Truth table",
        "Counterexample",
        "Reference equality (==)",
        "equals",
        "Alias",
        "null",
        "NullPointerException"
      ],
      "questions": [
        {
          "q": "a ve b boolean değişkenlerdir. Aşağıdaki ifadeye eşdeğer olan hangisi?",
          "opts": [
            "!a || b",
            "a && !b",
            "!a && b",
            "!a && !b"
          ],
          "a": 2,
          "why": "De Morgan: !(a || !b) → !a && !(!b). Çift değil kendini götürür: !a && b. Dört satırın hepsinde aynı değeri verir.",
          "fig": {
            "type": "code",
            "code": "!(a || !b)"
          }
        },
        {
          "q": "n bir int değişkendir. Aşağıdaki ifadeye eşdeğer olan hangisi?",
          "opts": [
            "n % 2 != 0 && n <= 10",
            "n % 2 != 0 || n <= 10",
            "n % 2 != 0 || n < 10",
            "n % 2 == 0 || n <= 10"
          ],
          "a": 1,
          "why": "Ünlem içeri girer: && → ||; n % 2 == 0 → n % 2 != 0; n > 10 → n <= 10. n < 10 yazan şık n = 10'da, == bırakan şık n = 12'de yanlış sonuç verir.",
          "fig": {
            "type": "code",
            "code": "!(n % 2 == 0 && n > 10)"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "true true true",
            "false true false",
            "false true true",
            "true true false"
          ],
          "a": 2,
          "why": "s1 ve s2 *new* ile oluşturulmuş iki ayrı nesne: == *false*. İçerikleri aynı: *equals* *true*. s3 = s1 bir *alias*; ikisi aynı nesneyi gösterir: == *true*.",
          "fig": {
            "type": "code",
            "code": "String s1 = new String(\"kitap\");\nString s2 = new String(\"kitap\");\nString s3 = s1;\nSystem.out.println((s1 == s2) + \" \" + s1.equals(s2) + \" \" + (s1 == s3));"
          }
        },
        {
          "q": "name adlı String değişken null olabilir. Aşağıdaki koşullardan hangisi name null olsa bile hiçbir zaman NullPointerException fırlatmaz?",
          "opts": [
            "name.equals(\"Ali\") && name != null",
            "name.length() > 0 || name == null",
            "name != null && name.equals(\"Ali\")",
            "name.equals(null)"
          ],
          "a": 2,
          "why": "Kalkan solda olmalı: name null ise name != null *false* olur ve kısa devre *equals* çağrısını atlar. Diğer üçünde metot null bir referans üzerinde önce çağrılır."
        },
        {
          "q": "p ve q boolean değişkenlerdir. Aşağıdakilerden hangisi !(p && q) ifadesine eşdeğerdir?",
          "opts": [
            "Yalnız I",
            "Yalnız II",
            "I ve II",
            "Hiçbiri"
          ],
          "a": 1,
          "why": "De Morgan: !(p && q) ≡ !p || !q, yani II. I için karşı örnek p = true, q = false: !(p && q) *true*, ama !p && !q *false*.",
          "fig": {
            "type": "code",
            "code": "I.  !p && !q\nII. !p || !q"
          }
        }
      ]
    },
    {
      "no": 5,
      "code": "2.7",
      "slug": "cs205",
      "title": "while Döngüsü",
      "en": "while Loops",
      "accent": "#E86A92",
      "defter": "cs204",
      "seconds": 274,
      "terms": [
        "while loop",
        "Iteration",
        "Loop condition",
        "Infinite loop",
        "Off-by-one error",
        "Trace table"
      ],
      "questions": [
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "26",
            "10",
            "15",
            "25"
          ],
          "a": 2,
          "why": "i = 2, 5, 8 iken gövde çalışır: 2 + 5 + 8 = 15. i 11 olunca 11 <= 10 *false*, döngü biter. 26 diyen 11'i de eklemiş.",
          "fig": {
            "type": "code",
            "code": "int i = 2;\nint sum = 0;\nwhile (i <= 10) {\n  sum += i;\n  i += 3;\n}\nSystem.out.println(sum);"
          }
        },
        {
          "q": "Aşağıdaki kod Hi kelimesini kaç kez yazdırır?",
          "opts": [
            "3",
            "5",
            "Sonsuz kez",
            "4"
          ],
          "a": 3,
          "why": "c = 10, 7, 4, 1 iken koşul doğru: 4 tur. Sonra c = −2 olur, −2 > 0 *false*.",
          "fig": {
            "type": "code",
            "code": "int c = 10;\nwhile (c > 0) {\n  System.out.print(\"Hi\");\n  c -= 3;\n}"
          }
        },
        {
          "q": "Aşağıdaki üç döngüden hangileri sonsuz döngüdür?",
          "opts": [
            "Yalnız I",
            "Yalnız III",
            "I ve III",
            "I, II ve III"
          ],
          "a": 2,
          "why": "I: a hep çift (0, 2, 4…), 7'ye asla eşit olmaz. III: c hiç değişmez. II: b = 20, 10, 5, 2, 1, 0; *int* bölmesiyle 0'a iner ve döngü biter.",
          "fig": {
            "type": "code",
            "code": "int a = 0;  // I\nwhile (a != 7) { a += 2; }\nint b = 20;  // II\nwhile (b > 0) { b /= 2; }\nint c = 5;  // III\nwhile (c < 10) { System.out.print(c); }"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "0123",
            "01234",
            "1234",
            "123"
          ],
          "a": 2,
          "why": "Gövdede önce i++ sonra yazdırma var. i 0 iken artırılıp 1 yazılır; ... i 3 iken 4 yazılır. i 4 olunca 4 < 4 *false*.",
          "fig": {
            "type": "code",
            "code": "int i = 0;\nwhile (i < 4) {\n  i++;\n  System.out.print(i);\n}"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "5 3",
            "10 3",
            "1 6",
            "5 4"
          ],
          "a": 3,
          "why": "80, 40, 20, 10 çift: dört kez yarıya bölünür ve count 4 olur. n = 5'te 5 % 2 == 0 *false*, döngü durur.",
          "fig": {
            "type": "code",
            "code": "int n = 80;\nint count = 0;\nwhile (n % 2 == 0) {\n  n /= 2;\n  count++;\n}\nSystem.out.println(n + \" \" + count);"
          }
        }
      ]
    },
    {
      "no": 6,
      "code": "2.8",
      "slug": "cs206",
      "title": "for Döngüsü",
      "en": "for Loops",
      "accent": "#5BC0EB",
      "defter": "cs205",
      "seconds": 277,
      "terms": [
        "for loop",
        "Initialization",
        "Loop condition",
        "Update",
        "Loop control variable",
        "Scope",
        "Accumulator",
        "Off-by-one error"
      ],
      "questions": [
        {
          "q": "Aşağıdaki döngünün gövdesi kaç kez çalışır?",
          "opts": [
            "5",
            "16",
            "4",
            "20"
          ],
          "a": 2,
          "why": "i = 4, 8, 12, 16 değerlerini alır. i 20 olunca 20 < 20 *false*. Dört tur.",
          "fig": {
            "type": "code",
            "code": "for (int i = 4; i < 20; i += 4) {\n  System.out.println(i);\n}"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "10 6 2",
            "10 6 2 -2",
            "6 2",
            "10 6"
          ],
          "a": 0,
          "why": "j = 10, 6, 2 iken j > 0 doğru. Sonra j = −2 olur ve döngü biter; −2 hiç yazdırılmaz.",
          "fig": {
            "type": "code",
            "code": "for (int j = 10; j > 0; j -= 4) {\n  System.out.print(j + \" \");\n}"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "AyAyAy",
            "Hiçbir şey yazdırmaz.",
            "Kod derlenmez.",
            "Ay"
          ],
          "a": 3,
          "why": "Başlıktan sonraki noktalı virgül boş bir gövdedir: döngü üç kez boşuna döner. Süslü parantezli blok döngünün parçası değildir, bir kez çalışır.",
          "fig": {
            "type": "code",
            "code": "for (int i = 0; i < 3; i++);\n{\n  System.out.print(\"Ay\");\n}"
          }
        },
        {
          "q": "Gövdesi System.out.print(i) olan döngülerden hangisi 1'den 10'a kadar (ikisi de dahil) bütün tam sayıları yazdırır?",
          "opts": [
            "for (int i = 1; i < 10; i++)",
            "for (int i = 0; i <= 10; i++)",
            "for (int i = 1; i <= 10; i++)",
            "for (int i = 0; i < 10; i++)"
          ],
          "a": 2,
          "why": "İlk değer 1, son değer 10 olmalı: i = 1 ve i <= 10. i < 10 yazanlar 10'u, 0'dan başlayanlar fazladan 0'ı yazar."
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "16",
            "10",
            "64",
            "32"
          ],
          "a": 3,
          "why": "Beş tur, her turda p ikiye katlanır: 2, 4, 8, 16, 32.",
          "fig": {
            "type": "code",
            "code": "int p = 1;\nfor (int i = 1; i <= 5; i++) {\n  p *= 2;\n}\nSystem.out.println(p);"
          }
        }
      ]
    },
    {
      "no": 7,
      "code": "2.9-1",
      "slug": "cs207",
      "title": "Toplam, Ortalama, Sayma, En Büyük ve En Küçük",
      "en": "Loop Algorithms: Sum, Average, Count, Max, and Min",
      "accent": "#9BC53D",
      "defter": "cs206",
      "sessiz": true,
      "seconds": 302,
      "terms": [
        "Accumulator",
        "Counter",
        "Average",
        "Running maximum",
        "Running minimum",
        "Integer.MAX_VALUE",
        "Local variable",
        "Casting"
      ],
      "questions": [
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "2.5",
            "2",
            "10.0",
            "2.0"
          ],
          "a": 3,
          "why": "sum = 1 + 2 + 3 + 4 = 10. sum / 4 iki *int*: 2. Sonra *double* değişkene atanır: 2.0. Doğrusu (double) sum / 4.",
          "fig": {
            "type": "code",
            "code": "int sum = 0;\nfor (int k = 1; k <= 4; k++) {\n  sum += k;\n}\ndouble avg = sum / 4;\nSystem.out.println(avg);"
          }
        },
        {
          "q": "getTemp(1), getTemp(2) ve getTemp(3) sırasıyla −4, −9 ve −2 döndürür. Aşağıdaki kod ne yazdırır?",
          "opts": [
            "-2",
            "-4",
            "-9",
            "0"
          ],
          "a": 3,
          "why": "max 0 ile başlıyor ve hiçbir sıcaklık 0'dan büyük değil; max hiç güncellenmez. Doğru başlangıç: int max = getTemp(1); o zaman −2 çıkardı.",
          "fig": {
            "type": "code",
            "code": "int max = 0;\nfor (int d = 1; d <= 3; d++) {\n  if (getTemp(d) > max) {\n    max = getTemp(d);\n  }\n}\nSystem.out.println(max);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "8",
            "5",
            "7",
            "3"
          ],
          "a": 2,
          "why": "4'ün katları: 4, 8, 12, 16, 20 (5 tane). 6'nın katları: 6, 12, 18 (3 tane). 12 ikisinde de var ama *or* onu bir kez sayar: 5 + 3 − 1 = 7.",
          "fig": {
            "type": "code",
            "code": "int c = 0;\nfor (int n = 1; n <= 20; n++) {\n  if (n % 4 == 0 || n % 6 == 0) {\n    c++;\n  }\n}\nSystem.out.println(c);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "60",
            "30",
            "0",
            "10"
          ],
          "a": 1,
          "why": "sum = 0 satırı döngünün içinde: her tur toplam sıfırlanır. Son turda sum = 0 + 3 · 10 = 30.",
          "fig": {
            "type": "code",
            "code": "int sum = 0;\nfor (int i = 1; i <= 3; i++) {\n  sum = 0;\n  sum += i * 10;\n}\nSystem.out.println(sum);"
          }
        },
        {
          "q": "getPrice(1) ile getPrice(4) sırasıyla 40, 25, 30 ve 25 döndürür. Aşağıdaki kod ne yazdırır?",
          "opts": [
            "2",
            "25",
            "1",
            "4"
          ],
          "a": 3,
          "why": "<= kullanıldığı için eşit fiyat da güncelleme yapar. Gün 2: 25 <= 40 → best 2. Gün 3: 30 değil. Gün 4: 25 <= 25 → best 4. < olsaydı 2 çıkardı.",
          "fig": {
            "type": "code",
            "code": "int best = 1;\nint low = getPrice(1);\nfor (int d = 2; d <= 4; d++) {\n  int p = getPrice(d);\n  if (p <= low) { low = p; best = d; }\n}\nSystem.out.println(best);"
          }
        }
      ]
    },
    {
      "no": 8,
      "code": "2.9-2",
      "slug": "cs208",
      "title": "Basamaklar ve Bölünebilme",
      "en": "Loop Algorithms: Digits and Divisibility",
      "accent": "#2FD6B9",
      "defter": "cs206",
      "sessiz": true,
      "seconds": 287,
      "terms": [
        "Divisible",
        "Digit",
        "Modulo (%)",
        "Integer division",
        "Divisor",
        "Palindrome number"
      ],
      "questions": [
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "0",
            "28",
            "8",
            "52"
          ],
          "a": 2,
          "why": "Soldan sağa: 5280 % 100 = 80 (son iki basamak), 80 / 10 = 8. Bu ifade onlar basamağını verir.",
          "fig": {
            "type": "code",
            "code": "int x = 5280;\nSystem.out.println(x % 100 / 10);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "6",
            "4",
            "5",
            "3"
          ],
          "a": 1,
          "why": "18'in bölenleri 1, 2, 3, 6, 9, 18. Döngü 2'den başlayıp 18'den önce bittiği için 1 ve 18 sayılmaz: 2, 3, 6, 9 → 4.",
          "fig": {
            "type": "code",
            "code": "int c = 0;\nfor (int d = 2; d < 18; d++) {\n  if (18 % d == 0) {\n    c++;\n  }\n}\nSystem.out.println(c);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "065",
            "560",
            "65",
            "56"
          ],
          "a": 2,
          "why": "rev: 0 · 10 + 0 = 0, sonra 0 · 10 + 6 = 6, sonra 6 · 10 + 5 = 65. Bir int baştaki sıfırı tutmaz; 065 yazdırılamaz.",
          "fig": {
            "type": "code",
            "code": "int n = 560;\nint rev = 0;\nwhile (n > 0) {\n  rev = rev * 10 + n % 10;\n  n /= 10;\n}\nSystem.out.println(rev);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "1",
            "Sonsuz döngüye girer.",
            "0",
            "Kod derlenmez."
          ],
          "a": 2,
          "why": "n 0 olduğu için 0 > 0 baştan *false*: döngü hiç dönmez ve count 0 kalır. 0 bir basamaklı olsa da bu kod onu yanlış sayar.",
          "fig": {
            "type": "code",
            "code": "int n = 0;\nint count = 0;\nwhile (n > 0) {\n  n /= 10;\n  count++;\n}\nSystem.out.println(count);"
          }
        },
        {
          "q": "n pozitif bir int değişkendir. n'nin onlar basamağı 3 olduğunda true olan ifade hangisi?",
          "opts": [
            "n % 10 == 3",
            "n / 10 == 3",
            "n % 100 == 3",
            "n / 10 % 10 == 3"
          ],
          "a": 3,
          "why": "n / 10 birler basamağını atar; % 10 kalanın son basamağını, yani asıl sayının onlar basamağını verir. 1234 için 123 % 10 = 3. n / 10 == 3 yalnız 30–39 için doğrudur."
        }
      ]
    },
    {
      "no": 9,
      "code": "2.10",
      "slug": "cs209",
      "title": "String Algoritmaları",
      "en": "Implementing String Algorithms",
      "accent": "#F25F5C",
      "defter": "cs207",
      "sessiz": true,
      "seconds": 310,
      "terms": [
        "Traverse",
        "substring",
        "length",
        "indexOf",
        "equals",
        "Immutable",
        "Palindrome",
        "StringIndexOutOfBoundsException"
      ],
      "questions": [
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "okul",
            "kulo",
            "luko",
            "l"
          ],
          "a": 2,
          "why": "Her harf r'nin önüne eklenir: o → ko → uko → luko. Önüne eklemek kelimeyi ters çevirir.",
          "fig": {
            "type": "code",
            "code": "String s = \"okul\";\nString r = \"\";\nfor (int i = 0; i < s.length(); i++) {\n  r = s.substring(i, i + 1) + r;\n}\nSystem.out.println(r);"
          }
        },
        {
          "q": "Aşağıdaki kod çalıştırılınca ne olur?",
          "opts": [
            "abc yazdırır ve normal biter.",
            "ab yazdırır ve normal biter.",
            "abc yazdırır, sonra StringIndexOutOfBoundsException fırlatır.",
            "Kod derlenmez."
          ],
          "a": 2,
          "why": "i = 0, 1, 2 için a, b, c yazdırılır. <= yüzünden i = 3 turu da çalışır; substring(3, 4) üç harfli bir String'in sınırı dışındadır ve istisna fırlatılır.",
          "fig": {
            "type": "code",
            "code": "String s = \"abc\";\nfor (int i = 0; i <= s.length(); i++) {\n  System.out.print(s.substring(i, i + 1));\n}"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "3",
            "4",
            "5",
            "10"
          ],
          "a": 1,
          "why": "bilgisayar: b-i-l-g-i-s-a-y-a-r. Sesli harfler i, i, a, a. vowels.indexOf bu dört harf için 0 ya da daha büyük, diğerleri için −1 döndürür.",
          "fig": {
            "type": "code",
            "code": "String w = \"bilgisayar\";\nString vowels = \"aeıioöuü\";\nint count = 0;\nfor (int i = 0; i < w.length(); i++) {\n  String ch = w.substring(i, i + 1);\n  if (vowels.indexOf(ch) >= 0) count++;\n}\nSystem.out.println(count);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "2",
            "5",
            "3",
            "6"
          ],
          "a": 2,
          "why": "İki harflik parçalar: ne, en, ne, en, ne. ne üç kez geçer (index 0, 2, 4). Son başlangıç length − 2 = 4.",
          "fig": {
            "type": "code",
            "code": "String s = \"nenene\";\nint c = 0;\nfor (int i = 0; i <= s.length() - 2; i++) {\n  if (s.substring(i, i + 2).equals(\"ne\")) c++;\n}\nSystem.out.println(c);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "ersler",
            "ers",
            "ler",
            "dersler"
          ],
          "a": 3,
          "why": "*String* değişmezdir (*immutable*). s.substring(1) yeni bir String üretir ama atanmadığı için kaybolur; s hâlâ ders. Sonra s += \"ler\" ile dersler olur.",
          "fig": {
            "type": "code",
            "code": "String s = \"ders\";\ns.substring(1);\ns += \"ler\";\nSystem.out.println(s);"
          }
        }
      ]
    },
    {
      "no": 10,
      "code": "2.11",
      "slug": "cs210",
      "title": "İç İçe Döngüler",
      "en": "Nested Iteration",
      "accent": "#F6B94A",
      "defter": "cs208",
      "sessiz": true,
      "seconds": 292,
      "terms": [
        "Nested loop",
        "Outer loop",
        "Inner loop",
        "Inner loop bound",
        "Trace table"
      ],
      "questions": [
        {
          "q": "Aşağıdaki kod X harfini kaç kez yazdırır?",
          "opts": [
            "8",
            "15",
            "12",
            "24"
          ],
          "a": 1,
          "why": "Dış döngü 5 tur, her dış turda iç döngü 3 tur: 5 · 3 = 15.",
          "fig": {
            "type": "code",
            "code": "for (int i = 0; i < 5; i++) {\n  for (int j = 0; j < 3; j++) {\n    System.out.print(\"X\");\n  }\n}"
          }
        },
        {
          "q": "Aşağıdaki kod üç satır yazdırır. Üçüncü satır nedir?",
          "opts": [
            "333",
            "3",
            "123",
            "321"
          ],
          "a": 2,
          "why": "i = 3 iken iç döngü j = 1, 2, 3 değerlerini yazdırır: 123. Yazdırılan j'dir, i değil.",
          "fig": {
            "type": "code",
            "code": "for (int i = 1; i <= 3; i++) {\n  for (int j = 1; j <= i; j++) {\n    System.out.print(j);\n  }\n  System.out.println();\n}"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "16",
            "10",
            "4",
            "6"
          ],
          "a": 3,
          "why": "i = 1: j < 1, 0 tur. i = 2: 1 tur. i = 3: 2 tur. i = 4: 3 tur. Toplam 0 + 1 + 2 + 3 = 6.",
          "fig": {
            "type": "code",
            "code": "int count = 0;\nfor (int i = 1; i <= 4; i++) {\n  for (int j = 1; j < i; j++) {\n    count++;\n  }\n}\nSystem.out.println(count);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "2",
            "4",
            "8",
            "6"
          ],
          "a": 0,
          "why": "j = i + 1 olduğu için her çift bir kez ve harf kendisiyle hiç karşılaştırılmaz. Eşit çiftler: (0, 3) a–a ve (1, 2) b–b. j = 0 olsaydı 8 çıkardı.",
          "fig": {
            "type": "code",
            "code": "String s = \"abba\";\nint c = 0;\nfor (int i = 0; i < s.length(); i++) {\n  for (int j = i + 1; j < s.length(); j++) {\n    if (s.substring(i, i + 1).equals(s.substring(j, j + 1))) c++;\n  }\n}\nSystem.out.println(c);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "10",
            "20",
            "30",
            "16"
          ],
          "a": 1,
          "why": "rowSum her dış turda sıfırlanır: satır toplamları 1, 1 + 2 = 3, 6 ve 10. total = 1 + 3 + 6 + 10 = 20.",
          "fig": {
            "type": "code",
            "code": "int total = 0;\nfor (int r = 1; r <= 4; r++) {\n  int rowSum = 0;\n  for (int c = 1; c <= r; c++) { rowSum += c; }\n  total += rowSum;\n}\nSystem.out.println(total);"
          }
        }
      ]
    },
    {
      "no": 11,
      "code": "2.12",
      "slug": "cs211",
      "title": "Çalışma Zamanını Kabaca Ölçmek",
      "en": "Informal Run-Time Analysis",
      "accent": "#7C95FF",
      "defter": "cs209",
      "sessiz": true,
      "seconds": 306,
      "terms": [
        "Informal run-time analysis",
        "Statement execution count",
        "Iteration count",
        "Nested loop",
        "Algorithm efficiency"
      ],
      "questions": [
        {
          "q": "Aşağıdaki kodda x++ satırı kaç kez çalışır?",
          "opts": [
            "9",
            "30",
            "27",
            "10"
          ],
          "a": 3,
          "why": "k = 3, 6, 9, …, 30: 30 / 3 = 10 değer. <= olduğu için 30 da dahil.",
          "fig": {
            "type": "code",
            "code": "int x = 0;\nfor (int k = 3; k <= 30; k += 3) {\n  x++;\n}"
          }
        },
        {
          "q": "a ve b daha önce tanımlanmış int değişkenlerdir. Aşağıdaki kodda A ile işaretli satır ve B ile işaretli satır sırasıyla kaç kez çalışır?",
          "opts": [
            "4 ve 20",
            "4 ve 9",
            "5 ve 20",
            "20 ve 20"
          ],
          "a": 0,
          "why": "A dış döngüde ama iç döngünün dışında: 4 kez. B iç döngüde: her dış turda 5 kez, 4 · 5 = 20.",
          "fig": {
            "type": "code",
            "code": "for (int i = 0; i < 4; i++) {\n  a++;            // A\n  for (int j = 0; j < 5; j++) {\n    b++;          // B\n  }\n}"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "32",
            "7",
            "64",
            "6"
          ],
          "a": 3,
          "why": "64 → 32 → 16 → 8 → 4 → 2 → 1: altı kez yarıya bölünür. n 1 olunca 1 > 1 *false*.",
          "fig": {
            "type": "code",
            "code": "int n = 64;\nint steps = 0;\nwhile (n > 1) {\n  n /= 2;\n  steps++;\n}\nSystem.out.println(steps);"
          }
        },
        {
          "q": "Aşağıdaki kodda count++ satırı kaç kez çalışır?",
          "opts": [
            "15",
            "10",
            "25",
            "20"
          ],
          "a": 1,
          "why": "j, i + 1'den başlar: i = 0 için 4, i = 1 için 3, i = 2 için 2, i = 3 için 1, i = 4 için 0 tur. 4 + 3 + 2 + 1 = 10.",
          "fig": {
            "type": "code",
            "code": "int count = 0;\nfor (int i = 0; i < 5; i++) {\n  for (int j = i + 1; j < 5; j++) {\n    count++;\n  }\n}"
          }
        },
        {
          "q": "n 1000 iken, I'deki sum += i satırı ve II'deki sum2 ataması sırasıyla kaç kez çalışır? İkisi de aynı toplamı hesaplar.",
          "opts": [
            "1000 ve 1",
            "1000 ve 1000",
            "1 ve 1000",
            "500 ve 1"
          ],
          "a": 0,
          "why": "I'deki sum += i döngünün gövdesinde: n = 1000 kez. II'deki formül n ne olursa olsun bir kez çalışır. Sonuç aynı (500500), iş çok farklı.",
          "fig": {
            "type": "code",
            "code": "// I\nint sum = 0;\nfor (int i = 1; i <= n; i++) { sum += i; }\n// II\nint sum2 = n * (n + 1) / 2;"
          }
        }
      ]
    }
  ],
  "final": []
};
