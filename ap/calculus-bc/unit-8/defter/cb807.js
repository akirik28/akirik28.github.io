/* Kitpath not defteri · cb807 · AP Calculus BC 8.9–8.10
   Video kiti yok; içerik College Board CED öğrenme hedeflerine göre yazıldı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb807",
  amac: "Bu konu bir bölgeyi bir eksen etrafında döndürünce oluşan cismin hacmini *disc method* ile bulmayı anlatıyor: her dilim bir disktir, alanı π r², hacim V = π ∫ r² dx. Eksenin x ekseni, y = k, y ekseni ya da x = k olduğu durumları göreceksin.",
  bolumler: [
    {
      baslik: "Dönen bölge, disk dilimi",
      kisa: "Bölge eksene yaslıysa her dilim bir disk olur: hacim π r² dx.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🏺",
          baslik: "Torna tezgâhı",
          metin: "Bir çömlekçi çamuru dönen tablada şekillendirir. Bir kenar profili çizip eksen etrafında döndürürsek bir kap çıkar. Bu kabı ince dilimlere kesersen her dilim yuvarlak bir **disktir**: yarıçapı, profilin eksene uzaklığı kadar."
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
              t: "∫ₐᵇ [ r(x) ]² dx",
              alt: "yarıçapın karesi"
            }
          ],
          aciklama: "Disk alanı π r². Yarıçap r(x), dilimin üst ucu ile dönme ekseni arasındaki uzaklıktır. ==π integralin dışında kalır; r karesi alınır.=="
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "💿",
              terim: "Disc method",
              tr: "disk yöntemi",
              tanim: "Bölgeyi dönme eksenine dik dilimlerle kesip disklerin hacmini toplamak. Bölge eksene yaslıdır, içi boş kalmaz.",
              ornek: "y = √x altı, x ekseni etrafında dönerse her dilim bir disktir."
            },
            {
              ikon: "🔄",
              terim: "Solid of revolution",
              tr: "dönel cisim",
              tanim: "Bir bölgenin bir eksen etrafında 360° döndürülmesiyle oluşan cisim.",
              ornek: "Paraboloit: y = √x eğrisinin x ekseni etrafında dönmesi."
            }
          ]
        }
      ]
    },
    {
      baslik: "x ekseni etrafında dönme",
      kisa: "Yarıçap, eğrinin eksene uzaklığıdır: r = f(x).",
      bloklar: [
        {
          tip: "grafik",
          baslik: "y = √x altındaki bölge x ekseni etrafında (yatay kesikli çizgi dönme ekseni)",
          xlabel: "x",
          ylabel: "y",
          xmax: 5,
          ymax: 5,
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
              v: 4.5,
              label: "2"
            },
            {
              v: 3.5,
              label: "1"
            },
            {
              v: 2.5,
              label: "0"
            },
            {
              v: 1.5,
              label: "−1"
            },
            {
              v: 0.5,
              label: "−2"
            }
          ],
          ogeler: [
            {
              id: "ax",
              tip: "cizgi",
              renk: 1,
              kesik: true,
              from: [0, 2.5],
              to: [5, 2.5]
            },
            {
              id: "a",
              tip: "alan",
              renk: 0,
              noktalar: [[0, 2.5], [0.125, 2.854], [0.25, 3], [0.375, 3.112], [0.5, 3.207], [0.625, 3.291], [0.75, 3.366], [0.875, 3.435], [1, 3.5], [1.125, 3.561], [1.25, 3.618], [1.375, 3.673], [1.5, 3.725], [1.625, 3.775], [1.75, 3.823], [1.875, 3.869], [2, 3.914], [2.125, 3.958], [2.25, 4], [2.375, 4.041], [2.5, 4.081], [2.625, 4.12], [2.75, 4.158], [2.875, 4.196], [3, 4.232], [3.125, 4.268], [3.25, 4.303], [3.375, 4.337], [3.5, 4.371], [3.625, 4.404], [3.75, 4.436], [3.875, 4.469], [4, 4.5], [4, 2.5], [3.875, 2.5], [3.75, 2.5], [3.625, 2.5], [3.5, 2.5], [3.375, 2.5], [3.25, 2.5], [3.125, 2.5], [3, 2.5], [2.875, 2.5], [2.75, 2.5], [2.625, 2.5], [2.5, 2.5], [2.375, 2.5], [2.25, 2.5], [2.125, 2.5], [2, 2.5], [1.875, 2.5], [1.75, 2.5], [1.625, 2.5], [1.5, 2.5], [1.375, 2.5], [1.25, 2.5], [1.125, 2.5], [1, 2.5], [0.875, 2.5], [0.75, 2.5], [0.625, 2.5], [0.5, 2.5], [0.375, 2.5], [0.25, 2.5], [0.125, 2.5], [0, 2.5]]
            },
            {
              id: "c",
              tip: "egri",
              renk: 0,
              etiket: "√x",
              noktalar: [[0, 2.5], [0.25, 3], [0.5, 3.207], [0.75, 3.366], [1, 3.5], [1.25, 3.618], [1.5, 3.725], [1.75, 3.823], [2, 3.914], [2.25, 4], [2.5, 4.081], [2.75, 4.158], [3, 4.232], [3.25, 4.303], [3.5, 4.371], [3.75, 4.436], [4, 4.5]]
            },
            {
              id: "s",
              tip: "cizgi",
              renk: 2,
              from: [2.25, 2.5],
              to: [2.25, 4],
              etiket: "r = √x",
              gizli: true
            },
            {
              id: "m",
              tip: "alan",
              renk: 3,
              gizli: true,
              noktalar: [[0, 2.5], [0.125, 2.5], [0.25, 2.5], [0.375, 2.5], [0.5, 2.5], [0.625, 2.5], [0.75, 2.5], [0.875, 2.5], [1, 2.5], [1.125, 2.5], [1.25, 2.5], [1.375, 2.5], [1.5, 2.5], [1.625, 2.5], [1.75, 2.5], [1.875, 2.5], [2, 2.5], [2.125, 2.5], [2.25, 2.5], [2.375, 2.5], [2.5, 2.5], [2.625, 2.5], [2.75, 2.5], [2.875, 2.5], [3, 2.5], [3.125, 2.5], [3.25, 2.5], [3.375, 2.5], [3.5, 2.5], [3.625, 2.5], [3.75, 2.5], [3.875, 2.5], [4, 2.5], [4, 0.5], [3.875, 0.531], [3.75, 0.564], [3.625, 0.596], [3.5, 0.629], [3.375, 0.663], [3.25, 0.697], [3.125, 0.732], [3, 0.768], [2.875, 0.804], [2.75, 0.842], [2.625, 0.88], [2.5, 0.919], [2.375, 0.959], [2.25, 1], [2.125, 1.042], [2, 1.086], [1.875, 1.131], [1.75, 1.177], [1.625, 1.225], [1.5, 1.275], [1.375, 1.327], [1.25, 1.382], [1.125, 1.439], [1, 1.5], [0.875, 1.565], [0.75, 1.634], [0.625, 1.709], [0.5, 1.793], [0.375, 1.888], [0.25, 2], [0.125, 2.146], [0, 2.5]]
            },
            {
              id: "mc",
              tip: "egri",
              renk: 3,
              gizli: true,
              noktalar: [[0, 2.5], [0.25, 2], [0.5, 1.793], [0.75, 1.634], [1, 1.5], [1.25, 1.382], [1.5, 1.275], [1.75, 1.177], [2, 1.086], [2.25, 1], [2.5, 0.919], [2.75, 0.842], [3, 0.768], [3.25, 0.697], [3.5, 0.629], [3.75, 0.564], [4, 0.5]]
            },
            {
              id: "e",
              tip: "cizgi",
              renk: 3,
              from: [4, 0.5],
              to: [4, 4.5],
              gizli: true
            },
            {
              id: "d",
              tip: "cizgi",
              renk: 2,
              from: [2.25, 1],
              to: [2.25, 4],
              etiket: "disk",
              gizli: true
            },
            {
              id: "t",
              tip: "yazi",
              renk: 2,
              x: 3,
              y: 0.15,
              metin: "A(x) = π x,  V = 8π",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Bölge: y = √x eğrisi altında, x ekseni (kesikli çizgi) üstünde, 0 ≤ x ≤ 4."
            },
            {
              metin: "Eksene dik ince bir dilim: yarıçap eğrinin eksene uzaklığı, r = √x. (x = 2,25'te r = 1,5.)",
              goster: [
                "s"
              ]
            },
            {
              metin: "Bölge x ekseni etrafında dönünce eğrinin aynası da çıkar: dilim bir diske dönüşür.",
              goster: [
                "m",
                "mc",
                "e"
              ]
            },
            {
              metin: "Diskin alanı π r² = π (√x)² = π x.",
              gizle: [
                "s"
              ],
              goster: [
                "d"
              ]
            },
            {
              metin: "V = π ∫₀⁴ x dx = π · [x²/2]₀⁴ = 8π.",
              goster: [
                "t"
              ]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "y = √x, 0 ≤ x ≤ 4, x ekseni etrafında",
          durum: "Hacmi bul.",
          adimlar: [
            "Yarıçap: r(x) = √x − 0 = √x.",
            "Alan: A(x) = π r² = π x.",
            "V = π ∫₀⁴ x dx = π · 16/2 = 8π."
          ],
          sonuc: "V = 8π"
        }
      ]
    },
    {
      baslik: "Başka eksenler: y = k, x = k, y ekseni",
      kisa: "Yarıçap = eğri ile dönme ekseni arasındaki uzaklık.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Yarıçap hangi uzaklıktır?",
          head: [
            "Dönme ekseni",
            "Dilim",
            "Yarıçap r"
          ],
          rows: [
            [
              "x ekseni (y = 0)",
              "dx",
              "f(x)"
            ],
            [
              "y = k (bölgenin üstünde)",
              "dx",
              "k − f(x)"
            ],
            [
              "y = k (bölgenin altında)",
              "dx",
              "f(x) − k"
            ],
            [
              "y ekseni (x = 0)",
              "dy",
              "g(y)"
            ],
            [
              "x = k",
              "dy",
              "|g(y) − k|"
            ]
          ],
          vurgu: 1,
          not: "Disk yönteminde bölge eksene dayanır: eğriyle eksen arasında boşluk kalmaz. Boşluk kalırsa pul (washer) yöntemi gerekir."
        },
        {
          tip: "grafik",
          baslik: "Bölge: y = √x ile y = 2 arası, y = 2 etrafında",
          xlabel: "x",
          ylabel: "y",
          xmax: 5,
          ymax: 5,
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
          ogeler: [
            {
              id: "ax",
              tip: "cizgi",
              renk: 1,
              kesik: true,
              from: [0, 2],
              to: [5, 2],
              etiket: "y = 2"
            },
            {
              id: "a",
              tip: "alan",
              renk: 0,
              noktalar: [[0, 2], [0.125, 2], [0.25, 2], [0.375, 2], [0.5, 2], [0.625, 2], [0.75, 2], [0.875, 2], [1, 2], [1.125, 2], [1.25, 2], [1.375, 2], [1.5, 2], [1.625, 2], [1.75, 2], [1.875, 2], [2, 2], [2.125, 2], [2.25, 2], [2.375, 2], [2.5, 2], [2.625, 2], [2.75, 2], [2.875, 2], [3, 2], [3.125, 2], [3.25, 2], [3.375, 2], [3.5, 2], [3.625, 2], [3.75, 2], [3.875, 2], [4, 2], [4, 2], [3.875, 1.969], [3.75, 1.936], [3.625, 1.904], [3.5, 1.871], [3.375, 1.837], [3.25, 1.803], [3.125, 1.768], [3, 1.732], [2.875, 1.696], [2.75, 1.658], [2.625, 1.62], [2.5, 1.581], [2.375, 1.541], [2.25, 1.5], [2.125, 1.458], [2, 1.414], [1.875, 1.369], [1.75, 1.323], [1.625, 1.275], [1.5, 1.225], [1.375, 1.173], [1.25, 1.118], [1.125, 1.061], [1, 1], [0.875, 0.935], [0.75, 0.866], [0.625, 0.791], [0.5, 0.707], [0.375, 0.612], [0.25, 0.5], [0.125, 0.354], [0, 0]]
            },
            {
              id: "c",
              tip: "egri",
              renk: 0,
              etiket: "√x",
              noktalar: [[0, 0], [0.25, 0.5], [0.5, 0.707], [0.75, 0.866], [1, 1], [1.25, 1.118], [1.5, 1.225], [1.75, 1.323], [2, 1.414], [2.25, 1.5], [2.5, 1.581], [2.75, 1.658], [3, 1.732], [3.25, 1.803], [3.5, 1.871], [3.75, 1.936], [4, 2]]
            },
            {
              id: "s",
              tip: "cizgi",
              renk: 2,
              from: [1, 1],
              to: [1, 2],
              etiket: "r = 2 − √x",
              gizli: true
            },
            {
              id: "m",
              tip: "alan",
              renk: 3,
              gizli: true,
              noktalar: [[0, 2], [0.125, 2], [0.25, 2], [0.375, 2], [0.5, 2], [0.625, 2], [0.75, 2], [0.875, 2], [1, 2], [1.125, 2], [1.25, 2], [1.375, 2], [1.5, 2], [1.625, 2], [1.75, 2], [1.875, 2], [2, 2], [2.125, 2], [2.25, 2], [2.375, 2], [2.5, 2], [2.625, 2], [2.75, 2], [2.875, 2], [3, 2], [3.125, 2], [3.25, 2], [3.375, 2], [3.5, 2], [3.625, 2], [3.75, 2], [3.875, 2], [4, 2], [4, 2], [3.875, 2.031], [3.75, 2.064], [3.625, 2.096], [3.5, 2.129], [3.375, 2.163], [3.25, 2.197], [3.125, 2.232], [3, 2.268], [2.875, 2.304], [2.75, 2.342], [2.625, 2.38], [2.5, 2.419], [2.375, 2.459], [2.25, 2.5], [2.125, 2.542], [2, 2.586], [1.875, 2.631], [1.75, 2.677], [1.625, 2.725], [1.5, 2.775], [1.375, 2.827], [1.25, 2.882], [1.125, 2.939], [1, 3], [0.875, 3.065], [0.75, 3.134], [0.625, 3.209], [0.5, 3.293], [0.375, 3.388], [0.25, 3.5], [0.125, 3.646], [0, 4]]
            },
            {
              id: "mc",
              tip: "egri",
              renk: 3,
              gizli: true,
              noktalar: [[0, 4], [0.25, 3.5], [0.5, 3.293], [0.75, 3.134], [1, 3], [1.25, 2.882], [1.5, 2.775], [1.75, 2.677], [2, 2.586], [2.25, 2.5], [2.5, 2.419], [2.75, 2.342], [3, 2.268], [3.25, 2.197], [3.5, 2.129], [3.75, 2.064], [4, 2]]
            },
            {
              id: "d",
              tip: "cizgi",
              renk: 2,
              from: [1, 1],
              to: [1, 3],
              etiket: "disk",
              gizli: true
            },
            {
              id: "t",
              tip: "yazi",
              renk: 2,
              x: 3.2,
              y: 4.5,
              metin: "V = 8π/3",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Bölge: y = 2 doğrusu ile y = √x eğrisi arasında; dönme ekseni de y = 2 (bölgenin kenarı)."
            },
            {
              metin: "Dilimin yarıçapı eksenle eğri arasındaki uzaklık: r = 2 − √x. (x = 1'de r = 1.)",
              goster: [
                "s"
              ]
            },
            {
              metin: "y = 2 etrafında dönen bölgenin aynası eksenin üstünde belirir; dilim diske dönüşür.",
              goster: [
                "m",
                "mc"
              ],
              gizle: [
                "s"
              ]
            },
            {
              metin: "Disk: yarıçap 2 − √x. V = π ∫₀⁴ (2 − √x)² dx = 8π/3.",
              goster: [
                "d",
                "t"
              ]
            }
          ]
        }
      ]
    },
    {
      baslik: "İki örnek ve eksen seçimi",
      kisa: "Önce eksene dik dilimi çiz; yarıçap o dilimin uzunluğu.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "y = √x ile y = 2 arası, y = 2 etrafında",
          durum: "Hacmi hesapla.",
          adimlar: [
            "Yarıçap: r = 2 − √x. Sınırlar: √x = 2 → x = 4, yani [0, 4].",
            "(2 − √x)² = 4 − 4√x + x.",
            "∫₀⁴ (4 − 4√x + x) dx = 16 − 4 · (2/3) · 8 + 8 = 24 − 64/3 = 8/3.",
            "V = π · 8/3 = 8π/3."
          ],
          sonuc: "V = 8π/3"
        },
        {
          tip: "ornek",
          baslik: "y = x², y ekseni ve y = 3 ile sınırlı bölge, y ekseni etrafında",
          durum: "Hacmi y'ye göre bul.",
          adimlar: [
            "y ekseni etrafında dilim yataydır (dy). x = √y, yarıçap r = √y.",
            "Sınırlar: y = 0'dan y = 3'e.",
            "V = π ∫₀³ y dy = π · 9/2 = 9π/2."
          ],
          sonuc: "V = 9π/2"
        },
        {
          tip: "ikili",
          sol: {
            ikon: "↔️",
            baslik: "x eksenine paralel eksen",
            maddeler: [
              "Dilim dikey, dx",
              "r = f(x) ya da k ile fark"
            ]
          },
          sag: {
            ikon: "↕️",
            baslik: "y eksenine paralel eksen",
            maddeler: [
              "Dilim yatay, dy",
              "r = x = g(y) ya da k ile fark"
            ]
          },
          oyun: [
            {
              metin: "y = 2 etrafında dönüş.",
              cevap: "sol",
              neden: "y = 2 yatay bir doğru; eksene dik dilim dikeydir, dx."
            },
            {
              metin: "x = 1 etrafında dönüş.",
              cevap: "sag",
              neden: "x = 1 dikey bir doğru; dilim yataydır, dy."
            },
            {
              metin: "Yarıçap r = √y.",
              cevap: "sag",
              neden: "x'i y'ye bağlayan fonksiyon; dy integrali."
            },
            {
              metin: "Yarıçap r = k − f(x).",
              cevap: "sol",
              neden: "f(x) ve dx: yatay ekseni gösterir."
            }
          ]
        },
        {
          tip: "tuzak",
          metin: "Kareyi almak hacmin bel kemiğidir: (2 − √x)² açılımında orta terimi unutma. π'yi de integralin dışına çıkar, r'yi kareye al.",
          yanlis: "π ∫₀⁴ (2 − √x)² dx = π ∫₀⁴ (4 − x) dx.",
          dogru: "(2 − √x)² = 4 − 4√x + x; sonuç 8π/3. \"Karelerin farkı\" yalnızca pul yönteminde R² − r² biçiminde görülür."
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
            "Disk yöntemi: V = π ∫ [r]² dx (ya da dy). Dilim eksene dik, alanı π r².",
            "Yarıçap, dilimin eğrisi ile dönme ekseni arasındaki uzaklıktır.",
            "x ekseni: r = f(x). y = k: r = |f(x) − k|. y ekseni: r = g(y). x = k: r = |g(y) − k|.",
            "Eksen yatayken dx, dikeyken dy ile entegre et; sınırlar o değişkenin değerleri.",
            "π integralin dışına çıkar; r'yi kareye almayı ve parantezi açmayı unutma.",
            "Disk, bölge eksene yaslandığında kullanılır; boşluk varsa pul yöntemi.",
            "Sınırları kesişimlerden bul; hacim her zaman pozitiftir.",
            "Birim: uzunluğun küpü."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "y = x², 0 ≤ x ≤ 2 eğrisinin altındaki bölge x ekseni etrafında döndürülüyor. Oluşan cismin hacmi kaçtır?",
      opts: [
        "64π/9",
        "32π/5",
        "16π/3",
        "8π/3"
      ],
      a: 1,
      why: "V = π ∫₀² (x²)² dx = π ∫₀² x⁴ dx = π · 32/5. 8π/3 = π ∫ x² dx olup yarıçapı karelemeden, 64π/9 ise integrali kareleyerek bulunur (∫x² = 8/3)."
    },
    {
      q: "y = x² eğrisi ile y = 4 doğrusu arasındaki bölge y = 4 doğrusu etrafında döndürülüyor. Hacim kaçtır?",
      opts: [
        "512π/15",
        "256π/15",
        "32π/3",
        "16π/3"
      ],
      a: 0,
      why: "Dilim yarıçapı r = 4 − x², x = −2…2. V = π ∫₋₂² (4 − x²)² dx = π · 512/15. 256π/15, yalnızca x ≥ 0 yarısıdır; 32π/3, π ∫ (4 − x²) dx gibi karelenmemiş integraldir."
    },
    {
      q: "y = 4 − x², x ≥ 0 ve eksenlerle sınırlı bölge x ekseni etrafında dönerse hacim 256π/15 olur. Aynı bölge y ekseni etrafında döndürülürse hacim kaçtır?",
      opts: [
        "256π/15",
        "16π",
        "8π",
        "4π"
      ],
      a: 2,
      why: "y ekseni etrafında dilim yataydır: r = x = √(4 − y), y = 0…4. V = π ∫₀⁴ (4 − y) dy = π · 8 = 8π. İlk şık eksen değişse de aynı kalacağını varsayar."
    },
    {
      q: "R bölgesi y = √x eğrisi, y = 2 doğrusu ve y ekseni ile sınırlıdır. R, y = 2 doğrusu etrafında döndürülüyor. Hangi ifade hacmi verir?",
      opts: [
        "π ∫₀⁴ (√x)² dx",
        "π ∫₀⁴ (2 − √x) dx",
        "π ∫₀⁴ (4 − x) dx",
        "π ∫₀⁴ (2 − √x)² dx"
      ],
      a: 3,
      why: "Yarıçap, eksen y = 2 ile eğri arasındaki uzaklıktır: 2 − √x; alan π (2 − √x)². İlk şık x eksenine uzaklığı kullanır, ikincisi kareyi unutur, üçüncüsü (2² − (√x)²) hatalı bir kare farkıdır."
    },
    {
      q: "Bir dönel cismin eksene dik kesitleri diskdir. Yarıçap r(x) cm olarak ölçülmüştür. Yamuk toplamıyla V ≈ π ∫₀³ r(x)² dx tahmini kaç cm³'tür?",
      opts: [
        "5π",
        "9π",
        "10π",
        "18π"
      ],
      a: 1,
      fig: {
        type: "table",
        head: [
          "x (cm)",
          "0",
          "1",
          "2",
          "3"
        ],
        rows: [
          [
            "r(x)",
            "1",
            "2",
            "2",
            "1"
          ]
        ]
      },
      why: "r² değerleri 1, 4, 4, 1. Yamuklar: (1+4)/2 + (4+4)/2 + (4+1)/2 = 2,5 + 4 + 2,5 = 9, yani V ≈ 9π. 5π, r değerlerine yamuk uygulanıp kareleme unutulduğunda çıkar; 10π yalnızca r² toplamıdır."
    }
  ]
};
