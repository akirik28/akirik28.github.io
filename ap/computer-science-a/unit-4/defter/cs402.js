/* Kitpath not defteri · cs402 · 4.3 Dizi Oluşturma ve Erişim
   Kaynak: AP CSA 2025–26 CED (Unit 4) öğrenme hedefleri; videosuz defter. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  "slug": "cs402",
  "amac": "Bu konu, aynı türden birçok değeri tek bir değişkende tutan diziyi (*array*) anlatıyor. Diziyi *new* ve başlangıç listesiyle kurmayı, indeksle okuyup yazmayı, *ArrayIndexOutOfBoundsException* hatasını ve dizinin neden bir referans olduğunu öğreneceksin.",
  "bolumler": [
    {
      "baslik": "Dizi: numaralı kutular",
      "kisa": "Dizi, aynı türden sabit sayıda değeri numaralı kutularda tutar.",
      "bloklar": [
        {
          "tip": "hikaye",
          "ikon": "🗄️",
          "baslik": "Okul dolapları",
          "metin": "Koridorda yan yana beş dolap var. Hepsi aynı büyüklükte, hepsi aynı işe yarıyor ve her birinin bir numarası var. Ama numaralar 1'den değil 0'dan başlıyor. Dolap sayısı da sonradan değişmiyor: beş dolaptır, beş kalır. Java'da dizi böyle çalışır."
        },
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "🧱",
              "terim": "Array",
              "tr": "dizi",
              "tanim": "Aynı türden değerleri art arda, sabit sayıda tutan nesne. Boyutu kurulduktan sonra değişmez.",
              "ornek": "5 sınav notunu tutan int[] dizisi."
            },
            {
              "ikon": "🔢",
              "terim": "Index",
              "tr": "indeks",
              "tanim": "Bir elemanın dizideki sıra numarası. İlk eleman 0, son eleman length eksi 1 numaralıdır.",
              "ornek": "5 kutulu dizide indeksler 0, 1, 2, 3, 4."
            },
            {
              "ikon": "📏",
              "terim": "length",
              "tr": "uzunluk",
              "tanim": "Dizinin kaç kutusu olduğunu verir. Parantezsiz yazılır: scores.length.",
              "ornek": "scores.length ifadesi 5 verir."
            }
          ]
        }
      ]
    },
    {
      "baslik": "new ile kurmak ve varsayılan değerler",
      "kisa": "new tip[boyut] kutuları açar ve hepsini varsayılan değerle doldurur.",
      "bloklar": [
        {
          "tip": "kod",
          "baslik": "Boş dizi kurmak",
          "kod": "int[] scores = new int[5];\ndouble[] prices = new double[3];\nboolean[] seen = new boolean[4];\nString[] names = new String[2];",
          "vurgu": [
            1
          ],
          "not": "Sol taraf değişkeni tanımlar (tür ve köşeli parantez), sağ taraf new ile diziyi kurar. Boyut köşeli parantezin içindedir."
        },
        {
          "tip": "tablo",
          "baslik": "Kurulur kurulmaz kutularda ne vardır?",
          "head": [
            "Dizi türü",
            "Her kutudaki başlangıç değeri"
          ],
          "rows": [
            [
              "int[]",
              "0"
            ],
            [
              "double[]",
              "0.0"
            ],
            [
              "boolean[]",
              "false"
            ],
            [
              "String[] ve her nesne dizisi",
              "null (hiçbir nesne)"
            ]
          ],
          "vurgu": 3,
          "not": "Nesne dizisini kurmak nesneleri kurmaz; yalnızca boş referans kutuları açar."
        }
      ]
    },
    {
      "baslik": "Başlangıç listesiyle kurmak",
      "kisa": "Değerleri baştan biliyorsan süslü parantez diziyi kurar ve doldurur.",
      "bloklar": [
        {
          "tip": "kod",
          "baslik": "Liste ile ya da new ile liste",
          "kod": "int[] a = {4, 8, 15};\nString[] days = {\"Pzt\", \"Sal\"};\nint[] b = new int[] {4, 8, 15};",
          "vurgu": [
            1,
            3
          ],
          "not": "Boyutu liste belirler: a dizisinde 3 kutu var. Yeni satırda new kullanırsan köşeli parantezin içi boş kalır."
        },
        {
          "tip": "ikili",
          "sol": {
            "ikon": "✅",
            "baslik": "Derlenir",
            "maddeler": [
              "Tür uyumlu liste",
              "Boyut ya da liste, ikisi birden değil"
            ]
          },
          "sag": {
            "ikon": "🚫",
            "baslik": "Derlenmez",
            "maddeler": [
              "Hem boyut hem liste yazılmış",
              "Türe uymayan değer"
            ]
          },
          "oyun": [
            {
              "metin": "int[] a = {1, 2, 3};",
              "cevap": "sol",
              "neden": "Liste dizi boyutunu belirler."
            },
            {
              "metin": "int[] d = new int[3]{1, 2, 3};",
              "cevap": "sag",
              "neden": "Boyut ve liste birlikte yazılamaz."
            },
            {
              "metin": "double[] f = {1, 2.5};",
              "cevap": "sol",
              "neden": "1 otomatik olarak 1.0 olur."
            },
            {
              "metin": "int[] g = {1, 2.5};",
              "cevap": "sag",
              "neden": "2.5, int kutusuna sığmaz."
            },
            {
              "metin": "int[] e = new int(3);",
              "cevap": "sag",
              "neden": "Dizi kurmak için köşeli parantez gerekir."
            }
          ]
        }
      ]
    },
    {
      "baslik": "İndeksle okumak ve yazmak",
      "kisa": "Eleman a[i] ile okunur ve yazılır; ilk indeks 0, son indeks length eksi bir.",
      "bloklar": [
        {
          "tip": "grafik",
          "baslik": "scores dizisini adım adım doldur",
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
              "metin": "scores",
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
              "metin": "0"
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
              "metin": "0"
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
              "metin": "0"
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
              "metin": "0"
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
              "metin": "0"
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
              "metin": "int[] scores = new int[5]; beş kutu açılır, hepsi 0."
            },
            {
              "metin": "scores[0] = 7; sıfırıncı kutuya 7 yazılır.",
              "goster": [
                "h"
              ],
              "set": {
                "v0": {
                  "metin": "7"
                },
                "h": {
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
              }
            },
            {
              "metin": "scores[3] = 9; üçüncü kutuya 9.",
              "set": {
                "v3": {
                  "metin": "9"
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
              "metin": "scores[1] = scores[0] + scores[3]; sağ taraf 7 + 9 = 16 olur ve birinci kutuya yazılır.",
              "set": {
                "v1": {
                  "metin": "16"
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
              "metin": "scores[scores.length - 1] = 2; son indeks 4'tür.",
              "set": {
                "v4": {
                  "metin": "2"
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
          "baslik": "Aynı adımların kodu",
          "kod": "int[] scores = new int[5];\nscores[0] = 7;\nscores[3] = 9;\nscores[1] = scores[0] + scores[3];\nscores[scores.length - 1] = 2;\nSystem.out.println(scores[1] + \" \" + scores.length);",
          "vurgu": [
            4,
            6
          ],
          "cikti": "16 5",
          "not": "Soldaki scores[1], atamanın kutusudur; sağdakiler okunan değerlerdir. length hep 5 kalır, çünkü kutu sayısı değişmez."
        }
      ]
    },
    {
      "baslik": "ArrayIndexOutOfBoundsException",
      "kisa": "Geçersiz indeks derlenir, ama program çalışırken durur.",
      "bloklar": [
        {
          "tip": "kod",
          "baslik": "Üçüncü indeksi isteyince",
          "kod": "int[] a = {10, 20, 30};\nSystem.out.println(a[2]);\nSystem.out.println(a[3]);\nSystem.out.println(\"bitti\");",
          "vurgu": [
            3
          ],
          "cikti": "30\nException in thread \"main\" java.lang.ArrayIndexOutOfBoundsException",
          "not": "Kod derlenir. a[2] çalışır (30 yazar). a[3] yok: program orada durur ve \"bitti\" hiç yazılmaz."
        },
        {
          "tip": "tablo",
          "baslik": "5 kutulu bir dizide hangi indeksler geçerli?",
          "head": [
            "İfade",
            "Sonuç"
          ],
          "rows": [
            [
              "a[0]",
              "Geçerli (ilk eleman)"
            ],
            [
              "a[4]",
              "Geçerli (son eleman)"
            ],
            [
              "a[a.length - 1]",
              "Geçerli (son eleman)"
            ],
            [
              "a[5]",
              "Hata: ArrayIndexOutOfBoundsException"
            ],
            [
              "a[a.length]",
              "Hata: ArrayIndexOutOfBoundsException"
            ],
            [
              "a[-1]",
              "Hata: ArrayIndexOutOfBoundsException"
            ]
          ],
          "vurgu": 4
        },
        {
          "tip": "tuzak",
          "metin": "Geçerli indeksler 0'dan length eksi bire kadardır. length'in kendisi bir kutu numarası değildir.",
          "yanlis": "n kutulu dizinin son elemanı a[n].",
          "dogru": "Son eleman ==a[n - 1]==; a[n] çalışırken *ArrayIndexOutOfBoundsException* verir."
        }
      ]
    },
    {
      "baslik": "Dizi bir referanstır",
      "kisa": "Dizi değişkeni oku tutar; atama dizi kopyalamaz, ikinci bir ok üretir.",
      "bloklar": [
        {
          "tip": "kod",
          "baslik": "İki ad, tek dizi",
          "kod": "int[] a = {1, 2, 3};\nint[] b = a;\nb[0] = 9;\nSystem.out.println(a[0]);",
          "vurgu": [
            2
          ],
          "cikti": "9",
          "not": "b = a yeni dizi kurmaz; b de aynı diziyi gösterir (*aliasing*). b üzerinden yapılan değişikliği a da görür."
        },
        {
          "tip": "kod",
          "baslik": "Nesne dizisinde kutular null ile başlar",
          "kod": "String[] names = new String[2];\nnames[0] = \"Ada\";\nSystem.out.println(names[0].length());\nSystem.out.println(names[1].length());",
          "vurgu": [
            4
          ],
          "cikti": "3\nException in thread \"main\" java.lang.NullPointerException",
          "not": "new String[2] iki String kurmaz, iki boş kutu açar. names[1] hâlâ null; üzerinden metot çağırmak *NullPointerException* verir."
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
            "Dizi, aynı türden sabit sayıda elemanı tutar; boyutu kurulunca değişmez.",
            "new int[5] beş kutu açar; başlangıç değerleri int için 0, double için 0.0, boolean için false, nesne için null.",
            "Süslü parantezli liste diziyi kurar ve doldurur; boyutu listeden gelir.",
            "İlk eleman a[0], son eleman a[a.length - 1]. length parantezsiz yazılır.",
            "Geçersiz indeks derleme hatası değil, çalışma anı hatasıdır: *ArrayIndexOutOfBoundsException*.",
            "Dizi bir nesnedir; b = a ikinci bir ad üretir, kopya değil.",
            "Nesne dizisi null ile başlar; null kutudan metot çağırmak *NullPointerException* verir."
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
        "code": "int[] a = new int[4];\na[1] = 5;\na[3] = a[1] + 2;\na[0] = a[3] - a[2];\nSystem.out.println(a[0] + \" \" + a[1] + \" \" + a[2] + \" \" + a[3]);"
      },
      "opts": [
        "0 5 0 7",
        "7 5 0 7",
        "7 5 7 7",
        "7 5 2 7"
      ],
      "a": 1,
      "why": "Dizi önce 0 0 0 0. a[1] = 5; a[3] = 5 + 2 = 7; a[0] = 7 - a[2] = 7 - 0 = 7. Sonuç 7 5 0 7. \"0 5 0 7\" diyen, a[0] atamasını unutmuştur."
    },
    {
      "q": "Aşağıdaki kod çalışırsa ne olur?",
      "fig": {
        "type": "code",
        "code": "int[] b = {4, 8, 15, 16};\nSystem.out.println(b[b.length - 1]);\nSystem.out.println(b[b.length]);\nSystem.out.println(\"bitti\");"
      },
      "opts": [
        "16 yazar, sonra bitti yazar.",
        "Kod derlenmez.",
        "16 yazar, sonra ArrayIndexOutOfBoundsException fırlar; bitti yazılmaz.",
        "15 ve 16 yazar, sonra bitti yazar."
      ],
      "a": 2,
      "why": "b.length 4, son indeks 3: b[3] = 16 yazılır. b[4] geçerli değildir; kod derlenir ama çalışırken hata verir ve program durur. \"16 ve bitti\" diyen, b[b.length] ifadesini son eleman sanmıştır."
    },
    {
      "q": "Aşağıdaki kod çalışınca ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "String[] s = new String[2];\ndouble[] d = new double[2];\nboolean[] f = new boolean[2];\nSystem.out.println(s[0] + \" \" + d[1] + \" \" + f[0]);"
      },
      "opts": [
        "null 0.0 false",
        "(boş) 0.0 false",
        "null 0 false",
        "NullPointerException fırlatılır"
      ],
      "a": 0,
      "why": "String dizisinin kutuları null, double dizisinin 0.0, boolean dizisinin false ile başlar. null ile birleştirmek \"null\" yazısını üretir; hiçbir metot çağrılmadığı için istisna yoktur. \"NullPointerException\" diyen, s[0] üzerinden metot çağrılmadığını gözden kaçırmıştır."
    },
    {
      "q": "Aşağıdaki kod çalışınca ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "int[] x = {3, 6, 9};\nint[] y = x;\ny[1] = 0;\nx[2] = y[1] + 4;\nSystem.out.println(x[1] + \" \" + y[2]);"
      },
      "opts": [
        "6 9",
        "0 9",
        "6 4",
        "0 4"
      ],
      "a": 3,
      "why": "y = x ile iki ad aynı diziyi gösterir. y[1] = 0 yapınca x[1] de 0 olur; sonra x[2] = 0 + 4 = 4 olur ve y[2] de 4'tür. Yazdırılan 0 4. \"6 9\" diyen, y'nin x'in kopyası olduğunu sanmıştır."
    },
    {
      "q": "Hangi satır derlenir ve çalışırken hata vermez?",
      "opts": [
        "int[] a = new int[3]{1, 2, 3};",
        "int[] a = {1, 2.5, 3};",
        "double[] a = {1, 2, 3};",
        "int[] a = new int(3);"
      ],
      "a": 2,
      "why": "double dizisine int değerler otomatik olarak double olur: {1.0, 2.0, 3.0}. Birinci seçenekte hem boyut hem liste var, ikincide 2.5 int kutusuna sığmaz, dördüncüde köşeli parantez yok. İkinci seçenek en çekici yanlıştır: yalnızca 2.5 yüzünden derlenmez."
    }
  ]
};
