/* Kitora not defteri · cs406 · 4.7 Wrapper Sınıfları
   Kaynak: AP CSA 2025–26 CED (Unit 4) öğrenme hedefleri; videosuz defter. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  "slug": "cs406",
  "amac": "Bu konu, int ve double gibi ilkel değerleri nesneye saran Integer ve Double sınıflarını anlatıyor. Otomatik kutulama (*autoboxing*) ve kutudan çıkarma (*unboxing*), intValue ve doubleValue, parseInt ve parseDouble ile yazıyı sayıya çevirme, MIN_VALUE ve MAX_VALUE sabitleri ve tuzaklarını öğreneceksin.",
  "bolumler": [
    {
      "baslik": "Wrapper sınıf nedir, neden var?",
      "kisa": "ArrayList gibi koleksiyonlar nesne ister; wrapper sınıf ilkel değeri nesneye çevirir.",
      "bloklar": [
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "🎁",
              "terim": "Wrapper class",
              "tr": "sarmalayıcı sınıf",
              "tanim": "Bir ilkel değeri nesne olarak saran sınıf. *int* için *Integer*, *double* için *Double* kullanılır.",
              "ornek": "Integer n = 5; bir nesnedir, int x = 5; ise ilkel bir değerdir."
            },
            {
              "ikon": "🕳️",
              "terim": "null",
              "tr": "hiçbir nesne",
              "tanim": "Wrapper değişkeni nesne olduğu için null olabilir; ilkel değişken olamaz.",
              "ornek": "Integer score = null; geçerlidir, int s = null; derlenmez."
            }
          ]
        },
        {
          "tip": "ikili",
          "sol": {
            "ikon": "🔢",
            "baslik": "İlkel (*int*, *double*)",
            "maddeler": [
              "Kutuda değerin kendisi durur",
              "null olamaz, metodu yoktur"
            ]
          },
          "sag": {
            "ikon": "🎁",
            "baslik": "Wrapper (*Integer*, *Double*)",
            "maddeler": [
              "Nesne; kutuda nesneye giden ok durur",
              "null olabilir, metodu vardır"
            ]
          },
          "oyun": [
            {
              "metin": "int kdv = 20;",
              "cevap": "sol",
              "neden": "İlkel tür: değer kutuda."
            },
            {
              "metin": "Integer yas = 15;",
              "cevap": "sag",
              "neden": "Wrapper: yas bir Integer nesnesine bakar."
            },
            {
              "metin": "Double oran = null;",
              "cevap": "sag",
              "neden": "Yalnızca nesne olan null olabilir."
            },
            {
              "metin": "ArrayList<Integer> içindeki her eleman",
              "cevap": "sag",
              "neden": "Koleksiyon ilkel değil, nesne tutar."
            },
            {
              "metin": "double fiyat = 4.5;",
              "cevap": "sol",
              "neden": "İlkel tür."
            }
          ]
        }
      ]
    },
    {
      "baslik": "Autoboxing ve unboxing",
      "kisa": "Java ilkel ile wrapper arasında gerektiğinde kendiliğinden dönüşüm yapar.",
      "bloklar": [
        {
          "tip": "grafik",
          "baslik": "Kutulamak ve kutudan çıkarmak",
          "xlabel": "",
          "ylabel": "",
          "xmax": 7,
          "ymax": 5.5,
          "ogeler": [
            {
              "id": "a",
              "tip": "alan",
              "renk": 0,
              "noktalar": [
                [
                  0.5,
                  3
                ],
                [
                  1.5,
                  3
                ],
                [
                  1.5,
                  4.4
                ],
                [
                  0.5,
                  4.4
                ]
              ]
            },
            {
              "id": "av",
              "tip": "yazi",
              "x": 1,
              "y": 3.55,
              "metin": "5"
            },
            {
              "id": "al",
              "tip": "yazi",
              "x": 1,
              "y": 4.9,
              "metin": "a (int)"
            },
            {
              "id": "b",
              "tip": "alan",
              "renk": 3,
              "noktalar": [
                [
                  2.5,
                  3
                ],
                [
                  3.4,
                  3
                ],
                [
                  3.4,
                  4.4
                ],
                [
                  2.5,
                  4.4
                ]
              ],
              "gizli": true
            },
            {
              "id": "bl",
              "tip": "yazi",
              "x": 2.95,
              "y": 4.9,
              "metin": "b",
              "gizli": true
            },
            {
              "id": "ar",
              "tip": "ok",
              "from": [
                3.4,
                3.7
              ],
              "to": [
                4.3,
                3.7
              ],
              "gizli": true
            },
            {
              "id": "o",
              "tip": "alan",
              "renk": 1,
              "noktalar": [
                [
                  4.3,
                  2.6
                ],
                [
                  6.3,
                  2.6
                ],
                [
                  6.3,
                  4.6
                ],
                [
                  4.3,
                  4.6
                ]
              ],
              "gizli": true
            },
            {
              "id": "ov",
              "tip": "yazi",
              "x": 5.3,
              "y": 3.55,
              "metin": "5",
              "gizli": true
            },
            {
              "id": "ol",
              "tip": "yazi",
              "x": 5.3,
              "y": 4.9,
              "metin": "Integer nesnesi",
              "gizli": true
            },
            {
              "id": "d",
              "tip": "alan",
              "renk": 2,
              "noktalar": [
                [
                  0.5,
                  0.6
                ],
                [
                  1.5,
                  0.6
                ],
                [
                  1.5,
                  2
                ],
                [
                  0.5,
                  2
                ]
              ],
              "gizli": true
            },
            {
              "id": "dv",
              "tip": "yazi",
              "x": 1,
              "y": 1.15,
              "metin": "6",
              "gizli": true
            },
            {
              "id": "dl",
              "tip": "yazi",
              "x": 1.7,
              "y": 0.3,
              "metin": "d (int)",
              "hiza": "start",
              "gizli": true
            },
            {
              "id": "ar2",
              "tip": "ok",
              "from": [
                4.5,
                2.5
              ],
              "to": [
                1.7,
                1.5
              ],
              "gizli": true
            }
          ],
          "durumlar": [
            {
              "metin": "int a = 5; ilkel değişken: kutuda değerin kendisi var."
            },
            {
              "metin": "Integer b = a; Java 5'i bir Integer nesnesine sarar (==autoboxing==). b nesneye giden bir ok tutar.",
              "goster": [
                "b",
                "bl",
                "ar",
                "o",
                "ov",
                "ol"
              ]
            },
            {
              "metin": "int d = b + 1; Java nesnenin içinden 5'i çıkarır (==unboxing==), 1 ekler: d = 6.",
              "goster": [
                "d",
                "dv",
                "dl",
                "ar2"
              ]
            }
          ]
        },
        {
          "tip": "ikili",
          "sol": {
            "ikon": "✅",
            "baslik": "Derlenir",
            "maddeler": [
              "Aynı türün sarılması",
              "Wrapper'ı ilkelle toplamak"
            ]
          },
          "sag": {
            "ikon": "🚫",
            "baslik": "Derlenmez",
            "maddeler": [
              "int'i Double'a kutulamak",
              "double'ı Integer'a kutulamak"
            ]
          },
          "oyun": [
            {
              "metin": "Integer x = 5;",
              "cevap": "sol",
              "neden": "int değer Integer'a kutulanır."
            },
            {
              "metin": "Double y = 5;",
              "cevap": "sag",
              "neden": "int, Double'a kutulanamaz; 5.0 yazmalısın."
            },
            {
              "metin": "double z = 5;",
              "cevap": "sol",
              "neden": "İlkel int, ilkel double'a otomatik genişler."
            },
            {
              "metin": "Integer w = 5.0;",
              "cevap": "sag",
              "neden": "double değer Integer'a kutulanamaz."
            },
            {
              "metin": "Double v = 5.0;",
              "cevap": "sol",
              "neden": "double değer Double'a kutulanır."
            }
          ]
        },
        {
          "tip": "tuzak",
          "metin": "Unboxing, nesnenin içindeki değeri çıkarmaktır. İçinde nesne yoksa (null) çıkarılacak bir şey de yoktur.",
          "yanlis": "Integer s = null; int t = s; satırı t'ye 0 verir.",
          "dogru": "Derlenir ama çalışırken ==NullPointerException== fırlatır."
        }
      ]
    },
    {
      "baslik": "Değer metotları ve sabitler",
      "kisa": "intValue ve doubleValue içindeki değeri geri verir; MAX_VALUE ve MIN_VALUE sınırı gösterir.",
      "bloklar": [
        {
          "tip": "tablo",
          "baslik": "Integer ve Double'ın bilmen gereken üyeleri",
          "head": [
            "Üye",
            "Ne yapar?"
          ],
          "rows": [
            [
              "Integer.MAX_VALUE, Integer.MIN_VALUE",
              "En büyük ve en küçük int değeri (2147483647 ve −2147483648)"
            ],
            [
              "n.intValue()",
              "Integer n'nin içindeki int değeri verir"
            ],
            [
              "d.doubleValue()",
              "Double d'nin içindeki double değeri verir"
            ],
            [
              "n.toString(), d.toString()",
              "Değeri yazı olarak verir"
            ],
            [
              "Integer.parseInt(s), Double.parseDouble(s)",
              "Yazıyı sayıya çevirir (sonraki başlık)"
            ]
          ],
          "not": "new Integer(5) gibi eski yazım artık önerilmez; Integer n = 5; yeter."
        },
        {
          "tip": "kod",
          "baslik": "Değer metotları",
          "kod": "Integer n = 42;\nDouble d = 3.5;\nint a = n.intValue();\ndouble b = d.doubleValue();\nString s = n.toString();\nSystem.out.println(a + \" \" + b);\nSystem.out.println(s + d);",
          "vurgu": [
            3,
            4,
            5
          ],
          "cikti": "42 3.5\n423.5",
          "not": "Son satırda s bir yazıdır (\"42\"), bu yüzden + birleştirir ve d'nin yazısını ekler: 423.5."
        },
        {
          "tip": "kod",
          "baslik": "Sınırın bir ötesi",
          "kod": "int big = Integer.MAX_VALUE;\nint small = Integer.MIN_VALUE;\nSystem.out.println(big + 1 == small);",
          "vurgu": [
            3
          ],
          "cikti": "true",
          "not": "Taşma (*overflow*): en büyük int'e 1 eklenince en küçük int'e dönülür."
        }
      ]
    },
    {
      "baslik": "Yazıyı sayıya çevirmek: parseInt ve parseDouble",
      "kisa": "parseInt ve parseDouble yazıyı sayıya çevirir; uygun olmayan yazıda hata verir.",
      "bloklar": [
        {
          "tip": "kod",
          "baslik": "Yazı mı, sayı mı?",
          "kod": "String a = \"42\";\nString b = \"3.5\";\nint x = Integer.parseInt(a);\ndouble y = Double.parseDouble(b);\nSystem.out.println(x + 1);\nSystem.out.println(a + 1);\nSystem.out.println(y * 2);",
          "vurgu": [
            3,
            4
          ],
          "cikti": "43\n421\n7.0",
          "not": "x sayıdır: 42 + 1 = 43. a yazıdır: \"42\" + 1 birleşir ve \"421\" olur. y ∗ 2 ondalıklı kalır: 7.0."
        },
        {
          "tip": "tablo",
          "baslik": "Çağrı ve sonuç",
          "head": [
            "Çağrı",
            "Sonuç"
          ],
          "rows": [
            [
              "Integer.parseInt(\"17\")",
              "17"
            ],
            [
              "Integer.parseInt(\"-5\")",
              "−5"
            ],
            [
              "Double.parseDouble(\"2.50\")",
              "2.5"
            ],
            [
              "Double.parseDouble(\"3\")",
              "3.0"
            ],
            [
              "Integer.parseInt(\"3.5\")",
              "Çalışırken NumberFormatException"
            ],
            [
              "Integer.parseInt(\"12a\")",
              "Çalışırken NumberFormatException"
            ]
          ],
          "vurgu": 4
        },
        {
          "tip": "tuzak",
          "metin": "parseInt yalnızca tam sayı yazılarını kabul eder. Ondalıklı yazıyı kesmez, yuvarlamaz; reddeder.",
          "yanlis": "Integer.parseInt(\"3.5\") sonucu 3'tür.",
          "dogru": "==NumberFormatException== fırlar. Önce Double.parseDouble kullanıp (int) ile kes."
        }
      ]
    },
    {
      "baslik": "Wrapper karşılaştırmak: equals",
      "kisa": "İki wrapper nesnesini equals ile karşılaştır; iki eşittir adrese bakar.",
      "bloklar": [
        {
          "tip": "kod",
          "baslik": "Aynı değer, iki nesne",
          "kod": "Integer p = 1000;\nInteger q = 1000;\nSystem.out.println(p.equals(q));\nSystem.out.println(p > 500);",
          "vurgu": [
            3
          ],
          "cikti": "true\ntrue",
          "not": "equals iki nesnenin değerine bakar. > gibi işleci kullanınca Java nesnelerin içindeki sayıları çıkarır (unboxing)."
        },
        {
          "tip": "tablo",
          "baslik": "Integer p = 1000, q = 1000 için hangi karşılaştırma güvenli?",
          "head": [
            "İfade",
            "Ne yapar?",
            "Güvenli mi?"
          ],
          "rows": [
            [
              "p.equals(q)",
              "İçindeki değerleri karşılaştırır",
              "Evet"
            ],
            [
              "p ve q arasında iki eşittir",
              "İki ad aynı nesneye mi bakıyor diye bakar",
              "Hayır; sonuç değere göre değişebilir"
            ],
            [
              "p ile 1000 arasında iki eşittir",
              "Biri ilkel olduğu için p açılır, sayılar karşılaştırılır",
              "Evet (true)"
            ],
            [
              "p > q, p < q",
              "Sayısal karşılaştırma; nesneler açılır",
              "Evet"
            ]
          ],
          "vurgu": 0
        },
        {
          "tip": "tuzak",
          "metin": "İki wrapper arasında iki eşittir, değer yerine referans karşılaştırır; küçük sayılarda tesadüfen true, büyük sayılarda çoğu zaman false verir.",
          "yanlis": "p ve q 1000 ise p iki eşittir q her zaman true.",
          "dogru": "Değer için ==equals== kullan. String'de öğrendiğin kural aynen geçerli."
        }
      ]
    },
    {
      "baslik": "ArrayList<Integer>: wrapper'ın asıl işi",
      "kisa": "ArrayList ilkel tür almaz; Integer ve Double kullanılır, çevirme otomatiktir.",
      "bloklar": [
        {
          "tip": "kod",
          "baslik": "Notları listeye koy",
          "kod": "ArrayList<Integer> scores = new ArrayList<Integer>();\nscores.add(90);\nscores.add(75);\nint total = scores.get(0) + scores.get(1);\ndouble avg = total / 2.0;\nSystem.out.println(total + \" \" + avg);",
          "vurgu": [
            2,
            4
          ],
          "cikti": "165 82.5",
          "not": "add(90) sırasında 90 Integer'a kutulanır (autoboxing); get(0) + get(1) sırasında nesneler açılır (unboxing). total 165, avg 82.5."
        },
        {
          "tip": "tuzak",
          "metin": "Köşeli parantez içine ilkel tür yazılamaz.",
          "yanlis": "ArrayList<int> scores = new ArrayList<int>();",
          "dogru": "==Derlenmez.== Doğrusu ArrayList<Integer> (ondalıklar için ArrayList<Double>)."
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
            "Integer ve Double, int ve double'ı nesneye saran wrapper sınıflardır; nesne oldukları için null olabilirler.",
            "Autoboxing ilkeli wrapper'a, unboxing wrapper'ı ilkele otomatik çevirir.",
            "Double d = 5; derlenmez: int, Double'a kutulanmaz; 5.0 yazmalısın.",
            "null bir wrapper'ı açmak (unboxing) NullPointerException fırlatır.",
            "intValue ve doubleValue içindeki değeri verir; Integer.MAX_VALUE ve MIN_VALUE int sınırlarıdır.",
            "Integer.parseInt ve Double.parseDouble yazıyı sayıya çevirir; uygun olmayan yazıda NumberFormatException gelir.",
            "Wrapper'ları equals ile karşılaştır; iki eşittir referansa bakar.",
            "ArrayList ilkel tür tutamaz: ArrayList<Integer> yaz, çevirmeyi Java yapar."
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
        "code": "Integer a = 7;\nint b = 5;\nInteger c = a + b;\ndouble d = c / 5;\nSystem.out.println(d);"
      },
      "opts": [
        "2.0",
        "2.4",
        "2",
        "Derleme hatası"
      ],
      "a": 0,
      "why": "a + b = 12 ve c bir Integer'dır. c / 5 yapılırken c açılır ve 12 / 5 tam sayı bölmesiyle 2 olur; 2, double d değişkenine 2.0 olarak girer. \"2.4\" diyen, bölmenin ondalıklı olacağını sanmıştır; \"2\" ise double'ın 2.0 yazdırdığını unutmuştur."
    },
    {
      "q": "Aşağıdaki satırlardan hangisi derlenmez?",
      "opts": [
        "Integer x = 10;",
        "Double y = 10;",
        "double z = 10;",
        "Double w = 10.0;"
      ],
      "a": 1,
      "why": "int bir değer Double'a kutulanamaz; 10.0 yazılmalıdır. double z = 10; ise ilkel int'in ilkel double'a genişlemesidir ve derlenir. En çekici yanlış şık, z'dir: iki türde de 10 sayısı var, ama biri ilkel ve biri wrapper."
    },
    {
      "q": "Aşağıdaki kod çalışınca ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "String s = \"12\";\nString t = \"3\";\nint sum = Integer.parseInt(s) + Integer.parseInt(t);\nString joined = s + t;\nSystem.out.println(sum + \" \" + joined);"
      },
      "opts": [
        "15 15",
        "123 123",
        "15 123",
        "123 15"
      ],
      "a": 2,
      "why": "parseInt yazıları sayıya çevirir: 12 + 3 = 15. s + t ise iki yazıyı birleştirir: \"123\". Çıktı 15 123. \"15 15\" diyen, yazıların da toplandığını sanmıştır."
    },
    {
      "q": "Aşağıdaki kod çalışırsa ne olur?",
      "fig": {
        "type": "code",
        "code": "Integer score = null;\nSystem.out.println(\"başladı\");\nint s = score + 1;\nSystem.out.println(\"bitti\");"
      },
      "opts": [
        "başladı ve bitti yazılır; s 1 olur.",
        "Kod derlenmez.",
        "başladı yazılır, sonra NullPointerException fırlar; bitti yazılmaz.",
        "Hiçbir şey yazılmaz; yalnızca NullPointerException fırlar."
      ],
      "a": 2,
      "why": "Kod derlenir. Birinci println çalışır, score + 1 için null açılmaya çalışılınca NullPointerException fırlar ve program durur. \"Hiçbir şey yazılmaz\" diyen, hatanın program başlamadan oluştuğunu sanmıştır; bu bir derleme hatası değil, çalışma anı hatasıdır."
    },
    {
      "q": "Aşağıdaki kod çalışınca ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "ArrayList<Integer> list = new ArrayList<Integer>();\nlist.add(4);\nlist.add(9);\nint x = list.get(0) + list.get(1);\ndouble y = x / 2;\nSystem.out.println(x + \" \" + y);"
      },
      "opts": [
        "13 6.5",
        "13 6",
        "Derleme hatası",
        "13 6.0"
      ],
      "a": 3,
      "why": "x = 4 + 9 = 13. x / 2 iki int'in bölmesidir: 6. Bu 6, double y değişkenine 6.0 olarak girer. \"13 6.5\" diyen, bölmenin double değişkene atandığı için ondalıklı olacağını sanmıştır; \"13 6\" ise double'ın 6.0 yazdırdığını unutmuştur."
    }
  ]
};
