/* Kitpath not defteri · cb801 · AP Calculus BC 8.1
   Video kiti yok; içerik College Board CED öğrenme hedeflerine göre yazıldı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb801",
  amac: "Bu konu bir fonksiyonun bir aralıktaki *average value* yani ortalama değerini anlatıyor: eğrinin altındaki alanı aralığın genişliğine bölmek. Formülü, dikdörtgen yorumunu, tablodan hesabı ve ortalama değişim hızıyla bağlantıyı öğreneceksin.",
  bolumler: [
    {
      baslik: "Sürekli değişen bir şeyin ortalaması",
      kisa: "Ortalama değer, toplam birikimin aralık uzunluğuna bölünmüşüdür.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🌡️",
          baslik: "Günün ortalama sıcaklığı",
          metin: "Sabah 10 °C, öğlen 18 °C, akşam 14 °C. Gün boyunca sıcaklık sürekli değişti; bir kez ölçüp bölmek yetmez. Çözüm: sıcaklık eğrisinin altındaki **alanı** bul, günün uzunluğuna böl. Bu, eğriyle aynı alanı veren **düz bir dikdörtgenin yüksekliğidir**."
        },
        {
          tip: "formul",
          parcalar: [
            {
              t: "f_ort",
              alt: "ortalama değer"
            },
            "=",
            {
              t: "1 / (b − a)",
              alt: "aralığın genişliğinin tersi"
            },
            "×",
            {
              t: "∫ₐᵇ f(x) dx",
              alt: "eğrinin altındaki net alan"
            }
          ],
          aciklama: "Sıradan ortalama gibi: ==toplam ÷ uzunluk==. Burada toplam, integraldir. Birimi f'nin birimidir (alan ÷ genişlik)."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📊",
              terim: "Average value",
              tr: "ortalama değer",
              tanim: "f'nin [a, b] üzerindeki ortalama değeri 1/(b − a) · ∫f(x)dx sayısıdır.",
              ornek: "f(x) = x², [0, 3] üzerinde: 9 ÷ 3 = 3."
            },
            {
              ikon: "🎯",
              terim: "Mean Value Theorem for Integrals",
              tr: "integraller için ortalama değer teoremi",
              tanim: "f [a, b]'de sürekliyse, f(c) = ortalama değer olan en az bir c vardır: fonksiyon ortalamasına bir yerde ulaşır.",
              ornek: "x² için f(c) = 3 olan c = √3 ≈ 1,73 aralığın içinde."
            }
          ]
        }
      ]
    },
    {
      baslik: "Dikdörtgen yorumu",
      kisa: "Eğri altındaki alan, ortalama yükseklikli dikdörtgenin alanına eşittir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "f(x) = x², [0, 3] aralığı",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 10,
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
            }
          ],
          yticks: [
            {
              v: 3,
              label: "3"
            },
            {
              v: 9,
              label: "9"
            }
          ],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              renk: 0,
              etiket: "f",
              noktalar: [[0, 0], [0.25, 0.063], [0.5, 0.25], [0.75, 0.563], [1, 1], [1.25, 1.563], [1.5, 2.25], [1.75, 3.063], [2, 4], [2.25, 5.063], [2.5, 6.25], [2.75, 7.563], [3, 9]]
            },
            {
              id: "a",
              tip: "alan",
              renk: 0,
              gizli: true,
              noktalar: [[0, 0], [0, 0], [0.125, 0.016], [0.25, 0.063], [0.375, 0.141], [0.5, 0.25], [0.625, 0.391], [0.75, 0.563], [0.875, 0.766], [1, 1], [1.125, 1.266], [1.25, 1.563], [1.375, 1.891], [1.5, 2.25], [1.625, 2.641], [1.75, 3.063], [1.875, 3.516], [2, 4], [2.125, 4.516], [2.25, 5.063], [2.375, 5.641], [2.5, 6.25], [2.625, 6.891], [2.75, 7.563], [2.875, 8.266], [3, 9], [3, 0]]
            },
            {
              id: "ta",
              tip: "yazi",
              renk: 0,
              x: 2.4,
              y: 2,
              metin: "Alan = 9",
              gizli: true
            },
            {
              id: "r",
              tip: "alan",
              renk: 2,
              gizli: true,
              noktalar: [[0, 0], [0, 3], [3, 3], [3, 0]]
            },
            {
              id: "l",
              tip: "cizgi",
              renk: 2,
              from: [0, 3],
              to: [4, 3],
              etiket: "ort = 3",
              gizli: true
            },
            {
              id: "p",
              tip: "nokta",
              renk: 2,
              x: 1.732,
              y: 3,
              etiket: "c = √3",
              kilavuz: true,
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Eğri y = x², 0'dan 3'e. Yükseklik değişiyor: 0'dan 9'a."
            },
            {
              metin: "Eğrinin altındaki alan ∫₀³ x² dx = 9.",
              goster: [
                "a",
                "ta"
              ]
            },
            {
              metin: "Aynı alanı 3 birim genişlikli bir dikdörtgenle verelim: yüksekliği 9 ÷ 3 = 3. İşte ortalama değer.",
              gizle: [
                "a",
                "ta"
              ],
              goster: [
                "r",
                "l"
              ]
            },
            {
              metin: "Eğri y = 3 düzeyine x = √3 ≈ 1,73'te değer: f(c) = ortalama değer olan c bu.",
              goster: [
                "p"
              ]
            }
          ]
        },
        {
          tip: "tuzak",
          metin: "Ortalama değer, uç noktaların ortalaması değildir. Eğri düz bir doğru değilse bu iki sayı farklıdır.",
          yanlis: "x² için [0, 3]'te ortalama = (0 + 9) ÷ 2 = 4,5.",
          dogru: "Doğrusu 9 ÷ 3 = 3. Önce integrali al, sonra (b − a)'ya böl."
        }
      ]
    },
    {
      baslik: "İntegralle hesaplama",
      kisa: "Antitürevi bul, sınırları koy, sonucu b − a'ya böl.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Üç adım",
          adimlar: [
            {
              baslik: "Genişliği yaz",
              metin: "b − a değerini hesapla; bölen bu olacak."
            },
            {
              baslik: "İntegrali al",
              metin: "∫ₐᵇ f(x)dx hesabını yap (antitürev ya da hesap makinesi)."
            },
            {
              baslik: "Böl",
              metin: "İntegral ÷ (b − a). Birimi yazmayı unutma."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "f(x) = x³, [1, 3]",
          durum: "Ortalama değer kaç? f(c) bu değere eşit olan c kaç?",
          adimlar: [
            "Genişlik: 3 − 1 = 2.",
            "İntegral: ∫₁³ x³ dx = [x⁴/4]₁³ = 81/4 − 1/4 = 20.",
            "Ortalama: 20 ÷ 2 = 10.",
            "f(c) = 10 için c³ = 10, c ≈ 2,154. Bu sayı [1, 3] içinde."
          ],
          sonuc: "f_ort = 10; c ≈ 2,154"
        },
        {
          tip: "ornek",
          baslik: "f(x) = sin x, [0, π]",
          durum: "Ortalama değer kaç?",
          adimlar: [
            "Genişlik: π − 0 = π.",
            "İntegral: ∫₀^π sin x dx = [−cos x]₀^π = 1 − (−1) = 2.",
            "Ortalama: 2 ÷ π ≈ 0,637."
          ],
          sonuc: "f_ort = 2/π ≈ 0,64"
        }
      ]
    },
    {
      baslik: "Tablodan ortalama değer",
      kisa: "Tablodaki alanı yamuklarla tahmin et, sonra genişliğe böl.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Okulun odası: sıcaklık (°C)",
          head: [
            "t (saat)",
            "0",
            "2",
            "4",
            "6"
          ],
          rows: [
            [
              "T(t)",
              "10",
              "14",
              "18",
              "16"
            ]
          ],
          not: "Yamuk (trapezoidal) toplamı: her aralık için genişlik × (iki uç değerin ortalaması)."
        },
        {
          tip: "ornek",
          baslik: "Yamuklarla ortalama sıcaklık",
          durum: "[0, 6] üzerinde T'nin ortalama değerini 3 yamukla tahmin et.",
          adimlar: [
            "[0, 2]: 2 · (10 + 14)/2 = 24.",
            "[2, 4]: 2 · (14 + 18)/2 = 32.",
            "[4, 6]: 2 · (18 + 16)/2 = 34.",
            "Toplam alan ≈ 24 + 32 + 34 = 90. Ortalama ≈ 90 ÷ 6 = 15."
          ],
          sonuc: "Ortalama sıcaklık ≈ 15 °C"
        }
      ]
    },
    {
      baslik: "Ortalama değer ile ortalama değişim hızı",
      kisa: "f′'nün ortalama değeri, f'nin ortalama değişim hızıdır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            {
              t: "1/(b − a) · ∫ₐᵇ f′(x) dx",
              alt: "f′'nün ortalama değeri"
            },
            "=",
            {
              t: "(f(b) − f(a)) / (b − a)",
              alt: "f'nin ortalama değişim hızı"
            }
          ],
          aciklama: "Analizin Temel Teoremi sayesinde ∫f′ = f(b) − f(a). İki ayrı fikir aynı sayıyı verir."
        },
        {
          tip: "ikili",
          sol: {
            ikon: "📊",
            baslik: "*Average value* of f",
            maddeler: [
              "1/(b − a) · ∫f dx",
              "f'nin kendisinin ortalaması"
            ]
          },
          sag: {
            ikon: "📈",
            baslik: "*Average rate of change* of f",
            maddeler: [
              "(f(b) − f(a))/(b − a)",
              "f′'nün ortalaması ile aynı"
            ]
          },
          oyun: [
            {
              metin: "Bir araç konumdan ibaretken hızının ortalama değeri.",
              cevap: "sag",
              neden: "Konumun ortalama değişim hızı = hızın ortalama değeri."
            },
            {
              metin: "Bir günün sıcaklık eğrisi T(t) için ortalama sıcaklık.",
              cevap: "sol",
              neden: "T'nin kendisinin ortalama değeri: integral ÷ süre."
            },
            {
              metin: "(f(5) − f(1)) / 4",
              cevap: "sag",
              neden: "Uç değerler farkı ÷ genişlik: ortalama değişim hızı."
            },
            {
              metin: "(1/6) · ∫₀⁶ r(t) dt",
              cevap: "sol",
              neden: "r'nin integrali ÷ süre: r'nin ortalama değeri."
            }
          ]
        }
      ]
    },
    {
      baslik: "Sınavda yorum ve birim",
      kisa: "Cevabı bağlamda, birimiyle ve aralığı belirterek yaz.",
      bloklar: [
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "🧾",
              baslik: "Cümle kalıbı",
              metin: "\"Ortalama değer, 0'dan 6'ya saatte 15 °C'dir\" gibi yaz: ne, hangi aralıkta, hangi birimle."
            },
            {
              ikon: "📐",
              baslik: "Birim",
              metin: "İntegralin birimi = f'nin birimi × x'in birimi; ortalama değerin birimi f'nin birimi."
            },
            {
              ikon: "🧮",
              baslik: "Hesap makinesi",
              metin: "İntegrali makineye yaptırabilirsin; yine de önce ifadeyi yaz: (1/(b − a)) ∫ₐᵇ f(x)dx."
            }
          ]
        },
        {
          tip: "tuzak",
          metin: "Ortalama değer sorusunda en sık hata integralin kendisini cevap yazmaktır.",
          yanlis: "∫₁³ x³ dx = 20, cevap 20.",
          dogru: "Ortalama değer 20 ÷ 2 = 10. Bölmeyi unutursan başka bir şeyi (toplam birikimi) bulursun."
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
            "Ortalama değer: f_ort = 1/(b − a) · ∫ₐᵇ f(x)dx. Önce integral, sonra genişliğe bölme.",
            "Geometrik yorum: eğri altındaki alan = yüksekliği f_ort, genişliği b − a olan dikdörtgenin alanı.",
            "Teorem: f sürekliyse f(c) = f_ort olan en az bir c ∈ [a, b] vardır.",
            "Ortalama değer, uç noktaların ortalaması değildir.",
            "Tabloda alanı yamuk (ya da Riemann) toplamıyla tahmin et, sonra b − a'ya böl.",
            "f′'nün ortalama değeri = (f(b) − f(a)) / (b − a) = f'nin ortalama değişim hızı.",
            "Cevabı bağlamda, aralıkla ve f'nin birimiyle yaz."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "f(x) = 3x² fonksiyonunun [1, 3] aralığındaki *average value* değeri kaçtır?",
      opts: [
        "8",
        "13",
        "26",
        "12"
      ],
      a: 1,
      why: "∫₁³ 3x² dx = [x³]₁³ = 27 − 1 = 26 ve genişlik 2: 26 ÷ 2 = 13. 26 yalnızca integraldir (bölme unutulmuş); 12 ise orta nokta değeri f(2)'dir, ortalama değil."
    },
    {
      q: "Bir sensörün ölçtüğü değerler tabloda. [0, 4] üzerinde yamuk (trapezoidal) toplamıyla f'nin ortalama değeri tahmini kaçtır?",
      opts: [
        "4,5",
        "5",
        "22",
        "5,5"
      ],
      a: 3,
      fig: {
        type: "table",
        head: [
          "t",
          "0",
          "1",
          "3",
          "4"
        ],
        rows: [
          [
            "f(t)",
            "2",
            "4",
            "8",
            "6"
          ]
        ]
      },
      why: "Alan ≈ 1·(2+4)/2 + 2·(4+8)/2 + 1·(8+6)/2 = 3 + 12 + 7 = 22; 22 ÷ 4 = 5,5. 5 değeri dört değerin düz ortalamasıdır; aralık genişlikleri eşit olmadığı için yanlış."
    },
    {
      q: "f, [2, 6] üzerinde süreklidir ve ortalama değeri 5'tir. ∫₂⁶ (2f(x) + 1) dx kaçtır?",
      opts: [
        "44",
        "41",
        "21",
        "11"
      ],
      a: 0,
      why: "∫₂⁶ f = 5 · 4 = 20. Sonra ∫(2f + 1) = 2 · 20 + 1 · 4 = 44. 41 sabitin integralinde genişliği (4) atlar; 11, 2f + 1'in ortalama değeridir."
    },
    {
      q: "f türevlenebilir, f′ süreklidir, f(1) = 3 ve f(5) = 11'dir. f′'nün [1, 5] üzerindeki ortalama değeri kaçtır?",
      opts: [
        "8",
        "4",
        "2",
        "7"
      ],
      a: 2,
      why: "∫₁⁵ f′ = f(5) − f(1) = 8; genişlik 4; ortalama 8 ÷ 4 = 2. 8, bölme yapılmamış integraldir."
    },
    {
      q: "r(t), bir stadyum kapısından geçen kişilerin hızıdır (kişi/dakika). (1/10) · ∫₀¹⁰ r(t) dt ifadesi neyi gösterir?",
      opts: [
        "İlk 10 dakikada kapıdan geçen toplam kişi sayısını",
        "İlk 10 dakikada kapıdan geçişin ortalama hızını (kişi/dakika)",
        "10. dakikadaki anlık geçiş hızını",
        "r(t)'nin 10. dakikadaki değişim hızını"
      ],
      a: 1,
      why: "∫₀¹⁰ r toplam kişi sayısıdır; 10'a bölünce kişi/dakika biriminde ortalama hız olur. Birinci şık bölmesiz integrali, üçüncü r(10)'u anlatır."
    }
  ]
};
