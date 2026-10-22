/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/mc1N/questions.json) */
window.KIT = {
  "store": "macro-u1:v1:",
  "course": "Macroeconomics",
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
      "seconds": 315,
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
      "code": "1.2-1",
      "slug": "mc102",
      "title": "Fırsat Maliyeti ve PPC",
      "en": "Opportunity Cost and the PPC",
      "accent": "#2FD6B9",
      "seconds": 273,
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
    }
  ],
  "final": []
};
