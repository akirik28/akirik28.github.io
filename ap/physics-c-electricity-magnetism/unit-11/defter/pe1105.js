/* Kitpath not defteri · pe1105 · 11.8 RC Devreleri
   Kaynak: defter-araclari/kaynak/ced-physc.md (Unit 11). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  "slug": "pe1105",
  "amac": "Bu konu kondansatörlerin devrede nasıl birleştiğini ve bir direnç ile kondansatörün zamanla nasıl dolup boşaldığını anlatıyor: C_eq, τ = RC ve üstel eğriler. Sonunda q(t) ile I(t) denklemlerini türetip grafiklerini yorumlayacaksın.",
  "bolumler": [
    {
      "baslik": "Kondansatörleri birleştirmek",
      "kisa": "Kurallar dirençlerin tersidir: seride 1/C toplanır, paralelde C toplanır.",
      "bloklar": [
        {
          "tip": "tablo",
          "baslik": "Direnç ve kondansatör: kurallar ters",
          "head": [
            "Bağlantı",
            "Direnç",
            "Kondansatör"
          ],
          "rows": [
            [
              "Seri",
              "R_eq = R₁ + R₂ + …",
              "1/C_eq = 1/C₁ + 1/C₂ + …"
            ],
            [
              "Paralel",
              "1/R_eq = 1/R₁ + 1/R₂ + …",
              "C_eq = C₁ + C₂ + …"
            ],
            [
              "Sonuç",
              "Seri: R_eq büyür",
              "Seri: C_eq en küçük C'den küçük"
            ]
          ],
          "not": "Seri kondansatörlerin plakalarında aynı büyüklükte yük birikir (yük korunumu); paralelde ΔV ortaktır. Sınavda böyle yaz: *The capacitors are in series, so each carries the same magnitude of charge, and 1/C_eq = 1/C₁ + 1/C₂.*"
        },
        {
          "tip": "ikili",
          "sol": {
            "ikon": "🔗",
            "baslik": "Seri kondansatör",
            "maddeler": [
              "Plaka yükleri aynı büyüklükte",
              "C_eq en küçük C'den küçük",
              "ΔV'ler toplanır"
            ]
          },
          "sag": {
            "ikon": "🔀",
            "baslik": "Paralel kondansatör",
            "maddeler": [
              "ΔV ortak",
              "C_eq = ΣCᵢ",
              "Yükler toplanır"
            ]
          },
          "oyun": [
            {
              "metin": "6 µF ile 3 µF bağlandı, C_eq = 2 µF.",
              "cevap": "sol",
              "neden": "1/C_eq = 1/6 + 1/3 = 1/2, yani C_eq = 2 µF."
            },
            {
              "metin": "6 µF ile 3 µF bağlandı, C_eq = 9 µF.",
              "cevap": "sag",
              "neden": "Paralelde kapasiteler toplanır: 6 + 3 = 9 µF."
            },
            {
              "metin": "Her kondansatörün uçlarındaki ΔV pil gerilimine eşit.",
              "cevap": "sag",
              "neden": "Paralel kollar aynı iki düğüm arasındadır."
            },
            {
              "metin": "Orta plakalar yalıtılmıştır, bu yüzden her kondansatörde aynı Q vardır.",
              "cevap": "sol",
              "neden": "Yük korunumu: orta plakaların net yükü sıfır kalır."
            }
          ]
        }
      ]
    },
    {
      "baslik": "RC denklemi ve çözümü",
      "kisa": "İlmek kuralı diferansiyel denklemi verir; çözüm üsteldir, τ = RC.",
      "bloklar": [
        {
          "tip": "kavramlar",
          "kartlar": [
            {
              "ikon": "⏳",
              "terim": "Time constant",
              "tr": "zaman sabiti, τ",
              "tanim": "Dolmanın ya da boşalmanın hızını ölçen süre (birimi s). Dolarken yük son değerinin yaklaşık %63'üne, boşalırken başlangıç değerinin yaklaşık %37'sine bu sürede ulaşır.",
              "ornek": "τ küçükse kantin kuyruğu gibi hızla erir, büyükse uzun sürer."
            },
            {
              "ikon": "🏁",
              "terim": "Steady state",
              "tr": "kararlı hâl",
              "tanim": "t ≫ τ olunca büyüklüklerin artık değişmediği durum. Dolu kondansatörde ΔV_C = ε ve kol akımı 0'dır.",
              "ornek": "Telefon %100'e gelince şarj akımı kesilir."
            }
          ]
        },
        {
          "tip": "adimlar",
          "baslik": "Dolma ve boşalma denklemi",
          "adimlar": [
            {
              "baslik": "İlmek kuralı",
              "metin": "Pil, R ve C seride: ε − IR − q/C = 0. I = dq/dt olduğundan ε = R dq/dt + q/C."
            },
            {
              "baslik": "Değişkenlere ayır",
              "metin": "dq/(Cε − q) = dt/(RC). Solu q = 0'dan q'ya, sağı t = 0'dan t'ye integre et."
            },
            {
              "baslik": "İntegre et",
              "metin": "−ln[(Cε − q)/(Cε)] = t/RC. Her iki tarafın üstelini al."
            },
            {
              "baslik": "Dolma çözümü",
              "metin": "q(t) = Cε(1 − e^(−t/RC)) ve I = dq/dt = (ε/R) e^(−t/RC)."
            },
            {
              "baslik": "Boşalma",
              "metin": "Pil yok: q/C = IR ve I = −dq/dt. Çözüm q(t) = Q₀ e^(−t/RC)."
            }
          ]
        },
        {
          "tip": "formul",
          "parcalar": [
            {
              "t": "τ",
              "alt": "zaman sabiti"
            },
            "=",
            {
              "t": "R_eq C_eq"
            }
          ],
          "aciklama": "R_eq ve C_eq, devrenin eşdeğer direnci ve eşdeğer kapasitesidir. Sınavda böyle yaz: *Applying the loop rule: ε − R dq/dt − q/C = 0. Separating variables and integrating gives q = Cε(1 − e^(−t/RC)).*"
        }
      ]
    },
    {
      "baslik": "Dolma ve boşalma eğrileri",
      "kisa": "İlk anda kondansatör tel gibi, uzun sürede açık devre gibi davranır.",
      "bloklar": [
        {
          "tip": "grafik",
          "baslik": "RC devresi: yük ve akım, zaman τ cinsinden",
          "xlabel": "t / τ",
          "ylabel": "q / Cε",
          "xmax": 5,
          "ymax": 1.15,
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
              "v": 0.37,
              "label": "0,37"
            },
            {
              "v": 0.63,
              "label": "0,63"
            },
            {
              "v": 1,
              "label": "1"
            }
          ],
          "ogeler": [
            {
              "id": "asm",
              "tip": "cizgi",
              "from": [0, 1],
              "to": [5, 1],
              "renk": 1,
              "kesik": true,
              "etiket": "Cε",
              "gizli": true
            },
            {
              "id": "qc",
              "tip": "egri",
              "noktalar": [
                [0, 0],
                [0.25, 0.221],
                [0.5, 0.393],
                [0.75, 0.528],
                [1, 0.632],
                [1.25, 0.713],
                [1.5, 0.777],
                [1.75, 0.826],
                [2, 0.865],
                [2.25, 0.895],
                [2.5, 0.918],
                [2.75, 0.936],
                [3, 0.95],
                [3.25, 0.961],
                [3.5, 0.97],
                [3.75, 0.976],
                [4, 0.982],
                [4.25, 0.986],
                [4.5, 0.989],
                [4.75, 0.991],
                [5, 0.993]
              ],
              "renk": 0,
              "etiket": "q",
              "gizli": true
            },
            {
              "id": "p1",
              "tip": "nokta",
              "x": 1,
              "y": 0.632,
              "renk": 3,
              "etiket": "%63",
              "kilavuz": true,
              "gizli": true
            },
            {
              "id": "ic",
              "tip": "egri",
              "noktalar": [
                [0, 1],
                [0.25, 0.779],
                [0.5, 0.607],
                [0.75, 0.472],
                [1, 0.368],
                [1.25, 0.287],
                [1.5, 0.223],
                [1.75, 0.174],
                [2, 0.135],
                [2.25, 0.105],
                [2.5, 0.082],
                [2.75, 0.064],
                [3, 0.05],
                [3.25, 0.039],
                [3.5, 0.03],
                [3.75, 0.024],
                [4, 0.018],
                [4.25, 0.014],
                [4.5, 0.011],
                [4.75, 0.009],
                [5, 0.007]
              ],
              "renk": 2,
              "etiket": "I/I₀",
              "gizli": true
            },
            {
              "id": "p5",
              "tip": "nokta",
              "x": 5,
              "y": 0.993,
              "renk": 3,
              "etiket": "%99,3",
              "gizli": true
            },
            {
              "id": "qd",
              "tip": "egri",
              "noktalar": [
                [0, 1],
                [0.25, 0.779],
                [0.5, 0.607],
                [0.75, 0.472],
                [1, 0.368],
                [1.25, 0.287],
                [1.5, 0.223],
                [1.75, 0.174],
                [2, 0.135],
                [2.25, 0.105],
                [2.5, 0.082],
                [2.75, 0.064],
                [3, 0.05],
                [3.25, 0.039],
                [3.5, 0.03],
                [3.75, 0.024],
                [4, 0.018],
                [4.25, 0.014],
                [4.5, 0.011],
                [4.75, 0.009],
                [5, 0.007]
              ],
              "renk": 0,
              "etiket": "q (boşalma)",
              "gizli": true
            },
            {
              "id": "pd",
              "tip": "nokta",
              "x": 1,
              "y": 0.368,
              "renk": 3,
              "etiket": "%37",
              "kilavuz": true,
              "gizli": true
            }
          ],
          "durumlar": [
            {
              "metin": "Yüksüz kondansatör t = 0'da R üzerinden pile bağlanıyor. Yük Cε değerine (kesikli çizgi) yaklaşacak.",
              "goster": [
                "asm"
              ]
            },
            {
              "metin": "Dolma: q = Cε(1 − e^(−t/τ)). Başta hızlı artar, sonra yavaşlar ve Cε'a asimptotik yaklaşır.",
              "goster": [
                "qc"
              ]
            },
            {
              "metin": "t = τ'da yük son değerinin %63'üne ulaşır.",
              "goster": [
                "p1"
              ]
            },
            {
              "metin": "Akım I = (ε/R)e^(−t/τ): t = 0'da en büyük (kondansatör tel gibi), sonra üstel olarak 0'a iner.",
              "goster": [
                "ic"
              ]
            },
            {
              "metin": "t = 5τ'da q ≈ %99,3: pratikte dolu, kol akımı ≈ 0, yani kondansatör açık devre gibi.",
              "goster": [
                "p5"
              ]
            },
            {
              "metin": "Şimdi pil çıkarılıp kondansatör R üzerinden boşalsın: q = Q₀e^(−t/τ). t = τ'da %37'ye iner; akımın büyüklüğü de aynı eğriyi izler.",
              "gizle": [
                "asm",
                "qc",
                "p1",
                "ic",
                "p5"
              ],
              "goster": [
                "qd",
                "pd"
              ]
            }
          ]
        },
        {
          "tip": "tuzak",
          "baslik": "t = 0 ve t ≫ τ anlarında kondansatör",
          "metin": "Yüksüz kondansatör devreye ilk konduğunda ΔV_C = 0'dır; tel gibidir ve en büyük akım o an akar. Çok uzun süre sonra tam dolar ve kolundaki akım sıfırdır.",
          "yanlis": "t = 0'da yüksüz kondansatörden akım geçmez; uzun süre sonra kondansatör kolunda hâlâ akım vardır.",
          "dogru": "t = 0'da kol akımı en büyüktür (ΔV_C = 0); t ≫ τ'da kol akımı 0 ve ΔV_C = ε. Sınavda böyle yaz: *At t = 0 the uncharged capacitor acts like a wire; a long time later it acts like an open circuit.*"
        }
      ]
    },
    {
      "baslik": "Çözümlü örnek: τ ve zaman",
      "kisa": "Önce τ = RC, sonra e^(−t/τ) ile istediğin anı hesapla.",
      "bloklar": [
        {
          "tip": "ornek",
          "baslik": "12 V, R = 10 kΩ, C = 50 µF",
          "durum": "Yüksüz kondansatör t = 0'da ideal 12 V pile direnç üzerinden bağlanıyor. τ'yu, ilk akımı, t = 0,5 s'de ΔV_C'yi, t = 1,0 s'de akımı ve tam dolu kondansatörün yükü ile enerjisini bul.",
          "adimlar": [
            "τ = RC = (10 × 10³)(50 × 10⁻⁶) = 0,50 s.",
            "t = 0: kondansatör tel gibi, I₀ = ε/R = 12 / 10 000 = 1,2 mA.",
            "t = τ = 0,50 s: ΔV_C = ε(1 − e⁻¹) = 12 × 0,632 ≈ 7,6 V.",
            "t = 1,0 s = 2τ: I = I₀e⁻² = 1,2 × 0,135 ≈ 0,16 mA.",
            "Uzun süre sonra: ΔV_C = ε, Q = Cε = (50 × 10⁻⁶)(12) = 600 µC ve U = ½Cε² = ½(50 × 10⁻⁶)(144) = 3,6 mJ.",
            "Sınavda böyle yaz: *At t = τ the capacitor has reached about 63% of its final charge.*"
          ],
          "sonuc": "τ = 0,50 s; I₀ = 1,2 mA; ΔV_C(τ) ≈ 7,6 V; I(2τ) ≈ 0,16 mA; Q = 600 µC; U = 3,6 mJ"
        },
        {
          "tip": "sayilar",
          "ogeler": [
            {
              "deger": 0.5,
              "sonek": " s",
              "etiket": "τ = RC"
            },
            {
              "deger": 1.2,
              "sonek": " mA",
              "etiket": "ilk akım (t = 0)"
            },
            {
              "deger": 7.6,
              "sonek": " V",
              "etiket": "t = τ'da ΔV_C"
            },
            {
              "deger": 600,
              "sonek": " µC",
              "etiket": "son yük Cε"
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
            "Seri kondansatörlerde 1/C_eq = Σ1/Cᵢ (C_eq en küçükten küçük, plaka yükleri aynı büyüklükte); paralelde C_eq = ΣCᵢ.",
            "Kondansatörlerin kuralları dirençlerinkinin tersidir.",
            "İlmek kuralı: ε = R dq/dt + q/C. Çözüm q = Cε(1 − e^(−t/RC)) ve I = (ε/R)e^(−t/RC).",
            "Boşalma: q = Q₀e^(−t/RC); yük, ΔV_C ve akımın büyüklüğü aynı üstel biçimde azalır.",
            "*Time constant* τ = R_eq C_eq; t = τ'da dolan yük %63'e çıkar, boşalan yük %37'ye iner.",
            "t = 0'da yüksüz kondansatör tel gibidir (en büyük akım); t ≫ τ'da tam doludur ve kol akımı 0'dır.",
            "ΔV_C, Q ve depolanan enerji dolarken asimptotik artar; yaklaşık 5τ sonra *steady state*'e varılır."
          ]
        }
      ]
    }
  ],
  "sorular": [
    {
      "q": "A 6 μF capacitor and a 3 μF capacitor are connected in series across an ideal 12 V battery. What is the potential difference across the 3 μF capacitor once the capacitors are fully charged?",
      "opts": [
        "4 V",
        "6 V",
        "8 V",
        "12 V"
      ],
      "a": 2,
      "why": "C_eq = 2 µF, Q = C_eq ε = 24 µC ve seri kondansatörlerde aynı Q vardır: ΔV = Q/C = 24/3 = 8 V. A en çekici yanlış: 6 µF kondansatörün gerilimidir (24/6 = 4 V); küçük C büyük ΔV alır."
    },
    {
      "q": "A capacitor discharges through a resistor. The potential difference across the capacitor is measured at several times. What is the time constant of the circuit?",
      "fig": {
        "type": "table",
        "caption": "Capacitor voltage during discharge",
        "head": [
          "t (s)",
          "ΔV_C (V)"
        ],
        "rows": [
          [
            "0",
            "12.0"
          ],
          [
            "2",
            "4.4"
          ],
          [
            "4",
            "1.6"
          ],
          [
            "6",
            "0.6"
          ]
        ]
      },
      "opts": [
        "1 s",
        "2 s",
        "4 s",
        "6 s"
      ],
      "a": 1,
      "why": "Boşalırken ΔV_C, başlangıç değerinin yaklaşık %37'sine τ'da iner: 12 × 0,37 ≈ 4,4 V, bu da t = 2 s'de. D en çekici yanlış: tablodaki son zamandır, τ değil."
    },
    {
      "q": "In the circuit shown, the capacitor is initially uncharged and the battery is ideal. A switch (not shown) is closed at t = 0. What is the current supplied by the battery immediately after the switch is closed, and a very long time later?",
      "fig": {
        "type": "code",
        "caption": "Circuit diagram",
        "code": "   +---[ 4 Ω ]---+-----------+\n   |              |           |\n   |           C ---       [ 8 Ω ]\n [ 12 V ]         ---          |\n   |              |           |\n   +--------------+-----------+"
      },
      "opts": [
        "1.0 A, then 3.0 A",
        "3.0 A, then 1.0 A",
        "3.0 A, then 0",
        "1.5 A, then 1.0 A"
      ],
      "a": 1,
      "why": "t = 0'da kondansatör tel gibidir ve 8 Ω'u köprüler: I = 12/4 = 3 A. Çok uzun süre sonra kondansatör kolunda akım yoktur: I = 12/(4 + 8) = 1 A. C en çekici yanlış: kondansatör kolunun akımı ile pilin toplam akımını karıştırır."
    },
    {
      "q": "In a circuit with an ideal battery, a resistor R, and a capacitor C in series, the resistance is doubled while ε and C stay the same. Which statement about charging the initially uncharged capacitor is correct?",
      "opts": [
        "The final charge doubles and the time constant doubles.",
        "The final charge is unchanged and the time constant is halved.",
        "The final charge halves and the time constant is unchanged.",
        "The final charge is unchanged and the time constant doubles."
      ],
      "a": 3,
      "why": "Son yük Cε, R'den bağımsızdır; τ = RC ise iki katına çıkar, yani dolum iki kat daha yavaş olur. B en çekici yanlış: τ'nun R ile ters orantılı olduğunu sanır."
    },
    {
      "q": "A capacitor C is charged by an ideal battery of emf ε through a resistor R, all in series. Which equation, obtained from the loop rule, describes the charge q on the capacitor?",
      "opts": [
        "ε − R dq/dt − q/C = 0",
        "ε − Rq − (dq/dt)/C = 0",
        "ε + R dq/dt − q/C = 0",
        "ε − R dq/dt = 0"
      ],
      "a": 0,
      "why": "İlmekte pil +ε verir, direnç −IR = −R dq/dt, kondansatör −q/C. D en çekici yanlış: kondansatörün q/C düşüşünü unutur; o zaman devre sadece dirençli olurdu."
    }
  ]
};
