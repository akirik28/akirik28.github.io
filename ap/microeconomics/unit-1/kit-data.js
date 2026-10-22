/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/mc1N/questions.json) */
window.KIT = {
  "store": "micro-u1:v1:",
  "course": "Microeconomics",
  "unitLabel": "Unit 1 — Basic Economic Concepts",
  "denemeler": {
    "url": "deneme/",
    "count": 5
  },
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
      "code": "1.2",
      "slug": "mi101",
      "title": "Ekonomik Sistemler ve Kaynak Dağılımı",
      "en": "Resource Allocation and Economic Systems",
      "accent": "#B9E552",
      "seconds": 263,
      "terms": [
        "Resource allocation",
        "Economic system",
        "Command economy",
        "Free market economy",
        "Mixed economy",
        "Profit motive",
        "Invisible hand",
        "Property rights",
        "Incentives",
        "Public goods",
        "Circular flow",
        "Factor market / Product market"
      ],
      "questions": [
        {
          "q": "Tablodaki üç ülkenin ekonomik sistemlerini doğru eşleştiren seçenek hangisidir?",
          "opts": [
            "K: *mixed economy* · L: *command economy* · M: *free market economy*",
            "K: *free market economy* · L: *mixed economy* · M: *command economy*",
            "K: *command economy* · L: *mixed economy* · M: *free market economy*",
            "K: *command economy* · L: *free market economy* · M: *mixed economy*"
          ],
          "a": 3,
          "why": "K'de kaynaklar devletin ve kararı plan kurulu veriyor: *command economy*. L'de kaynaklar özel, kararı fiyatlar ve kâr veriyor, devlet yalnız mülkiyeti koruyor: *free market economy*. M ikisini karıştırıyor: *mixed economy*.",
          "fig": {
            "type": "table",
            "head": [
              "Ülke",
              "Kaynakların sahibi",
              "Ne üretileceğine kim karar verir?",
              "Devletin rolü"
            ],
            "rows": [
              [
                "K",
                "Devlet",
                "Planlama kurulu",
                "Fiyatları ve iş yerlerini belirler"
              ],
              [
                "L",
                "Özel kişiler",
                "Fiyatlar ve kâr",
                "Yalnız mülkiyeti ve sözleşmeleri korur"
              ],
              [
                "M",
                "Çoğunlukla özel kişiler",
                "Çoğunlukla fiyatlar",
                "Okul, hastane, tekel denetimi, vergiyle yardım"
              ]
            ],
            "caption": "Üç ülkenin ekonomik düzeni"
          }
        },
        {
          "q": "Bir fırın, simitleri ustaların elle mi yoksa yeni aldığı otomatik makineyle mi yapacağına karar veriyor. Bu karar, her toplumun cevapladığı üç temel sorudan hangisine aittir?",
          "opts": [
            "Ne üretilecek?",
            "Nasıl üretilecek?",
            "Kimin için üretilecek?",
            "Hangi kaynak kıt?"
          ],
          "a": 1,
          "why": "Ürün zaten belli: simit. Soru, onu hangi kaynak bileşimiyle üreteceği; emek mi, sermaye mi. Bu, nasıl üretilecek sorusudur."
        },
        {
          "q": "Aşağıdaki ifadelerden hangisi doğrudur?",
          "opts": [
            "Bir ülkeyi komünist bir parti yönetiyorsa ekonomisi mutlaka *command economy*'dir.",
            "*Free market economy*'de devletin hiçbir rolü yoktur; mülkiyet kendiliğinden korunur.",
            "*Free market economy*, kâr getirmeyen *public goods*'u yeterince üretmeyebilir.",
            "*Command economy*'de fiyatları tüketicilerin ödemeye razı olduğu miktar belirler."
          ],
          "a": 2,
          "why": "Sokak lambası ya da park gibi *public goods* kâr getirmediği için piyasa onları az üretir. Siyasi sistem ekonomik sistemle aynı değildir (Çin karma ekonomidir); piyasa bile mülkiyeti koruyacak bir devlete ihtiyaç duyar; *command economy*'de fiyatları plan belirler."
        },
        {
          "q": "Bir köyde ortak bir mera var; herkes hayvanını otlatıyor ve ot hızla tükeniyor. Mera ailelere parsel parsel dağıtılınca her aile kendi parselini dinlendiriyor ve ot yeniden çıkıyor. Bu değişim en iyi hangisiyle açıklanır?",
          "opts": [
            "*Property rights*, kaynağı korumak için bir *incentive* yarattı.",
            "Köy *command economy*'ye geçtiği için ot bollaştı.",
            "Mera bir *public good* hâline geldiği için korundu.",
            "*Invisible hand* ortadan kalktığı için aileler daha dikkatli oldu."
          ],
          "a": 0,
          "why": "Parsel sahibi olan aile, otu koruyunca faydayı kendisi alacak; bu bir *incentive*. Ortak merada ise kimse korumanın karşılığını alamaz. Kararlar hâlâ ailelerin, yani plan değil mülkiyet hakkı işe yaradı."
        },
        {
          "q": "Tablodaki işlemlerden hangileri *circular flow* modelinde *factor market*'te gerçekleşir?",
          "opts": [
            "Yalnız 1",
            "1 ve 3",
            "2 ve 4",
            "1, 2 ve 3"
          ],
          "a": 1,
          "why": "*Factor market*'te üretim faktörleri alınıp satılır. 1'de Ece emeğini satıyor (*labor*), 3'te fırın dükkân binası için kira ödüyor (*capital*'in kullanımı). 2 ve 4 ise hanelerin mal alması, yani *product market*.",
          "fig": {
            "type": "table",
            "head": [
              "No",
              "İşlem"
            ],
            "rows": [
              [
                "1",
                "Ece hafta sonu kafede çalışıp 2.000 lira ücret alıyor."
              ],
              [
                "2",
                "Ece 300 liraya kablosuz kulaklık alıyor."
              ],
              [
                "3",
                "Bir fırın, dükkân binası için aylık kira ödüyor."
              ],
              [
                "4",
                "Bir aile manavdan meyve alıyor."
              ]
            ],
            "caption": "Dört ekonomik işlem"
          }
        }
      ]
    },
    {
      "no": 3,
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
      "no": 4,
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
      "no": 5,
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
      "no": 6,
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
    },
    {
      "no": 7,
      "code": "1.5",
      "slug": "mi102",
      "title": "Fayda-Maliyet Analizi",
      "en": "Cost-Benefit Analysis",
      "accent": "#FF7DB8",
      "seconds": 244,
      "terms": [
        "Rational decision-making",
        "Cost-benefit analysis",
        "Net benefit",
        "Explicit costs",
        "Implicit costs",
        "Total revenue",
        "Accounting profit",
        "Economic profit",
        "Economic loss",
        "Normal profit",
        "Sunk cost"
      ],
      "questions": [
        {
          "q": "Selin yazın 4 haftalık bir yazılım kursuna gitmeyi düşünüyor. Tabloya göre kursa gitmenin Selin için toplam ekonomik maliyeti (explicit artı implicit) kaç liradır?",
          "opts": [
            "8.300 lira",
            "3.500 lira",
            "4.000 lira",
            "7.500 lira"
          ],
          "a": 3,
          "why": "*Explicit costs*: 3.000 ücret artı 500 kitap, 3.500. *Implicit cost*: vazgeçilen yaz işi, 4.000. Toplam 7.500. Öğle yemeği iki durumda da harcanacağı için kararın maliyeti değil; onu eklersen 8.300 tuzağına düşersin.",
          "fig": {
            "type": "table",
            "head": [
              "Kalem",
              "Tutar (lira)"
            ],
            "rows": [
              [
                "Kurs ücreti",
                "3.000"
              ],
              [
                "Kitap ve malzeme",
                "500"
              ],
              [
                "Kursa gitmezse yapacağı yaz işinden kazanç",
                "4.000"
              ],
              [
                "Kurs boyunca öğle yemeği (kursa gitmese de aynı tutarı harcayacak)",
                "800"
              ]
            ],
            "caption": "Selin'in kurs kararı"
          }
        },
        {
          "q": "Bir fırın sahibi kendi binasında çalışıyor. Aşağıdakilerden hangisi fırının *implicit costs*'una bir örnektir?",
          "opts": [
            "Sahibin, binayı başkasına kiraya verseydi alacağı kira",
            "Fırının bir depoya her ay ödediği kira",
            "Çırağa ödenen haftalık ücret",
            "Fırının elektrik ve doğalgaz faturası"
          ],
          "a": 0,
          "why": "*Implicit cost*, cebinden para çıkmadan vazgeçilen seçeneğin değeridir. Sahip binayı kendisi kullandığı için kiraya veremiyor; kaçan kira *implicit*. Diğer üçü gerçek ödemeler, yani *explicit costs*."
        },
        {
          "q": "Tabloda bir girişimcinin bir yıllık verileri var (bin lira). Bu işin *accounting profit*'i ve *economic profit*'i nedir?",
          "opts": [
            "*Accounting profit* 200 bin, *economic profit* 50 bin",
            "*Accounting profit* 200 bin, *economic profit* 20 bin",
            "*Accounting profit* 20 bin, *economic profit* 200 bin",
            "*Accounting profit* 320 bin, *economic profit* 20 bin"
          ],
          "a": 1,
          "why": "*Explicit costs* 200 artı 100, yani 300; *accounting profit* 500 eksi 300, 200 bin. *Implicit costs* 150 artı 30, yani 180; *economic profit* 200 eksi 180, 20 bin.",
          "fig": {
            "type": "table",
            "head": [
              "Kalem",
              "Bin lira"
            ],
            "rows": [
              [
                "Total revenue",
                "500"
              ],
              [
                "Çalışan ücretleri",
                "200"
              ],
              [
                "Malzeme",
                "100"
              ],
              [
                "Sahibin bıraktığı işteki maaşı",
                "150"
              ],
              [
                "Sahibin işe koyduğu birikimin bankada getireceği faiz",
                "30"
              ]
            ],
            "caption": "Bir işletmenin yıllık verileri"
          }
        },
        {
          "q": "Deniz, iade edilmeyen bir yaz kampına 2.000 lira ödedi. Sonra kampla aynı haftaya denk gelen ve 3.000 lira ödeyen bir staj teklifi aldı. Akılcı bir karar için Deniz nasıl düşünmelidir?",
          "opts": [
            "2.000 lira boşa gitmesin diye kampa gitmelidir.",
            "Kampa ödediği 2.000 lirayı stajın kazancından çıkarıp öyle karşılaştırmalıdır.",
            "2.000 lira bir *sunk cost*; yalnız kampın ve stajın bundan sonraki fayda ve maliyetlerini tartmalıdır.",
            "*Sunk cost* en büyük maliyet olduğu için kampa gitmesi kesin olarak doğrudur."
          ],
          "a": 2,
          "why": "2.000 lira hangi seçeneği seçerse seçsin geri gelmez; bu bir *sunk cost* ve karara girmez. Deniz yalnız kampın ona vereceği fayda ile stajın 3.000 lirası ve diğer faydalarını karşılaştırmalı."
        },
        {
          "q": "Bir firmanın *economic profit*'i sıfırsa aşağıdakilerden hangisi doğrudur?",
          "opts": [
            "Firma *normal profit* elde ediyor; kaynakları en iyi alternatifleri kadar kazanıyor.",
            "Firma zarar ediyor ve hemen kapanmalıdır.",
            "Firmanın *accounting profit*'i de sıfırdır.",
            "Firmanın hiç *implicit cost*'u yoktur."
          ],
          "a": 0,
          "why": "*Economic profit* sıfır demek, gelir hem *explicit* hem *implicit costs*'u tam karşılıyor demek: *normal profit*. *Implicit costs* pozitifse *accounting profit* sıfırdan büyüktür."
        }
      ]
    },
    {
      "no": 8,
      "code": "1.6-1",
      "slug": "mi103",
      "title": "Marjinal Analiz ve Fayda",
      "en": "Marginal Analysis and Utility",
      "accent": "#5C8DFF",
      "seconds": 257,
      "terms": [
        "Marginal",
        "Marginal analysis",
        "Utility",
        "Util",
        "Total utility",
        "Marginal utility",
        "Law of diminishing marginal utility",
        "Marginal benefit",
        "Marginal cost",
        "Net benefit",
        "Diamond-water paradox"
      ],
      "questions": [
        {
          "q": "Tabloda Efe'nin lahmacundan aldığı *total utility* var. Aşağıdakilerden hangisi doğrudur?",
          "opts": [
            "Dördüncü lahmacunun *marginal utility*'si 10 util'dir.",
            "*Marginal utility* en yüksek değerine beşinci lahmacunda ulaşır.",
            "*Total utility* en yüksek değerine altıncı lahmacunda ulaşır.",
            "Üçüncü lahmacunun *marginal utility*'si 90 util'dir."
          ],
          "a": 0,
          "why": "*Marginal utility* toplamdaki değişimdir: 40, 30, 20, 10, 0, eksi 10. Dördüncüsü 100 eksi 90, yani 10. En yüksek MU ilk lahmacunda; toplam 4. ve 5.'de 100 ile zirvede, 6.'da düşüyor; 90 ise üç lahmacunun toplamı.",
          "fig": {
            "type": "table",
            "head": [
              "Lahmacun",
              "Total utility (util)"
            ],
            "rows": [
              [
                "1",
                "40"
              ],
              [
                "2",
                "70"
              ],
              [
                "3",
                "90"
              ],
              [
                "4",
                "100"
              ],
              [
                "5",
                "100"
              ],
              [
                "6",
                "90"
              ]
            ],
            "caption": "Efe'nin lahmacun faydası"
          }
        },
        {
          "q": "Grafik, bir öğrencinin her ek saat ders çalışmasının *marginal benefit*'ini (MB) ve *marginal cost*'unu (MC) gösteriyor. Net faydayı en büyük yapan çalışma süresi kaç saattir?",
          "opts": [
            "2 saat",
            "4 saat",
            "6 saat",
            "9 saat"
          ],
          "a": 1,
          "why": "En iyi miktar MB ile MC'nin kesiştiği yerdir: 4 saat. 4 saatten önce MB, MC'den büyük; sonra küçük. 9 saat, MB'nin sıfır olduğu yer; orada çalışmak fazladan maliyete katlanmak demek.",
          "fig": {
            "type": "graph",
            "xlabel": "Hours of study",
            "ylabel": "Benefit and cost",
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
                "label": "MB"
              },
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  8,
                  9
                ],
                "label": "MC"
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
          "q": "Melis'in pizza dilimlerinden aldığı *marginal utility* her dilimde azalıyor ama hâlâ pozitif. Bu durumda Melis'in *total utility*'si için ne söylenebilir?",
          "opts": [
            "Azalmaktadır, çünkü *marginal utility* azalıyor.",
            "Sabit kalmaktadır.",
            "Sıfıra inmiştir.",
            "Artmaya devam eder, ama giderek daha yavaş artar."
          ],
          "a": 3,
          "why": "Her dilim toplama pozitif bir miktar ekliyor, o yüzden toplam artar. *Marginal utility* azaldığı için artış giderek küçülür. Toplam ancak MU negatif olunca düşer."
        },
        {
          "q": "Kerem Cumartesi basketbol sahası kiralayacak; saati 100 lira. Tabloda her ek saatin ona sağladığı *marginal benefit* var. *Net benefit*'ini en büyük yapmak için kaç saat kiralamalı?",
          "opts": [
            "5 saat",
            "4 saat",
            "3 saat",
            "2 saat"
          ],
          "a": 2,
          "why": "MB, MC'den büyük olduğu sürece devam: 250, 180 ve 120 hepsi 100'den büyük. Dördüncü saat 90, yani 100'den az; kiralamamalı. Net fayda 3 saatte 550 eksi 300, 250; 4 saatte 640 eksi 400, 240.",
          "fig": {
            "type": "table",
            "head": [
              "Saat",
              "Marginal benefit (lira)",
              "Marginal cost (lira)"
            ],
            "rows": [
              [
                "1",
                "250",
                "100"
              ],
              [
                "2",
                "180",
                "100"
              ],
              [
                "3",
                "120",
                "100"
              ],
              [
                "4",
                "90",
                "100"
              ],
              [
                "5",
                "60",
                "100"
              ]
            ],
            "caption": "Kerem'in basketbol kararı"
          }
        },
        {
          "q": "Su yaşam için elmastan çok daha önemlidir, ama elmasın fiyatı çok daha yüksektir. Bunun en iyi açıklaması hangisidir?",
          "opts": [
            "Elmasın *total utility*'si suyunkinden büyüktür.",
            "Su bol olduğu için son biriminin *marginal utility*'si düşüktür; fiyatı *marginal utility* belirler.",
            "Suyun üretimi daha pahalı olduğu için talebi düşüktür.",
            "Elmas *law of diminishing marginal utility*'ye uymaz."
          ],
          "a": 1,
          "why": "Suyun *total utility*'si çok büyüktür, ama o kadar bol tüketiriz ki bir bardak daha neredeyse hiç fayda katmaz. Elmas kıt olduğu için bir tane daha çok değerlidir. İnsanlar ek birime göre öder."
        }
      ]
    },
    {
      "no": 9,
      "code": "1.6-2",
      "slug": "mi104",
      "title": "Tüketici Seçimi ve Fayda Maksimizasyonu",
      "en": "Consumer Choice and Utility Maximization",
      "accent": "#FF6F61",
      "seconds": 260,
      "terms": [
        "Budget constraint",
        "Budget line",
        "Income",
        "Marginal utility",
        "Marginal utility per dollar",
        "Utility-maximizing rule",
        "Consumer equilibrium",
        "Total utility",
        "Law of diminishing marginal utility",
        "Law of demand"
      ],
      "questions": [
        {
          "q": "Atari salonunda Can'ın 18 jetonu var. Yarış oyunu 2 jeton, VR oyunu 4 jeton. Tabloda her oyunun ek faydası var. Can *total utility*'sini en büyük yapmak için hangi kombinasyonu oynamalı?",
          "opts": [
            "5 yarış ve 2 VR",
            "1 yarış ve 4 VR",
            "3 yarış ve 3 VR",
            "4 yarış ve 3 VR"
          ],
          "a": 2,
          "why": "Jeton başına fayda: yarış 8, 6, 4, 3, 2; VR 10, 6, 4, 3, 2. Sırayla VR 1 (10), yarış 1 (8), ikisinden 6'lar, ikisinden 4'ler: 3 yarış, 3 VR, tam 18 jeton, 116 util. 5 yarış 2 VR 110, 1 yarış 4 VR 108 util verir; 4 yarış 3 VR ise 20 jeton, bütçeyi aşar.",
          "fig": {
            "type": "table",
            "head": [
              "Kaçıncı oyun",
              "Yarış oyunu MU (2 jeton)",
              "VR oyunu MU (4 jeton)"
            ],
            "rows": [
              [
                "1",
                "16",
                "40"
              ],
              [
                "2",
                "12",
                "24"
              ],
              [
                "3",
                "8",
                "16"
              ],
              [
                "4",
                "6",
                "12"
              ],
              [
                "5",
                "4",
                "8"
              ]
            ],
            "caption": "Can'ın atari salonundaki ek faydası (util)"
          }
        },
        {
          "q": "Grafik Zeynep'in sinema bileti ve kitap için *budget line*'ını gösteriyor. Zeynep'in geliri 120 lira. Bir sinema biletinin fiyatı ve bir biletin *opportunity cost*'u nedir?",
          "opts": [
            "30 lira; 1,5 kitap",
            "20 lira; 1,5 kitap",
            "30 lira; üçte iki kitap",
            "40 lira; 2 kitap"
          ],
          "a": 0,
          "why": "Bütün gelirle en fazla 4 bilet alınıyor: 120 bölü 4, bilet 30 lira. En fazla 6 kitap: kitap 20 lira. Bir bilet için vazgeçilen kitap 30 bölü 20, yani 1,5 kitap; doğrunun eğimi de 6 bölü 4.",
          "fig": {
            "type": "graph",
            "xlabel": "Movie tickets",
            "ylabel": "Books",
            "xmax": 10,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  6
                ],
                "to": [
                  8,
                  0
                ],
                "label": "Budget line"
              }
            ],
            "xticks": [
              {
                "v": 4,
                "label": "2"
              },
              {
                "v": 8,
                "label": "4"
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
              }
            ]
          }
        },
        {
          "q": "Ahmet bütün gelirini X ve Y mallarına harcıyor. Aşağıdaki durumlardan hangisinde Ahmet *utility*'sini maksimize ediyor?",
          "opts": [
            "X'in MU'su 20, fiyatı 5 lira; Y'nin MU'su 30, fiyatı 10 lira",
            "X'in MU'su 24, fiyatı 6 lira; Y'nin MU'su 36, fiyatı 9 lira",
            "X'in MU'su 10, fiyatı 2 lira; Y'nin MU'su 10, fiyatı 5 lira",
            "X'in MU'su 15, fiyatı 3 lira; Y'nin MU'su 15, fiyatı 5 lira"
          ],
          "a": 1,
          "why": "*Utility-maximizing rule* lira başına ek faydaların eşit olmasını ister. B'de 24 bölü 6, 4; 36 bölü 9, yine 4. A'da 4 ve 3, C'de 5 ve 2, D'de 5 ve 3. D'de MU'lar eşit ama fiyatlar farklı; asıl ölçü lira başına fayda."
        },
        {
          "q": "Bir tüketici *consumer equilibrium*'dayken, diğer her şey sabitken meyve suyunun fiyatı düşüyor. Tüketicinin vereceği tepki en iyi hangisiyle açıklanır?",
          "opts": [
            "Meyve suyunun *marginal utility*'si artar, bu yüzden daha az meyve suyu alır.",
            "Bütçesi değişmediği için hiçbir şeyi değiştirmez.",
            "Meyve suyunu bırakıp bütün parasını diğer mala harcar.",
            "Meyve suyunun lira başına *marginal utility*'si artar, bu yüzden daha çok meyve suyu alır."
          ],
          "a": 3,
          "why": "Fiyat düşünce MU bölü P büyür; meyve suyu artık lira başına daha çok fayda veriyor. Eşitliği yeniden kurmak için daha çok meyve suyu alır, ta ki azalan MU oranı yeniden eşitleyene kadar. Bu, *law of demand*'in fayda tarafındaki açıklamasıdır."
        },
        {
          "q": "Ece şöyle düşünüyor: İlk dilim pizza bana 50 util, ilk hamburger 40 util veriyor; o hâlde önce pizza almalıyım. Bu akıl yürütmedeki hata nedir?",
          "opts": [
            "*Total utility*'yi değil *marginal utility*'yi karşılaştırıyor.",
            "*Law of diminishing marginal utility*'yi yanlış uyguluyor.",
            "Fiyatları hesaba katmıyor; lira başına *marginal utility* karşılaştırılmalı.",
            "Util'ler ölçülemediği için böyle bir karşılaştırma yapılamaz."
          ],
          "a": 2,
          "why": "Pizza 50 lira, hamburger 25 lira olsaydı pizza lira başına 1, hamburger 1,6 util verirdi; hamburger daha iyi seçim olurdu. Karar MU'ya değil, MU bölü fiyata göre verilir. İlk birimlerde *marginal utility*'ye bakmak doğru; eksik olan fiyat."
        }
      ]
    }
  ],
  "final": []
};
