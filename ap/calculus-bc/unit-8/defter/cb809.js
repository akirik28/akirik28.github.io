/* Kitora not defteri · cb809 · AP Calculus BC 8.13
   Video kiti yok; içerik College Board CED öğrenme hedeflerine göre yazıldı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb809",
  amac: "Bu konu düzlemdeki pürüzsüz bir eğrinin uzunluğunu anlatıyor: L = ∫√(1 + (dy/dx)²) dx. Formülün küçük dik üçgenlerden nasıl çıktığını, örneklerle hesabı ve bir cismin izlediği yolun uzunluğunun (*distance traveled*) bununla nasıl bağlandığını öğreneceksin.",
  bolumler: [
    {
      baslik: "Eğrinin uzunluğu nedir?",
      kisa: "Eğri uzunluğu, eğriyi ip gibi düzeltince çıkan uzunluktur.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🥾",
          baslik: "Haritada iki nokta",
          metin: "Haritada iki köy arasındaki kuş uçuşu mesafe 4 km, ama patika virajlarla dolanıyor ve yürüyünce 5 km tutuyor. Patikanın uzunluğunu bulmak için patikayı bir ip gibi düzeltip ölçmen gerekir. Eğrinin uzunluğu işte budur: ==arc length==, yani *arc length*."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧵",
              terim: "Arc length",
              tr: "yay uzunluğu",
              tanim: "Eğri üzerinde iki nokta arasındaki yolun uzunluğu. Kirişin (doğrudan çizgi) uzunluğundan hep büyük ya da eşittir.",
              ornek: "y = x² için (0, 0)'dan (1, 1)'e yay uzunluğu ≈ 1,479; kiriş √2 ≈ 1,414."
            },
            {
              ikon: "〰️",
              terim: "Smooth curve",
              tr: "pürüzsüz eğri",
              tanim: "Köşesi olmayan eğri. y = f(x) için f′ [a, b]'de sürekli olmalı ki formül kullanılabilsin.",
              ornek: "y = |x| için x = 0'da köşe var; formül orada parçalanır."
            }
          ]
        }
      ]
    },
    {
      baslik: "Cetvelle ölçmek: kirişler",
      kisa: "Eğriyi kısa doğru parçalarıyla kapla, uzunluklarını topla.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "y = (2/3) x^(3/2), 0 ≤ x ≤ 3: kirişlerle yaklaşım",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 4,
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
          ogeler: [
            {
              id: "c",
              tip: "egri",
              renk: 0,
              etiket: "y = (2/3)x^(3/2)",
              noktalar: [[0, 0], [0.167, 0.045], [0.333, 0.128], [0.5, 0.236], [0.667, 0.363], [0.833, 0.507], [1, 0.667], [1.167, 0.84], [1.333, 1.026], [1.5, 1.225], [1.667, 1.434], [1.833, 1.655], [2, 1.886], [2.167, 2.126], [2.333, 2.376], [2.5, 2.635], [2.667, 2.903], [2.833, 3.179], [3, 3.464]]
            },
            {
              id: "k1",
              tip: "cizgi",
              renk: 2,
              from: [0, 0],
              to: [3, 3.464],
              gizli: true
            },
            {
              id: "k20",
              tip: "cizgi",
              renk: 2,
              from: [0, 0],
              to: [1.5, 1.225],
              gizli: true
            },
            {
              id: "k21",
              tip: "cizgi",
              renk: 2,
              from: [1.5, 1.225],
              to: [3, 3.464],
              gizli: true
            },
            {
              id: "k40",
              tip: "cizgi",
              renk: 2,
              from: [0, 0],
              to: [0.75, 0.433],
              gizli: true
            },
            {
              id: "k41",
              tip: "cizgi",
              renk: 2,
              from: [0.75, 0.433],
              to: [1.5, 1.225],
              gizli: true
            },
            {
              id: "k42",
              tip: "cizgi",
              renk: 2,
              from: [1.5, 1.225],
              to: [2.25, 2.25],
              gizli: true
            },
            {
              id: "k43",
              tip: "cizgi",
              renk: 2,
              from: [2.25, 2.25],
              to: [3, 3.464],
              gizli: true
            },
            {
              id: "t",
              tip: "yazi",
              renk: 0,
              x: 1.7,
              y: 0.5,
              metin: "L = 14/3 ≈ 4,667",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Eğri (0, 0)'dan (3, 2√3 ≈ 3,46)'e uzanıyor."
            },
            {
              metin: "Tek kiriş: uzunluk √(9 + 12) = √21 ≈ 4,583. Eğriyi hafif kısa ölçer.",
              goster: [
                "k1"
              ]
            },
            {
              metin: "İki kiriş (x = 0, 1,5, 3): toplam ≈ 4,632.",
              gizle: [
                "k1"
              ],
              goster: [
                "k20",
                "k21"
              ]
            },
            {
              metin: "Dört kiriş: toplam ≈ 4,654. Kiriş sayısı arttıkça 4,662 (8 kiriş) gibi bir değere yaklaşıyor.",
              gizle: [
                "k20",
                "k21"
              ],
              goster: [
                "k40",
                "k41",
                "k42",
                "k43"
              ]
            },
            {
              metin: "Kiriş sayısı sonsuza giderken toplam L = 14/3 ≈ 4,667 değerine yaklaşır: yay uzunluğu.",
              goster: [
                "t"
              ]
            }
          ]
        }
      ]
    },
    {
      baslik: "Küçük dik üçgen ve formül",
      kisa: "ds² = dx² + dy²; her parçanın uzunluğu √(1 + f′²) dx.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Formülün çıkışı",
          adimlar: [
            {
              baslik: "Küçük dik üçgen",
              metin: "Eğrinin çok küçük parçası, dik kenarları dx ve dy olan üçgenin hipotenüsüdür: ds = √(dx² + dy²)."
            },
            {
              baslik: "dx dışarı",
              metin: "ds = √(1 + (dy/dx)²) dx, çünkü dy = f′(x) dx."
            },
            {
              baslik: "Hepsini topla",
              metin: "Parçaların toplamı integraldir."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            {
              t: "L",
              alt: "yay uzunluğu"
            },
            "=",
            {
              t: "∫ₐᵇ",
              alt: "x aralığı"
            },
            {
              t: "√( 1 + [ f′(x) ]² )",
              alt: "dilimin eğik uzunluğu"
            },
            {
              t: "dx"
            }
          ],
          aciklama: "Düz doğru kontrolü: y = 2x, [0, 3]. f′ = 2, L = ∫₀³ √5 dx = 3√5 = √(3² + 6²). Pisagor ile aynı sonuç."
        }
      ]
    },
    {
      baslik: "Hesaplama örnekleri",
      kisa: "f′'yü bul, 1 + f′²'yi tam kareye çevir, kökü kaldır.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "y = (2/3) x^(3/2), 0 ≤ x ≤ 3",
          durum: "Yay uzunluğunu bul.",
          adimlar: [
            "f′(x) = x^(1/2) = √x.",
            "1 + f′² = 1 + x.",
            "L = ∫₀³ √(1 + x) dx = [(2/3)(1 + x)^(3/2)]₀³.",
            "= (2/3)(4^(3/2) − 1) = (2/3)(8 − 1) = 14/3."
          ],
          sonuc: "L = 14/3 ≈ 4,667"
        },
        {
          tip: "ornek",
          baslik: "y = x³/6 + 1/(2x), 1 ≤ x ≤ 2",
          durum: "Yay uzunluğunu bul.",
          adimlar: [
            "f′(x) = x²/2 − 1/(2x²).",
            "1 + f′² = x⁴/4 + 1/2 + 1/(4x⁴) = (x²/2 + 1/(2x²))².",
            "Kök tam kare: √(1 + f′²) = x²/2 + 1/(2x²) (pozitif).",
            "L = [x³/6 − 1/(2x)]₁² = (4/3 − 1/4) − (1/6 − 1/2) = 17/12."
          ],
          sonuc: "L = 17/12"
        },
        {
          tip: "tuzak",
          metin: "Kök içindeki 1'i ve f′'nün karesini unutmak sık hatadır; ayrıca yay uzunluğu ile alan karışır.",
          yanlis: "L = ∫√(f′(x)) dx ya da L = ∫ f(x) dx.",
          dogru: "L = ∫√(1 + [f′(x)]²) dx. Türevi al, karele, 1 ekle, sonra kök."
        }
      ]
    },
    {
      baslik: "Alınan yol ve hesap makinesi",
      kisa: "Düzlemde izlenen yolun uzunluğu, yayın uzunluğudur.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Parçacık x(t) = 3t, y(t) = 4t, 0 ≤ t ≤ 2",
          durum: "Alınan yol kaç?",
          adimlar: [
            "Hız bileşenleri: dx/dt = 3, dy/dt = 4. Sürat = √(3² + 4²) = 5.",
            "Alınan yol = ∫₀² 5 dt = 10.",
            "Kontrol: yol y = (4/3)x doğrusunda x = 0…6. L = ∫₀⁶ √(1 + 16/9) dx = 6 · 5/3 = 10."
          ],
          sonuc: "Alınan yol = 10"
        },
        {
          tip: "ikili",
          sol: {
            ikon: "📏",
            baslik: "Uzunluk (*arc length*)",
            maddeler: [
              "∫ √(1 + f′²) dx",
              "Birimi cm, m gibi uzunluk"
            ]
          },
          sag: {
            ikon: "🟩",
            baslik: "Alan (*area*)",
            maddeler: [
              "∫ f(x) dx",
              "Birimi cm², m² gibi"
            ]
          },
          oyun: [
            {
              metin: "Patikanın virajlar dahil yürüyüş mesafesi.",
              cevap: "sol",
              neden: "Eğri boyunca ölçülen uzunluk."
            },
            {
              metin: "Eğri ile x ekseni arasında kalan bölge.",
              cevap: "sag",
              neden: "Bir bölgenin büyüklüğü: alan."
            },
            {
              metin: "f′'nün kareli ifadesi 1'e eklenip kök alınıyor.",
              cevap: "sol",
              neden: "Bu, yay uzunluğu integrandıdır."
            },
            {
              metin: "Sonuç m² biriminde.",
              cevap: "sag",
              neden: "Uzunluk m olur; m² alanı gösterir."
            }
          ]
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "🧮",
              baslik: "Hesap makinesi",
              metin: "√(1 + f′²) çoğu zaman düzgün bir ifade olmaz. y = x², [0, 1] için ∫₀¹ √(1 + 4x²) dx ≈ 1,479; makineyle hesapla ve integrali yaz."
            },
            {
              ikon: "📐",
              baslik: "Yol ve sürat",
              metin: "Doğru üzerinde yol ∫|v| dt (8.2); düzlemde sürat √(vₓ² + v_y²) olur (parametrik eğrileri Ünite 9'da göreceksin). Hepsi aynı fikir: yol = sürat integrali."
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
            "Yay uzunluğu eğriyi düzeltince çıkan uzunluktur; kirişten uzundur.",
            "Küçük dik üçgen: ds = √(dx² + dy²) = √(1 + (dy/dx)²) dx.",
            "L = ∫ₐᵇ √(1 + [f′(x)]²) dx. f′ [a, b]'de sürekli olmalı.",
            "Adımlar: f′'yü bul, kareyle, 1 ekle, kök al, entegre et.",
            "1 + f′² çoğunlukla tam kare olacak biçimde seçilir: kökü kaldır.",
            "Kontrol: doğru parçası için sonuç Pisagor mesafesine eşit olmalı.",
            "Alınan yol, izlenen yolun uzunluğudur: tek boyutta ∫|v| dt, düzlemde ∫ sürat dt.",
            "Zor integrallerde hesap makinesi kullan; birimi uzunluk olarak yaz."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "y = x²/2 − (ln x)/4 eğrisinin 1 ≤ x ≤ 2 arasındaki yay uzunluğu kaçtır?",
      opts: [
        "3/2 − (ln 2)/4",
        "3/2",
        "3/2 + (ln 2)/4",
        "2 + (ln 2)/4"
      ],
      a: 2,
      why: "f′ = x − 1/(4x), 1 + f′² = (x + 1/(4x))². L = ∫₁² (x + 1/(4x)) dx = [x²/2 + (ln x)/4]₁² = 3/2 + (ln 2)/4. Yalnızca 3/2 almak ikinci terimi atlamak, ilk şık ise işareti yanlış kurmaktır."
    },
    {
      q: "y = sin x eğrisinin 0 ≤ x ≤ π arasındaki yay uzunluğunu hangi integral verir?",
      opts: [
        "∫₀^π √(1 + sin² x) dx",
        "∫₀^π (1 + cos² x) dx",
        "∫₀^π √(1 + cos x) dx",
        "∫₀^π √(1 + cos² x) dx"
      ],
      a: 3,
      why: "f′ = cos x olduğu için integrand √(1 + cos² x). Birinci şık f′ = cos x yerine sin x kullanmıştır; ikinci şık kökü atlamış; üçüncü şık cos x'in karesini almamıştır."
    },
    {
      q: "Bir yürüyüş patikası y = x² eğrisi (0 ≤ x ≤ 1, birim km) olarak modelleniyor. Patikanın uzunluğu yaklaşık kaç km'dir? (Başlangıç ile bitiş arasındaki kuş uçuşu uzaklık √2 ≈ 1,414 km.)",
      opts: [
        "1,000",
        "1,414",
        "1,479",
        "2,236"
      ],
      a: 2,
      why: "L = ∫₀¹ √(1 + 4x²) dx ≈ 1,479. Yay uzunluğu kirişten (1,414) uzundur, 1,414 yalnızca kuş uçuşu mesafedir. 1,000 yatay izdüşüm, 2,236 ise integrandın x = 1'deki değeridir."
    },
    {
      q: "Bir parçacığın düzlemdeki süratı s(t) (m/s) bazı anlarda ölçüldü. Yamuk toplamıyla t = 0'dan 4'e alınan yolu tahmin edin.",
      opts: [
        "6 m",
        "9 m",
        "18 m",
        "4,5 m"
      ],
      a: 1,
      fig: {
        type: "table",
        head: [
          "t (s)",
          "0",
          "2",
          "4"
        ],
        rows: [
          [
            "s(t) (m/s)",
            "1",
            "3",
            "2"
          ]
        ]
      },
      why: "Alınan yol ∫₀⁴ s(t) dt. Yamuklar: 2·(1+3)/2 + 2·(3+2)/2 = 4 + 5 = 9 m. 18, yamuklarda 2'ye bölmeyi unutmaktır; 6 ise değerlerin toplamıdır."
    },
    {
      q: "y = (3/4)x doğrusunun 0 ≤ x ≤ 8 arasındaki yay uzunluğu kaçtır?",
      opts: [
        "10",
        "8",
        "6",
        "14"
      ],
      a: 0,
      why: "f′ = 3/4, √(1 + 9/16) = 5/4 ve L = 8 · 5/4 = 10 (3-4-5'in büyütülmüşü: yatay 8, dikey 6, hipotenüs 10). 14 = 8 + 6 yatay ve dikey uzunluğu toplamak; 8 yalnızca yatay izdüşümdür."
    }
  ]
};
