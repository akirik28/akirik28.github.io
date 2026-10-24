/* Kitpath not defteri · pe1104 · 11.6–11.7 Kirchhoff Kuralları
   Kaynak: defter-araclari/kaynak/ced-physc.md (Unit 11). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  "slug": "pe1104",
  "amac": "Bu konu devreleri korunum yasalarıyla çözmeyi anlatıyor: ilmek kuralı (enerji korunumu) ve düğüm kuralı (yük korunumu). Sonunda potansiyel–konum grafiğini okuyacak ve iki ilmekli bir devrede akımları bulacaksın.",
  "bolumler": [
    {
      "baslik": "İlmek kuralı: enerji korunumu",
      "kisa": "Kapalı bir ilmekte potansiyel farklarının toplamı sıfırdır: ΣΔV = 0.",
      "bloklar": [
        {
          "tip": "hikaye",
          "ikon": "⛰️",
          "baslik": "Tur sonunda aynı yükseklik",
          "metin": "Bir dağ yolunda tur atıp başladığın noktaya dönersen, çıkışlar ve inişlerin toplamı ==sıfır== olur. Devrede bir tur atan yüklü parçacık da başladığı yere dönünce potansiyel enerjisini geri bulur. Bu, *conservation of energy*'nin devre dilidir."
        },
        {
          "tip": "formul",
          "parcalar": [
            {
              "t": "ΣΔV",
              "alt": "ilmekteki tüm potansiyel farkları"
            },
            "=",
            {
              "t": "0"
            }
          ],
          "aciklama": "ΔU = qΔV olduğundan, tur sonunda ΔU = 0 demek ΣΔV = 0 demektir. Sınavda böyle yaz: *By conservation of energy, the sum of the potential differences around any closed loop is zero.*"
        },
        {
          "tip": "tablo",
          "baslik": "İşaret kuralı: ilmeği bir yönde gez",
          "head": [
            "Geçtiğin eleman",
            "ΔV"
          ],
          "rows": [
            [
              "Pil, − uçtan + uca",
              "+ε"
            ],
            [
              "Pil, + uçtan − uca",
              "−ε"
            ],
            [
              "Direnç, akım yönünde",
              "−IR"
            ],
            [
              "Direnç, akıma karşı",
              "+IR"
            ],
            [
              "İdeal tel",
              "0"
            ]
          ],
          "not": "Pilde işaret akımın yönüne değil, kutuplara bakar. Akımın yönünü bilmiyorsan bir yön seç; sonuç negatif çıkarsa gerçek yön tersidir."
        }
      ]
    },
    {
      "baslik": "Potansiyel–konum grafiği",
      "kisa": "Pil potansiyeli yükseltir, direnç düşürür, ideal tel hiçbir şey yapmaz.",
      "bloklar": [
        {
          "tip": "grafik",
          "baslik": "Tek ilmekte potansiyel (ε = 12 V, R₁ = 2 Ω, R₂ = 4 Ω)",
          "xlabel": "ilmek boyunca konum",
          "ylabel": "V (V)",
          "xmax": 8,
          "ymax": 14,
          "xticks": [
            {
              "v": 0.5,
              "label": "pil"
            },
            {
              "v": 2.75,
              "label": "R₁"
            },
            {
              "v": 5.75,
              "label": "R₂"
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
              "id": "pa",
              "tip": "nokta",
              "x": 0,
              "y": 0,
              "renk": 0,
              "etiket": "başlangıç"
            },
            {
              "id": "bat",
              "tip": "cizgi",
              "from": [0, 0],
              "to": [1, 12],
              "renk": 1,
              "gizli": true
            },
            {
              "id": "t1",
              "tip": "yazi",
              "x": 1.2,
              "y": 5.5,
              "metin": "+ε = +12 V",
              "gizli": true,
              "hiza": "start"
            },
            {
              "id": "w1",
              "tip": "cizgi",
              "from": [1, 12],
              "to": [2, 12],
              "renk": 0,
              "gizli": true
            },
            {
              "id": "r1",
              "tip": "cizgi",
              "from": [2, 12],
              "to": [3.5, 8],
              "renk": 2,
              "gizli": true
            },
            {
              "id": "w2",
              "tip": "cizgi",
              "from": [3.5, 8],
              "to": [4.5, 8],
              "renk": 0,
              "gizli": true
            },
            {
              "id": "t2",
              "tip": "yazi",
              "x": 3.7,
              "y": 10.8,
              "metin": "−IR₁ = −4 V",
              "gizli": true,
              "hiza": "start"
            },
            {
              "id": "r2",
              "tip": "cizgi",
              "from": [4.5, 8],
              "to": [7, 0],
              "renk": 3,
              "gizli": true
            },
            {
              "id": "w3",
              "tip": "cizgi",
              "from": [7, 0],
              "to": [8, 0],
              "renk": 0,
              "gizli": true
            },
            {
              "id": "t3",
              "tip": "yazi",
              "x": 6.1,
              "y": 5.2,
              "metin": "−IR₂ = −8 V",
              "gizli": true,
              "hiza": "start"
            },
            {
              "id": "t4",
              "tip": "yazi",
              "x": 4,
              "y": 13,
              "metin": "+12 − 4 − 8 = 0",
              "gizli": true,
              "hiza": "middle"
            }
          ],
          "durumlar": [
            {
              "metin": "Tek ilmek: I = ε/(R₁ + R₂) = 12/6 = 2 A. Pilin − ucunu V = 0 seçip ilmeği akım yönünde geziyoruz."
            },
            {
              "metin": "Pili − uçtan + uca geçince potansiyel ε kadar, +12 V yükselir.",
              "goster": [
                "bat",
                "t1"
              ]
            },
            {
              "metin": "İdeal tel potansiyeli değiştirmez: yatay çizgi.",
              "goster": [
                "w1"
              ]
            },
            {
              "metin": "R₁'de akım yönünde ΔV = −IR₁ = −2 × 2 = −4 V: potansiyel düşer.",
              "goster": [
                "r1",
                "w2",
                "t2"
              ]
            },
            {
              "metin": "R₂'de ΔV = −IR₂ = −2 × 4 = −8 V ve potansiyel yine 0'a iner.",
              "goster": [
                "r2",
                "w3",
                "t3"
              ]
            },
            {
              "metin": "Tur tamam, başladığımız potansiyele döndük: ==+12 − 4 − 8 = 0==.",
              "goster": [
                "t4"
              ]
            }
          ]
        },
        {
          "tip": "tuzak",
          "baslik": "Telde potansiyel düşmez, işaret karışır",
          "metin": "İdeal telin iki ucu aynı potansiyeldedir, grafikte yatay çizilir. Dirençte akım yönünde gidince potansiyel düşer; pilde − uçtan + uca gidince artar.",
          "yanlis": "İdeal telde de potansiyel yavaş yavaş düşer; dirençten akım yönünde geçerken +IR yazılır.",
          "dogru": "Telde ΔV = 0; direnç akım yönünde −IR, pil − → + geçişte +ε. Sınavda böyle yaz: *Going around the loop in the direction of the current, I add ε for the battery and subtract IR for each resistor.*"
        }
      ]
    },
    {
      "baslik": "Düğüm kuralı: yük korunumu",
      "kisa": "Düğüme giren akımların toplamı, çıkanların toplamına eşittir.",
      "bloklar": [
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "🔁",
              "terim": "Loop",
              "tr": "ilmek",
              "tanim": "Devrede başladığın noktaya geri dönen kapalı yol. Bir eleman birden çok ilmeğin parçası olabilir.",
              "ornek": "Pil, R₁, R₂ ve yine pil bir ilmektir."
            },
            {
              "ikon": "🔀",
              "terim": "Junction",
              "tr": "düğüm",
              "tanim": "Üç ya da daha çok telin buluştuğu nokta; akım burada bölünür ya da birleşir.",
              "ornek": "Okul koridorunda üç yolun kesiştiği köşe: giren öğrenci sayısı çıkanlara eşittir."
            }
          ]
        },
        {
          "tip": "formul",
          "parcalar": [
            {
              "t": "ΣI_giren",
              "alt": "düğüme gelen"
            },
            "=",
            {
              "t": "ΣI_çıkan",
              "alt": "düğümden giden"
            }
          ],
          "aciklama": "Yük düğümde birikmez; saniyede gelen yük, giden yüke eşittir. Paralel kollarda akım eşit bölünmez: kol direnci küçüldükçe akımı büyür. Sınavda böyle yaz: *By conservation of charge, the current entering the junction equals the total current leaving it.*"
        },
        {
          "tip": "ikili",
          "sol": {
            "ikon": "🔀",
            "baslik": "Düğüm kuralı",
            "maddeler": [
              "ΣI_giren = ΣI_çıkan",
              "Yük korunumu",
              "Akımları toplar"
            ]
          },
          "sag": {
            "ikon": "🔁",
            "baslik": "İlmek kuralı",
            "maddeler": [
              "ΣΔV = 0",
              "Enerji korunumu",
              "Gerilimleri toplar"
            ]
          },
          "oyun": [
            {
              "metin": "Üç telin buluştuğu noktada akımlar toplanır.",
              "cevap": "sol",
              "neden": "Düğümde akımlar giren ve çıkan diye sayılır."
            },
            {
              "metin": "Pil ve dirençlerden geçerken +ε, −IR gibi işaretler yazılır.",
              "cevap": "sag",
              "neden": "İşaretler potansiyel farkları içindir, ilmek kuralında kullanılır."
            },
            {
              "metin": "Yük hiçbir noktada birikmez.",
              "cevap": "sol",
              "neden": "Yük korunumu: gelen yük giden yüke eşittir."
            },
            {
              "metin": "Bir tur sonunda yüklü parçacığın enerjisi başladığı değere döner.",
              "cevap": "sag",
              "neden": "Enerji korunumu: kapalı yolda toplam ΔV sıfırdır."
            }
          ]
        }
      ]
    },
    {
      "baslik": "Çözümlü örnek: iki ilmekli devre",
      "kisa": "Akımları adlandır, bir düğüm ve iki ilmek denklemi yaz, çöz, kontrol et.",
      "bloklar": [
        {
          "tip": "adimlar",
          "baslik": "Kirchhoff ile çözüm yolu",
          "adimlar": [
            {
              "baslik": "Akımları adlandır",
              "metin": "Her koldaki akıma bir ad ve tahmini bir yön ver."
            },
            {
              "baslik": "Düğüm denklemi",
              "metin": "Her bağımsız düğüm için ΣI_giren = ΣI_çıkan yaz."
            },
            {
              "baslik": "İlmek denklemleri",
              "metin": "Bilinmeyen sayısı kadar denklem olana dek bağımsız ilmek seç ve ΣΔV = 0 yaz."
            },
            {
              "baslik": "Çöz ve kontrol et",
              "metin": "Negatif akım, tahmin edilen yönün ters olduğunu söyler; sonucu R_eq ile doğrula."
            }
          ]
        },
        {
          "tip": "ornek",
          "baslik": "12 V pil, R₁ = 2 Ω, R₂ = 3 Ω, R₃ = 6 Ω",
          "durum": "İdeal 12 V pile R₁ seri bağlı; ardından R₂ ve R₃ paralel kollar. I₁ pilden çıkan akım, I₂ ve I₃ kol akımlarıdır. Üçünü de bul.",
          "adimlar": [
            "Düğüm: I₁ = I₂ + I₃.",
            "Sol ilmek (pil, R₁, R₂): 12 − 2I₁ − 3I₂ = 0.",
            "Sağ ilmek (R₂'den akım yönünde, R₃'ten akıma karşı): −3I₂ + 6I₃ = 0, yani I₂ = 2I₃.",
            "I₁ = 2I₃ + I₃ = 3I₃; sol ilmekte: 12 − 6I₃ − 6I₃ = 0, böylece I₃ = 1 A.",
            "I₂ = 2 A ve I₁ = 3 A.",
            "Kontrol: R_p = (3 × 6)/(3 + 6) = 2 Ω, R_eq = 2 + 2 = 4 Ω, I = 12/4 = 3 A. ✓",
            "Sınavda böyle yaz: *Applying the loop rule to the left loop: ε − I₁R₁ − I₂R₂ = 0.*"
          ],
          "sonuc": "I₁ = 3 A, I₂ = 2 A, I₃ = 1 A"
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
            "*Loop rule*: kapalı ilmekte ΣΔV = 0; bu enerji korunumunun sonucudur (ΔU = qΔV).",
            "İşaretler: pil − → + geçişte +ε; direnç akım yönünde −IR, akıma karşı +IR; ideal telde 0.",
            "Potansiyel–konum grafiğinde pil basamak çıkar, direnç iner, ideal tel yataydır; tur sonunda başlangıca dönülür.",
            "*Junction rule*: ΣI_giren = ΣI_çıkan; bu yük korunumunun sonucudur.",
            "Paralel kollarda akım eşit bölünmez; direnci küçük kol daha çok akım taşır.",
            "Çözüm yolu: akımları adlandır, düğüm denklemi yaz, bağımsız ilmek denklemleri yaz, çöz, R_eq ile kontrol et.",
            "Gerekçe yaz: yasanın adı yetmez, hangi ilmek ya da düğüme nasıl uyguladığını denklemle göster."
          ]
        }
      ]
    }
  ],
  "sorular": [
    {
      "q": "At a junction in a circuit, a current of 6 A enters from the left. Currents of 1 A and 2 A leave the junction through the top and right wires. What is the current Ix leaving through the bottom wire?",
      "fig": {
        "type": "code",
        "caption": "Junction",
        "code": "        1 A\n         ^\n         |\n 6 A --> o --> 2 A\n         |\n         v\n         Ix"
      },
      "opts": [
        "5 A",
        "3 A",
        "7 A",
        "9 A"
      ],
      "a": 1,
      "why": "Düğüm kuralı: 6 = 1 + 2 + Ix, yani Ix = 3 A. A en çekici yanlış: yalnızca 1 A'i çıkarır, 2 A'i unutur."
    },
    {
      "q": "The graph shows the electric potential V around a series loop containing an ideal battery and two resistors Ra and Rb. The current in the loop is 1.5 A. What are the values of Ra and Rb?",
      "fig": {
        "type": "graph",
        "xlabel": "position around loop",
        "ylabel": "V (V)",
        "xmax": 8,
        "ymax": 14,
        "lines": [
          {
            "from": [0, 0],
            "to": [1, 12],
            "label": "battery"
          },
          {
            "from": [1, 12],
            "to": [2, 12]
          },
          {
            "from": [2, 12],
            "to": [3, 9],
            "label": "Ra"
          },
          {
            "from": [3, 9],
            "to": [4, 9]
          },
          {
            "from": [4, 9],
            "to": [6, 0],
            "label": "Rb"
          },
          {
            "from": [6, 0],
            "to": [8, 0]
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
          },
          {
            "v": 12,
            "label": "12"
          }
        ]
      },
      "opts": [
        "Ra = 2 Ω, Rb = 6 Ω",
        "Ra = 6 Ω, Rb = 2 Ω",
        "Ra = 4.5 Ω, Rb = 13.5 Ω",
        "Ra = 8 Ω, Rb = 6 Ω"
      ],
      "a": 0,
      "why": "Ra'daki düşüş 3 V ve Rb'deki düşüş 9 V; R = ΔV/I ile Ra = 3/1,5 = 2 Ω, Rb = 9/1,5 = 6 Ω. B en çekici yanlış: iki direnci yer değiştirir. C ise ΔV ile I'yı çarpar."
    },
    {
      "q": "In the circuit shown, the ideal battery has emf ε. Which equation correctly applies the loop rule to the loop containing the battery, R1, and R2?",
      "fig": {
        "type": "code",
        "caption": "Circuit diagram (currents in the direction of the arrows)",
        "code": "   +---[ R1 ]---+-----------+\n   |    I1 -->   |           |\n   |           [ R2 ]      [ R3 ]\n [ ε ]           |           |\n   |        I2 v |      I3 v |\n   +-------------+-----------+"
      },
      "opts": [
        "ε − I1R1 + I2R2 = 0",
        "ε − I1R1 − I2R2 − I3R3 = 0",
        "ε − I1R1 − I2R2 = 0",
        "ε − I1R1 − I3R3 = 0"
      ],
      "a": 2,
      "why": "Akım yönünde giderken her dirençte −IR yazılır: ε − I₁R₁ − I₂R₂ = 0. D en çekici yanlış: aynı yapıda doğru bir denklemdir ama R₃ yolunu gösterir; soru R₂'li ilmeği soruyor."
    },
    {
      "q": "Kirchhoff's junction rule and loop rule are direct consequences of the conservation of which quantities, respectively?",
      "opts": [
        "Energy and charge",
        "Momentum and energy",
        "Momentum and charge",
        "Charge and energy"
      ],
      "a": 3,
      "why": "Düğüm kuralı yük korunumundan, ilmek kuralı enerji korunumundan gelir. A en çekici yanlış: ikisinin yerini değiştirir."
    },
    {
      "q": "A current of 2 A flows from point a to point b through the branch shown. What is V_b − V_a?",
      "fig": {
        "type": "code",
        "caption": "Branch of a circuit",
        "code": "a --- (-)| |(+) --- [ 3 Ω ] --- (+)| |(-) --- b\n         9 V      I = 2 A -->     4 V"
      },
      "opts": [
        "+1 V",
        "+7 V",
        "−1 V",
        "+19 V"
      ],
      "a": 2,
      "why": "a'dan b'ye giderken: ilk pil − → + olduğu için +9 V, dirençte akım yönünde −2 × 3 = −6 V, ikinci pil + → − olduğu için −4 V. Toplam +9 − 6 − 4 = −1 V. B en çekici yanlış: ikinci pili +4 V alır."
    }
  ]
};
