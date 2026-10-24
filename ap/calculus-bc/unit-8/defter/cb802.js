/* Kitpath not defteri · cb802 · AP Calculus BC 8.2
   Video kiti yok; içerik College Board CED öğrenme hedeflerine göre yazıldı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb802",
  amac: "Bu konu integralin hareket problemlerindeki işini anlatıyor: hızın integrali konum değişimini (*displacement*), hızın mutlak değerinin integrali alınan yolu (*total distance*), ivmenin integrali de hız değişimini verir. Yönü, işareti ve hızlanıp yavaşlamayı da öğreneceksin.",
  bolumler: [
    {
      baslik: "Konum, hız ve ivme zinciri",
      kisa: "Türev aşağı iner, integral yukarı çıkar: x, v, a.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            {
              t: "x(t)",
              alt: "konum"
            },
            "→ türev →",
            {
              t: "v(t) = x′(t)",
              alt: "hız"
            },
            "→ türev →",
            {
              t: "a(t) = v′(t)",
              alt: "ivme"
            }
          ],
          aciklama: "Geri dönerken integral: ==v(t) = v(0) + ∫₀ᵗ a(s) ds== ve ==x(t) = x(0) + ∫₀ᵗ v(s) ds==. Başlangıç değerini eklemeyi unutma."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "↔️",
              terim: "Displacement",
              tr: "yer değiştirme",
              tanim: "Başlangıçla bitiş konumu arasındaki işaretli fark: ∫ₐᵇ v(t) dt = x(b) − x(a). Geri gidiş eksi sayılır.",
              ornek: "Servis 3 m ileri, 3 m geri giderse yer değiştirme 0'dır."
            },
            {
              ikon: "🛣️",
              terim: "Total distance",
              tr: "alınan toplam yol",
              tanim: "Yönü hesaba katmadan yürünen yol: ∫ₐᵇ |v(t)| dt. Hiçbir zaman eksi olmaz.",
              ornek: "Aynı servis için alınan yol 6 m'dir."
            },
            {
              ikon: "⏱️",
              terim: "Speed",
              tr: "sürat",
              tanim: "Hızın mutlak değeri |v(t)|. Yönü yoktur, hep sıfırdan büyük ya da sıfırdır.",
              ornek: "v = −3 m/s ise sürat 3 m/s."
            }
          ]
        }
      ]
    },
    {
      baslik: "Yer değiştirme: işaretli alan",
      kisa: "Hız grafiğinin altındaki alan, eksenin altındayken eksi sayılır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "v(t) = t² − 4t + 3, 0 ≤ t ≤ 4 (yatay kesikli çizgi v = 0)",
          xlabel: "t",
          ylabel: "v",
          xmax: 4,
          ymax: 6,
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
              v: 5,
              label: "3"
            },
            {
              v: 2,
              label: "0"
            },
            {
              v: 1,
              label: "−1"
            }
          ],
          ogeler: [
            {
              id: "ax",
              tip: "cizgi",
              renk: 1,
              kesik: true,
              from: [0, 2],
              to: [4, 2]
            },
            {
              id: "a1",
              tip: "alan",
              renk: 0,
              gizli: true,
              noktalar: [[0, 2], [0, 5], [0.1, 4.61], [0.2, 4.24], [0.3, 3.89], [0.4, 3.56], [0.5, 3.25], [0.6, 2.96], [0.7, 2.69], [0.8, 2.44], [0.9, 2.21], [1, 2]]
            },
            {
              id: "t1",
              tip: "yazi",
              renk: 0,
              x: 0.35,
              y: 3,
              metin: "+4/3",
              gizli: true
            },
            {
              id: "a2",
              tip: "alan",
              renk: 2,
              gizli: true,
              noktalar: [[1, 2], [1, 2], [1.1, 1.81], [1.2, 1.64], [1.3, 1.49], [1.4, 1.36], [1.5, 1.25], [1.6, 1.16], [1.7, 1.09], [1.8, 1.04], [1.9, 1.01], [2, 1], [2.1, 1.01], [2.2, 1.04], [2.3, 1.09], [2.4, 1.16], [2.5, 1.25], [2.6, 1.36], [2.7, 1.49], [2.8, 1.64], [2.9, 1.81], [3, 2], [3, 2]]
            },
            {
              id: "t2",
              tip: "yazi",
              renk: 2,
              x: 2,
              y: 1.6,
              metin: "−4/3",
              gizli: true
            },
            {
              id: "a3",
              tip: "alan",
              renk: 0,
              gizli: true,
              noktalar: [[3, 2], [3, 2], [3.1, 2.21], [3.2, 2.44], [3.3, 2.69], [3.4, 2.96], [3.5, 3.25], [3.6, 3.56], [3.7, 3.89], [3.8, 4.24], [3.9, 4.61], [4, 5], [4, 2]]
            },
            {
              id: "t3",
              tip: "yazi",
              renk: 0,
              x: 3.65,
              y: 3,
              metin: "+4/3",
              gizli: true
            },
            {
              id: "c",
              tip: "egri",
              renk: 0,
              noktalar: [[0, 5], [0.25, 4.063], [0.5, 3.25], [0.75, 2.563], [1, 2], [1.25, 1.563], [1.5, 1.25], [1.75, 1.063], [2, 1], [2.25, 1.063], [2.5, 1.25], [2.75, 1.563], [3, 2], [3.25, 2.563], [3.5, 3.25], [3.75, 4.063], [4, 5]]
            }
          ],
          durumlar: [
            {
              metin: "Hız eğrisi: t = 0'da v = 3, t = 1'de v = 0, t = 2'de v = −1, t = 3'te v = 0, t = 4'te v = 3."
            },
            {
              metin: "0 ≤ t ≤ 1: v > 0, ileri gidiyor. Alan +4/3.",
              goster: [
                "a1",
                "t1"
              ]
            },
            {
              metin: "1 ≤ t ≤ 3: v < 0, geri gidiyor. İşaretli alan −4/3.",
              goster: [
                "a2",
                "t2"
              ]
            },
            {
              metin: "3 ≤ t ≤ 4: v > 0, yine ileri. Alan +4/3.",
              goster: [
                "a3",
                "t3"
              ]
            },
            {
              metin: "Yer değiştirme = 4/3 − 4/3 + 4/3 = 4/3. Alınan yol ise üçünün mutlak değerleri toplamı: 4."
            }
          ]
        },
        {
          tip: "tuzak",
          metin: "∫v dt işaretli bir sayıdır; \"ne kadar yol gitti?\" sorusunun cevabı değildir.",
          yanlis: "Alınan yol = ∫₀⁴ v dt = 4/3.",
          dogru: "Alınan yol = ∫₀⁴ |v| dt = 4. İşaret değiştirdiği yerleri bul, parçala, mutlak değer al."
        }
      ]
    },
    {
      baslik: "Alınan yol hesabı",
      kisa: "v = 0 olan anları bul, aralıkları ayır, her parçada |∫v| topla.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "v(t) = t² − 4t + 3, 0 ≤ t ≤ 4",
          durum: "Yer değiştirme ve alınan yol kaç?",
          adimlar: [
            "Antitürev: ∫v dt = t³/3 − 2t² + 3t.",
            "Yer değiştirme: 64/3 − 32 + 12 = 4/3.",
            "v = (t − 1)(t − 3) = 0 → t = 1 ve t = 3'te işaret değişir.",
            "Parçalar: ∫₀¹ v = 4/3, ∫₁³ v = −4/3, ∫₃⁴ v = 4/3.",
            "Alınan yol: |4/3| + |−4/3| + |4/3| = 4."
          ],
          sonuc: "Yer değiştirme 4/3, alınan yol 4"
        },
        {
          tip: "ikili",
          sol: {
            ikon: "↔️",
            baslik: "*Displacement*",
            maddeler: [
              "∫ₐᵇ v dt (işaretli)",
              "x(b) − x(a)",
              "Sıfır ya da eksi olabilir"
            ]
          },
          sag: {
            ikon: "🛣️",
            baslik: "*Total distance*",
            maddeler: [
              "∫ₐᵇ |v| dt",
              "Alınan yolun toplamı",
              "Asla eksi olmaz"
            ]
          },
          oyun: [
            {
              metin: "Bir öğrenci evinden okula gidip yine evine döndü; başlangıç ile bitiş aynı nokta.",
              cevap: "sol",
              neden: "Bitiş − başlangıç = 0: yer değiştirme sıfır."
            },
            {
              metin: "Bisikletin kilometre sayacında okunan artış.",
              cevap: "sag",
              neden: "Sayaç yönü saymaz, yolu toplar."
            },
            {
              metin: "x(7) − x(2)",
              cevap: "sol",
              neden: "Konum farkı = ∫₂⁷ v dt, yer değiştirme."
            },
            {
              metin: "∫₀⁵ |v(t)| dt",
              cevap: "sag",
              neden: "Mutlak değerli integral alınan yoldur."
            }
          ]
        }
      ]
    },
    {
      baslik: "İvmeden hıza ve konuma",
      kisa: "İvmenin integrali hız değişimi, hızın integrali konum değişimi.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "a(t) = 2t − 4, v(0) = 3, x(0) = 1",
          durum: "v(t)'yi, x(3)'ü ve t = 3'teki hızı bul.",
          adimlar: [
            "Hız: v(t) = v(0) + ∫₀ᵗ (2s − 4) ds = 3 + t² − 4t = t² − 4t + 3.",
            "v(3) = 9 − 12 + 3 = 0.",
            "Konum: x(3) = x(0) + ∫₀³ v dt = 1 + [t³/3 − 2t² + 3t]₀³ = 1 + (9 − 18 + 9) = 1 + 0 = 1.",
            "Başladığı yere (x = 1) geri dönmüş ve o anda duruyor."
          ],
          sonuc: "v(t) = t² − 4t + 3; x(3) = 1; v(3) = 0"
        },
        {
          tip: "tablo",
          baslik: "Hangi integral neyi verir?",
          head: [
            "İntegral",
            "Bulduğu şey",
            "Birim (m, s)"
          ],
          rows: [
            [
              "∫ₐᵇ a(t) dt",
              "Hızın değişimi v(b) − v(a)",
              "m/s"
            ],
            [
              "∫ₐᵇ v(t) dt",
              "Yer değiştirme x(b) − x(a)",
              "m"
            ],
            [
              "∫ₐᵇ |v(t)| dt",
              "Alınan toplam yol",
              "m"
            ],
            [
              "x(0) + ∫₀ᵗ v(s) ds",
              "t anındaki konum x(t)",
              "m"
            ]
          ],
          vurgu: 1,
          not: "Birim kontrolü: m/s · s = m. Birim tutmuyorsa yanlış integral almışsındır."
        }
      ]
    },
    {
      baslik: "Hızlanıyor mu, yavaşlıyor mu?",
      kisa: "v ve a aynı işaretliyse sürat artar; zıt işaretliyse azalır.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Sürat kararı",
          adimlar: [
            {
              baslik: "v işaretini bak",
              metin: "v > 0 ileri, v < 0 geri gidiş."
            },
            {
              baslik: "a işaretini bak",
              metin: "a > 0 hızı artırıcı yönde, a < 0 azaltıcı yönde."
            },
            {
              baslik: "Karşılaştır",
              metin: "Aynı işaret: ==speeding up== (sürat artar). Zıt işaret: ==slowing down== (sürat azalır)."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "v(t) = t² − 4t + 3 ve a(t) = 2t − 4 için",
          head: [
            "Aralık",
            "v",
            "a",
            "Sürat"
          ],
          rows: [
            [
              "0 < t < 1",
              "+",
              "−",
              "azalıyor"
            ],
            [
              "1 < t < 2",
              "−",
              "−",
              "artıyor"
            ],
            [
              "2 < t < 3",
              "−",
              "+",
              "azalıyor"
            ],
            [
              "3 < t < 4",
              "+",
              "+",
              "artıyor"
            ]
          ],
          vurgu: 1,
          not: "t = 1 ve t = 3'te v = 0 olup işaret değiştiriyor: yön dönüyor. t = 2'de a = 0 olup işaret değiştiriyor."
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
            "v(t) = x′(t), a(t) = v′(t). Geri dönerken integral al ve başlangıç değerini ekle.",
            "Yer değiştirme: ∫ₐᵇ v dt = x(b) − x(a). Eksi çıkabilir.",
            "Alınan yol: ∫ₐᵇ |v| dt. v = 0 olan anlarda parçala.",
            "Sürat |v|'dir; yönü yoktur.",
            "Hızın değişimi: ∫ₐᵇ a dt = v(b) − v(a).",
            "Konum: x(t) = x(0) + ∫₀ᵗ v(s) ds. Başlangıç konumunu unutma.",
            "v ve a aynı işaretliyse sürat artar; zıt işaretliyse azalır.",
            "Birimleri kontrol et: hız × zaman = konum."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir parçacık sayı doğrusunda hareket eder: v(t) = 3 − t (m/s), x(0) = 2 m. t = 5'te konumu kaç metredir?",
      opts: [
        "2,5",
        "4,5",
        "6,5",
        "8,5"
      ],
      a: 1,
      why: "x(5) = 2 + ∫₀⁵ (3 − t) dt = 2 + [3t − t²/2]₀⁵ = 2 + (15 − 12,5) = 4,5. 2,5 yalnızca yer değiştirmedir (başlangıç konumu eklenmemiş); 6,5 alınan yoldur."
    },
    {
      q: "Aynı parçacık için (v(t) = 3 − t, 0 ≤ t ≤ 5) alınan toplam yol kaç metredir?",
      opts: [
        "2,5",
        "4,5",
        "5",
        "6,5"
      ],
      a: 3,
      why: "v, t = 3'te sıfırdır ve işaret değiştirir. ∫₀³ (3 − t) dt = 4,5 ve ∫₃⁵ |3 − t| dt = 2. Toplam 6,5. 2,5 = ∫₀⁵ v dt işaretli sonuçtur (yer değiştirme)."
    },
    {
      q: "Bir bisikletin hızı bazı anlarda ölçüldü (m/s). Yamuk toplamı kullanarak t = 0'daki konumu 5 m olan bisikletin t = 6'daki konumunu tahmin edin.",
      opts: [
        "5 m",
        "9 m",
        "1 m",
        "12 m"
      ],
      a: 0,
      fig: {
        type: "table",
        head: [
          "t (s)",
          "0",
          "2",
          "4",
          "6"
        ],
        rows: [
          [
            "v(t) (m/s)",
            "3",
            "1",
            "−2",
            "−1"
          ]
        ]
      },
      why: "Yamuklar: 2·(3+1)/2 = 4; 2·(1−2)/2 = −1; 2·(−2−1)/2 = −3. Toplam 0, yani x(6) ≈ 5 + 0 = 5. 9, sol uç toplamı ile (4 m) karıştırılan sonuçtur; işaretli alanlar da toplanmalı."
    },
    {
      q: "Bir parçacığın hız ve ivmesi iki anda ölçüldü. Hangisi doğrudur?",
      opts: [
        "İkisinde de sürat artıyor",
        "t = 2'de sürat artıyor, t = 5'te azalıyor",
        "t = 2'de sürat azalıyor, t = 5'te artıyor",
        "İkisinde de sürat azalıyor"
      ],
      a: 1,
      fig: {
        type: "table",
        head: [
          "t",
          "v(t)",
          "a(t)"
        ],
        rows: [
          [
            "2",
            "−3",
            "−1"
          ],
          [
            "5",
            "−1",
            "2"
          ]
        ]
      },
      why: "t = 2'de v ve a aynı işaretli (ikisi eksi): sürat artar. t = 5'te zıt işaretli: sürat azalır. \"a eksi\" tek başına yavaşlama demek değildir; v ile karşılaştırılır."
    },
    {
      q: "a(t) = 4 − 2t (m/s²) ve v(1) = 5 m/s ise v(3) kaç m/s'dir?",
      opts: [
        "0",
        "3",
        "5",
        "9"
      ],
      a: 2,
      why: "v(3) = v(1) + ∫₁³ (4 − 2t) dt = 5 + [4t − t²]₁³ = 5 + (3 − 3) = 5. ∫ sıfır çıktığı için hız değişmedi, ivme sıfır olmasa bile. 0 seçeneği hızın değil, hız değişiminin değeridir."
    }
  ]
};
