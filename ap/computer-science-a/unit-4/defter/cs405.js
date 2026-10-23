/* Kitora not defteri · cs405 · 4.6 Metin Dosyalarından Okumak
   Kaynak: AP CSA 2025–26 CED (Unit 4) öğrenme hedefleri; videosuz defter. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  "slug": "cs405",
  "amac": "Bu konu, bir metin dosyasındaki veriyi Java programına File ve Scanner ile okumayı anlatıyor. Scanner'ı kurmayı, next, nextLine, nextInt, nextDouble ve hasNext metotlarını, satırı split ile parçalamayı ve dosya okurken karşılaşılan istisnaları öğreneceksin.",
  "bolumler": [
    {
      "baslik": "File ve Scanner: dosyayı açmak",
      "kisa": "File dosyanın adını taşır, Scanner o dosyayı parça parça okur.",
      "bloklar": [
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "📄",
              "terim": "File",
              "tr": "dosya",
              "tanim": "Diskteki bir dosyayı adıyla temsil eden sınıf. Yalnızca dosyayı tanımlar, içini okumaz.",
              "ornek": "new File(\"notlar.txt\")"
            },
            {
              "ikon": "🔦",
              "terim": "Scanner",
              "tr": "tarayıcı",
              "tanim": "Dosyadaki metni baştan sona, tek yönde okuyan sınıf. İçinde bir imleç vardır; her okumada ilerler, geri dönmez.",
              "ornek": "new Scanner(f) ile dosyaya bağlanırsın."
            },
            {
              "ikon": "🧩",
              "terim": "Token",
              "tr": "belirteç",
              "tanim": "Boşluk, sekme ya da satır sonuyla ayrılmış her parça. Scanner varsayılan olarak metni belirteçlere böler.",
              "ornek": "\"Ada 85\" satırında iki belirteç var: Ada ve 85."
            }
          ]
        },
        {
          "tip": "kod",
          "baslik": "Dosyayı açıp kapatmak",
          "kod": "import java.io.File;\nimport java.io.IOException;\nimport java.util.Scanner;\n\npublic static void main(String[] args) throws IOException\n{\n    File f = new File(\"notlar.txt\");\n    Scanner sc = new Scanner(f);\n    System.out.println(sc.hasNext());\n    sc.close();\n}",
          "vurgu": [
            5,
            8,
            10
          ],
          "not": "Dosya doluysa hasNext() true verir. Kullanım bitince close() ile dosyayı kapat."
        }
      ]
    },
    {
      "baslik": "Dosya bulunamazsa: istisnalar",
      "kisa": "Dosya açmak başarısız olabilir; derleyici bunu ele almanı zorunlu tutar.",
      "bloklar": [
        {
          "tip": "tablo",
          "baslik": "Dosya okurken karşılaşılan üç istisna",
          "head": [
            "İstisna",
            "Ne zaman?",
            "Ne zaman fark edilir?"
          ],
          "rows": [
            [
              "FileNotFoundException (IOException'ın alt türü)",
              "new Scanner(f) ile açılan dosya yok",
              "Derleme: ele alınmazsa kod derlenmez"
            ],
            [
              "InputMismatchException",
              "nextInt() sayı olmayan belirteçle karşılaşır (ör. \"abc\")",
              "Çalışırken"
            ],
            [
              "NoSuchElementException",
              "Okunacak belirteç kalmadığı hâlde next()/nextInt() çağrılır",
              "Çalışırken"
            ]
          ],
          "vurgu": 0
        },
        {
          "tip": "tuzak",
          "metin": "Dosya açan metodun başlığına throws IOException yazmak (ya da try-catch kullanmak) zorunludur; bu bir önlem değil, derleme koşuludur.",
          "yanlis": "throws yazmazsam, dosya yoksa program çalışırken hata verir.",
          "dogru": "Kod ==derlenmez==: \"unreported exception\" hatası. Metot başlığına ==throws IOException== ekle."
        }
      ]
    },
    {
      "baslik": "Okuma metotları ve imleç",
      "kisa": "next kelimeyi, nextLine satırın kalanını, nextInt ve nextDouble sayıyı okur.",
      "bloklar": [
        {
          "tip": "tablo",
          "baslik": "Scanner metotları",
          "head": [
            "Metot",
            "Ne yapar?",
            "Döndürür"
          ],
          "rows": [
            [
              "hasNext()",
              "Okunacak başka belirteç var mı?",
              "boolean"
            ],
            [
              "hasNextLine()",
              "Okunacak başka satır var mı?",
              "boolean"
            ],
            [
              "next()",
              "Sıradaki belirteci okur",
              "String"
            ],
            [
              "nextLine()",
              "Bulunduğu yerden satır sonuna kadar okur; satır sonu karakterini alır ama vermez",
              "String"
            ],
            [
              "nextInt()",
              "Sıradaki belirteci int olarak okur",
              "int"
            ],
            [
              "nextDouble()",
              "Sıradaki belirteci double olarak okur",
              "double"
            ],
            [
              "close()",
              "Dosyayı kapatır",
              "void"
            ]
          ],
          "vurgu": 3
        },
        {
          "tip": "kod",
          "baslik": "next ve nextLine farkı",
          "kod": "Scanner sc = new Scanner(new File(\"bilgi.txt\"));\nString w = sc.next();\nString rest = sc.nextLine();\nSystem.out.println(w + \"|\" + rest);",
          "vurgu": [
            2,
            3
          ],
          "cikti": "Ada| Er 85",
          "not": "bilgi.txt: ilk satır \"Ada Er 85\", ikinci satır \"Can Su 72\". next() yalnızca Ada'yı alır; nextLine() o satırın kalanını (başındaki boşlukla) verir."
        },
        {
          "tip": "kod",
          "baslik": "nextInt'ten sonra nextLine",
          "kod": "Scanner sc = new Scanner(new File(\"n.txt\"));\nint n = sc.nextInt();\nString a = sc.nextLine();\nString b = sc.nextLine();\nSystem.out.println(n + \" [\" + a + \"] [\" + b + \"]\");",
          "vurgu": [
            3
          ],
          "cikti": "5 [] [Ada]",
          "not": "n.txt: ilk satır \"5\", ikinci satır \"Ada\". nextInt() sayıyı alır ama satırın sonunu bırakır; ilk nextLine() o boş kalanı verir."
        },
        {
          "tip": "tuzak",
          "metin": "nextInt ve nextDouble belirteci okur, satırın sonuna geçmez. Ardından gelen nextLine, aynı satırın kalan (çoğu zaman boş) kısmını döndürür.",
          "yanlis": "nextInt()'ten hemen sonra nextLine() sonraki satırı verir.",
          "dogru": "İlk nextLine() ==boş String== verir; sonraki satıra geçmek için bir nextLine() daha gerekir."
        }
      ]
    },
    {
      "baslik": "Dosyayı baştan sona okumak",
      "kisa": "while ile hasNext doğru olduğu sürece okur; imleç dosya sonuna gelince durur.",
      "bloklar": [
        {
          "tip": "kod",
          "baslik": "Notların ortalaması (tam sayı)",
          "kod": "public static void main(String[] args) throws IOException\n{\n    Scanner sc = new Scanner(new File(\"notlar.txt\"));\n    int total = 0;\n    int count = 0;\n    while (sc.hasNext())\n    {\n        String name = sc.next();\n        int score = sc.nextInt();\n        total += score;\n        count++;\n    }\n    sc.close();\n    System.out.println(total / count);\n}",
          "vurgu": [
            6,
            8,
            9
          ],
          "cikti": "82",
          "not": "notlar.txt: Ada 85, Can 72, Ece 90 (her biri ayrı satır). total 247, count 3; 247 / 3 tam sayı bölmesiyle 82 olur."
        },
        {
          "tip": "grafik",
          "baslik": "Scanner imleci belirteçler üzerinde ilerler",
          "xlabel": "belirteç",
          "ylabel": "",
          "xmax": 7,
          "ymax": 5,
          "ogeler": [
            {
              "id": "tt",
              "tip": "yazi",
              "x": 0.5,
              "y": 4.6,
              "metin": "total = 0",
              "hiza": "start"
            },
            {
              "id": "c0",
              "tip": "alan",
              "renk": 0,
              "noktalar": [
                [
                  0.55,
                  2.6
                ],
                [
                  1.45,
                  2.6
                ],
                [
                  1.45,
                  4
                ],
                [
                  0.55,
                  4
                ]
              ]
            },
            {
              "id": "c1",
              "tip": "alan",
              "renk": 0,
              "noktalar": [
                [
                  1.55,
                  2.6
                ],
                [
                  2.45,
                  2.6
                ],
                [
                  2.45,
                  4
                ],
                [
                  1.55,
                  4
                ]
              ]
            },
            {
              "id": "c2",
              "tip": "alan",
              "renk": 0,
              "noktalar": [
                [
                  2.55,
                  2.6
                ],
                [
                  3.45,
                  2.6
                ],
                [
                  3.45,
                  4
                ],
                [
                  2.55,
                  4
                ]
              ]
            },
            {
              "id": "c3",
              "tip": "alan",
              "renk": 0,
              "noktalar": [
                [
                  3.55,
                  2.6
                ],
                [
                  4.45,
                  2.6
                ],
                [
                  4.45,
                  4
                ],
                [
                  3.55,
                  4
                ]
              ]
            },
            {
              "id": "c4",
              "tip": "alan",
              "renk": 0,
              "noktalar": [
                [
                  4.55,
                  2.6
                ],
                [
                  5.45,
                  2.6
                ],
                [
                  5.45,
                  4
                ],
                [
                  4.55,
                  4
                ]
              ]
            },
            {
              "id": "c5",
              "tip": "alan",
              "renk": 0,
              "noktalar": [
                [
                  5.55,
                  2.6
                ],
                [
                  6.45,
                  2.6
                ],
                [
                  6.45,
                  4
                ],
                [
                  5.55,
                  4
                ]
              ]
            },
            {
              "id": "v0",
              "tip": "yazi",
              "x": 1,
              "y": 3.15,
              "metin": "Ada"
            },
            {
              "id": "i0",
              "tip": "yazi",
              "x": 1,
              "y": 2,
              "metin": "[0]"
            },
            {
              "id": "v1",
              "tip": "yazi",
              "x": 2,
              "y": 3.15,
              "metin": "85"
            },
            {
              "id": "i1",
              "tip": "yazi",
              "x": 2,
              "y": 2,
              "metin": "[1]"
            },
            {
              "id": "v2",
              "tip": "yazi",
              "x": 3,
              "y": 3.15,
              "metin": "Can"
            },
            {
              "id": "i2",
              "tip": "yazi",
              "x": 3,
              "y": 2,
              "metin": "[2]"
            },
            {
              "id": "v3",
              "tip": "yazi",
              "x": 4,
              "y": 3.15,
              "metin": "72"
            },
            {
              "id": "i3",
              "tip": "yazi",
              "x": 4,
              "y": 2,
              "metin": "[3]"
            },
            {
              "id": "v4",
              "tip": "yazi",
              "x": 5,
              "y": 3.15,
              "metin": "Ece"
            },
            {
              "id": "i4",
              "tip": "yazi",
              "x": 5,
              "y": 2,
              "metin": "[4]"
            },
            {
              "id": "v5",
              "tip": "yazi",
              "x": 6,
              "y": 3.15,
              "metin": "90"
            },
            {
              "id": "i5",
              "tip": "yazi",
              "x": 6,
              "y": 2,
              "metin": "[5]"
            },
            {
              "id": "h",
              "tip": "alan",
              "renk": 2,
              "noktalar": [
                [
                  0.5,
                  2.5
                ],
                [
                  1.5,
                  2.5
                ],
                [
                  1.5,
                  4.1
                ],
                [
                  0.5,
                  4.1
                ]
              ]
            }
          ],
          "durumlar": [
            {
              "metin": "Dosya belirteçlere bölünür. İmleç ilk belirteçte (Ada). total = 0."
            },
            {
              "metin": "sc.next() → \"Ada\" okundu, imleç 85'e geçti.",
              "set": {
                "h": {
                  "noktalar": [
                    [
                      1.5,
                      2.5
                    ],
                    [
                      2.5,
                      2.5
                    ],
                    [
                      2.5,
                      4.1
                    ],
                    [
                      1.5,
                      4.1
                    ]
                  ]
                }
              }
            },
            {
              "metin": "sc.nextInt() → 85. total = 85. İmleç Can'da.",
              "set": {
                "tt": {
                  "metin": "total = 85"
                },
                "h": {
                  "noktalar": [
                    [
                      2.5,
                      2.5
                    ],
                    [
                      3.5,
                      2.5
                    ],
                    [
                      3.5,
                      4.1
                    ],
                    [
                      2.5,
                      4.1
                    ]
                  ]
                }
              }
            },
            {
              "metin": "İkinci tur: Can ve 72 okundu, total = 157. İmleç Ece'de.",
              "set": {
                "tt": {
                  "metin": "total = 157"
                },
                "h": {
                  "noktalar": [
                    [
                      4.5,
                      2.5
                    ],
                    [
                      5.5,
                      2.5
                    ],
                    [
                      5.5,
                      4.1
                    ],
                    [
                      4.5,
                      4.1
                    ]
                  ]
                }
              }
            },
            {
              "metin": "Üçüncü tur: Ece ve 90 okundu, total = 247. İmleç sonda: hasNext() false, döngü biter.",
              "set": {
                "tt": {
                  "metin": "total = 247"
                }
              },
              "gizle": [
                "h"
              ]
            }
          ]
        }
      ]
    },
    {
      "baslik": "Satır satır okumak ve split",
      "kisa": "nextLine bir satırı alır, split onu virgül gibi ayraçlardan parçalar.",
      "bloklar": [
        {
          "tip": "kod",
          "baslik": "Virgülle ayrılmış kayıtlar",
          "kod": "Scanner sc = new Scanner(new File(\"ogr.txt\"));\nint best = 0;\nString who = \"\";\nwhile (sc.hasNextLine())\n{\n    String line = sc.nextLine();\n    String[] p = line.split(\",\");\n    int s = Integer.parseInt(p[1]);\n    if (s > best)\n    {\n        best = s;\n        who = p[0];\n    }\n}\nSystem.out.println(who + \" \" + best);",
          "vurgu": [
            6,
            7,
            8
          ],
          "cikti": "Ece 90",
          "not": "ogr.txt: \"Ada,85\", \"Can,72\", \"Ece,90\". split(\",\") satırı diziye böler: p[0] isim, p[1] not yazısı. Integer.parseInt ile yazı int olur."
        },
        {
          "tip": "tablo",
          "baslik": "Bir satır split ile nasıl bölünür?",
          "head": [
            "Satır",
            "Çağrı",
            "Sonuç dizisi"
          ],
          "rows": [
            [
              "Ada,85",
              "line.split(\",\")",
              "{\"Ada\", \"85\"}"
            ],
            [
              "Can Su 72",
              "line.split(\" \")",
              "{\"Can\", \"Su\", \"72\"}"
            ]
          ],
          "not": "Dizinin her elemanı bir String'dir; sayı gerekiyorsa Integer.parseInt ya da Double.parseDouble (sonraki defter) kullan."
        }
      ]
    },
    {
      "baslik": "Sınavda ne beklenir?",
      "kisa": "Dosyayı kurmayı, döngüyle okumayı ve okunan değerleri izlemeyi bil.",
      "bloklar": [
        {
          "tip": "tablo",
          "head": [
            "",
            "Bu konuda"
          ],
          "rows": [
            [
              "✍️ Yazarsın",
              "new Scanner(new File(...)) ile açmak, while (sc.hasNext()) ya da hasNextLine() ile okumak, next/nextInt/nextDouble/nextLine, split, close."
            ],
            [
              "👀 Okursun",
              "Dosya içeriği ve kod verilince hangi değerlerin okunduğunu izlemek; throws IOException; nextInt'ten sonra nextLine'ın boş gelmesi."
            ],
            [
              "🚫 Bu konunun dışı",
              "Dosyaya yazma, yol (path) ayrıntıları, binary dosyalar."
            ]
          ]
        }
      ]
    },
    {
      "baslik": "Toparlayalım",
      "kisa": "Sınavdan önce bu listeye bir kez bak.",
      "bloklar": [
        {
          "tip": "ozet",
          "maddeler": [
            "File dosyayı adlandırır, Scanner onu okur: new Scanner(new File(\"ad.txt\")).",
            "Dosya açan metodun başlığına throws IOException yazılır; yazılmazsa kod derlenmez.",
            "Scanner dosyayı tek yönde, belirteç belirteç okur; geri dönmez.",
            "hasNext() ve hasNextLine() okunacak veri var mı diye sorar; while ile döngü kurulur.",
            "next() bir belirteç, nextLine() satırın kalanı, nextInt() ve nextDouble() sayı okur.",
            "nextInt()'ten sonra gelen nextLine() aynı satırın kalanını, yani çoğu zaman boş String'i döndürür.",
            "Satırı parçalamak için split(ayraç) kullanılır; parçalar String'dir.",
            "Okuma bitince close() ile dosya kapatılır."
          ]
        }
      ]
    }
  ],
  "sorular": [
    {
      "q": "main metodu throws IOException ile tanımlıdır. Dosya \"nums.txt\" iki satırdan oluşur. Kod çalışınca ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "// nums.txt:   4 7\n//               9 2\nScanner sc = new Scanner(new File(\"nums.txt\"));\nint sum = 0;\nwhile (sc.hasNext())\n{\n    sum += sc.nextInt();\n}\nSystem.out.println(sum);"
      },
      "opts": [
        "13",
        "4",
        "22",
        "NoSuchElementException"
      ],
      "a": 2,
      "why": "hasNext() dosya bitene kadar true verir; nextInt() sırayla 4, 7, 9, 2'yi okur. Satır sonları belirteç ayracıdır. Toplam 22. \"13\" yalnızca ilk sütunu (4 + 9) toplamaktır."
    },
    {
      "q": "main metodu throws IOException ile tanımlıdır. Kod çalışınca ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "// info.txt:   Ada Er 85\n//               Can Su 72\nScanner sc = new Scanner(new File(\"info.txt\"));\nString a = sc.next();\nString b = sc.nextLine();\nString c = sc.next();\nSystem.out.println(a + \"|\" + b + \"|\" + c);"
      },
      "opts": [
        "Ada| Er 85|Can",
        "Ada|Er 85|Can",
        "Ada| Er 85| Can Su 72",
        "Ada|Ada Er 85|Can"
      ],
      "a": 0,
      "why": "next() \"Ada\" alır. nextLine() aynı satırın kalanını başındaki boşlukla verir: \" Er 85\". Sonra imleç ikinci satıra geçmiştir, next() \"Can\" okur. \"Er 85\" diyen, nextLine'ın boşluğu atladığını sanmıştır."
    },
    {
      "q": "main metodu throws IOException ile tanımlıdır. Kod çalışınca ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "// d.txt:   3\n//            pizza\nScanner sc = new Scanner(new File(\"d.txt\"));\nint n = sc.nextInt();\nString s = sc.nextLine();\nSystem.out.println(\"n=\" + n + \" s=[\" + s + \"]\");"
      },
      "opts": [
        "n=3 s=[pizza]",
        "n=3 s=[ ]",
        "NoSuchElementException",
        "n=3 s=[]"
      ],
      "a": 3,
      "why": "nextInt() \"3\"ü okur ama ilk satırın sonunu bırakır; nextLine() o satırın kalanını, yani boş String'i döndürür. pizza henüz okunmadı. \"s=[pizza]\" diyen, nextLine'ın bir sonraki satıra geçtiğini sanmıştır."
    },
    {
      "q": "Aşağıdaki metot için hangisi doğrudur?",
      "fig": {
        "type": "code",
        "code": "public static void main(String[] args)\n{\n    Scanner sc = new Scanner(new File(\"a.txt\"));\n    System.out.println(sc.nextLine());\n}"
      },
      "opts": [
        "Derlenir; dosya yoksa çalışırken hata verir.",
        "Derlenmez; başlığa throws IOException eklenmeli ya da try-catch kullanılmalı.",
        "Derlenir ve dosya yoksa program sessizce biter.",
        "Derlenmez, çünkü File sınıfı java.util paketinde değildir."
      ],
      "a": 1,
      "why": "new Scanner(File) kontrol edilen (checked) bir istisna olan FileNotFoundException fırlatabilir; ele alınmadığı için derleyici kodu reddeder. \"Derlenir\" diyen, bunu çalışma anı hatası sanmıştır."
    },
    {
      "q": "ogr.txt: \"Ada,85\", \"Can,72\", \"Ece,90\" (her biri ayrı satır). main metodu throws IOException ile tanımlıdır. Kod çalışınca ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "Scanner sc = new Scanner(new File(\"ogr.txt\"));\nint total = 0;\nwhile (sc.hasNextLine())\n{\n    String[] p = sc.nextLine().split(\",\");\n    total += Integer.parseInt(p[1]);\n}\nSystem.out.println(total);"
      },
      "opts": [
        "85",
        "3",
        "Çalışma hatası: p[1] bir sayı değil",
        "247"
      ],
      "a": 3,
      "why": "Her satır split ile {isim, not} olur; p[1] \"85\", \"72\", \"90\" yazılarıdır ve parseInt bunları int yapar: 85 + 72 + 90 = 247. \"85\" yalnızca ilk satırı okuyanın cevabıdır."
    }
  ]
};
