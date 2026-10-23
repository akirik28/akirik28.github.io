/* Kitpath not defteri · cb806 · AP Calculus BC 8.7–8.8
   Video kiti yok; içerik College Board CED öğrenme hedeflerine göre yazıldı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb806",
  amac: "Bu konu tabanı bilinen, kesitleri bilinen cisimlerin hacmini anlatıyor: cismi ince dilimlere ayır, her dilimin kesit alanını A(x) yaz, V = ∫A(x)dx ile topla. Kare, dikdörtgen, eşkenar üçgen, dik üçgen ve yarım daire kesitleri göreceksin.",
  bolumler: [
    {
      baslik: "Hacim = kesit alanlarının integrali",
      kisa: "Cismi ince dilimle, her dilimin hacmi A(x) · dx, hepsini topla.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🍞",
          baslik: "Somun ekmek",
          metin: "Kantindeki somun ekmeği ince ince dilimlersin. Bir dilimin hacmi yaklaşık (kesit alanı) × (kalınlık). Bütün dilimleri toplayınca somunun hacmini bulursun. Dilimler sonsuz inceyse toplam bir **integrale** dönüşür."
        },
        {
          tip: "formul",
          parcalar: [
            {
              t: "V",
              alt: "hacim"
            },
            "=",
            {
              t: "∫ₐᵇ",
              alt: "cismin başladığı ve bittiği x"
            },
            {
              t: "A(x)",
              alt: "x'teki kesitin alanı"
            },
            {
              t: "dx",
              alt: "dilim kalınlığı"
            }
          ],
          aciklama: "Bu bölümde kesitler x eksenine dik. Kesit alanı, taban bölgesinin o x'teki uzunluğuna (s) bağlı olarak yazılır."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔪",
              terim: "Cross section",
              tr: "kesit",
              tanim: "Cismin bir eksene dik bir düzlemle kesilmesiyle çıkan yüz. Burada karelerden yarım dairelere kadar bilinen bir şekildir.",
              ornek: "Her x'te yan yüzü kare olan bir cisim."
            },
            {
              ikon: "🧱",
              terim: "Base region",
              tr: "taban bölgesi",
              tanim: "xy düzleminde cismin yere bastığı bölge. Kesitin tabanı, bu bölgenin x'teki kalınlığı s'dir.",
              ornek: "y = √x altındaki bölgede s(x) = √x."
            }
          ]
        }
      ]
    },
    {
      baslik: "Taban bölgesi ve tipik dilim",
      kisa: "Dilimin taban uzunluğu s, tabandaki dikey doğru parçasıdır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Taban: y = √x altı, 0 ≤ x ≤ 4",
          xlabel: "x",
          ylabel: "y",
          xmax: 5,
          ymax: 3,
          xticks: [
            {
              v: 1,
              label: "1"
            },
            {
              v: 2,
              label: "2"
            },
            {
              v: 3,
              label: "3"
            },
            {
              v: 4,
              label: "4"
            }
          ],
          yticks: [
            {
              v: 1,
              label: "1"
            },
            {
              v: 2,
              label: "2"
            }
          ],
          ogeler: [
            {
              id: "a",
              tip: "alan",
              renk: 0,
              noktalar: [[0, 0], [0, 0], [0.125, 0.354], [0.25, 0.5], [0.375, 0.612], [0.5, 0.707], [0.625, 0.791], [0.75, 0.866], [0.875, 0.935], [1, 1], [1.125, 1.061], [1.25, 1.118], [1.375, 1.173], [1.5, 1.225], [1.625, 1.275], [1.75, 1.323], [1.875, 1.369], [2, 1.414], [2.125, 1.458], [2.25, 1.5], [2.375, 1.541], [2.5, 1.581], [2.625, 1.62], [2.75, 1.658], [2.875, 1.696], [3, 1.732], [3.125, 1.768], [3.25, 1.803], [3.375, 1.837], [3.5, 1.871], [3.625, 1.904], [3.75, 1.936], [3.875, 1.969], [4, 2], [4, 0]]
            },
            {
              id: "c",
              tip: "egri",
              renk: 0,
              etiket: "y = √x",
              noktalar: [[0, 0], [0.25, 0.5], [0.5, 0.707], [0.75, 0.866], [1, 1], [1.25, 1.118], [1.5, 1.225], [1.75, 1.323], [2, 1.414], [2.25, 1.5], [2.5, 1.581], [2.75, 1.658], [3, 1.732], [3.25, 1.803], [3.5, 1.871], [3.75, 1.936], [4, 2]]
            },
            {
              id: "d",
              tip: "cizgi",
              renk: 2,
              from: [2.25, 0],
              to: [2.25, 1.5],
              etiket: "s = √x",
              gizli: true
            },
            {
              id: "k",
              tip: "alan",
              renk: 2,
              gizli: true,
              noktalar: [[2.25, 0], [2.25, 1.5], [2.45, 1.5], [2.45, 0]]
            },
            {
              id: "t",
              tip: "yazi",
              renk: 2,
              x: 2.9,
              y: 0.4,
              metin: "dx",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Taban bölgesi: y = √x eğrisinin altında, x ekseninin üstünde, 0 ≤ x ≤ 4."
            },
            {
              metin: "x = 2,25'te dikey doğru parçasının uzunluğu s = √2,25 = 1,5. Kesit bu parçanın üstüne kurulur.",
              goster: [
                "d"
              ]
            },
            {
              metin: "x'ten x + dx'e ince bir dilim kesilir. Kesit alanı A(x), dilimin hacmi A(x) · dx.",
              goster: [
                "k",
                "t"
              ]
            },
            {
              metin: "x = 0'dan 4'e kadar bütün dilimler toplanır: V = ∫₀⁴ A(x) dx."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Kesit alanı, taban uzunluğu s cinsinden",
          head: [
            "Kesit",
            "A(s)"
          ],
          rows: [
            [
              "Kare (kenar s)",
              "s²"
            ],
            [
              "Dikdörtgen (yükseklik h, taban s)",
              "h · s"
            ],
            [
              "Yarım daire (çap s)",
              "π s² / 8"
            ],
            [
              "Eşkenar üçgen (kenar s)",
              "√3 s² / 4"
            ],
            [
              "İkizkenar dik üçgen (dik kenar s)",
              "s² / 2"
            ],
            [
              "İkizkenar dik üçgen (hipotenüs s)",
              "s² / 4"
            ]
          ],
          vurgu: 2,
          not: "Yarım daire: yarıçap s/2 olduğu için A = ½ · π (s/2)² = π s² / 8."
        }
      ]
    },
    {
      baslik: "Kesit şekillerini görelim",
      kisa: "Her kesit, tabandaki s doğru parçasının üstüne kurulur.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "x = 2,25'teki kesit (s = 1,5); yatay eksen y, düşey eksen yükseklik",
          xlabel: "y",
          ylabel: "z",
          xmax: 3,
          ymax: 3,
          xticks: [
            {
              v: 1.5,
              label: "s"
            }
          ],
          yticks: [
            {
              v: 1.5,
              label: "s"
            }
          ],
          ogeler: [
            {
              id: "b",
              tip: "cizgi",
              renk: 1,
              from: [0, 0],
              to: [1.5, 0],
              etiket: "s"
            },
            {
              id: "kare",
              tip: "alan",
              renk: 0,
              gizli: true,
              noktalar: [[0, 0], [0, 1.5], [1.5, 1.5], [1.5, 0]]
            },
            {
              id: "yd",
              tip: "alan",
              renk: 2,
              gizli: true,
              noktalar: [[1.5, 0], [1.494, 0.098], [1.474, 0.194], [1.443, 0.287], [1.4, 0.375], [1.345, 0.457], [1.28, 0.53], [1.207, 0.595], [1.125, 0.65], [1.037, 0.693], [0.944, 0.724], [0.848, 0.744], [0.75, 0.75], [0.652, 0.744], [0.556, 0.724], [0.463, 0.693], [0.375, 0.65], [0.293, 0.595], [0.22, 0.53], [0.155, 0.457], [0.1, 0.375], [0.057, 0.287], [0.026, 0.194], [0.006, 0.098], [0, 0]]
            },
            {
              id: "es",
              tip: "alan",
              renk: 3,
              gizli: true,
              noktalar: [[0, 0], [1.5, 0], [0.75, 1.299]]
            },
            {
              id: "dik",
              tip: "alan",
              renk: 0,
              gizli: true,
              noktalar: [[0, 0], [1.5, 0], [0, 1.5]]
            }
          ],
          durumlar: [
            {
              metin: "Taban parçası: uzunluğu s = 1,5."
            },
            {
              metin: "Kare: kenar s, A = s² = 2,25.",
              goster: [
                "kare"
              ]
            },
            {
              metin: "Yarım daire: çap s, A = π s² / 8 ≈ 0,88.",
              gizle: [
                "kare"
              ],
              goster: [
                "yd"
              ]
            },
            {
              metin: "Eşkenar üçgen: kenar s, A = √3 s² / 4 ≈ 0,97.",
              gizle: [
                "yd"
              ],
              goster: [
                "es"
              ]
            },
            {
              metin: "İkizkenar dik üçgen: dik kenar s, A = s² / 2 = 1,125.",
              gizle: [
                "es"
              ],
              goster: [
                "dik"
              ]
            }
          ]
        },
        {
          tip: "tuzak",
          metin: "Yarım daire sorusunda s çaptır, yarıçap değil. Alanı ½ π s² yazarsan sonuç 4 kat büyük çıkar.",
          yanlis: "Çapı s olan yarım dairenin alanı π s² / 2.",
          dogru: "Yarıçap s/2: A = ½ · π (s/2)² = π s² / 8. Kesit çemberse A = π s² / 4."
        }
      ]
    },
    {
      baslik: "Hacim hesaplayalım",
      kisa: "s'yi bul, A(s)'yi yaz, ∫ A dx hesapla.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Dört adım",
          adimlar: [
            {
              baslik: "Tabanı çiz",
              metin: "Eğrileri ve sınırları çiz; tipik dilimi işaretle."
            },
            {
              baslik: "s'yi yaz",
              metin: "Dilimin tabandaki uzunluğu: üst − alt."
            },
            {
              baslik: "A(x) kur",
              metin: "Tabloda şeklin alanını s cinsinden bul."
            },
            {
              baslik: "Entegre et",
              metin: "V = ∫ₐᵇ A(x) dx."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Taban y = √x altı, 0 ≤ x ≤ 4, kesitler kare",
          durum: "Hacmi bul.",
          adimlar: [
            "s = √x − 0 = √x.",
            "A(x) = s² = x.",
            "V = ∫₀⁴ x dx = [x²/2]₀⁴ = 8."
          ],
          sonuc: "V = 8"
        },
        {
          tip: "tablo",
          baslik: "Aynı taban, farklı kesitler: V = ∫₀⁴ A dx",
          head: [
            "Kesit (s = √x)",
            "A(x)",
            "Hacim"
          ],
          rows: [
            [
              "Kare",
              "x",
              "8"
            ],
            [
              "Yarım daire (çap s)",
              "πx / 8",
              "π"
            ],
            [
              "Eşkenar üçgen",
              "√3 x / 4",
              "2√3"
            ],
            [
              "İkizkenar dik üçgen (dik kenar s)",
              "x / 2",
              "4"
            ],
            [
              "Dikdörtgen (yükseklik 3)",
              "3√x",
              "16"
            ]
          ],
          not: "∫₀⁴ x dx = 8 sabit kaldı; kesit çarpanı hacmi belirler. Dikdörtgen için 3 · ∫₀⁴ √x dx = 3 · (2/3) · 8 = 16."
        }
      ]
    },
    {
      baslik: "İki eğri arasında taban, y eksenine dik kesit",
      kisa: "Taban iki eğri arasındaysa s = üst − alt; y'ye dikse dy kullan.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Taban: y = x ve y = x² arası, kesitler x eksenine dik kare",
          durum: "Hacmi bul.",
          adimlar: [
            "Kesişim: x = x² → x = 0 ve x = 1. Aralarında üstte y = x.",
            "s = x − x². A(x) = (x − x²)² = x² − 2x³ + x⁴.",
            "V = ∫₀¹ (x² − 2x³ + x⁴) dx = 1/3 − 1/2 + 1/5 = 1/30."
          ],
          sonuc: "V = 1/30"
        },
        {
          tip: "ikili",
          sol: {
            ikon: "↕️",
            baslik: "x eksenine dik kesit",
            maddeler: [
              "Dilim dikey, kalınlık dx",
              "s = üst − alt",
              "V = ∫ A(x) dx"
            ]
          },
          sag: {
            ikon: "↔️",
            baslik: "y eksenine dik kesit",
            maddeler: [
              "Dilim yatay, kalınlık dy",
              "s = sağ − sol",
              "V = ∫ A(y) dy"
            ]
          },
          oyun: [
            {
              metin: "Taban uzunluğu s = √x − 0.",
              cevap: "sol",
              neden: "Üst eksi alt, x'in fonksiyonu."
            },
            {
              metin: "Taban uzunluğu s = 2y − y², sınırlar y = 0 ve 2.",
              cevap: "sag",
              neden: "Sağ − sol, y'nin fonksiyonu."
            },
            {
              metin: "Dilim kalınlığı dy.",
              cevap: "sag",
              neden: "y eksenine dik kesit yatay dilim verir."
            },
            {
              metin: "Sınırlar x = 0 ve x = 1.",
              cevap: "sol",
              neden: "x sınırları dx integralini gösterir."
            }
          ]
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
            "Bilinen kesitli cisim: V = ∫ₐᵇ A(x) dx (kesit x eksenine dikse); y'ye dikse V = ∫ A(y) dy.",
            "Önce taban bölgesini çiz; dilimin taban uzunluğu s = üst − alt (ya da sağ − sol).",
            "Kare: s². Dikdörtgen: h · s. Yarım daire (çap s): π s² / 8. Eşkenar üçgen: √3 s² / 4. İkizkenar dik üçgen: s² / 2 (dik kenar s).",
            "Yarım dairede s çaptır; yarıçap s/2.",
            "Kesit alanı s²'ye bağlıdır: (üst − alt)'ı karelemeyi unutma.",
            "Sınırlar kesişimlerden ya da verilen x (y) değerlerinden gelir.",
            "Aynı taban farklı kesitle farklı hacim verir; çarpan hacmi belirler.",
            "Hacmin birimi uzunluğun küpüdür."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "Taban bölgesi, x ekseni, y ekseni ve y = 4 − x doğrusuyla sınırlıdır. Kesitler x eksenine dik ve kare olan cismin hacmi kaçtır?",
      opts: [
        "16",
        "64/3",
        "32",
        "64"
      ],
      a: 1,
      why: "s = 4 − x, A = (4 − x)², V = ∫₀⁴ (4 − x)² dx = [−(4 − x)³/3]₀⁴ = 64/3. 16, x = 0'daki kesitin alanıdır (4²), hacim değil; hacim için bütün kesitler integrallenmeli."
    },
    {
      q: "Taban bölgesi y = x ve y = x² eğrileri arasında kalan bölgedir. Kesitler x eksenine dik ve çapı tabanda olan yarım dairelerdir. Cismin hacmi kaçtır?",
      opts: [
        "π/240",
        "π/120",
        "π/60",
        "π/30"
      ],
      a: 0,
      why: "s = x − x², A = π s² / 8 ve ∫₀¹ s² dx = 1/30, V = π/240. π/120, yarım daire yerine tam daire (π s² / 8 yerine π s² / 4) kullanılan sonuçtur; π/60 ise çap yerine yarıçap s alınan hatadır (π s² / 2)."
    },
    {
      q: "Bir cismin x eksenine dik kesitlerinin alanı A(x) (cm²) tablodadır. Yamuk toplamıyla hacim tahmini kaç cm³'tür?",
      opts: [
        "12",
        "46",
        "23",
        "15"
      ],
      a: 2,
      fig: {
        type: "table",
        head: [
          "x (cm)",
          "0",
          "2",
          "5",
          "6"
        ],
        rows: [
          [
            "A(x)",
            "0",
            "4",
            "6",
            "2"
          ]
        ]
      },
      why: "V ≈ ∫₀⁶ A dx ≈ 2·(0 + 4)/2 + 3·(4 + 6)/2 + 1·(6 + 2)/2 = 4 + 15 + 4 = 23. 12, alanların toplamıdır (genişlik hesaba katılmamış); 46, yamuklarda 2'ye bölme unutulduğunda çıkar."
    },
    {
      q: "Taban bölgesi y = x² parabolü ile y = 4 doğrusu arasındadır. Kesitler x eksenine dik karelerdir (kenar tabanda). Hacim kaçtır?",
      opts: [
        "256/15",
        "32/3",
        "64",
        "512/15"
      ],
      a: 3,
      why: "s = 4 − x², x = −2…2. V = ∫₋₂² (4 − x²)² dx = 2(32 − 64/3 + 32/5) = 512/15. 256/15 yalnızca x ≥ 0 yarısıdır; 32/3, kareleme yapılmayan alan integralidir."
    },
    {
      q: "Taban bölgesi x = y² ve x = 2y (y ≥ 0) eğrileri arasındadır. Kesitler y eksenine dik karelerdir (kenar tabanda). Hacim kaçtır?",
      opts: [
        "4/3",
        "16/15",
        "8/15",
        "16/3"
      ],
      a: 1,
      why: "s = 2y − y², y = 0…2. V = ∫₀² (2y − y²)² dy = ∫₀² (4y² − 4y³ + y⁴) dy = 32/3 − 16 + 32/5 = 16/15. 4/3 bölgenin alanıdır (∫ s dy); kareleme gereklidir."
    }
  ]
};
