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
    }
  ],
  "final": []
};
