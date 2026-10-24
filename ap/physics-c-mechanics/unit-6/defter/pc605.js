/* Kitpath not defteri · pc605 · 6.6 Uyduların Hareketi. Kaynak: kaynak/ced-physc.md (Unit 6, Topic 6.6). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc605",
  amac: "Bu konu yalnızca kütleçekimiyle etkileşen iki cismin hareketini anlatıyor: uydu ve gezegen. Kütleçekim potansiyel enerjisinin negatif olduğunu, dairesel yörüngede enerjilerin nasıl bağlandığını, eliptik yörüngede L ve E korunumunu ve kaçış hızını öğreneceksin.",
  bolumler: [
    {
      baslik: "Kütleçekim potansiyel enerjisi",
      kisa: "U = −GMm/r; sonsuzda sıfır, yaklaştıkça daha negatif.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🌍",
              terim: "Gravitational potential energy",
              tr: "kütleçekim potansiyel enerjisi",
              tanim: "İki cismin U = −GMm/r değeri; U = 0 sonsuzda seçilir. Cisimler yaklaştıkça U azalır, yani daha negatif olur.",
              ornek: "Uydu Dünya'ya yaklaşırsa U daha negatif olur."
            },
            {
              ikon: "🪐",
              terim: "Bound orbit",
              tr: "bağlı yörünge",
              tanim: "Toplam mekanik enerjisi negatif olan yörünge; uydu sonsuza gidemez. E = 0 kaçış sınırıdır.",
              ornek: "Dairesel ve eliptik yörüngeler bağlıdır, E < 0."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "U = −GMm/r", alt: "U(∞) = 0" },
            "|",
            { t: "F = GMm/r²", alt: "çekim kuvveti" }
          ],
          aciklama: "Merkezi cisim çok kütleliyse onun hareketi ihmal edilir. ✍️ Sınavda böyle yaz: *I take U = 0 at infinity, so the gravitational potential energy is negative: U = −GMm/r.*"
        }
      ]
    },
    {
      baslik: "Dairesel yörünge: K = −U/2, E = U/2",
      kisa: "Dairesel yörüngede E = −K; E negatif ve U'nun yarısıdır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Enerji – yarıçap (birim: GMm/R, eksen sıfırı kesikli çizgi)",
          xlabel: "r / R",
          ylabel: "enerji",
          xmax: 5.5,
          ymax: 2,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" }
          ],
          yticks: [
            { v: 1.7, label: "0,5" },
            { v: 1.2, label: "0" },
            { v: 0.7, label: "−0,5" },
            { v: 0.2, label: "−1" }
          ],
          ogeler: [
            { id: "sifir", tip: "cizgi", from: [0, 1.2], to: [5.5, 1.2], renk: 3, kesik: true },
            {
              id: "U",
              tip: "egri",
              noktalar: [
                [1, 0.2], [1.2, 0.367], [1.4, 0.486], [1.6, 0.575], [1.8, 0.644], [2, 0.7],
                [2.2, 0.745], [2.4, 0.783], [2.6, 0.815], [2.8, 0.843], [3, 0.867], [3.2, 0.888],
                [3.4, 0.906], [3.6, 0.922], [3.8, 0.937], [4, 0.95], [4.2, 0.962], [4.4, 0.973],
                [4.6, 0.983], [4.8, 0.992], [5, 1]
              ],
              renk: 0,
              etiket: "U"
            },
            {
              id: "K",
              tip: "egri",
              noktalar: [
                [1, 1.7], [1.2, 1.617], [1.4, 1.557], [1.6, 1.513], [1.8, 1.478], [2, 1.45],
                [2.2, 1.427], [2.4, 1.408], [2.6, 1.392], [2.8, 1.379], [3, 1.367], [3.2, 1.356],
                [3.4, 1.347], [3.6, 1.339], [3.8, 1.332], [4, 1.325], [4.2, 1.319], [4.4, 1.314],
                [4.6, 1.309], [4.8, 1.304], [5, 1.3]
              ],
              renk: 1,
              etiket: "K",
              gizli: true
            },
            {
              id: "E",
              tip: "egri",
              noktalar: [
                [1, 0.7], [1.2, 0.783], [1.4, 0.843], [1.6, 0.888], [1.8, 0.922], [2, 0.95],
                [2.2, 0.973], [2.4, 0.992], [2.6, 1.008], [2.8, 1.021], [3, 1.033], [3.2, 1.044],
                [3.4, 1.053], [3.6, 1.061], [3.8, 1.068], [4, 1.075], [4.2, 1.081], [4.4, 1.086],
                [4.6, 1.091], [4.8, 1.096], [5, 1.1]
              ],
              renk: 2,
              etiket: "E",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "U(r) = −GMm/r: hep negatif; r büyüdükçe sonsuzdaki değere (0) yaklaşıyor." },
            {
              metin: "Dairesel yörüngede GMm/r² = mv²/r olduğundan K = ½mv² = GMm/(2r). Bu, U'nun büyüklüğünün yarısıdır: ==K = −U/2==.",
              goster: [
                "K"
              ]
            },
            {
              metin: "Toplam E = K + U = −GMm/(2r) = U/2 = −K. E negatif: uydu bağlı.",
              goster: [
                "E"
              ]
            },
            {
              metin: "Yarıçap büyüdükçe E yükselir (0'a yaklaşır) ama K küçülür: uzak uydu daha yavaştır."
            },
            {
              metin: "✍️ Sınavda böyle yaz: *For a circular orbit K = −U/2, so the total energy is E = −K = −GMm/(2r).*"
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Yörüngede kalmak için itki gerekmez",
          metin: "Uydu zaten serbest düşüyor: kütleçekimi merkezcil kuvveti sağlıyor. Bağlı yörüngede toplam enerji negatiftir.",
          yanlis: "Uydunun yörüngede kalması için sürekli itki gerekir; toplam enerjisi pozitiftir.",
          dogru: "Çekim merkezcil kuvvettir, motor gerekmez; bağlı yörüngede E < 0."
        }
      ]
    },
    {
      baslik: "Eliptik yörünge: L ve E sabit",
      kisa: "L ve E sabittir; merkeze yaklaşınca K artar, uydu hızlanır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Elips: merkezi cisim M odak noktasında",
          xlabel: "x (birim)",
          ylabel: "y (birim)",
          xmax: 12,
          ymax: 8,
          xticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" },
            { v: 10, label: "10" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" }
          ],
          ogeler: [
            {
              id: "el",
              tip: "egri",
              noktalar: [
                [10, 4], [9.939, 4.602], [9.759, 5.185], [9.464, 5.732], [9.064, 6.227], [8.571, 6.654],
                [8, 7], [7.368, 7.255], [6.695, 7.411], [6, 7.464], [5.305, 7.411], [4.632, 7.255],
                [4, 7], [3.429, 6.654], [2.936, 6.227], [2.536, 5.732], [2.241, 5.185], [2.061, 4.602],
                [2, 4], [2.061, 3.398], [2.241, 2.815], [2.536, 2.268], [2.936, 1.773], [3.429, 1.346],
                [4, 1], [4.632, 0.745], [5.305, 0.589], [6, 0.536], [6.695, 0.589], [7.368, 0.745],
                [8, 1], [8.571, 1.346], [9.064, 1.773], [9.464, 2.268], [9.759, 2.815], [9.939, 3.398],
                [10, 4]
              ],
              renk: 0
            },
            { id: "M", tip: "nokta", x: 4, y: 4, renk: 3, etiket: "M" },
            { id: "P", tip: "nokta", x: 2, y: 4, renk: 1, etiket: "P", gizli: true },
            { id: "vp", tip: "ok", from: [2, 4], to: [2, 1.6], renk: 1, gizli: true },
            {
              id: "rp",
              tip: "cizgi",
              from: [2, 4.3],
              to: [4, 4.3],
              renk: 1,
              kesik: true,
              gizli: true
            },
            { id: "trp", tip: "yazi", x: 3, y: 4.9, metin: "r_p = 2", gizli: true },
            { id: "A", tip: "nokta", x: 10, y: 4, renk: 2, etiket: "A", gizli: true },
            { id: "va", tip: "ok", from: [10, 4], to: [10, 4.8], renk: 2, gizli: true },
            {
              id: "ra",
              tip: "cizgi",
              from: [4, 3.7],
              to: [10, 3.7],
              renk: 2,
              kesik: true,
              gizli: true
            },
            { id: "tra", tip: "yazi", x: 7, y: 3, metin: "r_a = 6", gizli: true },
            {
              id: "tv",
              tip: "yazi",
              x: 6,
              y: 6.9,
              metin: "r_p v_p = r_a v_a → v_p = 3v_a",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Eliptik yörünge: merkezi cisim M elipsin odağında. Uydu M'ye en yakın (P) ve en uzak (A) noktalardan geçer."
            },
            {
              metin: "P noktası: r_p = 2 birim. Hız yörüngeye teğet ve r'ye dik, oku uzun: L = m r_p v_p.",
              goster: [
                "P",
                "vp",
                "rp",
                "trp"
              ]
            },
            {
              metin: "A noktası: r_a = 6 birim; hız yine r'ye dik, oku kısa.",
              goster: [
                "A",
                "va",
                "ra",
                "tra"
              ]
            },
            {
              metin: "M'ye göre L sabit: r_p v_p = r_a v_a → v_p = (6/2) v_a = ==3v_a==. Yakın nokta üç kat hızlı.",
              goster: [
                "tv"
              ]
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Hangi nicelik sabit?",
          head: [
            "Nicelik",
            "Dairesel",
            "Eliptik"
          ],
          rows: [
            [
              "Mekanik enerji E",
              "sabit",
              "sabit"
            ],
            [
              "Açısal momentum L",
              "sabit",
              "sabit"
            ],
            [
              "Kinetik enerji K",
              "sabit",
              "değişir (yakında büyük)"
            ],
            [
              "Potansiyel enerji U",
              "sabit",
              "değişir (yakında daha negatif)"
            ]
          ],
          vurgu: 2,
          not: "Bu sonuç sınavda Kepler'in 2. yasası adıyla değil, L korunumuyla istenir. ✍️ Sınavda böyle yaz: *Angular momentum about the central body is conserved, so r_p v_p = r_a v_a.*"
        }
      ]
    },
    {
      baslik: "Kaçış hızı ve çözümlü örnek",
      kisa: "Kaçış için E = 0 gerekir; v_esc = √(2GM/r) = √2 × v_dairesel.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "v_dairesel = √(GM/r)", alt: "K = −U/2" },
            "|",
            { t: "v_esc = √(2GM/r)", alt: "E = 0" }
          ],
          aciklama: "E = ½mv² − GMm/r = 0 koşulundan: uydu sonsuzda duracak kadar hızlıdır. ✍️ Sınavda böyle yaz: *Setting K + U = 0 gives ½mv² = GMm/r, so v_esc = √(2GM/r).*"
        },
        {
          tip: "ornek",
          baslik: "100 kg uydu, r = 2R_E dairesel yörünge (R_E = 6,4 × 10⁶ m, GM = gR_E²)",
          durum: "Uydunun hızını, K, U ve E değerlerini ve yörüngeden kaçması için eklenmesi gereken enerjiyi bul.",
          adimlar: [
            "GM = gR_E² = 9,8 × (6,4 × 10⁶)² ≈ 4,01 × 10¹⁴ m³/s²; r = 2R_E = 1,28 × 10⁷ m.",
            "Dairesel yörünge: GMm/r² = mv²/r → v² = GM/r = gR_E/2 = 3,136 × 10⁷ → v = 5600 m/s.",
            "K = ½mv² = ½ × 100 × 3,136 × 10⁷ = 1,568 × 10⁹ J.",
            "U = −2K = −3,136 × 10⁹ J ve E = K + U = −1,568 × 10⁹ J (= −K).",
            "Kaçış için E = 0 olmalı: eklenecek enerji |E| = 1,568 × 10⁹ J. Kaçış hızı √2 × 5600 ≈ 7920 m/s.",
            "✍️ Sınavda böyle yaz: *The total energy is negative, so the satellite is bound; it must gain 1.568 × 10⁹ J to reach E = 0.*"
          ],
          sonuc: "v = 5600 m/s; K = 1,568 × 10⁹ J, U = −3,136 × 10⁹ J, E = −1,568 × 10⁹ J; kaçış için +1,568 × 10⁹ J"
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: [
            "*Gravitational potential energy* U = −GMm/r; U = 0 sonsuzda, bu yüzden bağlı sistemde U negatiftir.",
            "Merkezi cisim çok kütleliyse hareketi ihmal edilir.",
            "Dairesel yörüngede GMm/r² = mv²/r: K = −U/2, E = U/2 = −K = −GMm/(2r).",
            "Dairesel yörüngede E, U, K ve L sabittir; yarıçap büyüdükçe E yükselir ama K küçülür.",
            "Eliptik yörüngede yalnızca E ve L sabittir; U ve K değişir. Yaklaşınca U azalır, K artar, hız artar.",
            "L korunumu: r ile v dik olduğu noktalarda r_p v_p = r_a v_a (Kepler'in 2. yasası adıyla değil, L ile gerekçelendir).",
            "Bağlı yörüngede E < 0'dır; yörüngede kalmak için itki gerekmez.",
            "*Escape velocity*: E = 0 koşulundan v_esc = √(2GM/r) = √2 × v_dairesel."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A satellite of mass m moves in a circular orbit of radius r around a planet of mass M, where M is much greater than m. Taking the gravitational potential energy to be zero at infinity, what is the total mechanical energy of the satellite?",
      opts: [
        "+GMm/r",
        "−GMm/r",
        "−GMm/(2r)",
        "+GMm/(2r)"
      ],
      a: 2,
      why: "K = GMm/(2r) ve U = −GMm/r; toplam E = −GMm/(2r). B en çekici yanlış şık: yalnızca U'yu almak, K'yi unutmak."
    },
    {
      q: "A comet orbits a star in an elliptical orbit. At its closest approach, 2 × 10¹⁰ m from the star, its speed is 6 km/s. What is its speed at its farthest point, 6 × 10¹⁰ m from the star?",
      opts: [
        "1 km/s",
        "2 km/s",
        "3 km/s",
        "18 km/s"
      ],
      a: 1,
      why: "En yakın ve en uzak noktada v ⊥ r olduğundan L korunur: r_p v_p = r_a v_a → v_a = 6 × 2/6 = 2 km/s. D en çekici yanlış şık: uzaktayken daha hızlı gittiğini (6 × 3) sanmak."
    },
    {
      q: "The table gives the kinetic energy K and gravitational potential energy U (zero at infinity) of a satellite at a single instant. Which row could describe a satellite in a circular orbit?",
      fig: {
        type: "table",
        caption: "Energies of satellites (10⁹ J)",
        head: [
          "Row",
          "K",
          "U"
        ],
        rows: [
          [
            "A",
            "+2",
            "−4"
          ],
          [
            "B",
            "+2",
            "−2"
          ],
          [
            "C",
            "+3",
            "−4"
          ],
          [
            "D",
            "+4",
            "−2"
          ]
        ]
      },
      opts: [
        "A",
        "B",
        "C",
        "D"
      ],
      a: 0,
      why: "Dairesel yörüngede K = −U/2: yalnızca A (2 = 4/2). B'de E = 0 (kaçış sınırı), C'de E = −1 ama K ≠ −U/2 (eliptik), D'de E > 0 (bağlı değil). En çekici yanlış şık C: E negatif olduğu için dairesel sanılabilir."
    },
    {
      q: "Planet X has radius R and escape speed v at its surface. Planet Y has the same mass as X but radius 4R. What is the escape speed at the surface of Y?",
      opts: [
        "2v",
        "v/√2",
        "v/4",
        "v/2"
      ],
      a: 3,
      why: "v_esc = √(2GM/r): r dört katına çıkınca √4 = 2 kat azalır, yani v/2. C en çekici yanlış şık: v_esc'in 1/r ile orantılı olduğunu sanmak; 1/√r ile orantılıdır."
    },
    {
      q: "A planet moves faster when it is closer to its star in an elliptical orbit. Which is the best justification?",
      opts: [
        "Angular momentum about the star is conserved and v is perpendicular to r at closest approach, so a smaller r means a larger v.",
        "Gravity is stronger at closest approach, so the planet is always accelerated forward.",
        "Total mechanical energy is conserved, so the kinetic energy stays the same at every point.",
        "Linear momentum of the planet is conserved, so its speed cannot change."
      ],
      a: 0,
      why: "Yalnızca yasanın adı yetmez: L = mrv (v ⊥ r) sabit olduğundan r küçülünce v büyür. C en çekici yanlış şık: E sabit ama K ile U birbirini götürerek değişir; K sabit kalmaz."
    }
  ]
};
