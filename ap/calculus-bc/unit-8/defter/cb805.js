/* Kitora not defteri · cb805 · AP Calculus BC 8.6
   Video kiti yok; içerik College Board CED öğrenme hedeflerine göre yazıldı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb805",
  amac: "Bu konu iki eğri ikiden fazla noktada kesişince alanın nasıl bulunacağını anlatıyor: hangi eğrinin üstte olduğu her kesişimde değişir, bu yüzden bölgeyi parçalayıp her parçada üst − alt integralini toplarsın. İşaretli integralin tuzağını da göreceksin.",
  bolumler: [
    {
      baslik: "Üstteki eğri değişince",
      kisa: "Her kesişimde üst ve alt yer değiştirir; alan parça parça bulunur.",
      bloklar: [
        {
          tip: "not",
          metin: "İki eğri yalnızca iki noktada kesişirse üstte hep aynı eğri kalır ve tek bir integral yeter. **Üç ya da daha fazla kesişim** varsa eğriler birbirini geçer: bir aralıkta f üstte, sonrakinde g üstte olur. Tek integral alırsan pozitif ve negatif parçalar birbirini götürür."
        },
        {
          tip: "formul",
          parcalar: [
            {
              t: "A",
              alt: "toplam alan"
            },
            "=",
            {
              t: "∫ₐᵇ |f(x) − g(x)| dx",
              alt: "mutlak değerli tek integral"
            },
            "=",
            {
              t: "∫ₐᶜ (f − g) dx + ∫ᶜᵇ (g − f) dx",
              alt: "kesişimde bölünmüş hali"
            }
          ],
          aciklama: "Mutlak değer, her parçada \"üst − alt\" demenin kısa yazılışıdır. Parçalama noktaları ==kesişimlerdir== (f = g)."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔀",
              terim: "Points of intersection",
              tr: "kesişim noktaları",
              tanim: "f(x) = g(x) denkleminin çözümleri. Üstteki eğri bu noktalarda değişebilir; bölgeyi parçalara ayıran sınırlar bunlardır.",
              ornek: "x(x − 2)(x − 4) = 0 ise parçalar [0, 2] ve [2, 4]."
            },
            {
              ikon: "🧲",
              terim: "Enclosed region",
              tr: "kapalı bölge",
              tanim: "İki eğrinin kesişimleri arasında kalan bölge. Soru \"enclosed\" diyorsa sınırları kesişimlerden alırsın.",
              ornek: "Üç kesişim iki ayrı kapalı bölge verir."
            }
          ]
        }
      ]
    },
    {
      baslik: "Üç kesişimli bir bölge",
      kisa: "Kesişimleri bul, aralıkları ayır, her aralıkta üst − alt al.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "f(x) = x³ − 6x² + 10x ve g(x) = 2x",
          xlabel: "x",
          ylabel: "y",
          xmax: 5,
          ymax: 9,
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
              v: 2,
              label: "2"
            },
            {
              v: 4,
              label: "4"
            },
            {
              v: 6,
              label: "6"
            },
            {
              v: 8,
              label: "8"
            }
          ],
          ogeler: [
            {
              id: "f",
              tip: "egri",
              renk: 0,
              etiket: "f",
              noktalar: [[0, 0], [0.25, 2.141], [0.5, 3.625], [0.75, 4.547], [1, 5], [1.25, 5.078], [1.5, 4.875], [1.75, 4.484], [2, 4], [2.25, 3.516], [2.5, 3.125], [2.75, 2.922], [3, 3], [3.25, 3.453], [3.5, 4.375], [3.75, 5.859], [4, 8]]
            },
            {
              id: "g",
              tip: "cizgi",
              renk: 2,
              from: [0, 0],
              to: [4, 8],
              etiket: "g"
            },
            {
              id: "p0",
              tip: "nokta",
              renk: 1,
              x: 0,
              y: 0,
              etiket: "0",
              gizli: true
            },
            {
              id: "p2",
              tip: "nokta",
              renk: 1,
              x: 2,
              y: 4,
              etiket: "2",
              gizli: true
            },
            {
              id: "p4",
              tip: "nokta",
              renk: 1,
              x: 4,
              y: 8,
              etiket: "4",
              gizli: true
            },
            {
              id: "a1",
              tip: "alan",
              renk: 0,
              gizli: true,
              noktalar: [[0, 0], [0.1, 0.941], [0.2, 1.768], [0.3, 2.487], [0.4, 3.104], [0.5, 3.625], [0.6, 4.056], [0.7, 4.403], [0.8, 4.672], [0.9, 4.869], [1, 5], [1.1, 5.071], [1.2, 5.088], [1.3, 5.057], [1.4, 4.984], [1.5, 4.875], [1.6, 4.736], [1.7, 4.573], [1.8, 4.392], [1.9, 4.199], [2, 4], [2, 4], [1.9, 3.8], [1.8, 3.6], [1.7, 3.4], [1.6, 3.2], [1.5, 3], [1.4, 2.8], [1.3, 2.6], [1.2, 2.4], [1.1, 2.2], [1, 2], [0.9, 1.8], [0.8, 1.6], [0.7, 1.4], [0.6, 1.2], [0.5, 1], [0.4, 0.8], [0.3, 0.6], [0.2, 0.4], [0.1, 0.2], [0, 0]]
            },
            {
              id: "t1",
              tip: "yazi",
              renk: 0,
              x: 1,
              y: 3.5,
              metin: "4",
              gizli: true
            },
            {
              id: "a2",
              tip: "alan",
              renk: 2,
              gizli: true,
              noktalar: [[2, 4], [2.1, 4.2], [2.2, 4.4], [2.3, 4.6], [2.4, 4.8], [2.5, 5], [2.6, 5.2], [2.7, 5.4], [2.8, 5.6], [2.9, 5.8], [3, 6], [3.1, 6.2], [3.2, 6.4], [3.3, 6.6], [3.4, 6.8], [3.5, 7], [3.6, 7.2], [3.7, 7.4], [3.8, 7.6], [3.9, 7.8], [4, 8], [4, 8], [3.9, 7.059], [3.8, 6.232], [3.7, 5.513], [3.6, 4.896], [3.5, 4.375], [3.4, 3.944], [3.3, 3.597], [3.2, 3.328], [3.1, 3.131], [3, 3], [2.9, 2.929], [2.8, 2.912], [2.7, 2.943], [2.6, 3.016], [2.5, 3.125], [2.4, 3.264], [2.3, 3.427], [2.2, 3.608], [2.1, 3.801], [2, 4]]
            },
            {
              id: "t2",
              tip: "yazi",
              renk: 2,
              x: 3,
              y: 4.5,
              metin: "4",
              gizli: true
            },
            {
              id: "tt",
              tip: "yazi",
              renk: 1,
              x: 2.6,
              y: 8.3,
              metin: "A = 8, ∫(f − g) = 0",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Kübik eğri f ve doğru g birbirini geçiyor."
            },
            {
              metin: "f − g = x³ − 6x² + 8x = x(x − 2)(x − 4) = 0 → kesişimler x = 0, 2, 4.",
              goster: [
                "p0",
                "p2",
                "p4"
              ]
            },
            {
              metin: "0 < x < 2: f üstte (x = 1'de f = 5, g = 2). Bu parçanın alanı ∫₀² (f − g) dx = 4.",
              goster: [
                "a1",
                "t1"
              ]
            },
            {
              metin: "2 < x < 4: g üstte (x = 3'te g = 6, f = 3). Bu parçanın alanı ∫₂⁴ (g − f) dx = 4.",
              goster: [
                "a2",
                "t2"
              ]
            },
            {
              metin: "Toplam alan 4 + 4 = 8. Ama işaretli ∫₀⁴ (f − g) dx = 4 + (−4) = 0: iki parça birbirini götürür.",
              goster: [
                "tt"
              ]
            }
          ]
        },
        {
          tip: "tuzak",
          metin: "Tek integral \"∫ (f − g)\" yazmak üç kesişimli bölgelerde en sık yapılan hatadır; sonuç sıfır çıkabilir.",
          yanlis: "A = ∫₀⁴ (f − g) dx = 0.",
          dogru: "Kesişimlerde böl ve her parçada üst − alt al: A = ∫₀² (f − g) dx + ∫₂⁴ (g − f) dx = 8."
        }
      ]
    },
    {
      baslik: "Hesaplama adımları",
      kisa: "Böl, her parçada üst − alt integralini al, toplamı yaz.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Dört adım",
          adimlar: [
            {
              baslik: "Kesişimleri bul",
              metin: "f(x) = g(x) denklemini çöz (çarpanlara ayır ya da makineyle)."
            },
            {
              baslik: "Aralıkları ayır",
              metin: "Ardışık iki kesişim bir parçadır."
            },
            {
              baslik: "Üstü belirle",
              metin: "Her aralıkta bir test noktası al; büyük değer üsttedir."
            },
            {
              baslik: "Topla",
              metin: "Her parçada üst − alt integralini hesapla, toplamı yaz."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "f − g = x³ − 6x² + 8x",
          durum: "Toplam alanı hesapla.",
          adimlar: [
            "Antitürev: F(x) = x⁴/4 − 2x³ + 4x².",
            "F(0) = 0, F(2) = 4 − 16 + 16 = 4, F(4) = 64 − 128 + 64 = 0.",
            "0 ile 2 arası: F(2) − F(0) = 4 (f üstte, pozitif).",
            "2 ile 4 arası: F(4) − F(2) = −4; g üstte olduğu için alan |−4| = 4.",
            "Toplam alan 4 + 4 = 8."
          ],
          sonuc: "A = 8"
        },
        {
          tip: "ornek",
          baslik: "y = x³ ve y = x",
          durum: "Aralarında kalan kapalı bölgelerin toplam alanı kaç?",
          adimlar: [
            "x³ = x → x(x − 1)(x + 1) = 0 → x = −1, 0, 1.",
            "Grafik orijine göre simetrik. 0 ile 1 arasında x üstte: ∫₀¹ (x − x³) dx = 1/2 − 1/4 = 1/4.",
            "−1 ile 0 arasında x³ üstte ve alan yine 1/4 (simetri).",
            "Toplam: 1/4 + 1/4 = 1/2. İşaretli tek integral ∫₋₁¹ (x − x³) dx = 0 olurdu."
          ],
          sonuc: "A = 1/2"
        }
      ]
    },
    {
      baslik: "Alan mı, işaretli integral mi?",
      kisa: "Alan mutlak değer ister; işaretli integral eksiyi götürür.",
      bloklar: [
        {
          tip: "ikili",
          sol: {
            ikon: "📐",
            baslik: "*Area* (alan)",
            maddeler: [
              "Hep pozitif",
              "Parçala: üst − alt",
              "∫ |f − g| dx"
            ]
          },
          sag: {
            ikon: "➕",
            baslik: "*Signed integral*",
            maddeler: [
              "Eksi ya da sıfır olabilir",
              "Tek integral: ∫ (f − g) dx",
              "Net değişim anlamı taşır"
            ]
          },
          oyun: [
            {
              metin: "∫₀⁴ (f − g) dx = 0 çıktı.",
              cevap: "sag",
              neden: "İşaretli integral; pozitif ve negatif parçalar götürüldü."
            },
            {
              metin: "Her kesişim aralığında üst − alt alınıp toplandı.",
              cevap: "sol",
              neden: "Bu, gerçek alan hesabıdır."
            },
            {
              metin: "Hesap makinesinde fnInt(abs(f − g), x, 0, 4).",
              cevap: "sol",
              neden: "Mutlak değer parçalamayı otomatik yapar; sonuç alandır."
            },
            {
              metin: "Sonuç eksi: −3,2.",
              cevap: "sag",
              neden: "Alan eksi olamaz; eksi sonuç işaretli integraldir."
            }
          ]
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "🧮",
              baslik: "Hesap makineli bölüm",
              metin: "Kesişimleri makineyle bul, değerleri A, B, C olarak sakla; ∫ₐᵇ |f − g| ya da parça parça integral al."
            },
            {
              ikon: "📝",
              baslik: "Cümle",
              metin: "\"f ve g, x = 0, 2, 4'te kesişir; f, (0, 2)'de g'nin üstündedir. Alan = ∫₀² (f − g) + ∫₂⁴ (g − f).\" Bu kalıp gerekçedir."
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
            "İkiden çok kesişimde üstteki eğri değişir; alanı tek integralle bulma.",
            "Önce f(x) = g(x) denklemini çöz: kesişimler parçalama noktalarıdır.",
            "Her aralıkta bir test noktası al, hangi eğrinin üstte olduğunu belirle.",
            "Alan = ∫ |f − g| dx = parçalardaki (üst − alt) integrallerinin toplamı.",
            "İşaretli ∫(f − g) dx sıfır ya da eksi çıkabilir; alan olamaz.",
            "Simetri varsa bir parçayı hesaplayıp ikiyle çarpabilirsin (ör. x³ ve x).",
            "Hesap makinesi: kesişimleri sakla, integrale abs() ya da parçalı integral yaz.",
            "Cevabında parçalama noktalarını ve hangi eğrinin üstte olduğunu belirt."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "y = x³ ve y = x eğrileri arasında kalan kapalı bölgelerin toplam alanı kaçtır?",
      opts: [
        "0",
        "1/4",
        "1/2",
        "1"
      ],
      a: 2,
      why: "Kesişimler x = −1, 0, 1. İki bölge simetrik, her biri ∫₀¹ (x − x³) dx = 1/4. Toplam 1/2. 0, ∫₋₁¹ (x − x³) dx işaretli integralidir; 1/4 yalnızca bir bölgedir."
    },
    {
      q: "f ve g, x = 1, 3, 5'te kesişir. Tabloda verilen değerlere göre (1, 3)'te f > g, (3, 5)'te g > f'dir. Eğriler arasındaki toplam alan hangisine eşittir?",
      opts: [
        "∫₁⁵ (f − g) dx",
        "∫₁³ (f − g) dx + ∫₃⁵ (g − f) dx",
        "∫₁³ (g − f) dx + ∫₃⁵ (f − g) dx",
        "|∫₁⁵ (f − g) dx|"
      ],
      a: 1,
      fig: {
        type: "table",
        head: [
          "x",
          "2",
          "4"
        ],
        rows: [
          [
            "f(x)",
            "7",
            "3"
          ],
          [
            "g(x)",
            "5",
            "6"
          ]
        ]
      },
      why: "x = 2'de f > g, x = 4'te g > f. Her aralıkta üst − alt alınıp toplanır. Birinci ve dördüncü şıklar işaretli integrali kullanır, parçalar götürülebilir; üçüncü şık üst ve altı ters kurar."
    },
    {
      q: "f ve g sürekli ve x = 0, 2, 5'te kesişir. ∫₀² (f − g) dx = 3 ve ∫₂⁵ (f − g) dx = −7 ise eğrilerin sınırladığı toplam alan kaçtır?",
      opts: [
        "−4",
        "4",
        "−10",
        "10"
      ],
      a: 3,
      why: "İlk parçada f üstte: alan 3. İkinci parça negatif olduğu için g üstte; alan |−7| = 7. Toplam 3 + 7 = 10. −4 ve 4, ∫₀⁵ (f − g) = −4 işaretli sonucundan türer."
    },
    {
      q: "f(x) = x³ − 6x² + 8x eğrisi ile x ekseni arasındaki kapalı bölgelerin toplam alanı kaçtır?",
      opts: [
        "0",
        "4",
        "8",
        "16"
      ],
      a: 2,
      why: "f = x(x − 2)(x − 4); kökler 0, 2, 4. ∫₀² f = 4 ve ∫₂⁴ f = −4. Alan |4| + |−4| = 8. ∫₀⁴ f dx = 0 işaretli integraldir ve alanı vermez."
    },
    {
      q: "f ve g sürekli, a < c olsun ve ∫ₐᶜ (f(x) − g(x)) dx = 0 olduğunu biliyoruz. Bu bilgiden ne çıkar?",
      opts: [
        "f − g pozitif ve negatif parçalara sahip olup bunlar birbirini götürmüş olabilir; alan sıfır olmak zorunda değil",
        "Eğriler arasındaki alan sıfırdır",
        "f ve g aynı fonksiyondur",
        "Eğriler [a, c] içinde hiç kesişmez"
      ],
      a: 0,
      why: "İşaretli integral sıfırken alan pozitif olabilir (ör. x(x − 2)(x − 4) için ∫₀⁴ = 0 ama alan 8). Alanın sıfır olması için f − g her yerde sıfır olmalıdır, ikinci ve üçüncü şık bunu varsayar."
    }
  ]
};
