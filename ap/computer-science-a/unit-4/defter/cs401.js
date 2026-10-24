/* Kitpath not defteri · cs401 · 4.1–4.2 Veri Toplamanın Etiği ve Veri Setleri
   Kaynak: AP CSA 2025–26 CED (Unit 4) öğrenme hedefleri; videosuz defter. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  "slug": "cs401",
  "amac": "Bu konu, programların topladığı verinin gizliliği nasıl tehdit ettiğini ve bir veri setinin kodla nasıl incelendiğini anlatıyor. Veri toplamanın etik risklerini, önyargılı veri tuzaklarını ve veri setinden program yoluyla bilgi çıkarmayı öğreneceksin.",
  "bolumler": [
    {
      "baslik": "Veri nasıl toplanır?",
      "kisa": "Veri ya doğrudan senden istenir ya da sen kullanırken arkada kaydedilir.",
      "bloklar": [
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "📝",
              "terim": "Direct collection",
              "tr": "doğrudan toplama",
              "tanim": "Kullanıcıdan bilgiyi bilerek vermesi istenir: form, anket, kayıt ekranı.",
              "ornek": "Kulüp başvurusunda e-posta adresini kendin yazarsın."
            },
            {
              "ikon": "🕵️",
              "terim": "Indirect collection",
              "tr": "dolaylı toplama",
              "tanim": "Uygulama ya da site, sen bir şey yazmadan kullanımını kaydeder: tıklamalar, konum, izleme süresi, *cookie*.",
              "ornek": "Müzik uygulaması hangi şarkıyı kaç saniye dinlediğini tutar."
            }
          ]
        },
        {
          "tip": "ikili",
          "sol": {
            "ikon": "📝",
            "baslik": "Doğrudan toplama",
            "maddeler": [
              "Kullanıcı bilgiyi kendisi yazar",
              "Ne verdiğinin farkındadır"
            ]
          },
          "sag": {
            "ikon": "🕵️",
            "baslik": "Dolaylı toplama",
            "maddeler": [
              "Kullanım sırasında otomatik kaydedilir",
              "Kullanıcı çoğu zaman fark etmez"
            ]
          },
          "oyun": [
            {
              "metin": "Okul kayıt formuna e-posta adresini yazmak",
              "cevap": "sol",
              "neden": "Bilgiyi sen verdin."
            },
            {
              "metin": "Videoyu kaç saniye izlediğinin kaydedilmesi",
              "cevap": "sag",
              "neden": "Sen bir şey yazmadın, kullanım izlendi."
            },
            {
              "metin": "Telefonun konum geçmişini tutması",
              "cevap": "sag",
              "neden": "Arka planda otomatik toplanır."
            },
            {
              "metin": "Kantin anketinde yemeğe puan vermek",
              "cevap": "sol",
              "neden": "Görüşünü bilerek bildirdin."
            },
            {
              "metin": "Sitenin *cookie* ile gezdiğin sayfaları hatırlaması",
              "cevap": "sag",
              "neden": "Gezinme davranışı sessizce kaydedilir."
            }
          ]
        }
      ]
    },
    {
      "baslik": "Kişisel veri ve gizlilik riski",
      "kisa": "İsim silinse bile birkaç bilgi birleşince kişi yeniden tanınabilir.",
      "bloklar": [
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "🪪",
              "terim": "PII",
              "tr": "kişiyi tanıtan bilgi",
              "tanim": "*Personally identifiable information*: tek başına ya da başka bilgilerle birleşince bir kişiyi gösteren veri.",
              "ornek": "Ad soyad, telefon numarası, okul numarası, ev adresi."
            },
            {
              "ikon": "🔓",
              "terim": "Re-identification",
              "tr": "yeniden tanımlama",
              "tanim": "Adı silinmiş (anonim) görünen verinin, kalan alanlar birleştirilerek kime ait olduğunun bulunması.",
              "ornek": "Doğum günü, mahalle ve sınıf birlikte tek bir öğrenciyi gösterebilir."
            }
          ]
        },
        {
          "tip": "tablo",
          "baslik": "Bu bilgi kişiyi tek başına gösterir mi?",
          "head": [
            "Bilgi",
            "Tek başına tanıtır mı?",
            "Neden"
          ],
          "rows": [
            [
              "Okul numarası",
              "Evet",
              "Her öğrencinin numarası farklıdır."
            ],
            [
              "Telefon numarası",
              "Evet",
              "Genelde tek kişiye aittir."
            ],
            [
              "Sınıf seviyesi (ör. 10.)",
              "Hayır",
              "Yüzlerce öğrenci aynı seviyede."
            ],
            [
              "Doğum günü + mahalle + sınıf",
              "Birlikte evet",
              "Üçü birleşince çoğu zaman tek kişi kalır."
            ]
          ],
          "vurgu": 3
        },
        {
          "tip": "tuzak",
          "metin": "Ad sütununu silmek veriyi anonim yapmaz. Kalan alanlar yeterince özelse kişi yine bulunur.",
          "yanlis": "İsimler silindiyse kimse tanınamaz.",
          "dogru": "Birkaç alan birleşince kişi tanınabilir (*re-identification*); risk ==kalan alanların birleşiminden== gelir."
        }
      ]
    },
    {
      "baslik": "Toplayan kişinin sorumlulukları",
      "kisa": "Toplamadan önce neden, nerede saklanacak ve kim görecek diye sor.",
      "bloklar": [
        {
          "tip": "liste",
          "baslik": "Veri toplayan bir programcı neye dikkat eder?",
          "maddeler": [
            {
              "ikon": "🤝",
              "baslik": "Rıza (*consent*)",
              "metin": "Kullanıcı neyin toplandığını bilmeli ve kabul etmeli."
            },
            {
              "ikon": "✂️",
              "baslik": "En az veri",
              "metin": "Amaç için gerekmeyen bilgiyi hiç isteme."
            },
            {
              "ikon": "🔐",
              "baslik": "Güvenli saklama",
              "metin": "Sızıntı (*data breach*) olursa herkesin bilgisi açığa çıkar."
            },
            {
              "ikon": "📤",
              "baslik": "Paylaşım",
              "metin": "Verinin satılması ya da başkasına verilmesi baştan söylenmeli."
            }
          ]
        },
        {
          "tip": "ornek",
          "baslik": "Robotik kulübü başvuru formu",
          "durum": "Forma ad, sınıf, e-posta, ev adresi ve kimlik numarası alanı koymak istiyorsun. Hangilerini istersin?",
          "adimlar": [
            "Amaç: kulüp toplantısına çağırmak ve sınıf dengesini görmek.",
            "Ad ve e-posta gerekli: kişiye ulaşacaksın. Sınıf gerekli: dengeyi görmek için.",
            "Ev adresi ve kimlik numarası amaçla ilgisiz. İstemezsen sızıntıda da kaybedecek bir şey olmaz.",
            "Form açıklamasına verinin kimde kalacağını ve neden toplandığını yaz."
          ],
          "sonuc": "Ad, e-posta, sınıf. Gerisi toplanmaz."
        }
      ]
    },
    {
      "baslik": "Veri setindeki önyargı",
      "kisa": "Dengesiz toplanmış veri, yanlış ve haksız sonuçlar üretir.",
      "bloklar": [
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "⚖️",
              "terim": "Bias",
              "tr": "önyargı, yanlılık",
              "tanim": "Verinin gerçeği dengesiz yansıtması. Bazı gruplar fazla, bazıları hiç temsil edilmez.",
              "ornek": "Kantin anketini yalnızca 12. sınıflara yapmak."
            },
            {
              "ikon": "🧪",
              "terim": "Representative sample",
              "tr": "temsil eden örneklem",
              "tanim": "Tüm grubun yapısını küçük ölçekte yansıtan veri alt kümesi.",
              "ornek": "Her sınıf seviyesinden aynı oranda öğrenciye sormak."
            }
          ]
        },
        {
          "tip": "grafik",
          "baslik": "Kantin anketi: okul mu, ankete katılanlar mı?",
          "xlabel": "Sınıf seviyesi",
          "ylabel": "Pay",
          "xmax": 5,
          "ymax": 10,
          "xticks": [
            {
              "v": 1,
              "label": "9."
            },
            {
              "v": 2,
              "label": "10."
            },
            {
              "v": 3,
              "label": "11."
            },
            {
              "v": 4,
              "label": "12."
            }
          ],
          "yticks": [
            {
              "v": 2.5,
              "label": "25%"
            },
            {
              "v": 5,
              "label": "50%"
            },
            {
              "v": 10,
              "label": "100%"
            }
          ],
          "ogeler": [
            {
              "id": "b1",
              "tip": "alan",
              "renk": 1,
              "noktalar": [
                [
                  0.65,
                  0
                ],
                [
                  1.35,
                  0
                ],
                [
                  1.35,
                  2.5
                ],
                [
                  0.65,
                  2.5
                ]
              ]
            },
            {
              "id": "b2",
              "tip": "alan",
              "renk": 1,
              "noktalar": [
                [
                  1.65,
                  0
                ],
                [
                  2.35,
                  0
                ],
                [
                  2.35,
                  2.5
                ],
                [
                  1.65,
                  2.5
                ]
              ]
            },
            {
              "id": "b3",
              "tip": "alan",
              "renk": 1,
              "noktalar": [
                [
                  2.65,
                  0
                ],
                [
                  3.35,
                  0
                ],
                [
                  3.35,
                  2.5
                ],
                [
                  2.65,
                  2.5
                ]
              ]
            },
            {
              "id": "b4",
              "tip": "alan",
              "renk": 1,
              "noktalar": [
                [
                  3.65,
                  0
                ],
                [
                  4.35,
                  0
                ],
                [
                  4.35,
                  2.5
                ],
                [
                  3.65,
                  2.5
                ]
              ]
            },
            {
              "id": "t1",
              "tip": "yazi",
              "x": 1,
              "y": 3.1,
              "metin": "25%"
            },
            {
              "id": "t2",
              "tip": "yazi",
              "x": 2,
              "y": 3.1,
              "metin": "25%"
            },
            {
              "id": "t3",
              "tip": "yazi",
              "x": 3,
              "y": 3.1,
              "metin": "25%"
            },
            {
              "id": "t4",
              "tip": "yazi",
              "x": 4,
              "y": 3.1,
              "metin": "25%"
            },
            {
              "id": "ref",
              "tip": "cizgi",
              "renk": 0,
              "kesik": true,
              "from": [
                0,
                2.5
              ],
              "to": [
                5,
                2.5
              ],
              "etiket": "gerçek pay",
              "gizli": true
            }
          ],
          "durumlar": [
            {
              "metin": "Okulda her sınıf seviyesinde 100 öğrenci var: her seviye %25."
            },
            {
              "metin": "Anket 12. sınıfların ağırlıkta olduğu kuyrukta yapıldı. 20 katılımcının dağılımı:",
              "set": {
                "b1": {
                  "noktalar": [
                    [
                      0.65,
                      0
                    ],
                    [
                      1.35,
                      0
                    ],
                    [
                      1.35,
                      0
                    ],
                    [
                      0.65,
                      0
                    ]
                  ]
                },
                "b2": {
                  "noktalar": [
                    [
                      1.65,
                      0
                    ],
                    [
                      2.35,
                      0
                    ],
                    [
                      2.35,
                      1
                    ],
                    [
                      1.65,
                      1
                    ]
                  ]
                },
                "b3": {
                  "noktalar": [
                    [
                      2.65,
                      0
                    ],
                    [
                      3.35,
                      0
                    ],
                    [
                      3.35,
                      3
                    ],
                    [
                      2.65,
                      3
                    ]
                  ]
                },
                "b4": {
                  "noktalar": [
                    [
                      3.65,
                      0
                    ],
                    [
                      4.35,
                      0
                    ],
                    [
                      4.35,
                      6
                    ],
                    [
                      3.65,
                      6
                    ]
                  ]
                },
                "t1": {
                  "y": 0.6,
                  "metin": "0%"
                },
                "t2": {
                  "y": 1.6,
                  "metin": "10%"
                },
                "t3": {
                  "y": 3.6,
                  "metin": "30%"
                },
                "t4": {
                  "y": 6.6,
                  "metin": "60%"
                }
              }
            },
            {
              "metin": "Kesikli çizgi okuldaki gerçek payı (%25) gösterir. 12. sınıf ankette ==%60==: sonuç okulun görüşü olarak okunamaz.",
              "goster": [
                "ref"
              ]
            }
          ]
        },
        {
          "tip": "tuzak",
          "metin": "Sonucu bir program hesapladı diye tarafsız olmaz. Program, ona verdiğin veriyi aynen işler.",
          "yanlis": "Hesabı bilgisayar yaptıysa sonuç önyargısızdır.",
          "dogru": "Veri dengesizse sonuç da dengesizdir; ==örneklemin kimi dışarıda bıraktığına== bak."
        }
      ]
    },
    {
      "baslik": "Veri seti, kayıt ve alan",
      "kisa": "Veri seti kayıtlardan oluşur; program onu dolaşıp bilgi çıkarır.",
      "bloklar": [
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "🗂️",
              "terim": "Data set",
              "tr": "veri seti",
              "tanim": "Aynı konudaki verilerin toplandığı koleksiyon. Dizide, *ArrayList*'te ya da metin dosyasında tutulabilir.",
              "ornek": "6 öğrencinin günlük adım sayıları."
            },
            {
              "ikon": "🧾",
              "terim": "Record / attribute",
              "tr": "kayıt / özellik",
              "tanim": "Kayıt bir kişiye ya da olaya ait satırdır; özellik o satırdaki bir bilgidir.",
              "ornek": "Elif satırı bir kayıt, adım sayısı onun bir özelliği."
            }
          ]
        },
        {
          "tip": "tablo",
          "baslik": "Küçük bir veri seti (adım sayısı bin adım)",
          "head": [
            "Ad",
            "Sınıf",
            "Adım",
            "Uyku (saat)"
          ],
          "rows": [
            [
              "Elif",
              "10",
              "9",
              "7"
            ],
            [
              "Can",
              "11",
              "4",
              "6"
            ],
            [
              "Deniz",
              "10",
              "12",
              "8"
            ],
            [
              "Ece",
              "12",
              "7",
              "5"
            ],
            [
              "Mert",
              "11",
              "10",
              "7"
            ],
            [
              "Ayşe",
              "9",
              "6",
              "9"
            ]
          ],
          "not": "Toplam adım 48 bin, ortalama 8 bin. 8 bin ve üstü yürüyen üç kişi var."
        },
        {
          "tip": "kod",
          "baslik": "Programla say: kaç kişi 8 bin adım ve üstü?",
          "kod": "int[] steps = {9, 4, 12, 7, 10, 6};\nint count = 0;\nfor (int s : steps)\n{\n    if (s >= 8)\n    {\n        count++;\n    }\n}\nSystem.out.println(count);",
          "vurgu": [
            5,
            7
          ],
          "cikti": "3",
          "not": "Dolaşırken yalnızca 9, 12 ve 10 koşulu sağlar: count 1, 2, 3 olur."
        }
      ]
    },
    {
      "baslik": "Veriden sonuç çıkarmak ve sınırları",
      "kisa": "Desen bulmak kolay; sebebini kanıtlamak için daha fazla kanıt gerekir.",
      "bloklar": [
        {
          "tip": "adimlar",
          "baslik": "Veri analizinin dört adımı",
          "adimlar": [
            {
              "baslik": "Soruyu seç",
              "metin": "\"Kaç kişi günde 8 bin adım atıyor?\" gibi net bir soru."
            },
            {
              "baslik": "Veriyi temizle",
              "metin": "Eksik ya da imkânsız kayıtları (ör. eksi adım sayısı) düzelt ya da çıkar."
            },
            {
              "baslik": "Kodla hesapla",
              "metin": "Dolaş; topla, say, en büyüğü bul."
            },
            {
              "baslik": "Yorumla ve sınırını söyle",
              "metin": "Veri kimi temsil ediyor, neyi kanıtlamıyor?"
            }
          ]
        },
        {
          "tip": "tuzak",
          "metin": "İki şey birlikte artıyor diye biri ötekinin nedeni olmaz. Dondurma ve güneş kremi satışı yazın birlikte artar; ortak neden sıcak havadır.",
          "yanlis": "Dondurma satışı arttı, güneş kremi satışı da arttı: dondurma krem satışını artırıyor.",
          "dogru": "Veri bir ==ilişkiyi== gösterir; ==nedeni== göstermez. Sebep için ek kanıt gerekir."
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
            "Veri doğrudan (kullanıcı verir) ya da dolaylı (kullanım kaydedilir) toplanır.",
            "*PII* bir kişiyi gösteren bilgidir; ad silinse bile alanlar birleşince *re-identification* mümkündür.",
            "Toplayan kişi rıza, en az veri, güvenli saklama ve paylaşım konularından sorumludur.",
            "Dengesiz toplanmış veri *bias* taşır; küçük ya da tek gruptan örneklem tüm grubu temsil etmez.",
            "Veri seti kayıtlardan oluşur; dizide, *ArrayList*'te ya da dosyada tutulur.",
            "Program veri setini dolaşıp toplar, sayar, en büyüğü bulur; sonucu verinin sınırları içinde yorumla.",
            "İlişki nedensellik değildir."
          ]
        }
      ]
    }
  ],
  "sorular": [
    {
      "q": "Bir hava durumu uygulaması, kullanıcı hiçbir şey yazmadan konumunu her saat kaydediyor ve kayıtları bir reklam şirketine satıyor. Hangisi en doğru yorumdur?",
      "opts": [
        "Veri doğrudan toplanıyor, bu yüzden gizlilik riski yok.",
        "Veri dolaylı toplanıyor; kullanıcı bilgilendirilmediyse ya da kayıtlar satılıyorsa ciddi bir gizlilik riski var.",
        "Konum PII sayılmaz, bu yüzden paylaşmak sorun değildir.",
        "Hava durumu uygulaması konum toplayamaz."
      ],
      "a": 1,
      "why": "Kullanıcı bir şey yazmadığı için toplama dolaylıdır. Konum geçmişi kişinin evini ve rutinini gösterir; bilgisi olmadan satılması gizlilik riskidir. \"Doğrudan toplanıyor\" diyen, uygulamanın veriyi ücretsiz sunmasını izin sanmıştır."
    },
    {
      "q": "Bir okul \"anonim\" bir anket tablosunu yayımlıyor: ad sütunu silinmiş, ama doğum günü, mahalle ve sınıf duruyor. Hangisi doğrudur?",
      "opts": [
        "Ad yok, bu yüzden kimse tanınamaz.",
        "Yalnızca kimlik numarası bir kişiyi tanıtabilir.",
        "Alanlar birleşince tek bir kişi gösterilebilir; veri yeniden tanımlanabilir.",
        "Tabloda 100'den fazla satır varsa veri anonim sayılır."
      ],
      "a": 2,
      "why": "Doğum günü, mahalle ve sınıf birlikte çoğu zaman tek bir öğrenci bırakır; buna *re-identification* denir. \"Kimse tanınamaz\" diyen, anonimliği yalnızca isme bağlamıştır."
    },
    {
      "q": "Tabloya göre okulda her sınıf seviyesinde 100 öğrenci var. Anket sonucu \"okulun çoğu kantini seviyor\" diye duyurulursa en büyük sorun nedir?",
      "fig": {
        "type": "table",
        "head": [
          "Sınıf",
          "Okuldaki öğrenci",
          "Ankete katılan"
        ],
        "rows": [
          [
            "9.",
            100,
            0
          ],
          [
            "10.",
            100,
            2
          ],
          [
            "11.",
            100,
            6
          ],
          [
            "12.",
            100,
            12
          ]
        ],
        "caption": "Kantin anketi"
      },
      "opts": [
        "Katılımcılar 12. sınıfa ağırlıklı: örneklem okulu temsil etmiyor.",
        "Toplam katılımcı sayısı çift olduğu için sonuç geçersizdir.",
        "Tabloda hiç PII olmaması anketi geçersiz yapar.",
        "Anket yalnızca dolaylı toplama ile yapılabilir."
      ],
      "a": 0,
      "why": "20 katılımcının 12'si (%60) 12. sınıf, 9. sınıf hiç yok; oysa okulun %25'i 12. sınıf. Bu bir *bias* örneğidir. Katılımcı sayısının çift olmasının bununla ilgisi yoktur."
    },
    {
      "q": "Aşağıdaki kod çalışınca ekrana ne yazılır?",
      "fig": {
        "type": "code",
        "code": "int[] a = {5, 8, 12, 7, 9};\nint total = 0;\nfor (int x : a)\n{\n    if (x >= 8)\n    {\n        total += x;\n    }\n}\nSystem.out.println(total);"
      },
      "opts": [
        "41",
        "3",
        "12",
        "29"
      ],
      "a": 3,
      "why": "Yalnızca 8, 12 ve 9 koşulu sağlar: 8 + 12 + 9 = 29. \"41\" bütün elemanların toplamıdır (5 ve 7 de eklenmiş); \"3\" ise koşulu sağlayanların sayısıdır, toplamı değil."
    },
    {
      "q": "Bir okul verisinde, kütüphaneye sık giren öğrencilerin not ortalaması daha yüksek çıkıyor. Yalnızca bu veriden hangisi söylenebilir?",
      "opts": [
        "Kütüphaneye gitmek notları yükseltir.",
        "İki değişken arasında bir ilişki var; nedensellik bu veriyle tek başına kanıtlanmaz.",
        "Notu düşük öğrenciler okula gelmiyor.",
        "Veri seti hatalı toplanmıştır."
      ],
      "a": 1,
      "why": "Veri bir desen (ilişki) gösterir, nedeni göstermez; çalışkan öğrenciler hem kütüphaneye gidiyor hem de not alıyor olabilir. \"Notları yükseltir\" diyen, ilişkiyi neden sanmıştır."
    }
  ]
};
