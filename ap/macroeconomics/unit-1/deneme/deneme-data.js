/* Bu dosya üretilir: ap-videolar/tools/build-deneme-data.mjs (elle düzenleme; kaynak: tools/out/deneme-macro-u1.json) */
window.DENEME = {
  "store": "macro-u1:v1:",
  "course": "AP Macroeconomics",
  "unit": "Unit 1 — Basic Economic Concepts",
  "topics": {
    "1.1": "Kıtlık ve Ekonomist Gibi Düşünmek",
    "1.2-1": "Fırsat Maliyeti ve PPC",
    "1.2-2": "PPC'nin Şekli ve Kayması",
    "1.3-1": "Mutlak ve Karşılaştırmalı Üstünlük",
    "1.3-2": "Uzmanlaşma ve Ticaretten Kazanç",
    "1.4-1": "Talep Yasası",
    "1.4-2": "Talebi Kaydıran Etkenler",
    "1.5": "Arz Yasası ve Arzı Kaydıranlar",
    "1.6-1": "Denge, Fazla ve Kıtlık",
    "1.6-2": "Dengenin Değişmesi ve Çift Kayma"
  },
  "tests": [
    {
      "no": 1,
      "level": "Isınma",
      "minutes": 20,
      "questions": [
        {
          "t": "1.1",
          "q": "Which of the following best describes the basic economic problem of scarcity?",
          "o": [
            "Some goods are temporarily unavailable in stores because their prices are set too low.",
            "Governments do not print enough money for people to buy everything they want.",
            "Poor countries have fewer resources than rich countries do.",
            "Society's wants are unlimited, but the resources available to satisfy them are limited."
          ],
          "a": 3,
          "w": "*Scarcity* = sınırsız istek, sınırlı kaynak; zengin ülkeler dahil her toplumda vardır ve kalıcıdır. Bir malın mağazada geçici olarak bitmesi *shortage*'dır (fiyat dengenin altındayken oluşur, fiyat yükselince kapanır); en sık karıştırılan şık budur. Para bir kaynak değildir; daha çok para basmak üretebileceğimiz malları artırmaz."
        },
        {
          "t": "1.1",
          "q": "Which of the following is a normative statement?",
          "o": [
            "Raising the bus fare in Ankara will reduce the number of students who ride the bus.",
            "The school should lower canteen prices so that every student can afford lunch.",
            "Türkiye's unemployment rate was higher last year than it was five years ago.",
            "If the price of tea rises, people will buy more coffee."
          ],
          "a": 1,
          "w": "*Normative statement* değer yargısı taşır, ne olması gerektiğini söyler; \"should\" kelimesi işarettir. Öteki üçü veriyle test edilebilen neden-sonuç ya da olgu ifadeleridir, yani *positive*. Bir *positive* ifade yanlış çıksa bile *positive* kalır: belirleyici olan doğruluk değil, test edilebilirliktir."
        },
        {
          "t": "1.2-1",
          "q": "Defne has a free Saturday afternoon. She can work a shift at a café and earn 600 TL, tutor a younger student for 450 TL, or go to a free concert in the park. She can do only one of these, and she chooses the concert. What is the opportunity cost of her choice?",
          "o": [
            "Nothing, because the concert is free",
            "450 TL, the earnings from tutoring",
            "600 TL, the earnings from the café shift",
            "1,050 TL, the earnings from both jobs"
          ],
          "a": 2,
          "w": "*Opportunity cost* vazgeçilen en iyi tek alternatiftir: kafe vardiyası, 600 TL. 1.050 TL çeldiricisi bütün alternatifleri toplar; vazgeçilenlerin hepsi *trade-offs*'tur, ama Defne o öğleden sonra iki işi birden yapamazdı. \"Bedava\" diyen şık da yanlış: cebinden para çıkmasa da vazgeçtiği kazanç bir maliyettir."
        },
        {
          "t": "1.2-1",
          "q": "The graph shows the production possibilities curve (PPC) for Econia. Which point represents an inefficient use of Econia's resources?",
          "o": [
            "Point W",
            "Point X",
            "Point Y",
            "Point Z"
          ],
          "a": 1,
          "w": "Eğrinin içindeki nokta (X) *inefficient*'tır: kaynakların bir kısmı atıl (*unemployment*), iki maldan da daha fazlası üretilebilir. W ve Y eğrinin üstündedir, yani *efficient*; W bir uç nokta olsa da kaynak israfı yoktur. Z eğrinin dışındadır: verimsiz değil, mevcut kaynak ve teknolojiyle *unattainable*.",
          "fig": {
            "type": "graph",
            "xlabel": "Robots",
            "ylabel": "Wheat",
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
                "q": 0,
                "p": 8,
                "label": "W"
              },
              {
                "q": 3,
                "p": 3,
                "label": "X"
              },
              {
                "q": 4.8,
                "p": 6.4,
                "label": "Y"
              },
              {
                "q": 6,
                "p": 7,
                "label": "Z"
              }
            ]
          }
        },
        {
          "t": "1.2-1",
          "q": "The table shows five points on a country's production possibilities curve. If the country moves from point B to point C, what is the opportunity cost of the additional solar panel?",
          "o": [
            "2 barrels of olive oil",
            "4 barrels of olive oil",
            "8 barrels of olive oil",
            "24 barrels of olive oil"
          ],
          "a": 1,
          "w": "B'den C'ye geçerken güneş paneli 1'den 2'ye çıkar, zeytinyağı 28'den 24 varile iner: vazgeçilen 4 varil. 24 varil çeldiricidir: C noktasındaki üretim düzeyidir, maliyet değil. 2 varil önceki adımın (A → B), 8 varil sonraki adımın (C → D) maliyetidir. *Opportunity cost* = vazgeçilen ÷ kazanılan.",
          "fig": {
            "type": "table",
            "head": [
              "Point",
              "Olive oil (barrels)",
              "Solar panels"
            ],
            "rows": [
              [
                "A",
                30,
                0
              ],
              [
                "B",
                28,
                1
              ],
              [
                "C",
                24,
                2
              ],
              [
                "D",
                16,
                3
              ],
              [
                "E",
                0,
                4
              ]
            ]
          }
        },
        {
          "t": "1.2-2",
          "q": "A country's production possibilities curve is a straight line. Which of the following must be true?",
          "o": [
            "The opportunity cost of producing each good is constant.",
            "The opportunity cost of producing each good increases as more of it is produced.",
            "The country is producing at an inefficient point.",
            "The country has an absolute advantage in both goods."
          ],
          "a": 0,
          "w": "Düz PPC'nin eğimi her yerde aynıdır: her ek birimin *opportunity cost*'u sabittir (*constant opportunity cost*); kaynaklar iki mala eşit derecede uygundur (simit ile poğaça gibi). Artan maliyet dışa bükük (*bowed out*) eğriyle gösterilir; en sık karıştırılan şık budur. Eğrinin şekli verimlilik ya da üstünlük hakkında bir şey söylemez."
        },
        {
          "t": "1.2-2",
          "q": "Which of the following would shift Türkiye's production possibilities curve outward?",
          "o": [
            "A rise in the unemployment rate from 9 percent to 12 percent",
            "An increase in consumer demand for hazelnuts",
            "A new vocational program that improves the skills of the workforce",
            "A decision to produce more tea and less cotton"
          ],
          "a": 2,
          "w": "Meslek eğitimi *human capital*'ı artırır: daha çok işçi değil, daha iyi işçi. Kaynak kalitesi artınca PPC dışa kayar (*economic growth*). İşsizlik eğriyi kaydırmaz, üretim noktası eğrinin içine düşer; en sık tuzak budur. Talep değişimi ya da üretim karışımını değiştirmek eğri üzerinde harekettir."
        },
        {
          "t": "1.3-1",
          "q": "The table shows the maximum number of carpets or tractors that Türkiye and Italy can each produce per day with the same amount of resources. Which country has an absolute advantage in producing tractors?",
          "o": [
            "Türkiye, because it produces more carpets than Italy",
            "Türkiye, because its opportunity cost of a tractor is lower",
            "Neither country, because both countries can produce tractors",
            "Italy, because it can produce more tractors with the same resources"
          ],
          "a": 3,
          "w": "*Absolute advantage* ham sayılarla bulunur: aynı kaynakla 6 traktör > 5 traktör → İtalya. Bu bir *output* tablosu olduğu için büyük sayı üstünlüktür. *Opportunity cost* karşılaştırması *comparative advantage* sorusudur; üstelik traktörün maliyeti Türkiye'de 10 ÷ 5 = 2 halı, İtalya'da 6 ÷ 6 = 1 halı, yani o şık sayısal olarak da yanlıştır.",
          "fig": {
            "type": "table",
            "head": [
              "Country",
              "Carpets",
              "Tractors"
            ],
            "rows": [
              [
                "Türkiye",
                10,
                5
              ],
              [
                "Italy",
                6,
                6
              ]
            ],
            "caption": "Units produced per day with the same resources"
          }
        },
        {
          "t": "1.3-1",
          "q": "A country has a comparative advantage in producing a good when it can produce that good",
          "o": [
            "using fewer resources than another country",
            "in greater quantity than another country",
            "at a lower opportunity cost than another country",
            "and sell it at a higher price than another country can"
          ],
          "a": 2,
          "w": "*Comparative advantage* = daha düşük *opportunity cost*. \"Daha az kaynakla\" ve \"daha çok miktarda\" üretmek *absolute advantage*'ın iki tanımıdır (*input* ve *output* soruları); en sık karıştırılan çeldiriciler bunlardır. Satış fiyatı karşılaştırmanın ölçüsü değildir; maliyet vazgeçilen öteki mal cinsindendir."
        },
        {
          "t": "1.3-1",
          "q": "In one hour, Kerem can make 12 sandwiches or 4 smoothies, and Zeynep can make 6 sandwiches or 3 smoothies. What is Kerem's opportunity cost of making one smoothie?",
          "o": [
            "1/3 sandwich",
            "2 sandwiches",
            "3 sandwiches",
            "4 sandwiches"
          ],
          "a": 2,
          "w": "Bu bir *output* sorusu → O.O.O. (*Other goes Over*): 1 smoothie = 12 ÷ 4 = 3 sandviç. 1/3 çeldiricisi kesri ters kurmaktır (o, 1 sandviçin smoothie cinsinden maliyetidir). 2 sandviç Zeynep'in maliyetidir (6 ÷ 3); soru Kerem'i soruyor."
        },
        {
          "t": "1.3-2",
          "q": "When two countries specialize according to comparative advantage and trade at mutually beneficial terms, which of the following is true?",
          "o": [
            "Both countries can consume a combination of goods outside their own production possibilities curves.",
            "Both countries' production possibilities curves shift outward.",
            "Only the country with an absolute advantage in both goods gains from trade.",
            "Each country must continue to produce some of both goods."
          ],
          "a": 0,
          "w": "Ticaret üretim kapasitesini değiştirmez, PPC kaymaz; değişen tüketim noktasıdır: ülke kendi PPC'sinin dışında tüketebilir (*gains from trade*). \"PPC dışa kayar\" en sık tuzaktır. İki malda *absolute advantage*'ı olan ülke de, öteki ülke de kazanır; kazanç için her ülkenin yalnız *comparative advantage*'ı olan malı üretmesi yeterlidir."
        },
        {
          "t": "1.4-1",
          "q": "The law of demand states that, other things equal,",
          "o": [
            "as the price of a good rises, the demand for the good falls",
            "as the price of a good rises, the quantity demanded of the good falls",
            "as income rises, the quantity demanded of every good rises",
            "as the price of a good rises, the quantity supplied of the good rises"
          ],
          "a": 1,
          "w": "*Law of demand*: fiyat ile *quantity demanded* arasında ters ilişki (*ceteris paribus*). \"Demand falls\" diyen şık en sinsi çeldiricidir: ürünün kendi fiyatı talep eğrisini kaydırmaz, yalnız eğri üzerinde hareket ettirir. Fiyat ↑ → *quantity supplied* ↑ ise *law of supply*'dır."
        },
        {
          "t": "1.4-1",
          "q": "Bora is willing to pay 60 TL for his first slice of pizza at lunch, but only 35 TL for a second slice and 15 TL for a third. This pattern is best explained by",
          "o": [
            "the income effect",
            "the substitution effect",
            "a decrease in the demand for pizza",
            "the law of diminishing marginal utility"
          ],
          "a": 3,
          "w": "Aynı maldan her ek dilimin verdiği ek tatmin (*marginal utility*) azalır; bu yüzden Bora daha fazlasını ancak daha düşük fiyata alır: *law of diminishing marginal utility*. *Substitution effect* görece ucuzlayan başka bir mala kaymayı, *income effect* fiyat değişince alım gücünün değişmesini anlatır; burada ne fiyat değişiyor ne de başka bir mal var."
        },
        {
          "t": "1.4-2",
          "q": "Tea and coffee are substitutes. If the price of coffee increases, what happens in the market for tea?",
          "o": [
            "The demand curve for tea shifts to the left.",
            "There is a movement down along the demand curve for tea.",
            "The supply curve for tea shifts to the right.",
            "The demand curve for tea shifts to the right."
          ],
          "a": 3,
          "w": "*Substitutes*'te öteki malın fiyatı ile bu malın talebi aynı yönde gider: kahve pahalanınca bazı alıcılar çaya geçer, her fiyatta daha çok çay istenir → çay talebi sağa (*increase in demand*). Kahvenin fiyatı çayın kendi fiyatı değildir; bu yüzden çay piyasasında eğri üzerinde hareket değil, kayma olur. Satıcılar etkilenmediği için arz kaymaz."
        },
        {
          "t": "1.4-2",
          "q": "The graph shows a shift of the demand curve for tickets to a band's concerts from D1 to D2. Which of the following could have caused this shift?",
          "o": [
            "A viral video that makes the band much more popular among teenagers",
            "A decrease in the price of concert tickets",
            "An increase in the price of concert tickets",
            "A decrease in fans' incomes, if concert tickets are a normal good"
          ],
          "a": 0,
          "w": "D1'den D2'ye sağa kayma = *increase in demand*: her fiyatta daha çok bilet istenir. Grubun popülerleşmesi *tastes and preferences* değişimidir → sağa. Biletin kendi fiyatının düşmesi ya da artması eğriyi kaydırmaz, yalnız eğri üzerinde hareket ettirir. *Normal good*'da gelir düşerse talep sola kayar.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity of tickets",
            "ylabel": "Price",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  1,
                  8
                ],
                "to": [
                  7,
                  2
                ],
                "label": "D1",
                "dash": true
              },
              {
                "from": [
                  3,
                  8
                ],
                "to": [
                  9,
                  2
                ],
                "label": "D2"
              }
            ]
          }
        },
        {
          "t": "1.5",
          "q": "Cheese is an input in making tost (toasted sandwiches). If the price of cheese rises sharply, the supply of tost will",
          "o": [
            "decrease, and the supply curve shifts to the left",
            "increase, and the supply curve shifts to the right",
            "not change, but the quantity supplied of tost rises",
            "not change, because cheese prices affect only buyers"
          ],
          "a": 0,
          "w": "Peynir bir girdidir: *input price* ↑ → üretim maliyeti ↑ → her fiyatta daha az tost sunulur → arz sola (*decrease in supply*). Sola kayan arz eğrisi grafikte yukarıda görünür ama bu bir azalıştır. Girdi fiyatı satıcıyı etkiler; talebin belirleyicisi değildir."
        },
        {
          "t": "1.5",
          "q": "The government begins paying farmers a subsidy for each ton of wheat they grow. Which of the following describes the effect on the supply of wheat?",
          "o": [
            "Supply decreases, and the supply curve shifts to the left.",
            "Quantity supplied increases, but the supply curve does not shift.",
            "Demand increases, and the demand curve shifts to the right.",
            "Supply increases, and the supply curve shifts to the right."
          ],
          "a": 3,
          "w": "*Subsidy* devletin üreticiye yaptığı ödemedir; maliyeti düşürür, her fiyatta daha çok buğday üretilir → arz sağa. Vergi (*tax*) tam tersine arzı sola kaydırır. Sübvansiyon fiyat dışı bir etken olduğu için eğri üzerinde hareket değil, kayma yaratır; alıcıları doğrudan etkilemediği için talep kaymaz."
        },
        {
          "t": "1.6-1",
          "q": "Based on the demand and supply schedules for notebooks shown in the table, what are the equilibrium price and quantity?",
          "o": [
            "$3 and 75 notebooks",
            "$4 and 60 notebooks",
            "$5 and 75 notebooks",
            "$6 and 90 notebooks"
          ],
          "a": 1,
          "w": "Dengede *quantity demanded* = *quantity supplied*: 4 dolarda ikisi de 60. \"3 dolar, 75 defter\" yalnız talep edilen miktara bakmaktır; o fiyatta arz edilen 45, yani *shortage* var. \"5 dolar, 75 defter\" yalnız arz edilen miktardır; o fiyatta *surplus* vardır.",
          "fig": {
            "type": "table",
            "head": [
              "Price",
              "Quantity demanded",
              "Quantity supplied"
            ],
            "rows": [
              [
                "$2",
                90,
                30
              ],
              [
                "$3",
                75,
                45
              ],
              [
                "$4",
                60,
                60
              ],
              [
                "$5",
                45,
                75
              ],
              [
                "$6",
                30,
                90
              ]
            ]
          }
        },
        {
          "t": "1.6-1",
          "q": "In the market for simit, the equilibrium price is 15 TL. If sellers charge 20 TL, which of the following will occur?",
          "o": [
            "A shortage, and the price will rise",
            "A shortage, and the price will fall",
            "A surplus, and the price will fall",
            "A surplus, and the demand curve will shift to the left"
          ],
          "a": 2,
          "w": "Fiyat dengenin üstündeyse Qs > Qd: satılmayan simitler yığılır (*surplus*); satıcılar fiyatı dengeye doğru indirir. *Shortage* fiyat dengenin altındayken olur. Fiyat değişimi eğriyi kaydırmaz; *surplus* eğriler üzerinde hareketle kapanır."
        },
        {
          "t": "1.6-2",
          "q": "A heat wave hits İzmir. Assuming nothing else changes, what happens to the equilibrium price and quantity of ice cream in İzmir?",
          "o": [
            "Price increases; quantity increases",
            "Price increases; quantity decreases",
            "Price decreases; quantity increases",
            "Price decreases; quantity decreases"
          ],
          "a": 0,
          "w": "Sıcak hava alıcıları etkiler (*tastes and preferences*): talep sağa kayar, yeni kesişim daha yukarıda ve sağda olur → P ↑, Q ↑. Talep kaymasında fiyat ile miktar aynı yöne gider. \"P ↑, Q ↓\" arzın azalmasının sonucudur; sıcak hava satıcıları etkilemez."
        }
      ]
    },
    {
      "no": 2,
      "level": "Temel",
      "minutes": 25,
      "questions": [
        {
          "t": "1.1",
          "q": "A bakery in Trabzon uses an industrial oven, spring water for its dough, a baker whose skills were learned at culinary school, and an owner who decides to risk opening a second shop. Which of these is an example of human capital?",
          "o": [
            "The industrial oven",
            "The spring water used in the dough",
            "The baker's skills learned at culinary school",
            "The owner's decision to open a second shop"
          ],
          "a": 2,
          "w": "*Human capital* eğitim ve deneyimle kazanılan bilgi ve beceridir. Fırın *physical capital*'dır (insan yapımı üretim aracı), kaynak suyu doğal kaynaktır (*land*), riski üstlenip ikinci şubeyi açma kararı *entrepreneurship*'tir. Tuzak: \"capital\" deyince yalnız makineyi düşünmek."
        },
        {
          "t": "1.1",
          "q": "Each hour of a paid robotics workshop costs a student 200 TL. She values the first hour at 500 TL, the second at 350 TL, the third at 220 TL, the fourth at 150 TL, and the fifth at 90 TL. To maximize her net benefit, how many hours should she attend?",
          "o": [
            "2 hours",
            "3 hours",
            "4 hours",
            "5 hours"
          ],
          "a": 1,
          "w": "Marjinal düşün: MB > MC olduğu sürece devam. 3. saat 220 > 200 TL, 4. saat 150 < 200 TL → 3 saat; net fayda 1.070 − 600 = 470 TL ile en yüksektir. 5 saat çeldiricisi toplamlara bakmaktır: 5 saatin toplam faydası (1.310 TL) toplam maliyeti (1.000 TL) aşar, ama 4. ve 5. saat net faydayı düşürür (*marginal* = *additional*)."
        },
        {
          "t": "1.2-1",
          "q": "Which of the following is an assumption used when drawing a country's production possibilities curve?",
          "o": [
            "The country produces only two goods, and its resources and technology are fixed.",
            "The country trades with other countries to obtain goods it cannot produce.",
            "Some of the country's workers and machines are always unemployed.",
            "The prices of both goods are set by the government."
          ],
          "a": 0,
          "w": "PPC'nin üç varsayımı: yalnız iki mal, kaynakların tam kullanımı (*full employment*), sabit kaynak ve teknoloji. \"Atıl işçi her zaman var\" varsayımı tam tersidir; o durum eğrinin içindeki bir noktayla gösterilir. PPC'yi çizmek için ne ticarete ne de fiyatlara gerek vardır."
        },
        {
          "t": "1.2-1",
          "q": "The graph shows Kuzeyland's production possibilities curve for tea and cotton. What is Kuzeyland's opportunity cost of producing 1 ton of tea?",
          "o": [
            "1/3 ton of cotton",
            "3 tons of cotton",
            "3 tons of tea",
            "9 tons of tea"
          ],
          "a": 0,
          "w": "Bütün kaynaklar çaya giderse 9 ton çay, pamuğa giderse 3 ton pamuk: 9 çay = 3 pamuk → 1 ton çay = 3 ÷ 9 = 1/3 ton pamuk (vazgeçilen ÷ kazanılan). 3 ton pamuk çeldiricisi kesri ters kurmaktır; 3 ton çay ise 1 ton pamuğun maliyetidir. Maliyet her zaman öteki mal cinsinden ölçülür.",
          "fig": {
            "type": "graph",
            "xlabel": "Cotton (tons)",
            "ylabel": "Tea (tons)",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  6,
                  0
                ],
                "to": [
                  0,
                  9
                ],
                "label": "PPC"
              }
            ],
            "xticks": [
              {
                "v": 2,
                "label": "1"
              },
              {
                "v": 4,
                "label": "2"
              },
              {
                "v": 6,
                "label": "3"
              }
            ],
            "yticks": [
              {
                "v": 3,
                "label": "3"
              },
              {
                "v": 6,
                "label": "6"
              },
              {
                "v": 9,
                "label": "9"
              }
            ]
          }
        },
        {
          "t": "1.2-1",
          "q": "The graph shows an economy's production possibilities curve. The economy is currently producing at point U. If it moves to point V, what is the opportunity cost of the move?",
          "o": [
            "The consumer goods it must give up to produce more capital goods",
            "The capital goods it must give up to produce more consumer goods",
            "Zero, because the economy can produce more of both goods by using idle resources",
            "It cannot be determined without knowing the prices of the two goods"
          ],
          "a": 2,
          "w": "U eğrinin içinde: atıl işçi ve makineler var. V'ye giderken iki maldan da daha çok üretilir, hiçbir şeyden vazgeçilmez → *opportunity cost* sıfırdır. Vazgeçmek ancak eğrinin üstündeki bir noktadan ötekine giderken gerekir. Fiyat bilgisi gerekmez; maliyet mal cinsinden ölçülür.",
          "fig": {
            "type": "graph",
            "xlabel": "Capital goods",
            "ylabel": "Consumer goods",
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
                "p": 4,
                "label": "U",
                "guides": true
              },
              {
                "q": 4.8,
                "p": 6.4,
                "label": "V",
                "guides": true
              }
            ]
          }
        },
        {
          "t": "1.2-2",
          "q": "The table shows Agraria's production possibilities. Which statement is supported by the table?",
          "o": [
            "The opportunity cost of each additional car is constant, so the PPC is a straight line.",
            "The opportunity cost of each additional car increases, so the PPC is bowed outward.",
            "The opportunity cost of each additional car decreases, so the PPC is bowed inward.",
            "Point C is more efficient than points A and E."
          ],
          "a": 1,
          "w": "Her ek arabanın maliyeti: 40 → 38 = 2, 38 → 33 = 5, 33 → 24 = 9, 24 → 0 = 24 ton buğday; artıyor → *law of increasing opportunity cost*, eğri dışa bükük. Nedeni: kaynaklar iki mala eşit uygun değil (*not perfectly adaptable*). Tablodaki bütün noktalar eğrinin üstündedir ve eşit derecede *productively efficient*'tır; \"C daha verimli\" şıkkı tuzaktır.",
          "fig": {
            "type": "table",
            "head": [
              "Point",
              "Cars",
              "Wheat (tons)"
            ],
            "rows": [
              [
                "A",
                0,
                40
              ],
              [
                "B",
                1,
                38
              ],
              [
                "C",
                2,
                33
              ],
              [
                "D",
                3,
                24
              ],
              [
                "E",
                4,
                0
              ]
            ]
          }
        },
        {
          "t": "1.2-2",
          "q": "Which of the following would shift a country's production possibilities curve inward?",
          "o": [
            "A recession causes many workers to lose their jobs.",
            "An earthquake destroys a large share of the country's factories.",
            "Consumers decide they want fewer cars and more bicycles.",
            "The country begins importing more goods from its neighbors."
          ],
          "a": 1,
          "w": "Deprem fabrikaları yok eder: kaynak miktarı azalır → eğri içe kayar. Resesyonda işçiler hâlâ ülkede, sadece çalışmıyorlar → üretim noktası eğrinin içine düşer, eğri kaymaz (en sık tuzak). Tercih değişimi eğri üzerinde harekettir; ticaret üretim PPC'sini kaydırmaz."
        },
        {
          "t": "1.3-1",
          "q": "To produce one unit of each good, Argentina needs 4 labor hours for beef and 8 labor hours for wine, while Chile needs 6 labor hours for beef and 6 labor hours for wine. Which country has an absolute advantage in producing wine?",
          "o": [
            "Chile, because it needs fewer hours to produce a unit of wine",
            "Argentina, because 8 hours is more than 6 hours",
            "Argentina, because it has a comparative advantage in wine",
            "Neither country, because both need more than 4 hours to produce wine"
          ],
          "a": 0,
          "w": "Bu bir *input* sorusu: sayılar bir birim için gereken saattir, küçük sayı üstünlüktür. Şili 6 saatte, Arjantin 8 saatte şarap üretir → *absolute advantage* Şili'de. \"8 daha büyük\" diyen şık *output* mantığını *input* tablosuna uygulamaktır, en sık tuzak budur. Şarapta *comparative advantage* de Şili'dedir (1 şarap Şili'ye 1, Arjantin'e 2 sığır eti)."
        },
        {
          "t": "1.3-1",
          "q": "Selin needs 30 minutes to make a poster and 10 minutes to make a badge for the school fair. Can needs 60 minutes to make a poster and 15 minutes to make a badge. What is Can's opportunity cost of making one poster?",
          "o": [
            "1/4 badge",
            "2 badges",
            "3 badges",
            "4 badges"
          ],
          "a": 3,
          "w": "*Input* sorusu → I.O.U. (*Other goes Under*): Can bir postere harcadığı 60 dakikada 60 ÷ 15 = 4 rozet yapabilirdi → 1 poster = 4 rozet. 1/4 çeldiricisi *output* kuralını uygulayıp kesri ters kurmaktır. 3 rozet Selin'in maliyetidir (30 ÷ 10)."
        },
        {
          "t": "1.3-1",
          "q": "With the same resources, Uzbekistan can produce either 12 tons of cotton or 4 tons of apricots, and Türkiye can produce either 6 tons of cotton or 6 tons of apricots. Which of the following is correct?",
          "o": [
            "Uzbekistan has a comparative advantage in cotton, and Türkiye has a comparative advantage in apricots.",
            "Uzbekistan has a comparative advantage in both goods.",
            "Türkiye has a comparative advantage in cotton, and Uzbekistan has a comparative advantage in apricots.",
            "Neither country can gain from trade, because Uzbekistan produces more in total."
          ],
          "a": 0,
          "w": "O.O.O.: 1 ton pamuk Özbekistan'a 4 ÷ 12 = 1/3 ton kayısıya, Türkiye'ye 1 ton kayısıya mal olur → pamukta Özbekistan. 1 ton kayısı Türkiye'ye 1 ton pamuk, Özbekistan'a 3 ton pamuk → kayısıda Türkiye. Bir ülke iki malda birden *comparative advantage* sahibi olamaz; toplam üretimin büyüklüğü de ticaretten kazancı engellemez."
        },
        {
          "t": "1.3-2",
          "q": "In Country A, the opportunity cost of 1 laptop is 4 phones. In Country B, the opportunity cost of 1 laptop is 8 phones. If the countries specialize and trade, which of the following terms of trade would benefit both countries?",
          "o": [
            "1 laptop for 3 phones",
            "1 laptop for 4 phones",
            "1 laptop for 6 phones",
            "1 laptop for 9 phones"
          ],
          "a": 2,
          "w": "A dizüstüde uzmanlaşır (4 < 8). Kazançlı oran iki *opportunity cost*'un arasında olmalı: 1 laptop 4 ile 8 telefon arası → 6 telefon. 4 telefon uç değerdir: A için kendi üretmekle aynıdır, kazanç yok. 3 telefonda A, 9 telefonda B zarar eder."
        },
        {
          "t": "1.3-2",
          "q": "Country X has a comparative advantage in steel, and Country Y has a comparative advantage in textiles. If the two countries specialize and trade, Country X will",
          "o": [
            "export steel and import textiles",
            "export textiles and import steel",
            "produce both goods and export neither",
            "import both goods, because Y can produce them more cheaply"
          ],
          "a": 0,
          "w": "Ülke *comparative advantage*'ı olan malı üretip ihraç eder, öteki malı ithal eder: X çelik satar, tekstil alır. \"İki malı da ithal eder\" mümkün değildir: Y iki malda birden daha düşük *opportunity cost*'a sahip olamaz."
        },
        {
          "t": "1.4-1",
          "q": "The table shows the weekly demand schedule for movie tickets at a cinema in Eskişehir. If the ticket price falls from 150 TL to 100 TL, which of the following describes the change?",
          "o": [
            "Demand increases by 60 tickets",
            "Quantity demanded increases by 240 tickets",
            "Demand decreases, because the price fell",
            "Quantity demanded increases by 60 tickets"
          ],
          "a": 3,
          "w": "Fiyat 150'den 100 TL'ye düşünce talep edilen miktar 180'den 240'a çıkar: +60. Bu eğri üzerinde harekettir (*change in quantity demanded*); ürünün kendi fiyatı talebi (*demand*) değiştirmez. 240 çeldiricisi yeni miktarı değişimle karıştırmaktır.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Quantity demanded (tickets)"
            ],
            "rows": [
              [
                200,
                120
              ],
              [
                150,
                180
              ],
              [
                100,
                240
              ],
              [
                50,
                300
              ]
            ]
          }
        },
        {
          "t": "1.4-2",
          "q": "Phone cases and smartphones are complements. If the price of smartphones increases significantly, what happens in the market for phone cases?",
          "o": [
            "The demand for phone cases increases, and the demand curve shifts to the right.",
            "The quantity demanded of phone cases decreases along an unchanged demand curve.",
            "The supply of phone cases decreases, and the supply curve shifts to the left.",
            "The demand for phone cases decreases, and the demand curve shifts to the left."
          ],
          "a": 3,
          "w": "*Complements* birlikte kullanılır: telefon pahalanınca daha az telefon alınır, kılıf talebi de her fiyatta düşer → sola. Kılıfın kendi fiyatı değişmedi; bu yüzden eğri üzerinde hareket değil, kayma olur. *Substitute* olsaydı yön ters olurdu (talep artardı)."
        },
        {
          "t": "1.4-2",
          "q": "During a recession, incomes in Türkiye fall and the demand for second-hand clothing increases. This suggests that second-hand clothing is",
          "o": [
            "a normal good",
            "an inferior good",
            "a complement of new clothing",
            "a good whose supply has decreased"
          ],
          "a": 1,
          "w": "Gelir düşünce talebi artan mal *inferior good*'dur (gelir ile talep ters yönde). *Normal good*'da gelir düşünce talep azalır. İkinci el ile yeni kıyafet birbirinin yerine kullanılır, yani *substitutes*'tır, *complements* değil. Soru alıcıların davranışını anlatıyor; arzla ilgili bilgi yok."
        },
        {
          "t": "1.5",
          "q": "Assuming nothing else changes, an increase in the price of hazelnuts causes",
          "o": [
            "an increase in supply, shown by a rightward shift of the supply curve",
            "a decrease in supply, shown by a leftward shift of the supply curve",
            "a decrease in quantity supplied, shown by a movement down along the supply curve",
            "an increase in quantity supplied, shown by a movement up along the supply curve"
          ],
          "a": 3,
          "w": "Ürünün kendi fiyatı arz eğrisini kaydırmaz; *law of supply* gereği fiyat ↑ → *quantity supplied* ↑: eğri üzerinde yukarı hareket. \"Increase in supply\" şıkkı fiyatı kaymayla karıştıran klasik tuzaktır; arz yalnız fiyat dışı bir belirleyici değişince kayar."
        },
        {
          "t": "1.5",
          "q": "The graph shows a shift in the supply of cotton T-shirts from S1 to S2. Which of the following could have caused this shift?",
          "o": [
            "A new machine that sews T-shirts twice as fast",
            "An increase in the wages paid to textile workers",
            "A decrease in the price of cotton T-shirts",
            "An increase in the number of T-shirt producers"
          ],
          "a": 1,
          "w": "S2, S1'in solunda: her fiyatta daha az tişört sunulur (*decrease in supply*); eğri \"yukarı\" çıkmış gibi görünse de bu bir azalıştır. Ücretler bir girdi maliyetidir (*input price*) → arz sola. Yeni makine (*technology*) ve yeni üreticiler (*number of sellers*) arzı sağa kaydırır; tişörtün kendi fiyatı ise eğri üzerinde hareket yaratır.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity",
            "ylabel": "Price",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  1,
                  1
                ],
                "to": [
                  8,
                  8
                ],
                "label": "S1",
                "dash": true
              },
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  6,
                  8
                ],
                "label": "S2"
              }
            ]
          }
        },
        {
          "t": "1.6-1",
          "q": "The graph shows the market for tickets to a school theater show. If the ticket price is set at 20 TL, which of the following will result?",
          "o": [
            "A surplus of 80 tickets",
            "A shortage of 60 tickets",
            "A shortage of 80 tickets",
            "A shortage of 140 tickets"
          ],
          "a": 2,
          "w": "20 TL denge fiyatının (40 TL) altındadır: talep edilen 140, arz edilen 60 bilet → Qd > Qs, *shortage* = 140 − 60 = 80. 140 çeldiricisi yalnız *quantity demanded*'ı okumaktır; *shortage* her zaman aynı fiyattaki iki miktarın farkıdır. Fiyat dengenin altındayken *surplus* olamaz.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity of tickets",
            "ylabel": "Price",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  1,
                  8
                ],
                "to": [
                  8,
                  1
                ],
                "label": "D"
              },
              {
                "from": [
                  2,
                  1
                ],
                "to": [
                  9,
                  8
                ],
                "label": "S"
              }
            ],
            "hlines": [
              {
                "p": 2,
                "label": "20 TL"
              }
            ],
            "points": [
              {
                "q": 5,
                "p": 4,
                "label": "E",
                "guides": true
              },
              {
                "q": 3,
                "p": 2,
                "guides": true
              },
              {
                "q": 7,
                "p": 2,
                "guides": true
              }
            ],
            "xticks": [
              {
                "v": 3,
                "label": "60"
              },
              {
                "v": 5,
                "label": "100"
              },
              {
                "v": 7,
                "label": "140"
              }
            ],
            "yticks": [
              {
                "v": 2,
                "label": "20 TL"
              },
              {
                "v": 4,
                "label": "40 TL"
              }
            ]
          }
        },
        {
          "t": "1.6-1",
          "q": "At the equilibrium price in a competitive market,",
          "o": [
            "buyers purchase every unit that sellers could ever produce",
            "there is a shortage that pushes the price up",
            "demand equals supply because both curves have just shifted",
            "quantity demanded equals quantity supplied, so there is no pressure for the price to change"
          ],
          "a": 3,
          "w": "Denge = Qd = Qs: bu fiyatta ne satılmayan mal yığılır ne de alamayan alıcı kalır (*market-clearing price*); fiyatı değiştirecek bir baskı yoktur. *Shortage* fiyat dengenin altındayken olur. Denge eğrilerin kaymasını gerektirmez; iki eğrinin kesiştiği yerdir."
        },
        {
          "t": "1.6-2",
          "q": "A new machine cuts the cost of producing simit in half. Assuming nothing else changes, what happens to the equilibrium price and quantity of simit?",
          "o": [
            "Price increases; quantity increases",
            "Price increases; quantity decreases",
            "Price decreases; quantity increases",
            "Price decreases; quantity decreases"
          ],
          "a": 2,
          "w": "Yeni makine satıcıları etkiler (*technology*): arz sağa kayar → yeni kesişim daha aşağıda ve sağda: P ↓, Q ↑. Arz kaymasında fiyat ile miktar zıt yönlere gider. \"P ↓, Q ↓\" talebin azalmasının sonucudur."
        }
      ]
    },
    {
      "no": 3,
      "level": "Orta",
      "minutes": 25,
      "questions": [
        {
          "t": "1.1",
          "q": "Which of the following questions would most likely be studied in macroeconomics rather than in microeconomics?",
          "o": [
            "Why did Türkiye's overall inflation rate rise last year?",
            "How will a rise in the price of cocoa affect the output of a chocolate maker in Gaziantep?",
            "How many workers should a textile firm hire this season?",
            "How does a new competitor affect the price of taxi rides in İzmir?"
          ],
          "a": 0,
          "w": "*Macroeconomics* ekonominin bütününe bakar: enflasyon, işsizlik, büyüme. Öteki üçü tek bir firmanın ya da tek bir piyasanın sorusudur (*microeconomics*). Tuzak: bir şirketin ya da şehrin büyük olması onu makro yapmaz; belirleyici olan bütün ekonominin toplamlarına (*aggregates*) bakılmasıdır."
        },
        {
          "t": "1.1",
          "q": "An economist would classify which of the following as investment?",
          "o": [
            "A family buys shares of a Turkish airline on the stock market.",
            "A bakery buys a new industrial oven.",
            "A student deposits her savings in a bank account.",
            "A retiree buys gold coins."
          ],
          "a": 1,
          "w": "Ekonomide *investment* sermaye mallarına (makine, bina) yapılan harcamadır: fırının yeni fırın alması. Hisse, mevduat ya da altın almak finansal varlık alımıdır; yeni üretim kapasitesi yaratmaz. Aynı mantıkla *capital* de para değil, insan yapımı üretim araçlarıdır."
        },
        {
          "t": "1.2-1",
          "q": "The table shows points on an economy's production possibilities curve. If the economy moves from point D to point B, what is the opportunity cost of the move?",
          "o": [
            "12 million tons of wheat",
            "18 million tons of wheat",
            "20 thousand laptops",
            "30 thousand laptops"
          ],
          "a": 2,
          "w": "D'den B'ye giderken buğday artar (30 → 48), dizüstü azalır (30 → 10 bin). *Opportunity cost* vazgeçilendir: 20 bin dizüstü. 18 milyon ton buğday çeldiricisi kazanılanı maliyet sanmaktır. Yön önemlidir: B → D sorulsaydı cevap buğday cinsinden olurdu (48 − 30 = 18).",
          "fig": {
            "type": "table",
            "head": [
              "Point",
              "Laptops (thousands)",
              "Wheat (million tons)"
            ],
            "rows": [
              [
                "A",
                0,
                50
              ],
              [
                "B",
                10,
                48
              ],
              [
                "C",
                20,
                42
              ],
              [
                "D",
                30,
                30
              ],
              [
                "E",
                40,
                0
              ]
            ]
          }
        },
        {
          "t": "1.2-1",
          "q": "The graph shows a country's production possibilities curve for clothing and food. Point R represents producing only food. The country's citizens want to consume both goods. Which of the following statements is correct?",
          "o": [
            "S is productively efficient, but R is not, because R includes no clothing.",
            "R and S are both productively efficient, but R is probably not allocatively efficient.",
            "T is allocatively efficient, because it uses fewer resources than R or S.",
            "R, S, and T are all productively efficient, because each of them can be produced."
          ],
          "a": 1,
          "w": "Eğrinin üstündeki her nokta (uçlar dahil) *productively efficient*'tır: kaynak israfı yoktur. *Allocative efficiency* toplumun istediği mal karışımıdır; halk iki malı da istiyorsa yalnız gıda üreten R bu karışım değildir. T üretilebilir ama eğrinin içindedir, yani verimsizdir. \"Uç nokta verimsizdir\" şıkkı en sık tuzaktır.",
          "fig": {
            "type": "graph",
            "xlabel": "Clothing",
            "ylabel": "Food",
            "xmax": 10,
            "ymax": 10,
            "ppc": [
              {
                "qmax": 9,
                "pmax": 6,
                "k": 2,
                "label": "PPC"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 6,
                "label": "R"
              },
              {
                "q": 5.4,
                "p": 4.8,
                "label": "S"
              },
              {
                "q": 4,
                "p": 2,
                "label": "T"
              }
            ]
          }
        },
        {
          "t": "1.2-2",
          "q": "Alpha and Beta have identical production possibilities curves today, shown in the graph. Alpha chooses point A, and Beta chooses point B. Assuming nothing else changes, which of the following is most likely in ten years?",
          "o": [
            "Alpha's PPC will have shifted outward more than Beta's.",
            "Neither PPC will shift, because both countries are producing on their PPCs today.",
            "Beta's PPC will shift inward, because its citizens consume less today.",
            "Beta's PPC will have shifted outward more than Alpha's."
          ],
          "a": 3,
          "w": "*Capital goods* (makine, fabrika) gelecekte daha çok üretmeyi sağlar. Beta bugün daha az tüketip daha çok sermaye malı üretiyor → gelecekte PPC'si iki eksende de daha çok dışa kayar. Bugün eğrinin üstünde olmak gelecekte kaymayı engellemez. Bugün az tüketmek kaynakları azaltmaz, eğriyi içe kaydırmaz.",
          "fig": {
            "type": "graph",
            "xlabel": "Capital goods",
            "ylabel": "Consumer goods",
            "xmax": 10,
            "ymax": 10,
            "ppc": [
              {
                "qmax": 8,
                "pmax": 8,
                "k": 2,
                "label": "PPC (today)"
              }
            ],
            "points": [
              {
                "q": 4.8,
                "p": 6.4,
                "label": "A (Alpha)",
                "guides": true
              },
              {
                "q": 6.4,
                "p": 4.8,
                "label": "B (Beta)",
                "guides": true
              }
            ]
          }
        },
        {
          "t": "1.2-2",
          "q": "The graph shows a shift in Karadeniz's production possibilities curve from PPC1 to PPC2. Which of the following events is most likely to have caused this shift?",
          "o": [
            "An increase in the number of workers in the economy",
            "A rise in consumer demand for hazelnuts",
            "A reduction in the unemployment rate",
            "A new fertilizer that increases hazelnut harvests"
          ],
          "a": 3,
          "w": "Yalnız fındık ekseninin ucu uzadı, yazılım ucu sabit kaldı: gelişme yalnız fındık üretimini etkiliyor (fındığa özgü teknoloji). İşçi sayısı artsaydı iki mal da artardı ve eğri iki eksende kayardı. Talep artışı eğri üzerinde harekettir; işsizliğin azalması ise içerideki noktayı eğriye yaklaştırır, eğriyi kaydırmaz.",
          "fig": {
            "type": "graph",
            "xlabel": "Software",
            "ylabel": "Hazelnuts",
            "xmax": 10,
            "ymax": 10,
            "ppc": [
              {
                "qmax": 6,
                "pmax": 6,
                "k": 2,
                "label": "PPC1",
                "dash": true
              },
              {
                "qmax": 6,
                "pmax": 9,
                "k": 2,
                "label": "PPC2"
              }
            ]
          }
        },
        {
          "t": "1.2-2",
          "q": "Which of the following best explains why a country's production possibilities curve is bowed outward (concave to the origin)?",
          "o": [
            "Resources are not equally suited to producing both goods, so shifting more resources to one good raises its opportunity cost.",
            "The country's resources are fixed, so it can never produce more of either good.",
            "Consumers want more of one good than of the other.",
            "The country has unemployment, so it produces inside its PPC."
          ],
          "a": 0,
          "w": "Dışa bükük eğri *law of increasing opportunity cost*'u gösterir: kaynaklar iki mala eşit uygun değildir (*not perfectly adaptable*). Bir mala önce en uygun kaynaklar kaydırılır; uygun olmayanlar çekildikçe her ek birim daha büyük bir kayba mal olur. Sabit kaynak varsayımı eğrinin neden bir sınır olduğunu açıklar, şeklini değil."
        },
        {
          "t": "1.3-1",
          "q": "Country P needs 2 labor hours to produce a crate of olives and 5 labor hours to produce a bolt of cloth. Country Q needs 3 labor hours for a crate of olives and 6 labor hours for a bolt of cloth. Which of the following is true?",
          "o": [
            "Country Q has an absolute advantage in both goods, because its numbers are larger.",
            "Country P has a comparative advantage in both goods, so it cannot gain from trade.",
            "Country P has an absolute advantage in both goods, but Country Q has a comparative advantage in cloth.",
            "Country Q has a comparative advantage in olives, and Country P has a comparative advantage in cloth."
          ],
          "a": 2,
          "w": "*Input* sorusu: küçük sayı üstünlük → P iki malda da *absolute advantage* sahibi (2 < 3, 5 < 6). I.O.U.: 1 kumaş P'ye 5 ÷ 2 = 2,5, Q'ya 6 ÷ 3 = 2 kasa zeytine mal olur → kumaşta Q; 1 kasa zeytin P'ye 2/5, Q'ya 1/2 kumaşa mal olur → zeytinde P. İki malda üstün olan ülke de ticaretten kazanır; kimse iki malda birden *comparative advantage* sahibi olamaz."
        },
        {
          "t": "1.3-1",
          "q": "The graph shows the production possibilities curves of Country A and Country B, which have equal amounts of resources. Which country has the comparative advantage in wheat, and what is its opportunity cost of 1 unit of wheat?",
          "o": [
            "Country A; 2 units of cloth",
            "Country A; 1/2 unit of cloth",
            "Country B; 6 units of cloth",
            "Country B; 1 unit of cloth"
          ],
          "a": 3,
          "w": "PPC'nin uçları *output* verir → O.O.O.: A'da 1 buğday = 8 ÷ 4 = 2 kumaş, B'de 6 ÷ 6 = 1 kumaş → buğdayda B (1 < 2). \"1/2 kumaş\" kesri ters kurmaktır: o, A'da 1 kumaşın buğday cinsinden maliyetidir. 6 ise B'nin toplam üretimidir, birim maliyet değil.",
          "fig": {
            "type": "graph",
            "xlabel": "Wheat",
            "ylabel": "Cloth",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  4,
                  0
                ],
                "to": [
                  0,
                  8
                ],
                "label": "Country A"
              },
              {
                "from": [
                  6,
                  0
                ],
                "to": [
                  0,
                  6
                ],
                "label": "Country B"
              }
            ],
            "xticks": [
              {
                "v": 4,
                "label": "4"
              },
              {
                "v": 6,
                "label": "6"
              }
            ],
            "yticks": [
              {
                "v": 6,
                "label": "6"
              },
              {
                "v": 8,
                "label": "8"
              }
            ]
          }
        },
        {
          "t": "1.3-1",
          "q": "If a country has an absolute advantage in producing both of two goods, which of the following is true?",
          "o": [
            "It can still gain from trade by specializing in the good for which its opportunity cost is lower.",
            "It has a comparative advantage in both goods.",
            "It cannot gain from trading with a less productive country.",
            "Its opportunity costs are lower for both goods."
          ],
          "a": 0,
          "w": "Bir malın *opportunity cost*'u ötekininkinin tersidir (*reciprocal*); bu yüzden iki ülkenin maliyetleri farklıysa biri bir malda, öteki diğer malda daha ucuzdur. İki malda da daha üretken olan ülke, maliyeti görece düşük olan malda uzmanlaşıp ticaretle kazanır. *Absolute advantage* ile *comparative advantage*'ı eşitlemek en sık hatadır."
        },
        {
          "t": "1.3-2",
          "q": "In Norland, producing 1 ton of fish costs 2 tons of grain; in Southia, producing 1 ton of fish costs 5 tons of grain. Norland specializes in fish. Which of the following offers would be acceptable to BOTH countries?",
          "o": [
            "Norland sends 3 tons of fish for 10 tons of grain.",
            "Norland sends 1 ton of fish for 1.5 tons of grain.",
            "Norland sends 2 tons of fish for 4 tons of grain.",
            "Norland sends 1 ton of fish for 6 tons of grain."
          ],
          "a": 0,
          "w": "Önce bir ton balığa çevir: 1,5; 2; 10 ÷ 3 ≈ 3,33; 6 ton tahıl. Norland balık satar, kendi maliyetinden (2) fazlasını ister; Southia balık alır, kendi maliyetinden (5) azını öder → aralık 2 ile 5 arası, uçlar hariç. Yalnız 3,33 bu aralıktadır. \"2 balığa 4 tahıl\" uç değerdir: Norland için kendi üretmekle aynıdır, kazanç yok."
        },
        {
          "t": "1.3-2",
          "q": "Country K specializes in wheat and trades 4 units of wheat for 4 units of cloth. The graph shows K's PPC, its consumption before trade (A), its production after specializing (S), and its consumption after trade (C). Which of the following is correct?",
          "o": [
            "Trade shifts K's PPC outward so that it passes through point C.",
            "Trade lets K consume 2 more units of wheat with the same 4 units of cloth, a point outside its PPC.",
            "Point C is unattainable, so K cannot actually consume there.",
            "K gains 4 units of cloth, so trade increases K's production of cloth."
          ],
          "a": 1,
          "w": "Uzmanlaşan K 9 buğday üretir, 4'ünü 4 kumaşa verir: elinde 5 buğday + 4 kumaş (C). Kendi PPC'sinde 4 kumaşla en çok 3 buğday tüketebilirdi (A) → 2 buğday fazla, PPC'nin dışında (*gains from trade*). PPC kaymaz; üretim kapasitesi aynıdır, değişen tüketimdir. C yalnız ticaret olmadan *unattainable*'dır.",
          "fig": {
            "type": "graph",
            "xlabel": "Wheat",
            "ylabel": "Cloth",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  9,
                  0
                ],
                "to": [
                  0,
                  6
                ],
                "label": "PPC"
              }
            ],
            "points": [
              {
                "q": 3,
                "p": 4,
                "label": "A",
                "guides": true
              },
              {
                "q": 5,
                "p": 4,
                "label": "C",
                "guides": true
              },
              {
                "q": 9,
                "p": 0,
                "label": "S"
              }
            ],
            "xticks": [
              {
                "v": 3,
                "label": "3"
              },
              {
                "v": 5,
                "label": "5"
              },
              {
                "v": 9,
                "label": "9"
              }
            ],
            "yticks": [
              {
                "v": 4,
                "label": "4"
              },
              {
                "v": 6,
                "label": "6"
              }
            ]
          }
        },
        {
          "t": "1.4-1",
          "q": "When the price of döner falls, Emre notices that his weekly food budget now buys more döner than before, so he buys two more each week. This reason for buying more döner is called",
          "o": [
            "the income effect",
            "the substitution effect",
            "diminishing marginal utility",
            "an increase in demand"
          ],
          "a": 0,
          "w": "Fiyat düşünce aynı bütçenin alım gücü (*purchasing power*) artar: bu *income effect*'tir. *Substitution effect* görece ucuzlayan mala başka bir maldan geçmektir; burada vurgu bütçenin daha çok döner almasıdır. Fiyat düşüşü talebi değil, *quantity demanded*'ı artırır."
        },
        {
          "t": "1.4-2",
          "q": "Students hear that the price of graphing calculators will rise by 30 percent next month. Other things equal, what happens in the market for graphing calculators this month?",
          "o": [
            "Demand decreases, because calculators will soon be expensive.",
            "Quantity demanded increases, but demand does not change.",
            "Supply increases, and the supply curve shifts to the right.",
            "Demand increases, and the demand curve shifts to the right."
          ],
          "a": 3,
          "w": "Fiyatın gelecekte artacağı beklentisi (*expectations*) bugünkü talebi artırır: alıcılar zam gelmeden almak ister → bugün talep sağa. \"Pahalanacak, talep azalır\" şıkkı zamanı karıştırır: bugünkü fiyat değişmedi, gelecekteki fiyat bugünkü eğriyi kaydırır. Bugünkü fiyat değişmediği için *quantity demanded* şıkkı da yanlıştır."
        },
        {
          "t": "1.4-2",
          "q": "The table shows the weekly demand for umbrellas at a shop in İstanbul before and after a change. Which of the following best describes the change and a possible cause?",
          "o": [
            "An increase in quantity demanded caused by a fall in the price of umbrellas",
            "A decrease in demand caused by a fall in the price of raincoats",
            "An increase in demand caused by a forecast of a very rainy month",
            "An increase in supply caused by more umbrella sellers"
          ],
          "a": 2,
          "w": "Her fiyatta istenen miktar 20 arttı (40 TL'de 50 → 70): bütün tablo değişti, yani talep sağa kaydı (*increase in demand*). Yağmur beklentisi alıcıları etkiler (*tastes and preferences* ve hava). Fiyat düşüşü aynı tablo içinde aşağı inmektir, tabloyu değiştirmez. Yağmurluğun (*substitute*) ucuzlaması talebi azaltırdı; tablo ise bir artış gösteriyor.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Quantity demanded before",
              "Quantity demanded after"
            ],
            "rows": [
              [
                40,
                50,
                70
              ],
              [
                60,
                40,
                60
              ],
              [
                80,
                30,
                50
              ],
              [
                100,
                20,
                40
              ]
            ]
          }
        },
        {
          "t": "1.5",
          "q": "A farmer in Konya can grow either wheat or sugar beets on the same land. If the price of sugar beets rises sharply, what happens in the market for wheat?",
          "o": [
            "The supply of wheat increases, and the supply curve shifts to the right.",
            "The demand for wheat increases, and the demand curve shifts to the right.",
            "The quantity supplied of wheat increases along the supply curve.",
            "The supply of wheat decreases, and the supply curve shifts to the left."
          ],
          "a": 3,
          "w": "Arzın belirleyicisi *prices of other goods* (üretimde): aynı toprakta yetişebilen pancar pahalanınca çiftçi toprağı pancara kaydırır → her fiyatta daha az buğday → buğday arzı sola. Talepteki \"*substitute* fiyatı ↑ → talep ↑\" kuralıyla karıştırma; burada etkilenen alıcı değil, üreticidir."
        },
        {
          "t": "1.5",
          "q": "Hazelnut growers expect the price of hazelnuts to rise sharply next month. What happens to the supply of hazelnuts this month?",
          "o": [
            "It increases, because growers want to sell as many hazelnuts as possible right away.",
            "It decreases, because growers hold back hazelnuts to sell later at the higher price.",
            "It does not change, because only the current price affects supply.",
            "It increases, because the demand for hazelnuts will also rise next month."
          ],
          "a": 1,
          "w": "Üretici fiyatın artacağını bekliyorsa bugün malını depoda tutar → bugünkü arz sola (*expectations*). Talepteki beklentinin tersi yöndedir: alıcı zam bekleyince bugün talep artar, satıcı zam bekleyince bugün arz azalır. Bugünkü fiyat yalnız eğri üzerinde hareket yaratır; beklenti ise eğriyi kaydırır."
        },
        {
          "t": "1.6-1",
          "q": "The table shows the daily demand and supply of cherries at a market. If the price is 60 TL per kilogram, which of the following describes the market?",
          "o": [
            "A shortage of 80 kilograms; the price will rise toward 70 TL",
            "A surplus of 220 kilograms; the price will fall toward 50 TL",
            "A surplus of 80 kilograms; the price will fall toward 50 TL",
            "A surplus of 80 kilograms; demand will shift to the right until the surplus disappears"
          ],
          "a": 2,
          "w": "60 TL, dengenin (50 TL, 180 kg) üstündedir: Qs 220 > Qd 140 → *surplus* = 220 − 140 = 80 kg. Satıcılar fiyatı indirir; fiyat düştükçe Qd artar, Qs azalır ve fazla kapanır. Bu eğriler üzerinde harekettir, talep kaymaz. 220 kg yalnız arz edilen miktardır.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL/kg)",
              "Quantity demanded (kg)",
              "Quantity supplied (kg)"
            ],
            "rows": [
              [
                30,
                260,
                100
              ],
              [
                40,
                220,
                140
              ],
              [
                50,
                180,
                180
              ],
              [
                60,
                140,
                220
              ],
              [
                70,
                100,
                260
              ]
            ]
          }
        },
        {
          "t": "1.6-2",
          "q": "In the market for olive oil, demand increases and supply increases at the same time. Which of the following must be true?",
          "o": [
            "The equilibrium price rises, and the change in quantity is indeterminate.",
            "Both the equilibrium price and the equilibrium quantity rise.",
            "The equilibrium quantity rises, and the change in price is indeterminate.",
            "The equilibrium quantity falls, and the change in price is indeterminate."
          ],
          "a": 2,
          "w": "Ayrı çiz, sonra birleştir: talep ↑ → P ↑, Q ↑; arz ↑ → P ↓, Q ↑. Miktar iki kaymada da artıyor → kesin ↑; fiyat zıt yönlere itiliyor → *indeterminate* (kaymaların büyüklüğüne bağlı). İkisini birden kesin söyleyen şık çift kaymada her zaman yanlıştır."
        },
        {
          "t": "1.6-2",
          "q": "The graph shows the market for bus rides in a city. Which of the following events could cause the equilibrium to move from E to E1?",
          "o": [
            "A rise in the price of taxi rides, a substitute for bus rides",
            "A fall in the price of shared e-scooter rides, a substitute for bus rides",
            "A rise in the wages of bus drivers",
            "A fall in the price of bus tickets"
          ],
          "a": 1,
          "w": "E'den E1'e talep sola kaydı: P ↓, Q ↓. Scooter (otobüsün *substitute*'u) ucuzlayınca bazı yolcular scooter'a geçer → otobüs talebi sola. Taksi pahalanırsa talep sağa kayardı (ikamede fiyat ile talep aynı yönde). Şoför ücretleri arzı kaydırır; bilet fiyatının kendisi ise eğri üzerinde hareket yaratır.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity of rides",
            "ylabel": "Price",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  1,
                  9
                ],
                "to": [
                  9,
                  1
                ],
                "label": "D1",
                "dash": true
              },
              {
                "from": [
                  0,
                  7
                ],
                "to": [
                  6,
                  1
                ],
                "label": "D2"
              },
              {
                "from": [
                  1,
                  1
                ],
                "to": [
                  9,
                  9
                ],
                "label": "S"
              }
            ],
            "points": [
              {
                "q": 5,
                "p": 5,
                "label": "E",
                "guides": true
              },
              {
                "q": 3.5,
                "p": 3.5,
                "label": "E1",
                "guides": true
              }
            ]
          }
        }
      ]
    },
    {
      "no": 4,
      "level": "Zor",
      "minutes": 30,
      "questions": [
        {
          "t": "1.1",
          "q": "Consider the following statements.\nI. If the minimum wage rises, some teenagers will lose their jobs.\nII. The government ought to provide free public transport for all students.\nIII. Türkiye's inflation rate in 2024 was below 20 percent.\nWhich of the statements are positive statements?",
          "o": [
            "I only",
            "II only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "*Positive* ifade veriyle test edilebilir: I bir neden-sonuç iddiası, III bir veri iddiasıdır. III'ün doğru mu yanlış mı olduğu önemli değil; veriyle kontrol edilip yanlış çıksa bile *positive* kalır. II \"ought\" içerir: değer yargısı, yani *normative*. \"Yalnız I\" şıkkı, *positive*'i \"doğru\" ile karıştıranların tuzağıdır."
        },
        {
          "t": "1.2-1",
          "q": "The table shows an economy's production possibilities. Consider the following statements.\nI. Producing 20 buses and 80 thousand tons of tomatoes is attainable but inefficient.\nII. Moving from point D to point B has an opportunity cost of 30 thousand tons of tomatoes.\nIII. The opportunity cost of each additional 10 buses is constant.\nWhich of the statements are true?",
          "o": [
            "I only",
            "I and II only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 0,
          "w": "I doğru: 20 otobüsle en çok 86 bin ton domates üretilebilir; 80 < 86 → eğrinin içinde, ulaşılabilir ama verimsiz. II yanlış: D'den B'ye giderken domates artar (66 → 96); vazgeçilen domates değil, 20 otobüstür. Yön tuzağı budur. III yanlış: her 10 otobüsün maliyeti 4, 10, 20, 66 bin ton domates; artıyor, eğri dışa bükük.",
          "fig": {
            "type": "table",
            "head": [
              "Point",
              "Electric buses",
              "Tomatoes (thousand tons)"
            ],
            "rows": [
              [
                "A",
                0,
                100
              ],
              [
                "B",
                10,
                96
              ],
              [
                "C",
                20,
                86
              ],
              [
                "D",
                30,
                66
              ],
              [
                "E",
                40,
                0
              ]
            ]
          }
        },
        {
          "t": "1.2-1",
          "q": "Ela can spend her summer working at a hotel for 20,000 TL, doing an unpaid internship that she values at 15,000 TL, or joining a volunteer program that she values at 12,000 TL. Instead, she takes a summer course that charges 8,000 TL in fees. She can do only one of these activities. What is the full economic cost of the summer course?",
          "o": [
            "20,000 TL",
            "28,000 TL",
            "35,000 TL",
            "55,000 TL"
          ],
          "a": 1,
          "w": "Ekonomik maliyet = cebinden çıkan (8.000 TL kurs ücreti) + vazgeçilen en iyi alternatif (otel işi, 20.000 TL) = 28.000 TL. Staj ve gönüllü program *trade-offs*'un parçasıdır ama maliyete eklenmez, çünkü Ela hepsini birden yapamazdı. 55.000 TL bütün seçenekleri toplar; 20.000 TL kurs ücretini unutur; 35.000 TL iki alternatifi toplar."
        },
        {
          "t": "1.2-2",
          "q": "The graph shows an economy's production possibilities curve. Consider the following statements.\nI. As more robots are produced, the opportunity cost of each additional robot rises.\nII. As more wheat is produced, the opportunity cost of each additional unit of wheat rises.\nIII. Moving from point X to point Y has an opportunity cost of zero.\nWhich of the statements are true?",
          "o": [
            "I only",
            "I and II only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 3,
          "w": "Dışa bükük eğride artan maliyet iki yönde de geçerlidir: robot arttıkça her ek robot daha çok buğdaya, buğday arttıkça her ek buğday daha çok robota mal olur (I ve II). III de doğrudur: X eğrinin içinde; Y'ye giderken iki maldan da daha çok üretilir, hiçbir şeyden vazgeçilmez. \"Yalnız I\", artan maliyeti tek yönlü sanma tuzağıdır.",
          "fig": {
            "type": "graph",
            "xlabel": "Robots",
            "ylabel": "Wheat",
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
                "label": "X",
                "guides": true
              },
              {
                "q": 4.8,
                "p": 6.4,
                "label": "Y",
                "guides": true
              }
            ]
          }
        },
        {
          "t": "1.2-2",
          "q": "Which of the following pairs of events would cause, respectively, a movement from a point inside a country's PPC to a point on its PPC, and an outward shift of its PPC?",
          "o": [
            "Immigration increases the labor force; unemployment falls during an economic recovery.",
            "Consumers demand more cars; a war destroys many factories.",
            "Unemployment falls during an economic recovery; immigration increases the labor force.",
            "A recession begins; a new technology raises productivity."
          ],
          "a": 2,
          "w": "Toparlanmada işsizlik düşer: atıl kaynaklar işe döner, nokta içeriden eğriye çıkar (kayma yok). Göçle işgücü artar: kaynak miktarı ↑ → eğri dışa kayar. Sırası ters olan şık tuzaktır. Resesyon noktayı eğrinin içine iter, talep değişimi eğri üzerinde harekettir, savaş eğriyi içe kaydırır."
        },
        {
          "t": "1.3-1",
          "q": "The table shows the acres of land each farmer needs to produce 100 bushels of corn or 100 bushels of wheat. Which of the following is correct?",
          "o": [
            "100 bushels of corn cost Ayla 50 bushels of wheat, and Ayla has the comparative advantage in corn.",
            "100 bushels of corn cost Ayla 200 bushels of wheat, and Hasan has the comparative advantage in corn because he needs fewer acres.",
            "100 bushels of corn cost Ayla 200 bushels of wheat, and Ayla has the comparative advantage in corn.",
            "100 bushels of corn cost Ayla 250 bushels of wheat, and Hasan has the comparative advantage in corn."
          ],
          "a": 2,
          "w": "Dönüm tablosu bir *input* tablosudur → I.O.U.: Ayla'nın 100 *bushel* mısıra ayırdığı 8 dönüme 8 ÷ 4 = 2 kez 100 *bushel* buğday sığar → 200 *bushel*. Hasan için 5 ÷ 2 = 2,5 → 250 *bushel*. Mısırda daha düşük maliyet Ayla'dadır. Hasan iki üründe de daha az dönüm kullanır (*absolute advantage*), ama \"daha az dönüm\" *comparative advantage* demek değildir; en sık tuzak budur. 50 *bushel* kesri ters kurmaktır.",
          "fig": {
            "type": "table",
            "head": [
              "Farmer",
              "Corn (acres per 100 bushels)",
              "Wheat (acres per 100 bushels)"
            ],
            "rows": [
              [
                "Hasan",
                5,
                2
              ],
              [
                "Ayla",
                8,
                4
              ]
            ]
          }
        },
        {
          "t": "1.3-1",
          "q": "In one day, Ece can sew 6 dresses or 12 scarves, and Lale can sew 2 dresses or 8 scarves. All of the following statements are true EXCEPT:",
          "o": [
            "Ece has an absolute advantage in both dresses and scarves.",
            "Lale has a comparative advantage in dresses, because her opportunity cost of a dress is 4 scarves.",
            "Lale's opportunity cost of one scarf is 1/4 of a dress.",
            "Ece should specialize in dresses, and Lale should specialize in scarves."
          ],
          "a": 1,
          "w": "O.O.O.: 1 elbise Ece'ye 12 ÷ 6 = 2, Lale'ye 8 ÷ 2 = 4 eşarba mal olur → elbisede Ece (2 < 4). 1 eşarp Lale'ye 2 ÷ 8 = 1/4, Ece'ye 1/2 elbise → eşarpta Lale. Yanlış ifade B şıkkıdır: 4 eşarp daha yüksek maliyettir; *comparative advantage* düşük maliyette olur. Ece iki üründe de daha çok üretir (6 > 2, 12 > 8)."
        },
        {
          "t": "1.3-1",
          "q": "In Country X, producing 1 car requires giving up 5 bicycles. In Country Y, producing 1 bicycle requires giving up 1/3 of a car. Which of the following is correct?",
          "o": [
            "Y has a comparative advantage in cars, and X has a comparative advantage in bicycles.",
            "X has a comparative advantage in cars, because 5 is greater than 1/3.",
            "Y has a comparative advantage in both goods.",
            "Neither country has a comparative advantage, because the costs are measured in different goods."
          ],
          "a": 0,
          "w": "Önce aynı birime çevir (*reciprocal*): Y'de 1 bisiklet = 1/3 araba ⇔ 1 araba = 3 bisiklet. Araba maliyeti X'te 5, Y'de 3 bisiklet → arabada Y. Bisiklet maliyeti X'te 1/5, Y'de 1/3 araba → bisiklette X. Farklı mal cinsinden yazılmış iki sayıyı doğrudan kıyaslamak tuzaktır; bir ülke iki malda birden *comparative advantage* sahibi de olamaz."
        },
        {
          "t": "1.3-2",
          "q": "In Country A, the opportunity cost of 1 kilogram of coffee is 2 kilograms of tea; in Country B, it is 6 kilograms of tea. The countries specialize according to comparative advantage. Consider the following offers.\nI. A gives 1 kilogram of coffee for 1.5 kilograms of tea.\nII. A gives 3 kilograms of coffee for 12 kilograms of tea.\nIII. B gives 10 kilograms of tea for 2 kilograms of coffee.\nWhich of the following offers would benefit both countries?",
          "o": [
            "II only",
            "I and II only",
            "II and III only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "Kahvede A uzmanlaşır (2 < 6). Her teklifi 1 kg kahveye çevir: I 1,5 kg çay (A kendi maliyeti olan 2'den azını kabul etmez), II 12 ÷ 3 = 4 kg, III 10 ÷ 2 = 5 kg çay. Kazançlı aralık 2 ile 6 arası (uçlar hariç) → II ve III. Teklifin hangi ülkenin ağzından yazıldığı oranı değiştirmez."
        },
        {
          "t": "1.3-2",
          "q": "Country M's opportunity cost of producing 1 tractor is 8 tons of olives. Country N offers to sell M 1 tractor for 7 tons of olives, and Country P offers to sell M 3 tractors for 18 tons of olives. Which of the following is the best decision for M?",
          "o": [
            "Buy tractors from P, saving 2 tons of olives per tractor compared with producing them itself",
            "Buy tractors from N, because N's price is closer to M's own opportunity cost",
            "Produce its own tractors, because both offers cost more than its opportunity cost",
            "Buy tractors from P, saving 18 tons of olives per tractor"
          ],
          "a": 0,
          "w": "Teklifleri bir traktöre çevir: N 7, P 18 ÷ 3 = 6 ton zeytin. İkisi de M'nin kendi maliyetinden (8) ucuzdur, yani ikisi de kazançlıdır; en ucuzu P → traktör başına 8 − 6 = 2 ton tasarruf. 18 ton toplam ödemedir, tasarruf değil. Ülke her zaman en iyi teklife gider."
        },
        {
          "t": "1.4-1",
          "q": "Which of the following situations adds to the market demand for luxury cars?",
          "o": [
            "Kaan wants a luxury car but does not have the money to buy one.",
            "Selin can afford a luxury car but has no interest in owning one.",
            "A dealer has ten luxury cars ready to sell.",
            "Murat wants a luxury car and has enough savings to buy one at the current price."
          ],
          "a": 3,
          "w": "Talep için iki koşul birden gerekir: *willing and able*. Kaan istekli ama gücü yetmiyor; Selin'in gücü yetiyor ama istekli değil; ikisi de talepte sayılmaz. Bayinin elindeki arabalar *supply* tarafıdır."
        },
        {
          "t": "1.4-1",
          "q": "The graph shows the demand for monthly bus passes. A movement from point J to point K could be caused by which of the following, and what is the movement called?",
          "o": [
            "A decrease in the price of bus passes; an increase in demand",
            "An increase in students' incomes; an increase in quantity demanded",
            "An increase in the price of taxi rides; an increase in demand",
            "A decrease in the price of bus passes; an increase in quantity demanded"
          ],
          "a": 3,
          "w": "J ile K aynı eğri üzerindedir: yalnız ürünün kendi fiyatı değişti (düştü) → eğri üzerinde aşağı-sağa hareket = *change in quantity demanded*. \"Increase in demand\" adı yalnız eğri kayınca kullanılır. Gelir ya da *substitute* fiyatı değişseydi bütün eğri sağa kayardı, nokta aynı eğri üzerinde kalmazdı.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity of passes",
            "ylabel": "Price",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  1,
                  7
                ],
                "to": [
                  7,
                  1
                ],
                "label": "D"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 6,
                "label": "J",
                "guides": true
              },
              {
                "q": 5,
                "p": 3,
                "label": "K",
                "guides": true
              }
            ]
          }
        },
        {
          "t": "1.4-2",
          "q": "Each of the following would shift the demand curve for electric scooters EXCEPT",
          "o": [
            "an increase in the price of bus tickets",
            "a decrease in the price of the lithium batteries used to build scooters",
            "a rise in consumers' incomes, if electric scooters are a normal good",
            "a popular influencer posting enthusiastic videos about scooters"
          ],
          "a": 1,
          "w": "Batarya scooter üretiminin girdisidir; girdi fiyatı üreticiyi etkiler → arz kayar, talep değil. Otobüs biletinin (*substitute*) pahalanması, gelir artışı (*normal good*) ve fenomen etkisi (*tastes*) alıcıları etkiler, talebi kaydırır. \"Hangisi talebi kaydırmaz?\" sorusunun klasik cevabı girdi fiyatıdır."
        },
        {
          "t": "1.4-2",
          "q": "Assume that instant noodles are an inferior good and restaurant meals are a normal good. Incomes in Eskişehir rise. Consider the following statements.\nI. The demand curve for instant noodles shifts to the left.\nII. The demand curve for restaurant meals shifts to the right.\nIII. The quantity demanded of instant noodles falls along an unchanged demand curve.\nWhich of the statements are true?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II, and III"
          ],
          "a": 1,
          "w": "Gelir ↑: *inferior good* (hazır erişte) talebi sola, *normal good* (restoran yemeği) talebi sağa → I ve II doğru. III yanlış: gelir fiyat dışı bir etkendir, eğriyi kaydırır; \"eğri sabit, miktar düşer\" ancak eriştenin kendi fiyatı artsaydı doğru olurdu."
        },
        {
          "t": "1.4-2",
          "q": "The graph shows two demand curves for basketball shoes. Which of the following correctly matches each movement with a possible cause?",
          "o": [
            "A to B: a famous player starts wearing the shoes; A to C: a fall in the price of the shoes",
            "A to B: a rise in consumers' incomes; A to C: a fall in the price of the shoes",
            "A to B: a fall in the price of the shoes; A to C: a rise in the price of the shoes",
            "A to B: a fall in the price of the shoes; A to C: a famous player starts wearing the shoes"
          ],
          "a": 3,
          "w": "A → B aynı eğri üzerinde: fiyat düşüyor, miktar artıyor → *change in quantity demanded*, nedeni yalnız ayakkabının kendi fiyatıdır. A → C aynı fiyatta daha çok miktar: eğri sağa kaydı (*increase in demand*), nedeni fiyat dışı bir etken, ünlü oyuncunun etkisi (*tastes and preferences*). İki yol da miktarı aynı kadar artırır ama adları farklıdır.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity of shoes",
            "ylabel": "Price",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  1,
                  8
                ],
                "to": [
                  7,
                  2
                ],
                "label": "D1"
              },
              {
                "from": [
                  3,
                  8
                ],
                "to": [
                  9,
                  2
                ],
                "label": "D2"
              }
            ],
            "points": [
              {
                "q": 3,
                "p": 6,
                "label": "A"
              },
              {
                "q": 5,
                "p": 4,
                "label": "B"
              },
              {
                "q": 5,
                "p": 6,
                "label": "C"
              }
            ]
          }
        },
        {
          "t": "1.5",
          "q": "Consider the following events in the market for tost near a school.\nI. The government places a tax on each tost sold.\nII. The price of tost rises from 40 TL to 60 TL.\nIII. Several new tost shops open near the school.\nWhich of the following events would increase the supply of tost?",
          "o": [
            "II only",
            "III only",
            "I and III only",
            "II and III only"
          ],
          "a": 1,
          "w": "Yeni tostçular (*number of sellers*) arzı sağa kaydırır (III). Tost başına vergi maliyeti artırır → arz sola (I). Tostun kendi fiyatının artması yalnız *quantity supplied*'ı artırır, eğri kaymaz (II); \"II ve III\" şıkkı bu tuzağa düşer."
        },
        {
          "t": "1.5",
          "q": "The table shows the weekly supply of handmade candles before and after a change. Which of the following is consistent with the change?",
          "o": [
            "The price of candles fell from 50 TL to 20 TL.",
            "Candle makers began using a faster molding machine.",
            "The government began paying candle makers a subsidy.",
            "The price of paraffin wax, a key input, increased."
          ],
          "a": 3,
          "w": "Her fiyatta arz edilen miktar 15 azaldı (40 TL'de 60 → 45): bütün tablo değişti → arz sola (*decrease in supply*). Mum yapımının girdisi olan parafinin pahalanması maliyeti artırır → arz sola. Daha hızlı makine (*technology*) ve sübvansiyon arzı artırır. Mum fiyatının 50 TL'den 20 TL'ye düşmesi tek bir tablo içinde aşağı inmektir; iki tablo arasındaki farkı açıklamaz.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Quantity supplied before",
              "Quantity supplied after"
            ],
            "rows": [
              [
                20,
                30,
                15
              ],
              [
                30,
                45,
                30
              ],
              [
                40,
                60,
                45
              ],
              [
                50,
                75,
                60
              ]
            ]
          }
        },
        {
          "t": "1.6-1",
          "q": "The table shows the daily demand and supply of taxi rides in a city. If a city rule keeps the fare at 80 TL per ride, which of the following will occur?",
          "o": [
            "A shortage of 300 rides that persists as long as the rule is in place",
            "A shortage of 300 rides that disappears as the fare rises to 100 TL",
            "A surplus of 300 rides, because drivers want to offer more rides at 80 TL",
            "Neither a shortage nor a surplus, because 500 rides will be bought and sold"
          ],
          "a": 0,
          "w": "80 TL dengenin (100 TL, 700 yolculuk) altındadır: Qd 800 > Qs 500 → *shortage* = 300. Normalde alıcılar fiyatı yukarı iter (*bid up*) ve açık kapanırdı; ama kural fiyatın yükselmesini engellediği için açık kalıcıdır. Gerçekleşen alışveriş 500 yolculuktur, fakat bu açık olmadığı anlamına gelmez: 300 yolculuk o fiyattan istenip bulunamaz.",
          "fig": {
            "type": "table",
            "head": [
              "Fare (TL)",
              "Quantity demanded (rides)",
              "Quantity supplied (rides)"
            ],
            "rows": [
              [
                60,
                900,
                300
              ],
              [
                80,
                800,
                500
              ],
              [
                100,
                700,
                700
              ],
              [
                120,
                600,
                900
              ],
              [
                140,
                500,
                1100
              ]
            ]
          }
        },
        {
          "t": "1.6-2",
          "q": "Frost destroys much of the orange harvest in Antalya. Oranges are the main input in orange juice, and apple juice is a substitute for orange juice. What happens to the equilibrium price and quantity of apple juice?",
          "o": [
            "Price increases; quantity increases",
            "Price increases; quantity decreases",
            "Price decreases; quantity increases",
            "Price decreases; quantity decreases"
          ],
          "a": 0,
          "w": "Zincir fiyat üzerinden ilerler: portakal arzı ↓ → portakal suyunun girdisi pahalanır → portakal suyu arzı sola, fiyatı ↑ → ikame olan elma suyunun talebi sağa → elma suyunda P ↑, Q ↑. \"P ↑, Q ↓\" portakal suyu piyasasının sonucudur; elma suyu piyasasında kayan eğri arz değil, taleptir."
        },
        {
          "t": "1.6-2",
          "q": "In the market for olive oil, the equilibrium price rose and the equilibrium quantity fell. Which of the following could explain this outcome?",
          "o": [
            "Demand increased while supply did not change.",
            "Supply increased while demand decreased.",
            "Supply decreased while demand did not change.",
            "Demand and supply both increased."
          ],
          "a": 2,
          "w": "P ↑ ile Q ↓ birlikte arzın azalmasının izidir: arz kaymasında fiyat ile miktar zıt yönlere gider. Talep artsaydı Q da artardı. Arz ↑ + talep ↓ fiyatı kesin düşürür; talep ve arz birlikte artarsa miktar kesin artar. \"Fiyat arttıysa talep artmıştır\" en sık çıkarım hatasıdır."
        }
      ]
    },
    {
      "no": 5,
      "level": "Çok zor",
      "minutes": 35,
      "questions": [
        {
          "t": "1.1",
          "q": "A municipality is deciding how many extra street-cleaning shifts to run each week. Each shift costs 12,000 TL. The estimated benefit of the 1st shift is 30,000 TL, the 2nd 20,000 TL, the 3rd 14,000 TL, the 4th 9,000 TL, and the 5th 6,000 TL. A council member argues for 5 shifts because their total benefit (79,000 TL) exceeds their total cost (60,000 TL). Which of the following is the best evaluation?",
          "o": [
            "The member is correct, because total benefit exceeds total cost at 5 shifts.",
            "The city should run 3 shifts, because the 4th and 5th shifts each add less benefit than they cost.",
            "The city should run 4 shifts, because the total benefit of 4 shifts is greater than 48,000 TL.",
            "The city should run only 1 shift, because only the 1st shift's benefit is more than double its cost."
          ],
          "a": 1,
          "w": "Marjinal düşün: 3. vardiya 14.000 > 12.000 TL, 4. vardiya 9.000 < 12.000 TL → 3 vardiya. Net fayda 3 vardiyada 64.000 − 36.000 = 28.000 TL ile en yüksektir; 4 vardiyada 25.000, 5 vardiyada 19.000 TL'ye düşer. Toplam fayda > toplam maliyet olması her ek vardiyanın değdiği anlamına gelmez; *marginal* = *additional*."
        },
        {
          "t": "1.2-1",
          "q": "The table shows points on an economy's production possibilities curve. If the economy moves from point B to point D, what is the opportunity cost per thousand medical kits gained?",
          "o": [
            "About 0.48 thousand textbooks",
            "1.4 thousand textbooks",
            "2.1 thousand textbooks",
            "21 thousand textbooks"
          ],
          "a": 2,
          "w": "B'den D'ye: tıbbi kit 5'ten 15 bine (+10 bin), ders kitabı 57'den 36 bine (−21 bin). Birim maliyet = vazgeçilen ÷ kazanılan = 21 ÷ 10 = 2,1 bin ders kitabı. 21 bin toplam maliyettir, birim değil; 0,48 kesri ters kurmaktır (10 ÷ 21); 1,4 yalnız B → C adımının birim maliyetidir (7 ÷ 5).",
          "fig": {
            "type": "table",
            "head": [
              "Point",
              "Medical kits (thousands)",
              "Textbooks (thousands)"
            ],
            "rows": [
              [
                "A",
                0,
                60
              ],
              [
                "B",
                5,
                57
              ],
              [
                "C",
                10,
                50
              ],
              [
                "D",
                15,
                36
              ],
              [
                "E",
                20,
                0
              ]
            ]
          }
        },
        {
          "t": "1.2-1",
          "q": "Consider the following statements about a country's production possibilities curve (PPC).\nI. A point outside the PPC can become attainable if the country's resources increase.\nII. Every point on the PPC is equally productively efficient.\nIII. The PPC shows which combination of the two goods society prefers.\nWhich of the statements are true?",
          "o": [
            "I only",
            "I and II only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 1,
          "w": "I doğru: dışarıdaki nokta yalnız *mevcut* kaynak ve teknolojiyle *unattainable*'dır; kaynak ya da teknoloji artarsa eğri dışa kayar ve nokta ulaşılabilir olabilir. II doğru: eğrinin üstündeki her nokta kaynak israfı olmadan üretilir. III yanlış: PPC neyi üretebileceğimizi gösterir; toplumun hangi karışımı istediği (*allocative efficiency*) eğriden okunamaz."
        },
        {
          "t": "1.2-2",
          "q": "The graph shows a country's production possibilities curve before (PPC1) and after (PPC2) a change in robot-making technology. Point A is on PPC1. Consider the following statements.\nI. Combinations with more robots and more wheat than at point A are now attainable.\nII. The maximum quantity of wheat the country can produce is unchanged.\nIII. The opportunity cost of producing robots, measured in wheat, has increased.\nWhich of the statements are true?",
          "o": [
            "I only",
            "II only",
            "I and II only",
            "II and III only"
          ],
          "a": 2,
          "w": "Yalnız robot ekseninin ucu uzadı (5 → 9): gelişme robota özgüdür. II doğru: buğday ekseninin ucu (7) sabit. I doğru: yeni eğri A'nın sağında ve üstünde noktalar içerir; robot yapmak daha az kaynak gerektirdiği için kaynakların bir kısmı buğdaya da kaydırılabilir. III yanlış: her robot artık daha az kaynakla yapılır, yani buğday cinsinden *opportunity cost*'u düştü; eğri robot yönünde yatıklaştı.",
          "fig": {
            "type": "graph",
            "xlabel": "Robots",
            "ylabel": "Wheat",
            "xmax": 10,
            "ymax": 10,
            "ppc": [
              {
                "qmax": 5,
                "pmax": 7,
                "k": 2,
                "label": "PPC1",
                "dash": true
              },
              {
                "qmax": 9,
                "pmax": 7,
                "k": 2,
                "label": "PPC2"
              }
            ],
            "points": [
              {
                "q": 3,
                "p": 5.6,
                "label": "A",
                "guides": true
              }
            ]
          }
        },
        {
          "t": "1.2-2",
          "q": "Each of the following would shift Türkiye's production possibilities curve outward EXCEPT",
          "o": [
            "an increase in the number of working-age adults",
            "the discovery of a large new natural gas field in the Black Sea",
            "faster internet that raises worker productivity in every industry",
            "a fall in the unemployment rate from 10 percent to 8 percent"
          ],
          "a": 3,
          "w": "İşsizliğin düşmesi atıl kaynakları işe sokar: üretim noktası içeriden eğriye doğru ilerler, eğri kaymaz. Çalışma çağındaki nüfusun artması (kaynak miktarı), yeni doğal gaz (*land*) ve verimliliği artıran teknoloji eğriyi dışa kaydırır. \"İşsizlik azaldı, büyüme oldu, eğri kaydı\" düşüncesi tuzaktır."
        },
        {
          "t": "1.3-1",
          "q": "Anatolia needs 20 labor hours to build a tractor and 10 labor hours to weave a carpet. Balkania needs 30 labor hours to build a tractor and 10 labor hours to weave a carpet. Consider the following statements.\nI. Anatolia has an absolute advantage in both goods.\nII. Balkania has a comparative advantage in carpets.\nIII. A trade of 1 tractor for 2.5 carpets would benefit both countries.\nWhich of the statements are true?",
          "o": [
            "I only",
            "II only",
            "II and III only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "*Input* sorusu, küçük sayı üstünlük. I yanlış: halıda ikisi de 10 saat harcar, kimse *absolute advantage* sahibi değil; Anadolu yalnız traktörde üstündür. II doğru: I.O.U. ile 1 halı Anadolu'ya 10 ÷ 20 = 1/2, Balkanya'ya 10 ÷ 30 = 1/3 traktöre mal olur → halıda Balkanya. III doğru: 1 traktör Anadolu'ya 2, Balkanya'ya 3 halıya mal olur; 2,5 bu aralıktadır."
        },
        {
          "t": "1.3-1",
          "q": "The table shows two numbers for each country but does not say whether they are units produced per day or labor hours needed per unit. Which of the following is true?",
          "o": [
            "R has the comparative advantage in cars whichever way the numbers are read.",
            "If the numbers are units produced, S has the comparative advantage in cars; if they are hours needed, R has it.",
            "If the numbers are units produced, R has the comparative advantage in cars; if they are hours needed, S has the comparative advantage in cars.",
            "Comparative advantage cannot be determined unless the table shows both output and input."
          ],
          "a": 2,
          "w": "*Output* okuması (O.O.O.): 1 araba R'ye 9 ÷ 6 = 1,5, S'ye 12 ÷ 4 = 3 uçağa mal olur → arabada R. *Input* okuması (I.O.U.): 1 araba R'ye 6 ÷ 9 = 2/3, S'ye 4 ÷ 12 = 1/3 uçağa mal olur → arabada S. Aynı sayılar iki okumada ters sonuç verir; bu yüzden önce tablonun başlığına bakılır.",
          "fig": {
            "type": "table",
            "head": [
              "Country",
              "Cars",
              "Planes"
            ],
            "rows": [
              [
                "R",
                6,
                9
              ],
              [
                "S",
                4,
                12
              ]
            ],
            "caption": "Units not stated: output per day or hours per unit?"
          }
        },
        {
          "t": "1.3-2",
          "q": "Each country has a straight-line PPC. With all its resources, Alpha can produce 40 phones or 20 shirts, and Beta can produce 15 phones or 15 shirts. The countries specialize according to comparative advantage, and Alpha trades 15 phones to Beta for 10 shirts. Which of the following is correct?",
          "o": [
            "Alpha consumes 25 phones and 10 shirts, a combination that lies on its own PPC.",
            "Alpha consumes 25 phones and 10 shirts, 5 more phones than it could produce on its own with 10 shirts.",
            "Alpha consumes 40 phones and 10 shirts, 20 more phones than it could produce on its own with 10 shirts.",
            "The trade hurts Beta, because 1.5 phones per shirt is above Beta's opportunity cost of a shirt."
          ],
          "a": 1,
          "w": "1 gömlek Alpha'ya 40 ÷ 20 = 2, Beta'ya 15 ÷ 15 = 1 telefona mal olur → Alpha telefonda, Beta gömlekte uzmanlaşır. Alpha 40 telefon üretir, 15'ini 10 gömleğe verir (1 gömlek = 1,5 telefon; 1 ile 2 arasında): 25 telefon + 10 gömlek. Kendi PPC'sinde 10 gömlekle en çok 40 − 20 = 20 telefon → 5 fazla, PPC'nin dışında. Beta gömleği kendi maliyetinden (1 telefon) yüksek fiyata sattığı için kazanır; 1,5 > 1 Beta'nın lehinedir."
        },
        {
          "t": "1.3-2",
          "q": "In Country X, producing 1 bushel of wheat costs 1/4 ton of steel. In Country Y, producing 1 ton of steel costs 6 bushels of wheat. Which of the following terms of trade would benefit both countries?",
          "o": [
            "1 bushel of wheat for 1/5 ton of steel",
            "1 bushel of wheat for 1/4 ton of steel",
            "1 ton of steel for 3 bushels of wheat",
            "1 bushel of wheat for 1/7 ton of steel"
          ],
          "a": 0,
          "w": "Önce aynı birime çevir: X'te 1 ton çelik = 4 *bushel* buğday, Y'de 6 → çelikte X, buğdayda Y. Kazançlı aralık: 1 ton çelik 4 ile 6 *bushel* arası, yani 1 *bushel* buğday 1/6 ile 1/4 ton çelik arası (uçlar hariç). 1/5 bu aralıktadır (1 ton çelik = 5 *bushel*). 1/4 uç değerdir, X için kazanç yok; 3 *bushel* X'in maliyetinin altındadır; 1/7 ise 1 ton çelik = 7 *bushel* demektir, Y kendi maliyetinden (6) fazla öder."
        },
        {
          "t": "1.3-2",
          "q": "Two countries have been specializing and trading at mutually beneficial terms. Suddenly, both governments ban all trade between them. Which of the following is most likely?",
          "o": [
            "Each country's consumption returns to a point on or inside its own PPC.",
            "Each country's PPC shifts inward.",
            "Each country's PPC shifts outward, because each must now produce both goods.",
            "Each country continues to consume outside its PPC, because its resources are unchanged."
          ],
          "a": 0,
          "w": "Ticaret üretim kapasitesini değiştirmediği için onu yasaklamak da PPC'yi kaydırmaz. Değişen tüketimdir: ticaret kesilince ülke yalnız kendi ürettiğini tüketebilir, yani kendi PPC'sinin üstüne ya da içine geri döner. PPC'nin dışında tüketim yalnız ticaretle mümkündür; ticaret savaşında herkes kendi PPC'sine geri çekilir."
        },
        {
          "t": "1.4-1",
          "q": "The price of tea rises while the price of coffee does not change. Tea and coffee are substitutes. Consider the following statements.\nI. The quantity of tea demanded falls, partly because coffee has become relatively cheaper.\nII. The demand curve for tea shifts to the left.\nIII. The demand curve for coffee shifts to the right.\nWhich of the statements are true?",
          "o": [
            "I only",
            "I and II only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "Çayın kendi fiyatı arttı: çay eğrisi kaymaz, eğri üzerinde yukarı hareket olur ve *quantity demanded* düşer (II yanlış). Bunun nedenlerinden biri *substitution effect*'tir: kahve görece ucuzladı (I). Kahve piyasasında ise çayın fiyatı başka bir malın fiyatıdır; *substitute* pahalanınca kahve talebi sağa kayar (III). Aynı olay bir piyasada hareket, ötekinde kayma yaratır."
        },
        {
          "t": "1.4-2",
          "q": "Which of the following would decrease the current demand for this year's model of a smartphone?",
          "o": [
            "The price of mobile data plans, a complement, falls.",
            "The price of this year's model falls by 20 percent.",
            "Consumers' incomes rise, and the phone is a normal good.",
            "The manufacturer announces that a much better model will be released next month at the same price."
          ],
          "a": 3,
          "w": "Gelecek ay daha iyi bir modelin çıkacağı beklentisi (*expectations*) alıcıları bekletir → bugünkü modelin talebi sola. Tamamlayıcı (*complement*) olan veri paketi ucuzlarsa talep sağa kayar; gelir artışı *normal good*'un talebini artırır. Telefonun kendi fiyatının düşmesi eğriyi kaydırmaz, *quantity demanded*'ı artırır."
        },
        {
          "t": "1.4-2",
          "q": "The graph shows three demand curves for public bus rides in Ankara. Demand is initially D1. Which of the following events would move demand from D1 to D3?",
          "o": [
            "A fall in the price of gasoline, which makes driving a private car cheaper",
            "A rise in the price of taxi rides",
            "A fall in the price of bus rides",
            "A large increase in the number of university students in the city who do not own cars"
          ],
          "a": 0,
          "w": "D3, D1'in solundadır: talep azalışı. Benzin ucuzlayınca özel araba kullanmak ucuzlar; araba otobüsün *substitute*'udur, bazı yolcular arabaya geçer → otobüs talebi sola. Taksinin pahalanması (*substitute*) ve arabası olmayan yeni öğrenciler (*number of consumers*) talebi sağa, D2'ye kaydırır. Otobüs ücretinin düşmesi D1 üzerinde harekettir.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity of rides",
            "ylabel": "Price",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  2,
                  8
                ],
                "to": [
                  8,
                  2
                ],
                "label": "D1"
              },
              {
                "from": [
                  4,
                  8
                ],
                "to": [
                  9.5,
                  2.5
                ],
                "label": "D2"
              },
              {
                "from": [
                  0,
                  8
                ],
                "to": [
                  6,
                  2
                ],
                "label": "D3"
              }
            ]
          }
        },
        {
          "t": "1.5",
          "q": "Consider the following events in the olive oil market.\nI. The government places a new tax on each liter of olive oil produced.\nII. A widely reported study finds that olive oil is very healthy.\nIII. Olive oil producers expect prices to be much higher next year.\nWhich of the following events would shift the current supply curve of olive oil to the left?",
          "o": [
            "I only",
            "I and III only",
            "II and III only",
            "I, II, and III"
          ],
          "a": 1,
          "w": "Litre başına vergi maliyeti artırır → arz sola (I). Üretici fiyatın artacağını beklerse bugün malını tutar → bugünkü arz sola (III, *expectations*). Sağlık haberi alıcıları etkiler: talep sağa kayar, arz değil (II). Tuzak: \"fiyat artacak\" beklentisi talebi sağa, arzı sola kaydırır."
        },
        {
          "t": "1.5",
          "q": "The graph shows two supply curves for bottled water, S1 and S2. Which of the following statements is correct?",
          "o": [
            "A shift from S1 to S2 is an increase in supply, because S2 lies above S1.",
            "A move from A to D is an increase in supply, because the quantity supplied rises.",
            "A move from A to C is a change in quantity supplied along S1.",
            "A shift from S1 to S2 is a decrease in supply, because at the price of point A producers now offer only the quantity at point B."
          ],
          "a": 3,
          "w": "S2, S1'in solundadır: A'nın fiyatında artık yalnız B kadar sunulur → *decrease in supply*. Grafikte \"yukarıda\" görünmek artış demek değildir; kaymayı yatay yönle (sağ/sol) oku. A → D aynı eğri üzerinde, yalnız fiyat değişti: *change in quantity supplied*. C ise S2 üzerindedir; A'dan C'ye geçiş bir kaymadır, S1 boyunca hareket değil.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity",
            "ylabel": "Price",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  1,
                  1
                ],
                "to": [
                  8,
                  8
                ],
                "label": "S1"
              },
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  6,
                  8
                ],
                "label": "S2"
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 4,
                "label": "A"
              },
              {
                "q": 2,
                "p": 4,
                "label": "B"
              },
              {
                "q": 4,
                "p": 6,
                "label": "C"
              },
              {
                "q": 6,
                "p": 6,
                "label": "D"
              }
            ]
          }
        },
        {
          "t": "1.6-1",
          "q": "Based on the demand and supply schedules in the table, which of the following is true?",
          "o": [
            "The equilibrium price is $6, because quantity demanded and quantity supplied are closest at that price.",
            "At $7 there is a shortage of 30 units, so the price will rise.",
            "At $8 there is a surplus of 80 units, so the price will rise.",
            "The equilibrium price is between $6 and $7, and at $5 there is a shortage of 70 units."
          ],
          "a": 3,
          "w": "6 dolarda Qd 110 > Qs 90 (*shortage* 20), 7 dolarda Qd 90 < Qs 120 (*surplus* 30): Qd = Qs olan fiyat tabloda yok, 6 ile 7 dolar arasındadır. 5 dolarda 130 − 60 = 70 birim *shortage*. \"Miktarların en yakın olduğu fiyat dengedir\" tuzağı: 6 dolarda hâlâ açık var. 7 ve 8 dolarda *surplus* vardır ve fiyat düşer.",
          "fig": {
            "type": "table",
            "head": [
              "Price",
              "Quantity demanded",
              "Quantity supplied"
            ],
            "rows": [
              [
                "$4",
                150,
                30
              ],
              [
                "$5",
                130,
                60
              ],
              [
                "$6",
                110,
                90
              ],
              [
                "$7",
                90,
                120
              ],
              [
                "$8",
                70,
                150
              ]
            ]
          }
        },
        {
          "t": "1.6-1",
          "q": "The current price in the market shown is $7. Which of the following best describes how the market reaches equilibrium?",
          "o": [
            "There is a surplus of 400 units; sellers cut the price, quantity demanded rises, and quantity supplied falls until both equal 400.",
            "There is a surplus of 400 units; the supply curve shifts to the left until the surplus disappears.",
            "There is a shortage of 400 units; buyers bid the price up to equilibrium.",
            "There is a surplus of 600 units; sellers cut the price until quantity supplied equals 600."
          ],
          "a": 0,
          "w": "7 dolar dengenin (5 dolar) üstündedir: Qs 600 > Qd 200 → *surplus* 400. Satıcılar fiyatı indirir; fiyat düştükçe alıcılar eğri üzerinde daha çok ister, satıcılar daha az sunar ve ikisi 400'de buluşur. Eğri kaymaz; düzelme eğriler üzerinde harekettir. 600 yalnız arz edilen miktardır.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity",
            "ylabel": "Price",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  1,
                  8
                ],
                "to": [
                  8,
                  1
                ],
                "label": "D"
              },
              {
                "from": [
                  1,
                  2
                ],
                "to": [
                  7,
                  8
                ],
                "label": "S"
              }
            ],
            "hlines": [
              {
                "p": 7,
                "label": "Price = $7"
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 5,
                "label": "E",
                "guides": true
              },
              {
                "q": 2,
                "p": 7,
                "guides": true
              },
              {
                "q": 6,
                "p": 7,
                "guides": true
              }
            ],
            "xticks": [
              {
                "v": 2,
                "label": "200"
              },
              {
                "v": 4,
                "label": "400"
              },
              {
                "v": 6,
                "label": "600"
              }
            ],
            "yticks": [
              {
                "v": 5,
                "label": "$5"
              },
              {
                "v": 7,
                "label": "$7"
              }
            ]
          }
        },
        {
          "t": "1.6-2",
          "q": "The table shows the demand and supply schedules for watermelons at a market before and after the start of summer. Which of the following is correct?",
          "o": [
            "Both demand and supply increased; the equilibrium price rose from 12 TL to 14 TL, and the equilibrium quantity rose from 40 to 60 tons.",
            "Both demand and supply increased; quantity rose, but the price stayed at 12 TL because a double shift makes price indeterminate.",
            "Only demand increased; the price rose from 12 TL to 14 TL, and the quantity rose from 40 to 70 tons.",
            "Both demand and supply increased; the price fell because supply increased more than demand."
          ],
          "a": 0,
          "w": "Her fiyatta Qd 30, Qs 10 ton arttı: iki eğri de sağa kaydı. Önce 12 TL'de 40 = 40, sonra 14 TL'de 60 = 60. Çift kayma kuralı, kaymaların büyüklüğü *bilinmezken* fiyatın *indeterminate* olduğunu söyler; burada büyüklükler tabloda verildiği için hesaplanabilir: talep daha çok kaydığı için fiyat yükseldi. 70 ton, 12 TL'deki yeni talep edilen miktardır, yeni denge değil.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL/kg)",
              "Qd before (tons)",
              "Qs before (tons)",
              "Qd after (tons)",
              "Qs after (tons)"
            ],
            "rows": [
              [
                10,
                50,
                30,
                80,
                40
              ],
              [
                12,
                40,
                40,
                70,
                50
              ],
              [
                14,
                30,
                50,
                60,
                60
              ],
              [
                16,
                20,
                60,
                50,
                70
              ]
            ]
          }
        },
        {
          "t": "1.6-2",
          "q": "A drought raises the price of the animal feed used by dairy farmers. At the same time, a widely reported study says that cheese is good for your health. Cheese is an input in pizza. Consider the following statements.\nI. The equilibrium price of cheese rises.\nII. The equilibrium quantity of cheese rises.\nIII. The supply of pizza decreases.\nWhich of the statements must be true?",
          "o": [
            "I only",
            "I and III only",
            "II and III only",
            "I, II, and III"
          ],
          "a": 1,
          "w": "Peynir piyasasında yem (girdi) pahalanır → arz sola; sağlık haberi (*tastes*) → talep sağa. Ayrı çiz: ikisi de fiyatı yükseltir → P ↑ kesin (I). Miktarı biri artırır, öteki azaltır → *indeterminate*; \"artmalı\" denemez (II). Peynir pizzanın girdisidir: peynir fiyatı yükselince pizza arzı sola (III). Zincir her zaman fiyat üzerinden ilerler."
        },
        {
          "t": "1.6-2",
          "q": "In the market for used cars, the equilibrium quantity rose while the equilibrium price stayed the same. Which of the following could explain this outcome?",
          "o": [
            "Demand increased while supply decreased.",
            "Demand decreased while supply increased.",
            "Only demand increased.",
            "Demand increased, and supply increased by a similar amount."
          ],
          "a": 3,
          "w": "Miktar artıp fiyat değişmiyorsa iki eğri de sağa kaymış, fiyata yaptıkları zıt baskılar birbirini dengelemiştir (talep ↑ + arz ↑: Q kesin ↑, P *indeterminate*; büyüklükler yakınsa P aynı kalabilir). Yalnız talep artsaydı fiyat da artardı. Talep ↑ + arz ↓ fiyatı kesin artırır, talep ↓ + arz ↑ fiyatı kesin düşürür."
        }
      ]
    }
  ]
};
