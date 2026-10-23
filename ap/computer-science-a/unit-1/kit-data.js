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
