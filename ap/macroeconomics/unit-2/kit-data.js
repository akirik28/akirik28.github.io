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
    }
  ],
  "final": []
};
