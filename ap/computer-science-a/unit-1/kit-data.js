/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/cs1N/questions.json) */
window.KIT = {
  "store": "csa-u1:v1:",
  "course": "AP Computer Science A",
  "unitLabel": "Unit 1 — Using Objects and Methods",
  "denemeler": {
    "url": "deneme/",
    "count": 5
  },
  "episodes": [
    {
      "no": 1,
      "code": "1.1",
      "slug": "cs101",
      "title": "İlk Program: Algoritma, Derleyici, Hatalar",
      "en": "Algorithms, Programming, and Compilers",
      "accent": "#F6B94A",
      "seconds": 273,
      "terms": [
        "Algorithm",
        "Sequencing",
        "Compiler",
        "Syntax error",
        "Logic error",
        "Run-time error",
        "Exception",
        "String literal",
        "Escape sequence",
        "Comment"
      ],
      "questions": [
        {
          "q": "Aşağıdaki kod çalışınca konsolda ne görünür? (Şıklarda / işareti yeni satır demektir.)",
          "opts": [
            "Kara / deniz / ! / Son",
            "Karadeniz! / Son",
            "Karadeniz!Son",
            "Kara deniz ! Son"
          ],
          "a": 1,
          "why": "print alt satıra geçmez: Kara, deniz ve ! boşluksuz yan yana yazılır. println(\"!\") satırı bitirir, Son yeni satırda başlar.",
          "fig": {
            "type": "code",
            "code": "System.out.print(\"Kara\");\nSystem.out.print(\"deniz\");\nSystem.out.println(\"!\");\nSystem.out.print(\"Son\");"
          }
        },
        {
          "q": "Aşağıdaki satır konsola ne yazar?",
          "opts": [
            "Ali \\ Veli",
            "Ali \\\\ Veli",
            "Ali Veli",
            "Hiçbir şey; kod derlenmez"
          ],
          "a": 0,
          "why": "Tırnak içindeki iki ters eğik çizgi bir *escape sequence*'tir ve tek bir ters eğik çizgi basar.",
          "fig": {
            "type": "code",
            "code": "System.out.println(\"Ali \\\\ Veli\");"
          }
        },
        {
          "q": "Bir öğrenci aşağıdaki satırın sonuna noktalı virgül koymayı unutuyor. Ne olur?",
          "opts": [
            "*Compiler* hata verir, program hiç çalışmaz",
            "Program çalışır ve Gol yazar",
            "Program çalışır ama hiçbir şey yazmaz",
            "Program çalışırken *exception* fırlatır"
          ],
          "a": 0,
          "why": "Noktalı virgül eksikliği bir *syntax error*'dür. Derleyici kodu çevirmez; program hiç başlamaz, konsola hiçbir şey çıkmaz.",
          "fig": {
            "type": "code",
            "code": "System.out.println(\"Gol\")"
          }
        },
        {
          "q": "Bir program 30 ve 50 liralık iki ürünün ortalama fiyatını aşağıdaki satırla yazdırıyor ve 55 basıyor. Bu hangi tür hatadır?",
          "opts": [
            "*Syntax error*",
            "*Run-time error*",
            "*Logic error*",
            "Hata yok; ortalama gerçekten 55"
          ],
          "a": 2,
          "why": "Program derlenir ve çalışır ama yanlış sonuç verir: önce 50 / 2 = 25 hesaplanır, sonra 30 + 25 = 55. Doğrusu (30 + 50) / 2 = 40. Çalışan ama yanlış sonuç veren kod *logic error*'dür.",
          "fig": {
            "type": "code",
            "code": "System.out.println(30 + 50 / 2);"
          }
        },
        {
          "q": "Aşağıdaki kod konsola ne yazar? (Şıklarda / işareti yeni satır demektir.)",
          "opts": [
            "BirİkiÜçDört",
            "İki / Dört",
            "Bir / İkiDört",
            "İkiDört"
          ],
          "a": 3,
          "why": "İki eğik çizgiden sonra satırın geri kalanı *comment*'tir ve derleyici onu yok sayar. Geriye print(\"İki\") ve println(\"Dört\") kalır: İkiDört.",
          "fig": {
            "type": "code",
            "code": "// System.out.println(\"Bir\");\nSystem.out.print(\"İki\"); // System.out.print(\"Üç\");\nSystem.out.println(\"Dört\");"
          }
        }
      ]
    },
    {
      "no": 2,
      "code": "1.2",
      "slug": "cs102",
      "title": "Değişkenler ve İlkel Tipler",
      "en": "Variables and Primitive Types",
      "accent": "#2FD6B9",
      "seconds": 261,
      "terms": [
        "Variable",
        "Data type",
        "Primitive type",
        "int",
        "double",
        "boolean",
        "Declaration",
        "Initialization",
        "Assignment",
        "final",
        "camelCase"
      ],
      "questions": [
        {
          "q": "Aşağıdaki satırlardan hangisi derleme hatası (*compile-time error*) verir?",
          "opts": [
            "double avg = 5;",
            "boolean ok = true;",
            "int count = 2.0;",
            "int n = 2 + 3;"
          ],
          "a": 2,
          "why": "2.0 bir *double* değerdir; *int* kutusuna otomatik giremez. Tersi serbesttir: double avg = 5; geçerlidir ve avg 5.0 olur."
        },
        {
          "q": "Aşağıdaki kod çalışınca ne yazdırılır?",
          "opts": [
            "2 5",
            "5 2",
            "7 5",
            "2 2"
          ],
          "a": 0,
          "why": "İzleme tablosu: p = 5 + 2 = 7; q = 7 − 2 = 5; p = 7 − 5 = 2. Sonuç 2 5: iki değer yer değiştirdi.",
          "fig": {
            "type": "code",
            "code": "int p = 5;\nint q = 2;\np = p + q;\nq = p - q;\np = p - q;\nSystem.out.println(p + \" \" + q);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "4",
            "4.0",
            "Derleme hatası",
            "d"
          ],
          "a": 1,
          "why": "*int* değer 4, *double* kutusuna otomatik olarak 4.0 diye girer; *double* yazdırılınca ondalık kısmıyla görünür.",
          "fig": {
            "type": "code",
            "code": "double d = 4;\nSystem.out.println(d);"
          }
        },
        {
          "q": "Aşağıdakilerden hangisi geçerli bir değişken adıdır?",
          "opts": [
            "2ndScore",
            "total score",
            "class",
            "totalScore"
          ],
          "a": 3,
          "why": "İsim harfle başlamalı, boşluk içermemeli ve *int*, *class* gibi anahtar sözcük olmamalı. totalScore hem geçerli hem de *camelCase* geleneğine uygun."
        },
        {
          "q": "Aşağıdaki kod için hangisi doğrudur?",
          "opts": [
            "6 yazdırılır",
            "Kod derlenmez",
            "5 yazdırılır",
            "Çalışırken *exception* fırlatılır"
          ],
          "a": 1,
          "why": "*final* bir değişkene ilk atamadan sonra yeni değer verilemez. LIMIT = 6; satırı derleyici tarafından reddedilir; program hiç çalışmaz.",
          "fig": {
            "type": "code",
            "code": "final int LIMIT = 5;\nLIMIT = 6;\nSystem.out.println(LIMIT);"
          }
        }
      ]
    },
    {
      "no": 3,
      "code": "1.3",
      "slug": "cs103",
      "title": "İfadeler: Tam Sayı Bölmesi ve Mod",
      "en": "Expressions, Integer Division, and Modulo",
      "accent": "#58C9FF",
      "seconds": 287,
      "terms": [
        "Expression",
        "Operator precedence",
        "Integer division",
        "Modulo",
        "Remainder",
        "Truncation",
        "ArithmeticException",
        "int",
        "double"
      ],
      "questions": [
        {
          "q": "Aşağıdaki satır ne yazdırır?",
          "opts": [
            "3.4",
            "3",
            "4",
            "2"
          ],
          "a": 1,
          "why": "İki *int* bölünürse sonuç *int* olur: 17 / 5 = 3,4 değil, ondalık kısım kesilir ve 3 kalır. Yuvarlanmaz, o yüzden 4 de değil.",
          "fig": {
            "type": "code",
            "code": "System.out.println(17 / 5);"
          }
        },
        {
          "q": "Aşağıdaki satır ne yazdırır?",
          "opts": [
            "3",
            "3.83",
            "5",
            "1"
          ],
          "a": 2,
          "why": "23 = 6 · 3 + 5. Mod operatörü kalanı verir: 5. Bölümün kendisi (3) değil.",
          "fig": {
            "type": "code",
            "code": "System.out.println(23 % 6);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "7.5",
            "7",
            "8.0",
            "7.0"
          ],
          "a": 3,
          "why": "Sağ taraf önce kendi başına hesaplanır: 15 / 2, iki *int*, sonuç 7. Ancak sonra *double* değişkene girer ve 7.0 olur. Değişkenin *double* olması *integer division*'ı engellemez.",
          "fig": {
            "type": "code",
            "code": "double avg = (7 + 8) / 2;\nSystem.out.println(avg);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "3 sa 20 dk",
            "3.33 sa 20 dk",
            "3 sa 2 dk",
            "20 sa 3 dk"
          ],
          "a": 0,
          "why": "200 / 60 = 3 (kalan atılır) ve 200 % 60 = 20. Bölü ve mod birlikte dakikayı saat ve dakikaya ayırır.",
          "fig": {
            "type": "code",
            "code": "int t = 200;\nSystem.out.println(t / 60 + \" sa \" + t % 60 + \" dk\");"
          }
        },
        {
          "q": "Aşağıdaki satır ne yazdırır?",
          "opts": [
            "4.5",
            "5",
            "5.5",
            "4"
          ],
          "a": 1,
          "why": "Önce bölme: 9 / 2 = 4 (*integer division*). Sonra soldan sağa: 2 + 4 − 1 = 5.",
          "fig": {
            "type": "code",
            "code": "System.out.println(2 + 9 / 2 - 1);"
          }
        }
      ]
    },
    {
      "no": 4,
      "code": "1.5",
      "slug": "cs104",
      "title": "Casting, Yuvarlama ve Taşma",
      "en": "Casting and Range of Variables",
      "accent": "#FF6F61",
      "seconds": 284,
      "terms": [
        "Casting",
        "Widening",
        "Truncation",
        "Rounding",
        "Integer.MAX_VALUE",
        "Integer.MIN_VALUE",
        "Integer overflow",
        "Round-off error",
        "Java Quick Reference"
      ],
      "questions": [
        {
          "q": "Aşağıdaki satır ne yazdırır?",
          "opts": [
            "7",
            "6.99",
            "6",
            "6.0"
          ],
          "a": 2,
          "why": "(int) *cast* ondalık kısmı keser, yuvarlamaz: 6.99 → 6. Sonuç *int* olduğu için 6.0 da yazılmaz.",
          "fig": {
            "type": "code",
            "code": "System.out.println((int) 6.99);"
          }
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "3.5",
            "3.0",
            "3",
            "4.0"
          ],
          "a": 1,
          "why": "Önce parantez içi: a / b iki *int*, sonuç 3. *cast* bundan sonra uygulanır: (double) 3 → 3.0. 3.5 için (double) a / b yazılmalıydı.",
          "fig": {
            "type": "code",
            "code": "int a = 7;\nint b = 2;\nSystem.out.println((double) (a / b));"
          }
        },
        {
          "q": "x negatif bir *double* (ör. −3.7). Hangi ifade x'i en yakın tam sayıya yuvarlar?",
          "opts": [
            "(int) (x - 0.5)",
            "(int) (x + 0.5)",
            "(int) x",
            "(int) x - 0.5"
          ],
          "a": 0,
          "why": "Negatif sayıda 0.5 çıkarılıp kesilir: −3.7 − 0.5 = −4.2 → −4. (int) (x + 0.5) = (int) (−3.2) = −3 verirdi; (int) x de −3. Son şık *int* eksi *double* olduğundan *double* sonuç verir."
        },
        {
          "q": "Aşağıdaki kod çalıştıktan sonra big değişkeninin değeri nedir?",
          "opts": [
            "Integer.MAX_VALUE + 1'e eşit, daha büyük bir sayı",
            "0",
            "Çalışırken ArithmeticException fırlatılır",
            "Integer.MIN_VALUE"
          ],
          "a": 3,
          "why": "*int* sınırı aşılınca hata oluşmaz; değer öbür uca sarar ve en küçük *int* olur. Buna *integer overflow* denir.",
          "fig": {
            "type": "code",
            "code": "int big = Integer.MAX_VALUE;\nbig = big + 1;"
          }
        },
        {
          "q": "Aşağıdaki değişkenler tanımlı. Hangi ifade 4.25 değerini verir?",
          "opts": [
            "(double) (sum / n)",
            "(double) sum / n",
            "sum / n",
            "(int) (sum / (double) n)"
          ],
          "a": 1,
          "why": "(double) sum önce 17.0 olur, sonra 17.0 / 4 = 4.25. (double) (sum / n) = 4.0; sum / n = 4; son şık 4.25'i hesaplar ama (int) ile 4'e keser.",
          "fig": {
            "type": "code",
            "code": "int sum = 17;\nint n = 4;"
          }
        }
      ]
    }
  ],
  "final": []
};
