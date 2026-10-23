/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/mc2N/questions.json) */
window.KIT = {
  "store": "macro-u2:v1:",
  "course": "Macroeconomics",
  "unitLabel": "Unit 2 — Economic Indicators and the Business Cycle",
  "episodes": [
    {
      "no": 1,
      "code": "2.1-1",
      "slug": "mc201",
      "title": "Ekonominin Çarkı: Circular Flow",
      "en": "The Circular Flow Model",
      "accent": "#F6B94A",
      "seconds": 254,
      "terms": [
        "Circular flow model",
        "Households",
        "Firms",
        "Product market",
        "Factor market",
        "Real flow",
        "Money flow",
        "Transfer payments",
        "Exports",
        "Imports",
        "Financial sector",
        "Investment"
      ],
      "questions": [
        {
          "q": "Küçük bir ada ekonomisinde bir yılda mal ve hizmetlere toplam 450 bin lira harcanıyor. Tabloda bu harcamalardan doğan gelirler var. Döngüsel akım modeline göre kâr ne kadardır?",
          "opts": [
            "50 bin lira",
            "90 bin lira",
            "110 bin lira",
            "450 bin lira"
          ],
          "a": 1,
          "why": "Harcanan her lira birinin geliridir: toplam gelir de 450 bin olmalı. 300 + 40 + 20 = 360; 450 − 360 = 90 bin lira kâr.",
          "fig": {
            "type": "table",
            "head": [
              "Gelir türü",
              "Bin lira"
            ],
            "rows": [
              [
                "Wages",
                "300"
              ],
              [
                "Rent",
                "40"
              ],
              [
                "Interest",
                "20"
              ],
              [
                "Profit",
                "?"
              ]
            ],
            "caption": "Ada ekonomisi · toplam harcama 450 bin lira"
          }
        },
        {
          "q": "Tablodaki satırlardan hangileri döngüsel akım modelindeki akışları doğru gösteriyor?",
          "opts": [
            "Yalnız 1",
            "1 ve 2",
            "1 ve 3",
            "Yalnız 4"
          ],
          "a": 0,
          "why": "Ücret, emeğin karşılığıdır; firmadan hane halkına gider (1 doğru). Tüketim harcaması hane halkından firmaya gider (2 yanlış). Emeği hane halkı satar; firmaya gider (3 yanlış). Mallar firmadan hane halkına gider (4 yanlış).",
          "fig": {
            "type": "table",
            "head": [
              "#",
              "Akış",
              "Nereden",
              "Nereye"
            ],
            "rows": [
              [
                "1",
                "Wages",
                "Firms",
                "Households"
              ],
              [
                "2",
                "Consumer spending",
                "Firms",
                "Households"
              ],
              [
                "3",
                "Labor",
                "Firms",
                "Households"
              ],
              [
                "4",
                "Goods and services",
                "Households",
                "Firms"
              ]
            ],
            "caption": "Dört akış"
          }
        },
        {
          "q": "Aşağıdakilerden hangisi bir *transfer payment*'tır?",
          "opts": [
            "Devletin bir devlet okulundaki öğretmene ödediği maaş",
            "Devletin bir müteahhide yaptırdığı köprü için ödediği para",
            "Devletin bir üniversite öğrencisine verdiği karşılıksız burs",
            "Devletin bir firmadan satın aldığı itfaiye aracı"
          ],
          "a": 2,
          "why": "Transfer ödemesinde karşılığında mal ya da hizmet alınmaz. Burs karşılıksızdır. Öğretmen maaşı emeğin, köprü ve itfaiye aracı ise mal ve hizmetin bedelidir; bunlar devlet satın almasıdır."
        },
        {
          "q": "Döngüsel akım modeliyle ilgili hangi ifade doğrudur?",
          "opts": [
            "*Product market*'te hane halkları satıcı, firmalar alıcıdır.",
            "*Factor market*'te firmalar alıcı, hane halkları satıcıdır.",
            "Para akışı ile mal ve emek akışı aynı yönde ilerler.",
            "İthalat, yurt içine para girmesini sağlar."
          ],
          "a": 1,
          "why": "Faktör piyasasında hane halkları emek, toprak, sermaye ve girişimcilik satar; firmalar bunları satın alır. Mal piyasasında roller tersinedir; para her zaman mal ve emeğin ters yönünde akar; ithalatta para yurt dışına çıkar."
        },
        {
          "q": "Selin harçlığından artırdığı 2 bin lirayı bankaya yatırıyor; banka bu parayı bir fırına kredi olarak veriyor ve fırın yeni bir hamur makinesi alıyor. Bu süreç modelde en iyi nasıl anlatılır?",
          "opts": [
            "Bir transfer ödemesi hane halkından devlete geçiyor.",
            "Bir ithalat ödemesi yurt dışına çıkıyor.",
            "Hane halkı faktör piyasasında emek satıyor.",
            "Tasarruf finans sektörüne gidiyor ve yatırım olarak geri dönüyor."
          ],
          "a": 3,
          "why": "Bankaya yatırılan para harcama akışından çıkan tasarruftur. Finans sektörü onu firmaya kredi olarak verir; firmanın yeni makine alması *investment*'tır ve para çembere geri döner."
        }
      ]
    },
    {
      "no": 2,
      "code": "2.1-2",
      "slug": "mc202",
      "title": "GDP Nedir, Ne Sayılmaz?",
      "en": "What Counts in GDP",
      "accent": "#2FD6B9",
      "seconds": 240,
      "terms": [
        "GDP",
        "Gross domestic product",
        "Market value",
        "Final goods and services",
        "Intermediate goods",
        "Double counting",
        "Value-added approach",
        "Domestic",
        "Used goods",
        "Financial transactions",
        "Transfer payments",
        "Non-market activities"
      ],
      "questions": [
        {
          "q": "Tablo bir ekmeğin üretim zincirini gösteriyor. Bu zincir yıl içinde GDP'ye ne kadar ekler?",
          "opts": [
            "40 lira",
            "150 lira",
            "190 lira",
            "280 lira"
          ],
          "a": 1,
          "why": "Yalnızca nihai mal, yani ekmek sayılır: 150 lira. Katma değerle de aynı sonuç: 40 + 50 + 60 = 150. Bütün satışları toplamak (280) çifte sayımdır.",
          "fig": {
            "type": "table",
            "head": [
              "Aşama",
              "Kime satılıyor",
              "Satış fiyatı (TL)"
            ],
            "rows": [
              [
                "Buğday",
                "Değirmene",
                "40"
              ],
              [
                "Un",
                "Fırına",
                "90"
              ],
              [
                "Ekmek",
                "Tüketiciye",
                "150"
              ]
            ],
            "caption": "Ekmeğin yolculuğu"
          }
        },
        {
          "q": "Tablodaki işlemlerin hepsi bu yıl Türkiye'de gerçekleşiyor. Bunlardan GDP'ye eklenen toplam tutar kaç liradır?",
          "opts": [
            "6.000 lira",
            "26.000 lira",
            "26.300 lira",
            "41.300 lira"
          ],
          "a": 1,
          "why": "Yeni bisiklet bu yıl üretildi: 6.000. Emlakçı komisyonu bu yıl üretilen bir hizmet: 20.000. İkinci el kitap, hisse senedi ve burs sayılmaz. Toplam 26.000 lira.",
          "fig": {
            "type": "table",
            "head": [
              "İşlem",
              "Tutar (TL)"
            ],
            "rows": [
              [
                "Bu yıl üretilen yeni bisikletin satışı",
                "6.000"
              ],
              [
                "İkinci el bir romanın satışı",
                "300"
              ],
              [
                "Eski bir evin satışında emlakçı komisyonu",
                "20.000"
              ],
              [
                "Bir öğrencinin hisse senedi alması",
                "10.000"
              ],
              [
                "Devletin verdiği karşılıksız burs",
                "5.000"
              ]
            ],
            "caption": "Bu yılın işlemleri"
          }
        },
        {
          "q": "Aşağıdakilerden hangisi bir *intermediate good*'dur?",
          "opts": [
            "Bir ailenin kahvaltı için marketten aldığı peynir",
            "Bir öğrencinin okula gitmek için aldığı otobüs bileti",
            "Bir pizzacının pizzalarında kullanmak için aldığı peynir",
            "Bir pizzacının dükkânı için aldığı yeni taş fırın"
          ],
          "a": 2,
          "why": "Pizzacının peyniri başka bir malın, pizzanın içine giriyor; ara maldır. Ailenin peyniri ve otobüs bileti son kullanıcıya gider. Taş fırın tükenmez, yıllarca kullanılır; sermaye malıdır ve nihai mal olarak yatırıma sayılır."
        },
        {
          "q": "Hangi ifade doğrudur?",
          "opts": [
            "Bir Türk firmasının Mısır'daki fabrikasında üretilen tişörtler Türkiye'nin GDP'sine girmez.",
            "Devletin ödediği işsizlik ödeneği, devlet harcaması olarak GDP'ye girer.",
            "Hisse senedi almak bir yatırım olduğu için GDP'ye eklenir.",
            "Evde pişirilen yemekler tahmini piyasa değeriyle GDP'ye eklenir."
          ],
          "a": 0,
          "why": "GDP'de önemli olan üretimin yeri: Mısır'da üretilen tişört Mısır'ın GDP'sidir. İşsizlik ödeneği bir *transfer payment*'tır; hisse senedi finansal işlemdir; ev yemeği piyasa dışıdır."
        },
        {
          "q": "Bir öğrenci GDP hesaplarken lastik fabrikasının otomobil fabrikasına sattığı lastikleri de, otomobillerin satış fiyatını da topluyor. Yaptığı hata nedir?",
          "opts": [
            "Yabancı firmaların üretimini hesaba katmıştır.",
            "Satılan otomobilleri *used goods* olarak saymıştır.",
            "Lastikleri *transfer payment* olarak saymıştır.",
            "Lastikler ara maldır; otomobilin fiyatında zaten var, iki kez saymıştır."
          ],
          "a": 3,
          "why": "Otomobil fabrikasına satılan lastik bir *intermediate good*'dur; değeri otomobilin fiyatının içindedir. İkisini de toplamak *double counting*'dir."
        }
      ]
    },
    {
      "no": 3,
      "code": "2.1-3",
      "slug": "mc203",
      "title": "GDP'yi Hesaplamak: C + I + G + Xn",
      "en": "Measuring GDP",
      "accent": "#58C9FF",
      "seconds": 255,
      "terms": [
        "Expenditure approach",
        "Consumption",
        "Investment",
        "Change in inventories",
        "New residential construction",
        "Government spending",
        "Transfer payments",
        "Net exports",
        "Exports",
        "Imports",
        "Income approach"
      ],
      "questions": [
        {
          "q": "Tablo bir ekonominin bir yıllık verilerini gösteriyor (milyar lira). Harcama yöntemiyle GDP kaç milyar liradır?",
          "opts": [
            "730",
            "750",
            "790",
            "820"
          ],
          "a": 0,
          "why": "I = 80 + 40 − 20 = 100 (stok azaldı, eksi yazılır). Xn = 70 − 90 = −20. GDP = 500 + 100 + 150 − 20 = 730. Transfer ödemeleri ve hisse senedi alımı sayılmaz.",
          "fig": {
            "type": "table",
            "head": [
              "Kalem",
              "Milyar TL"
            ],
            "rows": [
              [
                "Consumer spending",
                "500"
              ],
              [
                "New equipment purchases by firms",
                "80"
              ],
              [
                "New residential construction",
                "40"
              ],
              [
                "Change in inventories",
                "−20"
              ],
              [
                "Government purchases",
                "150"
              ],
              [
                "Transfer payments",
                "60"
              ],
              [
                "Purchases of stocks",
                "50"
              ],
              [
                "Exports",
                "70"
              ],
              [
                "Imports",
                "90"
              ]
            ],
            "caption": "Bir yıllık veriler"
          }
        },
        {
          "q": "Bir ülkenin GDP'si 1.000 milyar lira. Tablodaki verilere göre ithalat kaç milyar liradır?",
          "opts": [
            "30",
            "120",
            "150",
            "270"
          ],
          "a": 2,
          "why": "1.000 = 650 + 180 + 200 + Xn → Xn = −30. Xn = X − M → −30 = 120 − M → M = 150.",
          "fig": {
            "type": "table",
            "head": [
              "Kalem",
              "Milyar TL"
            ],
            "rows": [
              [
                "GDP",
                "1.000"
              ],
              [
                "C",
                "650"
              ],
              [
                "I",
                "180"
              ],
              [
                "G",
                "200"
              ],
              [
                "Exports",
                "120"
              ],
              [
                "Imports",
                "?"
              ]
            ],
            "caption": "Eksik kalem"
          }
        },
        {
          "q": "Aşağıdakilerden hangisi GDP'nin C bileşenine, yani *consumption*'a girer?",
          "opts": [
            "Bir yazılım firmasının yeni bilgisayarlar alması",
            "Devletin orduya yeni araçlar alması",
            "Türkiye'de dokunup Japonya'ya satılan bir halı",
            "Bir öğrencinin berberde saç kestirmesi"
          ],
          "a": 3,
          "why": "Hane halkının satın aldığı hizmet tüketimdir. Firmanın bilgisayarı I, devletin araçları G, Japonya'ya satılan halı ise ihracat, yani X'tir."
        },
        {
          "q": "Bir bisiklet firması 2026'da tanesi 10.000 lira olan 500 bisiklet üretiyor ve yıl sonuna kadar 450'sini satıyor. Bu firmanın 2026 GDP'sine katkısı nasıl kaydedilir?",
          "opts": [
            "Yalnızca satılanlar: 4,5 milyon lira C",
            "Toplam 5 milyon lira: 4,5 milyon C, 0,5 milyon I",
            "Toplam 5,5 milyon lira: üretim artı satış",
            "Yalnızca satılmayanlar: 0,5 milyon lira I"
          ],
          "a": 1,
          "why": "GDP üretimi ölçer: 500 × 10.000 = 5 milyon lira. Satılan 450 bisiklet tüketimde (4,5 milyon), depoda kalan 50 bisiklet stok artışı olarak yatırımda (0,5 milyon) sayılır."
        },
        {
          "q": "Hangi ifade doğrudur?",
          "opts": [
            "*Transfer payments*, G'nin bir parçası olarak GDP'ye eklenir.",
            "Bir ailenin hisse senedi alması I'ya girer.",
            "İthalat, C, I ve G'nin içinde saklı olan yurt dışı üretimini ayıklamak için çıkarılır.",
            "*Income approach* her zaman harcama yönteminden daha büyük bir sonuç verir."
          ],
          "a": 2,
          "why": "Yurt dışından alınan telefon C'nin içinde sayılmıştır ama Türkiye'de üretilmemiştir; M'yi çıkararak ayıklarız. Transferler ve hisse senedi GDP'ye girmez; harcama ve gelir yöntemi aynı sayıyı verir."
        }
      ]
    },
    {
      "no": 4,
      "code": "2.2",
      "slug": "mc204",
      "title": "GDP'nin Göremedikleri",
      "en": "Limitations of GDP",
      "accent": "#FF6F61",
      "seconds": 248,
      "terms": [
        "Limitations of GDP",
        "Non-market production",
        "Underground economy",
        "Leisure",
        "Quality improvements",
        "New goods",
        "Environmental costs",
        "Income distribution",
        "GDP per capita",
        "Standard of living"
      ],
      "questions": [
        {
          "q": "Tabloya göre ülkeleri kişi başına GDP'ye göre en yüksekten en düşüğe doğru sıralarsak hangisini buluruz?",
          "opts": [
            "X, Y, Z",
            "Y, X, Z",
            "Z, X, Y",
            "Z, Y, X"
          ],
          "a": 2,
          "why": "Kişi başına GDP = GDP ÷ nüfus. X: 600 milyar ÷ 30 milyon = 20.000; Y: 900 milyar ÷ 60 milyon = 15.000; Z: 300 milyar ÷ 10 milyon = 30.000. Sıra: Z, X, Y. En büyük toplam GDP Y'de olsa da kişi başına en düşük Y'dir.",
          "fig": {
            "type": "table",
            "head": [
              "Ülke",
              "GDP (milyar TL)",
              "Nüfus (milyon)"
            ],
            "rows": [
              [
                "X",
                "600",
                "30"
              ],
              [
                "Y",
                "900",
                "60"
              ],
              [
                "Z",
                "300",
                "10"
              ]
            ],
            "caption": "Üç ülke"
          }
        },
        {
          "q": "Tablodaki iki ülkenin kişi başına GDP'si aynı. Bu verilere göre en makul yorum hangisidir?",
          "opts": [
            "A'da yaşam kalitesi muhtemelen daha yüksek; GDP boş zamanı ve hava kirliliğini hesaba katmaz.",
            "Kişi başına GDP aynı olduğu için iki ülkede refah kesinlikle eşittir.",
            "B'de insanlar daha çok çalıştığı için B'nin refahı kesinlikle daha yüksektir.",
            "B'nin GDP'si kirlilik yüzünden daha düşük hesaplanmıştır."
          ],
          "a": 0,
          "why": "Aynı üretim A'da daha az çalışma saatiyle ve daha temiz havayla elde ediliyor. GDP boş zamanı ve çevre zararını görmediği için refahı tam ölçmez. Kirlilik GDP'den düşülmez.",
          "fig": {
            "type": "table",
            "head": [
              "",
              "A ülkesi",
              "B ülkesi"
            ],
            "rows": [
              [
                "Kişi başına GDP (TL)",
                "25.000",
                "25.000"
              ],
              [
                "Haftalık çalışma saati",
                "38",
                "52"
              ],
              [
                "Hava kirliliği",
                "Düşük",
                "Yüksek"
              ]
            ],
            "caption": "Aynı GDP, farklı hayatlar"
          }
        },
        {
          "q": "Aşağıdakilerden hangisi GDP'yi artırır ama halkın refahını artırmaz?",
          "opts": [
            "Bir annenin evde ailesine yemek pişirmesi",
            "Bir fabrikanın kirlettiği gölün parayla temizletilmesi",
            "Gönüllülerin hafta sonu sahil temizlemesi",
            "Fişsiz yapılan bir boya badana işi"
          ],
          "a": 1,
          "why": "Temizlik şirketine ödenen para GDP'ye eklenir, ama göl yalnızca kirlenmeden önceki hâline döner. Diğer üç faaliyet piyasa dışı ya da kayıt dışı olduğu için GDP'ye hiç girmez."
        },
        {
          "q": "Bir aile, çocuğuna evde kendisi bakmayı bırakıp bir bakıcıya ayda 25 bin lira ödemeye başlıyor. Bakımın miktarı ve kalitesi aynı kalıyor. Ne olur?",
          "opts": [
            "GDP değişmez, çünkü bakım hizmeti aynı kaldı.",
            "GDP azalır, çünkü aile gelirinin bir kısmını harcadı.",
            "Ölçülen GDP ayda 25 bin lira azalır, çünkü ebeveyn emeği kayboldu.",
            "Ölçülen GDP ayda 25 bin lira artar, ama gerçek üretim değişmemiştir."
          ],
          "a": 3,
          "why": "Evdeki bakım piyasa dışıydı ve sayılmıyordu; bakıcıya ödenen maaş piyasa işlemi olduğu için sayılır. Üretilen bakım aynı, ölçülen GDP ise artar. Bu, piyasa dışı üretimin GDP'nin bir sınırı olduğunu gösterir."
        },
        {
          "q": "Hangi ifade doğrudur?",
          "opts": [
            "Kişi başına GDP, gelirin insanlar arasında nasıl dağıldığını gösterir.",
            "Bir ürünün kalitesi artarsa GDP de otomatik olarak aynı oranda artar.",
            "Kayıt dışı ekonomisi büyük bir ülkede resmî GDP, gerçek üretimi olduğundan düşük gösterir.",
            "Boş zamanın değeri tahmin edilerek GDP'ye eklenir."
          ],
          "a": 2,
          "why": "Kayıt dışı üretim resmî kayıtlara girmediği için ölçülen GDP gerçek üretimin altında kalır. Kişi başına GDP bir ortalamadır, dağılımı göstermez; kalite artışı ve boş zaman GDP'de tam yansımaz."
        }
      ]
    },
    {
      "no": 5,
      "code": "2.3-1",
      "slug": "mc205",
      "title": "İşsizliği Ölçmek",
      "en": "Measuring Unemployment",
      "accent": "#A98BFF",
      "seconds": 252,
      "terms": [
        "Adult population",
        "Employed",
        "Unemployed",
        "Labor force",
        "Not in the labor force",
        "Unemployment rate",
        "Labor force participation rate",
        "Discouraged workers",
        "Underemployment",
        "Part-time workers"
      ],
      "questions": [
        {
          "q": "Tablodaki verilere göre işsizlik oranı ve işgücüne katılma oranı kaçtır?",
          "opts": [
            "İşsizlik yüzde 3, katılma yüzde 60",
            "İşsizlik yüzde 5, katılma yüzde 60",
            "İşsizlik yüzde 5,3, katılma yüzde 57",
            "İşsizlik yüzde 5, katılma yüzde 40"
          ],
          "a": 1,
          "why": "İşgücü = 1.140 + 60 = 1.200. İşsizlik oranı = 60 ÷ 1.200 × 100 = yüzde 5. Katılma oranı = 1.200 ÷ 2.000 × 100 = yüzde 60.",
          "fig": {
            "type": "table",
            "head": [
              "Grup",
              "Kişi"
            ],
            "rows": [
              [
                "Adult population (16+)",
                "2.000"
              ],
              [
                "Employed",
                "1.140"
              ],
              [
                "Unemployed",
                "60"
              ],
              [
                "Not in labor force",
                "800"
              ]
            ],
            "caption": "Bir ilçenin işgücü verileri"
          }
        },
        {
          "q": "Başta 900 kişi çalışıyor, 100 kişi işsiz. Bir ay içinde işsizlerden 20'si iş buluyor, 30'u ise umudunu kesip iş aramayı bırakıyor. Yeni işsizlik oranı yaklaşık kaçtır?",
          "opts": [
            "Yüzde 5",
            "Yüzde 5,2",
            "Yüzde 7,2",
            "Yüzde 10"
          ],
          "a": 1,
          "why": "Çalışan 920, işsiz 100 − 20 − 30 = 50. Umutsuz 30 kişi işgücünden çıkar: işgücü 920 + 50 = 970. Oran = 50 ÷ 970 × 100 ≈ yüzde 5,2 (başta yüzde 10'du).",
          "fig": {
            "type": "table",
            "head": [
              "",
              "Başta",
              "Bir ay sonra"
            ],
            "rows": [
              [
                "Employed",
                "900",
                "?"
              ],
              [
                "Unemployed",
                "100",
                "?"
              ],
              [
                "İş bulan",
                "",
                "20"
              ],
              [
                "Aramayı bırakan",
                "",
                "30"
              ]
            ],
            "caption": "Bir aylık değişim"
          }
        },
        {
          "q": "ABD tanımına göre aşağıdakilerden hangisi *unemployed* sayılır?",
          "opts": [
            "Bir yıl iş aradıktan sonra aramayı bırakan 40 yaşında bir muhasebeci",
            "Haftada 8 saat çalışan ama tam zamanlı iş isteyen bir garson",
            "Lokantası kapandığı için iki haftadır iş görüşmelerine giden bir aşçı",
            "İş aramayan, tam zamanlı bir üniversite öğrencisi"
          ],
          "a": 2,
          "why": "Aşçının işi yok, çalışmaya hazır ve son dört haftada aktif olarak iş arıyor. Muhasebeci *discouraged*, öğrenci iş aramıyor; ikisi de işgücü dışında. Garson yarı zamanlı da olsa *employed* sayılır."
        },
        {
          "q": "Uzun süren bir durgunlukta birçok işsiz umudunu kesip iş aramayı bırakıyor. Başka hiçbir şey değişmezse resmî işsizlik oranı ve işgücüne katılma oranı ne olur?",
          "opts": [
            "İşsizlik oranı artar, katılma oranı azalır",
            "İşsizlik oranı değişmez, katılma oranı azalır",
            "İşsizlik oranı azalır, katılma oranı değişmez",
            "İşsizlik oranı azalır, katılma oranı da azalır"
          ],
          "a": 3,
          "why": "Umutsuz işçiler hem işsizlerden hem işgücünden çıkar. Pay ve payda aynı sayıda azalır; pay paydadan çok küçük olduğu için işsizlik oranı düşer, örneğin 100 ÷ 1.000 yerine 70 ÷ 970; işgücü küçülürken yetişkin nüfus aynı kaldığı için katılma oranı da düşer."
        },
        {
          "q": "Hangi ifade doğrudur?",
          "opts": [
            "Yarı zamanlı çalışanlar, tam zamanlı iş isteseler bile resmî istatistikte *employed* sayılır.",
            "İşsizlik oranı, işsizlerin toplam nüfusa bölünmesiyle bulunur.",
            "Emekliler iş aramasalar da *unemployed* sayılır.",
            "*Labor force participation rate*, çalışanların işgücüne oranıdır."
          ],
          "a": 0,
          "why": "Geçen hafta parayla çalışan herkes *employed*'dır; bu yüzden *underemployment* resmî orana yansımaz. İşsizlik oranının paydası işgücüdür; emekliler işgücü dışındadır; katılma oranı işgücünün yetişkin nüfusa oranıdır."
        }
      ]
    },
    {
      "no": 6,
      "code": "2.3-2",
      "slug": "mc206",
      "title": "İşsizliğin Türleri ve Doğal Oran",
      "en": "Types of Unemployment",
      "accent": "#B9E552",
      "seconds": 264,
      "terms": [
        "Frictional unemployment",
        "Structural unemployment",
        "Seasonal unemployment",
        "Cyclical unemployment",
        "Natural rate of unemployment",
        "Full employment",
        "Actual unemployment rate",
        "Recession",
        "Production possibilities curve"
      ],
      "questions": [
        {
          "q": "Tablo 1.000 kişilik bir işgücündeki işsizleri türlerine göre gösteriyor. Doğal işsizlik oranı ve *cyclical* işsizlik oranı kaçtır?",
          "opts": [
            "Yüzde 3 ve yüzde 5",
            "Yüzde 8 ve yüzde 3",
            "Yüzde 5 ve yüzde 3",
            "Yüzde 5 ve yüzde 8"
          ],
          "a": 2,
          "why": "Gerçek oran = 80 ÷ 1.000 = yüzde 8. Doğal oran = *frictional* + *structural* = (20 + 30) ÷ 1.000 = yüzde 5. *Cyclical* = 8 − 5 = yüzde 3.",
          "fig": {
            "type": "table",
            "head": [
              "Tür",
              "Kişi"
            ],
            "rows": [
              [
                "Frictional",
                "20"
              ],
              [
                "Structural",
                "30"
              ],
              [
                "Cyclical",
                "30"
              ],
              [
                "Labor force",
                "1.000"
              ]
            ],
            "caption": "İşsizlerin türlere göre dağılımı"
          }
        },
        {
          "q": "Grafikteki noktalardan hangisi *cyclical* işsizliğin olduğu bir ekonomiyi gösterir?",
          "opts": [
            "Yalnız A",
            "Yalnız B",
            "A ve B",
            "Yalnız C"
          ],
          "a": 0,
          "why": "A eğrinin içinde: kaynaklar tam kullanılmıyor, yani *cyclical* işsizlik var. B eğrinin üzerinde: ekonomi tam istihdamda, yalnızca doğal işsizlik var. C mevcut kaynaklarla ulaşılamaz.",
          "fig": {
            "type": "graph",
            "xlabel": "Cars",
            "ylabel": "Food",
            "xmax": 10,
            "ymax": 10,
            "ppc": [
              {
                "qmax": 8,
                "pmax": 8,
                "k": 2,
                "label": "PPC"
              }
            ],
            "points": [
              {
                "q": 3,
                "p": 3,
                "label": "A"
              },
              {
                "q": 5,
                "p": 6.24,
                "label": "B"
              },
              {
                "q": 7,
                "p": 6,
                "label": "C"
              }
            ]
          }
        },
        {
          "q": "Aşağıdakilerden hangisi *frictional unemployment* örneğidir?",
          "opts": [
            "Durgunlukta konut satışları düşünce işten çıkarılan bir inşaat işçisi",
            "Kömür madenleri kapanınca işsiz kalan ve başka beceri bilmeyen bir madenci",
            "Daha iyi bir iş bulmak için istifa edip iş görüşmelerine giden bir yazılımcı",
            "Yerini self-servis kasalar alan bir market kasiyeri"
          ],
          "a": 2,
          "why": "Yazılımcının becerisi aranıyor; sadece doğru işe geçiş yapıyor, bu geçiş işsizliğidir. İnşaat işçisi durgunluktan, yani *cyclical*; madenci ve kasiyer beceri uyuşmazlığından, yani *structural* işsiz."
        },
        {
          "q": "Hangi ifade doğrudur?",
          "opts": [
            "Ekonomi tam istihdamdayken işsizlik oranı sıfırdır.",
            "*Cyclical* işsizlik hiçbir zaman eksi değere inemez.",
            "Doğal işsizlik oranı zaman içinde hiç değişmez.",
            "Ekonomi tam istihdamdayken gerçek işsizlik oranı doğal orana eşittir."
          ],
          "a": 3,
          "why": "Tam istihdamda yalnızca *frictional* ve *structural* işsizlik kalır, yani gerçek oran doğal orana eşittir; sıfır değildir. Aşırı ısınan ekonomide gerçek oran doğal oranın altına iner ve *cyclical* işsizlik eksi olur. Doğal oran teknoloji ve demografiyle değişebilir."
        },
        {
          "q": "Aşağıdakilerden hangisi doğal işsizlik oranını düşürür?",
          "opts": [
            "Pek çok mesleği hızla eskiten bir otomasyon dalgası",
            "İş arayanları uygun işverenlerle çok daha hızlı eşleştiren bir çevrim içi platform",
            "Talebin düştüğü ve firmaların işçi çıkardığı bir durgunluk",
            "İşgücüne bir anda çok sayıda yeni mezunun katılması"
          ],
          "a": 1,
          "why": "Daha hızlı eşleşme arama süresini kısaltır, *frictional* işsizliği ve dolayısıyla doğal oranı düşürür. Otomasyon *structural* işsizliği, yeni mezun dalgası *frictional* işsizliği artırır; durgunluk ise doğal oranı değil *cyclical* işsizliği artırır."
        }
      ]
    },
    {
      "no": 7,
      "code": "2.4",
      "slug": "mc207",
      "title": "Fiyat Endeksleri ve Enflasyon",
      "en": "Price Indices and Inflation",
      "accent": "#FF7DB8",
      "seconds": 281,
      "terms": [
        "Inflation",
        "Deflation",
        "Disinflation",
        "Price level",
        "Market basket",
        "Consumer price index (CPI)",
        "Base year",
        "Inflation rate",
        "Substitution bias",
        "Quality improvements"
      ],
      "questions": [
        {
          "q": "Tablo bir kırtasiye sepetinin fiyatlarını gösteriyor; temel yıl 2023. 2025 yılının *CPI*'ı kaçtır?",
          "opts": [
            "40",
            "140",
            "280",
            "980"
          ],
          "a": 1,
          "why": "2023 sepeti: 4 × 50 + 10 × 10 + 1 × 400 = 700. 2025 sepeti: 4 × 70 + 10 × 14 + 1 × 560 = 980. *CPI* = 980 ÷ 700 × 100 = 140.",
          "fig": {
            "type": "table",
            "head": [
              "Ürün",
              "Miktar",
              "2023 fiyatı (TL)",
              "2025 fiyatı (TL)"
            ],
            "rows": [
              [
                "Defter",
                "4",
                "50",
                "70"
              ],
              [
                "Kalem",
                "10",
                "10",
                "14"
              ],
              [
                "Çanta",
                "1",
                "400",
                "560"
              ]
            ],
            "caption": "Kırtasiye sepeti · base year 2023"
          }
        },
        {
          "q": "Tabloya göre 2024'ten 2025'e enflasyon oranı kaçtır?",
          "opts": [
            "Yüzde 10",
            "Yüzde 12",
            "Yüzde 32",
            "Yüzde 42"
          ],
          "a": 0,
          "why": "Enflasyon oranı = (132 − 120) ÷ 120 × 100 = yüzde 10. Farkı (12) doğrudan yüzde saymak ya da temel yıla göre 32 demek yaygın hatalardır.",
          "fig": {
            "type": "table",
            "head": [
              "Yıl",
              "CPI"
            ],
            "rows": [
              [
                "2022",
                "90"
              ],
              [
                "2023",
                "100"
              ],
              [
                "2024",
                "120"
              ],
              [
                "2025",
                "132"
              ]
            ],
            "caption": "Base year 2023"
          }
        },
        {
          "q": "Bir ülkede enflasyon oranı üç yıl boyunca yüzde 8, yüzde 5 ve yüzde 3 oluyor. Bu dönemi en iyi hangisi anlatır?",
          "opts": [
            "Deflation: fiyat düzeyi düşüyor",
            "Fiyat düzeyi değişmiyor",
            "Enflasyon hızlanıyor",
            "Disinflation: fiyatlar artıyor ama daha yavaş"
          ],
          "a": 3,
          "why": "Oranların hepsi sıfırın üstünde, yani fiyat düzeyi her yıl artıyor; ama artış hızı düşüyor. Bu *disinflation*'dır. *Deflation* için oranın eksi olması gerekirdi."
        },
        {
          "q": "Kırmızı et çok pahalanınca aileler tavuğa yöneliyor, ama *CPI* sepeti hâlâ aynı miktarda kırmızı eti sayıyor. Bunun sonucu nedir?",
          "opts": [
            "*CPI* hayat pahalılığındaki artışı olduğundan küçük gösterir.",
            "*CPI* temel yılı otomatik olarak değiştirir.",
            "*CPI* hayat pahalılığındaki artışı olduğundan büyük gösterir.",
            "*CPI* bu değişimden hiç etkilenmez, çünkü sepet sabittir."
          ],
          "a": 2,
          "why": "Bu *substitution bias*'tır: insanlar pahalanan maldan kaçar, ama sabit sepet onları hâlâ pahalı malı alıyormuş gibi sayar. Bu yüzden *CPI* enflasyonu olduğundan büyük gösterir."
        },
        {
          "q": "Hangi ifade doğrudur?",
          "opts": [
            "*CPI* 130 ise o yılki enflasyon oranı yüzde 130'dur.",
            "*CPI*'ın 90 olduğu bir yılda fiyatlar temel yıldan yüzde 10 düşüktür.",
            "Yalnızca benzinin fiyatı artarsa bu kesinlikle enflasyondur.",
            "*Disinflation*, genel fiyat düzeyinin düşmesi demektir."
          ],
          "a": 1,
          "why": "*CPI* temel yıla göre bir endekstir: 90, fiyatların temel yılın yüzde 90'ı kadar, yani yüzde 10 düşük olduğunu söyler. 130 bir yüzde değil endekstir; enflasyon genel fiyat düzeyiyle ilgilidir; *disinflation* yavaşlama, *deflation* düşüştür."
        }
      ]
    },
    {
      "no": 8,
      "code": "2.5",
      "slug": "mc208",
      "title": "Enflasyon Kime Zarar Verir?",
      "en": "Costs of Inflation",
      "accent": "#5C8DFF",
      "seconds": 260,
      "terms": [
        "Purchasing power",
        "Nominal income",
        "Real income",
        "Unanticipated inflation",
        "Anticipated inflation",
        "Fixed income",
        "Nominal interest rate",
        "Real interest rate",
        "Menu costs",
        "Shoe-leather costs",
        "Hyperinflation"
      ],
      "questions": [
        {
          "q": "Tablo Mert'in iki yıllık maaşını ve *CPI*'ı gösteriyor. Mert'in real maaşı nasıl değişti?",
          "opts": [
            "Yüzde 20 arttı",
            "Yüzde 4 azaldı",
            "Yüzde 25 azaldı",
            "Değişmedi"
          ],
          "a": 1,
          "why": "Real maaş = nominal ÷ CPI × 100. 1. yıl: 30.000 ÷ 120 × 100 = 25.000; 2. yıl: 36.000 ÷ 150 × 100 = 24.000. Değişim (24.000 − 25.000) ÷ 25.000 = yüzde 4 azalış. Nominal maaş yüzde 20 artsa da fiyatlar yüzde 25 arttı.",
          "fig": {
            "type": "table",
            "head": [
              "Yıl",
              "Nominal maaş (TL)",
              "CPI"
            ],
            "rows": [
              [
                "1",
                "30.000",
                "120"
              ],
              [
                "2",
                "36.000",
                "150"
              ]
            ],
            "caption": "Mert'in maaşı"
          }
        },
        {
          "q": "Tablodaki üç krediden hangisinde borç veren, bir yıl sonunda satın alma gücü kaybeder?",
          "opts": [
            "Yalnız Kredi 1",
            "Yalnız Kredi 3",
            "Yalnız Kredi 2",
            "Kredi 1 ve Kredi 3"
          ],
          "a": 2,
          "why": "Real faiz = nominal faiz − enflasyon. Kredi 1: 12 − 8 = 4; Kredi 2: 20 − 25 = −5; Kredi 3: 5 − 2 = 3. Real faizin eksi olduğu tek kredi 2; orada borç veren kaybeder, borçlu kazanır.",
          "fig": {
            "type": "table",
            "head": [
              "Kredi",
              "Nominal faiz (%)",
              "Gerçekleşen enflasyon (%)"
            ],
            "rows": [
              [
                "1",
                "12",
                "8"
              ],
              [
                "2",
                "20",
                "25"
              ],
              [
                "3",
                "5",
                "2"
              ]
            ],
            "caption": "Üç kredi"
          }
        },
        {
          "q": "Beklenmedik bir enflasyon artışı aşağıdakilerden en çok hangisine zarar verir?",
          "opts": [
            "Yıllardır aynı tutarda, zamsız emekli maaşı alan biri",
            "Sabit faizli öğrenim kredisi kullanan bir öğrenci",
            "Maaşı her ay enflasyon oranında otomatik artan bir çalışan",
            "Sabit faizle borçlanmış bir firma"
          ],
          "a": 0,
          "why": "Sabit gelirlinin nominal geliri artmazken fiyatlar artar; real geliri düşer. Sabit faizli borçlular (öğrenci, firma) değeri düşmüş lirayla öder ve kazanır; enflasyona endeksli maaşın satın alma gücü korunur."
        },
        {
          "q": "Bir banka gelecek yıl enflasyonun yüzde 6 olacağını bekliyor ve verdiği kredilerden yüzde 4 real faiz kazanmak istiyor. Yaklaşık hangi nominal faizi istemelidir?",
          "opts": [
            "Yüzde 2",
            "Yüzde 4",
            "Yüzde 6",
            "Yüzde 10"
          ],
          "a": 3,
          "why": "Real faiz ≈ nominal faiz − beklenen enflasyon → nominal ≈ 4 + 6 = yüzde 10. Beklenen enflasyon bu şekilde sözleşmeye yazılır; bu yüzden asıl zararı beklenmeyen enflasyon verir."
        },
        {
          "q": "Enflasyonun çok yüksek olduğu bir dönemde insanlar maaşları yatar yatmaz bankaya, kuyumcuya ve döviz bürosuna koşuyor. Bu zaman ve emek kaybına ne denir?",
          "opts": [
            "*Menu costs*",
            "*Shoe-leather costs*",
            "*Substitution bias*",
            "*Disinflation*"
          ],
          "a": 1,
          "why": "Parayı elde tutmamak için harcanan zaman ve emek *shoe-leather costs*'tur. *Menu costs* fiyat etiketlerini ve menüleri değiştirmenin maliyetidir; *substitution bias* bir CPI ölçüm sorunudur; *disinflation* enflasyonun yavaşlamasıdır."
        }
      ]
    },
    {
      "no": 9,
      "code": "2.6",
      "slug": "mc209",
      "title": "Real ve Nominal GDP",
      "en": "Real vs Nominal GDP",
      "accent": "#F6B94A",
      "seconds": 275,
      "terms": [
        "Nominal GDP",
        "Real GDP",
        "Base year",
        "GDP deflator",
        "Price level",
        "Real GDP growth rate",
        "Real GDP per capita",
        "Consumer price index (CPI)"
      ],
      "questions": [
        {
          "q": "Tablo yalnızca kalem ve defter üreten bir ekonomiyi gösteriyor; temel yıl 2023. 2024'ün *real GDP*'si kaç liradır?",
          "opts": [
            "1.800",
            "2.080",
            "2.600",
            "3.250"
          ],
          "a": 1,
          "why": "Real GDP = 2024 miktarları × 2023 fiyatları: 110 × 8 + 60 × 20 = 880 + 1.200 = 2.080. 2.600 ise 2024 fiyatlarıyla hesaplanan *nominal GDP*'dir.",
          "fig": {
            "type": "table",
            "head": [
              "Yıl",
              "Kalem P",
              "Kalem Q",
              "Defter P",
              "Defter Q"
            ],
            "rows": [
              [
                "2023",
                "8",
                "100",
                "20",
                "50"
              ],
              [
                "2024",
                "10",
                "110",
                "25",
                "60"
              ]
            ],
            "caption": "Kalem–defter ekonomisi · base year 2023"
          }
        },
        {
          "q": "Aynı tabloya göre 2024'ün *GDP deflator*'ü kaçtır?",
          "opts": [
            "80",
            "100",
            "125",
            "144"
          ],
          "a": 2,
          "why": "Nominal 2024 = 110 × 10 + 60 × 25 = 2.600; real 2024 = 2.080. Deflator = 2.600 ÷ 2.080 × 100 = 125: fiyat düzeyi temel yıldan yüzde 25 yüksek. 144, 2024 nominalini 2023 nominaline bölmekle bulunur ve yanlıştır.",
          "fig": {
            "type": "table",
            "head": [
              "Yıl",
              "Kalem P",
              "Kalem Q",
              "Defter P",
              "Defter Q"
            ],
            "rows": [
              [
                "2023",
                "8",
                "100",
                "20",
                "50"
              ],
              [
                "2024",
                "10",
                "110",
                "25",
                "60"
              ]
            ],
            "caption": "Kalem–defter ekonomisi · base year 2023"
          }
        },
        {
          "q": "Bir yılda *nominal GDP* yüzde 8, *GDP deflator* da yüzde 8 artıyor. *Real GDP* için ne söylenebilir?",
          "opts": [
            "Yaklaşık yüzde 16 artmıştır.",
            "Yaklaşık yüzde 8 azalmıştır.",
            "Yaklaşık yüzde 8 artmıştır.",
            "Yaklaşık olarak değişmemiştir."
          ],
          "a": 3,
          "why": "Nominal artışın tamamı fiyat artışından geliyor: real = nominal ÷ deflator × 100 olduğu için pay ve payda aynı oranda büyür, *real GDP* aynı kalır. Üretim artmamıştır."
        },
        {
          "q": "Aşağıdakilerden hangisi *CPI*'ı yükseltir ama *GDP deflator*'ü neredeyse hiç etkilemez?",
          "opts": [
            "Yurt dışından ithal edilen kahve makinelerinin fiyatının artması",
            "Yerli bir fabrikanın ürettiği iş makinelerinin fiyatının artması",
            "Devletin yaptırdığı köprülerin maliyetinin artması",
            "Türkiye'de üretilip ihraç edilen fındığın fiyatının artması"
          ],
          "a": 0,
          "why": "İthal mallar tüketici sepetinde yer alır, bu yüzden *CPI*'ı yükseltir; ama yurt içinde üretilmedikleri için *GDP*'nin ve dolayısıyla deflatörün dışındadır. Diğer üçü yurt içi üretimdir ve deflatöre girer."
        },
        {
          "q": "Hangi ifade doğrudur?",
          "opts": [
            "*GDP deflator* 90 ise *real GDP*, *nominal GDP*'den küçüktür.",
            "*Real GDP*, her yılın kendi fiyatlarıyla hesaplanır.",
            "Temel yılda *nominal GDP* ile *real GDP* birbirine eşittir.",
            "*Nominal GDP* artıyorsa üretim de mutlaka artıyordur."
          ],
          "a": 2,
          "why": "Temel yılda cari fiyatlar ile temel yıl fiyatları aynıdır; real ve nominal eşit, deflatör 100'dür. Deflatör 100'ün altındaysa real nominalden büyük çıkar; real GDP temel yıl fiyatlarıyla hesaplanır; nominal artış yalnızca fiyatlardan da gelebilir."
        }
      ]
    },
    {
      "no": 10,
      "code": "2.7",
      "slug": "mc210",
      "title": "İş Çevrimi",
      "en": "Business Cycles",
      "accent": "#2FD6B9",
      "seconds": 248,
      "terms": [
        "Business cycle",
        "Peak",
        "Contraction",
        "Trough",
        "Expansion",
        "Recession",
        "Long-run trend",
        "Potential output",
        "Output gap",
        "Recessionary gap",
        "Inflationary gap",
        "Cyclical unemployment"
      ],
      "questions": [
        {
          "q": "Grafik bir ekonominin *real GDP*'sini zaman içinde gösteriyor; kesikli çizgi uzun dönem eğilim. Hangi nokta *contraction* evresindedir?",
          "opts": [
            "W",
            "X",
            "Y",
            "Z"
          ],
          "a": 1,
          "why": "W zirve (*peak*), Y dip (*trough*). X, zirveden dibe inen yolun üzerinde; *real GDP* düşüyor, yani daralma. Z dipten sonraki yükselişte, yani *expansion*'da.",
          "fig": {
            "type": "graph",
            "xlabel": "Time",
            "ylabel": "Real GDP",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  10,
                  8
                ],
                "label": "Trend",
                "dash": true
              },
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  2,
                  4
                ],
                "label": ""
              },
              {
                "from": [
                  2,
                  4
                ],
                "to": [
                  4,
                  3.6
                ],
                "label": ""
              },
              {
                "from": [
                  4,
                  3.6
                ],
                "to": [
                  6.5,
                  6.7
                ],
                "label": ""
              },
              {
                "from": [
                  6.5,
                  6.7
                ],
                "to": [
                  8.5,
                  6.3
                ],
                "label": ""
              },
              {
                "from": [
                  8.5,
                  6.3
                ],
                "to": [
                  10,
                  8.4
                ],
                "label": ""
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 4,
                "label": "W"
              },
              {
                "q": 3,
                "p": 3.8,
                "label": "X"
              },
              {
                "q": 4,
                "p": 3.6,
                "label": "Y"
              },
              {
                "q": 5.25,
                "p": 5.15,
                "label": "Z"
              }
            ]
          }
        },
        {
          "q": "Tablo bir ülkenin çeyreklik *real GDP*'sini gösteriyor. \"Üst üste iki çeyrek düşüş\" kuralına göre durgunluk hangi çeyreklerde yaşanmıştır?",
          "opts": [
            "3. ve 4. çeyrek",
            "2. ve 3. çeyrek",
            "4. ve 5. çeyrek",
            "5. ve 6. çeyrek"
          ],
          "a": 0,
          "why": "2. çeyrek zirve (510). 3. çeyrekte 505'e, 4. çeyrekte 498'e düşüyor: üst üste iki düşüş. 4. çeyrek dip; 5. ve 6. çeyrekte *real GDP* yeniden artıyor, yani genişleme.",
          "fig": {
            "type": "table",
            "head": [
              "Çeyrek",
              "Real GDP (milyar TL)"
            ],
            "rows": [
              [
                "1",
                "500"
              ],
              [
                "2",
                "510"
              ],
              [
                "3",
                "505"
              ],
              [
                "4",
                "498"
              ],
              [
                "5",
                "503"
              ],
              [
                "6",
                "515"
              ]
            ],
            "caption": "Çeyreklik real GDP"
          }
        },
        {
          "q": "Bir ülkenin potansiyel üretimi 4.000 milyar lira, gerçekleşen *real GDP*'si 3.800 milyar lira. Hangisi doğrudur?",
          "opts": [
            "Açık artı 200; *inflationary gap* var, işsizlik doğal oranın altında",
            "Açık eksi 200; *inflationary gap* var, işsizlik doğal oranın altında",
            "Açık eksi 200; *recessionary gap* var, işsizlik doğal oranın altında",
            "Açık eksi 200; *recessionary gap* var, işsizlik doğal oranın üstünde"
          ],
          "a": 3,
          "why": "Output gap = gerçek − potansiyel = 3.800 − 4.000 = −200; −200 ÷ 4.000 = yüzde −5. Gerçek üretim potansiyelin altında olduğu için *recessionary gap* var; *cyclical* işsizlik yüzünden işsizlik doğal oranın üstündedir."
        },
        {
          "q": "Bir ekonomide gerçek *real GDP* potansiyel üretimin üstüne çıkmış. Aşağıdakilerden hangisi büyük olasılıkla doğrudur?",
          "opts": [
            "İşsizlik doğal oranın üstündedir ve fiyatlar düşmektedir.",
            "Ekonomi bir *trough*'tadır ve *cyclical* işsizlik yüksektir.",
            "İşsizlik doğal oranın altındadır ve fiyatlar üzerinde yukarı yönlü baskı vardır.",
            "Ekonomi *PPC*'nin içindeki bir noktada üretim yapmaktadır."
          ],
          "a": 2,
          "why": "Potansiyelin üstünde üretim, *inflationary gap* demektir: firmalar fazla mesai ve ek işçiyle üretir, işsizlik doğal oranın altına iner ve güçlü talep fiyatları yukarı iter. Dip ve PPC'nin içi durgunluğu anlatır."
        },
        {
          "q": "İş çevrimi grafiğinde uzun dönem ekonomik büyümeyi en iyi hangisi gösterir?",
          "opts": [
            "Bir dipten bir sonraki zirveye doğru her yükseliş",
            "Uzun dönem eğilim çizgisinin, yani potansiyel üretimin zamanla yükselmesi",
            "Bir genişleme evresinde *nominal GDP*'nin artması",
            "İki çeyrek üst üste *real GDP*'nin düşmesi"
          ],
          "a": 1,
          "why": "Uzun dönem büyüme, ekonominin üretebileceği potansiyel üretimin artmasıdır; grafikte yukarı eğimli trend çizgisi, PPC'de dışa kayma. Dipten zirveye yükseliş kısa dönem genişlemedir; nominal artış fiyattan gelebilir; iki çeyrek düşüş durgunluktur."
        }
      ]
    }
  ],
  "final": []
};
