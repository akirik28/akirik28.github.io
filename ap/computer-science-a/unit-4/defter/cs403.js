/* Kitpath not defteri · cs403 · 4.4 Diziyi Dolaşmak
   Kaynak: AP CSA 2025–26 CED (Unit 4) öğrenme hedefleri; videosuz defter. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  "slug": "cs403",
  "amac": "Bu konu, dizinin bütün elemanlarını sırayla ziyaret etmeyi anlatıyor. İndeksli for, while ve geliştirilmiş for (*for-each*) döngülerini, tersten ve atlayarak dolaşmayı, for-each ile eleman değiştirme tuzağını ve bir eksik ya da bir fazla (*off-by-one*) hatalarını öğreneceksin.",
  "bolumler": [
    {
      "baslik": "İndeksli for ile dolaşmak",
      "kisa": "i sıfırdan başlar, length'ten küçük kaldıkça artar; a[i] elemanı verir.",
      "bloklar": [
        {
          "tip": "grafik",
          "baslik": "Toplamı topla: i bir bir ilerler",
          "xlabel": "indeks",
          "ylabel": "",
          "xmax": 5,
          "ymax": 5,
          "ogeler": [
            {
              "id": "sm",
              "tip": "yazi",
              "x": 0.5,
              "y": 4.6,
              "metin": "sum = 0",
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
              "id": "v0",
              "tip": "yazi",
              "x": 1,
              "y": 3.15,
              "metin": "3"
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
              "metin": "5"
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
              "metin": "2"
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
              "metin": "8"
            },
            {
              "id": "i3",
              "tip": "yazi",
              "x": 4,
              "y": 2,
              "metin": "[3]"
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
            },
            {
              "id": "p",
              "tip": "ok",
              "from": [
                1,
                0.5
              ],
              "to": [
                1,
                1.5
              ],
              "gizli": true
            },
            {
              "id": "pl",
              "tip": "yazi",
              "x": 1,
              "y": 0.2,
              "metin": "i",
              "gizli": true
            }
          ],
          "durumlar": [
            {
              "metin": "int sum = 0; döngü öncesi toplam sıfır."
            },
            {
              "metin": "i = 0: a[0] = 3, sum = 0 + 3 = 3.",
              "goster": [
                "h",
                "p",
                "pl"
              ],
              "set": {
                "sm": {
                  "metin": "sum = 3"
                }
              }
            },
            {
              "metin": "i = 1: a[1] = 5, sum = 8.",
              "set": {
                "sm": {
                  "metin": "sum = 8"
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
                },
                "p": {
                  "from": [
                    2,
                    0.5
                  ],
                  "to": [
                    2,
                    1.5
                  ]
                },
                "pl": {
                  "x": 2
                }
              }
            },
            {
              "metin": "i = 2: a[2] = 2, sum = 10.",
              "set": {
                "sm": {
                  "metin": "sum = 10"
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
                },
                "p": {
                  "from": [
                    3,
                    0.5
                  ],
                  "to": [
                    3,
                    1.5
                  ]
                },
                "pl": {
                  "x": 3
                }
              }
            },
            {
              "metin": "i = 3: a[3] = 8, sum = 18.",
              "set": {
                "sm": {
                  "metin": "sum = 18"
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
                },
                "p": {
                  "from": [
                    4,
                    0.5
                  ],
                  "to": [
                    4,
                    1.5
                  ]
                },
                "pl": {
                  "x": 4
                }
              }
            },
            {
              "metin": "i = 4: 4 < 4 yanlış, döngü biter. Son indeks 3 idi, a[4] hiç okunmadı.",
              "gizle": [
                "h",
                "p",
                "pl"
              ]
            }
          ]
        },
        {
          "tip": "kod",
          "baslik": "Aynı döngü",
          "kod": "int[] a = {3, 5, 2, 8};\nint sum = 0;\nfor (int i = 0; i < a.length; i++)\n{\n    sum += a[i];\n}\nSystem.out.println(sum);",
          "vurgu": [
            3
          ],
          "cikti": "18",
          "not": "Üç parça: başlangıç (i = 0), koşul (i < a.length), adım (i++). Koşulda eşittir yok: a.length geçerli bir indeks değildir."
        }
      ]
    },
    {
      "baslik": "Tersten, atlayarak, bir kısmını dolaşmak",
      "kisa": "Başlangıcı, koşulu ve adımı değiştirerek istediğin indeksleri ziyaret edersin.",
      "bloklar": [
        {
          "tip": "tablo",
          "baslik": "5 elemanlı bir dizide (length 5) hangi indeksler ziyaret edilir?",
          "head": [
            "Döngü başlığı",
            "Ziyaret edilen indeksler"
          ],
          "rows": [
            [
              "for (int i = 0; i < a.length; i++)",
              "0, 1, 2, 3, 4"
            ],
            [
              "for (int i = a.length - 1; i >= 0; i--)",
              "4, 3, 2, 1, 0"
            ],
            [
              "for (int i = 0; i < a.length; i += 2)",
              "0, 2, 4"
            ],
            [
              "for (int i = 1; i < a.length; i++)",
              "1, 2, 3, 4"
            ],
            [
              "for (int i = 0; i < a.length - 1; i++)",
              "0, 1, 2, 3"
            ]
          ],
          "vurgu": 1
        },
        {
          "tip": "kod",
          "baslik": "Sondan başla, ikişer geri git",
          "kod": "int[] a = {4, 7, 1, 9, 6};\nfor (int i = a.length - 1; i >= 0; i -= 2)\n{\n    System.out.print(a[i] + \" \");\n}",
          "vurgu": [
            2
          ],
          "cikti": "6 1 4",
          "not": "i sırayla 4, 2, 0 olur: a[4] = 6, a[2] = 1, a[0] = 4. Sonraki i = -2, koşul yanlış olur."
        }
      ]
    },
    {
      "baslik": "while ile dolaşmak ve koşul sırası",
      "kisa": "while, durma koşulunu sen yazarsın; indeks sınırını önce kontrol et.",
      "bloklar": [
        {
          "tip": "kod",
          "baslik": "İlk sıfırı bul",
          "kod": "int[] a = {5, 3, 0, 8};\nint i = 0;\nwhile (i < a.length && a[i] != 0)\n{\n    i++;\n}\nSystem.out.println(i);",
          "vurgu": [
            3
          ],
          "cikti": "2",
          "not": "i = 0 ve 1 için iki koşul da doğru, i artar. i = 2'de a[2] sıfır olduğu için koşul yanlış olur ve döngü durur."
        },
        {
          "tip": "tuzak",
          "metin": "&& soldan sağa değerlendirilir ve sol taraf false ise sağ taraf hiç çalışmaz. Bu yüzden sınır kontrolü solda olmalıdır.",
          "yanlis": "while (a[i] != 0 && i < a.length) da aynı işi görür.",
          "dogru": "Sıfır yoksa i, a.length olur ve a[i] okunur: ==ArrayIndexOutOfBoundsException==. Önce i < a.length yaz."
        }
      ]
    },
    {
      "baslik": "Geliştirilmiş for (for-each)",
      "kisa": "for-each, indeks tutmadan elemanları sırayla birer birer verir.",
      "bloklar": [
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "🔁",
              "terim": "Enhanced for loop",
              "tr": "geliştirilmiş for (for-each)",
              "tanim": "for (tür değişken : dizi) biçiminde yazılır; dizinin her elemanını baştan sona sırayla değişkene alır.",
              "ornek": "for (int s : scores) ifadesi her notu sırayla s'ye koyar."
            }
          ]
        },
        {
          "tip": "kod",
          "baslik": "Her ismin uzunluğu",
          "kod": "String[] names = {\"Ada\", \"Mert\", \"Ece\"};\nfor (String n : names)\n{\n    System.out.print(n.length() + \" \");\n}",
          "vurgu": [
            2
          ],
          "cikti": "3 4 3",
          "not": "n, her turda sıradaki elemandır. İndeks yok, bu yüzden sınırı aşmak mümkün değil."
        },
        {
          "tip": "ikili",
          "sol": {
            "ikon": "🔁",
            "baslik": "for-each yeter",
            "maddeler": [
              "Her elemana yalnızca bakıyorsun",
              "İndeks gerekmiyor"
            ]
          },
          "sag": {
            "ikon": "🔢",
            "baslik": "İndeksli for gerekir",
            "maddeler": [
              "Elemanı değiştiriyorsun",
              "İndeks ya da komşu eleman lazım"
            ]
          },
          "oyun": [
            {
              "metin": "Bütün notların toplamı",
              "cevap": "sol",
              "neden": "Her elemanı okumak yeter."
            },
            {
              "metin": "a[i] ile a[i - 1]'i karşılaştırmak",
              "cevap": "sag",
              "neden": "Komşu elemana indeks ister."
            },
            {
              "metin": "Dizideki en büyük değeri bulmak",
              "cevap": "sol",
              "neden": "Her eleman yalnızca okunur."
            },
            {
              "metin": "Her elemanı 2 ile çarpıp diziye geri yazmak",
              "cevap": "sag",
              "neden": "Diziyi değiştirmek için indeks gerekir."
            },
            {
              "metin": "Bir değerin kaçıncı sırada olduğunu yazdırmak",
              "cevap": "sag",
              "neden": "Sıra numarası için indeks gerekir."
            }
          ]
        }
      ]
    },
    {
      "baslik": "for-each ile değiştirme tuzağı",
      "kisa": "for-each değişkeni elemanın kopyasıdır; ona atamak diziyi değiştirmez.",
      "bloklar": [
        {
          "tip": "grafik",
          "baslik": "x = x ∗ 2 diziyi değiştirir mi?",
          "xlabel": "indeks",
          "ylabel": "",
          "xmax": 6,
          "ymax": 5,
          "ogeler": [
            {
              "id": "ad",
              "tip": "yazi",
              "x": 0.5,
              "y": 4.6,
              "metin": "a",
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
              "id": "v0",
              "tip": "yazi",
              "x": 1,
              "y": 3.15,
              "metin": "2"
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
              "metin": "4"
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
              "metin": "6"
            },
            {
              "id": "i2",
              "tip": "yazi",
              "x": 3,
              "y": 2,
              "metin": "[2]"
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
            },
            {
              "id": "cx",
              "tip": "alan",
              "renk": 3,
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
              ],
              "gizli": true
            },
            {
              "id": "cv",
              "tip": "yazi",
              "x": 5,
              "y": 3.15,
              "metin": "2",
              "gizli": true
            },
            {
              "id": "cl",
              "tip": "yazi",
              "x": 5,
              "y": 4.6,
              "metin": "x (kopya)",
              "gizli": true
            }
          ],
          "durumlar": [
            {
              "metin": "int[] a = {2, 4, 6}; for (int x : a) { x = x ∗ 2; } başlıyor."
            },
            {
              "metin": "İlk tur: x, a[0]'ın kopyasıdır. x = 2.",
              "goster": [
                "h",
                "cx",
                "cv",
                "cl"
              ]
            },
            {
              "metin": "x = x ∗ 2 → x = 4. Yalnızca kopya değişti; ==a[0] hâlâ 2==.",
              "set": {
                "cv": {
                  "metin": "4"
                }
              }
            },
            {
              "metin": "İkinci tur: x yeni kopya, x = 4, ardından 8. Dizi yine değişmedi: a[1] = 4.",
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
                },
                "cv": {
                  "metin": "8"
                }
              }
            }
          ]
        },
        {
          "tip": "kod",
          "baslik": "Önce for-each, sonra indeksli for",
          "kod": "int[] a = {2, 4, 6};\nfor (int x : a)\n{\n    x = x * 2;\n}\nSystem.out.println(a[1]);\nfor (int i = 0; i < a.length; i++)\n{\n    a[i] = a[i] * 2;\n}\nSystem.out.println(a[1]);",
          "vurgu": [
            4,
            9
          ],
          "cikti": "4\n8",
          "not": "Birinci döngü x kopyasını değiştirir, a[1] 4 kalır. İkinci döngü a[i] kutusuna yazar, a[1] 8 olur."
        },
        {
          "tip": "tablo",
          "baslik": "for-each değişkenine ne yaparsan diziye ne olur?",
          "head": [
            "Dizi türü",
            "Değişkene atama (x = ...)",
            "Nesnenin metodunu çağırma"
          ],
          "rows": [
            [
              "int, double, boolean",
              "Dizi değişmez",
              "Metot yok"
            ],
            [
              "String",
              "Dizi değişmez (*String* değiştirilemez)",
              "Değiştiren metot yok"
            ],
            [
              "Kendi nesnelerin (ör. Student)",
              "Dizi değişmez; yalnızca kopya başka nesneye geçer",
              "Nesnenin kendisi değişir; dizideki nesne de değişmiş görünür"
            ]
          ],
          "vurgu": 2
        },
        {
          "tip": "tuzak",
          "metin": "for (int x : a) { x++; } ya da x = 0 yazmak diziyi güncellemez.",
          "yanlis": "for-each ile diziyi 1 artırabilirim.",
          "dogru": "Elemanı değiştirmek için ==a[i] = ...== ile indeksli döngü gerekir."
        }
      ]
    },
    {
      "baslik": "Bir eksik, bir fazla hatası",
      "kisa": "Sınır ya da komşu eleman yanlışsa son turda dizi sınırı aşılır.",
      "bloklar": [
        {
          "tip": "kod",
          "baslik": "Eşittir yüzünden bir tur fazla",
          "kod": "int[] a = {1, 2, 3};\nfor (int i = 0; i <= a.length; i++)\n{\n    System.out.println(a[i]);\n}",
          "vurgu": [
            2
          ],
          "cikti": "1\n2\n3\nException in thread \"main\" java.lang.ArrayIndexOutOfBoundsException",
          "not": "i = 3'te koşul (3 <= 3) doğru; a[3] yok, program orada durur."
        },
        {
          "tip": "tablo",
          "baslik": "Sık yapılan sınır hataları",
          "head": [
            "Yazılan",
            "Ne olur?"
          ],
          "rows": [
            [
              "i <= a.length",
              "Son turda a[a.length] okunur: ArrayIndexOutOfBoundsException"
            ],
            [
              "a[i] ile a[i + 1], i < a.length",
              "Son turda a[i + 1] sınırı aşar: ArrayIndexOutOfBoundsException"
            ],
            [
              "a[i] ile a[i + 1], i < a.length - 1",
              "Doğru: son çift (length - 2, length - 1) taranır"
            ],
            [
              "int i = 1 ile başlamak",
              "İlk eleman atlanır (hata vermez, sonuç yanlış olur)"
            ]
          ],
          "vurgu": 2
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
            "Standart dolaşma: for (int i = 0; i < a.length; i++) ve a[i]. Koşulda eşittir kullanma.",
            "Tersten dolaşmak için i = a.length - 1 ile başla, i >= 0 olduğu sürece i-- yap.",
            "Atlamak için i += 2 gibi adım yaz; yalnız bir kısmı için başlangıcı ve sınırı değiştir.",
            "while ile dolaşırken sınır kontrolünü (i < a.length) && içinde en sola yaz.",
            "for-each indeks tutmaz; elemanları okumak için idealdir, sınırı aşamaz.",
            "for-each değişkeni elemanın kopyasıdır: ona atamak diziyi değiştirmez; nesnenin içini metotla değiştirmek ise nesneyi değiştirir.",
            "Komşu eleman (a[i + 1]) kullanıyorsan döngü i < a.length - 1 ile bitmelidir."
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
        "code": "int[] a = {4, 7, 1, 9, 6};\nint s = 0;\nfor (int i = 1; i < a.length; i += 2)\n{\n    s += a[i];\n}\nSystem.out.println(s);"
      },
      "opts": [
        "11",
        "16",
        "22",
        "27"
      ],
      "a": 1,
      "why": "i sırayla 1 ve 3 olur (sonra 5, koşul yanlış): a[1] + a[3] = 7 + 9 = 16. \"27\" bütün elemanların toplamıdır; \"11\" ise 0., 2. ve 4. indeksleri toplayanın cevabıdır."
    },
    {
      "q": "Aşağıdaki kod çalışınca ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "int[] nums = {1, 2, 3};\nfor (int n : nums)\n{\n    n = n + 10;\n}\nSystem.out.println(nums[0] + nums[1] + nums[2]);"
      },
      "opts": [
        "6",
        "36",
        "123",
        "16"
      ],
      "a": 0,
      "why": "for-each değişkeni n bir kopyadır; dizi değişmez ve {1, 2, 3} kalır. println içinde üç int toplanır: 6. \"36\" diyen, dizinin 11, 12, 13 olduğunu sanmıştır; \"123\" ise sayıları yan yana yazmaktır, oysa burada + toplama yapar."
    },
    {
      "q": "Aşağıdaki kod çalışırsa ne olur?",
      "fig": {
        "type": "code",
        "code": "int[] a = {2, 4, 6};\nint i = 0;\nwhile (a[i] < 10 && i < a.length)\n{\n    i++;\n}\nSystem.out.println(i);"
      },
      "opts": [
        "Ekrana 3 yazılır.",
        "Ekrana 2 yazılır.",
        "ArrayIndexOutOfBoundsException fırlatılır.",
        "Kod derlenmez."
      ],
      "a": 2,
      "why": "i 3 olunca koşulun solu a[3] < 10 önce değerlendirilir ve a[3] yoktur; hata, i < a.length kontrol edilmeden fırlar. Sınır kontrolü solda olsaydı 3 yazılırdı; \"3\" diyen, kodun sırasını ters okumuştur."
    },
    {
      "q": "Aşağıdakilerden hangisi for-each döngüsüyle doğru biçimde yapılamaz?",
      "opts": [
        "Bütün elemanların toplamını bulmak",
        "En büyük elemanı bulmak",
        "50'den büyük bir eleman olup olmadığına bakmak",
        "Her elemanı iki katına çıkarıp aynı diziye geri yazmak"
      ],
      "a": 3,
      "why": "for-each değişkeni elemanın kopyasıdır; ona yazmak diziyi değiştirmez. Diziyi güncellemek için a[i] = a[i] ∗ 2 gibi indeksli bir döngü gerekir. Diğer üçü yalnızca okuma gerektirir."
    },
    {
      "q": "Aşağıdaki kod çalışınca ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "int[] a = {5, 3, 8, 2};\nint count = 0;\nfor (int i = 0; i < a.length - 1; i++)\n{\n    if (a[i] > a[i + 1])\n    {\n        count++;\n    }\n}\nSystem.out.println(count);"
      },
      "opts": [
        "1",
        "2",
        "3",
        "ArrayIndexOutOfBoundsException"
      ],
      "a": 1,
      "why": "Çiftler: 5 > 3 doğru, 3 > 8 yanlış, 8 > 2 doğru; count 2 olur. Döngü length - 1'de bittiği için a[i + 1] hiçbir zaman sınırı aşmaz; bu yüzden hata seçeneği yanlıştır."
    }
  ]
};
