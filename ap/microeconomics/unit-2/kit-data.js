/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/mi2N/questions.json) */
window.KIT = {
  "store": "micro-u2:v1:",
  "course": "Microeconomics",
  "unitLabel": "Unit 2 — Supply and Demand",
  "episodes": [
    {
      "no": 1,
      "code": "2.1-1",
      "slug": "mc106",
      "title": "Talep Yasası",
      "en": "The Law of Demand",
      "accent": "#B9E552",
      "seconds": 267,
      "terms": [
        "Demand",
        "Quantity demanded",
        "Willing and able",
        "Law of demand",
        "Ceteris paribus",
        "Demand schedule",
        "Demand curve",
        "Substitution effect",
        "Income effect",
        "Purchasing power",
        "Diminishing marginal utility",
        "Change in quantity demanded"
      ],
      "questions": [
        {
          "q": "Tablo, okul takımının basketbol maçı biletleri için *demand schedule*'ı gösteriyor. Başka hiçbir şey değişmeden bilet fiyatı 150 liradan 100 liraya inerse ne olur?",
          "opts": [
            "*Demand* 100 bilet artar; talep eğrisi sağa kayar",
            "*Quantity demanded* 100 bilet azalır; eğri üzerinde yukarı hareket edilir",
            "*Quantity demanded* 100 bilet artar; eğri üzerinde aşağı hareket edilir",
            "*Quantity demanded* 300 bilet artar; eğri üzerinde aşağı hareket edilir"
          ],
          "a": 2,
          "why": "Tablodan okunur: 150 lirada 200 bilet, 100 lirada 300 bilet. 300 eksi 200, 100 bilet artış. Değişen yalnızca biletin kendi fiyatı olduğu için bu bir *change in quantity demanded*'dır; eğri kaymaz, nokta eğri üzerinde aşağı iner.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Quantity demanded (bilet)"
            ],
            "rows": [
              [
                "200",
                "100"
              ],
              [
                "150",
                "200"
              ],
              [
                "100",
                "300"
              ],
              [
                "50",
                "400"
              ]
            ],
            "caption": "Demand schedule · basketbol maçı bileti"
          }
        },
        {
          "q": "Grafikte bir tüketicinin bir maldaki durumu A noktasından B noktasına geçiyor. Bu hareketi en iyi hangisi açıklar?",
          "opts": [
            "Tüketicinin gelirinin artması",
            "Malın kendi fiyatının düşmesi",
            "İkame bir malın fiyatının artması",
            "Malın kendi fiyatının artması"
          ],
          "a": 1,
          "why": "A ve B aynı D eğrisinin üzerinde; B'de fiyat daha düşük, miktar daha fazla. Aynı eğri üzerinde hareket yalnızca malın kendi fiyatı değişince olur; burada fiyat düşmüş. Gelir ya da ikame malın fiyatı değişseydi eğrinin kendisi kayardı.",
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
                  9
                ],
                "to": [
                  9,
                  1
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
                "q": 6,
                "p": 4,
                "label": "B",
                "guides": true
              }
            ]
          }
        },
        {
          "q": "Netflix öğrenci paketinin fiyatı düşünce bazı öğrenciler başka bir dizi platformundaki aboneliğini iptal edip Netflix'e geçiyor. Netflix'te *quantity demanded*'ın artmasını en iyi hangisi açıklar?",
          "opts": [
            "*Substitution effect*",
            "*Income effect*",
            "*Diminishing marginal utility*",
            "*Increase in demand*"
          ],
          "a": 0,
          "why": "Netflix ucuzlayınca rakip platform göreceli olarak pahalı kalır; öğrenciler göreceli olarak ucuz olan mala kayar. Bu *substitution effect*'tir. Talep eğrisi kaymadı; değişen Netflix'in kendi fiyatı, yani bu bir *increase in demand* değil."
        },
        {
          "q": "Haftalık dondurma bütçen 120 lira. Dondurmanın fiyatı 40 liradan 30 liraya iniyor. Aynı bütçeyle alabileceğin dondurma sayısı nasıl değişir ve bu hangi etkinin örneğidir?",
          "opts": [
            "3'ten 4'e çıkar; *substitution effect*",
            "4'ten 3'e iner; *income effect*",
            "3'ten 4'e çıkar; *diminishing marginal utility*",
            "3'ten 4'e çıkar; *income effect*"
          ],
          "a": 3,
          "why": "120 bölü 40, 3 dondurma; 120 bölü 30, 4 dondurma. Bütçen değişmedi ama fiyat düşünce paranın *purchasing power*'ı arttı ve daha çok alabildin. Bu *income effect*'tir."
        },
        {
          "q": "Aşağıdaki ifadelerden hangisi doğrudur?",
          "opts": [
            "Bir malın fiyatı düşünce o malın *demand*'i artar ve talep eğrisi sağa kayar.",
            "*Diminishing marginal utility* yüzünden tüketici aynı maldan daha çok alması için daha düşük fiyat ister.",
            "Bir malı çok isteyen ama alacak parası olmayan biri de o malın *demand*'ine dahildir.",
            "*Law of demand*'e göre fiyat ile *quantity demanded* aynı yönde hareket eder."
          ],
          "a": 1,
          "why": "Aynı maldan her ek birim daha az ek tatmin verdiği için tüketici ek birimlere daha az öder; daha çok alması için fiyat düşmelidir. Kendi fiyatı eğriyi kaydırmaz, yalnızca *quantity demanded*'ı değiştirir; talep için *willing and able* ikisi birden gerekir; *law of demand* ters ilişkidir."
        }
      ]
    },
    {
      "no": 2,
      "code": "2.1-2",
      "slug": "mc107",
      "title": "Talebi Kaydıran Etkenler",
      "en": "Demand Shifters",
      "accent": "#FF7DB8",
      "seconds": 274,
      "terms": [
        "Change in demand",
        "Increase in demand",
        "Decrease in demand",
        "Demand shifters",
        "Tastes and preferences",
        "Number of consumers",
        "Substitutes",
        "Complements",
        "Normal good",
        "Inferior good",
        "Expectations",
        "Change in quantity demanded"
      ],
      "questions": [
        {
          "q": "Grafik bir şehirdeki pizza piyasasını gösteriyor. Piyasanın A noktasından C noktasına geçmesini en iyi hangisi açıklar?",
          "opts": [
            "Pizzanın kendi fiyatının düşmesi",
            "İkame bir mal olan hamburgerin fiyatının artması",
            "Tamamlayıcı bir mal olan kolanın fiyatının artması",
            "Pizza fiyatının gelecek hafta düşeceğinin beklenmesi"
          ],
          "a": 1,
          "why": "A ve C aynı fiyatta ama C'de miktar daha fazla; C, sağa kaymış D₂ üzerinde. Yani talep arttı. İkame malın, hamburgerin pahalanması insanları pizzaya kaydırır ve talebi sağa iter. Pizzanın kendi fiyatı düşseydi D₁ üzerinde B'ye inilirdi; kola pahalanması ve fiyat düşüşü beklentisi ise talebi sola kaydırır.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity",
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
                "label": "D₁"
              },
              {
                "from": [
                  4,
                  8
                ],
                "to": [
                  10,
                  2
                ],
                "label": "D₂"
              }
            ],
            "points": [
              {
                "q": 3,
                "p": 7,
                "label": "A",
                "guides": true
              },
              {
                "q": 5,
                "p": 5,
                "label": "B",
                "guides": true
              },
              {
                "q": 5,
                "p": 7,
                "label": "C",
                "guides": true
              }
            ]
          }
        },
        {
          "q": "Tablo, okul kulübünün sattığı kurabiyelerde bir değişiklikten önceki ve sonraki talebi gösteriyor. Bu değişikliğe hangisi yol açmış olabilir?",
          "opts": [
            "Kurabiyenin fiyatı 30 liradan 10 liraya indi",
            "Kurabiyeyle birlikte içilen sütün fiyatı düştü",
            "Öğrencilerin harçlığı arttı ve kurabiye bir *normal good*",
            "Kurabiyenin yerine alınabilen kekin fiyatı düştü"
          ],
          "a": 3,
          "why": "Her fiyatta talep edilen miktar 10 azalmış: 20'den 10'a, 40'tan 30'a, 60'tan 50'ye. Bu, talebin sola kayması, yani *decrease in demand*. İkame malın, kekin ucuzlaması öğrencileri keke kaydırır. Süt ucuzlaması ve *normal good* için gelir artışı talebi sağa iter; kurabiyenin kendi fiyatı ise eğriyi kaydırmaz.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Önce: Qd",
              "Sonra: Qd"
            ],
            "rows": [
              [
                "30",
                "20",
                "10"
              ],
              [
                "20",
                "40",
                "30"
              ],
              [
                "10",
                "60",
                "50"
              ]
            ],
            "caption": "Kurabiye talebi · değişiklikten önce ve sonra"
          }
        },
        {
          "q": "Hangisi soğuk limonatanın talep eğrisini sağa kaydırır?",
          "opts": [
            "Sıcak hava dalgası yüzünden herkes serin içecek istiyor",
            "Limonatanın fiyatı 40 liradan 30 liraya iniyor",
            "Limon pahalanınca limonata üretiminin maliyeti artıyor",
            "Gelecek hafta limonatanın ucuzlayacağı duyuruluyor"
          ],
          "a": 0,
          "why": "Sıcak hava tüketicilerin zevk ve tercihlerini serin içeceklere çevirir; her fiyatta daha çok limonata istenir, talep sağa kayar. Fiyatın düşmesi yalnızca eğri üzerinde hareket; limon maliyeti satıcıyı, yani arzı etkiler; ucuzlama beklentisi ise bugünkü talebi sola kaydırır."
        },
        {
          "q": "Aşağıdakilerden hangisi pizza talebinin belirleyicilerinden biri DEĞİLDİR?",
          "opts": [
            "Tüketicilerin zevk ve tercihleri",
            "Şehirdeki alıcı sayısı",
            "Pizzacıların kullandığı peynirin fiyatı",
            "Pizza fiyatıyla ilgili gelecek beklentileri"
          ],
          "a": 2,
          "why": "Peynir pizzacının girdisidir; fiyatı üretim maliyetini, yani arzı değiştirir. Talep alıcılarla ilgilidir: zevkler, alıcı sayısı, ilişkili malların fiyatları, gelir ve beklentiler."
        },
        {
          "q": "Aşağıdaki ifadelerden hangisi doğrudur?",
          "opts": [
            "Tamamlayıcı bir malın fiyatı artarsa bu malın talebi sağa kayar.",
            "Fiyatın gelecek ay artacağı beklentisi bugünkü talebi sağa kaydırır.",
            "Gelir artınca bütün malların talep eğrisi sağa kayar.",
            "Bir malın kendi fiyatı düşerse o malın talep eğrisi sağa kayar."
          ],
          "a": 1,
          "why": "Yarın pahalanacak malı insanlar bugünden alır; bugünkü talep sağa kayar. *Complement* pahalanırsa talep sola kayar; gelir artınca *inferior good*'un talebi sola kayar, tuvalet kâğıdı gibi bazı mallarda ise pek değişmez; kendi fiyatı yalnızca *quantity demanded*'ı değiştirir."
        }
      ]
    },
    {
      "no": 3,
      "code": "2.2",
      "slug": "mc108",
      "title": "Arz Yasası ve Arzı Kaydıranlar",
      "en": "Supply",
      "accent": "#5C8DFF",
      "seconds": 276,
      "terms": [
        "Supply",
        "Quantity supplied",
        "Law of supply",
        "Supply schedule",
        "Supply curve",
        "Change in quantity supplied",
        "Increase in supply",
        "Decrease in supply",
        "Determinants of supply",
        "Input prices",
        "Excise tax",
        "Subsidy"
      ],
      "questions": [
        {
          "q": "Tablo bir tost atölyesinin arzını bir olaydan önce ve sonra gösteriyor. Bu değişikliği en iyi hangi olay açıklar?",
          "opts": [
            "Tostun fiyatı 60 liradan 40 liraya düştü",
            "Waffle'ın fiyatı düştü, makineler tosta döndü",
            "Devlet tost başına 5 lira vergi koydu",
            "Atölyeye daha hızlı bir tost makinesi geldi"
          ],
          "a": 2,
          "why": "Her fiyatta sunulan miktar 10 tost azalmış; demek ki bütün eğri sola kaymış, yani *decrease in supply*. Tost başına vergi maliyeti artırır ve arzı sola kaydırır. Fiyat düşüşü yalnızca eğri boyunca hareket ettirir; waffle'ın ucuzlaması ve yeni makine ise arzı sağa kaydırır.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Qs önce (tost)",
              "Qs sonra (tost)"
            ],
            "rows": [
              [
                "20",
                "10",
                "0"
              ],
              [
                "40",
                "20",
                "10"
              ],
              [
                "60",
                "30",
                "20"
              ],
              [
                "80",
                "40",
                "30"
              ],
              [
                "100",
                "50",
                "40"
              ]
            ],
            "caption": "Tost atölyesi · günlük arz"
          }
        },
        {
          "q": "Grafikte tost piyasası A noktasında. Diğer her şey sabitken tostun fiyatı 60 liradan 80 liraya çıkarsa ne olur?",
          "opts": [
            "A'dan B'ye, S bir boyunca hareket: *change in quantity supplied*",
            "A'dan C'ye hareket: arz sağa kayar, *increase in supply*",
            "A'dan C'ye hareket: arz sola kayar, *decrease in supply*",
            "Hiçbir hareket olmaz; arz eğrisi yalnızca kayabilir"
          ],
          "a": 0,
          "why": "Ürünün kendi fiyatı değişince eğri kaymaz; nokta aynı eğri üzerinde ilerler. 60 liradan 80 liraya çıkınca S bir üzerinde 30 tosttan 40 tosta, yani A'dan B'ye gidilir. A'dan C'ye geçmek için eğrinin kendisinin kayması, yani bir *determinant*'ın değişmesi gerekir.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity (tost)",
            "ylabel": "Price (TL)",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0.5,
                  0.5
                ],
                "to": [
                  8,
                  8
                ],
                "label": "S1"
              },
              {
                "from": [
                  2.5,
                  0.5
                ],
                "to": [
                  9.5,
                  7.5
                ],
                "label": "S2",
                "dash": true
              }
            ],
            "points": [
              {
                "q": 3,
                "p": 3,
                "label": "A",
                "guides": true
              },
              {
                "q": 4,
                "p": 4,
                "label": "B",
                "guides": true
              },
              {
                "q": 5,
                "p": 3,
                "label": "C",
                "guides": true
              }
            ],
            "xticks": [
              {
                "v": 3,
                "label": "30"
              },
              {
                "v": 4,
                "label": "40"
              },
              {
                "v": 5,
                "label": "50"
              }
            ],
            "yticks": [
              {
                "v": 3,
                "label": "60"
              },
              {
                "v": 4,
                "label": "80"
              }
            ]
          }
        },
        {
          "q": "Bir öğrenci grafikte arz eğrisini S bir'den S iki'ye kaydırıyor. S iki, S bir'in solunda ve bu yüzden daha yukarıda duruyor. Hangisi doğrudur?",
          "opts": [
            "Eğri yukarı çıktığı için *supply* artmıştır",
            "Yalnızca *quantity supplied* azalmış, *supply* aynı kalmıştır",
            "Kaymanın nedeni ürünün kendi fiyatının artmasıdır",
            "Her fiyatta daha az sunulur; bu bir *decrease in supply*'dır"
          ],
          "a": 3,
          "why": "Arzda yön yatay okunur: sola kayma, her fiyatta daha az miktar demektir, yani *decrease in supply*. Eğrinin yukarıda görünmesi, aynı miktar için daha yüksek fiyat istendiğini gösterir; bu artış değil azalıştır. Kendi fiyatı ise eğriyi hiç kaydırmaz.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity",
            "ylabel": "Price",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0.5,
                  0.5
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
                  1
                ],
                "to": [
                  7,
                  8
                ],
                "label": "S2"
              }
            ]
          }
        },
        {
          "q": "Bir çiftçi aynı tarlaya buğday da mısır da ekebiliyor. Mısırın fiyatı belirgin biçimde artarsa, diğer her şey sabitken çiftçinin buğday arzına ne olur?",
          "opts": [
            "Buğday arzı sağa kayar, çünkü mısır buğdayın ikamesidir",
            "Buğday arzı sola kayar, çünkü tarlalar mısıra ayrılır",
            "Buğdayın *quantity supplied*'ı eğri boyunca artar",
            "Hiçbir şey olmaz, çünkü buğdayın kendi fiyatı değişmedi"
          ],
          "a": 1,
          "why": "Bu *prices of other goods* kaydırıcısıdır: aynı kaynakla yapılabilecek diğer mal pahalanınca üretici kaynağı ona kaydırır. Mısır kârlılaşınca tarlalar mısıra döner ve her fiyatta daha az buğday sunulur; buğday arzı sola kayar. Talepteki ikame mantığı burada ters sonuç verir, karıştırma."
        },
        {
          "q": "Aşağıdaki olaylardan hangisi tost piyasasında arzı değil, talebi kaydırır?",
          "opts": [
            "Kaşar peynirinin fiyatı ikiye katlanıyor",
            "Tost makinelerinde yeni bir teknoloji çıkıyor",
            "Öğrencilerin harçlıkları artıyor",
            "Devlet tost üreticilerine sübvansiyon veriyor"
          ],
          "a": 2,
          "why": "Önce sor: olay kimi etkiliyor? Harçlık, yani alıcının geliri, tüketiciyi etkiler; bu bir *demand* kaydırıcısıdır. Peynir fiyatı *input prices*, makine *technology*, sübvansiyon *taxes and subsidies* maddesidir; üçü de üreticiyi etkiler ve arzı kaydırır."
        }
      ]
    },
    {
      "no": 4,
      "code": "2.3-1",
      "slug": "mi201",
      "title": "Talebin Fiyat Esnekliği",
      "en": "Price Elasticity of Demand",
      "accent": "#FF6F61",
      "seconds": 268,
      "terms": [
        "Price elasticity of demand",
        "Elasticity coefficient",
        "Percentage change",
        "Midpoint formula",
        "Elastic",
        "Inelastic",
        "Unit elastic",
        "Perfectly elastic",
        "Perfectly inelastic",
        "Substitutes"
      ],
      "questions": [
        {
          "q": "Tablo, kantindeki smoothie için iki fiyattaki günlük satışı gösteriyor. *Midpoint formula* ile talebin fiyat esnekliği ve türü nedir?",
          "opts": [
            "0,4 — *inelastic*",
            "1,33 — *elastic*",
            "2,5 — *elastic*",
            "1 — *unit elastic*"
          ],
          "a": 2,
          "why": "Miktar: 200 ÷ ortalama 200 = yüzde 100. Fiyat: 20 ÷ ortalama 50 = yüzde 40. 100 ÷ 40 = 2,5; birden büyük olduğu için *elastic*. 1,33, ortalama yerine başlangıç değerlerini kullanınca çıkan yanlış sonuçtur.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Quantity demanded (bardak/gün)"
            ],
            "rows": [
              [
                "40",
                "300"
              ],
              [
                "60",
                "100"
              ]
            ],
            "caption": "Smoothie talebi"
          }
        },
        {
          "q": "Grafikteki iki talep eğrisi E noktasından geçiyor. Fiyat 5'ten 6'ya çıkarsa hangisi doğrudur?",
          "opts": [
            "D_B'de miktar 5'ten 3'e iner; bu aralıkta D_B daha esnektir.",
            "D_A'da miktar daha çok azalır; bu aralıkta D_A daha esnektir.",
            "İki eğri aynı noktadan geçtiği için esneklikleri eşittir.",
            "D_A dik olduğu için *perfectly inelastic*'tir."
          ],
          "a": 0,
          "why": "Aynı fiyat artışında D_B'de miktar 5'ten 3'e (G), D_A'da yalnızca 5'ten 4,8'e (F) iner. Yayvan eğri fiyata daha duyarlıdır. D_A dik ama dikey değil; miktar biraz değiştiği için *perfectly inelastic* değildir.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity",
            "ylabel": "Price",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  4,
                  10
                ],
                "to": [
                  6,
                  0
                ],
                "label": "D_A"
              },
              {
                "from": [
                  0,
                  7.5
                ],
                "to": [
                  10,
                  2.5
                ],
                "label": "D_B"
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
                "q": 4.8,
                "p": 6,
                "label": "F"
              },
              {
                "q": 3,
                "p": 6,
                "label": "G",
                "guides": true
              }
            ],
            "hlines": [
              {
                "p": 6,
                "label": "6"
              }
            ]
          }
        },
        {
          "q": "Aşağıdakilerden hangisinin talebi *perfectly inelastic* talebe en yakındır?",
          "opts": [
            "Kantinde satılan bir marka cips",
            "Pazarda yirmi tezgâhın sattığı domates",
            "Hafta sonu sinema bileti",
            "Diyabet hastası için insülin"
          ],
          "a": 3,
          "why": "İnsülinin yakın bir ikamesi yoktur ve hasta için hayati bir ihtiyaçtır; fiyat değişse de alınan miktar neredeyse aynı kalır, talep eğrisi dikeye yakındır. Cips ve sinemanın ikameleri bol; tek bir tezgâhın domatesi ise *perfectly elastic*'e yakındır."
        },
        {
          "q": "Bir oyunun dijital sürümünün talep esneklik katsayısı 0,5'tir. Fiyat yüzde 20 artarsa talep edilen miktara ne olur?",
          "opts": [
            "Yüzde 40 düşer",
            "Yüzde 10 düşer",
            "Yüzde 2,5 düşer",
            "Yüzde 10 artar"
          ],
          "a": 1,
          "why": "Katsayı = miktardaki yüzde değişim ÷ fiyattaki yüzde değişim, yani miktardaki değişim = 0,5 × 20 = yüzde 10. Talep yasası gereği fiyat artınca miktar düşer."
        },
        {
          "q": "Bir öğrenci esneklik katsayısını −1,8 buluyor ve \"sonuç sıfırdan küçük, demek ki talep *inelastic*\" diyor. Hangisi doğrudur?",
          "opts": [
            "Öğrenci haklıdır; negatif katsayı *inelastic* talep demektir.",
            "Katsayı negatif çıktığı için mal bir *inferior good*'dur.",
            "Eksi işareti yalnızca talep yasasını gösterir; mutlak değer 1,8 birden büyük olduğu için talep *elastic*'tir.",
            "Negatif katsayı hesap hatasıdır; doğru hesapta esneklik hep pozitif çıkar."
          ],
          "a": 2,
          "why": "Fiyat ve talep edilen miktar ters yönde hareket ettiği için katsayı hep eksi çıkar; *AP*'de eksiyi atıp mutlak değere bakarız. 1,8 > 1 olduğundan talep *elastic*'tir. *Inferior good* gelir esnekliğiyle ilgilidir, fiyat esnekliğiyle değil."
        }
      ]
    },
    {
      "no": 5,
      "code": "2.3-2",
      "slug": "mi202",
      "title": "Toplam Gelir Testi ve Esneklik",
      "en": "Total Revenue Test and Determinants of Elasticity",
      "accent": "#A98BFF",
      "seconds": 265,
      "terms": [
        "Total revenue",
        "Total revenue test",
        "Elastic",
        "Inelastic",
        "Unit elastic",
        "Slope vs elasticity",
        "Determinants of price elasticity of demand",
        "Substitutes",
        "Necessity vs luxury",
        "Share of income",
        "Time horizon"
      ],
      "questions": [
        {
          "q": "Tablo, okul kermesindeki kurabiye talebini gösteriyor. Hangisi doğrudur?",
          "opts": [
            "Fiyat 10'dan 8 liraya inerken talep *elastic*'tir.",
            "Fiyat 6'dan 4 liraya inerken talep *elastic*'tir.",
            "Fiyat 8'den 6 liraya inerken talep *inelastic*'tir.",
            "Fiyat düştükçe toplam gelir her aralıkta artar."
          ],
          "a": 0,
          "why": "Toplam gelir: 200, 240, 240, 200 lira. 10'dan 8'e fiyat düşerken gelir arttı: ters yön, *elastic*. 8'den 6'ya gelir değişmedi: *unit elastic*. 6'dan 4'e gelir düştü: aynı yön, *inelastic*.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Quantity demanded",
              "Total revenue (TL)"
            ],
            "rows": [
              [
                "10",
                "20",
                "200"
              ],
              [
                "8",
                "30",
                "240"
              ],
              [
                "6",
                "40",
                "240"
              ],
              [
                "4",
                "50",
                "200"
              ]
            ],
            "caption": "Kermes kurabiyesi"
          }
        },
        {
          "q": "Grafikteki doğrusal talep eğrisinde toplam gelir hangi noktada en yüksektir ve A'dan B'ye inerken talep nasıldır?",
          "opts": [
            "A noktasında; A ile B arasında talep *inelastic*",
            "C noktasında; B ile C arasında talep *elastic*",
            "B noktasında; A ile B arasında talep *elastic*",
            "Eğim sabit olduğu için üç noktada da toplam gelir eşit"
          ],
          "a": 2,
          "why": "Toplam gelir A'da 8 × 2 = 16, B'de 5 × 5 = 25, C'de 2 × 8 = 16. A'dan B'ye fiyat düşerken gelir artıyor; demek ki üst yarıda talep *elastic*. Eğim her yerde aynı ama esneklik değişir; tepe noktası *unit elastic* olan orta noktadır.",
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
                "q": 5,
                "p": 5,
                "label": "B",
                "guides": true
              },
              {
                "q": 8,
                "p": 2,
                "label": "C",
                "guides": true
              }
            ]
          }
        },
        {
          "q": "Aşağıdaki malların hangisinin talebi en *elastic*'tir?",
          "opts": [
            "Sofra tuzu",
            "Belirli bir markanın spor ayakkabısı",
            "Fiyat artışından bir hafta sonra benzin",
            "Astım hastası için ilaç"
          ],
          "a": 1,
          "why": "Tek bir markanın ayakkabısının çok sayıda yakın ikamesi vardır ve bütçede küçümsenmeyecek bir pay tutar; fiyatı artınca alıcılar başka markaya geçer. Tuz bütçede çok küçük bir paydır, kısa vadede benzinin ikamesi azdır, ilaç ise bir ihtiyaçtır."
        },
        {
          "q": "Akaryakıt fiyatları kalıcı olarak yüzde 30 artıyor. Hangisi en doğru beklentidir?",
          "opts": [
            "Talep kısa vadede *elastic*, uzun vadede *inelastic* olur.",
            "Talep hem kısa hem uzun vadede *perfectly inelastic*'tir.",
            "Zaman geçtikçe talep eğrisi sağa kayar.",
            "Talep kısa vadede *inelastic*, uzun vadede daha *elastic* olur."
          ],
          "a": 3,
          "why": "İlk günlerde insanların işe gitmek için başka seçeneği azdır; talep edilen miktar az düşer. Zamanla toplu taşımaya, bisiklete ya da daha az yakan araçlara geçerler; uzun vadede talep daha esnektir. Fiyat değişimi eğriyi kaydırmaz."
        },
        {
          "q": "Bir kafenin sabah kahvesi talebi *inelastic*'tir. Kafe sahibi toplam gelirini artırmak istiyor. Ne yapmalıdır?",
          "opts": [
            "Fiyatı düşürmeli, çünkü daha çok kahve satar ve gelir artar.",
            "Fiyatı değiştirmemeli, çünkü *inelastic* talepte gelir sabittir.",
            "Fiyatı artırmalı, çünkü satış oransal olarak daha az düşer ve gelir artar.",
            "Fiyatı artırmalı, çünkü *inelastic* talepte satış miktarı da artar."
          ],
          "a": 2,
          "why": "*Inelastic* talepte fiyat ve toplam gelir aynı yöne gider. Fiyat artınca satılan miktar biraz düşer ama fiyattaki artıştan daha küçük oranda; çarpım büyür. Satış miktarı artmaz; talep yasası hâlâ geçerlidir."
        }
      ]
    },
    {
      "no": 6,
      "code": "2.4",
      "slug": "mi203",
      "title": "Arzın Fiyat Esnekliği",
      "en": "Price Elasticity of Supply",
      "accent": "#58C9FF",
      "seconds": 246,
      "terms": [
        "Price elasticity of supply",
        "Quantity supplied",
        "Elastic supply",
        "Inelastic supply",
        "Perfectly inelastic supply",
        "Perfectly elastic supply",
        "Spare capacity",
        "Inventories",
        "Input mobility",
        "Short run vs long run"
      ],
      "questions": [
        {
          "q": "Tablo, okul kulübünün ürettiği bilekliklerin iki fiyattaki arzını gösteriyor. *Midpoint formula* ile arz esnekliği ve türü nedir?",
          "opts": [
            "2,0 — *elastic*",
            "1,67 — *elastic*",
            "0,6 — *inelastic*",
            "1,0 — *unit elastic*"
          ],
          "a": 1,
          "why": "Miktar: 50 ÷ ortalama 75 = yüzde 66,7. Fiyat: 10 ÷ ortalama 25 = yüzde 40. 66,7 ÷ 40 ≈ 1,67; birden büyük, arz *elastic*. 2,0 başlangıç değerlerine bölünce çıkar; 0,6 ise kesrin ters çevrilmiş hâlidir.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL)",
              "Quantity supplied (bileklik/hafta)"
            ],
            "rows": [
              [
                "20",
                "50"
              ],
              [
                "30",
                "100"
              ]
            ],
            "caption": "Kulüp bilekliği arzı"
          }
        },
        {
          "q": "Grafikteki üç arz eğrisi aynı simit fırınının bu sabahki, birkaç gün sonraki ve aylar sonraki arzını gösteriyor. Hangisi doğru eşleştirmedir?",
          "opts": [
            "S₃ bu sabah, S₂ birkaç gün sonra, S₁ aylar sonra",
            "S₂ bu sabah, S₁ birkaç gün sonra, S₃ aylar sonra",
            "Üç eğri aynı noktadan geçtiği için zamanla ilgileri yoktur",
            "S₁ bu sabah, S₂ birkaç gün sonra, S₃ aylar sonra"
          ],
          "a": 3,
          "why": "Bu sabah çıkan simit sayısı sabittir: dikey S₁. Birkaç günde ek vardiya üretimi biraz artırır: dik S₂. Aylar içinde yeni fırınlar açılır: yayvan S₃. Zaman uzadıkça arz daha esnek olur.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity",
            "ylabel": "Price",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  5,
                  0
                ],
                "to": [
                  5,
                  10
                ],
                "label": "S₁"
              },
              {
                "from": [
                  4,
                  0
                ],
                "to": [
                  6,
                  10
                ],
                "label": "S₂"
              },
              {
                "from": [
                  0,
                  4
                ],
                "to": [
                  10,
                  6
                ],
                "label": "S₃"
              }
            ],
            "points": [
              {
                "q": 5,
                "p": 5,
                "label": "E",
                "guides": true
              }
            ]
          }
        },
        {
          "q": "Aşağıdakilerden hangisinin arzı en *elastic*'tir?",
          "opts": [
            "Yarısı boş çalışan bir fabrikada üretilen plastik su şişesi",
            "Yüz yıllık el dokuması antika halılar",
            "Bir futbol stadyumundaki koltuklar, maç günü",
            "Ağaçlarının meyve vermesi yıllar süren fındık, bu yıl"
          ],
          "a": 0,
          "why": "Boş kapasitesi olan fabrika fiyat artınca üretimi hızla artırabilir; girdiler de kolay bulunur. Antika halı yeniden üretilemez, stadyum koltuğu maç günü sabittir, fındık ağacı ise yıllar ister; bunların arzı *inelastic*."
        },
        {
          "q": "Aşağıdaki ifadelerden hangisi doğrudur?",
          "opts": [
            "Arz esnekliği katsayısı, arz yasası yüzünden genellikle negatiftir.",
            "Fiyat artınca toplam gelir artıyorsa arz *inelastic*'tir.",
            "Zaman uzadıkça bir malın arzı daha *elastic* hâle gelir.",
            "Dikey bir arz eğrisi *perfectly elastic*'tir."
          ],
          "a": 2,
          "why": "Zamanla üreticiler yeni makine alır, yeni firmalar girer; arz esnekleşir. Arz yasası fiyat ve miktarı aynı yöne götürdüğü için katsayı pozitiftir; toplam gelir testi yalnızca talep için kullanılır; dikey arz *perfectly inelastic*'tir."
        },
        {
          "q": "Bir konser salonunda 2 bin koltuk var ve konser gecesi koltuk eklenemiyor. Şarkıcının şarkısı viral olunca bilet talebi artıyor. Ne olur?",
          "opts": [
            "Fiyat da miktar da artar; arz esnek olduğu için daha çok bilet satılır.",
            "Fiyat artar, satılan bilet sayısı değişmez.",
            "Miktar artar, fiyat değişmez.",
            "Arz eğrisi sağa kayar ve fiyat düşer."
          ],
          "a": 1,
          "why": "Koltuk sayısı sabit olduğu için arz dikeydir, yani *perfectly inelastic*. Talep sağa kayınca miktar 2 binde kalır; bütün tepki fiyata gider. Talep artışı arz eğrisini kaydırmaz."
        }
      ]
    },
    {
      "no": 7,
      "code": "2.5",
      "slug": "mi204",
      "title": "Çapraz ve Gelir Esnekliği",
      "en": "Cross-Price and Income Elasticity",
      "accent": "#B9E552",
      "seconds": 267,
      "terms": [
        "Cross-price elasticity of demand",
        "Substitutes",
        "Complements",
        "Unrelated goods",
        "Income elasticity of demand",
        "Normal good",
        "Inferior good",
        "Luxury",
        "Necessity",
        "Midpoint formula"
      ],
      "questions": [
        {
          "q": "Tablo, tablet fiyatı değişmeden önce ve sonra tablet kalemi talebini gösteriyor. *Midpoint formula* ile çapraz fiyat esnekliği ve iki malın ilişkisi nedir?",
          "opts": [
            "+0,5 — *substitutes*",
            "−0,5 — *complements*",
            "−2,0 — *complements*",
            "−0,5 — *inferior goods*"
          ],
          "a": 1,
          "why": "Kalem miktarı: −100 ÷ ortalama 500 = yüzde −20. Tablet fiyatı: 2.000 ÷ ortalama 5.000 = yüzde +40. −20 ÷ 40 = −0,5. İşaret negatif: tablet pahalanınca kalem daha az alınıyor, yani *complements*. *Inferior good* gelir esnekliğiyle ilgilidir.",
          "fig": {
            "type": "table",
            "head": [
              "",
              "Önce",
              "Sonra"
            ],
            "rows": [
              [
                "Tablet fiyatı (TL)",
                "4.000",
                "6.000"
              ],
              [
                "Tablet kalemi talebi (adet/ay)",
                "550",
                "450"
              ]
            ],
            "caption": "Tablet ve tablet kalemi"
          }
        },
        {
          "q": "Tablo üç malın gelir esnekliğini gösteriyor. Hangisi doğru sınıflandırmadır?",
          "opts": [
            "X ihtiyaç malı, Y lüks mal, Z *normal good*",
            "X *inferior good*, Y ihtiyaç malı, Z lüks mal",
            "X lüks mal, Y *inferior good*, Z ihtiyaç malı",
            "X lüks mal, Y ihtiyaç malı, Z *inferior good*"
          ],
          "a": 3,
          "why": "Gelir esnekliği birden büyükse lüks (X, 2,1), sıfır ile bir arasındaysa ihtiyaç (Y, 0,3); ikisi de *normal good*'dur. Negatifse *inferior good* (Z, −0,8): gelir artınca daha az alınır.",
          "fig": {
            "type": "table",
            "head": [
              "Mal",
              "Income elasticity"
            ],
            "rows": [
              [
                "X",
                "+2,1"
              ],
              [
                "Y",
                "+0,3"
              ],
              [
                "Z",
                "−0,8"
              ]
            ],
            "caption": "Gelir esneklikleri"
          }
        },
        {
          "q": "Ailelerin geliri yüzde 20 artınca yurt dışı tatil talebi yüzde 30 artıyor. Hangisi doğrudur?",
          "opts": [
            "Gelir esnekliği 1,5'tir; tatil bir lüks mal ve *normal good*'dur.",
            "Gelir esnekliği 0,67'dir; tatil bir ihtiyaç malıdır.",
            "Gelir esnekliği 1,5'tir; tatil bir *inferior good*'dur.",
            "Gelir esnekliği −1,5'tir; tatil bir lüks maldır."
          ],
          "a": 0,
          "why": "Gelir esnekliği = 30 ÷ 20 = +1,5. Pozitif olduğu için *normal good*, birden büyük olduğu için lüks mal. 0,67 kesri ters çevirince çıkar."
        },
        {
          "q": "İki mal arasındaki çapraz fiyat esnekliği −1,2 bulunuyor. Bir öğrenci \"esneklikte eksi atılır; +1,2, demek ki *substitutes*\" diyor. Hangisi doğrudur?",
          "opts": [
            "Öğrenci haklıdır; esneklik hep mutlak değerle yorumlanır.",
            "Mallar ilişkisizdir, çünkü katsayı birden büyüktür.",
            "Öğrenci yanılıyor; çapraz esneklikte işaret korunur ve negatif sonuç *complements* demektir.",
            "Öğrenci yanılıyor; negatif sonuç malların *inferior good* olduğunu gösterir."
          ],
          "a": 2,
          "why": "Eksiyi atma kuralı yalnızca kendi fiyat esnekliği içindir. Çapraz esneklikte işaret ilişkiyi söyler: negatifse biri pahalanınca ötekinin talebi düşer, yani *complements*. İlişkisiz mallarda esneklik sıfıra yakındır."
        },
        {
          "q": "Ekonomi durgunluğa giriyor ve hane gelirleri düşüyor. Aşağıdaki gelir esnekliklerinden hangisine sahip malın satışlarının artması beklenir?",
          "opts": [
            "+2,5",
            "−0,7",
            "+0,4",
            "+1,0"
          ],
          "a": 1,
          "why": "Gelir düşerken talebi artan mal *inferior good*'dur; gelir esnekliği negatiftir. Pozitif esnekliğe sahip *normal good*'ların talebi gelirle birlikte düşer; en çok da +2,5 gibi lüks malların talebi düşer."
        }
      ]
    },
    {
      "no": 8,
      "code": "2.6-1",
      "slug": "mc109",
      "title": "Denge, Fazla ve Kıtlık",
      "en": "Equilibrium and Disequilibrium",
      "accent": "#F6B94A",
      "seconds": 241,
      "terms": [
        "Equilibrium",
        "Equilibrium price",
        "Equilibrium quantity",
        "Market-clearing price",
        "Disequilibrium",
        "Surplus",
        "Shortage",
        "Quantity demanded",
        "Quantity supplied",
        "Bid up",
        "Price signals"
      ],
      "questions": [
        {
          "q": "Okul basketbol kulübü taraftar tişörtü satıyor. Tabloya göre fiyat 300 lira olursa ne olur?",
          "opts": [
            "30 tişörtlük *shortage* oluşur ve fiyat yükselir",
            "75 tişörtlük *surplus* oluşur ve fiyat düşer",
            "30 tişörtlük *surplus* oluşur ve fiyat düşer",
            "30 tişörtlük *surplus* oluşur ve fiyat yükselir"
          ],
          "a": 2,
          "why": "300 lirada *quantity demanded* 45, *quantity supplied* 75. Arz edilen daha fazla olduğu için *surplus* var: 75 eksi 45, 30 tişört. Fiyat 250 liralık dengenin üstünde; satıcılar elde kalan tişörtleri satmak için fiyatı düşürür.",
          "fig": {
            "type": "table",
            "head": [
              "Fiyat (TL)",
              "Quantity demanded",
              "Quantity supplied"
            ],
            "rows": [
              [
                "150",
                "90",
                "30"
              ],
              [
                "200",
                "75",
                "45"
              ],
              [
                "250",
                "60",
                "60"
              ],
              [
                "300",
                "45",
                "75"
              ],
              [
                "350",
                "30",
                "90"
              ]
            ],
            "caption": "Taraftar tişörtü piyasası (adet)"
          }
        },
        {
          "q": "Grafikte telefon kılıfı piyasası gösteriliyor. Fiyat 30 lirada kalırsa hangisi doğrudur?",
          "opts": [
            "400 kılıflık *shortage* olur",
            "400 kılıflık *surplus* olur",
            "700 kılıflık *shortage* olur",
            "300 kılıflık *shortage* olur"
          ],
          "a": 0,
          "why": "30 lira çizgisi talep eğrisini 700'de, arz eğrisini 300'de keser. Talep edilen miktar daha fazla, yani *shortage* var: 700 eksi 300, 400 kılıf. 700 ya da 300 tek başına açığın büyüklüğü değildir; aynı fiyattaki iki miktarın farkına bakılır.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity (adet)",
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
                "label": "S",
                "dash": false
              }
            ],
            "points": [
              {
                "q": 5,
                "p": 5,
                "label": "E",
                "guides": true
              }
            ],
            "hlines": [
              {
                "p": 3,
                "label": "30 TL"
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
            ],
            "yticks": [
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
          "q": "*Market equilibrium* ile ilgili hangi ifade doğrudur?",
          "opts": [
            "Denge fiyatı, alıcıların bir ürün için ödemeye razı olduğu en yüksek fiyattır",
            "Fiyat denge fiyatının üstündeyse alıcılar fiyatı yukarı iter",
            "*Shortage*, fiyat denge fiyatının üstünde olduğunda ortaya çıkar",
            "Denge fiyatında *quantity demanded* ile *quantity supplied* eşittir ve piyasa temizlenir"
          ],
          "a": 3,
          "why": "Dengede talep edilen ve arz edilen miktar eşittir; satılmayan mal da eli boş dönen alıcı da kalmaz. Fiyat dengenin üstündeyse *surplus* olur ve fiyat düşer; *shortage* ise fiyat dengenin altındayken oluşur."
        },
        {
          "q": "Kantinci tostu 40 liradan 30 liraya indirince kuyruk uzadı ve tostlar yetişmedi. Arkadaşın \"Tostun *demand*'i arttı, talep eğrisi sağa kaydı\" diyor. En doğru açıklama hangisi?",
          "opts": [
            "Arkadaşın haklı; fiyat düşüşü *demand*'i artırır ve talep eğrisi sağa kayar",
            "Eğri kaymadı; *quantity demanded* arttı, *quantity supplied* azaldı ve *shortage* oluştu",
            "Arz eğrisi sola kaydı; kuyruğun nedeni *supply*'ın azalması",
            "Fiyat düşünce *surplus* oluştu; bu yüzden tostlar yetişmedi"
          ],
          "a": 1,
          "why": "Ürünün kendi fiyatı eğrileri kaydırmaz; yalnızca eğriler üzerinde hareket ettirir. 30 lirada öğrenciler daha çok, kantinci daha az tost ister; talep edilen miktar arz edilenden fazla olduğu için *shortage* oluşur."
        },
        {
          "q": "Simidin denge fiyatı 15 lira. Bir kural, simidin 20 liranın altında satılmasını yasaklıyor. 20 lirada 300 simit isteniyor, 500 simit üretiliyor. Ne olur?",
          "opts": [
            "200 simitlik *surplus* oluşur ama fiyat düşerek kısa sürede kapanır",
            "200 simitlik *shortage* oluşur ve alıcılar fiyatı yukarı iter",
            "200 simitlik *surplus* oluşur ve kural sürdükçe kapanmaz",
            "Fiyat dengenin üstünde olduğu için piyasa temizlenir"
          ],
          "a": 2,
          "why": "20 lirada arz edilen 500, talep edilen 300: 500 eksi 300, 200 simitlik *surplus*. Normalde satıcılar fiyatı düşürüp fazlayı eritirdi; ama kural fiyatın 20 liranın altına inmesine izin vermediği için fazla kalıcı olur."
        }
      ]
    },
    {
      "no": 9,
      "code": "2.7",
      "slug": "mc110",
      "title": "Dengenin Değişmesi ve Çift Kayma",
      "en": "Changes in Equilibrium",
      "accent": "#2FD6B9",
      "seconds": 254,
      "terms": [
        "Change in demand",
        "Change in supply",
        "Shifter",
        "Input price",
        "Technology",
        "Substitute",
        "Complement",
        "Related markets",
        "Double shift rule",
        "Indeterminate"
      ],
      "questions": [
        {
          "q": "Okulun tam karşısına ikinci bir tostçu açıldı. Bölgedeki tost piyasasında ne olur?",
          "opts": [
            "*Demand* sağa kayar; fiyat ve miktar artar",
            "*Supply* sağa kayar; fiyat düşer, miktar artar",
            "*Supply* sola kayar; fiyat artar, miktar düşer",
            "*Supply* sağa kayar; fiyat ve miktar artar"
          ],
          "a": 1,
          "why": "Yeni tostçu satıcı sayısını artırır; bu bir *supply* kaydırıcısıdır (*number of sellers*) ve arz sağa kayar. Arz kayınca fiyat ve miktar zıt yöne gider: fiyat düşer, miktar artar."
        },
        {
          "q": "Grafikte konser tişörtü piyasası gösteriliyor. Arz eğrisinin S'den S1'e geçmesini en iyi hangi olay açıklar?",
          "opts": [
            "Tişörtün kendi fiyatı yükseldi",
            "Grup çok popüler oldu ve hayran sayısı arttı",
            "Tişört basan yeni bir makine üretimi hızlandırdı",
            "Tişörtlerde kullanılan pamuğun fiyatı arttı"
          ],
          "a": 3,
          "why": "Eğri sola kaymış: arz azalmış, yeni denge E1'de fiyat yükselmiş, miktar düşmüş. Bunu bir girdi fiyatının artması, yani pahalanan pamuk açıklar. Ürünün kendi fiyatı eğriyi kaydırmaz; hayran artışı talebi, yeni makine arzı sağa kaydırırdı.",
          "fig": {
            "type": "graph",
            "xlabel": "Quantity",
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
                "label": "D"
              },
              {
                "from": [
                  2,
                  2
                ],
                "to": [
                  8,
                  8
                ],
                "label": "S",
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
                "label": "S1",
                "dash": false
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
                "q": 4,
                "p": 6,
                "label": "E1",
                "guides": true
              }
            ]
          }
        },
        {
          "q": "Şekerli içeceklerin sağlığa zararını gösteren büyük bir araştırma yayımlandı; aynı ay şeker de ucuzladı. Kola piyasası için hangisi doğrudur?",
          "opts": [
            "Fiyat kesin düşer; miktar belirsizdir",
            "Miktar kesin düşer; fiyat belirsizdir",
            "Fiyat da miktar da kesin düşer",
            "Fiyat kesin artar; miktar belirsizdir"
          ],
          "a": 0,
          "why": "Araştırma talebi sola kaydırır: fiyat aşağı, miktar aşağı. Ucuzlayan şeker bir girdi olduğu için arzı sağa kaydırır: fiyat aşağı, miktar yukarı. İkisi de fiyatı aşağı ittiği için fiyat kesin düşer; miktar ters yönlere çekildiği için *indeterminate* olur."
        },
        {
          "q": "Süt fiyatı önemli ölçüde arttı. Dondurmayla birlikte kullanılan dondurma külahı piyasasında ne olur?",
          "opts": [
            "Külahın *supply*'ı sola kayar; fiyat artar, miktar düşer",
            "Külahın *demand*'i sağa kayar; fiyat ve miktar artar",
            "Külahın *demand*'i sola kayar; fiyat ve miktar düşer",
            "Külah piyasası etkilenmez, çünkü külahın içinde süt yok"
          ],
          "a": 2,
          "why": "Süt dondurmanın girdisidir: dondurmanın arzı sola kayar ve dondurma pahalanır. Külah dondurmanın *complement*'idir; dondurma pahalanınca daha az külah istenir, külahın talebi sola kayar ve hem fiyatı hem miktarı düşer."
        },
        {
          "q": "Tabloda dört piyasada denge fiyatı ve denge miktarının nasıl değiştiği verilmiş. Hangi piyasada değişimin tek nedeni arzın azalması olabilir?",
          "opts": [
            "Piyasa A",
            "Piyasa B",
            "Piyasa C",
            "Piyasa D"
          ],
          "a": 1,
          "why": "Arz sola kayınca fiyat ve miktar zıt yöne gider: fiyat artar, miktar düşer; bu Piyasa B. Fiyatın artması tek başına talebin arttığını göstermez: Piyasa C'de ikisi birlikte arttığı için o talep artışıdır.",
          "fig": {
            "type": "table",
            "head": [
              "Piyasa",
              "Denge fiyatı",
              "Denge miktarı"
            ],
            "rows": [
              [
                "A",
                "düştü",
                "düştü"
              ],
              [
                "B",
                "arttı",
                "düştü"
              ],
              [
                "C",
                "arttı",
                "arttı"
              ],
              [
                "D",
                "düştü",
                "arttı"
              ]
            ],
            "caption": "Her piyasada tek bir eğri kaydı"
          }
        }
      ]
    },
    {
      "no": 10,
      "code": "2.8-1",
      "slug": "mi206",
      "title": "Fiyat Tavanı ve Fiyat Tabanı",
      "en": "Price Ceilings and Price Floors",
      "accent": "#5C8DFF",
      "seconds": 239,
      "terms": [
        "Price ceiling",
        "Price floor",
        "Binding",
        "Non-binding",
        "Shortage",
        "Surplus",
        "Black market",
        "Minimum wage",
        "Quantity control (quota)",
        "Deadweight loss"
      ],
      "questions": [
        {
          "q": "Grafikte dikey eksende 1 birim 10 lira, yatay eksende 1 birim 100 bilettir. Devlet konser biletine 30 liralık bir fiyat tavanı koyuyor. Sonuç nedir?",
          "opts": [
            "400 biletlik *surplus*",
            "400 biletlik *shortage*",
            "700 biletlik *shortage*",
            "Hiçbir değişiklik olmaz; tavan bağlayıcı değildir"
          ],
          "a": 1,
          "why": "Denge 50 lira. 30 liralık tavan dengenin altında, yani bağlayıcı. Bu fiyatta talep edilen miktar 700, arz edilen 300 bilet; fark 700 − 300 = 400 biletlik *shortage*. 700 yalnızca talep edilen miktardır.",
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
              },
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  10,
                  10
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
                "p": 3,
                "label": "A",
                "guides": true
              },
              {
                "q": 7,
                "p": 3,
                "label": "B",
                "guides": true
              }
            ],
            "hlines": [
              {
                "p": 3,
                "label": "Ceiling"
              }
            ]
          }
        },
        {
          "q": "Tablo süt piyasasını gösteriyor. Devlet litre başına 50 liralık bir fiyat tabanı koyuyor. Ne olur?",
          "opts": [
            "40 litrelik *surplus* oluşur; satılan miktar 30 litreye düşer.",
            "40 litrelik *shortage* oluşur; fiyat 40 liraya iner.",
            "Taban dengenin altında olduğu için bağlayıcı değildir.",
            "70 litrelik *surplus* oluşur; satılan miktar 70 litre olur."
          ],
          "a": 0,
          "why": "Denge 40 lira ve 50 litre. 50 liralık taban dengenin üstünde, yani bağlayıcı. Bu fiyatta 70 litre arz edilir ama yalnızca 30 litre talep edilir: 70 − 30 = 40 litre *surplus*. Alıcılar 30 litre aldığı için satılan miktar 30'dur.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL/litre)",
              "Qd (litre)",
              "Qs (litre)"
            ],
            "rows": [
              [
                "30",
                "70",
                "30"
              ],
              [
                "40",
                "50",
                "50"
              ],
              [
                "50",
                "30",
                "70"
              ],
              [
                "60",
                "10",
                "90"
              ]
            ],
            "caption": "Süt piyasası"
          }
        },
        {
          "q": "Bir malın denge fiyatı 100 liradır. Aşağıdaki kontrollerden hangisi bağlayıcıdır, yani piyasa sonucunu değiştirir?",
          "opts": [
            "120 liralık fiyat tavanı",
            "80 liralık fiyat tabanı",
            "80 liralık fiyat tavanı",
            "90 liralık fiyat tabanı"
          ],
          "a": 2,
          "why": "Tavan dengenin altındaysa, taban dengenin üstündeyse bağlayıcıdır. 80 liralık tavan fiyatın dengeye çıkmasını engeller ve *shortage* yaratır. 120'lik tavan ile 80 ve 90'lık tabanlar dengenin yanlış tarafında kaldığı için etkisizdir."
        },
        {
          "q": "Emek piyasasında denge ücretinin üstünde bir asgari ücret uygulanıyor. Aşağıdakilerden hangisi doğrudur?",
          "opts": [
            "İşverenlerin talep ettiği emek, çalışmak isteyenlerden fazla olur.",
            "Asgari ücret dengenin üstünde olduğu için bağlayıcı değildir.",
            "Ücret düşer ve istihdam artar.",
            "Çalışmak isteyen kişi sayısı işverenlerin talebini aşar; işsizlik oluşur."
          ],
          "a": 3,
          "why": "Asgari ücret emek piyasasında bir fiyat tabanıdır. Dengenin üstünde olduğu için bağlayıcıdır: arz edilen emek artar, talep edilen emek azalır. Aradaki emek fazlası işsizliktir."
        },
        {
          "q": "Rekabetçi bir piyasada bağlayıcı bir fiyat tavanı uygulanıyor. Aşağıdakilerden hangisi KESİNLİKLE doğrudur?",
          "opts": [
            "Tüketici artığı kesinlikle azalır.",
            "Satılan miktar azalır, üretici artığı düşer ve *deadweight loss* oluşur.",
            "Satılan miktar artar, çünkü fiyat düşer.",
            "Toplam artık değişmez; artık yalnızca üreticiden tüketiciye geçer."
          ],
          "a": 1,
          "why": "Tavanda üreticiler daha az arz eder; satılan miktar arz edilen miktara düşer, üretici artığı küçülür ve yapılamayan alışverişler *deadweight loss* olur. Tüketici artığı ise duruma göre artabilir ya da azalabilir: ucuza ev bulanlar kazanır, bulamayanlar kaybeder."
        }
      ]
    },
    {
      "no": 11,
      "code": "2.9",
      "slug": "mi208",
      "title": "Uluslararası Ticaret ve Gümrük Vergisi",
      "en": "International Trade and Public Policy",
      "accent": "#2FD6B9",
      "seconds": 243,
      "terms": [
        "Autarky",
        "World price",
        "Imports",
        "Exports",
        "Gains from trade",
        "Tariff",
        "Tariff revenue",
        "Import quota",
        "Quota rent",
        "Deadweight loss",
        "Protectionism"
      ],
      "questions": [
        {
          "q": "Tablo bir ülkenin kayısı piyasasını gösteriyor. Ülke ticarete açılıyor ve dünya fiyatı 60 lira. Ne olur?",
          "opts": [
            "Ülke 40 ton kayısı ithal eder.",
            "Ülke 40 ton kayısı ihraç eder.",
            "Ülke 80 ton kayısı ihraç eder.",
            "Ülke 20 ton kayısı ihraç eder."
          ],
          "a": 1,
          "why": "Ticaret yokken denge 40 lira ve 60 ton. Dünya fiyatı 60 lira, yurt içi dengenin üstünde: yerli üreticiler 80 ton üretir, yurt içinde 40 ton tüketilir. Fark 80 − 40 = 40 ton ihracattır. 80 ton toplam üretimdir; 20 ton 50 liradaki farktır.",
          "fig": {
            "type": "table",
            "head": [
              "Price (TL/kg)",
              "Qd (ton)",
              "Qs (ton)"
            ],
            "rows": [
              [
                "40",
                "60",
                "60"
              ],
              [
                "50",
                "50",
                "70"
              ],
              [
                "60",
                "40",
                "80"
              ]
            ],
            "caption": "Yurt içi kayısı piyasası"
          }
        },
        {
          "q": "Dünya fiyatı yurt içi denge fiyatının altında olan bir ülke serbest ticarete açılıyor. Aşağıdakilerden hangisi doğrudur?",
          "opts": [
            "Tüketici artığı ve yerli üretici artığı birlikte artar.",
            "Yerli üretici artığı artar, toplam artık azalır.",
            "Tüketici artığı azalır, toplam artık artar.",
            "Tüketici artığı artar, yerli üretici artığı azalır, toplam artık artar."
          ],
          "a": 3,
          "why": "Fiyat dünya fiyatına iner: tüketiciler daha ucuza daha çok alır, tüketici artığı büyür. Yerli üreticiler daha düşük fiyata daha az satar, artıkları küçülür. Tüketicinin kazancı üreticinin kaybından büyük olduğu için toplam artık artar."
        },
        {
          "q": "Grafikte dikey eksende 1 birim 10 lira, yatay eksende 1 birim 100 adettir. Dünya fiyatı Pw; devlet bir *tariff* koyunca yurt içi fiyat Pw + t oluyor. Devletin tarife geliri kaç liradır?",
          "opts": [
            "2.000 TL",
            "4.000 TL",
            "1.000 TL",
            "5.000 TL"
          ],
          "a": 0,
          "why": "Tarife 50 − 40 = 10 lira. Tarifeden sonra yurt içi üretim 300, tüketim 500; ithalat 200. Gelir = 10 × 200 = 2.000 TL. 4.000 tarifeden önceki ithalatla (400) hesaplanır; 1.000 iki *deadweight loss* üçgeninin toplamıdır.",
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
                "label": "E"
              },
              {
                "q": 3,
                "p": 5,
                "label": "A",
                "guides": true
              },
              {
                "q": 5,
                "p": 5,
                "label": "B",
                "guides": true
              },
              {
                "q": 2,
                "p": 4,
                "label": "C",
                "guides": true
              },
              {
                "q": 6,
                "p": 4,
                "label": "F",
                "guides": true
              }
            ],
            "hlines": [
              {
                "p": 4,
                "label": "Pw"
              },
              {
                "p": 5,
                "label": "Pw + t"
              }
            ]
          }
        },
        {
          "q": "Bir ülke aynı ithalat miktarına yol açan bir *tariff* yerine bir *import quota* uyguluyor. İki politika arasındaki temel fark nedir?",
          "opts": [
            "Kotada yurt içi fiyat dünya fiyatına eşit kalır.",
            "Kotada *deadweight loss* oluşmaz.",
            "Tarifede devlete giden gelir, kotada ithalat izni olanlara kalır.",
            "Kotada yerli üretim tarifedekinden daha fazla düşer."
          ],
          "a": 2,
          "why": "Aynı ithalat miktarında fiyat, tüketim, üretim ve iki DWL üçgeni aynıdır. Tek fark, fiyat farkı çarpı ithalat dikdörtgeninin kime gittiğidir: tarifede devlete gelir, kotada izin sahiplerine *quota rent*."
        },
        {
          "q": "Dünya fiyatı yurt içi denge fiyatının altında. Bir öğrenci \"bu fiyat bir tavan gibi; ülkede kıtlık oluşur\" diyor. Hangisi doğrudur?",
          "opts": [
            "Öğrenci haklıdır; talep edilen miktar arz edilen miktarı aştığı için kuyruklar oluşur.",
            "Yerli üretim azalır ama aradaki fark ithalatla karşılanır; kıtlık oluşmaz.",
            "Dünya fiyatı yurt içi arzı sağa kaydırır; yerli üretim artar.",
            "Fiyat yurt içi denge fiyatına geri çıkar; ticaret gerçekleşmez."
          ],
          "a": 1,
          "why": "Dünya fiyatında alıcılar istedikleri kadar alabilir: yerli üreticilerin karşılamadığı kısım ithal edilir. Fiyat tavanında boşluğu dolduracak satıcı yoktur, ticarette ise dünya vardır. Fiyat değişimi arz eğrisini kaydırmaz; yalnızca eğri üzerinde hareket ettirir."
        }
      ]
    }
  ],
  "final": []
};
