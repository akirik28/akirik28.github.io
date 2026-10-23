/* Kitpath not defteri · cs407 · 4.8 ArrayList Metotları
   Kaynak: AP CSA 2025–26 CED (Unit 4) öğrenme hedefleri; videosuz defter. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  "slug": "cs407",
  "amac": "Bu konu, boyutu büyüyüp küçülebilen ArrayList koleksiyonunu anlatıyor. ArrayList'i kurmayı, size, add, get, set ve remove metotlarını, araya ekleme ve silmedeki kaydırmayı, IndexOutOfBoundsException hatasını ve diziyle farklarını öğreneceksin.",
  "bolumler": [
    {
      "baslik": "ArrayList nedir? Diziden farkı",
      "kisa": "ArrayList, boyutu değişebilen ve yalnızca nesne tutan bir koleksiyondur.",
      "bloklar": [
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "📚",
              "terim": "ArrayList",
              "tr": "değişken boyutlu liste",
              "tanim": "java.util paketindeki sınıf. Eleman ekledikçe büyür, sildikçe küçülür; elemanlar sıralı ve 0'dan indekslidir.",
              "ornek": "Kantin sırasındaki öğrenciler: gelen olur, giden olur."
            },
            {
              "ikon": "🏷️",
              "terim": "Type parameter",
              "tr": "tür parametresi",
              "tanim": "Köşeli ayraçların içine listenin tutacağı nesne türü yazılır. İlkel tür olamaz; wrapper kullanılır.",
              "ornek": "ArrayList<String>, ArrayList<Integer>"
            }
          ]
        },
        {
          "tip": "tablo",
          "baslik": "Dizi ve ArrayList yan yana",
          "head": [
            "",
            "Dizi",
            "ArrayList"
          ],
          "rows": [
            [
              "Boyut",
              "Sabit; kurulunca değişmez",
              "Değişir (add, remove)"
            ],
            [
              "Ne tutar?",
              "İlkel ya da nesne",
              "Yalnızca nesne (ilkel → wrapper)"
            ],
            [
              "Eleman sayısı",
              "a.length",
              "list.size()"
            ],
            [
              "Okuma",
              "a[i]",
              "list.get(i)"
            ],
            [
              "Yazma",
              "a[i] = x",
              "list.set(i, x)"
            ],
            [
              "Ekleme",
              "Yok; yeni dizi gerekir",
              "list.add(x), list.add(i, x)"
            ]
          ],
          "vurgu": 2
        }
      ]
    },
    {
      "baslik": "Kurmak, add, size ve get",
      "kisa": "add sona ekler, get indeksle okur, size kaç eleman olduğunu söyler.",
      "bloklar": [
        {
          "tip": "kod",
          "baslik": "Kantin menüsü",
          "kod": "ArrayList<String> menu = new ArrayList<String>();\nmenu.add(\"çay\");\nmenu.add(\"tost\");\nmenu.add(\"ayran\");\nSystem.out.println(menu.size());\nSystem.out.println(menu.get(1));\nSystem.out.println(menu);",
          "vurgu": [
            1,
            5,
            6
          ],
          "cikti": "3\ntost\n[çay, tost, ayran]",
          "not": "Yeni liste boş doğar: size 0. get(1) ikinci elemanı verir. Listeyi yazdırınca elemanlar köşeli parantez ve virgülle çıkar."
        },
        {
          "tip": "tuzak",
          "metin": "Uzunluğu soran üç ayrı yazım vardır; karıştırırsan kod derlenmez.",
          "yanlis": "menu.length ya da menu.length() ArrayList'in boyutunu verir.",
          "dogru": "Dizide ==a.length==, *String*'te ==s.length()==, ArrayList'te ==list.size()==."
        }
      ]
    },
    {
      "baslik": "add(indeks), set ve remove",
      "kisa": "Araya eklemek sağdakileri kaydırır, silmek soldakileri; set yerinde değiştirir.",
      "bloklar": [
        {
          "tip": "tablo",
          "baslik": "Altı metot",
          "head": [
            "Metot",
            "Ne yapar?",
            "Döndürür"
          ],
          "rows": [
            [
              "size()",
              "Eleman sayısı",
              "int"
            ],
            [
              "add(x)",
              "x'i sona ekler",
              "boolean (true)"
            ],
            [
              "add(i, x)",
              "x'i i. indekse sokar, i ve sağdakileri bir sağa kaydırır",
              "void"
            ],
            [
              "get(i)",
              "i. elemanı okur",
              "eleman"
            ],
            [
              "set(i, x)",
              "i. elemanı x yapar; boyut değişmez",
              "eski eleman"
            ],
            [
              "remove(i)",
              "i. elemanı siler, sağdakileri bir sola kaydırır",
              "silinen eleman"
            ]
          ],
          "vurgu": 2
        },
        {
          "tip": "grafik",
          "baslik": "Liste adım adım değişiyor",
          "xlabel": "indeks",
          "ylabel": "",
          "xmax": 6,
          "ymax": 5,
          "ogeler": [
            {
              "id": "sz",
              "tip": "yazi",
              "x": 0.5,
              "y": 4.6,
              "metin": "size = 3",
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
              ],
              "gizli": true
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
              ],
              "gizli": true
            },
            {
              "id": "v0",
              "tip": "yazi",
              "x": 1,
              "y": 3.15,
              "metin": "A"
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
              "metin": "B"
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
              "metin": "C"
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
              "metin": "D",
              "gizli": true
            },
            {
              "id": "i3",
              "tip": "yazi",
              "x": 4,
              "y": 2,
              "metin": "[3]",
              "gizli": true
            },
            {
              "id": "v4",
              "tip": "yazi",
              "x": 5,
              "y": 3.15,
              "metin": "D",
              "gizli": true
            },
            {
              "id": "i4",
              "tip": "yazi",
              "x": 5,
              "y": 2,
              "metin": "[4]",
              "gizli": true
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
              "metin": "list = [A, B, C]. Üç eleman, size 3."
            },
            {
              "metin": "list.add(\"D\"): sona eklenir. size 4.",
              "goster": [
                "c3",
                "v3",
                "i3",
                "h"
              ],
              "set": {
                "sz": {
                  "metin": "size = 4"
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
              "metin": "list.add(1, \"X\"): 1. indekse X girer; B, C, D birer sağa kayar. size 5.",
              "goster": [
                "c4",
                "v4",
                "i4"
              ],
              "set": {
                "sz": {
                  "metin": "size = 5"
                },
                "v1": {
                  "metin": "X"
                },
                "v2": {
                  "metin": "B"
                },
                "v3": {
                  "metin": "C"
                },
                "v4": {
                  "metin": "D"
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
              "metin": "list.set(0, \"Z\"): A'nın yerine Z yazılır; boyut değişmez. A geri döner.",
              "set": {
                "v0": {
                  "metin": "Z"
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
              "metin": "list.remove(2): B silinir; C ve D birer sola kayar. size 4.",
              "gizle": [
                "c4",
                "v4",
                "i4"
              ],
              "set": {
                "sz": {
                  "metin": "size = 4"
                },
                "v2": {
                  "metin": "C"
                },
                "v3": {
                  "metin": "D"
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
            }
          ]
        },
        {
          "tip": "kod",
          "baslik": "Aynı adımlar kodda",
          "kod": "ArrayList<String> list = new ArrayList<String>();\nlist.add(\"A\");\nlist.add(\"B\");\nlist.add(\"C\");\nlist.add(\"D\");\nlist.add(1, \"X\");\nString old = list.set(0, \"Z\");\nString gone = list.remove(2);\nSystem.out.println(list + \" \" + old + \" \" + gone);",
          "vurgu": [
            6,
            7,
            8
          ],
          "cikti": "[Z, X, C, D] A B",
          "not": "Son durumda liste [Z, X, C, D]. set eski elemanı (A), remove silineni (B) döndürür."
        },
        {
          "tip": "tuzak",
          "metin": "remove içine yazdığın sayı bir değer değil, bir indekstir.",
          "yanlis": "list.remove(2) listeden 2 değerini siler.",
          "dogru": "==Üçüncü eleman== (indeks 2) silinir; ArrayList<Integer> olsa bile böyledir."
        }
      ]
    },
    {
      "baslik": "IndexOutOfBoundsException",
      "kisa": "get, set, remove için geçerli indeks 0…size - 1; add için 0…size.",
      "bloklar": [
        {
          "tip": "kod",
          "baslik": "Sona ekleyen add, ama get dışarıda",
          "kod": "ArrayList<Integer> nums = new ArrayList<Integer>();\nnums.add(10);\nnums.add(20);\nnums.add(2, 30);\nSystem.out.println(nums.size());\nSystem.out.println(nums.get(3));",
          "vurgu": [
            4,
            6
          ],
          "cikti": "3\nException in thread \"main\" java.lang.IndexOutOfBoundsException",
          "not": "Liste 2 elemanlıyken add(2, 30) geçerlidir: sona ekler. size 3 olur; indeksler 0, 1, 2. get(3) geçersiz."
        },
        {
          "tip": "tablo",
          "baslik": "3 elemanlı bir listede (size 3) hangi indeks geçerli?",
          "head": [
            "Çağrı",
            "Sonuç"
          ],
          "rows": [
            [
              "get(0), get(2)",
              "Geçerli"
            ],
            [
              "get(3)",
              "Hata: IndexOutOfBoundsException"
            ],
            [
              "set(-1, x)",
              "Hata"
            ],
            [
              "remove(3)",
              "Hata"
            ],
            [
              "add(3, x)",
              "Geçerli: sona ekler"
            ],
            [
              "add(4, x)",
              "Hata"
            ]
          ],
          "vurgu": 4
        },
        {
          "tip": "tuzak",
          "metin": "Hata adı dizide ArrayIndexOutOfBoundsException, listede IndexOutOfBoundsException'dır. Ayrıca add'in geçerli aralığı bir fazladır.",
          "yanlis": "add(size(), x) geçersizdir, çünkü get(size()) de geçersiz.",
          "dogru": "==add(size(), x)== sona ekler ve geçerlidir; ==get(size())== geçersizdir."
        }
      ]
    },
    {
      "baslik": "Tür kuralı ve aynı liste, iki ad",
      "kisa": "Liste yalnızca belirtilen türü alır; liste bir nesnedir, atama kopya üretmez.",
      "bloklar": [
        {
          "tip": "ikili",
          "sol": {
            "ikon": "✅",
            "baslik": "Derlenir",
            "maddeler": [
              "Tür parametresi nesne türü",
              "Eklenen değer o türde"
            ]
          },
          "sag": {
            "ikon": "🚫",
            "baslik": "Derlenmez",
            "maddeler": [
              "Tür parametresi ilkel",
              "Eklenen değer başka türde"
            ]
          },
          "oyun": [
            {
              "metin": "ArrayList<Double> d = new ArrayList<Double>();",
              "cevap": "sol",
              "neden": "Double bir wrapper sınıfıdır."
            },
            {
              "metin": "ArrayList<double> d = new ArrayList<double>();",
              "cevap": "sag",
              "neden": "Köşeli ayraçta ilkel tür yazılamaz."
            },
            {
              "metin": "ArrayList<Integer> n = ...;  n.add(5);",
              "cevap": "sol",
              "neden": "5, Integer'a otomatik kutulanır."
            },
            {
              "metin": "ArrayList<Integer> n = ...;  n.add(\"5\");",
              "cevap": "sag",
              "neden": "String, Integer listesine eklenemez."
            },
            {
              "metin": "ArrayList<String> s = ...;  s.add(5);",
              "cevap": "sag",
              "neden": "int, String değildir."
            }
          ]
        },
        {
          "tip": "kod",
          "baslik": "b = a yeni liste kurmaz",
          "kod": "ArrayList<Integer> a = new ArrayList<Integer>();\na.add(3);\nArrayList<Integer> b = a;\nb.add(0, 9);\na.set(1, a.get(1) + 1);\nSystem.out.println(a + \" \" + b.size());",
          "vurgu": [
            3,
            4,
            5
          ],
          "cikti": "[9, 4] 2",
          "not": "a ve b aynı listeyi gösterir (*aliasing*). b.add(0, 9) listeyi [9, 3] yapar; a.get(1) 3'tür, set ile 4 olur."
        }
      ]
    },
    {
      "baslik": "Sınav için bilmen gerekenler",
      "kisa": "Altı metodu, indeks aralıklarını ve kaydırmayı kodla izleyebilmelisin.",
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
              "ArrayList kurmak; size, add(x), add(i, x), get, set, remove(i) çağırmak; dönüş değerlerini kullanmak."
            ],
            [
              "👀 Okursun",
              "Araya ekleme ve silmede elemanların kaymasını, listenin son halini ve IndexOutOfBoundsException'ı izlemek."
            ],
            [
              "🚫 Gerekmez",
              "AP Java Quick Reference'ta olmayan metotları ezberlemek; dolaşma ve silerken kayma konusu bir sonraki defterde."
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
            "ArrayList boyutu değişen, yalnızca nesne tutan listedir: ArrayList<String>, ArrayList<Integer>.",
            "Boyut: dizide a.length, String'te s.length(), listede list.size().",
            "add(x) sona ekler; add(i, x) araya sokar ve sağdakileri kaydırır; i, 0'dan size'a kadar geçerlidir.",
            "get(i) okur, set(i, x) eskiyi döndürerek yerini değiştirir, remove(i) siler ve silineni döndürür.",
            "get, set ve remove için geçerli indeks 0…size - 1'dir; dışı IndexOutOfBoundsException verir.",
            "remove(2) indeks 2'yi siler, 2 değerini değil; silinince sağdakiler sola kayar.",
            "Liste bir nesnedir: b = a ikinci bir ad üretir (*aliasing*).",
            "Listeyi yazdırınca elemanlar [a, b, c] biçiminde görünür."
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
        "code": "ArrayList<String> list = new ArrayList<String>();\nlist.add(\"a\");\nlist.add(\"b\");\nlist.add(0, \"c\");\nlist.set(1, \"d\");\nlist.remove(2);\nSystem.out.println(list);"
      },
      "opts": [
        "[c, d]",
        "[c, a]",
        "[d, b]",
        "[c, d, b]"
      ],
      "a": 0,
      "why": "Sırayla: [a, b] → add(0, \"c\") ile [c, a, b] → set(1, \"d\") ile [c, d, b] → remove(2) üçüncü elemanı (b) siler: [c, d]. \"[c, d, b]\" diyen, remove satırını atlamıştır."
    },
    {
      "q": "Aşağıdaki kod çalışınca ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "ArrayList<Integer> nums = new ArrayList<Integer>();\nnums.add(5);\nnums.add(8);\nnums.add(1, 7);\nint x = nums.remove(0);\nint y = nums.set(1, 4);\nSystem.out.println(x + \" \" + y + \" \" + nums);"
      },
      "opts": [
        "5 7 [7, 4]",
        "8 5 [7, 4]",
        "5 8 [7, 4]",
        "5 4 [7, 4]"
      ],
      "a": 2,
      "why": "[5, 8] → add(1, 7) ile [5, 7, 8] → remove(0) 5'i döndürür, liste [7, 8] → set(1, 4) eski elemanı (8) döndürür, liste [7, 4]. Çıktı 5 8 [7, 4]. \"5 4\" diyen, set'in yeni değeri döndürdüğünü sanmıştır."
    },
    {
      "q": "Aşağıdaki kod çalışırsa ne olur?",
      "fig": {
        "type": "code",
        "code": "ArrayList<String> t = new ArrayList<String>();\nt.add(\"p\");\nt.add(\"q\");\nt.add(2, \"r\");\nSystem.out.println(t.size());\nt.add(4, \"s\");\nSystem.out.println(\"bitti\");"
      },
      "opts": [
        "3 yazılır, sonra bitti yazılır.",
        "3 yazılır, sonra IndexOutOfBoundsException fırlar; bitti yazılmaz.",
        "add(2, \"r\") satırında hata fırlar.",
        "Kod derlenmez."
      ],
      "a": 1,
      "why": "Liste 2 elemanlıyken add(2, \"r\") geçerlidir (sona ekler); size 3 yazılır. add(4, \"s\") için 4 > size olduğundan IndexOutOfBoundsException fırlar ve program durur. \"add(2, ...) hata verir\" diyen, geçerli aralığın size'a kadar olduğunu bilmiyor."
    },
    {
      "q": "Aşağıdaki tanımlardan sonra hangi ifade derlenir?",
      "fig": {
        "type": "code",
        "code": "int[] arr = new int[3];\nArrayList<String> list = new ArrayList<String>();\nlist.add(\"kantin\");"
      },
      "opts": [
        "arr.size()",
        "list.length",
        "list.get(0).length()",
        "arr.length()"
      ],
      "a": 2,
      "why": "list.get(0) bir String verir ve String'in uzunluğu length() ile alınır. arr.size() ve arr.length() dizide yoktur (dizide parantezsiz arr.length), list.length ise ArrayList'te yoktur (size() kullanılır)."
    },
    {
      "q": "Aşağıdaki kod çalışınca ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "ArrayList<Integer> a = new ArrayList<Integer>();\na.add(3);\nArrayList<Integer> b = a;\nb.add(0, 9);\na.set(1, a.get(1) + 1);\nSystem.out.println(a + \" \" + b.size());"
      },
      "opts": [
        "[9, 3] 2",
        "[3, 4] 1",
        "[9, 4] 1",
        "[9, 4] 2"
      ],
      "a": 3,
      "why": "b = a ile iki ad aynı listeyi gösterir. b.add(0, 9) listeyi [9, 3] yapar; a.get(1) 3'tür ve set ile 4 olur: [9, 4]. Liste tek olduğundan b.size() de 2'dir. \"[3, 4] 1\" diyen, b'nin ayrı bir liste olduğunu sanmıştır."
    }
  ]
};
