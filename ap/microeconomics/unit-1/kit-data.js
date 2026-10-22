/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/mc1N/questions.json) */
window.KIT = {
  "store": "micro-u1:v1:",
  "course": "Microeconomics",
  "unitLabel": "Unit 1 — Basic Economic Concepts",
  "episodes": [
    {
      "no": 1,
      "code": "1.1",
      "slug": "mc101",
      "title": "Kıtlık ve Ekonomist Gibi Düşünmek",
      "en": "Scarcity",
      "accent": "#F6B94A",
      "seconds": 276,
      "terms": [
        "Scarcity",
        "Shortage",
        "Factors of production",
        "Physical capital",
        "Human capital",
        "Entrepreneurship",
        "Microeconomics",
        "Macroeconomics",
        "Positive statement",
        "Normative statement",
        "Marginal analysis",
        "Ceteris paribus"
      ],
      "questions": [
        {
          "q": "Okul basketbol takımı, salonu saatlik 150 liraya kiralayıp ek antrenman yapmayı düşünüyor. Tabloda her ek saatin takıma sağladığı fayda var. Ekonomist gibi düşünen bir kaptan kaç saat kiralar?",
          "opts": [
            "1 saat",
            "2 saat",
            "3 saat",
            "4 saat"
          ],
          "a": 2,
          "why": "Her saatin *marginal cost*'u 150 lira. 1., 2. ve 3. saatin *marginal benefit*'i 400, 250 ve 180 lira; hepsi 150'den büyük. 4. saatte 100 lira, 150'den küçük, o yüzden durulur. 4 saatin toplam faydası 930, toplam maliyeti 600 olsa da karar toplama göre değil, ek saate göre verilir.",
          "fig": {
            "type": "table",
            "head": [
              "Ek saat",
              "Marginal benefit",
              "Marginal cost"
            ],
            "rows": [
              [
                "1.",
                "400 TL",
                "150 TL"
              ],
              [
                "2.",
                "250 TL",
                "150 TL"
              ],
              [
                "3.",
                "180 TL",
                "150 TL"
              ],
              [
                "4.",
                "100 TL",
                "150 TL"
              ]
            ],
            "caption": "Salon kirası her saat için aynı: 150 TL"
          }
        },
        {
          "q": "Bir öğrenci, aşağıdaki kaynakları *factors of production* türlerine göre sınıflandırdı. Hangi sınıflandırma yanlıştır?",
          "opts": [
            "Karadeniz'deki fındık bahçeleri ve toprağı: *land*",
            "Yazılımcının üniversitede öğrendiği kodlama: *human capital*",
            "Kargo şirketinin teslimat kamyonları: *physical capital*",
            "Girişimcinin bankadaki 2 milyon lirası: *capital*"
          ],
          "a": 3,
          "why": "Para bir üretim faktörü değildir; alışverişi kolaylaştırır ama kendisi bir şey üretmez. Ekonomide *capital*, insan yapımı alet, makine ve binalardır; o para ancak kamyon ya da fırın alınınca *physical capital*'e dönüşür.",
          "fig": {
            "type": "table",
            "head": [
              "Kaynak",
              "Öğrencinin sınıflandırması"
            ],
            "rows": [
              [
                "Karadeniz'deki fındık bahçeleri ve toprağı",
                "Land"
              ],
              [
                "Yazılımcının üniversitede öğrendiği kodlama",
                "Human capital"
              ],
              [
                "Kargo şirketinin teslimat kamyonları",
                "Physical capital"
              ],
              [
                "Girişimcinin bankadaki 2 milyon lirası",
                "Capital"
              ],
              [
                "Kafeyi açıp kira riskini üstlenen kişi",
                "Entrepreneurship"
              ]
            ],
            "caption": "Hangisi yanlış?"
          }
        },
        {
          "q": "Aşağıdakilerden hangisi bir *positive statement*'tır?",
          "opts": [
            "Asgari ücret kaldırılırsa işsizlik bir gecede tamamen biter.",
            "Kantin fiyatlarını okul yönetimi değil öğrenciler belirlemeli.",
            "Enflasyonla mücadele, işsizlikle mücadeleden daha önemlidir.",
            "Herkesin ücretsiz toplu taşıma kullanabilmesi adil olurdu."
          ],
          "a": 0,
          "why": "*Positive statement* veriyle test edilebilen bir iddiadır; yanlış olması onu *normative* yapmaz. A büyük ihtimalle yanlış ama doğru mu yanlış mı diye ölçülebilir. B, C ve D'de belirlemeli, daha önemli ve adil gibi değer yargıları var."
        },
        {
          "q": "Ekonomistlerin bazı kelimeleri günlük dilden farklı kullandığını biliyorsun. Aşağıdaki ifadelerden hangisi ekonomik anlamda doğrudur?",
          "opts": [
            "*Market*, alıcıyla satıcının buluştuğu fiziksel bir çarşı demektir.",
            "Bir fırının yeni bir hamur yoğurma makinesi alması *investment*'tır.",
            "Bir öğrencinin borsadan şirket hissesi alması *investment*'tır.",
            "Bir şirketin kasasında duran nakit para, şirketin *capital*'idir."
          ],
          "a": 1,
          "why": "Ekonomide *investment*, makine ve bina gibi sermaye mallarına yapılan harcamadır; hisse almak yalnızca bir varlığın el değiştirmesidir. *Capital* para değil insan yapımı üretim araçlarıdır. *Market* ise alıcıyla satıcıyı buluşturan her düzendir; bir uygulama ya da internet sitesi de olabilir."
        },
        {
          "q": "Yeni çıkan bir oyun konsolu, 25 bin liralık fiyatından mağazalarda iki hafta boyunca bulunamıyor. Hangi ifade doğrudur?",
          "opts": [
            "Bu bir *scarcity* örneğidir ve konsol üretimi artsa da sürer.",
            "Konsol üretiminde para harcandığı için para bir üretim faktörüdür.",
            "Bu bir *shortage*'dır; fiyat yükselir ya da üretim artarsa kapanır.",
            "Konsol üretimi artınca toplumdaki *scarcity* tamamen ortadan kalkar."
          ],
          "a": 2,
          "why": "O fiyattan konsol isteyenlerin sayısı satılan konsoldan fazla; bu geçici bir *shortage*'dır ve fiyat ya da üretim değişince kapanır. *Scarcity* ise bütün kaynaklar için geçerli kalıcı bir durumdur; tek bir malın üretimi artınca bitmez."
        }
      ]
    },
    {
      "no": 2,
      "code": "1.3-1",
      "slug": "mc102",
      "title": "Fırsat Maliyeti ve PPC",
      "en": "Opportunity Cost and the PPC",
      "accent": "#2FD6B9",
      "seconds": 239,
      "terms": [
        "Opportunity cost",
        "Trade-offs",
        "Production possibilities curve (PPC)",
        "Model",
        "Full employment",
        "Efficient",
        "Inefficient",
        "Unattainable",
        "Unemployment",
        "Productive efficiency",
        "Allocative efficiency"
      ],
      "questions": [
        {
          "q": "Tabloda bir ülkenin halı ve traktör üretim imkânları var. Ülke B noktasından D noktasına geçerse bu hareketin *opportunity cost*'u nedir?",
          "opts": [
            "Traktör başına 5 halı",
            "2 traktör",
            "10 halı",
            "8 halı"
          ],
          "a": 2,
          "why": "B'den D'ye geçerken traktör 1'den 3'e çıkıyor; bu kazanılan. Halı 18'den 8'e iniyor; vazgeçilen 18 eksi 8, yani 10 halı. Traktör başına 5 halı birim maliyettir ama soru hareketin toplam maliyetini soruyor.",
          "fig": {
            "type": "table",
            "head": [
              "Nokta",
              "Halı (bin adet)",
              "Traktör (bin adet)"
            ],
            "rows": [
              [
                "A",
                "20",
                "0"
              ],
              [
                "B",
                "18",
                "1"
              ],
              [
                "C",
                "14",
                "2"
              ],
              [
                "D",
                "8",
                "3"
              ],
              [
                "E",
                "0",
                "4"
              ]
            ],
            "caption": "Bir ülkenin production possibilities tablosu"
          }
        },
        {
          "q": "Grafikteki *PPC*'ye göre aşağıdaki ifadelerden hangisi doğrudur?",
          "opts": [
            "W noktasında kaynakların bir kısmı atıl; iki maldan da daha fazla üretilebilir.",
            "Y noktası verimli bir kombinasyondur ama toplum onu tercih etmemektedir.",
            "Z noktası eğri üzerinde olsa da hiç zeytinyağı üretilmediği için *inefficient*'tır.",
            "X noktası eğrinin ortasında olduğu için Z noktasından daha verimlidir."
          ],
          "a": 0,
          "why": "W eğrinin içinde, yani *inefficient*: kaynakların bir kısmı kullanılmıyor ve eğriye çıkarak iki maldan da fazla üretilebilir. Y eğrinin dışında, mevcut kaynaklarla *unattainable*. X ve Z ikisi de eğrinin üstünde, yani eşit derecede *productively efficient*.",
          "fig": {
            "type": "graph",
            "xlabel": "T-shirts",
            "ylabel": "Olive oil",
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
                "q": 3,
                "p": 2,
                "label": "W",
                "guides": true
              },
              {
                "q": 4,
                "p": 4,
                "label": "X",
                "guides": true
              },
              {
                "q": 6,
                "p": 6,
                "label": "Y",
                "guides": true
              },
              {
                "q": 8,
                "p": 0,
                "label": "Z"
              }
            ]
          }
        },
        {
          "q": "Defne'nin Cumartesi akşamı için seçenekleri: okulun ücretsiz basketbol finalini izlemek, kafede 500 liralık vardiya, sınava çalışmak ya da dizi izlemek. Finali seçiyor; final olmasaydı kafeye giderdi. Defne'nin seçiminin *opportunity cost*'u nedir?",
          "opts": [
            "Vazgeçtiği kafe vardiyası, ders çalışma ve dizinin hepsi",
            "Final maçı ücretsiz olduğu için fırsat maliyeti sıfırdır",
            "Ders çalışmanın değeri ile kafe kazancının toplamı",
            "Kafede kazanabileceği 500 lira, yani vazgeçtiği vardiya"
          ],
          "a": 3,
          "why": "*Opportunity cost*, vazgeçilen en iyi tek seçenektir; Defne'nin ikinci tercihi kafe vardiyası, yani 500 lira. Vazgeçilen bütün seçenekler *trade-offs*'tur. Bilet ücretsiz olsa da maç bedava değildir, çünkü o akşam başka bir şey yapılamaz."
        },
        {
          "q": "Kantin, bir öğle arasında ya 9 tost ya 3 pizza ya da doğrusal *PPC* üzerindeki bir karışımı yapabiliyor. 1 tostun *opportunity cost*'u nedir?",
          "opts": [
            "3 pizza",
            "1/3 pizza",
            "3 tost",
            "1/3 tost"
          ],
          "a": 1,
          "why": "Bütün tostlara yönelince 3 pizzadan vazgeçip 9 tost kazanırsın. Vazgeçilen bölü kazanılan: 3 pizza bölü 9 tost, yani 1 tost 1/3 pizza. Ters yönde 1 pizza 3 tosttur; iki değer birbirinin tersidir.",
          "fig": {
            "type": "graph",
            "xlabel": "Pizza",
            "ylabel": "Toast",
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
          "q": "*PPC* modeliyle ilgili aşağıdaki ifadelerden hangisi doğrudur?",
          "opts": [
            "Eğri üzerindeki herhangi bir nokta, toplumun en çok istediği kombinasyondur.",
            "PPC modeli, kaynak miktarının ve teknolojinin sürekli değiştiğini varsayar.",
            "Bir malın hiç üretilmediği uç nokta *productively efficient* olup *allocatively efficient* olmayabilir.",
            "İçerideki bir noktadan eğriye çıkmanın *opportunity cost*'u her zaman pozitiftir."
          ],
          "a": 2,
          "why": "Uç nokta eğrinin üstünde olduğu için kaynak israfı yoktur, yani *productively efficient*'tır; ama toplum iki maldan da istiyorsa *allocatively efficient* değildir. Model kaynakları ve teknolojiyi sabit varsayar. İçeriden eğriye çıkarken iki maldan da fazla üretildiği için fırsat maliyeti sıfırdır."
        }
      ]
    },
    {
      "no": 3,
      "code": "1.3-2",
      "slug": "mc103",
      "title": "PPC'nin Şekli ve Kayması",
      "en": "PPC Shape and Shifts",
      "accent": "#58C9FF",
      "seconds": 263,
      "terms": [
        "Constant opportunity cost",
        "Law of increasing opportunity cost",
        "Bowed out PPC",
        "Not perfectly adaptable resources",
        "Economic growth",
        "Physical capital",
        "Human capital",
        "Technology",
        "Consumer goods",
        "Capital goods",
        "Productive efficiency",
        "Allocative efficiency"
      ],
      "questions": [
        {
          "q": "Tablo bir ülkenin robot ve domates üretim olanaklarını gösteriyor. Ülke 2 robottan 3 robota geçerse, 3. robotun *opportunity cost*'u kaç ton domatestir?",
          "opts": [
            "4 ton domates",
            "8 ton domates",
            "6 ton domates",
            "14 ton domates"
          ],
          "a": 2,
          "why": "2 robotta 14, 3 robotta 8 ton domates üretilir: 14 eksi 8, 6 ton. Robot başına maliyetler 2, 4, 6, 8 diye artıyor; bu *law of increasing opportunity cost*'tur ve bu ülkenin *PPC*'si dışa büküktür.",
          "fig": {
            "type": "table",
            "head": [
              "Kombinasyon",
              "A",
              "B",
              "C",
              "D",
              "E"
            ],
            "rows": [
              [
                "Robot",
                "0",
                "1",
                "2",
                "3",
                "4"
              ],
              [
                "Domates (ton)",
                "20",
                "18",
                "14",
                "8",
                "0"
              ]
            ],
            "caption": "Bir ülkenin üretim olanakları"
          }
        },
        {
          "q": "Grafikte bir ülkenin *PPC*'si *PPC₁*'den *PPC₂*'ye geçiyor. Bu değişikliği en iyi hangisi açıklar?",
          "opts": [
            "Balıkçılıkta kullanılan yeni bir sonar teknolojisi",
            "Hem balıkçıların hem çiftçilerin daha iyi eğitim alması",
            "Buğday talebinin düşmesi ve halkın daha çok balık istemesi",
            "İşsiz balıkçıların yeniden işe başlaması"
          ],
          "a": 0,
          "why": "Buğday ekseninin ucu 7'de sabit kaldı; yalnızca balık ekseninin ucu 5'ten 8'e çıktı. Bu yalnız balık üretimini iyileştiren bir gelişmedir. Herkesin eğitimi iki ekseni de kaydırırdı; talep değişimi ve işsizlerin işe dönmesi ise eğriyi hiç kaydırmaz.",
          "fig": {
            "type": "graph",
            "xlabel": "Fish",
            "ylabel": "Wheat",
            "xmax": 10,
            "ymax": 10,
            "ppc": [
              {
                "qmax": 5,
                "pmax": 7,
                "k": 2,
                "label": "PPC₁",
                "dash": true
              },
              {
                "qmax": 8,
                "pmax": 7,
                "k": 2,
                "label": "PPC₂"
              }
            ],
            "xticks": [
              {
                "v": 5,
                "label": "5"
              },
              {
                "v": 8,
                "label": "8"
              }
            ],
            "yticks": [
              {
                "v": 7,
                "label": "7"
              }
            ]
          }
        },
        {
          "q": "X ve Y ülkelerinin bugünkü *PPC*'leri aynı. X bu yıl üretiminin çoğunu *capital goods*'a, Y ise *consumer goods*'a ayırıyor. Diğer her şey sabitken hangisi doğrudur?",
          "opts": [
            "Y'nin gelecekteki *PPC*'si daha çok dışa kayar, çünkü bugün daha çok tüketiyor",
            "X'in gelecekteki *PPC*'si yalnızca *capital goods* ekseninde dışa kayar",
            "X bugün eğrinin içinde bir noktada üretiyor, çünkü daha az tüketiyor",
            "X bugün daha az tüketir ama gelecekteki *PPC*'si daha çok dışa kayar"
          ],
          "a": 3,
          "why": "*Capital goods* mal üretmek için kullanılan mallardır; makine ve fabrika stoku büyüyen X, ileride iki maldan da daha çok üretebilir, yani eğrisi iki eksende de dışa kayar. Bedeli bugünkü tüketimden vazgeçmektir. X'in noktası yine eğrinin üzerindedir, verimsiz değildir."
        },
        {
          "q": "Moda değişti: insanlar yün kazak yerine pamuklu tişört istiyor ve yün talebi düşüyor. Bir öğrenci \"Ülkenin *PPC*'si yün ekseninde içe kayar\" diyor. Doğru düzeltme hangisi?",
          "opts": [
            "Öğrenci haklı; talep düşünce o malı üretme kapasitesi de düşer",
            "Eğri kaymaz; ülke eğri üzerinde daha az yün, daha çok pamuk olan bir noktaya geçer",
            "Eğri kaymaz; ama ülkenin noktası kalıcı olarak eğrinin içine düşer",
            "Eğri iki eksende de içe kayar, çünkü toplam talep azalır"
          ],
          "a": 1,
          "why": "*PPC* ne yapabileceğimizi gösterir, ne istediğimizi değil. Talep değişince kaynaklar ve teknoloji aynı kalır; kaynaklar yünden pamuğa kayar ve ülke eğri üzerindeki başka bir kombinasyonu seçer."
        },
        {
          "q": "Grafikte bütün kaynaklarını telefona ayıran bir ülke K noktasında üretiyor ve hiç gıda üretmiyor. Hangisi doğrudur?",
          "opts": [
            "K eğrinin ucunda olduğu için *productively efficient* değildir",
            "K, M ve I noktalarının üçü de *productively efficient*'tir",
            "K *productively efficient*'tir ama büyük olasılıkla *allocatively efficient* değildir",
            "K hem *productively* hem *allocatively efficient*'tir, çünkü eğrinin üzerindedir"
          ],
          "a": 2,
          "why": "Eğrinin üzerindeki her nokta, uçlar da dahil, kaynakları boşa harcamadan üretir: K ve M *productively efficient*'tir, içerideki I değildir. *Allocative efficiency* toplumun en çok istediği kombinasyondur; hiç gıdası olmayan bir ülkeyi kimse istemez, bu yüzden K büyük olasılıkla bu koşulu sağlamaz.",
          "fig": {
            "type": "graph",
            "xlabel": "Phones",
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
                "q": 8,
                "p": 0,
                "label": "K"
              },
              {
                "q": 4.8,
                "p": 6.4,
                "label": "M"
              },
              {
                "q": 3,
                "p": 3,
                "label": "I"
              }
            ]
          }
        }
      ]
    },
    {
      "no": 4,
      "code": "1.4-1",
      "slug": "mc104",
      "title": "Mutlak ve Karşılaştırmalı Üstünlük",
      "en": "Absolute vs Comparative Advantage",
      "accent": "#FF6F61",
      "seconds": 268,
      "terms": [
        "Absolute advantage",
        "Comparative advantage",
        "Opportunity cost",
        "Per-unit opportunity cost",
        "Reciprocal",
        "Output question",
        "Input question",
        "Other goes Over (O.O.O.)",
        "Other goes Under (I.O.U.)",
        "Specialization",
        "Terms of trade"
      ],
      "questions": [
        {
          "q": "Tabloda iki ülkenin aynı kaynaklarla bir günde üretebileceği en fazla miktar var. Hangisi doğrudur?",
          "opts": [
            "Mısır'da 1 ton portakalın *opportunity cost*'u 1/4 ton pamuktur",
            "Mısır pamukta, İspanya portakalda *comparative advantage*'a sahiptir",
            "İspanya iki üründe de *absolute advantage*'a sahiptir",
            "İspanya pamukta *comparative advantage*'a sahiptir"
          ],
          "a": 1,
          "why": "Bu bir *output question*; diğer ürün üste. Mısır'da 1 pamuk 3/12 = 1/4 portakal, İspanya'da 5/10 = 1/2 portakal; düşük olan Mısır. Mısır'da 1 portakal 12/3 = 4 pamuk, İspanya'da 10/5 = 2 pamuk; düşük olan İspanya. 1/4 pamuk cevabı kesri ters kurmaktan gelir; İspanya da pamukta 10 < 12 olduğu için iki üründe üstün değildir.",
          "fig": {
            "type": "table",
            "head": [
              "",
              "Pamuk (ton)",
              "Portakal (ton)"
            ],
            "rows": [
              [
                "Mısır",
                "12",
                "3"
              ],
              [
                "İspanya",
                "10",
                "5"
              ]
            ],
            "caption": "Aynı kaynaklarla bir günde üretilebilecek en fazla miktar (output)"
          }
        },
        {
          "q": "Tablo, bir birim üretmek için gereken işçi saatini gösteriyor. Ülkeler *comparative advantage*'a göre uzmanlaşırsa hangisi doğrudur?",
          "opts": [
            "X iki ürünü de ihraç eder, çünkü iki üründe de *absolute advantage* onda",
            "X ayakkabı, Y çanta ihraç eder",
            "Ticaret olmaz, çünkü Y hiçbir ürünü daha hızlı yapmıyor",
            "X çanta, Y ayakkabı ihraç eder"
          ],
          "a": 3,
          "why": "Bu bir *input question*; diğer ürün alta. X'te 1 ayakkabı 2/4 = 1/2 çanta, Y'de 3/9 = 1/3 çanta: ayakkabıda Y daha ucuz. X'te 1 çanta 4/2 = 2 ayakkabı, Y'de 9/3 = 3 ayakkabı: çantada X daha ucuz. X iki üründe de daha az saat harcasa da yalnız çantayı üretip ihraç eder.",
          "fig": {
            "type": "table",
            "head": [
              "",
              "Ayakkabı (1 çift)",
              "Çanta (1 adet)"
            ],
            "rows": [
              [
                "X ülkesi",
                "2 saat",
                "4 saat"
              ],
              [
                "Y ülkesi",
                "3 saat",
                "9 saat"
              ]
            ],
            "caption": "Bir birim üretmek için gereken işçi saati (input)"
          }
        },
        {
          "q": "Grafikte Elif ve Can'ın bir saatte yapabileceği kurabiye ve kek miktarlarını gösteren doğrusal *PPC*'ler var. Elif 8 kurabiye ya da 8 kek, Can 2 kurabiye ya da 6 kek yapabiliyor. Hangisi doğrudur?",
          "opts": [
            "Elif iki üründe de *absolute advantage*'a sahip; kekte *comparative advantage* ise Can'da",
            "Elif iki üründe de *comparative advantage*'a sahip, çünkü *PPC*'si daha dışarıda",
            "Can için 1 kek yapmanın *opportunity cost*'u 3 kurabiyedir",
            "Can kurabiyede *comparative advantage*'a sahiptir"
          ],
          "a": 0,
          "why": "Ham sayılar: kurabiyede 8 > 2, kekte 8 > 6; Elif ikisinde de üstün. Can'da 1 kek 2/6 = 1/3 kurabiye, Elif'te 8/8 = 1 kurabiye; kekte düşük maliyet Can'da. Can'da 1 kurabiye 3 kek, Elif'te 1 kek; kurabiyede Elif. 3 kurabiye cevabı kesri ters kurmaktır.",
          "fig": {
            "type": "graph",
            "xlabel": "Kurabiye",
            "ylabel": "Kek",
            "xmax": 10,
            "ymax": 10,
            "ppc": [
              {
                "qmax": 8,
                "pmax": 8,
                "k": 1,
                "label": "Elif"
              },
              {
                "qmax": 2,
                "pmax": 6,
                "k": 1,
                "label": "Can"
              }
            ],
            "xticks": [
              {
                "v": 2,
                "label": "2"
              },
              {
                "v": 8,
                "label": "8"
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
          "q": "M ülkesi aynı kaynaklarla hem araba hem buğdayda N ülkesinden daha fazla üretebiliyor. Hangi ifade doğrudur?",
          "opts": [
            "M ticaretten kazanamaz, çünkü her şeyi kendisi daha iyi üretiyor",
            "M iki üründe de *comparative advantage*'a sahiptir",
            "M, *opportunity cost*'u daha düşük olan üründe uzmanlaşırsa iki ülke de ticaretten kazanabilir",
            "Ticaret olursa yalnız N kazanır, M kaybeder"
          ],
          "a": 2,
          "why": "M'nin iki üründe de *absolute advantage*'ı var; ama *comparative advantage* ham sayıya değil *opportunity cost*'a bakar ve bir ülke ikisinde birden sahip olamaz. M kendi *opportunity cost*'u düşük olan ürüne uzmanlaşıp diğerini N'den daha ucuza alırsa iki ülke de kazanır."
        },
        {
          "q": "A ülkesinde 1 bisiklet üretmenin *opportunity cost*'u 4 scooter, B ülkesinde 2 scooter. Hangisi doğrudur?",
          "opts": [
            "A bisiklette *comparative advantage*'a sahiptir",
            "B bisiklette, A scooterda *comparative advantage*'a sahiptir",
            "B iki üründe de *comparative advantage*'a sahiptir",
            "Karar vermek için önce *absolute advantage* bilinmelidir"
          ],
          "a": 1,
          "why": "Bisiklet B'ye 2, A'ya 4 scootera mal oluyor; düşük olan B. Ters çevirirsen 1 scooter A'da 1/4, B'de 1/2 bisiklet; scooterda A daha ucuz. *Comparative advantage* için *opportunity cost* yeter; ham sayılar gerekmez ve bir ülke ikisinde birden üstün olamaz."
        }
      ]
    },
    {
      "no": 5,
      "code": "1.4-2",
      "slug": "mc105",
      "title": "Uzmanlaşma ve Ticaretten Kazanç",
      "en": "Specialization and Gains from Trade",
      "accent": "#A98BFF",
      "seconds": 257,
      "terms": [
        "Specialization",
        "Comparative advantage",
        "Opportunity cost",
        "Terms of trade",
        "Mutually beneficial trade",
        "Gains from trade",
        "Production possibilities curve (PPC)",
        "Consumption beyond the PPC",
        "Reciprocal",
        "Export",
        "Import",
        "Standard of living"
      ],
      "questions": [
        {
          "q": "Tabloda iki ülkenin aynı kaynaklarla bir günde üretebileceği en fazla miktar var. Ülkeler uzmanlaşıp ticaret yapacak. Hangi takas oranı iki ülkeye de yarar?",
          "opts": [
            "1 ton zeytin = 1/2 ton balık",
            "1 ton zeytin = 1 ton balık",
            "4 ton zeytin = 6 ton balık",
            "1 ton zeytin = 2,5 ton balık"
          ],
          "a": 2,
          "why": "Norveç'te 1 zeytin 20/10 = 2 balık, Fas'ta 6/6 = 1 balık; zeytinde Fas, balıkta Norveç uzmanlaşır. Kazançlı oran: 1 zeytin, 1 ile 2 balık arası. 4 zeytin = 6 balık, bir birime çevrilince 1 zeytin = 1,5 balık; aralıkta. 1 balık uç değer olduğu için Fas'a kazanç getirmez, 2,5 balık Norveç'in kendi maliyetinden pahalı.",
          "fig": {
            "type": "table",
            "head": [
              "",
              "Balık (ton)",
              "Zeytin (ton)"
            ],
            "rows": [
              [
                "Norveç",
                "20",
                "10"
              ],
              [
                "Fas",
                "6",
                "6"
              ]
            ],
            "caption": "Aynı kaynaklarla bir günde üretilebilecek en fazla miktar (output)"
          }
        },
        {
          "q": "Grafik K ülkesinin *PPC*'sini gösteriyor. Ticaretten önce K, A noktasında tüketiyordu. Uzmanlaşıp ticaret yaptıktan sonra C noktasında tüketiyor. Hangisi doğrudur?",
          "opts": [
            "K, A'ya göre 2 birim daha çok buğday tüketiyor; üretim kapasitesi değişmedi",
            "K'nin *PPC*'si sağa kaydığı için C'ye ulaşabildi",
            "C ulaşılamaz bir nokta olduğu için K orada tüketemez",
            "C *PPC*'nin üstünde olmadığı için K kaynaklarını verimsiz kullanıyor"
          ],
          "a": 0,
          "why": "A noktası 4 buğday ve 4 kumaş, C noktası 6 buğday ve 4 kumaş: aynı kumaşla 2 birim fazla buğday. C, K'nin tek başına üretemeyeceği bir nokta; ama ticaret sayesinde orada tüketebilir. *PPC* üretim kapasitesini gösterir ve ticaretle kaymaz; dışarı çıkan yalnız tüketim noktasıdır.",
          "fig": {
            "type": "graph",
            "xlabel": "Buğday",
            "ylabel": "Kumaş",
            "xmax": 10,
            "ymax": 10,
            "ppc": [
              {
                "qmax": 8,
                "pmax": 8,
                "k": 1,
                "label": "PPC"
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 4,
                "label": "A",
                "guides": true
              },
              {
                "q": 6,
                "p": 4,
                "label": "C",
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
            ],
            "yticks": [
              {
                "v": 4,
                "label": "4"
              },
              {
                "v": 8,
                "label": "8"
              }
            ]
          }
        },
        {
          "q": "A ülkesi bir günde ya 12 bilgisayar ya da 6 tablet üretebiliyor ve bilgisayarda uzmanlaşıyor. 1 tablet = 1,5 bilgisayar oranıyla 6 bilgisayar verip tablet alıyor. Hangisi doğrudur?",
          "opts": [
            "3 tablet ve 6 bilgisayar tüketir; kendi *PPC*'sinde 3 tabletle en fazla 6 bilgisayar",
            "4 tablet ve 6 bilgisayar tüketir; kendi *PPC*'sinde 4 tabletle en fazla 8 bilgisayar",
            "6 tablet ve 6 bilgisayar tüketir; kendi *PPC*'sinde 6 tabletle hiç bilgisayar kalmaz",
            "4 tablet ve 6 bilgisayar tüketir; kendi *PPC*'sinde 4 tabletle en fazla 4 bilgisayar"
          ],
          "a": 3,
          "why": "6 bilgisayar bölü 1,5, 4 tablet eder; elde 12 eksi 6, yani 6 bilgisayar kalır. A'da 1 tablet 12/6 = 2 bilgisayar; tek başına 4 tablet yapsa 8 bilgisayardan vazgeçer, geriye 4 bilgisayar kalır. Ticaretle 2 bilgisayar fazla tüketir; nokta *PPC*'nin dışındadır.",
          "fig": {
            "type": "table",
            "head": [
              "",
              "Bilgisayar",
              "Tablet"
            ],
            "rows": [
              [
                "A ülkesi (bir günde, ya o ya bu)",
                "12",
                "6"
              ]
            ],
            "caption": "A ülkesinin doğrusal PPC'sinin uç noktaları"
          }
        },
        {
          "q": "H ülkesi kendi ürettiğinde 1 traktör ona 6 ton pirince mal oluyor. G ülkesi 1 traktörü 5 ton pirince, F ülkesi 4 ton pirince satmayı teklif ediyor. H ne yapar?",
          "opts": [
            "Traktörü kendisi üretir, çünkü iki teklif de kazanç sağlamaz",
            "F'den alır, çünkü traktör ona en az pirince mal olur",
            "G'den alır, çünkü G'nin teklifi kendi maliyetine daha yakın",
            "İki teklifi de reddeder, çünkü ikisi de uç değerde"
          ],
          "a": 1,
          "why": "İki teklif de H'nin kendi maliyeti olan 6 tondan ucuz, yani ikisi de kazançlı. Daha iyi teklif gelince ülke ona gider: F'den alırsa her traktör için 2 ton pirinç kazanır, G'den alırsa yalnız 1 ton."
        },
        {
          "q": "X ülkesinde 1 kutu çikolatanın *opportunity cost*'u 3 kavanoz bal, Y ülkesinde 6 kavanoz bal. Hangi teklif iki ülkeye de yarar?",
          "opts": [
            "1 kavanoz bal = 1/7 kutu çikolata",
            "1 kavanoz bal = 1/3 kutu çikolata",
            "1 kavanoz bal = 1/4 kutu çikolata",
            "1 kutu çikolata = 2 kavanoz bal"
          ],
          "a": 2,
          "why": "Çikolatada X uzmanlaşır: 3 baldan fazlasını ister; Y 6 baldan azını öder. Aralık 1 çikolata için 3 ile 6 bal arası. Teklifleri bir çikolataya çevir: 1/7 demek 7 bal, Y için pahalı; 1/3 demek 3 bal, uç değer; 1/4 demek 4 bal, aralıkta; 2 bal ise X için zararlı."
        }
      ]
    }
  ],
  "final": []
};
