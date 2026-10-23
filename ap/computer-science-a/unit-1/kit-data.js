/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/cs1N/questions.json) */
window.KIT = {
  "store": "csa-u1:v1:",
  "course": "AP Computer Science A",
  "unitLabel": "Unit 1 — Using Objects and Methods",
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
    }
  ],
  "final": [],
  "defter": false
};
