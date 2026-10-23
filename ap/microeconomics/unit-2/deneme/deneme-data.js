/* Bu dosya üretilir: ap-videolar/tools/build-deneme-data.mjs (elle düzenleme; kaynak: tools/out/deneme-micro-u2.json) */
window.DENEME = {
  "store": "micro-u2:v1:",
  "course": "AP Microeconomics",
  "unit": "Unit 2 — Supply and Demand",
  "topics": {
    "2.1-1": "Talep Yasası",
    "2.1-2": "Talebi Kaydıran Etkenler",
    "2.2": "Arz Yasası ve Arzı Kaydıranlar",
    "2.3-1": "Talebin Fiyat Esnekliği",
    "2.3-2": "Toplam Gelir Testi ve Esneklik",
    "2.4": "Arzın Fiyat Esnekliği",
    "2.5": "Çapraz ve Gelir Esnekliği",
    "2.6-1": "Denge, Fazla ve Kıtlık",
    "2.6-2": "Tüketici ve Üretici Artığı",
    "2.7": "Dengenin Değişmesi ve Çift Kayma",
    "2.8-1": "Fiyat Tavanı ve Fiyat Tabanı",
    "2.8-2": "Vergiler, Sübvansiyonlar ve Vergi Yükü",
    "2.9": "Uluslararası Ticaret ve Gümrük Vergisi"
  },
  "tests": [
    {
      "no": 1,
      "level": "Isınma",
      "minutes": 20,
      "questions": [
        {
          "t": "2.1-1",
          "q": "Which of the following best states the law of demand?",
          "o": [
            "Holding other factors constant, as the price of a good rises, the quantity demanded of that good falls.",
            "As the demand for a good rises, the price of that good rises.",
            "Holding other factors constant, as the price of a good rises, the quantity supplied of that good rises.",
            "As consumers' incomes rise, the demand for every good rises."
          ],
          "a": 0,
          "w": "*Law of demand*: diğer her şey sabitken (*ceteris paribus*) fiyat ile *quantity demanded* ters yönde hareket eder. Fiyat ile *quantity supplied* arasındaki pozitif ilişki *law of supply*'dır. Talebin artınca fiyatı yükseltmesi denge konusudur, yasa değildir. Gelir artışı her malın talebini artırmaz; *inferior good*'larda talep düşer."
        },
        {
          "t": "2.1-2",
          "q": "Tea and coffee are substitutes. If the price of tea increases, what will happen in the market for coffee?",
          "o": [
            "The supply curve for coffee shifts to the left.",
            "The demand curve for coffee shifts to the left.",
            "There is a movement down along the demand curve for coffee.",
            "The demand curve for coffee shifts to the right."
          ],
          "a": 3,
          "w": "Çay pahalanınca bir kısım tüketici ikamesi olan kahveye geçer: her fiyatta daha çok kahve istenir, kahvenin talep eğrisi sağa kayar. *Substitutes* için: birinin fiyatı ↑ → diğerinin talebi ↑. Eğri boyunca hareket yalnız kahvenin kendi fiyatı değişince olur. Çayın fiyatı kahve üreticilerinin maliyetini değiştirmez, arz kaymaz."
        },
        {
          "t": "2.1-2",
          "q": "The graph shows two demand curves for sandwiches, a normal good. Which of the following could cause the demand curve to shift from D1 to D2?",
          "o": [
            "An increase in the price of a substitute for sandwiches",
            "A decrease in the price of sandwiches",
            "A decrease in consumers' incomes",
            "Consumers expect the price of sandwiches to rise next month"
          ],
          "a": 2,
          "w": "D2, D1'in solunda: talep azalmış. *Normal good*'da gelir düşünce talep düşer, eğri sola kayar. Sandviçin kendi fiyatının düşmesi eğriyi kaydırmaz, eğri üzerinde aşağı hareket (*change in quantity demanded*) yaratır. İkamenin pahalanması ve gelecekte fiyat artışı beklentisi bugünkü talebi artırır (sağa kayma).",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity of sandwiches",
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
                "label": "D1"
              },
              {
                "from": [
                  0.5,
                  7
                ],
                "to": [
                  7,
                  0.5
                ],
                "label": "D2",
                "dash": true
              }
            ]
          }
        },
        {
          "t": "2.2",
          "q": "Which of the following would decrease the supply of bread?",
          "o": [
            "A decrease in the wages paid to bakers",
            "A decrease in the price of bread",
            "An improvement in baking technology",
            "An increase in the price of flour"
          ],
          "a": 3,
          "w": "Un, ekmeğin girdisidir. Girdi fiyatı ↑ → üretim maliyeti ↑ → her fiyatta daha az ekmek arz edilir, arz sola kayar. Ekmeğin kendi fiyatının düşmesi yalnız *quantity supplied*'ı azaltır (eğri üzerinde hareket). Daha iyi teknoloji ve düşen ücretler maliyeti düşürür, arzı artırır."
        },
        {
          "t": "2.2",
          "q": "A popular cooking show causes the demand for strawberries to increase, and the price of strawberries rises. Strawberry farmers respond to the higher price by bringing more strawberries to market. The farmers' response is best described as",
          "o": [
            "an increase in quantity supplied, shown as a movement along the supply curve",
            "an increase in supply, shown as a rightward shift of the supply curve",
            "a decrease in supply, shown as a leftward shift of the supply curve",
            "an increase in demand, shown as a rightward shift of the supply curve"
          ],
          "a": 0,
          "w": "Çiftçiler yükselen fiyata tepki veriyor; fiyat, arz eğrisinin kendi eksenindeki değişkendir. Bu yüzden arz eğrisi kaymaz, eğri boyunca yukarı hareket olur: *change in quantity supplied*. Kayan eğri talep eğrisidir. Fiyat değişimi kendi eğrisini asla kaydırmaz."
        },
        {
          "t": "2.3-1",
          "q": "The table shows how many bubble teas a café sells per day at two prices. Using the midpoint method, what is the price elasticity of demand between these two prices, and how is demand described?",
          "o": [
            "0.83; demand is inelastic",
            "1.2; demand is elastic",
            "1.2; demand is inelastic",
            "5; demand is elastic"
          ],
          "a": 1,
          "w": "*Midpoint formula*: %ΔQ = 20 ÷ ((60 + 40) ÷ 2) = 20 ÷ 50 = %40; %ΔP = 4 ÷ ((10 + 14) ÷ 2) = 4 ÷ 12 ≈ %33,3. Ed = 40 ÷ 33,3 = 1,2 > 1 → *elastic*. 0,83 başlangıç değerlerine bölünerek ve oran ters çevrilerek bulunur. 5, ham değişimlerin oranıdır (20 ÷ 4); esneklik yüzdelerle hesaplanır.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Quantity demanded per day"
            ],
            "rows": [
              [
                10,
                60
              ],
              [
                14,
                40
              ]
            ]
          }
        },
        {
          "t": "2.3-1",
          "q": "The demand for a life-saving medicine is perfectly inelastic. Which of the following describes the demand curve for this medicine?",
          "o": [
            "It is downward sloping with a slope of −1.",
            "It is horizontal.",
            "It is vertical.",
            "It is upward sloping."
          ],
          "a": 2,
          "w": "*Perfectly inelastic* (Ed = 0): fiyat ne olursa olsun talep edilen miktar değişmez, eğri dikeydir. Yatay eğri *perfectly elastic*'tir (Ed = ∞). Eğimi −1 olan doğrusal eğrinin esnekliği nokta nokta değişir. Yukarı eğimli eğri talep değil arz şeklidir."
        },
        {
          "t": "2.3-2",
          "q": "The demand for tickets to a city museum is price inelastic. If the museum raises its ticket price, its total revenue will",
          "o": [
            "decrease, because fewer tickets are sold",
            "decrease, because the percentage decrease in quantity demanded is larger than the percentage increase in price",
            "stay the same, because inelastic demand means quantity demanded does not change",
            "increase, because the percentage decrease in quantity demanded is smaller than the percentage increase in price"
          ],
          "a": 3,
          "w": "*Total revenue test*: talep *inelastic* ise fiyat ve TR aynı yönde hareket eder. Fiyat %10 artarken bilet sayısı %10'dan az düşer, TR = P × Q artar. *Inelastic* \"miktar hiç değişmez\" demek değildir (o *perfectly inelastic*). Daha az bilet satılması tek başına TR'nin düştüğünü göstermez."
        },
        {
          "t": "2.3-2",
          "q": "Which of the following goods is likely to have the most price-elastic demand?",
          "o": [
            "One particular brand of bottled water",
            "Table salt",
            "Insulin for people with diabetes",
            "Gasoline in the week after a price increase"
          ],
          "a": 0,
          "w": "Esnekliği en çok belirleyen şey *availability of substitutes*: tek bir marka su için raflarda onlarca ikame var, küçük zamda tüketici markayı değiştirir. Tuz bütçede çok küçük pay tutar, insülin hayati ihtiyaçtır, benzinde de bir haftalık sürede alışkanlık değişmez (kısa vade). Bunların hepsi *inelastic*."
        },
        {
          "t": "2.4",
          "q": "The table shows the quantity of handmade candles a workshop supplies per week at two prices. Using the midpoint method, what is the price elasticity of supply?",
          "o": [
            "0.60",
            "1.00",
            "1.67",
            "2.00"
          ],
          "a": 2,
          "w": "%ΔQs = 100 ÷ ((100 + 200) ÷ 2) = 100 ÷ 150 ≈ %66,7; %ΔP = 10 ÷ ((20 + 30) ÷ 2) = 10 ÷ 25 = %40. Es = 66,7 ÷ 40 ≈ 1,67 > 1 → *elastic supply*. 2,00 başlangıç değerleriyle bulunur (%100 ÷ %50), 0,60 oranı ters çevirmektir. Arz esnekliği arz yasası gereği pozitiftir.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Quantity supplied per week"
            ],
            "rows": [
              [
                20,
                100
              ],
              [
                30,
                200
              ]
            ]
          }
        },
        {
          "t": "2.5",
          "q": "The cross-price elasticity of demand between printers and ink cartridges is −1.5. Based on this value, printers and ink cartridges are",
          "o": [
            "substitutes",
            "complements",
            "unrelated goods",
            "inferior goods"
          ],
          "a": 1,
          "w": "*Cross-price elasticity* işaretini korur. Negatif değer: yazıcının fiyatı artınca kartuş talebi düşüyor, yani birlikte kullanılan mallar, *complements*. Pozitif olsaydı *substitutes*, sıfıra yakın olsaydı *unrelated* olurdu. *Inferior good* ise gelir esnekliğiyle (*income elasticity*) belirlenir, fiyatla değil."
        },
        {
          "t": "2.5",
          "q": "When the average income in a town rises by 10 percent, the quantity of bus rides demanded falls by 5 percent, all else equal. What is the income elasticity of demand for bus rides, and what type of good are bus rides?",
          "o": [
            "−0.5; an inferior good",
            "0.5; a normal good that is a necessity",
            "2.0; a luxury good",
            "−2.0; an inferior good"
          ],
          "a": 0,
          "w": "*Income elasticity* = %ΔQ ÷ %ΔGelir = −5 ÷ 10 = −0,5. İşaret önemlidir: negatif → gelir artınca daha az alınan *inferior good* (insanlar otobüs yerine taksi ya da araba seçiyor). −2 oranı ters çevirmektir. Pozitif değerler *normal good* olurdu."
        },
        {
          "t": "2.6-1",
          "q": "The table shows the demand and supply schedules for notebooks in a school market. At a price of 20 TL, the market has",
          "o": [
            "a surplus of 40 notebooks",
            "a shortage of 40 notebooks",
            "a shortage of 80 notebooks",
            "neither a shortage nor a surplus"
          ],
          "a": 1,
          "w": "20 TL'de Qd = 80, Qs = 40: istenen miktar arzı aşar, *shortage* = 80 − 40 = 40. Denge 30 TL ve 60 defterdir (Qd = Qs). 80 talep edilen miktarın kendisidir, kıtlık değil. Fiyat dengenin altında olduğu için *surplus* olamaz; kıtlık fiyatı yukarı iter.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Quantity demanded",
              "Quantity supplied"
            ],
            "rows": [
              [
                10,
                100,
                20
              ],
              [
                20,
                80,
                40
              ],
              [
                30,
                60,
                60
              ],
              [
                40,
                40,
                80
              ],
              [
                50,
                20,
                100
              ]
            ]
          }
        },
        {
          "t": "2.6-2",
          "q": "Consumer surplus is the difference between",
          "o": [
            "the quantity demanded and the quantity supplied at a given price",
            "the price buyers pay for a good and the cost of producing it",
            "the maximum price buyers are willing to pay for a good and the price they actually pay",
            "the price sellers receive and the minimum price they are willing to accept"
          ],
          "a": 2,
          "w": "*Consumer surplus* = *willingness to pay* − ödenen fiyat; grafikte talep eğrisinin altında, fiyatın üstünde kalan alandır. Satıcının aldığı fiyat ile kabul edeceği en düşük fiyat arasındaki fark *producer surplus*'tır. Qd − Qs farkı kıtlık ya da fazla gösterir, artık değil."
        },
        {
          "t": "2.6-2",
          "q": "The graph shows the market for phone stands, with equilibrium at point E. What is the consumer surplus at the market equilibrium?",
          "o": [
            "4,000 TL",
            "8,000 TL",
            "16,000 TL",
            "24,000 TL"
          ],
          "a": 1,
          "w": "*Consumer surplus* talebin altında, fiyatın üstündeki üçgendir: taban 400, yükseklik 100 − 60 = 40 TL. CS = ½ × 400 × 40 = 8.000 TL. 16.000 TL toplam artıktır (CS + PS), 24.000 TL ise toplam harcamadır (60 × 400) ve artık değildir.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity",
            "ylabel": "Price (TL)",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  10
                ],
                "to": [
                  10,
                  0
                ],
                "label": "D"
              },
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  8,
                  10
                ],
                "label": "S"
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 6,
                "label": "E",
                "guides": true
              }
            ],
            "yticks": [
              {
                "v": 2,
                "label": "20"
              },
              {
                "v": 6,
                "label": "60"
              },
              {
                "v": 10,
                "label": "100"
              }
            ],
            "xticks": [
              {
                "v": 4,
                "label": "400"
              }
            ]
          }
        },
        {
          "t": "2.7",
          "q": "Heavy rain is forecast for the coming weeks, and the demand for umbrellas increases while the supply of umbrellas does not change. What happens to the equilibrium price and quantity of umbrellas?",
          "o": [
            "Price decreases and quantity decreases.",
            "Price increases and quantity decreases.",
            "Price decreases and quantity increases.",
            "Price increases and quantity increases."
          ],
          "a": 3,
          "w": "Talep sağa kayar, arz sabit: yeni kesişim eski dengenin sağında ve yukarısında. Talep artışı → P ↑, Q ↑. Fiyat ↑ ve miktar ↓ arz azalmasının sonucudur; fiyat ↓ ve miktar ↑ arz artışının sonucudur."
        },
        {
          "t": "2.7",
          "q": "An early frost destroys a large part of this year's orange harvest. Assuming demand for oranges does not change, what happens to the equilibrium price and quantity of oranges?",
          "o": [
            "Price increases and quantity increases.",
            "Price increases and quantity decreases.",
            "Price decreases and quantity decreases.",
            "Price decreases and quantity increases."
          ],
          "a": 1,
          "w": "Don, arz edilebilecek portakal miktarını azaltır: arz sola kayar. Talep sabitken arz azalması → P ↑, Q ↓. İkisinin birlikte artması talep artışında olur; ikisinin birlikte düşmesi talep azalmasında."
        },
        {
          "t": "2.8-1",
          "q": "The graph shows the market for loaves of bread. The government sets the price ceiling shown. Which of the following will result?",
          "o": [
            "The market will stay at the equilibrium price and quantity.",
            "Quantity supplied will exceed quantity demanded, creating a surplus.",
            "Quantity demanded will exceed quantity supplied, creating a shortage.",
            "The supply curve will shift to the right until the shortage disappears."
          ],
          "a": 2,
          "w": "Tavan (*price ceiling*) dengenin altında, yani *binding*: bu fiyatta tüketiciler daha çok, üreticiler daha az ister. Qd > Qs → *shortage*; kuyruklar ve karaborsa çıkabilir. *Surplus* bağlayıcı bir tabanın sonucudur. Tavan bir fiyat kuralıdır, arz eğrisini kaydırmaz.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity of bread",
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
                "label": "D"
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
            "hlines": [
              {
                "p": 3,
                "label": "Price ceiling"
              }
            ]
          }
        },
        {
          "t": "2.8-2",
          "q": "The government places a 5 TL per-unit tax on the sellers of energy bars. The demand curve slopes downward and the supply curve slopes upward. Which of the following is most likely to occur?",
          "o": [
            "The price sellers keep rises, and the quantity sold increases.",
            "The price buyers pay rises by exactly 5 TL, and the quantity sold does not change.",
            "The demand curve shifts to the left by 5 TL, and the price buyers pay falls.",
            "The price buyers pay rises by less than 5 TL, and the quantity of energy bars sold falls."
          ],
          "a": 3,
          "w": "Vergi arzı vergi kadar yukarı kaydırır; yeni dengede alıcı fiyatı yükselir, satıcının elinde kalan fiyat düşer. Yükü iki taraf paylaştığı için alıcı fiyatı 5 TL'den az artar (*tax incidence*). Miktar azalır. Tam 5 TL artış ancak talep tam inelastic olsaydı mümkündü. Satıcılara konan vergi talep eğrisini kaydırmaz."
        },
        {
          "t": "2.9",
          "q": "A country that has not traded fish opens its market to world trade. The world price of fish is below the country's domestic equilibrium price. Which of the following will occur in the domestic fish market?",
          "o": [
            "Consumer surplus will increase and producer surplus will decrease.",
            "Consumer surplus will decrease and producer surplus will increase.",
            "Both consumer surplus and producer surplus will decrease.",
            "The country will export fish."
          ],
          "a": 0,
          "w": "*World price* yurt içi fiyatın altında: fiyat düşer, tüketiciler daha çok alır, yerli üreticiler daha az üretir, aradaki fark *imports* ile karşılanır. Tüketiciler kazanır (CS ↑), yerli üreticiler kaybeder (PS ↓); kazanç kayıptan büyük olduğu için *total surplus* artar. İhracat ancak dünya fiyatı yurt içi fiyatın üstündeyse olur."
        }
      ]
    },
    {
      "no": 2,
      "level": "Temel",
      "minutes": 25,
      "questions": [
        {
          "t": "2.1-1",
          "q": "When the price of pizza falls, Deniz buys more pizza and fewer hamburgers because pizza has become cheaper relative to hamburgers. This part of Deniz's response is called the",
          "o": [
            "change in demand",
            "income effect",
            "law of supply",
            "substitution effect"
          ],
          "a": 3,
          "w": "Pizza görece ucuzladı, Deniz hamburgerden pizzaya geçti: *substitution effect*. *Income effect* ise fiyat düşünce aynı paranın daha çok şey alabilmesidir (satın alma gücü artar). İkisi birlikte talep eğrisinin aşağı eğimli olmasını açıklar. Bu eğri boyunca bir harekettir, *change in demand* değildir."
        },
        {
          "t": "2.1-1",
          "q": "The table shows the individual demand schedules of the only three buyers of iced coffee at a school. What is the market quantity demanded at a price of 30 TL?",
          "o": [
            "3 cups",
            "6 cups",
            "11 cups",
            "12 cups"
          ],
          "a": 1,
          "w": "Piyasa talebi, her fiyatta bireysel talep miktarlarının toplamıdır (yatay toplama). 30 TL'de: 3 + 1 + 2 = 6 bardak. 11, 20 TL'deki toplamdır (4 + 3 + 4). 3 yalnız Ayşe'nin miktarıdır.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Ayşe",
              "Mert",
              "Can"
            ],
            "rows": [
              [
                20,
                4,
                3,
                4
              ],
              [
                30,
                3,
                1,
                2
              ],
              [
                40,
                1,
                0,
                1
              ]
            ]
          }
        },
        {
          "t": "2.1-2",
          "q": "Consumers expect the price of a new phone model to fall sharply next month. How will this expectation affect the demand for the phone this month?",
          "o": [
            "Quantity demanded will increase along the existing demand curve.",
            "Demand will increase, shifting the demand curve to the right.",
            "Demand will decrease, shifting the demand curve to the left.",
            "Demand will not change, because the current price has not changed."
          ],
          "a": 2,
          "w": "*Expectations* bir talep belirleyicisidir. Gelecek ay ucuzlayacağını bilen alıcı bugün almaz, bekler: bugünkü talep azalır, eğri sola kayar. Bugünkü fiyat değişmediği için eğri boyunca hareket yoktur; değişen, fiyat dışındaki bir etken."
        },
        {
          "t": "2.1-2",
          "q": "Hot dogs and hot dog buns are complements. If the price of hot dog buns increases, the demand for hot dogs will",
          "o": [
            "not change, because only the price of buns has changed",
            "increase, and the equilibrium price of hot dogs will rise",
            "decrease, and the equilibrium price of hot dogs will rise",
            "decrease, and the equilibrium price of hot dogs will fall"
          ],
          "a": 3,
          "w": "Ekmek pahalanınca daha az sosisli ekmek alınır; birlikte tüketilen sosisin talebi de düşer. *Complements*: birinin fiyatı ↑ → diğerinin talebi ↓. Sosis piyasasında talep sola kayınca denge fiyatı ve miktarı düşer. Tamamlayıcının fiyatı, sosisin talep eğrisini kaydıran bir etkendir."
        },
        {
          "t": "2.2",
          "q": "The government gives producers of solar panels a subsidy for each panel they produce. What happens in the market for solar panels?",
          "o": [
            "The supply curve shifts to the right.",
            "The supply curve shifts to the left.",
            "The demand curve shifts to the left.",
            "There is a movement up along the supply curve."
          ],
          "a": 0,
          "w": "*Per-unit subsidy* üreticinin birim maliyetini düşürür: her fiyatta daha çok panel arz edilir, arz sağa (aşağı) kayar. Vergi ise tersine arzı sola kaydırır. Sübvansiyon üreticiye verildiği için talep eğrisi kaymaz. Eğri boyunca hareket yalnız panelin fiyatı değişince olur."
        },
        {
          "t": "2.2",
          "q": "The graph shows two supply curves for wooden tables. Which of the following would cause the supply curve to shift from S1 to S2?",
          "o": [
            "An increase in consumers' incomes",
            "An increase in the price of wood",
            "A decrease in the price of wooden tables",
            "An increase in the number of table producers"
          ],
          "a": 1,
          "w": "S2, S1'in solunda: arz azalmış. Odun bir girdi; girdi fiyatı ↑ → maliyet ↑ → arz ↓. Gelir talebi etkiler, arzı değil. Masanın kendi fiyatı eğri boyunca hareket yaratır. Üretici sayısının artması arzı artırır (sağa kayma).",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity of tables",
            "ylabel": "Price",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  2,
                  1
                ],
                "to": [
                  9,
                  8
                ],
                "label": "S1"
              },
              {
                "from": [
                  0.5,
                  2.5
                ],
                "to": [
                  6,
                  8
                ],
                "label": "S2",
                "dash": true
              }
            ]
          }
        },
        {
          "t": "2.3-1",
          "q": "The price elasticity of demand for school lunches is 0.4. If the price of a school lunch increases by 10 percent, the quantity of school lunches demanded will",
          "o": [
            "decrease by 2.5 percent",
            "decrease by 4 percent",
            "decrease by 25 percent",
            "increase by 4 percent"
          ],
          "a": 1,
          "w": "Ed = %ΔQ ÷ %ΔP → %ΔQ = Ed × %ΔP = 0,4 × 10 = %4. Talep yasası gereği fiyat artınca miktar düşer, yani %4 azalır. %25, 10'u 0,4'e bölmekten gelir; %2,5 ise 0,4 ÷ 10 × 100 karışıklığıdır. Ed < 1 olduğu için miktarın fiyattan daha az tepki vermesi beklenir."
        },
        {
          "t": "2.3-1",
          "q": "The graph shows two demand curves, Da and Db, that pass through the same point E. Over a given price change starting at point E, which curve shows the more price-elastic demand?",
          "o": [
            "Neither, because two curves that pass through the same point have the same elasticity there",
            "Da, because it is steeper",
            "Da, because it reaches a higher maximum price",
            "Db, because the same price change causes a larger change in quantity demanded"
          ],
          "a": 3,
          "w": "Aynı noktadan geçen iki eğriden yayvan olanı (Db) aynı fiyat değişimine daha büyük miktar tepkisi verir; başlangıç noktası ortak olduğu için yüzde değişimler de daha büyüktür → daha *elastic*. Dik eğri (Da) daha *inelastic*'tir. Ortak nokta esneklikleri eşitlemez, çünkü eğimler farklıdır.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity",
            "ylabel": "Price",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  3,
                  9.5
                ],
                "to": [
                  6,
                  0.5
                ],
                "label": "Da"
              },
              {
                "from": [
                  0,
                  6.5
                ],
                "to": [
                  10,
                  3.2
                ],
                "label": "Db",
                "dash": true
              }
            ],
            "points": [
              {
                "q": 4.5,
                "p": 5,
                "label": "E"
              }
            ]
          }
        },
        {
          "t": "2.3-2",
          "q": "The table shows two points on the demand curve for movie tickets at a cinema. Based on the total revenue test, demand between these two prices is",
          "o": [
            "elastic, because total revenue rises when the price falls",
            "inelastic, because total revenue rises when the price falls",
            "unit elastic, because total revenue changes by 100 TL",
            "inelastic, because the quantity demanded rises when the price falls"
          ],
          "a": 0,
          "w": "TR = P × Q: 8 TL'de 800 TL, 6 TL'de 900 TL. Fiyat düştü, TR arttı: ters yön → *elastic*. (Kontrol: midpoint ile %ΔQ = 50 ÷ 125 = %40, %ΔP = 2 ÷ 7 ≈ %28,6, Ed ≈ 1,4.) *Unit elastic*'te TR değişmezdi. Fiyat düşünce miktarın artması her talep eğrisinde olur, esnekliği göstermez.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Tickets sold"
            ],
            "rows": [
              [
                8,
                100
              ],
              [
                6,
                150
              ]
            ]
          }
        },
        {
          "t": "2.3-2",
          "q": "Along a downward-sloping straight-line demand curve, the price elasticity of demand",
          "o": [
            "is inelastic at high prices and elastic at low prices",
            "is the same at every point, because the slope is constant",
            "is elastic at high prices, unit elastic at the midpoint, and inelastic at low prices",
            "is equal to the slope of the curve at every point"
          ],
          "a": 2,
          "w": "Doğrusal eğride eğim sabittir ama esneklik değişir: üst kısımda P büyük, Q küçük olduğu için yüzde değişimler miktar lehine büyür → *elastic*; ortada *unit elastic* (TR en yüksek); alt kısımda *inelastic*. Bu yüzden eğim ≠ esneklik."
        },
        {
          "t": "2.4",
          "q": "Which of the following would make the supply of a good more price elastic?",
          "o": [
            "Producers have a large amount of unused production capacity.",
            "The good spoils quickly and cannot be stored.",
            "The inputs needed to make the good are rare and specialized.",
            "Producers have only one day to respond to a price change."
          ],
          "a": 0,
          "w": "Arz esnekliği, üreticinin miktarı ne kadar kolay artırabildiğine bağlıdır. Boş kapasite (*spare capacity*) varsa fiyat artınca üretim hızla artar → *elastic supply*. Bozulan, stoklanamayan mallar, nadir girdiler ve çok kısa zaman arzı *inelastic* yapar."
        },
        {
          "t": "2.5",
          "q": "When the price of tea rises from 10 TL to 14 TL per package, the quantity of coffee demanded rises from 90 to 110 packages per week. Using the midpoint method, what is the cross-price elasticity of demand for coffee with respect to the price of tea, and how are the goods related?",
          "o": [
            "−0.6; complements",
            "0.6; substitutes",
            "1.67; substitutes",
            "0.6; complements"
          ],
          "a": 1,
          "w": "%ΔQ(kahve) = 20 ÷ 100 = %20; %ΔP(çay) = 4 ÷ 12 ≈ %33,3. *Cross-price elasticity* = 20 ÷ 33,3 = +0,6. Pozitif → çay pahalanınca kahve talebi artıyor: *substitutes*. 1,67 oranı ters çevirmektir. Cross-price'ta işaret atılmaz; ilişkiyi işaret belirler."
        },
        {
          "t": "2.6-1",
          "q": "In a competitive market, the price is currently above the equilibrium price. Which of the following best describes the market?",
          "o": [
            "Quantity supplied exceeds quantity demanded, and the price tends to rise.",
            "Quantity demanded exceeds quantity supplied, and the price tends to rise.",
            "Quantity supplied exceeds quantity demanded, and the price tends to fall.",
            "Quantity demanded equals quantity supplied, so the price stays the same."
          ],
          "a": 2,
          "w": "Dengenin üstündeki fiyatta satıcılar çok, alıcılar az ister: Qs > Qd → *surplus*. Satılamayan stoklar satıcıları fiyat indirmeye iter; fiyat dengeye doğru düşer. Qd > Qs (*shortage*) dengenin altındaki fiyatlarda olur ve fiyatı yükseltir."
        },
        {
          "t": "2.6-2",
          "q": "The graph shows the market for wristbands at a music festival. What is the producer surplus at the market equilibrium?",
          "o": [
            "450 TL",
            "900 TL",
            "1,200 TL",
            "1,350 TL"
          ],
          "a": 0,
          "w": "Denge E: P = 20 TL, Q = 60. *Producer surplus* fiyatın altında, arz eğrisinin üstündeki üçgen: ½ × 60 × (20 − 5) = 450 TL. 900 TL *consumer surplus*'tır (½ × 60 × 30), 1.350 TL toplam artık, 1.200 TL ise satış gelirinin tamamıdır (20 × 60).",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity of wristbands",
            "ylabel": "Price (TL)",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  10
                ],
                "to": [
                  10,
                  0
                ],
                "label": "D"
              },
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  10,
                  6
                ],
                "label": "S"
              }
            ],
            "points": [
              {
                "q": 6,
                "p": 4,
                "label": "E",
                "guides": true
              }
            ],
            "yticks": [
              {
                "v": 1,
                "label": "5"
              },
              {
                "v": 4,
                "label": "20"
              },
              {
                "v": 10,
                "label": "50"
              }
            ],
            "xticks": [
              {
                "v": 6,
                "label": "60"
              }
            ]
          }
        },
        {
          "t": "2.6-2",
          "q": "At the equilibrium of a competitive market with no externalities, total surplus is maximized because",
          "o": [
            "the price is as low as possible",
            "consumer surplus equals producer surplus",
            "every buyer pays exactly his or her maximum willingness to pay",
            "the marginal benefit to buyers of the last unit equals the marginal cost to sellers of producing it"
          ],
          "a": 3,
          "w": "Dengede son birimin alıcıya değeri (talep eğrisi) ile satıcıya maliyeti (arz eğrisi) eşittir. Daha az üretilirse değeri maliyetinden yüksek birimler üretilmez; daha fazla üretilirse maliyeti değerinden yüksek birimler üretilir. Bu *allocative efficiency*'dir. CS'nin PS'ye eşit olması gerekmez; herkes WTP'sini ödeseydi CS sıfır olurdu."
        },
        {
          "t": "2.7",
          "q": "In the market for bicycles, demand increases and supply increases at the same time. Which of the following must be true about the new equilibrium?",
          "o": [
            "Quantity increases, but the change in price is indeterminate.",
            "Price increases, but the change in quantity is indeterminate.",
            "Both price and quantity increase.",
            "Price decreases, but the change in quantity is indeterminate."
          ],
          "a": 0,
          "w": "Talep artışı P ↑ Q ↑, arz artışı P ↓ Q ↑ yönünde çeker. Miktar iki etkide de artar → kesin. Fiyatta etkiler zıt; hangisinin büyük olduğunu bilmeden yön belirsizdir: *indeterminate*. Çift kaymada her zaman bir değişken kesin, diğeri belirsiz kalır."
        },
        {
          "t": "2.7",
          "q": "The price of peanut butter falls sharply. Peanut butter and jam are complements. What happens to the equilibrium price and quantity of jam?",
          "o": [
            "Price decreases and quantity decreases.",
            "Price increases and quantity increases.",
            "Price increases and quantity decreases.",
            "Price decreases and quantity increases."
          ],
          "a": 1,
          "w": "Fıstık ezmesi ucuzlayınca daha çok alınır; birlikte kullanılan reçelin talebi de artar (*complements*). Reçel piyasasında talep sağa kayar: P ↑, Q ↑. Reçelin arzı değişmedi."
        },
        {
          "t": "2.8-1",
          "q": "The graph shows the labor market for restaurant workers. If the government sets a minimum wage of 140 TL per hour, how many workers will be unemployed (want to work but cannot find a job)?",
          "o": [
            "200",
            "300",
            "400",
            "700"
          ],
          "a": 2,
          "w": "Asgari ücret (*price floor*) 140 TL, denge ücreti 100 TL: *binding*. Bu ücrette firmalar 300 işçi ister (talep), 700 kişi çalışmak ister (arz). *Unemployment* = 700 − 300 = 400. 300 istihdam edilenlerdir; 200, arzın dengeye göre artışıdır (700 − 500), işsizliğin yalnızca bir parçası.",
          "fig": {
            "type": "graph",
            "xlabel": "Number of workers",
            "ylabel": "Wage (TL per hour)",
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
                "label": "D"
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
            "hlines": [
              {
                "p": 7,
                "label": "Minimum wage"
              }
            ],
            "yticks": [
              {
                "v": 5,
                "label": "100"
              },
              {
                "v": 7,
                "label": "140"
              }
            ],
            "xticks": [
              {
                "v": 3,
                "label": "300"
              },
              {
                "v": 5,
                "label": "500"
              },
              {
                "v": 7,
                "label": "700"
              }
            ]
          }
        },
        {
          "t": "2.8-2",
          "q": "The demand for a good is perfectly inelastic, and the supply curve slopes upward. If the government imposes a per-unit tax on the sellers of this good, which of the following is true?",
          "o": [
            "Buyers bear the entire tax, and the deadweight loss is very large.",
            "Sellers bear the entire tax, and there is no deadweight loss.",
            "Buyers and sellers each pay half of the tax.",
            "Buyers bear the entire tax, and there is no deadweight loss."
          ],
          "a": 3,
          "w": "*Tax incidence*: kaçamayan öder. Talep dikeyse alıcılar fiyat artsa da aynı miktarı alır; fiyat tam vergi kadar yükselir, yükün tamamı alıcıda. Miktar değişmediği için kaybolan işlem yok → *deadweight loss* = 0. Yük paylaşımı eşit olmak zorunda değildir; esnekliklere bağlıdır."
        },
        {
          "t": "2.9",
          "q": "A country imposes a tariff on imported steel. Compared with free trade, which of the following is most likely to occur in the country's steel market?",
          "o": [
            "The domestic price of steel rises, domestic production falls, and imports rise.",
            "The domestic price of steel falls, domestic production rises, and imports fall.",
            "The domestic price of steel rises, domestic production rises, and imports fall.",
            "The domestic price of steel does not change, but the government collects revenue."
          ],
          "a": 2,
          "w": "*Tariff* ithal çeliğin fiyatını yükseltir; yurt içi fiyat dünya fiyatı + tarife olur. Daha yüksek fiyatta yerli üreticiler daha çok üretir, tüketiciler daha az alır → *imports* azalır. Devlet tarife geliri toplar ama fiyat da artar; tüketici artığı düşer."
        }
      ]
    },
    {
      "no": 3,
      "level": "Orta",
      "minutes": 25,
      "questions": [
        {
          "t": "2.1-1",
          "q": "Which of the following best explains why an individual's demand curve for pizza slices slopes downward?",
          "o": [
            "As more slices are bought, the supply of pizza decreases.",
            "As the consumer buys more slices, the cost of producing pizza rises.",
            "As the price of pizza falls, the consumer's money income rises.",
            "Each additional slice gives less additional satisfaction than the previous one, so the consumer buys more only at a lower price."
          ],
          "a": 3,
          "w": "*Diminishing marginal utility*: her ek dilim bir öncekinden daha az ek fayda verir; tüketici daha fazla almayı ancak fiyat düşerse kabul eder. Üretim maliyeti arz tarafının konusudur. Fiyat düşünce *nominal* gelir değil, *real income* (satın alma gücü) artar. Tüketicinin alımı arzı kaydırmaz."
        },
        {
          "t": "2.1-2",
          "q": "Good X is a normal good. Consider the following events.\nI. An increase in consumers' incomes\nII. A decrease in the price of a good that is a complement to X\nIII. A decrease in the price of good X\nWhich of the following would shift the demand curve for good X to the right?",
          "o": [
            "I only",
            "III only",
            "I and II only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "I: *normal good*'da gelir ↑ → talep ↑. II: tamamlayıcı ucuzlarsa birlikte daha çok kullanılır → X'in talebi ↑. III: X'in kendi fiyatı eğriyi kaydırmaz, yalnız *quantity demanded*'ı artırır (eğri boyunca hareket). Bu yüzden yalnız I ve II."
        },
        {
          "t": "2.2",
          "q": "The graph shows two supply curves for a good, S1 and S2, and three points. Which of the following would be shown by a movement from point A to point C?",
          "o": [
            "An increase in the cost of a raw material used to make the good",
            "An increase in the price of the good",
            "A decrease in the price of the good",
            "A decrease in the cost of a raw material used to make the good"
          ],
          "a": 3,
          "w": "A ve C aynı fiyatta ama C'de miktar daha çok ve C başka eğride (S2): arz sağa kaymış, *increase in supply*. Ham madde maliyetinin düşmesi arzı artırır. Malın kendi fiyatının artması A'dan B'ye, S1 üzerinde harekettir. Maliyet artışı arzı sola kaydırırdı.",
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
                  8.5,
                  8.5
                ],
                "label": "S1"
              },
              {
                "from": [
                  4,
                  1
                ],
                "to": [
                  10,
                  7
                ],
                "label": "S2",
                "dash": true
              }
            ],
            "points": [
              {
                "q": 3,
                "p": 3,
                "label": "A"
              },
              {
                "q": 6,
                "p": 6,
                "label": "B"
              },
              {
                "q": 6,
                "p": 3,
                "label": "C"
              }
            ]
          }
        },
        {
          "t": "2.3-1",
          "q": "A gym raises its monthly membership fee from 40 TL to 60 TL, and the number of members falls from 120 to 80. Using the midpoint method, what is the price elasticity of demand, and how is demand described?",
          "o": [
            "0.5; inelastic",
            "0.67; inelastic",
            "1.0; unit elastic",
            "1.5; elastic"
          ],
          "a": 2,
          "w": "%ΔQ = 40 ÷ ((120 + 80) ÷ 2) = 40 ÷ 100 = %40; %ΔP = 20 ÷ ((40 + 60) ÷ 2) = 20 ÷ 50 = %40. Ed = 40 ÷ 40 = 1 → *unit elastic*. Sağlama: TR 40 × 120 = 4.800 TL ve 60 × 80 = 4.800 TL; TR değişmedi. 0,67 başlangıç değerleriyle hesaplanır (%33,3 ÷ %50); midpoint yönden bağımsız sonuç verir."
        },
        {
          "t": "2.3-1",
          "q": "A farmer sells wheat in a market where the demand for her wheat is perfectly elastic at the market price. If she raises her price slightly above the market price, the quantity of her wheat demanded will",
          "o": [
            "fall to zero",
            "fall slightly",
            "not change",
            "rise, because buyers expect higher quality"
          ],
          "a": 0,
          "w": "*Perfectly elastic* talep (yatay eğri, Ed = ∞): piyasa fiyatının biraz üstüne çıkan satıcının bütün alıcıları aynı buğdayı başkasından alır; talep edilen miktar sıfıra düşer. Miktarın hiç değişmemesi *perfectly inelastic* durumdur."
        },
        {
          "t": "2.3-2",
          "q": "The table shows the demand schedule for a snack. Over which price range is demand price elastic?",
          "o": [
            "Between 12 TL and 10 TL",
            "Between 8 TL and 6 TL",
            "Between 6 TL and 4 TL",
            "Between 4 TL and 2 TL"
          ],
          "a": 0,
          "w": "*Total revenue test*: TR = P × Q → 24, 40, 48, 48, 40, 24. 12'den 10'a fiyat düşerken TR 24'ten 40'a çıkıyor: ters yön → *elastic*. 8 → 6 arasında TR sabit (48): *unit elastic*. 6 → 4 ve 4 → 2 arasında fiyat düşerken TR düşüyor: *inelastic*. Doğrusal talep eğrisinin üst kısmı esnektir.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Quantity demanded"
            ],
            "rows": [
              [
                12,
                2
              ],
              [
                10,
                4
              ],
              [
                8,
                6
              ],
              [
                6,
                8
              ],
              [
                4,
                10
              ],
              [
                2,
                12
              ]
            ]
          }
        },
        {
          "t": "2.3-2",
          "q": "The demand for gasoline is more price elastic in the long run than in the short run. Which of the following best explains this?",
          "o": [
            "In the short run, gasoline has more substitutes than in the long run.",
            "Over time, the supply of gasoline becomes more elastic.",
            "In the long run, gasoline takes up a smaller share of consumers' budgets.",
            "Over time, consumers can find substitutes, such as buying fuel-efficient cars or using public transport."
          ],
          "a": 3,
          "w": "Zaman (*time*) bir esneklik belirleyicisidir. Benzin zamlandığında ilk hafta herkes aynı arabayla aynı yola gider (*inelastic*). Zamanla tasarruflu araba, toplu taşıma, işe yakın ev gibi ikameler bulunur → uzun vadede talep daha *elastic*. Arz esnekliği talep esnekliğini açıklamaz."
        },
        {
          "t": "2.4",
          "q": "The graph shows the market for tickets to a stadium with a fixed number of seats. If the demand for tickets increases from D1 to D2, which of the following describes the result?",
          "o": [
            "The price rises from 30 TL to 60 TL, and the quantity of tickets is unchanged.",
            "The price and the quantity of tickets both rise.",
            "The quantity of tickets rises, and the price is unchanged.",
            "The price rises from 30 TL to 60 TL, and the quantity of tickets falls."
          ],
          "a": 0,
          "w": "Koltuk sayısı sabit: arz dikey, *perfectly inelastic* (Es = 0). Talep artınca miktar artamaz; bütün uyum fiyatta olur: 30 TL → 60 TL, miktar aynı. Arz ne kadar inelastic ise talep artışı o kadar çok fiyat, o kadar az miktar artışı yaratır.",
          "fig": {
            "type": "graph",
            "xlabel": "Number of tickets",
            "ylabel": "Price (TL)",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  6,
                  0
                ],
                "to": [
                  6,
                  9.5
                ],
                "label": "S"
              },
              {
                "from": [
                  1,
                  8
                ],
                "to": [
                  8.5,
                  0.5
                ],
                "label": "D1"
              },
              {
                "from": [
                  2,
                  10
                ],
                "to": [
                  10,
                  2
                ],
                "label": "D2",
                "dash": true
              }
            ],
            "points": [
              {
                "q": 6,
                "p": 3,
                "label": "E1",
                "guides": true
              },
              {
                "q": 6,
                "p": 6,
                "label": "E2",
                "guides": true
              }
            ],
            "yticks": [
              {
                "v": 3,
                "label": "30"
              },
              {
                "v": 6,
                "label": "60"
              }
            ]
          }
        },
        {
          "t": "2.5",
          "q": "The table shows the income elasticity of demand for four goods. Which good is a normal good that is a necessity?",
          "o": [
            "Good A",
            "Good B",
            "Good C",
            "Good D"
          ],
          "a": 1,
          "w": "*Income elasticity* 0 ile 1 arasında → *normal good* ve *necessity* (gelir artınca daha çok alınır ama gelirden daha az oranda): B (0,4). A (2,1) > 1 → *luxury*. C (−0,8) negatif → *inferior*. D (0) gelirden bağımsızdır.",
          "fig": {
            "type": "table",
            "head": [
              "Good",
              "Income elasticity of demand"
            ],
            "rows": [
              [
                "A",
                2.1
              ],
              [
                "B",
                0.4
              ],
              [
                "C",
                -0.8
              ],
              [
                "D",
                0
              ]
            ]
          }
        },
        {
          "t": "2.5",
          "q": "When Elif's monthly income rises from 4,000 TL to 6,000 TL, the number of restaurant meals she buys each month rises from 2 to 4. Using the midpoint method, what is her income elasticity of demand for restaurant meals, and what type of good are they for her?",
          "o": [
            "−1.67; an inferior good",
            "0.6; a necessity",
            "1.67; a luxury",
            "2.0; a luxury"
          ],
          "a": 2,
          "w": "%ΔQ = 2 ÷ 3 ≈ %66,7; %ΔGelir = 2.000 ÷ 5.000 = %40. *Income elasticity* = 66,7 ÷ 40 ≈ 1,67 > 1 → *luxury* (normal mal; gelirden daha hızlı artıyor). 2,0 başlangıç değerleriyle hesaplanır (%100 ÷ %50), soru midpoint istiyor. 0,6 oranı ters çevirmektir. Gelir ve miktar aynı yönde arttığı için *inferior* olamaz."
        },
        {
          "t": "2.6-1",
          "q": "The table shows the demand and supply schedules for scarves. If the price were 25 TL, how many scarves would actually be bought and sold, and what would the market condition be?",
          "o": [
            "50 scarves; a surplus of 20",
            "70 scarves; a shortage of 20",
            "60 scarves; a shortage of 20",
            "50 scarves; a shortage of 20"
          ],
          "a": 3,
          "w": "25 TL'de Qd = 70, Qs = 50: *shortage* = 20. Gönüllü işlemde alıcı da satıcı da istemelidir; satıcılar yalnız 50 atkı sunduğu için alınıp satılan miktar küçük olandır: 50. Denge 30 TL ve 60 atkıdır. Dengenin altında *surplus* olmaz.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Quantity demanded",
              "Quantity supplied"
            ],
            "rows": [
              [
                15,
                90,
                30
              ],
              [
                20,
                80,
                40
              ],
              [
                25,
                70,
                50
              ],
              [
                30,
                60,
                60
              ],
              [
                35,
                50,
                70
              ]
            ]
          }
        },
        {
          "t": "2.6-2",
          "q": "The table shows the maximum willingness to pay of five students for one ticket to a school play. If the ticket price is 50 TL and each student buys at most one ticket, what is the total consumer surplus?",
          "o": [
            "50 TL",
            "70 TL",
            "150 TL",
            "220 TL"
          ],
          "a": 1,
          "w": "WTP ≥ 50 olan öğrenciler alır: Ece (90), Kaan (70), Zeynep (60). Artıklar 40 + 20 + 10 = 70 TL. Burak (40) ve Selin (30) almaz; satın alınmayan bilette artık yoktur. 150 TL toplam harcama, 220 TL ise alıcıların toplam WTP'sidir.",
          "fig": {
            "type": "table",
            "head": [
              "Student",
              "Willingness to pay (TL)"
            ],
            "rows": [
              [
                "Ece",
                90
              ],
              [
                "Kaan",
                70
              ],
              [
                "Zeynep",
                60
              ],
              [
                "Burak",
                40
              ],
              [
                "Selin",
                30
              ]
            ]
          }
        },
        {
          "t": "2.6-2",
          "q": "The graph shows a competitive market. If output were limited to 30 units, what would be the deadweight loss?",
          "o": [
            "200 TL",
            "400 TL",
            "800 TL",
            "1,600 TL"
          ],
          "a": 1,
          "w": "Denge 50 TL ve 50 birim. 30 birimde son birimin alıcıya değeri 70 TL (talep), maliyeti 30 TL (arz). 30 ile 50 arasındaki birimler üretilmiyor: *deadweight loss* = ½ × (50 − 30) × (70 − 30) = ½ × 20 × 40 = 400 TL. 800 TL ½'yi unutmaktır.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity",
            "ylabel": "Price (TL)",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  10
                ],
                "to": [
                  10,
                  0
                ],
                "label": "D"
              },
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  9.5,
                  9.5
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
                "q": 3,
                "p": 7,
                "label": "F",
                "guides": true
              },
              {
                "q": 3,
                "p": 3,
                "label": "G"
              }
            ],
            "yticks": [
              {
                "v": 3,
                "label": "30"
              },
              {
                "v": 5,
                "label": "50"
              },
              {
                "v": 7,
                "label": "70"
              }
            ],
            "xticks": [
              {
                "v": 3,
                "label": "30"
              },
              {
                "v": 5,
                "label": "50"
              }
            ]
          }
        },
        {
          "t": "2.7",
          "q": "The equilibrium price of good X rises and the equilibrium quantity of good X falls. Which of the following could explain this change?",
          "o": [
            "A decrease in the demand for X",
            "An increase in the demand for X",
            "A decrease in the supply of X",
            "An increase in the supply of X"
          ],
          "a": 2,
          "w": "P ↑ ve Q ↓ birlikte yalnız arz azalmasında olur (arz sola kayar, talep sabit). Talep artışı P ↑ Q ↑; talep azalması P ↓ Q ↓; arz artışı P ↓ Q ↑ verir. Sonuçtan geriye doğru düşün: fiyat ile miktar zıt yönde ise kayan eğri arzdır."
        },
        {
          "t": "2.7",
          "q": "The price of a substitute for good X falls. At the same time, the wages of workers who produce good X rise. What happens to the equilibrium price and quantity of good X?",
          "o": [
            "Price and quantity both decrease.",
            "Price decreases, and the change in quantity is indeterminate.",
            "Price increases, and the change in quantity is indeterminate.",
            "Quantity decreases, and the change in price is indeterminate."
          ],
          "a": 3,
          "w": "İkame ucuzladı → X'in talebi azalır (P ↓, Q ↓). Ücretler arttı → maliyet ↑, X'in arzı azalır (P ↑, Q ↓). Miktar iki etkide de düşer → kesin. Fiyatta etkiler zıt; büyüklükler bilinmeden *indeterminate*."
        },
        {
          "t": "2.8-1",
          "q": "The graph shows the market for apartment rentals in a small town. If the government sets a maximum rent of 40 (in hundreds of TL), what is the size of the resulting shortage?",
          "o": [
            "200 apartments",
            "300 apartments",
            "400 apartments",
            "500 apartments"
          ],
          "a": 0,
          "w": "Denge 50 ve 400 daire; tavan 40 dengenin altında: *binding price ceiling*. 40'ta Qd = 500, Qs = 300. *Shortage* = 500 − 300 = 200. 300 kiralanan daire sayısıdır (küçük olan Qs), 400 eski denge miktarı, 500 ise talep edilen miktar.",
          "fig": {
            "type": "graph",
            "xlabel": "Number of apartments",
            "ylabel": "Rent",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  9
                ],
                "to": [
                  9,
                  0
                ],
                "label": "D"
              },
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  8.5,
                  9.5
                ],
                "label": "S"
              }
            ],
            "hlines": [
              {
                "p": 4,
                "label": "Ceiling"
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 5,
                "label": "E"
              }
            ],
            "yticks": [
              {
                "v": 4,
                "label": "40"
              },
              {
                "v": 5,
                "label": "50"
              }
            ],
            "xticks": [
              {
                "v": 3,
                "label": "300"
              },
              {
                "v": 4,
                "label": "400"
              },
              {
                "v": 5,
                "label": "500"
              }
            ]
          }
        },
        {
          "t": "2.8-1",
          "q": "The equilibrium price of a taxi ride in a city is 120 TL. The city government then sets a price ceiling of 150 TL per ride. What is the most likely effect of the ceiling?",
          "o": [
            "It creates a shortage of taxi rides.",
            "It has no effect on the price or quantity of taxi rides.",
            "It creates a surplus of taxi rides.",
            "It raises the price of a taxi ride to 150 TL."
          ],
          "a": 1,
          "w": "Tavan fiyatın üst sınırıdır; 150 TL denge fiyatının (120 TL) üstünde olduğu için piyasa zaten 120 TL'de serbestçe dengelenir: *non-binding*. Kıtlık ancak tavan dengenin altında olsaydı çıkardı. Tavan fiyatı yükseltmez, yalnızca sınırlar."
        },
        {
          "t": "2.8-2",
          "q": "The graph shows the market for juice boxes before and after the government places a per-unit tax on sellers, which shifts supply from S1 to S2. How much tax revenue does the government collect?",
          "o": [
            "3,000 TL",
            "6,000 TL",
            "8,000 TL",
            "21,000 TL"
          ],
          "a": 1,
          "w": "Dikey mesafe vergidir: S2 − S1 = 40 − 20 = 20 TL. Yeni denge E2'de Q = 300. Vergi geliri = vergi × yeni miktar = 20 × 300 = 6.000 TL. 8.000 TL eski miktarla (400) yapılan hatadır; 21.000 TL alıcıların toplam ödemesidir (70 × 300). Alıcı fiyatı 60'tan 70'e, satıcının elinde kalan 60'tan 50'ye iner: yük eşit paylaşılır.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity of juice boxes",
            "ylabel": "Price (TL)",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  10
                ],
                "to": [
                  10,
                  0
                ],
                "label": "D"
              },
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  8,
                  10
                ],
                "label": "S1"
              },
              {
                "from": [
                  0,
                  4
                ],
                "to": [
                  6,
                  10
                ],
                "label": "S2",
                "dash": true
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 6,
                "label": "E1",
                "guides": true
              },
              {
                "q": 3,
                "p": 7,
                "label": "E2",
                "guides": true
              },
              {
                "q": 3,
                "p": 5
              }
            ],
            "yticks": [
              {
                "v": 2,
                "label": "20"
              },
              {
                "v": 4,
                "label": "40"
              },
              {
                "v": 5,
                "label": "50"
              },
              {
                "v": 6,
                "label": "60"
              },
              {
                "v": 7,
                "label": "70"
              }
            ],
            "xticks": [
              {
                "v": 3,
                "label": "300"
              },
              {
                "v": 4,
                "label": "400"
              }
            ]
          }
        },
        {
          "t": "2.8-2",
          "q": "The government gives sellers of electric scooters a per-unit subsidy. Compared with the market before the subsidy, which of the following is true?",
          "o": [
            "The price buyers pay falls, the price sellers receive rises, and a deadweight loss results.",
            "The price buyers pay rises, the price sellers receive falls, and a deadweight loss results.",
            "The price buyers pay falls, the price sellers receive rises, and total surplus increases.",
            "The price buyers pay and the price sellers receive both fall, and no deadweight loss results."
          ],
          "a": 0,
          "w": "*Per-unit subsidy* arzı sübvansiyon kadar aşağı kaydırır: alıcı fiyatı düşer, satıcının eline geçen fiyat (alıcı fiyatı + sübvansiyon) yükselir, miktar artar. Dengeden fazla üretilen birimlerin maliyeti alıcıya değerinden yüksektir; devletin maliyeti CS ve PS artışından büyük olduğu için *deadweight loss* oluşur."
        },
        {
          "t": "2.9",
          "q": "The graph shows the domestic market for a tablet case in a small country. If the country opens to free trade at the world price of 300 TL, how many cases will the country import?",
          "o": [
            "2,000",
            "3,000",
            "4,000",
            "7,000"
          ],
          "a": 2,
          "w": "*World price* 300 TL, yurt içi denge (*autarky*) 500 TL'nin altında. 300 TL'de Qd = 7.000, yerli üretim Qs = 3.000. *Imports* = 7.000 − 3.000 = 4.000. 3.000 yerli üretimdir, 7.000 toplam tüketim; 2.000 ise yerli üretimin düşüşüdür (5.000 → 3.000).",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity (thousands)",
            "ylabel": "Price (TL)",
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
                "label": "Dd"
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
                "label": "Sd"
              }
            ],
            "hlines": [
              {
                "p": 3,
                "label": "World price"
              }
            ],
            "yticks": [
              {
                "v": 3,
                "label": "300"
              },
              {
                "v": 5,
                "label": "500"
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
                "v": 7,
                "label": "7"
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
          "t": "2.1-1",
          "q": "When the price of a normal good decreases, the quantity demanded increases partly because of the income effect. The income effect refers to the fact that",
          "o": [
            "the lower price increases consumers' purchasing power, or real income",
            "consumers' money incomes rise when prices fall",
            "the demand curve shifts to the right when the price falls",
            "consumers switch to the good from relatively more expensive substitutes"
          ],
          "a": 0,
          "w": "*Income effect*: fiyat düşünce aynı para daha çok mal alır; *real income* (satın alma gücü) artar ve *normal good*'dan daha çok alınır. Parasal (nominal) gelir değişmez. Görece ucuzlayan mala geçiş *substitution effect*'tir. İki etki de eğri boyunca hareketi açıklar, eğriyi kaydırmaz."
        },
        {
          "t": "2.1-2",
          "q": "Bus rides are an inferior good, and car travel is a substitute for bus rides. Consider the following events.\nI. Consumers' incomes decrease.\nII. The price of gasoline increases sharply.\nIII. The bus fare decreases.\nWhich of the following would shift the demand curve for bus rides to the right?",
          "o": [
            "I only",
            "III only",
            "I and II only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "I: *inferior good*'da gelir ↓ → talep ↑. II: benzin pahalanınca araba yolculuğu pahalanır; ikame pahalanınca otobüs talebi ↑. III: otobüs ücretinin kendisi eğriyi kaydırmaz, yalnız *quantity demanded*'ı artırır. Doğru cevap I ve II."
        },
        {
          "t": "2.2",
          "q": "Wheat farmers expect the price of wheat to be much higher next year, and wheat can be stored at low cost. How will this expectation most likely affect the market for wheat this year?",
          "o": [
            "Current demand decreases, shifting the demand curve to the left.",
            "Current supply increases, shifting the supply curve to the right.",
            "Current quantity supplied increases along the supply curve.",
            "Current supply decreases, shifting the supply curve to the left."
          ],
          "a": 3,
          "w": "Üreticinin *expectations*'ı arz belirleyicisidir. Gelecek yıl daha yüksek fiyat bekleyen çiftçi buğdayı depolayıp sonra satmayı tercih eder: bu yılın arzı azalır, eğri sola kayar. Bugünkü fiyat değişmediği için eğri boyunca hareket yoktur. Bu beklenti üreticinin, alıcının değil."
        },
        {
          "t": "2.2",
          "q": "The table shows a producer's supply schedule for backpacks. The cost of producing each backpack then rises by 10 TL at every level of output, so the supply curve shifts up by 10 TL. After the cost increase, how many backpacks will the producer supply at a price of 40 TL?",
          "o": [
            "100",
            "200",
            "300",
            "400"
          ],
          "a": 1,
          "w": "Arz eğrisi her birimin üreticiye en düşük kabul edilebilir fiyatını gösterir. Maliyet 10 TL artınca her miktar için istenen fiyat 10 TL yükselir: eskiden 30 TL'de sunulan 200 sırt çantası artık 40 TL ister. Bu yüzden 40 TL'de arz edilen miktar 300'den 200'e düşer. Yukarı kayma = sola kayma (*decrease in supply*).",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Quantity supplied before the cost increase"
            ],
            "rows": [
              [
                20,
                100
              ],
              [
                30,
                200
              ],
              [
                40,
                300
              ],
              [
                50,
                400
              ]
            ]
          }
        },
        {
          "t": "2.3-1",
          "q": "The price elasticity of demand for a brand of sneakers is 1.5. By approximately what percentage must the firm cut its price to increase the quantity of sneakers sold by 12 percent?",
          "o": [
            "1.25 percent",
            "8 percent",
            "12 percent",
            "18 percent"
          ],
          "a": 1,
          "w": "Ed = %ΔQ ÷ %ΔP → %ΔP = %ΔQ ÷ Ed = 12 ÷ 1,5 = %8. Talep *elastic* olduğu için miktar fiyattan daha büyük oranda tepki verir; %8 indirim %12 satış artışı getirir. %18, 12'yi 1,5 ile çarpmaktır (formülü ters kurmak)."
        },
        {
          "t": "2.3-1",
          "q": "The graph shows a linear demand curve with points A and B. Using the midpoint method, what is the price elasticity of demand between points A and B?",
          "o": [
            "0.43",
            "1.0",
            "1.5",
            "2.33"
          ],
          "a": 3,
          "w": "A (Q = 2, P = 8), B (Q = 4, P = 6). %ΔQ = 2 ÷ 3 ≈ %66,7; %ΔP = 2 ÷ 7 ≈ %28,6. Ed = 66,7 ÷ 28,6 ≈ 2,33 → *elastic* (eğrinin üst yarısı). 1,0 eğimin mutlak değeridir; eğim ≠ esneklik. 1,5 B'yi başlangıç alan basit yüzdeyle çıkar, 0,43 oranı ters çevirmektir.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity",
            "ylabel": "Price",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  10
                ],
                "to": [
                  10,
                  0
                ],
                "label": "D"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 8,
                "label": "A",
                "guides": true
              },
              {
                "q": 4,
                "p": 6,
                "label": "B",
                "guides": true
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
            ],
            "xticks": [
              {
                "v": 2,
                "label": "2"
              },
              {
                "v": 4,
                "label": "4"
              }
            ]
          }
        },
        {
          "t": "2.3-2",
          "q": "A city bus company raises its fares by 10 percent, and its total revenue from fares falls. Which of the following must be true over this price range?",
          "o": [
            "The quantity of rides demanded fell by less than 10 percent.",
            "The demand for bus rides is price inelastic.",
            "The quantity of rides demanded fell by more than 10 percent.",
            "The demand curve for bus rides shifted to the left."
          ],
          "a": 2,
          "w": "Fiyat arttı, TR düştü: ters yön → *elastic*. Bunun olması için miktardaki yüzde düşüşün fiyattaki %10'luk artıştan büyük olması gerekir. Talep *inelastic* olsaydı TR artardı. Fiyatın kendisi talep eğrisini kaydırmaz; bu eğri boyunca bir harekettir."
        },
        {
          "t": "2.3-2",
          "q": "A firm currently charges a price at which the demand for its product is price inelastic. If the firm wants to increase its profit, it should",
          "o": [
            "keep its price, because a price change cannot affect total revenue when demand is inelastic",
            "lower its price, because total revenue will rise as quantity demanded increases",
            "lower its price, because inelastic demand means quantity will not change",
            "raise its price, because total revenue will rise while the cost of producing fewer units falls"
          ],
          "a": 3,
          "w": "*Inelastic* talepte fiyat ve TR aynı yönde hareket eder: fiyat ↑ → TR ↑. Üstelik daha az birim satıldığı için toplam üretim maliyeti düşer. Gelir artıp maliyet düştüğü için kâr artar. Fiyat indirimi inelastic bölgede TR'yi düşürür."
        },
        {
          "t": "2.3-2",
          "q": "The graph shows a linear demand curve for concert T-shirts. At what price is the seller's total revenue maximized?",
          "o": [
            "10 TL",
            "25 TL",
            "35 TL",
            "50 TL"
          ],
          "a": 1,
          "w": "Doğrusal talepte TR, eğrinin orta noktasında, yani *unit elastic* noktada en büyüktür. Eğri 50 TL ile 200 tişört arasında: orta nokta P = 25 TL, Q = 100 → TR = 2.500 TL. Bunun üstünde talep *elastic* (fiyat indirimi TR'yi artırır), altında *inelastic*. 50 TL'de hiç satış olmaz, TR = 0.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity of T-shirts",
            "ylabel": "Price (TL)",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  10
                ],
                "to": [
                  10,
                  0
                ],
                "label": "D"
              }
            ],
            "yticks": [
              {
                "v": 5,
                "label": "25"
              },
              {
                "v": 10,
                "label": "50"
              }
            ],
            "xticks": [
              {
                "v": 5,
                "label": "100"
              },
              {
                "v": 10,
                "label": "200"
              }
            ]
          }
        },
        {
          "t": "2.4",
          "q": "The demand for good A and the demand for good B each increase by the same amount. The supply of good A is very price elastic, and the supply of good B is very price inelastic. Compared with the market for good B, the market for good A will experience",
          "o": [
            "a larger increase in quantity and a smaller increase in price",
            "a smaller increase in quantity and a larger increase in price",
            "a larger increase in both quantity and price",
            "the same changes in price and quantity, because the demand shifts are equal"
          ],
          "a": 0,
          "w": "Arz *elastic* ise üreticiler miktarı kolayca artırır: talep artışı çoğunlukla miktara, azı fiyata yansır (A). Arz *inelastic* ise miktar zor artar, uyum fiyatla olur (B). Talep kaymaları eşit olsa da sonuçları arz eğrisinin şekli belirler."
        },
        {
          "t": "2.5",
          "q": "When the price of game consoles falls from 4,000 TL to 3,000 TL, the quantity of video games demanded rises from 500 to 700 per week. Using the midpoint method, what is the cross-price elasticity of demand for video games with respect to the price of consoles?",
          "o": [
            "−0.86; the goods are complements",
            "1.17; the goods are substitutes",
            "−1.17; the goods are complements",
            "1.17; the goods are complements"
          ],
          "a": 2,
          "w": "%ΔQ(oyun) = 200 ÷ 600 ≈ +%33,3; %ΔP(konsol) = −1.000 ÷ 3.500 ≈ −%28,6. *Cross-price elasticity* = 33,3 ÷ (−28,6) ≈ −1,17. İşaret korunur: negatif → *complements* (konsol ucuzlayınca oyun talebi artıyor). −0,86 oranı ters çevirmektir. Pozitif bir değer ikame anlamına gelirdi."
        },
        {
          "t": "2.5",
          "q": "The table shows the income elasticity of demand for three goods. Suppose consumers' incomes fall by 10 percent, all else equal. Consider the following statements.\nI. The quantity of taxi rides demanded falls by 16 percent.\nII. The quantity of bread demanded rises by 3 percent.\nIII. The quantity of instant noodles demanded rises by 7 percent.\nWhich of the statements are correct?",
          "o": [
            "I only",
            "II only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "%ΔQ = *income elasticity* × %ΔGelir. Taksi: 1,6 × (−10) = −%16 → I doğru. Ekmek: 0,3 × (−10) = −%3; ekmek normal mal olduğu için gelir düşünce talep düşer, artmaz → II yanlış. Hazır erişte: −0,7 × (−10) = +%7 → III doğru (*inferior good*).",
          "fig": {
            "type": "table",
            "head": [
              "Good",
              "Income elasticity of demand"
            ],
            "rows": [
              [
                "Taxi rides",
                1.6
              ],
              [
                "Bread",
                0.3
              ],
              [
                "Instant noodles",
                -0.7
              ]
            ]
          }
        },
        {
          "t": "2.6-1",
          "q": "The demand and supply for scarves in a market are given by Qd = 120 − 2P and Qs = 3P − 30, where P is the price in TL. What are the equilibrium price and quantity?",
          "o": [
            "P = 60 TL and Q = 30",
            "P = 20 TL and Q = 80",
            "P = 30 TL and Q = 90",
            "P = 30 TL and Q = 60"
          ],
          "a": 3,
          "w": "Dengede Qd = Qs: 120 − 2P = 3P − 30 → 150 = 5P → P = 30 TL. Q = 120 − 2 × 30 = 60 (kontrol: 3 × 30 − 30 = 60). 20 TL'de Qd = 80 ama Qs = 30: kıtlık var, denge değil. 90, 30 TL'yi talep yerine yanlış denklemde kullanmaktır."
        },
        {
          "t": "2.6-2",
          "q": "The graph shows the market for lemonade. Demand increases from D1 to D2 while supply S does not change. By how much does producer surplus increase?",
          "o": [
            "250 TL",
            "450 TL",
            "500 TL",
            "1,250 TL"
          ],
          "a": 1,
          "w": "Başlangıç E1: P = 40, Q = 40 → PS = ½ × 40 × 40 = 800 TL. Yeni E2: P = 50, Q = 50 → PS = ½ × 50 × 50 = 1.250 TL. Artış = 1.250 − 800 = 450 TL. 1.250 TL yeni artığın tamamıdır, değişim değil. Talep artınca üreticiler hem daha yüksek fiyattan hem daha çok birim satar.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity of cups",
            "ylabel": "Price (TL)",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  9.5,
                  9.5
                ],
                "label": "S"
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
                "label": "D1"
              },
              {
                "from": [
                  0,
                  10
                ],
                "to": [
                  10,
                  0
                ],
                "label": "D2",
                "dash": true
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 4,
                "label": "E1",
                "guides": true
              },
              {
                "q": 5,
                "p": 5,
                "label": "E2",
                "guides": true
              }
            ],
            "yticks": [
              {
                "v": 4,
                "label": "40"
              },
              {
                "v": 5,
                "label": "50"
              }
            ],
            "xticks": [
              {
                "v": 4,
                "label": "40"
              },
              {
                "v": 5,
                "label": "50"
              }
            ]
          }
        },
        {
          "t": "2.6-2",
          "q": "In a competitive market, a government program causes firms to produce a quantity greater than the equilibrium quantity. For the extra units produced beyond equilibrium, which of the following is true?",
          "o": [
            "The marginal cost of producing each extra unit is greater than its marginal benefit to buyers, so a deadweight loss results.",
            "The marginal benefit to buyers of each extra unit is greater than its marginal cost, so total surplus rises.",
            "Consumer surplus and producer surplus both rise, so total surplus rises.",
            "There is no deadweight loss, because more of the good is available to consumers."
          ],
          "a": 0,
          "w": "Dengenin sağında arz eğrisi (marjinal maliyet) talep eğrisinin (marjinal fayda) üstündedir. Her ek birim, alıcının ona verdiği değerden pahalıya üretilir; bu fark bir kayıptır: *deadweight loss* (fazla üretim üçgeni). Daha çok mal olması verimlilik demek değildir; verimlilik değer = maliyet noktasındadır."
        },
        {
          "t": "2.7",
          "q": "In the market for laptops, demand increases while supply increases by a much larger amount. Compared with the original equilibrium, which of the following is true?",
          "o": [
            "Price decreases and quantity decreases.",
            "Price increases and quantity increases.",
            "Price decreases and quantity increases.",
            "Price increases and quantity decreases."
          ],
          "a": 2,
          "w": "İki artış da miktarı yükseltir → Q ↑. Fiyatta talep artışı yukarı, arz artışı aşağı çeker; soru büyüklükleri verdi: arzın kayması çok daha büyük, yani aşağı etki baskın → P ↓. Büyüklük verilmeseydi fiyat *indeterminate* olurdu."
        },
        {
          "t": "2.7",
          "q": "Coffee and sugar are complements. A drought in coffee-growing regions sharply reduces the supply of coffee. What happens to the equilibrium price and quantity of sugar?",
          "o": [
            "Price decreases and quantity increases.",
            "Price increases and quantity increases.",
            "Price increases and quantity decreases.",
            "Price decreases and quantity decreases."
          ],
          "a": 3,
          "w": "Kahve piyasası: arz ↓ → kahve fiyatı ↑, kahve miktarı ↓. Şeker kahveyle birlikte kullanılır; kahvenin pahalanması şeker talebini azaltır. Şeker piyasası: talep sola kayar → P ↓, Q ↓. Kuraklık doğrudan şekerin arzını etkilemez."
        },
        {
          "t": "2.8-1",
          "q": "The graph shows the market for electricity in a small town. The government imposes a price ceiling of 40 TL per unit. Compared with the free-market equilibrium, consumer surplus changes by what amount, and what is the deadweight loss?",
          "o": [
            "Consumer surplus increases by 2,000 TL; deadweight loss is 4,000 TL.",
            "Consumer surplus decreases by 2,000 TL; deadweight loss is 4,000 TL.",
            "Consumer surplus increases by 4,000 TL; deadweight loss is 2,000 TL.",
            "Consumer surplus increases by 2,000 TL; deadweight loss is 8,000 TL."
          ],
          "a": 0,
          "w": "Denge 60 TL, 400 birim: CS = ½ × 400 × 40 = 8.000 TL. Tavanda satılan miktar Qs = 200; 200. birimin alıcıya değeri 80 TL. Yeni CS = ½ × 200 × (100 − 80) + 200 × (80 − 40) = 2.000 + 8.000 = 10.000 TL → +2.000 TL. *Deadweight loss* = ½ × (400 − 200) × (80 − 40) = 4.000 TL. Sağlama: PS 8.000 → 2.000; toplam artık 16.000 → 12.000, fark 4.000. 8.000 TL ½'yi unutmaktır.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity (units)",
            "ylabel": "Price (TL)",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  10
                ],
                "to": [
                  10,
                  0
                ],
                "label": "D"
              },
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  8,
                  10
                ],
                "label": "S"
              }
            ],
            "hlines": [
              {
                "p": 4,
                "label": "Ceiling"
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 6,
                "label": "E",
                "guides": true
              },
              {
                "q": 2,
                "p": 8,
                "label": "F",
                "guides": true
              }
            ],
            "yticks": [
              {
                "v": 2,
                "label": "20"
              },
              {
                "v": 4,
                "label": "40"
              },
              {
                "v": 6,
                "label": "60"
              },
              {
                "v": 8,
                "label": "80"
              },
              {
                "v": 10,
                "label": "100"
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
              }
            ]
          }
        },
        {
          "t": "2.8-2",
          "q": "The market for a good is described by Qd = 200 − 2P and Qs = 3P − 50, where P is in TL. The government imposes a tax of 10 TL per unit on sellers. How much of the tax per unit is paid by buyers, and how much tax revenue does the government collect?",
          "o": [
            "Buyers pay 4 TL per unit; revenue is 880 TL.",
            "Buyers pay 6 TL per unit; revenue is 880 TL.",
            "Buyers pay 6 TL per unit; revenue is 1,000 TL.",
            "Buyers pay 10 TL per unit; revenue is 880 TL."
          ],
          "a": 1,
          "w": "Vergisiz: 200 − 2P = 3P − 50 → P = 50, Q = 100. Vergiyle satıcının eline P − 10 kalır: Qs = 3(P − 10) − 50 = 3P − 80. 200 − 2P = 3P − 80 → alıcı fiyatı 56 TL, satıcının aldığı 46 TL, Q = 88. Alıcılar 6 TL, satıcılar 4 TL öder. Neden? Dengede Ed = 2 × 50 ÷ 100 = 1, Es = 3 × 50 ÷ 100 = 1,5: talep daha *inelastic*, kaçamayan öder. Gelir = 10 × 88 = 880 TL; 1.000 TL eski miktarla hesaplanır."
        },
        {
          "t": "2.9",
          "q": "The graph shows the domestic market for rice, with a world price of 20 TL per kilogram. The government imposes a tariff of 10 TL per kilogram. What are the government's tariff revenue and the total deadweight loss caused by the tariff?",
          "o": [
            "Revenue of 40,000 TL; deadweight loss of 10,000 TL",
            "Revenue of 60,000 TL; deadweight loss of 10,000 TL",
            "Revenue of 40,000 TL; deadweight loss of 5,000 TL",
            "Revenue of 70,000 TL; no deadweight loss"
          ],
          "a": 0,
          "w": "Tarifeyle fiyat 20 + 10 = 30 TL: Qd = 7.000 kg, Qs = 3.000 kg, *imports* = 4.000 kg. Tarife geliri = 10 × 4.000 = 40.000 TL. İki DWL üçgeni: üretim tarafı ½ × (3.000 − 2.000) × 10 = 5.000 TL, tüketim tarafı ½ × (8.000 − 7.000) × 10 = 5.000 TL; toplam 10.000 TL. 60.000 TL eski ithalatla (6.000) hesaplanır; tek üçgen 5.000 TL'dir.",
          "fig": {
            "type": "graph",
            "xlabel": "Rice (thousands of kg)",
            "ylabel": "Price (TL per kg)",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  10
                ],
                "to": [
                  10,
                  0
                ],
                "label": "Dd"
              },
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  9.5,
                  9.5
                ],
                "label": "Sd"
              }
            ],
            "hlines": [
              {
                "p": 2,
                "label": "Pw"
              },
              {
                "p": 3,
                "label": "Pw + tariff"
              }
            ],
            "yticks": [
              {
                "v": 2,
                "label": "20"
              },
              {
                "v": 3,
                "label": "30"
              },
              {
                "v": 5,
                "label": "50"
              }
            ],
            "xticks": [
              {
                "v": 2,
                "label": "2"
              },
              {
                "v": 3,
                "label": "3"
              },
              {
                "v": 7,
                "label": "7"
              },
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
          "t": "2.1-1",
          "q": "A newspaper reports: \"When concert ticket prices fell, demand increased, and this increase in demand then pushed ticket prices back up.\" Which of the following best identifies the error in this reasoning?",
          "o": [
            "A fall in the ticket price causes an increase in quantity demanded, a movement along the demand curve, not an increase in demand.",
            "A fall in the ticket price shifts the supply curve, not the demand curve.",
            "An increase in demand always lowers the equilibrium price.",
            "Ticket prices cannot change unless consumers' incomes change."
          ],
          "a": 0,
          "w": "Fiyat düşünce talep eğrisi kaymaz; aynı eğri üzerinde aşağı inilir ve *quantity demanded* artar. \"Talep arttı, fiyat yükseldi\" döngüsü bir eğri boyunca hareketi kaymayla karıştırır. Fiyat kendi eğrisini asla kaydırmaz; talep artışı fiyatı düşürmez, yükseltir."
        },
        {
          "t": "2.1-2",
          "q": "Wine and cheese are complements, and beer is a substitute for wine. If the price of beer falls sharply, what will most likely happen to the equilibrium price and quantity of cheese?",
          "o": [
            "Price decreases and quantity increases.",
            "Both increase.",
            "Price increases and quantity decreases.",
            "Both decrease."
          ],
          "a": 3,
          "w": "Zincir: bira ucuzladı → ikamesi şarabın talebi ↓ → şarapla birlikte tüketilen peynirin talebi ↓. Peynir piyasasında talep sola kayar: P ↓, Q ↓. Peynirin arzını değiştiren bir şey yok. İki adımlı ilişkilerde her adımda tek bir kural uygula."
        },
        {
          "t": "2.2",
          "q": "Farmers can use the same land to grow either wheat or corn. If the price of corn rises sharply, what will most likely happen in the market for wheat?",
          "o": [
            "The supply of wheat decreases.",
            "The supply of wheat increases.",
            "The quantity of wheat supplied increases along the supply curve.",
            "The demand for wheat decreases, shifting the supply curve to the left."
          ],
          "a": 0,
          "w": "Üretimde birbirinin yerine geçen mallar: mısırın fiyatı artınca mısır ekmek daha kârlı olur, çiftçiler araziyi mısıra kaydırır. Her buğday fiyatında daha az buğday sunulur: buğdayın arzı sola kayar (*prices of other goods* belirleyicisi). Buğdayın kendi fiyatı değişmedi, eğri boyunca hareket yok."
        },
        {
          "t": "2.3-1",
          "q": "A stationery store raises the price of a pen from 18 TL, and the quantity sold falls from 450 to 350 pens per week. Using the midpoint method, the price elasticity of demand over this range is 1.25. What is the new price of the pen?",
          "o": [
            "20.00 TL",
            "21.60 TL",
            "22.00 TL",
            "22.50 TL"
          ],
          "a": 2,
          "w": "%ΔQ = 100 ÷ 400 = %25 → %ΔP = 25 ÷ 1,25 = %20 (midpoint). (P2 − 18) ÷ ((P2 + 18) ÷ 2) = 0,20 → P2 − 18 = 0,1 P2 + 1,8 → 0,9 P2 = 19,8 → P2 = 22 TL. Sağlama: 4 ÷ 20 = %20. 21,60 TL, %20'yi başlangıç fiyatına uygulamaktır; midpoint yöntemiyle tutarlı değildir."
        },
        {
          "t": "2.3-2",
          "q": "The table shows the demand schedule for a food truck's wraps. Consider the following statements.\nI. Between 50 TL and 40 TL, demand is unit elastic.\nII. Between 40 TL and 30 TL, demand is elastic.\nIII. Between 30 TL and 20 TL, demand is inelastic.\nWhich of the statements are correct?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II, and III"
          ],
          "a": 3,
          "w": "TR = 1.000, 1.000, 1.200, 1.000 TL. 50 → 40: TR sabit → *unit elastic* (midpoint ile de 22,2 ÷ 22,2 = 1). 40 → 30: fiyat düşerken TR artıyor → *elastic* (≈ 1,6). 30 → 20: fiyat düşerken TR azalıyor → *inelastic* (≈ 0,56). Üç ifade de doğru. Bu tablo doğrusal değil; esneklik yine de aralık aralık değişir.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Wraps sold per day",
              "Total revenue (TL)"
            ],
            "rows": [
              [
                50,
                20,
                1000
              ],
              [
                40,
                25,
                1000
              ],
              [
                30,
                40,
                1200
              ],
              [
                20,
                50,
                1000
              ]
            ]
          }
        },
        {
          "t": "2.3-2",
          "q": "Two straight-line demand curves, D1 and D2, are parallel, and D2 lies to the right of D1. At a given price that both curves include, how do their price elasticities of demand compare?",
          "o": [
            "Demand is less elastic on D1, because D1 is closer to the origin.",
            "Demand is more elastic on D2, because the quantity demanded at that price is larger.",
            "The elasticities are equal, because the curves have the same slope.",
            "Demand is less elastic on D2, because the quantity demanded at that price is larger."
          ],
          "a": 3,
          "w": "Esneklik = (ΔQ ÷ ΔP) × (P ÷ Q). Eğriler paralel: ΔQ ÷ ΔP aynı. Aynı fiyatta D2'de Q daha büyük → P ÷ Q daha küçük → esneklik daha düşük. Eğimin aynı olması esnekliklerin aynı olduğu anlamına gelmez: eğim ≠ esneklik."
        },
        {
          "t": "2.4",
          "q": "The table shows how the quantity of olives supplied responds when the price rises from 40 TL to 60 TL per kilogram, in the short run and in the long run. Using the midpoint method, which of the following correctly describes the price elasticity of supply?",
          "o": [
            "Short run: 0.20, inelastic; long run: 1.20, elastic",
            "Short run: 0.24, inelastic; long run: 1.15, elastic",
            "Short run: 4.2, elastic; long run: 0.87, inelastic",
            "Short run: 0.24, elastic; long run: 1.15, inelastic"
          ],
          "a": 1,
          "w": "%ΔP = 20 ÷ 50 = %40. Kısa vade: %ΔQ = 20 ÷ 210 ≈ %9,5 → Es ≈ 0,24 (*inelastic*). Uzun vade: %ΔQ = 120 ÷ 260 ≈ %46,2 → Es ≈ 1,15 (*elastic*). Zeytin ağacı dikip büyütmek yıllar alır: zaman geçtikçe arz esnekleşir. 0,20 ve 1,20 başlangıç değerleriyle; 4,2 ve 0,87 oranı ters çevirerek bulunur.",
          "fig": {
            "type": "table",
            "head": [
              "Period",
              "Quantity at 40 TL (tons)",
              "Quantity at 60 TL (tons)"
            ],
            "rows": [
              [
                "Short run",
                200,
                220
              ],
              [
                "Long run",
                200,
                320
              ]
            ]
          }
        },
        {
          "t": "2.5",
          "q": "The cross-price elasticity of demand for tennis balls with respect to the price of tennis rackets is −0.8, and the income elasticity of demand for tennis balls is 1.2. If the price of tennis rackets rises by 15 percent and consumers' incomes rise by 5 percent at the same time, the quantity of tennis balls demanded will change by approximately",
          "o": [
            "−18 percent",
            "−12 percent",
            "+6 percent",
            "−6 percent"
          ],
          "a": 3,
          "w": "Raket etkisi: −0,8 × 15 = −%12 (*complements*: raket pahalanınca top talebi düşer). Gelir etkisi: 1,2 × 5 = +%6 (*normal good*). Yaklaşık toplam: −12 + 6 = −%6. −%12 yalnız fiyat etkisidir, gelir etkisini atlar; −%18 gelir etkisinin işaretini yanlış alır."
        },
        {
          "t": "2.5",
          "q": "During a recession, consumers' incomes fall by 4 percent. The income elasticity of demand is −0.5 for good X and 2.5 for good Y. Which of the following is correct?",
          "o": [
            "The quantity demanded of X rises by 2 percent, and the quantity demanded of Y falls by 10 percent.",
            "The quantity demanded of X falls by 2 percent, and the quantity demanded of Y falls by 10 percent.",
            "The quantity demanded of X rises by 2 percent, and the quantity demanded of Y rises by 10 percent.",
            "The quantity demanded of X falls by 8 percent, and the quantity demanded of Y falls by 1.6 percent."
          ],
          "a": 0,
          "w": "X: −0,5 × (−4) = +%2 (*inferior good*, durgunlukta satışı artar). Y: 2,5 × (−4) = −%10 (*luxury*, gelirden daha hızlı düşer). Son şık oranları ters çevirir (4 ÷ 0,5 ve 4 ÷ 2,5). Durgunlukta lüks mal satıcıları en çok, *inferior* mal satıcıları en az etkilenir."
        },
        {
          "t": "2.6-1",
          "q": "The demand and supply for a good are Qd = 90 − 3P and Qs = 2P − 10, where P is the price in TL. If the price is currently 24 TL, which of the following describes the market?",
          "o": [
            "There is a shortage of 20 units, and the price will tend to rise.",
            "There is a surplus of 20 units, and the price will tend to fall toward 20 TL.",
            "There is a surplus of 38 units, and the price will tend to fall toward 20 TL.",
            "The market is in equilibrium at 24 TL."
          ],
          "a": 1,
          "w": "Denge: 90 − 3P = 2P − 10 → P = 20 TL, Q = 30. 24 TL'de Qd = 90 − 72 = 18, Qs = 48 − 10 = 38. Qs > Qd → *surplus* = 38 − 18 = 20. Satılamayan stoklar fiyatı dengeye, 20 TL'ye doğru indirir. 38 arz edilen miktardır, fazla değil."
        },
        {
          "t": "2.6-2",
          "q": "The table shows the willingness to pay of four buyers and the minimum acceptable prices (costs) of four sellers of used bicycles. Each buyer wants at most one bicycle, and each seller has one bicycle. What is the maximum possible total surplus in this market?",
          "o": [
            "60 TL",
            "80 TL",
            "120 TL",
            "240 TL"
          ],
          "a": 2,
          "w": "Toplam artığı en büyük yapmak için en yüksek değerli alıcılar en düşük maliyetli satıcılarla eşleşir: (100, 20) → 80, (80, 40) → 40, (60, 60) → 0. Toplam 120 TL. Dördüncü işlem (40 değerli alıcı, 80 maliyetli satıcı) −40 ekler; dördü de satılırsa toplam 80 TL'ye düşer. 60 TL yalnız CS'dir (60 TL fiyatta), 240 TL ilk üç alıcının WTP toplamıdır.",
          "fig": {
            "type": "table",
            "head": [
              "",
              "Person 1",
              "Person 2",
              "Person 3",
              "Person 4"
            ],
            "rows": [
              [
                "Buyer's willingness to pay (TL)",
                100,
                80,
                60,
                40
              ],
              [
                "Seller's minimum price (TL)",
                20,
                40,
                60,
                80
              ]
            ]
          }
        },
        {
          "t": "2.6-2",
          "q": "The graph shows the market for paper calendars. As more people use phone calendars, demand falls from D1 to D2. Consider the following statements.\nI. Consumer surplus falls by 3,500 TL.\nII. Producer surplus falls by 3,500 TL.\nIII. The market now has a deadweight loss of 7,000 TL.\nWhich of the statements are correct?",
          "o": [
            "I only",
            "III only",
            "I and II only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "E1 (60 TL, 400): CS = ½ × 400 × 40 = 8.000, PS = ½ × 400 × 40 = 8.000. E2 (50 TL, 300): CS = ½ × 300 × 30 = 4.500, PS = ½ × 300 × 30 = 4.500. İkisi de 3.500 TL düşer → I ve II doğru. III yanlış: piyasa yeni dengesinde, son birimde değer = maliyet. Küçülen piyasa *deadweight loss* değildir; DWL ancak piyasa dengeden uzak tutulursa oluşur.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity of calendars",
            "ylabel": "Price (TL)",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  8,
                  10
                ],
                "label": "S"
              },
              {
                "from": [
                  0,
                  10
                ],
                "to": [
                  10,
                  0
                ],
                "label": "D1"
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
                "label": "D2",
                "dash": true
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 6,
                "label": "E1",
                "guides": true
              },
              {
                "q": 3,
                "p": 5,
                "label": "E2",
                "guides": true
              }
            ],
            "yticks": [
              {
                "v": 2,
                "label": "20"
              },
              {
                "v": 5,
                "label": "50"
              },
              {
                "v": 6,
                "label": "60"
              },
              {
                "v": 8,
                "label": "80"
              },
              {
                "v": 10,
                "label": "100"
              }
            ],
            "xticks": [
              {
                "v": 3,
                "label": "300"
              },
              {
                "v": 4,
                "label": "400"
              }
            ]
          }
        },
        {
          "t": "2.7",
          "q": "In the market for electric scooters, the government begins paying producers a per-unit subsidy. At the same time, the price of bicycles, a substitute for electric scooters, falls sharply. What happens to the equilibrium price and quantity of electric scooters?",
          "o": [
            "Price decreases and quantity increases.",
            "Quantity increases, and the change in price is indeterminate.",
            "Price increases, and the change in quantity is indeterminate.",
            "Price decreases, and the change in quantity is indeterminate."
          ],
          "a": 3,
          "w": "Sübvansiyon → scooter arzı ↑ (P ↓, Q ↑). Bisiklet ucuzladı → ikame olan scooter'ın talebi ↓ (P ↓, Q ↓). Fiyat iki etkide de düşer → kesin. Miktarda etkiler zıt → *indeterminate*. Çift kaymada önce her kaymayı ayrı ayrı yaz, sonra aynı yönlü olanı seç."
        },
        {
          "t": "2.7",
          "q": "The demand and supply for a good are Qd = 100 − 2P and Qs = 2P − 20, where P is the price in TL. A rise in consumer incomes increases the quantity demanded by 20 units at every price. What are the new equilibrium price and quantity?",
          "o": [
            "P = 30 TL and Q = 60",
            "P = 35 TL and Q = 40",
            "P = 35 TL and Q = 50",
            "P = 40 TL and Q = 60"
          ],
          "a": 2,
          "w": "Başlangıç: 100 − 2P = 2P − 20 → P = 30, Q = 40. Yeni talep Qd = 120 − 2P: 120 − 2P = 2P − 20 → P = 35 TL, Q = 120 − 70 = 50 (kontrol: 2 × 35 − 20 = 50). Miktar 20 değil 10 artar, çünkü fiyatın yükselmesi talep edilen miktarın bir kısmını geri alır. \"30 TL ve 60\" fiyatın değişmediğini varsayar."
        },
        {
          "t": "2.8-1",
          "q": "The graph shows the market for a species of fish. To protect the species, the government sets a quota that limits the quantity sold to 200 units. What are the quota rent and the deadweight loss caused by the quota?",
          "o": [
            "Quota rent of 4,000 TL; deadweight loss of 4,000 TL",
            "Quota rent of 8,000 TL; deadweight loss of 4,000 TL",
            "Quota rent of 8,000 TL; deadweight loss of 2,000 TL",
            "Quota rent of 14,000 TL; deadweight loss of 4,000 TL"
          ],
          "a": 1,
          "w": "Kotada (*quantity control*) 200 birim satılır. Alıcılar 200. birim için 70 TL öder (talep fiyatı), satıcının maliyeti 30 TL (arz fiyatı). *Quota rent* = (70 − 30) × 200 = 8.000 TL; kota hakkı sahiplerine gider. *Deadweight loss* = ½ × (400 − 200) × (70 − 30) = 4.000 TL. 4.000 TL rant yalnız dengeye göre fiyat artışıdır (70 − 50), 14.000 TL alıcıların toplam ödemesidir.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity of fish (units)",
            "ylabel": "Price (TL)",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  9
                ],
                "to": [
                  9,
                  0
                ],
                "label": "D"
              },
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  8.5,
                  9.5
                ],
                "label": "S"
              },
              {
                "from": [
                  2,
                  0
                ],
                "to": [
                  2,
                  9.5
                ],
                "label": "Quota",
                "dash": true
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
                "label": "F"
              },
              {
                "q": 2,
                "p": 3,
                "label": "G"
              }
            ],
            "yticks": [
              {
                "v": 3,
                "label": "30"
              },
              {
                "v": 5,
                "label": "50"
              },
              {
                "v": 7,
                "label": "70"
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
              }
            ]
          }
        },
        {
          "t": "2.8-1",
          "q": "In the market for hazelnuts, Qd = 600 − 2P and Qs = 3P − 150, where P is the price in TL per box and quantities are in boxes. The government sets a price floor of 200 TL per box and buys all the hazelnuts that are not sold to consumers. How many boxes does the government buy, and how much does it spend?",
          "o": [
            "250 boxes; 37,500 TL",
            "250 boxes; 50,000 TL",
            "450 boxes; 90,000 TL",
            "100 boxes; 20,000 TL"
          ],
          "a": 1,
          "w": "Denge: 600 − 2P = 3P − 150 → P = 150 TL. Taban 200 TL dengenin üstünde: *binding*. 200 TL'de Qd = 200, Qs = 450 → *surplus* = 250 kutu. Devlet fazlayı 200 TL'den alır: 250 × 200 = 50.000 TL. 37.500 TL denge fiyatıyla (150) yapılan hatadır, 450 kutu üretimin tamamıdır, 100 kutu ise yalnız tüketimdeki düşüştür (300 → 200)."
        },
        {
          "t": "2.8-2",
          "q": "The graph shows the market for soft drinks. A per-unit tax on sellers shifts supply from S1 to S2. Consider the following statements.\nI. Buyers bear 80 percent of the tax.\nII. The government's tax revenue is 10,000 TL.\nIII. The deadweight loss of the tax is 10,000 TL.\nWhich of the statements are correct?",
          "o": [
            "I only",
            "II only",
            "I and II only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "Vergisiz denge E1: 40 TL ve 400. Vergiyle E2: alıcı fiyatı 80 TL, Q = 200; aynı miktarda S1'e göre satıcının eline kalan 30 TL. Vergi = dikey mesafe = 80 − 30 = 50 TL. Alıcı payı (80 − 40) ÷ 50 = %80 → I doğru: talep dik (*inelastic*), kaçamayan öder. Gelir = 50 × 200 = 10.000 TL → II doğru. DWL = ½ × (400 − 200) × 50 = 5.000 TL → III yanlış (10.000 TL ½'yi unutur).",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity",
            "ylabel": "Price (TL)",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  1,
                  10
                ],
                "to": [
                  6,
                  0
                ],
                "label": "D"
              },
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  10,
                  7
                ],
                "label": "S1"
              },
              {
                "from": [
                  0,
                  7
                ],
                "to": [
                  6,
                  10
                ],
                "label": "S2",
                "dash": true
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 4,
                "label": "E1",
                "guides": true
              },
              {
                "q": 2,
                "p": 8,
                "label": "E2",
                "guides": true
              },
              {
                "q": 2,
                "p": 3,
                "guides": true
              }
            ],
            "yticks": [
              {
                "v": 3,
                "label": "30"
              },
              {
                "v": 4,
                "label": "40"
              },
              {
                "v": 8,
                "label": "80"
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
              }
            ]
          }
        },
        {
          "t": "2.8-2",
          "q": "The market for school bus rides is described by Qd = 100 − P and Qs = P − 20, where P is in TL and quantities are in thousands of rides. The government pays sellers a subsidy of 10 TL per ride. What price do riders pay, and how much does the subsidy cost the government?",
          "o": [
            "Riders pay 55 TL; the subsidy costs 450 thousand TL.",
            "Riders pay 50 TL; the subsidy costs 450 thousand TL.",
            "Riders pay 55 TL; the subsidy costs 400 thousand TL.",
            "Riders pay 65 TL; the subsidy costs 450 thousand TL."
          ],
          "a": 0,
          "w": "Sübvansiyonsuz: 100 − P = P − 20 → P = 60, Q = 40. Sübvansiyonla satıcının eline P + 10 geçer: Qs = P − 10. 100 − P = P − 10 → yolcunun ödediği 55 TL, satıcının aldığı 65 TL, Q = 45 bin. Maliyet = 10 × 45 = 450 bin TL. 400 bin eski miktarla, 50 TL sübvansiyonun tamamen alıcıya geçtiği varsayımıyla bulunur; 65 TL satıcının fiyatıdır."
        },
        {
          "t": "2.9",
          "q": "The graph shows the domestic market for a country's apricots. The country opens to free trade, and the world price is 70 TL per kilogram. Consider the following statements.\nI. The country exports 4,000 kilograms.\nII. Consumer surplus falls by 80,000 TL.\nIII. Total surplus in the country decreases by 40,000 TL.\nWhich of the statements are correct?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II, and III"
          ],
          "a": 1,
          "w": "*World price* 70 TL > yurt içi denge 50 TL: ülke ihracatçı. 70 TL'de Qd = 3.000, Qs = 7.000 → *exports* = 4.000 kg (I doğru). CS: ½ × 5.000 × 50 = 125.000 → ½ × 3.000 × 30 = 45.000; düşüş 80.000 TL (II doğru). PS 125.000 → 245.000; artış 120.000 TL. Toplam artık ½ × 4.000 × 20 = 40.000 TL **artar**, azalmaz → III yanlış.",
          "fig": {
            "type": "graph",
            "xlabel": "Apricots (thousands of kg)",
            "ylabel": "Price (TL per kg)",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  10
                ],
                "to": [
                  10,
                  0
                ],
                "label": "Dd"
              },
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  9.5,
                  9.5
                ],
                "label": "Sd"
              }
            ],
            "hlines": [
              {
                "p": 7,
                "label": "World price"
              }
            ],
            "yticks": [
              {
                "v": 5,
                "label": "50"
              },
              {
                "v": 7,
                "label": "70"
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
                "v": 7,
                "label": "7"
              }
            ]
          }
        },
        {
          "t": "2.9",
          "q": "A country can restrict imports of a good either with a tariff or with an import quota set so that both policies lead to the same domestic price and the same quantity of imports. Which of the following is the main difference between the two policies?",
          "o": [
            "With the quota, the revenue that the tariff would raise goes instead to the holders of import licenses as quota rent.",
            "The quota causes a smaller deadweight loss than the tariff because no tax is collected.",
            "The quota raises consumer surplus, while the tariff lowers it.",
            "With the quota, domestic producers sell less than with the tariff."
          ],
          "a": 0,
          "w": "Fiyat ve ithalat aynıysa CS, PS ve iki DWL üçgeni de aynıdır. Tek fark gri dikdörtgenin kime gittiği: tarifede devletin geliri, kotada ithalat lisansı sahiplerinin *quota rent*'i. Yerli üretim de iki politikada aynıdır, çünkü yurt içi fiyat aynı."
        }
      ]
    }
  ]
};
