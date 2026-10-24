/* Kitpath not defteri · pe1101 · 11.1–11.3 Akım, Direnç ve Ohm Yasası
   Kaynak: defter-araclari/kaynak/ced-physc.md (Unit 11). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  "slug": "pe1101",
  "amac": "Bu konu devrenin temelini anlatıyor: akım nedir, kapalı devre nasıl çalışır, bir telin direnci neye bağlıdır ve Ohm yasası neyi söyler. Sonunda I = dq/dt, R = ρℓ/A ve I = ΔV/R ile hesap yapıp I–ΔV grafiğini okuyacaksın.",
  "bolumler": [
    {
      "baslik": "Akım ve akım yoğunluğu",
      "kisa": "Akım yükün geçiş hızıdır; akım yoğunluğu J, akımı kesite dağıtır.",
      "bloklar": [
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "⚡",
              "terim": "Electric current",
              "tr": "akım",
              "tanim": "Bir kesitten birim zamanda geçen yük: I = dq/dt, birimi A = C/s. Skalerdir ama iletkene göre bir yönü vardır; vektör gibi toplanmaz, bileşenlere ayrılmaz.",
              "ornek": "Telden 3 s'de 6 C geçerse I = 2 A; yön olarak pozitif yükün gideceği yön (*conventional current*) çizilir."
            },
            {
              "ikon": "🐢",
              "terim": "Drift velocity",
              "tr": "sürüklenme hızı",
              "tanim": "Yüklü taşıyıcıların rastgele hareketine eklenen çok yavaş ortalama kayma: I = nqv_d A. Akım sıfırsa net kayma sıfırdır, taşıyıcılar yine de hareket eder.",
              "ornek": "Okul çıkışında koridor yavaş akar; kimse koşmuyor ama kapıdan saniyede çok kişi geçer."
            },
            {
              "ikon": "🚪",
              "terim": "Current density",
              "tr": "akım yoğunluğu",
              "tanim": "Birim alandan geçen akım; vektördür: J = nqv_d. Toplam akım I = ∫J·dA, iletkendeki alan ise E = ρJ.",
              "ornek": "Aynı akım dar kapıdan geçerken J büyür, geniş kapıdan geçerken küçülür."
            }
          ]
        },
        {
          "tip": "ornek",
          "baslik": "J = Cr olan telde toplam akım",
          "durum": "Yarıçapı R = 1,0 mm olan silindirik telde akım yoğunluğu eksenden uzaklaştıkça artıyor: J = Cr, C = 3,0 × 10⁶ A/m³. Toplam akımı bul.",
          "adimlar": [
            "J düzgün değil, o yüzden I = JA yazamazsın; ince halkaları topla: I = ∫J·dA.",
            "r yarıçaplı, dr kalınlıklı halkanın alanı dA = 2πr dr.",
            "I = ∫₀^R (Cr)(2πr dr) = 2πC ∫₀^R r² dr = 2πC R³/3.",
            "Sayılar: 2π × (3,0 × 10⁶) × (1,0 × 10⁻³)³ / 3 = 2π × 10⁻³ A.",
            "Sınavda böyle yaz: *I = ∫J·dA with dA = 2πr dr, integrating from r = 0 to r = R.*"
          ],
          "sonuc": "I = 2πCR³/3 = 2π × 10⁻³ A ≈ 6,3 mA"
        }
      ]
    },
    {
      "baslik": "Devre, ilmek ve kısa devre",
      "kisa": "Akım yalnızca kapalı ilmekte akar; kısa devre edilen elemandan geçmez.",
      "bloklar": [
        {
          "tip": "tablo",
          "baslik": "Devre durumları ve semboller",
          "head": [
            "Terim",
            "Ne demek",
            "Sonuç"
          ],
          "rows": [
            [
              "*Closed circuit*",
              "Yüklerin dolaşabileceği kapalı bir yol var",
              "Akım akar"
            ],
            [
              "*Open circuit*",
              "Yol bir yerde kopuk (ör. anahtar açık)",
              "I = 0"
            ],
            [
              "*Short circuit*",
              "Elemanın iki ucu sıfır dirençli yolla bağlı",
              "Elemanda ΔV = 0, akım ondan geçmez"
            ],
            [
              "Şema sembolleri",
              "Pil, direnç, ampul, anahtar, kondansatör, ampermetre (A), voltmetre (V), bobin; değişken elemanda çapraz ok",
              "Seri mi paralel mi, düğümlerden anlaşılır; çizimdeki konum önemsiz"
            ]
          ],
          "vurgu": 2,
          "not": "Şemalar conventional current ile çizilir; bir eleman birden çok ilmeğin parçası olabilir. Sınavda böyle yaz: *The bulb is shorted, so the potential difference across it is zero and no current passes through it.*"
        },
        {
          "tip": "ikili",
          "sol": {
            "ikon": "✂️",
            "baslik": "*Open circuit*",
            "maddeler": [
              "Yol kopuk",
              "Akım hiçbir yerde akmaz",
              "Anahtar açık"
            ]
          },
          "sag": {
            "ikon": "🔌",
            "baslik": "*Short circuit*",
            "maddeler": [
              "Eleman sıfır dirençli yolla köprülü",
              "Elemanın ΔV'si 0",
              "Akım köprüden geçer, elemandan değil"
            ]
          },
          "oyun": [
            {
              "metin": "Anahtar açık, ampul yanmıyor.",
              "cevap": "sol",
              "neden": "Yol kopuk; akım hiçbir yerde akmaz."
            },
            {
              "metin": "Ampulün iki ucu bir telle birleştirildi, ampul söndü.",
              "cevap": "sag",
              "neden": "Akım teli seçer; ampulün iki ucu arasında ΔV = 0."
            },
            {
              "metin": "Tek ilmek bir yerden kesildi.",
              "cevap": "sol",
              "neden": "Kapalı yol kalmadı, I = 0."
            },
            {
              "metin": "Direncin iki ucu kalın bir telle köprülendi.",
              "cevap": "sag",
              "neden": "Köprü sıfır dirençli yol; dirençte ΔV = 0, akım köprüden gider."
            }
          ]
        }
      ]
    },
    {
      "baslik": "Direnç ve resistivity",
      "kisa": "R = ρℓ/A: uzunlukla artar, kesit alanıyla azalır.",
      "bloklar": [
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "🚧",
              "terim": "Resistance",
              "tr": "direnç",
              "tanim": "Bir elemanın yük akışına karşı koyma derecesi, birimi Ω. Dirençler elektrik enerjisini ısıya çevirir.",
              "ornek": "Uzun ve dar bir hortumdan su zor akar: direnci büyüktür."
            },
            {
              "ikon": "🧪",
              "terim": "Resistivity",
              "tr": "özdirenç",
              "tanim": "Malzemenin kendi özelliği ρ (birimi Ω·m); atomik yapıya bağlıdır. İletkenlerde sıcaklıkla genelde artar, ohmic malzemede sabit kabul edilir.",
              "ornek": "Bakırın ρ değeri nikromunkinden çok küçüktür; ısıtıcı teli bu yüzden nikromdur."
            }
          ]
        },
        {
          "tip": "formul",
          "parcalar": [
            {
              "t": "R",
              "alt": "direnç"
            },
            "=",
            {
              "t": "ρℓ",
              "alt": "özdirenç × uzunluk"
            },
            "/",
            {
              "t": "A",
              "alt": "kesit alanı"
            }
          ],
          "aciklama": "Uzunluk iki katına çıkarsa R iki katı olur; kesit alanı iki katına çıkarsa R yarıya iner. ρ uzunluk boyunca değişiyorsa R = ∫ρ(ℓ)dℓ / A. Sınavda böyle yaz: *R is proportional to the length and inversely proportional to the cross-sectional area.*"
        },
        {
          "tip": "ornek",
          "baslik": "Nikrom ısıtıcı teli",
          "durum": "Nikrom telin ρ = 1,0 × 10⁻⁶ Ω·m, uzunluğu ℓ = 1,0 m, çapı d = 0,40 mm. Direncini ve 12 V'a bağlanınca akımını bul.",
          "adimlar": [
            "Yarıçap r = 0,20 mm = 2,0 × 10⁻⁴ m; kesit alanı A = πr² = π(2,0 × 10⁻⁴)² ≈ 1,26 × 10⁻⁷ m².",
            "R = ρℓ/A = (1,0 × 10⁻⁶)(1,0) / (1,26 × 10⁻⁷) ≈ 8,0 Ω.",
            "Ohm yasası: I = ΔV/R = 12 / 8,0 ≈ 1,5 A."
          ],
          "sonuc": "A ≈ 1,26 × 10⁻⁷ m², R ≈ 8,0 Ω, I ≈ 1,5 A"
        }
      ]
    },
    {
      "baslik": "Ohm yasası ve I–ΔV grafiği",
      "kisa": "Ohmic elemanda I–ΔV grafiği doğrudur ve eğimi 1/R'dir.",
      "bloklar": [
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "📐",
              "terim": "Ohm's law",
              "tr": "Ohm yasası",
              "tanim": "I = ΔV/R: akım potansiyel farkıyla doğru, dirençle ters orantılıdır. Direnci her akımda sabit olan elemana *ohmic* denir.",
              "ornek": "R = 2 Ω olan direnç 6 V'ta 3 A çeker."
            }
          ]
        },
        {
          "tip": "grafik",
          "baslik": "I–ΔV grafiği: doğrunun eğimi 1/R",
          "xlabel": "ΔV (V)",
          "ylabel": "I (A)",
          "xmax": 10,
          "ymax": 6,
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
              "v": 8,
              "label": "8"
            },
            {
              "v": 10,
              "label": "10"
            }
          ],
          "yticks": [
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
          "ogeler": [
            {
              "id": "r2",
              "tip": "cizgi",
              "from": [0, 0],
              "to": [10, 5],
              "renk": 0,
              "etiket": "2 Ω"
            },
            {
              "id": "pt",
              "tip": "nokta",
              "x": 6,
              "y": 3,
              "renk": 3,
              "etiket": "6 V, 3 A",
              "kilavuz": true,
              "gizli": true
            },
            {
              "id": "r5",
              "tip": "cizgi",
              "from": [0, 0],
              "to": [10, 2],
              "renk": 1,
              "etiket": "5 Ω",
              "gizli": true
            },
            {
              "id": "bulb",
              "tip": "egri",
              "noktalar": [
                [0, 0],
                [0.5, 0.435],
                [1, 0.769],
                [1.5, 1.034],
                [2, 1.25],
                [2.5, 1.429],
                [3, 1.579],
                [3.5, 1.707],
                [4, 1.818],
                [4.5, 1.915],
                [5, 2],
                [5.5, 2.075],
                [6, 2.143],
                [6.5, 2.203],
                [7, 2.258],
                [7.5, 2.308],
                [8, 2.353],
                [8.5, 2.394],
                [9, 2.432],
                [9.5, 2.468],
                [10, 2.5]
              ],
              "renk": 2,
              "gizli": true
            },
            {
              "id": "p2",
              "tip": "nokta",
              "x": 2,
              "y": 1.25,
              "renk": 2,
              "etiket": "1,6 Ω",
              "gizli": true
            },
            {
              "id": "p10",
              "tip": "nokta",
              "x": 10,
              "y": 2.5,
              "renk": 2,
              "etiket": "4 Ω",
              "gizli": true
            }
          ],
          "durumlar": [
            {
              "metin": "R = 2 Ω olan direnç: ΔV iki katına çıkınca I da iki katına çıkar; grafik orijinden geçen bir doğrudur."
            },
            {
              "metin": "Eğim ΔI/ΔV = 1/R = 0,5 A/V. Örnek nokta: 6 V'ta 3 A, yani R = 6/3 = 2 Ω.",
              "goster": [
                "pt"
              ]
            },
            {
              "metin": "R = 5 Ω olan direnç: eğim 0,2 A/V, doğru daha yatık. ==Eğim büyük, direnç küçük.==",
              "goster": [
                "r5"
              ]
            },
            {
              "metin": "Ampul teli ohmic değil: ısınınca ρ artar, R artar ve eğri yatıklaşır.",
              "goster": [
                "bulb"
              ]
            },
            {
              "metin": "Eğri üzerinde R = ΔV/I yine hesaplanır ama değişir: 2 V'ta 1,6 Ω, 10 V'ta 4 Ω.",
              "goster": [
                "p2",
                "p10"
              ]
            }
          ]
        },
        {
          "tip": "tuzak",
          "baslik": "Direnç deneyinde kaçan puanlar",
          "metin": "Sınavın direnç ölçme sorusunda öğrenciler aynı yerlerde takıldı: alet bağlantısı, alan ve eğim.",
          "yanlis": "Voltmetre seri, ampermetre paralel; A = yüzey alanı; eğim = tek veri noktası / orijin; eksende yalnız \"Resistance\".",
          "dogru": "Ampermetre seri, voltmetre paralel; A = π(d/2)² kesit alanı (d ölçülür, A hesaplanır); eğim doğru üzerindeki iki noktadan; eksen = nicelik + birim. Sınavda böyle yaz: *The slope of the R versus ℓ graph is ρ/A.*"
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
            "*Current* I = dq/dt; yönü pozitif yükün gideceği yöndür (*conventional current*), skalerdir ama vektör gibi toplanmaz.",
            "*Drift velocity* çok küçüktür; *current density* J = nqv_d, I = ∫J·dA ve E = ρJ.",
            "*Open circuit* akımı keser; *short circuit* edilen elemanın ΔV'si 0'dır ve akım ondan geçmez.",
            "R = ρℓ/A: ℓ ile artar, kesit alanı A ile azalır; ρ malzemeye bağlıdır.",
            "*Ohm's law*: I = ΔV/R; *ohmic* elemanda I–ΔV grafiği orijinden geçen doğrudur ve eğimi 1/R'dir.",
            "Dirençler elektrik enerjisini ısıya çevirir.",
            "Deneyde ampermetre seri, voltmetre paralel; A kesit alanıdır; eksenlere nicelik ve birim yaz."
          ]
        }
      ]
    }
  ],
  "sorular": [
    {
      "q": "A uniform wire has resistance R. The wire is stretched, with no change in its volume or resistivity, until its length is doubled. What is the new resistance of the wire?",
      "opts": [
        "R/2",
        "R",
        "2R",
        "4R"
      ],
      "a": 3,
      "why": "Hacim sabit: ℓ iki katına çıkınca kesit alanı A yarıya iner. R = ρℓ/A = ρ(2ℓ)/(A/2) = 4R. C şıkkı en çekici yanlış: yalnızca uzunluğun etkisini sayar, kesit alanının küçülmesini unutur."
    },
    {
      "q": "Data are taken for a device connected to a variable power supply. Which statement about the device is correct?",
      "fig": {
        "type": "table",
        "caption": "Measured data",
        "head": [
          "ΔV (V)",
          "I (A)"
        ],
        "rows": [
          [
            "1.0",
            "0.50"
          ],
          [
            "2.0",
            "0.80"
          ],
          [
            "3.0",
            "1.00"
          ],
          [
            "4.0",
            "1.15"
          ]
        ]
      },
      "opts": [
        "It is ohmic with R = 2.0 Ω.",
        "Its resistance increases as ΔV increases, so it is not ohmic.",
        "Its resistance decreases as ΔV increases, so it is not ohmic.",
        "Its resistance is constant because I increases when ΔV increases."
      ],
      "a": 1,
      "why": "R = ΔV/I: 2,0; 2,5; 3,0 ve yaklaşık 3,5 Ω. R artıyor, yani eleman ohmic değil. D en çekici yanlış: I'nın artması R'nin sabit olduğunu göstermez; ohmic için ΔV/I sabit olmalı."
    },
    {
      "q": "A cylindrical wire of radius R carries a current with current density J = kr, where r is the distance from the axis of the wire and k is a constant. What is the total current in the wire?",
      "opts": [
        "2πkR³/3",
        "πkR³",
        "πkR²",
        "2πkR³"
      ],
      "a": 0,
      "why": "dA = 2πr dr olduğundan I = ∫₀^R (kr)(2πr dr) = 2πkR³/3. B en çekici yanlış: J'yi dış yüzeydeki değeriyle (kR) sabit sayıp kR × πR² alır."
    },
    {
      "q": "A battery, a resistor R, and a bulb are connected in series. A switch S is connected in parallel with the bulb, as shown, and S is initially open. When S is closed, which of the following occurs? (Assume an ideal battery and an ohmic bulb.)",
      "fig": {
        "type": "code",
        "caption": "Circuit diagram",
        "code": "   +-----[ R ]-----+---------+\n   |                 |         |\n[battery]          (bulb)   switch S\n   |                 |         |\n   +-----------------+---------+"
      },
      "opts": [
        "The bulb goes out and the current in R decreases.",
        "The bulb gets brighter and the current in R increases.",
        "The bulb goes out and the current in R increases.",
        "The bulb is unchanged because the battery emf is constant."
      ],
      "a": 2,
      "why": "S kapanınca ampulün iki ucu köprülenir (kısa devre): ΔV = 0, ampulden akım geçmez ve söner. Toplam direnç ampul kadar azalır; ε sabitken I = ε/R_eq artar. D en çekici yanlış: ε'nun sabit olması akımın sabit olduğunu göstermez, R_eq değişti."
    },
    {
      "q": "The graph shows the current I versus the potential difference ΔV for two ohmic resistors X and Y. Which statement is correct?",
      "fig": {
        "type": "graph",
        "xlabel": "ΔV (V)",
        "ylabel": "I (A)",
        "xmax": 8,
        "ymax": 8,
        "lines": [
          {
            "from": [0, 0],
            "to": [8, 6],
            "label": "X"
          },
          {
            "from": [0, 0],
            "to": [8, 2],
            "label": "Y"
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
            "v": 8,
            "label": "8"
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
          }
        ]
      },
      "opts": [
        "R_X > R_Y, because the line for X has the greater slope.",
        "R_X < R_Y, because at the same ΔV the current in X is greater.",
        "R_X = R_Y, because both lines pass through the origin.",
        "R_X = 3R_Y, because the slope of X is three times the slope of Y."
      ],
      "a": 1,
      "why": "Eğim I/ΔV = 1/R; aynı ΔV'de X'ten daha çok akım geçiyor, bu yüzden R_X < R_Y (R_X = R_Y/3). A en çekici yanlış: eğim direnç değil, direncin tersidir."
    }
  ]
};
