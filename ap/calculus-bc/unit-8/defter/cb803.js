/* Kitora not defteri · cb803 · AP Calculus BC 8.3
   Video kiti yok; içerik College Board CED öğrenme hedeflerine göre yazıldı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb803",
  amac: "Bu konu integralin uygulamalı problemlerdeki rolünü anlatıyor: giren ve çıkan hızların farkının integrali *net change* yani net değişimi verir. Depodaki su, otoparktaki araç gibi birikimleri kurmayı, en dolu anı bulmayı ve sonucu cümleyle yorumlamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Birikim = başlangıç + net değişim",
      kisa: "Bir miktarın bugünkü değeri, ilk değeri artı hız integralidir.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🚰",
          baslik: "Okul su deposu",
          metin: "Depoda sabah 10 litre su var. Bir musluk dakikada 4 litre dolduruyor, bir vana ise zamanla artan hızla su boşaltıyor. Akşam depoda ne kadar su kalır? Her dakikadaki giriş ve çıkış hızını toplamak gerekir; bu toplam, hızların **integralidir**."
        },
        {
          tip: "formul",
          parcalar: [
            {
              t: "A(t)",
              alt: "t anındaki miktar"
            },
            "=",
            {
              t: "A(a)",
              alt: "başlangıç miktarı"
            },
            "+",
            {
              t: "∫ₐᵗ (giren − çıkan) ds",
              alt: "net değişim"
            }
          ],
          aciklama: "Türev yönünden aynı şey: ==A′(t) = giren hız − çıkan hız==. Hız pozitifse miktar artar, negatifse azalır."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔄",
              terim: "Net change",
              tr: "net değişim",
              tanim: "Hızın integrali, o sürede miktarda olan toplam değişimdir: ∫ₐᵇ A′(t)dt = A(b) − A(a).",
              ornek: "∫₀⁶ (I − O) dt = 6 ise depo 6 litre arttı."
            },
            {
              ikon: "📥",
              terim: "Rate in / rate out",
              tr: "giriş hızı / çıkış hızı",
              tanim: "Birimleri \"miktar/zaman\" olan fonksiyonlar (L/dk gibi). Miktarın kendisi değil, değişme hızıdır.",
              ornek: "I(t) = 4 L/dk muslukla gelen suyun hızı."
            }
          ]
        }
      ]
    },
    {
      baslik: "Giren ve çıkan hız grafiği",
      kisa: "Giren hız çıkandan büyükken miktar artar, küçükken azalır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "I(t) = 4 ve O(t) = t, 0 ≤ t ≤ 6 (L/dk)",
          xlabel: "t (dk)",
          ylabel: "L/dk",
          xmax: 6,
          ymax: 6,
          xticks: [
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
            }
          ],
          ogeler: [
            {
              id: "i",
              tip: "cizgi",
              renk: 0,
              from: [0, 4],
              to: [6, 4],
              etiket: "I(t)"
            },
            {
              id: "o",
              tip: "cizgi",
              renk: 2,
              from: [0, 0],
              to: [6, 6],
              etiket: "O(t)",
              gizli: true
            },
            {
              id: "a1",
              tip: "alan",
              renk: 0,
              gizli: true,
              noktalar: [[0, 0], [0, 4], [4, 4]]
            },
            {
              id: "t1",
              tip: "yazi",
              renk: 0,
              x: 1.2,
              y: 3,
              metin: "+8",
              gizli: true
            },
            {
              id: "a2",
              tip: "alan",
              renk: 2,
              gizli: true,
              noktalar: [[4, 4], [6, 4], [6, 6]]
            },
            {
              id: "t2",
              tip: "yazi",
              renk: 2,
              x: 5.5,
              y: 4.7,
              metin: "−2",
              gizli: true
            },
            {
              id: "p",
              tip: "nokta",
              renk: 1,
              x: 4,
              y: 4,
              etiket: "t = 4",
              kilavuz: true,
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Musluk sabit hızla su veriyor: I(t) = 4 L/dk."
            },
            {
              metin: "Vana zamanla artan hızla boşaltıyor: O(t) = t L/dk. t = 4'te iki hız eşitlenir.",
              goster: [
                "o"
              ]
            },
            {
              metin: "0 ≤ t ≤ 4: giren > çıkan. İki çizgi arasındaki alan +8 litre: depo doluyor.",
              goster: [
                "a1",
                "t1"
              ]
            },
            {
              metin: "4 ≤ t ≤ 6: çıkan > giren. Aradaki alan −2 litre: depo boşalıyor.",
              goster: [
                "a2",
                "t2"
              ]
            },
            {
              metin: "t = 4'te hızlar eşit ve fark artıdan eksiye döndü: depo en doludur. Net değişim 8 − 2 = +6 litre.",
              goster: [
                "p"
              ]
            }
          ]
        },
        {
          tip: "tuzak",
          metin: "Giren hızın çıkandan büyük olması depodaki suyun çok olduğunu değil, suyun arttığını söyler. Miktar ile hızı karıştırma.",
          yanlis: "I(t) = O(t) olduğu anda depo boş.",
          dogru: "Bu anda A′(t) = 0 olur; depo en dolu (ya da en boş) olabilir. Miktarı bulmak için integral al ve başlangıç miktarını ekle."
        }
      ]
    },
    {
      baslik: "En dolu ve en boş an",
      kisa: "A′ = 0 olan anları bul, işaretine bak, uçlarla karşılaştır.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Mutlak en büyük miktar",
          adimlar: [
            {
              baslik: "A′(t) = I(t) − O(t) = 0",
              metin: "Aday anları bul: t = 4."
            },
            {
              baslik: "İşareti incele",
              metin: "+ → − ise maksimum adayı; − → + ise minimum adayı."
            },
            {
              baslik: "Aday testi",
              metin: "Adayların ve aralığın iki ucunun A değerlerini hesapla, karşılaştır."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "A(0) = 10 L, A′(t) = 4 − t",
          durum: "0 ≤ t ≤ 6 için depodaki en çok su ne kadar?",
          adimlar: [
            "A(t) = 10 + ∫₀ᵗ (4 − s) ds = 10 + 4t − t²/2.",
            "A′ = 4 − t = 0 → t = 4; işaret + → −.",
            "A(0) = 10, A(4) = 10 + 16 − 8 = 18, A(6) = 10 + 24 − 18 = 16.",
            "En büyüğü 18."
          ],
          sonuc: "En çok su t = 4'te, 18 litre"
        }
      ]
    },
    {
      baslik: "Hız mı, miktar mı?",
      kisa: "Hızın birimi miktar/zaman, integralin birimi miktardır.",
      bloklar: [
        {
          tip: "ikili",
          sol: {
            ikon: "💧",
            baslik: "Hız (*rate*)",
            maddeler: [
              "Birimi L/dk",
              "I(t), O(t), A′(t)",
              "İşareti: artıyor mu azalıyor mu?"
            ]
          },
          sag: {
            ikon: "🪣",
            baslik: "Miktar (*amount*)",
            maddeler: [
              "Birimi L",
              "A(t), ∫ hız dt",
              "Değeri: ne kadar var?"
            ]
          },
          oyun: [
            {
              metin: "Vananın dakikada 3 litre su boşaltması.",
              cevap: "sol",
              neden: "L/dk birimli: bir hız."
            },
            {
              metin: "Depoda t = 4'te 18 litre su var.",
              cevap: "sag",
              neden: "L birimli: bir miktar."
            },
            {
              metin: "∫₀⁶ O(t) dt",
              cevap: "sag",
              neden: "Hızın integrali, toplam boşalan su miktarıdır."
            },
            {
              metin: "A′(5) = −1",
              cevap: "sol",
              neden: "Türev bir hızdır; eksi işaret depo boşalıyor demektir."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "İfade ne anlama gelir?",
          head: [
            "İfade",
            "Anlamı"
          ],
          rows: [
            [
              "I(t) − O(t)",
              "t anında net hız (L/dk)"
            ],
            [
              "∫ₐᵇ (I(t) − O(t)) dt",
              "a'dan b'ye depodaki net değişim (L)"
            ],
            [
              "A(a) + ∫ₐᵗ (I − O) ds",
              "t anındaki toplam su miktarı (L)"
            ],
            [
              "∫ₐᵇ I(t) dt",
              "Yalnızca içeri giren toplam su (L)"
            ]
          ]
        }
      ]
    },
    {
      baslik: "Tablodan tahmin ve cümleyle yorum",
      kisa: "Tablodan toplamı Riemann ile tahmin et; sonucu bağlamda yorumla.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Otoparka giriş hızı (araç/saat)",
          head: [
            "t (saat)",
            "0",
            "2",
            "4",
            "6"
          ],
          rows: [
            [
              "G(t)",
              "6",
              "10",
              "8",
              "4"
            ]
          ],
          not: "t = 0'da otoparkta 20 araç var."
        },
        {
          tip: "ornek",
          baslik: "Sol Riemann toplamı",
          durum: "3 alt aralıkla t = 6'daki araç sayısını tahmin et.",
          adimlar: [
            "Sol uç toplamı: 2 · (6 + 10 + 8) = 48 araç girmiş.",
            "A(6) ≈ A(0) + 48 = 20 + 48 = 68.",
            "Not: Giriş hızı 4'e düşse de pozitif olduğu için araç sayısı hep arttı."
          ],
          sonuc: "t = 6'da yaklaşık 68 araç"
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Cümle kalıbı",
              metin: "\"∫₀⁶ (I − O) dt = 6; depodaki su 0'dan 6. dakikaya kadar 6 litre artmıştır.\" Birimi ve aralığı yaz."
            },
            {
              ikon: "🧪",
              baslik: "Gerekçe kalıbı",
              metin: "*A′(t) changes from positive to negative at t = 4, so A has a local maximum there.* Gerekçesiz cevap puan getirmez."
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
            "Miktar = başlangıç + net değişim: A(t) = A(a) + ∫ₐᵗ (giren − çıkan) ds.",
            "A′(t) = giren hız − çıkan hız. Pozitifse miktar artar, negatifse azalır.",
            "∫ₐᵇ A′(t) dt = A(b) − A(a): hızın integrali net değişimdir.",
            "Hız ile miktarı ayır: hızın birimi miktar/zaman, integralinki miktar.",
            "En dolu / en boş an: A′ = 0 adayları + iki uç noktayı karşılaştır (aday testi).",
            "A′ işareti + → − değişirse yerel maksimum, − → + değişirse yerel minimum.",
            "Tablodan Riemann ya da yamuk toplamıyla tahmin et; başlangıç miktarını eklemeyi unutma.",
            "Cevabı bağlamda, aralıkla ve birimle yaz; gerekçeni işaret değişimine dayandır."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir depoda t = 0'da 30 litre su vardır. Su 2t L/dk hızla dolar ve 6 L/dk sabit hızla boşalır. t = 5'te depoda kaç litre su vardır?",
      opts: [
        "25",
        "20",
        "30",
        "−5"
      ],
      a: 0,
      why: "A(5) = 30 + ∫₀⁵ (2t − 6) dt = 30 + [t² − 6t]₀⁵ = 30 + (25 − 30) = 25. −5 yalnızca net değişimdir (başlangıç miktarı eklenmemiş). 30 net değişimi sıfır sanmaktır."
    },
    {
      q: "Şekilde bir depoya giren hız I(t) ve çıkan hız O(t) (L/dk) gösterilmiştir. 0 ≤ t ≤ 8 için depodaki su miktarı hangi t değerinde en büyüktür?",
      opts: [
        "t = 0",
        "t = 4",
        "t = 8",
        "Yalnızca A(0) bilinirse söylenebilir"
      ],
      a: 1,
      fig: {
        type: "graph",
        xlabel: "t",
        ylabel: "L/dk",
        xmax: 8,
        ymax: 8,
        lines: [
          {
            from: [0, 6],
            to: [8, 2],
            label: "I"
          },
          {
            from: [0, 4],
            to: [8, 4],
            label: "O",
            color: 1
          }
        ],
        points: [
          {
            q: 4,
            p: 4,
            label: "",
            guides: true
          }
        ],
        xticks: [
          {
            v: 4,
            label: "4"
          },
          {
            v: 8,
            label: "8"
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
          }
        ]
      },
      why: "t < 4'te I > O, yani A′ > 0 ve miktar artar; t > 4'te I < O, A′ < 0 ve miktar azalır. Artıştan azalışa geçtiği t = 4 mutlak maksimumdur; A(0)'ın değeri sonucu değiştirmez."
    },
    {
      q: "Bir otoparka girişin hızı G(t) (araç/saat) tabloda verilmiştir. t = 0'da otoparkta 20 araç vardır. Sol uç Riemann toplamıyla (3 alt aralık) t = 6'daki araç sayısı tahmini kaçtır?",
      opts: [
        "48",
        "64",
        "68",
        "88"
      ],
      a: 2,
      fig: {
        type: "table",
        head: [
          "t (saat)",
          "0",
          "2",
          "4",
          "6"
        ],
        rows: [
          [
            "G(t)",
            "6",
            "10",
            "8",
            "4"
          ]
        ]
      },
      why: "Sol toplam: 2(6 + 10 + 8) = 48 araç girmiş; 20 + 48 = 68. 48, başlangıç aracı eklenmeyen sonuçtur; 64 sağ uç toplamı (2(10+8+4) = 44) ile bulunan değerdir (20 + 44)."
    },
    {
      q: "I(t) ve O(t), bir su deposuna giren ve depodan çıkan suyun hızıdır (L/dk). ∫₀⁶ (I(t) − O(t)) dt = 6 olduğuna göre hangisi doğrudur?",
      opts: [
        "t = 6'da depoda 6 litre su vardır",
        "Depodaki su miktarı 6 dakikada ortalama 6 L/dk artmıştır",
        "Depo her an artmıştır",
        "Depodaki su miktarı t = 0'dan t = 6'ya kadar 6 litre artmıştır"
      ],
      a: 3,
      why: "Giren − çıkan hızın integrali net değişimdir: 0'dan 6. dakikaya 6 litre artış. Birinci şık başlangıç miktarını bilmeden son miktarı verir; üçüncü şık integralin işaretinden her anın pozitif olduğunu çıkarır."
    },
    {
      q: "A(t), bir depodaki su miktarını (L) gösterir ve A′(t) = I(t) − O(t) olur. Depodaki su miktarını t = 4'te veren ifade hangisidir?",
      opts: [
        "∫₀⁴ (I(t) − O(t)) dt",
        "A(0) + ∫₀⁴ (I(t) − O(t)) dt",
        "A(0) + I(4) − O(4)",
        "I(4) − O(4)"
      ],
      a: 1,
      why: "Miktar = başlangıç miktarı + net değişim. A(0) olmadan yalnızca net değişim bulunur. Üçüncü ve dördüncü şıklar hızı (L/dk) miktarla (L) karıştırır; birimleri tutmaz."
    }
  ]
};
