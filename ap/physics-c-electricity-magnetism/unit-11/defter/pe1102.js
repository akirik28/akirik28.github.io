/* Kitpath not defteri · pe1102 · 11.4 Elektrik Gücü
   Kaynak: defter-araclari/kaynak/ced-physc.md (Unit 11). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  "slug": "pe1102",
  "amac": "Bu konu elektrik enerjisinin ne kadar hızlı aktarıldığını anlatıyor: P = IΔV ve ondan türeyen P = I²R ile P = ΔV²/R. Ampullerin seri ve paralel devrelerde parlaklığını karşılaştırmayı ve güç ile enerji faturasını hesaplamayı öğreneceksin.",
  "bolumler": [
    {
      "baslik": "Güç: enerji aktarım hızı",
      "kisa": "Güç, enerjinin aktarılma hızıdır: P = IΔV, birimi watt.",
      "bloklar": [
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "⏱️",
              "terim": "Electric power",
              "tr": "elektriksel güç",
              "tanim": "Bir elemanda elektrik enerjisinin aktarıldığı, dönüştüğü ya da harcandığı hız. Birimi W = J/s; ampul parlaklığı güçle artar.",
              "ornek": "100 W'lık ampul her saniye 100 J elektrik enerjisini ışığa ve ısıya çevirir."
            },
            {
              "ikon": "🔥",
              "terim": "Dissipated power",
              "tr": "ısı olarak harcanan güç",
              "tanim": "Dirençten geçen yük potansiyel enerjisini kaybeder ve bu enerji ısıya dönüşür. Dirençteki güç hep pozitiftir.",
              "ornek": "Isıtıcı teli ve çalışırken ısınan şarj aleti enerjiyi ısı olarak harcar."
            }
          ]
        },
        {
          "tip": "formul",
          "parcalar": [
            {
              "t": "P",
              "alt": "güç"
            },
            "=",
            {
              "t": "IΔV",
              "alt": "her eleman"
            },
            "=",
            {
              "t": "I²R",
              "alt": "akım ortaksa"
            },
            "=",
            {
              "t": "ΔV²/R",
              "alt": "ΔV ortaksa"
            }
          ],
          "aciklama": "ΔU = qΔV olduğundan P = dU/dt = IΔV çıkar; Ohm yasası (ΔV = IR) diğer iki biçimi verir. Sınavda böyle yaz: *Power is the rate of energy transfer, P = dU/dt = IΔV.*"
        }
      ]
    },
    {
      "baslik": "Seri ve paralelde ampul parlaklığı",
      "kisa": "Seride I ortak: büyük R parlar. Paralelde ΔV ortak: küçük R parlar.",
      "bloklar": [
        {
          "tip": "tablo",
          "baslik": "Aynı iki ampul, iki bağlantı",
          "head": [
            "Bağlantı",
            "Ortak olan",
            "Güç formülü",
            "Daha parlak olan"
          ],
          "rows": [
            [
              "Seri",
              "Akım I",
              "P = I²R",
              "Direnci büyük olan"
            ],
            [
              "Paralel",
              "Potansiyel farkı ΔV",
              "P = ΔV²/R",
              "Direnci küçük olan"
            ]
          ],
          "not": "Üzerindeki watt değeri ampul şebekeye tek başına bağlıyken geçerlidir: 100 W'lık ampulün direnci 60 W'lıktan küçüktür (R = ΔV²/P). Sınavda böyle yaz: *The bulbs are in series, so they carry the same current; P = I²R, so the bulb with the larger resistance is brighter.*"
        },
        {
          "tip": "ikili",
          "sol": {
            "ikon": "🔗",
            "baslik": "Seri (aynı I)",
            "maddeler": [
              "P = I²R",
              "Büyük R, büyük P",
              "Biri kopsa hepsi söner"
            ]
          },
          "sag": {
            "ikon": "🔀",
            "baslik": "Paralel (aynı ΔV)",
            "maddeler": [
              "P = ΔV²/R",
              "Küçük R, büyük P",
              "Biri kopsa diğerleri yanar"
            ]
          },
          "oyun": [
            {
              "metin": "Direnci büyük olan ampul daha parlak yanar.",
              "cevap": "sol",
              "neden": "Akım ortak, P = I²R: R büyükse P büyük."
            },
            {
              "metin": "Direnci küçük olan ampul daha parlak yanar.",
              "cevap": "sag",
              "neden": "ΔV ortak, P = ΔV²/R: R küçükse P büyük."
            },
            {
              "metin": "Evdeki prizlere takılı cihazların hepsinde aynı 220 V vardır.",
              "cevap": "sag",
              "neden": "Prizler paralel bağlıdır; her cihazın ΔV'si aynıdır."
            },
            {
              "metin": "Ampullerden biri atınca devrenin geri kalanı da kapanır.",
              "cevap": "sol",
              "neden": "Seride tek yol var; yol kopunca akım her yerde durur."
            }
          ]
        }
      ]
    },
    {
      "baslik": "Güç emf ile doğrusal değildir",
      "kisa": "Sabit R'de P = ε²/R: emf iki katına çıkarsa güç dört katına çıkar.",
      "bloklar": [
        {
          "tip": "grafik",
          "baslik": "R = 4 Ω'luk dirençte güç ve emf",
          "xlabel": "ε (V)",
          "ylabel": "P (W)",
          "xmax": 10,
          "ymax": 27,
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
              "v": 4,
              "label": "4"
            },
            {
              "v": 9,
              "label": "9"
            },
            {
              "v": 16,
              "label": "16"
            },
            {
              "v": 25,
              "label": "25"
            }
          ],
          "ogeler": [
            {
              "id": "par",
              "tip": "egri",
              "noktalar": [
                [0, 0],
                [0.5, 0.063],
                [1, 0.25],
                [1.5, 0.563],
                [2, 1],
                [2.5, 1.563],
                [3, 2.25],
                [3.5, 3.063],
                [4, 4],
                [4.5, 5.063],
                [5, 6.25],
                [5.5, 7.563],
                [6, 9],
                [6.5, 10.563],
                [7, 12.25],
                [7.5, 14.063],
                [8, 16],
                [8.5, 18.063],
                [9, 20.25],
                [9.5, 22.563],
                [10, 25]
              ],
              "renk": 0,
              "etiket": "P = ε²/4"
            },
            {
              "id": "a",
              "tip": "nokta",
              "x": 4,
              "y": 4,
              "renk": 3,
              "etiket": "4 V, 4 W",
              "kilavuz": true,
              "gizli": true
            },
            {
              "id": "b",
              "tip": "nokta",
              "x": 8,
              "y": 16,
              "renk": 3,
              "etiket": "8 V, 16 W",
              "kilavuz": true,
              "gizli": true
            },
            {
              "id": "lin",
              "tip": "cizgi",
              "from": [0, 0],
              "to": [10, 10],
              "renk": 1,
              "kesik": true,
              "etiket": "yanlış: P ∝ ε",
              "gizli": true
            },
            {
              "id": "ok",
              "tip": "ok",
              "from": [8, 8.4],
              "to": [8, 15.4],
              "renk": 2,
              "gizli": true
            },
            {
              "id": "okt",
              "tip": "yazi",
              "x": 7.7,
              "y": 11.5,
              "metin": "8 W değil, 16 W",
              "gizli": true,
              "hiza": "end"
            }
          ],
          "durumlar": [
            {
              "metin": "R = 4 Ω'luk dirence ideal bir pil bağlı. Güç P = ε²/R: grafik bir parabol."
            },
            {
              "metin": "ε = 4 V için P = 4²/4 = 4 W.",
              "goster": [
                "a"
              ]
            },
            {
              "metin": "ε iki katına, 8 V'a çıkınca P = 8²/4 = 16 W: ==dört kat==.",
              "goster": [
                "b"
              ]
            },
            {
              "metin": "Güç emf ile doğrusal olsaydı (kesikli doğru) 8 W bulurdun. Bu yanlıştır.",
              "goster": [
                "lin",
                "ok",
                "okt"
              ]
            }
          ]
        },
        {
          "tip": "tuzak",
          "baslik": "Gücü emf ile doğrusal sanmak",
          "metin": "Sabit dirençte gücün emf ile nasıl değiştiği sorulduğunda sık görülen hata doğrusal yazmaktır.",
          "yanlis": "ε iki katına çıkınca P iki katına çıkar.",
          "dogru": "R sabitse I de ε ile artar: P = ε²/R, güç dört katına çıkar. Sınavda böyle yaz: *Since R is fixed, P = ε²/R, so doubling ε quadruples P.*"
        }
      ]
    },
    {
      "baslik": "Çözümlü örnek: ısıtıcı ve fatura",
      "kisa": "Önce I = P/ΔV, sonra R = ΔV²/P, en sonda enerji = P × süre.",
      "bloklar": [
        {
          "tip": "ornek",
          "baslik": "220 V'a bağlı 1100 W'lık ısıtıcı",
          "durum": "Yurt odasındaki ısıtıcı 220 V'a bağlı ve 1100 W yazıyor. Akımını ve direncini bul; 2 saat çalışırsa kaç kWh harcar; 110 V'a bağlansa gücü ne olur?",
          "adimlar": [
            "I = P/ΔV = 1100 / 220 = 5,0 A.",
            "R = ΔV²/P = 220² / 1100 = 44 Ω (ya da ΔV/I = 220/5 = 44 Ω).",
            "Enerji E = Pt = 1,1 kW × 2 h = 2,2 kWh (1 kWh = 3,6 × 10⁶ J). Elektrik şirketi kWh'a göre faturalar; kWh'ı 5 TL varsayarsak 2,2 × 5 = 11 TL.",
            "110 V'ta (R aynı): P = ΔV²/R = 110² / 44 = 275 W, yani dörtte biri.",
            "Sınavda böyle yaz: *Since R is constant, P = ΔV²/R, so halving ΔV reduces P to one fourth.*"
          ],
          "sonuc": "I = 5,0 A, R = 44 Ω, E = 2,2 kWh (varsayımla 11 TL), 110 V'ta P = 275 W"
        },
        {
          "tip": "sayilar",
          "ogeler": [
            {
              "deger": 5,
              "sonek": " A",
              "etiket": "akım (1100 W / 220 V)"
            },
            {
              "deger": 44,
              "sonek": " Ω",
              "etiket": "direnç"
            },
            {
              "deger": 2.2,
              "sonek": " kWh",
              "etiket": "2 saatte enerji"
            },
            {
              "deger": 275,
              "sonek": " W",
              "etiket": "110 V'ta güç"
            }
          ]
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
            "*Power* enerjinin aktarılma hızıdır: P = dU/dt = IΔV, birimi W = J/s.",
            "Dirençte P = I²R = ΔV²/R; direnç elektrik enerjisini ısıya çevirir.",
            "Seride I ortak: büyük R daha çok güç alır ve daha parlaktır.",
            "Paralelde ΔV ortak: küçük R daha çok güç alır ve daha parlaktır.",
            "Sabit R'de P ∝ ε²: emf iki katına çıkarsa güç dört katına çıkar.",
            "Enerji = güç × süre; kWh enerji birimidir ve 1 kWh = 3,6 × 10⁶ J.",
            "Gerekçe yaz: formülü söyle, neyin sabit olduğunu belirt, sonra karşılaştır."
          ]
        }
      ]
    }
  ],
  "sorular": [
    {
      "q": "A resistor connected to an ideal battery of emf ε dissipates power P. The battery is replaced by an ideal battery of emf 3ε. What power is now dissipated in the same resistor?",
      "opts": [
        "3P",
        "6P",
        "9P",
        "P/3"
      ],
      "a": 2,
      "why": "P = ε²/R ve R sabit; ε üç katına çıkınca P dokuz katına çıkar. A en çekici yanlış: gücü emf ile doğrusal sanır."
    },
    {
      "q": "Two bulbs, each rated for operation at 120 V, are connected in series to a 120 V source. Which statement is correct?",
      "fig": {
        "type": "table",
        "caption": "Bulb ratings at 120 V",
        "head": [
          "Bulb",
          "Power rating"
        ],
        "rows": [
          [
            "X",
            "60 W"
          ],
          [
            "Y",
            "100 W"
          ]
        ]
      },
      "opts": [
        "Bulb Y is brighter because it has the greater power rating.",
        "Bulb X is brighter because it has the greater resistance and carries the same current as Y.",
        "The bulbs are equally bright because they carry the same current.",
        "Bulb X is brighter because it carries more current than Y."
      ],
      "a": 1,
      "why": "R = ΔV²/P: X için 240 Ω, Y için 144 Ω. Seride I ortaktır ve P = I²R, bu yüzden X daha parlak. A en çekici yanlış: watt değeri ampuller ayrı ayrı 120 V'a bağlıyken geçerlidir."
    },
    {
      "q": "A 12 V battery drives a steady current of 0.50 A through a resistor for 10 minutes. How much electrical energy is converted to thermal energy in the resistor?",
      "opts": [
        "3600 J",
        "6 J",
        "60 J",
        "7200 J"
      ],
      "a": 0,
      "why": "P = IΔV = 0,50 × 12 = 6 W; E = Pt = 6 × 600 = 3600 J. B en çekici yanlış: 6 değeri güçtür (W), enerji (J) değildir."
    },
    {
      "q": "The graph shows the current I versus the potential difference ΔV for a resistor. What power is dissipated in the resistor when ΔV = 8 V?",
      "fig": {
        "type": "graph",
        "xlabel": "ΔV (V)",
        "ylabel": "I (A)",
        "xmax": 10,
        "ymax": 6,
        "lines": [
          {
            "from": [0, 0],
            "to": [10, 5],
            "label": "R"
          }
        ],
        "points": [
          {
            "q": 8,
            "p": 4,
            "label": "",
            "guides": true
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
        ]
      },
      "opts": [
        "4 W",
        "12 W",
        "16 W",
        "32 W"
      ],
      "a": 3,
      "why": "Grafikten ΔV = 8 V'ta I = 4 A; P = IΔV = 8 × 4 = 32 W (R = 2 Ω olduğundan ΔV²/R = 64/2 = 32 W de aynı). A en çekici yanlış: okunan akımı güç sanır."
    },
    {
      "q": "A 6 V ideal battery is connected across a 3 Ω resistor and a 6 Ω resistor in parallel. What is the ratio of the power dissipated in the 3 Ω resistor to the power dissipated in the 6 Ω resistor?",
      "fig": {
        "type": "code",
        "caption": "Circuit diagram",
        "code": "   +----------+------------+\n   |          |            |\n [ 6 V ]   [ 3 Ω ]      [ 6 Ω ]\n   |          |            |\n   +----------+------------+"
      },
      "opts": [
        "4",
        "2",
        "1",
        "1/2"
      ],
      "a": 1,
      "why": "Paralelde ΔV ortaktır ve P = ΔV²/R, bu yüzden P ∝ 1/R: P₁/P₂ = R₂/R₁ = 6/3 = 2 (12 W ve 6 W). D en çekici yanlış: seri bağlıymış gibi I²R kullanıp R₁/R₂ alır."
    }
  ]
};
