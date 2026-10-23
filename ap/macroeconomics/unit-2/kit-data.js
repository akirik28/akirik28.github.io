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
    }
  ],
  "final": []
};
