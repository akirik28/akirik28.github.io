/* Bu dosya üretilir: ap-videolar/tools/build-deneme-data.mjs (elle düzenleme; kaynak: tools/out/deneme-micro-u1.json) */
window.DENEME = {
  "store": "micro-u1:v1:",
  "course": "AP Microeconomics",
  "unit": "Unit 1 — Basic Economic Concepts",
  "topics": {
    "1.1": "Kıtlık ve Ekonomist Gibi Düşünmek",
    "1.2": "Ekonomik Sistemler ve Kaynak Dağılımı",
    "1.3-1": "Fırsat Maliyeti ve PPC",
    "1.3-2": "PPC'nin Şekli ve Kayması",
    "1.4-1": "Mutlak ve Karşılaştırmalı Üstünlük",
    "1.4-2": "Uzmanlaşma ve Ticaretten Kazanç",
    "1.5": "Fayda-Maliyet Analizi",
    "1.6-1": "Marjinal Analiz ve Fayda",
    "1.6-2": "Tüketici Seçimi ve Fayda Maksimizasyonu"
  },
  "tests": [
    {
      "no": 1,
      "level": "Isınma",
      "minutes": 20,
      "questions": [
        {
          "t": "1.1",
          "q": "The owner of a bakery in İzmir buys a new oven to bake more bread each day. In economics, the oven is an example of which factor of production?",
          "o": [
            "Land",
            "Capital",
            "Labor",
            "Entrepreneurship"
          ],
          "a": 1,
          "w": "Fırın, üretimde kullanılan insan yapımı bir araçtır: *capital*. *Land* doğadan gelen kaynaklardır (toprak, su, maden), *labor* insanların emeğidir, *entrepreneurship* ise kaynakları bir araya getirip riski üstlenen girişimcilik yeteneğidir. Dikkat: ekonomide *capital* para değil; makine, bina, alet gibi fiziksel araçlardır."
        },
        {
          "t": "1.1",
          "q": "A city begins charging shoppers 5 TL for each plastic bag at grocery stores, and many shoppers start bringing their own bags. This change in behavior best illustrates that people",
          "o": [
            "respond to incentives",
            "face a shortage of plastic bags",
            "base their choices on sunk costs",
            "compare total utility rather than marginal utility"
          ],
          "a": 0,
          "w": "Poşet 5 TL olunca poşet kullanmanın maliyeti arttı ve insanlar davranışını değiştirdi: *incentives* (teşvikler) davranışı yönlendirir. Poşetler tükenmediği için bir *shortage* yok. *Sunk cost* ve *total utility* bu durumla ilgili değildir."
        },
        {
          "t": "1.2",
          "q": "Every economic system must answer three basic economic questions. Which of the following is NOT one of these questions?",
          "o": [
            "What goods and services should be produced?",
            "How should goods and services be produced?",
            "For whom should goods and services be produced?",
            "How much money should the central bank print?"
          ],
          "a": 3,
          "w": "Her ekonomik sistem üç soruya cevap verir: *what* to produce, *how* to produce, *for whom* to produce. Ne kadar para basılacağı para politikası konusudur (Macro), temel üç sorudan biri değildir."
        },
        {
          "t": "1.2",
          "q": "Which of the following is a characteristic of a free-market economy?",
          "o": [
            "A central planning board sets production targets for each factory.",
            "The government owns most of the factors of production.",
            "Goods are produced the same way they were produced by earlier generations.",
            "Prices are determined by the interactions of buyers and sellers."
          ],
          "a": 3,
          "w": "*Free-market economy*'de fiyatlar alıcı ve satıcıların etkileşimiyle belirlenir ve kaynakları yönlendiren bir sinyal olur. Plan kurulu ve devlet mülkiyeti *command economy*'nin, geleneğe göre üretim ise *traditional economy*'nin özelliğidir."
        },
        {
          "t": "1.3-1",
          "q": "The graph shows the production possibilities curve (PPC) for Bisiklandia. Which point is attainable but would leave some of the country's resources unemployed?",
          "o": [
            "Point J",
            "Point K",
            "Point L",
            "Point M"
          ],
          "a": 1,
          "w": "K eğrinin içinde: ulaşılabilir ama kaynakların bir kısmı atıl, yani *inefficient*; iki maldan da daha fazlası üretilebilir. J ve M eğrinin üstünde, *efficient*; M bir uç nokta olsa da israf yoktur. L eğrinin dışında: mevcut kaynak ve teknolojiyle *unattainable*.",
          "fig": {
            "type": "graph",
            "xlabel": "Bicycles",
            "ylabel": "Apples",
            "xmax": 10,
            "ymax": 10,
            "ppc": [
              {
                "qmax": 9,
                "pmax": 8,
                "k": 2,
                "label": "PPC"
              }
            ],
            "points": [
              {
                "q": 5.4,
                "p": 6.4,
                "label": "J"
              },
              {
                "q": 2,
                "p": 3,
                "label": "K"
              },
              {
                "q": 7,
                "p": 7,
                "label": "L"
              },
              {
                "q": 9,
                "p": 0,
                "label": "M"
              }
            ]
          }
        },
        {
          "t": "1.3-1",
          "q": "The table shows points on a country's production possibilities curve. What is the total opportunity cost of producing the first 3 books?",
          "o": [
            "3 kilograms of tea",
            "11 kilograms of tea",
            "20 kilograms of tea",
            "40 kilograms of tea"
          ],
          "a": 2,
          "w": "İlk 3 kitap için çay 60'tan 40'a iner: toplam *opportunity cost* 20 kg çay (3 + 6 + 11). 11 kg yalnız üçüncü kitabın maliyetidir, 3 kg yalnız birincinin. 40 kg ise D noktasındaki çay üretimidir; maliyet değil, düzeydir.",
          "fig": {
            "type": "table",
            "head": [
              "Point",
              "Books",
              "Tea (kilograms)"
            ],
            "rows": [
              [
                "A",
                0,
                60
              ],
              [
                "B",
                1,
                57
              ],
              [
                "C",
                2,
                51
              ],
              [
                "D",
                3,
                40
              ],
              [
                "E",
                4,
                24
              ],
              [
                "F",
                5,
                0
              ]
            ]
          }
        },
        {
          "t": "1.3-1",
          "q": "A point on a country's production possibilities curve shows",
          "o": [
            "a maximum combination of two goods that can be produced when all resources are used fully and efficiently",
            "the combination of two goods that consumers in the country want most",
            "a combination of two goods that can be produced only when some resources are unemployed",
            "the combination of two goods the country can consume after it trades with other countries"
          ],
          "a": 0,
          "w": "PPC üzerindeki her nokta, bütün kaynaklar tam ve verimli kullanıldığında üretilebilecek en yüksek bileşimlerden biridir (*productive efficiency*). Eğri tüketicilerin hangi bileşimi en çok istediğini göstermez. Atıl kaynak eğrinin içindeki noktalara karşılık gelir; ticaretten sonraki tüketim ise eğrinin dışına çıkabilir."
        },
        {
          "t": "1.3-2",
          "q": "Which of the following would shift a country's production possibilities curve outward?",
          "o": [
            "A decrease in the country's unemployment rate",
            "An improvement in the technology used to produce both goods",
            "A decision to produce more of one good and less of the other",
            "An earthquake that destroys many of the country's factories"
          ],
          "a": 1,
          "w": "*Technology* iyileşmesi aynı kaynakla daha çok üretim demektir: PPC dışa kayar. İşsizliğin azalması içerideki noktayı eğriye yaklaştırır, eğriyi kaydırmaz. Bir maldan çok, diğerinden az üretmek eğri üzerinde harekettir. Deprem fabrikaları yok eder ve eğriyi içe kaydırır."
        },
        {
          "t": "1.3-2",
          "q": "The production possibilities curve shown is a straight line. This shape indicates that",
          "o": [
            "the opportunity cost of producing chairs increases as more chairs are produced",
            "the opportunity cost of producing each good is constant",
            "the opportunity cost of producing chairs decreases as more chairs are produced",
            "the country does not face scarcity"
          ],
          "a": 1,
          "w": "Doğrusal PPC'nin eğimi her yerde aynıdır: bir sandalye için hep aynı miktarda masadan vazgeçilir, yani *constant opportunity cost*. Bu, kaynakların iki malın üretimine eşit derecede uygun olduğu anlamına gelir. Artan maliyet dışa bükük bir eğri verir; doğrusal eğri kıtlığın olmadığını göstermez, eğrinin dışı yine ulaşılamazdır.",
          "fig": {
            "type": "graph",
            "xlabel": "Chairs",
            "ylabel": "Tables",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  8
                ],
                "to": [
                  8,
                  0
                ],
                "label": "PPC"
              }
            ]
          }
        },
        {
          "t": "1.4-1",
          "q": "The table shows the maximum number of cakes or pies that Selin and Kerem can each bake in one day. Which of the following is true?",
          "o": [
            "Selin has an absolute advantage in both cakes and pies.",
            "Kerem has a comparative advantage in both cakes and pies.",
            "Selin has a comparative advantage in pies.",
            "Selin has an absolute advantage in cakes, and Kerem has a comparative advantage in pies."
          ],
          "a": 3,
          "w": "Ham sayılar: kekte 12 > 8 → kekte *absolute advantage* Selin'de. Turtanın *opportunity cost*'u Selin için 12 ÷ 6 = 2 kek, Kerem için 8 ÷ 8 = 1 kek; daha düşük maliyet Kerem'de, yani turtada *comparative advantage* Kerem'in. Turtada 8 > 6 olduğu için Selin iki malda birden üstün değil; maliyetler farklıyken kimse iki malda birden *comparative advantage* sahibi olamaz.",
          "fig": {
            "type": "table",
            "head": [
              "Person",
              "Cakes",
              "Pies"
            ],
            "rows": [
              [
                "Selin",
                12,
                6
              ],
              [
                "Kerem",
                8,
                8
              ]
            ],
            "caption": "Maximum output per day"
          }
        },
        {
          "t": "1.4-1",
          "q": "A country has a comparative advantage in producing a good if it can",
          "o": [
            "produce more of the good than another country with the same resources",
            "use more resources to produce the good than another country does",
            "produce the good at a lower opportunity cost than another country",
            "sell the good at a higher price than another country does"
          ],
          "a": 2,
          "w": "*Comparative advantage* bir malı daha düşük *opportunity cost* ile üretebilmektir. Aynı kaynakla daha çok üretmek *absolute advantage*'ın tanımıdır. Daha çok kaynak kullanmak ya da daha yüksek fiyata satmak üstünlüğü belirlemez."
        },
        {
          "t": "1.4-2",
          "q": "When two countries specialize according to comparative advantage and trade with each other, both countries can",
          "o": [
            "produce a combination of goods outside their own production possibilities curves",
            "eliminate the problem of scarcity",
            "gain only if each country has an absolute advantage in one good",
            "consume a combination of goods outside their own production possibilities curves"
          ],
          "a": 3,
          "w": "Uzmanlaşma ve ticaretle iki ülke de kendi PPC'sinin dışındaki bir noktada *consume* edebilir. Üretim ise kaynaklar değişmediği için yine eğri üzerinde kalır. Ticaret kıtlığı ortadan kaldırmaz; kazancın kaynağı *absolute advantage* değil *comparative advantage*'tır."
        },
        {
          "t": "1.4-2",
          "q": "In Country A, the opportunity cost of producing 1 ton of steel is 4 tons of wheat. In Country B, the opportunity cost of producing 1 ton of steel is 2 tons of wheat. Which of the following terms of trade would benefit both countries?",
          "o": [
            "1 ton of steel for 1 ton of wheat",
            "1 ton of steel for 1.5 tons of wheat",
            "1 ton of steel for 3 tons of wheat",
            "1 ton of steel for 5 tons of wheat"
          ],
          "a": 2,
          "w": "Çeliğin *opportunity cost*'u B'de 2, A'da 4 ton buğday: B çelik ihraç eder. *Terms of trade* iki maliyetin arasında olmalı: 1 çelik = 3 buğday ile B 2'den fazlasını alır, A 4'ten azını öder. 1 ve 1,5 ton B'yi zarara sokar (kendisi 2'ye üretiyor); 5 ton A'yı zarara sokar (kendisi 4'e üretiyor)."
        },
        {
          "t": "1.5",
          "q": "Mert quits his job, which paid 30,000 TL per month, to open a phone repair shop. Which of the following is an implicit cost of running the shop?",
          "o": [
            "The monthly rent Mert pays for the shop",
            "The 30,000 TL monthly salary Mert gave up",
            "The wages Mert pays to his assistant",
            "The money Mert spends on spare parts"
          ],
          "a": 1,
          "w": "*Implicit cost* cepten çıkmayan, vazgeçilen fırsatın değeridir: Mert'in bıraktığı 30.000 TL maaş. Kira, yardımcının ücreti ve yedek parça cepten ödenen *explicit cost*'lardır."
        },
        {
          "t": "1.5",
          "q": "Elif runs a summer kayak rental business in Fethiye. The table shows her revenue and costs for the summer. What are Elif's accounting profit and economic profit?",
          "o": [
            "Accounting profit: 30,000 TL; economic profit: 150,000 TL",
            "Accounting profit: 150,000 TL; economic profit: 270,000 TL",
            "Accounting profit: 150,000 TL; economic profit: 30,000 TL",
            "Accounting profit: 280,000 TL; economic profit: 30,000 TL"
          ],
          "a": 2,
          "w": "*Accounting profit* = TR − explicit = 400.000 − 250.000 = 150.000 TL. *Economic profit* = TR − explicit − implicit = 150.000 − 120.000 = 30.000 TL. İki kârı ters çevirmek ya da *implicit cost*'u çıkarmak yerine eklemek (270.000) sık yapılan hatalardır; *economic profit* hiçbir zaman *accounting profit*'ten büyük olamaz.",
          "fig": {
            "type": "table",
            "head": [
              "Item",
              "Amount (TL)"
            ],
            "rows": [
              [
                "Total revenue",
                "400,000"
              ],
              [
                "Explicit costs",
                "250,000"
              ],
              [
                "Implicit costs",
                "120,000"
              ]
            ]
          }
        },
        {
          "t": "1.5",
          "q": "Can paid 500 TL for a concert ticket that cannot be refunded or resold. On the day of the concert, he feels ill and would rather stay home. A rational decision-maker in Can's position would",
          "o": [
            "ignore the 500 TL and compare only the future benefits and costs of going",
            "go to the concert so that the 500 TL is not wasted",
            "go to the concert, because the 500 TL is an implicit cost of staying home",
            "stay home only if the benefit of staying home is greater than 500 TL"
          ],
          "a": 0,
          "w": "500 TL geri gelmez; gitse de gitmese de ödenmiş durumdadır: *sunk cost*. Rasyonel karar yalnız bundan sonraki fayda ve maliyetleri karşılaştırır: hasta hâlde konserin keyfi mi, evde dinlenmek mi? \"Para boşa gitmesin\" diye gitmek *sunk cost fallacy*'dir. Evde kalmanın faydasını 500 TL ile kıyaslamak da aynı hatadır."
        },
        {
          "t": "1.6-1",
          "q": "The table shows Arda's total utility from eating simits at breakfast. What is Arda's marginal utility from the third simit?",
          "o": [
            "10 utils",
            "14 utils",
            "32 utils",
            "42 utils"
          ],
          "a": 0,
          "w": "*Marginal utility* = ΔTU ÷ ΔQ: üçüncü simitte 42 − 32 = 10 util. 14 ikinci simidin MU'sudur; 32 ve 42 ise *total utility* düzeyleri. MU 18, 14, 10, 6, 2 diye azalıyor: *law of diminishing marginal utility*.",
          "fig": {
            "type": "table",
            "head": [
              "Simits eaten",
              "Total utility (utils)"
            ],
            "rows": [
              [
                1,
                18
              ],
              [
                2,
                32
              ],
              [
                3,
                42
              ],
              [
                4,
                48
              ],
              [
                5,
                50
              ]
            ]
          }
        },
        {
          "t": "1.6-1",
          "q": "The law of diminishing marginal utility states that",
          "o": [
            "as a person consumes more units of a good, total utility decreases",
            "as the price of a good falls, consumers buy more of it",
            "marginal utility becomes negative after the first unit is consumed",
            "as a person consumes more units of a good, the additional satisfaction from each additional unit eventually decreases"
          ],
          "a": 3,
          "w": "*Law of diminishing marginal utility*: tüketim arttıkça her ek birimin getirdiği ek tatmin (MU) sonunda azalır. *Total utility*'nin düşmesi gerekmez; MU pozitif kaldıkça TU artmaya devam eder. Fiyat düşünce daha çok alınması *law of demand*'dir; MU'nun ilk birimden sonra negatif olması da gerekmez."
        },
        {
          "t": "1.6-2",
          "q": "Bora spends all of his allowance on books and movie tickets. Which of the following conditions shows that he is maximizing his total utility?",
          "o": [
            "The marginal utility of the last book equals the marginal utility of the last movie ticket.",
            "The total utility from books equals the total utility from movie tickets.",
            "The marginal utility per lira spent on books equals the marginal utility per lira spent on movie tickets.",
            "The price of a book equals the price of a movie ticket."
          ],
          "a": 2,
          "w": "*Utility-maximizing rule*: bütçe tükendiğinde son liranın her malda aynı ek faydayı getirmesi, MUx/Px = MUy/Py. Fiyatlar farklıysa MU'ların eşitliği yetmez; pahalı malın son biriminin MU'su daha yüksek olmalıdır. Toplam faydaların ya da fiyatların eşitliği dengeyi göstermez."
        },
        {
          "t": "1.6-2",
          "q": "Zeynep spends all of her budget on pizza slices and colas. The last pizza slice she buys gives her 30 utils and costs 15 TL. The last cola gives her 12 utils and costs 4 TL. To increase her total utility without spending more, Zeynep should",
          "o": [
            "buy more cola and fewer pizza slices",
            "buy more pizza slices and less cola, because pizza gives her more utils",
            "keep her purchases the same, because both goods give positive marginal utility",
            "buy more of both goods"
          ],
          "a": 0,
          "w": "Lira başına MU: pizza 30 ÷ 15 = 2, kola 12 ÷ 4 = 3 util. Son lira kolada daha çok fayda getiriyor; harcamayı pizzadan kolaya kaydırmak aynı bütçeyle *total utility*'yi artırır. Kola arttıkça MU'su düşer, pizza azaldıkça MU'su yükselir; oranlar eşitlenene kadar devam. Pizzanın util sayısının büyük olması yanıltıcıdır: fiyata bölmeden karşılaştırma yapılmaz. Bütçe sabit olduğu için ikisinden birden fazla almak mümkün değildir."
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
          "q": "Which of the following questions would most likely be studied in microeconomics?",
          "o": [
            "Why did the national inflation rate rise last year?",
            "How does government spending affect the unemployment rate of the whole country?",
            "How will a rise in the price of sunflower oil affect the amount of oil a restaurant buys?",
            "What causes the total output of an economy to grow over time?"
          ],
          "a": 2,
          "w": "*Microeconomics* tek tek hanelerin ve firmaların kararlarını inceler: bir restoranın ne kadar yağ aldığı. Enflasyon oranı, ülke çapında işsizlik ve ekonominin toplam üretimi bütün ekonomiye bakan *macroeconomics* sorularıdır."
        },
        {
          "t": "1.1",
          "q": "Which of the following correctly pairs a factor of production with the income its owner receives?",
          "o": [
            "Land and wages",
            "Capital and rent",
            "Labor and interest",
            "Entrepreneurship and profit"
          ],
          "a": 3,
          "w": "Her üretim faktörünün bir geliri vardır: *land* → *rent*, *labor* → *wages*, *capital* → *interest*, *entrepreneurship* → *profit*. Diğer üç eşleştirme bu listeyi karıştırır."
        },
        {
          "t": "1.2",
          "q": "In a command economy, the question of what goods to produce is answered mainly by",
          "o": [
            "consumers' spending decisions",
            "customs and traditions",
            "government planners",
            "firms seeking profits"
          ],
          "a": 2,
          "w": "*Command economy*'de ne, nasıl ve kimin için sorularına devlet planlamacıları cevap verir. Tüketici harcamaları ve kâr arayan firmalar piyasa ekonomisinin, gelenekler ise *traditional economy*'nin mekanizmasıdır."
        },
        {
          "t": "1.2",
          "q": "In the circular flow model of a market economy, households sell",
          "o": [
            "factors of production to firms in factor markets",
            "goods and services to firms in product markets",
            "factors of production to firms in product markets",
            "goods and services to firms in factor markets"
          ],
          "a": 0,
          "w": "*Circular flow*'da haneler emek, toprak, sermaye ve girişimcilik gibi *factors of production*'ı *factor market*'te (kaynak piyasası) firmalara satar; karşılığında ücret, kira, faiz ve kâr alır. Mal ve hizmetler ise *product market*'te firmalardan hanelere satılır. Diğer şıklar ya akışın yönünü ya da piyasayı karıştırır."
        },
        {
          "t": "1.3-1",
          "q": "The graph shows an economy's production possibilities curve. If the economy moves from point A to point B, what is the opportunity cost of each computer produced?",
          "o": [
            "1/3 of a shirt",
            "3 shirts",
            "8 shirts",
            "32 shirts"
          ],
          "a": 0,
          "w": "A'dan B'ye: bilgisayar 0'dan 24'e çıkar (+24), gömlek 40'tan 32'ye iner (−8). Bilgisayar başına *opportunity cost* = 8 ÷ 24 = 1/3 gömlek. 3 gömlek oranı ters çevirir; 8 toplam vazgeçilen miktardır, 32 ise B'deki gömlek üretimi.",
          "fig": {
            "type": "graph",
            "xlabel": "Computers",
            "ylabel": "Shirts",
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
                "label": "A"
              },
              {
                "q": 4.8,
                "p": 6.4,
                "label": "B",
                "guides": true
              }
            ],
            "xticks": [
              {
                "v": 4.8,
                "label": "24"
              },
              {
                "v": 8,
                "label": "40"
              }
            ],
            "yticks": [
              {
                "v": 6.4,
                "label": "32"
              },
              {
                "v": 8,
                "label": "40"
              }
            ]
          }
        },
        {
          "t": "1.3-1",
          "q": "The table shows points on a country's production possibilities curve. What is the opportunity cost of increasing drone production from 20 to 40?",
          "o": [
            "60 tons of corn",
            "70 tons of corn",
            "100 tons of corn",
            "170 tons of corn"
          ],
          "a": 2,
          "w": "Drone 20'den 40'a çıkınca mısır 170'ten 70'e iner: *opportunity cost* 100 ton (40 + 60). 60 yalnız son 10 dronun maliyetidir; 70 ve 170 ise tablodaki mısır üretim düzeyleri, maliyet değil.",
          "fig": {
            "type": "table",
            "head": [
              "Point",
              "Drones",
              "Corn (tons)"
            ],
            "rows": [
              [
                "A",
                0,
                200
              ],
              [
                "B",
                10,
                190
              ],
              [
                "C",
                20,
                170
              ],
              [
                "D",
                30,
                130
              ],
              [
                "E",
                40,
                70
              ],
              [
                "F",
                50,
                0
              ]
            ]
          }
        },
        {
          "t": "1.3-1",
          "q": "An economy is producing at a point inside its production possibilities curve. Which of the following is true?",
          "o": [
            "The economy can produce more of one good without producing less of the other good.",
            "The economy is allocatively efficient.",
            "The economy must give up some of one good to produce more of the other good.",
            "The economy cannot reach its production possibilities curve without new technology."
          ],
          "a": 0,
          "w": "PPC'nin içindeki bir noktada atıl kaynak vardır: bu kaynakları kullanarak bir maldan daha çok üretmek için diğerinden vazgeçmek gerekmez, yani o artışın *opportunity cost*'u sıfırdır. Takas (*trade-off*) ancak eğri üzerindeyken zorunludur. İçerideki nokta *efficient* değildir; eğriye ulaşmak için yeni teknoloji değil, atıl kaynakları kullanmak yeter."
        },
        {
          "t": "1.3-2",
          "q": "A country's production possibilities curve shifts from PPC1 to PPC2, as shown in the graph. Which of the following events could cause this shift?",
          "o": [
            "An increase in the country's unemployment rate",
            "A drought that reduces the amount of land suitable for growing wheat",
            "A decision to produce more machines and less wheat",
            "An improvement in the technology used to produce machines"
          ],
          "a": 1,
          "w": "Yalnız buğday ekseni içe dönmüş, makine ekseni aynı kalmış: sadece buğday üretimini etkileyen bir kayıp. Kuraklık buğday tarlalarını azaltır. İşsizlik eğriyi değil üretim noktasını içeri taşır; makineye kaymak eğri üzerinde harekettir; makine teknolojisi ise makine eksenini dışa iterdi.",
          "fig": {
            "type": "graph",
            "xlabel": "Wheat",
            "ylabel": "Machines",
            "xmax": 10,
            "ymax": 10,
            "ppc": [
              {
                "qmax": 8,
                "pmax": 8,
                "k": 2,
                "label": "PPC1",
                "dash": true
              },
              {
                "qmax": 5,
                "pmax": 8,
                "k": 2,
                "label": "PPC2"
              }
            ]
          }
        },
        {
          "t": "1.3-2",
          "q": "On a production possibilities curve, allocative efficiency occurs",
          "o": [
            "at every point on the curve",
            "at any point inside the curve, where some resources are saved for later",
            "at the point where the most of one good is produced",
            "only at the point on the curve that produces the combination of goods society values most"
          ],
          "a": 3,
          "w": "*Allocative efficiency* eğri üzerindeki noktalardan yalnız birinde, toplumun en çok değer verdiği bileşimde sağlanır. Eğri üzerindeki her nokta *productive efficiency*'dir ama hepsi *allocative* değildir. İçerideki noktalar verimsizdir; bir malın en çok üretildiği uç nokta da toplumun istediği bileşim olmak zorunda değildir."
        },
        {
          "t": "1.4-1",
          "q": "The table shows the number of hours Ayşe and Emre each need to make one shirt or one hat. Who has the comparative advantage in making hats?",
          "o": [
            "Ayşe, because she can make a shirt in fewer hours",
            "Emre, because his opportunity cost of a hat is 1/3 of a shirt",
            "Neither person, because each needs 2 hours to make a hat",
            "Ayşe, because her opportunity cost of a hat is 1/2 of a shirt"
          ],
          "a": 1,
          "w": "Bu bir *input* tablosu (bir birim için saat): küçük sayı daha verimli demektir. Şapkanın *opportunity cost*'u Ayşe için 2 ÷ 4 = 1/2 gömlek, Emre için 2 ÷ 6 = 1/3 gömlek; daha düşük maliyet Emre'de, yani şapkada *comparative advantage* Emre'nin. Şapkada saatlerin eşit olması yalnız *absolute advantage* olmadığını gösterir; gömlekte hızlı olmak ise gömlekle ilgilidir.",
          "fig": {
            "type": "table",
            "head": [
              "Person",
              "Hours per shirt",
              "Hours per hat"
            ],
            "rows": [
              [
                "Ayşe",
                4,
                2
              ],
              [
                "Emre",
                6,
                2
              ]
            ],
            "caption": "Hours needed to produce one unit"
          }
        },
        {
          "t": "1.4-1",
          "q": "With the same resources, Country X can produce either 20 phones or 40 bags, and Country Y can produce either 10 phones or 30 bags. What is Country Y's opportunity cost of producing 1 phone?",
          "o": [
            "1/3 of a bag",
            "2 bags",
            "3 bags",
            "30 bags"
          ],
          "a": 2,
          "w": "*Output* bilgisinde maliyet = vazgeçilen ÷ kazanılan. Y'de 1 telefon = 30 ÷ 10 = 3 çanta. 1/3 çanta oranı ters çevirir (çantanın telefon cinsinden maliyeti); 2 çanta X'in telefon maliyetidir (40 ÷ 20); 30 ise toplam çanta üretimidir."
        },
        {
          "t": "1.4-2",
          "q": "The table shows the maximum amounts of coffee or laptops that Norland and Sudia can each produce with the same resources. If the two countries specialize according to comparative advantage, which of the following is true?",
          "o": [
            "Norland should produce both goods, because it has an absolute advantage in both.",
            "Norland should export laptops and import coffee.",
            "Sudia should export laptops, because it produces fewer of them.",
            "No trade can benefit both countries, because Norland is more productive in both goods."
          ],
          "a": 1,
          "w": "Norland iki malda da daha çok üretiyor (ikisinde *absolute advantage*), ama uzmanlaşma *comparative advantage*'a göre yapılır. Laptop maliyeti: Norland 60 ÷ 30 = 2 kahve, Sudia 40 ÷ 10 = 4 kahve → Norland laptopta; kahvenin maliyeti Sudia'da 0,25, Norland'da 0,5 laptop → Sudia kahvede uzmanlaşır. Bir ülkenin iki malda da üstün olması ticaretten kazancı ortadan kaldırmaz.",
          "fig": {
            "type": "table",
            "head": [
              "Country",
              "Coffee (tons)",
              "Laptops"
            ],
            "rows": [
              [
                "Norland",
                60,
                30
              ],
              [
                "Sudia",
                40,
                10
              ]
            ]
          }
        },
        {
          "t": "1.4-2",
          "q": "In Farland, the opportunity cost of 1 bicycle is 5 kilograms of cheese. In Nearland, the opportunity cost of 1 bicycle is 2 kilograms of cheese. If Nearland exports bicycles to Farland, which of the following terms of trade would make Farland worse off than producing bicycles on its own?",
          "o": [
            "1 bicycle for 2.5 kilograms of cheese",
            "1 bicycle for 3 kilograms of cheese",
            "1 bicycle for 4.5 kilograms of cheese",
            "1 bicycle for 6 kilograms of cheese"
          ],
          "a": 3,
          "w": "Farland bir bisikleti kendisi 5 kg peynire üretebiliyor; ithal ederken 5 kg'dan fazla ödemesi onu zarara sokar: 1 bisiklet = 6 kg. Diğer üç fiyat 2 ile 5 arasında olduğu için iki ülkeye de kazanç sağlar: Nearland 2 kg'dan fazlasını alır, Farland 5 kg'dan azını öder."
        },
        {
          "t": "1.5",
          "q": "Deniz is deciding whether to spend a year at university. Tuition is 100,000 TL and books cost 10,000 TL. She pays 60,000 TL in rent each year whether or not she attends. If she does not attend, she can work and earn 300,000 TL. What is the economic cost of the year at university?",
          "o": [
            "110,000 TL",
            "170,000 TL",
            "410,000 TL",
            "470,000 TL"
          ],
          "a": 2,
          "w": "Ekonomik maliyet = *explicit* + *implicit*: harç 100.000 + kitap 10.000 + vazgeçilen maaş 300.000 = 410.000 TL. Kira okusa da okumasa da ödenecek; karar onu değiştirmediği için maliyete girmez. 110.000 yalnız cepten çıkanlardır, 470.000 kirayı da ekler, 170.000 ise maaşı unutup kirayı ekler."
        },
        {
          "t": "1.5",
          "q": "A firm is earning zero economic profit. This means that the firm",
          "o": [
            "is earning zero accounting profit",
            "should shut down immediately",
            "is not covering its explicit costs",
            "is earning a normal profit, because its revenue covers both its explicit and implicit costs"
          ],
          "a": 3,
          "w": "*Economic profit* = 0 ise gelir hem *explicit* hem *implicit* maliyetleri tam karşılıyor: *normal profit*. Bu durumda *accounting profit* pozitiftir (*implicit cost* kadar). Firmanın kapanması gerekmez, çünkü sahibi en iyi alternatifi kadar kazanıyor. *Explicit cost*'ları karşılayamamak ise *accounting loss* olurdu."
        },
        {
          "t": "1.5",
          "q": "Kerem is deciding whether to take a Saturday coding course. The course fee is 2,000 TL. To attend, he must give up a café shift that pays 1,500 TL. He values the skills he would gain at 4,000 TL. What is Kerem's net benefit from taking the course?",
          "o": [
            "500 TL",
            "2,000 TL",
            "2,500 TL",
            "4,000 TL"
          ],
          "a": 0,
          "w": "Kursun ekonomik maliyeti: ücret 2.000 (*explicit*) + kaçan kafe vardiyası 1.500 (*implicit*) = 3.500 TL. Net fayda = 4.000 − 3.500 = 500 TL; pozitif olduğu için katılmak rasyoneldir. 2.000 TL *implicit cost*'u, 2.500 TL ise kurs ücretini unutur; 4.000 TL yalnız faydadır."
        },
        {
          "t": "1.6-1",
          "q": "The owner of a food truck is deciding how many hours to stay open in the evening. The table shows the marginal benefit and marginal cost of each hour. How many hours should the food truck stay open to maximize its net benefit?",
          "o": [
            "2 hours",
            "3 hours",
            "4 hours",
            "5 hours"
          ],
          "a": 1,
          "w": "*Marginal analysis*: ek fayda ek maliyetten büyük olduğu sürece bir saat daha açık kal. 1. saat 900 > 200, 2. saat 700 > 300, 3. saat 500 > 450; 4. saatte 300 < 700, zarar. En iyi miktar 3 saat, *net benefit* = 700 + 400 + 50 = 1.150 TL. 5. saatte MB hâlâ pozitif, ama pozitif MB yetmez: MC ile karşılaştırılmalı.",
          "fig": {
            "type": "table",
            "head": [
              "Hour",
              "Marginal benefit (TL)",
              "Marginal cost (TL)"
            ],
            "rows": [
              [
                1,
                900,
                200
              ],
              [
                2,
                700,
                300
              ],
              [
                3,
                500,
                450
              ],
              [
                4,
                300,
                700
              ],
              [
                5,
                100,
                1000
              ]
            ]
          }
        },
        {
          "t": "1.6-1",
          "q": "A person's total utility from consuming a good is at its maximum when",
          "o": [
            "marginal utility is at its highest",
            "marginal utility equals zero",
            "marginal utility equals total utility",
            "marginal utility begins to decrease"
          ],
          "a": 1,
          "w": "MU pozitif oldukça her ek birim *total utility*'yi artırır, negatif olunca azaltır. Bu yüzden TU en yüksek düzeyine MU = 0 olduğunda ulaşır. MU genellikle ilk birimde en yüksektir, TU ise orada henüz düşüktür; MU'nun azalmaya başlaması da TU'nun hâlâ arttığı anlamına gelir."
        },
        {
          "t": "1.6-2",
          "q": "Deniz has 120 TL to spend on movie tickets, which cost 30 TL each, and snacks, which cost 10 TL each. Which of the following combinations lies on her budget line?",
          "o": [
            "2 tickets and 4 snacks",
            "4 tickets and 2 snacks",
            "1 ticket and 10 snacks",
            "3 tickets and 3 snacks"
          ],
          "a": 3,
          "w": "*Budget line* üzerindeki bileşimler bütün bütçeyi harcar: 3 × 30 + 3 × 10 = 120 TL. 2 bilet + 4 atıştırmalık 100 TL tutar; doğrunun içindedir, para artar. 4 bilet + 2 atıştırmalık 140 TL, 1 bilet + 10 atıştırmalık 130 TL tutar: bütçeyi aşar, doğrunun dışındadır."
        },
        {
          "t": "1.6-2",
          "q": "Selin has 45 TL to spend on good X, which costs 10 TL per unit, and good Y, which costs 5 TL per unit. The table shows her total utility from each good. Which combination maximizes her total utility?",
          "o": [
            "3 units of X and 3 units of Y",
            "2 units of X and 2 units of Y",
            "4 units of X and 1 unit of Y",
            "2 units of X and 4 units of Y"
          ],
          "a": 0,
          "w": "Önce MU: X için 40, 30, 20, 10; Y için 25, 15, 10, 5. Lira başına MU: X 4, 3, 2, 1; Y 5, 3, 2, 1. 3 X + 3 Y'de iki oran da 2 ve harcama 30 + 15 = 45 TL, bütçe tam tükeniyor: *consumer equilibrium*, TU = 90 + 50 = 140. 2 X + 2 Y'de oranlar eşit ama yalnız 30 TL harcanıyor; kural iki koşul ister. 4 X + 1 Y (TU 125) ve 2 X + 4 Y (40 TL, TU 125) daha az fayda verir.",
          "fig": {
            "type": "table",
            "head": [
              "Units",
              "Total utility from X",
              "Total utility from Y"
            ],
            "rows": [
              [
                1,
                40,
                25
              ],
              [
                2,
                70,
                40
              ],
              [
                3,
                90,
                50
              ],
              [
                4,
                100,
                55
              ]
            ],
            "caption": "Price of X = 10 TL; price of Y = 5 TL"
          }
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
          "q": "Consider the following statements.\nI. A tax on sugary drinks will reduce the quantity of sugary drinks consumed.\nII. The government should tax sugary drinks.\nIII. Teenagers drink more sugary drinks than adults do.\nWhich of the statements are positive statements?",
          "o": [
            "I only",
            "II only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "*Positive statement* veriyle test edilebilir: I bir neden-sonuç tahmini, III ölçülebilir bir olgu. II \"should\" içerir, değer yargısıdır: *normative*. I yanlış çıksa bile *positive* kalır; belirleyici olan doğruluk değil, test edilebilirliktir."
        },
        {
          "t": "1.1",
          "q": "Which of the following is the best example of the factor of production entrepreneurship?",
          "o": [
            "A worker who assembles phones on a factory production line",
            "A farmer's field and the rainwater that falls on it",
            "A delivery van used by a bakery",
            "A student who rents a kitchen, hires two helpers, and risks her savings to start a cookie business"
          ],
          "a": 3,
          "w": "*Entrepreneurship*: kaynakları (mutfak, yardımcılar, tarif) bir araya getirip yeni bir iş kurma ve riski üstlenme yeteneği. Hat işçisi *labor*, tarla ve yağmur suyu *land*, teslimat minibüsü *capital*'dir."
        },
        {
          "t": "1.2",
          "q": "Handmade ceramic mugs suddenly become popular, and their price rises sharply. In a market economy, the price increase most likely",
          "o": [
            "leads the government to order factories to produce more mugs",
            "signals producers to devote more resources to making mugs, because of the profit motive",
            "reduces the incentive for new firms to start making mugs",
            "has no effect on how resources are allocated"
          ],
          "a": 1,
          "w": "Piyasa ekonomisinde fiyat bir sinyaldir: kupa fiyatının yükselmesi kâr fırsatı demektir; *profit motive* üreticileri daha çok kaynak ayırmaya, yeni firmaları piyasaya girmeye yöneltir. *Invisible hand* budur: kimse emretmeden kaynaklar tüketicinin istediğine akar. Devlet emri *command economy*'nin aracıdır."
        },
        {
          "t": "1.2",
          "q": "Which of the following is a reason that most countries have mixed economies rather than pure free-market economies?",
          "o": [
            "Free markets may provide too little of public goods, such as national defense and street lighting.",
            "Free markets cannot use prices to allocate goods and services.",
            "In free markets, firms have no incentive to produce what consumers want.",
            "Private property rights prevent markets from functioning."
          ],
          "a": 0,
          "w": "Saf piyasa bazı işlerde zayıftır: herkesin parasız yararlanabildiği *public goods* (savunma, sokak lambası) için kimse ödeme yapmak istemez, piyasa bunları yetersiz üretir. Bu yüzden çoğu ülke *mixed economy*'dir. Fiyatları kullanmak ve tüketicinin istediğini üretmek piyasanın güçlü yanlarıdır; *property rights* ise piyasanın engeli değil, temelidir."
        },
        {
          "t": "1.3-1",
          "q": "The graph shows the production possibilities curve for a small country. What is the opportunity cost of producing 1 tablet?",
          "o": [
            "2/3 of a jacket",
            "1.5 jackets",
            "15 jackets",
            "45 jackets"
          ],
          "a": 1,
          "w": "Doğrusal PPC: 30 tablet ya da 45 ceket. 1 tablet = 45 ÷ 30 = 1,5 ceket; eğri doğru olduğu için her noktada aynı (*constant opportunity cost*). 2/3 ceket oranı ters çevirir (ceketin tablet cinsinden maliyeti); 15 ve 45 eksen üzerindeki düzeylerdir.",
          "fig": {
            "type": "graph",
            "xlabel": "Tablets",
            "ylabel": "Jackets",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  9
                ],
                "to": [
                  6,
                  0
                ],
                "label": "PPC"
              }
            ],
            "xticks": [
              {
                "v": 2,
                "label": "10"
              },
              {
                "v": 4,
                "label": "20"
              },
              {
                "v": 6,
                "label": "30"
              }
            ],
            "yticks": [
              {
                "v": 3,
                "label": "15"
              },
              {
                "v": 6,
                "label": "30"
              },
              {
                "v": 9,
                "label": "45"
              }
            ]
          }
        },
        {
          "t": "1.3-1",
          "q": "The table shows points on a country's production possibilities curve. Which of the following combinations is unattainable for this country?",
          "o": [
            "1 car and 40 boats",
            "2 cars and 38 boats",
            "3 cars and 20 boats",
            "4 cars and 0 boats"
          ],
          "a": 1,
          "w": "2 araba üretirken en fazla 36 tekne üretilebilir; 38 tekne bu sınırın üstünde, yani *unattainable*. 1 araba + 40 tekne (sınır 42) ve 3 araba + 20 tekne (sınır 25) eğrinin içinde: ulaşılabilir ama *inefficient*. 4 araba + 0 tekne eğrinin üstündeki uç noktadır.",
          "fig": {
            "type": "table",
            "head": [
              "Point",
              "Cars",
              "Boats"
            ],
            "rows": [
              [
                "A",
                0,
                45
              ],
              [
                "B",
                1,
                42
              ],
              [
                "C",
                2,
                36
              ],
              [
                "D",
                3,
                25
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
          "t": "1.3-1",
          "q": "Ela has 6 hours to study. In each hour, she can solve 4 math problems or write 2 pages of an essay. If she writes 6 pages, what is the maximum number of math problems she can also solve?",
          "o": [
            "6",
            "8",
            "12",
            "24"
          ],
          "a": 2,
          "w": "6 sayfa 6 ÷ 2 = 3 saat sürer; kalan 3 saatte 3 × 4 = 12 soru. Kontrol: sayfa başına *opportunity cost* 2 soru, 6 sayfa = 12 sorudan vazgeçmek, 24 − 12 = 12. 24 bütün zamanı matematiğe veren uç noktadır, 6 ise yazılan sayfa sayısı."
        },
        {
          "t": "1.3-2",
          "q": "The production possibilities curve shown is bowed outward from the origin. Which of the following best explains this shape?",
          "o": [
            "Resources are equally well suited to producing both goods, so the opportunity cost of each good is constant.",
            "The economy is producing inefficiently at the points between A and D.",
            "Diminishing marginal utility makes consumers want less of each good as more of it is produced.",
            "Resources are not equally well suited to producing both goods, so the opportunity cost of each good rises as more of it is produced."
          ],
          "a": 3,
          "w": "Dışa bükük PPC *increasing opportunity cost* demektir: kaynaklar iki mala eşit derecede uygun değildir. X üretimi arttıkça X'e pek uygun olmayan kaynaklar da kaydırılır ve her ek X için daha çok Y'den vazgeçilir. Eğri üzerindeki noktalar *efficient*'tır; eğrinin şekli tüketici tercihleriyle (*marginal utility*) değil, üretim tarafıyla ilgilidir.",
          "fig": {
            "type": "graph",
            "xlabel": "Good X",
            "ylabel": "Good Y",
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
                "label": "A"
              },
              {
                "q": 4.8,
                "p": 6.4,
                "label": "B"
              },
              {
                "q": 6.4,
                "p": 4.8,
                "label": "C"
              },
              {
                "q": 8,
                "p": 0,
                "label": "D"
              }
            ]
          }
        },
        {
          "t": "1.3-2",
          "q": "Alpha and Beta have identical production possibilities curves today. Alpha chooses to produce more capital goods and fewer consumer goods than Beta. Other things equal, which of the following is most likely in the future?",
          "o": [
            "Alpha's production possibilities curve will shift outward by more than Beta's.",
            "Beta's production possibilities curve will shift outward by more than Alpha's, because Beta's consumers are better off today.",
            "Both curves will shift outward by the same amount, because the countries have the same resources today.",
            "Alpha's production possibilities curve will shift inward, because Alpha consumes fewer goods today."
          ],
          "a": 0,
          "w": "Bugün daha çok *capital goods* (makine, fabrika) üretmek gelecekte üretim kapasitesini artırır: Alpha'nın PPC'si daha çok dışa kayar. Bedeli, bugün daha az tüketim malıdır. Bugünkü tüketim kapasiteyi büyütmez; kaynaklar bugün aynı olsa da seçim farklı olduğu için büyüme de farklı olur."
        },
        {
          "t": "1.4-1",
          "q": "The table shows the maximum amounts of wheat or cloth that Westria and Eastia can each produce with the same resources. Which of the following statements is correct?",
          "o": [
            "Westria has a comparative advantage in both goods.",
            "Westria has an absolute advantage in both goods but a comparative advantage only in cloth.",
            "Eastia has an absolute advantage in wheat.",
            "Eastia has a comparative advantage in cloth, because its opportunity cost of cloth is 1/3 ton of wheat."
          ],
          "a": 1,
          "w": "Westria iki malda da daha çok üretiyor: ikisinde *absolute advantage*. Kumaşın maliyeti Westria'da 40 ÷ 20 = 2 buğday, Eastia'da 30 ÷ 10 = 3 buğday → kumaşta *comparative advantage* Westria'nın. Buğdayın maliyeti Westria'da 0,5, Eastia'da 1/3 kumaş → buğdayda Eastia. 1/3 Eastia'nın buğday maliyetidir (kumaş cinsinden), kumaş maliyeti değil.",
          "fig": {
            "type": "table",
            "head": [
              "Country",
              "Wheat (tons)",
              "Cloth (tons)"
            ],
            "rows": [
              [
                "Westria",
                40,
                20
              ],
              [
                "Eastia",
                30,
                10
              ]
            ]
          }
        },
        {
          "t": "1.4-1",
          "q": "Burak needs 30 minutes to wash a car and 60 minutes to mow a lawn. İpek needs 20 minutes to wash a car and 30 minutes to mow a lawn. Who has the comparative advantage in mowing lawns, and what is that person's opportunity cost of mowing one lawn?",
          "o": [
            "İpek; 1.5 car washes",
            "Burak; 2 car washes",
            "İpek; 2/3 of a car wash",
            "Burak; 1/2 of a car wash"
          ],
          "a": 0,
          "w": "Bu bir *input* bilgisi (dakika): bir çim biçmenin maliyeti, o sürede yıkanabilecek araba sayısıdır. Burak: 60 ÷ 30 = 2 yıkama, İpek: 30 ÷ 20 = 1,5 yıkama → çimde *comparative advantage* İpek'in. 2/3, İpek'in bir yıkamasının çim cinsinden maliyetidir; 1/2 ise Burak'ınki."
        },
        {
          "t": "1.4-2",
          "q": "Alba can produce either 60 tons of olives or 20 radios, and Corva can produce either 40 tons of olives or 40 radios. Both have constant opportunity costs, and each country initially divides its resources equally between the two goods. If each country instead specializes completely according to comparative advantage, the countries' combined output will change by",
          "o": [
            "20 more tons of olives and 20 more radios",
            "10 more tons of olives and 10 fewer radios",
            "10 more tons of olives and 10 more radios",
            "nothing, because specialization only redistributes output"
          ],
          "a": 2,
          "w": "Önce: Alba 30 zeytin + 10 radyo, Corva 20 zeytin + 20 radyo; toplam 50 zeytin, 30 radyo. Radyonun maliyeti Alba'da 3, Corva'da 1 ton zeytin → Alba zeytinde, Corva radyoda uzmanlaşır: 60 zeytin + 40 radyo. Toplam üretim 10 ton zeytin ve 10 radyo artar: *gains from specialization*. Uzmanlaşma yalnız dağıtımı değil, toplam üretimi de değiştirir."
        },
        {
          "t": "1.4-2",
          "q": "The graph shows Country Z's production possibilities curve. Z currently produces and consumes at point P. Which of the following could allow Z to consume at point T?",
          "o": [
            "Moving its existing resources from the production of grain to textiles",
            "Reducing unemployment so that production rises to point T",
            "Specializing in the good in which it has a comparative advantage and trading with another country",
            "Producing less of both goods"
          ],
          "a": 2,
          "w": "T, Z'nin PPC'sinin dışında: mevcut kaynak ve teknolojiyle üretilemez. Ama *specialization* ve ticaretle bir ülke PPC'sinin dışında *consume* edebilir. P zaten eğri üzerinde, atıl kaynak yok; işsizliği azaltarak ya da kaynakları kaydırarak eğrinin dışına çıkılamaz.",
          "fig": {
            "type": "graph",
            "xlabel": "Grain",
            "ylabel": "Textiles",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  8
                ],
                "to": [
                  8,
                  0
                ],
                "label": "PPC"
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 4,
                "label": "P"
              },
              {
                "q": 5.5,
                "p": 5,
                "label": "T"
              }
            ]
          }
        },
        {
          "t": "1.5",
          "q": "Ozan runs an ice cream stand for the summer. The table shows his revenue and costs. What is Ozan's economic profit?",
          "o": [
            "5,000 TL",
            "40,000 TL",
            "55,000 TL",
            "85,000 TL"
          ],
          "a": 0,
          "w": "*Explicit costs*: 25.000 + 15.000 + 10.000 = 50.000 TL; *implicit costs*: vazgeçilen staj maaşı 30.000 + birikimin kaçan faizi 5.000 = 35.000 TL. *Accounting profit* = 90.000 − 50.000 = 40.000; *economic profit* = 40.000 − 35.000 = 5.000 TL. 55.000 yalnız *implicit* maliyetleri, 85.000 yalnız faizi düşer.",
          "fig": {
            "type": "table",
            "head": [
              "Item",
              "Amount (TL)"
            ],
            "rows": [
              [
                "Revenue from ice cream sales",
                "90,000"
              ],
              [
                "Ingredients",
                "25,000"
              ],
              [
                "Rent for the stand",
                "15,000"
              ],
              [
                "Wages paid to a helper",
                "10,000"
              ],
              [
                "Salary Ozan gave up from an internship",
                "30,000"
              ],
              [
                "Interest Ozan's savings would have earned",
                "5,000"
              ]
            ]
          }
        },
        {
          "t": "1.5",
          "q": "A firm has already spent 2 million TL developing a new app, and none of this money can be recovered. Finishing the app would cost another 1 million TL, and the finished app is expected to bring in 800,000 TL in revenue. Should the firm finish the app?",
          "o": [
            "Yes, because otherwise the 2 million TL already spent will be wasted",
            "Yes, because the expected revenue from the app is positive",
            "No, because a firm should never continue a project that has lost money",
            "No, because the additional cost of 1 million TL is greater than the additional revenue of 800,000 TL"
          ],
          "a": 3,
          "w": "Harcanan 2 milyon TL geri gelmez: *sunk cost*, karara girmez. Karar ek fayda ile ek maliyet arasındadır: bitirmek 1 milyon TL daha ister ama yalnız 800.000 TL getirir, net −200.000 TL. \"Para boşa gitmesin\" düşüncesi *sunk cost fallacy*'dir; gelirin pozitif olması yetmez, ek maliyeti karşılamalıdır. Geçmiş zarar da ölçüt değildir: ek gelir ek maliyeti aşsaydı bitirmek doğru olurdu."
        },
        {
          "t": "1.5",
          "q": "Consider the following costs of a family-owned restaurant.\nI. The rent the family could earn by renting its building to another business\nII. The wages paid to the restaurant's waiters\nIII. The salary the owner gave up when she left her office job\nWhich of the following are implicit costs?",
          "o": [
            "I only",
            "II only",
            "I and III only",
            "II and III only"
          ],
          "a": 2,
          "w": "*Implicit cost* vazgeçilen fırsatın değeridir: binayı başkasına kiralasa alacağı kira (I) ve sahibin bıraktığı maaş (III). Garsonlara ödenen ücret cepten çıkan bir *explicit cost*'tur."
        },
        {
          "t": "1.6-1",
          "q": "The table shows Can's total utility from eating pieces of baklava. Which of the following statements is true?",
          "o": [
            "Can's total utility is maximized when he eats 5 pieces.",
            "The marginal utility of the 2nd piece is 50 utils.",
            "Can's marginal utility begins to diminish only after the 3rd piece.",
            "The marginal utility of the 4th piece is zero, and the marginal utility of the 5th piece is negative."
          ],
          "a": 3,
          "w": "MU = ΔTU: 30, 20, 10, 0, −5. 4. parçanın MU'su 0, 5.'nin −5: fazla tüketim toplam faydayı düşürür. TU en yüksek değerine (60) 3 ve 4 parçada ulaşır, 5 parçada 55'e iner. 2. parçanın MU'su 20'dir (50 *total*); MU daha ilk parçadan sonra azalmaya başlar.",
          "fig": {
            "type": "table",
            "head": [
              "Pieces of baklava",
              "Total utility (utils)"
            ],
            "rows": [
              [
                1,
                30
              ],
              [
                2,
                50
              ],
              [
                3,
                60
              ],
              [
                4,
                60
              ],
              [
                5,
                55
              ]
            ]
          }
        },
        {
          "t": "1.6-1",
          "q": "Water is essential for life but has a low price, while diamonds are not essential but have a high price. Economists explain this by noting that",
          "o": [
            "the total utility of diamonds is greater than the total utility of water",
            "water is a public good that is always provided by the government",
            "diamonds have increasing marginal utility",
            "price reflects marginal utility, and because water is plentiful, the marginal utility of the last unit of water is low"
          ],
          "a": 3,
          "w": "Elmas–su paradoksu: suyun *total utility*'si çok yüksektir, ama su bol olduğu için son bardağın *marginal utility*'si düşüktür; fiyatı belirleyen de son birimin değeridir. Elmas kıt olduğu için son elmasın MU'su yüksektir. Toplam faydası daha yüksek olan aslında sudur; elmasın MU'su da artmaz, o da azalır."
        },
        {
          "t": "1.6-2",
          "q": "Elif has 200 TL to spend on books and movie tickets. The graph shows her budget line. What is Elif's opportunity cost of buying 1 book?",
          "o": [
            "0.625 of a movie ticket",
            "1.6 movie tickets",
            "5 movie tickets",
            "8 movie tickets"
          ],
          "a": 1,
          "w": "*Budget line* 8 bilet ile 5 kitap arasında: 1 kitap = 8 ÷ 5 = 1,6 bilet. Bu, fiyat oranına eşittir: kitap 200 ÷ 5 = 40 TL, bilet 200 ÷ 8 = 25 TL, 40 ÷ 25 = 1,6. 0,625 oranı ters çevirir (biletin kitap cinsinden maliyeti); 5 ve 8 eksen kesişimleridir.",
          "fig": {
            "type": "graph",
            "xlabel": "Books",
            "ylabel": "Movie tickets",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  8
                ],
                "to": [
                  5,
                  0
                ],
                "label": "Budget line"
              }
            ],
            "xticks": [
              {
                "v": 5,
                "label": "5"
              }
            ],
            "yticks": [
              {
                "v": 8,
                "label": "8"
              }
            ]
          }
        },
        {
          "t": "1.6-2",
          "q": "A consumer is maximizing utility, so that the marginal utility per lira spent on good X equals the marginal utility per lira spent on good Y. If the price of X falls while everything else stays the same, then",
          "o": [
            "MUx/Px becomes greater than MUy/Py, so the consumer buys more X, which illustrates the law of demand",
            "MUx/Px becomes smaller than MUy/Py, so the consumer buys less X",
            "the marginal utility of each unit of X rises, so the consumer buys more X",
            "nothing changes, because marginal utility depends only on the quantity consumed"
          ],
          "a": 0,
          "w": "Dengede MUx/Px = MUy/Py. X'in fiyatı düşünce MUx/Px büyür: son lira artık X'te daha çok fayda getirir, tüketici daha çok X alır. X arttıkça MU'su düşer ve oranlar yeniden eşitlenir. Fiyat düştü, miktar arttı: *law of demand*. Fiyat MU'yu değiştirmez, MU tüketilen miktara bağlıdır; değişen MU/P oranıdır."
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
          "q": "Which of the following is a positive economic statement?",
          "o": [
            "Raising tuition at public universities would be unfair to students from low-income families.",
            "Public universities are too expensive for most students.",
            "Public universities should spend more on research than on sports.",
            "Raising tuition at public universities would reduce the number of applicants by about 10 percent."
          ],
          "a": 3,
          "w": "Başvuruların yaklaşık yüzde 10 düşeceği tahmini veriyle test edilebilir: *positive*. \"Unfair\", \"too expensive\" ve \"should\" değer yargısı taşır: *normative*. Sayı içermesi ifadeyi doğru yapmaz, yalnız test edilebilir kılar."
        },
        {
          "t": "1.1",
          "q": "Which of the following situations describes scarcity rather than a shortage?",
          "o": [
            "Concert tickets sell out within minutes because the ticket price is set below the market-clearing level.",
            "A town has enough fresh water to expand either its farms or its factories, but not both.",
            "After the government caps the price of bread, bakeries run out of bread by noon every day.",
            "A store runs out of umbrellas during a surprise storm and must wait for the next delivery."
          ],
          "a": 1,
          "w": "*Scarcity* kalıcıdır: sınırlı su ya tarlalara ya fabrikalara gidecek, fiyat ne olursa olsun bir takas var. Diğer üçü *shortage*'dır: fiyat piyasayı temizleyen düzeyin altında tutulduğunda (bilet, tavan fiyatlı ekmek) ya da yeni teslimat gelene kadar geçici olarak istenen miktar mevcut miktarı aşar."
        },
        {
          "t": "1.2",
          "q": "A village pasture was once open to everyone, and it was badly overgrazed. After the pasture was divided into privately owned plots, each owner limited the number of animals grazing on his or her plot. This example best illustrates",
          "o": [
            "how clearly defined property rights give owners an incentive to conserve resources",
            "how a command economy allocates resources more efficiently than a market economy",
            "why traditional economies rely on custom to answer the basic economic questions",
            "how the invisible hand fails when goods are privately owned"
          ],
          "a": 0,
          "w": "Herkese açık mera aşırı otlatılıyordu: kimse sahibi olmadığı için korumaya teşvik yoktu. Parseller özel mülk olunca otlatmanın gelecekteki bedelini de sahibi kendisi taşır ve otlatmayı sınırlar: *property rights* ve *incentives* ilişkisi. Kararı devlet değil sahipler verdiği için bu *command economy* değildir; özel mülkiyet *invisible hand*'in başarısızlığı değil, ön şartıdır."
        },
        {
          "t": "1.2",
          "q": "Which of the following statements about economic systems is correct?",
          "o": [
            "A country's political system determines its economic system, so a one-party state must have a command economy.",
            "In a pure market economy, the government sets prices to signal producers what to make.",
            "Command economies rely mainly on the profit motive to decide what to produce.",
            "Most real-world economies are mixed, combining market decisions with some government involvement."
          ],
          "a": 3,
          "w": "Gerçek ekonomilerin çoğu *mixed economy*'dir: kararların çoğu piyasada, bir kısmı devlette verilir. Siyasi sistem ekonomik sistemi belirlemez: tek parti yönetimindeki Çin'de geniş bir piyasa kesimi vardır. Saf piyasada fiyatları devlet değil alıcılar ve satıcılar belirler; *profit motive* de *command economy*'nin değil, piyasa ekonomisinin aracıdır."
        },
        {
          "t": "1.3-1",
          "q": "The graph shows a country's production possibilities curve. If the country moves from point B to point C, what is the opportunity cost of each additional tractor?",
          "o": [
            "0.5 unit of furniture",
            "2/3 of a unit of furniture",
            "1.5 units of furniture",
            "6 units of furniture"
          ],
          "a": 2,
          "w": "B'den C'ye: traktör 12'den 16'ya (+4), mobilya 24'ten 18'e (−6). Traktör başına *opportunity cost* = 6 ÷ 4 = 1,5 birim mobilya. 0,5 A'dan B'ye geçişin maliyetidir (6 ÷ 12), 2/3 oranı ters çevirir, 6 toplam vazgeçilen miktardır. Maliyetin 0,5'ten 1,5'e çıkması *increasing opportunity cost*'u gösterir.",
          "fig": {
            "type": "graph",
            "xlabel": "Tractors",
            "ylabel": "Furniture",
            "xmax": 10,
            "ymax": 10,
            "ppc": [
              {
                "qmax": 8,
                "pmax": 6,
                "k": 2,
                "label": "PPC"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 6,
                "label": "A"
              },
              {
                "q": 4.8,
                "p": 4.8,
                "label": "B",
                "guides": true
              },
              {
                "q": 6.4,
                "p": 3.6,
                "label": "C",
                "guides": true
              }
            ],
            "xticks": [
              {
                "v": 4.8,
                "label": "12"
              },
              {
                "v": 6.4,
                "label": "16"
              },
              {
                "v": 8,
                "label": "20"
              }
            ],
            "yticks": [
              {
                "v": 3.6,
                "label": "18"
              },
              {
                "v": 4.8,
                "label": "24"
              },
              {
                "v": 6,
                "label": "30"
              }
            ]
          }
        },
        {
          "t": "1.3-1",
          "q": "The table shows points on a country's production possibilities curve. The country is currently producing 10 units of X and 30 units of Y. If it moves to producing 20 units of X and 30 units of Y, what is the opportunity cost of the additional 10 units of X?",
          "o": [
            "0 units of Y",
            "10 units of Y",
            "20 units of Y",
            "30 units of Y"
          ],
          "a": 0,
          "w": "10 X üretirken en fazla 50 Y üretilebilir; 30 Y ile ekonomi eğrinin içinde, atıl kaynak var. 20 X + 30 Y tam eğri üzerinde ve Y azalmıyor: ek 10 X'in *opportunity cost*'u 0. 20 Y, tablodaki B → C adımının maliyetidir; o yalnız eğri üzerinden başlayınca geçerlidir.",
          "fig": {
            "type": "table",
            "head": [
              "Point",
              "Good X",
              "Good Y"
            ],
            "rows": [
              [
                "A",
                0,
                60
              ],
              [
                "B",
                10,
                50
              ],
              [
                "C",
                20,
                30
              ],
              [
                "D",
                30,
                0
              ]
            ]
          }
        },
        {
          "t": "1.3-1",
          "q": "Consider the following statements about a production possibilities curve (PPC).\nI. Points inside the PPC indicate unemployed or underused resources.\nII. Points outside the PPC may become attainable in the future through economic growth.\nIII. Every point on the PPC is allocatively efficient.\nWhich of the statements are correct?",
          "o": [
            "I only",
            "I and II only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 1,
          "w": "I doğru: içerideki noktalar atıl ya da verimsiz kullanılan kaynak demektir. II doğru: dışarıdaki noktalar bugün ulaşılamaz, ama *economic growth* (daha çok kaynak, daha iyi teknoloji) eğriyi dışa kaydırırsa ulaşılabilir hâle gelir. III yanlış: eğri üzerindeki noktaların hepsi *productively efficient*'tır, *allocative efficiency* ise yalnız toplumun en çok değer verdiği bileşimdedir."
        },
        {
          "t": "1.3-2",
          "q": "Which of the following would move an economy from a point inside its production possibilities curve to a point on the curve, without shifting the curve?",
          "o": [
            "Unemployed workers find jobs in existing industries.",
            "A new technology raises productivity in both industries.",
            "The country discovers large new oil reserves.",
            "More education raises the skills of the country's workers."
          ],
          "a": 0,
          "w": "İşsiz işçilerin mevcut sektörlerde iş bulması, içerideki noktadan eğriye doğru bir harekettir; üretim kapasitesi değişmez. Yeni teknoloji, yeni petrol rezervi ve eğitimle artan beceri (*human capital*) kapasiteyi büyütür, yani eğriyi dışa kaydırır."
        },
        {
          "t": "1.3-2",
          "q": "An economy is producing at point C, which lies on its production possibilities curve. Which of the following must be true?",
          "o": [
            "The economy is also allocatively efficient at point C.",
            "Point C is the combination of goods that consumers prefer most.",
            "The economy cannot produce more of either good without producing less of the other good.",
            "The opportunity cost of producing more of either good is zero."
          ],
          "a": 2,
          "w": "Eğri üzerindeki her nokta *productive efficiency*'dir: bir maldan daha çok üretmek için diğerinden vazgeçmek gerekir. Ama bu noktanın toplumun en çok istediği bileşim olduğu (*allocative efficiency*) garanti değildir. Eğri üzerindeyken ek üretimin *opportunity cost*'u sıfır değil, pozitiftir."
        },
        {
          "t": "1.4-1",
          "q": "With the same resources, Ruva can produce either 20 tons of tea or 10 rugs, and Selo can produce either 8 tons of tea or 4 rugs. Which of the following statements is correct?",
          "o": [
            "Neither country has a comparative advantage, so specialization and trade cannot make both countries better off.",
            "Ruva has a comparative advantage in both goods.",
            "Selo should specialize in rugs, because it produces fewer of them.",
            "Both countries can gain from trade, because Ruva has an absolute advantage in both goods."
          ],
          "a": 0,
          "w": "Halının maliyeti iki ülkede de aynı: Ruva'da 20 ÷ 10 = 2, Selo'da 8 ÷ 4 = 2 ton çay. *Opportunity cost*'lar eşitse *comparative advantage* yoktur; uzmanlaşma toplam üretimi artırmaz ve iki ülkeyi birden kazançlı çıkaran bir *terms of trade* bulunmaz. Ruva'nın iki malda *absolute advantage*'ı olması tek başına ticaret kazancı yaratmaz."
        },
        {
          "t": "1.4-1",
          "q": "The table shows the number of labor hours that Rava and Sela each need to produce one ton of sugar or one bicycle. Which of the following statements is correct?",
          "o": [
            "Sela has a comparative advantage in sugar, because it needs fewer hours to produce a ton of sugar.",
            "Rava has a comparative advantage in bicycles, because its opportunity cost of a bicycle is 2 tons of sugar.",
            "Rava has a comparative advantage in sugar, because its opportunity cost of a ton of sugar is 2 bicycles, compared with 4 bicycles in Sela.",
            "Neither country has a comparative advantage, because Sela has an absolute advantage in both goods."
          ],
          "a": 2,
          "w": "*Input* tablosu: bir birim için saat. Bir ton şekerin maliyeti, o saatlerde yapılabilecek bisiklet sayısıdır: Rava'da 6 ÷ 3 = 2, Sela'da 4 ÷ 1 = 4 bisiklet → şekerde *comparative advantage* Rava'nın. Sela iki malda da daha az saat harcıyor (*absolute advantage*), ama Rava yine bir malda *comparative advantage* sahibidir. \"2 ton şeker\" çeldiricisi oranı ters kurar; Rava'nın bisiklet maliyeti 3 ÷ 6 = 0,5 ton şekerdir.",
          "fig": {
            "type": "table",
            "head": [
              "Country",
              "Hours per ton of sugar",
              "Hours per bicycle"
            ],
            "rows": [
              [
                "Rava",
                6,
                3
              ],
              [
                "Sela",
                4,
                1
              ]
            ],
            "caption": "Labor hours needed to produce one unit"
          }
        },
        {
          "t": "1.4-2",
          "q": "With the same resources, Kale can produce either 40 tons of cheese or 20 robots, and Dune can produce either 30 tons of cheese or 5 robots. Which of the following terms of trade would allow both countries to gain from specialization and trade?",
          "o": [
            "1 robot for 1.5 tons of cheese",
            "1 robot for 4 tons of cheese",
            "1 robot for 6.5 tons of cheese",
            "3 robots for 1 ton of cheese"
          ],
          "a": 1,
          "w": "Robotun maliyeti: Kale 40 ÷ 20 = 2, Dune 30 ÷ 5 = 6 ton peynir. Kale robot ihraç eder; fiyat 2 ile 6 ton arasında olmalı: 1 robot = 4 ton ikisine de kazanç sağlar. 1,5 ton Kale'yi, 6,5 ton Dune'u zarara sokar; 3 robot = 1 ton, robot başına 1/3 ton demektir ve Kale için çok kötüdür."
        },
        {
          "t": "1.4-2",
          "q": "Kale can produce either 40 tons of cheese or 20 robots, with constant opportunity costs. Without trade, Kale produces and consumes 20 tons of cheese and 10 robots. Kale then specializes completely in robots and trades 8 robots to another country for 24 tons of cheese. Compared with no trade, Kale now consumes",
          "o": [
            "24 more tons of cheese and 12 more robots",
            "4 more tons of cheese but 8 fewer robots",
            "4 more tons of cheese and 2 more robots",
            "the same amounts of both goods, because trade only moves goods between countries"
          ],
          "a": 2,
          "w": "Ticaretten sonra Kale 20 − 8 = 12 robot ve 24 ton peynir tüketir; öncesi 10 robot ve 20 ton peynirdi. Kazanç: 4 ton peynir + 2 robot, PPC'nin dışında bir nokta (*gains from trade*). 24 ve 12 kazanç değil, yeni tüketim düzeyleridir; 8 robot ihraç edildi ama üretim de 10'dan 20'ye çıktı."
        },
        {
          "t": "1.5",
          "q": "Mert's shop earned 600,000 TL in revenue last year, and his explicit costs were 420,000 TL. If Mert closed the shop, he could earn a salary of 150,000 TL, and the savings he invested in the shop could earn 50,000 TL in interest. Which of the following is correct?",
          "o": [
            "Mert earns an economic profit of 180,000 TL, so he should stay in business.",
            "Mert earns an accounting loss of 20,000 TL, so he should close the shop.",
            "Mert earns zero economic profit, so he is indifferent about staying in business.",
            "Mert earns an accounting profit of 180,000 TL but an economic loss of 20,000 TL."
          ],
          "a": 3,
          "w": "*Accounting profit* = 600.000 − 420.000 = 180.000 TL. *Implicit costs* = 150.000 + 50.000 = 200.000 TL → *economic profit* = 180.000 − 200.000 = −20.000 TL, yani *economic loss*. Muhasebe kârı pozitif görünse de Mert en iyi alternatifinde (maaş + faiz) 20.000 TL daha fazla kazanırdı."
        },
        {
          "t": "1.5",
          "q": "Ayşe paid 3,000 TL, which cannot be refunded, for a 10-week course. After 4 weeks, she finds the course much less useful than expected. Each of the remaining 6 weeks requires 2 hours that she could otherwise spend working for 200 TL per hour. She values the certificate she would receive at the end at 1,500 TL. Which of the following correctly describes Ayşe's rational choice and the reason for it?",
          "o": [
            "Finish, because she has already paid 3,000 TL for the course",
            "Finish, because finishing the course has no additional explicit cost",
            "Quit, but only if she can sell her place in the course for more than 3,000 TL",
            "Quit, because the remaining cost of 2,400 TL is greater than the 1,500 TL benefit"
          ],
          "a": 3,
          "w": "Ödenen 3.000 TL geri gelmez: *sunk cost*, karara girmez. Kalan maliyet 6 hafta × 2 saat × 200 TL = 2.400 TL vazgeçilen kazançtır (*implicit cost*); sertifikanın değeri ise 1.500 TL: bırakmak rasyoneldir. Bitirmenin cepten ek ücreti yok, ama *implicit cost* yine de maliyettir. Yerini satma şıkkında eşik 3.000 TL olamaz; ödenmiş fiyat bugünkü kararı değiştirmez."
        },
        {
          "t": "1.5",
          "q": "Zeynep is deciding whether to do a two-week internship abroad. The table lists the costs and benefits she has identified. What is Zeynep's net benefit from doing the internship?",
          "o": [
            "−5,000 TL",
            "−2,000 TL",
            "1,000 TL",
            "11,000 TL"
          ],
          "a": 2,
          "w": "Fayda: deneyimin değeri 25.000 + burs 6.000 = 31.000 TL (*implicit* ve *explicit benefits*). Maliyet: uçak 12.000 + konaklama 8.000 + kaçan yaz işi 10.000 = 30.000 TL. Net fayda = 1.000 TL; gitmek rasyonel. Yemek her iki durumda da ödeneceği için sayılmaz (eklenirse −2.000); yaz işini unutmak 11.000, bursu unutmak −5.000 verir.",
          "fig": {
            "type": "table",
            "head": [
              "Item",
              "Amount (TL)"
            ],
            "rows": [
              [
                "Flight",
                "12,000"
              ],
              [
                "Housing abroad",
                "8,000"
              ],
              [
                "Food (same amount whether or not she goes)",
                "3,000"
              ],
              [
                "Wages from a summer job she would give up",
                "10,000"
              ],
              [
                "Stipend paid by the company",
                "6,000"
              ],
              [
                "Value Zeynep places on the experience",
                "25,000"
              ]
            ]
          }
        },
        {
          "t": "1.6-1",
          "q": "A bakery is deciding how many extra hours to keep its oven running. The table shows the total benefit and total cost of each number of hours. How many extra hours should the bakery run its oven to maximize net benefit?",
          "o": [
            "2",
            "3",
            "4",
            "5"
          ],
          "a": 1,
          "w": "Toplamlardan marjinale geç: MB = 1.000, 800, 600, 400, 200; MC = 300, 400, 500, 600, 700. 3. saatte 600 > 500, 4. saatte 400 < 600 → 3 saat. Kontrol: *net benefit* (TB − TC) 700, 1.100, 1.200, 1.000, 500; en yüksek değer 3 saatte. 5 saat *total benefit*'i en yükseğe çıkarır, ama amaç TB değil, TB − TC'dir.",
          "fig": {
            "type": "table",
            "head": [
              "Extra hours",
              "Total benefit (TL)",
              "Total cost (TL)"
            ],
            "rows": [
              [
                0,
                0,
                0
              ],
              [
                1,
                "1,000",
                300
              ],
              [
                2,
                "1,800",
                700
              ],
              [
                3,
                "2,400",
                "1,200"
              ],
              [
                4,
                "2,800",
                "1,800"
              ],
              [
                5,
                "3,000",
                "2,500"
              ]
            ]
          }
        },
        {
          "t": "1.6-1",
          "q": "Arda's marginal utilities from successive glasses of lemonade are 12, 9, 6, 3, 0, and −3 utils. What is Arda's total utility if he drinks 6 glasses?",
          "o": [
            "−3 utils",
            "27 utils",
            "30 utils",
            "33 utils"
          ],
          "a": 1,
          "w": "*Total utility* marjinal faydaların toplamıdır: 12 + 9 + 6 + 3 + 0 − 3 = 27. Altıncı bardağın MU'su negatif, TU'yu 30'dan 27'ye düşürür. 30 negatif MU'yu yok sayar, 33 onu artı sayar; −3 yalnız altıncı bardağın MU'sudur. Limonata bedava olsa bile 4 ya da 5 bardakta durmak gerekir."
        },
        {
          "t": "1.6-2",
          "q": "Kerem has 140 TL to spend on sandwiches, which cost 40 TL each, and juices, which cost 20 TL each. The table shows his total utility from each good. Which combination maximizes Kerem's total utility?",
          "o": [
            "1 sandwich and 5 juices",
            "3 sandwiches and 1 juice",
            "3 sandwiches and 3 juices",
            "2 sandwiches and 3 juices"
          ],
          "a": 3,
          "w": "Önce MU: sandviç 32, 24, 20, 12, 8; meyve suyu 20, 16, 12, 8, 4. 10 lira başına MU: sandviç 8, 6, 5, 3, 2; meyve suyu 10, 8, 6, 4, 2. 2 sandviç + 3 meyve suyunda ikisi de 6 ve harcama 80 + 60 = 140 TL: *consumer equilibrium*, TU = 56 + 48 = 104. 1 + 5 (TU 92) ve 3 + 1 (TU 96) bütçeyi tüketir ama daha az fayda verir; 3 + 3 ise 180 TL tutar, bütçenin dışındadır.",
          "fig": {
            "type": "table",
            "head": [
              "Units",
              "Total utility from sandwiches",
              "Total utility from juices"
            ],
            "rows": [
              [
                1,
                32,
                20
              ],
              [
                2,
                56,
                36
              ],
              [
                3,
                76,
                48
              ],
              [
                4,
                88,
                56
              ],
              [
                5,
                96,
                60
              ]
            ]
          }
        },
        {
          "t": "1.6-2",
          "q": "The graph shows a consumer's budget line shifting from BL1 to BL2. Which of the following could explain this change?",
          "o": [
            "The price of good X fell by half, while income and the price of good Y did not change.",
            "The consumer's income doubled.",
            "The price of good Y fell by half, while income and the price of good X did not change.",
            "The consumer's marginal utility from good X doubled."
          ],
          "a": 0,
          "w": "Y ekseni kesişimi aynı kaldı (gelir ÷ Py değişmedi), X kesişimi 4'ten 8'e çıktı: aynı gelirle iki kat X alınabiliyor, demek ki X'in fiyatı yarıya düştü. Gelir iki katına çıksaydı iki kesişim de dışa kayardı (paralel kayma). Py'nin düşmesi Y kesişimini değiştirirdi. MU ise *budget line*'ı etkilemez; doğru yalnız gelire ve fiyatlara bağlıdır.",
          "fig": {
            "type": "graph",
            "xlabel": "Good X",
            "ylabel": "Good Y",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  8
                ],
                "to": [
                  4,
                  0
                ],
                "label": "BL1",
                "dash": true
              },
              {
                "from": [
                  0,
                  8
                ],
                "to": [
                  8,
                  0
                ],
                "label": "BL2"
              }
            ],
            "xticks": [
              {
                "v": 4,
                "label": "4"
              },
              {
                "v": 8,
                "label": "8"
              }
            ],
            "yticks": [
              {
                "v": 8,
                "label": "8"
              }
            ]
          }
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
          "q": "Which of the following best illustrates that people's responses to incentives can have unintended consequences?",
          "o": [
            "After a city charges drivers a fee to enter the city center, more drivers park on residential streets just outside the fee zone.",
            "A student studies more for a test that counts for half of her course grade.",
            "A firm's total revenue rises when it sells more units at the same price.",
            "A family spends more on food after its income rises."
          ],
          "a": 0,
          "w": "*Incentives* davranışı değiştirir, ama bazen beklenmedik yönde: ücret merkezdeki trafiği azaltmak içindi, sürücüler ise bölgenin hemen dışına park etmeye başladı; bu istenmeyen bir sonuçtur. Notun yarısını belirleyen sınava daha çok çalışmak teşvike verilen, amaçlanan tepkidir. Diğer ikisi teşvik değil; biri basit bir gelir hesabı, öteki gelir artışının etkisidir."
        },
        {
          "t": "1.1",
          "q": "Consider the following items.\nI. A delivery truck owned by a bakery\nII. Shares of stock owned by a family\nIII. A newly built factory\nWhich of the following are examples of capital as a factor of production?",
          "o": [
            "I only",
            "II only",
            "III only",
            "I and III only"
          ],
          "a": 3,
          "w": "Ekonomide *capital* üretimde kullanılan insan yapımı araçlardır: teslimat kamyoneti (I) ve yeni fabrika (III). Hisse senedi (II) *financial capital*'dir, bir kâğıt varlıktır; kendisi hiçbir şey üretmez. AP'de \"capital\" denince makine, bina ve alet düşün."
        },
        {
          "t": "1.2",
          "q": "In a market economy, the question of for whom goods and services are produced is answered mainly by",
          "o": [
            "consumers' incomes, which depend on the payments they receive for the resources they sell in factor markets",
            "a central planning board that decides how goods will be distributed",
            "the costs firms pay to produce each good",
            "the order in which consumers arrive at stores"
          ],
          "a": 0,
          "w": "Piyasa ekonomisinde malları kimin alacağını gelir belirler; gelir de hanelerin *factor market*'te sattığı emek, toprak, sermaye ve girişimciliğin karşılığıdır (*circular flow*). Plan kurulu *command economy*'nin cevabıdır; üretim maliyeti daha çok *how* sorusuyla ilgilidir; mağazaya varış sırası piyasanın fiyat mekanizması değildir."
        },
        {
          "t": "1.3-1",
          "q": "The graph shows an economy's production possibilities curve. Which of the following correctly compares the opportunity cost of cameras when the economy moves from B to C and from C to D?",
          "o": [
            "16 sweaters per camera for both moves, so the opportunity cost is constant",
            "1 sweater per camera from B to C, and 1/3 of a sweater per camera from C to D",
            "48 sweaters per camera from B to C, and 64 sweaters per camera from C to D",
            "1 sweater per camera from B to C, and 3 sweaters per camera from C to D"
          ],
          "a": 3,
          "w": "B → C: kamera 48'den 64'e (+16), kazak 64'ten 48'e (−16): kamera başına 1 kazak. C → D: kamera 64'ten 80'e (+16), kazak 48'den 0'a (−48): kamera başına 3 kazak. Maliyetin artması dışa bükük eğrinin, yani *increasing opportunity cost*'un işaretidir. 1/3 oranı ters çevirir; 48 ve 64 maliyet değil, üretim düzeyleridir.",
          "fig": {
            "type": "graph",
            "xlabel": "Cameras",
            "ylabel": "Sweaters",
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
                "label": "A"
              },
              {
                "q": 4.8,
                "p": 6.4,
                "label": "B",
                "guides": true
              },
              {
                "q": 6.4,
                "p": 4.8,
                "label": "C",
                "guides": true
              },
              {
                "q": 8,
                "p": 0,
                "label": "D"
              }
            ],
            "xticks": [
              {
                "v": 4.8,
                "label": "48"
              },
              {
                "v": 6.4,
                "label": "64"
              },
              {
                "v": 8,
                "label": "80"
              }
            ],
            "yticks": [
              {
                "v": 4.8,
                "label": "48"
              },
              {
                "v": 6.4,
                "label": "64"
              },
              {
                "v": 8,
                "label": "80"
              }
            ]
          }
        },
        {
          "t": "1.3-1",
          "q": "The table shows points on a country's production possibilities curve. If the country moves from point B to point D, what is the average opportunity cost of each additional ton of steel?",
          "o": [
            "0.4 ton of rice",
            "2 tons of rice",
            "2.5 tons of rice",
            "50 tons of rice"
          ],
          "a": 2,
          "w": "B'den D'ye: çelik 10'dan 30'a (+20 ton), pirinç 90'dan 40'a (−50 ton). Ortalama *opportunity cost* = 50 ÷ 20 = 2,5 ton pirinç. 2 yalnız B → C adımının maliyetidir (C → D'de 3), 0,4 oranı ters çevirir, 50 toplam vazgeçilen miktardır.",
          "fig": {
            "type": "table",
            "head": [
              "Point",
              "Steel (tons)",
              "Rice (tons)"
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
                90
              ],
              [
                "C",
                20,
                70
              ],
              [
                "D",
                30,
                40
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
          "t": "1.3-1",
          "q": "A country's production possibilities curve is a straight line from 50 units of X (with no Y) to 25 units of Y (with no X). Consider the following statements.\nI. The opportunity cost of 1 unit of X is 0.5 unit of Y.\nII. Producing 30 units of X and 10 units of Y is attainable and efficient.\nIII. Producing 20 units of X and 15 units of Y is unattainable.\nWhich of the statements are correct?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II, and III"
          ],
          "a": 1,
          "w": "Doğrusal PPC: 50 X ya da 25 Y, yani 1 X = 25 ÷ 50 = 0,5 Y (I doğru). 30 X üretilince en fazla 25 − 15 = 10 Y kalır: 30 X + 10 Y tam eğri üzerinde, ulaşılabilir ve *efficient* (II doğru). 20 X üretilince 25 − 10 = 15 Y kalır: 20 X + 15 Y de eğri üzerindedir, ulaşılabilir (III yanlış)."
        },
        {
          "t": "1.3-2",
          "q": "The graph shows a country's production possibilities curve shifting from PPC1 to PPC2 after a technological advance in the production of good X only. Which of the following statements is correct?",
          "o": [
            "Only the maximum quantity of X changes, so the country cannot have more Y unless it produces less X.",
            "The curve shifts outward in a parallel way, because the technology frees resources for both goods.",
            "The opportunity cost of X rises, because the curve becomes steeper.",
            "The opportunity cost of X in terms of Y falls, and the country can now produce more Y than before at any positive quantity of X."
          ],
          "a": 3,
          "w": "Teknoloji yalnız X'i etkilese de X için artık daha az kaynak gerekir; serbest kalan kaynaklar Y'ye gidebilir: X > 0 olan her düzeyde artık daha çok Y üretilebilir. Eğri X ekseni boyunca dışa döner ve yatıklaşır: X'in Y cinsinden *opportunity cost*'u azalır, dikleşmez. Y ekseni kesişimi değişmediği için kayma paralel değildir.",
          "fig": {
            "type": "graph",
            "xlabel": "Good X",
            "ylabel": "Good Y",
            "xmax": 10,
            "ymax": 10,
            "ppc": [
              {
                "qmax": 5,
                "pmax": 8,
                "k": 2,
                "label": "PPC1",
                "dash": true
              },
              {
                "qmax": 8,
                "pmax": 8,
                "k": 2,
                "label": "PPC2"
              }
            ]
          }
        },
        {
          "t": "1.3-2",
          "q": "An economy achieves allocative efficiency at the point on its production possibilities curve where",
          "o": [
            "the marginal benefit of each good equals its marginal cost",
            "equal quantities of the two goods are produced",
            "the opportunity cost of each good is at its lowest",
            "all resources are employed, which is true at every point on the curve"
          ],
          "a": 0,
          "w": "*Allocative efficiency* toplumun en çok değer verdiği bileşimdir: her malın son biriminin *marginal benefit*'i *marginal cost*'una eşit olduğu nokta. Kaynakların tam kullanılması eğri üzerindeki her noktada geçerlidir, ama bu yalnız *productive efficiency*'dir. Eşit miktar üretmek ya da maliyetin en düşük olduğu yer bu koşulu sağlamaz."
        },
        {
          "t": "1.4-1",
          "q": "In Country M, a worker needs 5 hours to make a radio and 2 hours to grow a bushel of wheat. In Country N, a worker needs 8 hours to make a radio and 2 hours to grow a bushel of wheat. Which of the following statements is correct?",
          "o": [
            "Country N has a comparative advantage in wheat, with an opportunity cost of 1/4 of a radio per bushel.",
            "Country M has an absolute advantage in both goods.",
            "Country N has a comparative advantage in radios, because its opportunity cost of a radio is 1/4 bushel of wheat.",
            "Country M has a comparative advantage in wheat, because it needs fewer hours to make a radio."
          ],
          "a": 0,
          "w": "*Input* bilgisi: radyonun maliyeti M'de 5 ÷ 2 = 2,5 kile, N'de 8 ÷ 2 = 4 kile buğday → radyoda M. Bir kilenin maliyeti M'de 2 ÷ 5 = 0,4, N'de 2 ÷ 8 = 0,25 radyo → buğdayda N. Buğdayda ikisi de 2 saat harcadığı için M'nin iki malda birden *absolute advantage*'ı yoktur. \"N'nin radyo maliyeti 1/4 kile\" oranı ters çevirir; gerçekte 4 kiledir."
        },
        {
          "t": "1.4-1",
          "q": "Country A has an absolute advantage in producing both of two goods, and the two countries' opportunity costs are different. Which of the following must be true?",
          "o": [
            "Country A has a comparative advantage in both goods.",
            "Country B cannot gain from trading with Country A.",
            "Country A should produce both goods and not trade.",
            "Country B has a comparative advantage in one of the goods."
          ],
          "a": 3,
          "w": "Bir ülkenin bir maldaki *opportunity cost*'u, diğer maldakinin tersidir: A bir malda daha düşük maliyetliyse, öteki malda mutlaka daha yüksek maliyetlidir. Maliyetler farklıysa B'nin bir malda *comparative advantage*'ı vardır. Bu yüzden iki malda birden *comparative advantage* imkânsızdır ve *absolute advantage* nerede olursa olsun iki ülke de ticaretten kazanabilir."
        },
        {
          "t": "1.4-2",
          "q": "The graph shows the production possibilities curves of Ozan and Ela for one day. Both have constant opportunity costs. If they specialize according to comparative advantage and trade, which price of 1 pizza would allow both of them to gain?",
          "o": [
            "0.5 salad",
            "1.5 salads",
            "2.5 salads",
            "3 salads"
          ],
          "a": 1,
          "w": "Pizzanın maliyeti: Ozan 8 ÷ 4 = 2 salata, Ela 6 ÷ 6 = 1 salata. Ela pizzada, Ozan salatada uzmanlaşır; pizzanın fiyatı 1 ile 2 salata arasında olmalı: 1,5 salata. Ela 1'den fazlasını alır, Ozan 2'den azını öder. 0,5 salata Ela'yı, 2,5 ve 3 salata Ozan'ı zarara sokar.",
          "fig": {
            "type": "graph",
            "xlabel": "Pizzas",
            "ylabel": "Salads",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  8
                ],
                "to": [
                  4,
                  0
                ],
                "label": "Ozan"
              },
              {
                "from": [
                  0,
                  6
                ],
                "to": [
                  6,
                  0
                ],
                "label": "Ela",
                "dash": true
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
          "t": "1.4-2",
          "q": "Norvia can produce either 50 tons of corn or 25 tools, and Sorvia can produce either 30 tons of corn or 10 tools, both with constant opportunity costs. Without trade, Sorvia produces and consumes 15 tons of corn and 5 tools. Sorvia then specializes according to comparative advantage and sells 15 tons of corn to Norvia at a price of 2.5 tons of corn per tool. Compared with no trade, Sorvia consumes",
          "o": [
            "6 more tools and the same amount of corn",
            "1 more tool and the same amount of corn",
            "15 fewer tons of corn and 1 more tool",
            "1 fewer tool and the same amount of corn"
          ],
          "a": 1,
          "w": "Aletin maliyeti Sorvia'da 30 ÷ 10 = 3, Norvia'da 50 ÷ 25 = 2 ton mısır → Sorvia mısırda uzmanlaşır ve 30 ton üretir. 15 tonu alet başına 2,5 tondan satar: 15 ÷ 2,5 = 6 alet. Tüketim 15 ton mısır + 6 alet; öncesi 15 + 5. Kazanç 1 alet, mısır aynı. 6 alet yeni tüketim düzeyidir, kazanç değil; 15 ton satılan mısırdır, ama üretim de 15'ten 30'a çıktı."
        },
        {
          "t": "1.5",
          "q": "A firm earned 300,000 TL in total revenue. Its accounting profit was 80,000 TL, and it had an economic loss of 10,000 TL. What were the firm's explicit and implicit costs?",
          "o": [
            "Explicit costs: 220,000 TL; implicit costs: 10,000 TL",
            "Explicit costs: 80,000 TL; implicit costs: 90,000 TL",
            "Explicit costs: 220,000 TL; implicit costs: 90,000 TL",
            "Explicit costs: 290,000 TL; implicit costs: 10,000 TL"
          ],
          "a": 2,
          "w": "*Accounting profit* = TR − explicit → 300.000 − explicit = 80.000 → explicit = 220.000 TL. *Economic profit* = *accounting profit* − implicit → 80.000 − implicit = −10.000 → implicit = 90.000 TL. 10.000 TL *economic loss*'un kendisidir, maliyet değil; 80.000 TL ise kârdır, maliyet değil."
        },
        {
          "t": "1.5",
          "q": "A theater has already paid 45,000 TL for tonight's show, an amount that cannot be recovered. This works out to 150 TL for each of its 300 seats. The theater has sold 200 seats, and each additional audience member adds 20 TL in cleaning costs. Should the theater sell its remaining 100 seats for 50 TL each just before the show?",
          "o": [
            "No, because 50 TL is less than the average cost of 150 TL per seat",
            "No, because the theater will have an economic loss on the show either way",
            "Yes, because the 50 TL price is greater than the 20 TL additional cost of each extra audience member",
            "Yes, because selling the tickets reduces the theater's 45,000 TL sunk cost"
          ],
          "a": 2,
          "w": "45.000 TL ödenmiş ve geri gelmez: *sunk cost*, bu akşamki karara girmez. Bir bilet daha satmanın ek maliyeti 20 TL temizlik, ek geliri 50 TL: her bilet 30 TL net katkı sağlar. Koltuk başına 150 TL ortalama maliyet *sunk* olduğu için ölçüt değildir. Satış *sunk cost*'u azaltmaz; yalnız toplam zararı küçültür."
        },
        {
          "t": "1.5",
          "q": "Mert is deciding whether to play in a three-day chess tournament in Ankara this weekend. Consider the following.\nI. The 1,200 TL entry fee he paid last month, which cannot be refunded\nII. The 800 TL bus ticket to Ankara\nIII. The wages from the weekend job he would miss\nWhich of the following should Mert include as costs when he makes his decision?",
          "o": [
            "I and II only",
            "II and III only",
            "III only",
            "I, II, and III"
          ],
          "a": 1,
          "w": "Rasyonel karar yalnız gidip gitmemeye göre değişen maliyetleri sayar: otobüs bileti (II, *explicit*) ve kaçan hafta sonu kazancı (III, *implicit*). Geçen ay ödenen ve iade edilmeyen katılım ücreti (I) *sunk cost*'tur: gitse de gitmese de ödenmiş durumdadır."
        },
        {
          "t": "1.6-1",
          "q": "The graph shows the marginal benefit (MB) and marginal cost (MC) of each hour of online advertising for a tutoring center. The center currently advertises for 6 hours per day. Which of the following should the center do?",
          "o": [
            "Increase its advertising, because the marginal benefit of the 6th hour is still positive",
            "Keep advertising for 6 hours, because its total benefit is still greater than its total cost",
            "Increase its advertising to 8 hours, where marginal benefit falls to zero",
            "Reduce its advertising, because the marginal cost of the 6th hour is greater than its marginal benefit"
          ],
          "a": 3,
          "w": "Kural: MB = MC olan miktar, yani 4 saat. 6. saatte MB 2'ye düşmüş, MC 5'e çıkmış: o saat *net benefit*'i azaltır, reklam azaltılmalı. MB'nin pozitif olması yetmez; MC ile karşılaştırılır. 6 saatte *total benefit* hâlâ *total cost*'tan büyük olabilir, ama amaç farkı en büyük yapmaktır ve o da 4 saattedir.",
          "fig": {
            "type": "graph",
            "xlabel": "Hours of advertising per day",
            "ylabel": "Benefit and cost (TL)",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  8
                ],
                "to": [
                  8,
                  0
                ],
                "label": "MB"
              },
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  8,
                  6
                ],
                "label": "MC"
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 4,
                "label": "E",
                "guides": true
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
              },
              {
                "v": 8,
                "label": "8"
              }
            ]
          }
        },
        {
          "t": "1.6-1",
          "q": "The table shows İpek's total utility from cups of coffee. Each cup costs 7 TL, and İpek values each util at 1 TL. How many cups should she buy to maximize her net benefit?",
          "o": [
            "2",
            "3",
            "4",
            "5"
          ],
          "a": 1,
          "w": "MU = 15, 12, 9, 6, 3 util; bu, TL cinsinden *marginal benefit*'tir. Her fincanın *marginal cost*'u 7 TL. 3. fincan 9 > 7, 4. fincan 6 < 7 → 3 fincan; *net benefit* = 8 + 5 + 2 = 15 TL. Toplam fayda arttıkça içmeye devam etmek yanlıştır: 4. fincan TU'yu artırır ama değerinden fazlasına mal olur.",
          "fig": {
            "type": "table",
            "head": [
              "Cups of coffee",
              "Total utility (utils)"
            ],
            "rows": [
              [
                1,
                15
              ],
              [
                2,
                27
              ],
              [
                3,
                36
              ],
              [
                4,
                42
              ],
              [
                5,
                45
              ]
            ]
          }
        },
        {
          "t": "1.6-2",
          "q": "Selin spends all of her 36 TL on goods X and Y and is maximizing her utility. She buys 4 units of X at 6 TL each and 3 units of Y. The marginal utility of her 4th unit of X is 18 utils, and the marginal utility of her 3rd unit of Y is 12 utils. What must the price of Y be?",
          "o": [
            "2 TL",
            "3 TL",
            "4 TL",
            "6 TL"
          ],
          "a": 2,
          "w": "Bütçeden: 4 × 6 = 24 TL X'e gider, kalan 12 TL 3 birim Y'ye → Py = 4 TL. Kuraldan kontrol: MUx/Px = 18 ÷ 6 = 3, MUy/Py = 12 ÷ 4 = 3, eşit. 3 TL oranın kendisidir, fiyat değil; 6 TL ise Px'tir."
        },
        {
          "t": "1.6-2",
          "q": "Kerem has 300 TL to spend on smoothies, which cost 30 TL each, and magazines, which cost 60 TL each. The table shows his total utility from each good. What is the maximum total utility Kerem can obtain with his budget?",
          "o": [
            "180 utils",
            "183 utils",
            "192 utils",
            "201 utils"
          ],
          "a": 2,
          "w": "Önce MU: smoothie 30, 24, 18, 12, 9, 6; dergi 48, 36, 24, 18, 12. 10 lira başına MU: smoothie 10, 8, 6, 4, 3, 2; dergi 8, 6, 4, 3, 2. En yüksek oranlardan başla: 4 smoothie + 3 dergide iki oran da 4 ve harcama 120 + 180 = 300 TL. TU = 84 + 108 = 192. 2 + 4 (180) ve 6 + 2 (183) de bütçeyi tüketir ama daha az fayda verir; 201 bütçeyi aşan 5 smoothie + 3 dergidir (330 TL).",
          "fig": {
            "type": "table",
            "head": [
              "Units",
              "Total utility from smoothies",
              "Total utility from magazines"
            ],
            "rows": [
              [
                1,
                30,
                48
              ],
              [
                2,
                54,
                84
              ],
              [
                3,
                72,
                108
              ],
              [
                4,
                84,
                126
              ],
              [
                5,
                93,
                138
              ],
              [
                6,
                99,
                "—"
              ]
            ]
          }
        },
        {
          "t": "1.6-2",
          "q": "A consumer spends all of her income on goods X and Y, and the marginal utility per lira is 5 for each good. The price of Y then doubles, while her income and the price of X stay the same. Which of the following is true immediately after the price change, and how should she respond?",
          "o": [
            "MUy/Py falls to 2.5, so she should buy less Y, which raises the marginal utility of her last unit of Y.",
            "MUy/Py rises to 10, so she should buy more Y.",
            "MUy/Py is unchanged, because marginal utility depends only on the quantity consumed.",
            "MUx/Px falls to 2.5, so she should buy less X."
          ],
          "a": 0,
          "w": "Py iki katına çıkınca MUy/Py 5'ten 2,5'e düşer: son lira artık X'te daha çok fayda getirir, eski sepet de artık alınamaz. Daha az Y alınır; Y azaldıkça son Y'nin MU'su yükselir ve oranlar yeniden eşitlenir. MU fiyattan değil miktardan etkilenir, ama MU/P oranı fiyatla değişir. Px değişmediği için MUx/Px ilk anda aynı kalır."
        }
      ]
    }
  ]
};
