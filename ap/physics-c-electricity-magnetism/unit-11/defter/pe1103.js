/* Kitpath not defteri · pe1103 · 11.5 Karma Doğru Akım Devreleri
   Kaynak: defter-araclari/kaynak/ced-physc.md (Unit 11). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  "slug": "pe1103",
  "amac": "Bu konu birden çok direnç ve gerçek bir pil içeren devreleri anlatıyor: seri ve paralel eşdeğer direnç, pilin iç direnci, ampermetre ve voltmetrenin bağlanışı. Sonunda karma bir devrede her direncin akımını, gerilimini ve gücünü bulacaksın.",
  "bolumler": [
    {
      "baslik": "Seri ve paralel bağlantı",
      "kisa": "Seride I ortak, R toplanır; paralelde ΔV ortak, 1/R toplanır.",
      "bloklar": [
        {
          "tip": "ikili",
          "sol": {
            "ikon": "🔗",
            "baslik": "Seri",
            "maddeler": [
              "Yükün tek yolu var: I ortak",
              "R_eq = R₁ + R₂ + …",
              "R_eq en büyük dirençten büyük"
            ]
          },
          "sag": {
            "ikon": "🔀",
            "baslik": "Paralel",
            "maddeler": [
              "İki ya da daha çok yol: ΔV ortak",
              "1/R_eq = 1/R₁ + 1/R₂ + …",
              "R_eq en küçük dirençten küçük"
            ]
          },
          "oyun": [
            {
              "metin": "Her dirençten aynı akım geçer.",
              "cevap": "sol",
              "neden": "Tek yol var, yük başka yere gidemez."
            },
            {
              "metin": "Evdeki prizlere takılı cihazların hepsinde aynı 220 V vardır.",
              "cevap": "sag",
              "neden": "Prizler paralel bağlıdır; her koldaki ΔV aynıdır."
            },
            {
              "metin": "Bir kol eklenince toplam direnç azalır.",
              "cevap": "sag",
              "neden": "Akıma yeni bir yol açılır; R_eq küçülür."
            },
            {
              "metin": "Araya bir direnç daha girince toplam direnç artar.",
              "cevap": "sol",
              "neden": "Seride dirençler toplanır."
            }
          ]
        },
        {
          "tip": "formul",
          "parcalar": [
            {
              "t": "R_s",
              "alt": "seri"
            },
            "=",
            {
              "t": "ΣRᵢ"
            },
            "|",
            {
              "t": "1/R_p",
              "alt": "paralel"
            },
            "=",
            {
              "t": "Σ 1/Rᵢ"
            }
          ],
          "aciklama": "Sınavda böyle yaz: *The resistors are in parallel because they are connected between the same two nodes, so the potential difference across each is the same.*"
        },
        {
          "tip": "tuzak",
          "baslik": "Paralel kol direnci artırmaz",
          "metin": "Paralel kol eklemek akıma yeni bir yol açar: 6 Ω ile 6 Ω paralel bağlanınca R_eq = 3 Ω olur. İdeal pilde her koldaki akım değişmez, pilden çekilen toplam akım artar.",
          "yanlis": "Daha çok direnç eklendi, toplam direnç artar.",
          "dogru": "Paralelde R_eq hep en küçük dirençten küçüktür; artış yalnızca seride olur."
        }
      ]
    },
    {
      "baslik": "Çözümlü örnek: karma devre",
      "kisa": "Önce eşdeğer dirençle I'yı bul, sonra gerilimleri ve akımları dağıt.",
      "bloklar": [
        {
          "tip": "ornek",
          "baslik": "12 V pil, 4 Ω ve (6 Ω ∥ 12 Ω)",
          "durum": "İdeal 12 V pile 4 Ω'luk R₁ seri bağlı; ardından 6 Ω'luk R₂ ile 12 Ω'luk R₃ paralel bağlı. Her dirençteki akımı, gerilimi ve gücü bul.",
          "adimlar": [
            "Paralel kısım: 1/R_p = 1/6 + 1/12 = 3/12, yani R_p = 4 Ω.",
            "Seri: R_eq = 4 + 4 = 8 Ω; pilden çekilen akım I = ε/R_eq = 12/8 = 1,5 A.",
            "R₁'den 1,5 A geçer: ΔV₁ = IR₁ = 1,5 × 4 = 6 V. Kalan 12 − 6 = 6 V paralel kısımdadır.",
            "Paralelde ΔV ortak: I₂ = 6/6 = 1,0 A ve I₃ = 6/12 = 0,5 A. Kontrol: 1,0 + 0,5 = 1,5 A.",
            "Güçler: P₁ = I²R₁ = 9 W, P₂ = ΔV²/R₂ = 6 W, P₃ = 3 W. Toplam 18 W = εI = 12 × 1,5.",
            "Sınavda böyle yaz: *By Ohm's law, I = ε/R_eq = 1.5 A; the potential difference across the parallel pair is ε − IR₁ = 6 V.*"
          ],
          "sonuc": "I₁ = 1,5 A, I₂ = 1,0 A, I₃ = 0,5 A; ΔV₁ = ΔV₂ = ΔV₃ = 6 V; toplam güç 18 W"
        },
        {
          "tip": "tablo",
          "baslik": "Sonuç tablosu",
          "head": [
            "Direnç",
            "R (Ω)",
            "ΔV (V)",
            "I (A)",
            "P (W)"
          ],
          "rows": [
            [
              "R₁",
              "4",
              "6",
              "1,5",
              "9"
            ],
            [
              "R₂",
              "6",
              "6",
              "1,0",
              "6"
            ],
            [
              "R₃",
              "12",
              "6",
              "0,5",
              "3"
            ]
          ],
          "not": "Dirençlerdeki güçlerin toplamı pilin verdiği güce eşittir: 9 + 6 + 3 = 18 W."
        }
      ]
    },
    {
      "baslik": "Gerçek pil ve iç direnç",
      "kisa": "Pil, ε emf'li ideal bir pil ile seri bir iç direnç r gibi davranır.",
      "bloklar": [
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "🔋",
              "terim": "Emf",
              "tr": "elektromotor kuvvet, ε",
              "tanim": "Akım yokken pilin uçları arasındaki potansiyel farkı. Sabittir; akım ise devreye bağlıdır.",
              "ornek": "Hiçbir şeye bağlı olmayan bir 1,5 V kalem pil, voltmetrede 1,5 V gösterir."
            },
            {
              "ikon": "🧱",
              "terim": "Internal resistance",
              "tr": "iç direnç, r",
              "tanim": "Pilin kendi içindeki direnç; ideal pile seri bağlı gibi düşünülür. Akım geçince uçlardaki gerilim ΔV = ε − Ir olur.",
              "ornek": "Eski pil zayıf ışık verir: iç direnci büyümüş, Ir kaybı artmıştır."
            },
            {
              "ikon": "✨",
              "terim": "Ideal battery and wire",
              "tr": "ideal pil ve tel",
              "tanim": "İdeal pilde r = 0, ideal telde direnç yoktur. Sınav aksini söylemedikçe pil, tel ve aletler idealdir; telin direncini ihmal etmek devrede başka dirençli eleman olduğunda anlamlıdır.",
              "ornek": "Ampulü pile bağlayan kalın tel, ampule göre ihmal edilebilir dirençtedir."
            }
          ]
        },
        {
          "tip": "grafik",
          "baslik": "Uç gerilimi – akım: ΔV = ε − Ir (ε = 12 V, r = 2 Ω)",
          "xlabel": "I (A)",
          "ylabel": "ΔV uç (V)",
          "xmax": 7,
          "ymax": 14,
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
            },
            {
              "v": 12,
              "label": "12"
            }
          ],
          "ogeler": [
            {
              "id": "e",
              "tip": "nokta",
              "x": 0,
              "y": 12,
              "renk": 0,
              "etiket": "ε = 12 V"
            },
            {
              "id": "hat",
              "tip": "cizgi",
              "from": [0, 12],
              "to": [6, 0],
              "renk": 0,
              "gizli": true
            },
            {
              "id": "egim",
              "tip": "yazi",
              "x": 4.7,
              "y": 8.2,
              "metin": "eğim = −r = −2 Ω",
              "gizli": true,
              "hiza": "start"
            },
            {
              "id": "p2",
              "tip": "nokta",
              "x": 2,
              "y": 8,
              "renk": 3,
              "etiket": "R = 4 Ω",
              "kilavuz": true,
              "gizli": true
            },
            {
              "id": "p4",
              "tip": "nokta",
              "x": 4,
              "y": 4,
              "renk": 3,
              "etiket": "R = 1 Ω",
              "kilavuz": true,
              "gizli": true
            },
            {
              "id": "ks",
              "tip": "nokta",
              "x": 6,
              "y": 0,
              "renk": 2,
              "etiket": "kısa devre",
              "gizli": true
            }
          ],
          "durumlar": [
            {
              "metin": "Pil hiçbir şeye bağlı değil: I = 0, uçlardaki gerilim ε = 12 V."
            },
            {
              "metin": "Yük bağlanınca ΔV = ε − Ir doğrusu çıkar: I arttıkça uç gerilimi düşer.",
              "goster": [
                "hat",
                "egim"
              ]
            },
            {
              "metin": "R = 4 Ω'luk yük: I = ε/(R + r) = 12/6 = 2 A, ΔV = 12 − 2 × 2 = 8 V.",
              "goster": [
                "p2"
              ]
            },
            {
              "metin": "Daha küçük yük, R = 1 Ω: I = 12/3 = 4 A, ΔV = 12 − 4 × 2 = 4 V.",
              "goster": [
                "p4"
              ]
            },
            {
              "metin": "Uçlar telle birleşirse (R → 0): I = ε/r = 6 A ve ΔV = 0.",
              "goster": [
                "ks"
              ]
            }
          ]
        },
        {
          "tip": "tuzak",
          "baslik": "Pil her devreye aynı akımı vermez",
          "metin": "Pilin emf'i sabittir, akımı değil. Akım devrenin toplam direncine bağlıdır: I = ε/(R + r).",
          "yanlis": "Pil 1,5 V ise uçları arasında hep 1,5 V vardır ve hep aynı akımı verir.",
          "dogru": "Yalnız I = 0 iken ΔV = ε; akım varken ΔV = ε − Ir. Sınavda böyle yaz: *The terminal potential difference is less than the emf because of the potential drop Ir across the internal resistance.*"
        }
      ]
    },
    {
      "baslik": "Ampermetre ve voltmetre",
      "kisa": "Ampermetre elemana seri, voltmetre elemana paralel bağlanır.",
      "bloklar": [
        {
          "tip": "ikili",
          "sol": {
            "ikon": "📏",
            "baslik": "*Ammeter* (A)",
            "maddeler": [
              "Akımı ölçer",
              "Elemana seri bağlanır",
              "İdealde direnci 0"
            ]
          },
          "sag": {
            "ikon": "🌡️",
            "baslik": "*Voltmeter* (V)",
            "maddeler": [
              "ΔV ölçer",
              "Elemana paralel bağlanır",
              "İdealde direnci sonsuz"
            ]
          },
          "oyun": [
            {
              "metin": "Bir koldan geçen akımı bilmek istiyorsun.",
              "cevap": "sol",
              "neden": "Akımı ölçmek için aleti o kola seri sokarsın."
            },
            {
              "metin": "Direncin iki ucu arasındaki gerilimi ölçüyorsun.",
              "cevap": "sag",
              "neden": "ΔV iki nokta arasında ölçülür, alet paralel girer."
            },
            {
              "metin": "İdealde devreden akım çekmez.",
              "cevap": "sag",
              "neden": "Sonsuz dirençli olduğu için devreyi bozmaz."
            },
            {
              "metin": "Direnci sıfırdan büyükse devredeki akımı azaltır.",
              "cevap": "sol",
              "neden": "Seri girdiği için toplam direnci artırır."
            }
          ]
        },
        {
          "tip": "tuzak",
          "baslik": "Aletleri ters bağlamak",
          "metin": "Sınavın deney sorusunda öğrenciler alet yerleşiminde puan kaybetti. İdeal olmayan aletler devreyi de değiştirir.",
          "yanlis": "Ampermetre paralel, voltmetre seri.",
          "dogru": "Ampermetre seri, voltmetre paralel. İdeal voltmetre yanlışlıkla seri girerse akım 0 olur ve alet ε değerini okur. Sınavda böyle yaz: *The ammeter is connected in series with the resistor and the voltmeter is connected in parallel across it.*"
        }
      ]
    },
    {
      "baslik": "Toparlayalım",
      "kisa": "Sınavdan önce bu listeye bir kez bak.",
      "bloklar": [
        {
          "tip": "ozet",
          "maddeler": [
            "Seride I ortak ve R_eq = ΣRᵢ; paralelde ΔV ortak ve 1/R_eq = Σ1/Rᵢ.",
            "Paralel kol eklemek R_eq'yu azaltır; seri direnç eklemek artırır.",
            "Karma devrede önce R_eq ve I = ε/R_eq, sonra gerilimler ve kol akımları gelir.",
            "Dirençlerdeki güçlerin toplamı pilin gücüne (εI) eşittir.",
            "Gerçek pil: ΔV = ε − Ir; yalnız I = 0 iken uç gerilimi ε'dur, kısa devrede I = ε/r.",
            "*Ammeter* seri ve idealde direnci 0; *voltmeter* paralel ve idealde direnci sonsuz.",
            "Sınav aksini söylemedikçe pil, tel ve aletler idealdir."
          ]
        }
      ]
    }
  ],
  "sorular": [
    {
      "q": "Two identical resistors are connected in parallel across an ideal battery. A third identical resistor is then connected in parallel with the first two. Compared with before, the total current supplied by the battery and the current in each of the original two resistors have what changes?",
      "opts": [
        "decreases; increases",
        "increases; decreases",
        "increases; stays the same",
        "stays the same; stays the same"
      ],
      "a": 2,
      "why": "İdeal pilde her kolun ΔV'si ε olarak kalır, bu yüzden eski dirençlerin akımı değişmez. Yeni kol akıma ek yol açar, R_eq azalır ve pilden çekilen akım artar. B en çekici yanlış: yeni kolun akımı 'paylaştığını' sanar; oysa pilin ΔV'si sabit."
    },
    {
      "q": "In the circuit shown, the battery is ideal. What is the current in the 6 Ω resistor?",
      "fig": {
        "type": "code",
        "caption": "Circuit diagram",
        "code": "   +---[ 1 Ω ]---+----------+\n   |              |          |\n [ 9 V ]        [ 6 Ω ]    [ 3 Ω ]\n   |              |          |\n   +--------------+----------+"
      },
      "opts": [
        "0.5 A",
        "1 A",
        "2 A",
        "3 A"
      ],
      "a": 1,
      "why": "R_p = (6 × 3)/(6 + 3) = 2 Ω, R_eq = 1 + 2 = 3 Ω, pilden I = 9/3 = 3 A. Paralel kısımdaki ΔV = 9 − 3 × 1 = 6 V, 6 Ω'dan I = 6/6 = 1 A geçer. D en çekici yanlış: pilden çekilen toplam akımdır."
    },
    {
      "q": "The graph shows the potential difference across the terminals of a battery as a function of the current drawn from it. What are the emf and the internal resistance of the battery?",
      "fig": {
        "type": "graph",
        "xlabel": "I (A)",
        "ylabel": "ΔV (V)",
        "xmax": 6,
        "ymax": 12,
        "lines": [
          {
            "from": [0, 10],
            "to": [5, 0],
            "label": "battery"
          }
        ],
        "xticks": [
          {
            "v": 1,
            "label": "1"
          },
          {
            "v": 2,
            "label": "2"
          },
          {
            "v": 3,
            "label": "3"
          },
          {
            "v": 4,
            "label": "4"
          },
          {
            "v": 5,
            "label": "5"
          }
        ],
        "yticks": [
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
            "v": 8,
            "label": "8"
          },
          {
            "v": 10,
            "label": "10"
          }
        ]
      },
      "opts": [
        "10 V, 2 Ω",
        "10 V, 0.5 Ω",
        "5 V, 2 Ω",
        "10 V, 5 Ω"
      ],
      "a": 0,
      "why": "I = 0'da ΔV = ε = 10 V. Eğimin büyüklüğü r = 10/5 = 2 Ω (ΔV = ε − Ir). B en çekici yanlış: eğimi ΔI/ΔV = 0,5 diye tersine okur."
    },
    {
      "q": "A student accidentally connects an ideal voltmeter in series with a resistor R and an ideal battery of emf ε. Which of the following describes the voltmeter reading and the current in the circuit?",
      "opts": [
        "Reads 0; current is ε/R",
        "Reads ε; current is zero",
        "Reads ε; current is ε/R",
        "Reads 0; current is zero"
      ],
      "a": 1,
      "why": "İdeal voltmetrenin direnci sonsuzdur: akım 0 olur, R üzerinde ΔV = 0 kalır ve bütün ε voltmetrenin uçlarında görünür. C en çekici yanlış: voltmetrenin ε okuduğunu bilir ama akımın hâlâ ε/R olduğunu sanır."
    },
    {
      "q": "Three identical 6 Ω resistors can be connected in different ways. Which arrangement has an equivalent resistance of 4 Ω?",
      "opts": [
        "All three in series",
        "All three in parallel",
        "Two in parallel, with the third in series with that pair",
        "One resistor in parallel with the series combination of the other two"
      ],
      "a": 3,
      "why": "6 Ω ile (6 + 6) Ω paralel: (6 × 12)/18 = 4 Ω. A 18 Ω, B 2 Ω, C 3 + 6 = 9 Ω verir. C en çekici yanlış: paralel çifti 3 Ω bulup seri direnci eklemek 4 Ω değil 9 Ω eder."
    }
  ]
};
