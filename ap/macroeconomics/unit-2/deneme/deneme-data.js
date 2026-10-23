/* Bu dosya üretilir: ap-videolar/tools/build-deneme-data.mjs (elle düzenleme; kaynak: tools/out/deneme-macro-u2.json) */
window.DENEME = {
  "store": "macro-u2:v1:",
  "course": "AP Macroeconomics",
  "unit": "Unit 2 — Economic Indicators and the Business Cycle",
  "topics": {
    "2.1-1": "Ekonominin Çarkı: Circular Flow",
    "2.1-2": "GDP Nedir, Ne Sayılmaz?",
    "2.1-3": "GDP'yi Hesaplamak: C + I + G + Xn",
    "2.2": "GDP'nin Göremedikleri",
    "2.3-1": "İşsizliği Ölçmek",
    "2.3-2": "İşsizliğin Türleri ve Doğal Oran",
    "2.4": "Fiyat Endeksleri ve Enflasyon",
    "2.5": "Enflasyon Kime Zarar Verir?",
    "2.6": "Real ve Nominal GDP",
    "2.7": "İş Çevrimi"
  },
  "tests": [
    {
      "no": 1,
      "level": "Isınma",
      "minutes": 20,
      "questions": [
        {
          "t": "2.1-1",
          "q": "In the circular flow model, which of the following takes place in the factor (resource) market?",
          "o": [
            "Firms sell finished goods and services to households.",
            "Households buy labor services from firms.",
            "Households sell land, labor, and capital to firms.",
            "The government sells goods to firms in exchange for taxes."
          ],
          "a": 2,
          "w": "*Factor market*'te satıcı hane halkıdır: emeğini, arazisini, sermayesini firmalara satar ve karşılığında *wages, rent, interest, profit* alır. Bitmiş mal ve hizmetlerin satıldığı yer *product market*'tir. Emeği firmalar satın alır, hane halkı değil; en sık karıştırılan nokta budur."
        },
        {
          "t": "2.1-1",
          "q": "Which of the following is a money flow, rather than a real flow, in the circular flow model?",
          "o": [
            "Wages paid by firms to households",
            "Labor services supplied by households to firms",
            "Goods and services delivered by firms to households",
            "Entrepreneurial ability supplied by households to firms"
          ],
          "a": 0,
          "w": "*Money flow* paranın hareketidir: firmaların hane halkına ödediği ücret (*wages*) bir gelir akışıdır. Emek, mal-hizmet ve girişimcilik ise *real flow*'dur, yani gerçek kaynak ve ürün hareketi. Para ve gerçek akışlar her zaman birbirine ters yönde döner."
        },
        {
          "t": "2.1-2",
          "q": "Gross domestic product (GDP) is best defined as the",
          "o": [
            "total value of all goods and services sold in a country in a given year, including used goods",
            "market value of all final goods and services produced by a country's citizens anywhere in the world",
            "market value of all final goods and services produced within a country's borders in a given year",
            "total spending on both intermediate and final goods in a given year"
          ],
          "a": 2,
          "w": "*GDP* = belirli bir yılda, ülke sınırları içinde üretilen bütün *final goods and services*'in *market value*'su. Ölçüt sahiplik değil konumdur; vatandaşların yurt dışındaki üretimi sayılmaz. İkinci el mallar bu yılın üretimi değildir, ara mallar ise *double counting* yaratır."
        },
        {
          "t": "2.1-2",
          "q": "Which of the following would be included in this year's U.S. GDP?",
          "o": [
            "A new laptop produced in the United States this year and bought by a student",
            "A used car that one neighbor sells directly to another",
            "A share of stock that a family buys in an established company",
            "A Social Security check sent to a retired teacher"
          ],
          "a": 0,
          "w": "Bu yıl ABD'de üretilip satılan yeni dizüstü bilgisayar bir *final good*'dur ve *consumption* olarak sayılır. İkinci el araba geçmiş yılların üretimidir (*used goods*), hisse senedi bir *financial transaction*'dır, emekli maaşı ise bir *transfer payment*'tır: üçünde de yeni üretim yoktur."
        },
        {
          "t": "2.1-2",
          "q": "Which of the following is an intermediate good?",
          "o": [
            "A new oven that a bakery buys to bake simit",
            "A simit that a student buys for breakfast",
            "Flour that a bakery buys to make simit",
            "A newly built apartment that a family buys"
          ],
          "a": 2,
          "w": "*Intermediate good* başka bir malın içine girip onunla birlikte satılan maldır: un simidin içinde kaybolur, simit satılınca değeri zaten sayılmış olur. Fırın ise yıllarca kullanılan bir sermaye malıdır (*capital good*), *investment* olarak sayılır. Öğrencinin simidi ve yeni daire *final good*'dur."
        },
        {
          "t": "2.1-3",
          "q": "Using the expenditure approach, GDP is calculated as",
          "o": [
            "C + I + G + X + M",
            "C + S + G + (X − M)",
            "C + I + G + transfer payments + (X − M)",
            "C + I + G + (X − M)"
          ],
          "a": 3,
          "w": "*Expenditure approach*: *consumption* + *investment* + *government purchases* + *net exports* (X − M). İthalat başka ülkenin üretimi olduğu için çıkarılır, eklenmez. Tasarruf (S) harcama değildir; *transfer payments* de karşılığında üretim olmadığı için G'ye girmez."
        },
        {
          "t": "2.1-3",
          "q": "The table shows data for an economy. Based on the data, what is GDP?",
          "o": [
            "$830 billion",
            "$920 billion",
            "$1,010 billion",
            "$1,140 billion"
          ],
          "a": 1,
          "w": "GDP = C + I + G + (X − M) = 600 + 150 + 200 + (80 − 110) = 920 milyar $. *Transfer payments* hiç girmez: eklersen 1.010, çıkarırsan 830 bulursun. İthalatı eklemek (1.140) X − M'yi X + M sanmaktır.",
          "fig": {
            "type": "table",
            "head": [
              "Component",
              "Amount (billions of dollars)"
            ],
            "rows": [
              [
                "Consumption",
                600
              ],
              [
                "Gross private domestic investment",
                150
              ],
              [
                "Government purchases of goods and services",
                200
              ],
              [
                "Government transfer payments",
                90
              ],
              [
                "Exports",
                80
              ],
              [
                "Imports",
                110
              ]
            ]
          }
        },
        {
          "t": "2.2",
          "q": "Which of the following produces something of value but is NOT included in GDP?",
          "o": [
            "A babysitter's paid care for a neighbor's child",
            "A daycare center's services sold to working parents",
            "Meals served at a restaurant",
            "A parent's unpaid care for a child at home"
          ],
          "a": 3,
          "w": "GDP yalnız piyasada alınıp satılanı ölçer; evde ücretsiz yapılan çocuk bakımı bir *non-market activity*'dir, değer yaratır ama sayılmaz. Aynı bakım parayla bakıcıdan ya da kreşten alınınca GDP'ye girer. Bu, GDP'nin gerçek üretimi eksik ölçmesinin (*limitations of GDP*) klasik örneğidir."
        },
        {
          "t": "2.3-1",
          "q": "Which of the following people is counted as unemployed?",
          "o": [
            "A 22-year-old graduate who has no job and has applied for several jobs during the past four weeks",
            "A 67-year-old retiree who does not have a job and is not looking for one",
            "A full-time university student who is not working and is not looking for work",
            "A café worker who works 15 hours a week but would prefer a full-time job"
          ],
          "a": 0,
          "w": "*Unemployed* olmak için iki şart birlikte gerekir: işi yok ve son 4 haftada aktif olarak iş aramış. Emekli ve iş aramayan öğrenci *not in the labor force*'tur. Yarı zamanlı çalışan, tam zaman istese bile *employed* sayılır (*underemployed*)."
        },
        {
          "t": "2.3-1",
          "q": "The table shows labor market data for an economy, in thousands of people age 16 and older. What is the unemployment rate?",
          "o": [
            "3%",
            "5%",
            "5.3%",
            "60%"
          ],
          "a": 1,
          "w": "*Labor force* = employed + unemployed = 570 + 30 = 600. *Unemployment rate* = 30 ÷ 600 × 100 = %5. Payda nüfus değil işgücüdür: 30 ÷ 1.000 = %3 hatalıdır; 30 ÷ 570 ise yalnız çalışanlara bölmektir. %60 işgücüne katılım oranıdır (*LFPR*).",
          "fig": {
            "type": "table",
            "head": [
              "Category",
              "Number (thousands)"
            ],
            "rows": [
              [
                "Employed",
                570
              ],
              [
                "Unemployed",
                30
              ],
              [
                "Not in the labor force",
                400
              ]
            ]
          }
        },
        {
          "t": "2.3-2",
          "q": "A software engineer quits her job to search for a position that pays more and is closer to home. While she searches, she is",
          "o": [
            "frictionally unemployed",
            "structurally unemployed",
            "cyclically unemployed",
            "seasonally unemployed"
          ],
          "a": 0,
          "w": "Daha iyi bir iş ararken geçen geçici süre *frictional unemployment*'tır; becerisi talep görüyor, sadece eşleşme zaman alıyor. *Structural* olsaydı becerisi teknoloji ya da sektör değişimi yüzünden artık istenmezdi; *cyclical* olsaydı işini durgunluk yüzünden kaybederdi."
        },
        {
          "t": "2.3-2",
          "q": "The natural rate of unemployment is equal to",
          "o": [
            "frictional unemployment plus cyclical unemployment",
            "structural unemployment plus cyclical unemployment",
            "frictional unemployment plus structural unemployment",
            "frictional, structural, and cyclical unemployment combined"
          ],
          "a": 2,
          "w": "*Natural rate of unemployment* = *frictional* + *structural*. Ekonomi *full employment*'tayken bile bu ikisi vardır, bu yüzden tam istihdam %0 işsizlik demek değildir. *Cyclical unemployment* durgunlukta ortaya çıkar ve doğal orana dahil değildir."
        },
        {
          "t": "2.4",
          "q": "The table shows the cost of the same market basket in two years. What is the consumer price index (CPI) in Year 2?",
          "o": [
            "25",
            "50",
            "80",
            "125"
          ],
          "a": 3,
          "w": "*CPI* = sepetin bu yılki maliyeti ÷ *base year*'daki maliyeti × 100 = 250 ÷ 200 × 100 = 125. Önce tahmin et: sepet temel yıldan pahalı, CPI 100'ü geçmeli. 80 kesri ters kurmaktır; 50 dolar farkıdır; 25 ise enflasyon oranıdır (%25), endeks değil.",
          "fig": {
            "type": "table",
            "head": [
              "Year",
              "Cost of the market basket"
            ],
            "rows": [
              [
                "Year 1 (base year)",
                "$200"
              ],
              [
                "Year 2",
                "$250"
              ]
            ]
          }
        },
        {
          "t": "2.4",
          "q": "An economy's inflation rate falls from 6 percent to 3 percent. This change is an example of",
          "o": [
            "deflation, because the inflation rate has decreased",
            "deflation, because the price level has fallen by 3 percent",
            "disinflation, because the price level is still rising but more slowly",
            "price stability, because the price level has stopped changing"
          ],
          "a": 2,
          "w": "Enflasyon %6'dan %3'e indi ama hâlâ pozitif: fiyatlar artmaya devam ediyor, yalnızca daha yavaş. Buna *disinflation* denir. *Deflation* fiyat düzeyinin düşmesidir, yani enflasyonun sıfırın altına inmesi. *Disinflation ≠ deflation* en sevilen tuzaktır."
        },
        {
          "t": "2.5",
          "q": "Unanticipated inflation is most likely to benefit which of the following?",
          "o": [
            "Banks that have made fixed-rate loans",
            "Savers holding fixed-interest savings accounts",
            "Retirees living on fixed pensions",
            "Borrowers who have fixed-rate loans"
          ],
          "a": 3,
          "w": "Beklenmeyen enflasyon paranın *purchasing power*'ını düşürür. Sabit faizli borçlu, borcunu değeri düşmüş parayla öder: kazanır. Borç veren banka, sabit faizli tasarruf sahibi ve sabit gelirli emekli ise aldıkları paranın değeri eridiği için kaybeder."
        },
        {
          "t": "2.5",
          "q": "A bank pays a nominal interest rate of 7 percent on savings deposits, and the inflation rate is 3 percent. The real interest rate is approximately",
          "o": [
            "2.3%",
            "4%",
            "10%",
            "21%"
          ],
          "a": 1,
          "w": "*Real interest rate* ≈ *nominal interest rate* − *inflation rate* = %7 − %3 = %4. Faiz parası artıyor ama fiyatlar da %3 arttığı için satın alma gücündeki gerçek kazanç %4'tür. Toplamak (%10), bölmek ya da çarpmak formülü karıştırmaktır."
        },
        {
          "t": "2.6",
          "q": "Real GDP differs from nominal GDP because real GDP",
          "o": [
            "values output using constant base-year prices",
            "includes only goods and excludes services",
            "values output using current-year prices",
            "subtracts the value of imports and transfer payments"
          ],
          "a": 0,
          "w": "*Nominal GDP* cari yıl fiyatlarıyla, *real GDP* ise *base year* fiyatlarıyla ölçülür. Fiyatlar sabit tutulunca geriye yalnızca miktar değişimi kalır; bu yüzden büyüme real GDP ile ölçülür. Cari fiyat kullanmak nominal GDP'nin tanımıdır."
        },
        {
          "t": "2.6",
          "q": "The table shows an economy's GDP in Year 2. What is the GDP deflator for Year 2?",
          "o": [
            "1.2",
            "20",
            "83.3",
            "120"
          ],
          "a": 3,
          "w": "*GDP deflator* = *nominal GDP* ÷ *real GDP* × 100 = 600 ÷ 500 × 100 = 120. Nominal reelden büyük olduğuna göre fiyatlar temel yıldan yüksektir, deflator 100'ü geçmeli. 1,2 × 100'ü unutmaktır; 83,3 kesri ters kurmaktır; 20 ise yalnızca farktır.",
          "fig": {
            "type": "table",
            "head": [
              "Year",
              "Nominal GDP",
              "Real GDP"
            ],
            "rows": [
              [
                "Year 2",
                "$600 billion",
                "$500 billion"
              ]
            ]
          }
        },
        {
          "t": "2.7",
          "q": "The graph shows real GDP over time and its long-run trend. Which point represents a trough?",
          "o": [
            "Point A",
            "Point B",
            "Point C",
            "Point D"
          ],
          "a": 1,
          "w": "*Trough* çevrimin dibidir: daralma biter, toparlanma başlar. Bu da B noktasıdır. A ve D *peak*'tir (zirve); C ise B'den sonraki yükselen kolda, yani *expansion* sırasındadır. Sıra her zaman *peak → contraction → trough → expansion*.",
          "fig": {
            "type": "graph",
            "xlabel": "Time",
            "ylabel": "Real GDP",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0.5,
                  3
                ],
                "to": [
                  9.5,
                  7.5
                ],
                "label": "Trend",
                "dash": true,
                "color": 1
              },
              {
                "from": [
                  0.5,
                  3
                ],
                "to": [
                  2,
                  5.5
                ],
                "color": 0
              },
              {
                "from": [
                  2,
                  5.5
                ],
                "to": [
                  3.5,
                  3.2
                ],
                "color": 0
              },
              {
                "from": [
                  3.5,
                  3.2
                ],
                "to": [
                  6,
                  7.5
                ],
                "color": 0
              },
              {
                "from": [
                  6,
                  7.5
                ],
                "to": [
                  7.5,
                  5.5
                ],
                "color": 0
              },
              {
                "from": [
                  7.5,
                  5.5
                ],
                "to": [
                  9.5,
                  9
                ],
                "color": 0,
                "label": "Real GDP"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 5.5,
                "label": "A"
              },
              {
                "q": 3.5,
                "p": 3.2,
                "label": "B"
              },
              {
                "q": 5.2,
                "p": 6.12,
                "label": "C"
              },
              {
                "q": 6,
                "p": 7.5,
                "label": "D"
              }
            ]
          }
        },
        {
          "t": "2.7",
          "q": "A recession is commonly defined as a",
          "o": [
            "rise in the price level lasting at least two consecutive quarters",
            "decline in real GDP lasting at least two consecutive quarters",
            "decline in nominal GDP during any single quarter",
            "period in which the unemployment rate is greater than zero"
          ],
          "a": 1,
          "w": "Yaygın kural: *real GDP* üst üste en az iki çeyrek düşerse *recession* vardır. Nominal GDP fiyat değişiminden etkilendiği için ölçüt değildir. Fiyat artışı enflasyondur; işsizliğin sıfırdan büyük olması ise her ekonomide normaldir (*natural rate*)."
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
          "q": "In a circular flow model that includes government, financial markets, and the foreign sector, which of the following is an injection into the flow of spending?",
          "o": [
            "Household saving",
            "Taxes paid to the government",
            "Spending on imports",
            "Government purchases of goods and services"
          ],
          "a": 3,
          "w": "*Injection* çembere dışarıdan giren harcamadır: *government purchases*, *investment* ve *exports*. *Saving*, *taxes* ve *imports* ise gelirin harcama akışından çıkan kısmıdır (*leakage*). Tasarruf finans piyasası üzerinden yatırıma dönüşerek geri girer."
        },
        {
          "t": "2.1-1",
          "q": "A public school pays salaries to its teachers. In the circular flow model, this is best described as",
          "o": [
            "a transfer payment from the government to households",
            "the government selling services in the product market",
            "the government buying labor in the factor market",
            "households buying education services in the product market"
          ],
          "a": 2,
          "w": "Öğretmen emeğini satıyor, devlet bu emeği satın alıyor: bu bir *factor market* işlemidir ve karşılığında hizmet üretildiği için *government purchases*'a (G) girer. *Transfer payment* (burs, emekli maaşı, işsizlik ödeneği) karşılığında üretim olmayan ödemedir."
        },
        {
          "t": "2.1-2",
          "q": "The table shows the stages of producing a sweater. Assuming all stages occur this year, by how much do these transactions increase GDP?",
          "o": [
            "$120",
            "$160",
            "$180",
            "$370"
          ],
          "a": 2,
          "w": "GDP'ye yalnız *final good*'un fiyatı girer: 180 $. Aynı sonucu *value-added approach* da verir: 20 + 30 + 70 + 60 = 180. Bütün satışları toplamak (370) pamuğu ve ipliği birkaç kez saymaktır (*double counting*). 160 çiftçinin katkısını unutmaktır.",
          "fig": {
            "type": "table",
            "head": [
              "Seller → Buyer",
              "Item",
              "Sale price"
            ],
            "rows": [
              [
                "Cotton farmer → spinning mill",
                "Cotton",
                "$20"
              ],
              [
                "Spinning mill → knitting firm",
                "Yarn",
                "$50"
              ],
              [
                "Knitting firm → clothing store",
                "Sweater",
                "$120"
              ],
              [
                "Clothing store → consumer",
                "Sweater",
                "$180"
              ]
            ]
          }
        },
        {
          "t": "2.1-2",
          "q": "A Japanese-owned automobile factory in Ohio produces cars worth $2 billion this year. These cars are counted in",
          "o": [
            "Japan's GDP only",
            "both U.S. GDP and Japan's GDP",
            "neither country's GDP until the cars are exported",
            "U.S. GDP only"
          ],
          "a": 3,
          "w": "GDP'de ölçüt sahiplik değil konumdur (*within a country's borders*). Fabrika Ohio'da olduğuna göre üretim ABD GDP'sine girer, Japonya'nınkine girmez. İhracat şartı yoktur: ABD'de satılsa da yurt dışına satılsa da ABD'de üretilmiştir."
        },
        {
          "t": "2.1-2",
          "q": "A new car produced in Year 1 is still unsold on a dealer's lot at the end of Year 1. It is sold to a household in Year 2. How is the car treated in GDP?",
          "o": [
            "It is counted only in Year 2 GDP, when it is sold to the household.",
            "It is counted in both Year 1 GDP and Year 2 GDP, once when produced and once when sold.",
            "It is counted in Year 1 GDP as inventory investment; in Year 2, consumption rises and inventory investment falls by the same amount.",
            "It is never counted in GDP, because it is a used good by the time it is sold."
          ],
          "a": 2,
          "w": "GDP üretildiği yılı sayar: satılmayan araba Year 1'de *inventory investment* (I) olarak girer. Year 2'de satılınca C artar, stok aynı miktarda azaldığı için I düşer; Year 2 GDP'si değişmez. Böylece araba bir kez, doğru yılda sayılmış olur."
        },
        {
          "t": "2.1-3",
          "q": "A family buys a newly built house. In the expenditure approach to GDP, this purchase is classified as",
          "o": [
            "consumption",
            "investment",
            "government purchases",
            "not included in GDP"
          ],
          "a": 1,
          "w": "Yeni konut alımı, alan bir aile olsa bile *investment* (I) sayılır: *residential construction* bir sermaye malıdır. Eski bir evin satışı ise hiç sayılmaz, yalnızca emlakçının komisyonu sayılır. Ekonomide yatırım = yeni sermaye; hisse senedi değil."
        },
        {
          "t": "2.1-3",
          "q": "The table shows data for an economy. Using the income approach, what is GDP?",
          "o": [
            "$600 billion",
            "$700 billion",
            "$780 billion",
            "$1,150 billion"
          ],
          "a": 1,
          "w": "*Income approach*: *wages + rent + interest + profits* = 500 + 60 + 40 + 100 = 700 milyar $. *Transfer payments* üretime karşılık kazanılmış gelir değildir (780 yanlış). Tüketim bir harcama kalemidir; gelirle toplamak aynı üretimi iki kez saymaktır (1.150).",
          "fig": {
            "type": "table",
            "head": [
              "Item",
              "Amount (billions of dollars)"
            ],
            "rows": [
              [
                "Wages",
                500
              ],
              [
                "Rent",
                60
              ],
              [
                "Interest",
                40
              ],
              [
                "Profits",
                100
              ],
              [
                "Government transfer payments",
                80
              ],
              [
                "Consumption spending",
                450
              ]
            ]
          }
        },
        {
          "t": "2.1-3",
          "q": "A country's exports are $120 billion and its imports are $150 billion. Which of the following is true?",
          "o": [
            "Net exports are $30 billion, which is added to GDP.",
            "Net exports are $270 billion, because exports and imports are both trade.",
            "Imports of $150 billion are added to GDP, because domestic consumers spent the money.",
            "Net exports are −$30 billion, which reduces GDP in the expenditure approach."
          ],
          "a": 3,
          "w": "*Net exports* = X − M = 120 − 150 = −30 milyar $. Negatif net ihracat harcama toplamından düşülür. İthal mallara yapılan harcama C, I ya da G içinde zaten vardır; M çıkarılarak yabancı üretim GDP'den temizlenir."
        },
        {
          "t": "2.2",
          "q": "The table shows GDP and population for four countries. Which country has the highest standard of living as measured by GDP per capita?",
          "o": [
            "Country A",
            "Country B",
            "Country C",
            "Country D"
          ],
          "a": 3,
          "w": "*GDP per capita* = GDP ÷ nüfus: A 20.000 $, B 15.000 $, C 25.000 $, D 30.000 $. En yüksek D'dir. Toplam GDP'si en büyük olan B, nüfusu da en kalabalık olduğu için kişi başına en düşük gelire sahiptir. Ülke karşılaştırmasında toplam değil kişi başı kullanılır.",
          "fig": {
            "type": "table",
            "head": [
              "Country",
              "GDP (billions of dollars)",
              "Population (millions)"
            ],
            "rows": [
              [
                "Country A",
                800,
                40
              ],
              [
                "Country B",
                1200,
                80
              ],
              [
                "Country C",
                500,
                20
              ],
              [
                "Country D",
                300,
                10
              ]
            ]
          }
        },
        {
          "t": "2.2",
          "q": "Which of the following would increase measured GDP without necessarily increasing society's well-being?",
          "o": [
            "Spending on cleanup after a large oil spill",
            "An increase in the amount of leisure time workers enjoy",
            "An increase in unpaid volunteer work at animal shelters",
            "A reduction in air pollution with no change in output"
          ],
          "a": 0,
          "w": "Petrol sızıntısı temizliği piyasada satılan bir hizmettir, GDP'yi artırır; ama toplum yalnızca kaybettiğini geri kazanır. *Leisure*, gönüllü çalışma ve temiz hava refahı artırır ama GDP bunları ölçmez. GDP büyük ≠ refah yüksek."
        },
        {
          "t": "2.3-1",
          "q": "The table shows labor market data for Marmaria, in millions of people age 16 and older. What is Marmaria's labor force participation rate?",
          "o": [
            "6.25%",
            "60%",
            "64%",
            "93.75%"
          ],
          "a": 2,
          "w": "*Labor force* = 300 + 20 = 320; yetişkin nüfus = 320 + 180 = 500. *LFPR* = 320 ÷ 500 × 100 = %64. %60 işsizleri işgücünden çıkarmaktır; %6,25 işsizlik oranıdır; %93,75 ise çalışanların işgücüne oranıdır.",
          "fig": {
            "type": "table",
            "head": [
              "Category",
              "Number (millions)"
            ],
            "rows": [
              [
                "Employed",
                300
              ],
              [
                "Unemployed",
                20
              ],
              [
                "Not in the labor force",
                180
              ]
            ]
          }
        },
        {
          "t": "2.3-1",
          "q": "If a large number of unemployed workers become discouraged and stop looking for work, what happens to the unemployment rate and the labor force participation rate?",
          "o": [
            "Unemployment rate decreases; labor force participation rate decreases",
            "Unemployment rate decreases; labor force participation rate does not change",
            "Unemployment rate increases; labor force participation rate decreases",
            "Unemployment rate does not change; labor force participation rate decreases"
          ],
          "a": 0,
          "w": "*Discouraged worker* iş aramayı bıraktığı için işgücünden çıkar. İşsiz sayısı (pay) düşer, oran da düşer; işgücü küçüldüğü için *LFPR* de düşer. İşsizlik oranının düşmesi burada iyi haber değildir: işsizlik gizlenmiştir."
        },
        {
          "t": "2.3-1",
          "q": "Ece works 10 hours a week at a café but would like a full-time job. According to official U.S. statistics, Ece is",
          "o": [
            "employed",
            "unemployed",
            "not in the labor force",
            "a discouraged worker"
          ],
          "a": 0,
          "w": "Haftada bir saat bile ücretli çalışan kişi *employed* sayılır. Tam zaman istediği hâlde yarı zamanlı çalışan Ece *underemployed*'dır, ama resmî istatistikte çalışandır. Bu yüzden resmî işsizlik oranı işgücü piyasasının zayıflığını olduğundan iyi gösterebilir."
        },
        {
          "t": "2.3-2",
          "q": "Toll-booth attendants lose their jobs after a country's highways switch to automatic electronic toll collection. This is an example of",
          "o": [
            "frictional unemployment",
            "structural unemployment",
            "cyclical unemployment",
            "seasonal unemployment"
          ],
          "a": 1,
          "w": "Teknoloji gişe görevlisinin becerisini gereksiz kıldı: iş geri gelmeyecek, yeni beceri gerekiyor. Bu *structural unemployment*'tır. *Frictional* olsaydı becerisi talep görürdü ve sadece arama süresi olurdu; *cyclical* olsaydı sebep durgunluk olurdu."
        },
        {
          "t": "2.3-2",
          "q": "The graph shows an economy's production possibilities curve (PPC). The economy starts at point W. Which change best illustrates the effect of a recession that raises cyclical unemployment?",
          "o": [
            "A movement from point X to point W",
            "A movement from point W to point Z",
            "A movement from point W to point X",
            "An inward shift of the entire PPC"
          ],
          "a": 2,
          "w": "Durgunlukta kaynaklar yok olmaz, bir kısmı atıl kalır: ekonomi eğrinin üstünden (W) içine (X) iner. *Cyclical unemployment* PPC'yi kaydırmaz, çünkü işgücü ve teknoloji aynıdır. X'ten W'ye geçiş toparlanmadır; Z ise mevcut kaynaklarla ulaşılamaz bir noktadır.",
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
                "q": 4.8,
                "p": 6.4,
                "label": "W"
              },
              {
                "q": 3,
                "p": 3.5,
                "label": "X"
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
          "t": "2.4",
          "q": "The table shows an economy's consumer price index (CPI). What is the inflation rate from Year 1 to Year 2?",
          "o": [
            "10%",
            "12%",
            "32%",
            "110%"
          ],
          "a": 0,
          "w": "*Inflation rate* = (yeni CPI − eski CPI) ÷ eski CPI × 100 = (132 − 120) ÷ 120 × 100 = %10. İki CPI arasındaki 12 puanlık fark yüzde değildir. %32 temel yıla göre artıştır; 110 ise oranı yüzde sanmaktır.",
          "fig": {
            "type": "table",
            "head": [
              "Year",
              "CPI"
            ],
            "rows": [
              [
                "Year 1",
                120
              ],
              [
                "Year 2",
                132
              ]
            ]
          }
        },
        {
          "t": "2.5",
          "q": "Tolga's nominal income rises by 5 percent during a year in which the price level rises by 8 percent. Tolga's real income has",
          "o": [
            "risen by about 3 percent",
            "fallen by about 3 percent",
            "risen by about 13 percent",
            "not changed, because his nominal income increased"
          ],
          "a": 1,
          "w": "*Real income* değişimi ≈ nominal gelir değişimi − enflasyon = %5 − %8 = yaklaşık −%3. Maaş arttı ama fiyatlar daha hızlı arttı; Tolga aynı parayla daha az şey alabiliyor (*purchasing power* düştü). Nominal artış, real artış demek değildir."
        },
        {
          "t": "2.6",
          "q": "The table shows an economy's nominal and real GDP in two years. What is the growth rate of real GDP from Year 1 to Year 2?",
          "o": [
            "5%",
            "9.5%",
            "14.5%",
            "20%"
          ],
          "a": 0,
          "w": "*Real GDP growth rate* = (420 − 400) ÷ 400 × 100 = %5. %14,5 nominal GDP'nin büyümesidir; bunun bir kısmı yalnızca fiyat artışından gelir. 20 milyar $'lık fark yüzde değildir. Büyüme her zaman real GDP ile ölçülür.",
          "fig": {
            "type": "table",
            "head": [
              "Year",
              "Nominal GDP",
              "Real GDP"
            ],
            "rows": [
              [
                "Year 1",
                "$440 billion",
                "$400 billion"
              ],
              [
                "Year 2",
                "$504 billion",
                "$420 billion"
              ]
            ]
          }
        },
        {
          "t": "2.7",
          "q": "During the contraction phase of the business cycle, which of the following is most likely to occur?",
          "o": [
            "Real GDP falls and structural unemployment rises.",
            "Real GDP rises and cyclical unemployment rises.",
            "Potential output falls and the natural rate of unemployment rises.",
            "Real GDP falls and cyclical unemployment rises."
          ],
          "a": 3,
          "w": "*Contraction*'da harcama azalır, firmalar daha az üretir: *real GDP* düşer, işten çıkarılanlar *cyclical unemployment*'ı artırır. Daralma becerileri eskitmez (*structural* değil) ve potansiyel çıktıyı değiştirmez; ekonomi PPC'nin içine iner."
        },
        {
          "t": "2.7",
          "q": "The graph shows real GDP over time and its long-run trend. Between which two points is the economy in an expansion?",
          "o": [
            "From A to B",
            "From B to C",
            "From C to D",
            "From D back to A"
          ],
          "a": 1,
          "w": "*Expansion* dipten (*trough*) zirveye (*peak*) uzanan yükselen koldur: B'den C'ye real GDP artıyor. A'dan B'ye ve C'den D'ye real GDP düşüyor, bunlar *contraction*'dır. Zaman geriye akmaz, bu yüzden D'den A'ya bir evre yoktur.",
          "fig": {
            "type": "graph",
            "xlabel": "Time",
            "ylabel": "Real GDP",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0.5,
                  3
                ],
                "to": [
                  9.5,
                  7.5
                ],
                "label": "Trend",
                "dash": true,
                "color": 1
              },
              {
                "from": [
                  0.5,
                  3
                ],
                "to": [
                  2,
                  5.5
                ],
                "color": 0
              },
              {
                "from": [
                  2,
                  5.5
                ],
                "to": [
                  3.5,
                  3.2
                ],
                "color": 0
              },
              {
                "from": [
                  3.5,
                  3.2
                ],
                "to": [
                  6,
                  7.5
                ],
                "color": 0
              },
              {
                "from": [
                  6,
                  7.5
                ],
                "to": [
                  7.5,
                  5.5
                ],
                "color": 0
              },
              {
                "from": [
                  7.5,
                  5.5
                ],
                "to": [
                  9.5,
                  9
                ],
                "color": 0,
                "label": "Real GDP"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 5.5,
                "label": "A"
              },
              {
                "q": 3.5,
                "p": 3.2,
                "label": "B"
              },
              {
                "q": 6,
                "p": 7.5,
                "label": "C"
              },
              {
                "q": 7.5,
                "p": 5.5,
                "label": "D"
              }
            ]
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
          "t": "2.1-1",
          "q": "In a circular flow model that includes a financial sector, household saving",
          "o": [
            "is paid directly to firms in the product market in exchange for goods",
            "is counted in GDP as part of consumption spending",
            "is an injection that adds to the flow of spending",
            "flows through financial markets and is lent to firms that use it to buy capital goods"
          ],
          "a": 3,
          "w": "Tasarruf harcama akışından çıkar (*leakage*), ama bankalar ve tahvil piyasası (*financial sector*) bu parayı firmalara borç verir. Firmalar onu yeni sermaye malına harcayınca para *investment* olarak çembere geri girer (*injection*). Tasarruf kendisi ne C'dir ne de injection."
        },
        {
          "t": "2.1-2",
          "q": "Which of the following would be included in this year's GDP?\nI. The commission a real estate agent earns for selling a house built ten years ago\nII. The price paid for the house built ten years ago\nIII. Unemployment benefits paid by the government",
          "o": [
            "I only",
            "II only",
            "I and II only",
            "I and III only"
          ],
          "a": 0,
          "w": "Emlakçının komisyonu bu yıl üretilen bir hizmettir: I sayılır. Ev on yıl önce üretildi; satış fiyatı bu yılın üretimi değildir (*used goods*), II sayılmaz. İşsizlik ödeneği karşılığında üretim olmayan bir *transfer payment*'tır, III de sayılmaz."
        },
        {
          "t": "2.1-2",
          "q": "The table shows the stages of producing bread. What is the value added by the miller?",
          "o": [
            "$30",
            "$40",
            "$70",
            "$250"
          ],
          "a": 1,
          "w": "*Value added* = satış fiyatı − satın alınan ara malın maliyeti = 70 − 30 = 40 $. 70 $ değirmencinin toplam satışıdır ama içinde çiftçinin buğdayı da var. Bütün aşamaların katma değeri toplanınca (30 + 40 + 80) son ürünün fiyatı olan 150 $ çıkar; 250 ise *double counting*'dir.",
          "fig": {
            "type": "table",
            "head": [
              "Seller → Buyer",
              "Item",
              "Sale price"
            ],
            "rows": [
              [
                "Wheat farmer → miller",
                "Wheat",
                "$30"
              ],
              [
                "Miller → baker",
                "Flour",
                "$70"
              ],
              [
                "Baker → consumers",
                "Bread",
                "$150"
              ]
            ]
          }
        },
        {
          "t": "2.1-3",
          "q": "The table shows data for an economy. What is GDP?",
          "o": [
            "$1,600 billion",
            "$1,850 billion",
            "$2,030 billion",
            "$2,100 billion"
          ],
          "a": 1,
          "w": "GDP = C + I + G + (X − M) = 1.200 + 300 + 400 + (150 − 200) = 1.850 milyar $. Hisse senedi ve tahvil alımı *financial transaction*'dır (2.030 yanlış); *transfer payments* G'ye eklenmez (2.100) ve GDP'den düşülmez de (1.600). Tabloda olan her satır formüle girmez.",
          "fig": {
            "type": "table",
            "head": [
              "Item",
              "Amount (billions of dollars)"
            ],
            "rows": [
              [
                "Consumption",
                1200
              ],
              [
                "Gross private domestic investment",
                300
              ],
              [
                "Government purchases of goods and services",
                400
              ],
              [
                "Government transfer payments",
                250
              ],
              [
                "Exports",
                150
              ],
              [
                "Imports",
                200
              ],
              [
                "Purchases of stocks and bonds",
                180
              ]
            ]
          }
        },
        {
          "t": "2.1-3",
          "q": "A tourist from Germany spends $500 at a hotel in Antalya. In Turkey's GDP accounts, this spending is counted as",
          "o": [
            "consumption",
            "investment",
            "exports",
            "not included, because the buyer is not a Turkish resident"
          ],
          "a": 2,
          "w": "Otel hizmeti Türkiye'de üretildi ama yabancı biri satın aldı: bu bir hizmet ihracatıdır (*exports*, X). Tüketici Türk hane halkı olmadığı için C değildir. Alıcının uyruğu önemli değildir; üretim Türkiye sınırları içinde olduğundan GDP'ye girer."
        },
        {
          "t": "2.1-3",
          "q": "Why do the expenditure approach and the income approach produce the same value for GDP?",
          "o": [
            "Every dollar spent on final output becomes income for the households and firms that supplied the resources to produce it.",
            "The government requires firms to set prices equal to the wages they pay.",
            "Imports and exports always cancel each other out.",
            "Households spend all of their income, so saving is always zero."
          ],
          "a": 0,
          "w": "Döngüsel akışın özü: birinin harcaması başkasının gelirdir. Bir simide ödenen her lira ücret, kira, faiz ya da kâr olarak kaynak sahiplerine dağılır (*spending = income = output*). Tasarrufun sıfır olması ya da dış ticaretin dengede olması gerekmez."
        },
        {
          "t": "2.2",
          "q": "More families begin paying for meal delivery instead of cooking at home, but the total number and quality of meals eaten does not change. Which of the following is most likely true?",
          "o": [
            "Measured GDP is unchanged, because the same meals are eaten.",
            "Measured GDP falls, because households produce fewer meals.",
            "Measured GDP rises, even though actual production of meals has not changed.",
            "Measured GDP rises, and this shows that well-being has risen by the same amount."
          ],
          "a": 2,
          "w": "Evde pişen yemek *non-market production*'dır ve GDP'ye girmez; aynı yemek paket servisle alınınca piyasada satıldığı için sayılır. Gerçek üretim aynı kaldığı hâlde ölçülen GDP artar. Bu da GDP artışının her zaman refah artışı olmadığını gösterir."
        },
        {
          "t": "2.2",
          "q": "Compared with a country that has a small underground economy, a country with a large underground economy is more likely to have measured GDP that",
          "o": [
            "overstates its actual production",
            "measures its actual production exactly, because taxes are estimated",
            "overstates its actual production, because illegal goods are counted twice",
            "understates its actual production"
          ],
          "a": 3,
          "w": "*Underground economy* (kayıt dışı ekonomi) devlete bildirilmeyen nakit işler ve yasa dışı faaliyetlerdir; resmî istatistiklere girmez. Bu yüzden kayıt dışılığı büyük ülkede ölçülen GDP gerçek üretimin altında kalır (*understates*). Bu işlemler hiç sayılmaz, iki kez sayılması söz konusu değildir."
        },
        {
          "t": "2.3-1",
          "q": "The table shows labor market data for an economy. Which of the following is correct?",
          "o": [
            "Unemployment rate 3.2%; labor force participation rate 64%",
            "Unemployment rate 5%; labor force participation rate 60.8%",
            "Unemployment rate 5%; labor force participation rate 64%",
            "Unemployment rate 5.3%; labor force participation rate 60.8%"
          ],
          "a": 2,
          "w": "*Unemployment rate* = 8 ÷ 160 × 100 = %5 (payda işgücü). *LFPR* = 160 ÷ 250 × 100 = %64 (payda yetişkin nüfus). %3,2 işsizleri nüfusa bölmektir; %60,8 yalnız çalışanları (152) nüfusa bölmektir; %5,3 ise işsizleri çalışanlara bölmektir.",
          "fig": {
            "type": "table",
            "head": [
              "Category",
              "Number (millions)"
            ],
            "rows": [
              [
                "Civilian, non-institutional population age 16 and older",
                250
              ],
              [
                "Labor force",
                160
              ],
              [
                "Unemployed",
                8
              ]
            ]
          }
        },
        {
          "t": "2.3-1",
          "q": "Which of the following would increase the unemployment rate but leave the labor force participation rate unchanged?",
          "o": [
            "An employed worker is laid off and begins searching for a new job.",
            "An unemployed worker gives up and stops searching for a job.",
            "A retiree who was not looking for work takes a part-time job.",
            "A student who was not looking for work begins searching but does not find a job."
          ],
          "a": 0,
          "w": "İşten çıkarılıp iş arayan kişi *employed*'dan *unemployed*'a geçer: işgücü aynı kalır, işsiz sayısı artar. Yani işsizlik oranı artar, *LFPR* değişmez. Aramayı bırakan işsiz iki oranı da düşürür; emekli işe girince iki oran da etkilenir; öğrenci aramaya başlayınca işgücü büyüdüğü için *LFPR* de artar."
        },
        {
          "t": "2.3-2",
          "q": "The table shows unemployment data for Tarsia. Which of the following is correct?",
          "o": [
            "Natural rate 2%; cyclical unemployment 5.5%",
            "Natural rate 5%; cyclical unemployment 2.5%",
            "Natural rate 5%; cyclical unemployment 7.5%",
            "Natural rate 7.5%; cyclical unemployment 0%"
          ],
          "a": 1,
          "w": "*Natural rate* = *frictional + structural* = %2 + %3 = %5. *Cyclical unemployment* = gerçek oran − doğal oran = %7,5 − %5 = %2,5. Doğal orana cyclical eklenmez; gerçek oranın tamamını doğal oran sanmak ekonominin tam istihdamda olduğunu varsaymaktır.",
          "fig": {
            "type": "table",
            "head": [
              "Measure",
              "Rate"
            ],
            "rows": [
              [
                "Frictional unemployment",
                "2%"
              ],
              [
                "Structural unemployment",
                "3%"
              ],
              [
                "Actual unemployment rate",
                "7.5%"
              ]
            ]
          }
        },
        {
          "t": "2.3-2",
          "q": "Which of the following is an example of cyclical unemployment?",
          "o": [
            "A furniture factory worker laid off because consumer spending falls during a recession",
            "A new graduate searching for a first job after finishing university",
            "A travel agent whose skills are no longer in demand because customers book trips online",
            "A ski instructor who is out of work during the summer"
          ],
          "a": 0,
          "w": "Sebep durgunlukta azalan harcamaysa işsizlik *cyclical*'dır: ekonomi toparlanınca bu işler geri döner. Yeni mezunun ilk iş araması *frictional*, internet yüzünden mesleği gereksizleşen acente *structural*, yazın boş kalan kayak hocası ise *seasonal* işsizliktir."
        },
        {
          "t": "2.4",
          "q": "The table shows the market basket used to compute a consumer price index (CPI). Year 1 is the base year. What is the CPI in Year 2?",
          "o": [
            "30",
            "39",
            "76.9",
            "130"
          ],
          "a": 3,
          "w": "Sepet maliyeti: Year 1 = 10 × 1 + 4 × 5 = 30 $; Year 2 = 10 × 1,50 + 4 × 6 = 39 $. *CPI* = 39 ÷ 30 × 100 = 130. 39 sepetin dolar maliyetidir, endeks değil; 30 enflasyon oranıdır (%30); 76,9 ise kesri ters kurmaktır.",
          "fig": {
            "type": "table",
            "head": [
              "Good",
              "Quantity in basket",
              "Price in Year 1",
              "Price in Year 2"
            ],
            "rows": [
              [
                "Simit",
                10,
                "$1.00",
                "$1.50"
              ],
              [
                "Movie ticket",
                4,
                "$5.00",
                "$6.00"
              ]
            ]
          }
        },
        {
          "t": "2.4",
          "q": "The CPI may overstate the increase in the cost of living because",
          "o": [
            "the CPI includes the prices of imported goods",
            "the CPI includes only goods and leaves out services",
            "consumers switch toward goods whose prices have risen less, but the CPI's fixed market basket does not reflect this",
            "the CPI uses current-year quantities instead of a fixed market basket"
          ],
          "a": 2,
          "w": "*Substitution bias*: kahve pahalanınca insanlar çaya geçer, ama CPI sepeti sabit olduğu için hâlâ pahalı kahveyi ölçer. Sonuç: CPI yaşam maliyetindeki artışı olduğundan büyük gösterir. CPI ithal malları ve hizmetleri de içerir; cari yıl miktarları kullanmaz."
        },
        {
          "t": "2.5",
          "q": "A bank makes a one-year loan at a nominal interest rate of 6 percent, expecting inflation of 2 percent. Inflation turns out to be 9 percent. Which of the following is true?",
          "o": [
            "The actual real interest rate is 4 percent, as planned, so neither side gains.",
            "The actual real interest rate is 15 percent, so the bank gains at the borrower's expense.",
            "The actual real interest rate is −3 percent, but the bank gains because it still receives interest.",
            "The actual real interest rate is −3 percent, so the borrower gains at the bank's expense."
          ],
          "a": 3,
          "w": "Gerçekleşen *real interest rate* = %6 − %9 = −%3. Banka %4 real getiri bekliyordu, ama geri aldığı paranın satın alma gücü verdiğinden az. *Unanticipated inflation* borçluya yarar, borç verene zarar verir. Nominal faiz almak, real olarak kazanmak demek değildir."
        },
        {
          "t": "2.5",
          "q": "During a period of rapid inflation, a restaurant must reprint its menus every few weeks. This is an example of which cost of inflation?",
          "o": [
            "Menu costs",
            "Shoe-leather costs",
            "Substitution bias",
            "Structural costs"
          ],
          "a": 0,
          "w": "Fiyat etiketlerini, menüleri, katalogları sürekli değiştirmenin maliyetine *menu costs* denir. *Shoe-leather costs* ise insanların elinde nakit tutmamak için sık sık bankaya gitmesinin, parayı sürekli çevirmesinin maliyetidir. *Substitution bias* bir CPI ölçüm sorunudur, enflasyonun maliyeti değildir."
        },
        {
          "t": "2.6",
          "q": "The table shows production and prices in an economy that produces only pizzas and books. Year 1 is the base year. What is real GDP in Year 2?",
          "o": [
            "$2,000",
            "$2,400",
            "$2,450",
            "$2,940"
          ],
          "a": 1,
          "w": "*Real GDP* = Year 2 miktarları × *base year* fiyatları = 120 × 10 + 60 × 20 = 2.400 $. 2.940 Year 2 fiyatlarıyla ölçülen nominal GDP'dir; 2.000 Year 1'in GDP'sidir. 2.450 miktarları ve fiyatları ters eşleştirmektir (eski miktar × yeni fiyat).",
          "fig": {
            "type": "table",
            "head": [
              "Good",
              "Quantity, Year 1",
              "Price, Year 1",
              "Quantity, Year 2",
              "Price, Year 2"
            ],
            "rows": [
              [
                "Pizzas",
                100,
                "$10",
                120,
                "$12"
              ],
              [
                "Books",
                50,
                "$20",
                60,
                "$25"
              ]
            ]
          }
        },
        {
          "t": "2.6",
          "q": "From one year to the next, an economy's nominal GDP rises by 8 percent and its GDP deflator also rises by 8 percent. Real GDP has",
          "o": [
            "risen by about 8 percent",
            "risen by about 16 percent",
            "remained about the same",
            "fallen by about 8 percent"
          ],
          "a": 2,
          "w": "*Real GDP* değişimi ≈ nominal GDP değişimi − *GDP deflator* değişimi = %8 − %8 = 0. Nominal artışın tamamı fiyatlardan geldi; üretilen miktar artmadı. Nominal artışı büyüme sanmak (%8) ya da iki oranı toplamak (%16) yaygın hatalardır."
        },
        {
          "t": "2.7",
          "q": "The graph shows real GDP over time and its long-run trend. At point X, the economy most likely has",
          "o": [
            "a recessionary gap, and unemployment above the natural rate",
            "an inflationary gap, and unemployment below the natural rate",
            "an inflationary gap, and unemployment above the natural rate",
            "no output gap, and cyclical unemployment equal to zero"
          ],
          "a": 1,
          "w": "X bir *peak*'tir ve trendin (potansiyel çıktının) üstündedir: real GDP potansiyeli aşıyor, bu bir *inflationary gap*'tir. Firmalar normalden fazla işçi çalıştırdığı için işsizlik doğal oranın altına iner (*cyclical unemployment* negatif). Fiyatlar üzerinde yukarı yönlü baskı oluşur.",
          "fig": {
            "type": "graph",
            "xlabel": "Time",
            "ylabel": "Real GDP",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0.5,
                  3
                ],
                "to": [
                  9.5,
                  7.5
                ],
                "label": "Trend",
                "dash": true,
                "color": 1
              },
              {
                "from": [
                  0.5,
                  3
                ],
                "to": [
                  2,
                  5.5
                ],
                "color": 0
              },
              {
                "from": [
                  2,
                  5.5
                ],
                "to": [
                  3.5,
                  3.2
                ],
                "color": 0
              },
              {
                "from": [
                  3.5,
                  3.2
                ],
                "to": [
                  6,
                  7.5
                ],
                "color": 0
              },
              {
                "from": [
                  6,
                  7.5
                ],
                "to": [
                  7.5,
                  5.5
                ],
                "color": 0
              },
              {
                "from": [
                  7.5,
                  5.5
                ],
                "to": [
                  9.5,
                  9
                ],
                "color": 0,
                "label": "Real GDP"
              }
            ],
            "points": [
              {
                "q": 6,
                "p": 7.5,
                "label": "X"
              }
            ]
          }
        },
        {
          "t": "2.7",
          "q": "On a business cycle graph, the upward-sloping long-run trend line represents",
          "o": [
            "a movement from a point inside the PPC to a point on the PPC",
            "a rise in the price level over time",
            "the rise in nominal GDP that is caused by inflation",
            "growth in potential output, which can be shown as an outward shift of the PPC"
          ],
          "a": 3,
          "w": "Trend çizgisi ekonominin *potential output*'udur; zamanla yükselmesi uzun dönem ekonomik büyümedir ve PPC'nin dışa kayması ile gösterilir. PPC'nin içinden eğriye çıkmak kısa dönem toparlanmadır (*expansion*). Grafik real GDP ile çizildiği için fiyat etkisi yoktur."
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
          "q": "In a simple circular flow model with only households and firms, households spend all of their income on goods and services. The table shows the payments firms make to households. If household spending is $600 billion, what is the amount of profit?",
          "o": [
            "$120 billion",
            "$480 billion",
            "$600 billion",
            "$1,080 billion"
          ],
          "a": 0,
          "w": "Basit modelde toplam harcama = toplam gelir: 600 = 400 + 50 + 30 + kâr → kâr = 600 − 480 = 120 milyar $. 480 kâr dışındaki gelirlerin toplamıdır; 600 toplam gelirin kendisidir. 1.080 ise harcama ile geliri toplayıp aynı akışı iki kez saymaktır.",
          "fig": {
            "type": "table",
            "head": [
              "Payment from firms to households",
              "Amount (billions of dollars)"
            ],
            "rows": [
              [
                "Wages",
                400
              ],
              [
                "Rent",
                50
              ],
              [
                "Interest",
                30
              ],
              [
                "Profit",
                "?"
              ]
            ]
          }
        },
        {
          "t": "2.1-1",
          "q": "Which of the following occurs in the factor market?\nI. A firm pays rent for an office to the household that owns the building.\nII. A household buys a new refrigerator from an appliance store.\nIII. A firm hires a software engineer.",
          "o": [
            "I only",
            "III only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "*Factor market*'te üretim faktörleri el değiştirir: ofis binası (*land/capital*, kira) ve mühendisin emeği (*labor*, ücret). I ve III doğru. Buzdolabı bitmiş bir maldır ve *product market*'te satılır; hane halkının alıcı olduğu yer orasıdır."
        },
        {
          "t": "2.1-2",
          "q": "Which of the following would increase U.S. GDP?",
          "o": [
            "An American-owned factory in Mexico produces cars that are sold in the United States.",
            "A U.S. resident buys shares of a company that is newly listed on the stock exchange.",
            "The federal government increases Social Security payments to retirees.",
            "A Turkish-owned textile plant in Texas produces fabric that is sold to buyers in Germany."
          ],
          "a": 3,
          "w": "Kumaş Teksas'ta üretildi; sahibinin Türk, alıcının Alman olması önemli değil: ABD GDP'sine *exports* olarak girer. ABD sahipli Meksika fabrikası Meksika'nın GDP'sidir, ABD için ithalattır. Hisse senedi alımı bir *financial transaction*, emekli maaşı bir *transfer payment*'tır."
        },
        {
          "t": "2.1-2",
          "q": "This year, a bakery buys a newly produced oven for $5,000 and flour for $2,000. It uses the flour to bake bread that it sells to consumers for $9,000. By how much do these transactions increase GDP?",
          "o": [
            "$9,000",
            "$11,000",
            "$14,000",
            "$16,000"
          ],
          "a": 2,
          "w": "Un ekmeğin içine girer, *intermediate good*'dur; değeri 9.000 $'lık ekmek fiyatında zaten var. Fırın ise yıllarca kullanılan yeni bir sermaye malıdır, *final good* olarak *investment*'a girer. GDP = 9.000 + 5.000 = 14.000 $. Fırını ara mal sanmak 9.000, unu da eklemek 16.000 verir."
        },
        {
          "t": "2.1-3",
          "q": "The table shows national income accounts data for an economy, including the change in business inventories. What is GDP?",
          "o": [
            "$1,380 billion",
            "$1,420 billion",
            "$1,500 billion",
            "$1,660 billion"
          ],
          "a": 0,
          "w": "I = 180 + 70 + (−20) = 230: stoktaki azalma yatırımı düşürür. GDP = 900 + 230 + 300 + (90 − 140) = 1.380 milyar $. Stok değişimini pozitif almak 1.420, *transfer payments*'ı eklemek 1.500, ithalatı çıkarmak yerine eklemek 1.660 verir.",
          "fig": {
            "type": "table",
            "head": [
              "Item",
              "Amount (billions of dollars)"
            ],
            "rows": [
              [
                "Consumption",
                900
              ],
              [
                "Business fixed investment",
                180
              ],
              [
                "Residential construction",
                70
              ],
              [
                "Change in business inventories",
                -20
              ],
              [
                "Government purchases of goods and services",
                300
              ],
              [
                "Government transfer payments",
                120
              ],
              [
                "Exports",
                90
              ],
              [
                "Imports",
                140
              ]
            ]
          }
        },
        {
          "t": "2.1-3",
          "q": "The table shows data for an economy. What is the value of gross private domestic investment?",
          "o": [
            "$300 billion",
            "$350 billion",
            "$400 billion",
            "$700 billion"
          ],
          "a": 2,
          "w": "2.000 = 1.300 + I + 350 + (150 − 200) → 2.000 = 1.600 + I → I = 400 milyar $. Net ihracat −50 olduğu için I, C + G'nin bıraktığı boşluktan 50 fazladır. Dış ticareti yok saymak 350, işareti ters almak 300, G'yi unutmak 700 verir.",
          "fig": {
            "type": "table",
            "head": [
              "Item",
              "Amount (billions of dollars)"
            ],
            "rows": [
              [
                "GDP",
                2000
              ],
              [
                "Consumption",
                1300
              ],
              [
                "Government purchases of goods and services",
                350
              ],
              [
                "Exports",
                150
              ],
              [
                "Imports",
                200
              ]
            ]
          }
        },
        {
          "t": "2.2",
          "q": "Which of the following are reasons that GDP per capita may be a misleading measure of well-being when comparing two countries?\nI. It does not show how income is distributed among households.\nII. It does not count the value of leisure.\nIII. It counts the value of intermediate goods twice.",
          "o": [
            "I only",
            "II only",
            "I and II only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "Kişi başı GDP bir ortalamadır: gelirin birkaç kişide mi toplandığını göstermez (I). Daha az saat çalışıp aynı geliri elde eden ülkenin *leisure* avantajını da görmez (II). III yanlıştır: GDP ara malları sayımdan özellikle çıkarır, *double counting* bir GDP kuralı değil, bir öğrenci hatasıdır."
        },
        {
          "t": "2.2",
          "q": "Econia's real GDP per capita grows by 3 percent each year while its air and water pollution steadily worsen. An economist argues that Econia's GDP growth overstates the improvement in its residents' well-being. Which of the following best supports this argument?",
          "o": [
            "GDP counts goods sold to foreign tourists twice.",
            "Real GDP is not adjusted for changes in the price level.",
            "GDP per capita does not account for population growth.",
            "GDP does not subtract environmental damage, and spending to treat pollution-related illnesses adds to GDP."
          ],
          "a": 3,
          "w": "GDP çevre zararını düşmez; üstelik kirliliğin yol açtığı hastalıkların tedavisi piyasada satıldığı için GDP'yi artırır. Bu yüzden büyüme refahtaki artışı büyük gösterir. Real GDP zaten fiyatlara göre düzeltilmiştir; kişi başı GDP de nüfusa bölünerek hesaplanır."
        },
        {
          "t": "2.3-1",
          "q": "The table shows labor market data for Lydia, in thousands of people. Lydia's unemployment rate is 8 percent. How many people are employed in Lydia?",
          "o": [
            "104 thousand",
            "1,196 thousand",
            "1,300 thousand",
            "1,840 thousand"
          ],
          "a": 1,
          "w": "*Labor force* = 2.000 − 700 = 1.300 bin. İşsiz = %8 × 1.300 = 104 bin; çalışan = 1.300 − 104 = 1.196 bin. 1.300 işgücünün tamamıdır; 1.840 ise %8'i nüfusa uygulamaktır. Unutma: işsizlik oranı işgücünün yüzdesidir.",
          "fig": {
            "type": "table",
            "head": [
              "Category",
              "Number (thousands)"
            ],
            "rows": [
              [
                "Civilian, non-institutional population age 16 and older",
                2000
              ],
              [
                "Not in the labor force",
                700
              ]
            ]
          }
        },
        {
          "t": "2.3-1",
          "q": "The table shows labor market data for an economy, in millions of people age 16 and older. Suppose 4 million of the unemployed become discouraged and stop looking for work. Which of the following correctly describes the new situation?",
          "o": [
            "Unemployment rate 4%; labor force participation rate 62.5%",
            "Unemployment rate about 4.2%; labor force participation rate 60%",
            "Unemployment rate 8%; labor force participation rate 60%",
            "Unemployment rate about 8.3%; labor force participation rate 60%"
          ],
          "a": 1,
          "w": "Önce: işgücü 100, işsiz 8, nüfus 160. Sonra 4 kişi işgücünden çıkar: işsiz 4, işgücü 96. *Unemployment rate* = 4 ÷ 96 ≈ %4,2; *LFPR* = 96 ÷ 160 = %60. %4 eski işgücüne bölmektir; *LFPR*'ı 62,5'te bırakmak *discouraged worker*'ın işgücünden çıktığını unutmaktır.",
          "fig": {
            "type": "table",
            "head": [
              "Category",
              "Number (millions)"
            ],
            "rows": [
              [
                "Employed",
                92
              ],
              [
                "Unemployed",
                8
              ],
              [
                "Not in the labor force",
                60
              ]
            ]
          }
        },
        {
          "t": "2.3-2",
          "q": "An economy's natural rate of unemployment is 4.5 percent, and its actual unemployment rate is 3.5 percent. Which of the following is true?",
          "o": [
            "Cyclical unemployment is 1 percent, and real GDP is below potential output.",
            "Cyclical unemployment is zero, because it cannot be negative.",
            "Cyclical unemployment is −1 percent, and real GDP is below potential output.",
            "Cyclical unemployment is −1 percent, and real GDP is above potential output."
          ],
          "a": 3,
          "w": "*Cyclical unemployment* = gerçek oran − doğal oran = %3,5 − %4,5 = −%1. Negatif olabilir: ekonomi normalden fazla işçi çalıştırıyor, yani real GDP *potential output*'un üstünde (*inflationary gap*). İşsizlik doğal oranın altındayken real GDP potansiyelin altında olamaz."
        },
        {
          "t": "2.3-2",
          "q": "Which of the following would most likely increase an economy's natural rate of unemployment?",
          "o": [
            "A rapid technological change that leaves many workers' skills mismatched with available jobs",
            "A recession that reduces total spending in the economy",
            "The spread of online job-matching websites that shorten job searches",
            "An increase in exports that raises demand for domestic goods"
          ],
          "a": 0,
          "w": "*Natural rate* = *frictional + structural*. Becerilerle işler arasındaki uyumsuzluğu artıran teknoloji değişimi *structural unemployment*'ı, dolayısıyla doğal oranı yükseltir. Durgunluk *cyclical* işsizliği artırır, doğal oranı değil. İş eşleştirme siteleri *frictional* işsizliği azaltır; ihracat artışı cyclical işsizliği düşürür."
        },
        {
          "t": "2.4",
          "q": "The table shows an economy's consumer price index (CPI). What are the inflation rates from Year 1 to Year 2 and from Year 2 to Year 3, respectively?",
          "o": [
            "20% and 25%",
            "25% and 20%",
            "25% and 25%",
            "25% and 50%"
          ],
          "a": 1,
          "w": "Year 1 → 2: (125 − 100) ÷ 100 = %25. Year 2 → 3: (150 − 125) ÷ 125 = %20. Her iki dönemde de CPI 25 puan arttı, ama ikinci dönemde başlangıç daha yüksek olduğu için yüzde daha küçük. %50 Year 3'ü temel yılla karşılaştırmaktır.",
          "fig": {
            "type": "table",
            "head": [
              "Year",
              "CPI"
            ],
            "rows": [
              [
                "Year 1",
                100
              ],
              [
                "Year 2",
                125
              ],
              [
                "Year 3",
                150
              ]
            ]
          }
        },
        {
          "t": "2.4",
          "q": "The cost of a market basket is $400 in Year 1, $440 in Year 2, and $500 in Year 3. If Year 2 is used as the base year, what is the CPI in Year 3?",
          "o": [
            "88.0",
            "110.0",
            "113.6",
            "125.0"
          ],
          "a": 2,
          "w": "*Base year* hangi yılsa payda o yılın sepetidir: CPI = 500 ÷ 440 × 100 ≈ 113,6. 125 Year 1'i temel almaktır; 110 Year 2'nin Year 1'e göre endeksidir; 88 ise kesri ters kurmaktır. Temel yılın CPI'ı her zaman 100'dür (burada Year 2)."
        },
        {
          "t": "2.5",
          "q": "Selin earned $20 per hour in Year 1, when the CPI was 100. In Year 2, she earns $22 per hour and the CPI is 115. Measured in Year 1 dollars, Selin's hourly wage in Year 2 is approximately",
          "o": [
            "$18.70",
            "$19.13",
            "$20.00",
            "$25.30"
          ],
          "a": 1,
          "w": "*Real wage* = nominal ücret ÷ CPI × 100 = 22 ÷ 115 × 100 ≈ 19,13 $. Ücreti %10 arttı ama fiyatlar %15 arttı; real ücreti 20 $'dan düştü. %15'i çıkarmak (18,70) yaklaşık bir kısa yoldur, tam sonuç değildir; CPI ile çarpmak (25,30) düzeltmeyi ters yönde yapmaktır."
        },
        {
          "t": "2.5",
          "q": "Suppose that everyone correctly anticipates 5 percent inflation and builds it into loan contracts. Which of the following is most likely true?",
          "o": [
            "Nominal interest rates rise by about 5 percentage points, so inflation does not redistribute wealth between borrowers and lenders.",
            "Borrowers gain at the expense of lenders, because they repay loans with less valuable money.",
            "Lenders gain at the expense of borrowers, because nominal interest rates are higher.",
            "Real interest rates rise by about 5 percentage points, so borrowing falls."
          ],
          "a": 0,
          "w": "*Anticipated inflation* sözleşmeye yazılır: borç veren istediği real faize beklenen enflasyonu ekler, nominal faiz yaklaşık 5 puan yükselir. Real faiz değişmediği için ne borçlu ne borç veren sürprizle kaybeder. Yeniden dağıtım yalnızca *unanticipated inflation*'da olur."
        },
        {
          "t": "2.6",
          "q": "An economy's real GDP is $800 billion and its GDP deflator is 125. What is the economy's nominal GDP?",
          "o": [
            "$640 billion",
            "$800 billion",
            "$925 billion",
            "$1,000 billion"
          ],
          "a": 3,
          "w": "Formülü çevir: *nominal GDP* = *real GDP* × *GDP deflator* ÷ 100 = 800 × 125 ÷ 100 = 1.000 milyar $. Deflator 100'den büyükse nominal reelden büyük olmalıdır; 640 bölmeyi ters yapmaktır. 925 ise endeksi dolar gibi eklemektir."
        },
        {
          "t": "2.6",
          "q": "The table shows data for an economy. By approximately what percent did real GDP per capita grow from Year 1 to Year 2?",
          "o": [
            "5.8%",
            "10.0%",
            "11.1%",
            "15.5%"
          ],
          "a": 0,
          "w": "Real GDP Year 2 = 1.155 ÷ 105 × 100 = 1.100 milyar $. Kişi başı: Year 1 = 1.000 ÷ 50 = 20.000 $; Year 2 = 1.100 ÷ 52 ≈ 21.154 $ → büyüme ≈ %5,8. %10 real GDP büyümesidir (nüfus unutulmuş); %11,1 nominal kişi başı büyüme; %15,5 nominal GDP büyümesidir.",
          "fig": {
            "type": "table",
            "head": [
              "Year",
              "Nominal GDP (billions of dollars)",
              "GDP deflator",
              "Population (millions)"
            ],
            "rows": [
              [
                "Year 1",
                1000,
                100,
                50
              ],
              [
                "Year 2",
                1155,
                105,
                52
              ]
            ]
          }
        },
        {
          "t": "2.7",
          "q": "The table shows an economy's real GDP over six quarters. Which of the following is correct?",
          "o": [
            "The economy reached a peak in Quarter 6 and a trough in Quarter 1.",
            "The economy reached a peak in Quarter 2 and a trough in Quarter 5.",
            "The economy reached a peak in Quarter 2 and a trough in Quarter 4.",
            "No recession occurred, because real GDP in Quarter 6 is higher than in Quarter 1."
          ],
          "a": 1,
          "w": "Real GDP 2. çeyrekte zirve (*peak*) yaptı, sonra üç çeyrek üst üste düştü (505, 498, 494): bu bir *recession*'dır. En düşük nokta 5. çeyrektir (*trough*); 6. çeyrekte *expansion* başlar. 4. çeyrekte düşüş sürüyor, dip değil. Sonradan toparlanmak yaşanan durgunluğu silmez.",
          "fig": {
            "type": "table",
            "head": [
              "Quarter",
              "Real GDP (billions of dollars)"
            ],
            "rows": [
              [
                "1",
                500
              ],
              [
                "2",
                510
              ],
              [
                "3",
                505
              ],
              [
                "4",
                498
              ],
              [
                "5",
                494
              ],
              [
                "6",
                502
              ]
            ]
          }
        },
        {
          "t": "2.7",
          "q": "The graph shows real GDP over time and its long-run trend. As the economy moves from point C to point D, which of the following is most likely to occur?",
          "o": [
            "Potential output decreases, so the natural rate of unemployment rises.",
            "Real GDP falls, and structural unemployment rises.",
            "The PPC shifts inward, because the economy loses resources.",
            "Real GDP falls, cyclical unemployment rises, and inflationary pressure eases."
          ],
          "a": 3,
          "w": "C'den D'ye ekonomi *peak*'ten *trough*'a iner: bu bir *contraction*'dır. Real GDP düşer, *cyclical unemployment* artar, potansiyelin üstündeki baskı kalkınca enflasyon yavaşlar. Trend (potansiyel çıktı) yükselmeye devam eder; kaynaklar kaybolmadığı için PPC kaymaz, ekonomi eğrinin içine iner.",
          "fig": {
            "type": "graph",
            "xlabel": "Time",
            "ylabel": "Real GDP",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0.5,
                  3
                ],
                "to": [
                  9.5,
                  7.5
                ],
                "label": "Trend",
                "dash": true,
                "color": 1
              },
              {
                "from": [
                  0.5,
                  3
                ],
                "to": [
                  2,
                  5.5
                ],
                "color": 0
              },
              {
                "from": [
                  2,
                  5.5
                ],
                "to": [
                  3.5,
                  3.2
                ],
                "color": 0
              },
              {
                "from": [
                  3.5,
                  3.2
                ],
                "to": [
                  6,
                  7.5
                ],
                "color": 0
              },
              {
                "from": [
                  6,
                  7.5
                ],
                "to": [
                  7.5,
                  5.5
                ],
                "color": 0
              },
              {
                "from": [
                  7.5,
                  5.5
                ],
                "to": [
                  9.5,
                  9
                ],
                "color": 0,
                "label": "Real GDP"
              }
            ],
            "points": [
              {
                "q": 6,
                "p": 7.5,
                "label": "C"
              },
              {
                "q": 7.5,
                "p": 5.5,
                "label": "D"
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
          "q": "In an economy, household saving is $200 billion, taxes are $300 billion, and imports are $150 billion. Investment spending is $250 billion and government purchases are $280 billion. For total injections to equal total leakages in the circular flow, exports must equal",
          "o": [
            "$20 billion",
            "$120 billion",
            "$150 billion",
            "$530 billion"
          ],
          "a": 1,
          "w": "*Leakages* = S + T + M = 200 + 300 + 150 = 650. *Injections* = I + G + X = 250 + 280 + X. Eşitlik için X = 650 − 530 = 120 milyar $. 150 ithalatın ihracata eşit olması gerektiğini varsaymaktır; 20 yalnızca vergi ile G'yi eşleştirmektir."
        },
        {
          "t": "2.1-2",
          "q": "Which of the following would be included in this year's GDP?\nI. A used-car dealer buys a car built in 2019 for $8,000 and sells it this year for $9,500. The $1,500 difference is counted.\nII. A homeowner spends a weekend painting her own house.\nIII. An investor pays a broker a fee to buy shares of stock.",
          "o": [
            "I only",
            "III only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "Arabanın kendisi geçmiş yılın üretimidir, ama galerinin bu yıl verdiği satış hizmeti (1.500 $'lık marj) yeni üretimdir: I sayılır. Aracı kurum ücreti de bu yıl üretilen bir hizmettir: III sayılır (hisse senedinin kendisi sayılmaz). Kendi evini boyamak piyasada satılmadığı için (*non-market*) II sayılmaz."
        },
        {
          "t": "2.1-2",
          "q": "The table shows the domestic stages of producing a car. The car maker also imports $60 of electronic parts from abroad and installs them in the car. All sales occur this year. By how much do these transactions increase domestic GDP?",
          "o": [
            "$300",
            "$360",
            "$420",
            "$800"
          ],
          "a": 0,
          "w": "Yurt içi *value added*: 40 + 60 + (300 − 100 − 60) + 60 = 300 $. Harcama yoluyla aynı sonuç: C = 360, ama ithal 60 $ M olarak düşülür → 360 − 60 = 300. 360 ithal parçayı yerli üretim saymaktır; 420 ithalatı eklemektir; 800 bütün satışları toplamaktır (*double counting*).",
          "fig": {
            "type": "table",
            "head": [
              "Seller → Buyer",
              "Item",
              "Sale price"
            ],
            "rows": [
              [
                "Mining firm → steel mill",
                "Iron ore",
                "$40"
              ],
              [
                "Steel mill → car maker",
                "Steel",
                "$100"
              ],
              [
                "Car maker → dealer",
                "Car",
                "$300"
              ],
              [
                "Dealer → household",
                "Car",
                "$360"
              ]
            ]
          }
        },
        {
          "t": "2.1-3",
          "q": "This year a domestic firm produces 100 new cars worth $30,000 each. It sells 60 to households, 10 to a city police department, and 20 to buyers in Canada; 10 cars remain unsold in inventory. Which of the following correctly describes how this production enters GDP?",
          "o": [
            "C rises by $1.8 million, G by $0.3 million, and X by $0.6 million, so GDP rises by $2.7 million; unsold cars are not counted until sold.",
            "C rises by $1.8 million, G by $0.3 million, and I by $0.3 million, so GDP rises by $2.4 million; cars sold to Canada count in Canada's GDP.",
            "C rises by $2.1 million and X by $0.6 million, so GDP rises by $2.7 million; police cars are transfer payments.",
            "C rises by $1.8 million, G by $0.3 million, X by $0.6 million, and I by $0.3 million, so GDP rises by $3.0 million."
          ],
          "a": 3,
          "w": "100 araba × 30.000 $ = 3,0 milyon $'lık üretimin tamamı bu yılın GDP'sidir: hane halkı 1,8 milyon (C), polis 0,3 milyon (G), Kanada 0,6 milyon (X), satılmayanlar 0,3 milyon (*inventory investment*, I). Stok üretildiği yıl sayılır; ihracat üretildiği ülkenin GDP'sidir; polis arabası bir mal alımıdır, transfer değil."
        },
        {
          "t": "2.1-3",
          "q": "The table shows data for an economy. Which of the following correctly gives GDP calculated by the expenditure approach and by the income approach, respectively?",
          "o": [
            "$1,300 billion and $1,450 billion",
            "$1,300 billion and $1,300 billion",
            "$1,400 billion and $1,300 billion",
            "$1,450 billion and $1,450 billion"
          ],
          "a": 1,
          "w": "Harcama: 1.000 + 150 + 200 + (−50) = 1.300. Gelir: 900 + 60 + 80 + 260 = 1.300. İki yol aynı sayıyı verir, çünkü her harcama birinin gelirdir. *Transfer payments* iki yöntemde de yoktur (1.450 yanlış); net ihracatın eksi işaretini artı almak 1.400 verir.",
          "fig": {
            "type": "table",
            "head": [
              "Item",
              "Amount (billions of dollars)"
            ],
            "rows": [
              [
                "Consumption",
                1000
              ],
              [
                "Gross private domestic investment",
                150
              ],
              [
                "Government purchases of goods and services",
                200
              ],
              [
                "Net exports",
                -50
              ],
              [
                "Government transfer payments",
                150
              ],
              [
                "Wages",
                900
              ],
              [
                "Rent",
                60
              ],
              [
                "Interest",
                80
              ],
              [
                "Profits",
                260
              ]
            ]
          }
        },
        {
          "t": "2.1-3",
          "q": "Which of the following would increase gross private domestic investment as measured in GDP?\nI. A firm buys newly produced machinery.\nII. A household buys newly issued corporate bonds.\nIII. Firms' inventories of unsold goods increase.",
          "o": [
            "I only",
            "II only",
            "I and III only",
            "II and III only"
          ],
          "a": 2,
          "w": "GDP'de *investment* yeni sermaye malı demektir: yeni makine (I) ve stoklara eklenen satılmamış üretim (III, *inventory investment*). Tahvil alımı (II) bir *financial transaction*'dır; para el değiştirir ama yeni bir mal üretilmez. Firma bu parayla makine alırsa o makine ayrıca sayılır."
        },
        {
          "t": "2.2",
          "q": "The table shows data for two countries. Which of the following conclusions is best supported?",
          "o": [
            "Residents of Country A enjoy higher well-being, because more hours of work raise GDP.",
            "Well-being must be equal in the two countries, because real GDP per capita is equal.",
            "Country B's GDP must be overstated, because its workers produce the same output in fewer hours.",
            "Residents of Country B may enjoy higher well-being, because GDP does not count the value of leisure."
          ],
          "a": 3,
          "w": "İki ülke kişi başına aynı malı üretiyor, ama B bunu çok daha az çalışarak yapıyor. *Leisure* refahın bir parçasıdır ve GDP onu ölçmez; bu yüzden B'de refah daha yüksek olabilir. Aynı kişi başı GDP aynı refah demek değildir; az saatte aynı üretim yüksek verimliliktir, ölçüm hatası değildir.",
          "fig": {
            "type": "table",
            "head": [
              "Country",
              "Real GDP per capita",
              "Average hours worked per week"
            ],
            "rows": [
              [
                "Country A",
                "$40,000",
                50
              ],
              [
                "Country B",
                "$40,000",
                35
              ]
            ]
          }
        },
        {
          "t": "2.2",
          "q": "In a year when a country's real GDP grows by 2 percent and its population grows by 3 percent, which of the following is most likely true?",
          "o": [
            "Real GDP per capita falls by about 1 percent.",
            "Real GDP per capita rises by about 1 percent.",
            "Real GDP per capita rises by about 2 percent.",
            "Real GDP per capita rises by about 5 percent."
          ],
          "a": 0,
          "w": "*Real GDP per capita* değişimi ≈ real GDP büyümesi − nüfus artışı = %2 − %3 ≈ −%1 (1,02 ÷ 1,03 ≈ 0,990). Ekonomi büyüdü, ama pasta kişi sayısından yavaş büyüdüğü için kişi başına düşen dilim küçüldü. Toplam büyümeyi kişi başı büyüme sanmak (%2) en sık hatadır."
        },
        {
          "t": "2.3-1",
          "q": "The table shows labor market data for Pontus, in millions of people age 16 and older. From Year 1 to Year 2, which of the following is correct?",
          "o": [
            "The unemployment rate fell from about 6.7% to about 4.8%, and the labor force participation rate fell from about 66.7% to about 64.5%.",
            "The unemployment rate fell from 10% to 7.5%, and the labor force participation rate stayed at about 66.7%.",
            "The unemployment rate fell from 10% to 7.5%, and the labor force participation rate fell from about 66.7% to about 64.5%.",
            "The unemployment rate fell from about 11.1% to about 8.1%, and the labor force participation rate fell from about 66.7% to about 64.5%."
          ],
          "a": 2,
          "w": "İşgücü iki yılda da 200: işsizlik oranı 20 ÷ 200 = %10'dan 15 ÷ 200 = %7,5'e düştü. Nüfus 300'den 310'a çıktı ama işgücü değişmedi: *LFPR* 200 ÷ 300 ≈ %66,7'den 200 ÷ 310 ≈ %64,5'e düştü. İşgücünün sabit kalması *LFPR*'ın sabit kalması demek değildir; işsizleri nüfusa ya da çalışanlara bölmek diğer seçenekleri verir.",
          "fig": {
            "type": "table",
            "head": [
              "Year",
              "Employed",
              "Unemployed",
              "Not in the labor force"
            ],
            "rows": [
              [
                "Year 1",
                180,
                20,
                100
              ],
              [
                "Year 2",
                185,
                15,
                110
              ]
            ]
          }
        },
        {
          "t": "2.3-1",
          "q": "Which of the following would cause the official unemployment rate to understate the weakness of the labor market?",
          "o": [
            "Frictionally and structurally unemployed workers",
            "Seasonal workers and retirees",
            "Workers in the underground economy who report that they are unemployed",
            "Discouraged workers and part-time workers who want full-time jobs"
          ],
          "a": 3,
          "w": "*Discouraged workers* işgücünden çıktığı için işsiz sayılmaz; tam zaman isteyen yarı zamanlılar (*underemployed*) ise çalışan sayılır. İkisi de gerçek zayıflığı resmî orandan gizler. Kayıt dışı çalışıp işsiz olduğunu söyleyenler ise oranı olduğundan yüksek gösterir. Frictional ve structural işsizler zaten orana dahildir."
        },
        {
          "t": "2.3-2",
          "q": "An economy's natural rate of unemployment is 5 percent. Its actual unemployment rate is 5 percent in Year 1, 7 percent in Year 2, and 4 percent in Year 3. Which of the following is correct?",
          "o": [
            "Year 2 has cyclical unemployment of 2 percentage points, and in Year 3 real GDP is above potential output.",
            "Year 1 has no frictional or structural unemployment, because the economy is at full employment.",
            "Year 3 has a recessionary gap, because cyclical unemployment is −1 percentage point.",
            "Year 2 is at full employment, because frictional and structural unemployment still total 5 percent."
          ],
          "a": 0,
          "w": "Year 2: *cyclical* = %7 − %5 = 2 puan (*recessionary gap*). Year 3: %4 − %5 = −1 puan; işsizlik doğal oranın altında, real GDP potansiyelin üstünde (*inflationary gap*, recessionary değil). Year 1 tam istihdamdır ama işsizlik sıfır değildir; frictional + structural %5'tir. Cyclical işsizlik varken tam istihdamdan söz edilemez."
        },
        {
          "t": "2.3-2",
          "q": "An economy's actual unemployment rate is 6 percent: frictional unemployment is 2 percent, structural unemployment is 3 percent, and cyclical unemployment is 1 percent. New automation then raises structural unemployment by 1 percentage point, while the actual unemployment rate stays at 6 percent. Which of the following is now true?",
          "o": [
            "The natural rate stays at 5 percent, and cyclical unemployment rises to 2 percent.",
            "The natural rate rises to 6 percent, and cyclical unemployment stays at 1 percent.",
            "The natural rate rises to 6 percent, and cyclical unemployment falls to 0 percent.",
            "The natural rate falls to 4 percent, and cyclical unemployment rises to 2 percent."
          ],
          "a": 2,
          "w": "Yeni *natural rate* = *frictional* + *structural* = %2 + %4 = %6. Gerçek oran %6'da kaldığı için *cyclical* = %6 − %6 = 0. Doğal oran sabit değildir; teknoloji ve beceri uyumsuzluğu onu zamanla değiştirir. Toplam %6 ile cyclical'ı 1'de tutmak toplamı %7 yapar, bu tutarsızdır."
        },
        {
          "t": "2.4",
          "q": "The table shows the market basket used to compute a consumer price index (CPI). Year 1 is the base year. What is the inflation rate from Year 2 to Year 3?",
          "o": [
            "4.8%",
            "20%",
            "24%",
            "44%"
          ],
          "a": 1,
          "w": "Sepet: Year 1 = 4 × 2 + 2 × 6 = 20 $; Year 2 = 10 + 14 = 24 $; Year 3 = 12 + 16,8 = 28,8 $. CPI: 120 ve 144. Enflasyon = (144 − 120) ÷ 120 × 100 = %20. 24 puanlık CPI farkı yüzde değildir; %44 Year 3'ü temel yılla karşılaştırmaktır; 4,8 ise sepetin dolar farkıdır.",
          "fig": {
            "type": "table",
            "head": [
              "Good",
              "Quantity in basket",
              "Price in Year 1",
              "Price in Year 2",
              "Price in Year 3"
            ],
            "rows": [
              [
                "Notebook",
                4,
                "$2.00",
                "$2.50",
                "$3.00"
              ],
              [
                "Cafeteria meal",
                2,
                "$6.00",
                "$7.00",
                "$8.40"
              ]
            ]
          }
        },
        {
          "t": "2.4",
          "q": "Over a decade, streaming services replace DVD rentals and provide each film at a much lower cost, but the CPI's market basket is updated only infrequently. As a result, the CPI most likely",
          "o": [
            "understates the increase in the cost of living, because streaming is a service rather than a good",
            "measures the cost of living accurately, because the base year is held fixed",
            "overstates the increase in the cost of living, because it includes the prices of imported goods",
            "overstates the increase in the cost of living, because it is slow to include new and cheaper goods"
          ],
          "a": 3,
          "w": "*New-product bias*: sepete geç giren yeni ve ucuz ürünler (streaming) yaşam maliyetini düşürür, ama CPI bunu geç yakalar. Bu yüzden CPI enflasyonu olduğundan büyük gösterir. Hizmetler zaten CPI'dadır; temel yılın sabit olması ise sorunun kaynağıdır, çözümü değil."
        },
        {
          "t": "2.5",
          "q": "Deniz lends a friend $1,000 for one year at a nominal interest rate of 8 percent. Both expect inflation of 3 percent, but actual inflation turns out to be 6 percent. Which of the following is true?",
          "o": [
            "The actual real interest rate is 2 percent instead of the expected 5 percent, so Deniz loses and the borrower gains.",
            "The actual real interest rate is 5 percent, as expected, because the nominal rate was fixed in advance.",
            "The actual real interest rate is 14 percent, so Deniz gains and the borrower loses.",
            "The actual real interest rate is 2 percent, but Deniz gains because she still receives $80 in interest."
          ],
          "a": 0,
          "w": "Beklenen *real interest rate* = %8 − %3 = %5; gerçekleşen = %8 − %6 = %2. Deniz 80 $ faiz alıyor ama paranın satın alma gücü beklenenden çok düştü: real getiri 5 yerine 2 puan. *Unanticipated inflation* borç verene zarar, borçluya yarar sağlar. Nominal faizin sabit olması real faizi sabitlemez."
        },
        {
          "t": "2.5",
          "q": "The table shows the annual incomes of two workers and the CPI. Which of the following is correct?",
          "o": [
            "Both workers' real incomes rose, because both nominal incomes rose.",
            "Both workers' real incomes fell, because the price level rose by 10 percent.",
            "Arda's real income fell, and Bora's real income rose.",
            "Arda's real income rose, and Bora's real income fell."
          ],
          "a": 2,
          "w": "*Real income* = nominal ÷ CPI × 100. Arda: 42.000 ÷ 1,10 ≈ 38.182 $ → düştü (nominal %5, fiyatlar %10). Bora: 45.000 ÷ 1,10 ≈ 40.909 $ → arttı (nominal %12,5). Gelir enflasyondan hızlı artarsa real gelir artar, yavaş artarsa düşer.",
          "fig": {
            "type": "table",
            "head": [
              "",
              "Year 1",
              "Year 2"
            ],
            "rows": [
              [
                "Arda's income",
                "$40,000",
                "$42,000"
              ],
              [
                "Bora's income",
                "$40,000",
                "$45,000"
              ],
              [
                "CPI",
                100,
                110
              ]
            ]
          }
        },
        {
          "t": "2.6",
          "q": "The table shows production and prices in an economy that produces only apples and phones. Year 1 is the base year. Which of the following gives the GDP deflator in Year 2 and the growth rate of real GDP from Year 1 to Year 2?",
          "o": [
            "Deflator about 94.3; real GDP growth about 17.1%",
            "Deflator about 106.1; real GDP growth about 17.1%",
            "Deflator about 106.1; real GDP growth about 24.3%",
            "Deflator about 124.3; real GDP growth about 17.1%"
          ],
          "a": 1,
          "w": "Nominal: Year 1 = 200 + 500 = 700; Year 2 = 330 + 540 = 870. Real Year 2 (Year 1 fiyatlarıyla) = 220 + 600 = 820. *Deflator* = 870 ÷ 820 × 100 ≈ 106,1; *real GDP growth* = (820 − 700) ÷ 700 ≈ %17,1. %24,3 nominal büyümedir; 124,3 nominali Year 1'e bölmektir; 94,3 kesri ters kurmaktır.",
          "fig": {
            "type": "table",
            "head": [
              "Good",
              "Quantity, Year 1",
              "Price, Year 1",
              "Quantity, Year 2",
              "Price, Year 2"
            ],
            "rows": [
              [
                "Apples",
                100,
                "$2",
                110,
                "$3"
              ],
              [
                "Phones",
                10,
                "$50",
                12,
                "$45"
              ]
            ]
          }
        },
        {
          "t": "2.6",
          "q": "The prices of imported cars rise sharply, while the prices of all domestically produced goods and services remain unchanged. Which of the following is most likely to occur?",
          "o": [
            "The GDP deflator rises, but the CPI does not change.",
            "The CPI and the GDP deflator rise by the same percentage.",
            "Neither the CPI nor the GDP deflator changes, because imports are subtracted in calculating GDP.",
            "The CPI rises, but the GDP deflator does not change."
          ],
          "a": 3,
          "w": "CPI tüketicinin aldığı sepeti ölçer ve ithal malları içerir: ithal araba pahalanınca CPI artar. *GDP deflator* yalnızca yurt içinde üretilen malları kapsar; yerli fiyatlar sabit olduğu için değişmez. Fark tersine de çalışır: deflator yatırım ve devlet mallarını içerir, CPI içermez."
        },
        {
          "t": "2.7",
          "q": "The graph shows real GDP over time and its long-run trend.\nWhich of the following statements is correct?\nI. At point P, the unemployment rate is below the natural rate.\nII. At point Q, cyclical unemployment is positive.\nIII. At point R, real GDP equals potential output, so the unemployment rate is zero.",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II, and III"
          ],
          "a": 1,
          "w": "P trendin üstünde bir *peak*: *inflationary gap*, işsizlik doğal oranın altında (I doğru). Q trendin altında bir *trough*: *recessionary gap*, *cyclical unemployment* pozitif (II doğru). R'de real GDP potansiyele eşittir, yani cyclical işsizlik sıfırdır; ama işsizlik oranı doğal orana eşittir, sıfır değildir (III yanlış).",
          "fig": {
            "type": "graph",
            "xlabel": "Time",
            "ylabel": "Real GDP",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0.5,
                  3
                ],
                "to": [
                  9.5,
                  7.5
                ],
                "label": "Trend",
                "dash": true,
                "color": 1
              },
              {
                "from": [
                  0.5,
                  3
                ],
                "to": [
                  2,
                  5.5
                ],
                "color": 0
              },
              {
                "from": [
                  2,
                  5.5
                ],
                "to": [
                  3.5,
                  3.2
                ],
                "color": 0
              },
              {
                "from": [
                  3.5,
                  3.2
                ],
                "to": [
                  6,
                  7.5
                ],
                "color": 0
              },
              {
                "from": [
                  6,
                  7.5
                ],
                "to": [
                  7.5,
                  5.5
                ],
                "color": 0
              },
              {
                "from": [
                  7.5,
                  5.5
                ],
                "to": [
                  9.5,
                  9
                ],
                "color": 0,
                "label": "Real GDP"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 5.5,
                "label": "P"
              },
              {
                "q": 3.5,
                "p": 3.2,
                "label": "Q"
              },
              {
                "q": 4.57,
                "p": 5.04,
                "label": "R"
              }
            ]
          }
        },
        {
          "t": "2.7",
          "q": "The table shows an economy's actual and potential real GDP over five quarters. Which of the following is correct?",
          "o": [
            "In Quarter 4, real GDP is $40 billion below potential, so there is a recessionary gap and cyclical unemployment is positive.",
            "In Quarter 5, the economy is in a contraction, because real GDP is below potential output.",
            "In Quarter 2, there is a recessionary gap of $10 billion.",
            "In Quarter 3, the economy is at a trough, because real GDP is below potential output."
          ],
          "a": 0,
          "w": "4. çeyrekte real GDP 990, potansiyel 1.030: 40 milyarlık *recessionary gap*, *cyclical unemployment* pozitif. 5. çeyrekte real GDP arttığı için ekonomi *expansion*'dadır; potansiyelin altında olmak daralma demek değildir. 2. çeyrekte real GDP potansiyelin 10 üstünde (*inflationary gap*). Dip 3. değil, 4. çeyrektir.",
          "fig": {
            "type": "table",
            "head": [
              "Quarter",
              "Real GDP (billions of dollars)",
              "Potential real GDP (billions of dollars)"
            ],
            "rows": [
              [
                "1",
                1000,
                1000
              ],
              [
                "2",
                1020,
                1010
              ],
              [
                "3",
                1005,
                1020
              ],
              [
                "4",
                990,
                1030
              ],
              [
                "5",
                1010,
                1040
              ]
            ]
          }
        }
      ]
    }
  ]
};
