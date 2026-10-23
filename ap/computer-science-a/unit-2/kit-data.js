/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/cs2N/questions.json) */
window.KIT = {
  "store": "csa-u2:v1:",
  "course": "AP Computer Science A",
  "unitLabel": "Unit 2 — Selection and Iteration",
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
    }
  ],
  "final": []
};
