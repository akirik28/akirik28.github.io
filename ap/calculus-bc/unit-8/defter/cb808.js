/* Kitpath not defteri · cb808 · AP Calculus BC 8.11–8.12
   Video kiti yok; içerik College Board CED öğrenme hedeflerine göre yazıldı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb808",
  amac: "Bu konu bölge ile dönme ekseni arasında boşluk kalınca hacmin nasıl bulunacağını anlatıyor: dilim artık içi delik bir disktir, yani *washer* (pul). Hacim V = π ∫ (R² − r²) dx. Dış ve iç yarıçapı doğru seçmeyi, eksen x, y = k, y ekseni olduğunda uygulamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Delikli disk: pul",
      kisa: "Pulun alanı, dış diskin alanı eksi iç diskin alanıdır.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🔩",
          baslik: "Somun pulu ve CD",
          metin: "Bir CD'nin ya da somun pulunun ortası boştur. Alanı bulmak için büyük dairenin alanından ortadaki deliğin alanını çıkarırsın: π R² − π r². Dönel cismi dilimlediğinde her dilim işte böyle bir **puldur**."
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
              t: "π",
              alt: "daire alanı"
            },
            {
              t: "∫ₐᵇ ( [R(x)]² − [r(x)]² ) dx",
              alt: "dış yarıçap² − iç yarıçap²"
            }
          ],
          aciklama: "R: dönme ekseninden ==uzak== eğrinin uzaklığı. r: eksene ==yakın== eğrinin uzaklığı. Parantezi iç içe değil, ayrı ayrı karele."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⭕",
              terim: "Washer method",
              tr: "pul yöntemi",
              tanim: "Bölge eksene yaslanmıyorsa dilim içi boş bir disk olur. Hacim, dış ve iç disklerin hacim farkıdır.",
              ornek: "y = x² ile y = 2x arasındaki bölge x ekseni etrafında dönerse pul oluşur."
            },
            {
              ikon: "📏",
              terim: "Outer / inner radius",
              tr: "dış ve iç yarıçap",
              tanim: "Dış yarıçap R, eksenden en uzak sınıra; iç yarıçap r, eksene en yakın sınıra olan uzaklıktır.",
              ornek: "x ekseninde R = üst eğri, r = alt eğri."
            }
          ]
        }
      ]
    },
    {
      baslik: "x ekseni etrafında pul",
      kisa: "R üst eğri, r alt eğri: V = π ∫ (üst² − alt²) dx.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "y = 2x ile y = x² arası bölge, x ekseni etrafında (kesikli çizgi dönme ekseni)",
          xlabel: "x",
          ylabel: "y",
          xmax: 3,
          ymax: 8,
          xticks: [
            {
              v: 1,
              label: "1"
            },
            {
              v: 2,
              label: "2"
            }
          ],
          yticks: [
            {
              v: 8,
              label: "4"
            },
            {
              v: 6,
              label: "2"
            },
            {
              v: 4,
              label: "0"
            },
            {
              v: 2,
              label: "−2"
            },
            {
              v: 0,
              label: "−4"
            }
          ],
          ogeler: [
            {
              id: "ax",
              tip: "cizgi",
              renk: 1,
              kesik: true,
              from: [0, 4],
              to: [3, 4]
            },
            {
              id: "a",
              tip: "alan",
              renk: 0,
              noktalar: [[0, 4], [0.083, 4.167], [0.167, 4.333], [0.25, 4.5], [0.333, 4.667], [0.417, 4.833], [0.5, 5], [0.583, 5.167], [0.667, 5.333], [0.75, 5.5], [0.833, 5.667], [0.917, 5.833], [1, 6], [1.083, 6.167], [1.167, 6.333], [1.25, 6.5], [1.333, 6.667], [1.417, 6.833], [1.5, 7], [1.583, 7.167], [1.667, 7.333], [1.75, 7.5], [1.833, 7.667], [1.917, 7.833], [2, 8], [2, 8], [1.917, 7.674], [1.833, 7.361], [1.75, 7.063], [1.667, 6.778], [1.583, 6.507], [1.5, 6.25], [1.417, 6.007], [1.333, 5.778], [1.25, 5.563], [1.167, 5.361], [1.083, 5.174], [1, 5], [0.917, 4.84], [0.833, 4.694], [0.75, 4.563], [0.667, 4.444], [0.583, 4.34], [0.5, 4.25], [0.417, 4.174], [0.333, 4.111], [0.25, 4.063], [0.167, 4.028], [0.083, 4.007], [0, 4]]
            },
            {
              id: "co",
              tip: "cizgi",
              renk: 0,
              from: [0, 4],
              to: [2, 8],
              etiket: "2x"
            },
            {
              id: "ci",
              tip: "egri",
              renk: 2,
              etiket: "x²",
              noktalar: [[0, 4], [0.167, 4.028], [0.333, 4.111], [0.5, 4.25], [0.667, 4.444], [0.833, 4.694], [1, 5], [1.167, 5.361], [1.333, 5.778], [1.5, 6.25], [1.667, 6.778], [1.833, 7.361], [2, 8]]
            },
            {
              id: "R",
              tip: "cizgi",
              renk: 1,
              from: [1, 4],
              to: [1, 6],
              etiket: "R = 2x",
              gizli: true
            },
            {
              id: "r",
              tip: "cizgi",
              renk: 2,
              from: [1, 4],
              to: [1, 5],
              etiket: "r = x²",
              gizli: true
            },
            {
              id: "m",
              tip: "alan",
              renk: 3,
              gizli: true,
              noktalar: [[0, 4], [0.083, 3.833], [0.167, 3.667], [0.25, 3.5], [0.333, 3.333], [0.417, 3.167], [0.5, 3], [0.583, 2.833], [0.667, 2.667], [0.75, 2.5], [0.833, 2.333], [0.917, 2.167], [1, 2], [1.083, 1.833], [1.167, 1.667], [1.25, 1.5], [1.333, 1.333], [1.417, 1.167], [1.5, 1], [1.583, 0.833], [1.667, 0.667], [1.75, 0.5], [1.833, 0.333], [1.917, 0.167], [2, 0], [2, 0], [1.917, 0.326], [1.833, 0.639], [1.75, 0.937], [1.667, 1.222], [1.583, 1.493], [1.5, 1.75], [1.417, 1.993], [1.333, 2.222], [1.25, 2.437], [1.167, 2.639], [1.083, 2.826], [1, 3], [0.917, 3.16], [0.833, 3.306], [0.75, 3.437], [0.667, 3.556], [0.583, 3.66], [0.5, 3.75], [0.417, 3.826], [0.333, 3.889], [0.25, 3.937], [0.167, 3.972], [0.083, 3.993], [0, 4]]
            },
            {
              id: "mo",
              tip: "cizgi",
              renk: 3,
              from: [0, 4],
              to: [2, 0],
              gizli: true
            },
            {
              id: "mi",
              tip: "egri",
              renk: 3,
              noktalar: [[0, 4], [0.167, 3.972], [0.333, 3.889], [0.5, 3.75], [0.667, 3.556], [0.833, 3.306], [1, 3], [1.167, 2.639], [1.333, 2.222], [1.5, 1.75], [1.667, 1.222], [1.833, 0.639], [2, 0]],
              gizli: true
            },
            {
              id: "h1",
              tip: "cizgi",
              renk: 1,
              from: [1, 2],
              to: [1, 6],
              etiket: "dış disk",
              gizli: true
            },
            {
              id: "h2",
              tip: "cizgi",
              renk: 2,
              from: [1, 3],
              to: [1, 5],
              etiket: "delik",
              gizli: true
            },
            {
              id: "t",
              tip: "yazi",
              renk: 0,
              x: 1.9,
              y: 7.6,
              metin: "V = 64π/15",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Bölge: y = 2x (üstte) ile y = x² (altta) arasında, 0 ≤ x ≤ 2. Dönme ekseni x ekseni."
            },
            {
              metin: "x = 1'de dilim: eksenden dış sınıra R = 2x = 2, iç sınıra r = x² = 1.",
              goster: [
                "R",
                "r"
              ]
            },
            {
              metin: "Bölge dönünce aynası belirir; dilim, ortası delik bir pul olur.",
              gizle: [
                "R",
                "r"
              ],
              goster: [
                "m",
                "mo",
                "mi",
                "h1",
                "h2"
              ]
            },
            {
              metin: "Pulun alanı π (R² − r²) = π (4x² − x⁴); x = 1'de π (4 − 1) = 3π.",
              goster: []
            },
            {
              metin: "V = π ∫₀² (4x² − x⁴) dx = π (32/3 − 32/5) = 64π/15.",
              goster: [
                "t"
              ]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "y = 2x ve y = x², x ekseni etrafında",
          durum: "Hacmi bul.",
          adimlar: [
            "Kesişim: 2x = x² → x = 0 ve x = 2.",
            "x = 1'de 2x = 2 > x² = 1: dış yarıçap R = 2x, iç yarıçap r = x².",
            "V = π ∫₀² [(2x)² − (x²)²] dx = π ∫₀² (4x² − x⁴) dx.",
            "= π [4x³/3 − x⁵/5]₀² = π (32/3 − 32/5) = 64π/15."
          ],
          sonuc: "V = 64π/15"
        }
      ]
    },
    {
      baslik: "Başka eksenler: y = k ve x = k",
      kisa: "R: eksene uzak eğriye uzaklık; r: yakın eğriye uzaklık.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Yarıçaplar (y = f₁(x) üstte, y = f₂(x) altta)",
          head: [
            "Dönme ekseni",
            "Dış yarıçap R",
            "İç yarıçap r"
          ],
          rows: [
            [
              "x ekseni (y = 0)",
              "f₁(x)",
              "f₂(x)"
            ],
            [
              "y = k, k bölgenin altında",
              "f₁(x) − k",
              "f₂(x) − k"
            ],
            [
              "y = k, k bölgenin üstünde",
              "k − f₂(x)",
              "k − f₁(x)"
            ],
            [
              "y ekseni ya da x = k",
              "dy ile: uzak eğrinin x'e uzaklığı",
              "yakın eğrinin uzaklığı"
            ]
          ],
          vurgu: 2,
          not: "Kural: eksen bölgenin üstündeyse en alttaki eğri en uzaktır; bu yüzden R ve r'nin eğrileri yer değiştirir."
        },
        {
          tip: "grafik",
          baslik: "Aynı bölge, y = 5 doğrusu etrafında",
          xlabel: "x",
          ylabel: "y",
          xmax: 3,
          ymax: 6,
          xticks: [
            {
              v: 1,
              label: "1"
            },
            {
              v: 2,
              label: "2"
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
            },
            {
              v: 4,
              label: "4"
            },
            {
              v: 5,
              label: "5"
            }
          ],
          ogeler: [
            {
              id: "ax",
              tip: "cizgi",
              renk: 1,
              kesik: true,
              from: [0, 5],
              to: [3, 5],
              etiket: "y = 5"
            },
            {
              id: "a",
              tip: "alan",
              renk: 0,
              noktalar: [[0, 0], [0.083, 0.167], [0.167, 0.333], [0.25, 0.5], [0.333, 0.667], [0.417, 0.833], [0.5, 1], [0.583, 1.167], [0.667, 1.333], [0.75, 1.5], [0.833, 1.667], [0.917, 1.833], [1, 2], [1.083, 2.167], [1.167, 2.333], [1.25, 2.5], [1.333, 2.667], [1.417, 2.833], [1.5, 3], [1.583, 3.167], [1.667, 3.333], [1.75, 3.5], [1.833, 3.667], [1.917, 3.833], [2, 4], [2, 4], [1.917, 3.674], [1.833, 3.361], [1.75, 3.063], [1.667, 2.778], [1.583, 2.507], [1.5, 2.25], [1.417, 2.007], [1.333, 1.778], [1.25, 1.563], [1.167, 1.361], [1.083, 1.174], [1, 1], [0.917, 0.84], [0.833, 0.694], [0.75, 0.563], [0.667, 0.444], [0.583, 0.34], [0.5, 0.25], [0.417, 0.174], [0.333, 0.111], [0.25, 0.063], [0.167, 0.028], [0.083, 0.007], [0, 0]]
            },
            {
              id: "co",
              tip: "cizgi",
              renk: 0,
              from: [0, 0],
              to: [2, 4],
              etiket: "2x"
            },
            {
              id: "ci",
              tip: "egri",
              renk: 2,
              etiket: "x²",
              noktalar: [[0, 0], [0.167, 0.028], [0.333, 0.111], [0.5, 0.25], [0.667, 0.444], [0.833, 0.694], [1, 1], [1.167, 1.361], [1.333, 1.778], [1.5, 2.25], [1.667, 2.778], [1.833, 3.361], [2, 4]]
            },
            {
              id: "R",
              tip: "cizgi",
              renk: 1,
              from: [1, 5],
              to: [1, 1],
              etiket: "R = 5 − x²",
              gizli: true
            },
            {
              id: "r",
              tip: "cizgi",
              renk: 2,
              from: [1, 5],
              to: [1, 2],
              etiket: "r = 5 − 2x",
              gizli: true
            },
            {
              id: "t",
              tip: "yazi",
              renk: 0,
              x: 2.1,
              y: 5.55,
              metin: "V = 136π/15",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Aynı bölge; eksen bölgenin üstünde, y = 5."
            },
            {
              metin: "x = 1'de eksenden uzak sınır alttaki x² eğrisi: R = 5 − x² = 4.",
              goster: [
                "R"
              ]
            },
            {
              metin: "Yakın sınır üstteki 2x doğrusu: r = 5 − 2x = 3. Pulun alanı π (16 − 9) = 7π.",
              goster: [
                "r"
              ]
            },
            {
              metin: "V = π ∫₀² [(5 − x²)² − (5 − 2x)²] dx = 136π/15.",
              goster: [
                "t"
              ]
            }
          ]
        }
      ]
    },
    {
      baslik: "Üç örnek: y = 5, y ekseni, hata",
      kisa: "Yarıçapları ayrı ayrı yaz, karele, farkını al.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Aynı bölge, y = 5 etrafında",
          durum: "Hacmi bul.",
          adimlar: [
            "R = 5 − x², r = 5 − 2x.",
            "R² − r² = (25 − 10x² + x⁴) − (25 − 20x + 4x²) = x⁴ − 14x² + 20x.",
            "V = π ∫₀² (x⁴ − 14x² + 20x) dx = π (32/5 − 112/3 + 40).",
            "= π (96 − 560 + 600)/15 = 136π/15."
          ],
          sonuc: "V = 136π/15"
        },
        {
          tip: "ornek",
          baslik: "Aynı bölge, y ekseni etrafında",
          durum: "Hacmi y'ye göre bul.",
          adimlar: [
            "y ekseni etrafında dilim yataydır (dy). Eğriler x cinsinden: parabol x = √y, doğru x = y/2.",
            "Eksene uzak olan √y (y = 1'de 1 > 0,5): R = √y, r = y/2. Sınırlar y = 0…4.",
            "V = π ∫₀⁴ (y − y²/4) dy = π (8 − 16/3) = 8π/3."
          ],
          sonuc: "V = 8π/3"
        },
        {
          tip: "tuzak",
          metin: "En sık hata, farkın karesini almaktır. Kare, ayrı ayrı alınır.",
          yanlis: "V = π ∫ (R − r)² dx; x = 1'de (2 − 1)² = 1.",
          dogru: "V = π ∫ (R² − r²) dx; x = 1'de 2² − 1² = 3. Pulun alanı üç kat büyük."
        }
      ]
    },
    {
      baslik: "Disk mi, pul mu?",
      kisa: "Bölge eksene dayanıyorsa disk, arada boşluk varsa pul.",
      bloklar: [
        {
          tip: "ikili",
          sol: {
            ikon: "💿",
            baslik: "*Disc* (disk)",
            maddeler: [
              "Bölge eksene yaslanır",
              "V = π ∫ r² dx",
              "Tek yarıçap"
            ]
          },
          sag: {
            ikon: "⭕",
            baslik: "*Washer* (pul)",
            maddeler: [
              "Bölge ile eksen arasında boşluk",
              "V = π ∫ (R² − r²) dx",
              "İki yarıçap"
            ]
          },
          oyun: [
            {
              metin: "y = √x altındaki bölge, x ekseni etrafında.",
              cevap: "sol",
              neden: "Bölge eksene dayanıyor, boşluk yok."
            },
            {
              metin: "y = x ile y = x² arası, x ekseni etrafında.",
              cevap: "sag",
              neden: "Alt eğri x² eksenden uzakta: içte delik kalır."
            },
            {
              metin: "y = 2x ile y = x² arası, y = 5 etrafında.",
              cevap: "sag",
              neden: "Eksen bölgeden uzakta; iki yarıçap gerekir."
            },
            {
              metin: "y = x² ve y = 4 arası, y = 4 etrafında.",
              cevap: "sol",
              neden: "Bölge eksene yaslıdır; yarıçap 4 − x²."
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
            "Pul yöntemi: V = π ∫ (R² − r²) dx (ya da dy). Dilim içi delik disk.",
            "R, dönme ekseninden uzak eğrinin uzaklığı; r, yakın eğrinin uzaklığı.",
            "Eksen x ekseniyse R = üst eğri, r = alt eğri. Eksen y = k ise uzaklıklar |f − k|.",
            "Eksen bölgenin üstündeyse sıra tersine döner: en alttaki eğri en uzaktır.",
            "Önce R² ve r²'yi ayrı karele, sonra çıkar. (R − r)² yanlıştır.",
            "y ekseni ya da x = k etrafında dönüşte eğrileri x = g(y) yaz ve dy ile entegre et.",
            "Sınırları kesişimlerden bul.",
            "Disk: bölge eksene yaslı (tek yarıçap). Pul: arada boşluk (iki yarıçap)."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "y = x ile y = x² (0 ≤ x ≤ 1) eğrileri arasındaki bölge x ekseni etrafında döndürülüyor. Hacim kaçtır?",
      opts: [
        "π/30",
        "2π/15",
        "π/6",
        "2π/3"
      ],
      a: 1,
      why: "R = x, r = x²: V = π ∫₀¹ (x² − x⁴) dx = π (1/3 − 1/5) = 2π/15. π/30, π ∫ (x − x²)² dx ile (R − r)² hatası yapılarak bulunur; π/6 karesiz π ∫ (x − x²) dx değeridir."
    },
    {
      q: "Aynı bölge (y = x ile y = x² arası, 0 ≤ x ≤ 1) y = −1 doğrusu etrafında döndürülürse hacim kaçtır?",
      opts: [
        "2π/15",
        "13π/15",
        "7π/15",
        "π/30"
      ],
      a: 2,
      why: "Eksen bölgenin altında: R = x + 1, r = x² + 1. R² − r² = 2x − x² − x⁴. V = π (1 − 1/3 − 1/5) = 7π/15. 2π/15, eksen x ekseni iken bulunan sonuçtur; yarıçaplara 1 eklemek sonucu değiştirir."
    },
    {
      q: "y = x ile y = x² (0 ≤ x ≤ 1) arasındaki bölge y = 2 doğrusu etrafında döndürülüyor. Hacim hangi integralle bulunur?",
      opts: [
        "π ∫₀¹ [(2 − x)² − (2 − x²)²] dx",
        "π ∫₀¹ (x − x²)² dx",
        "π ∫₀¹ [(2 + x²)² − (2 + x)²] dx",
        "π ∫₀¹ [(2 − x²)² − (2 − x)²] dx"
      ],
      a: 3,
      why: "Eksen bölgenin üstünde: eksenden uzak eğri alttaki x² (R = 2 − x²), yakın eğri x (r = 2 − x). Birinci şık R ve r'yi yer değiştirir (hacim eksi çıkar); ikinci şık (R − r)² hatasıdır."
    },
    {
      q: "y = x² ile y = 2x arasındaki bölge y ekseni etrafında döndürülüyor. Hacim kaçtır?",
      opts: [
        "8π/3",
        "64π/15",
        "16π/3",
        "4π/3"
      ],
      a: 0,
      why: "y'ye göre: dış yarıçap x = √y, iç yarıçap x = y/2, y = 0…4. V = π ∫₀⁴ (y − y²/4) dy = 8π/3. 64π/15, aynı bölgenin x ekseni etrafındaki hacmidir; eksen değişince hacim değişir."
    },
    {
      q: "Bir pul biçimli cismin dış yarıçapı R(x) ve iç yarıçapı r(x) (cm) tabloda verilmiştir. Yamuk toplamıyla V ≈ π ∫₀⁴ (R² − r²) dx kaç cm³'tür?",
      opts: [
        "16π",
        "20π",
        "40π",
        "80π"
      ],
      a: 2,
      fig: {
        type: "table",
        head: [
          "x (cm)",
          "0",
          "2",
          "4"
        ],
        rows: [
          [
            "R(x)",
            "3",
            "4",
            "3"
          ],
          [
            "r(x)",
            "1",
            "2",
            "1"
          ]
        ]
      },
      why: "R² − r² değerleri 8, 12, 8. Yamuklar: 2·(8+12)/2 + 2·(12+8)/2 = 20 + 20 = 40, yani V ≈ 40π. 20π yalnızca bir yamuktur; 80π yamuklarda 2'ye bölmeyi unutmaktır."
    }
  ]
};
