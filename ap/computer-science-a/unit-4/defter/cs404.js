/* Kitora not defteri · cs404 · 4.5 Dizi Algoritmaları
   Kaynak: AP CSA 2025–26 CED (Unit 4) öğrenme hedefleri; videosuz defter. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  "slug": "cs404",
  "amac": "Bu konu, dizilerde sınavda tekrar tekrar çıkan standart algoritmaları anlatıyor: toplam, ortalama, sayma, en büyük ve en küçük değer, var mı ve hepsi mi kontrolü, komşu çiftler, yinelenenler, mod, kaydırma, döndürme ve ters çevirme. Her birinin kalıbını ve tuzağını öğreneceksin.",
  "bolumler": [
    {
      "baslik": "Toplam, ortalama ve sayma",
      "kisa": "Döngü dışında bir toplam ya da sayaç tanımla, döngüde güncelle.",
      "bloklar": [
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "🧮",
              "terim": "Accumulator",
              "tr": "birikimli değişken",
              "tanim": "Döngü boyunca güncellenen toplam, sayaç ya da en iyi değer gibi değişken. Döngüden önce başlangıç değeri verilir.",
              "ornek": "int sum = 0; her turda sum += x;"
            },
            {
              "ikon": "🚩",
              "terim": "Flag",
              "tr": "bayrak değişkeni",
              "tanim": "Bir şeyin olup olmadığını tutan boolean değişken. Aşağıdaki \"var mı, hepsi mi\" kalıplarında kullanılır.",
              "ornek": "boolean found = false;"
            }
          ]
        },
        {
          "tip": "kod",
          "baslik": "Toplam, sayaç ve ortalama",
          "kod": "int[] a = {7, 4, 9, 2};\nint sum = 0;\nint big = 0;\nfor (int x : a)\n{\n    sum += x;\n    if (x >= 5)\n    {\n        big++;\n    }\n}\ndouble avg = (double) sum / a.length;\nSystem.out.println(sum + \" \" + big + \" \" + avg);",
          "vurgu": [
            6,
            9,
            12
          ],
          "cikti": "22 2 5.5",
          "not": "sum: 7, 11, 20, 22. big: yalnızca 7 ve 9 beş ve üstü, yani 2. avg: 22 bölü 4 = 5.5."
        },
        {
          "tip": "tuzak",
          "metin": "Bölmenin türü, atanacak değişkene değil işleme giren sayılara bakar.",
          "yanlis": "double avg = sum / a.length; ifadesi 5.5 verir.",
          "dogru": "sum ve a.length ikisi de int olduğu için bölme önce ==tam sayı bölmesi== olur: 5, sonra 5.0 yazılır. Ortalama için ==(double) sum / a.length== yaz."
        }
      ]
    },
    {
      "baslik": "En büyük ve en küçük değer",
      "kisa": "En iyiyi ilk elemanla başlat; daha iyisini görünce güncelle.",
      "bloklar": [
        {
          "tip": "grafik",
          "baslik": "En büyüğü ara: max her turda güncellenir",
          "xlabel": "indeks",
          "ylabel": "",
          "xmax": 6,
          "ymax": 5,
          "ogeler": [
            {
              "id": "mx",
              "tip": "yazi",
              "x": 0.5,
              "y": 4.6,
              "metin": "max = 4",
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
              "id": "v0",
              "tip": "yazi",
              "x": 1,
              "y": 3.15,
              "metin": "4"
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
              "metin": "9"
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
              "metin": "3"
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
              "metin": "12"
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
              "metin": "7"
            },
            {
              "id": "i4",
              "tip": "yazi",
              "x": 5,
              "y": 2,
              "metin": "[4]"
            },
            {
              "id": "h",
              "tip": "alan",
              "renk": 2,
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
              ],
              "gizli": true
            }
          ],
          "durumlar": [
            {
              "metin": "int max = a[0]; ilk eleman şimdilik en büyük: max = 4. Döngü i = 1'den başlar."
            },
            {
              "metin": "i = 1: 9 > 4, daha büyük. max = 9.",
              "goster": [
                "h"
              ],
              "set": {
                "mx": {
                  "metin": "max = 9"
                }
              }
            },
            {
              "metin": "i = 2: 3 > 9 değil. max 9 kalır.",
              "set": {
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
              "metin": "i = 3: 12 > 9, max = 12.",
              "set": {
                "mx": {
                  "metin": "max = 12"
                },
                "h": {
                  "noktalar": [
                    [
                      3.5,
                      2.5
                    ],
                    [
                      4.5,
                      2.5
                    ],
                    [
                      4.5,
                      4.1
                    ],
                    [
                      3.5,
                      4.1
                    ]
                  ]
                }
              }
            },
            {
              "metin": "i = 4: 7 > 12 değil. max 12 kalır.",
              "set": {
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
              "metin": "Döngü bitti. En büyük değer 12.",
              "gizle": [
                "h"
              ]
            }
          ]
        },
        {
          "tip": "kod",
          "baslik": "En büyüğü bulma kalıbı",
          "kod": "int[] a = {4, 9, 3, 12, 7};\nint max = a[0];\nfor (int i = 1; i < a.length; i++)\n{\n    if (a[i] > max)\n    {\n        max = a[i];\n    }\n}\nSystem.out.println(max);",
          "vurgu": [
            2,
            5
          ],
          "cikti": "12",
          "not": "En küçük için tek değişiklik: a[i] < min."
        },
        {
          "tip": "tuzak",
          "metin": "Başlangıç değeri verideki bir elemandan ya da en uç sınırdan (Integer.MIN_VALUE) olmalı.",
          "yanlis": "int max = 0; her dizide işe yarar.",
          "dogru": "Elemanların hepsi negatifse (ör. {-5, -2, -9}) max 0 kalır ve dizide olmayan bir değer çıkar. ==max = a[0]== kullan."
        }
      ]
    },
    {
      "baslik": "Var mı? Hepsi mi?",
      "kisa": "Bayrak değişkeni başlangıçta bir değer alır, döngüde yalnızca tek yöne döner.",
      "bloklar": [
        {
          "tip": "tablo",
          "baslik": "İki bayrak kalıbı",
          "head": [
            "Soru",
            "Bayrak başlar",
            "Döngüde ne olur?",
            "Sonuç"
          ],
          "rows": [
            [
              "En az bir eleman şartı sağlıyor mu?",
              "false",
              "Şartı sağlayan görünce true yap",
              "true ise var"
            ],
            [
              "Bütün elemanlar şartı sağlıyor mu?",
              "true",
              "Şartı bozan görünce false yap",
              "true ise hepsi"
            ]
          ]
        },
        {
          "tip": "kod",
          "baslik": "Biri 10'dan büyük mü? Hepsi çift mi?",
          "kod": "int[] a = {3, 8, 12, 5};\nboolean anyBig = false;\nboolean allEven = true;\nfor (int x : a)\n{\n    if (x > 10)\n    {\n        anyBig = true;\n    }\n    if (x % 2 != 0)\n    {\n        allEven = false;\n    }\n}\nSystem.out.println(anyBig + \" \" + allEven);",
          "vurgu": [
            8,
            12
          ],
          "cikti": "true false",
          "not": "12 > 10 olduğu için anyBig true olur. 3 tek olduğu için allEven false olur."
        },
        {
          "tip": "tuzak",
          "metin": "Bayrağı döngü içinde hem true hem false yaparsan yalnızca son eleman sonucu belirler.",
          "yanlis": "if (x > 10) found = true; else found = false;  yazarsam yine \"var mı\" sonucunu bulurum.",
          "dogru": "Son eleman 10'dan büyük değilse found, ==önceki bulguyu silerek== false olur. Bayrak tek yönde değişmeli; else yazma."
        }
      ]
    },
    {
      "baslik": "Komşu çiftler ve yinelenenler",
      "kisa": "Çift için i ve i + 1; dizide her yerde tekrar için iç içe iki döngü.",
      "bloklar": [
        {
          "tip": "kod",
          "baslik": "Yan yana eşit çift sayısı",
          "kod": "int[] a = {2, 5, 5, 8, 8, 1};\nint pairs = 0;\nfor (int i = 0; i < a.length - 1; i++)\n{\n    if (a[i] == a[i + 1])\n    {\n        pairs++;\n    }\n}\nSystem.out.println(pairs);",
          "vurgu": [
            3,
            5
          ],
          "cikti": "2",
          "not": "Koşul length - 1: a[i + 1] son turda bile geçerli kalır. Eşit çiftler (5, 5) ve (8, 8)."
        },
        {
          "tip": "kod",
          "baslik": "Dizide tekrar eden eleman var mı?",
          "kod": "int[] b = {4, 9, 2, 9, 7};\nboolean dup = false;\nfor (int i = 0; i < b.length; i++)\n{\n    for (int j = i + 1; j < b.length; j++)\n    {\n        if (b[i] == b[j])\n        {\n            dup = true;\n        }\n    }\n}\nSystem.out.println(dup);",
          "vurgu": [
            5
          ],
          "cikti": "true",
          "not": "j = i + 1 ile her çift bir kez karşılaştırılır. i = 1 ve j = 3'te 9 ile 9 eşleşir."
        },
        {
          "tip": "tuzak",
          "metin": "İç döngüyü yanlış yerden başlatırsan eleman kendisiyle karşılaştırılır.",
          "yanlis": "int j = 0 ya da int j = i ile başlatabilirim.",
          "dogru": "b[i] ile b[i] her zaman eşittir: bu kodla ==her dizide dup true== çıkar. İç döngü ==i + 1== ten başlar."
        }
      ]
    },
    {
      "baslik": "Mod: en sık geçen değer",
      "kisa": "Her elemanın kaç kez geçtiğini say, en çok geçeni tut.",
      "bloklar": [
        {
          "tip": "kod",
          "baslik": "Mod ve kaç kez geçtiği",
          "kod": "int[] c = {3, 1, 3, 2, 1, 3};\nint mode = c[0];\nint best = 0;\nfor (int i = 0; i < c.length; i++)\n{\n    int cnt = 0;\n    for (int j = 0; j < c.length; j++)\n    {\n        if (c[j] == c[i])\n        {\n            cnt++;\n        }\n    }\n    if (cnt > best)\n    {\n        best = cnt;\n        mode = c[i];\n    }\n}\nSystem.out.println(mode + \" \" + best);",
          "vurgu": [
            6,
            14
          ],
          "cikti": "3 3",
          "not": "İç döngü c[i]'nin kaç kez geçtiğini sayar. Daha büyük sayıya ulaşılınca best ve mode güncellenir."
        },
        {
          "tip": "tablo",
          "baslik": "i değiştikçe cnt ve best",
          "head": [
            "i",
            "c[i]",
            "cnt",
            "best",
            "mode"
          ],
          "rows": [
            [
              "0",
              "3",
              "3",
              "3",
              "3"
            ],
            [
              "1",
              "1",
              "2",
              "3",
              "3"
            ],
            [
              "2",
              "3",
              "3",
              "3",
              "3"
            ],
            [
              "3",
              "2",
              "1",
              "3",
              "3"
            ],
            [
              "4",
              "1",
              "2",
              "3",
              "3"
            ],
            [
              "5",
              "3",
              "3",
              "3",
              "3"
            ]
          ],
          "vurgu": 0,
          "not": "cnt > best koşulunda eşit olunca güncellenmez; eşitlikte ilk görülen kazanır."
        }
      ]
    },
    {
      "baslik": "Kaydırma ve döndürme",
      "kisa": "Taşan elemanı sakla, kutuları teker teker kaydır, sonra saklananı yaz.",
      "bloklar": [
        {
          "tip": "grafik",
          "baslik": "Sola döndürme: baştaki eleman sona gider",
          "xlabel": "indeks",
          "ylabel": "",
          "xmax": 6,
          "ymax": 5,
          "ogeler": [
            {
              "id": "tp",
              "tip": "yazi",
              "x": 0.5,
              "y": 4.6,
              "metin": "temp = 1",
              "hiza": "start",
              "gizli": true
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
              "id": "v0",
              "tip": "yazi",
              "x": 1,
              "y": 3.15,
              "metin": "1"
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
              "metin": "2"
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
              "metin": "3"
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
              "metin": "4"
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
              "metin": "5"
            },
            {
              "id": "i4",
              "tip": "yazi",
              "x": 5,
              "y": 2,
              "metin": "[4]"
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
              ],
              "gizli": true
            }
          ],
          "durumlar": [
            {
              "metin": "a = {1, 2, 3, 4, 5}. Hedef: {2, 3, 4, 5, 1}."
            },
            {
              "metin": "int temp = a[0]; taşacak eleman önce saklanır.",
              "goster": [
                "tp"
              ]
            },
            {
              "metin": "i = 0: a[0] = a[1]; 1'in üstüne 2 yazılır.",
              "goster": [
                "h"
              ],
              "set": {
                "v0": {
                  "metin": "2"
                }
              }
            },
            {
              "metin": "i = 1: a[1] = a[2].",
              "set": {
                "v1": {
                  "metin": "3"
                },
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
              "metin": "i = 2: a[2] = a[3].",
              "set": {
                "v2": {
                  "metin": "4"
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
              "metin": "i = 3: a[3] = a[4]. Döngü burada biter (i < length - 1).",
              "set": {
                "v3": {
                  "metin": "5"
                },
                "h": {
                  "noktalar": [
                    [
                      3.5,
                      2.5
                    ],
                    [
                      4.5,
                      2.5
                    ],
                    [
                      4.5,
                      4.1
                    ],
                    [
                      3.5,
                      4.1
                    ]
                  ]
                }
              }
            },
            {
              "metin": "a[a.length - 1] = temp; saklanan 1 sona yazılır.",
              "set": {
                "v4": {
                  "metin": "1"
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
            }
          ]
        },
        {
          "tip": "kod",
          "baslik": "Sola döndür",
          "kod": "int[] a = {1, 2, 3, 4, 5};\nint temp = a[0];\nfor (int i = 0; i < a.length - 1; i++)\n{\n    a[i] = a[i + 1];\n}\na[a.length - 1] = temp;\nSystem.out.println(a[0] + \" \" + a[4]);",
          "vurgu": [
            2,
            5,
            7
          ],
          "cikti": "2 1",
          "not": "Sola kaydırmada i artarak gider ve a[i] = a[i + 1] yazılır."
        },
        {
          "tip": "tuzak",
          "metin": "Yön, döngünün yönünü de belirler: kaydırırken henüz okunmamış bir kutunun üstüne yazmamalısın.",
          "yanlis": "Sağa kaydırmak için de i artarak a[i] = a[i - 1] yazabilirim.",
          "dogru": "Artarak giderken a[0] her yere kopyalanır. Sağa kaydırma ==i azalarak== gider: for (int i = a.length - 1; i > 0; i--)."
        }
      ]
    },
    {
      "baslik": "Ters çevirme ve kopyalama",
      "kisa": "Ters çevirirken baştakiyle sondaki yer değiştirir ve döngü yarıya kadar gider.",
      "bloklar": [
        {
          "tip": "kod",
          "baslik": "Yerinde ters çevir",
          "kod": "int[] a = {1, 2, 3, 4, 5};\nfor (int i = 0; i < a.length / 2; i++)\n{\n    int temp = a[i];\n    a[i] = a[a.length - 1 - i];\n    a[a.length - 1 - i] = temp;\n}\nSystem.out.println(a[0] + \" \" + a[1] + \" \" + a[4]);",
          "vurgu": [
            2,
            4,
            5,
            6
          ],
          "cikti": "5 4 1",
          "not": "a.length / 2 = 2 tur: (0, 4) ve (1, 3) yer değiştirir; ortadaki eleman yerinde kalır. Sonuç {5, 4, 3, 2, 1}."
        },
        {
          "tip": "tuzak",
          "metin": "Döngüyü dizinin sonuna kadar götürürsen her çift iki kez değişir.",
          "yanlis": "i < a.length ile de ters çevirebilirim.",
          "dogru": "İkinci yarıda çiftler geri çevrilir ve dizi ==eski haline döner==. Döngü ==a.length / 2== ye kadar gider."
        },
        {
          "tip": "tablo",
          "baslik": "Kopya mı, aynı dizi mi?",
          "head": [
            "Kod",
            "Sonuç"
          ],
          "rows": [
            [
              "int[] c = a;",
              "İki ad, tek dizi (*aliasing*). c[0] = 9 yazarsan a[0] da 9 olur."
            ],
            [
              "int[] c = new int[a.length]; sonra for ile c[i] = a[i];",
              "Bağımsız kopya: c değişse a değişmez."
            ]
          ],
          "vurgu": 1
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
            "Toplam ve sayaç döngüden önce tanımlanır; ortalama için (double) sum / a.length kullan.",
            "En büyük ya da en küçük için max = a[0] ile başla, döngüyü 1'den sür; max = 0 negatif dizide yanlıştır.",
            "\"Var mı\" kalıbı false ile başlar ve bulunca true yapar; \"hepsi mi\" true ile başlar ve bozulunca false yapar. else yazma.",
            "Komşu çiftlerde a[i] ve a[i + 1] için döngü i < a.length - 1 ile biter.",
            "Dizide tekrar ve mod için iç içe döngü gerekir; tekrar kontrolünde iç döngü i + 1'den başlar.",
            "Sola kaydırmada i artar, sağa kaydırmada i azalır; taşan elemanı temp'te sakla.",
            "Ters çevirmede döngü a.length / 2 tur döner; a[i] ve a[a.length - 1 - i] yer değiştirir.",
            "Kopya için yeni dizi kur ve elemanları tek tek yaz; int[] c = a kopya değil, aynı dizidir."
          ]
        }
      ]
    }
  ],
  "sorular": [
    {
      "q": "Aşağıdaki kod çalışınca ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "int[] a = {3, 4, 4};\nint sum = 0;\nfor (int x : a)\n{\n    sum += x;\n}\ndouble avg = sum / a.length;\nSystem.out.println(avg);"
      },
      "opts": [
        "3",
        "3.0",
        "3.6666666666666665",
        "Derleme hatası"
      ],
      "a": 1,
      "why": "sum 11, a.length 3. İki int bölünür: 11 / 3 = 3 (tam sayı bölmesi), sonra double'a çevrilip 3.0 olur. \"3.6666666666666665\" diyen, bölmenin double değişkene atandığı için ondalıklı yapıldığını sanmıştır."
    },
    {
      "q": "Aşağıdaki kod en küçük değeri bulmak için yazılmıştır. Ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "int[] a = {7, 3, 9};\nint min = 0;\nfor (int x : a)\n{\n    if (x < min)\n    {\n        min = x;\n    }\n}\nSystem.out.println(min);"
      },
      "opts": [
        "0",
        "3",
        "7",
        "9"
      ],
      "a": 0,
      "why": "min baştan 0 ve dizideki hiçbir eleman 0'dan küçük değildir; koşul hiç doğru olmaz, min 0 kalır. Doğrusu int min = a[0] ile başlamaktır; \"3\" diyen, kodun amacına bakıp çalışmasına bakmamıştır."
    },
    {
      "q": "Kod bittiğinde found değişkeninin değeri nedir?",
      "fig": {
        "type": "code",
        "code": "int[] a = {6, 12, 3, 20, 7};\nboolean found = false;\nfor (int x : a)\n{\n    if (x > 10)\n    {\n        found = true;\n    }\n    else\n    {\n        found = false;\n    }\n}"
      },
      "opts": [
        "true, çünkü dizide 10'dan büyük eleman var",
        "true, çünkü else hiç çalışmaz",
        "false, çünkü else her tur bayrağı sıfırlar ve son eleman 7'dir",
        "false, çünkü ilk eleman 6'dır"
      ],
      "a": 2,
      "why": "found her turda yeniden atanır; son tur x = 7 için else çalışır ve found false olur. Önceki bulgular silinir. \"true\" diyen, bayrağın bir kez true olunca öyle kaldığını varsaymıştır; bu ancak else olmasaydı doğruydu."
    },
    {
      "q": "Aşağıdaki kod çalışınca ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "int[] a = {1, 2, 3, 4};\nint temp = a[a.length - 1];\nfor (int i = a.length - 1; i > 0; i--)\n{\n    a[i] = a[i - 1];\n}\na[0] = temp;\nSystem.out.println(a[0] + \" \" + a[1] + \" \" + a[2] + \" \" + a[3]);"
      },
      "opts": [
        "2 3 4 1",
        "1 1 2 3",
        "4 4 4 4",
        "4 1 2 3"
      ],
      "a": 3,
      "why": "temp = 4. Döngü sağdan sola kaydırır: {1, 2, 3, 3}, {1, 2, 2, 3}, {1, 1, 2, 3}. Son olarak a[0] = 4 yazılır: {4, 1, 2, 3}. \"1 1 2 3\" diyen, temp'i başa yazmayı atlamıştır."
    },
    {
      "q": "Bir programcı diziyi ters çevirmeyi hedefliyor. Ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "int[] a = {1, 2, 3, 4};\nfor (int i = 0; i < a.length; i++)\n{\n    int temp = a[i];\n    a[i] = a[a.length - 1 - i];\n    a[a.length - 1 - i] = temp;\n}\nSystem.out.println(a[0] + \" \" + a[1] + \" \" + a[2] + \" \" + a[3]);"
      },
      "opts": [
        "1 2 3 4",
        "4 3 2 1",
        "4 2 3 1",
        "3 2 1 4"
      ],
      "a": 0,
      "why": "Dört tur: (0, 3) değişir, (1, 2) değişir, sonra (2, 1) ve (3, 0) bu çiftleri geri çevirir. Dizi yeniden {1, 2, 3, 4} olur. Doğru kod yalnızca a.length / 2 tur döner. \"4 3 2 1\" yarı yolda durduğunu varsayan cevaptır."
    }
  ]
};
